var e=`---
parent_id: book-numerical-mathematics-error-algorithms
chapter_id: eigenvalue-singular-problems
status: draft
title: "Eigenvalue, Singular-Value, and Rank Problems"
level: advanced-undergraduate
estimated_minutes: 185
license: CC BY-SA 4.0
---

# Eigenvalue, Singular-Value, and Rank Problems

## Purpose and local prerequisites

Solving \\(Ax=b\\) asks how a matrix acts on one right-hand side. Spectral problems
ask for directions that the matrix preserves, directions it amplifies, or
low-dimensional structure that summarizes the action. These questions are
related but not interchangeable.

This chapter assumes matrix multiplication, norms, orthogonality, eigenvalues,
and the direct/iterative linear algebra chapter. Its central habit is to attach
every computed spectral object to a residual, a separation scale, and the
structure of the matrix.

## Three different targets

**Definition 20.1 (Eigenpair).** For a square matrix $A$, an eigenpair $(\\lambda,v)$ satisfies

\\(A v=\\lambda v\\), with \\(v\\ne 0\\).

For a real nonsymmetric matrix, eigenvalues and eigenvectors may be complex,
eigenvectors need not be orthogonal, and a matrix may not possess a complete
eigenvector basis.

**Definition 20.2 (Singular triplet).** For $A\\in\\mathbb R^{m\\times n}$, a real singular triplet $(\\sigma,u,v)$ satisfies

\\(A v=\\sigma u\\), \\(A^{\\mathsf T} u=\\sigma v\\), with \\(\\lVert u\\rVert_2=\\lVert v\\rVert_2=1\\), \\(\\sigma\\ge 0\\).

Every real matrix has a singular value decomposition

\\(A=U \\Sigma V^{\\mathsf T}\\)

with orthogonal \\(U,V\\) in the full square form. Singular values measure Euclidean
stretch and are the square roots of the eigenvalues of \\(A^{\\mathsf T} A\\), but explicitly
forming \\(A^{\\mathsf T} A\\) squares the 2-norm condition number and can lose small singular
information.

Numerical rank is not simply the count of nonzero stored singular values. It is
a decision relative to a perturbation scale. If \\(\\sigma_r\\) and \\(\\sigma_{r+1}\\) are
both comparable to data or arithmetic uncertainty, a sharp rank declaration is
not supported.

## Residuals and backward error

For a real matrix \\(A\\), a real unit vector \\(q\\), and a real scalar \\(\\theta\\), define

\\(r=Aq-\\theta q\\).

This residual is exactly the perturbation needed in one direction. Set
\\(E=-r q^{\\mathsf T}\\). Then \\((A+E)q=\\theta q\\) and \\(\\lVert E\\rVert_2=\\lVert r\\rVert_2\\). Thus a small residual
means \\((\\theta,q)\\) is an exact eigenpair of a nearby unstructured matrix.

That is a backward-error statement. Forward accuracy also depends on spectral
sensitivity. A tiny residual can coexist with an inaccurate eigenvector when
nearby eigenvalues make the desired direction poorly determined.

For a candidate singular triplet, use two residuals:

\\(r_u=Av-\\sigma u\\), \\(r_v=A^{\\mathsf T} u-\\sigma v\\).

Checking only \\(Av \\approx \\sigma u\\) misses inconsistency in the adjoint
relation. Orthogonality loss among multiple computed vectors is another
independent diagnostic.

## Symmetric matrices: residual-to-spectrum theorem

Real symmetric matrices have an orthonormal eigenbasis and real eigenvalues.
For a unit vector \\(q\\), its Rayleigh quotient is

\\(\\rho(q)=q^{\\mathsf T} A q\\).

It minimizes \\(\\lVert Aq-\\theta q\\rVert_2\\) over scalars \\(\\theta\\), because differentiating
the squared norm with respect to \\(\\theta\\) gives \\(\\theta=q^{\\mathsf T} A q\\).

**Theorem 1 (Symmetric residual inclusion).** Let \\(A=A^{\\mathsf T}\\), \\(\\lVert q\\rVert_2=1\\),
\\(\\rho=q^{\\mathsf T} A q\\), and \\(r=Aq-\\rho q\\). Then some eigenvalue \\(\\lambda_i\\) satisfies

\\(\\lvert \\lambda_i-\\rho\\rvert\\le \\lVert r\\rVert_2\\).

**Proof.** Expand \\(q=\\sum_i \\alpha_i v_i\\) in an orthonormal eigenbasis. Then

\\(r=\\sum_i \\alpha_i(\\lambda_i-\\rho)v_i\\),

so

\\(\\lVert r\\rVert_2^{2}=\\sum_i \\lvert \\alpha_i\\rvert^{2} \\lvert \\lambda_i-\\rho\\rvert^{2}\\).

If every eigenvalue were farther from \\(\\rho\\) than \\(\\lVert r\\rVert_2\\), the right side
would exceed \\(\\lVert r\\rVert_2^{2} \\sum_i\\lvert \\alpha_i\\rvert^{2}=\\lVert r\\rVert_2^{2}\\), a contradiction.

This certifies proximity to **some** eigenvalue. Identifying which eigenvalue or
eigenvector needs separation information.

**Angle bound.** Suppose a target invariant subspace contains all eigenvectors
whose eigenvalues lie in a selected cluster, and every eigenvalue outside the
cluster is at least \\(\\delta>0\\) from \\(\\rho\\). Then the component of \\(q\\) outside the
target subspace has norm at most \\(\\lVert r\\rVert_2/\\delta\\). This follows from the same
spectral expansion, retaining only outside-cluster terms. If \\(\\delta\\) is small,
an individual eigenvector is intrinsically hard to identify even when the
cluster subspace is accurate.

### Worked symmetric example

**Example 20.1 (A symmetric residual and angle).** Take real $\\epsilon$ with $|\\epsilon|\\le1$.

Let \\(A=\\operatorname{diag}(-10,2,10)\\) and

\\(q=(0,\\sqrt{1-\\epsilon^{2}},\\epsilon)^{\\mathsf T}\\).

Then \\(\\rho=2(1-\\epsilon^{2})+10\\epsilon^{2}=2+8\\epsilon^{2}\\). The residual has components
approximately \\(-8\\epsilon^{2}\\) in the second direction and \\(8\\epsilon\\) in the third,
so for small \\(\\epsilon\\), \\(\\lVert r\\rVert_2\\) is about \\(8\\lvert \\epsilon\\rvert\\). The nearest other
eigenvalue is ten, separated by almost eight, and the angle bound recovers an
outside component of order \\(\\lvert \\epsilon\\rvert\\). The eigenvalue error is order
\\(\\epsilon^{2}\\), while the eigenvector error is order \\(\\epsilon\\): Rayleigh quotients
near a simple symmetric eigenvector are second-order accurate in angle.

## Power iteration and its hypotheses

Power iteration normalizes repeated products:

\\(y_{k+1}=Aq_k\\), \\(q_{k+1}=y_{k+1}/\\lVert y_{k+1}\\rVert_2\\).

Assume \\(A\\) is diagonalizable with eigenvalues ordered by magnitude,
\\(\\lvert \\lambda_1\\rvert>\\lvert \\lambda_2\\rvert\\ge \\ldots\\), and the initial vector has a nonzero component in
the \\(\\lambda_1\\) eigenvector direction. In exact arithmetic, the nonleading
components decay relative to the leading one at a rate governed by
\\(\\lvert \\lambda_2/\\lambda_1\\rvert^k\\), modified by eigenvector conditioning for a nonnormal
matrix.

The hypotheses explain common failures:

- equal dominant magnitudes can produce a persistent subspace or oscillation;
- a start orthogonal to the dominant symmetric eigenvector never acquires that
  component in exact arithmetic;
- a small magnitude gap gives slow convergence;
- nonnormal eigenvectors can amplify transient components;
- normalization prevents overflow in the vector norm but does not by itself
  certify the eigenvalue.

Use a Rayleigh quotient and residual to stop. Change in successive estimates can
be tiny because the iteration stagnated, not because the residual is small.

### Shift-and-invert

To target eigenvalues near a shift \\(\\mu\\), apply an iterative method to

\\((A-\\mu I)^{-1}\\).

Its eigenvalues are \\(1/(\\lambda_i-\\mu)\\), so eigenvalues closest to \\(\\mu\\) become
dominant in magnitude. Each step requires a linear solve. If \\(\\mu\\) is near an
eigenvalue, the shifted system is ill conditioned; a stable factorization and
accurate residual checks are essential. Forming an explicit inverse is neither
necessary nor desirable.

For symmetric \\(A\\), Rayleigh quotient iteration updates the shift and can converge
very rapidly near a simple eigenpair. Its local rate is not a global guarantee;
the basin and solve accuracy matter.

## Subspaces, deflation, and orthogonality

Computing one vector at a time and subtracting it naively can contaminate later
eigenpairs. Block iteration carries a subspace, multiplies by \\(A\\), and
reorthogonalizes. The Rayleigh–Ritz procedure projects \\(A\\) onto the subspace,
solves the small spectral problem, and lifts the Ritz vectors.

For symmetric matrices, orthogonal projection preserves symmetry and supports
residual-based bounds. In finite precision, loss of orthogonality can create
duplicate “ghost” Ritz values. Monitor \\(\\lVert Q^TQ-I\\rVert\\) and reorthogonalize when the
algorithmic analysis requires it.

Deflation changes the operator to remove a found component. It must preserve
the structure the next theorem assumes. An approximate nonsymmetric deflation
can move other eigenvalues dramatically.

## Nonnormal sensitivity

If \\(A=V \\Lambda V^{-1}\\) is diagonalizable, the Bauer–Fike theorem states that
every eigenvalue \\(\\mu\\) of \\(A+E\\) lies within

\\(\\kappa_2(V)\\lVert E\\rVert_2\\)

of some eigenvalue of \\(A\\). For a normal matrix, \\(V\\) can be unitary and the
factor is one. For a highly nonnormal matrix, \\(\\kappa(V)\\) can be enormous.

### Worked sensitivity example

**Example 20.2 (Nonnormal eigenvalue sensitivity).**

Consider

\\(A=\\begin{pmatrix}1&K\\\\0&2\\end{pmatrix}\\).

Its eigenvalues are one and two for every \\(K\\), yet the eigenvectors become
nearly parallel as \\(K\\) grows. Perturb the lower-left entry by \\(\\epsilon\\):

\\(A_e=\\begin{pmatrix}1&K\\\\\\epsilon&2\\end{pmatrix}\\).

The characteristic equation is

\\((1-\\lambda)(2-\\lambda)-K \\epsilon=0\\).

The roots are $(3\\pm\\sqrt{1+4K\\epsilon})/2$. For $K=10^6$ and $\\epsilon=10^{-6}$ they become $(3\\pm\\sqrt5)/2$, about $0.382$ and $2.618$, instead of one and two, although the matrix perturbation has 2-norm $10^{-6}$. Even a tiny $\\epsilon$ can therefore move the roots substantially when $K\\epsilon$ is not tiny. Eigenvalues alone did not reveal this vulnerability. Plotting or bounding
the resolvent \\(\\lVert (zI-A)^{-1}\\rVert\\) gives pseudospectral information about where
eigenvalues of nearby matrices may lie.

Do not transfer symmetric residual conclusions to a nonnormal problem without
the missing conditioning factor.

## Singular values and low-rank approximation

Order singular values \\(\\sigma_1\\ge \\ldots\\ge \\sigma_p\\ge 0\\), where
\\(p=\\min(m,n)\\). The operator 2-norm is \\(\\sigma_1\\); when \\(A\\) has full column rank,
the least-squares sensitivity involves \\(\\sigma_{\\min}\\).

Truncate the SVD after \\(k\\) terms:

\\(A_k=\\sum_{i=1}^k \\sigma_i u_i v_i^{\\mathsf T}\\).

**Theorem 2 (Eckart–Young–Mirsky, stated forms).** For any matrix \\(B\\) of rank at
most \\(k\\), where \\(k\\) is an integer satisfying \\(0\\le k<p\\),

\\(\\lVert A-B\\rVert_2\\ge \\sigma_{k+1}\\)

and

\\(\\lVert A-B\\rVert_F\\ge \\sqrt{\\sum_{i>k} \\sigma_i^{2}}\\).

The truncated SVD \\(A_k\\) attains equality in both norms.

**Reason for the 2-norm lower bound.** The nullspace of a rank-\\(k\\) map \\(B\\)
intersects the span of the first \\(k+1\\) right singular vectors in a nonzero unit
vector \\(x\\). Then \\(Bx=0\\) and
\\(\\lVert (A-B)x\\rVert=\\lVert Ax\\rVert\\ge \\sigma_{k+1}\\). Direct orthogonality computes the norm of
\\(A-A_k\\) and shows that the bound is attained. The Frobenius optimality claim needs a lower bound for every rank-constrained competitor, supplied below; orthogonality directly computes the attained tail error.

The theorem chooses the best rank under a specified matrix norm. It does not
say a rank-\\(k\\) approximation preserves every downstream quantity, sign,
sparsity pattern, or constraint.

### Worked rank decision

**Example 20.3 (Rank at a stated uncertainty scale).**

Suppose singular values are \\(10, 1, 10^{-5}, 8\\times10^{-6}\\) and the matrix entries are
known only to an operator-norm uncertainty of \\(2\\times10^{-5}\\). The last two directions
are smaller than the uncertainty scale. Reporting exact algebraic rank four
from stored nonzero values overstates the data. A defensible statement is that
rank two is stable at the declared scale, while finer rank is unresolved.

Weyl's singular-value perturbation bound,

\\(\\lvert \\sigma_i(A+E)-\\sigma_i(A)\\rvert\\le \\lVert E\\rVert_2\\),

supports that claim. A threshold must be tied to \\(\\lVert E\\rVert\\), not chosen solely
because a plotting package displays a gap.

## Algorithm choices and stopping evidence

- Dense symmetric problems often use reductions to tridiagonal form followed
  by structured eigensolvers.
- Dense SVD algorithms reduce to bidiagonal form rather than forming \\(A^{\\mathsf T} A\\).
- Large sparse problems use Krylov subspaces and request a few extreme or
  shifted spectral quantities.
- Randomized range finding can cheaply suggest a low-rank subspace, but its
  probability, oversampling, power steps, and independent residual check belong
  in the claim.

For each returned object record the residual norm, vector normalization,
orthogonality defect, requested-versus-found multiplicity, spectral gap or
cluster, iteration cap, and arithmetic scale. A library success flag is not a
mathematical certificate.

## Failure diagnostics

- Forming \\(A^{\\mathsf T} A\\) to find tiny singular values and ignoring squared condition.
- Declaring rank from equality with zero in floating point.
- Using eigenvalues to measure Euclidean stretch for a nonnormal matrix.
- Reporting a small symmetric residual without the gap needed for an
  eigenvector claim.
- Stopping power iteration because successive Rayleigh quotients agree while
  the residual remains large.
- Deflating with an inaccurate vector and treating later eigenpairs as
  independent evidence.
- Comparing singular thresholds before scaling units or quantifying input
  uncertainty.

## Proofs for the sensitivity and optimality claims

The symmetric spectral theorem and existence of the SVD are prerequisite linear algebra results here. The next arguments make the additional sensitivity claims explicit, rather than inferring them from computed spectra.

**Theorem 3 (Bauer–Fike).** Suppose $A=V\\Lambda V^{-1}$ over $\\mathbb C$, with nonsingular $V$ and diagonal $\\Lambda$. For any perturbation $E$, each eigenvalue $\\mu$ of $A+E$ satisfies
$$\\min_i|\\mu-\\lambda_i|\\le\\kappa_2(V)\\|E\\|_2.$$

*Proof.* If $\\mu$ is already an eigenvalue of $A$, the conclusion is immediate. Otherwise choose an eigenvector $x\\ne0$ of $A+E$. The equation $(\\mu I-A)x=Ex$ gives
$$x=V(\\mu I-\\Lambda)^{-1}V^{-1}Ex.$$
Taking norms and cancelling $\\|x\\|_2$ yields
$$1\\le\\|V\\|_2\\|V^{-1}\\|_2\\|E\\|_2
\\max_i|\\mu-\\lambda_i|^{-1}.$$
Multiplying by the positive minimum distance proves the result. ∎

The bound is a union of disks around the old eigenvalues. It does not match each new eigenvalue to a unique old one when disks overlap. Defective matrices have no such invertible diagonalizing $V$ and require another sensitivity analysis. A real matrix can have complex eigenvalues, so the complex formulation is not optional for a general nonsymmetric problem.

**Proposition 4 (Frobenius optimality in Theorem 2).** Every matrix $B$ of rank at most $k$ satisfies $\\|A-B\\|_F^2\\ge\\sum_{i>k}\\sigma_i^2$.

*Proof.* Let $P$ be the orthogonal projection onto the range of $B$, of dimension $r\\le k$. The two matrix terms $(I-P)A$ and $PA-B$ have orthogonal column components, so
$$\\|A-B\\|_F^2=\\|(I-P)A\\|_F^2+\\|PA-B\\|_F^2
\\ge\\|A\\|_F^2-\\|PA\\|_F^2.$$
Using the SVD gives $\\|PA\\|_F^2=\\sum_i\\sigma_i^2w_i$, where $w_i=\\|Pu_i\\|_2^2$. Each weight lies in $[0,1]$ and their sum is at most $r$, since the trace of $P$ is $r$; extend the left singular vectors to a full orthonormal basis if needed. For $k>0$, the decreasing order of $\\sigma_i^2$ gives
$$
\\sum_i\\sigma_i^2w_i
\\le\\sum_{i\\le k}\\sigma_i^2w_i+
\\sigma_{k+1}^2\\sum_{i>k}w_i
\\le\\sum_{i\\le k}\\sigma_i^2.
$$
The final inequality follows from $\\sum_{i>k}w_i\\le\\sum_{i\\le k}(1-w_i)$ and $\\sigma_i^2\\ge\\sigma_{k+1}^2$ for $i\\le k$. For $k=0$, $B=0$ and the claim is immediate. Substitution gives the tail lower bound. The truncated SVD attains it by orthogonality of its omitted singular terms. ∎

This fills a logical gap that “unitary invariance” alone would leave: invariance computes a chosen approximation's error but does not by itself exclude every other rank-$k$ matrix. The best approximation need not be unique when singular values tie, and neither optimum automatically preserves positivity or sparsity.

**Theorem 5 (Weyl bound for singular values).** For every admissible index $i$,
$$|\\sigma_i(A+E)-\\sigma_i(A)|\\le\\|E\\|_2.$$

*Proof.* The SVD gives the variational formula
$$\\sigma_i(A)=\\min_{\\dim S=n-i+1}
\\max_{\\substack{x\\in S\\\\\\|x\\|_2=1}}\\|Ax\\|_2.$$
Indeed the span of right singular vectors $v_i,\\ldots,v_n$ attains the value $\\sigma_i$ (including zero singular directions when necessary). Every subspace of that dimension intersects the span of $v_1,\\ldots,v_i$ in a nonzero vector, whose normalized image has norm at least $\\sigma_i$. For every unit $x$,
$\\|(A+E)x\\|_2\\le\\|Ax\\|_2+\\|E\\|_2$.
Taking the maximum on each subspace and then the minimum gives
$\\sigma_i(A+E)\\le\\sigma_i(A)+\\|E\\|_2$.
Interchange $A$ and $A+E$ and use perturbation $-E$ for the reverse inequality. ∎

A numerical-rank statement must therefore state a tolerance scale and a decision convention. In the original rank example, singular values ten and one stay separated from zero under the stated perturbations; the last two can vary on the uncertainty scale. Calling rank two stable refers to that effective separation, not to a claim that every perturbed matrix has exact algebraic rank two.

## Reading spectral residuals without overclaiming

A symmetric residual locates some eigenvalue. An eigenvector angle needs separation from the unwanted spectrum. A cluster may be stable as a subspace even when individual vectors rotate almost freely inside it. For example, the identity matrix has every unit vector as an eigenvector; asking for one “correct” eigenvector is meaningless until an additional convention is supplied.

A singular triplet uses two residual equations because $Av=\\sigma u$ alone can be made true for many arbitrary $v$ by choosing $u$ and $\\sigma$ from its image. The adjoint relation tests whether that direction is stationary for the stretching problem. Multiple computed vectors also require an orthogonality diagnostic. A matrix with a tiny reconstruction residual but nonorthogonal factors is not automatically a valid SVD.

Power iteration's relative-mode proof is elementary under diagonalizability. Expand the initial vector in the eigenbasis, factor out $\\lambda_1^k$, and observe that all remaining coefficients contain $(\\lambda_i/\\lambda_1)^k$. The nonzero leading coefficient is indispensable. Sign changes for a negative dominant eigenvalue do not prevent convergence of its one-dimensional subspace, so compare subspaces or account for sign before interpreting vector differences.

Shift-and-invert replaces multiplication by a solve. Its residual contract must therefore include the inner linear solve, especially near an eigenvalue where the shifted matrix is sensitive. Choosing the shift exactly at an eigenvalue makes the inverse undefined. A failed factorization there is consistent with the mathematics, rather than evidence that an arbitrarily nearby inverse is inaccurate.

The normal-equations identity is also a warning about representation. Although singular values are square roots of eigenvalues of $A^{\\mathsf T}A$, explicitly forming that product rounds its entries and squares the condition number for full-column-rank $A$. A small singular direction can be lost before the eigensolver starts. Bidiagonal reduction works with the original matrix and preserves more of that information under its own rounding analysis.

## Practice with full solutions

### Exercise 1: Residual enclosure
<a id="eigenvalue-singular-problems-ex-1"></a>

Let \\(A=\\operatorname{diag}(2,5)\\) and
\\(q=(\\sqrt{3}/2,1/2)^{\\mathsf T}\\). Compute the Rayleigh quotient and residual norm, then
check the symmetric inclusion theorem.

<details>
<summary>Hint 1</summary>

**Hint.** Compute the weighted diagonal quotient.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Expand and square the two residual components.

</details>

<details>
<summary>Solution</summary>

**Solution.** The quotient is
\\(\\rho=2(3/4)+5(1/4)=11/4\\). The residual is
\\(((-3/4)\\sqrt{3}/2,(9/4)(1/2))^{\\mathsf T}=(-3\\sqrt{3}/8,9/8)^{\\mathsf T}\\), whose norm is
\\(\\sqrt{27/64+81/64}=3\\sqrt{3}/4\\), about \\(1.299\\). Distances from \\(\\rho=2.75\\) to the
eigenvalues are \\(0.75\\) and \\(2.25\\); the nearest distance \\(0.75\\) is indeed no
larger than the residual norm. The bound is valid but not necessarily sharp.

</details>

### Exercise 2: A power-method boundary
<a id="eigenvalue-singular-problems-ex-2"></a>

What happens when power iteration is applied to
\\(\\operatorname{diag}(2,-2)\\) from a vector with both components nonzero?

<details>
<summary>Hint 1</summary>

**Hint.** Compare eigenvalue magnitudes.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Normalization cannot remove an equal-magnitude alternating component.

</details>

<details>
<summary>Solution</summary>

**Solution.** Both eigenvalues have equal magnitude, so the strict dominant
magnitude hypothesis fails. Each multiplication scales the first component by
two and the second by negative two. After normalization their relative
magnitudes do not decay; the sign of the second alternates. The iteration does
not select one eigenvector. The invariant two-dimensional dominant subspace is
the whole space.

</details>

### Exercise 3: Best rank-one error
<a id="eigenvalue-singular-problems-ex-3"></a>

A matrix has singular values \\(7,3,1\\). What are the
best rank-one errors in operator and Frobenius norms?

<details>
<summary>Hint 1</summary>

**Hint.** Use the first omitted singular value.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** The Frobenius norm combines all omitted squares.

</details>

<details>
<summary>Solution</summary>

**Solution.** Truncating after the first singular term is optimal. The operator
error is \\(\\sigma_2=3\\). The Frobenius error is
\\(\\sqrt{\\sigma_2^{2}+\\sigma_3^{2}}=\\sqrt{10}\\). These are errors in matrix norms, not
automatic bounds for a nonlinear quantity computed from the approximation.

</details>

### Exercise 4: Backward perturbation
<a id="eigenvalue-singular-problems-ex-4"></a>

For a real matrix \\(A\\), real unit vector \\(q\\), real
scalar \\(\\theta\\), and residual \\(r=Aq-\\theta q\\), verify that \\(E=-rq^{\\mathsf T}\\) gives an
exact nearby eigenpair and compute \\(\\lVert E\\rVert_2\\).

<details>
<summary>Hint 1</summary>

**Hint.** Apply the perturbation to the unit vector.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Use the norm of a rank-one outer product.

</details>

<details>
<summary>Solution</summary>

**Solution.** Since \\(q^Tq=1\\),
\\((A+E)q=Aq-r(q^Tq)=Aq-r=\\theta q\\). A rank-one matrix \\(ab^{\\mathsf T}\\) has 2-norm
\\(\\lVert a\\rVert_2\\lVert b\\rVert_2\\), so \\(\\lVert E\\rVert_2=\\lVert r\\rVert_2\\lVert q\\rVert_2=\\lVert r\\rVert_2\\). If structured backward
error is required, this unstructured rank-one perturbation may not preserve
symmetry or another constraint and a different analysis is needed.

</details>

## Further exercises

### Exercise 5: Bauer–Fike scale
<a id="eigenvalue-singular-problems-ex-5"></a>

If $\\kappa_2(V)=100$ and $\\|E\\|_2\\le10^{-7}$, what localization follows?

<details>
<summary>Hint 1</summary>

**Hint.** Multiply the two sensitivity factors.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** The theorem gives a union of disks.

</details>

<details>
<summary>Solution</summary>

**Solution.** Every eigenvalue of $A+E$ lies within $10^{-5}$ of some eigenvalue of $A$. It need not lie within $10^{-7}$, and overlapping disks do not provide a unique eigenvalue matching.

</details>

### Exercise 6: A singular-value gap
<a id="eigenvalue-singular-problems-ex-6"></a>

Singular values are $5,1,10^{-4}$ and $\\|E\\|_2\\le2\\times10^{-4}$. Bound the smallest perturbed singular value.

<details>
<summary>Hint 1</summary>

**Hint.** Use Weyl and nonnegativity.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** The lower difference bound cannot be negative.

</details>

<details>
<summary>Solution</summary>

**Solution.** It lies in $[0,3\\times10^{-4}]$. The smallest direction can disappear under the permitted uncertainty, so exact rank three is not robust. The larger two remain bounded away from zero.

</details>

### Exercise 7: Rayleigh residual direction
<a id="eigenvalue-singular-problems-ex-7"></a>

Show $q^{\\mathsf T}r=0$ for a unit vector and its Rayleigh quotient residual.

<details>
<summary>Hint 1</summary>

**Hint.** Substitute the quotient definition.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Use the unit norm.

</details>

<details>
<summary>Solution</summary>

**Solution.** With $r=Aq-\\rho q$ and $\\rho=q^{\\mathsf T}Aq$, one has $q^{\\mathsf T}r=\\rho-\\rho(q^{\\mathsf T}q)=0$. This orthogonality does not require symmetry, although the residual-to-real-spectrum theorem does.

</details>

### Exercise 8: Power-method missing component
<a id="eigenvalue-singular-problems-ex-8"></a>

Apply power iteration to $\\operatorname{diag}(4,1)$ starting at $(0,1)$.

<details>
<summary>Hint 1</summary>

**Hint.** Track the two coordinates exactly.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** A zero leading coefficient stays zero.

</details>

<details>
<summary>Solution</summary>

**Solution.** Every normalized iterate remains $(0,1)$, an eigenvector for one. The dominant magnitude four is irrelevant to this start because its component is exactly zero. A dominant gap alone does not prove convergence to the dominant direction.

</details>

### Exercise 9: Two singular residuals
<a id="eigenvalue-singular-problems-ex-9"></a>

For $A=\\operatorname{diag}(3,1)$, take $v=(1,1)/\\sqrt2$, $\\sigma=\\sqrt5$ and $u=Av/\\sqrt5$. Verify the first relation and test the second.

<details>
<summary>Hint 1</summary>

**Hint.** The chosen image has norm square five.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Compute $A^{mathsf T}u-sigma v$.

</details>

<details>
<summary>Solution</summary>

**Solution.** The first relation holds by construction and $\\|u\\|=1$. The second residual is $(4,-4)/\\sqrt{10}$, since $A^{\\mathsf T}u=(9,1)/\\sqrt{10}$ while $\\sigma v=(5,5)/\\sqrt{10}$. Thus one exact relation alone does not identify a singular triplet.

</details>

### Exercise 10: A nonunique best approximation
<a id="eigenvalue-singular-problems-ex-10"></a>

For the two-by-two identity, give two best rank-one approximations in operator norm.

<details>
<summary>Hint 1</summary>

**Hint.** Its singular values tie.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Retain either coordinate direction.

</details>

<details>
<summary>Solution</summary>

**Solution.** Both $\\operatorname{diag}(1,0)$ and $\\operatorname{diag}(0,1)$ have rank one and operator error one, the optimal tail singular value. The best rank-one approximation is not unique when the relevant singular values tie.

</details>

## Sources

Higham, [Accuracy and Stability of Numerical Algorithms, second edition](https://epubs.siam.org/doi/book/10.1137/1.9780898718027), treats finite-precision sensitivity and matrix computations. Golub and Van Loan, *Matrix Computations*, fourth edition (2013), remains further reading for the SVD and Eckart–Young–Mirsky theorem; no exact theorem/page locator is asserted for that reference. The residual-to-spectrum theorem, Bauer–Fike bound, Frobenius optimality and singular-value perturbation estimate used here are proved explicitly, so their stated forms do not depend on an unverified locator. The symmetric spectral theorem and SVD existence are prerequisite linear algebra results.

## Summary

Eigenpairs, singular triplets and rank decisions describe different properties of a matrix. Residuals are backward evidence; separation and eigenvector conditioning determine forward interpretation. The SVD supplies optimal low-rank errors in specified norms, and singular-value perturbation bounds explain uncertainty-aware rank thresholds. Algorithms must preserve the structure their theorems use, including orthogonality and the original input representation. The next retained chapter studies randomized compression and mixed precision with the same residual discipline.
`;export{e as default};