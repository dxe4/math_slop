var e=`---
id: visual-lab-kaplan-meier
title: "Kaplan–Meier Risk-Set Laboratory"
level: undergraduate
estimated_minutes: 100
license: CC BY-SA 4.0
---

# Kaplan–Meier Risk-Set Laboratory

[Launch the live laboratory](#/labs?lab=visual-lab-kaplan-meier).

The laboratory turns right-censored event records into a product-limit survival curve. It is designed as an arithmetic audit, not a decorative curve: every plotted step has an exact risk-set row, every censoring mark has a stated convention, and the full numerical table remains useful if Canvas is unavailable.

It connects the [first encounter](#/item/deep-dive-advanced-statistics-first-encounter), [GLM and event-data deep dive](#/item/deep-dive-glm-survival-event-data), and [reference theory](#/item/book-advanced-statistical-inference-reference).

## Mathematical contract

For each participant, the engine accepts a finite nonnegative observed time and status \`event\` or \`censored\`. It assumes ordinary right censoring. At each distinct recorded time $t_i$, it computes:

- $n_i$: participants with observed time at least $t_i$, hence at risk just before it;
- $d_i$: events recorded at $t_i$;
- $c_i$: censoring marks recorded at $t_i$;
- conditional survival factor $(n_i-d_i)/n_i$;
- cumulative estimate $S_hat(t_i)=product_{j\\le i}(n_j-d_j)/n_j$.

Participants tied at a time are all included in the pre-time risk set. Events are applied before tied censoring marks leave later risk sets. A censoring-only time has factor 1 and creates no vertical drop.

The engine stores cumulative survival as a reduced integer fraction. Decimals are display conveniences. It also reports the estimated median, defined as the first recorded event time at which $S_hat\\le 1/2$, and restricted mean through the final observation,

$RMST(\\tau )=integral from 0 to \\tau of S_hat(t) dt$,

with $\\tau$ equal to the final observed time. This truncated area does not extrapolate an unseen tail.

## Uncertainty contract

For $0<S_hat(t)<1$, Greenwood’s variance estimate is

$V_hat[S_hat(t)]=S_hat(t)^2 \\sum_{t_i\\le t} d_i/[n_i(n_i-d_i)]$.

The interface offers 90%, 95%, and 99% pointwise complementary-log-log intervals. Transforming helps keep endpoints in $[0,1]$. At survival exactly 0 or 1 the chosen transform is undefined, so the table prints an em dash instead of manufacturing an endpoint.

These are pointwise large-sample intervals, not a simultaneous confidence band and not Bayesian posterior intervals. Population interpretation of this unstratified curve and its intervals assumes independent participants and marginal independent, non-informative right censoring over a time range with positive follow-up probability. Independence of event and censoring times only after conditioning on covariates does not by itself justify this pooled calculation: the engine receives only observed time and status, and performs no covariate stratification, weighting or standardisation. The intervals omit uncertainty about model choice and unrecorded informative dropout.

## A manual example

Five participants have records:

$(1,event), (2,censored), (3,event), (3,censored), (4,event)$.

The exact table is:

| time | at risk | events | censored | factor | survival |
|---:|---:|---:|---:|---:|---:|
| 1 | 5 | 1 | 0 | $4/5$ | $4/5$ |
| 2 | 4 | 0 | 1 | $1$ | $4/5$ |
| 3 | 3 | 1 | 1 | $2/3$ | $8/15$ |
| 4 | 1 | 1 | 0 | $0/1$ | $0$ |

The median is time 4 because $8/15$ remains above one half and the final event moves survival to zero. The restricted mean through 4 is

$1(1)+1(4/5)+1(4/5)+1(8/15)=47/15\\approx 3.133$ time units.

Notice that the censor at time 2 changes the risk set at time 3 but not survival at time 2. At time 3 the event and censor are both among the three at risk before that time.

## Interface and access

All controls are native labeled selects or checkboxes and work by keyboard. Choose among a mixed sample, a heavily censored sample whose median is not reached, and a sample with event–censor ties. The confidence display can be hidden without changing point estimates.

The Canvas has a complete \`aria-label\` containing sample size, event and censor counts, final estimate, and median status. The adjacent HTML table is the authoritative exact fallback. It exposes time, risk count, event count, censor count, conditional factor, cumulative fraction, decimal estimate, and interval. The graphic has no animation or pointer-only state, so reduced-motion preferences need no alternate timeline.

Colour is redundant: the survival path is a step, censoring marks are vertical ticks, and interval bars are separately shaped and numerically tabulated. If Canvas initialization fails, an explicit status message directs the learner to the unaffected table.

## Investigations

### 1. Heavy censoring

Choose “Heavy censoring.” Explain why the final survival estimate can exceed one half and the median is “not reached.” Do not call the median infinite. Follow-up simply did not produce enough supported events to locate it.

### 2. Tied records

Choose “Tied events and censoring.” For the first tied time, calculate $n$, $d$, and $c$ by hand. Verify that the factor uses the full risk set and only $d$ in its numerator. Then count who remains for the next time.

### 3. Confidence level

Switch 90% to 99%. The point estimate and exact fractions remain fixed; pointwise intervals widen. Explain why scanning all time points for the narrowest or most favorable interval would require simultaneous inference.

### 4. Restricted mean

Reconstruct the reported restricted mean by summing rectangle width times the survival level just before the next time. Explain why comparing samples at different final observed times would compare different truncation estimands; a common $\\tau$ is needed for group comparison.

## Interpretation boundaries

The lab does not fit treatment effects, recover post-censoring outcomes, or handle left truncation, interval censoring, recurrent events, survey weights, time-varying covariates, or competing risks. It does not claim that two preset curves differ statistically. A treatment comparison additionally needs a design or conditional-exchangeability argument, positivity, consistent event definitions, and uncertainty for the contrast.

When a competing event prevents the event of interest, ordinary Kaplan–Meier with the competitor censored targets a hypothetical net risk. Use cumulative incidence for observed-world cause-specific probability. When entry is delayed, rebuild each risk set so a participant enters only after their eligibility time.

## Programming notes

The pure engine is in \`src/components/labs/kaplanMeier.ts\`. It validates times and statuses, sorts without mutating caller data, groups exact ties, reduces product fractions by the Euclidean algorithm, and returns data rather than drawing. The React component draws the curve and numerical table from those returned risk-set and product-limit quantities.

## Check yourself

**Question.** Six participants are at risk before time 5. Two events and one censoring occur at time 5. What factor is applied, and how many remain at risk immediately afterward?

**Solution.** Factor is $(6-2)/6=2/3$. The two events and one censored participant leave, so three remain. Censoring does not enter the numerator of the survival factor.

`;export{e as default};