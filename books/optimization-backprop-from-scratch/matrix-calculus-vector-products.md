
# Matrix Calculus, Jacobian Products, and Batch Reductions

## Purpose and conventions

This chapter derives gradients for array programs without forming high-dimensional Jacobian tensors. It assumes the derivative-as-linear-map viewpoint. Individual vectors are columns, batches are rows, and a gradient has the same shape as its variable under the Euclidean or Frobenius inner product.

For a scalar function $F(X)$, the matrix gradient $\nabla _{X} F$ is defined by

$dF=\langle \nabla _{X} F,dX\rangle _{F}=\operatorname{tr}((\nabla _{X} F)^{\top} dX)$.

This equation is the shape contract. If the alleged gradient does not have the shape of $X$, it cannot satisfy the definition.

## Trace identities with hypotheses

For compatible matrices:

- $\operatorname{tr}(A+B)=\operatorname{tr}(A)+\operatorname{tr}(B)$;
- $\operatorname{tr}(cA)=c \operatorname{tr}(A)$;
- $\operatorname{tr}(AB)=\operatorname{tr}(BA)$ when both products are square;
- more generally, factors in a trace may be cycled when all resulting products are defined;
- $\operatorname{tr}(A^{\top})=\operatorname{tr}(A)$;
- a scalar equals its own trace.

Cycling is not arbitrary reordering. Usually $\operatorname{tr}(ABC)=\operatorname{tr}(BCA)=\operatorname{tr}(CAB)$, but $\operatorname{tr}(ABC)$ need not equal $\operatorname{tr}(ACB)$.

### Proof of the two-factor cycle

If $A\in \mathbb{R}^{m\times n}$ and $B\in \mathbb{R}^{n\times m}$, then

$\operatorname{tr}(AB)=\sum_{i}(AB)_{ii}=\sum_{i}\sum_{j} A_{ij}B_{ji}$.

Swap the finite sums:

$\sum_{j}\sum_{i} B_{ji}A_{ij}=\operatorname{tr}(BA)$.

The identity remains valid for rectangular factors because both traces are defined, though their square matrices have different sizes.

## Matrix multiplication backward rule

Let $C=AB$, with

$A\in \mathbb{R}^{m\times n}$, $B\in \mathbb{R}^{n\times p}$, $C\in \mathbb{R}^{m\times p}$.

Suppose a downstream scalar loss supplies $G_{C}=\nabla _{C} F\in \mathbb{R}^{m\times p}$. The differential is

$dC=dA B+A dB$.

Therefore

$dF=\operatorname{tr}(G_{C}^{\top} dC)$

$=\operatorname{tr}(G_{C}^{\top} dA B)+\operatorname{tr}(G_{C}^{\top} A dB)$.

Cycle the first trace and rewrite the second:

$\operatorname{tr}(BG_{C}^{\top} dA)=\operatorname{tr}((G_{C}B^{\top})^{\top} dA)$,

$\operatorname{tr}(G_{C}^{\top} A dB)=\operatorname{tr}((A^{\top}G_{C})^{\top} dB)$.

Thus

$G_{A}=G_{C} B^{\top}$, $G_{B}=A^{\top} G_{C}$.

Shape check:

- $(m\times p)(p\times n)=m\times n$, matching $A$;
- $(n\times m)(m\times p)=n\times p$, matching $B$.

These formulas are vector-Jacobian products implemented with matrix multiplication. No four-index Jacobian of $C$ is stored.

### Worked numerical backward pass

Let

$A=\begin{bmatrix}1 & 2 \\ 0 & -1\end{bmatrix}$, $B=\begin{bmatrix}3 \\ 4\end{bmatrix}$, so $C=AB=\begin{bmatrix}11 \\ -4\end{bmatrix}$.

Take $F=(\frac{1}{2})\lVert C\rVert^{2}$, hence $G_{C}=C$. Then

$G_{A}=CB^{\top}=\begin{bmatrix}33 & 44 \\ -12 & -16\end{bmatrix}$,

$G_{B}=A^{\top}C=\begin{bmatrix}1 & 0 \\ 2 & -1\end{bmatrix}\begin{bmatrix}11 \\ -4\end{bmatrix}=\begin{bmatrix}11 \\ 26\end{bmatrix}$.

Check one entry: changing $A_{12}$ by $\varepsilon$ changes $C_{1}$ by $4\varepsilon$; since $\partial F/\partial C_{1}=11$, the first-order loss change is $44\varepsilon$, agreeing with $G_{A}(1,2)=44$.

## Affine batches and bias reduction

For batch rows,

$Z=XW^{\top}+1_{n} b^{\top}$,

with $X\colon n\times d$, $W\colon m\times d$, $b\colon m$, and $Z\colon n\times m$. Let the arriving gradient be $G_{Z}:n\times m$.

Differentiating gives

$dZ=dX W^{\top}+X dW^{\top}+1_{n} db^{\top}$.

Trace matching yields

$G_{X}=G_{Z} W$,

$G_{W}=G_{Z}^{\top} X$,

$G_{b}=G_{Z}^{\top}1_{n}$.

The bias gradient sums over the axis along which the bias was repeated. If the scalar loss is a batch **mean**, the arriving $G_{Z}$ already contains the factor $1/n$; inserting another average would be wrong.

### Index verification of the bias rule

Since $Z_{ik}=\sum_{j} X_{ij}W_{kj}+b_{k}$,

$\partial F/\partial b_{k}=\sum_{i} (\partial F/\partial Z_{ik})(\partial Z_{ik}/\partial b_{k})=\sum_{i} G_{Z}(ik)$.

This is the $k$th entry of $G_{Z}^{\top}1_{n}$. Index and trace derivations agree.

## Elementwise maps

For $H=\sigma (Z)$ applied elementwise, the differential is

$dH=\sigma '(Z)\odot dZ$.

With arriving $G_{H}$,

$G_{Z}=G_{H}\odot \sigma '(Z)$.

The saved value must match the derivative formula. For $\tanh$, one may use $1-H^{2}$ if $H=\tanh Z$ was saved. For sigmoid $s=1/(1+\exp\left(-z\right))$, use $s(1-s)$. For an arbitrary activation whose derivative is implemented in terms of preactivation $Z$, passing $H$ instead is a silent semantic bug even when shapes agree.

## Reductions: sums, means, and weights

If $F=\sum_{i,j} X_{ij}$, then $\nabla _{X} F$ is the all-ones matrix. If $F=(1/N)\sum_{i,j} X_{ij}$ over $N$ entries, the gradient is all $1/N$.

For a weighted mean

$F=\sum_{i} \alpha _{i} L_{i} / \sum_{i} \alpha _{i}$,

with fixed nonnegative weights and positive total, each example sensitivity is $\alpha _{i}/\sum_{j}\alpha _{j}$. Dividing by batch size as well would change the declared objective.

Masking needs a denominator policy. If loss is averaged over observed entries, the denominator is the number or total weight of observed entries. A batch with no observed entries is not a zero-loss batch unless that convention is deliberately chosen; normally it is an invalid reduction.

## Least squares in batch form

Let predictions be $p=Xw$, residual $r=p-y$, and

$F(w)=(1/(2n))\lVert r\rVert^{2}$.

Then

$dF=(1/n)r^{\top} d r=(1/n)r^{\top} X dw$,

so

$\nabla F(w)=(1/n)X^{\top}(Xw-y)$.

The Hessian is

$H=(1/n)X^{\top}X$.

It is positive semidefinite because $v^{\top}Hv=\lVert Xv\rVert^{2}/n\ge 0$. It is positive definite exactly when $X$ has full column rank. If a column direction lies in $\ker X$, the objective is flat along that coefficient direction.

### Ridge term

For

$F_\lambda (w)=(1/(2n))\lVert Xw-y\rVert^{2}+(\lambda /2)\lVert w\rVert^{2}$,

the gradient and Hessian are

$\nabla F_\lambda =(1/n)X^{\top}(Xw-y)+\lambda w$,

$H_\lambda =(1/n)X^{\top}X+\lambda I$.

For $\lambda >0$, $v^{\top}H_\lambda v=\lVert Xv\rVert^{2}/n+\lambda \lVert v\rVert^{2}>0$ for nonzero $v$, so the objective is strictly convex and has at most one minimizer. Existence follows from coercivity: the positive quadratic penalty forces the objective to infinity as $\lVert w\rVert\to \infty$.

Regularization improves this coefficient-space conditioning and selects a representative. Whether it improves future prediction is a separate empirical and statistical question.

## Jacobian-vector and vector-Jacobian products

For $f\colon \mathbb{R}^d\to \mathbb{R}^m$:

- a JVP computes $J_{f}(x)v\in \mathbb{R}^m$ from an input tangent $v$;
- a vector-Jacobian product (VJP) computes $u^{\top} J_{f}(x)\in \mathbb{R}^{1\times d}$ from an output cotangent $u$.

Forward accumulation naturally propagates JVPs. Reverse accumulation naturally propagates VJPs. For scalar $F\colon \mathbb{R}^d\to \mathbb{R}$, a single reverse pass with output cotangent 1 returns the full gradient. If there is one input direction and millions of outputs, forward mode may be cheaper; if there are millions of parameters and one scalar loss, reverse mode is usually preferable.

The cost statement depends on the program, memory, sparsity, and desired products. “Reverse mode is faster” without naming input/output dimensions is incomplete.

### Duality check

For every compatible $u,v$,

$u^{\top}(Jv)=(u^{\top}J)v$.

This scalar identity is useful for testing JVP and VJP implementations without forming $J$. Choose random $u,v$ and verify both routes agree to numerical tolerance. Agreement tests transposition and accumulation, though two implementations can still share a bug.

## Log-sum-exp and stable derivatives

For logits $a\in \mathbb{R}^K$, define

$LSE(a)=\log \sum_{j} \exp\left(a_{j}\right)$.

Its gradient is the softmax vector $p$, because

$\partial LSE/\partial a_{j}=\exp\left(a_{j}\right)/\sum_{k} \exp(a_{k})$.

For stable computation, take $c=\max_{j} a_{j}$ and use

$LSE(a)=c+\log \sum_{j} \exp\left(a_{j}-c\right)$.

The shift is algebraically exact because $\exp\left(c\right)$ factors from the sum. It prevents overflow in $\exp\left(a_{j}\right)$ when logits are large. At least one shifted logit is zero, so the shifted exponential sum is at least one.

For one-hot class $q$, cross-entropy is

$F(a)=-a_{q}+LSE(a)$,

and

$\nabla F(a)=p-e_{q}$.

The entries sum to zero, reflecting invariance under adding the same constant to every logit.

### The softmax VJP without a Jacobian

The softmax Jacobian is

$J=\operatorname{diag}(p)-pp^{\top}$.

For an arriving cotangent $u$, its VJP can be evaluated as

$J^{\top}u=p \odot u-p(p^{\top}u)=p \odot (u-(p^{\top}u)1)$.

This costs linear time and storage in the class count; materializing a $K \times K$ Jacobian is unnecessary. Since $J1=0$, a common shift of all logits has no first-order effect. The formula also provides an error diagnostic: the resulting logit cotangent must sum to zero up to rounding.

### Worked broadcast pullback

Let $z_{ijk}=x_{ijk}+b_{k}$ for batch $i$, time $j$, and feature $k$. If the arriving cotangent is $G$, then

$\partial F/\partial b_{k}=\sum_{i} \sum_{j} G_{ijk}$.

For a $2 \times 2 \times 2$ cotangent whose feature slices are

$G[:,:,1]=\begin{bmatrix}1 & 2 \\ 3 & 4\end{bmatrix}$, $G[:,:,2]=\begin{bmatrix}-1 & 0 \\ 2 & 5\end{bmatrix}$,

the bias cotangent is $(10,6)$. Summing the feature axis instead returns a $2 \times 2$ array: numerically computable, semantically wrong.

## Scalarization and higher-rank outputs

There is no single gradient of a vector-valued map $f\colon \mathbb{R}^d \to \mathbb{R}^m$; there is a Jacobian or a product selected by a tangent or cotangent. A downstream scalarization $F(x)=u^{\top}f(x)$ selects

$\nabla F(x)=J_{f}(x)^{\top}u$.

Changing $u$ changes the question. For a multiobjective model, silently summing outputs chooses $u=1$; it is an objective decision, not a differentiation convenience.

### Error diagnostic: plausible transposes

Square examples are poor shape tests. If $A,B,G_{C}$ are all $2 \times 2$, the incorrect expression $B^{\top}G_{C}$ has the same shape as the correct $G_{A}=G_{C}B^{\top}$. Use a rectangular test such as $A\colon 2 \times 3$, $B\colon 3 \times 4$, $G_{C}:2 \times 4$: the correct result is $2 \times 3$, while the wrong order is not defined. Then confirm one entry by finite perturbation.

## Reference backward specifications

For every primitive, store four items:

| Primitive | Forward shapes | Saved values | Backward product |
| --- | --- | --- | --- |
| $C=AB$ | $(m,n)(n,p)\to (m,p)$ | $A,B$ | $G_{A}=G_{C}B^{\top}$, $G_{B}=A^{\top}G_{C}$ |
| $z=x+y$ | identical or declared broadcast | broadcast axes | reduce $G_{z}$ over repeated axes |
| $h=\sigma (z)$ | same shape | $z$ or $h$, by formula | $G_{z}=G_{h}\odot \sigma '(z)$ |
| $s=\sum(x)$ | array to scalar | input shape | fill with arriving scalar |
| $m=\operatorname{mean}(x)$ | array to scalar | input count | fill with arriving scalar/count |

An accidental broadcast is especially dangerous because the forward output may be plausible while the backward reduction targets the wrong axis.

## Exercises

1. Derive the gradients of $F(A,B)=\operatorname{tr}(C^{\top}AB)$ with respect to $A$ and $B$, treating $C$ as fixed.
2. For $Z=XW^{\top}+1b^{\top}$, verify the shape of each backward formula when $X\colon 5\times 3$, $W\colon 4\times 3$, $b\colon 4$.
3. If a batch loss is $F=(1/n)\sum_{i} L_{i}$, what is $\partial F/\partial L_{i}$? What changes for a sum?
4. Derive $\nabla _{X} \lVert X\rVert_{F}^{2}$.
5. Let $F(X)=\operatorname{tr}(X^{\top}AX)$ for fixed square $A$. Derive the gradient without assuming $A$ symmetric.
6. Prove ridge Hessian positive definiteness for $\lambda >0$ even when $X$ is rank deficient.
7. For $a=(1000,1001)$, compute softmax symbolically after subtracting the maximum and explain why direct exponentiation is unsafe.
8. Show that the cross-entropy logit gradient entries sum to zero.
9. A bias $b\in \mathbb{R}^m$ is broadcast across $n$ batch rows. Explain why its gradient is a sum rather than an average, and when an average factor appears.
10. Given $J=\begin{bmatrix}1 & 2 \\ 3 & 4 \\ 0 & 5\end{bmatrix}$, $v=(2,-1)^{\top}$, and $u=(1,0,2)^{\top}$, compute $u^{\top}(Jv)$ and $(u^{\top}J)v$.
11. A masked mean divides by the total number of array cells although only three of ten cells are observed. State which objective it differentiates and how to obtain the observed-entry mean instead.
12. Explain why forming a full Jacobian of every hidden tensor is unnecessary for a scalar loss.
13. Derive the softmax Jacobian $J=\operatorname{diag}(p)-pp^{\top}$ and show that $J1=0$.
14. For $p=(\frac{1}{2},\frac{1}{3},\frac{1}{6})^{\top}$ and $u=(2,-1,4)^{\top}$, compute the softmax VJP using $p \odot (u-(p^{\top}u)1)$ and verify its entries sum to zero.
15. A feature bias is broadcast into a tensor of shape $7 \times 11 \times 5$ with axes batch, time, feature. State the bias-gradient formula and its shape.
16. Let $F(X)=\log\det X$ for an invertible matrix with positive determinant. Using $d(\log\det X)=\operatorname{tr}(X^{-1}dX)$, identify $\nabla_{X}F$.
17. For $F(A)=\frac{1}{2}\lVert AB-C\rVert_{F}^{2}$, derive $\nabla_{A}F$ and state all shapes when $A\colon m\times n$, $B\colon n\times p$, $C\colon m\times p$.
18. Explain why testing a matrix pullback only on square arrays can conceal a transposition bug, and design a rectangular shape test for $C=AB$.

## Full solutions

1. $dF=\operatorname{tr}(C^{\top}dA B)+\operatorname{tr}(C^{\top}A dB)=\operatorname{tr}((CB^{\top})^{\top}dA)+\operatorname{tr}((A^{\top}C)^{\top}dB)$. Hence $\nabla _{A} F=CB^{\top}$ and $\nabla _{B} F=A^{\top}C$.
2. $G_{Z}$ is $5\times 4$. Then $G_{X}=G_{Z}W$ is $(5\times 4)(4\times 3)=5\times 3$; $G_{W}=G_{Z}^{\top}X$ is $(4\times 5)(5\times 3)=4\times 3$; and $G_{b}=G_{Z}^{\top}1_{5}$ is $(4\times 5)(5\times 1)=4\times 1$.
3. For the mean, $\partial F/\partial L_{i}=1/n$; for the sum it is 1. This factor propagates into every parameter gradient.
4. $\lVert X\rVert_{F}^{2}=\operatorname{tr}(X^{\top}X)$. Differentiating gives $\operatorname{tr}(dX^{\top}X+X^{\top}dX)=2\operatorname{tr}(X^{\top}dX)$, so the gradient is $2X$.
5. $dF=\operatorname{tr}(dX^{\top}AX)+\operatorname{tr}(X^{\top}AdX)$. Rewriting both in $\operatorname{tr}(G^{\top}dX)$ form gives gradient $AX+A^{\top}X=(A+A^{\top})X$.
6. For nonzero $v$, $v^{\top}[(X^{\top}X/n)+\lambda I]v=\lVert Xv\rVert^{2}/n+\lambda \lVert v\rVert^{2}$. The second term is strictly positive, so the whole expression is positive regardless of $\ker X$.
7. Subtracting 1001 gives shifted logits $(-1,0)$, so probabilities are $(e^{-1}/(1+e^{-1}),1/(1+e^{-1}))$. Direct $\exp\left(1000\right)$ and $\exp\left(1001\right)$ exceed ordinary floating range, while shifted exponentials are in $(0,1]$.
8. $\sum_{j}(p_{j}-1[j=q])=\sum_{j} p_{j}-1=1-1=0$.
9. Each copy of $b_{k}$ affects a different row, so the chain rule adds all row contributions. If the upstream scalar objective was a batch mean, its $1/n$ is already present in $G_{Z}$, making the resulting sum numerically an average of per-example contributions.
10. $Jv=(0,2,-5)^{\top}$; then $u^{\top}(Jv)=1\cdot 0+0\cdot 2+2\cdot (-5)=-10$. Also $u^{\top}J=(1,12)$, and $(1,12)(2,-1)^{\top}=2-12=-10$.
11. It differentiates the sum over observed cells divided by 10, effectively treating missing cells as zero-loss contributions in the denominator. Divide by the observed count 3, or by the declared positive sum of weights, and reject a zero-observation case.
12. Reverse mode needs only the VJP of each primitive with the arriving cotangent. Composing those products yields $J_{F}^{\top}\cdot 1=\nabla F$; storing every local Jacobian would include many entries never used and can be exponentially or quadratically larger than the activations.
13. Write $p_{i}=e^{a_{i}}/S$. Then $\partial p_{i}/\partial a_{j}=p_{i}(1[i=j]-p_{j})$, which is $\operatorname{diag}(p)-pp^{\top}$. Multiplying by $1$ gives $p-p(p^{\top}1)=p-p=0$, expressing common-shift invariance.
14. First $p^{\top}u=1-\frac{1}{3}+\frac{2}{3}=\frac{4}{3}$. Thus the VJP is $(\frac{1}{3},-\frac{7}{9},\frac{4}{9})$. Its sum is $\frac{3}{9}-\frac{7}{9}+\frac{4}{9}=0$.
15. With arriving cotangent $G\colon 7 \times 11 \times 5$, $(G_{b})_{k}=\sum_{i=1}^{7} \sum_{j=1}^{11} G_{ijk}$. Hence $G_{b}$ has shape $5$; the two repeated axes are removed by summation.
16. Match $dF=\operatorname{tr}(X^{-1}dX)$ to $\operatorname{tr}((\nabla_{X}F)^{\top}dX)$. Therefore $(\nabla_{X}F)^{\top}=X^{-1}$ and $\nabla_{X}F=X^{-\top}$. The differential identity, invertibility, and domain are essential hypotheses.
17. Let $R=AB-C\in\mathbb{R}^{m\times p}$. Then $dF=\operatorname{tr}(R^{\top}dAB)=\operatorname{tr}((RB^{\top})^{\top}dA)$, so $\nabla_{A}F=(AB-C)B^{\top}$, with shape $(m\times p)(p\times n)=m\times n$, matching $A$.
18. With square arrays, expressions in the wrong order may remain defined and have the expected shape. Choose $A\colon 2 \times 3$, $B\colon 3 \times 4$, and $G_{C}:2 \times 4$. Correct pullbacks are $G_{A}=G_{C}B^{\top}:2 \times 3$ and $G_{B}=A^{\top}G_{C}:3 \times 4$; common reversed products fail dimension checks. Verify a selected entry by perturbing only that input entry.

## Project checkpoint

Create a table of forward shapes, saved values, and VJP rules for the affine, elementwise activation, squared-loss, and mean operations. Hand-check it on a two-case, two-feature batch. Chapter 8 turns this table into a graph traversal with branch accumulation and memory invariants.
