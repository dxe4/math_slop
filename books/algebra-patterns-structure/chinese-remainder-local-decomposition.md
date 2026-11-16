
# Chinese Remainders and Local Decomposition

Congruence conditions can describe one object through several independent
views. Independence is not automatic: it is measured by comaximal ideals. The
Chinese remainder theorem says that pairwise comaximal constraints can be
solved simultaneously and that the resulting quotient ring is a product of
the separate quotient rings.

The proof does more than count solutions. It identifies the kernel, constructs
representatives, and produces orthogonal idempotents that select components.
For integer and polynomial quotients, prime-power factors then yield local
rings—rings with one maximal ideal. “Local decomposition” here refers to these
proved comaximal factorizations, not to an unsupported decomposition theorem
for arbitrary rings.

The prerequisites are [ideals and quotient isomorphisms](ring-homomorphisms-ideals-quotients.md)
and [divisibility and Bézout identities](divisibility-euclidean-pid-ufd.md).

## 1. Comaximal ideals

**Definition 18.1 (Comaximal ideals).**

Let $R$ be a commutative ring with identity. Ideals $I,J$ are **comaximal** if

$I+J=R$.

Equivalently, there exist $a \in I,b \in J$ with

$a+b=1$.

Indeed, $I+J=R$ exactly when one belongs to the sum. In $\mathbb{Z}$, ideals $(m),(n)$
are comaximal exactly when $\gcd(m,n)=1$, by Bézout.

In $F[x]$, $(f)$ and $(g)$ are comaximal exactly when $\gcd(f,g)=1$. A
polynomial Bézout identity $af+bg=1$ is the certificate.

Comaximal does not mean disjoint. Every two ideals share zero, and their
intersection can be large. It means their sum can reconstruct the identity.

## 2. The two-ideal Chinese remainder map

**Theorem 18.1 (Two-ideal Chinese remainder theorem).**

Define

$\Phi:R\to R/I \times R/J$,

$\Phi(r)=(r+I,r+J)$.

This is a ring homomorphism. Its kernel is

$\ker \Phi=I \cap J$,

because both coordinates vanish exactly when $r$ lies in both ideals.

If $I+J=R$, choose $a \in I,b \in J$ with $a+b=1$. Given target residues

$x+I$ and $y+J$, set

$z=xb+ya$.

Modulo $I$, $a=0$ and $b=1-a=1$, so $z=x$. Modulo $J$, $b=0$ and $a=1$, so
$z=y$. Thus $\Phi$ is onto.

The first isomorphism theorem gives the **Chinese remainder theorem**:

$R/(I \cap J) \cong R/I \times R/J$

when $I,J$ are comaximal.

The formula $z=xb+ya$ is a constructive inverse on residue pairs. Different
choices of Bézout coefficients produce representatives of the same class
modulo $I \cap J$.

## 3. Intersection equals product under comaximality

The product ideal $IJ$ consists of finite sums of terms $uv$ with
$u \in I,v \in J$. Always

$IJ \subseteq I \cap J$.

If $I+J=R$, choose $a+b=1$ as above. For $x \in I \cap J$,

$x=x(a+b)=xa+xb$.

Here $xa \in IJ$ because $x \in J,a \in I$, and $xb \in IJ$ because
$x \in I,b \in J$. Thus the reverse containment holds:

$I \cap J=IJ$.

Consequently the CRT can be written

$R/IJ \cong R/I \times R/J$

for comaximal ideals. Without comaximality, intersection and product can
differ: in $\mathbb{Z}$, $(4)\cap(6)=(12)$ while $(4)(6)=(24)$.

## 4. Ordinary integer CRT

For coprime positive integers $m,n$,

$\mathbb{Z}/(mn) \cong \mathbb{Z}/(m) \times \mathbb{Z}/(n)$.

Given congruences

$x \equiv r \bmod m$, $x \equiv s \bmod n$,

choose $a,b$ with $am+bn=1$. The selectors

$e_m=bn$, $e_n=am$

satisfy

$e_m=1 \bmod m$, $e_m=0 \bmod n$,

$e_n=0 \bmod m$, $e_n=1 \bmod n$.

Then

$x=r e_m+s e_n \bmod mn$.

### Worked congruences

**Worked example 18.1 (Construct and check two congruence coordinates).**

Solve $x=2 \bmod 3$ and $x=3 \bmod 5$. Since

$2(3)+(-1)(5)=1$,

selectors can be chosen as $-5$ for the mod-three component and $6$ for the
mod-five component. Thus

$x=2(-5)+3(6)=8 \bmod 15$.

Checking both residues is the shortest audit.

## 5. What fails without coprimality

For arbitrary positive $m,n$, the congruences

$x=r \bmod m$, $x=s \bmod n$

have a solution exactly when

$r \equiv s \bmod \gcd(m,n)$.

Necessity follows because any difference $r-s$ equals a combination of $m$
and $n$. For sufficiency, write $d=\gcd(m,n)$, divide the difference by $d$,
and use a Bézout combination of $m/d,n/d$ to solve the resulting linear
congruence.

When solvable, the solution is unique modulo $\operatorname{lcm}(m,n)$, the intersection
modulus. The map

$\mathbb{Z}/(\operatorname{lcm}(m,n))\to \mathbb{Z}/(m) \times \mathbb{Z}/(n)$

is injective but reaches only compatible pairs.

**Worked example 18.2 (Compute the compatibility image for two noncoprime moduli).**

For $m=4,n=6$, the image consists of pairs with equal parity. It has 12
elements, while the full product has 24. Surjectivity, not the kernel
calculation, is the failed CRT obligation. For an explicit compatible pair, take $(1\bmod4,3\bmod6)$. Writing $x=1+4k$ gives $4k\equiv2\pmod6$, or $2k\equiv1\pmod3$, so $k\equiv2\pmod3$ and $x\equiv9\pmod{12}$. There are two choices modulo four and three modulo six for each fixed parity, giving $2\cdot2\cdot3=12$ compatible pairs. Opposite parities cannot come from a single integer.

## 6. Pairwise comaximal families

Let $I_1,...,I_t$ be pairwise comaximal ideals. Then

$R/(I_1...I_t) \cong \prod_i R/I_i$.

Pairwise comaximality implies

$\bigcap_i I_i=\prod_i I_i$.

One proves this by induction. The product $I_1...I_{t-1}$ is comaximal with
$I_t$: multiply equations $a_j+b_j=1$, where $a_j \in I_j,b_j \in I_t$, and
expand. The product of all $a_j$ lies in $I_1...I_{t-1}$, while every other
term contains some $b_j$ and lies in $I_t$.

The multi-coordinate map has the intersection as kernel and is onto by
iterating the two-ideal construction.

## 7. Orthogonal idempotent selectors

For pairwise comaximal ideals, CRT produces elements $e_1,...,e_t$ satisfying

$e_i=1 \bmod I_i$,

$e_i=0 \bmod I_j$ for $j\ne i$.

Modulo the product/intersection ideal, they obey

$e_i^2=e_i$, $e_i e_j=0$ for $i\ne j$, and $\sum_i e_i=1$.

They are **orthogonal idempotents**. A tuple $(r_1,...,r_t)$ reconstructs as

$\sum_i r_i e_i$.

### Selectors modulo 60

**Worked example 18.3 (Three idempotent coordinate selectors).**

The factors $3,4,5$ are pairwise coprime. Selectors can be chosen

$e_3=40$, $e_4=45$, $e_5=36$.

For example, $40=1 \bmod 3$ and is zero modulo four and five. Their sum is
$121=1 \bmod 60$, and pairwise products vanish modulo 60.

These idempotents are algebraic coordinate switches, not arbitrary numerical
tricks.

## 8. Local rings

**Definition 18.2 (Local ring).**

A nonzero commutative ring $R$ is **local** if it has a unique maximal ideal
$m$.
Three useful conditions are equivalent:

1. $R$ has a unique maximal ideal;
2. the nonunits form an ideal;
3. for every $a \in R$, at least one of $a$ and $1-a$ is a unit.

If $m$ is the unique maximal ideal, every nonunit lies in some maximal ideal
and hence in $m$; conversely no element of $m$ is a unit. Here we import the
standard maximal-ideal existence theorem for nonzero commutative unital rings:
every proper ideal, in particular the principal ideal of a nonunit, is contained
in a maximal ideal. Its proof uses Zorn's lemma and is not reconstructed in this
chapter. Thus nonunits equal
$m$ and form an ideal.

If nonunits form an ideal and both $a,1-a$ were nonunits, their sum one would
be a nonunit, impossible. Conversely, suppose the third condition holds. The
sum of two nonunits cannot be a unit: if $a+b=u$, then
$u^{-1}a+u^{-1}b=1$; the condition would make one summand a unit, hence $a$
or $b$ a unit. Nonunits are also closed under multiplication by arbitrary
elements. They form a proper ideal containing every proper ideal and are
therefore the unique maximal ideal.

In a local ring, idempotents are only zero and one. If $e^2=e$, then
$e(1-e)=0$. One of $e,1-e$ is a unit. If $e$ is a unit, multiply $e^2=e$ by
$e^{-1}$ to get $e=1$; if $1-e$ is a unit, multiply the zero product to get
$e=0$.

## 9. Prime-power residue rings are local

For prime $p$ and $k\ge 1$, $\mathbb{Z}/p^k\mathbb{Z}$ is local. A residue is a unit exactly when
it is not divisible by $p$. The nonunits form the ideal

$p(\mathbb{Z}/p^k\mathbb{Z})$,

which is the unique maximal ideal. It is nilpotent because its $k$th power is
zero.

If

$n=p_1^{a_1}...p_t^{a_t}$

is the prime factorization, CRT gives

$\mathbb{Z}/n\mathbb{Z} \cong \prod_i \mathbb{Z}/p_i^{a_i}\mathbb{Z}$.

Each factor is local. This is the canonical prime-power decomposition of a
residue ring. It shows that $\mathbb{Z}/n\mathbb{Z}$ is local exactly when $n$ is a prime power
(apart from the separately handled zero ring convention).

It also classifies idempotents: each local coordinate is zero or one, so
$\mathbb{Z}/n\mathbb{Z}$ has $2^t$ idempotents when $n$ has $t$ distinct prime factors.

## 10. Polynomial primary factors

Let $F$ be a field and $f\in F[x]$ be nonconstant. Write

$f=u\prod_{i=1}^t p_i^{a_i}$,

where $u\in F^\times$, the $p_i$ are distinct monic irreducibles, and
$a_i\ge1$. Since $u$ is a unit, $(f)=(\prod_i p_i^{a_i})$. The ideals $(p_i^{a_i})$ are pairwise
comaximal, so

$F[x]/(f) \cong \prod_i F[x]/(p_i^{a_i})$.

Each factor is local. A class represented by $g$ is a unit exactly when
$\gcd(g,p_i)=1$; Bézout constructs its inverse. The nonunits are exactly the
multiples of $p_i$, forming the unique maximal ideal

$(p_i)/(p_i^{a_i})$.

For instance,

$\mathbb{Q}[x]/((x-1)^2(x+1))$

decomposes as

$\mathbb{Q}[x]/((x-1)^2) \times \mathbb{Q}[x]/(x+1)$.

The first factor is local with a nonzero nilpotent class $x-1$; the second is
the field $\mathbb{Q}$ by evaluation at $-1$.

## 11. Common errors

- CRT surjectivity needs comaximality; the kernel formula alone always holds.
- $I \cap J=IJ$ is not true for arbitrary ideals.
- Pairwise comaximal is stronger than merely having total sum $R$ when more
  than two ideals are involved.
- A simultaneous integer solution is unique modulo the lcm, not always the
  product.
- Idempotent selectors are equations in the quotient ring, so every modulus
  must be stated.
- A product of local rings is generally not local when it has two nonzero
  factors; it has nontrivial idempotents.
- Prime-power quotients can have nilpotents and need not be fields.
- Not every commutative ring has the finite local decomposition proved for
  factored integer and polynomial quotients.

## 12. Chapter summary and retrieval prompts

Comaximal ideals sum to the whole ring and support simultaneous residue
reconstruction. The CRT map has kernel the intersection and is onto precisely
under the proved compatibility; comaximal intersections equal products.
Finite families produce orthogonal idempotent selectors. Factoring an integer
or polynomial modulus into coprime prime powers decomposes its quotient into
local factors with unique maximal ideals.

Retrieve:

1. What equation certifies comaximality?
2. What are the kernel and surjectivity obligations of the CRT map?
3. Why does comaximality make intersection equal product?
4. What compatibility replaces coprimality for integer congruences?
5. How do orthogonal idempotents reconstruct coordinates?
6. Which three conditions characterize a local ring?
7. Why is a prime-power residue or polynomial quotient local?

A decomposition can retain nilpotent information in each local factor. Consider the integers modulo seventy-two, whose coprime prime-power factors are eight and nine. The selector nine is one modulo eight and zero modulo nine; the selector sixty-four has the reverse residues. Their sum is seventy-three, hence one in the quotient, and their product is divisible by seventy-two. These give explicit orthogonal selectors and a reconstruction formula from the two local residues.

The units are the pairs of units in the factors: four choices modulo eight and six modulo nine, giving twenty-four units. An element is nilpotent exactly when it is nilpotent in both factors. Modulo a prime power, that means its residue is divisible by the prime: a nondivisible residue is a unit and cannot be nilpotent, while a divisible one has a sufficiently high power divisible by the modulus. Consequently the nilpotents modulo seventy-two are exactly the multiples of six, giving twelve elements. The ideal they form is generated by six. Its square contains the nonzero class of thirty-six, while its cube is zero because two hundred sixteen is divisible by seventy-two. The local product decomposition therefore preserves both the two components and the thickness of their nilpotent directions; it does not replace the factors by fields or discard their prime-power exponents.

## Exercises with full solutions

### ALG-CH16-E001 — Exercise 1: Comaximality certificate

Prove ideals $I,J$ are comaximal iff $1=a+b$ for some $a \in I,b \in J$.

<details>
<summary>Hint 1</summary>

Expand the definition I+J=R.

</details>

<details>
<summary>Hint 2</summary>

If 1 lies in the sum, absorption makes every ring element lie in that sum.

</details>

#### ALG-CH16-E001 — Solution

<details>
<summary>Solution</summary>


If $I+J=R$, one belongs to the sum and has the stated form. If
such a form exists, the ideal sum contains one and therefore contains every
$r=r\cdot 1$; it is all of $R$.



</details>

### ALG-CH16-E002 — Exercise 2: Kernel of the CRT map

Find the kernel of $r\to (r+I,r+J)$ without assuming comaximality.

<details>
<summary>Hint 1</summary>

Both output classes vanish exactly when r belongs to both ideals.

</details>

<details>
<summary>Hint 2</summary>

No comaximality hypothesis is needed for this kernel computation.

</details>

#### ALG-CH16-E002 — Solution

<details>
<summary>Solution</summary>


The pair is zero exactly when $r+I=I$ and $r+J=J$, equivalently
$r \in I$ and $r \in J$. Thus the kernel is $I \cap J$ for all ideals.



</details>

### ALG-CH16-E003 — Exercise 3: Constructing a preimage

If $a \in I,b \in J,a+b=1$, prove $z=xb+ya$ maps to $(x+I,y+J)$.

<details>
<summary>Hint 1</summary>

Reduce z separately modulo I and J.

</details>

<details>
<summary>Hint 2</summary>

Modulo I, a vanishes and b becomes one; modulo J their roles reverse.

</details>

#### ALG-CH16-E003 — Solution

<details>
<summary>Solution</summary>


Modulo $I$, $a=0$ and $b=1-a=1$, so $z=x$. Modulo $J$, $b=0$
and $a=1-b=1$, so $z=y$. Hence the two desired cosets are reached.



</details>

### ALG-CH16-E004 — Exercise 4: Intersection versus product

Prove $I \cap J=IJ$ for comaximal ideals.

<details>
<summary>Hint 1</summary>

One inclusion follows from ideal absorption.

</details>

<details>
<summary>Hint 2</summary>

For z in the intersection, multiply z by a+b=1 and place both terms in IJ.

</details>

#### ALG-CH16-E004 — Solution

<details>
<summary>Solution</summary>


Products lie in each ideal, so $IJ \subseteq I \cap J$.
For $x$ in the intersection and $a+b=1$ with $a \in I,b \in J$, write
$x=xa+xb$. The first term uses $x \in J,a \in I$; the second uses
$x \in I,b \in J$. Both lie in $IJ$, proving reverse containment.



</details>

### ALG-CH16-E005 — Exercise 5: Two coprime congruences

Solve $x=2 \bmod 7$, $x=3 \bmod 5$.

<details>
<summary>Hint 1</summary>

Write x=2+7k and reduce modulo five.

</details>

<details>
<summary>Hint 2</summary>

Solve for k modulo five and report the resulting class modulo thirty-five.

</details>

#### ALG-CH16-E005 — Solution

<details>
<summary>Solution</summary>


Testing the mod-seven sequence $2,9,16,23,...$, the first class
equal to three modulo five is 23. Thus $x=23 \bmod 35$. Check:
$23=2 \bmod 7$ and $23=3 \bmod 5$.



</details>

### ALG-CH16-E006 — Exercise 6: Constructive integer CRT

Use Bézout coefficients to solve $x=4 \bmod 9$, $x=5 \bmod 7$.

<details>
<summary>Hint 1</summary>

Find integers u,v with 9u+7v=1.

</details>

<details>
<summary>Hint 2</summary>

Use selector multiples or substitute x=4+9k into the second congruence.

</details>

#### ALG-CH16-E006 — Solution

<details>
<summary>Solution</summary>


$4(7)-3(9)=1$. A selector for the mod-nine coordinate is
$4(7)=28$, and for the mod-seven coordinate is $-3(9)=-27$. Thus
$x=4(28)+5(-27)=-23=40 \bmod 63$. Indeed $40=4 \bmod 9$ and $40=5 \bmod 7$.



</details>

### ALG-CH16-E007 — Exercise 7: Noncoprime compatibility

Decide whether $x=1 \bmod 6$, $x=4 \bmod 9$ is solvable.

<details>
<summary>Hint 1</summary>

Reduce both requested residues modulo gcd(6,9)=3.

</details>

<details>
<summary>Hint 2</summary>

If they agree, solve a one-parameter substitution; disagreement would make the system impossible.

</details>

#### ALG-CH16-E007 — Solution

<details>
<summary>Solution</summary>


The gcd is three. Compatibility requires $1=4 \bmod 3$, which
holds. Testing $1,7,13,...$ modulo nine gives $13=4 \bmod 9$, so
$x=13 \bmod \operatorname{lcm}(6,9)=18$.



</details>

### ALG-CH16-E008 — Exercise 8: Image for mod four and mod six

Describe the image of $\mathbb{Z}/12\mathbb{Z}\to \mathbb{Z}/4\mathbb{Z} \times \mathbb{Z}/6\mathbb{Z}$.

<details>
<summary>Hint 1</summary>

Every integer gives the same parity in both coordinates.

</details>

<details>
<summary>Hint 2</summary>

Conversely, matching parity is the compatibility condition for moduli four and six.

</details>

#### ALG-CH16-E008 — Solution

<details>
<summary>Solution</summary>


A pair $(a,b)$ is reached exactly when $a=b \bmod \gcd(4,6)=2$, so
the coordinates have equal parity. There are $4 \times 6/2=12$ compatible
pairs, matching the injective source size. The full product has 24 elements,
so the map is not onto.



</details>

### ALG-CH16-E009 — Exercise 9: Three-ideal CRT

Explain why pairwise comaximal $I,J,K$ satisfy
$I \cap J \cap K=IJK$.

<details>
<summary>Hint 1</summary>

First combine two ideals using the two-ideal result.

</details>

<details>
<summary>Hint 2</summary>

Show their product is comaximal with the third by multiplying two certificates for 1.

</details>

#### ALG-CH16-E009 — Solution

<details>
<summary>Solution</summary>


First $I \cap J=IJ$. Pairwise comaximality implies
$IJ+K=R$: multiply certificates $i+k_1=1$ and $j+k_2=1$; the product has term
$ij \in IJ$ and all remaining terms in $K$. Thus
$(I \cap J) \cap K=IJ \cap K=IJK$.



</details>

### ALG-CH16-E010 — Exercise 10: Decompose $\mathbb{Z}/60\mathbb{Z}$

Give its prime-power CRT decomposition.

<details>
<summary>Hint 1</summary>

Factor sixty into pairwise coprime prime powers.

</details>

<details>
<summary>Hint 2</summary>

Apply the ring CRT to moduli four, three and five.

</details>

#### ALG-CH16-E010 — Solution

<details>
<summary>Solution</summary>


$60=3 \times 4 \times 5$ with pairwise coprime factors. Therefore
$\mathbb{Z}/60\mathbb{Z} \cong \mathbb{Z}/3\mathbb{Z} \times \mathbb{Z}/4\mathbb{Z} \times \mathbb{Z}/5\mathbb{Z}$. The sizes multiply to 60.



</details>

### ALG-CH16-E011 — Exercise 11: Selectors modulo 60

Verify $40,45,36$ are selectors for moduli $3,4,5$.

<details>
<summary>Hint 1</summary>

Reduce each selector modulo each of 3,4,5.

</details>

<details>
<summary>Hint 2</summary>

The desired residue pattern has one coordinate one and the other two zero.

</details>

#### ALG-CH16-E011 — Solution

<details>
<summary>Solution</summary>


$40$ is one mod three and zero mod four and five; $45$ is one
mod four and zero mod three and five; $36$ is one mod five and zero mod three
and four. Their sum is 121, one mod 60, and pairwise products are divisible by
60.



</details>

### ALG-CH16-E012 — Exercise 12: Idempotents modulo 72

Find all idempotents in $\mathbb{Z}/72\mathbb{Z}$.

<details>
<summary>Hint 1</summary>

Use the decomposition for 72=8·9.

</details>

<details>
<summary>Hint 2</summary>

Each prime-power local factor has only idempotents zero and one; reconstruct the four possible pairs.

</details>

#### ALG-CH16-E012 — Solution

<details>
<summary>Solution</summary>


$72=8 \times 9$, so CRT gives $\mathbb{Z}/8\mathbb{Z} \times \mathbb{Z}/9\mathbb{Z}$. Each local
factor has idempotents zero and one, giving four coordinate choices. Their
representatives are $0$, $1$, $9$ (one mod eight, zero mod nine), and $64$
(zero mod eight, one mod nine). Squaring verifies each modulo 72.



</details>

### ALG-CH16-E013 — Exercise 13: Local nonunits

Assuming every $a$ or $1-a$ is a unit, prove the nonunits are closed under
addition.

<details>
<summary>Hint 1</summary>

Assume a,b are nonunits but a+b is a unit u.

</details>

<details>
<summary>Hint 2</summary>

The nonunits au^{-1} and bu^{-1} add to one, contradicting the stated unit alternative.

</details>

#### ALG-CH16-E013 — Solution

<details>
<summary>Solution</summary>


If nonunits $a,b$ had unit sum $u=a+b$, then
$u^{-1}a+u^{-1}b=1$. Applying the hypothesis to $u^{-1}a$, one of
$u^{-1}a$ and $1-u^{-1}a=u^{-1}b$ is a unit. Multiplying by unit $u$ would
make $a$ or $b$ a unit, contradiction. Thus their sum is a nonunit; additive
inverses are also nonunits.



</details>

### ALG-CH16-E014 — Exercise 14: Prime-power locality

Prove $\mathbb{Z}/p^k\mathbb{Z}$ has unique maximal ideal generated by $[p]$.

<details>
<summary>Hint 1</summary>

A residue is a unit exactly when it is not divisible by p.

</details>

<details>
<summary>Hint 2</summary>

The nonunits form the ideal generated by [p], and every proper ideal is contained there.

</details>

#### ALG-CH16-E014 — Solution

<details>
<summary>Solution</summary>


A class is a unit exactly when its representative is relatively
prime to $p^k$, equivalently not divisible by $p$. Thus the nonunits are
exactly multiples of $[p]$, an ideal. By the local criterion this is the
unique maximal ideal.



</details>

### ALG-CH16-E015 — Exercise 15: Idempotents in a local ring

Prove a local ring has no idempotents besides zero and one.

<details>
<summary>Hint 1</summary>

For e²=e, use e(1−e)=0.

</details>

<details>
<summary>Hint 2</summary>

In a local ring either e or 1−e is a unit, forcing the other factor to be zero.

</details>

#### ALG-CH16-E015 — Solution

<details>
<summary>Solution</summary>


For $e^2=e$, $e(1-e)=0$. At least one of $e,1-e$ is a unit. If
$e$ is a unit, multiplication by $e^{-1}$ gives $e=1$. If $1-e$ is a unit,
multiplication by its inverse gives $e=0$.



</details>

### ALG-CH16-E016 — Exercise 16: Coprime polynomial ideals

Prove $(x-1)$ and $(x+1)$ are comaximal in $\mathbb{Q}[x]$.

<details>
<summary>Hint 1</summary>

Subtract the two generators.

</details>

<details>
<summary>Hint 2</summary>

Their difference is the invertible constant two, giving a Bézout certificate.

</details>

#### ALG-CH16-E016 — Solution

<details>
<summary>Solution</summary>


Their difference is two, a unit in $\mathbb{Q}[x]$. Explicitly
$(1/2)(x+1)-(1/2)(x-1)=1$, a Bézout certificate placing one in their ideal
sum.



</details>

### ALG-CH16-E017 — Exercise 17: Split a polynomial quotient

Decompose $\mathbb{F}_{5}[x]/(x^2-1)$.

<details>
<summary>Hint 1</summary>

The two linear factors are coprime over F₅.

</details>

<details>
<summary>Hint 2</summary>

Use evaluation at 1 and −1 to identify the two field factors and the kernel.

</details>

#### ALG-CH16-E017 — Solution

<details>
<summary>Solution</summary>


$x^2-1=(x-1)(x+1)$, and the factors are coprime because their
difference two is a unit in $\mathbb{F}_{5}$. CRT gives
$\mathbb{F}_{5}[x]/(x^2-1) \cong \mathbb{F}_{5}[x]/(x-1) \times \mathbb{F}_{5}[x]/(x+1)$, which is
$\mathbb{F}_{5} \times \mathbb{F}_{5}$ by evaluation.



</details>

### ALG-CH16-E018 — Exercise 18: A polynomial local factor

For a field $F$, an irreducible $p\in F[x]$, and $k\ge1$, prove
$F[x]/(p^k)$ is local.

<details>
<summary>Hint 1</summary>

A polynomial class is a unit exactly when its representative is coprime to p.

</details>

<details>
<summary>Hint 2</summary>

Bézout constructs those inverses, so all nonunits form the unique maximal ideal generated by the class of p.

</details>

#### ALG-CH16-E018 — Solution

<details>
<summary>Solution</summary>


If $p$ does not divide $g$, then $\gcd(g,p^k)=1$; Bézout gives an
inverse for $g+(p^k)$. If $p|g$, its class lies in $(p)/(p^k)$ and cannot be a
unit because its product with anything remains divisible by $p$. Thus the
nonunits form the ideal $(p)/(p^k)$, the unique maximal ideal.



</details>

### ALG-CH16-E019 — Exercise 19: Products are not local

If nonzero rings $R,S$ are local, prove $R \times S$ is not local.

<details>
<summary>Hint 1</summary>

Use the idempotent (1,0).

</details>

<details>
<summary>Hint 2</summary>

It is neither zero nor one and therefore cannot occur in a nonzero local ring.

</details>

#### ALG-CH16-E019 — Solution

<details>
<summary>Solution</summary>


$(1,0)$ is a nontrivial idempotent: it is neither $(0,0)$ nor
$(1,1)$. Local rings have only trivial idempotents, so the product is not
local. Equivalently it has at least the distinct maximal ideals
$m_R \times S$ and $R \times m_S$.



</details>

### ALG-CH16-E020 — Exercise 20: Reconstruct from three coordinates

Find the class modulo 60 corresponding to $(2 \bmod 3,3 \bmod 4,4 \bmod 5)$.

<details>
<summary>Hint 1</summary>

Use the selectors 40,45,36 in the stated coordinate order.

</details>

<details>
<summary>Hint 2</summary>

Form 2·40+3·45+4·36 and reduce the result modulo sixty.

</details>

#### ALG-CH16-E020 — Solution

<details>
<summary>Solution</summary>


Use selectors $40,45,36$:
$x=2(40)+3(45)+4(36)=359=59 \bmod 60$. Check:
$59=2 \bmod 3$, $59=3 \bmod 4$, and $59=4 \bmod 5$.


</details>

## Sources

William Stein's author-hosted [The Chinese Remainder Theorem](https://wstein.org/books/ant/ant/ch_crt.html), especially Section 5.1, provides primary comparison reading for the integer and commutative-ring forms. The local-ring discussion explicitly retains maximal-ideal existence as an imported input.

## Summary

Comaximal ideals give a surjective residue map with intersection kernel, and their intersection equals their product. Bézout selectors reconstruct coordinates and yield orthogonal idempotents. Without coprimality, compatibility restricts the image. Local rings collect nonunits into one maximal ideal; prime-power polynomial and integer quotients provide concrete models.
