var e=`---
parent_id: book-number-theory-proof-reference
chapter_id: pythagorean-triples-sums-squares
title: "Pythagorean Triples and Sums of Squares"
level: advanced-undergraduate
estimated_minutes: 235
license: CC BY-SA 4.0
---

# Pythagorean Triples and Sums of Squares {#section-1-pythagorean-triples-and-sums-of-squares}

The equation $x^{2}+y^{2}=z^{2}$ is both a geometric curve and an arithmetic classification problem. A rational line through one known point parametrizes the circle; coprimality and parity turn that rational parametrization into the exact primitive integer triples. Gaussian integers then explain which integers are sums of two squares.

Prerequisites are gcd, valuations, congruences, and quadratic residues. Afterward you should be able to classify every Pythagorean triple, use the two-square identity, prove the sum-of-two-squares criterion, and separate ordered, signed, primitive, and scaled counting conventions.

<a id="section-5-1-primitive-triples"></a>
## 1. Primitive triples {#section-7-1-primitive-triples}

A Pythagorean triple is a positive integer solution of

$x^{2}+y^{2}=z^{2}$.

It is **primitive** when $\\gcd(x,y,z)=1$, equivalently $\\gcd(x,y)=1$. In a primitive triple exactly one leg is even. They cannot both be odd because squares are $1 \\bmod 4$, and if both were even the triple would not be primitive. The hypotenuse is odd.

<a id="section-13-2-euclid-s-parametrization"></a>
## 2. Euclid's parametrization {#section-15-2-euclid-s-parametrization}

**Theorem.** Every primitive triple, after swapping the legs so $y$ is even, has a unique form

$x=m^{2}-n^{2}$, $y=2mn$, $z=m^{2}+n^{2}$,

where $m>n>0$, $\\gcd(m,n)=1$, and $m,n$ have opposite parity.

**Proof.** From $y^{2}=(z-x)(z+x)$, both factors are even. Put $r=(z-x)/2$, $s=(z+x)/2$; then $(y/2)^{2}=rs$. One checks $\\gcd(r,s)=1$: a common divisor divides both $z$ and $x$. A product of coprime positive integers that is a square has each factor square, so $r=n^{2}$, $s=m^{2}$. Then $x=m^{2}-n^{2}$, $z=m^{2}+n^{2}$, and $y=2mn$. Coprimality and opposite parity follow from primitiveness. Reversing the calculation proves every permitted pair produces a primitive triple. Uniqueness follows from $m^{2}=(z+x)/2$, $n^{2}=(z-x)/2$.

Every nonprimitive triple is a positive multiple of a primitive one.

<a id="section-25-worked-classification"></a>
### Worked classification {#section-27-worked-classification}

For hypotenuse $65$, solve $m^{2}+n^{2}=65$. Permitted pairs include $(8,1)$ and $(7,4)$, yielding primitive triples $(63,16,65)$ and $(33,56,65)$. The pair $(6,\\sqrt{29})$ is not integral; listing integer square decompositions is essential.

<a id="section-29-3-rational-points-on-the-circle"></a>
## 3. Rational points on the circle {#section-31-3-rational-points-on-the-circle}

The unit circle has known point $(-1,0)$. A line of rational slope $t$ through it meets the circle again at

$((1-t^{2})/(1+t^{2}), 2t/(1+t^{2}))$.

Writing $t=n/m$ and clearing denominators gives Euclid's formulas. This geometric derivation motivates the parametrization; the gcd-and-parity proof above establishes its exact integer conditions.

<a id="section-37-4-the-two-square-identity"></a>
## 4. The two-square identity {#section-39-4-the-two-square-identity}

The identity

\\[(a^{2}+b^{2})(c^{2}+d^{2})=(ac-bd)^{2}+(ad+bc)^{2}\\]

shows sums of two squares are closed under multiplication. It is the norm identity in the Gaussian integers $\\mathbb{Z}[i]$, where

$N(a+bi)=a^{2}+b^{2}$, $N(\\alpha \\beta)=N(\\alpha)N(\\beta)$.

The norm supplies Euclidean division: choose the nearest lattice point in $\\mathbb{Z}[i]$ to a complex quotient; the remainder has smaller norm. Hence $\\mathbb{Z}[i]$ is a Euclidean domain and has unique factorization.

<a id="section-49-5-fermat-s-two-square-theorem"></a>
## 5. Fermat's two-square theorem {#section-51-5-fermat-s-two-square-theorem}

**Theorem.** A positive integer $N$ is a sum of two integer squares exactly when every prime $q\\equiv 3 \\bmod 4$ occurs to an even exponent in its prime factorization.

**Necessity.** If $q\\equiv 3 \\bmod 4$ divides $a^{2}+b^{2}$ and does not divide $b$, then $(ab^{-1})^{2}\\equiv-1 \\bmod q$, impossible by the supplementary law. Thus $q$ divides both $a,b$, so $q^{2}$ divides the sum. Repeating shows its valuation is even.

**Sufficiency.** Primes $q\\equiv 3 \\bmod 4$ with even exponent are squares. The prime $2=1^{2}+1^{2}$. For each prime $p\\equiv 1 \\bmod 4$, $-1$ has a square root modulo $p$; in $\\mathbb{Z}[i]$, a gcd of $p$ and $r+i$ produces a Gaussian integer of norm $p$, so $p=a^{2}+b^{2}$. Multiply all representations using the identity.

This proof names the Gaussian Euclidean step rather than assuming that a modular square root is already an integer representation.

<a id="section-59-6-counting-and-conventions"></a>
## 6. Counting and conventions {#section-61-6-counting-and-conventions}

Let $r_{2}(N)$ count ordered signed pairs $(a,b)$ with $a^{2}+b^{2}=N$. Then

$r_{2}(N)=4(d_{1}(N)-d_{3}(N))$,

where $d_{j}$ counts positive divisors congruent to $j \\bmod 4$. The formula follows from factorization in $\\mathbb{Z}[i]$; axes and swaps are included in the ordered signed convention.

For example, $25$ has representations $(\\pm 5,0),(0,\\pm 5)$ and $(\\pm 3,\\pm 4),(\\pm 4,\\pm 3)$, totaling $12$. Its divisors are $1,5,25$, all $1 \\bmod 4$, so the formula gives $4*3=12$.

<a id="section-69-7-failure-boundaries"></a>
## 7. Failure boundaries {#section-71-7-failure-boundaries}

The two-square criterion concerns integer squares and positive $N$. A local congruence obstruction proves impossibility, but absence of a small-modulus obstruction does not prove representability. Parametrizing rational circle points does not automatically enforce primitive positive integers. Counting answers must state whether signs, order, zeros, and common scaling are included.

<a id="section-73-exercises-with-complete-solutions"></a>
## Project: primitive triples census {#section-185-project-primitive-triples-census}

Enumerate every primitive triple with $z\\le 500$ by iterating coprime opposite-parity pairs $m>n$. Prove your parameter bounds are complete, deduplicate without relying on floating-point equality, and tabulate the counts by hypotenuse residue modulo $8$. Independently verify the equation and gcd for every row. Explain repeated hypotenuses such as $65$ and state whether leg order is canonicalized.

<a id="section-187-chapter-summary"></a>
## 8. Development: prove every part of the primitive parametrization {#section-192-8-development-prove-every-part-of-the-primitive-paramet}

Begin with positive integers $x,y,z$ satisfying $x^2+y^2=z^2$ and $\\gcd(x,y,z)=1$. The coordinates are pairwise coprime: a prime dividing any two divides the square of the third and hence the third. Both legs cannot be odd, because their squared sum would be two modulo four; both cannot be even by primitiveness. Relabel so that $x$ is odd and $y$ even. Then $z$ is odd as well.

The positive integers
$$r=(z-x)/2,\\qquad s=(z+x)/2$$
satisfy $rs=(y/2)^2$. A common divisor of $r,s$ divides both their sum $z$ and difference $x$, so it is one. By unique prime factorization in the ordinary integers, every prime exponent in each of two coprime factors of a square is even. Hence $r=n^2$ and $s=m^2$ for unique positive integers $m>n$. Their gcd is one, and $z=m^2+n^2$ odd forces opposite parity. This proves the claimed necessity without assuming that a rational circle parametrization is already primitive.

Conversely, take $m>n>0$ with gcd one and opposite parity. Expansion proves the equation, and $m^2-n^2$ is positive and odd. If an odd prime divides both this leg and $2mn$, it divides $m$ or $n$ and the difference of their squares, hence both parameters, a contradiction. The prime two cannot divide the odd leg. Thus the legs are coprime and the triple primitive. This also shows that its even leg $2mn$ is divisible by four.

The parameters are recovered uniquely from the odd leg:
$$m^2=(z+x)/2,\\qquad n^2=(z-x)/2.$$
The positive square roots are unique. Sorting the legs by numerical size does not destroy this recovery, because parity still identifies the odd one. Two different permitted parameter pairs therefore cannot become the same positive triangle merely because leg order is ignored.

The restrictions explain distinct failure mechanisms. A common divisor $d$ of $m,n$ contributes a factor $d^2$ to all three coordinates. If the parameters are coprime but both odd, both legs and the hypotenuse are even. In that case the even leg has exactly one factor of two, so the common factor is exactly two. Removing the condition $m>n$ instead changes the sign or order convention; allowing $n=0$ creates an axis point rather than a positive-leg triangle.

The rational geometry fits this arithmetic exactly. For a rational circle point $(u,v)\\ne(-1,0)$, its slope from $(-1,0)$ is $t=v/(u+1)$. Substitution into the circle gives the second intersection
$$u=\\frac{1-t^2}{1+t^2},\\qquad v=\\frac{2t}{1+t^2}.$$
For the positive primitive triple normalized by $z$, that slope is $y/(z+x)=n/m$ in lowest terms. Its interval $0<t<1$ encodes the choice of positive odd leg. Other rational slopes describe other quadrants and axes; the missing point $(-1,0)$ is the exceptional point used to start the construction.

<a id="section-210-9-development-gaussian-division-supplies-the-missing-ar"></a>
## 9. Development: Gaussian division supplies the missing arithmetic {#section-212-9-development-gaussian-division-supplies-the-missing-ar}

In $\\mathbb Z[i]$, multiplication of $a+bi$ and $c+di$ gives the two-square identity by taking norms. The norm is a nonnegative integer, is zero only at zero, and satisfies $N(\\alpha\\beta)=N(\\alpha)N(\\beta)$. Its units are precisely $1,-1,i,-i$, because a multiplicative inverse requires norm one and those are the four lattice points of norm one.

For $\\beta\\ne0$, choose a Gaussian integer $q$ whose real and imaginary coordinates are nearest integers to those of $\\alpha/\\beta$. Either choice at a tie is valid. Then each coordinate error has absolute value at most one-half, so
$$N(\\alpha-q\\beta)
 =N(\\beta)|\\alpha/\\beta-q|^2\\le N(\\beta)/2<N(\\beta).$$
Successive remainders therefore terminate. Back-substitution gives a Gaussian Bezout identity for a gcd, and every common divisor divides that gcd. Unlike the positive ordinary gcd, its value is determined only up to one of the four units; its norm and divisibility properties are unaffected.

These facts prove the factorization properties needed here. Every nonunit factors into irreducibles by induction on its norm: a proper factorization into nonunits gives two strictly smaller positive norms. If an irreducible $\\pi$ divides $\\alpha\\beta$ but not $\\alpha$, its gcd with $\\alpha$ is a unit. Bezout gives $1=u\\pi+v\\alpha$ after multiplying by a unit if necessary. Multiplication by $\\beta$ shows $\\pi\\mid\\beta$. Thus irreducibles are prime, and cancellation of an associated prime factor proves uniqueness inductively. There is no unproved leap from a convenient complex lattice picture to unique factorization.

Here is a complete Euclidean certificate for a prime representation. Since $5^2\\equiv-1\\pmod{13}$, compute a gcd of $13$ and $5+i$:
$$13=2(5+i)+(3-2i),\\qquad 5+i=(1+i)(3-2i).$$
Thus a gcd is $3-2i$, of norm thirteen, yielding $13=3^2+2^2$. The first division is legitimate because the remainder norm thirteen is smaller than $N(5+i)=26$. Both displayed divisions can be checked by multiplication; no decimal approximation to a complex quotient is needed.

For a general rational prime $p\\equiv1\\pmod4$, the earlier supplementary quadratic-residue law supplies $r$ with $r^2\\equiv-1\\pmod p$. Let $\\delta$ be a Gaussian gcd of $p$ and $r+i$. It cannot be a unit: otherwise a Bezout equation $1=Ap+B(r+i)$, multiplied by $r-i$, would make $p$ divide $r-i$, impossible because its imaginary coefficient is minus one. Nor can it be associated to $p$, since $p$ does not divide $r+i$.

Since $\\delta\\mid p$, its norm divides $p^2$. The only remaining possibility is $N(\\delta)=p$: norm one would make it a unit, and norm $p^2$ would make the quotient $p/\\delta$ a unit. Thus the modular root leads to an integer two-square representation through an actual gcd. The modular root itself was never asserted to be one of the small integer coordinates.

The modular root has many integer representatives, while a norm representation is small and rigid. The Euclidean process is the bridge between them. For example, $12^2\\equiv-1\\pmod{29}$, but the integer $12^2+1=145$ is five times twenty-nine, not twenty-nine itself. The exact divisions
$$29=2(12+i)+(5-2i),\\qquad 12+i=(2+i)(5-2i)$$
give a gcd of norm twenty-nine and hence $29=5^2+2^2$. Each division has either a strictly smaller norm remainder or zero remainder. This is an algebraic certificate, independent of how the initial root was discovered.

Multiplying a gcd by a Gaussian unit merely rotates or changes signs of its coordinates. Choosing the other modular square root may conjugate the result. These changes preserve the norm and represent the same unordered positive squares when neither coordinate vanishes. They do not justify discarding different conjugate allocations in a composite norm, where one may obtain a genuinely different pair.

<a id="section-235-10-development-from-prime-splitting-to-the-complete-two"></a>
## 10. Development: from prime splitting to the complete two-square criterion {#section-237-10-development-from-prime-splitting-to-the-complete-two}

The rational prime two factors as $2=-i(1+i)^2$, and $1+i$ is Gaussian prime because its norm two is an ordinary prime. A rational prime $q\\equiv3\\pmod4$ remains Gaussian prime. Indeed, a nontrivial factorization of $q$ would have both factor norms equal to $q$, whereas a sum of two integer squares cannot be three modulo four. Its Gaussian norm is $q^2$, so a Gaussian prime need not have prime norm.

For $p\\equiv1\\pmod4$, the preceding gcd argument supplies $\\pi_p$ with norm $p$, and
$$p=\\pi_p\\overline{\\pi_p}.$$
Both factors are Gaussian prime. They are not associated: if $a+bi$ of odd prime norm were associated to $a-bi$, one of the four unit possibilities would force an axis coordinate zero or $a=\\pm b$. The resulting norm would be an integer square or twice a square, not the odd prime $p$.

These account for every Gaussian prime up to association. A Gaussian prime $\\pi$ divides its positive integer norm $\\pi\\overline\\pi$. Factor that integer into ordinary primes. Gaussian primality makes $\\pi$ divide one of them, and the factorizations just listed show which associated prime factor it can be. This step is what permits a complete representation count, rather than only construction of some examples.

For necessity in the two-square theorem, if $q\\equiv3\\pmod4$ divides $a^2+b^2$, then $q$ divides both coordinates. If $b$ were a unit modulo $q$, the quotient $(ab^{-1})^2$ would equal minus one, contradicting the supplementary law; after $q\\mid b$, the equation also forces $q\\mid a$. Removing their common factor of $q$ lowers the valuation of the norm by two. Repetition gives an even exponent. For positive norm this process stops, so no infinite valuation subtraction is hidden.

For sufficiency, write a positive integer $N$ as a product of prime powers. Every prime congruent to three modulo four with even exponent is itself a square factor. Two is a sum of squares, and every prime congruent to one modulo four has the Gaussian representation just proved. Repeated use of the two-square identity multiplies these into a representation of $N$. The construction permits a zero coordinate; requiring two positive coordinates is an additional counting restriction.

A worked multiplication shows why one norm can have different representations. The factors $1+2i$ and $2+3i$ have norms five and thirteen. Their product is $-4+7i$, while $(1+2i)(2-3i)=8+i$. Thus sixty-five has the two unordered positive square decompositions $4^2+7^2$ and $1^2+8^2$. Conjugating just one prime factor changes the representation, whereas multiplying by a unit changes signs or order.

<a id="section-251-11-development-count-representations-without-losing-axe"></a>
## 11. Development: count representations without losing axes or common factors {#section-253-11-development-count-representations-without-losing-axe}

Assume $N\\ge1$ and write its ordinary prime factorization as
$$N=2^{e_0}\\prod_{p\\equiv1\\ (4)}p^{e_p}
                 \\prod_{q\\equiv3\\ (4)}q^{f_q}.$$
If any $f_q$ is odd, no representation exists. Otherwise consider all Gaussian integers $\\alpha=a+bi$ of norm $N$. A factor $1+i$ must occur in $\\alpha$ to exponent $e_0$. A Gaussian prime $q\\equiv3\\pmod4$, whose norm is $q^2$, must occur to exponent $f_q/2$. For each split prime, the exponents of $\\pi_p$ and $\\overline{\\pi_p}$ in $\\alpha$ must add to $e_p$.

There are exactly $e_p+1$ choices for that split: $0,e_p$ through $e_p,0$. Finally choose one of the four units. Unique factorization makes the resulting nonzero Gaussian integers distinct and accounts for all of them. Therefore
$$r_2(N)=
 \\begin{cases}
 4\\displaystyle\\prod_{p\\equiv1\\ (4)}(e_p+1),&\\text{all }f_q\\text{ even},\\\\
 0,&\\text{some }f_q\\text{ odd}.
 \\end{cases}$$
This counts ordered signed integer pairs because $\\alpha$ records both real and imaginary coordinates with their signs. It does not divide out an axis or diagonal stabilizer by assumption.

To recover the divisor formula in §6, weight an odd divisor by plus one in residue one modulo four and minus one in residue three; give every even divisor weight zero. Each divisor chooses its prime exponents independently, so the sum of weights factors. The two-power factor contributes one; a split prime contributes $e_p+1$; an inert prime contributes $1-1+\\cdots+(-1)^{f_q}$, which is one or zero according as $f_q$ is even or odd. The resulting sum is $d_1(N)-d_3(N)$, giving exactly the same formula multiplied by four.

The endpoints matter. At $N=1$, the empty prime product gives four unit representations. At $N=0$, the only representation is $(0,0)$, so an extended convention would give $r_2(0)=1$; the positive-divisor formula is not defined there. For a positive square norm, axis points can have an orbit of four rather than eight. For twice a square, equal absolute coordinates can also have an orbit of four. Dividing an arbitrary $r_2(N)$ by eight is therefore not a valid universal unordered-positive count.

For primitive pairs, define the count using $\\gcd(a,b)=1$. A prime congruent to three modulo four cannot occur at all, and $e_0$ must be zero or one, since a norm divisible by four forces both coordinates even. At a split prime, using both conjugate factors would make the rational prime divide both coordinates. Thus all $e_p$ factors must be assigned to one conjugate or the other, giving two choices for each distinct split prime. Conversely, a rational prime dividing both coordinates would be either two, an inert prime, or a split prime. It would force respectively at least two factors of $1+i$, an excluded inert factor, or both conjugate split factors. The stated restrictions rule out every such common prime. Under these conditions the primitive ordered signed count is $4\\cdot2^s$, where $s$ is the number of distinct primes congruent to one modulo four; otherwise it is zero.

For $N>2$ in the primitive case, neither coordinate is zero and their absolute values are unequal. An axis primitive pair has norm one, and an equal-coordinate primitive pair has norm two. Every remaining positive unordered pair therefore corresponds to eight ordered signed pairs. For odd $N>1$ containing only split primes, the number of permitted pairs $m>n>0$ is $2^{s-1}$. Opposite parity follows because $N$ is odd, so these pairs are exactly the primitive Pythagorean triples with hypotenuse $N$.

This explains repeated hypotenuses without deduplicating them away. For $65=5\\cdot13$, there are two distinct split primes and hence two primitive triples. For $125=5^3$, there is only one distinct split prime and hence only one, despite the exponent three. Ordinary representations of a norm and primitive representations distribute Gaussian factors differently. The complete census below counts the primitive triangles, not all square decompositions of their hypotenuses.

<a id="section-276-12-development-reconstruction-scaling-and-distinct-coun"></a>
## 12. Development: reconstruction, scaling and distinct counting questions {#section-278-12-development-reconstruction-scaling-and-distinct-coun}

Prime-exponent conditions can certify existence before a representation is constructed, but the two tasks should remain visible. For $325=5^2\\cdot13$, both prime types permit a sum of squares. Multiplying the representations $25=3^2+4^2$ and $13=2^2+3^2$ gives
$$(3+4i)(2+3i)=-6+17i,$$
so $325=6^2+17^2$. Conjugating the second factor instead gives $18-i$, recovering $325=18^2+1^2$. Using the real representation $25=5^2+0^2$ gives $10+15i$, whose two coordinates have gcd five. The norm identity produces the last representation just as legitimately as the first two; it does not assert primitiveness.

The count proves that these are all positive unordered representations. The factorization has exponents two and one at split primes, so $r_2(325)=4(3)(2)=24$. The norm is neither a square nor twice a square, so every orbit has eight members and there are three positive unordered pairs. The primitive count is $4\\cdot2^2=16$, hence two of those pairs are primitive. We found them as $(1,18)$ and $(6,17)$; the third pair $(10,15)$ accounts for the remaining eight signed ordered representations.

This provides a useful check on a construction method. Finding three pairs does not alone establish completeness; the factorization count does. Conversely, the count alone does not display the pairs. A full answer to a reconstruction problem needs both the prime-factor bookkeeping and enough Gaussian multiplication to recover every stated coordinate pair.

The norm of a parameter pair and the square of a triangle's hypotenuse must also be distinguished. A primitive pair $m,n$ of norm $325$ produces a primitive triple with hypotenuse $325$. The pair $(18,1)$ gives $(36,323,325)$ after sorting the legs. The pair $(17,6)$ gives $(204,253,325)$. The nonprimitive parameter pair $(15,10)$ gives $(125,300,325)$, which reduces by twenty-five to $(5,12,13)$. These are classifications of parameter pairs with a fixed norm; they are not all ways of scaling a triangle to the same hypotenuse.

To see the missing distinction concretely, $(195,260,325)=65(3,4,5)$ is a valid triple with that hypotenuse. It need not arise from integer parameters with $m^2+n^2=325$ in the unscaled Euclid formulas: those formulas cover every primitive triple, while arbitrary triples require an additional positive scale factor. The pair theorem is exact within its domain, so applying it beyond that domain is the source of the omission.

For any positive triple, let $d=\\gcd(x,y)$. Since $d^2\\mid z^2$, unique prime factorization gives $d\\mid z$. Dividing all coordinates by $d$ gives a primitive triple; its two legs have gcd one, so their gcd cannot be reduced further. Conversely multiplying a primitive triple by any positive integer produces a triple with coordinate gcd exactly that integer. The primitive reduction and its scale are therefore unique, including when leg order has been canonicalized.

It follows that all triples with a fixed hypotenuse $H$ can be partitioned by primitive hypotenuses $c$ dividing $H$. For each primitive triple with hypotenuse $c$, multiply it by $H/c$. Different primitive triples or different $c$ cannot yield the same sorted triple, because unique primitive reduction would recover both $c$ and its legs. This is a divisor decomposition, separate from the Gaussian norm count for the unscaled parameters.

For $H=325$, the possible primitive hypotenuses dividing it are $5,13,25,65,325$. Their primitive counts are respectively one, one, one, two and two by the distinct-split-prime rule, giving seven sorted positive triples altogether. The divisor one has no positive primitive triangle. None of this changes the original census project's obligation: it asks for primitive triples only, so scaled descendants must be excluded rather than added to its rows.

The distinction prevents three common counting errors at once. Repeated hypotenuses are compatible with different primitive triangles; repeated triples are duplicates and must be removed or ruled out. A common factor in the parameter pair creates a squared scale, while arbitrary triple scaling can be any positive integer. Finally, a representation formula counting signs and order is not automatically a count of positive triangles. Naming the object first makes each of these transformations reversible.

<a id="section-298-exercises-optional-representation-count-extensions"></a>

## Summary

<a id="section-189-chapter-summary"></a>
Primitive Pythagorean triples correspond exactly to coprime, opposite-parity parameter pairs. Rational geometry motivates the formulas; gcd arithmetic proves completeness. The Gaussian norm explains the two-square product identity and the exact prime-exponent criterion. Representation counts depend essentially on declared sign, order, zero, and scaling conventions.
<a id="section-190-8-development-prove-every-part-of-the-primitive-paramet"></a>

## Exercises {#section-75-exercises-with-complete-solutions}

<a id="section-75-1-verify-euclid-s-formula"></a>
### 1. Verify Euclid's formula {#section-77-1-verify-euclid-s-formula}

Show the parametrized triple satisfies the equation.

**Solution.** $(m^{2}-n^{2})^{2}+(2mn)^{2}=m^{4}+2m^{2}n^{2}+n^{4}=(m^{2}+n^{2})^{2}$.

<a id="section-81-2-generate-a-triple"></a>
### 2. Generate a triple {#section-83-2-generate-a-triple}

Use $m=5,n=2$.

**Solution.** The triple is $(21,20,29)$. The parameters are coprime and opposite parity, so it is primitive.

<a id="section-87-3-invalid-parity"></a>
### 3. Invalid parity {#section-89-3-invalid-parity}

What happens for $m=5,n=3$?

**Solution.** The formula gives $(16,30,34)=2(8,15,17)$. Same-parity parameters create an even nonprimitive triple.

<a id="section-93-4-invalid-coprimality"></a>
### 4. Invalid coprimality {#section-95-4-invalid-coprimality}

What happens for $m=6,n=3$?

**Solution.** It gives $(27,36,45)=9(3,4,5)$. A common parameter divisor produces common factors in the triple.

<a id="section-99-5-recover-parameters"></a>
### 5. Recover parameters {#section-101-5-recover-parameters}

Recover $m,n$ from $(20,21,29)$.

**Solution.** Put the even leg second. Then $m^{2}=(29+21)/2=25$, $n^{2}=(29-21)/2=4$, so $(m,n)=(5,2)$.

<a id="section-105-6-hypotenuse-parity"></a>
### 6. Hypotenuse parity {#section-107-6-hypotenuse-parity}

Prove a primitive triple has odd hypotenuse.

**Solution.** Exactly one leg is even and the other odd. Their squared sum is $0+1\\equiv 1 \\bmod 2$, so $z^{2}$ and hence $z$ are odd.

<a id="section-111-7-divisibility-by-three"></a>
### 7. Divisibility by three {#section-113-7-divisibility-by-three}

Prove one leg of every Pythagorean triple is divisible by $3$.

**Solution.** Squares modulo $3$ are $0,1$. If neither leg were divisible by $3$, their squares would sum to $2$, not a square modulo $3$.

<a id="section-117-8-divisibility-by-five"></a>
### 8. Divisibility by five {#section-119-8-divisibility-by-five}

Show in every Pythagorean triple at least one of $x,y,z$ is divisible by $5$.

**Solution.** Nonzero squares modulo $5$ are $1,4$. If none were divisible by $5$, the equation would require a sum of two elements of $\\{1,4\\}$ to lie in $\\{1,4\\}$; possible sums are $2,0,3$, contradiction.

<a id="section-123-9-rational-point"></a>
### 9. Rational point {#section-125-9-rational-point}

Use slope $t=2/3$ in the circle parametrization.

**Solution.** Coordinates are $(1-4/9)/(1+4/9)=5/13$ and $(4/3)/(13/9)=12/13$, yielding the triple $(5,12,13)$.

<a id="section-129-10-product-representation"></a>
### 10. Product representation {#section-131-10-product-representation}

Express $65$ as a sum of squares using the identity and $5=1^{2}+2^{2}$, $13=2^{2}+3^{2}$.

**Solution.** Use $(1*2-2*3)^{2}+(1*3+2*2)^{2}=(-4)^{2}+7^{2}=65$. The alternate sign gives $1^{2}+8^{2}$.

<a id="section-135-11-criterion-yes"></a>
### 11. Criterion yes {#section-137-11-criterion-yes}

Decide whether $325$ is a sum of two squares.

**Solution.** $325=5^{2}*13$; every prime factor is $1 \\bmod 4$, so yes. For example $325=1^{2}+18^{2}$.

<a id="section-141-12-criterion-no"></a>
### 12. Criterion no {#section-143-12-criterion-no}

Decide whether $21$ is a sum of two squares.

**Solution.** $21=3*7$; both primes are $3 \\bmod 4$ and occur to odd exponent. The criterion says no.

<a id="section-147-13-even-exponent-repair"></a>
### 13. Even exponent repair {#section-149-13-even-exponent-repair}

Why is $9$ a sum of two squares although $3\\equiv 3 \\bmod 4$?

**Solution.** The exponent of $3$ is two, which is even. Indeed $9=3^{2}+0^{2}$.

<a id="section-153-14-prime-consequence"></a>
### 14. Prime consequence {#section-155-14-prime-consequence}

If prime $p$ divides $a^{2}+b^{2}$ and $p\\equiv 3 \\bmod 4$, prove $p\\mid a,b$.

**Solution.** If $p$ did not divide $b$, division would make $-1$ a square modulo $p$, impossible. Hence $p\\mid b$; the congruence then gives $p\\mid a$.

<a id="section-159-15-count-representations"></a>
### 15. Count representations {#section-161-15-count-representations}

Compute $r_{2}(13)$.

**Solution.** Divisors $1,13$ are both $1 \\bmod 4$; none are $3 \\bmod 4$. Thus $r_{2}=8$, representing sign and order variants of $(2,3)$.

<a id="section-165-16-count-axes"></a>
### 16. Count axes {#section-167-16-count-axes}

Compute $r_{2}(16)$.

**Solution.** Divisors are $1,2,4,8,16$; only $1$ is $1 \\bmod 4$, none are $3 \\bmod 4$, so $r_{2}=4$: $(\\pm 4,0),(0,\\pm 4)$.

<a id="section-171-17-primitive-scaling"></a>
### 17. Primitive scaling {#section-173-17-primitive-scaling}

Reduce $(42,56,70)$ to its primitive triple.

**Solution.** The gcd is $14$; division gives $(3,4,5)$.

<a id="section-177-18-counting-convention"></a>
### 18. Counting convention {#section-179-18-counting-convention}

How many positive unordered representations has $25$?

**Solution.** If positive excludes zero and order is ignored, only $3^{2}+4^{2}$ remains, so one. This differs from $r_{2}(25)=12$ because that convention includes signs, order, and zeros.

<a id="section-183-project-primitive-triples-census"></a>

<a id="section-300-exercises-optional-representation-count-extensions"></a>
### 19. NTP-10-E19. A diagonal orbit in a representation count {#section-304-ntp-10-e19-a-diagonal-orbit-in-a-representation-count}

Compute $r_2(50)$, the number of primitive ordered signed representations of fifty, and the number of positive unordered representations. Explain why dividing $r_2(50)$ by eight does not give the last answer.

<a id="section-306-ntp-10-e20-a-prime-power-hypotenuse"></a>
### 20. NTP-10-E20. A prime-power hypotenuse {#section-308-ntp-10-e20-a-prime-power-hypotenuse}

Use Gaussian factor choices to determine the number of primitive triples with hypotenuse $125$. Recover the primitive triple and explain why the square decomposition $125=10^2+5^2$ does not produce another primitive triple. Distinguish this count from $r_2(125)$.

<a id="section-310-solutions-optional-representation-count-extensions"></a>

## Solutions: optional representation-count extensions {#section-312-solutions-optional-representation-count-extensions}

<a id="section-312-ntp-10-e19-a-diagonal-orbit-in-a-representation-count-s"></a>
### NTP-10-E19. A diagonal orbit in a representation count — solution {#section-314-ntp-10-e19-a-diagonal-orbit-in-a-representation-count-s}

Since $50=2\\cdot5^2$, the signed ordered count is $4(2+1)=12$, while its primitive part has $4\\cdot2=8$ representations. The ordinary positive unordered pairs are $(1,7)$ and $(5,5)$. The first contributes eight sign/order choices and is primitive; the diagonal pair contributes only four and has gcd five. There are no axis points because fifty is not a square. Thus there are two positive unordered representations, and $12/8$ fails because the orbit sizes differ.

<a id="section-316-ntp-10-e20-a-prime-power-hypotenuse-solution"></a>
### NTP-10-E20. A prime-power hypotenuse — solution {#section-318-ntp-10-e20-a-prime-power-hypotenuse-solution}

The only distinct split prime is five, so there is one positive unordered primitive square decomposition of the odd hypotenuse: $125=11^2+2^2$. Its parameters give odd leg $121-4=117$ and even leg $44$, hence canonical triple $(44,117,125)$. The pair $(10,5)$ has gcd five, so its Euclid triple $(75,100,125)$ is $25(3,4,5)$ and is not primitive. The ordinary norm count is $r_2(125)=4(3+1)=16$, whereas its primitive norm-pair count is eight. The parameter theorem and primitive factor-distribution count certify completeness rather than merely finding one valid triangle.
<a id="section-319-solutions-primitive-triples-census-reference"></a>

## Solutions: primitive triples census reference {#section-321-solutions-primitive-triples-census-reference}

This is a reference model for the original project, with the original bound $z\\le500$ throughout. Every row uses the canonical leg order $0<a\\le b<z$. The parameters remain ordered $m>n>0$, while $(a,b)$ sorts the odd and even legs numerically. This sorting changes presentation, not the underlying triangle. The tables below were derived and checked manually; they are not reported output of a software run.

<a id="section-323-complete-parameter-range-and-filters"></a>
### Complete parameter range and filters {#section-325-complete-parameter-range-and-filters}

The positive parameter $n$ is at least one. Thus $m^2+1\\le500$, so $m^2\\le499$. Since $23^2=529>499$, it suffices and is necessary to examine $2\\le m\\le22$. For each such $m$, keep $1\\le n<m$, $m^2+n^2\\le500$, $\\gcd(m,n)=1$ and opposite parity. All conditions are exact integer comparisons.

For $m\\le16$, the numerical bound allows every $n<m$, because $16^2+15^2=481\\le500$ and $m^2+(m-1)^2$ increases with positive $m$. For $m=17,18,19,20,21,22$, respectively, the largest numerical $n$ is $14,13,11,10,7,4$. For example $17^2+14^2=485$, whereas $17^2+15^2=514$; $22^2+4^2=500$, but four is removed by parity. The remaining filters yield precisely these lists. The two residue-count columns are counts modulo eight for the resulting hypotenuses.

| $m$ | admissible $n$ | rows | $z\\equiv1$ | $z\\equiv5$ |
|---:|:---|---:|---:|---:|
| 2 | 1 | 1 | 0 | 1 |
| 3 | 2 | 1 | 0 | 1 |
| 4 | 1, 3 | 2 | 2 | 0 |
| 5 | 2, 4 | 2 | 1 | 1 |
| 6 | 1, 5 | 2 | 0 | 2 |
| 7 | 2, 4, 6 | 3 | 1 | 2 |
| 8 | 1, 3, 5, 7 | 4 | 4 | 0 |
| 9 | 2, 4, 8 | 3 | 2 | 1 |
| 10 | 1, 3, 7, 9 | 4 | 0 | 4 |
| 11 | 2, 4, 6, 8, 10 | 5 | 2 | 3 |
| 12 | 1, 5, 7, 11 | 4 | 4 | 0 |
| 13 | 2, 4, 6, 8, 10, 12 | 6 | 3 | 3 |
| 14 | 1, 3, 5, 9, 11, 13 | 6 | 0 | 6 |
| 15 | 2, 4, 8, 14 | 4 | 2 | 2 |
| 16 | 1, 3, 5, 7, 9, 11, 13, 15 | 8 | 8 | 0 |
| 17 | 2, 4, 6, 8, 10, 12, 14 | 7 | 3 | 4 |
| 18 | 1, 5, 7, 11, 13 | 5 | 0 | 5 |
| 19 | 2, 4, 6, 8, 10 | 5 | 2 | 3 |
| 20 | 1, 3, 7, 9 | 4 | 4 | 0 |
| 21 | 2, 4 | 2 | 1 | 1 |
| 22 | 1, 3 | 2 | 0 | 2 |

The row counts sum to eighty. The residue-one column sums to thirty-nine and the residue-five column to forty-one. All six other residue classes have count zero. To see the structural reason, the odd parameter square is one modulo eight. The even parameter square is zero if that parameter is divisible by four, and four otherwise. Hence $z$ is one or five modulo eight. This also provides an independent way to check each table's residue entry.

<a id="section-355-full-canonical-table"></a>
### Full canonical table {#section-357-full-canonical-table}

For every listed $(m,n)$ set the odd leg $x=m^2-n^2$, the even leg $y=2mn$, and $z=m^2+n^2$, then sort $x,y$ to obtain $a,b$. The complete table retains the parameters to make every row reproducible.

| $m$ | $n$ | $a$ | $b$ | $z$ | $z\\bmod8$ |
|---:|---:|---:|---:|---:|---:|
| 2 | 1 | 3 | 4 | 5 | 5 |
| 3 | 2 | 5 | 12 | 13 | 5 |
| 4 | 1 | 8 | 15 | 17 | 1 |
| 4 | 3 | 7 | 24 | 25 | 1 |
| 5 | 2 | 20 | 21 | 29 | 5 |
| 5 | 4 | 9 | 40 | 41 | 1 |
| 6 | 1 | 12 | 35 | 37 | 5 |
| 6 | 5 | 11 | 60 | 61 | 5 |
| 7 | 2 | 28 | 45 | 53 | 5 |
| 7 | 4 | 33 | 56 | 65 | 1 |
| 7 | 6 | 13 | 84 | 85 | 5 |
| 8 | 1 | 16 | 63 | 65 | 1 |
| 8 | 3 | 48 | 55 | 73 | 1 |
| 8 | 5 | 39 | 80 | 89 | 1 |
| 8 | 7 | 15 | 112 | 113 | 1 |
| 9 | 2 | 36 | 77 | 85 | 5 |
| 9 | 4 | 65 | 72 | 97 | 1 |
| 9 | 8 | 17 | 144 | 145 | 1 |
| 10 | 1 | 20 | 99 | 101 | 5 |
| 10 | 3 | 60 | 91 | 109 | 5 |
| 10 | 7 | 51 | 140 | 149 | 5 |
| 10 | 9 | 19 | 180 | 181 | 5 |
| 11 | 2 | 44 | 117 | 125 | 5 |
| 11 | 4 | 88 | 105 | 137 | 1 |
| 11 | 6 | 85 | 132 | 157 | 5 |
| 11 | 8 | 57 | 176 | 185 | 1 |
| 11 | 10 | 21 | 220 | 221 | 5 |
| 12 | 1 | 24 | 143 | 145 | 1 |
| 12 | 5 | 119 | 120 | 169 | 1 |
| 12 | 7 | 95 | 168 | 193 | 1 |
| 12 | 11 | 23 | 264 | 265 | 1 |
| 13 | 2 | 52 | 165 | 173 | 5 |
| 13 | 4 | 104 | 153 | 185 | 1 |
| 13 | 6 | 133 | 156 | 205 | 5 |
| 13 | 8 | 105 | 208 | 233 | 1 |
| 13 | 10 | 69 | 260 | 269 | 5 |
| 13 | 12 | 25 | 312 | 313 | 1 |
| 14 | 1 | 28 | 195 | 197 | 5 |
| 14 | 3 | 84 | 187 | 205 | 5 |
| 14 | 5 | 140 | 171 | 221 | 5 |
| 14 | 9 | 115 | 252 | 277 | 5 |
| 14 | 11 | 75 | 308 | 317 | 5 |
| 14 | 13 | 27 | 364 | 365 | 5 |
| 15 | 2 | 60 | 221 | 229 | 5 |
| 15 | 4 | 120 | 209 | 241 | 1 |
| 15 | 8 | 161 | 240 | 289 | 1 |
| 15 | 14 | 29 | 420 | 421 | 5 |
| 16 | 1 | 32 | 255 | 257 | 1 |
| 16 | 3 | 96 | 247 | 265 | 1 |
| 16 | 5 | 160 | 231 | 281 | 1 |
| 16 | 7 | 207 | 224 | 305 | 1 |
| 16 | 9 | 175 | 288 | 337 | 1 |
| 16 | 11 | 135 | 352 | 377 | 1 |
| 16 | 13 | 87 | 416 | 425 | 1 |
| 16 | 15 | 31 | 480 | 481 | 1 |
| 17 | 2 | 68 | 285 | 293 | 5 |
| 17 | 4 | 136 | 273 | 305 | 1 |
| 17 | 6 | 204 | 253 | 325 | 5 |
| 17 | 8 | 225 | 272 | 353 | 1 |
| 17 | 10 | 189 | 340 | 389 | 5 |
| 17 | 12 | 145 | 408 | 433 | 1 |
| 17 | 14 | 93 | 476 | 485 | 5 |
| 18 | 1 | 36 | 323 | 325 | 5 |
| 18 | 5 | 180 | 299 | 349 | 5 |
| 18 | 7 | 252 | 275 | 373 | 5 |
| 18 | 11 | 203 | 396 | 445 | 5 |
| 18 | 13 | 155 | 468 | 493 | 5 |
| 19 | 2 | 76 | 357 | 365 | 5 |
| 19 | 4 | 152 | 345 | 377 | 1 |
| 19 | 6 | 228 | 325 | 397 | 5 |
| 19 | 8 | 297 | 304 | 425 | 1 |
| 19 | 10 | 261 | 380 | 461 | 5 |
| 20 | 1 | 40 | 399 | 401 | 1 |
| 20 | 3 | 120 | 391 | 409 | 1 |
| 20 | 7 | 280 | 351 | 449 | 1 |
| 20 | 9 | 319 | 360 | 481 | 1 |
| 21 | 2 | 84 | 437 | 445 | 5 |
| 21 | 4 | 168 | 425 | 457 | 1 |
| 22 | 1 | 44 | 483 | 485 | 5 |
| 22 | 3 | 132 | 475 | 493 | 5 |

<a id="section-442-equation-gcd-and-deduplication-certificate"></a>
### Equation, gcd and deduplication certificate {#section-444-equation-gcd-and-deduplication-certificate}

For each literal row, the manual check recovered its odd leg $x$ and even leg $y$ and verified
$$z+x=2m^2,\\qquad z-x=2n^2,\\qquad y=2mn.$$
Multiplying the first two equalities gives $z^2-x^2=4m^2n^2=y^2$. Thus the equation was checked for each listed row through exact identities; sorting the legs preserves it. The admissible-parameter table was also checked for gcd one and opposite parity. Any odd prime dividing both legs would then divide both parameters, and two cannot divide the odd leg. Consequently every row has coordinate gcd one. These certificates supply the per-row equation and gcd checks without relying on floating-point square roots.

There are no repeated triples in the table. Given a canonical positive primitive triple, parity recovers the odd leg $x$, and then $(z+x)/2=m^2$ and $(z-x)/2=n^2$ recover the unique positive parameters. The eighty distinct parameter pairs therefore cannot collide after sorting. Deduplicating by full integer triples is a valid implementation safeguard; deduplicating by hypotenuse would remove valid triangles.

In particular, $(m,n)=(8,1)$ gives $(16,63,65)$, and $(7,4)$ gives $(33,56,65)$. Their hypotenuses agree but their legs and parameters differ. Both belong in the census. The factor-distribution proof predicts two primitive triangles for $65=5\\cdot13$, agreeing with these rows. The complete table's largest hypotenuse is $493$, attained by $(m,n)=(18,13)$ and $(22,3)$; a bound of five hundred does not require an attained hypotenuse of five hundred.

<a id="section-452-census-comparison-rubric"></a>
### Census comparison rubric {#section-454-census-comparison-rubric}

A complete model comparison checks the original range and all outputs together. First, the bound proof must include every $m$ from two through twenty-two and every eligible $n$, rather than an unexplained finite search cutoff. Second, the gcd, opposite-parity and hypotenuse filters must all appear; dropping any one changes the mathematical problem.

The result must contain exactly the eighty canonical triples displayed here, with a reversible leg convention and no duplicate full triples. It must retain both hypotenuse-sixty-five rows. A table of hypotenuses alone cannot demonstrate this condition. Counts by all eight residue classes must be $[0,39,0,0,0,41,0,0]$ in residue order zero through seven, with the residue argument explaining the six structural zeros.

For each row, an equation check and a gcd check are required. The exact per-row identities plus the coprime-parameter proof above meet that requirement; independently checking $a^2+b^2=z^2$ and $\\gcd(a,b,z)=1$ by integer arithmetic is another valid method. The optional software reference also compares the full row set with an enumeration that does not assume Euclid's formulas. This is an additional implementation check, not a new requirement to use that particular second enumeration. Its aggregate count alone would be a weaker comparison than its full-set equality.

Finally, the answer should distinguish a mathematical certificate, a hand-derived table and an observed software run. This model provides the first two. The listing below is authored but unexecuted in this source review; actual execution and source/fence binding belong to the root reproduction receipt. A learner can complete the original project without using a command line or this particular program.

<a id="section-462-solutions-exact-integer-census-listing"></a>

## Solutions: exact integer census listing {#section-464-solutions-exact-integer-census-listing}

This optional pure standard-library reference implements both enumerations and returns data from \`primitive_triples_500()\`. Loading its definitions alone does not run the census. It has no files, network, input, output or command-line interface. Python's integer square root makes the second test exact; it never compares floating-point values.

The parameter loop examines at most 231 pairs, and the direct loop examines 124,750 pairs $(z,a)$. All squared coordinates are at most 250,000. There are no unbounded searches or input-dependent allocations. The full expected rows are the preceding manual table; the source payload records those same rows and the exact aggregate checks. This listing has not been executed by its author or source reviewers. Root reproduction must call the function and compare the returned full rows with that recorded fixture before recording a successful run.

\`\`\`python
from math import gcd, isqrt


def primitive_triples_500():
    """Return the full primitive census; no input, output or external state."""
    generated = {}
    for m in range(2, 23):
        for n in range(1, m):
            c = m * m + n * n
            if c > 500 or gcd(m, n) != 1 or (m - n) % 2 == 0:
                continue
            odd_leg = m * m - n * n
            even_leg = 2 * m * n
            a, b = sorted((odd_leg, even_leg))
            triple = (a, b, c)
            if triple in generated:
                raise AssertionError("duplicate canonical triple")
            generated[triple] = (m, n)

    # This second enumeration uses the equation, not Euclid's parametrization.
    independent = set()
    for c in range(1, 501):
        for a in range(1, c):
            b_squared = c * c - a * a
            b = isqrt(b_squared)
            if a <= b and b * b == b_squared and gcd(gcd(a, b), c) == 1:
                independent.add((a, b, c))
    if set(generated) != independent:
        raise AssertionError("parameter and square enumerations differ")

    rows = []
    counts = [0] * 8
    for (a, b, c), (m, n) in sorted(generated.items(), key=lambda item: item[1]):
        if not 0 < a <= b < c <= 500:
            raise AssertionError("positive canonical bounds failed")
        if a * a + b * b != c * c or gcd(gcd(a, b), c) != 1:
            raise AssertionError("row equation or gcd failed")
        rows.append([m, n, a, b, c])
        counts[c % 8] += 1
    repeated_65 = sorted([[a, b, c] for a, b, c in generated if c == 65])
    if len(rows) != 80 or counts != [0, 39, 0, 0, 0, 41, 0, 0]:
        raise AssertionError("manually derived census totals differ")
    if repeated_65 != [[16, 63, 65], [33, 56, 65]]:
        raise AssertionError("both hypotenuse-65 triangles must remain")
    return {
        "bound": 500,
        "leg_order": "0<a<=b<c",
        "row_fields": ["m", "n", "a", "b", "z"],
        "rows": rows,
        "total": len(rows),
        "hypotenuse_mod8_counts": counts,
        "hypotenuse_65": repeated_65,
        "maximum_hypotenuse": max(c for _, _, c in generated),
        "parameter_vs_square_enumeration_equal": True,
        "equation_and_gcd_checked": True,
    }
\`\`\`

The direct enumeration is complete because every canonical positive triple has $1\\le a<z\\le500$ and its other leg is the positive exact square root of $z^2-a^2$. Requiring $a\\le b$ chooses the same convention, and the gcd test retains exactly primitive triples. Equality of the two full sets therefore tests the parametrized output against an independent search space.

<a id="section-529-references-gaussian-arithmetic-and-counting-boundaries"></a>

## Sources: Gaussian arithmetic and counting boundaries {#section-531-references-gaussian-arithmetic-and-counting-boundaries}

Keith Conrad's [The Gaussian Integers](https://kconrad.math.uconn.edu/blurbs/ugradnumthy/Zinotes.pdf) supplies a primary mathematical account: Euclidean division in Theorem 3.1, Gaussian Bezout in Theorem 5.1, factorization in Theorems 6.4 and 6.6, primitive triples in Theorem 8.3, split primes in Theorems 9.6–9.9, and the two-square criterion in Theorem 9.10. The arguments above give the needed proofs explicitly; these references identify the imported theorem boundaries rather than stand in for missing derivations.

Ordinary unique factorization, Bezout and the supplementary quadratic-residue law were established earlier in this book. The factor-distribution proof of the ordered signed count and its divisor formula is given here; no claim is made that the external reference states that exact formula. The formula assumes a positive integer norm, and the primitive refinements state their extra coprimality and orbit hypotheses. The full census model covers the original five-hundred bound and excludes scaled triangles as required.

`;export{e as default};