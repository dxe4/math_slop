var e=`---
parent_id: book-cryptography
chapter_id: block-ciphers-prfs-modes
title: "Block Ciphers, Pseudorandom Functions and Modes"
level: advanced-undergraduate
license: CC BY-SA 4.0
---

# Block Ciphers, Pseudorandom Functions and Modes

A pseudorandom generator gives one expanded output. A reusable encryption interface needs a primitive that can answer many related queries consistently. A pseudorandom function is a keyed finite function whose oracle behaviour is computationally indistinguishable from a uniformly chosen function. A block cipher instead selects a permutation. Neither definition is supplied by invertibility or an impressive-looking formula alone.

This chapter defines those oracle experiments and proves a stateful counter-encryption theorem. It then connects the random-function and random-permutation models with an explicit collision bound. All messages in that theorem contain whole blocks of one fixed size, and all counter inputs are distinct. Padding, authentication and multiple independent counter allocators are outside that exact interface unless added with further rules.

## Consistent random functions

Let $F_k$ map $n$-bit strings to $n$-bit strings, with a generated secret key and efficient evaluation. In the PRF experiment, an efficient adversary receives oracle access either to $F_k$ for a generated key or to a uniform function on that finite domain. Its advantage is the absolute difference between its output-one probabilities in the two experiments.

A uniform function is sampled once. One convenient equivalent description is lazy sampling: on a new input, choose an independent uniform output and store it; on a repeated input, return the stored output. Independence applies to distinct inputs, not repeated calls. A simulator that resamples a repeated input would offer an easily distinguishable oracle and would not implement the definition.

The number of possible functions is enormous, but the challenger need only store the entries queried in a polynomial interaction. This is a model of an oracle distribution, not an efficient public description of the full table. The keyed family is required to have a compact efficient implementation; its assumed indistinguishability compares that implementation with the ideal distribution for the permitted queries.

## Worked example 1: an invertible family that is easy to distinguish

Consider $F_k(x)=x\\oplus k$. Each key selects a permutation and evaluation is efficient. Query zero and a distinct string $a$. The two answers always differ by $a$. A random function's two outputs are independent, so that same relation holds with probability $2^{-n}$. Accepting exactly when the relation holds gives distinguishing gap $1-2^{-n}$.

Thus being a keyed permutation does not make a family pseudorandom. The adversary exploited a relation across queries, not a failure to invert a particular ciphertext. A primitive's syntax and correctness are part of its definition, while its computational security is an additional assumption or theorem. This is the reusable-oracle version of the repeated-halves generator failure.

## A precise counter interface

Maintain a secret PRF key and a public counter initially zero. A message consists of $t\\ge1$ blocks, each of $n$ bits. If the half-open counter interval from the current value $u$ to $u+t$ would exceed $2^n$, reject without evaluating any pad. Otherwise reserve that entire interval, set the next counter to $u+t$, and return the header $u$ with blocks
$$c_i=m_i\\oplus F_k(\\operatorname{bin}_n(u+i)),\\qquad0\\le i<t.$$
The fixed-width encoding is injective on the permitted counter range. Decryption reconstructs the same inputs from the header and exclusive-ors the same pads. It does not require an inverse of $F_k$.

All encryptions in the theorem share **one** allocator for that key. Two devices resetting to zero under the same key violate the distinct-input property. The transmitted counter need not be secret: its purpose is to select fresh function inputs, and the security game already exposes it. Equal-length challenge pairs guarantee that allocation and overflow behaviour do not reveal the hidden choice through different message lengths.

## Worked example 2: counter blocks by hand

Use four-bit blocks, current counter three, and two illustrative function values: input three returns $1010$ and input four returns $0111$. For message blocks $0110,1100$, encryption returns header three and ciphertext blocks $1100,1011$. Exclusive-or with the same two function values recovers the message. The next counter is five.

These two table values illustrate correctness and allocation; they do not define a secure keyed family. Reusing header three for a new two-block message would reuse both pads and expose the exclusive-or of the message pairs. The theorem below excludes that event by its allocator rule rather than hoping that the actual message values make it harmless.

## A complete chosen-plaintext reduction

Use the multiquery left-or-right experiment: choose one uniform hidden bit $b$ for the interaction. For every adversarial query containing equal-length message pairs, return a counter encryption of its $b$-selected message. The adversary may choose later pairs based on earlier responses, but it receives no separate direct access to the secret pad function. Its final output guesses $b$.

**Theorem 5.1 (PRF counter secrecy).** For at most a declared number $q$ of allocated blocks, the adversary's absolute guessing advantage is at most the probability-gap advantage of a PRF distinguisher making at most $q$ oracle queries, with the corresponding bookkeeping and exclusive-or overhead.

*Proof.* The PRF distinguisher samples $b$, simulates the adversary and counter allocator, and uses its own oracle whenever encryption needs a pad. It returns one precisely when the final guess is correct. With a keyed PRF oracle this is exactly the real game. With a random-function oracle, every pad uses a distinct input, so every new pad is independent uniform even conditional on the transcript so far.

Induct on queries. Before the first response, $b$ is independent of the adversary's coins. If the previous transcript is independent of $b$, its next message-pair choice has the same distribution for both bit values. The chosen message is masked by new independent uniform pads; hence the response blocks have the same distribution for either value. The header and any pre-evaluation overflow rejection depend only on the equal pair length and existing counter. They also reveal no $b$ information. This preserves the induction statement for every response.

Thus the entire ideal transcript is independent of $b$ and the final success probability is one half. The simulator's output gap is exactly the real adversary's guessing advantage. Each allocated block requires one oracle call and one exclusive-or, so the claimed query and time overheads follow. ∎

This is a conditional computational theorem for a stated allocation interface. It does not authenticate ciphertexts: changing a ciphertext bit still changes the corresponding decrypted bit. Nor does it cover direct oracle queries revealing the very pad inputs used by encryption, or exposure of the PRF key. Those are different experiments, not consequences hidden inside chosen-plaintext secrecy.

## Block ciphers and random permutations

A block cipher has efficient keyed evaluation $E_k$ on fixed-length blocks, and each keyed map is a permutation with a specified efficient inverse. A pseudorandom permutation assumption says that its permitted oracle behaviour is indistinguishable from a uniformly chosen permutation. Here use the **forward-only** experiment. Allowing inverse queries is a stronger interface and needs a correspondingly specified assumption.

A uniform permutation answers new inputs with unused outputs uniformly, preserving bijectivity. A uniform function permits output collisions at distinct inputs. This difference explains why a block cipher is not literally a random function even under its ideal-permutation model. A concrete security argument can pay for switching between the two models with a probability bound.

**Theorem 5.2 (Forward permutation/function switch).** An adversary making at most $q$ distinct forward queries on an $N=2^n$ element domain has probability gap at most $q(q-1)/(2N)$ between the uniform-permutation and uniform-function oracles, capped by one.

*Proof.* Couple the two lazy samplers. At each fresh input, draw a uniform function output. If it has not occurred before, return it also as the permutation output. If it has occurred, mark Bad and choose an unused permutation output uniformly. The permutation marginal is correct: at a stage with $i$ used outputs, any unused value receives its direct probability $1/N$ plus the collision probability $i/N$ shared uniformly over the $N-i$ unused values, totalling $1/(N-i)$.

Until the first collision the transcripts agree, so adaptively chosen next inputs also agree. After Bad, continue each sampler with its own correct conditional distribution; their transcripts no longer need to coincide. At the next new query the chance of a collision is at most $i/N$. A union bound over $i=0,\\ldots,q-1$ gives $q(q-1)/(2N)$. Outside Bad the final outputs agree; the bad-event indicator argument bounds the output-probability gap by that event probability. Repeated inputs simply return their stored answers and add no new collision opportunity. ∎

Consequently, replacing the counter construction's PRF by a block cipher under a forward PRP assumption gives guessing advantage bounded by the relevant PRP gap plus this switch loss. The counter allocator still ensures distinct inputs. The theorem does not prove the cipher assumption; it accounts for the additional difference between the two ideal oracle models.

## Worked example 3: the finite switching loss

With a sixteen-element domain and three distinct inputs, the bound is $3\\cdot2/(2\\cdot16)=3/16$. The exact random-function output-collision probability is $1-(16\\cdot15\\cdot14)/16^3=23/128$. A random permutation never collides on distinct inputs. These are output collisions; they are different from reusing an encryption counter, which the allocator forbids as an input condition.

The distinction matters because one collision is paid for probabilistically in a model switch, while the other directly repeats a pad. Calling both events a birthday problem can conceal which theorem is being applied. State the random objects and equality event before using a bound. A small finite example is useful because the exact probability and conservative bound can both be written explicitly.

## Modes have different contracts

Electronic codebook encrypts each block directly with the same permutation. Equal plaintext blocks produce equal ciphertext blocks. Comparing a repeated-block candidate with a distinct-block candidate therefore reveals a pattern, regardless of how hard the permutation is to distinguish from random. A primitive's pseudorandomness does not make every mode secure.

Cipher block chaining instead begins from an initial value and encrypts each plaintext block exclusive-ored with the previous ciphertext block. Decryption applies the inverse permutation and then exclusive-ors the preceding block. This proves its round-trip equation. Its confidentiality theorem needs its own initial-value and query assumptions; it is not proved by the counter theorem, whose fresh oracle inputs were guaranteed differently. The book's worked reduction is specifically for the counter interface above.

## Domain separation and a joint oracle simulation

Sometimes a construction uses related primitives for different roles. One way to express separation is through disjoint encoded input sets. For an $n$-bit function domain, reserve inputs beginning with zero for one role and inputs beginning with one for another; each role then has only $n-1$ remaining input bits. These encodings are injective and their images are disjoint. Omitting the leading role bit would require a different joint analysis.

For an ideal random function, its restrictions to those two disjoint sets are independent random functions. To prove this, consider any finite adaptive transcript. A new input in either set receives a fresh independent uniform value, and repeats within a set return their stored values. No input in the other set can already have occupied that table entry, because the images are disjoint. Induction on queries therefore gives exactly the same joint distribution as two separately sampled lazy tables.

A reduction can simulate both roles using one PRF oracle by applying the corresponding encoding before each query. A real oracle produces the intended keyed joint implementation; an ideal oracle produces those independent role tables. The simulation has one oracle call per role query plus encoding overhead. This is a precise oracle-separation lemma. It is not by itself a proof of confidentiality and authenticity for every protocol using the roles: that protocol still needs its own success event and argument.

The domain capacity must change with the encoding. A counter role reserving one leading bit now has only $2^{n-1}$ possible counter inputs, so its allocator must reject before that reduced range is exhausted. Copying the original $2^n$ allocation limit into this encoded interface would eventually repeat or leave the reserved domain. Similarly, an authentication role must fit its own message or digest representation into the remaining bits. A mathematically meaningful role tag changes an interface rather than serving as an annotation that the oracle ignores.

Independent keys offer another explicit separation mechanism, but the appropriate theorem must then describe their independent generation. Neither approach justifies assuming independence while sharing ambiguous inputs or duplicated state. The value of the oracle proof is to locate exactly which injectivity, disjointness or key-generation conditions create the ideal independence used downstream.

## Exercises

### Exercise 1
<a id="block-ciphers-prfs-modes-ex-1"></a>
Why must a random-function oracle repeat its answer at a repeated input? Give a two-query distinguisher against an incorrectly resampling simulator.

<details><summary>Hint 1</summary>

A function is sampled once.

</details>
<details><summary>Hint 2</summary>

Ask for the same input twice and compare.

</details>
<details><summary>Solution</summary>

A sampled function assigns one output to each input, so repeated calls return the stored value. Query the same input twice and accept when answers agree. A genuine function agrees with probability one; fresh independent resampling agrees only with probability $2^{-n}$. Thus the incorrect simulator has gap $1-2^{-n}$ for this efficient test. Consistency is part of the distribution the reduction must simulate, not an optional implementation detail.

</details>

### Exercise 2
<a id="block-ciphers-prfs-modes-ex-2"></a>
Complete the attack on $F_k(x)=x\\oplus k$ with queries zero and a fixed nonzero $a$.

<details><summary>Hint 1</summary>

Exclusive-or the two replies.

</details>
<details><summary>Hint 2</summary>

The key cancels for the keyed family.

</details>
<details><summary>Solution</summary>

The first answer is $k$ and the second $a\\oplus k$, so their exclusive-or is always $a$. For a random function, the distinct inputs yield two independent uniform outputs whose exclusive-or equals that fixed $a$ with probability $2^{-n}$. Testing the relation gives gap $1-2^{-n}$. The family is invertible at every key, but that correctness property does not establish its PRF or PRP security.

</details>

### Exercise 3
<a id="block-ciphers-prfs-modes-ex-3"></a>
Why must counter allocation reserve a whole interval rather than only record that each message header is distinct?

<details><summary>Hint 1</summary>

Messages can contain different numbers of blocks.

</details>
<details><summary>Hint 2</summary>

Distinct starting points can still select overlapping intervals.

</details>
<details><summary>Solution</summary>

A two-block message starting at three uses inputs three and four. Another message starting at four has a distinct header but repeats input four. That repeats a pad and breaks the distinct-input argument. Reserving the full interval and advancing past its endpoint prevents overlap for the one allocator. The theorem uses injective encoding of every allocated block position, not merely uniqueness of the first position of each message.

</details>

### Exercise 4
<a id="block-ciphers-prfs-modes-ex-4"></a>
Explain why equal challenge lengths are needed when overflow is observable.

<details><summary>Hint 1</summary>

Allocation depends on the number of requested blocks.

</details>
<details><summary>Hint 2</summary>

One candidate might fit while the other exceeds the remaining range.

</details>
<details><summary>Solution</summary>

If the two candidates had different lengths, one could be rejected at overflow while the other was encrypted, revealing the hidden choice before considering pad secrecy. Equal lengths make the allocation and rejection behaviour identical for both choices. This is the length-leakage restriction in a concrete stateful form. The ideal transcript proof explicitly includes the public header and rejection event, rather than considering ciphertext blocks alone.

</details>

### Exercise 5
<a id="block-ciphers-prfs-modes-ex-5"></a>
Calculate the permutation/function switching bound for four distinct queries on sixteen values and explain why it is an upper bound.

<details><summary>Hint 1</summary>

Sum collision opportunities zero, one, two and three over sixteen.

</details>
<details><summary>Hint 2</summary>

The union bound may count overlapping collision events more than once.

</details>
<details><summary>Solution</summary>

The sum is $(0+1+2+3)/16=6/16=3/8$. It bounds the chance that the coupled transcripts first separate, and hence bounds any final output gap. It need not equal that gap, because collision events can overlap and a particular adversary may not exploit every separation. The theorem deliberately supplies a conservative universal bound for all adversaries with the stated forward-query budget.

</details>

### Exercise 6
<a id="block-ciphers-prfs-modes-ex-6"></a>
Why does revealing the public counter not reveal the ideal random-function pad at an unused input?

<details><summary>Hint 1</summary>

The adversary sees the input selector, not the secret oracle's value there.

</details>
<details><summary>Hint 2</summary>

Fresh function entries are uniform conditional on the earlier table.

</details>
<details><summary>Solution</summary>

Knowing an unused input does not determine its value under a secretly sampled random function. That table entry is an independent uniform block conditional on all earlier entries. The simulator does not give the encryption adversary direct oracle access that could query the pad separately. Thus the public header is compatible with the ideal secrecy proof. Adding that extra oracle would change the experiment and invalidate this argument.

</details>

### Exercise 7
<a id="block-ciphers-prfs-modes-ex-7"></a>
Give the repeated-block distinguisher against electronic codebook encryption.

<details><summary>Hint 1</summary>

Compare candidate messages $(m,m)$ and $(m,m')$ with $m\\ne m'$.

</details>
<details><summary>Hint 2</summary>

A permutation preserves equality and inequality of input blocks.

</details>
<details><summary>Solution</summary>

Inspect whether the two ciphertext blocks are equal. They always are for $(m,m)$ and never are for $(m,m')$, since a permutation maps distinct inputs to distinct outputs. Therefore the candidate is identified with certainty. The attack works even for an ideal random permutation. It demonstrates a mode failure, so replacing the block cipher by a stronger pseudorandom permutation assumption cannot repair that mode's repeated-block leak.

</details>

### Exercise 8
<a id="block-ciphers-prfs-modes-ex-8"></a>
Does the counter theorem authenticate its header or ciphertext? Exhibit a change it does not prevent.

<details><summary>Hint 1</summary>

Exclusive-or encryption retains its algebraic malleability.

</details>
<details><summary>Hint 2</summary>

Flip one bit of a ciphertext block while leaving the header intact.

</details>
<details><summary>Solution</summary>

No authentication predicate is included. Flipping one ciphertext bit flips the corresponding recovered plaintext bit under the same pad. The chosen-plaintext secrecy theorem concerns hiding the selected message, not rejecting active modifications. A message authentication mechanism and a precise composition experiment are additional requirements. The example leaves the theorem's confidentiality proof intact while identifying the separate property it never claimed.

</details>

### Exercise 9
<a id="block-ciphers-prfs-modes-ex-9"></a>
Why is the permutation/function switch stated for forward queries only? What extra interface must be modelled for inverse queries?

<details><summary>Hint 1</summary>

A function need not have a unique inverse.

</details>
<details><summary>Hint 2</summary>

A permutation oracle can expose both directions consistently.

</details>
<details><summary>Solution</summary>

The proof couples values at newly queried forward inputs. A uniform function can collide and has no total unique inverse, while a permutation's inverse queries reveal and constrain both sides of its table. An adversary with both interfaces therefore needs a specifically defined stronger experiment and a different simulation analysis. The forward-only theorem does not automatically cover it merely because the concrete cipher implements decryption.

</details>

### Exercise 10
<a id="block-ciphers-prfs-modes-ex-10"></a>
Identify the exact query budget and overhead of the counter-to-PRF reduction for an adversary encrypting at most $q$ blocks.

<details><summary>Hint 1</summary>

Each block needs one new pad value.

</details>
<details><summary>Hint 2</summary>

The simulator also reserves intervals and combines bitstrings.

</details>
<details><summary>Solution</summary>

It makes at most $q$ PRF-oracle calls, one per allocated block. It also performs the adversary's computation, counter and length bookkeeping, fixed-width encoding and exclusive-or processing of the same blocks. The exact bit cost depends on those finite representations, but it is polynomial for the stated polynomial message/query bounds. Rejected overflow requests use no pads. This accounts for the simulation resources rather than equating assumption advantage and scheme advantage without an implementable wrapper.

</details>

## Summary and sources

PRFs model consistent reusable function queries; PRPs model invertible blocks with a different ideal distribution. A distinct-counter construction has a complete PRF chosen-plaintext reduction. A coupling pays an explicit collision bound when switching between forward random permutations and functions. Mode syntax and allocation rules remain part of the theorem. The next chapter adds authenticity and distinguishes it from hash properties.

Katz and Lindell, *Introduction to Modern Cryptography*, is the comparison text; Bellare and Rogaway's author-written notes in the book bibliography provide the oracle/game framework. The explicit counter interface, small calculations, switching proof and exercise sequence are newly written here. No correctness or security claim about a named implementation is inferred from these symbolic constructions.
`;export{e as default};