var e=`---
parent_id: book-algorithms-computation-proof-desk
chapter_id: modular-arithmetic-number-theory-computing
title: "Modular Arithmetic and Number Theory for Computing"
level: undergraduate
license: "CC BY-SA 4.0"
---

# Modular Arithmetic and Number Theory for Computing {#section-1-modular-arithmetic-and-number-theory-for-computing}

A computer often represents a large mathematical object by a small integer code. Remainders give cyclic array positions, checksums, arithmetic in finite rings and efficient power calculations. Their usefulness depends on exact hypotheses: cancellation can fail, division need not exist, and a congruence that every prime satisfies need not certify primality. This chapter develops the number theory needed to make those claims precise.

Integers are exact mathematical integers unless a machine representation is explicitly named. Natural numbers include zero. A modulus $m$ is a positive integer; whenever units or Euler's theorem are discussed we assume $m\\ge2$. For integers $a,b$, write $a\\mid b$ if $b=ak$ for some integer $k$. Negative divisors are allowed, but greatest common divisors are chosen nonnegative. We take $\\gcd(0,0)=0$; whenever a positive gcd or a modular inverse is required, the relevant inputs are not both zero.

<a id="section-5-remainders-and-euclid-s-algorithm"></a>
## Remainders and Euclid's algorithm {#section-7-remainders-and-euclid-s-algorithm}

**Theorem 5.1 (Division with remainder).** For $a\\in\\mathbb Z$ and positive $b$, there are unique integers $q,r$ satisfying $a=qb+r$ and $0\\le r<b$.

*Proof.* The integers of the form $a-kb$ that are nonnegative form a nonempty set: taking $k$ sufficiently negative produces a positive value. Choose its least member $r=a-qb$. If $r\\ge b$, then $r-b=a-(q+1)b$ would be a smaller nonnegative member, contradiction. For uniqueness, two representations give $(q-q')b=r'-r$. The right side has absolute value less than $b$; the only multiple of positive $b$ in that range is zero. Thus $q=q'$ and $r=r'$. ∎

Euclid's algorithm first replaces its two inputs by their absolute values, then repeatedly replaces $(a,b)$ with $(b,r)$, where $r=a\\bmod b$, until $b=0$. The sets of common divisors are unchanged: a divisor of $a,b$ divides $a-qb=r$, and a divisor of $b,r$ divides $qb+r=a$. The second coordinate strictly decreases while positive, so the algorithm terminates. At the end, the common divisors are precisely the divisors of the first coordinate. Except in the all-zero case, that coordinate is the positive gcd.

The proof separates an invariant from a variant. Preservation of common divisors gives correctness if the run finishes; the decreasing nonnegative second coordinate proves that it does finish. These are different obligations, even for a familiar algorithm.

**Theorem 5.2 (Bézout).** If $a,b$ are not both zero and $d=\\gcd(a,b)$, there are integers $s,t$ with $sa+tb=d$.

*Proof.* In Euclid's algorithm each current remainder is an integer linear combination of the original inputs. This holds initially with coefficient pairs $(1,0)$ and $(0,1)$, adjusted for any initial signs. If $r_i=s_i a+t_i b$ and $r_{i+1}=s_{i+1}a+t_{i+1}b$, then $r_i-q r_{i+1}$ has coefficient pair $(s_i-q s_{i+1},t_i-q t_{i+1})$. Induction preserves the assertion through every division. The last nonzero remainder is $d$, so its pair gives the required identity. ∎

A useful consequence is the coprime cancellation lemma: if $\\gcd(a,m)=1$ and $m\\mid ax$, multiply a Bézout identity $sa+tm=1$ by $x$. Both terms on the left are divisible by $m$, so $m\\mid x$. This elementary inference will justify inverses, the Chinese remainder theorem and Euler's theorem.

**Worked example 5.3 (An extended Euclidean trace).** Compute the gcd of $240$ and $46$:
$$240=5\\cdot46+10,\\quad46=4\\cdot10+6,\\quad10=6+4,\\quad6=4+2,\\quad4=2\\cdot2.$$
The gcd is $2$. Reverse the equations:
$$2=6-4=2\\cdot6-10=2\\cdot46-9\\cdot10=47\\cdot46-9\\cdot240.$$
The last equality is an explicit certificate: substitution gives $2162-2160=2$. Every common divisor divides the displayed combination, and $2$ divides both original inputs. Thus the certificate proves the gcd claim independently of trusting the sequence of divisions. Merely finding a common divisor would not prove it greatest.

<a id="section-27-congruence-and-legitimate-cancellation"></a>
## Congruence and legitimate cancellation {#section-29-congruence-and-legitimate-cancellation}

For positive $m$, define $a\\equiv b\\pmod m$ by $m\\mid(a-b)$. It is an equivalence relation. Adding congruences and multiplying them preserves the relation because sums and products of multiples remain multiples. Consequently residue classes form a ring under the operations induced by integer addition and multiplication. Each class has one representative in $\\{0,\\ldots,m-1\\}$ by division with remainder.

Cancellation is restricted. The congruence $2\\cdot1\\equiv2\\cdot4\\pmod6$ is true, while $1\\not\\equiv4\\pmod6$. If $g=\\gcd(c,m)$, the correct statement is
$$ca\\equiv cb\\pmod m\\quad\\Longleftrightarrow\\quad a\\equiv b\\pmod{m/g}.$$
Indeed write $c=gc'$ and $m=gm'$ with $\\gcd(c',m')=1$. Divisibility of $c(a-b)$ by $m$ is equivalent to divisibility of $c'(a-b)$ by $m'$, and coprime cancellation gives $m'\\mid a-b$. The reverse implication follows by multiplication. In particular cancellation keeps the same modulus precisely when $c$ is a unit modulo $m$.

A residue $a$ is a unit if some integer $u$ satisfies $au\\equiv1\\pmod m$. Such a unit exists exactly when $\\gcd(a,m)=1$. Bézout supplies it in the forward construction. Conversely $au-km=1$ forces any common divisor of $a,m$ to divide one. The inverse class is unique: multiply two proposed inverse equations by the other inverse, or cancel the unit to identify them.

**Worked example 5.4 (Solving instead of dividing blindly).** To solve $17x\\equiv6\\pmod{43}$, Euclid gives
$$43=2\\cdot17+9,\\quad17=9+8,\\quad9=8+1,$$
so $1=2\\cdot43-5\\cdot17$. Thus $17^{-1}\\equiv-5\\equiv38$, and $x\\equiv38\\cdot6=228\\equiv13$. Checking $17\\cdot13=221=5\\cdot43+6$ confirms the answer. By contrast $6x\\equiv3\\pmod{12}$ has no solution, because any $6x-12k$ is divisible by six whereas three is not. A remainder ring is not automatically a field; the gcd decides which division steps are legitimate.

<a id="section-41-prime-factors-and-totients"></a>
## Prime factors and totients {#section-43-prime-factors-and-totients}

A prime is an integer $p\\ge2$ whose positive divisors are only $1,p$. If $p\\mid ab$ and $p\\nmid a$, then $\\gcd(p,a)=1$, so coprime cancellation gives $p\\mid b$. This is Euclid's prime-divisor lemma, not an assumption that products behave like real numbers under division.

Every integer $n\\ge2$ factors into primes: strong induction handles the case where $n$ is prime directly; otherwise $n=ab$ with $2\\le a,b<n$, and the induction factorizations concatenate. Uniqueness follows from the prime-divisor lemma. A first prime in one factorization divides the product in the other, hence equals one of its primes. Cancel the equal positive factor as an integer equality and repeat. The unordered list of prime factors, counted with multiplicity, is unique.

For $m\\ge2$, Euler's totient $\\varphi(m)$ counts residues $r\\in\\{0,\\ldots,m-1\\}$ with $\\gcd(r,m)=1$. A prime $p$ has $\\varphi(p)=p-1$. For a positive exponent $k$, precisely the $p^{k-1}$ multiples of $p$ among the $p^k$ residues fail to be coprime, giving $\\varphi(p^k)=p^k-p^{k-1}$. The formula depends on the prime-divisor lemma: any common divisor greater than one has a prime factor, and the only prime factor of $p^k$ is $p$.

**Theorem 5.5 (Chinese remainder theorem, coprime form).** If positive $m,n$ are coprime, each pair of residues modulo $m,n$ comes from exactly one residue modulo $mn$.

*Proof.* Choose $u,v$ with $um+vn=1$. For desired residues $a,b$, set $x=a(vn)+b(um)$. Modulo $m$ this equals $a$, and modulo $n$ it equals $b$. If $x,x'$ are two solutions, their difference is divisible by both $m,n$. Write $x-x'=mk$; since $n\\mid mk$ and $m,n$ are coprime, cancellation gives $n\\mid k$. Thus $mn\\mid x-x'$, proving uniqueness of the class. ∎

The bijection preserves addition and multiplication. A class modulo $mn$ is invertible exactly when both component classes are invertible: an inverse maps to component inverses, and component inverses lift to an inverse by existence and uniqueness. For coprime $m,n\\ge2$, counting units therefore gives $\\varphi(mn)=\\varphi(m)\\varphi(n)$. Applying this repeatedly to the prime-power factorization yields $\\varphi(N)=N\\prod_{p\\mid N}(1-1/p)$ for $N\\ge2$, with the product over its distinct prime factors.

**Worked example 5.6 (Two clocks).** Solve $x\\equiv3\\pmod5$ and $x\\equiv4\\pmod7$. Since $3\\cdot5-2\\cdot7=1$, the construction gives $x=3(-2\\cdot7)+4(3\\cdot5)=18$. Every solution is $18+35k$. Uniqueness is modulo $35$, not uniqueness as an integer. The same coprimality gives $\\varphi(35)=4\\cdot6=24$. For moduli $4,6$, the coprime theorem would not apply: requirements $x\\equiv0\\pmod4$ and $x\\equiv1\\pmod6$ already contradict parity. An explicit counterexample is better than applying the formula outside its hypotheses.

<a id="section-57-euler-s-theorem-and-efficient-powers"></a>
## Euler's theorem and efficient powers {#section-59-euler-s-theorem-and-efficient-powers}

**Theorem 5.7 (Euler).** If $m\\ge2$ and $\\gcd(a,m)=1$, then $a^{\\varphi(m)}\\equiv1\\pmod m$.

*Proof.* List the unit classes as $r_1,\\ldots,r_k$, where $k=\\varphi(m)$. Multiplication by the unit $a$ permutes them: it maps units to units, and multiplication by its inverse is the inverse map. Hence
$$a^k r_1\\cdots r_k\\equiv r_1\\cdots r_k\\pmod m.$$
The product on the right is a unit, since the product of the inverses gives its inverse. Cancel that unit to obtain $a^k\\equiv1$. ∎

For prime $p$, this gives $a^{p-1}\\equiv1$ when $p\\nmid a$, and $a^p\\equiv a$ for every integer $a$ after separately considering $p\\mid a$. The converse is false. For example $341=11\\cdot31$ is composite, while $2^{10}=1024\\equiv1\\pmod{341}$, so $2^{340}\\equiv1$. Passing one Fermat congruence is therefore not a certificate of primality, much less a theorem of cryptographic security.

To compute $a^N\\bmod m$ for $N\\ge0$, keep residues $r,b$ and a nonnegative exponent $e$, initially $r=1$, $b=a\\bmod m$, $e=N$. Maintain
$$r b^e\\equiv a^N\\pmod m.$$
If $e$ is odd, replace $r$ by $rb\\bmod m$ and reduce $e$ by one. For the now even exponent, square $b$ modulo $m$ and halve $e$. The invariant is preserved by associativity and the power rules, and $e$ decreases while positive. At zero it gives the output residue. For $N=0$, return $1\\bmod m$, including the modulus-one case. There are $O(\\log(N+1))$ modular multiplications, rather than $N$ successive multiplications; this counts arithmetic operations, not their bit cost.

**Worked example 5.8 (A power without expanding it).** Modulo $17$, successive squares give $3^2\\equiv9$, $3^4\\equiv13$, $3^8\\equiv16$. Since $13=8+4+1$, multiply the relevant residues: $3^{13}\\equiv16\\cdot13\\cdot3=624\\equiv12$. Every intermediate reduction preserves the final class. The calculation has not assumed $3$ is a primitive root or used a floating-point power. Keeping the exponent's binary decomposition visible explains both the correctness and the logarithmic operation count.

<a id="section-73-computing-claims-and-their-boundaries"></a>
## Computing claims and their boundaries {#section-75-computing-claims-and-their-boundaries}

Euclid has logarithmically many remainder steps. If consecutive positive remainders are $b,r$, then either $r\\le b/2$, or the next remainder is $b-r<b/2$ because the quotient is one. Thus within two steps the relevant positive size at least halves. Extended Euclid carries coefficient updates through those same steps. Actual bit complexity must also charge divisions and growing coefficient representations; a bound on the number of divisions is not a bound on their unit bit cost.

A modulus can distribute table indices, but the function $h(x)=x\\bmod m$ is not a collision-resistant hash. Inputs differing by $m$ collide immediately. A checksum can detect some changes without providing authentication. Number-theoretic correctness, probability of accidental error and adversarial security are different statements. Later cryptographic sources can add their own models; this L2 chapter supplies exact arithmetic foundations without asserting those extra conclusions.

<a id="section-79-exercises"></a>
## Exercises {#section-81-exercises}

<a id="section-81-exercise-5-1"></a>
### Exercise 5.1 {#section-83-exercise-5-1}
<a id="modular-arithmetic-number-theory-computing-ex-1"></a>
Find the Euclidean quotient and remainder of $-17$ by $5$.

<details>
<summary>Hint 1</summary>

The remainder must be nonnegative and smaller than five.

</details>
<details>
<summary>Hint 2</summary>

Try a quotient one smaller than $-3$.

</details>
<details>
<summary>Solution</summary>

We have $-17=(-4)5+3$, so the quotient is $-4$ and the remainder is $3$. Using quotient $-3$ would leave remainder $-2$, outside the required range. Uniqueness follows because two allowed remainders differ by a multiple of five with absolute value less than five, hence by zero. A programming language that truncates division toward zero may initially produce a negative remainder; its representation convention must be translated before invoking the Euclidean remainder theorem.

</details>

<a id="section-104-exercise-5-2"></a>
### Exercise 5.2 {#section-106-exercise-5-2}
<a id="modular-arithmetic-number-theory-computing-ex-2"></a>
Compute $\\gcd(252,198)$ and give a Bézout certificate.

<details>
<summary>Hint 1</summary>

The first three remainders are $54,36,18$.

</details>
<details>
<summary>Hint 2</summary>

Substitute backwards from $18=54-36$.

</details>
<details>
<summary>Solution</summary>

The divisions are $252=198+54$, $198=3\\cdot54+36$, $54=36+18$ and $36=2\\cdot18$. Therefore the gcd is $18$. Back substitution gives $18=54-(198-3\\cdot54)=4\\cdot54-198=4\\cdot252-5\\cdot198$. Both inputs are divisible by eighteen, and every common divisor divides that linear combination, proving maximality. The identity is a certificate that can be verified by integer arithmetic even if the producer's division trace is unavailable.

</details>

<a id="section-127-exercise-5-3"></a>
### Exercise 5.3 {#section-129-exercise-5-3}
<a id="modular-arithmetic-number-theory-computing-ex-3"></a>
Solve $8x\\equiv4\\pmod{12}$ and explain why ordinary cancellation by eight would be invalid.

<details>
<summary>Hint 1</summary>

Divide the entire integer divisibility statement by the gcd four.

</details>
<details>
<summary>Hint 2</summary>

Solve $2x\\equiv1\\pmod3$.

</details>
<details>
<summary>Solution</summary>

The congruence means $12\\mid8x-4$, equivalently $3\\mid2x-1$. The inverse of two modulo three is two, so $x\\equiv2\\pmod3$. As residues modulo twelve these are $2,5,8,11$, and substitution verifies each. Eight is not a unit modulo twelve because their gcd is four; cancellation must change the modulus or retain an appropriate divisibility condition. An equation claiming one unique solution modulo twelve would lose three legitimate residue classes.

</details>

<a id="section-150-exercise-5-4"></a>
### Exercise 5.4 {#section-152-exercise-5-4}
<a id="modular-arithmetic-number-theory-computing-ex-4"></a>
Find the inverse of $7$ modulo $26$ and use it to solve $7x\\equiv5\\pmod{26}$.

<details>
<summary>Hint 1</summary>

$26=3\\cdot7+5$, $7=5+2$, $5=2\\cdot2+1$.

</details>
<details>
<summary>Hint 2</summary>

Back substitution gives $1=3\\cdot26-11\\cdot7$.

</details>
<details>
<summary>Solution</summary>

The identity makes $-11\\equiv15$ an inverse of seven. Multiply the congruence by fifteen to obtain $x\\equiv75\\equiv23\\pmod{26}$. Directly, $7\\cdot23=161=6\\cdot26+5$. If two solutions existed, subtracting and multiplying by the inverse would show their difference divisible by twenty-six, so the class is unique. The existence of the inverse follows from coprimality; it was not justified merely by writing a fraction $5/7$ in a remainder ring.

</details>

<a id="section-173-exercise-5-5"></a>
### Exercise 5.5 {#section-175-exercise-5-5}
<a id="modular-arithmetic-number-theory-computing-ex-5"></a>
Solve $x\\equiv2\\pmod3$ and $x\\equiv3\\pmod5$ and prove the modulus of uniqueness.

<details>
<summary>Hint 1</summary>

Inspect the integers congruent to two modulo three.

</details>
<details>
<summary>Hint 2</summary>

A difference between solutions is divisible by both three and five.

</details>
<details>
<summary>Solution</summary>

The number eight satisfies both congruences, so all numbers $8+15k$ do as well. If $x$ is another solution, $x-8$ is divisible by three and by five. Write $x-8=3t$; coprimality makes $5\\mid t$, giving $15\\mid x-8$. Thus the solutions are exactly that residue class modulo fifteen. Listing several small solutions demonstrates existence but not this uniqueness statement; the divisibility argument is what covers every integer.

</details>

<a id="section-196-exercise-5-6"></a>
### Exercise 5.6 {#section-198-exercise-5-6}
<a id="modular-arithmetic-number-theory-computing-ex-6"></a>
Compute $\\varphi(72)$ from its prime-power factorization and list the nonunits condition.

<details>
<summary>Hint 1</summary>

$72=8\\cdot9$ with coprime factors.

</details>
<details>
<summary>Hint 2</summary>

A residue fails to be a unit exactly when divisible by two or three.

</details>
<details>
<summary>Solution</summary>

We have $\\varphi(8)=8-4=4$ and $\\varphi(9)=9-3=6$, so multiplicativity gives $\\varphi(72)=24$. Equivalently among the seventy-two residues, thirty-six are divisible by two and twenty-four by three, with twelve divisible by both. Removing their union leaves $72-36-24+12=24$. The criterion uses the complete prime factorization: a common divisor greater than one must contain either prime two or prime three. The count does not rely on guessing which fractions can be simplified.

</details>

<a id="section-219-exercise-5-7"></a>
### Exercise 5.7 {#section-221-exercise-5-7}
<a id="modular-arithmetic-number-theory-computing-ex-7"></a>
Compute $5^{13}\\bmod23$ by repeated squaring.

<details>
<summary>Hint 1</summary>

Use $13=8+4+1$.

</details>
<details>
<summary>Hint 2</summary>

The square residues are $2,4,16$ for exponents two, four and eight.

</details>
<details>
<summary>Solution</summary>

Modulo twenty-three, $5^2=25\\equiv2$, $5^4\\equiv4$, and $5^8\\equiv16$. Hence $5^{13}\\equiv16\\cdot4\\cdot5=320\\equiv21$, since $320-13\\cdot23=21$. Each multiplication can be followed immediately by a remainder operation without changing the final class. The decomposition uses only logarithmically many square-and-multiply stages in the exponent. It does not justify treating arbitrarily large multiplications as constant-bit-cost operations; that is a separate model choice.

</details>

<a id="section-242-exercise-5-8"></a>
### Exercise 5.8 {#section-244-exercise-5-8}
<a id="modular-arithmetic-number-theory-computing-ex-8"></a>
Explain why $341$ passing the base-two Fermat congruence is no primality proof.

<details>
<summary>Hint 1</summary>

Exhibit its two nontrivial factors.

</details>
<details>
<summary>Hint 2</summary>

$2^{10}=3\\cdot341+1$.

</details>
<details>
<summary>Solution</summary>

The factorization $341=11\\cdot31$ proves compositeness. Nevertheless $2^{10}\\equiv1\\pmod{341}$, and raising to the thirty-fourth power gives $2^{340}\\equiv1$. Thus the implication from prime input to Fermat congruence has no converse for a single base. This example is coprime to the chosen base, so the false converse cannot be rescued by merely adding coprimality. A primality procedure needs a separate correctness theorem; a familiar necessary condition or an observed successful run does not supply one.

</details>

<a id="section-265-exercise-5-9"></a>
### Exercise 5.9 {#section-267-exercise-5-9}
<a id="modular-arithmetic-number-theory-computing-ex-9"></a>
Show that $h(x)=x\\bmod101$ has easily constructed collisions and distinguish a checksum claim from authentication.

<details>
<summary>Hint 1</summary>

Compare $x$ with $x+101$.

</details>
<details>
<summary>Hint 2</summary>

An adversary can choose a change preserving the remainder.

</details>
<details>
<summary>Solution</summary>

For every integer $x$, $x+101\\equiv x\\pmod{101}$, so these distinct inputs collide. The pair can be produced directly without a search. A checksum based on this remainder may detect changes that alter the residue, but it cannot guarantee detecting deliberately chosen changes of a multiple of 101. Authentication would require a statement about an adversary's ability to forge valid messages under a defined security model. Neither the arithmetic correctness of remainder computation nor a low accidental collision rate establishes that statement.

</details>

<a id="section-288-exercise-5-10"></a>
### Exercise 5.10 {#section-290-exercise-5-10}
<a id="modular-arithmetic-number-theory-computing-ex-10"></a>
Prove every composite integer $N\\ge2$ has a divisor $d$ with $2\\le d\\le\\sqrt N$, and explain the bit-length limitation of trial division.

<details>
<summary>Hint 1</summary>

Write $N=ab$ with both factors greater than one.

</details>
<details>
<summary>Hint 2</summary>

Both factors cannot exceed the square root.

</details>
<details>
<summary>Solution</summary>

Since $N$ is composite, write $N=ab$ with $a,b\\ge2$. If both exceeded $\\sqrt N$, their product would exceed $N$, contradiction. The smaller factor is therefore an integer in the stated range. Testing every such candidate correctly decides primality, with the special cases below two excluded first. But the binary length of $N$ is about $\\log_2N$, and $\\sqrt N$ can be exponential in that length. The procedure's finite correctness does not make it an efficient polynomial-time primality algorithm under binary encoding. This separates a termination-and-correctness proof from a representation-sensitive complexity claim.

</details>

<a id="section-311-sources"></a>
## Sources {#section-313-sources}

New text for the twelve-chapter Mathematics for Computer Science route. The prerequisite [Introduction to Proof](/books/library-book-introduction-to-proof/) develops divisibility and modular proof methods. Eric Lehman, F. Thomson Leighton and Albert R. Meyer, [*Mathematics for Computer Science*](https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-spring-2015/resources/mit6_042js15_textbook_pdf/), MIT, is an author-written reference for number theory in computing. All arithmetic arguments and exercises used here are developed in the chapter.

<a id="section-315-summary"></a>
## Summary {#section-317-summary}

Euclidean division gives canonical remainders, and Euclid's decreasing remainder proves termination while preserving common divisors. Extended coefficients provide Bézout certificates, modular inverses and valid cancellation conditions. Prime factorization, coprime CRT and unit counting yield totients; permuting units proves Euler's theorem. Repeated squaring computes powers with logarithmically many arithmetic stages. Each computational conclusion retains its modulus, coprimality, representation and cost assumptions.
`;export{e as default};