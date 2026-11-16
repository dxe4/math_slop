var e=`---
parent_id: book-finite-algebra-computation
chapter_id: galois-theory
title: "Galois Theory"
level: undergraduate
estimated_minutes: 220
license: CC BY-SA 4.0
---

# Galois Theory

## Why study field extensions?

Polynomial equations of degree at most four have general radical formulas. For degree five and higher, no such formula exists in general. Galois theory explains why: the solvability of a polynomial is governed by the structure of a certain finite group, its **Galois group**. This chapter develops the core concepts---field extensions, splitting fields, and the Galois correspondence---with an eye toward computation and explicit examples.

## Field extensions and degree

A **field extension** $K/F$ is a pair of fields with $F \\subseteq K$. The **degree** $[K : F]$ is the dimension of $K$ as a vector space over $F$. If $[K : F]$ is finite, the extension is **finite**.

**Tower law.** If $F \\subseteq L \\subseteq K$ are fields, then

$$[K : F] = [K : L] \\cdot [L : F].$$

**Proof sketch.** If $\\{a_{i}\\}$ is a basis of $L/F$ and $\\{b_{j}\\}$ is a basis of $K/L$, then $\\{a_{i} b_{j}\\}$ is a basis of $K/F$.

**Worked example.** Compute $[\\mathbb{Q}(\\sqrt{2}, \\sqrt{3}) : \\mathbb{Q}]$.

**Solution.** First, $[\\mathbb{Q}(\\sqrt{2}) : \\mathbb{Q}] = 2$ because $\\sqrt{2}$ is a root of $x^{2} - 2$, which is irreducible over $\\mathbb{Q}$ by the rational root test. Next, $\\sqrt{3} \\notin \\mathbb{Q}(\\sqrt{2})$: if $\\sqrt{3} = a + b\\sqrt{2}$ with $a, b \\in \\mathbb{Q}$, squaring gives $3 = a^{2} + 2b^{2} + 2ab\\sqrt{2}$, forcing $ab = 0$; neither $a^{2} = 3$ nor $2b^{2} = 3$ has rational solutions. Thus $x^{2} - 3$ is irreducible over $\\mathbb{Q}(\\sqrt{2})$, and $[\\mathbb{Q}(\\sqrt{2}, \\sqrt{3}) : \\mathbb{Q}(\\sqrt{2})] = 2$. By the tower law, $[\\mathbb{Q}(\\sqrt{2}, \\sqrt{3}) : \\mathbb{Q}] = 2 \\cdot 2 = 4$.

## Algebraic and transcendental elements

An element $\\alpha \\in K$ is **algebraic** over $F$ if there exists a non-zero polynomial $f(x) \\in F[x]$ with $f(\\alpha) = 0$. Otherwise $\\alpha$ is **transcendental** over $F$.

The **minimal polynomial** of an algebraic element $\\alpha$ is the monic polynomial $m_{\\alpha}(x) \\in F[x]$ of least degree with $m_{\\alpha}(\\alpha) = 0$. It is irreducible over $F$, and $F(\\alpha) \\cong F[x]/(m_{\\alpha})$.

## Splitting fields

A **splitting field** of $f(x) \\in F[x]$ is an extension $K/F$ in which $f$ factors completely into linear factors and $K$ is generated over $F$ by the roots of $f$.

**Example.** The splitting field of $x^{2} - 2$ over $\\mathbb{Q}$ is $\\mathbb{Q}(\\sqrt{2})$. The splitting field of $x^{3} - 2$ over $\\mathbb{Q}$ is $\\mathbb{Q}(\\sqrt[3]{2}, \\omega)$, where $\\omega = e^{2\\pi i/3}$ is a primitive cube root of unity. The degree is $6$ because $x^{3} - 2$ is irreducible (Eisenstein at $p = 2$) and the quotient by $x^{2} + x + 1$ adjoins $\\omega$.

## The Galois group

For a field extension $K/F$, the **Galois group** $\\operatorname{Gal}(K/F)$ is the group of field automorphisms of $K$ that fix every element of $F$.

An extension $K/F$ is **Galois** if it is normal and separable. For finite extensions of characteristic zero (or perfect fields), separability is automatic, and normality means $K$ is the splitting field of some polynomial over $F$.

**Theorem 15.1 (Fundamental of Galois theory).** Let $K/F$ be a finite Galois extension with Galois group $G = \\operatorname{Gal}(K/F)$. There is an inclusion-reversing bijection between subgroups $H \\subseteq G$ and intermediate fields $F \\subseteq L \\subseteq K$, given by

$$H \\mapsto K^{H} = \\{\\alpha \\in K : \\sigma(\\alpha) = \\alpha \\text{ for all } \\sigma \\in H\\}$$

and

$$L \\mapsto \\operatorname{Gal}(K/L).$$

Moreover, $[K : L] = |\\operatorname{Gal}(K/L)|$ and $[L : F] = [G : \\operatorname{Gal}(K/L)]$.

**Worked example.** Let $K = \\mathbb{Q}(\\sqrt{2}, \\sqrt{3})$. The Galois group $\\operatorname{Gal}(K/\\mathbb{Q})$ has order $4$. It consists of the identity, $\\sigma_{2} : \\sqrt{2} \\mapsto -\\sqrt{2}$, $\\sigma_{3} : \\sqrt{3} \\mapsto -\\sqrt{3}$, and $\\sigma_{6} : \\sqrt{2} \\mapsto -\\sqrt{2}, \\sqrt{3} \\mapsto -\\sqrt{3}$. The subgroup lattice matches the intermediate field lattice: $\\langle \\sigma_{2} \\rangle$ fixes $\\mathbb{Q}(\\sqrt{3})$, $\\langle \\sigma_{3} \\rangle$ fixes $\\mathbb{Q}(\\sqrt{2})$, and $\\langle \\sigma_{6} \\rangle$ fixes $\\mathbb{Q}(\\sqrt{6})$.

## Solvability by radicals

A finite group $G$ is **solvable** if there exists a chain

$$G = G_{0} \\supseteq G_{1} \\supseteq \\dots \\supseteq G_{k} = \\{e\\}$$

with each $G_{i+1}$ normal in $G_{i}$ and $G_{i} / G_{i+1}$ abelian.

**Theorem 15.2 (Galois).** A polynomial $f(x) \\in \\mathbb{Q}[x]$ is solvable by radicals if and only if its Galois group (over $\\mathbb{Q}$) is solvable.

The symmetric group $S_{5}$ is not solvable (its only non-trivial proper normal subgroup is $A_{5}$, which is simple and non-abelian). Therefore any irreducible quintic with Galois group $S_{5}$, such as $x^{5} - x + 1$ (verified by Dedekind's criterion modulo small primes), is not solvable by radicals.

## Common errors

- **Assuming every finite extension is Galois.** $\\mathbb{Q}(\\sqrt[3]{2})/\\mathbb{Q}$ is not Galois because it does not contain the other roots of $x^{3} - 2$.
- **Confusing the degree of the extension with the order of the Galois group.** They coincide only for Galois extensions. For $\\mathbb{Q}(\\sqrt[3]{2})/\\mathbb{Q}$, the degree is $3$ but $|\\operatorname{Gal}| = 1$.
- **Applying Galois theory in positive characteristic without checking separability.** Inseparable extensions can have smaller Galois groups than the degree would suggest.

## Practice exercises

### Exercise 1

Prove that $\\mathbb{Q}(\\sqrt{2} + \\sqrt{3}) = \\mathbb{Q}(\\sqrt{2}, \\sqrt{3})$.

**Solution.** Let $\\alpha = \\sqrt{2} + \\sqrt{3}$. Then $\\alpha^{2} = 5 + 2\\sqrt{6}$, so $\\sqrt{6} = (\\alpha^{2} - 5)/2 \\in \\mathbb{Q}(\\alpha)$. Also $\\alpha \\cdot \\sqrt{6} = 2\\sqrt{3} + 3\\sqrt{2}$, and subtracting $2\\alpha = 2\\sqrt{2} + 2\\sqrt{3}$ gives $\\sqrt{2} = \\alpha \\cdot \\sqrt{6} - 2\\alpha \\in \\mathbb{Q}(\\alpha)$. Similarly $\\sqrt{3} \\in \\mathbb{Q}(\\alpha)$. Thus $\\mathbb{Q}(\\sqrt{2}, \\sqrt{3}) \\subseteq \\mathbb{Q}(\\alpha)$. The reverse inclusion is immediate, so the fields are equal.

### Exercise 2

Find the Galois group of $x^{4} - 2$ over $\\mathbb{Q}$.

**Solution.** The roots are $\\pm \\sqrt[4]{2}$ and $\\pm i\\sqrt[4]{2}$. The splitting field is $\\mathbb{Q}(\\sqrt[4]{2}, i)$. We have $[\\mathbb{Q}(\\sqrt[4]{2}) : \\mathbb{Q}] = 4$ and $i \\notin \\mathbb{Q}(\\sqrt[4]{2})$ (the latter is real), so $[K : \\mathbb{Q}] = 8$. The Galois group has order $8$. An automorphism is determined by $\\sqrt[4]{2} \\mapsto \\zeta \\sqrt[4]{2}$ (where $\\zeta \\in \\{\\pm 1, \\pm i\\}$) and $i \\mapsto \\pm i$. The group is the dihedral group $D_{4}$ of order $8$.

### Exercise 3

Show that $x^{5} - 4x + 2$ is irreducible over $\\mathbb{Q}$ and has Galois group $S_{5}$.

**Solution.** Eisenstein at $2$ proves irreducibility over $\\mathbb{Q}$. Modulo $3$, the polynomial $x^5-x-1$ is irreducible, so the standard Dedekind factor-cycle theorem supplies a $5$-cycle in the Galois group. The imported theorem is recorded precisely in Brzeziński, *Galois Theory Through Exercises*, Theorem 15.4(b); the bibliography gives the stable edition record. Modulo $7$,

$x^5-4x+2=(x^2-3x-1)(x^3+3x^2+3x-2)$,

and both factors are irreducible over $\\mathbb{F}_7$. The factorization is squarefree, so it supplies an element of cycle type $(2,3)$; its cube is a transposition. If $\\sigma$ is the $5$-cycle and $\\tau$ this transposition, the conjugates $\\sigma^j\\tau\\sigma^{-j}$ are transpositions whose edges form a connected graph on five vertices. Transpositions along the edges of a connected graph generate $S_5$. Thus the Galois group is $S_5$, so the polynomial is not solvable by radicals. The factor-cycle theorem used here is a standard imported result and requires the displayed reductions to be squarefree.

### Exercise 4

Let $K = \\mathbb{F}_{p^{n}}$ be the finite field with $p^{n}$ elements. Show that $\\operatorname{Gal}(\\mathbb{F}_{p^{n}}/\\mathbb{F}_{p})$ is cyclic of order $n$, generated by the Frobenius automorphism $\\sigma(a) = a^{p}$.

**Solution.** The Frobenius map is a field automorphism because $(a + b)^{p} = a^{p} + b^{p}$ in characteristic $p$ and $(ab)^{p} = a^{p}b^{p}$. It fixes $\\mathbb{F}_{p}$ because $a^{p} = a$ for all $a \\in \\mathbb{F}_{p}$ by Fermat's little theorem. The multiplicative group $\\mathbb{F}_{p^{n}}^{\\times}$ is cyclic of order $p^{n} - 1$; if $\\sigma^{k} = \\operatorname{id}$, then $a^{p^{k}} = a$ for all $a$, so $p^{k} \\equiv 1 \\pmod{p^{n} - 1}$, which first occurs at $k = n$. Thus $\\sigma$ has order $n$, and since $[\\mathbb{F}_{p^{n}} : \\mathbb{F}_{p}] = n$, the Galois group is exactly $\\langle \\sigma \\rangle \\cong C_{n}$.

## Looking backward and forward

Galois theory connects field arithmetic to group structure through the fundamental correspondence. In **Representation Theory of $S_{n}$** we study the symmetric group directly, using the same combinatorial tools that appeared in the analysis of splitting fields and permutation actions. The character theory of $S_{n}$ will give us a powerful way to decompose group actions into irreducible constituents.
`;export{e as default};