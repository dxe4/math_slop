var e=`---
id: book-proof-safe-real-analysis
title: "Real Analysis"
level: advanced-undergraduate
estimated_minutes: 4095
license: CC BY-SA 4.0
---

# Real Analysis {#section-1-real-analysis}

Real analysis explains why limits, derivatives, integrals and approximations work under precise hypotheses. The current route is a complete classical development at **L3–L4**, from a first proof-based analysis course to beginning graduate function-space and local inversion methods.


<a id="section-5-required-preparation"></a>
## Required preparation {#section-7-required-preparation}

Read [Introduction to Proof](#/item/book-introduction-to-proof), and know single-variable calculus through limits, derivatives, definite integrals, sequences and power series. The existing [Calculus limits chapter](/calculus/#chapter/04), [derivative chapter](/calculus/#chapter/05), [fundamental theorem chapter](/calculus/#chapter/11), and [series and Taylor chapter](/calculus/#chapter/17) provide that computational preparation. The Euclidean differentiation and local inversion chapters additionally require basic matrices and linear maps; [Linear Algebra: Structure and Proofs](#/item/book-linear-algebra-structure-proofs) supplies further preparation.

<a id="section-9-the-current-reading-route"></a>
## The current reading route {#section-11-the-current-reading-route}

The displayed order is the current mathematical progression. Exercise identifiers retain their earlier chapter prefixes so that retitling and reordering do not change which problem an identifier names.

1. [Quantifiers, Suprema, and Completeness](#/item/book-proof-safe-real-analysis?chapter=quantifiers-completeness) — Read, negate, and use analytical definitions while deriving convergence from the completeness of the real numbers.
2. [Ordered Fields and the Architecture of the Real Numbers](#/item/book-proof-safe-real-analysis?chapter=ordered-fields-and-number-systems) — Separate algebra, order, and completeness while deriving Archimedean scales, density, roots, decimal representations, and real-number constructions.
3. [Sequences, Cauchy Control, and Persistent Tail Behavior](#/item/book-proof-safe-real-analysis?chapter=sequences-cauchy-and-limsup) — Prove and negate sequence limits, construct limits through monotone and Cauchy control, certify iterative tails, and analyze persistent behavior with limsup and liminf.
4. [Infinite Series, Tests, and Rearrangements](#/item/book-proof-safe-real-analysis?chapter=series-tests-and-rearrangements) — Treat infinite addition as a partial-sum limit, certify convergence and tails, and determine when rearrangement, grouping, and multiplication are justified.
5. [Metric Spaces, Open Sets, and Closed Sets](#/item/book-proof-safe-real-analysis?chapter=metric-spaces-open-and-closed) — Build metric, neighborhood, closure, continuity, subspace, boundedness, and completeness tools that let analysis move beyond Euclidean formulas.
6. [Sequences, Subsequences, and Compactness](#/item/book-proof-safe-real-analysis?chapter=sequences-compactness) — Extract convergent behavior and use compactness to turn local continuity into reliable global conclusions.
7. [Connectedness and the Special Shape of the Real Line](#/item/book-proof-safe-real-analysis?chapter=connectedness-and-the-real-line) — Turn the impossibility of topological separation into the interval classification, intermediate values, path connectedness, and components.
8. [Continuity, Uniform Control, and Extension](#/item/book-proof-safe-real-analysis?chapter=continuity-and-uniform-continuity) — Unify epsilon–delta, sequential, and topological continuity; separate pointwise from uniform control; and extend uniformly continuous maps from dense subsets.
9. [Continuity, Derivatives, and Hypothesis Audits](#/item/book-proof-safe-real-analysis?chapter=continuity-differentiation) — Rebuild central calculus theorems as precise conditional contracts, with a counterexample for each missing hypothesis.
10. [Taylor Theory, Convexity, and Quantified Remainders](#/item/book-proof-safe-real-analysis?chapter=taylor-theory-and-convexity) — Certify local polynomial approximations, separate smoothness from analyticity, and derive global inequality and minimization guarantees from convexity.
11. [Riemann Integration from Upper and Lower Sums](#/item/book-proof-safe-real-analysis?chapter=riemann-integration) — Construct integration through Darboux traps, prove continuous and monotone integrability, audit the fundamental theorem, and certify numerical and improper limits.
12. [The Fundamental Theorem and Its Boundaries](#/item/book-proof-safe-real-analysis?chapter=fundamental-theorem-and-absolute-continuity) — Derive both directions of the fundamental theorem from local averages, audit evaluation and substitution, and locate absolute continuity as the sharp recovery hypothesis.
13. [Uniform Convergence and Limit Interchange](#/item/book-proof-safe-real-analysis?chapter=uniform-convergence) — Control sequences and series of functions well enough to preserve continuity, integration, and differentiation.
14. [Families of Functions and Equicontinuity](#/item/book-proof-safe-real-analysis?chapter=function-spaces-and-equicontinuity) — Put continuous functions in the uniform norm, prove completeness, and use shared bounds plus equicontinuity to extract compact subsequences.
15. [Power Series and Analytic Functions](#/item/book-proof-safe-real-analysis?chapter=power-series-and-analytic-functions) — Determine radii and endpoints, establish compact uniformity, justify termwise calculus, and separate analytic rigidity from mere smoothness.
16. [Bounded Variation and Riemann–Stieltjes Integration](#/item/book-proof-safe-real-analysis?chapter=bounded-variation-stieltjes) — Measure total variation, prove Jordan decomposition, construct Riemann–Stieltjes integrals and establish integration by parts with explicit jump conventions.
17. [Weierstrass and Stone–Weierstrass Approximation](#/item/book-proof-safe-real-analysis?chapter=stone-weierstrass-approximation) — Prove Bernstein polynomial approximation and the real Stone–Weierstrass theorem through a lattice and compactness argument.
18. [Fixed Points and Complete Metric Spaces](#/item/book-proof-safe-real-analysis?chapter=fixed-points-and-complete-spaces) — Turn contraction estimates into existence, uniqueness, iterative convergence, stability, and verified stopping rules in scalar and function spaces.
19. [Baire Category and Uniform Boundedness](#/item/book-proof-safe-real-analysis?chapter=baire-category) — Prove Baire category, local uniform bounds, uniform boundedness and dense continuity points for pointwise limits of continuous functions.
20. [Differentiation in Euclidean Space](#/item/book-proof-safe-real-analysis?chapter=differentiation-in-r-n) — Define the total derivative, distinguish directional tests, and prove chain rules, mean-value inequalities and second-order approximation.
21. [Inverse and Implicit Function Theorems](#/item/book-proof-safe-real-analysis?chapter=inverse-implicit-function-theorems) — Use stable linear inversion and complete-ball contractions to prove the inverse and implicit function theorems with local uniqueness and sensitivity.
22. [Counterexample Atlas and Synthesis Capstones](#/item/book-proof-safe-real-analysis?chapter=counterexample-atlas-and-capstones) — Generate counterexamples by missing points, moving mass, concentration, oscillation, null changes, and mode mismatches, then complete five cross-book proof projects.

<a id="section-36-retained-further-reading"></a>
## Retained further reading {#section-38-retained-further-reading}

The earlier measure and Fourier chapters remain available under their original identities. They are additional reading, not hidden prerequisites of the classical route. Absolute-continuity comparisons in the fundamental-theorem chapter and measure/Fourier capstones are explicitly marked as further reading and require these theories.

- [Outer Measure, Measurability, and Null Sets](#/item/book-measure-and-integration?chapter=outer-measure-and-measurability).
- [Lebesgue Integration by Simple Approximation](#/item/book-measure-and-integration?chapter=lebesgue-integration).
- [Monotone, Fatou, and Dominated Convergence](#/item/book-measure-and-integration?chapter=measure-convergence-theorems).
- [Lp Spaces, Norms, and Completeness](#/item/book-measure-and-integration?chapter=lp-and-banach-spaces).
- [Fourier Approximation, Density, and Modes of Convergence](#/item/book-fourier-analysis?chapter=fourier-approximation-and-density).

<a id="section-46-how-to-study"></a>
## How to study {#section-48-how-to-study}

Read each theorem with its domain and exceptional cases, reconstruct its proof, and use the worked examples to practise the mechanism. Every exercise has two optional stages of help and a full worked solution. A personal study mark records reading, not a graded mathematical result.

The earlier overview and mathematical guide is retained below for reference. Its chapter numbers and broad measure/Fourier route describe the earlier edition; use the current route above for the classical progression.

<details>
<summary>Earlier-edition overview and mathematical guide</summary>

Calculus teaches powerful operations; real analysis asks when those operations are guaranteed to work. Why must a bounded increasing sequence have a limit? When does a continuous function attain its maximum? May a limit pass through an integral? Each answer depends on hypotheses that are easy to overlook when examples are smooth.

The book develops completeness, compactness, uniformity, measure, and function-space structure while using counterexamples to show the work each hypothesis performs. It begins with quantifiers and the completeness of the real line, then moves through continuity and integration to measure, Banach spaces, fixed points, and Fourier approximation.

<a id="section-59-chapters"></a>
## Chapters {#section-61-chapters}

1. [Quantifiers, Suprema, and Completeness](#/item/book-proof-safe-real-analysis?chapter=quantifiers-completeness) — learn to read and negate analytical definitions, construct limits from suprema, and see exactly where completeness enters.
2. [Ordered Fields and the Architecture of the Real Numbers](#/item/book-proof-safe-real-analysis?chapter=ordered-fields-and-number-systems) — separate algebra, order, and completeness while proving Archimedean scales, density, roots, and representation results.
3. [Sequences, Cauchy Control, and Persistent Tail Behavior](#/item/book-proof-safe-real-analysis?chapter=sequences-cauchy-and-limsup) — prove and negate limits, certify iterative tails, and retain information through limsup and liminf when convergence fails.
4. [Infinite Series, Tests, and Rearrangements](#/item/book-proof-safe-real-analysis?chapter=series-tests-and-rearrangements) — treat infinite addition as a limit, certify tails, and learn exactly when reordering and multiplication are legal.
5. [Metric Spaces, Open Sets, and Closed Sets](#/item/book-proof-safe-real-analysis?chapter=metric-spaces-open-and-closed) — rebuild distance, neighborhoods, closure, continuity, and completeness so analysis can travel beyond the real line.
6. [Sequences, Subsequences, and Compactness](#/item/book-proof-safe-real-analysis?chapter=sequences-compactness) — extract convergent behavior, keep limits inside a domain, and turn local continuity into global control.
7. [Connectedness and the Special Shape of the Real Line](#/item/book-proof-safe-real-analysis?chapter=connectedness-and-the-real-line) — turn the impossibility of topological separation into interval structure, intermediate values, paths, and components.
8. [Continuity, Uniform Control, and Extension](#/item/book-proof-safe-real-analysis?chapter=continuity-and-uniform-continuity) — move among epsilon–delta, sequential, and topological criteria; obtain global control from compactness; and extend maps from dense subsets.
9. [Families of Functions and Equicontinuity](#/item/book-proof-safe-real-analysis?chapter=function-spaces-and-equicontinuity) — treat continuous functions as a complete metric space and extract uniform limits with Arzelà–Ascoli.
10. [Continuity, Derivatives, and Hypothesis Audits](#/item/book-proof-safe-real-analysis?chapter=continuity-differentiation) — rebuild the central calculus theorems as conditional contracts with explicit failure examples.
11. [Taylor Theory, Convexity, and Quantified Remainders](#/item/book-proof-safe-real-analysis?chapter=taylor-theory-and-convexity) — certify local approximations, separate smoothness from analyticity, and turn convexity into global inequality and minimization guarantees.
12. [Riemann Integration from Upper and Lower Sums](#/item/book-proof-safe-real-analysis?chapter=riemann-integration) — construct the integral from finite traps, prove integrability, audit the fundamental theorem, and separate mathematical from numerical error.
13. [The Fundamental Theorem and Its Boundaries](#/item/book-proof-safe-real-analysis?chapter=fundamental-theorem-and-absolute-continuity) — derive both classical directions from local averages, audit substitution and improper limits, and locate absolute continuity as the sharp later hypothesis.
14. [Uniform Convergence and Limit Interchange](#/item/book-proof-safe-real-analysis?chapter=uniform-convergence) — decide when continuity, integration, differentiation, and infinite series survive a function limit.
15. [Power Series and Analytic Functions](#/item/book-proof-safe-real-analysis?chapter=power-series-and-analytic-functions) — determine radii and endpoints, justify termwise operations by compact uniformity, and distinguish analytic rigidity from smoothness.
16. [Outer Measure, Measurability, and Null Sets](#/item/book-measure-and-integration?chapter=outer-measure-and-measurability) — build length from countable covers, select measurable sets by splitting, and separate nullity from topology and cardinality.
17. [Lebesgue Integration by Simple Approximation](#/item/book-measure-and-integration?chapter=lebesgue-integration) — construct the integral from indicators and simple minorants, then extend it safely through positive and negative parts.
18. [Monotone, Fatou, and Dominated Convergence](#/item/book-measure-and-integration?chapter=measure-convergence-theorems) — choose the right limit-interchange theorem and diagnose escaping, concentrating, or oscillating mass.
19. [Lp Spaces, Norms, and Completeness](#/item/book-measure-and-integration?chapter=lp-and-banach-spaces) — turn integrated error into Banach-space geometry, with Hölder, Minkowski, completeness, dual pairing, and Hilbert projection.
20. [Fixed Points and Complete Metric Spaces](#/item/book-proof-safe-real-analysis?chapter=fixed-points-and-complete-spaces) — convert contraction estimates into existence, uniqueness, iterative convergence, perturbation bounds, and stopping certificates.
21. [Fourier Approximation, Density, and Modes of Convergence](#/item/book-fourier-analysis?chapter=fourier-approximation-and-density) — derive least-squares spectral projection, Fejer density, coefficient decay, and the boundaries among convergence modes.
22. [Counterexample Atlas and Synthesis Capstones](#/item/book-proof-safe-real-analysis?chapter=counterexample-atlas-and-capstones) — generate stress tests systematically and complete theorem-autopsy, convergence, approximation, existence, and computation capstones.

The intended route is sequential, but each chapter states its own prerequisites and can be read independently. If you already know elementary \\(\\varepsilon-\\delta\\) arguments, begin with compactness. If your goal is Fourier analysis, numerical approximation, or functional analysis, read the overview and then go directly to uniform convergence, following its backward links when needed.

<a id="section-86-how-to-work-through-a-chapter"></a>
### How to work through a chapter {#section-88-how-to-work-through-a-chapter}

Keep a hypothesis ledger. For every theorem, write its conclusion, underline each assumption, locate the line of proof where that assumption is used, and record a counterexample when it is removed. Work the exercises before opening the answers. A chapter is complete when you can reconstruct its main proof and diagnose a tempting false statement without copying the text.

<a id="section-90-1-quantifiers-are-part-of-the-object"></a>
## 1. Quantifiers are part of the object {#section-92-1-quantifiers-are-part-of-the-object}

A sequence \\((a_n)\\) converges to \\(L\\) when

\\[\\forall \\varepsilon>0\\ \\exists N\\in N\\ \\forall n\\ge N:
|a_n-L|<\\varepsilon.\\]

A function \\(f\\) is continuous at \\(a\\) when

\\[\\forall \\varepsilon>0\\ \\exists \\delta>0\\ \\forall x\\in E:
|x-a|<\\delta\\Longrightarrow |f(x)-f(a)|<\\varepsilon,\\]

where \\(f:E\\to R\\) and \\(a\\in E\\).

The definitions have the same architecture: answer every requested output tolerance with a threshold after which all cases succeed. When negating such a claim, each quantifier changes type. The statement \\(a_n\\) does not converge to \\(L\\) means

\\[\\exists \\varepsilon_0>0\\ \\forall N\\in N\\ \\exists n\\ge N:
|a_n-L|\\ge \\varepsilon_0.\\]

This is why a counterexample to convergence must keep producing bad terms arbitrarily far out. One early outlier proves nothing.

**Worked negation.** The sequence \\((-1)^n\\) does not converge to 1. Choose \\(\\varepsilon_0=1\\). For every \\(N\\), there is an odd \\(n\\ge N\\), and then \\(|(-1)^n-1|=2\\ge 1\\). A similar argument rules out every other proposed limit, or uniqueness of limits can finish the job after observing the even and odd subsequences.

Proof habit: before manipulating symbols, write the exact definition of the conclusion and the hypotheses. This exposes the required dependencies: \\(N\\) may depend on \\(\\varepsilon\\), while a later \\(n\\) may not alter \\(N\\).

<a id="section-115-2-completeness-closes-gaps"></a>
## 2. Completeness closes gaps {#section-117-2-completeness-closes-gaps}

The **least-upper-bound property** says every nonempty set of real numbers that is bounded above has a supremum in the real numbers. This is a form of completeness. Equivalent forms include:

- every Cauchy sequence of real numbers converges in the real numbers;
- every bounded monotone real sequence converges;
- every nested sequence of nonempty closed bounded intervals whose lengths tend to zero has exactly one common point.

These are not merely clever theorems derived from algebra. They express the absence of holes in the real line.

**Worked construction of a limit.** Suppose \\((a_n)\\) is increasing and bounded above. Let \\(L=\\sup\\{a_n:n\\ge 1\\}\\). For any \\(\\varepsilon>0\\), \\(L-\\varepsilon\\) cannot be an upper bound, or it would contradict leastness of \\(L\\). Thus some \\(a_N>L-\\varepsilon\\). Monotonicity then gives

\\(L-\\varepsilon<a_N\\le a_n\\le L\\) for every \\(n\\ge N\\),

so \\(|a_n-L|<\\varepsilon\\). The proof shows exactly where boundedness, monotonicity, and completeness enter.

Drop boundedness and \\(a_n=n\\) escapes. Drop monotonicity and \\((-1)^n\\) oscillates. Work only in the rational numbers and a rational sequence of decimal truncations of \\(\\sqrt{2}\\) is increasing and bounded but has no rational limit.

In a metric space \\((X,d)\\), a sequence is Cauchy if tail points become mutually close: for every \\(\\varepsilon>0\\), eventually \\(d(x_m,x_n)<\\varepsilon\\) for all \\(m,n\\) in the tail. The space is **complete** if every Cauchy sequence converges to a point of \\(X\\). The open interval \\((0,1)\\) with ordinary distance is not complete: the sequence \\(x_n=1/n\\), starting at \\(n=2\\), is Cauchy but its only possible real limit, 0, is missing.

<a id="section-135-3-subsequences-detect-hidden-behavior"></a>
## 3. Subsequences detect hidden behavior {#section-137-3-subsequences-detect-hidden-behavior}

A subsequence \\((a_{n_k})\\) keeps terms with strictly increasing indices \\(n_1<n_2<\\ldots\\). Every subsequence of a convergent sequence converges to the same limit. Consequently, two subsequences with different limits prove the original sequence diverges.

The **Bolzano–Weierstrass theorem** says every bounded sequence in \\(R^d\\), for finite \\(d\\), has a convergent subsequence. Boundedness alone does not make the whole sequence converge; it guarantees at least one cluster of coherent behavior.

For \\(a_n=(-1)^n+1/n\\), the even subsequence tends to 1 and the odd subsequence tends to -1, so the full sequence diverges. Its set of subsequential limits is \\(\\{-1,1\\}\\).

The quantities \\(\\limsup a_n\\) and \\(\\liminf a_n\\) record the largest and smallest persistent tail behavior for a bounded real sequence. The sequence converges exactly when these two values agree. This viewpoint later supports probability limit theorems and pointwise bounds for functions.

<a id="section-145-4-compactness-turns-local-information-into-global-contr"></a>
## 4. Compactness turns local information into global control {#section-147-4-compactness-turns-local-information-into-global-contr}

An open ball in a metric space is \\(B(x,r)=\\{y:d(x,y)<r\\}\\). A set is open if every point has some ball contained in it. A set is closed if it contains the limits of all its convergent sequences from the set.

A set \\(K\\) is **compact** if every collection of open sets covering \\(K\\) has a finite subcollection that still covers \\(K\\). In metric spaces this is equivalent to sequential compactness: every sequence in \\(K\\) has a subsequence converging to a point of \\(K\\).

In \\(R^d\\), the Heine–Borel theorem gives a convenient special test: compact sets are exactly the closed and bounded sets. Do not export this formula to arbitrary metric spaces. In an infinite-dimensional normed space, the closed unit ball is bounded and closed but generally not compact.

Compactness upgrades continuous behavior:

- **Extreme value theorem:** a continuous real-valued function on a nonempty compact set attains both a maximum and a minimum.
- **Heine–Cantor theorem:** a continuous function on a compact metric space is uniformly continuous.
- **Positive separation:** if a continuous positive function lives on a nonempty compact set, it has a positive minimum.

**Worked hypothesis audit.** The function \\(f(x)=1/x\\) is continuous on \\((0,1]\\) but is unbounded and has no maximum there. The domain is bounded but not closed, hence not compact in the real line. On \\([0.1,1]\\), compactness restores a maximum, namely 10 at \\(x=0.1\\), and uniform continuity.

Why does the extreme value theorem work? Take points where \\(f\\) approaches its supremum. Compactness supplies a convergent subsequence with limit still in the domain; continuity transfers the function values to the limiting point. Completeness supplies limits, compactness keeps them from escaping, and continuity transports information through them.

<a id="section-163-5-differentiation-theorems-are-conditional"></a>
## 5. Differentiation theorems are conditional {#section-165-5-differentiation-theorems-are-conditional}

In its endpoint form, the **intermediate value theorem** says that if \\(f\\) is continuous on \\([a,b]\\), every value between \\(f(a)\\) and \\(f(b)\\) occurs. More generally, continuity on any interval gives the intermediate-value property. The **mean value theorem** requires continuity on \\([a,b]\\) and differentiability on \\((a,b)\\): some \\(c\\) in \\((a,b)\\) satisfies

\\(f'(c)=[f(b)-f(a)]/(b-a)\\).

Consequences include: if \\(f'=0\\) throughout an interval, then \\(f\\) is constant there; if \\(f'\\ge 0\\), then \\(f\\) is nondecreasing. Both conclusions need an interval. A derivative vanishing on a disconnected domain does not force the same constant on separate components.

Differentiability implies continuity, but continuity does not imply differentiability. The absolute-value function is continuous at 0 but its left and right slopes differ. Even stranger continuous nowhere-differentiable functions exist, so a visually smooth-looking sample is not a proof.

**Worked Lipschitz bound.** If \\(f\\) is differentiable on \\((a,b)\\), continuous on \\([a,b]\\), and \\(|f'(x)|\\le M\\), then for any \\(x,y\\) in \\([a,b]\\), the mean value theorem gives

\\(|f(x)-f(y)|\\le M|x-y|\\).

Thus a uniform derivative bound yields a quantitative continuity guarantee: choose \\(\\delta=\\varepsilon/M\\) when \\(M>0\\).

<a id="section-179-6-pointwise-and-uniform-convergence-are-different-promi"></a>
## 6. Pointwise and uniform convergence are different promises {#section-181-6-pointwise-and-uniform-convergence-are-different-promi}

For functions \\(f_n:E\\to R\\), **pointwise convergence** to \\(f\\) means that for every fixed \\(x\\) and every \\(\\varepsilon>0\\), there exists \\(N\\)—which may depend on both \\(x\\) and \\(\\varepsilon\\)—such that \\(n\\ge N\\) implies \\(|f_n(x)-f(x)|<\\varepsilon\\).

The convergence is **uniform** if for every \\(\\varepsilon>0\\), there exists one \\(N\\) such that for every \\(x\\in E\\) and every \\(n\\ge N\\), the inequality holds. Equivalently,

\\[\\sup_{x\\in E}|f_n(x)-f(x)|\\to 0\\]

when that supremum is meaningful.

Uniform convergence preserves continuity: if each \\(f_n\\) is continuous and \\(f_n\\to f\\) uniformly, then \\(f\\) is continuous. The proof splits the desired output error into three parts: approximate \\(f\\) by one \\(f_N\\) at each endpoint, and use continuity of that fixed \\(f_N\\) between them.

**Counterexample.** Let \\(f_n(x)=x^n\\) on \\([0,1]\\). Pointwise, the limit is 0 for \\(0\\le x<1\\) and 1 at \\(x=1\\), a discontinuous function. Therefore convergence cannot be uniform. Directly, \\(\\sup|f_n-f|=1\\): values just below 1 remain arbitrarily close to 1 even though their pointwise limit is 0.

Uniform convergence of Riemann-integrable functions on \\([a,b]\\) permits integration through the limit:

\\[\\int_a^b f(x)\\,dx
=\\lim_{n\\to\\infty}\\int_a^b f_n(x)\\,dx.\\]

Indeed, the absolute difference of integrals is at most \\((b-a)\\sup|f_n-f|\\). Differentiation needs more: uniform convergence of \\(f_n\\) alone does not control the slopes.

<a id="section-200-a-visual-atlas-in-words"></a>
## A visual atlas in words {#section-202-a-visual-atlas-in-words}

Picture the logical dependencies as three gates on a path. The completeness gate prevents a Cauchy traveler from falling through a missing point. The compactness gate prevents a sequence from fleeing to infinity or toward an excluded boundary. The uniformity gate forces one convergence schedule to serve every point rather than allowing slower and slower regions.

A screen-free audit uses a three-column table: “claim,” “hypothesis doing the work,” and “failure example.” For the extreme value theorem, enter continuity plus compact domain, with \\(1/x\\) on \\((0,1]\\) as the failure. For preservation of continuity under limits, enter uniform convergence, with \\(x^n\\) on \\([0,1]\\) as the failure.

<a id="section-206-misconceptions-and-counterexamples"></a>
## Misconceptions and counterexamples {#section-208-misconceptions-and-counterexamples}

- **Closed and bounded always means compact.** True in finite-dimensional Euclidean spaces, false in general metric or normed spaces.
- **A bounded sequence converges.** It need only have a convergent subsequence in \\(R^d\\).
- **Continuous on a bounded set means bounded.** The domain must be compact; \\(1/x\\) on \\((0,1]\\) disagrees.
- **Pointwise limits preserve continuity.** The sequence \\(x^n\\) disagrees.
- **If a supremum exists, it belongs to the set.** The supremum of \\((0,1)\\) is 1, which is not in the set.
- **All Cauchy sequences converge.** Only in a complete ambient space.

<a id="section-215-exercises-with-worked-answers"></a>
## Exercises with worked answers {#section-217-exercises-with-worked-answers}

<a id="section-217-1-a-supremum-proof"></a>
### 1. A supremum proof {#section-219-1-a-supremum-proof}

Let \\(S=\\{x\\in R:x<2\\}\\). Find \\(\\sup S\\) and prove it from the definition.

**Answer.** The number 2 is an upper bound. If \\(u<2\\), then \\((u+2)/2\\) lies in \\(S\\) and is larger than \\(u\\), so \\(u\\) is not an upper bound. Hence no upper bound below 2 exists, making 2 the least upper bound.

<a id="section-223-2-closed-but-not-compact"></a>
### 2. Closed but not compact {#section-225-2-closed-but-not-compact}

Give a closed subset of \\(R\\) that is not compact and identify the missing Heine–Borel condition.

**Answer.** The set \\([0,\\infty)\\) is closed but unbounded, so it is not compact. The sequence \\(n\\) in the set has no convergent subsequence, confirming failure of sequential compactness.

<a id="section-229-3-compact-image"></a>
### 3. Compact image {#section-231-3-compact-image}

Why is \\(f(K)\\) compact when \\(K\\) is compact and \\(f\\) is continuous?

**Answer.** Given an open cover of \\(f(K)\\), take inverse images under \\(f\\); these are open in \\(K\\) and cover \\(K\\). A finite subcover exists by compactness. The corresponding original open sets form a finite cover of \\(f(K)\\). For real-valued \\(f\\), compactness of the image implies it is closed and bounded; if \\(K\\) is nonempty, the image also contains its extrema.

<a id="section-235-4-pointwise-but-not-uniform"></a>
### 4. Pointwise but not uniform {#section-237-4-pointwise-but-not-uniform}

Show \\(f_n(x)=x/n\\) converges uniformly to zero on \\([0,1]\\) but not on all of \\(R\\).

**Answer.** On \\([0,1]\\), \\(\\sup|x/n|=1/n\\to 0\\). On \\(R\\), for every fixed \\(n\\), \\(|x/n|\\) is unbounded as \\(x\\) varies, so no single \\(N\\) can make it less than even \\(\\varepsilon=1\\) for every real \\(x\\).

<a id="section-241-5-preserve-an-integral"></a>
### 5. Preserve an integral {#section-243-5-preserve-an-integral}

Suppose \\(f_n\\to f\\) uniformly on \\([0,2]\\) and every \\(f_n\\) is Riemann integrable. If \\(\\sup_{x\\in[0,2]}|f_n(x)-f(x)|\\le 1/n\\), bound

\\[\\left|\\int_0^2 f_n(x)\\,dx-\\int_0^2 f(x)\\,dx\\right|.\\]

**Answer.** The uniform limit theorem first guarantees that \\(f\\) is Riemann integrable. Then

\\[\\left|\\int_0^2(f_n-f)\\right|
\\le \\int_0^2|f_n-f|
\\le 2\\lVert f_n-f\\rVert_\\infty
\\le \\frac{2}{n},\\]

which tends to zero.

<a id="section-256-6-find-the-flawed-inference"></a>
### 6. Find the flawed inference {#section-258-6-find-the-flawed-inference}

“A continuous function on \\((0,1)\\) must attain its supremum because the interval is bounded.”

**Answer.** Boundedness alone is insufficient; \\((0,1)\\) is not compact. The function \\(f(x)=x\\) has supremum 1 there but never attains it.

<a id="section-262-proof-workshop-and-onward-ladder"></a>
## Proof workshop and onward ladder {#section-264-proof-workshop-and-onward-ladder}

For each major theorem, make a hypothesis ledger: state the theorem precisely, underline each assumption, locate where it enters a proof, and supply a counterexample when it is removed. Start with monotone convergence for sequences, the extreme value theorem, the mean value theorem, and the uniform limit theorem.

Next routes branch naturally. Metric spaces abstract the compactness and completeness arguments. Measure theory gives an integral compatible with far more limit processes. Functional analysis studies complete spaces of functions, where uniform and norm convergence become geometry. A dedicated limit-interchange recipe turns the theorem ledger into a reusable diagnostic workflow.

</details>

<a id="section-270-summary"></a>
## Summary {#section-272-summary}

Completeness gives limits a place to land; compactness turns local control into finite control; derivatives and integrals quantify change; uniformity permits stable approximation. Bounded variation, polynomial density, Baire category and local inverse theorems extend that same discipline without importing measure theory into the required classical route. The retained continuation chapters remain available when measure and Fourier methods become the next objective.
`;export{e as default};