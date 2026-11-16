var e=`---
id: deep-dive-commutative-algebra-localisation
title: "Localisation"
license: CC BY-SA 4.0
---

# Localisation

Ordinary rational numbers make every nonzero integer invertible. Localisation lets us choose which elements to invert, and it still works when the original ring has zero divisors. In that setting the price of making a denominator invertible may be that another nonzero element becomes zero.

This **Years 2–3 (L3)** article assumes [Rings and ideals by example](/articles/commutative-algebra-rings-ideals-examples/) and elementary fractions. Rings are commutative with identity. A multiplicative set $S$ contains one and is closed under multiplication. We allow $0\\in S$, stating explicitly when the construction collapses. The actual [Localisation chapter](/books/commutative-algebra/localisation/) gives full construction, exactness and prime-correspondence proofs; here we explain why the fraction relation needs its extra multiplier and what it does in examples.

## Equality of fractions must allow annihilation

Use pairs $(a,s)$ with $a\\in R$ and $s\\in S$. The correct equivalence relation is

$$(a,s)\\sim(b,t)\\quad\\Longleftrightarrow\\quad
u(at-bs)=0\\text{ for some }u\\in S.$$

Write the resulting class as $a/s$. Over a domain with zero excluded from $S$, cancellation of $u$ reduces this to familiar cross multiplication. Over a ring with zero divisors, that cancellation would be invalid.

Reflexivity and symmetry are immediate. For transitivity, suppose $u(at-bs)=0$ and $v(br-ct)=0$. Multiplying the first equality by $vr$, the second by $us$, and adding gives

$$uvt(ar-cs)=0.$$

Since $uvt\\in S$, this identifies $(a,s)$ with $(c,r)$. The extra multiplier is precisely what makes this implication work without cancelling the middle denominator.

Addition and multiplication have their expected common-denominator formulas:

$$\\frac as+\\frac bt=\\frac{at+bs}{st},\\qquad
\\frac as\\frac bt=\\frac{ab}{st}.$$

The primary chapter proves their independence of representatives and the ring axioms. The map $\\iota:R\\to S^{-1}R$ sends $a$ to $a/1$, and every $s/1$ has inverse $1/s$.

## The zero criterion explains the information loss

Comparing $(a,s)$ with $(0,1)$ in the definition gives

$$a/s=0\\quad\\Longleftrightarrow\\quad ua=0\\text{ for some }u\\in S.$$

Therefore $\\iota$ need not be injective. Its kernel consists exactly of elements killed by an allowed denominator. If every denominator is a non-zero-divisor, the kernel is zero. If $0\\in S$, every fraction vanishes; conversely a zero localisation requires $1/1=0$, hence some $u\\in S$ with $u=0$. These two conditions are equivalent.

Localisation is characterized by its universal property. If a unital homomorphism $\\varphi:R\\to A$ makes each $\\varphi(s)$ a unit, its only possible extension is

$$a/s\\longmapsto\\varphi(a)\\varphi(s)^{-1}.$$

This is well defined: applying $\\varphi$ to $u(at-bs)=0$ allows cancellation of the unit $\\varphi(u)$, and multiplication by the two denominator inverses makes the proposed values equal. The fraction formulas prove preservation of operations. Every fraction is a numerator times an inverse denominator, so the extension is unique. This property specifies which ring construction we mean rather than merely giving a suggestive notation.

## Worked example: invert two modulo six

Let $R=\\mathbb Z/6\\mathbb Z$ and invert powers of the residue of two. Then $S=\\{1,2,4\\}$; it does not contain zero. Nevertheless the nonzero residue three maps to zero, because $2\\cdot3=0$ in $R$.

Reduction modulo three maps $R$ to $\\mathbb F_3$ and sends every denominator to a unit. The universal property therefore gives a map $S^{-1}R\\to\\mathbb F_3$. It is onto because every target class is the image of an integer numerator.

It is also injective. A fraction mapping to zero has numerator divisible by three, hence numerator zero or three modulo six. Both are killed by two, so the zero criterion makes the fraction zero. Thus

$$(\\mathbb Z/6\\mathbb Z)[1/2]\\cong\\mathbb F_3.$$

The same conclusion follows structurally: after two is invertible, the equation $2\\cdot3=0$ forces three to vanish. Localisation can discard a component of a ring. It need not embed the original ring into a larger one.

## Inverting one prime is different from localising at it

The ring $\\mathbb Z[1/3]$ allows denominators that are powers of three. The ring $\\mathbb Z_{(3)}$ allows denominators not divisible by three. They solve different inversion problems: $1/3$ belongs to the first but not the second, while $1/2$ belongs to the second but not the first.

In $\\mathbb Z_{(3)}$, a fraction $a/s$ is a unit exactly when three does not divide $a$. In that case its inverse $s/a$ has an allowed denominator. If three divides $a$, reduction modulo three sends the fraction to zero and precludes invertibility. Those nonunits form the proper ideal $3\\mathbb Z_{(3)}$, and every proper ideal lies in it because a proper ideal contains no unit. Hence it is the unique maximal ideal: this is a local ring.

The primary chapter extends this reasoning to $R_{\\mathfrak p}$ for a prime ideal $\\mathfrak p$. The existing [Prime Ideals and Localization: Algebra Under a Microscope](/articles/prime-ideals-localization/) remains a separate L4 continuation.

## Exercises

### Exercise 1 {#commutative-algebra-localisation-ex-1}

In $\\mathbb Z[1/2]$, decide whether $3/4$ and $1/3$ occur. Justify the negative answer using an integer divisibility argument.

<details><summary>Hint 1</summary>
Allowed denominators are $2^n$ for integers $n\\ge0$.
</details>
<details><summary>Hint 2</summary>
An equality $1/3=a/2^n$ would imply $2^n=3a$.
</details>
<details><summary>Full solution</summary>
The fraction $3/4=3/2^2$ has an allowed denominator and belongs. If $1/3=a/2^n$, equality in the rational field would imply $2^n=3a$. But a power of two is not divisible by three, a contradiction. Therefore $1/3$ does not belong. This is the ring formed by inverting two, not the local ring obtained by inverting all integers outside the prime ideal $(2)$.
</details>

### Exercise 2 {#commutative-algebra-localisation-ex-2}

Invert powers of three in $R=\\mathbb Z/12\\mathbb Z$. Prove the result is $\\mathbb Z/4\\mathbb Z$, and explain why it still has zero divisors.

<details><summary>Hint 1</summary>
The denominator set is $\\{1,3,9\\}$, whose images modulo four are units.
</details>
<details><summary>Hint 2</summary>
A numerator divisible by four is killed by three modulo twelve.
</details>
<details><summary>Full solution</summary>
Reduction modulo four makes every allowed denominator invertible and therefore factors through the localisation. The induced map is onto by using denominator one. If a fraction maps to zero, its numerator is divisible by four; multiplying by three kills that numerator modulo twelve, so the fraction was zero. The induced map is thus injective and is an isomorphism to $\\mathbb Z/4\\mathbb Z$. In that ring the nonzero class two has square zero, so zero divisors remain. Localisation does not always produce a field or a domain; its result depends on the selected denominator set.
</details>

*Source provenance: original Euler orientation exposition and exercises, linked to the actual Localisation primary chapter and the preserved localization companion. All zero-divisor and zero-ring cases retain explicit assumptions. CC BY-SA 4.0. Draft; no independent review is claimed.*
`;export{e as default};