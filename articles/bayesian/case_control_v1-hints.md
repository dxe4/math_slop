# Hints for fixed outcome sampling

Try [practice](./case_control_v1-practice.md) first. The numbered hints follow the same route; [worked answers](./case_control_v1-answers.md) contain complete calculations. Tasks 5–6 are optional advanced extensions.

## 1 Transform probabilities under outcome only selection

Multiply each $Y=0$ source cell by $1/R$, leave each $Y=1$ cell unchanged, and only then divide all four cells by their total. For a risk conditional on $X$, the global normalizer cancels within its row. For an odds, divide the row's $Y=1$ cell by its $Y=0$ cell. Compare how a common $R$ enters each odds and how it enters their ratio. The stated rule requires $R\ge1$.

To average source risks into source prevalence, both the weights and the conditional risks must describe the source distribution. Correcting only the $X$ weights does not undo changed conditional risks.

## 2 Derive the actual fixed quota likelihood

There are two independent binomial characteristic counts, one within each fixed outcome stratum. Include their binomial coefficients for the exact count-data probability. The posterior density needs only parameter-dependent terms. Add one to each count for its uniform Beta prior; retain a separate normalized prevalence density.

Ask whether the 21 and 11 outcome totals could have varied in this experiment. They are conditioning information fixed by design. For an ordered record, there is one sequence rather than a collection of equally probable orderings. A dependent prior requires examining its conditional law for $\pi$ after learning $a,b$.

## 3 Separate an association summary from an absolute risk

Construct the four cells from an outcome margin times a characteristic probability within that outcome. Their cross-product cancels $\pi(1-\pi)$. For positive denominators, compare $a(1-b)$ with $(1-a)b$.

For the mean OR, factor the expectation into an $a$ odds moment and a $b$ inverse-odds moment using posterior independence. For OR at posterior means, calculate each mean first; do not reuse those odds moments. For source risks, normalize cells within the same $X$ row.

The optional integral is $\int_0^1f_a(x)F_b(x)\,dx$. Each term of the supplied finite sum is a Beta integral. All seven terms are positive, which makes this a convenient exact-arithmetic calculation.

## 4 Transfer to different counts and a different outcome margin

The new case characteristic counts are four and two; the new control characteristic counts are one and three. Reset the priors before adding these counts. When calculating the mean OR, check the conditions for the two Beta odds moments: a finite mean can be much larger than OR at the means.

The additional unfiltered dataset observes a random $Y$ count with ten trials. Its likelihood uses $\pi$, not $a$ or $b$, because no characteristics are recorded. Contrast that with the fixed audit case fraction, which did not come from random source $Y$ draws.

## 5 Optional compatible priors and the full odds ratio law

Independent unit-rate Gamma variables normalized by their sum generate a Dirichlet table. Group by columns to obtain retrospective coordinates, and by rows to obtain prospective coordinates. Within a Gamma pair, its normalized ratio is Beta and independent of its sum.

For the posterior coupling, simplify the odds before multiplying: every within-pair sum cancels. Both OR expressions reduce to one cross-product of the same four Gammas. For prevalence from the normalized table, sum the two $Y=1$ Gamma shapes and the two $Y=0$ shapes. Compare that law with the unchanged Beta$(2,2)$ under the actual design.

For the unmatched half-prior calculation, add one half to the four counts only in the formal prospective model, then use Beta odds moments. A common Dirichlet half prior would also change the retrospective coordinate priors; it does not leave the core uniform-$a,b$ model fixed. Theorem 2 states a sufficient condition; it does not supply an unrestricted converse.

## 6 Optional derive a different control recruitment likelihood

The two raw acceptance probabilities are $b/3$ and $(1-b)/9$. Their sum is the per-proposal acceptance probability. For exactly $k$ rejections followed by accepted $X=1$, multiply $(b/3)$ by the $k$th power of the raw rejection probability. Sum over $k\ge0$. Keep $b$ fixed throughout the proposals when deriving that conditional likelihood.

The ordered case pair contributes $a(1-a)$ with no factor of two. Integrate it and the control factor separately, using polynomial division or the substitution $u=1+2b$ for the latter. The control normalizer depends on the integral, not on a Beta conjugacy rule.

For mean OR, use the Beta odds identity after obtaining the case posterior. In the control integral, multiplication by $(1-b)/b$ simplifies its numerator. For the probability OR exceeds one, first derive and factor the case posterior survival polynomial at $b$, then multiply it by the independent control posterior density. Look for a cancellation. The known-table check needs characteristic-dependent control cell weights, not the outcome-only rule from task 1.
