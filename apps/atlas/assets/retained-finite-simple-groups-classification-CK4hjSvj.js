var e=`---
parent_id: book-finite-algebra-computation
chapter_id: chapter-12
title: "Finite Simple Groups and Classification"
level: undergraduate
estimated_minutes: 210
license: CC BY-SA 4.0
---

# Finite Simple Groups and Classification

## The building blocks of finite groups

Just as prime numbers are the indivisible units of arithmetic, **simple groups** are the indivisible units of group theory. A nontrivial group $G$ is **simple** if its only normal subgroups are $\\{e\\}$ and $G$ itself. Every finite group can be built from simple groups via extensions, and the **classification of finite simple groups**---one of the great achievements of twentieth-century mathematics---provides a complete list.

## Composition series and the Jordan-Holder theorem

A **composition series** of a finite group $G$ is a chain

$$G = G_{0} \\supset G_{1} \\supset \\dots \\supset G_{k} = \\{e\\}$$

where each $G_{i+1}$ is normal in $G_{i}$ and the factor $G_{i}/G_{i+1}$ is simple. These factors are the **composition factors** of $G$.

**Theorem 17.1 (Jordan-Holder).** Any two composition series of a finite group have the same length and the same composition factors up to permutation and isomorphism.

This theorem justifies the analogy with prime factorisation: the composition factors are uniquely determined, even though the series itself is not.

**Worked example.** Find the composition series of $S_{4}$.

**Solution.** $S_{4} \\supset A_{4} \\supset V_{4} \\supset \\langle (12)(34) \\rangle \\supset \\{e\\}$. The factors are $S_{4}/A_{4} \\cong C_{2}$, $A_{4}/V_{4} \\cong C_{3}$, $V_{4}/\\langle (12)(34) \\rangle \\cong C_{2}$, and $\\langle (12)(34) \\rangle/\\{e\\} \\cong C_{2}$. All factors are simple (prime cyclic groups).

## The classification theorem

Every finite simple group is isomorphic to one of the following:

1. A cyclic group $C_{p}$ of prime order.
2. An alternating group $A_{n}$ for $n \\geq 5$.
3. A simple group of Lie type (classical or exceptional).
4. One of $26$ **sporadic groups**.

This is the imported classification theorem. Wilson, *The Finite Simple Groups*, Introduction, Section 1.2 within pp. 1--10, states the classification and explains its many-paper proof boundary; the book does not reproduce that proof.

The smallest non-abelian simple group is $A_{5}$, of order $60$. The largest sporadic group is the **Monster**, of order approximately $8 \\times 10^{53}$.

## Alternating groups are simple

**Theorem 17.2.** $A_{n}$ is simple for all $n \\geq 5$.

This standard theorem is imported here. Dummit and Foote, *Abstract Algebra*, 3rd ed., Section 4.6, Theorem 24 beginning on p. 149, gives a complete proof. The proof chooses a nonidentity element of a normal subgroup with minimal support and uses carefully chosen commutators with $3$-cycles to reduce the support unless the subgroup already contains a $3$-cycle. Normality then supplies every conjugate $3$-cycle, and $3$-cycles generate $A_n$. Conjugation alone cannot change cycle type, so the commutator/minimal-support step is essential.

This result explains why $A_{5}$ is the smallest non-abelian simple group: $A_{4}$ has the normal Klein four-subgroup $V_{4}$, and $A_{3} \\cong C_{3}$ is abelian.

## Groups of Lie type

Simple groups of Lie type are analogues of Lie groups over finite fields. They include:
- **Classical groups:** projective special linear $PSL(n, q)$, projective symplectic $PSp(2n, q)$, projective orthogonal $P\\Omega^{\\pm}(2n, q)$, and projective unitary $PSU(n, q)$.
- **Exceptional groups:** $G_{2}(q)$, $F_{4}(q)$, $E_{6}(q)$, $E_{7}(q)$, $E_{8}(q)$, and twisted versions.

**Example.** $PSL(2, 7)$ has order $168$. It is the automorphism group of the Fano plane and appears as the Galois group of certain septic polynomials.

## The sporadic groups

The $26$ sporadic groups do not belong to infinite families. Five of them are the **Mathieu groups** $M_{11}$, $M_{12}$, $M_{22}$, $M_{23}$, $M_{24}$, which are multiply transitive permutation groups. The largest is the **Monster** $\\mathbb{M}$. This chapter uses only its place in the classification and does not assert a compressed prediction-or-construction priority history.

## Computational aspects

Given generators for a permutation group $G$ of degree $n$, Luks proved that generators for the subgroups in a composition series, together with permutation representations of the composition factors, can be found in time polynomial in the input size. The exact source is Luks, “Computing the composition factors of a permutation group in polynomial time,” *Combinatorica* 7(1) (1987), 87--99. Matrix-group recognition over finite fields is a separate research program whose algorithms and complexity models are beyond this chapter; no parallel complexity theorem is asserted here.

**Worked example.** Use Sylow theory to show that no group of order $30$ is simple.

**Solution.** Let $|G| = 30 = 2 \\cdot 3 \\cdot 5$. By Sylow's theorems, $n_{5} \\equiv 1 \\pmod{5}$ and $n_{5} \\mid 6$, so $n_{5} \\in \\{1, 6\\}$. If $n_{5} = 1$, the Sylow $5$-subgroup is normal. If $n_{5} = 6$, there are $6 \\cdot 4 = 24$ elements of order $5$. Then $n_{3} \\equiv 1 \\pmod{3}$ and $n_{3} \\mid 10$, so $n_{3} \\in \\{1, 10\\}$. If $n_{3} = 10$, there are $10 \\cdot 2 = 20$ elements of order $3$, giving $44$ elements total, contradicting $|G| = 30$. Thus either $n_{5} = 1$ or $n_{3} = 1$, and $G$ is not simple.

## Common errors

- **Confusing simplicity with being generated by elements of a certain type.** $A_{n}$ is generated by $3$-cycles, but many groups generated by $3$-cycles are not simple.
- **Assuming every simple group is non-abelian.** Cyclic groups of prime order are simple and abelian.
- **Applying the classification prematurely.** The classification is a theorem about existence and uniqueness; proving that a given group is simple still requires argument.

## Practice exercises

### Exercise 1

Prove that no group of order $p^{2}q$ with $p,q$ distinct primes is simple, using Burnside's $p^a q^b$ theorem.

**Solution.** Burnside's $p^a q^b$ theorem says that every finite group whose order is divisible by at most two primes is solvable. Here $|G|=p^2q$, so $G$ is solvable. A nontrivial finite simple solvable group must be cyclic of prime order: its final nontrivial derived subgroup is abelian and characteristic, hence normal. Since $p^2q$ is not prime, $G$ cannot be simple. Burnside's theorem is a substantial imported result; the original 1904 paper proves it on pp. 388--392 and is identified by DOI in the bibliography. The Sylow constraints in the root overview alone do not prove every ordering of the two primes.

### Exercise 2

Show that $PSL(2, 5) \\cong A_{5}$.

**Solution.** $|PSL(2,5)|=5(25-1)/\\gcd(2,4)=60$, and the standard simplicity theorem for $PSL(2,q)$ outside its small exceptions shows it is simple. Taylor, *The Geometry of the Classical Groups*, Theorem 4.5, p. 23, is the source for this first import. We then use Wodzicki, *Introduction to Algebra*, Theorem 6.8, pp. 57--59, for the separate theorem that every simple group of order $60$ is isomorphic to $A_5$. Therefore $PSL(2,5)\\cong A_5$. Equality of order and simplicity alone would not identify the group without the uniqueness theorem.

### Exercise 3

Find the composition factors of $S_{5}$.

**Solution.** $S_{5} \\supset A_{5} \\supset \\{e\\}$. The factors are $C_{2}$ and $A_{5}$. Since $A_{5}$ is simple, this is a composition series.

### Exercise 4

For $n\\ge1$, use the class equation to prove that a group of order $p^{n}$ ($p$ prime) has a non-trivial centre.

**Solution.** The class equation is $|G| = |Z(G)| + \\sum [G : C_{G}(x_{i})]$ where the sum runs over non-central conjugacy classes. Each $[G : C_{G}(x_{i})]$ is a power of $p$ greater than $1$, hence divisible by $p$. Thus $|Z(G)| = |G| - \\sum [G : C_{G}(x_{i})]$ is divisible by $p$. Since $e \\in Z(G)$, we have $|Z(G)| \\geq p > 1$.

## Looking backward and forward

The classification of finite simple groups is the summit of finite group theory. In **Computational Algebraic Geometry** we shift from groups to polynomial ideals, using Gröbner bases to solve systems of equations and compute elimination ideals. The same computational discipline---represent objects explicitly, verify invariants exhaustively---carries over.
`;export{e as default};