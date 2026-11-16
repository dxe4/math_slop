var e=`---
parent_id: book-number-theory-proof-reference
chapter_id: prime-distribution-sieves
title: "Prime Distribution and Elementary Sieve Architecture"
level: advanced-undergraduate
estimated_minutes: 260
license: CC BY-SA 4.0
---

# Prime Distribution and Elementary Sieve Architecture

Primes become sparser but remain structured. Counting functions describe their global density; sieves remove integers with small prime factors and expose candidates. A sieve output is not automatically a primality proof, and elementary inclusion-exclusion becomes expensive before it becomes inaccurate.

This chapter assumes arithmetic functions, Euler products, and asymptotic notation. It states the prime number theorem with equivalent weighted forms, derives elementary sieve identities, and explains the parity barrier and quantitative claim boundaries.

## 1. Prime-counting functions

Define

$\\pi(x)=\\#\\{p \\text{ prime}: p\\le x\\}$,

$\\theta(x)=\\sum_{p\\le x}\\log p$,

$\\psi(x)=\\sum_{n\\le x}\\Lambda(n)=\\sum_{p^k\\le x}\\log p$.

The prime number theorem states

$\\pi(x)\\sim x/\\log x$.

Equivalent forms are $\\theta(x)\\sim x$ and $\\psi(x)\\sim x$. Partial summation connects $\\pi$ and $\\theta$; prime powers with $k\\ge 2$ contribute only $\\mathcal{O}(\\sqrt{x}\\log x)$ to the difference between $\\psi$ and $\\theta$.

The theorem does not say the gap after a prime is approximately $\\log p$ for every prime; average density and pointwise gaps are different claims.

## 2. Chebyshev bounds

Before the PNT, elementary binomial-coefficient arguments prove constants $c,C>0$ such that

\\[c x/\\log x \\le \\pi(x) \\le C x/\\log x\\]

for sufficiently large $x$. The central binomial coefficient is bounded between exponential quantities, while every prime in an interval divides it with controlled multiplicity. These bounds establish the correct scale but not limiting ratio one.

## 3. PNT proof architecture

The identity

\\[-\\zeta'(s)/\\zeta(s)=\\sum_{n\\ge 1} \\Lambda(n)n^{-s},\\quad \\operatorname{Re}(s)>1.\\]

connects primes to analytic boundary behavior. A classical proof shows zeta has no zeros on $\\operatorname{Re}(s)=1$, then applies a Tauberian theorem to obtain $\\psi(x)\\sim x$.

This architecture contains two deep steps: zero-free boundary analysis and transform inversion. The Euler product alone, valid initially to the right of one, does not prove the PNT. Elementary proofs also exist, but “elementary” means avoiding complex analysis, not short or assumption-free.

## 4. Sieve of Eratosthenes

To find primes up to $N$, begin with $2,\\ldots,N$ and remove multiples of each prime $p\\le \\sqrt{N}$ starting at $p^{2}$. Every composite $n\\le N$ has a prime factor at most $\\sqrt{n}$, so this is complete. Starting at $p^{2}$ avoids re-marking smaller multiples already handled.

With a boolean table, the standard implementation uses $\\mathcal{O}(N \\log \\log N)$ marking operations and $\\mathcal{O}(N)$ memory under the usual word-operation model. A segmented sieve reduces working memory for intervals.

## 5. Inclusion-exclusion sieve

Let $P(z)=\\prod_{p<z}p$. The count of integers $n\\le x$ coprime to $P(z)$ is exactly

$S(x,z)=\\sum_{d\\mid P(z)}\\mu(d)\\left\\lfloor x/d \\right\\rfloor$.

This is inclusion-exclusion: each squarefree divisor selects a set of forbidden prime factors. Replacing floors by $x/d$ suggests

$x \\prod_{p<z}(1-1/p)$,

but summing one unit of floor error over $2^{\\#\\{p:p<z\\}}$ divisors is disastrous. Sieve methods control the combined error without full inclusion-exclusion.

## 6. Legendre's identity and rough numbers

Let $\\Phi(x,a)$ count positive integers at most $x$ not divisible by the first $a$ primes. Then

$\\Phi(x,a)=\\Phi(x,a-1)-\\Phi(x/p_{a},a-1)$.

If $p_{a}\\le \\sqrt{x}<p_{a+1}$, every surviving integer greater than one is prime, so

$\\pi(x)=\\Phi(x,a)+a-1$.

This is exact but recursive computation without memoization repeats many states. It is a counting identity, not a faster universal replacement for segmented sieving.

## 7. Upper and lower-bound sieves

Modern combinatorial sieves choose truncated weights instead of all inclusion-exclusion terms. Selberg's sieve uses optimized quadratic weights to obtain strong upper bounds. Brun's sieve proves, among other results, convergence of the reciprocal sum over twin primes even if infinitely many twin primes exist.

The **parity problem** prevents broad sieve methods from cleanly distinguishing integers with an odd versus even number of prime factors. Consequently, a sieve that finds many almost primes may still fall short of proving a prime pattern such as twin-prime infinitude.

## 8. Prime gaps and status

Euclid proves arbitrarily large prime gaps: $(m+1)!+2,\\ldots,(m+1)!+(m+1)$ are all composite. This does not contradict PNT, an average-density theorem.

Bounded gaps between primes are proved: some fixed finite bound occurs infinitely often. The twin prime conjecture, asking for bound two infinitely often, remains open. State the exact proven bound only with a current citation audit; this drafting chapter deliberately avoids a potentially stale numerical record.

## Exercises with complete solutions

### 1. Small counts

Compute $\\pi(20),\\theta(20),\\psi(10)$.

**Solution.** $\\pi(20)=8$. $\\theta(20)=\\log(2\\cdot3\\cdot5\\cdot7\\cdot11\\cdot13\\cdot17\\cdot19)$. For $\\psi(10)$, prime powers contribute $\\log2$ at $2,4,8$, $\\log3$ at $3,9$, and $\\log5,\\log7$, so it is $\\log(2^{3}\\cdot3^{2}\\cdot5\\cdot7)=\\log2520$.

### 2. Prime powers bound

Why are there $\\mathcal{O}(\\sqrt{x})$ prime-power occurrences $p^k\\le x$ with $k\\ge 2$?

**Solution.** The squares contribute at most $\\sqrt{x}$ bases. For $k\\ge 3$, there are at most $x^{1/k}$ possible bases, so their total is at most $\\log_{2}(x)x^{1/3}=\\mathcal{O}(\\sqrt{x})$; the finitely many small $x$ can be absorbed into the constant. Thus all occurrences total $\\mathcal{O}(\\sqrt{x})$. Since each contributes at most $\\log x$, this gives the stated $\\mathcal{O}(\\sqrt{x}\\log x)$ bound for $\\psi(x)-\\theta(x)$.

### 3. PNT estimate

What does PNT predict for the scale of $\\pi(10^{6})$?

**Solution.** It predicts about $10^{6}/\\log(10^{6})$, roughly $72,000$; this is an asymptotic estimate, not an exact count.

### 4. Gap warning

Does PNT imply every interval $[x,x+2log x]$ contains a prime?

**Solution.** No. PNT controls cumulative density, not every short interval; prime gaps can greatly exceed the average spacing.

### 5. Sieve stopping point

Why mark only with primes at most $\\sqrt{N}$?

**Solution.** Any composite at most $N$ has a prime factor at most its square root, hence at most $\\sqrt{N}$. If none divides it, it is prime.

### 6. Start at the square

Why may marking multiples of $p$ start at $p^{2}$?

**Solution.** A smaller multiple $kp$ has $k<p$, so it already has a prime factor at most $k$ and was marked earlier.

### 7. Sieve to thirty

List primes up to $30$.

**Solution.** Mark multiples of $2,3,5$; survivors are $2,3,5,7,11,13,17,19,23,29$.

### 8. Inclusion-exclusion

Count integers $\\le 30$ coprime to $2*3*5$.

**Solution.** The exact sum is $30-15-10-6+5+3+2-1=8$, representing $1,7,11,13,17,19,23,29$.

### 9. Möbius form

Explain the signs in Exercise 8.

**Solution.** For squarefree $d\\mid 30$, $\\mu(d)=(-1)^r$ where $r$ selected primes; the term counts multiples of their product.

### 10. Floor-error explosion

If $k$ primes are sieved by full inclusion-exclusion, what naive floor-error bound results?

**Solution.** There are $2^k$ squarefree divisor terms, each with error below one, so the naive bound is $\\mathcal{O}(2^k)$.

### 11. Legendre recurrence

Why does $\\Phi(x,a)=\\Phi(x,a-1)-\\Phi(x/p_{a},a-1)$?

**Solution.** From numbers avoiding the first $a-1$ primes, subtract those divisible by $p_{a}$. Dividing those by $p_{a}$ bijects them with numbers at most $x/p_{a}$ avoiding the earlier primes.

### 12. Legendre count

Use the identity conceptually for $x=10,a=2$.

**Solution.** Numbers avoiding $2,3$ are $1,5,7$, so $\\Phi(10,2)=3$; add $a-1=1$ to count primes beyond the two sieving primes, giving $\\pi(10)=4$.

### 13. Arbitrary gaps

Construct five consecutive composite integers.

**Solution.** $7!+2$ through $7!+6$ are divisible respectively by $2,3,4,5,6$, giving five consecutive composites.

### 14. Why no contradiction

Why do arbitrary long gaps not contradict $\\pi(x)\\sim x/\\log x$?

**Solution.** A sparse collection of exceptional intervals can coexist with the global cumulative ratio. The relative length of these constructed gaps is tiny compared with their location.

### 15. Almost prime

What is a semiprime, and why is finding one weaker than finding a prime?

**Solution.** A semiprime is a product of two primes, counting equality. It has two prime factors rather than one; sieve parity limitations often permit almost-prime conclusions without primality.

### 16. Reciprocal divergence

Does divergence of the reciprocal sum over all primes imply PNT?

**Solution.** No. It proves primes are numerous enough for that sum to diverge but gives much weaker quantitative distribution information than $\\pi(x)\\sim x/\\log x$.

### 17. Chebyshev versus PNT

What distinction separates Chebyshev bounds from PNT?

**Solution.** Chebyshev traps $\\pi(x)$ between constant multiples of $x/\\log x$; PNT identifies the limiting constant as exactly one.

### 18. Parity barrier

Why can a sieve upper bound fail to prove twin primes?

**Solution.** Broad combinatorial weights struggle to distinguish candidates with odd versus even numbers of prime factors. They may control almost primes without isolating pairs in which both entries have exactly one factor.

### 19. Fixed record caution

Why does the chapter omit a numerical best bounded-gap record?

**Solution.** Such records can improve. A durable theorem chapter states the stable qualitative result and requires a dated primary-source audit for the current numerical bound.

### 20. Certificate distinction

What certifies that a sieve survivor is prime?

**Solution.** In a complete sieve through $\\sqrt{N}$, the proof that every composite has a small prime divisor certifies survivors up to $N$. In a truncated rough-number sieve, survival only certifies absence of tested small factors.

## Project: exact sieve and theorem dashboard

Implement ordinary and segmented Eratosthenes plus the exact $\\Phi(x,a)$ recurrence without dependencies. Cross-check prime lists and $\\pi(x)$ values, display $\\pi(x)/(x/\\log x)$, $\\theta(x)/x$, and the largest observed gap with text tables. Record operation counts and memory, verify every listed prime by trial division for a smaller audit range, and explain why convergence-looking ratios do not prove PNT or any gap conjecture.

## Chapter summary

Prime-counting functions encode complementary weights, and PNT identifies their global scale. Eratosthenes is a complete bounded primality sieve; inclusion-exclusion and Legendre identities count rough numbers exactly. Advanced sieves trade exact full inclusion-exclusion for controlled bounds, but parity limitations separate almost-prime results from prime-pattern theorems.
## 9. Connect the three counting functions without confusing gaps

The weighted functions retain different information. Theta counts each prime with weight log p; psi repeats that weight at every prime power. For x≥2, partial summation gives the exact relations
\\[
\\theta(x)=\\pi(x)\\log x-\\int_2^x\\frac{\\pi(t)}t\\,dt,\\qquad
\\pi(x)=\\frac{\\theta(x)}{\\log x}+
\\int_2^x\\frac{\\theta(t)}{t(\\log t)^2}\\,dt.
\\]
The jump at two is included by the boundary convention: at x=2 these formulas give log two and one. They follow by applying summation by parts to the step functions, not by differentiating pi as if it were smooth.

If $\\theta(x)\\sim x$, it is eventually bounded by Cx. Split the second integral at $\\sqrt x$. The early portion is $O(\\sqrt x)$ after absorbing the fixed lower endpoint; on the later portion $(\\log t)^{-2}\\le4/(\\log x)^2$. Hence the integral is $O(x/(\\log x)^2)+O(\\sqrt x)$, smaller than $x/\\log x$. The boundary term then proves $\\pi(x)\\sim x/\\log x$.

Conversely, if $\\pi(x)\\sim x/\\log x$, the first boundary term is asymptotic to x. The integral is $O(x/\\log x)+O(\\sqrt x)$ by the same split, using the eventual bound $\\pi(t)\\le Ct/\\log t$. Thus theta is asymptotic to x. Finite initial intervals affect only bounded constants.

Finally $\\psi(x)-\\theta(x)$ is nonnegative and is the sum over occurrences $p^k\\le x$, k≥2, of log p. The occurrence bound in original Exercise 2 makes it $O(\\sqrt x\\log x)=o(x)$. Therefore either weighted asymptotic gives the other. The proof has kept prime-power occurrences separate from distinct prime bases, so repeated powers are counted correctly.

None of these cumulative statements supplies an individual next prime. The dashboard's gap statistic is the maximum difference of adjacent primes with both endpoints at most x. It does not measure the still unfinished gap after the last listed prime, nor the maximum over all integers. That right-edge boundary matters even for a perfectly correct finite sieve.

## 10. Complete an elementary Chebyshev comparison

The binomial coefficient $B_m=\\binom{2m}{m}$ satisfies
\\[
\\frac{4^m}{2m+1}\\le B_m\\le4^m.
\\]
The upper bound follows by summing the binomial coefficients of order 2m. Their middle coefficient is largest, so the sum is at most $2m+1$ times that coefficient, proving the lower bound.

Every prime m<p≤2m divides $B_m$: it occurs once in the numerator factorial and not in either denominator factorial. Therefore
\\[
\\theta(2m)-\\theta(m)\\le\\log B_m\\le2m\\log2.
\\]
Apply this at consecutive powers of two and sum. One obtains $\\theta(2^r)<2^{r+1}\\log2$. Choosing the first power of two at least x then gives the safe bound $\\theta(x)\\le4x\\log2$ for x≥2. No limiting constant is identified.

A lower bound uses all prime powers rather than just the primes in one interval. The exponent of p in $B_m$ is
\\[
\\sum_{j\\ge1}\\left(\\left\\lfloor\\frac{2m}{p^j}\\right\\rfloor
-2\\left\\lfloor\\frac m{p^j}\\right\\rfloor\\right).
\\]
Each summand is zero or one and vanishes when $p^j>2m$. Consequently $\\log B_m\\le\\psi(2m)$. The lower binomial bound yields
$\\psi(2m)\\ge2m\\log2-\\log(2m+1)$.
Subtract the proved $o(m)$ prime-power excess to get a positive constant times 2m as a lower bound for theta at sufficiently large even inputs. Monotonicity transfers it to every sufficiently large real x by taking $m=\\lfloor x/2\\rfloor$.

Now $\\theta(x)\\le\\pi(x)\\log x$ gives $\\pi(x)\\ge cx/\\log x$. For the upper bound, separate primes at $\\sqrt x$. There are at most $\\sqrt x$ below that threshold; every larger prime contributes at least half log x to theta. Thus
\\[
\\pi(x)\\le\\sqrt x+\\frac{2\\theta(x)}{\\log x}
=O(x/\\log x).
\\]
Together these are Chebyshev bounds. They establish the order of magnitude, while leaving a whole interval of possible limiting ratios. Nothing in the binomial comparison has silently supplied the PNT constant one.

They also justify the familiar sieve operation estimate. Partial summation and the upper bound give
$\\sum_{p\\le y}1/p=O(1+\\log\\log y)$.
Indeed its integral term is bounded by a constant times $\\int_2^y dt/(t\\log t)$. The number of marking attempts is at most $\\sum_{p\\le\\sqrt N}N/p$, giving $O(N\\log\\log N)$ after handling bounded small N separately. This concerns the stated marking model, not elapsed seconds.

## 11. State the sieve invariant before splitting memory into segments

For ordinary Eratosthenes, after processing all primes at most p, every composite whose least prime factor is at most p has been marked. A smaller multiple kp<p² has k<p and therefore already has a smaller prime factor. Starting the p loop at p² loses no composite and preserves p itself.

Every composite n≤N has a least prime factor at most $\\sqrt n\\le\\sqrt N$. When the outer loop reaches that integer, it is still unmarked, because it is prime. It therefore starts its marking loop. This proves both directions: no prime is marked and every composite is eventually marked. Zero and one must be excluded explicitly; a table initially filled with ones does not do that for us.

For a half-open segment $[L,H)$, the first relevant multiple of a base prime is
\\[
\\max\\left(p^2,\\left\\lceil L/p\\right\\rceil p\\right).
\\]
The ceiling reaches the first multiple inside the interval, and p² prevents marking a prime as its own multiple. The index written in the local array is the integer multiple minus L. Both interval endpoints and the change of coordinates are part of correctness.

For $[25,41)$, the base primes two, three and five mark respectively the even entries starting at twenty-six; the multiples of three starting at twenty-seven; and twenty-five, thirty and thirty-five, with forty also divisible by five. The survivors are twenty-nine, thirty-one and thirty-seven. A composite at the left endpoint is marked, while the excluded right endpoint forty-one is not accidentally reported.

Segments do not create a weaker primality test. They use all base primes through $\\lfloor\\sqrt N\\rfloor$, so the same small-factor proof applies inside every segment. If the base list were cut off earlier, the result would only be a rough-number filter. A check at N=49 specifically needs the base prime seven: rounding the square-root bound downward incorrectly can leave forty-nine.

The ordinary algorithm retains N+1 flag cells. A segmented algorithm retains one block of at most B flag cells and a base-prime list through $\\sqrt N$, after constructing that list. This is $O(B+\\sqrt N)$ working storage in a logical-cell model. A returned list of all primes consumes additional output storage; omitting it from the working-space statement does not make it disappear.

Reusing every base prime at each segment adds scanning work. Accordingly the reference records base-prime scans separately from marking attempts. The smaller buffer does not prove that a particular implementation is faster. Object overhead, allocator behavior, processor caches and elapsed timing are not measured by a count of flag cells.

## 12. Exact rough-number counts and their integer recurrence

Fix real x≥0 and z≥2, and let $k(z)=\\#\\{p:p<z\\}$. The squarefree product $P(z)$ has exactly $2^{k(z)}$ divisors, one for each subset of those primes. When z itself is prime, that prime is excluded: for z=3 the product is two and has two divisors, although $\\pi(3)=2$.

For each positive integer n, the sum $\\sum_{d\\mid\\gcd(n,P(z))}\\mu(d)$ is one if the gcd is one and zero otherwise. If the gcd has r distinct prime factors, the sum is $(1-1)^r$. Summing this indicator over n≤x proves
\\[
S(x,z)=\\sum_{d\\mid P(z)}\\mu(d)\\lfloor x/d\\rfloor.
\\]
No probabilistic independence assumption about divisibility was used.

Replacing each floor by x/d gives the product main term, and the absolute error is at most $2^{k(z)}$. The bound is safe but often useless: its exponential cost reflects summing errors separately. At x=20,z=3 the exact count is ten odd integers. At z=5 the tested primes are two and three, so inclusion-exclusion gives $20-10-6+3=7$. The endpoint convention changes the actual set being counted.

Let $p_1,\\ldots,p_a$ be the first a primes. For integer x≥0 set $\\Phi(x,0)=x$. Among integers avoiding the first a−1 primes, those divisible by $p_a$ correspond bijectively, after division by $p_a$, to integers at most $\\lfloor x/p_a\\rfloor$ avoiding those earlier primes. Hence
\\[
\\Phi(x,a)=\\Phi(x,a-1)-\\Phi(\\lfloor x/p_a\\rfloor,a-1).
\\]
The floor version is exactly the real-argument recurrence on integer data. The base $\\Phi(0,a)=0$ is also needed.

Every recursive call lowers a, proving termination. Memoization stores each pair (x,a) once. For a fixed initial pair (X,A), all states lie in $0\\le x\\le X$, $0\\le a\\le A$, giving the deliberately loose bound $(X+1)(A+1)$ on stored pairs. Actual state counts are reported; this bound is not a claim that the recurrence beats sieving.

For x≥2 choose $a=\\pi(\\sqrt x)$. Every surviving number beyond one is prime, and all surviving primes exceed the sieving prefix. Thus $\\Phi(x,a)=1+\\pi(x)-a$, proving Legendre's identity with its exact scope. At x=30 the correct prefix is two, three and five: the survivors are $1,7,11,13,17,19,23,29$, giving $8+3-1=10$.

With only two and three removed, twenty-five survives too, as does five itself. The rough count is ten and the mistaken Legendre conversion would give eleven. A recurrence can be implemented perfectly while the caller chooses an insufficient prefix. The prime-prefix and square-root conditions are distinct from recursion correctness.

## 13. Separate a finite dashboard from an asymptotic theorem

A dashboard row should name the cutoff, the precise count, the logarithm convention, and the range over which the gap maximum was taken. The ratios use the natural logarithm. Computing theta from floating logarithms gives an approximation to an exactly defined weighted sum; it does not turn the prime count itself into an approximate integer.

Two different algorithms agreeing on a list are useful evidence, especially when they organize work differently. They may nevertheless share a base-prime list or a boundary convention. The reference therefore also uses trial division on a separately stated smaller interval and supplies proofs of the sieve invariants and recurrence. Algorithm agreement, an independent finite audit and a general correctness proof have different roles.

For trial division, an integer n≥2 is prime if no integer d with $2\\le d\\le\\lfloor\\sqrt n\\rfloor$ divides it. A composite has such a factor, so this verifies rejected values as well as listed primes when applied to every candidate. It uses no sieve flag or recurrence state. Auditing the full smaller interval therefore checks completeness there, rather than merely confirming a few reported primes.

The largest complete gap through thirty is six, from twenty-three to twenty-nine. This is an exact finite maximum, not a prediction for the next gap or an estimate for every large prime. Likewise a ratio becoming nearer one on several selected rows does not prove its limit. Any finite table can be extended by sequences with different later behavior; PNT needs a proof controlling all sufficiently large inputs.

The factorial construction gives arbitrarily long composite intervals without conflicting with global density. Its witness interval is extremely short relative to its factorial location. Conversely the qualitative theorem on bounded gaps concerns infinitely many pairs, whereas a dashboard has only finitely many pairs. Neither observation proves twin-prime infinitude.

The parity barrier is another boundary of method. Inclusion-exclusion and truncated sieve weights can control divisibility by tested primes while failing to separate one remaining prime factor from two. A large supply of survivors or almost primes is therefore not automatically a lower bound for a desired prime pattern. The finite Eratosthenes proof succeeds because it tests through the complete square-root threshold, not because general sieve weights have overcome that barrier.

## 14. Build an upper-bound sieve from an exact finite inequality

There is a concrete bridge between full inclusion-exclusion and the optimized weights named in Section 7. For a real cutoff $X\\ge0$, let P be a finite squarefree prime product. Choose real numbers $\\lambda_d$ on some divisors of P, set all other weights to zero, and require $\\lambda_1=1$. If n is coprime to P, the divisor sum $\\sum_{d\\mid n,\\ d\\mid P}\\lambda_d$ is exactly one. For any other n its square is nonnegative. Therefore
\\[
1_{\\gcd(n,P)=1}\\le
\\left(\\sum_{\\substack{d\\mid n\\\\d\\mid P}}\\lambda_d\\right)^2.
\\]
This pointwise inequality already specifies which direction the resulting sieve bound has.

Summing and expanding a finite square gives
\\[
S(X,P)\\le\\sum_{d,e\\mid P}\\lambda_d\\lambda_e
\\left\\lfloor\\frac{X}{[d,e]}\\right\\rfloor,
\\]
where S(X,P) counts positive n≤X coprime to P and [d,e] is their least common multiple. The lcm appears because simultaneous divisibility by d and e means divisibility by [d,e]. No infinite rearrangement or statistical model is involved.

Replacing the floors by $X/[d,e]$ gives a quadratic main expression with error at most $\\sum_{d,e}|\\lambda_d\\lambda_e|$. Sparse support reduces the number of pairs, but the weights themselves matter in the error budget. Optimizing the main quadratic form subject to useful support and error constraints is the elementary mechanism behind a quadratic upper-bound sieve; the full Selberg theory is a further theorem, not proved by merely displaying this inequality.

For an exact small certificate take P=6, X=12, $\\lambda_1=1$, $\\lambda_2=\\lambda_3=-1/2$, and $\\lambda_6=0$. The four coprime integers one, five, seven and eleven each contribute one. The six integers divisible by exactly one of two and three contribute one quarter each. The two multiples of six contribute zero. The total upper bound is therefore $4+6/4=11/2$, so the integer count is at most five. The true count is four: the bound is valid but not exact.

The direction cannot be reversed by optimism about the weights. A simple lower bound here comes instead from the pointwise inequality
$1_{\\gcd(n,6)=1}\\ge1-1_{2\\mid n}-1_{3\\mid n}$.
Its sum is $12-6-4=2$. Adding the intersection term gives the exact inclusion-exclusion value four. These three results—lower bound two, exact count four, quadratic upper bound five—answer different questions about the same set.

A finite divisibility signature also illustrates a limitation without claiming a proof of the full parity barrier. Seven and forty-nine both avoid the tested primes two, three and five. Any weight depending only on that tested signature treats them identically, although one is prime and the other has two prime factors. A complete bounded Eratosthenes run eventually tests seven and separates them; a truncated small-prime filter cannot do so from that signature alone.

## Solutions: Exact sieve and theorem dashboard model

This is a bounded reference instance of the preserved project. It supplies ordinary and segmented Eratosthenes, the exact integer Phi recurrence, and one report through N=10,000. The main segment width is 128; report checkpoints are 10, 30, 100, 1,000 and 10,000. Independent trial division audits every integer through 100. These are explicit reference choices because the original prompt has no numerical endpoint.

The listing below prints one canonical JSON report containing two text tables, the prime list and operation records. It reads no input and uses no files, network, subprocess or external package. The JSON transport is a presentation choice for this reference, not an additional original learner obligation. Its bounded algorithms and report construction are separate from the final stdout statement.

### Small exact certificates before execution

The hand-derived primes through thirty are $2,3,5,7,11,13,17,19,23,29$. Through one hundred, append $31,37,41,43,47,53,59,61,67,71,73,79,83,89,97$, giving twenty-five primes. Trial division through ten suffices to check each candidate through one hundred. The maximum complete gaps are two, six and eight at cutoffs ten, thirty and one hundred respectively.

| x | a | Phi(x,a) | pi(x) | exact theta expression | complete gap maximum |
| --- | --- | --- | --- | --- | --- |
| 10 | 2 | 3 | 4 | $\\log210$ | 2 |
| 30 | 3 | 8 | 10 | $\\log6469693230$ | 6 |
| 100 | 4 | 22 | 25 | $\\sum_{p\\le100}\\log p$, using the displayed list | 8 |

The small recurrence checks are $\\Phi(10,0)=10$, $\\Phi(10,1)=5$, $\\Phi(10,2)=3$, $\\Phi(30,2)=10$, $\\Phi(30,3)=8$ and $\\Phi(0,3)=0$. For ordinary N=30 the marking attempts are fourteen at prime two, eight at three and two at five, totaling twenty-four. Segmentation with width four partitions exactly those same marking events, so also has twenty-four segment marking attempts, with seed construction recorded separately. This changed width tests repeated segment boundaries rather than repeating the main width.

At cutoff ten the two displayed diagnostic quantities are exactly $4\\log10/10$ and $\\log210/10$. The listing evaluates logarithms with standard binary floating arithmetic and prints twelve significant digits; these displays are diagnostics, not certified interval enclosures. No approximate ratio or larger-checkpoint count is asserted as observed here.

### Descriptive comparison rubric

A complete comparison preserves both prime-list algorithms and the integer Phi method; agrees on the full reference list and every checkpoint count; and independently audits every candidate through the smaller limit, including absence of omitted primes. Explain the small-factor invariant, the segment start formula and the recurrence bijection rather than relying only on matching outputs.

Record marking attempts, candidate/base-prime scans, Phi calls/cache states/depth, peak flag cells and stored prime entries using their stated definitions. The report's flag-cell figures are the largest individual logical flag-table sizes, not the total simultaneously allocated payload: a replacement table can temporarily coexist with the old table during assignment. Transient buffers, output lists and Python object overhead are excluded from these counters. Prime entries and memo states are reported separately. Logical events are not Python instruction counts; total process memory and elapsed time are not measured. Compare methods using these logical records rather than calling them timing results.

Check zero/one/two, a segment of width one, width four at N=30, the first composite square and the incomplete-prefix example above. The fixed reference verifies small exact values internally and compares the full N=10,000 outputs; reproducing that complete configured report remains an execution step. The source text supplies no invented run or larger-range result.

Finally separate exact finite prime counts, approximate logarithmic displays, a finite observed-gap maximum after execution, imported asymptotic theorems and open conjectures. A plausible graph or a successful finite report earns no universal PNT, bounded-gap or twin-prime conclusion.

## Solutions: Dependency-free sieve dashboard listing

The finite public listing uses Python 3.9 or later and only json/math from its standard library. Its configured maximum is 10,000; no external input can enlarge that bound. All mathematical expected small values above are derived by hand. Execution and the resulting stdout hash belong to the actual reproduction record.

\`\`\`python
import json
from math import fsum, isqrt, log

MAX_N = 10_000
SEGMENT = 128
AUDIT_N = 100
CHECKPOINTS = (10, 30, 100, 1_000, 10_000)


def bounded_integer(value: int, low: int, high: int, name: str) -> None:
    if type(value) is not int or not low <= value <= high:
        raise ValueError(f"{name} must be an integer in [{low}, {high}]")


def ordinary(n: int) -> tuple[list[int], dict[str, int]]:
    bounded_integer(n, 0, MAX_N, "n")
    flags = bytearray(b"\\x01") * (n + 1)
    flags[0] = 0
    if n >= 1:
        flags[1] = 0
    scans = marks = 0
    for p in range(2, isqrt(n) + 1):
        scans += 1
        if flags[p]:
            for multiple in range(p * p, n + 1, p):
                marks += 1
                flags[multiple] = 0
    primes = [k for k in range(2, n + 1) if flags[k]]
    return primes, {
        "candidate_scans": scans,
        "mark_attempts": marks,
        "peak_flag_cells": n + 1,
        "returned_prime_entries": len(primes),
    }


def segmented(n: int, width: int) -> tuple[list[int], dict[str, int]]:
    bounded_integer(n, 0, MAX_N, "n")
    bounded_integer(width, 1, MAX_N, "width")
    base, seed_stats = ordinary(isqrt(n))
    primes: list[int] = []
    marks = blocks = peak = base_scans = 0
    for low in range(2, n + 1, width):
        high = min(n + 1, low + width)
        flags = bytearray(b"\\x01") * (high - low)
        blocks += 1
        peak = max(peak, len(flags))
        for p in base:
            base_scans += 1
            if p * p >= high:
                break
            start = max(p * p, ((low + p - 1) // p) * p)
            for multiple in range(start, high, p):
                marks += 1
                flags[multiple - low] = 0
        primes.extend(low + i for i, flag in enumerate(flags) if flag)
    return primes, {
        "blocks": blocks,
        "base_prime_scans": base_scans,
        "mark_attempts": marks,
        "seed_mark_attempts": seed_stats["mark_attempts"],
        "peak_segment_cells": peak,
        "peak_flag_cells": max(seed_stats["peak_flag_cells"], peak),
        "base_prime_entries": len(base),
        "returned_prime_entries": len(primes),
    }


def phi_exact(x: int, a: int, primes: tuple[int, ...]) -> tuple[int, dict[str, int]]:
    """Precondition: primes is the complete increasing prime prefix used."""
    bounded_integer(x, 0, MAX_N, "x")
    bounded_integer(a, 0, min(100, len(primes)), "a")
    memo: dict[tuple[int, int], int] = {}
    calls = hits = depth = 0

    def visit(t: int, j: int) -> int:
        nonlocal calls, hits, depth
        calls += 1
        depth = max(depth, a - j + 1)
        key = (t, j)
        if key in memo:
            hits += 1
            return memo[key]
        if j == 0:
            value = t
        elif t == 0:
            value = 0
        else:
            value = visit(t, j - 1) - visit(t // primes[j - 1], j - 1)
        memo[key] = value
        return value

    value = visit(x, a)
    return value, {
        "calls": calls,
        "cache_hits": hits,
        "cache_states": len(memo),
        "max_depth": depth,
    }


def trial_list(n: int) -> tuple[list[int], int]:
    bounded_integer(n, 0, AUDIT_N, "trial n")
    result: list[int] = []
    divisions = 0
    for candidate in range(2, n + 1):
        divisor = 2
        prime = True
        while divisor * divisor <= candidate:
            divisions += 1
            if candidate % divisor == 0:
                prime = False
                break
            divisor += 1
        if prime:
            result.append(candidate)
    return result, divisions


def largest_complete_gap(primes: list[int]) -> int:
    return max((q - p for p, q in zip(primes, primes[1:])), default=0)


def require(condition: bool, message: str) -> None:
    if not condition:
        raise AssertionError(message)


def build_report() -> dict[str, object]:
    prime_list, ordinary_stats = ordinary(MAX_N)
    segmented_list, segmented_stats = segmented(MAX_N, SEGMENT)
    require(prime_list == segmented_list, "full prime-list disagreement")
    audit, divisions = trial_list(AUDIT_N)
    require(audit == [p for p in prime_list if p <= AUDIT_N],
            "independent trial-division disagreement")
    base = tuple(audit)

    golden_30 = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
    small, small_stats = ordinary(30)
    changed, changed_stats = segmented(30, 4)
    require(small == golden_30 == changed, "small prime-list golden")
    require(small_stats["mark_attempts"] == 24, "ordinary marking golden")
    require(changed_stats["mark_attempts"] == 24, "segmented marking golden")
    require(largest_complete_gap(small) == 6, "small gap golden")
    require(len(audit) == 25 and audit[-1] == 97, "trial audit golden")
    require(largest_complete_gap(audit) == 8, "audit gap golden")
    for n, expected in ((0, []), (1, []), (2, [2])):
        require(ordinary(n)[0] == expected, "ordinary boundary")
        require(segmented(n, 1)[0] == expected, "segmented boundary")
    for x, a, expected in ((0, 3, 0), (10, 0, 10), (10, 1, 5),
                           (10, 2, 3), (30, 2, 10), (30, 3, 8)):
        require(phi_exact(x, a, base)[0] == expected, "Phi small golden")

    rows: list[dict[str, object]] = []
    table = ["x a Phi pi pi/(x/log x) theta/x largest_complete_gap"]
    for x in CHECKPOINTS:
        current = [p for p in prime_list if p <= x]
        a = sum(p * p <= x for p in base)
        phi_value, phi_stats = phi_exact(x, a, base)
        count = len(current)
        require(phi_value + a - 1 == count, "Legendre count disagreement")
        ratio = count * log(x) / x
        theta_ratio = fsum(log(p) for p in current) / x
        gap = largest_complete_gap(current)
        rows.append({
            "x": x, "a": a, "Phi": phi_value, "pi": count,
            "pi_ratio_float": ratio, "theta_ratio_float": theta_ratio,
            "largest_complete_gap": gap, "Phi_operations": phi_stats,
        })
        table.append(f"{x} {a} {phi_value} {count} {ratio:.12g} "
                     f"{theta_ratio:.12g} {gap}")

    operation_table = [
        "algorithm logical_operations logical_memory",
        "ordinary marks=" + str(ordinary_stats["mark_attempts"])
        + " scans=" + str(ordinary_stats["candidate_scans"])
        + " flag_cells=" + str(ordinary_stats["peak_flag_cells"]),
        "segmented marks=" + str(segmented_stats["mark_attempts"])
        + " seed_marks=" + str(segmented_stats["seed_mark_attempts"])
        + " base_scans=" + str(segmented_stats["base_prime_scans"])
        + " peak_flag_cells=" + str(segmented_stats["peak_flag_cells"])
        + " base_prime_entries=" + str(segmented_stats["base_prime_entries"]),
        "trial division_attempts=" + str(divisions)
        + " audit_limit=" + str(AUDIT_N),
    ]
    operation_table.extend(
        "Phi x=" + str(row["x"]) + " " + json.dumps(row["Phi_operations"],
        sort_keys=True, separators=(",", ":")) for row in rows
    )
    return {
        "bounds": {"N": MAX_N, "segment": SEGMENT, "audit": AUDIT_N,
                   "checkpoints": list(CHECKPOINTS)},
        "prime_list": prime_list,
        "trial_audit_primes": audit,
        "rows": rows,
        "ordinary_operations": ordinary_stats,
        "segmented_operations": segmented_stats,
        "trial_division_attempts": divisions,
        "text_tables": ["\\n".join(table), "\\n".join(operation_table)],
        "small_goldens_verified": True,
        "claim_boundary": "Finite exact counts; floating diagnostic ratios; no PNT or gap-conjecture proof.",
    }


if __name__ == "__main__":
    print(json.dumps(build_report(), sort_keys=True, separators=(",", ":"),
                     allow_nan=False))
\`\`\`

## Exercises: Sieve boundary extension

This optional question supplements the original twenty exercises.

### NTP-18-E21. Strict prime bounds and a complete prefix

Compute S(20,3) for the strict product over primes p<3. Compare it with Phi(20,2), whose two sieving primes are two and three. State which count gives pi(20) through Legendre's identity, and explain why the divisor count for P(3) is two rather than four.

## Solutions: Sieve boundary extension

### NTP-18-E21. Strict prime bounds and a complete prefix — solution

P(3)=2, so S(20,3)=20−10=10. Removing both two and three instead gives Phi(20,2)=20−10−6+3=7. Since the primes through sqrt(20) are exactly two and three, Legendre gives pi(20)=7+2−1=8. Only one prime is strictly below three, so its squarefree product has two subset divisors, one and two. The value pi(3)=2 includes the excluded endpoint three and is not the number of product factors.

## References: Sieve and theorem scopes

The weighted-count comparison, elementary binomial bounds, complete sieve proof, inclusion-exclusion and Phi recurrence are supplied above. PNT itself and advanced-sieve/bounded-gap results remain the original chapter's explicit imported theorems. Their qualitative scopes can be checked in [NIST DLMF 25.16](https://dlmf.nist.gov/25.16) and [James Maynard, Small gaps between primes](https://arxiv.org/abs/1311.4600). The project distinguishes manually derived finite certificates from the full configured report that must actually be reproduced.
`;export{e as default};