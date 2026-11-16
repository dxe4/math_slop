# 16. Geometry and reparameterization

**Learning goals.** Derive densities after coordinate changes; recognize when whitening removes a fixed correlation and when a scale hierarchy needs a different transformation; choose centered or noncentered coordinates with the data in mind; distinguish a computational repair from a change to the scientific model.

**Prerequisites.** Multivariate normals and transformations from [Chapter 02](02-probability.md), posterior propriety from [Chapter 03](03-bayesian-targets.md), Metropolis proposals from [Chapter 09](09-metropolis-hastings.md), and estimand-specific error assessment from [Chapters 13](13-mc-error.md) and [14](14-diagnostics.md). [Chapter 15](15-adaptation.md) explains how a proposal covariance can be learned during warmup.

## 16.1 Why coordinates affect computation

Imagine a density concentrated in a long, thin ellipse. A spherical random-walk proposal that fits across the short direction moves slowly along the long one. A proposal large enough to traverse the long direction frequently lands outside the ellipse. Neither problem says that the target distribution is wrong. It says that the proposal and the coordinates disagree about what a typical move looks like.

Where a density $\pi(x)$ is positive and twice differentiable, the Hessian $H(x)=\nabla^2[-\log\pi(x)]$ describes local curvature. Near a point where $H$ is positive definite, its eigenvectors are locally steep and flat directions. The ratio of its largest to smallest eigenvalue is a *local* condition number for that quadratic approximation. Away from such a region $H$ may be indefinite; a single global condition number for an arbitrary posterior is therefore misleading. More importantly, a constant ellipse is different from a shape whose width changes across the state space. A fixed covariance can address the former, but generally cannot remove the latter. The distinction matters for random walks and gradient methods alike. The [Stan efficiency guide](https://mc-stan.org/docs/stan-users-guide/efficiency-tuning.html) likewise separates fixed conditioning from varying curvature.

The mode alone is a poor guide. Simulation must cover *probability mass*, which depends on density times volume; the region carrying most mass can sit away from the point of maximum density. We will use three related examples: a correlated Gaussian, a scale-dependent funnel, and a hierarchy with data. Each asks a different geometric question. A plot of selected parameter pairs can suggest an answer, but a reassuring plot or diagnostic never proves that a chain has explored all relevant mass.

Geometry is always relative to both the coordinates and the proposed moves. Replacing a parameter measured in thousands by one measured in units does not alter its underlying probability law, but it changes what a numerical step of size one means. Likewise, a sampler with a learned full covariance may already compensate for a fixed ellipse, while a simple isotropic proposal may benefit enormously from explicit whitening. Before implementing a new transform, identify the actual bottleneck: an awkward fixed scale, a changing conditional scale, a boundary, or a direction the data do not identify.

## 16.2 The density after an exact coordinate change

Let $T:Z\to X$ be a continuously differentiable bijection between open subsets of $\mathbb R^d$, with continuously differentiable inverse and nonzero determinant everywhere. Write $x=T(z)$. If $X$ has density $\pi_x$ relative to ordinary $d$-dimensional volume, then $Z=T^{-1}(X)$ has density

$$
\pi_z(z)=\pi_x(T(z))\left|\det DT(z)\right|.
$$

The determinant converts a small volume $dz$ around $z$ into the corresponding volume $dx$ around $T(z)$. Consequently, for any integrable $f$,

$$
\mathbb E_{\pi_x}[f(X)]
=\int_Z f(T(z))\pi_z(z)\,dz.
$$

This is the preservation we care about: corresponding *events* and expectations agree. A density value at a point does not represent an event probability, and modes or density heights can change under a nonlinear transformation. If we use only an unnormalized log target, the same formula becomes $\log\widetilde\pi_z(z)=\log\widetilde\pi_x(T(z))+\log|\det DT(z)|$. Additive constants independent of $z$ may be omitted for Metropolis ratios.

There are two sound ways to code a hierarchy. One starts with a density for $x$, substitutes $x=T(z)$, and adds this Jacobian. The other *declares* a base distribution for $z$ and defines $x=T(z)$ generatively; its induced prior for $x$ already contains the volume conversion. Adding another Jacobian to that base prior would change the model. It is useful to test the two representations at matched points before trusting a sampler.

These statements assume an invertible map on full-dimensional support. An exactly singular Gaussian, for example, lives on a lower-dimensional subspace. No ordinary invertible $d$-dimensional whitening map exists for it; one must parameterize its actual support or work with an appropriate measure there.

## 16.3 Whitening a fixed ellipse

Suppose $X\sim N_d(\mu,\Sigma)$ and $\Sigma$ is positive definite. Let $L$ be its lower-triangular Cholesky factor, so $LL^{\mathsf T}=\Sigma$, and set $x=\mu+Lz$. The determinant is $|L|>0$. Since $\Sigma^{-1}=L^{-\mathsf T}L^{-1}$,

$$
(x-\mu)^{\mathsf T}\Sigma^{-1}(x-\mu)=z^{\mathsf T}z,
\qquad |\Sigma|^{1/2}=|L|.
$$

The Gaussian normalizing factor $|\Sigma|^{-1/2}$ cancels the Jacobian $|L|$, leaving $Z\sim N_d(0,I)$. To compute $z$ from an observed $x$, solve the triangular system $Lz=x-\mu$; explicitly forming $L^{-1}$ is unnecessary. A spherical Gaussian random-walk proposal $z'=z+\epsilon$, $\epsilon\sim N(0,s^2I)$, corresponds exactly to $x'=x+L\epsilon$, whose increment covariance is $s^2\Sigma$. Metropolis acceptance is identical at matched states when the targets and symmetric proposals are transformed consistently.

**Worked example A: a highly correlated normal.** Take

$$
\Sigma=\begin{pmatrix}1&0.99\\0.99&1\end{pmatrix},\qquad
L=\begin{pmatrix}1&0\\0.99&\sqrt{0.0199}\end{pmatrix}.
$$

The eigenvalues of $\Sigma$ are $1.99$ and $0.01$. Its covariance condition number is $199$, and the standard-deviation ratio of its principal axes is $\sqrt{199}\approx14.11$. (The precision Hessian has the same condition-number ratio.) For $z=(1,-1)$, $x=Lz=(1,0.99-\sqrt{0.0199})\approx(1,0.848933)$. Its squared Mahalanobis distance is $z^{\mathsf T}z=2$, even though $x_1$ and $x_2$ look close in ordinary coordinates. Here $|L|=\sqrt{0.0199}\approx0.141067$; the transformed Gaussian log density gains $\log|L|$, canceling the original Gaussian normalization term $-\tfrac12\log|\Sigma|$.

An approximate posterior covariance can serve the same proposal-design purpose for a non-Gaussian target, but it need not make that target spherical. If $L$ depends on an unknown hyperparameter, transform the **joint** state, including that hyperparameter, and use the joint Jacobian. A conditional covariance is not automatically a constant coordinate scale. Later, [Chapter 23](23-riemannian.md) considers algorithms with position-dependent metrics.

For instance, if $h$ is a hyperparameter and $x=\mu(h)+L(h)z$, the map $(h,z)\mapsto(h,x)$ has Jacobian $|L(h)|$ even though the derivative of $x$ with respect to $h$ is generally nonzero. It is block triangular for the same reason as the funnel map below. If the original conditional prior is $x\mid h\sim N(\mu(h),L(h)L(h)^{\mathsf T})$, the conditional normalizer includes $|L(h)|^{-1}$ and cancels that Jacobian. A separately coded likelihood $p(y\mid x,h)$ remains $p(y\mid\mu(h)+L(h)z,h)$; it does not acquire or lose a Jacobian. This accounting is especially useful when reviewing generative code because it distinguishes the prior transformation from the observation model.

## 16.4 A funnel with changing width

Let $v\sim N(0,9)$ and, conditional on $v$, let $x_i\sim N(0,e^v)$ independently for $i=1,\ldots,d$. Here $e^v$ is a **variance**, so the conditional standard deviation is $e^{v/2}$. The centered joint log density, up to a constant, is

$$
\log\pi(v,x)= -\frac{v^2}{18}-\frac{d v}{2}
-\frac{e^{-v}}{2}\sum_{i=1}^d x_i^2.
$$

At fixed $v$, the negative log-density Hessian with respect to $x$ is $e^{-v}I$. When $v=-6$, each $x_i$ has conditional standard deviation $e^{-3}\approx0.0498$; when $v=6$, it is $e^3\approx20.09$. The ratio is $e^6\approx403.4$. A constant global scale cannot simultaneously be natural for both locations. A move suited to the wide part is hazardous in the neck; one suited to the neck barely explores the wide part. This is why a covariance estimated at one global scale may miss the core difficulty. The funnel is a useful stress test of geometry in hierarchical computation, as discussed by [Betancourt and Girolami](https://arxiv.org/html/1312.0906).

There is a deceptive statistical detail. Since $\mathbb E[x_i\mid v]=0$, we have $\operatorname{Cov}(v,x_i)=\mathbb E[v\mathbb E(x_i\mid v)]=0$. Yet $v$ and $x_i$ are dependent: $\operatorname{Var}(x_i\mid v)=e^v$ varies sharply. An ordinary correlation matrix can therefore declare these coordinates uncorrelated while the target has severe conditional scale variation. Inspect conditional spreads and nonlinear relationships, not just correlations.

One should also label funnel pictures carefully. A plot of $(v,x_1)$ from joint draws displays the exact two-dimensional **marginal** after the other coordinates have been integrated out. A slice of the joint density that fixes $x_2,\ldots,x_d$ to zero is a different object: its $e^{-dv/2}$ normalization remains, whereas the $(v,x_1)$ marginal contains only $e^{-v/2}$. Confusing the two can make the neck seem to contain a different amount of probability.

## 16.5 Noncentering removes this prior funnel

Set $x_i=e^{v/2}z_i$ and keep $v$ as a coordinate. The full map is $T(v,z)=(v,e^{v/2}z)$. Its Jacobian has block form

$$
DT(v,z)=\begin{pmatrix}
1&0\\
\tfrac12 e^{v/2}z&e^{v/2}I_d
\end{pmatrix},
\qquad |\det DT(v,z)|=e^{dv/2}.
$$

The lower-left block records that $x$ changes when $v$ changes. The determinant still comes from the diagonal blocks because the matrix is block triangular. Substituting $x=e^{v/2}z$ into the centered log density gives $-v^2/18-dv/2-\|z\|^2/2$; adding $dv/2$ cancels the scale term. Thus

$$
\pi(v,z)=\phi(v;0,9)\prod_{i=1}^d\phi(z_i;0,1).
$$

For this no-data target, $v$ and all $z_i$ can be drawn independently. MCMC is unnecessary; the exact direct simulator is the benchmark. If one computes a scientific quantity involving $x$, each draw must be transformed back by $x_i=e^{v/2}z_i$. For example, $\mathbb E[x_i]=0$, while $\mathbb E[x_i^2]=\mathbb E[e^v]\mathbb E[z_i^2]=e^{9/2}$; the latter expectation has a noisy empirical estimate because the mixture has a heavy right tail in $x_i^2$.

The coordinate change is valuable when the funnel is a *prior component* of a model with observations. It removes prior dependence, but a likelihood for $x$ couples $v$ and $z$ again. Noncentered coordinates can therefore help greatly, modestly, or not at all after data are included. The [Stan efficiency guide](https://mc-stan.org/docs/stan-users-guide/efficiency-tuning.html) uses the same distinction for its funnel and hierarchical examples.

## 16.6 Data can reverse the preference

Consider $J$ groups with observations $y_j\mid\theta_j\sim N(\theta_j,s_j^2)$ and group effects $\theta_j\mid\mu,\tau\sim N(\mu,\tau^2)$, independently conditional on $\mu,\tau$, with known $s_j>0$. Give $\mu$ and $\tau>0$ independent proper priors. In the centered representation we sample $(\mu,\tau,\theta_1,\ldots,\theta_J)$. In the noncentered representation we sample $(\mu,\tau,z_1,\ldots,z_J)$ with $z_j\sim N(0,1)$ and $\theta_j=\mu+\tau z_j$.

Ignoring constants independent of all parameters, the noncentered log density is

$$
\log p(\mu)+\log p(\tau)-\frac12\sum_j z_j^2
-\frac12\sum_j\left[\frac{(y_j-\mu-\tau z_j)^2}{s_j^2}+2\log s_j\right].
$$

The $z_j$ are independent *a priori*, conditional on the hyperparameters. They are generally dependent on $(\mu,\tau)$ *a posteriori*. In particular, precise data impose $\mu+\tau z_j\approx y_j$, a curved constraint in noncentered coordinates. When observations are weak compared with the prior scale, the likelihood imposes less constraint and the simple base prior is attractive. The rough information ratio $\tau^2/s_j^2$ is a useful guide: small values often favor noncentering, large values often favor centering. It is not an efficiency theorem or a universal cutoff; other groups and hyperpriors affect the posterior for $\tau$. The centered/noncentered framework was developed systematically by [Papaspiliopoulos, Roberts, and Sköld](https://arxiv.org/abs/0708.3797).

**Worked example B: weak and strong observations.** Temporarily fix $\mu=0$, $\tau=1$, and observe $y=2$. Completing the square gives

$$
\theta\mid y\sim N\!\left(\frac{y}{1+s^2},\frac{s^2}{1+s^2}\right).
$$

For $s=4$, the posterior mean is $2/17\approx0.118$ and variance $16/17\approx0.941$: the observation scarcely changes the unit-normal prior. For $s=0.1$, the mean is $2/1.01\approx1.980$ and variance $0.01/1.01\approx0.00990$: the data pin $\theta$ near $2$. With unknown $\mu,\tau$, that strong observation pins $\mu+\tau z$ near $2$ in the noncentered system. This fixed-hyperparameter calculation quantifies the relative information; it does not itself measure mixing for the full model.

To see where the formula comes from, multiply the normal prior kernel $\exp(-\theta^2/2)$ by the likelihood kernel $\exp[-(y-\theta)^2/(2s^2)]$. The coefficient of $\theta^2/2$ is $1+s^{-2}$, so the posterior precision is $1+s^{-2}$. Its variance is the reciprocal, $s^2/(1+s^2)$, and its mean is that variance times the likelihood's linear coefficient $y/s^2$, giving $y/(1+s^2)$. This calculation also explains the information ratio: prior precision is $1$ here, likelihood precision is $s^{-2}$. Releasing $\tau$ changes prior precision to $\tau^{-2}$ and introduces dependence through its uncertainty.

Groups may have very different $s_j$. A fixed hybrid choice can center precise groups and noncenter weak groups, or a partial noncentering can interpolate. Make such a choice during model development or warmup and then keep the sampling target fixed. Compare alternatives on *the same* functions of the original $\theta_j,\mu,\tau$, including posterior predictions. Changing coordinates does not change those quantities when the algebra is correct.

### 16.6.1 A partial transformation derived from the information balance

The Gaussian hierarchy lets us turn this guidance into a calculation. The idea of adjusting a parameterization to the information in the observations is developed in [Papaspiliopoulos, Roberts, and Sköld, Section 5.1](https://arxiv.org/pdf/0708.3797). Here we derive a location transformation for this particular model; its exact cancellation should not be assumed for other likelihoods.

First hold $\tau$ fixed while allowing $\mu$ to vary. Define

$$
w_j=\frac{s_j^2}{s_j^2+\tau^2},\qquad
V_j=\frac{s_j^2\tau^2}{s_j^2+\tau^2}.
$$

Completing the same square as in Example B, now retaining $\mu$, gives

$$
\theta_j\mid\mu,\tau,y_j
\sim N\!\left(w_j\mu+(1-w_j)y_j,V_j\right).
$$

Let $\eta_j=\theta_j-w_j\mu$. Its conditional posterior is
$N((1-w_j)y_j,V_j)$, which no longer depends on $\mu$. Because the groups are conditionally independent, the vector $\eta$ and $\mu$ are independent *conditional on $\tau$ and the data*. This conclusion follows from the entire conditional density, not merely from zero covariance. It holds for any proper prior on $\mu$ in this hierarchy.

The cancellation can also be seen in the quadratic geometry. For a candidate weight $w$, substituting $\theta=\eta+w\mu$ into the likelihood and group-prior negative log density gives

$$
\frac{(y-\eta-w\mu)^2}{2s^2}
+\frac{[\eta-(1-w)\mu]^2}{2\tau^2}.
$$

The coefficient of $\eta\mu$ is $w/s^2-(1-w)/\tau^2$. Setting it to zero yields exactly $w=s^2/(s^2+\tau^2)$. With weak observations $s\gg\tau$, $w$ approaches one and $\eta$ approaches the prior residual $\theta-\mu$. With precise observations $s\ll\tau$, $w$ approaches zero and $\eta$ approaches the centered coordinate $\theta$. This is partial **location** noncentering: the residual still has units of $\theta$ and has not been divided by $\tau$.

For $\tau=1$ and $y=2$, the weak case $s=4$ has $w=16/17$, $V=16/17$, and $\mathbb E[\eta\mid\tau,y]=2/17$. The strong case $s=0.1$ has $w=1/101$, $V=1/101$, and mean $200/101$. At the intermediate value $s=1$, the map subtracts half of $\mu$ and $\eta\mid\tau,y\sim N(1,1/2)$. These are exact posterior calculations, not measured sampler speedups.

If $\tau$ is unknown, we may still define the single, fixed map
$\theta_j=\eta_j+w_j(\tau)\mu$. Its joint Jacobian in the order $(\mu,\tau,\eta)$ is block triangular with diagonal blocks $I_2$ and $I_J$, so its determinant is one. The derivatives of $w_j(\tau)\mu$ with respect to $\tau$ are present in the lower-left block. Dependence of the formula on the current state does not make it adaptive: the same map and transformed density are used at every iteration. In contrast, learning a new formula from the evolving history would require the adaptation reasoning of [Chapter 15](15-adaptation.md).

The remaining dependence on $\tau$ matters. Both the mean $(1-w_j)y_j$ and variance $V_j$ change with $\tau$; partial location noncentering therefore does not remove a scale funnel. In particular, $V_j\to0$ as $\tau\to0$. One must also retain the induced prior $\eta_j\mid\mu,\tau\sim N((1-w_j)\mu,\tau^2)$, or substitute into the complete centered density. Assigning independent standard-normal priors to these $\eta_j$ would specify a different model. The example checks the equivalent factorizations at several values of $\mu$, $\tau$, $s$, and $\eta$ before any sampling comparison.

## 16.7 Constraint transforms and stable arithmetic

Transforms also let a sampler operate on unconstrained real coordinates. For a positive $x$, take $x=e^z$. Then $dx/dz=e^z$, and a density specified on $x>0$ becomes

$$
\log\pi_z(z)=\log\pi_x(e^z)+z.
$$

The $+z$ is essential. If $X\sim\operatorname{Exp}(\lambda)$, then $\log\pi_z(z)=\log\lambda+z-\lambda e^z$. Simply evaluating the exponential density at $e^z$ without $+z$ creates a different, in fact nonintegrable, function as $z\to-\infty$.

For $a<x<b$, let $s(z)=1/(1+e^{-z})$ and $x=a+(b-a)s(z)$. The derivative is $(b-a)s(z)[1-s(z)]$, so

$$
\log\pi_z(z)=\log\pi_x(x)+\log(b-a)+\log s(z)+\log[1-s(z)].
$$

For large $|z|$, direct evaluation of $1-s(z)$ can round to zero. A stable log Jacobian is $\log(b-a)-\operatorname{softplus}(-z)-\operatorname{softplus}(z)$, where $\operatorname{softplus}(t)=\log(1+e^t)$ is evaluated as $\max(0,t)+\log(1+e^{-|t|})$. Even with stable logs, finite precision can round the transformed $x$ to a boundary; [Chapter 04](04-numerics.md) treats numerical limits more generally. The [Stan constraint transform reference](https://mc-stan.org/docs/reference-manual/transforms.html) documents these map directions and finite-accuracy issues.

A $K$-component simplex has only $K-1$ free coordinates. A transform from $\mathbb R^{K-1}$ to its interior needs a volume factor in those free coordinates; a $K\times K$ determinant for the constrained vector is not appropriate. Constraints on matrices and curved manifolds need further care, taken up in [Chapter 23](23-riemannian.md).

## 16.8 Ridges and symmetries are model questions

Suppose data enter a likelihood only through $u=\alpha+\beta$. Introduce $w=\alpha-\beta$, so $\alpha=(u+w)/2$ and $\beta=(u-w)/2$. The likelihood is constant as $w$ varies. With flat priors on both original parameters, the posterior integral contains an infinite integral over $w$ and is improper (assuming the likelihood is positive over a set of $u$ with positive measure). No whitening or clever proposal can sample a probability distribution that does not exist.

Proper priors on $\alpha$ and $\beta$ can make the posterior proper. More precisely, $p(w\mid u,y)=p(w\mid u)$: the likelihood adds no information about $w$ at fixed $u$. The marginal distribution of $w$ can nevertheless change with data if the prior links $u$ and $w$. For example, independent zero-mean normal priors with variances $A$ and $B$ give $\operatorname{Cov}(u,w)=A-B$ and $\mathbb E[w\mid u]=(A-B)u/(A+B)$. When $A\ne B$, learning about $u$ can shift the posterior mean of $w$ through this prior relationship. This indirect update does not make the likelihood identify $w$. Alternatively, if only $u$ is scientifically meaningful, define the model directly in terms of $u$. These are modeling decisions. The [Stan discussion of problematic posteriors](https://mc-stan.org/docs/stan-users-guide/problematic-posteriors.html) gives related examples of collinearity and nonidentifiability.

Mixture models have another symmetry: permuting component labels often leaves the likelihood and predictive distribution unchanged. A component-specific mean can therefore have a label-dependent posterior, while the mixture predictive density is invariant. [Chapter 38](38-mixtures.md) returns to these estimands. A smooth bijection preserves connectedness of support, but it can change density heights, mode locations, and even the number of density modes; do not treat visual modality as a coordinate-free property. Label switching and large barriers may remain serious computational issues after an otherwise helpful transform.

## 16.9 Verify equivalence, then compare cost

A numerical comparison should begin with a matched-point check. Given $z$ and $x=T(z)$, calculate $\log\widetilde\pi_z(z)$ in the transformed implementation and $\log\widetilde\pi_x(x)+\log|\det DT(z)|$ in the original implementation. Their difference should be a constant across several points, up to floating-point error. If normalizing constants are included on both sides, the difference should be zero. A varying difference is a target-correctness bug, not poor mixing. The executable example below checks the Gaussian, the funnel, and the partially noncentered hierarchy using independently written density formulas.

After equivalence, compare estimands such as $\mathbb E[\theta_j\mid y]$, $P(\theta_j>c\mid y)$, or a posterior predictive probability. Transform noncentered draws back to the original scientific scale. Report Monte Carlo standard errors and effective sample sizes for those *same functions*, using the methods in [Chapters 13](13-mc-error.md) and [14](14-diagnostics.md). Compare effective draws per density evaluation or elapsed second, accounting for warmup, factorization, and transformation cost. The appearance of a trace in a different coordinate is not itself a fair comparison. Diagnostics that look good are useful evidence about the observed runs, never proof of convergence.

There are two separate error questions. A Metropolis or correctly specified Gibbs update can have the transformed target exactly invariant, yet a finite run may remain biased by its starting region and have large Monte Carlo error. An approximate numerical method can additionally target a discretized distribution unless it includes an exact correction, as later chapters discuss. Neither issue is fixed by changing the prior to make sampling look easier; a changed prior changes the inference. A density equivalence check addresses target specification, while multiple chains, error estimates, and predictive checks address different remaining risks. No single check certifies the complete workflow.

The script [examples/ch16.py](examples/ch16.py) also contrasts two fixed random-walk proposals on the Gaussian example. It prints acceptance and a lag-one correlation for a common original-scale estimand. Those numbers are an illustration of movement under chosen scales, not production diagnostics or a universal ranking of parameterizations. The underlying Metropolis kernels, when correctly implemented, each have their specified target as an invariant distribution. Finite-run error can nevertheless differ greatly. There is no discretization approximation in this exact Metropolis example; the scientific model and its assumptions are the same in both coordinates.

## 16.10 Explore the funnel in the lab

The lab generates independent $v\sim N(0,s^2)$ and $z\sim N(0,1)$ draws, then plots $(v,x)$ with $x=e^{v/2}z$ beside $(v,z)$. Change the **scale of $v$**. Observe how the spread of $x$ changes across negative and positive $v$, while the spread of $z$ stays approximately constant. The two vertical axes have different meanings and scales. The lab shows the no-data prior transformation; it does not run MCMC or establish which parameterization is faster with a likelihood.

<div class="mcmc-lab" data-lab="geometry"></div>

For an applied repair, first check that the target is proper and support is represented correctly. Inspect units and fixed correlations, then look for latent scales whose conditional spread changes with other parameters. Derive any proposed transform and check its Jacobian at matched points. Re-run chains and compare common scientific estimands, their Monte Carlo errors, and model checks. If trouble persists, investigate symmetries, weak identification, and misspecification. Changing coordinates preserves the intended model; changing priors or likelihoods does not, and calls for the [workflow checks in Chapter 17](17-workflow.md). Gradient-based methods in [Chapter 20](20-hmc.md) and the [diagnostics of Chapter 22](22-hmc-diagnostics.md) make geometry especially visible, but no sampler name substitutes for this reasoning.

## Exercises

<div class="exercise" id="mcmc-16-geometry-ex-1">

**1. Positive transform.** Let $X\sim\operatorname{Exp}(\lambda)$, $\lambda>0$, and $X=e^Z$. Derive the normalized density of $Z$. What happens if the Jacobian term is omitted?

<details>
<summary>Solution</summary>

The derivative is $e^z$, hence $p_Z(z)=\lambda e^{z-\lambda e^z}$ on $\mathbb R$. Substitution $x=e^z$ gives integral $\int_0^\infty\lambda e^{-\lambda x}\,dx=1$. Without $e^z$, the proposed function approaches $\lambda$ as $z\to-\infty$, so its integral diverges.

</details>

</div>

<div class="exercise" id="mcmc-16-geometry-ex-2">

**2. Gaussian factor.** Verify $LL^{\mathsf T}=\Sigma$ in Example A and compute the squared Mahalanobis distance of $x=L(1,-1)^{\mathsf T}$ without inverting $\Sigma$.

<details>
<summary>Solution</summary>

The product has entries $1$, $0.99$, and $0.99^2+0.0199=1$, as required. Solving $Lz=x$ returns $z=(1,-1)$, so $x^{\mathsf T}\Sigma^{-1}x=z^{\mathsf T}z=1^2+(-1)^2=2$.

</details>

</div>

<div class="exercise" id="mcmc-16-geometry-ex-3">

**3. Joint funnel Jacobian.** For $T(v,z)=(v,e^{v/2}z)$ with $z\in\mathbb R^d$, write the full Jacobian and its determinant. Why does the derivative of $x$ with respect to $v$ not change the determinant?

<details>
<summary>Solution</summary>

The matrix is $\begin{pmatrix}1&0\\ e^{v/2}z/2&e^{v/2}I_d\end{pmatrix}$. It is block lower triangular, so its determinant is the product of diagonal-block determinants: $e^{dv/2}$. The lower-left derivative is present, but contributes no term to this determinant.

</details>

</div>

<div class="exercise" id="mcmc-16-geometry-ex-4">

**4. Zero correlation, strong dependence.** Prove $\operatorname{Cov}(v,x_i)=0$ in the funnel and give a quantity that demonstrates dependence.

<details>
<summary>Solution</summary>

Since $\mathbb E[x_i\mid v]=0$ and $\mathbb E[v]=\mathbb E[x_i]=0$, iterated expectation gives $\operatorname{Cov}(v,x_i)=\mathbb E[vx_i]=0$. But $\mathbb E[x_i^2\mid v]=e^v$, which is not constant in $v$. Independence would require this conditional expectation to equal the marginal second moment almost surely. All these moments are finite because $v$ is normal.

</details>

</div>

<div class="exercise" id="mcmc-16-geometry-ex-5">

**5. Mixed group precision.** One hierarchy has groups with $s_j=0.1\tau$ and others with $s_j=10\tau$ near typical posterior values of $\tau$. Suggest a fixed parameterization for each type and explain what would validate the choice.

<details>
<summary>Solution</summary>

The first type has $\tau^2/s_j^2\approx100$ and precise data, so centered coordinates are a reasonable candidate. The second has ratio about $0.01$ and weak data, so noncentered coordinates are a reasonable candidate. These ratios vary when $\tau$ is unknown, and interactions among groups matter. Keep any chosen hybrid map fixed during retained sampling, verify the transformed log density, then compare Monte Carlo errors per cost for common original-scale estimands across well-run chains.

</details>

</div>

<div class="exercise" id="mcmc-16-geometry-ex-6">

**6. An unidentified difference.** A likelihood depends only on $\alpha+\beta$, and both parameters have flat improper priors. Can a rotation and whitening make the posterior sampleable? What changes could define a proper target?

<details>
<summary>Solution</summary>

Let $u=\alpha+\beta$ and $w=\alpha-\beta$. The likelihood does not depend on $w$, and the flat prior gives an infinite integral over $w$, so the posterior is improper. A bijective rotation changes the coordinates, not the infinite mass. Proper priors that constrain $w$, or a justified model expressed only through identifiable $u$, can define a proper target, provided the resulting full posterior normalizes.

</details>

</div>

<div class="exercise" id="mcmc-16-geometry-ex-7">

**7. A partial location change.** For one group with known $s,\tau>0$, put $\theta=\eta+w\mu$. Find the weight that eliminates the mixed $\eta\mu$ term in the posterior negative log density. For $s=\tau=1$, $y=2$, give the conditional law of $\eta$ and explain why it is generally incorrect to assign $\eta$ a standard-normal prior.

<details>
<summary>Solution</summary>

The likelihood contributes $w\eta\mu/s^2$ and the group prior contributes $-(1-w)\eta\mu/\tau^2$. Their sum vanishes when $w=s^2/(s^2+\tau^2)$. Completing the square then gives $\eta\mid\mu,\tau,y\sim N((1-w)y,s^2\tau^2/(s^2+\tau^2))$. For the stated numbers this is $N(1,1/2)$, independent of $\mu$ in the posterior. Its induced *prior* is instead $N((1-w)\mu,\tau^2)=N(\mu/2,1)$ conditional on $\mu$. The map has determinant one, so substituting it into the original density preserves the model; replacing its prior by $N(0,1)$ does not. If $\tau$ is subsequently made unknown, dependence on $\tau$ remains.

</details>

</div>

## Key takeaways

- A correct coordinate change preserves event probabilities and original-scale expectations through its Jacobian; it can change density shapes and sampler efficiency.
- Whitening solves the fixed covariance geometry of an exact Gaussian. A funnel has a width that varies with a latent scale and calls for a different map.
- Noncentering removes the no-data funnel exactly. With observations, the balance between prior and likelihood information determines which coordinates are easier.
- Check transformed densities at matched points, then judge alternatives on the same scientific estimands and computational cost.
- Identifiability, improper targets, and model assumptions require model-level decisions. Diagnostics alone cannot repair them or prove convergence.
