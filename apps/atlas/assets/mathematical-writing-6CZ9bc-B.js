var e=`---
parent_id: book-mathematical-toolkit
chapter_id: mathematical-writing
title: "Mathematical Writing"
level: foundation
estimated_minutes: 150
license: CC BY-SA 4.0
---

# Mathematical Writing

Mathematics is a social activity. A proof that lives only in your head is fragile; one written clearly can be checked, improved, and built upon by others. Good mathematical writing is not decorative prose wrapped around symbols. It is a logical scaffold that guides the reader from hypotheses to conclusion without gaps, surprises, or undefined terms.

This chapter treats writing as a reasoning tool. The audience is a working mathematician or student who knows the prerequisites but has not seen this argument before. The goal is to produce text that such a reader can verify line by line.

## The contract with the reader

Every piece of mathematical writing makes implicit promises:

- Every symbol is introduced before it is used.
- Every assertion is justified by a definition, hypothesis, or prior result.
- The logical structure---what depends on what---is visible in the text.
- The reader is told what is being proved before the proof begins.

Breaking any of these promises forces the reader to guess, and guessing is where errors hide.

### Example: a broken contract

> Since $f$ is continuous, $f'(x) > 0$ for all $x$, so $f$ is increasing.

What is wrong? The argument assumes that continuous implies differentiable, which is false. The reader who spots the gap must reconstruct what the author meant; the reader who misses it learns a false implication.

### Example: honoring the contract

> Let $f : \\mathbb{R} \\to \\mathbb{R}$ be differentiable with $f'(x) > 0$ for all $x \\in \\mathbb{R}$. Then $f$ is strictly increasing.

*Proof:* Let $a < b$ be real numbers. By the Mean Value Theorem, there exists $c \\in (a, b)$ such that:

$$
f(b) - f(a) = f'(c)(b - a).
$$

Since $f'(c) > 0$ and $b - a > 0$, the right-hand side is positive. Therefore $f(b) > f(a)$, so $f$ is strictly increasing. $\\square$

Here the hypotheses are stated, the theorem invoked is named, and each step is explicit.

## Structure at the paragraph level

A mathematical argument has a natural hierarchy. Respect it.

### Theorem--proof pair

State the result first, clearly separated from its proof. The statement should include all hypotheses and the exact conclusion.

> **Theorem.** Let $n$ be an integer. If $n^{2}$ is even, then $n$ is even.

Then begin the proof with a signal word:

> *Proof:* We prove the contrapositive. Suppose $n$ is odd. ... $\\square$

The signal word tells the reader that verification mode begins. The tombstone ($\\square$) or "QED" marks the end.

### Lemmas and corollaries

A **lemma** is a stepping-stone result used to prove something larger. A **corollary** follows quickly from a theorem already proved. Name them honestly. A major result disguised as a lemma confuses the reader about what matters; a trivial observation called a theorem cheapens the term.

## Writing definitions

A good definition is a contract. It must be:

- **Precise:** No ambiguity about what satisfies it.
- **Logically determinate:** For an object in the stated domain, the definition gives an unambiguous condition. This does not promise an effective procedure that decides the condition in finite time.
- **Motivated:** The reader understands why this concept is worth isolating.

### Example: defining "even"

> An integer $n$ is **even** if there exists an integer $k$ such that $n = 2k$.

This is precise (the quantifier and equation are explicit), decidable for a given integer by checking parity, and motivated (it isolates the property of divisibility by $2$). Decidability belongs to this example; it is not required of every sound mathematical definition.

**Common error:** Writing "An even number is divisible by $2$" without specifying the domain (integers? natural numbers? Gaussian integers?) or the meaning of "divisible."

## Notation discipline

Notation is a compression scheme. Like all compression, it saves space only when both writer and reader share the dictionary.

### Introduce before use

Never let a symbol appear before it is declared. If $G$ denotes a graph, say so:

> Let $G = (V, E)$ be a finite simple graph with vertex set $V$ and edge set $E$.

### Respect type

Do not use the same symbol for different types of object in the same argument. If $n$ is an integer, do not later use $n$ for a real number without warning.

### Avoid unnecessary decoration

Subscripts and superscripts carry cognitive cost. Use $n$ rather than $n_{\\text{count}}$ when the context is clear. Use display math for important equations and inline math for incidental mentions.

## The revision loop

First drafts of proofs are usually discovery drafts: messy, backtracking, and incomplete. The revision loop separates discovery from presentation.

1. **Write the discovery draft.** Do not edit. Get the logic down.
2. **Check logical completeness.** Does every line follow from previous lines, definitions, or named theorems? Mark gaps.
3. **Restructure for linear reading.** A proof discovered backward (from conclusion to hypotheses) should usually be presented forward (from hypotheses to conclusion).
4. **Prune.** Remove steps that are correct but irrelevant. Remove words that add no information.
5. **Read aloud.** If a sentence cannot be spoken naturally, it is probably too compressed.

## Common errors in mathematical writing

### The omitted hypothesis

> Therefore $f$ attains a maximum on $[a, b]$.

This requires that $f$ be continuous on a closed bounded interval. If continuity was not assumed, the conclusion is unsupported.

### The ambiguous quantifier

> For $n$ large, $a_{n} < \\varepsilon$.

What does "large" mean? Does it depend on $\\varepsilon$? The active reader from the previous chapter will demand: for every $\\varepsilon > 0$, there exists $N$ such that for all $n \\geq N$, $a_{n} < \\varepsilon$.

### The unannounced variable

> Hence $x^{2} + y^{2} = 1$.

Where did $x$ and $y$ come from? What do they represent?

### The proof by example

> The formula holds for $n = 1, 2, 3$, so it holds for all $n$.

A finite check never proves a universal statement unless the domain is finite and exhausted.

## Practice exercises

### Exercise 1
Rewrite the following argument to honor the reader contract: "Since $A$ is invertible, $\\det(A) \\neq 0$, so the system $Ax = b$ has a unique solution."

### Exercise 2
Write a precise definition of what it means for a sequence $(a_{n})$ to be **bounded above**. Then give one example and one nonexample.

### Exercise 3
State the contrapositive of: "If a function $f : \\mathbb{R} \\to \\mathbb{R}$ is differentiable at $a$ and $a$ is a local maximum, then $f'(a) = 0$." Identify every hypothesis explicitly.

### Exercise 4
A student writes: "$\\sqrt{x^{2}} = x$ for all real $x$." Diagnose the error, then write a corrected statement with a short proof.

### Exercise 5
Rewrite the following proof fragment to remove the backward discovery structure and present it linearly: "We need $n^{2}$ odd. If $n$ is odd, say $n = 2k + 1$, then $n^{2} = 4k^{2} + 4k + 1$, which is odd. So we should assume $n$ is odd. Wait, we wanted the contrapositive."

### Exercise 6
Explain why the sentence "The function is continuous because it is a polynomial" is incomplete as written, and complete it properly.

## Solutions

**Solution 1.** A corrected version:

> Let $A$ be an $n \\times n$ matrix with entries in a field $\\mathbb{F}$, and let $b \\in \\mathbb{F}^{n}$. If $A$ is invertible, then $\\det(A) \\neq 0$, and the linear system $Ax = b$ has the unique solution $x = A^{-1}b$.

*Proof:* Since $A$ is invertible, there exists $A^{-1}$ such that $A^{-1}A = I$. Then $Ax = b$ implies $x = A^{-1}b$. Uniqueness follows because if $x_{1}$ and $x_{2}$ are solutions, then $A(x_{1} - x_{2}) = 0$, so $x_{1} - x_{2} = A^{-1}0 = 0$. $\\square$

**Solution 2.** Definition: A sequence $(a_{n})_{n \\in \\mathbb{N}}$ of real numbers is **bounded above** if there exists $M \\in \\mathbb{R}$ such that $a_{n} \\leq M$ for all $n \\in \\mathbb{N}$.

- Example: $a_{n} = 1 - \\frac{1}{n}$ is bounded above by $M = 1$ (and also by $M = 2$).
- Nonexample: $a_{n} = n$ is not bounded above. For any proposed $M$, choose $n = \\lceil M \\rceil + 1$; then $a_{n} > M$.

**Solution 3.** Work in the domain of pairs $(f,a)$ for which $f$ is differentiable at $a$, so that $f'(a)$ is defined. The theorem then says: if $a$ is a local maximum, then $f'(a)=0$. Its contrapositive is:

> If $f$ is differentiable at $a$ and $f'(a)\\neq0$, then $a$ is not a local maximum of $f$.

Writing “$f'(a)\\neq0$ or $f$ is not differentiable” mixes a derivative value with a case in which that derivative is undefined. Declaring the domain first removes that ambiguity.

The original hypotheses are:
- $f : \\mathbb{R} \\to \\mathbb{R}$;
- $f$ is differentiable at $a$;
- $a$ is a local maximum of $f$.

The conclusion is $f'(a) = 0$.

![Logical dependency of Fermat's stationary-point theorem and its contrapositive](figures/contrapositive-dependency.svg)

The upper implication reads: differentiability at $a$ together with a local maximum implies $f'(a)=0$. The lower implication is its contrapositive within the differentiability domain: differentiability together with $f'(a)\\ne0$ implies that $a$ is not a local maximum. Both arrows retain differentiability as a standing hypothesis.

**Solution 4.** The error is that $\\sqrt{x^{2}} = \\lvert x \\rvert$, not $x$, when $x < 0$. Corrected statement:

> For every real $x$, $\\sqrt{x^{2}} = \\lvert x \\rvert$.

*Proof:* If $x \\geq 0$, then $\\sqrt{x^{2}} = x = \\lvert x \\rvert$. If $x < 0$, then $x^{2} = (-x)^{2}$ with $-x > 0$, so $\\sqrt{x^{2}} = -x = \\lvert x \\rvert$. In both cases, $\\sqrt{x^{2}} = \\lvert x \\rvert$. $\\square$

**Solution 5.** Restructured proof:

> *Proof:* We prove the contrapositive. Suppose $n$ is odd. Then $n = 2k + 1$ for some integer $k$. Squaring gives:
> $$
> n^{2} = (2k + 1)^{2} = 4k^{2} + 4k + 1 = 2(2k^{2} + 2k) + 1,
> $$
> which is odd. Therefore, if $n^{2}$ is even, $n$ must be even. $\\square$

**Solution 6.** The sentence omits the theorem being invoked: every polynomial function $p : \\mathbb{R} \\to \\mathbb{R}$ is continuous on $\\mathbb{R}$. A complete version:

> The function $f(x) = 3x^{2} - 2x + 5$ is continuous on $\\mathbb{R}$ because it is a polynomial, and every polynomial is continuous on $\\mathbb{R}$.

## Looking backward and forward

This chapter applied the reading skills from *Read mathematics actively* to the task of producing clear mathematical prose. The central discipline---introduce every symbol, justify every step, state conclusions before proving them---will be essential in the next chapter, *LaTeX and Typesetting*, where we encode these structures into a typesetting system designed for mathematics.
`;export{e as default};