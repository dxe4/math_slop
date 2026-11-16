var e=`---
parent_id: book-principles-statistical-inference
chapter_id: consistency-asymptotic-normality-and-delta-methods
title: "Consistency, Asymptotic Normality, and Delta Methods"
level: advanced-undergraduate
estimated_minutes: 290
license: CC BY-SA 4.0
---

# Consistency, Asymptotic Normality, and Delta Methods {#section-1-consistency-asymptotic-normality-and-delta-methods}

<a id="section-1-level-and-prerequisites"></a>
## Level and prerequisites {#section-3-level-and-prerequisites}

This is a chapter of the L3 inference route. Preparation is [Probability: Models, Bounds, and Proofs](../probability-models-proofs.md), especially its [Gaussian-vector chapter](../probability-models-proofs/gaussian-vectors-and-multivariate-normal.md), and [Lucent linear algebra](/lucent/web/#/course/linear-algebra). The L3 core assumes the probability limit theorems and Gaussian facts linked below, together with differentiability and elementary Taylor expansion from calculus. The estimating-equation and local-likelihood outlooks state stronger local-uniform remainder assumptions explicitly. General LAN, Wilks, high-dimensional and boundary theorems are optional advanced needs rather than results claimed from the elementary calculations here.


Exact finite-sample distributions are exceptional. Asymptotic inference studies a declared sequence of experiments and approximates procedures as information grows. It can prove that an estimator localises its target, identify its error scale, and approximate a sampling distribution—but only under hypotheses that control the sequence.

This chapter develops the weak law of large numbers, central limit theorem, stochastic-order notation, Slutsky's theorem, scalar and multivariate delta methods, and the estimating-equation expansion. It then derives Wald confidence procedures and exhibits boundary, heavy-tail, weak-denominator, and nonuniform failures. A limit theorem is a mathematical statement about $n\\to \\infty $, not a certificate that one finite dataset is already in its limiting regime.

<a id="section-10-1-asymptotics-require-a-sequence-of-experiments"></a>
## 1. Asymptotics require a sequence of experiments {#section-12-1-asymptotics-require-a-sequence-of-experiments}

For each sample size $n$, let data have law $P_{n,\\theta }$ and let $T_n$ estimate $\\tau (\\theta )$. Usually $\\theta $ is held fixed as $n\\to \\infty $, but other regimes are possible: dimension may grow, alternatives may approach the null, dependence range may change, or information per observation may shrink.

An estimator is **consistent** at fixed $\\theta $ when

$T_n\\to \\tau (\\theta )$ in $P_{n,\\theta }$-probability;

that is, for every $\\varepsilon >0$,

$P_{n,\\theta }(|T_n-\\tau (\\theta )|>\\varepsilon )\\to 0$.

The statement is pointwise unless a supremum over states appears. It says errors of every fixed positive magnitude become unlikely. It does not give a rate, a finite-sample probability, or robustness outside the model.

An estimator is **asymptotically normal** with scale $v(\\theta )>0$ if

$\\sqrt{n}[T_n-\\tau (\\theta )]\\Rightarrow Normal(0,v(\\theta ))$.

This says typical error is of order $n^{-1/2}$ and gives a limiting shape after rescaling. Consistency alone does not imply this rate or shape.

<a id="section-30-2-the-weak-law-proves-consistency-of-sample-means"></a>
## 2. The weak law proves consistency of sample means {#section-32-2-the-weak-law-proves-consistency-of-sample-means}

**Theorem 12.1 (weak law under finite variance).** If $X_1,X_2,\\dots$ are iid with $E[X_i]=\\mu $ and $Var(X_i)=\\sigma ^{2}<\\infty $, then $\\bar{X}_n\\to \\mu $ in probability.

**Proof.** Independence gives

$E[\\bar{X}_n]=\\mu $, $Var(\\bar{X}_n)=\\sigma ^{2}/n$.

For every $\\varepsilon >0$, Chebyshev's inequality yields

$P(|\\bar{X}_n-\\mu |\\ge \\varepsilon )\\le \\sigma ^{2}/(n\\varepsilon ^{2})\\to 0$. ∎

This proof also supplies a finite-sample upper bound, though often a loose one. More general weak laws need not assume identical distributions or finite variance, but they require replacement conditions controlling tails and dependence.

<a id="section-44-plug-in-consistency"></a>
### Plug-in consistency {#section-46-plug-in-consistency}

If $\\bar{X}_n\\to \\mu $ in probability and $g$ is continuous at $\\mu $, then the continuous mapping theorem gives

$g(\\bar{X}_n)\\to g(\\mu )$ in probability.

For exponential data with mean $1/\\lambda $, the estimator $1/\\bar{X}_n$ is consistent for $\\lambda $ because reciprocal is continuous at the positive mean. If a denominator can approach zero, continuity at the target may fail or offer no uniform protection.

<a id="section-52-3-stochastic-order-records-asymptotic-scale"></a>
## 3. Stochastic order records asymptotic scale {#section-54-3-stochastic-order-records-asymptotic-scale}

We write $Y_n=O_p(a_n)$ if $Y_n/a_n$ is **bounded in probability**: for every $\\varepsilon >0$, there are finite $M$ and $N$ such that

$P(|Y_n/a_n|>M)<\\varepsilon $ for all $n\\ge N$.

We write $Y_n=o_p(a_n)$ if $Y_n/a_n\\to 0$ in probability.

Thus asymptotic normality implies $T_n-\\tau =O_p(n^{-1/2})$. Consistency says only $T_n-\\tau =o_p(1)$.

Useful rules, when dimensions are fixed, include

- $O_p(a_n)O_p(b_n)=O_p(a_nb_n)$;
- $o_p(a_n)O_p(b_n)=o_p(a_nb_n)$;
- $O_p(a_n)+O_p(b_n)=O_p(\\max(a_n,b_n))$.

For the product rule, choose probability bounds for both scaled factors and note that their product exceeds $M_1M_2$ only if at least one factor exceeds its bound. The union bound completes the argument.

Stochastic order is not an equality and conceals constants and tail shape. Writing $O_p(n^{-1/2})$ does not justify a normal quantile.

<a id="section-72-4-the-central-limit-theorem-supplies-a-limiting-shape"></a>
## 4. The central limit theorem supplies a limiting shape {#section-74-4-the-central-limit-theorem-supplies-a-limiting-shape}

**Theorem 12.2 (iid central limit theorem).** If $X_i$ are iid with mean $\\mu $ and variance $0<\\sigma ^{2}<\\infty $, then

$\\sqrt{n}(\\bar{X}_n-\\mu )/\\sigma \\Rightarrow Normal(0,1)$.

Unlike the Chebyshev proof of the weak law, this result describes the rescaled distribution. Finite variance is material: with sufficiently heavy tails, sums can have a different stable-law scale and the ordinary normal approximation can fail.

<a id="section-80-characteristic-function-proof-route"></a>
### Characteristic-function proof route {#section-82-characteristic-function-proof-route}

Set $Y_i=(X_i-\\mu )/\\sigma $, so $E[Y_i]=0$ and $E[Y_i^{2}]=1$. Its characteristic function satisfies

$\\phi (t)=E[e^{itY_i}]=1-t^{2}/2+o(t^{2})$ as $t\\to 0$.

The expansion follows by subtracting $1+itY_i$, dividing by $t^{2}$, and using a truncation argument with $E[Y_i^{2}]<\\infty $; it does not require a third moment. Independence gives the characteristic function of $n^{-1/2}\\sum _iY_i$ as

$[\\phi (t/\\sqrt{n})]^n=[1-t^{2}/(2n)+o(1/n)]^n\\to e^{-t^{2}/2}$.

The limit is the characteristic function of $Normal(0,1)$. Lévy's continuity theorem converts characteristic-function convergence into convergence in distribution. This proof explains both the $\\sqrt{n}$ scaling and the appearance of variance.

<a id="section-92-approximate-sampling-statement"></a>
### Approximate sampling statement {#section-94-approximate-sampling-statement}

For large $n$, the theorem motivates

$\\bar{X}_n\\approx Normal(\\mu ,\\sigma ^{2}/n)$.

The approximation symbol is not an equality. Its accuracy can depend strongly on skewness, tail weight, lattice effects, and the probability region of interest. Tail probabilities usually require larger samples than central probabilities.

<a id="section-100-5-slutsky-s-theorem-permits-consistently-estimated-scal"></a>
## 5. Slutsky's theorem permits consistently estimated scales {#section-102-5-slutsky-s-theorem-permits-consistently-estimated-scal}

**Theorem 12.3 (Slutsky).** If $Y_n\\Rightarrow Y$ and $Z_n\\to c$ in probability for a constant $c$, then

$Y_n+Z_n\\Rightarrow Y+c$, $Y_nZ_n\\Rightarrow cY$,

and, if $c\\ne 0$, $Y_n/Z_n\\Rightarrow Y/c$.

**Proof route.** The pair $(Y_n,Z_n)$ converges jointly in distribution to $(Y,c)$. One proves this by bounding the difference between expectations of bounded continuous functions at $(Y_n,Z_n)$ and $(Y_n,c)$, using tightness of $Y_n$ and convergence of $Z_n$; the remaining term follows from $Y_n\\Rightarrow Y$. Continuous mapping with addition, multiplication, or division at $c\\ne 0$ gives the conclusions. ∎

If $S_n^{2}\\to \\sigma ^{2}$ in probability and $\\sigma >0$, then

$\\sqrt{n}(\\bar{X}_n-\\mu )/S_n\\Rightarrow Normal(0,1)$.

This is asymptotic studentisation under suitable sampling conditions. It is distinct from the exact t distribution obtained under normal sampling.

<a id="section-116-6-the-scalar-delta-method-linearises-smooth-transformat"></a>
## 6. The scalar delta method linearises smooth transformations {#section-118-6-the-scalar-delta-method-linearises-smooth-transformat}

**Theorem 12.4 (delta method).** Suppose

\\[\\sqrt{n}(T_n-\\theta )\\Rightarrow Normal(0,v)\\]

and $g$ is differentiable at $\\theta $. Then

$\\sqrt{n}[g(T_n)-g(\\theta )]\\Rightarrow Normal(0,[g'(\\theta )]^{2}v)$.

**Proof.** Differentiability gives

$g(T_n)-g(\\theta )=g'(\\theta )(T_n-\\theta )+r_n(T_n-\\theta )$,

where $r_n\\to 0$ in probability because $T_n\\to \\theta $ and the derivative remainder ratio tends to zero near $\\theta $. Multiplying by $\\sqrt{n}$,

\\[\\sqrt{n}[g(T_n)-g(\\theta )]\\]

$=g'(\\theta )\\sqrt{n}(T_n-\\theta )+r_n\\sqrt{n}(T_n-\\theta )$.

The asymptotically normal sequence is $O_p(1)$, so the second term is $o_p(1)$. Slutsky's theorem gives the stated limit. ∎

<a id="section-138-exponential-rate-example"></a>
### Exponential-rate example {#section-140-exponential-rate-example}

<a id="section-140-worked-example-1-propagate-the-exponential-rate-uncerta"></a>
### Worked example 1: propagate the exponential-rate uncertainty {#section-142-worked-example-1-propagate-the-exponential-rate-uncerta}

For iid exponential observations with rate $\\lambda $, $\\mu =E[X]=1/\\lambda $ and $Var(X)=1/\\lambda ^{2}$. The estimator is $\\hat{\\lambda }=1/\\bar{X}$. With $g(x)=1/x$,

$g'(\\mu )=-1/\\mu ^{2}=-\\lambda ^{2}$.

Therefore

$\\sqrt{n}(\\hat{\\lambda }-\\lambda )\\Rightarrow Normal(0,\\lambda ^{2})$.

An estimated asymptotic standard error is $\\hat{\\lambda }/\\sqrt{n}$. This conclusion assumes the iid exponential model; it is not a distribution-free standard error for reciprocal means.

<a id="section-152-logit-instability-near-a-boundary"></a>
### Logit instability near a boundary {#section-154-logit-instability-near-a-boundary}

For Bernoulli data, $\\sqrt{n}(\\hat{p}-p)\\Rightarrow Normal(0,p(1-p))$ for fixed $0<p<1$. The logit derivative is $1/[p(1-p)]$, so

$\\sqrt{n}[logit(\\hat{p})-logit(p)]\\Rightarrow Normal(0,1/[p(1-p)])$.

The variance explodes as $p$ approaches zero or one. Pointwise interior asymptotics do not give uniform accuracy at the boundaries, where the logit may be infinite.

<a id="section-160-7-the-multivariate-delta-method-propagates-covariance"></a>
## 7. The multivariate delta method propagates covariance {#section-162-7-the-multivariate-delta-method-propagates-covariance}

Suppose $T_n\\in R^d$ and

$\\sqrt{n}(T_n-\\theta )\\Rightarrow Normal_d(0,\\Sigma )$.

For differentiable $g:R^d\\to R^k$ with Jacobian $G=Dg(\\theta )$, first-order expansion gives

$\\sqrt{n}[g(T_n)-g(\\theta )]\\Rightarrow Normal_k(0,G\\Sigma G^{\\mathsf T})$.

<a id="section-170-ratio-of-two-means"></a>
### Ratio of two means {#section-172-ratio-of-two-means}

Let paired observations $(X_i,Y_i)$ have mean vector $(\\mu _X,\\mu _Y)$, finite covariance matrix $\\Sigma $, and $\\mu _Y\\ne 0$. For $g(a,b)=a/b$,

$\\nabla g(\\mu _X,\\mu _Y)=(1/\\mu _Y,-\\mu _X/\\mu _Y^{2})^{\\mathsf T}$.

The asymptotic variance of $\\bar{X}/\\bar{Y}$ is

$\\nabla g^{\\mathsf T}\\Sigma \\nabla g$.

The covariance term matters because the two sample means are paired. Treating them as independent can overstate or understate uncertainty. If $\\mu _Y$ is near zero, the gradient is large and the ratio approximation can be poor even at apparently substantial sample sizes.

<a id="section-182-8-estimating-equations-yield-a-reusable-expansion"></a>
## 8. Estimating equations yield a reusable expansion {#section-184-8-estimating-equations-yield-a-reusable-expansion}

Suppose $\\hat{\\theta }_n$ solves the estimating equation to root-$n$ order:

$\\Psi _n(\\hat{\\theta }_n)=r_n,\\qquad r_n=o_p(n^{-1/2}),$

and the true target satisfies a population equation. A mean-value expansion gives

\\[r_n=\\Psi _n(\\theta _0)+\\dot{\\Psi }_n(\\tilde{\\theta }_n)(\\hat{\\theta }_n-\\theta _0)\\]

for an intermediate value $\\tilde{\\theta }_n$. If

\\[\\sqrt{n}\\Psi _n(\\theta _0)\\Rightarrow Normal(0,B)\\]

and $\\dot{\\Psi }_n(\\tilde{\\theta }_n)\\to A\\ne 0$ in probability, then

\\[\\sqrt{n}(\\hat{\\theta }_n-\\theta _0)=-[\\dot{\\Psi }_n(\\tilde{\\theta }_n)]^{-1}\\sqrt{n}\\Psi _n(\\theta _0)+o_p(1)\\]

$\\Rightarrow Normal(0,B/A^{2})$.

This is a template, not a theorem without premises. One must prove existence and consistency of the selected approximate root, the root-$n$ residual condition, differentiability or a valid replacement expansion, convergence of the derivative, and a CLT for the estimating function. Merely requiring $\\Psi _n(\\hat{\\theta }_n)=o_p(1)$ is too weak to preserve a root-$n$ limit.

For the sample mean equation $\\Psi _n(\\theta )=\\bar{X}-\\theta $, $A=-1$ and $B=\\sigma ^{2}$, recovering the ordinary CLT. Later chapters treat M-estimators and misspecification targets systematically; regular likelihood scores fit the same expansion.

<a id="section-206-9-local-likelihood-asymptotics-are-an-estimating-equati"></a>
## 9. Local likelihood asymptotics are an estimating-equation case {#section-208-9-local-likelihood-asymptotics-are-an-estimating-equati}

For iid log-likelihood

$\\ell _n(\\theta )=\\sum _i \\log f_\\theta (X_i)$,

let $U_n(\\theta )=\\partial \\ell _n(\\theta )/\\partial \\theta $. A consistent interior MLE solves $U_n(\\hat{\\theta })=0$. Under fixed support, differentiability, domination, interior identification, positive information $I(\\theta _0)$, and uniform control of local curvature,

\\[n^{-1/2}U_n(\\theta _0)\\Rightarrow Normal(0,I(\\theta _0))\\]

and

\\[-n^{-1}\\dot{U}_n(\\tilde{\\theta })\\to I(\\theta _0)\\]

in probability for intermediate $\\tilde{\\theta }\\to \\theta _0$. The estimating-equation expansion therefore gives

$\\sqrt{n}(\\hat{\\theta }-\\theta _0)\\Rightarrow Normal(0,I(\\theta _0)^{-1})$.

This is the asymptotic efficiency template for a correctly specified regular scalar likelihood. Under misspecification the score-variance and expected-curvature matrices need not agree, producing a sandwich rather than inverse information alone.

<a id="section-226-local-asymptotic-quadratic-expansion"></a>
### Local asymptotic quadratic expansion {#section-228-local-asymptotic-quadratic-expansion}

For fixed local coordinate $h$, the same hypotheses strengthen Taylor expansion to

\\[\\ell _n(\\theta _0+h/\\sqrt{n})-\\ell _n(\\theta _0)\\]

$=h\\Delta _n-(h^{2}/2)I(\\theta _0)+o_p(1)$,

where $\\Delta _n=n^{-1/2}U_n(\\theta _0)\\Rightarrow Normal(0,I(\\theta _0))$. The random linear score and deterministic quadratic information balance on the $n^{-1/2}$ scale.

Consequently, under a scalar point null, the Wald statistic

$nI(\\theta _0)(\\hat{\\theta }-\\theta _0)^{2}$,

the score statistic

$U_n(\\theta _0)^{2}/[nI(\\theta _0)]$,

and the likelihood-ratio statistic

\\[2[\\ell _n(\\hat{\\theta })-\\ell _n(\\theta _0)]\\]

all converge to $\\chi ^{2}_1$. They are first-order equivalent, not numerically identical. Boundaries, nuisance nonidentification, singular information, changing support, increasing dimension, or a false likelihood family can change the limit.

<a id="section-250-10-wald-intervals-use-two-approximations"></a>
## 10. Wald intervals use two approximations {#section-252-10-wald-intervals-use-two-approximations}

Suppose

\\[\\sqrt{n}(T_n-\\tau )/s(\\theta )\\Rightarrow Normal(0,1)\\]

and $\\hat{s}_n\\to s(\\theta )>0$ in probability. Slutsky gives

$\\sqrt{n}(T_n-\\tau )/\\hat{s}_n\\Rightarrow Normal(0,1)$.

Therefore the Wald interval

\\[T_n\\pm z_{1-\\alpha /2}\\hat{s}_n/\\sqrt{n}\\]

has coverage tending to $1-\\alpha $ at each fixed regular state.

Two approximations are involved: the estimator's standardised distribution must be near normal, and its scale estimate must be near the target scale. Symmetric Wald intervals can behave badly near parameter boundaries, under skewness, or after nonlinear transformation. A transformed-scale interval and the direct-scale Wald interval need not agree because first-order equivalence does not imply identical finite-sample endpoints.

<a id="section-268-11-when-the-first-derivative-vanishes"></a>
## 11. When the first derivative vanishes {#section-270-11-when-the-first-derivative-vanishes}

If $g'(\\theta )=0$, the ordinary delta method returns a degenerate first-order limit. A second-order expansion may identify a different scale. Suppose

\\[\\sqrt{n}(T_n-\\theta )\\Rightarrow Z\\]

and $g$ has two derivatives with $g'(\\theta )=0$. Then, under a controlled remainder,

$n[g(T_n)-g(\\theta )]\\Rightarrow (1/2)g''(\\theta )Z^{2}$.

Example: if $T_n=\\bar{X}$, $\\mu =0$, and $g(\\mu )=\\mu ^{2}$, then

$n\\bar{X}^{2}\\Rightarrow \\sigma ^{2}\\chi ^{2}_1$,

not a centred normal law. Blindly reporting zero asymptotic variance from $g'(0)=0$ would be absurd.

<a id="section-284-12-nonregular-and-nonuniform-regimes"></a>
## 12. Nonregular and nonuniform regimes {#section-286-12-nonregular-and-nonuniform-regimes}

<a id="section-286-moving-support"></a>
### Moving support {#section-288-moving-support}

For iid $Uniform(0,\\theta )$ observations with maximum $M_n$, for each fixed $t\\ge 0$ and all $n>t$,

\\[P[n(\\theta -M_n)/\\theta >t]\\]

\\[=P[M_n<\\theta (1-t/n)]\\]

$=(1-t/n)^n\\to e^{-t}$.

Thus $n(\\theta -M_n)/\\theta \\Rightarrow Exponential(1)$. The rate is $n$, not $\\sqrt{n}$, and the limit is not normal. The support boundary contains information outside regular score theory.

<a id="section-298-infinite-variance"></a>
### Infinite variance {#section-300-infinite-variance}

The ordinary finite-variance CLT cannot be invoked when $Var(X)=\\infty $. Some heavy-tailed means converge at a slower or different stable-law scale; estimated standard errors can be dominated by rare extremes.

<a id="section-302-local-and-weak-identification"></a>
### Local and weak identification {#section-304-local-and-weak-identification}

Pointwise asymptotic normality fixes a state before increasing $n$. If a denominator, derivative, or information eigenvalue approaches zero with $n$, the usual remainder can be as large as the linear term. Uniform validity over such sequences needs separate analysis.

<a id="section-306-bias-on-the-n-1-2-scale"></a>
### Bias on the $n^{-1/2}$ scale {#section-308-bias-on-the-n-1-2-scale}

Consistency alone controls convergence in probability, not expectations. Assume expectations exist and the centred CLT $\\sqrt n(T_n-E[T_n])\\Rightarrow N(0,v)$ holds with $v>0$. If also $\\sqrt n(E[T_n]-\\tau)\\to b$, Slutsky's theorem gives $\\sqrt n(T_n-\\tau)\\Rightarrow N(b,v)$; a nonzero $b$ then changes nominal zero-centered Wald coverage. Scaled bias convergence alone supplies no such conclusion. For a counterexample at $\\tau=0$, let $T_n=Z/\\sqrt n+\\sqrt n B_n$, where $Z\\sim N(0,1)$ and $B_n\\sim\\operatorname{Bernoulli}(1/n)$ is independent of $Z$. Then $\\sqrt nE[T_n]=1$, but $\\sqrt nT_n=Z+nB_n$ has CDF $F_n(x)=(1-1/n)\\Phi(x)+(1/n)\\Phi(x-n)$, so $0\\le\\Phi(x)-F_n(x)\\le1/n$ uniformly. It therefore converges to $N(0,1)$, not $N(1,1)$; the centred scaled variable instead converges to $N(-1,1)$. The rare contamination prevents exchanging limiting laws and expectations.

<a id="section-310-13-asymptotic-audit"></a>
## 13. Asymptotic audit {#section-312-13-asymptotic-audit}

Before using a limiting approximation, state:

1. the sequence of experiments and what remains fixed;
2. convergence mode, rate, and limiting law;
3. moment, dependence, differentiability, and identification conditions;
4. whether variance is known, consistently estimated, or misspecified;
5. whether the statement is pointwise or uniform;
6. boundary, heavy-tail, weak-denominator, and selection diagnostics;
7. evidence that the finite sample is in a useful regime;
8. an exact, concentration, or resampling alternative when available.

<a id="section-323-14-exercises-with-complete-solutions"></a>
## 15. Investigation: finite-sample approximation audit {#section-880-15-investigation-finite-sample-approximation-audit}

Choose an estimator with a tractable exact or high-precision reference distribution. Derive its LLN target, CLT scale, and any delta-method transformation. Across at least four sample sizes and three parameter regimes—including a boundary, skewed, or weak-denominator regime—tabulate bias, standard deviation, quantile error, and Wald coverage. Supply deterministic seeds and algorithm details if simulation is used, plus a numerical table independent of any graphic. Identify which failure comes from centering, scale estimation, shape, or nonuniformity.

<a id="section-882-16-summary-and-forward-route"></a>
## 17. A vector limit must retain its covariance {#section-889-17-a-vector-limit-must-retain-its-covariance}
A collection of scalar approximations is not yet a joint approximation. Two estimators may each look normally distributed while their dependence changes the uncertainty of their difference, ratio or fitted contrast. Work in a fixed dimension $d$ with iid vectors $W_i$, mean $\\mu$ and finite covariance matrix $\\Sigma$. For a fixed vector $a$, the scalar observations $a^\\mathsf TW_i$ are iid with variance $a^\\mathsf T\\Sigma a$. The scalar CLT therefore gives

\\[
a^\\mathsf T\\sqrt n(\\bar W-\\mu)
\\Rightarrow N(0,a^\\mathsf T\\Sigma a).
\\]

If this variance is zero, the centred projection is zero almost surely and its limit is the point mass at zero. The projection characterization of multivariate weak convergence then supplies $\\sqrt n(\\bar W-\\mu)\\Rightarrow N_d(0,\\Sigma)$. This fixed-dimensional characterization is a probability import stated in the reference boundary below; the application of the scalar CLT has been checked here. Marginal coordinate convergence alone would test only the $d$ coordinate directions, whereas the characterization requires every fixed linear direction.

For a linear transformation $A$, covariance propagates as $A\\Sigma A^\\mathsf T$. Expand $E[A(W-\\mu)(W-\\mu)^\\mathsf TA^\\mathsf T]$ to verify the identity. In particular, the variance of a difference is $\\operatorname{Var}(W_1)+\\operatorname{Var}(W_2)-2\\operatorname{Cov}(W_1,W_2)$. Pairing can therefore reduce uncertainty when the covariance is positive, or increase it when it is negative. Independence cannot be inferred from two separate histograms.

The multivariate delta method in Section 7 applies the same idea after local linearization. For a differentiable map $g:\\mathbb R^d\\to\\mathbb R^k$, differentiability at $\\mu$ means

\\[
g(\\mu+h)=g(\\mu)+Gh+r(h),\\qquad
\\|r(h)\\|/\\|h\\|\\longrightarrow0.
\\]

Since $\\sqrt n(\\bar W-\\mu)=O_p(1)$ and $\\bar W-\\mu\\to0$ in probability, multiplying the remainder by $\\sqrt n$ gives $o_p(1)$. The limiting covariance is therefore $G\\Sigma G^\\mathsf T$, including all cross terms. This argument requires differentiability of the whole map, not just the existence of some unrelated coordinate derivatives.

A singular covariance is allowed in the vector CLT and delta method. It means that some linear directions have no limiting fluctuation. Inverting that covariance for a Wald statistic requires additional conditions. A degenerate limit can signal a deterministic relation, a redundant parameterization, or a first-order derivative that vanished. The appropriate response is to inspect the direction and rate rather than to replace a zero eigenvalue by an arbitrary small positive number.


When an entire gradient vanishes, covariance propagation at first order returns zero and a second-order vector expansion can reveal a different law. Suppose $\\sqrt n(T_n-\\theta)\\Rightarrow Z$, $g$ has a continuous Hessian $H$ near $\\theta$ and $\\nabla g(\\theta)=0$. Taylor's formula gives $n[g(T_n)-g(\\theta)]\\Rightarrow Z^\\mathsf THZ/2$: the quadratic term remains order one, while the Hessian remainder vanishes by consistency and boundedness in probability.

For an exact example, take independent sample means $\\bar A,\\bar B$ from independent standard-normal samples and estimate their population-mean product, zero, by $g(\\bar A,\\bar B)=\\bar A\\bar B$. The gradient at $(0,0)$ vanishes and the Hessian has off-diagonal entries one and diagonal entries zero. Therefore $n\\bar A\\bar B$ has exactly the law $Z_AZ_B$ for independent standard normals. Its variance is one, but its fourth moment is $E[Z_A^4]E[Z_B^4]=9$, whereas a centred variance-one normal has fourth moment 3. It is not normal. A zero first-order standard error did not mean an error-free estimate; it meant that the first-order scale missed the leading term.

<a id="section-915-18-studentisation-needs-a-consistent-matrix-and-positiv"></a>
## 18. Studentisation needs a consistent matrix and positive directions {#section-917-18-studentisation-needs-a-consistent-matrix-and-positiv}
To estimate covariance, define $\\hat\\Sigma_n=n^{-1}\\sum_i(W_i-\\bar W)(W_i-\\bar W)^\\mathsf T$. One elementary sufficient condition for its consistency is $E\\|W_i\\|^4<\\infty$, with fixed $d$. Every product $W_{ij}W_{ik}$ then has finite variance: its squared expectation is bounded using $W_{ij}^2W_{ik}^2\\le(W_{ij}^4+W_{ik}^4)/2$. The finite-variance weak law from Section 2 applies entry by entry. Combining it with consistency of each sample mean gives

\\[
\\hat\\Sigma_{jk}
=n^{-1}\\sum_iW_{ij}W_{ik}-\\bar W_j\\bar W_k
\\longrightarrow \\Sigma_{jk}
\\]

in probability. There are finitely many entries, so a union bound gives convergence of the whole matrix. Fourth moments are a convenient sufficient hypothesis for this particular Chebyshev proof. They are not necessary: finite second moments suffice if one imports the more general integrable-variable weak law for those products. No such stronger weak law is being silently inferred from Section 2's finite-variance proof.

For a fixed contrast $a$ with $v=a^\\mathsf T\\Sigma a>0$, covariance consistency implies $\\hat v=a^\\mathsf T\\hat\\Sigma a\\to v$. Thus $\\sqrt n\\,a^\\mathsf T(\\bar W-\\mu)/\\sqrt{\\hat v}\\Rightarrow N(0,1)$ by Slutsky. On the exceptional event $\\hat v=0$, define a finite placeholder statistic; that event has probability tending to zero because $\\hat v\\to v>0$. An eventual high-probability domain is sufficient for a limiting law, but should be stated when the finite-sample formula can be undefined.

If $\\Sigma$ is positive definite, the quadratic statistic

\\[
Q_n=n(\\bar W-\\mu)^\\mathsf T\\hat\\Sigma^{-1}(\\bar W-\\mu)
\\Rightarrow\\chi_d^2.
\\]

Indeed, inversion is continuous near an invertible matrix, and the limiting quadratic form is $Z^\\mathsf T\\Sigma^{-1}Z$ for $Z\\sim N_d(0,\\Sigma)$. Diagonalize the positive-definite matrix by an orthogonal basis and divide coordinates by the square roots of its eigenvalues. The resulting vector has standard normal identity covariance, hence independent standard normal coordinates; the quadratic form is their squared sum, defining $\\chi_d^2$. Define a placeholder on the vanishing-probability singular event for $\\hat\\Sigma$.

This conclusion is asymptotic, with fixed dimension and positive limiting eigenvalues. It does not assert an exact finite-sample chi-square law for an estimated-covariance statistic. If dimension grows with sample size or an eigenvalue tends to zero, the continuity neighborhood and remainder bounds can deteriorate. The same formula then needs a new analysis rather than a larger numerical matrix inverse.

<a id="section-939-19-a-paired-ratio-and-an-exact-weak-denominator-failure"></a>
## 19. A paired ratio and an exact weak-denominator failure {#section-941-19-a-paired-ratio-and-an-exact-weak-denominator-failure}

<a id="section-941-worked-example-2-preserve-the-paired-covariance"></a>
### Worked example 2: preserve the paired covariance {#section-943-worked-example-2-preserve-the-paired-covariance}
Consider paired data $X_i=2Y_i+\\varepsilon_i$, where $E[Y_i]=1$, $\\operatorname{Var}(Y_i)=1$, and independent noise $\\varepsilon_i$ has mean zero and variance one. Pairs are iid. The population ratio is $E[X]/E[Y]=2$. The covariance matrix for $(X,Y)$ is

\\[
\\Sigma=\\begin{pmatrix}5&2\\\\2&1\\end{pmatrix},
\\]

because the independent noise adds one to $\\operatorname{Var}(2Y)$ and contributes nothing to $\\operatorname{Cov}(X,Y)$. At $(2,1)$ the ratio gradient is $(1,-2)^\\mathsf T$. Its limiting variance is $5+4-8=1$. Ignoring the covariance would give 9, a ninefold variance error, despite both marginal variances being correct.

The algebra provides another view. Wherever $\\bar Y\\ne0$, $\\bar X/\\bar Y=2+\\bar\\varepsilon/\\bar Y$. The CLT for $\\bar\\varepsilon$ and consistency $\\bar Y\\to1$ give the same root-$n$ variance one through Slutsky. This derivation makes clear why the shared $Y$ fluctuation cancels to first order. A finite fourth moment suffices for the simple sample-covariance proof above; the ratio's unstudentized CLT itself needs only the declared finite variances and nonzero denominator mean.

Now change the sequence of experiments. In row $n$, let $Y_i\\sim N(\\kappa/\\sqrt n,1)$ and $\\varepsilon_i\\sim N(0,1)$ independently, still with $X_i=2Y_i+\\varepsilon_i$, where fixed $\\kappa>0$. The population ratio remains 2 at every $n$, but the denominator mean moves towards zero. Define independent standard normals $Z_Y=\\sqrt n(\\bar Y-\\kappa/\\sqrt n)$ and $Z_\\varepsilon=\\sqrt n\\bar\\varepsilon$. For every $n$,

\\[
\\bar X/\\bar Y=2+\\frac{Z_\\varepsilon}{\\kappa+Z_Y}
\\]

almost surely, since the denominator equals zero with probability zero. The error law does not shrink with $n$. For instance the event $\\{|\\kappa+Z_Y|\\le1,\\ |Z_\\varepsilon|>1\\}$ has a fixed positive probability and forces error exceeding one. Hence this ratio is not consistent along the drifting sequence, even though fixed positive denominator means give ordinary consistency.

A large observed sample size is therefore insufficient information about a ratio approximation. One must also examine the denominator's scale relative to its uncertainty. The exact construction does not prove that every ratio near zero fails, but it supplies a complete counterexample to transferring a pointwise theorem unchanged along weak-denominator states. Confidence sets obtained by directly inverting joint constraints can behave differently from a symmetric ratio Wald interval; that is a change of procedure requiring its own derivation.

<a id="section-962-20-the-estimating-equation-remainder-has-an-operational"></a>
## 20. The estimating-equation remainder has an operational size {#section-964-20-the-estimating-equation-remainder-has-an-operational}
The scalar root condition in Section 8 separates statistical fluctuation from numerical error. Suppose a sample mean estimates $\\mu$, but an algorithm returns $\\tilde\\mu_n=\\bar X_n+b_n$. For $\\Psi_n(\\mu)=\\bar X_n-\\mu$, its residual is $-b_n$. If $b_n=o(n^{-1/2})$, then $\\sqrt n(\\tilde\\mu_n-\\mu)=\\sqrt n(\\bar X_n-\\mu)+o(1)$ and the usual centred limit survives. If instead $b_n=b/\\sqrt n$ with nonzero fixed $b$, the limit is shifted by $b$. Merely reporting that the residual tends to zero would permit both cases.

The same logic extends to a fixed-dimensional estimating equation. Suppose a consistent selected root $\\hat\\theta_n$ satisfies residual $r_n=o_p(n^{-1/2})$ and an actual expansion

\\[
r_n=\\Psi_n(\\theta_0)+A_n(\\hat\\theta_n-\\theta_0),
\\]

where $A_n\\to A$ in probability and $A$ is invertible. If $\\sqrt n\\,\\Psi_n(\\theta_0)\\Rightarrow N_d(0,B)$, rearranging gives

\\[
\\sqrt n(\\hat\\theta_n-\\theta_0)
\\Rightarrow N_d(0,A^{-1}B A^{-\\mathsf T}).
\\]

There is no general vector intermediate point that must make a matrix derivative equal the required $A_n$. For continuously differentiable equations, one legitimate choice is the integral of the derivative along the segment from $\\theta_0$ to $\\hat\\theta_n$, provided that segment remains inside the parameter domain and the integral converges uniformly enough. Alternatively one can prove the displayed expansion directly. The expansion is a premise to verify, not an entitlement from a root solver.

Under a correctly specified regular likelihood, the score variance and expected negative derivative agree, yielding inverse information. Under misspecification they may differ, giving the sandwich matrix above. A fitted curvature matrix alone does not establish the score variance; the two describe different parts of the expansion. Estimating $A$ and $B$ also needs consistency conditions and a nonsingular limit, as with covariance studentisation.

A practical diagnostic is to compare an algorithm's residual with the sampling scale, while recognising what that comparison omits. A tiny residual can occur at the wrong root, at a spurious local solution, or in a nearly flat direction. Inversion of an ill-conditioned derivative can magnify even a small residual. Existence, root selection, consistency, identification and approximation error must all be checked.

This also explains why the rare-contamination example in Section 12 remains relevant. A shifted expectation alone does not identify a shifted limiting law. The deterministic numerical perturbation just analyzed has an explicit root-scale expansion, whereas the root-scaled rare random perturbation $nB_n$ in that example is not uniformly integrable: for every finite $K$, $E[nB_n1_{\\{nB_n>K\\}}]=1$ whenever $n>K$. Uniform integrability would require these tail expectations to vanish uniformly as $K$ increases. These are different mechanisms and their conclusions should not be interchanged.


An exact normal calculation separates centering from scale. Suppose $T_n=\\mu+(b+\\sigma Z)/\\sqrt n$, with fixed $\\sigma>0$, $Z\\sim N(0,1)$, and a reported scale $c\\sigma$ with $c>0$. For a fixed normal quantile $z>0$, the interval $T_n\\pm zc\\sigma/\\sqrt n$ covers $\\mu$ with probability

\\[
\\Phi(zc-b/\\sigma)-\\Phi(-zc-b/\\sigma).
\\]

This follows by solving $|b+\\sigma Z|\\le zc\\sigma$ for $Z$. It is an exact probability for this constructed model, not an approximation derived from the expectation of an arbitrary estimator.

When $b=0$ and $c=1$, the expression is $2\\Phi(z)-1$. With correct centering but $c<1$, coverage is smaller at every $n$; increasing the sample size does not repair a fixed proportional scale error. With correct scale but $b\\ne0$, coverage is also smaller: by symmetry it depends on $|b|$, and differentiating for positive $b/\\sigma$ gives $\\phi(z+b/\\sigma)-\\phi(z-b/\\sigma)<0$. A wider scale can partly offset a shift numerically, but that coincidence does not validate either component.

Here the root-scale shift is part of the explicitly supplied distribution. For an estimator described only through its expectation, the rare-contamination counterexample still prevents deducing this law from a scaled-bias limit. A coverage diagnosis therefore needs the actual centred distribution and scale behaviour, not just an unbiasedness label or a reported standard error.

<a id="section-999-21-an-exact-normal-local-likelihood-calculation-and-its"></a>
## 21. An exact normal local-likelihood calculation and its boundary {#section-1001-21-an-exact-normal-local-likelihood-calculation-and-its}

<a id="section-1001-worked-example-3-compute-a-local-normal-likelihood-exac"></a>
### Worked example 3: compute a local normal likelihood exactly {#section-1003-worked-example-3-compute-a-local-normal-likelihood-exac}
The general local-likelihood template becomes completely explicit for iid $X_i\\sim N(\\theta,\\sigma^2)$ with known $\\sigma>0$ and $\\theta\\in\\mathbb R$. The MLE is $\\hat\\theta=\\bar X$, one-observation information is $I=1/\\sigma^2$, and $\\Delta_n=\\sqrt n(\\bar X-\\theta_0)/\\sigma^2$ has exactly the law $N(0,I)$ under $\\theta_0$. Completing the square gives, for every fixed real $h$ and every $n$,

\\[
\\ell_n(\\theta_0+h/\\sqrt n)-\\ell_n(\\theta_0)
=h\\Delta_n-\\frac{h^2}{2\\sigma^2}.
\\]

There is no remainder in this model. The local parameter change and score fluctuation balance exactly because the log-likelihood is quadratic.

Under the point null $\\theta=\\theta_0$, the Wald, score and likelihood-ratio statistics from Section 9 all reduce to

\\[
Z_n^2=\\frac{n(\\bar X-\\theta_0)^2}{\\sigma^2},
\\qquad Z_n\\sim N(0,1).
\\]

For the likelihood ratio, subtract the log-likelihood at $\\theta_0$ from that at $\\bar X$; the residual sum-of-squares identity gives this same square. Thus the reference law is exactly $\\chi_1^2$ here. This calculation proves one complete case of the template. It is not a proof of a general likelihood-ratio theorem for every family satisfying a short regularity checklist.

Under the local state $\\theta_n=\\theta_0+a/\\sqrt n$, the standardized variable has exactly the law $N(a/\\sigma,1)$. The squared statistic is the square of that shifted normal. Stating the local sequence distinguishes a fixed nonzero alternative, whose standardized mean diverges, from a shrinking alternative with nontrivial limiting power.

Now keep the same normal observations but constrain $\\theta\\ge0$ and test $\\theta_0=0$. The constrained MLE is $\\max(\\bar X,0)$: the quadratic maximum is either feasible or projected to the boundary. The likelihood-ratio statistic becomes $\\max(Z_n,0)^2$. It has probability one half at zero. For $x>0$, its upper tail is $P(Z_n>\\sqrt x)$, half the upper tail of a $\\chi_1^2$ variable by normal symmetry. Its law is therefore a half point mass at zero plus half a $\\chi_1^2$ law, exactly for every sample size in this bounded example.

The boundary changes the maximization geometry even though the observations remain normal and the unconstrained score is regular. A general boundary theorem is unnecessary for this certificate, and a general rule assigning this mixture to every constrained model would be false. Nuisance parameters, multiple constraints and unidentified directions require their own analysis.

<a id="section-1026-22-finite-sample-accuracy-and-uniformity-require-their-"></a>
## 22. Finite-sample accuracy and uniformity require their own evidence {#section-1028-22-finite-sample-accuracy-and-uniformity-require-their-}
For Bernoulli data, the sample mean is unbiased at every sample size and its exact variance is $p(1-p)/n$. Nevertheless the usual plug-in Wald interval can fail severely. At a sample with zero successes, its estimated variance is zero and its interval collapses to $\\{0\\}$. For every interior $p>0$, that outcome misses the truth. Therefore its coverage cannot exceed $1-(1-p)^n$, independently of what happens on the other outcomes.

This observation already proves a nonuniform failure. Along $p_n=\\lambda/n$ with fixed $\\lambda>0$ and $n>\\lambda$, the probability of zero successes tends to $e^{-\\lambda}$. Hence the limiting upper bound on coverage is $1-e^{-\\lambda}$. For $\\lambda=1$ it is below $2/3$, far from a conventional high-coverage target. At the fixed boundary $p=0$, in contrast, the same collapsed interval covers with probability one. The estimator is unbiased throughout; the problem is estimated scale and lattice shape near a boundary, not a root-$n$ mean bias.

An exact interval or a concentration bound can supply a different guarantee. Because $\\operatorname{Var}(\\hat p)\\le1/(4n)$, Chebyshev gives

\\[
P_p\\!\\left(|\\hat p-p|\\ge\\frac1{2\\sqrt{n\\alpha}}\\right)\\le\\alpha
\\]

for every $p\\in[0,1]$ and fixed $0<\\alpha<1$. Clipping that interval to the parameter space retains coverage because the true $p$ lies there. The result is finite-sample and uniform in $p$, but often wide. It is a fixed-time guarantee; repeated inspection requires the separate sequential argument in the [L4 sequential-inference continuation](../advanced-statistical-inference-reference/multiplicity-sequential-and-selective-inference.md). Uniformity over parameter states and simultaneity over times are different quantifiers.

The reference investigation below uses an even more direct alternative: enumerate the binomial outcomes and sum the probabilities of coverage. It separates centering, true scale, estimated scale, lattice quantiles and boundary regimes. A table of those objects can expose a failure that a single smooth histogram would hide.

Finite tables do not establish asymptotic accuracy at unlisted sample sizes or states. Their role is to test a stated approximation against an exact reference at declared points. Conversely, a pointwise limit theorem does not make such a table unnecessary when the intended use is a small or weakly identified sample. A sound report keeps the theorem, the finite calculation and the use decision visible as distinct parts of the inference argument.

<a id="section-1043-23-si-14-approx-a-complete-finite-binomial-approximatio"></a>
## 23. SI-14-APPROX: a complete finite binomial approximation audit {#section-1045-23-si-14-approx-a-complete-finite-binomial-approximatio}
This is one public instantiation of the open investigation in Section 15, preserving its original prompt and choices. Observe iid Bernoulli$(p)$ trials and estimate $p$ by $\\hat p=S/n$. The LLN target is $p$. For each fixed interior $p$, the CLT scale is $\\sqrt{p(1-p)}$; the identity transformation has derivative one, so its delta-method transformation is unchanged. At $p=0$ the law is degenerate and the positive-variance CLT does not apply.

Use the explicit Wald rule

\\[
I(S)=\\left[\\hat p-2\\sqrt{\\hat p(1-\\hat p)/n},
\\hat p+2\\sqrt{\\hat p(1-\\hat p)/n}\\right]\\cap[0,1].
\\]

Its normal-reference target is $2\\Phi(2)-1$, rather than an implicitly rounded 95%. Define the signed median-quantile error as the exact lower median $q_{.5}(\\hat p)=\\inf\\{x:P_p(\\hat p\\le x)\\ge1/2\\}$ minus the Gaussian reference median $p$. Bias is zero throughout. The following is a complete exact numerical alternative to a graphic:

| $p$ | $n$ | bias | exact SD | median-quantile error | exact Wald coverage |
|---|---:|---:|---:|---:|---:|
| 0 | 1 | 0 | 0 | 0 | 1 |
| 0 | 2 | 0 | 0 | 0 | 1 |
| 0 | 3 | 0 | 0 | 0 | 1 |
| 0 | 4 | 0 | 0 | 0 | 1 |
| $1/4$ | 1 | 0 | $\\sqrt3/4$ | $-1/4$ | 0 |
| $1/4$ | 2 | 0 | $\\sqrt6/8$ | $-1/4$ | $3/8$ |
| $1/4$ | 3 | 0 | $1/4$ | $1/12$ | $9/16$ |
| $1/4$ | 4 | 0 | $\\sqrt3/8$ | 0 | $81/128$ |
| $1/2$ | 1 | 0 | $1/2$ | $-1/2$ | 0 |
| $1/2$ | 2 | 0 | $\\sqrt2/4$ | 0 | $1/2$ |
| $1/2$ | 3 | 0 | $\\sqrt3/6$ | $-1/6$ | $3/4$ |
| $1/2$ | 4 | 0 | $1/4$ | 0 | $7/8$ |

Here is a hand-reproduction certificate. For each row, assign outcome $k$ the mass $\\binom nkp^k(1-p)^{n-k}$ and test the displayed interval endpoints. At $n=1$, neither endpoint outcome covers an interior state. At $n=2$, only $k=1$ covers either listed interior state. At $n=3$, $k=1,2$ cover both. At $n=4$, $p=1/4$ is covered only for $k=1,2$, whereas $p=1/2$ is covered for $k=1,2,3$. Thus their coverage probabilities are respectively $0$, $2p(1-p)$, $3p(1-p)$, and the indicated sums at $n=4$. For example, at $(n,p)=(4,1/4)$ the masses of $k=1,2$ are $108/256$ and $54/256$, giving $81/128$.

For the median column, accumulate the same masses until reaching one half. At $p=1/4$, the first crossing occurs at $k=0,0,1,1$ for the four sample sizes. At $p=1/2$, it occurs at $k=0,1,1,2$. Dividing by $n$ and subtracting $p$ gives all listed errors. The negative lower median at some symmetric binomial laws reflects the declared lower-quantile convention, not estimator bias.

For a changed case, keep the estimator and interval but set $p=1/10$. Bias remains zero, exact SD is $3/(10\\sqrt n)$ and the lower median remains zero for all four sizes because $(9/10)^4>1/2$. Median-quantile error is therefore $-1/10$. Covering outcomes are none at $n=1$, only $k=1$ at $n=2,3$, and $k=1,2$ at $n=4$. Coverage is respectively $0$, $9/50$, $243/1000$ and $1701/5000$. At $n=3$, the interval for $k=2$ starts at $(6-2\\sqrt6)/9>1/10$, explaining its exclusion.

A complete reconstruction checks five things separately: the experiment and quantile convention; the LLN/CLT domains; the exact mass/SD/quantile ledger; the coverage sum for each sample size and regime; and a diagnosis that distinguishes zero estimated scale and lattice effects from bias. This reference uses exact finite sums and no simulation, seeds, software run or empirical output. Its small sizes are deliberately challenging, and it does not certify the approximation at large sizes or other states.

<a id="section-1078-24-elaboration-of-the-original-logarithm-domain-key"></a>
## 24. Elaboration of the original logarithm-domain key {#section-1080-24-elaboration-of-the-original-logarithm-domain-key}
<a id="section-1079-original-exercise-3-define-the-logarithm-on-exceptional"></a>
### Original Exercise 3: define the logarithm on exceptional samples {#section-1081-original-exercise-3-define-the-logarithm-on-exceptional}

From $T_n\\to\\theta>0$ in probability, $P(T_n\\le0)\\le P(|T_n-\\theta|\\ge\\theta)\\to0$. It need not follow that every realized $T_n$ is positive or that positivity eventually holds almost surely. Define $L_n=\\log T_n$ when $T_n>0$ and $L_n=0$ otherwise. For every $\\varepsilon>0$, continuity of log at $\\theta$ provides a neighborhood on which $|\\log t-\\log\\theta|<\\varepsilon$; the probability of leaving that neighborhood tends to zero. Thus $L_n\\to\\log\\theta$ in probability. Any finite extension on the nonpositive event has the same conclusion because that event's probability vanishes. This supplies the formal real-valued domain completion behind the original key without changing its payload.

<a id="section-1083-25-optional-practice-extensions-for-covariance-and-drif"></a>
## 27. Probability imports and limits of the asymptotic extension {#section-1149-27-probability-imports-and-limits-of-the-asymptotic-ext}
The projection characterization used in Section 17 is the fixed-dimensional Cramér–Wold criterion: convergence of every linear projection to the corresponding projection of a specified random vector implies joint weak convergence. A verified author-hosted statement is Dmitriy (Tim) Kunisky, *Lecture Notes: Probability Theory II*, Spring 2026, §2.3.1, Corollary 2.3.3, printed page 25, [author's notes](https://www.kunisky.com/static/teaching/2026spring-prob2/prob2-notes-2026.pdf), inspected 4 November 2026. Scalar CLT, weak law, Slutsky and stochastic-order dependencies remain those developed in this chapter; covariance consistency is proved here under the explicitly stronger fourth-moment condition. Normal linear transformations and chi-square sums use their standard probability definitions. The local normal and constrained-normal likelihood calculations are exact certificates, not an import of a general LAN, Wilks, boundary or high-dimensional theorem.


<a id="section-1151-sources"></a>

<a id="section-568-summary"></a>
## Summary {#section-570-summary}

<a id="section-884-16-summary-and-forward-route"></a>
The weak law establishes localisation, the CLT supplies a root-sample-size normal shape, Slutsky permits estimated scales, and delta methods propagate limits through smooth maps. Estimating equations reduce many procedures to a derivative and a stochastic score. Boundaries, vanishing derivatives, heavy tails, weak denominators, and drifting states can change rates or limits. The next chapter asks when resampling the observed data consistently estimates these sampling distributions—and gives examples where it cannot.


<a id="section-887-17-a-vector-limit-must-retain-its-covariance"></a>

<a id="section-1157-summary"></a>
Consistency, stochastic order, distributional limits and finite-sample accuracy answer different questions. Delta methods propagate both derivatives and covariance, and studentization requires a consistent positive scale in the directions used. Vanishing derivatives, weak denominators, moving support and drifting boundary states can change rates or defeat a pointwise approximation. State the experiment sequence, remainder condition and target scale before applying a normal approximation.

The main route continues to [Bootstrap, Permutation, and Resampling Logic](bootstrap-permutation-and-resampling-logic.md).

## Exercises {#section-325-14-exercises-with-complete-solutions}

<a id="section-325-1-chebyshev-sample-size"></a>
### 1. Chebyshev sample size {#section-327-1-chebyshev-sample-size}

**Exercise 12.1**

If $Var(X)=9$, find a sufficient $n$ for $P(|\\bar{X}-\\mu |\\ge 0.5)\\le 0.04$ using Chebyshev.

<details>
<summary>Hint 1</summary>

Apply Chebyshev to the average, whose variance is $9/n$.

</details>

<details>
<summary>Hint 2</summary>

Solve $9/(0.25n)\\le0.04$.

</details>

<details>
<summary>Solution</summary>

**Solution.** The bound is $9/[n(0.5)^{2}]=36/n$. Require $36/n\\le 0.04$, giving $n\\ge 900$.

</details>

<a id="section-352-2-consistency-of-a-shifted-mean"></a>
### 2. Consistency of a shifted mean {#section-354-2-consistency-of-a-shifted-mean}

**Exercise 12.2**

If $\\bar{X}_n\\to \\mu $ in probability and $a_n\\to 0$, prove $\\bar{X}_n+a_n\\to \\mu $.

<details>
<summary>Hint 1</summary>

Separate deterministic and random errors using the triangle inequality.

</details>

<details>
<summary>Hint 2</summary>

Eventually the deterministic shift is below half any fixed tolerance.

</details>

<details>
<summary>Solution</summary>

**Solution.** For any $\\varepsilon >0$, eventually $|a_n|<\\varepsilon /2$. Then

$P(|\\bar{X}_n+a_n-\\mu |>\\varepsilon )\\le P(|\\bar{X}_n-\\mu |>\\varepsilon /2)\\to 0$.

</details>

<a id="section-381-3-continuous-plug-in"></a>
### 3. Continuous plug-in {#section-383-3-continuous-plug-in}

**Exercise 12.3**

If $T_n\\to \\theta >0$ in probability, prove $\\log T_n\\to \\log\\theta $.

<details>
<summary>Hint 1</summary>

The positive limiting point is an interior point of the logarithm's domain.

</details>

<details>
<summary>Hint 2</summary>

Use continuous mapping there and define an arbitrary extension on vanishing-probability nonpositive samples.

</details>

<details>
<summary>Solution</summary>

**Solution.** Logarithm is continuous at every positive $\\theta $. The continuous mapping theorem gives the result. Positivity with high probability follows because $T_n$ converges to an interior positive value.


Domain qualification: on exceptional samples where the logarithm is undefined, use the arbitrary real-valued extension specified in the retained elaboration of original Exercise 3. Its probability vanishes, so the limit is unchanged.

</details>

<a id="section-412-4-distinguish-o-p-and-o-p"></a>
### 4. Distinguish $o_p$ and $O_p$ {#section-414-4-distinguish-o-p-and-o-p}

**Exercise 12.4**

If $\\sqrt{n}(T_n-\\theta )\\Rightarrow Normal(0,1)$, state two stochastic-order conclusions.

<details>
<summary>Hint 1</summary>

A convergent distributional sequence is bounded in probability.

</details>

<details>
<summary>Hint 2</summary>

The nondegenerate rescaled limit gives an $O_p(n^{-1/2})$ rate but generally not a smaller one.

</details>

<details>
<summary>Solution</summary>

**Solution.** Convergence in distribution implies boundedness in probability, so $T_n-\\theta =O_p(n^{-1/2})$. It also implies consistency, hence $T_n-\\theta =o_p(1)$. Generally it is not $o_p(n^{-1/2})$ because the rescaled limit is nondegenerate.

</details>

<a id="section-439-5-product-order"></a>
### 5. Product order {#section-441-5-product-order}

**Exercise 12.5**

If $A_n=o_p(1)$ and $B_n=O_p(1)$, what is $A_nB_n$?

<details>
<summary>Hint 1</summary>

Bound $B_n$ by a fixed large constant outside a small-probability event.

</details>

<details>
<summary>Hint 2</summary>

On the bounded event, the product error is controlled by that constant times $|A_n|$.

</details>

<details>
<summary>Solution</summary>

**Solution.** The product is $o_p(1)$. Bound $B_n$ with high probability by a finite constant and use convergence of $A_n$ to zero on that event.

</details>

<a id="section-466-6-standardised-mean"></a>
### 6. Standardised mean {#section-468-6-standardised-mean}

**Exercise 12.6**

If $\\mu =5$, $\\sigma =2$, and $n=100$, what normal approximation describes $\\bar{X}$?

<details>
<summary>Hint 1</summary>

The sample-mean variance is $\\sigma^2/n$.

</details>

<details>
<summary>Hint 2</summary>

Use mean five and variance four divided by one hundred; this is an approximation under the stated iid theorem.

</details>

<details>
<summary>Solution</summary>

**Solution.** The CLT approximation is $Normal(5,2^{2}/100)=Normal(5,0.04)$, with standard deviation $0.2$, assuming iid finite-variance sampling and adequate finite-sample accuracy.

</details>

<a id="section-493-7-studentisation"></a>
### 7. Studentisation {#section-495-7-studentisation}

**Exercise 12.7**

If $\\sqrt{n}(\\bar{X}-\\mu )/\\sigma \\Rightarrow N(0,1)$ and $S/\\sigma \\to 1$ in probability, derive the studentised limit.

<details>
<summary>Hint 1</summary>

Factor the studentized statistic into a known-scale statistic and a scale ratio.

</details>

<details>
<summary>Hint 2</summary>

The reciprocal scale ratio converges in probability to one, so Slutsky applies.

</details>

<details>
<summary>Solution</summary>

**Solution.** Write

$\\sqrt{n}(\\bar{X}-\\mu )/S=[\\sqrt{n}(\\bar{X}-\\mu )/\\sigma ]/(S/\\sigma )$.

The numerator converges to standard normal and the denominator to one, so Slutsky gives $N(0,1)$.

</details>

<a id="section-524-8-delta-method-for-an-exponential"></a>
### 8. Delta method for an exponential {#section-526-8-delta-method-for-an-exponential}

**Exercise 12.8**

If $\\sqrt{n}(T_n-\\theta )\\Rightarrow N(0,v)$, find the limit for $e^{T_n}$.

<details>
<summary>Hint 1</summary>

Differentiate the exponential at the limiting parameter.

</details>

<details>
<summary>Hint 2</summary>

Multiply the limiting variance by $e^{2\\theta}$.

</details>

<details>
<summary>Solution</summary>

**Solution.** With $g'(\\theta )=e^\\theta $, the delta method gives

$\\sqrt{n}[e^{T_n}-e^\\theta ]\\Rightarrow N(0,e^{2\\theta }v)$.

</details>

<a id="section-553-9-delta-method-for-a-square-away-from-zero"></a>
### 9. Delta method for a square away from zero {#section-555-9-delta-method-for-a-square-away-from-zero}

**Exercise 12.9**

For $g(\\theta )=\\theta ^{2}$ and $\\theta \\ne 0$, find the asymptotic variance multiplier.

<details>
<summary>Hint 1</summary>

The derivative of the square map is $2\\theta$.

</details>

<details>
<summary>Hint 2</summary>

Square that derivative when transporting the variance.

</details>

<details>
<summary>Solution</summary>

**Solution.** $g'(\\theta )=2\\theta $, so variance $v$ becomes $(2\\theta )^{2}v=4\\theta ^{2}v$.

</details>

<a id="section-580-10-square-at-zero"></a>
### 10. Square at zero {#section-582-10-square-at-zero}

**Exercise 12.10**

Why does the first-order delta method fail to give a useful law at $\\theta =0$?

<details>
<summary>Hint 1</summary>

At zero the first derivative vanishes.

</details>

<details>
<summary>Hint 2</summary>

Square the root-$n$ statistic directly to identify the nondegenerate $n$ scale.

</details>

<details>
<summary>Solution</summary>

**Solution.** The derivative is zero, so the $\\sqrt{n}$-scaled first-order limit is degenerate. The leading term is quadratic and lives on the $n$ scale, yielding a multiple of $Z^{2}$.

</details>

<a id="section-607-11-exponential-rate-standard-error"></a>
### 11. Exponential-rate standard error {#section-609-11-exponential-rate-standard-error}

**Exercise 12.11**

Use the worked limit to give an estimated standard error for $\\hat{\\lambda }=1/\\bar{X}$.

<details>
<summary>Hint 1</summary>

The rate estimator's asymptotic standard deviation is $\\lambda/\\sqrt n$.

</details>

<details>
<summary>Hint 2</summary>

Replace the unknown positive rate by its consistent estimate.

</details>

<details>
<summary>Solution</summary>

**Solution.** The asymptotic variance of $\\hat{\\lambda }$ is $\\lambda ^{2}/n$. Replacing $\\lambda $ by the consistent estimator gives estimated standard error $\\hat{\\lambda }/\\sqrt{n}$.

</details>

<a id="section-634-12-bernoulli-logit-variance"></a>
### 12. Bernoulli logit variance {#section-636-12-bernoulli-logit-variance}

**Exercise 12.12**

Derive the asymptotic variance of $\\sqrt{n}[logit(\\hat{p})-logit(p)]$.

<details>
<summary>Hint 1</summary>

Apply the scalar delta method at an interior $0<p<1$.

</details>

<details>
<summary>Hint 2</summary>

The logit derivative is $1/[p(1-p)]$, and the Bernoulli CLT variance is $p(1-p)$.

</details>

<details>
<summary>Solution</summary>

**Solution.** The Bernoulli mean has variance $p(1-p)$. Multiplying by derivative squared $[p(1-p)]^{-2}$ gives $1/[p(1-p)]$.

</details>

<a id="section-661-13-ratio-gradient"></a>
### 13. Ratio gradient {#section-663-13-ratio-gradient}

**Exercise 12.13**

For $g(a,b)=a/b$, compute both partial derivatives.

<details>
<summary>Hint 1</summary>

Differentiate with respect to one coordinate at a time.

</details>

<details>
<summary>Hint 2</summary>

Keep the denominator nonzero; the gradient is $(1/b,-a/b^2)$.

</details>

<details>
<summary>Solution</summary>

**Solution.** $\\partial g/\\partial a=1/b$ and $\\partial g/\\partial b=-a/b^{2}$, evaluated at the population means for the delta method.

</details>

<a id="section-688-14-covariance-in-a-ratio"></a>
### 14. Covariance in a ratio {#section-690-14-covariance-in-a-ratio}

**Exercise 12.14**

Why may using only the two marginal variances give the wrong ratio standard error?

<details>
<summary>Hint 1</summary>

Expand the covariance quadratic form for a two-component gradient.

</details>

<details>
<summary>Hint 2</summary>

There is a cross term twice the product of the two gradient components times the covariance.

</details>

<details>
<summary>Solution</summary>

**Solution.** The quadratic form $\\nabla g^{\\mathsf T}\\Sigma \\nabla g$ includes twice the product of gradient components times $Cov(X,Y)$. Omitting it incorrectly treats paired sample means as independent.

</details>

<a id="section-715-15-mean-as-an-estimating-equation"></a>
### 15. Mean as an estimating equation {#section-717-15-mean-as-an-estimating-equation}

**Exercise 12.15**

For $\\Psi _n(\\theta )=\\bar{X}-\\theta $, identify $A$ and $B$ in the root expansion.

<details>
<summary>Hint 1</summary>

Compare the empirical equation's derivative with its centred fluctuation.

</details>

<details>
<summary>Hint 2</summary>

The derivative is minus one and the CLT variance of the mean fluctuation is $\\sigma^2$.

</details>

<details>
<summary>Solution</summary>

**Solution.** The derivative is exactly $-1$, so $A=-1$. The CLT variance of $\\sqrt{n}\\Psi _n(\\mu )=\\sqrt{n}(\\bar{X}-\\mu )$ is $B=\\sigma ^{2}$; hence root variance is $B/A^{2}=\\sigma ^{2}$.

</details>

<a id="section-742-16-wald-half-width"></a>
### 16. Wald half-width {#section-744-16-wald-half-width}

**Exercise 12.16**

If estimated asymptotic scale is $\\hat{s}=3$, $n=144$, and $z_{0.975}=1.96$, find the half-width.

<details>
<summary>Hint 1</summary>

Use estimated scale divided by $\\sqrt n$.

</details>

<details>
<summary>Hint 2</summary>

Multiply $3/12$ by the stated normal quantile.

</details>

<details>
<summary>Solution</summary>

**Solution.** It is $1.96(3)/12=0.49$.

</details>

<a id="section-769-17-bias-at-root-n-scale"></a>
### 17. Bias at root-n scale {#section-771-17-bias-at-root-n-scale}

**Exercise 12.17**

If $\\sqrt{n}(T_n-\\tau )\\Rightarrow N(b,v)$ with $b\\ne 0$, is the usual zero-centred Wald approximation correct?

<details>
<summary>Hint 1</summary>

Inspect the centre of the limiting error law.

</details>

<details>
<summary>Hint 2</summary>

A nonzero root-$n$ bias changes the coverage of an interval calibrated to a centred normal law.

</details>

<details>
<summary>Solution</summary>

**Solution.** No. The limiting error is shifted by $b$; intervals calibrated as though the limit had mean zero generally have altered coverage.

</details>

<a id="section-796-18-uniform-maximum-rate"></a>
### 18. Uniform maximum rate {#section-798-18-uniform-maximum-rate}

**Exercise 12.18**

What is the limiting survival function of $n(\\theta -M_n)/\\theta $?

<details>
<summary>Hint 1</summary>

Write the event that all observations lie below the moving cutoff.

</details>

<details>
<summary>Hint 2</summary>

Its probability has the form $(1-t/n)^n$ for fixed nonnegative $t$ and sufficiently large $n$.

</details>

<details>
<summary>Solution</summary>

**Solution.** For $t\\ge 0$, it is $e^{-t}$, the survival function of an $Exponential(1)$ variable. The derivation uses $(1-t/n)^n\\to e^{-t}$.

</details>

<a id="section-823-19-infinite-variance-warning"></a>
### 19. Infinite variance warning {#section-825-19-infinite-variance-warning}

**Exercise 12.19**

Does iid sampling alone justify the displayed normal CLT for a sample mean?

<details>
<summary>Hint 1</summary>

List the iid CLT's moment conditions.

</details>

<details>
<summary>Hint 2</summary>

Independence and identical distribution do not imply a finite positive variance.

</details>

<details>
<summary>Solution</summary>

**Solution.** No. The theorem stated here also requires a finite, positive variance. Heavy-tailed iid laws with infinite variance can have nonnormal limits and different scaling.

</details>

<a id="section-850-20-pointwise-versus-drifting-states"></a>
### 20. Pointwise versus drifting states {#section-852-20-pointwise-versus-drifting-states}

**Exercise 12.20**

Why does a theorem for every fixed $\\theta $ not automatically cover a sequence $\\theta _n$ approaching a boundary?

<details>
<summary>Hint 1</summary>

The parameter changes along this new sequence of experiments.

</details>

<details>
<summary>Hint 2</summary>

A fixed-state theorem supplies no uniform bound on its approximation error near a boundary.

</details>

<details>
<summary>Solution</summary>

**Solution.** The approximation error and required sample size may depend on $\\theta $ and deteriorate near the boundary. A drifting sequence changes state with $n$; controlling it requires a uniform theorem or direct local analysis.

</details>


<a id="section-878-15-investigation-finite-sample-approximation-audit"></a>

<a id="section-1085-25-optional-practice-extensions-for-covariance-and-drif"></a>
### 21. SI-14-E21. The covariance term changes a ratio uncertainty {#section-1086-si-14-e21-the-covariance-term-changes-a-ratio-uncertain}

**Exercise 12.21**

Use the paired model $X=2Y+\\varepsilon$ in Section 19. Derive its covariance matrix and the root-$n$ variance of $\\bar X/\\bar Y$ at $(E[X],E[Y])=(2,1)$. Compare with the result of incorrectly omitting covariance.


<details>
<summary>Hint 1</summary>

Compute both the covariance and the two marginal variances from $X=2Y+\\varepsilon$.

</details>

<details>
<summary>Hint 2</summary>

Apply gradient $(1,-2)$ to the full matrix; compare $5+4-8$ with the covariance-omitting result.

</details>


<a id="section-1107-si-14-e22-zero-successes-obstruct-uniform-wald-coverage"></a>
### 22. SI-14-E22. Zero successes obstruct uniform Wald coverage {#section-1109-si-14-e22-zero-successes-obstruct-uniform-wald-coverage}

**Exercise 12.22**

For Bernoulli $p_n=\\lambda/n$ with fixed $\\lambda>0$ and $n>\\lambda$, show that the plug-in Wald interval misses $p_n$ whenever $S=0$. Derive an asymptotic upper bound on its coverage and contrast it with the fixed state $p=0$.


<details>
<summary>Hint 1</summary>

On the zero-success event the plug-in interval is the singleton zero.

</details>

<details>
<summary>Hint 2</summary>

Its failure probability is at least $(1-\\lambda/n)^n$, which tends to $e^{-\\lambda}$.

</details>


<a id="section-1130-26-solutions-to-the-covariance-and-drifting-state-exten"></a>

<a id="section-1208-solutions"></a>
## Solutions {#section-1210-solutions}

<a id="section-1132-26-solutions-to-the-covariance-and-drifting-state-exten"></a>
<details>
<summary>Solution</summary>

<a id="section-1134-si-14-e21-the-covariance-term-changes-a-ratio-uncertain"></a>
### SI-14-E21. The covariance term changes a ratio uncertainty — solution {#section-1136-si-14-e21-the-covariance-term-changes-a-ratio-uncertain}

Independence gives $\\operatorname{Var}(X)=4\\operatorname{Var}(Y)+\\operatorname{Var}(\\varepsilon)=5$ and $\\operatorname{Cov}(X,Y)=2$. Thus $\\Sigma=\\left(\\begin{smallmatrix}5&2\\\\2&1\\end{smallmatrix}\\right)$. The gradient of $a/b$ at $(2,1)$ is $(1,-2)^\\mathsf T$. Its covariance quadratic form is $5+4-8=1$. Omitting covariance gives $5+4=9$. The same correct result follows from $\\bar X/\\bar Y-2=\\bar\\varepsilon/\\bar Y$, since $\\bar Y\\to1$ and $\\sqrt n\\bar\\varepsilon\\Rightarrow N(0,1)$.

</details>
<details>
<summary>Solution</summary>

<a id="section-1142-si-14-e22-zero-successes-obstruct-uniform-wald-coverage"></a>
### SI-14-E22. Zero successes obstruct uniform Wald coverage — solution {#section-1144-si-14-e22-zero-successes-obstruct-uniform-wald-coverage}

On $S=0$, both the estimate and its plug-in standard error are zero, so the interval is $\\{0\\}$ and misses the positive $p_n$. Its coverage is at most $1-P_{p_n}(S=0)=1-(1-\\lambda/n)^n$, whose limit is $1-e^{-\\lambda}$. Thus the coverage limsup is at most that value. At fixed $p=0$, all observations are zero almost surely and the interval covers with probability one. Pointwise behaviour at the boundary and an interior drifting sequence therefore differ. Neither the unbiasedness of $\\hat p$ nor increasing $n$ supplies uniform high coverage.

</details>
<a id="section-1147-27-probability-imports-and-limits-of-the-asymptotic-ext"></a>

## Sources {#section-1153-sources}

All earlier references, exact theorem locators, probability-model qualifications and source notes in this chapter remain part of the exposition. The book [reference guide](back-matter/references-and-attribution-guide.md) records the primary source map.

<a id="section-1155-summary"></a>
`;export{e as default};