
# Prerequisite Diagnostic

The current main route is graduate-level and assumes the [L3 Introduction to Logic and Set Theory](#/books/introduction-to-logic-and-set-theory) book or equivalent. In addition to the retained elementary diagnostic below, you should be able to prove a substitution lemma with capture conditions, distinguish satisfiability from provability, use compactness, work with effective enumerations, and separate internal arithmetic assertions from statements in the metatheory. Revisit the relevant L3 chapter whenever one of these tasks is unfamiliar. The eight elementary questions check necessary foundations; their score alone does not certify readiness for every graduate chapter.

This book assumes three kinds of background: basic logical syntax and proof, naive set theory and functions, and some exposure to proof by induction or contradiction. The diagnostic below separates these skills and gives repair routes. It is not an exam; it is a self-check to guide efficient reading.

## What background is assumed

1. **Logical syntax and proof.** Propositional connectives ($\neg$, $\land$, $\lor$, $\to$), quantifiers ($\forall$, $\exists$), the structure of a direct proof, a proof by contradiction, and a proof by induction. You should be comfortable reading $T \vdash \varphi$ as "theory $T$ proves formula $\varphi$" and distinguishing syntax from semantics.
2. **Naive set theory and functions.** Sets, subsets, unions, intersections, power sets, ordered pairs, functions, injections, surjections, bijections, and equivalence relations. You should be able to state what it means for a function to be injective and to prove that the composition of two injections is an injection.
3. **Proof by induction and contradiction.** Mathematical induction on natural numbers, strong induction, and proof by contradiction (reduction to absurdity). You should be able to prove that every finite totally ordered set has a least element, and that $\sqrt{2}$ is irrational.

## Self-diagnostic questions with answers

### Logical syntax and proof

**Question 1.** In propositional logic, construct a truth table showing that $(p \to q) \leftrightarrow (\neg q \to \neg p)$ is a tautology.

> **Answer.** The truth table has four rows. In every row, the truth values of $p \to q$ and $\neg q \to \neg p$ match: when $p$ is false both implications are true; when $p$ is true and $q$ is true both are true; when $p$ is true and $q$ is false both are false. Hence the biconditional is true in all rows.

**Question 2.** Explain why $\forall x \, \exists y \, R(x, y)$ does not imply $\exists y \, \forall x \, R(x, y)$. Give a concrete relation $R$ on $\mathbb{N}$ that separates the two.

> **Answer.** The first sentence says that for every $x$ there is a $y$ (possibly depending on $x$) with $R(x, y)$. The second says there is a single $y$ that works for all $x$. Let $R(x, y)$ mean $x < y$. Then for every $x$ there exists $y = x + 1$ with $R(x, y)$, but no single $y$ exceeds every natural number.

**Question 3.** State the difference between a theorem, a lemma, and a corollary in standard mathematical practice.

> **Answer.** A theorem is a major result. A lemma is a preparatory result used to prove a theorem. A corollary is a result that follows quickly from a theorem. The distinction is social and organizational, not logical; a lemma may be deeper than the theorem it serves.

### Set theory and functions

**Question 4.** Prove that if $f: A \to B$ and $g: B \to C$ are both injective, then $g \circ f: A \to C$ is injective.

> **Answer.** Suppose $(g \circ f)(a_1) = (g \circ f)(a_2)$. Then $g(f(a_1)) = g(f(a_2))$. Since $g$ is injective, $f(a_1) = f(a_2)$. Since $f$ is injective, $a_1 = a_2$. Hence $g \circ f$ is injective.

**Question 5.** Let $A$ be a set with $|A| = n$. How many elements does $\mathcal{P}(A)$ have? Prove your claim by induction.

> **Answer.** $|\mathcal{P}(A)| = 2^{n}$. Base case: $n = 0$, $A = \emptyset$, $\mathcal{P}(A) = \{\emptyset\}$, so $|\mathcal{P}(A)| = 1 = 2^{0}$. Inductive step: assume true for sets of size $n$. For $|A| = n + 1$, pick $a \in A$. Subsets of $A$ either contain $a$ or not. Those not containing $a$ are subsets of $A \setminus \{a\}$, of which there are $2^{n}$ by hypothesis. Those containing $a$ are in bijection with subsets of $A \setminus \{a\}$, so there are also $2^{n}$ of them. Total: $2^{n} + 2^{n} = 2^{n+1}$.

**Question 6.** Explain why the power set of $\mathbb{N}$ cannot be put into bijection with $\mathbb{N}$.

> **Answer.** Cantor's theorem: for any set $X$, there is no surjection $X \to \mathcal{P}(X)$. The proof is by diagonalization. Suppose $f: \mathbb{N} \to \mathcal{P}(\mathbb{N})$ is a surjection. Define $D = \{n \in \mathbb{N} : n \notin f(n)\}$. Then $D \in \mathcal{P}(\mathbb{N})$, so $D = f(k)$ for some $k$. If $k \in D$, then by definition $k \notin f(k) = D$, contradiction. If $k \notin D$, then $k \notin f(k)$, so $k \in D$, contradiction. Hence no such surjection exists.

### Induction and contradiction

**Question 7.** Prove by induction that every finite nonempty totally ordered set has a least element.

> **Answer.** Base case: a one-element set has that element as least. Inductive step: suppose every totally ordered set of size $n$ has a least element. Let $(S, \leq)$ have size $n + 1$. Pick $a \in S$. The set $S \setminus \{a\}$ has size $n$, so it has a least element $b$. If $a \leq b$, then $a$ is the least element of $S$; otherwise $b$ is. Hence $S$ has a least element.

**Question 8.** Prove that $\sqrt{2}$ is irrational.

> **Answer.** Suppose $\sqrt{2} = p/q$ in lowest terms, with $p, q \in \mathbb{Z}$ and $q \neq 0$. Then $2q^{2} = p^{2}$, so $p^{2}$ is even, hence $p$ is even. Write $p = 2k$. Then $2q^{2} = 4k^{2}$, so $q^{2} = 2k^{2}$, hence $q^{2}$ is even and $q$ is even. But then $p$ and $q$ share a factor of 2, contradicting lowest terms. Hence no such representation exists.

## Scoring your diagnostic

- If you answered 7--8 questions confidently and correctly, you have the background for the continuous route.
- If you answered 5--6 correctly, read the relevant repair sections below, then proceed.
- If you answered fewer than 5 correctly, work through the repair routes before the main chapters. The text will still be accessible, but the pace will be more comfortable with the gaps filled.

## Repair routes

### Logical syntax and proof

- *Math Atlas: Discrete Mathematics and Proof* --- propositional and first-order logic, proof strategies, and basic combinatorics.
- *Math Atlas: Logic and Foundations: Definitions, Theorems, and Proof Boundaries* (this book), "Reference desk A --- levels of language" --- a self-contained review of syntax, semantics, and the distinction between object language and metalanguage.

### Set theory and functions

- *Math Atlas: Discrete Mathematics and Proof* --- sets, functions, relations, and cardinality.
- *Math Atlas: Algebra: Patterns and Structure* --- a proof-focused development of algebraic structures that assumes the set-theoretic basics.

### Induction and proof techniques

- *Math Atlas: Discrete Mathematics and Proof* --- induction, recursion, and combinatorial proof.
- *Math Atlas: Number, Operations, and Early Algebra* --- if the algebraic manipulations in the diagnostic felt unfamiliar.

## What this book does not assume

- Advanced set theory: ordinals, cardinals, and the cumulative hierarchy are introduced from first principles in "Set-Theoretic Topology" and "Forcing".
- Category theory: basic definitions appear in "Homotopy Type Theory" and Chapter 16, but no prior exposure is required.
- Programming: algorithms are described in prose; no prior programming experience is required.
- Prior exposure to forcing or large cardinals: "Forcing" and "Large Cardinals" introduce the machinery from first principles, building on "Model Theory".

## Access and reading support

- Use the notation guide for repeated reference; it is designed for lookup, not one-time reading.
- Work the exercises before reading solutions; the solutions show reasoning, not only answers.
- If a chapter feels syntactically dense, expand the compressed sentences into object-type, operation, quantifier, and convention before concluding that the mathematics is inaccessible.
