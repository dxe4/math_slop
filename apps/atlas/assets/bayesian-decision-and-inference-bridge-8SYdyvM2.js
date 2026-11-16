var e=`---
parent_id: book-principles-statistical-inference
chapter_id: bayesian-decision-and-inference-bridge
title: "Bayesian Decision and Inference Bridge"
level: advanced-undergraduate
estimated_minutes: 360
license: CC BY-SA 4.0
---

# Bayesian Decision and Inference Bridge {#section-1-bayesian-decision-and-inference-bridge}

<a id="section-1-level-and-prerequisites"></a>
## Level and prerequisites {#section-3-level-and-prerequisites}

This is a chapter of the L3 inference route. Preparation is [Probability: Models, Bounds, and Proofs](../probability-models-proofs.md), especially its [Gaussian-vector chapter](../probability-models-proofs/gaussian-vectors-and-multivariate-normal.md), and [Lucent linear algebra](/lucent/web/#/course/linear-algebra). The L3 core uses the linked probability text's conditional expectation, Gaussian formulas and finite-integral calculations. General regular conditional existence is an explicit measure-theoretic import; posterior asymptotic normality and hierarchical computation require additional assumptions and are optional advanced continuations. The onward L3 route is the [Bayesian inference course](/courses/bayesian-inference/), with its [book](/books/bayesian:book/).


Bayesian inference adds a probability model for unknown quantities to the observation model. That move permits conditional probability statements about a parameter, direct probability comparisons among models, and posterior expected-loss decisions. It does not remove the need to define an experiment, estimand, action, or loss. It relocates some uncertainty into a joint model whose assumptions must be inspected.

This chapter builds the bridge from likelihood and decision theory to posterior inference. It derives conjugate updates, proves the posterior Bayes rule, separates credible probability from repeated-sampling coverage, and studies predictive checking, prior sensitivity, improper priors, model comparison, and frequentist evaluation of Bayes procedures. Computation is deliberately limited to exact algebra and finite sums; the [Bayesian Inference course](/courses/bayesian-inference/) develops simulation, diagnostics, hierarchical workflows and approximation error from L2–L3 preparation.

<a id="section-10-1-a-joint-model-creates-posterior-questions"></a>
## 1. A joint model creates posterior questions {#section-12-1-a-joint-model-creates-posterior-questions}

The frequentist experiment in earlier chapters is a family $\\{P_\\theta:\\theta\\in\\Theta\\}$. A Bayesian model adds a prior probability measure $\\Pi $ on $\\Theta $. It thereby defines a joint law

$\\theta \\sim \\Pi $, followed by $X|\\theta \\sim P_\\theta $.

The **prior predictive law** is the marginal distribution

$m(B)=\\int P_\\theta (B)d\\Pi (\\theta )$.

A posterior $\\Pi (\\cdot |X=x)$ is a conditional distribution under this joint law. In a dominated model with likelihood $L(\\theta ;x)$ and prior density $\\pi (\\theta )$, it has density

$\\pi(\\theta\\mid x)=\\frac{L(\\theta;x)\\pi(\\theta)}{\\int_\\Theta L(u;x)\\pi(u)\\,du}$,

provided the denominator is finite and positive. The denominator is the prior predictive density of $x$. The proportionality shorthand $\\pi (\\theta |x)\\propto L(\\theta ;x)\\pi (\\theta )$ is useful only after support and normalisability have been checked.

The parameter is random under the joint model and fixed when one evaluates the sampling law at a particular $\\theta $. These are not contradictory descriptions; they answer questions under different probability spaces. Confusion begins when a probability statement is moved from one space to the other without saying so.

<a id="section-28-2-posterior-odds-factor-into-evidence-and-prior-odds"></a>
## 2. Posterior odds factor into evidence and prior odds {#section-30-2-posterior-odds-factor-into-evidence-and-prior-odds}

For two models or point states $M_0,M_1$ with positive prior probabilities,

\\[\\Pi (M_1|x)/\\Pi (M_0|x)\\]

$=[m_1(x)/m_0(x)] [\\Pi (M_1)/\\Pi (M_0)]$.

The ratio $BF_{10}=m_1(x)/m_0(x)$ is the **Bayes factor**. Each $m_j$ averages the likelihood over the within-model prior. Thus a Bayes factor compares fully specified predictive distributions, not bare sets of parameter values. Changing the within-model prior can materially change the answer even when the likelihood function is unchanged.

Posterior odds are not a p-value. A p-value calibrates a tail statistic over repetitions under a null law; posterior odds condition on the observed data inside a joint probability model. Neither quantity can be recovered from the other without additional structure.

<a id="section-40-3-beta-binomial-updating"></a>
## 3. Beta–binomial updating {#section-42-3-beta-binomial-updating}

The sample-proportion weighted-average form below assumes $n\\ge1$. With zero trials, use the direct posterior formula: the posterior equals the prior, and the expression $x/n$ is not defined.

Let $X|p\\sim \\operatorname{Binomial}(n,p)$ and give $p$ a $\\operatorname{Beta}(a,b)$ prior with $a,b>0$. Ignoring factors not involving $p$,

\\[L(p;x)\\pi (p)\\propto p^x(1-p)^{n-x}p^{a-1}(1-p)^{b-1}\\]

$=p^{a+x-1}(1-p)^{b+n-x-1}$.

Therefore

$p|X=x\\sim \\operatorname{Beta}(a+x,b+n-x)$.

The posterior mean is

\\[E[p|x]=(a+x)/(a+b+n)\\]

$=[(a+b)/(a+b+n)] [a/(a+b)] + [n/(a+b+n)] [x/n]$.

It shrinks the sample proportion toward the prior mean with a weight often interpreted as a prior effective sample size. That interpretation is algebraic, not universal: it is clearest in this conjugate sampling model and does not by itself validate how $a,b$ were chosen.

For a future Bernoulli outcome $Y$, conditional independence given $p$ gives

$P(Y=1|x)=E[p|x]=(a+x)/(a+b+n)$.

For a future count of size $r$, integrating the binomial likelihood against the beta posterior yields a beta–binomial predictive distribution. Posterior uncertainty, not only a plug-in mean, enters its variance.

<a id="section-68-4-posterior-expected-loss-determines-the-bayes-action"></a>
## 4. Posterior expected loss determines the Bayes action {#section-70-4-posterior-expected-loss-determines-the-bayes-action}

After observing $x$, an action $a$ has posterior expected loss

$\\rho (a|x)=\\int L(\\theta ,a)d\\Pi (\\theta |x)$.

A **Bayes rule** chooses a measurable minimiser $\\delta _\\Pi (x)$ of this quantity when one exists.

Under squared loss $L(\\theta ,a)=(a-\\theta )^2$, expand around the posterior mean $m_x=E[\\theta |x]$:

$E[(a-\\theta )^2|x]=(a-m_x)^2+Var(\\theta |x)$.

If the posterior second moment is finite, the cross term vanishes and the unique minimiser is the posterior mean. A finite mean alone is not enough to make posterior squared risk finite. Under absolute loss and a finite posterior first absolute moment, any posterior median minimises expected absolute deviation. Under zero–one loss on a finite state space, a posterior mode is optimal. The loss, not Bayesianism alone, selects the summary.

The prior Bayes risk of a rule is

$r_\\Pi (\\delta )=\\int R(\\theta ,\\delta )d\\Pi (\\theta )$.

Tonelli's theorem for nonnegative loss gives

$r_\\Pi (\\delta )=E[L(\\theta ,\\delta (X))]=E[E[L(\\theta ,\\delta (X))|X]]$.

Minimising the inner expectation for each $X$ therefore minimises integrated risk. This proof needs a proper joint distribution and measurable decisions; a formal posterior calculation is not enough.

<a id="section-92-5-normal-normal-updating-and-shrinkage"></a>
## 5. Normal–normal updating and shrinkage {#section-94-5-normal-normal-updating-and-shrinkage}

Throughout the normal density and precision calculations assume $\\sigma^2>0$ and $\\tau^2>0$. A zero-variance prior or observation is a separate degenerate law, not a case in which these reciprocal-variance formulas are defined.

Let $X|\\theta \\sim \\operatorname{Normal}(\\theta ,\\sigma ^2)$ with known $\\sigma ^2$, and $\\theta \\sim \\operatorname{Normal}(\\mu _0,\\tau ^2)$. Completing the square gives posterior variance and mean

$v=(1/\\tau ^2+1/\\sigma ^2)^{-1}=\\sigma ^2\\tau ^2/(\\sigma ^2+\\tau ^2)$,

\\[m=v(\\mu _0/\\tau ^2+x/\\sigma ^2)\\]

$=[\\sigma ^2/(\\sigma ^2+\\tau ^2)]\\mu _0+[\\tau ^2/(\\sigma ^2+\\tau ^2)]x$.

The squared-loss Bayes action shrinks $x$ toward $\\mu _0$. Its sampling bias at a fixed state is

$E_\\theta [m]-\\theta =[\\sigma ^2/(\\sigma ^2+\\tau ^2)](\\mu _0-\\theta )$.

Its frequentist risk combines the squared bias with the reduced variance. Bayes optimality is an average-risk claim under the prior; fixed-$\\theta $ risk remains a distinct diagnostic.

For a future observation $Y|\\theta \\sim \\operatorname{Normal}(\\theta ,\\sigma ^2)$ conditionally independent of $X$, the posterior predictive law is $\\operatorname{Normal}(m,\\sigma ^2+v)$. The additional $v$ records uncertainty about $\\theta $; using only $\\operatorname{Normal}(m,\\sigma ^2)$ would be overconfident.

<a id="section-112-6-credible-sets-and-confidence-sets-make-different-guar"></a>
## 6. Credible sets and confidence sets make different guarantees {#section-114-6-credible-sets-and-confidence-sets-make-different-guar}

A $1-\\alpha $ posterior credible set $C(x)$ satisfies

\\[\\Pi (\\theta \\in C(x)|x)=1-\\alpha \\]

or at least that probability when discreteness prevents equality. Its probability is conditional on observed data under the joint model.

A $1-\\alpha $ confidence procedure satisfies

\\[P_\\theta (\\theta \\in C(X))\\ge 1-\\alpha \\]

for each declared sampling state, or according to a stated uniform or asymptotic scope. Its guarantee concerns repetitions at fixed $\\theta $.

The same numerical interval can have both interpretations in special models, but one property does not follow from the other in general. A prior-averaged coverage identity does hold:

$P(\\theta \\in C(X))=E[\\Pi (\\theta \\in C(X)|X)]$.

Thus an exact $1-\\alpha $ credible procedure has joint prior-predictive coverage $1-\\alpha $. This average can hide poor conditional sampling coverage at particular states.

<a id="section-132-7-posterior-prediction-and-model-checking"></a>
## 7. Posterior prediction and model checking {#section-134-7-posterior-prediction-and-model-checking}

The posterior predictive distribution for replicated data is

$P(X^{\\mathrm{rep}}\\in B|x)=\\int P_\\theta (B)d\\Pi (\\theta |x)$.

It answers what the fitted joint model predicts after learning from $x$. Comparing a discrepancy $T(X^{\\mathrm{rep}})$ with $T(x)$ can reveal that the model fails to reproduce relevant structure. Such a check is not automatically a uniformly calibrated hypothesis test because the data help construct the posterior predictive reference.

A useful workflow separates three questions:

1. **fit:** what posterior follows if the model is accepted?
2. **predictive adequacy:** what observable patterns does that fitted model fail to reproduce?
3. **sensitivity:** which conclusions move under plausible changes to prior, likelihood, missingness, or measurement assumptions?

Good posterior concentration inside a bad model can be precisely wrong.

<a id="section-148-8-likelihood-principle-and-stopping-information"></a>
## 8. Likelihood principle and stopping information {#section-150-8-likelihood-principle-and-stopping-information}

Within a fixed prior and likelihood, proportional likelihoods produce the same posterior. This is one form of the likelihood principle. A frequentist procedure can still depend on outcomes that might have occurred, including the stopping rule, because its error probability is defined across repetitions of the full experiment.

The apparent disagreement must be stated carefully. If the stopping mechanism is ignorable for the joint model and contributes no parameter-dependent factor, it cancels from posterior updating. If stopping depends on unrecorded outcomes, carries information about $\\theta $, changes selection, or was not actually ignorable, omitting it changes the likelihood. Optional stopping is not a universal permission to forget the protocol.

Sequential Bayes actions also accumulate operational error and cost even if the posterior calculation remains coherent. Decisions require a loss for delay, sampling, false action, and resource use.

<a id="section-156-9-point-nulls-require-prior-mass"></a>
## 9. Point nulls require prior mass {#section-158-9-point-nulls-require-prior-mass}

For a continuous prior density on $\\theta $, the event $\\{\\theta=\\theta_0\\}$ has prior and posterior probability zero. To assign posterior probability to an exact null, use a mixture such as

$\\Pi =w\\delta _{\\theta _0}+(1-w)\\Pi _1$.

Then posterior null probability depends on $w$ and on the alternative prior $\\Pi _1$. A very diffuse alternative spreads predictive mass thinly and can favour the point null even when a classical test reports a small p-value. This is not an algebraic paradox: the procedures ask different questions and average alternatives differently.

Model selection also changes the estimand. Parameters absent from a selected model cannot be interpreted as though selection were fixed in advance without a declared post-selection or model-averaging framework.

<a id="section-166-10-improper-priors-are-formal-devices-not-probability-l"></a>
## 10. Improper priors are formal devices, not probability laws {#section-168-10-improper-priors-are-formal-devices-not-probability-l}

An improper prior has infinite total mass, such as the flat measure $\\pi (\\theta )\\propto 1$ on $R$. It may yield a proper posterior in some likelihoods. For one normal observation with known variance, the formal posterior is $\\operatorname{Normal}(x,\\sigma ^2)$.

But an improper prior supplies no prior predictive probability and no ordinary prior Bayes risk. Multiplicative constants can fail to cancel in Bayes factors between models, making model probabilities arbitrary. Propriety must be checked for every dataset allowed by the protocol, not only the observed one.

Improper limits can be useful approximations, but the limiting sequence should be declared. Different sequences of proper priors can produce different limits for model comparison or nuisance integration.

<a id="section-174-11-prior-sensitivity-is-part-of-identification"></a>
## 11. Prior sensitivity is part of identification {#section-176-11-prior-sensitivity-is-part-of-identification}

When data are weakly informative, posterior conclusions can be driven by prior mass in regions the likelihood barely distinguishes. Sensitivity analysis should vary scientifically plausible prior location, scale, tail, dependence, and model weights—not merely compare two convenient conjugate forms.

For a reported functional $g(\\theta )$, record how posterior mean, interval, tail probability, decision, and predictive distribution change. A robust conclusion survives a declared class of priors. A fragile conclusion is not unusable, but its dependency must be visible.

Prior predictive simulation or calculation offers an early check: does the prior plus observation model assign reasonable mass to datasets on the scale and structure that could actually occur? A prior that looks vague on one coordinate can be highly informative after nonlinear transformation.

<a id="section-182-12-frequentist-evaluation-of-bayes-procedures"></a>
## 12. Frequentist evaluation of Bayes procedures {#section-184-12-frequentist-evaluation-of-bayes-procedures}

A Bayes rule is still a data-dependent rule, so it has sampling risk $R(\\theta ,\\delta _\\Pi )$ and can be studied for bias, coverage, consistency, robustness, and minimaxity. Earlier chapters used diffuse proper priors to prove a minimax lower bound and used conjugate posterior means to explain shrinkage.

Conversely, a confidence interval can be evaluated under a prior predictive distribution, and a p-value can enter a Bayesian workflow as a model diagnostic. Evaluating a procedure under another framework does not change the meaning of its original guarantee. It adds another axis of performance.

The productive bridge is therefore a two-ledger comparison:

- the **conditional ledger** records posterior probability and expected loss under the joint model;
- the **sampling ledger** records behaviour across repetitions under each relevant data-generating state.

Neither ledger licenses causal, external-validity, or missing-data conclusions absent the assumptions studied in the design chapters.

<a id="section-195-13-hierarchical-learning-and-empirical-bayes-boundary"></a>
## 13. Hierarchical learning and empirical Bayes boundary {#section-197-13-hierarchical-learning-and-empirical-bayes-boundary}

With many related groups, a hierarchical model can learn shared hyperparameters and partially pool group estimates. Conditional on a fully specified hierarchy, posterior updating is ordinary Bayesian conditioning. If hyperparameters are estimated by marginal likelihood and then treated as fixed, the procedure is empirical Bayes; uncertainty from that estimation may be understated unless propagated.

Exchangeability is a substantive assumption. Schools, hospitals, experiments, or regions are not interchangeable merely because a model can index them. Covariates, selection, interference, and changing measurement regimes can invalidate simple pooling.

This chapter stops before Markov-chain Monte Carlo, variational inference, sequential Monte Carlo, convergence diagnostics, and large hierarchical models. Those methods require a computational error ledger in addition to the statistical one.

<a id="section-203-14-bayesian-inference-audit"></a>
## 14. Bayesian inference audit {#section-205-14-bayesian-inference-audit}

Before accepting a posterior statement, record:

1. the observation law, prior, supports, and dominating measures;
2. whether the posterior is finite and proper for all allowed datasets;
3. which estimand, action, and loss are being used;
4. whether a probability is posterior, prior predictive, or repeated-sampling;
5. the within-model priors behind every Bayes factor;
6. prior predictive implications and sensitivity class;
7. stopping, selection, missingness, and measurement assumptions;
8. posterior predictive failures and alternative models considered;
9. approximation method and computational diagnostics, if any;
10. fixed-state sampling behaviour when the application requires it.

<a id="section-218-15-exercises-with-complete-solutions"></a>
## 17. Development: derive a complete beta–binomial predictive law {#section-768-17-development-derive-a-complete-beta-binomial-predicti}

<a id="section-768-worked-example-1-integrate-the-full-predictive-count-la"></a>
### Worked example 1: integrate the full predictive count law {#section-770-worked-example-1-integrate-the-full-predictive-count-la}

After $x$ successes in $n$ trials, write the beta posterior shapes as $\\alpha=a+x$, $\\beta=b+n-x$ and $s=\\alpha+\\beta$, with $\\alpha,\\beta>0$. Suppose a future experiment records a count $K$ from $r$ Bernoulli trials, where $r$ is a positive integer. The old and future trials are independent conditional on the same unknown success probability $p$. That shared parameter is important: a future experiment with a changed population need not have this predictive law.

Define $B(u,v)=\\int_0^1t^{u-1}(1-t)^{v-1}\\,dt$ for positive $u,v$. Integrating the future binomial mass against the posterior gives, for $k=0,\\ldots,r$,

$$P(K=k\\mid x)
 =\\binom rk\\frac{B(\\alpha+k,\\beta+r-k)}{B(\\alpha,\\beta)}.$$

To verify normalisation, move the finite sum inside the defining integral. Its binomial factor becomes $\\sum_k\\binom rk p^k(1-p)^{r-k}=(p+1-p)^r=1$. The remaining integral is precisely the posterior normalising constant. This proves a probability law for every possible future count, rather than merely a formula for its mean.

The beta recurrences give $E[p\\mid x]=\\alpha/s$ and $E[p^2\\mid x]=\\alpha(\\alpha+1)/[s(s+1)]$. For example, the first follows from $B(\\alpha+1,\\beta)/B(\\alpha,\\beta)=\\alpha/s$, and the second applies the same recurrence twice. Subtracting the squared mean yields $\\operatorname{Var}(p\\mid x)=\\alpha\\beta/[s^2(s+1)]$.

Put $\\mu=\\alpha/s$. Conditional expectation and variance now give

$$E[K\\mid x]=r\\mu,\\qquad
\\operatorname{Var}(K\\mid x)
 =r\\mu(1-\\mu)\\left\\{1+\\frac{r-1}{s+1}\\right\\}.$$

For the variance, use $E[rp(1-p)\\mid x]+\\operatorname{Var}(rp\\mid x)$, then write $E[p(1-p)]=\\mu(1-\\mu)-\\operatorname{Var}(p)$. A plug-in binomial keeps only $r\\mu(1-\\mu)$ and therefore understates this predictive variance when $r>1$. The extra term is uncertainty about a shared probability, not extra noise appended independently to each future trial.

Under the earlier posterior $\\operatorname{Beta}(9,6)$, take $r=2$. The exact probabilities for $K=0,1,2$ are respectively $7/40$, $9/20$ and $3/8$. For instance, the last is $9\\cdot10/(15\\cdot16)$ and the middle is $2\\cdot9\\cdot6/(15\\cdot16)$. They sum to one. The predictive mean is $6/5$ and variance $51/100$, while the binomial plug-in variance is $12/25$.

Individual future indicators are independent given $p$, but not after averaging over the posterior. Their covariance is $\\operatorname{Var}(p\\mid x)$, because their conditional product expectation is $p^2$. Their correlation is $1/(s+1)$. This is the same mixture logic as the opening chapter's shared group condition, now used for posterior prediction. Independence has to name the conditioning level in both settings.

For completeness, the beta recurrence used above follows from two elementary identities. Splitting $1=p+(1-p)$ inside its integral gives $B(u,v)=B(u+1,v)+B(u,v+1)$. Integrating the derivative of $p^u(1-p)^v$, whose endpoint values vanish for $u,v>0$, gives $uB(u,v+1)=vB(u+1,v)$. Solving the two equations yields $B(u+1,v)=uB(u,v)/(u+v)$. This justifies the moment calculation without treating a remembered distribution table as a proof.

<a id="section-795-18-development-evaluate-a-normal-credible-interval-at-f"></a>
## 18. Development: evaluate a normal credible interval at fixed states {#section-797-18-development-evaluate-a-normal-credible-interval-at-f}

<a id="section-797-worked-example-2-compute-a-credible-procedure-s-coverag"></a>
### Worked example 2: compute a credible procedure's coverage {#section-799-worked-example-2-compute-a-credible-procedure-s-coverag}

Let $X$ be a sample mean with exact sampling law $N(\\theta,v_n)$, where $v_n=\\sigma_0^2/n>0$ comes from $n$ independent normal observations with known variance $\\sigma_0^2$. Use a proper prior $N(\\mu_0,\\tau^2)$ with $\\tau^2>0$. The square completion developed in the shrinkage chapter gives posterior mean $m=\\mu_0+b(X-\\mu_0)$ and variance $V=bv_n$, where $b=\\tau^2/(\\tau^2+v_n)\\in(0,1)$.

At a fixed state $\\theta$, write $X=\\theta+\\sqrt{v_n}Z$ with $Z\\sim N(0,1)$. Then

$$m-\\theta=b\\sqrt{v_n}Z-(1-b)(\\theta-\\mu_0),$$

so its squared-error sampling risk is $b^2v_n+(1-b)^2(\\theta-\\mu_0)^2$. The posterior variance $V$ is not this fixed-state risk. It is a conditional uncertainty under the joint model and contains no argument $\\theta$ at which to evaluate a sampling bias.

For $0<\\alpha<1$, let $z=\\Phi^{-1}(1-\\alpha/2)$. The equal-tail credible interval $C(X)=[m-z\\sqrt V,m+z\\sqrt V]$ has posterior probability exactly $1-\\alpha$. Its fixed-state coverage follows by solving the preceding normal inequality:

$$c_n(\\theta)=
 \\Phi\\left(d+\\frac z{\\sqrt b}\\right)
 -\\Phi\\left(d-\\frac z{\\sqrt b}\\right),\\qquad
 d=\\frac{(1-b)(\\theta-\\mu_0)}{b\\sqrt{v_n}}.$$

This is an exact normal calculation, not a generic credible-to-confidence conversion. At the prior centre, $d=0$, so coverage is $2\\Phi(z/\\sqrt b)-1>1-\\alpha$. For any fixed $n$ and finite positive prior variance, coverage tends to zero as $|\\theta-\\mu_0|$ tends to infinity. Shrinkage can over-cover near the centre while severely under-covering distant states.

The tower-property identity from Section 6 still gives average coverage $1-\\alpha$ when $\\theta$ is actually drawn from the stated prior. That identity does not force equality at each state. It weights the centre and the distant tails according to the prior distribution whose conditional calculations produced the interval.

As a concrete symbolic example, set $v_n=\\tau^2=1$ and $\\mu_0=0$. Then $b=1/2$, $V=1/2$, sampling risk is $(1+\\theta^2)/4$, and coverage is $\\Phi(\\theta+z\\sqrt2)-\\Phi(\\theta-z\\sqrt2)$. At zero it exceeds nominal coverage; the displayed function lets a reader evaluate any other specified state without changing probability spaces. No normal table output is being presented as observed data.

If $\\tau^2$ is held fixed while $n$ grows, then $b\\to1$, $d=\\sqrt{v_n}(\\theta-\\mu_0)/\\tau^2\\to0$ for each fixed $\\theta$, and coverage tends to $1-\\alpha$. This pointwise limit does not give uniform coverage over the unbounded state space: at every finite $n$, sufficiently distant states still have arbitrarily poor coverage. The distinction between the two quantifier orders survives even in a conjugate model with no computational approximation.

<a id="section-822-19-development-a-finite-bayes-factor-with-visible-prior"></a>
## 19. Development: a finite Bayes factor with visible prior sensitivity {#section-824-19-development-a-finite-bayes-factor-with-visible-prior}

<a id="section-824-worked-example-3-compare-proper-predictive-model-probab"></a>
### Worked example 3: compare proper predictive model probabilities {#section-826-worked-example-3-compare-proper-predictive-model-probab}

Consider a fixed experiment of four independent coin trials, recording the success count $X$. Model $M_0$ specifies $p=1/2$. First let $M_1$ specify $p=3/4$. For the possible record $X=3$, the count probabilities are

$$m_0(3)=\\binom43(1/2)^4=\\frac14,\\qquad
m_1(3)=\\binom43(3/4)^3(1/4)=\\frac{27}{64}.$$

Thus $BF_{10}=27/16$. The binomial coefficient cancels in this ratio because both models describe the same count-recording protocol. It would be incorrect to cancel different protocol factors without deriving both observation laws.

With equal prior model probabilities, the posterior probability of $M_1$ is $27/(27+16)=27/43$. With prior odds $M_1:M_0=1:9$, posterior odds become $(27/16)/9=3/16$, and the posterior probability is $3/19$. The data likelihoods are unchanged; the different posterior statements follow from different explicit joint models.

A one-sided null p-value for the same count is $P_{1/2}(X\\geq3)=5/16$. This tail probability includes the possible record four, whereas the Bayes factor compares predictive masses at the actual record three. Neither number is a conversion of the other. Both calculations are exact under their respective specified questions.

Now change the within-alternative prior. Let $M_1$ give probability $\\lambda$ to $p=3/4$ and $1-\\lambda$ to $p=1/4$, with $0\\leq\\lambda\\leq1$ fixed before observing the count. The second point has count-three probability $3/64$. Therefore

$$m_1(3)=\\frac{3+24\\lambda}{64},\\qquad
BF_{10}=\\frac{3+24\\lambda}{16}.$$

At $\\lambda=1$ the Bayes factor is $27/16>1$; at $\\lambda=1/2$ it is $15/16<1$. The same union of alternatives can be favoured or disfavoured depending on its predictive weighting. An unspecified alternative set is not enough to define a Bayes factor.

Under equal model odds, posterior preference switches when $\\lambda>13/24$. Reporting that threshold is a compact sensitivity analysis: it identifies which within-model prior choices change the conclusion. It does not tell us which choice is scientifically appropriate. Assigning $\\lambda$ after seeing which value produces a preferred answer adds a data-dependent selection rule and needs its own declared model.

A decision introduces another explicit input. Under the first alternative and equal model odds, assign false-positive loss $L(0,1)=2$ and false-negative loss $L(1,0)=1$, with zero loss for a correct model action. Posterior loss of action one is $2(16/43)=32/43$, while posterior loss of action zero is $27/43$. The Bayes action is zero, despite posterior model one being more probable. A posterior probability is evidence within a model; an action also needs consequences.

<a id="section-848-20-development-locate-the-posterior-normalisation-bound"></a>
## 20. Development: locate the posterior normalisation boundary {#section-850-20-development-locate-the-posterior-normalisation-bound}

For the dominated construction, assume a proper prior $\\Pi$ and a jointly measurable nonnegative likelihood density $L(\\theta;x)$ relative to one observation measure $\\mu$. Define $m(x)=\\int L(\\theta;x)\\,d\\Pi(\\theta)$. Tonelli gives $\\int m(x)\\,d\\mu(x)=1$. In particular, $m$ is finite for $\\mu$-almost-every record. Where $0<m(x)<\\infty$, define

$$\\Pi(A\\mid x)=\\frac{\\int_A L(\\theta;x)\\,d\\Pi(\\theta)}{m(x)}.$$

For each such $x$ this is a probability measure. To check that it has the conditional-distribution property, multiply by $m(x)$ and integrate over an observation event $B$. Tonelli yields

$$\\int_B\\Pi(A\\mid x)m(x)\\,d\\mu(x)
 =\\int_A P_\\theta(B)\\,d\\Pi(\\theta).$$

The identity holds after arbitrary specification on predictive-null exceptional records. This verifies the dominated formula directly. It does not prove a universal disintegration theorem for arbitrary measurable spaces or nondominated families; those require separately stated existence and measurability conditions.

If $m(x)=0$, nonnegative integration implies $L(\\theta;x)=0$ for prior-almost-every $\\theta$. It does not imply zero at every point in the topological support of the prior. The corrected original Exercise 2 and its explicit erratum below spell out that distinction. Conditional distributions are determined only up to predictive-null changes; a ratio with zero denominator cannot choose a unique version there.

An improper prior changes the first step. For the formal beta prior proportional to $p^{-1}(1-p)^{-1}$, a binomial record gives posterior kernel $p^{x-1}(1-p)^{n-x-1}$. It integrates finitely exactly when $0<x<n$. At $x=0$ the integral diverges near zero, and at $x=n$ it diverges near one. These endpoint records have positive sampling probability for every interior $p$ in a fixed finite-trial experiment.

A posterior calculation that works after an interior count therefore does not validate that improper device for the complete fixed-$n$ protocol. By contrast, a proper $\\operatorname{Beta}(\\varepsilon,\\varepsilon)$ prior with $\\varepsilon>0$ yields positive posterior shapes for every count. It defines a coherent joint model, although its prior sensitivity and operational merits remain separate questions.

This is also why proper-prior minimax arguments were carried out with finite prior variances before taking a limit. A sequence of probability models can establish an inequality without pretending that an infinite-mass limit has a prior predictive distribution. The computational companion addresses numerical approximation to a well-defined target; computation cannot normalise an infinite integral merely by returning a finite number.

<a id="section-869-21-development-turn-predictive-probabilities-into-an-au"></a>
## 21. Development: turn predictive probabilities into an auditable comparison {#section-871-21-development-turn-predictive-probabilities-into-an-au}

The beta–binomial and normal examples illustrate two different sources of predictive spread. In the beta case, future trials share the unknown $p$, so posterior averaging produces positive dependence among them. In the normal case, a future observation contains both its new sampling noise and the posterior uncertainty about its mean. Neither spread is obtained by attaching the standard error of a fitted parameter to an unrelated future quantity.

Before calculating a prediction, identify whether the future unit comes from the same conditional law. An assay recalibrated next year, a hospital with a different recruitment mechanism, or a new treatment version may require a new parameter or transport assumption. Conjugacy is an algebraic convenience after that bridge has been specified; it is not evidence that the bridge is true.

A useful comparison table can therefore have separate columns for the posterior target, the future recorded object, the fixed-state sampling guarantee and the action loss. For the finite coin example these entries are model probability, a four-trial count, the null count law and the two classification costs. For the normal interval they are conditional parameter uncertainty, a future noisy observation, the explicit coverage function and squared estimation loss. Keeping the columns distinct prevents a favourable entry in one from being used to fill an uncalculated entry in another.

Sensitivity should alter a named link rather than merely display several answers. Varying prior model odds changes the conditional model probability. Varying within-model weights changes the predictive evidence itself. Varying the sampling variance changes both the posterior target under a working model and the actual calibration under the data-generating law. A report should state which guarantee survives each change and which becomes conditional on the old assumption.

These exact examples need no sampling algorithm. Their purpose is to expose the probability and decision structure that later computational methods must approximate. When simulation or optimisation is introduced, it adds an error and diagnostic ledger to these existing ledgers; it does not replace them.

<a id="section-881-22-development-a-prior-allocates-an-unidentified-sum"></a>
## 22. Development: a prior allocates an unidentified sum {#section-883-22-development-a-prior-allocates-an-unidentified-sum}

A proper posterior does not by itself establish identification. Suppose $X_1,\\ldots,X_n$ are independent $N(\\alpha+\\beta,\\sigma^2)$ observations with known positive variance. The observable law identifies $S=\\alpha+\\beta$ but cannot distinguish different component pairs having the same sum. Put independent proper priors $N(m_A,v_A)$ and $N(m_B,v_B)$ on the two components, with both variances positive.

Let $m_S=m_A+m_B$ and $v_S=v_A+v_B$. The induced prior for $S$ is $N(m_S,v_S)$. Conditional on $S=s$, substitute $\\beta=s-\\alpha$ into the two prior densities and complete the square in $\\alpha$. The result is

$$\\alpha\\mid S=s\\sim
 N\\left(m_A+\\frac{v_A}{v_S}(s-m_S),
         \\frac{v_Av_B}{v_S}\\right).$$

The conditional variance is positive. It describes uncertainty along one observational-equivalence line, not uncertainty about the identifiable sum. The likelihood is a function of $S$ alone, so conditioning additionally on the data does not change this conditional distribution of $\\alpha$ given $S$.

The normal update for the sum is explicit. With $w=\\sigma^2/n$ and $\\lambda=v_S/(v_S+w)$,

$$S\\mid x\\sim N(M,W),\\qquad
M=m_S+\\lambda(\\bar x-m_S),\\quad
W=\\frac{v_Sw}{v_S+w}.$$

Applying conditional expectation and variance to the previous conditional distribution gives

$$E[\\alpha\\mid x]=m_A+\\frac{v_A}{v_S}(M-m_S),\\qquad
\\operatorname{Var}(\\alpha\\mid x)
 =\\frac{v_Av_B}{v_S}+\\frac{v_A^2}{v_S^2}W.$$

Every expression is finite and the posterior is mathematically well defined. Yet even if repeated data learn the sum with arbitrarily high precision, the first variance term remains. The experiment did not gain a second measurement direction by acquiring a prior.

For zero prior means and $v_A=v_B=1$, learning the sum as one leaves component posterior mean one half and variance one half. With $v_A=9,v_B=1$, the corresponding mean is nine tenths and variance nine tenths. These are conditional limits as uncertainty about the sum vanishes, not empirical estimates from an executed dataset. Both priors agree with the same learned sum; they allocate it differently because they express different information about the components.

It would be inaccurate to call the prior's allocation meaningless: genuine external information can legitimately distinguish the components. It would also be inaccurate to call that distinction identified by these observations. The audit should state which parts came from the likelihood and which from the prior. Sensitivity along equivalence classes is especially revealing, because no increased sample size under the same observation law can arbitrate between those allocations.

This example connects the Bayesian bridge to the identification chapter rather than offering a competing definition. A posterior distribution is conditional on a joint model. Identification asks whether the observation law alone determines the target over the declared state class. A prior can add information to the first question without changing the answer to the second.

<a id="section-913-23-development-prediction-shares-parameter-uncertainty-"></a>
## 23. Development: prediction shares parameter uncertainty across future units {#section-915-23-development-prediction-shares-parameter-uncertainty-}

Suppose the posterior for a normal mean is $N(m,V)$ and future observations have known noise variance $\\sigma^2$. Conditional on the mean they are independent and follow the same observation law. One posterior predictive construction uses independent standard normal variables $U,Z_1,\\ldots,Z_r$:

$$\\theta=m+\\sqrt V\\,U,\\qquad
Y_j=\\theta+\\sigma Z_j.$$

This construction describes a conditional predictive distribution given the old data; it is not a claim that these auxiliary draws were generated. A linear combination of independent normals is normal, so a single future observation has law $N(m,V+\\sigma^2)$. For the whole future vector, the mean is $m\\mathbf1$ and covariance is $\\sigma^2I_r+V\\mathbf1\\mathbf1^{\\mathsf T}$.

The off-diagonal covariance is $V$, because all future units share the same posterior-uncertain mean. The future average has variance $V+\\sigma^2/r$. Increasing the number of future units reduces their new sampling noise, while the uncertainty learned from the old dataset remains. A collection of independent draws from $N(m,V+\\sigma^2)$ would have the right one-unit marginal law but the wrong joint prediction.

Posterior predictive checks also need their own reference interpretation. In the one-observation model with prior $N(0,\\tau^2)$ and known noise variance $\\sigma^2$, write $b=\\tau^2/(\\tau^2+\\sigma^2)$. The predictive probability of a replicate exceeding the observed value is

$$p_{\\mathrm{pp}}(x)=P(Y^{\\mathrm{rep}}\\geq x\\mid x)
 =1-\\Phi\\left(\\frac{(1-b)x}{\\sigma\\sqrt{1+b}}\\right).$$

This is a well-defined diagnostic. It is not a universally valid p-value for the composite family of possible fixed means. To see why, put $\\kappa=(1-b)/\\sqrt{1+b}>0$. Under fixed state $\\theta$, $X/\\sigma\\sim N(\\theta/\\sigma,1)$, so for $0<t<1$,

$$P_\\theta\\{p_{\\mathrm{pp}}(X)\\leq t\\}
 =1-\\Phi\\left(\\frac{\\Phi^{-1}(1-t)}{\\kappa}
                     -\\frac{\\theta}{\\sigma}\\right).$$

For any fixed threshold $t$, this tends to one as $\\theta$ grows, although every such $\\theta$ is an allowed sampling state. Thus the required super-uniform bound can fail. The failure is not a numerical approximation or an error in the posterior calculation; it is a different repeated-sampling question from the conditional predictive one.

A checking discrepancy should be chosen for a scientifically relevant failure mode, and its interpretation should say whether it compares a joint prior predictive model, a fitted posterior predictive distribution or a fixed-state null family. These exact calculations illustrate why simply writing the word “probability” beside all three does not supply a common calibration theorem.

Prediction can also be evaluated under an explicit score. For a future binary outcome with predictive success probability $\\pi_x$, a reported probability $q$ has conditional expected squared error $\\pi_x(1-\\pi_x)+(q-\\pi_x)^2$. The predictive probability uniquely minimises that score under the joint model. At a fixed true success probability $p$, the corresponding sampling expression is $p(1-p)+(q-p)^2$, with any randomness in the fitted $q$ averaged as part of the procedure. These two identities follow by expanding the same square under different laws. A forecast can be conditionally optimal under its model while performing poorly when its predictive law is wrong.

<a id="section-941-24-erratum-and-elaboration-of-original-exercise-2"></a>
## 24. Erratum and elaboration of original Exercise 2 {#section-943-24-erratum-and-elaboration-of-original-exercise-2}

<a id="section-943-original-exercise-2-zero-normaliser-and-prior-null-stat"></a>
### Original Exercise 2: zero normaliser and prior-null states {#section-945-original-exercise-2-zero-normaliser-and-prior-null-stat}

The conclusion holds prior-almost-everywhere; membership in the prior support alone does not give a pointwise assertion. If $m(x)=\\int L(u;x)\\,d\\Pi(u)=0$, then for each positive integer $k$,

$$0\\geq\\frac1k\\Pi\\{u:L(u;x)\\geq1/k\\}.$$

Every displayed set has prior probability zero. Their countable union is $\\{u:L(u;x)>0\\}$, proving the almost-everywhere assertion.

For a counterexample to the old pointwise wording, take a uniform prior on $[0,1]$ and a binary observation with $P_u(X=1)=1_{\\{u=0\\}}$. This is a measurable dominated sampling model. It has $m(1)=0$ although $L(0;1)=1$, and zero belongs to the topological support of the uniform prior. The impossible predictive record cannot select a posterior version through the displayed ratio. Additional continuity assumptions could change pointwise conclusions, but were absent from the original exercise.

<a id="section-953-25-optional-practice-extensions"></a>

<a id="section-434-summary"></a>
## Summary {#section-436-summary}

<a id="section-763-16-summary-and-onward-route"></a>
A prior and observation law form a joint probability model. Conditioning yields posterior distributions; posterior expected loss yields Bayes actions; integration yields prediction and model evidence. These statements remain conditional on prior, likelihood, protocol, support, and computation. Credible probability, confidence coverage, p-values, and Bayes factors retain distinct meanings. The final chapter now stress-tests the entire book through compact counterexamples and a capstone that forces every inference claim back through its experiment, estimand, calibration, sensitivity, and decision ledgers.


<a id="section-766-17-development-derive-a-complete-beta-binomial-predicti"></a>

<a id="section-1028-summary"></a>
A proper prior and sampling kernel create the joint law needed for posterior conditioning and Bayes decisions. Verify positive finite normalisation, support, loss integrability and future conditional independence. Credible mass, prior-average coverage and fixed-state risk use different probability statements. Continue to the L3 Bayesian course for modelling, computation and diagnostic workflows while retaining these distinctions.

The main route continues to [Counterexample Atlas and Inference Capstones](counterexample-atlas-and-inference-capstones.md).

## Exercises {#section-220-15-exercises-with-complete-solutions}

<a id="section-220-1-prior-predictive-law"></a>
### 1. Prior predictive law {#section-222-1-prior-predictive-law}

**Exercise 18.1**

Show that $m(B)=\\int P_\\theta (B)d\\Pi (\\theta )$ is a probability measure.

<details>
<summary>Hint 1</summary>

A mixture integrates a measurable probability kernel against a proper prior.

</details>

<details>
<summary>Hint 2</summary>

Check nonnegativity, total mass one and countable additivity using Tonelli on disjoint events.

</details>

<details>
<summary>Solution</summary>

**Solution.** Nonnegativity is inherited from each $P_\\theta $. Also $m(X)=\\int 1d\\Pi =1$. For disjoint $B_j$, countable additivity of each sampling law and Tonelli's theorem give $m(\\cup B_j)=\\int \\sum _jP_\\theta (B_j)d\\Pi =\\sum _jm(B_j)$. Measurability of $\\theta \\mapsto P_\\theta (B)$ is part of the model specification.

</details>

<a id="section-247-2-posterior-normalisation"></a>
### 2. Posterior normalisation {#section-249-2-posterior-normalisation}

**Exercise 18.2**

Why must the marginal likelihood be positive and finite?

<details>
<summary>Hint 1</summary>

The denominator is the integral of the nonnegative likelihood-prior kernel.

</details>

<details>
<summary>Hint 2</summary>

Zero and infinity prevent ordinary density normalisation; predictive-null observations need their own conditional version.

</details>

<details>
<summary>Solution</summary>

**Solution.** A posterior density divides by $m(x)=\\int L(u;x)\\pi (u)du$. If $m(x)=0$, nonnegativity implies $L(u;x)=0$ for prior-almost-every $u$, not necessarily at every point of the prior support. If $m(x)=\\infty $, the proposed numerator cannot be normalised. At either value the displayed ratio does not define a posterior density; conditional versions on predictive-null records need separate specification.

</details>

<a id="section-274-3-beta-binomial-update"></a>
### 3. Beta–binomial update {#section-276-3-beta-binomial-update}

**Exercise 18.3**

Starting from $\\operatorname{Beta}(2,3)$ and observing $x=7$ successes in $n=10$, find the posterior.

<details>
<summary>Hint 1</summary>

Beta conjugacy adds success and failure counts to the two shapes.

</details>

<details>
<summary>Hint 2</summary>

Use first shape $2+7$ and second shape $3+(10-7)$.

</details>

<details>
<summary>Solution</summary>

**Solution.** Add successes to the first shape and failures to the second: $a+x=9$ and $b+n-x=6$. Hence $p|x\\sim \\operatorname{Beta}(9,6)$.

</details>

<a id="section-301-4-posterior-mean-as-shrinkage"></a>
### 4. Posterior mean as shrinkage {#section-303-4-posterior-mean-as-shrinkage}

**Exercise 18.4**

For Exercise 3, compute the prior mean, sample proportion, and posterior mean.

<details>
<summary>Hint 1</summary>

Compute each mean using its own denominator.

</details>

<details>
<summary>Hint 2</summary>

The posterior weights are five prior pseudo-observations and ten actual trials out of fifteen.

</details>

<details>
<summary>Solution</summary>

**Solution.** The prior mean is $2/5=0.4$, the sample proportion is $0.7$, and the posterior mean is $9/15=0.6$. Equivalently, $(5/15)(0.4)+(10/15)(0.7)=0.6$, displaying the conjugate weighting.

</details>

<a id="section-328-5-one-step-prediction"></a>
### 5. One-step prediction {#section-330-5-one-step-prediction}

**Exercise 18.5**

Under the posterior in Exercise 3, find the probability that the next Bernoulli outcome is one.

<details>
<summary>Hint 1</summary>

Condition first on the shared unknown probability.

</details>

<details>
<summary>Hint 2</summary>

The one-step predictive success chance is the posterior expectation of that probability.

</details>

<details>
<summary>Solution</summary>

**Solution.** Conditional on $p$, the future success probability is $p$. Averaging over the posterior gives $E[p|x]=9/15=0.6$. The answer is predictive probability, not a plug-in statement about a fixed unknown value.

</details>

<a id="section-355-6-squared-loss-rule"></a>
### 6. Squared-loss rule {#section-357-6-squared-loss-rule}

**Exercise 18.6**

Prove that the posterior mean minimises posterior squared loss.

<details>
<summary>Hint 1</summary>

Expand squared loss around the posterior mean.

</details>

<details>
<summary>Hint 2</summary>

The centered posterior cross term is zero when the second moment is finite.

</details>

<details>
<summary>Solution</summary>

**Solution.** Assuming the posterior second moment is finite, write $\\theta =m_x+(\\theta -m_x)$. Expanding gives $E[(a-\\theta )^2|x]=(a-m_x)^2-2(a-m_x)E[\\theta -m_x|x]+E[(\\theta -m_x)^2|x]$. The middle term is zero, leaving a nonnegative square plus posterior variance. It is uniquely minimised at $a=m_x$.

</details>

<a id="section-382-7-absolute-loss-rule"></a>
### 7. Absolute-loss rule {#section-384-7-absolute-loss-rule}

**Exercise 18.7**

Why is a posterior median optimal under absolute loss?

<details>
<summary>Hint 1</summary>

Study how expected absolute distance changes when the action moves left or right.

</details>

<details>
<summary>Hint 2</summary>

A median has at least half the posterior mass on each side; convexity makes its subgradient condition sufficient.

</details>

<details>
<summary>Solution</summary>

**Solution.** For $g(a)=E[|\\theta -a|\\mid x]$, the left and right derivatives, when expressed using posterior mass, bracket $2F_x(a)-1$. Zero lies between them exactly when $P(\\theta \\le a\\mid x)\\ge 1/2$ and $P(\\theta \\ge a\\mid x)\\ge 1/2$, the definition of a median. Convexity then makes any such point a global minimiser.

</details>

<a id="section-409-8-normal-posterior"></a>
### 8. Normal posterior {#section-411-8-normal-posterior}

**Exercise 18.8**

Let $\\sigma ^2=4$, $\\tau ^2=1$, $\\mu _0=0$, and observe $x=3$. Find posterior mean and variance.

<details>
<summary>Hint 1</summary>

Add prior and observation precisions.

</details>

<details>
<summary>Hint 2</summary>

Then multiply their precision-weighted location sum by the resulting variance.

</details>

<details>
<summary>Solution</summary>

**Solution.** $v=(1+1/4)^{-1}=4/5$. The mean is $v(0+3/4)=3/5$. Equivalently, the observation receives weight $\\tau ^2/(\\sigma ^2+\\tau ^2)=1/5$, so it is strongly shrunk to $0.6$ because observation noise exceeds prior spread.

</details>

<a id="section-436-9-posterior-prediction"></a>
### 9. Posterior prediction {#section-438-9-posterior-prediction}

**Exercise 18.9**

For Exercise 8, give the predictive law of one future observation with variance $4$.

<details>
<summary>Hint 1</summary>

A future observation contains new noise as well as uncertainty about the parameter.

</details>

<details>
<summary>Hint 2</summary>

Add observation variance four and posterior variance four fifths.

</details>

<details>
<summary>Solution</summary>

**Solution.** Conditional variance decomposition gives observation noise $4$ plus posterior parameter variance $4/5$; the predictive mean is $3/5$. Thus $Y|x\\sim \\operatorname{Normal}(3/5,24/5)$.

</details>

<a id="section-463-10-bayes-risk-identity"></a>
### 10. Bayes risk identity {#section-465-10-bayes-risk-identity}

**Exercise 18.10**

Explain why pointwise posterior minimisation minimises prior-average risk.

<details>
<summary>Hint 1</summary>

Use the tower property for nonnegative loss under the proper joint law.

</details>

<details>
<summary>Hint 2</summary>

Pointwise posterior minimization preserves its inequality after averaging over data.

</details>

<details>
<summary>Solution</summary>

**Solution.** For nonnegative loss, Tonelli and conditional expectation give $\\int R(\\theta ,\\delta )d\\Pi (\\theta )=E[E[L(\\theta ,\\delta (X))|X]]$. At every data value, the Bayes action makes the inner quantity no larger than for any competing action. Averaging preserves that inequality. Measurability and existence of a minimiser must still be verified.

</details>

<a id="section-490-11-credible-versus-confidence"></a>
### 11. Credible versus confidence {#section-492-11-credible-versus-confidence}

**Exercise 18.11**

State the probability space in each claim: $\\Pi (\\theta \\in C(x)|x)=0.95$ and $P_\\theta (\\theta \\in C(X))=0.95$.

<details>
<summary>Hint 1</summary>

Identify what is random in each displayed probability.

</details>

<details>
<summary>Hint 2</summary>

The posterior integrates parameter uncertainty after conditioning on data; frequentist coverage fixes the state and repeats datasets.

</details>

<details>
<summary>Solution</summary>

**Solution.** The first conditions on the realised data in the prior–sampling joint model and integrates over posterior parameter uncertainty. The second fixes $\\theta $ and integrates over repeated datasets from $P_\\theta $. Equal numerals do not make the events or guarantees interchangeable.

</details>

<a id="section-517-12-prior-average-coverage"></a>
### 12. Prior-average coverage {#section-519-12-prior-average-coverage}

**Exercise 18.12**

If every realised set has posterior probability $0.95$, show its joint coverage is $0.95$.

<details>
<summary>Hint 1</summary>

Use an indicator of parameter membership in the reported set.

</details>

<details>
<summary>Hint 2</summary>

Condition it on the data, then average the constant posterior mass.

</details>

<details>
<summary>Solution</summary>

**Solution.** Let $I=1_{\\theta \\in C(X)}$. The tower property yields $P(\\theta \\in C(X))=E[I]=E[E[I|X]]=E[\\Pi (\\theta \\in C(X)|X)]=E[0.95]=0.95$. This is averaged over the prior and need not be 0.95 at each fixed $\\theta $.

</details>

<a id="section-544-13-posterior-odds"></a>
### 13. Posterior odds {#section-546-13-posterior-odds}

**Exercise 18.13**

Prior odds for $M_1:M_0$ are $1:4$, and $BF_{10}=6$. Find posterior odds and probability of $M_1$.

<details>
<summary>Hint 1</summary>

Multiply prior odds by the Bayes factor.

</details>

<details>
<summary>Hint 2</summary>

Convert odds $3/2$ to probability with $o/(1+o)$.

</details>

<details>
<summary>Solution</summary>

**Solution.** Posterior odds are $6(1/4)=3/2$. Converting odds to probability gives $(3/2)/(1+3/2)=3/5=0.6$.

</details>

<a id="section-571-14-continuous-prior-and-point-null"></a>
### 14. Continuous prior and point null {#section-573-14-continuous-prior-and-point-null}

**Exercise 18.14**

Why can a continuous prior not learn positive posterior probability for $\\{\\theta=0\\}$?

<details>
<summary>Hint 1</summary>

A posterior obtained by likelihood weighting is absolutely continuous with respect to the prior.

</details>

<details>
<summary>Hint 2</summary>

A prior-null singleton therefore remains null whenever the displayed posterior is defined.

</details>

<details>
<summary>Solution</summary>

**Solution.** The event has prior measure zero. Provided the posterior is absolutely continuous with respect to the prior, it remains a null event after multiplication by the likelihood. A spike-and-slab or other mixture with point mass is needed for positive posterior probability of the exact state.

</details>

<a id="section-598-15-improper-prior-bayes-factor"></a>
### 15. Improper-prior Bayes factor {#section-600-15-improper-prior-bayes-factor}

**Exercise 18.15**

Why is an arbitrary multiplicative constant dangerous in model comparison?

<details>
<summary>Hint 1</summary>

Check which normalisation cancels a within-model constant.

</details>

<details>
<summary>Hint 2</summary>

Separate arbitrary constants survive in marginal-likelihood ratios between different models.

</details>

<details>
<summary>Solution</summary>

**Solution.** Within one model the constant cancels between numerator and denominator of a parameter posterior. Across two models, different arbitrary constants multiply their marginal likelihoods, hence multiply the Bayes factor. The resulting model odds are not defined by probability theory.

</details>

<a id="section-625-16-likelihood-and-stopping"></a>
### 16. Likelihood and stopping {#section-627-16-likelihood-and-stopping}

**Exercise 18.16**

When can a stopping rule cancel from posterior updating?

<details>
<summary>Hint 1</summary>

Write the likelihood under the full observation and stopping protocol.

</details>

<details>
<summary>Hint 2</summary>

Only a parameter-free factor under the fixed prior can cancel without altering the posterior kernel.

</details>

<details>
<summary>Solution</summary>

**Solution.** It can cancel when the recorded-data likelihood under the full protocol factors into a parameter-free stopping term times the ordinary likelihood and the prior is fixed independently of the stopping outcome. If stopping carries parameter information, selection, missing records, or an outcome-dependent unmodelled factor, cancellation is not justified.

</details>

<a id="section-652-17-posterior-predictive-check"></a>
### 17. Posterior predictive check {#section-654-17-posterior-predictive-check}

**Exercise 18.17**

Why is a posterior predictive tail area not automatically a uniform p-value?

<details>
<summary>Hint 1</summary>

The observed data both update the reference and supply the discrepancy.

</details>

<details>
<summary>Hint 2</summary>

That reuse does not imply the fixed-state superuniformity required of a p-value.

</details>

<details>
<summary>Solution</summary>

**Solution.** The observed data both update the posterior and provide the discrepancy being compared. That reuse changes its repeated-sampling distribution, and it need not be super-uniform at each fixed null state. It is a model-checking diagnostic unless a separate calibration theorem is proved.

</details>

<a id="section-679-18-transformation-sensitivity"></a>
### 18. Transformation sensitivity {#section-681-18-transformation-sensitivity}

**Exercise 18.18**

Why can a flat prior on $\\theta $ be nonflat on $\\phi =e^\\theta $?

<details>
<summary>Hint 1</summary>

Transform densities with the Jacobian of the inverse map.

</details>

<details>
<summary>Hint 2</summary>

For $\\theta=\\log\\phi$, the absolute inverse derivative is $1/\\phi$.

</details>

<details>
<summary>Solution</summary>

**Solution.** Densities transform with the Jacobian. If $\\pi _\\theta (\\theta )\\propto 1$, then $\\theta =\\log\\phi $ and $|d\\theta /d\\phi |=1/\\phi $, so $\\pi _\\phi (\\phi )\\propto 1/\\phi $ for $\\phi >0$. “Uninformative” is not invariant under arbitrary reparameterisation.

</details>

<a id="section-706-19-empirical-bayes-uncertainty"></a>
### 19. Empirical Bayes uncertainty {#section-708-19-empirical-bayes-uncertainty}

**Exercise 18.19**

What uncertainty is omitted by plugging a marginal-likelihood estimate $\\widehat{\\tau}$ into a posterior and treating it as known?

<details>
<summary>Hint 1</summary>

The plug-in hyperparameter was estimated from data.

</details>

<details>
<summary>Hint 2</summary>

A conditional posterior treating it as fixed omits uncertainty from that estimation layer.

</details>

<details>
<summary>Solution</summary>

**Solution.** The conditional posterior accounts for uncertainty in group parameters given $\\widehat{\\tau}$ but not sampling uncertainty in the estimated hyperparameter. When few groups or weak data determine $\\widehat{\\tau}$, intervals and predictive distributions can be too concentrated unless that layer is propagated or calibrated.

</details>

<a id="section-733-20-two-ledger-evaluation"></a>
### 20. Two-ledger evaluation {#section-735-20-two-ledger-evaluation}

**Exercise 18.20**

A posterior mean has low prior-average squared loss. What additional question does a fixed-state risk plot answer?

<details>
<summary>Hint 1</summary>

Prior-average risk integrates over states using prior weights.

</details>

<details>
<summary>Hint 2</summary>

A fixed-state risk curve reveals regions hidden by that average without contradicting its optimality statement.

</details>

<details>
<summary>Solution</summary>

**Solution.** It shows how sampling performance varies across particular parameter states, revealing regions where averaging under the prior hid large bias or risk. It does not negate Bayes optimality; it evaluates a different quantifier order relevant when protection at specified states matters.

</details>


<a id="section-761-16-summary-and-onward-route"></a>

<a id="section-955-25-optional-practice-extensions"></a>
### 21. SI-21-E21: predict two future trials {#section-959-si-21-e21-predict-two-future-trials}

**Exercise 18.21**

With posterior $p\\mid x\\sim \\operatorname{Beta}(2,2)$, derive the probabilities of zero, one and two successes in two future conditionally independent Bernoulli trials. Compute the predictive variance and compare it with a binomial plug-in using the posterior mean.


<details>
<summary>Hint 1</summary>

Integrate two future Bernoulli trials over their shared posterior probability.

</details>

<details>
<summary>Hint 2</summary>

Use $E p^2$, $2E[p(1-p)]$ and $E(1-p)^2$; then compute the count variance.

</details>


<a id="section-980-si-21-e22-derive-the-coverage-function"></a>
### 22. SI-21-E22: derive the coverage function {#section-982-si-21-e22-derive-the-coverage-function}

**Exercise 18.22**

Suppose $X\\sim N(\\theta,1)$ and the prior is $N(0,1)$. For $z=\\Phi^{-1}(1-\\alpha/2)$, derive fixed-state coverage of the posterior interval $X/2\\pm z/\\sqrt2$. State its coverage at zero and its limiting coverage as $|\\theta|\\to\\infty$.


<details>
<summary>Hint 1</summary>

Write the observation as $X=\\theta+Z$.

</details>

<details>
<summary>Hint 2</summary>

Rearrange interval membership into two bounds on standard normal $Z$ and examine the resulting CDF difference.

</details>


<a id="section-1003-26-solutions-to-practice-extensions"></a>

<a id="section-1062-solutions"></a>
## Solutions {#section-1064-solutions}

<a id="section-1005-26-solutions-to-practice-extensions"></a>
<details>
<summary>Solution</summary>

<a id="section-1008-si-21-e21-predict-two-future-trials-solution"></a>
### SI-21-E21: predict two future trials — solution {#section-1010-si-21-e21-predict-two-future-trials-solution}

Here $s=4$ and mean probability is one half. Beta moments give $E[p^2]=2\\cdot3/(4\\cdot5)=3/10$ and $E[p(1-p)]=1/2-3/10=1/5$. Thus count probabilities are $3/10,2/5,3/10$. Their mean is one and second moment is $2/5+4(3/10)=8/5$, giving variance $3/5$. The plug-in $\\operatorname{Binomial}(2,1/2)$ variance is $1/2$; averaging over the shared unknown probability adds $1/10$.

</details>
<details>
<summary>Solution</summary>

<a id="section-1016-si-21-e22-derive-the-coverage-function-solution"></a>
### SI-21-E22: derive the coverage function — solution {#section-1018-si-21-e22-derive-the-coverage-function-solution}

Write $X=\\theta+Z$ with $Z\\sim N(0,1)$. Interval membership is $|X/2-\\theta|\\leq z/\\sqrt2$, equivalently $\\theta-z\\sqrt2\\leq Z\\leq\\theta+z\\sqrt2$. Hence coverage is $\\Phi(\\theta+z\\sqrt2)-\\Phi(\\theta-z\\sqrt2)$. At zero it is $2\\Phi(z\\sqrt2)-1>1-\\alpha$ for $0<\\alpha<1$. As $|\\theta|\\to\\infty$ it tends to zero. Each realised interval still has posterior probability $1-\\alpha$ under the declared joint model.

</details>

<a id="section-1022-sources"></a>

## Sources {#section-1024-sources}

All earlier references, exact theorem locators, probability-model qualifications and source notes in this chapter remain part of the exposition. The book [reference guide](back-matter/references-and-attribution-guide.md) records the primary source map.

<a id="section-1026-summary"></a>
`;export{e as default};