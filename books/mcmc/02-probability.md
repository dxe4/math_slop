# 02. Probability for simulation

**Learning goals.** By the end of this chapter, you should be able to turn a probability law into an expectation, distinguish a density from probability mass, condition a joint distribution, transform coordinates with the correct Jacobian, work with a correlated Gaussian, and explain why the highest density point can be far from where draws usually lie.

**Prerequisites.** [Chapter 01](01-probability-computation.md), single-variable calculus, introductory probability, and basic matrix multiplication. We use $\pi$ for a probability law, $p$ for one of its densities, and $f$ for a quantity whose expectation we want. None of the identities below establishes that a simulation algorithm has converged; they describe the target against which an algorithm can later be checked.

## 1. A probability law assigns mass to events

Imagine a spinner with outcomes $a,b,c$ and probabilities $0.2,0.3,0.5$. The probability of the event $\{a,c\}$ is $0.7$. Now imagine selecting a point uniformly from $(0,0.1)$. The probability of $(0,0.02)$ is $0.2$. Both stories assign probabilities to *sets* of outcomes; the second uses an integral because its outcomes form a continuum. In Euclidean spaces, the events we use are normally Borel sets, generated from open sets by complements and countable unions. This is enough mathematical structure for intervals, balls, and regions defined by ordinary inequalities.

A density is a way of calculating the mass assigned to an event. Relative to a chosen reference measure $\mu$,

$$
\pi(A)=\int_A p(x)\,\mu(dx),\qquad p(x)\geq 0,\qquad \int p(x)\,\mu(dx)=1.
$$

For the spinner, $\mu$ is counting measure and the integral is a sum. For the uniform point, $\mu$ is length (Lebesgue) measure and $p(x)=10$ on $(0,0.1)$. A density can exceed one: its integral over a region, not its height at a point, is the probability. The density at one point also depends on the coordinate system; the probability of the corresponding event does not.

An event holds **almost surely** when its complement has probability zero. A continuously distributed point equals any specified number with probability zero, although that number remains a possible value in the mathematical state space. “Almost surely” does not mean “with high probability”; a tiny positive probability is still different from zero. These distinctions matter whenever a formula holds except at boundaries or at exceptional values of a conditioning variable. The event-based viewpoint is developed more fully in [Dembo's probability notes](https://adembo.su.domains/stat-310b/lnotes.pdf) and [Betancourt's treatment of general probability spaces](https://betanalpha.github.io/assets/chapters_html/probability_on_general_spaces.html).

## 2. Reference measures, atoms, and support

The reference measure tells us what the density is measured *against*. Counting measure treats isolated values as units of mass; Lebesgue measure treats lengths or volumes as units. A distribution can need both. Suppose $X=0$ with probability $0.3$, and otherwise $X$ is exponential with rate $2$. One convenient reference measure is $\mu=\delta_0+\lambda$ on $[0,\infty)$, where $\delta_0$ counts the atom at zero and $\lambda$ measures length. A density relative to this $\mu$ is

$$
p(0)=0.3,\qquad p(x)=0.7(2e^{-2x})\quad(x>0).
$$

The value at zero belongs to the atomic part; integrating the continuous expression over positive $x$ gives $0.7$. A Lebesgue density alone cannot represent the $0.3$ atom. Conversely, assigning an arbitrary value to a continuous density at zero changes no probability. Before programming a target, decide whether its coordinates are discrete, continuous, or mixed. A sampler that moves only by continuous perturbations cannot reach an isolated atom by chance.

In a Euclidean space, the **topological support** of $\pi$ consists of points for which *every* open neighborhood has positive probability. It is a property of the law. The set where one selected version of $p$ is positive can differ on null sets: changing a density at one point changes that set but not the law. For computations we often also describe the domain on which a particular density formula can be evaluated. These are related descriptions, but they answer different questions. For the mixture above, zero is in the support both because it has an atom and because positive observations can approach it.

Many algorithms use a nonnegative measurable unnormalized density $\widetilde p$. It defines a probability law only if

$$
0<Z=\int \widetilde p(x)\,\mu(dx)<\infty,\qquad p(x)=\frac{\widetilde p(x)}{Z}.
$$

The unknown $Z$ may cancel from a ratio of densities, but cancellation does not make an improper target proper. For example, $\widetilde p(x)=1/x$ on $(1,\infty)$ has infinite integral. It is a computable positive function but cannot be sampled as a probability distribution without changing the model. [Chapter 03](03-bayesian-targets.md) revisits this issue for posteriors.

## 3. Expectations are questions about a law

Choose a function $f$ to encode the scientific or computational question. The estimand is the quantity we want to calculate, here its expectation

$$
\mathbb E_\pi[f(X)]=\int f(x)\,\pi(dx)=\int f(x)p(x)\,\mu(dx).
$$

The second expression is available when a suitable density exists. An event probability is a special case: $\pi(A)=\mathbb E_\pi[\mathbf 1_A(X)]$. Thus a simulator can estimate a mean, a tail probability, or a nonlinear loss by changing $f$, even when the target $\pi$ is fixed. This is the bridge from probability to the Monte Carlo averages of [Chapter 05](05-monte-carlo.md).

For a finite signed expectation, require $\mathbb E|f(X)|<\infty$. A distribution need not supply every requested moment. A standard Cauchy variable has a perfectly valid density, but its positive and negative first-moment integrals both diverge. Their apparent cancellation is not a finite expectation. Variance requires $\mathbb E[X^2]<\infty$ and is then $\mathbb E[(X-\mathbb E X)^2]$. These conditions should be stated before invoking a variance-based error estimate.

One useful check on expectations is Jensen's inequality. If $f$ is convex, $X$ is integrable, and $f(X)$ is integrable, then $f(\mathbb E X)\leq\mathbb E f(X)$. For instance, under the needed exponential moment, $\exp(\mathbb E X)\leq\mathbb E e^X$. A plug-in transformation of the mean generally does not equal the mean of a transformation. In the Gaussian example below, $\mathbb E[X_1^2\mid X_2]$ will similarly contain both a squared conditional mean and a conditional variance.

## 4. Joint, marginal, and conditional laws

Suppose $(X,Y)$ has a joint density $p_{X,Y}$ relative to two-dimensional Lebesgue measure. To obtain the density of $X$, add the mass of all compatible values of $Y$:

$$
p_X(x)=\int_{\mathbb R}p_{X,Y}(x,y)\,dy.
$$

At an $x$ for which $0<p_X(x)<\infty$, a version of the conditional density is

$$
p_{Y\mid X}(y\mid x)=\frac{p_{X,Y}(x,y)}{p_X(x)}.
$$

Integrating this conditional density over $y$ gives one. It describes how uncertainty about $Y$ changes after observing $X=x$. For continuous $X$, the event $\{X=x\}$ itself has probability zero; the formula is a density-based conditional version, not ordinary division by $P(X=x)$. Different versions can disagree at exceptional $x$ values with zero marginal probability, while all giving the same probabilities almost surely.

Independence means the joint law factors into its marginals; with densities, $p_{X,Y}(x,y)=p_X(x)p_Y(y)$ almost everywhere. Independent square-integrable variables have zero covariance, but zero covariance alone does not imply independence. Let $X$ be uniform on $(-1,1)$ and $Y=X^2$. Symmetry gives $\mathbb E X=0$ and $\mathbb E[XY]=\mathbb E[X^3]=0$, hence $\operatorname{Cov}(X,Y)=0$. Yet $Y$ is completely determined by $X$. This example has no ordinary two-dimensional Lebesgue density: its probability lies on the curve $y=x^2$, which has area zero. Conditional laws remain meaningful even when a joint density of that kind does not exist.

## 5. Conditional expectation reduces information

Suppose we want $f(X,Y)$ but observe only $X$. The function

$$
g(X)=\mathbb E[f(X,Y)\mid X]
$$

is the average over the remaining uncertainty in $Y$ at the observed $X$. Before $X$ is known, $g(X)$ is still a random variable. Under integrability, the **tower identity** says $\mathbb E[g(X)]=\mathbb E[f(X,Y)]$. In a density example, this follows by first integrating $f(x,y)$ against $p_{Y\mid X}(y\mid x)$, then integrating the result against $p_X(x)$. The two-stage calculation is the original joint integral with its order made explicit.

For square-integrable $Y$, conditioning also partitions variance:

$$
\operatorname{Var}(Y)=\mathbb E[\operatorname{Var}(Y\mid X)]
+\operatorname{Var}(\mathbb E[Y\mid X]).
$$

To see why, put $m(X)=\mathbb E[Y\mid X]$ and write $Y-\mathbb E Y=(Y-m(X))+(m(X)-\mathbb E Y)$. Square and take expectations. The cross term vanishes because $\mathbb E[Y-m(X)\mid X]=0$; the two remaining terms are the displayed within-$X$ and between-$X$ variances. A related result is $\operatorname{Var}(\mathbb E[Y\mid X])\leq\operatorname{Var}(Y)$.

More formally, conditioning on information $\mathcal G$ produces a $\mathcal G$-measurable, integrable variable $\mathbb E[Y\mid\mathcal G]$ whose integral over every event in $\mathcal G$ matches that of $Y$. For integrable $Y$ it exists and is unique almost surely. The formal definition matters when the observed information cannot be summarized by an ordinary density. In computation, replacing a noisy quantity with a tractable conditional expectation can reduce variance; [Chapter 06](06-variance-reduction.md) develops that idea. Conditional distributions also power the Gibbs updates in [Chapter 10](10-gibbs.md). See [Dembo's conditional-expectation chapters](https://adembo.su.domains/stat-310b/lnotes.pdf) for the measure-theoretic statement.

## 6. Transforming coordinates without changing probabilities

Let $T:U\to V$ be a continuously differentiable bijection between open subsets of $\mathbb R^d$, with a continuously differentiable inverse. If $X$ has Lebesgue density $p_X$ on $U$ and $Y=T(X)$, then probability conservation gives

$$
P(Y\in B)=P(X\in T^{-1}(B))
=\int_B p_X(T^{-1}(y))\left|\det D T^{-1}(y)\right|\,dy.
$$

Consequently,

$$
p_Y(y)=p_X(T^{-1}(y))\left|\det D T^{-1}(y)\right|,\qquad y\in V.
$$

The determinant measures how a tiny volume in $y$ coordinates corresponds to volume in $x$ coordinates. In one dimension, it is the absolute derivative $|dx/dy|$. Writing the inverse explicitly is a reliable way to choose the direction. The absolute value keeps orientation reversal from producing a negative density. The conditions above justify a single inverse branch. A map with finitely many smooth invertible branches needs a sum of their contributions wherever those branches apply. More general maps can create atoms: mapping every negative input to zero places all of its negative probability at zero, which no Lebesgue density can represent. This is the same change-of-variables rule used in [Stan's reference manual](https://mc-stan.org/docs/2_30/reference-manual/change-of-variables.html).

If stored draws $x_i$ are transformed to $y_i=T(x_i)$, they already have the transformed distribution: no weighting step is needed. A Jacobian *is* needed when evaluating a density in new coordinates, such as when an unconstrained algorithm represents a positive parameter $x$ by $u=\log x$. Confusing these two operations is a common source of incorrect targets. A practical discussion appears in [Stan's reparameterization guide](https://mc-stan.org/docs/2_34/stan-users-guide/reparameterization.html).

### Worked example: an exponential variable in log coordinates

Let $X\sim\operatorname{Exp}(2)$, so $p_X(x)=2e^{-2x}$ for $x>0$, and let $U=\log X$. The inverse is $x=e^u$, with $dx/du=e^u$. Therefore

$$
p_U(u)=2e^{-2e^u}e^u=2\exp(u-2e^u),\qquad -\infty<u<\infty.
$$

Its log-density has derivative $1-2e^u$, so its mode is $u=-\log 2$, corresponding to $x=1/2$. Meanwhile the density of $X$ decreases from its boundary supremum at $x=0$. There is no contradiction: density height changes when volume is measured in different coordinates. Both coordinates give the same event probability,

$$
P(U\leq0)=P(X\leq1)=\int_0^1 2e^{-2x}\,dx=1-e^{-2}\approx0.864665.
$$

Omit $e^u$ from $p_U$ and the supposed density approaches $2$ as $u\to-\infty$, so its integral over the left half-line diverges. A missing Jacobian has created an improper function. This is also a useful unit test: transform an event boundary in both coordinate systems and compare its probability.

For a many-to-one illustration, if $Z=X^2$ with $X$ standard normal, each $z>0$ has two preimages, $\sqrt z$ and $-\sqrt z$. Both contribute density. Applying a one-branch formula would lose half the mass; Exercise 4 performs the calculation.

## 7. Multivariate normal geometry

For a $d$-vector $X$, mean $\mu$, and symmetric positive-definite covariance matrix $\Sigma$, the normal density relative to $d$-dimensional Lebesgue measure is

$$
p(x)=\frac{\exp\left[-\frac12(x-\mu)^\mathsf T\Sigma^{-1}(x-\mu)\right]}
{(2\pi)^{d/2}|\Sigma|^{1/2}}.
$$

The quadratic form is squared Mahalanobis distance. Points with equal quadratic form lie on ellipsoids centered at $\mu$. An eigenvector of $\Sigma$ gives a principal direction, and its eigenvalue is the variance in that direction. Thus a large eigenvalue stretches the ellipse, while a small one narrows it. The precision matrix $\Sigma^{-1}$ weights these directions in the exponent; its off-diagonal structure also has conditional-dependence interpretations for Gaussian vectors.

If $Z\sim N(0,I_d)$ and a matrix $L$ satisfies $LL^\mathsf T=\Sigma$, then $X=\mu+LZ$ has mean $\mu$ and covariance $L\operatorname{Cov}(Z)L^\mathsf T=\Sigma$. This is an exact distributional identity, up to the finite precision of an implementation. A positive-definite $\Sigma$ admits a Cholesky factor $L$. In numerical software, solve linear systems or use a factorization instead of explicitly forming $\Sigma^{-1}$ merely to evaluate the quadratic form.

A positive-semidefinite but rank-deficient $\Sigma$ still gives a valid Gaussian law through a suitable lower-rank $LZ$. Its outcomes lie on an affine subspace. It has no ordinary density relative to full-dimensional Lebesgue measure, so the determinant formula above does not apply. The geometric distinction is much like the curve-supported example in Section 4. [Taboga's treatment of partitioned multivariate normals](https://www.statlect.com/probability-distributions/multivariate-normal-distribution-partitioning) provides a fuller derivation of marginal and conditional Gaussian laws.

## 8. Gaussian conditioning and whitening

Partition a jointly Gaussian vector into $X_A$ and $X_B$, with corresponding mean blocks and covariance blocks. If $\Sigma$ is positive definite, then $\Sigma_{BB}$ is invertible. At a value $X_B=b$, the conditional law is normal with

$$
\mathbb E[X_A\mid X_B=b]
=\mu_A+\Sigma_{AB}\Sigma_{BB}^{-1}(b-\mu_B),
$$

$$
\operatorname{Cov}(X_A\mid X_B=b)
=\Sigma_{AA}-\Sigma_{AB}\Sigma_{BB}^{-1}\Sigma_{BA}.
$$

One way to understand the formulas is to subtract the linear prediction $\Sigma_{AB}\Sigma_{BB}^{-1}(X_B-\mu_B)$ from $X_A$. The residual has zero covariance with $X_B$; jointly Gaussian, uncorrelated blocks are independent. Its covariance is the displayed difference, also called a Schur complement. The conditional variance does not depend on the observed value $b$, although the conditional mean does. These formulas describe a conditional-density version at each $b$ and can be verified by completing the square in the joint Gaussian exponent.

### Worked example: a correlated observation

Take

$$
\mu=\begin{pmatrix}1\\-1\end{pmatrix},\qquad
\Sigma=\begin{pmatrix}4&3\\3&9\end{pmatrix},
$$

and observe $X_2=2$. Marginally, $X_1\sim N(1,4)$. Conditioning changes its mean to $1+(3/9)(2-(-1))=2$ and its variance to $4-3^2/9=3$. Hence

$$
X_1\mid X_2=2\sim N(2,3),\qquad
\mathbb E[X_1^2\mid X_2=2]=3+2^2=7.
$$

The marginal second moment is $4+1^2=5$. Observing $X_2$ reduces uncertainty about $X_1$ from variance $4$ to $3$, but moves the mean enough that the conditional *raw second moment* rises from $5$ to $7$. “Less uncertain” does not imply that every expected nonlinear function decreases.

We can check the conditional calculation directly in the density. Put $a=x_1-1$ and $b=x_2+1$. Since $|\Sigma|=27$, completing the square gives

$$
(x-\mu)^\mathsf T\Sigma^{-1}(x-\mu)
=\frac{9a^2-6ab+4b^2}{27}
=\frac{(a-b/3)^2}{3}+\frac{b^2}{9}.
$$

The normalizing constant also factors: $2\pi\sqrt{27}=\sqrt{2\pi(3)}\sqrt{2\pi(9)}$. Thus the joint density is a $N(-1,9)$ density in $x_2$ times a $N(1+b/3,3)$ conditional density in $x_1$. Dividing by the marginal removes precisely the first factor. This is the two-dimensional instance of the [Gaussian density factorization](https://www.statlect.com/probability-distributions/multivariate-normal-distribution-partitioning).

For independent standard normals $Z_1,Z_2$, a direct generator is

$$
X_1=1+2Z_1,\qquad X_2=-1+1.5Z_1+\sqrt{6.75}\,Z_2.
$$

It gives $\operatorname{Var}(X_1)=4$, $\operatorname{Var}(X_2)=2.25+6.75=9$, and $\operatorname{Cov}(X_1,X_2)=2(1.5)=3$. Its conditional residual is

$$
R=X_1-1-\tfrac13(X_2+1)
=1.5Z_1-\tfrac{\sqrt{6.75}}3Z_2.
$$

The residual has variance $3$ and zero covariance with $X_2$, so Gaussian independence recovers the conditional result without selecting observations in a narrow numerical bin.

The inverse affine transformation $Z=L^{-1}(X-\mu)$ is called **whitening**. It maps this normal ellipse to a spherical standard normal in $Z$ coordinates. It preserves event probabilities when corresponding regions are transformed, but it changes the numerical density and geometry. Whitening can make a target easier for some samplers, yet it is not a guarantee of good performance for non-Gaussian or multimodal targets. [Chapter 16](16-geometry.md) studies that computational question.

The geometry lab draws a different, funnel-shaped prior and displays centered coordinates $(v,x)$ beside noncentered $(v,z)$, where $x=e^{v/2}z$. Change the scale of $v$ and watch how the space occupied by the draws changes in the two coordinates. These are independent draws; the lab illustrates a coordinate transformation, not Gaussian conditioning, sampler performance, or the high-dimensional shell calculation below.

<div class="mcmc-lab" data-lab="geometry"></div>

## 9. A density mode is not a typical draw

Let $X\sim N(0,I_d)$. Its joint density is maximized at the origin. Yet the radial distance $R=\|X\|$ includes the volume of all directions at a given distance. A thin spherical shell at radius $r$ has surface area proportional to $r^{d-1}$. Multiplying that factor by the Gaussian density along the shell gives

$$
p_R(r)\ \propto\ r^{d-1}e^{-r^2/2},\qquad r>0.
$$

For $d>1$, differentiating its log gives $(d-1)/r-r=0$, so the radial density is maximized at $r=\sqrt{d-1}$. The origin is the mode of the **joint density**, while $\sqrt{d-1}$ is the mode of the **radius density**. Neither is a universal definition of a “typical set”; the second already incorporates the volume of a family of shells. [Betancourt's HMC introduction](https://arxiv.org/html/1701.02434v2) motivates this density-versus-volume distinction in high-dimensional computation.

The squared radius is $R^2=\sum_{j=1}^d X_j^2$. Independence and the standard-normal moments $\mathbb E X_j^2=1$ and $\operatorname{Var}(X_j^2)=2$ give

$$
\mathbb E[R^2]=d,\qquad \operatorname{Var}(R^2)=2d.
$$

Chebyshev's inequality therefore supplies a precise, if conservative, shell statement:

$$
P\left(\left|\frac{R^2}{d}-1\right|\geq\varepsilon\right)
\leq\frac{2}{d\varepsilon^2},\qquad \varepsilon>0.
$$

At fixed $\varepsilon$, the relative squared-radius deviation becomes unlikely as $d$ grows. The radius itself fluctuates on an absolute scale of order one around roughly $\sqrt d$; concentration in *relative* radius does not mean every draw approaches the same absolute radius. One may call the event $|R^2/d-1|<\varepsilon$ a high-probability shell when its probability is sufficiently high for the particular task. The width and required probability must be specified.

The absolute fluctuation claim can also be made precise. The iid central limit theorem applied to $X_j^2$, whose mean and variance are $1$ and $2$, gives $(R^2-d)/\sqrt{2d}\Rightarrow N(0,1)$. Here the fourth normal moment is $3$, obtained by integrating $x^4\phi(x)$ by parts using $\phi'(x)=-x\phi(x)$, so $\operatorname{Var}(X_j^2)=3-1=2$. Since $R/\sqrt d\to1$ in probability by the shell bound,

$$
R-\sqrt d=\frac{R^2-d}{\sqrt{2d}}\frac{\sqrt{2d}}{R+\sqrt d}
\ \Rightarrow\ N(0,1/2).
$$

The [chapter figure](figures/02.svg) shows the pointwise and radial curves at $d=20$, each rescaled to its own unit maximum. They compare where the peaks occur; their drawn areas are not probability comparisons across the two curves.

Density peaks alone are therefore poor maps of where simulations spend time. But high mass alone is not a license to discard tails: an unbounded $f$ can place a substantial part of $\mathbb E f(X)$ in a low-probability region. The relevant geometry depends jointly on the law and the estimand. The seeded companion script, examples/ch02.py, simulates the squared radius for several dimensions and compares its empirical moments with $d$ and $2d$; the experiment illustrates the formula, not a convergence proof. Its core experiment is:

~~~python
radius_squared = sum(rng.gauss(0.0, 1.0) ** 2 for _ in range(d))
outside_shell = abs(radius_squared / d - 1.0) >= 0.2
~~~

Run the script from the repository root with python examples/ch02.py. Compare the simulated frequency of outside-shell draws at $d=2,20,100,1000$ with the stated Chebyshev bounds; the bounds are deliberately conservative.

### How much expectation is outside a high-probability region?

The tail warning can be quantified with ordinary one-dimensional calculus. Let $X\sim N(0,1)$, let $A=\{|X|\leq3\}$, and consider $f(X)=e^{3X}$. Write $\phi$ and $\Phi$ for the standard-normal density and distribution function. Completing the square yields

$$
e^{3x}\phi(x)=e^{9/2}\phi(x-3),\qquad
\mathbb E[e^{3X}]=e^{9/2}\approx90.0171.
$$

Although $P(A)=\Phi(3)-\Phi(-3)\approx0.997300$, the fraction of this expectation contributed by $A$ is

$$
\frac{\mathbb E[e^{3X}\mathbf1_A]}{\mathbb E[e^{3X}]}
=\int_{-3}^3\phi(x-3)\,dx
=\Phi(0)-\Phi(-6)\approx0.500000.
$$

Keeping 99.73% of the probability has kept only about half of this expectation. In fact, the right tail $X>3$ alone contributes exactly half. The identity shifts a Gaussian integral; it does not change the law of $X$. It makes explicit why density-volume intuition, such as that in [Betancourt's discussion of typical sets](https://arxiv.org/html/1701.02434v2), must be paired with the particular function being averaged. All moments of this $f(X)$ are finite; the problem is not an undefined expectation.

There are two different operations to distinguish. Setting $f$ to zero outside $A$ targets $\mathbb E[f\mathbf1_A]$. Discarding outside draws and averaging only the retained draws instead targets $\mathbb E[f\mid A]=\mathbb E[f\mathbf1_A]/P(A)$. Here those two answers are approximately $45.0086$ and $45.1304$, both far from $90.0171$.

Useful error bounds need information about $f$. If $P(A^c)=\delta$ and $|f|\leq M$ almost surely, then

$$
|\mathbb E f-\mathbb E[f\mathbf1_A]|\leq M\delta.
$$

If instead $\mathbb E[f^2]<\infty$, applying the [Cauchy–Schwarz inequality](https://adembo.su.domains/stat-310b/lnotes.pdf) to $|f|$ and $\mathbf1_{A^c}$ gives

$$
|\mathbb E f-\mathbb E[f\mathbf1_A]|
\leq\mathbb E[|f|\mathbf1_{A^c}]
\leq\sqrt{\mathbb E[f^2]\delta}.
$$

These bounds concern zeroing the contribution outside $A$. For the average conditional on $A$, if $0<P(A)$ and $|f|\leq M$, the bound is $|\mathbb E f-\mathbb E[f\mid A]|\leq2M\delta$: expand the unconditional mean over $A$ and $A^c$ and bound the difference of their means by $2M$. A small omitted probability becomes useful only together with a bound on the values being omitted. The companion script checks the Gaussian calculation by numerical integration as well as the analytic identity; quadrature agreement is a numerical check, not an exact integration claim.

## 10. Checks to make before sampling

The examples suggest a short target audit. First name the probability law, its state space, and its reference measure. For the atom-plus-exponential mixture, this prevents dropping the atom. For the correlated normal, positive-definiteness makes the full-dimensional density legitimate. Next check $0<Z<\infty$ if the target is given only up to proportionality. Then specify the actual estimand and ensure the moments used in an error argument exist; a valid Cauchy target, for instance, does not justify a mean-based answer.

Before changing coordinates, write the map and inverse, check whether branches or constrained boundaries are involved, and transform an event as a sanity check. For the log-exponential example, $P(U\leq0)=P(X\leq1)$ exposed exactly where the Jacobian belongs. Finally obtain any tractable marginal, conditional, or expectation as an analytic benchmark. The Gaussian conditional mean $2$ and variance $3$ are much stronger checks on a later implementation than a plot that merely looks elliptical.

These checks concern the **mathematical target**. A Monte Carlo estimate also has finite-run random error; an approximate numerical scheme may add discretization bias; and a scientific model can still be wrong even if its target is sampled exactly. [Chapter 03](03-bayesian-targets.md) constructs posterior targets, while later chapters separately assess algorithmic invariance and computational error.

## Exercises

**1. Mixed law.** With probability $0.3$, $X=0$; otherwise $X\sim\operatorname{Exp}(2)$. State a reference measure and calculate $P(X=0)$, $P(X>1)$, and $\mathbb E X$.

<details>
<summary>Solution</summary>

Take $\mu=\delta_0+\lambda$ on $[0,\infty)$. The atom gives $P(X=0)=0.3$. The continuous component contributes $P(X>1)=0.7P(\operatorname{Exp}(2)>1)=0.7e^{-2}$. Finally $\mathbb E X=0.3(0)+0.7(1/2)=0.35$. A Lebesgue density alone would miss the first term.

</details>

**2. Dependence without covariance.** Let $X$ be uniform on $(-1,1)$ and $Y=X^2$. Compute $\mathbb E Y$ and $\operatorname{Cov}(X,Y)$. Are $X$ and $Y$ independent?

<details>
<summary>Solution</summary>

$\mathbb E Y=\frac12\int_{-1}^1x^2\,dx=1/3$. Symmetry gives $\mathbb E X=0$ and $\mathbb E[XY]=\mathbb E[X^3]=0$, so the covariance is zero. They are dependent because knowing $X$ determines $Y$ exactly. The joint law lies on a curve, so factorization into independent marginals is impossible.

</details>

**3. Total variance.** Prove the law of total variance for square-integrable $Y$ and any observed variable $X$.

<details>
<summary>Solution</summary>

Let $m(X)=\mathbb E[Y\mid X]$ and $\mu=\mathbb E Y=\mathbb E m(X)$. Expand $Y-\mu=(Y-m(X))+(m(X)-\mu)$. The expected cross term is zero because $\mathbb E[Y-m(X)\mid X]=0$ and $m(X)-\mu$ depends only on $X$. The expected first square is $\mathbb E[\operatorname{Var}(Y\mid X)]$; the second is $\operatorname{Var}(m(X))$. Square integrability makes every term finite.

</details>

**4. Two inverse branches.** If $X\sim N(0,1)$ and $Z=X^2$, derive the Lebesgue density of $Z$ for $z>0$ and explain its behavior near zero.

<details>
<summary>Solution</summary>

The inverse branches are $x=\sqrt z$ and $x=-\sqrt z$, each with absolute derivative $1/(2\sqrt z)$. The standard-normal density is symmetric, so

$$
p_Z(z)=\frac{\phi(\sqrt z)+\phi(-\sqrt z)}{2\sqrt z}
=\frac{e^{-z/2}}{\sqrt{2\pi z}},\qquad z>0.
$$

Its density diverges as $z$ decreases to zero, but $z^{-1/2}$ is integrable there. Also $P(Z=0)=0$.

</details>

**5. A different Gaussian observation.** For the Gaussian of Section 8, observe $X_2=-4$. Find the conditional law of $X_1$, then $\mathbb E[X_1^2\mid X_2=-4]$. Why is this law different from the marginal law of $X_1$?

<details>
<summary>Solution</summary>

The conditional mean is $1+(3/9)(-4+1)=0$, and the conditional variance remains $4-9/9=3$. Thus $X_1\mid X_2=-4\sim N(0,3)$ and its conditional second moment is $3+0^2=3$. The marginal is $N(1,4)$ because it averages over all possible $X_2$ values; a particular observation changes the mean and removes some uncertainty.

</details>

**6. A shell bound.** For $X\sim N(0,I_{1000})$ and $R=\|X\|$, bound $P(|R^2/1000-1|\geq0.2)$ using the result in Section 9. Does the bound control the error of every expectation if all draws outside the shell are discarded?

<details>
<summary>Solution</summary>

Chebyshev gives $2/(1000(0.2)^2)=0.05$. This bounds probability outside one specifically defined shell; it does not identify a unique typical region. For an unbounded estimand $f$, rare outside-shell values can make a large contribution to $\mathbb E f(X)$, so the probability bound by itself does not control the truncation error of every expectation.

</details>

**7. Discarding observations changes the target.** For $X\sim N(0,1)$ and $A=\{|X|\leq3\}$, compare $\mathbb E[X^2]$, $\mathbb E[X^2\mathbf1_A]$, and $\mathbb E[X^2\mid A]$. Derive the latter two using $\phi'(x)=-x\phi(x)$.

<details>
<summary>Solution</summary>

Integration by parts gives $\int_3^\infty x^2\phi(x)\,dx=3\phi(3)+1-\Phi(3)$. By symmetry the two tails contribute twice this amount. Since $\mathbb E[X^2]=1$,

$$
\mathbb E[X^2\mathbf1_A]=1-6\phi(3)-2[1-\Phi(3)]\approx0.970709.
$$

Divide by $P(A)=2\Phi(3)-1$ to obtain $\mathbb E[X^2\mid A]\approx0.973337$. Both differ from $1$, even though the omitted probability is only about $0.002700$. They differ from each other because only the retained-draw average renormalizes by $P(A)$.

</details>

## Key takeaways

- Probability belongs to events. A density represents it relative to a reference measure and may exceed one or change under a coordinate transformation.
- State the target's support, normalizability, and required moments before using simulation to estimate a quantity.
- Conditioning changes a distribution, not merely a point estimate. Conditional expectation preserves the overall mean and partitions variance under the stated integrability assumptions.
- A transformed density needs the inverse Jacobian; transformed stored draws do not need reweighting.
- Correlated Gaussian formulas provide exact simulation and conditional benchmarks. In high dimensions, the density mode need not lie near the radius where draws accumulate.

## Sources and further reading

- [Amir Dembo, *Probability Theory: STAT310/MATH230*](https://adembo.su.domains/stat-310b/lnotes.pdf): event laws, integration, conditional expectation, and almost-sure equality.
- [Michael Betancourt, *Measure and Probability on General Spaces*](https://betanalpha.github.io/assets/chapters_html/probability_on_general_spaces.html): event-centered probability language.
- [Stan Development Team, *Changes of variables*](https://mc-stan.org/docs/2_30/reference-manual/change-of-variables.html) and [*Reparameterization and Change of Variables*](https://mc-stan.org/docs/2_34/stan-users-guide/reparameterization.html): inverse-Jacobian rule and computational use.
- [Marco Taboga, *Marginal and conditional distributions of a multivariate normal vector*](https://www.statlect.com/probability-distributions/multivariate-normal-distribution-partitioning): Gaussian block formulas.
- [Michael Betancourt, *A Conceptual Introduction to Hamiltonian Monte Carlo*](https://arxiv.org/html/1701.02434v2): density, volume, and high-dimensional geometry.
