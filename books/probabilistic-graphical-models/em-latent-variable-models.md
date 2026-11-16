
# EM and Latent-Variable Models

## Learning parameters with unobserved variables

The expectation-maximization algorithm uses posterior expectations of latent variables to build a tractable parameter update. It is an optimisation procedure for a specified observed-data likelihood, not a method for drawing latent variables and not a guarantee that a global maximum exists. The latent-variable representation can simplify computation while introducing nonidentifiability, local optima or singular parameter boundaries.

Preparation is the joint-law model of Chapter 1, the exact posterior expectations of Chapters 6–7 and the lower-bound identity of Chapter 8. Start with a finite latent space and a differentiable parameter family of positive complete-data probabilities at the fixed observed record. Positivity ensures a common posterior support for the monotonicity derivation. Continuous Gaussian examples below have their own stated positive-variance assumptions.

Let $\ell(\theta)=\log p_\theta(y)$ and define the old posterior $q^{\mathrm{old}}(z)=p_{\theta^{\mathrm{old}}}(z\mid y)$. The expectation step computes the posterior sufficient quantities required by
$$
Q(\theta\mid\theta^{\mathrm{old}})=E_{q^{\mathrm{old}}}\log p_\theta(y,Z).
$$
The maximization step chooses a new parameter maximizing that function over the declared feasible set. A generalized EM step merely increases it. Both need an actual positive improvement or nondecrease in the correct complete-data expectation, not simply an optimizer status message.

## A full likelihood-monotonicity proof

**Theorem 10.1 (Exact EM likelihood monotonicity).** For any fixed q, the evidence identity is
$$
\ell(\theta)=E_q\log p_\theta(y,Z)+H(q)+D(q\|p_\theta(Z\mid y)).
$$
At the old parameter the divergence is zero because q was chosen as its exact posterior. At a new parameter the entropy term is unchanged and the divergence is nonnegative. Subtracting the old identity therefore gives
$$
\ell(\theta^{\mathrm{new}})-\ell(\theta^{\mathrm{old}})
=Q(\theta^{\mathrm{new}}\mid\theta^{\mathrm{old}})-Q(\theta^{\mathrm{old}}\mid\theta^{\mathrm{old}})
+D(q^{\mathrm{old}}\|p_{\theta^{\mathrm{new}}}(Z\mid y))\ge0
$$
whenever the Q improvement is nonnegative. This proves monotonicity, with all terms evaluated under the same old posterior. Replacing that posterior by an arbitrary variational approximation loses equality at the old parameter and need not increase the exact likelihood.

When latent support can change with the parameter, the identity requires finite expectations and compatible support at both steps. The simple positive finite model avoids those difficulties. An implementation that makes a formerly possible configuration impossible can create minus-infinite Q and cannot claim this ordinary proof without checking its domains.

A bounded-above sequence of nondecreasing likelihood values converges as a sequence of real numbers. The parameter sequence need not converge or have a unique limit, and the likelihood may be unbounded in the chosen family. Even a finite stationary limit can be a local maximum, a saddle or a nonidentified point. These qualifications are properties of the optimisation problem, not merely shortcomings of a numerical stopping rule.

## Score identities and fixed points

In a finite positive model, differentiating the observed probability sum gives Fisher's identity
$$
\nabla\ell(\theta)=E_{p_\theta(Z\mid y)}\nabla\log p_\theta(y,Z).
$$
There is no derivative of an arbitrarily frozen posterior on the right: the identity follows by differentiating the marginal sum and then rewriting its normalised terms. In continuous models interchanging differentiation and integration needs domination or another regularity argument.

At an interior EM fixed point whose maximization step is differentiable, the derivative of Q with respect to its first argument vanishes. Evaluating that derivative when the old and new parameters coincide and applying the identity shows that the observed score vanishes too. This gives a stationary-point implication, not a global-maximizer theorem. At a boundary, constrained first-order conditions replace an unconstrained zero score.

The algorithm is also coordinate ascent in a lower bound over both q and theta: the exact posterior is the maximizing q at fixed theta, and the Q maximization is the theta step at fixed q. This interpretation explains its monotonic behaviour. It does not make the joint objective concave or identify one optimal parameterization of a mixture.

## Finite mixtures and responsibilities

For independent observations and a K-component mixture, introduce a component label for each observation. Its joint contribution is $\pi_k f_k(y_i;\eta_k)$. The posterior component probabilities, called responsibilities, are
$$
r_{ik}=\frac{\pi_k f_k(y_i;\eta_k)}{\sum_h\pi_h f_h(y_i;\eta_h)}.
$$
Conditional on the data and parameters, different labels are independent in this iid mixture model, so the complete expectation separates into weighted component log likelihoods and the weight terms $\sum_kN_k\log\pi_k$, where $N_k=\sum_i r_{ik}$.

A Lagrange multiplier under weights summing to one gives the maximum-likelihood update $\pi_k=N_k/n$. If a component expected count is zero, its parameter terms can be unconstrained by Q and require a declared convention; dividing by zero is not an update. Positive mixture weights and positive component densities keep responsibilities positive, but limiting iterates can still approach boundary weights.

Component labels are exchangeable under a symmetric model, so exchanging labels produces the same observed distribution. An optimisation routine choosing one labelling does not make it scientifically identified. Starting every component identically can keep them identical forever, since their responsibility ratios and parameter updates remain symmetric.

## Worked example 1: a nonidentifiable Bernoulli mixture

**Example 10.2 (a nonidentifiable Bernoulli mixture).** Take four observed bits, three successes and one failure. Start a two-component Bernoulli mixture with equal weights and component success probabilities one quarter and three quarters. For a success, the second-component responsibility is three quarters; for the failure it is one quarter. The expected component counts are therefore one and a half and two and a half.

The updated second weight is five eighths. Its weighted success count is nine quarters, giving success probability nine tenths. The first component receives success count three quarters, giving probability one half. Their mixture success probability becomes
$$
\frac58\frac9{10}+\frac38\frac12=\frac34,
$$
the observed success fraction. Recomputing responsibilities gives the same three-quarter and one-quarter values, so these parameters form a fixed point.

This is not evidence that the two latent components have been recovered. A mixture of single Bernoulli observations depends only on its overall success probability. Infinitely many weight-and-component triples yield three quarters and have exactly the same likelihood. Grouped observations sharing a component would constitute another joint model with potentially more identifying information. EM cannot recover parameters that the observed law does not identify.

## Gaussian mixture updates and their domain

For one-dimensional Gaussian components with positive variances, the M step gives each mean as its responsibility-weighted average and each variance as its weighted squared residual about that updated mean, divided by N k. These follow by differentiating the weighted normal log likelihood. The normalising denominator is the expected component count, not an unbiased-sample-variance correction; this is maximum likelihood under Q.

If the feasible set imposes variance at least a positive floor v minimum, maximizing the same one-component objective gives the larger of that floor and the unconstrained weighted variance. To verify it, write the variance-dependent objective as minus one half of $N_k\log v+S_k/v$. Its derivative changes sign at $S_k/N_k$, increasing before that point and decreasing after it. Restricting v to the allowed half-line gives the clipped maximizer. This is a constrained model, not a neutral numerical adjustment.

For multivariate components, the analogous weighted covariance can be singular when too few effective observations support a component. Positive-definite constraints, shared covariance structures or priors change the feasible problem. A formula producing a singular matrix cannot be passed into an ordinary Gaussian density while claiming the original nonsingular model remains unchanged.

## Worked example 2: symmetric initialization can stay collapsed

**Example 10.3 (symmetric initialisation can stay collapsed).** Take observations minus one and plus one, two equal mixture weights, identical means zero, and identical variance one. Each responsibility is exactly one half. Each weighted component mean is zero and its weighted variance is one, so the M step leaves every parameter unchanged. This remains a fixed point for arbitrarily many exact iterations.

A different initialization may separate components toward the two observations and increase likelihood. More seriously, in the unrestricted model one variance can shrink to zero at one observation while the other component retains positive density for every remaining observation. The joint likelihood then becomes unbounded. The unchanged symmetric solution is therefore neither a global optimum certificate nor a demonstration that a finite global maximum even exists.

To prove unboundedness, give the collapsing component a fixed positive weight smaller than one and centre it at one recorded observation. Its density at that point grows like inverse standard deviation. Keep a second positive-variance component with positive density at every observation; it supplies a strictly positive lower bound for their mixture densities. The likelihood product diverges because one factor diverges and all others stay bounded below. A variance floor prevents this specific escape by changing the model's parameter domain.

## HMM expected counts and the Baum-Welch M step

For a finite HMM, the E step is forward-backward. Its smoothed gamma values give expected state occupations and its xi values give expected transition counts. The initial probability update is the first gamma vector. A permitted transition row updates to
$$
A_{ij}^{\mathrm{new}}=\frac{\sum_{t=1}^{T-1}\xi_t(i,j)}{\sum_{t=1}^{T-1}\gamma_t(i)}.
$$
The denominator equals the numerator summed over destination states by the pair-marginal identity. Thus the row normalizes whenever its expected departure count is positive. For categorical emissions, the update similarly divides expected state-specific symbol counts by total expected occupation counts over all observation times.

For several independent sequences, sum transition and emission expectations over their separate records. Initial probabilities use the sum of first-time state expectations, normalised by the number of records. Do not invent a transition from the end of one independent record to the start of another. That concatenation would change the complete-data likelihood and bias the transition update.

## Worked example 3: one HMM transition update

**Example 10.4 (one HMM transition update).** Use the two-zero HMM record from Chapter 7. Its single pair table has rows $(4/5,1/30)$ and $(1/15,1/10)$. The expected departure counts are five sixths and one sixth. Dividing each row by its sum gives updated transition rows $(24/25,1/25)$ and $(2/5,3/5)$.

Both observed symbols are zero. With an unrestricted categorical emission model on zero and one, each state's expected positive occupation count sees only zeros, so its M step sets zero-emission probability to one. This is a boundary maximum for this tiny record, not a reliable discovery that future ones are impossible. A prior, shared emission restrictions or more data may yield another problem and another update. The example illustrates why a likelihood-increasing step alone is not a model-adequacy or uncertainty claim.

Structural transition zeros stay zero in the E step because their pair weights are zero. If they are fixed by the model, maximize only over permitted edges. If they are merely an unfortunate initialization in a larger permitted family, an EM iterate can fail to revive them. The declared topology and initialization therefore both matter; arbitrary positive padding changes one or both.

## Priors and approximate E steps

For maximum a posteriori estimation, add the log prior to the theta objective. The same lower-bound argument proves monotonicity of the observed log likelihood plus log prior, not of the observed likelihood alone. With Dirichlet weight parameters all strictly above one, the interior weight update adds alpha k minus one to each expected count and normalizes their sum. This is a posterior-mode update. A posterior mean would use alpha k instead and is a different estimator.

Priors with parameters at or below one can have boundary modes or unbounded densities, requiring a separate constrained analysis. Calling every pseudocount rule an exact MAP M step would hide that distinction. The probabilistic meaning of regularization belongs in the model and objective, rather than being inferred from a convenient formula.

Monte Carlo EM approximates the E expectation with samples; variational EM restricts q; incremental methods use other update schedules. Their exact likelihood monotonicity does not follow from the ordinary proof, since its old-posterior equality or exact Q increase can fail. They can be useful, but their approximation and optimisation claims must be stated separately.

## Choosing an augmentation and interpreting a stopping point

Two latent-variable representations can have the same observed likelihood but different complete-data expectations and different EM trajectories. Adding artificial missing variables can make an M step easier or slower without changing the statistical target. The augmentation is computational structure, not newly observed evidence.

At a reported stopping point, distinguish a small change in likelihood, a small parameter update, a small score or constrained optimality residual, and a comparison across starting values. Each supports a different claim. None alone resolves nonidentifiability, label symmetry, model misspecification or an unbounded likelihood. The later parameter-learning and model-selection chapters place these optimisation outputs inside an explicitly stated statistical problem.

## Exercises

<a id="em-latent-variable-models-ex-1"></a>

### Exercise 1

Prove EM likelihood monotonicity from the posterior lower bound.

<details><summary>Hint 1</summary>

Use the old exact posterior as q.

</details>

<details><summary>Hint 2</summary>

Its old divergence is zero and its new divergence is nonnegative.

</details>

<details><summary>Full solution</summary>

The evidence identity holds at each parameter with the same old q. Subtracting leaves the change in Q plus the new divergence, since the old divergence vanishes and the entropy cancels. A nonnegative Q change therefore gives a nonnegative likelihood change. The argument relies on exact posterior expectations and compatible finite log terms, not merely a computed parameter update.

</details>

<a id="em-latent-variable-models-ex-2"></a>

### Exercise 2

What does generalized EM relax?

<details><summary>Hint 1</summary>

Inspect the required Q inequality.

</details>

<details><summary>Hint 2</summary>

A global M-step optimum is sufficient but not necessary.

</details>

<details><summary>Full solution</summary>

Generalized EM requires only that the new parameter not decrease the old-posterior Q function. The same monotonicity proof then applies. It does not require a global maximizer of Q at every step, but it must establish the actual nondecrease for the stated objective. An approximate or failed numerical step does not automatically satisfy that condition.

</details>

<a id="em-latent-variable-models-ex-3"></a>

### Exercise 3

Derive the mixture weight update.

<details><summary>Hint 1</summary>

Optimize the expected label log probabilities under a simplex constraint.

</details>

<details><summary>Hint 2</summary>

Use a Lagrange multiplier.

</details>

<details><summary>Full solution</summary>

The relevant function is the sum of expected component counts times log weight. At positive counts, its derivative sets each weight equal to its count divided by the common multiplier. Summing weights to one sets that multiplier to n. Thus the update is expected count divided by sample size. Zero-count components require boundary or convention handling rather than division by their own zero count.

</details>

<a id="em-latent-variable-models-ex-4"></a>

### Exercise 4

In the Bernoulli-mixture example, recover the updated second-component success probability.

<details><summary>Hint 1</summary>

Count its weighted successes.

</details>

<details><summary>Hint 2</summary>

Divide by its total expected component count.

</details>

<details><summary>Full solution</summary>

The three observed successes each contribute responsibility three quarters, giving weighted successes nine quarters. The failure contributes one quarter to its occupation count, bringing that count to five halves. Their ratio is nine tenths. The update is one of many parameterizations of the same fitted Bernoulli mean, so it does not identify a uniquely recoverable latent component.

</details>

<a id="em-latent-variable-models-ex-5"></a>

### Exercise 5

Why does a Gaussian mixture likelihood become unbounded without variance constraints?

<details><summary>Hint 1</summary>

Collapse one component on one observed value.

</details>

<details><summary>Hint 2</summary>

Keep another component positive at all remaining values.

</details>

<details><summary>Full solution</summary>

The collapsing component density at its centre diverges as its standard deviation decreases to zero. Give it a fixed positive weight, while a second fixed normal component retains a positive lower bound at every observed point. The likelihood product then diverges. Thus the unrestricted family need not have a finite maximum, regardless of whether a particular EM run appears to settle.

</details>

<a id="em-latent-variable-models-ex-6"></a>

### Exercise 6

Derive the variance-floor update for a one-dimensional Gaussian component.

<details><summary>Hint 1</summary>

Write its variance objective using the weighted residual sum.

</details>

<details><summary>Hint 2</summary>

Check the sign of its derivative on the permitted interval.

</details>

<details><summary>Full solution</summary>

The objective is minus one half times expected count times log variance plus weighted residual sum divided by variance. Its derivative is positive below the residual average and negative above. On variances at least the positive floor, the maximum is therefore the residual average if allowed and the floor otherwise. This solves a constrained M step and changes the model domain.

</details>

<a id="em-latent-variable-models-ex-7"></a>

### Exercise 7

Compute the first transition row in the two-time HMM update.

<details><summary>Hint 1</summary>

Use its expected transition row and departure count.

</details>

<details><summary>Hint 2</summary>

Normalize $(4/5,1/30)$ by five sixths.

</details>

<details><summary>Full solution</summary>

Dividing four fifths by five sixths gives twenty-four twenty-fifths. Dividing one thirtieth by five sixths gives one twenty-fifth. Their sum is one, as guaranteed by the pair-marginal sum identity. The row is a likelihood update based on one uncertain transition, not an assessment of its finite-sample stability.

</details>

<a id="em-latent-variable-models-ex-8"></a>

### Exercise 8

Why should independent HMM records not be concatenated with an ordinary transition between them?

<details><summary>Hint 1</summary>

Write the joint likelihood for separate records.

</details>

<details><summary>Hint 2</summary>

Each record has its own initial distribution factor.

</details>

<details><summary>Full solution</summary>

The likelihood is the product of record-specific initial and within-record transition factors. There is no transition from one record terminal state to the next initial state. Concatenation inserts such a factor and removes an initial factor, creating a different dependence model and incorrect expected-count update. Sum each record expectations separately instead.

</details>

<a id="em-latent-variable-models-ex-9"></a>

### Exercise 9

Does MAP EM guarantee that the observed likelihood increases?

<details><summary>Hint 1</summary>

Identify the theta objective with the prior included.

</details>

<details><summary>Hint 2</summary>

The prior can trade likelihood against parameter preference.

</details>

<details><summary>Full solution</summary>

The monotonic quantity is observed log likelihood plus log prior. An increase in that sum can occur with a decrease in likelihood if the prior improves enough. The exact lower-bound proof applies to the penalized objective, so omitting the prior from the reported monotonicity claim would change the conclusion.

</details>

<a id="em-latent-variable-models-ex-10"></a>

### Exercise 10

Why does replacing the exact E step by mean-field inference lose the ordinary monotonicity proof?

<details><summary>Hint 1</summary>

At the old parameter the variational gap may already be positive.

</details>

<details><summary>Hint 2</summary>

Subtract the two evidence identities.

</details>

<details><summary>Full solution</summary>

The old divergence is no longer zero. Improving a restricted lower bound does not control the difference between its old and new gaps to the true likelihood. The exact likelihood can therefore decrease even if the variational objective increases. Variational EM is coordinate optimisation of its own lower bound, with approximation error that must be kept separate from exact EM.

</details>
