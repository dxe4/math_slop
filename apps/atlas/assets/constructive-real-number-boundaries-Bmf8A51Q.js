var e=`---
parent_id: book-types-proofs-construction
chapter_id: constructive-real-number-boundaries
title: "Constructive real-number boundaries"
level: graduate
estimated_minutes: 200
license: CC BY-SA 4.0
---

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
State the constructive definition of a Cauchy real and explain why a modulus is required.

**Solution.** A constructive Cauchy real is a sequence $(x_n)$ of rationals together with a modulus $\\mu : \\mathbb{Q}^+ \\to \\mathbb{N}$ such that $|x_m - x_n| < \\epsilon$ for all $m, n \\geq \\mu(\\epsilon)$. The modulus is required because the existential $N$ in the classical definition does not provide a method to compute approximations.

### Exercise 2
Explain why the least upper bound property is not constructively valid for arbitrary bounded sets.

**Solution.** The least upper bound of a bounded set may not be computable without additional information. Constructively, one can construct the supremum of a sequence with a known rate of convergence, but not of an arbitrary set.

### Exercise 3
Give a constructive version of the intermediate value theorem.

**Solution.** If $f:[a,b]\\to\\mathbb R$ has a uniform modulus of continuity and $f(a)<0<f(b)$, then for every rational $\\epsilon>0$ one can choose a finite mesh fine enough that adjacent values differ by less than $\\epsilon$. Scanning the mesh with overlapping approximate sign tests either finds a value with $|f(c)|<\\epsilon$ or brackets a sign change across one mesh interval, whose endpoint values then give such an approximation. This yields an approximate zero; it does not uniformly decide an exact root.

### Exercise 4
Why is equality of reals not decidable in general?

**Solution.** To decide $x = y$, one would need to determine whether $x_n-y_n$ converges to exactly zero, which may require infinite information. A representation with moduli lets us approximate $|x-y|$ to any requested error and sometimes certify a separated inequality, but it does not uniformly decide exact equality or every strict threshold case.

## Chapter summary

Constructive real analysis requires explicit approximation data: moduli of convergence for Cauchy sequences, locatedness for Dedekind cuts, and uniform continuity for function theorems. Classical theorems may fail or require additional hypotheses. The goal is not to delete classical reasoning but to redesign definitions to expose computational content.

**Backward pointers:** This chapter uses the identity types and transport from Chapter 7, "Identity types and equality," and the choice principles from Chapter 11, "Choice principles are setting-sensitive."

**Forward pointers:** Chapter 13, "Proof assistant trust map," discusses how proof assistants implement constructive and classical real numbers.
`;export{e as default};