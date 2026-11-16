
# Derivatives as Linear Maps: Differentials, Gradients, and Shapes

## Purpose and prerequisites

This chapter assumes vectors, matrices, norms, and affine maps. Its main idea is that a derivative is not a bag of partial derivatives; it is the best local linear map. That viewpoint makes dimensions visible, proves the chain rule in the form used by automatic differentiation, and prevents gradients from being transposed by guesswork.

## Differentiability means linear approximation

Let $f\colon \mathbb{R}^d\to \mathbb{R}^m$. We say $f$ is differentiable at $x$ if there is a linear map $Df(x):\mathbb{R}^d\to \mathbb{R}^m$ such that

$f(x+h)=f(x)+Df(x)h+r_{x}(h)$

and

$\lVert r_{x}(h)\rVert/\lVert h\rVert\to 0$ as $h\to 0$.

The remainder must be small relative to $\lVert h\rVert$ in every direction, not only along coordinate axes. The matrix of $Df(x)$ in standard coordinates is the Jacobian $J_{f}(x)\in \mathbb{R}^{m\times d}$, with entry

$(J_{f})_{ij}=\partial f_{i}/\partial x_{j}$.

The shape follows the map: perturbations have $d$ coordinates and output changes have $m$ coordinates.

### Examples

1. If $f(x)=Ax+b$, then $f(x+h)-f(x)=Ah$ exactly, so $Df(x)=A$ everywhere and the remainder is zero.
2. If $f\colon \mathbb{R}\to \mathbb{R}$, this definition reduces to $f(x+h)=f(x)+f'(x)h+o(\lvert h\rvert)$.
3. If $f(x_{1},x_{2})=(x_{1}x_{2},\sin x_{1})^{\top}$, then

   $J_{f}(x)=\begin{bmatrix}x_{2} & x_{1} \\ \cos x_{1} & 0\end{bmatrix}$.

   At $x=(0,2)$, a perturbation $h=(h_{1},h_{2})$ produces first-order change $(2h_{1},h_{1})^{\top}$.

## Partial derivatives do not always assemble into a derivative

The existence of every partial derivative at a point is not sufficient for differentiability. Consider

$f(x,y)=x^{3}/(x^{2}+y^{2})$ for $(x,y)\ne (0,0)$, and $f(0,0)=0$.

Along the axes, $f(h,0)=h$ and $f(0,h)=0$, so the coordinate partial derivatives at the origin exist and are 1 and 0. If $f$ were differentiable, its candidate derivative would be $L(h,k)=h$. Along the line $(t,t)$, however,

$f(t,t)=t/2$, while $L(t,t)=t$.

The error is $-t/2$, which is not $o(\sqrt{\left(2\right)}\lvert t\rvert)$. Therefore the function is not differentiable at the origin. Automatic differentiation follows executed operations where they are differentiable; it cannot turn a nondifferentiable mathematical map into a differentiable one.

A convenient sufficient condition is continuity of all first partial derivatives in a neighborhood. It is sufficient, not necessary.

## Directional derivatives and the Jacobian

The directional derivative in direction $v$ is

$D_{v} f(x)=\lim_{t\to 0} [f(x+tv)-f(x)]/t$,

when it exists. Differentiability implies

$D_{v} f(x)=Df(x)v=J_{f}(x)v$.

This product is a **Jacobian-vector product**, or JVP. It asks: if the input moves with velocity $v$, what is the output velocity?

Directional derivatives in every direction still need not imply differentiability unless they fit together with the required uniform remainder. The derivative is one linear map that works for all small perturbations simultaneously.

### Worked JVP without forming a Jacobian

Let

$f(x_{1},x_{2})=(\exp\left(x_{1}x_{2}\right), x_{1}^{2}+x_{2})^{\top}$.

At $x=(0,3)$ in direction $v=(2,-1)$, propagate differentials:

$d(x_{1}x_{2})=x_{2} dx_{1}+x_{1} dx_{2}=3\cdot 2+0\cdot (-1)=6$,

$d \exp\left(x_{1}x_{2}\right)=\exp\left(0\right)\cdot 6=6$,

$d(x_{1}^{2}+x_{2})=2x_{1}dx_{1}+dx_{2}=0-1=-1$.

Thus $J_{f}(x)v=(6,-1)^{\top}$. We never stored the full $2\times 2$ Jacobian, although for this tiny map we could.

## Scalar outputs and gradients

For $F\colon \mathbb{R}^d\to \mathbb{R}$, the derivative $DF(x)$ is a linear functional. Under the Euclidean inner product, there is a unique vector $\nabla F(x)$ such that

$DF(x)h=\nabla F(x)^{\top} h$.

The gradient is a coordinate representation of the derivative after choosing an inner product. In weighted geometry $\langle u,v\rangle _{M}=u^{\top}Mv$, the gradient $\operatorname{grad}_{M} F$ satisfies

$DF(x)h=(\operatorname{grad}_{M} F)^{\top} M h$.

Therefore

$\operatorname{grad}_{M} F=M^{-1}\nabla F$.

“The gradient direction” is not independent of geometry. Ordinary gradient descent uses Euclidean coordinates; preconditioned and natural-gradient methods change the mapping from derivative covector to step vector.

### Steepest ascent proof

Among Euclidean unit directions $\lVert v\rVert=1$, the first-order increase is $\nabla F^{\top}v$. Cauchy–Schwarz gives

$\nabla F^{\top}v\le \lVert \nabla F\rVert\lVert v\rVert=\lVert \nabla F\rVert$.

Equality occurs for $v=\nabla F/\lVert \nabla F\rVert$ when the gradient is nonzero. Thus the normalized Euclidean gradient is steepest ascent per unit Euclidean length. Change the norm and the steepest direction changes.

## The chain rule as composition

Let $f\colon \mathbb{R}^d\to \mathbb{R}^m$ be differentiable at $x$ and $g\colon \mathbb{R}^m\to \mathbb{R}^q$ be differentiable at $f(x)$. Then

$D(g\circ f)(x)=Dg(f(x))\circ Df(x)$.

In matrices,

$J_{g\circ f}(x)=J_{g}(f(x))J_{f}(x)$.

### Proof with remainders

Write

$f(x+h)=f(x)+Ah+r_{f}(h)$, with $r_{f}(h)=o(\lVert h\rVert)$,

and, for small $k$,

$g(f(x)+k)=g(f(x))+Bk+r_{g}(k)$, with $r_{g}(k)=o(\lVert k\rVert)$.

Substitute $k=Ah+r_{f}(h)$:

$g(f(x+h))-g(f(x))=BAh+B r_{f}(h)+r_{g}(Ah+r_{f}(h))$.

The second term is $o(\lVert h\rVert)$ because $B$ is bounded in finite dimensions. Differentiability of $f$ also makes $\lVert Ah+r_{f}(h)\rVert=O(\lVert h\rVert)$, so the final remainder is $o(\lVert h\rVert)$. The derivative is $BA$.

This proof explains automatic differentiation: local linear maps compose in forward order for perturbations and their transposes compose in reverse order for scalar sensitivities.

### Scalar chain worked in shapes

Let $x\in \mathbb{R}^d$, $z=Wx+b\in \mathbb{R}^m$, $h=\sigma (z)\in \mathbb{R}^m$ componentwise, and $F=(\frac{1}{2})(v^{\top}h-y)^{2}$. Define $g=v^{\top}h-y$. Then

$dF=g d(v^{\top}h)=g v^{\top} dh$,

$dh=\operatorname{diag}(\sigma '(z))dz$,

$dz=Wdx$.

Hence

$dF=g v^{\top} \operatorname{diag}(\sigma '(z))W dx$.

Matching $dF=(\nabla _{x}F)^{\top}dx$ gives

$\nabla _{x}F=W^{\top}[(gv)\odot \sigma '(z)]$.

Each transpose follows from matching a scalar differential, not from a mnemonic.

## Differentials and shape inference

The differential notation $df= Df(x)[dx]$ treats $dx$ as an arbitrary perturbation. For scalar $F$, manipulate until

$dF=\operatorname{tr}(G^{\top} dX)$

for a matrix variable $X$; then $G$ is the gradient with the same shape as $X$ under the Frobenius inner product

$\langle A,B\rangle _{F}=\operatorname{tr}(A^{\top}B)$.

Useful identities include

- $d(A+B)=dA+dB$;
- $d(AB)=dA B+A dB$;
- $d(A^{\top})=(dA)^{\top}$;
- $d \operatorname{tr}(A)=\operatorname{tr}(dA)$;
- $d(x^{\top}Ax)=(dx)^{\top}Ax+x^{\top}A dx$ when $A$ is fixed.

### Quadratic gradient

Let $F(x)=(\frac{1}{2})x^{\top}Ax-b^{\top}x$, with arbitrary square $A$. Then

$dF=(\frac{1}{2})(dx)^{\top}Ax+(\frac{1}{2})x^{\top}A dx-b^{\top}dx$.

Since the result is scalar, $(dx)^{\top}Ax=x^{\top}A^{\top}dx$. Therefore

$dF=[(\frac{1}{2})(A+A^{\top})x-b]^{\top}dx$,

so

$\nabla F(x)=(\frac{1}{2})(A+A^{\top})x-b$.

Only the symmetric part of $A$ contributes to the quadratic value. The common formula $Ax-b$ requires $A=A^{\top}$.

## Second derivatives and curvature

If $F\colon \mathbb{R}^d\to \mathbb{R}$ has differentiable gradient, its Hessian is

$H_{F}(x)=D(\nabla F)(x)$, with $(H_{F})_{ij}=\partial ^{2}F/(\partial x_{i}\partial x_{j})$.

When second partials are continuous, the Hessian is symmetric. The second-order expansion is

$F(x+h)=F(x)+\nabla F(x)^{\top}h+(\frac{1}{2})h^{\top}H_{F}(x)h+o(\lVert h\rVert^{2})$.

For a quadratic $F(x)=(\frac{1}{2})x^{\top}Ax-b^{\top}x$ with symmetric $A$, the Hessian is exactly $A$ and the expansion has no remainder.

At a stationary point $\nabla F(x)=0$:

- positive definite Hessian implies a strict local minimum;
- negative definite Hessian implies a strict local maximum;
- an indefinite Hessian implies a saddle;
- semidefinite or singular Hessian is inconclusive without higher-order analysis.

For example, $F(x,y)=x^{2}+y^{4}$ has a strict minimum at the origin although its Hessian $\operatorname{diag}(2,0)$ is only semidefinite. The zero-curvature direction needs fourth-order information.

## Taylor bounds under smoothness

If the gradient is $L$-Lipschitz,

$\lVert \nabla F(x)-\nabla F(z)\rVert\le L\lVert x-z\rVert$,

then the descent lemma states

$\lvert F(z)-F(x)-\nabla F(x)^{\top}(z-x)\rvert\le (L/2)\lVert z-x\rVert^{2}$.

To prove the upper bound, set $h=z-x$ and $\phi (t)=F(x+th)$. The fundamental theorem of calculus gives

$F(z)-F(x)-\nabla F(x)^{\top}h=∫_{0}^{1} [\nabla F(x+th)-\nabla F(x)]^{\top} h dt$.

Cauchy–Schwarz and Lipschitzness bound the integrand by $Lt\lVert h\rVert^{2}$; integration gives $(L/2)\lVert h\rVert^{2}$. The lower bound follows similarly or by applying the upper bound in reverse.

This bound powers the optimization chapter. It is a theorem under global or region-specific smoothness, not a generic property of every neural-network objective.

## Nondifferentiable boundaries

ReLU $r(t)=\max\left(0,t\right)$ has derivative 0 for $t<0$, 1 for $t>0$, and no classical derivative at 0. Absolute value is similar. A software system chooses a backward convention at a kink, often one subgradient. That convention defines a program derivative at the branch; it does not prove that centered finite differences must agree.

Piecewise-smooth models can change active sets under arbitrarily small perturbations. Report one-sided behavior or subgradient assumptions. If discrete routing, sorting, thresholding, or early stopping is part of the computation, differentiate only after stating whether that operation is frozen, relaxed, or included.

## Exercises

1. Find the Jacobian of $f(x,y)=(x^{2}y, \exp\left(x-y\right))$ and state its shape.
2. Compute the JVP from Exercise 1 at $(1,0)$ in direction $(2,3)$.
3. Prove the derivative of an affine map $Ax+b$ is $A$ from the remainder definition.
4. For $F(x)=\lVert Ax-b\rVert^{2}/2$, derive $\nabla F=A^{\top}(Ax-b)$ using differentials.
5. Derive the Hessian of the function in Exercise 4.
6. Let $F(x,y)=x^{2}-y^{2}$. Classify the origin using its gradient and Hessian.
7. Let $F(x,y)=x^{4}+y^{4}$. Why is the Hessian test inconclusive at the origin, and how can the point still be classified?
8. Under weighted inner product $M=\operatorname{diag}(4,1)$, find the weighted gradient of $F(x)=x_{1}+2x_{2}$.
9. Show that the derivative of $g(f(x))$ for scalar $g\colon \mathbb{R}^m\to \mathbb{R}$ has Euclidean gradient $J_{f}(x)^{\top}\nabla g(f(x))$.
10. For $F(x)=\log\left(1+\exp x\right)$, compute first and second derivatives and show $0<F''(x)\le \frac{1}{4}$.
11. Explain why checking only coordinate directional derivatives can miss nondifferentiability, using the chapter's $x^{3}/(x^{2}+y^{2})$ example.
12. A program computes $q=\max\left(a,b\right)$ and the run has $a=b$. What mathematical information is needed before treating an automatic gradient as sensitivity of the intended model?
13. Let $f(x)=Ax$ between Euclidean spaces. Prove directly from the definition that the derivative operator norm is $\lVert A\rVert_{2}$, and interpret it as first-order amplification.
14. For $F(X)=\frac{1}{2}\lVert Xv-y\rVert^{2}$, where $X\colon m\times d$, derive the differential and matrix gradient with respect to $X$. Check the gradient shape.
15. Let new coordinates satisfy $x=Sz$ with invertible $S$, and define $G(z)=F(Sz)$. Derive $\nabla_{z}G$ from the differential rather than by coordinate guessing.
16. Prove that the Euclidean norm $f(x)=\lVert x\rVert_{2}$ is differentiable at every nonzero $x$ with gradient $x/\lVert x\rVert$, but is not differentiable at zero.
17. The bilinear map $B(x,y)=x^{\top}y$ is viewed as a function of the pair $(x,y)$. Find its derivative applied to perturbation $(h,k)$ and verify the remainder is second order.
18. Suppose $F$ has Hessian operator norm at most $L$ along the segment from $x$ to $x+h$. Derive $\lvert F(x+h)-F(x)-\nabla F(x)^{\top}h\rvert\le L\lVert h\rVert^{2}/2$ using a one-dimensional path integral.

## Full solutions

1. $J_{f}(x,y)=\begin{bmatrix}2xy & x^{2} \\ \exp\left(x-y\right) & -\exp\left(x-y\right)\end{bmatrix}$, a $2\times 2$ matrix because the map has two inputs and two outputs.
2. At $(1,0)$, the Jacobian is $\begin{bmatrix}0 & 1 \\ e & -e\end{bmatrix}$. Multiplying by $(2,3)^{\top}$ gives $(3,2e-3e)^{\top}=(3,-e)^{\top}$.
3. $f(x+h)-f(x)-Ah=(A(x+h)+b)-(Ax+b)-Ah=0$. The remainder is identically zero, hence its norm divided by $\lVert h\rVert$ tends to zero.
4. Let $r=Ax-b$. Then $dF=r^{\top}dr=r^{\top}A dx=(A^{\top}r)^{\top}dx$, so $\nabla F=A^{\top}(Ax-b)$.
5. Differentiate the gradient: $D[A^{\top}(Ax-b)]=A^{\top}A$. It is symmetric positive semidefinite because $v^{\top}A^{\top}Av=\lVert Av\rVert^{2}\ge 0$.
6. The gradient is $(2x,-2y)$ and vanishes at the origin. The Hessian is $\operatorname{diag}(2,-2)$, which is indefinite, so the origin is a saddle. Along the $x$ axis values are positive; along the $y$ axis they are negative.
7. Gradient and Hessian are both zero at the origin, so the second-order test has no sign information. Yet $x^{4}+y^{4}\ge 0$ with equality only at $(0,0)$, proving a strict global minimum.
8. The Euclidean gradient is $(1,2)^{\top}$. Since $\operatorname{grad}_{M} F=M^{-1}\nabla F$, it is $(\frac{1}{4},2)^{\top}$. Indeed $(\frac{1}{4},2)^{\top}Mh=(1,2)^{\top}h=DF[h]$.
9. The chain rule gives $D(g\circ f)[h]=Dg[Df h]=\nabla g^{\top} J_{f} h=(J_{f}^{\top}\nabla g)^{\top}h$. Uniqueness of the Euclidean gradient gives the result.
10. $F'(x)=\exp x/(1+\exp x)=\sigma (x)$. Then $F''(x)=\sigma (x)(1-\sigma (x))$. Since $0<\sigma <1$, the derivative is positive, and $p(1-p)\le \frac{1}{4}$ for $p\in [0,1]$, with equality at $p=\frac{1}{2}$, or $x=0$.
11. The coordinate partials suggest the linear map $L(h,k)=h$. Along $(t,t)$, actual value is $t/2$, leaving an error $-t/2$ of first order. Coordinate lines did not test joint approaches to the origin, so they did not establish one uniform linear approximation.
12. The maximum is nondifferentiable at a tie. One must specify whether ties are structurally possible, how the program breaks them, whether a subgradient convention is appropriate, and whether perturbations can change the selected branch. One-sided finite changes and a model-level decision about tie behavior are needed; a single returned gradient is only the software convention.
13. The candidate derivative is the linear map $h \to Ah$, whose operator norm is by definition $\sup_{h\ne 0}\lVert Ah\rVert/\lVert h\rVert=\lVert A\rVert_{2}$. The remainder $f(x+h)-f(x)-Ah$ is zero, so this derivative is exact. Its norm is the largest ratio of infinitesimal output to input perturbation in Euclidean geometry.
14. Set $r=Xv-y\in\mathbb{R}^{m}$. Then $dr=dXv$ and $dF=r^{\top}dXv=\operatorname{tr}(vr^{\top}dX)=\operatorname{tr}((rv^{\top})^{\top}dX)$. Thus $\nabla_{X}F=rv^{\top}=(Xv-y)v^{\top}$, with shape $(m\times 1)(1\times d)=m\times d$, exactly the shape of $X$.
15. Since $dx=Sdz$, $dG=\nabla_{x}F(Sz)^{\top}Sdz=[S^{\top}\nabla_{x}F(Sz)]^{\top}dz$. Therefore $\nabla_{z}G=S^{\top}\nabla_{x}F(Sz)$. The transpose is forced by preservation of the scalar differential.
16. For nonzero $x$, expand $\lVert x+h\rVert^{2}=\lVert x\rVert^{2}+2x^{\top}h+\lVert h\rVert^{2}$ and the square root to obtain linear term $x^{\top}h/\lVert x\rVert$ with remainder $o(\lVert h\rVert)$. At zero, a derivative $L$ would need $\lVert h\rVert-Lh=o(\lVert h\rVert)$. Applying this to $h=tv$ and $h=-tv$ would require both $Lv=1$ and $Lv=-1$ for every unit $v$, impossible.
17. $B(x+h,y+k)-B(x,y)=h^{\top}y+x^{\top}k+h^{\top}k$. Hence $DB_{x,y}[h,k]=h^{\top}y+x^{\top}k$. The remainder obeys $\lvert h^{\top}k\rvert\le \lVert h\rVert\lVert k\rVert\le (\lVert h\rVert^{2}+\lVert k\rVert^{2})/2$, which is second order relative to the product-space perturbation norm.
18. Define $\phi(t)=F(x+th)$. Then $\phi'(t)=\nabla F(x+th)^{\top}h$ and $\phi''(t)=h^{\top}H(x+th)h$, whose magnitude is at most $L\lVert h\rVert^{2}$. Integrating $\phi'(t)-\phi'(0)=\int_{0}^t \phi''(s)ds$ and then from $t=0$ to 1 bounds the remainder by $\int_{0}^{1} Lt\lVert h\rVert^{2}dt=L\lVert h\rVert^{2}/2$.

## Project checkpoint

For the affine reference computation from Chapter 2, derive JVPs with respect to inputs, weights, and biases on paper. Create three tiny cases that would expose a transpose error. Chapter 6 turns scalar differentials into a systematic matrix-calculus toolkit.
