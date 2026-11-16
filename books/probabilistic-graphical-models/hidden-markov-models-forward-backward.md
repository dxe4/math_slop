
# Hidden Markov Models and Forward-Backward

## A joint law for hidden states and observations

**Definition 7.1 (Hidden Markov model).** A hidden Markov model has a latent state sequence and an observation at each time. Conditional on the latent sequence, observations are independent, and each observation depends only on its current state. The states themselves form a first-order Markov chain. With initial probability pi, transition matrix A and emission mass or density b, the finite-horizon law is
$$
p(z_{1:T},y_{1:T})=\pi(z_1)b_1(z_1)\prod_{t=2}^TA_{z_{t-1}z_t}b_t(z_t),
$$
where $b_t(j)=p(y_t\mid z_t=j)$ denotes the likelihood evaluated at the observed datum. Emissions can use time-specific parameters if that is declared. The transition and initial probabilities are normalised, and the emission model normalizes over possible observations, not over states at the observed value.

This expands the HMM section and original numerical example in [Exact and Approximate Inference](../structured-probabilistic-learning/exact-and-approximate-inference.md). The preceding chapter supplies the sum-product proof on a tree. We now derive filtering, smoothing, pair marginals, likelihood scaling, most-probable paths and posterior sampling separately, because each answers a different question about the same joint law.

For finite-state observations the evidence is a probability; for continuous observations it is a density under the stated product base measure. We assume the observed evidence is positive and finite. At values where the density version vanishes, the displayed posterior ratios are not defined. Deterministic emissions and zero transitions are permitted, but their support restrictions must remain in every recurrence.

## Forward recursion and filtering

**Proposition 7.2 (Forward recursion).** Define the unnormalized forward weight $\alpha_t(j)=p(y_{1:t},z_t=j)$. At the first time it is the initial probability times its emission likelihood. For later times,
$$
\alpha_t(j)=b_t(j)\sum_i\alpha_{t-1}(i)A_{ij}.
$$
To prove this, sum the joint law over earlier states, condition on the immediately preceding state, and use the Markov and emission assumptions. Alternatively it is the exact tree message from the past side toward the current state. Induction proves that the recursion retains every past likelihood factor exactly once.

The prefix evidence is the sum of the current forward weights. Dividing by that positive sum gives filtering: the conditional distribution of the current state given observations through the present. Prediction before the next datum multiplies the filtered row vector by A. Updating multiplies its components by the next emission likelihood and renormalizes. Prediction and update are therefore distinct operations, even if combined in one recurrence.

For K states and a dense transition matrix, each update costs order K squared, giving order T K squared overall. Sparse transitions can reduce this to the number of allowed edges per step. Filtering itself needs only the current state vector. Retrospective smoothing needs stored forward information or a deliberate recomputation scheme; linear arithmetic in the horizon does not mean constant memory for every output.

## Backward recursion and smoothed states

**Proposition 7.3 (Backward recursion and smoothing).** Define $\beta_t(i)=p(y_{t+1:T}\mid z_t=i)$, with terminal value one. The future conditional-independence structure gives
$$
\beta_t(i)=\sum_jA_{ij}b_{t+1}(j)\beta_{t+1}(j).
$$
Past observations and future observations are independent given the current state. Thus their likelihood contributions multiply, giving the smoothed probability
$$
\gamma_t(i)=P(z_t=i\mid y_{1:T})=
\frac{\alpha_t(i)\beta_t(i)}{p(y_{1:T})}.
$$
Summing its numerator over the state gives the same total evidence at every time, since each expression sums the entire joint law. This identity is both the normalisation proof and the reason filtering differs from smoothing: the latter includes the future message.

Likewise the adjacent-state posterior is
$$
\xi_t(i,j)=\frac{\alpha_t(i)A_{ij}b_{t+1}(j)\beta_{t+1}(j)}{p(y_{1:T})}.
$$
Summing over j returns gamma at time t, by the backward recursion. Summing over i returns gamma at time t plus one, by the forward recursion. These pair marginals give expected transition counts, which the EM chapter will need; singleton marginals alone do not determine them.

The observations generally do not themselves form a first-order Markov chain. Their history can carry information about the current hidden state beyond the latest observation. The filtered state distribution is a sufficient summary for predicting the next observation under the model, but it is usually a probability vector rather than a single most likely state. Replacing it by that state loses information and changes the prediction.

## Scaling without losing the likelihood

Products of many likelihoods can underflow even when the mathematical evidence is positive. Store a normalised filtering vector f and its positive scale c at each step. Begin with the initial-emission product, sum it to obtain c one, and normalise. Thereafter form the predictive-update vector from the previous normalised vector, sum to obtain c t, and normalise again. Induction gives
$$
p(y_{1:T})=\prod_{t=1}^Tc_t,\qquad
\log p(y_{1:T})=\sum_{t=1}^T\log c_t.
$$
Each scale is the predictive likelihood of the next observed datum conditional on its observed past. For continuous emissions it can exceed one, since it is a density value rather than a probability of an event.

For compatible smoothing define scaled backward values by dividing the original beta by the product of future scales. They satisfy
$$
\widetilde\beta_T=1,\qquad
\widetilde\beta_t(i)=\frac{\sum_j A_{ij}b_{t+1}(j)\widetilde\beta_{t+1}(j)}{c_{t+1}}.
$$
Then gamma is exactly the componentwise product of f and the scaled beta, and the scaled pair formula divides by the next scale. Different scaling conventions are possible, but mixing forward scales from one convention with backward values from another produces incorrect smoothing. A zero scale signals impossible prefix evidence and must not be converted to a positive constant without changing the model.

## Worked example 1: the retained two-state calculation, extended

**Example 7.4 (the retained two-state calculation, extended).** Use the original transition matrix with rows $(.9,.1)$ and $(.2,.8)$, initial probabilities one half each, and zero-observation likelihoods .8 and .3. After observing one zero the unnormalized weights are .4 and .15. The evidence is .55 and the filtering probabilities are eight elevenths and three elevenths.

After a second zero, prediction from the unnormalized first weights gives .39 and .16. Multiplication by the emission likelihoods gives .312 and .048. Their sum is .36, so the second filtering distribution is thirteen fifteenths and two fifteenths. The second scale is .36 divided by .55, while the product of scales is .36 as required.

The first backward values for this two-time record are .75 and .40. Multiplying by the first forward weights gives .30 and .06, which normalise to five sixths and one sixth. The future observation has increased the first state's posterior probability beyond its earlier filtering value. Both are correct distributions, conditional on different information sets.

## Worked example 2: pair marginals retain dependence

**Example 7.5 (pair marginals retain dependence).** For the same two-zero record, the unnormalized adjacent-state posterior table has entries .288, .012, .024 and .036. Dividing by .36 gives
$$
\xi_1=\begin{pmatrix}4/5&1/30\\1/15&1/10\end{pmatrix}.
$$
Its row sums are five sixths and one sixth, the first smoothed law. Its column sums are thirteen fifteenths and two fifteenths, the second smoothed law. The probability of a transition is one tenth, whereas multiplying the singleton posteriors would give a different value because the states are not posterior-independent.

The table also demonstrates the support discipline: a zero transition in the original matrix would force its corresponding pair-posterior entry to zero at every dataset. Learning cannot create a positive expected count for an impossible edge unless the transition model itself is changed. Priors and smoothing conventions for permitted zero counts are addressed in the parameter-learning chapter.

## Most-probable paths require max-product and backtracking

For a maximum joint posterior state sequence, the evidence denominator is constant across paths, so maximize the joint numerator. Define the best prefix weight ending in each state. The recursion replaces the forward sum over predecessor states by a maximum, and stores which predecessor attained it. Choose the best terminal state and follow those stored predecessors backward. This is the Viterbi algorithm, proved by induction on the optimal prefix for each fixed endpoint.

If several predecessors tie, keep a deterministic tie rule or record all maximizing options, depending on the requested output. The recursion yields at least one compatible maximizing path. A list of independently selected smoothed marginal modes instead minimizes the expected number of state mistakes. It need not maximize the probability that the whole path is correct, and can even violate a hard transition constraint when marginal ties are resolved incompatibly.

## Worked example 3: path mode and marginal modes disagree

**Example 7.6 (path mode and marginal modes disagree).** Consider a two-time latent Markov law with path probabilities .40, .25, .01 and .34 in row-major binary order, and uninformative emissions. It is an HMM: take initial probabilities .65 and .35, and normalise each row of the table to obtain its transition row. The largest path probability is .40 at 00. The singleton success probabilities are .35 at the first time and .59 at the second, so their marginal modes form 01 instead.

The marginal-mode path has larger expected bitwise accuracy, while 00 has the best whole-path success probability. Neither answer is an erroneous inference result; calling both simply the best hidden sequence omits the loss. In the retained numerical model with two observed zeros, the largest joint entry is .288 at 00, which agrees with its marginal modes for that particular record. Agreement in one example does not establish a general identity.

## Sampling a complete posterior path

Forward-filtering backward-sampling produces an exact posterior draw in ideal arithmetic. First draw the terminal state from its filtering law, which equals its smoothed law at the horizon. Given a sampled next state j, draw the previous state with probabilities proportional to $\alpha_t(i)A_{ij}$. Future observations and later states contribute only a multiplier independent of that previous state once the next state is fixed, so they cancel.

To prove the algorithm, factor the posterior path law in reverse order by the probability chain rule. The conditional-independence structure reduces each backward factor to exactly that normalised expression. Multiplying them reconstructs the posterior path law, so the sequence of draws has the required distribution. A denominator-zero next state cannot be reached with positive posterior probability; an implementation encountering it has either numerical loss of support or inconsistent inputs.

Independent repetitions of this complete procedure give independent posterior paths if they use independent randomization. That differs from a one-site Gibbs chain on state trajectories, whose successive paths are dependent and can mix poorly. The forward-backward computations are an exact analytic ingredient for sampling, not themselves a Monte Carlo approximation.

## Missing observations and irregular timing

If an observation is genuinely unobserved under an ignorable mechanism, its likelihood contribution integrates to one, so use a unit emission factor at that time. The hidden transition still occurs. If missingness depends on the state and is informative, the observation indicator has its own state-dependent likelihood and cannot be replaced by one. A model for the recording process is then part of the joint law.

If observations are separated by several hidden transition steps, use the corresponding matrix power when the underlying chain is homogeneous and the interval is a known integer count. For varying transition intervals or continuous-time latent models, derive the appropriate transition kernel instead. Reusing one fixed-step matrix at every irregular time changes the proposed dynamics.

A model with a fixed finite horizon also differs from a model whose stopping rule depends on observed or hidden states. The likelihood of an adaptively terminated record may need the stopping or observation mechanism, depending on the inferential target and assumptions. A product of emissions is not automatically the complete likelihood for every data-collection protocol.

## What the recursions establish

Forward-backward exactly answers filtering, smoothing, likelihood and expected-count questions for fixed model parameters. It does not estimate those parameters unless coupled with a learning method. It does not prove that the chosen number of states is identifiable, that the emissions describe real observations, or that a fitted hidden label has an intrinsic meaning across parameterizations.

The EM chapter uses these posterior expectations to build a likelihood-increasing parameter iteration. The Kalman chapter derives an analogous filtering and smoothing structure for continuous Gaussian states, where linear algebra replaces finite-state sums. In both cases the model, conditional target and learning operation remain separate, even though they share a computational backbone.

## Exercises

<a id="hidden-markov-models-forward-backward-ex-1"></a>

### Exercise 1

Derive the forward recursion from the joint law.

<details><summary>Hint 1</summary>

Condition on the previous latent state.

</details>

<details><summary>Hint 2</summary>

Use its Markov transition and the current emission.

</details>

<details><summary>Full solution</summary>

Summing over all previous paths ending in state i gives its forward weight. Conditional on that endpoint, the next state contributes its transition probability and the next observation its emission likelihood. Summing over i gives the recurrence. The base case is the initial state probability times its first emission likelihood, so induction proves the formula at every time.

</details>

<a id="hidden-markov-models-forward-backward-ex-2"></a>

### Exercise 2

Why is the terminal backward weight one?

<details><summary>Hint 1</summary>

There are no observations after the horizon.

</details>

<details><summary>Hint 2</summary>

The empty likelihood product is one.

</details>

<details><summary>Full solution</summary>

The backward weight is the likelihood of all future observations conditional on the current state. At the terminal time the future list is empty, whose event is certain and whose product likelihood equals one. Choosing a different terminal weight would insert an additional terminal factor and therefore describe a different model or query.

</details>

<a id="hidden-markov-models-forward-backward-ex-3"></a>

### Exercise 3

Compute the first filtering law for the retained example after observing zero.

<details><summary>Hint 1</summary>

Multiply the initial probabilities by the two likelihoods.

</details>

<details><summary>Hint 2</summary>

Normalize their sum .55.

</details>

<details><summary>Full solution</summary>

The two weights are .40 and .15, totaling .55. Their ratios are eight elevenths and three elevenths. These condition only on the first observation; the first smoothing distribution after two zeros is different because it incorporates the future likelihood. Keeping that distinction avoids calling both results the same posterior state probability.

</details>

<a id="hidden-markov-models-forward-backward-ex-4"></a>

### Exercise 4

Check the two pair-marginal sum identities numerically.

<details><summary>Hint 1</summary>

Sum rows and then columns of the displayed table.

</details>

<details><summary>Hint 2</summary>

Compare with the two smoothing distributions.

</details>

<details><summary>Full solution</summary>

The first row sums to twenty-five thirtieths, or five sixths, and the second to one sixth. The first column sums to thirteen fifteenths and the second to two fifteenths. Thus the pair posterior has exactly the two smoothed singleton marginals, as its forward and backward derivation requires.

</details>

<a id="hidden-markov-models-forward-backward-ex-5"></a>

### Exercise 5

Prove that the product of filtering scales is the likelihood.

<details><summary>Hint 1</summary>

Track the relation between unnormalized and normalised forward vectors.

</details>

<details><summary>Hint 2</summary>

Use induction on the prefix length.

</details>

<details><summary>Full solution</summary>

After the first step the forward vector equals its scale times the normalised filter. If this holds through one time, applying the next transition and emission multiplies the new unnormalized vector by all earlier scales. Its new sum is the next scale, proving the prefix relation at the next time. Summing the final unnormalized vector gives the product of all scales.

</details>

<a id="hidden-markov-models-forward-backward-ex-6"></a>

### Exercise 6

Why is Viterbi decoding different from choosing each smoothed marginal mode?

<details><summary>Hint 1</summary>

The objectives penalize different kinds of error.

</details>

<details><summary>Hint 2</summary>

Revisit the two-time table.

</details>

<details><summary>Full solution</summary>

Viterbi maximizes one whole-path probability and minimizes a loss that counts any path error as one. Marginal modes minimize the sum of separate state-error probabilities. In the table the joint mode is 00 while marginal modes form 01. Both optimise their own stated losses, so the decoding target must specify which criterion is intended.

</details>

<a id="hidden-markov-models-forward-backward-ex-7"></a>

### Exercise 7

Derive the backward-sampling conditional given the next sampled state.

<details><summary>Hint 1</summary>

Write the posterior joint weight for the previous state and fixed future.

</details>

<details><summary>Hint 2</summary>

Cancel terms depending only on the fixed next state and later variables.

</details>

<details><summary>Full solution</summary>

The past contributes the previous forward weight and its connection to the fixed next state contributes the transition entry. The next emission and all later factors are constant in the previous state after that next state is fixed. Normalizing therefore leaves weights proportional to the previous forward vector times that transition column. Reverse chain-rule multiplication proves the full sampler.

</details>

<a id="hidden-markov-models-forward-backward-ex-8"></a>

### Exercise 8

When can a missing observation use a unit emission factor?

<details><summary>Hint 1</summary>

Integrate its unobserved value under its state-specific emission law.

</details>

<details><summary>Hint 2</summary>

Check whether the fact of missingness carries information.

</details>

<details><summary>Full solution</summary>

If the recording mechanism is ignorable for the target and no observation value is known, its normalised emission integrates to one. A unit factor is then correct. If the missingness indicator depends on the latent state, observing that indicator has a state-dependent likelihood. Omitting it would remove information and change the joint model.

</details>

<a id="hidden-markov-models-forward-backward-ex-9"></a>

### Exercise 9

Why is a zero filtering scale not repaired by setting it to a tiny positive number?

<details><summary>Hint 1</summary>

It means the observed prefix has zero model likelihood.

</details>

<details><summary>Hint 2</summary>

An arbitrary replacement changes support.

</details>

<details><summary>Full solution</summary>

An exact zero scale means every state has zero prefix weight. The conditional filter under the specified model is undefined there. Inserting positive mass changes the observation model or its numerical representation and cannot be called the same exact inference. Numerical underflow must instead be addressed by stable scaling or log arithmetic that preserves the mathematically positive weights.

</details>

<a id="hidden-markov-models-forward-backward-ex-10"></a>

### Exercise 10

Does exact forward-backward establish that a fitted HMM is a correct model of the data?

<details><summary>Hint 1</summary>

Its theorem conditions on fixed parameters and a stated joint law.

</details>

<details><summary>Hint 2</summary>

Model adequacy is another claim.

</details>

<details><summary>Full solution</summary>

The recursion gives exact conditional quantities within its assumed initial, transition and emission model. It neither verifies those assumptions nor selects a uniquely meaningful latent-state interpretation. Parameter estimation, identifiability, model comparison and sensitivity to observation mechanisms require separate arguments. An exact inference calculation can be exact for a misspecified model.

</details>
