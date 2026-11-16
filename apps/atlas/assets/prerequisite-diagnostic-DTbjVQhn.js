var e=`---
parent_id: book-finite-algebra-computation
matter_id: prerequisite-diagnostic
title: "Prerequisite Diagnostic"
license: CC BY-SA 4.0
---

# Prerequisite Diagnostic

This book assumes three kinds of background: basic linear algebra, proof techniques and mathematical reasoning, and familiarity with modular arithmetic and polynomials. The diagnostic below separates these skills and gives repair routes. It is not an exam; it is a self-check to guide efficient reading.

## What background is assumed

1. **Linear algebra.** Vector spaces, subspaces, bases, dimension, linear maps, matrices, determinants, and eigenvalues. You should be comfortable reading $\\mathbb{F}^{n}$ as a vector space over a field $\\mathbb{F}$, computing the rank of a matrix, and stating what it means for a linear map to be injective.
2. **Proof techniques.** Direct proof, proof by contradiction, proof by induction, and basic set-theoretic reasoning. You should be able to prove that the composition of two bijections is a bijection, and that every finite integral domain is a field.
3. **Modular arithmetic and polynomials.** The ring $\\mathbb{Z}/n\\mathbb{Z}$, congruences, the Euclidean algorithm, and polynomial rings over a field. You should be able to compute $\\gcd(a, b)$ in $\\mathbb{Z}$, perform polynomial long division in $\\mathbb{F}[x]$, and find the multiplicative inverse of a unit modulo $n$.

## Self-diagnostic questions with answers

### Linear algebra

**Question 1.** Let $V$ be a vector space over $\\mathbb{Q}$ with basis $\\{v_{1}, v_{2}, v_{3}\\}$. Define $T: V \\to V$ by $T(v_{1}) = v_{2}$, $T(v_{2}) = v_{3}$, $T(v_{3}) = v_{1}$. Write the matrix of $T$ in this basis and compute its determinant.

> **Answer.** The matrix is
> $$A = \\begin{pmatrix} 0 & 0 & 1 \\\\ 1 & 0 & 0 \\\\ 0 & 1 & 0 \\end{pmatrix}.$$
> The determinant is $\\det(A) = 0 \\cdot (0 \\cdot 0 - 0 \\cdot 1) - 0 \\cdot (1 \\cdot 0 - 0 \\cdot 0) + 1 \\cdot (1 \\cdot 1 - 0 \\cdot 0) = 1$.

**Question 2.** Prove that if $W_{1}$ and $W_{2}$ are subspaces of a finite-dimensional vector space $V$, then
> $$\\dim(W_{1} + W_{2}) = \\dim(W_{1}) + \\dim(W_{2}) - \\dim(W_{1} \\cap W_{2}).$$

> **Answer.** Let $\\{u_{1}, \\dots, u_{k}\\}$ be a basis of $W_{1} \\cap W_{2}$. Extend it to a basis $\\{u_{1}, \\dots, u_{k}, v_{1}, \\dots, v_{m}\\}$ of $W_{1}$ and to a basis $\\{u_{1}, \\dots, u_{k}, w_{1}, \\dots, w_{n}\\}$ of $W_{2}$. The union $\\{u_{i}, v_{j}, w_{l}\\}$ spans $W_{1} + W_{2}$. It is linearly independent: if $\\sum a_{i} u_{i} + \\sum b_{j} v_{j} + \\sum c_{l} w_{l} = 0$, then $\\sum c_{l} w_{l} = -\\sum a_{i} u_{i} - \\sum b_{j} v_{j} \\in W_{1}$, so $\\sum c_{l} w_{l} \\in W_{1} \\cap W_{2}$ and all $c_{l} = 0$. Similarly all $b_{j} = 0$ and all $a_{i} = 0$. Hence $\\dim(W_{1} + W_{2}) = k + m + n = (k + m) + (k + n) - k$.

**Question 3.** State the rank-nullity theorem and use it to show that a linear map $T: V \\to W$ with $\\dim(V) > \\dim(W)$ cannot be injective.

> **Answer.** The rank-nullity theorem states $\\dim(V) = \\dim(\\ker(T)) + \\dim(\\operatorname{im}(T))$. Since $\\operatorname{im}(T) \\subseteq W$, we have $\\dim(\\operatorname{im}(T)) \\leq \\dim(W) < \\dim(V)$. Thus $\\dim(\\ker(T)) = \\dim(V) - \\dim(\\operatorname{im}(T)) > 0$, so $\\ker(T) \\neq \\{0\\}$ and $T$ is not injective.

### Proof techniques

**Question 4.** Prove by induction that for every integer $n \\geq 1$, the number of subsets of $\\{1, 2, \\dots, n\\}$ is $2^{n}$.

> **Answer.** Base case $n = 1$: the subsets are $\\emptyset$ and $\\{1\\}$, so there are $2 = 2^{1}$. Inductive step: assume true for $n$. For $n + 1$, every subset of $\\{1, \\dots, n\\}$ is a subset of $\\{1, \\dots, n + 1\\}$ not containing $n + 1$, giving $2^{n}$ subsets. Every subset containing $n + 1$ is of the form $S \\cup \\{n + 1\\}$ for $S \\subseteq \\{1, \\dots, n\\}$, giving another $2^{n}$ subsets. Total: $2^{n} + 2^{n} = 2^{n+1}$.

**Question 5.** Prove that every finite integral domain is a field.

> **Answer.** Let $R$ be a finite integral domain and $a \\in R$ with $a \\neq 0$. The map $\\mu_{a}: R \\to R$ given by $\\mu_{a}(x) = ax$ is injective because $ax = ay$ implies $a(x - y) = 0$, so $x = y$ by the cancellation law in an integral domain. Since $R$ is finite, $\\mu_{a}$ is also surjective. Hence there exists $b \\in R$ with $ab = 1$, so $a$ is a unit. Every non-zero element is a unit; therefore $R$ is a field.

**Question 6.** Give a proof by contradiction that $\\sqrt{2}$ is irrational.

> **Answer.** Suppose $\\sqrt{2} = p/q$ in lowest terms with $p, q \\in \\mathbb{Z}$ and $q \\neq 0$. Then $2q^{2} = p^{2}$, so $p^{2}$ is even and $p$ is even. Write $p = 2k$. Then $2q^{2} = 4k^{2}$, so $q^{2} = 2k^{2}$ and $q$ is even. But then $p$ and $q$ share a factor of $2$, contradicting lowest terms. Hence no such representation exists.

### Modular arithmetic and polynomials

**Question 7.** Compute the multiplicative inverse of $7$ in $\\mathbb{Z}/20\\mathbb{Z}$.

> **Answer.** Use the extended Euclidean algorithm: $20 = 2 \\cdot 7 + 6$, $7 = 1 \\cdot 6 + 1$, $6 = 6 \\cdot 1 + 0$. Back-substitute: $1 = 7 - 1 \\cdot 6 = 7 - 1 \\cdot (20 - 2 \\cdot 7) = 3 \\cdot 7 - 1 \\cdot 20$. Thus $3 \\cdot 7 \\equiv 1 \\pmod{20}$, so the inverse of $7$ is $3$.

**Question 8.** In $\\mathbb{F}_{5}[x]$, divide $f(x) = x^{3} + 2x^{2} + 3x + 4$ by $g(x) = x + 1$. Verify that $f = q \\cdot g + r$ with $\\deg(r) < \\deg(g)$.

> **Answer.** Over $\\mathbb{F}_{5}$, the leading term of $f$ is $x^{3}$ and of $g$ is $x$, so the first term of $q$ is $x^{2}$. Compute $x^{2} \\cdot g = x^{3} + x^{2}$. Subtract from $f$: $(x^{3} + 2x^{2}) - (x^{3} + x^{2}) = x^{2}$. Bring down $3x + 4$ to get $x^{2} + 3x + 4$. Next term of $q$ is $x$; $x \\cdot g = x^{2} + x$; subtract to get $2x + 4$. Next term of $q$ is $2$; $2 \\cdot g = 2x + 2$; subtract to get $2$. Thus $q(x) = x^{2} + x + 2$ and $r(x) = 2$. Check: $(x^{2} + x + 2)(x + 1) + 2 = x^{3} + 2x^{2} + 3x + 4 = f(x)$.

**Question 9.** Find all solutions to $x^{2} \\equiv 1 \\pmod{8}$.

> **Answer.** Test $x = 0, 1, 2, 3, 4, 5, 6, 7$. We have $0^{2} = 0$, $1^{2} = 1$, $2^{2} = 4$, $3^{2} = 9 \\equiv 1$, $4^{2} = 16 \\equiv 0$, $5^{2} = 25 \\equiv 1$, $6^{2} = 36 \\equiv 4$, $7^{2} = 49 \\equiv 1$. The solutions are $x \\equiv 1, 3, 5, 7 \\pmod{8}$.

## Scoring your diagnostic

- If you answered 8--9 questions confidently and correctly, you have the background for the continuous route.
- If you answered 6--7 correctly, read the relevant repair sections below, then proceed.
- If you answered fewer than 6 correctly, work through the repair routes before the main chapters. The text will still be accessible, but the pace will be more comfortable with the gaps filled.

## Repair routes

### Linear algebra

- *Math Atlas: Linear Algebra* --- vector spaces, linear maps, determinants, eigenvalues, and canonical forms.
- *Math Atlas: Algebra: Patterns and Structure* --- a proof-focused development of algebraic structures that assumes the linear-algebraic basics.

### Proof techniques

- *Math Atlas: Discrete Mathematics and Proof* --- induction, contradiction, sets, functions, relations, and combinatorial proof.
- *Math Atlas: Logic and Foundations: Definitions, Theorems, and Proof Boundaries* --- a self-contained review of proof structure and hypothesis management.

### Modular arithmetic and polynomials

- *Math Atlas: Number, Operations, and Early Algebra* --- place value, operations, and part-whole structure.
- *Math Atlas: Algebra: Patterns and Structure* --- polynomial rings, factorization, and the Euclidean algorithm.

## What this book does not assume

- Advanced group theory: the root overview states the Sylow constraints used as search filters. Later chapters also import standard results such as Burnside's $p^aq^b$ theorem, simplicity of $A_n$, and character completeness, with those boundaries labelled where used.
- Programming: algorithms are described in pseudocode; no prior programming experience is required, though a willingness to trace explicit steps is essential.
- Prior exposure to Gröbner bases or algebraic geometry: "Computational Algebraic Geometry" introduces the main definitions and Buchberger workflow, while importing foundational theorems such as Hilbert's Nullstellensatz.
- Prior exposure to coding theory or cryptography: "Algebraic Coding Theory" and "Cryptography" develop the necessary finite-field and ring theory before applying it.

## Access and reading support

- Use the notation guide for repeated reference; it is designed for lookup, not one-time reading.
- Work the exercises before reading solutions; the solutions show reasoning, not only answers.
- If a chapter feels syntactically dense, expand the compressed sentences into object-type, operation, quantifier, and convention before concluding that the mathematics is inaccessible.
`;export{e as default};