
# Rings, Subrings, Domains, and Unit Conventions

Groups organize one reversible operation. Rings organize addition together
with a second operation that distributes over it and may fail to commute or be
reversible. This extra operation creates new phenomena: zero divisors obstruct
cancellation, units form only part of the ring, nilpotents disappear after
repeated multiplication, and idempotents reveal product decompositions.

Ring terminology varies between texts, especially about multiplicative
identity, subrings, the zero ring, and homomorphisms. This chapter declares one
consistent convention and keeps exceptions explicit. The [ring homomorphism and ideal chapter](ring-homomorphisms-ideals-quotients.md) will then
show that ideals are precisely the additive subgroups that can be collapsed
without breaking multiplication.

The local prerequisites are operations and homomorphisms from Chapter 1 and
the group facts needed for addition. Polynomial factorization is not assumed.

## 1. Ring conventions

**Definition 13.1 (Ring and identity conventions).**

A **ring** $R$ has addition and multiplication satisfying:

1. $(R,+)$ is an abelian group with identity $0$;
2. multiplication is associative;
3. there is a multiplicative identity $1$;
4. multiplication distributes over addition on both sides.

Unless explicitly stated, rings in this book have identity, subrings contain
the ambient identity, and ring homomorphisms preserve identity. A ring is
**commutative** if $ab=ba$ for all elements.

The **zero ring**, with one element satisfying $0=1$, is allowed as a ring and
as a quotient. Fields and integral domains are required to be nonzero, so the
zero ring is neither.

Some sources use “ring” for a structure without $1$, allow subrings with a
different identity, or allow homomorphisms that do not preserve $1$. Those are
coherent alternatives, but mixing conventions inside a proof is not. When a
nonunital object is needed here, it is labeled explicitly.

## 2. Consequences of the axioms

For every $a,b \in R$,

$a0=0=0a$.

Indeed, $a0=a(0+0)=a0+a0$; additive cancellation gives $a0=0$. The other
side is similar.

Distributivity and uniqueness of additive inverses give

$(-a)b=-(ab)=a(-b)$,

and hence

$(-a)(-b)=ab$.

Also

$a(b-c)=ab-ac$, $(a-b)c=ac-bc$.

Powers are defined by $a^0=1$ and $a^{n+1}=a^n a$. Powers of a single element
obey $a^m a^n=a^{m+n}$ even in a noncommutative ring, but

$(ab)^n=a^n b^n$

generally requires $a$ and $b$ to commute.

### Nonexample: a tempting binomial formula

In a noncommutative ring,

$(a+b)^2=a^2+ab+ba+b^2$,

not necessarily $a^2+2ab+b^2$. The familiar formula uses $ab=ba$.

## 3. A library of examples

### Arithmetic rings

$\mathbb{Z}$, $\mathbb{Q}$, $\mathbb{R}$, and $\mathbb{C}$ are commutative rings. The latter three are fields;
$\mathbb{Z}$ is not because most nonzero integers lack integer inverses.

For $n\ge 1$, residue classes $\mathbb{Z}/n\mathbb{Z}$ form a commutative ring. The identity is
$[1]$; when $n=1$, this is the zero ring.

### Product rings

If $R,S$ are rings, $R \times S$ has coordinatewise operations and identity
$(1_R,1_S)$. Even when both factors are fields, the product is not an integral
domain when both are nonzero:

$(1,0)(0,1)=(0,0)$.

### Function rings

For a set $X$ and commutative ring $R$, all functions $X\to R$ form a
commutative ring under pointwise operations. The zero and identity are the
constant functions. If $X$ has at least two points and $R$ is nonzero, this
ring has zero divisors: indicator functions of disjoint nonempty subsets can
multiply to zero.

### Matrix rings

Square matrices $M_n(R)$ form a ring. For $n\ge 2$, multiplication is generally
noncommutative. The identity is $I_n$, not the matrix whose every entry is one.
Over a field, the units are the invertible matrices $GL_n(R)$.

### Polynomial rings

For commutative $R$, formal polynomials $R[x]$ form a commutative ring with
coefficientwise addition and convolution multiplication. Its identity is the
constant polynomial one. The [polynomial chapter](polynomial-rings-factorization.md) develops its divisibility theory.

### Nonexamples

- Positive integers lack additive inverses.
- Odd integers are not closed under addition.
- Singular square matrices are not a ring: they are not closed under addition
  and do not contain the identity.
- Irrational real numbers are not closed under addition, since
  $\sqrt{2}+(-\sqrt{2})=0$ is rational.

## 4. Subrings and the same-identity convention

**Definition 13.2 (Unital subring).**

A subset $S \subseteq R$ is a **subring** when it is a ring under the inherited
operations and has the same identity as $R$.

**Subring criterion.** A subset $S$ is a subring iff:

- $1_R \in S$;
- $a-b \in S$ for all $a,b \in S$;
- $ab \in S$ for all $a,b \in S$.

The difference condition makes $S$ an additive subgroup; product closure and
the inherited identity finish the ring axioms. Associativity and
distributivity are inherited from $R$.

### Examples

$\mathbb{Z}$ is a subring of $\mathbb{Q}$, and $\mathbb{Q}$ is a subring of $\mathbb{R}$. The set

$\mathbb{Z}[\sqrt{2}]=\{a+b \sqrt{2}:a,b \in \mathbb{Z}\}$

is a subring of $\mathbb{R}$: differences and products remain in the same form and it
contains one.

The diagonal

$\Delta(R)=\{(r,r):r \in R\}$

is a subring of $R \times R$, isomorphic to $R$.

By contrast, $2\mathbb{Z}$ is closed under differences and products but does not contain
the ambient identity $1$, so it is not a subring of $\mathbb{Z}$ under this convention.
The [ideal chapter](ring-homomorphisms-ideals-quotients.md) identifies it as an ideal.

Intersections of subrings are subrings. Therefore the **subring generated** by
a subset $A$ is the intersection of all subrings containing $A$: equivalently,
it consists of integer-coefficient expressions built from elements of $A$
using addition, subtraction, and multiplication.

## 5. Characteristic and the prime subring

**Definition 13.3 (Characteristic and prime subring).**

Every ring receives a unique unital homomorphism

$\eta_R:\mathbb{Z}\to R$, $n\to n1_R$.

Its kernel is $n\mathbb{Z}$ for a unique $n\ge 0$. The **characteristic** of $R$ is this
$n$. Characteristic zero means the map is injective. If $n>0$, it is the least
positive integer satisfying $n1_R=0$.

The image of $\eta_R$ is the **prime subring** of $R$. It is isomorphic to $\mathbb{Z}$
in characteristic zero and to $\mathbb{Z}/n\mathbb{Z}$ in characteristic $n$.

If $R$ is an integral domain, its characteristic is zero or prime. For if
$n=ab$ were composite with $1<a,b<n$, then

$(a1_R)(b1_R)=n1_R=0$,

while minimality of $n$ makes both factors nonzero, contradicting absence of
zero divisors.

The converse is false: prime characteristic does not make a ring a domain.
For example, $\mathbb{F}_{p} \times \mathbb{F}_{p}$ has characteristic $p$ and zero divisors.

## 6. Units and their group

**Definition 13.4 (Units).**

An element $u \in R$ is a **unit** if there exists $v \in R$ with

$uv=vu=1$.

The inverse is unique: if $v,w$ are two-sided inverses, then
$v=v(uw)=(vu)w=w$. The units form a group $U(R)$ under multiplication. Closure
uses $(uv)^{-1}=v^{-1}u^{-1}$.

In a commutative ring, one-sided and two-sided inverse conditions agree. In a
general noncommutative ring, the definition requires both sides; for square
matrices over a field a left or right inverse happens to imply the other, but
that is a finite-dimensional theorem rather than a ring axiom.

### Units modulo $n$

**Worked example 13.1 (Find the units and inverses modulo twelve).**

The class $[a] \in \mathbb{Z}/n\mathbb{Z}$ is a unit exactly when $\gcd(a,n)=1$. If the gcd is one,
Bézout gives $ax+ny=1$, so $[a][x]=[1]$. Conversely, an inverse congruence
$ax=1 \bmod n$ makes every common divisor of $a,n$ divide one.

Thus

$U(\mathbb{Z}/12\mathbb{Z})=\{[1],[5],[7],[11]\}$. The inverse of each listed class is itself: the integer squares are $1,25,49,121$, all congruent to one modulo twelve. Every excluded class has a common factor two or three with twelve, so multiplying it by any class cannot produce one. This both constructs the inverses and rules out missing units.

### Units in products

$(r,s)$ is a unit in $R \times S$ exactly when both coordinates are units, and
then $(r,s)^{-1}=(r^{-1},s^{-1})$.

## 7. Zero divisors, nilpotents, and idempotents

In a commutative ring, a nonzero element $a$ is a **zero divisor** if there is
nonzero $b$ with $ab=0$. In noncommutative rings, left and right zero divisors
can differ, so the side must be stated.

An element $a$ is **nilpotent** if $a^m=0$ for some $m\ge 1$. Every nonzero
nilpotent is a zero divisor: choose the least $m$ with $a^m=0$; then
$a^{m-1}\ne 0$ and $a a^{m-1}=0$.

An element $e$ is **idempotent** if $e^2=e$. Besides $0$ and $1$, a
commutative ring can have nontrivial idempotents. Such an $e$ gives

$e(1-e)=0$.

Both factors are nonzero when $e$ is neither zero nor one, so nontrivial
idempotents are zero divisors. In $R \times S$, $(1,0)$ and $(0,1)$ are
complementary idempotents; they reveal the two product components.

The implications do not reverse in general. In $\mathbb{Z}/6\mathbb{Z}$, $[2]$ is a zero
divisor but not nilpotent. In $\mathbb{Z}/4\mathbb{Z}$, $[2]$ is nilpotent because $[2]^2=0$.

## 8. Integral domains and cancellation

**Definition 13.5 (Integral domains and fields).**

An **integral domain** is a nonzero commutative ring with no zero divisors. A
**field** is a nonzero commutative ring in which every nonzero element is a
unit. Every field is an integral domain: if $ab=0$ and $a\ne 0$, multiply by
$a^{-1}$ to get $b=0$.

In a domain, nonzero factors cancel. If $ab=ac$ and $a\ne 0$, then

$a(b-c)=0$.

No zero divisors forces $b-c=0$, hence $b=c$. Conversely, if every nonzero
element cancels, then $ab=0=a0$ with $a\ne 0$ gives $b=0$; cancellation and the
domain condition are equivalent in a nonzero commutative ring.

### Finite domains are fields

**Theorem 13.1 (Finite integral domains are fields).**

Let finite $R$ be an integral domain and take nonzero $a$. Multiplication

$m_a:R\to R$, $x\to ax$,

is injective by cancellation. An injective self-map of a finite set is onto,
so some $x$ satisfies $ax=1$. Commutativity makes $x$ a two-sided inverse.
Every nonzero element is a unit; $R$ is a field.

Finiteness is essential. $\mathbb{Z}$ is an infinite integral domain but not a field.

## 9. Residue rings

**Worked example 13.2 (Prime and composite residue rings).**

For $n>1$, the following are equivalent:

1. $\mathbb{Z}/n\mathbb{Z}$ is an integral domain;
2. $\mathbb{Z}/n\mathbb{Z}$ is a field;
3. $n$ is prime.

If $n=p$ is prime, every nonzero class is relatively prime to $p$ and hence a
unit. If $n=ab$ is composite with $1<a,b<n$, then $[a]$ and $[b]$ are nonzero
but multiply to zero, so the ring is not a domain.

For composite $n$, units and zero divisors can coexist. In $\mathbb{Z}/12\mathbb{Z}$, $[5]$ is a
unit, $[4]$ is a zero divisor, and $[6]$ is a nonzero element with square zero.
The later Chinese-remainder chapter will explain how coprime factors of $n$
split this ring into product components.

## 10. Matrices and noncommutativity

**Worked example 13.3 (Matrix units separate multiplication order).**

Let $R$ be a nonzero ring and $n\ge 2$. Let $E_{ij}$ denote the matrix with one in position $(i,j)$ and zero elsewhere.
Matrix units satisfy

$E_{ij}E_{kl}=\delta_{jk}E_{il}$.

Since $1_R\ne0_R$, $E_{11}\ne E_{22}$. For $n\ge 2$, $E_{12}E_{21}=E_{11}$ while
$E_{21}E_{12}=E_{22}$, proving noncommutativity. Also

$E_{11}E_{22}=0$

with both factors nonzero. Thus even over a field, a matrix ring has zero
divisors for $n\ge 2$; it is not an integral domain, which in any case requires
commutativity.

Over a field, a matrix is a unit exactly when it represents a bijective linear
map, equivalently when its determinant is nonzero. This criterion belongs to
linear algebra; the ring-theoretic definition remains the existence of a
two-sided inverse.

## 11. Polynomial rings preserve domains

If $R$ is an integral domain, then $R[x]$ is an integral domain. For nonzero
polynomials $f,g$, the product of their leading coefficients is nonzero, so

$\deg(fg)=\deg f+\deg g$

and in particular $fg\ne 0$.

Conversely, constant polynomials embed $R$ in $R[x]$, so any zero divisors in
$R$ remain zero divisors in $R[x]$. Therefore

$R[x]\text{ is an integral domain}\iff R\text{ is an integral domain}$.

Their characteristics agree because both identities are the constant
polynomial one. If $R$ is a domain, the only units of $R[x]$ are constant
units: degree additivity forces both factors of a polynomial unit to have
degree zero. With nilpotent coefficients, nonconstant units can occur; in
$(\mathbb{Z}/4\mathbb{Z})[x]$, $(1+2x)^2=1$.

## 12. Common errors

- Ring multiplication need not commute.
- The identity convention must be stated; here subrings share the ambient
  identity and homomorphisms preserve it.
- The zero ring is allowed as a ring but excluded from fields and domains.
- A unit has an inverse; a nonzero element need not be a unit.
- Zero divisor does not mean “dividing by zero.” It is a nonzero factor in a
  product that equals zero.
- Prime characteristic does not by itself imply absence of zero divisors.
- Cancellation needs a nonzero factor and a domain hypothesis.
- Finite integral domains are fields; infinite integral domains need not be.
- Matrix rings over a nonzero ring are noncommutative for size at least two.
- The units of $R[x]$ can be nonconstant when $R$ has nilpotents.

## 13. Chapter summary and retrieval prompts

Rings combine an abelian additive group with associative distributive
multiplication and, here, an identity. Subrings share that identity. The
canonical map from $\mathbb{Z}$ defines characteristic and the prime subring. Units form
a group; zero divisors obstruct cancellation; nilpotents and idempotents expose
special multiplicative behavior. Domains support cancellation, and finite
domains are fields. Products, function rings, matrices, residues, and
polynomials show why every hypothesis matters.

Retrieve:

1. Which identity and homomorphism conventions are active?
2. What three checks form the subring criterion?
3. How does the map $\mathbb{Z}\to R$ define characteristic?
4. How are units, zero divisors, nilpotents, and idempotents different?
5. Why is cancellation equivalent to no zero divisors in a commutative ring?
6. Where does finiteness enter the finite-domain theorem?
7. Why does $R[x]$ preserve the domain property?

## Exercises with full solutions

### ALG-CH12-E001 — Exercise 1: Multiplication by zero

Prove $0a=0$ from the ring axioms.

<details>
<summary>Hint 1</summary>

Apply distributivity to (0+0)a.

</details>

<details>
<summary>Hint 2</summary>

Cancel 0a in the additive group.

</details>

#### ALG-CH12-E001 — Solution

<details>
<summary>Solution</summary>


$0a=(0+0)a=0a+0a$ by right distributivity. Add the inverse of
$0a$ to both sides to obtain $0=0a$.



</details>

### ALG-CH12-E002 — Exercise 2: Signs in a ring

Prove $(-a)b=-(ab)$ and $(-a)(-b)=ab$.

<details>
<summary>Hint 1</summary>

Expand (a+(−a))b.

</details>

<details>
<summary>Hint 2</summary>

Use uniqueness of additive inverses, then apply the sign rule twice.

</details>

#### ALG-CH12-E002 — Solution

<details>
<summary>Solution</summary>


$ab+(-a)b=(a-a)b=0b=0$, so $(-a)b$ is the additive inverse of
$ab$. Applying this twice gives
$(-a)(-b)=-((-a)b)=-(-(ab))=ab$.



</details>

### ALG-CH12-E003 — Exercise 3: Subring criterion

Prove the criterion stated in Section 4.

<details>
<summary>Hint 1</summary>

Use the additive subgroup criterion.

</details>

<details>
<summary>Hint 2</summary>

Check multiplicative closure and containment of the ambient identity.

</details>

#### ALG-CH12-E003 — Solution

<details>
<summary>Solution</summary>


Difference closure and nonemptiness supplied by $1 \in S$ make
$S$ an additive subgroup, so it contains zero and additive inverses. Product
closure and $1_R \in S$ supply inherited multiplication and the same identity.
Associativity, commutativity of addition, and distributivity are inherited.
Conversely every subring has all three closure properties.



</details>

### ALG-CH12-E004 — Exercise 4: $\mathbb{Z}[\sqrt{2}]$

Verify it is a subring of $\mathbb R$.

<details>
<summary>Hint 1</summary>

Expand sums, differences and products of a+b√2.

</details>

<details>
<summary>Hint 2</summary>

The resulting coefficients stay integral and the set contains one.

</details>

#### ALG-CH12-E004 — Solution

<details>
<summary>Solution</summary>


It contains $1=1+0\sqrt{2}$. Differences stay in the form
$(a-c)+(b-d)\sqrt{2}$. Products satisfy
$(a+b \sqrt{2})(c+d \sqrt{2})=(ac+2bd)+(ad+bc)\sqrt{2}$, whose coefficients are
integers. The subring criterion applies.



</details>

### ALG-CH12-E005 — Exercise 5: Why $2\mathbb{Z}$ is not a subring here

Which subring condition fails, and which conditions hold?

<details>
<summary>Hint 1</summary>

Separate closure from the identity requirement.

</details>

<details>
<summary>Hint 2</summary>

The ambient identity is odd and does not belong to 2Z.

</details>

#### ALG-CH12-E005 — Solution

<details>
<summary>Solution</summary>


$2\mathbb{Z}$ is closed under differences and products, but it does not
contain the ambient identity $1$. It is therefore not a unital subring under
the same-identity convention, although it is a nonunital subring under another
common convention and is an ideal of $\mathbb{Z}$.



</details>

### ALG-CH12-E006 — Exercise 6: The diagonal subring

Prove $\Delta(R)=\{(r,r)\}$ is a subring of $R \times R$ and isomorphic to $R$.

<details>
<summary>Hint 1</summary>

Compute both operations coordinatewise.

</details>

<details>
<summary>Hint 2</summary>

The bijection r↦(r,r) preserves them and the identity.

</details>

#### ALG-CH12-E006 — Solution

<details>
<summary>Solution</summary>


It contains $(1,1)$, and coordinatewise differences and products
remain diagonal. The map $r\to (r,r)$ preserves both operations and identity, is
injective, and is onto the diagonal, so it is an isomorphism to that subring.



</details>

### ALG-CH12-E007 — Exercise 7: Characteristic of a matrix ring

Prove $\operatorname{char}(M_n(R))=\operatorname{char}(R)$ for $n\ge 1$.

<details>
<summary>Hint 1</summary>

Add the matrix identity to itself m times.

</details>

<details>
<summary>Hint 2</summary>

Its diagonal is zero exactly when m1_R=0.

</details>

#### ALG-CH12-E007 — Solution

<details>
<summary>Solution</summary>


The matrix identity is $I_n$. The equation $mI_n=0$ holds
exactly when the scalar $m1_R$ is zero in every diagonal entry. The least
positive such $m$, or its absence, is therefore the same for both rings.



</details>

### ALG-CH12-E008 — Exercise 8: Characteristic of a domain

Prove a domain has characteristic zero or prime.

<details>
<summary>Hint 1</summary>

Suppose the minimal positive characteristic is composite ab.

</details>

<details>
<summary>Hint 2</summary>

The two nonzero scalar multiples a1_R and b1_R would multiply to zero.

</details>

#### ALG-CH12-E008 — Solution

<details>
<summary>Solution</summary>


If positive characteristic $n=ab$ were composite with
$1<a,b<n$, minimality of $n$ makes $a1$ and $b1$ nonzero, but their product is
$n1=0$. That contradicts the absence of zero divisors. Hence positive
characteristic is prime.



</details>

### ALG-CH12-E009 — Exercise 9: Units modulo twelve

Find all units and inverses in $\mathbb{Z}/12\mathbb{Z}$.

<details>
<summary>Hint 1</summary>

A residue is a unit exactly when it is coprime to twelve.

</details>

<details>
<summary>Hint 2</summary>

List 1,5,7,11 and square each modulo twelve.

</details>

#### ALG-CH12-E009 — Solution

<details>
<summary>Solution</summary>


The relatively prime residues are $[1],[5],[7],[11]$. Each is
self-inverse because their squares are respectively $1,25,49,121$, all one
modulo twelve. No other class is relatively prime to twelve, so there are no
others.



</details>

### ALG-CH12-E010 — Exercise 10: Units in a product

Prove $(r,s)$ is a unit in $R \times S$ iff both coordinates are units.

<details>
<summary>Hint 1</summary>

Write a proposed inverse as a pair.

</details>

<details>
<summary>Hint 2</summary>

The inverse equations hold separately in both coordinates.

</details>

#### ALG-CH12-E010 — Solution

<details>
<summary>Solution</summary>


If $(r,s)(u,v)=(1,1)=(u,v)(r,s)$, then $u,v$ are two-sided
inverses of $r,s$. Conversely, coordinate inverses produce
$(r^{-1},s^{-1})$, a two-sided inverse of the pair.



</details>

### ALG-CH12-E011 — Exercise 11: Cancellation and zero divisors

In a nonzero commutative ring, prove cancellation by every nonzero element iff
there are no zero divisors.

<details>
<summary>Hint 1</summary>

Rewrite ab=ac as a(b−c)=0.

</details>

<details>
<summary>Hint 2</summary>

For the converse compare ab=a0 and cancel nonzero a.

</details>

#### ALG-CH12-E011 — Solution

<details>
<summary>Solution</summary>


With no zero divisors, $ab=ac$ gives $a(b-c)=0$; nonzero $a$
forces $b=c$. Conversely, if nonzero $a$ cancels and $ab=0=a0$, cancellation
gives $b=0$, so no product of two nonzero elements is zero.



</details>

### ALG-CH12-E012 — Exercise 12: Finite domains

Prove every finite integral domain is a field.

<details>
<summary>Hint 1</summary>

Fix a≠0 and consider multiplication by a.

</details>

<details>
<summary>Hint 2</summary>

It is injective on the finite ring, so its image contains one.

</details>

#### ALG-CH12-E012 — Solution

<details>
<summary>Solution</summary>


For nonzero $a$, multiplication $x\to ax$ is injective by
cancellation. On a finite set it is surjective, so some $x$ maps to one:
$ax=1$. Commutativity gives a two-sided inverse. Every nonzero $a$ is a unit.



</details>

### ALG-CH12-E013 — Exercise 13: Nilpotents are zero divisors

Prove every nonzero nilpotent in a commutative ring is a zero divisor.

<details>
<summary>Hint 1</summary>

Choose the smallest positive k with a^k=0.

</details>

<details>
<summary>Hint 2</summary>

The nonzero element a^{k−1} annihilates a.

</details>

#### ALG-CH12-E013 — Solution

<details>
<summary>Solution</summary>


Choose the least $m\ge 1$ with $a^m=0$. Nonzero $a$ makes
$m\ge 2$, and minimality gives $a^{m-1}\ne 0$. Then
$a a^{m-1}=0$ is a product of two nonzero elements, so $a$ is a zero divisor.



</details>

### ALG-CH12-E014 — Exercise 14: Nontrivial idempotents

If $e^2=e$ with $e$ neither zero nor one, prove $e$ is a zero divisor.

<details>
<summary>Hint 1</summary>

Move e to the other side in e²=e.

</details>

<details>
<summary>Hint 2</summary>

The factors e and e−1 are both nonzero.

</details>

#### ALG-CH12-E014 — Solution

<details>
<summary>Solution</summary>


$e(1-e)=e-e^2=0$. The first factor is nonzero by assumption;
the second is nonzero because $e\ne 1$. Thus $e$ is a zero divisor.



</details>

### ALG-CH12-E015 — Exercise 15: Residue domains

Prove $\mathbb{Z}/n\mathbb{Z}$ is a domain iff $n$ is prime for $n>1$.

<details>
<summary>Hint 1</summary>

If n=ab is composite, inspect the nonzero classes [a],[b].

</details>

<details>
<summary>Hint 2</summary>

For prime n, Bézout supplies every nonzero inverse.

</details>

#### ALG-CH12-E015 — Solution

<details>
<summary>Solution</summary>


If $n$ is prime, every nonzero class has a Bézout inverse, so
the ring is a field and hence a domain. If $n=ab$ with $1<a,b<n$, the nonzero
classes $[a],[b]$ multiply to zero, so it is not a domain.



</details>

### ALG-CH12-E016 — Exercise 16: Matrix noncommutativity

For a nonzero ring $R$, compute $E_{12}E_{21}$ and $E_{21}E_{12}$ in $M_2(R)$.

<details>
<summary>Hint 1</summary>

Use E_ijE_kl=δ_jkE_il.

</details>

<details>
<summary>Hint 2</summary>

The results are E_11 and E_22, which differ in a nonzero ring.

</details>

#### ALG-CH12-E016 — Solution

<details>
<summary>Solution</summary>


The matrix-unit rule gives the first product $E_{11}$ and the
second $E_{22}$. Since $1_R\ne0_R$, these matrices differ, so multiplication is noncommutative.



</details>

### ALG-CH12-E017 — Exercise 17: Matrix zero divisors

Display two nonzero matrices in $M_2(F)$ whose product is zero.

<details>
<summary>Hint 1</summary>

Use the matrix unit E_12.

</details>

<details>
<summary>Hint 2</summary>

Its square is zero even though it is nonzero.

</details>

#### ALG-CH12-E017 — Solution

<details>
<summary>Solution</summary>


Take $E_{11}$ and $E_{22}$. Their product is zero because the column
index one of the first does not match the row index two of the second. Both
matrices are nonzero.



</details>

### ALG-CH12-E018 — Exercise 18: Polynomial domains

Prove $R[x]$ is a domain when $R$ is.

<details>
<summary>Hint 1</summary>

Inspect the product of the leading coefficients.

</details>

<details>
<summary>Hint 2</summary>

Neither it nor the resulting leading term can vanish in a domain.

</details>

#### ALG-CH12-E018 — Solution

<details>
<summary>Solution</summary>


For nonzero $f,g$, their leading coefficients are nonzero and
have nonzero product in $R$. That product is the leading coefficient of $fg$,
so $fg$ is nonzero. Multiplication is commutative and the ring is nonzero,
hence it is a domain.



</details>

### ALG-CH12-E019 — Exercise 19: Zero divisors in a function ring

Let $X=\{1,2\}$ and $R$ be nonzero. Find nonzero functions $f,g:X\to R$ with
$fg=0$ pointwise.

<details>
<summary>Hint 1</summary>

Use disjoint supports on the two-point set.

</details>

<details>
<summary>Hint 2</summary>

The value lists (1,0) and (0,1) give nonzero functions with zero product.

</details>

#### ALG-CH12-E019 — Solution

<details>
<summary>Solution</summary>


Let $f(1)=1,f(2)=0$ and $g(1)=0,g(2)=1$. Neither function is
zero, but at each point one factor is zero, so their pointwise product is the
zero function.



</details>

### ALG-CH12-E020 — Exercise 20: Structure audit

For $\mathbb{Z}$, $\mathbb{Z}/6\mathbb{Z}$, $\mathbb{Z}/5\mathbb{Z}$, $\mathbb{R} \times \mathbb{R}$, and $M_2(\mathbb{R})$, state which are
commutative, domains, and fields.

<details>
<summary>Hint 1</summary>

Check commutativity, zero divisors and invertibility separately.

</details>

<details>
<summary>Hint 2</summary>

Products and composite residue rings have zero divisors, while M₂(R) also fails commutativity.

</details>

#### ALG-CH12-E020 — Solution

<details>
<summary>Solution</summary>


$\mathbb{Z}$ is commutative and a domain but not a field. $\mathbb{Z}/6\mathbb{Z}$ is
commutative but neither a domain nor field. $\mathbb{Z}/5\mathbb{Z}$ is a commutative field and
hence a domain. $\mathbb{R} \times \mathbb{R}$ is commutative but has zero divisors, so it is
neither domain nor field. $M_2(\mathbb{R})$ is noncommutative and has zero divisors; by
the book's commutative definitions it is neither an integral domain nor a
field, though its units form $GL_2(\mathbb{R})$.


</details>

## Sources

Thomas W. Judson's author-hosted [Rings](https://twjudson.github.io/aata-files/aata-html/rings-section-definitions.html) is complementary primary reading. Compare conventions carefully: this chapter explicitly requires identities, common-identity subrings and identity-preserving homomorphisms. Its added calculations are original exposition.

## Summary

Rings carry addition and distributive multiplication under stated identity conventions. Units, zero divisors, nilpotents and idempotents encode different failures or decompositions. Domain cancellation and finite-field conclusions depend on the precise hypotheses, and prime characteristic alone does not imply a domain.
