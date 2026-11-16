
# Artinian Rings, DVRs and Dedekind Domains

Zero-dimensional Noetherian rings have finite composition length. One-dimensional normal local domains have a single uniformising parameter. Combining those facts turns global ideals in a Dedekind domain into products of prime powers. This chapter proves the connections, keeping finite length, local valuation and global ideal factorisation distinct.

Read [Noetherian modules and Nakayama](noetherian-hilbert-basis.md), [local detection](localisation.md), [primary decomposition](primary-decomposition.md) and [integral closure](integral-extensions.md). All rings are commutative with identity. A domain is nonzero, and a DVR or Dedekind domain below is not a field. Fields satisfy the corresponding trivial ideal statements separately.

## 1. Artinian rings and dimension zero

**Definition 9.1.** A module is Artinian if every descending chain of submodules stabilises. A ring is Artinian when it is Artinian as its own module. Finite length means having a finite composition series.

Submodules and quotients of an Artinian module are Artinian, by chain restriction and inverse image. In a short exact sequence, Artinianity of both ends gives it in the middle: compare the stabilising intersections and images of a descending chain exactly as in the Noetherian argument. Finite-length modules therefore satisfy both ascending and descending chain conditions.

**Theorem 9.2.** A commutative ring is Artinian exactly when it is Noetherian and every prime ideal is maximal. Such a ring has finite length as a module over itself. For a nonzero ring the prime condition says its Krull dimension is zero.

*Proof.* Suppose R is Artinian. A domain that is Artinian is a field: for 0≠a, the chain (a)⊇(a²)⊇⋯ stabilises, so a^n=a^(n+1)b and cancellation gives ab=1. Applying this to prime quotients proves every prime maximal.

There are finitely many maximal ideals. Otherwise choose distinct 𝔪_1,𝔪_2,…; their successive intersections strictly decrease. Indeed a finite product of the previous maximal ideals cannot lie in a new prime maximal ideal unless one previous maximal lies in it, forcing equality. Thus adding the new maximal makes the intersection smaller, contradicting the descending-chain condition. Let J be the intersection of this finite set, the Jacobson radical and nilradical.

We next prove J nilpotent without assuming R Noetherian. Its powers stabilise at K=J^n. If K≠0, then K²=K. Choose an ideal L minimal among those with KL≠0, possible by the descending-chain condition. Some x∈L has Kx≠0, so minimality gives L=(x). Also K(KL)=KL≠0, so the ideal KL in the same family equals L by minimality. Therefore JL=L. Nakayama applies to the cyclic module L and forces L=0, a contradiction. Thus K=0.

Chinese remainders give R/J as a finite product of residue fields. Each layer J^i/J^(i+1) is an Artinian module over that product, and has finite dimension over each field factor: an infinite-dimensional vector space has a strictly descending subspace chain, obtained by removing successive basis vectors. Thus every layer has finite length. The finite J-power filtration gives R finite length and hence Noetherian.

Conversely, let R be Noetherian with all primes maximal. Its spectrum has finitely many irreducible components; since every prime is maximal, those components are singletons. Thus there are finitely many maximal ideals. Its nilradical J is nilpotent by Noetherianity, and R/J is their finite product of residue fields. Every layer J^i/J^(i+1) is finitely generated and killed by J, hence finite-dimensional over those finitely many fields and finite length. The finite filtration makes R finite length, hence Artinian. The zero ring is immediate. ∎

## 2. Product decomposition and length

For the distinct maximal ideals 𝔪_i of an Artinian ring, choose N with J^N=0. Distinct maximal ideals are comaximal, as are their N-th powers: expand a sufficiently high power of a+b=1 with a,b in the two ideals. Thus
$$0=J^N=\prod_i\mathfrak m_i^N=\bigcap_i\mathfrak m_i^N.$$
Chinese remainders give
$$R\cong\prod_i R/\mathfrak m_i^N\cong\prod_i R_{\mathfrak m_i}.$$
Each factor has just one prime and is local Artinian. The localisation identification follows because the other factors are killed and every element outside the retained maximal ideal is a unit in that factor.

Length counts simple module factors, with uniqueness supplied by the Jordan–Hölder argument for modules. In a local Artinian ring with residue field k, each simple factor is k, and
$$\operatorname{length}_R R
=\sum_{i\geq0}\dim_k\mathfrak m^i/\mathfrak m^{i+1}.$$
If the ring is a finite-dimensional algebra over k with that same residue field, this is also its k-dimension.

**Worked example.** In k[t]/(t³(t−1)²), the two factors are comaximal, so the ring is k[t]/(t³)×k[t]/((t−1)²). The local lengths are three and two, with residue field k in both cases. The total length and k-dimension are five. There are two prime points, not five; the extra length records nilpotent thickness.

## 3. Discrete valuations

**Definition 9.3.** A discrete valuation on a field K is a surjection v:K^×→Z with
v(ab)=v(a)+v(b) and v(a+b)≥min(v(a),v(b)) when a+b≠0. Its valuation ring is R={0}∪{a:v(a)≥0}. A DVR is a ring arising this way.

Choose π with v(π)=1, a uniformiser. Every nonzero element of R is uniquely π^n times a unit as far as the exponent n is concerned. A nonzero ideal has a least valuation n among its elements, so is exactly (π^n). Thus a DVR is a local PID, Noetherian, with unique nonzero prime (π), and dimension one.

It is integrally closed. If x∈K has v(x)<0, then in a proposed monic relation x^n+a_1x^(n−1)+⋯+a_n=0, the first term has strictly smaller valuation than every other term because v(a_i)≥0. A sum with a unique least-valuation term cannot be zero: dividing by that term gives one plus elements of positive valuation, a unit. Hence no such integral x lies outside R.

## 4. The normal local criterion

**Theorem 9.4.** A one-dimensional Noetherian integrally closed local domain is a DVR.

*Proof.* Let its maximal ideal be 𝔪. Choose 0≠a∈𝔪. Every prime of R containing a is nonzero and therefore 𝔪, so R/(a) is Noetherian of dimension zero and Artinian. Its nilradical is nilpotent, yielding 𝔪^n⊆(a) for some n. Choose n minimal and b∈𝔪^(n−1) outside (a). Then x=b/a lies in K\R and x𝔪⊆R.

If x𝔪⊆𝔪, multiplication by x preserves the finitely generated faithful module 𝔪. The determinant trick gives a monic polynomial in x killing 𝔪. Since R is a domain and 𝔪≠0, that polynomial is zero in K. Thus x is integral and normality puts x in R, a contradiction.

Therefore some c∈𝔪 has xc outside 𝔪 and hence a unit. For every d∈𝔪, xd∈R and
d=c(xd)/(xc), so 𝔪=(c).

Finally no nonzero a can belong to every (c^n). Otherwise a_n=a/c^n∈R gives an ascending chain of principal ideals (a_n). Once it stabilises, a_(n+1)=ra_n and a_n=ca_(n+1), giving 1=cr by domain cancellation, contradicting c∈𝔪. Thus every nonzero a has a largest n with a∈(c^n), and then a=c^nu with u outside 𝔪, a unit.

Define v(a/b) as the difference of those exponents. Multiplicativity of unit-factor expressions makes it well defined and additive. Factoring the smaller c-power from a sum gives the valuation inequality. The map is onto Z because v(c)=1, and R is exactly its nonnegative part. ∎

The proof uses Noetherianity both for the determinant module and for the ascending principal-ideal chain. It uses dimension one to make R/(a) Artinian, and integral closure to rule out the missing element x.

## 5. Worked examples: two parameter rings and a singularity

The ring k[t]_(t) is a DVR. Every polynomial is t^n times a polynomial with nonzero constant term, and every allowed denominator has nonzero constant term. Thus the valuation is order of vanishing at zero, with fraction field k(t).

The formal power-series ring k[[t]] is also a DVR, with the least nonzero coefficient index as valuation and fraction field k((t)), the formal Laurent series with finitely many negative powers. Every nonzero ideal has an element of minimum valuation and equals its generated t-power ideal. This proves its Noetherianity directly, without assuming it from the notation.

In contrast, A=k[t²,t³]_(t²,t³) is not a DVR. It is Noetherian and one-dimensional by its finite integral extension to k[t] and the dimension theorem. The integral element t lies in its fraction field but not in A: a proposed expression t=f(t²,t³)/g(t²,t³) with g having nonzero constant term would give a nonzero degree-one coefficient in tg, while f has none. Thus normality fails. Its maximal ideal needs the two generators t²,t³, consistent with the DVR criterion.

## 6. Dedekind domains and ideal factorisation

**Definition 9.5.** A Dedekind domain is a Noetherian integrally closed domain of dimension one. Every localisation R_𝔭 at a nonzero prime is a DVR: localisation preserves Noetherianity and integral closure, and its only primes are (0) and 𝔭R_𝔭.

**Theorem 9.6.** Every nonzero proper ideal I in a Dedekind domain has a unique factorisation
$$I=\prod_{\mathfrak p}\mathfrak p^{e_{\mathfrak p}},$$
with finitely many positive exponents, indexed by nonzero prime ideals.

*Proof.* R/I is Noetherian with all primes maximal, since a containing prime is nonzero. It is Artinian, so only finitely many maximal ideals contain I. For each such 𝔭, the DVR ideal I_𝔭 is a unique positive power of the maximal ideal, say 𝔭^(e_𝔭)R_𝔭. Put exponent zero at all other maximal primes and form the finite product J.

At a maximal 𝔮, every different prime 𝔭 extends to the unit ideal: choose an element of 𝔭 outside 𝔮. Thus J_𝔮=I_𝔮. Equality of ideals is detected locally, by applying module detection to (I+J)/I and (I+J)/J. Hence I=J.

Any other factorisation localises at 𝔭 to its corresponding DVR power, whose exponent is unique. Thus every exponent agrees. ∎

The unit ideal has the empty product factorisation. The zero ideal is excluded. Unique prime-ideal factorisation does not assert that each prime is principal or that every element has a unique factorisation into prime elements.

## 7. Worked example: a Gaussian ideal

The Gaussian integers Z[i] are Euclidean for norm a²+b²: approximate the real and imaginary parts of a quotient by nearest integers, leaving a remainder of norm at most half the divisor norm. Thus they are a PID, hence a Noetherian integrally closed domain whose nonzero primes are maximal, and therefore Dedekind.

The earlier splitting calculation gave (2)=(1+i)² and showed (3) prime. Hence
$$(12)=(1+i)^4(3).$$
The valuation exponents are four at (1+i), one at (3), and zero elsewhere. The residue fields have sizes two and nine. The quotient size is consequently 2⁴·9=144, also seen directly from the two integer coordinates modulo twelve.

Localising at (1+i) turns three into a unit and retains only the fourth uniformiser power. Localising at (3) turns 1+i into a unit and retains only the first power. The global product is assembled from exactly those local exponents.

## Fractional ideals and invertibility

A nonzero fractional ideal is a nonzero finitely generated R-submodule F of K=Frac R with dF⊆R for some 0≠d∈R. A finite generator list always permits a common denominator. Define
$$I^{-1}=\{x\in K:xI\subseteq R\}$$
for a nonzero integral ideal I. Choosing 0≠a∈I puts I^(−1) inside a^(−1)R, so Noetherianity makes it a finite fractional ideal.

Localising this construction gives (I^(−1))_𝔭=(I_𝔭)^(−1). For the nontrivial inclusion, a local multiplier satisfies its finitely many required conditions on a finite generator list of I after individual denominator clearings; multiplying those denominators gives one common denominator outside 𝔭. The resulting global multiplier belongs to I^(−1).

In each DVR the inverse of (π^e) is the fractional ideal (π^(−e)), so (II^(−1))_𝔭=R_𝔭 at every maximal prime. Local detection gives II^(−1)=R. Thus every nonzero ideal of a Dedekind domain is invertible, even when it is not principal.

Fractional ideals form an abelian group under multiplication. Their prime exponents are integers: write F=d^(−1)J and subtract the exponents of the principal ideal (d) from those of J. The quotient by the subgroup of nonzero principal fractional ideals is the ideal class group. Its definition measures the global obstruction to choosing one generator, without asserting a finiteness theorem for an arbitrary Dedekind domain.

Idempotents can be lifted through a nilpotent ideal by an explicit correction. If the error a=e²−e lies in that ideal, then v=2e−1 is invertible because v²=1+4a and a finite geometric sum in the nilpotent 4a inverts the latter. Replace e by e−a divided by v. Expanding its square minus itself gives a² divided by v², so the error has squared. Repeating finitely many times kills the error, producing an idempotent with the original residue. The lift is unique in a commutative ring: if two idempotents have the same residue, the products of one with one minus the other are idempotent elements of the nilpotent ideal, and must be zero. The two idempotents consequently agree. This explains how the component selectors of the reduced Artinian quotient determine selectors in the original ring while preserving its nilpotent thickness.

## 8. Exercises

### CA-09-01 — Artinian domains

Prove an Artinian domain is a field.

<details>
<summary>Hint 1</summary>

Apply descending-chain termination to powers of a nonzero principal ideal.

</details>
<details>
<summary>Hint 2</summary>

Cancel the nonzero power in a^n=a^(n+1)b.

</details>
<details>
<summary>Full solution</summary>

For 0≠a, stabilisation gives (a^n)=(a^(n+1)), so a^n=a^(n+1)b for some b. Since a^n≠0 in a domain, cancellation gives ab=1. Thus every nonzero element is a unit and the domain is a field. Cancellation is the step that prevents this argument from applying to arbitrary Artinian rings.

</details>

### CA-09-02 — Two local lengths

Find the length and number of prime points of k[t]/(t²(t−1)⁴).

<details>
<summary>Hint 1</summary>

Use the coprime factors t² and (t−1)⁴.

</details>
<details>
<summary>Hint 2</summary>

Each truncated local factor has one residue-field factor per power.

</details>
<details>
<summary>Full solution</summary>

Chinese remainders give k[t]/(t²)×k[t]/((t−1)⁴). Their lengths are two and four, so the total is six. Each has one prime, hence the spectrum has two points. The k-dimension is six because both residue fields are k. Length and point count measure different data.

</details>

### CA-09-03 — The DVR ideals

Show every nonzero ideal in a discrete valuation ring is a power of its maximal ideal.

<details>
<summary>Hint 1</summary>

Take the least valuation among nonzero ideal elements.

</details>
<details>
<summary>Hint 2</summary>

An element of that valuation is a unit times the corresponding uniformiser power.

</details>
<details>
<summary>Full solution</summary>

Choose a∈I with minimum valuation n. Write a=π^nu with u a unit, so π^n∈I and (π^n)⊆I. Every element of I has valuation at least n and therefore belongs to (π^n). Thus equality holds. The well-ordering of the nonnegative integers is essential to the minimum argument.

</details>

### CA-09-04 — A negative valuation is nonintegral

Explain why an element of negative DVR valuation cannot satisfy a monic equation over the valuation ring.

<details>
<summary>Hint 1</summary>

Compare the leading term's valuation with every other term.

</details>
<details>
<summary>Hint 2</summary>

A unique least-valuation summand cannot cancel.

</details>
<details>
<summary>Full solution</summary>

For v(x)<0, the leading x^n has valuation nv(x). Every a_ix^(n−i) has valuation at least (n−i)v(x), strictly larger. Dividing the proposed zero sum by x^n gives one plus elements of positive valuation. That sum is a unit and cannot be zero. Hence x is not integral.

</details>

### CA-09-05 — Finite powers cannot contain everything

In a Noetherian local domain with maximal ideal (π), prove ⋂_(n≥0)(π^n)=0.

<details>
<summary>Hint 1</summary>

For a proposed nonzero a in the intersection, form a_n=a/π^n.

</details>
<details>
<summary>Hint 2</summary>

Use ascending-chain termination on the ideals (a_n).

</details>
<details>
<summary>Full solution</summary>

The elements a_n belong to R and satisfy a_n=πa_(n+1), so (a_n) ascend. At stabilisation, a_(n+1)=ra_n. Combining gives a_n=πra_n. Since a_n≠0 in the domain, πr=1, impossible for π in the maximal ideal. Thus no nonzero a lies in every power.

</details>

### CA-09-06 — A local exponent

In Z_(3), find the valuation of 72/5 and the ideal it generates.

<details>
<summary>Hint 1</summary>

Seventy-two has exactly two factors of three.

</details>
<details>
<summary>Hint 2</summary>

The remaining numerator and denominator are units.

</details>
<details>
<summary>Full solution</summary>

We have 72/5=3²·(8/5), and 8/5 is a unit in Z_(3), since both integers are coprime to three. Thus the valuation is two and its ideal is (3²)=(9). The ordinary numerical size of the fraction is irrelevant; valuation measures divisibility at the chosen prime.

</details>

### CA-09-07 — A Dedekind quotient

Why is R/I Artinian for nonzero I in a Dedekind domain?

<details>
<summary>Hint 1</summary>

The quotient is Noetherian.

</details>
<details>
<summary>Hint 2</summary>

A prime containing I is nonzero and hence maximal.

</details>
<details>
<summary>Full solution</summary>

Quotienting preserves Noetherianity. Every prime of R/I corresponds to a prime of R containing the nonzero ideal I, so is a nonzero prime. Dimension one in a domain makes every such prime maximal. The Artinian criterion therefore applies. This also proves only finitely many primes contain I.

</details>

### CA-09-08 — Uniqueness of ideal exponents

Show a prime-power product factorisation in a Dedekind domain has unique exponents.

<details>
<summary>Hint 1</summary>

Localise at one prime.

</details>
<details>
<summary>Hint 2</summary>

Every other prime factor becomes the unit ideal.

</details>
<details>
<summary>Full solution</summary>

At 𝔭, all factors from distinct maximal primes extend to the unit ideal. The product becomes exactly 𝔭^eR_𝔭 in a DVR. Distinct powers there are distinguished by valuation, so comparing two factorisations forces their 𝔭-exponents equal. Repeat for every prime appearing in either finite product.

</details>

### CA-09-09 — A missing normality hypothesis

Explain why the local cusp ring does not satisfy the DVR criterion despite being Noetherian and one-dimensional.

<details>
<summary>Hint 1</summary>

The fraction t=t³/t² is available in its fraction field.

</details>
<details>
<summary>Hint 2</summary>

It is integral but cannot be represented by a fraction with denominator nonzero at the origin.

</details>
<details>
<summary>Full solution</summary>

The element t satisfies T²−t²=0 over the cusp ring. If t=f/g there with g having nonzero constant term, then tg has a nonzero degree-one coefficient while f, a polynomial in t²,t³, has none. This contradiction shows t is missing. Thus the local ring is not integrally closed, the failed hypothesis in Theorem 9.4.

</details>

### CA-09-10 — Gaussian valuation data

Factor the ideal (18) in Z[i] using the prime ideals over two and three.

<details>
<summary>Hint 1</summary>

Eighteen is two times nine.

</details>
<details>
<summary>Hint 2</summary>

Use (2)=(1+i)² and primality of (3).

</details>
<details>
<summary>Full solution</summary>

The factorisation is (18)=(1+i)²(3)². At the Gaussian prime (1+i) the exponent is two; at (3) it is two. The quotient size is 2²·9²=324, matching the 18² residue pairs in the integer-coordinate model. The two exponents refer to distinct prime ideals with different residue-field sizes.

</details>

### CA-09-11 — Artinian need not be reduced

Give a local Artinian ring with nonzero nilradical and calculate its length.

<details>
<summary>Hint 1</summary>

Use k[t]/(t^r), r≥2.

</details>
<details>
<summary>Hint 2</summary>

Filter by powers of t.

</details>
<details>
<summary>Full solution</summary>

R=k[t]/(t^r) is finite-dimensional and local with maximal ideal (t), whose r-th power is zero. Its nilradical is the nonzero ideal (t). The chain 0<(t^(r−1))<⋯<(t)<R has r successive factors isomorphic to k, so its length is r. Artinianity controls descending chains but does not remove nilpotent thickness.

</details>

### CA-09-12 — What ideal factorisation says

Does unique prime-ideal factorisation prove a Dedekind domain is a PID? Explain the missing assertion.

<details>
<summary>Hint 1</summary>

The factors in the theorem are ideals.

</details>
<details>
<summary>Hint 2</summary>

A prime ideal need not have a chosen single generator.

</details>
<details>
<summary>Full solution</summary>

No. The theorem expresses each nonzero ideal as a product of prime ideals and makes their exponents unique. It does not assert those prime ideals are principal. A PID would require every such ideal to have one generator, a stronger statement. The local DVR rings have principal ideals, but their local generators need not combine into a single global generator. The factorisation proof only combined local exponents.

</details>

## 9. Summary and next connection

Artinian commutative rings are exactly the Noetherian rings with all primes maximal, and decompose into finitely many local finite-length pieces. One-dimensional normal Noetherian local domains are DVRs, where every ideal is a uniformiser power. Local detection then assembles those exponents into unique Dedekind prime-ideal factorisation. The next chapter develops [tensor products and flatness](tensor-products-flatness.md), explaining exactness properties beyond localisation.
