
# Automorphism groups

An automorphism of a field extension preserves every algebraic relation over its base. Sending a generator to another root of one equation gives a necessary condition, not automatic existence of a field map. A cubic splitting field and finite-field Frobenius make this distinction concrete.

This **Years 2–3 (L3)** orientation assumes [Fields and the tower law](#/articles/galois-fields-tower-law), irreducible polynomials and basic group actions. The worked arguments below are adapted intact from the retained [Galois symmetry source](#/articles/galois-symmetry). The primary [Automorphism Groups and Artin's Theorem chapter](#/books/galois-theory/automorphism-groups-artin) proves the general counting and fixed-field machinery.

A $K$-automorphism of $L$ is a bijective field homomorphism $L\to L$ fixing $K$ pointwise. Applying it to $f(\alpha)=0$ for $f\in K[T]$ gives $f(\sigma(\alpha))=0$. Automorphisms form a group under composition. In this article we explicitly import the theorem that a finite normal separable extension has automorphism-group order equal to its degree. Characteristic-zero finite extensions are separable; a splitting field of a separable polynomial is finite Galois. The primary chapters prove these inputs.

## Worked example: the cubic $x^{3}-2$

Let $\alpha=\sqrt[3]{2}$ and let $\omega$ be a primitive cube root of unity, satisfying $\omega^{2}+\omega+1=0$. The three roots are

$\alpha$, $\omega \alpha$, $\omega^{2} \alpha$.

The real field $\mathbb Q(\alpha)$ does not contain the two nonreal roots, so it is not a splitting field. Its degree is 3 by the rational-root test: $x^{3}-2$ has no rational root and is therefore irreducible.

The splitting field is $L=\mathbb Q(\alpha,\omega)$. Since $\omega$ solves $T^2+T+1$ and is not in the real field $\mathbb Q(\alpha)$, its minimal polynomial over $\mathbb Q(\alpha)$ has degree 2. The tower law gives $[L:\mathbb Q]=[L:\mathbb Q(\alpha)][\mathbb Q(\alpha):\mathbb Q]=2\cdot3=6$. The polynomial $T^3-2$ has distinct roots in characteristic zero, and $L$ is its splitting field. By the **imported finite Galois degree theorem**, $L/\mathbb Q$ has exactly six automorphisms.

Each such automorphism permutes the three roots. This action is faithful: an automorphism fixing all three fixes $\alpha$ and $\omega=(\omega\alpha)/\alpha$, hence fixes the field they generate. We therefore have an injection $\operatorname{Gal}(L/\mathbb Q)\hookrightarrow S_3$. Both groups have six elements, so it is an isomorphism. In particular **all six** root permutations occur. The requirement that images be roots gave an upper bound; the degree theorem supplied the matching lower bound and thus the extension existence that the root-image observation alone cannot supply.

Two generators make the geometry visible. The established isomorphism supplies the 3-cycle $r$, which sends $\alpha\mapsto\omega\alpha\mapsto\omega^2\alpha\mapsto\alpha$; since $\omega=(\omega\alpha)/\alpha$, it fixes $\omega$. Let $s$ be complex conjugation; it fixes $\alpha$, sends $\omega$ to $\omega^2$, exchanges the other roots, and has order 2. On the generators of $L$, $srs(\alpha)=s(\omega\alpha)=\omega^2\alpha=r^{-1}(\alpha)$ and $srs(\omega)=\omega=r^{-1}(\omega)$. Thus $srs=r^{-1}$ on all of $L$; these are the familiar generators of $S_3$.

Contrast this with $\mathbb Q(\alpha)$ alone. Any $\mathbb Q$-automorphism must send $\alpha$ to another root lying in the same field. Only the real root lies there, so the automorphism group is trivial even though the extension has degree 3. This is the counterexample to the tempting but false rule "degree equals number of automorphisms." Equality holds for finite Galois extensions.

## Finite fields make Frobenius visible

Let $p$ be prime. In characteristic $p$, the binomial theorem gives

$$(x+y)^p=x^p+y^p,$$

because every intermediate binomial coefficient is divisible by $p$. Therefore the Frobenius map

$$\operatorname{Fr}(x)=x^p$$

is a field homomorphism. A field homomorphism has zero kernel; on a finite field it is therefore bijective. We use the standard **finite-field existence and uniqueness theorem** for $\mathbb F_{p^n}$ and the fact that its $p^n$ elements are exactly the roots of $T^{p^n}-T$. Thus $\operatorname{Fr}^n(x)=x^{p^n}=x$ for every $x$. This only proves that the order of $\operatorname{Fr}$ **divides** $n$. If $\operatorname{Fr}^d$ were the identity for some $0<d<n$, all $p^n$ elements would be roots of the nonzero polynomial $T^{p^d}-T$, which has degree $p^d<p^n$. The polynomial root bound makes that impossible. Hence $\operatorname{Fr}$ has exact order $n$.

The extension $\mathbb F_{p^n}/\mathbb F_p$ is Galois: it is a splitting field of $T^{p^n}-T$, whose derivative is $-1$, so its roots are distinct. Its degree is $n$, and the imported finite Galois degree theorem says its group has $n$ elements. Consequently the $n$ powers of Frobenius are the entire group:

$$\operatorname{Gal}(\mathbb F_{p^n}/\mathbb F_p)
\cong C_n.$$

The fixed elements of Frobenius are precisely the roots of $T^p-T$. All $p$ elements of $\mathbb F_p$ satisfy this equation, and the degree-$p$ polynomial has no more roots, so the fixed field is exactly $\mathbb F_p$.

For a concrete example, write

$$\mathbb F_4=\mathbb F_2[x]/(x^2+x+1),$$

and let $\alpha$ denote the class of $x$. The defining polynomial has no root in $\mathbb F_2$, hence is irreducible; its quotient is a field with unique representatives $0,1,\alpha,\alpha+1$. The relation $\alpha^2+\alpha+1=0$ becomes $\alpha^2=\alpha+1$ in characteristic two.

The nontrivial Frobenius automorphism squares elements:

$$\operatorname{Fr}(\alpha)=\alpha^2=\alpha+1,\qquad
\operatorname{Fr}(\alpha+1)=(\alpha+1)^2=\alpha.$$

The full table is

| $x$ | $0$ | $1$ | $\alpha$ | $\alpha+1$ |
| --- | --- | --- | --- | --- |
| $\operatorname{Fr}(x)=x^2$ | $0$ | $1$ | $\alpha+1$ | $\alpha$ |

It exchanges the two roots of $T^2+T+1$ and fixes 0 and 1. Applying it twice returns every element, and it is not the identity because it moves $\alpha$; its exact order is therefore 2. The degree theorem then identifies the group as $\{1,\operatorname{Fr}\}$. This is the finite-field version of conjugation in a quadratic number field.


## Exercises

### Exercise 1 {#galois-automorphism-groups-ex-1}

Find all $\mathbb Q$-automorphisms of $\mathbb Q(\sqrt5)$, justify existence of the maps and identify the elements fixed by both.

<details><summary>Hint 1</summary>
A root image must be $\sqrt5$ or $-\sqrt5$.
</details>
<details><summary>Hint 2</summary>
Check the sign substitution on products of two expressions $a+b\sqrt5$.
</details>
<details><summary>Full solution</summary>
The root condition permits only the identity and $\sigma(a+b\sqrt5)=a-b\sqrt5$. The latter is additive, fixes rationals and preserves products because $(\sqrt5)^2=5$ and changing both occurrences of the radical sign leaves its square unchanged. It is its own inverse, so it is an automorphism, not merely a candidate root assignment. The equation $a+b\sqrt5=a-b\sqrt5$ forces $b=0$. Thus the common fixed field is exactly $\mathbb Q$. This supplies the existence step omitted by a bare list of possible root images.
</details>

### Exercise 2 {#galois-automorphism-groups-ex-2}

In $\mathbb F_8$, why does $x^8=x$ for every $x$ not alone prove that $x\mapsto x^2$ has exact order three? Supply the missing argument.

<details><summary>Hint 1</summary>
The displayed identity gives an order dividing three.
</details>
<details><summary>Hint 2</summary>
If Frobenius were identity, the polynomial $T^2-T$ would have eight roots.
</details>
<details><summary>Full solution</summary>
The identity gives $\operatorname{Fr}^3=1$, leaving possible orders one and three. Order one would make all eight elements solve $T^2-T=0$, impossible because a nonzero degree-two polynomial over a field has at most two roots. Hence the order is exactly three. More generally, $\operatorname{Fr}^d=1$ with $0<d<n$ on $\mathbb F_{p^n}$ would give $p^n$ roots of a polynomial of degree $p^d<p^n$. This is the exact-order step, not a consequence of the divisibility statement alone.
</details>

The next article, [The fundamental theorem](#/articles/galois-fundamental-theorem), explains which intermediate fields these groups determine. General degree-count formulas require the stated Galois hypotheses; the real cubic counterexample above remains essential.

*Source provenance: adapted from Euler's Galois Theory: Symmetries of Polynomial Roots, preserving its cubic calculation, nonnormal counterexample, Frobenius exact-order proof and F4 table. General field-theory inputs remain explicit and link actual primary chapters. The old source and resource identity remain available. CC BY-SA 4.0. Draft; no independent review is claimed.*
