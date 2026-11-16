
# Fields of Fractions and Finite Fields

Passing from $\mathbb{Z}$ to $\mathbb{Q}$ makes every nonzero integer invertible without adding
unrelated elements. The same construction embeds any integral domain in a
smallest field, its field of fractions. At the finite end, every field has
prime-power size, and for each prime power there is exactly one finite field up
to isomorphism.

These facts connect quotient construction, divisibility, vector spaces, and
polynomial roots. The hypotheses are strict: fractions require a domain so
denominators cancel coherently; quotient polynomials produce fields only when
their moduli are irreducible; and finite rings of prime-power size need not be
fields.

The prerequisites are [domains and units](rings-subrings-domains.md),
[quotient rings](ring-homomorphisms-ideals-quotients.md),
and the Euclidean polynomial arithmetic and root bound of the
[polynomial chapter](polynomial-rings-factorization.md).
[Field Extensions and Minimal Polynomials](field-extensions-minimal-polynomials.md)
develops field degrees and minimal polynomials systematically; this chapter
states the small amount of vector-space language it needs.

## 1. Constructing fractions from pairs

**Definition 19.1 (Fraction equivalence).**

Let $R$ be an integral domain. Consider pairs $(a,b)$ with $a \in R$ and
$b \in R\setminus\{0\}$. Define

$(a,b)~(c,d)$ iff $ad=bc$.

This relation expresses cross-multiplication without already assuming
fractions exist.

It is an equivalence relation. Reflexivity and symmetry are immediate. For
transitivity, suppose $ad=bc$ and $cf=de$. Then

$adf=bcf=bde$,

so $d(af-be)=0$. Since $d\ne 0$ and $R$ is a domain, cancellation gives
$af=be$, hence $(a,b)~(e,f)$.

The domain hypothesis enters exactly there. With zero divisors, multiplying an
equation by a nonzero denominator need not be cancellable.

Write the equivalence class of $(a,b)$ as $a/b$. Define

$a/b+c/d=(ad+bc)/(bd)$,

$(a/b)(c/d)=ac/(bd)$.

The denominators remain nonzero because $R$ is a domain. Representative
independence follows by cross-multiplying and using the assumed equivalences.
For example, if $ab'=a'b$ and $cd'=c'd$, then

$(ac)(b'd')=(a'b)(c'd)=(a'c')(bd)$.

The addition check expands similarly.

## 2. The field of fractions

The fraction classes form a field $Frac(R)$. Its zero is $0/1$, identity is
$1/1$, additive inverse of $a/b$ is $(-a)/b$, and a nonzero fraction $a/b$
has inverse $b/a$. Nonzero means $a\ne 0$, so that inverse has valid denominator.

The map

$i:R\to Frac(R)$, $i(r)=r/1$,

is an injective ring homomorphism. If $r/1=0/1$, cross-multiplication gives
$r=0$. We therefore identify $R$ with its image.

Every fraction is a quotient of embedded elements:

$a/b=i(a)i(b)^{-1}$.

This is the **field of fractions** of $R$.

### Examples

- $Frac(\mathbb{Z})=\mathbb{Q}$.
- $Frac(F[x])=F(x)$, the field of rational functions, whose elements are
  ratios of polynomials rather than functions with silently restricted
  domains.
- $Frac(\mathbb{Z}[i])=\mathbb{Q}(i)=\{a+bi:a,b \in \mathbb{Q}\}$.
- A field is its own fraction field: $a/b$ equals the existing product
  $ab^{-1}$.

## 3. The universal property

**Theorem 19.1 (Universal extension from a domain).**

Let $\phi:R\to K$ be an injective ring homomorphism into a field. There is a
unique field homomorphism

$\Phi:Frac(R)\to K$

extending $\phi$, namely

$\Phi(a/b)=\phi(a)\phi(b)^{-1}$.

The denominator image is nonzero because $\phi$ is injective. If
$a/b=c/d$, then $ad=bc$; applying $\phi$ and multiplying by the two inverses
proves the outputs equal. Thus the formula is well-defined. It preserves
operations by fraction arithmetic.

Uniqueness is forced: any extension must send
$a/b=i(a)i(b)^{-1}$ to $\phi(a)\phi(b)^{-1}$.

This property means $Frac(R)$ adds exactly the inverses demanded by a field.
It does not choose a numerical completion, topology, or order; for example,
$Frac(\mathbb{Q}[x])=\mathbb{Q}(x)$, not the real or complex numbers.

## 4. Prime subfields and characteristic

Every field $K$ contains the image of the unique map $\mathbb{Z}\to K$. Its kernel is
$(0)$ or $(p)$ for a prime $p$, because a field's characteristic is zero or
prime. The **prime subfield** is therefore isomorphic to

$\mathbb{Q}$ in characteristic zero,

or $\mathbb{F}_{p}=\mathbb{Z}/p\mathbb{Z}$ in characteristic $p$.

In characteristic zero, inverses extend the embedded $\mathbb{Z}$ to an embedded $\mathbb{Q}$.
In characteristic $p$, the $p$ elements generated additively by one already
form a field.

Every field extension of $\mathbb{F}_{p}$ is a vector space over $\mathbb{F}_{p}$: scalars act by
field multiplication. If a finite field $K$ has vector-space dimension $n$, a
basis gives exactly $p^n$ coordinate tuples. Thus

$|K|=p^n$.

There is no field with six, ten, twelve, or any other non-prime-power number of
elements.

## 5. Polynomial quotients construct finite fields

Let $f \in \mathbb{F}_{p}[x]$ be irreducible of degree $n$. Then $(f)$ is maximal, so

$\mathbb{F}_{p}[x]/(f)$

is a field. Every coset has a unique representative of degree below $n$, with
$n$ coefficients chosen from $p$ possibilities. Hence it has $p^n$ elements.

If $f$ is reducible, the quotient has zero divisors and is not a field. The
cardinality $p^n$ alone does not rescue it. For example,

$\mathbb{F}_{2}[x]/(x^2)$

has four elements but contains the nonzero nilpotent class of $x$.

### The four-element field

**Worked example 19.1 (Arithmetic and multiplicative order in four elements).**

$x^2+x+1$ has no root in $\mathbb{F}_{2}$, so it is irreducible. Let

$\alpha=x+(x^2+x+1)$.

Then $\alpha^2=\alpha+1$, and the field elements are

$0,1,\alpha,\alpha+1$.

The nonzero powers are $1,\alpha,\alpha+1$; indeed
$\alpha^3=\alpha(\alpha+1)=\alpha^2+\alpha=1$.

### An eight-element field

**Worked example 19.2 (Irreducibility and generators in eight elements).**

$x^3+x+1$ has no root in $\mathbb{F}_{2}$, so as a cubic it is irreducible. Its quotient
has eight elements. A nonidentity nonzero element has order seven because the
multiplicative group has prime order seven, so any such element generates all
nonzero elements.

To check the construction explicitly, the defining cubic has value one at both zero and one in $\mathbb F_2$, so it has no linear factor and is irreducible. Let $\beta$ be the class of $x$. The relation is $\beta^3=\beta+1$. Successive multiplication and reduction give
$$
\beta^4=\beta^2+\beta,\quad
\beta^5=\beta^2+\beta+1,\quad
\beta^6=\beta^2+1,\quad
\beta^7=1.
$$
Together with $1,\beta,\beta^2$, these are seven distinct nonzero elements: their coefficient triples in the quotient basis $(1,\beta,\beta^2)$ differ. Thus the powers exhaust the nonzero field directly. In particular $\beta^{-1}=\beta^6=\beta^2+1$, and multiplying by $\beta$ verifies the inverse using the same cubic relation. The quotient basis certifies distinctness; numerical approximations to roots play no role.

## 6. Finite subgroups of a field are cyclic

**Theorem 19.2 (Finite multiplicative subgroups are cyclic).**

Let $G$ be a finite subgroup of the multiplicative group of a field. Because
$G$ is finite abelian, its **exponent** $m$—the lcm of all element orders—is
itself the order of some element.

To justify the last claim, treat one prime at a time. If the largest
$p$-power dividing an element order anywhere in $G$ is $p^a$, choose an element
whose order contains that power and raise away its prime-to-$p$ part to obtain
an element of order $p^a$. Multiplying these chosen elements over distinct
primes gives an element whose order is the product, namely $m$, because the
orders are coprime.

Every $g \in G$ satisfies $g^m=1$. The polynomial $x^m-1$ has at most $m$
roots in a field, so

$|G|\le m$.

But an element of order $m$ lies in $G$, so $m\le |G|$. Hence $m=|G|$ and that
element generates $G$.

Therefore the multiplicative group of every finite field is cyclic.

For $\mathbb{F}_{q}$,

$\mathbb{F}_{q}^{\times} \cong C_{q-1}$.

An element generating it is called **primitive**.

## 7. Frobenius and the equation $x^q=x$

In characteristic $p$, the binomial coefficients between the endpoints are
divisible by $p$, so

$(a+b)^p=a^p+b^p$.

The **Frobenius map**

$Fr:K\to K$, $Fr(a)=a^p$,

is a ring homomorphism. It is injective in a field because $a^p=b^p$ implies
$(a-b)^p=0$, hence $a=b$. On a finite field it is therefore onto and is an
automorphism.

If $K=\mathbb{F}_{p^n}$, every nonzero $a$ satisfies $a^{p^n-1}=1$ by Lagrange in the
multiplicative group, so

$a^{p^n}=a$.

Zero satisfies it too. Thus every field element is a root of

$x^{p^n}-x$.

Frobenius has order exactly $n$ as an automorphism of $\mathbb{F}_{p^n}$. Its $n$th
power is identity by the displayed equation. If a smaller positive $d<n$
worked, all $p^n$ elements would be roots of $x^{p^d}-x$, a nonzero polynomial
of degree $p^d<p^n$, impossible.

The fixed points of Frobenius satisfy $x^p=x$; there are at most $p$, and the
prime field supplies exactly those $p$. Hence its fixed field is $\mathbb{F}_{p}$.

## 8. Existence of every prime-power field

Import the standard existence theorem for algebraic closures, whose proof is
not reconstructed in this chapter. Fix an algebraic closure of $\mathbb{F}_{p}$ and consider

$X=\{a:a^{p^n}=a\}$.

The polynomial $x^{p^n}-x$ has derivative $-1$, so it has no repeated roots.
It splits in the algebraic closure and therefore has exactly $p^n$ distinct
roots.

The roots form a field. If $a,b \in X$, repeated Frobenius gives

$(a-b)^{p^n}=a-b$,

$(ab)^{p^n}=ab$.

For nonzero $a$, $a^{p^n}=a$ implies $a^{p^n-1}=1$, so
$(a^{-1})^{p^n}=a^{-1}$. Zero and one are roots. Thus $X$ is a field with
$p^n$ elements.

This proves existence without assuming an irreducible polynomial of every
degree in advance. The [field-extension chapter](field-extensions-minimal-polynomials.md) will show that a primitive element of this field
has a degree-$n$ minimal polynomial, recovering a quotient construction by an
irreducible polynomial of every positive degree.

## 9. Uniqueness and subfields

Any field $K$ with $p^n$ elements can be embedded over $\mathbb{F}_{p}$ in an algebraic
closure. Here is a proof that uses no unproved uniqueness theorem. Choose a
generator $\gamma$ of the cyclic group $K^{\times}$; then $K=\mathbb{F}_{p}[\gamma]$. The
evaluation map $\mathbb{F}_{p}[x]\to K$ is onto, so its kernel is $(f)$ for an irreducible
polynomial $f$. Choose a root $\beta$ of $f$ in the algebraic closure. The two
quotient descriptions

$K \cong \mathbb{F}_{p}[x]/(f) \cong \mathbb{F}_{p}[\beta]$

give the required embedding. Its image consists of $p^n$ roots of
$x^{p^n}-x$, hence is the full root set because that polynomial has degree
$p^n$. Consequently any two fields of that order are isomorphic over $\mathbb{F}_{p}$.
We may therefore write $\mathbb{F}_{p^n}$ up to isomorphism.

If $\mathbb{F}_{p^d}$ is a subfield of $\mathbb{F}_{p^n}$, let its dimension
over the subfield be $r$. Counting coordinate vectors in a basis gives
$p^n=(p^d)^r$, so $n=dr$ and $d|n$.

Conversely, when $d|n$, every root of $x^{p^d}-x$ is a root of
$x^{p^n}-x$: iterating the $p^d$-power map $n/d$ times fixes it. Hence the
root model gives a unique subfield of size $p^d$. Therefore

$\mathbb{F}_{p^d} \subseteq \mathbb{F}_{p^n}$ iff $d|n$

inside a fixed algebraic closure.

## 10. Common errors

- Fraction equivalence and operation well-definedness use the domain
  hypothesis.
- A fraction field is algebraic inversion, not an analytic completion.
- A field's characteristic is zero or prime, never composite.
- Finite field order is a prime power; not every finite ring of that order is a
  field.
- $\mathbb{F}_{p}[x]/(f)$ is a field only when $f$ is irreducible.
- The multiplicative group excludes zero and has order $q-1$.
- Frobenius is injective on every field of characteristic $p$, but surjectivity
  here uses finiteness unless the field is known perfect.
- Finite fields are unique up to isomorphism, not as literally equal labeled
  sets.
- A subfield size must correspond to a divisor of the extension degree.

## 11. Chapter summary and retrieval prompts

Fractions of a domain are equivalence classes of numerator-denominator pairs
and form the universal smallest field containing the domain. Finite fields
have prime characteristic and prime-power cardinality. Irreducible polynomial
quotients construct examples; finite multiplicative subgroups of fields are
cyclic. Frobenius makes every element of $\mathbb{F}_{q}$ satisfy $x^q=x$, whose root set
proves existence and uniqueness for every prime power and controls subfields.

Retrieve:

1. Where does the domain hypothesis enter fraction equivalence?
2. What universal property characterizes $Frac(R)$?
3. Why must finite-field order be $p^n$?
4. What hypothesis makes a polynomial quotient a field?
5. How does the root bound prove a finite multiplicative subgroup cyclic?
6. Why is Frobenius an automorphism of a finite field?
7. How do roots of $x^{p^n}-x$ prove existence and uniqueness?

## Exercises with full solutions

### ALG-CH17-E001 — Exercise 1: Fraction transitivity

Prove transitivity of $(a,b)~(c,d)$ iff $ad=bc$.

<details>
<summary>Hint 1</summary>

Multiply the two cross-product identities.

</details>

<details>
<summary>Hint 2</summary>

Cancel the common nonzero middle denominator using the domain hypothesis.

</details>

#### ALG-CH17-E001 — Solution

<details>
<summary>Solution</summary>


From $ad=bc$ and $cf=de$, multiply the first equality by $f$
and substitute $cf=de$ to get $adf=bde$. Hence $d(af-be)=0$. The denominator
$d$ is nonzero and the ring is a domain, so cancellation gives $af=be$, which
is $(a,b)~(e,f)$.



</details>

### ALG-CH17-E002 — Exercise 2: Product well-definedness

If $a/b=a'/b'$ and $c/d=c'/d'$, prove $ac/(bd)=a'c'/(b'd')$.

<details>
<summary>Hint 1</summary>

Use ab′=a′b and cd′=c′d.

</details>

<details>
<summary>Hint 2</summary>

Multiply these equalities to obtain the cross-product identity for the product fractions.

</details>

#### ALG-CH17-E002 — Solution

<details>
<summary>Solution</summary>


The assumptions are $ab'=a'b$ and $cd'=c'd$. Then
$acb'd'=(ab')(cd')=(a'b)(c'd)=a'c'bd$, the required cross-product equality.



</details>

### ALG-CH17-E003 — Exercise 3: Domain embedding

Prove $r\to r/1$ is injective.

<details>
<summary>Hint 1</summary>

Equality r/1=s/1 is defined by cross multiplication.

</details>

<details>
<summary>Hint 2</summary>

It reduces to r=s in the original domain.

</details>

#### ALG-CH17-E003 — Solution

<details>
<summary>Solution</summary>


If $r/1=s/1$, cross-multiplication gives $r=s$. In particular,
only zero maps to the zero fraction, so the ring homomorphism is injective.



</details>

### ALG-CH17-E004 — Exercise 4: Universal extension

Why must an injective $\phi:R\to K$ extend by $a/b\to \phi(a)\phi(b)^{-1}$?

<details>
<summary>Hint 1</summary>

The fraction a/b is the product of a/1 and the inverse of b/1.

</details>

<details>
<summary>Hint 2</summary>

A field homomorphism must preserve that inverse; injectivity keeps the denominator image nonzero.

</details>

#### ALG-CH17-E004 — Solution

<details>
<summary>Solution</summary>


In the fraction field, $a/b=(a/1)(b/1)^{-1}$. Any field
homomorphism extending $\phi$ must preserve multiplication and inverses, forcing
the formula. Injectivity makes $\phi(b)$ nonzero, and cross-multiplication proves
the formula well-defined, so the forced extension exists and is unique.



</details>

### ALG-CH17-E005 — Exercise 5: Rational function field

Describe the image of $(x^2-1)/(x-1)$ in $Frac(F[x])$ and distinguish it from
a pointwise function claim.

<details>
<summary>Hint 1</summary>

Use x²−1=(x−1)(x+1) in the polynomial domain.

</details>

<details>
<summary>Hint 2</summary>

The fraction equals x+1 as a field element; evaluating the original displayed quotient at x=1 is a different question.

</details>

#### ALG-CH17-E005 — Solution

<details>
<summary>Solution</summary>


Since $x^2-1=(x-1)(x+1)$ and $x-1$ is nonzero as a polynomial,
cancellation in the fraction field gives the element $x+1$. This is equality
of formal rational-function field elements. If interpreted as elementary
functions using the unreduced expression, its original formula is undefined
at $x=1$; that analytic domain annotation is not part of $F(x)$ equality.



</details>

### ALG-CH17-E006 — Exercise 6: Field characteristic

Prove a field has characteristic zero or prime.

<details>
<summary>Hint 1</summary>

Apply the domain characteristic argument to the field.

</details>

<details>
<summary>Hint 2</summary>

A minimal composite characteristic would create a product of two nonzero scalars equal to zero.

</details>

#### ALG-CH17-E006 — Solution

<details>
<summary>Solution</summary>


A field is an integral domain. If positive characteristic
$n=ab$ were composite with $1<a,b<n$, then nonzero elements $a1,b1$ would
multiply to $n1=0$, contradicting the domain property. Hence positive
characteristic is prime.



</details>

### ALG-CH17-E007 — Exercise 7: Prime-power size

Why does an $n$-dimensional field extension of $\mathbb{F}_{p}$ contain $p^n$ elements?

<details>
<summary>Hint 1</summary>

Choose a basis over the prime field.

</details>

<details>
<summary>Hint 2</summary>

Every field element has exactly one coordinate tuple with n entries, each having p choices.

</details>

#### ALG-CH17-E007 — Solution

<details>
<summary>Solution</summary>


Fix a basis. Every element has one unique coordinate tuple of
length $n$, and each coordinate has $p$ choices. Thus there are $p^n$ tuples
and field elements.



</details>

### ALG-CH17-E008 — Exercise 8: Impossible field order

Prove there is no field with 18 elements.

<details>
<summary>Hint 1</summary>

The size of a finite field is a prime power.

</details>

<details>
<summary>Hint 2</summary>

Eighteen is not a power of a single prime.

</details>

#### ALG-CH17-E008 — Solution

<details>
<summary>Solution</summary>


A finite field has order $p^n$ for one prime $p$. But
$18=2 \times 3^2$ has two distinct prime factors and is not a prime power.
Therefore no such field exists.



</details>

### ALG-CH17-E009 — Exercise 9: A nine-element quotient

Prove $\mathbb{F}_{3}[x]/(x^2+1)$ is a field with nine elements.

<details>
<summary>Hint 1</summary>

A quadratic over a field is irreducible exactly when it has no root.

</details>

<details>
<summary>Hint 2</summary>

Test 0,1,2, then use the degree-two quotient basis to count its elements.

</details>

#### ALG-CH17-E009 — Solution

<details>
<summary>Solution</summary>


At $0,1,2$, $x^2+1$ takes values $1,2,2$, so it has no root and
is an irreducible quadratic. The quotient is therefore a field. Its unique
degree-below-two representatives $a+bx$ give $3^2=9$ elements.



</details>

### ALG-CH17-E010 — Exercise 10: Arithmetic in $\mathbb{F}_{4}$

In $\mathbb{F}_{2}[\alpha]$ with $\alpha^2=\alpha+1$, find $(\alpha+1)^{-1}$.

<details>
<summary>Hint 1</summary>

Multiply α by α+1.

</details>

<details>
<summary>Hint 2</summary>

The defining relation reduces the product to one.

</details>

#### ALG-CH17-E010 — Solution

<details>
<summary>Solution</summary>


$\alpha(\alpha+1)=\alpha^2+\alpha=(\alpha+1)+\alpha=1$ in
characteristic two. Thus the inverse of $\alpha+1$ is $\alpha$.



</details>

### ALG-CH17-E011 — Exercise 11: An eight-element field

Prove $x^3+x+1$ is irreducible over $\mathbb{F}_{2}$ and that the class of $x$ has order
seven in the quotient's multiplicative group.

<details>
<summary>Hint 1</summary>

A cubic is reducible only if it has a root.

</details>

<details>
<summary>Hint 2</summary>

Test 0 and 1; then use that the nonzero multiplicative group has prime order seven and α is not one.

</details>

#### ALG-CH17-E011 — Solution

<details>
<summary>Solution</summary>


A reducible cubic has a root, but evaluation at zero and one
gives one in both cases. Thus it is irreducible and the quotient is a field of
eight elements. The nonzero class $\alpha$ is not one; its order divides the
prime group order seven, so it is seven.



</details>

### ALG-CH17-E012 — Exercise 12: Exponent element

Why does a finite abelian group contain an element whose order is its exponent?

<details>
<summary>Hint 1</summary>

For each prime power in the exponent, choose an element whose order contains that full power.

</details>

<details>
<summary>Hint 2</summary>

Take suitable powers to isolate these prime-power orders, then multiply the commuting elements of coprime orders.

</details>

#### ALG-CH17-E012 — Solution

<details>
<summary>Solution</summary>


For each prime $p$, choose an element whose order contains the
largest $p$-power $p^a$ occurring among element orders, and raise it to remove
the other prime factors. The resulting element has order $p^a$. Products of
the chosen prime-power-order elements have order the product because their
orders are pairwise coprime. That product is the lcm of all element orders.



</details>

### ALG-CH17-E013 — Exercise 13: Cyclic multiplicative group

Prove $\mathbb{F}_{q}^{\times}$ is cyclic.

<details>
<summary>Hint 1</summary>

Let m be the exponent and find an element of order m.

</details>

<details>
<summary>Hint 2</summary>

Every nonzero field element is a root of x^m−1, so the root bound forces the group size to be at most m.

</details>

#### ALG-CH17-E013 — Solution

<details>
<summary>Solution</summary>


Let $m$ be its exponent and choose an element of order $m$ by
Exercise 12. Every nonzero field element is a root of $x^m-1$, so the root
bound gives $q-1\le m$. Element order also gives $m\le q-1$. Hence $m=q-1$, and
the chosen element generates the whole multiplicative group.



</details>

### ALG-CH17-E014 — Exercise 14: The equation $x^q=x$

Prove every element of $\mathbb{F}_{q}$ satisfies it.

<details>
<summary>Hint 1</summary>

Apply Lagrange to every nonzero element of the multiplicative group.

</details>

<details>
<summary>Hint 2</summary>

Handle zero separately.

</details>

#### ALG-CH17-E014 — Solution

<details>
<summary>Solution</summary>


Zero does. Every nonzero element lies in the group of order
$q-1$, so Lagrange gives $a^{q-1}=1$. Multiplying by $a$ yields $a^q=a$.



</details>

### ALG-CH17-E015 — Exercise 15: Frobenius homomorphism

Prove $a\to a^p$ preserves addition and multiplication in characteristic $p$.

<details>
<summary>Hint 1</summary>

Use the binomial theorem modulo p.

</details>

<details>
<summary>Hint 2</summary>

All intermediate binomial coefficients vanish, and multiplication is preserved by commutativity.

</details>

#### ALG-CH17-E015 — Solution

<details>
<summary>Solution</summary>


Every intermediate binomial coefficient $\binom{p}{k}$ is
divisible by prime $p$, so $(a+b)^p=a^p+b^p$. Also
$(ab)^p=a^pb^p$ by associativity and commutativity. Zero and one are preserved,
so Frobenius is a ring homomorphism.



</details>

### ALG-CH17-E016 — Exercise 16: Frobenius fixed field

Prove the fixed points of Frobenius in $\mathbb{F}_{p^n}$ are exactly $\mathbb{F}_{p}$.

<details>
<summary>Hint 1</summary>

The prime-field elements are fixed.

</details>

<details>
<summary>Hint 2</summary>

The fixed points are roots of x^p−x, a polynomial with at most p roots.

</details>

#### ALG-CH17-E016 — Solution

<details>
<summary>Solution</summary>


Fixed points are roots of $x^p-x$, so there are at most $p$.
Every element of the prime field satisfies the equation, supplying $p$
distinct roots. Hence no other fixed points exist.



</details>

### ALG-CH17-E017 — Exercise 17: Root-field construction

Why do the roots of $x^{p^n}-x$ in an algebraic closure form a field of
exactly $p^n$ elements?

<details>
<summary>Hint 1</summary>

Check closure of the roots under addition, subtraction, multiplication and nonzero inverses.

</details>

<details>
<summary>Hint 2</summary>

The formal derivative is −1, so the split polynomial has exactly p^n distinct roots.

</details>

#### ALG-CH17-E017 — Solution

<details>
<summary>Solution</summary>


Derivative $-1$ makes all roots distinct, and splitting in the
algebraic closure gives exactly the degree number $p^n$. Frobenius identities
show roots closed under subtraction and multiplication; a nonzero root
satisfies $a^{p^n-1}=1$, so its inverse is also fixed by the $p^n$-power map.
Thus the root set is a field of the stated size.



</details>

### ALG-CH17-E018 — Exercise 18: Uniqueness of finite fields

Explain why any two fields of order $p^n$ are isomorphic.

<details>
<summary>Hint 1</summary>

Every field of the given order is a splitting field of the same polynomial over F_p.

</details>

<details>
<summary>Hint 2</summary>

Use the splitting-field uniqueness input stated in the chapter, rather than cardinality alone.

</details>

#### ALG-CH17-E018 — Solution

<details>
<summary>Solution</summary>


In each field, choose a generator of the cyclic multiplicative
group. Evaluation presents that field as $\mathbb{F}_{p}[x]/(f)$ for the generator's
irreducible relation. Sending the class of $x$ to a root of $f$ embeds the
field into an algebraic closure. Every image element is a root of
$x^{p^n}-x$; since there are $p^n$ image elements and the polynomial has that
degree, the image is its full root set. Both fields are therefore isomorphic
to the same root field over $\mathbb{F}_{p}$.



</details>

### ALG-CH17-E019 — Exercise 19: Subfield divisibility

If $\mathbb{F}_{p^d} \subseteq \mathbb{F}_{p^n}$, prove $d|n$.

<details>
<summary>Hint 1</summary>

Apply the tower law to F_p⊆F_{p^d}⊆F_{p^n}.

</details>

<details>
<summary>Hint 2</summary>

The extension degrees multiply, giving n as d times an integer.

</details>

#### ALG-CH17-E019 — Solution

<details>
<summary>Solution</summary>


Choose a basis of $\mathbb F_{p^n}$ over its subfield $\mathbb F_{p^d}$
with $r$ vectors. Each of the $r$ coordinates has $p^d$ choices, so
$p^n=(p^d)^r$. Hence $n=dr$.



</details>

### ALG-CH17-E020 — Exercise 20: A primitive element of $\mathbb{F}_{9}$

Let $\alpha^2=-1=2$ in $\mathbb{F}_{3}[\alpha]$. Prove $\beta=\alpha+1$ has order eight.

<details>
<summary>Hint 1</summary>

Reduce successive powers using α²=2.

</details>

<details>
<summary>Hint 2</summary>

Compute β² and β⁴; the fourth power is −1, so its order divides eight but not four.

</details>

#### ALG-CH17-E020 — Solution

<details>
<summary>Solution</summary>


$\beta^2=\alpha^2+2\alpha+1=2\alpha$, and
$\beta^4=(2\alpha)^2=4\alpha^2=2$. Hence $\beta^8=2^2=1$, while
$\beta^4=2\ne 1$ and $\beta^2=2\alpha\ne 1$. Its order divides eight and divides no
proper divisor $1,2,4$; therefore it is eight and generates $\mathbb{F}_{9}^{\times}$.


</details>

## A worked fraction-field identification

**Worked example 19.3 (Identify Gaussian fractions by rationalizing).** Let the domain be $\mathbb Z[i]$. For integers $a,b,c,d$ with $(c,d)\ne(0,0)$,
$$
\frac{a+bi}{c+di}
=\frac{(a+bi)(c-di)}{c^2+d^2}
=\frac{ac+bd}{c^2+d^2}
+i\frac{bc-ad}{c^2+d^2}.
$$
The denominator is a positive integer, so every Gaussian fraction belongs to $\mathbb Q(i)$. Conversely, for rational $u,v$, choose a common positive denominator $D$ and integers $m,n$ with $u=m/D$, $v=n/D$. Then $u+vi=(m+ni)/D$ is a fraction of Gaussian integers with nonzero denominator. These two inclusions prove the field identification, rather than only exhibiting an embedding.

For example,
$$
\frac{3+2i}{1-i}=\frac{1+5i}{2}.
$$
Multiplication checks the certificate: $(1-i)(1+5i)/2=(6+4i)/2=3+2i$. This is an identity in a field, where the original denominator is nonzero. It adds no analytic completion; arbitrary real or complex limits are not part of the fraction construction.

## Sources

Thomas W. Judson's [Structure of a Finite Field](https://twjudson.github.io/aata-files/aata-html/finite-section-field.html) provides complementary primary reading. The Gaussian fraction and finite quotient arithmetic above are derived explicitly; algebraic-closure existence remains the named input stated in the chapter.

## Summary

Fractions turn an integral domain into a field through cross-product equivalence and a universal extension property. Finite fields have prime-power size, cyclic multiplicative groups and Frobenius structure. Irreducible quotients make arithmetic concrete; the existence and uniqueness statements retain their stated splitting-field and algebraic-closure inputs.
