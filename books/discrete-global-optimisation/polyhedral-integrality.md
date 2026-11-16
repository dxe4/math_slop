
# Polyhedral Integrality and Valid Inequalities {#section-1-polyhedral-integrality-and-valid-inequalities}

<a id="section-1-purpose-and-local-prerequisites"></a>
## Purpose and local prerequisites {#section-3-purpose-and-local-prerequisites}

The formulation chapter distinguished an integer set from its continuous
relaxation. This chapter studies the geometry between them: vertices, faces,
integer hulls, total unimodularity, valid inequalities, and separation. It
assumes linear algebra, convexity, elementary graph theory, and the integer
formulations chapter. Examples are small exact mathematical structures rather
than operational applications.

The central certificate question is:

> Which linear inequality is satisfied by every intended integer point, and
> why may it safely remove the current fractional point?

“It improves the answer” is not a proof of validity. A cut is part of a finite
mathematical argument only when its derivation, arithmetic, and relation to the
integer set can be checked.

<a id="section-19-polyhedra-faces-and-vertices"></a>
## Polyhedra, faces, and vertices {#section-21-polyhedra-faces-and-vertices}

A polyhedron is an intersection of finitely many closed half-spaces:

\(P=\{x \in \mathbb{R}^{n}: Ax\le b\}\).

It may be empty or unbounded. A polytope is a bounded polyhedron. An inequality
\(\alpha^{\mathsf T} x\le \beta\) is **valid** for a set \(S\) if every \(x \in S\) satisfies it.

For a valid inequality of \(P\), the tight set

\(F=\{x \in P: \alpha^{\mathsf T} x=\beta\}\)

is a face when it arises from a supporting hyperplane. The empty set and \(P\)
itself are usually included as improper faces. A proper face of dimension
\(\dim(P)-1\) is a facet.

A point \(v \in P\) is an extreme point or vertex if
\(v=\theta x+(1-\theta)y\), with \(x,y \in P\) and \(0<\theta<1\), implies \(x=y=v\).
For a full-dimensional polyhedron in \(\mathbb{R}^{n}\), a feasible point is a vertex when
the normals of its tight inequalities contain \(n\) linearly independent vectors.
Degeneracy means more than \(n\) constraints may be tight; it does not make the
point non-vertex.

**Linear objective fact.** If a linear objective has a finite optimum over a
nonempty polyhedron that contains a vertex in its optimal face, an optimum is
attained at a vertex. A line-containing polyhedron may have no vertices even
when an objective is constant and finite, so the hypotheses should not be
shortened to “every LP optimum is a vertex.”

<a id="section-49-integer-hull-and-ideal-formulations"></a>
## Integer hull and ideal formulations {#section-51-integer-hull-and-ideal-formulations}

For \(S=P \cap \mathbb{Z}^{n}\), the integer hull is

\(P_I=\operatorname{conv}(S)\).

A linear objective has the same infimum over \(S\) and \(P_I\); when the discrete
optimum is attained, the values agree. Replacing \(P\) by \(P_I\) would make linear
optimization sufficient for the integer problem. The difficulty is that an
explicit description of \(P_I\) can require many inequalities and can be as hard
to obtain as the original problem.

A formulation is often called **ideal** when the relevant relaxation has only
integer extreme points in the original integer variables. Extended formulations
may introduce auxiliary continuous variables, so “every variable is integral”
is too strong a definition. The projection onto the intended variables and the
exact convention must be stated.

<a id="section-67-a-two-variable-gap"></a>
### A two-variable gap {#section-69-a-two-variable-gap}

Let

\(P=\{x \in [0,1]^{2}: 2x_1+2x_2\le 3\}\).

Its fractional vertices include \((1,1/2)\) and \((1/2,1)\). The binary feasible
points are \((0,0),(1,0),(0,1)\), whose hull is described by

\(x_1+x_2\le 1\), \(x\ge 0\).

The inequality \(x_1+x_2\le 1\) is valid for the binary set but not implied by the
original relaxation. It removes the two fractional vertices without removing
an intended point.

<a id="section-82-facets-as-strong-nonredundant-inequalities"></a>
## Facets as strong nonredundant inequalities {#section-84-facets-as-strong-nonredundant-inequalities}

Assume \(P_I\) is full dimensional in \(\mathbb{R}^{n}\). A nontrivial valid inequality
\(\alpha^{\mathsf T} x\le \beta\), with \(\alpha\ne 0\), defines a facet if its tight integer hull
contains \(n\) affinely independent points. The nonzero normal makes the equality
set a hyperplane; full dimensionality ensures that this supporting hyperplane
does not contain all of \(P_I\). This gives a practical proof pattern:

1. verify that the inequality has a nonzero normal and prove validity for every
   integer-feasible point;
2. exhibit \(n\) affinely independent feasible points satisfying equality.

Facet-defining does not mean sufficient. An integer hull typically has many
facets. Nor does a facet automatically produce a large bound improvement for a
particular objective.

For the binary two-variable hull above, the points \((1,0)\) and \((0,1)\) are two
affinely independent tight points on \(x_1+x_2=1\), so the inequality defines a
facet in dimension two.

<a id="section-102-total-unimodularity"></a>
## Total unimodularity {#section-104-total-unimodularity}

A matrix is **totally unimodular** (TU) when every square subdeterminant is
\(0\), \(1\), or \(-1\). This property makes all possible nonsingular basis matrices
unimodular.

**Theorem 2.1 (integral vertices from TU).** Let \(A\) be totally unimodular and \(b\)
be integral. Every vertex of

\(P=\{x \in \mathbb{R}^{n}: Ax\le b\}\)

is integral. Consequently, whenever a linear objective has an optimum at a
vertex, the relaxation has an integer optimal vertex.

**Proof.** At a vertex \(v\), choose \(n\) linearly independent tight rows, forming
a nonsingular square matrix \(B\) with \(Bv=d\), where \(d\) is the corresponding
integral subvector of \(b\). Total unimodularity gives \(\det B=+1\) or \(-1\).
Cramer's rule expresses each coordinate of \(v\) as an integer determinant divided
by \(\pm 1\); hence every coordinate is integral. Degeneracy causes no problem
because one can select an independent subset of the tight rows.

The theorem does not say every integer matrix is TU. It does not survive an
arbitrary added row. It also does not assert boundedness or existence of an
optimum.

<a id="section-127-recognizing-some-tu-matrices"></a>
### Recognizing some TU matrices {#section-129-recognizing-some-tu-matrices}

Several closure properties help:

- permuting rows or columns preserves TU;
- multiplying a row or column by \(-1\) preserves TU;
- appending a unit row or unit column preserves TU;
- the node-edge incidence matrix of a directed graph is TU;
- the zero-one vertex-edge incidence matrix of a bipartite graph is TU after
  signing one vertex class.

The last statement explains an integrality contrast in graph matchings. For a
bipartite graph, degree constraints with nonnegative edge variables have an
integral matching polytope. On an odd cycle, assigning \(1/2\) to every edge
satisfies all degree constraints and is fractional. Graph parity, not a solver
setting, causes the difference.

<a id="section-144-worked-bipartite-example"></a>
### Worked bipartite example {#section-146-worked-bipartite-example}

For a four-cycle with edges in cyclic order, impose \(x_e\ge 0\) and at each vertex
the sum of incident edge variables at most one. The point
\((1/2,1/2,1/2,1/2)\) is feasible but is the average of the two alternating
perfect matchings. It is not an extreme point. TU ensures every extreme point
is integral, even though the polytope contains fractional nonvertices.

This distinction matters: an integral polyhedron contains infinitely many
fractional convex combinations. “Integral” describes its vertices or equality
with the convex hull of integer points, not every point.

<a id="section-156-a-determinant-proof-for-directed-incidence-matrices"></a>
### A determinant proof for directed incidence matrices {#section-158-a-determinant-proof-for-directed-incidence-matrices}

Orient each edge of a finite loop-free graph and place minus one
at its tail, plus one at its head and zero elsewhere in its
incidence column. Consider any square submatrix B. Induct on its
size. If a column is zero, the determinant vanishes. If a column
has one nonzero entry, expand along it; its value is plus or
minus a determinant of smaller size, so the induction hypothesis
applies. Otherwise every column retains both its nonzero entries.
Those entries sum to zero, making the sum of the rows zero.
The rows are dependent and the determinant vanishes. The size-one
base case has entries zero or plus/minus one, completing the TU proof.

For a bipartite graph, sign all rows in one vertex class negatively.
The ordinary zero-one incidence matrix becomes such an oriented
incidence matrix. Row sign changes preserve all determinant
magnitudes, so the zero-one version is TU too. Appending nonnegativity
rows preserves TU by the same one-entry determinant expansion.
Integral degree bounds therefore give integral vertices of the
bipartite matching relaxation. Each edge variable is bounded by
its incident degree inequality, so the nonempty feasible polyhedron
is bounded and every linear objective has an integral optimal
vertex. Fractional convex combinations remain feasible, as the
four-cycle example showed.

This proof identifies exactly where graph bipartition enters.
An odd cycle cannot receive opposite row signs across every
edge. Its half-edge vector can be an extreme point rather
than a combination of matchings. The next network chapter
uses this determinant structure alongside direct flow and
augmenting-path arguments, keeping integrality a proved property
of the represented graph rather than a solver setting.

<a id="section-189-valid-inequalities-by-aggregation-and-rounding"></a>
## Valid inequalities by aggregation and rounding {#section-191-valid-inequalities-by-aggregation-and-rounding}

Suppose integer variables satisfy \(Ax\le b\). Choose multipliers \(u\ge 0\). Then

\(u^{\mathsf T} A x\le u^{\mathsf T} b\)

is valid by nonnegative aggregation. If every entry of \(u^{\mathsf T} A\) is integer and
\(x\) is integer, the left side is integer, so the stronger inequality

\(u^{\mathsf T} A x\le \lfloor u^{\mathsf T} b\rfloor\)

is also valid. This is a Chvátal–Gomory rounding step.

<a id="section-202-worked-odd-cycle-cut"></a>
### Worked odd-cycle cut {#section-204-worked-odd-cycle-cut}

For a triangle independent-set relaxation,

\(x_1+x_2\le 1\), \(x_2+x_3\le 1\), \(x_3+x_1\le 1\), \(x \in [0,1]^{3}\),

take one-half of each edge inequality. The aggregate is

\(x_1+x_2+x_3\le 3/2\).

The left side is integer on binary points, so rounding the right side down gives

\(x_1+x_2+x_3\le 1\).

The fractional point \((1/2,1/2,1/2)\) violates the cut. Validity comes from
aggregation and integrality, not from observing the violation. On a five-cycle,
the same argument gives \(\sum x_i\le 2\).

**Arithmetic boundary.** If multipliers and coefficients are stored
approximately, deciding that \(u^{\mathsf T} A\) is exactly integral can be unsafe. A proof
log should store rational multipliers or provide exact reconstruction and a
checkable residual.

<a id="section-225-other-sources-of-valid-inequalities"></a>
## Other sources of valid inequalities {#section-227-other-sources-of-valid-inequalities}

<a id="section-227-convex-hull-descriptions-of-small-disjunctions"></a>
### Convex-hull descriptions of small disjunctions {#section-229-convex-hull-descriptions-of-small-disjunctions}

If a variable must satisfy one of finitely many alternatives, derive an
inequality valid for each alternative, or introduce variables that describe the
convex hull of their union. A big-M implication is valid only when \(M\) follows
from actual bounds. A hull formulation can be stronger but larger.

<a id="section-234-cover-inequalities"></a>
### Cover inequalities {#section-236-cover-inequalities}

For binary \(x\) satisfying

\(\sum_i a_i x_i\le b\), with \(a_i>0\),

a set \(C\) is a cover when \(\sum_{i \in C} a_i>b\). Not every member of \(C\) can be
one, so

\(\sum_{i \in C} x_i\le \lvert C\rvert-1\)

is valid. Minimal covers avoid obvious redundancy, and lifting can add variables
outside \(C\). Validity of lifted coefficients needs a derivation; copying a
coefficient pattern from another instance is not proof.

<a id="section-249-symmetry-breaking-inequalities"></a>
### Symmetry-breaking inequalities {#section-251-symmetry-breaking-inequalities}

When several variable assignments encode the same mathematical object, a
constraint can select a canonical representative. This changes the encoded
set but may preserve one representative of every equivalence class and the
optimal value. The mapping must be proved. An incorrect symmetry breaker can
remove every optimal representative.

<a id="section-257-separation-versus-optimization"></a>
## Separation versus optimization {#section-259-separation-versus-optimization}

Given a point \(\hat{x}\), a separation problem either confirms that \(\hat{x}\) lies in
a target polyhedron or returns a valid inequality it violates. For a known
finite inequality list, separation is direct evaluation. For an implicitly
described family, finding the most violated inequality can itself be a hard
optimization problem.

A cutting-plane loop is:

1. solve the current relaxation;
2. separate its solution over one or more valid inequality families;
3. add selected violated cuts;
4. repeat until no chosen separator finds a violation or a work limit is hit.

Failure to find a cut in a limited family does not prove membership in the
integer hull. “No violated cut found” must name the family, arithmetic, and
search limit.

Cut selection balances strength and numerical quality. Nearly parallel or
badly scaled inequalities can make the relaxation harder to solve. Removing
inactive cuts may improve computation but complicates proof replay unless the
final bound can be reconstructed from retained evidence.

<a id="section-281-from-cuts-to-bounds"></a>
## From cuts to bounds {#section-283-from-cuts-to-bounds}

For a maximization integer problem, strengthening the relaxation can only
decrease or preserve its upper bound because feasible fractional points are
removed. It cannot remove a valid integer incumbent. If the new upper bound
equals an incumbent value, optimality is certified.

For minimization, relaxation values are lower bounds and strengthening can only
increase or preserve them. Keep this direction fixed through every derivation.

An integrality gap is objective-dependent unless one describes a family of
problems and a ratio convention. A polyhedron can be nonintegral yet yield an
integer optimum for a particular objective. One lucky objective is not an
integrality theorem.

<a id="section-296-failure-diagnostics"></a>
## Failure diagnostics {#section-298-failure-diagnostics}

- Cutting off the current fractional point without proving validity for all
  intended integer points.
- Saying an integral polyhedron contains no fractional points.
- Inferring total unimodularity from one integral LP solution.
- Rounding an approximately integral aggregated coefficient in a proof.
- Calling a valid inequality facet-defining without a dimension argument and
  enough affinely independent tight points.
- Treating “no cut found” as equality with the integer hull.
- Mixing minimization and maximization bound directions.
- Using big M without a finite mathematical domain bound.

<a id="section-309-practice-with-full-solutions"></a>
## Practice with full solutions {#section-311-practice-with-full-solutions}

**1. Vertex test.** Find the vertices of
\(P=\{x\ge 0,y\ge 0,x+y\le 1\}\) and explain why \((1/2,1/2)\) is not a vertex.

<details>
<summary>Hint 1</summary>

Select independent tight rows or express the point as a convex combination.
</details>
<details>
<summary>Hint 2</summary>

The half-point is the midpoint of the two nonzero simplex vertices.
</details>
<details>
<summary>Full solution</summary>

**Solution.** The vertices are \((0,0),(1,0),(0,1)\), obtained from pairs of
independent tight constraints. The point \((1/2,1/2)\) lies on \(x+y=1\) but only
one independent inequality is tight. It is also the midpoint of \((1,0)\) and
\((0,1)\), so it is not extreme.
</details>


**2. A cover cut.** Binary variables satisfy
\(4x_1+3x_2+2x_3\le 5\). Give a valid inequality from cover \(\{1,2\}\) and test the
fractional point \((0.7,0.7,0)\).

<details>
<summary>Hint 1</summary>

Add the cover weights and compare with capacity.
</details>
<details>
<summary>Hint 2</summary>

The two selected binary variables cannot both be one; then evaluate their fractional sum.
</details>
<details>
<summary>Full solution</summary>

**Solution.** Because \(4+3>5\), variables one and two cannot both be one, so
\(x_1+x_2\le 1\) is valid. The fractional point has sum \(1.4\) and is cut off. Its
violation demonstrates usefulness, while the cover argument proves validity.
</details>


**3. CG rounding.** Integer nonnegative \(x,y\) satisfy
\(2x+y\le 3\) and \(x+2y\le 3\). Aggregate with multipliers \(1/3,1/3\) and derive a cut.

<details>
<summary>Hint 1</summary>

Multiply and add the two rows exactly.
</details>
<details>
<summary>Hint 2</summary>

Both aggregated coefficients and the right side are already integers.
</details>
<details>
<summary>Full solution</summary>

**Solution.** The aggregate is
\(x+y\le 2\). The coefficient row is already integral and the right side is exactly
two, so rounding changes nothing. Here \(x+y\le 2\) already follows from
aggregation without using integrality. The exercise warns that a CG step
need not strengthen after rounding; validity and novelty are different.
</details>


**4. Odd-cycle inequality.** Use half-summation to derive the five-cycle
independent-set inequality.

<details>
<summary>Hint 1</summary>

Every cycle variable occurs in exactly two edge rows.
</details>
<details>
<summary>Hint 2</summary>

The half-sum is five halves; only then use integrality to floor the right side.
</details>
<details>
<summary>Full solution</summary>

**Solution.** Sum the five edge constraints \(x_i+x_{i+1}\le 1\). Every variable
appears twice, so half the sum gives \(\sum_i x_i\le 5/2\). The left side is integer
for binary \(x\); rounding down yields \(\sum_i x_i\le 2\). The half-vector violates
the cut with value \(5/2\), while every binary independent set satisfies it.
</details>

<a id="section-403-exercise-5-a-redundant-tight-row"></a>
### Exercise 5: a redundant tight row {#section-405-exercise-5-a-redundant-tight-row}

At the origin of x≥0,y≥0,x+y≥0,x+y≤1, count the tight rows
and prove it is still a vertex despite degeneracy.

<details>
<summary>Hint 1</summary>

The first two tight coordinate rows are independent.
</details>
<details>
<summary>Hint 2</summary>

The third tight row is redundant, not a new feasible direction.
</details>
<details>
<summary>Full solution</summary>

Three rows are tight at the origin in dimension two. The coordinate
rows have rank two and fix the point uniquely, proving it is
a vertex. The additional tight row is their nonnegative combination.
Degeneracy means more rows are tight than needed for a basis;
the TU vertex proof simply selects an independent subset.
</details>

<a id="section-428-exercise-6-one-added-row-can-destroy-integrality"></a>
### Exercise 6: one added row can destroy integrality {#section-430-exercise-6-one-added-row-can-destroy-integrality}

Start with the unit box in two variables and add x₁+2x₂≤2.
Exhibit a fractional vertex and show the full row system is not TU.

<details>
<summary>Hint 1</summary>

Intersect x₁=1 with the new row.
</details>
<details>
<summary>Hint 2</summary>

The coefficient two is itself a non-unimodular one-by-one minor.
</details>
<details>
<summary>Full solution</summary>

The intersection is (1,1/2), feasible and fixed by two independent
tight rows, hence a vertex. The new row contains an entry two,
so the matrix is not TU. The previous box was integral, but
adding one valid modeling restriction need not preserve that
structural property. Under objective x₁+x₂ the fractional vertex
has value 3/2, above every binary feasible value of at most one.
</details>

<a id="section-454-exercise-7-facet-dimension"></a>
### Exercise 7: facet dimension {#section-456-exercise-7-facet-dimension}

In the three-dimensional nonnegative simplex with coordinate sum at most
one, compare the tight faces of x₁≤1 and x₁+x₂+x₃≤1.

<details>
<summary>Hint 1</summary>

List which simplex vertices attain each equality.
</details>
<details>
<summary>Hint 2</summary>

Only the first unit vector attains the first equality; all three unit vectors attain the second.
</details>
<details>
<summary>Full solution</summary>

The first face is a singleton, of dimension zero, and is not
a facet in dimension three. The second contains the three
affinely independent unit vectors and has dimension two, so
it is a facet. Both inequalities are valid. Validity alone
does not establish the stronger dimension claim.
</details>

<a id="section-479-exercise-8-a-fractional-nonvertex-matching"></a>
### Exercise 8: a fractional nonvertex matching {#section-481-exercise-8-a-fractional-nonvertex-matching}

On a six-cycle, express the all-half edge vector as a convex
combination of integral matchings.

<details>
<summary>Hint 1</summary>

Use the odd-numbered edges and the even-numbered edges.
</details>
<details>
<summary>Hint 2</summary>

Each alternating set is a perfect matching.
</details>
<details>
<summary>Full solution</summary>

The half-vector is the average of the two alternating perfect
matching indicators. They are distinct feasible points, so
their midpoint is not extreme. An integral matching polytope
can contain this fractional point without violating vertex
integrality. Convex combinations are exactly how such points
belong to the hull of integer solutions.
</details>

<a id="section-505-exercise-9-coefficient-integrality-before-flooring"></a>
### Exercise 9: coefficient integrality before flooring {#section-507-exercise-9-coefficient-integrality-before-flooring}

For integer x, is flooring only the right side of (8/5)x≤8/5
to one a valid CG step? Give a counterexample if not.

<details>
<summary>Hint 1</summary>

The left coefficient has not become integral.
</details>
<details>
<summary>Hint 2</summary>

The original feasible value x=1 fails the proposed stronger row.
</details>
<details>
<summary>Full solution</summary>

It is invalid: x=1 gives 8/5≤8/5 originally but not 8/5≤1.
The CG argument floors the right side only after proving
the complete left side is integer on the intended points.
An integer variable multiplied by a noninteger coefficient
does not automatically give an integer expression. Rational
aggregation must preserve that distinction exactly.
</details>

<a id="section-531-exercise-10-symmetry-must-include-the-objective"></a>
### Exercise 10: symmetry must include the objective {#section-533-exercise-10-symmetry-must-include-the-objective}

The binary box is invariant under swapping x₁ and x₂. For
max x₁−x₂, does adding x₁≤x₂ preserve the optimum?

<details>
<summary>Hint 1</summary>

The feasible set is symmetric, but the objective is not invariant under the swap.
</details>
<details>
<summary>Hint 2</summary>

The original optimum is at (1,0), which the proposed row excludes.
</details>
<details>
<summary>Full solution</summary>

The original optimum is one; under x₁≤x₂ the best value
is zero. Selecting a representative from a feasible-set
symmetry class preserves optimization only when the objective
and required outputs respect that equivalence too. Here
the representative can have a worse value, so the alleged
symmetry breaker removes every original optimum.
</details>

<a id="section-557-connections-and-summary"></a>
## Connections and summary {#section-559-connections-and-summary}

Backward, the integer-formulation chapter supplied relaxations, gaps, and
logical encodings. This chapter explains when the relaxation is already
integral and how exact valid inequalities move it toward the integer hull.
Forward, branch-and-bound uses these strengthened bounds at nodes, while the
certificate chapter records every aggregation, rounding step, incumbent, and
pruning decision.

The durable workflow is: define the intended integer set; prove validity;
measure face dimension when claiming strength; preserve exact arithmetic in
proof logs; and report the inequality family and separation limits when the
integer hull remains only partially described.

<a id="section-571-source-and-verification-note"></a>
## Sources {#section-573-source-and-verification-note}

The earlier source note identifies Schrijver (1986) and Conforti–Cornuéjols–Zambelli (2014) as modern routes for Chvátal–Gomory definitions and finite-generation statements, but supplies no exact theorem/page locator. Rationality and integrality assumptions remain explicit.
