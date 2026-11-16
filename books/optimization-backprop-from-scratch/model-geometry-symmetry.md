
# Parameter Symmetry and the Geometry of Learned Functions

## Purpose and prerequisites

This chapter assumes linear maps, reverse-mode differentiation, conditioning, and regularization. It distinguishes parameter space from function space. Two distant parameter vectors can represent the same predictor; two nearby vectors can behave differently under a sensitive input distribution. Geometry must name the objects and metric it measures.

## The parameter-to-function map

Let $\Theta$ be parameter space and let

$\Phi\colon \Theta \to \mathcal{F}$, $\Phi (\theta )=f_\theta$

map parameters to represented functions. Define observational equivalence on a domain $D$ by

$\theta \sim_D \theta'$ when $f_\theta(x)=f_{\theta'}(x)$ for every $x\in D$.

The equivalence class $[\theta ]_{D}$ contains all parameters representing the same function on $D$. If $D$ is only the finite training inputs, the class can be larger than it is on the deployment domain. Identical interpolation does not imply identical extrapolation.

A function-level target $G(f_\theta )$ is invariant under the equivalence when it has the same value for all representatives. A coordinate penalty such as $\lVert \theta \rVert^{2}$ generally is not.

## Four common symmetries

### 1. Redundant linear features

If $Xv=0$, then training predictions satisfy

$X(w+tv)=Xw$

for every scalar $t$. The empirical loss is constant along a null-space line. This may be only sample equivalence: a future row $x_{\mathrm{new}}$ with $x_{\mathrm{new}}^{\top}v\ne 0$ separates the predictors.

### 2. Softmax shift

For logits $a\in \mathbb{R}^K$,

$\operatorname{softmax}(a+c1)=\operatorname{softmax}(a)$.

The numerator and denominator both gain factor $\exp\left(c\right)$. Cross-entropy is therefore flat in the all-ones logit direction. Its Hessian

$H=\operatorname{diag}(p)-pp^{\top}$

satisfies $H1=0$.

To prove positive semidefiniteness, for any $v$,

$v^{\top}Hv=\sum_{j} p_{j}v_{j}^{2}-(\sum_{j} p_{j}v_{j})^{2}$,

which is the variance of values $v_{j}$ under categorical probabilities $p$, hence nonnegative. It is zero for constant $v$; if all $p_{j}>0$, only constant vectors give zero.

### 3. Hidden-unit permutation

For a one-hidden-layer network

$f(x)=V \sigma (Wx+b)+c$,

permute hidden units with permutation matrix $P$. Since elementwise $\sigma (Pz)=P\sigma (z)$, the transformed parameters

$W'=PW$, $b'=Pb$, $V'=VP^{\top}$

give

$V'\sigma (W'x+b')=VP^{\top}P\sigma (Wx+b)=V\sigma (Wx+b)$.

There are at least $m!$ equivalent parameter arrangements for $m$ distinct hidden units. An optimizer landing in another permutation has not learned a different function.

### 4. Positive rescaling in homogeneous networks

For ReLU and $c>0$, $\operatorname{ReLU}(cz)=c \operatorname{ReLU}(z)$. In a scalar two-layer unit

$f(x)=a \operatorname{ReLU}(w^{\top}x+b)$,

the transformation

$(a,w,b)\to (a/c,cw,cb)$

preserves $f$. Parameter norms and Hessian entries can change arbitrarily with $c$ while the function remains fixed.

This symmetry breaks if biases are not scaled consistently, if $c<0$, or if the activation is not positively homogeneous.

## Tangent directions and Jacobian null spaces

For a fixed collection of inputs, stack model outputs into $h(\theta )$. Its Jacobian $J_{h}(\theta )$ maps parameter perturbations to first-order prediction changes:

$h(\theta +\delta )=h(\theta )+J_{h}(\theta )\delta +o(\lVert \delta \rVert)$.

If $J_{h}\delta =0$, then $\delta$ is a first-order invisible direction on those inputs. An exact smooth symmetry curve $\theta (t)$ with constant predictions satisfies

$J_{h}(\theta (t)) \theta '(t)=0$.

The converse need not hold globally: a Jacobian null vector can be only first-order flat, with second-order changes. Numerical near-null directions depend on parameter and output scaling.

### Worked factorization symmetry

Represent scalar $q$ as product $q=uv$. At nonzero $(u,v)$, the Jacobian is

$J=[v,u]$.

The vector $(u,-v)^{\top}$ is null because $vu-u v=0$. It is tangent to the exact curve $(u(t),v(t))=(e^t u,e^{-t} v)$, whose product is constant.

For loss $F(u,v)=(uv-y)^{2}/2$, every point with $uv=y$ is a global minimizer. At such a point the Hessian is

$\begin{bmatrix}v^{2} & uv-y+uv \\ uv-y+uv & u^{2}\end{bmatrix}=\begin{bmatrix}v^{2} & uv \\ uv & u^{2}\end{bmatrix}$

and has determinant zero. The zero eigenvalue reflects the symmetry tangent; it is not evidence of a worse represented prediction.

## Quotient geometry

The conceptual function space is the quotient $\Theta/\!\sim$, where an equivalence class is one represented function. Constructing a smooth quotient can be technically difficult because stabilizers and symmetry dimensions can change—for example, when two hidden units become identical or a unit has zero outgoing weight.

Even without formal quotient manifolds, audits can use invariant quantities:

- predictions on a declared evaluation set;
- margins or logits modulo a common shift;
- path products or normalized directions in homogeneous networks;
- function norms under a declared input measure;
- tangent products $Jv$ rather than raw $v$ length.

Choosing one representative, such as sorting hidden units or normalizing weights, is a **gauge convention**. It can improve comparison but does not add data information. Conventions can be discontinuous when units tie or weights cross zero.

## Function-space distances

Given a distribution $Q$ over inputs and functions whose difference is square-integrable under $Q$, one distance-like quantity is

$d_{Q}(f,g)=[\mathbb{E}_{Q} \lVert f(X)-g(X)\rVert^{2}]^{\frac{1}{2}}$.

On a finite evaluation set, replace expectation by an average. It is a pseudometric on this $L^{2}(Q)$ domain because functions differing only on a $Q$-null set have zero distance. It becomes a metric on equivalence classes modulo equality $Q$-almost surely. If square integrability is dropped, the expression may be infinite and is an extended pseudometric rather than a finite one.

The choice of $Q$ matters. Training-distribution distance can be small while deployment-shift distance is large. For classifiers, tiny score changes can flip decisions near a threshold, so score distance and action distance answer different questions.

### Local pullback metric

For output map $h(\theta )$ with Euclidean output geometry, small prediction change has squared length

$\lVert J_{h}\delta \rVert^{2}=\delta ^{\top} J_{h}^{\top} J_{h} \delta$.

Thus $G(\theta )=J_{h}^{\top}J_{h}$ is a positive semidefinite pullback metric. Symmetry tangents lie in its null space. Weighting outputs or inputs changes $G$.

This matrix is also the Gauss–Newton curvature for squared residuals, apart from scaling. It measures first-order prediction sensitivity on the chosen cases, not population truth.

## Hessian, Gauss–Newton, and Fisher distinctions

For least-squares residual vector $r(\theta )$,

$F(\theta )=(\frac{1}{2})\lVert r(\theta )\rVert^{2}$.

The gradient is $J_{r}^{\top}r$, and the Hessian is

$H=J_{r}^{\top}J_{r}+\sum_{i} r_{i} H_{r_{i}}$.

Gauss–Newton keeps the positive semidefinite first term and drops residual-weighted second derivatives. It is exact for linear residuals and becomes a useful local approximation when residuals or second derivative effects are small. It can be singular under symmetry or insufficient excitation.

For a probabilistic model $p_\theta (y|x)$, Fisher information under a declared distribution is

$I(\theta )=\mathbb{E}[s_\theta s_\theta ^{\top}]$, $s_\theta =\nabla _\theta \log p_\theta (Y|X)$.

Its expectation can be under the model, empirical inputs, or another law; conventions must be stated. Under regularity, it also relates to expected negative log-likelihood Hessian. Misspecification, boundaries, singular parameterizations, and finite samples complicate that identity.

Neither Gauss–Newton nor Fisher automatically defines the “true geometry of learning.” Each pulls back a chosen output or probability discrepancy.

## Flatness is coordinate-dependent

Suppose scalar parameter changes by $\theta =c\eta$. Then

$d^{2}F/d\eta ^{2}=c^{2} d^{2}F/d\theta ^{2}$

at a stationary point. By choosing $c$, numerical Hessian curvature can be made arbitrarily large or small without changing the represented function family. In homogeneous networks, exact function-preserving rescalings make this issue especially visible.

Therefore claims such as “flat minima generalize better” need an invariant flatness definition, parameter normalization, measure over perturbations, and statistical assumptions. Raw Hessian trace in arbitrary coordinates is not an intrinsic function property.

This does not make curvature useless. In fixed declared coordinates it predicts local step stability, numerical sensitivity, and response to a specified perturbation distribution.

## Margins and decision geometry

For class scores $s_{k}(x;\theta )$, prediction is $\operatorname{argmax}_{k} s_{k}$. If true or selected class is $q$, a score margin is

$m(x;\theta )=s_{q}-\max_{k\ne q}s_{k}$.

A positive margin means the decision is locally unchanged under score perturbations smaller than half the gap in a suitable norm. Parameter perturbation changes margins through their gradients, but a large parameter move along a symmetry can leave every margin fixed.

Margin robustness is conditional on the input and perturbation model. It is not robustness to unrestricted semantic changes, distribution shift, or adversarial actions outside the declared set.

## Regularization through the geometry lens

Parameter norm penalties choose preferred representatives and directions. Function-space penalties instead measure derivatives, outputs, margins, or an RKHS norm. Data augmentation averages loss over transformed inputs and can encourage invariance. Natural-gradient-style methods use an information metric to map derivatives to steps.

Each choice answers:

- which changes are considered small;
- which equivalent parameters are identified or left equivalent;
- which input distribution weights function differences;
- whether the mechanism changes the objective, the algorithm, or both.

No geometry repairs a target that omits the deployment decision or data that lack relevant support.

## A singular curvature direction need not be a symmetry

**Worked example (first-order invisibility).** Let $f_\theta(x)=\theta^2x$ with scalar parameter $\theta$. At $\theta=0$, the derivative of every output with respect to the parameter is zero, so every finite-data Jacobian is the zero matrix. Nevertheless, for any nonzero $t$ and input $x=1$, $f_t(1)=t^2\ne0=f_0(1)$. A null Jacobian direction at one point does not integrate automatically to a curve of equivalent functions.

Contrast the exact scaling symmetry of $f_{u,v}(x)=uvx$. For nonzero $u,v$, the curve $(u(t),v(t))=(ue^t,ve^{-t})$ preserves every output on every input. Its tangent $(u,-v)$ is annihilated by the output Jacobian. Here first-order invisibility follows from a known finite invariance; the reverse implication failed in the preceding example.

This distinction affects interpretation of curvature approximations. A zero eigenvalue of $J^TJ$ records an undetected first-order residual change for the named inputs. It can arise from a genuine symmetry, missing data, a stationary parameterisation or several mechanisms together. Checking predictions on another input set can expose empirical underidentification, while a proof of an exact parameter symmetry must establish equality throughout its declared input domain. Penalties can distinguish even exactly equivalent functions when their parameter norms differ.

## Exact symmetry constrains the Hessian at a stationary point

Let a twice differentiable objective remain constant along a twice differentiable symmetry curve through a parameter. Differentiating twice along the curve gives a quadratic Hessian term plus the gradient paired with the curve's acceleration. Away from stationarity these terms can cancel, so constancy along a curved orbit does not force its tangent quadratic Hessian value to vanish by itself. At a stationary point the gradient term vanishes, leaving zero Hessian quadratic form along the orbit tangent.

At a local minimum, the Hessian is positive semidefinite. In that case a vector with zero Hessian quadratic form belongs to its null space: diagonalise the symmetric matrix and note that a sum of nonnegative eigenvalue-weighted squares can vanish only in zero-eigenvalue directions. Thus a genuine nonzero symmetry tangent at a smooth minimum forces Hessian singularity. This is a precise reason that a model can have useful predictions and a singular parameter Hessian simultaneously.

The converse remains false. Higher-order flatness and missing input information can also create Hessian null directions. Moreover, the objective must actually preserve the symmetry. A parameter penalty can distinguish two parameter vectors representing the same function, so a prediction symmetry need not remain a symmetry of the penalised objective. The squared-norm balancing calculation in Exercise 16 illustrates that distinction for a homogeneous unit.

## Constant rank supplies a local geometric theorem

There is an important sufficient condition under which empirical output equivalence has a smooth local description. Let the map from parameters to a fixed finite table of outputs be continuously differentiable, and suppose its Jacobian has the same rank throughout a neighbourhood. The constant-rank theorem then gives local coordinates in which the map depends on exactly that many coordinates. Its local level sets are smooth sets of dimension equal to the number of parameters minus the rank. Their tangent spaces are the Jacobian null spaces.

This theorem is a stated multivariable-analysis input; it is stronger than evaluating the rank once. The scalar square example fails the constant-rank hypothesis near zero, where the rank changes. A computed small singular value at one parameter also does not establish an exactly constant rank in a neighbourhood. It can motivate further analysis but cannot substitute for the hypothesis.

Even a valid local empirical level set need not represent a global function symmetry. It preserves only the output table used to define the map. A richer input set can distinguish its members, and the local coordinates need not extend across singular parameter values. This separates the geometry of fitting a finite dataset from the geometry of representing a function on a whole domain.

## Discrete symmetries do not require continuous null directions

Permuting hidden units gives a discrete equivalence. Two parameter vectors can represent the same function while lying in separated parts of parameter space with no nearby continuous symmetry orbit connecting them. A finite collection of equivalent isolated minima does not force a zero Hessian eigenvalue at each minimum. The Hessian detects local infinitesimal behavior; it does not list all globally equivalent parameter labels.

For comparisons between learned models, first specify the equivalence being used. Aligning a permutation, balancing a homogeneous scaling orbit, and matching predictions on a finite input table solve different comparison problems. A successful alignment under one convention may leave differences under another. Using invariant predictions and declared input distributions alongside parameter diagnostics makes the scope of a geometric claim explicit, while preserving the distinction between exact identities and numerical near-equalities.

## Averaging equivalent parameters need not average their functions

For the scalar function represented by the product of two parameters, the pairs $(2,3)$ and $(-2,-3)$ both represent coefficient six. Their arithmetic mean is the zero pair, which represents coefficient zero. Averaging the represented functions instead leaves coefficient six. The parameter-to-function map is nonlinear, so it does not commute with parameter averaging, even between two exactly equivalent representatives.

This example explains why matching labels or gauges can matter before averaging learned weights. A permutation of hidden units leaves a network's function unchanged, but averaging unmatched unit coordinates can combine different internal features. Alignment is not needed to average the output functions themselves. Ensembling predictions and averaging parameters are distinct mathematical operations and can have different costs and behaviors.

For a positive target product, one can choose a balanced positive representative by setting both factors equal to the square root of the product. This removes one scaling ambiguity on that restricted positive region. It does not provide a single smooth convention across zero and negative products, where sign choices and singular points intervene. The selected representative is a coordinate convention rather than information extracted from observations about which factor was truly responsible.

Noncompact equivalence orbits create another caution. Along the curve that multiplies one nonzero factor by an increasing positive number and divides the other by the same number, the represented function remains fixed while one parameter norm diverges. A bounded function-space quantity therefore need not bound the size of its parameter representatives. Conversely, a bounded parameter difference need not control predictions uniformly without restrictions on the input domain.

**Worked comparison of model reports.** Two fitted factorizations can have identical predictions on every input and very different parameter norms, Hessian eigenvalues, and coordinate step sizes. A report of only those parameter diagnostics can suggest different predictive models where none exists. Compare the functions first, then interpret parameter diagnostics relative to the chosen representative and metric. If a penalty is part of the objective, report its value too: identical functions can then have different total losses because the penalty deliberately selects among representatives.

These examples make quotient language concrete. The object being compared may be a parameter vector, an equivalence class of functions, or an empirical output table. Each has a legitimate use. Stating which object is being averaged, regularised, or measured avoids transferring an identity from one space to another where it does not hold.

## Exercises

1. Prove softmax shift invariance and show its Jacobian annihilates the all-ones vector.
2. Prove $\operatorname{diag}(p)-pp^{\top}$ is positive semidefinite using a variance interpretation.
3. Verify the hidden-unit permutation symmetry algebraically for two units swapped by $P$.
4. For $f(x)=a \operatorname{ReLU}(wx)$ in one dimension, give a one-parameter family of equivalent nonzero parameters.
5. For $q=uv$, find the Jacobian null space at $(u,v)=(2,3)$ and a tangent-preserving curve.
6. Compute eigenvalues of the Hessian of $(uv-6)^{2}/2$ at $(2,3)$.
7. Give two functions with zero empirical $d_{Q}$ on inputs $\{0,1\}$ but different values at $2$.
8. Prove $J^{\top}J$ is positive semidefinite and characterize its null space.
9. Derive the least-squares Hessian decomposition into Gauss–Newton and residual-curvature terms.
10. Show how Hessian curvature changes under scalar reparameterization $\theta =c\eta$ at a stationary point.
11. Explain why sorting hidden units is a convention rather than identification from data.
12. A parameter perturbation has large Euclidean norm but $J\delta =0$. What can and cannot be concluded?
13. Define parameter equivalence by $\theta\sim\eta$ when $f_{\theta}(x)=f_{\eta}(x)$ for every input in a declared domain. Prove this is an equivalence relation and explain why equality only on training rows defines a coarser empirical relation.
14. For multinomial logits, show that the softmax Fisher/Gauss–Newton block $\operatorname{diag}(p)-pp^{\top}$ has the all-ones vector in its null space and determine its rank when every $p_{j}>0$.
15. Let $d_{Q}(f,g)^{2}=\mathbb{E}_{Q}[(f(X)-g(X))^{2}]$. Prove the triangle inequality for $d_{Q}$ up to equivalence almost surely, and state why changing $Q$ can change which functions are close.
16. Along the ReLU symmetry $(a,w)\to (a/c,cw)$, minimize the squared parameter norm $a^{2}/c^{2}+c^{2}\lVert w\rVert^{2}$ over $c>0$ and give the balancing condition.
17. For scalar reparameterization $\theta=h(\eta)$, derive the second derivative of $F(h(\eta))$ away from stationarity and identify the term that disappears at a stationary point.
18. If a residual Jacobian $J$ has rank $r<d$, determine the rank and nullity of $J^{\top}J$. Explain what this says locally and what it does not prove globally.

## Full solutions

1. $\operatorname{softmax}_{j}(a+c\mathbf{1})=\exp\left(a_{j}+c\right)/\sum_{k}\exp(a_{k}+c)=\operatorname{softmax}_{j}(a)$. Differentiating the constant-shift curve at $c=0$ gives $J_{\operatorname{softmax}}(a)\mathbf{1}=0$. Equivalently, each Jacobian row sums to zero.
2. For any $v$, $v^{\top}(\operatorname{diag}(p)-pp^{\top})v=\sum_{j} p_{j}v_{j}^{2}-(\sum_{j} p_{j}v_{j})^{2}=\operatorname{Var}_{p}(v_{J})\ge 0$.
3. With $P$ swapping coordinates, $\sigma (Pz)=P\sigma (z)$. Then $(VP^{\top})\sigma (PWx+Pb)=VP^{\top}P\sigma (Wx+b)=V\sigma (Wx+b)$. Output bias is unchanged.
4. For any $c>0$, $(a',w')=(a/c,cw)$ represents the same function because $(a/c)\operatorname{ReLU}(cwx)=a\operatorname{ReLU}(wx)$. Bias, if present, must also be scaled inside ReLU.
5. Jacobian is $[3,2]$; its null space is spanned by $(2,-3)^{\top}$. One exact curve is $(u(t),v(t))=(2e^t,3e^{-t})$, with derivative $(2,-3)$ at zero and constant product 6.
6. At a zero residual, Hessian is $\begin{bmatrix}v^{2} & uv \\ uv & u^{2}\end{bmatrix}=\begin{bmatrix}9 & 6 \\ 6 & 4\end{bmatrix}$. Its trace is 13 and determinant 0, so eigenvalues are 13 and 0. The zero direction is the symmetry tangent.
7. Let $f(x)=0$ and $g(x)=x(x-1)$. They agree at 0 and 1, so the empirical distance is zero, but $g(2)=2$ while $f(2)=0$.
8. $\delta ^{\top}J^{\top}J\delta =\lVert J\delta \rVert^{2}\ge 0$. It equals zero exactly when $J\delta =0$, so $\ker(J^{\top}J)=\ker J$.
9. Gradient is $\sum_{i} r_{i}\nabla r_{i}=J_{r}^{\top}r$. Differentiate: each term contributes $\nabla r_{i}\nabla r_{i}^{\top}+r_{i}H_{r_{i}}$. Summing first outer products gives $J_{r}^{\top}J_{r}$, leaving the residual-weighted curvature sum.
10. With $G(\eta )=F(c\eta )$, $G''(\eta )=c^{2}F''(c\eta )$. In higher dimensions the Hessian transforms by congruence at a stationary point. Numerical curvature depends on coordinate scale.
11. Permutation-equivalent parameters give identical outputs, likelihood, and loss. Sorting selects one label ordering for comparison; observed predictions contain no fact that makes “unit 1” intrinsically precede “unit 2.” Ties can make the convention discontinuous.
12. It is first-order invisible for the outputs encoded by $J$ at that point. It may be a true symmetry tangent or only second-order flat. Nothing follows automatically about outputs on other inputs, finite perturbations, parameter penalties, population risk, or decision robustness.
13. Reflexivity holds because every function equals itself; symmetry follows by reversing equality; transitivity follows because equality of $f_{\theta}$ with $f_{\eta}$ and $f_{\eta}$ with $f_{\zeta}$ implies equality of the endpoints. Requiring equality only on finitely many training inputs can identify functions that differ elsewhere, so it merges at least as many parameter pairs and is therefore coarser.
14. Multiplication gives $(\operatorname{diag}(p)-pp^{\top})\mathbf{1}=p-p(p^{\top}\mathbf{1})=0$. For positive $p$, $v^{\top}[\operatorname{diag}(p)-pp^{\top}]v$ is the variance of values $v_{j}$ under $p$, which vanishes exactly for constant $v$; hence the null space is $\operatorname{span}\{\mathbf{1}\}$ and rank is $K-1$.
15. In the Hilbert space $L^{2}(Q)$, $d_{Q}(f,h)=\lVert f-h\rVert\le \lVert f-g\rVert+\lVert g-h\rVert$ by Minkowski's inequality. Functions at zero distance are equal only $Q$-almost surely, so quotienting by that relation makes it a metric. Another distribution can place mass where the functions differ, changing their distance and possibly the equivalence class.
16. Let $r=\lVert w\rVert$. When $a\ne0$ and $r>0$, differentiating $N(c)=a^{2}c^{-2}+r^{2}c^{2}$ gives $N'(c)=-2a^{2}c^{-3}+2r^{2}c$. Thus $c^{4}=a^{2}/r^{2}$, so $c=\sqrt{\lvert a\rvert/r}$, the balancing condition $\lvert a\rvert/c=cr$ holds, and the minimum is $2\lvert a\rvert r$. If $a=0$ and $r=0$, every $c>0$ gives norm zero. If exactly one of $a$ and $r$ is zero, the infimum is zero as $c$ tends to the appropriate boundary, but no positive finite $c$ attains it.
17. The chain rule gives $\frac{d^{2}}{d\eta^{2}}F(h(\eta))=F''(h(\eta))[h'(\eta)]^{2}+F'(h(\eta))h''(\eta)$. The second term depends on coordinate curvature and vanishes when $F'(\theta)=0$. This is why Hessians transform by simple congruence only at stationary points (or under affine reparameterizations).
18. Singular values show $\operatorname{rank}(J^{\top}J)=\operatorname{rank}(J)=r$, so its nullity in $\mathbb{R}^d$ is $d-r$. Those null directions are first-order invisible for the residuals at the evaluated point. They need not integrate to exact symmetry curves, remain null elsewhere, or imply equal functions on untested inputs.

## Project checkpoint

Take a two-unit ReLU network and generate permutation and positive-scaling equivalents. Verify identical predictions and different parameter norms, Hessian entries, and optimizer steps. Then compare them using a function-space distance on training and shifted input grids. The final planned part of the book will turn these invariance checks into auditable end-to-end projects.
