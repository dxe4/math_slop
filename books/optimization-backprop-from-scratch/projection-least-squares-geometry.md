
# Projection, Least Squares, and Data Geometry

## Purpose and boundary

The previous chapter turned a table into shaped vectors and linear maps. This chapter asks what it means to fit a linear rule geometrically. We will derive orthogonal projection, normal equations, rank-deficient solutions, weighted least squares, and the numerical consequences of choosing coordinates. The emphasis is application and computation. Full structural proofs about vector spaces, spectral decompositions, and matrix factorizations belong in [Linear Algebra: Structure and Proof](#/books/linear-algebra-structure-proofs).

Let $X\in \mathbb{R}^{n\times d}$ store one case per row, $w\in \mathbb{R}^d$ be coefficients, and $y\in \mathbb{R}^n$ be targets. The prediction vector $Xw$ cannot be an arbitrary point of $\mathbb{R}^n$: it must lie in the column space

$C(X)=\{Xw\colon w\in \mathbb{R}^d\}$.

Least squares chooses the attainable prediction closest to $y$ in a declared metric. That sentence is the organizing theorem of this chapter. It also exposes three different objects that are often confused:

- the coefficient vector $w$, which depends on coordinates and may be nonunique;
- the fitted vector $Xw$, which can be unique even when $w$ is not;
- the relation between fitted values and future outcomes, which geometry alone does not establish.

## Orthogonality and projection

For vectors $u,v\in \mathbb{R}^n$, the Euclidean inner product is $u^{\top}v=\sum_{i} u_{i}v_{i}$ and the induced norm is $\lVert u\rVert_{2}=\sqrt{\left(u^{\top}u\right)}$. Vectors are orthogonal when $u^{\top}v=0$. For a subspace $S$, its orthogonal complement is

$S^{\perp}=\{r\in \mathbb{R}^{n}\colon r^{\top}s=0\text{ for every }s\in S\}$.

An **orthogonal projection** of $y$ onto $S$ is a point $p\in S$ such that the residual $r=y-p$ lies in $S^{\perp}$.

### Projection theorem in finite dimensions

Every finite-dimensional subspace $S\subseteq \mathbb{R}^n$ has exactly one orthogonal projection of each $y\in \mathbb{R}^n$.

To see existence without assuming a formula, choose an orthonormal basis $q_{1},\ldots ,q_{k}$ of $S$ and set

$p=\sum_{j=1}^k(q_{j}^{\top}y)q_{j}$.

For any basis vector $q_{l}$,

$q_{l}^{\top}(y-p)=q_{l}^{\top}y-\sum_{j}(q_{j}^{\top}y)q_{l}^{\top}q_{j}=0$.

Thus $y-p$ is orthogonal to every element of $S$. For uniqueness, suppose both $p$ and $p'$ satisfy the definition. Then $p-p'\in S$, while

$p-p'=(y-p')-(y-p)\in S^{\perp}$.

The only vector in both $S$ and $S^{\perp}$ is zero, so $p=p'$.

The Pythagorean identity now proves optimality. For any $z\in S$, write

$y-z=(y-p)+(p-z)$.

The two summands are orthogonal, hence

$\lVert y-z\rVert_{2}^{2}=\lVert y-p\rVert_{2}^{2}+\lVert p-z\rVert_{2}^{2}\ge \lVert y-p\rVert_{2}^{2}$,

with equality only at $z=p$. Projection is therefore both an orthogonality condition and a closest-point problem.

## Normal equations from residual geometry

For least squares, $S=C(X)$. A fitted vector $p=X\widehat{w}$ is the projection exactly when its residual $r=y-X\widehat{w}$ is orthogonal to every column of $X$. Stacking those orthogonality conditions gives

$X^{\top}(y-X\widehat{w})=0$,

or the **normal equations**

$X^{\top}X\widehat{w}=X^{\top}y$.

The same equations follow by differentiating

$L(w)=(\frac{1}{2})\lVert Xw-y\rVert_{2}^{2}$:

$dL=(Xw-y)^{\top}Xdw=[X^{\top}(Xw-y)]^{\top}dw$.

The geometric derivation says more: it explains why the stationary condition is sufficient and why fitted values can remain unique when coefficients do not.

### Worked case: projection onto a line

Let the single feature column be $x=(1,2,2)^{\top}$ and let $y=(2,1,3)^{\top}$. All fitted vectors have the form $wx$. The normal equation is

$(x^{\top}x)w=x^{\top}y$.

Here $x^{\top}x=9$ and $x^{\top}y=10$, so $\widehat{w}=\frac{10}{9}$. The fitted vector is $(\frac{10}{9},\frac{20}{9},\frac{20}{9})^{\top}$, and

$r=y-X\widehat{w}=(\frac{8}{9},-\frac{11}{9},\frac{7}{9})^{\top}$.

Check the certificate:

$x^{\top}r=\frac{8}{9}-\frac{22}{9}+\frac{14}{9}=0$.

The residual norm is not zero; orthogonality, not interpolation, certifies the best attainable fit.

## Unique fitted values, possibly nonunique coefficients

If the columns of $X$ are linearly independent, $X^{\top}X$ is positive definite because

$v^{\top}X^{\top}Xv=\lVert Xv\rVert_{2}^{2}>0$ for every nonzero $v$.

Then the coefficient solution is unique. If the columns are dependent, a nonzero $z$ satisfies $Xz=0$. Whenever $w$ is a solution, so is $w+z$, and they represent the same fitted vector.

Despite this coefficient ambiguity, the fitted vector is unique: every least-squares fit is the unique projection of $y$ onto $C(X)$. If $w_{1}$ and $w_{2}$ are minimizers, then $Xw_{1}=Xw_{2}$, although $w_{1}$ need not equal $w_{2}$.

### Worked case: duplicated features

Let

$X=\begin{bmatrix}1 & 1 \\ 2 & 2 \\ 3 & 3\end{bmatrix}$ and $y=(1,2,4)^{\top}$.

The prediction depends only on $s=w_{1}+w_{2}$: $Xw=s(1,2,3)^{\top}$. Projecting onto that line gives

$\widehat{s}=(1\cdot 1+2\cdot 2+3\cdot 4)/(1^{2}+2^{2}+3^{2})=\frac{17}{14}$.

Every pair satisfying $w_{1}+w_{2}=\frac{17}{14}$ minimizes squared error. The choices $(\frac{17}{14},0)$, $(0,\frac{17}{14})$, and $(\frac{17}{28},\frac{17}{28})$ have identical training predictions. A claim that either duplicated feature has a uniquely determined effect is unsupported.

Among all minimizers, the minimum-Euclidean-norm solution splits the sum equally. Indeed, for fixed $w_{1}+w_{2}=s$,

$w_{1}^{2}+w_{2}^{2}=(\frac{1}{2})s^{2}+(\frac{1}{2})(w_{1}-w_{2})^{2}$,

which is minimized at $w_{1}=w_{2}=s/2$. The Moore–Penrose pseudoinverse selects this coordinate-dependent representative; it does not make the individual coefficients scientifically identifiable.

## Intercepts, centering, and the constant baseline

An affine model $b+z_{i}^{\top}w$ can be written as a linear model by adding a column of ones. There is also a useful centering identity. Let

$\overline{z}=(1/n)\sum_{i} z_{i}$ and $\overline{y}=(1/n)\sum_{i} y_{i}$.

For fixed $w$, differentiating the squared loss with respect to $b$ gives

$\sum_{i}(b+z_{i}^{\top}w-y_{i})=0$,

so

$\widehat{b}=\overline{y}-\overline{z}^{\top}w$.

Substituting yields centered residuals

$(z_{i}-\overline{z})^{\top}w-(y_{i}-\overline{y})$.

Thus fitting an unpenalized intercept plus slopes is equivalent to centering predictors and targets, fitting slopes without an intercept, then restoring $\widehat{b}$. The result depends on the centering rows. Using test rows to compute either mean leaks evaluation information into the fit.

The intercept-only subspace is the span of the all-ones vector. Its projection of $y$ is $\overline{y} 1$, recovering the mean baseline from Chapter 1. Adding columns enlarges the attainable subspace, so unpenalized training squared error cannot increase. That monotonic fact is purely in-sample; it says nothing about validation or population risk.

## Orthonormal coordinates and QR

Suppose $X=QR$, where the columns of $Q\in \mathbb{R}^{n\times k}$ are orthonormal and span $C(X)$. Then the projection is simply

$p=QQ^{\top}y$.

If $X$ has full column rank, $k=d$, $R$ is invertible, and coefficients solve

$Rw=Q^{\top}y$.

This route avoids explicitly forming $X^{\top}X$. A small dependency-free reference algorithm can use modified Gram–Schmidt:

```text
Q = empty column list
R = zero d-by-d array
for j in 0..d-1:
    v = copy(X[:, j])
    for k in 0..j-1:
        R[k,j] = dot(Q[:,k], v)
        v = v - R[k,j] * Q[:,k]
    R[j,j] = norm(v)
    require R[j,j] > rank_tolerance
    Q[:,j] = v / R[j,j]
return Q, R
```

This pseudocode exposes shapes and failure states, but it is not a universal production recommendation. Classical and modified Gram–Schmidt can lose orthogonality in finite precision; Householder QR is generally more stable for dense least squares. Rank decisions require a declared tolerance and scale.

### Why normal equations can be numerically hazardous

If the singular values of full-rank $X$ are $\sigma_{\max}\ge …\ge \sigma_{\min}>0$, then those of $X^{\top}X$ are their squares. In the Euclidean norm,

$\kappa _{2}(X^{\top}X)=\kappa _{2}(X)^{2}$.

Forming normal equations can therefore square an already large condition number and also introduces rounding while computing cross-products. The equation $w=(X^{\top}X)^{-1}X^{\top}y$ is a mathematical identity under full rank, not an instruction to compute an explicit inverse.

For a tiny exact case, normal equations are useful for derivation. For floating data, solve by QR or, when rank and small singular directions matter, an SVD-based method. Always retain a residual check such as $\lVert X^{\top}(Xw-y)\rVert$ scaled relative to the inputs.

## Singular-value geometry and regularization preview

Without reproducing the spectral proof, write a singular value decomposition

$X=U\Sigma V^{\top}$.

The columns $u_{j}$ corresponding to positive singular values span $C(X)$. Projection keeps the components of $y$ along those directions:

$p=\sum_{\sigma _{j}>0}(u_{j}^{\top}y)u_{j}$.

A minimum-norm coefficient solution divides by each positive singular value:

$w^{\dagger}=\sum_{\sigma _{j}>0}(u_{j}^{\top}y/\sigma _{j})v_{j}$.

Small $\sigma _{j}$ amplify target perturbations in coefficient coordinates. Ridge regression later replaces $1/\sigma _{j}$ by $\sigma _{j}/(\sigma _{j}^{2}+\lambda )$, trading exact least-squares fit for reduced amplification. Projection geometry explains both the benefit and the bias: ridge generally shrinks the fitted vector away from the exact projection.

## Weighted least squares is a declared metric

Let weights $a_{i}>0$ define

$L_{A}(w)=(\frac{1}{2})\sum_{i} a_{i}(x_{i}^{\top}w-y_{i})^{2}=(\frac{1}{2})(Xw-y)^{\top}A(Xw-y)$,

where $A=\operatorname{diag}(a_{1},…,a_{n})$. The derivative gives

$X^{\top}A(Xw-y)=0$.

Equivalently, let $A^{\frac{1}{2}}=\operatorname{diag}(\sqrt{\left(a_{i}\right)})$, $\widetilde{X}=A^{\frac{1}{2}}X$, and $\widetilde{y}=A^{\frac{1}{2}}y$. Then weighted least squares is ordinary projection of $\widetilde{y}$ onto $C(\widetilde{X})$.

Weights can represent a target empirical population, frequency counts, precision assumptions, or an operational value. These meanings are not interchangeable. Multiplying every weight by the same positive constant leaves the minimizer unchanged but changes the numerical scale of the summed objective and gradient. Normalizing weights changes neither a pure minimizer nor relative geometry, but it matters for step-size conventions and reported loss.

### Worked weighted case

Fit a constant to targets $0$ and $10$ with weights $9$ and $1$. The objective is

$(\frac{1}{2})[9(c-0)^{2}+(c-10)^{2}]$.

Its derivative is $9c+(c-10)=10c-10$, so $c=1$. This is the weighted mean $(9\cdot 0+1\cdot 10)/10$. The unweighted mean is $5$; neither answer is inherently correct without a weight contract.

Zero weights remove rows from the geometry and positive definiteness assumptions. Negative weights destroy the norm interpretation and can make the quadratic unbounded below. A generic array of “weights” should therefore be validated against its intended semantics.

## Hat matrices and diagnostics

For full column rank, the fitted vector is obtained by applying the hat matrix to the observation vector. The tempting formula $p=Hw$ is wrong: $w$ is not in observation space. The correct formula is

$p=Hy$, where $H=X(X^{\top}X)^{-1}X^{\top}$.

The matrix $H$ is symmetric and idempotent: $H^{\top}=H$ and $H^{2}=H$. Those two identities characterize Euclidean orthogonal projection matrices. Its diagonal entries $h_{ii}$ are leverages: they measure how strongly observation-coordinate $i$ aligns with the fitted subspace. Since

$\operatorname{tr}(H)=\operatorname{rank}(H)=d$

under full column rank, average leverage is $d/n$.

Large leverage is a geometric flag, not proof of bad data. A point can have high leverage and a small residual; residual size and leverage answer different questions. Likewise, residual orthogonality is an optimization certificate, not evidence of linearity, independent noise, correct units, absence of shift, or causal interpretation.

## Geometry audit and failure boundaries

Before trusting a least-squares computation, record:

1. the row and column semantics, units, centering rows, and intercept policy;
2. the norm or weight metric actually minimized;
3. numerical rank and the scale-relative tolerance used to decide it;
4. whether coefficients, fitted values, or predictions are the object of interest;
5. the solver path—QR, SVD, iterative method, or exact tiny algebra;
6. residual norm and scaled orthogonality defect $\lVert X^{\top}r\rVert$;
7. sensitivity under unit rescaling, small perturbations, and removal of high-leverage rows;
8. the split and claim boundary inherited from the learning contract.

A small training residual proves only closeness to the recorded target vector in the chosen geometry. It does not prove unique coefficients, future accuracy, calibrated uncertainty, or a causal effect.

## Exercises

1. Project $y=(3,1)^{\top}$ onto the line spanned by $x=(1,2)^{\top}$. Give the coefficient, fitted vector, residual, and orthogonality check.
2. Prove that $S∩S^{\perp}={0}$ for every subspace $S$ of $\mathbb{R}^n$.
3. Derive the normal equations from the differential of $(\frac{1}{2})\lVert Xw-y\rVert^{2}$ and state every shape.
4. Let $X=\begin{bmatrix}1 & 0 \\ 0 & 1 \\ 1 & 1\end{bmatrix}$ and $y=(1,2,4)^{\top}$. Solve the normal equations and verify residual orthogonality.
5. Suppose $X$ has two identical columns. Prove that coefficients are nonunique whenever a least-squares solution exists, while the fitted vector is unique.
6. For fixed $s=w_{1}+w_{2}$, prove that $(w_{1},w_{2})=(s/2,s/2)$ has minimum Euclidean norm.
7. Explain why adding a feature cannot increase unpenalized training squared error. Give two reasons it can still worsen deployment performance.
8. Fit an affine line $b+wx$ through least squares for points $(x,y)=(0,1),(1,2),(2,2)$. Use centering to find $w$ and $b$.
9. A constant model fits targets $2,8,20$ with weights $1,2,1$. Find the minimizer. What happens if all weights are multiplied by 7?
10. Prove that $H=Q Q^{\top}$ is symmetric and idempotent when $Q^{\top}Q=I$. Show that $Hy$ is orthogonal projection onto $C(Q)$.
11. A full-rank design has singular values $100$ and $0.01$. Compute $\kappa _{2}(X)$ and $\kappa _{2}(X^{\top}X)$. Explain the computational implication.
12. Construct a rank-deficient $X$ and two different coefficient vectors with identical predictions but different coefficient signs.
13. A residual satisfies $X^{\top}r=0$ to machine precision. List three modeling conclusions that do not follow.
14. Identify and repair the dimensional error in the statement $p=Hw$ when $H\in \mathbb{R}^{n\times n}$, $w\in \mathbb{R}^d$, and $p\in \mathbb{R}^n$.
15. For positive diagonal weight matrix $D$, derive the weighted normal equations for minimizing $\frac{1}{2} (Xw-y)^{\top}D(Xw-y)$ and state the residual orthogonality condition.
16. Let $X=U\Sigma V^{\top}$ have full column rank. Derive the least-squares solution from the SVD and identify how a small singular value amplifies a component of $U^{\top}y$.
17. If $H=QQ^{\top}$ with $Q\colon n\times d$ and orthonormal columns, prove $\operatorname{tr}(H)=d$ and $0\le H_{ii}\le 1$. Interpret $H_{ii}$ geometrically.
18. Show that including an unpenalized intercept makes least-squares residuals sum to zero. Give a condition under which this statement fails.

## Full solutions

1. The coefficient is $(x^{\top}y)/(x^{\top}x)=(3+2)/(1+4)=1$. Thus $p=(1,2)^{\top}$, $r=(2,-1)^{\top}$, and $x^{\top}r=2-2=0$.
2. If $v\in S∩S^{\perp}$, then $v\in S$ and is orthogonal to every vector of $S$, including itself. Hence $v^{\top}v=\lVert v\rVert^{2}=0$, so $v=0$.
3. With $X\colon n\times d$, $w\colon d$, and $y\colon n$, set $r=Xw-y\colon n$. Then $dr=Xdw:n$ and $dL=r^{\top}dr=r^{\top}Xdw=(X^{\top}r)^{\top}dw$. Therefore $\nabla L=X^{\top}(Xw-y):d$, and stationarity gives $X^{\top}Xw=X^{\top}y$, a $d$-vector equation.
4. $X^{\top}X=\begin{bmatrix}2 & 1 \\ 1 & 2\end{bmatrix}$ and $X^{\top}y=(5,6)^{\top}$. Solving gives $w=(\frac{4}{3},\frac{7}{3})^{\top}$. Then $Xw=(\frac{4}{3},\frac{7}{3},\frac{11}{3})^{\top}$ and $r=y-Xw=(-\frac{1}{3},-\frac{1}{3},\frac{1}{3})^{\top}$. Dotting with the two columns gives $-\frac{1}{3}+\frac{1}{3}=0$ and $-\frac{1}{3}+\frac{1}{3}=0$.
5. If the columns are identical, $z=(1,-1,0,…,0)^{\top}$ lies in the null space. From any solution $w$, every $w+tz$ gives $X(w+tz)=Xw$. Hence coefficients are nonunique. All minimizers nevertheless produce the unique projection of $y$ onto $C(X)$, so their fitted vectors agree.
6. Write $w_{1}=(s+d)/2$ and $w_{2}=(s-d)/2$. Then $w_{1}^{2}+w_{2}^{2}=(s^{2}+d^{2})/2$, minimized uniquely at $d=0$. Thus both coordinates equal $s/2$.
7. The old fitted subspace is contained in the enlarged one, so its minimizer remains an available candidate; minimizing over more candidates cannot raise the training objective. Deployment can worsen through variance or sensitivity to sampling noise, and through leakage, shift, or selection on validation information. The geometric monotonicity is only in-sample.
8. $\overline{x}=1$ and $\overline{y}=\frac{5}{3}$. Centered $x$ values are $(-1,0,1)$ and centered $y$ values are $(-\frac{2}{3},\frac{1}{3},\frac{1}{3})$. Hence $w=[(-1)(-\frac{2}{3})+1(\frac{1}{3})]/[1+1]=\frac{1}{2}$. Then $b=\overline{y}-w\overline{x}=\frac{5}{3}-\frac{1}{2}=\frac{7}{6}$.
9. The weighted mean is $(1\cdot 2+2\cdot 8+1\cdot 20)/(1+2+1)=\frac{38}{4}=\frac{19}{2}$. Multiplying all weights by 7 multiplies the objective and gradient by 7 but leaves the minimizer unchanged.
10. $(QQ^{\top})^{\top}=QQ^{\top}$, and $(QQ^{\top})^{2}=Q(Q^{\top}Q)Q^{\top}=QQ^{\top}$. The vector $QQ^{\top}y$ lies in $C(Q)$. Its residual obeys $Q^{\top}(y-QQ^{\top}y)=Q^{\top}y-Q^{\top}y=0$, so it is orthogonal to every column and therefore is the projection.
11. $\kappa _{2}(X)=100/0.01=10,000$. Squaring gives $\kappa _{2}(X^{\top}X)=100,000,000$. Forming normal equations can turn a difficult problem into a much more roundoff-sensitive one; prefer a stable QR or SVD route and report diagnostics.
12. Take $X=\begin{bmatrix}1 & 1 \\ 2 & 2\end{bmatrix}$. Coefficients $(2,-1)$ and $(-1,2)$ both sum to 1, so both predict $(1,2)^{\top}$, yet the signs of each coordinate differ.
13. It does not show that the coefficient is unique, the linear specification is scientifically correct, or future/population error is small. It also does not establish independent errors or causality. Orthogonality certifies a finite optimization condition only.
14. $Hw$ is undefined unless accidentally $d=n$, because $H$ acts on observation-space vectors. The projection formula is $p=Hy$. Coefficients are obtained separately, for example by solving $Rw=Q^{\top}y$ under full rank.
15. With $r=Xw-y$, $dL=r^{\top}DXdw=(X^{\top}Dr)^{\top}dw$, so stationarity gives $X^{\top}DXw=X^{\top}Dy$. Equivalently, $X^{\top}Dr=0$: the residual is orthogonal to the columns of $X$ in the weighted inner product $<a,b>_{D}=a^{\top}Db$.
16. Use the thin SVD $X=U\Sigma V^{\top}$, where $U\in\mathbb{R}^{n\times d}$ has orthonormal columns, $\Sigma\in\mathbb{R}^{d\times d}$ has positive diagonal entries, and $V\in\mathbb{R}^{d\times d}$ is orthogonal. Stationarity gives $V\Sigma ^{2}V^{\top}w=V\Sigma U^{\top}y$; multiplying through yields $w=V\Sigma ^{-1}U^{\top}y$. The coefficient along right singular vector $v_{j}$ is $(u_{j}^{\top}y)/\sigma_{j}$, so a perturbation in the $u_{j}$ target direction is amplified by $1/\sigma_{j}$. This is a coefficient sensitivity statement, not automatically a prediction-error statement.
17. $\operatorname{tr}(H)=\operatorname{tr}(QQ^{\top})=\operatorname{tr}(Q^{\top}Q)=\operatorname{tr}(I_{d})=d$. Also $H_{ii}=e_{i}^{\top}QQ^{\top}e_{i}=\lVert Q^{\top}e_{i}\rVert^{2}$, which lies in $[0,1]$ because orthogonal projection cannot increase norm. It is the squared length of the projection of observation coordinate $e_{i}$ onto the fitted subspace, commonly called leverage.
18. The intercept column is $1_{n}$. Residual orthogonality gives $1_{n}^{\top}r=0$, so residuals sum to zero. The claim can fail if there is no intercept, the intercept is penalized or constrained, weights define a weighted rather than ordinary sum, or optimization has not reached the normal-equation condition.

## Project checkpoint and forward links

Build a dependency-free least-squares audit for one small synthetic design. Compute the solution by a QR-style route, report rank tolerance, fitted values, residual, $X^{\top}r$, and the effect of rescaling one feature by 1,000. Include a duplicated-column version and show that coefficient nonuniqueness does not change predictions. Keep the split and preprocessing contract from Chapter 1.

The next chapter distinguishes this finite projection problem from expected risk under a sampling law. Chapters 10 and 12 return to the numerical consequences of small singular directions, while Chapter 14 derives how regularization changes the projection geometry.
