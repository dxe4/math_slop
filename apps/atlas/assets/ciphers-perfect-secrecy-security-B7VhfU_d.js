var e=`---
parent_id: book-cryptography
chapter_id: ciphers-perfect-secrecy-security
title: "Ciphers, Perfect Secrecy and What Secure Means"
level: advanced-undergraduate
license: CC BY-SA 4.0
---

# Ciphers, Perfect Secrecy and What Secure Means

Encryption changes what an observer can learn from a message. Its mathematical claim cannot be stated by saying that the output looks complicated. We must specify the possible messages, how a secret key is chosen, what the observer sees and which relation between those observations and the message is being asserted. Perfect secrecy is the strongest starting point: even an observer with unlimited computation learns nothing about the message from the ciphertext, under the stated probability model.

This chapter uses finite probability spaces, conditional probabilities and elementary counting. The book's prerequisite probability and discrete texts provide those tools. Every small cipher below is chosen so that its entire argument can be checked by hand. Correct recovery of a message is one property; resistance to an explicitly modelled adversary is another. The later computational chapters weaken unlimited-observer secrecy in order to use shorter keys and reusable schemes.

The companion [Information Theory](/books/library-book-information-theory/) develops entropy, conditional information, source coding and channels under explicit probability laws. Read its information-measure chapters for that broader language. The posterior criterion below is proved directly from finite probabilities, so the present security claim keeps its own assumptions and evidence visible.

## Syntax and correctness

A private-key encryption scheme has a key-generation distribution, an encryption algorithm and a decryption algorithm. Let the finite message, key and ciphertext spaces be $\\mathcal M,\\mathcal K,\\mathcal C$. Generate $K$ independently of the message $M$. Encryption produces $C=\\operatorname{Enc}_K(M;R)$, where $R$ records any fresh randomness. Decryption is a deterministic function returning a message or a designated failure result.

For the exact-correctness setting here, require
$$\\operatorname{Dec}_k(\\operatorname{Enc}_k(m;r))=m$$
for every supported key, legal message and supported encryption random choice. A scheme allowing failure needs a different, explicit correctness probability. The observer knows the scheme, spaces and probability distributions; the key is the secret. Concealing the algorithm's description is not an assumption of the model.

An encoding with public inverse can be correct without being secret. For example, sending the message unchanged with an extra public delimiter has perfect correctness and reveals its entire value. Conversely, a device returning an independent random ciphertext might hide the input while failing to let the intended receiver recover it. Neither fact is paradoxical: correctness relates encryption to decryption, while secrecy relates observations to messages.

## What the observer's posterior says

**Definition 1.1 (Perfect secrecy).** For every message distribution independent of the generated key, and every $m,c$ with $\\Pr[C=c]>0$,
$$\\Pr[M=m\\mid C=c]=\\Pr[M=m].$$
The ciphertext does not change the observer's message probabilities. The definition includes biased message sources; it does not assume that every possible message is equally likely. Events with zero ciphertext probability are excluded because their ordinary conditional probability is undefined.

**Theorem 1.2 (Equivalent ciphertext criterion).** Perfect secrecy is equivalent to requiring that, for every ciphertext $c$, the quantity $\\Pr[\\operatorname{Enc}_K(m;R)=c]$ be the same for all legal messages $m$.

*Proof.* Suppose the ciphertext criterion holds, and write its common value as $q_c$. Independence of key generation and message selection gives $\\Pr[C=c\\mid M=m]=q_c$ whenever the conditioned message has positive probability. Summing over the message distribution gives $\\Pr[C=c]=q_c$. Bayes' formula then yields the stated posterior equality whenever $q_c>0$; a zero-prior message also has zero posterior probability.

Conversely choose any two distinct messages and use the distribution assigning each probability one half. Perfect secrecy says the posterior stays one half after every positive-probability ciphertext. Bayes' formula forces their two ciphertext likelihoods to agree. If one likelihood were positive and the other zero, the posterior would instead be one; if both are zero they already agree. Since the message pair was arbitrary, the ciphertext criterion follows. A one-message space satisfies it trivially. ∎

This criterion is often easier to prove than calculating every posterior. It still quantifies over every legal message and ciphertext. Displaying several encrypted samples or a balanced-looking histogram is not the theorem: the proof must describe the full induced distribution.

## Worked example 1: the one-time pad

Let messages and keys be $\\ell$-bit strings. Choose a uniformly random key independently of the message and use bitwise exclusive-or:
$$c=m\\oplus k,\\qquad\\operatorname{Dec}_k(c)=c\\oplus k.$$
Correctness follows coordinatewise because applying the same bit flip twice restores the original bit. For a fixed message and fixed ciphertext, exactly one key works, namely $k=m\\oplus c$. Therefore each ciphertext has conditional probability $2^{-\\ell}$, independently of the message. The equivalent criterion proves perfect secrecy for every message distribution.

For $m=10110$ and $k=01101$, the ciphertext is $11011$. Exclusive-or with the same key returns $10110$. This one calculation illustrates correctness; the unique-key count proves secrecy. The count assumes all $2^\\ell$ keys are equally likely. Replacing the key generator by an unspecified short or biased source changes the probability argument.

## Worked example 2: a biased bit changes the posterior

Take one-bit messages with equal prior probabilities, and let the pad bit be zero with probability three quarters and one with probability one quarter. Encryption still uses exclusive-or and still decrypts correctly. But ciphertext zero has likelihood three quarters under message zero and one quarter under message one. Its total probability is one half. Bayes' formula gives posterior probability three quarters for message zero after observing ciphertext zero.

The posterior differs from its prior of one half, so perfect secrecy fails. The failure is mathematical even if a particular finite sample happens to contain equal numbers of key bits. The scheme's correctness equation did not change; the key distribution did. Thus a secrecy proof must retain the key-generation assumption rather than treating random-looking and uniform as interchangeable descriptions.

## Worked example 3: a one-letter shift and a two-letter leak

Represent letters by the residues modulo twenty-six. For one letter, choose a uniform shift $K$ and encrypt $C=M+K$ modulo twenty-six. For any candidate message and ciphertext there is exactly one compatible shift. This is the same unique-key argument as the one-time pad and gives perfect secrecy for a single letter.

Now encrypt two letters with the same shift. Subtracting their ciphertexts cancels the key:
$$C_2-C_1=M_2-M_1\\pmod{26}.$$
The plaintext pair $(0,0)$ always gives difference zero; $(0,1)$ always gives difference one. An observer distinguishing those two candidate messages can decide perfectly which was encrypted. Each coordinate separately has a uniform ciphertext distribution, yet their joint distribution leaks a relation. Perfect secrecy of individual observations does not automatically extend to their reuse under the same hidden key.

## Reusing an exclusive-or pad

For two messages encrypted with one pad, the same cancellation gives
$$C_1\\oplus C_2=M_1\\oplus M_2.$$
If the observer knows one plaintext, it can recover the pad on those positions and decrypt the other. Even without that knowledge, the exposed relation can exclude candidate pairs. The one-time theorem therefore has an essential one-use scope. It is not a claim that exclusive-or becomes unsafe as an operation; its hypothesis no longer describes the joint experiment.

A zero message makes the algebra particularly clear: its ciphertext equals the pad. In an experiment allowing an observer to request encryptions under the same key, encrypting zero before another message exposes that key immediately. The later chosen-plaintext game formalises this capability. A theorem for one hidden message does not establish security against a stronger oracle interface merely because the encryption equation is unchanged.

## Why perfect secrecy has a key-size cost

**Theorem 1.3 (Finite key-count bound).** In a perfectly correct, perfectly secret finite scheme with deterministic decryption, the number of supported keys is at least the number of legal messages.

*Proof.* Give every message positive prior probability and choose a ciphertext occurring with positive probability. By perfect secrecy every legal message remains possible after it is observed. For each message there is therefore at least one supported key, and possibly an encryption random choice, that can produce this same ciphertext. Correctness makes decryption at that key and ciphertext return that message. Two distinct messages cannot use the same key in this assignment, because decryption is a function. Thus the keys witnessing the messages are distinct, giving an injection from messages to supported keys. ∎

The theorem counts possible keys, not their entropy, and assumes exact correctness. Stronger entropy bounds require their own probability statements. For all bitstrings of one fixed length, the count already says that a perfectly secret exact scheme needs at least that many key possibilities. This motivates computational secrecy: a short seed can generate a long mask that efficient observers cannot distinguish from a fresh random one, if a suitable assumption holds. It cannot turn the short seed into information-theoretic perfect secrecy.

## Secrecy does not authenticate a message

An observer can flip one ciphertext bit of a one-time pad and thereby flip exactly the corresponding decrypted message bit. It need not know either original bit to cause this change. Perfect secrecy therefore coexists with complete malleability in this example. Authentication asks a different question: can an active adversary cause a new accepted message without knowing the secret authentication key?

Neither an unkeyed checksum nor an unkeyed hash automatically answers that question. An attacker allowed to change both message and public checksum can recompute the checksum itself. Chapter 6 defines a keyed forgery experiment. The current posterior definition describes an observer of ciphertext, not an active message-validity test. Giving each claim its own experiment prevents correct but irrelevant proofs from being substituted for the desired property.

## The best finite distinguishing test

For two finite ciphertext distributions $P_0,P_1$, define their total variation distance to be half the sum of the absolute differences of their probabilities. It equals the largest probability gap obtainable by accepting on an event. To see this, collect the ciphertexts at which $P_1(c)-P_0(c)$ is positive. The sum of these positive differences equals the absolute sum of the negative differences, since both distributions sum to one. The positive set attains their common value; no other event can exceed it by adding negative contributions or omitting positive ones.

Allowing a randomised test does not improve the maximum. If its acceptance probability at ciphertext $c$ is a number between zero and one, its total gap is the weighted sum of the same signed differences. The largest value selects weight one on positive differences and zero on negative ones. Thus an optimal unlimited finite test can be taken deterministic, without assuming an efficient way to compute the appropriate set.

For an equal-prior hidden message bit, the best guessing success is one half plus half this distance. At each ciphertext choose the candidate with the greater likelihood. Summing the two correct-guess contributions gives one half times the sum of the larger of the two probabilities at every ciphertext. That sum is one plus their total variation distance. The resulting expression proves the stated success formula and makes the factor of two between distribution gap and guessing advantage explicit.

Perfect secrecy makes the two ciphertext distributions identical for every candidate pair, so their distance is zero and even this best test does no better than one half. Conversely, any pair with nonzero distance admits an information-theoretic distinguisher. This is a finite-distribution characterisation, not yet an efficient attack against every compactly described scheme. The computational chapters preserve that distinction when a short key leaves a small but hard-to-recognise output set.

For the biased-bit pad, the two likelihood vectors are three quarters/one quarter and one quarter/three quarters. Their absolute differences sum to one, so the total variation distance is one half. The best guessing success is therefore three quarters, in agreement with the posterior calculations. For the reused two-letter shift candidates, the possible difference events are disjoint, the distance is one, and guessing succeeds with certainty. These computations connect the posterior, event and game views of the same finite probability model.

## Exercises

### Exercise 1
<a id="ciphers-perfect-secrecy-security-ex-1"></a>
Encrypt $100101$ using pad $011110$ and decrypt the result. Explain which part of the secrecy argument this calculation does not supply.

<details><summary>Hint 1</summary>

Exclusive-or each coordinate separately.

</details>
<details><summary>Hint 2</summary>

Repeat the operation with the same pad to recover the input.

</details>
<details><summary>Solution</summary>

The ciphertext is $111011$. Exclusive-or with $011110$ returns $100101$. This verifies one input's correctness algebraically. It does not establish the distribution of generated keys, their independence from messages, or the one-use hypothesis. Perfect secrecy follows from the unique compatible key count under those assumptions, not from this single successful round trip. The distinction remains even when every displayed bit calculation is correct.

</details>

### Exercise 2
<a id="ciphers-perfect-secrecy-security-ex-2"></a>
For a uniform one-bit pad and prior $\\Pr[M=1]=9/10$, compute the posterior after ciphertext zero.

<details><summary>Hint 1</summary>

Both conditional ciphertext probabilities are one half.

</details>
<details><summary>Hint 2</summary>

Bayes' numerator is the prior multiplied by that likelihood.

</details>
<details><summary>Solution</summary>

The total probability of ciphertext zero is one half. The joint probability of message one and ciphertext zero is $(9/10)(1/2)=9/20$. Dividing by one half gives posterior $9/10$, exactly the prior. The message is still more likely to be one; perfect secrecy does not make biased messages uniform. It says that this ciphertext observation gives no further update to the existing bias.

</details>

### Exercise 3
<a id="ciphers-perfect-secrecy-security-ex-3"></a>
With the biased pad of Worked Example 2, compute the posterior after ciphertext one and verify that secrecy fails there too.

<details><summary>Hint 1</summary>

Ciphertext one requires a zero key when the message is one.

</details>
<details><summary>Hint 2</summary>

The equal-prior experiment still gives total ciphertext probability one half.

</details>
<details><summary>Solution</summary>

The joint probability of message one and ciphertext one is $(1/2)(3/4)=3/8$. The other joint probability is $1/8$, giving total one half. Thus the posterior of message one is three quarters. It differs from the prior one half. The symmetric calculation shows that either observed ciphertext changes the observer's belief; correctness of exclusive-or decryption cannot repair a biased pad's secrecy distribution.

</details>

### Exercise 4
<a id="ciphers-perfect-secrecy-security-ex-4"></a>
Give two candidate two-letter messages that a reused shift cipher distinguishes perfectly, and describe the decision rule.

<details><summary>Hint 1</summary>

Use pairs with different coordinate differences.

</details>
<details><summary>Hint 2</summary>

The common shift cancels on subtraction.

</details>
<details><summary>Solution</summary>

Choose $(0,0)$ and $(0,1)$. Subtract the first ciphertext coordinate from the second modulo twenty-six. Difference zero identifies the first pair and difference one the second, for every key. Hence the adversary wins with probability one. The attack uses only a relation between coordinates, not knowledge of the shift. It refutes a two-letter secrecy claim while leaving the proved single-letter claim intact.

</details>

### Exercise 5
<a id="ciphers-perfect-secrecy-security-ex-5"></a>
Why are zero-probability ciphertext events excluded from the posterior definition? State the equivalent criterion that avoids division by their probabilities.

<details><summary>Hint 1</summary>

Ordinary finite conditional probability divides by the conditioning event's probability.

</details>
<details><summary>Hint 2</summary>

Compare ciphertext likelihoods under each legal message.

</details>
<details><summary>Solution</summary>

Conditioning on an event of probability zero would require division by zero and is undefined in the finite setting. The equivalent criterion requires that the likelihood of every ciphertext be identical under all message choices. An impossible ciphertext has likelihood zero for every message and satisfies that condition directly. The theorem then recovers posterior equality only when the observed event has positive probability, exactly where Bayes' formula applies.

</details>

### Exercise 6
<a id="ciphers-perfect-secrecy-security-ex-6"></a>
A scheme has ten supported keys and eleven legal messages. Under the exact assumptions of Theorem 1.3, can it be perfectly secret and correct? Explain the counting obstruction.

<details><summary>Hint 1</summary>

Fix one ciphertext with positive probability.

</details>
<details><summary>Hint 2</summary>

Distinct possible messages require distinct compatible decryption keys.

</details>
<details><summary>Solution</summary>

No. Perfect secrecy makes every legal message possible after the selected ciphertext. Correct deterministic decryption would need a distinct supported key for each of the eleven messages, but there are only ten. This violates the injection proved in the theorem. The conclusion depends on exact correctness and the specified finite spaces; changing those assumptions asks a different question rather than escaping the proved bound unchanged.

</details>

### Exercise 7
<a id="ciphers-perfect-secrecy-security-ex-7"></a>
Show how an active attacker can change the third plaintext bit under one-time-pad encryption without knowing the pad.

<details><summary>Hint 1</summary>

Flip that ciphertext coordinate only.

</details>
<details><summary>Hint 2</summary>

Exclusive-or decryption preserves the applied difference.

</details>
<details><summary>Solution</summary>

Let $e$ be the bitstring with a one only in the third coordinate and send $c'=c\\oplus e$. Decryption gives $c'\\oplus k=(m\\oplus k\\oplus e)\\oplus k=m\\oplus e$. Exactly the third message bit changes. This attack establishes malleability, not recovery of the secret plaintext. It is compatible with perfect secrecy and shows why authentication needs a separate property.

</details>

### Exercise 8
<a id="ciphers-perfect-secrecy-security-ex-8"></a>
If an attacker knows $m_1$ and observes two messages encrypted with one pad, derive $m_2$ explicitly.

<details><summary>Hint 1</summary>

The first known pair reveals the pad.

</details>
<details><summary>Hint 2</summary>

Cancel repeated exclusive-or terms.

</details>
<details><summary>Solution</summary>

From $c_1=m_1\\oplus k$, recover $k=c_1\\oplus m_1$. Then $m_2=c_2\\oplus k=c_2\\oplus c_1\\oplus m_1$. Each identity holds coordinatewise for the overlapping pad length. If messages have unequal lengths, the conclusion applies to the positions where the same pad bits were reused. The original perfect-secrecy theorem assumed one independent pad per message and therefore does not describe this joint experiment.

</details>

### Exercise 9
<a id="ciphers-perfect-secrecy-security-ex-9"></a>
Does perfect secrecy require equal prior message probabilities? Explain why a cipher can be secret even when an observer can guess a common message successfully before seeing anything.

<details><summary>Hint 1</summary>

The definition compares posterior and prior rather than posterior and uniform.

</details>
<details><summary>Hint 2</summary>

Existing information is not created by the ciphertext.

</details>
<details><summary>Solution</summary>

No. Perfect secrecy quantifies over message distributions and requires no update after observing ciphertext. If one message has probability ninety-nine percent, guessing it already succeeds at that rate. A perfectly secret cipher preserves that prior advantage rather than eliminating it. A security claim about additional information must therefore distinguish knowledge from the message source from information gained through the encrypted observation.

</details>

### Exercise 10
<a id="ciphers-perfect-secrecy-security-ex-10"></a>
Give one scheme with correctness but no secrecy and one observation showing why an unkeyed checksum cannot alone authenticate an adversarially modified message.

<details><summary>Hint 1</summary>

The identity map is reversibly correct.

</details>
<details><summary>Hint 2</summary>

An attacker can execute public checksum computation too.

</details>
<details><summary>Solution</summary>

Encryption and decryption both equal to the identity map recover every message and reveal it entirely. For an unkeyed checksum, the attacker replaces the message by a different one and computes its valid checksum using the public algorithm. A receiver checking only that public relation accepts the replacement. These examples show failure of two different adversarial properties; neither is repaired merely by proving a round-trip identity.

</details>

## Summary and sources

Perfect secrecy preserves every prior message distribution after a ciphertext observation. The one-time pad proves it through a unique-key count; biased keys and reuse invalidate specific hypotheses. Correctness, secrecy and authenticity concern different relations. The key-count theorem explains why computational assumptions are needed for shorter reusable secrets. The next chapter supplies the arithmetic used by later cryptographic constructions.

The comparison text is Katz and Lindell, *Introduction to Modern Cryptography*. Katz's [author-maintained course sequence](https://www.cs.umd.edu/~jkatz/gradcrypto/s11/lectures.html) identifies the perfect-secrecy and pseudo-one-time-pad material. Bellare and Rogaway's [author-written cryptography notes](https://www.cs.ucdavis.edu/~rogaway/classes/227/spring05/book/main.pdf) provide an additional proof-oriented reference. The exposition, examples and exercises here are newly written.
`;export{e as default};