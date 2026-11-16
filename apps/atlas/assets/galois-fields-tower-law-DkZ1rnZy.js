var e=`---
id: deep-dive-galois-fields-tower-law
title: "Fields and the tower law"
license: CC BY-SA 4.0
---

# Fields and the tower law

A field extension enlarges the numbers available for arithmetic. Its degree measures how many coordinates are needed over the original field, rather than how many elements the enlarged field contains. The tower law says these coordinate counts multiply when one extension is built inside another.

This **Years 2–3 (L3)** orientation assumes [polynomial irreducibility](/books/algebra-patterns-structure/polynomial-rings-factorization/) and [bases and dimension](/books/linear-algebra-structure-proofs/basis-dimension-coordinates/). Fields are commutative, embeddings preserve one and every stated field inclusion is a specified embedding. We prove the finite tower law and an exact quadratic-tower calculation. The primary [Extensions, Degree and Constructible Numbers chapter](/books/galois-theory/extensions-degree-constructible-numbers/) supplies the fuller course treatment.

## An extension carries a scalar choice

For fields $K\\subseteq L$, the arithmetic in $L$ makes it a vector space over $K$. Define $[L:K]=\\dim_KL$, which may be infinite. A larger base field can reduce this dimension: $[\\mathbb C:\\mathbb R]=2$, whereas the degree over $\\mathbb Q$ is infinite. Neither dimension is obtained by dividing the cardinalities of these infinite sets.

For a concrete finite extension, consider

$$\\mathbb Q(\\sqrt2)=\\{a+b\\sqrt2:a,b\\in\\mathbb Q\\}.$$

Addition and multiplication retain this form. Every nonzero element has inverse

$$(a+b\\sqrt2)^{-1}=\\frac{a-b\\sqrt2}{a^2-2b^2}.$$

The denominator is nonzero: if $b\\ne0$ and it vanished, $(a/b)^2=2$ would contradict the usual irrationality proof for $\\sqrt2$; if $b=0$, nonzero $a$ gives a nonzero square. Thus the displayed set is a field. Its two indicated basis elements span, and a rational relation between them would make $\\sqrt2$ rational. Therefore its degree is exactly two.

A relation supplies an upper bound on degree before it supplies an exact degree. To know that a power basis is independent, we need irreducibility or another lower-bound argument. This distinction will matter when degrees are later used to count automorphisms.

## Finite bases and the tower law

First, one useful source of finite bases is an algebraic element $\\alpha$. Let its monic minimal polynomial over $K$ have degree $d$. Division by that polynomial reduces every element of $K[\\alpha]$ to a combination of $1,\\alpha,\\ldots,\\alpha^{d-1}$. A dependence among those powers would give a nonzero polynomial relation of smaller degree, contradicting minimality. They are therefore a basis of this generated ring as a vector space.

This finite-dimensional ring is already a field. Multiplication by any nonzero element is injective, since it lies inside a field extension. An injective linear endomorphism of a finite-dimensional space is surjective, so one is the product of that element with another member of $K[\\alpha]$. Every nonzero element has an inverse inside the ring. Hence $K[\\alpha]=K(\\alpha)$ and $[K(\\alpha):K]=d$. This argument explains why an actual minimal polynomial, rather than an arbitrary vanishing polynomial, determines the exact coordinate count.

Suppose $K\\subseteq E\\subseteq L$, with finite degrees $[E:K]=m$ and $[L:E]=n$. Choose a $K$-basis $u_1,\\ldots,u_m$ of $E$ and an $E$-basis $v_1,\\ldots,v_n$ of $L$.

Every element of $L$ is a sum $\\sum_j e_jv_j$ with $e_j\\in E$. Expanding each $e_j$ in the $u_i$ shows that the $mn$ products $u_iv_j$ span $L$ over $K$.

For independence, suppose $\\sum_{i,j}a_{ij}u_iv_j=0$ with all $a_{ij}\\in K$. Grouping by $j$ gives

$$\\sum_j\\left(\\sum_i a_{ij}u_i\\right)v_j=0.$$

The inner sums belong to $E$. Independence of the $v_j$ over $E$ makes each sum zero. Independence of the $u_i$ over $K$ then makes every $a_{ij}=0$. The product list is a basis, proving

$$[L:K]=[L:E][E:K]=mn.$$

If $L/K$ is finite, an intermediate field is a $K$-subspace and has finite degree over $K$. A finite $K$-basis of $L$ spans over the larger field $E$ as well, so $[L:E]$ is also finite. Thus the tower law applies and $[E:K]$ divides $[L:K]$.

## Worked example: two genuinely new square roots

Let $L=\\mathbb Q(\\sqrt2,\\sqrt3)$ and $E=\\mathbb Q(\\sqrt2)$. We must check that the second adjunction really has degree two over $E$.

If $\\sqrt3=a+b\\sqrt2$ for rational $a,b$, squaring gives $3=a^2+2b^2+2ab\\sqrt2$. Irrationality of $\\sqrt2$ forces $ab=0$. The alternatives require a rational square equal to three or to $3/2$. Both are impossible because the exponent of the prime three in a nonzero rational square is even, whereas it is odd in either proposed value. This uses ordinary unique prime factorization in integer numerators and denominators.

Hence $T^2-3$ has no root in $E$ and, being quadratic, is irreducible there. The adjunction has degree two. The tower law gives $[L:\\mathbb Q]=2\\cdot2=4$, with product basis

$$1,\\sqrt2,\\sqrt3,\\sqrt6.$$

That basis will make later fixed-field coefficient comparisons legitimate. Knowing there are four displayed expressions would not alone prove their independence; the product-basis argument supplies it.

## Exercises

### Exercise 1 {#galois-fields-tower-law-ex-1}

Suppose $[L:K]=p$ is prime. Prove there is no intermediate field strictly between $K$ and $L$. Does the argument count the automorphisms of $L/K$?

<details><summary>Hint 1</summary>
The two positive integer intermediate degrees multiply to $p$.
</details>
<details><summary>Hint 2</summary>
An extension of degree one is the original embedded field.
</details>
<details><summary>Full solution</summary>
For $K\\subseteq E\\subseteq L$, the tower law gives $p=[L:E][E:K]$. One factor is one. If $[E:K]=1$, then $E=K$; if $[L:E]=1$, then $E=L$. Thus no proper nontrivial intermediate field exists. The proof concerns vector-space dimensions only and counts no automorphisms. A real cubic extension can have degree three and only the identity automorphism, as the next article explains.
</details>

### Exercise 2 {#galois-fields-tower-law-ex-2}

For $\\theta=\\sqrt2+\\sqrt3$, prove $\\mathbb Q(\\theta)=\\mathbb Q(\\sqrt2,\\sqrt3)$ and find its minimal polynomial over $\\mathbb Q$.

<details><summary>Hint 1</summary>
The inverse of $\\theta$ is $\\sqrt3-\\sqrt2$.
</details>
<details><summary>Hint 2</summary>
Use the resulting field equality to prove degree four before calling a quartic minimal.
</details>
<details><summary>Full solution</summary>
The identity $(\\sqrt2+\\sqrt3)(\\sqrt3-\\sqrt2)=1$ gives $\\sqrt3=(\\theta+\\theta^{-1})/2$ and $\\sqrt2=(\\theta-\\theta^{-1})/2$. Thus both radicals belong to $\\mathbb Q(\\theta)$; the reverse field inclusion is immediate. Its degree is therefore four by the worked calculation. Since $\\theta^2=5+2\\sqrt6$, squaring $\\theta^2-5$ gives $24$ and hence $\\theta^4-10\\theta^2+1=0$. The monic quartic is minimal because an element of degree four cannot satisfy a nonzero polynomial of smaller degree. The reconstruction supplies the lower bound that repeated squaring alone could not give.
</details>

Continue with [Automorphism groups](/articles/galois-automorphism-groups/) and [The fundamental theorem](/articles/galois-fundamental-theorem/). The original [Galois symmetry source](/articles/galois-symmetry/) remains available with its earlier examples and reading identity.

*Source provenance: original Euler orientation proof and exercises, linking the actual Galois Theory opening chapter. The quadratic-tower theme continues the preserved Galois symmetry source; the finite product-basis proof is developed explicitly here. CC BY-SA 4.0. Draft; no independent review is claimed.*
`;export{e as default};