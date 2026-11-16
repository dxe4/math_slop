
# Polynomial Rings, Irreducibility, and Factorization

The expression $x^2+1$ can be irreducible, a product of linear factors, or a
repeated square depending on its coefficient field. Polynomial divisibility
is never just symbol manipulation: it belongs to a declared ring $R[x]$.

This chapter develops the exact arithmetic of one-variable polynomials. Over
a field, division with remainder makes $F[x]$ behave much like $\mathbb{Z}$: gcds,
Bézout identities, prime irreducibles, and unique factorization follow. Over a
unique factorization domain, content and Gauss's lemma connect factorization
to the fraction field. Quotients by irreducible polynomials then construct
fields in which new algebraic elements live.

The preceding [divisibility chapter](divisibility-euclidean-pid-ufd.md)
develops Euclidean domains, principal ideal domains, and unique factorization
domains in general. Sections 2–5 specialize those ideas to polynomials and
retain direct proofs so the hypotheses can be audited at the point of use. The
[quotient-ring chapter](ring-homomorphisms-ideals-quotients.md)
supplies ideals and the quotient-field criterion.

## 1. Formal polynomials and degree

**Definition 17.1 (Formal polynomials and degree).**

For a commutative ring $R$, a polynomial is a finite formal sum

$f(x)=a_0+a_1x+...+a_nx^n$, $a_i \in R$.

Two polynomials are equal exactly when corresponding coefficients are equal.
The symbol $x$ is formal; it is not a number that can be cancelled or assigned
a value unless an evaluation map is declared.

For nonzero $f$, its **degree** is the largest $i$ with $a_i\ne 0$, and its
**leading coefficient** is that $a_i$. We set $\deg 0=-\infty$ when using
degree formulas. A polynomial is **monic** when its leading coefficient is
one.

If $R$ is an integral domain and $f,g$ are nonzero, then

$\deg(fg)=\deg f+\deg g$.

Indeed, the prospective leading coefficient of $fg$ is the product of the
two nonzero leading coefficients, which remains nonzero in a domain. If $R$
has zero divisors, the formula can fail. In $(\mathbb{Z}/4\mathbb{Z})[x]$,

$(2x+1)^2=4x^2+4x+1=1$,

so the degree drops from the expected two to zero.

Over an integral domain, the units of $R[x]$ are exactly the constant
polynomials whose values are units in $R$. Degree additivity forces both
factors of a polynomial unit to have degree zero. Rings with nilpotents can
have nonconstant units; for example in $(\mathbb{Z}/4\mathbb{Z})[x]$, $1+2x$ is its own inverse.

## 2. Division with remainder over a field

**Theorem 17.1 (Polynomial division over a field).**

Let $F$ be a field and let $f,g \in F[x]$ with $g\ne 0$.

**Division algorithm.** There exist unique $q,r \in F[x]$ such that

$f=qg+r$, with $r=0$ or $\deg r<\deg g$.

For existence, if $\deg f<\deg g$, take $q=0,r=f$. Otherwise let $a x^m$ and
$b x^n$ be the leading terms of $f$ and $g$. Since $b$ is invertible,

$f_1=f-(a/b)x^{m-n}g$

has lower degree than $f$. Repeat; degree cannot decrease indefinitely. The
sum of removed terms is $q$ and the final remainder is $r$.

For uniqueness, if

$f=qg+r=q'g+r'$

with both remainders smaller than $g$, then

$(q-q')g=r'-r$.

If $q-q'$ were nonzero, the left side would have degree at least $\deg g$,
while the right side has degree below $\deg g$. Thus $q=q'$ and $r=r'$.

Division can fail over a nonfield coefficient ring because the leading
coefficient may not be invertible. There are no $q,r \in \mathbb{Z}[x]$ with
$x=2q+r$ and $\deg r<0$: that would require the coefficient $1/2$.

### Worked division

**Worked example 17.1 (A complete polynomial division).**

Over $\mathbb{Q}$, divide $x^4-1$ by $x^2+x+1$:

$x^4-1=(x^2-x)(x^2+x+1)+(x-1)$.

The remainder has degree one, below the divisor's degree two. Evaluating the
identity or multiplying back audits the calculation.

## 3. Gcds, the Euclidean algorithm, and Bézout

For nonzero $f,g \in F[x]$, a **greatest common divisor** is a common divisor
$d$ such that every common divisor divides $d$. Gcds are unique up to a
nonzero constant; choosing the monic associate makes $\gcd(f,g)$ unique.

Repeated division gives the Euclidean algorithm:

$f=q_0g+r_1$,

$g=q_1r_1+r_2$,

and so on until the first zero remainder. The last nonzero remainder, scaled
to be monic, is the gcd. Each replacement preserves the common divisors
because a divisor of $f,g$ divides $f-q_0g=r_1$, and conversely a divisor of
$g,r_1$ divides $q_0g+r_1=f$.

Back-substitution proves a **Bézout identity**:

$\gcd(f,g)=a(x)f(x)+b(x)g(x)$

for some $a,b \in F[x]$. Consequently every ideal in $F[x]$ is principal. To
see this, choose in a nonzero ideal $I$ a monic polynomial $d$ of least
degree. Divide any $f \in I$ by $d$. The remainder $r=f-qd$ lies in $I$ and has
smaller degree, so minimality forces $r=0$; hence $I=(d)$.

Thus $F[x]$ is a Euclidean domain and a principal ideal domain, recovering the
general implication directly in the polynomial setting.

### Worked gcd

**Worked example 17.2 (Polynomial Euclid and Bézout).**

For $f=x^4-1$ and $g=x^3-1$,

$f=xg+(x-1)$,

and both original polynomials are divisible by $x-1$. Hence the monic gcd is
$x-1$. A Bézout identity follows immediately:

$x-1=f-xg$.

## 4. Roots and linear factors

For $a \in R$, evaluation $ev_a:R[x]\to R$ is a ring homomorphism.

**Theorem 17.3 (Remainder).** If $R$ is commutative, division by the monic
polynomial $x-a$ gives

$f(x)=(x-a)q(x)+f(a)$.

This identity can be proved termwise from

$x^n-a^n=(x-a)(x^{n-1}+ax^{n-2}+...+a^{n-1})$.

Therefore the **factor theorem** holds over any commutative ring:

$f(a)=0$ iff $(x-a)$ divides $f(x)$.

If $R$ is an integral domain, a nonzero degree-$n$ polynomial has at most
$n$ distinct roots. Induct on degree: a root $a$ gives
$f=(x-a)q$; any other root $b$ yields
$0=(b-a)q(b)$, and the domain property plus $b\ne a$ forces $q(b)=0$.

The domain hypothesis is necessary. In $\mathbb{Z}/8\mathbb{Z}$, the degree-two polynomial
$x^2-1$ has four roots: $[1],[3],[5],[7]$.

## 5. Irreducible elements become primes in $F[x]$

Let $R$ be an integral domain. A nonzero nonunit $f \in R[x]$ is
**irreducible** if every factorization $f=gh$ has a unit factor. It is
**prime** if $f$ divides $gh$ only when it divides $g$ or $h$.

Prime implies irreducible in any integral domain. The converse can fail in a
general domain, but it holds in $F[x]$.

Suppose irreducible $p \in F[x]$ divides $gh$. If $p$ does not divide $g$, then
$\gcd(p,g)=1$, since the only monic divisors of irreducible $p$ are $1$ and its
monic associate. Bézout gives

$ap+bg=1$.

Multiply by $h$:

$aph+bgh=h$.

Both terms on the left are divisible by $p$, the first visibly and the second
because $p$ divides $gh$. Hence $p$ divides $h$. Thus irreducibles are prime
in $F[x]$.

Every nonzero nonunit in $F[x]$ factors into irreducibles: if not irreducible,
split it into two positive-degree factors and repeat; degrees strictly
decrease along each branch. Uniqueness follows from primality. If

$p_1...p_r=q_1...q_s$

are irreducible factorizations, $p_1$ divides some $q_j$, hence the two are
associates; cancel and induct. Choosing monic irreducibles and separating the
leading constant makes the factorization literally unique up to order.

## 6. Irreducibility tests by degree and roots

A polynomial of degree two or three over a field is reducible exactly when it
has a root in that field. A reducible polynomial of these degrees has a
positive-degree factor of degree at most one, hence a linear factor and a root.
The converse is the factor theorem.

For degree four or more, absence of roots is not enough. Over $\mathbb{Q}$,

$x^4+4=(x^2-2x+2)(x^2+2x+2)$

has no rational root but is reducible.

Over a finite field, low-degree irreducibility can be tested exhaustively. A
quartic with no linear factor can only reduce as two quadratics, so one need
only test divisibility by monic irreducible quadratics. Exhaustive calculation
is a proof when the finite search space and all cases are stated.

### Worked finite-field test

**Worked example 17.3 (Certify irreducibility over a finite field).**

Consider $f=x^4+x+1 \in \mathbb{F}_{2}[x]$. It has no root because $f(0)=1$ and
$f(1)=1$. The only monic irreducible quadratic over $\mathbb{F}_{2}$ is
$x^2+x+1$; its square is $x^4+x^2+1$, not $f$. If $f$ factored into monic
quadratics with no linear factor, both factors would be that unique quadratic.
Therefore $f$ is irreducible.

## 7. Quotients by polynomials

For nonconstant $f \in F[x]$, every coset in $F[x]/(f)$ has a unique
representative of degree below $\deg f$, by division with remainder. Thus if
$F$ is finite with $q$ elements and $\deg f=n$, the quotient has $q^n$
elements.

**Field criterion.** $F[x]/(f)$ is a field iff $f$ is irreducible.

The ideal $(f)$ is maximal exactly when the quotient is a field. In the PID
$F[x]$, an ideal $(f)$ generated by a nonzero nonunit is maximal exactly when
$f$ is irreducible. Directly, if $f$ is irreducible and $g+(f)$ is nonzero,
then $f$ does not divide $g$, so $\gcd(f,g)=1$. A Bézout identity
$af+bg=1$ makes $b+(f)$ the inverse of $g+(f)$.

If $f=uv$ with both factors nonconstant, then the nonzero cosets of $u$ and
$v$ multiply to zero, so the quotient is not a field.

### Worked extension: four elements

The polynomial $x^2+x+1$ has no root in $\mathbb{F}_{2}$, so it is irreducible. The
quotient

$\mathbb{F}_{2}[x]/(x^2+x+1)$

has four elements represented by $0,1,\alpha,1+\alpha$, with relation

$\alpha^2=\alpha+1$

because subtraction equals addition in characteristic two. Every nonzero
element has an inverse; for example
$\alpha(1+\alpha)=\alpha+\alpha^2=1$.

## 8. Content and Gauss's lemma

**Theorem 17.2 (Primitive-product and factorization transfer).**

Let $R$ be a unique factorization domain with fraction field $K$. The
**content** $c(f)$ of a nonzero polynomial $f \in R[x]$ is a gcd of its
coefficients, defined up to a unit. The polynomial is **primitive** when its
coefficients have no common nonunit factor. Write $f=c(f)f_0$ with $f_0$
primitive.

**Lemma 17.4 (Gauss's).** The product of primitive polynomials in $R[x]$ is
primitive.

If $fg$ were not primitive, a prime factor $p$ of a common nonunit divisor of
its coefficients would divide every coefficient of $fg$. Reducing
coefficients modulo the prime ideal $(p)$ would make the product of the two
reduced polynomials zero in $(R/(p))[x]$. In a UFD, prime elements generate
prime ideals, so $R/(p)$ is a domain. A product of two nonzero polynomials over
a domain cannot be zero. Therefore one reduced polynomial was zero, meaning
$p$ divided every coefficient of $f$ or every coefficient of $g$, contrary to
primitivity. No prime divides all product coefficients, so $fg$ is primitive.

It follows, up to associates, that

$c(fg)=c(f)c(g)$.

**Irreducibility transfer.** A primitive $f \in R[x]$ is irreducible in
$R[x]$ iff it is irreducible in $K[x]$.

Suppose primitive $f=gh$ in $K[x]$, with both factors of positive degree.
Choose nonzero $A,B\in R$ clearing denominators and write $Ag=cG$ and
$Bh=dH$, where $G,H\in R[x]$ are primitive. Then $ABf=cdGH$. Content
multiplicativity gives $AB\sim cd$, so $cd=uAB$ for a unit $u\in R$.
Canceling nonzero $AB$ yields $f=uGH$, a factorization in $R[x]$.
Conversely, a factorization of primitive $f$ into nonunits in $R[x]$ cannot
have a constant nonunit factor: it would divide every coefficient. Thus both
factors have positive degree and remain nonunits in $K[x]$.

To prove that $R[x]$ is a UFD, factor the content in $R$ and the primitive
part in the PID $K[x]$. Clear denominators and take primitive associates of
the positive-degree factors; the preceding content argument recovers their
product in $R[x]$. Uniqueness of constant factors follows in $R$, and
uniqueness of positive-degree factors follows in $K[x]$. If primitive
$G,H\in R[x]$ satisfy $G=\lambda H$ for $\lambda=a/b\in K^\times$,
comparing contents in $bG=aH$ gives $a\sim b$, hence
$\lambda\in R^\times$. Their association therefore already holds in $R[x]$.

## 9. Rational roots and Eisenstein

**Theorem 17.5 (Rational root).** Let

$f(x)=a_nx^n+...+a_0 \in \mathbb{Z}[x]$

and suppose the reduced fraction $r/s$, with $\gcd(r,s)=1$, is a root. Then
$r$ divides $a_0$ and $s$ divides $a_n$.

Multiply $f(r/s)=0$ by $s^n$:

$a_nr^n+a_{n-1}r^{n-1}s+...+a_0s^n=0$.

All terms except the last are divisible by $r$, so $r$ divides $a_0s^n$.
Coprimality gives $r|a_0$. Similarly isolate the first term to obtain
$s|a_n$.

This theorem gives candidates, not roots. Each candidate must be tested. For
a primitive quadratic or cubic, ruling out all rational candidates proves
irreducibility over $\mathbb{Q}$; for higher degree it only rules out linear factors.

**Eisenstein's criterion.** Let $R$ be a UFD and

$f=a_nx^n+...+a_0 \in R[x]$ be primitive, with $n\ge1$ and $a_n\ne0$. If a prime $p$ satisfies

- $p$ does not divide $a_n$;
- $p$ divides every $a_i$ for $i<n$;
- $p^2$ does not divide $a_0$;

then $f$ is irreducible over the fraction field of $R$.

Suppose $f=gh$ nontrivially in $R[x]$, using Gauss's lemma to take primitive
factors. Reduce modulo $p$. Since every nonleading coefficient of $f$
vanishes, the product reductions equal $a_nx^n$. In the domain
$(R/(p))[x]$, each reduced factor must be a monomial: for nonzero polynomials over a
domain, order (lowest nonzero exponent) and degree both add under
multiplication, so degree minus order zero for a product forces zero for
each factor. Because their leading
coefficients do not vanish, their constant terms both vanish modulo $p$ when
both degrees are positive. Thus $p$ divides both constant terms of $g,h$, so
$p^2$ divides $a_0$, contradiction.

### Worked Eisenstein example

$x^5+10x+5$ is Eisenstein at $5$: all nonleading coefficients are divisible
by five, the constant term is not divisible by 25, and the leading coefficient
is not divisible by five. It is irreducible in $\mathbb{Q}[x]$.

Sometimes a change of variable exposes the criterion. Although $x^4+1$ is
not Eisenstein as written,

$(x+1)^4+1=x^4+4x^3+6x^2+4x+2$

is Eisenstein at two. A factorization of $x^4+1$ would survive the invertible
substitution $x\to x+1$, so $x^4+1$ is irreducible over $\mathbb{Q}$.

## 10. Repeated factors and formal derivatives

For $f=\sum a_ix^i$, define the formal derivative

$f'=\sum_{i\ge 1} i a_i x^{i-1}$.

The usual sum and product rules follow coefficientwise in every
characteristic.

For this conditional statement, a field is called **perfect** if every irreducible polynomial over it has distinct roots in an algebraic closure. If an irreducible polynomial splits there as $p(x)=c\prod_j(x-\alpha_j)$ with distinct roots, then $p'(\alpha_i)=c\prod_{j\ne i}(\alpha_i-\alpha_j)\ne0$. Thus its derivative is nonzero, and irreducibility makes the gcd with that lower-degree derivative one. This supplies the perfect-field input used below; the broader extension theory remains optional preparation.

For nonzero $f\in F[x]$, where $F$ is a field of characteristic zero or,
more generally, a perfect field (defined below), $f$ has a repeated
irreducible factor iff

$\gcd(f,f')\ne 1$.

If $f=p^2h$, the product rule makes $p$ divide $f'$, so $p$ divides the gcd.
Conversely, if irreducible $p$ divides both $f$ and $f'$, write $f=ph$. Then
$f'=p'h+ph'$. Modulo $p$, the equation $p|f'$ gives $p|p'h$.
In characteristic zero, a nonconstant irreducible has nonzero derivative of
smaller degree; over any perfect field, an irreducible is separable, as discussed in the retained [separability reading](splitting-fields-separability.md). Thus $p'\ne0$ and $\deg p'<\deg p$, so it cannot divide $p'$.
Primality therefore forces $p|h$,
producing a repeated factor.

Over an arbitrary field of characteristic $p$, the converse needs this
separability caveat. An irreducible polynomial can have derivative zero over
an imperfect field; then it divides both itself and its derivative without
occurring as a square. In characteristic $p$, a derivative-zero polynomial
has the form $q(x^p)$. For instance $(x-a)^p=x^p-a^p$ after adjoining a
$p$th root. The later field-extension chapter will distinguish square-free
factorization from separability carefully.

## 11. Common errors

- Irreducibility is relative to a coefficient ring or field.
- Polynomial equality is coefficientwise, not equality at a few sampled
  inputs.
- Degree multiplication uses the integral-domain hypothesis.
- Division with remainder by an arbitrary polynomial requires invertibility
  of its leading coefficient; over a field this is automatic.
- A root gives a linear factor, but no roots implies irreducibility only in
  degrees two and three.
- The rational root theorem lists candidates; it does not certify them.
- Irreducible and prime coincide in $F[x]$, not in every integral domain.
- The quotient $F[x]/(f)$ is a field only when $f$ is irreducible.
- Eisenstein needs one prime satisfying all three coefficient conditions.
- In characteristic $p$, a zero formal derivative need not mean a polynomial
  is constant.

## 12. Chapter summary and retrieval prompts

Over a field, polynomial division yields Euclidean gcds and Bézout identities,
makes every ideal principal, and turns irreducibles into primes, giving unique
factorization. Roots are linear factors, but their diagnostic power depends on
degree. Quotienting by an irreducible polynomial constructs a field. Over a
UFD, Gauss's lemma transfers primitive factorization to the fraction field;
rational-root and Eisenstein criteria then prove concrete irreducibility.
Formal derivatives detect repeated factors over perfect fields and expose an
additional inseparability obstruction over imperfect fields.

Retrieve:

1. Where is the domain hypothesis used in degree arithmetic?
2. Why does polynomial division require a field or a monic divisor?
3. How does Bézout prove an irreducible in $F[x]$ is prime?
4. When is root testing a complete irreducibility test?
5. Why does irreducibility make $F[x]/(f)$ a field?
6. What does Gauss's lemma transfer between $R[x]$ and its fraction field?
7. Which three divisibility tests make Eisenstein work?
8. How does $\gcd(f,f')$ reveal repeated factors, and what changes over an
   imperfect field?

## Exercises with full solutions

### ALG-CH15-E001 — Exercise 1: Formal equality

Are $x^2+x$ and $2x^2$ equal as polynomials over $\mathbb{F}_{2}$ because they agree at
both elements of $\mathbb{F}_{2}$?

<details>
<summary>Hint 1</summary>

Separate coefficient equality from equality of evaluation functions.

</details>

<details>
<summary>Hint 2</summary>

Over F₂, 2x² is the zero polynomial, while x²+x has nonzero coefficients despite vanishing at both field elements.

</details>

#### ALG-CH15-E001 — Solution

<details>
<summary>Solution</summary>


No. Their coefficient lists differ: the first has coefficients
$(0,1,1)$ and the second is the zero polynomial because $2=0$ in $\mathbb{F}_{2}$.
They define the same zero-valued function on $\mathbb{F}_{2}$, since $a^2+a=0$ for both
$a=0,1$, but formal polynomials are not identified merely by their value
functions over a finite field.



</details>

### ALG-CH15-E002 — Exercise 2: Degree failure with zero divisors

Verify $(2x+1)^2=1$ in $(\mathbb{Z}/4\mathbb{Z})[x]$ and explain the failed hypothesis.

<details>
<summary>Hint 1</summary>

Expand the square and reduce every coefficient modulo four.

</details>

<details>
<summary>Hint 2</summary>

The leading coefficient 2 is a zero divisor, so the domain degree-product theorem does not apply.

</details>

#### ALG-CH15-E002 — Solution

<details>
<summary>Solution</summary>


Expansion gives $4x^2+4x+1$, whose first two coefficients are
zero modulo four. The leading coefficients $2$ and $2$ are nonzero but their
product is zero; $\mathbb{Z}/4\mathbb{Z}$ is not an integral domain, so degree additivity does
not apply.



</details>

### ALG-CH15-E003 — Exercise 3: Polynomial division

Divide $x^4-1$ by $x^2+x+1$ over $\mathbb{Q}$.

<details>
<summary>Hint 1</summary>

Cancel the leading term repeatedly using rational coefficients.

</details>

<details>
<summary>Hint 2</summary>

Continue until the remainder has degree below two, and multiply back to verify.

</details>

#### ALG-CH15-E003 — Solution

<details>
<summary>Solution</summary>


Subtract $x^2(x^2+x+1)$ to obtain
$-x^3-x^2-1$; add $x(x^2+x+1)$ to obtain $x-1$. Thus

$x^4-1=(x^2-x)(x^2+x+1)+(x-1)$.

The remainder degree is below two.



</details>

### ALG-CH15-E004 — Exercise 4: A monic division over $\mathbb{Z}$

Divide $2x^3+x+1$ by $x^2-1$ in $\mathbb{Z}[x]$.

<details>
<summary>Hint 1</summary>

The divisor is monic, so each leading-term cancellation stays integral.

</details>

<details>
<summary>Hint 2</summary>

Subtract 2x(x²−1) and inspect the remaining linear polynomial.

</details>

#### ALG-CH15-E004 — Solution

<details>
<summary>Solution</summary>


Monicity permits division without fractions. Subtract
$2x(x^2-1)=2x^3-2x$ to obtain remainder $3x+1$. Hence
$2x^3+x+1=(2x)(x^2-1)+(3x+1)$.



</details>

### ALG-CH15-E005 — Exercise 5: A polynomial gcd

Find the monic gcd of $x^4-1$ and $x^3-1$ over $\mathbb{Q}$ and give a Bézout identity.

<details>
<summary>Hint 1</summary>

Subtract x(x³−1) from x⁴−1.

</details>

<details>
<summary>Hint 2</summary>

The remainder x−1 already divides both inputs and supplies a short Bézout relation.

</details>

#### ALG-CH15-E005 — Solution

<details>
<summary>Solution</summary>


Division gives
$x^4-1=x(x^3-1)+(x-1)$. Both original polynomials are divisible by $x-1$, so
the monic gcd is $x-1$. The displayed division rearranges to
$x-1=(x^4-1)-x(x^3-1)$, a Bézout identity.



</details>

### ALG-CH15-E006 — Exercise 6: Factor theorem

Prove $x-a$ divides $x^n-a^n$ over any commutative ring.

<details>
<summary>Hint 1</summary>

Use the finite geometric-factorization identity.

</details>

<details>
<summary>Hint 2</summary>

Multiply (x−a)(x^{n−1}+ax^{n−2}+⋯+a^{n−1}) and cancel successive terms.

</details>

#### ALG-CH15-E006 — Solution

<details>
<summary>Solution</summary>


Multiply out
$(x-a)(x^{n-1}+ax^{n-2}+...+a^{n-1})$. Adjacent middle terms cancel, leaving
$x^n-a^n$. This identity requires only commutativity of $a$ with $x$ and the
coefficients.



</details>

### ALG-CH15-E007 — Exercise 7: Root bound

Why can a nonzero cubic over a field not have four distinct roots?

<details>
<summary>Hint 1</summary>

Each distinct root supplies a linear factor.

</details>

<details>
<summary>Hint 2</summary>

Induct with the factor theorem; a nonzero degree-three polynomial cannot contain four such factors.

</details>

#### ALG-CH15-E007 — Solution

<details>
<summary>Solution</summary>


Successively applying the factor theorem to distinct roots
would make the product of four distinct linear factors divide the cubic. That
divisor has degree four, impossible by degree additivity. Equivalently use the
domain root-bound induction.



</details>

### ALG-CH15-E008 — Exercise 8: Cubic irreducibility

Prove $x^3-2$ is irreducible over $\mathbb{Q}$.

<details>
<summary>Hint 1</summary>

For a cubic, reducibility over a field implies a linear factor.

</details>

<details>
<summary>Hint 2</summary>

Use the rational-root candidates and show neither candidate is a root.

</details>

#### ALG-CH15-E008 — Solution

<details>
<summary>Solution</summary>


A reducible cubic over a field has a root. The rational root
candidates are $\pm 1,\pm 2$; none has cube two. Thus there is no rational root,
so the cubic is irreducible in $\mathbb{Q}[x]$.



</details>

### ALG-CH15-E009 — Exercise 9: No roots is insufficient

Show $x^4+4$ has no rational root but is reducible over $\mathbb{Q}$.

<details>
<summary>Hint 1</summary>

Try the difference of two squares after adding and subtracting 4x².

</details>

<details>
<summary>Hint 2</summary>

The Sophie Germain factorization (x²−2x+2)(x²+2x+2) supplies a proper factorization.

</details>

#### ALG-CH15-E009 — Solution

<details>
<summary>Solution</summary>


Rational root candidates are $\pm 1,\pm 2,\pm 4$; none makes the
positive expression zero. Yet
$x^4+4=(x^2-2x+2)(x^2+2x+2)$, as multiplication verifies. Degree four can
factor as two quadratics without acquiring a rational root.



</details>

### ALG-CH15-E010 — Exercise 10: Rational-root candidates

List all possible rational roots of $6x^3-5x^2+x-2$ in lowest terms.

<details>
<summary>Hint 1</summary>

Write a candidate root as a/b in lowest terms.

</details>

<details>
<summary>Hint 2</summary>

The rational-root theorem requires a|2 and b|6; remove duplicates from the candidate list.

</details>

#### ALG-CH15-E010 — Solution

<details>
<summary>Solution</summary>


The numerator divides two and the denominator divides six. The
candidate set is
$\pm 1,\pm 2,\pm 1/2,\pm 1/3,\pm 2/3,\pm 1/6$ after removing duplicates. The theorem says
only that any rational root lies in this set; each must still be substituted.



</details>

### ALG-CH15-E011 — Exercise 11: Primitive content

Find the content and primitive part of $12x^3-18x+30 \in \mathbb{Z}[x]$.

<details>
<summary>Hint 1</summary>

Take the positive gcd of all integer coefficients.

</details>

<details>
<summary>Hint 2</summary>

Divide each coefficient by that content to obtain a primitive polynomial.

</details>

#### ALG-CH15-E011 — Solution

<details>
<summary>Solution</summary>


The gcd of the coefficients $12,0,-18,30$ is six. Thus one
choice of content is $6$, and the primitive part is
$2x^3-3x+5$. Its nonzero coefficients have gcd one.



</details>

### ALG-CH15-E012 — Exercise 12: Gauss transfer

Explain why primitive $2x^2+x+1$ is irreducible in $\mathbb{Z}[x]$ iff it is
irreducible in $\mathbb{Q}[x]$.

<details>
<summary>Hint 1</summary>

Apply Gauss's lemma to the primitive polynomial.

</details>

<details>
<summary>Hint 2</summary>

Nonconstant factorizations over Q clear denominators to primitive factorizations over Z, and the reverse direction is immediate.

</details>

#### ALG-CH15-E012 — Solution

<details>
<summary>Solution</summary>


$\mathbb{Z}$ is a UFD with fraction field $\mathbb{Q}$, and the polynomial's
coefficients have gcd one. Gauss's irreducibility lemma therefore applies.
A rational factorization can be cleared of denominators and contents to
produce an integer factorization, while an integer factorization is already a
rational one.



</details>

### ALG-CH15-E013 — Exercise 13: Eisenstein directly

Prove $x^5+10x+5$ is irreducible over $\mathbb{Q}$.

<details>
<summary>Hint 1</summary>

Use the prime five.

</details>

<details>
<summary>Hint 2</summary>

Every nonleading coefficient is divisible by five, while the constant term is not divisible by twenty-five.

</details>

#### ALG-CH15-E013 — Solution

<details>
<summary>Solution</summary>


Take $p=5$. It does not divide the leading coefficient one; it
divides every other coefficient, including the displayed $10$ and the zero
coefficients; and $25$ does not divide the constant coefficient five.
Eisenstein's criterion gives irreducibility over $\mathbb{Q}$.



</details>

### ALG-CH15-E014 — Exercise 14: Eisenstein after a shift

Prove $x^4+1$ is irreducible over $\mathbb{Q}$.

<details>
<summary>Hint 1</summary>

Replace x by x+1.

</details>

<details>
<summary>Hint 2</summary>

Expand (x+1)⁴+1 and apply Eisenstein at two; substitution preserves reducibility in both directions.

</details>

#### ALG-CH15-E014 — Solution

<details>
<summary>Solution</summary>


Substitute $x+1$ to get
$x^4+4x^3+6x^2+4x+2$, which is Eisenstein at two: every nonleading coefficient
is even and the constant term is not divisible by four. Translation
$x\to x+1$ is an automorphism of $\mathbb{Q}[x]$, so it preserves reducibility. Hence the
original polynomial is irreducible.



</details>

### ALG-CH15-E015 — Exercise 15: A quadratic extension of $\mathbb{F}_{3}$

Show $x^2+1$ is irreducible over $\mathbb{F}_{3}$, then find the inverse of
$x+1$ in $\mathbb{F}_{3}[x]/(x^2+1)$.

<details>
<summary>Hint 1</summary>

Test all three possible roots to prove irreducibility of the quadratic.

</details>

<details>
<summary>Hint 2</summary>

Use α²=−1 to reduce (α+1)(α−1) and invert its nonzero scalar value.

</details>

#### ALG-CH15-E015 — Solution

<details>
<summary>Solution</summary>


At $0,1,2$, the values are respectively $1,2,2$, so there is no
root; a rootless quadratic is irreducible. In the quotient $x^2=-1=2$.
Then
$(x+1)(x+2)=x^2+3x+2=2+0+2=1$ modulo three. Thus the inverse of $x+1$ is
$x+2$.



</details>

### ALG-CH15-E016 — Exercise 16: A reducible quotient

Show $\mathbb{F}_{5}[x]/(x^2-1)$ is not a field by displaying nonzero zero divisors.

<details>
<summary>Hint 1</summary>

Factor x²−1 into two linear factors.

</details>

<details>
<summary>Hint 2</summary>

Their residue classes are nonzero by degree but multiply to zero.

</details>

#### ALG-CH15-E016 — Solution

<details>
<summary>Solution</summary>


The polynomial factors as $(x-1)(x+1)$. Neither factor belongs
to $(x^2-1)$ because each has smaller positive degree, so their cosets are
nonzero. Their product is the zero coset. A field has no nonzero zero
divisors.



</details>

### ALG-CH15-E017 — Exercise 17: An irreducible quartic over $\mathbb{F}_{2}$

Prove $x^4+x+1$ is irreducible in $\mathbb{F}_{2}[x]$.

<details>
<summary>Hint 1</summary>

First exclude linear factors by evaluating at zero and one.

</details>

<details>
<summary>Hint 2</summary>

The only monic irreducible quadratic over F₂ is x²+x+1; divide by it to exclude the remaining possible factorization.

</details>

#### ALG-CH15-E017 — Solution

<details>
<summary>Solution</summary>


Values at zero and one are both one, so there is no linear
factor. A reducible quartic without a linear factor must be a product of two
irreducible monic quadratics. The only such quadratic over $\mathbb{F}_{2}$ is
$x^2+x+1$; its square is $x^4+x^2+1$, not the given polynomial. Therefore no
factorization exists.



</details>

### ALG-CH15-E018 — Exercise 18: Repeated-factor detection

Find $\gcd(f,f')$ for $f=x^4-2x^2+1$ over $\mathbb{Q}$.

<details>
<summary>Hint 1</summary>

Factor f as (x²−1)² and compute its formal derivative.

</details>

<details>
<summary>Hint 2</summary>

Compare the common linear-factor multiplicities in f and f′.

</details>

#### ALG-CH15-E018 — Solution

<details>
<summary>Solution</summary>


Factor $f=(x^2-1)^2$. Its derivative is
$4x^3-4x=4x(x^2-1)$. The monic common factor is $x^2-1$; the remaining factors
$x^2-1$ and $4x$ are coprime. Thus $\gcd(f,f')=x^2-1$, identifying the repeated
factor.



</details>

### ALG-CH15-E019 — Exercise 19: Zero derivative in characteristic $p$

Prove a polynomial over a field of characteristic $p$ has derivative zero iff
every exponent with nonzero coefficient is divisible by $p$.

<details>
<summary>Hint 1</summary>

The derivative coefficient of x^{k−1} is k times the coefficient of x^k.

</details>

<details>
<summary>Hint 2</summary>

In characteristic p, a nonzero coefficient survives exactly when p does not divide k.

</details>

#### ALG-CH15-E019 — Solution

<details>
<summary>Solution</summary>


The derivative coefficient of $x^{i-1}$ is $i a_i$. In a field
of characteristic $p$, this is zero for nonzero $a_i$ exactly when $p$ divides
$i$. Hence all surviving terms have exponents $pj$, and the polynomial has the
form $g(x^p)$. The converse follows because the derivative of each $x^{pj}$
has coefficient $pj=0$ in the field.



</details>

### ALG-CH15-E020 — Exercise 20: Coefficient fields change factorization

Factor or certify irreducibility of $x^2+1$ over $\mathbb{R}$, $\mathbb{C}$, $\mathbb{F}_{2}$, and $\mathbb{F}_{3}$.

<details>
<summary>Hint 1</summary>

Keep the coefficient field visible at every step.

</details>

<details>
<summary>Hint 2</summary>

Use real positivity, complex roots ±i, the repeated factor in characteristic two, and the no-root test over F₃.

</details>

#### ALG-CH15-E020 — Solution

<details>
<summary>Solution</summary>


Over $\mathbb{R}$, it has no real root and is an irreducible quadratic.
Over $\mathbb{C}$, it factors $(x-i)(x+i)$. Over $\mathbb{F}_{2}$, subtraction equals addition and
$x^2+1=(x+1)^2$. Over $\mathbb{F}_{3}$, its values at $0,1,2$ are $1,2,2$, so it has no
root and is irreducible. The syntax is unchanged while the coefficient field
changes every divisibility claim.



</details>

## ALG-CH15-P001 — Project: one polynomial, five coefficient worlds

Choose three monic polynomials in $\mathbb Z[x]$, including one quartic and one with a repeated factor,
and analyze them over $\mathbb{Q}$, $\mathbb{R}$, $\mathbb{C}$, $\mathbb{F}_{2}$, and $\mathbb{F}_{5}$ by coefficient inclusion or reduction. For each coefficient
field, give a complete factorization into monic irreducibles, justify every
irreducibility step, compute $\gcd(f,f')$, and describe the quotient by one
chosen factor. Distinguish formal polynomial equality from equality as a
finite-field value function.

### Deliverables

Submit a three-by-five ledger. Every cell must state the monic irreducible factorization with multiplicities, its exact justification, the monic $\gcd(f,f')$, and a quotient $K[x]/(h)$ for one explicitly chosen nonconstant factor $h$ of that row. Give its $K$-dimension and decide whether it is a field or has zero divisors. Include at least one finite-field example in which distinct formal polynomials define the same value function.

### Solution framework and rubric

A worked reference set is $x^4+1$, $x^3-2$, and
$(x-1)^2$, though coefficients must be reduced in each finite field. Over
finite fields, enumerate roots and then test the finite list of irreducible
quadratics when needed. Over $\mathbb{Q}$, use rational roots, Gauss, a shifted
Eisenstein test, or explicit quadratic comparison. Over $\mathbb{R}$, irreducibles have
degree at most two; over $\mathbb{C}$, the fundamental theorem of algebra yields linear
factors, with multiplicity checked by the derivative gcd. A quotient audit
must state its number or dimension of representatives and decide field versus
zero-divisor ring from irreducibility. A complete report records when
coefficient reduction merges terms or makes the derivative vanish.

The grading ledger checks all 15 cells separately. Each factor must multiply back to the reduced polynomial, including multiplicity. A claimed quadratic irreducible over a finite field needs a root test; over $\mathbb Q$ use an exact irreducibility argument, not a plot. The monic derivative gcd detects repeated factors over $\mathbb Q,\mathbb R,\mathbb C$, and $\mathbb F_5$; in $\mathbb F_2$, the derivative can vanish, so $\gcd(f,0)=f$ for nonzero $f$. For any listed $h$, the quotient has basis $1,x,\ldots,x^{\deg h-1}$ by division. It is a field exactly when $h$ is irreducible; if $h=uv$ with nonunit positive-degree factors, the nonzero classes of $u$ and $v$ multiply to zero. Over $\mathbb F_2$, $x^2$ and $x$ induce the same value function although they are different polynomials. A complete submission must state these checks for its chosen inputs, not merely name the methods.

Here is the reference ledger. Put $\rho=\sqrt[3]{2}\in\mathbb R$,
$\omega=(-1+\mathrm i\sqrt3)/2$, and $\zeta=(1+\mathrm i)/\sqrt2$.
In its last column choose $h=f$, a permitted nonconstant factor of itself.
The quotient dimension is the degree of the row polynomial: four, three, or
two. “Zero divisors” means nonzero classes whose product is zero.

| Input | Field | Monic irreducible factorization | Monic $\gcd(f,f')$ | $K[x]/(f)$ |
| --- | --- | --- | --- | --- |
| $x^4+1$ | $\mathbb Q$ | $x^4+1$ | $1$ | field |
| $x^4+1$ | $\mathbb R$ | $(x^2+\sqrt2x+1)(x^2-\sqrt2x+1)$ | $1$ | zero divisors |
| $x^4+1$ | $\mathbb C$ | $\prod_{j=0}^3(x-\zeta^{2j+1})$ | $1$ | zero divisors |
| $x^4+1$ | $\mathbb F_2$ | $(x+1)^4$ | $(x+1)^4$ | zero divisors |
| $x^4+1$ | $\mathbb F_5$ | $(x^2+2)(x^2+3)$ | $1$ | zero divisors |
| $x^3-2$ | $\mathbb Q$ | $x^3-2$ | $1$ | field |
| $x^3-2$ | $\mathbb R$ | $(x-\rho)(x^2+\rho x+\rho^2)$ | $1$ | zero divisors |
| $x^3-2$ | $\mathbb C$ | $\prod_{j=0}^2(x-\rho\omega^j)$ | $1$ | zero divisors |
| $x^3-2$ | $\mathbb F_2$ | $x^3$ | $x^2$ | zero divisors |
| $x^3-2$ | $\mathbb F_5$ | $(x-3)(x^2+3x+4)$ | $1$ | zero divisors |
| $(x-1)^2$ | $\mathbb Q$ | $(x-1)^2$ | $x-1$ | zero divisors |
| $(x-1)^2$ | $\mathbb R$ | $(x-1)^2$ | $x-1$ | zero divisors |
| $(x-1)^2$ | $\mathbb C$ | $(x-1)^2$ | $x-1$ | zero divisors |
| $(x-1)^2$ | $\mathbb F_2$ | $(x+1)^2$ | $(x+1)^2$ | zero divisors |
| $(x-1)^2$ | $\mathbb F_5$ | $(x-1)^2$ | $x-1$ | zero divisors |

The rational quartic uses the shifted Eisenstein proof above; the rational
cubic uses Eisenstein at two. The two real quartic factors have discriminant
$-2$, and the real cubic's quadratic has discriminant $-3\rho^2<0$.
Over $\mathbb F_5$, squares are $0,1,4$: neither $x^2+2$ nor $x^2+3$
has a root, and $x^2+3x+4$ has nonsquare discriminant $3$.
The complex factors list distinct roots explicitly. Product expansion and
the derivative rule verify the remaining entries, including the zero
derivatives in characteristic two. Every reducible row supplies a
zero-divisor certificate by splitting its displayed factors into two
positive-degree products; their degrees are below $\deg f$, so neither
class vanishes. Other chosen inputs require equally complete reasoning.

## Sources

Thomas W. Judson's author-hosted [Polynomial Rings](https://twjudson.github.io/aata-files/aata-html/poly-section-rings.html) and its following division and irreducibility sections provide complementary primary reading. The field-sensitive calculations and local derivative arguments here are original exposition.

## Summary

Formal polynomials are coefficient lists with algebraic operations, which need not be identified by their values on a finite field. Division, gcds, root bounds, Gauss's lemma and Eisenstein provide exact factorization tools with explicit coefficient hypotheses. Irreducible polynomial quotients construct fields, while formal derivatives detect repeated factors with characteristic caveats.
