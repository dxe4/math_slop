
# Chebyshev bounds

Prime numbers become less frequent, but saying that they become rarer does not specify a mathematical scale. Chebyshev's theorem supplies that scale: for all sufficiently large real inputs, the number of primes is trapped between two fixed positive multiples of the input divided by its logarithm. The constants need not agree. That distinction separates an order-of-magnitude theorem from the prime number theorem.

This **Years 2–3 (L3)** article assumes [integer prime factorization](#/books/number-theory-proof-reference/primes-factorization-valuations), logarithms and elementary estimates. The actual [Chebyshev, Sieves and Prime Distribution chapter](#/books/algebraic-analytic-number-theory/prime-distribution-sieves) supplies the wider weighted-count and sieve development. The separate [Prime Number Theorem chapter](#/books/algebraic-analytic-number-theory/prime-number-theorem-newman) proves the stronger limiting statement. Here we derive the elementary two-sided scale from central binomial coefficients.

## Weight primes before counting them

Write pi of x for the number of primes at most x. Define two weighted functions:

$$\theta(x)=\sum_{p\leq x}\log p,
\qquad \psi(x)=\sum_{p^k\leq x}\log p.$$

The second sum includes each prime once for every positive exponent whose power is within the bound. It is the logarithm of the least common multiple of all positive integers up to the integer part of x. The first sum counts each prime only once. These functions differ, but the extra prime powers will be small enough compared with x.

For a positive integer m, the central binomial coefficient satisfies

$$\frac{4^m}{2m+1}\leq {2m\choose m}\leq4^m.$$

Indeed the sum of all coefficients in that binomial row is the power of four, and the central coefficient is the largest. There are twice m plus one coefficients, proving the lower bound; any single coefficient is at most their sum, proving the upper bound. Taking logarithms gives an essentially linear quantity whose prime factors can be examined exactly.

## An upper bound for the weighted prime count

Every prime strictly between m and twice m divides the central binomial coefficient: it occurs once in the numerator factorial and not at all in either denominator factorial. Therefore

$$\theta(2m)-\theta(m)\leq\log {2m\choose m}
\leq2m\log2.$$

Apply this successively with m a power of two and add. The left sides telescope. At a power-of-two input y the result is less than twice y times the logarithm of two. For a general real x at least two, choose the first power of two not smaller than x. That power is less than twice x, so monotonicity gives the safe bound

$$\theta(x)\leq4(\log2)x.$$

This estimate deliberately does not optimize its constant. Its purpose is to establish a uniform linear bound, not fit a numerical table. A finite set of prime counts could suggest a scale but cannot prove this assertion for every sufficiently large input.

## A lower bound needs prime powers

To bound the same binomial coefficient from below using its factors, retain all prime powers. The exponent of a prime p in it is

$$\sum_{j\geq1}\left(
\left\lfloor\frac{2m}{p^j}\right\rfloor
-2\left\lfloor\frac m{p^j}\right\rfloor\right).$$

Each parenthesis is zero or one, since twice a real number's fractional part lies between zero and two. Terms vanish when the prime power exceeds twice m. Thus the coefficient's logarithm is at most psi at twice m. The earlier lower coefficient estimate gives

$$\psi(2m)\geq2m\log2-\log(2m+1).$$

We must still remove the repeated prime contributions. For any exponent at least two, its prime base is at most the square root of x. There are at most the logarithm of x to base two possible exponents, and each logarithmic weight is at most the logarithm of x. Hence the elementary, intentionally coarse estimate

$$0\leq\psi(x)-\theta(x)
\leq\sqrt{x}\,\lfloor\log_2x\rfloor\log x=o(x).$$

The final assertion follows because any fixed power of a logarithm grows more slowly than a positive power of x. Subtracting this error from the binomial lower bound makes theta at sufficiently large even inputs at least a fixed positive multiple of the input. For arbitrary real x take m to be the integer part of half x: twice m differs from x by less than two, and monotonicity transfers a positive linear lower bound to x. No assertion that theta divided by x tends to one has entered the proof.

## Convert weighted bounds into Chebyshev bounds

Each logarithmic weight is at most the logarithm of x, so theta is at most pi times that logarithm. The positive linear lower bound for theta therefore gives the required lower bound for pi.

For the upper bound, separate primes at the square root of x. At most that many primes lie below the threshold. Each larger prime contributes at least half the logarithm of x to theta. Consequently

$$\pi(x)\leq\sqrt{x}+\frac{2\theta(x)}{\log x}
\leq C\frac{x}{\log x}$$

for some fixed C and all sufficiently large x. Together the two estimates prove Chebyshev's theorem. The square-root term is absorbed because its ratio to the displayed scale tends to zero. The phrase “sufficiently large” permits a finite initial interval to be handled separately; it does not license exceptions at arbitrarily large inputs.

## Worked example: one binomial coefficient, two different bounds

At m equal to six the central coefficient is nine hundred twenty-four, with prime factorization

$$924=2^2\cdot3\cdot7\cdot11.$$

The primes in the interval from six exclusively to twelve inclusively are seven and eleven. Their product seventy-seven divides that coefficient, illustrating the upper-bound argument. But the coefficient has additional small-prime factors: it is not the product of just the interval primes.

The least common multiple through twelve is twenty-seven thousand seven hundred twenty, with prime powers eight, nine, five, seven and eleven. The coefficient divides it, illustrating the separate bound by psi. The two estimates use different divisibility statements. Neither identifies an exact prime count from the size of one binomial coefficient, and neither turns this finite example into the asymptotic proof; the uniform inequalities above do that work.

## Exercises

### Exercise 1 {#analytic-number-theory-chebyshev-ex-1}

Suppose positive constants c and C bound pi of x between c times x over log x and C times that quantity eventually. Explain why this proves the correct scale but does not logically imply that pi of x times log x divided by x tends to one.

<details><summary>Hint 1</summary>
Normalize both bounds by the same positive factor.
</details>
<details><summary>Hint 2</summary>
A function can stay between two constants without tending to a specified value.
</details>
<details><summary>Full solution</summary>
The normalized count is trapped between c and C. This excludes decay to zero or growth to infinity, but does not select one particular limit or guarantee any limit exists. Even a constant lying strictly between the bounds need not equal one. This logical observation does not claim that the actual prime count fails to converge after normalization; the stronger prime number theorem proves that it does converge to one. Its proof requires information beyond the Chebyshev inequalities.
</details>

### Exercise 2 {#analytic-number-theory-chebyshev-ex-2}

Deduce from Chebyshev's bounds that there are infinitely many primes, while the proportion of integers at most x that are prime tends to zero. Explain why these conclusions are compatible.

<details><summary>Hint 1</summary>
The lower scale x divided by log x grows without bound.
</details>
<details><summary>Hint 2</summary>
Divide the upper bound for pi by x, and let x increase.
</details>
<details><summary>Full solution</summary>
The lower bound forces pi of x to grow without bound, so no finite list contains every prime. The upper bound divided by x is C divided by log x, which tends to zero. Nonnegativity then forces the prime proportion to zero. A set can be infinite yet occupy a vanishing fraction of growing initial intervals. The first assertion concerns unbounded total count; the second compares that count with a faster-growing denominator. Neither conclusion contradicts the other or says that all sufficiently large integers are composite.
</details>

*Source provenance: original Euler orientation proof and exercises, linked to the actual Chebyshev/sieve and PNT primary chapters. Constants are safe bounds, not optimized claims or empirical estimates. CC BY-SA 4.0. Draft; no independent review is claimed.*
