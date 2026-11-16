
# Message Authentication and Hash Functions

Confidentiality asks what an observer learns. Authentication asks whether an active adversary can make a receiver accept a new message without the authentication key. A hash compresses publicly computable data and has yet another collection of security games. These properties interact in constructions, but none is a synonym for another. This chapter proves a fixed-domain MAC theorem and a hash-then-MAC theorem with separate reductions for the two assumptions.

Use exact finite bitstrings and the oracle conventions of the previous chapter. A message authentication code consists of key generation, a tag algorithm and a verification predicate. Correctness says an honestly produced tag verifies for its message. The adversarial experiment determines what a successful forgery means. The mathematical statement must include which messages and verification queries the adversary can submit.

## Chosen-message unforgeability

In the EUF-CMA game here, an adversary obtains tags for chosen messages under one generated key. It finally outputs a message/tag pair. It wins if verification accepts and the message was not previously submitted to the tagging oracle. There is one final forgery attempt and no separate verification oracle in this definition. Success probability, rather than hidden-bit guessing advantage, is the security quantity.

An earlier message/tag replay is excluded from this forgery event. A communication protocol can separately need replay rejection through its sequence or state rules. Strong unforgeability changes freshness to require a **new pair**, potentially including a new valid tag for an old message. For a deterministic MAC with exactly one accepted canonical tag per message, an old message cannot have a new accepted tag pair. For schemes with multiple accepted tags, the distinction can matter.

## Worked example 1: a public checksum authenticates nothing by itself

Suppose a two-number message $(a,b)$ is sent with public checksum $H(a,b)=a+b\bmod13$. An active adversary can replace it by any chosen pair and recompute its checksum. It succeeds without asking a tagging oracle or learning any secret. Even preserving the old checksum is easy here: $(2,8)$ and $(5,5)$ both give ten.

The first attack applies to any public hash used alone as an authentication tag, regardless of collision resistance: the attacker can simply recompute a new message's hash. The second is an additional weakness of this particular checksum. It is useful to separate them because improving collision resistance does not remove the public-recomputation attack on an unkeyed authentication interface.

## A PRF-based fixed-domain MAC

Let $F_k:\{0,1\}^n\to\{0,1\}^{\tau}$ be a PRF. Define $\operatorname{Tag}_k(m)=F_k(m)$ and accept exactly when the received tag equals this value. Messages have exactly $n$ bits in this construction. A different-length message is outside the specified domain; a variable-length construction needs an encoding or composition theorem rather than an unnoticed extension of this formula.

**Theorem 6.1 (PRF MAC).** For an adversary making at most $q$ tag queries and one final new-message forgery attempt, its success probability is at most the advantage of a PRF distinguisher making at most $q+1$ oracle queries, plus $2^{-\tau}$.

*Proof.* The distinguisher answers each tag query through its oracle and records the queried messages. On the final pair, reject if the message is old or its format invalid. Otherwise query its oracle once at that new message and output one exactly when the proposed tag matches. With a keyed PRF oracle, this is the real forgery event.

With a random-function oracle, the final new message's value is independent uniform conditional on the entire earlier transcript and the adversary's coins. This remains true when the message is chosen adaptively, because it was not previously queried. A proposed fixed tag therefore matches with probability $2^{-\tau}$, or the adversary loses earlier on an inadmissible output. The real success probability is at most the ideal one plus the distinguisher's probability gap. There are at most $q$ answer queries and the one final verification query, giving the stated budget. ∎

If the underlying PRF outputs $n$ bits, taking a fixed $\tau$-bit prefix gives the corresponding shorter-output PRF: a distinguisher for the prefix can be simulated by querying the full function and truncating its answers. The forgery bound still includes $2^{-\tau}$. A fixed short tag length gives a concrete guessing probability, not an asymptotically negligible function of a growing security parameter. That term must be tracked rather than hidden inside the assumption.

## Worked example 2: what the ideal tag table does not reveal

Let the ideal function accept four-bit messages and return three-bit tags. Suppose two earlier distinct messages have returned tags $101$ and $011$. For a third distinct message, any proposed three-bit tag succeeds with probability one eighth, conditional on those observations. The new message may be chosen after reading them; its unqueried table entry is still independent uniform.

If the adversary instead repeats an earlier message, the ideal function returns its earlier tag, not a new random answer. That predictable response is consistent with the oracle model but does not count as a new-message forgery. The theorem uses both facts: consistency on repeated input and independence on an unqueried input. Neither is captured by saying that every individual tag looks random.

## Hash properties have distinct games

A publicly indexed hash family supplies a public description $s$ and an efficient map from allowed messages to a fixed-length digest. Collision resistance means no efficient adversary given the public description can find distinct inputs with equal digests, with more than negligible success under the stated family generation. The adversary chooses both inputs.

Preimage resistance instead gives a target digest under an explicitly specified target distribution and asks for an input mapping to it. Second-preimage resistance gives an input and asks for a different one with the same digest. These games have different inputs and success events. Their relationships can depend on domain size, the input distribution and the precise family; a theorem about one should not be renamed as every other property.

Compression ensures collisions exist when more messages than digests are allowed. Pigeonhole counting is an existence theorem, not a polynomial-time collision finder. Enumerating more than the number of digest possibilities gives an eventual collision but can be exponential in the digest length. Thus computational collision resistance is compatible with the mathematical existence of collisions.

## Hash then authenticate: two explicit reductions

Let $H_s$ map variable-length messages to $n$-bit digests, and let $F_k$ be the fixed-domain PRF above. Publish independently generated $s$, keep $k$ secret, and tag a message by $F_k(H_s(m))$. Verification recomputes that same expression. Assume all submitted messages have polynomial length, so the reduction can process them efficiently.

**Theorem 6.2 (Hash-then-MAC).** A new-message forgery success is bounded by the success of a collision-finding adversary against $H$, plus a PRF distinguishing gap, plus $2^{-\tau}$, with the described polynomial simulation overhead and at most $q+1$ PRF calls.

*Proof.* In the real game, define Bad to mean that a fresh final message has the same digest as a previously tagged, different message. A collision-finder given $s$ samples its own MAC key, simulates real tags honestly, and records all messages and digests. If Bad occurs it outputs that final message and a matching earlier message. They are distinct and have equal digests, so its collision success is exactly the probability of this recorded bad event, or greater if it also uses other discovered collisions.

It remains to bound successful forgery without Bad. Construct a PRF distinguisher using its oracle for digest tags and the final verification value, with an independently sampled public hash description. It outputs one exactly for a valid fresh-message forgery whose digest is also fresh. With a real oracle this is the real successful-forgery-and-not-Bad event. With a random-function oracle, the fresh digest has an independent uniform tag, so that event has probability at most $2^{-\tau}$.

The real successful event is the disjoint union of its Bad and not-Bad parts. Bound the first by the collision reduction and the second by the PRF gap plus the ideal guessing probability. Summing gives the claim. Both reductions simulate the exact public hash, tag consistency and message freshness rules; the final PRF query accounts for verification. ∎

The proof does not model the public hash as a random oracle. It uses its stated collision-resistance experiment and a separate keyed PRF assumption. Replacing either assumption or changing the message encoding changes the theorem. It also does not authenticate an informal object before that object has an unambiguous bitstring representation.

## Worked example 3: a variable-length CBC-MAC forgery

Consider the raw construction starting at zero, applying a block permutation to each message block exclusive-ored with the previous chaining value, and returning the final value as tag. Ask for the tag of one block $x$ and receive $t=E_k(x)$. Submit the new two-block message $x\Vert(x\oplus t)$ with tag $t$. Its first chaining value is $t$. Its second is
$$E_k(t\oplus(x\oplus t))=E_k(x)=t.$$
The forgery verifies with certainty after one tag query.

This attack applies to the stated raw variable-length interface. It is not a refutation of every fixed-length CBC-MAC theorem or every encoded variant. The message length changed from one block to two, which the attacked interface permits. The calculation illustrates why a composition theorem must retain length, encoding and domain restrictions, even when the underlying permutation has ideal security.

## Encodings and combined properties

If a pair of fields is encoded by simple concatenation, the two field pairs $(0,11)$ and $(01,1)$ both produce the bitstring $011$. Hashing that string yields the same result, but this is not a collision between distinct **hash inputs**. The ambiguity occurred earlier in the encoding. Fixed field lengths or an injective length-aware encoding can state the missing distinction. A collision-resistance theorem cannot correct an input representation that already identifies different intended objects.

Authentication alone does not hide plaintext: sending a message with a secure tag still exposes the message. Encryption alone need not prevent modification, as the counter example showed. A combined scheme needs an explicit joint experiment and composition theorem. Key usage, message boundaries and any authenticated context form part of that statement; individual primitive theorems do not make every combination secure automatically.

## More than one proposed forgery

The proved game has one final verification. A useful related experiment lets the adversary submit a batch of at most $v$ proposed fresh-message pairs chosen from its tag transcript before seeing any verification answer. In the ideal random-function setting, each individual proposed tag has success probability at most $2^{-\tau}$ conditional on that transcript. A union bound therefore gives at most $v2^{-\tau}$ for any accepted pair, capped by one. The proposals need not be independent for that inequality.

For example, three distinct guesses for one fresh three-bit tag succeed with probability three eighths: the valid value is uniform among eight possibilities and the three selected values are distinct. If all three guesses were identical, their repeated presentation would still give probability one eighth. A union bound remains valid but is then loose. The success event and the number of genuinely different guesses determine whether the bound is attained.

An adaptive verification oracle is a different interface. A rejection can rule out one candidate tag and alter the conditional distribution of the remaining possibilities. One cannot simply repeat the sentence that the next attempt succeeds with exactly the original inverse tag-space probability after conditioning on all those rejections. A suitable game proof can account for the history, but the one-final-attempt reduction does not include it automatically. Stating the batch assumption above keeps the claimed extension exact.

This example also separates tag guessing from the security of the key generator. The ideal fresh-value calculation is justified only after a reduction has replaced the keyed function with the random one under the correct distribution. A publicly fixed or otherwise insecurely generated key does not inherit that ideal calculation by assertion. The PRF experiment and its key-generation hypothesis are the bridge between the actual keyed construction and the independent table entry used in the proof.

## Exercises

### Exercise 1
<a id="message-authentication-hash-functions-ex-1"></a>
Why does the PRF MAC reduction use $q+1$ queries rather than only the adversary's $q$ tag queries?

<details><summary>Hint 1</summary>

The distinguisher must evaluate its final success predicate.

</details>
<details><summary>Hint 2</summary>

The proposed final message is new.

</details>
<details><summary>Solution</summary>

It answers the $q$ tag requests through its oracle, then needs one value at the final fresh message to check the proposed tag. That last query lets it output the real verification event and makes the ideal final value independent uniform. The simulation cannot generally verify without it, since it does not know which keyed or ideal function its oracle implements. The query budget therefore includes this success-test overhead explicitly.

</details>

### Exercise 2
<a id="message-authentication-hash-functions-ex-2"></a>
For an ideal random-function MAC with eight-bit tags and one fresh-message attempt, calculate the success probability of a uniformly guessed tag. Does making the message predictable change it?

<details><summary>Hint 1</summary>

There is exactly one accepted tag among $2^8$ possibilities.

</details>
<details><summary>Hint 2</summary>

The ideal table entry is fresh even for a publicly known unqueried message.

</details>
<details><summary>Solution</summary>

The guessing probability is $1/256$. Predictability of an unqueried message does not change that conditional random-function value: the tag remains independent uniform. Querying the same message first would reveal its tag, but then the message would not be fresh in this game. The theorem's protection concerns an unqueried function input, rather than entropy in a message selected by the adversary itself.

</details>

### Exercise 3
<a id="message-authentication-hash-functions-ex-3"></a>
Explain the difference between replaying an old pair, forging a new tag for an old message and forging a tag for a new message.

<details><summary>Hint 1</summary>

Write the freshness condition for each game.

</details>
<details><summary>Hint 2</summary>

A protocol's replay policy is a separate acceptance rule.

</details>
<details><summary>Solution</summary>

An identical old pair is excluded by both ordinary creation games and must be handled by a protocol's replay policy if needed. A new valid pair for an old message is a potential strong-unforgeability event but is excluded from the new-message EUF-CMA event here. A fresh-message valid pair counts in both. For the deterministic unique-tag construction, an old message cannot acquire a different accepted tag, which makes the extra strong case vacuous under that exact verification rule.

</details>

### Exercise 4
<a id="message-authentication-hash-functions-ex-4"></a>
In the hash-then-MAC proof, how does a fresh message with an old digest yield a hash collision?

<details><summary>Hint 1</summary>

The simulator retained all earlier messages and their digests.

</details>
<details><summary>Hint 2</summary>

Message freshness provides distinctness of the two inputs.

</details>
<details><summary>Solution</summary>

Choose an earlier tagged message with the same recorded digest as the final message. Because the final message was not queried, the bitstrings are distinct. Their equal digests therefore meet the collision game's success condition. The collision reduction can simulate tags using a key it generates itself, so it does not need a special secret from the collision challenger. This accounts for the real bad event without modelling the hash as an ideal random oracle.

</details>

### Exercise 5
<a id="message-authentication-hash-functions-ex-5"></a>
Why is the ideal forgery probability bounded by $2^{-\tau}$ only after excluding the old-digest event in the composed construction?

<details><summary>Hint 1</summary>

Random functions repeat a previous answer at a previous input.

</details>
<details><summary>Hint 2</summary>

The actual function input is the digest, not the entire message.

</details>
<details><summary>Solution</summary>

A fresh message can still have a digest already queried through another message. The ideal tag function then returns an already visible value, so the adversary may copy it successfully. After excluding that event, the digest is an unqueried function input and its value is independent uniform conditional on the transcript. The collision term and the guessing term therefore pay for different cases and cannot be merged by simply declaring every new message's tag random.

</details>

### Exercise 6
<a id="message-authentication-hash-functions-ex-6"></a>
Recompute the raw variable-length CBC-MAC forgery and state the exact queried and forged message lengths.

<details><summary>Hint 1</summary>

The first query returns $t=E_k(x)$.

</details>
<details><summary>Hint 2</summary>

The repeated tag cancels inside the second chaining input.

</details>
<details><summary>Solution</summary>

The queried message is one block $x$. The forged message has two blocks $x$ and $x\oplus t$. Starting from zero, its first chain value is $t$ and second is $E_k(t\oplus x\oplus t)=E_k(x)=t$. Thus the copied tag verifies on an unqueried two-block message. The attack needs the raw interface to accept both lengths; it makes no claim against a fixed-length domain that excludes one of them.

</details>

### Exercise 7
<a id="message-authentication-hash-functions-ex-7"></a>
Why is $(0,11)$ versus $(01,1)$ under concatenation an encoding ambiguity rather than a collision-resistance violation?

<details><summary>Hint 1</summary>

Write the actual bitstrings passed to the hash.

</details>
<details><summary>Hint 2</summary>

A collision game requires two distinct hash inputs.

</details>
<details><summary>Solution</summary>

Both field pairs encode as the identical bitstring $011$. The hash therefore receives the same input twice, not two distinct inputs with equal output. The collision game's distinctness condition is absent. A uniquely decodable field encoding must distinguish the intended objects before hashing, for example by fixed field widths or an injective length encoding. Strengthening the hash assumption alone cannot recover information already lost by the representation.

</details>

### Exercise 8
<a id="message-authentication-hash-functions-ex-8"></a>
Does the existence of collisions in an $n$-bit digest refute computational collision resistance? Give the counting and resource arguments separately.

<details><summary>Hint 1</summary>

More than $2^n$ distinct inputs cannot all have different digests.

</details>
<details><summary>Hint 2</summary>

That many evaluations can be exponential in the parameter.

</details>
<details><summary>Solution</summary>

Pigeonhole counting guarantees a collision among more than $2^n$ inputs, but enumerating them may require exponential time. Collision resistance rules out efficient finding under the stated generated family and success distribution, not mathematical existence. An actual polynomial-time collision algorithm would contradict the assumption; a finite existence proof without that resource bound does not. This is the same computational versus information-theoretic distinction encountered for PRG images.

</details>

### Exercise 9
<a id="message-authentication-hash-functions-ex-9"></a>
Why does a secure MAC not imply confidentiality? Give a correctly authenticated transmission format that still exposes the message.

<details><summary>Hint 1</summary>

Authentication can accompany plaintext.

</details>
<details><summary>Hint 2</summary>

The forgery experiment does not challenge an observer to distinguish hidden messages.

</details>
<details><summary>Solution</summary>

Transmit $(m,\operatorname{Tag}_k(m))$. The tag can meet its chosen-message unforgeability theorem while the first component reveals $m$ directly. The authentication experiment limits creation of new accepted messages, not observation of an honestly transmitted plaintext. Confidentiality needs a separate encrypted interface and a corresponding experiment; any combined construction then requires its own composition statement.

</details>

### Exercise 10
<a id="message-authentication-hash-functions-ex-10"></a>
For a truncated PRF tag, identify the two terms of the forgery bound and explain why a fixed tag length is not an asymptotically negligible guessing term.

<details><summary>Hint 1</summary>

The hybrid loss and the ideal guessing probability have different sources.

</details>
<details><summary>Hint 2</summary>

A positive constant does not eventually beat every reciprocal polynomial.

</details>
<details><summary>Solution</summary>

The bound is the relevant PRF probability gap plus $2^{-\tau}$. Truncation is simulated by taking a prefix of full oracle answers, while a fresh ideal tag still has exactly $\tau$ bits. If $\tau$ is fixed as the security parameter grows, its reciprocal power of two is a positive constant and not negligible. A concrete bound may still be stated at a chosen length; an asymptotic claim must specify the tag-length function and retain that term.

</details>

## Summary and sources

Authentication uses a chosen-message creation experiment; hash security uses different public-function experiments. A PRF gives a fixed-domain MAC with an explicit fresh-tag bound. Hash-then-MAC needs both a collision reduction and a PRF reduction. Raw variable-length chaining and ambiguous encodings show why domain hypotheses matter. The public-key chapters continue the same practice of separating correctness, assumptions and reductions.

The comparison text is Katz and Lindell, *Introduction to Modern Cryptography*. Bellare and Rogaway's author-written notes in the bibliography supply an additional oracle-based treatment; the PRF MAC route is also identified in Katz's cited lecture sequence. The two full reductions, worked arithmetic and exercises above are newly written and state their own game interfaces.
