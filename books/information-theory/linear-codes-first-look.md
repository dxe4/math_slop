
# Linear Codes: A First Look

Preparation is linear algebra over finite fields, kernels, rank-nullity and elementary counting. This L3 first look proves the algebraic bridge and preserves the older finite-algebra source; the full L4 coding continuation is separately commissioned.

## Redundancy as an algebraic constraint

An error-correcting code is a subset $C$ of a finite word space $\mathbb F_q^n$, where $q$ is a prime power and $\mathbb F_q$ is a field with $q$ elements. When $q$ is not prime, this field is not the integers modulo $q$. For example integers modulo four have zero divisors and are not the field with four elements.

A linear code is a vector subspace of dimension $k$, so it contains $q^k$ words. Its symbol rate is $k/n$. If compared with bit-based channel rates, the corresponding information per transmitted field symbol is $(k/n)\log_2q$ bits.

The Hamming weight $\operatorname{wt}(x)$ counts nonzero coordinates. Hamming distance $d_H(x,y)=\operatorname{wt}(x-y)$ counts differing coordinates and obeys the triangle inequality: every position where $x$ and $z$ differ must differ in at least one of the two comparisons through $y$.

For a code with at least two words, its minimum distance is
$$
d=\min_{c\ne c'\in C}d_H(c,c').
$$
For a nonzero linear code, subtraction stays inside the code, giving
$$
d=\min_{0\ne c\in C}\operatorname{wt}(c).
$$
This is the reason linear algebra can turn an all-pairs distance problem into a search over nonzero codewords. The singleton zero code needs a separate distance convention and is omitted from distance formulas below.

## Generator and parity-check matrices

Choose a basis of the $k$-dimensional code as rows of a rank-$k$ matrix $G$. A message row vector $u\in\mathbb F_q^k$ encodes as $c=uG$. Full row rank makes this map injective; every codeword has exactly one message.

The orthogonal complement is
$$
C^\perp=\{v\in\mathbb F_q^n:cv^T=0\text{ for every }c\in C\}.
$$
The ordinary nondegenerate coordinate pairing gives dimension $n-k$. Let a basis of this dual code be the rows of $H$, an $(n-k)\times n$ matrix of full row rank. Then
$$
C=\{c:Hc^T=0\},\qquad HG^T=0.
$$
Containment follows from orthogonality, and equality follows because the kernel has dimension $k$ by rank-nullity.

After permuting coordinates and choosing a suitable message basis, one can write $G=[I_k\mid A]$. Then
$$
H=[-A^T\mid I_{n-k}]
$$
is a parity-check matrix. The minus sign disappears over characteristic two but must be retained over general fields. Encoding is systematic: the first $k$ codeword coordinates reproduce the message.

Changing a generator basis does not change the code; multiplying $G$ on the left by an invertible matrix only relabels messages. Permuting coordinates also preserves Hamming distances, although it changes the literal transmitted positions. Such equivalences must not be confused with equality of source files or codeword labels.

## Syndromes identify error cosets

Suppose $y=c+e$ is received, with $c\in C$. Its syndrome is
$$
s=Hy^T=He^T.
$$
It depends on the error but not on which codeword was sent. Two errors have the same syndrome exactly when their difference is a codeword, so syndromes identify cosets of $C$ in the ambient space.

There are $q^{n-k}$ syndromes because $H$ has full row rank. A syndrome decoder chooses one representative error for each syndrome and returns $y-e_s$. This is a codeword since its syndrome is zero.

The representative need not equal the actual error. If it differs by a nonzero codeword, the decoder returns the wrong valid codeword. A zero syndrome likewise means “the received word is in the code,” not “no transmission error occurred.” An error that is itself a nonzero codeword is undetected.

On a binary symmetric channel with crossover less than one-half and equiprobable codewords, maximum-likelihood decoding minimises Hamming distance to the received word. Equivalently choose a minimum-weight representative in each syndrome coset. This conclusion uses the channel likelihood; syndrome algebra alone does not define the most likely error under every possible noise law.

## Detection, correction and erasures

A code of minimum distance $d$ detects every nonzero error of weight below $d$. If such an error changed one codeword into another, their distance would be less than $d$, a contradiction. Conversely a minimum-weight nonzero codeword is an undetectable error of weight $d$, so the guarantee is sharp.

**Theorem 12.1.** Every pattern of at most $t$ symbol errors is uniquely correctable if $2t<d$.

**Proof.** If a received word were within distance $t$ of two distinct codewords, their distance would be at most $2t$ by the triangle inequality, contradicting minimum distance. Nearest-codeword decoding therefore has a unique answer whenever the true error weight is at most $t$. ∎

If $2t\ge d$, choose two codewords at distance $d$ and split their differing coordinates into two parts of size at most $t$. A word matching one codeword on one part and the other on the remainder lies within $t$ of both. Hence no decoder can guarantee correction of every such pattern.

An erasure gives a known unreliable position rather than an unmarked wrong value. Any fewer than $d$ erasures are recoverable: two codewords agreeing outside those positions would differ in fewer than $d$ positions. With $t$ errors and $e$ erasures, the same argument gives unique recovery when $2t+e<d$, because two compatible codewords can differ only at erased positions and at the union of their error positions.

These are worst-case combinatorial guarantees. A stochastic channel can have useful performance beyond the guaranteed radius on many likely patterns. Conversely, capacity is an asymptotic probability criterion and does not imply a code corrects every error pattern below a particular fraction.

## Two counting bounds

**Singleton bound.** Delete any $d-1$ coordinates from every codeword. Distinct words remain distinct, since otherwise they originally differed in at most $d-1$ positions. Therefore a code of size $M$ satisfies $M\le q^{n-d+1}$. For a linear code,
$$
d\le n-k+1.
$$
A code attaining this bound is maximum distance separable. The proof applies to nonlinear codes in its size form as well.

**Hamming bound.** If $2t<d$, radius-$t$ Hamming balls around codewords are disjoint. Each contains
$$
V_q(n,t)=\sum_{j=0}^t\binom nj(q-1)^j
$$
words: choose changed positions and then a nonzero difference at each. All balls lie inside $q^n$ ambient words, so
$$
|C|V_q(n,t)\le q^n.
$$
For linear codes this is $q^kV_q(n,t)\le q^n$. Equality means the guaranteed decoding balls partition the whole space, a property called perfect packing at that radius.

The bounds constrain different features. Singleton uses puncturing; Hamming uses disjoint neighbourhood volumes. Neither bound alone constructs a code attaining it, and neither says that every mathematically possible parameter triple is realised.

## Columns reveal small distances

For a linear code with parity-check matrix $H$, a codeword supported on positions $j_1,\ldots,j_w$ gives a linear relation among those columns, with its nonzero entries as coefficients. Conversely any nontrivial relation among a set of columns supplies a nonzero kernel word supported on that set. Thus the minimum distance is the smallest number of linearly dependent columns.

A zero column gives distance one. Two proportional nonzero columns give a weight-two codeword. Over the binary field, proportional nonzero columns are simply equal columns. Over larger fields, different columns can still be proportional, so distinctness alone does not rule out distance two.

For binary Hamming codes, take as columns all nonzero vectors in $\mathbb F_2^r$, with $r\ge2$. There are $n=2^r-1$ columns and rank $r$, since the standard basis columns occur. No column is zero and no two are equal, so distance is at least three. Two distinct nonzero columns $a,b$ have nonzero sum $a+b$, which is another column; those three columns sum to zero. Hence distance is exactly three.

The resulting parameters are $[2^r-1,2^r-1-r,3]$. A single error has syndrome equal to its column, so its position is identified directly. This is an explicit efficient decoder for a restricted error guarantee, distinct from the random-code existence proof.

## The continuation into coding theory

This chapter gives the linear-algebra bridge, not the full algebraic coding curriculum. Cyclic, BCH and Reed–Solomon codes add polynomial structure and distance arguments. The L4 [Error-Correcting Codes chapter on linear codes](../error-correcting-codes/linear-codes.md) is the primary continuation for information sets, puncturing, shortening and dual identities. Its actual source and native chapter identity are present.

The retained [algebraic coding source](../finite-algebra-computation/algebraic-coding-theory.md) remains available for its original finite-field and polynomial examples. Its old identity and exercises are preserved. The present chapter has independent exercises and develops the proofs needed for the information-theory route.

A code protects integrity against specified noise. It does not by itself provide confidentiality, authentication or adversarial security. A linear codeword may reveal the entire original message to any observer who knows the generator matrix and sees an uncorrupted transmission. Cryptographic entropy in the final chapter will keep these purposes separate.

## Recovering erased symbols by a linear system

If coordinates indexed by $E$ are erased, split the parity-check equation into known and unknown coordinates:
$$
H_Ec_E^T=-H_{E^c}c_{E^c}^T.
$$
A valid transmitted word supplies at least one solution. That solution is unique exactly when the columns in $H_E$ are linearly independent, because the difference of two solutions lies in the kernel of this restricted matrix.

The minimum-distance column criterion therefore proves that every erasure set of size below $d$ is recoverable by solving this system. Larger sets can sometimes be recovered too, provided their particular columns remain independent. This identifies both a worst-case guarantee and a sharper pattern-specific condition, without claiming that distance alone describes every erasure pattern.

## Worked example 12.1: The repetition code

Over $\mathbb F_2$, let $G=(1,1,1)$ and $H=\begin{pmatrix}1&1&0\\0&1&1\end{pmatrix}$. The code is $\{000,111\}$ with parameters $[3,1,3]$. It corrects one error by majority vote. Its syndrome columns are $10,11,01$, so the three possible single errors have distinct nonzero syndromes. The Hamming bound is tight: $2(1+3)=8$, covering the entire binary word space.

## Worked example 12.2: A parity check detects but cannot always correct

The even-parity code of length four has all words whose coordinate sum is zero. Its dimension is three and its minimum distance is two. A single error changes parity and is always detected. But every single-error position has the same one-bit syndrome, so the position cannot be uniquely identified. The distance condition agrees: $2t<2$ allows no positive guaranteed correction radius, even though one erasure is recoverable.

## Worked example 12.3: A seven-symbol Hamming code

Take the seven nonzero binary triples as parity-check columns. The matrix has rank three, so the code dimension is four. Distinct nonzero columns give distance at least three, and columns $100,010,110$ sum to zero, giving distance exactly three. There are sixteen codewords and each radius-one ball contains eight received words, so $16\cdot8=128=2^7$. Syndrome zero chooses no error; every nonzero syndrome identifies one column and hence one bit to flip.

## Erasures reveal the rank of a coordinate projection

Take a uniform message vector for a full-rank linear encoder over a finite field. Conditional on an erasure pattern independent of the message, the receiver sees precisely the surviving coordinate projection of the codeword. Its matrix rank determines the remaining uncertainty exactly.

If that projected generator has rank $r$, its output is uniform on a subspace containing the field size raised to power $r$ words. Each output has the same number of message preimages, namely the field size raised to power $k-r$. Consequently posterior message entropy is $(k-r)\log_2q$, and the information retained by that erasure pattern is $r\log_2q$.

This is more detailed than the minimum-distance guarantee. Distance certifies every erasure pattern smaller than a threshold. Beyond that threshold, some particular surviving coordinate sets can still have full rank and recover the message, while others cannot.

The best conditional single-guess success probability is also exact under the uniform message law: it is the reciprocal of the number of remaining message preimages. A decoder can select any one representative from each equally likely fibre, but no choice can improve that conditional probability.

Since the erasure pattern itself is independent of the message, average message information in the pattern plus surviving values is the average projected rank times the logarithm of field size. This gives an operational bridge between finite-field linear algebra and the erasure-channel information calculation.

For an MDS code, every set of $k$ coordinates is an information set, and every smaller set has independent generator columns. Its projected rank is therefore the smaller of message dimension and surviving-coordinate count. Such a code loses no rank until too few coordinates remain, which is precisely its strong erasure property.

The exact posterior and guessing formulas use uniform messages. With a nonuniform prior, fibres need not have uniform posterior mass, although full-rank unique recovery remains a deterministic property. Stating the message law is therefore necessary when moving from a code’s algebra to entropy or decision probabilities.

This calculation also clarifies why a zero-syndrome or full-rank statement is not a generic confidence interval. It certifies a reconstruction property under a specified observation pattern; probability enters only after a distribution over messages and erasures has been declared.

## Exercises

### Exercise 12.1
<a id="linear-codes-first-look-ex-1"></a>

Prove minimum distance equals minimum nonzero weight for a nonzero linear code.

<details>
<summary>Hint 1</summary>

Subtract two codewords.

</details>
<details>
<summary>Hint 2</summary>

Every nonzero codeword is a difference from zero.

</details>
<details>
<summary>Solution</summary>

Every pair difference lies in the code and is nonzero, so pair distance is at least the minimum nonzero weight. Conversely a minimum-weight nonzero word and zero form a pair attaining that weight. The two minima are therefore equal.

</details>

### Exercise 12.2
<a id="linear-codes-first-look-ex-2"></a>

Why is the kernel of a full-rank parity-check matrix the whole code, not only a superset?

<details>
<summary>Hint 1</summary>

Use containment and dimensions.

</details>
<details>
<summary>Hint 2</summary>

Apply rank-nullity.

</details>
<details>
<summary>Solution</summary>

Orthogonality puts $C$ inside the kernel. A rank-$n-k$ matrix has kernel dimension $k$, the same as $C$. A subspace contained in another subspace of equal finite dimension must equal it.

</details>

### Exercise 12.3
<a id="linear-codes-first-look-ex-3"></a>

Derive the systematic parity-check matrix over a general field.

<details>
<summary>Hint 1</summary>

Multiply it by the transpose of the systematic generator.

</details>
<details>
<summary>Hint 2</summary>

The two block products must cancel.

</details>
<details>
<summary>Solution</summary>

For $G=[I_k\mid A]$, take $H=[-A^T\mid I_{n-k}]$. Then $HG^T=-A^T+A^T=0$, and the identity block gives full row rank. In characteristic two the negative sign equals the positive sign, but this simplification is not valid in every field.

</details>

### Exercise 12.4
<a id="linear-codes-first-look-ex-4"></a>

Can a nonzero error have zero syndrome?

<details>
<summary>Hint 1</summary>

A codeword lies in the parity-check kernel.

</details>
<details>
<summary>Hint 2</summary>

Take the error itself to be a nonzero codeword.

</details>
<details>
<summary>Solution</summary>

Yes. Every nonzero $e\in C$ satisfies $He^T=0$. Adding it to a transmitted codeword produces another codeword, so the parity checks do not detect it. Zero syndrome certifies code membership only.

</details>

### Exercise 12.5
<a id="linear-codes-first-look-ex-5"></a>

Show fewer than $d$ erasures are uniquely recoverable.

<details>
<summary>Hint 1</summary>

Compare two possible completions.

</details>
<details>
<summary>Hint 2</summary>

Their difference is confined to erased coordinates.

</details>
<details>
<summary>Solution</summary>

If two distinct codewords agreed on every unerased position, their distance would be at most the number of erasures, below $d$. This contradicts minimum distance. Hence at most one completion is a codeword.

</details>

### Exercise 12.6
<a id="linear-codes-first-look-ex-6"></a>

Apply Singleton to a linear code of length ten and dimension six.

<details>
<summary>Hint 1</summary>

Substitute into $d\le n-k+1$.

</details>
<details>
<summary>Hint 2</summary>

Interpret the error guarantee separately.

</details>
<details>
<summary>Solution</summary>

The bound gives $d\le5$. Even if distance five is attained, the guaranteed error correction radius is at most two, since $2t<5$. The inequality alone does not prove a code with those parameters exists.

</details>

### Exercise 12.7
<a id="linear-codes-first-look-ex-7"></a>

Why do distinct nonzero columns fail to rule out distance two over larger fields?

<details>
<summary>Hint 1</summary>

Columns can be nontrivial scalar multiples.

</details>
<details>
<summary>Hint 2</summary>

A two-column relation gives a weight-two kernel word.

</details>
<details>
<summary>Solution</summary>

Over $\mathbb F_3$, columns $v$ and $2v$ are distinct when $v\ne0$, but $v+2v=0$. They yield a relation supported on two coordinates and hence a weight-two codeword. The binary simplification relies on there being only one nonzero scalar.

</details>

### Exercise 12.8
<a id="linear-codes-first-look-ex-8"></a>

Compute the radius-one ball volume over a $q$-symbol alphabet.

<details>
<summary>Hint 1</summary>

There is one unchanged word.

</details>
<details>
<summary>Hint 2</summary>

Choose one position and one of $q-1$ changes.

</details>
<details>
<summary>Solution</summary>

The volume is $1+n(q-1)$. A distance-at-least-three code therefore satisfies $|C|(1+n(q-1))\le q^n$. This is a necessary packing condition, not a construction theorem.

</details>

### Exercise 12.9
<a id="linear-codes-first-look-ex-9"></a>

Does linear error correction keep a message secret?

<details>
<summary>Hint 1</summary>

A generator matrix is an injective known map.

</details>
<details>
<summary>Hint 2</summary>

An uncorrupted codeword can be decoded by anyone with the map.

</details>
<details>
<summary>Solution</summary>

No. Error correction adds structured redundancy for recovery under a noise model. A public linear generator usually lets any observer invert the encoding on its image. Confidentiality and authentication require additional cryptographic assumptions and mechanisms.

</details>

### Exercise 12.10
<a id="linear-codes-first-look-ex-10"></a>

Relate binary code rate to information rate and explain the nonbinary conversion.

<details>
<summary>Hint 1</summary>

A dimension-$k$ code has $q^k$ messages.

</details>
<details>
<summary>Hint 2</summary>

Take its base-two logarithm.

</details>
<details>
<summary>Solution</summary>

The message logarithm is $k\log_2q$ bits, so information rate per transmitted field symbol is $(k/n)\log_2q$. For binary codes this equals $k/n$. Comparing a nonbinary symbol rate directly with a bit capacity without this conversion mixes units.

</details>

## Summary

Linear codes turn message redundancy into subspace constraints. Generators encode, parity checks form syndromes, and minimum distance controls worst-case detection, correction and erasures. Singleton and Hamming bounds constrain parameters, while Hamming codes supply an explicit single-error construction.
