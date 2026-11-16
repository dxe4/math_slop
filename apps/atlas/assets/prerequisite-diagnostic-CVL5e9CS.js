var e=`---
parent_id: book-winning-with-invariants
matter_id: prerequisite-diagnostic
title: "Prerequisite Diagnostic"
license: CC BY-SA 4.0
---

# Prerequisite Diagnostic

This book assumes three kinds of background: logical reasoning and proof by induction, basic set theory and functions, and familiarity with binary representation and the exclusive-or operation. The diagnostic below separates these skills and gives repair routes. It is not an exam; it is a self-check to guide efficient reading.

## What background is assumed

1. **Logical reasoning and induction.** You should be comfortable with direct proof, proof by contradiction, and proof by mathematical induction. You should be able to read "for all $n \\in \\mathbb{N}$, if $P(n)$ then $P(n+1)$" and understand why this establishes $P(n)$ for all $n$.
2. **Sets and functions.** You should know the definitions of union, intersection, subset, and function. You should be able to read $f: X \\to Y$ and understand domain, codomain, and image.
3. **Binary arithmetic and XOR.** You should know that nonnegative integers can be written in base $2$, and that the bitwise exclusive-or $a \\oplus b$ adds binary digits without carrying. You should be able to compute $5 \\oplus 3 = 6$.

## Self-diagnostic questions with answers

### Logical reasoning and induction

**Question 1.** Prove by induction that $1 + 2 + \\cdots + n = n(n+1)/2$ for all $n \\geq 1$.

> **Answer.** Base case $n = 1$: $1 = 1(2)/2$. Inductive step: assume true for $n$. Then $1 + \\cdots + n + (n+1) = n(n+1)/2 + (n+1) = (n+1)(n/2 + 1) = (n+1)(n+2)/2$. This is the formula for $n+1$. By induction, the formula holds for all $n \\geq 1$.

**Question 2.** A game position is called *safe* if every move from it leads to an *unsafe* position, and *unsafe* if there exists a move to a *safe* position. Explain why no position can be both safe and unsafe.

> **Answer.** Induct on the maximum number $h(P)$ of moves remaining. A terminal position has $h(P)=0$: “every move leads to unsafe” is vacuously true, while no move to a safe position exists, so it is safe only. Assume positions of height below $h$ are in exactly one class. If a height-$h$ position has a move to a safe option, it is unsafe; it cannot also be safe, because that move does not lead to an unsafe option by the induction hypothesis. If it has no move to a safe option, every option is unsafe by the induction hypothesis, so it is safe and cannot be unsafe. Thus the two recursive conditions are exclusive and exhaustive at every finite height.

**Question 3.** Give a counterexample to the claim: "In every two-player game, the first player has a winning strategy."

> **Answer.** Consider the game with one counter and one legal move: remove the counter. The first player removes it and wins. To find a counterexample, we need a game where the first player loses. In the subtraction game with move set $\\{1,2,3\\}$ and $n = 4$ counters, every move leaves $1$, $2$, or $3$, from which the second player takes the rest. The first player loses. This is a P-position.

### Sets and functions

**Question 4.** Let $S = \\{0, 1, 2, 3\\}$ and $T = \\{1, 2, 4\\}$. Compute $S \\cup T$, $S \\cap T$, and $S \\setminus T$.

> **Answer.** $S \\cup T = \\{0, 1, 2, 3, 4\\}$. $S \\cap T = \\{1, 2\\}$. $S \\setminus T = \\{0, 3\\}$.

**Question 5.** Define $f: \\mathbb{Z}_{\\geq 0} \\to \\mathbb{Z}_{\\geq 0}$ by $f(n) = n \\bmod 4$. Is $f$ injective? Is it surjective?

> **Answer.** $f$ is not injective because $f(0) = f(4) = 0$ but $0 \\neq 4$. It is also not surjective onto the declared codomain $\\mathbb{Z}_{\\geq0}$: its image is only $\\{0,1,2,3\\}$, so, for example, $4$ has no preimage. If the codomain were restricted to $\\{0,1,2,3\\}$, the same rule would be surjective. The distinction between codomain and image is the point of the question.

### Binary arithmetic and XOR

**Question 6.** Write $13$ and $10$ in binary and compute $13 \\oplus 10$.

> **Answer.** $13 = 1101_2$, $10 = 1010_2$. Bitwise XOR gives $0111_2 = 7$.

**Question 7.** Show that $a \\oplus a = 0$ for any nonnegative integer $a$, and deduce that $a \\oplus b = 0$ implies $a = b$.

> **Answer.** In binary, each bit of $a$ XORed with itself is $0$. Therefore $a \\oplus a = 0$. If $a \\oplus b = 0$, then $a = a \\oplus 0 = a \\oplus (a \\oplus b) = (a \\oplus a) \\oplus b = 0 \\oplus b = b$.

**Question 8.** Compute the nim sum of heap sizes $(3, 5, 6)$ and determine whether the position is P or N.

> **Answer.** $3 \\oplus 5 = 011_2 \\oplus 101_2 = 110_2 = 6$. Then $6 \\oplus 6 = 0$. The nim sum is $0$, so the position is P.

## Scoring your diagnostic

- If you answered 7–8 questions confidently and correctly, you have the background for the continuous route.
- If you answered 5–6 correctly, read the relevant repair sections below, then proceed.
- If you answered fewer than 5 correctly, work through the repair routes before the main chapters. The text will still be accessible, but the pace will be more comfortable with the gaps filled.

## Repair routes

### Logical reasoning and induction

- *Math Atlas: Mathematical Toolkit* — proof techniques, induction, and logical structure.
- *Math Atlas: Discrete Mathematics* — sets, functions, relations, and combinatorial arguments.

### Sets and functions

- *Math Atlas: Mathematical Toolkit* — set notation, functions, and mappings.
- *Math Atlas: Discrete Mathematics* — advanced set theory and combinatorial identities.

### Binary arithmetic and XOR

- *Math Atlas: Mathematical Toolkit* — number bases, modular arithmetic, and bitwise operations.
- Chapter 2 of this book, **Impartial Games**, reintroduces nim addition from first principles with examples.

## What this book does not assume

- Advanced algebra: groups, rings, and fields are mentioned but not required. Chapter 6 introduces the game algebra needed for partizan games.
- Programming: code appears in plain text for readability. No prior programming experience is required, though Chapter 10 rewards readers who implement the algorithms.
- Prior knowledge of specific games: every game is introduced from its rules upward.
- Topology or analysis: infinite games and temperature theory are mentioned as boundaries, not prerequisites.

## Access and reading support

- Use the notation guide for repeated reference; it is designed for lookup, not one-time reading.
- Work the exercises before reading solutions; the solutions show reasoning, not only answers.
- If a chapter feels syntactically dense, expand the compressed sentences into game state, move set, invariant, and quantifier before concluding that the mathematics is inaccessible.
`;export{e as default};