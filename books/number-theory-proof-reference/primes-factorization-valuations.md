
# Primes, Unique Factorization, and Valuations {#section-1-primes-unique-factorization-and-valuations}

Prime factorization converts multiplication into bookkeeping, but the conversion is a theorem rather than notation. Existence follows from induction; uniqueness depends on Euclid’s lemma. Valuations then record the multiplicity of one prime and turn gcd, lcm, factorial divisibility, and perfect-power questions into arithmetic of exponents.

This chapter assumes Euclid’s algorithm and Bezout’s identity. After it, you should be able to prove unique factorization without circularity, compute and use $p$-adic valuations, distinguish prime from composite hypotheses, and recognize exactly where factorization arguments cease to apply in other rings.

<a id="section-5-1-prime-and-irreducible-in-the-integers"></a>
## 1. Prime and irreducible in the integers {#section-7-1-prime-and-irreducible-in-the-integers}

A positive integer $p>1$ is **prime** when its only positive divisors are $1,p$. An integer $n>1$ is **composite** when it is not prime. The units of $\mathbb{Z}$ are $1,-1$; allowing arbitrary signs in a factorization therefore requires a unit factor.

Euclid’s lemma says that for prime $p$,

$p\mid ab \Rightarrow p\mid a \lor p\mid b$.

If $p$ does not divide $a$, then $\gcd(p,a)=1$, so the coprime product lemma gives $p\mid b$. The conclusion fails for composites: $6\mid 2*3$, while $6$ divides neither factor.

By induction, if a prime divides a product of finitely many integers, it divides at least one factor. This extended lemma is the key to uniqueness.

<a id="section-17-2-fundamental-theorem-of-arithmetic"></a>
## 2. Fundamental theorem of arithmetic {#section-19-2-fundamental-theorem-of-arithmetic}

**Theorem 3.1.** Every integer $n>1$ can be written as a product of primes, and the multiset of prime factors is unique.

Existence was proved by strong induction in Chapter 1. For uniqueness, suppose

$p_{1}\ldots p_{r}=q_{1}\ldots q_{s}$.

The prime $p_{1}$ divides the product on the right, so it equals some $q_{j}$; primes dividing primes must be associates, and positivity makes them equal. Cancel that common nonzero factor. Repeat by induction on the number of factors. Eventually both lists are exhausted together.

Thus every nonzero integer has a unique representation

$n=\varepsilon \prod_{p} p^{e_{p}}$,

where $\varepsilon$ is $1$ or $-1$, every $e_{p}$ is a nonnegative integer, and only finitely many exponents are nonzero.

<a id="section-33-logical-boundary"></a>
### Logical boundary {#section-35-logical-boundary}

Using exponent vectors to prove unique factorization would be circular unless the factorization theorem has already been established. After the theorem, exponent comparison is legitimate.

<a id="section-37-3-valuations"></a>
## 3. Valuations {#section-39-3-valuations}

For prime $p$ and nonzero integer $n$, define $v_{p}(n)$ as the largest $e\ge 0$ such that $p^e\mid n$. Set $v_{p}(0)=\infty$ only when an explicit extended convention is useful.

From unique factorization:

- $v_{p}(ab)=v_{p}(a)+v_{p}(b)$;
- $v_{p}(a/b)=v_{p}(a)-v_{p}(b)$ for nonzero rationals;
- $v_{p}(\gcd(a,b))=\min(v_{p}(a),v_{p}(b))$;
- $v_{p}(\operatorname{lcm}(a,b))=\max(v_{p}(a),v_{p}(b))$ for positive inputs.

**Ultrametric inequality.** For nonzero $a,b$ with $a+b\ne 0$,

$v_{p}(a+b)\ge \min(v_{p}(a),v_{p}(b))$.

Factor out the smaller power. If the two valuations differ, the remaining sum is not divisible by $p$, so equality holds. If they are equal, cancellation can raise the valuation: $v_{2}(3+5)=3$, although each summand has valuation zero.

<a id="section-54-worked-valuation-equation"></a>
### Worked valuation equation {#section-56-worked-valuation-equation}

Find the largest $k$ such that $12^k\mid 100!$. Since $12=2^{2}*3$, the condition is

$2k\le v_{2}(100!)$ and $k\le v_{3}(100!)$.

Legendre’s formula below gives $v_{2}(100!)=97$ and $v_{3}(100!)=48$. Thus $k\le 48$ from both inequalities, and the largest value is $48$.

<a id="section-62-4-legendre-s-formula"></a>
## 4. Legendre’s formula {#section-64-4-legendre-s-formula}

**Theorem 3.2.** For prime $p$,

$v_{p}(n!)=\left\lfloor n/p \right\rfloor+\left\lfloor n/p^{2} \right\rfloor+\left\lfloor n/p^{3} \right\rfloor+\ldots$.

Only finitely many terms are nonzero. Each multiple of $p$ contributes at least one factor; each multiple of $p^{2}$ contributes one additional factor; and so on. Counting by layers counts every prime factor exactly once.

For example,

$v_{5}(100!)=20+4=24$.

Consequently $100!$ ends in $\min(v_{2},v_{5})=24$ decimal zeros. There are far more factors of $2$ than $5$, so the fives control.

<a id="section-76-5-perfect-powers-and-squarefree-kernels"></a>
## 5. Perfect powers and squarefree kernels {#section-78-5-perfect-powers-and-squarefree-kernels}

A positive integer $n$ is a square exactly when every $v_{p}(n)$ is even. More generally it is a $k$th power exactly when $k\mid v_{p}(n)$ for every prime $p$.

The **squarefree kernel** of $n$ is the product of primes occurring to odd exponent. Then $n=d m^{2}$ with positive squarefree $d$ and positive $m$, uniquely. Example:

$756=2^{2}*3^{3}*7=21*6^{2}$.

This decomposition explains why $\sqrt{n}=m \sqrt{d}$ and isolates the irrational part.

<a id="section-86-6-gcd-and-lcm-as-coordinate-operations"></a>
## 6. Gcd and lcm as coordinate operations {#section-88-6-gcd-and-lcm-as-coordinate-operations}

If

$a=\prod p^{\alpha_{p}}$ and $b=\prod p^{\beta_{p}}$,

then gcd takes coordinatewise minima and lcm coordinatewise maxima. Hence for positive $a,b$,

$\gcd(a,b)\operatorname{lcm}(a,b)=ab$,

because $\min(\alpha,\beta)+\max(\alpha,\beta)=\alpha+\beta$ at each prime.

For several integers, pairwise coprimality means no prime occurs in two different exponent vectors. Collective gcd one says only that no prime occurs in all of them. The distinction matters in CRT and product-divisibility arguments.

<a id="section-100-7-factorization-outside-the-integers"></a>
## 7. Factorization outside the integers {#section-102-7-factorization-outside-the-integers}

The proof of uniqueness used the prime-divides-a-product property. In an arbitrary integral domain, an **irreducible** element need not have that property. A unique factorization domain is precisely a setting where elements admit unique irreducible factorizations up to order and units.

In $\mathbb{Z}[\sqrt{-5}]$,

\[6=2*3=(1+\sqrt{-5})(1-\sqrt{-5})\]

exhibits factorization failure; later chapters make the irreducibility claims precise and repair arithmetic using ideals. The lesson is scoped: the fundamental theorem belongs to $\mathbb{Z}$, not automatically to every ring of algebraic integers.

<a id="section-110-exercises-with-complete-solutions"></a>
## 8. The logical chain from Bezout to uniqueness {#section-398-8-the-logical-chain-from-bezout-to-uniqueness}
The prime-divides-a-product property should be proved before any use of exponent vectors. Let $p>1$ be a positive prime and let $a,b$ be arbitrary integers, allowing negative values and zero. If $p\nmid a$, every positive common divisor of $p,a$ is either 1 or $p$, and the latter is impossible. Thus $\gcd(p,a)=1$. Choose integers $u,v$ with $up+va=1$. Multiplying by $b$ gives $b=upb+vab$. If $p\mid ab$, both terms on the right are divisible by $p$, so $p\mid b$. This is Euclid's lemma derived from Bezout, with no appeal to unique factorization.

For a finite nonempty product, the one-factor case is immediate. For two factors use the lemma. For more factors, separate the first factor from the remaining product and induct. For the empty product, the value is 1 and no prime divides it, so the implication's premise is false. These boundaries matter when a uniqueness proof eventually cancels every factor from one side.

Existence can likewise be made independent of uniqueness. Every integer $n>1$ has a prime divisor: take the least divisor greater than one. If it were composite, one of its proper factors greater than one would be a smaller divisor of $n$, a contradiction. Strong induction now factors $n$: if it is prime stop; otherwise write $n=ab$ with $1<a,b<n$ and factor both smaller positive integers. The decreasing positive inputs guarantee termination.

For uniqueness, compare two prime products representing the same positive integer. A prime in the first list divides at least one prime in the second list by the already proved propagation lemma. It must equal that positive prime, because a prime has no other positive divisor greater than one. Cancel the common nonzero integer and repeat. If only one list became empty, the remaining product of integers at least two would equal 1, which is impossible. Thus both lists end together, with the same factors and multiplicities.

For negative integers, apply this result to the absolute value and then record the sign separately. The integers 1 and $-1$ have empty prime lists and their respective unit signs. Zero has no such representation and cannot be inserted into this cancellation argument: a zero product would not allow cancellation of its zero factor.

This establishes the dependency chain. Bezout proves the prime lemma; the lemma proves uniqueness; only then do valuations provide coordinates. A computation that first assumes well-defined exponents and later uses them to justify uniqueness has reversed that chain. The equations may look familiar, but their logical order is part of the proof.

<a id="section-409-9-divisibility-coordinates-have-signed-and-rational-dom"></a>
## 9. Divisibility coordinates have signed and rational domains {#section-411-9-divisibility-coordinates-have-signed-and-rational-dom}
For nonzero integers, prime exponents ignore the sign: $v_p(-a)=v_p(a)$ because multiplication by $-1$ adds no prime factor. Unique factorization gives $v_p(ab)=v_p(a)+v_p(b)$. It follows that, for nonzero integers $a,b$,
\[
a\mid b\quad\Longleftrightarrow\quad
v_p(a)\le v_p(b)\text{ for every positive prime }p.
\]
For necessity, write $b=ac$ with nonzero integer $c$ and use nonnegative integer exponents for $c$. Conversely, the coordinate inequalities make $b/a$ a sign times a finite product of nonnegative prime powers, hence an integer. The possible sign is a unit and poses no obstruction to divisibility.

The word “every” is essential. For $a=12$ and $b=18$, the exponent of 3 is adequate but that of 2 is not: $2>1$. Checking one chosen prime proves only one local condition. In contrast, after factoring $a$, only its finitely many prime divisors need checking for $a\mid b$; primes absent from $a$ have required exponent zero automatically.

Zero is a separate domain case. Every integer divides zero, including zero itself, while zero divides no nonzero integer. Thus an exact divisibility decision can first handle $a=0$ or $b=0$, then use exponent inequalities for the nonzero case. One may define $v_p(0)=\infty$ for a specific extended argument, but zero does not have the finite-support exponent vector of a nonzero integer. In particular, $\infty-\infty$ is not a valid way to cancel a zero numerator and denominator.

For a nonzero rational $x=a/b$, with nonzero integers $a,b$, define $v_p(x)=v_p(a)-v_p(b)$. To check that this is a function of $x$, suppose $a/b=c/d$. Then $ad=bc$, so product valuations give $v_p(a)+v_p(d)=v_p(b)+v_p(c)$. Rearranging proves independence of the fraction chosen. Rational valuations may be negative, and still have finite support.

A nonzero rational number is an integer exactly when all its valuations are nonnegative. For a direct proof of the difficult direction, reduce the fraction to coprime numerator and positive denominator. Any denominator greater than one has a prime divisor, whose valuation in the numerator is zero and in the denominator positive, contradicting the hypothesis. For example, $18/50=9/25$ has valuations $v_2=0,v_3=2,v_5=-2$; the canceled factor 2 must not be counted as a surviving obstruction.

This rational extension explains why factorial quotients can be studied before their integrality is known. One can compute valuations of a nonzero rational expression, prove all are nonnegative, and then conclude integrality. It would be circular to assume the quotient was an integer merely to define the test.

<a id="section-427-10-the-minimum-rule-for-sums-has-an-exact-cancellation-"></a>
## 10. The minimum rule for sums has an exact cancellation term {#section-429-10-the-minimum-rule-for-sums-has-an-exact-cancellation-}
Take nonzero integers $a,b$ with $a+b\ne0$, and put $r=v_p(a)$, $s=v_p(b)$. If $r<s$, write $a=p^ru$ and $b=p^sv$, with $p\nmid u,v$. Then
\[
a+b=p^r(u+p^{s-r}v).
\]
The parenthesis is not divisible by $p$: otherwise subtracting its divisible second term would show $p\mid u$. Hence $v_p(a+b)=r$. The argument also works for negative $u$ or $v$; divisibility, rather than an order comparison of the summands, is decisive.

When $r=s$, the exact formula is
\[
v_p(a+b)=r+v_p(u+v),
\]
provided $u+v\ne0$. The normalized summands are individually not divisible by $p$, but their sum may be. Thus equal input valuations identify where cancellation is possible; they do not specify how much cancellation occurs.

For example, $-54=-2\cdot3^3$ and $135=5\cdot3^3$. Their sum is $3^3(-2+5)=3^4$, so its 3-adic valuation is four, one higher than either input valuation. At prime 5, $50+75=5^2(2+3)=5^3$ gives the same mechanism. The sign of an integer summand can change the residue of the normalized unit and therefore change the extra exponent.

The increase can be arbitrarily large. For any prime $p$ and integer $N\ge1$, take $a=1$ and $b=p^N-1$. Neither is divisible by $p$, but their sum is $p^N$, of valuation $N$. No upper bound depending only on the common input valuation zero is therefore possible. By contrast, if the two input valuations differ, the equality at their minimum is forced.

For $a+b=0$, the original finite valuation is undefined. If an argument explicitly adopts $v_p(0)=\infty$, the inequality still has a sensible ordered meaning; its proof should not turn that symbol into an ordinary integer exponent. For instance, $a$ and $-a$ can cancel completely, while neither has infinite valuation.

A useful local impossibility principle follows. If two nonzero integers have unequal $p$-valuations, their sum cannot be zero and cannot be divisible by a power higher than the smaller valuation. In a proposed equation $x+y=z$, a single prime with such incompatible exponents can refute the equation. This is a local obstruction with a proof; passing several such tests alone is not a general existence theorem for a Diophantine equation.

<a id="section-448-11-gcd-and-lcm-follow-their-universal-divisibility-prop"></a>
## 11. Gcd and lcm follow their universal divisibility properties {#section-450-11-gcd-and-lcm-follow-their-universal-divisibility-prop}
Let $a,b$ be nonzero integers, with signs allowed. Define the positive integer $d$ by prime exponents $\min(v_p(a),v_p(b))$. It divides both inputs. If $c$ is any common divisor, its absolute-value exponents are bounded by both input exponent lists, hence by their minima, so $c\mid d$. This proves the universal gcd property, not merely a numerical recipe. In particular $d$ is the positive greatest common divisor.

Likewise define the positive integer $L$ by the coordinatewise maxima. Both $a,b$ divide $L$. Every nonzero common multiple has exponents at least those maxima, so it is divisible by $L$; zero is also divisible by $L$ directly. This proves the universal lcm property. For signed nonzero inputs the familiar product identity reads $dL=|ab|$, because signs were deliberately removed from the positive gcd and lcm.

For example, $a=-360=-2^3 3^2 5$ and $b=252=2^2 3^2 7$ give $d=2^2 3^2=36$ and $L=2^3 3^2 5\cdot7=2520$. Both divisibility directions can be checked directly: $-360=-10d$, $252=7d$, $L=-7a=10b$. The identity $36\cdot2520=|(-360)252|$ provides a further check, but it does not replace the prime-exponent proof of the universal statements.

These results extend to finite lists of positive integers using minima and maxima at each prime. Collective gcd one requires each prime to be absent from at least one list member. Pairwise coprimality requires it to occur in at most one member. For $12,18,35$, the collective gcd is one while the first pair has gcd six. Thus a collective condition cannot justify multiplying overlapping moduli as though they were pairwise coprime.

Minima and maxima also yield a distributive identity needed for repeated CRT merges:
\[
\gcd(\operatorname{lcm}(a_1,\ldots,a_r),n)
=\operatorname{lcm}(\gcd(a_1,n),\ldots,\gcd(a_r,n))
\]
for positive inputs. At a fixed prime, this is
$\min(\max_i e_i,f)=\max_i\min(e_i,f)$. Choose an index attaining the finite maximum; its minimum with $f$ is at least every other minimum, proving equality. Unique factorization then returns equality of the positive integers.

The hypotheses keep zero conventions out of this formula. The notation guide defines the positive lcm for nonzero inputs; no expression involving an undefined lcm of zero is needed. In the next chapter every modulus is positive, so the distributive identity applies even when some moduli equal one, whose exponent coordinates are all zero.


The same coordinates give an exact divisor count. If $n>0$ has exponents $e_p$, a positive divisor chooses an exponent independently from $0,\ldots,e_p$ for each prime. Existence and uniqueness of factorization make this a bijection, so the number of positive divisors is $\prod_p(e_p+1)$. At $n=1$ the empty product is one, corresponding to its sole positive divisor. Zero instead has infinitely many positive divisors and is outside this finite formula.

For $n=144=2^4 3^2$, the count is $5\cdot3=15$. Pair a divisor $d$ with $n/d$. Every pair has two distinct members except when $d^2=n$. This gives another proof that the positive divisor count is odd exactly when $n$ is a square. In exponent coordinates, the product $\prod(e_p+1)$ is odd exactly when every $e_p$ is even, agreeing with the perfect-square test.

For a signed nonzero input, positive divisors are those of its absolute value. Thus this parity test characterizes whether the absolute value is a square; a negative integer is not thereby an integer square. Every positive divisor also gives a negative one, so the total number of signed divisors is twice the positive count. Specifying what is counted prevents a factor-of-two ambiguity from becoming a mistaken arithmetic conclusion.

<a id="section-474-12-factorial-valuations-count-a-finite-set-of-prime-lay"></a>
## 12. Factorial valuations count a finite set of prime layers {#section-476-12-factorial-valuations-count-a-finite-set-of-prime-lay}
For $n\ge0$ and prime $p$, every factor $i$ in $n!$ contributes one count for each power $p^j$ dividing it. Explicitly,
\[
v_p(n!)=\sum_{i=1}^n\sum_{j\ge1}1_{\{p^j\mid i\}}
=\sum_{j\ge1}\left\lfloor n/p^j\right\rfloor.
\]
The sums are finite: if $p^j>n$, no positive factor $i\le n$ is divisible by $p^j$. Thus reversing the count introduces no convergence or measure-theory assumption. When $n=0$, the empty product is $0!=1$ and both sides are zero.

The layers distinguish a common undercount. Counting only multiples of $p$ counts the first factor of $p$ in each, but $p^2$ contributes an additional one, $p^3$ two additional ones, and so forth. A term divisible by $p^e$ appears in exactly the first $e$ layers, matching its exact valuation.

There is a digit form of the same calculation. Write $n=\sum_{j=0}^s d_jp^j$, where $0\le d_j<p$, and put $s_p(n)=\sum_jd_j$. Then $\lfloor n/p^k\rfloor=\sum_{j\ge k}d_jp^{j-k}$. Summing the finite geometric sums gives
\[
v_p(n!)=\frac{n-s_p(n)}{p-1}.
\]
The denominator is a positive ordinary integer, and the derivation proves that the numerator is divisible by it. This formula does not introduce division in a field of characteristic $p$.

For $n=25$ and $p=3$, the base-three digits are $221$, whose sum is five. Thus the valuation is $(25-5)/2=10$, agreeing with $8+2$ from the layer count. The corresponding values at 2 and 5 are $12+6+3+1=22$ and $5+1=6$.

To find trailing zeros in an arbitrary integer base $B=\prod p^{c_p}>1$, ask for the largest $k$ with $B^k\mid n!$. The answer is
\[
\min_{p\mid B}\left\lfloor\frac{v_p(n!)}{c_p}\right\rfloor.
\]
For base $18=2\cdot3^2$ and $25!$, the limiting requirement is $\min(22,\lfloor10/2\rfloor)=5$. Five base-18 zeros are possible; a sixth would require twelve factors of 3, while only ten occur. This gives both a positive divisibility certificate and a precise obstruction to improving the claimed maximum.

<a id="section-498-13-factorial-quotients-reveal-integrality-and-carries"></a>
## 13. Factorial quotients reveal integrality and carries {#section-500-13-factorial-quotients-reveal-integrality-and-carries}
Fix integers $n\ge0$ and $0\le k\le n$. Treat $n!/(k!(n-k)!)$ initially as a nonzero rational number. The factorial formula gives
\[
v_p\!\left(\frac{n!}{k!(n-k)!}\right)
=\sum_{j\ge1}\left(
\left\lfloor n/p^j\right\rfloor
-\left\lfloor k/p^j\right\rfloor
-\left\lfloor(n-k)/p^j\right\rfloor\right).
\]
Because $n=k+(n-k)$, each summand is zero or one: the floor of a sum differs from the sum of the floors by the floor of the two fractional parts, which lies in $\{0,1\}$. Every prime valuation is therefore nonnegative. The rational-integrality criterion from Section 9 proves that this factorial quotient is an integer. This route does not assume its combinatorial interpretation to justify the valuation calculation.

Using digit sums instead yields
\[
v_p\binom nk
=\frac{s_p(k)+s_p(n-k)-s_p(n)}{p-1}.
\]
Here $\binom nk$ names the now-proved integral quotient. Adding the base-$p$ digit columns explains the numerator. If $c_j$ is the carry from column $j$ to the next column, the digit equation is $a_j+b_j+c_{j-1}=d_j+pc_j$, with initial carry zero. Summing over all columns, including a final zero column if necessary, gives
$s_p(k)+s_p(n-k)-s_p(n)=(p-1)\sum_jc_j$.
For addition of two numbers each carry is zero or one. Thus the valuation equals the number of carry events.

For $\binom{10}{4}$ at prime 3, the layer formula gives $(3-1-2)+(1-0-0)=1$. In base three, $4=11$ and $6=20$ add to $10=101$: the middle column creates one carry. Accordingly, $\binom{10}{4}=210$ is divisible by 3 but not by 9. The table of floors and the digit explanation check the same valuation in two different ways.

This reasoning has two useful boundaries. First, it concerns a specified nonzero factorial quotient with integer indices in range; negative factorials have not been defined. Second, a statement about one prime does not prove the entire integer factorization or a divisibility claim at a composite modulus. To prove divisibility by $\prod p^{c_p}$, every required prime inequality must hold. Conversely, one failed inequality supplies a complete rejection certificate.

At $k=0$ or $k=n$, the quotient is one and all carries disappear because one summand is zero. The formulas include those endpoints without a special limiting argument. Their exactness comes from finite counting, integer division and the already established multiplicative valuation rule.

<a id="section-524-14-perfect-powers-separate-exponent-conditions-from-sig"></a>
## 14. Perfect powers separate exponent conditions from signs {#section-526-14-perfect-powers-separate-exponent-conditions-from-sig}
Let $q$ be a nonzero rational and $h\ge1$ an integer. A rational $h$th root exists exactly when every $v_p(q)$ is divisible by $h$ and, when $h$ is even, $q$ is positive. Necessity follows by taking valuations of $y^h=q$ and checking the sign of an even power. For sufficiency, divide the finitely many exponents by $h$ and form their prime product, allowing negative exponents for a denominator. Choose its sign to match $q$ when $h$ is odd. This constructs the rational root explicitly.

The sign condition cannot be recovered from the valuation list: $1$ and $-1$ both have all prime valuations zero. Yet $-1$ is not a square in $Q$. For odd $h$, a negative sign is permitted. Zero also has an $h$th root, namely zero, but is handled directly rather than by dividing infinite valuations.

For a positive integer $n$ and fixed $h\ge1$, the least positive integer multiplier $M$ making $nM$ an $h$th power has exponents
\[
v_p(M)\equiv-v_p(n)\pmod h,\qquad 0\le v_p(M)<h.
\]
For primes not dividing $n$, choose exponent zero. This constructs an admissible multiplier. Any other admissible positive multiplier has the same exponent congruences with nonnegative exponents, so each is at least the displayed least residue. Thus $M$ divides every admissible multiplier and is the least positive one, not merely one small example.

For $n=2^5\cdot3\cdot5^4$ and $h=3$, the missing exponent amounts are $1,2,2$. Hence $M=2\cdot3^2\cdot5^2=450$, and
$nM=2^6 3^3 5^6=(2^2\cdot3\cdot5^2)^3=300^3$.
No additional prime can reduce this multiplier; its exponent would add a new nonnegative requirement rather than repair an old one.

For the squarefree decomposition, write each exponent uniquely as $e_p=2b_p+\epsilon_p$, with $\epsilon_p\in\{0,1\}$. Then $d=\prod p^{\epsilon_p}$ is positive and squarefree, and $m=\prod p^{b_p}$ is positive, giving $n=dm^2$. Exponent parity fixes $d$, and the remaining halved exponents fix positive $m$. At $n=1$, both products are empty, so $d=m=1$. Requiring positive $m$ removes the otherwise unavoidable alternative $-m$.

For a negative integer, the appropriate signed statement is $n=-d m^2$ with positive $d,m$. If the task instead asks whether a positive multiplier can make a negative number an even power, the answer is no regardless of exponent corrections. These domain distinctions are part of the theorem, not exceptions to be repaired by a numerical guess.

<a id="section-543-exercises-prime-and-valuation-extensions"></a>

## Summary

<a id="section-395-chapter-summary"></a>
Unique factorization rests on Euclid’s lemma. Once established, prime-exponent vectors make multiplicative structure exact: products add valuations, gcd and lcm take minima and maxima, and factorial multiplicities are counted layer by layer. Equality in the valuation inequality has a precise condition, while cancellation can raise valuations when the inputs have equal order.
<a id="section-396-8-the-logical-chain-from-bezout-to-uniqueness"></a>

## Exercises {#section-112-exercises-with-complete-solutions}

<a id="section-112-1-prime-divisor-propagation"></a>
### 1. Prime divisor propagation {#section-114-1-prime-divisor-propagation}

If prime $p\mid a_{1}\ldots a_{n}$, prove $p\mid a_{i}$ for some $i$.

**Hint 1.** Apply Euclid's prime-product lemma to the first factor and the remaining product.

**Hint 2.** Induct on the number of factors.

<details><summary>Full solution</summary>

**Solution.** Induct on $n$. The case $n=2$ is Euclid’s lemma. For larger $n$, apply it to $a_{1}$ and $a_{2}\ldots a_{n}$; in the second branch apply the induction hypothesis.

</details>

<a id="section-126-2-composite-failure"></a>
### 2. Composite failure {#section-128-2-composite-failure}

Give two counterexamples to “if $m\mid ab$, then $m\mid a$ or $m\mid b$” with composite $m$.

**Hint 1.** Split a composite divisor into factors carried by different inputs.

**Hint 2.** Use two different composite moduli to make the omitted prime premise visible.

<details><summary>Full solution</summary>

**Solution.** $6\mid 2*3$ but divides neither factor. Also $12\mid 4*6=24$ but $12$ divides neither $4$ nor $6$.

</details>

<a id="section-140-3-factorization"></a>
### 3. Factorization {#section-142-3-factorization}

Factor $27720$.

**Hint 1.** Remove powers of two and three first.

**Hint 2.** Continue with the remaining smallest prime divisors until the residual factor is prime.

<details><summary>Full solution</summary>

**Solution.** Repeated division gives $27720=2772*10=(2^{2}*3^{2}*7*11)(2*5)=2^{3}*3^{2}*5*7*11$.

</details>

<a id="section-154-4-divisor-count"></a>
### 4. Divisor count {#section-156-4-divisor-count}

How many positive divisors has $27720$?

**Hint 1.** A divisor chooses each prime exponent independently.

**Hint 2.** Multiply one more than every exponent in the prime factorisation.

<details><summary>Full solution</summary>

**Solution.** A divisor chooses exponents $0..3$, $0..2$, and $0..1$ for each of $5,7,11$. The count is $(3+1)(2+1)2^{3}=96$.

</details>

<a id="section-168-5-gcd-and-lcm"></a>
### 5. Gcd and lcm {#section-170-5-gcd-and-lcm}

Find $\gcd(756,1260)$ and $\operatorname{lcm}(756,1260)$.

**Hint 1.** Write the prime factorisation of each input.

**Hint 2.** Take exponent minima for the gcd and maxima for the lcm.

<details><summary>Full solution</summary>

**Solution.** $756=2^{2}*3^{3}*7$; $1260=2^{2}*3^{2}*5*7$. Minima give $2^{2}*3^{2}*7=252$; maxima give $2^{2}*3^{3}*5*7=3780$.

</details>

<a id="section-182-6-a-valuation-of-a-sum"></a>
### 6. A valuation of a sum {#section-184-6-a-valuation-of-a-sum}

Compute $v_{3}(81+54)$.

**Hint 1.** Factor the sum before counting powers of three.

**Hint 2.** The summands have different valuations, so the minimum rule applies.

<details><summary>Full solution</summary>

**Solution.** The sum is $135=3^{3}*5$, so the valuation is $3$. The summand valuations are $4$ and $3$; because they differ, the minimum rule predicts equality at $3$.

</details>

<a id="section-196-7-cancellation-raises-valuation"></a>
### 7. Cancellation raises valuation {#section-198-7-cancellation-raises-valuation}

Find $a,b$ with $v_{5}(a)=v_{5}(b)=0$ but $v_{5}(a+b)\ge 3$.

**Hint 1.** Choose one input equal to one.

**Hint 2.** Make the second input one less than a large power of five.

<details><summary>Full solution</summary>

**Solution.** Take $a=1,b=124$; neither is divisible by $5$, while $a+b=125=5^{3}$.

</details>

<a id="section-210-8-factorial-valuation"></a>
### 8. Factorial valuation {#section-212-8-factorial-valuation}

Compute $v_{7}(100!)$.

**Hint 1.** Count multiples of seven, forty-nine and higher powers.

**Hint 2.** Each level contributes one further copy of the prime.

<details><summary>Full solution</summary>

**Solution.** Legendre gives $\left\lfloor 100/7 \right\rfloor+\left\lfloor 100/49 \right\rfloor=14+2=16$.

</details>

<a id="section-224-9-trailing-zeros-in-base-twelve"></a>
### 9. Trailing zeros in base twelve {#section-226-9-trailing-zeros-in-base-twelve}

How many trailing base-12 zeros has $100!$?

**Hint 1.** Factor the base twelve as four times three.

**Hint 2.** The trailing-zero count is the minimum of half the two-adic valuation and the three-adic valuation, with an integer floor.

<details><summary>Full solution</summary>

**Solution.** Each zero consumes $12=2^{2}*3$. From $v_{2}=97$ and $v_{3}=48$, the count is $\min(\left\lfloor 97/2 \right\rfloor,48)=48$.

</details>

<a id="section-238-10-binomial-integrality-valuation"></a>
### 10. Binomial integrality valuation {#section-240-10-binomial-integrality-valuation}

Show $v_{p}((2n choose n))\ge 0$.

**Hint 1.** Write the valuation as the difference of the three factorial valuations.

**Hint 2.** At every prime-power level, the floor of twice a number minus twice its floor is nonnegative.

<details><summary>Full solution</summary>

**Solution.** Legendre gives the valuation as a sum over $k\ge 1$ of $\left\lfloor 2n/p^k \right\rfloor-2\left\lfloor n/p^k \right\rfloor$. Each term is $0$ or $1$ because $\left\lfloor 2x \right\rfloor\ge 2\left\lfloor x \right\rfloor$. Hence the sum is nonnegative.

</details>

<a id="section-252-11-perfect-square-test"></a>
### 11. Perfect square test {#section-254-11-perfect-square-test}

Find the least positive $m$ such that $540m$ is a square.

**Hint 1.** Factor 540 and inspect odd exponents.

**Hint 2.** Multiply by exactly the primes whose exponent parity needs repair.

<details><summary>Full solution</summary>

**Solution.** $540=2^{2}*3^{3}*5$. Odd exponents occur at $3,5$; multiply by $15$ to obtain $2^{2}*3^{4}*5^{2}=(2*3^{2}*5)^{2}$. Thus $m=15$.

</details>

<a id="section-266-12-perfect-cube-test"></a>
### 12. Perfect cube test {#section-268-12-perfect-cube-test}

Find the least $m>0$ such that $72m$ is a cube.

**Hint 1.** Factor 72 and reduce each exponent modulo three.

**Hint 2.** Add the smallest nonnegative exponent that reaches a multiple of three.

<details><summary>Full solution</summary>

**Solution.** $72=2^{3}*3^{2}$. The exponent of $2$ is already divisible by $3$; the exponent of $3$ needs one more. Thus $m=3$.

</details>

<a id="section-280-13-irrationality"></a>
### 13. Irrationality {#section-282-13-irrationality}

Prove $\sqrt{18}$ is irrational.

**Hint 1.** Clear a hypothetical rational denominator.

**Hint 2.** The exponent of two or three in the square equality gives a parity contradiction.

<details><summary>Full solution</summary>

**Solution.** $18=2*3^{2}$, so its squarefree kernel is $2$ and $\sqrt{18}=3\sqrt{2}$. If this were rational, division by $3$ would make $\sqrt{2}$ rational, contrary to Chapter 1.

</details>

<a id="section-294-14-divisibility-of-powers"></a>
### 14. Divisibility of powers {#section-296-14-divisibility-of-powers}

If $a^n\mid b^n$ for positive $n$ and nonzero integers $a,b$, prove $a\mid b$.

**Hint 1.** Compare valuations of the two powered integers.

**Hint 2.** Divide every exponent inequality by the positive exponent.

<details><summary>Full solution</summary>

**Solution.** For every prime $p$, $n v_{p}(a)\le n v_{p}(b)$, hence $v_{p}(a)\le v_{p}(b)$. Thus the exponent vector of $a$ is coordinatewise bounded by that of $b$.

</details>

<a id="section-308-15-coprime-square-product"></a>
### 15. Coprime square product {#section-310-15-coprime-square-product}

If $\gcd(a,b)=1$ and $ab$ is a square, prove both $a,b$ are squares for positive $a,b$.

**Hint 1.** A prime cannot divide both coprime factors.

**Hint 2.** Its even exponent in the product must therefore already be even in the one factor containing it.

<details><summary>Full solution</summary>

**Solution.** No prime occurs in both. Each exponent in the product therefore equals the exponent in exactly one factor and is even. All exponents in each factor are even.

</details>

<a id="section-322-16-consecutive-factorial-ratio"></a>
### 16. Consecutive factorial ratio {#section-324-16-consecutive-factorial-ratio}

Compute $v_{2}(32!)-v_{2}(16!)$.

**Hint 1.** Use Legendre's finite floor sums for the two factorials.

**Hint 2.** Alternatively count powers of two in the product from seventeen through thirty-two.

<details><summary>Full solution</summary>

**Solution.** The values are $(16+8+4+2+1)=31$ and $(8+4+2+1)=15$; the difference is $16$. Equivalently it is $v_{2}(17*\ldots*32)$.

</details>

<a id="section-336-17-infinite-primes-of-a-type"></a>
### 17. Infinite primes of a type {#section-338-17-infinite-primes-of-a-type}

Prove infinitely many primes are not in a fixed finite list.

**Hint 1.** Form the product of the listed primes and add one.

**Hint 2.** Any prime divisor of the new positive integer is outside the list.

<details><summary>Full solution</summary>

**Solution.** For listed primes $p_{1},\ldots,p_{r}$, every prime divisor of $p_{1}\ldots p_{r}+1$ is absent from the list. Repeating after adjoining a new divisor constructs arbitrarily many distinct primes.

</details>

<a id="section-350-18-valuation-equality-condition"></a>
### 18. Valuation equality condition {#section-352-18-valuation-equality-condition}

Prove if $v_{p}(a)<v_{p}(b)$, then $v_{p}(a+b)=v_{p}(a)$.

**Hint 1.** Factor out the smaller power of the prime.

**Hint 2.** The remaining bracket is a unit because exactly one term is nonzero modulo the prime.

<details><summary>Full solution</summary>

**Solution.** Write $a=p^r u$, $b=p^s v$ with $r<s$ and $p$ dividing neither $u$ nor $v$. Then $a+b=p^r(u+p^{s-r}v)$. The parenthesis is not divisible by $p$, so the valuation is $r$.

</details>

<a id="section-364-19-factorization-audit"></a>
### 19. Factorization audit {#section-366-19-factorization-audit}

Why can uniqueness cancel $p_{1}=q_{j}$ without assuming the theorem being proved?

**Hint 1.** Euclid's lemma locates a matching prime before cancellation.

**Hint 2.** Cancellation is ordinary nonzero integer cancellation, not an assumption of factorisation uniqueness.

<details><summary>Full solution</summary>

**Solution.** Equality follows from Euclid’s lemma and the definition of prime: $p_{1}\mid q_{j}$, so the only positive divisors of prime $q_{j}$ force $p_{1}=1$ or $q_{j}$; since $p_{1}>1$, equality holds. Ordinary integer cancellation is already established.

</details>

<a id="section-378-20-squarefree-decomposition"></a>
### 20. Squarefree decomposition {#section-380-20-squarefree-decomposition}

Find the squarefree kernel of $105840$.

**Hint 1.** Factor the integer and separate even exponents from odd ones.

**Hint 2.** The squarefree part retains precisely the primes of odd valuation.

<details><summary>Full solution</summary>

**Solution.** $105840=2^{4}*3^{3}*5*7^{2}$. Odd exponents occur for $3,5$, so the kernel is $15$, and $105840=15*84^{2}$.

</details>


<a id="section-393-chapter-summary"></a>

<a id="section-545-exercises-prime-and-valuation-extensions"></a>
### 21. NTP-03-E21. Certify the largest factorial power {#section-546-ntp-03-e21-certify-the-largest-factorial-power}

Find the largest integer $j\ge0$ such that $72^j\mid30!$. Give the two controlling prime valuations and a specific obstruction to increasing $j$ by one.

**Hint 1.** Factor seventy-two as two cubed times three squared.

**Hint 2.** Take the smaller of the corresponding factorial-valuation quotients, then identify the prime that blocks the next exponent.

<a id="section-552-ntp-03-e22-a-signed-rational-power-certificate"></a>
### 22. NTP-03-E22. A signed rational power certificate {#section-554-ntp-03-e22-a-signed-rational-power-certificate}

Determine whether $-1728/125$ is a cube in $Q$ and whether it is a square in $Q$. Use its prime valuations and sign, and supply a root when one exists.

**Hint 1.** Inspect valuations in the reduced rational number and retain its negative sign.

**Hint 2.** Odd powers allow a negative root, while a rational square cannot be negative.

<a id="section-560-solutions-prime-and-valuation-extensions"></a>

## Solutions: Prime and valuation extensions {#section-562-solutions-prime-and-valuation-extensions}
<a id="section-561-ntp-03-e21-certify-the-largest-factorial-power-solution"></a>
### NTP-03-E21. Certify the largest factorial power — solution {#section-563-ntp-03-e21-certify-the-largest-factorial-power-solution}

<details><summary>Full solution</summary>

Since $72=2^3 3^2$, the conditions are $3j\le v_2(30!)$ and $2j\le v_3(30!)$. The layer sums give $v_2=15+7+3+1=26$ and $v_3=10+3+1=14$. Thus $j\le\min(\lfloor26/3\rfloor,\lfloor14/2\rfloor)=7$. At $j=7$, the required exponents 21 and 14 are available. At $j=8$, the required exponent of 3 is 16, exceeding 14, so $72^8$ does not divide the factorial.

</details>

<a id="section-569-ntp-03-e22-a-signed-rational-power-certificate-solution"></a>
### NTP-03-E22. A signed rational power certificate — solution {#section-571-ntp-03-e22-a-signed-rational-power-certificate-solution}

<details><summary>Full solution</summary>

The rational number is $-2^6 3^3 5^{-3}$. Its nonzero prime valuations are $6,3,-3$, all divisible by three, and an odd power allows a negative sign. Its cube root is $-2^2\cdot3/5=-12/5$, whose cube is the given number. It is not a rational square because it is negative; its odd valuation at 3 also independently violates the square exponent condition. The denominator valuation is included rather than ignored.

</details>

