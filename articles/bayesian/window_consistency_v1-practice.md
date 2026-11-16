# Practice with reporting windows and latent rates

Use the lesson's shape-rate Gamma and $\operatorname{NB}(r,p)$ conventions. Counts refer to disjoint intervals, and all hyperparameters are fixed and known. The first two tasks provide scaffolds; later tasks change the observation, partition or scientific interpretation. Attempt each argument before opening its separate [hint](./window_consistency_v1-hints.md) or [worked answer](./window_consistency_v1-answers.md).

## 1 Finish the half-day calculation

Use $\alpha=2,\beta=1/2$ and two half-day cells. For A, $E(\Lambda)=4$, $\operatorname{Var}(\Lambda)=8$, and

$$\operatorname{Var}(Y_1)=E(\Lambda/2)+\operatorname{Var}(\Lambda/2).$$

Finish this calculation and compute the covariance and total variance. Repeat for B with independent half-day rates, and C with independent Gamma integrated-intensity increments. State each half-count's NB distribution and each daily total's distribution.

Then derive all five probabilities for $Y_1\mid S=4$ under each model by dividing a joint PMF by the appropriate total PMF. Check normalization and calculate the probability that either half contains all four events. Explain why conditioning on the same total does not require the total to have the same marginal distribution across the models. Finally state which result applies when B's one original scientific day is only subdivided for reporting.

## 2 Prove a merge identity rather than matching moments

Take arbitrary positive lengths $a,b,c$. Derive the three joint PGFs directly from the conditional Poisson law and the Gamma Laplace transform. Merge the first two windows by setting their PGF arguments equal, keeping the third argument free.

Prove that A and C recover their respective coarse two-window laws. For the reporting-reset recipe B, exhibit the two equal-window factors with $a=b=h$ and compare their product with one newly drawn cell of length $2h$. Explain why equality of means would not establish equality of these distributions. Then supply the correct refined factor for a B scientific cell divided into three reporting subcells, and prove its merge identity. Which independent quantities must stay independent, and which pieces share a rate?

## 3 Forecast after an observed zero

Return to the original half-day case. Observe $Y_1=0$; do not condition on a daily total. Derive the second-half predictive mean, variance and zero probability under A, B with independent half-day cells, and C.

For A, first write the posterior Gamma density up to proportionality and identify both updated parameters. For the other models, identify precisely why their second-interval latent quantities do or do not update. Would B with a single original day cell give the independent-half-day answer? Explain the difference between a conditional-on-total allocation and this sequential forecast.

## 4 Refine the report while keeping the target fixed

Use $n$ equal pieces of the original one-day target. Under the reporting-reset recipe B, derive the exact daily PGF, distribution, mean, variance and zero probability. Evaluate the variance and zero probability at $n=1,2,4,16$. Prove its Poisson$(4)$ distributional limit using the PGF; a variance limit by itself is insufficient.

Compare this result with A, C and a B model whose original scientific cell is one whole day. Explain what must be retained in a data representation to keep that B model unchanged when rows are split. Derive the duration-dependent NB2 shape for C and explain why it does not follow that all overdispersed count models should use that shape.

## 5 Transfer to unequal thirds and changed hyperparameters

Now set $\alpha=3,\beta=1$ and lengths $t_1=1/3,t_2=2/3$. Treat these as two scientific cells when applying the independent-cell version of B. Let $S=Y_1+Y_2$.

Derive the marginal interval-count distributions, the two interval means and variances, their covariance, and the daily mean, variance and zero probability in each model. Determine which daily totals retain the unsplit $\operatorname{NB}(3,1/2)$ law.

Condition on $S=3$ and derive the four probabilities for the first interval's count under A, B and C. For B write its two success probabilities explicitly before selecting a named conditional distribution. Give a finite calculation proving the normalized conditional law. Explain how the result changes the claim that a known Poisson-mixture total always allocates binomially. If B had one original scientific day instead, which allocation law would apply?

## 6 Change the scientific unit and the meaning of an event

A new question concerns two whole days. In A, one Gamma$(2,1/2)$ rate remains shared across both days. In B, the scientifically fixed cells are independent days, each with a fresh Gamma$(2,1/2)$ rate; within each day retain that day's rate when reporting halves. C keeps the Gamma process from the lesson.

Derive the two-day total distribution, mean, variance and zero probability under all three models. Do B and C agree on the joint distribution of the two daily totals? Do they agree on the allocation of a total of four within a particular day? Explain how these answers can coexist.

Finally derive C's batch rates by expanding the logarithm of its PGF. Show that the probability of at least two counted events in a short interval $h$ is of order $h$, and find its coefficient at $\alpha=2,\beta=1/2$. Compare this with A's order-$h^2$ behavior. Give one scientific meaning of a counted event compatible with C's batches and one event-time application where adopting those batches would need a substantive model change. Can one-day count data with the matched distribution establish which construction is appropriate? State what additional evidence would address the distinction.
