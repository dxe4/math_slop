var e=`---
parent_id: book-numerical-mathematics-optimization-by-structure
matter_id: exercise-program-part-ii
title: "Exercise Program, Part II: Discrete and Verified Optimization"
license: CC BY-SA 4.0
---

# Exercise Program, Part II: Discrete and Verified Optimization

This supplement contains 124 new exercises for Chapters 10–18. Every exercise has a complete solution. The problems stay inside mathematical optimization: integer and polyhedral models, valid inequalities, finite branching proofs, mixed-integer convex structure, certificates, global nonconvex bounds, verified computation, and proof-log synthesis. They do not introduce logistics or general operations-research applications.

Unless a problem says otherwise, minimization bounds are lower bounds, maximization bounds are upper bounds, and all displayed decimal endpoints are exact decimal rationals. A numerical claim is called *verified* only when the solution supplies exact arithmetic or an explicitly outward-rounded enclosure. The three longer exercises labeled “bounded mathematical optimization project” have finite deliverables and are included in the count of 124.

## Chapter 10 — Integer formulations and relaxations

### Exercise 1 — Binary implication

For binary variables \\(x,y\\), formulate \\(x=1\\Rightarrow y=1\\) with one linear inequality and list all feasible binary pairs.

**Solution.** Use \\(x\\le y\\). The feasible pairs are \\((0,0),(0,1),(1,1)\\). The excluded pair \\((1,0)\\) is exactly the assignment that makes the antecedent true and the consequent false. Thus the inequality is equivalent to the implication on the binary domain.

### Exercise 2 — Exclusive choice

Give a linear formulation saying exactly one of three binary variables \\(z_1,z_2,z_3\\) equals one. Determine the vertices of its continuous relaxation.

**Solution.** The formulation is \\(z_1+z_2+z_3=1\\), \\(z_i\\in\\{0,1\\}\\). Replacing integrality by \\(z_i\\ge0\\) gives the standard simplex. Its vertices are \\((1,0,0),(0,1,0),(0,0,1)\\), all integral. Hence this small formulation is ideal.

### Exercise 3 — Bounded integer expansion

Represent \\(u\\in\\{0,1,2,3,4,5\\}\\) using three binary variables without admitting values 6 or 7.

**Solution.** Write \\(u=b_0+2b_1+4b_2\\), \\(b_i\\in\\{0,1\\}\\), and add \\(b_0+2b_1+4b_2\\le5\\). Every integer from 0 through 5 has its usual three-bit representation. The added inequality removes precisely the bit patterns 110 and 111, whose encoded values are 6 and 7.

### Exercise 4 — A weak big-M relaxation

Consider \\(0\\le x\\le100\\), \\(y\\in\\{0,1\\}\\), and the intended implication \\(y=0\\Rightarrow x=0\\). Compare \\(x\\le100y\\) with \\(x\\le1000y\\) at \\(y=0.1\\).

**Solution.** Both are valid for the integer model, but the first permits only \\(x\\le10\\) at \\(y=0.1\\), whereas the second permits \\(x\\le100\\), the original box bound. Thus \\(M=1000\\) destroys relaxation strength. The smallest valid coefficient supplied by the declared bound is \\(M=100\\).

### Exercise 5 — Integer and continuous optima

Maximize \\(x+y\\) subject to \\(2x+2y\\le3\\), \\(x,y\\ge0\\). Compute the optimum first with \\(x,y\\) continuous and then with \\(x,y\\) integer.

**Solution.** The continuous constraint is \\(x+y\\le3/2\\), so the relaxation optimum is \\(3/2\\), attained along the boundary segment. With nonnegative integrality, \\(x+y\\) is an integer no larger than \\(3/2\\), hence at most 1. Both \\((1,0)\\) and \\((0,1)\\) attain 1. The additive relaxation gap is \\(1/2\\).

### Exercise 6 — Ratio-gap boundary

A minimization problem has integer optimum \\(z_I=0\\) and relaxation optimum \\(z_R=-1\\). Explain why the ratio \\(z_I/z_R\\) is a poor gap report and give an unambiguous alternative.

**Solution.** The ratio equals zero, but that number does not express the one-unit separation and changes unpredictably under objective translation. Report the signed additive gap \\(z_I-z_R=1\\), together with the sense of optimization and both endpoint values. A relative gap needs a declared positive scale; none is supplied here.

### Exercise 7 — Linearizing a binary product

Let \\(w=xy\\) for binary \\(x,y\\). Give the standard linear formulation and prove it is exact on binary points.

**Solution.** Use \\(w\\le x\\), \\(w\\le y\\), \\(w\\ge x+y-1\\), and \\(w\\ge0\\). If either factor is zero, an upper inequality and nonnegativity force \\(w=0\\). If \\(x=y=1\\), the lower inequality gives \\(w\\ge1\\), while either upper inequality gives \\(w\\le1\\). Thus \\(w=xy\\) in all four binary cases.

### Exercise 8 — Convex-hull comparison

Find the convex hull of \\(S=\\{(0,0),(1,0),(1,1)\\}\\) and decide whether the box relaxation \\([0,1]^2\\) is ideal for this set.

**Solution.** The hull is described by \\(0\\le y\\le x\\le1\\). Indeed its three vertices are exactly the listed points. The box also contains \\((0,1)\\), which is not in the hull because it violates \\(y\\le x\\). Therefore the box is a valid but nonideal relaxation; adding \\(y\\le x\\) makes it ideal.

### Exercise 9 — An exact absolute-value epigraph

Formulate \\(\\min\\{|x-2|:x\\in\\mathbb Z,\\ 0\\le x\\le5\\}\\) as a mixed-integer linear problem and solve it.

**Solution.** Introduce continuous \\(t\\) and impose \\(t\\ge x-2\\), \\(t\\ge2-x\\), \\(t\\ge0\\), with the stated integer bounds on \\(x\\). Then minimize \\(t\\). Every feasible point has \\(t\\ge|x-2|\\), and equality can be chosen. The optimum is \\(x=2,t=0\\), uniquely in \\(x\\).

### Exercise 10 — Redundant but strengthening

For binary \\(x_1,x_2,x_3\\) satisfying \\(2x_1+2x_2+2x_3\\le3\\), derive a valid inequality that cuts the fractional point \\((1/2,1/2,1/2)\\).

**Solution.** Since the left side is twice the integer \\(x_1+x_2+x_3\\), the constraint implies \\(x_1+x_2+x_3\\le\\lfloor3/2\\rfloor=1\\). The fractional point has sum \\(3/2\\), so it is cut. The inequality is redundant for binary feasibility but strengthens the continuous relaxation.

### Exercise 11 — Negated conjunction

Model \\(z=1\\) exactly when not both binary variables \\(x\\) and \\(y\\) equal one.

**Solution.** Since \\(z=1-xy\\), linearize directly with \\(z\\le2-x-y\\), \\(z\\ge1-x\\), \\(z\\ge1-y\\), and \\(z\\in\\{0,1\\}\\). At \\((1,1)\\), the upper bound forces \\(z=0\\). If either input is zero, a lower bound forces \\(z=1\\). These cases exhaust the binary domain.

### Exercise 12 — Epigraph relaxation direction

Suppose \\(f(x)=x^2\\) and one replaces the equality \\(t=f(x)\\) by \\(t\\ge f(x)\\) while minimizing \\(t+x\\) over \\(-1\\le x\\le1\\). Is the replacement exact? Solve the problem.

**Solution.** For every fixed \\(x\\), minimization chooses the smallest allowed \\(t\\), namely \\(x^2\\); therefore the epigraph replacement is exact. Minimize \\(x^2+x=(x+1/2)^2-1/4\\). The optimum is \\(x=-1/2,t=1/4\\), with value \\(-1/4\\).

### Exercise 13 — Formulation projection

Show that the extended system \\(x=u-v\\), \\(u,v\\ge0\\), \\(u+v\\le1\\) projects onto the interval \\([-1,1]\\) in the \\(x\\)-coordinate.

**Solution.** Feasibility implies \\(|x|=|u-v|\\le u+v\\le1\\), so every projection lies in \\([-1,1]\\). Conversely, if \\(x\\in[0,1]\\), choose \\(u=x,v=0\\); if \\(x\\in[-1,0]\\), choose \\(u=0,v=-x\\). Thus every point of the interval has a lift, proving exact projection.

### Exercise 14 — Modeling audit

A model uses \\(x\\le My\\) with \\(x\\in[-3,8]\\) and says \\(y=0\\Rightarrow x=0\\). Identify the defect and repair it without changing the declared bounds.

**Solution.** The single upper inequality forces \\(x\\le0\\) when \\(y=0\\) but still permits negative \\(x\\). Add the lower link \\(x\\ge-3y\\), retaining \\(x\\le8y\\). When \\(y=0\\), both give \\(x=0\\); when \\(y=1\\), they reproduce exactly \\(-3\\le x\\le8\\).

## Chapter 11 — Polyhedral integrality and valid inequalities

### Exercise 15 — Vertex test in two dimensions

List the vertices of \\(P=\\{(x,y):x\\ge0,y\\ge0,x+2y\\le4\\}\\).

**Solution.** A two-dimensional vertex occurs where two independent boundary equations meet. The coordinate axes meet at \\((0,0)\\); \\(y=0\\) and \\(x+2y=4\\) meet at \\((4,0)\\); \\(x=0\\) and the slanted boundary meet at \\((0,2)\\). All are feasible, and there are no other boundary intersections. Thus these are precisely the vertices.

### Exercise 16 — A nonvertex boundary point

Prove that \\((2,1)\\) is not a vertex of the polyhedron in Exercise 15.

**Solution.** It lies on \\(x+2y=4\\), but it is the midpoint of the distinct feasible vertices \\((4,0)\\) and \\((0,2)\\): \\((2,1)=\\tfrac12(4,0)+\\tfrac12(0,2)\\). A vertex cannot be a nontrivial convex combination of distinct feasible points, so \\((2,1)\\) is not a vertex.

### Exercise 17 — Face exposed by an objective

Maximize \\(x+2y\\) over the polyhedron in Exercise 15 and identify the optimal face.

**Solution.** The defining inequality gives an upper bound of 4, attained whenever \\(x+2y=4\\) with \\(x,y\\ge0\\). Hence the optimum is 4 and the optimal face is the entire segment from \\((4,0)\\) to \\((0,2)\\), not a unique vertex.

### Exercise 18 — Determinant obstruction to total unimodularity

Show that \\(A=\\begin{pmatrix}1&1\\\\1&-1\\end{pmatrix}\\) is not totally unimodular.

**Solution.** Total unimodularity requires every square subdeterminant to belong to \\({-1,0,1}\\). The determinant of \\(A\\) itself is \\(-1-1=-2\\). This single subdeterminant is a certificate that \\(A\\) is not totally unimodular.

### Exercise 19 — Consecutive-ones determinant check

Compute all \\(2\\times2\\) minors of \\(A=\\begin{pmatrix}1&1&0\\\\0&1&1\\end{pmatrix}\\) and state what this establishes and what it does not.

**Solution.** Columns \\(1,2\\) give determinant \\(1\\); columns \\(1,3\\) give \\(1\\); columns \\(2,3\\) give \\(1\\). The entries are also \\(0\\) or \\(1\\), so every square minor of this particular \\(2\\times3\\) matrix is \\(0\\) or \\(1\\); hence this matrix is TU. Merely checking a few selected minors of a larger matrix would not prove TU.

### Exercise 20 — Integer right-hand side consequence

Minimize \\(-x_1-x_2\\) subject to \\(x_1+x_2\\le1\\), \\(x\\ge0\\). Explain directly why an integral optimum exists.

**Solution.** The feasible region is the simplex with vertices \\((0,0),(1,0),(0,1)\\), all integral. A linear objective attains an optimum at a vertex. Both \\((1,0)\\) and \\((0,1)\\) give value \\(-1\\), so an integral optimum exists even without declaring \\(x\\) integer.

### Exercise 21 — Odd-cycle inequality

For binary variables on a 5-cycle with edge constraints \\(x_i+x_{i+1}\\le1\\), derive a valid inequality for the total sum and show that \\(x_i=1/2\\) violates it.

**Solution.** An independent set in a 5-cycle contains at most \\(\\lfloor5/2\\rfloor=2\\) vertices, so \\(\\sum_{i=1}^5x_i\\le2\\) is valid. The all-halves point satisfies every edge constraint at equality but has sum \\(5/2>2\\), so the cycle inequality cuts it.

### Exercise 22 — Cover inequality

Given \\(4x_1+3x_2+2x_3\\le5\\) with binary variables, find a minimal cover and its cover inequality.

**Solution.** The set \\({1,3}\\) has weight \\(4+2=6>5\\), while either singleton fits, so it is a minimal cover. Its members cannot both be selected; therefore \\(x_1+x_3\\le1\\) is valid. Likewise \\({1,2}\\) is another minimal cover, but only one was requested.

### Exercise 23 — Validity by aggregation and rounding

From \\(3x_1+3x_2+x_3\\le5\\), \\(x\\in\\mathbb Z_+^3\\), derive an inequality by dividing by 3 and rounding coefficients and right-hand side downward.

**Solution.** Division gives \\(x_1+x_2+\\tfrac13x_3\\le5/3\\). Since \\(x_1+x_2\\) is integer and the omitted term is nonnegative, \\(x_1+x_2\\le\\lfloor5/3\\rfloor=1\\). The argument uses both integrality and nonnegativity; without them the rounding would not be justified.

### Exercise 24 — Facet dimension check

In the square \\(P=[0,1]^2\\), is \\(x\\le1\\) facet-defining? Is \\(x+y\\le2\\) facet-defining?

**Solution.** A facet of a two-dimensional polytope has dimension one. Equality \\(x=1\\) cuts out the edge from \\((1,0)\\) to \\((1,1)\\), so \\(x\\le1\\) defines a facet. Equality \\(x+y=2\\) holds only at \\((1,1)\\), a zero-dimensional face, so that valid inequality is not facet-defining.

### Exercise 25 — Integer hull of a one-row set

Find the integer hull of \\(P=\\{x\\in\\mathbb R:0\\le x\\le5/2\\}\\).

**Solution.** The integer points are \\(0,1,2\\). Their convex hull is the interval \\([0,2]\\). Thus the integer hull is obtained by strengthening the upper bound to \\(x\\le2\\). This is the one-dimensional instance of rounding an integral variable's bound.

### Exercise 26 — Separating a point

Separate \\(\\bar x=(0.8,0.8)\\) from \\(P=\\{x\\ge0:x_1+x_2\\le1\\}\\) and report the signed violation.

**Solution.** The defining inequality itself separates the point: \\(x_1+x_2\\le1\\). At \\(\\bar x\\), the left side is \\(1.6\\), so the signed violation in this normalization is \\(1.6-1=0.6\\). Scaling the inequality changes this raw number, which is why comparisons require normalization.

### Exercise 27 — Symmetry-breaking validity

Suppose an objective and all constraints are invariant under exchanging binary \\(x_1,x_2\\). Show that adding \\(x_1\\ge x_2\\) preserves at least one optimum.

**Solution.** Take any optimum. If it already satisfies the inequality, retain it. Otherwise \\(x_1=0,x_2=1\\); exchanging the coordinates produces another feasible point with the same objective value, now satisfying \\(x_1=1,x_2=0\\). The added inequality can remove symmetric copies but not all optima. The invariance hypothesis is essential.

## Chapter 12 — Branch-and-bound and cutting ideas

### Exercise 28 — Root bound

Minimize \\(x\\) subject to \\(x\\ge3/2\\), \\(x\\in\\mathbb Z\\). Give both optima.

**Solution.** The relaxation optimum \\(3/2\\) is a lower bound. Integrality forces \\(x\\ge2\\), attained at 2, so the root gap is \\(1/2\\).

### Exercise 29 — Complete split

At relaxation value 2.4, prove \\(x\\le2\\) or \\(x\\ge3\\) covers integer \\(x\\).

**Solution.** Every integer is at most 2 or at least 3; none lies between. Intersecting both alternatives with the parent covers its integer points.

### Exercise 30 — Bound pruning

For minimization, \\(U=11\\). Classify nodes with lower bounds 12 and 10.

**Solution.** Bound 12 prunes because it cannot improve 11. Bound 10 remains open because it may contain a value below 11.

### Exercise 31 — Incumbent update

A feasible minimization point has value 7 when \\(U=9\\). What changes?

**Solution.** Store its witness and set \\(U=7\\). This enables possible pruning but does not itself close any node.

### Exercise 32 — Objective rounding

An integer-valued maximization objective has relaxation bound 8.7. Strengthen it.

**Solution.** Every integer objective value at most 8.7 is at most \\(\\lfloor8.7\\rfloor=8\\). Objective integrality is essential.

### Exercise 33 — Two-leaf proof

Maximize integer \\(x\\) on \\(0\\le x\\le3/2\\), using \\(x\\le0\\) or \\(x\\ge1\\).

**Solution.** The first leaf has optimum 0; the second contains only integer 1. Coverage and incumbent \\(x=1\\) prove optimum 1.

### Exercise 34 — Infeasible leaf

Certify a node with \\(x\\le1\\), \\(x\\ge2\\).

**Solution.** It implies \\(2\\le x\\le1\\), impossible even continuously. The two inherited bounds are an exact infeasibility certificate.

### Exercise 35 — Local cut

A cut uses branch assumption \\(x_1=0\\). Where is it valid?

**Solution.** Only at that node and descendants inheriting \\(x_1=0\\), unless a separate global derivation is given.

### Exercise 36 — Leaf count

A full binary tree has seven nodes. Count its leaves.

**Solution.** \\(L=I+1\\) and \\(L+I=7\\), so \\(I=3,L=4\\).

### Exercise 37 — Tolerance prune

For exact minimization, may \\(L=4.999\\) prune against \\(U=5\\)?

**Solution.** No; exact pruning needs \\(L\\ge U\\). The values support only a declared approximate-gap claim.

### Exercise 38 — Cut effect

Maximize \\(x_1+x_2\\) on \\([0,1]^2\\), before and after \\(x_1+x_2\\le1\\).

**Solution.** The initial bound is 2 at \\((1,1)\\); afterward it is 1, attained at either unit vector.

### Exercise 39 — Bounded mathematical optimization project 1: finite tree replay

Solve \\(\\max 3x+2y\\) subject to \\(2x+2y\\le5\\), \\(x,y\\in\\mathbb Z_+\\), with a complete exact tree.

**Solution.** The root relaxation \\((5/2,0)\\) has bound \\(15/2\\). Split \\(x\\le2\\) or \\(x\\ge3\\); the latter is infeasible. The first relaxes to \\((2,1/2)\\), bound 7. Split \\(y\\le0\\) or \\(y\\ge1\\). The first leaf yields \\((2,0)\\), value 6. In the second, possible \\(y=1,2\\) give best \\((1,1)\\), value 5. Both splits cover all integers; the bounded deliverable is this three-leaf ledger and incumbent witness, proving optimum 6.

### Exercise 40 — Node selection

Best-bound minimization sees bounds 3 and 5. Which is selected, and is validity affected?

**Solution.** Select 3. Order changes effort, not correctness, if every node is eventually closed or covered by a valid stopping certificate.

### Exercise 41 — Tree gap

Open lower bounds are 6, 8, 9 and \\(U=7\\). Find the gap and prune.

**Solution.** Global lower bound is 6, so gap is 1. Bounds 8 and 9 prune; bound 6 remains open.

### Exercise 42 — Relaxation monotonicity

A minimization child formed only by added constraints reports a valid but weaker lower bound 3 below its parent's certified lower bound 4. What effective node bound should the ledger use, and when would the report indicate an inconsistency?

**Solution.** Use \\(\\max\\{4,3\\}=4\\): the parent's certified bound remains valid after restricting its feasible set, while a valid lower bound need not be tight. There is no inconsistency merely because the child procedure reports the weaker bound 3. An inconsistency arises if 3 is claimed to be the *exact child relaxation optimum*, because adding constraints to a minimization relaxation cannot decrease that optimum below the parent's certified value 4.

## Chapter 13 — Separation and branching strategies

### Exercise 43 — Scale-dependent violation

At \\((1,1)\\), compare violations of \\(x_1+x_2\\le1\\) and \\(10x_1+10x_2\\le10\\).

**Solution.** Raw violations are 1 and 10 although the halfspaces coincide. After division by normal length, both are \\(1/\\sqrt2\\).

### Exercise 44 — Exact rounding cut

From \\(x_1+x_2\\le3/2\\) with integer variables, derive a cut.

**Solution.** The left side is integer, hence at most \\(\\lfloor3/2\\rfloor=1\\). Thus \\(x_1+x_2\\le1\\).

### Exercise 45 — Branching score

Compare child improvements \\((2,5)\\) and \\((3,3)\\) using their minimum.

**Solution.** Scores are 2 and 3, so the second candidate wins. This changes search effort, not validity.

### Exercise 46 — Product score

Using \\(s=\\max(\\Delta^-,0.1)\\max(\\Delta^+,0.1)\\), compare \\((0,8)\\) and \\((1,2)\\).

**Solution.** Scores are 0.8 and 2; choose the second. The floor is a declared heuristic parameter.

### Exercise 47 — Negative branch

Write the floor/ceiling split at \\(\\bar x=-1.2\\).

**Solution.** Use \\(x\\le-2\\) or \\(x\\ge-1\\). They cover all integers; truncation toward zero would fail.

### Exercise 48 — Local propagation

At a node \\(x+y\\le4\\), \\(x\\ge3\\). Bound \\(y\\).

**Solution.** Substitution gives \\(y\\le1\\). It is local when \\(x\\ge3\\) is a branch assumption.

### Exercise 49 — Separation failure

A restricted cut oracle finds nothing. State the conclusion.

**Solution.** No violated cut was found in that searched family. Integer-hull membership needs a complete family and exhaustive exact search.

### Exercise 50 — Cut dominance

On \\([0,1]^2\\), compare sum bounds 1 and \\(3/2\\).

**Solution.** \\(x_1+x_2\\le1\\) implies the latter strictly: \\((3/4,3/4)\\) satisfies only the weaker bound. Hence the former dominates.

### Exercise 51 — Broken disjunction

Why do \\(x\\le0\\) or \\(x\\ge2\\) fail at value 0.6? Repair them.

**Solution.** They omit integer 1. Use \\(x\\le0\\) or \\(x\\ge1\\), covering every integer and excluding 0.6.

### Exercise 52 — Normalized efficacy

Compute efficacy of \\(3x+4y\\le5\\) at \\((1,1)\\).

**Solution.** Violation is 2 and normal length is 5, so efficacy is \\(2/5\\).

### Exercise 53 — Pseudocost

Displacement 0.4 improved a bound by 1.2. Predict improvement for 0.7 linearly.

**Solution.** Rate \\(1.2/0.4=3\\) predicts \\(2.1\\). This heuristic is not a pruning certificate.

### Exercise 54 — Aggregation replay

A cut is twice \\(x_1\\le1\\) plus \\(x_2\\le2\\). Reconstruct and test \\((1,2)\\).

**Solution.** It is \\(2x_1+x_2\\le4\\); the test point satisfies equality.

### Exercise 55 — Traversal order

Does right-before-left traversal invalidate a complete tree?

**Solution.** No. Validity requires explicit coverage and closure of every leaf, not chronological order.

### Exercise 56 — Candidate comparison boundary

One branch estimate is computed exactly and another by a heuristic. May their scores certify pruning?

**Solution.** No. Scores may choose a variable, but pruning requires a certified node bound. Heuristic comparability does not create proof validity.

## Chapter 14 — Mixed-integer convex methods

### Exercise 57 — Convex-node relaxation

Minimize \\((x-3)^2+y\\) over \\(0\\le x\\le4\\), \\(y\\in\\{0,1\\}\\), \\(x\\le2+y\\). Solve both integer assignments.

**Solution.** If \\(y=0\\), \\(x\\le2\\), so \\(x=2\\) gives value 1. If \\(y=1\\), \\(x\\le3\\), so \\(x=3\\) gives value 1. Both are global minimizers.

### Exercise 58 — Relaxed indicator

For Exercise 57 relax \\(0\\le y\\le1\\). Find a point improving value 1.

**Solution.** Set \\(x=3\\); then \\(x\\le2+y\\) forces \\(y=1\\), so no improvement there. Minimizing over \\(y\\ge x-2\\) gives \\((x-3)^2+\\max(0,x-2)\\). On \\(2\\le x\\le3\\), derivative \\(2(x-3)+1=0\\) gives \\(x=5/2,y=1/2\\), value \\(3/4<1\\).

### Exercise 59 — Perspective inequality

For \\(y\\in\\{0,1\\}\\), \\(x=0\\) when \\(y=0\\), verify \\(t y\\ge x^2\\), \\(t\\ge0\\) represents \\(t\\ge x^2\\) when active.

**Solution.** At \\(y=1\\) it becomes \\(t\\ge x^2\\). At \\(y=0\\), feasibility forces \\(x^2\\le0\\), hence \\(x=0\\), while \\(t\\ge0\\). Thus both disjuncts are represented; the continuous perspective also strengthens fractional \\(y\\).

### Exercise 60 — Supporting cut

Derive the tangent lower bound to \\(f(x)=x^2\\) at \\(x_0=2\\).

**Solution.** Convexity gives \\(f(x)\\ge f(2)+f'(2)(x-2)=4+4(x-2)=4x-4\\). Hence an epigraph variable obeys \\(t\\ge4x-4\\).

### Exercise 61 — Subgradient cut

For \\(Q(y)=|y-1|\\), form a supporting cut at \\(y=0\\).

**Solution.** A subgradient at 0 is \\(-1\\), so \\(Q(y)\\ge Q(0)-y=1-y\\). Equality holds at \\(y=0\\), validating the cut.

### Exercise 62 — Initial master floor

Why can \\(\\min\\theta\\) with only accumulated lower planes be unbounded initially? Give a repair if \\(Q(y)\\ge0\\).

**Solution.** With no plane, \\(\\theta\\) has no lower bound and tends to \\(-\\infty\\). Add the valid floor \\(\\theta\\ge0\\); it bounds the initial master without excluding any epigraph point.

### Exercise 63 — Finite assignment termination

Explain why exact enumeration of \\(m\\) binary variables terminates.

**Solution.** There are only \\(2^m\\) assignments. If each is processed once and its convex subproblem is solved or certified infeasible, after at most \\(2^m\\) cases none remain.

### Exercise 64 — Big-M from a box

Derive \\(M\\) for \\(a^\\top x\\le b+M(1-y)\\) when \\(l\\le x\\le u\\).

**Solution.** To deactivate the row at \\(y=0\\), choose \\(M=\\max_{l\\le x\\le u}(a^\\top x-b)=\\sum_{a_i>0}a_i u_i+\\sum_{a_i<0}a_i l_i-b\\), clipped below at zero.

### Exercise 65 — Convexity of a node

Is \\(\\min e^x+x^2\\) subject to \\(x\\le c\\) a convex node problem?

**Solution.** Yes. Its second derivative \\(e^x+2>0\\), so the objective is strictly convex, and the half-line constraint is convex. Any local minimizer is global and unique.

### Exercise 66 — Fractional incumbent error

A convex relaxation returns \\(y=0.3\\) with low objective. May it update a mixed-integer incumbent?

**Solution.** No. An incumbent must satisfy all original constraints, including integrality. The fractional point supplies a relaxation bound, not a feasible objective value.

### Exercise 67 — Nondifferentiable node

Minimize \\(|x|+(x-1)^2\\). Find the minimizer using subgradients.

**Solution.** For \\(x>0\\), derivative \\(1+2(x-1)=2x-1\\) vanishes at \\(x=1/2\\). For \\(x<0\\), derivative \\(-1+2(x-1)=2x-3\\) has no negative zero. At 0 the subgradient interval is \\([-3,-1]\\), excluding zero. Thus the unique minimizer is \\(1/2\\).

### Exercise 68 — Conditional sensitivity

Why does a multiplier computed with binary assignment \\(y=1\\) not automatically describe changing \\(y\\) to zero?

**Solution.** The multiplier differentiates a continuous perturbation within the fixed-assignment subproblem. Switching \\(y\\) changes the feasible set discontinuously, so the local sensitivity claim has no such scope.

### Exercise 69 — Convex hull of two intervals

Describe the hull of \\(S=\\{(x,y):y=0,0\\le x\\le1\\}\\cup\\{(x,y):y=1,2\\le x\\le3\\}\\).

**Solution.** For \\(0\\le y\\le1\\), convex interpolation gives \\(2y\\le x\\le1+2y\\). At each endpoint it recovers the corresponding interval, and every intermediate point is a convex combination, so this is the hull.

### Exercise 70 — MICP gap certificate

A feasible point has value 12 and every open convex node has certified lower bound at least 12. State the conclusion.

**Solution.** The feasible point gives \\(U=12\\); node coverage and lower bounds give \\(L\\ge12\\). Weak bounding yields \\(L=U=12\\), proving global mixed-integer optimality.

## Chapter 15 — Certificates, diagnostics, and honest stopping

### Exercise 71 — Primal-dual gap

A convex minimization witness has value 4.02 and a dual-feasible witness has value 4.00. What is certified?

**Solution.** Weak duality brackets \\(p^\\star\\in[4.00,4.02]\\). The primal point is within 0.02 of optimal in objective value; exact optimality is not established.

### Exercise 72 — Scaled feasibility

For residual \\(r=(10^{-4},2)\\), compare \\(\\|r\\|_\\infty\\) before and after row scaling by \\((10^4,1/2)\\).

**Solution.** Initially the norm is 2. The scaled residual is \\((1,1)\\), norm 1. Residual tolerances are meaningless without the scaling convention.

### Exercise 73 — Stationarity is not globality

Give a stationary point of \\(f(x)=x^3\\) that is not a local optimum.

**Solution.** \\(f'(x)=3x^2\\), so \\(x=0\\) is stationary. Yet values are negative immediately to its left and positive to its right; it is neither a local minimum nor maximum.

### Exercise 74 — Strong-convexity distance

If \\(f\\) is 2-strongly convex and \\(f(x)-f^\\star\\le0.01\\), bound \\(\\|x-x^\\star\\|\\).

**Solution.** Strong convexity gives \\(f(x)-f^\\star\\ge(2/2)\\|x-x^\\star\\|^2\\). Hence distance is at most \\(\\sqrt{0.01}=0.1\\).

### Exercise 75 — Exact infeasibility witness

Show \\(x\\le0\\) and \\(x\\ge1\\) are infeasible by nonnegative aggregation.

**Solution.** Write \\(x\\le0\\) and \\(-x\\le-1\\). Adding them yields \\(0\\le-1\\), a contradiction. Multipliers \\((1,1)\\) form a replayable certificate.

### Exercise 76 — Unbounded ray

Certify that \\(\\min -x\\) subject to \\(x\\ge0\\) is unbounded below.

**Solution.** Start at \\(x_0=0\\) and use ray \\(d=1\\). Then \\(x_0+td\\ge0\\) for all \\(t\\ge0\\), while objective \\(-t\\to-\\infty\\).

### Exercise 77 — Relative-gap zero boundary

Why is \\(|U-L|/|U|\\) defective at \\(U=0\\)?

**Solution.** Its denominator vanishes. Report the absolute gap or use a declared safeguarded scale such as \\(\\max(1,|U|,|L|)\\); the convention must accompany the number.

### Exercise 78 — Complementarity residual

For \\(g(x)\\le0\\), multiplier \\(\\lambda\\ge0\\), compute complementarity residual at \\(g=-0.01,\\lambda=3\\).

**Solution.** The product is \\(\\lambda g=-0.03\\), commonly measured by absolute value 0.03. Feasibility and multiplier-sign residuals must still be reported separately.

### Exercise 79 — Honest timeout

A run times out with feasible value 20 and lower bound 17. Write the mathematically honest status.

**Solution.** “Terminated by time limit; feasible witness value 20; certified lower bound 17; absolute gap at most 3.” It must not say optimal.

### Exercise 80 — Interval decision

An outward-rounded constraint enclosure is \\([-0.002,0.004]\\) for a required value \\(\\le0\\). Classify it.

**Solution.** Inconclusive: the interval contains both feasible and infeasible values. Acceptance needs upper endpoint at most zero; rejection needs lower endpoint above zero.

### Exercise 81 — KKT sufficiency

For convex differentiable \\(f\\) and affine constraints under a valid qualification, what does a feasible KKT point certify?

**Solution.** It certifies global optimality. Without convexity it generally certifies only first-order stationarity, and without qualification multipliers need not exist at an optimum.

### Exercise 82 — Bounded mathematical optimization project 2: certificate dossier

For \\(\\min (x-2)^2\\) subject to \\(x\\ge3\\), deliver primal, dual/KKT, residual, and perturbation evidence.

**Solution.** The feasible optimum is \\(x^\\star=3\\), value 1. Write constraint \\(3-x\\le0\\) and Lagrangian \\(L=(x-2)^2+\\lambda(3-x)\\). Stationarity gives \\(2(x-2)-\\lambda=0\\), so \\(\\lambda^\\star=2\\); feasibility, \\(\\lambda\\ge0\\), and complementarity all hold exactly. Convexity makes KKT sufficient. If the lower bound becomes \\(x\\ge3+\\delta\\) for \\(\\delta\\ge-1\\), the optimizer is \\(3+\\delta\\) and value \\((1+\\delta)^2\\), whose derivative at zero is 2, agreeing with the multiplier. The bounded deliverable is these four exact rows, not a solver transcript.

### Exercise 83 — Digest boundary

What does a model-file hash establish?

**Solution.** It establishes byte identity of the hashed artifact under the named hash algorithm. It does not prove the model is mathematically correct or equivalent to another encoding.

### Exercise 84 — Residual vector

Why report primal, dual, stationarity, and complementarity residuals separately?

**Solution.** A single norm can hide which condition failed and can mix incompatible scales. The vector supports diagnosis and prevents a small aggregate from concealing one decisive violation.

## Chapter 16 — Nonconvex global bounds and spatial branching

### Exercise 85 — Interval square

Find the exact range of \\(x^2\\) on \\([-2,3]\\).

**Solution.** The interval contains zero, so the minimum is 0; the largest endpoint magnitude is 3, so the maximum is 9. The range is \\([0,9]\\), not the naive endpoint interval \\([4,9]\\).

### Exercise 86 — Natural interval overestimation

Evaluate \\(x-x\\) on \\(X=[0,1]\\) by naive interval arithmetic and compare with its true range.

**Solution.** Interval subtraction gives \\([0,1]-[0,1]=[-1,1]\\), whereas the identical occurrences cancel pointwise and the true range is \\(\\{0\\}\\). Dependency causes overestimation.

### Exercise 87 — Convex envelope of a bilinear term

On \\(0\\le x,y\\le1\\), state four linear inequalities for \\(w=xy\\).

**Solution.** The hull is \\(w\\ge0\\), \\(w\\ge x+y-1\\), \\(w\\le x\\), \\(w\\le y\\). These are the McCormick envelope on the unit box.

### Exercise 88 — Envelope check

At \\(x=0.3,y=0.8\\), find the allowed interval for \\(w\\) from Exercise 87.

**Solution.** Lower bounds are 0 and 0.1; upper bounds are 0.3 and 0.8. Thus \\(0.1\\le w\\le0.3\\); the true product 0.24 lies inside.

### Exercise 89 — Spatial split

Split \\(X=[-1,3]\\) at its midpoint and prove coverage.

**Solution.** The midpoint is 1, giving \\([-1,1]\\) and \\([1,3]\\). Their union is \\(X\\); overlap at 1 is harmless and no feasible point is lost.

### Exercise 90 — Lipschitz lower bound

If \\(f\\) is 2-Lipschitz on \\([0,1]\\) and \\(f(1/2)=3\\), give a global lower bound.

**Solution.** \\(f(x)\\ge3-2|x-1/2|\\ge3-1=2\\). Thus 2 is valid throughout the interval.

### Exercise 91 — Concave quadratic minimum

Minimize \\(-x^2+2x\\) on \\([0,3]\\).

**Solution.** A concave function attains its minimum on an interval at an endpoint. Values are 0 and \\(-9+6=-3\\), so minimum \\(-3\\) occurs at 3.

### Exercise 92 — Lower-bound ledger

Three boxes have lower bounds 1, 4, 2 and incumbent 3. Which boxes prune?

**Solution.** The bound-4 box prunes. Bounds 1 and 2 remain. The global lower bound is 1 and current gap is 2.

### Exercise 93 — Monotone range

Range \\(e^x\\) on \\([-2,1]\\).

**Solution.** Exponential is increasing, so the exact range is \\([e^{-2},e]\\). Directed rounding is required if endpoints are stored in floating point.

### Exercise 94 — Invalid sample bound

Samples of \\(f\\) on a box are all at least 5. Is 5 a certified lower bound?

**Solution.** No. Unsampled points may be smaller. A certificate needs interval inclusion, convex underestimation, Lipschitz analysis, or another theorem covering the whole box.

### Exercise 95 — Domain singularity

Can interval evaluation certify \\(1/x\\) on \\([-1,2]\\)?

**Solution.** Not as one finite interval because the box contains zero, where the function is undefined and unbounded nearby. Split away from zero or classify the box as crossing a singularity.

### Exercise 96 — Quadratic underestimator

Show \\(x^2\\ge2a x-a^2\\) for all real \\(x\\).

**Solution.** Rearrangement gives \\(x^2-2ax+a^2=(x-a)^2\\ge0\\). Thus every tangent line to the convex square is a global affine underestimator.

### Exercise 97 — Width contraction

Bisection starts with interval width 8. What is each descendant width after five level-wise midpoint splits?

**Solution.** Each split halves width, so it is \\(8/2^5=1/4\\).

### Exercise 98 — Epsilon-global claim

For minimization, certified \\(L=1.25\\) and feasible \\(U=1.30\\). State the exact conclusion.

**Solution.** The optimum lies in \\([1.25,1.30]\\), and the witness is within 0.05 of global optimality in absolute objective value. Exact optimality is not proved.

## Chapter 17 — Verified optimization software and proof logs

### Exercise 99 — Outward-rounded sum

Intervals \\(X=[1,2]\\), \\(Y=[-0.1,0.3]\\) have exactly represented endpoints. Enclose \\(X+Y\\).

**Solution.** Endpoint monotonicity gives \\([1-0.1,2+0.3]=[0.9,2.3]\\). In binary floating point, compute the lower endpoint downward and upper endpoint upward.

### Exercise 100 — Interval multiplication signs

Compute \\([-2,3][4,5]\\).

**Solution.** The four endpoint products are \\(-8,-10,12,15\\). Their minimum and maximum give \\([-10,15]\\).

### Exercise 101 — Rational reconstruction

The decimal 0.125 is logged as exact. Give its reduced rational and binary status.

**Solution.** \\(0.125=125/1000=1/8=2^{-3}\\). It is exactly representable in binary floating point; that fact does not make arbitrary decimals exact.

### Exercise 102 — Proof-object identity

A checker verifies a certificate for matrix \\(A\\), but the run optimized matrix \\(A'\\). What must happen?

**Solution.** Reject unless a verified transformation maps \\(A'\\) to \\(A\\). A valid proof for the wrong model establishes no claim about the run's optimization problem.

### Exercise 103 — Exact primal check

For \\(A=(1,2)\\), \\(b=5\\), verify \\(x=(1,2)\\) satisfies \\(Ax=b\\).

**Solution.** Exact dot product is \\(1+4=5=b\\). If nonnegativity is also required, both entries are nonnegative.

### Exercise 104 — Dual equality

For \\(\\min\\{2x_1+3x_2:x_1+x_2\\ge1,x\\ge0\\}\\), verify primal \\(x=(1,0)\\) and dual multiplier \\(y=2\\).

**Solution.** Primal value is 2. The dual is maximize \\(y\\) with \\(0\\le y\\le2\\) and \\(y\\le3\\); \\(y=2\\) is feasible with value 2. Equality plus weak duality proves optimality.

### Exercise 105 — Mutation test

A proof log contains bound \\(7/3\\). Propose one adverse mutation and expected checker response.

**Solution.** Replace it by \\(8/3\\) without changing its derivation inputs. Exact replay should detect inequality or arithmetic failure and reject at that record. Acceptance exposes an unchecked field.

### Exercise 106 — Tree coverage field

What minimum data lets a checker verify an integer split at value \\(k+\\theta\\), \\(0<\\theta<1\\)?

**Solution.** Record parent ID, variable ID, declared integrality, and children \\(x\\le k\\), \\(x\\ge k+1\\). The checker verifies both attachment and exhaustive integer coverage.

### Exercise 107 — Presolve substitution

If presolve fixes \\(x_2=2\\) in objective \\(3x_1+4x_2\\), what reconstruction data is required?

**Solution.** Store substitution \\(x_2=2\\) and objective offset 8. A reduced witness \\(x_1\\) lifts to \\((x_1,2)\\), and reduced objective \\(3x_1\\) becomes original value \\(3x_1+8\\).

### Exercise 108 — Stream truncation

A log ends after opening two children but before closing one. May a checker certify global optimality?

**Solution.** No. The open child represents uncovered feasible possibilities. The checker may report a verified prefix and incumbent, but the global claim fails.

### Exercise 109 — Deterministic replay

Why record tie-breaking even if either tied cut is valid?

**Solution.** Validity of each cut does not identify the produced run. A deterministic rule permits byte-stable replay, debugging, and comparison of the certificate actually claimed.

### Exercise 110 — Directed-rounding failure

A lower bound is computed using round-to-nearest. Can it be accepted solely because the residual is tiny?

**Solution.** No. Round-to-nearest may round upward and invalidate a lower bound. Recompute with directed rounding, exact rationals, or a rigorous error enclosure.

### Exercise 111 — Checker independence

Why should a checker avoid calling the same optimization routine as the producer?

**Solution.** Shared logic can repeat the same defect and turns checking into rerunning. A checker should use smaller independent arithmetic kernels and locally verifiable proof rules.

## Chapter 18 — Optimization proof-log capstones

### Exercise 112 — Claim matrix

Classify “feasible point value 9; certified lower bound 8” for minimization.

**Solution.** Feasibility at 9 and lower bound 8 are proved, so \\(p^\\star\\in[8,9]\\). Neither exact optimality nor infeasibility is proved; the certified absolute gap is 1.

### Exercise 113 — Model digest plus dimensions

Why should a proof-log header record both a digest and matrix dimensions?

**Solution.** The digest identifies bytes; dimensions provide an immediate structural sanity check and improve diagnostics. Neither replaces semantic verification, but together they catch distinct mismatches.

### Exercise 114 — Local-to-global ledger

A domain is exactly partitioned into boxes \\(B_1,B_2\\), with lower bounds 2 and 3. What global bound follows?

**Solution.** Every feasible point lies in one box, so its objective is at least the corresponding local bound and therefore at least \\(\\min(2,3)=2\\). Coverage is indispensable.

### Exercise 115 — Adverse fixture for sign

Design a tiny test that detects reversal of minimization bound direction.

**Solution.** Use \\(\\min\\{x:1\\le x\\le2\\}\\), whose optimum is 1. Submit claimed lower bound 1.5. A correct checker rejects because feasible \\(x=1\\) contradicts it; a reversed comparison may accept.

### Exercise 116 — Objective-offset audit

Reduced objective is \\(2x\\), presolve offset is \\(-3\\), and reduced witness value is 8. Reconstruct the original value.

**Solution.** Add the recorded offset: \\(8+(-3)=5\\). Omitting it would report 8 and could corrupt incumbent comparisons.

### Exercise 117 — Coverage mutation

A valid split has children \\(x\\le2\\), \\(x\\ge3\\). Mutate the second to \\(x\\ge4\\). Give a counterexample.

**Solution.** Integer \\(x=3\\) satisfies neither child, so coverage fails. A checker should reject before trusting any leaf bounds.

### Exercise 118 — Certificate composition

A primal witness certifies \\(U=6\\), and a complete tree certifies \\(L=6\\). What additional compatibility check is needed?

**Solution.** Both objects must reference the same model, objective sense, scaling, and objective constants. Once identity matches, \\(L=U=6\\) proves optimality.

### Exercise 119 — Interval/KKT boundary

An interval enclosure for a stationarity residual contains zero, while primal feasibility is unverified. What claim survives?

**Solution.** The enclosure only fails to exclude a zero residual; containing zero does not prove that the residual is zero at the candidate. Therefore it proves neither stationarity nor KKT conditions nor optimality. Primal feasibility is also a separate condition and remains unverified. A stationarity proof would require an exact zero or an existence/uniqueness argument showing that a zero lies in the enclosed domain.

### Exercise 120 — Exact integer closure

A maximization incumbent is 10 and the verified relaxation upper bound is \\(10.8\\); objectives are integral. Close the gap.

**Solution.** Integral objective values are at most \\(\\lfloor10.8\\rfloor=10\\). The feasible incumbent attains 10, so exact optimality follows.

### Exercise 121 — Reproducible failure state

What should a verifier return when an interval evaluation encounters division by an interval containing zero?

**Solution.** Return a typed “undefined or singular on box” failure with the offending operation and box. It must not fabricate finite endpoints or silently discard the box.

### Exercise 122 — Proof-log minimality

A record stores a cut but not its derivation or a direct validity proof. Can violation alone justify adding it?

**Solution.** No. Violation shows only that the cut removes the current relaxation point. The log must also prove validity for the cut's declared scope.

### Exercise 123 — Bounded mathematical optimization project 3: verified global dossier

Build a finite dossier for \\(\\min\\{(x-1)^2:x\\in[0,3],\\,x\\in\\mathbb Z\\}\\): model identity, relaxation bound, branching coverage, leaf closure, incumbent, and one adverse mutation.

**Solution.** Canonically record objective \\((x-1)^2\\), interval \\([0,3]\\), and integer domain. The continuous relaxation has exact lower bound 0 at \\(x=1\\), already integer, and witness \\(x=1\\) gives \\(U=0\\); equality closes the root without branching. To exercise tree checking anyway, split \\(x\\le1\\) or \\(x\\ge2\\). The left leaf contains integers 0 and 1, with exact minimum 0 at 1; the right contains 2 and 3, with minimum 1 at 2. The alternatives cover every integer in the parent. Record \\(L=\\min(0,1)=0=U\\). As the bounded adverse fixture, mutate the right child to \\(x\\ge3\\); integer 2 becomes uncovered and the checker must reject. These records are the complete deliverable.

### Exercise 124 — Separation-oracle boundary

An oracle returns \\(2x_1+2x_2\\le2\\) at \\(\\bar x=(0.7,0.6)\\). Verify separation and give the normalized Euclidean distance to its hyperplane.

**Solution.** The left side is \\(2.6>2\\), so the inequality separates \\(\\bar x\\). The normal is \\(a=(2,2)\\), with norm \\(2\\sqrt2\\); the hyperplane distance is \\((2.6-2)/(2\\sqrt2)=0.3/\\sqrt2\\). The equivalent inequality \\(x_1+x_2\\le1\\) gives the same distance.
`;export{e as default};