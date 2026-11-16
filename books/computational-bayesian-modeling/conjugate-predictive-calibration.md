
# Conjugate Prediction and Calibration

Preparation is the primary [Bayesian Inference course](#/books/bayesian/course-syllabus), probability with conditional expectation, and the preceding modeling chapter when one is listed. Computational algorithms continue in [MCMC Volume 1](#/books/mcmc/01-probability-computation).

This chapter continues [Conjugate Posterior Benchmarks](conjugate-posterior-benchmarks.md), retaining its notation, model and observation protocol. Read that treatment before importing a displayed formula whose parameters were defined there.

## Fixed-kernel Gaussian-process regression is exactly Gaussian

A Gaussian-process prior implies a joint Gaussian law for any finite collection of function values. With fixed mean and kernel hyperparameters, let the training vector be $f\sim N(m,K)$ and observations satisfy $y\mid f\sim N(f,\sigma^2I)$ with known $\sigma^2>0$. For the density-completion argument, take $K$ positive definite. Multiplying these two Gaussian densities gives
$$
\Sigma_f=(K^{-1}+\sigma^{-2}I)^{-1},\qquad
m_f=\Sigma_f(K^{-1}m+\sigma^{-2}y).
$$
Thus $f\mid y$ is exactly Gaussian. This is a conjugate case, directly refuting a blanket claim that Gaussian processes require approximate inference.

Equivalent forms are
$$
m_f=m+K(K+\sigma^2I)^{-1}(y-m),\qquad
\Sigma_f=K-K(K+\sigma^2I)^{-1}K.
$$
The matrix $K+\sigma^2I$ is positive definite. These formulas also describe conditioning of a Gaussian measure when $K$ is only positive semidefinite; the posterior may then be supported on a lower-dimensional subspace rather than possess an ordinary full-dimensional density. That is the reference-measure distinction in [the observation-law chapter](generative-stories-observation-laws.md).

For test values with prior covariance $K_{**}$ and training-to-test covariance $K_*$, the conditional mean and covariance are
$$
m_*+K_*^\mathsf T(K+\sigma^2I)^{-1}(y-m),\qquad
K_{**}-K_*^\mathsf T(K+\sigma^2I)^{-1}K_*.
$$
A noisy future observation adds its observation-noise variance to the latter. Function uncertainty and future observation uncertainty should therefore be named separately, as in the scalar normal benchmark.

The same joint calculation gives exact marginal likelihood $y\sim N(m,K+\sigma^2I)$. It involves a quadratic solve and a log determinant. A numerical implementation should solve the positive-definite system, for example through a Cholesky factorization, rather than explicitly form an inverse merely because the mathematical formula uses one. Dense factorization has cubic arithmetic cost in the training size and quadratic storage; exact conditioning does not mean constant-cost computation.

The conditioning formulas and their fixed-hyperparameter domain are documented in [Rasmussen–Williams, §2.2, equations 2.22–2.24](https://gaussianprocess.org/gpml/chapters/RW2.pdf). The derivation above establishes the conjugate finite-dimensional density case; the process interpretation imports the usual Gaussian conditioning construction.

A non-Gaussian observation likelihood generally breaks this simple Gaussian update. Integrating over uncertain kernel or noise hyperparameters also requires separate analysis: conditional Gaussian formulas can remain available while the marginal posterior is a nontrivial mixture. Some extended models retain special analytic structure, so there is no universal rule that every departure must use a particular approximate algorithm. The complete likelihood-prior pair and the quantity being integrated determine the computational problem.



## Finite allocation mixtures retain an exact but expensive expansion

For two Poisson components, introduce labels $Z_i\in\{1,2\}$ with $P(Z_i=1\mid w)=w$, and let $Y_i\mid Z_i=k,\lambda_k\sim\operatorname{Poisson}(\lambda_k)$. Give independent proper priors $w\sim\operatorname{Beta}(c,d)$ and $\lambda_k\sim\operatorname{Gamma}(a_k,b_k)$, with all hyperparameters positive.

For a fixed allocation vector $z$, let $n_k$ be its component sizes and $S_k$ the assigned count sums. The conditional posterior factors into Beta$(c+n_1,d+n_2)$ and independent Gamma$(a_k+S_k,b_k+n_k)$ laws. The integrated weight for that allocation is proportional to
$$
W_z=
\frac{B(c+n_1,d+n_2)}{B(c,d)}
\prod_{k=1}^2
\frac{b_k^{a_k}\Gamma(a_k+S_k)}
{\Gamma(a_k)(b_k+n_k)^{a_k+S_k}}.
$$
The common factor $\prod_i1/y_i!$ cancels when these weights are normalized, but must be restored for the observed-data evidence.

Summing over all $2^n$ allocation vectors gives the exact marginal posterior as a finite mixture of those conditional conjugate posteriors, with weights $W_z/\sum_{z'}W_{z'}$. The model therefore loses a single simple product-conjugate form, not every closed finite expression. Exhaustive enumeration can be computationally prohibitive even though the algebra is exact.

The label full conditional follows from the two competing joint paths:
$$
P(Z_i=1\mid y_i,w,\lambda_1,\lambda_2)
=\frac{w e^{-\lambda_1}\lambda_1^{y_i}}
{w e^{-\lambda_1}\lambda_1^{y_i}
 +(1-w)e^{-\lambda_2}\lambda_2^{y_i}}.
$$
The factorial cancels, and stable log-sum-exp evaluation avoids underflow. Alternating these label draws with the conjugate parameter updates gives a Gibbs construction. Its invariant target is justified by the same conditional-update argument, while its mixing requires separate assessment.

When component priors are identical, interchanging the two labels can leave the observed model unchanged. The resulting symmetric posterior modes are a model-identification issue, not automatically a coding bug. A component-specific posterior mean can be hard to interpret if the sampler mixes labels or remains near only one labeling. Predictive quantities invariant under relabeling answer a different question.

The mixture example gives a useful boundary for the word “exact.” The finite sum is exact symbolically, the enumeration cost grows exponentially with $n$, and a numerical implementation still needs stable summation. Conditional conjugacy is exact locally, but it does not establish global exploration. Approximate algorithms become useful because of those computational costs, not because a finite allocation identity has ceased to exist.

## A four-allocation ledger makes mixture inference concrete

Apply the preceding finite-sum formula to the ordered observations $y=(0,1)$. Use $w\sim\operatorname{Beta}(1,1)$ and independent rates $\lambda_1,\lambda_2\sim\operatorname{Gamma}(1,1)$, with shape-rate parameters. Conditional on these parameters, each observation independently selects component 1 with probability $w$ and then draws its Poisson count. All priors are proper. The observations have counting measure on ordered nonnegative-integer pairs; the four allocation vectors are latent possibilities, not four additional datasets.

There are only two observations, so write every allocation rather than hiding an enumeration behind notation. For $z=(z_1,z_2)$, let $n_k$ count observations assigned to component $k$ and $S_k$ sum their observed counts. Integrating $w$ gives
$$
\int_0^1w^{n_1}(1-w)^{n_2}\,dw
=B(n_1+1,n_2+1).
$$
Integrating a rate gives
$$
\int_0^\infty \lambda_k^{S_k}e^{-(n_k+1)\lambda_k}\,d\lambda_k
=\frac{\Gamma(S_k+1)}{(n_k+1)^{S_k+1}}.
$$
The prior exponential rate contributes the extra one in $n_k+1$. The data factorials are $0!1!=1$, so no additional factor changes these particular values.

The resulting unnormalized allocation weight is the product of those three integrals. If both observations use component 1, then $(n_1,S_1)=(2,1)$ and $(n_2,S_2)=(0,0)$. The beta integral is $B(3,1)=1/3$, the first rate integral is $\Gamma(2)/3^2=1/9$, and the second is one. Thus $W_{11}=1/27$. Interchanging the component labels gives $W_{22}=1/27$.

For $z=(1,2)$, the first component receives the zero and the second receives the one. Here $B(2,2)=1/6$, while the rate integrals are $1/2$ and $1/4$. Hence $W_{12}=1/48$. For $z=(2,1)$ those two rate integrals exchange places, so $W_{21}=1/48$. A zero count still contributes an exposure factor $e^{-\lambda_k}$; it must not be treated as though the observation were absent.

Summing the four weights gives the ordered-data evidence:
$$
p(0,1)=\frac2{27}+\frac2{48}
=\frac{25}{216}.
$$
Divide each weight by this positive total to obtain the complete posterior ledger. Within each row, the displayed three parameter laws are independent conditional on that allocation and the data.

| Allocation $z$ | Posterior weight | Law of $w$ | Law of $\lambda_1$ | Law of $\lambda_2$ |
|---|---:|---|---|---|
| $(1,1)$ | $8/25$ | $\operatorname{Beta}(3,1)$ | $\operatorname{Gamma}(2,3)$ | $\operatorname{Gamma}(1,1)$ |
| $(1,2)$ | $9/50$ | $\operatorname{Beta}(2,2)$ | $\operatorname{Gamma}(1,2)$ | $\operatorname{Gamma}(2,2)$ |
| $(2,1)$ | $9/50$ | $\operatorname{Beta}(2,2)$ | $\operatorname{Gamma}(2,2)$ | $\operatorname{Gamma}(1,2)$ |
| $(2,2)$ | $8/25$ | $\operatorname{Beta}(1,3)$ | $\operatorname{Gamma}(1,1)$ | $\operatorname{Gamma}(2,3)$ |

The weights sum to one. A component with no allocated observations retains its original rate prior, as the first and last rows show. This is a conditional statement: in the overall posterior neither named component is certainly unused. Its marginal rate law is a mixture across rows. Nor should an empty component be removed from the predictive distribution: a future observation can still select it with the posterior mixing weight.

The ledger gives exact marginal quantities without sampling. For example,
$$
E(\lambda_1\mid y)
=\frac8{25}\frac23+\frac9{50}\frac12+
\frac9{50}\cdot1+\frac8{25}\cdot1
=\frac{241}{300}.
$$
The same mean holds for $\lambda_2$ by label symmetry, and $E(w\mid y)=1/2$. Neither fact proves that the two component rates are equal in individual posterior draws. The label-specific marginals are identical because renaming components preserves the joint prior and likelihood.

A future count has conditional mean $w\lambda_1+(1-w)\lambda_2$. Compute its posterior expectation within each row before averaging. In the first row it is $(3/4)(2/3)+(1/4)(1)=3/4$. In the second it is $(1/2)(1/2)+(1/2)(1)=3/4$; the remaining rows give the same result. Thus
$$
E(\tilde Y\mid y)=3/4.
$$
Multiplying marginal means instead would give $241/300$, which differs from $3/4$. The parameter laws factor within each allocation row, but not after the allocation is integrated out. This small example shows exactly where posterior dependence enters a predictive calculation.

The predictive zero probability is another independent check. For a shape-rate Gamma$(A,B)$ rate, $E(e^{-\lambda})=(B/(B+1))^A$. The first and last rows therefore give $(3/4)(3/4)^2+(1/4)(1/2)=35/64$. The two split-allocation rows give $(1/2)(2/3)+(1/2)(2/3)^2=5/9$. Averaging with their total weights yields
$$
P(\tilde Y=0\mid y)
=\frac{16}{25}\frac{35}{64}+\frac9{25}\frac59
=\frac{11}{20}.
$$
These are exact integrated predictions, not outcomes of a simulated fit. The probability that the original observations share a component is $16/25$; this event is also invariant under renaming the labels. Such quantities remain meaningful when component names are arbitrary.

Finally, changing what was recorded changes the evidence. If the observation is the unordered histogram containing one zero and one one, it comprises the disjoint ordered events $(0,1)$ and $(1,0)$. Exchangeability gives histogram probability $2p(0,1)=25/108$. This extra factor counts observation orders; it is distinct from the Poisson factorials and from the four latent allocation paths. It cancels from the parameter posterior for this same model and event, but individual evidence values must retain the declared observation convention. The worked ledger therefore connects conjugacy, latent-path integration, label symmetry and prediction without relying on an undefined numerical experiment.

## A benchmark audits a declared target, transition and retained trace

The public Beta case fixes the posterior measure and uses a symmetric Gaussian random walk in the logit coordinate. Its target includes the Jacobian, so the acceptance ratio is the difference of the two logit log densities. Rejected proposals leave the state unchanged, and that repeated state must still appear in the retained chain. Storing only accepted moves changes the object being summarized.

Let $a(z)$ be the probability of accepting a move from state $z$, and let the accepted-move transition be the original off-diagonal kernel divided by $a(z)$. Detailed balance implies that its invariant density is proportional to $\pi_z(z)a(z)$ when the normalizing integral is positive. Indeed, integrating $\pi_z(z)a(z)$ against that jump transition gives the reverse accepted flux $\pi_z(w)a(w)$. Unless acceptance probability is constant, the accepted-only subsequence does not have target $\pi_z$.

This explains the deliberate failure case without relying on a plot. The full trace and accepted-only subsequence use the same proposals and uniforms; the omission removes holding times rather than changing the acceptance rule. A different mean, variance or empirical CDF then reflects a changed sampling law, not simply a shorter correct sample.

Monte Carlo uncertainty must be estimand-specific. For a mean, batch means estimate the standard error of the average under an appropriate chain CLT and a reliable long-run variance estimate. For a quantile $q_u$, the corresponding indicator is $\mathbf1\{p\le q_u\}$, and a suitable quantile CLT gives approximate MCSE equal to that indicator-average MCSE divided by the positive density at $q_u$. Posterior standard deviation and a generic ESS cannot substitute for this density factor and the relevant dependence.

The public protocol compares several finite batch sizes and reports the declared primary one. This is a finite diagnostic, not proof that an asymptotic consistency regime has been reached. [Jones–Haran–Caffo–Neath](https://arxiv.org/abs/math/0601446) give sufficient assumptions for batch-means output analysis; those assumptions should not be inferred from a favorable acceptance rate. Persistent large standardized discrepancies warrant investigation of reference calculations, target, stationarity, exploration and MCSE.

An empirical CDF distance is also reported, but ordinary iid Kolmogorov–Smirnov critical values are not applied to correlated draws. The distance describes the retained sample's discrepancy; a valid stochastic test would need its own dependence calibration. Likewise, prior-predictive interval coverage is a joint prior-averaged calibration statement, not a promise of the same coverage at every fixed parameter.

The resulting validation evidence is deliberately scoped. Exact density identities and deterministic reference checks can detect specific implementation errors; repeated finite simulations compare named estimands under fixed settings. Passing them supports that matched case and procedure. It does not prove every target evaluation, acceptance branch or hierarchical exploration problem correct. The original exercise's useful conclusion is this limitation, while the full public cases make the limitation testable rather than rhetorical.

## Three additional conjugate pairs reveal what the data count

The catalog is useful only if its parameters and recorded observations are specified. For independent exponential waiting times $t_i>0$ with rate $\lambda$, the likelihood is $\lambda^n\exp(-\lambda\sum t_i)$. A shape-rate $\operatorname{Gamma}(a,b)$ prior gives shape $a+n$ and rate $b+\sum t_i$. Here the number of observed events changes the shape, while elapsed time changes the rate. This differs from a Poisson sample of unit-exposure counts, where total counts change the shape and number of exposures changes the rate. The censored waiting-time calculation in Chapter 1 combines the two ideas: only observed events contribute powers of $\lambda$, but every unit contributes its recorded exposure.

For a geometric model, explicitly count failures before the first success:
$$
P(T=t\mid p)=p(1-p)^t,\qquad t=0,1,2,\ldots.
$$
For $n$ independent completed waits, $F=\sum t_i$ gives likelihood $p^n(1-p)^F$. A $\operatorname{Beta}(a,b)$ prior becomes $\operatorname{Beta}(a+n,b+F)$. If the recorded variable counts total trials, its support starts at one and $F=\sum t_i-n$. Substituting total trials for failures without that subtraction gives the wrong posterior. If a waiting sequence stops before a success, its censored contribution contains failures but no success factor; it cannot be treated as another completed wait.

For normal observations with known mean $\mu_\star$ and unknown variance $v>0$, use an inverse-gamma prior with density
$$
\frac{\beta^\alpha}{\Gamma(\alpha)}v^{-\alpha-1}e^{-\beta/v}.
$$
The likelihood contributes $v^{-n/2}\exp\{-\sum_i(y_i-\mu_\star)^2/(2v)\}$, so the posterior is $\operatorname{IG}(\alpha+n/2,\beta+\sum_i(y_i-\mu_\star)^2/2)$. The specified mean is essential. Replacing it by the observed sample mean and claiming this is the same model omits uncertainty about a mean that was estimated. A joint proper NIG prior handles an unknown mean by retaining its conditional-normal factor and the associated extra half power in the full variance conditional.

These updates also give immediate boundary diagnostics. A zero exposure in an exponential model cannot be treated as a positive duration, and a Poisson count with exposure zero must be zero almost surely. Gamma and inverse-gamma normalizers require positive updated shape and rate or scale. Proper positive hyperparameters make these updates proper for the specified finite data, but informal zero-hyperparameter limits require a new integrability check. A kernel that resembles a named family is not a substitute for its domain conditions.

## Credible coverage and fixed-state coverage answer different questions

A posterior interval $C(Y)$ with posterior probability $1-\alpha$ has an exact joint prior-predictive coverage identity under the specified proper model:
$$
P\{\theta\in C(Y)\}
=E_Y\{\Pi(\theta\in C(Y)\mid Y)\}=1-\alpha.
$$
The outer probability draws both $\theta$ from its prior and $Y$ from its likelihood. For discrete parameters or an interval rule that only reaches probability at least $1-\alpha$, the corresponding inequality replaces equality. This is a useful calibration experiment, but its averaging distribution is part of the claim. It does not promise $1-\alpha$ frequentist coverage at each fixed parameter value.

The known-variance normal benchmark makes the distinction explicit. Set $\mu_0=0$, let $w=n\tau_0^2/(\sigma^2+n\tau_0^2)$, and suppose $n\ge1$. Then $m=w\bar Y$ and $v=w\sigma^2/n$. At a fixed true value $\mu_\star$, $m-\mu_\star$ is normal with mean $-(1-w)\mu_\star$ and standard deviation $w\sigma/\sqrt n$. An equal-tail posterior interval is $m\pm z\sqrt v$, where $z=\Phi^{-1}(1-\alpha/2)$. Its fixed-state coverage is therefore
$$
\Phi\!\left(\frac{z\sqrt v+(1-w)\mu_\star}{w\sigma/\sqrt n}\right)
-\Phi\!\left(\frac{-z\sqrt v+(1-w)\mu_\star}{w\sigma/\sqrt n}\right).
$$
Strong shrinkage can produce poor coverage at a far-away fixed state while the joint prior-predictive identity remains valid. The formula follows by solving the two interval inequalities for the normal error, so it is a separate exact reference rather than a simulation assertion.

The fixed-state mean-square error is equally informative:
$$
E_{\mu_\star}(m-\mu_\star)^2
=(1-w)^2\mu_\star^2+w^2\sigma^2/n.
$$
The first term is squared shrinkage bias; the second is sampling variance. A favorable posterior standard deviation does not by itself report either of these fixed-state quantities. When benchmarking software, decide whether the experiment checks a conditional posterior distribution, prior-averaged interval calibration, fixed-state repeated-sampling behavior, or a decision risk. They require different replications and references.

## Normalizer calculations need both algebraic and numerical checks

A numerical library's CDF and inverse CDF can check mutual consistency without being independent proofs of a distributional formula. The Beta benchmark supplies a finite polynomial CDF as a second route. Its bisection starts from the proven bracket $[0,1]$ and uses monotonicity of the positive density. After $k$ ideal bisections the bracket width is $2^{-k}$; floating-point stagnation stops further refinement. The reported reference is an approximation to the uniquely defined root, with a deterministic cross-check against the special-function implementation. It is not a mathematically exact decimal quantile.

The Gaussian and NIG normalizers give another complementary audit: integrate a kernel symbolically, then evaluate its parameters using a separately specified density convention. For large arguments, evaluate gamma and beta ratios through log-gamma or log-beta rather than forming factorials and subtracting overflowing products. A stable log normalizer can still lose precision if two large nearly equal log evidences are subtracted. Compare the actual difference against a directly simplified expression when available.

For example, two proper Beta priors on the same recorded count share the same binomial coefficient, so that coefficient cancels algebraically in their Bayes factor. Removing it from each model's reported evidence before stating the observation convention would still be misleading: each individual evidence is then the probability of an ordered sequence rather than the count probability. Computational simplification should follow a declared measure and quantity.

A useful discrepancy report separates deterministic reference disagreement from Monte Carlo disagreement. A failed polynomial-versus-library check precedes any sampler diagnosis. A correct analytic reference followed by an uncertain MCSE estimate calls for investigation of the error estimate and exploration. Only after those distinctions does a repeated finite regression failure direct attention toward a transition or target defect. This order keeps an exact benchmark informative instead of turning a convenient threshold into an unsupported correctness theorem.

## Earlier worked questions

The original question identities, statements and complete answers remain in [the original complete exercise companion](retained-source-conjugacy-as-benchmark.md). The further exercises below supply the present chapter’s staged practice.

## Solutions: evidence conventions and full conditionals

## Solutions: the public Beta target and rejection-state audit

Retain the prior $\operatorname{Beta}(2,5)$, count $s=7$ out of $n=20$, and posterior $\operatorname{Beta}(9,18)$. The reference measure for $p$ is Lebesgue measure on $(0,1)$; for $z=\log(p/(1-p))$ it is Lebesgue measure on $\mathbb R$. The logit target, up to a constant, is $9\log p+18\log(1-p)$. The polynomial CDF and unique quantile roots derived earlier provide the exact mathematical references; reported decimal roots are numerical approximations.

The seven independent logit random-walk runs use Gaussian proposal standard deviations, starting probabilities and seeds as follows:

| Proposal SD | Initial probability | PCG64 seed |
|---:|---:|---:|
| 0.2 | 0.01 | 20260916 |
| 0.2 | 0.99 | 20260917 |
| 0.8 | 0.01 | 20260918 |
| 0.8 | 0.50 | 20260919 |
| 0.8 | 0.99 | 20260920 |
| 2.5 | 0.01 | 20260921 |
| 2.5 | 0.99 | 20260922 |

Each run discards 5,000 transitions and retains 60,000 subsequent states, including repetitions after rejection. There is no adaptation. A proposal consumes one Gaussian draw, one uniform draw and one target evaluation, even when acceptance is certain. Initialization adds one target evaluation: 65,001 target evaluations per run. Warmup and retained acceptance counts are reported separately. These settings specify a reproducible experiment; 5,000 discarded states are not a proof of stationarity.

The estimands are $E(p)=1/3$, $\operatorname{Var}(p)=1/126$, the central second moment about the exact mean, CDF values at the exact .025, .5 and .975 quantiles, and those three quantiles. Nonoverlapping batch sizes 150, 300 and 600 give a sensitivity table for the mean, squared deviation and indicator MCSEs. Size 300 is the declared primary regression estimate. The quantile delta MCSE divides the indicator MCSE at the reference quantile by the reference density there. Its interpretation requires a suitable Markov-chain CLT and adequate batch behavior. Sample variance is reported separately from the central second moment about the known mean.

The historical finite regression criteria are mean error below five primary batch MCSE and maximum quantile absolute error below .012. They are explicit scoped checks, not universal correctness or convergence theorems. Descriptive empirical-CDF distance is returned without iid Kolmogorov-Smirnov critical values. Before sampling, the code checks the polynomial against the special-function CDF within $10^{-12}$ on a declared grid, and bisection roots against its inverse within $10^{-11}$. A deterministic reference disagreement is investigated before interpreting any chain discrepancy.

The deliberate changed case uses proposal SD 2.5, start $p=.5$, seed 20260927, 5,000 discarded transitions and 120,000 retained transitions. It saves the full trace and, from the very same proposals and uniforms, an incorrect accepted-only subsequence. The jump-law derivation above explains why the latter targets a distribution proportional to $\pi(z)a(z)$. The finite expected comparisons are accepted-only CDF distance above 1.5 times the full-trace distance and variance farther from $1/126$. Their truth for these exact seeds is a pending root observation, not asserted here. Failure of a comparison calls for inspecting finite variation and the declared contrast, rather than asserting the jump law equals the target.

The complete computational program remains in the original source companion with its declared model, inputs, random-number settings and numerical limitations.

The audit rubric requires correct target and Jacobian, explicit rejection repetitions, exact input and dependency settings, the seven-run table, estimand-specific MCSEs, deterministic reference checks, and a separately labeled wrong-trace contrast. It also asks the reader to distinguish an exact invariant-law calculation from a finite run and from an assertion about exploration.

## Solutions: executable Beta target benchmark

The literal Python listing below is unexecuted by the authors. Its callable returns the declared bounded result and performs no external I/O.


The complete computational listing remains in the [original source companion](retained-source-conjugacy-as-benchmark.md). Its mathematical assumptions and analytical reference calculations remain part of the present treatment; the listing is supplied source, not executed evidence.

## Solutions: a complete NIG Gibbs and predictive benchmark

Use $y=(5,7,6)$ and the proper joint prior $v\sim\operatorname{IG}(3,2)$, $\mu\mid v\sim\mathcal N(0,v)$ on $\mathbb R\times(0,\infty)$ with respect to $d\mu\,dv$. The inverse-gamma scale convention is the density displayed above. The exact posterior parameters are $(\kappa_n,\mu_n,\alpha_n,\beta_n)=(4,9/2,9/2,33/2)$.

Update $\mu\mid v,y\sim\mathcal N(9/2,v/4)$, then $v\mid\mu,y\sim\operatorname{IG}(5,33/2+2(\mu-9/2)^2)$. Draw the inverse-gamma as its scale divided by an independent unit-scale Gamma of shape 5. Retain the pair after both updates. This defines the actual Gibbs scan; the initial $\mu$ is overwritten by the first normal update, while the initial variance affects that update.

Run four chains with initial pairs $(-5,1),(0,5),(10,25),(15,100)$ and PCG64 seeds 20260986 through 20260989 respectively. Each has 5,000 discarded and 60,000 retained scans. After each chain, a distinct PCG64 generator with seed 100 larger supplies one posterior-predictive normal draw per retained pair. The literal seed offsets prevent predictive draws from altering the Gibbs stream. A chain consumes 65,000 conditional-normal and 65,000 conditional-Gamma draws, plus 60,000 predictive-normal draws, and no Metropolis target evaluations.

The exact variance mean and variance are $33/7$ and $2178/245$. The marginal mean law is Student $t_9$ with location $9/2$ and scale squared $11/12$, hence variance $33/28$. The future-observation law is Student $t_9$ with location $9/2$ and scale squared $55/12$, hence variance $165/28$. Quantiles at .025, .5 and .975 are defined by the corresponding analytic CDFs. SciPy evaluates these numerical references with CDF/quantile consistency tolerance $10^{-10}$; inverse-gamma mean and variance checks have tolerances $10^{-12}$ and $10^{-11}$. Such checks do not turn library evaluations into independent symbolic proofs.

For each chain and each of $\mu,v,\tilde Y$, return the mean, variance, central second moment about the exact mean, quantiles and batch MCSEs at sizes 150, 300 and 600. The declared primary size is 300; the finite regression criterion is error below six estimated MCSE for the mean, central second moment and quantiles using indicator/density delta MCSE. The chosen $\alpha_n=4.5$ gives the fourth moment of $v$, so the squared-variance estimand has finite variance. This moment fact alone is not a proof that a finite batch estimate is adequate or that warmup removed initialization bias.

A changed implementation that incorrectly uses marginal shape $4.5$ instead of full-conditional shape 5 targets another transition; the exact full-conditional formula, not a noisy comparison alone, identifies its defect. Another diagnostic is the predictive variance: comparing predictions to the marginal law of $\mu$ omits observation noise. The supplied code returns the correct analytic references and actual run summaries; it does not fabricate outputs for either deliberately described defect.

The complete computational program remains in the original source companion with its declared model, inputs, random-number settings and numerical limitations.

A complete report preserves the joint-prior convention, distinguishes full and marginal conditionals, records all four starts and both seed streams, identifies which moments are mathematically finite, and reports finite failures without relabeling them proof of a software bug or proof of successful exploration.

## Solutions: executable NIG Gibbs companion

The literal Python listing below is unexecuted by the authors. Its callable returns the declared bounded result and performs no external I/O.


The complete computational listing remains in the [original source companion](retained-source-conjugacy-as-benchmark.md). Its mathematical assumptions and analytical reference calculations remain part of the present treatment; the listing is supplied source, not executed evidence.

## References: exact Gaussian inference and Monte Carlo uncertainty

The fixed-kernel Gaussian-process formulas import the Gaussian conditioning result in Rasmussen and Williams, [Gaussian Processes for Machine Learning, Chapter 2](https://gaussianprocess.org/gpml/chapters/RW2.pdf), equations 2.22–2.24, under the covariance/noise hypotheses stated above. They do not import an approximation claim for all Gaussian processes. For conditions supporting Markov-chain CLTs and batch-means error estimation, see Jones, Haran, Caffo and Neath, [Fixed-Width Output Analysis for Markov Chain Monte Carlo](https://arxiv.org/abs/math/0601446). No such asymptotic result makes a finite MCSE automatically reliable.


## Worked applications

### Worked example 1: shared beta uncertainty

For beta(a,b) success probability, two future Bernoulli outcomes have covariance $\operatorname{Var}(p)$ after integration. Their individual means agree, but they are not marginally independent.

### Worked example 2: a wider normal prediction

Posterior mean uncertainty of variance two and fresh independent error variance three give predictive variance five. Predicting the latent mean instead uses variance two.

### Worked example 3: same posterior kernel, different evidence

Observing an ordered Bernoulli sequence and observing only its total produce proportional parameter kernels but different observation constants. Their posterior can agree while their marginal probabilities describe different events.

## Further exercises

### Exercise 101
<a id="conjugate-predictive-calibration-ex-101"></a>

Give beta-binomial predictive variance for m future trials.

<details>
<summary>Hint 1</summary>

Use total variance.

</details>
<details>
<summary>Hint 2</summary>

Separate binomial and parameter variation.

</details>
<details>
<summary>Solution</summary>

It is $mab(a+b+m)/\{(a+b)^2(a+b+1)\}$. The factor beyond ordinary binomial variance reflects a shared uncertain probability.

</details>

### Exercise 102
<a id="conjugate-predictive-calibration-ex-102"></a>

Find covariance of two future counts sharing a gamma rate.

<details>
<summary>Hint 1</summary>

Conditionally their errors are independent.

</details>
<details>
<summary>Hint 2</summary>

Only the common rate remains.

</details>
<details>
<summary>Solution</summary>

It is $t_1t_2\operatorname{Var}(\lambda)$ when finite. Independent rate draws per count would eliminate that term and change the predictive law.

</details>

### Exercise 103
<a id="conjugate-predictive-calibration-ex-103"></a>

Why does posterior prediction use one common parameter draw?

<details>
<summary>Hint 1</summary>

Replicate the declared hierarchy.

</details>
<details>
<summary>Hint 2</summary>

Rows share unknown quantities.

</details>
<details>
<summary>Solution</summary>

The draw represents one state of the whole model. Redrawing it independently per row breaks shared latent dependence and answers another replication experiment.

</details>

### Exercise 104
<a id="conjugate-predictive-calibration-ex-104"></a>

Distinguish posterior and predictive intervals for a normal mean.

<details>
<summary>Hint 1</summary>

A future observation adds error.

</details>
<details>
<summary>Hint 2</summary>

Use total variance.

</details>
<details>
<summary>Solution</summary>

A posterior interval describes the unknown mean. A predictive interval additionally integrates a new observation error and is wider under the independent Gaussian model.

</details>

### Exercise 105
<a id="conjugate-predictive-calibration-ex-105"></a>

Can one compare evidence values for different observed events directly?

<details>
<summary>Hint 1</summary>

Identify the common data space.

</details>
<details>
<summary>Hint 2</summary>

Constants encode event probabilities.

</details>
<details>
<summary>Solution</summary>

Not as a Bayes factor for one observation without a common observation specification. Ordered data, aggregated counts and selected samples can carry different normalisers.

</details>

### Exercise 106
<a id="conjugate-predictive-calibration-ex-106"></a>

Why can a fixed-n posterior not justify any stopping protocol?

<details>
<summary>Hint 1</summary>

The protocol can contain parameter information.

</details>
<details>
<summary>Hint 2</summary>

Check ignorability.

</details>
<details>
<summary>Solution</summary>

If the stopping mechanism contributes a parameter-dependent observation factor, it belongs in the likelihood. Proportional kernels justify equal updates only under the stated ignorable protocol.

</details>

### Exercise 107
<a id="conjugate-predictive-calibration-ex-107"></a>

How does a gamma-Poisson predictive differ from a plug-in Poisson?

<details>
<summary>Hint 1</summary>

Mix over the posterior rate.

</details>
<details>
<summary>Hint 2</summary>

Variance has an extra term.

</details>
<details>
<summary>Solution</summary>

The mixture is negative-binomial with added rate-uncertainty variance. A plug-in Poisson matches a mean but generally understates the predictive variance.

</details>

### Exercise 108
<a id="conjugate-predictive-calibration-ex-108"></a>

Why does a proper posterior not certify finite squared-loss risk?

<details>
<summary>Hint 1</summary>

A second moment is required.

</details>
<details>
<summary>Hint 2</summary>

Proper tails can be heavy.

</details>
<details>
<summary>Solution</summary>

A probability law can have infinite second moment. Squared-error posterior risk may then be infinite, so a finite mean alone does not justify the usual optimality calculation.

</details>

### Exercise 109
<a id="conjugate-predictive-calibration-ex-109"></a>

What is calibrated by simulation-based calibration under its ideal model?

<details>
<summary>Hint 1</summary>

Average over the prior and sampling law.

</details>
<details>
<summary>Hint 2</summary>

Do not freeze one true parameter.

</details>
<details>
<summary>Solution</summary>

It checks a prior-predictive joint-model property of the computation. It is not a guarantee of frequentist coverage at every fixed parameter or empirical model adequacy.

</details>

### Exercise 110
<a id="conjugate-predictive-calibration-ex-110"></a>

Can a small numerical discrepancy alone distinguish bias from Monte Carlo noise?

<details>
<summary>Hint 1</summary>

Both affect a computed functional.

</details>
<details>
<summary>Hint 2</summary>

Quantify the numerical uncertainty.

</details>
<details>
<summary>Solution</summary>

No. Compare it with an appropriate error analysis and the exact target. A finite discrepancy without uncertainty does not identify its computational mechanism.

</details>

## Summary

Conjugate Prediction and Calibration develops the declared probability model, target and mathematical comparisons in the sections above. Keep support, observation mechanisms, conditional information and numerical approximation distinct. The original complete source remains available as a companion, with all original questions and computational listings preserved.
