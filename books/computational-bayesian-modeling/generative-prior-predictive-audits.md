
# Prior-predictive Audits and Observation Mechanisms

Preparation is the primary [Bayesian Inference course](#/books/bayesian/course-syllabus), probability with conditional expectation, and the preceding modeling chapter when one is listed. Computational algorithms continue in [MCMC Volume 1](#/books/mcmc/01-probability-computation).

This chapter continues [Generative Stories and Observation Laws](generative-stories-observation-laws.md), retaining its notation, model and observation protocol. Read that treatment before importing a displayed formula whose parameters were defined there.

## A Jacobian converts a probability measure between coordinates

Let $\theta=T(z)$ be a one-to-one differentiable transformation between open subsets of $\mathbb R^d$, with differentiable inverse and nonzero determinant. For a density $\pi_\theta$ relative to $d\theta$, substitution in an integral gives
$$
P(Z\in A)=\int_{T(A)}\pi_\theta(\theta)\,d\theta
=\int_A\pi_\theta(T(z))\,|\det DT(z)|\,dz.
$$
The transformed density is therefore the integrand on the right. The absolute value accounts for orientation; a negative determinant does not produce negative probability. The image of the support must be transformed as well.

For a scalar probability $p=\operatorname{logit}^{-1}(z)$, $dp/dz=p(1-p)>0$. If $p\sim\operatorname{Beta}(A,B)$ with $A,B>0$, then
$$
\pi_z(z)=\frac{p(z)^A(1-p(z))^B}{B(A,B)},\qquad z\in\mathbb R.
$$
The added powers are the Jacobian. The stable log kernel is
$$
-A\log(1+e^{-z})-B\log(1+e^z),
$$
evaluated through stable log-add-exp operations rather than through unsafe exponentials. Its derivative is $A-(A+B)p(z)$ and its second derivative is $-(A+B)p(z)(1-p(z))<0$. Hence every proper Beta law has a strictly log-concave density on the logit scale. It is symmetric there only when $A=B$; unimodality is not a promise of near symmetry.

Density modes depend on coordinates. The logit density's mode maps to $p=A/(A+B)$, whereas an interior raw-probability mode, when $A,B>1$, is $(A-1)/(A+B-2)$. There is no contradiction: density is probability per unit reference volume, and a nonlinear coordinate change changes that volume. Probability assigned to a transformed interval remains the same.

The positive-rate transformation gives an equally concrete target check. If $\lambda\sim\operatorname{Gamma}(A,B)$ under the rate convention and $\eta=\log\lambda$, the log-density kernel is $A\eta-Be^\eta$. Omitting the factor $e^\eta$ instead uses $(A-1)\eta-Be^\eta$. Transforming that incorrect kernel back to $\lambda$ yields $\lambda^{A-2}e^{-B\lambda}$, which is a Gamma$(A-1,B)$ law only when $A>1$ and is not integrable near zero when $A\le1$. A Jacobian mistake can therefore change moments or destroy propriety while leaving a smooth-looking function.

If the prior is specified directly on $z$ or $\eta$, that is already its reference scale. Adding another Jacobian without a coordinate conversion changes the model a second time. Conversely, changing coordinates for computation does not authorize changing the prior family to one with the same printed parameter values. The generative model fixes the probability measure; the coordinate transformation tells the implementation how to represent that same measure.

## Parameter transformations and data transformations have different roles

A parameter Jacobian enters because the integration variable in the posterior changes. A data Jacobian enters because the observation density is represented relative to a different measure. For log-normal reaction times, $X=\log T$ is normal and $dX/dT=1/T$, so
$$
f_T(t\mid\mu,v)=
\frac1{t\sqrt{2\pi v}}
\exp\!\left[-\frac{(\log t-\mu)^2}{2v}\right],\qquad t>0.
$$
This factor is part of the likelihood of the observed time. It is already present when a genuine log-normal density routine is used.

For a fixed observed $t$, the factor $1/t$ is independent of $\mu,v$. It can be dropped from a within-model posterior kernel in those parameters. It cannot be dropped when claiming the normalized density of $T$, and evidence values for different models must use the same observed-data reference measure. If every model undergoes the same invertible data transformation, the common Jacobian cancels in a Bayes factor, which explains exactly when the cancellation is legitimate.

A simple unit conversion makes this less abstract. If a positive observation is expressed as $U=cT$ with known $c>0$, then $f_U(u\mid\theta)=f_T(u/c\mid\theta)/c$. The density value changes with the unit, but
$$
P(a<T<b\mid\theta)=P(ca<U<cb\mid\theta)
$$
does not. Reporting a density as if it were the probability of the observed real number would obscure this invariance. In a continuous model an exact point has probability zero; densities describe local probability per unit length.

Multivariate transformations need the full determinant. For a hierarchical normal component $u=\tau z$ with $\tau>0$, holding $\tau$ fixed gives $du=\tau\,dz$. In the joint map $(z,\tau)\mapsto(u,\tau)$ the Jacobian matrix is triangular and its determinant is $\tau$. With several independent components the determinant is $\tau^J$. This is why a density originally written for $u$ cannot simply be evaluated at $\tau z$ and declared a density for $z$ without examining the measure.

A noncentered generative specification can instead draw $z_j\sim N(0,1)$ and define $u_j=\tau z_j$ deterministically. Its density in the sampled coordinates already uses $dz\,d\tau$. One should not add a second factor solely because $u$ appears in the likelihood. The prior construction and the transformed-density construction give the same model when each is implemented on its declared scale. The map degenerates at $\tau=0$; an atom there would require a separate mixture component rather than a diffeomorphism argument.

These distinctions give three practical checks: identify the random variable whose density is being evaluated, identify the measure defining that density, and identify the variable being integrated or sampled. The same algebraic expression can be a correct likelihood kernel and an incorrect normalized density if those roles are silently exchanged.

## Integrating a shared rate creates predictive dependence

Under the Gamma shape-rate convention,
$$
\pi(\lambda)=\frac{b^a}{\Gamma(a)}\lambda^{a-1}e^{-b\lambda},
\qquad \lambda>0,\quad a,b>0.
$$
For one future Poisson count $Y$, integrate the entire density, not just its kernel:
$$
P(Y=k)=\frac{b^a}{\Gamma(a)k!}
\int_0^\infty\lambda^{a+k-1}e^{-(b+1)\lambda}\,d\lambda
=\frac{\Gamma(a+k)}{\Gamma(a)k!}
\left(\frac b{b+1}\right)^a
\left(\frac1{b+1}\right)^k.
$$
The gamma integral supplies both normalization and the negative-binomial predictive form. Here $k$ counts events and $b/(b+1)$ is the stated success-probability parameter; software conventions using failures or a mean/dispersion pair must be translated.

Conditional expectation and variance yield
$$
E[Y]=a/b,\qquad
\operatorname{Var}(Y)=E[\lambda]+\operatorname{Var}(\lambda)
=a/b+a/b^2.
$$
The extra term is uncertainty in the shared rate. For two conditionally independent future counts using that same rate, the conditional covariance is zero but
$$
\operatorname{Cov}(Y_1,Y_2)
=E[\operatorname{Cov}(Y_1,Y_2\mid\lambda)]
+\operatorname{Cov}(E[Y_1\mid\lambda],E[Y_2\mid\lambda])
=a/b^2.
$$
Their predictive correlation is $1/(b+1)$.

For $a=3,b=1$, each predictive count has mean $3$ and variance $6$, while the covariance between two counts is $3$ and their correlation is $1/2$. A model that draws separate independent Gamma$(3,1)$ rates for the two counts has the same one-count predictive law but covariance zero. Thus matching a histogram of individual outcomes does not verify the joint generative structure.

For a whole ordered vector $y_1,\ldots,y_n$, the shared-rate predictive probability is
$$
P(y)=
\frac{b^a\Gamma(a+S)}
{\Gamma(a)(b+n)^{a+S}\prod_i y_i!},
\qquad S=\sum_i y_i.
$$
The product of individual marginal negative-binomial probabilities is generally different. The distinction matters for estimating uncertainty in a sample average: covariance terms can remain even when every conditional data draw was independent.

This calculation also explains the difference between simulating one dataset and many independent datasets. Within one dataset, draw the shared rate once and then draw all its counts conditionally. To obtain independent prior-predictive datasets, redraw the rate for each dataset. Redrawing it before every observation simulates the separate-rate model instead. A computational benchmark must specify which objects share a latent draw.

The same total-expectation and total-variance identities apply after updating the prior, with posterior shape and rate substituted. They connect exact conjugate inference to predictive checks, but they do not establish that the Poisson sampling model fits the observed dispersion, dependence or tails. Those are questions about the adequacy of the generative story, not about whether the integral was evaluated correctly.

## Elicitation distinguishes a rate from its future counts

Suppose background knowledge concerns a latent weekly rate $\lambda$, with desired mean $m>0$ and standard deviation $s>0$. Under a Gamma shape-rate prior, $a/b=m$ and $a/b^2=s^2$. Solving gives $a=m^2/s^2$, $b=m/s^2$. Thus a rate mean of five and rate standard deviation two correspond to $a=25/4,b=5/4$.

Future Poisson counts have another source of uncertainty. With this prior, their mean is five and their variance is $5+4=9$, giving predictive standard deviation three. A statement about “five plus or minus two events” must say whether it concerns the latent rate or a future realized count. The earlier Gamma$(6,1.2)$ example has rate mean five and rate variance $25/6$, hence predictive variance $55/6$. It is an approximate rate-uncertainty description, not a count standard deviation of two.

In fact, predictive mean five and variance four cannot hold for any Poisson mixture with finite rate variance, because $\operatorname{Var}(Y)=E[\lambda]+\operatorname{Var}(\lambda)\ge E[Y]$. An elicitation that insists on those count moments asks for a sampling model outside this family. The correct response is to examine the observation process or the meaning of the stated uncertainty, rather than force impossible hyperparameters into a Gamma distribution.

A different hypothetical domain can be elicited through tail and zero-count probabilities. Suppose a site regards rates above $100$ events per week as requiring prior probability at most $10^{-4}$, and expects a zero-count week with prior probability at most $0.2$. These are explicit illustrative constraints fixed before any benchmark run; they are not claimed observations from a real site.

For Gamma$(0.01,0.01)$, the predictive zero probability is $101^{-0.01}>0.95$, already violating the second constraint. Its rate mean is only one, but its variance is $100$. Its tail above $100$ is $Q(0.01,1)$, the upper regularized gamma integral. To see that this is not below $10^{-4}$, bound $\Gamma(0.01)<101$ and restrict its upper-tail integral to $1\le t\le2$, where $t^{-0.99}e^{-t}>e^{-2}/2$. The tail is therefore greater than $e^{-2}/202>10^{-4}$. The problem is not an undefined notion of a “substantial” probability; it is failure of declared probability constraints.

Gamma$(3,1)$ instead has predictive zero probability $1/8$ and rate-tail probability $5101e^{-100}$, satisfying both illustrative constraints. This calculation supports that alternative for this stated elicitation, not for every application. The public companion supplies the exact reference functions and a prospective simulation design; no simulation result is asserted in the exposition.

Units must also move with the prior. If $\lambda$ is events per week, the daily rate $\lambda/7$ has Gamma shape $a$ and rate $7b$. A seven-day exposure then uses a Poisson mean seven times that daily rate. Keeping the same printed rate parameter while changing the time unit would change the prior predictive law, despite superficially similar notation.

## A proper posterior can coexist with nonidentification

Identification asks whether different parameter values imply different distributions for the observations. It is a property of the sampling model, not of how narrow a posterior looks after adding a prior. A proper prior can make a nonidentified posterior proper without creating new information in the likelihood.

For a complete example, let
$$
Y_i\mid\theta_1,\theta_2\sim N(\theta_1+\theta_2,\sigma^2),
\qquad i=1,\ldots,n,
$$
conditionally independently, with known $\sigma^2>0$. Every pair with the same sum has the same likelihood. Set $u=\theta_1+\theta_2$, $v=\theta_1-\theta_2$. Then $\theta_1=(u+v)/2$, $\theta_2=(u-v)/2$, and the absolute Jacobian determinant of this inverse map is $1/2$.

Take independent proper priors $\theta_j\sim N(0,\tau^2)$ with $\tau^2>0$. Since $\theta_1^2+\theta_2^2=(u^2+v^2)/2$, the transformed prior factors into independent $N(0,2\tau^2)$ densities for $u,v$, including the Jacobian. The likelihood depends only on $u$, so the posterior is
$$
u\mid y\sim N(m_u,V_u),\qquad v\mid y\sim N(0,2\tau^2),
$$
independently, where
$$
V_u=\left(\frac1{2\tau^2}+\frac n{\sigma^2}\right)^{-1},
\qquad
m_u=V_u\frac{n\bar y}{\sigma^2}.
$$
The contrast $v$ remains exactly at its prior distribution for every dataset.

The individual posterior variances are $(V_u+2\tau^2)/4$, and their covariance is $(V_u-2\tau^2)/4$. As information about the sum grows, $V_u$ shrinks but the individual variances retain the limit $\tau^2/2$. The data determine the sum increasingly well while leaving the allocation between the two components prior-dependent. A change in the prior mean or variance of $v$ would change that allocation even when predictions for the sum barely move.

A sampler can explore this proper Gaussian posterior accurately. Good Monte Carlo diagnostics would support computation of its stated posterior, but would not establish that the two components are separately identified by the experiment. Conversely, strong posterior correlation is a computational warning without being proof of a coding error: here it follows directly from a likelihood ridge.

This example distinguishes three questions that should be reported separately. Does the likelihood identify the requested quantity? Does the chosen prior produce a finite positive posterior normalizer? Can the algorithm adequately explore and summarize that posterior? A positive answer to one does not logically supply the others. Predictive checks concern a further question: whether this observation law is adequate for the data-generating process.

The same reasoning applies to a latent mixture label, a weakly estimated population scale or a regression with collinear predictors. A prior can regularize a choice among poorly distinguished explanations. Its role should remain visible through the generative specification and sensitivity analysis, rather than be hidden by calling every sharply reported posterior a discovery made by the data alone.

## Proper-prior sensitivity has an exact reference calculation

A sensitivity analysis fixes the observed data and varies a declared part of the model. For a Beta prior with parameters $a,b$ and observed Bernoulli success count $s$ out of $n$, the posterior mean is $(a+s)/(a+b+n)$. Parameterizing the prior by its mean $m_0=a/(a+b)$ and concentration $c=a+b$ gives
$$
E[p\mid y]=\frac{s+cm_0}{n+c}.
$$
At fixed $c$, the derivative with respect to $m_0$ is $c/(n+c)$. At fixed $m_0$, the derivative with respect to $c$ is $(nm_0-s)/(n+c)^2$. These derivatives identify precisely which changes are being tested.

For the public benchmark's prior Beta$(2,5)$ and $s=7,n=20$, the mean is $1/3$. Replacing the prior by proper Beta$(1,1)$ gives Beta$(8,14)$ and mean $4/11$, a shift of $1/33$. This is an exact sensitivity difference, not Monte Carlo noise. Whether that prior alternative is substantively plausible requires an elicitation argument; it is not decided by the convenience of the algebra.

The Poisson-Gamma model gives equally useful reference derivatives. With $S=\sum y_i$, the posterior mean $(a+S)/(b+n)$ increases with $a$ at rate $1/(b+n)$ and decreases with $b$ at rate $-(a+S)/(b+n)^2$. If a later dataset has $n=40,S=99$, Gamma$(1,1)$ updates to Gamma$(100,41)$, whereas Gamma$(3,1)$ updates to Gamma$(102,41)$. The mean shift is exactly $2/41$. The posterior predictive mean and variance follow by the formulas already derived, so a proper-prior predictive comparison can separate genuine model sensitivity from simulation error.

Another proper alternative, Gamma$(2,2)$, gives mean $101/42$, differing from $100/41$ by $-59/1722$. These examples specify mathematical alternatives for the later predictive dossier; they are not additional claims that a model was fitted or that a discrepancy was reproduced. A small change of posterior mean also does not prove that the likelihood is informative: several nearby priors could all dominate a weakly identified direction.

Assume the alternative proper prior is absolutely continuous with respect to the proper reference prior: in the common density representation, $\pi_1=0$ almost everywhere on $\{\pi_0=0\}$. Define $w(\theta)=\pi_1(\theta)/\pi_0(\theta)$ where $\pi_0>0$, and set it to zero on the reference-prior null complement. Posterior reweighting then has an exact identity. Provided the denominator is finite and positive and the numerator is absolutely integrable,
$$
E_1[h(\theta)\mid y]
=\frac{E_0[h(\theta)w(\theta)\mid y]}
       {E_0[w(\theta)\mid y]}.
$$
It follows by inserting the two normalized posteriors and cancelling the shared likelihood. The identity does not by itself guarantee a stable Monte Carlo importance estimator.

For example, changing Beta hyperparameters produces weights proportional to $p^{\Delta a}(1-p)^{\Delta b}$. Under a Beta$(A,B)$ reference posterior, their second moment is finite only when $A+2\Delta a>0$ and $B+2\Delta b>0$. A proper alternative posterior can exist while an importance-weight variance is infinite. Later model-comparison and predictive chapters examine related weight diagnostics; the present identity supplies the measure and integrability conditions those computations need.

A useful final sensitivity report therefore names the prior alternatives, the quantity being compared, the exact or numerical reference, the Monte Carlo uncertainty and the remaining model assumptions. Stability is a statement about that tested set of alternatives. It cannot stand in for identification, predictive adequacy or an unrestricted robustness guarantee.

## A censoring mechanism changes the observed-data factor

Suppose an instrument reports a waiting time exactly when it is below a fixed recording limit $c>0$, and otherwise reports the symbol “at least $c$.” Take independent $T_i\mid\lambda\sim\operatorname{Exponential}(\lambda)$, with rate $\lambda>0$. Record $O_i=(\delta_i,t_i)$, where $\delta_i=1$ denotes an exact time $0<t_i<c$, and $\delta_i=0$ denotes the censored symbol. An exact time contributes density $\lambda e^{-\lambda t_i}$ with respect to Lebesgue measure on $(0,c)$; the censored symbol contributes probability $e^{-\lambda c}$ with respect to a point mass. The observation space is a disjoint union. It is not correct to assign a Lebesgue density to the censored symbol.

Write $d=\sum_i\delta_i$ and $E=\sum_i\{\delta_it_i+(1-\delta_i)c\}$. Multiplying the observed factors gives likelihood $\lambda^d e^{-\lambda E}$. A proper shape-rate $\operatorname{Gamma}(a,b)$ prior therefore gives $\operatorname{Gamma}(a+d,b+E)$ posterior. This result includes the case $d=0$: observing only censored units still supplies exposure information and shifts the rate through $b+nc$, although there are no observed event times. Dropping those units would erase evidence that their waiting times exceeded the limit.

For example, use $c=2$, exact reports $0.5$ and $1$, and one censored report. Then $d=2$ and $E=3.5$. With prior $\operatorname{Gamma}(2,1)$, the posterior is $\operatorname{Gamma}(4,4.5)$ with mean $8/9$. Treating the censored report as an exact time equal to $2$ would wrongly add a third event and give shape $5$. Discarding it would wrongly reduce total exposure to $1.5$. These two errors move different parts of the conjugate update, so agreement on one posterior mean would not validate the full likelihood.

Now change the protocol: retain only units whose waiting times are below $c$, and do not record the number screened out. A retained exact time has conditional density
$$
\frac{\lambda e^{-\lambda t}}{1-e^{-\lambda c}},\qquad 0<t<c.
$$
For $n$ retained times the denominator is raised to the power $n$. It depends on $\lambda$, so the Gamma update above no longer applies. This is truncation rather than censoring. If the number and outcomes of all screened units are available, use that fuller observation law instead of conditioning away information without explanation.

There are three distinct “zeros” in this example. An event time equal to zero is outside the continuous support as defined; zero observed events is an informative dataset; and zero recording probability at an incompatible report makes its likelihood factor zero. Listing these possibilities before manipulating a kernel prevents an algebraically attractive update from answering the wrong experiment. The same audit will matter for missing group outcomes, survival models and models that select observations by a threshold.

## Posterior prediction averages over uncertainty once per replicated dataset

For a proper posterior $\Pi(d\theta\mid y)$ and a future-data kernel $Q_\theta$, the predictive law is
$$
Q(B\mid y)=\int Q_\theta(B)\,\Pi(d\theta\mid y).
$$
It is a probability measure because $Q_\theta$ is one for every relevant $\theta$, and nonnegative integration gives $Q(\mathcal Y\mid y)=1$. This is a normalization argument, independent of whether the integral has a familiar density. If future observations share a latent parameter, draw that parameter once and then generate the whole future dataset conditionally. Redrawing it separately for each observation defines another joint law.

The law of total variance makes the uncertainty accounting visible. If the predictive law has finite second moment, then
$$
\operatorname{Var}(\tilde Y\mid y)
=E\{\operatorname{Var}(\tilde Y\mid\theta)\mid y\}
+\operatorname{Var}\{E(\tilde Y\mid\theta)\mid y\}.
$$
Replacing $\theta$ by its posterior mean usually drops the second term, and can also change the first term in a nonlinear model. For a future Poisson count the two terms are $E(\lambda\mid y)$ and $\operatorname{Var}(\lambda\mid y)$. For a Bernoulli observation the final marginal variance is instead $\bar p(1-\bar p)$: the two pieces recombine because $Y$ has only two values. For a future batch, its members' shared uncertainty remains visible through their covariance.

Prediction can be well determined even when individual parameters are not identified. In the preceding two-mean example, the distribution of a future observation depends on $u=\theta_1+\theta_2$, not on the unconstrained contrast $v$. That supports a prediction claim for this observation design. It does not identify a counterfactual experiment that observes one component alone. State the future-data kernel before deciding which remaining uncertainty matters.

## Earlier worked questions

The original question identities, statements and complete answers remain in [the original complete exercise companion](retained-source-begin-with-the-generative-story.md). The further exercises below supply the present chapter’s staged practice.


## Solutions: a complete prior-predictive rate audit

It is a hypothetical weekly counting domain, not a report of an expert interview: require $P(\lambda>100)\le10^{-4}$ and $P(Y=0)\le0.2$ for one week's count. Compare shape-rate priors $\operatorname{Gamma}(0.01,0.01)$ and $\operatorname{Gamma}(3,1)$ under $Y\mid\lambda\sim\operatorname{Poisson}(\lambda)$. These are two explicit domain criteria, not universal definitions of plausibility.

The exact references are $P(\lambda>100)=Q(a,100b)$, where $Q$ is the regularized upper incomplete gamma function, and $P(Y=0)=(b/(b+1))^a$. The small-shape prior has predictive zero probability $101^{-0.01}>0.95$ and rate-tail probability exceeding $e^{-2}/202>10^{-4}$, as proved above. The alternative has zero probability $1/8$ and tail $5101e^{-100}$. It satisfies both chosen criteria; this comparison alone does not validate it for a real application.

The callable below draws 100,000 independent one-week datasets per prior, with distinct PCG64 seeds 20260976 and 20260977. Each replicate draws its own rate and then its count. The reference estimands are the rate-tail indicator and zero-count indicator; exact means and variances are also returned as references, without imposing an unstable sample-moment criterion on the highly skewed small-shape distribution. For an indicator with exact probability $r$, use independent-simulation MCSE $\sqrt{r(1-r)/100000}$. The declared finite regression width is six such MCSE plus $1/100000$. Rare events can be absent in a finite run; zero observed events never proves their probability zero.

To preserve tiny rates, the program samples $G\sim\operatorname{Gamma}(a+1,1)$ and $U\sim\operatorname{Uniform}(0,1)$, then stores $\log\lambda=\log G+\log U/a-\log b$. This construction is exact in real arithmetic: conditional on $G=g$, $X=gU^{1/a}$ has density $a x^{a-1}/g^a$ for $0<x<g$; integrating against $g^ae^{-g}/\Gamma(a+1)$ gives $x^{a-1}e^{-x}/\Gamma(a)$. The rate tail is evaluated on the log scale. Exponentiating can underflow to a floating zero; its count is explicitly reported. Those floating zeros represent tiny positive rates, not an atom in the Gamma prior.

Reproduction requires the declared existing CPython, NumPy and SciPy versions. Save the one following fence as cbm_prior_predictive.py and call run_prior_predictive_companion() in an isolated root-owned process. The function has no file, network, stdin or stdout I/O and returns a bounded dictionary. It supplies 200,000 boosted-Gamma, uniform and Poisson draws each; no model fitting occurs. All code here is unexecuted by the authors. The original duty is completed as a source model pending actual root execution, and this additional companion is not a substitute for any of the three principal cases or a hierarchical prior-predictive study.

An audit rubric asks whether the observation unit is a full one-week dataset, each rate is drawn once per replicate, both analytic domain tests are retained, underflow is disclosed, seeds and cost are recorded, and simulation error is separated from domain adequacy. A changed domain requires changing the criteria and rerunning; it cannot inherit the present plausibility conclusion.

## Solutions: executable prior-predictive companion

The literal Python listing below is unexecuted by the authors. Its callable returns the declared bounded result and performs no external I/O.

```python
import math
import platform
import numpy as np
import scipy
from scipy import special

DEPENDENCIES = {"CPython": "3.14.7", "NumPy": "2.5.2", "SciPy": "1.18.1"}

def _require(condition, message):
    if not condition:
        raise ValueError(message)

def _environment():
    actual = {"CPython": platform.python_version(),
              "NumPy": np.__version__, "SciPy": scipy.__version__}
    _require(actual == DEPENDENCIES, "use the pinned existing environment")
    return actual

def run_prior_predictive_companion():
    environment = _environment()
    size = 100000
    rows = []
    for name, a, b, seed in [
        ("small_shape", 0.01, 0.01, 20260976),
        ("proper_alternative", 3.0, 1.0, 20260977),
    ]:
        rng = np.random.Generator(np.random.PCG64(seed))
        # Shape augmentation: G*U**(1/a) is Gamma(a,1).
        g = rng.gamma(a + 1.0, 1.0, size=size)
        _require(bool(np.all(np.isfinite(g) & (g > 0))), "invalid gamma variate")
        u = 1.0 - rng.random(size)
        log_rate = np.log(g) + np.log(u) / a - math.log(b)
        _require(bool(np.all(np.isfinite(log_rate))), "nonfinite log rate")
        with np.errstate(under="ignore"):
            rates = np.exp(log_rate)
        _require(bool(np.all(np.isfinite(rates) & (rates >= 0))), "invalid rate")
        counts = rng.poisson(rates)
        tail_reference = float(special.gammaincc(a, b * 100.0))
        zero_reference = math.exp(a * (math.log(b) - math.log(b + 1.0)))
        tail_estimate = float(np.mean(log_rate > math.log(100.0)))
        zero_estimate = float(np.mean(counts == 0))
        tail_se = math.sqrt(tail_reference * (1.0 - tail_reference) / size)
        zero_se = math.sqrt(zero_reference * (1.0 - zero_reference) / size)
        rows.append({
            "name": name, "shape": a, "rate": b, "seed": seed,
            "rng": "Generator(PCG64)", "independent_datasets": size,
            "rate_mean_reference": a / b,
            "rate_variance_reference": a / (b * b),
            "count_mean_reference": a / b,
            "count_variance_reference": a / b + a / (b * b),
            "tail_reference": tail_reference, "tail_estimate": tail_estimate,
            "tail_iid_mcse_reference": tail_se,
            "zero_reference": zero_reference, "zero_estimate": zero_estimate,
            "zero_iid_mcse_reference": zero_se,
            "finite_precision_zero_rates": int(np.sum(rates == 0.0)),
            "domain_criteria": {"rate_tail_at_most_1e-4": tail_reference <= 1e-4,
                                "zero_count_probability_at_most_point2": zero_reference <= 0.2},
            "finite_regression_checks": {
                "tail": abs(tail_estimate - tail_reference) <= 6.0 * tail_se + 1.0 / size,
                "zero_count": abs(zero_estimate - zero_reference) <= 6.0 * zero_se + 1.0 / size,
            },
            "cost": {"boosted_gamma_draws": size, "uniform_draws": size,
                     "poisson_draws": size},
        })
    exact_alternative_tail = 5101.0 * math.exp(-100.0)
    _require(abs(rows[1]["tail_reference"] / exact_alternative_tail - 1.0) < 1e-10,
             "gamma tail reference mismatch")
    _require(rows[0]["tail_reference"] > math.exp(-2.0) / 202.0,
             "small-shape tail lower bound failed")
    _require(abs(rows[1]["zero_reference"] - 0.125) < 1e-14,
             "predictive zero reference mismatch")
    return {
        "case_id": "COMM06-CASE-01-PRIOR-COMPANION", "environment": environment,
        "settings": {"size_per_prior": size, "rate_unit": "events per week",
                     "one_week_exposure": 1.0,
                     "hypothetical_prior_tail_limit": 1e-4,
                     "hypothetical_predictive_zero_limit": 0.2},
        "rows": rows,
        "interpretation": "iid simulation estimates with analytic references; finite criteria are not universal guarantees",
        "precision_boundary": "log rates preserve the Gamma draw; zero floating rates are underflow representations, not a prior atom",
    }
```

## References: measures, reproducible generators and prior prediction

The change-of-variables, Tonelli and conditional-probability arguments used in the exposition have their hypotheses stated where applied. The public numerical companion uses the official [NumPy PCG64 documentation](https://numpy.org/doc/stable/reference/random/bit_generators/pcg64.html) for the named bit generator; complete library versions are pinned because distribution-generating transformations are part of reproduction. All algebraic references and the Gamma augmentation argument are supplied locally. No source-level review or prospective execution protocol is a human learning study.


## Worked applications

### Worked example 1: an uncertain count rate

For $\lambda\sim\operatorname{Gamma}(2,1)$ and exposure three, prior mean count is six and variance is $6+9(2)=24$. Plugging mean rate two into one Poisson law gives variance six and loses parameter uncertainty.

### Worked example 2: a log transformation

If a positive scale has density proportional to $e^{-\sigma}$, its log-scale density is proportional to $e^{\eta-e^\eta}$. The factor $e^\eta$ comes from the inverse derivative; simply substituting $e^\eta$ misses it.

### Worked example 3: nonidentified components

Observations depending only on $\theta_1+\theta_2$ can identify that sum while leaving the difference undetermined. A future total can be predictable even when a future component is not.

## Further exercises

### Exercise 101
<a id="generative-prior-predictive-audits-ex-101"></a>

Find the log-coordinate Jacobian for theta=exp(eta).

<details>
<summary>Hint 1</summary>

Differentiate the inverse map.

</details>
<details>
<summary>Hint 2</summary>

Use its absolute derivative.

</details>
<details>
<summary>Solution</summary>

The Jacobian is $e^\eta$. The transformed density is $\pi(e^\eta)e^\eta$, or its log density gains $\eta$.

</details>

### Exercise 102
<a id="generative-prior-predictive-audits-ex-102"></a>

Give predictive covariance of two exposed Poisson counts sharing a rate.

<details>
<summary>Hint 1</summary>

Condition on the rate.

</details>
<details>
<summary>Hint 2</summary>

Use total covariance.

</details>
<details>
<summary>Solution</summary>

With conditional independence and finite rate variance, covariance is $t_1t_2\operatorname{Var}(\lambda)$. The shared conditional means supply the dependence.

</details>

### Exercise 103
<a id="generative-prior-predictive-audits-ex-103"></a>

Why is a finite simulated mean not proof of a finite prior predictive mean?

<details>
<summary>Hint 1</summary>

Rare tails can be missed.

</details>
<details>
<summary>Hint 2</summary>

Check theoretical integrability.

</details>
<details>
<summary>Solution</summary>

A finite sample always produces a finite average of finite draws. It cannot establish existence of the model expectation when its tail integral diverges.

</details>

### Exercise 104
<a id="generative-prior-predictive-audits-ex-104"></a>

Differentiate a normal posterior mean under exponential tilt by eta theta.

<details>
<summary>Hint 1</summary>

Complete the Gaussian square.

</details>
<details>
<summary>Hint 2</summary>

Or use covariance sensitivity.

</details>
<details>
<summary>Solution</summary>

For baseline $N(m,v)$ the tilted posterior is $N(m+\eta v,v)$. The mean derivative is $v$, consistent with covariance of the target with the tilt statistic.

</details>

### Exercise 105
<a id="generative-prior-predictive-audits-ex-105"></a>

Explain censoring versus discarding a roster member.

<details>
<summary>Hint 1</summary>

The threshold report is observed.

</details>
<details>
<summary>Hint 2</summary>

It contributes a probability.

</details>
<details>
<summary>Solution</summary>

Censoring retains the member and integrates its likelihood over the reported tail. Discarding removes that factor and changes the information in the record.

</details>

### Exercise 106
<a id="generative-prior-predictive-audits-ex-106"></a>

When can a transformed prior be called the same law?

<details>
<summary>Hint 1</summary>

Preserve probabilities of sets.

</details>
<details>
<summary>Hint 2</summary>

Include the Jacobian.

</details>
<details>
<summary>Solution</summary>

When the coordinate map is applied with the correct change-of-variables density. Replacing it with a fresh uniform density is a different prior law.

</details>

### Exercise 107
<a id="generative-prior-predictive-audits-ex-107"></a>

Why can a proper posterior fail to identify a component?

<details>
<summary>Hint 1</summary>

A likelihood can ignore a direction.

</details>
<details>
<summary>Hint 2</summary>

Prior regularisation supplies no new observation.

</details>
<details>
<summary>Solution</summary>

Normalisation makes a probability law, but does not distinguish states sharing the same observation distribution. Posterior uncertainty in that direction remains controlled by prior assumptions.

</details>

### Exercise 108
<a id="generative-prior-predictive-audits-ex-108"></a>

For a gamma(3,2) rate prior find its mean and variance.

<details>
<summary>Hint 1</summary>

Use shape-rate conventions.

</details>
<details>
<summary>Hint 2</summary>

Variance divides by rate squared.

</details>
<details>
<summary>Solution</summary>

The mean is $3/2$ and variance $3/4$. A scale parameter of two instead would give another law, so the convention must be recorded.

</details>

### Exercise 109
<a id="generative-prior-predictive-audits-ex-109"></a>

Why must predictions distinguish a new group from an existing group?

<details>
<summary>Hint 1</summary>

They share different latent information.

</details>
<details>
<summary>Hint 2</summary>

Condition on the actual target.

</details>
<details>
<summary>Solution</summary>

Existing-group data inform its latent effect; a new independent group draws another effect. Their predictive variances therefore differ even with identical fixed covariates.

</details>

### Exercise 110
<a id="generative-prior-predictive-audits-ex-110"></a>

Can a good prior predictive fit prove the observation protocol correct?

<details>
<summary>Hint 1</summary>

Different mechanisms can match summaries.

</details>
<details>
<summary>Hint 2</summary>

Check what was actually recorded.

</details>
<details>
<summary>Solution</summary>

No. Plausible summaries are a diagnostic compatibility result, not identification of sampling, censoring or selection mechanisms. Those mechanisms remain part of the likelihood argument.

</details>

## Summary

Prior-predictive Audits and Observation Mechanisms develops the declared probability model, target and mathematical comparisons in the sections above. Keep support, observation mechanisms, conditional information and numerical approximation distinct. The original complete source remains available as a companion, with all original questions and computational listings preserved.
