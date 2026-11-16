var e=`---
id: course-probability-statistics-advanced
title: "Statistical Experiments, Processes, and Bayesian Decisions"
level: advanced-undergraduate
estimated_minutes: null
license: CC BY-SA 4.0
---

# Statistical Experiments, Processes, and Bayesian Decisions

<!-- euler-course-route -->

## Current course route

The [current chapter syllabus](/courses/atlas-probability-statistics-advanced/) includes the nineteen-chapter core of [Advanced Statistical Inference](/books/library-book-advanced-statistical-inference-reference/) and the seven retained companion readings. Earlier week and chapter identities stay available. The route remains Outline while the required core expansions are unfinished.

Preparation courses: [Statistics II: statistical inference](/courses/course-statistical-inference/) · [Probability with proofs](/courses/atlas-probability-processes-standard/) · [Real analysis](/courses/course-lucent-analysis/) · [Regression](/courses/course-regression/).

The earlier mathematical explanations, proofs, assignments and complete solutions remain below with their original task identities. Their first-attempt, comparison and correction requirements still apply when you choose that earlier work. Existing notes and study marks keep their original scope.

**Selection ID:** \`probability-statistics-advanced-joined\`.

An observation schedule can erase exactly the information needed for a decision.
Two processes can have the same stationary distribution and the same two-hour
observations, yet different hourly behavior. A posterior can change when a sensor
model changes; an informative study can have no value for a particular action.
This course turns those statements into calculations, proofs and a sequence of work.

The route joins mathematical statistics, stochastic processes, Bayesian modelling
and design through an observation-design investigation. It also retains the
existing computational Bayesian capstone, where numerical error must actually be
checked. Exact hand arithmetic in the finite project does not complete that
software work. Study time depends on the selected reading, attempts and corrections. These are working selections,
with public feedback, rather than qualification of whole reference books.

## Preparation and entry repairs

Bring conditional probability, joint laws, expectation and covariance, sampling
distributions, elementary likelihood, calculus, linear algebra, proof and
convergence. The [Principles prerequisite diagnostic](#/item/book-principles-statistical-inference?section=front:prerequisite-diagnostic-and-repair)
has complete answers and repair routes. Use completed core work as preparation;
this route does not reassign its old 88 probability and 56 R questions. A reading
checkmark alone does not supply the argument or executed analysis you need.

First read [Statistical Experiments and Observation Laws](#/item/book-principles-statistical-inference?chapter=statistical-experiments-and-observation-laws),
including protocol, stopping, preprocessing, nuisance and repetition examples.
Write the observable sample space and law of one experiment. This chapter is
preparation; its twenty exercises are optional repairs, outside the required
four twenty-question sets below.

Try these six checks before their answers:

1. Can equal Bernoulli(1/2) one-time marginals describe both constant and alternating paths?
2. If two complete observation laws agree at distinct states, can more repetitions consistently identify those states?
3. Does a common positive data-only factor change a likelihood ratio?
4. What extra objects turn posterior probability into an action?
5. Does convergence in distribution alone imply convergence of variances?
6. Does repeating a numerical calculation repair a false sampling or sensor model?

**Answers and repairs.** Yes: start with a fair bit and keep it fixed or alternate.
No, when complete repeated-data laws remain identical: every statistic then has
the same distribution and cannot concentrate at two separated targets. The
common factor cancels. Actions need an action set and consequences represented
by loss or utility. Distributional convergence need not control second moments;
use appropriate moment or uniform-integrability arguments. A rerun checks
computation under assumptions, not empirical validity. Repair Questions 1–2 with
process/identification, 3–4 with likelihood/loss, 5 with the renewal variance
exercise, and 6 with Bayesian checking and the capstone workflow.

Before process work, verify sigma-algebras, measurable functions, integrability and almost-sure equality using [Measure and Lebesgue Integration](#/item/course-measure-lebesgue-integration), Modules 1–4; if these are unfamiliar, complete Exercises 1–4 and 8 with their adjacent worked answers before advancing.
Then use [Conditional Expectation and Information Projection](#/item/book-probability-models-proofs?chapter=conditional-expectation-and-projection), §§1–2 and Exercises 1–7 with complete adjacent solutions, to repair finite-cell conditioning, preservation, pull-out and tower. Record these repairs separately from the 97 main selected questions; reuse a documented correct attempt once.
Explicitly, a probability space is (Ω,F,P), where F contains Ω and is closed under complements and countable unions, and P:F→[0,1] is countably additive with P(Ω)=1. A real X is measurable when {X>a} belongs to F for every real a; it is integrable when E|X|<∞. A filtration (F_t) is an increasing family of sub-sigma-algebras of F.
For a sub-sigma-algebra G⊆F and integrable X, E[X|G] is an integrable G-measurable Z satisfying ∫_A Z dP=∫_A X dP for every A in G, unique only almost surely. If H⊆G is also a sub-sigma-algebra then E[E[X|G]|H]=E[X|H]. The linked conditional-expectation source proves this identity from the defining integrals; it imports existence from Radon–Nikodym. No proof of that existence theorem is required here.
The selected process chapters use these notions; they do not supply all this preparation. [Brownian Motion](#/item/book-stochastic-processes-paths?chapter=brownian-motion), Definition and Covariance structure, supplies the Brownian definition and covariance calculation, while importing Kolmogorov extension and Kolmogorov–Chentsov without giving their full theorem hypotheses or proofs.
The Brownian input used here is an existing process B_0=0 with almost-surely continuous paths and independent increments B_t−B_s distributed N(0,t−s). This law and its continuous modification are imported inputs, not constructions established by the selected chapter or its three exercise calculations.
For clarity, a sufficient imported continuity criterion on each compact time interval is E|X_t−X_s|^a≤C|t−s|^(1+b), with a,b,C>0; it gives a modification locally Hölder of every exponent γ<b/a. Gaussian Brownian increments satisfy E|B_t−B_s|^4=3|t−s|², so a=4,b=1 suffices; this explains applicability without presenting a proof of Kolmogorov–Chentsov.
Renewal-limit conclusions remain conditional on their selected source hypotheses. General measure construction, Radon–Nikodym and Kolmogorov–Chentsov proofs, stochastic integration and SDE construction remain outside this advanced route; its Brownian exercises use the declared existing law.

The computational branch requires basic Python arrays and functions. Use the
[Bayesian preparation lesson](/bay_inference_boook/site/course/chapters/00_preparation.html)
and [selected-core syllabus](/bay_inference_boook/site/course/syllabus.html).
Decisions requires Chapters 1–11, especially prediction, group models and
sensitivity. Bring a documented completed selected-core portfolio if you have
it. Otherwise complete that syllabus's essential path and original lab/question
obligations: updating, beta-binomial inference, prediction, continuous models,
Monte Carlo, HMC diagnostics, regression, GLMs, hierarchy, model checking and
robustness. Its preparation is a bridge, not a Python course. Keep the original
0.1–12.3 questions, midcourse and capstone distinct from optional banks. Native
5.3 requires rejection-preserving versus jump-only numerical evidence; 6.3
requires its changed-model refit and diagnostics. A selected reading path is not
an instruction to skip sections that the assigned published notebook executes.

Reuse acceptable completed work with its scripts, output, corrections and source
record; count it once. If a runtime is unavailable, assigned execution remains
pending. Reading an output, running the finite oracle, or a hand comparison does
not complete native labs, MCSE checks or the executable capstone. The reader
does not execute notes or learner code. No new R task is assigned; unfinished
R/JavaScript obligations in a prerequisite retain their original meanings.

## Ordered mathematical work and complete keys

Keep a first response before opening each public model and record earlier
exposure. Read each assigned chapter's explanations and worked examples before
its questions. Each Principles selection below assigns Exercises 1–20, with
an adjacent **Solution.** for every question in the same chapter.

| Stage | Required work | Complete feedback and retained product |
| --- | --- | --- |
| 1 — Experiment and identification | Preparation above, then [Estimands, Identification, and Design](#/item/book-principles-statistical-inference?chapter=estimands-identification-and-design), Exercises 1–20 | Same chapter §12; observation-law/equivalence-class proof and identification audit |
| 2 — Actions and repeated risk | [Decision Rules, Loss, and Risk](#/item/book-principles-statistical-inference?chapter=decision-rules-loss-and-risk), Exercises 1–20 | Same chapter §11; statewise risk and Bayes improvement versus dominance |
| 3 — Likelihood and conditioning | [Likelihood, Score, and Evidence](#/item/book-principles-statistical-inference?chapter=likelihood-score-and-evidence), Exercises 1–20, then [Bayesian Decision and Inference Bridge](#/item/book-principles-statistical-inference?chapter=bayesian-decision-and-inference-bridge), Exercises 1–20 | Their §12 and §15 keys; support, normalisation, prediction and posterior-risk arguments |
| 4 — Processes and structured inference | Three process chapters and exact advanced-course selections below | Nine process keys and five structured-inference keys; proofs with their hypotheses |
| 5 — Observation design | Attempt PSA-P and then PSA-C before their models below | Primary/changed portfolios connecting process law, identification, calibrated inference, prediction, risk and observation cost |
| 6 — Computational Bayesian synthesis | [Decisions](/bay_inference_boook/site/course/chapters/12_decisions.html), original Exercises 12.1–12.3 and full existing capstone | [Original keys](/bay_inference_boook/site/course/solutions.html), [complete reference](/bay_inference_boook/site/course/capstone_solution.html), actual executable analysis and decision memo |
| 7 — Later return | After the intervening computational capstone and corrections, begin PSA-R on a blank page | Complete return model below; separately dated response declaring prior exposure |

These **80 Principles questions** retain the actual experiment and support.
Regular score identities need conditions licensing differentiation under an
integral; the moving-support uniform example shows why an optimizer is not a
regularity proof. The Bayesian bridge uses exact algebra and finite sums under
a proper prior and likelihood; posterior probability does not supply frequentist
coverage, causal identification or empirical adequacy.

Read the explanation, worked examples and limitations in all three chapters
below and complete all three exercises in each. These nine questions were
outside the old introductory probability roster.

| Process chapter | Required exercises and proof boundary |
| --- | --- |
| [Specifying a Process](#/item/book-stochastic-processes-paths?chapter=specifying-a-process) | Exercises 1–3: binary-digit joint laws, covariance-kernel positivity, conditional-expectation martingale; complete adjacent keys |
| [Renewal Processes](#/item/book-stochastic-processes-paths?chapter=renewal-processes) | Exercises 1–3: exact exponential renewal equation, variance asymptotic, equilibrium inspection age; positivity/iid, finite mean and Exercise 2's stronger nonarithmetic/finite-third-moment conditions |
| [Brownian Motion](#/item/book-stochastic-processes-paths?chapter=brownian-motion) | Exercises 1–3: square/exponential martingales and expected quadratic variation; independent Gaussian increments and finite moments |

The renewal strong law, convergence of expected counts and convergence of
variances are different results. A CLT alone does not prove a variance limit.
Length-biased equilibrium inspection differs from sampling at renewal epochs;
retain nonarithmetic/equilibrium qualifications rather than asserting every
lattice fixed-time limit. Brownian finite-dimensional Gaussian laws alone do
not give continuous paths. Expected quadratic variation t does not alone prove
convergence: for an equal n-partition, independent Gaussian increments give
variance 2t²/n as well, proving mean-square convergence to t. Squared increments
are not individually equal to dt. The source's informal differential shorthand
is not a stochastic-integral construction or a proof of a path theorem.

From [Advanced Statistics: Design, Dependence, and Incomplete Outcomes](#/item/course-advanced-statistics-design-dependence),
read Units 1–13 explanations and solve exactly the five numbered **Cumulative
assessment with solved course problems**: Poisson offset, AR(1), PCA, survival
and multiplicity, with their adjacent solutions. Keep design weights, link and
exposure, covariance, dependence, risk-set and selection conditions beside the
answers. The wider five-stage 35-hour route, rolling-origin software assignment
and open real-data Unit 14 project are optional beyond this selection. If
chosen, they retain actual execution/real-data obligations. The fixed portfolios
below supply this route's required joined synthesis. Do not import the old
school diagnostic's ambiguous assignment wording as a specific design fact.

The four Principles sets, nine process questions, five advanced-course questions
and three Decisions questions give **97 explicitly selected questions**. This
excludes entry checks, unfinished native Bayesian preparation, its full capstone
and the three portfolios. It is not a time estimate or claim of new graded attempts.

## Fixed observation-design problem data

**PSA-CHAIN-v1** is original synthetic teaching mathematics, version 1, with no
measured service or empirical population claim. One unknown regime H, L or F,
is fixed throughout an experiment. A trajectory has binary state X_t at hourly
integer times. X_0 is fair and independent of H. Conditional on H, each hour
independently flips with probability p_H: transition rows \`(1-p_H,p_H)\` and
\`(p_H,1-p_H)\`. Switches S_t=1{X_t differs from X_(t-1)} are iid Bernoulli(p_H)
conditional on H; the state rows are dependent.

| Regime | Flip probability p_H | Initial probability X_0=1 |
| --- | ---: | ---: |
| L | 1/4 | 1/2 |
| F | 3/4 | 1/2 |

Repeated-sampling risk holds H fixed and repeats this experiment. Bayesian
conditioning gives that same unknown H a proper prior; it does not redraw H
at each transition. Independent replicate paths are independent conditional
on their shared H. The primary data are one complete path, keyed by trajectory
ID and hour, with no missing values/code, exclusions, censoring, stopping or
outcome-dependent selection.

| Trajectory ID | Hour | Recorded state |
| --- | ---: | ---: |
| path-P | 0 | 0 |
| path-P | 1 | 1 |
| path-P | 2 | 0 |

The target is the **next hourly flip S_3=1**, not being in state 1, previous
outage, a stationary fraction or an intervention effect. Reserve covers the
stipulated disruption loss but does not alter the chain. Losses are compatible
fictional units, not inferred prices. Choose R only for strictly smaller
posterior expected loss; ties choose N.

| Action | Loss if next flip S_3=0 | Loss if next flip S_3=1 |
| --- | ---: | ---: |
| N — no reserve | 0 | 10 |
| R — reserve | 6 | 6 |

| Portfolio | Prior probability H=F | Observed data | Sensor sensitivity P(Z=1 given S=1) | False-positive P(Z=1 given S=0) |
| --- | ---: | --- | ---: | ---: |
| PSA-P | 1/2 | X_0,X_1,X_2 = 0,1,0 | 1 | 0 |
| PSA-C | 1/2 | Only X_0,X_2 = 0,0 | 1 | 0 |
| PSA-R | 1/4 | Only Z_1,Z_2 = 1,1 | 3/4 | 1/4 |

PSA-C drops hour 1 by a fixed schedule, keeping the hourly process, history
length, prior, action horizon and losses unchanged. PSA-R records noisy switch
indicators, not true states. Given true switches and H, measurement errors are
independent over time with the known validated rates above, stipulated to
transport to this experiment. There is no missingness or outcome selection.
The latent process and next true-flip target remain fixed. Report both its
prior and measurement changes. Information values exclude collection costs
until explicitly added. Perfect information below means learning H, not
foreseeing the next random S_3.

## Primary portfolio — PSA-P

Save a first response before models and produce these eight linked parts.

1. State experiment, path unit, joint law, fixed-state repetition, prior,
   target, clock and actions/losses. Prove both stationary marginals are fair
   and explain why that does not identify the joint law or imply independence.
2. Recover switches from the path. Derive both ordered-path likelihoods,
   likelihood ratio and posterior; explain when initial-bit and binomial-count
   factors cancel and when the latter remains essential.
3. For every K=S_1+S_2=0,1,2 give both sampling masses, prior-predictive mass,
   posterior F, next-flip predictive probability, action losses and choice.
   Explain why independently multiplying marginal fair-switch probabilities
   after integrating H gives the wrong observation law.
4. Find size and power of the fixed test rejecting L iff K=2. Keep them
   distinct from posterior probability. Evaluate the decision rule's risk at
   each fixed H, integrating training data and future switch conditional on H.
5. Compare prior risk with constant actions. Compute cost-free EVSI and EVPI
   for H, prove the posterior-loss minimisation identity, and evaluate study
   prices 1/4 and 1/2 loss unit for the same target/horizon.
6. Derive conditional covariance at lag h and compare lag-one/two correlations.
   Explain its AR(1)-shaped covariance without asserting Gaussian observations
   or iid innovations.
7. Supply an exact enumeration or an independently written program checking
   all path/future-switch branches. Call a program executed only if actually
   run with retained output. Analytic enumeration suffices for this finite
   portfolio; it does not complete the separate software capstone.
8. Finish a decision/design memo with assumptions, rejected adverse claim and
   a measurement/design change addressing the weakest condition. No causal
   service improvement is identified by this synthetic observational process.

## Changed observation portfolio — PSA-C

Begin separately after the primary attempt. Keep the fixed controls above;
do not relabel a two-hour transition as hourly.

1. Sum over the unobserved middle state to derive both two-hour matrices,
   endpoint likelihoods and posterior for recorded 0,0.
2. Prove every finite even-hour law is identical under L and F, and that
   independent replicate paths retain this equality. Prove no consistent
   estimator can identify p_H from these observations at both states.
3. Predict the next **hourly** flip, choose an action and compute EVSI for
   this design. Explain why a longer even-hour record cannot fix aliasing,
   and which additional measurement or restriction could address it.
4. Prove a skeleton-based test has equal size at L and power at F, including
   independent external randomisation. Compare with the primary calibrated test.
5. Reconcile changed inference/action with the unchanged process/prior/losses,
   and write a complete revised memo while preserving the first response.

## Computational project and later return — PSA-R

Before the return, finish Stage 6. Read the native [capstone brief](/bay_inference_boook/site/course/capstone.html),
save the target/model/prior/holdout plan, then attempt, consult reference and
revise. Lab 12, executed notebook and report are public worked support; record
opening them. Sixteen centre-arm cells represent eight synthetic centres.
Holdout successes remain unused for fitting or model/prior choice until the
analysis is frozen. The target equally weights existing centres for 10,000
future visits, with the source's five-unit completion value and 1,000-unit cost.

Retain all nine capstone requirements: validated units/target/actions; pooled
baseline; centre-specific or justified hierarchical model; proper prior
prediction and at least three prior settings; actual computation and analytic
or sampler checks; targeted predictive criticism and frozen holdout evaluation;
posterior improvement/interval/tail probabilities, expected utility, opportunity
loss and EVPI; separate prior/weight/cost sensitivities; executable report/memo
with provenance, versions, seeds and results. Follow existing locked-environment
and personal-work instructions and preserve published reference artifacts.
A justified equivalent analysis retains every statistical/execution obligation.

Use the [complete reference report](/bay_inference_boook/site/course/capstone_solution.html)
and [original solutions](/bay_inference_boook/site/course/solutions.html).
Exact conjugate draws need analytic moments and MCSE, not invented R-hat or
divergence diagnostics. An MCMC alternative needs its actual chains, ESS,
MCSE, R-hat and geometry/divergence evidence. The original 100-point rubric
retains its native role; reference marks are not grades awarded to your work.
Reuse an acceptable completed capstone with its files and corrections once.

Write a comparison paragraph: the native posterior distribution of conditional
expected incremental value is not the predictive law of realised rollout
consequences. PSA's loss averages over an explicit future event. A probability
of positive conditional expected value is neither a realised-profit probability
nor a p-value. Changing centre weights changes a target; changing loss changes
the action problem. Extra draws only reduce numerical approximation error.

After that intervening study/correction, attempt PSA-R on a blank page and
declare earlier help. This public return is not held-out work or verified delay.

1. Derive recorded-positive probabilities, likelihoods for Z=11, posterior F,
   next true-flip prediction and action under the new prior/validated sensor.
2. Enumerate all M=Z_1+Z_2 branches with prior-predictive masses, posteriors,
   true-flip predictions and actions; compute current risk, EVSI and EVPI.
   Can information change beliefs while having zero value for this action?
3. Change prior only, sensor only and both for observed 11. Identify the
   wrong model fitted by treating sensor positives as perfect true switches.
4. Repair: “Recorded flip fraction is the true parameter; more even-hour data
   identify H; posterior certainty guarantees real-world causal benefit; EVSI
   equals perfect foresight of the next random outcome.”
5. Specify sensor validation/transport evidence; explain s=f and unknown-error
   nonidentification. Write the corrected memo with each repair traced to a
   calculation or logical condition.

## Complete primary model and finite certificates

For k switches in an ordered path of n transitions,

$$P_H(X_0=x_0,\\ldots,X_n=x_n)=\\frac12p_H^k(1-p_H)^{n-k}.$$

The fair initial law is stationary since (1/2)(1−p)+(1/2)p=1/2. Consecutive
states agree with probability 3/4 at L and 1/4 at F, so equal marginals do
not imply equal joint laws. Switches are independent conditional on H.
After integrating the equal prior, P(S_1=S_2=1)=5/16 rather than the product
of marginal probabilities 1/4: shared uncertainty in H contributes covariance
1/16. Do not silently redraw the regime per transition.

The observed 010 has two switches. Ordered-path likelihoods are 1/32 and
9/32; ratio 9 and equal prior odds give posterior F=9/10. Conditioning on
X_0 cancels 1/2. Recording K instead multiplies by a common binomial coefficient,
irrelevant to the ratio but essential to repeated-sampling count probabilities.

| K | P(K given L) | P(K given F) | Prior-predictive P(K) | Posterior F | Next-flip probability | Loss N | Loss R | Action |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| 0 | 9/16 | 1/16 | 5/16 | 1/10 | 3/10 | 3 | 6 | N |
| 1 | 3/8 | 3/8 | 3/8 | 1/2 | 1/2 | 5 | 6 | N |
| 2 | 1/16 | 9/16 | 5/16 | 9/10 | 7/10 | 7 | 6 | R |

The predictive probability is 1/4+(1/2)P(F given data). Reserve is strictly
preferred above probability 3/5, equivalently posterior F>7/10. For the
observed path choose R with expected loss 6 rather than 7. The calibrated
test rejecting L iff K=2 has size 1/16 and power 9/16. Its observed upper-tail
p-value is 1/16, distinct from posterior 9/10. It is level 1/10 but not
exactly size 1/10; no outcome-selected cutoff is being calibrated.

The action rule is R only for K=2. Future S_3 is independent of training
switches conditional on H, so its statewise risks are

$$R(L,\\delta)=\\frac{15}{16}\\frac{10}{4}+\\frac1{16}6=\\frac{87}{32},$$
$$R(F,\\delta)=\\frac7{16}\\frac{30}{4}+\\frac9{16}6=\\frac{213}{32}.$$

| Rule or information | Risk at L | Risk at F | Equal-prior expected loss |
| --- | ---: | ---: | ---: |
| Always N | 5/2 | 15/2 | 5 |
| Always R | 6 | 6 | 6 |
| Two-hourly-switch Bayes rule | 87/32 | 213/32 | 75/16 |
| Learn H, then choose | 5/2 | 6 | 17/4 |

Prior-average loss improves over both constant actions, but not statewise:
the adaptive rule is worse than always N at L and always R at F. Bayes
optimality is not dominance. Averaging posterior minimum losses also gives
(5/16)3+(3/8)5+(5/16)6=75/16, by the finite tower identity

$$E[L(H,S_3,\\delta(D))]=E\\{E[L(H,S_3,\\delta(D))\\mid D]\\}.$$

There are finitely many branches and bounded nonnegative losses; conditional
minimisation at each D minimises the average. Cost-free data can be ignored,
so optimal average loss cannot increase. For observed adverse data the
posterior minimum 6 exceeds pre-data minimum 5; its average is still 75/16.

| Primary information quantity | Exact loss-unit value |
| --- | ---: |
| Current minimum expected loss | 5 |
| Expected minimum loss after hourly study | 75/16 |
| Expected minimum loss after learning H | 17/4 |
| EVSI for hourly study | 5/16 |
| EVPI for H | 3/4 |
| Net information gain at study cost 1/4 | 1/16 |
| Net information gain at study cost 1/2 | -3/16 |

The 1/4-unit study has positive net value; the 1/2-unit study does not, under
this fictional decision contract. EVPI bounds cost-free sample information
for the same model/actions/horizon/loss. Foreseeing S_3 is a different
experiment: choose N if no flip and R if flip, expected loss 3 and value 2,
not the 3/4 value of learning H.

Write V_t=X_t−1/2. Then E[V_(t+1) given X_t,H]=(1−2p_H)V_t, so iteration
and Var(X_t given H)=1/4 give

$$\\operatorname{Cov}(X_t,X_{t+h}\\mid H)=\\frac14(1-2p_H)^h.$$

Lag-one correlations are 1/2 and −1/2, while both lag-two correlations are
1/4. This covariance shape resembles AR(1), but the observations are binary
and the conditional residual distribution depends on current state. It is
not an iid-Gaussian-innovation AR model. The native AR(1) exercise uses its
own iid-innovation and |phi|<1 assumptions for variance and forecast.

## Complete changed model and identification proof

Summing over the missing middle state gives, at both regimes,

$$P_L^2=P_F^2=\\begin{pmatrix}5/8&3/8\\\\3/8&5/8\\end{pmatrix}.$$

Two-hour flip probability is 2p(1−p)=3/8; return probability is 5/8. With
the fair initial bit, endpoints 0,0 have likelihood 5/16 under both H.
The ratio is 1, posterior F remains 1/2, next **hourly** flip probability is
1/2 and choose N with loss 5 rather than 6. Expected post-study minimum
loss remains 5, so EVSI is zero. Positive collection cost is a net cost
for this specified next-hour problem, despite a physically unchanged chain.

Every even-hour path x_0,x_2,…,x_(2m) has the common initial factor 1/2 times
the product of entries of the identical two-hour matrix. Hence all finite
observation laws agree, as do products for conditionally independent replicate
paths. Every statistic has the same law at L and F. Consistency for p=1/4
and 3/4 would require probabilities of both disjoint neighborhoods (1/8,3/8)
and (5/8,7/8) to tend to one under that common law, which is impossible.
Longer all-even records cannot resolve H. Record some genuine odd-hour
transitions under a justified design or add an externally justified restriction;
an optimizer or concentrated prior is not an identifying observation.

Any fixed skeleton-based test has equal rejection probability at L and F:
size equals power. A shared independent external randomisation does not change
that equality. The full-path test's 1/16 size and 9/16 power do not transfer
to this coarsened experiment. The clock/recording law changed, not p_H.

A corrected memo: “The recorded endpoints leave the regimes equally probable
under our equal prior/model. Choose no reserve for a next-hour flip: expected
loss 5 versus 6. All-even observations have zero value for this action and
cannot identify these regimes even with longer records. Observing the
intermediate hour is a design change; more calculation on the old skeleton
does not supply that observation.”

## Complete return model and measurement repairs

Recorded-positive probability is r_H=f+(s−f)p_H. With s=3/4,f=1/4 this gives
r_L=3/8,r_F=5/8. Sensor outputs are independent conditional on H because
their switches/errors are independent, but their rates differ from p_H.
Recorded 11 has likelihoods 9/64 and 25/64. Prior odds F:L=1:3 give posterior
odds 25:27, hence posterior F=25/52. The next **true** flip probability is
1/4+(1/2)(25/52)=51/104. Loss N is 255/52, about 4.904, below reserve's 6;
choose N. Measurement does not change the latent process or loss target.

| M | Prior-predictive P(M) | Posterior F | Next true-flip probability | Loss N | Action |
| --- | ---: | ---: | ---: | ---: | --- |
| 0 | 21/64 | 3/28 | 17/56 | 85/28 | N |
| 1 | 15/32 | 1/4 | 3/8 | 15/4 | N |
| 2 | 13/64 | 25/52 | 51/104 | 255/52 | N |

The prior true-flip probability is 3/8 and current minimum expected loss
15/4. Every possible observation keeps N. Averaging the table's conditional
losses gives 15/4 again: EVSI is zero although posteriors change. Perfect
H information yields (3/4)(5/2)+(1/4)6=27/8 and EVPI=3/8. Information may
have no value for this fixed action/loss despite being statistically informative;
another horizon, action or consequence would define a different problem.

| Observed-11 sensitivity case | Prior F | Sensor sensitivity | False-positive | Posterior F | Next true-flip probability | Action |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| Original prior and perfect sensor | 1/2 | 1 | 0 | 9/10 | 7/10 | R |
| Prior change only | 1/4 | 1 | 0 | 3/4 | 5/8 | R |
| Sensor change only | 1/2 | 3/4 | 1/4 | 25/34 | 21/34 | R |
| Both changes, PSA-R | 1/4 | 3/4 | 1/4 | 25/52 | 51/104 | N |

Treating sensor positives as true switches substitutes the perfect-sensor
likelihood. With the changed prior this gives posterior 3/4, prediction 5/8
and action R, reversing the correct return decision. Neither change alone
reverses the primary action, as the controlled table shows. Report both.

Known s≠f identifies p=(r−f)/(s−f) from a population recorded rate when
the model transports. Two noisy observations do not turn their sample
proportion into that population parameter. If s=f, the observation law is
constant in p and provides no information. If error rates and p are all
unknown from recorded positives alone, further validation or structure is
needed. Paired true-switch/recorded-output validation in representative
conditions could inform rates and transport; estimated-rate uncertainty
must then be propagated rather than treated as known constants.

The all-even aliasing proof concerns its own experiment; the hourly sensor
experiment is different. A degenerate prior can produce posterior certainty
without identification. No posterior or toy action proves a real-world causal
benefit. Sampling/test law, posterior, prediction, EVSI, information about H
and future-outcome foresight keep their distinct targets. More simulation
cannot repair a wrong sensor, selection, assignment or transport assumption.

## Comparison, records and completion boundaries

Each PSA portfolio needs its experiment/target contract, derivation, complete
branch tables, applicable repeated-risk/decision proofs, an adverse claim and
repair, and bounded memo. Use unscored criteria: masses sum to one; denominators
are positive; parameters and observations remain distinct; actions minimise
the declared conditional loss; repeated risk includes the right future event;
coarsening/sensors use their actual laws; and empirical/causal/coverage claims
state their missing evidence. Correct arithmetic and unjustified assumptions
separately. A numerical action without those arguments is unfinished.

If marginals replace joint laws, reconstruct a two-time event. If a likelihood
multiplies marginal switches after mixing H, condition on H first. If cadence
is relabelled, use transition products on the original clock. If posterior mass
becomes power/coverage, identify the probability space. If Bayes improvement
becomes dominance, compare both statewise risks. If EVSI becomes EVPI, enumerate
actual study outcomes. If recorded rates become true rates, restore the sensor
law. For limits, separate finite expectation, variance and the limit theorem.
Use the matching native key to repair the argument, not just its final value.

Keep \`PSA-P-first-YYYY-MM-DD.txt\`, \`PSA-P-comparison-YYYY-MM-DD.txt\` and
\`PSA-P-revised-YYYY-MM-DD.txt\`, and the same three files for PSA-C/PSA-R using
actual dates. Preserve earlier versions, source IDs, fixture versions, public
models/hints already seen, changed assumptions and reasons for corrections.
Keep actual capstone scripts, output, frozen split, environment, seeds and
diagnostics beside the writing. Verify backup by reopening files and rerunning
the final assigned analysis in its declared environment. A mutable reading
note does not retain this portfolio. These portfolios add no shared writing
task or grade; a timestamp verifies neither delay nor independent mastery.

No total time estimate has been authored for this joined route. The old
advanced-course 2,100-minute figure describes its different five-stage outline;
the Bayesian 72–96-hour selected-core range is a native study plan,
with preparation additional. Neither is this route's workload. Count reused
work once. The 97 questions, unfinished prerequisites, native capstone, process
proofs, three portfolios, comparison, revision and later return declare the work;
their full combined effort remains unknown. Counts establish no credit,
effectiveness or observed learning.

Mathematics stays in its linked source readers. This route and its original
finite fixture/model are CC BY-SA 4.0. Native edition, rubric and execution
boundaries remain explicit. General measure probability, full stochastic
integration/SDE construction and every inference speciality require further
study; this selection does not qualify whole books or native formal assessment.
`;export{e as default};