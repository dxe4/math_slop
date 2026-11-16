var e=`---
id: course-sequences-series-convergence
title: "Sequences and Series: A Convergence Toolkit"
level: undergraduate
estimated_minutes: 900
license: CC BY-SA 4.0
---

# Sequences and Series: A Convergence Toolkit

<!-- euler-course-route -->

## Current course route

Use the [course page](/courses/atlas-sequences-series-convergence/) for its present preparation and available study steps. This Outline keeps its original explanations and exercises while a complete primary-book syllabus is being assigned.

An infinite process is understood through its finite approximations. A small term is not necessarily a small remaining sum; a limit at each point need not be a limit that works across a whole interval. This course develops proofs that tell us when the approximations settle, how far an approximation can be from its target, and which operations preserve a limit.

Plan for about **15 hours**, including a completed capstone: 11 hours for the six lessons and their proof practice, 90 minutes for the diagnostic and cumulative assessment, and 150 minutes to choose, develop, and write up the capstone. These are planning estimates; allow extra time for prerequisite repair or a more ambitious project. Algebra with inequalities, functions, and exponentials is assumed. The integral and derivative sections use introductory calculus; if that is new, use [Calculus of Change](#/item/course-calculus-change) before those sections. If quantified limits are new, start with [The Quantifier Bridge](#/item/deep-dive-epsilon-delta-limits).

## Route and starting diagnostic

Write an answer before opening the solutions. For each claim, say whether it concerns terms, partial sums, or functions.

1. Does $(-1)^n/n$ converge as a sequence? What happens to $(-1)^n$?
2. Does $\\sum_{n=1}^{\\infty}(-1)^n/n$ ask the same question as (1)?
3. If $a_n\\to0$, must $\\sum a_n$ converge? Name a witness.
4. What finite object defines a series, and what would it mean for its tail to be small?
5. For $f_n(x)=x^n$ on $[0,1]$, is the pointwise limit continuous?

**Diagnostic feedback.** (1) The first tends to zero because its absolute value is $1/n$; the second oscillates. (2) No: the series asks whether its sequence of partial sums converges. It does, conditionally, by the alternating theorem. (3) No: $\\sum1/n$ diverges. (4) $S_N=\\sum_{n=1}^N a_n$; the finite sums $\\sum_{k=n+1}^m a_k$ must become small uniformly over all $m>n$ in a sufficiently late tail. (5) The limit is zero on $[0,1)$ and one at $1$, so it is discontinuous. If (2) and (3) were hard, keep separate columns for terms and partial sums through Lessons 2–4. If (5) was surprising, return to it in Lesson 6.

## Module 1 — Sequence convergence

[Lesson 1: Quantified sequence limits](#/item/course-sequences-series-convergence?chapter=quantified-sequence-limits) starts with an actual $\\varepsilon$–$N$ proof and derives uniqueness and boundedness with their quantifiers visible. Its counterexamples prevent a bound from being mistaken for convergence.

## Module 2 — A series is a sequence of partial sums

[Lesson 2: Completeness and Cauchy tails](#/item/course-sequences-series-convergence?chapter=completeness-and-cauchy-tails) proves monotone convergence from the supremum property, then uses finite tails to define and test series. It distinguishes the proved order argument from the quoted completeness theorem for real Cauchy sequences.

## Module 3 — Positive-term tests and their hypotheses

[Lesson 3: Positive series and remainder bounds](#/item/course-sequences-series-convergence?chapter=positive-series-and-remainder-bounds) turns order into comparison, geometric domination, and integral estimates. It asks for certified errors, not just convergence verdicts.

## Module 4 — Signs, absolute convergence, and rearrangement

[Lesson 4: Absolute and alternating convergence](#/item/course-sequences-series-convergence?chapter=absolute-and-alternating-convergence) proves absolute convergence with finite tails and the alternating theorem with interlaced partial sums. Conditional convergence makes the order of summation matter.

## Module 5 — Power series and the interval question

[Lesson 5: Power series and endpoints](#/item/course-sequences-series-convergence?chapter=power-series-and-endpoints) obtains interior absolute convergence by comparison at a larger point, examines both endpoints separately, and proves uniform control on smaller intervals.

## Module 6 — Safe limit interchanges

[Lesson 6: Uniform limits and safe interchanges](#/item/course-sequences-series-convergence?chapter=uniform-limits-and-safe-interchanges) compares pointwise and uniform limits, proves preservation of continuity and a compact-interval integral estimate, and shows why uniform convergence alone does not allow differentiation.

## A visual and nonvisual convergence laboratory

For a numerical series, plot $(N,S_N)$, where $S_N$ is the partial sum, together with any certified error band. To work without a plot, make a table of $N$, the term $a_N$, the partial sum $S_N$, and the error bound. The table reveals the same distinction: small individual terms need not make *every* remaining finite sum small. For a function sequence, compare values at a fixed point with values at a point that moves with $n$.

## Misconceptions to retire

- “Terms approach zero, so the sum converges.” Lesson 2 constructs harmonic tails of size at least $1/2$.
- “The ratio limit is one, so the series diverges.” Lesson 3 compares two series for which it is one and the outcomes differ.
- “A radius decides the endpoints.” Lesson 5 reduces each endpoint to its own numerical series.
- “Pointwise convergence preserves continuity.” Lesson 6 gives a continuous sequence with a discontinuous pointwise limit.

## Exercises with worked answers

The graded proof sets are inside the lessons. For a quick placement check, evaluate $\\sum_{n=1}^{\\infty}1/[n(n+1)]$ using partial sums. **Hint:** $1/[n(n+1)]=1/n-1/(n+1)$. **Answer:** $S_N=1-1/(N+1)$, hence the sum is $1$. If you argued by saying only that the terms go to zero, return to Lesson 2.

### 1. Direct sequence estimate

Continue with the threshold and quantifier exercises in [Lesson 1](#/item/course-sequences-series-convergence?chapter=quantified-sequence-limits).

### 2. Telescoping

Use the finite-partial-sum exercise in [Lesson 2](#/item/course-sequences-series-convergence?chapter=completeness-and-cauchy-tails).

### 3. Choose and apply a test

Use the comparison and error exercises in [Lesson 3](#/item/course-sequences-series-convergence?chapter=positive-series-and-remainder-bounds).

### 4. Conditional or absolute?

Use the signed-series classifications in [Lesson 4](#/item/course-sequences-series-convergence?chapter=absolute-and-alternating-convergence).

### 5. Power-series endpoints

Use the separate endpoint exercises in [Lesson 5](#/item/course-sequences-series-convergence?chapter=power-series-and-endpoints).

### 6. Diagnose a false proof

Use the whole-tail error audit in [Lesson 2](#/item/course-sequences-series-convergence?chapter=completeness-and-cauchy-tails).

## Investigation 1 — Monotone convergence constructs a limit

The recurrence $a_1=1$, $a_{n+1}=\\sqrt{2+a_n}$ is developed in Lesson 2. Prove existence before solving its fixed-point equation; a numerical table alone cannot do that.

## Investigation 2 — The Cauchy test sees whole tails

Lesson 2 contrasts geometric tails with harmonic blocks. The task is to quantify over *every* endpoint of a finite tail, not choose a convenient endpoint after the fact.

## Investigation 3 — Remainder bounds make convergence useful

Lesson 3 bounds the remainder of $\\sum1/n^2$ between two integrals; Lesson 4 gives a sharper alternating bound when signs cancel under controlled hypotheses.

## Investigation 4 — Pointwise and uniform convergence differ

Lesson 6 uses $x^n$ on $[0,1]$ and a moving witness to separate two orders of quantifiers.

## Cumulative decision set

For each problem, identify the relevant lesson, state the theorem and its hypotheses, and give the conclusion *and its limit*. Attempt all six before reading the answers.

1. Let $a_1=1$ and $a_{n+1}=3a_n/(1+a_n)$. Prove that a real limit exists before identifying it. Why is solving the fixed-point equation alone insufficient?
2. Decide whether $\\sum_{n=1}^{\\infty}n/(n^3+1)$ converges. Does your method find its sum?
3. Classify $\\sum_{n=1}^{\\infty}(-1)^{n-1}/\\sqrt n$ as absolute, conditional, or divergent.
4. Find the interval of convergence of $\\sum_{n=1}^{\\infty}(-1)^n(x+2)^n/(n2^n)$. State separately what happens at each endpoint.
5. Find an $N$ that certifies error **strictly below** $0.005$ for $\\sum_{n=1}^{N}(-1)^{n-1}/n$.
6. On $[0,1]$, let $P_N(x)=\\sum_{k=0}^N(x/3)^k$. Identify its limit, prove a uniform error bound, and justify passing the limit through $\\int_0^1$. Give a truncation that certifies integral error strictly below $0.001$.

**Reasoned solutions and repair routes.**

1. Inductively $1\\le a_n\\le2$: if $1\\le a\\le2$, then $3a/(1+a)\\ge1$ because $2a\\ge1$, and $3a/(1+a)\\le2$ because $a\\le2$. Moreover $a_{n+1}-a_n=a_n(2-a_n)/(1+a_n)\\ge0$. Monotone convergence therefore supplies a limit $L\\in[1,2]$. Passing to the limit in the rational recurrence gives $L(1+L)=3L$, so $L=0$ or $2$; the interval excludes zero. A fixed-point equation only restricts possible limits and does not establish existence. Revisit Lesson 2 if you solved the equation before proving monotonicity and boundedness.
2. The positive terms satisfy $0<n/(n^3+1)\\le1/n^2$, so comparison proves convergence, but it does not give the sum. If comparison went in the wrong direction, revisit Lesson 3.
3. $1/\\sqrt n$ decreases to zero, so the alternating theorem applies. Its absolute series is a divergent $p$-series with $p=1/2$; convergence is conditional. Revisit Lesson 4 if cancellation was used to argue absolute convergence.
4. Set $t=-(x+2)/2$. The series becomes $\\sum t^n/n$: absolute convergence holds for $|t|<1$, by geometric comparison, while for $|t|>1$ the term magnitudes eventually grow since their successive ratio tends to $|t|>1$. At $x=-4$, $t=1$ gives the divergent harmonic series; at $x=0$, $t=-1$ gives a convergent alternating series. Thus the interval is $(-4,0]$. Revisit Lesson 5 if the alternating sign was lost in substituting an endpoint.
5. The alternating error is at most $1/(N+1)$. Requiring this upper bound to be *strictly* below $1/200$ gives $N\\ge200$. At $N=199$ the stated nonstrict bound is exactly $0.005$; that bound alone guarantees “at most,” not “strictly below.” Revisit Lesson 4 for the error theorem.
6. The geometric identity gives $P(x)=1/(1-x/3)$. For every $x\\in[0,1]$,
   $$
   |P(x)-P_N(x)|\\le\\sum_{k=N+1}^{\\infty}3^{-k}=\\frac{1}{2\\cdot3^N}.
   $$
   This tends to zero uniformly. Each $P_N$ is continuous; the compact-interval theorem from Lesson 6 therefore justifies the integral interchange. The limiting integral is $3\\log(3/2)$, and its error is at most the interval length $1$ times the same bound. At $N=6$ this is $1/1458<0.001$ (at $N=5$ this certificate is $1/486$). Revisit Lesson 5 if your tail estimate depends on $x$, and Lesson 6 if you interchanged the integral using pointwise convergence alone.

### Feedback map

Problem 1 tests existence before identification; 2 tests comparison without claiming an exact sum. Errors in 3–4 usually come from applying a test without all its hypotheses. In 5 check strict versus nonstrict bounds; in 6 check the shared domain, uniform tail, and integral hypotheses. Rework the linked lesson's first guided proof before retrying the assessment.

## Capstone and next steps

Use the allocated 150 minutes to complete this submission, including roughly 30 minutes to select a series and method, 90 minutes for proofs and calculations, and 30 minutes to write and check the argument. Choose a numerical series or power series used in a computation. Submit: (1) a proof of convergence with exact hypotheses, (2) a certified remainder bound at a stated truncation, (3) a short table comparing that bound with actual error when an exact value is known, and (4) a paragraph on finite-precision cancellation or a failed limit interchange. Explain why your error bound applies to *every* omitted tail, not just one computed tail. A series with no usable bound is a signal to choose another model or prove a new estimate.

For a longer structural treatment, continue to [Proof-Safe Real Analysis](#/item/book-proof-safe-real-analysis).


<!-- uni-l2-functions-convergence-core -->
## Selected functions and convergence core

This is one bounded undergraduate self-study selection through functions, real recurrences, convergence and a numerical model audit. The secondary algebra course remains preparation. This selection does not assign the whole functions book, abstract algebra, or every modelling method. Its public tasks, answers and later returns support reconstruction and revision; they do not establish unseen assessment, checked Practice or mastery.

Before beginning, use [Algebra and Functions](#/item/course-algebra-functions-standard) for inequalities, domains, powers and logarithms, and [Proof Foundations](#/item/course-proof-foundations) for quantifiers and induction if needed. Required calculus preparation for Lesson 3's integral comparison and Lesson 6's integral/derivative discussion is the corresponding limits, derivatives and definite-integral work in [Calculus of Change](#/item/course-calculus-change). Finish that preparation before those sections; the algebra/model-card work below requires no derivatives, differential equations, complex numbers or statistical inference.

### Required readings and written work

Keep the stated domain, index set, initial conditions and theorem hypotheses beside each argument. Attempt the specified questions before consulting the solutions in the same source.

| Stage | Exact source selection and assigned work | Feedback and stopping point |
| --- | --- | --- |
| F1: typed functions | [Functions are typed assignments](#/item/book-functions-equations-proof?chapter=functions-are-typed-assignments): “Why typing matters”, “Definitions”, “The same formula, different functions”, “The inverse theorem”, the first two one-sided-inverse implications, and “Common errors”; Exercises 1–5 | Compare all five source solutions, including both inverse identities in Exercise 5. The later arbitrary-set choice discussion is optional; no choice principle is needed for these exercises. |
| F2: real recurrence models | [Difference equations](#/item/book-functions-equations-proof?chapter=difference-equations): motivation, first-order homogeneous/nonhomogeneous equations and worked example, distinct nonzero real and repeated nonzero real roots plus the explicit repeated-zero-root boundary, the nonhomogeneous worked example, and common errors; Exercises 1, 2, 3 and 5 | Compare those four complete solutions; verify every initial value and substitute into the recurrence. Exercise 4 and the complex-root theorem are optional and require complex numbers, trigonometry and Euler's formula. For a homogeneous first-order multiplier zero, use the initial value at index zero and zero thereafter; for the nonhomogeneous recurrence with multiplier zero, use the supplied forcing value at the preceding index. Never evaluate zero to the zeroth power. |
| S1–S6: convergence | Read Lessons 1–6 above in order. In **each** lesson, assign all four “Guided proof practice” questions: Starter, Core, Transfer and Proof audit | Each question has its own worked response. The transfer question is changed work; the audit checks the failed argument. Preserve a corrected proof with the named error, rather than just a verdict. |
| S7: cumulative choice | Attempt all six questions in “Cumulative decision set” above as one public written form, in the printed order | Use the six reasoned solutions and Feedback map. Keep term/partial-sum/function questions separate, check both power-series endpoints, and justify every interchange. |
| S8: supplied capstone | Complete SC-CAP-P001, SC-CAP-P002 and SC-CAP-R001 below instead of choosing an unspecified series for this selected route | The full keys and repair rubric below supply every requested calculation. Choosing another series remains an optional project requiring its own complete error argument. |
| M1: model card | Complete MF-CARD-P001, MF-CARD-P002 and MF-CARD-R001 in [Fit and Audit a Mathematical Model](#/item/recipe-model-fit-audit), using its “Supplied numerical model cards” selection | Its primary, changed and return cards bind the exact algebra portions of AM-CV-1/2/R and their existing complete keys. Euler and numerical-integration continuations are outside this selection. |

The core joins representations rather than adding a third source inventory: a typed function identifies allowed inputs and outputs; a recurrence defines finite iterates from initial data; convergence controls all sufficiently late tails; the model card separates an exact finite calculation from a claim about a physical system. For the final portfolio retain one inverse proof, the four recurrence solutions, the six lesson sets, the cumulative form, the three capstone reports and the three model cards.

### Effort and later returns

The authored planning allocation is **1,440 minutes (24 hours)**: F1 150, F2 180, S1–S8 900, and M1 210. The existing sequence allocation remains 660 minutes for lessons/proof work, 90 for diagnostic/cumulative work and 150 for the supplied capstone, divided into 75 primary, 45 changed and 30 return minutes. The model-card allocation includes its relevant recipe/cooling reading; do not add the recipe's earlier 75-minute orientation estimate again. The F1/F2 allowances include reading, attempts, public-model comparison and correction.

For later public reconstruction, at another sitting close the keys and reattempt typed-functions Exercise 5, recurrence Exercise 3, each lesson's Transfer question, and cumulative Questions 1, 4 and 6. These reattempts use the existing lesson/proof-work allowance; redistribute it if the initial attempts need less time, or allow additional time. Record any previously seen answer and help used. The 30-minute capstone and model-card returns are separately allocated below. Prerequisite repair, breaks and the elapsed interval between sittings are additional; no enforced delay, observed workload or new independent evidence is inferred.

### Supplied sequence capstone

For each form submit a finite partial-sum identity, a proof of convergence, a bound valid for every later finite tail, the exact infinite remainder, a table, the first truncation meeting the stated **strict** tolerance, and the requested rounding audit. Indices differ between forms: state them explicitly.

**SC-CAP-P001 — primary.** Compute the numerical series
\\[
\\sum_{n=1}^{\\infty}(1/2)^n.
\\]
For \\(S_N=\\sum_{n=1}^{N}(1/2)^n\\), tabulate \\(N=1,4,8\\). Find the least integer \\(N\\ge1\\) with exact error strictly below \\(1/100\\). Finally round the exact \\(S_8\\) to the nearest hundredth **once**, then subtract it from the exact total: does this recover the actual remainder? This is a declared decimal toy calculation, not a model of every implementation.

**Primary key.** The finite geometric identity gives \\(S_N=1-2^{-N}\\). For every \\(M>N\\),
\\[
0<S_M-S_N=2^{-N}-2^{-M}<2^{-N}.
\\]
This uniform tail bound tends to zero; the identity also directly proves \\(S_N\\to1\\), with exact remainder \\(1-S_N=2^{-N}\\).

| \\(N\\) | \\(S_N\\) | Exact remainder and error bound |
| --- | --- | --- |
| 1 | \\(1/2\\) | \\(1/2\\) |
| 4 | \\(15/16\\) | \\(1/16\\) |
| 8 | \\(255/256\\) | \\(1/256\\) |

Since \\(2^6=64<100<128=2^7\\), the least truncation is \\(N=7\\). The rounded \\(S_8\\) is \\(1.00\\), so subtraction gives zero although the true remainder is \\(1/256\\). Rounding two close quantities before subtraction can erase a small difference; the exact tail formula still certifies it.

**SC-CAP-P002 — changed.** Now compute
\\[
\\sum_{n=0}^{\\infty}(-1/3)^n,\\qquad
U_N=\\sum_{n=0}^{N}(-1/3)^n.
\\]
Tabulate \\(N=0,1,2\\). Find the least \\(N\\ge0\\) with absolute error strictly below \\(1/1000\\). Compare an absolute-tail certificate with the sharper exact alternating remainder. Explain why your answer may lie above or below the total.

**Changed key.** The finite identity is
\\[
U_N=\\frac34\\bigl(1-(-1/3)^{N+1}\\bigr).
\\]
For every \\(M>N\\), the absolute finite tail is at most
\\(\\sum_{n=N+1}^{\\infty}3^{-n}=1/(2\\cdot3^N)\\).
This tends to zero and establishes absolute convergence. The limit is \\(3/4\\); its signed remainder is
\\[
\\frac34-U_N=\\frac{(-1)^{N+1}}{4\\cdot3^N}.
\\]

| \\(N\\) | \\(U_N\\) | Signed remainder |
| --- | --- | --- |
| 0 | \\(1\\) | \\(-1/4\\) |
| 1 | \\(2/3\\) | \\(1/12\\) |
| 2 | \\(7/9\\) | \\(-1/36\\) |

The exact absolute error is \\(1/(4\\cdot3^N)\\): \\(N=5\\) gives \\(1/972>1/1000\\), whereas \\(N=6\\) gives \\(1/2916<1/1000\\). Thus the least \\(N\\) is 6, with \\(U_6=547/729\\). The looser absolute-tail certificate also first meets this tolerance at \\(N=6\\): its bounds at 5 and 6 are \\(1/486\\) and \\(1/1458\\). The two certificates are different even though this tolerance gives the same first truncation. The changing remainder sign explains the overshoots and undershoots. Alternation has not made the absolute series divergent; this example is absolutely convergent.

**SC-CAP-R001 — later return.** At another sitting, close the preceding keys and reconstruct
\\[
V_N=\\sum_{n=1}^{N}\\frac1{n(n+1)}.
\\]
Use \\(N=4,9,99\\) for the table, and find the least \\(N\\ge1\\) with error strictly below \\(1/100\\). Explain why “the terms tend to zero” is insufficient and compare its required term count with the primary geometric form. If a key has already been seen, label this a public reconstruction.

**Return key.** Since \\(1/[n(n+1)]=1/n-1/(n+1)\\), telescoping gives \\(V_N=1-1/(N+1)\\). Every finite later tail is \\(1/(N+1)-1/(M+1)<1/(N+1)\\), and \\(V_N\\to1\\).

| \\(N\\) | \\(V_N\\) | Exact remainder and error bound |
| --- | --- | --- |
| 4 | \\(4/5\\) | \\(1/5\\) |
| 9 | \\(9/10\\) | \\(1/10\\) |
| 99 | \\(99/100\\) | \\(1/100\\) |

Strict error requires \\(N+1>100\\), hence \\(N=100\\), not 99. Small terms alone would not establish this: the harmonic series also has terms tending to zero but diverges. For the stated tolerance the exact geometric certificate needs 7 terms; this telescoping form needs 100. These are counts for these formulas, not a general claim that all geometric algorithms are faster.

### Capstone feedback and continuation

| Criterion | Repair |
| --- | --- |
| Domain/index convention and finite identity stated before a limit | Expand the first two terms; distinguish \\(N\\) terms from indices 0 through \\(N\\) |
| All sufficiently late finite tails controlled | Exhibit the bound independent of the later endpoint \\(M\\); one small computed tail is insufficient |
| Exact versus sufficient error certificates distinguished | Compare the changed form's \\(1/(4\\cdot3^N)\\) error with its \\(1/(2\\cdot3^N)\\) absolute-tail bound |
| Strict tolerance and least truncation justified | Check the preceding integer; equality to the tolerance does not meet “strictly below” |
| Table and rounding claim supported | Retain exact fractions; the primary decimal experiment rounds once and cannot establish a universal floating-point error bound |
| Revision preserves the original argument and help/exposure | Record which identity, hypothesis or inequality changed; comparison is self-review, not a grade |

For further analysis use the safe-interchange work in Lesson 6 and the linked real-analysis continuation; prove its additional hypotheses before differentiating a limit. For modelling continue from the three supplied cards to an explicitly sourced real-data question with its own collection and validation arrangements. The selected route completes the stated finite/proof tasks; it does not establish a full statistics course or validate a real cooling process.
<!-- /uni-l2-functions-convergence-core -->
`;export{e as default};