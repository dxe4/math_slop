
# Digital Signatures

A message authentication code uses a shared secret for producing and checking tags. A digital signature separates those abilities: a secret signing key produces evidence and a public verification key checks it. The security goal is a chosen-message creation claim. It does not say that the signed message is confidential, that its contents are true, or that a public key has been linked to a particular person by the mathematics of verification alone.

This chapter constructs a one-time signature from a one-way function and proves its reduction in full. The one-use condition is essential and receives an explicit attack when it is removed. Hashing can extend its message interface under a separate collision assumption; it does not by itself make the key reusable. Raw RSA provides a contrasting example where publicly checkable correctness coexists with easy existential forgery.

## The public-key forgery experiment

Key generation returns a signing key and verification key. The signature algorithm takes the secret key and message, possibly with fresh randomness. Verification takes the public key, message and signature and returns accept or reject. Correctness requires every honestly produced signature on a legal message to verify, under the stated key and randomness support.

In existential unforgeability under chosen-message attack, the adversary receives the verification key and may request signatures. It wins by returning an accepted signature on a message not previously submitted to that oracle. A one-time game permits at most one signing query. An unrestricted scheme must support a specified larger query budget, usually polynomially many. Their security theorems are different even if the verification syntax looks identical.

The adversary chooses the final message, so it need not invert a randomly assigned target. This difference will explain the raw-RSA forgery. Verification is public and offers no hidden information beyond the public key and algorithm; the signing oracle is the additional capability whose effect must be simulated in a reduction. Message freshness is a condition on the actual encoded input, not an informal description of what the signer meant.

## Lamport's one-time construction

Let $f_n$ be an efficiently computable one-way function on $n$-bit strings. Its inversion experiment chooses uniform $x$, gives $y=f_n(x)$, and asks for any $x'$ with the same image. A family can include a public function parameter; it is generated and retained in all the experiments. Injectivity is not assumed.

Messages have $n$ bits. Generate $2n$ independent uniform secrets $x_{i,b}$, one for each position $1\le i\le n$ and bit $b\in\{0,1\}$. Publish their images $y_{i,b}=f_n(x_{i,b})$. To sign message $m$, return the $n$ secrets $x_{i,m_i}$. Verify by applying $f_n$ to each supplied component and comparing it with the corresponding public image. All component lengths and the message length must match this domain.

Correctness follows directly from the public-key definition. The verification key reveals images of both candidate secrets at every position, but one honest signature exposes only one preimage per position. A fresh message must differ in at least one position, requiring a preimage that the original signature did not disclose. The next theorem makes that intuition into a challenge simulation with a quantified loss.

## Worked example 1: the complete table of a tiny illustration

Use two-bit secrets and the publicly invertible toy function that exclusive-ors its input with $01$. Choose secrets $00,10$ for the first position and $11,01$ for the second, listing bit-zero then bit-one choices. The public images are respectively $01,11$ and $10,00$. The signature on message $01$ is the pair $00,01$.

Verification applies the toy function to obtain $01,00$, matching the selected public entries. This is a complete correctness example, but the toy function is not one-way: its inverse is the same exclusive-or operation. Publishing its images permits recovering every secret. The construction's security theorem therefore does not attach to this tiny table; the table displays its mechanics while failing the theorem's explicit computational premise.

## The full one-way-function reduction

**Theorem 9.1 (One-time unforgeability).** A one-query signature adversary with forgery success $\epsilon(n)$ gives an inverter for $f_n$ with success at least $\epsilon(n)/(2n)$, apart from no additional failure event, and polynomial simulation overhead.

*Proof.* Receive a challenge image $y=f_n(x)$ for an unknown uniform input. Choose a position $I$ uniformly among the $n$ positions and a bit $B$ uniformly. Put $y$ at public entry $(I,B)$; generate all the other secret inputs and public images honestly. The resulting public verification key has exactly the honest distribution, since the challenge image has the same distribution as each independently generated image.

When the signing query $m$ arrives, abort if $m_I=B$, because its signature would reveal the unknown preimage. Otherwise every selected secret is known, so return the exact honest signature. On an accepted fresh-message forgery $m',\sigma'$, if $m'_I=B$ and the signing query used the opposite bit, output component $\sigma'_I$. Verification makes it a preimage of the challenge image.

To bound success, couple with a full honest experiment before deciding the hidden position/bit. Every successful new message differs from the signed message in some position. For any such position $i$, the choice $I=i,B=m'_i$ both permits answering the original query and turns the forged component into the needed preimage. At least one of the $2n$ equally likely choices therefore succeeds. The public-key distribution is independent of this hidden choice, so averaging gives the lower bound. On favourable choices the simulated view never aborts and is exactly the honest one.

If no signing query was made, an accepted forgery still reveals a preimage at its selected bit for every position, giving success at least one half and hence at least the displayed bound. The wrapper evaluates at most $2n-1$ function images to form the key, runs the adversary once, and performs verification and selection at polynomial cost. ∎

Uniform selection from a non-power-of-two position set can be implemented by the usual bounded sampling with an explicitly negligible abort, or treated as the exact finite sampling operation of the stated experiment. Padding the position choice to a power of two and ignoring unused choices gives a strict fixed-bit sampler with loss less than an additional factor two. Either version preserves the qualitative theorem from one-wayness; a concrete statement must retain its sampling convention.

The reduction asks for any preimage of the selected public image. A collision in the function does not invalidate it: any accepted forged component is a valid inversion answer. The theorem assumes difficulty of that exact inversion task, not unique recovery of the originally sampled secret string. Likewise, it does not conceal the public images from the adversary; seeing them is part of both the signature game and the challenge embedding.

## Worked example 2: two signatures expose enough for a third

For message length at least two, request signatures on all-zero and all-one messages under the same key. Together they disclose both secrets at every position. Choose a third message different from both, such as a message starting $01$, and assemble its signature by selecting the corresponding disclosed component at each position. Verification accepts.

In the two-bit toy table, the signatures on $00$ and $11$ are $00,11$ and $10,01$. Selecting $00$ from the first and $01$ from the second signs the fresh message $01$. The attack does not invert the one-way function and works for any function satisfying correctness. It violates a two-query claim, while the proved theorem allowed at most one query. Hashing the message first does not restore the unrevealed secret components once both choices have been exposed.

## Worked example 3: raw RSA has a no-query forgery

Suppose the signature interface accepts residue $m$ and signature $s$ exactly when $s^e=m\pmod N$. Choose any signature residue first and publicly calculate its image as the message. The pair verifies without ever calling a signing oracle. For $N=55,e=3$, choose signature two and message eight. The public verification equation is $2^3=8$.

This attack need not invert a random image or factor the modulus. The adversary selected a message it already knew how to sign. Thus RSA one-wayness does not imply unforgeability of this raw interface. A signature encoding theorem must analyse its actual message map and assumptions; it is not supplied by the exponent-inversion correctness proof. The example refutes the displayed raw scheme without making a claim about every encoded RSA signature construction.

## Hashing changes the message interface

Let a public hash family map variable-length messages to $n$ bits, independently of the one-time signing key. Sign the digest using the preceding fixed-message construction. Correctness is immediate from recomputing the digest, but a security proof needs both collision resistance and one-time signature unforgeability.

Split a successful fresh-message forgery into two cases. If its digest equals the earlier queried message's digest, the two distinct messages form a hash collision. A collision-finder can generate its own signing key and simulate the one-query game honestly to obtain that pair. Otherwise the forgery supplies an accepted signature on a digest not previously signed. A signature adversary can forward the original digest query to its signing oracle and return that fresh digest forgery. The two event bounds sum to the hash collision success plus the underlying one-time signature forgery success.

This is a complete reduction split for the one-query setting. It neither models the hash as a random oracle nor permits extra signing queries under the same one-time key. Reusability can be built with further structures, such as authentication trees and carefully specified leaf-key usage, but their state and reduction requirements are separate constructions. A name or diagram of a tree is not that theorem.

## Statements and encodings

A signature authenticates the exact bitstring accepted by verification under its public key. If a protocol needs a statement about a document, transaction or mathematical certificate, its encoding must identify the intended object and context unambiguously. Two semantic objects mapped to one byte string are not distinguished by stronger collision resistance downstream. Chapter 6's field-concatenation example applies equally here.

The public key's identity is another statement outside the bare equation. A successful verification says that the accepted evidence relates to that verification key; it does not derive who controls the matching secret key. Any certification, key-distribution or trust assumption belongs in the larger protocol theorem. Keeping those levels distinct avoids replacing a precise cryptographic conclusion by an unsupported broader assertion.

## Why the hidden-index analysis is legitimate

The proof's coupling selects a favourable position after describing an honest transcript, but the actual reduction chooses its index before showing the verification key. These are two descriptions of the same probability space, not a power to inspect a future forgery. Each public entry is generated from an independent uniform secret. Replacing one uniformly designated entry by the externally supplied challenge image gives exactly that same public-array distribution for every designation.

Consequently the hidden designation is independent of the verification key marginal and of an adversary's decisions made from that key and its own coins. For analysis we may imagine all secret entries existing in an honest experiment, sample the transcript and then inspect which designations would have allowed its simulation. In execution the reduction knows all entries except its selected challenge preimage. On every favourable designation, the actual run never asks for that missing value before the forgery supplies one. The real simulator and conceptual honest run therefore coincide on precisely the event used for the lower bound.

This distinction is useful in many guessing reductions. An argument may average over a hidden choice to quantify success, but an implementable reduction must still generate that choice, answer all required queries on its successful branch and charge its abort probability. Merely saying guess the helpful position without proving the distribution match would omit the essential simulation argument.

The public function may map different secrets to the same image. Those collisions do not change the public-array distribution or invalidate inversion extraction. They can only give an adversary additional ways to supply a preimage, which the one-way assumption already measures. The proof never demands that the adversary reveal the exact originally sampled secret string, and thus does not smuggle an injectivity assumption into a theorem stated for one-way functions.

## Exercises

### Exercise 1
<a id="digital-signatures-ex-1"></a>
For the tiny table in Worked Example 1, give and verify the signature on message $10$.

<details><summary>Hint 1</summary>

Select the bit-one secret at the first position and bit-zero secret at the second.

</details>
<details><summary>Hint 2</summary>

Apply the toy function to compare with the two selected public entries.

</details>
<details><summary>Solution</summary>

The signature is $10,11$. Exclusive-or with $01$ gives public images $11,10$, which are the bit-one entry of the first position and bit-zero entry of the second. Verification accepts. The computation illustrates correct component selection only: because the toy function is publicly invertible, it cannot satisfy the one-way assumption required by the security theorem. A round trip is not a substitute for that premise.

</details>

### Exercise 2
<a id="digital-signatures-ex-2"></a>
Why does every fresh message in the one-query game differ from the signed message at some position, and what does that give the reduction?

<details><summary>Hint 1</summary>

Messages are fixed-length bitstrings with equality defined coordinatewise.

</details>
<details><summary>Hint 2</summary>

Guess a changed position and its final bit.

</details>
<details><summary>Solution</summary>

If all positions agreed, the two encoded messages would be equal and the final message would not be fresh. At any changed position, its forged component corresponds to the bit not revealed by the original signature. Embedding the inversion challenge at that position and final bit permits answering the query while turning the accepted component into a preimage. At least one favourable position/bit among $2n$ choices supplies the theorem's success lower bound.

</details>

### Exercise 3
<a id="digital-signatures-ex-3"></a>
Does the one-way-function reduction require injectivity? Explain what an accepted forged component certifies.

<details><summary>Hint 1</summary>

Read the inversion game's target condition.

</details>
<details><summary>Hint 2</summary>

Verification checks the function image, not identity with the originally sampled secret.

</details>
<details><summary>Solution</summary>

No. The inversion game accepts any preimage of the challenge image. An accepted forged component at the embedded entry satisfies exactly that equation under the public function. It need not equal the unknown original seed string. Thus collisions do not undermine this extraction. An assumption demanding recovery of one unique sampled string would be a different task and is not the premise used here.

</details>

### Exercise 4
<a id="digital-signatures-ex-4"></a>
Explain the reduction's abort and why its favourable hidden choice avoids that abort.

<details><summary>Hint 1</summary>

The simulator does not know one secret component.

</details>
<details><summary>Hint 2</summary>

At a changed position, the signed and forged messages select opposite components.

</details>
<details><summary>Solution</summary>

It aborts if the signing request needs the unknown component at its embedded position and bit. On a favourable choice, that bit is the final forged message's bit at a changed position, so the original signed message selects the opposite known component. The simulator can answer honestly and later extracts the unknown-side preimage from the forgery. The success analysis pays for guessing this favourable event rather than pretending the simulator can sign every request unconditionally.

</details>

### Exercise 5
<a id="digital-signatures-ex-5"></a>
Describe a fresh-message forgery after signatures on $00$ and $11$ under the same two-bit-message one-time key.

<details><summary>Hint 1</summary>

The two answers reveal both alternatives at each position.

</details>
<details><summary>Hint 2</summary>

Choose a third message and mix the corresponding components.

</details>
<details><summary>Solution</summary>

Choose message $01$. Its first component is the first component of the $00$ signature and its second is the second component of the $11$ signature. Both images match their selected public entries, so the pair verifies on an unqueried message. The attack uses two signing queries, outside the one-query theorem. It does not imply an efficient inversion algorithm for the underlying one-way function because both needed preimages were legitimately disclosed.

</details>

### Exercise 6
<a id="digital-signatures-ex-6"></a>
For raw RSA verification modulo fifty-five with exponent three, construct a no-query valid pair starting from signature three.

<details><summary>Hint 1</summary>

Choose the message to be the public image of the signature.

</details>
<details><summary>Hint 2</summary>

Three cubed is already below fifty-five.

</details>
<details><summary>Solution</summary>

Take message twenty-seven and signature three. Verification checks $3^3=27\pmod{55}$ and accepts. No signing oracle, factorisation or inverse exponent was used. The adversary was allowed to choose any fresh message, so selecting an easily signed image is enough. A random-target inversion assumption does not prevent this creation attack on the unencoded signature interface.

</details>

### Exercise 7
<a id="digital-signatures-ex-7"></a>
In the hash-then-sign reduction, identify the two distinct bad-event outcomes and the adversary built for each.

<details><summary>Hint 1</summary>

Ask whether the forged message's digest was signed before.

</details>
<details><summary>Hint 2</summary>

Message freshness and digest freshness are different conditions.

</details>
<details><summary>Solution</summary>

If the digest repeats the queried digest, the fresh final message and earlier message are distinct hash inputs with equal output; a collision-finder obtains them by simulating with its own signing key. If the digest is fresh, a signature adversary forwards the single digest query to its oracle and returns the final accepted fresh-digest signature. Summing these two success bounds proves the composed one-time claim. Neither branch permits unaccounted additional signing queries.

</details>

### Exercise 8
<a id="digital-signatures-ex-8"></a>
Why does hashing variable-length messages not automatically make the Lamport signing key reusable?

<details><summary>Hint 1</summary>

The secret components are still selected by digest bits.

</details>
<details><summary>Hint 2</summary>

More signatures can disclose both choices at many positions.

</details>
<details><summary>Solution</summary>

Hashing changes which fixed-length input is signed but does not change what one signature reveals about the key's component preimages. Further signatures can reveal opposite components, defeating the one-query proof's unrevealed-side argument. Reusable constructions need an additional design and theorem governing multiple keys or queries. Collision resistance addresses repeated digests of distinct messages, not unlimited exposure of the signing key's separate secrets.

</details>

### Exercise 9
<a id="digital-signatures-ex-9"></a>
Does public signature verification hide the signed message? Give the relevant observation and distinguish the forgery game.

<details><summary>Hint 1</summary>

The message is an explicit input to verification.

</details>
<details><summary>Hint 2</summary>

The game limits creation of accepted new pairs, not reading of an honest pair.

</details>
<details><summary>Solution</summary>

An honestly transmitted message/signature pair exposes the message directly. The unforgeability experiment still can be secure, since it asks the adversary to create a valid pair on an unqueried message. Confidentiality needs its own encrypted interface and composition analysis. Public verifiability is a useful separation from a MAC, but it is not a secrecy theorem.

</details>

### Exercise 10
<a id="digital-signatures-ex-10"></a>
State the key and signature sizes of the construction in bits when the one-way function's inputs and outputs have length $n$.

<details><summary>Hint 1</summary>

There are two secret/public entries for every message position.

</details>
<details><summary>Hint 2</summary>

A signature reveals one $n$-bit input per position.

</details>
<details><summary>Solution</summary>

Each secret and public key contains $2n$ entries of $n$ bits, hence $2n^2$ bits apart from format metadata. A signature contains $n$ entries of $n$ bits, hence $n^2$ bits. Verification evaluates the function once per message position. These polynomial sizes make the reduction efficient while showing that the construction is not being claimed compact merely because its proof is simple.

</details>

## Summary and sources

Digital signatures have a public verification interface and a chosen-message creation game. The explicit one-time construction reduces forgery to one-way inversion with a quantified guessing loss. Two signatures reveal why its one-use hypothesis matters. Hashing extends message length under a collision reduction, while raw RSA illustrates the gap between inversion and forgery. The next chapter instantiates group-based cryptography in finite elliptic-curve subgroups.

Katz and Lindell, *Introduction to Modern Cryptography*, is the comparison text for one-time signatures, hash composition and signature experiments. The constructions and reductions are developed here from their stated assumptions; no security theorem for an unspecified encoded RSA or reusable signature implementation is asserted.
