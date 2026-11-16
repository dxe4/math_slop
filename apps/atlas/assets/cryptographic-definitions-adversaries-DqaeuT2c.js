var e=`---
parent_id: book-algorithms-computation-proof-desk
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

$\\lvert \\Pr[\\mathrm{guess}=b]-1/2\\rvert$.

Equal length prevents the ciphertext length from trivially revealing the bit. The game must specify encryption queries before and after the challenge, nonce rules, and whether repeated messages are allowed.

## 4. Why deterministic encryption leaks

Deterministic encryption of repeated plaintext under one key repeats ciphertext. An adversary with an encryption oracle can encrypt $m_0$ and compare it with the challenge, winning the basic chosen-plaintext game. Randomization or unique nonces prevent this equality test, but nonce management becomes part of correctness and security assumptions.

The one-time pad $c=m \\oplus k$ is perfectly secret when $k$ is uniform, as long as the message, and never reused. For any fixed ciphertext and candidate message there is exactly one compatible key, all equally likely. Reusing a pad gives $c_1 \\oplus c_2 = m_1 \\oplus m_2$, leaking a relation.

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

Likewise, constant-time source code, compiler behavior, hardware leakage, randomness quality, key storage, and protocol composition sit outside many mathematical games. A complete security envelope names them.

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

## Practice with fully explained solutions

1. **Separate correctness and secrecy.** Correctness says decryption recovers an honestly encrypted message. Secrecy says an adversary's observations reveal no more than the formal game permits; either property can hold without the other.
2. **Why is Base64 not encryption?** It has no secret key and anyone can invert it; it changes representation but supplies no adversarial secrecy game.
3. **Why require equal challenge-message lengths?** Otherwise ciphertext length can reveal which message was encrypted even if the contents are ideally hidden.
4. **What does negligible mean?** Smaller eventually than the reciprocal of every positive polynomial in the security parameter, not merely a fixed small decimal.
5. **Why does deterministic encryption fail chosen-plaintext secrecy?** The adversary encrypts a candidate and compares it with the challenge; equality identifies the hidden message.
6. **Prove one-time-pad correctness.** $(m \\oplus k) \\oplus k = m \\oplus (k \\oplus k)=m \\oplus 0=m$, coordinate by coordinate.
7. **Why is a fresh uniform one-time pad perfectly secret?** For any ciphertext and candidate plaintext exactly one equally likely key maps between them, so observing ciphertext does not update the plaintext distribution.
8. **What leaks under pad reuse?** XORing ciphertexts cancels the pad and reveals the XOR of plaintexts, a relation often exploitable with message structure.
9. **Why is an unkeyed checksum not a MAC?** An active attacker can alter the message and compute the matching checksum without a secret.
10. **What is excluded from a standard EUF-CMA MAC forgery?** Any message previously submitted to the tagging oracle, even if the final tag is new. Requiring a new valid pair for an old queried message as well is the stronger notion of strong unforgeability. Replaying an identical earlier pair tests a protocol's replay policy, not either creation claim.
11. **How do hybrid losses combine?** The absolute difference between first and last games is at most the sum of adjacent differences by repeated triangle inequality.
12. **What must a reduction simulate?** The adversary's entire specified view, including oracle answers and distributions; a distinguishable simulation may invalidate the success transfer.
13. **Does a reduction prove its hardness assumption?** No. It proves that breaking the scheme would contradict or solve the stated assumption within quantified resources.
14. **What is a nonce obligation?** Usually uniqueness for a key, sometimes unpredictability too. The exact primitive contract decides; “nonce” alone is insufficient.
15. **Name a property omitted by a black-box secrecy game.** Timing resistance, cache leakage, random-number quality, key storage, or traffic-length hiding; each needs additional modeling and evidence.
16. **Why can secure components compose insecurely?** Shared keys, nonce collisions, ambiguous encodings, or cross-protocol acceptance can create interactions absent from each isolated game.

## Audit exercise: repair an overclaim

Replace “AES makes the application secure” by a scoped statement naming a standard platform construction, key source, nonce rule, authenticated data, attacker capabilities, failure handling, and excluded side channels. Then list evidence for functional tests, interoperability, parameter validation, and deployment review separately. The point is not to implement a cipher; it is to make every logical dependency of the security claim visible.

[Previous chapter](#/item/book-algorithms-computation-proof-desk?chapter=information-compression-coding) · [Book overview](#/item/book-algorithms-computation-proof-desk)
`;export{e as default};