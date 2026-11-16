# Worked answers for Bayesian experiment design

Use these after attempting [the practice tasks](./experiment_design_v1-practice.md). Compare your assumptions, denominators, action choices and units as well as the final number.

## New service cost

Service becomes preferable when $20q(\text{jammed})>6$, so the threshold is $3/10$. Before measurement the jam rate is $1/10$, so run still minimizes loss at 2.

| Result | Posterior jam probability | Run loss | Service loss | Best action | Minimum loss |
|---|---:|---:|---:|---|---:|
| Positive | 1/2 | 10 | 6 | Service | 6 |
| Negative | 1/82 | 10/41 | 6 | Run | 10/41 |

Expected risk is $(9/50)6+(41/50)(10/41)=32/25$. EVSI is $2-32/25=18/25$; net value is $18/25-1/4=47/100>0$. Choose the jam probe over acting now if these are the only alternatives.

EIG remains 0.211081 bits because the prior and measurement likelihoods have not changed. Losses enter the decision calculation, not the state-observation joint distribution. Perfect state information would lead to run in ready/worn and service in jammed; its expected risk is $(1/10)6=3/5$. The improvement ceiling is now $2-3/5=7/5$, smaller than the original $17/10$.

## Changed ready and worn mixture

The new wear-positive weights are $(3/100,27/50,11/300)$, totaling $91/150$. Negative probability is $59/150$.

| Wear result | Posterior ready | Posterior worn | Posterior jammed | Best action |
|---|---:|---:|---:|---|
| Positive | 9/182 | 81/91 | 11/182 | Run |
| Negative | 81/118 | 9/59 | 19/118 | Service |

A negative result raises jam probability to $19/118\approx0.1610$, crossing the threshold $3/20=0.15$. “Negative” describes a recorded outcome; it does not encode whether every consequential state becomes less probable.

Wear expected risk is

$$
\frac{91}{150}\left(20\frac{11}{182}\right)+\frac{59}{150}(3)
=\frac{11}{15}+\frac{59}{50}=\frac{287}{150}.
$$

EVSI is $2-287/150=13/150$. Net value is $13/150-1/4=-49/300$. It improves the free-information decision slightly but costs more than this improvement. The jam probe's likelihood distinguishes jam from all nonjammed states equally, so swapping their masses leaves its result probabilities, jam posteriors, optimal decisions and EVSI unchanged. Its net value is still $101/100$.

Originally the wear-positive rate among nonjammed machines was $11/30$. Now it is $((3/10)(1/10)+(3/5)(9/10))/(9/10)=19/30$. The jammed positive rate stays $11/30$, so the result has become informative about jam. Fixing only the overall jam rate did not fix the mixture of other hypotheses.

The changed wear EIG is approximately 0.450013 bits. A negative net decision value means the available decision improvement is smaller than the price. It does not mean the state and measurement are independent.

## Incorrect calculations

Move the minimization over actions inside the average over results. For the original jam probe, acting on the averaged posterior yields prior risk 2. Acting optimally within each branch yields risk $37/50$. The difference $63/50$ is the EVSI the incorrect calculation loses.

Zero value is correct if a single action is optimal in every positive-probability result branch, as with the original wear assay. Exact action ties are allowed: the API returns every minimizing action rather than declaring a unique one.

EIG is measured in bits; the 1/4 cost is in loss units. A combined objective needs an explicit preference relating bits to losses, or a loss function expressing how information itself affects consequences. Merely subtracting the numbers omits that choice.

## Repeated evidence

The probability of two positives is $(9/10)(1/10)^2+(1/10)(9/10)^2=9/100$. The squared marginal probability is $(9/50)^2=81/2500$, a different number. The shared uncertain state makes the test results dependent before conditioning on the state.

Jam contributes joint weight $(1/10)(9/10)^2=81/1000$. Dividing by $9/100$ gives posterior jam probability $9/10$. One positive gives $1/2$, and copying that same observation leaves it at $1/2$. A persistent sensor fault affecting both assays would create additional dependence even conditional on the machine state.

A fixed pair incurs both costs and commits to taking both measurements. An adaptive policy must compare acting after the first result with buying a second assay at each reachable posterior; the second assay's expected value depends on that branch, while its cost remains 1/4 here. This module evaluates fixed designs and does not solve that policy optimization.

## Delayed retrieval

1. Average using the prior predictive distribution of outcomes under each design. Do not assume outcomes are equally probable.
2. A surprising observation can spread probability over states, raising its posterior entropy. EIG averages entropy change across all outcomes and equals expected posterior-to-prior KL divergence. A single entropy change need not equal that result's KL divergence.
3. The observation can distinguish states that share the same losses, or fail to move any posterior across an action threshold. The original wear assay illustrates the first mechanism.
4. The old action remains available after any result, so optimized expected free-information risk cannot exceed the old risk. Paying for the observation can outweigh the improvement.
5. It contributes zero to the expectation. Its posterior is undefined under the model; `evaluate` reports `None` for posterior and risk, with no chosen action.
6. Conditional independence permits multiplying likelihoods within a fixed state. Averaging over a shared unknown state generally creates dependence between the outcomes.
