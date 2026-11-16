var e=`---
parent_id: book-algebra-patterns-structure
chapter_id: splitting-fields-separability
title: "Splitting Fields, Separability, and Finite Extensions"
level: undergraduate
estimated_minutes: 285
license: CC BY-SA 4.0
---

# Splitting Fields, Separability, and Finite Extensions

A minimal polynomial records one algebraic element. A **splitting field** records
all roots of a polynomial at once, in the smallest field where its complete
linear factorization is visible. This chapter builds that field one root at a
time, proves uniqueness up to a base-preserving isomorphism, and isolates
separability as the condition preventing roots from collapsing together.

The prerequisite is [field extensions and minimal polynomials](#/item/book-algebra-patterns-structure?chapter=field-extensions-minimal-polynomials).
All embeddings fix the named base field pointwise.

## 1. Splitting fields and minimality

For a nonzero $f \\in F[x]$, a field $E/F$ is a **splitting field of f over F** when

1. $f=c \\prod_i(x-\\alpha_i)$ in $E[x]$; and
2. $E=F(\\alpha_1,...,\\alpha_r)$.

The second clause matters. The complex numbers contain every root of
$x^2-2$, but $C$ is not its splitting field over $Q$; the smallest field is
$Q(\\sqrt{2})$. Constants already split over $F$, and their splitting field is
$F$ by the generation condition.

## 2. Existence by adjoining roots

Every nonconstant $f \\in F[x]$ has a splitting field. Induct on $\\deg f$. Choose
an irreducible factor $p$ and form $K=F[x]/(p)$. If $\\alpha$ is the class of
$x$, then $p(\\alpha)=0$, so $f=(x-\\alpha)g$ in $K[x]$. By induction, $g$ has a
splitting field $E/K$. Then $f$ splits in $E$, and the subfield generated over
$F$ by all its roots is the required field.

If $\\deg f=n$, this construction also proves finiteness. Each adjunction has
degree at most the remaining polynomial degree, giving the coarse bound
$[E:F]\\le n!$. The true degree is often much smaller.

## 3. Extending embeddings

Let $\\sigma:F\\to F'$ be a field isomorphism. Apply $\\sigma$ coefficientwise to
obtain $\\sigma(f) \\in F'[x]$. If $\\alpha$ has minimal polynomial $m$ over $F$ and
$\\beta$ is a root of $\\sigma(m)$ in an extension of $F'$, then

$\\sum a_i \\alpha^i \\to  \\sum \\sigma(a_i) \\beta^i$

defines an isomorphism $F(\\alpha)\\to F'(\\beta)$ extending $\\sigma$. It is
well-defined because two polynomial expressions differ by a multiple of $m$,
whose transformed polynomial vanishes at $\\beta$.

Repeating this extension one root at a time proves: any two splitting fields
of $f$ over $F$ are isomorphic by an isomorphism fixing $F$. The isomorphism is
usually not unique; for $x^2-2$, it may send $\\sqrt{2}$ to either root.

## 4. Normal extensions

An algebraic extension $E/F$ is **normal** if every irreducible polynomial in
$F[x]$ having one root in $E$ splits completely in $E$. A finite extension is
normal exactly when it is the splitting field over $F$ of some polynomial.

For one direction, a splitting field is stable under every base embedding into
an algebraic closure: embeddings permute the roots that generate it. The needed
bridge from conjugate roots to embeddings is explicit. If an irreducible
$p\\in F[x]$ has a root $\\alpha\\in E$ and $\\beta$ is any conjugate root, Section 3
gives an $F$-embedding $F(\\alpha)\\to\\overline F$ sending $\\alpha$ to $\\beta$.
Extend it through a finite tower of root adjunctions generating $E$ by choosing
at each stage a root of the transported minimal polynomial. This produces an
$F$-embedding $E\\to\\overline F$. When $E$ is a splitting field, that embedding
sends its generating roots to roots already in $E$, so its image is $E$ and
$\\beta\\in E$. For the
other, if $E=F(\\alpha_1,...,\\alpha_r)$ is finite and normal, the product of the
minimal polynomials of the generators splits in $E$ and has $E$ as its
splitting field.

The extension $Q(\\sqrt[3]{2})/Q$ is not normal: $x^3-2$ has its real root in
the field but not the nonreal roots. Adjoining a primitive cube root $\\omega$
produces the splitting field $Q(\\sqrt[3]{2},\\omega)$.

## 5. Repeated roots and the formal derivative

A nonzero polynomial is **separable** over $F$ if it has no repeated root in a
splitting field. A root $\\alpha$ is repeated exactly when

$f(\\alpha)=0$ and $f'(\\alpha)=0$.

Indeed, writing $f=(x-\\alpha)^r g$ with $g(\\alpha)\\ne 0$, differentiation shows
$f'(\\alpha)=0$ exactly when $r\\ge 2$. Consequently

$f is separable iff \\gcd(f,f')=1$.

This criterion is computational and does not depend on which splitting field
was chosen.

## 6. Characteristic zero and characteristic p

Every irreducible polynomial over a characteristic-zero field is separable.
If irreducible $f$ had a repeated root, then $\\gcd(f,f')$ would be nonconstant;
irreducibility would force $f|f'$, impossible because $\\deg f'<\\deg f$.

In characteristic $p$, the derivative can vanish identically: this occurs
exactly when every nonzero exponent is divisible by $p$, so

$f(x)=g(x^p)$.

Over $\\mathbb{F}_{p}(t)$, the polynomial $x^p-t$ is irreducible but has derivative zero.
Indeed, Eisenstein at the prime $t$ in $\\mathbb F_p[t][x]$, followed by
Gauss's lemma, proves irreducibility over $\\mathbb F_p(t)$: its constant
coefficient is divisible by $t$ but not $t^2$, and its leading coefficient is $1$.
After adjoining $t^{1/p}$ it becomes $(x-t^{1/p})^p$, so it is inseparable.

## 7. Perfect fields and finite fields

A field is **perfect** if every algebraic extension is separable. Fields of
characteristic zero are perfect. A characteristic-$p$ field is perfect exactly
when the Frobenius map $a\\to a^p$ is surjective.

To prove the criterion, suppose Frobenius is onto and an irreducible
nonconstant $f=\\sum a_i x^{pi}$ has zero derivative. Write each $a_i=b_i^p$;
then $f=(\\sum b_i x^i)^p$, contradicting irreducibility. Thus every
irreducible is separable. Conversely, if every algebraic extension is
separable, let $u^p=a\\in F$ in an algebraic closure. The minimal polynomial of
$u$ over $F$ divides $x^p-a=(x-u)^p$. Separability forces its degree to be
one, so $u\\in F$ and Frobenius is onto.

Every finite field is perfect: Frobenius is injective because fields have no
zero divisors, and an injective map of a finite set is surjective. Thus every
irreducible polynomial over a finite field has distinct roots.

Moreover, $x^{q^n}-x$ has as roots exactly the elements of $\\mathbb{F}_{q^n}$, and its
derivative is $-1$. It is therefore the product, without repetition, of all
monic irreducible polynomials over $\\mathbb{F}_{q}$ whose degrees divide $n$.
Indeed, an irreducible of degree $d$ gives a root field of $q^d$ elements.
The subfield criterion from Chapter 17 puts that root in $\\mathbb F_{q^n}$
exactly when $d\\mid n$; all its conjugate roots then lie there. The derivative
ensures that each factor occurs once.

## 8. Separable extensions and primitive elements

An algebraic extension is separable if every element has a separable minimal
polynomial. If $E/F$ is finite separable, then the number of $F$-embeddings of
$E$ into an algebraic closure equals $[E:F]$: at each simple adjunction there
are as many choices as the degree of its minimal polynomial, and the tower law
multiplies both counts.

The **primitive element theorem** states that every finite separable extension
has the form $E=F(\\theta)$. For finite $F$, both $E^{\\times}$ and its subfields are
finite and one may choose a multiplicative generator. For infinite $F$, if
$E=F(\\alpha,\\beta)$, all but finitely many $c \\in F$ make
$\\theta=\\alpha+c \\beta$ distinguish the embeddings; equality of two images would
determine at most one exceptional $c$. Induction combines finitely many
generators. Once the $[E:F]$ embeddings have distinct restrictions to
$F(\\theta)$, a simple extension's embedding bound gives
$[F(\\theta):F]\\ge [E:F]$. The reverse inequality follows from
$F(\\theta)\\subseteq E$, so equality holds and $E=F(\\theta)$.

## 9. Degree audits in examples

The splitting field of $x^3-2$ over $Q$ is
$E=Q(\\rho,\\omega)$, where $\\rho^3=2$ and $\\omega^2+\\omega+1=0$.
The first adjunction has degree three. Since $Q(\\rho)$ is a subfield of $R$, it
does not contain nonreal $\\omega$; the second degree is two. Thus $[E:Q]=6$.

The splitting field of $x^4-2$ is $Q(\\alpha,i)$ for a positive fourth root
$\\alpha$. Eisenstein gives $[Q(\\alpha):Q]=4$, and this field is real, so adjoining
$i$ doubles the degree. The total degree is eight.

## 10. Common errors and summary

- A field in which $f$ splits need not be the smallest such field.
- Splitting fields are unique only up to an isomorphism fixing the base.
- Normality concerns all conjugates over the base, not ordinary geometric
  normality and not merely closure under field operations.
- Irreducible does not imply separable over every field; characteristic matters.
- Derivative zero does not mean a polynomial is constant in characteristic $p$.
- A finite extension is algebraic, but it need not be normal or separable.
- A primitive element generates a field, not necessarily its ring of integers.

Splitting fields exist by iterated root adjunction and are unique up to
base-preserving isomorphism. Normality means all conjugates remain inside;
separability means conjugates are distinct. Finite normal separable extensions
are precisely the setting in which root symmetries give the clean Galois
correspondence of the next chapter.

## Exercises with full solutions

### ALG-CH19-E001 — Exercise 1: A quadratic splitting field
Find the splitting field of $x^2-5$ over $Q$ and its degree.

#### ALG-CH19-E001 — Solution

Its roots are $\\pm \\sqrt{5}$, so adjoining one adjoins both. The
polynomial has no rational root and is irreducible, hence the field is
$Q(\\sqrt{5})$ and its degree is two.

### ALG-CH19-E002 — Exercise 2: Why minimality matters
Is $C$ the splitting field of $x^2+1$ over $R$? Contrast the answer over $Q$.

#### ALG-CH19-E002 — Solution

The polynomial splits in $C$, but its roots $\\pm i$ generate
$R(i)=C$; thus in this case it actually is the splitting field. In contrast,
over $Q$, $C$ is too large because the roots generate only $Q(i)$. The answer
depends on the named base.

### ALG-CH19-E003 — Exercise 3: Constants
Prove the splitting field of a nonzero constant over $F$ is $F$.

#### ALG-CH19-E003 — Solution

No roots need be adjoined, so the field generated by the empty
root set over $F$ is $F$. Any larger field violates minimal generation.

### ALG-CH19-E004 — Exercise 4: Cubic existence bound
Show a cubic splitting field has degree at most six.

#### ALG-CH19-E004 — Solution

Adjoin one root with degree at most three. The remaining
quadratic splits after adjoining at most one root, of degree at most two.
The tower law gives degree at most $3\\cdot 2=6$.

### ALG-CH19-E005 — Exercise 5: Split but not normal
Show $Q(\\sqrt[3]{2})/Q$ is not normal.

#### ALG-CH19-E005 — Solution

The irreducible polynomial $x^3-2$ has the real cube root in the
field. The field is contained in $R$, while the other two roots are nonreal,
so the polynomial does not split there. This violates normality.

### ALG-CH19-E006 — Exercise 6: A normal quadratic extension
Prove every quadratic extension in characteristic not two is normal.

#### ALG-CH19-E006 — Solution

Write it as $F(\\alpha)$ with irreducible quadratic minimal
polynomial $x^2+bx+c$. If $\\alpha$ is one root, the other is $-b-\\alpha$, which
also lies in $F(\\alpha)$. Hence the minimal polynomial splits and the extension
is its splitting field.

### ALG-CH19-E007 — Exercise 7: Repeated-root criterion
Prove $(x-\\alpha)^2|f$ iff $f(\\alpha)=f'(\\alpha)=0$.

#### ALG-CH19-E007 — Solution

Divide $f=(x-\\alpha)q+r$. The first equality makes $r=0$.
Differentiating gives $f'=q+(x-\\alpha)q'$, so $f'(\\alpha)=q(\\alpha)$. This is zero
exactly when $(x-\\alpha)|q$, equivalently when the square divides $f$.

### ALG-CH19-E008 — Exercise 8: A separability computation
Is $x^4-1$ separable over $\\mathbb{F}_{3}$?

#### ALG-CH19-E008 — Solution

Its derivative is $4x^3=x^3$. Since $x$ does not divide
$x^4-1$, the gcd is one. Therefore it is separable.

### ALG-CH19-E009 — Exercise 9: Derivative zero
Characterize polynomials with zero derivative in characteristic $p$.

#### ALG-CH19-E009 — Solution

The coefficient of $x^{n-1}$ in $f'$ is $n a_n$. It vanishes
for every $n$ precisely when each nonzero $a_n$ has $p|n$. Hence exactly the
$p$-divisible powers occur and $f(x)=g(x^p)$.

### ALG-CH19-E010 — Exercise 10: An inseparable polynomial
Show $x^p-t$ over $\\mathbb{F}_{p}(t)$ is not separable.

#### ALG-CH19-E010 — Solution

Its derivative is zero. In a field containing $u$ with $u^p=t$,
the binomial identity in characteristic $p$ gives $x^p-t=(x-u)^p$, so its only
root has multiplicity $p$.

### ALG-CH19-E011 — Exercise 11: Finite fields are perfect
Prove Frobenius is surjective on a finite field.

#### ALG-CH19-E011 — Solution

If $a^p=b^p$, then $(a-b)^p=0$, hence $a=b$; Frobenius is
injective. Every injective self-map of a finite set is surjective.

### ALG-CH19-E012 — Exercise 12: Roots of $x^{q^n}-x$
Why are all elements of $\\mathbb{F}_{q^n}$ roots?

#### ALG-CH19-E012 — Solution

Zero is immediate. Its nonzero multiplicative group has order
$q^n-1$, so Lagrange gives $a^{q^n-1}=1$; multiplying by $a$ gives
$a^{q^n}=a$.

### ALG-CH19-E013 — Exercise 13: No repeated finite-field roots
Show $x^{q^n}-x$ has distinct roots.

#### ALG-CH19-E013 — Solution

In characteristic $p$, $q^n$ is zero as a field element, so the
derivative is $-1$. Its gcd with the polynomial is one, proving separability.

### ALG-CH19-E014 — Exercise 14: A quartic splitting field
Find the splitting field and degree of $x^4-2$ over $Q$.

#### ALG-CH19-E014 — Solution

With real $\\alpha^4=2$, the roots are
$\\alpha,-\\alpha,i\\alpha,-i\\alpha$, so the field is $\\mathbb{Q}(\\alpha,i)$.
Eisenstein gives $[\\mathbb{Q}(\\alpha):\\mathbb{Q}]=4$; the real field
$\\mathbb{Q}(\\alpha)$ lacks $i$, giving second degree two and total degree eight.

### ALG-CH19-E015 — Exercise 15: Roots determine embeddings
Explain why an $F$-embedding of $F(\\alpha)$ is determined by $\\alpha$.

#### ALG-CH19-E015 — Solution

Every element has the form $f(\\alpha)/g(\\alpha)$ with $f,g\\in F[x]$ and
$g(\\alpha)\\ne0$. An $F$-embedding $\\sigma$ must send it to
$f(\\sigma(\\alpha))/g(\\sigma(\\alpha))$; injectivity makes the denominator
nonzero. Thus the image of $\\alpha$ forces the embedding even when $\\alpha$
is transcendental.

### ALG-CH19-E016 — Exercise 16: Count embeddings of a simple separable extension
If the separable minimal polynomial of $\\alpha$ has degree $n$, count the
$F$-embeddings of $F(\\alpha)$ into a splitting field.

#### ALG-CH19-E016 — Solution

Each embedding must send $\\alpha$ to one of the $n$ distinct
roots. Conversely the extension-of-embeddings construction gives one embedding
for each root. Thus there are exactly $n$.

### ALG-CH19-E017 — Exercise 17: Intersections of normal extensions
If finite $K/F$ and $L/F$ are normal inside a common closure, show $K \\cap L/F$
is normal.

#### ALG-CH19-E017 — Solution

Let an irreducible polynomial $p\\in F[x]$ have a root
$\\alpha\\in K\\cap L$. Normality of $K/F$ puts every conjugate root of $p$ in
$K$, and normality of $L/F$ puts every conjugate root in $L$. Hence every root
lies in $K\\cap L$, so $p$ splits there. This is exactly normality of the
intersection over $F$.

### ALG-CH19-E018 — Exercise 18: Composita of normal extensions
Under the same hypotheses, show $KL/F$ is normal.

#### ALG-CH19-E018 — Solution

A base embedding sends products and sums of elements from $K$
and $L$ back into the field they generate, because it preserves each factor.
Thus it preserves $KL$, which is therefore normal.

### ALG-CH19-E019 — Exercise 19: Prime-degree intermediate fields
If $[E:F]$ is prime, show there are no proper intermediate fields.

#### ALG-CH19-E019 — Solution

For $F \\subseteq K \\subseteq E$, the tower law says
$[E:F]=[E:K][K:F]$. Primality forces one factor to be one, so $K=E$ or $K=F$.

### ALG-CH19-E020 — Exercise 20: Normality audit
Is $Q(\\sqrt{2},\\sqrt{3})/Q$ normal and separable?

#### ALG-CH19-E020 — Solution

It is the splitting field of $(x^2-2)(x^2-3)$, so it is normal.
Characteristic zero makes both factors, and hence every finite extension,
separable. Therefore it is normal and separable.
`;export{e as default};