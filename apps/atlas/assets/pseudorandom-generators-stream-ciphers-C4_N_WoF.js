var e=`---
parent_id: book-cryptography
chapter_id: pseudorandom-generators-stream-ciphers
title: "Pseudorandom Generators and Stream Ciphers"
level: advanced-undergraduate
license: CC BY-SA 4.0
---

# Pseudorandom Generators and Stream Ciphers

A one-time pad needs as much independent key material as its message length. A pseudorandom generator offers a computational alternative: expand a short uniformly chosen seed into a longer deterministic string, with a stated assumption that efficient observers cannot distinguish that output from uniform. Its output is not genuinely uniform on the larger space. The mathematical claim concerns a restricted class of distinguishers and a parameterised family of distributions.

This chapter proves a one-message encryption theorem and a hybrid theorem for a particular iterated generator. It does not claim that a deterministic expanded pad can be reused as an encryption oracle. Repetition, state exposure and stream position change the observer's interface and require their own security statement. The next chapter develops a reusable construction based on pseudorandom functions and distinct counter inputs.

## Definition and its quantifiers

**Definition 4.1 (Pseudorandom generator).** Let $G$ be a deterministic polynomial-time algorithm taking an $n$-bit seed to $\\ell(n)>n$ bits, with polynomially bounded output length. It is a PRG if for every probabilistic polynomial-time distinguisher $D$, the probability gap
$$\\left|\\Pr[D(G(U_n))=1]-\\Pr[D(U_{\\ell(n)})=1]\\right|$$
is negligible in $n$. Here each $U_j$ denotes a fresh independent uniform $j$-bit string in its experiment.

The probability includes the seed or comparison string and the distinguisher's random coins. The definition is not a statistical requirement over a finite list of named tests. Nor does it allow replacing the uniform seed by a fixed publicly known one: that changes the input distribution. A deterministic generator has no secret randomness beyond its seed, so seed generation belongs to the theorem's hypothesis.

Existence of such a generator is a computational assumption in this chapter. The theorem below shows what follows from that assumption; it does not prove that a named practical generator satisfies it. Conversely, an easily distinguished toy map can teach exactly which correlations the definition excludes without serving as evidence for a secure construction.

## Worked example 1: two uniform halves can be correlated

Take $G(s)=s\\Vert s$ for $n$-bit seeds. Either output half separately is uniform. But a distinguisher accepting exactly when the halves agree accepts generator outputs with probability one and uniform $2n$-bit strings with probability $2^{-n}$. Its gap is $1-2^{-n}$, so the map is not a PRG.

The test compares the joint output, not one coordinate at a time. This explains why balanced bit frequencies do not establish computational pseudorandomness. The attack runs in linear time and uses no search for the seed. A claim that every displayed output has plausible-looking zeros and ones would be irrelevant to this distinguisher's success event.

## Statistical distance remains large

The image of any deterministic $n$-bit-seed generator contains at most $2^n$ strings. An unlimited observer can enumerate the image and accept exactly those strings. It accepts a real generator output with probability one and an independent uniform output with probability at most $2^{n-\\ell(n)}$. Thus the distributions can be information-theoretically far apart even when the PRG assumption holds against efficient distinguishers.

This is not a contradiction. Enumerating all seeds need not take polynomial time. The existence of a small image proves an unbounded distinguisher; it does not supply an efficient one for an arbitrary generator. A proposed security proof must therefore say whether it bounds all statistical tests or only an explicitly efficient adversary class. Chapter 1's perfect-secrecy key-count obstruction is not removed; the security objective has changed.

## One-message encryption from a generator

Generate a uniform seed $K\\in\\{0,1\\}^n$. For one message $m$ of length $\\ell(n)$, set $c=m\\oplus G(K)$ and decrypt by the same exclusive-or. Correctness is the pad cancellation identity, regardless of whether $G$ is pseudorandom. Security is conditional on its PRG property and on a one-message experiment without a reused-key encryption oracle.

**Theorem 4.2 (Pseudo-one-time pad).** For every efficient adversary in the equal-length, one-challenge hidden-bit experiment, its absolute guessing advantage is at most the PRG probability-gap advantage of an efficient distinguisher with essentially the same running time plus message-length processing.

*Proof.* Construct $D$ receiving a string $w$ of length $\\ell(n)$ from its own challenge. Run the encryption adversary to choose its equal-length message pair, keeping $w$ hidden from it. Sample an independent uniform bit $b$, return $m_b\\oplus w$, receive its guess $b'$, and output one exactly when $b'=b$.

If $w=G(U_n)$, this is exactly the real encryption experiment, including the message choice's independence from the hidden mask. If $w$ is uniform, the one-time-pad theorem makes the ciphertext independent of $b$, conditional on the chosen messages and the adversary's earlier coins. Its guessing success is exactly one half. Therefore $D$'s absolute probability gap equals the adversary's absolute guessing advantage. The simulator performs one execution of the adversary and one string exclusive-or, so its overhead is polynomial and explicitly linear in the challenge length for that operation. ∎

The reduction does not need to recover the generator seed. It uses the supplied string as the entire mask. Nor does it answer additional encryption queries: its specified one-message game has none. Adding those queries without changing the construction invalidates the simulation and enables the simple equality or known-plaintext attacks already discussed.

## Worked example 2: a parity leak from a short image

Consider a two-bit seed map with outputs $000,011,101,110$, one output for each seed. Every output bit is balanced across the four seeds, but every output has even parity. Encrypting $m_0=000$ therefore yields even parity, while encrypting $m_1=001$ yields odd parity. Checking ciphertext parity guesses the hidden message perfectly.

This is an explicit efficient distinguisher, not merely an unbounded image test. The example fails the PRG assumption, so it does not contradict Theorem 4.2. It demonstrates why a proof needs that assumption rather than the bare fact of deterministic seed expansion. It also shows how an algebraic relation in the mask translates directly into a relation in ciphertexts.

## Stretching a length-doubling generator

Assume now $G$ maps $n$ bits to $2n$ bits, written $G(s)=L(s)\\Vert R(s)$. Start at a uniform secret seed $s_0$. For each step set $s_{i+1}=L(s_i)$ and output block $R(s_i)$. For a polynomially bounded number $t(n)\\ge2$ of blocks, concatenate those blocks into $H_t(s_0)$.

**Theorem 4.3 (Iterated expansion).** If every relevant single-generator distinguisher has gap at most a common bound $\\epsilon(n)$, every efficient distinguisher of the $t$-block output has gap at most $t(n)\\epsilon(n)$, with polynomial simulation overhead. In particular a PRG remains pseudorandom under this polynomial iteration.

*Proof.* Form hybrids replacing the first $j$ generator transitions by independent uniform pairs, for $j=0,\\ldots,t$. In the last hybrid all output blocks are independent uniform strings. At the step comparing hybrids $j-1$ and $j$, the current state is uniform and independent of the already replaced prefix. A single-generator challenge supplies the pair consisting of the next state and current output block. Simulate the earlier replaced output blocks independently, insert the challenge's right half, and generate all later blocks by iterating $G$ from its left half. There is no need to reveal the current input state to the output distinguisher.

A real generator challenge gives exactly hybrid $j-1$; a uniform pair gives exactly hybrid $j$. Thus an adjacent gap yields a single-generator distinguisher with that gap. The repeated triangle inequality bounds the first-to-last difference by $t\\epsilon$. Each simulator constructs at most $t$ blocks, so polynomial $t$ preserves efficiency. If the PRG assumption gives negligible loss for every efficient simulator, the usual hybrid reduction, choosing an index uniformly and combining signed gaps, also gives a negligible total against any efficient final distinguisher. ∎

The final sentence avoids assuming a universal numerical bound over all adversaries from the qualitative PRG definition. For a concrete family of at most polynomially many simulators, a common bound suffices; alternatively the uniform-index reduction transfers a nonnegligible total gap to one efficient PRG distinguisher with a factor-$t$ loss. Index selection and simulation must themselves be efficient.

## Worked example 3: the hybrid at the second transition

For three output blocks, compare the hybrid with the first transition random to the hybrid with the first two random. The first output block can be sampled uniformly. The second transition's challenge pair supplies a next state and the second output block. Generate the third block by applying $G$ to that next state and taking its right half. If the challenge pair is real, its hidden input was an independent uniform state, exactly as the random first transition left it. If the pair is uniform, both first transitions have been replaced.

This explicit simulation explains the otherwise terse phrase replace the second block by random. Replacing only that output block while leaving a correlated next state untouched would not match either hybrid. A hybrid proof pays attention to the joint state/output pair, even though the distinguisher sees only output blocks.

## Reuse and state exposure

Encrypting multiple messages with the same full expanded pad leaks their exclusive-or exactly as with the one-time pad. A chosen-plaintext query of zero exposes the whole mask. Pseudorandomness does not repair repeated use: the algebraic cancellation occurs for any deterministic mask distribution.

An iterated stream also needs a declared state and position interface. Revealing the current seed makes future blocks computable by the public transition rule. The output-only theorem does not cover that stronger observation. Resetting the generator to an earlier seed can repeat a block and recreate pad reuse. A security claim about fresh sessions, compromise or resynchronisation must state those events instead of treating them as invisible implementation details.

## One uniform reduction for a polynomial hybrid chain

The qualitative PRG assumption quantifies over efficient algorithms. It does not hand us an adversary-independent numerical error bound for every hypothetical transition. A single combined reduction can handle the whole chain. Let the final distinguisher's acceptance probabilities in the hybrids be $p_0,\\ldots,p_t$. Choose an index and simulate the corresponding adjacent pair with one generator challenge, returning the final distinguisher's output unchanged. The signed gaps telescope, so averaging them yields the total signed difference divided by the number of sampled positions.

To sample an index with an exact fixed number of fair bits, pad the chain to a power of two $T$ with $t\\le T<2t$, repeating its final hybrid after position $t$. Pick one of the $T$ positions uniformly using its binary index. At a genuine transition use the next-state/output simulator from the theorem. At a padded position ignore the challenge and sample the same final uniform-output experiment on either side. The latter positions contribute zero gap.

The combined reduction's signed gap is exactly $(p_0-p_t)/T$, hence its absolute gap is the total distinguishing advantage divided by $T$. Its algorithm is uniform in the parameter and performs at most polynomially many generator evaluations. A nonnegligible final advantage would therefore contradict the PRG assumption through one efficient reduction with a loss smaller than twice the number of genuine transitions. The concrete common-bound estimate remains $t\\epsilon$; the padding accounts for exact random-index sampling in this qualitative argument.

This explicit construction avoids an illicit choice of a different specially helpful algorithm for each security parameter. It also shows why signs must be retained when applying the telescoping identity. Summing absolute gaps gives a safe upper bound, but choosing an index uniformly transfers the signed total. The final absolute value supplies the distinguishing advantage after that equality has been established, without guessing the sign or selecting an uncomputable best transition.

## Exercises

### Exercise 1
<a id="pseudorandom-generators-stream-ciphers-ex-1"></a>
Give the efficient distinguisher for $G(s)=s\\Vert s$ and calculate its probability-gap advantage.

<details><summary>Hint 1</summary>

Compare the two halves.

</details>
<details><summary>Hint 2</summary>

An independent uniform second half matches the first with probability $2^{-n}$.

</details>
<details><summary>Solution</summary>

Accept exactly when the halves are equal. This always happens for generator outputs. For a uniform string, fixing its first half leaves only one matching second half among $2^n$ possibilities, so acceptance probability is $2^{-n}$. The gap is $1-2^{-n}$, which is not negligible. The test is linear in the output length, so it directly violates computational pseudorandomness rather than relying on exhaustive seed enumeration.

</details>

### Exercise 2
<a id="pseudorandom-generators-stream-ciphers-ex-2"></a>
Why does the image-size test not automatically refute a PRG assumption? State its success gap and its resource issue.

<details><summary>Hint 1</summary>

There are at most $2^n$ possible outputs.

</details>
<details><summary>Hint 2</summary>

Constructing that set may require exponentially many seed evaluations.

</details>
<details><summary>Solution</summary>

Membership in the image accepts real outputs with probability one and uniform outputs with probability at most $2^{n-\\ell(n)}$, giving gap at least $1-2^{n-\\ell(n)}$. But enumerating the image by all seeds can require $2^n$ generator evaluations and large storage. The PRG definition excludes only efficient distinguishers. The argument establishes statistical distance without giving a polynomial-time membership method for every generator.

</details>

### Exercise 3
<a id="pseudorandom-generators-stream-ciphers-ex-3"></a>
For the even-parity toy generator, give an attack distinguishing encryption of $000$ and $001$.

<details><summary>Hint 1</summary>

Exclusive-or adds bit parity modulo two.

</details>
<details><summary>Hint 2</summary>

Every mask has parity zero.

</details>
<details><summary>Solution</summary>

Compute the parity of the ciphertext. It equals plaintext parity because the mask's parity is zero. The candidate $000$ has parity zero and $001$ parity one, so the observed parity identifies the hidden choice with certainty. All single-bit marginals of the mask may be balanced; the leak is a joint relation. This is why a generator's assumed indistinguishability must cover full output tests rather than only bit-frequency checks.

</details>

### Exercise 4
<a id="pseudorandom-generators-stream-ciphers-ex-4"></a>
In Theorem 4.2, why must the message-pair selection be independent of the hidden challenge string before the ciphertext is returned?

<details><summary>Hint 1</summary>

The real encryption adversary has not seen its secret mask.

</details>
<details><summary>Hint 2</summary>

The uniform-mask argument conditions on the chosen messages.

</details>
<details><summary>Solution</summary>

The simulated view must match the real game, where message choice precedes exposure of the mask through the ciphertext. If the simulator revealed or used the challenge to steer that choice in an observable way, a uniform mask need not remain independent conditional on the resulting messages. Keeping it hidden preserves the exact distribution and lets the one-time-pad theorem give success one half. The reduction's probability identity depends on that interface discipline.

</details>

### Exercise 5
<a id="pseudorandom-generators-stream-ciphers-ex-5"></a>
Show why the pseudo-one-time pad is insecure with an encryption oracle that reuses the seed.

<details><summary>Hint 1</summary>

Request encryption of the all-zero message.

</details>
<details><summary>Hint 2</summary>

The returned ciphertext is the expanded mask itself.

</details>
<details><summary>Solution</summary>

The zero query returns $G(K)$. Exclusive-or of that response with any later ciphertext reveals its plaintext. Thus an oracle adversary can distinguish distinct equal-length challenge messages perfectly. The attack works even under an ideal pseudorandomness assumption because the same mask is reused. The one-message theorem excludes these extra queries; it does not claim chosen-plaintext security for deterministic repeated-pad encryption.

</details>

### Exercise 6
<a id="pseudorandom-generators-stream-ciphers-ex-6"></a>
Describe the adjacent-hybrid simulator for transition $j$, including the state needed for the suffix.

<details><summary>Hint 1</summary>

The challenge is a whole next-state/output pair.

</details>
<details><summary>Hint 2</summary>

Use its left half to generate the unreplaced suffix.

</details>
<details><summary>Solution</summary>

Sample the already replaced prefix output blocks independently. Interpret the challenge's right half as output block $j$ and its left half as the next internal state. Iterate the public generator from that state for the remaining blocks. A real challenge supplies the current real transition on a uniform hidden state; a uniform challenge supplies the next replaced transition. Keeping the state/output correlation intact is what makes the two distributions match the adjacent hybrids.

</details>

### Exercise 7
<a id="pseudorandom-generators-stream-ciphers-ex-7"></a>
Explain why a polynomial factor times a negligible function remains negligible, and why polynomially many individually described bounds need care.

<details><summary>Hint 1</summary>

Absorb the factor into the polynomial used in the definition.

</details>
<details><summary>Hint 2</summary>

A growing index requires a uniform bound or an efficient combined reduction.

</details>
<details><summary>Solution</summary>

For polynomial $q$ and desired reciprocal polynomial $p$, negligibility of $\\mu$ applied to an upper polynomial for $pq$ eventually gives $q\\mu<1/p$. For a hybrid family, merely knowing a separate eventual statement for each fixed index does not automatically cover an index growing with the parameter. A shared bound or the uniform-index reduction provides the necessary control. The theorem states that dependency instead of summing unquantified assurances.

</details>

### Exercise 8
<a id="pseudorandom-generators-stream-ciphers-ex-8"></a>
What follows if an adversary learns the current internal seed of the iterated generator? Which theorem hypothesis has changed?

<details><summary>Hint 1</summary>

The transition algorithm is public and deterministic.

</details>
<details><summary>Hint 2</summary>

The proved distinguisher receives output blocks only.

</details>
<details><summary>Solution</summary>

It can compute every subsequent state and output block by iterating the public rule. The output-only indistinguishability experiment supplied no internal seed, so this is a stronger observation model. The theorem therefore does not establish future secrecy after compromise. This conclusion does not automatically determine secrecy of earlier erased states; a separate backtracking-security argument would be needed for that different question.

</details>

### Exercise 9
<a id="pseudorandom-generators-stream-ciphers-ex-9"></a>
Why must the output length and iteration count be polynomially bounded in the generator definition and stretch theorem?

<details><summary>Hint 1</summary>

Writing the output already consumes time.

</details>
<details><summary>Hint 2</summary>

The reduction must simulate its suffix efficiently too.

</details>
<details><summary>Solution</summary>

A polynomial-time algorithm cannot explicitly write exponentially many output bits under the ordinary bit-cost model. Likewise, the adjacent-hybrid simulator generates a suffix of the declared stream, so an exponential number of blocks would destroy its promised polynomial overhead. The count also appears in the hybrid loss. These restrictions keep both the primitive and assumption-breaking reduction within the efficient adversary class used by the theorem.

</details>

### Exercise 10
<a id="pseudorandom-generators-stream-ciphers-ex-10"></a>
Does publishing one fixed seed merely make examples reproducible, or does it also change the security experiment? Explain the resulting attack.

<details><summary>Hint 1</summary>

Anyone can evaluate the generator on a public input.

</details>
<details><summary>Hint 2</summary>

Exclusive-or encryption can then be inverted without a secret.

</details>
<details><summary>Solution</summary>

It changes the experiment: the mask is publicly computable rather than derived from an unknown uniform seed. An observer computes that mask and exclusive-ors it with the ciphertext to recover the message. Reproducible deterministic examples can illustrate arithmetic, but the PRG assumption explicitly starts from an independent uniform secret seed. A theorem about that distribution cannot be attached to a published constant seed unchanged.

</details>

## Summary and sources

Pseudorandomness is efficient indistinguishability, not uniformity on a larger output space. A direct reduction gives one-message secrecy from a PRG; reuse invalidates that scope. Iterated expansion requires a joint state/output hybrid and polynomial loss, while state exposure changes the model. The next chapter supplies a reusable oracle primitive and counter-based encryption.

The comparison text is Katz and Lindell, *Introduction to Modern Cryptography*. The PRG and pseudo-pad route appears in Katz's author-maintained lecture sequence cited in the book references. The proofs, examples and exercises here are newly written, with the probability-gap and guessing-advantage conventions stated explicitly.
`;export{e as default};