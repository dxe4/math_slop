var e=`---
parent_id: book-commutative-algebra
chapter_id: regular-cohen-macaulay
title: "Regular and Cohen–Macaulay Rings"
level: graduate
status: draft
license: CC BY-SA 4.0
---

# Regular and Cohen–Macaulay Rings

Dimension measures chains of prime ideals. Depth measures how long we can successively divide by elements without creating a kernel. These measurements agree for polynomial coordinates, but embedded components can force depth to fall even when the underlying dimension stays positive. Regularity asks a different question: whether the maximal ideal needs only as many generators as the dimension predicts.

Read [associated primes](primary-decomposition.md), [Nakayama's lemma](noetherian-hilbert-basis.md), [Krull intersection](completions-artin-rees.md), [dimension](dimension-theory.md) and [Hilbert growth](hilbert-polynomials.md). Throughout, (R,𝔪,k) is a commutative Noetherian local ring and M is a nonzero finitely generated R-module. These assumptions are part of each local assertion, including the permutation and depth statements. The general regular-local structure theorem is explicitly identified as an imported theorem below; elementary examples and the regular-sequence arguments are proved here.

## 1. Regular elements and successive quotients

An element x is M-regular if multiplication by x on M is injective. An M-regular sequence x₁,…,x_s consists of elements of 𝔪 such that xᵢ is regular on M/(x₁,…,xᵢ₋₁)M. These quotients are nonzero: if a finite nonzero module equalled its multiple by an ideal in 𝔪, Nakayama's lemma would make it zero. The empty sequence is allowed.

The condition concerns successive quotients, rather than asking only that each xᵢ be regular on the original module. In the domain k[x,y]_(x,y), both x and xy are individually nonzerodivisors. But after quotienting by x, the element xy is zero, so (x,xy) is not a regular sequence. In contrast (x,y) is regular because its first quotient is k[y]_(y), where y remains a nonzerodivisor.

For any finite module, the zero divisors are the union of its finitely many associated primes, as proved in the primary-decomposition chapter. In particular a regular element avoids every minimal prime of the module's support, since those primes are associated. This connects injectivity to prime chains and gives the needed finite bound on sequence length.

**Lemma 14.1 (Dimension decreases).** If x∈𝔪 is M-regular, then
$$0\\leq\\dim(M/xM)\\leq\\dim M-1.$$

*Proof.* Local Nakayama ensures the quotient is nonzero. Its support is Supp M intersected with V(x): after localising, if x is a unit the quotient vanishes, whereas at a prime containing x, Nakayama gives nonvanishing whenever M remains nonzero. Consider a prime chain in this intersection. Under its first prime choose a minimal prime P of Supp M. Since x avoids P but belongs to the first prime, this containment is strict. Prepending P therefore increases the chain length by one inside Supp M. Taking suprema proves the upper bound. ∎

Consequently any M-regular sequence has length at most dim M. Define depth_R M to be the largest length of such a sequence. The upper bound makes this maximum a finite integer, and the empty sequence ensures the collection is nonempty. We call M Cohen–Macaulay when depth_R M=dim M. The ring R is Cohen–Macaulay when it is so as a module over itself. We do not assume that the ring is a domain or reduced.

## 2. Depth zero and embedded obstructions

**Proposition 14.2.** The following are equivalent: depth M=0; 𝔪∈Ass M; and the socle {m∈M:𝔪m=0} is nonzero.

*Proof.* The last condition gives an element with annihilator exactly 𝔪, since its annihilator is proper and contains the maximal ideal. Conversely an associated element with annihilator 𝔪 lies in the socle.

If 𝔪 is associated, every element of 𝔪 kills that same nonzero element, so no first regular element exists. Conversely if no element of 𝔪 is regular, the zero-divisor description gives 𝔪⊆⋃Ass M. Finite prime avoidance places 𝔪 inside one of those primes, which must then equal 𝔪.

For completeness, finite prime avoidance for prime ideals follows after deleting any primes contained in others. The remaining primes Pᵢ are incomparable. If an ideal I is contained in none, choose aᵢ∈I outside Pᵢ. For each i choose bᵢ in every other Pⱼ but outside Pᵢ, by multiplying choices from Pⱼ outside Pᵢ. Then Σaᵢbᵢ lies in I and outside every Pᵢ: modulo Pᵢ all terms except its i-th term vanish and that term is nonzero. This contradicts containment in their union. The single-prime case uses just a₁. ∎

Thus positive depth is an actual existence statement about a nonzerodivisor in the maximal ideal. A reduced-looking topological component picture is not sufficient: an embedded associated maximal ideal can obstruct every possible first choice.

## 3. Local permutation of a regular sequence

**Theorem 14.3.** Any permutation of an M-regular sequence is M-regular.

*Proof.* It suffices to exchange adjacent elements. Work in the finite quotient by the preceding elements, so the pair is x,y with x regular on M and y regular on M/xM. If ym=0, reduction modulo x gives m=xm₁. Injectivity of x then gives ym₁=0. Repeating yields m∈xⁿM for every n. Krull intersection for the ideal (x)⊆𝔪 gives m=0, so y is regular on M.

Now suppose xm=yn. Modulo xM, regularity of y gives n=xn₁. Hence x(m−yn₁)=0, and regularity of x gives m=yn₁. Thus x is regular modulo yM. The quotient by the two elements is unchanged, so all later sequence conditions still hold. Nonzero quotients follow from Nakayama. Adjacent transpositions generate every permutation, proving the theorem. ∎

The Krull-intersection step uses locality, finite generation and an ideal in the Jacobson radical. Removing those hypotheses from this proof is invalid. Permutation is also stronger than saying that the final ideal does not depend on order: injectivity at intermediate stages had to be established.

A useful power variant can be proved directly for a pair. If x,y is regular, so is xᵃ,y for every positive a. Multiplication by xᵃ is injective. The filtration of M/xᵃM by powers of x has successive factors isomorphic to M/xM, because x is injective. Since y is injective on each factor, induction through that finite filtration makes it injective on M/xᵃM. Replacing y by a positive power preserves this injectivity too. Thus xᵃ,yᵇ is regular for positive a,b. This gives many nonreduced complete-intersection examples without confusing nilpotents in a final quotient with earlier failures of injectivity.

## 4. Regular local rings and explicit coordinates

The embedding dimension of R is dim_k 𝔪/𝔪². Nakayama shows it equals the minimum number of generators of 𝔪: lifts of a vector-space basis generate, and any generating set must span the quotient. A Noetherian local ring is called regular local when this number equals dim R.

**Worked example 14.4.** Let R=k[x₁,…,x_d]_(x₁,…,x_d). Its dimension is d by the coordinate chain and polynomial upper bound proved earlier. The residue classes of the variables form a basis of 𝔪/𝔪²: a nonzero linear polynomial cannot belong to the square, even after localisation, because multiplying by a denominator with nonzero constant term preserves its nonzero linear term. Thus R is regular local.

Successively quotienting by these variables gives the same kind of polynomial local ring in fewer variables. Each next variable is a nonzerodivisor in that domain. The full sequence has length d, so depth is at least d, and Lemma 14.1 bounds it by d. Hence R is Cohen–Macaulay. This is a complete direct proof for these coordinate local rings over every field.

For arbitrary regular local rings, we record the precise standard input rather than silently treat coordinate arguments as universal.

**Named theorem import: regular-local associated graded structure.** If R is Noetherian local, dim R=d and dim_k 𝔪/𝔪²=d, then any minimal generating set x₁,…,x_d of 𝔪 induces an isomorphism
$$k[X_1,\\ldots,X_d]\\longrightarrow\\operatorname{gr}_{\\mathfrak m}R,
\\qquad X_i\\longmapsto\\operatorname{in}(x_i).$$
This general structure theorem is a classical regular-local-ring theorem, as treated in the commutative-algebra references in the book's bibliography. Its general proof requires an additional local dimension theorem; the previous chapter proved the graded growth theorem and did not claim that local theorem. The structure statement is an explicit import here. The following consequences are proved from its stated conclusion.

**Proposition 14.5.** Under that associated-graded isomorphism, x₁,…,x_d is an R-regular sequence; therefore every regular local ring is Cohen–Macaulay, using the named theorem.

*Proof.* A nonzero element has a finite 𝔪-adic order by Krull intersection. If x₁a=0 for nonzero a, the initial product X₁in(a) would be zero in a polynomial domain, a contradiction. Moreover the initial ideal of (x₁) is exactly (X₁): every product x₁a has order one greater than a, with initial term X₁in(a). This identifies the associated graded ring of R/(x₁) with the polynomial ring in X₂,…,X_d. Explicitly, an element's initial class lies in the kernel of the quotient graded map exactly when it differs from an element of (x₁) by a higher-order element, giving the indicated initial ideal.

Repeat in each quotient to obtain injectivity of the next variable. These quotients are finite local modules and remain nonzero by Nakayama. The resulting regular sequence has length d; the dimension bound gives equality with depth. ∎

Regularity and Cohen–Macaulayness are consequently related, but their definitions measure different data. We now give fully proved examples showing that the converse fails, even for reduced domains.

## 5. A singular domain that is Cohen–Macaulay

**Worked example 14.6 (The cusp).** Let
$$A=\\bigl(k[x,y]/(y^2-x^3)\\bigr)_{(x,y)}.$$
The substitution x=t²,y=t³ injects the polynomial quotient into k[t]. Indeed division by the monic polynomial y²−x³ leaves a unique form a(x)+yb(x). After substitution its two parts have respectively even exponents and odd exponents at least three. They cannot cancel, so zero implies both a and b zero. The quotient is a domain over every field, including characteristics two and three.

Its affine dimension is one by the plane-hypersurface result. Localisation cannot increase dimension, while its maximal ideal is nonzero and the ring is a domain, giving a chain from zero of length one. Thus dim A=1. The element x is nonzero and hence regular. Depth is at least one and at most dimension, so A is Cohen–Macaulay.

On the other hand 𝔪/𝔪² has basis x,y. The defining relation has no linear term, and localisation at a denominator with nonzero constant term cannot create a new linear relation. Therefore embedding dimension is two and A is not regular local. Its positive depth does not remove its singularity. Quotienting by the regular element x gives k[y]_(y)/(y²), a length-two nonreduced ring: a regular element can have a nonreduced quotient without being a zero divisor in the original ring.

## 6. A reduced crossing and an embedded point

**Worked example 14.7 (A crossing).** For B=(k[x,y]/(xy))_(x,y), dimension is one and embedding dimension is two by the same arguments. The ideals (x) and (y) are prime, and (xy)=(x)∩(y) in the polynomial ring: divisibility by both coprime irreducibles forces divisibility by their product. This is a reduced primary decomposition, preserved by localisation. Its associated primes are exactly the two component primes.

The element x+y belongs to neither prime. Hence it is a nonzerodivisor by the associated-prime criterion. The ring is therefore Cohen–Macaulay of dimension one, despite not being a domain and not being regular. Quotienting by x+y gives k[x]_(x)/(x²), again of length two. Choosing x alone would fail because xy=0 with y nonzero. The choice of a regular parameter must meet both components correctly.

**Worked example 14.8 (An embedded point).** Change the ideal to (x²,xy), and localise at (x,y). Its radical is (x), so dimension is still one. The class of x is nonzero: multiplication by a polynomial with nonzero constant term cannot put x into (x²,xy), as comparison of the linear term shows. Yet both generators of the maximal ideal kill x. Its socle is therefore nonzero, giving depth zero by Proposition 14.2. This ring is not Cohen–Macaulay.

The crossing and embedded-point examples both have small homogeneous equations, but their nonzerodivisor behaviour differs decisively. The previous chapter's Hilbert function detects the extra finite-degree term contributed by the embedded x. The present socle calculation explains why that contribution obstructs every regular first parameter at the origin.

## 7. What a full sequence proves about its quotients

Suppose dim M=d and x₁,…,x_d is an M-regular sequence. For N=M/(x₁,…,x_r)M, the remaining elements form an N-regular sequence of length d−r, giving dim N≥depth N≥d−r. Applying Lemma 14.1 r times gives dim N≤d−r. Thus equality holds throughout: N is Cohen–Macaulay of dimension d−r. This is a proved prefix statement for a given full sequence. It does not assume without proof that every possible partial regular sequence extends in an identical way.

For the coordinate two-variable local ring, xᵃ,yᵇ is a full regular sequence by the power argument. Its final quotient has basis xⁱyʲ for i<a,j<b and length ab, so it is a zero-dimensional Cohen–Macaulay ring, usually nonreduced. In dimension zero the depth bound already forces depth zero. Thus every nonzero Noetherian local ring of dimension zero is Cohen–Macaulay; regularity in that dimension instead forces a field. Indeed embedding dimension zero gives 𝔪=𝔪², hence 𝔪=0 by Nakayama.

## 8. Exercises

### CA-14-01 — Individual regularity is insufficient

In k[x,y]_(x,y), show x and xy are individually regular but do not form a regular sequence in that order.

<details><summary>Hint 1</summary>
Use the domain property before taking a quotient.
</details>
<details><summary>Hint 2</summary>
Reduce the second element modulo x.
</details>
<details><summary>Solution</summary>
Localisation of the polynomial domain is a domain, and both polynomials are nonzero, so multiplication by either is injective. The quotient by x is the nonzero ring k[y]_(y). In it the element xy has image zero, whose multiplication kills the entire quotient. Thus the second required injectivity fails. The example isolates the successive-quotient requirement in the definition; merely choosing several nonzero elements of a domain does not supply it.
</details>

### CA-14-02 — A zero-dimensional example

For R=k[ε]/(ε³), compute dimension, embedding dimension and depth. Is it regular? Is it Cohen–Macaulay?

<details><summary>Hint 1</summary>
Its unique prime and maximal ideal is generated by ε.
</details>
<details><summary>Hint 2</summary>
The nonzero element ε² is killed by that ideal.
</details>
<details><summary>Solution</summary>
Every prime contains the nilpotent ε, so the only prime is (ε), giving dimension zero. The maximal ideal modulo its square is one-dimensional, generated by the class of ε, so embedding dimension is one. The socle contains ε², and depth is zero. The ring is Cohen–Macaulay because depth equals dimension. It is not regular because embedding dimension differs from dimension. Nilpotents do not contradict Cohen–Macaulayness in dimension zero.
</details>

### CA-14-03 — A regular parameter on a crossing

In B from Example 14.7, determine which linear elements ax+by, with a,b∈k, are regular.

<details><summary>Hint 1</summary>
Use the two associated component primes.
</details>
<details><summary>Hint 2</summary>
Reduce the element on each component separately.
</details>
<details><summary>Solution</summary>
Modulo (x) the element is by and modulo (y) it is ax. It avoids both primes exactly when a and b are both nonzero. The zero-divisor criterion therefore gives precisely those regular linear elements. If a=0, multiplication by x kills by; if b=0, multiplication by y kills ax, with the zero element failing as well. The criterion works over F₂, where x+y supplies the single linear choice with both coefficients nonzero.
</details>

### CA-14-04 — A socle obstruction

For R=(k[x,y]/(x²,xy))_(x,y), prove directly that no element of its maximal ideal is regular.

<details><summary>Hint 1</summary>
Use the nonzero class of x.
</details>
<details><summary>Hint 2</summary>
An element of the local maximal ideal is a combination of x and y with coefficients in R.
</details>
<details><summary>Solution</summary>
The class of x remains nonzero after localisation, as the linear-term argument in the text proves. Every element u of the maximal ideal can be written u=rx+sy. Then ux=rx²+syx=0. The same nonzero element x is therefore a kernel witness for multiplication by every possible u. This proves depth zero without needing to choose a candidate regular parameter or run through infinitely many elements. Since dimension is one, the ring is not Cohen–Macaulay.
</details>

### CA-14-05 — Minimal generators

Show that a set of elements of 𝔪 minimally generates 𝔪 exactly when their classes form a basis of 𝔪/𝔪².

<details><summary>Hint 1</summary>
Apply Nakayama to the quotient by their generated ideal.
</details>
<details><summary>Hint 2</summary>
A linearly dependent spanning set has a removable vector.
</details>
<details><summary>Solution</summary>
If the classes span, the quotient of 𝔪 by the generated submodule equals its multiple by 𝔪, so Nakayama makes it zero. Thus the lifts generate. If their classes are dependent, remove one while retaining a spanning set; the remaining lifts still generate, contradicting minimality. Conversely a basis spans and hence its lifts generate, while removing any vector destroys spanning and therefore destroys generation. Finiteness of 𝔪 as a module is supplied by Noetherianity and is required in this application of Nakayama.
</details>

### CA-14-06 — Powers of coordinates

Prove x³,y² is regular in k[x,y]_(x,y), and determine the length of the final quotient.

<details><summary>Hint 1</summary>
Apply the two-element power lemma to x,y.
</details>
<details><summary>Hint 2</summary>
Count surviving monomials in the final quotient.
</details>
<details><summary>Solution</summary>
The coordinate pair x,y is regular, so the proved power lemma gives x³,y² regular. The final quotient is finite-dimensional with basis 1,x,x²,y,xy,x²y. No monomial in this list belongs to the defining monomial ideal, and division by the two powers spans all residues, proving both independence and completeness. Localisation changes nothing because elements with nonzero constant term are already units in this finite local quotient. Its length is six, although its dimension and depth are zero.
</details>

### CA-14-07 — A quotient of the cusp

For the cusp ring A, compute A/xA and explain why its nonreducedness does not disprove regularity of x on A.

<details><summary>Hint 1</summary>
Set x equal to zero in the defining equation.
</details>
<details><summary>Hint 2</summary>
Injectivity is measured before quotienting.
</details>
<details><summary>Solution</summary>
The quotient is k[y]_(y)/(y²), with basis one,y and length two. The class y is a nonzero nilpotent there. But A itself embeds in k[t], so it is a domain and its nonzero element x=t² acts injectively. Quotienting creates the relation y²=0 because the original equation y²=x³ now has zero right side. A nonzerodivisor need not generate a radical ideal, and regular elements are not defined by reducedness of their quotient.
</details>

### CA-14-08 — Permuting a pair

In the proof of Theorem 14.3, explain exactly where finite generation and locality are used to show y is regular on M.

<details><summary>Hint 1</summary>
Trace the iteration m=xm₁=x²m₂=⋯ .
</details>
<details><summary>Hint 2</summary>
Membership in every ideal power alone does not universally force zero.
</details>
<details><summary>Solution</summary>
The regularity hypotheses imply that a vector killed by y belongs to every xⁿM. To deduce that it is zero, the proof uses Krull intersection for a finite module over a Noetherian local ring and an ideal (x) contained in the maximal ideal. That theorem supplies the zero intersection. Local Nakayama also ensures intermediate quotients remain nonzero. Merely observing that the quotients by the two-element ideal are equal would not prove either injectivity statement or replace these hypotheses.
</details>

### CA-14-09 — Prefixes of a full sequence

Let M have dimension four and admit a regular sequence of length four. Determine the dimension and depth of its quotient by the first two elements.

<details><summary>Hint 1</summary>
The remaining two elements are regular on the quotient.
</details>
<details><summary>Hint 2</summary>
Combine the lower bound from depth with the two dimension decreases.
</details>
<details><summary>Solution</summary>
The quotient is nonzero by Nakayama. Its remaining regular sequence gives depth at least two, hence dimension at least two. Applying Lemma 14.1 at each of the first two steps bounds its dimension by four minus two. Therefore both dimension and depth are exactly two, and the quotient is Cohen–Macaulay. This conclusion uses the existence of the specified full sequence, rather than assuming a general extension theorem for an arbitrary partial sequence.
</details>

### CA-14-10 — Degree and embedding dimension differ

The homogeneous cusp equation has terms of degrees two and three in the usual polynomial grading. Explain why its local embedding-dimension calculation remains valid.

<details><summary>Hint 1</summary>
Embedding dimension uses only terms through first order.
</details>
<details><summary>Hint 2</summary>
The defining relation lies in the square of the local maximal ideal.
</details>
<details><summary>Solution</summary>
The relation y²−x³ has no linear part. Hence passing from the polynomial local ring to its quotient imposes no relation in the vector space (x,y)/(x,y)². That vector space still has basis x,y and dimension two. This is a statement about the maximal-ideal filtration, not a claim that the quotient inherits the usual polynomial grading. Higher-order and mixed-degree relations are compatible with the first-order calculation; the absence of a linear relation is the relevant fact.
</details>

### CA-14-11 — A regular zero-dimensional ring

Prove that a Noetherian local ring of dimension zero is regular local exactly when it is a field.

<details><summary>Hint 1</summary>
Translate regularity into embedding dimension zero.
</details>
<details><summary>Hint 2</summary>
Use Nakayama on the maximal ideal itself.
</details>
<details><summary>Solution</summary>
If the ring is regular of dimension zero, its embedding dimension is zero, so 𝔪/𝔪²=0. The finite module 𝔪 therefore satisfies 𝔪=𝔪𝔪, and Nakayama gives 𝔪=0. A local ring with zero maximal ideal is a field because every nonzero element is outside that ideal and hence a unit. Conversely a field has only the zero prime and zero maximal ideal, so dimension and embedding dimension both vanish. Cohen–Macaulayness alone does not imply this conclusion, as the dual-number examples show.
</details>

### CA-14-12 — Scope of a structure argument

What has to be added to the coordinate proof before concluding that every regular local ring is Cohen–Macaulay?

<details><summary>Hint 1</summary>
A minimal generating set need not arrive as independent polynomial variables.
</details>
<details><summary>Hint 2</summary>
Identify the named theorem used in Proposition 14.5.
</details>
<details><summary>Solution</summary>
The general proof needs the regular-local associated-graded structure theorem: the initial classes of a minimal generating set give a polynomial graded ring in exactly dim R variables. Once that statement is supplied, the initial-term argument proves successive injectivity, with Krull intersection ensuring every nonzero element has finite order. The coordinate example proves the polynomial statement directly in its particular ring, but does not establish it for every Noetherian local ring. The chapter therefore records the general theorem as an explicit import and proves its stated consequence, preserving the distinction between a worked model and a general structure theorem.
</details>

## 9. Continuation

Regular sequences turn successive quotient maps into controlled injective steps. Cohen–Macaulayness means that such steps reach the full dimension; regularity compares dimension with first-order generators. The [Gröbner continuation](groebner-bases-continuation.md) points to the book's single computational teaching home for ideal calculations. Local homological criteria and geometric smoothness require further hypotheses and belong to their own later treatments.
`;export{e as default};