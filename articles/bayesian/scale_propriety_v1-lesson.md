# Check that a hierarchical posterior exists

A positive parameter often feels easier to model on a logarithmic scale. Suppose we assign a constant density to the logarithm of a between-group standard deviation and then ask software to fit the hierarchy. Does a long, stable-looking run establish a posterior distribution? No: the joint density must first have a finite normalizing integral. A finite numerical boundary can hide the divergence and make that boundary determine the apparent certainty.

This lesson derives a normalization criterion, shows exactly what an arbitrary lower cutoff changes, and traces the change into predictions. The existing [hierarchical chapter](../../books/bayesian/09_hierarchical.md) uses explicit proper scale priors. We deliberately change that assumption here; this is a comparison model, not a claim that the core uses an improper prior. Preparation: Normal densities, Gaussian integration, improper integrals, and the variance decomposition in [Chapter 4](../../books/bayesian/04_continuous.md). Allow about 90–120 minutes including practice; this is a study estimate.

> Predict before calculating: can more groups repair every improper prior? If a program cannot represent scales below a chosen number, is that only a computational choice, or does it change the probability model?

## Fix the model and the reference measure

For $j=1,\ldots,J$, with $J\ge1$, use independent group effects and independent errors:

$$\theta_j\mid\tau\sim N(0,\tau^2),\qquad
Y_j\mid\theta_j\sim N(\theta_j,1),\qquad \tau>0.$$

The population location is **known to be zero** and the measurement-noise variance is **known to be one**. Observations have been divided by that known noise standard deviation, so all displayed numerical scales are dimensionless. $\tau$ describes extra between-group variation, not the observation noise itself. Every group supplies one observation here.

Consider a proposed prior density proportional to $\tau^k$ **with respect to $d\tau$**, on the entire positive line. No such power is integrable at both endpoints as a prior. The question is whether multiplication by this likelihood produces an integrable posterior. A prior uniform in $\eta=\log\tau$ has density $1/\tau$ with respect to $d\tau$, corresponding to $k=-1$. A prior constant in $\tau$ corresponds to $k=0$; constant in variance $v=\tau^2$ corresponds to $k=1$ after the Jacobian. These are different assumptions.

## Integrate the group effects explicitly

For one observation, let $w=\tau^2/(1+\tau^2)$. Completing the square gives

$$ (y-\theta)^2+\theta^2/\tau^2
=(1+\tau^{-2})(\theta-wy)^2+\frac{y^2}{1+\tau^2}.$$

Integrating the product of the two Normal densities over $\theta$ yields

$$p(y\mid\tau)=\frac1{\sqrt{2\pi(1+\tau^2)}}
\exp\!\left[-\frac{y^2}{2(1+\tau^2)}\right].$$

Thus $Y_j\mid\tau\sim N(0,1+\tau^2)$. If $S=\sum_jy_j^2$, the marginal likelihood is

$$L(\tau)=(2\pi)^{-J/2}(1+\tau^2)^{-J/2}
\exp\!\left[-\frac S{2(1+\tau^2)}\right].$$

The unit observation variance remains when $\tau$ approaches zero. This is a central difference from taking an unknown **residual** variance to zero in a single-level Normal model.

## Check both ends of the integral

For every finite dataset,

$$L(\tau)\longrightarrow(2\pi)^{-J/2}e^{-S/2}>0
\quad\text{as }\tau\downarrow0,$$

and $L(\tau)/\tau^{-J}\longrightarrow(2\pi)^{-J/2}$ as $\tau\to\infty$. Each limit supplies positive upper and lower comparison constants sufficiently near its endpoint. Therefore the posterior integral behaves like $\int_0^1\tau^k\,d\tau$ near zero and $\int_1^\infty\tau^{k-J}\,d\tau$ at infinity. It is finite **if and only if**

$$\boxed{-1<k<J-1.}$$

The equalities fail logarithmically. Checking only one endpoint can miss the other divergence. The observed values change the finite likelihood but not these endpoint powers.

| Proposed prior for this known-location model | Power $k$ | Posterior condition |
| --- | ---: | --- |
| Constant density in log scale | $-1$ | Improper for every finite dataset and every $J$ |
| Constant density in scale | $0$ | Proper if $J\ge2$ |
| Constant density in variance | $1$ | Proper if $J\ge3$ |

This theorem fixes the population location. In a hierarchy with an unknown location and its own prior, the integrated likelihood changes and the threshold can change. In particular, [Gelman's scale-prior discussion, section 4.2](https://sites.stat.columbia.edu/gelman/bayescomputation/Gelman2006.pdf), describes the log-scale failure and different group-count thresholds for an unknown-location hierarchy. Do not transfer a threshold without its model.

Normalization also does not guarantee moments. Under a proper posterior from this power prior, a positive moment $E(\tau^m\mid y)$ is finite exactly when $m<J-1-k$. A finite normalizing constant is only the first check.

**Retrieve:** Explain why neither a very large $S$ nor thousands of additional groups eliminates the $k=-1$ divergence at zero. Which part of the argument would need revisiting if the observation noise were unknown?

## A finite cutoff defines a different proper model

Take two observations $y_1=y_2=0$. For this fixture, the likelihood kernel is $(1+\tau^2)^{-1}$. Now specify a proper log-uniform prior on **the finite interval** $[\epsilon,M]$, with $0<\epsilon<M<\infty$:

$$p(\tau)=\frac1{\log(M/\epsilon)}\frac1\tau
\mathbf1\{\epsilon\le\tau\le M\}.$$

Its posterior density is

$$p(\tau\mid y)=\frac1{Z_{\epsilon,M}}\frac1{\tau(1+\tau^2)}
\mathbf1\{\epsilon\le\tau\le M\},$$

where

$$Z_{\epsilon,M}=\log(M/\epsilon)
-\frac12\log\!\left(\frac{1+M^2}{1+\epsilon^2}\right).$$

$Z$ is the integral of this **unnormalized posterior kernel**. It is not the normalized model evidence: including the prior's constant and likelihood constants gives evidence $(2\pi)^{-1}Z/\log(M/\epsilon)$. Dropping a common factor while normalizing this posterior does not make it disposable when comparing models.

For $M=1$, define $Z_x=\log(1/x)-\tfrac12\log[2/(1+x^2)]$. For $\epsilon<\delta<1$,

$$\Pr(\tau>\delta\mid y)=\frac{Z_\delta}{Z_\epsilon}.$$

At $\delta=0.1$, changing only the lower bound from $10^{-2}$ to $10^{-4}$ to $10^{-8}$ changes this probability approximately from $0.460472$ to $0.221236$ to $0.108497$. The observations did not change. The finite prior did.

## Follow cutoff sensitivity into predictions

The same fixture has closed-form moments:

$$E(\tau^2\mid y)=\frac{\tfrac12\log[(1+M^2)/(1+\epsilon^2)]}{Z_{\epsilon,M}},$$

$$E(w\mid y)=\frac{\tfrac12[(1+\epsilon^2)^{-1}-(1+M^2)^{-1}]}{Z_{\epsilon,M}},\qquad
w=\frac{\tau^2}{1+\tau^2}.$$

For either existing group, $\theta_j\mid\tau,y_j=0\sim N(0,w)$. Integrating over the posterior scale gives variance $E(w\mid y)$. A new group's latent effect instead has variance $E(\tau^2\mid y)$. A new observation in that new group has variance $1+E(\tau^2\mid y)$. A further reading in an existing zero-observed group has variance $1+E(w\mid y)$. Each target includes a different uncertainty.

<!-- SCALE_EXPLORER -->

The explorer uses closed-form calculations, not a numerical integration grid or an MCMC run. Its probabilities concern the two-zero-observation fixture only. The displayed predictive distributions are Normal mixtures; reporting their variances does not make a Normal interval based on those variances exact.

For a changed nonzero observation, completing the square gives conditional mean $wy_j$. Its marginal posterior variance is $E(w\mid y)+y_j^2\operatorname{Var}(w\mid y)$, not just $E(w\mid y)$. Do not reuse the fixture's zero-mean simplification after changing the data.

## Interpret the shrinking cutoff honestly

At fixed $M$, $Z_{\epsilon,M}\to\infty$ as $\epsilon\downarrow0$, while its integral above any fixed positive $\delta$ stays finite. Hence $\Pr(\tau>\delta\mid y)\to0$. In the fixture both displayed latent variances tend to zero, whereas future individual observation variance stays at least one because measurement noise remains.

The prior is already changing on the physical scale: for $M=1$, its second moment is $(1-\epsilon^2)/[2\log(1/\epsilon)]$, which also tends to zero. Extending a uniform log interval far toward negative infinity is not a neutral way to express less physical-scale information.

Each finite-cutoff posterior is a legitimate probability distribution under that stated prior. If the lower bound represents justified scientific information, it belongs in the analysis. Arbitrary software bounds require sensitivity analysis. On the enlarged space including $\tau=0$, the sequence can converge weakly to a point mass there; it does **not** produce a normalized density proportional to $1/[\tau(1+\tau^2)]$ on the positive line. Those are different limiting claims.

## Compare a proper prior with different implications

Keep the fixture and use a prior uniform in **scale** on $[0,1]$. Its prior predictive new-group observation variance is $1+E(\tau^2)=4/3$. Its posterior has kernel $(1+\tau^2)^{-1}$ and normalizer $\pi/4$, yielding

$$E(\tau^2\mid y)=4/\pi-1\approx0.273240,\qquad
E(w\mid y)=1/2-1/\pi\approx0.181690.$$

These differ from the log-uniform cutoff answers because the prior measure differs. They are not competing computations of one unchanged model. Proper priors such as a HalfNormal avoid the nonintegrable $1/\tau$ singularity here; their scale still needs a scientific justification and prior-predictive inspection. In this known-noise model the likelihood is bounded, so any proper scale prior yields a finite positive evidence.

## Check a model before trusting a computation

For this example, normalization is settled by the endpoint proof. A finite grid has implicit endpoints and quadrature weights. A finite log-coordinate range also supplies a prior support restriction. A sampler may move stably within a bounded range while never addressing the improper unbounded model. Neither a smooth density plot nor convergence diagnostics establishes the missing normalizing integral. [Hobert and Casella](https://doi.org/10.1080/01621459.1996.10476714) give hierarchical examples where Gibbs output from an improper posterior can appear reasonable.

Before running code, name the model, reference measure, bounds and prediction target. Then normalize where possible, check both tails, and separate sensitivity to assumptions from numerical approximation. Attempt [practice](./scale_propriety_v1-practice.md), explain changed data before consulting [answers](./scale_propriety_v1-answers.md), and reconstruct the two-endpoint proof after a delay.

---

Printable copy: [study edition (PDF)](../../pdfs/bayesian/study-editions/scale_propriety_v1.pdf), the lesson and practice without worked answers.
