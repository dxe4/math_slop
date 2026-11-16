
# The Euler product and zeta for Re s > 1

Every positive integer has a unique prime factorization. The Euler product turns that arithmetic fact into an identity between an infinite sum over integers and an infinite product over primes. The passage from finite factorization to infinite expressions requires convergence; without it, a persuasive formal expansion can cease to be a valid equality.

This **Years 2–3 (L3)** article assumes complex numbers, [absolute convergence and power series](#/books/complex-analysis/power-series-analytic-functions) and unique integer factorization. The [convolution orientation](#/articles/analytic-number-theory-arithmetic-functions-convolution) prepares the coefficient viewpoint. Read the actual [Dirichlet Series and Euler Products chapter](#/books/algebraic-analytic-number-theory/dirichlet-series-euler-products) for general multiplicative coefficients, logarithmic differentiation and convergence regions. Here we prove the zeta product and nonvanishing only in its initial half-plane.

## The sum has an initial domain

For a complex number s with real part sigma, define the positive-base power using the ordinary real logarithm:

$$n^{-s}=\exp(-s\log n).$$

Its modulus is n to minus sigma. Integral comparison therefore proves absolute convergence of

$$\zeta(s)=\sum_{n\geq1}n^{-s}\qquad(\operatorname{Re}s>1).$$

This definition names both a formula and a domain. At real s equal to one the series is harmonic and diverges. Defining a continued function elsewhere is a later construction, not a change in what convergence of this original series means.

Complex coefficients can cancel. Consequently a bound using absolute values is especially useful: it controls reindexing independently of such cancellation. At real s greater than one every term is positive, which supplies additional monotonicity, but the product proof below does not restrict s to the real axis.

## First expand only finitely many prime factors

Choose an integer cutoff N at least two. For each prime at most N, the geometric series converges absolutely because the modulus of its ratio is less than one. Multiplying the finitely many absolutely convergent geometric series gives

$$\prod_{p\leq N}(1-p^{-s})^{-1}
=\sum_{\substack{n\geq1\\\text{every prime factor of }n\leq N}}n^{-s}.$$

Unique factorization supplies the bijection: choosing a nonnegative exponent at each of these finitely many primes specifies exactly one supported integer. The integer one corresponds to every exponent zero. The sum on the right is still infinite, since even a single allowed prime has arbitrarily large powers. Finite number of factors does not mean finite number of terms after expansion.

All omitted integers have a prime factor larger than N and are therefore themselves larger than N. Absolute convergence gives the concrete error estimate

$$\left|\zeta(s)-\prod_{p\leq N}(1-p^{-s})^{-1}\right|
\leq\sum_{n>N}n^{-\sigma}
\leq\frac{N^{1-\sigma}}{\sigma-1}.$$

The last quantity tends to zero at every fixed sigma greater than one. This proves the Euler product by a specified limit of finite prime products. It also gives a bound uniform when the real part stays a fixed positive distance to the right of one. The error bound becomes poor near the boundary, which correctly signals that the proof does not authorize taking sigma equal to one.

## A limit of nonzero products need not be nonzero

Each finite factor is nonzero, but that alone does not prove that their limit is nonzero. A sequence of positive numbers can tend to zero. We need to control the accumulated logarithms rather than merely inspect the individual factors.

For a complex w of modulus less than one, its power-series logarithm satisfies

$$\exp\left(\sum_{k\geq1}\frac{w^k}{k}\right)=\frac1{1-w}.$$

This is the elementary geometric-logarithm identity on the unit disk, so no arbitrary global logarithm branch is being selected. For our fixed s, the sum of absolute values across primes and exponents is bounded by

$$\sum_p\sum_{k\geq1}\frac{p^{-k\sigma}}k
\leq\frac1{1-2^{-\sigma}}\sum_{n\geq2}n^{-\sigma}<\infty.$$

Thus the prime logarithm sums converge to a finite complex number L. Each finite Euler product is the exponential of its finite log sum. Continuity of the exponential and the proved product limit show that zeta equals the exponential of L. An exponential never vanishes. This supplies nonvanishing throughout the open half-plane, with the convergence premise doing the essential work.

The result does not prove nonvanishing on the boundary line of real part one. Nor does it settle zeros in the critical strip. Those questions concern the extended function and require additional arguments. The actual continuation chapter is a separate reading, not permission to reuse an infinite product wherever its notation remains writable.

## Worked example: a two-prime product is not a three-term sum

At s equal to two, retaining just primes two and three gives

$$\left(1-\frac14\right)^{-1}\left(1-\frac19\right)^{-1}
=\frac32.$$

This is the sum over all reciprocals of squares of integers of the form two to one nonnegative exponent times three to another. It includes four, six, eight, nine and infinitely many further integers. It is not the zeta series stopped at integer three.

All omitted terms are positive at this real input. The cutoff estimate gives a difference from zeta of at most one third, while the omitted integer five alone contributes one twenty-fifth. Thus even this small example supplies rigorous upper and lower information about the truncation error without importing a decimal value for zeta. The bounds are deliberately loose; improving them is a separate estimation problem.

For a general multiplicative coefficient function, prime powers carry their own values. The local factor is then its entire prime-power series. Only when those values themselves are powers of the prime value does it become a geometric series. The earlier convolution article's divisor-counting example illustrates why multiplicativity and complete multiplicativity must be distinguished.

## Exercises

### Exercise 1 {#analytic-number-theory-euler-product-ex-1}

For real s equal to two, stop the prime product at an integer cutoff N at least two. Give a sufficient cutoff for absolute error at most one thousandth, and explain why no decimal prime-product computation is needed to justify that guarantee.

<details><summary>Hint 1</summary>
Specialize the tail estimate to sigma equal to two.
</details>
<details><summary>Hint 2</summary>
The bound becomes the reciprocal of N, independent of the actual value of the retained product.
</details>
<details><summary>Full solution</summary>
Any integer cutoff at least one thousand gives an error bound at most one thousandth. The proof bounds the omitted supported-integer sum by the tail over all integers exceeding the cutoff, then by its integral. It does not depend on calculating the retained factors or observing numerical stabilization. This is an analytic guarantee for that specified truncation; the arithmetic used to evaluate its finite factors would need its own rounding-error control if an actual decimal approximation were produced.
</details>

### Exercise 2 {#analytic-number-theory-euler-product-ex-2}

At real s equal to one, prove that the finite prime products are unbounded as their cutoff grows. Use the ordinary harmonic series, without assuming an asymptotic formula for the product.

<details><summary>Hint 1</summary>
Every positive integer at most N has all prime factors at most N.
</details>
<details><summary>Hint 2</summary>
The expansion of the finite product contains the harmonic partial sum through N, with additional positive terms.
</details>
<details><summary>Full solution</summary>
Each finite geometric factor still converges at this fixed real input, and its finite-prime product expands over the supported positive integers. That set contains every integer at most N, so the product is at least the harmonic partial sum through N. Those partial sums are unbounded, proving the assertion. This does not give a finite Euler-product value at one; both the ordinary zeta series and these cutoff products diverge there. It also supplies no rate such as a precise constant times log N, which would be a stronger theorem.
</details>

*Source provenance: original Euler orientation exposition and exercises, linked to actual convolution and Dirichlet-series primaries. All infinite rearrangements retain the stated absolute-convergence region. CC BY-SA 4.0. Draft; no independent review is claimed.*
