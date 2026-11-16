var e=`---
parent_id: book-linear-programming-optimisation
chapter_id: standard-form-basic-feasible-solutions
title: "Standard Form and Basic Feasible Solutions"
level: advanced-undergraduate
status: draft
license: CC BY-SA 4.0
---

# Standard Form and Basic Feasible Solutions

The simplex method works with a small collection of independent columns called a basis. To understand why that representation is useful, we first need to connect it to the geometry of the original feasible set. A basis is an algebraic object; a vertex is a point. Several bases can describe the same point, and not every collection of independent columns gives a feasible point.

Required preparation is [rank, null spaces, and independent columns](/lucent/#/course/linear-algebra/four-spaces), together with the vertex definition in the preceding chapter. All statements here are exact arithmetic. Later numerical implementations must distinguish a truly singular basis from one whose smallest singular value is merely small at the available precision.

## The standard-form convention

**Definition 3.1 (Standard form).** Our default standard form is
$$
\\text{maximise }c^Tx\\quad\\text{subject to }Ax=b,\\quad x\\ge0,
$$
with real data $A\\in\\mathbb R^{m\\times n}$, $b\\in\\mathbb R^m$, $c\\in\\mathbb R^n$. For basis computations we usually assume $A$ has row rank $m$. Minimisation can be converted by negating the objective.

“Standard form” is not universal terminology. Some books use minimisation or inequalities as their default. Every sign-sensitive derivation in this book states its convention. A feasible set is unchanged by negating the objective, but maximisation and minimisation conclusions must then be translated back.

For a row $a^Tx\\le\\beta$, introduce a nonnegative slack $s$ and write $a^Tx+s=\\beta$. For a row $a^Tx\\ge\\beta$, introduce a nonnegative surplus $s$ and write $a^Tx-s=\\beta$. A bounded variable $l\\le u\\le h$ can be shifted to $u=l+z$, with $0\\le z\\le h-l$. A free variable $u$ can be split as $u=p-q$, $p,q\\ge0$. Carry constants produced by shifts into both the right-hand side and objective.

Each transformation needs a correspondence. Given an original feasible point, its slack or surplus is determined by the original row. Given an extended point, eliminating that nonnegative auxiliary variable yields the original inequality. A free split is surjective but not injective. Consequently a computational basis of the extended problem need not be a geometric vertex of the original coordinate description.

**Example 3.2 (A free variable and a finite optimum).** Maximise $2u-v$ subject to
$$
u+v\\le3,\\qquad u-v=1,\\qquad v\\ge0,
$$
where $u$ is free. Set $u=p-q$ with $p,q\\ge0$ and introduce $s\\ge0$. The equations become
$$
p-q+v+s=3,\\qquad p-q-v=1.
$$
The objective is $2p-2q-v$. Eliminating $u$ directly gives $u=1+v$ and $0\\le v\\le1$, so the optimum is $u=2,v=1$, value3. One extended representation is $(p,q,v,s)=(2,0,1,0)$. Adding $t$ to both $p$ and $q$ gives an unbounded family of extended feasible points with the same original decision and objective. This flat ray does not make the objective unbounded.

The columns for $p$ and $v$ form the nonsingular matrix
$\\begin{pmatrix}1&1\\\\1&-1\\end{pmatrix}$, and their basic solution is $(2,1)$. The representation illustrates why an unbounded extended set can still have a useful basic optimum.

## Row rank and consistency

Before selecting $m$ basis columns, ensure the equations have $m$ independent rows. Gaussian elimination can identify redundant rows, but a dependent row may also reveal inconsistency. For example,$x_1+x_2=1$ and $2x_1+2x_2=3$ have dependent coefficient rows and incompatible right-hand sides. Dropping the second equation without checking its transformed right-hand side would turn an infeasible model into a feasible one.

After consistent dependencies have been removed, the remaining full-row-rank system defines the same equality set. Nonnegativity must still be checked separately. Solvability of $Ax=b$ over unrestricted real $x$ does not imply solvability with $x\\ge0$.

If $m=0$, there are no equality rows: the feasible set is the nonnegative orthant, its only vertex is zero, and the empty basis convention gives that point. We state the main basis formulas for $1\\le m\\le n$ to avoid pretending that an empty matrix inverse is an ordinary numerical solve.

## Bases and basic solutions

**Definition 3.3 (Basis and basic feasibility).** Suppose $\\operatorname{rank}A=m$. A basis index set $B$ contains $m$ column indices such that the square matrix $A_B$ is nonsingular. With $N$ its complementary index set, the basic solution is
$$
x_N=0,\\qquad x_B=A_B^{-1}b.
$$
It is a basic feasible solution, or BFS, when $x_B\\ge0$. A BFS is degenerate if at least one basic component is zero.

The inverse notation describes a linear solve; it does not prescribe explicitly forming an inverse. A fixed column ordering determines which component of $x_B$ corresponds to which original variable. Changing that order permutes the basis coordinates but not the underlying solution.

A basis can exist even when its basic solution is infeasible. Conversely, a feasible point usually has more than $m$ positive coordinates and is not basic. The positive support, rather than arbitrary nonzero numerical noise, is the relevant exact object.

**Theorem 3.4 (Independent support characterises vertices).** For
$P=\\{x:Ax=b,x\\ge0\\}$, with no full-row-rank assumption needed, a feasible point $x$ is a vertex if and only if the columns indexed by
$S=\\{j:x_j>0\\}$ are linearly independent.

*Proof.* If those columns are dependent, choose a nonzero $d$ supported on $S$ with $Ad=0$. Since every $x_j$ on $S$ is positive, choose $\\epsilon>0$ small enough that $x\\pm\\epsilon d\\ge0$. Both perturbed points satisfy the equations and are distinct, while their midpoint is $x$. Hence $x$ is not a vertex.

Conversely suppose the support columns are independent and $x=t u+(1-t)v$ is a feasible convex decomposition with $0<t<1$. If $x_j=0$, nonnegativity forces $u_j=v_j=0$. Thus $u-v$ is supported on $S$, and $A(u-v)=0$. Independence forces $u=v$. Their convex combination is $x$, so both equal $x$. $\\square$

**Corollary 3.5 (Vertices and BFSs).** If $A$ has full row rank, its feasible vertices are exactly its BFSs.

*Proof.* A BFS's positive support is a subset of independent basis columns, so Theorem 3.4 makes it a vertex. Conversely, independent support columns can be extended to $m$ independent columns of $A$, because the full column span has dimension $m$. Set every complementary variable to zero. The feasible point already solves the resulting nonsingular basis equations, so it is the associated BFS. $\\square$

The extension may add columns whose basic values are zero. That is the source of multiple basis representations at a degenerate vertex; it does not mean the point has several coordinate values.

**Example 3.6 (One point and two feasible bases).** Let
$$
A=\\begin{pmatrix}1&0&1\\\\0&1&1\\end{pmatrix},
\\qquad b=(1,0)^T.
$$
The second equation $x_2+x_3=0$ and nonnegativity force $x_2=x_3=0$, and the first then gives $x_1=1$. The feasible set is a singleton. Basis $\\{1,2\\}$ gives basic values $(1,0)$; basis $\\{1,3\\}$ also gives $(1,0)$ in its own ordering. Both describe the same degenerate BFS $(1,0,0)$. Basis $\\{2,3\\}$ gives $x_3=1,x_2=-1$, so it is algebraically valid but infeasible.

Every basis matrix in this example is nonsingular. Feasibility, degeneracy, and singularity are therefore three different notions.

## The fundamental attainment theorem

A closed unbounded polyhedron does not generally have a vertex, as the previous chapter's line example showed. Nonnegative standard form has stronger structure.

**Theorem 3.7 (Fundamental theorem in nonnegative standard form).** If $P=\\{x:Ax=b,x\\ge0\\}$ is nonempty, it has a vertex. If $c^Tx$ is bounded above on $P$, its maximum is attained at a vertex. With full row rank, that vertex is a BFS.

*Proof.* Begin with any feasible $x$. If its positive support columns are dependent, select a nonzero $d$ supported there with $Ad=0$. To prove vertex existence alone, orient $d$ so that some component is negative. Then
$$
t_*=\\min_{d_j<0}\\frac{x_j}{-d_j}>0
$$
gives $x+t_*d\\ge0$, preserves $Ax=b$, and makes at least one positive component zero. No formerly zero component becomes positive because $d$ is supported on the current support. Repeating reduces support until it is independent, which gives a vertex by Theorem 3.4.

For objective attainment, orient each dependent-support direction so $c^Td\\ge0$. If it has a negative component, the same finite step reduces support without lowering the objective. If it has no negative component and $c^Td>0$, then $x+td$ is feasible for all $t\\ge0$ and its objective tends to infinity, contradicting boundedness. If it has no negative component and $c^Td=0$, reverse its sign; a negative component then exists and the objective remains unchanged. Thus every feasible point can be replaced by a vertex of at least its objective value.

There are finitely many possible independent supports. For a fixed independent support, the equations determine at most one vector supported there. Hence there are finitely many vertices. Their largest objective value dominates every feasible value by the construction, proving attainment. The BFS statement follows from Corollary 3.5. $\\square$

The proof gives no polynomial-time complexity bound. It begins from a feasible point, which an algorithm must still find, and its support-reduction choices differ from a complete simplex pivot rule. The two-phase method later constructs a feasible start or an infeasibility certificate.

The theorem also distinguishes “bounded objective” from “bounded feasible set.” The latter is sufficient but unnecessary. Nonnegativity excludes full feasible lines in the extended coordinate space, which is why even an unbounded standard-form feasible set has a vertex.

**Example 3.8 (An unbounded set with a basic optimum).** Let
$$
x_1+x_2-x_3=1,\\qquad x\\ge0,
$$
and maximise $-x_3$. The point $(1,0,0)$ is a BFS, with basis column1 and objective zero. Every feasible point has objective at most zero, so it is optimal. The feasible set is unbounded because $(1+t,0,t)$ is feasible for every $t\\ge0$. Changing the objective to maximise $x_3$ makes that same ray an unboundedness certificate. The constraints alone do not determine which conclusion applies.

## Basis data as a dictionary

With a basis fixed, rewrite the equations as
$$
x_B=A_B^{-1}b-A_B^{-1}A_Nx_N.
$$
The right-hand side is an affine description of all equality-feasible points in terms of nonbasic coordinates. Substituting into the objective gives
$$
c^Tx=c_B^TA_B^{-1}b+
\\left(c_N^T-c_B^TA_B^{-1}A_N\\right)x_N.
$$
The coefficients of $x_N$ are reduced costs. The next chapter derives their role in improving or certifying a solution.

A basis dictionary retains the original variables and their identities. Renumbering an array internally does not authorize confusing a basic coordinate with a different original variable. Likewise, a small basic value can represent exact degeneracy, data uncertainty, or rounding. An implementation needs a numerical feasibility policy, but a tolerance-based label is not an exact geometric theorem.

For manual work, record the ordered basis, basic values, residual $Ax-b$, signs, and objective. Check the reconstructed full vector rather than only the displayed basic entries. A basis solve that is accurate relative to a badly scaled matrix can still have uncertain component signs; conditioning and reliable residual evaluation remain relevant even in an exact combinatorial method.

## The dimension visible in a positive support

**Proposition 3.9 (Local face dimension).** At a feasible point $x$ with positive support $S$, consider the face obtained by fixing every coordinate outside $S$ to zero. Its dimension is
$|S|-\\operatorname{rank}(A_S)$.

*Proof.* In support coordinates, its equality set is
$A_Sz=b$. Because $x_S$ is a solution, this affine set is $x_S+\\ker A_S$ and has the stated dimension by rank–nullity. Every component of $x_S$ is strictly positive, so a sufficiently small neighbourhood of $x_S$ within that affine set remains nonnegative. Thus the nonnegative part contains a relatively open neighbourhood and has the same affine dimension. Fixing zero coordinates indeed gives a face: the valid inequality $-\\sum_{j\\notin S}x_j\\le0$ is tight exactly there. $\\square$

When the support columns are independent, the dimension is zero, recovering the vertex criterion. When they are dependent, the null-space directions describe local feasible motion without introducing a negative coordinate. This gives a quantitative geometric meaning to support dependence, beyond simply declaring the point nonbasic.

A degenerate BFS may have fewer than $m$ positive components while still using $m$ basis columns. Its face dimension is still zero because the positive support remains independent. The extra zero-valued basis coordinates describe the representation, not extra geometric motion.

Conversely, an underdetermined equality system can have a unique optimum after nonnegativity and an objective are included. For $x_1+x_2=1$, $x\\ge0$, maximising $x_1$ uniquely selects $(1,0)$ despite the equality's one-dimensional solution family. Rank alone does not settle optimisation uniqueness.

## Which changes of coordinates preserve a vertex?

An invertible affine change of variables preserves extreme points. Indeed, if the image of a point is the midpoint of two distinct feasible images, applying the inverse map writes the original point as the midpoint of two distinct feasible points. The converse follows by applying the forward map. This proof uses both injectivity and the preservation of convex combinations.

Adding the uniquely determined slack of an inequality also preserves vertices between the original feasible set and its slack representation. The map sends each original decision to that decision together with its slack, and is affine and injective. Its inverse on the extended feasible set is coordinate projection. Although that projection is not invertible on the whole surrounding space, it is a bijection between these two particular feasible sets, which is all the argument requires.

Splitting a free variable is different because the extension is not unique. Consider the original feasible set consisting of every real number, with zero objective. It has no vertex: every point is the midpoint of two nearby distinct feasible points. Its representation $u=p-q$ with nonnegative $p,q$ has the origin as a vertex in the extended quadrant. That vertex projects to zero, which is not a vertex of the original line. The extra flat direction from adding the same positive amount to both split variables explains the discrepancy.

**Worked application: a decision with a lower bound.** If a production variable has lower bound five, write it as five plus a nonnegative variable. A feasible interval from five to eight becomes the interval from zero to three. Its two vertices correspond exactly because the shift is invertible. An objective charging two units per item becomes a constant ten plus twice the new variable. The constant does not affect the optimiser, but it must be restored when the optimal value is reported. Omitting it can leave the decision correct while the stated financial result is wrong.

These distinctions help interpret a solver's basis. The basis belongs to the actual extended formulation. To describe a geometric property of the original decisions, first inspect whether the formulation map is one-to-one on feasible points. A projection preserves feasibility and objective correspondence when correctly constructed, but it need not preserve vertices, uniqueness, or degeneracy.

## Exercises

### Exercise 3.1 — Adding slack and surplus
<a id="standard-form-basic-feasible-solutions-ex-1"></a>

Convert $2u+v\\le5$ and $u-v\\ge1$ with $u,v\\ge0$ to equations with nonnegative auxiliaries.

<details>
<summary>Hint 1</summary>

**Hint.** Use a different auxiliary for each row.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** A surplus has the opposite sign from a slack.

</details>
<details>
<summary>Solution</summary>

**Solution.** Write $2u+v+s=5$ and $u-v-t=1$ with $s,t\\ge0$. Eliminating $s,t$ recovers the original inequalities. Using $+t$ in the second row would represent a different inequality.

</details>

### Exercise 3.2 — Consistency before reduction
<a id="standard-form-basic-feasible-solutions-ex-2"></a>

Explain why $x_1+x_2=2$ and $3x_1+3x_2=7$ cannot be reduced to only the first row.

<details>
<summary>Hint 1</summary>

**Hint.** Eliminate the second coefficient row.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Track the right-hand side too.

</details>
<details>
<summary>Solution</summary>

**Solution.** Subtracting three times the first row from the second gives $0=1$, proving inconsistency. Dropping the dependent coefficient row without its transformed right-hand side would incorrectly change the feasible set.

</details>

### Exercise 3.3 — Enumerating bases
<a id="standard-form-basic-feasible-solutions-ex-3"></a>

For $A=(1,1,1)$ and $b=2$, list every BFS.

<details>
<summary>Hint 1</summary>

**Hint.** A basis has one column.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Set complementary coordinates to zero.

</details>
<details>
<summary>Solution</summary>

**Solution.** The three one-column bases give $(2,0,0)$, $(0,2,0)$, and $(0,0,2)$. All are feasible and nondegenerate. A point such as $(1,1,0)$ has dependent positive support columns and is not a vertex.

</details>

### Exercise 3.4 — A basic but infeasible point
<a id="standard-form-basic-feasible-solutions-ex-4"></a>

For $A=(1,-1)$, $b=-2$, compute the basic solutions for each column.

<details>
<summary>Hint 1</summary>

**Hint.** Each nonzero scalar column is a basis.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Check the basic sign after division.

</details>
<details>
<summary>Solution</summary>

**Solution.** Basis1 gives $x_1=-2,x_2=0$, which is infeasible. Basis2 gives $x_1=0,x_2=2$, which is feasible. Nonsingularity of the basis alone does not establish nonnegativity.

</details>

### Exercise 3.5 — Support perturbation
<a id="standard-form-basic-feasible-solutions-ex-5"></a>

For $A=(1,1,1)$ and $x=(1,1,0)$, exhibit a nontrivial feasible midpoint decomposition.

<details>
<summary>Hint 1</summary>

**Hint.** Use a null direction supported on the positive coordinates.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Move one unit in opposite directions.

</details>
<details>
<summary>Solution</summary>

**Solution.** Take $d=(1,-1,0)$. Then $Ad=0$, and $x$ is the midpoint of $(2,0,0)$ and $(0,2,0)$, both nonnegative and satisfying $Ax=2$. Thus it is not a vertex.

</details>

### Exercise 3.6 — Degenerate representations
<a id="standard-form-basic-feasible-solutions-ex-6"></a>

For Example 3.6, compute the full vectors associated with bases $\\{1,2\\}$ and $\\{1,3\\}$. Why are these not two vertices?

<details>
<summary>Hint 1</summary>

**Hint.** Keep original variable indices.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Both added basic entries are zero.

</details>
<details>
<summary>Solution</summary>

**Solution.** The first basis gives $(x_1,x_2,x_3)=(1,0,0)$; the second gives the same vector, with $x_3=0$ basic and $x_2=0$ nonbasic. A vertex is the coordinate point, so different bases do not create distinct vertices.

</details>

### Exercise 3.7 — An objective-preserving ray
<a id="standard-form-basic-feasible-solutions-ex-7"></a>

In the free-variable split $u=p-q$, prove that adding the same $t\\ge0$ to $p,q$ preserves every expression depending only on $u$.

<details>
<summary>Hint 1</summary>

**Hint.** Compute the difference after the change.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Include the objective correspondence.

</details>
<details>
<summary>Solution</summary>

**Solution.** The new difference is $(p+t)-(q+t)=p-q=u$. Therefore every original constraint and objective expressed through $u$ is unchanged. Nonnegativity is preserved, giving a flat extended ray rather than an improving original decision.

</details>

### Exercise 3.8 — A simple dictionary
<a id="standard-form-basic-feasible-solutions-ex-8"></a>

For $x_1+2x_2+x_3=4$ and objective $3x_1+x_2$, use basis1 to write the dictionary and reduced costs.

<details>
<summary>Hint 1</summary>

**Hint.** Solve for $x_1$.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Substitute into the objective.

</details>
<details>
<summary>Solution</summary>

**Solution.** The equation is $x_1=4-2x_2-x_3$. The objective is $12-5x_2-3x_3$. Both reduced costs are negative, and nonnegativity makes12 an upper bound attained at $(4,0,0)$.

</details>

### Exercise 3.9 — A full-line counterexample
<a id="standard-form-basic-feasible-solutions-ex-9"></a>

Why does the original unconstrained problem maximise0 over $u\\in\\mathbb R$ have no original vertex, while its split formulation has a BFS?

<details>
<summary>Hint 1</summary>

**Hint.** Compare the feasible spaces.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** A projection need not preserve vertices.

</details>
<details>
<summary>Solution</summary>

**Solution.** The real line has no extreme points. Its split set $\\{(p,q):p,q\\ge0\\}$ has vertex $(0,0)$, which projects to $u=0$. The formulation preserves feasible original choices and objective values but not a one-to-one geometric correspondence of vertices.

</details>

### Exercise 3.10 — Attainment hypotheses
<a id="standard-form-basic-feasible-solutions-ex-10"></a>

Which parts of Theorem 3.7 fail if the feasible set is empty or the objective is unbounded above?

<details>
<summary>Hint 1</summary>

**Hint.** Identify the starting point and the contradiction step.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Existence and boundedness are different assumptions.

</details>
<details>
<summary>Solution</summary>

**Solution.** With an empty set there is no feasible starting point and no vertex. With an unbounded objective, an oriented nonnegative null direction with positive objective is no contradiction; it is an improving ray. A feasible vertex may still exist, but no finite maximum can be asserted.

</details>

## Sources

- Dimitris Bertsimas and John N. Tsitsiklis, *Introduction to Linear Optimization*, Athena Scientific, 1997. [Author book listing](https://web.mit.edu/jnt/www/home.html) and [MIT course reading guide](https://ocw.mit.edu/courses/15-093j-optimization-methods-fall-2009/pages/readings/).
- Jiří Matoušek and Bernd Gärtner, [Understanding and Using Linear Programming](https://doi.org/10.1007/978-3-540-30717-4), Springer, 2007.

The exposition, proofs, and examples are original to Euler. The references provide further reading; no external text or exercise collection is reproduced.

## Summary

Standard form preserves the intended task through explicit variable correspondences. Independent positive support characterises vertices, and full row rank identifies them with basic feasible solutions. Degeneracy allows several bases at one point. Nonnegative standard form has vertices whenever feasible and attains every bounded linear optimum at a vertex. The next chapter turns basis dictionaries into simplex steps and certificates.
`;export{e as default};