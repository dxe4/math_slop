var e=`---
parent_id: book-numerical-mathematics-optimization-by-structure
chapter_id: polyhedral-integrality
title: "Polyhedral Integrality and Valid Inequalities"
level: graduate
estimated_minutes: 190
license: CC BY-SA 4.0
---

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

\\(P=\\{x \\in \\mathbb{R}^{n}: Ax\\le b\\}\\).

It may be empty or unbounded. A polytope is a bounded polyhedron. An inequality
\\(\\alpha^{\\mathsf T} x\\le \\beta\\) is **valid** for a set \\(S\\) if every \\(x \\in S\\) satisfies it.

For a valid inequality of \\(P\\), the tight set

\\(F=\\{x \\in P: \\alpha^{\\mathsf T} x=\\beta\\}\\)

is a face when it arises from a supporting hyperplane. The empty set and \\(P\\)
itself are usually included as improper faces. A proper face of dimension
\\(dim(P)-1\\) is a facet.

A point \\(v \\in P\\) is an extreme point or vertex if
\\(v=\\theta x+(1-\\theta)y\\), with \\(x,y \\in P\\) and \\(0<\\theta<1\\), implies \\(x=y=v\\).
For a full-dimensional polyhedron in \\(\\mathbb{R}^{n}\\), a feasible point is a vertex when
the normals of its tight inequalities contain \\(n\\) linearly independent vectors.
Degeneracy means more than \\(n\\) constraints may be tight; it does not make the
point non-vertex.

**Linear objective fact.** If a linear objective has a finite optimum over a
nonempty polyhedron that contains a vertex in its optimal face, an optimum is
attained at a vertex. A line-containing polyhedron may have no vertices even
when an objective is constant and finite, so the hypotheses should not be
shortened to “every LP optimum is a vertex.”

<a id="section-49-integer-hull-and-ideal-formulations"></a>
## Integer hull and ideal formulations {#section-51-integer-hull-and-ideal-formulations}

For \\(S=P \\cap \\mathbb{Z}^{n}\\), the integer hull is

\\(P_I=\\operatorname{conv}(S)\\).

A linear objective has the same infimum over \\(S\\) and \\(P_I\\); when the discrete
optimum is attained, the values agree. Replacing \\(P\\) by \\(P_I\\) would make linear
optimization sufficient for the integer problem. The difficulty is that an
explicit description of \\(P_I\\) can require many inequalities and can be as hard
to obtain as the original problem.

A formulation is often called **ideal** when the relevant relaxation has only
integer extreme points in the original integer variables. Extended formulations
may introduce auxiliary continuous variables, so “every variable is integral”
is too strong a definition. The projection onto the intended variables and the
exact convention must be stated.

<a id="section-67-a-two-variable-gap"></a>
### A two-variable gap {#section-69-a-two-variable-gap}

Let

\\(P=\\{x \\in [0,1]^{2}: 2x_1+2x_2\\le 3\\}\\).

Its fractional vertices include \\((1,1/2)\\) and \\((1/2,1)\\). The binary feasible
points are \\((0,0),(1,0),(0,1)\\), whose hull is described by

\\(x_1+x_2\\le 1\\), \\(x\\ge 0\\).

The inequality \\(x_1+x_2\\le 1\\) is valid for the binary set but not implied by the
original relaxation. It removes the two fractional vertices without removing
an intended point.

<a id="section-82-facets-as-strong-nonredundant-inequalities"></a>
## Facets as strong nonredundant inequalities {#section-84-facets-as-strong-nonredundant-inequalities}

Assume \\(P_I\\) is full dimensional in \\(\\mathbb{R}^{n}\\). A nontrivial valid inequality
\\(\\alpha^{\\mathsf T} x\\le \\beta\\), with \\(\\alpha\\ne 0\\), defines a facet if its tight integer hull
contains \\(n\\) affinely independent points. The nonzero normal makes the equality
set a hyperplane; full dimensionality ensures that this supporting hyperplane
does not contain all of \\(P_I\\). This gives a practical proof pattern:

1. verify that the inequality has a nonzero normal and prove validity for every
   integer-feasible point;
2. exhibit \\(n\\) affinely independent feasible points satisfying equality.

Facet-defining does not mean sufficient. An integer hull typically has many
facets. Nor does a facet automatically produce a large bound improvement for a
particular objective.

For the binary two-variable hull above, the points \\((1,0)\\) and \\((0,1)\\) are two
affinely independent tight points on \\(x_1+x_2=1\\), so the inequality defines a
facet in dimension two.

<a id="section-102-total-unimodularity"></a>
## Total unimodularity {#section-104-total-unimodularity}

A matrix is **totally unimodular** (TU) when every square subdeterminant is
\\(0\\), \\(1\\), or \\(-1\\). This property makes all possible nonsingular basis matrices
unimodular.

**Theorem (integral vertices from TU).** Let \\(A\\) be totally unimodular and \\(b\\)
be integral. Every vertex of

\\(P=\\{x \\in \\mathbb{R}^{n}: Ax\\le b\\}\\)

is integral. Consequently, whenever a linear objective has an optimum at a
vertex, the relaxation has an integer optimal vertex.

**Proof.** At a vertex \\(v\\), choose \\(n\\) linearly independent tight rows, forming
a nonsingular square matrix \\(B\\) with \\(Bv=d\\), where \\(d\\) is the corresponding
integral subvector of \\(b\\). Total unimodularity gives \\(\\det B=+1\\) or \\(-1\\).
Cramer's rule expresses each coordinate of \\(v\\) as an integer determinant divided
by \\(\\pm 1\\); hence every coordinate is integral. Degeneracy causes no problem
because one can select an independent subset of the tight rows.

The theorem does not say every integer matrix is TU. It does not survive an
arbitrary added row. It also does not assert boundedness or existence of an
optimum.

<a id="section-127-recognizing-some-tu-matrices"></a>
### Recognizing some TU matrices {#section-129-recognizing-some-tu-matrices}

Several closure properties help:

- permuting rows or columns preserves TU;
- multiplying a row or column by \\(-1\\) preserves TU;
- appending a unit row or unit column preserves TU;
- the node-edge incidence matrix of a directed graph is TU;
- the zero-one vertex-edge incidence matrix of a bipartite graph is TU after
  signing one vertex class.

The last statement explains an integrality contrast in graph matchings. For a
bipartite graph, degree constraints with nonnegative edge variables have an
integral matching polytope. On an odd cycle, assigning \\(1/2\\) to every edge
satisfies all degree constraints and is fractional. Graph parity, not a solver
setting, causes the difference.

<a id="section-144-worked-bipartite-example"></a>
### Worked bipartite example {#section-146-worked-bipartite-example}

For a four-cycle with edges in cyclic order, impose \\(x_e\\ge 0\\) and at each vertex
the sum of incident edge variables at most one. The point
\\((1/2,1/2,1/2,1/2)\\) is feasible but is the average of the two alternating
perfect matchings. It is not an extreme point. TU ensures every extreme point
is integral, even though the polytope contains fractional nonvertices.

This distinction matters: an integral polyhedron contains infinitely many
fractional convex combinations. “Integral” describes its vertices or equality
with the convex hull of integer points, not every point.

<a id="section-156-valid-inequalities-by-aggregation-and-rounding"></a>
## Valid inequalities by aggregation and rounding {#section-158-valid-inequalities-by-aggregation-and-rounding}

Suppose integer variables satisfy \\(Ax\\le b\\). Choose multipliers \\(u\\ge 0\\). Then

\\(u^{\\mathsf T} A x\\le u^{\\mathsf T} b\\)

is valid by nonnegative aggregation. If every entry of \\(u^{\\mathsf T} A\\) is integer and
\\(x\\) is integer, the left side is integer, so the stronger inequality

\\(u^{\\mathsf T} A x\\le \\lfloor u^{\\mathsf T} b\\rfloor\\)

is also valid. This is a Chvátal–Gomory rounding step.

<a id="section-169-worked-odd-cycle-cut"></a>
### Worked odd-cycle cut {#section-171-worked-odd-cycle-cut}

For a triangle independent-set relaxation,

\\(x_1+x_2\\le 1\\), \\(x_2+x_3\\le 1\\), \\(x_3+x_1\\le 1\\), \\(x \\in [0,1]^{3}\\),

take one-half of each edge inequality. The aggregate is

\\(x_1+x_2+x_3\\le 3/2\\).

The left side is integer on binary points, so rounding the right side down gives

\\(x_1+x_2+x_3\\le 1\\).

The fractional point \\((1/2,1/2,1/2)\\) violates the cut. Validity comes from
aggregation and integrality, not from observing the violation. On a five-cycle,
the same argument gives \\(\\sum x_i\\le 2\\).

**Arithmetic boundary.** If multipliers and coefficients are stored
approximately, deciding that \\(u^{\\mathsf T} A\\) is exactly integral can be unsafe. A proof
log should store rational multipliers or provide exact reconstruction and a
checkable residual.

<a id="section-192-other-sources-of-valid-inequalities"></a>
## Other sources of valid inequalities {#section-194-other-sources-of-valid-inequalities}

<a id="section-194-convex-hull-descriptions-of-small-disjunctions"></a>
### Convex-hull descriptions of small disjunctions {#section-196-convex-hull-descriptions-of-small-disjunctions}

If a variable must satisfy one of finitely many alternatives, derive an
inequality valid for each alternative, or introduce variables that describe the
convex hull of their union. A big-M implication is valid only when \\(M\\) follows
from actual bounds. A hull formulation can be stronger but larger.

<a id="section-201-cover-inequalities"></a>
### Cover inequalities {#section-203-cover-inequalities}

For binary \\(x\\) satisfying

\\(\\sum_i a_i x_i\\le b\\), with \\(a_i>0\\),

a set \\(C\\) is a cover when \\(\\sum_{i \\in C} a_i>b\\). Not every member of \\(C\\) can be
one, so

\\(\\sum_{i \\in C} x_i\\le \\lvert C\\rvert-1\\)

is valid. Minimal covers avoid obvious redundancy, and lifting can add variables
outside \\(C\\). Validity of lifted coefficients needs a derivation; copying a
coefficient pattern from another instance is not proof.

<a id="section-216-symmetry-breaking-inequalities"></a>
### Symmetry-breaking inequalities {#section-218-symmetry-breaking-inequalities}

When several variable assignments encode the same mathematical object, a
constraint can select a canonical representative. This changes the encoded
set but may preserve one representative of every equivalence class and the
optimal value. The mapping must be proved. An incorrect symmetry breaker can
remove every optimal representative.

<a id="section-224-separation-versus-optimization"></a>
## Separation versus optimization {#section-226-separation-versus-optimization}

Given a point \\(\\hat{x}\\), a separation problem either confirms that \\(\\hat{x}\\) lies in
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

<a id="section-248-from-cuts-to-bounds"></a>
## From cuts to bounds {#section-250-from-cuts-to-bounds}

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

<a id="section-263-failure-diagnostics"></a>
## Failure diagnostics {#section-265-failure-diagnostics}

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

<a id="section-276-practice-with-full-solutions"></a>
## Practice with full solutions {#section-278-practice-with-full-solutions}

**1. Vertex test.** Find the vertices of
\\(P=\\{x\\ge 0,y\\ge 0,x+y\\le 1\\}\\) and explain why \\((1/2,1/2)\\) is not a vertex.

**Solution.** The vertices are \\((0,0),(1,0),(0,1)\\), obtained from pairs of
independent tight constraints. The point \\((1/2,1/2)\\) lies on \\(x+y=1\\) but only
one independent inequality is tight. It is also the midpoint of \\((1,0)\\) and
\\((0,1)\\), so it is not extreme.

**2. A cover cut.** Binary variables satisfy
\\(4x_1+3x_2+2x_3\\le 5\\). Give a valid inequality from cover \\(\\{1,2\\}\\) and test the
fractional point \\((0.7,0.7,0)\\).

**Solution.** Because \\(4+3>5\\), variables one and two cannot both be one, so
\\(x_1+x_2\\le 1\\) is valid. The fractional point has sum \\(1.4\\) and is cut off. Its
violation demonstrates usefulness, while the cover argument proves validity.

**3. CG rounding.** Integer nonnegative \\(x,y\\) satisfy
\\(2x+y\\le 3\\) and \\(x+2y\\le 3\\). Aggregate with multipliers \\(1/3,1/3\\) and derive a cut.

**Solution.** The aggregate is
\\(x+y\\le 2\\). The coefficient row is already integral and the right side is exactly
two, so rounding changes nothing. To derive the stronger fact \\(x+y\\le 2\\) one did
not need integrality beyond the aggregation. The exercise warns that a CG step
need not strengthen after rounding; validity and novelty are different.

**4. Odd-cycle inequality.** Use half-summation to derive the five-cycle
independent-set inequality.

**Solution.** Sum the five edge constraints \\(x_i+x_{i+1}\\le 1\\). Every variable
appears twice, so half the sum gives \\(\\sum_i x_i\\le 5/2\\). The left side is integer
for binary \\(x\\); rounding down yields \\(\\sum_i x_i\\le 2\\). The half-vector violates
the cut with value \\(5/2\\), while every binary independent set satisfies it.

<a id="section-311-connections-and-summary"></a>
## Connections and summary {#section-313-connections-and-summary}

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

<a id="section-325-source-and-verification-note"></a>
## Sources {#section-327-source-and-verification-note}

Further reading includes Schrijver (1986) and Conforti–Cornuéjols–Zambelli (2014) as modern routes for Chvátal–Gomory definitions and finite-generation statements, with no exact theorem/page locator specified here. Rationality and integrality assumptions remain explicit.
`;export{e as default};