var e=`---
parent_id: book-optimization-backprop-from-scratch
chapter_id: normalization-residual-architectures
title: "Normalization, Residual Paths, and Architectural Assumptions"
level: advanced-undergraduate
estimated_minutes: 180
license: CC BY-SA 4.0
---

# Normalization, Residual Paths, and Architectural Assumptions

## Purpose and prerequisites

Initialization controls the signals seen by the first update. Architecture controls the maps and state through which every later signal must travel. This chapter derives normalization as an explicit map with declared reduction axes, derives its reverse rule, analyzes residual Jacobians, and separates algebraic invariance from optimization heuristics and deployment behavior.

The prerequisites are shaped reverse-mode differentiation, conditioning, and the initialization chapter. The central discipline is to write the exact program. “Normalize the activations” is not an exact program until we know which entries share statistics, whether those statistics are current or stored, how zero variance is handled, and whether train and deployment modes differ.

## Three operations often called normalization

The word *normalization* hides at least three distinct operations.

1. **Data standardization** fits location and scale from a designated training set, stores them, and applies the same affine map to later cases. It is part of the data pipeline.
2. **Activation normalization** computes statistics inside a network layer over declared groups of current activations. It is part of the represented program and may couple cases.
3. **Parameter normalization or reparameterization** constrains or rewrites weights, for example by separating a direction from a magnitude. It changes parameter coordinates or the feasible family.

They can all improve numerical scale in some settings, but their information flow and invariances differ. Fitting a data mean on test rows is leakage. Computing a batch statistic at deployment makes one prediction depend on its neighboring cases. Constraining each weight vector to unit norm changes which functions are representable unless a separate scale restores them.

## A normalization group as an exact map

Take one group $z=(z_{1},…,z_{m})^{\\top}$ of $m$ real activations. Define

$\\mu =(1/m)\\sum_{i} z_{i}$,

$c=z-\\mu 1$,

$v=(1/m)\\sum_{i} c_{i}^{2}$,

$s=\\sqrt{\\left(v+\\varepsilon \\right)}$,

$q=c/s$,

$y=\\gamma \\odot q+\\beta$.

Here $\\varepsilon >0$ is a declared numerical constant, and $\\gamma ,\\beta$ may be scalars shared by the group or arrays broadcast along named axes. The reduction denominator is $m$, not $m-1$: this is an algebraic layer, not an attempt to estimate an unbiased population variance.

The centered vector obeys $1^{\\top}c=0$. The normalized vector obeys

$1^{\\top}q=0$, and $(1/m)\\lVert q\\rVert^{2}=v/(v+\\varepsilon )\\le 1$.

The second quantity is strictly below one when $\\varepsilon >0$. Describing it as “unit variance” is therefore an approximation whose error is largest for nearly constant groups.

### Worked group

Let $z=(1,2,3)^{\\top}$, $\\varepsilon =0$, $\\gamma =2$, and $\\beta =-1$. Then $\\mu =2$, $c=(-1,0,1)^{\\top}$, $v=\\frac{2}{3}$, and $s=\\sqrt{\\left(\\frac{2}{3}\\right)}$. Thus

$q=(-\\sqrt{\\left(\\frac{3}{2}\\right)},0,\\sqrt{\\left(\\frac{3}{2}\\right)})^{\\top}$

and $y=2q-1$. The transform removes a common shift and positive scale within this group. It does not erase ordering: the first and third entries remain distinguishable.

With $\\varepsilon >0$, a positive rescaling is not an exact invariance. For $z'=az+b1$ and $a>0$,

$q' = a c / \\sqrt{\\left(a^{2}v+\\varepsilon \\right)} = c/\\sqrt{\\left(v+\\varepsilon /a^{2}\\right)}$.

Only when $\\varepsilon =0$, or approximately when $a^{2}v$ dominates $\\varepsilon$, does $q'=q$. A negative $a$ also reverses the sign.

## Deriving the normalization Jacobian

Let

$P=I-(1/m)11^{\\top}$.

Then $c=Pz$, so $dc=P dz$. Since $c^{\\top}1=0$,

$dv=(2/m)c^{\\top} dc=(2/m)c^{\\top} dz$

and

$ds=(1/(2s))dv=(1/(ms))c^{\\top} dz$.

Differentiate $q=c/s$:

$dq=(1/s)P dz-(c/s^{2})ds$

$=(1/s)[P-(1/m)qq^{\\top}]dz$.

Therefore

$J_{q}=(1/s)[I-(1/m)11^{\\top}-(1/m)qq^{\\top}]$.

This symmetric Jacobian annihilates $1$, expressing exact shift invariance. When $\\varepsilon =0$ and $z$ is nonconstant, it also annihilates $q$, expressing local positive-scale invariance. When $\\varepsilon >0$,

$J_{q} q = [\\varepsilon /(v+\\varepsilon )] q/s$,

so the scale direction is damped but not erased.

### Reverse rule

Suppose upstream adjoint $g=\\partial L/\\partial y$. Account for broadcasting first: let $h=g\\odot \\gamma$. Because $J_{q}$ is symmetric,

$\\partial L/\\partial z=(1/s)[h-\\operatorname{mean}(h)1-q \\operatorname{mean}(h\\odot q)]$.

The affine-parameter adjoints are reduced over every axis on which they were broadcast:

$\\partial L/\\partial \\gamma =\\operatorname{reduce}(g\\odot q)$,

$\\partial L/\\partial \\beta =\\operatorname{reduce}(g)$.

Shape agreement is not enough. The reductions must return the original shapes of $\\gamma$ and $\\beta$, and the means in the input rule must use exactly the forward normalization group.

### A two-entry limiting case

For $m=2$, $\\varepsilon =0$, and unequal entries, $q$ is either $(-1,1)$ or $(1,-1)$. Inside either ordering region it is constant, so $J_{q}=0$. This surprising result is a useful test: a group of two has lost both its shift and positive-scale degrees of freedom, leaving only a discrete sign. With $\\varepsilon >0$, the Jacobian is small rather than identically zero near large separation. Tiny groups can therefore behave quite differently from the informal “keep variance stable” story.

## Axes define the architecture

For an activation array with batch axis $B$, feature or channel axis $C$, and perhaps spatial axes $H,W$, a normalization group is a set of indices. Common patterns include:

- reducing over $B,H,W$ separately for each channel;
- reducing over the feature coordinates of each individual case;
- dividing channels into groups and reducing within each case and group;
- normalizing a single vector or token across its feature coordinates.

The names are less important than the axes. Reducing over the batch axis couples cases: changing one row changes the normalized representation of every other row in that batch. Reducing only within a case avoids that coupling but imposes different invariances. If coordinates carry unlike physical units or semantic roles, subtracting their within-case mean may have no defensible interpretation even though the calculation is legal.

### Train mode and deployment mode

A batch-coupled layer often uses current-batch statistics while training and stored running statistics during deployment. A typical state update is

$m_{t+1}=\\rho m_{t}+(1-\\rho )\\mu _{t}$,

$u_{t+1}=\\rho u_{t}+(1-\\rho )v_{t}$.

The exact meaning of $\\rho$, initialization, bias correction, variance convention, and update timing must be recorded. Running statistics are optimizer-adjacent mutable state even though gradients usually do not update them.

This creates two programs:

- the training program, whose output for one case depends on the sampled companions and which mutates running state;
- the deployment program, which uses frozen state and maps a case independently.

Agreement is not automatic. Small or nonrepresentative batches, distribution shift, a forgotten mode switch, or state restored from the wrong checkpoint can produce a deployment gap. Recomputing deployment statistics from the test set leaks evaluation information and still may not represent future traffic.

## Residual maps and their Jacobians

A residual block has the form

$R(x)=Sx+\\alpha F(x;\\theta )$.

The skip map $S$ is the identity when shapes agree; otherwise it might be a declared linear projection. The scalar or vector $\\alpha$ controls branch scale. Its Jacobian with respect to $x$ is

$J_{R}=S+\\alpha J_{F}$

for scalar constant $\\alpha$. With $S=I$, every vector $u$ satisfies

$\\lVert (I+\\alpha J_{F})u\\rVert \\ge (1-\\lvert \\alpha \\rvert \\lVert J_{F}\\rVert_{2})\\lVert u\\rVert$,

$\\lVert (I+\\alpha J_{F})u\\rVert \\le (1+\\lvert \\alpha \\rvert \\lVert J_{F}\\rVert_{2})\\lVert u\\rVert$.

The first bound follows from the reverse triangle inequality and is useful only when $\\lvert \\alpha \\rvert \\lVert J_{F}\\rVert_{2}<1$. An identity skip supplies a direct term in both forward and reverse propagation, but it does not guarantee good conditioning: $J_{F}$ can nearly cancel $I$, and products of many residual Jacobians can still grow or shrink.

### Linear residual recurrence

Let $x_{l+1}=(I+\\alpha A_{l})x_{l}$. If every $\\lVert A_{l}\\rVert_{2}\\le K$, then

$\\lVert x_{L}\\rVert\\le (1+\\lvert \\alpha \\rvert K)^L\\lVert x_{0}\\rVert\\le \\exp\\left(L\\lvert \\alpha \\rvert K\\right)\\lVert x_{0}\\rVert$.

If $\\lvert \\alpha \\rvert K<1$, the smallest singular value of each factor is at least $1-\\lvert \\alpha \\rvert K$, so

$\\lVert x_{L}\\rVert\\ge (1-\\lvert \\alpha \\rvert K)^L\\lVert x_{0}\\rVert$

for the corresponding product lower bound. Choosing $\\alpha$ proportional to $1/L$ keeps these coarse exponential bounds independent of depth. This motivates residual scaling, but it is not a theorem that training succeeds: nonlinear activation patterns, parameter updates, nonnormal matrices, loss curvature, and finite precision remain.

### Euler interpretation and its boundary

Writing

$x_{l+1}=x_{l}+\\Delta t F_{l}(x_{l})$

resembles a forward Euler step for an ordinary differential equation. The analogy helps organize depth, step scale, and stability. It does not make an arbitrary trained network a faithful discretization of a physical process. Such a claim additionally needs a common underlying vector field, convergence as $\\Delta t\\to 0$, consistent parameters or time dependence, units, and data that identify the dynamics.

## Normalization and residual order

Consider two schematic blocks:

$post(x)=N(x+F(x))$,

$pre(x)=x+F(N(x))$.

In the pre-normalized form, the skip contribution to $\\partial L/\\partial x$ contains the upstream adjoint directly. In the post-normalized form, every backward path passes through $J_{N}$, which has exact or near-null directions. This explains a structural difference, not a universal performance ranking.

The represented functions also differ. Normalization may remove a branch's common shift or scale, affine parameters may restore some degrees of freedom, and running statistics introduce state. Changing the order while copying weights is not an algebraic identity.

## Other architectural assumptions that must be explicit

### Stochastic masking

If a mask $M_{j}$ is Bernoulli with keep probability $p$, the training map often uses

$y_{j}=(M_{j}/p)x_{j}$.

Conditionally on fixed $x$, $\\mathbb{E}[y_{j}]=x_{j}$, but $\\operatorname{Var}(y_{j})=x_{j}^{2}(1-p)/p$. The equality is an expectation over masks, not pointwise agreement with the deployment identity map. The random stream and mask-sharing axes are part of the program. Masking is not a substitute for a valid sampling or causal design.

### Shape-changing skips

If $S$ changes dimension, it cannot be an identity. A learned projection adds parameters and curvature; padding or truncation creates fixed null directions; downsampling changes which spatial information survives. Calling all of these “skip connections” should not hide their distinct maps.

### Equivariance claims

An architecture is equivariant to transformation $T$ when $f(Tx)=T'f(x)$ for declared input and output actions. Weight sharing can establish an algebraic equivariance, but boundary padding, coordinate features, normalization axes, pooling, and data preprocessing may break it. Data augmentation encourages empirical agreement on sampled transforms; it does not prove exact equivariance outside them.

## An architecture audit ledger

For every stateful or residual block, record:

| Field | Required statement |
| --- | --- |
| Input/output shape | All named axes, including batch and spatial axes |
| Reduction group | Exact entries used for each mean and variance |
| Denominator and $\\varepsilon$ | Formula, units, and floating type |
| Affine parameters | Shapes and broadcast axes |
| Mutable state | Running statistics and update timing |
| Random state | Mask distribution and sharing axes |
| Train/deploy maps | Separate formulas if they differ |
| Skip map | Identity, projection, padding, or downsampling |
| Claimed invariance | Exact, approximate, empirical, or absent |
| Failure test | Constant inputs, tiny groups, mode switch, and shifted data |

This table is a text and numerical alternative to a computation graph: a reviewer can reconstruct dependencies without relying on color or layout.

## Common failure boundaries

- A small $\\varepsilon$ is not unitless. It has the units of $z^{2}$; changing activation scale changes its relative effect.
- Batch-coupled training violates the fiction that each example is processed independently.
- Running-statistic reproducibility requires restoring state, not only weights.
- A residual identity path improves one Jacobian route but cannot repair an invalid objective or leaked data.
- Exact shift invariance can discard useful level information. Learned $\\beta$ restores a global offset, not arbitrary case-specific level information already removed.
- Stable initialization calculations assume a distribution before training; normalization changes that distribution and learned parameters move it.
- An empirical multi-seed improvement is evidence for the tested configuration, not a theorem about all depths or datasets.

## Exercises

1. For $z=(2,4,6)^{\\top}$, compute $\\mu$, $v$, and $q$ with $\\varepsilon =0$.
2. Prove that normalized coordinates sum to zero and derive their mean squared value when $\\varepsilon >0$.
3. For $z'=az+b1$, derive $q'$ and state exactly when positive-scale invariance holds.
4. Derive $dv=(2/m)c^{\\top}dz$ without assuming that $dc=dz$.
5. Prove the stated Jacobian formula for $q$ and show that it annihilates $1$.
6. Starting from the Jacobian, derive the reverse rule for an upstream adjoint $h$.
7. Explain why the derivative is zero almost everywhere for a two-entry group with $\\varepsilon =0$.
8. A batch-coupled scalar feature has batch $(0,2)$. Compare the normalized value of the first case with that obtained from batch $(0,2,100)$ when $\\varepsilon =0$.
9. Running mean starts at zero, uses $\\rho =0.9$, and sees batch means $4$ then $-2$. Compute both updates.
10. Prove the upper and lower singular-value bounds for $I+\\alpha A$ used in the residual analysis.
11. For scalar blocks $x_{l+1}=(1+\\alpha a)x_{l}$, find the exact depth-$L$ derivative and identify the cancellation case.
12. Compare the input Jacobians of $N(x+F(x))$ and $x+F(N(x))$ symbolically.
13. For inverted Bernoulli masking, prove the mean and variance formulas.
14. Design a minimal numerical test that can distinguish missing running-state restoration from weight corruption.

## Full solutions

1. $\\mu =4$, $c=(-2,0,2)$, and $v=(4+0+4)/3=\\frac{8}{3}$. Hence $q=(-2,0,2)/\\sqrt{\\left(\\frac{8}{3}\\right)}=(-\\sqrt{\\left(\\frac{3}{2}\\right)},0,\\sqrt{\\left(\\frac{3}{2}\\right)})$.
2. Since $c=z-\\operatorname{mean}(z)1$, $1^{\\top}c=0$, so $\\operatorname{mean}(q)=0$. Also $\\operatorname{mean}(q_{i}^{2})=v/s^{2}=v/(v+\\varepsilon )$, which is below one for $\\varepsilon >0$ and finite $v$.
3. Centering removes $b1$, giving centered vector $ac$. Therefore $q'=ac/\\sqrt{\\left(a^{2}v+\\varepsilon \\right)}$. For $a>0$, this equals $q$ exactly for all nonconstant $z$ when $\\varepsilon =0$. With fixed positive $\\varepsilon$, it is generally only approximate. For $a<0$, an additional sign reversal occurs.
4. $dc=Pdz$, where $P=I-11^{\\top}/m$. Thus $dv=(2/m)c^{\\top}dc=(2/m)c^{\\top}Pdz$. Because $Pc=c$, symmetry of $P$ gives $c^{\\top}P=c^{\\top}$, hence $dv=(2/m)c^{\\top}dz$.
5. From $dq=dc/s-c ds/s^{2}$, use $dc=Pdz$ and $ds=c^{\\top}dz/(ms)$ to obtain $dq=(1/s)[P-cc^{\\top}/(ms^{2})]dz=(1/s)[P-qq^{\\top}/m]dz$. Both $P1=0$ and $q^{\\top}1=0$, so $J_{q}1=0$.
6. Symmetry gives $J_{q}^{\\top}h=J_{q}h$. Expanding $P$ and $qq^{\\top}/m$ yields $(1/s)[h-1(1^{\\top}h/m)-q(q^{\\top}h/m)]$, which is $(1/s)[h-\\operatorname{mean}(h)1-q \\operatorname{mean}(q\\odot h)]$.
7. After subtracting the mean, any unequal pair is $(d,-d)$ for nonzero $d$. Dividing by its population standard deviation $\\lvert d\\rvert$ gives $(\\operatorname{sign} d,-\\operatorname{sign} d)$, constant until the ordering changes. A locally constant map has zero derivative. The equality point is nonsmooth and has zero variance.
8. In $(0,2)$, mean is $1$, standard deviation is $1$, and the first normalized value is $-1$. In $(0,2,100)$, mean is $34$; variance is $(1156+1024+4356)/3=2178.666…$, so the first value is about $-34/46.676=-0.7285$. A companion case changed the first representation.
9. $m_{1}=0.9(0)+0.1(4)=0.4$. Then $m_{2}=0.9(0.4)+0.1(-2)=0.16$. These are state updates, not the arithmetic mean of the observed batches.
10. For any $u$, the triangle inequality gives $\\lVert (I+\\alpha A)u\\rVert\\le \\lVert u\\rVert+\\lvert \\alpha \\rvert \\lVert A\\rVert \\lVert u\\rVert$. The reverse triangle inequality gives $\\lVert (I+\\alpha A)u\\rVert\\ge \\lVert u\\rVert-\\lvert \\alpha \\rvert \\lVert A\\rVert \\lVert u\\rVert$. Taking the supremum in the first and infimum over unit vectors in the second proves the bounds.
11. The map is multiplication by $(1+\\alpha a)^L$, so its derivative is the same scalar. It vanishes exactly when $1+\\alpha a=0$ and $L>0$; it shrinks for magnitude below one and grows for magnitude above one.
12. The post-normalized Jacobian is $J_{N}(x+F(x))[I+J_{F}(x)]$. The pre-normalized Jacobian is $I+J_{F}(N(x))J_{N}(x)$. Only the latter contains an unmodified identity term. The formulas are generally unequal because the evaluation points and multiplication order differ.
13. With $Y=Mx/p$, $\\mathbb{E}[Y]=px/p=x$. Also $\\mathbb{E}[Y^{2}]=p x^{2}/p^{2}=x^{2}/p$, so $\\operatorname{Var}(Y)=x^{2}/p-x^{2}=x^{2}(1-p)/p$.
14. Save a checkpoint, then evaluate a fixed input in deployment mode and record its output. Reload weights while intentionally resetting running statistics; if the output changes, restore the saved statistics while keeping identical weights. Recovery to the recorded output isolates state restoration. Separately perturb one weight while preserving state to verify that the test also detects weight corruption. Use exact serialization comparison plus a declared numerical tolerance for outputs.

## Reproducible verification specification

Implement the group formula and reverse rule with plain scalar loops. Test groups of sizes 2, 3, and 8; constant and nonconstant inputs; $\\varepsilon$ values $0$, $10^{-8}$, and $10^{-2}$; scalar and coordinatewise $\\gamma$; and positive shifts and scales. For nonzero $\\varepsilon$, compare the analytic VJP against centered finite differences in at least ten fixed directions. Check $1^{\\top}q=0$, $J_{q}1=0$, the expected scale-invariance defect, and correct broadcast reductions. Then implement linear residual products and compare measured singular-value bounds with the formulas above. Record arrays, axes, tolerances, floating type, and every seed. A mismatch is a failed implementation check, not evidence about learning quality; a match is not a generalization claim.
`;export{e as default};