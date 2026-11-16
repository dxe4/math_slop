var e=`---
parent_id: book-optimization-backprop-from-scratch
chapter_id: arrays-linear-maps-shapes
title: "Arrays, Linear Maps, and Shape Contracts"
level: undergraduate
estimated_minutes: 125
license: CC BY-SA 4.0
---

# Arrays, Linear Maps, and Shape Contracts

## Purpose and boundary

This chapter turns a declared learning task into arrays without treating arrays as meaning-free containers. It assumes algebra and the learning contract from Chapter 1. It develops exactly the linear algebra needed for later derivatives and backpropagation: vectors, linear and affine maps, matrix products, inner products, norms, rank, and batch conventions. Proof-oriented linear algebra belongs in [Linear Algebra: Structure and Proof](#/item/book-linear-algebra-structure-proofs); here every definition is tied to a computation.

## Coordinates follow the representation

After encoding, one case is a vector

$x=(x_{1},…,x_{d})^{\\top}\\in \\mathbb{R}^d$.

The coordinate $x_{j}$ has a declared meaning, unit, and missingness policy. A vector is not merely a list: addition and scalar multiplication assert which combinations are meaningful. Adding two standardized feature vectors may be algebraically valid while averaging a postal code encoding is not scientifically meaningful.

We use column vectors for individual cases. A batch of $n$ cases is a matrix $X\\in \\mathbb{R}^{n\\times d}$ whose cases are rows. This mixed convention is common in learning systems and must be written down:

- individual case: column $x\\in \\mathbb{R}^d$;
- batch: row $i$ is $x_{i}^{\\top}$;
- feature matrix: $X_{ij}$ is feature $j$ for case $i$;
- target vector: $y\\in \\mathbb{R}^n$.

Other conventions work. A hidden transpose is the failure.

## Linear and affine maps

A map $T\\colon \\mathbb{R}^d\\to \\mathbb{R}^m$ is linear when

$T(\\alpha x+\\beta z)=\\alpha T(x)+\\beta T(z)$

for all vectors and scalars. In chosen standard coordinates, there is an $m\\times d$ matrix $W$ such that $T(x)=Wx$. The $k$th output is

$(Wx)_{k}=\\sum_{j=1}^d W_{kj}x_{j}$.

An affine map has the form

$a(x)=Wx+b$, $b\\in \\mathbb{R}^m$.

It is generally not linear because $a(0)=b$. Neural-network “linear layers” usually implement affine maps. Keeping the distinction helps when deriving gradients with respect to the bias.

### Worked shape trace

Let $x\\in \\mathbb{R}^{3}$, $W\\in \\mathbb{R}^{2\\times 3}$, and $b\\in \\mathbb{R}^{2}$. Then $z=Wx+b\\in \\mathbb{R}^{2}$. If

$W=\\begin{bmatrix}1 & 2 & 0 \\\\ -1 & 3 & 4\\end{bmatrix}$, $x=(2,-1,1)^{\\top}$, $b=(1,0)^{\\top}$,

then

$Wx=(1\\cdot 2+2\\cdot (-1)+0\\cdot 1, -1\\cdot 2+3\\cdot (-1)+4\\cdot 1)^{\\top}=(0,-1)^{\\top}$,

so $z=(1,-1)^{\\top}$.

For a batch $X\\in \\mathbb{R}^{n\\times 3}$, the same map is

$Z=XW^{\\top}+1_{n} b^{\\top}\\in \\mathbb{R}^{n\\times 2}$.

Here $1_{n} b^{\\top}$ repeats the row $b^{\\top}$ exactly $n$ times. Broadcasting is a notation for this deliberate linear-algebra operation, not permission to combine arbitrary shapes.

## Composition and matrix products

If $A\\colon \\mathbb{R}^d\\to \\mathbb{R}^m$ and $B\\colon \\mathbb{R}^m\\to \\mathbb{R}^q$ are linear, then the composite $B\\circ A$ is represented by $BA\\in \\mathbb{R}^{q\\times d}$. Order follows application: $x$ meets $A$ first, then $B$.

Matrix multiplication is defined by

$(BA)_{ij}=\\sum_{k=1}^m B_{ik}A_{kj}$.

The shared inner dimension $m$ is the intermediate coordinate space. A shape trace is a proof obligation:

$x\\colon d\\times 1 \\to Ax: m\\times 1 \\to B(Ax): q\\times 1$.

### Noncommutativity is semantic

Let

$A=\\begin{bmatrix}1 & 1 \\\\ 0 & 1\\end{bmatrix}$, $B=\\begin{bmatrix}2 & 0 \\\\ 0 & 1\\end{bmatrix}$.

Then

$BA=\\begin{bmatrix}2 & 2 \\\\ 0 & 1\\end{bmatrix}$, while $AB=\\begin{bmatrix}2 & 1 \\\\ 0 & 1\\end{bmatrix}$.

Scaling the first coordinate before shearing is not the same transformation as shearing before scaling. In a computation graph, reversing factors generally changes the function, not just performance.

## Inner products, norms, and angles

The Euclidean inner product is

$\\langle x,z\\rangle =x^{\\top}z=\\sum_{j} x_{j}z_{j}$.

It induces the norm $\\lVert x\\rVert_{2}=\\sqrt{\\left(x^{\\top}x\\right)}$. Cauchy–Schwarz states

$\\lvert x^{\\top}z\\rvert\\le \\lVert x\\rVert_{2}\\lVert z\\rVert_{2}$.

One proof considers $\\lVert x-tz\\rVert^{2}\\ge 0$ as a quadratic in $t$. If $z\\ne 0$, its minimum at $t=(x^{\\top}z)/\\lVert z\\rVert^{2}$ is

$\\lVert x\\rVert^{2}-(x^{\\top}z)^{2}/\\lVert z\\rVert^{2}\\ge 0$,

which rearranges to the squared inequality. Equality holds exactly when the vectors are linearly dependent.

For nonzero vectors, cosine similarity is

$\\cos\\left(x,z\\right)=x^{\\top}z/(\\lVert x\\rVert\\lVert z\\rVert)$.

It is undefined at a zero vector. It is also sensitive to representation: centering, weighting coordinates, or changing units changes angles unless the transformation preserves the inner product.

### Weighted geometry

If $M$ is symmetric positive definite, then

$\\langle x,z\\rangle _{M}=x^{\\top}Mz$

is an inner product and $\\lVert x\\rVert_{M}=\\sqrt{\\left(x^{\\top}Mx\\right)}$. Choosing $M$ says which directions count as large. Regularization and preconditioning later chapters can be understood as changes in geometry rather than mysterious coefficients.

## Rank and information directions

The null space of $W$ is

$\\ker W=\\{v\\in \\mathbb{R}^{d}\\colon Wv=0\\}$.

If $v\\in \\ker W$, then $W(x+v)=Wx$; the map cannot distinguish those inputs. The rank is the dimension of the output directions actually reached. For a data matrix $X$, a nonzero $v$ with $Xv=0$ means the training rows contain no variation in that coefficient direction for a linear predictor.

### Worked aliasing in features

Let

$X=\\begin{bmatrix}1 & 2 \\\\ 2 & 4 \\\\ 3 & 6\\end{bmatrix}$.

The second column is twice the first. The vector $v=(2,-1)^{\\top}$ satisfies $Xv=0$. Thus coefficient vectors $w$ and $w+tv$ give identical training predictions for every $t$. An optimizer can select one representative, but the data do not identify the two coefficients separately.

Ridge regularization will choose a unique small-norm representative when its penalty is strictly positive. That uniqueness comes partly from the penalty; it does not retroactively create a second independent feature.

## Projections and residual orthogonality

For a nonzero vector $u$, the closest point to $x$ on the line $\\{cu\\}$ minimizes

$q(c)=\\lVert x-cu\\rVert^{2}$.

Expanding and differentiating gives

$q'(c)=-2u^{\\top}x+2c u^{\\top}u$,

so

$c^{\\star}=(u^{\\top}x)/(u^{\\top}u)$ and $p=c\\cdot u$.

The residual is orthogonal to the line:

$u^{\\top}(x-p)=u^{\\top}x-(u^{\\top}x/u^{\\top}u)u^{\\top}u=0$.

This is the geometric core of least squares. A later planned chapter develops general projections and factorizations; for now, remember that minimizing Euclidean residual produces an orthogonality condition in the geometry used by the loss.

### Worked one-feature fit through the origin

For feature column $u=(1,2,2)^{\\top}$ and targets $y=(2,2,5)^{\\top}$, the coefficient minimizing $\\lVert y-cu\\rVert^{2}$ is

$c=(u^{\\top}y)/(u^{\\top}u)=(2+4+10)/(1+4+4)=\\frac{16}{9}$.

Predictions are $(\\frac{16}{9},\\frac{32}{9},\\frac{32}{9})^{\\top}$. The residual dot product with $u$ is zero, although individual residuals are not.

## Operator norms and amplification

For a matrix $W$, the induced Euclidean operator norm is

$\\lVert W\\rVert_{2}=\\max_{x\\ne 0} \\lVert Wx\\rVert_{2}/\\lVert x\\rVert_{2}$.

It is the largest amplification of vector length. The singular-value theorem identifies it with the largest singular value; we use that result later without reproducing the linear-algebra volume's full proof.

The basic inequality

$\\lVert Wx\\rVert\\le \\lVert W\\rVert\\lVert x\\rVert$

follows immediately from the definition. For composed maps,

$\\lVert BA\\rVert\\le \\lVert B\\rVert\\lVert A\\rVert$.

Repeated products can therefore amplify or contract signals and gradients. The upper bound can be loose, but it gives a clean failure warning for deep compositions.

### A perturbation ledger

Suppose a sensor error changes an input from $x$ to $x+\\delta$. An affine layer changes its output by exactly $W \\delta$; the bias cancels. Consequently

$\\lVert a(x+\\delta)-a(x)\\rVert_{2} \\le \\lVert W\\rVert_{2} \\lVert \\delta\\rVert_{2}$.

This is a deterministic sensitivity statement, not a robustness certificate for the entire predictor. For example, take

$W=\\begin{bmatrix}1 & 1 \\\\ 1 & 1.001\\end{bmatrix}$ and $\\delta=(1,-1)^{\\top}$.

Although $\\lVert \\delta\\rVert_{2}=\\sqrt{\\left(2\\right)}$, the output perturbation is $(0,-0.001)^{\\top}$. In contrast, perturbing along $(1,1)^{\\top}$ produces $(2,2.001)^{\\top}$. Reporting only the largest amplification hides the near-null direction; reporting only one small observed perturbation hides the large direction. A useful ledger records the norm, direction, and whether that direction is scientifically plausible.

## Coordinates, bases, and what a weight means

Let a vector have old coordinates $x$ and new coordinates $x'=Sx$, where $S$ is invertible. If $y=Wx$, then the same map in new input coordinates is

$y=W S^{-1}x'$.

Thus the numerical matrix changes to $W'=WS^{-1}$ even though the underlying map has not changed. If outputs also change coordinates by $y'=Ty$, then $W'=TWS^{-1}$. Coefficients are coordinate descriptions; they are not invariant scientific effects.

### Worked rescaling audit

Suppose $y=2x_{1}+3x_{2}$, where $x_{1}$ is measured in metres. Store it in centimetres as $x'_{1}=100x_{1}$, leaving $x'_{2}=x_{2}$. Then

$y=0.02x'_{1}+3x'_{2}$.

The first coefficient shrinks by 100 while the represented function stays unchanged. An $l_{2}$ penalty on the raw coefficient vector does not stay unchanged: $2^{2}+3^{2}=13$, whereas $0.02^{2}+3^{2}=9.0004$. Standardization and regularization therefore form one declared pipeline, not independent implementation details.

## Rank in exact and floating arithmetic

Exact rank asks whether a singular value is zero. Numerical work asks whether it is small relative to problem scale and arithmetic. If singular values are $s_{1} \\ge ... \\ge s_{r}$, a declared numerical-rank rule might retain directions satisfying

$s_{j} > \\tau s_{1}$,

where $\\tau$ reflects precision and downstream tolerance. The choice is part of the analysis; there is no scale-free universal cutoff.

For $X=\\operatorname{diag}(1,10^{-10})$, exact rank is two. Yet recovering the second coefficient from a target perturbed by $10^{-8}$ can amplify that perturbation by $10^{10}$. Calling the matrix “full rank” is true but insufficient; calling it “rank one” without a tolerance is also incomplete.

## Broadcasting as an explicit linear map

Broadcasting a bias $b\\in \\mathbb{R}^m$ over $n$ rows is the linear map $B(b)=1_{n} b^{\\top}$. Its adjoint under Frobenius geometry is

$B^{\\star}(G)=G^{\\top}1_{n}$,

because $<G,1_{n}b^{\\top}>_{F}=<G^{\\top}1_{n},b>$. This explains why reverse mode sums along repeated axes. A library that broadcasts a $(1,m)$ row and one that broadcasts an $(n,1)$ column perform different maps even when a square test lets both run. Test with unequal axis lengths.

## Shape contracts in pseudocode

An implementation should validate each operation before arithmetic:

\`\`\`text
affine(batch X[n,d], weights W[m,d], bias b[m]):
    require finite(X, W, b)
    require X.columns == W.columns
    require W.rows == b.length
    Z = zeros(n,m)
    for i in 0..n-1:
        for k in 0..m-1:
            Z[i,k] = b[k]
            for j in 0..d-1:
                Z[i,k] += X[i,j] * W[k,j]
    return Z
\`\`\`

This slow reference implementation is valuable even when production code uses optimized matrix multiplication. It states the indices unambiguously and supplies an oracle for tiny test cases.

Do not silently flatten a tensor, discard an axis, or rely on a library to choose a broadcast direction. Name each axis: batch, time, channel, row, feature, class, or hidden unit.

## Failure boundaries

- A matrix shape certifies algebraic compatibility, not semantic compatibility.
- A small Euclidean norm is coordinate- and unit-dependent.
- High rank in floating arithmetic may still be practically ill-conditioned.
- A one-hot code makes categories coordinates but not naturally ordered distances.
- Projection geometry depends on the chosen inner product and weights.
- A batch dimension is not a feature dimension; transposing both can produce plausible but wrong numbers.
- Linear dependence in a sample may disappear or worsen in deployment.

## Exercises

1. State the shapes of $Wx+b$ when $W$ is $7\\times 4$ and $x$ has length 4. What fails if $b$ has length 4?
2. Using the row-batch convention, give the shape of $XW^{\\top}+1b^{\\top}$ for $X\\colon 32\\times 4$, $W\\colon 7\\times 4$, and $b\\colon 7$.
3. Prove that an affine map $a(x)=Wx+b$ is linear if and only if $b=0$.
4. Compute $BA$ and $AB$ for $A=\\begin{bmatrix}1 & 1 \\\\ 0 & 1\\end{bmatrix}$, $B=\\begin{bmatrix}2 & 0 \\\\ 0 & 1\\end{bmatrix}$ and apply both to $(1,1)^{\\top}$.
5. Prove $\\lVert BA\\rVert\\le \\lVert B\\rVert\\lVert A\\rVert$ for induced norms.
6. Find a nonzero null vector for $X=\\begin{bmatrix}1 & 3 \\\\ 2 & 6\\end{bmatrix}$. Show two distinct coefficient vectors with identical predictions.
7. Project $x=(3,1)^{\\top}$ onto the line spanned by $u=(1,1)^{\\top}$ and verify residual orthogonality.
8. A feature measured in metres is multiplied by 100 when mistakenly treated as centimetres while weights are unchanged. What happens to its contribution to a dot product? Why may retraining hide but not excuse the error?
9. Give an example of two matrices whose product is defined in one order but not the other.
10. For $W=\\operatorname{diag}(3,\\frac{1}{2})$, compute the maximum and minimum Euclidean length amplification over nonzero vectors and identify directions attaining them.
11. Under the coordinate change $x'=Sx$, derive the matrix representing $y=Wx$ as a function of $x'$. Evaluate it for $S=\\operatorname{diag}(100,1)$ and $W=[2,3]$.
12. For $X=\\operatorname{diag}(1,10^{-6})$, solve $Xw=y$ for $y=(1,10^{-6})^{\\top}$, then solve after changing only $y_{2}$ to $1.01\\cdot 10^{-6}$. Compare relative and absolute changes.
13. Prove that the adjoint of $B(b)=1_{n}b^{\\top}$ is $B^{\\star}(G)=G^{\\top}1_{n}$ under Euclidean/Frobenius inner products.
14. Let $W=\\begin{bmatrix}1 & 1 \\\\ 1 & 1.001\\end{bmatrix}$. Compute $W(1,-1)^{\\top}$ and $W(1,1)^{\\top}$; explain why one observed perturbation cannot estimate worst-case amplification.
15. A tensor has axes $(batch,time,feature)=(8,20,5)$. State the expanded shapes for adding a feature bias, a time bias, and a scalar. Which reduction axes produce each bias gradient?
16. Show that an orthogonal change of input coordinates preserves Euclidean norms and the operator norm of a represented linear map, whereas a general rescaling need not.

## Full solutions

1. $x$ is $4\\times 1$; $W$ maps it to $7\\times 1$, so $b$ must have length 7 and the output has length 7. A length-4 bias lives in the input space and cannot be added to a seven-dimensional output.
2. $W^{\\top}$ is $4\\times 7$, so $XW^{\\top}$ is $32\\times 7$. $1_{32}b^{\\top}$ is also $32\\times 7$. The output contains one seven-dimensional row for each of 32 cases.
3. If the map is linear, $a(0)=0$; but $a(0)=b$, so $b=0$. Conversely, if $b=0$, matrix multiplication satisfies $W(\\alpha x+\\beta z)=\\alpha Wx+\\beta Wz$, so the map is linear.
4. $BA=\\begin{bmatrix}2 & 2 \\\\ 0 & 1\\end{bmatrix}$ and $AB=\\begin{bmatrix}2 & 1 \\\\ 0 & 1\\end{bmatrix}$. Thus $BA(1,1)^{\\top}=(4,1)^{\\top}$, while $AB(1,1)^{\\top}=(3,1)^{\\top}$. The order changes the first coordinate.
5. For every nonzero $x$, $\\lVert BAx\\rVert\\le \\lVert B\\rVert\\lVert Ax\\rVert\\le \\lVert B\\rVert\\lVert A\\rVert\\lVert x\\rVert$. Divide by $\\lVert x\\rVert$ and take the supremum over nonzero $x$.
6. Since the second column is three times the first, $v=(3,-1)^{\\top}$ satisfies $Xv=0$. For example, $w=(0,0)^{\\top}$ and $w'=(3,-1)^{\\top}$ both predict $(0,0)^{\\top}$. More generally $w$ and $w+tv$ are observationally equivalent on these rows.
7. $c=(u^{\\top}x)/(u^{\\top}u)=\\frac{4}{2}=2$, so the projection is $(2,2)^{\\top}$. The residual is $(1,-1)^{\\top}$, and $u^{\\top}(x-p)=1-1=0$.
8. Its dot-product contribution becomes 100 times as large. Retraining may shrink the corresponding numerical weight by about 100, so predictions can look similar, but penalties, step sizes, initialization, rounding, and interpretation change. The unit contract is still wrong and can fail when combined with external inputs.
9. Let $A$ be $2\\times 3$ and $B$ be $3\\times 4$. Then $AB$ is defined and is $2\\times 4$, while $BA$ is not defined because the inner dimensions 4 and 2 do not match.
10. For $x=(x_{1},x_{2})$, $\\lVert Wx\\rVert^{2}=9x_{1}^{2}+(\\frac{1}{4})x_{2}^{2}$. Dividing by $\\lVert x\\rVert^{2}=x_{1}^{2}+x_{2}^{2}$ gives a weighted average of 9 and $\\frac{1}{4}$. Maximum length ratio is 3 along $(1,0)$; minimum is $\\frac{1}{2}$ along $(0,1)$.
11. Since $x=S^{-1}x'$, substitution gives $y=WS^{-1}x'$; hence $W'=WS^{-1}$. Here $S^{-1}=\\operatorname{diag}(0.01,1)$, so $[2,3]S^{-1}=[0.02,3]$. The changed coefficient describes the same map in different units.
12. Initially $w=(1,1)^{\\top}$; afterward $w'=(1,1.01)^{\\top}$. The second target and coefficient both change by 1% in this aligned example, but the absolute target perturbation is $10^{-8}$ while the coefficient perturbation is $10^{-2}$, an amplification of $10^{6}$. Relative and absolute conditioning answer different questions.
13. For every $G,b$, $<G,B(b)>_{F}=\\operatorname{tr}(G^{\\top}1_{n}b^{\\top})=b^{\\top}(G^{\\top}1_{n})=<G^{\\top}1_{n},b>$. The defining adjoint identity therefore gives $B^{\\star}(G)=G^{\\top}1_{n}$.
14. The products are $(0,-0.001)^{\\top}$ and $(2,2.001)^{\\top}$. The first direction is nearly null while the second is strongly amplified. Sensitivity depends on direction; the operator norm maximizes over all nonzero directions.
15. A feature bias has logical shape $(1,1,5)$ and repeats over batch and time, so its gradient sums axes 0 and 1. A time bias has shape $(1,20,1)$ and sums batch and feature axes 0 and 2. A scalar repeats to $(8,20,5)$ and its gradient sums all axes.
16. If $Q^{\\top}Q=I$, then $\\lVert Qx\\rVert^{2}=x^{\\top}Q^{\\top}Qx=\\lVert x\\rVert^{2}$. In new coordinates the matrix is $WQ^{\\top}$, and the norm-preserving bijection $x=Q^{\\top}x'$ gives $\\lVert WQ^{\\top}\\rVert=\\lVert W\\rVert$. A nonorthogonal scaling such as $\\operatorname{diag}(100,1)$ changes lengths and can change the operator norm.

## Project checkpoint

Implement the slow affine reference routine for tiny arrays in any dependency-free language, with explicit finite and shape checks. Test it against hand calculations, then write an axis ledger for the table chosen in Chapter 1. The next authored chapter treats derivatives as linear maps between exactly these spaces.
`;export{e as default};