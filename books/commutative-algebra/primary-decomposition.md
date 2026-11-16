
# Primary Decomposition

The radical of an ideal records its prime vanishing set but discards power information. Primary decomposition retains that information by writing an ideal as a finite intersection of ideals supported at individual primes. The primes are intrinsic; the components belonging to embedded primes can vary.

Read [Noetherian finiteness](noetherian-hilbert-basis.md), [colon ideals](rings-and-ideals.md) and [prime localisation](localisation.md). R is a commutative Noetherian ring and I is proper unless otherwise stated. Primary decomposition here is a theorem about ideals, not a claim that arbitrary modules split as direct sums.

## 1. Primary ideals and zero divisors

**Definition 6.1.** A proper ideal Q is primary if ab∈Q and a∉Q imply b^n∈Q for some n≥1. Its radical is a prime 𝔭, and we then call Q 𝔭-primary.

To prove that radical assertion, suppose ab∈√Q and a∉√Q. Some power a^m b^m lies in Q, while a^m∉Q. Primaryness forces a power of b^m into Q, hence b∈√Q. The radical is proper because Q is proper.

Equivalently, Q is primary exactly when every zero divisor in R/Q is nilpotent. A nonzero product-zero relation in the quotient is precisely a relation ab∈Q with one factor outside Q; the primary condition says the other is nilpotent. Elements already zero in the quotient cause no exception.

A useful cancellation form is
$$b\notin\sqrt Q,\ ab\in Q\quad\Longrightarrow\quad a\in Q.$$
In particular (Q:b)=Q for b outside the radical. If c∉Q, then (Q:c) is also primary with the same radical: ab c∈Q and ac∉Q force a power of b into Q, while a power of an element in √Q already lies in the colon. Conversely r^n c∈Q with c∉Q forces r into √Q, giving equality of radicals.

A finite intersection of 𝔭-primary ideals is 𝔭-primary. If b∉𝔭 and ab is in each component, cancellation puts a in each component. Its radical is the common radical 𝔭 by the radical-intersection formula.

## 2. Irreducible ideals give existence

An ideal Q is irreducible if an equality Q=J∩K forces Q=J or Q=K. This is an ideal-theoretic definition; it is not the same as irreducibility of V(Q), which only asks that √Q be prime.

**Lemma 6.2.** Every ideal in a Noetherian ring is a finite intersection of irreducible ideals.

*Proof.* If some ideals failed, choose a maximal counterexample using the ascending-chain condition. It is not irreducible, so is J∩K with both J,K strictly larger. By maximality each of J,K has a finite irreducible decomposition. Combining those gives one for the counterexample, a contradiction. The whole ring may be treated as the empty intersection. ∎

**Lemma 6.3.** Every proper irreducible ideal in a Noetherian ring is primary.

*Proof.* Pass to A=R/Q; its zero ideal is irreducible and A is Noetherian. Suppose xy=0 with y≠0. The ascending chain Ann(x)⊆Ann(x²)⊆⋯ stabilises, so choose n with Ann(x^n)=Ann(x^(n+1)).

We claim (x^n)∩(y)=0. If z=rx^n=sy, multiply by x to get rx^(n+1)=sxy=0. Then r∈Ann(x^(n+1))=Ann(x^n), so z=0. Since (y) is nonzero and zero is irreducible, the other ideal (x^n) must be zero. Thus x is nilpotent. Every zero divisor in A is therefore nilpotent, which proves Q primary. ∎

**Theorem 6.4 (Existence).** Every proper ideal of a Noetherian ring has a finite primary decomposition
$$I=Q_1\cap\cdots\cap Q_r.$$
It can be chosen irredundant, with distinct radicals 𝔭_i=√Q_i.

*Proof.* Combine the two lemmas. Delete any component whose removal leaves the intersection unchanged. Combine components with equal radical, using the finite-intersection observation. If combining creates redundancy, delete again. A finite number of components ensures termination. ∎

Such a decomposition is called minimal. “Minimal” here means irredundant with distinct radicals; it does not mean every radical is a minimal prime over I.

## 3. Associated primes identify the radicals

**Definition 6.5.** A prime 𝔭 is associated to an R-module M if 𝔭=Ann_R(m) for some nonzero m∈M. Write Ass_R M for the set.

Every nonzero module over a Noetherian ring has an associated prime. Choose an annihilator of a nonzero element maximal under inclusion. If ab kills m but b does not, then bm≠0 and Ann(bm) contains Ann(m), so equals it by maximality. Hence a kills m. This proves the maximal annihilator prime.

For a primary Q with radical 𝔭,
$$\operatorname{Ass}_R(R/Q)=\{\mathfrak p\}.$$
Existence gives some associated prime. Every possible annihilator is (Q:c), c∉Q, whose radical is 𝔭 by Section 1. If that annihilator is itself prime, it equals its radical and therefore equals 𝔭.

**Theorem 6.6 (First uniqueness theorem).** In a minimal primary decomposition,
$$\operatorname{Ass}_R(R/I)=\{\mathfrak p_1,\ldots,\mathfrak p_r\}.$$
Thus the set of component radicals is independent of the decomposition.

*Proof.* The diagonal map R/I→⊕_iR/Q_i is injective. Associated primes of a submodule are associated primes of the ambient module, since the same element has the same annihilator. For a finite direct sum, associated primes are the union of those of its factors. To prove the nontrivial direction, if a vector has prime annihilator 𝔭=⋂_iAnn(m_i), one of those annihilators equals 𝔭: otherwise choose a_i∈Ann(m_i)\𝔭, whose product lies in the intersection but not in the prime, a contradiction. Thus Ass(R/I)⊆{𝔭_i}.

For the reverse inclusion, irredundancy supplies c_i∈⋂_(j≠i)Q_j outside Q_i. Then (I:c_i)=(Q_i:c_i), a 𝔭_i-primary ideal. The cyclic submodule generated by c_i+I is isomorphic to R/(I:c_i), and hence has associated prime 𝔭_i. Its element with that annihilator is also an element of R/I. Therefore every 𝔭_i is associated. ∎

This proof establishes finiteness of Ass(R/I), rather than assuming it. The primes are recovered from element annihilators and therefore do not depend on how the intersection was written.

## 4. Minimal and embedded primes

Every prime containing I contains one of the 𝔭_i. Indeed Q_1⋯Q_r⊆I, so primality forces some Q_i into it, and then its radical lies there too. Consequently the minimal primes over I are precisely the inclusion-minimal members among the 𝔭_i. The others are called embedded associated primes.

**Theorem 6.7 (Uniqueness of isolated components).** If 𝔭_i is minimal over I, then
$$Q_i=IR_{\mathfrak p_i}\cap R.$$
In particular that primary component is uniquely determined by I.

*Proof.* A component Q_j whose radical is not contained in 𝔭_i contains an element outside 𝔭_i and extends to the whole local ring. Since 𝔭_i is minimal among the distinct component radicals, every j≠i has this property. Localisation preserves finite intersections: apply its exactness to the kernel of R→⊕_jR/Q_j. Thus IR_𝔭i=Q_iR_𝔭i.

Contracting Q_i returns Q_i, because multiplying an element outside Q_i by a denominator outside its radical cannot put it inside Q_i, by primary cancellation. This proves the formula. ∎

The theorem concerns the components at minimal primes. Embedded components can change even when their radical does not, as the next example demonstrates.

## 5. Worked example: an embedded component that moves

In k[x,y], let I=(x²,xy). Then
$$I=(x)\cap(x^2,y).$$
For if xf∈(x²,y), reducing modulo y shows f(x,0) divisible by x, so f∈(x,y), giving xf∈I. The reverse inclusion is immediate.

The second component is (x,y)-primary, since its quotient is k[x]/(x²), where every nonunit is nilpotent. The first is the prime (x). Both components are needed and their radicals are distinct.

For every c∈k there is another decomposition
$$I=(x)\cap(x^2,y-cx).$$
Modulo the second ideal, y=cx and x²=0. A multiple xf maps to zero exactly when f has zero constant term, or f∈(x,y), giving the same intersection I. The quotient again is dual numbers, so the second component remains primary. The choices c=0 and c=1 differ: y belongs to the first embedded component but not the second.

The associated primes can be seen directly:
$$(I:y)=(x),\qquad(I:x)=(x,y).$$
The classes y+I and x+I therefore witness both primes. The minimal component (x) is fixed; the embedded component varies.

## 6. Worked example: integer prime powers

In Z,
$$(72)=(8)\cap(9).$$
The ideals are comaximal, so their intersection is their product. The ideal (p^n) is (p)-primary: if a is not divisible by p and p^n divides ab, all the necessary p-factors must occur in b, so b∈(p^n); more generally a zero divisor modulo p^n is divisible by p and nilpotent.

The two radicals (2),(3) are minimal primes over (72), so both primary components are unique. Localising at (2) makes nine a unit and retains the eight-component; localising at (3) retains the nine-component. This is the integer prototype for the isolated-component formula.

## 7. Worked example: primary need not be irreducible

The ideal 𝔪²=(x²,xy,y²) in k[x,y] is (x,y)-primary. Its quotient has square-zero maximal ideal spanned by x,y; every element with nonzero constant term is a unit, and every remaining element is nilpotent.

Yet
$$(x^2,xy,y^2)=(x^2,y)\cap(x,y^2),$$
an intersection of two strictly larger ideals. The equality follows by checking monomial divisibility: a monomial lying in both is divisible by x²,xy or y². Thus primary does not imply irreducible. The existence proof used the implication in the other direction and then combined equal-radical components.

## 8. Zero divisors and the remaining information

An element a is a zero divisor on M if it kills a nonzero module element. Over a Noetherian ring, these elements form the union of associated primes. One inclusion is immediate. For the other, start with a nonzero element killed by a and choose a maximal annihilator among nonzero elements of ker(a:M→M). Multiplication keeps this kernel invariant, so the same maximal-annihilator proof makes that annihilator prime. It contains a.

For M=R/I, the zero divisors are therefore exactly ⋃_i𝔭_i. In the embedded example, y is a zero divisor on R/I because it kills the nonzero class x, even though y lies outside the minimal prime (x). The embedded prime (x,y) is needed to record that phenomenon. The radical alone would miss it.

Primary decomposition is finite structural information under a Noetherian hypothesis. Its proof is not an algorithm for computing a decomposition from arbitrary symbolic input. The later Gröbner continuation supplies exact ideal calculations in polynomial rings, with its own input and termination conditions.

## Isolating a component by saturation

There is a single-element form of the minimal-component formula. Suppose 𝔭_i is minimal among the component radicals. For every j≠i choose s_j∈𝔭_j\𝔭_i, and put s=∏_(j≠i)s_j, with empty product one. Primality gives s∉𝔭_i. Since each s_j belongs to √Q_j, a sufficiently large common power of s lies in every Q_j for j≠i.

Then
$$Q_i=(I:s^\infty):=\bigcup_{n\geq0}(I:s^n).$$
If f∈Q_i, multiplication by a sufficiently large power of s puts f into all the other components as well, hence into I. Conversely if s^nf∈I⊆Q_i, primary cancellation by s forces f∈Q_i. This proves the equality.

The colon ideals (I:s^n) form an ascending chain. Noetherianity makes it stabilise, so in fact Q_i=(I:s^N) for one finite exponent N. The argument proves existence of N, without providing a universal numerical bound from generator degrees.

For I=(x²,xy), the minimal prime is (x), and one may choose s=y from the embedded radical (x,y) outside (x). The calculation (I:y)=(x) already isolates the minimal component at exponent one. Inverting x instead kills the entire quotient, because x lies in the radical of I; it does not isolate the embedded component. A saturation calculation must therefore specify which components its denominator is meant to retain.

For another concrete multiplicity comparison, (x²y)=(x²)∩(y) in k[x,y], by monomial divisibility. The ideal (x²) is (x)-primary because the prime element x divides a product with its usual additive factor exponent in this UFD. The ideal (y) is prime. Replacing (x²) by (x) changes the ideal to (xy) and leaves its radical unchanged. The decomposition retains which axis carries the extra power.

## 9. Exercises

### CA-06-01 — Radical of a primary ideal

Prove √Q is prime for a proper primary Q.

<details>
<summary>Hint 1</summary>

Take a power of ab that belongs to Q.

</details>
<details>
<summary>Hint 2</summary>

If a is outside √Q, every positive power of a remains outside Q.

</details>
<details>
<summary>Full solution</summary>

If ab∈√Q, choose m with a^mb^m∈Q. If a∉√Q then a^m∉Q, so primaryness gives (b^m)^n∈Q for some n. Hence b∈√Q. Properness follows because 1 cannot have a power in Q. Thus the radical satisfies the prime condition.

</details>

### CA-06-02 — Same-radical intersections

Prove the intersection of two 𝔭-primary ideals is 𝔭-primary.

<details>
<summary>Hint 1</summary>

Use cancellation by b outside 𝔭.

</details>
<details>
<summary>Hint 2</summary>

The radical of their intersection is 𝔭.

</details>
<details>
<summary>Full solution</summary>

Let Q=Q_1∩Q_2. Its radical is √Q_1∩√Q_2=𝔭. If ab∈Q and b∉𝔭, primary cancellation gives a∈Q_1 and a∈Q_2, hence a∈Q. Contrapositively, if ab∈Q and a∉Q then b∈𝔭=√Q, so a power of b lies in Q. Thus Q is primary.

</details>

### CA-06-03 — A primary rectangle

Show (x²,y³) is (x,y)-primary in k[x,y].

<details>
<summary>Hint 1</summary>

Use the quotient basis 1,y,y²,x,xy,xy².

</details>
<details>
<summary>Hint 2</summary>

The maximal ideal generated by x,y has fourth power zero.

</details>
<details>
<summary>Full solution</summary>

The quotient has the displayed six-element k-basis. Its ideal generated by x,y is nilpotent: every total-degree-four monomial has x-exponent at least two or y-exponent at least three. Elements with nonzero constant term are units by a finite geometric inverse; elements with zero constant term are nilpotent. Thus all zero divisors are nilpotent and the ideal is primary. Its radical is (x,y).

</details>

### CA-06-04 — A nonprimary ideal

Show (x²,xy) is not primary.

<details>
<summary>Hint 1</summary>

The product xy belongs to it.

</details>
<details>
<summary>Hint 2</summary>

The class of x is nonzero while no power of y belongs to the ideal.

</details>
<details>
<summary>Full solution</summary>

We have xy∈I and x∉I, but y^n∉I for every n, since every element of I is divisible by x. This violates the primary condition. Its radical is nevertheless the prime (x), so a prime radical alone does not make an ideal primary.

</details>

### CA-06-05 — Colons witness primes

Compute (I:x) and (I:y) for I=(x²,xy).

<details>
<summary>Hint 1</summary>

Use polynomial monomials or reduce after dividing the visible factor.

</details>
<details>
<summary>Hint 2</summary>

fx lies in x(x,y), whereas fy can lie there only when f has a factor x.

</details>
<details>
<summary>Full solution</summary>

Since k[x,y] is a domain, fx∈x(x,y) exactly when f∈(x,y), giving (I:x)=(x,y). If fy∈I, divisibility by x forces x to divide f, and every such f works because xy∈I. Thus (I:y)=(x). The nonzero classes x+I and y+I have precisely these annihilators.

</details>

### CA-06-06 — A moved embedded component

Prove y∈(x²,y) but y∉(x²,y−x).

<details>
<summary>Hint 1</summary>

For the second quotient substitute y=x and impose x²=0.

</details>
<details>
<summary>Hint 2</summary>

The class of x in k[x]/(x²) is nonzero.

</details>
<details>
<summary>Full solution</summary>

The first membership is by its listed generator. The quotient by (x²,y−x) is k[x]/(x²), where y maps to x≠0. Thus the second membership fails. Both ideals still have radical (x,y) and appear as embedded components of the same I after intersecting with (x).

</details>

### CA-06-07 — Minimal primes from a decomposition

Explain why every prime containing I=⋂_iQ_i contains some √Q_i.

<details>
<summary>Hint 1</summary>

The product of all components lies in their intersection.

</details>
<details>
<summary>Hint 2</summary>

If no Q_i lay in the prime, multiply one excluded element from each.

</details>
<details>
<summary>Full solution</summary>

If a containing prime 𝔭 contained none of the Q_i, choose a_i∈Q_i\𝔭. Their product belongs to Q_1⋯Q_r⊆I⊆𝔭, while primality says a product of excluded elements remains excluded, a contradiction. Thus Q_i⊆𝔭 for some i, and radicality of 𝔭 gives √Q_i⊆𝔭.

</details>

### CA-06-08 — Saturating a primary component

If Q is 𝔭-primary and s∉𝔭, prove (Q:s)=Q.

<details>
<summary>Hint 1</summary>

One inclusion is automatic by ideal absorption.

</details>
<details>
<summary>Hint 2</summary>

If sa∈Q and a∉Q, primaryness would force s into √Q.

</details>
<details>
<summary>Full solution</summary>

Always Q⊆(Q:s). For a in the colon, sa∈Q. If a were outside Q, the primary condition would put a power of s in Q, hence s∈√Q=𝔭, contrary to assumption. Therefore a∈Q. This cancellation proves contraction from R_𝔭 returns Q.

</details>

### CA-06-09 — The annihilator argument

Let Ann(m) be maximal among annihilators of nonzero elements. Prove it is prime.

<details>
<summary>Hint 1</summary>

If abm=0 but bm≠0, compare Ann(m) and Ann(bm).

</details>
<details>
<summary>Hint 2</summary>

The latter contains the former and must equal it.

</details>
<details>
<summary>Full solution</summary>

The annihilator is proper because m≠0. If ab lies in it and b does not, then bm≠0. Every element killing m kills bm, so Ann(m)⊆Ann(bm). Maximality makes them equal. Since a kills bm, a belongs to Ann(m). Thus the prime condition holds.

</details>

### CA-06-10 — An integer decomposition

Give the minimal primary decomposition of (180) in Z and identify its radicals.

<details>
<summary>Hint 1</summary>

Factor 180 into prime powers.

</details>
<details>
<summary>Hint 2</summary>

Pairwise coprime prime-power ideals have product equal to intersection.

</details>
<details>
<summary>Full solution</summary>

Since 180=4·9·5, the decomposition is (4)∩(9)∩(5). The components are primary with radicals (2),(3),(5). They are pairwise comaximal, distinct and irredundant; removing a component lowers the required divisibility. All three radicals are minimal over (180), so the components are unique.

</details>

### CA-06-11 — Primary versus irreducible

Verify (x²,xy,y²)=(x²,y)∩(x,y²).

<details>
<summary>Hint 1</summary>

For monomial ideals, membership can be checked one monomial at a time.

</details>
<details>
<summary>Hint 2</summary>

A monomial in both is divisible by x²,xy or y².

</details>
<details>
<summary>Full solution</summary>

Every generator x²,xy,y² lies in both right-side ideals. Conversely a monomial in (x²,y) is divisible by x² or y, and one in (x,y²) is divisible by x or y². Combining the alternatives yields divisibility by x²,xy or y². Since both ideals have monomial bases, the same conclusion holds termwise for every polynomial in the intersection. The right-side ideals are strictly larger, proving reducibility of the primary ideal on the left.

</details>

### CA-06-12 — What uniqueness means

Which data of a minimal primary decomposition are proved intrinsic here, and which can vary?

<details>
<summary>Hint 1</summary>

Use associated primes and the isolated-component formula.

</details>
<details>
<summary>Hint 2</summary>

Return to the family (x²,y−cx).

</details>
<details>
<summary>Full solution</summary>

The radical set is Ass(R/I), so is intrinsic. Its inclusion-minimal members are the minimal primes over I. The primary components at those primes are uniquely IR_𝔭∩R. Embedded components need not be unique: (x²,y−cx) varies with c while its radical stays (x,y) and its intersection with (x) remains (x²,xy). The theorem therefore does not claim uniqueness of every individual ideal in the decomposition.

</details>

## 10. Summary and next connection

Noetherianity gives finite irreducible ideal intersections, and annihilator stabilisation makes those components primary. Associated primes identify the radical set intrinsically; localisation identifies the unique minimal-prime components. Embedded components retain additional nonunique information that the radical omits. The next chapter studies [integral extensions](integral-extensions.md) and how primes move between different rings.
