
# Cryptography: Definitions Before Devices

**Before reading.** Read [Divisibility and Modular Arithmetic](../books/introduction-to-proof/divisibility-modular-arithmetic.md), [Conditional Probability and Bayes](../books/introduction-to-probability/conditional-probability-bayes.md) and [Cost, Amortization, and Lower Bounds](../books/algorithms-computation-proof-desk/cost-amortization-lower-bounds.md). These are preparation for the ideas used below.

Cryptography begins after the arithmetic works. A map can be invertible by an intended key holder and still leak the message, accept forged data, repeat nonces, expose timing information, or fail when placed in a protocol. This deep dive builds a claim ladder from primitive to scheme to protocol, using number-theoretic examples without presenting toy code as protection.

## 1. Name the interface

An encryption scheme has probabilistic key generation $Gen$, encryption $Enc$, and decryption $Dec$. Correctness states that for every allowed message m,

$$Dec_{\mathrm{sk}}(Enc_{\mathrm{pk}}(m; randomness)) = m$$

with probability 1 or an explicitly bounded failure probability over the named randomness.

A signature scheme instead has $KeyGen$, $Sign$, and $Verify$. Verification returns accept or reject; it does not recover a secret message. A message authentication code uses a shared secret and does not offer public verification. A hash function has no key in its simplest form. A key exchange aims to establish a session key, often with authentication as a separate but essential property.

Interface confusion creates false claims. “Only the recipient can decrypt” does not authenticate the sender. “The digest changed” does not prove who created the original. “Both parties computed the same group element” does not prevent an active intermediary unless identities are bound to the exchange.

## 2. Correctness is not confidentiality

Textbook RSA chooses distinct primes p,q, lets n=pq, and chooses e,d with

$ed\equiv1 (mod \lambda(n))$ or, more conservatively for the elementary proof, modulo $\phi(n)$.

The public transformation is $c=m^{e} \bmod n$; the private transformation is $m=c^{d} \bmod n$. Correctness is proved separately modulo p and q and reassembled by CRT.

But the map is deterministic: equal messages give equal ciphertexts. If an attacker knows the message is either “yes” or “no” under a public encoding, the attacker can encrypt both candidates and compare. No factorization is needed. Correct algebra therefore fails even the weakest modern indistinguishability goal.

Real RSA encryption specifications combine the RSA primitive with an encoding scheme. [RFC 8017](https://www.rfc-editor.org/info/rfc8017/) distinguishes RSA primitives from RSAES encryption and RSASSA signature schemes and specifies OAEP and PSS constructions. This lesson does not turn the standard into implementation instructions; standards, threat models, validated libraries, and current platform guidance must be consulted together.

## 3. An adversarial game makes “hidden” precise

In an IND-CPA experiment for public-key encryption:

1. a key pair is generated;
2. the adversary receives the public key and may compute encryptions;
3. it submits equal-length messages $m₀,m₁$;
4. a hidden random bit b is chosen and $Enc(pk,m_{b})$ returned;
5. the adversary guesses b.

Advantage measures how much its success exceeds 1/2. A scheme is IND-CPA secure when every efficient adversary has negligible advantage as the security parameter grows.

IND-CCA strengthens the game by allowing decryption queries before and after the challenge, except for the challenge ciphertext itself. The exact restriction and oracle timing matter. A proof of IND-CPA does not imply IND-CCA in general.

“Efficient” normally means probabilistic polynomial time in a security parameter. “Negligible” means smaller eventually than the reciprocal of every positive-degree polynomial. Testing millions of cases cannot establish this asymptotic quantification.

## 4. Reductions are conditional programs

A reduction has the form:

> If adversary A breaks scheme S with advantage ε and cost T, construct algorithm B that solves assumed-hard problem H with related advantage and cost.

The proof must simulate A’s view correctly. A game hop changes one component at a time and bounds the change in success probability. The final theorem includes losses, oracle assumptions, parameter regimes, and sometimes an idealized model such as a random oracle.

It does not prove H hard. It says a practical break of S within the modeled attack would transfer to H. A large reduction loss may require larger parameters. An implementation bug or side channel can bypass the mathematical reduction entirely.

## 5. RSA assumptions are not interchangeable

The integer factorization problem asks for p,q from n=pq. The RSA inversion problem asks for an e-th root modulo n under a generated key. Knowing the factorization permits inversion, but a general proof that every RSA inverter factors n is not known in the ordinary formulation. Do not write “breaking RSA is equivalent to factoring” without a precise restricted theorem.

Multiplicative structure also makes raw RSA malleable:

$$Enc(m₁)Enc(m₂) \equiv Enc(m₁m₂) (mod n)$$

This algebra can support useful constructions when controlled, but raw encryption under active attack is not CCA secure.

CRT accelerates private operations by computing modulo p and q, but faulty or observable branch computations can leak factors. The lesson is architectural: an optimization changes the fault and side-channel surface even when the final formula is equivalent.

## 6. Diffie–Hellman has several hardness questions

Let G be a cyclic group generated by g, of large prime order r for the cleanest model.

- **Discrete logarithm (DLP):** given g and $g^{a}$, recover a.
- **Computational Diffie–Hellman (CDH):** given $g^{a},g^{b}$, compute $g^{ab}$.
- **Decisional Diffie–Hellman (DDH):** distinguish $g^{ab}$ from a random group element given $g^{a},g^{b}$.

An algorithm for DLP solves CDH, and an algorithm for CDH can distinguish DDH by computing the candidate, but converse reductions do not hold automatically in every group. Pairings can make DDH easy while variants of CDH remain useful assumptions.

Unauthenticated Diffie–Hellman is vulnerable to an active intermediary who negotiates a separate secret with each endpoint. The arithmetic transcript succeeds locally while the intended peer relationship fails. Authenticated key exchange binds identities, roles, transcript, algorithms, and key confirmation according to a protocol definition.

## 7. Elliptic curves supply groups, not automatic security

For a nonsingular elliptic curve over a finite field, points form a finite abelian group. Scalar multiplication $kP$ is efficient by double-and-add; recovering k from P and kP is the elliptic-curve discrete logarithm problem.

A secure construction must address more than the addition formula:

- field and curve parameters;
- subgroup order and cofactor;
- point encoding and canonical decoding;
- rejection of invalid or small-subgroup points;
- secret scalar generation and clamping rules when applicable;
- constant-time field/group operations;
- nonce uniqueness or deterministic derivation in signatures;
- protocol transcript and domain separation.

The live Atlas lab deliberately uses fields of size at most 31 and enumerates every point. It demonstrates closure and order, thereby demonstrating its own total insecurity as a discrete-log platform.

[NIST FIPS 186-5](https://csrc.nist.gov/pubs/fips/186-5/final) specifies approved digital-signature algorithms, while SP 800-186 provides related elliptic-curve domain parameters. Their existence illustrates that an equation alone is not a scheme; this course does not recommend a deployment choice.

## 8. Signatures need unforgeability and nonce discipline

EUF-CMA—existential unforgeability under chosen-message attack—allows an adversary to request signatures on messages it chooses. It wins by producing a valid signature for a new message not previously queried. Strong unforgeability also treats a new valid signature on an already signed message as a forgery.

For DSA/ECDSA-style signatures, reusing the per-message secret nonce in two signatures can expose the long-term secret through linear equations. A biased or partially leaked nonce can also be catastrophic. This is a concrete example of randomness quality being part of correctness and security, not decorative input.

Signature verification also needs strict parsing. If several byte strings encode the same mathematical value or malformed values are accepted inconsistently, protocol-level ambiguity can defeat a proof that assumed canonical encodings.

## 9. Hash functions expose different collision games

Three notions:

- **preimage resistance:** given y, find x with H(x)=y;
- **second-preimage resistance:** given x, find distinct x′ with the same hash;
- **collision resistance:** find any distinct x,x′ with equal hashes.

They quantify inputs differently. An n-bit idealized hash reaches generic collisions in about $2^{n/2}$ work by the birthday phenomenon, while generic preimage search costs about $2^{n}$. This is a heuristic ideal-function benchmark, not a lower bound for every concrete construction.

A raw hash is generally not a message authentication code. Length extension and key-placement errors illustrate why an analyzed construction such as HMAC has a separate definition.

## 10. Hybrid encryption separates jobs

Public-key operations are commonly used to establish or encapsulate a random symmetric key, while an authenticated-encryption scheme protects the data. A **KEM–DEM** composition has:

- a key encapsulation mechanism producing a ciphertext and shared key;
- a data encapsulation mechanism, usually symmetric authenticated encryption.

Composition theorems require compatible security notions and correct key handling. Reusing nonces, omitting associated-data authentication, or ignoring decryption failures can invalidate the conclusion.

Failure messages and timing are observable protocol outputs. “Return error” is not one behavior unless all relevant paths are indistinguishable under the threat model.

## 11. Worked small attacks as diagnostic proofs

### Equality leak

**Worked example.**

If $Enc_{\mathrm{pk}}(m)$ is deterministic and public, an adversary chooses distinct $m₀,m₁$, receives the challenge, computes both encryptions, and compares. Its success is 1, giving maximum distinguishing advantage under the usual normalization.

### One-time-pad reuse

If $c₁=m₁ XOR k$ and $c₂=m₂ XOR k$, then $c₁ XOR c₂=m₁ XOR m₂$; the key cancels. The pad’s perfect-secrecy theorem requires a uniform key as long as the message, independent and used once.

### Unauthenticated exchange

Alice sends $g^{a}$; an intermediary replaces it by $g^{u}$ to Bob and replaces Bob’s $g^{b}$ by $g^{v}$ to Alice. Alice shares with the intermediary and Bob shares another key with the intermediary. No discrete logarithm was solved.

## 12. A claim ladder for reports

Report the highest rung actually justified:

1. arithmetic example round-trips;
2. algorithm is correct for all valid inputs;
3. implementation passes specified tests;
4. primitive meets a formal property under assumptions;
5. composition theorem covers the scheme;
6. protocol model covers parties, sessions, compromise, and active attacks;
7. implementation and operations address randomness, parsing, leakage, updates, and key lifecycle.

A lower rung is valuable evidence. It simply does not entail the higher ones.

## Exercises

<a id="deep-dive-cryptography-definitions-protocols-ex-1"></a>

### Exercise 1

1. Give an IND-CPA distinguisher against deterministic public-key encryption.

<details>
<summary>Hint 1</summary>

In public-key encryption, an adversary can run the public encryption algorithm on chosen messages.
</details>

<details>
<summary>Hint 2</summary>

With deterministic encryption, compare the challenge ciphertext with both locally computed ciphertexts.
</details>

<details>
<summary>Solution</summary>

Choose equal-length distinct m₀,m₁, receive c, compute the two public deterministic encryptions, and return the matching index. Correctness makes the ciphertexts distinguishable unless the scheme itself collapses messages.

</details>

<a id="deep-dive-cryptography-definitions-protocols-ex-2"></a>

### Exercise 2

2. Show raw RSA multiplication changes an encryption of m into one of $rm$.

<details>
<summary>Hint 1</summary>

Raw RSA encryption is exponentiation modulo the public modulus.
</details>

<details>
<summary>Hint 2</summary>

Multiply the ciphertext by the public encryption of r and combine exponents before reducing modulo the modulus.
</details>

<details>
<summary>Solution</summary>

$c=m^{e}$; multiplying by $r^{e}$ gives $(rm)^{e} \bmod n$. This malleability uses only the public exponent.

</details>

### Further exercises

3. Order DLP, CDH, DDH by the straightforward implications described above.
4. Explain why encrypting with a recipient’s public key does not authenticate a sender.
5. Two ECDSA-like equations use the same nonce k: $s_{i}=k^{-1}(h_{i}+dr_{i}) \bmod r$, with equal r_i=r₀. Derive k from the two signatures when $s₁-s₂$ is invertible.
6. Classify a chosen pair x,x′ with equal H values as which hash attack.
7. State the exact one-time-pad hypothesis broken by pad reuse.
8. For each lab output—RSA round trip, complete curve table, point order—state one justified and one unjustified claim.

## Solutions


3. Solving DLP lets one recover a or b and hence solve CDH. Solving CDH lets one compute $g^{ab}$ and compare, solving DDH. The reverse implications are not automatic.
4. Anyone has the public key and can form a ciphertext. Confidentiality for the recipient says nothing about which sender produced it; a signature or authenticated protocol supplies a different property.
5. Subtract: $s₁-s₂=k^{-1}(h₁-h₂)$, hence $k=(h₁-h₂)(s₁-s₂)^{-1} \bmod r$. Then either equation yields d if r₀ is invertible.
6. It is a collision attack because both inputs are chosen. If one input had been fixed in advance, finding the other would be a second-preimage task.
7. The key must be used once. Reuse makes the two ciphertexts dependent through the same key and reveals the XOR of plaintexts.
8. Round trip justifies correctness for that state, not confidentiality. Enumeration justifies the exact tiny point set, not security or behavior on standardized curves. Point order justifies a finite group calculation, not discrete-log hardness at useful scale.

## Continue

The computation recipe implements number-theoretic primitives with explicit validation and property tests. For cryptographic engineering, use maintained, audited libraries and current standards rather than adapting Atlas code. Future mathematical shelves should treat pseudorandomness, reductions, zero knowledge, lattices, codes, isogenies, secure multiparty computation, homomorphic encryption, post-quantum security models, and universal composability as separate courses.
