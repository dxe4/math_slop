
# Field Extensions, Algebraic Elements, and Minimal Polynomials

Adjoining a square root, reducing a polynomial quotient, and constructing a
finite field are versions of one operation: enlarge a field just enough to
contain a chosen element. The size of that enlargement is measured by vector-
space dimension, while the element's exact algebraic constraint is recorded by
one irreducible polynomial.

This chapter makes those statements precise. It depends on polynomial division,
irreducibility, and quotient fields from the
[polynomial chapter](polynomial-rings-factorization.md),
and on the [fraction and finite-field constructions](fields-fractions-finite-fields.md).
All fields are commutative, and every field homomorphism preserves one. When
writing $F \subseteq E$, we identify $F$ with a specified subfield of $E$;
merely having an abstract isomorphic copy is not enough to define scalar
multiplication or evaluation over $F$.

## 1. Extensions and degree

**Definition 20.1 (Field extension and degree).**

A **field extension** $E/F$ is a field $E$ together with a specified embedding
of $F$ into $E$. After identifying $F$ with its image, addition in $E$ and
multiplication by elements of $F$ make $E$ a vector space over $F$.

The **degree** of the extension is

$[E:F]=dim_F E$.

It may be finite or infinite. For example:

- $\mathbb{C}/\mathbb{R}$ has degree two, with basis $\{1,i\}$.
- $\mathbb{Q}(\sqrt{2})/\mathbb{Q}$ has degree two, with basis $\{1,\sqrt{2}\}$.
- $\mathbb{R}/\mathbb{Q}$ has infinite degree. Indeed, a finite-dimensional extension is
  countable when its base field is countable, whereas $\mathbb{R}$ is uncountable.
- Every field has degree one over itself.

The degree counts coordinates, not elements. Both $\mathbb{C}$ and $\mathbb{R}$ are infinite
sets, yet $[\mathbb{C}:\mathbb{R}]=2$. For finite fields, the two counts connect: an
$n$-dimensional extension of $\mathbb{F}_{p}$ has $p^n$ elements.

## 2. The tower law

**Theorem 20.1 (Product bases and the tower law).**

Suppose $F \subseteq K \subseteq E$, with $[K:F]=m$ and $[E:K]=n$ finite. If
$u_1,...,u_m$ is an $F$-basis of $K$ and $v_1,...,v_n$ is a $K$-basis of $E$,
then

$\{u_i v_j:1\le i\le m, 1\le j\le n\}$

is an $F$-basis of $E$.

For spanning, write $z \in E$ as $\sum_j k_jv_j$, then expand every $k_j$ in the
$u_i$ basis. For independence, suppose

$\sum_j (\sum_i a_{ij}u_i)v_j=0$, with $a_{ij} \in F$.

Independence of the $v_j$ over $K$ makes every inner coefficient zero;
independence of the $u_i$ over $F$ then makes every $a_{ij}=0$. Therefore

$[E:F]=[E:K][K:F]$.

This is the **tower law**. Both displayed finite-degree hypotheses matter for
the numerical product. A useful consequence is that $[K:F]$ divides $[E:F]$
whenever $E/F$ is finite and $K$ is intermediate.

## 3. Generated fields and evaluation

For elements $\alpha_1,...,\alpha_r$ in an extension $E/F$, write

$F(\alpha_1,...,\alpha_r)$

for the intersection of all subfields of $E$ containing $F$ and those
elements. It is the smallest such field. By contrast,
$F[\alpha_1,...,\alpha_r]$ is the smallest subring. These can differ: if $t$ is
an indeterminate, $F[t]$ is a polynomial ring while $F(t)$ also contains
$1/t$.

For one element $\alpha$, evaluation is the homomorphism

$ev_\alpha:F[x]\to E$, $f\to f(\alpha)$.

Its image is exactly $F[\alpha]$. The kernel records all polynomial relations
over $F$ satisfied by $\alpha$.

The element $\alpha$ is **algebraic over $F$** if some nonzero $f \in F[x]$
satisfies $f(\alpha)=0$. Otherwise it is **transcendental**. These terms always
name a base field. The number $\pi$ is transcendental over $\mathbb{Q}$ but algebraic of
degree one over $\mathbb{R}$.

If $\alpha$ is transcendental, $ev_\alpha$ has zero kernel, so
$F[\alpha]$ is isomorphic to $F[x]$. Passing to fractions gives
$F(\alpha)$ isomorphic to $F(x)$. In particular, a transcendental simple
extension has infinite degree.

## 4. Minimal polynomials

**Definition 20.2 (Minimal polynomial over a stated base field).**

Let $\alpha$ be algebraic over $F$. Among the nonzero polynomials vanishing at
$\alpha$, choose one of least degree and scale it to be monic. This is the
**minimal polynomial** $m_{\alpha,F}$.

It has three fundamental properties.

First, it is irreducible. If $m=gh$ with both factors of smaller positive
degree, then $0=m(\alpha)=g(\alpha)h(\alpha)$. Because $E$ is a field, one factor
vanishes at $\alpha$, contradicting minimality.

Second, every polynomial relation is a multiple of it. Divide any
$f \in F[x]$ by $m$:

$f=qm+r$, with $\deg r<\deg m$.

If $f(\alpha)=0$, then $r(\alpha)=0$, so minimality forces $r=0$. Thus

$\ker(ev_\alpha)=(m_{\alpha,F})$.

Third, it is unique. Two monic least-degree relations both divide one another,
so they are equal. The base-field subscript matters: the minimal polynomial of
$\sqrt{2}$ is $x^2-2$ over $\mathbb{Q}$, but $x-\sqrt{2}$ over $\mathbb{R}$.

## 5. Quotients, normal forms, and degree

**Theorem 20.2 (Algebraic adjunction and quotient normal forms).**

The first isomorphism theorem and the kernel calculation give

$F[\alpha] \cong F[x]/(m_{\alpha,F})$.

Because the minimal polynomial is irreducible, its ideal is maximal, so the
quotient is a field. Hence $F[\alpha]$ is already a field and

$F[\alpha]=F(\alpha)$.

If $n=\deg m_{\alpha,F}$, polynomial division gives every element a unique
normal form

$a_0+a_1\alpha+\cdots+a_{n-1}\alpha^{n-1}$.

Therefore $\{1,\alpha,...,\alpha^{n-1}\}$ is an $F$-basis and

$[F(\alpha):F]=\deg m_{\alpha,F}$.

Spanning follows by reduction modulo $m$. For independence, a nontrivial
linear combination would be a polynomial relation of degree below $n$, which
minimality forbids.

Conversely, if $f \in F[x]$ is irreducible of degree $n$ and $\alpha$ is the
class of $x$ in $F[x]/(f)$, then $f(\alpha)=0$, the quotient is a field, and the
minimal polynomial of $\alpha$ is exactly the monic associate of $f$. Thus
irreducible quotient construction and adjoining an algebraic element are the
same mechanism viewed from opposite directions.

## 6. Quadratic and cubic computations

**Worked example 20.1 (Quadratic normal forms and exact inverses).**

The rational-root test proves $x^2-2$ irreducible over $\mathbb{Q}$. Consequently

$\mathbb{Q}(\sqrt{2})=\{a+b \sqrt{2}:a,b \in \mathbb{Q}\}$

and its degree is two. Multiplication uses $(\sqrt{2})^2=2$. A nonzero element
has inverse

$(a+b \sqrt{2})^{-1}=(a-b \sqrt{2})/(a^2-2b^2)$.

The denominator cannot vanish unless $a=b=0$: if $b\ne 0$, equality would make
$(a/b)^2=2$, contradicting irrationality of $\sqrt{2}$; if $b=0$, nonzero $a$
works directly.

**Worked example 20.2 (A cubic basis and power reduction).**

Let $\rho$ be the real cube root of two. The polynomial $x^3-2$ has no rational
root, so a cubic criterion makes it irreducible over $\mathbb{Q}$. Thus

$[\mathbb{Q}(\rho):\mathbb{Q}]=3$

and every element reduces uniquely to $a+b \rho+c \rho^2$. Inverses can be found
by the extended Euclidean algorithm in $\mathbb{Q}[x]$, then reduced using $\rho^3=2$.
For example $\rho^{-1}=\rho^2/2$.

## 7. A degree-four example

**Worked example 20.3 (Prove the quartic is genuinely minimal).**

Set $\alpha=\sqrt{2}+\sqrt{3}$. Direct elimination gives

$\alpha^2=5+2\sqrt{6}$,

so $(\alpha^2-5)^2=24$, and therefore

$\alpha^4-10\alpha^2+1=0$.

A polynomial relation alone gives only an upper bound on degree. To prove this
quartic is minimal, observe

$\alpha^{-1}=\sqrt{3}-\sqrt{2}$

and hence

$\sqrt{3}=(\alpha+\alpha^{-1})/2$,

$\sqrt{2}=(\alpha-\alpha^{-1})/2$.

Thus $\mathbb{Q}(\alpha)=\mathbb{Q}(\sqrt{2},\sqrt{3})$. Now
$[\mathbb{Q}(\sqrt{2}):\mathbb{Q}]=2$, while $\sqrt{3}$ is not in $\mathbb{Q}(\sqrt{2})$: an equality
$\sqrt{3}=a+b \sqrt{2}$ would, after squaring, force $2ab=0$. If $b=0$, then
$a^2=3$; if $a=0$, then $b^2=3/2$. Neither equation has a rational solution,
as prime exponents in a rational square are even. Therefore
$x^2-3$ remains irreducible over $\mathbb{Q}(\sqrt{2})$, and the tower law gives degree
four. The displayed monic quartic must be the minimal polynomial.

This example illustrates a reliable workflow: derive a candidate relation,
then prove no lower-degree relation exists. Squaring without the second step
can introduce extra roots and does not certify minimality.

## 8. Finite extensions contain only algebraic elements

If $[E:F]=n<\infty$ and $\beta \in E$, then the $n+1$ vectors

$1,\beta,\beta^2,...,\beta^n$

are linearly dependent over $F$. The resulting nonzero polynomial relation
shows that $\beta$ is algebraic over $F$, with minimal-polynomial degree at most
$n$.

Conversely, one algebraic element generates a finite extension because its
minimal polynomial supplies a finite basis. More generally, if each
$\alpha_i$ is algebraic over $F$, then

$F \subseteq F(\alpha_1) \subseteq ... \subseteq F(\alpha_1,...,\alpha_r)$

is a finite tower. At each stage the minimal polynomial over the larger base
divides a polynomial already known over $F$, so its degree is finite.

It follows that the elements of an extension $E/F$ that are algebraic over
$F$ form a subfield. If $\alpha$ and $\beta$ are algebraic, the finite extension
$F(\alpha,\beta)$ contains their sum, difference, product, and, when nonzero,
inverse; every element of that finite extension is algebraic by the preceding
argument.

## 9. Degree bounds and intermediate fields

If $\alpha$ and $\beta$ are algebraic over $F$, the tower law gives

$[F(\alpha,\beta):F]$

$=[F(\alpha,\beta):F(\alpha)][F(\alpha):F]$

$\le  \deg(m_{\beta,F}) \deg(m_{\alpha,F})$.

The inequality can be strict because one generator may already belong to the
field generated by the other. For example,
$\mathbb{Q}(\sqrt{2},\sqrt{8})=\mathbb{Q}(\sqrt{2})$, not a degree-four extension.

For an intermediate field $F \subseteq K \subseteq E$ in a finite extension,
the tower law says $[K:F]$ and $[E:K]$ are positive integer divisors of
$[E:F]$. In particular, an extension of prime degree has no intermediate
fields other than its endpoints. The converse is false without additional
hypotheses: absence of intermediate fields does not by itself force prime
degree.

## 10. Minimal polynomials in finite fields

Let $K=\mathbb{F}_{p^n}$ and let $\gamma$ generate the cyclic group $K^{\times}$. Since
$\gamma$ belongs to no proper multiplicative subgroup containing all nonzero
elements, the subfield $\mathbb{F}_{p}(\gamma)$ contains $K^{\times}$ and zero, hence equals
$K$. Therefore

$\deg(m_{\gamma,\mathbb{F}_{p}})=[\mathbb{F}_{p}(\gamma):\mathbb{F}_{p}]=n$.

This supplies an irreducible polynomial of every degree $n$ over every finite
prime field: take the minimal polynomial of a primitive element of
$\mathbb{F}_{p^n}$. It also explains why quotient models of the same finite field may
look different. Distinct irreducible polynomials can name different primitive
elements while producing isomorphic fields of the same order.

For the model

$\mathbb{F}_{8}=\mathbb{F}_{2}[t]/(t^3+t+1)$,

the class $\alpha$ of $t$ has minimal polynomial $x^3+x+1$: the polynomial is
irreducible and already annihilates $\alpha$. Normal forms are
$a+b \alpha+c \alpha^2$, with coefficients in $\mathbb{F}_{2}$.

## 11. Common errors

- Extension notation includes a specified embedding of the base field.
- $[E:F]$ is vector-space dimension, not a quotient or cardinality ratio.
- A polynomial that annihilates an element need not be minimal; prove monicity,
  irreducibility, and least degree.
- The minimal polynomial depends on the base field.
- $F[\alpha]=F(\alpha)$ is guaranteed here when $\alpha$ is algebraic; it fails
  for a transcendental element.
- Squaring an equation can add candidate roots and proves only annihilation.
- The tower law must use the same embedded intermediate field throughout.
- Algebraic over $K$ and algebraic over a smaller field $F$ are different
  claims. Transitivity needs a finite-tower argument.
- A degree bound need not be equality when generators are dependent.
- A quotient $F[x]/(f)$ is a field only under the irreducibility hypothesis.

## 12. Chapter summary and retrieval prompts

An extension is a vector space over its base, and finite degrees multiply in
towers. Evaluation separates algebraic elements, which have nonzero kernels,
from transcendental ones. An algebraic element has a unique monic irreducible
minimal polynomial; its degree equals the degree of the generated simple
extension, and its powers give canonical normal forms. Finite extensions are
algebraic, finitely many algebraic generators give finite extensions, and
degree arithmetic constrains intermediate fields. Primitive finite-field
elements connect existence of finite fields to irreducible polynomials of
every degree.

Retrieve:

1. What data does $E/F$ include?
2. How does a product of two bases prove the tower law?
3. What does the kernel of evaluation at $\alpha$ record?
4. Why is a minimal polynomial irreducible?
5. Why do its first $n$ powers form a basis?
6. Why is every element of a finite extension algebraic?
7. How do degree products constrain intermediate fields?
8. Why does a primitive element of $\mathbb{F}_{p^n}$ have degree $n$ over $\mathbb{F}_{p}$?

## Exercises with full solutions

### ALG-CH18-E001 — Exercise 1: Extension audit

Decide which inclusions define field extensions: $\mathbb{Q} \subseteq \mathbb{R}$, $\mathbb{Z} \subseteq \mathbb{Q}$,
$\mathbb{F}_{2} \subseteq \mathbb{F}_{2}[x]$, and $\mathbb{R} \subseteq \mathbb{C}$.

<details>
<summary>Hint 1</summary>

Both objects in a field extension must be fields.

</details>

<details>
<summary>Hint 2</summary>

Being a subring inclusion alone does not meet that definition.

</details>

#### ALG-CH18-E001 — Solution

<details>
<summary>Solution</summary>


$\mathbb{Q} \subseteq \mathbb{R}$ and $\mathbb{R} \subseteq \mathbb{C}$ are field extensions because
both endpoints are fields and the indicated inclusions preserve their field
operations. $\mathbb{Z} \subseteq \mathbb{Q}$ is not called a field extension because $\mathbb{Z}$ is not
a field. $\mathbb{F}_{2}[x]$ is not a field, so $\mathbb{F}_{2} \subseteq \mathbb{F}_{2}[x]$ is not a field
extension either, though it is an algebra inclusion.



</details>

### ALG-CH18-E002 — Exercise 2: A complex basis

Prove $\{1,i\}$ is an $\mathbb{R}$-basis of $\mathbb{C}$.

<details>
<summary>Hint 1</summary>

Write each complex number uniquely as a+bi with real a,b.

</details>

<details>
<summary>Hint 2</summary>

Uniqueness proves independence, while existence proves spanning.

</details>

#### ALG-CH18-E002 — Solution

<details>
<summary>Solution</summary>


Every complex number has the form $a+bi$ with real $a,b$, so the
set spans. If $a+bi=0$, equality of real and imaginary parts gives $a=b=0$, so
it is independent. Hence $[\mathbb{C}:\mathbb{R}]=2$.



</details>

### ALG-CH18-E003 — Exercise 3: Product bases

Prove the basis claim used in the tower law.

<details>
<summary>Hint 1</summary>

Multiply the two basis lists.

</details>

<details>
<summary>Hint 2</summary>

For spanning expand coefficients in the lower basis; for independence group terms by the upper basis first.

</details>

#### ALG-CH18-E003 — Solution

<details>
<summary>Solution</summary>


Let $\{u_i\}$ be an $F$-basis of $K$ and $\{v_j\}$ a $K$-basis of
$E$. Expanding first in the $v_j$ and then each coefficient in the $u_i$
shows the products span $E$ over $F$. If
$\sum_j(\sum_i a_{ij}u_i)v_j=0$, $K$-independence of the $v_j$ gives
$\sum_i a_{ij}u_i=0$ for every $j$; $F$-independence of the $u_i$ then gives
all $a_{ij}=0$. Thus the products form a basis.



</details>

### ALG-CH18-E004 — Exercise 4: Evaluation kernel

Show $\ker(ev_\alpha)$ is an ideal of $F[x]$ and explain what its elements mean.

<details>
<summary>Hint 1</summary>

Evaluation preserves addition and multiplication.

</details>

<details>
<summary>Hint 2</summary>

Its kernel consists exactly of polynomial relations satisfied by α.

</details>

#### ALG-CH18-E004 — Solution

<details>
<summary>Solution</summary>


Evaluation is a ring homomorphism, so its kernel is an ideal:
differences of vanishing polynomials vanish, and multiplying one by any
polynomial preserves vanishing. Its elements are exactly the polynomial
relations over $F$ satisfied by $\alpha$.



</details>

### ALG-CH18-E005 — Exercise 5: Minimal polynomial of $\sqrt{2}$

Find and justify the minimal polynomial of $\sqrt{2}$ over $\mathbb{Q}$.

<details>
<summary>Hint 1</summary>

Use the equation (√2)²=2.

</details>

<details>
<summary>Hint 2</summary>

Prove x²−2 has no rational root, so no monic polynomial of smaller positive degree can annihilate √2.

</details>

#### ALG-CH18-E005 — Solution

<details>
<summary>Solution</summary>


The element satisfies $x^2-2$. This polynomial has no rational
root: a reduced root $a/b$ would make $a^2=2b^2$, forcing both $a$ and $b$
even. A reducible quadratic over a field has a root, so $x^2-2$ is
irreducible. It is monic and annihilates $\sqrt{2}$, hence it is the minimal
polynomial.



</details>

### ALG-CH18-E006 — Exercise 6: Every relation is divisible by the minimal one

If $m$ is the minimal polynomial of $\alpha$ over $F$, prove
$f(\alpha)=0$ iff $m|f$ in $F[x]$.

<details>
<summary>Hint 1</summary>

Divide f by the monic minimal polynomial.

</details>

<details>
<summary>Hint 2</summary>

The remainder also vanishes at α and has smaller degree, forcing it to be zero.

</details>

#### ALG-CH18-E006 — Solution

<details>
<summary>Solution</summary>


If $m|f$, evaluation gives $f(\alpha)=0$. Conversely divide
$f=qm+r$ with $\deg r<\deg m$. When $f(\alpha)=0$, also $r(\alpha)=0$.
Minimality of $m$ forces $r=0$, so $m|f$.



</details>

### ALG-CH18-E007 — Exercise 7: Inverses in a quadratic field

Find the inverse of $3+2\sqrt{2}$ in $\mathbb{Q}(\sqrt{2})$.

<details>
<summary>Hint 1</summary>

Multiply by the conjugate 3−2√2.

</details>

<details>
<summary>Hint 2</summary>

The product is the nonzero rational scalar 9−8.

</details>

#### ALG-CH18-E007 — Solution

<details>
<summary>Solution</summary>


Multiply by the conjugate:
$(3+2\sqrt{2})(3-2\sqrt{2})=9-8=1$. Therefore the inverse is
$3-2\sqrt{2}$. The nonzero denominator in the general conjugate formula happens
to equal one here.



</details>

### ALG-CH18-E008 — Exercise 8: A cubic extension

Let $\rho^3=2$ with $\rho$ real. Prove $[\mathbb{Q}(\rho):\mathbb{Q}]=3$ and reduce $\rho^5+\rho^3$.

<details>
<summary>Hint 1</summary>

The cubic x³−2 has no rational root.

</details>

<details>
<summary>Hint 2</summary>

Reduce powers with ρ³=2 after establishing the quotient basis.

</details>

#### ALG-CH18-E008 — Solution

<details>
<summary>Solution</summary>


A reducible cubic over $\mathbb{Q}$ has a rational root. The rational-root
test gives only candidates $\pm 1,\pm 2$, none of which is a root of $x^3-2$, so
that polynomial is irreducible. The degree theorem gives degree three. Using
$\rho^3=2$, $\rho^5=\rho^2\cdot \rho^3=2\rho^2$, so the normal form is $2\rho^2+2$.



</details>

### ALG-CH18-E009 — Exercise 9: A quotient normal form

In $\mathbb{F}_{3}[x]/(x^2+1)$, give a basis over $\mathbb{F}_{3}$ and find the inverse of the class
$\alpha+1$, where $\alpha$ is the class of $x$.

<details>
<summary>Hint 1</summary>

Use 1,α as the quotient basis.

</details>

<details>
<summary>Hint 2</summary>

Reduce (α+1)(α−1) with α²=−1 and invert the resulting nonzero scalar in F₃.

</details>

#### ALG-CH18-E009 — Solution

<details>
<summary>Solution</summary>


The polynomial has no root in $\mathbb{F}_{3}$, so it is irreducible. The
quotient has basis $\{1,\alpha\}$ and relation $\alpha^2=-1=2$. Then
$(\alpha+1)(\alpha+2)=\alpha^2+3\alpha+2=2+0+2=1$, so the inverse is $\alpha+2$.



</details>

### ALG-CH18-E010 — Exercise 10: Changing the generator

Find the minimal polynomial over $\mathbb{Q}$ of $\beta=1+\sqrt{2}$.

<details>
<summary>Hint 1</summary>

Rewrite √2 as β−1.

</details>

<details>
<summary>Hint 2</summary>

Substitute into (β−1)²=2 and use the equality of the generated fields to justify minimality.

</details>

#### ALG-CH18-E010 — Solution

<details>
<summary>Solution</summary>


Since $\beta-1=\sqrt{2}$, it satisfies
$(x-1)^2-2=x^2-2x-1$. Its roots $1\pm \sqrt{2}$ are not rational, so the
quadratic is irreducible over $\mathbb{Q}$. Being monic and annihilating $\beta$, it is
the minimal polynomial. Also $\mathbb{Q}(\beta)=\mathbb{Q}(\sqrt{2})$, confirming degree two.



</details>

### ALG-CH18-E011 — Exercise 11: Two square roots

Prove the minimal polynomial of $\sqrt{2}+\sqrt{3}$ over $\mathbb{Q}$ is
$x^4-10x^2+1$.

<details>
<summary>Hint 1</summary>

Square the sum and isolate √6, then square again.

</details>

<details>
<summary>Hint 2</summary>

To justify minimal degree, recover both √2 and √3 from the sum and prove the biquadratic field has degree four.

</details>

#### ALG-CH18-E011 — Solution

<details>
<summary>Solution</summary>


Squaring twice gives the displayed polynomial relation. If
$\alpha=\sqrt{2}+\sqrt{3}$, then
$\alpha^{-1}=\sqrt{3}-\sqrt{2}$, so both square roots lie in $\mathbb{Q}(\alpha)$.
The extension $\mathbb{Q}(\sqrt{2})/\mathbb{Q}$ has degree two. If $\sqrt{3}=a+b \sqrt{2}$,
squaring and comparing the rational and $\sqrt{2}$ parts forces $ab=0$. If
$b=0$, it would give rational $a$ with $a^2=3$; if $a=0$, it would give
rational $b$ with $b^2=3/2$. Prime-parity in a reduced fraction rules out
both equations.
Thus adjoining $\sqrt{3}$ contributes degree two. The tower degree is four, so
the monic annihilating quartic has least possible degree and is minimal.



</details>

### ALG-CH18-E012 — Exercise 12: Algebraic elements form a field

If $\alpha,\beta \in E$ are algebraic over $F$, prove $\alpha+\beta$ and, when
$\alpha\ne 0$, $\alpha^{-1}$ are algebraic over $F$.

<details>
<summary>Hint 1</summary>

The field generated by finitely many algebraic elements has finite degree.

</details>

<details>
<summary>Hint 2</summary>

Every element of that finite-dimensional extension satisfies a polynomial relation by dependence of its powers.

</details>

#### ALG-CH18-E012 — Solution

<details>
<summary>Solution</summary>


The tower $F \subseteq F(\alpha) \subseteq F(\alpha,\beta)$ is finite:
each adjunction has degree at most the degree of a known annihilating
polynomial. Every element of a finite extension is algebraic by linear
dependence of its powers. Both $\alpha+\beta$ and the nonzero inverse
$\alpha^{-1}$ belong to this finite extension, so both are algebraic.



</details>

### ALG-CH18-E013 — Exercise 13: A two-generator degree bound

If the minimal-polynomial degrees of $\alpha,\beta$ over $F$ are $m,n$, prove
$[F(\alpha,\beta):F]\le mn$.

<details>
<summary>Hint 1</summary>

First adjoin α, then β.

</details>

<details>
<summary>Hint 2</summary>

The minimum of β over the larger field divides an annihilating polynomial of degree n over F, so its degree is at most n.

</details>

#### ALG-CH18-E013 — Solution

<details>
<summary>Solution</summary>


The tower law gives
$[F(\alpha,\beta):F]=[F(\alpha,\beta):F(\alpha)]m$. The minimal polynomial of
$\beta$ over $F(\alpha)$ divides any polynomial over $F$ that annihilates beta,
so its degree, which equals the first factor, is at most $n$. Hence the product
is at most $mn$.



</details>

### ALG-CH18-E014 — Exercise 14: Degree divisibility

If $F \subseteq K \subseteq E$ and $[E:F]=12$, list the possible values of
$[K:F]$.

<details>
<summary>Hint 1</summary>

Use [E:F]=[E:K][K:F].

</details>

<details>
<summary>Hint 2</summary>

Thus [K:F] must be a positive divisor of twelve.

</details>

#### ALG-CH18-E014 — Solution

<details>
<summary>Solution</summary>


The tower law gives $12=[E:K][K:F]$, so $[K:F]$ is a positive
divisor of twelve. The only possibilities permitted by degree arithmetic are
$1,2,3,4,6,12$. This does not assert that every listed degree actually occurs.



</details>

### ALG-CH18-E015 — Exercise 15: Prime-degree extensions

Prove an extension $E/F$ of degree seven has no proper intermediate field.

<details>
<summary>Hint 1</summary>

Apply the tower law.

</details>

<details>
<summary>Hint 2</summary>

A positive divisor of seven is either one or seven, and degree one means equality of fields.

</details>

#### ALG-CH18-E015 — Solution

<details>
<summary>Solution</summary>


For an intermediate $K$, the tower law gives
$7=[E:K][K:F]$. Since seven is prime, one factor is one. If $[K:F]=1$, then
$K=F$; if $[E:K]=1$, then $K=E$. There is no other intermediate field.



</details>

### ALG-CH18-E016 — Exercise 16: A transcendental simple extension

Let $t$ be transcendental over $F$. Prove $F[t]$ is not a field and distinguish
it from $F(t)$.

<details>
<summary>Hint 1</summary>

Transcendence makes polynomial evaluation injective.

</details>

<details>
<summary>Hint 2</summary>

The inverse of t cannot be a polynomial in t, while it belongs to the rational-function field.

</details>

#### ALG-CH18-E016 — Solution

<details>
<summary>Solution</summary>


Evaluation identifies $F[t]$ with the polynomial ring $F[x]$.
The nonzero element $t$ has no polynomial inverse: $tg(t)=1$ would give the
impossible polynomial identity $xg(x)=1$, since evaluation is injective.
The field $F(t)$ is the fraction field of $F[t]$ and does contain $1/t$ and all
rational functions.



</details>

### ALG-CH18-E017 — Exercise 17: Finite extensions are algebraic

If $[E:F]=n$, prove every $\beta \in E$ has minimal-polynomial degree at most
$n$.

<details>
<summary>Hint 1</summary>

Consider 1,β,…,β^n in an n-dimensional F-space.

</details>

<details>
<summary>Hint 2</summary>

Their dependence gives an annihilator of degree at most n.

</details>

#### ALG-CH18-E017 — Solution

<details>
<summary>Solution</summary>


The $n+1$ elements $1,\beta,...,\beta^n$ are vectors in an
$n$-dimensional $F$-space, so they are dependent. Their dependence is a
nonzero polynomial relation of degree at most $n$. The minimal polynomial
divides every relation, so its degree is at most $n$.



</details>

### ALG-CH18-E018 — Exercise 18: A minimal polynomial in $\mathbb{F}_{8}$

Let $\alpha$ be the class of $x$ in $\mathbb{F}_{2}[x]/(x^3+x+1)$. Find its minimal
polynomial over $\mathbb{F}_{2}$ and a basis for the field.

<details>
<summary>Hint 1</summary>

Use the irreducible polynomial defining the quotient.

</details>

<details>
<summary>Hint 2</summary>

The residue classes of 1,x,x² give a basis and certify that no smaller-degree relation exists.

</details>

#### ALG-CH18-E018 — Solution

<details>
<summary>Solution</summary>


The cubic has no root in $\mathbb{F}_{2}$, since its values at zero and one
are both one. A reducible cubic has a linear factor, so it is irreducible.
The class $\alpha$ is annihilated by $x^3+x+1$; quotient construction therefore
makes this its minimal polynomial. The power basis is
$\{1,\alpha,\alpha^2\}$.



</details>

### ALG-CH18-E019 — Exercise 19: Primitive finite-field elements

If $\gamma$ generates $\mathbb{F}_{p^n}^{\times}$, prove its minimal polynomial over $\mathbb{F}_{p}$
has degree $n$.

<details>
<summary>Hint 1</summary>

If the generated subfield were proper, compare its number of nonzero elements.

</details>

<details>
<summary>Hint 2</summary>

An element generating all p^n−1 nonzero elements cannot lie in a smaller multiplicative group.

</details>

#### ALG-CH18-E019 — Solution

<details>
<summary>Solution</summary>


The subfield $\mathbb{F}_{p}(\gamma)$ contains every power of $\gamma$, hence
all $p^n-1$ nonzero elements of $\mathbb{F}_{p^n}$, as well as zero. It is the whole
field. Therefore the degree of the minimal polynomial is
$[\mathbb{F}_{p}(\gamma):\mathbb{F}_{p}]=[\mathbb{F}_{p^n}:\mathbb{F}_{p}]=n$.



</details>

### ALG-CH18-E020 — Exercise 20: When the degree bound is strict

Compute $[\mathbb{Q}(\sqrt{2},\sqrt{8}):\mathbb{Q}]$ and compare it with the product of the two
individual minimal-polynomial degrees.

<details>
<summary>Hint 1</summary>

Use √8=2√2.

</details>

<details>
<summary>Hint 2</summary>

Both generators lie in Q(√2), so adjoining the second adds no new degree.

</details>

#### ALG-CH18-E020 — Solution

<details>
<summary>Solution</summary>


Since $\sqrt{8}=2\sqrt{2}$, each generator belongs to the field of
the other. Thus the joint field is $\mathbb{Q}(\sqrt{2})$ and has degree two. Each
individual minimal polynomial has degree two, whose product is four; the
two-generator upper bound is strict because the generators are dependent.



</details>

## ALG-CH18-P001 — Project: a complete algebraic-element dossier

Let $\rho$ be the real cube root of two. Produce a field dossier that proves the
minimal polynomial, constructs $\mathbb{Q}(\rho)$ as a quotient, gives canonical normal
forms and an exact multiplication rule, computes a nontrivial inverse, audits
all intermediate-field possibilities, changes to the generator $\rho+1$, and
predicts the possible images of $\rho$ in $\mathbb{C}$ for the next chapter's study of
embeddings.

### Deliverables

Give an irreducibility proof; the quotient map and its kernel; unique normal forms with a proof of uniqueness; multiplication and a checked inverse; a complete intermediate-field argument; the translated minimal polynomial; and all base-preserving embeddings into $\mathbb C$. Distinguish these embeddings from automorphisms of the real field $\mathbb Q(\rho)$.

### Solution framework and rubric

The rational-root test proves $x^3-2$ irreducible, so
$\mathbb{Q}(\rho)$ is isomorphic to $\mathbb{Q}[x]/(x^3-2)$ and has basis
$\{1,\rho,\rho^2\}$. Reduce every product by $\rho^3=2$; explicitly,

$(a+b \rho+c \rho^2)(u+v \rho+w \rho^2)$

has coefficients

$au+2bw+2cv$, $av+bu+2cw$, and $aw+bv+cu$

on $1,\rho,\rho^2$. For a concrete inverse,

$(1+\rho)^{-1}=(1-\rho+\rho^2)/3$,

as direct multiplication verifies. The tower law and prime degree three leave
only $\mathbb{Q}$ and $\mathbb{Q}(\rho)$ as intermediate fields. Setting $y=\rho+1$ transforms the
minimal polynomial to
$(x-1)^3-2=x^3-3x^2+3x-3$; translation is an automorphism of $\mathbb{Q}[x]$, so
irreducibility is preserved. Any $\mathbb{Q}$-preserving embedding into $\mathbb{C}$ must send
$\rho$ to a root of $x^3-2$, namely $\rho$, $\rho \zeta$, or $\rho \zeta^2$, where
$\zeta$ is a primitive complex cube root of one. Conversely, substituting any
one of these roots into the unique normal form respects the defining relation,
so each choice gives an embedding. This completes the dossier while preparing
the retained [splitting-field analysis](splitting-fields-separability.md).

Division by the monic cubic gives existence and uniqueness of representatives of degree below three in the quotient; evaluation at $\rho$ has kernel $(x^3-2)$, proving the quotient identification. The two nonreal images of $\rho$ define embeddings into $\mathbb C$, but do not define automorphisms of the real field $\mathbb Q(\rho)$, since their images leave that field. The inverse and multiplication identities must be checked directly, and the intermediate-field claim needs the tower-law divisibility argument.

## Sources

Thomas W. Judson's author-hosted [Extension Fields](https://twjudson.github.io/aata-files/aata-html/fields-section-extension-fields.html) is complementary primary reading for evaluation, algebraic adjunction and degree. The worked coordinate and polynomial certificates here retain their declared base fields.

## Summary

A field extension is a vector space over its base field. Product bases prove the tower law, and polynomial evaluation gives minimal polynomials and unique quotient normal forms. Finite extensions are algebraic; degree bounds and invariant coordinates prevent claims stronger than the actual adjunction permits.
