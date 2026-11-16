var e=`---
parent_id: book-algebra-patterns-structure
chapter_id: divisibility-euclidean-pid-ufd
title: "Divisibility, Euclidean Domains, PIDs, and UFDs"
level: undergraduate
estimated_minutes: 275
license: CC BY-SA 4.0
---

# Divisibility, Euclidean Domains, PIDs, and UFDs

Integer arithmetic combines three facts that separate in general rings: a
division algorithm, generation of every ideal by one element, and unique
factorization into irreducibles. This chapter names the corresponding classes
of domains and proves the implication chain

$\\text{Euclidean domain} \\Longrightarrow \\text{principal ideal domain} \\Longrightarrow \\text{unique factorization domain}$.

Every arrow uses a different idea. Euclidean descent produces a least
remainder. Principal ideals turn gcds into ideal generators and irreducibles
into primes. Stabilization of principal ideals guarantees factorization
terminates. Examples then show why “irreducible,” “prime,” “gcd,” and “Bézout
identity” cannot be exchanged without checking the ambient domain.

The prerequisites are [domains and unit conventions](#/item/book-algebra-patterns-structure?chapter=rings-subrings-domains)
and [ideals and quotient criteria](#/item/book-algebra-patterns-structure?chapter=ring-homomorphisms-ideals-quotients).
The next chapter applies the framework to polynomial rings, while
[Fields of Fractions and Finite Fields](#/item/book-algebra-patterns-structure?chapter=fields-fractions-finite-fields)
uses domains to construct fields of fractions.

## 1. Divisibility, units, and associates

**Definition 15.1 (Divisibility and association).**

Throughout this chapter, $R$ is an integral domain unless stated otherwise.
For $a,b \\in R$, say **$a$ divides $b$**, written $a|b$, if

$b=ac$

for some $c \\in R$. Divisibility is reflexive and transitive. Every element
divides zero, and a unit divides every element.

Elements $a,b$ are **associates** if $a=ub$ for a unit $u$. Equivalently,

$a|b$ and $b|a$.

To prove the reverse implication, write $b=ac$ and $a=bd$. If $a\\ne 0$, then
$a=acd$ and cancellation gives $cd=1$, so $c$ is a unit. The zero case has
only zero as an associate in a domain.

Principal ideals record divisibility in reverse:

$a|b$ iff $(b) \\subseteq (a)$.

Thus associates are exactly elements generating the same principal ideal.
This ideal viewpoint removes harmless unit ambiguity.

### Examples

In $\\mathbb{Z}$, the units are $\\pm 1$, so associates differ by sign. In $F[x]$ for a
field $F$, units are nonzero constants, so monic normalization selects one
representative from each nonzero associate class.

In the Gaussian integers $\\mathbb{Z}[i]$, the units are $1,-1,i,-i$, because the norm
$N(a+bi)=a^2+b^2$ is multiplicative and a unit must have norm one.

## 2. Irreducible and prime elements

**Definition 15.2 (Irreducible and prime elements).**

A nonzero nonunit $p$ is **irreducible** if $p=ab$ forces $a$ or $b$ to be a
unit. It is **prime** if

$p|ab$ implies $p|a$ or $p|b$.

Every prime element is irreducible. If prime $p=ab$, then $p|ab$ gives
$p|a$ or $p|b$. Suppose $a=pc$; substituting into $p=ab$ and cancelling $p$
gives $1=cb$, so $b$ is a unit.

The converse need not hold in an arbitrary domain. The distinction matters
because prime elements support Euclid's lemma, the step that makes
factorization unique.

An element $p$ is prime exactly when its principal ideal $(p)$ is a nonzero
prime ideal. Indeed, $ab \\in (p)$ translates to $p|ab$, and the prime-ideal
condition translates to divisibility of one factor.

## 3. Gcds, lcms, and ideal meaning

A **greatest common divisor** of $a,b$, not both zero, is an element $d$ such
that:

1. $d|a$ and $d|b$;
2. every common divisor of $a,b$ divides $d$.

Any two gcds are associates. A **least common multiple** is defined dually and
is also unique only up to associates.

In a principal ideal domain,

$(a)+(b)=(d)$

exactly when $d$ is a gcd. Since $d$ lies in the ideal sum, there are
$x,y \\in R$ with

$d=ax+by$.

This is a **Bézout identity**. A gcd can exist without such an identity in a
general domain. In $F[x,y]$, the elements $x,y$ have gcd one, but no polynomial
combination $Ax+By$ equals one because every such combination has zero
constant term.

Likewise, when intersections are principal,

$(a) \\cap (b)=(m)$

means $m$ is an lcm. In a UFD, prime-exponent minima and maxima construct gcds
and lcms even when the relevant ideal sum is not principal.

## 4. Euclidean domains

**Definition 15.3 (Euclidean domain).**

A **Euclidean domain** is a domain $R$ equipped with a function

$\\delta:R\\setminus\\{0\\}\\to\\mathbb{Z}_{\\ge0}$

such that for all $a,b$ with $b\\ne 0$, there exist $q,r \\in R$ satisfying

$a=bq+r$, with $r=0$ or $\\delta(r)<\\delta(b)$.

The function need not be unique, and the quotient and remainder need not be
unique unless more structure is imposed.

### Integers

$\\mathbb{Z}$ is Euclidean with $\\delta(n)=|n|$. Ordinary division gives
$a=bq+r$ with $0\\le r<|b|$.

### Polynomial rings over fields

$F[x]$ is Euclidean with $\\delta(f)=\\deg f$. The leading coefficient of the
divisor is invertible, so leading-term cancellation produces a remainder of
smaller degree.

### Gaussian integers

**Worked example 15.1 (Gaussian rounding gives exact division).**

$\\mathbb{Z}[i]$ is Euclidean with $\\delta(z)=N(z)=z\\overline{z}$. For $\\alpha,\\beta$ with
$\\beta\\ne 0$, view $\\alpha/\\beta$ in $\\mathbb{C}$ and choose a Gaussian integer $q$ by
rounding real and imaginary parts to nearest integers. Then

$|\\alpha/\\beta-q|^2\\le 1/2<1$.

With $r=\\alpha-\\beta q$,

$N(r)=N(\\beta)|\\alpha/\\beta-q|^2<N(\\beta)$.

For example,

$7+5i=(3+2i)2+(1+i)$,

and $N(1+i)=2<N(3+2i)=13$.

## 5. The Euclidean algorithm

Repeated Euclidean division gives

$a=bq_0+r_1$,

$b=r_1q_1+r_2$,

and so on. The nonzero $\\delta$ values strictly decrease, so the process
terminates. The last nonzero remainder is a gcd.

At each step, common divisors are preserved: a divisor of $a,b$ divides
$a-bq_0=r_1$, and a divisor of $b,r_1$ divides $bq_0+r_1=a$. Reversing the
division equations gives a Bézout identity.

### Worked integer calculation

**Worked example 15.2 (Euclid and a Bézout certificate).**

$252=1(198)+54$,

$198=3(54)+36$,

$54=1(36)+18$.

Thus $\\gcd(252,198)=18$. Back-substitution gives

$18=54-36=4(54)-198=4(252)-5(198)$.

The coefficients certify the gcd rather than merely reporting it.

## 6. Every Euclidean domain is a PID

**Theorem 15.1 (Euclidean domains are principal).**

A **principal ideal domain** (PID) is an integral domain in which every ideal
has the form $(d)$.

Let $R$ be Euclidean and let $I$ be a nonzero ideal. Choose nonzero $d \\in I$
with $\\delta(d)$ minimal. For any $a \\in I$, divide

$a=dq+r$, with $r=0$ or $\\delta(r)<\\delta(d)$.

Since $r=a-dq$ lies in $I$, minimality rules out a nonzero remainder. Hence
$d|a$ for every $a \\in I$, so $I \\subseteq(d)$. The reverse containment follows
from $d \\in I$. Thus $I=(d)$. The zero ideal is $(0)$, proving every ideal
principal.

The proof uses both the ideal subtraction property and a well-founded
Euclidean size. Picking an arbitrary nonzero ideal element would not work.

## 7. Irreducibles are prime in a PID

**Theorem 15.2 (Irreducible implies prime in a PID).**

Let irreducible $p$ divide $ab$ in a PID. If $p$ divides $a$, we are done.
Otherwise a gcd $d$ of $p,a$ divides the irreducible $p$, so $d$ is a unit or
an associate of $p$. The second option would make $p|a$; therefore $d$ is a
unit. A Bézout identity gives

$xp+ya=1$.

Multiply by $b$:

$xpb+yab=b$.

Both left terms are divisible by $p$, the second because $p|ab$. Hence $p|b$.
Thus $p$ is prime.

Equivalently, a maximal proper principal ideal containing $(p)$ would be
generated by a divisor of $p$; irreducibility leaves no intermediate ideal,
so $(p)$ is maximal and therefore prime. The Bézout proof displays the actual
certificate.

## 8. Factorization exists in a PID

Suppose some nonzero nonunit in PID $R$ cannot be written as a finite product
of irreducibles. It is reducible, so write

$a_0=a_1b_1$

with both factors nonunits. At least one factor, say $a_1$, also lacks a finite
irreducible factorization. Then

$(a_0)\\subsetneq(a_1)$.

The containment holds because $a_1|a_0$; it is strict because equality would
make $b_1$ a unit after cancellation. Repeating produces an infinite strictly
ascending chain of ideals.

But every ascending chain in a PID stabilizes. Its union $I$ is an ideal, so
$I=(d)$. The generator $d$ belongs to some chain member $I_N$; then

$I=(d) \\subseteq I_N \\subseteq I$,

so all later ideals equal $I_N$, contradiction. Therefore every nonzero
nonunit factors into irreducibles.

## 9. Unique factorization domains

A **unique factorization domain** (UFD) is an integral domain in which:

1. every nonzero nonunit is a finite product of irreducibles;
2. any two such factorizations differ only by order and associates.

In a PID, existence was proved in Section 8 and irreducibles are prime by
Section 7. If

$p_1...p_r=q_1...q_s$,

prime $p_1$ divides some $q_j$. Irreducibility makes them associates. Cancel
and repeat to match all factors. Hence every PID is a UFD.

We have proved

$Euclidean domain \\Longrightarrow  PID \\Longrightarrow  UFD$.

In a UFD, every irreducible is prime. If an irreducible $p$ divides $ab$
and either factor is zero, the conclusion is immediate. Otherwise factor
$a$, $b$, and $c$ in $ab=pc$ into irreducibles, allowing empty factorizations
for units. Uniqueness forces $p$ to be associate to a factor of $a$ or $b$.
Hence $p\\mid a$ or $p\\mid b$.

In a UFD, write factorizations using a common list of prime associate classes.
The gcd uses the minimum exponent in each factor; the lcm uses the maximum.
This proves gcds and lcms exist in every UFD, though a gcd need not be an
$R$-linear combination of the inputs.

## 10. Converses and counterexamples

The implication arrows are not definitions and should not be reversed.
The reverse implication PID $\\Rightarrow$ Euclidean also fails: a standard
example is $\\mathbb{Z}[(1+\\sqrt{-19})/2]$. Its PID property and failure of
every Euclidean function are imported results, not consequences of the
examples below; see Conrad, *Remarks about Euclidean Domains*, Theorem 5.22.

### A UFD that is not a PID

For a field $F$, $F[x,y]$ is a UFD by applying the polynomial-UFD theorem
proved in the [polynomial chapter](#/item/book-algebra-patterns-structure?chapter=polynomial-rings-factorization) twice. The ideal

$(x,y)$

is not principal. If $(x,y)=(d)$, then $d$ divides both $x$ and $y$. Their only
common divisors are units, so $(d)$ would be the whole ring. But every element
of $(x,y)$ has zero constant term, so $1\\notin(x,y)$. Contradiction.

Thus UFD does not imply PID. It also demonstrates why $\\gcd(x,y)=1$ need not
produce a Bézout identity.

### A domain without unique factorization

**Worked example 15.3 (Two irreducible factorizations of six).**

In $\\mathbb{Z}[\\sqrt{-5}]$, norm

$N(a+b \\sqrt{-5})=a^2+5b^2$

is multiplicative, and the only units have norm one. There are two
factorizations

$6=2 \\times 3=(1+\\sqrt{-5})(1-\\sqrt{-5})$.

The four displayed factors are irreducible. A proper factor of $2$ would need
norm two, but $a^2+5b^2=2$ has no integer solution. A proper factor of $3$
would need norm three, also impossible. A proper factor of an element of norm
six would require a factor of norm two or three, again impossible. The factors
across the two decompositions are not associates because their norms differ
or their forms cannot differ by $\\pm 1$. Unique factorization fails.

## 11. Common errors

- Divisibility is relative to the ambient domain.
- Gcds are unique up to units, not literal equality unless normalized.
- Irreducible and prime are different definitions; PID or UFD hypotheses make
  them coincide.
- A gcd need not be a linear combination outside a Bézout domain such as a PID.
- The Euclidean function is part of the data and need not be absolute value or
  degree.
- Euclidean division needs a strictly smaller remainder, not merely some
  decomposition $a=bq+r$.
- PID means every ideal is principal, not merely every two-generated ideal in
  a statement where larger ideals exist.
- UFD guarantees factorization uniqueness only up to order and associates.
- $ED \\Longrightarrow  PID \\Longrightarrow  UFD$ cannot be read backward.

## 12. Chapter summary and retrieval prompts

Divisibility reverses containment of principal ideals. Associates differ by a
unit; primes are irreducible, while the converse needs structural hypotheses.
Euclidean descent produces gcds and proves every ideal principal. In a PID,
Bézout identities make irreducibles prime and ascending-chain stabilization
guarantees factorization terminates, yielding a UFD. Counterexamples separate
gcd existence, Bézout representation, principality, and uniqueness.

Retrieve:

1. How does $a|b$ translate into principal-ideal containment?
2. Why does prime imply irreducible?
3. What does a gcd generate in a PID?
4. Where does minimal Euclidean value prove an ideal principal?
5. Why does a PID have no infinite ascending ideal chain?
6. How does primality yield uniqueness of factorization?
7. Which example separates UFD from PID?

## Exercises with full solutions

### ALG-CH14-E001 — Exercise 1: Associates

Prove nonzero $a,b$ in a domain are associates iff they divide each other.

<details>
<summary>Hint 1</summary>

Write a=rb and b=sa.

</details>

<details>
<summary>Hint 2</summary>

Cancel nonzero a to prove the multiplier is a unit.

</details>

#### ALG-CH14-E001 — Solution

<details>
<summary>Solution</summary>


Associates divide each other using a unit and its inverse. If
$b=ac$ and $a=bd$, then $a=acd$; cancel nonzero $a$ to get $cd=1$. Thus $c$
is a unit and $b=ac$ is an associate of $a$.



</details>

### ALG-CH14-E002 — Exercise 2: Principal ideals and divisibility

Prove $a|b$ iff $(b) \\subseteq(a)$.

<details>
<summary>Hint 1</summary>

If b=ac, every multiple of b is a multiple of a.

</details>

<details>
<summary>Hint 2</summary>

For the converse apply containment to b itself.

</details>

#### ALG-CH14-E002 — Solution

<details>
<summary>Solution</summary>


If $b=ac$, every multiple $rb=rac$ is a multiple of $a$, so
$(b) \\subseteq(a)$. Conversely, containment puts $b \\in (a)$, so $b=ac$ for some
$c$, which is exactly $a|b$.



</details>

### ALG-CH14-E003 — Exercise 3: Prime implies irreducible

Give the cancellation proof in a domain.

<details>
<summary>Hint 1</summary>

Use primality on p=ab.

</details>

<details>
<summary>Hint 2</summary>

If p divides one factor, cancel p and prove the other is a unit.

</details>

#### ALG-CH14-E003 — Solution

<details>
<summary>Solution</summary>


If prime $p=ab$, then $p|ab$, so $p|a$ or $p|b$. If $a=pc$,
substitution gives $p=pcb$; cancelling nonzero $p$ yields $1=cb$, so $b$ is a
unit. The other case is symmetric. Thus every factorization has a unit factor.



</details>

### ALG-CH14-E004 — Exercise 4: Gcd uniqueness

Prove any two gcds of $a,b$ are associates.

<details>
<summary>Hint 1</summary>

Each gcd divides the other.

</details>

<details>
<summary>Hint 2</summary>

Mutual divisibility gives association, with the zero case interpreted separately.

</details>

#### ALG-CH14-E004 — Solution

<details>
<summary>Solution</summary>


If $d,d'$ both satisfy the universal common-divisor property,
then $d|d'$ because $d$ is a common divisor, and $d'|d$ for the same reason.
Mutual divisibility in a domain makes them associates.



</details>

### ALG-CH14-E005 — Exercise 5: Ideal sum and gcd

In a PID, prove a generator of $(a)+(b)$ is a gcd of $a,b$.

<details>
<summary>Hint 1</summary>

A generator d divides a and b.

</details>

<details>
<summary>Hint 2</summary>

Every common divisor divides each linear combination and hence d.

</details>

#### ALG-CH14-E005 — Solution

<details>
<summary>Solution</summary>


If $(a)+(b)=(d)$, then $a,b \\in (d)$, so $d$ divides both. If $c$
divides both, $(a),(b) \\subseteq(c)$, hence their sum $(d) \\subseteq(c)$. Reverse
principal-ideal containment gives $c|d$. Thus $d$ is a gcd.



</details>

### ALG-CH14-E006 — Exercise 6: Integer Euclidean algorithm

Find $\\gcd(252,198)$ and a Bézout identity.

<details>
<summary>Hint 1</summary>

Run successive Euclidean divisions.

</details>

<details>
<summary>Hint 2</summary>

Substitute the remainder identities backwards for Bézout coefficients.

</details>

#### ALG-CH14-E006 — Solution

<details>
<summary>Solution</summary>


Divisions give remainders $54,36,18,0$, so the gcd is 18.
Back-substitution gives $18=4(252)-5(198)$. Multiplying out verifies
$1008-990=18$.



</details>

### ALG-CH14-E007 — Exercise 7: Euclidean ideals

Why must the least-$\\delta$ element $d$ of a nonzero ideal divide every ideal
element?

<details>
<summary>Hint 1</summary>

Divide an arbitrary ideal element by d.

</details>

<details>
<summary>Hint 2</summary>

A nonzero remainder stays in the ideal and has smaller Euclidean value.

</details>

#### ALG-CH14-E007 — Solution

<details>
<summary>Solution</summary>


Divide $a=dq+r$. The remainder $r=a-dq$ stays in the ideal. If
nonzero, it has smaller Euclidean value than $d$, contradicting minimality.
Thus $r=0$ and $d|a$.



</details>

### ALG-CH14-E008 — Exercise 8: Polynomial Euclidean function

Explain why degree makes $F[x]$ Euclidean but does not generally make $R[x]$
Euclidean for a nonfield domain $R$.

<details>
<summary>Hint 1</summary>

Leading-term cancellation needs an invertible leading coefficient.

</details>

<details>
<summary>Hint 2</summary>

That inverse is available over a field and may fail in a nonfield domain.

</details>

#### ALG-CH14-E008 — Solution

<details>
<summary>Solution</summary>


Over $F$, the divisor's leading coefficient is invertible, so a
multiple cancels the dividend's leading term and lowers degree. Over $\\mathbb{Z}[x]$,
dividing $x$ by constant $2$ would require quotient coefficient $1/2$; no
remainder can have degree below zero. The division property fails.



</details>

### ALG-CH14-E009 — Exercise 9: A polynomial gcd

Over $\\mathbb{Q}[x]$, find $\\gcd(x^4-1,x^3-1)$ and a Bézout identity.

<details>
<summary>Hint 1</summary>

Subtract x(x³−1) from x⁴−1.

</details>

<details>
<summary>Hint 2</summary>

The remainder x−1 divides both polynomials and supplies a Bézout identity.

</details>

#### ALG-CH14-E009 — Solution

<details>
<summary>Solution</summary>


Division gives
$x^4-1=x(x^3-1)+(x-1)$. Both inputs are divisible by $x-1$, so the monic gcd
is $x-1$, and the displayed equation rearranges to
$x-1=(x^4-1)-x(x^3-1)$.



</details>

### ALG-CH14-E010 — Exercise 10: Gaussian division

Divide $7+5i$ by $3+2i$ with smaller-norm remainder.

<details>
<summary>Hint 1</summary>

Compute the exact complex quotient.

</details>

<details>
<summary>Hint 2</summary>

Round its real and imaginary parts to integers, then verify the remainder norm.

</details>

#### ALG-CH14-E010 — Solution

<details>
<summary>Solution</summary>


Choosing quotient $2$ gives
$7+5i=(3+2i)2+(1+i)$. The remainder norm is $2$, strictly below divisor norm
$13$, so this is valid Euclidean division.



</details>

### ALG-CH14-E011 — Exercise 11: Bézout in a PID

If $\\gcd(a,b)=1$ in a PID, prove there are $x,y$ with $ax+by=1$.

<details>
<summary>Hint 1</summary>

Generate the ideal (a)+(b).

</details>

<details>
<summary>Hint 2</summary>

Its generator is a unit when the gcd is one.

</details>

#### ALG-CH14-E011 — Solution

<details>
<summary>Solution</summary>


A gcd generates $(a)+(b)$. Unit gcd means this ideal is $(1)=R$.
Thus $1$ belongs to the ideal sum and by definition has form $ax+by$.



</details>

### ALG-CH14-E012 — Exercise 12: Irreducible becomes prime

Let irreducible $p$ in a PID divide $ab$ but not $a$. Prove $p|b$.

<details>
<summary>Hint 1</summary>

The gcd of irreducible p and a is one if p does not divide a.

</details>

<details>
<summary>Hint 2</summary>

Multiply their Bézout identity by b.

</details>

#### ALG-CH14-E012 — Solution

<details>
<summary>Solution</summary>


A gcd of $p,a$ divides irreducible $p$; it cannot be associate to
$p$ because $p$ does not divide $a$, so it is a unit. Write $xp+ya=1$ and
multiply by $b$. Both $xpb$ and $yab$ are divisible by $p$, hence their sum
$b$ is divisible by $p$.



</details>

### ALG-CH14-E013 — Exercise 13: Ascending chains in a PID

Prove every ascending chain $I_1 \\subseteq I_2 \\subseteq...$ stabilizes.

<details>
<summary>Hint 1</summary>

Take the union of the ascending chain.

</details>

<details>
<summary>Hint 2</summary>

Its principal generator lies in one chain member, which then contains the union.

</details>

#### ALG-CH14-E013 — Solution

<details>
<summary>Solution</summary>


The union is an ideal because any two members lie together in a
later chain term. Write the union as $(d)$. Its generator belongs to some
$I_N$, so the whole union $(d)$ lies in $I_N$; the reverse containment is
automatic. Hence $I_N$ equals the union and every later term equals $I_N$.



</details>

### ALG-CH14-E014 — Exercise 14: Factorization termination

Explain why repeatedly choosing a nonunit factor would contradict Exercise 13.

<details>
<summary>Hint 1</summary>

A proper nonunit factor yields a strictly larger principal ideal.

</details>

<details>
<summary>Hint 2</summary>

An endless splitting sequence would contradict ascending-chain stabilization.

</details>

#### ALG-CH14-E014 — Solution

<details>
<summary>Solution</summary>


If $a_i=a_{i+1}b_{i+1}$ with both factors nonunits, then
$(a_i)\\subsetneq(a_{i+1})$; equality would make $b_{i+1}$ a unit after
cancellation. Infinite failure to reach irreducibles creates an infinite
strictly ascending principal-ideal chain, impossible in a PID.



</details>

### ALG-CH14-E015 — Exercise 15: UFD gcd by exponents

Find gcd and lcm of $2^4 3^2 5$ and $2^2 3^5 7$ in $\\mathbb{Z}$.

<details>
<summary>Hint 1</summary>

Compare prime exponents.

</details>

<details>
<summary>Hint 2</summary>

Take minima for the gcd and maxima for the lcm.

</details>

#### ALG-CH14-E015 — Solution

<details>
<summary>Solution</summary>


Minimum exponents give $\\gcd=2^2 3^2=36$. Maximum exponents give
$\\operatorname{lcm}=2^4 3^5 5 7$. Signs are unit ambiguity; the positive normalizations are
chosen.



</details>

### ALG-CH14-E016 — Exercise 16: A nonprincipal ideal

Prove $(x,y)$ is not principal in $F[x,y]$.

<details>
<summary>Hint 1</summary>

Any proposed generator divides both x and y.

</details>

<details>
<summary>Hint 2</summary>

It must be a unit, but evaluation at the origin proves the ideal is proper.

</details>

#### ALG-CH14-E016 — Solution

<details>
<summary>Solution</summary>


A generator $d$ would divide both $x$ and $y$. Since these
irreducibles are nonassociate, their only common divisors are units. Then
$(d)$ would be the whole ring. But every $Ax+By$ has zero constant term, so
one is not in $(x,y)$. Contradiction.



</details>

### ALG-CH14-E017 — Exercise 17: Gcd without Bézout

Show $\\gcd(x,y)=1$ in $F[x,y]$ but $Ax+By=1$ has no polynomial solution.

<details>
<summary>Hint 1</summary>

The variables have no common nonunit factor.

</details>

<details>
<summary>Hint 2</summary>

Evaluate a proposed Bézout identity at the origin.

</details>

#### ALG-CH14-E017 — Solution

<details>
<summary>Solution</summary>


No nonunit irreducible divides both distinct variables, so their
gcd is one up to units. Yet the left side of any proposed identity has zero
constant term, while the right side has constant term one. Thus gcd existence
does not imply a Bézout identity outside a PID or Bézout domain.



</details>

### ALG-CH14-E018 — Exercise 18: Failure of unique factorization

Verify the two factorizations of six in $\\mathbb{Z}[\\sqrt{-5}]$ and explain why the
factors are irreducible.

<details>
<summary>Hint 1</summary>

Use the norm a²+5b².

</details>

<details>
<summary>Hint 2</summary>

The missing norms two and three rule out proper factorizations of the exhibited factors.

</details>

#### ALG-CH14-E018 — Solution

<details>
<summary>Solution</summary>


Multiplication gives
$(1+\\sqrt{-5})(1-\\sqrt{-5})=1-(-5)=6$. Norms of $2,3,1\\pm \\sqrt{-5}$ are
$4,9,6$. Any proper factorization would require a nonunit factor of norm two
or three, but $a^2+5b^2=2$ and $=3$ have no integer solutions. Hence all four
are irreducible, and differing norms show cross-pairs are not associates.



</details>

### ALG-CH14-E019 — Exercise 19: Prime ideals from elements

In a domain, prove nonzero $p$ is a prime element iff $(p)$ is a prime ideal.

<details>
<summary>Hint 1</summary>

Translate p|ab into ab∈(p).

</details>

<details>
<summary>Hint 2</summary>

Check the nonunit condition so the ideal is proper.

</details>

#### ALG-CH14-E019 — Solution

<details>
<summary>Solution</summary>


$ab \\in (p)$ means exactly $p|ab$; $a \\in (p)$ means $p|a$, and
similarly for $b$. The two prime conditions are the same statement. Nonzero
and nonunit make $(p)$ a nonzero proper ideal.



</details>

### ALG-CH14-E020 — Exercise 20: Implication audit

Place $\\mathbb{Z}$, $F[x]$, $F[x,y]$, and $\\mathbb{Z}[\\sqrt{-5}]$ at the strongest justified
level among Euclidean, PID, UFD, and domain.

<details>
<summary>Hint 1</summary>

Use degree or the Gaussian norm for Euclidean examples.

</details>

<details>
<summary>Hint 2</summary>

Gauss's theorem and (x,y) separate UFD from PID; the two factorizations of six separate domain from UFD.

</details>

#### ALG-CH14-E020 — Solution

<details>
<summary>Solution</summary>


$\\mathbb{Z}$ is Euclidean by absolute value, and $F[x]$ is Euclidean by
degree. Both are therefore PIDs and UFDs. $F[x,y]$ is a UFD by Gauss but not a
PID because $(x,y)$ is nonprincipal. $\\mathbb{Z}[\\sqrt{-5}]$ is a domain but not a UFD by
the two inequivalent irreducible factorizations of six. No reverse implication
is inferred.


</details>

## Sources

Thomas W. Judson's [Factorization in Integral Domains](https://twjudson.github.io/aata-files/aata-html/domains-section-factorization-domains.html) provides primary comparison reading for Euclidean domains, principal ideals and factorization. The explicitly imported non-Euclidean PID example retains its existing Conrad locator above.

## Summary

Euclidean division gives Bézout certificates and principal ideals. In a PID, irreducibles are prime and ascending-chain stabilization gives factorization existence, yielding unique factorization. Associates, gcds and ideal containment must be interpreted in the stated domain; none of the implication arrows can be reversed without proof.
`;export{e as default};