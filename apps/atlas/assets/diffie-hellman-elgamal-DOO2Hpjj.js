var e=`---
parent_id: book-cryptography
chapter_id: diffie-hellman-elgamal
title: "Diffie–Hellman and ElGamal"
level: advanced-undergraduate
license: CC BY-SA 4.0
---

# Diffie–Hellman and ElGamal

Public-key cryptography changes who can perform encryption. A public key lets anyone form a ciphertext, while a related secret key enables decryption. The challenge is therefore not to conceal the encryption rule but to prove what an efficient observer can infer from its outputs. Group exponentiation supplies a basic example: Diffie–Hellman gives matching algebraic secrets, and ElGamal turns a decisional group assumption into an encryption theorem.

Fix an efficiently represented cyclic group $G=\\langle g\\rangle$ of prime order $q$. Group multiplication, inversion and equality are available efficiently, and encodings identify valid elements. Exponents are residues modulo $q$. For parameterised security claims, a generated family supplies these objects with their distributions; a single small group is only a worked arithmetic instance. Uniform exponents in this chapter range over all of $\\mathbb Z/q\\mathbb Z$, including zero.

## The shared-value calculation

Alice chooses exponent $a$ and sends $X=g^a$. Bob chooses $b$ and sends $Y=g^b$. Alice computes $Y^a$ and Bob computes $X^b$. Both equal $g^{ab}$ by the exponent laws. This is a correctness identity for group elements. It does not identify the person who sent either value and does not yet say that the shared value is pseudorandom to an observer.

The **computational Diffie–Hellman assumption** concerns finding $g^{ab}$ from a generated group and $g,g^a,g^b$, for independently uniform $a,b$. The **decisional Diffie–Hellman assumption** concerns distinguishing $(g^a,g^b,g^{ab})$ from $(g^a,g^b,g^z)$ for independent uniform $a,b,z$. Both include the group description and use a stated efficient adversary class. The latter is the assumption used in the ElGamal secrecy proof below.

A discrete-log algorithm would solve the computational problem by recovering $a$ from $g^a$ and then exponentiating $g^b$ by it. That reduction proves that computational Diffie–Hellman hardness implies discrete-log hardness in the same family. It does not prove the reverse implication. Likewise, inability to recover a shared value is not automatically a proof that it is indistinguishable from a uniform group element. State the exact assumption rather than using hard exponentiation as one undifferentiated phrase.

## Worked example 1: a shared value in a small subgroup

Modulo twenty-three, the element two has order eleven: $2^{11}=2048\\equiv1$, two is not one, and eleven is prime. Let $G$ be that order-eleven subgroup. Choose $a=3$ and $b=4$. The public values are $X=8$ and $Y=16$. Alice computes $16^3\\equiv2$, while Bob computes $8^4\\equiv2$. Thus they obtain the same group element.

These are explicit small exponents and can be recovered by enumeration. The example proves the displayed equality without supplying evidence of computational hardness. The subgroup's prime order also matters: later security experiments are stated on this group, not on arbitrary residues modulo twenty-three. A received zero residue would not belong to the multiplicative group at all.

## ElGamal syntax and correctness

Generate a secret $x$ uniformly modulo $q$ and public key $y=g^x$. Messages are elements $M$ of $G$. Encrypt using an independent uniform exponent $r$:
$$\\operatorname{Enc}_y(M;r)=(u,v)=(g^r,M y^r).$$
Decrypt a valid pair by
$$\\operatorname{Dec}_x(u,v)=v(u^x)^{-1}.$$
Since $u^x=g^{rx}=y^r$, cancellation in the group returns $M$. Inversion is legal for every group element, including the identity. The arithmetic formula therefore handles all the stated exponents without silently dividing by a nonunit in a larger residue ring.

The legal message space is the group. To encrypt arbitrary byte strings one needs an explicit encoding or a hybrid construction, with its own correctness and security analysis. It is not correct to replace $M$ by any arbitrary integer while retaining a theorem whose uniform-mask step used multiplication as a bijection on $G$. A message encoding must preserve the object to which the proof applies.

## Worked example 2: one ElGamal ciphertext

In the same order-eleven group, choose secret $x=3$, public $y=8$, message $M=4$ and random exponent $r=4$. Then $u=16$ and $y^r=8^4\\equiv2$, so $v=8$. The ciphertext is $(16,8)$. Decryption computes $u^x=16^3\\equiv2$ and uses $2^{-1}\\equiv12\\pmod{23}$, giving $8\\cdot12\\equiv4$.

This shows the public encryption and secret decryption calculations separately. The encryption exponent is written out to make the example checkable; it is not a hidden practical parameter. Reusing this exponent under the same public key repeats the same group mask. The later reuse calculation explains the resulting relation between two plaintexts independently of how hard a discrete-log instance might otherwise be.

## The complete DDH secrecy reduction

The public-key chosen-plaintext experiment gives the adversary the public key and lets it select two legal message elements. It receives one encryption of the hidden-bit-selected message and guesses the bit. A separate encryption oracle adds no power because encryption is public and its randomness can be sampled by the adversary itself. There is no secret-key decryption oracle in this experiment.

**Theorem 7.1 (ElGamal IND-CPA under DDH).** For every efficient adversary in this experiment, its absolute guessing advantage is at most the DDH probability-gap advantage of an efficient distinguisher, with the explicit simulation below.

*Proof.* Receive a DDH challenge consisting of the group, generator and elements $(A,B,T)$, either $(g^x,g^r,g^{xr})$ or $(g^x,g^r,g^z)$ with the independent uniform exponents stated above. Give $A$ as the public key to the encryption adversary. Receive its two legal messages, sample an independent uniform bit $b$, and return ciphertext $(B,M_bT)$. Output one exactly when its final guess equals $b$.

In the real DDH case this is exactly a generated ElGamal public key and encryption with independent uniform randomness. In the random case, conditional on the public key, first ciphertext element, message choices and earlier adversary coins, $T$ remains a uniform independent group element. Multiplication by either fixed $M_b$ is a permutation of $G$. Hence the second ciphertext element is uniform with a distribution independent of $b$. The adversary's ideal success is exactly one half.

The distinguisher's probability gap is therefore the encryption adversary's absolute guessing advantage. It performs one execution of that adversary and one group multiplication for the challenge. Any requested public encryptions can be simulated directly with fresh local exponents at polynomial cost. No secret exponent is recovered or presumed available. ∎

This proof uses the **decisional** assumption exactly where the real shared mask is replaced by a uniform one. Replacing that premise by computational Diffie–Hellman hardness without another argument leaves a gap. A proof can also choose a different exponent-generation convention, such as excluding zero, but it must then adjust the tuple distributions and theorem correspondingly.

## Active exchanges need an authentication statement

The shared-value identity does not authenticate the peer. An intermediary can replace Alice's $g^a$ with its own $g^s$ on the way to Bob, and replace Bob's $g^b$ with $g^t$ on the way to Alice. Alice's resulting value is $(g^t)^a=(g^a)^t$, which the intermediary computes from Alice's public value and its chosen exponent. Bob's is similarly $(g^b)^s$, also known to the intermediary.

This attack does not solve a computational Diffie–Hellman challenge with two unknown exponents. It changes the exchange by inserting known exponents. Thus a passive-observer assumption does not establish an active peer-identity claim. A protocol adding signatures, authenticated keys or another authentication mechanism must state that mechanism and its adversarial model. The algebra remains correct, but the parties are not necessarily sharing with the person they intended.

## Worked example 3: two known intermediary keys

Keep Alice's public value eight and Bob's sixteen from the small example. An intermediary sends exponent-one value two to Bob and exponent-two value four to Alice. Alice derives $4^3\\equiv18$, which the intermediary also obtains as $8^2$. Bob derives $2^4=16$, which the intermediary knows directly as Bob's public value to the first power.

The two derived values are different, and both are known to the intermediary. No discrete logarithm of an unknown public value was needed. The example distinguishes a correct local exponent calculation from authentication of the remote party. A security claim about an exchange transcript must include which public values are authenticated rather than assuming that matching mathematical formulas identify their senders.

## Reuse and malleability

For two ElGamal encryptions using the same $r$ and public key, the first components agree and the second components satisfy $v_1v_2^{-1}=M_1M_2^{-1}$. Knowledge of one message recovers the other from that relation. Uniform randomness in the theorem describes an experiment where repeats can occur with their actual probability; it does not make a repeated exponent harmless. Concrete analyses must retain such events rather than replacing random with guaranteed unique by wording alone.

Raw ElGamal is also malleable. Replacing $(u,v)$ by $(u,hv)$ decrypts to $hM$ for any chosen group element $h$. This does not recover $M$, and it does not refute the chosen-plaintext theorem. It shows that the theorem does not provide ciphertext integrity or chosen-ciphertext security. Decryption-oracle interfaces and authenticated encryption need additional constructions and proofs.

## Several public encryptions under one key

The basic reduction can be extended to a left-or-right interface with a polynomially bounded number of adaptive encryption requests under the same public key. One hidden bit chooses the candidate at every request. Define a hybrid that replaces the first $j$ shared masks by independent uniform group elements, leaving the remaining encryptions real. The first hybrid is the real experiment; the final hybrid reveals no hidden-bit information by induction on the transcript.

For the transition at request $j$, use a DDH tuple's public element as the common public key. Answer earlier replaced requests with independently chosen uniform masks and fresh first components. At the chosen request, use the tuple's ephemeral public element and candidate mask. Answer later requests by honest public encryption, which the simulator can perform using the public key without the secret exponent. The challenge's hidden ephemeral element is not shown before that request, so earlier message choices retain the intended distribution.

The real tuple yields the preceding hybrid and the random tuple the next one. The triangle inequality bounds the total guessing-success change by the sum of the associated DDH gaps. A common negligible bound times the polynomial request count remains negligible; the uniform padded-index reduction from the generator chapter can alternatively combine the transitions into one efficient distinguisher. This accounts for a full interaction rather than silently treating repeated observations as independent ciphertexts.

Notice that the honest encryptions still sample exponents independently, not by an unmentioned uniqueness rule. Rare repeats remain events in their real distribution. If repeated ephemeral values give an observer a useful relation, that event also appears in the reduction's simulated view and contributes to its advantage. A concrete bound or assumed family must therefore accommodate it. Replacing independence by a fixed repeated exponent would no longer describe those hybrids.

This extension illustrates the difference between reusing a long-term public key and reusing an ephemeral mask. The former can be supported by a reduction with many public encryption calls; the latter creates the explicit algebraic leak. Calling both operations key reuse without identifying which secret or random variable is shared would conceal the actual theorem hypothesis.

## Exercises

### Exercise 1
<a id="diffie-hellman-elgamal-ex-1"></a>
Verify that two has order eleven modulo twenty-three using primality of eleven. Why is checking only $2^{11}=1$ insufficient without the nonidentity check?

<details><summary>Hint 1</summary>

The order divides eleven.

</details>
<details><summary>Hint 2</summary>

Its only positive divisors are one and eleven.

</details>
<details><summary>Solution</summary>

The computed power makes the order divide eleven. Since two is not the identity residue one, its order is not one, so it is eleven. The identity itself also has eleventh power one, so the power equation alone would not distinguish the two possibilities. The prime-order argument avoids enumerating every subgroup element but still uses the actual group and order hypotheses.

</details>

### Exercise 2
<a id="diffie-hellman-elgamal-ex-2"></a>
Derive ElGamal decryption correctness for the full stated domain, including exponent zero.

<details><summary>Hint 1</summary>

The two masks are equal by exponent multiplication.

</details>
<details><summary>Hint 2</summary>

Every element of a group has an inverse, including its identity.

</details>
<details><summary>Solution</summary>

For any secret and encryption exponents, $u^x=(g^r)^x=g^{rx}=(g^x)^r=y^r$. Thus $v(u^x)^{-1}=M y^r(y^r)^{-1}=M$. If either exponent is zero the relevant mask is the identity and the same equation holds. The theorem is an algebraic correctness statement on valid group elements; it does not claim strong secrecy for a single deliberately fixed weak key outside the key-generation distribution.

</details>

### Exercise 3
<a id="diffie-hellman-elgamal-ex-3"></a>
Why is the ideal challenge's second component independent of the hidden message in the DDH reduction?

<details><summary>Hint 1</summary>

Condition on the public values and chosen messages first.

</details>
<details><summary>Hint 2</summary>

Multiplication by a fixed group element is a bijection.

</details>
<details><summary>Solution</summary>

In the random tuple, the mask is an independent uniform group element after conditioning on those quantities. For either fixed candidate message, multiplication permutes the group and preserves the uniform distribution. Therefore the returned second component has the same conditional distribution for either hidden bit. The argument uses valid group messages and the exact independence of the random tuple; arbitrary residues or a correlated mask would require a different proof.

</details>

### Exercise 4
<a id="diffie-hellman-elgamal-ex-4"></a>
Construct a computational Diffie–Hellman solver from a discrete-log solver and state the justified hardness implication.

<details><summary>Hint 1</summary>

Recover one of the two unknown exponents.

</details>
<details><summary>Hint 2</summary>

Exponentiate the other public value by it.

</details>
<details><summary>Solution</summary>

Given $g^a,g^b$, use the discrete-log solver to obtain an exponent $a$ modulo the group order, then compute $(g^b)^a$. This returns the computational Diffie–Hellman target with the solver's success probability and an additional exponentiation cost. Hence hardness of computational Diffie–Hellman implies discrete-log hardness in the same generated family. The reduction does not prove that discrete-log hardness alone makes computational Diffie–Hellman hard.

</details>

### Exercise 5
<a id="diffie-hellman-elgamal-ex-5"></a>
If a public encryption oracle is offered in the public-key chosen-plaintext game, explain how the reduction answers it without the secret key.

<details><summary>Hint 1</summary>

Encryption uses the public group element and fresh randomness.

</details>
<details><summary>Hint 2</summary>

No decryption operation is required.

</details>
<details><summary>Solution</summary>

For a legal query message, sample a new exponent and compute the two encryption components using the supplied public key. This has exactly the honest encryption distribution because the algorithm is public. The reduction needs no discrete logarithm or secret key. A secret-key decryption oracle would be different: the DDH challenge simulation does not supply the key required to answer arbitrary such queries, so the proof does not cover that stronger interface.

</details>

### Exercise 6
<a id="diffie-hellman-elgamal-ex-6"></a>
Derive the plaintext relation exposed by repeated ElGamal randomness, and show how a known first message determines the second.

<details><summary>Hint 1</summary>

Divide the two masked second components in the group.

</details>
<details><summary>Hint 2</summary>

Solve the resulting equation for the unknown message.

</details>
<details><summary>Solution</summary>

The ratio is $v_1v_2^{-1}=M_1M_2^{-1}$ because the same mask cancels. With known $M_1$, recover $M_2=v_2v_1^{-1}M_1$ in this cyclic, hence abelian, group. All terms are valid group elements so inversion is defined. The repeated first ciphertext component reveals that the same exponent residue was used. No algorithm for general discrete logarithms is needed for this conditional reuse attack.

</details>

### Exercise 7
<a id="diffie-hellman-elgamal-ex-7"></a>
Explain why the intermediary attack does not contradict the passive computational Diffie–Hellman assumption.

<details><summary>Hint 1</summary>

The inserted values have exponents selected by the intermediary.

</details>
<details><summary>Hint 2</summary>

The passive target has two unknown independently generated exponents.

</details>
<details><summary>Solution</summary>

The intermediary computes a power of each intercepted public value using its own known exponent. It never computes the product of the two honest unknown exponents. The attack changes what each party receives and therefore lies outside a passive transcript-only model. Authentication is the missing protocol property. The group correctness identity still holds for each altered exchange, which is precisely why correctness alone cannot identify the peer.

</details>

### Exercise 8
<a id="diffie-hellman-elgamal-ex-8"></a>
Show that multiplying the second component of a ciphertext by $h$ multiplies the decrypted message by $h$. Which security notion is absent from the proved theorem?

<details><summary>Hint 1</summary>

Keep the first component unchanged.

</details>
<details><summary>Hint 2</summary>

The original mask still cancels.

</details>
<details><summary>Solution</summary>

The modified decryption is $(hv)(u^x)^{-1}=hM$. The attacker controls that multiplicative change while learning no plaintext from this equation. This demonstrates raw ElGamal's malleability and absence of a ciphertext-integrity guarantee. The theorem proved only chosen-plaintext indistinguishability, with no decryption oracle or modification-rejection event. An attack on an unclaimed stronger property is not a contradiction of that theorem.

</details>

### Exercise 9
<a id="diffie-hellman-elgamal-ex-9"></a>
Why must a ciphertext-domain check distinguish the selected subgroup from arbitrary encodings of residues?

<details><summary>Hint 1</summary>

The proof's inversion and uniformity statements concern one group.

</details>
<details><summary>Hint 2</summary>

The zero residue is not a multiplicative group element.

</details>
<details><summary>Solution</summary>

The scheme's syntax and proof use the chosen prime-order group and its encoding. Arbitrary residues can be outside that subgroup, and zero has no multiplicative inverse. Applying the formula outside the legal domain therefore lacks both the algebraic and probability arguments stated in the theorem. A larger implementation interface must specify how invalid encodings are rejected or otherwise handled; it cannot silently attach the subgroup theorem to every received bitstring.

</details>

### Exercise 10
<a id="diffie-hellman-elgamal-ex-10"></a>
Does the DDH reduction prove the assumption true, or give a concrete attacker against the small example? Explain its actual conclusion.

<details><summary>Hint 1</summary>

Read the direction of the constructed wrapper.

</details>
<details><summary>Hint 2</summary>

The small arithmetic and asymptotic family have different roles.

</details>
<details><summary>Solution</summary>

It proves a conditional implication: an efficient encryption adversary with a stated guessing advantage yields a DDH distinguisher with the same probability gap and accounted simulation cost. It does not establish DDH hardness. The small group is independently enumerable and supplies correctness examples, not the presumed hard family. The theorem's useful content is the exact transfer between two specified experiments, retaining the hypothesis it needs.

</details>

## Summary and provenance

Diffie–Hellman has a shared-value identity, while its computational and decisional assumptions describe different adversarial tasks. ElGamal's correctness follows by group cancellation and its chosen-plaintext theorem by an explicit DDH simulation. Active exchanges, reused randomness, malformed elements and ciphertext integrity require their own interfaces and hypotheses. The next chapter studies RSA arithmetic and the exact relationship between factoring and inversion.

This is new exposition seeded by the retained finite-algebra cryptography source's Diffie–Hellman and assumption distinctions. The comparison text is Katz and Lindell, *Introduction to Modern Cryptography*. Original group examples, hypotheses and solutions remain in their source book; this chapter supplies new exercises and a complete security reduction.
`;export{e as default};