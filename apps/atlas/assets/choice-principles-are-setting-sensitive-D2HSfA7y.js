var e=`---
parent_id: book-types-proofs-construction
chapter_id: choice-principles-are-setting-sensitive
title: "Choice Principles and Constructive Reals"
level: advanced-undergraduate
estimated_minutes: 180
license: CC BY-SA 4.0
---

# Choice Principles and Constructive Reals

The axiom of choice takes different forms in different foundations, and its constructive status varies accordingly. This chapter distinguishes set-theoretic choice from type-theoretic choice, surveys variants, and explains why the formulation and ambient foundation must always be named.

## Set-theoretic choice

In Zermelo-Fraenkel set theory (ZF), the axiom of choice (AC) states:

> For every set $X$ of nonempty sets, there exists a function $f : X \\to \\bigcup X$ such that $f(x) \\in x$ for all $x \\in X$.

AC implies the well-ordering theorem and Zorn's lemma over ZF. It is independent of ZF: Gödel proved that ZF + AC is consistent if ZF is consistent; Cohen proved that ZF + $\\neg$AC is consistent if ZF is consistent.

The set-theoretic formulation does not require a method for choosing elements. It asserts the existence of a choice function without describing how to compute it.

## Type-theoretic choice

In dependent type theory, consider a term of type

$$\\Pi x : A.\\, \\Sigma y : B.\\, R(x, y).$$

This is a function that, given $x : A$, returns a pair $(y, p)$ where $y : B$ and $p : R(x, y)$. Projecting the first component yields a function $f : \\Pi x : A.\\, B$, and projecting the second component yields a proof that $R(x, f(x))$ holds for all $x$.

This "type-theoretic choice" is constructive unpacking. The witness $y$ is already supplied by the function; projection merely extracts it. It is not automatically the full set-theoretic AC, because:

- Type-theoretic families may not correspond to quotiented or extensional sets.
- The set-theoretic AC may involve families where nonemptiness is given propositionally, without a witness.
- Extensionality constraints in set theory may not be present in type theory.

## Variants and their status

**Countable choice (AC$_{\\omega}$).** For every sequence of nonempty sets, there is a choice sequence. Its constructive status depends on the foundation. In some constructive frameworks, it is accepted; in others, it is not.

**Dependent choice (DC).** A strengthening of countable choice that permits dependent sequences. It is often used in analysis and topology.

**Unique choice.** If for every $x$ there is a unique $y$ with $R(x, y)$, then a choice function exists. This is often constructively acceptable because uniqueness provides a canonical selection.

**Searchable families.** Decidability of $R(x,y)$ does not by itself find a $y$ over an arbitrary domain. Choice can be constructed when the candidate domain is effectively enumerable and nonemptiness comes with enough search information—for example, a finite bound containing a witness. The exact data must be stated.

## Common errors

**Error: conflating type-theoretic and set-theoretic choice.** The type-theoretic principle is unpacking; the set-theoretic principle is existence without witness. They are different theorems with different constructive status.

**Error: assuming AC is always independent.** In some type theories, the type-theoretic version of choice is a theorem, not an axiom. Independence is a property of ZF, not of all foundations.

**Error: omitting the formulation.** Saying "choice holds" or "choice fails" without specifying the formulation and foundation is meaningless. Always name both.

## Practice exercises

### Exercise 1
<a id="choice-principles-are-setting-sensitive-ex-1"></a>
Explain why projecting a dependent witness is not automatically the full set-theoretic axiom of choice.


<details><summary>Hint 1</summary>

The premise already contains a function returning witness pairs.

</details>
<details><summary>Hint 2</summary>

A set-theoretic or hidden-witness formulation may not expose that data.

</details>
<details><summary>Solution</summary>

The dependent premise $\\Pi x : A.\\, \\Sigma y : B.\\, R(x, y)$ already supplies a witness for each $x$. Projection merely unpacks data. Set-theoretic AC may involve families where nonemptiness is given propositionally (without witness), or quotient structures where canonical representatives do not exist.

</details>

### Exercise 2
<a id="choice-principles-are-setting-sensitive-ex-2"></a>
State the difference between countable choice and dependent choice.


<details><summary>Hint 1</summary>

Separate a fixed sequence of sets from a relation connecting successive choices.

</details>
<details><summary>Hint 2</summary>

Specify the ambient formulation and existence convention.

</details>
<details><summary>Solution</summary>

Countable choice (AC$_{\\omega}$) asserts a choice sequence for every sequence of nonempty sets. Dependent choice (DC) allows the choice at step $n$ to depend on the choices at previous steps. DC is stronger than AC$_{\\omega}$.

</details>

### Exercise 3
<a id="choice-principles-are-setting-sensitive-ex-3"></a>
Why is unique choice often constructively acceptable?


<details><summary>Hint 1</summary>

Uniqueness removes ambiguity of an existing witness.

</details>
<details><summary>Hint 2</summary>

It does not make witness extraction from every proposition an unrestricted rule.

</details>
<details><summary>Solution</summary>

If for every $x$ there is a unique $y$ with $R(x, y)$, then the witness is canonical. No arbitrary selection is needed; the uniqueness condition determines $y$ from $x$.

</details>

### Exercise 4
<a id="choice-principles-are-setting-sensitive-ex-4"></a>
In which foundations is the type-theoretic choice principle a theorem rather than an axiom?


<details><summary>Hint 1</summary>

Use the untruncated dependent-pair formulation.

</details>
<details><summary>Hint 2</summary>

Projection is derivable from its introduction and elimination rules.

</details>
<details><summary>Solution</summary>

In Martin-Löf type theory and the Calculus of Inductive Constructions (as implemented in Coq), the type-theoretic version of choice is provable from the rules of the system. It is not an axiom because the witnesses are already present in the types.

</details>

## Chapter summary

Choice principles are foundation-sensitive. Set-theoretic AC asserts existence without witness; type-theoretic choice unpacks existing witnesses. Countable choice, dependent choice, unique choice, and choice for effectively searchable families have different constructive statuses. Always name the formulation, available data, and ambient foundation.

**Backward pointers:** This chapter builds on the dependent types from Chapter 6, "Dependent function and pair types," and the Curry–Howard discussion from Chapter 5, "Curry–Howard: precise scope."

**Forward pointers:** Chapter 12, "Constructive real-number boundaries," uses choice principles in the construction of Cauchy reals. Chapter 13, "Proof assistant trust map," discusses how proof assistants handle axioms like choice.


## Worked example 1: choosing with a supplied finite bound

Suppose for each input $x$ a natural bound $b(x)$ is given, the predicate $R(x,n)$ is decidable for $0\\le n\\le b(x)$, and supplied evidence asserts that some candidate in that range succeeds. Search the candidates in order, retaining their decisions. A first positive result returns that index and its predicate proof. If all fail, the stored refutations contradict the supplied bounded-existence evidence. The finite search therefore constructs a witness for each input without invoking unrestricted set-theoretic choice.

The bound and decision procedures are real input data. Dropping the bound can remove the termination proof; dropping decidability can prevent testing the candidates; replacing explicit existence data by a different proposition-valued formulation changes what elimination is allowed. The construction is useful precisely because it identifies which information supports a choice. It should not be described as a proof of every principle containing the word choice.

## Related existence and choice distinctions

# Constructive real-number boundaries

Classical real analysis relies on principles that are not constructively valid. This chapter examines how real numbers are defined constructively, why classical theorems may fail, and what modifications are needed to preserve computational content.

## Cauchy reals

A classical Cauchy sequence is a sequence $(x_n)$ such that for every $\\epsilon > 0$, there exists $N$ such that $|x_m - x_n| < \\epsilon$ for all $m, n \\geq N$.

When the existential quantifier is read classically or propositionally truncated, this does not supply a usable index. A common constructive presentation therefore includes a **modulus of convergence**: a function $\\mu : \\mathbb{Q}^+ \\to \\mathbb{N}$ such that $|x_m - x_n| < \\epsilon$ whenever $m, n \\geq \\mu(\\epsilon)$. In a foundation where a proof of $\\forall\\epsilon\\,\\exists N$ already carries a witness-producing function, that proof can itself supply the modulus.

Two Cauchy sequences $(x_n, \\mu)$ and $(y_n, \\nu)$ represent the same real if the difference $x_n-y_n$ converges to zero with an explicit modulus. Equivalently, their corresponding terms become arbitrarily close at an effectively controlled rate. Exact equality is generally undecidable.

## Dedekind cuts

A common classical convention specifies a nonempty proper downward-closed lower set $L\\subset\\mathbb Q$ with no greatest element; its complement is the upper side. A two-sided rounded presentation instead uses disjoint lower and upper sets and may leave a rational boundary in neither side.

Constructively, additional conditions are needed. A cut is **located** if for all rationals $p<q$, either $p\\in L$ or $q\\in U$. A rational at the boundary need belong to neither rounded side, so the formula $q\\in L\\lor q\\in U$ for a single $q$ would be too strong. Locatedness supplies the separated comparisons needed for approximation.

Without locatedness, a cut might not permit effective approximation. The constructive definition exposes the approximation data that classical definitions hide.

## The monotone convergence theorem

Classically, every bounded increasing sequence of reals converges. Constructively, this theorem encodes nonconstructive principles unless the convergence data are effective.

Specifically, given a bounded increasing sequence $(x_n)$, the limit is the supremum. Constructively, to compute the limit to within $\\epsilon$, we need a method to find $N$ such that $\\sup x_n - x_N < \\epsilon$. This requires that the rate of convergence be bounded or computable.

If no such bound is given, the theorem may imply excluded middle for certain propositions. The classical proof uses the least upper bound property, which is not constructively valid without additional data.

## Common errors

**Error: deleting proof by contradiction and calling the result constructive.** Constructive analysis is not classical analysis with negation removed. Definitions must be redesigned to expose witness and approximation data.

**Error: assuming all classical theorems fail constructively.** Many classical theorems have constructive versions with additional hypotheses (moduli, rates, decidability conditions). The constructive version is often more informative.

**Error: calling approximate comparison a decision of equality.** Equality of reals is not decidable in general, and even the strict test $|x-y|<\\epsilon$ cannot be uniformly decided at its boundary. One can compute an approximation to $|x-y|$, or use separated alternatives with a gap, such as certifying $|x-y|<\\epsilon$ or $|x-y|>\\epsilon/2$ when the available approximations determine one of them.

## Practice exercises

### Exercise 1
<a id="constructive-real-number-boundaries-ex-1"></a>
State the constructive definition of a Cauchy real and explain why a modulus is required.


<details><summary>Hint 1</summary>

A Cauchy representation needs a usable tolerance-to-index map.

</details>
<details><summary>Hint 2</summary>

State what its output guarantees for all later rational terms.

</details>
<details><summary>Solution</summary>

A constructive Cauchy real is a sequence $(x_n)$ of rationals together with a modulus $\\mu : \\mathbb{Q}^+ \\to \\mathbb{N}$ such that $|x_m - x_n| < \\epsilon$ for all $m, n \\geq \\mu(\\epsilon)$. The modulus is required because the existential $N$ in the classical definition does not provide a method to compute approximations.

</details>

### Exercise 2
<a id="constructive-real-number-boundaries-ex-2"></a>
Explain why the least upper bound property is not constructively valid for arbitrary bounded sets.


<details><summary>Hint 1</summary>

Ask how the supremum can be approximated at a requested tolerance.

</details>
<details><summary>Hint 2</summary>

An arbitrary bounded-set description may omit the needed search information.

</details>
<details><summary>Solution</summary>

The least upper bound of a bounded set may not be computable without additional information. Constructively, one can construct the supremum of a sequence with a known rate of convergence, but not of an arbitrary set.

</details>

### Exercise 3
<a id="constructive-real-number-boundaries-ex-3"></a>
Give a constructive version of the intermediate value theorem.


<details><summary>Hint 1</summary>

Aim for a tolerance-dependent approximate zero rather than an exact root.

</details>
<details><summary>Hint 2</summary>

Combine a finite fine mesh with overlapping approximate value checks.

</details>
<details><summary>Solution</summary>

If $f:[a,b]\\to\\mathbb R$ has a uniform modulus of continuity and $f(a)<0<f(b)$, then for every rational $\\epsilon>0$ one can choose a finite mesh fine enough that adjacent values differ by less than $\\epsilon$. Scanning the mesh with overlapping approximate sign tests either finds a value with $|f(c)|<\\epsilon$ or brackets a sign change across one mesh interval, whose endpoint values then give such an approximation. This yields an approximate zero; it does not uniformly decide an exact root.

</details>

### Exercise 4
<a id="constructive-real-number-boundaries-ex-4"></a>
Why is equality of reals not decidable in general?


<details><summary>Hint 1</summary>

A modulus gives finite error control, not an exact zero test.

</details>
<details><summary>Hint 2</summary>

The halting-indexed Cauchy family shows the uniform obstruction.

</details>
<details><summary>Solution</summary>

To decide $x = y$, one would need to determine whether $x_n-y_n$ converges to exactly zero, which may require infinite information. A representation with moduli lets us approximate $|x-y|$ to any requested error and sometimes certify a separated inequality, but it does not uniformly decide exact equality or every strict threshold case.


</details>


## Worked example 2: a rational sequence with a known rate

Let $q_n=1-2^{-n}$ for natural $n$. For $m,n\\ge N$, the difference has absolute value at most $2^{-N}$. Given a positive rational tolerance, choose $N$ with $2^{-N}$ strictly below it. Doubling integers eventually exceeds the reciprocal tolerance, so that search terminates without deciding an equality between arbitrary reals. This supplies a modulus for a concrete Cauchy representation of one.

Moduli also compose. If $x,y$ have moduli $\\mu,\\nu$, a modulus for their pointwise sum is the maximum of $\\mu(\\epsilon/2)$ and $\\nu(\\epsilon/2)$, by the triangle inequality. For a product, suppose rational bounds $|x_n|\\le M$ and $|y_n|\\le N$ are supplied for all indices, with $M,N\\ge0$. Use $\\mu(\\epsilon/(2(N+1)))$ and $\\nu(\\epsilon/(2(M+1)))$, taking their maximum. Expanding a product difference bounds it by $M|y_m-y_n|+N|x_m-x_n|$, strictly less than the requested tolerance.

A global rational bound can itself be recovered from a rational Cauchy sequence with a modulus. At index $K=\\mu(1)$, every later term is within one of $x_K$. Take the maximum of the finitely many absolute values through $K$, then add one. That rational bounds both the initial segment and the tail. This is a finite-data construction, rather than an application of an unspecified boundedness principle. It illustrates how representation choices make later analytic operations implementable.

## Worked example 3: effective approximation without decidable equality

Fix an encoded machine. Number simulation stages starting at one, with an initially halting configuration detected at stage one. At stage $n$, set $r_n=2^{-t}$ if a first halt was seen at stage $t\\le n$, and set $r_n=0$ otherwise. Each rational term is computed by a finite simulation. If two stages beyond $N$ differ, the first halt occurred after $N$, so their difference is smaller than $2^{-N}$. The same geometric modulus as above therefore works uniformly for every encoded machine.

The resulting Cauchy real equals zero exactly when the machine never halts. If it halts, the eventual value is a strictly positive dyadic rational; if it never halts, every term is zero. A uniform effective procedure deciding equality to zero for these represented reals would therefore decide the halting problem, by reading its yes/no result. The logic book ruled that out. These reals all have effective approximation data with a uniform rate, so the obstruction is equality, not lack of an approximation algorithm.

Contrast the binary sequence $s_n$ that is one if a halt has been observed by stage $n$ and zero otherwise. It is bounded and increasing, but a uniform Cauchy modulus for all these sequences at tolerance one half would decide halting: run through the indicated stage; if no halt has occurred, any later jump would violate the modulus. Thus a bare bounded-monotone description does not supply that missing uniform rate. Changing the size of a possible late jump changed the available information in a precise way.

## Worked example 4: approximation from locatedness

Suppose a two-sided cut comes with rationals $l\\in L$ and $u\\in U$, where $l<u$, and with the stated locatedness method. Divide the current interval into thirds, choosing rational $p=l+(u-l)/3$ and $q=l+2(u-l)/3$. Since $p<q$, locatedness supplies either evidence that $p\\in L$ or evidence that $q\\in U$. In the first case retain $p$ as the new lower endpoint and $u$ as upper. In the second retain $l$ as lower and $q$ as upper. Each result still brackets the cut and has two thirds of the previous width.

If both assertions are true, either returned tag is usable; the construction does not require an exclusive decision. This is why the separated comparison is weaker than deciding for a single rational whether it lies below or above an exact real boundary. A rational boundary may belong to neither rounded side, while the thirds construction always asks about two distinct rationals with a genuine gap.

After $N$ steps the width is $(2/3)^N(u-l)$. Given a positive rational tolerance, compute a finite $N$ making that width sufficiently small. The midpoint then approximates the represented cut within the guaranteed bracket error. Each recursive step uses rational arithmetic and the supplied locatedness result, and the chosen number of steps is finite. A sequence of midpoint approximants at successively smaller requested tolerances carries explicit error information.

This derivation identifies all its starting data. A merely nonempty proper lower cut described propositionally may not supply usable initial bounds or an effective locatedness operation in the chosen foundation. If those are given by untruncated existence evidence, they can be projected; if not, additional reasoning or principles can be required. One should not insert them silently while claiming to have approximated an arbitrary cut.

The example also separates two uses of choice language. The algorithm makes finitely many case-dependent selections using already supplied disjunction evidence. It does not choose unspecified witnesses from every member of an arbitrary family of sets. The logical rules for consuming a tag justify the finite decisions. This same distinction explains why a concrete iterative approximation can be constructive while a broad existence theorem stated with less data has no immediate executable interpretation.

### Exercise 9
<a id="choice-principles-are-setting-sensitive-ex-9"></a>
Derive the product modulus from the displayed rational bounds, explaining the harmless added ones in its tolerances.

<details><summary>Hint 1</summary>

Insert and subtract $x_m y_n$.

</details>
<details><summary>Hint 2</summary>

The two resulting factors use the opposite sequence's bound.

</details>
<details><summary>Solution</summary>

Write $x_my_m-x_ny_n=x_m(y_m-y_n)+y_n(x_m-x_n)$. Taking absolute values gives the bound in the example. At the maximum of the two modulus indices, its terms are smaller than $M\\epsilon/(2(M+1))$ and $N\\epsilon/(2(N+1))$, whose sum is below $\\epsilon$. Adding one keeps denominators positive even if a bound is zero and gives strict slack. The argument requires the bounds and both modulus specifications; convergence without that data does not define the same procedure.

</details>

### Exercise 10
<a id="choice-principles-are-setting-sensitive-ex-10"></a>
Explain how the dyadic halting construction refutes uniform effective equality testing despite providing a known modulus. Why does it not say that every individual real comparison is impossible?

<details><summary>Hint 1</summary>

The equality result would classify an arbitrary encoded machine.

</details>
<details><summary>Hint 2</summary>

The impossibility concerns one method handling the whole family.

</details>
<details><summary>Solution</summary>

Given a machine, compute its rational approximation sequence by bounded simulation and use the shared geometric modulus. A hypothetical equality-to-zero decider returns yes exactly for nonhalting machines and no for halting ones, yielding a total halting decider after reversing that interpretation. This contradicts the established undecidability theorem. Particular represented reals may have separately provable equality or inequality, as with explicit rationals; the reduction rules out a uniform effective decision procedure for all inputs in the specified family.

</details>

## Chapter summary

Choice depends on the representation of existence and the available selection data. Bounded decidable searches construct witnesses, while projection uses witnesses already present in dependent pairs. Constructive real operations need moduli and bounds, which can often be built and composed explicitly. Even uniformly effective approximation does not decide arbitrary equality. These distinctions connect the logical hypotheses to the actual mathematical information a programme or proof can expose.

**Backward pointers:** This chapter uses the identity types and transport from Chapter 7, "Identity types and equality," and the choice principles from Chapter 11, "Choice principles are setting-sensitive."

**Forward pointers:** Chapter 13, "Proof assistant trust map," discusses how proof assistants implement constructive and classical real numbers.
`;export{e as default};