
# Capstones: Targets, Computation and Interpretation

## A capstone begins with a joint law

A graphical-model analysis has several linked claims: the probability model is well defined, the requested conditional or intervention target is identified under its assumptions, the algorithm computes that target or a declared approximation, and the statistical conclusion accounts for learning and uncertainty. A correct step at one level does not automatically justify the others. These capstones combine the earlier arguments around small transparent models, so every transition between claims can be examined.

The examples are synthetic mathematical cases, not empirical evidence about a particular application. Their numerical values are derived from stated tables and linear algebra. No program output or numerical execution is used as mathematical warrant. The exercises and projects are analytical; a future implementation would require its own numerical work under the project-wide workflow.

For each case, first identify observations and latent variables, then state what is fixed and what is learned. Write the full joint law before conditioning. Keep exact inference, approximation-family error, optimisation and sampling error separate. Finally ask whether the requested interpretation is observational, predictive or interventional. The worked answers show how these questions change the result rather than merely repeat terminology.

## Worked example 1: persistent hidden states and two equal observations

**Example 15.1 (persistent hidden states and two equal observations).** Consider a stationary two-state HMM. Its transition rows are $(.9,.1)$ and $(.2,.8)$, so its stationary state probabilities are two thirds and one third: multiplying that vector by the matrix reproduces it. The likelihood of an observed zero is .8 in the first state and .3 in the second. Both emissions have complementary positive probabilities for an observed one.

The marginal probability of zero at any time is nineteen thirtieths. An iid observation model with that same marginal would assign two consecutive zeros probability $361/900$. Under the HMM, the first forward weights are eight fifteenths and one tenth. Transition prediction gives one half and two fifteenths; multiplying by the second zero likelihood gives .40 and .04. The two-zero likelihood is therefore eleven twenty-fifths, larger than the iid value despite identical one-time marginals.

This comparison isolates dependence rather than a changing marginal mean. The conditional next-zero probability after one zero is sixty-six ninety-fifths, exceeding the marginal nineteen thirtieths. The first observation updates the latent-state mixture, which persists through the transition. A predictor retaining only the unconditional observation frequency loses that information.

The adjacent latent posterior for this two-zero record has weights proportional to forty-eight, two, two and three. After normalising by fifty-five, its singleton state-zero probability at either time is ten elevenths and its expected transition indicator is four fifty-fifths. These quantities differ from a hard assignment of both states to zero. The most-probable path is indeed 00, but its posterior probability is forty-eight fifty-fifths, not one.

Suppose the task is the expected number of state changes. Use the pair posterior, giving four fifty-fifths. If the task is the most probable entire state path, use Viterbi, giving 00. If the task is a posterior distribution over possible changes, sum path probabilities according to their change counts. All three are exact for the same fitted-parameter model and answer different questions. A single decoded path cannot substitute for every uncertainty calculation.

If the transition and emission probabilities were estimated from that same two-observation record, treating them as known would add a plug-in assumption. Exact forward-backward would still be exact conditional on those estimates, but would not integrate their uncertainty. The small example therefore distinguishes a computational theorem from a claim that the entire statistical analysis is precise.

## Worked example 2: exact Gaussian inference versus mean field

**Example 15.2 (exact Gaussian inference versus mean field).** Take a zero-mean latent Gaussian vector with precision
$$
Q=\begin{pmatrix}2&-1&0\\-1&2&-1\\0&-1&2\end{pmatrix},
$$
and observe each coordinate with independent unit Gaussian noise. At the observed vector $(1,0,-1)^T$, completing the quadratic posterior exponent adds the identity to the precision and adds the observed vector as its linear coefficient. Thus
$$
Q_*=\begin{pmatrix}3&-1&0\\-1&3&-1\\0&-1&3\end{pmatrix},\qquad
\Sigma_*=\frac1{21}\begin{pmatrix}8&3&1\\3&9&3\\1&3&8\end{pmatrix}.
$$
Matrix multiplication verifies the inverse, and multiplying that inverse by the observed vector gives posterior mean $(1/3,0,-1/3)^T$. The posterior remains a Gaussian chain: its endpoint precision entry is zero, so the endpoints are independent conditional on the middle, while their marginal posterior covariance is one twenty-first.

The best independent Gaussian approximation in reverse relative entropy matches that same mean but uses all variances one third, the inverse diagonal precision. The exact middle variance is three sevenths and each exact endpoint variance eight twenty-firsts, all larger. Its divergence from the true posterior is one half log nine sevenths, from the precision determinant formula in Chapter 8. This is an explicit nonzero approximation gap even at the exact global variational optimum.

A reported posterior mean alone would not reveal this discrepancy. For the endpoint sum, the exact variance is the sum of its two variances plus twice their covariance, equal to six sevenths. Mean field instead gives two thirds. For the endpoint difference, the exact variance is two thirds, which happens to match the product approximation because the covariance correction cancels the variance shortfall. Agreement for one linear functional does not establish agreement for every uncertainty target.

There are several exact computational routes. A tridiagonal solve obtains the mean and selected covariance quantities; Gaussian elimination creates Schur complements; a Gaussian message algorithm uses the chain structure. A dense inverse is not required to compute a mean, even though the displayed small inverse is useful for mathematical exposition. Each route computes the same Gaussian target in exact arithmetic. The product approximation computes another distribution, so solving its optimisation accurately cannot remove that family discrepancy.

If a numerical covariance appears indefinite despite these positive-definite inputs, that is a numerical or implementation problem rather than evidence that the theoretical posterior variance can be negative. If the observation-noise model is changed or its variance fitted from data, the target itself changes. These are separate explanations, which should not be merged into one generic error bar.

## Worked example 3: a selected conditional contrast versus an intervention

**Example 15.3 (a selected conditional contrast versus an intervention).** Consider one hundred complete records with a binary pretreatment variable Z. In its zero stratum there are ten treated records with three successes and forty untreated records with four successes. In its one stratum there are forty treated records with thirty-two successes and ten untreated records with six successes. Every joint cell has positive count.

The empirical stratum distribution is fair. Treatment probabilities by stratum are .2 and .8, and outcome probabilities are .3 and .1 in the first stratum for treated and untreated, and .8 and .6 in the second. The unadjusted treated success rate is thirty-five over fifty, or .7; the untreated rate is ten over fifty, or .2. Their observational contrast is .5.

Under the explicitly assumed causally sufficient DAG with Z causing both treatment and outcome, and treatment causing outcome, Z satisfies the backdoor criterion. Standardization over its fair marginal gives intervention outcome probabilities .55 and .35, whose contrast is .2. This calculation uses the row estimates and the identifying formula, not a graphical rule that a fitted arrow automatically has causal meaning.

The full observed three-variable distribution is positive and can also be parameterized by a complete DAG in several variable orders. Its observational likelihood alone does not verify the chosen causal ordering or exclude hidden common causes. The adjustment claim therefore remains conditional on the declared causal model, consistency and positivity. The cell counts estimate its probability functional; they do not prove those assumptions.

Adding independent Dirichlet row priors yields posterior row distributions and posterior predictive probabilities, as in Chapter 12. Those predictions generally shrink the empirical rates and change a plug-in standardized contrast. A posterior for the causal functional should integrate the declared parameter uncertainty rather than merely substitute posterior means into every nonlinear expression. It still does not integrate over causal alternatives excluded from its model.

The example also exposes a common target change. Comparing treated and untreated outcomes within the selected observed sample is an association. Averaging conditional rows over another target population's Z distribution produces a transport or standardization question with additional stability assumptions. Averaging over a post-treatment variable without an identifying argument can instead produce a different and potentially biased contrast. The averaging measure is part of the mathematical target.

## A complete claim record for a graphical analysis

A useful written analysis contains the variable definitions, state spaces or base measures, graph family, parameter domain and normalisation. It states whether observations are independent records, one dependent sequence, or incomplete measurements from a recording process. This determines the likelihood before any inference method is chosen.

Next write the query itself: a marginal, conditional prediction, likelihood, expected loss, latent path, or intervention distribution. For a causal query, include the intervention and identifying assumptions. For a decision, include its loss. These choices distinguish quantities that might otherwise all be called the posterior answer.

Then give the inference derivation and any approximation family, transition kernel, stopping criterion or numerical conditioning assumptions. An optimizer can be globally exact within an inadequate variational family, and a sampler can have the correct invariant law while moving poorly. State those facts at the level proved. Finally distinguish uncertainty conditional on fixed parameters and graph from uncertainty after learning either.

The purpose is to make each conclusion inspectable. It is not necessary to list every possible alternative mechanism in every calculation, but it is necessary to name assumptions that materially support the actual conclusion. A small example in which an algorithm agrees with direct algebra is a useful mathematical illustration, not an independent review of a manuscript or a general guarantee for all model inputs.

## Project 1: observation mechanisms and an HMM target

Consider the stationary HMM in the first example, but suppose a zero observation is recorded twice as often as a one. The recording indicator is conditionally independent across times given the current observation. Describe the model needed to analyze a record known to have been selected at both times. Derive the effective emission likelihood for each selected observed value, and distinguish conditioning on selection from modelling the full population sequence.

<details><summary>Hint 1</summary>

Introduce a recording indicator as an observed child of the observation. Its likelihood multiplies the ordinary emission.

</details>

<details><summary>Hint 2</summary>

The sampling protocol determines whether the normalizer is a joint selection probability or a state-specific conditional emission normalizer.

</details>

<details><summary>Full solution</summary>

Let the recording probabilities be r zero and r one, with their ratio two and both at most one. For a fixed state, the joint likelihood of an observed value and selection is its emission probability times the appropriate recording probability. Using those joint likelihoods in forward-backward and conditioning on the observed selection pattern computes the posterior under a full population model. If instead the model samples observations conditional on selection separately within each state, normalise each state's two recording-weighted emissions by its own total recording probability; that is a different observation protocol and can alter the latent-state law. A complete selected-record model must retain how selection changes the state distribution and transitions rather than silently replacing only the emissions. The precise protocol decides the correct factorization.

</details>

## Project 2: choosing a sampler when the support is constrained

For the equal-bit target on configurations 00 and 11, compare one-site Gibbs, a two-site block update, and a Metropolis proposal that flips both bits. Construct a version of the last method that converges rather than alternates deterministically.

<details><summary>Hint 1</summary>

All one-site full conditionals are deterministic. The block conditional is the full two-state target.

</details>

<details><summary>Hint 2</summary>

A full flip always accepted can be periodic; include a positive holding probability.

</details>

<details><summary>Full solution</summary>

One-site Gibbs is trapped in whichever supported configuration initializes it, so invariance does not imply convergence. A full block draw chooses 00 or 11 independently with probability one half and is exact iid sampling. A deterministic full-flip proposal with equal target weights is always accepted, producing a period-two chain that has the target stationary law but does not converge from one state. Mix that flip with a hold, each with probability one half. Both rows then equal the target, giving convergence in one step and independent configurations after each such randomized update. This construction separates support connectivity, aperiodicity and invariance rather than treating them as one condition.

</details>

## Project 3: model comparison with unequal approximation gaps

Two models have achieved log evidence lower bounds minus one hundred and minus one hundred and two. The first gap is known to be at most one, while no upper bound for the second gap is available. What evidence ordering follows? What changes if the second gap is also at most one?

<details><summary>Hint 1</summary>

Each exact log evidence is its lower bound plus a nonnegative gap.

</details>

<details><summary>Hint 2</summary>

Compare the resulting intervals only when both have finite upper ends.

</details>

<details><summary>Full solution</summary>

The first exact log evidence lies between minus one hundred and minus ninety-nine. The second is at least minus one hundred and two but can be arbitrarily larger, so no ordering follows. If its gap is also at most one, the second lies between minus one hundred and two and minus one hundred and one. Those intervals are disjoint, proving that the first model has larger exact evidence. A posterior model-probability comparison would additionally include the graph or model prior odds.

</details>

## Exercises

<a id="graphical-model-capstones-ex-1"></a>

### Exercise 1

Why is the stationary state vector two thirds, one third in the first capstone?

<details><summary>Hint 1</summary>

Multiply it by the given transition matrix.

</details>

<details><summary>Hint 2</summary>

Or balance the two cross flows.

</details>

<details><summary>Full solution</summary>

The state-zero flow to state one is two thirds times .1, equal to one fifteenth. The reverse flow is one third times .2, also one fifteenth. With probabilities summing to one, these equal flows give invariance. Direct matrix multiplication therefore reproduces the same vector and makes the observation marginal constant over time.

</details>

<a id="graphical-model-capstones-ex-2"></a>

### Exercise 2

Compute the HMM next-zero probability conditional on one observed zero.

<details><summary>Hint 1</summary>

Divide the two-zero joint probability by the one-zero marginal.

</details>

<details><summary>Hint 2</summary>

Use eleven twenty-fifths and nineteen thirtieths.

</details>

<details><summary>Full solution</summary>

The ratio is eleven twenty-fifths times thirty nineteenths, equal to sixty-six ninety-fifths. It exceeds the marginal nineteen thirtieths because observing a zero favors the persistent first state. The iid model with the same one-time marginal would retain the marginal probability after any observed history.

</details>

<a id="graphical-model-capstones-ex-3"></a>

### Exercise 3

What is the posterior probability of at least one state change in the two-time HMM case?

<details><summary>Hint 1</summary>

Only the off-diagonal pair entries change state.

</details>

<details><summary>Hint 2</summary>

Sum their weights.

</details>

<details><summary>Full solution</summary>

The two off-diagonal entries each have posterior mass two fifty-fifths, so the change probability is four fifty-fifths. With only two times there is at most one transition, so this is also the expected number of changes. A Viterbi path containing no change would not justify reporting this posterior probability as zero.

</details>

<a id="graphical-model-capstones-ex-4"></a>

### Exercise 4

In the Gaussian capstone, derive the posterior precision.

<details><summary>Hint 1</summary>

Expand the unit-noise observation likelihood.

</details>

<details><summary>Hint 2</summary>

Add its quadratic coefficient to the prior exponent.

</details>

<details><summary>Full solution</summary>

The prior contributes minus one half the latent quadratic with precision Q. The likelihood contributes minus one half squared distance between observation and state, adding the identity to that precision and the observed vector to its linear coefficient. Hence the posterior precision is Q plus identity and its mean solves that matrix times the mean equal to the observation vector.

</details>

<a id="graphical-model-capstones-ex-5"></a>

### Exercise 5

Compute the exact endpoint-sum variance and compare with mean field.

<details><summary>Hint 1</summary>

Add both endpoint variances and twice their covariance.

</details>

<details><summary>Hint 2</summary>

The product approximation removes that covariance and uses variance one third at each coordinate.

</details>

<details><summary>Full solution</summary>

The exact variance is eight twenty-firsts twice plus two twenty-firsts, totaling six sevenths. Mean field gives two thirds. The difference is not caused by optimisation error: these are the exact target and exact reverse-KL product optimum. Their means agree, which does not make their uncertainty summaries equal.

</details>

<a id="graphical-model-capstones-ex-6"></a>

### Exercise 6

Why does the endpoint-difference variance happen to match mean field?

<details><summary>Hint 1</summary>

Subtract twice the endpoint covariance.

</details>

<details><summary>Hint 2</summary>

Compare with the two marginal-variance deficits.

</details>

<details><summary>Full solution</summary>

The exact difference variance is sixteen twenty-firsts minus two twenty-firsts, equal to two thirds. Mean field also gives two thirds from its two independent one-third variances. The removed positive covariance cancels the reduction of the marginal variances for this particular functional. This accidental agreement does not extend to the endpoint sum or establish equality of the distributions.

</details>

<a id="graphical-model-capstones-ex-7"></a>

### Exercise 7

Compute the unadjusted success rates from the one-hundred-record table.

<details><summary>Hint 1</summary>

Combine the treated counts across strata.

</details>

<details><summary>Hint 2</summary>

Do the same for untreated records.

</details>

<details><summary>Full solution</summary>

Treated records total fifty with thirty-five successes, giving .7. Untreated records total fifty with ten successes, giving .2. Their difference is .5. The adjusted contrast is .2 under the stated causal assumptions because it averages each treatment-specific row over the same Z distribution instead of the treatment-dependent stratum proportions.

</details>

<a id="graphical-model-capstones-ex-8"></a>

### Exercise 8

Why do positive joint cell counts fail to verify causal sufficiency?

<details><summary>Hint 1</summary>

Counts determine an observed distribution estimate.

</details>

<details><summary>Hint 2</summary>

Hidden mechanisms can have the same observed distribution.

</details>

<details><summary>Full solution</summary>

Positive counts support estimation of every displayed conditional row and avoid zero-denominator problems in this dataset. They do not reveal whether an unobserved common cause exists or whether intervention leaves the remaining mechanisms unchanged. Different causal models can share the same positive observational table. Causal sufficiency is an additional identifying assumption, not an empirical consequence of complete cell coverage.

</details>

<a id="graphical-model-capstones-ex-9"></a>

### Exercise 9

Which uncertainty is absent when HMM parameters are treated as fixed fitted values?

<details><summary>Hint 1</summary>

The state posterior is conditional on those parameter values.

</details>

<details><summary>Hint 2</summary>

Learning them from data creates another inferential layer.

</details>

<details><summary>Full solution</summary>

Filtering and smoothing quantify latent-state uncertainty within the selected parameter model. They do not integrate uncertainty about transition or emission parameters estimated from the same record, nor uncertainty about the number of states or chosen graph. A full Bayesian or selection-aware treatment must model those layers explicitly rather than interpret a plug-in state posterior as covering them automatically.

</details>

<a id="graphical-model-capstones-ex-10"></a>

### Exercise 10

Name a target for which exact inference and exact variational optimisation still disagree in the Gaussian capstone.

<details><summary>Hint 1</summary>

The variational family excludes correlation.

</details>

<details><summary>Hint 2</summary>

Use the endpoint sum.

</details>

<details><summary>Full solution</summary>

The endpoint sum has exact posterior variance six sevenths and product-variational variance two thirds. Both calculations can be algebraically exact for their respective distributions. The discrepancy is approximation-family error, which no tighter optimisation tolerance removes. Choosing a richer family or computing the exact Gaussian functional addresses that target directly.

</details>
