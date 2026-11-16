var e=`---
parent_id: book-cryptography
chapter_id: primality-factoring-algorithms
title: "Primality Testing and Factoring Algorithms"
level: advanced-undergraduate
license: CC BY-SA 4.0
---

# Primality Testing and Factoring Algorithms

An integer can have a short compositeness witness even when finding a factor was difficult. A probable-prime calculation has a different conclusion from a primality certificate. This chapter proves why a Miller–Rabin rejection is a mathematical witness, describes exact factor verification and gives a full reduction between factoring and square-root inversion on a stated semiprime family. Algorithm discovery, certificate checking and cryptographic hardness remain different claims.

All arithmetic is exact. The operation counts concern encoded integers and must be combined with the bit costs of multiplication, division and storage for a bit-complexity theorem. A small worked search is not a report of executed code. The Number Theory arithmetic source and Chapter 2 retain the broader certificate background; here we develop the algorithms and reduction interfaces needed by cryptographic key generation and trapdoor assumptions.

## Trial division and certificate directions

If $N>1$ is composite, write $N=ab$ with $1<a\\le b$. Then $a\\le\\sqrt N$, since otherwise the product would exceed $N$. A prime divisor of $a$ is no larger. Thus testing all potential divisors through the square root is complete. An actual proper divisor proves compositeness immediately; completion of the whole prescribed range without a divisor proves primality.

An interrupted search does neither. It reports only that no tested candidate divided the input. The encoded input length is about the logarithm of $N$, so a square-root number of candidates can be exponential in that length. A complete elementary method is not automatically an efficient large-input method. Conversely, an efficient certificate checker need not have an equally efficient discovery procedure for its certificate.

Chapter 2 proved the full order-based certificate using the prime factorisation of $N-1$ and gcd conditions on a candidate element. Recursive certificates must justify the primality of those factors rather than assume it because they appear in a factor list. A factorisation certificate for compositeness is simpler: check proper factors and their exact product. Both conclusions require stated conditions, not a status label attached by a producer.

## Miller–Rabin's necessary prime condition

Let $N\\ge3$ be odd and write $N-1=2^s d$ with $d$ odd. For a residue $a$ coprime to $N$, compute $a^d$ and successive squares through exponent $2^{s-1}d$. Accept the base if the first value is one or if some value in that sequence is minus one. Otherwise the base is a compositeness witness. A preliminary nontrivial gcd with $N$ is already a factor witness.

**Theorem 11.1 (Rejection proves compositeness).** Every prime $N$ passes the stated base test for every nonzero residue $a$.

*Proof.* Fermat gives $a^{2^sd}=1$. If $a^d=1$, the first accepting condition holds. Otherwise let the first later value equal to one occur after a squaring. Its predecessor $z$ is not one and satisfies $z^2=1$ in the prime field. Factoring $(z-1)(z+1)=0$ there gives $z=1$ or $z=-1$, so the predecessor must be minus one. It appears among the tested values and triggers acceptance. These possibilities exhaust the finite squaring chain. A prime also has no nontrivial gcd with a nonzero smaller base. ∎

The proof is one-way: rejection certifies composite. A passing base need not certify prime. The standard strong-liar counting theorem, cited rather than proved here, bounds passing bases by one quarter of the stated base sample space for an odd composite. Under independent uniform draws from that sample space, $t$ rounds give a passing probability at most $4^{-t}$ for a fixed composite. This probability is over base selection, not a prior probability that an arbitrary passing input is prime.

The exact sampling convention belongs with the count. One conventional statement samples from one through $N-1$, rejecting nonunits through gcd and counting the trivial passing bases as well. Fixed deterministic base sets require their own theorem and input range. Reusing the same base does not create independent rounds merely because the test was called several times.

## Worked example 1: a Fermat pseudoprime fails strongly

The number $341=11\\cdot31$ passes base-two Fermat: $2^{10}\\equiv1\\pmod{341}$, so $2^{340}\\equiv1$. For Miller–Rabin, write $340=4\\cdot85$. The first value is $2^{85}\\equiv2^5=32$, and the next is $32^2=1024\\equiv1$. Neither first value one nor a tested minus one appears, so the base rejects.

The intermediate value thirty-two is also a nontrivial square root of one. Its neighbouring gcds reveal the factors: $\\gcd(31,341)=31$ and $\\gcd(33,341)=11$. This extra extraction is available in this particular witness pattern; a generic Miller–Rabin witness need not present its factors so directly. The example shows three separate statements: a failed converse for Fermat, a complete compositeness witness and an explicit factor certificate.

## Factor searches return checkable answers

A factor finder can use a heuristic search while every returned answer is checked exactly. For instance, Pollard-style iteration computes a sequence modulo $N$, compares two positions and takes the gcd of their difference with $N$. A proper gcd is a factor. A gcd of one means the selected pair has not exposed one; a gcd equal to $N$ is an unhelpful collision and calls for a specified failure or restart policy.

The hoped-for mechanism is a collision modulo one hidden prime factor without a simultaneous collision modulo the other. Under an ideal random-mapping model, first-collision scales are governed by birthday counting. A concrete polynomial iteration is not automatically a uniformly random mapping, so that heuristic does not by itself prove a universal runtime bound for the concrete factor algorithm. Its returned divisor remains independently verifiable regardless of discovery assumptions.

## Worked example 2: one rho-style step

Take $N=91$, iteration $f(x)=x^2+1\\pmod{91}$ and start at two. Advance one sequence once to five and the other twice to twenty-six. Their difference has magnitude twenty-one, and $\\gcd(21,91)=7$. Exact division yields the other factor thirteen.

This is a successful finite instance, with a certificate $91=7\\cdot13$. It neither proves that the same iteration succeeds quickly on every semiprime nor treats a later failed restart as evidence of primality. The mathematical reason for this step's success is that five and twenty-six agree modulo seven but not modulo thirteen. The gcd exposes precisely that asymmetric collision.

## Four roots and a useful difference

For $N=pq$ with distinct odd primes and a unit quadratic residue $y$, there are exactly four square roots modulo $N$. At each prime, if one root is $r$, the only roots are $r$ and $-r$: the difference-of-squares factorisation in a field proves completeness, and odd characteristic makes them distinct. CRT combines the two independent sign choices into four distinct roots.

Two roots $r,z$ not equal up to an overall sign have equal squares but differ in exactly one of their prime-coordinate signs. Consequently $\\gcd(r-z,N)$ is a proper factor. If the signs agreed at both primes, the roots would be equal; if they differed at both, they would be global negatives. The remaining two choices agree at exactly one prime and reveal it through the gcd.

## Worked example 3: two roots factor seventy-seven

Modulo seventy-seven, ten and thirty-two both square to twenty-three: $100\\equiv23$ and $1024\\equiv23$. They are neither equal nor negatives, since the negative of ten is sixty-seven. The gcd of their difference, minus twenty-two, with seventy-seven is eleven. The quotient is seven.

Their prime-coordinate behaviour makes the result transparent: modulo eleven the two roots agree, while modulo seven they are opposites. A square-root oracle that merely returns the original root or its global negative would not expose this gcd factor. The reduction below uses a uniformly hidden original root to obtain the helpful alternative with quantified probability.

## The complete square-root-to-factoring reduction

Consider the inversion task that receives a generated odd semiprime $N$ and a square $y=r^2$ for a uniformly sampled unit $r$, and returns **any** square root of $y$. Suppose an inverter succeeds with probability $\\epsilon$ on that distribution. It sees $N,y$ but not which of the four roots generated $y$.

**Theorem 11.2.** With an exact uniform-unit sampler, the inverter gives a factoring algorithm with success at least $\\epsilon/2$ and one inverter call plus modular squaring and gcd overhead.

*Proof.* Sample and retain $r$, compute $y=r^2\\bmod N$, and ask the inverter for a root $z$. Check the returned value squares correctly. On success compute $\\gcd(r-z,N)$ and return it when proper. Conditional on $N,y$, the hidden $r$ is uniform among the four roots, because squaring maps each of them to the same target and the initial unit sampling was uniform.

The inverter's output and coins depend on $N,y$, not on that hidden choice. For every valid returned root, exactly two of the four possible original roots are its global sign choices; the other two produce a proper gcd by the preceding argument. Hence conditional useful-root probability is one half whenever inversion succeeds. Averaging gives success $\\epsilon/2$. Every successful returned gcd is checked as a proper divisor. ∎

Uniform units can be obtained from uniform residues by gcd checking. A nontrivial gcd already factors the input; a unit is accepted, and zero or another unhelpful outcome is discarded. For distinct odd primes the unit fraction is bounded below by a positive constant, so a polynomial cutoff incurs an exponentially small sampling-abort probability. Accounting for that abort subtracts at most its probability from the displayed success bound. This makes the resource convention explicit instead of assuming an unavailable factorisation to sample units.

For the reverse direction on a **Blum semiprime family**, require $p\\equiv q\\equiv3\\pmod4$. Factoring then supplies an efficient square-root inverter. For a unit square $y$ modulo $p$, the value $y^{(p+1)/4}$ squares to $y$, because $y^{(p-1)/2}=1$ by writing $y$ as a nonzero square and applying Fermat. Do the same modulo $q$ and reconstruct either sign combination by CRT. These are polynomial-time arithmetic operations. Thus, on this precisely stated family and target distribution, square-root inversion and factoring have reductions in both directions, with the probability loss above.

The squaring map has four preimages here rather than being a permutation. Its one-wayness does not directly establish chosen-plaintext secrecy of deterministic encryption or uniqueness of decoded plaintext. An encoding and an encryption experiment would add new questions. The reduction's conclusion is exactly about root inversion and factor recovery.

## A passing probability is not a posterior primality probability

The liar bound fixes a composite input and takes probability over sampled bases. It says that a composite passes infrequently under that experiment. It does not, without an input distribution, give the probability that an input is composite conditional on passing. Bayes' formula needs prior probabilities and the relevant likelihoods for that reverse question.

A completely explicit example makes the distinction sharp. Suppose an artificial input source chooses the composite nine with probability $999/1000$ and prime eleven with probability $1/1000$. For nine, a one-round test sampling bases one through eight passes exactly at one and eight, giving passing probability one quarter. The other nonunit bases are rejected by gcd or fail the squaring condition. Eleven passes every nonzero base by the theorem.

Conditional on a pass, the composite probability is therefore $(999/4000)/(999/4000+4/4000)=999/1003$. This is high despite the one-quarter false-pass likelihood for the fixed composite. The source distribution is invented mathematical data, not an empirical estimate about a prime generator. It demonstrates why the direction of a probability statement must remain attached to its claim.

An actual key-generation analysis could specify a candidate distribution, rejection procedure and repeated independent bases to derive its own conditional guarantees. A generic report that an integer passed several rounds supplies only the stated test result and its fixed-input error analysis unless that broader model is also given. This is the same discipline used throughout the book: name which quantities are fixed, which are random and what event is being conditioned on before interpreting the bound.

## Exercises

### Exercise 1
<a id="primality-factoring-algorithms-ex-1"></a>
Explain why the first nontrivial predecessor of one in a prime-field squaring chain must be minus one.

<details><summary>Hint 1</summary>

Its square is one while it is not itself one.

</details>
<details><summary>Hint 2</summary>

Factor its square minus one in the field.

</details>
<details><summary>Solution</summary>

If $z^2=1$, then $(z-1)(z+1)=0$. A field has no zero divisors, so $z$ is one or minus one. The chosen predecessor is not one by firstness of the later one, so it is minus one. This is the step that makes every nonzero base pass for a prime. The corresponding statement fails in a composite residue ring, where a nontrivial square root of one can exist.

</details>

### Exercise 2
<a id="primality-factoring-algorithms-ex-2"></a>
Recompute the Miller–Rabin rejection of 341 at base two and identify a factor from the intermediate value.

<details><summary>Hint 1</summary>

Use $340=4\\cdot85$ and $2^{10}\\equiv1$.

</details>
<details><summary>Hint 2</summary>

The first chain value is thirty-two and its square is one.

</details>
<details><summary>Solution</summary>

$2^{85}\\equiv2^5=32$ and $32^2\\equiv1$ modulo 341. The tested values are neither initial one nor minus one, so the prime condition fails. Moreover $\\gcd(32-1,341)=31$, with quotient eleven. This is exact compositeness evidence even though the Fermat congruence at exponent 340 passes. The arithmetic exposes a zero-divisor phenomenon absent from the prime-field proof.

</details>

### Exercise 3
<a id="primality-factoring-algorithms-ex-3"></a>
Why does independently repeating a test have a different probability argument from repeating one fixed base?

<details><summary>Hint 1</summary>

The cited liar fraction concerns a newly sampled base.

</details>
<details><summary>Hint 2</summary>

A deterministic passing base remains the same passing base.

</details>
<details><summary>Solution</summary>

Under independent uniform draws in the stated sample space, the probability that every base lies in a liar subset of fraction at most one quarter is at most $4^{-t}$. Reusing one selected base creates perfectly correlated outcomes; conditional on its passing, every repetition passes again. The number of calls alone is not the random experiment required by the product bound. Fixed-base primality guarantees need a separate finite-range theorem.

</details>

### Exercise 4
<a id="primality-factoring-algorithms-ex-4"></a>
Explain why a proper factor returned by a heuristic algorithm can have an unconditional certificate.

<details><summary>Hint 1</summary>

The search method and the output predicate are different objects.

</details>
<details><summary>Hint 2</summary>

Exact multiplication and proper-factor inequalities suffice for compositeness.

</details>
<details><summary>Solution</summary>

Check that both factors exceed one, are smaller than the input and have exact product equal to it. These finite arithmetic facts prove compositeness regardless of how they were discovered. A heuristic runtime model concerns when the search finds such data, not whether verified data implies the theorem. Conversely, failure of that search does not certify primality without a complete stopping and coverage argument.

</details>

### Exercise 5
<a id="primality-factoring-algorithms-ex-5"></a>
Why are there four roots of a unit square modulo a product of two distinct odd primes?

<details><summary>Hint 1</summary>

There are two sign choices in each prime field.

</details>
<details><summary>Hint 2</summary>

CRT combines and distinguishes the coordinate choices.

</details>
<details><summary>Solution</summary>

In each field a nonzero square has exactly its two opposite roots, by difference-of-squares factorisation and odd characteristic. The two choices at the first prime and two at the second combine into four residues by the coprime CRT, and uniqueness there makes them distinct. Unit and distinct-odd-prime hypotheses exclude zero-root or repeated-modulus degeneracies that would change the count.

</details>

### Exercise 6
<a id="primality-factoring-algorithms-ex-6"></a>
In the root-inversion reduction, why is the retained original root uniform among four possibilities even after conditioning on the oracle's valid output?

<details><summary>Hint 1</summary>

The oracle sees the square, not the sampled root.

</details>
<details><summary>Hint 2</summary>

Its independent coins add no information about which preimage was selected.

</details>
<details><summary>Solution</summary>

Uniform unit sampling gives four equally likely preimages conditional on each square. The inverter's response is a function of the public modulus, that square and its own coins, which are independent of the hidden preimage choice. Conditioning on a valid returned root therefore does not select one original sign combination. Exactly two original roots are equal to its global signs and two are useful, yielding the one-half factor-recovery probability.

</details>

### Exercise 7
<a id="primality-factoring-algorithms-ex-7"></a>
Verify the proper gcd from roots ten and thirty-two modulo seventy-seven, and state why the global negative case is unhelpful.

<details><summary>Hint 1</summary>

Their difference is minus twenty-two.

</details>
<details><summary>Hint 2</summary>

For opposite unit roots, their difference is twice a unit.

</details>
<details><summary>Solution</summary>

$\\gcd(22,77)=11$, so the quotient is seven. If $z=-r$ globally, the difference is $2r$, a unit modulo the odd modulus because both two and $r$ are units. Its gcd is one, exposing no factor. If $z=r$, the difference is zero and its gcd is the whole modulus. The two mixed-sign choices are precisely the useful cases between these extremes.

</details>

### Exercise 8
<a id="primality-factoring-algorithms-ex-8"></a>
Prove the square-root exponent formula modulo a prime congruent to three modulo four for a nonzero square.

<details><summary>Hint 1</summary>

Write the input as a square of a nonzero field element.

</details>
<details><summary>Hint 2</summary>

Fermat makes its half-order power one.

</details>
<details><summary>Solution</summary>

For $y=a^2$ with $a\\ne0$, $y^{(p-1)/2}=a^{p-1}=1$. Since $(p+1)/4$ is an integer, the square of $y^{(p+1)/4}$ is $y^{(p+1)/2}=y\\,y^{(p-1)/2}=y$. This gives one root efficiently; its negative gives the other. The formula's integer exponent and residue premise are essential, so it is not the same algorithm for every prime and arbitrary nonsquare input.

</details>

### Exercise 9
<a id="primality-factoring-algorithms-ex-9"></a>
Does the rho example prove a square-root runtime bound for every polynomial iteration? Explain the role of its random-mapping model.

<details><summary>Hint 1</summary>

The concrete iteration is deterministic once its parameters are fixed.

</details>
<details><summary>Hint 2</summary>

An ideal model must be connected to it before transferring a distributional bound.

</details>
<details><summary>Solution</summary>

No. The worked step proves one exact factor discovery. Birthday estimates under a random-mapping model describe a specified random process; a fixed polynomial map is not automatically that process. A runtime theorem needs hypotheses justifying the model or an independent analysis. The output-factor certificate remains valid either way. This separates unconditional arithmetic correctness from heuristic discovery-time predictions.

</details>

### Exercise 10
<a id="primality-factoring-algorithms-ex-10"></a>
Why does root inversion hardness not immediately prove confidentiality or unique decryption for raw squaring?

<details><summary>Hint 1</summary>

The map is deterministic and has four unit preimages.

</details>
<details><summary>Hint 2</summary>

The inversion experiment differs from a chosen-message encryption game.

</details>
<details><summary>Solution</summary>

An observer can publicly square chosen candidates and compare their images, while the inversion assumption supplies a random generated target. Also four different roots can decrypt the same square unless another encoding selects the intended message. Thus one-wayness of the displayed relation does not supply an indistinguishability or unique-message theorem. An encoded cryptographic scheme requires those extra definitions and reductions in addition to the factor/root connection proved here.

</details>

## Summary and provenance

Complete searches, probable-prime rounds and certificates have different conclusions. Miller–Rabin rejection follows from a prime-field root argument; its passing probability bound is a separately cited counting theorem. Rho-style outputs are exactly checkable despite heuristic discovery analysis. The four-root CRT structure gives a full root-inversion/factoring reduction, and Blum-prime exponents give the reverse construction on the stated family.

The retained Number Theory arithmetic/certificate chapter and Quarto cryptography chapter are the seeds. Katz and Lindell, *Introduction to Modern Cryptography*, is the comparison text for primality, factoring and trapdoor reductions. The strong-liar fraction is cited as a deep input; no new universal runtime or hardness lower bound is claimed from the finite examples.
`;export{e as default};