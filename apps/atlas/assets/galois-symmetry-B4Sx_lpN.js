var e=`---
id: deep-dive-galois-symmetry
title: "Galois Theory: Symmetries of Polynomial Roots"
license: CC BY-SA 4.0
---

# Galois Theory: Symmetries of Polynomial Roots

Before reading: [Polynomial Rings, Irreducibility, and Factorization](/resources/library:book-algebra-patterns-structure:polynomial-rings-factorization/), [Bases, Dimension, and Coordinate Isomorphisms](/resources/library:book-linear-algebra-structure-proofs:basis-dimension-coordinates/). The focused continuation is [Fields and the tower law](/resources/library:deep-dive-galois-fields-tower-law/); original notes remain with this retained reading.

This earlier manuscript remains available with its original reading identity and headings. The current short orientation path is [Fields and the tower law](/articles/galois-fields-tower-law/), [Automorphism groups](/articles/galois-automorphism-groups/) and [The fundamental theorem](/articles/galois-fundamental-theorem/). Its cubic, Frobenius and fixed-field arguments are developed in the latter two articles with staged exercise help; existing notes on this longer source remain attached here.

The equation $x^{2}-2=0$ has two roots, $\\sqrt{2}$ and $-\\sqrt{2}$. Swapping them preserves every rational arithmetic relation between them. For a general polynomial, which permutations of the roots preserve all such relations? Galois theory turns that symmetry group into information about factorization, intermediate number systems, and solvability by radicals.

**Before reading.** You should know irreducible polynomials, quotient fields, the tower law for field degrees, and basic group actions. We prove the calculations in our examples. We *use* the finite Galois degree theorem and the fundamental subgroup–field correspondence, whose general proofs need more field theory than this article develops. Later statements about radicals and general finite fields are identified as imported theorems.

## Fields, extensions, and automorphisms

A **field** is a number system where addition, subtraction, multiplication, and division by nonzero elements are possible. Familiar examples include $\\mathbb Q$, $\\mathbb R$, finite fields, and $\\mathbb C$. A **field extension** $L/K$ means that $K$ is a subfield of $L$. Its degree $[L:K]$ is the dimension of $L$ as a vector space over $K$.

Adjoining $\\sqrt{2}$ to the rationals gives

$$\\mathbb Q(\\sqrt{2})=\\{a+b\\sqrt{2}:a,b\\in\\mathbb Q\\}$$

It has degree 2 because $\\{1,\\sqrt{2}\\}$ is a basis. A $K$-automorphism of $L$ is a bijection $\\sigma:L\\to L$ preserving addition and multiplication and fixing every element of $K$. Once $\\sigma(\\sqrt{2})$ is chosen, preservation of equations forces

$$\\sigma(\\sqrt{2})^{2}=\\sigma(2)=2$$

Thus there are exactly two $\\mathbb Q$-automorphisms: the identity and conjugation $a+b\\sqrt{2}\\mapsto a-b\\sqrt{2}$. They form a group under composition.

The **splitting field** of a polynomial over $K$ is the smallest extension containing all its roots, inside a chosen algebraic closure. A finite extension is **Galois** when it is both normal (each irreducible polynomial over $K$ with a root in the extension splits there) and separable (each element has a minimal polynomial with distinct roots). Every finite extension of $\\mathbb Q$ is separable. We use two standard results: the splitting field of a separable polynomial is finite Galois, and for a finite Galois extension $|\\operatorname{Gal}(L/K)|=[L:K]$. A root-image choice is only a *necessary* condition for an automorphism until existence is justified, for example by this degree theorem.

## A first correspondence

For $L=\\mathbb Q(\\sqrt{2})$, the Galois group has two subgroups: the full group and the identity subgroup. The elements fixed by the full group are exactly $\\mathbb Q$, because

$a+b \\sqrt{2}=a-b \\sqrt{2}$ implies $b=0$.

The identity fixes all of $L$. Notice the reversal: a larger subgroup imposes more symmetry and therefore fixes a smaller field.

**Fundamental theorem of Galois theory.** If $L/K$ is a finite Galois extension, intermediate fields $K \\subseteq E \\subseteq L$ correspond bijectively to subgroups $H$ of $\\operatorname{Gal}(L/K)$ by

$E\\mapsto \\operatorname{Gal}(L/E)$ and $H\\mapsto L^{H}=\\{x\\in L:\\sigma(x)=x\\text{ for every }\\sigma\\in H\\}$.

Inclusion reverses, and $[L:E]=|\\operatorname{Gal}(L/E)|$. An intermediate field $E/K$ is Galois exactly when its subgroup is normal; then $\\operatorname{Gal}(E/K)\\cong\\operatorname{Gal}(L/K)/\\operatorname{Gal}(L/E)$. This full correspondence is an **imported theorem**. Its elementary direction is already revealing: automorphisms fixing $E$ form a subgroup; elements fixed by a subgroup are closed under field operations and form a field. Those closure facts alone do not prove that the two constructions are inverse.

## Worked cubic: $x^{3}-2$

Let $\\alpha=\\sqrt[3]{2}$ and let $\\omega$ be a primitive cube root of unity, satisfying $\\omega^{2}+\\omega+1=0$. The three roots are

$\\alpha$, $\\omega \\alpha$, $\\omega^{2} \\alpha$.

The real field $\\mathbb Q(\\alpha)$ does not contain the two nonreal roots, so it is not a splitting field. Its degree is 3 by the rational-root test: $x^{3}-2$ has no rational root and is therefore irreducible.

The splitting field is $L=\\mathbb Q(\\alpha,\\omega)$. Since $\\omega$ solves $T^2+T+1$ and is not in the real field $\\mathbb Q(\\alpha)$, its minimal polynomial over $\\mathbb Q(\\alpha)$ has degree 2. The tower law gives $[L:\\mathbb Q]=[L:\\mathbb Q(\\alpha)][\\mathbb Q(\\alpha):\\mathbb Q]=2\\cdot3=6$. The polynomial $T^3-2$ has distinct roots in characteristic zero, and $L$ is its splitting field. By the **imported finite Galois degree theorem**, $L/\\mathbb Q$ has exactly six automorphisms.

Each such automorphism permutes the three roots. This action is faithful: an automorphism fixing all three fixes $\\alpha$ and $\\omega=(\\omega\\alpha)/\\alpha$, hence fixes the field they generate. We therefore have an injection $\\operatorname{Gal}(L/\\mathbb Q)\\hookrightarrow S_3$. Both groups have six elements, so it is an isomorphism. In particular **all six** root permutations occur. The requirement that images be roots gave an upper bound; the degree theorem supplied the matching lower bound and thus the extension existence that the root-image observation alone cannot supply.

Two generators make the geometry visible. The established isomorphism supplies the 3-cycle $r$, which sends $\\alpha\\mapsto\\omega\\alpha\\mapsto\\omega^2\\alpha\\mapsto\\alpha$; since $\\omega=(\\omega\\alpha)/\\alpha$, it fixes $\\omega$. Let $s$ be complex conjugation; it fixes $\\alpha$, sends $\\omega$ to $\\omega^2$, exchanges the other roots, and has order 2. On the generators of $L$, $srs(\\alpha)=s(\\omega\\alpha)=\\omega^2\\alpha=r^{-1}(\\alpha)$ and $srs(\\omega)=\\omega=r^{-1}(\\omega)$. Thus $srs=r^{-1}$ on all of $L$; these are the familiar generators of $S_3$.

Contrast this with $\\mathbb Q(\\alpha)$ alone. Any $\\mathbb Q$-automorphism must send $\\alpha$ to another root lying in the same field. Only the real root lies there, so the automorphism group is trivial even though the extension has degree 3. This is the counterexample to the tempting but false rule "degree equals number of automorphisms." Equality holds for finite Galois extensions.

## A complete subgroup–field lattice

Consider

$$L=\\mathbb Q(\\sqrt2,\\sqrt3).$$

The field $\\mathbb Q(\\sqrt2)$ is real quadratic, and $\\sqrt3\\notin\\mathbb Q(\\sqrt2)$. Indeed, if $\\sqrt3=a+b\\sqrt2$ for rational $a,b$, squaring forces $2ab=0$; either remaining equation would say that 3 or $3/2$ is a rational square, which it is not. The tower law now gives degree 4, with basis $\\{1,\\sqrt2,\\sqrt3,\\sqrt6\\}$: multiply the basis $\\{1,\\sqrt2\\}$ of $\\mathbb Q(\\sqrt2)/\\mathbb Q$ by the basis $\\{1,\\sqrt3\\}$ of $L/\\mathbb Q(\\sqrt2)$. The four products span by construction; a linear relation can be grouped as $(a+b\\sqrt2)+(c+d\\sqrt2)\\sqrt3=0$, and independence over $\\mathbb Q(\\sqrt2)$ followed by independence of $1,\\sqrt2$ forces all four coefficients to vanish.

The extension is the splitting field of the separable polynomial $(T^2-2)(T^2-3)$, so the imported degree theorem supplies four automorphisms. Each must send $\\sqrt2$ to one of its two signs and independently $\\sqrt3$ to one of its two signs; distinct choices give distinct maps on the generators. There are only four sign choices, so **each choice really occurs**. Let $\\sigma_2$ flip $\\sqrt2$ and fix $\\sqrt3$, and let $\\sigma_3$ flip $\\sqrt3$ and fix $\\sqrt2$. Then

$$\\operatorname{Gal}(L/\\mathbb Q)
=\\{1,\\sigma_2,\\sigma_3,\\sigma_2\\sigma_3\\}
\\cong C_2\\times C_2.$$

Take a general element

$$x=a+b\\sqrt2+c\\sqrt3+d\\sqrt6.$$

The basis makes coefficient comparison legitimate. Applying $\\sigma_2$ gives $a-b\\sqrt2+c\\sqrt3-d\\sqrt6$, so $\\sigma_2(x)=x$ exactly when $b=d=0$. Thus $L^{\\langle\\sigma_2\\rangle}=\\mathbb Q(\\sqrt3)$. Applying $\\sigma_3$ gives $a+b\\sqrt2-c\\sqrt3-d\\sqrt6$, so its fixed elements have $c=d=0$. Applying both flips gives $a-b\\sqrt2-c\\sqrt3+d\\sqrt6$, so its fixed elements have $b=c=0$. Therefore

$$
L^{\\langle\\sigma_3\\rangle}=\\mathbb Q(\\sqrt2),\\qquad
L^{\\langle\\sigma_2\\sigma_3\\rangle}=\\mathbb Q(\\sqrt6).
$$

The full group fixes $\\mathbb Q$, and the identity subgroup fixes all of $L$. This accounts for every subgroup and every intermediate field. The reversal is visible: each order-two subgroup fixes a degree-two field, while the order-four group fixes the degree-one base.

Because the Galois group is abelian, every subgroup is normal. Consequently every intermediate extension here is Galois over $\\mathbb Q$. In a nonabelian example such as the splitting field of $x^3-2$, some subgroups are not normal and their fixed intermediate fields are not normal over the base.

## Finite fields make Frobenius visible

Let $p$ be prime. In characteristic $p$, the binomial theorem gives

$$(x+y)^p=x^p+y^p,$$

because every intermediate binomial coefficient is divisible by $p$. Therefore the Frobenius map

$$\\operatorname{Fr}(x)=x^p$$

is a field homomorphism. A field homomorphism has zero kernel; on a finite field it is therefore bijective. We use the standard **finite-field existence and uniqueness theorem** for $\\mathbb F_{p^n}$ and the fact that its $p^n$ elements are exactly the roots of $T^{p^n}-T$. Thus $\\operatorname{Fr}^n(x)=x^{p^n}=x$ for every $x$. This only proves that the order of $\\operatorname{Fr}$ **divides** $n$. If $\\operatorname{Fr}^d$ were the identity for some $0<d<n$, all $p^n$ elements would be roots of the nonzero polynomial $T^{p^d}-T$, which has degree $p^d<p^n$. The polynomial root bound makes that impossible. Hence $\\operatorname{Fr}$ has exact order $n$.

The extension $\\mathbb F_{p^n}/\\mathbb F_p$ is Galois: it is a splitting field of $T^{p^n}-T$, whose derivative is $-1$, so its roots are distinct. Its degree is $n$, and the imported finite Galois degree theorem says its group has $n$ elements. Consequently the $n$ powers of Frobenius are the entire group:

$$\\operatorname{Gal}(\\mathbb F_{p^n}/\\mathbb F_p)
\\cong C_n.$$

The fixed elements of Frobenius are precisely the roots of $T^p-T$. All $p$ elements of $\\mathbb F_p$ satisfy this equation, and the degree-$p$ polynomial has no more roots, so the fixed field is exactly $\\mathbb F_p$.

For a concrete example, write

$$\\mathbb F_4=\\mathbb F_2[x]/(x^2+x+1),$$

and let $\\alpha$ denote the class of $x$. The defining polynomial has no root in $\\mathbb F_2$, hence is irreducible; its quotient is a field with unique representatives $0,1,\\alpha,\\alpha+1$. The relation $\\alpha^2+\\alpha+1=0$ becomes $\\alpha^2=\\alpha+1$ in characteristic two.

The nontrivial Frobenius automorphism squares elements:

$$\\operatorname{Fr}(\\alpha)=\\alpha^2=\\alpha+1,\\qquad
\\operatorname{Fr}(\\alpha+1)=(\\alpha+1)^2=\\alpha.$$

The full table is

| $x$ | $0$ | $1$ | $\\alpha$ | $\\alpha+1$ |
| --- | --- | --- | --- | --- |
| $\\operatorname{Fr}(x)=x^2$ | $0$ | $1$ | $\\alpha+1$ | $\\alpha$ |

It exchanges the two roots of $T^2+T+1$ and fixes 0 and 1. Applying it twice returns every element, and it is not the identity because it moves $\\alpha$; its exact order is therefore 2. The degree theorem then identifies the group as $\\{1,\\operatorname{Fr}\\}$. This is the finite-field version of conjugation in a quadratic number field.

## Why radicals involve solvable groups

Taking an $n$th root introduces cyclic symmetry once the relevant roots of unity are available. That observation motivates the term **solvable group**: a group admitting a finite series $1=G_0\\trianglelefteq G_1\\trianglelefteq\\cdots\\trianglelefteq G_r=G$, where each $G_i$ is normal in $G_{i+1}$ and every quotient $G_{i+1}/G_i$ is abelian. Deriving the group chain for an arbitrary radical tower requires extra hypotheses and theorems; the observation alone is not a proof of the criterion below.

The **imported solvability-by-radicals theorem** says that a separable polynomial over a characteristic-zero field is solvable by radicals exactly when the Galois group of its splitting field is solvable. Groups $S_2$, $S_3$, and $S_4$ are solvable, consistent with formulas through degree four. The group $S_5$ is not solvable, and the general quintic has Galois group $S_5$; these further facts are also imported. Thus there is no universal radical formula for all quintics. This does not mean no quintic is solvable: $x^{5}-1$, for example, already has roots expressible using a fifth root of unity.

## Detecting group information from arithmetic

Factorization modulo primes can reveal cycle types in the Galois group. An **imported factorization–Frobenius theorem** says that, at a suitable unramified prime not dividing the integer polynomial's leading coefficient and where the polynomial has squarefree reduction, degrees of the irreducible factors give the cycle lengths of a Frobenius element acting on its roots. An irreducible cubic reduction gives a 3-cycle; a linear times irreducible quadratic reduction gives a transposition. The hypotheses matter: an arbitrary reduction with repeated factors does not justify this conclusion.

## Common traps

- A permutation of roots is not automatically a field automorphism; it must preserve every algebraic relation.
- The field generated by one root need not contain all roots.
- A polynomial can have a solvable Galois group without having an attractive radical expression.
- "No quintic formula" concerns a universal formula, not every degree-five polynomial.
- Repeated roots matter over fields of positive characteristic, where separability is not automatic.

## Exercises

1. List the automorphisms of $\\mathbb Q(\\sqrt{5})/\\mathbb Q$ and find their fixed elements.
2. Show that $x^{2}+1$ has splitting field $\\mathbb Q(i)$ and determine its Galois group.
3. Why is $\\mathbb Q(\\sqrt[3]{3})/\\mathbb Q$ not Galois?
4. Find all intermediate fields of $\\mathbb Q(\\sqrt{2},\\sqrt{3})/\\mathbb Q$ suggested by its automorphisms.
5. Show that an automorphism sends a root of a polynomial with rational coefficients to another root.

### Answers

1. Identity and the sign change $\\sqrt{5}\\mapsto-\\sqrt{5}$; only rational elements are fixed by both.
2. The roots are $i,-i$; conjugation exchanges them, so the group is cyclic of order 2.
3. $T^3-3$ has no rational root by the rational-root test, hence is irreducible of degree 3. Its field generated by the real cube root lies in $\\mathbb R$, while the other two roots are nonreal and absent. The irreducible polynomial does not split there, so the extension is not normal and therefore not Galois. Any $\\mathbb Q$-automorphism must keep the real generator at its only root inside this field, so it is the identity.
4. Besides the endpoints, the three quadratic fields are $\\mathbb Q(\\sqrt{2})$, $\\mathbb Q(\\sqrt{3})$, and $\\mathbb Q(\\sqrt{6})$; they correspond to the three order-two subgroups of the Klein four group.
5. If $f(\\alpha)=0$, applying $\\sigma$ gives $0=\\sigma(f(\\alpha))=f(\\sigma(\\alpha))$, because $\\sigma$ fixes the coefficients.

## Further practice with feedback

1. In $L=\\mathbb Q(\\sqrt2,\\sqrt3)$, find the elements fixed by $\\sigma_2\\sigma_3$ directly from the four-term basis.
2. Why can no $\\mathbb Q$-automorphism of $\\mathbb Q(\\sqrt[3]{2})$ send $\\sqrt[3]{2}$ to a nonreal root?
3. Determine the fixed field of complex conjugation in $\\mathbb Q(\\sqrt2,i)$.
4. In $\\mathbb F_8/\\mathbb F_2$, what is the order of Frobenius, and which base-field elements does it fix?
5. A quartic polynomial has four distinct roots and splitting field degree 8 over $\\mathbb Q$. Can its Galois group be $S_4$?

**Answers.** (1) Applying both sign flips to $a+b\\sqrt2+c\\sqrt3+d\\sqrt6$ changes the signs of the middle two terms but leaves $\\sqrt6$ fixed. Thus the fixed field is $\\mathbb Q(\\sqrt6)$. (2) A field automorphism must map elements of the field to elements of the same field. This field is contained in $\\mathbb R$, while the other roots are nonreal. (3) Conjugation fixes $\\sqrt2$ and sends $i$ to $-i$, so its fixed field is $\\mathbb Q(\\sqrt2)$. (4) Its order is 3, and its fixed field is $\\mathbb F_2=\\{0,1\\}$. (5) No. A finite Galois extension has group order equal to its degree, here 8, whereas $|S_4|=24$. The group could be an order-eight subgroup of $S_4$, depending on the polynomial.

If 1 produced $\\mathbb Q$, remember that the product of the two sign changes fixes $\\sqrt6$. If 5 compared only the number of roots with the group order, return to the distinction between the permutation degree and the extension degree.

## Transfer problems: find the invariant, justify the field

**A. Two subgroups of the cubic splitting field.** In $L=\\mathbb Q(\\alpha,\\omega)$ for $\\alpha^3=2$, find the fixed fields of $\\langle r\\rangle$ and $\\langle s\\rangle$. Explain why knowing that $r$ fixes $\\omega$ and $s$ fixes $\\alpha$ is enough to identify the *whole* fixed fields, rather than merely giving subfields of them.

*Hint.* Their subgroup orders are 3 and 2. Apply the imported correspondence degree formula $[L:L^H]=|H|$ and the tower law, then compare with the degrees of $\\mathbb Q(\\omega)$ and $\\mathbb Q(\\alpha)$.

*Solution.* Since $r$ fixes $\\omega$, $\\mathbb Q(\\omega)\\subseteq L^{\\langle r\\rangle}$. The degree formula gives $[L:L^{\\langle r\\rangle}]=3$, hence $[L^{\\langle r\\rangle}:\\mathbb Q]=6/3=2$. But $[\\mathbb Q(\\omega):\\mathbb Q]=2$, so containment and equal finite degree force $L^{\\langle r\\rangle}=\\mathbb Q(\\omega)$. Similarly $s$ fixes $\\alpha$, and $[L:L^{\\langle s\\rangle}]=2$ gives fixed-field degree 3. Since $[\\mathbb Q(\\alpha):\\mathbb Q]=3$, we obtain $L^{\\langle s\\rangle}=\\mathbb Q(\\alpha)$. The latter field is not normal over $\\mathbb Q$, matching the fact that the transposition subgroup $\\langle s\\rangle$ is not normal in $S_3$. The degree comparison, not just the fixed generator, proves equality.

**B. Audit a Frobenius shortcut.** Someone argues that $x^{2^3}=x$ for every $x\\in\\mathbb F_8$, so $x\\mapsto x^2$ has order 3. Identify the missing step and supply it without constructing an explicit multiplication table.

*Hint.* The displayed identity shows an order dividing 3. If the order were 1, how many roots would $T^2-T$ have? The same root-bound argument handles any proper divisor of $n$ in $\\mathbb F_{p^n}$.

*Solution.* The identity only gives $\\operatorname{Fr}^3=1$, so its order might at first be 1 or 3. If it were 1, all eight elements of $\\mathbb F_8$ would solve $T^2-T=0$, contradicting the degree-two root bound. Therefore its order is exactly 3. More generally, if $\\operatorname{Fr}^d=1$ for $0<d<n$, then all $p^n$ elements would solve $T^{p^d}-T=0$, impossible since that polynomial has degree $p^d<p^n$. This is the missing step behind the general exact-order assertion.

## Connections

Galois theory is group action made arithmetic: a group acts faithfully on roots while fixed fields encode invariants. It feeds into finite fields and coding, covering-space theory, algebraic number theory, and the modern study of Galois representations, where arithmetic symmetries act linearly and can be compared with analytic objects.
`;export{e as default};