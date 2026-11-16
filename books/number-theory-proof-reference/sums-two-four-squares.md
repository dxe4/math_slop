
# Sums of Two and Four Squares

Two squares have a prime-exponent obstruction; four squares represent every nonnegative integer. This chapter proves both statements. Its Gaussian arithmetic and representation counts adapt the earlier combined Euler reading, which remains intact under its original identity. The four-square identity and minimal-multiplier descent supply the new theorem without using quaternion factorisation or an analytic counting formula.

Preparation is integer factorisation, valuations, congruences and the supplementary law for minus one. The norm and Euclidean algorithm in the Gaussian integers are developed here; no earlier course in algebraic number theory is assumed. A representation permits zero and negative coordinates unless a different convention is explicitly stated.

## 4. The two-square identity

The identity

\[(a^{2}+b^{2})(c^{2}+d^{2})=(ac-bd)^{2}+(ad+bc)^{2}\]

shows sums of two squares are closed under multiplication. It is the norm identity in the Gaussian integers $\mathbb{Z}[i]$, where

$N(a+bi)=a^{2}+b^{2}$, $N(\alpha \beta)=N(\alpha)N(\beta)$.

The norm supplies Euclidean division: choose the nearest lattice point in $\mathbb{Z}[i]$ to a complex quotient; the remainder has smaller norm. Hence $\mathbb{Z}[i]$ is a Euclidean domain and has unique factorization.

## 5. Fermat's two-square theorem

**Theorem 12.1.** A positive integer $N$ is a sum of two integer squares exactly when every prime $q\equiv 3 \bmod 4$ occurs to an even exponent in its prime factorization.

**Necessity.** If $q\equiv 3 \bmod 4$ divides $a^{2}+b^{2}$ and does not divide $b$, then $(ab^{-1})^{2}\equiv-1 \bmod q$, impossible by the supplementary law. Thus $q$ divides both $a,b$, so $q^{2}$ divides the sum. Repeating shows its valuation is even.

**Sufficiency.** Primes $q\equiv 3 \bmod 4$ with even exponent are squares. The prime $2=1^{2}+1^{2}$. For each prime $p\equiv 1 \bmod 4$, $-1$ has a square root modulo $p$; in $\mathbb{Z}[i]$, a gcd of $p$ and $r+i$ produces a Gaussian integer of norm $p$, so $p=a^{2}+b^{2}$. Multiply all representations using the identity.

This proof names the Gaussian Euclidean step rather than assuming that a modular square root is already an integer representation.

## 6. Counting and conventions

Let $r_{2}(N)$ count ordered signed pairs $(a,b)$ with $a^{2}+b^{2}=N$. Then

$r_{2}(N)=4(d_{1}(N)-d_{3}(N))$,

where $d_{j}$ counts positive divisors congruent to $j \bmod 4$. The formula follows from factorization in $\mathbb{Z}[i]$; axes and swaps are included in the ordered signed convention.

For example, $25$ has representations $(\pm 5,0),(0,\pm 5)$ and $(\pm 3,\pm 4),(\pm 4,\pm 3)$, totaling $12$. Its divisors are $1,5,25$, all $1 \bmod 4$, so the formula gives $4*3=12$.

## 7. Failure boundaries

The two-square criterion concerns integer squares and positive $N$. A local congruence obstruction proves impossibility, but absence of a small-modulus obstruction does not prove representability. Parametrizing rational circle points does not automatically enforce primitive positive integers. Counting answers must state whether signs, order, zeros, and common scaling are included.

## 9. Development: Gaussian division supplies the missing arithmetic

In $\mathbb Z[i]$, multiplication of $a+bi$ and $c+di$ gives the two-square identity by taking norms. The norm is a nonnegative integer, is zero only at zero, and satisfies $N(\alpha\beta)=N(\alpha)N(\beta)$. Its units are precisely $1,-1,i,-i$, because a multiplicative inverse requires norm one and those are the four lattice points of norm one.

For $\beta\ne0$, choose a Gaussian integer $q$ whose real and imaginary coordinates are nearest integers to those of $\alpha/\beta$. Either choice at a tie is valid. Then each coordinate error has absolute value at most one-half, so
$$N(\alpha-q\beta)
 =N(\beta)|\alpha/\beta-q|^2\le N(\beta)/2<N(\beta).$$
Successive remainders therefore terminate. Back-substitution gives a Gaussian Bezout identity for a gcd, and every common divisor divides that gcd. Unlike the positive ordinary gcd, its value is determined only up to one of the four units; its norm and divisibility properties are unaffected.

These facts prove the factorization properties needed here. Every nonunit factors into irreducibles by induction on its norm: a proper factorization into nonunits gives two strictly smaller positive norms. If an irreducible $\pi$ divides $\alpha\beta$ but not $\alpha$, its gcd with $\alpha$ is a unit. Bezout gives $1=u\pi+v\alpha$ after multiplying by a unit if necessary. Multiplication by $\beta$ shows $\pi\mid\beta$. Thus irreducibles are prime, and cancellation of an associated prime factor proves uniqueness inductively. There is no unproved leap from a convenient complex lattice picture to unique factorization.

Here is a complete Euclidean certificate for a prime representation. Since $5^2\equiv-1\pmod{13}$, compute a gcd of $13$ and $5+i$:
$$13=2(5+i)+(3-2i),\qquad 5+i=(1+i)(3-2i).$$
Thus a gcd is $3-2i$, of norm thirteen, yielding $13=3^2+2^2$. The first division is legitimate because the remainder norm thirteen is smaller than $N(5+i)=26$. Both displayed divisions can be checked by multiplication; no decimal approximation to a complex quotient is needed.

For a general rational prime $p\equiv1\pmod4$, the earlier supplementary quadratic-residue law supplies $r$ with $r^2\equiv-1\pmod p$. Let $\delta$ be a Gaussian gcd of $p$ and $r+i$. It cannot be a unit: otherwise a Bezout equation $1=Ap+B(r+i)$, multiplied by $r-i$, would make $p$ divide $r-i$, impossible because its imaginary coefficient is minus one. Nor can it be associated to $p$, since $p$ does not divide $r+i$.

Since $\delta\mid p$, its norm divides $p^2$. The only remaining possibility is $N(\delta)=p$: norm one would make it a unit, and norm $p^2$ would make the quotient $p/\delta$ a unit. Thus the modular root leads to an integer two-square representation through an actual gcd. The modular root itself was never asserted to be one of the small integer coordinates.

The modular root has many integer representatives, while a norm representation is small and rigid. The Euclidean process is the bridge between them. For example, $12^2\equiv-1\pmod{29}$, but the integer $12^2+1=145$ is five times twenty-nine, not twenty-nine itself. The exact divisions
$$29=2(12+i)+(5-2i),\qquad 12+i=(2+i)(5-2i)$$
give a gcd of norm twenty-nine and hence $29=5^2+2^2$. Each division has either a strictly smaller norm remainder or zero remainder. This is an algebraic certificate, independent of how the initial root was discovered.

Multiplying a gcd by a Gaussian unit merely rotates or changes signs of its coordinates. Choosing the other modular square root may conjugate the result. These changes preserve the norm and represent the same unordered positive squares when neither coordinate vanishes. They do not justify discarding different conjugate allocations in a composite norm, where one may obtain a genuinely different pair.

## 10. Development: from prime splitting to the complete two-square criterion

The rational prime two factors as $2=-i(1+i)^2$, and $1+i$ is Gaussian prime because its norm two is an ordinary prime. A rational prime $q\equiv3\pmod4$ remains Gaussian prime. Indeed, a nontrivial factorization of $q$ would have both factor norms equal to $q$, whereas a sum of two integer squares cannot be three modulo four. Its Gaussian norm is $q^2$, so a Gaussian prime need not have prime norm.

For $p\equiv1\pmod4$, the preceding gcd argument supplies $\pi_p$ with norm $p$, and
$$p=\pi_p\overline{\pi_p}.$$
Both factors are Gaussian prime. They are not associated: if $a+bi$ of odd prime norm were associated to $a-bi$, one of the four unit possibilities would force an axis coordinate zero or $a=\pm b$. The resulting norm would be an integer square or twice a square, not the odd prime $p$.

These account for every Gaussian prime up to association. A Gaussian prime $\pi$ divides its positive integer norm $\pi\overline\pi$. Factor that integer into ordinary primes. Gaussian primality makes $\pi$ divide one of them, and the factorizations just listed show which associated prime factor it can be. This step is what permits a complete representation count, rather than only construction of some examples.

For necessity in the two-square theorem, if $q\equiv3\pmod4$ divides $a^2+b^2$, then $q$ divides both coordinates. If $b$ were a unit modulo $q$, the quotient $(ab^{-1})^2$ would equal minus one, contradicting the supplementary law; after $q\mid b$, the equation also forces $q\mid a$. Removing their common factor of $q$ lowers the valuation of the norm by two. Repetition gives an even exponent. For positive norm this process stops, so no infinite valuation subtraction is hidden.

For sufficiency, write a positive integer $N$ as a product of prime powers. Every prime congruent to three modulo four with even exponent is itself a square factor. Two is a sum of squares, and every prime congruent to one modulo four has the Gaussian representation just proved. Repeated use of the two-square identity multiplies these into a representation of $N$. The construction permits a zero coordinate; requiring two positive coordinates is an additional counting restriction.

A worked multiplication shows why one norm can have different representations. The factors $1+2i$ and $2+3i$ have norms five and thirteen. Their product is $-4+7i$, while $(1+2i)(2-3i)=8+i$. Thus sixty-five has the two unordered positive square decompositions $4^2+7^2$ and $1^2+8^2$. Conjugating just one prime factor changes the representation, whereas multiplying by a unit changes signs or order.

## 11. Development: count representations without losing axes or common factors

Assume $N\ge1$ and write its ordinary prime factorization as
$$N=2^{e_0}\prod_{p\equiv1\ (4)}p^{e_p}
                 \prod_{q\equiv3\ (4)}q^{f_q}.$$
If any $f_q$ is odd, no representation exists. Otherwise consider all Gaussian integers $\alpha=a+bi$ of norm $N$. A factor $1+i$ must occur in $\alpha$ to exponent $e_0$. A Gaussian prime $q\equiv3\pmod4$, whose norm is $q^2$, must occur to exponent $f_q/2$. For each split prime, the exponents of $\pi_p$ and $\overline{\pi_p}$ in $\alpha$ must add to $e_p$.

There are exactly $e_p+1$ choices for that split: $0,e_p$ through $e_p,0$. Finally choose one of the four units. Unique factorization makes the resulting nonzero Gaussian integers distinct and accounts for all of them. Therefore
$$r_2(N)=
 \begin{cases}
 4\displaystyle\prod_{p\equiv1\ (4)}(e_p+1),&\text{all }f_q\text{ even},\\
 0,&\text{some }f_q\text{ odd}.
 \end{cases}$$
This counts ordered signed integer pairs because $\alpha$ records both real and imaginary coordinates with their signs. It does not divide out an axis or diagonal stabilizer by assumption.

To recover the divisor formula in §6, weight an odd divisor by plus one in residue one modulo four and minus one in residue three; give every even divisor weight zero. Each divisor chooses its prime exponents independently, so the sum of weights factors. The two-power factor contributes one; a split prime contributes $e_p+1$; an inert prime contributes $1-1+\cdots+(-1)^{f_q}$, which is one or zero according as $f_q$ is even or odd. The resulting sum is $d_1(N)-d_3(N)$, giving exactly the same formula multiplied by four.

The endpoints matter. At $N=1$, the empty prime product gives four unit representations. At $N=0$, the only representation is $(0,0)$, so an extended convention would give $r_2(0)=1$; the positive-divisor formula is not defined there. For a positive square norm, axis points can have an orbit of four rather than eight. For twice a square, equal absolute coordinates can also have an orbit of four. Dividing an arbitrary $r_2(N)$ by eight is therefore not a valid universal unordered-positive count.

For primitive pairs, define the count using $\gcd(a,b)=1$. A prime congruent to three modulo four cannot occur at all, and $e_0$ must be zero or one, since a norm divisible by four forces both coordinates even. At a split prime, using both conjugate factors would make the rational prime divide both coordinates. Thus all $e_p$ factors must be assigned to one conjugate or the other, giving two choices for each distinct split prime. Conversely, a rational prime dividing both coordinates would be either two, an inert prime, or a split prime. It would force respectively at least two factors of $1+i$, an excluded inert factor, or both conjugate split factors. The stated restrictions rule out every such common prime. Under these conditions the primitive ordered signed count is $4\cdot2^s$, where $s$ is the number of distinct primes congruent to one modulo four; otherwise it is zero.

For $N>2$ in the primitive case, neither coordinate is zero and their absolute values are unequal. An axis primitive pair has norm one, and an equal-coordinate primitive pair has norm two. Every remaining positive unordered pair therefore corresponds to eight ordered signed pairs. For odd $N>1$ containing only split primes, the number of permitted pairs $m>n>0$ is $2^{s-1}$. Opposite parity follows because $N$ is odd, so these pairs are exactly the primitive Pythagorean triples with hypotenuse $N$.

This explains repeated hypotenuses without deduplicating them away. For $65=5\cdot13$, there are two distinct split primes and hence two primitive triples. For $125=5^3$, there is only one distinct split prime and hence only one, despite the exponent three. Ordinary representations of a norm and primitive representations distribute Gaussian factors differently. The complete census in the retained combined companion reading counts the primitive triangles, not all square decompositions of their hypotenuses.


## 12. Four squares multiply: prove the identity first

For integer vectors $a=(a_0,a_1,a_2,a_3)$ and $b=(b_0,b_1,b_2,b_3)$, define

$$\begin{aligned}
c_0&=a_0b_0+a_1b_1+a_2b_2+a_3b_3,\\
c_1&=a_1b_0-a_0b_1+a_3b_2-a_2b_3,\\
c_2&=a_2b_0-a_3b_1-a_0b_2+a_1b_3,\\
c_3&=a_3b_0+a_2b_1-a_1b_2-a_0b_3.
\end{aligned}$$

Then Euler's four-square identity is

$$c_0^2+c_1^2+c_2^2+c_3^2
=(a_0^2+a_1^2+a_2^2+a_3^2)
 (b_0^2+b_1^2+b_2^2+b_3^2).$$

Here is a verification that also fixes every sign needed in the descent. Regard the four displayed expressions as linear forms in the $b_i$. The coefficient columns are

$$(a_0,a_1,a_2,a_3),\ (a_1,-a_0,-a_3,a_2),\
(a_2,a_3,-a_0,-a_1),\ (a_3,-a_2,a_1,-a_0).$$

Every column has squared length $N(a)=\sum a_i^2$. Their six pairwise dot products, in the order $01,02,03,12,13,23$, are respectively

$$\begin{gathered}
a_0a_1-a_1a_0-a_2a_3+a_3a_2,\quad
a_0a_2+a_1a_3-a_2a_0-a_3a_1,\\
a_0a_3-a_1a_2+a_2a_1-a_3a_0,\quad
a_1a_2-a_0a_3+a_3a_0-a_2a_1,\\
a_1a_3+a_0a_2-a_3a_1-a_2a_0,\quad
a_2a_3-a_3a_2-a_0a_1+a_1a_0.
\end{gathered}$$

Each is zero by ordinary commutativity. Expanding the sum of the four squared linear forms therefore leaves coefficient $N(a)$ on every $b_i^2$ and no mixed terms, proving the identity. Thus four-square representations multiply constructively. We need no algebra of quaternions to use the identity, and the sign convention is completely determined by the displayed formulas.

This is more than a closure observation. If $b_i\equiv a_i\pmod m$ and $m\mid N(a)$, all four $c_i$ are divisible by $m$: the first is congruent to $N(a)$ and the other three are congruent to cancelling antisymmetric products. Dividing those four coordinates by $m$ will be the descent step. An arbitrary four-square product identity might prove closure yet obscure precisely this divisibility feature.

## 13. Every prime has a small represented multiple

Let $p$ be an odd prime. The set $S=\{x^2:0\le x\le(p-1)/2\}$ has $(p+1)/2$ distinct residues modulo $p$. Indeed equality of two squares in this range would require $x=y$ or $x+y=p$, and the latter is impossible unless both are zero, which is already the equal case. The translated set $-1-S$ has the same size. The two sets cannot be disjoint in a set with only $p$ elements. Hence there are integers $x,y$ in that range with

$$x^2+y^2+1\equiv0\pmod p.$$

Write $x^2+y^2+1=mp$. It is positive, so $m\ge1$, and the bound

$$x^2+y^2+1\le (p-1)^2/2+1<p^2$$

shows $m<p$. The strict inequality holds for every $p\ge3$. We have therefore represented a positive multiple of $p$ smaller than $p^2$ as four squares, with fourth coordinate zero. This does not yet prove that $p$ itself is represented: removing the multiplier is the work of descent.

Choose the smallest positive integer $m$ for which $mp$ is a sum of four integer squares. Existence follows from the construction, and $m<p$ remains true for the minimum. Let $mp=\sum a_i^2$. If $m$ is even, that sum is even, so an even number of the coordinates are odd. We can arrange the four coordinates into two pairs of equal parity. Replace each pair $(u,v)$ by $((u+v)/2,(u-v)/2)$. The new coordinates are integers and their squared sum is half the old squared sum. Thus $(m/2)p$ would be represented, contradicting minimality. The minimum $m$ is therefore odd.

The pair arrangement is essential: with exactly two odd coordinates, pair those two together and the two even coordinates together. Pairing an odd coordinate with an even one would create half-integers and invalidate the descent. This is why merely dividing an even norm by two is not a complete proof without the parity argument.

## 14. Minimal-multiplier descent proves four squares

Suppose the odd minimum $m$ is greater than one. For each $a_i$ choose the unique centered residue $b_i$ with

$$b_i\equiv a_i\pmod m,\qquad |b_i|\le(m-1)/2.$$

Then $\sum b_i^2$ is divisible by $m$, say it is $mr$, and

$$0\le mr\le(m-1)^2<m^2.$$

Hence $0\le r<m$. The value $r=0$ would force every $b_i=0$, since a sum of integer squares is zero only when every coordinate is zero. Then $m$ divides every $a_i$, so $m^2\mid mp$, giving $m\mid p$. This contradicts $1<m<p$ and primality of $p$. Consequently $0<r<m$.

Apply the four-square identity of Section 12 to $a,b$. Its four coordinates $c_i$ are all divisible by $m$, as proved there. Their squared sum is

$$\sum c_i^2=(mp)(mr)=m^2pr.$$

Dividing by $m^2$ gives a representation of $pr$ by the four integers $c_i/m$. Since $r$ is positive and strictly smaller than $m$, this contradicts the choice of $m$. There is no minimum greater than one, so the minimum is one and the odd prime $p$ itself is a sum of four squares. The prime two is $1^2+1^2+0^2+0^2$.

**Theorem (Lagrange's four-square theorem).** Every nonnegative integer is a sum of four integer squares.

For zero use four zero coordinates; for one use $(1,0,0,0)$. Every larger integer is a finite product of ordinary primes by unique factorisation. Each prime has a representation by the preceding proof, and repeated application of Euler's identity multiplies these representations. All resulting coordinates are integers. Negative values cannot be sums of squares, so the nonnegative domain is exact. Requiring four strictly positive coordinates would be a different statement and would already fail for one.

The proof has two separate well-ordering arguments: prime factorisation terminates because proper factors are smaller positive integers, and the represented multiplier has a least positive value. In the latter argument the object being minimized is $m$, while the prime $p$ remains fixed. The new representation changes the four coordinates and the multiplier, but preserves that same prime. This supplies the precise invariant and decreasing measure of the descent.

### Worked four-square example: a visible descent at seven

The congruence construction gives $14=3^2+2^2+1^2+0^2$. Its multiplier is two. Pair the odd coordinates three and one, and pair two with zero. Taking half-sums and half-differences gives the integer coordinates $2,1,1,1$, whose squares sum to seven. This is the even-multiplier branch in explicit form. It does not assert that every initial representation descends in exactly one step; the proof guarantees a strict reduction whenever the minimum would exceed one.

### Worked multiplication: thirty-five

Take $7=2^2+1^2+1^2+1^2$ and $5=2^2+1^2+0^2+0^2$. The product formulas give $(c_0,c_1,c_2,c_3)=(5,0,1,3)$, so $35=25+0+1+9$. The first coordinate is a dot product, while the other three use the signed cross terms. Substitution certifies this representation exactly and illustrates why preserving the sign convention matters even though all final coordinates are squared.

### Worked comparison: a two-square obstruction survives

The integer $21=3\cdot7$ is not a sum of two integer squares: both primes congruent to three modulo four occur with odd exponent. It is nevertheless $4^2+2^2+1^2+0^2$. Four-square universality does not repair the two-square prime-exponent condition; it answers a different representation problem. Similarly, the theorem does not prove that every integer is a sum of three squares: the residue of seven modulo eight rules out three squares by the list of square residues $0,1,4$.

## Exercises

### ENT12-01. Gaussian division as a certificate

Explain why nearest-integer rounding of both coordinates of $\alpha/\beta$ gives a Gaussian remainder of norm at most $N(\beta)/2$ for $\beta\ne0$.

**Hint 1.** Each coordinate error has absolute value at most one-half.

**Hint 2.** Multiply its squared complex magnitude by $N(\beta)$.

<details><summary>Full solution</summary>

Writing $\alpha/\beta-q=u+vi$ with $|u|,|v|\le1/2$ gives $N(\alpha-q\beta)=N(\beta)(u^2+v^2)\le N(\beta)/2$. This is strictly less than $N(\beta)$, so positive integer norms strictly decrease during Euclid. Either nearest integer is allowed at a tie. This proves termination and the existence of Gaussian gcds; no numerical approximation is needed in an exact certificate of the divisions actually chosen.

</details>

### ENT12-02. A prime norm is prime

Prove that a Gaussian integer of ordinary prime norm is Gaussian irreducible, and hence prime using the Euclidean argument.

**Hint 1.** Norms multiply in a factorisation.

**Hint 2.** Norm one is equivalent to being a unit; Euclid proves irreducibles are prime.

<details><summary>Full solution</summary>

If $N(\pi)=p$ and $\pi=\alpha\beta$, then $N(\alpha)N(\beta)=p$. One norm is one, so one factor is a Gaussian unit. Thus $\pi$ is irreducible. If it divides a product and not the first factor, its gcd with that factor is a unit; a Bezout equation multiplied by the second factor proves divisibility of the second. This supplies primality rather than assuming that irreducible and prime coincide in every ring.

</details>

### ENT12-03. A modular root is not a representation

Use the Gaussian divisions for twenty-nine to turn $12^2\equiv-1\pmod{29}$ into an integer two-square representation.

**Hint 1.** The first remainder in $29-2(12+i)$ is $5-2i$.

**Hint 2.** Divide $12+i$ by that remainder exactly.

<details><summary>Full solution</summary>

The equations $29=2(12+i)+(5-2i)$ and $12+i=(2+i)(5-2i)$ show that a Gaussian gcd is $5-2i$. Its norm is twenty-nine, yielding $29=5^2+2^2$. The initial integer sum $12^2+1$ is instead $145=5\cdot29$. The gcd removes the unwanted multiplier; simply interpreting the modular square root as a small norm coordinate would give a false equality.

</details>

### ENT12-04. A forbidden odd valuation

Prove that if $q\equiv3\pmod4$ is prime and $N=a^2+b^2>0$, then $v_q(N)$ is even.

**Hint 1.** If $q$ divides the sum and $b$ is nonzero modulo $q$, division makes minus one a square.

**Hint 2.** Remove a common factor of $q$ from the two coordinates and repeat.

<details><summary>Full solution</summary>

The supplementary law forbids the proposed square root of minus one. Hence $q\mid b$, and the congruence forces $q\mid a$. Write $a=qa_1,b=qb_1$, reducing the norm by $q^2$. Repeat until the new norm is not divisible by $q$; termination follows because its positive value decreases. Each step removes exactly two valuation units, proving that the original valuation is even. Zero norm would require a separate convention for valuation.

</details>

### ENT12-05. Count before constructing

Determine $r_2(325)$, the primitive ordered signed count, and every positive unordered representation.

**Hint 1.** The split prime exponents are two at five and one at thirteen.

**Hint 2.** Multiply $3+4i$ by $2\pm3i$, and also use $5(2+3i)$.

<details><summary>Full solution</summary>

The full count is $4(2+1)(1+1)=24$. The primitive count is $4\cdot2^2=16$, because both primes are split and there is no factor two. The positive unordered pairs are $(1,18),(6,17),(10,15)$: multiplication gives respectively $18-i,-6+17i,10+15i$. The first two are primitive. Since 325 is neither a square nor twice a square, every such orbit has eight members, so the three displayed pairs exhaust the count.

</details>

### ENT12-06. Check an identity coefficient

In the four-square identity, compute the coefficient of $b_0b_2$ and explain why it is zero.

**Hint 1.** Use the first and third coefficient columns.

**Hint 2.** The coefficient is twice their dot product.

<details><summary>Full solution</summary>

The two columns are $(a_0,a_1,a_2,a_3)$ and $(a_2,a_3,-a_0,-a_1)$. Their dot product is $a_0a_2+a_1a_3-a_2a_0-a_3a_1=0$. The corresponding mixed coefficient is therefore zero. The same pairwise calculation for the other columns, together with their equal squared lengths, proves the whole polynomial identity rather than only a numerical instance.

</details>

### ENT12-07. Produce a small prime multiple

For $p=11$, find $x,y\in\{0,1,2,3,4,5\}$ with $x^2+y^2+1$ divisible by eleven, and exhibit the corresponding four-square representation.

**Hint 1.** The squares in this interval modulo eleven are $0,1,4,9,5,3$.

**Hint 2.** Choose the residues one and nine, whose sum is minus one.

<details><summary>Full solution</summary>

Take $x=1,y=3$. Then $x^2+y^2+1=1+9+1=11$, so the construction already has multiplier one and gives $11=3^2+1^2+1^2+0^2$. The set-intersection proof guarantees some pair for every odd prime; this case happens not to need further descent. The upper-bound argument remains useful because a different prime or choice may produce a larger multiplier.

</details>

### ENT12-08. The even-multiplier parity step

Prove that an even sum of four squares can be paired so all half-sums and half-differences are integers. Show the new norm is half the old norm.

**Hint 1.** The number of odd coordinates is even.

**Hint 2.** For equal-parity $u,v$, use $((u+v)/2)^2+((u-v)/2)^2=(u^2+v^2)/2$.

<details><summary>Full solution</summary>

There are zero, two or four odd coordinates. If there are two, put them together and pair the two evens; in the other cases any pairing has equal parity. Each half-sum and half-difference is therefore integral. The displayed two-coordinate identity, applied to both pairs, halves the norm. If the old norm is $mp$ with positive even $m$, the new multiplier $m/2$ is a smaller positive integer for the same fixed prime.

</details>

### ENT12-09. Why the new multiplier is positive

In the odd-multiplier descent, prove that $r=0$ is impossible using $1<m<p$.

**Hint 1.** A zero sum of integer squares forces every centered residue to be zero.

**Hint 2.** Then $m^2$ divides the original norm $mp$.

<details><summary>Full solution</summary>

If $mr=\sum b_i^2=0$, all $b_i$ vanish. Since $a_i\equiv b_i\pmod m$, each $a_i$ is a multiple of $m$. Hence $m^2\mid\sum a_i^2=mp$, and cancellation in the integers gives $m\mid p$. Primality allows only $m=1$ or $m=p$, both excluded by the descent assumptions. Thus $r>0$, which is necessary for a contradiction to the least positive multiplier.

</details>

### ENT12-10. Make every division legal

Assume $b_i\equiv a_i\pmod m$ and $m\mid\sum a_i^2$. Show directly that each of the four product coordinates in Section 12 is divisible by $m$.

**Hint 1.** The first coordinate reduces to the norm of $a$.

**Hint 2.** The other three reduce to antisymmetric pairs of products.

<details><summary>Full solution</summary>

Modulo $m$, $c_0\equiv\sum a_i^2=0$. The next coordinates reduce respectively to $a_1a_0-a_0a_1+a_3a_2-a_2a_3$, $a_2a_0-a_3a_1-a_0a_2+a_1a_3$, and $a_3a_0+a_2a_1-a_1a_2-a_0a_3$, each zero. Thus every $c_i/m$ is an integer. The norm identity then divides by $m^2$ as an ordinary integer equality, not by assuming that $m$ is invertible modulo itself.

</details>

### ENT12-11. Three squares have a different obstruction

Prove that an integer congruent to seven modulo eight cannot be a sum of three squares. Explain why this is compatible with the four-square theorem.

**Hint 1.** Square residues modulo eight are $0,1,4$.

**Hint 2.** Count the possible odd coordinates and then the even-square contributions.

<details><summary>Full solution</summary>

An odd sum needs either one or three odd coordinates. With three, all squares are one modulo eight and the sum is three. With one, the other two squares are zero or four, giving total one or five. Neither case gives seven. Four coordinates allow a different parity pattern: for seven itself, $2^2+1^2+1^2+1^2=7$. Universality with four terms makes no claim about the minimum number of nonzero square terms.

</details>

### ENT12-12. State the descent invariant

A proposed argument replaces a representation of $mp$ by a representation of a smaller integer and declares victory. State exactly what additional facts the four-square proof needs and identify them in the construction.

**Hint 1.** The prime must remain fixed.

**Hint 2.** The new positive multiplier must be smaller, and every new coordinate integral.

<details><summary>Full solution</summary>

Minimality concerns the positive multipliers of one fixed prime $p$. The new object must therefore be a representation of $rp$ with $0<r<m$, rather than an unrelated smaller norm. Centered residues give $0\le r<m$, and the primality argument excludes zero. The signed product formulas give coordinates divisible by $m$, so dividing produces four integers of norm exactly $rp$. These facts preserve the admissible family and strictly decrease its well-ordered measure, completing the contradiction.

</details>

## Closing summary and provenance

The two-square half of this chapter adapts the earlier Euler combined Pythagorean/sums-of-squares source, whose complete source and original exercise identities remain live. Its Gaussian Euclidean proofs give the exact prime criterion and ordered signed counts. The new four-square development proves Euler's identity, the small-multiple lemma and a complete minimal-multiplier descent. Its only imported arithmetic inputs are the integer factorisation and quadratic-character results already developed in the elementary spine. The original combined source remains available for its full census and additional exercises; no program or example has been executed as part of this authorship.
