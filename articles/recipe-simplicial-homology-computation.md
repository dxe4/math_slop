
# Compute Simplicial Homology Without Hiding the Boundary

**Before reading.** Read [Sets](#/books/introduction-to-proof/sets), [Relations, Equivalence, and Quotients](#/books/introduction-to-proof/relations-equivalence-quotients).

This recipe turns a small finite simplicial complex into Betti numbers over $F_{2}$. It is both a programming workflow and a mathematical audit: every stage exposes an invariant that can catch an encoding or elimination error. It assumes finite sets, matrices, and rank–nullity. For the theory, use [Chains, Spaces, and Invariants](#/books/algebraic-topology-chains-spaces); for a ready instrument, open the [Simplicial Homology Workbench](../apps/atlas/index.html#/labs?lab=visual-lab-simplicial-homology).

The output is homology of the encoded finite complex over one coefficient field. It is not automatically the homology of noisy data, a drawing, or an underlying continuous object. That connection needs a valid triangulation or a separate inference theorem.

## Goal and representation

Represent each vertex by a nonnegative integer. Represent a simplex as a sorted list of distinct vertices:

- $[4]$ is a vertex;
- $[1,4]$ is an edge;
- $[0,1,4]$ is a filled triangle, not only its boundary.

A simplicial complex is closed under nonempty faces. If $[0,1,4]$ is present, then its three edges and three vertices must be present. It is convenient to input only **facets**—simplices not contained in larger supplied simplices—and generate every nonempty face.

Do not encode a triangle boundary as $[0,1,2]$; that notation includes the filled two-simplex. Use the three edge facets $[0,1]$, $[1,2]$, $[0,2]$.

## Step 1 — Validate before normalizing

Reject an empty simplex, a negative or noninteger vertex, and a repeated vertex. Silently changing $[0,0,1]$ into $[0,1]$ changes dimension and conceals an upstream error. Sort only after validation, so every simplex has a canonical key such as `"0,1,4"`.

Reject an empty facet collection unless your program deliberately supports the empty complex and states its homology convention. Reduced and unreduced homology use different conventions in degree zero and below.

## Step 2 — Close facets under faces

For each facet, enumerate its nonempty subsets. Store each subset by its canonical key to remove duplicates, then group by $simplex.length-1$.

A facet with $m$ vertices has $2^m-1$ nonempty faces. Exhaustive generation is appropriate for small teaching examples but becomes impossible for one huge simplex. Sparse boundary construction from an already face-closed complex is preferable at scale.

**Audit.** Every face of every stored simplex must also be stored. Count the simplices by dimension as $n_{0},n_{1},\ldots$. For a tetrahedron boundary the expected vector is $(4,6,4)$. If it is $(4,6,4,1)$, you accidentally filled the tetrahedron.

## Step 3 — Choose coefficients and orientations

Over $F_{2}=\{0,1\}$, addition and subtraction agree and each simplex needs no orientation sign. The boundary of a $k$-simplex is the sum of its codimension-one faces:

$\partial [v_{0},\ldots ,v_k] = \sum _i [v_{0},\ldots ,v̂_i,\ldots ,v_k] \pmod{2}$.

Over $Z$, use alternating signs and a consistent vertex ordering:

$\partial [v_{0},\ldots ,v_k] = \sum _i (-1)^i[v_{0},\ldots ,v̂_i,\ldots ,v_k]$.

Field coefficients simplify rank calculations but erase torsion. $RP^{2}$ has $H_{1}(RP^{2};Z)=Z/2$; over $F_{2}$ it produces a one-dimensional class, while over fields of odd characteristic that class disappears. State the coefficient system beside every result.

## Step 4 — Build boundary matrices

### Worked example: the filled triangle boundary

Let columns of $D_k$ be the $k$-simplices and rows be the $(k-1)$-simplices. Put $1$ in an entry when the row simplex is a face of the column simplex (and the appropriate sign over other coefficients).

For a filled triangle with edge order `[01],[02],[12]`, the matrix $D_{2}$ over $F_{2}$ is the column

$[1,1,1]^T$.

With vertex rows $0,1,2$ and the same edge order,

$D_{1} = [[1,1,0], [1,0,1], [0,1,1]]$.

Multiplying gives $D_{1}D_{2}=[0,0,0]^T$ modulo two. This is not an optional smoke test: $\partial ^{2}=0$ is the condition that makes the quotient $ker \partial _k / im \partial _{k+1}$ meaningful.

## Step 5 — Row-reduce exactly over $F_{2}$

Use XOR or addition modulo two, never floating-point tolerances. Scan columns for a pivot row, swap it into place, and clear that pivot from all other rows. The number of pivots is the rank.

Validate matrix entries before reduction. Applying `%2` to $NaN$ or to a noninteger silently stops being arithmetic in $F_{2}$.

For very large sparse complexes, dense arrays waste memory. Store each column as a set or sorted list of nonzero row indices and use sparse reduction. Worst-case fill-in can still be substantial, so report size and runtime rather than promising linear complexity.

## Step 6 — Compute Betti numbers

Rank–nullity gives

$dim ker D_k = n_k - rank D_k$.

Because $im D_{k+1}\subseteq ker D_k$, the $k$th Betti number is

$\beta _k = n_k - rank D_k - rank D_{k+1}$.

For the triangle boundary, $n=(3,3)$, ranks are $(0,2)$, and there is no $D_{2}$. Hence $\beta =(1,1)$. For the filled triangle, $n=(3,3,1)$ and ranks $(0,2,1)$, giving $\beta =(1,0,0)$.

Negative Betti numbers are impossible. A negative result certifies an indexing, closure, rank, or coefficient error.

## Step 7 — Cross-check Euler characteristic

For a finite complex,

$χ = \sum _k (-1)^k n_k = \sum _k (-1)^k \beta _k$.

Compute both sides independently. The equality cannot certify every individual Betti number—a pair of errors can cancel—but disagreement definitely reveals an error.

For the tetrahedron boundary, $χ=4-6+4=2$, while $\beta =(1,0,1)$ gives $1-0+1=2$.

For a finite graph with $c$ components, no two-simplices, and counts $V,E$, the formula becomes $\beta _{1}=E-V+c$. Use this as a specialized graph check.

## Inspectable JavaScript implementation

This compact version favors clarity over scale. Its inputs are trusted only after `simplex` validates them.

```js
function simplex(raw) {
  if (!Array.isArray(raw) || raw.length === 0) throw new RangeError("empty simplex");
  if (raw.some((v) => !Number.isInteger(v) || v < 0)) throw new RangeError("bad vertex");
  if (new Set(raw).size !== raw.length) throw new RangeError("repeated vertex");
  return [...raw].sort((a, b) => a - b);
}

function closeFacets(rawFacets) {
  if (!Array.isArray(rawFacets) || rawFacets.length === 0) throw new RangeError("no facets");
  const faces = new Map();
  for (const raw of rawFacets) {
    const facet = simplex(raw);
    if (facet.length > 20) throw new RangeError("facet too large for subset enumeration");
    for (let mask = 1; mask < 2 ** facet.length; mask += 1) {
      const face = facet.filter((_, i) => (mask & (1 << i)) !== 0);
      faces.set(face.join(","), face);
    }
  }
  const top = Math.max(...[...faces.values()].map((face) => face.length - 1));
  return Array.from({ length: top + 1 }, (_, k) =>
    [...faces.values()].filter((face) => face.length === k + 1)
      .sort((a, b) => a.join(",").localeCompare(b.join(","))));
}

function boundary(groups, k) {
  if (k === 0) return [];
  const rows = groups[k - 1] || [];
  const columns = groups[k] || [];
  const rowIndex = new Map(rows.map((face, i) => [face.join(","), i]));
  const matrix = Array.from({ length: rows.length }, () => Array(columns.length).fill(0));
  columns.forEach((sigma, column) => {
    sigma.forEach((_, omitted) => {
      const face = sigma.filter((__, i) => i !== omitted);
      const row = rowIndex.get(face.join(","));
      if (row === undefined) throw new Error("not closed under faces");
      matrix[row][column] = 1;
    });
  });
  return matrix;
}

function rankF2(matrix) {
  if (matrix.length === 0) return 0;
  const width = matrix[0].length;
  if (matrix.some((row) => row.length !== width)) throw new RangeError("ragged matrix");
  if (matrix.some((row) => row.some((x) => !Number.isInteger(x)))) throw new RangeError("noninteger");
  const a = matrix.map((row) => row.map((x) => ((x % 2) + 2) % 2));
  let pivot = 0;
  for (let column = 0; column < width && pivot < a.length; column += 1) {
    const found = a.findIndex((row, i) => i >= pivot && row[column] === 1);
    if (found < 0) continue;
    [a[pivot], a[found]] = [a[found], a[pivot]];
    for (let row = 0; row < a.length; row += 1) {
      if (row !== pivot && a[row][column] === 1) {
        for (let j = column; j < width; j += 1) a[row][j] ^= a[pivot][j];
      }
    }
    pivot += 1;
  }
  return pivot;
}

function bettiNumbers(facets) {
  const groups = closeFacets(facets);
  const ranks = groups.map((_, k) => rankF2(boundary(groups, k)));
  return groups.map((simplices, k) =>
    simplices.length - ranks[k] - (ranks[k + 1] || 0));
}
```

Try `bettiNumbers([[0,1],[1,2],[0,2]])` and expect $[1,1]$. Try `bettiNumbers([[0,1,2]])` and expect $[1,0,0]$.

## Test ladder

Run these cases before accepting arbitrary input:

1. one vertex: $\beta =(1)$;
2. one edge: $\beta =(1,0)$;
3. two disjoint edges: $\beta =(2,0)$;
4. triangle boundary: $\beta =(1,1)$;
5. filled triangle: $\beta =(1,0,0)$;
6. tetrahedron boundary: counts $(4,6,4)$, ranks $(0,3,3)$, $\beta =(1,0,1)$;
7. duplicate and reordered facets: same result after key normalization;
8. repeated vertices, negative vertices, ragged matrices, and noninteger entries: explicit rejection.

For every valid case verify $D_{k-1}D_k=0$, nonnegative integer Betti numbers, and the two Euler sums.

## Stop conditions and interpretation

Stop and repair the representation if:

- a supplied simplex has a missing face;
- the boundary matrices do not compose to zero;
- a Betti number is negative;
- Euler sums disagree;
- an alleged triangulation has unintended identifications or duplicate geometric vertices;
- a coefficient choice is omitted from the result.

For data analysis, a point cloud is not itself a simplicial complex. Vietoris–Rips or Čech constructions add simplices at a chosen scale, and persistent homology tracks classes across scales. Sampling density, noise, metric choice, and filtration stability then become hypotheses. A visually persistent bar may be meaningful evidence, but it is not automatically a theorem about the source phenomenon.

## Exercises with hints and complete solutions

### Exercise 1
<a id="simplicial-homology-computation-ex-1"></a>

Over $F_2$, compute the Betti numbers of two disjoint triangle boundaries.
State the simplex counts, boundary rank and Euler characteristic.

<details><summary>Hint 1</summary>

There are no filled two-simplices, and the two components have disjoint bases.

</details>
<details><summary>Hint 2</summary>

Each triangle's edge-to-vertex boundary matrix has rank two.

</details>
<details><summary>Solution</summary>

There are six vertices and six edges. The block-diagonal boundary matrix has
rank four, so $\beta_0=6-4=2$ and $\beta_1=6-4=2$. Higher Betti numbers
are zero because there are no higher simplices. Both Euler sums give zero:
$6-6=2-2$. The result records two components and one independent cycle in
each; it is not the first homology of a based loop restricted to only one component.

</details>

### Exercise 2
<a id="simplicial-homology-computation-ex-2"></a>

Fill one of those two triangles by adding its two-simplex. Which Betti numbers
change, and does Euler characteristic alone identify them?

<details><summary>Hint 1</summary>

The new two-simplex contributes one nonzero boundary column.

</details>
<details><summary>Hint 2</summary>

Its boundary kills one old cycle but does not connect the two components.

</details>
<details><summary>Solution</summary>

The counts become $(6,6,1)$. The ranks are still four in degree one and
now one in degree two. Therefore $\beta=(2,1,0)$. Both Euler sums give one:
$6-6+1=2-1+0$. This alternating total alone does not determine its three
terms; the boundary ranks and component information establish the individual
Betti numbers. Coefficients remain $F_2$ throughout this computation.

</details>

## Extension projects

Add oriented integer boundaries and compute Smith normal form to recover torsion. Add relative homology by quotienting a subcomplex. Add chain maps and verify induced maps respect cycles and boundaries. Add sparse columns and benchmark fill-in. At every extension, preserve the existing witnesses—$\partial ^{2}=0$, exact coefficient arithmetic, and Euler consistency—before optimizing.

<!-- euler-topology-core-audit:start -->

## Selected topology core — Matrix and theorem audit

Use this recipe as the finite-chain support for the
[selected topology core](#/books/topology/topic-guide),
especially TOP-CORE-HOMOLOGY and TOP-CORE-GRAPH. It does not replace the route's
open-cover proofs, quotient constructions or surface charts. The existing
210-minute estimate belongs to this recipe, not to the whole selected route;
repair and a later public reconstruction add time.

### Audit the representation before interpreting a rank

For the existing triangle-boundary and filled-triangle examples in Steps 4–7,
write the vertex/edge/face order, coefficient field, both boundary matrices
and their product before reporting ranks. The original worked calculations
supply complete comparison answers: the boundary has Betti numbers $(1,1)$;
adding its two-simplex gives $(1,0,0)$ and kills the old edge-cycle class.
The Euler sums are respectively $3-3=1-1$ and $3-3+1=1-0+0$.
A full hand calculation is an alternative to the optional code. If you run
the code or a workbench, preserve the actual input, output and independent
matrix check, and declare the tool in your comparison file.

The input must be a finite face-closed simplicial complex. An unvalidated
drawing, point cloud or arbitrary CW attaching word is not that input.
An edge-facet list for a triangle boundary differs from a filled triangle;
a repeated geometric vertex with a new label also changes the encoded
complex unless its identification is justified. Topological interpretation
needs the stated realization/triangulation and comparison theorems.
Agreement of the two Euler sums can detect some errors but does not certify
each rank, every Betti number or a claimed homeomorphism.

### Keep the coefficient and component statements separate

The selected [Chapter 14 Exercise 7](#/books/topology/14-homology)
uses **integral simplicial chains** on two disjoint boundary triangles, not
this implementation's two-element-field matrices. Its complete selected
solution solves the two signed boundary blocks and obtains
$H_1^\Delta(K;\mathbb Z)\cong\mathbb Z\oplus\mathbb Z$.
There are no simplicial two-chains for that finite graph; singular
two-simplices are continuous maps into its realization and are not thereby
absent. The natural simplicial–singular comparison is the named bridge.

A loop based in the first component cannot enter the second. Its abelianized
fundamental group is $\mathbb Z$, and its loop-to-cycle map has image only
the first $\mathbb Z$ summand. The degree-one Hurewicz identification requires
path connectedness and integral singular homology; it does not turn one
based group into the homology of all components. The full integral proof and
map are already in that exercise's key. Reducing an answer to field ranks
does not recover general integral torsion; the existing project for Smith
normal form remains an extension.

The selected [Chapter 19 Exercise 7](#/books/topology/19-surfaces-knots)
provides a second warning: the annulus and torus have the same orientability
and Euler characteristic but different boundary counts. Their classification
uses the full hypotheses and the imported surface theorem, not just an
Euler check.

### Preserve your own comparison and repair

For each selected assignment keep separately dated first-response,
comparison and corrected files, labelled with its actual source task.
Record coefficients, basis order, theorem hypotheses and prior public
hint/model/code exposure. Copy the first response into a retained external
file before changing a mutable native note. Check that the first file is
unchanged after editing, keep a separate recoverable copy and reopen it after
a restart. These are learner-managed files, not automatic immutable attempt
records or grades. The new route uses existing questions and complete keys;
it adds no shared writing task or new programme allocation.

<!-- euler-topology-core-audit:end -->
