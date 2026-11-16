var e=`---
parent_id: book-principles-statistical-inference
chapter_id: likelihood-score-and-evidence
title: "Likelihood, Score, and Evidence Inside a Model"
level: advanced-undergraduate
estimated_minutes: 240
license: CC BY-SA 4.0
---

# Likelihood, Score, and Evidence Inside a Model {#section-1-likelihood-score-and-evidence-inside-a-model}

Once a dominated observation model is fixed, the likelihood compares how candidate parameter values support the realised data. It is one of statistics' most powerful reduction devices—and one of its most frequently overinterpreted objects. A likelihood is not a probability distribution on parameters, does not validate the observation model, and does not automatically supply repeated-sampling error control.

This chapter derives maximum-likelihood rules, scores, information, likelihood ratios, profile likelihoods, and the expected log-likelihood connection to divergence. Every theorem keeps its support and differentiation conditions visible.

<a id="section-5-1-likelihood-holds-data-fixed-and-varies-the-state"></a>
## 1. Likelihood holds data fixed and varies the state {#section-7-1-likelihood-holds-data-fixed-and-varies-the-state}

Suppose \${P_\\theta :\\theta \\in \\Theta }$ is dominated by a common measure $\\mu $, with density or mass $f_\\theta $. After observing $X=x$, the **likelihood function** is

\\[L(\\theta ;x)=f_\\theta (x)\\]

viewed as a function of $\\theta $.

For two candidate values, the likelihood ratio is

\\[L(\\theta _1;x)/L(\\theta _0;x)=f_{\\theta _1}(x)/f_{\\theta _0}(x)\\]

when the denominator is positive. It compares relative support within the stated family.

If the reference measure is changed from $\\mu$ to an equivalent dominating measure $\\nu$, with positive Radon–Nikodym derivative on the relevant support, then every density is multiplied by the same data-only factor $d\\mu/d\\nu$. Therefore likelihoods are defined up to multiplication by a positive data-only factor. Ratios, maximisers, and parameter derivatives of the log-likelihood are unchanged wherever that factor is finite and positive. This is an almost-everywhere statement; arbitrary pointwise versions of densities at null observations carry no likelihood content.

<a id="section-21-likelihood-is-not-parameter-probability"></a>
### Likelihood is not parameter probability {#section-23-likelihood-is-not-parameter-probability}

The integral $\\int L(\\theta ;x)d\\theta $ need not equal one and can change under reparameterisation. A posterior distribution requires a prior measure and Bayes' rule. A confidence procedure requires a sampling calibration. Normalising a likelihood curve with respect to an arbitrary coordinate does not by itself supply either interpretation.

<a id="section-25-2-log-likelihood-turns-products-into-sums"></a>
## 2. Log-likelihood turns products into sums {#section-27-2-log-likelihood-turns-products-into-sums}

For independent observations with densities $f_\\theta (x_i)$,

$L(\\theta ;x_1,\\dots,x_n)=\\prod _{i=1}^n f_\\theta (x_i)$.

The **log-likelihood** is

$\\ell (\\theta )=\\sum _{i=1}^n \\log f_\\theta (x_i)$.

Since logarithm is increasing, likelihood and log-likelihood have the same maximisers. Sums are easier to differentiate and numerically safer than products of small densities.

<a id="section-37-worked-bernoulli-maximum"></a>
### Worked Bernoulli maximum {#section-39-worked-bernoulli-maximum}

**Worked example 4.1.**

For $s=\\sum _ix_i$ successes in $n$ independent Bernoulli trials,

$\\ell (p)=s \\log p+(n-s)\\log(1-p)$.

When $0<s<n$,

\\[\\ell '(p)=s/p-(n-s)/(1-p)\\]

vanishes at $p=s/n$, and

$\\ell ''(p)=-s/p^{2}-(n-s)/(1-p)^{2}<0$.

Thus the maximum-likelihood estimator is $\\hat{p}=s/n$. If $s=0$, the likelihood $(1-p)^n$ decreases and is maximised at boundary $p=0$; if $s=n$, it is maximised at $p=1$. An interior score equation alone misses both cases.

<a id="section-55-3-maximum-likelihood-is-an-optimisation-rule-not-a-guar"></a>
## 3. Maximum likelihood is an optimisation rule, not a guarantee {#section-57-3-maximum-likelihood-is-an-optimisation-rule-not-a-guar}

A **maximum-likelihood estimator** is a measurable choice

\\[\\hat{\\theta }(X)\\in argmax_{\\theta \\in \\Theta }L(\\theta ;X)\\]

when a maximiser exists. The argmax can be empty, contain several values, or lie on a boundary. Numerical convergence to a stationary point does not prove global optimality or statistical identification.

<a id="section-63-worked-normal-location"></a>
### Worked normal location {#section-65-worked-normal-location}

**Worked example 4.2.**

Let $X_i$ be independent $Normal(\\mu ,\\sigma ^{2})$ with known $\\sigma ^{2}$. Ignoring data-only constants,

$\\ell (\\mu )=-(1/(2\\sigma ^{2}))\\sum _i(x_i-\\mu )^{2}$.

Complete the square:

$\\sum _i(x_i-\\mu )^{2}=\\sum _i(x_i-\\bar{x})^{2}+n(\\bar{x}-\\mu )^{2}$.

The first term does not depend on $\\mu $; the second is uniquely minimised at $\\mu =\\bar{x}$. Thus $\\hat{\\mu }=\\bar{x}$ is the global maximum without relying only on a derivative.

<a id="section-77-worked-exponential-rate"></a>
### Worked exponential rate {#section-79-worked-exponential-rate}

**Worked example 4.3.**

For independent exponential observations with rate $\\lambda >0$,

$\\ell (\\lambda )=n \\log \\lambda -\\lambda \\sum _ix_i$.

If $\\sum _ix_i>0$, the score equation gives

$\\hat{\\lambda }=n/\\sum _ix_i=1/\\bar{x}$,

and $\\ell ''(\\lambda )=-n/\\lambda ^{2}<0$. The estimator of a rate is the reciprocal sample mean, not the sample mean.

<a id="section-91-4-the-score-measures-local-likelihood-slope"></a>
## 4. The score measures local likelihood slope {#section-93-4-the-score-measures-local-likelihood-slope}

For a differentiable scalar model, the **score** is

$U_\\theta (X)=\\partial /\\partial \\theta  \\log f_\\theta (X)$.

Under conditions that allow differentiation under the integral and keep support fixed,

\\[E_\\theta [U_\\theta (X)]\\]

\\[=\\int [\\partial  \\log f_\\theta (x)/\\partial \\theta ]f_\\theta (x)d\\mu (x)\\]

\\[=\\int \\partial f_\\theta (x)/\\partial \\theta  d\\mu (x)\\]

$=\\partial /\\partial \\theta  \\int f_\\theta (x)d\\mu (x)=0$.

Each equality has a hypothesis. If support moves with $\\theta $, differentiation of an integral includes boundary terms that the displayed calculation omits.

<a id="section-109-bernoulli-score"></a>
### Bernoulli score {#section-111-bernoulli-score}

For one Bernoulli observation,

$U_p(X)=X/p-(1-X)/(1-p)=(X-p)/[p(1-p)]$.

Its expectation is zero because $E_p[X]=p$.

For independent observations, scores add because log-likelihoods add.

<a id="section-119-5-fisher-information-quantifies-local-score-variation"></a>
## 5. Fisher information quantifies local score variation {#section-121-5-fisher-information-quantifies-local-score-variation}

The scalar **Fisher information** is

$I(\\theta )=E_\\theta [U_\\theta (X)^{2}]$,

when finite. Because the regular score has mean zero, this is its variance. Under an additional differentiation identity,

$I(\\theta )=-E_\\theta [\\partial ^{2} \\log f_\\theta (X)/\\partial \\theta ^{2}]$.

The first definition is safer when checking regularity; equality with negative expected curvature must be proved.

For one Bernoulli observation,

$I(p)=1/[p(1-p)]$.

For $n$ iid observations, cross terms vanish because independent zero-mean scores are uncorrelated, so

$I_n(\\theta )=nI_1(\\theta )$.

For independent but non-identically distributed observations, information instead adds as $I_n(\\theta )=\\sum _i I_i(\\theta )$ when each contribution is regular. Clustered or adaptively collected observations require their joint score.

<a id="section-141-observed-information"></a>
### Observed information {#section-143-observed-information}

The **observed information** is

$J(\\theta ;x)=-\\partial ^{2}\\ell (\\theta ;x)/\\partial \\theta ^{2}$.

It is data-dependent; Fisher information is its expectation under regularity. Evaluating observed information at an MLE often supplies a local quadratic approximation, but flat directions, boundaries, multimodality, and weak identification can make that approximation misleading.

<a id="section-149-local-quadratic-bridge"></a>
### Local quadratic bridge {#section-151-local-quadratic-bridge}

At an interior reference value $\\theta _0$, Taylor's theorem formally gives

\\[\\ell _n(\\theta _0+h)-\\ell _n(\\theta _0)=hU_n(\\theta _0)-(h^{2}/2)J_n(\\tilde{\\theta })\\]

for an intermediate $\\tilde{\\theta }$. In a regular iid model, changes of size $h/\\sqrt{n}$ balance the root-$n$ score fluctuation against order-$n$ curvature. This is the source of local normal likelihood shapes, not a fact about every plotted likelihood. Making the statement asymptotic requires score CLTs, uniform curvature control, interior identification, fixed support, and nonsingular information; the general asymptotics chapter supplies the resulting expansion and the first-order relationship among Wald, score, and likelihood-ratio procedures.

<a id="section-157-6-information-changes-coordinates"></a>
## 6. Information changes coordinates {#section-159-6-information-changes-coordinates}

Let $\\eta =h(\\theta )$ be a one-to-one differentiable reparameterisation, with $\\theta =g(\\eta )$. The chain rule gives

$U_\\eta =U_\\theta \\cdot d\\theta /d\\eta $,

so

$I_\\eta (\\eta )=I_\\theta (g(\\eta ))[g'(\\eta )]^{2}$.

Information is therefore not a coordinate-free scalar magnitude. The quadratic form $I_\\theta (d\\theta )^{2}$ is invariant under one-dimensional reparameterisation. Comparing raw information numbers across parameter scales without the Jacobian is meaningless.

<a id="section-169-bernoulli-log-odds"></a>
### Bernoulli log-odds {#section-171-bernoulli-log-odds}

For $\\eta =\\log[p/(1-p)]$, $dp/d\\eta =p(1-p)$. Thus one-observation information is

$I_\\eta =I_p[p(1-p)]^{2}=p(1-p)$.

The apparent divergence of $I_p$ near zero is changed by measuring local movement on the log-odds scale.

<a id="section-177-7-moving-support-breaks-the-regular-score-identity"></a>
## 7. Moving support breaks the regular score identity {#section-179-7-moving-support-breaks-the-regular-score-identity}

Let $X\\sim Uniform(0,\\theta )$, $\\theta >0$. Its density is

$f_\\theta (x)=\\theta ^{-1}\\mathbf 1_{\\{0\\le x\\le \\theta \\}}$.

For an observed interior $x$, the log-likelihood is $-\\log \\theta $ on $\\theta \\ge x$ and $-\\infty $ otherwise. Inside the support its derivative is $-1/\\theta $, whose expectation is not zero. The missing term lies at the moving boundary.

For $n$ observations, the likelihood is

$L(\\theta ;x)=\\theta ^{-n}\\mathbf 1_{\\{\\theta \\ge x_{(n)}\\}}$,

where $x_{(n)}=\\max_i x_i$. It is maximised at $\\hat{\\theta }=x_{(n)}$. The sample maximum is the decisive statistic, and regular interior normal approximations do not apply without special analysis.

This model is not pathological; it simply lies outside the common fixed-support score template.

<a id="section-193-8-nuisance-parameters-and-profile-likelihood"></a>
## 8. Nuisance parameters and profile likelihood {#section-195-8-nuisance-parameters-and-profile-likelihood}

Write $\\theta =(\\psi ,\\lambda )$, with interest in $\\psi $ and nuisance $\\lambda $. The **profile likelihood** is

$L_p(\\psi ;x)=\\sup_\\lambda  L(\\psi ,\\lambda ;x)$.

It chooses the best-fitting nuisance value for each $\\psi $. Profile likelihood is useful but is not a marginal probability for $\\psi $; maximisation and integration answer different questions.

<a id="section-201-normal-profile-calculation"></a>
### Normal profile calculation {#section-203-normal-profile-calculation}

For iid normal data with unknown mean $\\mu $ and variance $\\sigma ^{2}$, the log-likelihood is

$\\ell (\\mu ,\\sigma ^{2})=-(n/2)\\log \\sigma ^{2}-[1/(2\\sigma ^{2})]\\sum _i(x_i-\\mu )^{2}+C$.

For fixed $\\mu $, the maximising variance is

\\[\\hat{\\sigma }^{2}(\\mu )=n^{-1}\\sum _i(x_i-\\mu )^{2}\\]

when the sum is positive. Substitution gives a profile likelihood decreasing with that residual sum, so the profiled maximum occurs at $\\mu =\\bar{x}$ for a nonconstant sample. If every observation is equal, taking $\\mu =\\bar{x}$ and $\\sigma ^{2}\\downarrow 0$ makes the likelihood unbounded, so no finite MLE exists on the parameter space $\\sigma ^{2}>0$.

<a id="section-213-9-expected-log-likelihood-identifies-the-closest-law"></a>
## 9. Expected log-likelihood identifies the closest law {#section-215-9-expected-log-likelihood-identifies-the-closest-law}

Suppose the true density is $g$ and candidate density is $f_\\theta $, all relative to a common measure. The expected log-likelihood is

$E_g[\\log f_\\theta (X)]=\\int g \\log f_\\theta  d\\mu $.

Define Kullback–Leibler divergence

$D(g\\lVert f_\\theta )=\\int g \\log(g/f_\\theta )d\\mu $,

with infinity when required. When the displayed expectations are well-defined and do not create the indeterminate form $\\infty -\\infty $, rearranging gives

$E_g[\\log f_\\theta (X)]=E_g[\\log g(X)]-D(g\\lVert f_\\theta )$.

The inequality $\\log t\\le t-1$ implies $D(g\\lVert f_\\theta )\\ge 0$: apply it to $t=f_\\theta /g$ and integrate on the relevant support. Equality holds when the densities agree almost everywhere.

Thus, when the relevant cross-entropies are finite, the population expected log-likelihood is maximised by the true density if it is in the model. More generally, pairwise expected-log-likelihood comparisons require their own integrability conditions; extended-real KL values cannot be manipulated by subtracting infinities. Under misspecification, a well-defined maximiser targets a KL-closest model law, subject to existence and uniqueness. The fitted parameter then estimates a projection, not necessarily a literal data-generating mechanism.

<a id="section-231-10-proportional-likelihoods-can-have-different-calibrat"></a>
## 10. Proportional likelihoods can have different calibrations {#section-233-10-proportional-likelihoods-can-have-different-calibrat}

Observe $r$ successes and $n-r$ failures. Under a fixed-$n$ binomial plan, the count likelihood is proportional to

$p^r(1-p)^{n-r}$.

Under a negative-binomial plan that stops at the $r$th success on trial $n$, its likelihood has the same parameter-dependent factor. Likelihood ratios for $p$ agree.

But repeated samples under the two plans range over different data spaces and stopping times. A fixed-sample p-value, confidence coverage calculation, or Type I error guarantee cannot be transferred without checking the actual plan. Likelihood evidence and frequentist calibration describe different aspects of the experiment.

<a id="section-241-11-a-likelihood-audit"></a>
## 11. A likelihood audit {#section-243-11-a-likelihood-audit}

Before accepting a likelihood calculation, ask:

1. What observation law, dominating measure, and support are declared?
2. Which factors depend only on data and may be dropped for likelihood comparison?
3. Does a maximum exist, and are boundaries or multiple maxima checked?
4. Is the model identifiable, or does a ridge of equal likelihood remain?
5. Are score expectations and curvature identities justified by fixed support and domination?
6. Are nuisance parameters profiled, conditioned, integrated, or ignored?
7. Is a likelihood curve being misread as parameter probability?
8. Does the sampling or stopping plan matter for the promised calibration?
9. What estimand does the likelihood target under misspecification?

<a id="section-255-12-exercises-with-complete-solutions"></a>
## 14. Build the likelihood for the recorded observation {#section-785-14-build-the-likelihood-for-the-recorded-observation}
A density belongs to a particular observation, not merely to a named scientific distribution. Suppose a positive waiting time $T$ has exponential rate $\\lambda>0$, but the instrument stops observation at fixed time $c>0$. It records $Y=\\min(T,c)$ and $D=1_{\\{T\\le c\\}}$. For a failure before $c$, the record contains its exact time; otherwise it contains only the survival statement $T>c$. The observation law therefore mixes a continuous part on $\\{(y,1):0\\le y<c\\}$ with an atom at $(c,0)$.

Use the reference measure that is Lebesgue measure on the failure-time part plus counting mass at the censoring atom. The corresponding density is $\\lambda e^{-\\lambda y}$ when $d=1$ and $e^{-\\lambda c}$ at $(c,0)$. A unified expression is $\\lambda^d e^{-\\lambda y}$ on this recorded support. For independent records with the same administrative cutoff, the likelihood is

\\[
L(\\lambda)=\\lambda^{\\sum_i d_i}\\exp(-\\lambda\\sum_i y_i).
\\]

The exponent counts total exposure time, including the full cutoff time for censored units. Dropping censored records would instead fit the failures' selected time distribution and lose information. Treating each censored time as an observed failure would incorrectly add a factor $\\lambda$.

Write $r=\\sum d_i$ and $S=\\sum y_i>0$. If $r>0$, the log-likelihood $r\\log\\lambda-\\lambda S$ has unique global maximum $\\hat\\lambda=r/S$: it tends to minus infinity at both positive-domain ends and has negative second derivative. If $r=0$, it decreases throughout $\\lambda>0$ and its supremum occurs as $\\lambda\\downarrow0$. There is no maximizer in the stated open parameter space. Enlarging that space to include a point mass at infinite lifetime is a different model, not a derivative trick.

For a synthetic record with $c=2$, failures at $1/2$ and $1$, and one censored unit, $r=2$ and $S=7/2$, giving $\\hat\\lambda=4/7$. The same numerical time list $(1/2,1,2)$ declared as three uncensored failures gives $r=3$ and estimate $6/7$. The discrepancy comes from different observation laws, not competing optimisation algorithms.

This construction assumes a fixed administrative cutoff. With random censoring, ignoring its mechanism is justified only under appropriate independence or conditional independence and distinct-parameter conditions. An informative censoring mechanism can contribute parameter-dependent factors. The principle is to write the law of what is recorded first; a familiar likelihood expression is a consequence to be checked.


The censored example also permits an exact information comparison. One record has score $U_\\lambda=D/\\lambda-Y$ and observed information $J_\\lambda=D/\\lambda^2$. Since $P(T\\le c)=1-e^{-\\lambda c}$ and

\\[
E_\\lambda Y=\\int_0^cP(T>t)\\,dt=(1-e^{-\\lambda c})/\\lambda,
\\]

the score has mean zero. The tail-integral identity used here follows by writing $\\min(T,c)=\\int_0^c1_{\\{T>t\\}}dt$ and interchanging a nonnegative integral and expectation. The fixed mixed support and bounded recorded times give integrable derivative envelopes on any compact positive rate neighborhood. Thus the curvature identity is legitimate and

\\[
I_{\\rm censored}(\\lambda)=(1-e^{-\\lambda c})/\\lambda^2.
\\]

An uncensored lifetime has information $1/\\lambda^2$. The factor $1-e^{-\\lambda c}$ lies strictly between zero and one for finite positive $c,\\lambda$, and increases to one as the cutoff grows. Censored observations retain information through survival, but less than observing every full lifetime under this model. This comparison concerns the same rate coordinate and one initially sampled unit, so the information numbers use matched units. It does not say that extending follow-up is costless or that this ordering survives an informative censoring mechanism.

<a id="section-815-15-a-derivative-envelope-is-a-local-mathematical-obliga"></a>
## 15. A derivative envelope is a local mathematical obligation {#section-817-15-a-derivative-envelope-is-a-local-mathematical-obliga}

**Optional advanced analytical argument.** The general interchange proof in this development uses Lebesgue integration and dominated convergence on a parameter neighbourhood. It is additional analysis preparation at this point. The finite sums and the directly evaluated Bernoulli, exponential and normal likelihood calculations remain available without proving a general differentiation-under-the-integral theorem.
The regular score identity can be justified by a concrete sufficient condition. Near an interior scalar parameter $\\theta_0$, suppose $f_\\theta(x)$ and its first two parameter derivatives exist on a common support, are measurable in $x$ and continuous in $\\theta$, and are bounded in absolute value by integrable envelopes independent of $\\theta$ in that neighborhood. Require $f_\\theta>0$ almost everywhere on that common support throughout the neighborhood. Suppose also that the score is square integrable under $P_{\\theta_0}$. Differentiation under the integral then gives $\\int\\partial_\\theta f_\\theta=0$ and $\\int\\partial_\\theta^2f_\\theta=0$. Where the density is positive,

\\[
\\partial_\\theta^2f_\\theta
=f_\\theta\\{(\\partial_\\theta\\log f_\\theta)^2+
\\partial_\\theta^2\\log f_\\theta\\}.
\\]

At $\\theta_0$, integrating this identity proves information equals negative expected curvature when both terms are integrable. The score's first moment follows from the first derivative identity. Positivity and integrability are doing work here; the algebra alone cannot supply them.

Check the envelope for normal location with known variance one. Write $z=x-\\theta_0$ and $t=\\theta-\\theta_0$, restricting $|t|<1$. The density is $\\phi(z-t)$, its first derivative in $\\theta$ is $(z-t)\\phi(z-t)$, and its second derivative is $((z-t)^2-1)\\phi(z-t)$. The inequality

\\[
(z-t)^2\\ge z^2/2-t^2
\\]

follows by completing the square, since $(z-t)^2-z^2/2+t^2=(z-2t)^2/2$. Therefore $\\phi(z-t)\\le (2\\pi)^{-1/2}e^{1/2}e^{-z^2/4}$. The absolute derivatives are bounded by this Gaussian tail times respectively $|z|+1$ and $(|z|+1)^2+1$. These polynomial-times-Gaussian envelopes have finite integrals: outside a fixed bounded interval their polynomial factors are bounded by a constant times $e^{z^2/8}$, leaving an integrable Gaussian tail. Thus the required neighborhood control is actually present.

Here $U_\\theta=X-\\theta$, so $E_\\theta U_\\theta=0$ and $I(\\theta)=1$ directly from the normal mean and variance. The log curvature is constantly $-1$, verifying the second identity independently. The envelope argument explains why the formal interchange is legitimate rather than merely confirming that its answer happens to be correct.

For a finite Bernoulli observation space, differentiation and summation commute automatically for interior $p$, because there are finitely many differentiable terms. At $p=0$ or 1, the interior log derivatives involve division by zero and a neighborhood within the open regular parameter set no longer surrounds the boundary. The finite-space model is still meaningful there, but the regular information formula is an interior statement.

The measure-theoretic import used here is dominated differentiation on a neighborhood. It follows by applying dominated convergence to difference quotients bounded through the mean value theorem. This is a sufficient route, not a claim that every legitimate likelihood must satisfy these particular envelopes.

<a id="section-842-16-score-and-curvature-under-a-change-of-parameter"></a>
## 16. Score and curvature under a change of parameter {#section-844-16-score-and-curvature-under-a-change-of-parameter}
A coordinate change preserves a likelihood's candidate laws while changing its numerical derivatives. Let $\\theta=g(\\eta)$ be a twice continuously differentiable local one-to-one change with $g'(\\eta)\\ne0$. The log-likelihood in the new coordinate is $\\tilde\\ell(\\eta)=\\ell(g(\\eta))$. No density Jacobian is introduced here: the data variable has not been transformed. Applying the chain rule twice yields

\\[
U_\\eta=g' U_\\theta,\\qquad
J_\\eta=(g')^2J_\\theta-g''U_\\theta.
\\]

The second formula follows from $J=-\\ell''$. Observed information is not generally transformed by a squared Jacobian alone; away from a stationary point it has the extra score term. At an interior stationary point, $U_\\theta=0$, so the term disappears. Under regularity and finite score mean zero, taking expectation also removes it and gives $I_\\eta=(g')^2I_\\theta$.

For a Bernoulli sample with $s$ successes, use $\\eta=\\log(p/(1-p))$. The new log-likelihood is $\\tilde\\ell(\\eta)=s\\eta-n\\log(1+e^\\eta)$. Differentiation gives $U_\\eta=s-np$ and $J_\\eta=np(1-p)$. In the $p$ coordinate, however, observed information is $s/p^2+(n-s)/(1-p)^2$, which depends on the observed count. The chain-rule correction reconciles these expressions. Simply multiplying the latter by $p^2(1-p)^2$ gives $s(1-p)^2+(n-s)p^2$; subtracting the score term gives $np(1-p)$.

The log-odds coordinate also exposes the boundary. An all-failure sample has $\\tilde\\ell(\\eta)=-n\\log(1+e^\\eta)$ and no finite maximizing $\\eta$. Its supremum occurs as $\\eta\\to-\\infty$, corresponding to $p=0$. Thus the same law can be an included boundary maximizer in $p\\in[0,1]$ and an unattained limiting point in the finite log-odds parameterization. Calling both parameter spaces simply “equivalent” without their endpoints hides a real domain change.

Transforming the observation is different. If $Y=h(X)$ is an invertible differentiable map independent of $\\theta$, the data density acquires the usual absolute Jacobian factor, depending only on the observed data. Likelihood ratios remain unchanged wherever that factor is finite and positive. If $h$ is many-to-one, one must sum or integrate over the lost possibilities; there is generally no single invertible Jacobian correction. Rounding, censoring and retaining only a maximum are examples.

Finally, transforming a parameter density, such as a prior or posterior, does require a parameter Jacobian. A likelihood is a function evaluated at candidate states; a posterior density is a density with respect to a specified measure on states. Confusing these roles leads to the mistaken idea that the normalised likelihood must be a coordinate-invariant parameter distribution.


For vector parameters, the same chain rule has a useful geometric form. Let $\\theta=g(\\eta)$ have Jacobian matrix $G$, with entry $G_{ij}=\\partial\\theta_i/\\partial\\eta_j$, and regard scores as column vectors. Then $U_\\eta=G^\\mathsf{T}U_\\theta$. Under finite regular score covariances, taking the outer product and expectation gives $I_\\eta=G^\\mathsf{T}I_\\theta G$. This expression requires no inverse information matrix. A direction $h$ has local score variance $h^\\mathsf{T}I_\\eta h=(Gh)^\\mathsf{T}I_\\theta(Gh)$.

In particular, a zero-information direction can reflect an unchanging law rather than a small standard error. For the model depending only on $\\alpha+\\beta$ discussed below, $h=(1,-1)$ makes $Gh=0$ for the reduction to that sum. Increasing the sample size multiplies the same rank-one information matrix and does not remove its null direction. Formally inverting a numerical near-singular matrix cannot supply identification that the observation model lacks. Local derivative information should be interpreted together with the global observational equivalence classes from the identification chapter.

<a id="section-865-17-profiling-removes-a-nuisance-by-optimization"></a>
## 17. Profiling removes a nuisance by optimization {#section-867-17-profiling-removes-a-nuisance-by-optimization}
For a nonconstant sample $x_1,\\ldots,x_n$ from $N(\\mu,v)$, $v>0$, let $S_0=\\sum(x_i-\\bar x)^2>0$. The exact decomposition $Q(\\mu)=S_0+n(\\mu-\\bar x)^2$ produces the two-parameter likelihood

\\[
L(\\mu,v)=(2\\pi v)^{-n/2}\\exp[-Q(\\mu)/(2v)].
\\]

For each fixed $\\mu$, the maximizing variance is $Q(\\mu)/n$. Substitution gives $L_p(\\mu)=C_n Q(\\mu)^{-n/2}$, where $C_n$ is positive and independent of $\\mu$. Hence

\\[
\\frac{L_p(\\mu)}{L_p(\\bar x)}
=\\left[1+\\frac{n(\\mu-\\bar x)^2}{S_0}\\right]^{-n/2}.
\\]

Every term is defined because nonconstancy makes $S_0>0$. This is an exact finite-sample likelihood ratio, with no chi-square calibration asserted.

Take the concrete sample $(0,1,2)$: $\\bar x=1$, $S_0=2$ and $n=3$. At $\\mu=0$, the profile ratio is $(2/5)^{3/2}$. If instead variance were known to be 1, the same candidate ratio relative to $\\mu=1$ would be $e^{-3/2}$. The profile is broader because a candidate mean far from the data can be paired with a larger fitted variance. These are two different declared models; the wider profile does not demonstrate that an optimizer has become less accurate.

Integration over the nuisance answers another question. For example, assign the proper variance density $\\pi(v)=b^a v^{-a-1}e^{-b/v}/\\Gamma(a)$ with $a,b>0$. This choice is independent of $\\mu$ for the present illustration. Direct substitution $u=(b+Q(\\mu)/2)/v$ in the integral gives

\\[
\\int_0^\\infty L(\\mu,v)\\pi(v)\\,dv
=C_{n,a,b}[b+Q(\\mu)/2]^{-(a+n/2)}.
\\]

The constant is finite and independent of $\\mu$; the formula uses the defining gamma integral $\\Gamma(k)=\\int_0^\\infty u^{k-1}e^{-u}\\,du$ for $k>0$. This integrated likelihood depends on the supplied $a,b$, whereas the profile likelihood does not. Neither expression alone is a posterior density for $\\mu$; that also requires a prior measure for $\\mu$ and finite posterior normalisation.

A flat direction creates a different nuisance problem. If observations have law $N(\\alpha+\\beta,1)$, the log-likelihood contains only $\\gamma=\\alpha+\\beta$. Its two-dimensional score components are equal, and one-observation information is the matrix with all four entries 1. The vector $(1,-1)$ is a null direction: moving along it leaves every observation law fixed. No amount of optimisation or extra iid observations distinguishes $\\alpha$ from $\\beta$ within this experiment. A constraint such as $\\beta=0$ changes the allowed states; an external measurement of one component changes the experiment.

These examples separate three often conflated operations: maximizing over a nuisance, averaging with a declared nuisance prior, and adding information that identifies a previously hidden component. Each has a legitimate purpose, but their outputs should retain the purpose and hypotheses under which they were constructed.


A profile-likelihood contour is also explicit here. For any chosen $c>0$, retaining means with $L_p(\\mu)/L_p(\\bar x)\\ge e^{-c}$ gives the interval

\\[
|\\mu-\\bar x|\\le
\\sqrt{(S_0/n)\\{\\exp(2c/n)-1\\}}.
\\]

Take logarithms of the positive ratio, multiply by $-2/n$ with the inequality reversed, and exponentiate to obtain this bound. This is an exact description of a relative-likelihood set for the observed sample. It becomes a confidence interval only after the threshold has been calibrated against repeated samples under the actual model. Choosing $c$ because a likelihood plot looks approximately bell-shaped supplies no stated coverage. The later pivot and confidence chapters provide such sampling calculations; the contour itself is an optimisation result.

<a id="section-906-18-the-same-likelihood-ratio-can-accompany-different-ta"></a>
## 18. The same likelihood ratio can accompany different tail events {#section-908-18-the-same-likelihood-ratio-can-accompany-different-ta}
The proportional-likelihood observation in Section 10 can be checked with a complete small experiment. Plan A fixes $n=3$ Bernoulli trials and records the number of successes $S$. Suppose $S=1$. Its mass is $3p(1-p)^2$. Plan B stops at the first success and records its trial number $N$. Suppose $N=3$. Its mass is $p(1-p)^2$. Both yield likelihood ratio

\\[
\\frac{L(p=1/2)}{L(p=1/4)}
=\\frac{(1/2)(1/2)^2}{(1/4)(3/4)^2}
=\\frac89.
\\]

The factor 3 cancels because it is data-only within Plan A. Equal prior odds in a two-state Bayesian model would therefore produce the same posterior odds after either observation. This calculation says nothing about a prior that was never specified.

For a lower-tail test of $p_0=1/2$, the fixed-plan p-value at $S=1$ is $P_{1/2}(S\\le1)=(1+3)/8=1/2$. Under the stopping plan, low $p$ tends to produce larger waiting times, so the corresponding tail p-value at $N=3$ is $P_{1/2}(N\\ge3)=(1/2)^2=1/4$. The two tail events collect different possible samples. A p-value is calibrated by that collection, whereas a likelihood ratio compares the probabilities of the single realized observation under candidate states.

The discrepancy also appears in rejection regions at nominal level $1/4$. In Plan A, the deterministic lower-tail rejection $S=0$ has null probability $1/8$. Adding $S=1$ would increase it to $1/2$, so exact size $1/4$ requires rejecting when $S=1$ with independent probability $1/3$ as well. In Plan B, rejecting exactly when $N\\ge3$ already has probability $1/4$. At the recorded observations, these procedures take different actions even though their likelihood ratios agree.

None of this implies that stopping invalidates inference. The stopping experiment has a completely specified probability law and can be calibrated exactly. The error is to promise the fixed-plan calibration while actually using another plan. Conversely, a likelihood-based analysis can consistently retain proportional evidence while declining to claim an unverified fixed-sample error probability. The reporting obligation is to state which kind of evidence and which guarantee are being supplied.

The geometric plan assumes $p>0$ so that stopping occurs almost surely. At $p=0$, an infinite waiting time must be included if that boundary is to be part of the observation model. This is another instance where omitting a possible observation can make an otherwise familiar formula cease to define a full experiment.

<a id="section-925-19-a-population-likelihood-target-is-not-an-automatic-e"></a>
## 19. A population likelihood target is not an automatic estimator theorem {#section-927-19-a-population-likelihood-target-is-not-an-automatic-e}
Expected log-likelihood can identify the fitting target before one proves that an estimator reaches it. For example, fit the known-variance normal location family $f_\\mu(x)=\\phi(x-\\mu)$ to any true law $G$ with finite second moment. Its population criterion is

\\[
E_G\\log f_\\mu(X)
=-\\tfrac12\\log(2\\pi)-\\tfrac12E_G[(X-\\mu)^2].
\\]

Expanding around $m=E_GX$ shows this is uniquely maximized at $\\mu=m$. The true law need not be normal; assume here that it has a Lebesgue density, so choosing an almost-everywhere version of the Gaussian density does not alter the criterion under $G$. The expectation is finite because the quadratic moment is finite. This derivation uses expected Gaussian log-density directly and does not subtract potentially infinite entropies. If $G$ is a mixture, $m$ is the mixture mean, not necessarily the centre of its largest component. The model's population target is transparent from the loss hidden inside its log density.

For iid observations from such a $G$, the sample normal-location MLE remains $\\bar X$ by algebra, and the law of large numbers gives convergence to $m$. The algebraic maximizer, the population optimum and the convergence theorem are three separate steps. In a general model, pointwise convergence of each sample criterion at each fixed $\\theta$ does not imply convergence of its maximizer. One must control the criterion across competing parameter values, rule out escape to infinity or a boundary, and ensure separation of the desired optimum. Those global asymptotic conditions belong to the later asymptotics chapter.

Even existence of a KL projection can fail. Take true Bernoulli probability $1/2$ but fit only $p\\in(0,1/2)$. The expected log-likelihood increases towards its supremum at the excluded boundary $1/2$; there is no maximizing fitted parameter. For a finite sample, the same open parameter set can lack an MLE. Calling the limit “the pseudo-true parameter” without stating the closure would conceal nonexistence in the declared model.

The score, information and profile calculations above therefore support local comparisons inside an experiment. They do not verify the experiment, establish posterior probability, or prove the calibration of a proposed uncertainty interval. A complete inference argument adds the relevant identification, approximation and decision conditions rather than asking a well-drawn likelihood curve to carry all of them.

<a id="section-941-20-elaboration-of-two-original-likelihood-keys"></a>
## 20. Elaboration of two original likelihood keys {#section-943-20-elaboration-of-two-original-likelihood-keys}
<a id="section-942-original-exercise-12-finish-the-candidate-comparison"></a>
### Original Exercise 12: finish the candidate comparison {#section-944-original-exercise-12-finish-the-candidate-comparison}

<details>
<summary>Solution</summary>

The original ratio simplifies exactly to

\\[
\\frac{(4/5)^8(1/5)^2}{(1/2)^{10}}
=\\frac{2^{26}}{5^{10}}
=\\frac{67108864}{9765625}>1.
\\]

Thus the observed eight heads in ten tosses favor the $p=0.8$ candidate over $p=0.5$ by this likelihood factor. A posterior-odds comparison would multiply it by declared prior odds. This elaborates the original exact expression without replacing the task or its key.

</details>

<a id="section-959-original-exercise-13-verify-the-nuisance-maximum-s-scop"></a>
### Original Exercise 13: verify the nuisance maximum's scope {#section-961-original-exercise-13-verify-the-nuisance-maximum-s-scop}

<details>
<summary>Solution</summary>

For fixed $\\mu$, write $Q=\\sum_i(x_i-\\mu)^2$. The derivative in $v>0$ is $(Q-nv)/(2v^2)$. When $Q>0$, it is positive below $Q/n$ and negative above, proving a unique global maximum at $v=Q/n$, not merely a stationary point. When $Q=0$, the derivative is $-n/(2v)<0$ throughout the open domain. The likelihood is proportional to $v^{-n/2}$ and diverges as $v\\downarrow0$; there is no interior or finite boundary maximizer in $v>0$. These are precisely the exceptions behind the original key's positive-residual condition.

</details>

<a id="section-968-21-optional-practice-extensions-for-likelihood-protocol"></a>
## 23. Import boundary for the likelihood extension {#section-1032-23-import-boundary-for-the-likelihood-extension}
All finite probability tables, risk-independent likelihood comparisons, coordinate identities, normal profiles and gamma substitutions in this extension are derived explicitly above. The analysis import for the normal envelope is dominated differentiation under an integral, in the neighborhood form stated in Section 15. A verified author-hosted statement and proof are Chris Wendl, *Lebesgue, Fourier and Sobolev (Notes for Functional Analysis)*, §0.2, Theorem 0.4, printed page 4, [author's lecture notes](https://www.mathematik.hu-berlin.de/~wendl/Winter2020/FunkAna/lecturenotes.pdf), inspected 4 November 2026. This citation supports that bounded interchange, not a blanket regularity assertion for every statistical model. The original chapter's general asymptotic and model-audit boundaries remain in force.

<a id="section-1033-sources"></a>

## Summary

<a id="section-1039-13-summary-and-forward-route"></a>
Likelihood compares candidate states inside a dominated observation model. Log-likelihood supports stable optimisation; scores and Fisher information describe regular local change; moving support, boundaries, nuisance parameters, and ridges require explicit treatment. Expected log-likelihood connects fitting to KL projection, while proportional likelihoods need not share repeated-sampling calibration. The next chapter asks when the data can be reduced without losing any likelihood information about the parameter.

## Exercises {#section-257-12-exercises-with-complete-solutions}

<a id="section-257-1-drop-a-data-only-factor"></a>
### 1. Drop a data-only factor {#section-259-1-drop-a-data-only-factor}

**Exercise 4.1**

For a binomial count $S=s$, the mass is $\\binom{n}{s}p^s(1-p)^{n-s}$. Why may the binomial coefficient be omitted from the likelihood for $p$?

<details>
<summary>Hint 1</summary>

Hold the realised count and trial number fixed.

</details>
<details>
<summary>Hint 2</summary>

A positive factor common to every candidate parameter cancels from ratios and optimisation.

</details>
<details>
<summary>Solution</summary>

**Solution.** With observed $n,s$ fixed, $\\binom{n}{s}$ is positive and independent of $p$. It multiplies every candidate likelihood by the same factor, leaving ratios and maximisers unchanged.

</details>

<a id="section-282-2-bernoulli-interior-mle"></a>
### 2. Bernoulli interior MLE {#section-284-2-bernoulli-interior-mle}

**Exercise 4.2**

For $n=20$, $s=7$, find the MLE of $p$.

<details>
<summary>Hint 1</summary>

Check that the observed success count is strictly interior.

</details>
<details>
<summary>Hint 2</summary>

Use concavity to identify the stationary point as the unique maximum.

</details>
<details>
<summary>Solution</summary>

**Solution.** Because $0<s<n$, the concave log-likelihood has its unique maximum at $\\hat{p}=s/n=7/20=0.35$.

</details>

<a id="section-307-3-bernoulli-boundary"></a>
### 3. Bernoulli boundary {#section-309-3-bernoulli-boundary}

**Exercise 4.3**

If all 20 observations are failures, why is $\\hat{p}=0$ rather than an undefined score solution?

<details>
<summary>Hint 1</summary>

Write the likelihood directly for an all-failure sample.

</details>
<details>
<summary>Hint 2</summary>

Compare it over the closed parameter interval rather than dividing by an interior score denominator.

</details>
<details>
<summary>Solution</summary>

**Solution.** The likelihood is $(1-p)^{20}$, which decreases on $[0,1]$; its maximum is the boundary $p=0$. The log-score formula containing $s/p$ was derived for interior $p$ and cannot replace a boundary comparison.

</details>

<a id="section-332-4-normal-location-mle"></a>
### 4. Normal location MLE {#section-334-4-normal-location-mle}

**Exercise 4.4**

For known variance, prove the sample mean maximises the normal likelihood.

<details>
<summary>Hint 1</summary>

Complete the residual sum of squares around the sample mean.

</details>
<details>
<summary>Hint 2</summary>

Only the nonnegative squared mean displacement depends on the candidate location.

</details>
<details>
<summary>Solution</summary>

**Solution.** The parameter-dependent log-likelihood is $-[2\\sigma ^{2}]^{-1}\\sum _i(x_i-\\mu )^{2}$. The identity

\\[\\sum _i(x_i-\\mu )^{2}=\\sum _i(x_i-\\bar{x})^{2}+n(\\bar{x}-\\mu )^{2}\\]

shows it is maximised uniquely when the nonnegative second term is zero, at $\\mu =\\bar{x}$.

</details>

<a id="section-361-5-exponential-rate-mle"></a>
### 5. Exponential rate MLE {#section-363-5-exponential-rate-mle}

**Exercise 4.5**

Observed waiting times are $1,2,3$. Find the exponential-rate MLE.

<details>
<summary>Hint 1</summary>

Use the exponential rate score with the total observed exposure.

</details>
<details>
<summary>Hint 2</summary>

A rate is the reciprocal sample mean under this model.

</details>
<details>
<summary>Solution</summary>

**Solution.** $n=3$ and the sum is 6, so $\\hat{\\lambda }=n/\\sum x_i=3/6=1/2$.

</details>

<a id="section-386-6-uniform-endpoint-mle"></a>
### 6. Uniform endpoint MLE {#section-388-6-uniform-endpoint-mle}

**Exercise 4.6**

For observations $0.2,0.7,0.5$ from $Uniform(0,\\theta )$, find the MLE.

<details>
<summary>Hint 1</summary>

First determine where the support indicator is nonzero.

</details>
<details>
<summary>Hint 2</summary>

The remaining power of the endpoint decreases on the permitted region.

</details>
<details>
<summary>Solution</summary>

**Solution.** The likelihood is zero for $\\theta <0.7$ and proportional to $\\theta ^{-3}$ for $\\theta \\ge 0.7$. It decreases on the permitted interval, so the maximum is $\\hat{\\theta }=0.7$, the sample maximum.

</details>

<a id="section-411-7-bernoulli-score-mean"></a>
### 7. Bernoulli score mean {#section-413-7-bernoulli-score-mean}

**Exercise 4.7**

Verify directly that $E_p[(X-p)/(p(1-p))]=0$ for $0<p<1$.

<details>
<summary>Hint 1</summary>

The Bernoulli score has a fixed positive denominator.

</details>
<details>
<summary>Hint 2</summary>

Take the expectation of its centred numerator.

</details>
<details>
<summary>Solution</summary>

**Solution.** The denominator is fixed and $E_p[X-p]=p-p=0$.

</details>

<a id="section-436-8-bernoulli-information"></a>
### 8. Bernoulli information {#section-438-8-bernoulli-information}

**Exercise 4.8**

Compute $E_p[U_p^{2}]$.

<details>
<summary>Hint 1</summary>

Express the squared-score expectation using Bernoulli variance.

</details>
<details>
<summary>Hint 2</summary>

Keep the denominator squared before cancelling one variance factor.

</details>
<details>
<summary>Solution</summary>

**Solution.** Since $U_p=(X-p)/[p(1-p)]$ and $Var(X)=p(1-p)$,

$I(p)=Var(X)/[p^{2}(1-p)^{2}]=1/[p(1-p)]$.

</details>

<a id="section-463-9-add-independent-information"></a>
### 9. Add independent information {#section-465-9-add-independent-information}

**Exercise 4.9**

Prove information adds for two independent regular observations.

<details>
<summary>Hint 1</summary>

The joint log-likelihood and hence its score are sums.

</details>
<details>
<summary>Hint 2</summary>

The mixed score expectation vanishes by independence and the regular zero-mean identity.

</details>
<details>
<summary>Solution</summary>

**Solution.** The joint score is $U_1+U_2$. Its squared expectation is

$E[U_1^{2}]+E[U_2^{2}]+2E[U_1U_2]$.

Independence and zero score means give $E[U_1U_2]=E[U_1]E[U_2]=0$, leaving the sum of informations.

</details>

<a id="section-492-10-reparameterise-bernoulli-information"></a>
### 10. Reparameterise Bernoulli information {#section-494-10-reparameterise-bernoulli-information}

**Exercise 4.10**

For $\\eta =\\log[p/(1-p)]$, derive $dp/d\\eta $.

<details>
<summary>Hint 1</summary>

Invert the log-odds transformation before differentiating.

</details>
<details>
<summary>Hint 2</summary>

Insert the derivative into the squared-Jacobian information rule.

</details>
<details>
<summary>Solution</summary>

**Solution.** The inverse is $p=e^\\eta /(1+e^\\eta )$. Differentiation gives

$dp/d\\eta =e^\\eta /(1+e^\\eta )^{2}=p(1-p)$.

Thus $I_\\eta =I_p(dp/d\\eta )^{2}=p(1-p)$.

</details>

<a id="section-521-11-observed-versus-expected-information"></a>
### 11. Observed versus expected information {#section-523-11-observed-versus-expected-information}

**Exercise 4.11**

For normal location with known variance, compute both quantities for $n$ observations.

<details>
<summary>Hint 1</summary>

Differentiate the normal log-likelihood twice in location.

</details>
<details>
<summary>Hint 2</summary>

Its curvature is constant in the observations, so expectation changes nothing.

</details>
<details>
<summary>Solution</summary>

**Solution.** $\\ell ''(\\mu )=-n/\\sigma ^{2}$, so observed information is $n/\\sigma ^{2}$, independent of data and parameter. Its expectation is the same, hence Fisher information is also $n/\\sigma ^{2}$.

</details>

<a id="section-546-12-likelihood-ratio-for-two-coins"></a>
### 12. Likelihood ratio for two coins {#section-548-12-likelihood-ratio-for-two-coins}

**Exercise 4.12**

Ten tosses yield eight heads. Compare $p=0.8$ with $p=0.5$ by likelihood ratio.

<details>
<summary>Hint 1</summary>

Cancel all parameter-free factors between the two candidates.

</details>
<details>
<summary>Hint 2</summary>

The resulting likelihood ratio still needs prior odds to become posterior odds.

</details>
<details>
<summary>Solution</summary>

**Solution.** Data-only combinatorial factors cancel:

$L(0.8)/L(0.5)=(0.8^8\\cdot 0.2^{2})/(0.5^{10})$.

This is relative support inside the two-point model, not the posterior odds without prior odds.

</details>

<a id="section-575-13-profile-a-normal-variance"></a>
### 13. Profile a normal variance {#section-577-13-profile-a-normal-variance}

**Exercise 4.13**

For fixed $\\mu $, differentiate the normal log-likelihood in $v=\\sigma ^{2}$ and find its interior maximiser.

<details>
<summary>Hint 1</summary>

Write the likelihood in terms of the residual total Q and positive variance v.

</details>
<details>
<summary>Hint 2</summary>

Use the derivative and check that the residual sum is positive for an interior maximum.

</details>
<details>
<summary>Solution</summary>

**Solution.** Write $Q(\\mu )=\\sum _i(x_i-\\mu )^{2}$. Then

$\\ell (v)=-(n/2)\\log v-Q/(2v)+C$.

The derivative is $-n/(2v)+Q/(2v^{2})$, which vanishes at $v=Q/n$. The second derivative at that point is negative when $Q>0$.

</details>

<a id="section-604-14-score-failure-under-moving-support"></a>
### 14. Score failure under moving support {#section-606-14-score-failure-under-moving-support}

**Exercise 4.14**

For $Uniform(0,\\theta )$, what contradiction appears if one incorrectly treats the interior derivative as a regular score?

<details>
<summary>Hint 1</summary>

Compute the derivative inside the uniform support.

</details>
<details>
<summary>Hint 2</summary>

Its nonzero expected value diagnoses the omitted moving-boundary contribution.

</details>
<details>
<summary>Solution</summary>

**Solution.** The interior derivative is constantly $-1/\\theta $, so its expectation is $-1/\\theta $, not zero. This signals the omitted derivative of the support boundary; the regular mean-zero proof is inapplicable.

</details>

<a id="section-629-15-kl-nonnegativity"></a>
### 15. KL nonnegativity {#section-631-15-kl-nonnegativity}

**Exercise 4.15**

Use $\\log t\\le t-1$ to show $D(g\\lVert f)\\ge 0$ when both are densities and the expressions exist.

<details>
<summary>Hint 1</summary>

Apply the logarithm inequality on the positive-g support.

</details>
<details>
<summary>Hint 2</summary>

Do not replace the integral of f over that support by one unless its support is contained there.

</details>
<details>
<summary>Solution</summary>

**Solution.** On \${g>0}$, set $t=f/g$. Then $-\\log(f/g)\\ge 1-f/g$. Multiply by $g$ and integrate:

$D(g\\lVert f)=\\int _{\\{g>0\\}}g \\log(g/f)\\ge\\int _{\\{g>0\\}}(g-f)=1-\\int _{\\{g>0\\}}f\\ge0$.

The last inequality uses only that \\(f\\) has total mass one; \\(f\\) may also put mass where \\(g=0\\). If \\(f=0\\) on a set of positive \\(g\\)-mass, the divergence is infinite and nonnegativity is immediate.

</details>

<a id="section-658-16-misspecified-target"></a>
### 16. Misspecified target {#section-660-16-misspecified-target}

**Exercise 4.16**

If the true density is not in \${f_\\theta }$, what population criterion does maximum expected log-likelihood optimise?

<details>
<summary>Hint 1</summary>

Separate the true-law entropy term from the candidate log-likelihood.

</details>
<details>
<summary>Hint 2</summary>

The KL projection statement requires well-defined integrals and an attained minimiser.

</details>
<details>
<summary>Solution</summary>

**Solution.** Since $E_g \\log f_\\theta =E_g \\log g-D(g\\lVert f_\\theta )$, it minimises $D(g\\lVert f_\\theta )$ over the model, provided the minimiser and integrals exist. The target is a KL projection, not a true mechanism parameter.

</details>

<a id="section-683-17-proportional-stopping-plan-likelihoods"></a>
### 17. Proportional stopping-plan likelihoods {#section-685-17-proportional-stopping-plan-likelihoods}

**Exercise 4.17**

Why can a fixed-binomial and stop-at-$r$ experiment have proportional likelihoods for the same $r,n$?

<details>
<summary>Hint 1</summary>

Compare the parameter-dependent path factors under the two stopping plans.

</details>
<details>
<summary>Hint 2</summary>

Combinatorial factors may differ while remaining independent of the candidate success probability.

</details>
<details>
<summary>Solution</summary>

**Solution.** Both probabilities contain the parameter factor $p^r(1-p)^{n-r}$. Their combinatorial or path factors depend on observed $r,n$ and the plan but not on $p$, so they cancel from likelihood ratios.

</details>

<a id="section-708-18-likelihood-is-not-posterior-probability"></a>
### 18. Likelihood is not posterior probability {#section-710-18-likelihood-is-not-posterior-probability}

**Exercise 4.18**

Two parameter values have likelihoods 4 and 1. Must posterior probability of the first be 0.8?

<details>
<summary>Hint 1</summary>

Translate the likelihood ratio into posterior odds.

</details>
<details>
<summary>Hint 2</summary>

Equal prior odds are an extra assumption rather than part of likelihood.

</details>
<details>
<summary>Solution</summary>

**Solution.** No. The likelihood ratio is 4, but posterior odds equal prior odds times 4. Probability 0.8 follows only from equal prior odds in this two-state model.

</details>

<a id="section-733-19-a-ridge"></a>
### 19. A ridge {#section-735-19-a-ridge}

**Exercise 4.19**

If $L(\\alpha ,\\beta ;x)$ depends on the parameters only through $\\alpha +\\beta $, describe its maximisers.

<details>
<summary>Hint 1</summary>

Optimise first over the identifiable sum.

</details>
<details>
<summary>Hint 2</summary>

Every parameter pair on the resulting line gives the same fitted observation law.

</details>
<details>
<summary>Solution</summary>

**Solution.** If the likelihood in $\\gamma =\\alpha +\\beta $ is maximised at $\\hat{\\gamma }$, every pair satisfying $\\alpha +\\beta =\\hat{\\gamma }$ is a maximiser. The ridge reflects nonidentification of the components.

</details>

<a id="section-758-20-numerical-underflow"></a>
### 20. Numerical underflow {#section-760-20-numerical-underflow}

**Exercise 4.20**

Why should software maximise a sum of log densities rather than a product of many small densities?

<details>
<summary>Hint 1</summary>

Use monotonicity of logarithms for the exact optimisation argument.

</details>
<details>
<summary>Hint 2</summary>

Finite-precision stability does not change zero-support or model-validity requirements.

</details>
<details>
<summary>Solution</summary>

**Solution.** A long product can underflow to zero in finite precision even when likelihood ratios are meaningful. Logs turn products into sums and preserve the maximiser. Constants and impossible observations still need careful treatment; numerical stability does not repair model errors.

</details>

<a id="section-783-14-build-the-likelihood-for-the-recorded-observation"></a>

<a id="section-970-21-optional-practice-extensions-for-likelihood-protocol"></a>
### 21. SI-04-E21. Censoring contributes exposure {#section-973-si-04-e21-censoring-contributes-exposure}

**Exercise 4.21**

Three independent exponential lifetimes are observed with cutoff $c=2$. The records are failures at $1/2$ and $1$, and survival to 2 for the third unit. Derive the likelihood, its rate MLE, and the result of incorrectly treating the third record as a failure. If all three survive to the cutoff, does an MLE exist for $\\lambda>0$?


<details>
<summary>Hint 1</summary>

Separate the number of failures from total observed exposure.

</details>
<details>
<summary>Hint 2</summary>

A censored duration contributes survival probability, and a zero-failure likelihood can have only a boundary supremum.

</details>

<a id="section-991-si-04-e22-curvature-contains-a-score-term"></a>
### 22. SI-04-E22. Curvature contains a score term {#section-993-si-04-e22-curvature-contains-a-score-term}

**Exercise 4.22**

Let $\\theta=e^\\eta$ and a log-likelihood be $\\ell(\\theta)$. Express $U_\\eta$ and $J_\\eta$ in terms of $\\theta,U_\\theta,J_\\theta$. For one exponential lifetime $x>0$ with rate $\\theta$, compute both sides directly and identify when the squared-Jacobian rule for observed information is valid.


<details>
<summary>Hint 1</summary>

Differentiate the reparameterised log-likelihood twice.

</details>
<details>
<summary>Hint 2</summary>

The second derivative contains a score term in addition to the squared-Jacobian curvature term.

</details>

<a id="section-1011-22-solutions-to-the-likelihood-protocol-extensions"></a>

## Solutions

<a id="section-1013-22-solutions-to-the-likelihood-protocol-extensions"></a>
<details>
<summary>Solution</summary>

<a id="section-1015-si-04-e21-censoring-contributes-exposure-solution"></a>
### SI-04-E21. Censoring contributes exposure — solution {#section-1017-si-04-e21-censoring-contributes-exposure-solution}

There are two failures and exposure $S=1/2+1+2=7/2$, so $L(\\lambda)=\\lambda^2e^{-7\\lambda/2}$ and $\\hat\\lambda=2/(7/2)=4/7$. Incorrectly counting censoring as failure gives $\\lambda^3e^{-7\\lambda/2}$ and $6/7$. With no failures, all exposure times equal 2 and $L(\\lambda)=e^{-6\\lambda}$. This decreases for every $\\lambda>0$, with supremum 1 as $\\lambda\\downarrow0$ and no maximum on that open parameter space. The censoring atom contributes survival probability, not a failure-density factor.

</details>

<details>
<summary>Solution</summary>

<a id="section-1024-si-04-e22-curvature-contains-a-score-term-solution"></a>
### SI-04-E22. Curvature contains a score term — solution {#section-1026-si-04-e22-curvature-contains-a-score-term-solution}

Here $g'=g''=\\theta$, so $U_\\eta=\\theta U_\\theta$ and $J_\\eta=\\theta^2J_\\theta-\\theta U_\\theta$. For one exponential observation, $\\ell(\\theta)=\\log\\theta-\\theta x$, giving $U_\\theta=1/\\theta-x$ and $J_\\theta=1/\\theta^2$. In log-rate coordinates $\\tilde\\ell(\\eta)=\\eta-e^\\eta x$, hence $U_\\eta=1-\\theta x$ and $J_\\eta=\\theta x$. The chain-rule formula gives $1-(1-\\theta x)=\\theta x$, agreeing directly. At the interior maximum $\\theta=1/x$, the score is zero and observed information transforms by the squared Jacobian alone. Away from a stationary point, the extra score term generally remains; its expectation vanishes under the regular mean-zero-score identity.

</details>

<a id="section-1030-23-import-boundary-for-the-likelihood-extension"></a>

## Sources {#section-1035-sources}

For a classical model-based treatment compare Casella and Berger, *Statistical Inference*, and Bickel and Doksum, *Mathematical Statistics: Basic Ideas and Selected Topics*. The book's [References, Reading Routes, and Attribution Guide](back-matter/references-and-attribution-guide.md) describes these reading routes and their scope. Specific analytical imports and source qualifications are stated where they are used.

<a id="section-1037-13-summary-and-forward-route"></a>
`;export{e as default};