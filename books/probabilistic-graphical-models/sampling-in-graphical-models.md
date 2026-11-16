
# Sampling in Graphical Models

## A probability target and a sampling mechanism

Sampling approximates expectations under a specified distribution using random draws. Direct independent sampling, importance sampling and Markov chain Monte Carlo produce different random objects and have different error analyses. This chapter keeps them separate and proves finite-state statements that apply to graphical posteriors. The model can be wrong even if its sampler is exact; a correct target calculation can also be approximated poorly by a slow sampler.

Let a finite posterior have weights w with positive finite total Z, and write pi for its normalised law. Zero weights are allowed when support issues are explicitly considered. A function f on the finite support is bounded, so integrability is automatic here. General continuous-state chains require recurrence and moment hypotheses beyond these elementary finite arguments; [the measure-theoretic probability book](../probability-theory-measure-martingales/markov-chains-general-spaces.md) gives a scoped kernel and minorization treatment.

An exact posterior draw from forward-filtering backward-sampling in the HMM chapter is independent of another such draw when the randomizations are independent. A Gibbs update, by contrast, starts from the previous configuration and produces a dependent next configuration. Both use conditional probabilities, but that common phrase does not make their resulting samples interchangeable.

## Gibbs updates preserve the target

A one-coordinate Gibbs update retains every other value and redraws the selected coordinate from its target full conditional. On a feasible conditioning configuration, multiplying the target probability of the current configuration by its update probability gives the marginal probability of the retained coordinates times the two corresponding conditional probabilities. This expression is symmetric in the old and new coordinate values. Therefore detailed balance holds, and the update preserves pi.

On impossible retained-coordinate configurations the conditional can be defined arbitrarily, since a chain started in the target support never visits them through a valid Gibbs update. Starting from a configuration of zero target mass requires a separate initialization convention; the invariance proof does not promise meaningful conditionals there.

A random-scan update chooses a coordinate with fixed positive probabilities independent of the current state. It is a mixture of invariant reversible kernels and is therefore invariant and reversible. A systematic sweep composes coordinate updates in a fixed order. Each preserves pi, so their composition preserves it too, but that composition need not be reversible. Reversibility is sufficient for invariance, not necessary for every valid algorithm.

Graphical structure makes full conditionals local: only factors containing the updated coordinate are needed in the conditional ratio. It does not make successive configurations independent. Block Gibbs updates replace several coordinates jointly using their full conditional. Larger blocks can remove strong within-block dependence at a higher computational cost; exact elimination may be useful for drawing that block.

## Strict positivity gives an explicit finite convergence proof

**Theorem 9.1 (Finite positive Gibbs convergence).** Suppose pi is strictly positive on the whole finite product space with d coordinates. Let m i be the smallest probability in coordinate i's full conditional tables. Every m i is positive. In a systematic full sweep, one can reach any specified final configuration y by choosing its coordinate values in order. The probability of that sequence is at least the product of the m i, uniformly in the starting state.

For random scan with equal coordinate weights, the next d updates can select the particular order from one through d with probability $d^{-d}$. Conditional on that event, the same lower bound holds. If N is the number of complete configurations, the d-step transition therefore satisfies
$$
P^d(x,\cdot)\ge\epsilon\,\nu(\cdot),\qquad
\epsilon=N d^{-d}\prod_i m_i,
$$
where nu is uniform on configurations. The constant cannot exceed one because the pointwise lower bounds sum to at most the transition mass. The sweep kernel has the analogous bound without the coordinate-selection factor.

Subtract the common probability component and write the block transition as a mixture of a refresh from nu and a residual kernel. Using the same refresh in two coupled chains makes them equal at their first shared refresh, and identical later updates keep them equal. The probability of no refresh in k blocks is at most $(1-\epsilon)^k$. The coupling inequality therefore gives uniform total-variation convergence to pi at that rate. Uniqueness follows because two stationary probabilities would have their distance contracted by a strict factor.

The proof is quantitative but can give an extremely small epsilon in a large or strongly coupled model. A valid convergence theorem is not a claim that the displayed bound is practically sharp or that a short run has negligible error. Strict positivity also matters: it supplied positive minimum conditional probabilities across every configuration.

## A full strong law through a bounded Poisson solution

**Theorem 9.2 (Strong law for the minorised finite chain).** The preceding geometric convergence proves absolute convergence, uniformly in x, of
$$
h(x)=\sum_{k=0}^{\infty}(P^kf(x)-\pi f).
$$
Indeed bounded-function expectation differences are bounded by a constant times the total-variation contraction. Shifting the uniformly convergent series shows $h-Ph=f-\pi f$. Along a chain, summing this identity yields
$$
\sum_{t=0}^{n-1}(f(X_t)-\pi f)=h(X_0)-h(X_n)+\sum_{t=0}^{n-1}D_{t+1},
\qquad D_{t+1}=h(X_{t+1})-Ph(X_t).
$$
The last differences are bounded martingale differences. Their weighted sum with weights reciprocal to their time index is an L2-bounded martingale: orthogonality and the summable squared weights bound its second moments. The martingale convergence theorem gives almost-sure convergence of that weighted series. Kronecker's lemma then makes the ordinary average of the differences converge to zero almost surely. The bounded endpoint term also vanishes after division by n.

Thus empirical averages converge to pi f from every initial state for these minorized finite chains. This proof includes the actual law-of-large-numbers step rather than equating stationarity alone with representative averages. It does not produce a finite-sample confidence interval or a central limit theorem merely by establishing the almost-sure limit.

## Worked example 1: a two-sign bottleneck

**Example 9.3 (a two-sign bottleneck).** Take a target proportional to $\exp(Jx_1x_2)$ for positive J. The two aligned configurations have larger probability than the two misaligned ones. Starting from either aligned configuration, a random-scan one-site Gibbs update creates a misalignment with probability $1/(1+e^{2J})$, regardless of which coordinate is chosen. The waiting time for the first exit from that aligned state is geometric with mean $1+e^{2J}$.

For large J, a long trajectory can remain at one aligned mode while the target gives equal mass to the two modes. Each local conditional is correct and the finite chain converges eventually, but a short sample can estimate the singleton mean badly. Updating both coordinates as one block draws directly from the four-state target and removes that particular bottleneck at the cost of a larger conditional calculation. Blocking can change practical dependence without changing the target.

## Metropolis-Hastings from unnormalized factors

Given a proposal kernel q on the target support, propose y from the current state x and accept with probability
$$
a(x,y)=\min\left(1,\frac{w(y)q(y,x)}{w(x)q(x,y)}\right)
$$
when the forward proposal probability is positive. If the reverse probability is zero, acceptance is zero. The normalizer Z cancels. The stationary off-diagonal flow is
$$
\pi(x)q(x,y)a(x,y)=\min\{\pi(x)q(x,y),\pi(y)q(y,x)\},
$$
which is symmetric. Rejected probability remains at the current state and contributes diagonal flow, so detailed balance and invariance follow. Omitting the reverse proposal ratio is valid only when the proposal is symmetric on the relevant states.

For a strictly positive independent proposal r on a finite target support, let M be the largest ratio pi over r. Then the transition has a global minorization by pi divided by M. For distinct states, the accepted proposal mass is the minimum of r at the new state and pi there times r at the old state divided by pi there at the old state; both terms are at least pi at the new state divided by M. The diagonal proposal alone gives the same bound there. This proves geometric convergence by the refresh argument.

## Worked example 2: an independent proposal on two states

**Example 9.4 (an independent proposal on two states).** Let pi assign probabilities .9 and .1 and let the independent proposal be uniform. The maximum importance ratio is 1.8, so the minorization constant is five ninths. From the high-probability state the low-probability proposal is accepted with probability one ninth, giving transition probability one eighteenth. In the other direction the proposal is always accepted, giving transition probability one half.

The stationary cross flows are equal: .9 times one eighteenth equals .1 times one half. This verifies detailed balance numerically. The rejected proposals are essential to the correct high-probability holding mass. Always accepting the uniform proposals would instead yield a uniform stationary law, even though the target weights were used somewhere else in the program.

## Importance sampling and self-normalization

Suppose independent proposals are drawn from a probability r that is positive wherever w is positive. Define the weight W as w divided by r. Then the proposal expectations of W and W f are Z and Z times the target expectation. Their ordinary sample means are unbiased estimators of those two unnormalized quantities. The ratio
$$
\widehat\mu=\frac{\sum_sW_sf(Z_s)}{\sum_sW_s}
$$
is consistent under the corresponding strong laws when the denominator mean is positive. It is generally biased at finite sample size because an expectation of a ratio is not the ratio of expectations. In continuous models the required absolute integrability and moment assumptions must be checked separately.

For a Bayesian network with observed nodes fixed, likelihood weighting proposes unobserved nodes from their original conditional tables in topological order and multiplies the likelihood factors at observed nodes. The proposed unobserved joint probability times that weight equals the complete joint weight at the evidence. This proves the importance identity directly. Rejection sampling instead discards complete prior draws inconsistent with evidence; its acceptance probability can be very small for rare discrete evidence.

## Worked example 3: one weighted draw can be badly biased

**Example 9.5 (one weighted draw can be badly biased).** Return to the latent-alarm model with equal prior hidden-state probabilities and alarm success likelihoods one quarter and three quarters. Proposing the state from its prior and weighting by that likelihood estimates the evidence, whose value is one half. The weight has variance one sixteenth, so averaging n independent weights has variance one over sixteen n.

The target high-state posterior is three quarters. With just one self-normalized weighted draw, however, the ratio estimator for its indicator equals the proposed indicator itself, since its weight cancels. Its expectation is one half, not three quarters. Consistency as the number of draws increases does not remove this finite-sample bias identity. The example also distinguishes an unbiased evidence estimator from the logarithm of that estimator, whose expectation is generally smaller than log evidence by Jensen.

## Dependence changes the Monte Carlo variance

For a stationary chain write gamma k for the covariance between f at times zero and k. Expanding the square of an average gives the exact formula
$$
\operatorname{Var}(\overline f_n)=\frac{\gamma_0}{n}+\frac2n\sum_{k=1}^{n-1}(1-k/n)\gamma_k.
$$
The finite minorization bound makes these covariances absolutely summable for bounded f. Multiplying by n and taking the limit therefore gives a nonnegative asymptotic variance equal to gamma zero plus twice the covariance series. Treating draws as independent drops all those terms and can seriously misstate precision.

An effective sample size based on that variance is an observable-dependent summary when the limiting variance is positive. It is not a proof that the chain has reached its stationary regime, and a finite diagnostic can miss an unvisited mode. Importance-weight summaries address another problem and should not be substituted for autocorrelation analysis of a dependent chain. Neither summary establishes correctness of the underlying likelihood or observation model.

With support constraints the one-site Gibbs chain can even fail to connect the target support. For the equal-bit distribution, every one-site conditional is deterministic and the chain never changes mode. The target remains invariant, but convergence from a single mode fails. Inspecting support, transition design and the actual function being estimated comes before interpreting a smooth trace or a large reported number of iterations.

## Exercises

<a id="sampling-in-graphical-models-ex-1"></a>

### Exercise 1

Prove detailed balance for a one-coordinate Gibbs update.

<details><summary>Hint 1</summary>

Hold all other coordinates fixed.

</details>

<details><summary>Hint 2</summary>

The old and new coordinate conditional probabilities multiply symmetrically.

</details>

<details><summary>Full solution</summary>

The stationary flow is the retained-coordinate marginal multiplied by the old-value conditional probability and the new-value conditional probability. Swapping old and new values leaves that product unchanged. Flows between configurations differing in more than the updated coordinate are zero both ways. Thus detailed balance holds, and summing its two-state identity gives invariance.

</details>

<a id="sampling-in-graphical-models-ex-2"></a>

### Exercise 2

Why is a systematic composition of invariant updates still invariant?

<details><summary>Hint 1</summary>

Apply each kernel to the target in turn.

</details>

<details><summary>Hint 2</summary>

Reversibility need not survive composition.

</details>

<details><summary>Full solution</summary>

The first update maps the target law to itself. Applying the next therefore again starts from the target and leaves it unchanged. Induction handles the whole sweep. The order can destroy detailed balance for the composite kernel, but invariance only needs this sequential measure identity and does not require reversibility.

</details>

<a id="sampling-in-graphical-models-ex-3"></a>

### Exercise 3

Explain the random-scan minorization factor $d^{-d}$.

<details><summary>Hint 1</summary>

Choose one specified order of d coordinate updates.

</details>

<details><summary>Hint 2</summary>

Each independent uniform coordinate choice has probability one over d.

</details>

<details><summary>Full solution</summary>

The probability of selecting the order one through d in the next d updates is the product of d factors one over d. Given that order, choosing the final desired value at each coordinate has probability at least the product of its minimum full-conditional probabilities. Multiplying gives a uniform pointwise lower bound, whose sum over target configurations produces the stated minorization.

</details>

<a id="sampling-in-graphical-models-ex-4"></a>

### Exercise 4

Why does the equal-bit example refute convergence from invariance alone?

<details><summary>Hint 1</summary>

Every one-site conditional is deterministic.

</details>

<details><summary>Hint 2</summary>

Compare a start at one supported configuration with the full target.

</details>

<details><summary>Full solution</summary>

Started at 00, the Gibbs chain stays there forever because either coordinate is determined by the other. The same holds at 11. The fair mixture of those two absorbing states is invariant, but neither individual start converges to it. Correct full conditionals and target invariance therefore do not establish irreducibility or convergence.

</details>

<a id="sampling-in-graphical-models-ex-5"></a>

### Exercise 5

Compute the expected first-exit time from an aligned Ising configuration.

<details><summary>Hint 1</summary>

Each update has the same exit probability.

</details>

<details><summary>Hint 2</summary>

Use the mean of a geometric waiting time.

</details>

<details><summary>Full solution</summary>

At either coordinate the conditional probability of choosing the opposite sign is $1/(1+e^{2J})$. Until an exit, the configuration remains the same, so these independent update opportunities give a geometric first-exit time with that parameter. Its mean is the reciprocal, $1+e^{2J}$. This concerns exit from one mode, not a complete mixing-time formula.

</details>

<a id="sampling-in-graphical-models-ex-6"></a>

### Exercise 6

Why does Metropolis-Hastings need the reverse proposal probability?

<details><summary>Hint 1</summary>

Write the desired symmetric stationary flow.

</details>

<details><summary>Hint 2</summary>

Asymmetric proposals otherwise privilege one direction.

</details>

<details><summary>Full solution</summary>

Accepting with the full ratio makes each off-diagonal flow equal to the minimum of its forward and reverse proposed stationary flows, a symmetric expression. Omitting the reverse-to-forward proposal ratio preserves that equality only in symmetric special cases. A proposal favoring one direction can otherwise change the stationary law even when target weight ratios appear in the acceptance rule.

</details>

<a id="sampling-in-graphical-models-ex-7"></a>

### Exercise 7

Check the two-state Metropolis cross flows.

<details><summary>Hint 1</summary>

Multiply each transition by its starting target probability.

</details>

<details><summary>Hint 2</summary>

Compare their values.

</details>

<details><summary>Full solution</summary>

The high-to-low flow is .9 divided by eighteen, equal to .05. The low-to-high flow is .1 times one half, also .05. Their equality verifies balance. The remaining mass stays on the diagonal through self-proposals and rejections, and cannot be omitted when computing the actual transition kernel.

</details>

<a id="sampling-in-graphical-models-ex-8"></a>

### Exercise 8

Why is a self-normalized importance estimate generally biased?

<details><summary>Hint 1</summary>

Expectations do not commute with division.

</details>

<details><summary>Hint 2</summary>

Use the one-draw latent-alarm example.

</details>

<details><summary>Full solution</summary>

Although numerator and denominator averages are individually unbiased for their unnormalized targets, their ratio is nonlinear and its expectation need not equal their expectation ratio. In the one-draw alarm example the positive weight cancels completely, leaving the prior indicator with mean one half instead of the posterior three quarters. The strong law yields consistency at large sample size under the stated conditions, not exact finite-sample unbiasedness.

</details>

<a id="sampling-in-graphical-models-ex-9"></a>

### Exercise 9

Derive the variance of a stationary chain average from its autocovariances.

<details><summary>Hint 1</summary>

Expand the double covariance sum.

</details>

<details><summary>Hint 2</summary>

Count pairs with each time lag.

</details>

<details><summary>Full solution</summary>

There are n diagonal terms equal to gamma zero and twice n minus k off-diagonal terms at lag k. Dividing their total by n squared yields the displayed formula. Under absolute summability, multiplying by n and passing the weighted sum limit gives the asymptotic variance. Without stationarity the same lag-only covariance representation is not justified.

</details>

<a id="sampling-in-graphical-models-ex-10"></a>

### Exercise 10

What separates a law-of-large-numbers result from a Monte Carlo confidence interval?

<details><summary>Hint 1</summary>

Almost-sure convergence has no finite-run coverage statement.

</details>

<details><summary>Hint 2</summary>

A distributional limit and variance estimation need extra results.

</details>

<details><summary>Full solution</summary>

The strong law proves that averages converge to the target expectation eventually along almost every trajectory. It supplies neither a finite-sample error probability nor an approximately normal scaled error with a consistently estimated variance. Such conclusions require separate concentration or central-limit and variance-estimation arguments. Reporting many iterations does not fill that mathematical gap.

</details>
