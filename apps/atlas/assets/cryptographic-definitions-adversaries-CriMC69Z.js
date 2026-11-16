var e=`---
parent_id: book-cryptography
chapter_id: cryptographic-definitions-adversaries
title: "Cryptographic Definitions, Games, and Adversaries"
level: advanced-undergraduate
estimated_minutes: 150
license: CC BY-SA 4.0
---

# Cryptographic Definitions, Games, and Adversaries

Cryptography begins with an adversary, not an algorithm name. A security claim identifies what the adversary observes, controls, and computes; what experiment counts as winning; and how advantage scales with a security parameter. Functional round-trip tests are necessary but do not establish secrecy or authenticity.

## 1. Syntax, correctness, and security

A symmetric encryption scheme has randomized or deterministic algorithms \`KeyGen\`, \`Enc\`, and \`Dec\`. Correctness says that for every legal message, a generated key and encryption randomness decrypt to the original message, except perhaps with a stated failure probability.

Security is separate. A scheme may decrypt perfectly while leaking every message. An encoding such as Base64 is reversible representation, not encryption. Hashing, encryption, and authentication solve different contracts.

## 2. Security parameters and negligible functions

The security parameter $\\lambda$ indexes a family of finite schemes. A function $\\mu(\\lambda)$ is negligible if for every positive polynomial $p$, eventually $\\mu(\\lambda)<1/p(\\lambda)$. “Very small today” is an engineering estimate; negligible is an asymptotic definition.

An efficient adversary is usually probabilistic polynomial time in $\\lambda$ and input length. Concrete security instead gives an explicit resource bound and advantage, useful for deployment. Translating an asymptotic theorem into parameters needs a separate analysis.

## 3. Indistinguishability games

In a left-or-right secrecy game, the adversary submits equal-length messages $m_0,m_1$. A challenger samples a hidden bit $b$, returns an encryption of $m_b$, and the adversary guesses $b$. Advantage can be defined as

$\\lvert Pr[guess=b]-1/2\\rvert$.

Equal length prevents the ciphertext length from trivially revealing the bit. The game must specify encryption queries before and after the challenge, nonce rules, and whether repeated messages are allowed.

## 4. Why deterministic encryption leaks

Deterministic encryption of repeated plaintext under one key repeats ciphertext. An adversary with an encryption oracle can encrypt $m_0$ and compare it with the challenge, winning the basic chosen-plaintext game. Randomization or unique nonces prevent this equality test, but nonce management becomes part of correctness and security assumptions.

The one-time pad $c=m \\oplus k$ is perfectly secret when $k$ is uniform, as long as the message, and never reused. For any fixed ciphertext and candidate message there is exactly one compatible key, all equally likely. Reusing a pad gives $c1 \\oplus c2 = m_1 \\oplus m2$, leaking a relation.

## 5. Authentication and unforgeability

A message authentication code has $Tag_{k}(m)$ and $Verify_{k}(m,t)$. In an unforgeability game the adversary obtains tags for chosen messages and wins by producing a valid pair for a new message. Merely replaying an earlier pair is normally excluded; protocols that must prevent replay also need sequence numbers, timestamps, or state.

An unkeyed hash cannot by itself authenticate against an active attacker, who can modify the message and recompute the hash. Collision resistance, preimage resistance, and MAC unforgeability are distinct games.

## 6. Hybrid arguments

A hybrid proof changes a real experiment through a sequence $G_{0},\\ldots,G_{t}$ until the final game is obviously secure. If adjacent games differ in advantage by at most $\\varepsilon_{i}$, the triangle inequality bounds the total difference by $\\sum \\varepsilon_{i}$.

Every transition needs justification: identical distribution, reduction to an assumption, or probability of a bad event. “Now replace it by random” is not a proof unless the replacement is tied to a stated indistinguishability assumption.

## 7. Reductions in cryptography

To reduce breaking a scheme to solving a presumed hard problem, construct an algorithm $B$ that uses adversary $A$ as a subroutine. $B$ must simulate $A$'s view, translate $A$'s success into its own success, and account for running time and probability loss.

A reduction does not prove the assumption true. It proves a conditional statement: an adversary with given advantage would yield an algorithm against the assumption with related resources.

## 8. Random oracles and idealizations

A random oracle is an ideal random function accessible consistently by queries. Proofs in that model establish security relative to the idealization and the reduction. Replacing it with a concrete hash function is an implementation step not justified solely by the model proof.

Likewise, constant-time source code, compiler behaviour, hardware leakage, randomness quality, key storage, and protocol composition sit outside many mathematical games. A complete security envelope names them.

## 9. A safe educational experiment

The following dependency-free code demonstrates one-time-pad correctness and the algebraic leakage caused by key reuse. It is **not** a production cryptographic library.

\`\`\`python
def xor_bytes(left, right):
    if len(left) != len(right):
        raise ValueError("equal lengths required")
    return bytes(a ^ b for a, b in zip(left, right))

def encrypt_once(message, pad):
    return xor_bytes(message, pad)

if __name__ == "__main__":
    pad = bytes.fromhex("0011223344556677")
    first = b"message1"
    second = b"message2"
    c1 = encrypt_once(first, pad)
    c2 = encrypt_once(second, pad)  # deliberate misuse for demonstration
    assert encrypt_once(c1, pad) == first
    assert xor_bytes(c1, c2) == xor_bytes(first, second)
    print("reuse leaks plaintext xor:", xor_bytes(c1, c2).hex())
\`\`\`

The literal pad makes the example reproducible and therefore completely insecure. Never reuse it or copy this construction into an application. Production cryptography should use a maintained, reviewed platform API under an explicit threat model.

## 10. Randomness and nonce obligations

Keys often need unpredictable randomness; nonces may need uniqueness rather than secrecy. Confusing the two can lead to weak keys or catastrophic reuse. “Random-looking” timestamps are neither uniformly random nor collision-free by theorem.

Failure handling matters. If randomness acquisition fails, silently falling back to a constant is not graceful degradation. The scheme's assumptions are no longer met, so the operation should fail closed under its system contract.

## 11. Side channels and composition

An algorithm can be secure in a black-box game yet leak through timing, cache access, power, errors, or message length. Mitigations require a leakage model and system evidence. Similarly, secure components need not compose securely if keys, nonces, domains, or error messages interact.

Domain separation tags different uses of one primitive so an object valid in one context is not silently accepted in another. Key separation makes the boundary stronger and easier to audit.

## 12. Security claim template

Write: scheme syntax; message and key spaces; security parameter; correctness probability; adversary interfaces and resources; win event; advantage; assumptions; reduction loss; parameter choice; nonce and randomness requirements; side-channel boundary; and operational response to failure. Anything omitted becomes a likely source of overclaim.

## A fixed convention for advantage

We use absolute guessing advantage $|\\Pr[b'=b]-1/2|$ for hidden-bit encryption games. A function distinguisher instead has the probability-gap advantage $|\\Pr[D(X)=1]-\\Pr[D(Y)=1]|$. Different texts may multiply a guessing advantage by two, so a reduction must state which convention it uses before reporting its loss.

For a fixed message-pair distinguisher, write $p_i$ for the probability it outputs one when the encrypted message is $m_i$. In the uniform hidden-bit game its success probability is one half times $(1-p_0)+p_1$, hence one half plus $(p_1-p_0)/2$. Its absolute guessing advantage is therefore half the probability gap. If its sign is unhelpful, reversing the final guess changes the sign but not the absolute value. A finite example with success three quarters thus has guessing advantage one quarter and corresponding distribution gap one half.

The game must also specify admissibility. If messages have unequal exposed lengths, the length can answer the challenge without violating any theorem about content secrecy for equal lengths. If a nonce-restricted game requires distinct nonces, a query sequence that repeats them is outside that theorem's input contract. A useful attack can reveal why such a restriction matters, but it must not be described as winning the restricted game while ignoring its rule.

## Negligibility under explicit composition

An inverse polynomial such as $\\lambda^{-100}$ is not negligible: take the comparison polynomial $p(\\lambda)=\\lambda^{101}$. A fixed positive decimal is not negligible either, since the reciprocal of a growing polynomial eventually becomes smaller than that constant. Negligibility is an asymptotic quantified statement, independent of whether a displayed constant looks practically small.

By contrast, $2^{-\\lambda}$ is negligible. For a positive polynomial of degree $d$, bound it eventually by $c\\lambda^d$. The binomial coefficient of order $d+1$ in the expansion of $2^\\lambda$ gives, for sufficiently large integer $\\lambda$, a lower bound by a positive constant times $\\lambda^{d+1}$. Therefore $p(\\lambda)2^{-\\lambda}$ tends to zero and is eventually below one. This proves the required reciprocal comparison for every fixed polynomial.

If at most a polynomial number $q(\\lambda)$ of hybrid transitions each have loss bounded by the **same** negligible upper bound $\\mu(\\lambda)$, their sum is at most $q\\mu$, which is negligible. Given a desired positive polynomial $p$, apply negligibility of $\\mu$ to a polynomial upper bound for $pq$. The common uniform upper bound matters; a collection of separate eventually-small claims does not automatically control an index that grows with the parameter.

## Worked example 1: deterministic encryption with an oracle

Fix distinct equal-length messages $m_0,m_1$ in a perfectly correct deterministic scheme. Ask the encryption oracle for the ciphertext of $m_0$, then submit the pair as the challenge. Compare the challenge ciphertext with the stored one. Determinism makes them equal for hidden bit zero. Correctness makes them different for hidden bit one, because one ciphertext under one key cannot decrypt to two different messages. Thus the adversary guesses correctly every time.

Its guessing advantage is one half, the maximum under our convention. This is an attack on a chosen-plaintext interface permitting the initial query. It does not contradict one-message security in a game without that query. The proof uses correctness to exclude a ciphertext collision between distinct messages, so even the attack has an explicit mathematical hypothesis.

## Worked example 2: a bad-event bound for nonce collisions

Suppose at most three fresh nonces are sampled independently and uniformly from sixteen possibilities. For each pair of positions, the collision probability is one sixteenth. A union bound over three pairs gives an upper bound of three sixteenths on any collision. The exact no-collision probability is $(16\\cdot15\\cdot14)/16^3$, so the exact collision probability is twenty-three over one hundred twenty-eight, slightly smaller than the bound.

More generally, for at most $q$ samples from $2^r$ values the union bound gives $q(q-1)/2^{r+1}$. The bound can exceed one, in which case replacing it by one gives the trivial probability bound. A mathematical use of unique nonces cannot silently substitute random nonces without adding this collision event or a separate uniqueness mechanism. The exact primitive contract decides which event matters.

## Worked example 3: a three-step hybrid estimate

Suppose the absolute probability changes in three justified transitions are bounded by $2^{-10}$, $2^{-12}$ and $2^{-8}$. The total change is at most their sum, twenty-one over four thousand ninety-six. This is an upper bound, not a promise that the three signed changes reinforce rather than cancel. A proof can use the conservative bound without knowing their signs.

One transition may be justified by an assumption and another by a bad-event coupling. For the latter, construct both games using a joint source of randomness so their transcripts agree unless an event Bad occurs. The difference of their success indicators has absolute value at most the indicator of Bad. Taking expectations bounds the absolute success-probability difference by $\\Pr[\\mathrm{Bad}]$. This is the complete reason a rare event can pay for a game change; simply naming a bad event without coupling the games does not establish it.

## Reductions preserve an entire interface

A reduction receiving a challenge from its own security game must answer every oracle query allowed to its subroutine. The answers need the right joint distribution, including repeated-query consistency and dependencies on past choices. If it invents independent answers where the real oracle repeats the same function value, the subroutine can distinguish the simulation for reasons unrelated to the assumption being reduced to.

Running time and query count also matter. An efficient subroutine wrapped by an exponentially expensive simulator does not give the promised efficient assumption-breaking adversary. A concrete theorem should count the additional oracle calls and processing. An asymptotic theorem must establish polynomial overhead and a negligible final loss under the exact uniform bounds it uses.

## Practice with fully explained solutions

### Exercise 1
<a id="cryptographic-definitions-adversaries-ex-1"></a>
Separate correctness and secrecy.

<details><summary>Hint 1</summary>

Compare the decryption relation with the adversary experiment.

</details>
<details><summary>Hint 2</summary>

A reversibly correct map may reveal the input.

</details>
<details><summary>Solution</summary>

Correctness says decryption recovers an honestly encrypted message. Secrecy says an adversary's observations reveal no more than the formal game permits; either property can hold without the other.

</details>

### Exercise 2
<a id="cryptographic-definitions-adversaries-ex-2"></a>
Why is Base64 not encryption?

<details><summary>Hint 1</summary>

Ask what secret key is used.

</details>
<details><summary>Hint 2</summary>

A public inverse lets every observer recover the encoding.

</details>
<details><summary>Solution</summary>

It has no secret key and anyone can invert it; it changes representation but supplies no adversarial secrecy game.

</details>

### Exercise 3
<a id="cryptographic-definitions-adversaries-ex-3"></a>
Why require equal challenge-message lengths?

<details><summary>Hint 1</summary>

The observer can see the ciphertext length.

</details>
<details><summary>Hint 2</summary>

The two candidates must have the same allowed exposed length.

</details>
<details><summary>Solution</summary>

Otherwise ciphertext length can reveal which message was encrypted even if the contents are ideally hidden.

</details>

### Exercise 4
<a id="cryptographic-definitions-adversaries-ex-4"></a>
What does negligible mean?

<details><summary>Hint 1</summary>

Read the quantifier over every positive polynomial.

</details>
<details><summary>Hint 2</summary>

A fixed decimal does not satisfy an eventual reciprocal comparison.

</details>
<details><summary>Solution</summary>

Smaller eventually than the reciprocal of every positive polynomial in the security parameter, not merely a fixed small decimal.

</details>

### Exercise 5
<a id="cryptographic-definitions-adversaries-ex-5"></a>
Why does deterministic encryption fail chosen-plaintext secrecy?

<details><summary>Hint 1</summary>

Request an encryption of one candidate before the challenge.

</details>
<details><summary>Hint 2</summary>

Determinism and correctness make equality a perfect comparison.

</details>
<details><summary>Solution</summary>

The adversary encrypts a candidate and compares it with the challenge; equality identifies the hidden message.

</details>

### Exercise 6
<a id="cryptographic-definitions-adversaries-ex-6"></a>
Prove one-time-pad correctness.

<details><summary>Hint 1</summary>

Apply the same mask twice.

</details>
<details><summary>Hint 2</summary>

Exclusive-or of a bit with itself is zero.

</details>
<details><summary>Solution</summary>

$(m \\oplus k) \\oplus k = m \\oplus (k \\oplus k)=m \\oplus 0=m$, coordinate by coordinate.

</details>

### Exercise 7
<a id="cryptographic-definitions-adversaries-ex-7"></a>
Why is a fresh uniform one-time pad perfectly secret?

<details><summary>Hint 1</summary>

Count compatible keys for a fixed message and ciphertext.

</details>
<details><summary>Hint 2</summary>

Uniform independent key generation makes those counts probabilities.

</details>
<details><summary>Solution</summary>

For any ciphertext and candidate plaintext exactly one equally likely key maps between them, so observing ciphertext does not update the plaintext distribution.

</details>

### Exercise 8
<a id="cryptographic-definitions-adversaries-ex-8"></a>
What leaks under pad reuse?

<details><summary>Hint 1</summary>

Exclusive-or the two ciphertexts.

</details>
<details><summary>Hint 2</summary>

Both occurrences of the reused mask cancel.

</details>
<details><summary>Solution</summary>

XORing ciphertexts cancels the pad and reveals the XOR of plaintexts, a relation often exploitable with message structure.

</details>

### Exercise 9
<a id="cryptographic-definitions-adversaries-ex-9"></a>
Why is an unkeyed checksum not a MAC?

<details><summary>Hint 1</summary>

The checksum algorithm is public.

</details>
<details><summary>Hint 2</summary>

An active attacker can recompute it on a replacement message.

</details>
<details><summary>Solution</summary>

An active attacker can alter the message and compute the matching checksum without a secret.

</details>

### Exercise 10
<a id="cryptographic-definitions-adversaries-ex-10"></a>
What is excluded from a standard EUF-CMA MAC forgery?

<details><summary>Hint 1</summary>

Inspect the freshness condition on the final message.

</details>
<details><summary>Hint 2</summary>

A different tag for an old message belongs to the stronger pair-freshness game.

</details>
<details><summary>Solution</summary>

Any message previously submitted to the tagging oracle, even if the final tag is new. Requiring a new valid pair for an old queried message as well is the stronger notion of strong unforgeability. Replaying an identical earlier pair tests a protocol's replay policy, not either creation claim.

</details>

### Exercise 11
<a id="cryptographic-definitions-adversaries-ex-11"></a>
How do hybrid losses combine?

<details><summary>Hint 1</summary>

Insert all intermediate success probabilities.

</details>
<details><summary>Hint 2</summary>

Repeated triangle inequality bounds the total absolute change.

</details>
<details><summary>Solution</summary>

The absolute difference between first and last games is at most the sum of adjacent differences by repeated triangle inequality.

</details>

### Exercise 12
<a id="cryptographic-definitions-adversaries-ex-12"></a>
What must a reduction simulate?

<details><summary>Hint 1</summary>

List all observations and oracle answers the adversary can obtain.

</details>
<details><summary>Hint 2</summary>

The simulator needs their joint distribution, not only their individual shapes.

</details>
<details><summary>Solution</summary>

The adversary's entire specified view, including oracle answers and distributions; a distinguishable simulation may invalidate the success transfer.

</details>

### Exercise 13
<a id="cryptographic-definitions-adversaries-ex-13"></a>
Does a reduction prove its hardness assumption?

<details><summary>Hint 1</summary>

Follow the theorem direction.

</details>
<details><summary>Hint 2</summary>

A conditional reduction does not prove its assumption.

</details>
<details><summary>Solution</summary>

No. It proves that breaking the scheme would contradict or solve the stated assumption within quantified resources.

</details>

### Exercise 14
<a id="cryptographic-definitions-adversaries-ex-14"></a>
What is a nonce obligation?

<details><summary>Hint 1</summary>

Read the precise primitive interface.

</details>
<details><summary>Hint 2</summary>

Uniqueness and unpredictability are different requirements.

</details>
<details><summary>Solution</summary>

Usually uniqueness for a key, sometimes unpredictability too. The exact primitive contract decides; “nonce” alone is insufficient.

</details>

### Exercise 15
<a id="cryptographic-definitions-adversaries-ex-15"></a>
Name a property omitted by a black-box secrecy game.

<details><summary>Hint 1</summary>

The game transcript may omit physical observations.

</details>
<details><summary>Hint 2</summary>

A separate model must state which extra information is exposed.

</details>
<details><summary>Solution</summary>

Timing resistance, cache leakage, random-number quality, key storage, or traffic-length hiding; each needs additional modelling and evidence.

</details>

### Exercise 16
<a id="cryptographic-definitions-adversaries-ex-16"></a>
Why can secure components compose insecurely?

<details><summary>Hint 1</summary>

Consider interactions through shared state and encodings.

</details>
<details><summary>Hint 2</summary>

Separate component theorems may not cover those interactions.

</details>
<details><summary>Solution</summary>

Shared keys, nonce collisions, ambiguous encodings, or cross-protocol acceptance can create interactions absent from each isolated game.

</details>


## Audit exercise: repair an overclaim

Replace “AES makes the application secure” by a scoped statement naming a standard platform construction, key source, nonce rule, authenticated data, attacker capabilities, failure handling, and excluded side channels. Then list evidence for functional tests, interoperability, parameter validation, and deployment review separately. The point is not to implement a cipher; it is to make every logical dependency of the security claim visible.

## Chapter summary

A security game fixes observations, admissible queries, a success event and an advantage convention. Negligibility and polynomial resources quantify its computational claim. Reductions must simulate the complete interface, while hybrid steps need an assumption, a distribution identity or a justified bad-event coupling. The next chapter uses these tools to prove a one-message encryption theorem from a generator assumption.

[Book overview](/books/library-book-cryptography/)
`;export{e as default};