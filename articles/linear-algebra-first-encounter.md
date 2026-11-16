
# Linear Algebra Before the Machinery: Moves, Mixtures, and Directions

**Before reading.** Read [Coordinates: Lines, Distance and Circles](../books/euclidean-geometry-trigonometry/coordinates-lines-distance-circles.md) and [Equivalent Expressions](../books/algebra-from-stories/equivalent-expressions.md). These are preparation for the ideas used below.

Linear algebra begins with a restriction that creates surprising power: study transformations that respect addition and scaling. If a machine doubles every input arrow, then transforms it, the result must be twice the transformed arrow. If an arrow is assembled from two moves, the machine’s output must be assembled from the two transformed moves. Once that rule holds, knowing what happens to a few building directions determines everything.

This encounter assumes coordinates and ordinary algebra, not proof-writing or calculus. It develops the geometry behind matrices, systems, determinants, eigenvectors, and projection. Later courses make the arguments abstract and computationally reliable.

## 1. Vectors are instructions, not just arrows

The vector $(3,2)$ can mean “walk three units east and two north.” It can also record three kilograms of one ingredient and two of another, two measured features, or coefficients of $3+2x$. The common structure is that vectors can be added and scaled:

$(3,2)+(-1,4)=(2,6)$ and $2(3,2)=(6,4)$.

A **linear combination** of vectors $u$ and $v$ is $su+tv$, where $s,t$ are numbers. If $u=(1,0)$ and $v=(0,1)$, then every plane vector is $x u+y v$. These two vectors are building instructions for the whole plane.

Not every pair works. The vectors $(1,2)$ and $(2,4)$ lie on the same line. Their combinations cannot leave that line because the second is already twice the first. This is **dependence**: one advertised building direction adds no new freedom.

## 2. A linear machine is determined by two arrows


**Worked example.**
Let $T$ be a plane transformation satisfying

$T(u+v)=T(u)+T(v)$ and $T(cu)=cT(u)$.

Since $(x,y)=x(1,0)+y(0,1)$, linearity forces

$$T(x,y)=xT(1,0)+yT(0,1)$$

Suppose $T(1,0)=(2,1)$ and $T(0,1)=(-1,3)$. Then

$$T(4,-2)=4(2,1)-2(-1,3)=(10,-2)$$

Place the two output vectors as columns:

$$A=\begin{pmatrix}2&-1\\1&3\end{pmatrix}$$

The formula $Ax$ means “mix the columns using the coordinates of $x$.” Matrix multiplication is not an arbitrary row-by-column ritual; its columns record where basis directions go.

**Nonexample.** Translation $F(x,y)=(x+5,y)$ is not linear because $F(0,0)=(5,0)$, whereas every linear map must send zero to zero. Translation is affine: important, useful, but governed by a slightly different rule.

## 3. Read a transformed grid

Consider the shear

$S=\begin{pmatrix}1&1\\0&1\end{pmatrix}$, so $S(x,y)=(x+y,y)$.

Horizontal lines remain horizontal. Vertical lines tilt because $S(0,1)=(1,1)$. A square becomes a parallelogram, but parallel lines remain parallel and the origin stays fixed. This is the visible signature of linearity.

Now compose a reflection $R=\begin{pmatrix}1&0\\0&-1\end{pmatrix}$ with the shear. $RS$ means apply $S$ first and $R$ second; $SR$ reverses that order. At $(0,1)$,

$RS(0,1)=R(1,1)=(1,-1)$, while $SR(0,1)=S(0,-1)=(-1,-1)$.

Order matters. Matrix multiplication encodes composition, and composition of actions is generally not commutative.

## 4. Systems ask whether an output can be reached

The equation $Ax=b$ asks: which mixture of the columns of $A$ produces $b$? For

$A=\begin{pmatrix}1&2\\1&-1\end{pmatrix}$ and $b=(5,-1)$,

we solve $x+2y=5$ and $x-y=-1$. Subtracting gives $3y=6$, so $y=2$ and $x=1$.

Three outcomes are possible:

- no solution: $b$ lies outside the column span;
- one solution: the columns reach $b$ in exactly one way;
- many solutions: at least one input direction is invisible to the map.

That invisible set is the **kernel**. If $Av=0$, then whenever $Ax=b$, also $A(x+tv)=b$. A nonzero kernel creates ambiguity.

## 5. Determinant measures signed area

For $A=\begin{pmatrix}a&b\\c&d\end{pmatrix}$, the determinant is $ad-bc$. Geometrically it is the signed area scale. The unit square’s edges become the columns $(a,c)$ and $(b,d)$, and their parallelogram has area $|ad-bc|$.

For our matrix $\begin{pmatrix}2&-1\\1&3\end{pmatrix}$, $\det A=2\cdot 3-(-1)\cdot 1=7$. Every region has seven times the area after transformation. Positive sign preserves orientation; negative sign reverses it.

If $\det A=0$, the output columns lie on one line or at zero. A two-dimensional square collapses to zero area. Information was destroyed, so the transformation cannot be inverted. This joins geometry and algebra:

$\det A\ne 0$ ⇔ columns independent ⇔ every output has one input ⇔ $A$ is invertible.

## 6. Eigenvectors are directions that survive

Most vectors turn when transformed. An **eigenvector** is a nonzero vector $v$ for which

$$Av=\lambda v$$

Its line is preserved; the number $\lambda$ gives scaling and a negative sign reverses orientation along the line. Repeated action is easy there: $Aⁿv=\lambdaⁿv$.

For $A=\begin{pmatrix}2&1\\1&2\end{pmatrix}$,

$A(1,1)=(3,3)=3(1,1)$ and $A(1,-1)=(1,-1)$.

The diagonal line grows by 3 while the other diagonal stays the same. Write a generic vector as $r(1,1)+s(1,-1)$. After $n$ steps it becomes

$$r3ⁿ(1,1)+s(1,-1)$$

Unless $r=0$, its direction increasingly resembles $(1,1)$. The vector is not being “attracted” in raw space—it usually grows—but its normalized direction aligns.

**Boundary case.** A quarter-turn rotation has no real eigenvector. Every nonzero real direction turns. Complex eigenvalues encode the rotation, but a real drawing should show no invariant line rather than invent one.

## 7. Projection answers an impossible equation honestly

Suppose we want a point on the line through $u=(1,2)$ closest to $b=(3,1)$. Points on the line are $tu$. The closest error $b-tu$ is perpendicular to the line:

$$u\cdot (b-tu)=0$$

Thus $u\cdot b-t(u\cdot u)=0$, giving

$$t=(u\cdot b)/(u\cdot u)=(3+2)/(1+4)=1$$

The closest point is $(1,2)$, and the residual $(2,-1)$ is perpendicular because $(1,2)\cdot (2,-1)=0$. This is orthogonal projection. Least squares uses the same idea when a system has no exact solution: choose the attainable output closest to the data.

## A numerical and text alternative to the picture

For any matrix, record this table before trusting a drawing:

```text
A = [[2,1],[1,2]]
image of e1       (2,1)
image of e2       (1,2)
trace             4
determinant       3, area ×3, orientation preserved
eigenpair 1       λ=3, direction (1,1)
eigenpair 2       λ=1, direction (1,-1)
test vector       (2,0) = (1,1)+(1,-1)
A(test vector)    (4,2) = 3(1,1)+(1,-1)
```

The table contains the claims encoded by grid, area, and arrow visuals and remains usable without color or motion.

## Practice with worked answers

### 1. Build a matrix from its action

<a id="deep-dive-linear-algebra-first-encounter-ex-1"></a>

**Exercise 1.**

A linear map sends $(1,0)$ to $(3,-1)$ and $(0,1)$ to $(2,4)$. Find its matrix and the image of $(2,-3)$.


<details>
<summary>Hint 1</summary>

A linear map is determined by its action on the standard basis vectors.
</details>
<details>
<summary>Hint 2</summary>

Place those two images as matrix columns, then form the requested linear combination.
</details>
<details>
<summary>Solution</summary>

The images are columns, so $A=\begin{pmatrix}3&2\\-1&4\end{pmatrix}$. Then $A(2,-3)=2(3,-1)-3(2,4)=(0,-14)$.

</details>

### 2. Diagnose collapse

<a id="deep-dive-linear-algebra-first-encounter-ex-2"></a>

**Exercise 2.**

For $B=\begin{pmatrix}2&6\\1&3\end{pmatrix}$, compute the determinant and find a nonzero vector sent to zero.


<details>
<summary>Hint 1</summary>

A nonzero vector collapses exactly when it lies in the matrix kernel.
</details>
<details>
<summary>Hint 2</summary>

Compute the determinant and solve one dependent row equation to produce a concrete kernel vector.
</details>
<details>
<summary>Solution</summary>

$\det B=6-6=0$. Solving $2x+6y=0$ gives $x=-3y$; choosing $y=1$ yields $v=(-3,1)$. Both rows then give zero. The plane collapses onto the line spanned by $(2,1)$.

</details>

### 3. Separate fixed vectors from invariant lines

If $Cv=-2v$, is $v$ fixed? Is its line invariant? What is $C^{2}v$?

**Answer.** The vector is not fixed: it reverses and doubles. Its line is invariant because every scalar multiple remains on that line. $C^{2}v=(-2)^{2}v=4v$.

### 4. Find the projection

Project $b=(4,2)$ onto the line spanned by $u=(1,1)$.

**Answer.** The coefficient is $(u\cdot b)/(u\cdot u)=6/2=3$, so the projection is $(3,3)$. The residual $(1,-1)$ is perpendicular to $(1,1)$.

### 5. Repair a claim

Someone says, “A matrix with determinant 2 doubles every length.” Give a counterexample.

**Answer.** $A=\begin{pmatrix}2&0\\0&1\end{pmatrix}$ has determinant 2. It doubles horizontal length but preserves vertical length. Determinant controls area, not every one-dimensional length.

## Continue in several directions

Continue to a standard course for elimination, basis, rank–nullity, change of coordinates, orthogonality, factorizations, and SVD. Open the eigenvector laboratory to edit the four entries and test real, repeated, and complex cases. Move toward computer graphics for coordinate transforms, statistics for least squares, differential equations for repeated linear dynamics, numerical linear algebra for stable algorithms, or abstract algebra for vector spaces over general fields. The restriction “respect mixtures” is small; its reach is not.
