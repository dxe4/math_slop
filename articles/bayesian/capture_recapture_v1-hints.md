# Hints for matched capture practice

Attempt [practice](./capture_recapture_v1-practice.md) before opening a hint. Full derivations remain on the separate [worked answers](./capture_recapture_v1-answers.md) page.

## 1 Count subsets and update the population prior

Choose the tagged part of a second subset separately from its untagged part. Feasibility requires both counts to fit their available categories. Each complete subset has exactly one overlap value, which proves normalization by partitioning all subsets. For the posterior, multiply by the declared prior before calculating the evidence.

## 2 Change the overlap and the target quantity

Replace the overlap in both binomial coefficients; do not change the prior. The recorded union has size first sample plus second sample minus their overlap. Compare $E(N)-u$, using each analysis's own $u$, rather than comparing total-population means alone.

## 3 Forecast the independent audit

Given $N$ and union size $u$, divide members into $N-u$ previously unrecorded and $u$ recorded individuals. Apply the uniform-subset counting argument to the audit. Average each probability over integer $N$. For the mean, the relevant posterior quantity is $E(1/N)$, which is generally different from $1/E(N)$.

## 4 Specify a biased sampler before selecting a distribution

For a single attempt, multiply a subset's uniform proposal probability by its acceptance probability. Summing over unrecorded repeated failures divides by the total acceptance probability. Group accepted subsets by tag count. For the sequential comparison, update both tagged and untagged remaining weights after every draw; the orders with one tag are TUU, UTU and UUT.

## 5 Change the prior support and test what the data learned

Recalculate the same likelihood at all eight candidates and normalize. Conditioning the resulting posterior on its first four support points renormalizes exactly those four likelihood weights. A zero prior mass remains zero after Bayes updating, even where the observation would have had positive likelihood.

## 6 Transfer to a changed second sample size

Use sample size two in the denominator and select one tagged and one untagged member in the numerator. The observed union now contains four members. Keep the prior support and the known union separate. Closure, identifier recognition and complete-subset selection each contribute different assumptions to the likelihood.
