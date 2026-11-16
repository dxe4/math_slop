
# Prime or Composite? Tests, Certificates, and Factorization

**Before reading.** Read [Divisibility and Modular Arithmetic](../books/introduction-to-proof/divisibility-modular-arithmetic.md) and [Cost, Amortization, and Lower Bounds](../books/algorithms-computation-proof-desk/cost-amortization-lower-bounds.md). These are preparation for the ideas used below.

Primality testing asks for a yes/no decision. Factorization asks for the prime factors. A compositeness witness may be one divisor, while a primality certificate must rule out every possible divisor without checking them one by one. These tasks are related but not computationally identical. This deep dive builds a hierarchy from trial division to certificate-based and probabilistic methods, then separates them from factor-finding heuristics.

## 1. Trial division is a theorem, not merely brute force

If n is composite, write n=ab with $1<a\le b<n$. Then $a\le \sqrt{n}$; otherwise both factors would exceed √n and their product exceed n. Therefore n is prime exactly when no prime at most √n divides it.

Algorithm:

```text
isPrime(n):
    reject n < 2
    accept n = 2
    reject even n
    for odd d from 3 while d*d <= n:
        if d divides n: reject and return factor d
    accept
```

The loop needs only prime d, but generating primes adds machinery; checking all odd d preserves correctness. Avoid computing a floating square root: the exact comparison $d\le n/d$ or a safe product prevents rounding/overflow errors.

Trial division takes order √n candidate steps, which is exponential in the bit length $\log₂n$. An input with twice as many bits can require roughly twice as many square-root bits of search, meaning an enormous multiplicative increase.

## 2. Wilson’s theorem is exact but not automatically efficient

Wilson’s theorem states:

$$n>1 is prime iff (n-1)!\equiv-1 (mod n)$$

If p is prime, every nonzero residue has a unique inverse. Pair each residue with its inverse; only 1 and −1 are self-inverse, giving the product −1. Conversely, if n is composite, the congruence fails (the case n=4 can be checked separately in common converse proofs).

Wilson gives a characterization, but computing a factorial modulo n takes roughly n multiplications naïvely—worse than trial division as a general primality algorithm. A mathematically elegant equivalence is not automatically a practical procedure.

## 3. Fermat tests can lie

For prime p and $p∤a$, Fermat gives

$$a^{p-1}\equiv1 (mod p)$$

If a candidate n fails this congruence for some a coprime to n, n is definitely composite and a is a **Fermat witness**. Passing makes n a probable prime to base a, not a proved prime.

Example: 341=11·31, yet

$$2^{10}=1024\equiv1 (mod 341)$$

so $2^{340}=(2^{10})^{34}\equiv1$. The composite 341 is a base-2 pseudoprime.

Worse, a Carmichael number passes the Fermat test for every base coprime to it. Korselt’s criterion says a composite squarefree n is Carmichael exactly when every prime divisor p of n has $p-1 | n-1$. Since $561=3\cdot 11\cdot 17$ and 2,10,16 all divide 560, every unit base passes.

## 4. Strong probable-prime tests expose more structure

For odd n, write

$n-1=2^{s} d$, with d odd.

A strong probable-prime test to base a computes $x=a^{d} \bmod n$. It passes if x=1 or x=−1. Otherwise square x up to s−1 times and pass only if −1 appears; encountering 1 before −1 reveals failure.

Why primes pass: for prime n, work in the field $F_{n}$. If repeated squaring ends at $a^{n-1}=1$, the last nontrivial square root of 1 must be −1 because $(x-1)(x+1)=0$ in a field. Composite rings can contain extra square roots or other defective chains.

For every odd composite n, at most one quarter of the allowed bases $2\le a\le n-2$ are strong liars; thus independently sampled bases give a rigorous error bound under the specified random-base experiment. The statement assumes uniform independent base selection and correct arithmetic. It is not “probably correct because many examples worked.”

Specific fixed-base theorems can make the test deterministic on a bounded integer range, but the bases and bound are part of the theorem and should not be copied from memory into security code.

## 5. A certificate changes who does the work

A **primality certificate** is data that a verifier can check efficiently.

Pocklington-style reasoning uses a known large factored part F of n−1. In one form, if $n-1=FR$, $F>\sqrt{n}$, and for suitable bases a associated with prime factors q of F,

$a^{n-1}\equiv1 (mod n)$ and $\gcd(a^{(n-1)/q}-1,n)=1$,

then n is prime. The exact theorem has quantifiers over the prime divisors and multiplicities of F; a report must state the selected version.

Pratt certificates recursively certify that q is prime using the factorization of q−1 and a witness of large multiplicative order modulo q. The recursion bottoms out at 2. Verification uses modular powers and gcds, while producing the certificate may be harder.

AKS established that primality belongs to deterministic polynomial time through polynomial congruences. Its conceptual importance is a worst-case complexity theorem; practical prime generation often uses other rigorously analyzed tests and certificate paths.

## 6. Finding a factor is a different search

If a test says “composite” without a factor, factorization remains.

**Fermat factorization.** For odd n with close factors, write

$$n=x^{2}-y^{2}=(x-y)(x+y)$$

Start at $x=\lceil \sqrt{n}\rceil$ and search until $x^{2}-n$ is a square. It is fast when factors are close and poor when they are far apart.

**Pollard p−1.** If a prime factor p of n has p−1 composed of small prime powers, choose a large smooth exponent M. Then $a^{M}\equiv1 \bmod p$; the gcd $\gcd(a^{M}-1,n)$ may reveal p. Failure can mean the smoothness condition or base choice was unfavorable, not that n is prime.

**Pollard rho.** Iterate a map modulo n and use gcds of differences. Modulo an unknown prime factor p, birthday collisions are expected after order √p steps; a collision can expose p. Random-looking behavior supplies a heuristic performance model, while each returned gcd is an exact certificate.

Quadratic-sieve and number-field-sieve methods collect congruences of squares and solve a linear dependency modulo 2. Their algorithmic details and complexity analyses deserve separate courses. The key separation remains: a factor is instantly checkable by multiplication even when finding it was difficult.

## 7. Prime generation is a pipeline

A learning pipeline may:

1. sample an odd candidate of the desired toy range;
2. trial-divide by small primes;
3. run several strong probable-prime rounds;
4. optionally produce a proof certificate;
5. independently verify the certificate.

A real cryptographic pipeline additionally depends on a current standard, entropy source, parameter constraints, library behavior, side-channel model, and failure handling. This lesson supplies none of those deployment commitments.

The density of primes near x is about $1/\log x$ by the prime number theorem, so random candidate search is plausible. This is an asymptotic average guide, not a guarantee that a prime appears within a fixed short interval after every x.

## 8. Auditable pseudocode contracts

Repeated squaring invariant:

$$
\text{accumulator}\cdot
\text{currentBase}^{\text{remainingExponent}}
\equiv
\text{originalBase}^{\text{originalExponent}}
\pmod n.
$$

Initialization sets the accumulator to $1$, the current base to the original
base modulo $n$, and the remaining exponent to the original exponent. If the
remaining exponent is odd, multiply the accumulator by the current base and
subtract $1$ from the exponent. Then square the current base and halve the now
even exponent. In either branch the displayed product is unchanged modulo
$n$. At termination the remaining exponent is $0$, so the accumulator itself
is congruent to the requested modular power. This proves partial correctness;
the nonnegative exponent strictly decreases after each halving, which proves
termination.

Strong-test output should be one of:

- composite with witness base and failing chain;
- probable prime for the explicitly listed bases;
- prime only if a deterministic bounded theorem or verified certificate applies.

Factor output must satisfy:

- $1<d<n$;
- $d|n$;
- cofactor $n/d$ is exact;
- no claim that d is prime unless separately tested or certified.

These output types prevent a user interface from silently upgrading evidence.

## Worked examples

### Strong test exposes 341 to another base

**Worked example.**

Base 2 fools Fermat on 341. This does not imply every stronger test/base will. Write $340=4\cdot 85$. A complete strong-chain computation records $a^{85}$, then at most one square before the final exponent. The reproducible chain, not the label “Miller–Rabin,” is the evidence.

### Fermat factor 5959

$\lceil \sqrt{5959}\rceil=78$. Compute $78^{2}-5959=125$, not a square; $79^{2}-5959=282$; $80^{2}-5959=441=21^{2}$. Thus

$$5959=(80-21)(80+21)=59\cdot 101$$

Both multiplications and primality of the small factors can be checked independently.

### A factor certificate

If an algorithm returns d=83 for n=8051, verify $8051=83\cdot 97$. Even if the heuristic trace is unavailable, the factor claim is proved. Certifying that 83 and 97 are prime is a separate small trial-division task through 9.

## Exercises

<a id="deep-dive-primality-factorization-certificates-ex-1"></a>

### Exercise 1

1. Prove that trial division through √n is sufficient.

<details>
<summary>Hint 1</summary>

Assume a composite number factors into two integers greater than one.
</details>

<details>
<summary>Hint 2</summary>

If both factors exceeded its square root, their product would exceed the number.
</details>

<details>
<summary>Solution</summary>

If n=ab is composite and both a,b>√n, then ab>n, contradiction. Hence one nontrivial factor is at most √n.

</details>

<a id="deep-dive-primality-factorization-certificates-ex-2"></a>

### Exercise 2

2. Audit the claim “91 fails the Fermat test to base 3,” and if it is false, find a failing base.

<details>
<summary>Hint 1</summary>

Do not assume the prompt’s claimed Fermat failure is true; compute the residue for base three.
</details>

<details>
<summary>Hint 2</summary>

Reduce powers modulo 91 using a short cycle, then seek a different base if three actually passes.
</details>

<details>
<summary>Solution</summary>

$3^{6}=729\equiv1 \bmod 91$, so $3^{90}=(3^{6})^{15}\equiv1$: base 3 actually passes, illustrating why the prompt must be audited. A valid failing base is 2: $2^{10}=1024\equiv23$, $2^{20}\equiv74$, $2^{40}\equiv16$, $2^{80}\equiv74$, hence $2^{90}\equiv74\cdot 23\equiv64$, not 1. Thus 91 fails to base 2, not base 3.

</details>

### Further exercises

3. Verify Korselt’s criterion for 1105=$5\cdot 13\cdot 17$.
4. Fermat-factor 2021.
5. Explain why “100 random bases passed” is not a primality proof unless a theorem and sampling model convert it into one.
6. Distinguish a compositeness witness, factor certificate, and primality certificate.

## Solutions


3. It is squarefree. The values 4,12,16 divide 1104, so Korselt’s criterion makes 1105 a Carmichael number.
4. $\lceil \sqrt{2021}\rceil=45$; $45^{2}-2021=4=2^{2}$, so $2021=(45-2)(45+2)=43\cdot 47$.
5. The trials support a bounded error statement only if bases are sampled as required and arithmetic is correct. A certificate or deterministic range theorem upgrades probable evidence to proof.
6. A failing base proves composite but may not give a divisor; a factor certificate gives d with $1<d<n$ and d|n; a primality certificate supplies efficiently verifiable data ruling out compositeness under a proved theorem.

## Continue

Use the programming recipe to implement exact powers and gcd certificates. Future shelves should develop Lucas tests, elliptic-curve primality proving, deterministic bounded strong-test theorems, Pollard rho analysis, quadratic and number-field sieves, integer-factorization complexity, quantum order finding, and the exact prime-generation requirements of named standards.
