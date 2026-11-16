var e=`---
parent_id: book-number-theory-proof-reference
chapter_id: algorithms-certificates-crypto-boundaries
title: "Algorithms, Certificates, Cryptographic Boundaries, and Capstones"
level: advanced-undergraduate
estimated_minutes: 300
license: CC BY-SA 4.0
---

# Algorithms, Certificates, Cryptographic Boundaries, and Capstones {#section-1-algorithms-certificates-cryptographic-boundaries-and-ca}

An arithmetic algorithm is strongest when it returns a proof object: a Bezout identity, factorization, compositeness witness, primality certificate, or directly verifiable group equation. Cryptographic claims require another layer—an encoded scheme, adversarial experiment, resource bound, and assumption.

This final chapter assumes the full arithmetic spine. It organizes exact algorithms, primality evidence, certificates, factoring, RSA and elliptic correctness, complexity models, and one cumulative proof-carrying capstone.

<a id="section-5-1-exact-arithmetic-kernels"></a>
## 1. Exact arithmetic kernels {#section-7-1-exact-arithmetic-kernels}

For inputs not both zero, Euclid returns $g>0,x,y$ with $ax+by=g$; verification checks positivity, the equality and that $g$ divides both inputs. At $(0,0)$ use the declared computational convention $g=0$, with no division by zero. Binary modular exponentiation maintains

\\[acc * base^remaining \\equiv a^e \\bmod n\\]

while halving the remaining exponent. It uses $\\mathcal{O}(\\log e)$ modular multiplications.

For large integers, bit complexity matters: a “constant-time multiplication” word model is not realistic when operand length grows. State whether complexity counts arithmetic operations or bit operations.

<a id="section-15-2-compositeness-witnesses"></a>
## 2. Compositeness witnesses {#section-17-2-compositeness-witnesses}

A nontrivial factor is an unconditional compositeness certificate. So is a failed Fermat congruence for a coprime base. For Miller-Rabin take an odd integer $n\\ge3$ and integer base $2\\le a<n$. First compute $g=\\gcd(a,n)$; if $g>1$ it is a nontrivial factor proving compositeness. On the unit branch $g=1$, write $n-1=2^s d$ with $d$ odd and $s\\ge1$, and inspect

$a^d, a^{2d},\\ldots,a^{2^{s-1}d} \\bmod n$.

For prime $n$, the sequence begins at one or reaches minus one before one. A violating base proves compositeness. Passing bases makes $n$ a strong probable prime, not automatically prime unless a theorem supplies a complete deterministic base set for a bounded range.

<a id="section-23-3-primality-certificates"></a>
## 3. Primality certificates {#section-25-3-primality-certificates}

Wilson's theorem, $(p-1)!\\equiv-1 \\bmod p$, characterizes primes but is inefficient as a certificate for large inputs.

A Pratt-style certificate for prime $p$ recursively factors $p-1$ and supplies $a$ such that

$a^{p-1}\\equiv 1 \\bmod p$,

and $\\gcd(a^{(p-1)/q}-1,p)=1$ for every prime $q\\mid p-1$.

These conditions force an element of order $p-1$, so the unit group has at least $p-1$ elements; hence every nonzero residue is a unit and $p$ is prime. Recursive certificates terminate at small primes. More flexible Pocklington certificates need only a sufficiently large factored portion of $p-1$.

<a id="section-35-4-factoring-algorithms-and-evidence"></a>
## 4. Factoring algorithms and evidence {#section-37-4-factoring-algorithms-and-evidence}

Trial division is complete through $\\sqrt{n}$ but exponential in input bit length. Pollard rho uses a pseudorandom iteration and gcd collisions to find factors heuristically; elliptic-curve factorization varies curve group orders modulo hidden prime factors. The number field sieve is the leading general-purpose classical method for large ordinary integers.

Failure to find a factor is not primality evidence unless joined to a theorem about the completed search. Runtime claims distinguish expected, heuristic, and proved bounds.

<a id="section-41-5-rsa-correctness"></a>
## 5. RSA correctness {#section-43-5-rsa-correctness}

Let distinct primes $p,q$ define $n=pq$. Choose positive integers $e,d$ with $ed\\equiv 1 \\bmod \\lambda(n)$ (using $\\varphi(n)$ also suffices). For every residue $M \\bmod n$,

$M^{ed}\\equiv M \\bmod n$.

Proof modulo $p$: if $p\\mid M$, both sides are zero; otherwise Fermat reduces the exponent. Repeat modulo $q$ and use CRT. This branch proof covers nonunit messages; simply cancelling $M$ would not.

Correctness does not establish confidentiality or authenticity. Textbook deterministic RSA lacks randomized encoding and is not a secure encryption scheme under modern indistinguishability definitions.

<a id="section-51-6-security-claim-ladder"></a>
## 6. Security claim ladder {#section-53-6-security-claim-ladder}

Keep these layers separate:

1. arithmetic map and domain;
2. primitive with correctness;
3. encoded scheme or protocol;
4. adversarial experiment such as IND-CPA or EUF-CMA;
5. reduction to a named assumption with resource loss;
6. implementation model including randomness, timing, faults, and validation;
7. deployment standards and parameter lifecycle.

A reduction is conditional: if an efficient adversary breaks the scheme, the construction turns it into an efficient solver for the assumption. It does not prove the assumption true.

<a id="section-65-7-elliptic-implementation-contracts"></a>
## 7. Elliptic implementation contracts {#section-67-7-elliptic-implementation-contracts}

Validate field, nonsingularity, point membership, subgroup membership, and scalar range. Handle $O$, inverse pairs, vertical tangents, and noninvertible denominators. Projective coordinates can avoid inversions but introduce exceptional-formula and normalization obligations.

Secret scalar multiplication should avoid data-dependent branches and memory access. “Constant time” is an implementation claim requiring measurement and platform analysis, not a consequence of using a fixed loop count in pseudocode.

<a id="section-71-8-randomness-encoding-and-side-channels"></a>
## 8. Randomness, encoding, and side channels {#section-73-8-randomness-encoding-and-side-channels}

Toy examples often omit secure randomness, domain separation, padding, authenticated context, replay defenses, and error handling. A mathematically valid nonce reused in a signature scheme may reveal a private key. Malformed points can trigger invalid-curve attacks if membership and subgroup checks are skipped.

Educational code should fail closed, label size limits, and state that it is not production cryptography.

<a id="section-77-9-reproducible-proof-objects"></a>
## 9. Reproducible proof objects {#section-79-9-reproducible-proof-objects}

A proof-carrying result includes canonical inputs, algorithm/version, output, certificate, independent verifier, and negative tests. Verification should be simpler than discovery. Hashes establish artifact identity, not mathematical truth; review establishes that the verifier checks the intended theorem.

<a id="section-81-exercises-with-complete-solutions"></a>
## Project: proof-carrying arithmetic capstone {#section-205-project-proof-carrying-arithmetic-capstone}

Build one dependency-free command-line desk with canonical JSON input/output for gcd/Bezout, generalized CRT, modular powers, strong probable-prime tests, recursive primality certificates for a bounded range, verified factor certificates, toy RSA correctness for every residue, and finite elliptic scalar multiplication. Supply an independent verifier that never trusts producer control flow. Include corrupted-certificate tests, complexity counters, reproducible fixtures, and a claim matrix separating exact correctness, bounded completeness, probabilistic evidence, heuristic runtime, assumed hardness, and explicitly unsupported production security.

<a id="section-207-chapter-summary"></a>
## A certificate needs a normalized statement, not only an identity {#section-212-a-certificate-needs-a-normalized-statement-not-only-an-}

The identity $ax+by=g$ proves that every common divisor of $a,b$ divides $g$. It does not by itself prove that $g$ is the normalized greatest common divisor. For a pair not both zero, a valid certificate also checks $g>0$, $g\\mid a$ and $g\\mid b$. These conditions give both directions of the universal gcd property. At $(0,0)$ the positive-gcd definition does not apply; this desk explicitly uses the computational convention $g=0$ with canonical coefficient output $x=y=0$.

The sign condition is substantive. For $a=6,b=10$, the data $g=-2,x=-2,y=1$ satisfy $6(-2)+10(1)=-2$, and $-2$ divides both inputs. They still do not describe the positive gcd, which is $2$. A corruption fixture that changes only $g$ while leaving coefficients for $+2$ would fail the identity and would not specifically test normalization. The supplied fixture changes all three entries so that positivity is the decisive missing condition.

For a CRT certificate, normalization has a related role. The conditions $r\\equiv a_i\\pmod{m_i}$ describe a solution, but a complete output also states the least common multiple $M$ and chooses $0\\le r<M$. Returning an arbitrary multiple of $M$ as the period would discard solutions from the claimed parametrization. The verifier therefore recomputes the lcm from the original positive moduli and checks every original congruence.

For example, $x\\equiv2\\pmod6$, $x\\equiv5\\pmod9$ gives $x\\equiv14\\pmod{18}$. Both congruences hold, and any difference of solutions is divisible by both $6$ and $9$, hence by $18$. Changing the second residue to $4$ is impossible because $\\gcd(6,9)=3$ does not divide $4-2$. An incompatible-pair certificate can identify those original rows; it need not ask the reader to trust the producer's merge history.

Modulus one is legitimate: its canonical residue is zero and it imposes no restriction. Likewise $a^0\\bmod1=0$, since the integer identity element $1$ has residue zero in that quotient. These cases are useful domain tests precisely because treating zero as an error everywhere would reject valid mathematical inputs.

The underlying pattern is to specify the object, its domain and its normalization before designing a verifier. A short algebraic equality becomes a proof object only after those choices determine exactly what the equality is meant to certify.

<a id="section-224-why-a-strong-test-failure-proves-compositeness"></a>
## Why a strong-test failure proves compositeness {#section-226-why-a-strong-test-failure-proves-compositeness}

Let $n\\ge3$ be odd and choose an integer base $2\\le a<n$. First compute $g=\\gcd(a,n)$. If $g>1$, then $1<g<n$ is already a factor certificate. It is a valid compositeness branch, not an input to reject before testing. Only on the unit branch $g=1$ write $n-1=2^sd$ with $d$ odd and $s\\ge1$, and form
$$
x_j=a^{2^jd}\\bmod n,\\qquad0\\le j<s.
$$
The test passes if $x_0=1$ or one of these entries is $-1$ modulo $n$.

To prove the witness implication, suppose instead that $n$ is prime. Fermat gives $a^{n-1}=1$. If $x_0\\ne1$, follow the squaring chain to its first occurrence of $1$, allowing the final value $a^{2^sd}=1$. The preceding entry squares to $1$ and is not $1$. Over a field, $(u-1)(u+1)=0$ forces $u=1$ or $u=-1$, so that preceding entry must be $-1$. It appears among $x_0,\\ldots,x_{s-1}$. Thus a prime cannot fail the stated conditions, and exact failure proves compositeness.

For $n=15,a=2$, one has $14=2\\cdot7$, so the tested chain contains only $2^7\\equiv8\\pmod{15}$, neither $1$ nor $14$. This is a unit-branch witness. For $n=9,a=3$, the gcd is $3$, and no exponent chain is needed. The desk keeps these certificates distinct so that a verifier can check the actual reason for the verdict.

Passing is weaker. The composite $2047=23\\cdot89$ passes base two: $2046=2\\cdot1023$ and $2^{11}=2048\\equiv1\\pmod{2047}$, while $1023=11\\cdot93$. Hence the chain starts at one. Repeatedly using this same base does not add independent evidence. A claim about the probability of error would need a specified random base distribution and an appropriate counting theorem, neither of which is supplied by a deterministic list of successful residues.

The bounded desk reports “strong probable prime” for a passing base and uses a separate recursive certificate for an unconditional primality verdict. Its full small-reference tests include both prime and composite candidates, the gcd branch, and this deliberate pseudoprime. This separates the mathematical meaning of a result from the convenience of placing several operations behind one interface.

<a id="section-240-recursive-order-certificates-close-the-primality-argume"></a>
## Recursive order certificates close the primality argument {#section-242-recursive-order-certificates-close-the-primality-argume}

For an alleged prime $p>2$, suppose the complete factorization of $p-1$ is $\\prod q_i^{e_i}$, with each distinct $q_i$ itself certified prime. A candidate witness $a$ satisfies $a^{p-1}\\equiv1\\pmod p$ and
$$
\\gcd\\!\\left(a^{(p-1)/q_i}-1,p\\right)=1
$$
for every distinct factor $q_i$. The full-power condition makes $a$ a unit modulo $p$, even though primality has not yet been established.

Let $h$ be its order in that finite unit group. Then $h\\mid p-1$. If $h$ were a proper divisor, some prime $q_i$ would occur in $h$ with smaller exponent than in $p-1$, giving $h\\mid(p-1)/q_i$. That would make the corresponding power equal to one, contrary to the gcd condition. Thus $h=p-1$. The unit group has at least $p-1$ elements, but there are only $p-1$ nonzero residue classes. Every nonzero residue is therefore a unit. A composite $p$ would have a nontrivial proper divisor representing a nonunit, so $p$ must be prime.

This proof explains every recursive obligation. The exponents must be positive, the factors distinct and increasing in the wire format, and their exact product must equal $p-1$. Merely listing some divisors does not supply the order argument. Each child certificate has a smaller prime label, and the recursion stops at the explicitly checked base $2$. The verifier checks the tree and the arithmetic conditions rather than repeating a search for witnesses.

The producer can use trial division to discover the factorization and search for a witness. For a genuine prime, existence of a primitive element in its finite field guarantees a witness, using the cyclicity theorem from Chapter 8. That discovery theorem is not assumed by the verifier: the supplied witness is checked directly. The chosen public certificate range is at most $10\\,000$, so a complete reference classification of every input in that interval is a bounded task.

A factor certificate answers a different question. Sorted prime powers whose product is exactly $n$ give a complete factorization only when each base is actually prime. The desk's factor operation has a larger input bound than its public recursive-prime operation. Its independent verifier uses complete trial primality checks through the integer square root for those factor bases, so a factor exceeding $10\\,000$ is not silently assumed prime or rejected as unsupported.

These methods are intentionally bounded. Trial division is exact but can require work exponential in the input's bit length. A small educational certificate range does not establish an efficient general factoring algorithm, and the failure of an unrelated factor search supplies no primality conclusion.

<a id="section-258-a-complete-small-order-certificate-tree"></a>
## A complete small order-certificate tree {#section-260-a-complete-small-order-certificate-tree}

For $p=7$, the factorization of $p-1$ is $6=2\\cdot3$. The child for $2$ is the base certificate. A child certificate for $3$ uses witness $2$ and factorization $2$: $2^2\\equiv1\\pmod3$, while $\\gcd(2^1-1,3)=1$. Thus the labels at the two children are proved prime, rather than accepted from their spelling.

At the root choose witness $3$. The exact residues are
$$
3^6\\equiv1\\pmod7,\\qquad3^3\\equiv6\\pmod7,\\qquad3^2\\equiv2\\pmod7.
$$
The required gcds are $\\gcd(6-1,7)=1$ and $\\gcd(2-1,7)=1$. Together with the two child certificates and the product $2\\cdot3=6$, these data prove primality of $7$ by the order argument. The verifier does not need to know that $3$ is the smallest possible witness.

Each local check has a separate role. Deleting the factor-$3$ child destroys completeness of the factorization. Replacing the root witness by $2$ leaves $2^6\\equiv1$, but $2^3\\equiv1$ makes the factor-$2$ gcd fail; this witness has order three rather than six. Keeping a recursive tree with an empty factor list at $7$ fails the product check before any order conclusion is allowed.

The same syntax does not magically certify a composite. For $9$, the only prime factor of $8$ is $2$, but a valid root would need a unit of order eight modulo nine. There are only six units, namely $1,2,4,5,7,8$. No such root can pass the theorem's conditions. This is a structural rejection reason, not an empirical statement about how many candidate bases a particular run tried.

The example also distinguishes a certificate from its serialization. Child order and integer types can be fixed canonically for reproducibility, while primality comes from the checked product and congruence conditions. A digest of the resulting JSON identifies that certificate's bytes; the digest alone does not establish any of those conditions.

<a id="section-274-every-residue-rsa-correctness-and-a-separate-security-e"></a>
## Every-residue RSA correctness and a separate security experiment {#section-276-every-residue-rsa-correctness-and-a-separate-security-e}

Take distinct primes $p,q$, let $n=pq$, and choose positive integers $e,d$ with $ed\\equiv1\\pmod{\\lambda(n)}$, where $\\lambda(n)=\\operatorname{lcm}(p-1,q-1)$. For a residue $M$, if $p\\mid M$ then $M^{ed}$ and $M$ are both zero modulo $p$, because $ed>0$. Otherwise Fermat applies and $ed\\equiv1\\pmod{p-1}$ gives $M^{ed}\\equiv M\\pmod p$. Repeat at $q$ and use CRT. This proves the round trip for every residue, not just the units.

Positivity prevents a genuine domain error. A negative integer $d$ can satisfy the displayed congruence but would make a power at $M=0$ undefined. Checking the modular inverse relation without checking exponent domains would therefore accept parameters outside the claimed map. The bounded desk rejects such parameters before constructing its residue table.

For $p=5,q=11,e=3,d=7$, $\\lambda(55)=20$ and $ed=21$. The residue $M=5$ is a nonunit. Its encryption is $5^3\\bmod55=15$, and the primewise argument proves that decrypting returns $5$. Zero and messages divisible by either prime must occur in the same exhaustive table as the invertible messages. Checking only a handful of random units would miss the branch the proof needs.

Arithmetic correctness does not prove the usual indistinguishability claim. In the public deterministic map just described, choose messages $1$ and $2$. Their ciphertexts are $1$ and $8$ modulo $55$. An observer who receives an encryption of one of those messages compares it with the two public values and identifies the choice exactly. No factoring algorithm or timing measurement enters this attack on deterministic textbook encryption.

A security theorem would instead specify the encoded scheme, the challenge experiment, the adversary's allowed access and resources, the underlying assumption and the reduction's loss. An arithmetic proof is one premise of such a theorem, not a substitute. The desk does not implement a modern encoding or claim confidentiality, authenticity, secure randomness or side-channel protection.

The original capstone asks for toy correctness, so the reference supplies all $55$ rows for these parameters and all $21$ rows for the changed parameters $(p,q,e,d)=(3,7,5,5)$. Here $\\lambda(21)=6$ and $25\\equiv1\\pmod6$. Those are complete finite correctness obligations. They remain unobserved until root executes the listing, although the mathematical branch proof already explains why every row should round-trip.

<a id="section-288-an-independent-verifier-checks-the-claim-at-its-own-lev"></a>
## An independent verifier checks the claim at its own level {#section-290-an-independent-verifier-checks-the-claim-at-its-own-lev}

Independence should be described operation by operation. For gcd, the verifier checks normalization, divisibility and the Bézout identity. For successful CRT it checks the original congruences and the actual lcm; for failure it checks a specified incompatible original pair. Neither check needs to replay the producer's Euclidean merge sequence.

For modular powers, an exact built-in modular exponentiation provides a different implementation from the producer's binary loop. For strong tests, the verifier independently exponentiates each prescribed power instead of trusting a chain of stored squares. For primality it checks the recursive order conditions; for factors it checks each prime base and the total product. The argument validating the verifier is still mathematical: using a different routine alone does not establish that it checks the intended theorem.

The RSA verifier checks every emitted message, ciphertext and recovered message against the original parameters. It rejects a shortened residue table as incomplete even if all remaining rows are correct. The elliptic scalar verifier repeats addition a bounded number of times, whereas the producer uses binary expansion. Both depend on the exact shared Weierstrass group primitive from Chapter 21. This is algorithmic independence of scalar control flow, not a claim that two separately proved group laws were implemented.

Certificate identity also belongs to the input. The same coordinates may have different meanings over different prime fields or coefficient models. A verifier must bind the original modulus, curve, point and scalar rather than accept a correct result for a different request. The JSON verify operation therefore receives both the original request and the alleged complete result.

Corruption fixtures should target a condition that matters. A negative gcd certificate retaining a valid identity tests positivity. A changed CRT residue tests a congruence. A missing prime-factor child tests recursive completeness. A changed RSA modulus or shortened table tests request binding and full coverage. A wrong elliptic point tests the scalar result, while an off-curve input tests the domain before any group computation. These are different obligations and need not fail in the same way.

A successful verifier result does not mean that every byte in a response is mathematically certified. Producer operation counters describe the instrumented computation, and the verifier checks their shape and bounds. It does not infer the actual control-flow history from their numbers. Counter honesty is reviewed against the source and tested during reproduction; counters are not substituted for an arithmetic certificate or for a measured runtime.

<a id="section-302-bounded-json-transport-and-mathematical-cost-are-explic"></a>
## Bounded JSON transport and mathematical cost are explicit contracts {#section-304-bounded-json-transport-and-mathematical-cost-are-explic}

The desk accepts one canonical JSON request and emits one canonical JSON response. Here “canonical” means the declared encoding with integer numeric fields, sorted keys, no insignificant whitespace and a fixed ASCII string representation, optionally followed by one newline. Duplicate keys, floating values, nonfinite values and noncanonical encodings are rejected. This is the desk's reproducible wire convention, not a claim to implement every external JSON canonicalization standard.

A JSON boolean is not an integer field merely because one programming language makes its boolean type a subtype of integers. Similarly a negative exponent, zero modulus, composite field size or noncanonical point changes the mathematical domain. The parser, shape checks and arithmetic preconditions work together; a valid JSON object need not be a valid arithmetic request.

Finite size limits make the reference reproducible. Input and output have byte caps, certificate trees have depth/node limits, and every operation has declared integer bounds. The primality reference checks the full chosen range $0,\\ldots,10\\,000$; the factor reference checks a separately stated smaller consecutive range and larger contrasting fixtures. The factor operation's capacity is not presented as an exhaustive run over every supported integer. The elliptic reference retains every good reduction of the chosen curve below $200$, including $2,3$, with the bad reduction explicitly rejected.

Source counts of work must name their units. Euclidean divisions, modular multiplications, witness candidates and group additions can be instrumented exactly. Multiplication of two large integers is not a constant-cost instruction in a bit model. JSON parsing and certificate verification add work beyond the producer's arithmetic counters. No counter table in this reference is a timing measurement or evidence of constant-time execution.

The claim matrix in the model distinguishes six conclusions: exact per-request correctness; completeness on a declared finite range; probable-prime evidence for passing bases; heuristic claims about unrelated searches; conditional hardness assumptions; and unsupported production security. These statements can coexist without being conflated. A fully reproduced toy calculation may establish the first two while establishing none of the last three.

Finally, the two included source components are part of the reproducible artifact. Materializing the exact Chapter 21 companion and this chapter's CLI together supplies the actual group dependency; an undefined helper name would not. Source and fence hashes identify which bytes root reproduced. They do not replace the mathematical review of those bytes or create an execution receipt before the program has run.

<a id="section-316-exercises-normalized-certificates-and-passing-composite"></a>

## Summary

<a id="section-209-chapter-summary"></a>
Exact arithmetic algorithms should return independently checkable certificates. Probable-prime tests and heuristic factoring have carefully bounded evidentiary strength; recursive certificates prove primality. RSA and elliptic group laws establish correctness only after domain checks. Cryptographic security begins with named games, assumptions, encodings, randomness, and implementation models—not with arithmetic alone.
<a id="section-210-a-certificate-needs-a-normalized-statement-not-only-an-"></a>

## Exercises {#section-83-exercises-with-complete-solutions}

<a id="section-83-1-euclid-certificate"></a>
### 1. Euclid certificate {#section-85-1-euclid-certificate}

Verify $1=14*38-9*59$.

**Solution.** $14*38=532$ and $9*59=531$; their difference is one. Thus the gcd is one and $14$ is an inverse of $38 \\bmod 59$.

<a id="section-89-2-exponentiation-count"></a>
### 2. Exponentiation count {#section-91-2-exponentiation-count}

Why is repeated multiplication $e$ times inferior to binary exponentiation?

**Solution.** It uses $\\mathcal{O}(e)$ multiplications, exponential in the bit length $\\log e$; binary expansion uses $\\mathcal{O}(\\log e)$ squarings and multiplications.

<a id="section-95-3-fermat-witness"></a>
### 3. Fermat witness {#section-97-3-fermat-witness}

Show base $2$ proves $15$ composite.

**Solution.** $2^{14}\\equiv 4 \\bmod 15$, not one, while $\\gcd(2,15)=1$; a prime would satisfy Fermat.

<a id="section-101-4-probable-prime-boundary"></a>
### 4. Probable-prime boundary {#section-103-4-probable-prime-boundary}

Why does passing base-two Fermat not prove primality?

**Solution.** $341=11*31$ passes because $2^{10}\\equiv 1 \\bmod 341$; pseudoprimes exist.

<a id="section-107-5-miller-rabin-setup"></a>
### 5. Miller-Rabin setup {#section-109-5-miller-rabin-setup}

Write $560=2^s d$ with $d$ odd.

**Solution.** $560=2^{4}*35$, so $s=4,d=35$.

<a id="section-113-6-strong-witness-meaning"></a>
### 6. Strong witness meaning {#section-115-6-strong-witness-meaning}

What does a Miller-Rabin witness prove?

**Solution.** It unconditionally proves the tested odd integer composite, assuming exact modular arithmetic. A nonwitness supplies only probable-prime evidence.

<a id="section-119-7-factor-certificate"></a>
### 7. Factor certificate {#section-121-7-factor-certificate}

Verify $10403$ composite from factor $101$.

**Solution.** $10403=101*103$, so the supplied nontrivial divisor verifies compositeness.

<a id="section-125-8-trial-division-completeness"></a>
### 8. Trial-division completeness {#section-127-8-trial-division-completeness}

Why is testing through $\\sqrt{n}$ sufficient?

**Solution.** A composite factorization $n=ab$ has at least one factor at most $\\sqrt{n}$, and that factor has a prime divisor no larger.

<a id="section-131-9-pratt-order-condition"></a>
### 9. Pratt order condition {#section-133-9-pratt-order-condition}

Why test one exponent for every distinct prime $q\\mid p-1$?

**Solution.** Excluding order dividing $(p-1)/q$ for each prime factor excludes every proper divisor of $p-1$; together with the full-power equality it forces order exactly $p-1$.

<a id="section-137-10-recursive-base"></a>
### 10. Recursive base {#section-139-10-recursive-base}

Why must factors of $p-1$ themselves be certified prime?

**Solution.** The order argument relies on the complete prime factorization. Recursive certificates prevent an unverified composite label from invalidating the proof.

<a id="section-143-11-rsa-inverse"></a>
### 11. RSA inverse {#section-145-11-rsa-inverse}

For $p=5,q=11,e=3$, find $d$ using $\\lambda(n)$.

**Solution.** $\\lambda(55)=\\operatorname{lcm}(4,10)=20$; inverse of $3 \\bmod 20$ is $7$, so $d=7$.

<a id="section-149-12-rsa-nonunit"></a>
### 12. RSA nonunit {#section-151-12-rsa-nonunit}

Verify RSA round-trip for message $M=5$ in Exercise 11.

**Solution.** $ed=21$. Modulo $5$, both $5^{21}$ and $5$ are zero. Modulo $11$, Fermat reduces $21\\equiv 1 \\bmod 10$, so $5^{21}\\equiv 5$. CRT gives equality modulo $55$.

<a id="section-155-13-cancellation-error"></a>
### 13. Cancellation error {#section-157-13-cancellation-error}

Why is proving RSA only for $\\gcd(M,n)=1$ incomplete?

**Solution.** Valid residue messages may be divisible by $p$ or $q$; then $M$ has no inverse and cancellation is illegal. Prime-by-prime branching covers them.

<a id="section-161-14-deterministic-encryption"></a>
### 14. Deterministic encryption {#section-163-14-deterministic-encryption}

Why is textbook RSA not IND-CPA secure?

**Solution.** Encryption is deterministic: an adversary can encrypt candidate messages and compare the challenge ciphertext, distinguishing with certainty.

<a id="section-167-15-reduction-meaning"></a>
### 15. Reduction meaning {#section-169-15-reduction-meaning}

Does a reduction to factoring prove factoring hard?

**Solution.** No. It states a conditional implication between algorithms. Hardness of factoring remains an assumption relative to the resource model.

<a id="section-173-16-invalid-point"></a>
### 16. Invalid point {#section-175-16-invalid-point}

Why verify elliptic-curve point membership?

**Solution.** Formulas applied to off-curve points need not remain in the intended group and may leak secrets through invalid-curve or small-subgroup behavior.

<a id="section-179-17-subgroup-check"></a>
### 17. Subgroup check {#section-181-17-subgroup-check}

How can one verify that a point $P$ has prime order $r$? What extra information connects this test to membership in an intended subgroup?

**Solution.** Check membership on the curve, $P\\ne O$, and $[r]P=O$; if $r$ is prime, a nonidentity point killed by $r$ has order exactly $r$. This proves order, not membership in an externally specified subgroup when several order-$r$ subgroups are possible. Membership follows if the ambient group data certify that the order-$r$ subgroup is unique—for example, in a specified cyclic ambient group of order $hr$ with $\\gcd(h,r)=1$—or by a separate subgroup-membership test.

<a id="section-185-18-hash-boundary"></a>
### 18. Hash boundary {#section-187-18-hash-boundary}

What does a SHA-256 digest of a certificate prove?

**Solution.** It identifies bytes with high collision resistance; it does not prove the encoded arithmetic statements correct. A verifier must check them.

<a id="section-191-19-constant-time-claim"></a>
### 19. Constant-time claim {#section-193-19-constant-time-claim}

Why is branch-free source code insufficient evidence?

**Solution.** Compilers, caches, variable-time instructions, memory access, and platform behavior can reintroduce leakage. The claim needs a defined platform and empirical/formal analysis.

<a id="section-197-20-negative-result"></a>
### 20. Negative result {#section-199-20-negative-result}

A factor search times out. What conclusion is valid?

**Solution.** Only that this run under its configuration found no factor before the limit. It proves neither primality nor general resistance to factoring.

<a id="section-203-project-proof-carrying-arithmetic-capstone"></a>

<a id="section-318-exercises-normalized-certificates-and-passing-composite"></a>
### 21. NTP-22-E21: a valid identity with the wrong gcd sign {#section-320-ntp-22-e21-a-valid-identity-with-the-wrong-gcd-sign}

For inputs $a=6,b=10$, test $g=-2,x=-2,y=1$ against the Bézout equality and both divisibility checks. Why must a normalized gcd verifier still reject it? State the desk's separate convention at $(0,0)$.

<a id="section-322-ntp-22-e22-a-composite-passes-the-strong-base-two-test"></a>
### 22. NTP-22-E22: a composite passes the strong base-two test {#section-324-ntp-22-e22-a-composite-passes-the-strong-base-two-test}

Show that $2047=23\\cdot89$ passes the base-two strong test. Use $2^{11}\\equiv1\\pmod{2047}$ and the decomposition of $2046$, without computing a long decimal power. Explain what a passing result establishes.

<a id="section-326-solutions-normalized-certificates-and-passing-composite"></a>

## Solutions: normalized certificates and passing composite bases {#section-328-solutions-normalized-certificates-and-passing-composite}

<a id="section-328-ntp-22-e21-a-valid-identity-with-the-wrong-gcd-sign-sol"></a>
### NTP-22-E21: a valid identity with the wrong gcd sign — solution {#section-330-ntp-22-e21-a-valid-identity-with-the-wrong-gcd-sign-sol}

The equality is $6(-2)+10(1)=-12+10=-2$, and $-2$ divides both $6$ and $10$. The candidate passes those bare checks but violates $g>0$ for nonbothzero inputs. The positive gcd is $2$. At $(0,0)$ this desk returns the explicitly declared computational output $(g,x,y)=(0,0,0)$ and never divides by the zero candidate. This convention does not turn $0$ into a positive gcd.

<a id="section-332-ntp-22-e22-a-composite-passes-the-strong-base-two-test-"></a>
### NTP-22-E22: a composite passes the strong base-two test — solution {#section-334-ntp-22-e22-a-composite-passes-the-strong-base-two-test-}

The exact product is $23\\cdot89=2047$, so the number is composite. Since $2046=2\\cdot1023$ with $1023=11\\cdot93$, the strong test has $s=1,d=1023$. Also $2^{11}=2048\\equiv1\\pmod{2047}$, so $2^{1023}\\equiv1$. The chain starts at one and passes. This certifies only that the base-two strong-test condition holds; it does not prove primality or assign a probability of primality.

<a id="section-336-solutions-the-bounded-proof-carrying-command-line-desk"></a>

## Solutions: the bounded proof-carrying command-line desk {#section-338-solutions-the-bounded-proof-carrying-command-line-desk}

The original capstone requires an actual command-line desk with canonical JSON input and output. The next listing supplies that interface as arithmetic_desk.py and imports the exact included Chapter 21 component materialized as weierstrass_reference.py. Both are ordinary included source files, with no third-party package or undefined helper. Root must bind both exact fences and source postimages when reproducing them. All programs and outputs in this source bundle remain unexecuted.

One request is read from standard input, optionally ending in one newline, and one canonical response is written to standard output. No other file, network or process I/O is used. The request and response byte caps are each $262\\,144$; JSON tree depth is bounded by $64$ and node count by $50\\,000$. Canonical encoding uses the listed sorted-key, compact ASCII convention. For example, the actual request for the small Bézout fixture is {"a":38,"b":59,"op":"gcd"}, in that key order. The no-extra-field request {"op":"selfcheck"} exercises the complete declared reference model.

<a id="section-342-operation-and-certificate-contracts"></a>
### Operation and certificate contracts {#section-344-operation-and-certificate-contracts}

| Operation | Actual accepted domain | Result and independent mathematical check |
| --- | --- | --- |
| gcd | Signed inputs of absolute value at most $10^6$ | Normalized $g,x,y$; check positivity, divisibility and Bézout, with the explicit zero-pair output. |
| crt | One to eight congruences; positive moduli at most $10^4$, signed residues at most $10^6$, lcm at most $10^{12}$ | Canonical residue and exact lcm, or an incompatible original pair and its gcd. |
| power | Signed base at most $10^6$, exponent $0,\\ldots,10^4$, modulus $1,\\ldots,10^6$ | Canonical modular result, independently checked with exact modular exponentiation. |
| strong | Odd $3\\le n\\le10^6$, $2\\le a<n$ | Genuine gcd-factor branch or exact unit-branch exponent chain and base-specific verdict. |
| prime | Every integer $0,\\ldots,10\\,000$ | Below-two status, a nontrivial composite factor, or a recursively verified full Pratt tree. |
| factor | Every supported input $2,\\ldots,10^6$ | Sorted complete prime powers; independent bounded trial primality and exact product. |
| rsa | Distinct primes at most $31$, positive $e,d\\le10^4$ with the required inverse relation | Every residue row; independent exact encryption, decryption and full table coverage. |
| elliptic | Prime field below $200$, nonsingular general model, canonical point, signed scalar of absolute value at most $1024$ | Scalar point; independent repeated addition using the declared shared group primitive. |

Every ordinary result carries the canonical operation, value and named producer counters. The separate verify request receives the original request and alleged result. Its response distinguishes a well-formed verification request from whether the certificate was accepted: the boolean verified is the mathematical acceptance result. It never calls the producer to decide that result. The scalar verifier shares the reviewed group primitive, not the producer's scalar control path.

<a id="section-357-complete-declared-reference-ranges-and-hand-expectation"></a>
### Complete declared reference ranges and hand expectations {#section-359-complete-declared-reference-ranges-and-hand-expectation}

The reference covers all gcd input pairs in $[-12,12]^2$, every canonical residue pair for all CRT moduli $1,\\ldots,12$, all bases $-8,\\ldots,8$ with exponents $0,\\ldots,16$ and moduli $1,\\ldots,16$, and every permitted base for each odd strong-test candidate $3,\\ldots,199$. The recursive-prime reference classifies every integer $0,\\ldots,10\\,000$ and independently compares its classification with complete trial primality.

Factor reference inputs are every $2,\\ldots,500$, together with $10403,65537,10^6$. These include a prime factor above the public Pratt bound; the factor verifier does not misapply that bound to its own complete trial check. RSA uses all $55$ residues for $(5,11,3,7)$ and all $21$ for $(3,7,5,5)$. Elliptic reference inputs use all good prime reductions below $200$ of $y^2+y=x^3-x$, every scalar $-16,\\ldots,16$, and additional small-characteristic and scalar-bound fixtures. The singular reduction at $37$ is rejected, while the general field remains supported.

The small exact expectations include $1=14\\cdot38-9\\cdot59$, CRT result $14\\bmod18$, the incompatible gcd-$3$ pair, $2^{10}\\bmod17=4$, $5^0\\bmod1=0$, $10403=101\\cdot103$, and $10^6=2^6\\,5^6$. Strong-test fixtures separately cover $9$ at base $3$, $15$ at base $2$, $3$ at base $2$, and the passing composite $2047$. Elliptic expectations include the original doubling $(0,1)\\mapsto(1,3)$ over $\\mathbb F_5$ and the general-model doubling $(0,0)\\mapsto(1,0)$ at both $2$ and $3$.

Hand-counting the loop extents, extra fixtures and corruption-producer calls gives the following expected selfcheck case counts. These are derived expectations, not observed runs.

| gcd | crt | power | strong | prime | factor | rsa | elliptic |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 628 | 6088 | 4627 | 9806 | 10002 | 505 | 3 | 1490 |

For example, the core CRT count is $(1+\\cdots+12)^2=78^2$, and the core strong-test count is $1+3+\\cdots+197=99^2$. The full expected typed selfcheck response is bound in the program declaration. Root must compare every field and execute the actual standard-input command interface; loading definitions alone supplies no reproduction result.

<a id="section-373-corruption-changed-case-and-transport-checks"></a>
### Corruption, changed-case and transport checks {#section-375-corruption-changed-case-and-transport-checks}

Eight corruption fixtures cover all eight arithmetic operations: a genuinely negative gcd certificate that still satisfies identity/divisibility, a changed CRT residue, a modular residue, a strong-test verdict, an incomplete recursive prime certificate, a factor exponent, an RSA modulus and an elliptic scalar result. All must be rejected by the independent verifier. Eight further invalid requests cover mathematical-domain errors. These are specified future checks, not passed checks in this author bundle.

The changed RSA parameters retain every residue. The elliptic small-characteristic inputs retain the general inverse and tangent rules. The modulus-one and zero-pair fixtures ensure that valid exceptional domains are handled explicitly. Transport checks additionally send duplicate keys, floating and nonfinite values, oversized or deeply nested requests, multiple objects and noncanonical formatting; the CLI must return its canonical invalid-request response without unrelated I/O.

Root reproduction materializes the two exact files in one isolated directory, sends canonical requests to the CLI and feeds ordinary responses back through verify. It invokes the full selfcheck, compares the complete expected summary, checks the independent negative cases and records the actual output identity. The exhaustive explorer call remains a separate Chapter 21 reproduction obligation. Neither imported modules nor a printed command are an observed run.

<a id="section-381-claim-matrix-and-rubric-for-the-original-capstone"></a>
### Claim matrix and rubric for the original capstone {#section-383-claim-matrix-and-rubric-for-the-original-capstone}

| Claim category | What this desk actually supports | What would require different evidence |
| --- | --- | --- |
| Exact correctness | Domain checks, arithmetic certificates and the proved verifier implications | A hash or successful parse alone does not prove arithmetic. |
| Bounded completeness | The explicitly declared finite reference ranges and every-residue RSA tables when actually reproduced | No claim that all supported input combinations or larger ranges were exhaustively run. |
| Probable-prime evidence | The exact passing strong-test condition for named bases | No unconditional primality or numerical error probability without further hypotheses. |
| Heuristic runtime | No heuristic factor search is implemented or timed | Failure or timeout of another search does not prove hardness. |
| Assumed hardness | No hardness assumption is proved by these calculations | A cryptographic reduction needs its named assumption, resource model and loss. |
| Production security | Explicitly unsupported | Encodings, randomness, protocol and side-channel properties are separate obligations. |

A complete capstone retains the actual CLI and all named operations, states input/output and certificate schemas, and supplies a verifier whose logic checks each intended theorem. It states capacities separately from reproduced ranges, counts the named arithmetic operations honestly, preserves exceptional domains, and rejects corrupted certificates. The full mathematical claim matrix must accompany the implementation; a no-input demo or a few correct numbers cannot substitute for these duties.

<a id="section-394-solutions-canonical-json-arithmetic-desk-listing"></a>

## Solutions: canonical-JSON arithmetic desk listing {#section-396-solutions-canonical-json-arithmetic-desk-listing}

Materialize this exact source as arithmetic_desk.py alongside the exact included weierstrass_reference.py from Chapter 21. The only I/O is its declared bounded canonical JSON standard-input/standard-output command interface. Root alone executes it; all reference and negative results remain unobserved here.

\`\`\`python
import json
import sys
from copy import deepcopy
from math import gcd, isqrt
from weierstrass_reference import Curve

MAX_INPUT = 262144
MAX_OUTPUT = 262144
COUNTERS = ("euclid_divisions", "gcd_calls", "crt_pair_tests", "crt_merges",
            "modular_multiplications", "trial_divisions", "witness_candidates",
            "prime_nodes", "rsa_residues", "group_additions")
OPS = {"gcd", "crt", "power", "strong", "prime", "factor", "rsa", "elliptic"}

def require(condition):
    if not condition:
        raise ValueError("invalid bounded arithmetic object")

def integer(x, lo, hi):
    require(type(x) is int and lo <= x <= hi)
    return x

def keys(obj, names):
    require(type(obj) is dict and set(obj) == set(names))

def canonical(obj):
    return json.dumps(obj, sort_keys=True, separators=(",", ":"),
                      ensure_ascii=True, allow_nan=False)

def bounded_tree(obj, depth=0, budget=None):
    if budget is None:
        budget = [50000]
    budget[0] -= 1
    require(budget[0] >= 0 and depth <= 64)
    if type(obj) is dict:
        require(len(obj) <= 32)
        for k, v in obj.items():
            require(type(k) is str and len(k) <= 64)
            bounded_tree(v, depth + 1, budget)
    elif type(obj) is list:
        require(len(obj) <= 4096)
        for v in obj:
            bounded_tree(v, depth + 1, budget)
    elif type(obj) is int:
        integer(obj, -(10 ** 24), 10 ** 24)
    elif type(obj) is str:
        require(len(obj) <= 128)
    else:
        require(obj is None or type(obj) is bool)

def request_scope(req):
    require(type(req) is dict and type(req.get("op")) is str)
    op = req["op"]
    require(op in OPS)
    if op == "gcd":
        keys(req, ("op", "a", "b"))
        integer(req["a"], -1000000, 1000000)
        integer(req["b"], -1000000, 1000000)
    elif op == "crt":
        keys(req, ("op", "congruences"))
        rows = req["congruences"]
        require(type(rows) is list and 1 <= len(rows) <= 8)
        modulus = 1
        for row in rows:
            require(type(row) is list and len(row) == 2)
            integer(row[0], -1000000, 1000000)
            n = integer(row[1], 1, 10000)
            modulus = modulus // gcd(modulus, n) * n
            require(modulus <= 10 ** 12)
    elif op == "power":
        keys(req, ("op", "a", "e", "n"))
        integer(req["a"], -1000000, 1000000)
        integer(req["e"], 0, 10000)
        integer(req["n"], 1, 1000000)
    elif op == "strong":
        keys(req, ("op", "n", "a"))
        n = integer(req["n"], 3, 1000000)
        require(n % 2 == 1)
        integer(req["a"], 2, n - 1)
    elif op == "prime":
        keys(req, ("op", "n"))
        integer(req["n"], 0, 10000)
    elif op == "factor":
        keys(req, ("op", "n"))
        integer(req["n"], 2, 1000000)
    elif op == "rsa":
        keys(req, ("op", "p", "q", "e", "d"))
        p = integer(req["p"], 2, 31)
        q = integer(req["q"], 2, 31)
        require(p != q and trial_prime(p) and trial_prime(q))
        e = integer(req["e"], 1, 10000)
        d = integer(req["d"], 1, 10000)
        require((e * d - 1) % ((p - 1) // gcd(p - 1, q - 1) * (q - 1)) == 0)
    else:
        keys(req, ("op", "p", "coefficients", "P", "k"))
        integer(req["p"], 2, 199)
        a = req["coefficients"]
        require(type(a) is list and len(a) == 5)
        for v in a:
            integer(v, -1000000, 1000000)
        integer(req["k"], -1024, 1024)
        C = Curve(req["p"], a)
        C.point(req["P"])
    return op

def egcd(a, b, counts):
    counts["gcd_calls"] += 1
    if a == 0 and b == 0:
        return 0, 0, 0
    u, v, x0, x1, y0, y1 = abs(a), abs(b), 1, 0, 0, 1
    while v:
        q, r = divmod(u, v)
        counts["euclid_divisions"] += 1
        u, v, x0, x1, y0, y1 = v, r, x1, x0 - q * x1, y1, y0 - q * y1
    return u, x0 * (-1 if a < 0 else 1), y0 * (-1 if b < 0 else 1)

def binary_power(a, e, n, counts):
    result, base, left = 1 % n, a % n, e
    while left:
        if left & 1:
            result = result * base % n
            counts["modular_multiplications"] += 1
        left //= 2
        if left:
            base = base * base % n
            counts["modular_multiplications"] += 1
    return result

def trial_factors(n, counts):
    remainder, divisor, result = n, 2, []
    while divisor * divisor <= remainder:
        counts["trial_divisions"] += 1
        if remainder % divisor:
            divisor += 1
        else:
            remainder //= divisor
            if result and result[-1][0] == divisor:
                result[-1][1] += 1
            else:
                result.append([divisor, 1])
    if remainder > 1:
        if result and result[-1][0] == remainder:
            result[-1][1] += 1
        else:
            result.append([remainder, 1])
    return result

def trial_prime(n):
    return n >= 2 and all(n % d != 0 for d in range(2, isqrt(n) + 1))

def pratt(p, counts):
    counts["prime_nodes"] += 1
    if p == 2:
        return {"p": 2, "a": 1, "factors": []}
    factors = trial_factors(p - 1, counts)
    children = [[q, e, pratt(q, counts)] for q, e in factors]
    for a in range(2, p):
        counts["witness_candidates"] += 1
        if binary_power(a, p - 1, p, counts) != 1:
            continue
        acceptable = True
        for q, unused in factors:
            v = binary_power(a, (p - 1) // q, p, counts)
            counts["gcd_calls"] += 1
            if gcd(v - 1, p) != 1:
                acceptable = False
                break
        if acceptable:
            return {"p": p, "a": a, "factors": children}
    raise ValueError("prime witness search failed")

def produce(req):
    op = request_scope(req)
    c = {name: 0 for name in COUNTERS}
    if op == "gcd":
        g, x, y = egcd(req["a"], req["b"], c)
        value = {"g": g, "x": x, "y": y}
    elif op == "crt":
        rows = req["congruences"]
        for i in range(len(rows)):
            for j in range(i):
                c["crt_pair_tests"] += 1
                c["gcd_calls"] += 1
                g = gcd(rows[j][1], rows[i][1])
                if (rows[i][0] - rows[j][0]) % g:
                    value = {"compatible": False, "pair": [j, i], "g": g}
                    return {"ok": True, "op": op, "value": value, "counters": c}
        r, m = 0, 1
        for a, n in rows:
            g, x, unused = egcd(m, n, c)
            step = ((a - r) // g * x) % (n // g)
            r, m = (r + m * step) % (m // g * n), m // g * n
            c["crt_merges"] += 1
        value = {"compatible": True, "r": r, "m": m}
    elif op == "power":
        value = {"residue": binary_power(req["a"], req["e"], req["n"], c)}
    elif op == "strong":
        n, a = req["n"], req["a"]
        c["gcd_calls"] += 1
        g = gcd(a, n)
        if g > 1:
            value = {"status": "composite_factor", "g": g, "s": 0, "d": 0, "chain": []}
        else:
            s, d = 0, n - 1
            while d % 2 == 0:
                s, d = s + 1, d // 2
            chain = [binary_power(a, d, n, c)]
            for unused in range(1, s):
                chain.append(chain[-1] * chain[-1] % n)
                c["modular_multiplications"] += 1
            passed = chain[0] == 1 or n - 1 in chain
            value = {"status": "strong_probable_prime" if passed else "composite_witness",
                     "g": 1, "s": s, "d": d, "chain": chain}
    elif op == "prime":
        n = req["n"]
        if n < 2:
            value = {"status": "below_two"}
        else:
            factors = trial_factors(n, c)
            if factors == [[n, 1]]:
                value = {"status": "prime", "certificate": pratt(n, c)}
            else:
                value = {"status": "composite", "factor": factors[0][0]}
    elif op == "factor":
        value = {"factors": trial_factors(req["n"], c)}
    elif op == "rsa":
        p, q, e, d = (req[k] for k in ("p", "q", "e", "d"))
        n = p * q
        rows = []
        for m in range(n):
            encrypted = binary_power(m, e, n, c)
            decrypted = binary_power(encrypted, d, n, c)
            rows.append([m, encrypted, decrypted])
            c["rsa_residues"] += 1
        c["gcd_calls"] += 1
        value = {"n": n, "lambda": (p - 1) // gcd(p - 1, q - 1) * (q - 1), "rows": rows}
    else:
        C = Curve(req["p"], req["coefficients"])
        P, left = C.point(req["P"]), abs(req["k"])
        if req["k"] < 0:
            P = C.neg(P)
        Q = None
        while left:
            if left & 1:
                Q = C.add(Q, P)
                c["group_additions"] += 1
            left //= 2
            if left:
                P = C.add(P, P)
                c["group_additions"] += 1
        value = {"Q": Q}
    return {"ok": True, "op": op, "value": value, "counters": c}

def verify_pratt(cert, expected, depth=0, budget=None):
    if budget is None:
        budget = [1024]
    budget[0] -= 1
    require(budget[0] >= 0 and depth <= 16)
    keys(cert, ("p", "a", "factors"))
    p = integer(cert["p"], 2, 10000)
    require(p == expected)
    factors = cert["factors"]
    require(type(factors) is list and len(factors) <= 14)
    if p == 2:
        require(type(cert["a"]) is int and cert["a"] == 1 and factors == [])
        return True
    a = integer(cert["a"], 2, p - 1)
    product, previous = 1, 1
    distinct = []
    for row in factors:
        require(type(row) is list and len(row) == 3)
        q = integer(row[0], 2, p - 1)
        e = integer(row[1], 1, 14)
        require(q > previous)
        verify_pratt(row[2], q, depth + 1, budget)
        product *= q ** e
        require(product <= p - 1)
        previous = q
        distinct.append(q)
    require(product == p - 1 and pow(a, p - 1, p) == 1)
    require(all(gcd(pow(a, (p - 1) // q, p) - 1, p) == 1 for q in distinct))
    return True

def verify_result(req, response):
    op = request_scope(req)
    keys(response, ("ok", "op", "value", "counters"))
    require(response["ok"] is True and response["op"] == op)
    c = response["counters"]
    keys(c, COUNTERS)
    for count in c.values():
        integer(count, 0, 10 ** 9)
    v = response["value"]
    if op == "gcd":
        keys(v, ("g", "x", "y"))
        a, b = req["a"], req["b"]
        g = integer(v["g"], 0, 1000000)
        x = integer(v["x"], -(10 ** 12), 10 ** 12)
        y = integer(v["y"], -(10 ** 12), 10 ** 12)
        if a == b == 0:
            require(g == x == y == 0)
        else:
            require(g > 0 and a % g == b % g == 0 and a * x + b * y == g)
    elif op == "crt":
        require(type(v) is dict and type(v.get("compatible")) is bool)
        rows = req["congruences"]
        if not v["compatible"]:
            keys(v, ("compatible", "pair", "g"))
            pair = v["pair"]
            require(type(pair) is list and len(pair) == 2)
            j = integer(pair[0], 0, len(rows) - 1)
            i = integer(pair[1], 0, len(rows) - 1)
            require(j < i)
            g = integer(v["g"], 1, 10000)
            require(g == gcd(rows[j][1], rows[i][1])
                    and (rows[i][0] - rows[j][0]) % g != 0)
        else:
            keys(v, ("compatible", "r", "m"))
            m = 1
            for unused, n in rows:
                m = m // gcd(m, n) * n
            require(integer(v["m"], 1, 10 ** 12) == m)
            r = integer(v["r"], 0, m - 1)
            require(all(r % n == a % n for a, n in rows))
    elif op == "power":
        keys(v, ("residue",))
        require(integer(v["residue"], 0, req["n"] - 1)
                == pow(req["a"], req["e"], req["n"]))
    elif op == "strong":
        keys(v, ("status", "g", "s", "d", "chain"))
        n, a = req["n"], req["a"]
        g = gcd(a, n)
        require(integer(v["g"], 1, n - 1) == g)
        if g > 1:
            require(v["status"] == "composite_factor" and v["chain"] == []
                    and type(v["s"]) is int and v["s"] == 0
                    and type(v["d"]) is int and v["d"] == 0)
        else:
            s, d = 0, n - 1
            while d % 2 == 0:
                s, d = s + 1, d // 2
            require(integer(v["s"], 1, 20) == s and integer(v["d"], 1, n - 1) == d)
            chain = v["chain"]
            require(type(chain) is list and len(chain) == s)
            for j, residue in enumerate(chain):
                require(integer(residue, 0, n - 1) == pow(a, d * (2 ** j), n))
            passed = chain[0] == 1 or n - 1 in chain
            require(v["status"] == ("strong_probable_prime" if passed else "composite_witness"))
    elif op == "prime":
        n = req["n"]
        require(type(v) is dict)
        if n < 2:
            keys(v, ("status",))
            require(v["status"] == "below_two")
        elif v.get("status") == "composite":
            keys(v, ("status", "factor"))
            factor = integer(v["factor"], 2, n - 1)
            require(n % factor == 0)
        else:
            keys(v, ("status", "certificate"))
            require(v["status"] == "prime")
            verify_pratt(v["certificate"], n)
    elif op == "factor":
        keys(v, ("factors",))
        factors = v["factors"]
        require(type(factors) is list and 1 <= len(factors) <= 20)
        product, previous = 1, 1
        for row in factors:
            require(type(row) is list and len(row) == 2)
            p = integer(row[0], 2, req["n"])
            e = integer(row[1], 1, 20)
            require(p > previous and trial_prime(p))
            product *= p ** e
            require(product <= req["n"])
            previous = p
        require(product == req["n"])
    elif op == "rsa":
        keys(v, ("n", "lambda", "rows"))
        p, q, e, d = (req[k] for k in ("p", "q", "e", "d"))
        n = p * q
        require(integer(v["n"], 1, 1000) == n)
        require(integer(v["lambda"], 1, 1000)
                == (p - 1) // gcd(p - 1, q - 1) * (q - 1))
        rows = v["rows"]
        require(type(rows) is list and len(rows) == n)
        for m, row in enumerate(rows):
            require(type(row) is list and len(row) == 3)
            require(all(type(x) is int for x in row))
            require(row == [m, pow(m, e, n), m] and pow(row[1], d, n) == m)
    else:
        keys(v, ("Q",))
        C = Curve(req["p"], req["coefficients"])
        P = C.point(req["P"])
        if req["k"] < 0:
            P = C.neg(P)
        Q = None
        for unused in range(abs(req["k"])):
            Q = C.add(Q, P)
        require(C.point(v["Q"]) == Q)
    return True

def rejected(req, result):
    try:
        verify_result(req, result)
    except (ValueError, TypeError, KeyError, IndexError, ZeroDivisionError, RecursionError):
        return True
    return False

def selfcheck():
    cases = {name: 0 for name in OPS}
    def check(req):
        response = produce(req)
        require(verify_result(req, response))
        cases[req["op"]] += 1
        return response
    for a in range(-12, 13):
        for b in range(-12, 13):
            check({"op": "gcd", "a": a, "b": b})
    for m in range(1, 13):
        for n in range(1, 13):
            for a in range(m):
                for b in range(n):
                    check({"op": "crt", "congruences": [[a, m], [b, n]]})
    for a in range(-8, 9):
        for e in range(17):
            for n in range(1, 17):
                check({"op": "power", "a": a, "e": e, "n": n})
    for n in range(3, 200, 2):
        for a in range(2, n):
            response = check({"op": "strong", "n": n, "a": a})
            if trial_prime(n):
                require(response["value"]["status"] == "strong_probable_prime")
    for n in range(10001):
        response = check({"op": "prime", "n": n})
        require((response["value"]["status"] == "prime") == trial_prime(n))
    for n in list(range(2, 501)) + [10403, 65537, 1000000]:
        check({"op": "factor", "n": n})
    for p, q, e, d in [(5, 11, 3, 7), (3, 7, 5, 5)]:
        check({"op": "rsa", "p": p, "q": q, "e": e, "d": d})
    for p in range(2, 200):
        if trial_prime(p) and p != 37:
            for k in range(-16, 17):
                check({"op": "elliptic", "p": p, "coefficients": [0, 0, 1, -1, 0],
                       "P": [0, 0], "k": k})
    fixtures = [
        ({"op": "gcd", "a": 38, "b": 59}, {"g": 1, "x": 14, "y": -9}),
        ({"op": "gcd", "a": 0, "b": 0}, {"g": 0, "x": 0, "y": 0}),
        ({"op": "crt", "congruences": [[2, 6], [5, 9]]},
         {"compatible": True, "r": 14, "m": 18}),
        ({"op": "crt", "congruences": [[2, 6], [4, 9]]},
         {"compatible": False, "pair": [0, 1], "g": 3}),
        ({"op": "crt", "congruences": [[99, 1], [-1, 5]]},
         {"compatible": True, "r": 4, "m": 5}),
        ({"op": "power", "a": 2, "e": 10, "n": 17}, {"residue": 4}),
        ({"op": "power", "a": 5, "e": 0, "n": 1}, {"residue": 0}),
        ({"op": "factor", "n": 10403}, {"factors": [[101, 1], [103, 1]]}),
        ({"op": "factor", "n": 65537}, {"factors": [[65537, 1]]}),
        ({"op": "elliptic", "p": 5, "coefficients": [0, 0, 0, 2, 1],
          "P": [0, 1], "k": 2}, {"Q": [1, 3]}),
        ({"op": "elliptic", "p": 5, "coefficients": [0, 0, 0, 2, 1],
          "P": [0, 1], "k": -1024}, {"Q": [1, 2]}),
        ({"op": "elliptic", "p": 2, "coefficients": [0, 0, 1, -1, 0],
          "P": [0, 0], "k": 2}, {"Q": [1, 0]}),
        ({"op": "elliptic", "p": 3, "coefficients": [0, 0, 1, -1, 0],
          "P": [0, 0], "k": 2}, {"Q": [1, 0]}),
    ]
    for req, expected in fixtures:
        require(check(req)["value"] == expected)
    require(check({"op": "strong", "n": 9, "a": 3})["value"]["status"] == "composite_factor")
    require(check({"op": "strong", "n": 15, "a": 2})["value"]["status"] == "composite_witness")
    require(check({"op": "strong", "n": 3, "a": 2})["value"]["status"] == "strong_probable_prime")
    require(check({"op": "strong", "n": 2047, "a": 2})["value"]["status"] == "strong_probable_prime")
    corruptions = [
        ({"op": "gcd", "a": 6, "b": 10}, "g", -2),
        ({"op": "crt", "congruences": [[2, 6], [5, 9]]}, "r", 13),
        ({"op": "power", "a": 2, "e": 10, "n": 17}, "residue", 5),
        ({"op": "strong", "n": 15, "a": 2}, "status", "strong_probable_prime"),
        ({"op": "prime", "n": 7}, "certificate", {"p": 7, "a": 2, "factors": []}),
        ({"op": "factor", "n": 10403}, "factors", [[101, 2]]),
        ({"op": "rsa", "p": 5, "q": 11, "e": 3, "d": 7}, "n", 54),
        ({"op": "elliptic", "p": 5, "coefficients": [0, 0, 0, 2, 1],
          "P": [0, 1], "k": 2}, "Q", [0, 1]),
    ]
    for req, name, replacement in corruptions:
        bad = deepcopy(check(req))
        bad["value"][name] = replacement
        if req["op"] == "gcd":
            bad["value"]["x"], bad["value"]["y"] = -2, 1
        require(rejected(req, bad))
    invalid = [
        {"op": "gcd", "a": True, "b": 1},
        {"op": "crt", "congruences": [[0, 0]]},
        {"op": "power", "a": 2, "e": -1, "n": 7},
        {"op": "strong", "n": 4, "a": 2},
        {"op": "prime", "n": 10001},
        {"op": "factor", "n": 1},
        {"op": "rsa", "p": 5, "q": 11, "e": 3, "d": -13},
        {"op": "elliptic", "p": 5, "coefficients": [0, 0, 0, 0, 0],
         "P": None, "k": 1},
    ]
    for req in invalid:
        try:
            produce(req)
        except (ValueError, TypeError, KeyError):
            pass
        else:
            raise ValueError("invalid fixture was accepted")
    return {"ok": True, "op": "selfcheck", "cases": cases,
            "corruptions_rejected": len(corruptions), "invalid_requests_rejected": len(invalid),
            "claim": "Exact bounded checks only; no production security or timing claim"}

def process(req):
    bounded_tree(req)
    require(type(req) is dict and type(req.get("op")) is str)
    if req["op"] == "verify":
        keys(req, ("op", "request", "result"))
        return {"ok": True, "op": "verify", "verified": not rejected(req["request"], req["result"])}
    if req["op"] == "selfcheck":
        keys(req, ("op",))
        return selfcheck()
    return produce(req)

def unique_pairs(pairs):
    result = {}
    for key, value in pairs:
        require(key not in result)
        result[key] = value
    return result

def parse_integer(text):
    require(len(text) <= 25)
    return int(text)

def no_real(text):
    raise ValueError("only JSON integers are allowed")

def main():
    try:
        raw = sys.stdin.buffer.read(MAX_INPUT + 1)
        require(len(raw) <= MAX_INPUT)
        text = raw.decode("ascii")
        req = json.loads(text, object_pairs_hook=unique_pairs,
                         parse_int=parse_integer, parse_float=no_real, parse_constant=no_real)
        bounded_tree(req)
        wire = canonical(req)
        require(text == wire or text == wire + "\\n")
        response = process(req)
        output = canonical(response)
        require(len(output) + 1 <= MAX_OUTPUT)
    except (ValueError, TypeError, KeyError, IndexError, ZeroDivisionError,
            RecursionError, UnicodeError):
        output = '{"error":"invalid_request","ok":false}'
    sys.stdout.write(output + "\\n")

if __name__ == "__main__":
    main()
\`\`\`

<a id="section-955-references-arithmetic-proofs-and-included-program-bound"></a>

## Sources: arithmetic proofs and included program boundaries {#section-957-references-arithmetic-proofs-and-included-program-bound}

The gcd, CRT, modular-power, strong-test, recursive-order and RSA correctness implications are proved from the book's earlier integer, finite-field and congruence results. The elliptic operation depends on the actual included Chapter 21 Weierstrass source and its explicitly imported group theorem, not an undefined external function. The probability of primality, heuristic factor-search performance and modern cryptographic security are not imported as consequences of these bounded calculations.

The listings are dependency-free in the sense of standard-library code plus the two included exact source components. Their source/fence bindings and independent source reviews remain separate from actual root reproduction receipts. No certificate hash, counter or unexecuted selfcheck is treated as mathematical truth or as an observed runtime result.
`;export{e as default};