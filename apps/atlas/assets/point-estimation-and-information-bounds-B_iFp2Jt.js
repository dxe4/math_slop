var e=`---
parent_id: book-principles-statistical-inference
chapter_id: point-estimation-and-information-bounds
title: "Point Estimation, Completeness, and Information Bounds"
level: advanced-undergraduate
estimated_minutes: 245
license: CC BY-SA 4.0
---

# Point Estimation, Completeness, and Information Bounds {#section-1-point-estimation-completeness-and-information-bounds}

Point estimation turns a sufficient reduction into a numerical claim about an estimand. No single property—unbiasedness, consistency, likelihood maximisation, or efficiency—settles whether an estimator is good. Each is a theorem with a comparison class and hypotheses.

This chapter develops unbiased estimation, consistency, method of moments, regular information bounds, completeness, and the Lehmann–Scheffé theorem. It builds on loss and risk, likelihood scores, and Rao–Blackwell reduction.

<a id="section-5-1-an-estimator-has-a-sampling-distribution"></a>
## 1. An estimator has a sampling distribution {#section-7-1-an-estimator-has-a-sampling-distribution}

An estimator $T=T(X)$ is a statistic whose values lie in the target or action space. Its **sampling distribution** under $\\theta $ is the law of $T(X)$ when the entire experiment is repeated under $P_\\theta $.

For scalar estimand $\\tau (\\theta )$, the estimator is **unbiased** when

$E_\\theta [T]=\\tau (\\theta )$ for every $\\theta $.

It is **consistent** along experiments indexed by sample size when

$T_n\\to \\tau (\\theta )$ in probability under every fixed $\\theta $ in the declared parameter space.

Neither property implies the other. An estimator can be biased at every finite size but have bias tending to zero and be consistent. An unbiased sequence can fail to concentrate if its variance does not vanish.

<a id="section-19-worked-contrast"></a>
### Worked contrast {#section-21-worked-contrast}

Let $X_1,X_2,\\dots$ be iid with mean $\\mu $ and finite variance. The sample mean is unbiased and consistent. The estimator

\\[T_n=\\bar{X}_n+1/n\\]

has bias $1/n$ but is still consistent. The estimator $U_n=X_1$ is unbiased for every $n$ but does not converge in probability to $\\mu $ unless the distribution is degenerate.

<a id="section-27-2-method-of-moments-matches-empirical-and-model-feature"></a>
## 2. Method of moments matches empirical and model features {#section-29-2-method-of-moments-matches-empirical-and-model-feature}

Suppose a model moment $m(\\theta )=E_\\theta [h(X)]$ exists and the estimand can be recovered from it. The **method of moments** solves

\\[n^{-1}\\sum _i h(X_i)=m(\\theta )\\]

for $\\theta $.

For exponential rate $\\lambda $, $E[X]=1/\\lambda $, so matching $\\bar{X}=1/\\lambda $ gives $\\tilde{\\lambda }=1/\\bar{X}$, which also equals the MLE. Coincidence is not guaranteed.

Moment estimators inherit vulnerabilities of the selected moments. Matching a variance requires finite second moments and is sensitive to large observations. Several roots, impossible empirical moments, and weakly invertible moment maps require explicit rules.

<a id="section-39-identifiability-of-moments"></a>
### Identifiability of moments {#section-41-identifiability-of-moments}

Even if the full model is identifiable, one chosen moment may not identify the parameter. If $X\\sim Normal(\\mu ,1)$, matching only $E[X^{2}]=1+\\mu ^{2}$ identifies $|\\mu |$ but not the sign. A method-of-moments equation cannot contain information omitted by its moment map.

<a id="section-43-3-bias-correction-in-a-moving-support-model"></a>
## 3. Bias correction in a moving-support model {#section-45-3-bias-correction-in-a-moving-support-model}

**Worked example 6.1.**

Let $X_1,\\dots,X_n iid\\sim Uniform(0,\\theta )$ and $M=\\max_iX_i$. For $0\\le m\\le \\theta $,

$P(M\\le m)=(m/\\theta )^n$,

so density $f_M(m)=nm^{n-1}/\\theta ^n$. Direct integration gives

\\[E[M]=n\\theta /(n+1)\\]

and

$Var(M)=n\\theta ^{2}/[(n+1)^{2}(n+2)]$.

The MLE $M$ is biased downward. The corrected estimator

\\[T=(n+1)M/n\\]

is unbiased, with

$Var(T)=\\theta ^{2}/[n(n+2)]$.

This estimator can exceed $\\theta $ for a realised sample even though $M\\le \\theta $; an estimator's action space need not respect the unknown constraint pointwise unless the decision problem requires it.

<a id="section-69-4-the-cram-r-rao-inequality-is-a-regular-model-theorem"></a>
## 4. The Cramér–Rao inequality is a regular-model theorem {#section-71-4-the-cram-r-rao-inequality-is-a-regular-model-theorem}

Let a scalar dominated model have score $U_\\theta $, finite information $I(\\theta )>0$, fixed support, and enough domination to differentiate expectations. If $T$ has mean

$m(\\theta )=E_\\theta [T]$,

then

$m'(\\theta )=E_\\theta [TU_\\theta ]$.

Because $E_\\theta [U_\\theta ]=0$, the right side is $Cov_\\theta (T,U_\\theta )$. Cauchy–Schwarz yields

$m'(\\theta )^{2}\\le Var_\\theta (T)I(\\theta )$.

Therefore

$Var_\\theta (T)\\ge m'(\\theta )^{2}/I(\\theta )$.

If $T$ is unbiased for differentiable $\\tau (\\theta )$, then $m'=\\tau '$. For estimating $\\theta $ itself, the lower bound is $1/I(\\theta )$.

Equality in Cauchy–Schwarz requires

\\[T-E[T]=c(\\theta )U_\\theta \\]

almost surely for an appropriate scalar. This condition explains why attaining the bound is special.

<a id="section-95-bernoulli-efficiency"></a>
### Bernoulli efficiency {#section-97-bernoulli-efficiency}

For $n$ iid Bernoulli observations, information is

$I_n(p)=n/[p(1-p)]$.

The sample proportion is unbiased with variance $p(1-p)/n=1/I_n(p)$, so it attains the bound for interior $p$.

The uniform endpoint model violates fixed-support regularity. Applying the regular bound there would conflict with valid estimators, so the theorem must not be used.

<a id="section-105-5-biased-estimators-have-a-modified-information-bound"></a>
## 5. Biased estimators have a modified information bound {#section-107-5-biased-estimators-have-a-modified-information-bound}

If $T$ estimates $\\theta $ with bias $b(\\theta )=E_\\theta [T]-\\theta $, then

$m'(\\theta )=1+b'(\\theta )$.

The score argument gives

$Var_\\theta (T)\\ge [1+b'(\\theta )]^{2}/I(\\theta )$.

Consequently

$MSE_\\theta (T)\\ge [1+b'(\\theta )]^{2}/I(\\theta )+b(\\theta )^{2}$.

This is a bound for regular models and differentiable bias. It does not say unbiased estimators minimise MSE: choosing bias can reduce variance enough to improve the sum, as the shrinkage risk calculations showed.

<a id="section-121-6-efficiency-depends-on-target-and-comparison-class"></a>
## 6. Efficiency depends on target and comparison class {#section-123-6-efficiency-depends-on-target-and-comparison-class}

An unbiased estimator attaining the Cramér–Rao bound is often called efficient at $\\theta $. An **asymptotically efficient** estimator attains a limiting information benchmark after scaling, under a sequence of regular experiments.

These terms must name:

- the estimand and parameterisation;
- pointwise or uniform scope;
- unbiased, regular, equivariant, or other comparison class;
- finite-sample or asymptotic regime;
- central model or robustness neighbourhood.

An estimator can be efficient under a normal model and fragile under contamination. Reparameterising changes variances and information together, preserving a correctly transformed efficiency statement but not raw numerical variances.

<a id="section-135-7-completeness-makes-unbiased-functions-unique"></a>
## 7. Completeness makes unbiased functions unique {#section-137-7-completeness-makes-unbiased-functions-unique}

A family of distributions for statistic $S$ is **complete** if

$E_\\theta [g(S)]=0$ for every $\\theta $

implies $g(S)=0$ almost surely for every $\\theta $, whenever the expectations exist.

Completeness is not the same as sufficient information. Sufficiency says no parameter information remains outside $S$; completeness says no nonzero function of $S$ has expectation zero throughout the family.

<a id="section-145-binomial-completeness"></a>
### Binomial completeness {#section-147-binomial-completeness}

**Worked example 6.2.**

Let $S\\sim Binomial(n,p)$, $0<p<1$, and suppose $E_p[g(S)]=0$ for every $p$. Then

$\\sum _{s=0}^n g(s)\\binom{n}{s}p^s(1-p)^{n-s}=0$.

Divide by $(1-p)^n$ and set $t=p/(1-p)>0$:

$\\sum _{s=0}^n g(s)\\binom{n}{s}t^s=0$ for every $t>0$.

A polynomial vanishing on an interval has every coefficient zero, so $g(s)=0$ for all $s$. Thus the binomial family of $S$ is complete.

<a id="section-159-8-lehmann-scheff-identifies-a-unique-best-unbiased-esti"></a>
## 8. Lehmann–Scheffé identifies a unique best unbiased estimator {#section-161-8-lehmann-scheff-identifies-a-unique-best-unbiased-esti}

**Theorem 6.1 (Lehmann–Scheffé).** If $S$ is complete and sufficient for $\\theta $, and $h(S)$ is unbiased for $\\tau (\\theta )$, then $h(S)$ is the unique unbiased function of $S$ and has minimum variance among all unbiased estimators of $\\tau (\\theta )$.

**Proof architecture.** Let $U(X)$ be any unbiased estimator. Rao–Blackwellisation gives

$g(S)=E[U|S]$,

which is unbiased and has no larger variance. Both $g(S)$ and $h(S)$ are unbiased, so

$E_\\theta [g(S)-h(S)]=0$ for every $\\theta $.

Completeness forces $g(S)=h(S)$ almost surely. Therefore every unbiased estimator Rao–Blackwellises to the same $h(S)$, whose variance cannot exceed the original. Uniqueness follows by the same difference argument. $\\square$

<a id="section-173-bernoulli-umvu-estimate"></a>
### Bernoulli UMVU estimate {#section-175-bernoulli-umvu-estimate}

For iid Bernoulli data, $S$ is complete sufficient and $S/n$ is unbiased for $p$. It is therefore the unique uniformly minimum-variance unbiased estimator of $p$.

The theorem optimises within unbiased estimators. It does not rule out a biased estimator with smaller MSE under a chosen parameter restriction or prior-average loss.

<a id="section-179-9-consistency-can-follow-from-concentration"></a>
## 9. Consistency can follow from concentration {#section-181-9-consistency-can-follow-from-concentration}

If $E_\\theta [T_n]\\to \\tau (\\theta )$ and $Var_\\theta (T_n)\\to 0$, then Chebyshev's inequality gives consistency:

\\[P_\\theta (|T_n-\\tau |>\\varepsilon )\\]

$\\le P(|T_n-E[T_n]|>\\varepsilon -|E[T_n]-\\tau |)$.

For sufficiently large $n$, the bias magnitude is below $\\varepsilon /2$, so the probability is at most

$4Var(T_n)/\\varepsilon ^{2}\\to 0$.

This is a useful sufficient condition, not a necessary one. Consistency can hold without finite variances, and variance convergence alone is not enough if bias stays away from zero.

<a id="section-193-uniform-versus-pointwise-consistency"></a>
### Uniform versus pointwise consistency {#section-195-uniform-versus-pointwise-consistency}

Pointwise consistency fixes $\\theta $ before sending $n\\to \\infty $. Uniform consistency requires a worst-case probability over $\\theta $ to vanish. Boundaries, weak identification, and growing parameter spaces can make pointwise statements much easier than uniform ones.

<a id="section-197-10-an-estimation-audit"></a>
## 10. An estimation audit {#section-199-10-an-estimation-audit}

Before praising an estimator, ask:

1. What estimand and action scale does it target?
2. Is its finite-sample mean defined, and is bias relevant under the chosen loss?
3. Does consistency hold pointwise, uniformly, or only along selected sequences?
4. Does a moment equation identify a unique parameter?
5. Does a claimed information bound satisfy fixed-support and differentiation hypotheses?
6. What rule class is used for efficiency or optimality?
7. Is a sufficient statistic complete, and is unbiasedness the desired constraint?
8. What happens at boundaries, under weak identification, or under misspecification?

<a id="section-210-11-exercises-with-complete-solutions"></a>
## 13. What the unbiased comparison actually compares {#section-738-13-what-the-unbiased-comparison-actually-compares}

An optimality label is incomplete until its quantifiers are visible. In the Lehmann–Scheffé statement above, the variance comparison is among unbiased estimators with finite second moments at the parameters where variances are compared. To obtain a finite uniformly minimum-variance conclusion throughout the family, require $h(S)$ and each comparator under discussion to be square-integrable under every $P_\\theta$. Unbiasedness means integrable expectation equal to the target at every parameter. Completeness is a uniqueness condition for integrable functions, whereas variance comparison uses the stronger second-moment condition. Stating these roles separately avoids treating an undefined variance as a real number in an inequality.

More explicitly, let the sufficient statistic admit a common conditional kernel and let $U$ be an unbiased comparator, square-integrable throughout the family. Define $g(s)=\\int U(x)K(s,dx)$ wherever the integral exists, with an arbitrary measurable convention on common irrelevant sets. Conditional Jensen gives $E_\\theta[g(S)^2]\\le E_\\theta[U^2]$, and the tower property gives $E_\\theta[g(S)]=\\tau(\\theta)$. If the integrable function $h(S)$ is another unbiased estimator, completeness applied to $g-h$ yields equality almost surely under every parameter. Thus $h$ inherits square integrability from the comparator and its variance is no larger. If a square-integrable unbiased $h$ is given from the start, this establishes its finite-variance comparison directly.

The uniqueness claim for full-data estimators needs the equality step as well as completeness. Completeness first identifies the unique unbiased function of $S$. A full-data estimator with the same minimum variance must have zero conditional residual variance; hence it equals that function almost surely at each parameter. “Unique” here allows changes on null sets. It does not mean two source-code formulas must look identical, or that every realised answer equals the estimand.

Completeness itself depends on the parameter set. With $S\\sim Binomial(2,p)$ on the whole interval $0<p<1$, the polynomial proof already forces every zero-mean function of $S$ to vanish. Restrict the parameter space instead to $\\{1/4,3/4\\}$. The nonzero function
\\[
 g(0)=3,\\qquad g(1)=-5,\\qquad g(2)=3
\\]
has expectation $3-16p(1-p)$, which is zero at both allowed parameters. The restricted family is not complete. The same statistic remains sufficient for the restricted iid model, but the completeness theorem cannot be carried over by remembering only its distribution name.

This example is a useful diagnostic for proof writing. A polynomial zero at every point of an interval is identically zero; a polynomial zero at two specified points need not be. The word “every” in the completeness definition refers to the declared parameter space. Enlarging that space creates more equations for a potential zero-mean function and can make completeness easier to establish; restricting it can destroy the argument.

<a id="section-752-14-a-nonlinear-target-makes-rao-blackwellisation-visibl"></a>
## 14. A nonlinear target makes Rao–Blackwellisation visible {#section-754-14-a-nonlinear-target-makes-rao-blackwellisation-visibl}

**Worked example 6.3.**

Estimating $p$ by the sample proportion can make the completeness argument look like a confirmation of an obvious average. A nonlinear target shows more of the mechanism. Let $X_1,\\ldots,X_n$ be iid Bernoulli$(p)$, with $n\\ge2$ and $0<p<1$, and target $\\tau(p)=p^2$. The full-data estimator $U=X_1X_2$ is unbiased because independence gives $E[U]=p^2$. It uses only the first two observations.

Conditional on $S=s$, all placements of the $s$ successes among the $n$ positions are equally likely. For the first two positions both to be successes, their ordered selections must be among the $s(s-1)$ ordered pairs of successful positions, out of $n(n-1)$ ordered pairs in total. Equivalently one can divide $\\binom{n-2}{s-2}$ by $\\binom ns$, interpreting the numerator as zero when $s<2$. Thus
\\[
 E[U\\mid S=s]=h(s)=\\frac{s(s-1)}{n(n-1)}.
\\]
The formula contains only observed $s$ and known $n$. Sufficiency makes it a legitimate common conditional average, and binomial completeness makes it the unique minimum-variance unbiased estimator of $p^2$ in the finite-second-moment comparison class.

For $n=3$, $h$ takes values $0,0,1/3,1$ at $s=0,1,2,3$. Its expectation is
\\[
 (1/3)\\,3p^2(1-p)+p^3=p^2.
\\]
Its second moment is $p^2(1-p)/3+p^3=p^2/3+2p^3/3$, giving
\\[
 \\operatorname{Var}_p(h(S))=p^2/3+2p^3/3-p^4.
\\]
By contrast $U$ is an indicator with variance $p^2(1-p^2)$. Subtracting gives $2p^2(1-p)/3>0$ for interior $p$. This strict improvement is not a large-sample approximation: it is an exact three-observation calculation.

A related target is the Bernoulli variance $p(1-p)$. Since $S(n-S)=nS-S^2$ and $E[S^2]=np(1-p)+n^2p^2$, direct subtraction yields
\\[
 E[S(n-S)]=n(n-1)p(1-p).
\\]
Therefore $S(n-S)/[n(n-1)]$ is unbiased and, by the same complete-sufficiency argument, minimum-variance unbiased. The uncorrected plug-in $\\widehat p(1-\\widehat p)$ has expectation $(n-1)p(1-p)/n$; applying a nonlinear function to an unbiased estimator need not preserve unbiasedness. This explains the correction rather than treating it as a remembered denominator.

These targets also link estimation to probability events. $p^2$ is the probability that two fresh independent trials both succeed; $p(1-p)$ is the variance of one fresh trial. A minimum-variance estimator of such a target is not necessarily a prediction rule optimal for every future loss. The target and the loss still define the decision problem. Completeness supplies a particular exact comparison, not a universal preference for unbiased reporting.

<a id="section-782-15-basu-s-theorem-discharges-the-ancillary-independence"></a>
## 15. Basu's theorem discharges the ancillary-independence promise {#section-784-15-basu-s-theorem-discharges-the-ancillary-independence}

Here is the theorem promised in the sufficiency chapter, with the conditional-version issue exposed. Let $S$ be sufficient in the sense that a common conditional kernel for the full observation given $S$ exists. Suppose the family of laws of $S$ is **boundedly complete**: every bounded measurable function of $S$ having expectation zero for all parameters is zero almost surely under each parameter law. Let $A=A(X)$ be ancillary, meaning that its entire marginal law is the same for all parameters. Then $S$ and $A$ are independent under every $P_\\theta$. Full completeness, as defined earlier, implies bounded completeness and is therefore a sufficient hypothesis.

To prove the result, fix any measurable set $D$ in the range of $A$. Ancillarity supplies a constant $c_D=P_\\theta(A\\in D)$ independent of $\\theta$. Sufficiency supplies the parameter-free measurable function
\\[
 q_D(s)=K(s,\\{x:A(x)\\in D\\}).
\\]
This function lies between zero and one and is a conditional probability of $A\\in D$ given $S$ under every model law. The tower property gives
\\[
 E_\\theta[q_D(S)-c_D]=0\\qquad\\text{for every }\\theta.
\\]
Bounded completeness implies $q_D(S)=c_D$ almost surely under each $P_\\theta$. Consequently, for every measurable retained event $C$,
\\[
 P_\\theta(S\\in C,A\\in D)
 =E_\\theta[1_{\\{S\\in C\\}}q_D(S)]
 =P_\\theta(S\\in C)P_\\theta(A\\in D).
\\]
This is independence. The proof fixes $C,D$ and obtains the required probability identity; it does not require an unjustified simultaneous intersection of uncountably many probability-one events. A common conditional kernel, rather than separately chosen parameter-indexed conditional versions, makes the bounded function to which completeness is applied the same function throughout the family.

The theorem explains the roles of its hypotheses. Ancillarity makes the marginal probability constant; sufficiency makes the conditional probability a common function; completeness forces the two to coincide. Independence is stronger than zero covariance and concerns all measurable events, not just linear summaries. No moment assumption on $A$ is required because indicators are bounded.

Why is completeness needed? Consider an observation $X=(Y,B)$ where $Y\\sim Bernoulli(\\theta)$, $0<\\theta<1$, and $B$ is an independent fair Bernoulli variable. Take $S=X$, the full observation. It is sufficient, and $A=B$ is ancillary. They cannot be independent: $B$ is a nonconstant function of $S$, so the event $\\{B=1\\}$ is known once $S$ is known. Indeed its joint probability with itself is $1/2$, not $(1/2)^2$. The sufficient statistic is not boundedly complete, because $B-1/2$ is a nonzero bounded function with expectation zero for every $\\theta$. Dropping completeness would turn a valid theorem into a false statement even in a four-point experiment.


<a id="section-807-16-a-moving-support-model-can-be-complete-and-well-beha"></a>
## 16. A moving-support model can be complete and well behaved for reduction {#section-809-16-a-moving-support-model-can-be-complete-and-well-beha}

**Optional analytical detail.** The completeness proof below uses the fundamental theorem for absolutely continuous indefinite Lebesgue integrals. Readers without that real-analysis result may take this one implication as an explicitly imported theorem and still follow the direct joint-density independence calculation. The preceding finite binomial completeness proof and the stated Lehmann–Scheffé argument do not depend on this import.

Irregularity for a score argument does not mean every inferential structure fails. For two iid $Uniform(0,\\theta)$ observations, $\\theta>0$, the maximum $M$ is sufficient by factorisation and has density $2m/\\theta^2$ on $(0,\\theta)$. We can also prove completeness directly without an exponential-family theorem.

Suppose $g$ is measurable, $E_\\theta[|g(M)|]<\\infty$ for every $\\theta$, and $E_\\theta[g(M)]=0$ for every $\\theta$. Multiplication by $\\theta^2/2$ gives
\\[
 \\int_0^\\theta m g(m)\\,dm=0\\quad\\text{for every }\\theta>0.
\\]
On every finite interval the integrand is integrable, by the assumed absolute expectation at that endpoint. Its indefinite integral is absolutely continuous, so its derivative equals $m g(m)$ for Lebesgue-almost every positive $m$. Since the integral is identically zero, $g(m)=0$ for Lebesgue-almost every $m>0$. Every law of $M$ has a density on this half-line, so $g(M)=0$ almost surely under every parameter. This proves completeness for the whole endpoint family.

Let $L=\\min(X_1,X_2)$ and define $A=L/M$ when $M>0$, with any convention at zero. Scaling $X_i=\\theta U_i$ for independent standard uniforms shows that $A$ has a law independent of $\\theta$, so it is ancillary. Basu's theorem therefore gives independence of $A$ and $M$. This use has a common conditional law: given $M=m$, choose which coordinate is the maximum with probability one half and choose the other uniformly on $(0,m)$. Ties are null events. That reconstruction law has no unknown endpoint.

There is a direct density check. The joint density of $(L,M)$ is $2/\\theta^2$ on $0<l<m<\\theta$, since either coordinate can be smaller. Under $a=l/m$, the Jacobian is $m$, giving
\\[
 f_{A,M}(a,m)=1_{\\{0<a<1\\}}\\,
       \\frac{2m}{\\theta^2}1_{\\{0<m<\\theta\\}}.
\\]
It factors into a uniform density for $A$ and the maximum density for $M$. The direct calculation both checks the independence conclusion and describes an actual ancillary law. The theorem then offers a conceptual explanation: once the complete sufficient maximum is retained, an ancillary ratio cannot carry a remaining parameter-dependent association with it.

The same example warns against exchanging model-relative claims. $A$ is ancillary for the scale endpoint in this model, not necessarily after adding an unknown lower endpoint or a dependence parameter. Nor does its independence from $M$ make its observed value irrelevant to every scientific question. It can still expose a violation of the uniform shape or independence assumptions. Complete sufficiency settles a within-family reduction problem; diagnosis may deliberately examine what that family says should be ancillary.

Finally, the corrected estimator $3M/2$ from Section 3 is unbiased for $\\theta$ at $n=2$. Completeness and sufficiency now establish its minimum-variance unbiased status, with variance $\\theta^2/8$. Its good exact properties coexist with the failure of the ordinary fixed-support Cramér–Rao derivation. One can use the correct theorem for each question without assigning the entire model one blanket label of regular or irregular usefulness.

<a id="section-832-17-information-bounds-require-a-justified-derivative"></a>
## 17. Information bounds require a justified derivative {#section-834-17-information-bounds-require-a-justified-derivative}

**Optional advanced analytical justification.** The general dominated-differentiation criterion below uses Lebesgue dominated convergence. It supplies sufficient hypotheses for the score identities, rather than assuming an unrestricted interchange of derivative and integral. In the elementary models, the relevant sums or integrals can also be evaluated directly.

A useful sufficient set of scalar regularity conditions is more explicit than “differentiate under the integral.” Work at an interior parameter value in an open interval. Let $f_\\theta$ be positive densities on one fixed support relative to a fixed measure. Assume pointwise differentiability outside one common null set. In a neighbourhood of the parameter, suppose the absolute derivatives of $f_\\theta$ and of $T f_\\theta$ are bounded by integrable functions, so dominated differentiation applies to both the normalising integral and the estimator's mean. Suppose also $T$ and the score are square-integrable and the information is positive. These are sufficient local conditions for the following argument, not a claim that every valid information inequality requires exactly this formulation.

Differentiating $\\int f_\\theta\\,d\\mu=1$ gives
\\[
 E_\\theta[U_\\theta]=\\int \\partial_\\theta f_\\theta\\,d\\mu=0.
\\]
Differentiating $m(\\theta)=\\int T f_\\theta\\,d\\mu$ gives
\\[
 m'(\\theta)=\\int T\\partial_\\theta f_\\theta\\,d\\mu
           =E_\\theta[TU_\\theta]
           =E_\\theta[(T-m(\\theta))U_\\theta].
\\]
Cauchy–Schwarz now yields the bound. The estimator cannot depend on the unknown parameter in this differentiation; otherwise differentiating $Tf_\\theta$ includes an additional derivative of $T$. A pivot evaluated at a candidate parameter is not automatically an admissible estimator for this argument.

For iid observations with one-observation score $u_\\theta(X_i)$ of mean zero, the full score is their sum. Independence removes cross terms, giving $I_n(\\theta)=nI_1(\\theta)$. This conclusion needs both independence and the mean-zero property. A correlated sample with the same one-observation marginal information need not have the same full information.

Equality in the bound is also informative. At a fixed parameter with positive finite information, the centred estimator must equal $m'(\\theta)U_\\theta/I(\\theta)$ almost surely. The required constant is determined by the covariance, not freely selected. For a globally unbiased estimator of a target, this identity must be compatible with one parameter-free estimator formula across the family. Many targets fail that compatibility even when a best unbiased estimator exists.

For instance, in the three-Bernoulli problem targeting $p^2$, the information bound is
\\[
 \\operatorname{Var}_p(T)\\ge
 \\frac{(2p)^2}{3/[p(1-p)]}
 =4p^3(1-p)/3.
\\]
Subtract this lower bound from the exact variance of the UMVU estimator in Section 14. The result is $p^2(1-p)^2/3>0$ for $0<p<1$. Thus the UMVU estimator does not attain the information bound. The lower bound is valid but not sharp within the class of available unbiased estimators for this nonlinear target. “Minimum variance” and “attains Cramér–Rao” are different claims.

In the uniform endpoint model the formal log-density derivative inside the support is $-n/\\theta$. Its expectation is not zero. Differentiating the normalising integral also requires the moving-boundary contribution, absent from that interior derivative. For one observation the unbiased estimator $2X$ has variance $\\theta^2/3$, below the spurious $\\theta^2$ bound obtained by treating $1/\\theta^2$ as regular information. The contradiction diagnoses a failed hypothesis; it is not evidence against Cauchy–Schwarz.

<a id="section-864-18-bias-scale-and-the-meaning-of-efficiency"></a>
## 18. Bias, scale and the meaning of efficiency {#section-866-18-bias-scale-and-the-meaning-of-efficiency}

The biased bound is useful precisely because it does not pretend that bias is always an error to eliminate. Take one $X\\sim Normal(\\theta,\\sigma^2)$ with known positive $\\sigma$ and the estimator $T=aX$, where $a$ is a fixed known real number. Its mean is $a\\theta$, its bias for $\\theta$ is $(a-1)\\theta$, and its variance is $a^2\\sigma^2$. The score is $(X-\\theta)/\\sigma^2$ and information is $1/\\sigma^2$. Since $1+b'(\\theta)=a$, the biased variance bound is exactly $a^2\\sigma^2$, attained by this estimator.

Attaining that bound does not settle the MSE comparison. The exact risk is
\\[
 R_\\theta(aX)=a^2\\sigma^2+(a-1)^2\\theta^2.
\\]
For $a=1/2$ this is $(\\sigma^2+\\theta^2)/4$, smaller than the sample observation's risk $\\sigma^2$ when $\\theta^2<3\\sigma^2$ and larger when $\\theta^2>3\\sigma^2$. A restricted parameter space or a prior-average criterion can favour a biased rule. No rule is preferred by a comparison class that has not been specified. At $a=0$ the variance bound is zero because the estimator is constant; the nonzero squared bias remains visible.

Reparameterisation provides a second diagnostic. If $\\eta=q(\\theta)$ is a differentiable one-to-one parameter map with a nonzero derivative at the point in question, the chain rule gives $U_\\eta=U_\\theta\\,d\\theta/d\\eta$ and
\\[
 I_\\eta=I_\\theta(d\\theta/d\\eta)^2.
\\]
A bound for estimating a transformed target must transform its derivative too. A mere change of units cannot create statistical information. If a nonlinear transformation of an estimator is used, its finite-sample unbiasedness does not follow from the original estimator's unbiasedness; the $p(1-p)$ calculation is a small exact counterexample.

The chapter's various claims now form a sequence of questions rather than a ranking by slogans. First identify the estimand and verify moments. Next state the decision loss and the allowed estimator class. Then ask whether a common sufficient reduction is available, whether completeness proves uniqueness in an unbiased class, and whether a regular score bound is applicable and sharp. Consistency is a separate statement about a sequence of experiments, not a substitute for finite-sample risk. An estimator may be unbiased but unstable, biased but useful under a restriction, complete-sufficiency optimal yet above the information bound, or well behaved in a moving-support model where the regular score argument fails. These are compatible outcomes once the target, hypotheses and quantifiers stay attached to each claim.


Completeness should also be kept separate from consistency. Completeness concerns a family of sampling laws at a declared experiment: it says that a function with zero expectation across that family must vanish. Consistency concerns a sequence of estimators and an experiment for each sample size: it asks whether probabilities of a fixed estimation error tend to zero. A complete sufficient statistic can be used badly. In Bernoulli sampling, $S_n$ is complete sufficient for each fixed $n$, but the rule $S_n/n+1$ converges to $p+1$, not to the target $p$. The theorem about the statistic does not bless every function of it.

Conversely, consistency does not require a complete-statistic argument. For iid observations with finite mean and variance, Chebyshev's inequality establishes consistency of the sample mean without proving completeness of any model family. The bound $P(|\\bar X-\\mu|>\\varepsilon)\\le \\operatorname{Var}(X)/(n\\varepsilon^2)$ is a statement at a fixed distribution and explicitly reveals the scale of its control. Extending it uniformly over a family requires a uniform variance bound or another argument; pointwise finite variances alone do not provide that bound. This is why a sensible audit writes the parameter quantifiers beside each assertion rather than allowing “good estimator” to stand in for several different theorems.

<a id="section-887-19-optional-practice-extensions"></a>
## 21. Source note for the independence theorem {#section-951-21-source-note-for-the-independence-theorem}

This proof is an elementary conditional-kernel version of Basu's theorem. The historical attribution is to D. Basu, “On Statistics Independent of a Complete Sufficient Statistic,” Sankhyā 15 (1955), 377–380. The abstract of [Basu's author-text reprint](https://link.springer.com/chapter/10.1007/978-1-4419-5825-9_14), in Selected Works of Debabrata Basu, pages 61–64, explicitly gives the bounded-completeness scope. The proof above supplies the conditional-kernel version used here; no broader result is imported from an unread historical full text.

<a id="section-953-sources"></a>

## Summary

<a id="section-959-12-summary-and-forward-route"></a>
Unbiasedness and consistency answer different questions. Moment estimators depend on an identifying moment map; regular information bounds follow from score covariance; moving support lies outside that theorem. Completeness plus sufficiency makes unbiased reductions unique and yields Lehmann–Scheffé optimality within the unbiased class. Later chapters will extend comparison through equivariance, shrinkage, hypothesis tests, confidence procedures, and asymptotic approximations.

## Exercises {#section-212-11-exercises-with-complete-solutions}

<a id="section-212-1-biased-but-consistent"></a>
### 1. Biased but consistent {#section-214-1-biased-but-consistent}

**Exercise 6.1**

If $\\bar{X}_n\\to \\mu $ in probability, prove $\\bar{X}_n+1/n$ is consistent for $\\mu $.

<details>
<summary>Hint 1</summary>

Separate the random estimation error from the deterministic perturbation.

</details>
<details>
<summary>Hint 2</summary>

For a fixed epsilon, eventually the perturbation is below epsilon/2; bound the remaining error by consistency of the mean.

</details>
<details>
<summary>Solution</summary>

**Solution.** The deterministic sequence $1/n\\to 0$. For any $\\varepsilon >0$, eventually $1/n<\\varepsilon /2$; then

$P(|\\bar{X}_n+1/n-\\mu |>\\varepsilon )\\le P(|\\bar{X}_n-\\mu |>\\varepsilon /2)\\to 0$.

</details>

<a id="section-239-2-unbiased-but-inconsistent"></a>
### 2. Unbiased but inconsistent {#section-241-2-unbiased-but-inconsistent}

**Exercise 6.2**

Why is $T_n=X_1$ unbiased but generally inconsistent for $\\mu $?

<details>
<summary>Hint 1</summary>

Compute the expectation, then examine whether adding more unused observations changes the distribution.

</details>
<details>
<summary>Hint 2</summary>

A nondegenerate deviation probability for X1 stays fixed as n grows.

</details>
<details>
<summary>Solution</summary>

**Solution.** Its mean is $\\mu $ for every $n$, but its distribution does not change with $n$. If $P(|X_1-\\mu |>\\varepsilon )>0$ for some $\\varepsilon $, that probability never tends to zero.

</details>

<a id="section-264-3-moment-estimate-for-a-poisson-rate"></a>
### 3. Moment estimate for a Poisson rate {#section-266-3-moment-estimate-for-a-poisson-rate}

**Exercise 6.3**

For iid $Poisson(\\lambda )$ observations, find the one-moment estimator.

<details>
<summary>Hint 1</summary>

Match the first model moment to the empirical first moment.

</details>
<details>
<summary>Hint 2</summary>

The Poisson mean equals its rate; no nonlinear inversion is needed.

</details>
<details>
<summary>Solution</summary>

**Solution.** The model mean is $\\lambda $; equating it to $\\bar{X}$ gives $\\tilde{\\lambda }=\\bar{X}$.

</details>

<a id="section-289-4-a-moment-that-loses-sign"></a>
### 4. A moment that loses sign {#section-291-4-a-moment-that-loses-sign}

**Exercise 6.4**

For $Normal(\\mu ,1)$, what does matching the second raw moment identify?

<details>
<summary>Hint 1</summary>

Write the normal second raw moment as variance plus squared mean.

</details>
<details>
<summary>Hint 2</summary>

Solving for the squared mean loses its sign, and an empirical value below one has no real inverse.

</details>
<details>
<summary>Solution</summary>

**Solution.** Since $E[X^{2}]=1+\\mu ^{2}$, the equation gives $\\mu ^{2}=\\overline{X^{2}}-1$ when nonnegative. It does not determine the sign and may have no real solution when the empirical second moment is below one.

</details>

<a id="section-314-5-uniform-maximum-mean"></a>
### 5. Uniform maximum mean {#section-316-5-uniform-maximum-mean}

**Exercise 6.5**

Integrate the maximum density to verify $E[M]=n\\theta /(n+1)$.

<details>
<summary>Hint 1</summary>

Use the support (0,theta) and multiply m by the stated maximum density.

</details>
<details>
<summary>Hint 2</summary>

Integrate m to power n and keep the theta-to-power-n normalising factor.

</details>
<details>
<summary>Solution</summary>

**Solution.**

\\[E[M]=\\int _0^\\theta  m[nm^{n-1}/\\theta ^n]dm\\]

$=n\\theta ^{-n}[\\theta ^{n+1}/(n+1)]=n\\theta /(n+1)$.

</details>

<a id="section-343-6-uniform-bias-correction"></a>
### 6. Uniform bias correction {#section-345-6-uniform-bias-correction}

**Exercise 6.6**

Show $(n+1)M/n$ is unbiased.

<details>
<summary>Hint 1</summary>

Use linearity of expectation and the preceding maximum mean.

</details>
<details>
<summary>Hint 2</summary>

Choose the multiplicative factor that cancels n/(n+1).

</details>
<details>
<summary>Solution</summary>

**Solution.** Multiply the expectation from Exercise 5:

$E[(n+1)M/n]=[(n+1)/n][n\\theta /(n+1)]=\\theta $.

</details>

<a id="section-370-7-uniform-corrected-variance"></a>
### 7. Uniform corrected variance {#section-372-7-uniform-corrected-variance}

**Exercise 6.7**

Use the stated variance of $M$ to find the corrected estimator's variance.

<details>
<summary>Hint 1</summary>

Variance scales by the square of a known multiplier.

</details>
<details>
<summary>Hint 2</summary>

Multiply the displayed maximum variance by ((n+1)/n) squared and cancel factors.

</details>
<details>
<summary>Solution</summary>

**Solution.** Scaling variance gives

$[(n+1)/n]^{2}[n\\theta ^{2}/((n+1)^{2}(n+2))]=\\theta ^{2}/[n(n+2)]$.

</details>

<a id="section-397-8-score-covariance-identity"></a>
### 8. Score covariance identity {#section-399-8-score-covariance-identity}

**Exercise 6.8**

Under regularity, prove $Cov(T,U_\\theta )=m'(\\theta )$.

<details>
<summary>Hint 1</summary>

Differentiate the estimator's mean only under the stated regularity hypotheses.

</details>
<details>
<summary>Hint 2</summary>

Replace the density derivative by density times score, then use the mean-zero score identity.

</details>
<details>
<summary>Solution</summary>

**Solution.** Differentiating $m(\\theta )=\\int T(x)f_\\theta (x)d\\mu $ gives

$m'=\\int T(\\partial f_\\theta /\\partial \\theta )d\\mu =E[TU_\\theta ]$.

Since $E[U_\\theta ]=0$, this equals $Cov(T,U_\\theta )$.

</details>

<a id="section-426-9-cram-r-rao-for-bernoulli"></a>
### 9. Cramér–Rao for Bernoulli {#section-428-9-cram-r-rao-for-bernoulli}

**Exercise 6.9**

Find the lower variance bound for an unbiased estimator of $p$ from $n$ iid observations.

<details>
<summary>Hint 1</summary>

Use sample information rather than one-observation information.

</details>
<details>
<summary>Hint 2</summary>

The derivative of the target p is one; invert n/[p(1−p)] for interior p.

</details>
<details>
<summary>Solution</summary>

**Solution.** Information is $n/[p(1-p)]$; the derivative of target $p$ is one. The bound is its reciprocal $p(1-p)/n$.

</details>

<a id="section-451-10-equality-condition"></a>
### 10. Equality condition {#section-453-10-equality-condition}

**Exercise 6.10**

What relation between estimator and score is required to attain the scalar Cramér–Rao bound?

<details>
<summary>Hint 1</summary>

Recall the equality condition in the Cauchy–Schwarz step.

</details>
<details>
<summary>Hint 2</summary>

The centred estimator must be a multiple of the score almost surely, with the multiple fixed by their covariance.

</details>
<details>
<summary>Solution</summary>

**Solution.** Equality in Cauchy–Schwarz requires centred estimator and score to be linearly dependent almost surely:

$T-E[T]=c(\\theta )U_\\theta $.

The constant must also match the covariance identity.

</details>

<a id="section-480-11-biased-bound"></a>
### 11. Biased bound {#section-482-11-biased-bound}

**Exercise 6.11**

If bias is constant $b(\\theta )=c$, what derivative factor appears in the biased information bound?

<details>
<summary>Hint 1</summary>

Differentiate the estimator's mean theta+b(theta).

</details>
<details>
<summary>Hint 2</summary>

A constant bias has zero derivative; distinguish the variance bound from the added squared bias in MSE.

</details>
<details>
<summary>Solution</summary>

**Solution.** $b'(\\theta )=0$, so $m'(\\theta )=1$. The variance bound remains $1/I(\\theta )$, while MSE additionally contains $c^{2}$.

</details>

<a id="section-505-12-why-uniform-support-is-excluded"></a>
### 12. Why uniform support is excluded {#section-507-12-why-uniform-support-is-excluded}

**Exercise 6.12**

Name the failed regularity condition in $Uniform(0,\\theta )$.

<details>
<summary>Hint 1</summary>

Inspect both the density formula and its changing integration interval.

</details>
<details>
<summary>Hint 2</summary>

The boundary moves with theta, so differentiating the normalising integral is not justified by the interior score alone.

</details>
<details>
<summary>Solution</summary>

**Solution.** The support depends on $\\theta $. Differentiating the integral of the density requires a moving-boundary term, so the ordinary mean-zero score and Cramér–Rao derivation do not apply.

</details>

<a id="section-530-13-prove-binomial-completeness-for-n-2"></a>
### 13. Prove binomial completeness for $n=2$ {#section-532-13-prove-binomial-completeness-for-n-2}

**Exercise 6.13**

Suppose $g(0)(1-p)^{2}+2g(1)p(1-p)+g(2)p^{2}=0$ for all $p\\in (0,1)$. Show all values vanish.

<details>
<summary>Hint 1</summary>

Transform the identity into a polynomial in the odds.

</details>
<details>
<summary>Hint 2</summary>

Divide by (1−p) squared and use that a polynomial vanishing on an interval has zero coefficients.

</details>
<details>
<summary>Solution</summary>

**Solution.** Divide by $(1-p)^{2}$ and set $t=p/(1-p)$ to get

$g(0)+2g(1)t+g(2)t^{2}=0$ for every $t>0$.

A polynomial zero on an interval has all coefficients zero, so each $g(s)=0$.

</details>

<a id="section-559-14-uniqueness-from-completeness"></a>
### 14. Uniqueness from completeness {#section-561-14-uniqueness-from-completeness}

**Exercise 6.14**

If $h_1(S)$ and $h_2(S)$ are both unbiased for the same target and $S$ is complete, prove equality.

<details>
<summary>Hint 1</summary>

Subtract the two unbiased estimators.

</details>
<details>
<summary>Hint 2</summary>

Their difference is a function of S with expectation zero throughout the parameter family; apply completeness.

</details>
<details>
<summary>Solution</summary>

**Solution.** Their difference has expectation zero for every parameter value. Completeness forces $h_1(S)-h_2(S)=0$ almost surely throughout the family.

</details>

<a id="section-584-15-bernoulli-umvu"></a>
### 15. Bernoulli UMVU {#section-586-15-bernoulli-umvu}

**Exercise 6.15**

Why does Lehmann–Scheffé apply to $S/n$?

<details>
<summary>Hint 1</summary>

Verify all three inputs to Lehmann–Scheffé separately.

</details>
<details>
<summary>Hint 2</summary>

Use sufficient factorisation, polynomial completeness and the expectation of S/n.

</details>
<details>
<summary>Solution</summary>

**Solution.** $S$ is sufficient by factorisation and complete by the polynomial argument. The statistic $S/n$ is a function of $S$ and has expectation $p$. The theorem makes it the unique minimum-variance unbiased estimator.

</details>

<a id="section-609-16-unbiasedness-constraint-boundary"></a>
### 16. Unbiasedness constraint boundary {#section-611-16-unbiasedness-constraint-boundary}

**Exercise 6.16**

Does UMVU status prove $S/n$ minimises MSE among all estimators?

<details>
<summary>Hint 1</summary>

Identify the comparison class in the UMVU statement.

</details>
<details>
<summary>Hint 2</summary>

Minimum variance among unbiased estimators does not compare the squared bias of other rules.

</details>
<details>
<summary>Solution</summary>

**Solution.** No. It compares variances among unbiased estimators. A biased estimator may have smaller MSE on a restricted parameter space or under average risk.

</details>

<a id="section-634-17-a-chebyshev-consistency-condition"></a>
### 17. A Chebyshev consistency condition {#section-636-17-a-chebyshev-consistency-condition}

**Exercise 6.17**

Suppose $Bias(T_n)=1/n$ and $Var(T_n)=3/n$. Prove consistency.

<details>
<summary>Hint 1</summary>

Centre first at the estimator's own expectation.

</details>
<details>
<summary>Hint 2</summary>

For sufficiently large n, remove the bias with an epsilon/2 triangle bound and apply Chebyshev to variance 3/n.

</details>
<details>
<summary>Solution</summary>

**Solution.** Bias tends to zero and variance tends to zero. For large $n$ with $1/n<\\varepsilon /2$,

$P(|T_n-\\tau |>\\varepsilon )\\le P(|T_n-E[T_n]|>\\varepsilon /2)\\le 12/(n\\varepsilon ^{2})\\to 0$.

</details>

<a id="section-661-18-pointwise-versus-uniform"></a>
### 18. Pointwise versus uniform {#section-663-18-pointwise-versus-uniform}

**Exercise 6.18**

Why does proving consistency separately for every fixed $\\theta $ not automatically prove uniform consistency?

<details>
<summary>Hint 1</summary>

Compare the order of the quantifiers over theta and sample size.

</details>
<details>
<summary>Hint 2</summary>

A theta-dependent threshold need not be bounded over the whole parameter space.

</details>
<details>
<summary>Solution</summary>

**Solution.** The sample size needed to make error small may depend without bound on $\\theta $. Uniform consistency controls $\\sup_\\theta P_\\theta (error)$ with one sample-size threshold for the whole space.

</details>

<a id="section-686-19-information-under-rescaling"></a>
### 19. Information under rescaling {#section-688-19-information-under-rescaling}

**Exercise 6.19**

If $\\eta =2\\theta $, how does scalar information transform?

<details>
<summary>Hint 1</summary>

Apply the chain rule to the score.

</details>
<details>
<summary>Hint 2</summary>

Information is multiplied by the square of dtheta/deta; estimator variances for eta use the inverse scaling.

</details>
<details>
<summary>Solution</summary>

**Solution.** $d\\theta /d\\eta =1/2$, so $I_\\eta =I_\\theta /4$. Variances of estimators for $\\eta $ scale by four, leaving correctly transformed efficiency comparisons consistent.

</details>

<a id="section-711-20-optimisation-is-not-estimation-theory"></a>
### 20. Optimisation is not estimation theory {#section-713-20-optimisation-is-not-estimation-theory}

**Exercise 6.20**

An MLE is computed to machine precision. Which statistical properties remain unproved?

<details>
<summary>Hint 1</summary>

Separate solving the observed optimisation from properties across repeated samples.

</details>
<details>
<summary>Hint 2</summary>

Name a statistical claim that requires a sampling-law argument, such as consistency or risk, and cannot follow from numerical precision.

</details>
<details>
<summary>Solution</summary>

**Solution.** Identification, bias, variance, risk, consistency, information efficiency, boundary behaviour, robustness, and calibration all remain mathematical questions about repeated data. Numerical precision establishes only that a specified optimisation problem was approximately solved.

</details>

<a id="section-736-13-what-the-unbiased-comparison-actually-compares"></a>

<a id="section-889-19-optional-practice-extensions"></a>
### 21. SI-06-E21: an exact nonlinear information gap {#section-891-si-06-e21-an-exact-nonlinear-information-gap}

**Exercise 6.21**

For three iid Bernoulli$(p)$ observations with $0<p<1$, use $h(S)=S(S-1)/6$ to estimate $p^2$. Derive its expectation and variance from its four possible values, compare its variance with the regular Cramér–Rao lower bound for this target, and explain why a positive gap does not contradict its UMVU status.


<details>
<summary>Hint 1</summary>

List h at each of the four binomial outcomes and compute its first two moments.

</details>
<details>
<summary>Hint 2</summary>

Use target derivative 2p and information 3/[p(1−p)]; subtract the bound from the exact variance before interpreting UMVU.

</details>

<a id="section-909-si-06-e22-distinguish-three-basu-hypotheses"></a>
### 22. SI-06-E22: distinguish three Basu hypotheses {#section-911-si-06-e22-distinguish-three-basu-hypotheses}

**Exercise 6.22**

In the experiment $X=(Y,B)$ of Section 15, let $S=X$ and $A=B$. Verify sufficiency and ancillarity, exhibit a bounded zero-mean nonzero function proving that $S$ is not boundedly complete, and use one event to disprove independence. State the additional conditional-kernel hypothesis used in the chapter's version of Basu's theorem.


<details>
<summary>Hint 1</summary>

Conditioning on the entire observation is degenerate; the fair coin's marginal law is fixed.

</details>
<details>
<summary>Hint 2</summary>

Use B−1/2 to test bounded completeness and the event B=1 twice to test independence; retain a common conditional kernel across parameters.

</details>

<a id="section-929-20-solutions-to-optional-practice-extensions"></a>

## Solutions

<a id="section-931-20-solutions-to-optional-practice-extensions"></a>
<details>
<summary>Solution</summary>

<a id="section-934-si-06-e21-an-exact-nonlinear-information-gap-solution"></a>
### SI-06-E21: an exact nonlinear information gap — solution {#section-936-si-06-e21-an-exact-nonlinear-information-gap-solution}

At $s=0,1,2,3$, the values of $h$ are $0,0,1/3,1$. Binomial probabilities therefore give $E[h]=(1/3)3p^2(1-p)+p^3=p^2$ and $E[h^2]=(1/9)3p^2(1-p)+p^3=p^2/3+2p^3/3$. The variance is $p^2/3+2p^3/3-p^4$. The target derivative is $2p$ and the sample information is $3/[p(1-p)]$, so the bound is $4p^3(1-p)/3$. Subtraction yields $p^2(1-p)^2/3>0$. Complete sufficiency and unbiasedness establish smallest variance among unbiased finite-second-moment estimators, whereas a valid lower bound need not be achievable by that class. There is no contradiction.

</details>

<details>
<summary>Solution</summary>

<a id="section-943-si-06-e22-distinguish-three-basu-hypotheses-solution"></a>
### SI-06-E22: distinguish three Basu hypotheses — solution {#section-945-si-06-e22-distinguish-three-basu-hypotheses-solution}

Given $S=X$, the full observation is known; its conditional law is the point mass at $S$, a common parameter-free kernel. The marginal law of $A=B$ is fair Bernoulli for every $\\theta$, establishing ancillarity. The bounded statistic $B-1/2$ has expectation zero for every parameter and takes the nonzero values $-1/2,1/2$ with positive probabilities, so bounded completeness fails. If $C=\\{(y,b):b=1\\}$ and $D=\\{1\\}$, then $P(S\\in C,A\\in D)=1/2$, whereas $P(S\\in C)P(A\\in D)=1/4$. Thus the statistics are dependent. Basu's theorem here assumes one measurable conditional kernel for the full observation given $S$ that works for every parameter; separate parameter-indexed choices are insufficient for its proof.

</details>

<a id="section-949-21-source-note-for-the-independence-theorem"></a>

## Sources {#section-955-sources}

For a classical model-based treatment compare Casella and Berger, *Statistical Inference*, and Bickel and Doksum, *Mathematical Statistics: Basic Ideas and Selected Topics*. The book's [References, Reading Routes, and Attribution Guide](back-matter/references-and-attribution-guide.md) describes these reading routes and their scope. Specific analytical imports and source qualifications are stated where they are used.

<a id="section-957-12-summary-and-forward-route"></a>
`;export{e as default};