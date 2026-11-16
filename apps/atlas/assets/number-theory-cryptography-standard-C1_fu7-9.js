var e=`---
id: course-number-theory-cryptography-standard
title: "Number theory"
level: undergraduate
estimated_minutes: 900
license: CC BY-SA 4.0
---

# Number theory

<!-- euler-course-route -->

## Current course route

Use the [current chapter syllabus](/courses/atlas-number-theory-cryptography-standard/) for the ordered readings, preparation courses and exercises. The earlier explanations and worked tasks below retain their original identities and remain available for study and saved work.

This course develops integer arithmetic as a proof subject and then asks exactly how its algorithms enter cryptography. The mathematical spine is divisibility, congruence, Diophantine equations, arithmetic functions, primes, number fields, and curves. The cryptographic spine is definitions: a correct algebraic transformation becomes a primitive only after key generation and encodings are specified, and becomes a secure scheme only relative to an adversarial experiment and assumptions.

Prerequisites are integer arithmetic, algebra, and basic proof language (including divisibility and implication). If the diagnostic is unfamiliar, first work through the [Euclid and Bézout chapter](#/item/book-number-theory-proof-reference?chapter=division-euclid-bezout); the explorer entry supplies a gentler route. Units 1–6 give the proof core of this course. Units 7–12 introduce further methods and theorem boundaries; their linked chapters supply sustained treatments.

## Entry diagnostic and 15-hour route

Before Unit 1:

1. Compute $\\gcd(84,30)$ and express it as $84x+30y$.
2. Solve $3x\\equiv1\\pmod 7$.
3. Negate “every integer greater than one is prime.”
4. Explain why observing that $a^{p-1}\\equiv1\\pmod p$ for ten values of $a$
   does not prove that $p$ is prime.

The answers are $6=84(-1)+30(3)$; $x\\equiv5\\pmod7$; “some integer
greater than one is composite”; and finite tests do not prove a universally
quantified converse to Fermat’s theorem. Repair proof and congruence basics
before the cryptographic units.

The pure proof route is completed by the Units 1–6 checkpoints, the Units 1–6 proof assessment, and the pure mathematics capstone. Stages 3–4 extend this core into further pure topics; Stage 5 and the cryptography outcomes are optional. Use these five stages to plan the full resource:

| Stage | Units | Sustained reading | Evidence for the chosen stage |
| --- | --- | --- | --- |
| 1. Integer certificates | 1–4 | [Euclid and Bézout](#/item/book-number-theory-proof-reference?chapter=division-euclid-bezout), [factorization](#/item/book-number-theory-proof-reference?chapter=primes-factorization-valuations), and [congruences and CRT](#/item/book-number-theory-proof-reference?chapter=congruences-linear-equations-crt) | Extended-gcd trace, solvability proof, and generalized CRT certificate |
| 2. Finite multiplicative structure | 5–6 | [Orders and exponent theorems](#/item/book-number-theory-proof-reference?chapter=units-orders-exponent-theorems), [quadratic reciprocity](#/item/book-number-theory-proof-reference?chapter=quadratic-residues-reciprocity), and [arithmetic functions](#/item/book-number-theory-proof-reference?chapter=arithmetic-functions-convolution-inversion) | Order computation and a Möbius-inversion derivation |
| 3. Diophantine reasoning | 7–8 | [Linear Diophantine equations](#/item/book-number-theory-proof-reference?chapter=linear-diophantine-lattices), [continued fractions and Pell equations](#/item/book-number-theory-proof-reference?chapter=continued-fractions-pell), and [local obstructions](#/item/book-number-theory-proof-reference?chapter=descent-valuations-local-obstructions) | One parametrization, one obstruction, and one approximation proof |
| 4. Arithmetic horizons | 9–11 | [Euler products](#/item/book-number-theory-proof-reference?chapter=dirichlet-series-euler-products), [number fields](#/item/book-number-theory-proof-reference?chapter=number-fields-norms-prime-ideals), and [elliptic curves](#/item/book-number-theory-proof-reference?chapter=elliptic-curves-group-descent) | A theorem boundary sheet separating proved, quoted, and open claims |
| 5. Optional cryptographic boundary | 12, exercises, capstone | [Algorithms and cryptographic boundaries](#/item/book-number-theory-proof-reference?chapter=algorithms-certificates-crypto-boundaries) | Exact arithmetic implementation plus a security-definition audit |

## Outcomes

By the end you should be able to:

- prove gcd, factorization, congruence, and CRT claims with certificates;
- solve linear congruences and diagnose precisely when cancellation fails;
- compute multiplicative functions using prime powers and convolution;
- use congruences, descent, parametrization, and approximation on Diophantine equations;
- state algebraic, analytic, and elliptic-curve results with their hypotheses;
- **Optional cryptography outcome:** implement repeated squaring, extended Euclid, generalized CRT, and tiny curve arithmetic;
- **Optional cryptography outcome:** separate correctness, hardness assumptions, and formal security definitions.

## Unit 1 — divisibility and Euclid’s algorithm

For integers $a,b$ with $a\\ne0$, write $a\\mid b$ if $b=ak$ for some
integer $k$. Divisibility is transitive, and any integer combination of
multiples of $d$ remains a multiple of $d$.

For integers $a,b$ not both zero, $\\gcd(a,b)$ is the positive common divisor divisible by every other common divisor. When $b\\ne0$, division with remainder gives

$a=bq+r$, $0\\le r<|b|$,

and $\\gcd(a,b)=\\gcd(b,r)$: a number divides both $a,b$ exactly when it divides both $b,r=a-bq$. The remainders strictly decrease until one is zero, so Euclid’s algorithm terminates. Reversing the divisions expresses its last nonzero remainder as an integer combination of $a,b$. This proves Bézout’s identity: for some integers $u,v$,

$$au+bv=g,\\qquad g=\\gcd(a,b).$$

Why is this a certificate? Every common divisor divides $au+bv=g$, while $g$ divides both inputs. It also classifies **every** solution of a linear equation, not just one found by search.

**Linear Diophantine classification.** Let $a,b\\in\\mathbb Z$ be not both zero and $c\\in\\mathbb Z$. The equation $ax+by=c$ has an integer solution exactly when $g\\mid c$. Necessity follows because $g$ divides each term. For sufficiency, multiply $au+bv=g$ by $c/g$ to obtain $(x_0,y_0)=((c/g)u,(c/g)v)$. All solutions, with no repetitions, are

$$x=x_0+(b/g)t,\\qquad y=y_0-(a/g)t,\\qquad t\\in\\mathbb Z.$$

The displayed pairs solve the equation. Conversely, for another solution set $A=a/g$, $B=b/g$, $X=x-x_0$, $Y=y-y_0$. Then $AX+BY=0$ and there are integers $U,V$ with $UA+VB=1$. Set $t=VX-UY$. Using $AX=-BY$ gives $Bt=X$ and $-At=Y$. This argument also covers $a=0$ or $b=0$; the assumption that they are not both zero is essential. Finally, $a$ has an inverse modulo a **positive** modulus $m$ exactly when $\\gcd(a,m)=1$, since $ax+my=1$ is precisely the inverse certificate.

**Worked example.** Euclid gives

$252=1\\cdot 198+54$, $198=3\\cdot 54+36$, $54=1\\cdot 36+18$.

Thus the gcd is 18. Back substitution yields

$18=54-36=4\\cdot 54-198=4\\cdot 252-5\\cdot 198$.

Every common divisor divides the right side, so this is also a maximality certificate.

**Checkpoint.** Before using a formula, decide whether $252x+198y=36$ is solvable and give all its solutions. *Hint:* Scale the certificate for 18, then move along the zero-sum direction. *Solution:* $36=2(4\\cdot252-5\\cdot198)$ gives $(8,-10)$. Since $252/18=14$ and $198/18=11$, all pairs are $(8+11t,-10-14t)$ for $t\\in\\mathbb Z$. Substitution gives 36; the classification proof shows no others exist.

## Unit 2 — primes and unique factorization

A prime $p$ is an integer greater than 1 whose only positive divisors are
$1,p$. Euclid’s lemma says

$p | ab \\Longrightarrow p | a \\text{ or } p | b$.

One proof uses Bézout: if $p\\nmid a$, then $\\gcd(p,a)=1$, so
$px+ay=1$; multiplying by $b$ shows $p\\mid b$ whenever $p\\mid ab$.

The fundamental theorem of arithmetic follows: every integer $n>1$ is a product of primes, uniquely apart from order. Existence is strong induction: a nonprime $n$ has a factorization $n=ab$ with $1<a,b<n$, so apply the induction hypothesis to both. For uniqueness, a prime in one factorization divides the product in the other, so Euclid’s lemma matches it with an equal prime; cancel and induct. The result makes prime-power data a reliable way to compute arithmetic functions in Unit 6.

The sieve of Eratosthenes lists primes through $N$ by crossing out multiples.
Trial division tests $n$ using possible divisors only through $\\sqrt n$: if
$n=ab$ and both factors exceeded $\\sqrt n$, their product would exceed $n$.
These methods are mathematically exact but not the fastest algorithms at
cryptographic scale.

**Worked check.** $84=2^2\\cdot3\\cdot7$ and $30=2\\cdot3\\cdot5$, hence their gcd is $2\\cdot3=6$. The Bézout certificate $84(-1)+30(3)=6$ independently confirms the result. A proposed “proof” that $p\\mid ab$ implies $p\\mid a$ because division by $b$ is allowed is invalid: division modulo $p$ requires $p\\nmid b$. Euclid’s lemma handles both cases.

**Checkpoint.** Is $91$ prime? *Hint:* Trial division needs primes only through $\\sqrt{91}<10$. *Solution:* $91=7\\cdot13$, so it is composite. Tests by 2, 3, and 5 alone would have missed it; 7 supplies a factorization certificate.

## Unit 3 — congruence and linear equations

For $m>0$,

$a\\equiv b\\pmod m$ if and only if $m\\mid(a-b)$.

Congruence is an equivalence relation compatible with addition and
multiplication. The residue classes form the ring
$\\mathbb Z/m\\mathbb Z$. A class $[a]$ is a unit exactly when
$\\gcd(a,m)=1$.

The linear congruence $ax\\equiv b\\pmod m$ is the Diophantine equation $ax-my=b$ with $y\\in\\mathbb Z$. Thus, for $m>0$, it is solvable exactly when $g=\\gcd(a,m)$ divides $b$. When it does, divide **the coefficients and the modulus** by $g$:

$$ (a/g)x\\equiv b/g\\pmod{m/g}. $$

Now $a/g$ is a unit modulo $m/g$, so this has a unique class $x_0\\pmod{m/g}$. Exactly $g$ distinct classes modulo $m$ lift it:

$$x\\equiv x_0+k(m/g)\\pmod m,\\qquad k=0,1,\\ldots,g-1.$$

They are distinct because no difference $(k-\\ell)m/g$ with $0<|k-\\ell|<g$ is divisible by $m$. This count includes $m=1$, where there is one residue class.

**Example.** Solve $14x\\equiv8\\pmod{20}$. The gcd is 2, which divides 8. Divide to obtain $7x\\equiv4\\pmod{10}$. Since $7^{-1}\\equiv3\\pmod{10}$, $x\\equiv12\\equiv2\\pmod{10}$. Thus modulo 20 the two solutions are 2 and 12. Direct substitution checks both: $14(2)-8=20$ and $14(12)-8=160$.

Cancellation rule: from $ca\\equiv cb\\pmod m$, one may conclude
$a\\equiv b\\pmod{m/\\gcd(c,m)}$. Cancellation modulo the original $m$ requires
$c$ to be a unit.

**Failure diagnosis.** From $6x\\equiv6\\pmod{15}$, cancelling 6 *modulo 15* would assert $x\\equiv1\\pmod{15}$. But $\\gcd(6,15)=3$, so the justified conclusion is $2x\\equiv2\\pmod5$, or $x\\equiv1\\pmod5$. The actual classes modulo 15 are 1, 6, and 11; for instance $6(6)-6=30$ is divisible by 15. A coefficient can be cancelled at the original modulus only when it is a unit.

**Checkpoint.** Solve $8x\\equiv12\\pmod{20}$ completely. *Hint:* Count classes before computing one. *Solution:* $g=4$ divides 12, so $2x\\equiv3\\pmod5$. The inverse of 2 is 3 modulo 5, giving $x\\equiv4\\pmod5$. The four classes modulo 20 are $4,9,14,19$; each differs from 4 by a multiple of 5, and there are no more by the lifting proof.

## Unit 4 — the generalized Chinese remainder theorem

For pairwise coprime **positive** moduli $m_{1},\\ldots ,m_{k}$, the map

$$
\\mathbb Z/(m_{1}\\cdots m_{k})\\mathbb Z
\\longrightarrow
\\mathbb Z/m_{1}\\mathbb Z\\times\\cdots\\times\\mathbb Z/m_{k}\\mathbb Z
$$

sending a residue to its component residues is a ring isomorphism. To solve
two congruences, find $u,v$ with $um+vn=1$; then

$x = b\\cdot um + a\\cdot vn$

has x≡a modulo m and x≡b modulo n.

For arbitrary **positive** $m,n$, the system $x\\equiv a\\pmod m$, $x\\equiv b\\pmod n$ is consistent exactly when

$$a\\equiv b\\pmod{\\gcd(m,n)}.$$

**Proof and construction.** Write $x=a+mt$. The second congruence becomes $mt\\equiv b-a\\pmod n$. Unit 3 proves that this has a solution exactly when $g=\\gcd(m,n)$ divides $b-a$. After division by $g$, $m/g$ is invertible modulo $n/g$, so $t$ is unique modulo $n/g$. Consequently $x$ is unique modulo $m(n/g)=\\operatorname{lcm}(m,n)$. Equivalently, two solutions differ by a multiple of both moduli, hence by their lcm. This includes the coprime construction above, where $g=1$.

**Worked example.** Solve $x\\equiv2\\pmod6$ and $x\\equiv5\\pmod9$. Both residues are 2 modulo $g=3$. With $x=2+6t$, the second condition is $6t\\equiv3\\pmod9$, hence $2t\\equiv1\\pmod3$, so $t\\equiv2\\pmod3$. Therefore $x\\equiv14\\pmod{18}$; indeed 14 leaves remainders 2 and 5. Replacing 5 by 4 makes the system impossible, since 2 and 4 differ modulo 3. A search that has not yet found a solution is not an inconsistency proof; the gcd test is.

For a finite family of positive moduli $m_i$, pairwise compatibility $a_i\\equiv a_j\\pmod{\\gcd(m_i,m_j)}$ is necessary and sufficient, and a solution is unique modulo $\\operatorname{lcm}(m_1,\\ldots,m_k)$. To see sufficiency, for each prime $p$ in the lcm, choose an input modulus containing the largest power $p^e$ and retain its **residue condition modulo $p^e$**. Every weaker condition for that prime agrees with it by pairwise compatibility. These retained prime-power moduli, one for each distinct prime, are pairwise coprime, so ordinary CRT combines them. The resulting number satisfies every original congruence because each original modulus is the product of its prime-power factors. This also explains why uniqueness uses the lcm rather than the product when moduli overlap.

**Checkpoint.** Solve $x\\equiv5\\pmod8$, $x\\equiv11\\pmod{14}$, then change the second residue to 10. *Hint:* Compare parity first, then put $x=5+8t$. *Solution:* In the first system both residues are odd. $8t\\equiv6\\pmod{14}$ reduces to $4t\\equiv3\\pmod7$; since $4^{-1}\\equiv2\\pmod7$, $t\\equiv6\\pmod7$. Thus $x\\equiv53\\pmod{56}$, and 53 leaves remainder 11 modulo 14. With 10 instead, odd and even residues disagree modulo $\\gcd(8,14)=2$, so no solution exists.

## Unit 5 — powers, orders, and quadratic residues

Euler’s theorem states: if $n>1$ and $\\gcd(a,n)=1$, then

$a^{\\varphi(n)}\\equiv1\\pmod n$,

where $\\varphi(n)$ counts units modulo $n$. Lagrange’s theorem proves this
inside the finite group $(\\mathbb Z/n\\mathbb Z)^\\times$. Fermat’s little
theorem is the prime case: for prime $p$,
$a^p\\equiv a\\pmod p$ for every $a$, and
$a^{p-1}\\equiv1\\pmod p$ when $p\\nmid a$.

For $n>1$, the **order** of a unit $a$ modulo $n$ is the least positive $r$ with $a^r\\equiv1\\pmod n$. Some such exponent exists by Euler’s theorem. More precisely, if $a^k\\equiv1\\pmod n$ and $k=qr+s$ with $0\\le s<r$, then $1\\equiv(a^r)^q a^s\\equiv a^s\\pmod n$. Minimality forces $s=0$, so **$r\\mid k$**. Taking $k=\\varphi(n)$ proves $r\\mid\\varphi(n)$; equality is not guaranteed. This division argument is the reason an order computation must prove minimality, not merely exhibit one exponent.

A compact **minimality certificate** for a proposed $r$ consists of $a^r\\equiv1\\pmod n$ and $a^{r/q}\\not\\equiv1\\pmod n$ for every distinct prime $q\\mid r$. Indeed, if the true order were a proper divisor $d$ of $r$, some prime $q$ would divide $r/d$, and then $a^{r/q}\\equiv1$, a contradiction. Repeated squaring computes each modular power using $O(\\log e)$ modular multiplications for exponent $e$.

**Worked example.** Modulo 9, the unit 2 satisfies $2^6=64\\equiv1$, while $2^{6/2}=8\\not\\equiv1$ and $2^{6/3}=4\\not\\equiv1$. Thus its order is exactly 6. In contrast, 3 is not a unit modulo 9; its powers cannot be assigned a unit-group order. In fact every positive power of 3 is 0 or 3 modulo 9, never 1.

For an odd prime $p$, a nonzero class $a$ is a quadratic residue if
$x^{2}\\equiv a\\pmod p$ is solvable. The Legendre symbol
$\\left(\\frac ap\\right)$ is 1 for a nonzero residue, $-1$ for a nonresidue,
and 0 if $p\\mid a$. Euler’s criterion gives

$a^{(p-1)/2}\\equiv\\left(\\frac ap\\right)\\pmod p$.

For distinct odd primes $p,q$, quadratic reciprocity says

$$
\\left(\\frac pq\\right)\\left(\\frac qp\\right)
=(-1)^{(p-1)(q-1)/4}.
$$

Thus the two symbols agree unless both primes are 3 modulo 4. Supplementary laws handle −1 and 2. State the odd-prime and nondivisibility conditions; the compact notation does not erase them.

**Checkpoint.** Certify the order of 3 modulo 7. *Hint:* Euler gives an exponent of 6; test only the prime divisors of 6 for minimality. *Solution:* $3^2\\equiv2$, $3^3\\equiv6$, and $3^6\\equiv6^2\\equiv1\\pmod7$. Since neither $3^{6/2}=3^3$ nor $3^{6/3}=3^2$ is 1, the order is 6. Reporting $3^6\\equiv1$ alone would not distinguish order 6 from a proper divisor.

## Unit 6 — arithmetic functions and convolution

An arithmetic function maps positive integers to numbers. A nonzero function is **multiplicative** when $f(mn)=f(m)f(n)$ for $\\gcd(m,n)=1$ (then $f(1)=1$). It is **completely multiplicative** when the same identity holds for every pair $m,n$. Prime powers determine a multiplicative function because distinct prime powers are coprime. Important examples:

- $\\tau (p^k)=k+1$, so $\\tau (n)=\\prod (k_i+1)$;
- $\\sigma (p^k)=1+p+\\cdot \\cdot \\cdot +p^k$;
- $\\varphi(p^k)=p^k-p^{k-1}$ for $k\\ge1$, so $\\varphi(n)=n\\prod_{p\\mid n}(1-1/p)$, with $\\varphi(1)=1$;
- Möbius $\\mu(n)$ is 0 if a prime square divides $n$ and otherwise $(-1)^r$ for a product of $r$ distinct primes, with $\\mu(1)=1$.

Why does $\\sum_{d\\mid n}\\varphi(d)=n$? Partition the integers $k=1,\\ldots,n$ by $d=n/\\gcd(k,n)$. For fixed $d\\mid n$, write $k=(n/d)u$; then $1\\le u\\le d$ and $\\gcd(u,d)=1$. Exactly $\\varphi(d)$ integers lie in that part, so counting all $n$ integers gives the divisor sum. This proof works at $d=1$ as well: $k=n$ contributes $\\varphi(1)=1$.

For $n>1$ with distinct prime factors $p_1,\\ldots,p_r$, only squarefree divisors contribute to $\\sum_{d\\mid n}\\mu(d)$. Choosing a subset of the $r$ primes gives sign $(-1)^{|S|}$, so

$$\\sum_{d\\mid n}\\mu(d)=\\sum_{S\\subseteq\\{1,\\ldots,r\\}}(-1)^{|S|}=(1-1)^r=0.$$

For $n=1$ the sum is 1. The exception matters in the inversion proof.

The Dirichlet convolution is

$(f*g)(n)=\\sum_{d\\mid n}f(d)g(n/d)$.

Its identity $\\varepsilon$ has $\\varepsilon(1)=1$ and $\\varepsilon(n)=0$ otherwise. If $\\mathbf1(n)=1$ is the constant function, then the divisor sum just proved says $\\mu*\\mathbf1=\\varepsilon$. Consequently, if

$F(n)=\\sum _{d|n} f(d)$,

then Möbius inversion gives

$f(n)=\\sum _{d|n} \\mu (d)F(n/d)$.

**Proof by a finite double sum.** Substitute $F(n/d)=\\sum_{e\\mid n/d}f(e)$ and interchange the two *finite* sums. For each $e\\mid n$, the allowed $d$ divide $n/e$, so

$$\\sum_{d\\mid n}\\mu(d)F(n/d)
=\\sum_{e\\mid n}f(e)\\sum_{d\\mid n/e}\\mu(d)
=f(n).$$

The inner sum vanishes unless $n/e=1$, when it is 1. No convergence or rearrangement of infinite series is involved.

**Example.** Since $\\sum_{d\\mid n}\\varphi(d)=n$, inversion gives $\\varphi(n)=\\sum_{d\\mid n}\\mu(d)n/d$. At $n=12$, only $d=1,2,3,6$ contribute, yielding $12-6-4+2=4$. Independently, the units among $1,\\ldots,12$ are $1,5,7,11$, also four.

Multiplicativity does not mean complete multiplicativity: $\\varphi(4)=2$, whereas $\\varphi(2)\\varphi(2)=1$; the two inputs are not coprime. By contrast, the identity function $I(n)=n$ is completely multiplicative. A false proof that factors *every* argument into primes and multiplies $\\varphi(p)$ would predict $\\varphi(4)=\\varphi(2)^2=1$; multiplicativity licenses only the product across **distinct** prime powers.

**Checkpoint.** Derive $\\varphi(30)$ by inversion, then compare with prime-power counting. *Hint:* List the squarefree divisors of 30 with the sign of $\\mu$. *Solution:* They are all eight divisors, and inversion gives $30-15-10-6+5+3+2-1=8$. Independently, $30(1-1/2)(1-1/3)(1-1/5)=8$. The two methods agree because one uses a divisor sum and the other counts integers avoiding the prime factors 2, 3, and 5.

### Proof assessment for Units 1–6

Try these without the solutions first. The levels mark what the problem adds to the preceding checkpoints.

1. **Foundation — classify, do not guess.** Find all integer solutions of $21x+15y=6$. *Hint:* First obtain 1 as a combination of 7 and 5. *Solution:* $1=3\\cdot7-4\\cdot5$, so $3=3\\cdot21-4\\cdot15$. Double this identity: $(6,-8)$ is one solution of the target equation. With $g=3$, the full family is $(x,y)=(6+5t,-8-7t)$ for integer $t$. Substitution gives 6, while the coprime argument in Unit 1 excludes further solutions.
2. **Connection — combine three overlapping moduli.** Solve $x\\equiv1\\pmod4$, $x\\equiv3\\pmod6$, $x\\equiv6\\pmod9$. *Hint:* Combine the first two modulo 12, then test the gcd with 9. *Solution:* The first two give $x\\equiv9\\pmod{12}$: the residues agree modulo 2, and $9$ satisfies both. Put $x=9+12t$; the last condition becomes $3t\\equiv6\\pmod9$, hence $t\\equiv2\\pmod3$. The answer is $x\\equiv33\\pmod{36}$. Since $36=\\operatorname{lcm}(4,6,9)$, this is the sole solution class.
3. **Proof transfer — invert a divisor count.** Let $\\tau(n)$ count positive divisors. Show $\\sum_{d\\mid n}\\mu(d)\\tau(n/d)=1$ for every $n\\ge1$, then check $n=12$. *Hint:* Express $\\tau(n)$ as a divisor sum of the constant function. *Solution:* $\\tau(n)=\\sum_{e\\mid n}\\mathbf1(e)$. The finite-double-sum inversion proof with $f=\\mathbf1$ therefore gives $\\sum_{d\\mid n}\\mu(d)\\tau(n/d)=\\mathbf1(n)=1$. At 12 the nonzero terms are $\\tau(12)-\\tau(6)-\\tau(4)+\\tau(2)=6-4-3+2=1$. Forgetting that $\\mu(12)=0$ would introduce a spurious term.

## Unit 7 — Diophantine methods

Diophantine equations seek integer or rational points. No single method solves all of them, so build a toolkit.

**Linear equations.** For $a,b$ not both zero, Unit 1 proves that $ax+by=c$ is solvable exactly when $g=\\gcd(a,b)$ divides $c$; one solution plus $(b/g)t,-(a/g)t$ gives all solutions.

**Congruence obstruction.** Squares modulo 8 are 0,1,4, so $x^{2}+y^{2}=8k+3$ is impossible. One obstruction proves no global solution. Passing many local tests is not generally sufficient.

**Parametrization.** Primitive Pythagorean triples, after ordering the legs, are

$m^{2}-n^{2}, 2mn, m^{2}+n^{2}$

with m>n, gcd(m,n)=1, and opposite parity.

**Descent.** Assume a minimal positive solution and construct a smaller one, contradicting minimality. Fermat used descent to prove no positive square is the area of a right triangle with rational sides.

**Pell equations.** For nonsquare positive D, $x^{2}-Dy^{2}=1$ has nontrivial integer solutions. Continued fractions of √D yield a fundamental solution; powers of $x+y\\sqrt{D}$ generate more. The nonsquare and sign hypotheses matter.

## Unit 8 — continued fractions and approximation

A finite continued fraction is

$[a_{0};a_{1},\\ldots ,a_{k}]=a_{0}+1/(a_{1}+1/(\\cdot \\cdot \\cdot +1/a_{k}))$.

Euclid’s quotients give the continued fraction of a rational. Irrational real numbers have infinite expansions. The convergents $p_k/q_k$ satisfy determinant identities and provide unusually good rational approximations. If

$|\\alpha -p/q| < 1/(2q^{2})$,

then p/q in lowest terms is a convergent of α (Legendre’s theorem). The converse is not exactly this bound for every convergent; avoid reversing a one-way criterion.

For √2, the expansion $[1;2,2,2,\\ldots ]$ gives 1, 3/2, 7/5, 17/12, … . Numerators and denominators solve alternating Pell-type identities.

## Unit 9 — analytic view of primes

Let π(x) count primes at most x. The prime number theorem states

$\\pi (x) ~ x/\\log x$,

meaning their ratio tends to 1 as x→∞. It is an asymptotic statement, not an exact count or a guarantee that the approximation is close at every small x.

For real part of s greater than 1, the Riemann zeta function has both

$ζ(s)=\\sum _{n\\ge 1} n^{-s}$ and $ζ(s)=\\prod _p (1-p^{-s})^{-1}$.

Absolute convergence justifies expanding and rearranging the product; unique factorization matches one term with each integer. Analytic continuation extends ζ elsewhere except for a simple pole at 1, but the original series and Euler product do not converge everywhere the continued function is defined.

Dirichlet’s theorem says that if $a\\in\\mathbb Z$, $q\\in\\mathbb Z_{>0}$, and $\\gcd(a,q)=1$, the progression $a, a+q, a+2q,\\ldots$ contains infinitely many primes. Its proof uses characters and L-functions. The Riemann hypothesis, locating nontrivial zeta zeros on real part 1/2, remains open; do not present numerical verification as proof.

## Unit 10 — algebraic number theory

A number field K is a finite extension of Q. Its ring of integers $O_K$ contains elements integral over Z: roots of monic polynomials with integer coefficients. In $Q(i)$, the ring is $Z[i]$, and the norm

$N(a+bi)=a^{2}+b^{2}$

is multiplicative. Since $5=(2+i)(2-i)$, rational primes can split in larger rings.

Element factorization may fail to be unique, as in $\\mathbb Z[\\sqrt{-5}]$:

$6=2\\cdot 3=(1+\\sqrt{-5})(1-\\sqrt{-5})$.

The factors are genuinely inequivalent. In the full ring of integers of a number field, every nonzero ideal factors uniquely into prime ideals. Ideal classes measure failure of principal ideals; their finite quotient is the class group. Saying “ideals repair unique factorization” means ideal factorization in a Dedekind domain, not that every ideal is principal or every arbitrary ring has the property.

## Unit 11 — elliptic curves and arithmetic geometry

Over a field of characteristic not 2 or 3, a short Weierstrass equation

$E\\colon y^{2}=x^{3}+Ax+B$

is nonsingular when $4A^{3}+27B^{2}\\ne 0$. Its field-valued points plus $\\mathcal{O}$ form an abelian group under the chord-and-tangent law.

Over Q, Mordell’s theorem says $E(Q)$ is finitely generated:

$E(Q) \\cong E(Q)_tors \\oplus Z^r$.

It does not give a simple universal algorithm for the rank r. Over a finite field $F_p$, Hasse’s bound is

$|\\#E(\\mathbb F_p)-(p+1)| \\le 2\\sqrt{p}$.

Arithmetic geometry studies rational and integral points using reductions, heights, Galois representations, cohomology, and local-global comparisons. A point over every completion need not always produce a rational point; the Hasse principle has important successes and failures. The Birch and Swinnerton-Dyer conjecture relates rank to the order of vanishing of an L-function and remains open in general.

## Unit 12 — cryptographic definitions before arithmetic demos

RSA correctness uses modular exponentiation and the CRT. A deployed encryption scheme additionally needs randomized encoding, key-generation requirements, validation, and an adversarial notion such as indistinguishability under chosen-plaintext or chosen-ciphertext attack. Deterministic textbook RSA fails elementary confidentiality tests.

Diffie–Hellman key exchange uses exponentiation in a chosen cyclic group. The discrete logarithm problem, computational Diffie–Hellman, and decisional Diffie–Hellman are distinct assumptions; their relationships depend on the group. An elliptic-curve group offers another group family, but curve choice, subgroup order, point validation, cofactors, encodings, randomness, and side channels matter.

A hash function, message authentication code, signature, encryption scheme, key exchange, and authenticated protocol have different interfaces and goals. Never infer authentication from encryption alone or security from algebraic reversibility.

## Exercises

1. Find gcd(414,662) and a Bézout identity.
2. Solve $18x≡30 (\\pmod{42})$ completely.
3. Solve $x≡4 (\\pmod{6})$, $x≡10 (\\pmod{15})$ or prove inconsistency.
4. Compute $7^{222} \\pmod{20}$ without expanding the power.
5. Compute φ(360), τ(360), and μ(360).
6. Use a congruence to prove $x^{2}+y^{2}=8k+6$ has no integer solution.
7. Give the continued fraction of 43/13 using Euclid’s algorithm.
8. Explain why the zeta Euler product proof is initially restricted to real part greater than 1.
9. In $Z[i]$, factor 13 and verify norms.
10. For $E\\colon y^{2}=x^{3}+2x+1$ over $F_{5}$, count all points including $\\mathcal{O}$ and check Hasse’s bound.
11. State one correctness claim and two absent security claims for the map $M\\mapsto M^e \\pmod{n}$.
12. Classify each as primitive or protocol goal: collision-resistant hash, IND-CCA encryption, authenticated key exchange.

## Solutions

1. Euclid: $662=1\\cdot 414+248$, $414=1\\cdot 248+166$, $248=1\\cdot 166+82$, $166=2\\cdot 82+2$; gcd=2. Backwards, $2=166-2\\cdot 82=3\\cdot 166-2\\cdot 248=3\\cdot 414-5\\cdot 248=8\\cdot 414-5\\cdot 662$.
2. g=gcd(18,42)=6 divides 30. Divide by 6: $3x≡5 (\\pmod{7})$. Since $3^{-1}\\equiv 5$, x≡25≡4 modulo 7. Modulo 42 the six solutions are 4,11,18,25,32,39.
3. The gcd is 3 and 4≡1 while 10≡1 modulo 3, so compatible. Testing gives x=10; answers repeat modulo lcm(6,15)=30.
4. gcd(7,20)=1 and φ(20)=8. Since 222≡6 modulo 8, compute $7^{2}\\equiv 9$, $7^{4}\\equiv 1$, so $7^{6}≡9 (\\pmod{20})$.
5. $360=2^{3}3^{2}5$. Thus $\\varphi =360(1/2)(2/3)(4/5)=96$; $\\tau =(3+1)(2+1)(1+1)=24$; μ=0 because square factors divide 360.
6. Squares modulo 8 are 0,1,4. Sums can be 0,1,2,4,5, never 6.
7. $43=3\\cdot 13+4$, $13=3\\cdot 4+1$, $4=4\\cdot 1$, so $43/13=[3;3,4]$.
8. Absolute convergence permits rearranging the infinite sum/product and makes the unique-factorization expansion legitimate. Analytic continuation later defines the same function more broadly, but not by a convergent Euler product everywhere.
9. $13=(3+2i)(3-2i)$ and each factor has norm $3^{2}+2^{2}=13$; multiplicativity gives norm 169 on both sides.
10. The affine points are (0,1),(0,4),(1,2),(1,3),(3,2),(3,3), plus $\\mathcal{O}$, so #E=7. Hasse gives $|7-6|=1\\le 2\\sqrt{5}$.
11. Correctness might say a properly generated private exponent reverses every message representative. This alone gives neither semantic confidentiality nor resistance to chosen-ciphertext attack; it also says nothing about side channels or authentication.
12. A collision-resistant hash is a primitive with a security property; IND-CCA encryption is an encryption-scheme security notion; authenticated key exchange is a protocol-level goal combining key agreement and peer authentication.

## Feedback and capstone

If Exercises 1–4 fail, return to Bézout certificates, units, and exponent
reduction. If Exercises 5–7 fail, write the prime-power factorization or Euclid
quotients before selecting a theorem. If Exercises 8–10 fail, separate the
domain in which a series, factorization, norm, or point count is defined. If
Exercises 11–12 fail, make three columns headed “correctness,” “hardness
assumption,” and “security experiment.”

Choose one capstone track. Both require mathematical proofs and independently checkable certificates.

**Pure mathematics track.** Build a small arithmetic atlas for moduli $m,n\\le60$ (by hand for selected cases or with exact-integer code). It must (i) return the full integer solution family or a gcd obstruction for $ax+by=c$; (ii) return all classes of $ax\\equiv b\\pmod m$ or a divisibility obstruction; (iii) combine two possibly overlapping congruences or provide a gcd incompatibility certificate; and (iv) compute the order of a unit with the prime-divisor minimality checks, while rejecting nonunits. Prove each general method from Units 1–5, and use both the divisor partition and finite-sum inversion from Unit 6 to derive and check $\\varphi(n)$ for a composite $n$ with at least three distinct prime factors. Include one compatible and one incompatible CRT input, one solvable and one insoluble Diophantine input, and one false cancellation argument with its repair. A table of outputs alone is incomplete: show why the certificates establish exhaustiveness or impossibility.

**Optional cryptography track.** Implement extended Euclid, modular exponentiation, generalized CRT, and point addition on one explicitly chosen small nonsingular elliptic curve over a finite field. For every routine submit its input contract and mathematical postcondition, a loop invariant or derivation, exact tests including noninvertible or incompatible inputs, an operation-count estimate, and a certificate another program could verify. Then analyze a toy RSA or Diffie–Hellman transcript: prove the algebraic correctness claim, state the precise group and encoding, and name the security properties the demonstration does not establish. Toy keys and deterministic textbook transformations are not deployment guidance; correctness does not establish confidentiality or authentication.

Score either track out of 25: 8 points for proofs and certificates, 5 for boundary cases, 4 for independently checked examples, 3 for cost or scope analysis, and 5 for the track-specific synthesis (totient/inversion for pure mathematics, security-definition audit for cryptography). A working program without a mathematical contract is incomplete; code is not required for the pure track.

### Pure arithmetic atlas — Preparation and submission contract

The following is one fixed, completely worked choice of the pure mathematics track, followed by a changed boundary portfolio and a later public reconstruction. It keeps the original input bound: the displayed moduli and the finite audit are at most 60. A successful submission consists of arguments and certificates; writing a program is optional. This is elementary number theory, with no claim about cryptographic security or completion of the later units.

The original 900-minute outline estimate is retained. It has not been calibrated for this portfolio or its preparation, comparison, revision and later-return work; the full selected study time is unknown.

Before starting, repair any failed entry diagnostic, then complete the six Units 1–6 checkpoints and the three problems in the proof assessment. Integer arithmetic, divisibility, signed algebra, finite sets and the proof language used there suffice. The linked Euclid, congruence, order and arithmetic-function chapters are repair references; no whole-book reading is added. Units 7–12, the twelve existing exercises and their keys, and the optional cryptography track keep their stated roles.

Use these six numbered deliverables for each selected portfolio. P includes the general proofs; C applies those proofs and explains the changed zero-coefficient and nested-modulus branches; R reconstructs their use with signed inputs. A reference to your earlier proof must state its hypotheses and explain why they apply.

1. Classify both integer equations. For the solvable equation, give a Bézout certificate and the full integer solution family with a proof that no solutions are omitted or repeated. For the other, give a gcd obstruction.
2. Classify both linear congruences, listing every class modulo the original modulus. Repair the stated false cancellation, including a counterexample to its conclusion.
3. Solve the compatible CRT input and give its least positive period, with existence and uniqueness proofs. Give a gcd incompatibility certificate for the changed residue.
4. Certify the unit's exact order using every distinct prime divisor of the proposed order. Reject the stated nonunit with a reason, rather than assigning it a unit-group order.
5. For the assigned composite N, prove the gcd divisor partition and the finite-sum Möbius inversion identity, apply them to derive its totient, and check the result by an independent count of units. Give the divisor–totient row and the nonzero inversion terms, including the convention at 1.
6. Independently check the fixed specimen by substitution, residue calculations, modular powers and unit/divisor counts. Explain termination and the cost or scope of the methods you actually used. Hand checks concern these fixed inputs, not sixty separate handwritten audits. The optional code below exhausts the fixed finite residue domains and additionally sweeps N=1,…,60; neither activity replaces the general proofs.

Keep three distinct dated files for each portfolio: for example, NT-ATLAS-P-first.txt, NT-ATLAS-P-comparison.txt and NT-ATLAS-P-revised.txt. In the first file record your own attempt and any public models or help already seen. Preserve that file when opening the individual model, shared proofs or audit. In the comparison file name the exact unsupported or incorrect claims, cite the help used and write the repairs. Save the revised argument in the third file, with a brief account of what changed. Use corresponding C/R filenames and retain earlier contents. These are learner-managed files, not automatically immutable records; mutable native notes or a current export do not themselves preserve this three-stage trail. R is a later public reconstruction after possible exposure, not an unseen assessment.

### NT-ATLAS-P — Primary certificate portfolio

Submit deliverables 1–6 for these inputs, before using the public reference.

1. Solve $42x+30y=6$, and classify $42x+30y=7$.
2. Solve $18x\\equiv12\\pmod{30}$, and classify $18x\\equiv13\\pmod{30}$. Diagnose the claim “$18x\\equiv18\\pmod{30}$, so $x\\equiv1\\pmod{30}$.”
3. Combine $x\\equiv5\\pmod{12}$ and $x\\equiv11\\pmod{18}$; then replace the second residue by 10.
4. Find the order of 7 modulo 60, and decide whether 6 has a unit-group order modulo 60.
5. Use N=60 for the divisor partition, Möbius inversion and independent unit count.
6. Carry out the fixed hand checks, explain method scope and preserve the three files described above. Give the complete general proofs in your primary submission.

#### NT-ATLAS-P — Complete public model

**1. Integer equations.** The Euclidean trace is 42=30+12, 30=2·12+6, 12=2·6. Back substitution gives

$$6=30-2(42-30)=-2\\cdot42+3\\cdot30.$$

Thus the gcd is 6, a particular pair is (−2,3), and all solutions of the first equation are

$$x=-2+5t,\\qquad y=3-7t,\\qquad t\\in\\mathbb Z.$$

The step (5,−7) has zero dot product with (42,30); the homogeneous-family proof below shows completeness and uniqueness. For example, t=−1,0,1 gives (−7,10), (−2,3), (3,−4), each with value 6. These three checks are not the proof for every integer t. The second equation is impossible because every left-hand side is divisible by 6, whereas 7 is not.

**2. Linear congruences and cancellation.** Here gcd(18,30)=6. Divide the solvable congruence by 6, including its modulus:

$$3x\\equiv2\\pmod5,\\qquad x\\equiv4\\pmod5,$$

since 2 is the inverse of 3 modulo 5. The six classes modulo 30 are 4,9,14,19,24,29. Their representatives 4+5k satisfy 18(4+5k)−12=60+90k, a multiple of 30; the lifting proof excludes all other classes. The target 13 fails the divisibility test because 6∤13.

For the claimed cancellation, the correct reduction is 3x≡3 (mod 5), hence x≡1 (mod 5). Its six classes modulo 30 are 1,6,11,16,21,26. In particular x=6 satisfies 18·6−18=90, but is not 1 modulo 30. A nonunit coefficient cannot be cancelled at the unchanged modulus.

**3. CRT.** The gcd is 6 and 11−5=6 is divisible by it. Put x=5+12t. Then 12t≡6 (mod 18), so 2t≡1 (mod 3) and t≡2 (mod 3). Therefore

$$x\\equiv29\\pmod{36},\\qquad36=\\operatorname{lcm}(12,18).$$

The representative has 29−5=24 divisible by 12 and 29−11=18 divisible by 18. The common-period proof below gives all solutions and the least positive period 36, not the product 216. Replacing 11 by 10 makes the residue difference 5, which is not divisible by gcd(12,18)=6, so there is no solution.

**4. Orders.** The class 7 is a unit because gcd(7,60)=1. Its successive positive powers modulo 60 are 7,49,43,1. The proposed order 4 has one distinct prime divisor, 2; its minimality check is 7^(4/2)≡49≠1. Hence the order is exactly 4. The class 6 is a nonunit, since gcd(6,60)=6; if 6^r≡1 for a positive r, reduction modulo 2 would give 0≡1, an impossibility. It receives no unit-group order.

**5. Totient and inversion.** Factor 60=2²·3·5, so μ(60)=0. Apply both general counting proofs below, with the following complete divisor row:

| d | 1 | 2 | 3 | 4 | 5 | 6 | 10 | 12 | 15 | 20 | 30 | 60 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| φ(d) | 1 | 1 | 2 | 2 | 4 | 2 | 4 | 4 | 8 | 8 | 8 | 16 |

The second row sums to 60, as the partition requires. Only d=1,2,3,5,6,10,15,30 have nonzero μ(d), giving

$$\\varphi(60)=60-30-20-12+10+6+4-2=16.$$

This uses μ(d), not a single factor μ(60). Independently, the units among 1,…,60 are 1,7,11,13,17,19,23,29,31,37,41,43,47,49,53,59: precisely the numbers divisible by none of 2,3,5. There are 16. The prime-power count 60(1−1/2)(1−1/3)(1−1/5)=16 is another check.

**6. Audit and scope.** Substitution verifies the family direction, every listed congruence class, the CRT representative and its period, and each modular power. The unit list independently checks the totient and the divisor row checks the partition sum. Reconstruct the shared proofs below before treating these finite calculations as certificates of exhaustive classifications. The optional audit repeats these checks mechanically; its output is not a proof of a universally quantified claim. The Euclidean remainders decrease, so the gcd computations terminate. Direct finite enumeration here is bounded; square-and-multiply offers a different, logarithmic modular-multiplication count for large exponents, as explained below. Record the comparisons and revised proofs in the three-file trail.

### NT-ATLAS-C — Changed boundary portfolio

Apply deliverables 1–6 to these changed inputs. State exactly how the proofs handle a zero coefficient and one CRT modulus dividing the other. Do not divide by zero or assume that two listed congruences impose independent conditions.

1. Solve $0x-18y=36$, and classify $0x-18y=35$.
2. Solve $0x\\equiv0\\pmod{12}$, and classify $0x\\equiv6\\pmod{12}$. Diagnose the claim “$0x\\equiv0\\pmod{12}$, so $x\\equiv0\\pmod{12}$.”
3. Combine $x\\equiv5\\pmod6$ and $x\\equiv17\\pmod{18}$; then replace the second residue by 16.
4. Find the order of 5 modulo 42, and decide whether 7 has a unit-group order modulo 42.
5. Use N=42 for the divisor partition, Möbius inversion and independent unit count.
6. Complete the fixed hand checks and C three-file trail. Apply the primary general proofs with their hypotheses; explain the changed branches rather than copying numerical outputs.

#### NT-ATLAS-C — Complete public model

**1. Integer equations.** The gcd of 0 and −18 is 18, certified by 18=0·0+(−18)(−1). Multiplying by 2 gives the pair (0,−2) for target 36. All solutions are

$$x=t,\\qquad y=-2,\\qquad t\\in\\mathbb Z.$$

The equation forces y=−2 and places no restriction on x, so this is exhaustive and has no repeated pairs. The general signed formula has direction (b/g,−a/g)=(−1,0), which describes the same family after replacing its parameter by −t. No division by a=0 occurs. For target 35, the divisor 18 of every left-hand side does not divide the target, so there is no solution.

**2. Linear congruences and cancellation.** Every integer satisfies 0x≡0 (mod 12): the complete list of classes is 0,1,2,3,4,5,6,7,8,9,10,11. None satisfies 0x≡6 (mod 12), since 12 does not divide 6. The gcd test has g=12; for the first target its reduced modulus is 1, where there is one congruence class, lifted to all twelve classes modulo 12. This boundary is handled directly, without invoking the order routine at modulus 1. The false cancellation is refuted by x=1: 0·1=0, yet 1 is not 0 modulo 12. Its repair is no restriction on x.

**3. CRT.** Since 18 is a multiple of 6, x≡17 (mod 18) already implies x≡5 (mod 6). The solution is therefore x≡17 (mod 18), with least positive period lcm(6,18)=18, not 108. Equivalently 17−5=12 is divisible by gcd(6,18)=6. For residue 16, the difference 16−5=11 is not divisible by 6, so the changed system is incompatible. This is a redundant-condition case, not a coprime CRT case.

**4. Orders.** We have gcd(5,42)=1 and the positive powers of 5 modulo 42 are 5,25,41,37,17,1. For proposed order 6, the distinct primes are 2 and 3:

$$5^{6/2}\\equiv41\\ne1,\\qquad5^{6/3}\\equiv25\\ne1,\\qquad5^6\\equiv1\\pmod{42}.$$

Both minimality checks are required. The order is 6. The class 7 is a nonunit because gcd(7,42)=7; a positive power equal to 1 modulo 42 would reduce to 0=1 modulo 7, so no such unit-group order is assigned.

**5. Totient and inversion.** Here 42=2·3·7 is squarefree with three distinct prime factors, so μ(42)=−1. The divisor-partition proof and finite-double-sum inversion below apply unchanged, with φ(1)=μ(1)=1:

| d | 1 | 2 | 3 | 6 | 7 | 14 | 21 | 42 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| φ(d) | 1 | 1 | 2 | 2 | 6 | 6 | 12 | 12 |

The totient row sums to 42. Every divisor is squarefree, and inversion gives

$$\\varphi(42)=42-21-14-6+7+3+2-1=12.$$

Independently the units are 1,5,11,13,17,19,23,25,29,31,37,41, the integers in 1,…,42 divisible by none of 2,3,7. Their count is 12, agreeing with 42(1−1/2)(1−1/3)(1−1/7)=12.

**6. Audit and scope.** Substitute arbitrary x into the forced y=−2 equation; reject target 35 by divisibility, not by a failed search. Check all twelve congruence representatives, the CRT implication and incompatibility, and all six powers and two prime-divisor checks. The unit list and divisor row provide independent finite checks. The same shared proofs justify completeness; a zero coefficient does not invalidate their signed homogeneous argument. Preserve the earlier C attempt, record the precise branch repairs, and save the revised C file. No sweep through sixty separate hand examples is required.

### NT-ATLAS-R — Later public reconstruction

Return later to the methods with these signed inputs. Record whether the primary/changed references or Unit 6's φ(30) answer have already been seen. This is public reconstruction and transfer, not evidence of unseen performance.

1. Solve $20x-14y=6$, and classify $20x-14y=7$.
2. Solve $14x\\equiv-8\\pmod{30}$, and classify $14x\\equiv-7\\pmod{30}$. Diagnose the step “divide by 2, retaining modulus 30, to obtain $7x\\equiv-4\\pmod{30}$.”
3. Combine $x\\equiv-1\\pmod{10}$ and $x\\equiv3\\pmod6$; then replace the second residue by 2.
4. Find the order of 11 modulo 30, and decide whether 10 has a unit-group order modulo 30. Explain whether the totient must equal the order.
5. Use N=30 for the divisor partition, Möbius inversion and independent unit count.
6. Complete the fixed hand checks and R three-file trail. Restate the proof hypotheses and reconstruct their application to these inputs, including normalization of negative residues.

#### NT-ATLAS-R — Complete public model

**1. Integer equations.** Euclid gives 20=14+6, 14=2·6+2, 6=3·2. Back substitution yields 2=3·14−2·20=20(−2)+(−14)(−3). Scaling by 3 gives one pair (−6,−9); adding the zero-sum direction (7,10) gives the simpler particular pair (1,1). Therefore all solutions are

$$x=1+7t,\\qquad y=1+10t,\\qquad t\\in\\mathbb Z.$$

Indeed 20·7−14·10=0 and 20−14=6; completeness follows from the coprime pair 10,−7 in the shared proof. The gcd is 2, which cannot divide the odd target 7, so that equation is insoluble.

**2. Linear congruences and cancellation.** The gcd is 2. Reducing both coefficients and modulus gives 7x≡−4 (mod 15). The inverse of 7 modulo 15 is 13 because 7·13=91≡1. Hence x≡−52≡8 (mod 15), with exactly two classes 8 and 23 modulo 30. The two substitutions give 14·8+8=120 and 14·23+8=330, both divisible by 30. The target −7 is odd and fails the gcd divisibility test.

Keeping modulus 30 after division by 2 is unjustified. It yields only x≡8 (mod 30), losing class 23: its original difference is 330, but its incorrectly reduced difference is 7·23+4=165, which is not divisible by 30. The repaired modulus is 15.

**3. CRT.** The residues −1 and 3 agree modulo gcd(10,6)=2. With x=−1+10t, the second condition becomes 10t≡4 (mod 6), or 2t≡2 (mod 3), so t≡1 (mod 3). Thus x≡9 (mod 30), where 30=lcm(10,6). The checks are 9−(−1)=10 and 9−3=6. The residue −1 may equivalently be normalized to 9 modulo 10; signs do not alter the compatibility test. Replacing 3 by 2 makes the difference 2−(−1)=3 odd, so the system is inconsistent.

**4. Orders.** The class 11 is a unit modulo 30, 11²=121≡1, and 11≠1. The only distinct prime divisor of the proposed order 2 is 2, and 11^(2/2)≠1. Thus the exact order is 2. It divides φ(30)=8 but is not equal to 8. The class 10 is a nonunit, with gcd(10,30)=10; reduction modulo 2 rules out any positive power equal to 1 modulo 30.

**5. Totient and inversion.** Factor 30=2·3·5, so μ(30)=−1. The shared partition and finite-sum proofs give the following row:

| d | 1 | 2 | 3 | 5 | 6 | 10 | 15 | 30 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| φ(d) | 1 | 1 | 2 | 4 | 2 | 4 | 8 | 8 |

The row sums to 30, and μ(1)=1 is essential in inversion:

$$\\varphi(30)=30-15-10-6+5+3+2-1=8.$$

The independently listed units are 1,7,11,13,17,19,23,29, eight in total, agreeing with 30(1−1/2)(1−1/3)(1−1/5)=8. This calculation already has a public Unit 6 reference; reconstruction means supplying the proof and checks with that exposure declared, not claiming a fresh test result.

**6. Audit and scope.** Substitute into the signed family, retain both congruence classes, normalize the negative CRT residue and check the period, and compare the exact order 2 with the totient 8. The divisibility obstructions prove impossibility; finite searches alone do not. State where the shared general proofs enter, record the model comparison and corrected claims, and preserve the separate revised R file.

### Pure arithmetic atlas — General proofs

These proofs are part of the complete public model for each specimen. They supply the infinite classification arguments that no bounded table can establish.

**Gcd and all integer solutions.** Let a,b be integers not both zero. Apply division with remainder to their absolute values; signs can be restored in the coefficients. Replacing (a,b) by (b,a−qb) preserves its common divisors, and each nonzero remainder is smaller than the preceding positive divisor. The process terminates at the positive gcd g. Back substitution produces integers u,v with au+bv=g, certifying the gcd: g divides both inputs and every common divisor divides that combination. This also works when exactly one coefficient is zero. The both-zero input is outside this method's contract.

For ax+by=c, necessity is g∣c. If it holds, a particular solution is (x₀,y₀)=((c/g)u,(c/g)v). Set A=a/g, B=b/g; gcd(A,B)=1. Every pair (x₀+Bt,y₀−At) solves the equation. Conversely, for another solution put X=x−x₀, Y=y−y₀, so AX+BY=0. Bézout gives U,V with UA+VB=1. Define t=VX−UY. Then

$$Bt=VBX-UBY=(VB+UA)X=X,\\qquad
-At=-AVX+AUY=(VB+AU)Y=Y.$$

Thus every solution has the displayed form. Since A,B are not both zero, two different parameters cannot give the same pair. No division by A or B is used, so zero and negative coefficients cause no exception.

**Linear congruences and the exact number of classes.** For m>0, ax≡b (mod m) means ax−my=b for an integer y. With g=gcd(a,m), the classification just proved gives existence exactly when g∣b. If m/g>1, Bézout makes a/g a unit modulo m/g, so dividing coefficients and modulus gives one class x₀ modulo m/g. If m/g=1, divisibility by 1 imposes no restriction, so there is directly one class at that modulus. The lifts modulo m are

$$x_0+k(m/g),\\qquad k=0,\\ldots,g-1.$$

They are distinct: a difference (k−ℓ)m/g can be divisible by m only when g divides k−ℓ. All solutions arise this way because their difference from x₀ is divisible by m/g. In particular zero coefficients are covered, and m=1 has one residue class. Cancelling a factor c from ca≡cb (mod m) justifies a≡b modulo m/gcd(c,m); keeping m is valid only if c is a unit.

**Generalized CRT.** For positive m,n, write the first condition as x=a+mt. The second becomes mt≡b−a (mod n). It is solvable exactly when g=gcd(m,n) divides b−a. When compatible, t is unique modulo n/g, so x is unique modulo m(n/g)=lcm(m,n). Every difference of solutions is divisible by both moduli; conversely adding a common multiple preserves both conditions. The least positive common multiple is the least positive period. This argument includes nested moduli and coprime moduli, without replacing the lcm by their product. Negative residues may be normalized because adding a multiple of a modulus changes neither condition.

**Orders, minimality and rejection.** For n>1 and gcd(a,n)=1, all powers of a are units. There are φ(n) unit classes, so among a⁰,…,a^φ(n) two agree. Cancelling the earlier unit power gives a positive exponent at most φ(n) with value 1. A least such exponent d exists. If a^k≡1, divide k=qd+s with 0≤s<d; then a^s≡1 and minimality forces s=0. Therefore d∣k.

To certify a proposed r, check a^r≡1 and a^(r/q)≢1 for every distinct prime q dividing r. The true order d divides r. If d<r, a prime q divides r/d, so d divides r/q and a^(r/q)≡1, contradicting its check. For r=1 the prime list is empty and a≡1 itself is sufficient. A nonunit has a common divisor h>1 with n; any a^r≡1 with r>0 would imply h∣1, impossible. Modulus 1 is outside the order contract, even though it occurs in the divisor-count convention.

**The divisor partition.** For any positive N, partition k=1,…,N by d=N/gcd(k,N), a divisor of N. For fixed d, write k=(N/d)u. Then 1≤u≤d and gcd(u,d)=1, and conversely each such u produces exactly one k in that part. It therefore has φ(d) members. The disjoint parts exhaust N integers, proving

$$\\sum_{d\\mid N}\\varphi(d)=N.$$

At d=1 the single member is k=N, so φ(1)=1 must be retained.

**Möbius inversion from finite sums.** Set μ(1)=1; for N>1 its squarefree divisors correspond to subsets of its distinct prime factors. Summing their signs gives (1−1)^s=0, where s≥1 is the number of those primes. Divisors containing a prime square have μ=0. Thus the sum of μ(d) over d∣N is 1 at N=1 and 0 otherwise. If F(N)=Σ_{e∣N}f(e), substitution and interchange of finite sums give

$$\\begin{aligned}
\\sum_{d\\mid N}\\mu(d)F(N/d)
&=\\sum_{e\\mid N}f(e)\\sum_{d\\mid N/e}\\mu(d)\\\\
&=f(N).
\\end{aligned}$$

Only e=N survives. Applying this to f=φ and F(N)=N proves φ(N)=Σ_{d∣N}μ(d)N/d. This is a finite identity, with no analytic convergence hypothesis. The divisor–totient rows and direct unit lists in the individual keys give independent checks of its three applications.

**Termination, cost and scope.** Euclid terminates by decreasing nonnegative remainders; back substitution uses its finite trace. The solution classifications then require one certificate and, for a congruence, g residue classes. CRT uses one such congruence and a period, not an unbounded search. For exponent e>0, binary square-and-multiply uses at most two modular multiplications per binary digit, an O(log e) modular-multiplication count; this does not say that multiplication of arbitrary-size integers has constant bit cost. The optional audit instead uses short direct power sequences and finite enumeration. Its bounded cost and checked examples do not prove the methods for all integers or establish any cryptographic security property.

### Pure arithmetic atlas — Optional finite audit

This is an optional reproducible check of the displayed references, not required programming work or a replacement for the hand proofs. The three individual keys already give the expected results. This code additionally checks the divisor partition and Möbius identity for N=1,…,60; that sweep is not an instruction to prepare sixty handwritten portfolios.

All inputs are the fixed integers below. Each enumerated residue or divisor domain and each tested exponent is at most 60. Intermediate integer values remain below 2^53, so JavaScript Number arithmetic here is exact; this is not a contract for arbitrary-size input. Remainders of signed inputs are normalized. The gcd, direct unit counts and trial-division Möbius values do not call a totient product formula. The output describes finite checks only.

\`\`\`javascript
// Optional bounded audit: no packages, random data or cryptographic use.
(() => {
  const mod = (x, m) => ((x % m) + m) % m;
  const gcd = (a, b) => {
    a = Math.abs(a); b = Math.abs(b);
    while (b !== 0) { const r = a % b; a = b; b = r; }
    return a;
  };
  const insist = (condition, label) => {
    if (!condition) throw new Error(label);
  };
  const same = (actual, expected, label) =>
    insist(JSON.stringify(actual) === JSON.stringify(expected), label);
  const residues = (limit, accept) => {
    insist(Number.isInteger(limit) && limit >= 1 && limit <= 60, "finite domain");
    const result = [];
    for (let x = 0; x < limit; x += 1) if (accept(x)) result.push(x);
    return result;
  };
  const phi = n => {
    let count = 0;
    for (let a = 1; a <= n; a += 1) if (gcd(a, n) === 1) count += 1;
    return count;
  };
  const mu = n => {
    let remaining = n, distinct = 0;
    for (let p = 2; p * p <= remaining; p += 1) {
      if (remaining % p !== 0) continue;
      remaining /= p; distinct += 1;
      if (remaining % p === 0) return 0;
    }
    if (remaining > 1) distinct += 1;
    return distinct % 2 === 0 ? 1 : -1;
  };
  const power = (a, exponent, n) => {
    let value = 1;
    for (let k = 0; k < exponent; k += 1) value = mod(value * mod(a, n), n);
    return value;
  };
  const primeDivisors = n => {
    const primes = [];
    for (let p = 2; p <= n; p += 1) {
      if (n % p !== 0) continue;
      primes.push(p);
      while (n % p === 0) n /= p;
    }
    return primes;
  };
  const cases = [
    { id: "NT-ATLAS-P", equation: [42, 30, 6, 7], base: [-2, 3], step: [5, -7],
      linear: [18, 12, 13, 30], classes: [4, 9, 14, 19, 24, 29],
      crt: [5, 12, 11, 10, 18], combined: [29], period: 36,
      unit: [7, 60, 4], nonunit: 6 },
    { id: "NT-ATLAS-C", equation: [0, -18, 36, 35], base: [0, -2], step: [1, 0],
      linear: [0, 0, 6, 12], classes: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      crt: [5, 6, 17, 16, 18], combined: [17], period: 18,
      unit: [5, 42, 6], nonunit: 7 },
    { id: "NT-ATLAS-R", equation: [20, -14, 6, 7], base: [1, 1], step: [7, 10],
      linear: [14, -8, -7, 30], classes: [8, 23],
      crt: [-1, 10, 3, 2, 6], combined: [9], period: 30,
      unit: [11, 30, 2], nonunit: 10 }
  ];
  const specimens = cases.map(c => {
    const [a, b, target, impossible] = c.equation, g = gcd(a, b);
    insist(target % g === 0 && impossible % g !== 0, c.id + " equation gcd");
    insist(a * c.base[0] + b * c.base[1] === target, c.id + " base");
    insist(a * c.step[0] + b * c.step[1] === 0 &&
      gcd(c.step[0], c.step[1]) === 1, c.id + " primitive direction");
    // These samples check substitution, not the proof for every integer t.
    for (const t of [-1, 0, 1]) {
      insist(a * (c.base[0] + t * c.step[0]) +
        b * (c.base[1] + t * c.step[1]) === target, c.id + " substitution");
    }
    const [coefficient, good, bad, m] = c.linear;
    const classes = residues(m, x => mod(coefficient * x - good, m) === 0);
    const rejectedClasses = residues(m, x => mod(coefficient * x - bad, m) === 0);
    same(classes, c.classes, c.id + " congruence");
    same(rejectedClasses, [], c.id + " rejected congruence");
    const [left, leftMod, right, wrong, rightMod] = c.crt;
    const period = leftMod * rightMod / gcd(leftMod, rightMod);
    insist(period === c.period, c.id + " lcm");
    const combined = residues(period, x => mod(x - left, leftMod) === 0 &&
      mod(x - right, rightMod) === 0);
    const rejectedCrt = residues(period, x => mod(x - left, leftMod) === 0 &&
      mod(x - wrong, rightMod) === 0);
    same(combined, c.combined, c.id + " CRT");
    same(rejectedCrt, [], c.id + " rejected CRT");
    const [unit, n, expectedOrder] = c.unit, powers = [];
    insist(gcd(unit, n) === 1 && n > 1, c.id + " unit contract");
    let value = 1;
    for (let exponent = 1; exponent <= phi(n); exponent += 1) {
      value = mod(value * unit, n); powers.push(value);
      if (value === 1) break;
    }
    insist(value === 1 && powers.length === expectedOrder, c.id + " first return");
    insist(power(unit, expectedOrder, n) === 1, c.id + " order power");
    for (const q of primeDivisors(expectedOrder)) {
      insist(power(unit, expectedOrder / q, n) !== 1, c.id + " prime check");
    }
    const nonunitGcd = gcd(c.nonunit, n);
    insist(nonunitGcd > 1, c.id + " nonunit rejection");
    return { id: c.id, gcd: g, base: c.base, step: c.step, classes,
      rejectedClasses, combined, rejectedCrt, period, powers,
      order: powers.length, nonunitGcd, phi: phi(n), mu: mu(n) };
  });
  const cancellationWitnesses = [
    [18, 18, 30, 1, 1, 30, 6],
    [0, 0, 12, 1, 0, 12, 1],
    [14, -8, 30, 7, -4, 30, 23]
  ].map(([a, b, m, wrongA, wrongB, wrongM, x]) => {
    insist(mod(a * x - b, m) === 0 &&
      mod(wrongA * x - wrongB, wrongM) !== 0, "false cancellation");
    return x;
  });
  let arithmeticFunctionChecks = 0;
  const arithmeticFunctions = [];
  for (let n = 1; n <= 60; n += 1) {
    let partition = 0, inversion = 0;
    for (let d = 1; d <= n; d += 1) {
      if (n % d !== 0) continue;
      partition += phi(d); inversion += mu(d) * (n / d);
    }
    insist(partition === n && inversion === phi(n), "divisor identities at " + n);
    arithmeticFunctionChecks += 1;
    arithmeticFunctions.push({ n, phi: phi(n), mu: mu(n), partition, inversion });
  }
  console.log(JSON.stringify({ scope: "fixed specimens; arithmetic functions 1..60",
    specimens, cancellationWitnesses, arithmeticFunctionChecks, arithmeticFunctions }));
})();
\`\`\`

The family samples in this program are explicitly finite. Completeness of the infinite family, validity for arbitrary positive moduli, the order certificate theorem and Möbius inversion still rest on the proofs above. The audit's success would establish only the asserted finite computations for this program and these inputs.

### Pure arithmetic atlas — Self-review and repair

Use the existing 25-point comparison guide for the pure-track synthesis: 8 for proofs and certificates, 5 for boundary cases, 4 for independently checked examples, 3 for cost or scope, and 5 for totient/inversion. These are descriptive self-review or optional reader-review criteria, not an awarded learner grade or three separate 25-point qualifications. Compare the primary argument and its changed/return applications, recording actual repairs.

| Criterion | What to compare | Repair when it is missing |
| --- | --- | --- |
| Proofs and certificates — 8 | Bézout identity, full-family converse, complete class lifting, CRT existence/uniqueness, every order minimality check. | Restore the gcd and homogeneous argument; one particular solution is insufficient. For order 6 modulo 42, check both exponents 3 and 2, not just exponent 6. |
| Boundary cases — 5 | Insoluble targets, incompatible CRT, nonunits, zero and negative coefficients/residues, and each false cancellation. | Explain why a divisor cannot divide the target; retain all twelve C congruence classes; reduce R's modulus to 15; reject nonunits before discussing group order. |
| Independent examples — 4 | Direct substitutions, one complete residue period, power checks, unit lists and divisor–totient sums. | Check P's six classes, C's redundant condition and R's lost class 23. Use periods 36,18,30, not the products 216,108,60. Separate these finite checks from general proofs. |
| Cost or scope — 3 | Termination and an operation count or bounded-enumeration account, with the limits of finite checks and optional code stated. | Supply decreasing remainders; distinguish direct enumeration from binary exponentiation and modular-operation count from bit cost. Do not infer security, universal correctness or a learning grade from a successful run. |
| Totient/inversion — 5 | Gcd partition, the exception at 1, squarefree-sign cancellation, finite-double-sum proof, and the assigned numerical derivation with an independent unit count. | Retain φ(1)=μ(1)=1; use μ(d) for each divisor, including its zero terms. Reconstruct why only e=N survives the double sum; a table or product formula alone does not supply that proof. |

Before finishing, identify each changed mathematical claim in the comparison file and locate its corrected version in the revised file. Preserve the initial attempt and its declared exposure. No new task, separate hint or cryptographic exercise is hidden in these repairs.

## Sources and continuation

Standard theorem references include Hardy and Wright’s *An Introduction to the Theory of Numbers*, Ireland and Rosen’s *A Classical Introduction to Modern Number Theory*, Davenport’s *Multiplicative Number Theory*, and Silverman and Tate’s *Rational Points on Elliptic Curves*. For RSA scheme boundaries consult [RFC 8017](https://www.rfc-editor.org/info/rfc8017/); for standardized signature and elliptic-domain context consult [NIST FIPS 186-5](https://csrc.nist.gov/pubs/fips/186-5/final) and its companion SP 800-186. These standards are implementation context, not substitutes for a security proof or current deployment guidance.
`;export{e as default};