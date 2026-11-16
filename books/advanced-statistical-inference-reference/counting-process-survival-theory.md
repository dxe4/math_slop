
# Counting-process Survival Theory

This chapter develops survival analysis through the counting-process framework. This approach unifies the Nelson–Aalen estimator, Kaplan–Meier estimator, and Cox proportional hazards model under martingale theory, making clear what assumptions are needed at each step.

## Counting processes and martingales

For subject $i$, let $T_{i}$ be the event time and $C_{i}$ the censoring time. We observe $\widetilde{T}_{i}=\min(T_{i},C_{i})$ and $\delta_{i}=\mathbf{1}_{\{T_{i}\le C_{i}\}}$. Define:

- **Counting process:** $N_{i}(t)=\mathbf{1}_{\{\widetilde{T}_{i}\le t,\delta_{i}=1\}}$
- **At-risk process:** $Y_{i}(t)=\mathbf{1}_{\{\widetilde{T}_{i}\ge t\}}$

$N_i$ is right-continuous with left limits (c\`{a}dl\`{a}g). With the displayed
endpoint convention, $Y_i(t)=\mathbf 1_{\{\widetilde T_i\ge t\}}$ is
left-continuous with right limits (c\`{a}gl\`{a}d): the subject remains in the
risk set just before and at the observed time, then leaves immediately after.
This predictable version is the one used in the intensity integral. Delayed
entry and ties require equally explicit entry/event endpoint conventions.

Under a *multiplicative intensity model*, the compensator of $N_{i}$ is

$$\Lambda_{i}(t)=\int_{0}^{t}Y_{i}(u)\lambda_{i}(u)\,du,$$

so that

$$M_{i}(t)=N_{i}(t)-\int_{0}^{t}Y_{i}(u)\lambda_{i}(u)\,du$$

is a martingale with respect to an appropriate filtration $\mathcal{F}_{t}$, provided the censoring mechanism is *independent* in the sense that the intensity of $N_{i}$ given the past depends only on the past through the at-risk indicator.

### Theorem 9.1 — Martingale property

Assume $\mathbb{E}[N_{i}(t)]<\infty$ for all $t$, the filtration satisfies the usual conditions, and the multiplicative intensity model holds. Then $M_{i}$ is a mean-zero martingale with predictable quadratic variation

$$\langle M_{i}\rangle(t)=\int_{0}^{t}Y_{i}(u)\lambda_{i}(u)\,du.$$

**Proof under a bounded cumulative intensity.** A compensator means that the count minus its predictable increasing compensator is a local martingale; merely writing an infinitesimal conditional probability does not prove its existence. For an elementary proof on a finite horizon, additionally assume the cumulative intensity is bounded by a deterministic constant. The count jumps at most once, so both the count and its compensator are bounded. Their difference is therefore a square-integrable martingale. Its jumps equal the unit jumps of the count and its pathwise quadratic variation is the count, since the compensator is continuous. Integration by parts gives
$$M_i(t)^2-\Lambda_i(t)=2\int_0^tM_i(u-)\,dM_i(u)+M_i(t).$$
The stochastic integral is a martingale by boundedness on the horizon. Thus the predictable increasing process in the square-martingale decomposition is the compensator, proving the bracket formula. Extension to merely integrable compensators uses stopped stochastic-integral isometry and localization, an imported martingale theorem. It does not follow by treating a differential as an actual Bernoulli random variable. ∎

## Nelson–Aalen and Kaplan–Meier

Let $t_{1}<t_{2}<\dots$ be the distinct observed event times, $d_{j}$ the number of events at $t_{j}$, and $n_{j}$ the number at risk just before $t_{j}$.

The *Nelson–Aalen estimator* of the cumulative hazard is

$$\hat{\Lambda}(t)=\sum_{t_{j}\le t}\frac{d_{j}}{n_{j}}.$$

The *Kaplan–Meier estimator* of the survival function is

$$\hat{S}(t)=\prod_{t_{j}\le t}\Bigl(1-\frac{d_{j}}{n_{j}}\Bigr).$$

For small increments, $-\log\hat{S}(t)\approx\hat{\Lambda}(t)$, but they are not exactly equal. Greenwood's variance estimator for Kaplan–Meier is

$$\widehat{\operatorname{Var}}[\hat{S}(t)]=\hat{S}(t)^{2}\sum_{t_{j}\le t}\frac{d_{j}}{n_{j}(n_{j}-d_{j})},$$

provided $n_{j}>d_{j}$ for all $j$.

Transform-based confidence intervals for $S(t)$, such as the log-log transform, respect the $[0,1]$ bounds better than symmetric Wald intervals.

## Independent censoring

Independent censoring is a statement about preservation of the underlying event intensity after restricting to subjects still uncensored. Let $\mathcal H_{t-}$ contain the recorded covariate and event history, but not future censoring, and let $N_i^T(t)=\mathbf1_{\{T_i\le t\}}$. One useful formulation is

$$\lim_{dt\downarrow0}\frac{\mathbb P(t\le T_i<t+dt\mid T_i\ge t,C_i\ge t,\mathcal H_{t-})}{dt}
=\lim_{dt\downarrow0}\frac{\mathbb P(t\le T_i<t+dt\mid T_i\ge t,\mathcal H_{t-})}{dt}.$$

Thus learning that a subject has remained uncensored through $t$ does not alter the event hazard once the declared history is held fixed. Writing an equality that conditions again on a risk event already encoded in the observed filtration would not express this restriction.

In an unconditional analysis with no additional history or covariate conditioning, marginal independence of $T_i$ and $C_i$ is sufficient. In a conditional analysis it need not remain sufficient after conditioning—conditioning can itself induce dependence—so the hazard-preservation condition must hold given the actual history used. Conversely, adequate measured covariates can make that conditional condition plausible even when event and censoring times are marginally associated.

Inverse-probability-of-censoring weighting models the censoring survival instead and requires positivity: $\mathbb{P}(C_{i}>t\mid X_{i})>0$ for all $t$ in the support of $T_{i}$.

## Cox proportional hazards

For intensity $Y_{i}(t)\lambda_{0}(t)\exp(x_{i}^{T}\beta)$ with unspecified baseline hazard $\lambda_{0}(t)$ and no tied event times, the *partial likelihood* is

$$L_{p}(\beta)=\prod_{i:\delta_{i}=1}\frac{\exp(x_{i}^{T}\beta)}{\sum_{j\in R(\widetilde{T}_{i})}\exp(x_{j}^{T}\beta)},$$

where $R(t)=\{j:Y_{j}(t)=1\}$ is the risk set at time $t$.

### Properties and limitations

The partial likelihood removes $\lambda_{0}(t)$ for $\beta$ estimation, but it does *not* remove:

- The proportional hazards assumption
- Independent censoring
- Correct covariate measurement
- Correct risk-set composition

Time-dependent covariates must be *predictable*: their value just before an event cannot use future information. Using future values creates immortal time bias. Tied event times require a declared exact, Breslow, or Efron treatment rather than the displayed no-ties product without modification.

## Worked example: Kaplan–Meier computation

Consider $n=5$ subjects with observed times $(2,3,5,5,7)$ and event indicators $(1,0,1,1,0)$.

**Step 1: Event table.**

| $t_{j}$ | $n_{j}$ | $d_{j}$ | $1-d_{j}/n_{j}$ |
|---------|---------|---------|-----------------|
| 2 | 5 | 1 | 0.8 |
| 3 | 4 | 0 | 1.0 |
| 5 | 3 | 2 | 0.333... |
| 7 | 1 | 0 | 1.0 |

**Step 2: Kaplan–Meier estimates.**

$$\hat{S}(0)=1,\quad \hat{S}(2)=0.8,\quad \hat{S}(3)=0.8,\quad \hat{S}(5)=0.8\times\frac{1}{3}\approx 0.267,\quad \hat{S}(7)=0.267.$$

**Step 3: Greenwood variance at $t=5$.**

$$\widehat{\operatorname{Var}}[\hat{S}(5)]=0.267^{2}\Bigl(\frac{1}{5\cdot 4}+\frac{2}{3\cdot 1}\Bigr)=0.071\times(0.05+0.667)=0.071\times 0.717\approx 0.051.$$

The standard error is $\sqrt{0.051}\approx 0.226$.

## Common errors and misconceptions

- **Treating Kaplan–Meier as universally unbiased.** Finite-sample bias has no
  universal direction without specifying the event and censoring laws, the
  time point, and endpoint conventions. Consistency under independent
  censoring is an asymptotic statement; it does not supply a general
  finite-sample bias sign, especially near the last observed times.

- **Ignoring censoring informativeness.** Preferential removal of high-risk subjects can inflate estimated survival, but the direction is not universal. Independence cannot generally be verified from censored outcomes alone; its plausibility rests on the observation design, recorded history and sensitivity analysis.

- **Using time-dependent covariates improperly.** A covariate measured after the event time cannot be used in the risk set for that event. This is immortal time bias.

- **Assuming proportional hazards without checking.** Schoenfeld residuals and time-varying coefficient models can diagnose non-proportionality. Fitting Cox when hazards cross gives misleading inference.

## A finite-grid likelihood and its complete large-sample calculation

To establish one survival limit without hiding a functional central limit theorem, fix finitely many ordered event times. Subjects are independent and identically distributed, and their event and censoring times are marginally independent. Events precede censoring at a tied time. Let q at a grid time be the conditional probability of failing then, given survival up to that time; let y be the probability of remaining both alive and uncensored at that time. Assume each y is positive and each q is strictly below one. Observation beyond the final grid time can be censored; the results concern only this fixed supported grid.

Among the current risk set, the probability of failure is q by independence. Conditional on the observed past and the risk set, the event count is binomial with that risk-set size and probability q. The censoring mechanism supplies separate factors. Consequently the event part of the likelihood is the product, over grid times, of q raised to the event count and one minus q raised to the number at risk who do not fail. Randomness of the later risk sets does not invalidate this factorization: successive conditional probabilities multiply. Maximizing each factor gives the event fraction, and multiplying the complementary fitted hazards gives Kaplan–Meier. If the risk set is empty, that hazard is not identified; a software extension of a flat curve cannot restore the missing information.

For one subject, denote risk and event indicators at grid time j by R and D. The random variable D minus q R has mean zero, variance y q times one minus q, and is a martingale difference along that subject's observed history. Residuals at distinct grid times therefore have zero covariance by iterated expectation, even though the risk indicators are highly dependent. The ratio expansion of the empirical event fraction gives the influence function

$$\psi_j=(D_j-q_jR_j)/y_j.$$

Indeed, subtracting the true q from the ratio of empirical D to empirical R leaves the empirical average of that numerator divided by the empirical risk fraction. The law of large numbers makes the denominator converge to y, and the ordinary iid vector CLT applies to these bounded subject-level vectors. Distinct hazard estimates consequently have diagonal asymptotic covariance, with jth entry q times one minus q divided by y. This is an asymptotic statement: the fitted hazards need not be independent in finite samples.

The survival functional at a fixed grid time is a finite product of one minus these hazards. Its derivative with respect to hazard j is minus the product survival divided by one minus q at that time. The multivariate delta method therefore gives

$$n\,\operatorname{Var}_{\rm asymp}(\widehat S(t))
=S(t)^2\sum_{j:t_j\le t}\frac{q_j}{y_j(1-q_j)}.$$

Replacing the hazards and risk probabilities by their empirical values yields n times Greenwood's formula above. Every limit in this derivation follows from finite-dimensional iid laws, ratio algebra and differentiability. It does not claim uniform validity at a moving last event time, at a zero survival endpoint, or over an expanding grid. With no censoring, the product survival is the empirical survivor function, so this variance reduces to the Bernoulli variance divided by sample size, as it should.

### Worked example: a two-time survival experiment

Suppose the first event probability is one quarter, the second conditional event probability is one third, and half the first-time survivors remain uncensored at the second time. The first risk probability is one and the second is three eighths. Population survival through the second time is one half. The two terms in the limiting variance sum are one third and four thirds, giving asymptotic variance five twelfths divided by the number of independent subjects. Without the intervening censoring, the second risk probability would be three quarters and the total variance would be one quarter divided by sample size. Censoring leaves the target unchanged under independence but removes information about later outcomes. Treating both risk sets as if they still contained the original sample size would miss this loss.

## Continuous hazards: an exact martingale error identity

Now assume independent subjects with common continuous hazard, no simultaneous events, and hazard preservation in the actual observed filtration. Write Y for their total risk process, N for their total observed event count, and M for the sum of their martingales. Orthogonality of different subject martingales, under these independent continuous-event assumptions, makes the bracket of M the integral of Y times the common hazard. The Nelson–Aalen estimator can be written with predictable integrand equal to one over Y when Y is positive, and zero otherwise. Direct substitution gives

$$\widehat\Lambda(t)-\int_0^t{\bf1}_{\{Y(u)>0\}}\lambda(u)\,du
=\int_0^t\frac{{\bf1}_{\{Y(u)>0\}}}{Y(u)}\,dM(u).$$

This is an exact identity, not an asymptotic expansion. Stop before the risk count falls below n times a fixed positive c. On this stopped interval the stochastic integral is square-integrable with bracket at most the cumulative population hazard divided by n c. The martingale isometry and maximal inequality then bound the expected squared maximum error by four times that quantity. If the population cumulative hazard is finite on a fixed horizon and the empirical risk fraction remains above c there with probability tending to one, the error converges uniformly to zero in probability. The missing zero-risk part of the hazard vanishes on that event.

For a process CLT one additionally needs convergence of the scaled predictable brackets and a vanishing-jump condition; a martingale functional CLT is a separate imported theorem. The finite-grid calculation does not establish it, and an intensity representation alone does not establish it either. This separation matters when risk sets become sparse: one large inverse-risk jump can destroy an approximation that works well earlier.

## Conditional censoring, weighting and population standardization

Let X be recorded baseline information and suppose event and censoring times are independent conditional on X. For a fixed horizon t, define G at t given X as the conditional probability that censoring occurs strictly after t. Assume G is positive on the relevant population support. Conditional independence gives

$$E\left[\frac{{\bf1}_{\{\widetilde T>t\}}}{G(t\mid X)}\middle|X\right]
=P(T>t\mid X).$$

The numerator requires both event and censoring times to exceed t. Its conditional expectation factors into the two survival probabilities, and division cancels the censoring factor. Taking outer expectations identifies marginal survival. This is an identification identity with known G; estimating G introduces additional uncertainty and needs a consistency argument. A uniform positive lower bound ensures bounded weights for this fixed-time indicator; positivity without a lower bound need not give a finite variance.

Conditional independence alone does not justify the unstratified Kaplan–Meier engine. Its pooled risk sets mix covariate groups in proportions changed by covariate-dependent censoring. One must actually stratify and standardize, weight using the conditional censoring law, or fit a suitable conditional event model. Merely mentioning covariates in an assumptions paragraph does not perform any of these operations.

### Worked example: conditional independence is insufficient for pooling

Let two equally common baseline groups have deterministic event times two and four. The first group is always censored at time one, while the second is observed beyond time four. Within each group, event and censoring times are independent because both are constants. The true survival at time three is one half. The pooled observed Kaplan–Meier curve stays at one through time three, since the early-event group left before its failures could be seen. Conditional positivity for that group fails at the target horizon, so weighting cannot repair this particular design either. If instead each group retains some positive follow-up probability, conditional weighting identifies the target, while pooled censoring can still distort the risk-set mixture. The example isolates both the conditional-versus-marginal distinction and the need for support.

## Restricted means and competing events

The restricted mean survival time through a supported finite horizon tau is the integral of survival from zero to tau. The identity follows by writing the minimum of a nonnegative event time and tau as the integral of its survival indicators, then using Tonelli's theorem. Uniform consistency of a survival estimate on that interval implies consistency of its integral, with absolute error at most tau times the uniform error. Extending the horizon beyond available follow-up is an extrapolation assumption; the terminal height of a plotted curve supplies no tail model.

For two competing causes, cause-specific hazards determine overall survival through the total hazard. The cumulative incidence of cause one is the integral of survival just before time u against the cause-one cumulative hazard. This follows by conditioning a cause-one event at u on having experienced neither cause earlier. It differs from one minus the exponential of minus the cause-one hazard, which imagines removal of the other cause without specifying a causal intervention. In a discrete event table, estimate cumulative incidence by summing the current product survival immediately before each event time times the cause-one event fraction. The corresponding product survival uses all causes. The resulting two incidence estimates plus the remaining survival sum to one by telescoping the product decrements, providing an exact algebraic conservation identity.

## Practice exercises

<a id="counting-process-survival-theory-legacy-9-1"></a>

**Exercise 9.1.** Show that for uncensored data, the Kaplan–Meier estimator reduces to the empirical survival function $n^{-1}\sum_{i}\mathbf{1}_{\{T_{i}>t\}}$.

<details><summary>Hint 1</summary>

Write each factor as survivors after the event divided by survivors before it.

</details>

<details><summary>Hint 2</summary>

Adjacent numerators and denominators cancel, including tied failures.

</details>

<details><summary>Full solution</summary>

With no censoring, $n_{j}$ is the number of subjects with $T_{i}\ge t_{j}$ and $d_{j}$ is the number with $T_{i}=t_{j}$. Then $1-d_{j}/n_{j}=(n_{j}-d_{j})/n_{j}$, the fraction surviving past $t_{j}$. The product telescopes to $n^{-1}$ times the number with $T_{i}>t$. ∎

</details>

<a id="counting-process-survival-theory-legacy-9-2"></a>

**Exercise 9.2.** For the data in the worked example, compute the Nelson–Aalen estimate at $t=5$ and compare to $-\log\hat{S}(5)$.

<details><summary>Hint 1</summary>

Sum the two nonzero event fractions.

</details>

<details><summary>Hint 2</summary>

Use minus log of a product as a sum of minus logs.

</details>

<details><summary>Full solution</summary>

$\hat{\Lambda}(5)=1/5+0/4+2/3=0.2+0+0.667=0.867$. And $-\log\hat{S}(5)=-\log(0.267)\approx 1.322$. The inequality follows from $-\log(1-x)\ge x$ for every event fraction $0\le x<1$. It already holds with a single event and is not solely a consequence of tied events. ∎

</details>

<a id="counting-process-survival-theory-legacy-9-3"></a>

**Exercise 9.3.** Explain why the Cox partial likelihood is not a likelihood in the ordinary sense.

<details><summary>Hint 1</summary>

Separate failure identity from event timing.

</details>

<details><summary>Hint 2</summary>

Condition on the current risk set and one event occurring.

</details>

<details><summary>Full solution</summary>

With one failure at each event time, a factor of $L_p$ is the
conditional probability of **which** member of the current risk set fails,
given that one failure occurs then. Their product therefore uses failure order
and risk-set membership but omits the baseline-hazard contribution carried by
the event times themselves; it is not the joint likelihood of all observed
times and censoring indicators.

Writing $S^{(0)}_\beta(t)=\sum_iY_i(t)e^{x_i^T\beta}$ and $V_\beta(t)$ for the
corresponding weighted risk-set covariance, the negative partial-log-likelihood
Hessian is the observed event sum $\sum_{t:\,dN(t)=1}V_\beta(t)$. At the true
parameter, the score is a martingale whose predictable bracket is instead

$$\int V_{\beta_0}(t)S^{(0)}_{\beta_0}(t)\,d\Lambda_0(t).$$

The event sum and this compensator are asymptotically related under the usual
law-of-large-numbers and regularity conditions; they are not literally the
same finite-sample matrix. Efficient semiparametric inference for $\beta$ in
the Cox model with an unspecified baseline is an imported regularity result.
It should not be restated as generic equivalence to a full-likelihood MLE under
an arbitrarily chosen parametric baseline. ∎

</details>

<a id="counting-process-survival-theory-ex-4"></a>

**Exercise 4.** Why must pooled Kaplan–Meier use marginal independent censoring or another valid pooled intensity condition?

<details><summary>Hint 1</summary>

Conditional and marginal independence differ.

</details>

<details><summary>Hint 2</summary>

Risk-set group proportions can change over time.

</details>

<details><summary>Full solution</summary>

Conditional independence only preserves hazards within the conditioning groups. If censoring probabilities vary between groups with different event laws, the pooled remaining risk set is a selected mixture. The pooled event fraction can then differ from the population hazard. Actual stratification and population standardization or conditional censoring weights are required to recover the intended marginal target.

</details>

<a id="counting-process-survival-theory-ex-5"></a>

**Exercise 5.** Prove the finite-grid residual covariance is zero for distinct times j before k.

<details><summary>Hint 1</summary>

Condition on the observed history immediately before time k.

</details>

<details><summary>Hint 2</summary>

The earlier residual is measurable in that history.

</details>

<details><summary>Full solution</summary>

The kth residual is $D_k-q_kR_k$ and has conditional expectation zero given its observed past, including whether the subject remains at risk. The earlier residual is measurable there. The tower property therefore makes their product expectation zero. Each residual has mean zero, so the covariance vanishes. Their dependence through risk membership is compatible with this orthogonality.

</details>

<a id="counting-process-survival-theory-ex-6"></a>

**Exercise 6.** Show that the negative logarithm of product-limit survival exceeds Nelson–Aalen before extinction.

<details><summary>Hint 1</summary>

Compare each log decrement to its hazard fraction.

</details>

<details><summary>Hint 2</summary>

Integrate the inequality one over one minus x at least one.

</details>

<details><summary>Full solution</summary>

For $0\le x<1$, $-\log(1-x)=\int_0^x(1-u)^{-1}du\ge x$, strictly if x is positive. Sum over event fractions. When every fraction is at most a less than one, the difference is bounded above by $\sum x_j^2/[2(1-a)]$, using the integral of $u/(1-u)$. Thus small individual jumps make the approximations close, but positivity of jumps alone gives no equality.

</details>

<a id="counting-process-survival-theory-ex-7"></a>

**Exercise 7.** At a fixed horizon, derive an unbiased estimator of survival when the conditional censoring law is known. State a sufficient variance condition.

<details><summary>Hint 1</summary>

Use the weighting identity in the text.

</details>

<details><summary>Hint 2</summary>

A lower bound on the censoring probability bounds the summand.

</details>

<details><summary>Full solution</summary>

Take the iid average of $\mathbf1_{\{\widetilde T_i>t\}}/G(t\mid X_i)$. Its expectation is the target by conditional independence and the tower property. If G is at least a positive c, every summand lies between zero and one over c, so it has finite variance and the iid mean CLT applies. The finite-sample estimate may exceed one; truncating it changes unbiasedness.

</details>

<a id="counting-process-survival-theory-ex-8"></a>

**Exercise 8.** For constant cause-specific hazards a and b, compute cause-one cumulative incidence.

<details><summary>Hint 1</summary>

Overall survival uses the sum of hazards.

</details>

<details><summary>Hint 2</summary>

Integrate a times the overall survivor function.

</details>

<details><summary>Full solution</summary>

For $a+b>0$, overall survival is $e^{-(a+b)t}$ and cause-one incidence is $a(1-e^{-(a+b)t})/(a+b)$. The cause-two expression has b in the numerator, so their sum is one minus survival. The quantity $1-e^{-at}$ is different when b is positive; it is not the observed cause-one incidence. If both rates are zero, both incidences are zero.

</details>

<a id="counting-process-survival-theory-ex-9"></a>

**Exercise 9.** Prove the restricted-mean identity and a deterministic error bound for its plug-in estimate.

<details><summary>Hint 1</summary>

Represent a truncated time by an indicator integral.

</details>

<details><summary>Hint 2</summary>

Bound an integral by interval length times the uniform error.

</details>

<details><summary>Full solution</summary>

Pointwise, $\min(T,\tau)=\int_0^\tau\mathbf1_{\{T>u\}}du$ up to an irrelevant single endpoint. Tonelli gives expectation equal to $\int_0^\tau S(u)du$. For an estimated survival curve, the difference of restricted means has magnitude at most $\tau\sup_{u\le\tau}|\widehat S(u)-S(u)|$. This establishes consistency on supported horizons, without asserting a normal limit or identifying an unrestricted mean.

</details>

<a id="counting-process-survival-theory-ex-10"></a>

**Exercise 10.** Why does a Cox risk-set probability remove the common baseline hazard, and when can that argument fail?

<details><summary>Hint 1</summary>

Condition on exactly one instantaneous event in a declared risk set.

</details>

<details><summary>Hint 2</summary>

The common baseline factor cancels from numerator and denominator.

</details>

<details><summary>Full solution</summary>

With no tied continuous event times, the conditional identity of the failing subject has probability proportional to its relative risk because each risk intensity contains the same baseline factor. Cancelling this factor yields the displayed partial-likelihood term. A nonpredictable covariate uses future information, an incorrect risk set changes the denominator, and ties require a separate rule. None is repaired by the baseline cancellation itself.

</details>

## Forward and backward connections

This chapter applied martingale theory to event-time data, extending the dependent-limit theory from *Dependent Central Limits*. In *Spatial Covariance and Kriging*, we study another form of dependent data where the dependence structure is indexed by spatial location rather than time. In *Model Checking and the Double Use of Data*, we examine diagnostics for the proportional hazards assumption and other survival model assumptions.
