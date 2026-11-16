var e=`---
id: course-program-linear-algebra
title: "Program Linear Algebra: Small Algorithms, Explicit Invariants"
level: undergraduate
estimated_minutes: 720
license: CC BY-SA 4.0
---

# Program Linear Algebra: Small Algorithms, Explicit Invariants

<!-- euler-course-route -->

## Current course route

Use the [course page](/courses/atlas-program-linear-algebra/) for its present preparation and available study steps. This Outline keeps its original explanations and exercises while a complete primary-book syllabus is being assigned.

This course implements a deliberately small linear-algebra core in dependency-free JavaScript. The goal is not to replace optimized numerical libraries. It is to expose representation, invariants, complexity, rounding hazards, and tests so a future library call has mathematical meaning.

You should know vectors, matrices, elimination, orthogonality, and eigenvectors, plus arrays, loops, functions, and exceptions. Every routine here uses real dense matrices stored as row arrays. Production work needs richer data types, sparse storage, complex arithmetic, hardware kernels, and extensively reviewed libraries.

## Entry diagnostic and 12-hour course route

Work these on paper first:

1. Is \\(\\begin{pmatrix}1&2\\\\2&4\\end{pmatrix}\\) invertible? Give a certificate.
2. Compute \\((1,2,-1)\\mathbin{\\cdot}(3,0,4)\\).
3. State the shapes of \\(AB\\) when \\(A\\) is \\(m\\times n\\) and \\(B\\) is
   \\(n\\times p\\).
4. Why can a small residual fail to imply a small solution error?
5. What property distinguishes an orthogonal matrix \\(Q\\)?
6. Give one condition under which power iteration can fail to choose a limiting
   direction.

**Answers and repair.** The matrix is singular because its rows are dependent
and its determinant is zero; the dot product is \\(-1\\); \\(AB\\) is \\(m\\times p\\);
ill-conditioning can amplify a small backward error; \\(Q^{\\mathsf T}Q=I\\); and
failure can occur with tied dominant eigenvalue magnitudes or a starting vector
with no component in a dominant eigendirection. Review the standard linear
algebra course if Questions 1–3 are difficult. Use the route below if Questions
4–6 are unfamiliar; those are central numerical ideas, not optional details.

| Hours | Work | Evidence |
| --- | --- | --- |
| 1–2 | Module 1 and [problem, representation, algorithm](#/item/book-matrix-computation-applications?chapter=problem-representation-algorithm) | written contracts and failing boundary tests |
| 3–5 | Solver code plus [floating point and factorization](#/item/book-matrix-computation-applications?chapter=floating-point-and-factorization) | manufactured solution, residual, and scaling experiment |
| 6–8 | QR and least squares plus [QR, least squares, and SVD](#/item/book-matrix-computation-applications?chapter=qr-least-squares-svd) | reconstruction and orthogonality error table |
| 9–10 | Power iteration plus [eigenvalue computations](#/item/book-matrix-computation-applications?chapter=eigenvalue-computations) | Rayleigh quotient, residual history, and a failed case |
| 11–12 | Modules 3–5 and capstone | invariant argument, complexity audit, property tests, and boundary statement |

At every stage, compare an exact mathematical object, its floating-point
representation, and the evidence the routine actually returns.

## Module 1 — Make the representation a contract

A matrix is an array of equal-length rows. Silent ragged arrays turn dimension mistakes into \`undefined\` and then $NaN$, far from the source. Validate boundaries once and keep internal loops simple.

Our contract is:

- matrices are nonempty, rectangular, and contain finite numbers;
- vectors contain finite numbers;
- operations do not mutate caller-owned inputs;
- dimension mismatches throw before arithmetic;
- algorithms report singular or rank-deficient cases rather than divide by a tiny number unnoticed.

## Module 2 — One inspectable implementation

The following block runs in a browser console or Node without packages.

\`\`\`js
function assertVector(vector, name = "vector") {
  if (!Array.isArray(vector) || vector.length === 0 || !vector.every(Number.isFinite)) {
    throw new TypeError(\`\${name} must be a nonempty array of finite numbers\`);
  }
}

function shape(matrix, name = "matrix") {
  if (!Array.isArray(matrix) || matrix.length === 0 || !Array.isArray(matrix[0])) {
    throw new TypeError(\`\${name} must be a nonempty rectangular matrix\`);
  }
  const columns = matrix[0].length;
  if (columns === 0 || !matrix.every(
    (row) => Array.isArray(row) && row.length === columns && row.every(Number.isFinite),
  )) {
    throw new TypeError(\`\${name} must be a nonempty rectangular matrix of finite numbers\`);
  }
  return { rows: matrix.length, columns };
}

function dot(left, right) {
  assertVector(left, "left vector");
  assertVector(right, "right vector");
  if (left.length !== right.length) throw new RangeError("dot-product dimensions differ");
  let total = 0;
  for (let index = 0; index < left.length; index += 1) total += left[index] * right[index];
  return total;
}

function norm(vector) {
  assertVector(vector);
  let scale = 0;
  let sumSquares = 1;
  for (const value of vector) {
    const magnitude = Math.abs(value);
    if (magnitude === 0) continue;
    if (scale < magnitude) {
      sumSquares = 1 + sumSquares * (scale / magnitude) ** 2;
      scale = magnitude;
    } else {
      sumSquares += (magnitude / scale) ** 2;
    }
  }
  return scale === 0 ? 0 : scale * Math.sqrt(sumSquares);
}

function matVec(matrix, vector) {
  const dimensions = shape(matrix);
  assertVector(vector);
  if (dimensions.columns !== vector.length) throw new RangeError("matrix/vector dimensions differ");
  return matrix.map((row) => dot(row, vector));
}

function transpose(matrix) {
  const { rows, columns } = shape(matrix);
  return Array.from({ length: columns }, (_, column) =>
    Array.from({ length: rows }, (_, row) => matrix[row][column]));
}

function matMul(left, right) {
  const leftShape = shape(left, "left matrix");
  const rightShape = shape(right, "right matrix");
  if (leftShape.columns !== rightShape.rows) throw new RangeError("matrix dimensions differ");
  const rightColumns = transpose(right);
  return left.map((row) => rightColumns.map((column) => dot(row, column)));
}

function solveUpper(upper, rightHandSide, relativeTolerance = 1e-12) {
  const { rows, columns } = shape(upper, "upper matrix");
  assertVector(rightHandSide, "right-hand side");
  if (rows !== columns || rightHandSide.length !== rows) throw new RangeError("upper solve dimensions differ");
  const scale = Math.max(...upper.flat().map((value) => Math.abs(value)));
  const threshold = relativeTolerance * Math.max(1, scale);
  const solution = new Array(rows).fill(0);
  for (let row = rows - 1; row >= 0; row -= 1) {
    const pivot = upper[row][row];
    if (Math.abs(pivot) <= threshold) throw new RangeError("matrix is singular at the requested tolerance");
    let remainder = rightHandSide[row];
    for (let column = row + 1; column < rows; column += 1) {
      remainder -= upper[row][column] * solution[column];
    }
    solution[row] = remainder / pivot;
  }
  return solution;
}

function solveWithPivoting(matrix, rightHandSide, relativeTolerance = 1e-12) {
  const { rows, columns } = shape(matrix);
  assertVector(rightHandSide, "right-hand side");
  if (rows !== columns || rightHandSide.length !== rows) throw new RangeError("solve needs square compatible inputs");
  const augmented = matrix.map((row, index) => [...row, rightHandSide[index]]);
  const scale = Math.max(...matrix.flat().map((value) => Math.abs(value)));
  const threshold = relativeTolerance * Math.max(1, scale);

  for (let pivotColumn = 0; pivotColumn < rows; pivotColumn += 1) {
    let pivotRow = pivotColumn;
    for (let row = pivotColumn + 1; row < rows; row += 1) {
      if (Math.abs(augmented[row][pivotColumn]) > Math.abs(augmented[pivotRow][pivotColumn])) {
        pivotRow = row;
      }
    }
    if (Math.abs(augmented[pivotRow][pivotColumn]) <= threshold) {
      throw new RangeError("matrix is singular or unresolved at the requested tolerance");
    }
    [augmented[pivotColumn], augmented[pivotRow]] = [augmented[pivotRow], augmented[pivotColumn]];
    for (let row = pivotColumn + 1; row < rows; row += 1) {
      const factor = augmented[row][pivotColumn] / augmented[pivotColumn][pivotColumn];
      augmented[row][pivotColumn] = 0;
      for (let column = pivotColumn + 1; column <= rows; column += 1) {
        augmented[row][column] -= factor * augmented[pivotColumn][column];
      }
    }
  }

  const upper = augmented.map((row) => row.slice(0, rows));
  const transformedRight = augmented.map((row) => row[rows]);
  return solveUpper(upper, transformedRight, relativeTolerance);
}

function modifiedGramSchmidt(matrix, relativeTolerance = 1e-12) {
  const { rows, columns } = shape(matrix);
  if (rows < columns) throw new RangeError("thin QR requires rows at least columns");
  const sourceColumns = transpose(matrix);
  const qColumns = [];
  const upper = Array.from({ length: columns }, () => new Array(columns).fill(0));
  const scale = Math.max(...sourceColumns.map(norm));
  const threshold = relativeTolerance * Math.max(1, scale);

  for (let column = 0; column < columns; column += 1) {
    let remainder = [...sourceColumns[column]];
    for (let previous = 0; previous < column; previous += 1) {
      const coefficient = dot(qColumns[previous], remainder);
      upper[previous][column] = coefficient;
      remainder = remainder.map((value, row) => value - coefficient * qColumns[previous][row]);
    }
    const length = norm(remainder);
    if (length <= threshold) throw new RangeError("columns are rank deficient at the requested tolerance");
    upper[column][column] = length;
    qColumns.push(remainder.map((value) => value / length));
  }

  const orthonormal = Array.from({ length: rows }, (_, row) =>
    qColumns.map((column) => column[row]));
  return { orthonormal, upper };
}

function leastSquares(matrix, rightHandSide) {
  const { rows } = shape(matrix);
  assertVector(rightHandSide, "right-hand side");
  if (rightHandSide.length !== rows) throw new RangeError("least-squares dimensions differ");
  const { orthonormal, upper } = modifiedGramSchmidt(matrix);
  const qTransposeB = transpose(orthonormal).map((column) => dot(column, rightHandSide));
  return solveUpper(upper, qTransposeB);
}

function powerIteration(matrix, initial, steps = 40) {
  const { rows, columns } = shape(matrix);
  assertVector(initial, "initial vector");
  if (rows !== columns || initial.length !== rows) throw new RangeError("power-iteration dimensions differ");
  let length = norm(initial);
  if (length === 0) throw new RangeError("initial vector must be nonzero");
  let vector = initial.map((value) => value / length);
  const safeSteps = Math.max(0, Math.floor(steps));
  for (let step = 0; step < safeSteps; step += 1) {
    const image = matVec(matrix, vector);
    length = norm(image);
    if (length === 0) throw new RangeError("iteration entered the kernel");
    vector = image.map((value) => value / length);
  }
  const image = matVec(matrix, vector);
  const eigenvalue = dot(vector, image);
  const residual = norm(image.map((value, index) => value - eigenvalue * vector[index]));
  return { eigenvalue, vector, residual };
}

function maximumDifference(left, right) {
  const leftShape = shape(left, "left comparison");
  const rightShape = shape(right, "right comparison");
  if (leftShape.rows !== rightShape.rows || leftShape.columns !== rightShape.columns) {
    throw new RangeError("comparison dimensions differ");
  }
  let maximum = 0;
  for (let row = 0; row < leftShape.rows; row += 1) {
    for (let column = 0; column < leftShape.columns; column += 1) {
      maximum = Math.max(maximum, Math.abs(left[row][column] - right[row][column]));
    }
  }
  return maximum;
}

// Exact and property-oriented checks.
const coefficientMatrix = [[4, 2], [1, 3]];
const recovered = solveWithPivoting(coefficientMatrix, [0, -5]);
if (norm(recovered.map((value, index) => value - [1, -2][index])) > 1e-12) {
  throw new Error("pivoted solve failed its manufactured solution");
}

const design = [[1, 1], [1, 2], [1, 3]];
const qr = modifiedGramSchmidt(design);
if (maximumDifference(matMul(qr.orthonormal, qr.upper), design) > 1e-12) {
  throw new Error("QR reconstruction failed");
}
const qtq = matMul(transpose(qr.orthonormal), qr.orthonormal);
if (maximumDifference(qtq, [[1, 0], [0, 1]]) > 1e-12) {
  throw new Error("Q lost orthogonality");
}

const fit = leastSquares(design, [1, 2, 2]);
if (Math.abs(fit[0] - 2 / 3) > 1e-12 || Math.abs(fit[1] - 1 / 2) > 1e-12) {
  throw new Error("least-squares fit failed");
}

const spectral = powerIteration([[2, 1], [1, 2]], [1, 0], 30);
if (Math.abs(spectral.eigenvalue - 3) > 1e-10 || spectral.residual > 1e-9) {
  throw new Error("power iteration failed its symmetric benchmark");
}

const testMatrix = [[1, 2], [3, 4]];
const u = [2, -1];
const v = [0.5, 3];
const sumImage = matVec(testMatrix, u.map((value, index) => value + v[index]));
const imageSum = matVec(testMatrix, u).map((value, index) => value + matVec(testMatrix, v)[index]);
if (norm(sumImage.map((value, index) => value - imageSum[index])) > 1e-12) {
  throw new Error("matrix action violated additivity");
}
\`\`\`

## Module 3 — What the code proves and does not prove

The solve loop maintains an invariant: after column $k$, rows below the pivot have zero in processed columns, and the augmented system has the same solution as before because swaps and row replacements are reversible. Partial pivoting reduces dangerous division by small available entries. The code is still a teaching implementation: its one global tolerance is a policy, it does not expose growth factors, and allocating an augmented matrix wastes memory compared with an in-place LU factorization plus pivot vector.

Modified Gram–Schmidt maintains orthonormal completed columns and a remainder orthogonalized against them. In exact arithmetic $A=QR$. Floating-point orthogonality can degrade, so the reconstruction and $QᵀQ\\approx I$ tests are both necessary. Householder QR is the usual production default.

Power iteration returns evidence: a Rayleigh quotient and residual. It does not promise convergence. The theorem needs a dominant eigenvalue in magnitude, a suitable starting component, and sufficient separation. For nonnormal matrices, residual and eigenvalue conditioning require further analysis.

## Module 4 — Complexity and allocation audit

For an $n\\times n$ dense matrix:

- matrix–vector multiplication costs order $n^{2}$ arithmetic and stores order $n^{2}$ numbers;
- elimination costs order $n^{3}$ arithmetic;
- a triangular solve costs order $n^{2}$;
- thin QR of $m\\times n$, $m\\ge n$, costs order $mn^{2}$;
- each power step costs one matrix–vector product.

The implementation allocates new arrays for clarity. Production kernels reuse buffers, block work for cache, vectorize, and may execute in parallel. Sparse matrices should not be converted to dense arrays; complexity must be stated in terms of nonzeros and fill-in.

## Module 5 — Falsification experiments

1. Change the solve matrix to $\\begin{pmatrix}1 & 1 \\\\ 1 & 1+\\varepsilon \\end{pmatrix}$ for decreasing $\\varepsilon$. Manufacture $b$ from a known $x$, then perturb $b$. Watch forward error grow before residual becomes large.
2. Feed nearly dependent columns to QR. Compare reconstruction error with orthogonality error. Implement classical Gram–Schmidt and observe the difference.
3. Run power iteration on $\\operatorname{diag}(2,-2)$, a rotation, and a Jordan block. Record whether directions converge, alternate, rotate, or drift.
4. Scale every entry of a nonsingular matrix by $10^{-10}$. A scale-aware tolerance should not change its exact rank merely because units changed. Audit where the teaching code’s $\\max(1,scale)$ policy deliberately introduces an absolute floor.
5. Inject $NaN$, a ragged row, an empty vector, and a dimension mismatch. Each should fail at the boundary with a useful message.

## Exercises with worked answers

### 1. Why copy rows?

Why does the solver construct \`augmented\` with spread syntax?

**Answer.** Elimination mutates its working rows. Copying keeps the caller’s matrix and right-hand side unchanged, making tests reproducible and avoiding surprising shared-state bugs.

### 2. Find an unstated policy

What does $relativeTolerance * \\max(1,scale)$ imply for a matrix whose entries are all $10^{-15}$?

**Answer.** It applies an absolute floor near $10^{-12}$ and can label a perfectly nonsingular scaled matrix unresolved. That may be appropriate for fixed physical units but is not scale invariant. A robust API separates relative and absolute tolerances and documents units.

### 3. Test an invariant

Give a property test for \`matMul\` besides one numeric example.

**Answer.** Generate compatible small matrices and check $(AB)x\\approx A(Bx)$ within an error bound scaled by norms and machine precision. This connects matrix multiplication to composition and catches index transpositions.

### 4. Diagnose power iteration

The residual is tiny but the returned eigenvalue changes greatly after a perturbation of $10^{-8}$. Is the code necessarily wrong?

**Answer.** No. A tiny residual says the pair fits the current matrix. A nonnormal or nearly defective eigenproblem can be intrinsically sensitive. Compare left/right eigenvectors or pseudospectral conditioning before blaming implementation.

### 5. Capstone

Extend the module with one of LU factor reuse, Householder QR, conjugate gradients for symmetric positive-definite operators, or a tiny SVD benchmark. Provide the mathematical invariant, complexity, input validation, manufactured tests, one ill-conditioned counterexample, and a residual table.

**Solution standard.** A successful project distinguishes exact identities from tolerance checks, avoids hidden input mutation, validates on hand-solvable and randomized properties, reports failure modes, and does not market teaching code as production numerical software.

### Feedback map

- Dimension or mutation failure: repair the representation contract and add a
  test that fails before arithmetic begins.
- Correct residual but wrong manufactured solution: examine conditioning and
  report forward and backward error separately.
- QR reconstruction passes but orthogonality fails: use a more stable
  orthogonalization or reorthogonalize, then record both errors.
- Power iteration oscillates: inspect eigenvalue magnitudes and the starting
  vector before increasing iteration count.
- A tolerance changes the answer after harmless unit scaling: separate absolute
  and relative tolerances and document the scale policy.

## Continuation

Next study floating-point error analysis, BLAS-style interfaces, sparse formats, Krylov methods, randomized algorithms, automatic differentiation through factorizations, GPU kernels, and verified enclosures. Use mature numerical libraries in consequential work only after auditing versions, interfaces, structure assumptions, and returned diagnostics under the project’s dependency policy.
`;export{e as default};