# Hints for group selection and member selection

Try [practice](./informative_size_v1-practice.md) first. Each section supplies a route into its matching task; the complete calculations remain in [answers](./informative_size_v1-answers.md).

## 1 Normalize the first acceptance

On one attempt, rejection requires a small group and one of its rejecting tickets. A large acceptance has no ticket rejection within a large group. For $K=k$, require $k$ independent rejections and then the specified raw acceptance event. Use $\sum_{k\ge0}x^k=1/(1-x)$ for $|x|<1$. The two first-acceptance types should form a normalized distribution.

## 2 Update after a small group is observed

Use the normalized first-accepted-$S$ likelihood from task 1, not the one-attempt small acceptance probability. Multiply each likelihood by its prior mass and divide by their sum. For a future prediction, retain each candidate population while selecting a group or member, compute its success probability, and only then average with the posterior weights. The hypothesis probability and the future success probability are different quantities.

## 3 Prove the target difference

Place the two group expectations over the common positive denominator $E_G(N)$. The resulting numerator has the form defining covariance. For the lesson's population, use $N=1+2Z$ and $\mu=1/4+Z/2$ for one uniformly selected group's indicator $Z$. Conditional fixed-composition calculations should precede posterior averaging.

## 4 Compare two orders of normalization

At each candidate population, calculate its acceptance probability and its accepted-success probability per attempt. If the population is redrawn every attempt, average both raw probabilities over the proposal distribution **before** summing the common rejection series. Accepted populations are selected by their acceptance probabilities. If the population persists, its own rejection series is summed first.

## 5 Use a recorded rejection history

The logged event specifies three raw attempt outcomes, with no earlier acceptance. Its probability is their product conditional on the persistent composition. For a two-stage update, divide $\Pr(K=2,\text{first type }L\mid r)$ by $\Pr(\text{first type }L\mid r)$ to find the conditional likelihood of the additional rejection-count observation. Compare what cancels.

## 6 Change both size and the logged observation

There are now two tickets, so a small group rejects on one ticket and accepts on the other. Write those raw probabilities anew before multiplying them for $RS$. For all-member predictions, the total member count is now four times $1+r$, while the weighted sum of mean risks changes with the new large size. The probability of large-group membership uses member counts in its numerator and denominator; a success prediction additionally uses the type's Bernoulli mean.
