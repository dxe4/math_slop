var e=`---
parent_id: book-principles-statistical-inference
chapter_id: multiplicity-sequential-and-selective-inference
title: "Multiplicity, Sequential Monitoring, and Selective Inference"
level: graduate
estimated_minutes: 325
license: CC BY-SA 4.0
---

# Multiplicity, Sequential Monitoring, and Selective Inference {#section-1-multiplicity-sequential-monitoring-and-selective-infere}

<a id="section-1-level-and-prerequisites"></a>
## Level and prerequisites {#section-3-level-and-prerequisites}

This is a retained L4 continuation outside the nineteen-chapter L3 main route. Preparation is [Probability: Models, Bounds, and Proofs](../probability-models-proofs.md), especially its [Gaussian-vector chapter](../probability-models-proofs/gaussian-vectors-and-multivariate-normal.md), and [Lucent linear algebra](/lucent/web/#/course/linear-algebra). This advanced continuation assumes the relevant filtration, nonnegative-supermartingale and asymptotic prerequisites at their use. Finite union bounds, stopped-increment calculations and selective normal examples are proved locally; general adaptive-testing or arbitrary selective-inference theory is not silently imported into the L3 main route.


A level-$\\alpha $ guarantee belongs to one complete procedure. Trying many hypotheses, inspecting data repeatedly, or choosing the reported question after seeing results creates a new procedure with a different error event. Valid inference must account for the family, stopping rule, and selection map that actually produced the claim.

This chapter proves Bonferroni and Holm familywise control, develops false-discovery-rate control, constructs alpha-spending and e-value sequential guarantees, and explains simultaneous, split-sample, and selection-conditional routes to post-selection inference. The goal is not to punish exploration; it is to label exploration and calibration honestly.

<a id="section-10-1-a-family-changes-the-error-event"></a>
## 1. A family changes the error event {#section-12-1-a-family-changes-the-error-event}

For hypotheses $H_1,\\dots,H_m$, let $V$ be the number of rejected true nulls and $R$ the total number rejected.

The **familywise error rate** is

$FWER=P(V\\ge 1)$.

The **false discovery proportion** is

$FDP=V/\\max(R,1)$,

and the **false discovery rate** is $FDR=E[FDP]$.

FWER controls the chance of any false rejection. FDR controls the expected fraction of false claims among rejections, defining the fraction as zero when nothing is rejected. Neither controls the probability that a particular reported claim is true.

The family must be declared: all outcomes, subgroups, models, transformations, interim looks, and branches that could have generated the reported result may belong to it.

<a id="section-28-2-unadjusted-testing-accumulates-error"></a>
## 2. Unadjusted testing accumulates error {#section-30-2-unadjusted-testing-accumulates-error}

If $m$ true-null p-values are independent Uniform$(0,1)$ and each is tested at level $\\alpha $, then

$P(V\\ge 1)=1-(1-\\alpha )^m$.

For $m=20$, $\\alpha =0.05$, this is about $0.642$. Dependence changes the formula; marginal one-test control alone does not establish familywise control.

Expected false rejections equal $m\\alpha $ under these assumptions, but $E[V]$ and $P(V\\ge 1)$ are different criteria. A procedure should choose a criterion based on consequences, not convenience after results are known.

<a id="section-38-3-bonferroni-needs-no-dependence-assumption"></a>
## 3. Bonferroni needs no dependence assumption {#section-40-3-bonferroni-needs-no-dependence-assumption}

Reject $H_j$ when

$p_j\\le \\alpha /m$.

If $I_0$ indexes true nulls, the union bound gives

\\[P(V\\ge 1)\\le \\sum _{j\\in I_0}P(p_j\\le \\alpha /m)\\]

$\\le |I_0|\\alpha /m\\le \\alpha $.

Thus Bonferroni controls FWER under arbitrary dependence among valid p-values. It can be conservative when tests are strongly dependent or many nulls are false.

The same argument gives simultaneous confidence: construct each interval at marginal level $1-\\alpha /m$; then all $m$ cover together with probability at least $1-\\alpha $.

<a id="section-54-4-holm-improves-bonferroni-without-dependence-assumptio"></a>
## 4. Holm improves Bonferroni without dependence assumptions {#section-56-4-holm-improves-bonferroni-without-dependence-assumptio}

Order p-values $p_{1}\\le \\dots\\le p_{m}$. Holm's step-down procedure compares

$p_{k}$ with $\\alpha /(m-k+1)$

from smallest upward, rejecting until the first failure.

**Theorem.** Holm controls FWER at $\\alpha $ for arbitrary dependence.

**Proof.** Let $m_0$ be the number of true nulls and let $j$ be the rank of the first true-null p-value. At most $m-m_0$ false nulls precede it, so $j\\le m-m_0+1$ and $m-j+1\\ge m_0$. If any true null is rejected, Holm must reject this first one, implying

$p_{j}\\le \\alpha /(m-j+1)\\le \\alpha /m_0$.

Therefore the minimum true-null p-value is at most $\\alpha /m_0$. By the union bound over the $m_0$ valid p-values, this event has probability at most $\\alpha $. ∎

Holm never rejects fewer hypotheses than ordinary Bonferroni for the same p-values.

<a id="section-72-5-weighted-error-budgets-encode-priorities"></a>
## 5. Weighted error budgets encode priorities {#section-74-5-weighted-error-budgets-encode-priorities}

Choose nonnegative weights $w_j$ summing to one and reject when

$p_j\\le \\alpha w_j$.

The union-bound proof gives FWER at most $\\alpha $. Larger weights allocate more Type I error to predeclared primary questions.

Weights chosen after seeing p-values are part of a selection rule and invalidate this proof. Data-independent scientific priority, sample size, or external evidence can justify them; “give the smallest p-value the largest weight” cannot.

<a id="section-82-6-benjamini-hochberg-controls-expected-false-proportion"></a>
## 6. Benjamini–Hochberg controls expected false proportion {#section-84-6-benjamini-hochberg-controls-expected-false-proportion}

Order p-values and let

$k=\\max{j:p_{j}\\le jq/m}$,

with $k=0$ if the set is empty. Reject the first $k$. This is the Benjamini–Hochberg procedure at target FDR $q$.

Under independent valid p-values for true nulls, independent of false-null p-values,

$FDR\\le (m_0/m)q\\le q$.

<a id="section-94-proof-lemma"></a>
### Proof lemma {#section-96-proof-lemma}

Fix a true null $i$. Replace $p_i$ by zero and let $R_i^0$ be the number BH would reject. On the event that $i$ is rejected, the self-consistency of the step-up rule gives

\\[p_i\\le qR_i^0/m\\]

and $R=R_i^0$. Conditioning on all other p-values makes $R_i^0=r$ fixed. Super-uniformity gives

$E[1_{i rejected}/\\max(R,1)|p_{-i}]\\le (qr/m)/r=q/m$.

Summing this bound over the $m_0$ true nulls yields the theorem. ∎

The leave-one-out equality relies on the monotone step-up rule. Under some positive dependence the result extends; under arbitrary dependence it need not. A conservative arbitrary-dependence modification replaces $q$ by $q/H_m$, where $H_m=\\sum _{j=1}^m1/j$.

<a id="section-108-7-adjusted-p-values-report-procedure-scale-thresholds"></a>
## 7. Adjusted p-values report procedure-scale thresholds {#section-110-7-adjusted-p-values-report-procedure-scale-thresholds}

For Bonferroni, an adjusted p-value is $\\min(1,mp_j)$. For Holm, adjusted ordered values are running maxima

$\\tilde{p}_{k}=\\min{1,\\max_{l\\le k}(m-l+1)p_{l}}$.

This monotonicity correction ensures later ordered hypotheses do not receive smaller adjusted values after an earlier stopping barrier.

An adjusted p-value is tied to a family and method. It is not an intrinsic property of the hypothesis, and changing the family after seeing results changes it.

<a id="section-118-8-repeated-looks-require-a-sequential-error-event"></a>
## 8. Repeated looks require a sequential error event {#section-120-8-repeated-looks-require-a-sequential-error-event}

Suppose data are inspected at times $t=1,\\dots,K$. Applying a fixed-sample level-$\\alpha $ test at every look controls each marginal rejection probability, not

$P(reject at any look)$.

A simple **alpha-spending** construction assigns nonnegative $\\alpha _t$ with

$\\sum _t\\alpha _t\\le \\alpha $.

At look $t$, use a test with null rejection probability at most $\\alpha _t$. The union bound gives

$P(any rejection)\\le \\sum _t\\alpha _t\\le \\alpha $,

regardless of dependence across looks. This is valid but can be conservative and requires each look's statistic to be calibrated for its marginal law under the actual accumulating design.

Group-sequential boundaries use joint distributions to spend error more efficiently. Their stopping, information-time, overrunning, and adaptation rules are part of the protocol.

<a id="section-136-9-e-values-support-optional-continuation"></a>
## 9. E-values support optional continuation {#section-138-9-e-values-support-optional-continuation}

An **e-value** for a null is a nonnegative random variable $E$ satisfying

\\[E_\\theta [E]\\le 1\\]

for every null state. Markov's inequality gives

$P_\\theta (E\\ge 1/\\alpha )\\le \\alpha $.

For sequential data, let $(E_t)$ be a nonnegative supermartingale under every null state, with $E_0\\le 1$. Ville's inequality states

$P_\\theta (\\sup_t E_t\\ge 1/\\alpha )\\le \\alpha $.

**Proof.** Stop at the first crossing, truncated at time $T$. Optional sampling for a nonnegative supermartingale gives expected stopped value at most one. On a crossing it is at least $1/\\alpha $, so Markov's argument bounds crossing probability by $\\alpha $. Let $T\\to \\infty $ and use monotone convergence of crossing events. ∎

Products of nonnegative adapted factors can form such processes when each factor has conditional expectation at most one given the past. The betting rule or other choice used to construct the next factor must be predictable from the current filtration; the realized factor itself is then adapted, not predictable in general. Choosing the rule using unseen future data breaks the conditional-expectation and supermartingale proof.

<a id="section-154-10-confidence-sequences-cover-at-every-time"></a>
## 10. Confidence sequences cover at every time {#section-156-10-confidence-sequences-cover-at-every-time}

A $1-\\alpha $ **confidence sequence** $(C_t)$ satisfies

$P_\\theta (\\theta \\in C_t for all t\\ge 1)\\ge 1-\\alpha $.

It can be constructed by inverting an always-valid family of sequential tests. Unlike a fixed-time confidence interval, it may be inspected at a data-dependent stopping time without losing its simultaneous-in-time coverage.

This stronger guarantee usually costs width. Reporting a fixed-sample interval at a favourable stopping time does not retroactively make it a confidence sequence.

<a id="section-164-11-selection-changes-the-target-or-conditional-law"></a>
## 11. Selection changes the target or conditional law {#section-166-11-selection-changes-the-target-or-conditional-law}

Suppose $m$ noisy estimates are computed and only the largest is reported. Even if every estimator is unbiased, selecting the largest can produce upward bias for the random target indexed by the selected estimate. A marginal interval designed for a prespecified coordinate can under-cover the selected coordinate.

Post-selection inference must state which target is intended:

- a fixed parameter chosen before data;
- the random parameter indexed by the selected model or feature;
- a projection target inside the selected model;
- a future prediction rule evaluated on new data.

These are different estimands. Calibration for one does not transfer automatically to another.

<a id="section-177-12-three-routes-to-valid-post-selection-claims"></a>
## 12. Three routes to valid post-selection claims {#section-179-12-three-routes-to-valid-post-selection-claims}

<a id="section-179-simultaneous-inference"></a>
### Simultaneous inference {#section-181-simultaneous-inference}

Construct a family of intervals covering all candidate parameters together. Then any data-selected member is covered on the simultaneous event. Bonferroni is one route; sharper methods can exploit dependence.

<a id="section-183-data-splitting"></a>
### Data splitting {#section-185-data-splitting}

Use one independent sample to select a question or model and another to estimate it. Conditional on the first sample, the second-sample procedure sees a fixed selected target and retains its calibration. Splitting reduces information and repeated attempts across splits need accounting.

<a id="section-187-selection-conditional-inference"></a>
### Selection-conditional inference {#section-189-selection-conditional-inference}

Condition on the event that triggered selection and derive the statistic's conditional law. If $Y\\sim Normal(\\theta ,1)$ is reported only when $Y>c$, then under a candidate $\\theta _0$ the reference law is a normal distribution truncated below $c$, not an ordinary normal. Conditional tail probabilities can be valid but may be wide and depend sensitively on the exact selection rule.

<a id="section-191-13-exploration-preregistration-and-replication"></a>
## 13. Exploration, preregistration, and replication {#section-193-13-exploration-preregistration-and-replication}

Exploratory analysis can generate hypotheses, transformations, and models. Problems arise when the final inferential reference acts as though the selected analysis were the only one that could have been run.

A useful ledger records the analysis universe, decision times, stopping rule, deviations, and which claims are exploratory. Preregistration fixes parts of that map before outcomes are seen. Independent replication evaluates a new, fixed claim under a new experiment; it does not erase selection in the original evidence.

<a id="section-197-14-multiplicity-and-selection-audit"></a>
## 14. Multiplicity and selection audit {#section-199-14-multiplicity-and-selection-audit}

Record:

1. complete family of hypotheses, outcomes, subgroups, models, and looks;
2. FWER, FDR, false-coverage, or other error criterion;
3. dependence assumptions among p-values;
4. weights and whether chosen before outcomes;
5. stopping filtration, information times, and adaptations;
6. fixed-time p-values versus always-valid e-values or confidence sequences;
7. selection map and selected estimand;
8. simultaneous, split-sample, conditional, or replication strategy.

<a id="section-210-15-exercises-with-complete-solutions"></a>
## 17. Four procedures on one declared family {#section-760-17-four-procedures-on-one-declared-family}

<a id="section-760-worked-example-1-compare-four-error-control-rules"></a>
### Worked example 1: compare four error-control rules {#section-762-worked-example-1-compare-four-error-control-rules}
A numerical p-value list can illustrate the mechanics of several procedures, but it cannot by itself verify their guarantees. For that one needs an experiment under which each true-null p-value is valid, together with any required dependence assumptions. Keep those obligations separate while applying the procedures to the synthetic ordered family $A,B,C,D,E$, with values $(0.005,0.022,0.040,0.080,0.400)$. Fix the family before looking at these numbers. Set the FWER target $\\alpha=0.10$ for Bonferroni and Holm, and the FDR target $q=0.10$ for BH and its harmonic correction.

Bonferroni uses cutoff $0.10/5=0.020$ and rejects only $A$. Holm compares successive ordered values with $(0.020,0.025,1/30,0.050,0.100)$. The first two pass; the third fails because $0.040>1/30$. Thus Holm rejects $A,B$ and stops. A later passing comparison, if one occurred, would not restart a step-down procedure.

BH compares ordered values with $(0.020,0.040,0.060,0.080,0.100)$. Rank 4 passes, rank 5 fails, so its largest passing rank is 4 and it rejects $A,B,C,D$. The equality at rank 4 is included. BH is a step-up rule: it finds the largest passing rank and includes all preceding ranks, even if an earlier rank failed its own comparison. That distinction matters in other lists.

For the arbitrary-dependence correction, $H_5=1+1/2+1/3+1/4+1/5=137/60$. Its rank-$j$ cutoff is $j q/(5H_5)=6j/685$. Only rank 1 passes: $0.005<6/685$, whereas $0.022>12/685$, and the later values exceed their own cutoffs. This procedure therefore rejects only $A$. Its equality with Bonferroni on this list is an outcome of these values, not a general identity between the methods.

The same calculation can be reported through adjusted p-values. Bonferroni gives $(0.025,0.110,0.200,0.400,1)$. Holm's running maxima give $(0.025,0.088,0.120,0.160,0.400)$. BH's adjusted values use reverse running minima of $5p_{(j)}/j$; here those values are already increasing, giving $(0.025,0.055,1/15,0.100,0.400)$. Multiplying them by $137/60$ and capping at one gives the harmonic-adjusted values. Each adjusted list must retain the same original hypothesis labels.

These differing rejection sets do not show that one method has failed. The methods control different events or expectations under different hypotheses. Even when FDR is at most $q$, the realized false-discovery fraction in a particular repetition can exceed $q$. For example, if $A$ and $C$ happened to be the true nulls, the BH rejection set here would have false fraction $2/4$. The list supplies no joint sampling law and therefore supplies no frequency estimate for how often that configuration occurs. An expectation guarantee cannot be inferred or refuted from one realized fraction.


Random family weights provide a useful test of what “chosen before” means. With two independent uniform true-null p-values, give all weight to whichever p-value is smaller, then apply the weighted level-$\\alpha$ rule. It rejects whenever $\\min(p_1,p_2)\\le\\alpha$, so its FWER is $1-(1-\\alpha)^2>\\alpha$ for $0<\\alpha<1$. The weights still sum to one; the missing condition is their relationship to the tested fluctuations.

A valid adaptive-looking alternative can use an independent first sample to select weights and a fresh second sample to compute p-values. Conditional on the first sample, the weights are fixed. If every second-sample true-null p-value remains super-uniform under that conditioning, the weighted union bound gives conditional FWER at most $\\alpha\\sum_{i\\in I_0}w_i\\le\\alpha$. Taking expectation proves unconditional control. Independence is one sufficient way to obtain this conditional validity, not a substitute for checking the selected target and second-sample test law. This demonstrates exactly where a legitimate information split enters the proof.

Dependence can also preserve a marginal family bound: if all true-null p-values equal the same $U\\sim\\operatorname{Uniform}(0,1)$, rejecting each at level $\\alpha$ gives FWER exactly $\\alpha$. A finite collection of independent uniforms instead gives the accumulating-error formula from Section 2. Both joint laws have identical valid marginals. Thus marginal validity alone cannot determine the familywise probability.

<a id="section-780-18-a-complete-harmonic-bound-without-independence"></a>
## 18. A complete harmonic bound without independence {#section-782-18-a-complete-harmonic-bound-without-independence}
The harmonic correction in Section 6 has a short finite proof that also explains its price. Assume $m\\ge1$, $0<q<1$, and each true-null p-value is marginally super-uniform: $P(p_i\\le u)\\le u$ for $u\\in[0,1]$. There is no joint dependence assumption. Define $c=q/(mH_m)$ and apply the BH step-up rule with thresholds $jc$, $j=1,\\ldots,m$. Write $R$ for its total number of rejections.

Fix one true null $i$. If it is rejected, self-consistency gives $p_i\\le Rc$. Partition $(0,mc]$ into bins $((k-1)c,kc]$. A rejected p-value in bin $k$ forces $R\\ge k$, because otherwise $Rc\\le(k-1)c<p_i$. Consequently, pointwise outside the null event $\\{p_i=0\\}$,

\\[
\\frac{1_{\\{i\\text{ rejected}\\}}}{\\max(R,1)}
\\le\\sum_{k=1}^m\\frac1k
1_{\\{(k-1)c<p_i\\le kc\\}}.
\\]

A value above $mc$ cannot be rejected. Super-uniformity makes $P(p_i=0)=0$, so omitting that endpoint changes no expectation.

Let $F_i(u)=P(p_i\\le u)$. The right side has expectation

\\[
\\sum_{k=1}^m\\frac{F_i(kc)-F_i((k-1)c)}k
=\\frac{F_i(mc)}m+
\\sum_{k=1}^{m-1}\\left(\\frac1k-\\frac1{k+1}\\right)F_i(kc).
\\]

This is summation by parts, obtained by collecting the coefficient of each cumulative probability. All coefficients are nonnegative. Therefore $F_i(kc)\\le kc$ gives an upper bound $c+\\sum_{k=1}^{m-1}c/(k+1)=cH_m=q/m$. It would be incorrect to bound each bin's probability by $c$: marginal super-uniformity does not guarantee that interval bound. The cumulative-probability rearrangement is what makes this proof work for discrete and dependent p-values.

Sum over the $m_0$ true nulls. Since the false fraction equals the sum of these individual contributions, $FDR\\le m_0q/m\\le q$. This proves the arbitrary-dependence result for the finite family directly. The original independence proof of BH remains useful: it obtains the larger uncorrected thresholds by exploiting information that the present bound deliberately does not assume.

The harmonic factor is a sufficient protective adjustment, not evidence that the actual family has adversarial dependence. If scientific structure supports a less restrictive theorem, its precise dependence hypotheses must be checked. A visual correlation plot of observed test statistics does not establish the required probability-law property.

<a id="section-807-19-a-predictable-bernoulli-bet-has-a-checkable-null-law"></a>
## 19. A predictable Bernoulli bet has a checkable null law {#section-809-19-a-predictable-bernoulli-bet-has-a-checkable-null-law}

<a id="section-809-worked-example-2-verify-a-past-based-betting-process"></a>
### Worked example 2: verify a past-based betting process {#section-811-worked-example-2-verify-a-past-based-betting-process}
Let $\\mathcal F_t$ contain all observations and allowed randomization through time $t$. Suppose binary $X_t$ satisfies $P(X_t=1\\mid\\mathcal F_{t-1})=p_0$ under the null, with fixed $0<p_0<1$. This conditional-mean assumption suffices for the calculation; iid Bernoulli sampling is one example. Before seeing $X_t$, select an $\\mathcal F_{t-1}$-measurable number $q_t\\in[0,1]$. Multiply current wealth by

\\[
B_t=\\begin{cases}
q_t/p_0,&X_t=1,\\\\
(1-q_t)/(1-p_0),&X_t=0.
\\end{cases}
\\]

Conditional expectation is $p_0(q_t/p_0)+(1-p_0)((1-q_t)/(1-p_0))=1$. Thus $M_t=\\prod_{j=1}^tB_j$, starting at $M_0=1$, is a nonnegative martingale. If only a one-sided conditional-mean constraint is available, the factor and admissible bet directions need another check; the equality calculation must not be silently reused.

For $p_0=1/2$ and fixed $q_t=3/4$, a success multiplies wealth by $3/2$ and a failure by $1/2$. Eight consecutive successes give $(3/2)^8=6561/256>20$, crossing the level-$0.05$ threshold. Seven successes and one failure give $(3/2)^7(1/2)=2187/256<20$, regardless of their order for this fixed bet. These are exact path calculations, not observed trial results.

The direction of the bet may adapt to the past. One choice is $q_t=(1+\\sum_{j<t}X_j)/(t+1)$, the Laplace-smoothed past success fraction. It lies strictly between zero and one and is known before $X_t$. A rule choosing a different $q_t$ after every previous outcome is still one specified sequential procedure. Its null guarantee follows from the conditional calculation at every time, not from treating the chosen sequence as fixed in advance.

By contrast, choose $q_t=X_t$ after seeing the current outcome when $p_0=1/2$. Then $B_t=2$ for every outcome and $M_t=2^t$ inevitably crosses every fixed threshold. The apparent certainty of successful betting exposes the invalid ordering: $q_t$ is not measurable with respect to the previous information. An adapted wealth process alone is insufficient; the stake selection must be predictable.

Martingale wealth is evidence against a null through its specified conditional law. It is not a posterior probability of the null, and it does not promise profit under every alternative. A badly chosen predictable bet remains valid but may have little power. Mixing several bets with fixed nonnegative weights summing to one preserves the martingale expectation because expectation is linear. Choosing the mixture weights after inspecting their completed wealth paths needs its own valid construction.


Another tempting shortcut is to construct a valid e-value at every time and inspect their maximum. Marginal expectation bounds alone do not justify that operation. Let independent $A_t$ be Bernoulli$(1/2)$ under a null and define $E_t=2A_t$. Every fixed-time e-value has expectation one. Yet the probability that at least one of the first $T$ values reaches 2 is $1-2^{-T}$, tending to one. The nominal crossing level for threshold 2 would be $1/2$, so optional inspection fails.

This sequence is not a nonnegative supermartingale. After a zero value, its next conditional expectation is one, exceeding its current value zero. The wealth construction above supplies the missing linkage through time: today's wealth is carried forward and the next predictable factor has conditional expectation at most one. Replacing that accumulation by the largest completed analysis is a new procedure. Alpha spending, a valid mixture, or another explicit sequential argument is needed to control it.

<a id="section-834-20-prove-the-crossing-bound-and-invert-a-whole-family"></a>
## 20. Prove the crossing bound and invert a whole family {#section-836-20-prove-the-crossing-bound-and-invert-a-whole-family}
The crossing argument can be proved without importing a general optional-stopping theorem. Let $(M_t)$ be a nonnegative integrable supermartingale with $M_0\\le1$. Fix $a>1$ and define $\\tau=\\inf\\{t\\ge0:M_t\\ge a\\}$, allowing $\\tau=\\infty$. For a finite horizon $N$, consider $Y_t=M_{t\\wedge\\tau}$, $t\\le N$. Its increment is

\\[
Y_{t+1}-Y_t=1_{\\{\\tau>t\\}}(M_{t+1}-M_t).
\\]

The indicator is known at time $t$. Taking conditional expectation makes the increment's expectation nonpositive. Iteration gives $E[Y_N]\\le E[M_0]\\le1$. On $\\{\\tau\\le N\\}$, $Y_N=M_\\tau\\ge a$, and elsewhere $Y_N\\ge0$, so $P(\\tau\\le N)\\le1/a$. The events increase with $N$; continuity of probability gives $P(\\tau<\\infty)\\le1/a$. This is the countable-time crossing inequality used in Section 9. Nonnegativity is essential to discard the contribution from paths that have not crossed.

A concrete family for Bernoulli confidence sequences comes from mixing constant alternatives $q\\in[0,1]$ uniformly. For each candidate null $p\\in(0,1)$ and a path with $S_t$ successes,

\\[
M_t(p)=\\int_0^1
\\frac{q^{S_t}(1-q)^{t-S_t}}{p^{S_t}(1-p)^{t-S_t}}\\,dq
=\\frac1{(t+1)\\binom t{S_t}p^{S_t}(1-p)^{t-S_t}}.
\\]

The beta integral here equals $S_t!(t-S_t)!/(t+1)!$, as repeated integration by parts verifies from the base integral $\\int_0^1(1-q)^f\\,dq=1/(f+1)$. The same process is the product of predictable Laplace-smoothed factors. Either construction verifies its expectation-one property; nonnegative integration also permits averaging the constant-bet processes.

For fixed $0<\\alpha<1$, define

\\[
C_t=\\{p\\in(0,1):(t+1)\\binom t{S_t}
p^{S_t}(1-p)^{t-S_t}>\\alpha\\}.
\\]

At the true interior $p$, exclusion at any time implies $M_t(p)\\ge1/\\alpha$, so the crossing bound gives simultaneous coverage at least $1-\\alpha$. Retain endpoint 0 whenever $S_t=0$, and endpoint 1 whenever $S_t=t$. Under either boundary state its entire path satisfies that rule, so these extensions also cover the boundary. No simultaneous probability bound over every candidate $p$ is required: coverage is evaluated at the one true state, with all times included.

For $t=4$ and $S_t=4$, the inequality becomes $5p^4>\\alpha$. The set is $p>(\\alpha/5)^{1/4}$ together with endpoint 1. That is a confidence-sequence slice at time 4, not a separate fixed-time interval calibrated by a normal approximation.

If a finite data-dependent stopping time is used, the simultaneous event covers its reported slice automatically. For a possibly infinite stopping time, the precise guarantee is $P_p(\\tau<\\infty,\\ p\\notin C_\\tau)\\le\\alpha$. This joint-event bound does not assert conditional coverage given $\\tau<\\infty$; $C_\\infty$ has not been defined. This is a mathematical guarantee under the conditional Bernoulli null laws, not evidence that a real sampling or missingness protocol satisfied them.

<a id="section-866-21-derive-the-selective-normal-reference-before-computi"></a>
## 21. Derive the selective normal reference before computing a tail {#section-868-21-derive-the-selective-normal-reference-before-computi}

<a id="section-868-worked-example-3-normalize-the-reported-normal-tail"></a>
### Worked example 3: normalize the reported normal tail {#section-870-worked-example-3-normalize-the-reported-normal-tail}
Suppose $Y\\sim N(\\theta,1)$ and a report is made only if $Y>c$, where the cutoff $c$ was fixed as part of the reporting protocol. Denote the standard normal CDF by $\\Phi$ and its upper tail by $\\bar\\Phi=1-\\Phi$. At a candidate value $\\theta_0$, the conditional density of a reported value is

\\[
f_{\\theta_0}(y\\mid Y>c)
=\\frac{\\phi(y-\\theta_0)}{\\bar\\Phi(c-\\theta_0)}
1_{\\{y>c\\}}.
\\]

The denominator is positive for every finite $c,\\theta_0$. Integrating from an observed $y>c$ upwards gives the selective upper-tail p-value

\\[
p_{\\rm sel}(y;\\theta_0)
=\\frac{\\bar\\Phi(y-\\theta_0)}{\\bar\\Phi(c-\\theta_0)}.
\\]

To check calibration, fix $u\\in(0,1)$ and solve the inequality $p_{\\rm sel}(Y;\\theta_0)\\le u$. Because the upper tail decreases continuously, it is equivalent to $Y\\ge\\theta_0+\\Phi^{-1}(1-u\\bar\\Phi(c-\\theta_0))$. The unconditional probability of this last event is $u\\bar\\Phi(c-\\theta_0)$. Dividing by the selection probability proves $P_{\\theta_0}(p_{\\rm sel}\\le u\\mid Y>c)=u$. Thus the conditional p-value is exactly uniform, not merely asymptotically calibrated.

For a transparent exact-tail example, take $\\theta_0=0$, $c=\\Phi^{-1}(0.95)$ and a reported $y=\\Phi^{-1}(0.995)$. The ordinary upper tail is $1/200$, while the selective upper tail is $(1/200)/(1/20)=1/10$. The first number treats the statistic as prespecified; the second compares it with the normal values capable of reaching this reporting stage. A conditional level-$0.05$ test does not reject at this reported observation.

Inverting a conditional pivot can produce conditional confidence sets. For example, the conditional CDF at $y>c$ is $F_\\theta^{\\rm sel}(y)=1-p_{\\rm sel}(y;\\theta)$. Retain candidates for which $\\alpha/2<F_\\theta^{\\rm sel}(y)<1-\\alpha/2$. Continuity makes its conditional coverage $1-\\alpha$ at each fixed true $\\theta$. The set's numerical width and shape require separate analysis; writing this inversion does not guarantee a short interval.

Conditioning on the wrong event changes the reference. If the analyst actually selected the largest of several estimates, conditioning only on one estimate exceeding $c$ omits the competing comparisons. If a cutoff was tuned using the same data, it is not the fixed cutoff in the displayed law. Selection-conditional inference requires the exact selection map, while an independent confirmation sample can target a different, explicitly stated experiment.

<a id="section-892-22-selection-error-has-a-target-a-sign-and-possible-equ"></a>
## 22. Selection error has a target, a sign and possible equality {#section-894-22-selection-error-has-a-target-a-sign-and-possible-equ}
Let $X_1,\\ldots,X_m$ be integrable estimates of fixed parameters $\\theta_1,\\ldots,\\theta_m$, with $E[X_j]=\\theta_j$. Fix a deterministic rule for ties and let $J$ be the index of the largest estimate. The reported value is $X_J=\\max_jX_j$, whereas its selected target is the random parameter $\\theta_J$. Its average selection error is

\\[
E[X_J-\\theta_J]=E[\\max_jX_j]-E[\\theta_J].
\\]

Because $\\max_jX_j\\ge X_k$ for every fixed $k$, taking expectations gives $E[\\max_jX_j]\\ge\\max_j\\theta_j$. Also $\\theta_J\\le\\max_j\\theta_j$ on every outcome. Combining the inequalities proves nonnegative average selection error. No independence or normality assumption is needed. Strict positivity requires more: the inequalities may both be equalities.

For a shared-noise example, set $X_j=\\theta_j+Z$ with $E[Z]=0$ and integrable $Z$. The common shift never changes the ranking. The selected coordinate has a largest true value, and $X_J-\\theta_J=Z$ has expectation zero. Every estimate is noisy, but selection adds no positive expected error. This is why a claim of inevitable strict upward bias is too broad.

For a contrasting independent example, take two true means zero and independent observations each equal to $-1$ or 1 with probability one half. Their maximum is $-1$ only when both are negative, an event of probability $1/4$; otherwise it is 1. Its expectation is $1/2$, while every selected target is zero. The upward selection error is exactly $1/2$. These finite examples identify the source of strictness rather than treating every form of noise as equivalent.

A confidence statement needs a further distinction. Nonnegative expected selection error does not specify the probability of noncoverage. An interval could under-cover, over-cover or retain its nominal rate depending on its construction and the joint law. Simultaneous intervals protect a selected coordinate because the event that all coordinates cover implies the event that the selected coordinate covers. Independent splitting protects conditional inference because selection information and confirmation noise are independent. The truncated normal calculation protects a stated conditional reporting law. These are different proofs, not interchangeable descriptions of a generic correction.

When reporting several selected intervals, the relevant error criterion might be false coverage among those reported rather than the FDR of hypothesis tests. A testing guarantee cannot simply be relabeled as an interval guarantee. The procedure ledger should specify the random object being counted, its denominator when no claims are reported, and the experiment over which its expectation or probability is taken.

<a id="section-909-23-elaboration-of-the-original-winner-s-curse-key"></a>
## 23. Elaboration of the original winner's-curse key {#section-911-23-elaboration-of-the-original-winner-s-curse-key}
<a id="section-910-original-exercise-18-distinguish-the-maximum-target-fro"></a>
### Original Exercise 18: distinguish the maximum target from the selected target {#section-912-original-exercise-18-distinguish-the-maximum-target-fro}

Assume a finite family of integrable unbiased estimates, and let $J$ select the largest with a fixed tie rule. For every fixed index $k$, $\\max_jX_j\\ge X_k$, hence $E[\\max_jX_j]\\ge\\max_j\\theta_j$. Since $\\theta_J\\le\\max_j\\theta_j$ on every sample, $E[X_J-\\theta_J]\\ge0$ as well. The first comparison concerns the largest fixed true value; the second concerns the random selected target. Strictness can fail: $X_j=\\theta_j+Z$ with shared integrable mean-zero $Z$ gives $X_J-\\theta_J=Z$ and zero average bias. Independent symmetric two-point noises at two equal targets instead give average selection error $1/2$, as derived above. This supplies the precise expectation inequalities behind the original terse convexity argument without altering that exercise's prompt or key.

<a id="section-914-24-optional-practice-extensions-for-sequential-and-sele"></a>
## 26. Proof and attribution boundary for the multiplicity extension {#section-980-26-proof-and-attribution-boundary-for-the-multiplicity-}
The original BH leave-one-out proof and the exact BH, BY, confidence-sequence, e-value and post-selection bibliography in the registered references are retained. The finite harmonic bound, stopped-increment crossing bound, Bernoulli products and selective normal tail in this extension are proved here. They do not import a general adaptive-testing theorem. The names are conventional labels, not new priority claims. Verification of the named original papers remains a separate attribution task; no bibliography entry is used as a substitute for a theorem's hypotheses.


<a id="section-982-sources"></a>

<a id="section-403-summary"></a>
## Summary {#section-405-summary}

<a id="section-755-16-summary-and-forward-route"></a>
Multiplicity changes the error event from one rejection to a family. Bonferroni and Holm control FWER without dependence assumptions; Benjamini–Hochberg controls FDR under declared dependence conditions. Alpha spending, e-processes, and confidence sequences account for repeated looks. Simultaneous inference, independent splitting, and selection-conditional laws offer different post-selection guarantees. The remaining Bayesian bridge will compare these repeated-sampling calibrations with posterior decision probabilities, while the capstones will force the full procedure ledger into practice.


<a id="section-758-17-four-procedures-on-one-declared-family"></a>

<a id="section-988-summary"></a>
Multiplicity changes the error event, monitoring changes it to a path event, and selection changes the target or conditional reference law. Fixed-family marginal validity, predictable betting and explicit reporting mechanisms support different guarantees. Preserve their hypotheses and the full procedure rather than treating one final adjusted p-value as a universal correction.

## Exercises {#section-212-15-exercises-with-complete-solutions}

<a id="section-212-1-independent-family-error"></a>
### 1. Independent family error {#section-214-1-independent-family-error}

**Exercise S2.1**

Compute $1-(1-0.05)^2$.

<details>
<summary>Hint 1</summary>

Compute the chance that neither independent test rejects.

</details>

<details>
<summary>Hint 2</summary>

Subtract $0.95^2$ from one.

</details>

<details>
<summary>Solution</summary>

**Solution.** It is $1-0.95^{2}=0.0975$, already nearly twice the one-test level.

</details>

<a id="section-239-2-expected-false-rejections"></a>
### 2. Expected false rejections {#section-241-2-expected-false-rejections}

**Exercise S2.2**

With 20 independent true nulls tested at $0.05$, find $E[V]$.

<details>
<summary>Hint 1</summary>

Write the false rejection count as a sum of indicators.

</details>

<details>
<summary>Hint 2</summary>

Linearity uses the stated marginal rejection probabilities, not their independence.

</details>

<details>
<summary>Solution</summary>

**Solution.** By linearity, $E[V]=20(0.05)=1$; independence is not even needed for this expectation if each marginal probability is 0.05.

</details>

<a id="section-266-3-bonferroni-cutoff"></a>
### 3. Bonferroni cutoff {#section-268-3-bonferroni-cutoff}

**Exercise S2.3**

For $m=10$, $\\alpha =0.05$, what cutoff is used?

<details>
<summary>Hint 1</summary>

Divide the family error budget by the fixed number of tests.

</details>

<details>
<summary>Hint 2</summary>

Use $0.05/10$.

</details>

<details>
<summary>Solution</summary>

**Solution.** $0.05/10=0.005$.

</details>

<a id="section-293-4-bonferroni-under-dependence"></a>
### 4. Bonferroni under dependence {#section-295-4-bonferroni-under-dependence}

**Exercise S2.4**

Why does its proof not require independent p-values?

<details>
<summary>Hint 1</summary>

Name the probability inequality used for the false-rejection union.

</details>

<details>
<summary>Hint 2</summary>

The union bound works under arbitrary dependence given each null's marginal validity.

</details>

<details>
<summary>Solution</summary>

**Solution.** The union bound applies to arbitrary events; only each true-null marginal validity is used.

</details>

<a id="section-320-5-simultaneous-intervals"></a>
### 5. Simultaneous intervals {#section-322-5-simultaneous-intervals}

**Exercise S2.5**

Which marginal confidence level gives Bonferroni 95% simultaneous coverage for five intervals?

<details>
<summary>Hint 1</summary>

Allocate failure probability $0.05/5$ to each interval.

</details>

<details>
<summary>Hint 2</summary>

Use marginal coverage at least $0.99$, with each construction valid under its relevant model.

</details>

<details>
<summary>Solution</summary>

**Solution.** Use two-sided or otherwise valid intervals at level $1-0.05/5=0.99$ each.

</details>

<a id="section-347-6-holm-thresholds"></a>
### 6. Holm thresholds {#section-349-6-holm-thresholds}

**Exercise S2.6**

For $m=4$, list successive Holm thresholds at $\\alpha =0.05$.

<details>
<summary>Hint 1</summary>

Holm tests ordered ranks with denominators $m,m-1,\\ldots,1$.

</details>

<details>
<summary>Hint 2</summary>

Divide $0.05$ by four, three, two and one.

</details>

<details>
<summary>Solution</summary>

**Solution.** They are $0.0125$, $0.05/3\\approx 0.01667$, $0.025$, and $0.05$.

</details>

<a id="section-374-7-holm-proof-event"></a>
### 7. Holm proof event {#section-376-7-holm-proof-event}

**Exercise S2.7**

If any true null is rejected, why must the smallest true-null p-value be rejected?

<details>
<summary>Hint 1</summary>

Follow the step-down stopping rule in p-value order.

</details>

<details>
<summary>Hint 2</summary>

Rejecting a later true null requires having rejected the first true null encountered.

</details>

<details>
<summary>Solution</summary>

**Solution.** Holm proceeds in ordered sequence and stops at the first failure. Reaching any later true null requires rejecting the first true null encountered.

</details>

<a id="section-401-8-weighted-bonferroni"></a>
### 8. Weighted Bonferroni {#section-403-8-weighted-bonferroni}

**Exercise S2.8**

For weights $(0.5,0.3,0.2)$ and $\\alpha =0.05$, give cutoffs.

<details>
<summary>Hint 1</summary>

Multiply each prespecified nonnegative weight by the total budget.

</details>

<details>
<summary>Hint 2</summary>

The weights sum to one, so their three marginal budgets add to $0.05$.

</details>

<details>
<summary>Solution</summary>

**Solution.** They are $(0.025,0.015,0.010)$.

</details>

<a id="section-428-9-data-dependent-weights"></a>
### 9. Data-dependent weights {#section-430-9-data-dependent-weights}

**Exercise S2.9**

Why can weights chosen to favour small observed p-values invalidate control?

<details>
<summary>Hint 1</summary>

The fixed-threshold marginal bound assumes the allocated weight was not selected from that same p-value.

</details>

<details>
<summary>Hint 2</summary>

Outcome-driven thresholds change the probability event being bounded.

</details>

<details>
<summary>Solution</summary>

**Solution.** The threshold then depends on the same null fluctuation being tested; the fixed-weight marginal probability bound no longer applies to the selected threshold.

</details>

<a id="section-455-10-bh-step"></a>
### 10. BH step {#section-457-10-bh-step}

**Exercise S2.10**

With $m=5$, $q=0.10$, and ordered p-values $(0.01,0.03,0.04,0.20,0.50)$, find $k$.

<details>
<summary>Hint 1</summary>

Compare each ordered p-value with $iq/m$.

</details>

<details>
<summary>Hint 2</summary>

The first three ranks pass and the later two fail.

</details>

<details>
<summary>Solution</summary>

**Solution.** Thresholds are $(0.02,0.04,0.06,0.08,0.10)$. The largest passing rank is $k=3$, so reject the first three.

</details>

<a id="section-482-11-fdr-meaning"></a>
### 11. FDR meaning {#section-484-11-fdr-meaning}

**Exercise S2.11**

Does $FDR\\le 0.1$ mean every rejected hypothesis has at most 10% probability of being null?

<details>
<summary>Hint 1</summary>

Identify the random quantity whose expectation defines FDR.

</details>

<details>
<summary>Hint 2</summary>

It is the false fraction among all rejections across repeated experiments, not a posterior for each rejected claim.

</details>

<details>
<summary>Solution</summary>

**Solution.** No. It bounds an expectation of the realised false fraction across repetitions, not posterior probabilities for individual hypotheses.

</details>

<a id="section-509-12-arbitrary-dependence-correction"></a>
### 12. Arbitrary-dependence correction {#section-511-12-arbitrary-dependence-correction}

**Exercise S2.12**

For $m=3$, compute $H_m$.

<details>
<summary>Hint 1</summary>

The harmonic correction sums reciprocals through $m$.

</details>

<details>
<summary>Hint 2</summary>

Add one, one half and one third.

</details>

<details>
<summary>Solution</summary>

**Solution.** $H_3=1+1/2+1/3=11/6$.

</details>

<a id="section-536-13-alpha-spending"></a>
### 13. Alpha spending {#section-538-13-alpha-spending}

**Exercise S2.13**

If five looks each spend $0.01$, what union-bound guarantee follows?

<details>
<summary>Hint 1</summary>

Represent every look's false rejection as an event.

</details>

<details>
<summary>Hint 2</summary>

The union bound adds five marginal budgets of $0.01$.

</details>

<details>
<summary>Solution</summary>

**Solution.** The probability of any false rejection is at most $5(0.01)=0.05$.

</details>

<a id="section-563-14-infinite-spending-schedule"></a>
### 14. Infinite spending schedule {#section-565-14-infinite-spending-schedule}

**Exercise S2.14**

Show $\\alpha _t=\\alpha /2^t$ spends at most $\\alpha $ over infinitely many looks.

<details>
<summary>Hint 1</summary>

Use the infinite geometric-series sum from time one.

</details>

<details>
<summary>Hint 2</summary>

The sum of $2^{-t}$ is one.

</details>

<details>
<summary>Solution</summary>

**Solution.** $\\sum _{t=1}^\\infty \\alpha /2^t=\\alpha $ by the geometric-series formula.

</details>

<a id="section-590-15-e-value-threshold"></a>
### 15. E-value threshold {#section-592-15-e-value-threshold}

**Exercise S2.15**

At level $0.025$, what e-value crossing threshold is used?

<details>
<summary>Hint 1</summary>

Use reciprocal error budget for the nonnegative e-process threshold.

</details>

<details>
<summary>Hint 2</summary>

Take $1/0.025$.

</details>

<details>
<summary>Solution</summary>

**Solution.** $1/0.025=40$.

</details>

<a id="section-617-16-ville-versus-fixed-time"></a>
### 16. Ville versus fixed time {#section-619-16-ville-versus-fixed-time}

**Exercise S2.16**

What event does Ville's inequality control?

<details>
<summary>Hint 1</summary>

The process inequality controls an entire path-crossing event.

</details>

<details>
<summary>Hint 2</summary>

Its supremum ranges over times, not just a predeclared fixed time.

</details>

<details>
<summary>Solution</summary>

**Solution.** It controls crossing the threshold at any time, $\\sup_tE_t\\ge 1/\\alpha $, rather than only the value at one fixed time.

</details>

<a id="section-644-17-confidence-sequence-stopping"></a>
### 17. Confidence-sequence stopping {#section-646-17-confidence-sequence-stopping}

**Exercise S2.17**

If coverage holds simultaneously for all times, why does it hold at a stopping time $\\tau $?

<details>
<summary>Hint 1</summary>

Intersect all the time-indexed coverage events first.

</details>

<details>
<summary>Hint 2</summary>

Any finite-valued stopping-time index also lies inside that simultaneous event's guarantee.

</details>

<details>
<summary>Solution</summary>

**Solution.** On the simultaneous coverage event, $\\theta \\in C_t$ for every $t$, hence also for the random index $\\tau $. Its probability is at least $1-\\alpha $.

</details>

<a id="section-671-18-winner-s-curse"></a>
### 18. Winner's curse {#section-673-18-winner-s-curse}

**Exercise S2.18**

Why is the maximum of several unbiased noisy estimates generally upward biased for the largest corresponding true value?

<details>
<summary>Hint 1</summary>

A maximum is a convex function of the estimate vector.

</details>

<details>
<summary>Hint 2</summary>

Jensen yields nonnegative selection bias for the maximum target; strictness needs extra nondegeneracy.

</details>

<details>
<summary>Solution</summary>

**Solution.** Selection prefers coordinates with positive noise. The maximum operation is convex, and noise-induced ranking adds positive selection error unless the setting is degenerate.

</details>

<a id="section-698-19-data-splitting"></a>
### 19. Data splitting {#section-700-19-data-splitting}

**Exercise S2.19**

What independence makes second-sample inference valid after first-sample selection?

<details>
<summary>Hint 1</summary>

Condition on the data used to choose the question.

</details>

<details>
<summary>Hint 2</summary>

The independent assessment sample keeps its original conditional sampling law.

</details>

<details>
<summary>Solution</summary>

**Solution.** Conditional on the first sample, the selected question is fixed, while the independent second sample retains its unselected sampling law.

</details>

<a id="section-725-20-truncated-reference"></a>
### 20. Truncated reference {#section-727-20-truncated-reference}

**Exercise S2.20**

If a normal statistic is reported only when it exceeds $c$, why is its ordinary upper-tail p-value wrong conditional on reporting?

<details>
<summary>Hint 1</summary>

Condition on the exact reporting event.

</details>

<details>
<summary>Hint 2</summary>

The reference density must be normalized above the selection cutoff.

</details>

<details>
<summary>Solution</summary>

**Solution.** Given selection, values below $c$ are impossible and the density is renormalised on $(c,\\infty )$. The ordinary tail uses the unconditioned law and ignores this truncation.

</details>


<a id="section-753-16-summary-and-forward-route"></a>

<a id="section-916-24-optional-practice-extensions-for-sequential-and-sele"></a>
### 21. SI-13-E21. A bet chosen after the outcome {#section-917-si-13-e21-a-bet-chosen-after-the-outcome}

**Exercise S2.21**

Under iid Bernoulli$(1/2)$ sampling, substitute $q_t=X_t$ into the betting factor of Section 19. Compute the resulting wealth and explain why the crossing guarantee does not apply. Contrast this with $q_t=(1+S_{t-1})/(t+1)$.


<details>
<summary>Hint 1</summary>

The current response is not measurable before it is observed.

</details>

<details>
<summary>Hint 2</summary>

With $q_t=X_t$ every betting factor is two; compare this with the past-based rule's conditional mean-one factor.

</details>


<a id="section-938-si-13-e22-a-selective-tail-is-a-renormalized-tail"></a>
### 22. SI-13-E22. A selective tail is a renormalized tail {#section-940-si-13-e22-a-selective-tail-is-a-renormalized-tail}

**Exercise S2.22**

A $N(\\theta,1)$ observation is reported only above $c=\\Phi^{-1}(0.95)$. At $\\theta_0=0$, the report is $y=\\Phi^{-1}(0.995)$. Compute the ordinary and selection-conditional upper-tail p-values, and decide whether each is below $0.05$.


<details>
<summary>Hint 1</summary>

Selection has null probability $0.05$ and the observed upper tail is $0.005$.

</details>

<details>
<summary>Hint 2</summary>

Divide the ordinary tail by the selection probability to obtain the conditional tail.

</details>


<a id="section-961-25-solutions-to-the-sequential-and-selective-extensions"></a>

<a id="section-1029-solutions"></a>
## Solutions {#section-1031-solutions}

<a id="section-963-25-solutions-to-the-sequential-and-selective-extensions"></a>
<details>
<summary>Solution</summary>

<a id="section-965-si-13-e21-a-bet-chosen-after-the-outcome-solution"></a>
### SI-13-E21. A bet chosen after the outcome — solution {#section-967-si-13-e21-a-bet-chosen-after-the-outcome-solution}

When $X_t=1$, $q_t/p_0=2$; when $X_t=0$, $(1-q_t)/(1-p_0)=2$. Thus every factor is 2 and wealth is $2^t$, exceeding any fixed threshold eventually with probability one. The rule uses the current outcome and is not predictable from $\\mathcal F_{t-1}$, so its conditional factor expectation is 2 rather than 1. The past-based smoothed choice is known before $X_t$; conditional on the past its factor expectation is $(1/2)(2q_t)+(1/2)(2(1-q_t))=1$. It therefore meets the martingale proof's hypothesis.

</details>
<details>
<summary>Solution</summary>

<a id="section-973-si-13-e22-a-selective-tail-is-a-renormalized-tail-solut"></a>
### SI-13-E22. A selective tail is a renormalized tail — solution {#section-975-si-13-e22-a-selective-tail-is-a-renormalized-tail-solut}

The ordinary tail is $1-0.995=0.005=1/200$, which is below $0.05$. Selection has null probability $1-0.95=0.05=1/20$, so the conditional tail is $(1/200)/(1/20)=0.10$, which is above $0.05$. The second calculation is calibrated among reports produced by this exact fixed-cutoff protocol. It is not a posterior probability for the null or a correction for any different selection map.

</details>
<a id="section-978-26-proof-and-attribution-boundary-for-the-multiplicity-"></a>

## Sources {#section-984-sources}

All earlier references, exact theorem locators, probability-model qualifications and source notes in this chapter remain part of the exposition. The book [reference guide](back-matter/references-and-attribution-guide.md) records the primary source map.

<a id="section-986-summary"></a>
`;export{e as default};