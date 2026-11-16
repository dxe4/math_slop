
# Arithmetic functions and convolution

A divisor sum records many smaller inputs inside one integer. Dirichlet convolution packages that bookkeeping into a multiplication: each factorization of an integer contributes once. Its inverse operation recovers local information from accumulated divisor data, without taking a numerical limit or differentiating a graph.

This **Years 2–3 (L3)** article assumes [prime factorization](#/books/number-theory-proof-reference/primes-factorization-valuations) and finite sums. Read the actual [Arithmetic Functions, Convolution and Inversion chapter](#/books/number-theory-proof-reference/arithmetic-functions-convolution-inversion) for the full algebraic development. The new advanced book's [Average Orders and Summation chapter](#/books/algebraic-analytic-number-theory/average-orders-summation) continues from exact identities to average behavior. Here the single idea is how multiplication over divisor pairs explains inversion.

## A multiplication indexed by factorizations

An arithmetic function is a function from the positive integers to complex numbers. Define

$$(f*g)(n)=\sum_{d\mid n}f(d)g(n/d).$$

Every sum is finite, so this definition needs no convergence assumption. Interchanging the two factors in each divisor pair proves commutativity. Expanding either parenthesization of a triple product gives the same finite sum over positive triples whose product is n. This proves associativity by reindexing, with no appeal to an analogy with ordinary multiplication.

The identity is the function epsilon that is one at the integer one and zero elsewhere. Only the divisor leaving the other argument equal to one contributes to its convolution with any function. The constant-one function is different: convolving with it sums over all divisors. Confusing these two functions turns a correct-looking symbolic calculation into a false identity.

A function has a convolution inverse precisely when its value at one is nonzero. Necessity follows by evaluating a proposed inverse identity at one. For sufficiency choose the inverse's first value as the reciprocal, then solve recursively:

$$g(1)=\frac1{f(1)},\qquad
 g(n)=-\frac1{f(1)}\sum_{\substack{d\mid n\\d>1}}f(d)g(n/d),\quad n>1.$$

Every argument of g on the right is smaller than n. The recursion therefore defines a unique function and makes each required convolution coefficient zero. Commutativity makes it a two-sided inverse. This construction works for arbitrary complex-valued arithmetic functions with the stated initial value; multiplicativity is a useful extra property, not a prerequisite for inversion.

## Why the Möbius function is the inverse of divisor summation

Define the Möbius function to be zero when a prime square divides its argument. Otherwise its value is minus one to the number of distinct prime factors, including value one at the integer one. For an integer larger than one, only its squarefree divisors contribute to the sum of Möbius values. Choosing a squarefree divisor means selecting a subset of its distinct prime factors. Hence

$$\sum_{d\mid n}\mu(d)=\prod_{p\mid n}(1-1)=0\quad(n>1).$$

At one the sum is one. Thus the Möbius function convolved with the constant-one function is epsilon. Associativity now proves inversion: if F is the divisor sum of f, convolving F with the Möbius function gives f. The formula is

$$F(n)=\sum_{d\mid n}f(d)
\quad\Longleftrightarrow\quad
f(n)=\sum_{d\mid n}\mu(d)F(n/d).$$

The cancellation is exact. It is not an approximation that improves for large integers. On each prime-power chain the inverse has values one, minus one, then zeros, so it acts like a first difference along that chain. Across different primes, the subset expansion combines those differences through inclusion and exclusion.

## Worked example: recover the totient from a partition

Let the totient count the integers from one through n that are coprime to n. Partition those integers according to their greatest common divisor with n. In the class with greatest common divisor g, division by g gives precisely the residues counted by the totient of n divided by g. Summing the class sizes gives the divisor identity

$$n=\sum_{d\mid n}\varphi(d).$$

Inversion therefore yields

$$\varphi(n)=\sum_{d\mid n}\mu(d)\frac nd
=n\prod_{p\mid n}\left(1-\frac1p\right).$$

For twelve, the squarefree divisors are one, two, three and six. Their signed contributions are twelve, minus six, minus four and plus two, totaling four. Directly the coprime residues are one, five, seven and eleven. The equality connects a finite partition, convolution inversion and a prime product; none of those steps uses a probabilistic assumption about residues.

## Multiplicative does not mean completely multiplicative

A multiplicative function respects products of coprime positive integers and has value one at one. Coprimality lets a divisor of a product split uniquely into one divisor from each factor. Expanding that bijection proves that convolution preserves multiplicativity. It does not prove complete multiplicativity, where the coprimality restriction is removed.

For example, the divisor-counting function is the constant-one function convolved with itself. Its value at a prime square is three, whereas the square of its value at that prime is four. Local prime-power data must therefore be retained. The later Euler-product article uses a whole local series for a general multiplicative function; replacing that series by a geometric factor requires a stronger hypothesis.

The advanced summation chapter studies what happens when such exact functions are added over many inputs. That is a new operation with floor terms and error bounds. Convolution identities explain the coefficients, but do not by themselves supply an average-order estimate or a theorem about prime density.

## Exercises

### Exercise 1 {#analytic-number-theory-convolution-ex-1}

Find the convolution inverse of the arithmetic function that equals one everywhere. State its values at a prime, a prime square and a product of two distinct primes, and justify them from the recursion.

<details><summary>Hint 1</summary>
The inverse sum over divisors must vanish away from one.
</details>
<details><summary>Hint 2</summary>
Use the divisor lists for each of the three specified inputs, starting with inverse value one at one.
</details>
<details><summary>Full solution</summary>
At a prime the divisor equation is one plus its inverse value, so that value is minus one. At a prime square the values already known sum to zero, forcing the new value to be zero. At a product of distinct primes the known divisor values are one, minus one and minus one, so the final value must be plus one. In general the subset cancellation proved above gives the Möbius function, and uniqueness of the recursive inverse identifies it on every positive integer. This inverse is not the constant-one function itself.
</details>

### Exercise 2 {#analytic-number-theory-convolution-ex-2}

Let T(n) count ordered positive triples whose product is n. Express T as a convolution, compute it at twelve, and decide whether it is completely multiplicative.

<details><summary>Hint 1</summary>
Three copies of the constant-one function count three-factor decompositions.
</details>
<details><summary>Hint 2</summary>
Distribute the two copies of prime two and the one copy of prime three among three ordered positions.
</details>
<details><summary>Full solution</summary>
The function is the triple convolution of the constant-one function. For a prime power with exponent k, triples correspond to three nonnegative exponents summing to k, giving the binomial coefficient with upper entry k plus two and lower entry two. Thus T at four is six and T at three is three; multiplicativity gives T at twelve equal to eighteen. It is not completely multiplicative: T at two is three, whose square is nine, while T at four is six. The coprime decomposition of prime contributions remains valid, but repeated occurrences of one prime interact within its local exponent count.
</details>

*Source provenance: original Euler orientation exposition and exercises, linked to the actual elementary convolution and advanced summation primaries. CC BY-SA 4.0. Draft; no independent review is claimed.*
