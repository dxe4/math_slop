
# RSA and Factoring

RSA starts from an arithmetic permutation whose inverse is easy with a factorisation trapdoor. Its correctness proof must include nonunit messages, and its security discussion must distinguish factoring, inversion and an encoded encryption experiment. None of these distinctions is optional: a deterministic permutation can be difficult to invert on random inputs while being easy to distinguish on two chosen plaintexts.

This chapter uses the CRT, inverse criterion and exponentiation algorithm from Chapter 2. The [Number Theory and Cryptography laboratory](../../apps/atlas/index.html#/labs?lab=visual-lab-number-theory-cryptography) accompanies the small residue calculations. The Quarto Number Theory chapter supplies the original eleven/seventeen example, which is retained there. Here the examples are developed further and joined to complete reductions with explicit hypotheses.

## The exact permutation domain

Choose distinct primes $p,q$, set $N=pq$, and put $\lambda(N)=\operatorname{lcm}(p-1,q-1)$. Choose a positive public exponent $e>1$ coprime to this number and a positive $d$ satisfying $ed\equiv1\pmod{\lambda(N)}$. Using $\varphi(N)=(p-1)(q-1)$ instead is sufficient. The public arithmetic map sends a residue $m$ to $m^e$ modulo $N$.

**Theorem 8.1 (All-residue correctness).** Under these hypotheses, $(m^e)^d=m$ modulo $N$ for every residue $m$, including nonunits.

*Proof.* Since $p-1$ divides $ed-1$, write $ed=1+k(p-1)$ with a nonnegative integer $k$. Modulo $p$, if $p$ divides $m$, both $m^{ed}$ and $m$ are zero because the exponent is positive. Otherwise Fermat's theorem gives $m^{ed}=m(m^{p-1})^k\equiv m$. Apply the same argument modulo $q$. The moduli are distinct primes, so the coprime CRT makes the two congruences equivalent to equality modulo $N$. ∎

The inverse exponent therefore makes the map a permutation on all residues. Applying Euler's theorem directly would justify only the unit branch. Cancelling a possibly nonunit message or treating the ring as a field would miss the other branch. A proof can establish a stronger domain than the theorem it invokes only by supplying that additional argument.

## Worked example 1: the retained eleven/seventeen key

Take $p=11,q=17$, so $N=187$ and $\varphi(N)=160$. Choose $e=7,d=23$, since $7\cdot23=161$. For message forty-two, repeated squaring gives residues eighty-one and sixteen at the square and fourth power. Multiplying those with forty-two gives ciphertext fifteen.

Decrypt through the two prime moduli. Modulo eleven, fifteen is four and $4^{23}\equiv4^3\equiv9$. Modulo seventeen, fifteen is minus two and $(-2)^{23}\equiv(-2)^7\equiv8$. Reconstruct a residue congruent to nine modulo eleven and eight modulo seventeen. Writing it as $9+11t$, the second condition requires $11t\equiv16\pmod{17}$. The inverse of eleven is fourteen, so $t\equiv3$ and the recovered residue is forty-two.

This keeps encryption, private exponentiation and CRT reconstruction visible. All numbers are small enough for hand arithmetic. Recovering this message is a correctness calculation, not a cryptanalytic lower bound. The generation distribution of a growing RSA family must be stated separately before any one-wayness assumption has a meaning.

## Worked example 2: a nonunit message

Let $p=5,q=11,N=55,e=3,d=27$. The product of the exponents is eighty-one, congruent to one modulo the totient forty. Message ten is a nonunit because it shares the factor five with the modulus. Its cube is one thousand, congruent to ten modulo fifty-five.

Decryption still returns ten. Modulo five both the original and recovered values are zero. Modulo eleven, ten is minus one, and the positive odd exponent eighty-one preserves minus one. CRT identifies the recovered residue with ten. An attempted cancellation of the message in the composite ring would be invalid, but the two-branch proof remains valid. This example shows why the theorem was formulated for residues rather than silently restricted after the fact.

## Worked example 3: repeated primes change the theorem

If the two primes are both three, the modulus is nine and its totient is six, not four. Even using the true totient, $e=d=5$ gives exponent product twenty-five congruent to one modulo six. Message three encrypts to zero and decrypts to zero, failing to recover three. The unit-group exponent identity does not extend to this nonunit as it did for a product of distinct primes.

Thus the distinctness hypothesis is part of the all-residue theorem. It is not a cosmetic preference in the displayed key-generation step. A different domain restricted to units could retain a valid exponent permutation under other hypotheses, but that would be a different scheme and theorem. The example separates an invalid claim from a correctly narrowed one.

## Factoring gives inversion: the full reduction

Fix a key-generation distribution producing the distinct-prime public moduli and exponents above. The RSA inversion experiment draws a residue $x$ from its stated distribution, supplies $y=x^e$ with the public key and asks for its inverse residue. The factoring experiment asks for a proper factor of the same generated modulus. These distributions, rather than arbitrary integer inputs, define the assumption relationship.

**Theorem 8.2.** An algorithm finding a proper factor of the generated semiprime with probability $\epsilon$ gives an RSA inverter with success at least $\epsilon$, with the following arithmetic overhead.

*Proof.* Run the factor algorithm on $N$. Check its proposed factor is strictly between one and $N$ and divides $N$. Under the promised distinct-semiprime distribution it is one of the two prime factors; the quotient supplies the other. Compute the totient, use extended Euclid to invert $e$ modulo it, choose the positive inverse representative, and return $y^d\bmod N$. Theorem 8.1 proves the answer correct for every supplied residue whenever factoring succeeded. The reduction uses one factoring call, exact division, gcd arithmetic and one modular exponentiation, all with polynomial bit overhead for the encoded key and exponent sizes. ∎

Hence RSA inversion hardness implies hardness of factoring that generated family. The reduction does **not** prove that factoring hardness implies RSA inversion hardness. An inversion algorithm need not reveal a factor through this argument. Nor does either assumption establish confidentiality of raw deterministic RSA. The direction of each wrapper is the content of the theorem, not a reversible arrow granted by the word related.

## Why raw RSA is not an encryption theorem

An adversary choosing two distinct messages can publicly exponentiate both and compare the challenge with their encryptions. Since the map is a permutation, the two ciphertexts differ, so it identifies the message with certainty. No inversion or factoring is needed. Thus one-wayness on a generated input distribution is compatible with failure of chosen-message indistinguishability.

The map is also multiplicatively malleable: multiplying a ciphertext by $s^e$ changes its decrypted residue to $sm$ modulo $N$. A theorem about an encoded encryption construction must analyse its actual encoding and adversarial interface. It cannot be supplied by renaming this permutation encryption. The different assumptions used for particular standard encodings are not proved here.

## A one-bit construction with an explicit hard-core assumption

A small theoretical construction makes the missing ingredient precise. Encode residues as fixed-length binary strings of length $L=\lceil\log_2N\rceil$. For an independent uniform bitstring $r$ of that length, let $h_r(x)$ be the binary inner product of the encoding of $x$ and $r$, modulo two. Assume that the tuples
$$ (N,e,x^e,r,h_r(x))\quad\text{and}\quad(N,e,x^e,r,U_1) $$
are computationally indistinguishable for generated keys and uniformly sampled residues $x$. This is a **hard-core-bit assumption** stated as its own distributional claim. Its derivation from suitable one-wayness premises is a separate hard-core theorem, not true by the definition of a one-way map alone.

Encrypt a bit $m$ by sampling $x,r$ and returning $(x^e,r,m\oplus h_r(x))$. Decryption uses the trapdoor to recover $x$ and recomputes the bit mask. Correctness follows from Theorem 8.1 and exclusive-or cancellation.

**Theorem 8.3 (Conditional one-bit secrecy).** In the one-challenge public-key experiment on bit messages, the guessing advantage of an efficient adversary is at most the corresponding hard-core tuple distinguishing gap.

*Proof.* A tuple distinguisher gives its public key to the encryption adversary, receives its two bit candidates, samples a uniform challenge bit $b$, and returns the tuple's first two ciphertext fields together with the selected message exclusive-ored with the supplied final tuple bit. Output one exactly when the adversary guesses $b$. With the real tuple the simulation is the construction's encryption distribution. With the random tuple bit, its final field is a fresh uniform mask independent of the public fields and selected messages, so success is one half. The output gap equals the real guessing advantage. The wrapper uses one adversary execution and constant-bit masking in addition to parsing the tuple. ∎

This construction illustrates the role of an assumed unpredictable-looking bit accompanying a trapdoor image. It does not identify the hard-core tuple claim with mere factoring hardness, and it does not offer a proof of any particular padding standard. Reusing the same sampled mask for several message bits recreates pad reuse. A longer-message theorem must use fresh randomness or another proved construction and account for its loss.

## A CRT fault reveals a factor

Suppose a correct result $m$ and a faulty reconstruction $m'$ agree modulo $p$ but differ modulo $q$. Then $p$ divides their difference and $q$ does not, so $\gcd(m-m',N)=p$. For $N=55$, take correct result eight and faulty result thirteen: they agree modulo five but differ modulo eleven, and the gcd of their difference with fifty-five is five.

This is an exact conditional factor-recovery argument. It does not assert that a particular machine experiences that fault or that a timing observation has the same information. The stated fault model is extra to the black-box inversion experiment. The example explains why an algebraic CRT speedup can change the implementation threat model without invalidating its honest correctness proof.

## A multiplicative blinding identity

For a unit $r$ modulo $N$, multiply a ciphertext $c=m^e$ by the public value $r^e$. The altered ciphertext is $(mr)^e$, so all-residue correctness makes private exponentiation return $mr$. Multiplying by the inverse of $r$ recovers $m$. This remains correct when $m$ is a nonunit: only the blinding factor needs an inverse, while the RSA theorem already covered every message residue.

For the fifty-five modulus, take message eight, ciphertext seventeen and blinding factor two. Its cubed public factor is eight, so the altered ciphertext is $136\equiv26$. It is the cube of sixteen modulo fifty-five, and decryption therefore returns sixteen. The inverse of two is twenty-eight; multiplying gives $448\equiv8$, the original message.

The unit requirement has concrete force. A blinding factor sharing a prime divisor with the modulus cannot be cancelled by an inverse, and would change the recovery argument. Sampling such a factor also exposes a proper gcd when it is neither one nor the whole modulus. The transformation should therefore be specified as an operation on units rather than arbitrary residues labelled random.

This algebraic identity is often useful in discussions of how a private operation's input can be transformed and later untransformed. It does not prove resistance to timing, power or other physical observations. Such a claim would need a leakage model and an analysis of the complete transformed computation, including selection and inversion of the blinding factor. The present theorem is exactly its arithmetic correctness relation. Keeping that scope visible prevents a correct input transformation from being treated as an implementation-security certificate.

## Exercises

### Exercise 1
<a id="rsa-factoring-ex-1"></a>
For $p=13,q=19,e=5$, compute a positive inverse exponent modulo the totient and encrypt message ten.

<details><summary>Hint 1</summary>

The totient is twelve times eighteen.

</details>
<details><summary>Hint 2</summary>

Five times one hundred seventy-three differs from a multiple of the totient by one.

</details>
<details><summary>Solution</summary>

The modulus is 247 and totient 216. Since $5\cdot173=865=4\cdot216+1$, take $d=173$. For encryption, $10^2=100$, $10^4\equiv10000\equiv120\pmod{247}$, and $10^5\equiv1200\equiv212$. Theorem 8.1 then guarantees recovery of ten by the inverse exponent. The finite arithmetic supplies a key and ciphertext, not a security claim about this small modulus.

</details>

### Exercise 2
<a id="rsa-factoring-ex-2"></a>
Explain why using Euler's theorem alone omits some legal messages in the all-residue correctness claim.

<details><summary>Hint 1</summary>

Euler's theorem assumes the base is a unit.

</details>
<details><summary>Hint 2</summary>

A message can share one prime factor with the modulus.

</details>
<details><summary>Solution</summary>

Euler gives the exponent identity for residues coprime to $N$. Nonunit messages are also legal residues in the stated permutation. Reducing separately modulo each prime treats a divisible message as zero in that field and uses Fermat only in the nonzero branch. CRT then recombines the two results. This additional argument is what justifies the full domain; cancelling the message in the original ring would not.

</details>

### Exercise 3
<a id="rsa-factoring-ex-3"></a>
Which hardness implication follows from Theorem 8.2? Why is its converse not proved there?

<details><summary>Hint 1</summary>

Identify which algorithm the wrapper calls as a subroutine.

</details>
<details><summary>Hint 2</summary>

It builds an inverter from a factor finder, not the other way around.

</details>
<details><summary>Solution</summary>

If inversion is hard, factoring the same generated moduli must be hard, since an efficient factor finder would supply an efficient inverter. The wrapper has no method converting an arbitrary inverter into a factor finder, so it does not establish inversion hardness from factoring hardness. The precise direction is essential. The conclusion also stays with the stated key distribution rather than silently asserting a theorem about every integer.

</details>

### Exercise 4
<a id="rsa-factoring-ex-4"></a>
Give the chosen-plaintext distinguisher against raw RSA without factoring or inversion.

<details><summary>Hint 1</summary>

The public exponentiation algorithm can be evaluated on the candidates.

</details>
<details><summary>Hint 2</summary>

Permutation correctness makes their ciphertexts distinct.

</details>
<details><summary>Solution</summary>

Choose distinct legal messages, exponentiate them under the public key, and compare the challenge with those two values. The matching value identifies the hidden message with certainty because the permutation cannot map the distinct inputs to one ciphertext. This wins the indistinguishability game even if inversion of a random image were hard. One-wayness and chosen-message secrecy are therefore different security tasks.

</details>

### Exercise 5
<a id="rsa-factoring-ex-5"></a>
Derive raw RSA's multiplicative ciphertext transformation and state why it is not an inversion algorithm.

<details><summary>Hint 1</summary>

Multiply $m^e$ by a publicly computed $s^e$.

</details>
<details><summary>Hint 2</summary>

Exponentiation respects multiplication in the residue ring.

</details>
<details><summary>Solution</summary>

The modified value is $m^e s^e=(ms)^e\pmod N$. Decryption returns the product residue $ms$. This alters the plaintext in a controlled way but does not reveal $m$ from a single image. An adversarial interface offering decryption of transformed ciphertexts could make the relation more powerful, but that is extra information. The equation demonstrates malleability while retaining the distinction from direct inversion.

</details>

### Exercise 6
<a id="rsa-factoring-ex-6"></a>
In the one-bit theorem, why is the mask uniform in the ideal tuple even after the public image and auxiliary string are visible?

<details><summary>Hint 1</summary>

The ideal tuple specifies a fresh independent bit explicitly.

</details>
<details><summary>Hint 2</summary>

The theorem compares joint distributions, not just an isolated bit's frequency.

</details>
<details><summary>Solution</summary>

The comparison distribution supplies an independent uniform final bit conditional on the other tuple fields. Masking either chosen bit message therefore produces the same conditional ciphertext-bit distribution. The real tuple's correlation with the hidden preimage is exactly what the hard-core assumption controls. Merely observing balanced mask bits without that joint indistinguishability would not justify the reduction.

</details>

### Exercise 7
<a id="rsa-factoring-ex-7"></a>
What happens to the inner-product mask if the auxiliary string is publicly fixed to all zeros rather than generated as stated?

<details><summary>Hint 1</summary>

Every binary inner product with the zero vector is zero.

</details>
<details><summary>Hint 2</summary>

The final ciphertext bit would then equal the message.

</details>
<details><summary>Solution</summary>

The mask is always zero, so the construction directly exposes its bit message. This changes the distribution in the assumption, which sampled the auxiliary string independently uniformly. The occasional zero string in that stated distribution is included in its total distinguishing gap; forcing it on every execution is a different experiment. A theorem cannot keep its conclusion while deleting that random-generation hypothesis.

</details>

### Exercise 8
<a id="rsa-factoring-ex-8"></a>
Verify the factor leakage from correct result eight and faulty result thirteen modulo fifty-five. State the required congruence pattern.

<details><summary>Hint 1</summary>

Take the gcd of their difference with the modulus.

</details>
<details><summary>Hint 2</summary>

They agree modulo one prime factor and disagree modulo the other.

</details>
<details><summary>Solution</summary>

Their difference is minus five, whose gcd with fifty-five is five. Both results are three modulo five, but eight and thirteen reduce to eight and two modulo eleven. Thus the difference is divisible by exactly the first prime factor. The conditional fault model supplies that information; it is not implied by the ordinary honest decryption interface or by a generic report that a computation failed.

</details>

### Exercise 9
<a id="rsa-factoring-ex-9"></a>
Why must the reduction check a proposed factor before using it, even under a probabilistic factoring success hypothesis?

<details><summary>Hint 1</summary>

A failed subroutine call can return invalid data.

</details>
<details><summary>Hint 2</summary>

Proper divisibility is efficiently checkable.

</details>
<details><summary>Solution</summary>

The success guarantee covers only a fraction of calls. On other calls the output may be one, the full modulus, a nondivisor or malformed. Checking proper divisibility makes the wrapper's successful branch well defined and ensures it computes the promised factorisation on a valid semiprime. The inversion-success lower bound then applies precisely to the factor-success event, without treating arbitrary failure output as valid trapdoor information.

</details>

### Exercise 10
<a id="rsa-factoring-ex-10"></a>
Does Theorem 8.3 prove a standard RSA padding scheme secure under factoring hardness? State exactly which assumption and construction it uses.

<details><summary>Hint 1</summary>

Read its tuple distribution and one-bit encryption algorithm.

</details>
<details><summary>Hint 2</summary>

Neither an arbitrary encoding nor the factoring-to-inversion converse appears in the proof.

</details>
<details><summary>Solution</summary>

No. It proves secrecy for the displayed one-bit construction under the explicitly stated hard-core tuple indistinguishability assumption. It does not prove that assumption from factoring hardness, and it does not analyse another padding format. The theorem's value is the complete transfer between its two stated experiments. A different encoding, message domain or assumption requires its own connecting theorem rather than a change of name.

</details>

## Summary and provenance

RSA's distinct-prime CRT proof covers every residue. Factoring supplies inversion with explicit arithmetic overhead, while the reverse hardness implication is not established. Raw deterministic RSA fails chosen-plaintext secrecy. A separate hard-core assumption yields the displayed one-bit construction through a full simulation, and a CRT fault illustrates another observation model. The next chapter treats signatures through their own chosen-message creation game.

The arithmetic seed is the retained Quarto Number Theory chapter “Public-Key Cryptography”, including its eleven/seventeen example and nonunit CRT proof; both remain unchanged there. The Number Theory proof-reference source supplies the arithmetic/security distinction. Katz and Lindell, *Introduction to Modern Cryptography*, is the comparison text. Standard hard-core constructions and encoded RSA theorems are external topics rather than proofs claimed by this chapter.
