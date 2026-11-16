
# Linear Algebra as Transformation

<!-- euler-course-route -->

## Current course route

Use the [course page](#/courses/atlas-linear-transformations) for its present preparation and available study steps. This Outline keeps its original explanations and exercises while a complete primary-book syllabus is being assigned.

Linear algebra is the study of transformations that preserve addition and scaling. Matrices are coordinate records of those transformations; elimination, determinants, eigenvectors, and least squares are different questions about what the transformation does.

**Ten-hour route.** Spend one hour on each of the six lessons and one hour on each workshop; the capstone extends beyond those ten hours if you build an interactive version. Start with [moves and mixtures](../articles/linear-algebra-first-encounter.md) if vectors are new. For a sustained proof treatment, read the matching chapters of the working [Linear Algebra: Structure and Proofs](#/books/linear-algebra-structure-proofs) manuscript after each lesson, especially span, linear maps, change of basis, eigenvalues, and orthogonal decomposition. Use the [eigenvector lab](../apps/atlas/index.html#/labs?lab=visual-lab-eigenvectors) to test a geometric prediction, then explain what the picture cannot prove.

### Entry diagnostic

1. Solve $2x+y=5$ and $x-y=1$.
2. Compute $3(1,-2)+2(0,4)$.
3. Decide whether $(1,1,2)$ lies in the span of $(1,0,1)$ and $(0,1,1)$.
4. State what a function must do to be one-to-one.

The answers are $(x,y)=(2,1)$; $(3,2)$; yes, as their sum; and distinct
inputs must have distinct outputs. If Questions 1–3 are difficult, repair
systems and vector arithmetic before Lesson 2.

| Stage | Lessons | Sustained reading | Evidence |
| --- | --- | --- | --- |
| 1. Generate and solve | 1–2 | [Vector spaces](../books/linear-algebra-structure-proofs/vector-spaces-subspaces-fields.md), [span and exchange](../books/linear-algebra-structure-proofs/span-independence-exchange.md), and [rank–nullity](../books/linear-algebra-structure-proofs/linear-maps-isomorphism-rank-nullity.md) | Solution-set and kernel explanation |
| 2. Represent a map | 3–4 | [Change of basis](../books/linear-algebra-structure-proofs/matrices-and-change-of-basis.md) and [determinants](../books/linear-algebra-structure-proofs/exterior-powers-and-determinants.md) | Coordinate comparison and invertibility audit |
| 3. Repeated action and approximation | 5–6 | [Eigenvalues](../books/linear-algebra-structure-proofs/eigenvalues-and-diagonalization.md) and [orthogonal decomposition](../books/linear-algebra-structure-proofs/inner-products-orthogonal-decomposition.md) | Spectral prediction and least-squares residual check |
| 4. Synthesis | Workshops and capstone | Revisit the chapter attached to the weakest cumulative exercise | Transformation portfolio |

## Lesson 1 — Vectors, combinations, and span

A vector can represent displacement, a list of features, coefficients of a polynomial, sampled sound, or a function. What makes these examples linear is that vectors can be added and scaled while obeying familiar laws.

A **linear combination** of $v_{1},\ldots ,v_{k}$ is

$c_{1}v_{1} + \ldots + c_{k}v_{k}$.

Their **span** is the set of all such combinations. Span asks a generative question: what can these building blocks produce?

In $\mathbb R^{3}$, the vectors $(1,0,1)$ and $(0,1,1)$ span the plane

$\{(a,b,a+b)\colon a,b\in\mathbb R\}$.

They cannot produce $(0,0,1)$, because the first two coordinates would force $a=b=0$, then the third would be zero. This is an impossibility proof through coordinates.

### Independence

Vectors are linearly independent when

$c_{1}v_{1}+\ldots +c_{k}v_{k}=0$

forces every coefficient to be zero. Dependence means at least one vector is redundant: it can be built from the others.

A **basis** is an independent spanning list. Spanning guarantees representation; independence guarantees uniqueness. A coordinate vector is therefore a recipe relative to a chosen basis, not the vector itself.

### Checkpoint

Determine whether $(1,1)$, $(2,0)$, $(3,1)$ are independent. They are not: the third is the sum of the first two. The first two already form a basis of $\mathbb R^{2}$ because they are not scalar multiples.

## Lesson 2 — Linear systems and elimination

A system $Ax=b$ asks whether $b$ lies in the span of the columns of $A$. If it does, each solution $x$ supplies coefficients. Three cases follow:

- no solution: $b$ is outside the column space;
- exactly one: $b$ is in the column space and the null space is $\{0\}$;
- infinitely many: one solution exists and a nonzero null direction can be added.

### Why row operations are safe

The elementary operations correspond to reversible changes to equations:

1. swap equations;
2. multiply an equation by a nonzero scalar;
3. add a multiple of one equation to another.

Because each operation is reversible, it preserves the solution set. Row reduction changes the displayed equations, but not their common solutions.

### Worked example

Solve

$x + 2y - z = 1$

$2x + 4y + z = 5$.

Subtract twice the first equation from the second: $3z=3$, so $z=1$. Then $x+2y=2$. Let $y=t$; the solutions are

$(x,y,z)=(2-2t,t,1)=(2,0,1)+t(-2,1,0)$.

The fixed vector is one particular solution. The direction vector spans the null space. Geometry explains the free parameter: two independent planes in three dimensions intersect in a line.

### Rank-nullity

For a linear map $T\colon V\to W$ with finite-dimensional $V$,

$\dim(\ker T) + \dim(\operatorname{im} T) = \dim(V)$.

Input dimensions either survive into independent output directions or collapse into the kernel. This is an accounting identity for information.

## Lesson 3 — Linear maps and matrices

$T$ is linear when

$T(u+v)=T(u)+T(v)$ and $T(cv)=cT(v)$.

Together these give $T(c_{1}v_{1}+\ldots +c_{k}v_{k})=c_{1}T(v_{1})+\ldots +c_{k}T(v_{k})$. Therefore a linear map is completely determined by what it does to a basis.

Using the standard basis $e_{1},\ldots ,e_{n}$, place $T(e_{i})$ in column $i$. The resulting matrix $A$ satisfies $T(x)=Ax$. Matrix multiplication is composition because each column of $AB$ is $A$ applied to the corresponding column of $B$.

### Transformations in the plane

- Uniform scale by $s$: $\begin{pmatrix}s & 0 \\ 0 & s\end{pmatrix}$.
- Reflection across the x-axis: $\begin{pmatrix}1 & 0 \\ 0 & -1\end{pmatrix}$.
- Counterclockwise rotation by angle $\theta$: $\begin{pmatrix}\cos\theta & -\sin\theta \\ \sin\theta & \cos\theta \end{pmatrix}$.
- Horizontal shear by $k$: $\begin{pmatrix}1 & k \\ 0 & 1\end{pmatrix}$.

Products act right to left. Rotation then reflection is generally not reflection then rotation. Noncommutativity records the order-dependence of actions.

### Change of basis

Let columns of $P$ be new basis vectors expressed in old coordinates. Then $P[x]_new=x_{\mathrm{old}}$, so $[x]_new=P^{-1}x_{\mathrm{old}}$. If $A$ represents a map in old coordinates, its new-coordinate matrix is

$P^{-1}AP$.

The matrix changes; the transformation does not. Similar matrices are different coordinate descriptions of one linear action.

## Lesson 4 — Determinants and invertibility

The determinant is signed volume scaling. In two dimensions, $|\det A|$ is the area scaling factor; its sign records orientation.

This viewpoint explains the main rules:

- $\det(AB)=\det(A)\det(B)$ because volume scalings multiply under composition;
- swapping two columns flips orientation and determinant sign;
- adding a multiple of one column to another preserves volume;
- $\det A=0$ exactly when the transformation collapses dimension.

For $A=[[a,b],[c,d]]$, the oriented area of the parallelogram with column edges is $ad-bc$.

### The invertible matrix theorem, as one story

For a square matrix, the following are equivalent:

- $A$ is invertible;
- $Ax=b$ has exactly one solution for every $b$;
- the columns form a basis;
- the kernel is zero;
- the rank is full;
- the determinant is nonzero;
- zero is not an eigenvalue.

These are not separate facts to memorize. They all say no input direction is destroyed and every output direction is reached.

## Lesson 5 — Eigenvectors and repeated action

An eigenvector $v\ne 0$ satisfies

$Av=\lambda v$.

Its direction is preserved; only scale (and possibly orientation) changes. Repetition becomes simple:

$A^{n}v=\lambda ^{n}v$.

Find eigenvalues by solving $\det(A-\lambda I)=0$, then find the null space of $A-\lambda I$.

### Worked example

For $A=[[2,1],[1,2]]$,

$\det(A-\lambda I)=(2-\lambda )^{2}-1=(\lambda -3)(\lambda -1)$.

For $\lambda =3$, an eigenvector is $(1,1)$. For $\lambda =1$, one is $(1,-1)$. Therefore any vector written $a(1,1)+b(1,-1)$ evolves as

$A^{n}x=a3^{n}(1,1)+b(1,-1)$.

Unless $a=0$, normalized repeated images align with $(1,1)$. This is the mechanism behind the power method and many long-run models.

### Diagonalization

If a basis of eigenvectors exists, put them in columns of $P$ and their eigenvalues along diagonal $D$. Then

$A=PDP^{-1}$, so $A^{n}=PD^{n}P^{-1}$.

Not every matrix has enough eigenvectors. A defective matrix cannot be diagonalized; the failure reveals coupling not removable by eigenvector coordinates alone.

## Lesson 6 — Orthogonality and least squares

An inner product generalizes angle and length. In $\mathbb R^{n}$, $u\cdot v=0$ means orthogonal. Orthogonal coordinates are stable because each coefficient can be recovered independently.

To approximate $b$ by something in a subspace $S$, choose the projection $p\in S$ for which the residual $b-p$ is orthogonal to all of $S$. This is the closest point.

For an inconsistent system $Ax\approx b$, least squares minimizes $\lVert Ax-b\rVert^{2}$. At the optimum, the residual is orthogonal to every column of $A$:

$Aᵀ(Ax-b)=0$,

so the normal equations are $AᵀAx=Aᵀb$.

### Fitting a line

To fit $y\approx \beta _{0}+\beta _{1}x$, the design matrix has rows $(1,x_{i})$. The fitted data vector is the projection of observed $y$ onto the plane spanned by the constant column and x column. Residual plots then ask whether that plane was a sensible model, not merely whether a solution was computed.

### Numerical warning

Solving normal equations squares the condition number and may lose accuracy. In serious computation, use a QR factorization or SVD. Mathematical equivalence does not guarantee numerical equivalence under rounding.

## Capstone — Transform a shape, explain the algebra

Create a 2D interactive or hand-computed study of one parameterized matrix family $A(t)$. Include:

1. images of a grid, unit square, and unit circle;
2. determinant and its area/orientation meaning;
3. eigenvalues and invariant directions when real;
4. behavior under repeated application;
5. a parameter where invertibility or qualitative behavior changes;
6. an explanation independent of coordinates.

Good families include $\begin{pmatrix}1 & t \\ 0 & 1\end{pmatrix}$, $\begin{pmatrix}1 & t \\ t & 1\end{pmatrix}$, and rotation followed by anisotropic scaling.

Use the `linear-algebra-structure` solved exercise set for practice.

## Workshop 1 — Solve, then explain the whole solution set

Consider $T:\mathbb R^3\to\mathbb R^2$ defined by $T(x,y,z)=(x+z,y+z)$. The standard-coordinate matrix is

$$A=\begin{pmatrix}1&0&1\\0&1&1\end{pmatrix}.$$

For target $(4,5)$, choose $z=t$. Then $x=4-t$ and $y=5-t$, so every solution is

$$(x,y,z)=(4,5,0)+t(-1,-1,1),\qquad t\in\mathbb R.$$

The first vector is a particular solution; the second generates the kernel. The image is all of $\mathbb R^2$ because choosing $z=0$ reaches any target $(u,v)$. Thus the rank is 2, the nullity is 1, and $2+1=3$ verifies rank-nullity. This is more informative than row reduction alone: it tells us exactly what information the map discards.

**Predict before calculating:** If the target is changed from $(4,5)$ to $(4,6)$, does the kernel change? No. The kernel concerns inputs mapped to zero and depends only on $T$, while the particular solution shifts to $(4,6,0)$. An inconsistent target would be possible for a different map whose image is a proper subspace, but not for this surjective $T$.

## Workshop 2 — Coordinates versus the action

Return to $A=\begin{pmatrix}2&1\\1&2\end{pmatrix}$. Set

$$P=\begin{pmatrix}1&1\\1&-1\end{pmatrix},\qquad D=\begin{pmatrix}3&0\\0&1\end{pmatrix}.$$

The columns of $P$ are eigenvectors. Direct multiplication gives $AP=PD$, hence $P^{-1}AP=D$. The vector $x=(3,1)$ has eigenvector coordinates $(2,1)$ because $x=2(1,1)+(1,-1)$. Therefore

$$A^n(3,1)=2\cdot3^n(1,1)+(1,-1).$$

At $n=0$ this returns $(3,1)$; at $n=1$ it gives $(7,5)$, agreeing with ordinary multiplication. These checks catch a common coordinate error: applying $D$ directly to $(3,1)$ as if those were coordinates in the eigenvector basis.

Similarity $P^{-1}AP$ requires one map from a vector space to itself and a basis change used on both its input and output. A general matrix for a map $V\to W$ may use different bases in $V$ and $W$; then the transformation rule has a different change-of-coordinates matrix on each side.

## Workshop 3 — Repeated action without diagonalization

The shear $S=\begin{pmatrix}1&t\\0&1\end{pmatrix}$ has characteristic polynomial $(\lambda-1)^2$. When $t\ne0$, its eigenvectors satisfy $y=0$, so there is only one independent eigenvector and $S$ is not diagonalizable. Yet powers remain easy:

$$S^n=\begin{pmatrix}1&nt\\0&1\end{pmatrix}\quad(n=0,1,2,\ldots).$$

To see why, write $S=I+N$ with $N^2=0$ and use $(I+N)^n=I+nN$. The off-diagonal term grows linearly even though both eigenvalues equal 1. Eigenvalues alone do not tell the whole story of repeated action.

When $t=0$, $S=I$ and every nonzero vector is an eigenvector. The parameter value $t=0$ changes the eigenspace dimension, not the determinant: $\det S=1$ for every $t$. In the capstone, ask which qualitative feature actually changes before declaring a “phase transition.”

## Workshop 4 — Least squares is projection, not interpolation

Fit a line $\widehat y=\beta_0+\beta_1x$ to the three observations $(0,1),(1,2),(2,2)$. The normal equations are

$$\begin{pmatrix}3&3\\3&5\end{pmatrix}\begin{pmatrix}\beta_0\\\beta_1\end{pmatrix}=\begin{pmatrix}5\\6\end{pmatrix}.$$

Subtracting the first row from the second gives $2\beta_1=1$, so $\beta_1=1/2$ and $\beta_0=7/6$. Predictions are $7/6,5/3,13/6$; residuals $y-\widehat y$ are $-1/6,1/3,-1/6$. They sum to zero and their $x$-weighted sum is zero, demonstrating orthogonality to both columns of the design matrix. The line misses every observed point, yet it is the closest fitted vector within the two-dimensional column space.

**Model boundary:** those orthogonality identities establish the least-squares optimum for this full-rank design. They do not establish that a line is a good description of the process that produced the data, or that predictions outside $0\le x\le2$ are reliable.

## Cumulative exercises and feedback

1. Find the kernel and image of $U(x,y,z)=(x+y,x+y)$, and check rank-nullity.
2. For the shear above with $t=2$, compute $S^5(0,1)$ both by the power formula and by repeated geometric action.
3. In Workshop 4, verify that the residual is orthogonal to the design columns. What changes if the same observation is duplicated ten times?
4. Give a linear map that has determinant zero yet maps some nonzero vectors to nonzero vectors. Explain the collapsed direction.

**Answers.** (1) The image is the line $\{(u,u):u\in\mathbb R\}$, so rank is 1. The kernel is $\{(x,y,z):x+y=0\}$, a plane with basis $(1,-1,0),(0,0,1)$ and nullity 2; $1+2=3$. (2) $S^5=\begin{pmatrix}1&10\\0&1\end{pmatrix}$ and $S^5(0,1)=(10,1)$: each application shifts the first coordinate by twice the unchanged second coordinate. (3) The residual dot $(1,1,1)$ is $-1/6+1/3-1/6=0$, and its dot product with $(0,1,2)$ is $1/3-2/6=0$. Duplicating one observation changes its weight in the fit and generally changes the coefficients; it does not create ten independent observations. (4) $V(x,y)=(x,0)$ has determinant zero and kernel the vertical axis, while vectors with nonzero first coordinate still have nonzero images.

If 1 was difficult, return to “what outputs can be made?” before counting dimensions. If 2 was difficult, draw the image of a vertical unit vector after each shear. If 3 led you to say the residual is zero, distinguish *orthogonal to a subspace* from *equal to zero*. These are the conceptual checkpoints needed before numerical linear algebra.
