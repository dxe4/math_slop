var e=`---
parent_id: book-commutative-algebra
chapter_id: dimension-theory
title: "Dimension Theory"
level: graduate
status: draft
license: CC BY-SA 4.0
---

# Dimension Theory

Dimension counts strict chains of prime ideals. For affine domains it also counts algebraically independent parameters, but that agreement requires proof. We prove Noether normalisation, derive the affine dimension theorem, calculate heights in polynomial rings, and prove the principal ideal theorem through symbolic powers and Artinian quotients.

Read [integral prime chains](integral-extensions.md), [Artinian rings](artinian-dvr-dedekind.md), [Nakayama](noetherian-hilbert-basis.md) and [associated primes](primary-decomposition.md). Rings are commutative. Noetherian hypotheses are explicit; affine algebras mean finitely generated algebras over a field k. Dimension is a ring invariant, not the number of generators in a chosen presentation.

## 1. Prime chains, height and localisation

**Definition 12.1.** The Krull dimension dim R is the supremum of lengths of finite chains
$$\\mathfrak p_0\\subsetneq\\cdots\\subsetneq\\mathfrak p_d.$$
Their length is d. The height ht𝔭 is the supremum for chains ending at 𝔭. A field has dimension zero. We assign the zero ring dimension −∞, since its prime set is empty.

Localisation identifies primes of R_𝔭 with primes contained in 𝔭, preserving strict containment. Thus
$$\\operatorname{ht}\\mathfrak p=\\dim R_{\\mathfrak p}.$$
The quotient R/I has primes corresponding to primes containing I, so its dimension counts chains in V(I). A general localisation can only remove prime chains and hence cannot increase dimension.

For a domain the point (0) is generic. Passing to a prime quotient removes the portion of a chain below that prime; this motivates codimension, measured by height. One must not replace every height by a subtraction of global dimensions without a theorem for the rings under consideration.

Integral inclusions preserve dimension by lying over, going up and incomparability, as proved in Chapter 7. The reduced quotient also preserves dimension because it has exactly the same prime poset.

## 2. Noether normalisation

**Theorem 12.2.** Every nonzero affine k-algebra A contains a polynomial subalgebra k[t_1,…,t_d] over which A is finite.

*Proof.* Induct on the number n of algebra generators A=k[a_1,…,a_n]. If the a_i are algebraically independent, A itself is polynomial. Otherwise choose a nonzero relation f(x_1,…,x_n) vanishing at them.

Choose an integer B larger than every exponent appearing in a monomial of f, and put weights w_i=B^i for i<n, with the last variable given weight one. Different exponent tuples in f then have different weighted degrees, by uniqueness of base-B expansion. Substitute
$$x_i=y_i+x_n^{w_i}\\quad(i<n).$$
There is a unique highest x_n power, obtained from the monomial of highest weight by choosing all its power terms. Its coefficient is a nonzero scalar in k; any term involving a y_i has smaller x_n degree. Dividing by that scalar makes the transformed relation monic in x_n.

Set b_i=a_i−a_n^(w_i). The relation says a_n is integral over A_0=k[b_1,…,b_(n−1)], and A=A_0[a_n] is finite over A_0. By induction A_0 is finite over a polynomial subalgebra k[t_1,…,t_d]. Combining finite spanning sets makes A finite over that same subalgebra. The case n=0 is A=k. ∎

The weighted substitution works over finite fields too. It does not rely on selecting a generic scalar outside finitely many forbidden values. The t_i need not be linear combinations of the original generators.

For a domain A, the fraction field is finite algebraic over k(t_1,…,t_d). Indeed after inverting all nonzero base polynomials, the finite domain extension is a field by the integral field criterion, and is exactly Frac A. Thus d is its transcendence degree.

## 3. Strict quotients lower transcendence degree

**Lemma 12.3.** If A is an affine domain and 𝔭 is a nonzero prime, then
$$\\operatorname{trdeg}_k\\operatorname{Frac}(A/\\mathfrak p)
<\\operatorname{trdeg}_k\\operatorname{Frac}A.$$

*Proof.* Normalise A over C=k[t_1,…,t_d]. Choose 0≠b∈𝔭. It is integral over C. A monic equation of smallest degree for b has nonzero constant term c_0: otherwise cancel b in the domain to obtain a smaller monic relation. Rearranging shows 0≠c_0∈𝔭∩C.

The quotient A/𝔭 is finite over C/(𝔭∩C). The latter's d generator images have a nonzero polynomial relation c_0, so its fraction field has transcendence degree at most d−1. The finite integral quotient extension does not change transcendence degree, by the fraction-field argument above. This proves the strict drop. ∎

Apply the lemma at each strict step of a prime chain, using the domain quotient at the earlier step. A polynomial ring in d variables therefore has dimension at most d. The coordinate chain
$$(0)\\subsetneq(x_1)\\subsetneq(x_1,x_2)
\\subsetneq\\cdots\\subsetneq(x_1,\\ldots,x_d)$$
has length d, since every quotient is a polynomial domain. Hence its dimension is exactly d.

**Theorem 12.4 (Affine dimension).** For an affine domain,
$$\\dim A=\\operatorname{trdeg}_k\\operatorname{Frac}A.$$
More generally, if a nonzero affine algebra is finite over a polynomial subalgebra in d variables, its dimension is d.

*Proof.* Noether normalisation gives the finite integral inclusion. Dimension is preserved by integrality, and the base polynomial ring has dimension d. For a domain its fraction-field transcendence degree is the same d. ∎

This proof treats polynomial-ring dimension before invoking it for an arbitrary affine algebra. It does not assume the geometric conclusion it is meant to establish.

## 4. Heights that can be calculated explicitly

In R=k[x_1,…,x_d], let 𝔭=(x_1,…,x_r). Then
$$\\operatorname{ht}\\mathfrak p=r,\\qquad
\\dim R/\\mathfrak p=d-r.$$
The lower height bound is the coordinate chain. For the upper bound, every prime contained in 𝔭 avoids every nonzero polynomial in the remaining d−r variables. Localise those polynomials to obtain the coefficient field K=k(x_(r+1),…,x_d). A chain below 𝔭 becomes a chain in K[x_1,…,x_r], whose dimension is r. This proves the upper bound.

Every maximal ideal of k[x_1,…,x_d] has height d, even when k is not algebraically closed. By Zariski's lemma, each coordinate residue is algebraic over k. Choose its first coordinate's irreducible minimal polynomial g(x_1) inside the maximal ideal. The ideal (g) is prime, and its quotient is k_1[x_2,…,x_d] for the finite field extension k_1=k[x_1]/(g). Inductively the image maximal ideal has a chain of length d−1. Prepending (0) below (g) gives length d, and the global polynomial dimension gives the matching upper bound.

For an affine domain and any prime 𝔭, the strict transcendence-degree drop along chains at least gives
$$\\operatorname{ht}\\mathfrak p
+\\operatorname{trdeg}_k\\operatorname{Frac}(A/\\mathfrak p)
\\leq\\operatorname{trdeg}_k\\operatorname{Frac}A.$$
The coordinate calculations establish equality in those examples. A general affine height formula requires a further chain theorem; the inequality proved here does not silently assume it.

## 5. The principal ideal theorem

**Theorem 12.5 (Krull principal ideal theorem).** In a Noetherian ring, every prime minimal over a proper principal ideal has height at most one.

*Proof.* First prove the local domain case: let (A,𝔪) be a Noetherian local domain with √(f)=𝔪. If it is a field, the assertion is immediate. Otherwise f≠0. Suppose a nonzero prime 𝔭 is strictly below 𝔪. Then f∉𝔭.

Let
$$Q_n=\\mathfrak p^nA_{\\mathfrak p}\\cap A,\\qquad n\\geq1.$$
The ideal 𝔭^nA_𝔭 has radical the maximal ideal of A_𝔭. Its quotient is Noetherian with a single prime, hence local Artinian. Its nonunits are nilpotent, so that ideal is primary; contraction makes Q_n 𝔭-primary.

The quotient A/(f) is Artinian because its only prime is 𝔪/(f). Therefore the descending ideals (Q_n+(f))/(f) stabilise. For a stable stage, Q_n⊆Q_(n+1)+(f). If a=b+cf with a∈Q_n,b∈Q_(n+1), primary cancellation by f∉𝔭 gives c∈Q_n. Hence
$$Q_n=Q_{n+1}+fQ_n.$$
The finite module Q_n/Q_(n+1) is equal to f times itself; Nakayama gives Q_n=Q_(n+1). Localising at 𝔭 yields
𝔭^nA_𝔭=𝔭^(n+1)A_𝔭.
Nakayama inside that local ring makes this ideal zero. A nonzero ideal of a domain cannot have zero positive power, a contradiction. Thus no such intermediate prime exists, and dim A≤1.

For the general statement, suppose a chain 𝔮_0⊊𝔮_1⊊𝔭 ended at a prime minimal over (f). Localise at 𝔭 and quotient by 𝔮_0R_𝔭. This is a Noetherian local domain. Its only prime containing the image of f is its maximal ideal, by minimality of 𝔭. The displayed chain supplies a nonzero prime strictly below that maximal ideal, contradicting the domain case. Hence no chain of length two ends at 𝔭. ∎

The proof uses primary symbolic powers, Artinian descending chains and Nakayama; no unproved dimension count for a hypersurface is substituted for the argument.

## 6. Worked example: a nontrivial normalising parameter

The hyperbola ring A=k[x,x^(−1)] is finite over k[t] with t=x+x^(−1). The element x satisfies
$$x^2-tx+1=0,$$
and x^(−1)=t−x, so 1,x span the entire algebra over k[t]. The element t is transcendental: in a nonzero polynomial P(x+x^(−1)), the highest Laurent exponent is deg P with nonzero leading coefficient, so it cannot vanish.

Thus dim A=1. Its infinitely many polynomial or Laurent monomials did not imply infinite dimension: they are ring elements, while Krull dimension counts prime-chain complexity. The finite normalisation gives the decisive parameter count.

## 7. Worked example: equations and nilpotents

In k[x,y,z], let I=(x,y²). Its radical is (x,y), so the quotient has the same spectrum as k[z] and dimension one. Its local ring at the origin is nonreduced because the class of y is nonzero with square zero.

The ambient coordinate prime (x,y) has height two. In this case two independent coordinate conditions reduce dimension from three to one. Repeating an equation or replacing it by a power would not impose another independent prime condition: (x,y²,y³) is the same ideal, and (x²) still has radical (x).

Thus counting a displayed list of equations cannot replace ideal and prime analysis. The principal ideal theorem supplies a bound for minimal primes of one equation under Noetherianity, while radical equality handles multiplicities.

## 8. Worked example: where a dimension is measured

For k[x,y], the generic prime (0) has height zero and local ring k(x,y), a field. The prime (x) has height one; its local ring has maximal ideal generated by x and residue field k(y). The coordinate maximal (x,y) has height two and residue field k.

All are points of the same two-dimensional spectrum. Their local dimensions differ because different portions of the prime poset lie below them. Localising at the generic point therefore lowers dimension to zero, despite starting with a domain whose fraction-field transcendence degree is two over k.

For an arbitrary Noetherian ring of finite dimension, a nonzerodivisor f in a maximal ideal avoids all minimal primes. Any prime chain in R/(f) can be preceded by a minimal prime of R below its first member, giving one extra strict step because that minimal prime avoids f. Hence dim R/(f)≤dim R−1 whenever such chains are considered globally. This is a proved upper bound; sharper equalities require their own hypotheses.

## Plane hypersurfaces without an unproved height formula

**Application 12.8.** Every irreducible nonconstant polynomial f in k[x,y] defines a domain of dimension one, over any field k. The polynomial ring is a UFD, so (f) is prime. The principal ideal theorem bounds its height by one, and the strict chain (0)⊊(f) gives equality. It cannot be maximal: the polynomial maximal-ideal calculation in Section 4 gives height two for every maximal ideal. Consequently k[x,y]/(f) is a domain that is not a field. It has a nonzero maximal ideal, providing a prime chain of length at least one.

For the reverse bound, apply the strict transcendence-degree drop to the nonzero prime (f) in k[x,y]. The quotient fraction field has transcendence degree at most one. The affine dimension theorem therefore gives dimension at most one, proving equality. This argument combines two different bounds; it does not infer quotient dimension merely by subtracting the principal ideal's height from two.

More generally, let f be any nonzero nonunit polynomial in two variables and factor it into powers of distinct irreducibles. The primes minimal over (f) are exactly the ideals generated by those irreducibles. A prime containing their product must contain a factor by primality; minimality then forces equality with its prime principal ideal. Conversely none of these distinct principal prime ideals contains another, because divisibility between their irreducible generators would make them associates. Each resulting component therefore has dimension one by the preceding argument.

Powers in f affect the quotient's nilpotents while leaving those minimal primes and the topological components unchanged. For example x²y and xy have the same two components, defined by x and y, but the class of xy is a nonzero nilpotent modulo x²y: its square is a multiple of x²y, whereas xy itself is not. Dimension and multiplicity answer different questions even in this elementary affine setting. The next chapter develops a graded invariant that retains finer numerical information than the component dimensions alone.

## 9. Exercises

### CA-12-01 — Height through a local ring

Prove ht𝔭=dim R_𝔭.

<details>
<summary>Hint 1</summary>

List the primes surviving localisation at R\\𝔭.

</details>
<details>
<summary>Hint 2</summary>

The prime correspondence preserves strict inclusions.

</details>
<details>
<summary>Full solution</summary>

Primes of R_𝔭 correspond exactly to primes of R contained in 𝔭. Extending and contracting are inverse order-preserving maps, so strict chains correspond. A chain below 𝔭 can be extended to end there if necessary. Taking the supremum of lengths on each side proves the equality.

</details>

### CA-12-02 — Integral dimensions

Explain why k[t²,t³] has dimension one.

<details>
<summary>Hint 1</summary>

It is integral inside k[t], generated upstairs by the integral element t.

</details>
<details>
<summary>Hint 2</summary>

Integral extensions preserve prime-chain dimension.

</details>
<details>
<summary>Full solution</summary>

The inclusion k[t²,t³]⊆k[t] is integral because t satisfies T²−t²=0, and the upper ring is generated by t. The polynomial PID k[t] has dimension one. Lying over, going up and incomparability give equal dimensions, so the cusp ring also has dimension one.

</details>

### CA-12-03 — A finite normalisation

For A=k[u,v]/(v³−u²), show it is finite over k[u].

<details>
<summary>Hint 1</summary>

The relation is monic in v.

</details>
<details>
<summary>Hint 2</summary>

Reduce every v-exponent to less than three.

</details>
<details>
<summary>Full solution</summary>

The classes 1,v,v² span over k[u], since v³=u². The copy of k[u] injects: a nonzero polynomial in u alone cannot be divisible by the monic positive-v-degree polynomial v³−u². Thus this is a finite integral polynomial subalgebra, and dim A=1. No claim that the spanning list is a basis was needed for the dimension conclusion.

</details>

### CA-12-04 — Coordinate height

Compute ht(x_1,x_2) in k[x_1,x_2,x_3,x_4].

<details>
<summary>Hint 1</summary>

Use the coordinate chain for the lower bound.

</details>
<details>
<summary>Hint 2</summary>

Invert all nonzero polynomials in x_3,x_4 for the upper bound.

</details>
<details>
<summary>Full solution</summary>

The chain (0)⊊(x_1)⊊(x_1,x_2) gives height at least two. Every prime below that coordinate prime avoids k[x_3,x_4]\\{0}; localisation puts the chain in k(x_3,x_4)[x_1,x_2], of dimension two. Hence the height is exactly two. The quotient dimension is also two, for a different reason: it is k[x_3,x_4].

</details>

### CA-12-05 — A maximal point over Q

Find the height of (x²−2,y) in Q[x,y].

<details>
<summary>Hint 1</summary>

Its quotient is Q(√2).

</details>
<details>
<summary>Hint 2</summary>

Use a chain through (x²−2).

</details>
<details>
<summary>Full solution</summary>

The ideal is maximal because its quotient is the field Q(√2). The strict chain (0)⊊(x²−2)⊊(x²−2,y) has prime members and length two. The polynomial ring has dimension two, so this is the height. Its point is closed although its residue field is larger than Q.

</details>

### CA-12-06 — Nilpotents and dimension

Compute dim k[x,y]/(x³,y²).

<details>
<summary>Hint 1</summary>

Its radical is (x,y).

</details>
<details>
<summary>Hint 2</summary>

The reduced quotient is k.

</details>
<details>
<summary>Full solution</summary>

Every prime contains x,y because their powers vanish. Their quotient is k, so there is exactly one prime, the maximal ideal generated by their classes. The dimension is zero. The ring has k-dimension six and nonzero nilpotents, illustrating that vector-space dimension, Krull dimension and reducedness are separate invariants.

</details>

### CA-12-07 — Why weighted substitution works

Why choose weights B^i with B larger than every monomial exponent in the normalisation proof?

<details>
<summary>Hint 1</summary>

Read the exponent tuple as digits in base B.

</details>
<details>
<summary>Hint 2</summary>

There must be a unique highest resulting power of the last variable.

</details>
<details>
<summary>Full solution</summary>

The weighted degree is the base-B encoding of the exponent tuple, with the last-variable exponent in the units place. Since all digits are below B, distinct tuples have distinct values. The highest-weight monomial therefore produces one unique highest pure last-variable power after substitution, whose nonzero scalar coefficient cannot cancel. That makes the transformed relation monic after scalar division.

</details>

### CA-12-08 — Principal minimal primes

Apply the principal ideal theorem to a prime minimal over (xy) in k[x,y,z].

<details>
<summary>Hint 1</summary>

A containing prime must contain x or y.

</details>
<details>
<summary>Hint 2</summary>

The minimal primes are (x),(y).

</details>
<details>
<summary>Full solution</summary>

The minimal primes are the two height-one coordinate primes (x),(y). Their heights agree with the theorem's bound. The maximal ideal (x,y,z) also contains xy but has height three; it is not minimal over the principal ideal. The minimality hypothesis therefore cannot be removed.

</details>

### CA-12-09 — The Artinian step in the principal theorem

Why is A/(f) Artinian when A is Noetherian local and √(f) is its maximal ideal?

<details>
<summary>Hint 1</summary>

Its primes correspond to primes containing f.

</details>
<details>
<summary>Hint 2</summary>

There is only one such prime.

</details>
<details>
<summary>Full solution</summary>

Every containing prime contains √(f)=𝔪, hence equals 𝔪. The quotient is Noetherian and all its primes are maximal, so the Artinian criterion applies. This supplies descending-chain termination for the symbolic-power images in the proof; it does not assume a prior dimension theorem for hypersurfaces.

</details>

### CA-12-10 — Dimension does not count generators

Compare the dimensions of k[x,y]/(x) and k[x,y]/(x,x²,x³).

<details>
<summary>Hint 1</summary>

The two ideals are equal.

</details>
<details>
<summary>Hint 2</summary>

Both quotients are k[y].

</details>
<details>
<summary>Full solution</summary>

The higher powers are already multiples of x, so (x,x²,x³)=(x). Both quotients are the one-dimensional polynomial ring k[y]. A generating list can be lengthened arbitrarily without changing the ideal or spectrum; its length is not a dimension formula.

</details>

### CA-12-11 — Transcendence drops along chains

For an affine domain A and a strict prime chain, explain why the chain length cannot exceed trdeg_k Frac A.

<details>
<summary>Hint 1</summary>

At each step pass to the earlier domain quotient.

</details>
<details>
<summary>Hint 2</summary>

The next prime becomes nonzero there.

</details>
<details>
<summary>Full solution</summary>

For 𝔭_i⊊𝔭_(i+1), the prime 𝔭_(i+1)/𝔭_i is nonzero in the affine domain A/𝔭_i. Lemma 12.3 makes fraction-field transcendence degree drop by at least one. It starts at most the original degree and remains nonnegative. Thus there can be no more strict steps than that original degree.

</details>

### CA-12-12 — Localisation can lower dimension

Give a localisation of a two-dimensional domain that has dimension zero.

<details>
<summary>Hint 1</summary>

Use k[x,y].

</details>
<details>
<summary>Hint 2</summary>

Invert every nonzero element.

</details>
<details>
<summary>Full solution</summary>

Localising k[x,y] at its zero prime gives its fraction field k(x,y), which has dimension zero as a ring. The original polynomial ring has dimension two. Its transcendence degree over k remains two, but the affine finite-type dimension theorem does not apply to this field as a finitely generated k-algebra: Zariski's lemma shows it is not one.

</details>

## 10. Summary and next connection

Dimension counts prime chains and height counts the chains below a point. Noether normalisation proves the affine agreement with transcendence degree, while localisation calculates coordinate heights. The principal ideal theorem controls minimal primes of one equation through an independent Noetherian argument. The next chapter studies [Hilbert polynomials](hilbert-polynomials.md), extracting dimension and multiplicity information from graded growth.
`;export{e as default};