
# The fundamental theorem

More automorphisms mean more equations for a fixed element to satisfy. Fixed fields therefore reverse subgroup inclusion. For a finite Galois extension, the fundamental theorem strengthens that reversal to a complete correspondence with exact degree formulas.

This **Years 2–3 (L3)** orientation assumes [Fields and the tower law](#/articles/galois-fields-tower-law) and [Automorphism groups](#/articles/galois-automorphism-groups). It adapts the retained [Galois symmetry source](#/articles/galois-symmetry), preserving its direct fixed-field calculations and qualifications. The general correspondence is an explicitly imported input here; its full proof is in the actual [Fundamental Theorem of Galois Theory chapter](#/books/galois-theory/fundamental-theorem-galois-theory).

## A first correspondence

For $L=\mathbb Q(\sqrt{2})$, the Galois group has two subgroups: the full group and the identity subgroup. The elements fixed by the full group are exactly $\mathbb Q$, because

$a+b \sqrt{2}=a-b \sqrt{2}$ implies $b=0$.

The identity fixes all of $L$. Notice the reversal: a larger subgroup imposes more symmetry and therefore fixes a smaller field.

**Fundamental theorem of Galois theory.** If $L/K$ is a finite Galois extension, intermediate fields $K \subseteq E \subseteq L$ correspond bijectively to subgroups $H$ of $\operatorname{Gal}(L/K)$ by

$E\mapsto \operatorname{Gal}(L/E)$ and $H\mapsto L^{H}=\{x\in L:\sigma(x)=x\text{ for every }\sigma\in H\}$.

Inclusion reverses, and $[L:E]=|\operatorname{Gal}(L/E)|$. An intermediate field $E/K$ is Galois exactly when its subgroup is normal; then $\operatorname{Gal}(E/K)\cong\operatorname{Gal}(L/K)/\operatorname{Gal}(L/E)$. This full correspondence is an **imported theorem**. Its elementary direction is already revealing: automorphisms fixing $E$ form a subgroup; elements fixed by a subgroup are closed under field operations and form a field. Those closure facts alone do not prove that the two constructions are inverse.


For clarity, a fixed set is closed under subtraction and multiplication because every acting map preserves those operations. If $a\ne0$ is fixed, then $\sigma(a^{-1})=\sigma(a)^{-1}=a^{-1}$, so inverses are fixed too. Automorphisms fixing an intermediate field contain identity and are closed under composition and inverse. These checks establish the two objects before invoking the theorem that makes the constructions inverse.

## Worked example: a complete subgroup–field lattice

Consider

$$L=\mathbb Q(\sqrt2,\sqrt3).$$

The field $\mathbb Q(\sqrt2)$ is real quadratic, and $\sqrt3\notin\mathbb Q(\sqrt2)$. Indeed, if $\sqrt3=a+b\sqrt2$ for rational $a,b$, squaring forces $2ab=0$; either remaining equation would say that 3 or $3/2$ is a rational square, which it is not. The tower law now gives degree 4, with basis $\{1,\sqrt2,\sqrt3,\sqrt6\}$: multiply the basis $\{1,\sqrt2\}$ of $\mathbb Q(\sqrt2)/\mathbb Q$ by the basis $\{1,\sqrt3\}$ of $L/\mathbb Q(\sqrt2)$. The four products span by construction; a linear relation can be grouped as $(a+b\sqrt2)+(c+d\sqrt2)\sqrt3=0$, and independence over $\mathbb Q(\sqrt2)$ followed by independence of $1,\sqrt2$ forces all four coefficients to vanish.

The extension is the splitting field of the separable polynomial $(T^2-2)(T^2-3)$, so the imported degree theorem supplies four automorphisms. Each must send $\sqrt2$ to one of its two signs and independently $\sqrt3$ to one of its two signs; distinct choices give distinct maps on the generators. There are only four sign choices, so **each choice really occurs**. Let $\sigma_2$ flip $\sqrt2$ and fix $\sqrt3$, and let $\sigma_3$ flip $\sqrt3$ and fix $\sqrt2$. Then

$$\operatorname{Gal}(L/\mathbb Q)
=\{1,\sigma_2,\sigma_3,\sigma_2\sigma_3\}
\cong C_2\times C_2.$$

Take a general element

$$x=a+b\sqrt2+c\sqrt3+d\sqrt6.$$

The basis makes coefficient comparison legitimate. Applying $\sigma_2$ gives $a-b\sqrt2+c\sqrt3-d\sqrt6$, so $\sigma_2(x)=x$ exactly when $b=d=0$. Thus $L^{\langle\sigma_2\rangle}=\mathbb Q(\sqrt3)$. Applying $\sigma_3$ gives $a+b\sqrt2-c\sqrt3-d\sqrt6$, so its fixed elements have $c=d=0$. Applying both flips gives $a-b\sqrt2-c\sqrt3+d\sqrt6$, so its fixed elements have $b=c=0$. Therefore

$$
L^{\langle\sigma_3\rangle}=\mathbb Q(\sqrt2),\qquad
L^{\langle\sigma_2\sigma_3\rangle}=\mathbb Q(\sqrt6).
$$

The full group fixes $\mathbb Q$, and the identity subgroup fixes all of $L$. This accounts for every subgroup and every intermediate field. The reversal is visible: each order-two subgroup fixes a degree-two field, while the order-four group fixes the degree-one base.

Because the Galois group is abelian, every subgroup is normal. Consequently every intermediate extension here is Galois over $\mathbb Q$. In a nonabelian example such as the splitting field of $x^3-2$, some subgroups are not normal and their fixed intermediate fields are not normal over the base.

## Why radicals involve solvable groups

Taking an $n$th root introduces cyclic symmetry once the relevant roots of unity are available. That observation motivates the term **solvable group**: a group admitting a finite series $1=G_0\trianglelefteq G_1\trianglelefteq\cdots\trianglelefteq G_r=G$, where each $G_i$ is normal in $G_{i+1}$ and every quotient $G_{i+1}/G_i$ is abelian. Deriving the group chain for an arbitrary radical tower requires extra hypotheses and theorems; the observation alone is not a proof of the criterion below.

The **imported solvability-by-radicals theorem** says that a separable polynomial over a characteristic-zero field is solvable by radicals exactly when the Galois group of its splitting field is solvable. Groups $S_2$, $S_3$, and $S_4$ are solvable, consistent with formulas through degree four. The group $S_5$ is not solvable, and the general quintic has Galois group $S_5$; these further facts are also imported. Thus there is no universal radical formula for all quintics. This does not mean no quintic is solvable: $x^{5}-1$, for example, already has roots expressible using a fifth root of unity.

## Detecting group information from arithmetic

Factorization modulo primes can reveal cycle types in the Galois group. An **imported factorization–Frobenius theorem** says that, at a suitable unramified prime not dividing the integer polynomial's leading coefficient and where the polynomial has squarefree reduction, degrees of the irreducible factors give the cycle lengths of a Frobenius element acting on its roots. An irreducible cubic reduction gives a 3-cycle; a linear times irreducible quadratic reduction gives a transposition. The hypotheses matter: an arbitrary reduction with repeated factors does not justify this conclusion.


## Exercises

### Exercise 1 {#galois-fundamental-theorem-ex-1}

In the splitting field $L=\mathbb Q(\alpha,\omega)$ of $T^3-2$, use the automorphisms $r$ and $s$ from the previous article to find $L^{\langle r\rangle}$ and $L^{\langle s\rangle}$. Explain why finding one fixed generator is not enough by itself.

<details><summary>Hint 1</summary>
The subgroup orders are three and two, while $[L:\mathbb Q]=6$.
</details>
<details><summary>Hint 2</summary>
Apply $[L:L^H]=|H|$ and compare the degree of a known contained subfield.
</details>
<details><summary>Full solution</summary>
Since $r$ fixes $\omega$, the field $\mathbb Q(\omega)$ is contained in $L^{\langle r\rangle}$. The correspondence degree formula makes the latter degree two over $\mathbb Q$, equal to the degree of $\mathbb Q(\omega)$. Containment and the tower law therefore give equality. Similarly $s$ fixes $\alpha$, whose field has degree three. Its fixed field has degree $6/2=3$, so it is exactly $\mathbb Q(\alpha)$. Finding a fixed generator initially proved only containment; equal finite degrees prove equality. The transposition subgroup $\langle s\rangle$ is not normal in $S_3$, and its real cubic fixed field is not normal over $\mathbb Q$, agreeing with the theorem's normality clause.
</details>

### Exercise 2 {#galois-fundamental-theorem-ex-2}

Find the fixed field of complex conjugation in $E=\mathbb Q(\sqrt2,i)$. Justify the coefficient comparison and compute its degree over $\mathbb Q$.

<details><summary>Hint 1</summary>
The real quadratic field cannot contain $i$, so adjoining it has degree two.
</details>
<details><summary>Hint 2</summary>
Write an element as $a+b\sqrt2+(c+d\sqrt2)i$ with rational coefficients.
</details>
<details><summary>Full solution</summary>
The first adjunction has degree two and the second degree two because $T^2+1$ has no root in the real field $\mathbb Q(\sqrt2)$. Thus $E$ has degree four and basis $1,\sqrt2,i,i\sqrt2$. Conjugation fixes the first two basis elements and negates the last two. Equality with the conjugate therefore forces $c=d=0$, leaving exactly $\mathbb Q(\sqrt2)$, of degree two over $\mathbb Q$. The basis, rather than a picture of real and imaginary parts alone, justifies comparison of the four rational coefficients. The order-two conjugation subgroup gives the same degree through the correspondence formula.
</details>

*Source provenance: adapted from Euler's Galois Theory: Symmetries of Polynomial Roots, preserving the correspondence statement, complete biquadratic lattice proof, radical and arithmetic theorem qualifications, and cubic fixed-field transfer reasoning. The original manuscript and reading identity remain available. General theorem proofs are owned by the linked Galois Theory chapters. CC BY-SA 4.0. Draft; no independent review is claimed.*
