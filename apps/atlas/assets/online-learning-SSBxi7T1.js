var e=`---
parent_id: book-statistical-learning-generalization
chapter_id: online-learning
title: "Online Learning"
level: graduate
estimated_minutes: 200
license: CC BY-SA 4.0
---

# Online Learning

Several earlier statistical bounds assume a fixed distribution $P$ and an iid sample $S$. Online learning abandons both assumptions. The data arrive sequentially, possibly chosen by an adversary, and the learner must make predictions before seeing the outcome. The goal is not to estimate a population risk but to minimize **regret**: the difference between the learner's cumulative loss and the loss of the best fixed predictor in hindsight.

## The online learning protocol

At each round $t = 1, \\dots, T$:

1. The learner chooses a predictor $h_{t} \\in H$.
2. The environment reveals a loss function $\\ell_{t}: H \\to \\mathbb{R}$ (or equivalently, an instance $z_{t}$ and the loss $\\ell(h_{t}, z_{t})$).
3. The learner incurs loss $\\ell_{t}(h_{t})$.

The environment may be adversarial: the sequence $z_{1}, \\dots, z_{T}$ need not be drawn from any fixed distribution, and may even depend on the learner's past actions.

## Regret

The **regret** against a comparator class $H$ is

$$\\text{Regret}_{T} = \\sum_{t=1}^{T} \\ell_{t}(h_{t}) - \\min_{h \\in H} \\sum_{t=1}^{T} \\ell_{t}(h).$$

A sublinear regret bound, $\\text{Regret}_{T} = o(T)$, means that the average regret vanishes:

$$\\frac{1}{T}\\text{Regret}_{T} \\to 0 \\quad \\text{as } T \\to \\infty.$$

This compares the learner with the best fixed comparator in hindsight. It does **not** imply:
- Stochastic population-risk consistency (there is no fixed $P$).
- Low absolute loss (the best comparator may have large loss).
- Low regret against a changing comparator.

## Prediction with expert advice

A canonical online learning problem is prediction with expert advice. There are $M\\ge2$ experts. At each round, the learner chooses a probability distribution $p_{t}$ over experts, incurs the expected loss of the chosen distribution, and then observes the loss of every expert. Starting from equal weights $w_{1,i}=1$, the **exponential weights** (or Hedge) algorithm updates weights as

$$w_{t+1, i} = w_{t, i} \\exp(-\\eta \\ell_{t, i}),$$

where $\\ell_{t, i}$ is the loss of expert $i$ at round $t$ and $\\eta > 0$ is a learning rate. The prediction distribution is $p_{t, i} = w_{t, i} / \\sum_{j} w_{t, j}$.

For bounded losses $\\ell_{t, i} \\in [0, 1]$ and $\\eta = \\sqrt{2\\log(M)/T}$, the exponential weights algorithm achieves

$$\\text{Regret}_{T} \\le \\sqrt{2T \\log M}.$$

**Proof.** The bounded-variable exponential lemma gives
$$\\log(W_{t+1}/W_t)\\le-\\eta L_t+\\eta^2/8\\le-\\eta L_t+\\eta^2/2.$$
Sum this over rounds. Since $W_1=M$ and the final total weight is at least the weight of any fixed expert j,
$$-\\eta\\sum_t\\ell_{t,j}-\\log M\\le
\\log(W_{T+1}/W_1)\\le-\\eta\\sum_tL_t+\\eta^2T/2.$$
Rearrange to get regret against every expert at most $\\log M/\\eta+\\eta T/2$. The displayed choice of eta makes that upper bound $\\sqrt{2T\\log M}$. This retains a conservative constant; the first exponential inequality itself supplies a smaller quadratic remainder. The proof is pathwise for the mixture losses, so losses may depend on past observations and current mixture probabilities. A sampled-action interpretation additionally needs the nonanticipation condition explained below. ∎

## Online gradient descent

Let $H$ be a nonempty closed convex subset of Euclidean space with diameter at most $D$, and suppose each loss is convex with a subgradient $g_t$ satisfying $\\|g_t\\|_2\\le G$ on $H$. Online projected subgradient descent updates

$$h_{t+1} = \\Pi_{H}(h_{t} - \\eta g_t),\\qquad g_t\\in\\partial\\ell_t(h_t).$$

With $\\eta=D/(G\\sqrt T)$ when $D,G>0$, the standard projection argument gives regret at most $DG\\sqrt T$. This statement needs both the bounded diameter and bounded-subgradient hypotheses; convexity alone is insufficient.

For losses strongly convex with a common positive modulus and uniformly bounded subgradients, the decreasing-step proof below gives an explicit logarithmic bound.

## Comparison with statistical learning

Online learning and statistical learning address different questions:

| Aspect | Statistical Learning | Online Learning |
|---|---|---|
| Data | IID from fixed $P$ | Arbitrary sequence, possibly adversarial |
| Goal | Minimize population risk $R(h)$ | Minimize regret against best fixed $h$ |
| Guarantee | High-probability bound on $R(\\hat{h}) - R(h^{*})$ | Bound on $\\sum_{t} \\ell_{t}(h_{t}) - \\min_{h} \\sum_{t} \\ell_{t}(h)$ |
| Complexity | VC dimension, Rademacher complexity | Covering numbers, Littlestone dimension |

An online learning algorithm with sublinear regret can be converted to a statistical learning algorithm via online-to-batch conversion, but the converse is not automatic.

## Common errors

- **Interpreting vanishing regret as vanishing absolute loss.** The best fixed comparator may have large average loss; regret only closes the gap to that comparator.
- **Applying online bounds to IID settings without conversion.** An online regret bound needs a stated online-to-batch argument before it is a population-risk result; no universal ordering of all online and direct statistical bounds is asserted.
- **Ignoring the comparator class.** The average bound $\\sqrt{\\log M/T}$ is uninformative when $\\log M$ is comparable to or larger than $T$; exponential class size alone does not make it vacuous when $T$ is much larger than the problem dimension.

## Worked example: expert advice with numerical regret

Consider $M = 10$ experts and $T = 1000$ rounds. With $\\eta = \\sqrt{2\\log(10)/1000} \\approx \\sqrt{4.605/1000} \\approx 0.0679$, the regret bound is

$$\\text{Regret}_{T} \\le \\sqrt{2 \\cdot 1000 \\cdot \\log(10)} = \\sqrt{2000 \\cdot 2.303} = \\sqrt{4606} \\approx 67.9.$$

The average regret is at most $67.9/1000 = 0.0679$. If the best expert has average loss $0.3$, the learner's average loss is at most $0.368$.

With $M = 100$ experts and the same $T$,

$$\\text{Regret}_{T} \\le \\sqrt{2000 \\cdot 4.605} = \\sqrt{9210} \\approx 96.0,$$

so the average regret bound is $0.096$.

## Mixture loss and a randomized action are distinct objects

The expert theorem first bounds the deterministic weighted loss L at each round. If the learner instead draws an expert from its announced distribution, the realized loss is random. Require the environment to select its loss vector before seeing that current random draw, although it may use the entire past and the current probability vector. Conditional on this information, realized loss has mean L. Its centered increment has interval width at most one.

The bounded-martingale exponential argument then shows that the sum of realized losses exceeds the sum of mixture losses by at most the square root of T log one over delta divided by two, with probability at least one minus delta. Add this to the pathwise mixture regret bound to obtain a high-probability realized-action statement. Expected realized regret against the same pathwise comparator is bounded by the mixture certificate because the martingale sum has mean zero.

If the environment sees the current sampled expert before selecting losses, this argument fails. It can assign loss one to that selected expert and zero to the others. The learner then loses T, whereas the least-selected expert incurs at most T divided by M. Regret is at least T times one minus one over M. This is a complete linear-regret obstruction under that stronger timing model. Nonanticipation is a protocol hypothesis, not a technical preference.

## Projected subgradient descent: the full telescoping proof

Let u be any fixed comparator in the closed convex feasible set. Euclidean projection cannot increase distance to u. Expanding the pre-projection squared distance gives
$$g_t^\\top(h_t-u)\\le
\\frac{\\|h_t-u\\|^2-\\|h_{t+1}-u\\|^2}{2\\eta}
+\\frac\\eta2\\|g_t\\|^2.$$
Convexity bounds the loss difference by the left side. Sum over rounds: the distances telescope, the initial one is at most D squared and subgradient squared norms are at most G squared. Thus regret against u is at most D squared divided by twice eta plus eta T G squared divided by two. The stated fixed step minimizes this expression and gives D G square root T.

Projection exists uniquely for a nonempty closed convex Euclidean set: minimizing squared distance can be restricted to a bounded closed subset and strict convexity gives uniqueness. Its distance inequality follows from the projection variational inequality, obtained by comparing with points on the segment to u. Thus the update's geometric property is available under the displayed set assumptions, not for arbitrary nonconvex constraints.

If every loss is lambda-strongly convex, subtract half lambda times comparator distance squared from the subgradient inequality. Use step one divided by lambda t. In the telescoping sum, the coefficient left on the previous distance exactly cancels the next round's coefficient; the final distance term is nonpositive. What remains is
$$\\operatorname{Regret}_T\\le
\\frac{G^2}{2\\lambda}\\sum_{t=1}^T\\frac1t
\\le\\frac{G^2}{2\\lambda}(1+\\log T).$$
The harmonic-sum bound follows by comparing terms after the first with the integral of one over t. Strong convexity without bounded subgradients would not supply this numerical bound.

## Bandit feedback needs an estimator for unseen losses

Now suppose only the loss of the chosen expert is revealed. Fix an oblivious loss sequence in the unit interval, chosen independently of the learner's random draws. Maintain positive exponential weights, sample I at time t with probabilities p, and define
$$\\widehat\\ell_{t,i}=
\\frac{\\ell_{t,i}{\\bf1}_{\\{I_t=i\\}}}{p_{t,i}}.$$
The conditional expectation of each estimate is its actual fixed loss. Positivity of every probability is essential. Exact exponential weights starting positive remain positive at finite times in real arithmetic; an implementation that drops probabilities to zero is a different procedure.

Update the weights using these estimated losses. For nonnegative x, exp of minus x is at most one minus x plus x squared divided by two. To prove it, the difference has value and derivative zero at zero and nonnegative second derivative. Combine this inequality with log one plus z at most z to get
$$\\log(W_{t+1}/W_t)
\\le-\\eta\\sum_i p_{t,i}\\widehat\\ell_{t,i}
+\\frac{\\eta^2}{2}\\sum_i p_{t,i}\\widehat\\ell_{t,i}^2.$$
The same lower weight comparison as for Hedge yields an estimated regret bound against each fixed expert.

The first weighted estimate sum equals the realized sampled loss exactly. Its quadratic term has conditional expectation equal to the sum of squared expert losses, at most M. Taking expectations, the fixed comparator estimate is unbiased too. Therefore
$$E\\left[\\sum_t\\ell_{t,I_t}-\\sum_t\\ell_{t,j}\\right]
\\le\\frac{\\log M}{\\eta}+\\frac{\\eta MT}{2}.$$
Choose eta as the square root of twice log M divided by M T. For an oblivious sequence its best expert is fixed before the learner randomness, so this proves expected regret at most square root of twice M T log M against that best expert.

The proof is a basic exponential-weights bandit argument. It gives an expectation bound, not a high-probability statement for the potentially large importance estimates. Against an adaptive nonanticipating environment the calculation still controls expected comparison with each fixed expert; moving a random hindsight maximum through those unbiasedness steps needs another argument. The stated oblivious sequence avoids claiming that stronger result without proof.

### Worked example: feedback changes the proved certificate

For four experts and a fixed horizon, the full-information bound is square root of twice T log four, while the bandit expectation bound just proved is square root of eight T log four. The latter is twice the former. This comparison reflects the particular proofs and feedback protocols, not an assertion that every realized bandit run loses exactly twice as much. Full information reveals all losses; bandit feedback estimates the unobserved ones through its action probabilities.

## Online-to-batch conversion with a precise output

Suppose observations are iid and the online predictor at time t depends only on preceding observations and independent seed information. The current observation is then independent of that predictor. Conditional expectation of its current loss equals its population risk. If a pathwise regret theorem bounds cumulative loss difference to every fixed comparator by B T, taking expectation gives average expected predictor risk at most comparator risk plus B T divided by T.

For a convex prediction set and loss convex in prediction, output the arithmetic average of the online predictors. Jensen bounds its risk by their average risk, so
$$E R(\\bar h_T)\\le R(u)+B_T/T$$
for every fixed comparator u with the needed integrability. Use near-minimizers if the comparator risk infimum is not attained. Alternatively, without convexity, output an independently uniformly selected one of the online predictors; its expected risk is their average by conditioning on the trajectory.

These are expected-risk conclusions for stated outputs. A high-probability conversion needs additional concentration or averaging analysis. An arbitrary last iterate is not the arithmetic average and is not selected uniformly, so the same proof says nothing about its risk.

### Worked example: small regret but a poor last iterate infinitely often

Let the feasible predictions be the unit interval, every outcome be zero and loss be squared prediction. An algorithm predicts one at times that are powers of two and zero at all other times. Its best fixed comparator is zero. Cumulative regret is only the number of powers of two up to T, at most one plus log base two of T, so average regret tends to zero.

Yet at every power-of-two horizon, its last predictor has population loss one. The last-iterate risk does not converge to zero. The arithmetic average prediction does converge to zero and has vanishing squared risk, agreeing with the conversion theorem. This exact example separates a cumulative guarantee from an unproved last-iterate claim even in a deterministic iid-compatible experiment.

## A changing comparator is another problem

Regret against one fixed action does not control comparison with an action allowed to switch every round. For independent fair binary outcomes and two constant prediction actions, any nonanticipating learner has expected loss one half per round. A hindsight comparator allowed to match each revealed outcome has zero loss. No algorithm can make that unrestricted dynamic regret sublinear in expectation.

Useful dynamic-comparator results therefore restrict the number or magnitude of switches, just as statistical learning restricts the class or distribution. The expert, convex and bandit bounds in this chapter name their fixed comparator explicitly. Their scope should remain with them when they are used to interpret a sequence, a stream or a population experiment.

## Practice exercises

<a id="online-learning-legacy-1"></a>

### Exercise 1

An algorithm has $o(T)$ regret against the best fixed action. Does that prove its average loss tends to zero? Explain.

<details><summary>Hint 1</summary>

The comparator itself can perform poorly.

</details>

<details><summary>Hint 2</summary>

Take every available action loss to be one.

</details>

<details><summary>Full solution</summary>

No. The best fixed action may itself have large average loss. Vanishing average regret only closes the gap to that comparator. For example, if every action incurs loss $1$ at every round, the best fixed action has average loss $1$, and any algorithm with sublinear regret also has average loss approaching $1$.

</details>

<a id="online-learning-legacy-2"></a>

### Exercise 2

Show what the one-sided exponential-weights regret bound implies about the limiting average regret.

<details><summary>Hint 1</summary>

An upper bound need not bound negative values away from minus infinity on its scale.

</details>

<details><summary>Hint 2</summary>

State the limsup conclusion without asserting a two-sided limit.

</details>

<details><summary>Full solution</summary>

The bound is $\\text{Regret}_{T} \\le \\sqrt{2T \\log M}$. Dividing by $T$ gives

$$\\limsup_{T\\to\\infty}\\frac{\\text{Regret}_{T}}{T}\\le0.$$

This one-sided upper bound does not by itself prove convergence to zero: on a realized sequence, an adaptive learner can outperform the best fixed comparator by a linear amount and have negative average regret. The stronger two-sided statement $\\text{Regret}_T=o(T)$ would imply convergence to zero.

</details>

<a id="online-learning-legacy-3"></a>

### Exercise 3

A researcher applies online gradient descent to a streaming dataset that is actually IID. They observe sublinear regret. Can they conclude that the returned predictor generalizes well to future data from the same distribution?

<details><summary>Hint 1</summary>

A time-average and a last iterate are different outputs.

</details>

<details><summary>Hint 2</summary>

Use iid independence and an explicit online-to-batch construction.

</details>

<details><summary>Full solution</summary>

Not directly. Sublinear regret in the online setting means the algorithm performed well against the best fixed predictor on the observed sequence. Online-to-batch conversion can translate this into a statistical guarantee, but it requires an additional argument: run the online algorithm, average the predictors, and apply a concentration inequality. The raw regret bound does not automatically imply population risk bounds.

</details>

<a id="online-learning-ex-4"></a>

### Exercise 4

State the timing assumption needed to turn a mixture-loss certificate into a randomized-action certificate.

<details><summary>Hint 1</summary>

The current draw must retain its conditional sampling law.

</details>

<details><summary>Hint 2</summary>

The environment may use p but must not see the current selected index first.

</details>

<details><summary>Full solution</summary>

The loss vector must be selected before the current random action is revealed, conditional on the past and current probabilities. Then expected sampled loss equals mixture loss and their difference is a bounded martingale increment. Seeing the action first enables the linear-regret counterexample.

</details>

<a id="online-learning-ex-5"></a>

### Exercise 5

Derive the projected-gradient regret inequality against a fixed u.

<details><summary>Hint 1</summary>

Expand the squared distance before projection.

</details>

<details><summary>Hint 2</summary>

Use nonexpansion to u and convexity of each loss.

</details>

<details><summary>Full solution</summary>

The expansion gives $g_t^\\top(h_t-u)\\le(\\|h_t-u\\|^2-\\|h_{t+1}-u\\|^2)/(2\\eta)+\\eta\\|g_t\\|^2/2$. Convexity bounds the loss gap by this expression. Summing telescopes to $D^2/(2\\eta)+\\eta G^2T/2$.

</details>

<a id="online-learning-ex-6"></a>

### Exercise 6

Prove conditional unbiasedness and the weighted second-moment bound for the bandit estimates.

<details><summary>Hint 1</summary>

Only the sampled coordinate contributes.

</details>

<details><summary>Hint 2</summary>

Cancel its selection probability in expectation.

</details>

<details><summary>Full solution</summary>

$E[\\widehat\\ell_{t,i}\\mid{\\cal F}_{t-1}]=\\ell_{t,i}$ for an oblivious current vector, and $E[\\sum_i p_{t,i}\\widehat\\ell_{t,i}^2\\mid{\\cal F}_{t-1}]=\\sum_i\\ell_{t,i}^2\\le M$. Positive probabilities are required for both expressions.

</details>

<a id="online-learning-ex-7"></a>

### Exercise 7

Why does the simple bandit proof state its best-in-hindsight guarantee for an oblivious sequence?

<details><summary>Hint 1</summary>

The best expert must be fixed relative to the learner randomness when its estimates are averaged.

</details>

<details><summary>Hint 2</summary>

An adaptive random hindsight minimizer is not one fixed comparator.

</details>

<details><summary>Full solution</summary>

The unbiasedness comparison controls each fixed expert. For an oblivious sequence its hindsight best index is fixed in advance, so it can be substituted. With an adaptive sequence that index may depend on learner actions and estimate noise. A uniform or other adaptive-regret argument is then required before selecting it inside the expectation.

</details>

<a id="online-learning-ex-8"></a>

### Exercise 8

Give the exact expected-risk output in the convex online-to-batch theorem.

<details><summary>Hint 1</summary>

Average the online predictors.

</details>

<details><summary>Hint 2</summary>

Use independence of the current observation and convexity.

</details>

<details><summary>Full solution</summary>

Output their arithmetic average in the convex feasible set. The iid conditional-expectation identity converts observed online losses to expected risks, and Jensen bounds risk of the average by average risk. This proves the stated expected comparator bound, not an automatic last-iterate or high-probability statement.

</details>

<a id="online-learning-ex-9"></a>

### Exercise 9

Show why the power-of-two algorithm has small regret but fails last-iterate consistency.

<details><summary>Hint 1</summary>

Count its nonzero predictions.

</details>

<details><summary>Hint 2</summary>

Consider the subsequence of power-of-two horizons.

</details>

<details><summary>Full solution</summary>

It incurs one unit of loss only at powers of two, so regret is at most one plus log base two of T. At those same horizons the last predictor equals one with risk one. Along other horizons it is zero. Thus average regret vanishes but last-iterate risk does not tend to zero.

</details>

<a id="online-learning-ex-10"></a>

### Exercise 10

Why can an unrestricted changing comparator make sublinear regret impossible?

<details><summary>Hint 1</summary>

Let the next binary outcome be an independent fair bit.

</details>

<details><summary>Hint 2</summary>

A hindsight switching comparator can choose that label after seeing it.

</details>

<details><summary>Full solution</summary>

Every nonanticipating learner has expected error one half per round under fair independent labels. A comparator free to select the correct constant action each round has zero cumulative loss. Expected dynamic regret is therefore T divided by two. A switching-budget or variation constraint is needed for a meaningful sublinear guarantee.

</details>

## Looking backward and forward

This chapter developed online and bandit guarantees by examining sequential learning, a setting with fundamentally different guarantees from the statistical learning framework developed in the preceding chapters. The next chapter, "Minimax Lower Bounds: Le Cam, Fano and Noisy Labels," returns to statistical experiments and asks which risk rates no procedure can improve uniformly over a declared model class.
`;export{e as default};