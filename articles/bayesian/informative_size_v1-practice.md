# Practice with group selection and member selection

Use the lesson's two-composition prior and fixed four-group population unless a task explicitly changes the design. Group proposals use replacement, tickets are fresh and independent, and a future success probability is a Bernoulli mean rather than a realized binary fraction. Write the observed event and the future selection rule before calculating. [Hints](./informative_size_v1-hints.md) and [answers](./informative_size_v1-answers.md) are separate.

## 1 Normalize the first acceptance

For each possible $r$, list the one-attempt probabilities of rejection, accepted large and accepted small. Check that they sum to one. Let $K$ count rejected attempts before the first acceptance.

Derive the joint probabilities of $K=k$ and first accepted type $L$ or $S$. Sum over $k\ge0$ to obtain the two likelihoods when only the accepted type is recorded. Check normalization for each composition. Explain why using $r$ as the likelihood for an unlogged first accepted large type changes the observed event.

## 2 Update after a small group is observed

Change the observation to first accepted type $S$, with the rejected-attempt count still unrecorded. Derive the evidence and posterior composition weights. Then predict a future success under both rules: uniform group followed by uniform member, and uniform member among all members of the same persistent population.

Identify the quantity that answers the question “is the high-large-group composition true?” Explain how its meaning differs from each future success probability. Predict the direction of each change from the lesson's $L$ observation before calculating. Use the explorer to check only after completing the update.

## 3 Prove the target difference

For an arbitrary fixed finite population of positive-size groups, derive the identity relating $\mu_I-\mu_G$ to the covariance of group size and group mean risk under a uniform group draw. Does unequal size alone imply that the member target is larger? State a sufficient condition for equality that permits different group sizes.

Apply the identity at both compositions in the lesson, then average their differences using the posterior after $L$. Explain why the covariance in the identity is conditional on a fixed population. Does representing a uniformly chosen group's large indicator as Bernoulli$(r)$ imply independent group types for all four groups?

## 4 Compare two orders of normalization

After observing $L$, derive both $E_\pi[\mu_I(r)]$ and

$$Q=\frac{E_\pi[E_G(N\mu)]}{E_\pi[E_G(N)]}.$$

Explain why the first predicts a member outcome in one persistent unknown population. Construct a proposal-and-rejection experiment that has $Q$ as its success probability, using the same posterior but a newly drawn composition on **every proposal attempt**. Derive its accepted composition weights and show the two predictive answers differ. Would drawing the composition once per complete future recruitment run produce $Q$? Justify your answer from the conditional probabilities.

## 5 Use a recorded rejection history

Return to the original size-three population and ticket rule, and start from the original two-composition prior. The record now says: **exactly two rejected attempts, followed by the first acceptance, which was from a large group**. Denote this full event by $RRL$. The rejected-attempt count is recorded in this task.

Derive the likelihood under each composition directly from the three attempts. Update the prior, and compute future group-then-member and all-member success probabilities in the same persistent population. Compare with the lesson's unlogged-$L$ update. Explain why multiplying $\rho(r)^2$ by the normalized unlogged-$L$ likelihood is not the probability of this logged event. If you update in two stages, first on the accepted type and then on $K=2$, derive the correct conditional factor for the second stage.

## 6 Change both size and the logged observation

This task changes the model and lies outside the explorer. Keep four groups and the original prior on $r$, but let **large groups have two members**; small groups still have one. Keep future success risks $1/4$ for small-group members and $3/4$ for large-group members. On every attempt choose a group uniformly with replacement and an independent ticket uniformly from $\{1,2\}$. Accept when the ticket is no greater than the chosen group size.

Starting from the original prior, observe **exactly one rejection followed by the first acceptance, which is small**, denoted $RS$. Derive its likelihood, evidence and posterior weights. Predict future success under both group-then-member and all-member selection. Also predict whether a uniform future member belongs to a large group. Finally calculate the ratio of posterior expected risk totals to posterior expected member totals and explain which different redraw-per-proposal experiment it represents here.

Before using any size-three formula, identify which terms change. Explain why a two-member group's success risk $3/4$ is meaningful even though three quarters of two is not an integer. After a delay, reconstruct a likelihood for a different logged sequence from the raw attempt probabilities and explain your prediction target in words before writing a formula.
