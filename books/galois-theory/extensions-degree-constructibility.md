
# Extensions, Degree and Constructible Numbers

Adjoining a square root, reducing a polynomial quotient, and constructing a
finite field are versions of one operation: enlarge a field just enough to
contain a chosen element. The size of that enlargement is measured by vector-
space dimension, while the element's exact algebraic constraint is recorded by
one irreducible polynomial.

This chapter makes those statements precise. It depends on polynomial division,
irreducibility, and quotient fields from the
[polynomial chapter](../algebra-patterns-structure/polynomial-rings-factorization.md),
and on the [fraction and finite-field constructions](../algebra-patterns-structure/fields-fractions-finite-fields.md).
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

- $C/R$ has degree two, with basis $\{1,i\}$.
- $Q(\sqrt{2})/Q$ has degree two, with basis $\{1,\sqrt{2}\}$.
- $R/Q$ has infinite degree. Indeed, a finite-dimensional extension is
  countable when its base field is countable, whereas $R$ is uncountable.
- Every field has degree one over itself.

The degree counts coordinates, not elements. Both $C$ and $R$ are infinite
sets, yet $[C:R]=2$. For finite fields, the two counts connect: an
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
name a base field. The number $\pi$ is transcendental over $Q$ but algebraic of
degree one over $R$.

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
$\sqrt{2}$ is $x^2-2$ over $Q$, but $x-\sqrt{2}$ over $R$.

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

The rational-root test proves $x^2-2$ irreducible over $Q$. Consequently

$Q(\sqrt{2})=\{a+b \sqrt{2}:a,b \in Q\}$

and its degree is two. Multiplication uses $(\sqrt{2})^2=2$. A nonzero element
has inverse

$(a+b \sqrt{2})^{-1}=(a-b \sqrt{2})/(a^2-2b^2)$.

The denominator cannot vanish unless $a=b=0$: if $b\ne 0$, equality would make
$(a/b)^2=2$, contradicting irrationality of $\sqrt{2}$; if $b=0$, nonzero $a$
works directly.

**Worked example 20.2 (A cubic basis and power reduction).**

Let $\rho$ be the real cube root of two. The polynomial $x^3-2$ has no rational
root, so a cubic criterion makes it irreducible over $Q$. Thus

$[Q(\rho):Q]=3$

and every element reduces uniquely to $a+b \rho+c \rho^2$. Inverses can be found
by the extended Euclidean algorithm in $Q[x]$, then reduced using $\rho^3=2$.
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

Thus $Q(\alpha)=Q(\sqrt{2},\sqrt{3})$. Now
$[Q(\sqrt{2}):Q]=2$, while $\sqrt{3}$ is not in $Q(\sqrt{2})$: an equality
$\sqrt{3}=a+b \sqrt{2}$ would, after squaring, force $2ab=0$. If $b=0$, then
$a^2=3$; if $a=0$, then $b^2=3/2$. Neither equation has a rational solution,
as prime exponents in a rational square are even. Therefore
$x^2-3$ remains irreducible over $Q(\sqrt{2})$, and the tower law gives degree
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
$Q(\sqrt{2},\sqrt{8})=Q(\sqrt{2})$, not a degree-four extension.

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

## 13. Coordinates of ruler and compass constructions

The degree language gives an obstruction to geometric construction before any Galois group has been computed. Fix a unit segment in the Euclidean plane and identify its endpoints with $(0,0)$ and $(1,0)$. A ruler draws the line through two already constructed distinct points. A compass draws a circle with constructed center and a radius equal to the distance between two constructed points. A new point is an intersection of two such curves when the intersection is isolated. These conventions allow the usual transfer of a length; they do not allow arbitrary marks or a freely adjustable measuring scale.

**Definition 1.13 (Constructible coordinate).** A real number is constructible if it occurs as one coordinate of a point obtained from the two fixed initial points by finitely many of those operations. Negative coordinates are allowed. The definition concerns an exact finite construction, rather than a numerical approximation or a sufficiently convincing drawing.

**Proposition 1.14 (One construction step).** Suppose every available coordinate belongs to a real field $K$. The coordinates of any new isolated line–line, line–circle or circle–circle intersection belong to $K$ or to a quadratic extension $K(\sqrt d)$ with $d\in K$ positive.

*Proof.* A line through points with coordinates in $K$ has equation $ax+by=c$ with $a,b,c\in K$ and $(a,b)\ne(0,0)$. A circle with center in $K^2$ and a radius supplied by a constructed distance has equation
$$
(x-u)^2+(y-v)^2=r^2,
$$
where $u,v,r^2\in K$. It is the square of the radius, not necessarily a positive square root already in $K$, that occurs in this equation.

Two nonparallel lines are solved by a nonsingular two-by-two linear system over $K$, so their intersection belongs to $K^2$. Parallel distinct lines have no intersection, and coincident lines have no isolated intersection; neither introduces a coordinate.

For a line and a circle, solve the line for a coordinate with nonzero coefficient and substitute into the circle. The resulting quadratic in the other coordinate has coefficients in $K$ and nonzero quadratic coefficient. The quadratic formula puts its real roots in $K(\sqrt d)$ for the discriminant $d\in K$ when $d>0$; a zero discriminant gives a point in $K^2$, and a negative one gives no real point. Substitution recovers the other coordinate in the same field.

Subtracting two circle equations eliminates $x^2+y^2$. When the centers differ, this gives a genuine line with coefficients in $K$, reducing to the previous case. Concentric circles either have no common point or coincide; again there is no new isolated intersection. Thus all permitted cases have the stated degree bound. ∎

The exceptional cases are essential. A formal quadratic formula cannot justify dividing by a zero line coefficient, and coincident circles do not manufacture arbitrary points. A construction must specify an actual isolated intersection whenever it introduces a point.

**Theorem 1.15 (Quadratic-tower obstruction).** Every constructible real number $\alpha$ lies in a finite tower
$$
\mathbb Q=K_0\subseteq K_1\subseteq\cdots\subseteq K_r\subseteq\mathbb R,
\qquad [K_j:K_{j-1}]\in\{1,2\}.
$$
Consequently $\alpha$ is algebraic over $\mathbb Q$ and $[\mathbb Q(\alpha):\mathbb Q]$ is a power of two.

*Proof.* Start with the field generated by the initial coordinates, which is $\mathbb Q$. Apply Proposition 1.14 at each finite construction step, enlarging the coordinate field by at most a real square root. If a step adds several points, all coordinates of a given intersection are in the same indicated quadratic field; finitely many such choices can be incorporated successively. The tower law gives $[K_r:\mathbb Q]=2^s$ for some integer $s\ge0$. Since $\mathbb Q(\alpha)\subseteq K_r$, the same law says $[\mathbb Q(\alpha):\mathbb Q]$ divides $2^s$, so it too is a power of two. In particular it is finite, which proves algebraicity. ∎

This is a necessary condition. Having degree four, eight or another power of two does not by itself exhibit a quadratic tower containing a number. The converse criterion concerns membership in such a tower, a stronger statement than the degree of its smallest field. Later Galois theory distinguishes these conditions; no converse is being inferred from the divisibility argument here.

**Example 1.16 (Doubling a cube).** A cube of side one has volume one. A cube of doubled volume needs side $\alpha=\sqrt[3]{2}$. The polynomial $x^3-2$ is irreducible over $\mathbb Q$ by Eisenstein at 2, so the minimal polynomial of $\alpha$ has degree three. Three is not a power of two, and Theorem 1.15 therefore rules out an exact ruler and compass construction from the unit segment. Approximating the side to any prescribed decimal accuracy is a different problem and does not contradict this impossibility.

**Example 1.17 (A nested quadratic degree).** Let $\alpha=\sqrt{2+\sqrt2}$. The inclusions
$$
\mathbb Q\subseteq\mathbb Q(\sqrt2)
\subseteq\mathbb Q(\sqrt2,\alpha)
$$
have degrees at most two each. Since $\alpha^2-2=\sqrt2$, the last field equals $\mathbb Q(\alpha)$. The second step has degree exactly two. Indeed, if $(a+b\sqrt2)^2=2+\sqrt2$ for rational $a,b$, comparison gives $a^2+2b^2=2$ and $2ab=1$. Thus neither coefficient is zero, and substitution gives $a^4-2a^2+1/2=0$, so $a^2=1\pm\sqrt2/2$, impossible for rational $a$. Hence $[\mathbb Q(\alpha):\mathbb Q]=4$. It satisfies $x^4-4x^2+2=0$; degree four proves this polynomial is minimal. The tower displays why the degree is a power of two rather than merely noticing it after a polynomial calculation.

**Example 1.18 (Trisecting a particular angle).** Exact trisection of a $60$-degree angle would construct a $20$-degree angle. Set $t=2\cos20^\circ$. The triple-angle identity gives $t^3-3t=2\cos60^\circ=1$, so $t$ is a root of $x^3-3x-1$. A reducible cubic over $\mathbb Q$ has a rational root, and the only possible rational roots here are $\pm1$. Substitution gives $-3$ and $1$, respectively, so neither is a root. The polynomial is irreducible and $[\mathbb Q(t):\mathbb Q]=3$. Coordinates of the hypothesised constructed angle would include $\cos20^\circ$, and doubling a constructible segment remains constructible. Therefore $t$ would be constructible, contradicting Theorem 1.15. This disproves a universal trisection procedure; it does not say no angle can be trisected.

The examples connect field degree with a geometric operation without using a radical-solvability theorem. An expression may use cube roots and remain perfectly algebraic while failing the geometric quadratic-tower condition. Conversely, quadratic formulas alone do not describe all field automorphisms. The next chapters will separate root adjunction, normal closure and symmetry before bringing these viewpoints together.

## Exercises with full solutions

### GAL-CH01-E001 — Exercise 1: Extension audit

Decide which inclusions define field extensions: $Q \subseteq R$, $\mathbb{Z} \subseteq Q$,
$\mathbb{F}_{2} \subseteq \mathbb{F}_{2}[x]$, and $R \subseteq C$.

<details>
<summary>Hint 1</summary>

Both objects in a field extension must be fields.

</details>

<details>
<summary>Hint 2</summary>

Being a subring inclusion alone does not meet that definition.

</details>

#### GAL-CH01-E001 — Solution

<details>
<summary>Solution</summary>


$Q \subseteq R$ and $R \subseteq C$ are field extensions because
both endpoints are fields and the indicated inclusions preserve their field
operations. $\mathbb{Z} \subseteq Q$ is not called a field extension because $\mathbb{Z}$ is not
a field. $\mathbb{F}_{2}[x]$ is not a field, so $\mathbb{F}_{2} \subseteq \mathbb{F}_{2}[x]$ is not a field
extension either, though it is an algebra inclusion.



</details>

### GAL-CH01-E002 — Exercise 2: A complex basis

Prove $\{1,i\}$ is an $R$-basis of $C$.

<details>
<summary>Hint 1</summary>

Write each complex number uniquely as a+bi with real a,b.

</details>

<details>
<summary>Hint 2</summary>

Uniqueness proves independence, while existence proves spanning.

</details>

#### GAL-CH01-E002 — Solution

<details>
<summary>Solution</summary>


Every complex number has the form $a+bi$ with real $a,b$, so the
set spans. If $a+bi=0$, equality of real and imaginary parts gives $a=b=0$, so
it is independent. Hence $[C:R]=2$.



</details>

### GAL-CH01-E003 — Exercise 3: Product bases

Prove the basis claim used in the tower law.

<details>
<summary>Hint 1</summary>

Multiply the two basis lists.

</details>

<details>
<summary>Hint 2</summary>

For spanning expand coefficients in the lower basis; for independence group terms by the upper basis first.

</details>

#### GAL-CH01-E003 — Solution

<details>
<summary>Solution</summary>


Let $\{u_i\}$ be an $F$-basis of $K$ and $\{v_j\}$ a $K$-basis of
$E$. Expanding first in the $v_j$ and then each coefficient in the $u_i$
shows the products span $E$ over $F$. If
$\sum_j(\sum_i a_{ij}u_i)v_j=0$, $K$-independence of the $v_j$ gives
$\sum_i a_{ij}u_i=0$ for every $j$; $F$-independence of the $u_i$ then gives
all $a_{ij}=0$. Thus the products form a basis.



</details>

### GAL-CH01-E004 — Exercise 4: Evaluation kernel

Show $\ker(ev_\alpha)$ is an ideal of $F[x]$ and explain what its elements mean.

<details>
<summary>Hint 1</summary>

Evaluation preserves addition and multiplication.

</details>

<details>
<summary>Hint 2</summary>

Its kernel consists exactly of polynomial relations satisfied by α.

</details>

#### GAL-CH01-E004 — Solution

<details>
<summary>Solution</summary>


Evaluation is a ring homomorphism, so its kernel is an ideal:
differences of vanishing polynomials vanish, and multiplying one by any
polynomial preserves vanishing. Its elements are exactly the polynomial
relations over $F$ satisfied by $\alpha$.



</details>

### GAL-CH01-E005 — Exercise 5: Minimal polynomial of $\sqrt{2}$

Find and justify the minimal polynomial of $\sqrt{2}$ over $Q$.

<details>
<summary>Hint 1</summary>

Use the equation (√2)²=2.

</details>

<details>
<summary>Hint 2</summary>

Prove x²−2 has no rational root, so no monic polynomial of smaller positive degree can annihilate √2.

</details>

#### GAL-CH01-E005 — Solution

<details>
<summary>Solution</summary>


The element satisfies $x^2-2$. This polynomial has no rational
root: a reduced root $a/b$ would make $a^2=2b^2$, forcing both $a$ and $b$
even. A reducible quadratic over a field has a root, so $x^2-2$ is
irreducible. It is monic and annihilates $\sqrt{2}$, hence it is the minimal
polynomial.



</details>

### GAL-CH01-E006 — Exercise 6: Every relation is divisible by the minimal one

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

#### GAL-CH01-E006 — Solution

<details>
<summary>Solution</summary>


If $m|f$, evaluation gives $f(\alpha)=0$. Conversely divide
$f=qm+r$ with $\deg r<\deg m$. When $f(\alpha)=0$, also $r(\alpha)=0$.
Minimality of $m$ forces $r=0$, so $m|f$.



</details>

### GAL-CH01-E007 — Exercise 7: Inverses in a quadratic field

Find the inverse of $3+2\sqrt{2}$ in $Q(\sqrt{2})$.

<details>
<summary>Hint 1</summary>

Multiply by the conjugate 3−2√2.

</details>

<details>
<summary>Hint 2</summary>

The product is the nonzero rational scalar 9−8.

</details>

#### GAL-CH01-E007 — Solution

<details>
<summary>Solution</summary>


Multiply by the conjugate:
$(3+2\sqrt{2})(3-2\sqrt{2})=9-8=1$. Therefore the inverse is
$3-2\sqrt{2}$. The nonzero denominator in the general conjugate formula happens
to equal one here.



</details>

### GAL-CH01-E008 — Exercise 8: A cubic extension

Let $\rho^3=2$ with $\rho$ real. Prove $[Q(\rho):Q]=3$ and reduce $\rho^5+\rho^3$.

<details>
<summary>Hint 1</summary>

The cubic x³−2 has no rational root.

</details>

<details>
<summary>Hint 2</summary>

Reduce powers with ρ³=2 after establishing the quotient basis.

</details>

#### GAL-CH01-E008 — Solution

<details>
<summary>Solution</summary>


A reducible cubic over $Q$ has a rational root. The rational-root
test gives only candidates $\pm 1,\pm 2$, none of which is a root of $x^3-2$, so
that polynomial is irreducible. The degree theorem gives degree three. Using
$\rho^3=2$, $\rho^5=\rho^2\cdot \rho^3=2\rho^2$, so the normal form is $2\rho^2+2$.



</details>

### GAL-CH01-E009 — Exercise 9: A quotient normal form

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

#### GAL-CH01-E009 — Solution

<details>
<summary>Solution</summary>


The polynomial has no root in $\mathbb{F}_{3}$, so it is irreducible. The
quotient has basis $\{1,\alpha\}$ and relation $\alpha^2=-1=2$. Then
$(\alpha+1)(\alpha+2)=\alpha^2+3\alpha+2=2+0+2=1$, so the inverse is $\alpha+2$.



</details>

### GAL-CH01-E010 — Exercise 10: Changing the generator

Find the minimal polynomial over $Q$ of $\beta=1+\sqrt{2}$.

<details>
<summary>Hint 1</summary>

Rewrite √2 as β−1.

</details>

<details>
<summary>Hint 2</summary>

Substitute into (β−1)²=2 and use the equality of the generated fields to justify minimality.

</details>

#### GAL-CH01-E010 — Solution

<details>
<summary>Solution</summary>


Since $\beta-1=\sqrt{2}$, it satisfies
$(x-1)^2-2=x^2-2x-1$. Its roots $1\pm \sqrt{2}$ are not rational, so the
quadratic is irreducible over $Q$. Being monic and annihilating $\beta$, it is
the minimal polynomial. Also $Q(\beta)=Q(\sqrt{2})$, confirming degree two.



</details>

### GAL-CH01-E011 — Exercise 11: Two square roots

Prove the minimal polynomial of $\sqrt{2}+\sqrt{3}$ over $Q$ is
$x^4-10x^2+1$.

<details>
<summary>Hint 1</summary>

Square the sum and isolate √6, then square again.

</details>

<details>
<summary>Hint 2</summary>

To justify minimal degree, recover both √2 and √3 from the sum and prove the biquadratic field has degree four.

</details>

#### GAL-CH01-E011 — Solution

<details>
<summary>Solution</summary>


Squaring twice gives the displayed polynomial relation. If
$\alpha=\sqrt{2}+\sqrt{3}$, then
$\alpha^{-1}=\sqrt{3}-\sqrt{2}$, so both square roots lie in $Q(\alpha)$.
The extension $Q(\sqrt{2})/Q$ has degree two. If $\sqrt{3}=a+b \sqrt{2}$,
squaring and comparing the rational and $\sqrt{2}$ parts forces $ab=0$. If
$b=0$, it would give rational $a$ with $a^2=3$; if $a=0$, it would give
rational $b$ with $b^2=3/2$. Prime-parity in a reduced fraction rules out
both equations.
Thus adjoining $\sqrt{3}$ contributes degree two. The tower degree is four, so
the monic annihilating quartic has least possible degree and is minimal.



</details>

### GAL-CH01-E012 — Exercise 12: Algebraic elements form a field

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

#### GAL-CH01-E012 — Solution

<details>
<summary>Solution</summary>


The tower $F \subseteq F(\alpha) \subseteq F(\alpha,\beta)$ is finite:
each adjunction has degree at most the degree of a known annihilating
polynomial. Every element of a finite extension is algebraic by linear
dependence of its powers. Both $\alpha+\beta$ and the nonzero inverse
$\alpha^{-1}$ belong to this finite extension, so both are algebraic.



</details>

### GAL-CH01-E013 — Exercise 13: A two-generator degree bound

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

#### GAL-CH01-E013 — Solution

<details>
<summary>Solution</summary>


The tower law gives
$[F(\alpha,\beta):F]=[F(\alpha,\beta):F(\alpha)]m$. The minimal polynomial of
$\beta$ over $F(\alpha)$ divides any polynomial over $F$ that annihilates beta,
so its degree, which equals the first factor, is at most $n$. Hence the product
is at most $mn$.



</details>

### GAL-CH01-E014 — Exercise 14: Degree divisibility

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

#### GAL-CH01-E014 — Solution

<details>
<summary>Solution</summary>


The tower law gives $12=[E:K][K:F]$, so $[K:F]$ is a positive
divisor of twelve. The only possibilities permitted by degree arithmetic are
$1,2,3,4,6,12$. This does not assert that every listed degree actually occurs.



</details>

### GAL-CH01-E015 — Exercise 15: Prime-degree extensions

Prove an extension $E/F$ of degree seven has no proper intermediate field.

<details>
<summary>Hint 1</summary>

Apply the tower law.

</details>

<details>
<summary>Hint 2</summary>

A positive divisor of seven is either one or seven, and degree one means equality of fields.

</details>

#### GAL-CH01-E015 — Solution

<details>
<summary>Solution</summary>


For an intermediate $K$, the tower law gives
$7=[E:K][K:F]$. Since seven is prime, one factor is one. If $[K:F]=1$, then
$K=F$; if $[E:K]=1$, then $K=E$. There is no other intermediate field.



</details>

### GAL-CH01-E016 — Exercise 16: A transcendental simple extension

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

#### GAL-CH01-E016 — Solution

<details>
<summary>Solution</summary>


Evaluation identifies $F[t]$ with the polynomial ring $F[x]$.
The nonzero element $t$ has no polynomial inverse: $tg(t)=1$ would give the
impossible polynomial identity $xg(x)=1$, since evaluation is injective.
The field $F(t)$ is the fraction field of $F[t]$ and does contain $1/t$ and all
rational functions.



</details>

### GAL-CH01-E017 — Exercise 17: Finite extensions are algebraic

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

#### GAL-CH01-E017 — Solution

<details>
<summary>Solution</summary>


The $n+1$ elements $1,\beta,...,\beta^n$ are vectors in an
$n$-dimensional $F$-space, so they are dependent. Their dependence is a
nonzero polynomial relation of degree at most $n$. The minimal polynomial
divides every relation, so its degree is at most $n$.



</details>

### GAL-CH01-E018 — Exercise 18: A minimal polynomial in $\mathbb{F}_{8}$

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

#### GAL-CH01-E018 — Solution

<details>
<summary>Solution</summary>


The cubic has no root in $\mathbb{F}_{2}$, since its values at zero and one
are both one. A reducible cubic has a linear factor, so it is irreducible.
The class $\alpha$ is annihilated by $x^3+x+1$; quotient construction therefore
makes this its minimal polynomial. The power basis is
$\{1,\alpha,\alpha^2\}$.



</details>

### GAL-CH01-E019 — Exercise 19: Primitive finite-field elements

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

#### GAL-CH01-E019 — Solution

<details>
<summary>Solution</summary>


The subfield $\mathbb{F}_{p}(\gamma)$ contains every power of $\gamma$, hence
all $p^n-1$ nonzero elements of $\mathbb{F}_{p^n}$, as well as zero. It is the whole
field. Therefore the degree of the minimal polynomial is
$[\mathbb{F}_{p}(\gamma):\mathbb{F}_{p}]=[\mathbb{F}_{p^n}:\mathbb{F}_{p}]=n$.



</details>

### GAL-CH01-E020 — Exercise 20: When the degree bound is strict

Compute $[Q(\sqrt{2},\sqrt{8}):Q]$ and compare it with the product of the two
individual minimal-polynomial degrees.

<details>
<summary>Hint 1</summary>

Use √8=2√2.

</details>

<details>
<summary>Hint 2</summary>

Both generators lie in Q(√2), so adjoining the second adds no new degree.

</details>

#### GAL-CH01-E020 — Solution

<details>
<summary>Solution</summary>


Since $\sqrt{8}=2\sqrt{2}$, each generator belongs to the field of
the other. Thus the joint field is $Q(\sqrt{2})$ and has degree two. Each
individual minimal polynomial has degree two, whose product is four; the
two-generator upper bound is strict because the generators are dependent.



</details>

## GAL-CH01-P001 — Project: a complete algebraic-element dossier

Let $\rho$ be the real cube root of two. Produce a field dossier that proves the
minimal polynomial, constructs $Q(\rho)$ as a quotient, gives canonical normal
forms and an exact multiplication rule, computes a nontrivial inverse, audits
all intermediate-field possibilities, changes to the generator $\rho+1$, and
predicts the possible images of $\rho$ in $C$ for the next chapter's study of
embeddings.

### Deliverables

Give an irreducibility proof; the quotient map and its kernel; unique normal forms with a proof of uniqueness; multiplication and a checked inverse; a complete intermediate-field argument; the translated minimal polynomial; and all base-preserving embeddings into $\mathbb C$. Distinguish these embeddings from automorphisms of the real field $\mathbb Q(\rho)$.

### Solution framework and rubric

The rational-root test proves $x^3-2$ irreducible, so
$Q(\rho)$ is isomorphic to $Q[x]/(x^3-2)$ and has basis
$\{1,\rho,\rho^2\}$. Reduce every product by $\rho^3=2$; explicitly,

$(a+b \rho+c \rho^2)(u+v \rho+w \rho^2)$

has coefficients

$au+2bw+2cv$, $av+bu+2cw$, and $aw+bv+cu$

on $1,\rho,\rho^2$. For a concrete inverse,

$(1+\rho)^{-1}=(1-\rho+\rho^2)/3$,

as direct multiplication verifies. The tower law and prime degree three leave
only $Q$ and $Q(\rho)$ as intermediate fields. Setting $y=\rho+1$ transforms the
minimal polynomial to
$(x-1)^3-2=x^3-3x^2+3x-3$; translation is an automorphism of $Q[x]$, so
irreducibility is preserved. Any $Q$-preserving embedding into $C$ must send
$\rho$ to a root of $x^3-2$, namely $\rho$, $\rho \zeta$, or $\rho \zeta^2$, where
$\zeta$ is a primitive complex cube root of one. Conversely, substituting any
one of these roots into the unique normal form respects the defining relation,
so each choice gives an embedding. This completes the dossier while preparing
the retained [splitting-field analysis](../algebra-patterns-structure/splitting-fields-separability.md).

Division by the monic cubic gives existence and uniqueness of representatives of degree below three in the quotient; evaluation at $\rho$ has kernel $(x^3-2)$, proving the quotient identification. The two nonreal images of $\rho$ define embeddings into $\mathbb C$, but do not define automorphisms of the real field $\mathbb Q(\rho)$, since their images leave that field. The inverse and multiplication identities must be checked directly, and the intermediate-field claim needs the tower-law divisibility argument.

### GAL-CH01-E021 — Exercise 21: A geometric degree obstruction

Prove that no ruler and compass construction from a unit segment produces a real root of $x^3-3x-1$.

<details>
<summary>Hint</summary>

For a cubic over $\mathbb Q$, reducibility implies a rational root. Compare the possible degree with the quadratic-tower theorem.

</details>

<details>
<summary>Solution</summary>

A rational root of this monic integer polynomial must be an integer dividing its constant coefficient, hence $1$ or $-1$. Substitution gives $-3$ and $1$, so neither is a root. The cubic is therefore irreducible over $\mathbb Q$, and every root has degree three. A real constructible number must lie in a quadratic tower and has degree a power of two. Since three is not a power of two, none of the real roots can be produced by such a construction. The argument concerns exact construction; a decimal approximation does not produce an exact algebraic root.

</details>

## Sources

Thomas W. Judson's author-hosted [Extension Fields](https://twjudson.github.io/aata-files/aata-html/fields-section-extension-fields.html) is complementary primary reading for evaluation, algebraic adjunction and degree. The worked coordinate and polynomial certificates here retain their declared base fields.

## Summary

A field extension is a vector space over its base field. Product bases prove the tower law, and polynomial evaluation gives minimal polynomials and unique quotient normal forms. Finite extensions are algebraic; degree bounds and invariant coordinates prevent claims stronger than the actual adjunction permits. Ruler and compass intersections enlarge coordinate fields by at most quadratic steps, so constructible real numbers have power-of-two degree. This gives exact impossibility results before the next chapter organises all conjugate roots into a splitting field.
