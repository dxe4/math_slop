var e=`---
id: course-probability-processes-standard
title: "Probability with proofs"
level: undergraduate
estimated_minutes: 8400
license: CC BY-SA 4.0
---

# Probability with proofs

<!-- euler-course-route -->

## Current course route

Use the [current chapter syllabus](/courses/atlas-probability-processes-standard/) for the ordered readings, preparation courses and exercises. The earlier explanations and worked tasks below retain their original identities and remain available for study and saved work.

This course develops finite models, continuous distributions, expectation, limit theorems, and the first stochastic processes as one connected subject. It assumes algebra, elementary counting, and single-variable integration. Every calculation begins with a model and ends with a hypothesis audit. **Selected-core scope:** the [introductory self-study core](#selected-introductory-self-study-core) below fixes the required sections, problems and complete project feedback. Its authored planning midpoint is 140 hours (suggested range 120–160), including attempts and revisions. The retained fourteen-hour table is the original compact overview, not the time allocation or a requirement to finish every linked advanced chapter.

## Entry diagnostic and 14-hour route

Before Module 1:

1. Count the ordered outcomes of three coin flips.
2. Evaluate $\\int_0^1 2x\\,dx$.
3. If events $A,B$ are disjoint, express $\\mathbb P(A\\cup B)$.
4. Give an example showing that zero covariance need not imply independence,
   or mark this as a learning goal.

The answers are eight; 1; $\\mathbb P(A)+\\mathbb P(B)$; and, for example, a
symmetric $X$ with $Y=X^2$ as developed in Module 4. Repair finite counting
or integration before Module 3 if Questions 1–2 are uncertain.

| Stage | Modules | Sustained reading | Evidence |
| --- | --- | --- | --- |
| 1. Probability models | 1–2 | [Event models](#/item/book-probability-models-proofs?chapter=event-models-and-axioms), [conditioning and Bayes](#/item/book-probability-models-proofs?chapter=counting-conditioning-and-bayes), and [independence](#/item/book-probability-models-proofs?chapter=independence-and-product-models) | Sample-space and conditional-probability audit |
| 2. Variables and limits | 3–5 | [Random variables](#/item/book-probability-models-proofs?chapter=random-variables-laws-and-transforms), [expectation](#/item/book-probability-models-proofs?chapter=expectation-integration-and-moments), and [limit laws](#/item/book-probability-models-proofs?chapter=laws-of-large-numbers) | Distribution transform and concentration proof |
| 3. Processes | 6–8 | [Finite Markov chains](#/item/book-stochastic-processes-paths?chapter=finite-markov-chains), [Poisson processes](#/item/book-stochastic-processes-paths?chapter=poisson-processes), and [martingales](#/item/book-stochastic-processes-paths?chapter=martingales-and-stopping) | Exact transition calculation, arrival model, and stopping-hypothesis audit |
| 4. Synthesis | Exercises and project | [Coupling and convergence](#/item/book-stochastic-processes-paths?chapter=coupling-and-convergence) | Model, simulation, counterexample, and claim ladder |

## Module 1 — Probability spaces and counting models

A probability space consists of a sample space $\\Omega$, a collection of events, and a function $P$ satisfying nonnegativity, $P(\\Omega )=1$, and countable additivity for pairwise disjoint events. In a finite model every subset is an event, and finite additivity follows.

For equally weighted finite outcomes, $P(A)=|A|/|\\Omega |$. The symmetry must belong to the elementary outcomes. For two dice, ordered pairs are symmetric while sums are not.

The addition rule

$P(A\\cup B)=P(A)+P(B)-P(A\\cap B)$

comes from partitioning the union into disjoint pieces. Inclusion-exclusion extends this correction to more events.

**Derivation by indicators.** Let $1_A$ equal one on event $A$ and zero otherwise. Pointwise,

$1_{A\\cup B}=1_A+1_B-1_{A\\cap B}$.

Taking expectations gives the addition rule. This technique turns set identities into probability identities.

## Module 2 — Conditioning, independence, and Bayes

For $P(B)>0$, define

$P(A|B)=P(A\\cap B)/P(B)$.

The multiplication rule is $P(A\\cap B)=P(A|B)P(B)$, still with $P(B)>0$. Let $H_{1},\\ldots ,H_k$ be a finite partition of the sample space, with $P(H_i)>0$ for every cell. Then the total-probability formula is

$P(E)=\\sum _i P(E|H_i)P(H_i)$.

If also $P(E)>0$, Bayes’ rule follows by writing the same intersection in reverse:

$P(H_j|E)=P(E|H_j)P(H_j)/\\sum _i P(E|H_i)P(H_i)$.

The denominator is $P(E)$, so its positivity is essential. For a partition with zero-probability cells, use the unconditional identity $P(E)=\\sum_i P(E\\cap H_i)$, or omit those cells from the conditional-probability sum. A null cell has $P(E\\cap H_i)=0$, but $P(E|H_i)$ is undefined by the ratio definition above; multiplying an undefined conditional by zero is not a justification. Likewise, if $P(E)=0$, this formula does not define a posterior $P(H_j|E)$.

Events $A,B$ are independent when $P(A\\cap B)=P(A)P(B)$. Pairwise independence does not imply mutual independence. Let two independent fair bits be $X,Y$, and let $Z=X xor Y$. Each pair among $X,Y,Z$ is independent, but knowing $X,Y$ determines $Z$.

## Module 3 — Random variables and distribution families

A random variable is a measurable numerical function on outcomes. Its cumulative distribution function is

$F_X(x)=P(X\\le x)$.

Every CDF is nondecreasing, right-continuous, tends to zero at $-\\infty$, and tends to one at $\\infty$. Discrete variables have masses $p(x)=P(X=x)$. An absolutely continuous variable has a density $f\\ge 0$ with $F(x)=\\int _{-\\infty }^x f(t)dt$.

Mechanism chooses the family:

- binomial counts successes in a fixed number of independent equal-probability trials;
- geometric counts waiting to the first success;
- Poisson models counts with stationary independent increments;
- exponential models the corresponding memoryless waiting time;
- normal models additive fluctuations and approximates standardized sums.

A density is not a point probability. If $X$ is uniform on $[0,1/2]$, its density equals 2, yet every interval probability is at most one and every single point has probability zero.

For a monotone differentiable transform $Y=g(X)$, density transformation gives

$f_Y(y)=f_X(g^{-1}(y)) |d g^{-1}(y)/dy|$.

When $g$ is not one-to-one, sum over all inverse branches.

## Module 4 — Joint laws, expectation, and dependence

A joint distribution describes variables together. Marginals alone need not determine it. Two fair bits may be independent, identical, or opposite; all three cases have the same one-variable marginals.

Expectation is an integral against probability:

$E[g(X)]=\\sum _x g(x)p(x)$ or $\\int g(x)f(x)dx$.

Linearity, $E[aX+bY]=aE[X]+bE[Y]$, needs no independence. Variance is

$\\operatorname{Var}(X)=E[(X-E[X])^{2}]=E[X^{2}]-E[X]^{2}$.

For finite second moments,

$\\operatorname{Var}(X+Y)=\\operatorname{Var}(X)+\\operatorname{Var}(Y)+2Cov(X,Y)$.

Independence makes covariance zero, but the converse fails. If $X$ is uniform on $\\{-1,0,1\\}$ and $Y=X^{2}$, then $E[XY]=E[X^{3}]=0$ and $E[X]E[Y]=0$, yet $Y$ is determined by $X$.

### Indicator method

If $N=\\sum _i 1_{A_i}$ counts occurring events, then

$E[N]=\\sum _i P(A_i)$

even when the events are dependent. A uniformly random permutation of $n$ elements has expected number of fixed points $n(1/n)=1$.

## Module 5 — Concentration and limit theorems

Markov’s inequality says for nonnegative $X$ and $a>0$,

$P(X\\ge a)\\le E[X]/a$.

Proof: pointwise, $X\\ge a 1_{X\\ge a}$. Take expectations. Applying this to $(X-E[X])^{2}$ gives Chebyshev’s inequality:

$P(|X-E[X]|\\ge t)\\le \\operatorname{Var}(X)/t^{2}$.

For independent identically distributed variables with mean $\\mu$ and variance $\\sigma ^{2}$, the sample mean has mean $\\mu$ and variance $\\sigma ^{2}/n$; Chebyshev gives

$P(|X_bar-\\mu |\\ge \\varepsilon )\\le \\sigma ^{2}/(n\\varepsilon ^{2})$.

This is the weak law of large numbers under finite variance. It says averages converge in probability, not that every finite average is close.

Let $X_1,X_2,\\ldots$ be independent identically distributed real random variables with mean $\\mu$ and variance $0<\\sigma ^{2}<\\infty$, and let $\\sigma>0$ be their standard deviation. The central limit theorem gives

$\\sqrt{n}(X_bar-\\mu )/\\sigma \\Longrightarrow N(0,1)$.

This concerns distribution after centering and scaling. It does not say the original observations are normal, nor does it automatically cover infinite variance, strong dependence, or a changing distribution. Simulation can illustrate convergence but cannot verify all hypotheses.

**Boundary check.** If every $X_i=c$ almost surely, the variables are iid with variance zero and $X_bar=c$ almost surely. The preceding weak law still holds, but the displayed central-limit quotient divides by zero and is undefined. This is why this normalization requires strictly positive variance.

## Module 6 — Discrete-time Markov chains

A process $X_{0},X_{1},\\ldots$ is Markov when the conditional law of the next state given the entire past depends only on the current state. For a finite time-homogeneous chain, a transition matrix $P$ has entries

$P_ij=P(X_{t+1}=j | X_t=i)$.

Rows sum to one. If a row distribution is written as a row vector $\\mu _t$, then $\\mu _{t+1}=\\mu _t P$, hence $\\mu _t=\\mu _0 P^t$.

For two states with $\\alpha =P(0\\to 1)$ and $\\beta =P(1\\to 0)$, let $q_t=P(X_t=1)$. Conditioning gives

$q_{t+1}=\\alpha +(1-\\alpha -\\beta )q_t$.

When $\\alpha +\\beta >0$, the stationary probability of state 1 is $\\pi _1=\\alpha /(\\alpha +\\beta )$. Subtracting the fixed point yields

$q_t-\\pi _1=(1-\\alpha -\\beta )^t(q_0-\\pi _1)$.

Convergence from every start requires $|1-\\alpha -\\beta |<1$. The chain with $\\alpha =\\beta =1$ has stationary law $(1/2,1/2)$ but alternates forever from either point mass. Existence of a stationary distribution is not the same as convergence.

## Module 7 — Poisson processes and waiting times

A rate-$\\lambda$ Poisson process $N(t)$ starts at zero, has independent increments, and satisfies

$N(t+s)-N(s) ~ Poisson(\\lambda t)$.

Then $E[N(t)]=\\operatorname{Var}(N(t))=\\lambda t$. The first arrival time $T_{1}$ obeys

$P(T_{1}>t)=P(N(t)=0)=e^{-\\lambda t}$;

therefore $T_{1}$ is exponential with rate $\\lambda$. Independent increments imply that after any fixed time, future waiting has the same exponential law. This memorylessness is a strong modeling assumption, not a universal property of arrivals.

Conditional on $N(t)=n$, the unordered arrival locations behave like $n$ independent uniform points on $[0,t]$; their ordered values are the arrival times. This surprising bridge supports two different simulation algorithms.

## Module 8 — Martingales, stopping, and coupling

Given information $F_t$ available by time $t$, a process $M_t$ is a martingale when it is integrable, adapted, and

$E[M_{t+1}|F_t]=M_t$.

A fair random walk is a martingale. The square-corrected process $S_t^{2}-t$ is also a martingale because the next independent $\\pm 1$ increment has mean zero and square one.

A stopping time $T$ is a random time whose occurrence by $t$ can be decided using $F_t$. Optional stopping is not the slogan $E[M_T]=E[M_0]$ for every $T$. Bounded stopping times satisfy it; other versions require conditions such as uniform integrability or controlled increments and expected duration. Doubling bets until winning violates the safe hypotheses and hides unbounded loss and capital.

A **coupling** constructs two variables or processes on one probability space while preserving each marginal law. If coupled chains satisfy $X_t=Y_t$ after meeting, then

$\\lVert Law(X_t)-Law(Y_t)\\rVert_TV \\le P(X_t\\ne Y_t)$.

The inequality follows because, for any event $A$, the indicators $1_{X_t\\in A}$ and $1_{Y_t\\in A}$ differ only when the variables differ. Coupling turns convergence into a meeting-time question.

## Course project

Choose a queue, reliability system, game, ecological movement model, or communication channel. Deliver:

1. a state space and transition or arrival assumptions;
2. one exact calculation (stationary law, hitting probability, or expectation);
3. a seeded simulation with a known benchmark and Monte Carlo error;
4. a counterexample showing why one assumption matters;
5. a table or verbal description equivalent to every plot;
6. a claim ladder separating theorem, numerical evidence, and real-world interpretation.

## Exercises with worked answers

### 1. Pairwise independence

For fair independent bits $X,Y$ and $Z=X xor Y$, why are $X$ and $Z$ independent?

**Answer.** For each $x,z$, exactly one $y$ gives $z=x xor y$, so $P(X=x,Z=z)=1/4=P(X=x)P(Z=z)$. But the triple is not mutually independent because $Z$ is fixed by $X,Y$.

### 2. Chebyshev budget

Independent measurements have mean $\\mu$ and variance 16. How large must $n$ be for Chebyshev to bound $P(|X_bar-\\mu |\\ge 1)$ by at most $0.04$?

**Answer.** The bound is $16/n$. Require $16/n\\le 0.04$, hence $n\\ge 400$. The bound may be conservative.

### 3. Two-state stationarity

For $\\alpha =0.15$, $\\beta =0.35$, find the stationary probability of state 1 and the second eigenvalue.

**Answer.** $\\pi _1=0.15/0.50=0.3$; $\\lambda _2=1-0.15-0.35=0.5$. Distance from stationarity contracts by factor one half per step.

### 4. Poisson interval

Calls follow a rate-3-per-hour Poisson process. Under the model, find the probability of no call in 30 minutes.

**Answer.** The mean count is $3(0.5)=1.5$, so $P(N=0)=e^{-1.5}\\approx 0.223$. Units must be consistent.

### 5. Stopped walk

Why is “stop the first time a fair walk reaches +1” not automatically covered by the bounded optional-stopping theorem?

**Answer.** The hitting time is not bounded by a fixed deterministic number. A different theorem might apply after verifying its hypotheses, but bounded optional stopping alone cannot justify the conclusion.

### Feedback map

If Exercise 1 fails, enumerate the eight triples and test pairwise and mutual
claims separately. If Exercise 2 fails, write the variance of the sample mean
before applying Chebyshev. If Exercise 3 fails, solve $\\pi=\\pi P$ and then
check convergence separately. If Exercise 4 fails, convert all rates and
times to one unit. If Exercise 5 fails, list the exact hypotheses of the
optional-stopping theorem being invoked.

## Continuation

The proof-oriented probability book strengthens convergence and concentration. The stochastic-processes book develops recurrence, renewal, Brownian motion, and martingales. The measure bridge explains why sigma-algebras and conditional expectation are necessary, while the live coupling lab makes exact contraction and sampled meeting visibly distinct.

<!-- probability-selected-core:start -->

## Selected introductory self-study core

**Selection ID:** \`probability-introductory-self-study-core\`. This is one
bounded undergraduate self-study course, not qualification of both complete
reference books. The original modules, questions and overview above remain
available. Use the assignment table here for the required reading and work;
material not selected here is optional clarification or later study. The
original open project remains an optional extension after the supplied
service-availability project. Keep its distinct evidence boundary.

The goals are to construct and audit a probability model; calculate
conditional and transformed laws; justify expectation and finite-variance
bounds; distinguish a stationary law from convergence; and compare exact
process calculations with a reproducible numerical experiment. No reading
mark, model opening or self-review score establishes independent mastery.

### Preparation and a finite-history bridge

Bring fractions, algebra, finite sums/counting, sets/functions, quantifier
negation, direct proof and induction, plus single-variable integration and
basic series limits. Use the existing [probability diagnostic](#/item/book-probability-models-proofs)
and [integration preparation](#/item/course-calculus-change) when needed;
their whole books are not additional entrance requirements. The finite
Markov calculations below use two-state recurrences rather than requiring
an eigenbasis course.

For the reference listing, read the entry diagnostic and Sections 1–3 and
6–7 of [Programming Random Processes](#/item/course-program-random-processes).
Arrays, functions, loops and a state variable are actual preparation, not
implied by knowing algebra. The complete listing below can be copied into
\`probability-core.mjs\` and run with \`node probability-core.mjs\`; it has no
package dependencies or learner-data input. The analytic work can be
attempted on paper before running it.

Check these four items first; the answers are immediately available for
repair, not an admission gate:

1. Four ordered outcomes represent two fair bits. Why do their three
   possible sums not have equal weights?
2. Given $P(H)=1/4$, $P(E|H)=1/2$, and $P(E|H^c)=1/6$, find $P(E)$ and
   $P(H|E)$, naming every positive denominator.
3. Compute $E[X]$ for density $2x$ on $[0,1]$ and explain why $f(1)=2$
   is not a point probability.
4. One trajectory has 24 dependent hourly states. Are those 24 independent
   replications of the event “any outage by hour 24”?

**Answers.** The sums have weights $1/4,1/2,1/4$. Total probability gives
$P(E)=(1/2)(1/4)+(1/6)(3/4)=1/4$, and Bayes gives
$P(H|E)=(1/8)/(1/4)=1/2$; $P(H)$, $P(H^c)$ and $P(E)$ are positive.
The density integrates to one and $E[X]=\\int_0^1 2x^2dx=2/3$; probabilities
are integrals, not density heights. The last answer is no: an independent
replication is a newly simulated whole path under the model. A window
inside one path shares states and history with other windows.

For the selected martingale work, interpret conditioning on information
through **finite histories**. For a finite-valued $Y$ in the selected
examples, on a history event $H$ with $P(H)>0$,
$E[Y|H]=\\sum_y yP(Y=y,H)/P(H)$. Average separately over each possible
history; a null history has no ratio to calculate. A finite-history
martingale preserves the current value under this next-step average.
For stopping $T\\le N$, expand
$M_T=M_0+\\sum_{k=1}^N1_{\\{T\\ge k\\}}(M_k-M_{k-1})$.
The event $\\{T\\ge k\\}$ is decided before the $k$th increment. Its
history-weighted mean increment is zero, so the finite sum has expectation
zero. This proves the bounded stopping calculation used here. It does not
supply unbounded stopping, Doob upcrossing or general conditional-expectation
theory; those sections and their dependent problems are later study.

### Required reading and problems

Read the compact Modules 1–8 above and solve their Exercises 1–5. For each
row below, first attempt the listed numbered problems, then consult that
chapter's **existing complete solutions** and retain a correction. Section
numbers refer to the named source chapter, not an array index or page count.
A selected statement may be used only with its stated hypotheses. No
unselected advanced exercise is silently part of this core.

| Existing source chapter | Required reading within that chapter | Required numbered problems |
|---|---|---|
| [Event models and axioms](#/item/book-probability-models-proofs?chapter=event-models-and-axioms) | Sections 1–5, 7–8; skip the group-action aside | 1, 3, 5, 7, 9, 13, 14, 18, 20 |
| [Counting, conditioning and Bayes](#/item/book-probability-models-proofs?chapter=counting-conditioning-and-bayes) | Sections 1–8 and 10 | 2, 4, 5, 7–10, 12–13, 15–18, 20 |
| [Independence and product models](#/item/book-probability-models-proofs?chapter=independence-and-product-models) | Sections 1–2, the finite construction in 4, and 5–7, 9; infinite-product/Borel–Cantelli material is optional | 1–13, 15, 20 |
| [Random variables, laws and transforms](#/item/book-probability-models-proofs?chapter=random-variables-laws-and-transforms) | Sections 1–6, 8–9 | 1–13, 16–20 |
| [Expectation, integration and moments](#/item/book-probability-models-proofs?chapter=expectation-integration-and-moments) | In Section 1 use simple-variable/discrete expectations and the density formula; Sections 3–4 except the MGF aside; Markov/Chebyshev in 6; audit in 7 | 1–2, 4–9, 12–13, 19 |
| [Laws of large numbers](#/item/book-probability-models-proofs?chapter=laws-of-large-numbers) | Sections 1–2 and Section 7's dependence/covariance examples; use only the finite-variance weak-law argument | 1–2, 4–7, 16 |
| [Finite Markov chains](#/item/book-stochastic-processes-paths?chapter=finite-markov-chains) | Definitions, Chapman–Kolmogorov, communication and stationarity; convergence with the periodic counterexample; hitting equations and worked examples | 1–3; derive Exercise 1's two-state $P^{10}$ using Module 6's scalar recurrence |
| [Poisson processes](#/item/book-stochastic-processes-paths?chapter=poisson-processes) | Definition and first waiting time; superposition/thinning; worked thinning example and errors. Strong-Markov interarrival, compound-MGF and PGF material is optional | 1, 3 |
| [Martingales and stopping](#/item/book-stochastic-processes-paths?chapter=martingales-and-stopping) | Finite-history definitions, bounded stopping and doubling/error discussion, using the bridge above. General convergence and upcrossing are optional | 3, plus compact Module 8/Exercise 5 above |
| [Coupling and convergence](#/item/book-stochastic-processes-paths?chapter=coupling-and-convergence) | Total variation, coupling inequality and Markov couplings; random-to-top worked example. The general convergence proof is optional | 1–3 |

General measure construction, uniform integrability, strong laws,
Doob/upcrossing, infinite product investigations and general convergence
proofs remain wider reading. The supplied finite-history calculations do
not establish mastery of that theory. The CLT is used under its explicit
iid, positive finite-variance hypotheses; this course does not assign its
measure-theoretic proof. If a chosen optional branch needs more preparation,
use its native diagnostic before adding that branch.

### An authored allocation, not observed workload

The front-matter estimate is 8,400 minutes: a **140-hour midpoint**, with an
suggested planning range of **120–160 working hours** for the actual
selection. This is a planning allowance, not measured completion time,
credit, effectiveness or a promise about an individual learner. Prerequisite
repair, breaks and elapsed time before a return attempt are additional.

| Block | Working hours at the planning midpoint | Products |
|---|---:|---|
| Event models, counting and conditioning | 32 | Probability tables, representation/conditioning repairs, selected proofs |
| Variables and expectation | 30 | Transformed laws, moments, indicator arguments and hypothesis checks |
| Finite-variance limits | 14 | Chebyshev bounds, weak-law/dependence comparisons and CLT qualifications |
| Finite processes | 26 | Transition/hitting calculations, arrival models, finite stopping and coupling |
| Original project, changed project and later return | 24 | Six deliverables, executed table, complete corrections and return comparison |
| Mixed retrieval and revision across the blocks | 14 | Unlabelled theorem choice, repaired proofs and modelling explanations |
| Total | 140 | Complete selected self-study portfolio, without a mastery claim |

Use the mixed period to retry one selected problem from each preceding
block without its method label. Record which public hints/models were
previously seen. A later return below means a new attempt after intervening
study; no elapsed delay or unseen status is inferred by the website.

### Probability core service project

**Task ID:** \`probability-core-service-project\`.

A fictional server is Up (state 0) or Down (state 1) at each integer hour.
Start Up at hour zero. Conditional on the current state, each hourly
transition uses the same matrix

$$P=\\begin{pmatrix}49/50&1/50\\\\3/10&7/10\\end{pmatrix}.$$

The parameters are stipulated **synthetic model inputs**, not fitted server
measurements. Observe hours 1 through 24. Before any code or model answer,
write the target events and predict whether changing repair probability
can change the chance that the *first* failure occurs by hour 24.

Deliver these six items:

1. State space, hourly clock, transition matrix, initial state, horizon,
   observation times and the assumptions needed for independent path
   replications. Separate a model probability from a claim about a real server.
2. Derive the stationary down fraction, the law at hour 24 and the event
   $A=\\{\\text{Down at some hour }1,\\ldots,24\\}$. Give an exact benchmark
   before simulating. A stationary fraction is not a first-failure probability.
3. Run the bounded seeded reference below with 10,000 whole paths. Report
   seed, integer counts, denominators, estimates, per-target MCSE and
   discrepancies from the exact references. Do not restart the same seed for
   every path or treat the 24 hourly states as independent replications.
4. Explain the countermodel $\\alpha=\\beta=1$ and the persistence check
   $\\beta=0$. State which conclusions change and which exact calculations survive.
5. Produce a numerical table, with a prose equivalent, naming each event,
   horizon, count/denominator, estimate, reference and MCSE. A plot is optional.
6. Supply a claim ladder: exact model theorem; floating-point calculation;
   seeded numerical evidence; and unverified assumptions about real servers.
   Give one meaningful limitation or sensitivity question.

#### Complete model for the original project

Write $\\alpha=1/50$, $\\beta=3/10$ and
$q_t=P(X_t=1\\mid X_0=0)$. Finite conditioning gives
$q_{t+1}=\\alpha+(1-\\alpha-\\beta)q_t$ with $q_0=0$.
Solving the fixed point and recurrence gives

$$\\pi_D=\\frac{\\alpha}{\\alpha+\\beta}=\\frac1{16},\\qquad
q_t=\\frac1{16}\\left[1-(17/25)^t\\right].$$

Thus the exact hour-24 down probability is
$[1-(17/25)^{24}]/16$. The chance of avoiding a first failure for all 24
transitions is $(49/50)^{24}$: every such transition starts Up. Therefore

$$P(A)=1-(49/50)^{24}.$$

Repair probability does not enter that complement calculation; it does
enter the endpoint law. Geometric Up/Down spell lengths, time-homogeneous
rates, the hourly resolution and a state containing all relevant history
are assumptions. The derivation does not validate them empirically.

For an event indicator $Y_i$ from each of $R$ ideal independent whole paths,
$\\hat p=R^{-1}\\sum_iY_i$ has variance $p(1-p)/R$. The plug-in MCSE is
$\\sqrt{\\hat p(1-\\hat p)/R}$; the exact-model reference MCSE uses $p$ instead.
These describe numerical variation under independent replications, not
uncertainty in $\\alpha,\\beta$ or the server mechanism. A reproducible
pseudorandom stream does not prove independence. A zero plug-in MCSE after
all successes/failures is not generally proof that the unknown event
probability is zero/one. The periodic control below is different: its exact
model proves the events deterministic.

### Probability core observation transfer

**Task ID:** \`probability-core-observation-transfer\`.

Keep the same hourly process, starting state and 24-hour horizon, but save
only observations at hours $2,4,\\ldots,24$. Before the key, derive the
observed two-hour transition matrix and the event
$B=\\{\\text{Down at some inspected hour}\\}$. Does finding no observed outage
mean no outage occurred? Estimate the missed-outage probability on the
**same paths** used for $A$, and derive the MCSE for the paired difference.
Do not replace $\\alpha$ by $2\\alpha$ or quietly change 24 hours to 12.

#### Complete changed key

Multiply $P$ by itself:

$$P^2=\\begin{pmatrix}604/625&21/625\\\\63/125&62/125\\end{pmatrix}.$$

The stationary down fraction stays $1/16$, and the hour-24 endpoint law is
unchanged because the underlying hourly process is unchanged. To avoid
recorded Down, all twelve inspected states must be Up. By the Markov
property their probability is $(604/625)^{12}$, so

$$P(B)=1-(604/625)^{12},\\qquad B\\subseteq A,$$

$$P(A\\setminus B)=(604/625)^{12}-(49/50)^{24}>0.$$

For strictness, the path Down at hour 1, repaired at hour 2, then Up for
all later hours has positive probability and belongs to $A\\setminus B$.
The changed target concerns a coarser observation protocol, not a new
failure mechanism. The indicator $D_i=1_A-1_B=1_{A\\setminus B}$ is
Bernoulli on each whole path. Hence its plug-in MCSE is
$\\sqrt{\\hat d(1-\\hat d)/R}$. Combining two independent-binomial error bars
would discard the pairing and use the wrong variance for this comparison.

### Probability core service return

**Task ID:** \`probability-core-service-return\`.

After intervening study, begin on a blank page and record earlier exposure.
Now $\\alpha=1/10$, $\\beta=2/5$, the horizon is **six hours**, and the
inspections are at hours **3 and 6**. Predict separately what happens to
stationary Down, endpoint Down, any hourly outage, recorded outage and
missed outage. Recreate the six deliverables in short form before reading
the key. This public return is not a protected unseen assessment.

#### Complete return key

Here $\\pi_D=1/5$ and $1-\\alpha-\\beta=1/2$, so
$q_6=(1/5)(1-2^{-6})=63/320=0.196875$. Also

$$P^3=\\begin{pmatrix}33/40&7/40\\\\7/10&3/10\\end{pmatrix}.$$

Therefore the exact hourly, recorded and missed probabilities are

$$1-(9/10)^6=\\frac{468559}{1000000}=0.468559,$$
$$1-(33/40)^2=\\frac{511}{1600}=0.319375,$$
$$\\frac{468559}{1000000}-\\frac{511}{1600}=0.149184.$$

Use two inspections over six hours, not six inspections or six three-hour
blocks. Endpoint Down is a different event. The exact return values above
are analytic calculations, not unreported simulated output.

For the return's periodic control $\\alpha=\\beta=1$, the six-hour path is
$0,1,0,1,0,1,0$: the inspection at hour 3 records Down, while hour 6 ends
Up. Thus hourly/recorded/missed/endpoint event probabilities are $1,1,0,0$,
respectively; the original even-hour inspection control remains $1,0,1,0$.

### Probability core project feedback

**Task ID:** \`probability-core-project-feedback\`.

Use six five-point criteria, 30 descriptive self-review points total:

| Criterion | Complete evidence | Repair when it fails |
|---|---|---|
| Model contract, 5 | Correct units, states, matrix, start, horizon, observation times and replication assumptions | Write one full path and label time before calculating |
| Exact derivation, 5 | Stationary/endpoint law, first-event complement, observed skeleton and event inclusion justified | Rebuild the conditional recurrence and the all-Up event, not just a formula |
| Computation, 5 | Runnable source, seed, integer counts, denominator, estimates, MCSE and reference errors | Reproduce one path, then separate PRNG, event logic and exact benchmark |
| Boundary, 5 | Periodic and persistent cases answered, with their hypotheses | Test a deterministic path instead of treating stationarity as convergence |
| Communication, 5 | Named numerical table and equivalent prose with units and horizon | Distinguish ending Down, ever Down and recorded Down in every row |
| Claim ladder, 5 | Model theorem versus arithmetic, sampled approximation and unvalidated mechanism; meaningful sensitivity | Replace real-server assertions by conditional model statements |

For the changed and return tasks apply the same criteria to the altered
clock and observation rule. A wrong event, treating hours as independent
path replications, or an unexplained benchmark disagreement requires
revision regardless of the total. These criteria do not certify or grade
an individual proof. Compare the first unsupported step, then retain a
corrected argument and one later attempt.

**Boundary model, complete answer.** With $\\alpha=\\beta=1$, the path from
Up is $0,1,0,1,\\ldots$. The stationary law is $(1/2,1/2)$, but the law from
Up does not converge: even-hour Down probability is zero, odd-hour Down
probability is one. By hour 24, hourly outage has probability one,
even-hour recorded outage has probability zero, and ending Down has
probability zero. Thus absence from the recorded data cannot establish
absence from the real hourly path, and stationarity alone does not imply
convergence. With $\\beta=0$, an outage persists; because inspections include
the final hour, any hourly outage is eventually recorded, so $A=B$ and
missed probability is zero. If both transition probabilities are zero, both states are absorbing and the stationary law is not unique; the code returns \`null\` for that field, while the stipulated Up start stays Up and every reported event probability is zero. These are exact model checks, not empirical
validation of a server.

The original and changed tasks have one complete analytic reference table:

| Model/event | Exact probability |
|---|---|
| Original hourly outage | $1-(49/50)^{24}$ |
| Original ending Down | $[1-(17/25)^{24}]/16$ |
| Original even-hour recorded outage | $1-(604/625)^{12}$ |
| Original missed outage | $(604/625)^{12}-(49/50)^{24}$ |
| Return hourly outage | $468559/1000000$ |
| Return ending Down | $63/320$ |
| Return recorded outage | $511/1600$ |
| Return missed outage | $0.149184$ |
| Periodic 24-hour hourly/recorded/ending/missed | $1,0,0,1$ respectively |
| Periodic six-hour return hourly/recorded/ending/missed | $1,1,0,0$ respectively |

The listing prints a run-derived numerical table beside these benchmarks.
Its estimates and errors describe the specified synthetic experiment, not
observations of an operating service. Preserve the integers and denominator
when writing a report; decimals alone conceal which experiment was run.

#### Recorded reference execution

The following integer counts came from executing the exact listing below
with the stated seeds and 10,000 paths per case. \`hourlyFailure\` is $A$,
\`recordedFailure\` is $B$, \`missedFailure\` is $A\\setminus B$, and
\`downAtHorizon\` concerns only the final state. “Original” and its changed
observation calculation share the same paths; “Return” is a separate run.
References, MCSEs and signed errors are rounded to six decimals here; the
exact formulas above and printed full-precision records remain authoritative.

| Case | Event | Count / paths | Estimate | Reference (approx.) | Plug-in MCSE | Estimate minus reference |
|---|---|---:|---:|---:|---:|---:|
| Original | hourlyFailure | 3792 / 10000 | 0.379200 | 0.384220 | 0.004852 | -0.005020 |
| Original | recordedFailure | 3324 / 10000 | 0.332400 | 0.336436 | 0.004711 | -0.004036 |
| Original | missedFailure | 468 / 10000 | 0.046800 | 0.047784 | 0.002112 | -0.000984 |
| Original | downAtHorizon | 612 / 10000 | 0.061200 | 0.062494 | 0.002397 | -0.001294 |
| Return | hourlyFailure | 4569 / 10000 | 0.456900 | 0.468559 | 0.004981 | -0.011659 |
| Return | recordedFailure | 3120 / 10000 | 0.312000 | 0.319375 | 0.004633 | -0.007375 |
| Return | missedFailure | 1449 / 10000 | 0.144900 | 0.149184 | 0.003520 | -0.004284 |
| Return | downAtHorizon | 1894 / 10000 | 0.189400 | 0.196875 | 0.003918 | -0.007475 |
| Periodic | hourlyFailure | 10000 / 10000 | 1.000000 | 1.000000 | 0.000000 | 0.000000 |
| Periodic | recordedFailure | 0 / 10000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 |
| Periodic | missedFailure | 10000 / 10000 | 1.000000 | 1.000000 | 0.000000 | 0.000000 |
| Periodic | downAtHorizon | 0 / 10000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 |

In prose, the original run had 3,792 hourly-outage paths, but only 3,324
with an outage present at an even-hour inspection; 468 paths were missed
by that observation rule. Its 612 final-Down paths answer a fourth,
different question. The return had 4,569 hourly, 3,120 recorded and 1,449
missed outages; 1,894 paths ended Down. The periodic control missed every
outage while correctly showing Up at every inspected hour. These are
finite deterministic results of the recorded streams. They neither
estimate real downtime from observed service data nor replace the exact
model derivations. No prior failed run has been discarded or its seed
changed to obtain this table.

#### Bounded, reproducible reference

This reuses the transition/stream/MCSE design in the existing
[service-availability recipe](#/item/recipe-random-process-modeling-simulation)
and [Programming Random Processes](#/item/course-program-random-processes).
The xorshift32 stream is initialized once per case; a path resets the
server state, not the generator. The categorical comparison matches rows
$[1-\\alpha,\\alpha]$ and $[\\beta,1-\\beta]$. Its 32-bit grid and
floating-point arithmetic are finite approximations, not an ideal-randomness
proof or a rigorous interval calculation. The code reports sampling error
under the explicitly ideal independent-path model; that error statement
does not account for PRNG defects or model error.

Copy this **single** listing into a local file and run it. The bounds
(20,000 paths, 48 hourly transitions) are a resource policy, not a theorem
about general simulation complexity. It stores counts, not every path;
there are no accounts, grades, learner records, network calls or packages.

\`\`\`javascript
const serviceCases = [
  { id: 'probability-core-service-project', alpha: 1/50, beta: 3/10,
    horizon: 24, stride: 2, trials: 10000, seed: 20261102 },
  { id: 'probability-core-service-return', alpha: 1/10, beta: 2/5,
    horizon: 6, stride: 3, trials: 10000, seed: 20261103 },
  { id: 'probability-core-periodic-control', alpha: 1, beta: 1,
    horizon: 24, stride: 2, trials: 10000, seed: 20261104 }
];

function validateModel(alpha, beta, horizon, stride) {
  if (![alpha, beta].every(p => Number.isFinite(p) && p >= 0 && p <= 1)
      || !Number.isInteger(horizon) || horizon < 0 || horizon > 48
      || !Number.isInteger(stride) || stride < 1 || stride > 48
      || horizon % stride !== 0) {
    throw new RangeError('Use probabilities in [0,1], 0..48 hours and a positive dividing stride.');
  }
}
function seededRandom(seed) {
  if (!Number.isInteger(seed) || seed < 1 || seed > 0xffffffff) {
    throw new RangeError('Use a nonzero unsigned 32-bit seed.');
  }
  let state = seed >>> 0;
  return () => {
    state ^= state << 13; state ^= state >>> 17; state ^= state << 5;
    return (state >>> 0) / 0x100000000;
  };
}
function exactModelReferences(alpha, beta, horizon, stride) {
  validateModel(alpha, beta, horizon, stride);
  const total = alpha + beta;
  const stationaryDown = total === 0 ? null : alpha / total;
  const downAt = t => total === 0 ? 0 : stationaryDown * (1 - (1-total) ** t);
  const hourlyFailure = 1 - (1-alpha) ** horizon;
  const downAtHorizon = downAt(horizon);
  const recordedFailure = beta === 0 ? hourlyFailure
    : 1 - (1-downAt(stride)) ** (horizon / stride);
  return { stationaryDown, hourlyFailure, recordedFailure,
    missedFailure: Math.max(0, hourlyFailure-recordedFailure), downAtHorizon };
}
function onePath(alpha, beta, horizon, stride, random) {
  let state = 0, hourlyFailure = false, recordedFailure = false;
  for (let t = 1; t <= horizon; t++) {
    const u = random();
    if (!Number.isFinite(u) || u < 0 || u >= 1) throw new RangeError('Uniform source must return [0,1).');
    state = u < (state === 0 ? 1-alpha : beta) ? 0 : 1;
    hourlyFailure ||= state === 1;
    recordedFailure ||= t % stride === 0 && state === 1;
  }
  return { hourlyFailure, recordedFailure,
    missedFailure: hourlyFailure && !recordedFailure, downAtHorizon: state === 1 };
}
function simulateService(config) {
  const { id, alpha, beta, horizon, stride, trials, seed } = config;
  validateModel(alpha, beta, horizon, stride);
  if (typeof id !== 'string' || !id || id.length > 100
      || !Number.isInteger(trials) || trials < 1 || trials > 20000) {
    throw new RangeError('Use a named case and 1..20000 whole paths.');
  }
  const random = seededRandom(seed), references = exactModelReferences(alpha, beta, horizon, stride);
  const counts = { hourlyFailure: 0, recordedFailure: 0, missedFailure: 0, downAtHorizon: 0 };
  for (let trial = 0; trial < trials; trial++) {
    const path = onePath(alpha, beta, horizon, stride, random);
    for (const event of Object.keys(counts)) counts[event] += Number(path[event]);
  }
  if (counts.recordedFailure > counts.hourlyFailure
      || counts.missedFailure !== counts.hourlyFailure-counts.recordedFailure) {
    throw new Error('Paired-event inclusion failed.');
  }
  const rows = Object.keys(counts).map(event => {
    const estimate = counts[event] / trials, reference = references[event];
    return { event, count: counts[event], denominator: trials, estimate, reference,
      mcse: Math.sqrt(estimate*(1-estimate)/trials),
      referenceMcse: Math.sqrt(reference*(1-reference)/trials),
      signedError: estimate-reference };
  });
  return { id, alpha, beta, horizon, stride, trials, seed,
    generator: 'xorshift32/categorical-v1', stationaryDown: references.stationaryDown, rows };
}
const serviceReports = serviceCases.map(simulateService);
for (const report of serviceReports) console.log(JSON.stringify(report));
\`\`\`

A useful debugging screen compares each absolute discrepancy with five
**reference** MCSEs, with deterministic checks at model probabilities zero
and one. It is not a theorem that every run will pass, and a failed screen
must not be repaired by tuning the seed or widening tolerance. Inspect the
event, transition mapping and replication assumptions. The paired missed
row uses its own Bernoulli MCSE; hourly and inspected rows are correlated.
Report a changed seed separately rather than overwriting a failed run.

<!-- probability-selected-core:end -->
`;export{e as default};