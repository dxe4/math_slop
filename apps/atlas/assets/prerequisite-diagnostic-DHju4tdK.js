var e=`---
parent_id: book-functions-equations-proof
matter_id: prerequisite-diagnostic
title: "Prerequisite Diagnostic"
license: CC BY-SA 4.0
---

# Prerequisite Diagnostic

This book assumes three kinds of background: differential and integral calculus, basic set theory and logic, and algebraic manipulation with complex numbers. The diagnostic below separates these skills and gives repair routes. It is not an exam; it is a self-check to guide efficient reading.

## What background is assumed

1. **Differential and integral calculus.** Limits, continuity, the derivative as a limit, the chain rule, integration by parts, and the fundamental theorem. You should be comfortable computing $\\frac{d}{dx}e^{x^{2}}$ and $\\int_{0}^{1}x\\ln x\\,dx$.
2. **Basic set theory and logic.** Sets, subsets, unions, intersections, functions as rules between sets, and the logical connectives $\\implies$, $\\iff$, $\\neg$, $\\forall$, $\\exists$. You should be able to read "$f:A \\to B$" and negate "$\\forall x\\,P(x)$" correctly.
3. **Algebraic manipulation with complex numbers.** The form $a+bi$, the modulus $|z|$, conjugation, and polar form $re^{i\\theta}$. You should be able to compute $(1+i)^{4}$ and solve $z^{2}+2z+5=0$.

## Self-diagnostic questions with answers

### Calculus

**Question 1.** Compute $\\frac{d}{dx}\\ln(x^{2}+1)$.

> **Answer.** By the chain rule, $\\frac{d}{dx}\\ln(x^{2}+1)=\\frac{2x}{x^{2}+1}$.

**Question 2.** Evaluate $\\int_{0}^{\\pi}\\sin(2x)\\,dx$.

> **Answer.** $\\int_{0}^{\\pi}\\sin(2x)\\,dx=\\bigl[-\\frac{1}{2}\\cos(2x)\\bigr]_{0}^{\\pi}=-\\frac{1}{2}(\\cos(2\\pi)-\\cos(0))=-\\frac{1}{2}(1-1)=0$.

**Question 3.** State the Taylor series of $e^{x}$ centered at $0$ and give its radius of convergence.

> **Answer.** $e^{x}=\\sum_{n=0}^{\\infty}\\frac{x^{n}}{n!}$. The radius of convergence is $R=\\infty$, which follows from the ratio test because $\\frac{a_{n+1}}{a_{n}}=\\frac{1}{n+1}\\to 0$.

### Set theory and logic

**Question 4.** Negate the statement "For every $\\varepsilon>0$ there exists $\\delta>0$ such that $|x-a|<\\delta$ implies $|f(x)-f(a)|<\\varepsilon$."

> **Answer.** "There exists $\\varepsilon>0$ such that for every $\\delta>0$ there exists $x$ with $|x-a|<\\delta$ and $|f(x)-f(a)|\\ge\\varepsilon$."

**Question 5.** Let $f:\\mathbb{R}\\to\\mathbb{R}$ be defined by $f(x)=x^{2}$. Is $f$ injective? Is it surjective? Justify each answer.

> **Answer.** Not injective: $f(-1)=f(1)=1$. Not surjective onto $\\mathbb{R}$: $-1$ has no real preimage because $x^{2}\\ge 0$ for all $x$.

### Complex numbers

**Question 6.** Express $1+i$ in polar form and compute $(1+i)^{8}$.

> **Answer.** $|1+i|=\\sqrt{2}$ and $\\arg(1+i)=\\pi/4$, so $1+i=\\sqrt{2}\\,e^{i\\pi/4}$. Then $(1+i)^{8}=(\\sqrt{2})^{8}e^{i\\cdot 8\\pi/4}=2^{4}e^{2\\pi i}=16$.

**Question 7.** Find all complex solutions to $z^{4}=1$.

> **Answer.** The fourth roots of unity are $e^{2\\pi ik/4}$ for $k=0,1,2,3$, giving $1$, $i$, $-1$, $-i$.

## Scoring your diagnostic

- If you answered 6--7 questions confidently and correctly, you have the background for the continuous route.
- If you answered 4--5 correctly, read the relevant repair sections below, then proceed.
- If you answered fewer than 4 correctly, work through the repair routes before the main chapters. The text will still be accessible, but the pace will be more comfortable with the gaps filled.

## Repair routes

### Calculus

- *Math Atlas: Calculus: Limits and Continuity* -- limits, continuity, and the intermediate value theorem.
- *Math Atlas: Calculus: Differentiation* -- derivatives, rules, and applications.
- *Math Atlas: Calculus: Integration* -- definite and indefinite integrals, techniques, and the fundamental theorem.

### Set theory and logic

- *Math Atlas: Discrete Mathematics: Sets, Logic, and Proof* -- sets, functions, relations, and basic proof structures.
- *Math Atlas: Algebra: Patterns and Structure* -- a proof-focused development of algebraic structures.

### Complex numbers

- *Math Atlas: Algebra and Trigonometry* -- complex arithmetic, polar form, and De Moivre's theorem.
- *Math Atlas: Calculus: Sequences and Series* -- convergence, power series, and radius of convergence.

## What this book does not assume

- Real analysis: completeness, uniform continuity, and the Lebesgue integral are mentioned but not required. Chapter 12 introduces the ideas needed for function spaces.
- Abstract algebra: groups, rings, and fields are not prerequisites. The book uses sets and functions directly.
- Programming: code appears in plain text for readability. No prior programming experience is required.
- Prior experience with Fourier analysis: Chapter 13 introduces Fourier series from first principles.

## Access and reading support

- Use the notation guide for repeated reference; it is designed for lookup, not one-time reading.
- Work the exercises before reading solutions; the solutions show reasoning, not only answers.
- If a chapter feels syntactically dense, expand the compressed sentences into object-type, operation, quantifier, and convention before concluding that the mathematics is inaccessible.
`;export{e as default};