
# Linear Codes

Preparation is the L3 linear-code first look, finite fields, rank-nullity and orthogonal complements. This L4 chapter builds the retained finite-algebra source into a proof-based treatment; every field operation uses the declared prime-power field.

This chapter expands the generator, parity-check and syndrome ideas in Euler’s retained [Algebraic Coding Theory](../finite-algebra-computation/algebraic-coding-theory.md), together with the new [L3 first look](../information-theory/linear-codes-first-look.md). The original finite-algebra source remains unchanged, including its exercises. The present L4 treatment adds information sets, puncturing, shortening and dual identities with new exercise identities.

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

**Theorem 2.1.** Every pattern of at most $t$ symbol errors is uniquely correctable if $2t<d$.

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


## Information sets and exact encoding

A set of $k$ coordinate positions is an information set if restriction to those positions maps $C$ bijectively onto $\mathbb F_q^k$. A rank-$k$ generator has some nonsingular $k\times k$ column submatrix, by the rank characterisation through minors. Choose those positions and multiply the generator on the left by the inverse submatrix. After a coordinate permutation, this produces $[I_k\mid A]$.

Conversely, if restriction to a $k$-coordinate set is injective, its domain and codomain both have $q^k$ elements, so it is bijective. This explains why an information set is a property of coordinate restriction, rather than an arbitrary choice of basis vectors in the ambient space.

A general invertible linear transformation of the ambient space preserves dimension but can change Hamming distance. Only transformations known to preserve the coordinate metric may be used when claiming code equivalence. Coordinate permutations and nonzero rescaling of individual coordinates form monomial transformations and preserve Hamming weight. Changing the message basis leaves the code itself unchanged.

## Puncturing and shortening

Fix a coordinate $i$ and let $\pi_i$ delete it. The punctured code is $\pi_i(C)$. The shortened code is
$$
\operatorname{short}_i(C)=\pi_i\{c\in C:c_i=0\}.
$$
They differ: puncturing forgets a coordinate of every codeword, whereas shortening first restricts to codewords zero there.

The puncturing map has kernel contained in the one-dimensional span of the coordinate unit vector $e_i$. Its dimension drops from $k$ to $k-1$ exactly when $e_i\in C$. In particular, if $d\ge2$, no unit vector belongs to $C$ and puncturing preserves dimension. Pairwise distances drop by at most one, so the new minimum distance is at least $d-1$ when the punctured code has at least two words.

For shortening, the coordinate functional $c\mapsto c_i$ has rank one if that coordinate is active in at least one codeword, and zero if it vanishes throughout $C$. Its kernel therefore has dimension $k-1$ or $k$, respectively. Deleting a coordinate already zero loses no information, so shortening has that same dimension. Distances within its nontrivial output remain at least $d$.

These deductions are exact rank arguments. It is inaccurate to assert that puncturing always preserves dimension or that shortening always decreases it: inactive coordinates and weight-one codewords give the exceptions.

## Duality interchanges the two operations

For the ordinary finite-field pairing,
$$
(\operatorname{punct}_i C)^\perp
=\operatorname{short}_i(C^\perp).
$$
To prove it, take a vector $z$ on the remaining coordinates and extend it to $\widetilde z$ by inserting zero at $i$. It is orthogonal to every punctured codeword exactly when $\widetilde z$ is orthogonal to every original codeword. That is precisely membership in $C^\perp$ with a zero at $i$, followed by deletion.

Applying this identity to $C^\perp$ and using $(C^\perp)^\perp=C$ gives the companion identity
$$
(\operatorname{short}_i C)^\perp
=\operatorname{punct}_i(C^\perp).
$$
Double orthogonality follows from containment and dimension $n-(n-k)=k$; the pairing is nondegenerate even when some nonzero vectors are orthogonal to themselves.

A code is self-orthogonal when $C\subseteq C^\perp$ and self-dual when equality holds. Self-duality forces $n=2k$. For a binary self-orthogonal code, each word has even weight because $c\cdot c=\sum_i c_i=\operatorname{wt}(c)\bmod2$. This binary parity conclusion is not a formula for general nonbinary Hamming weight.

Duality describes relations among checks and generators, not a universal relation between the two minimum distances. A code with a large primal distance can have a small dual distance. The weight-enumerator chapter later gives a precise global relation through character sums.

## Guaranteed decoding versus likelihood optimisation

A minimum-weight coset leader is a maximum-likelihood choice on a symmetric channel whose error probability makes lower weight more likely. On an asymmetric channel, distinct coordinates can have different reliability costs; on a channel with memory, joint error patterns need not factor at all. One must minimise the negative log likelihood appropriate to that law.

Syndrome tables can be exponential in redundancy: there are $q^{n-k}$ syndrome classes. Their mathematical existence is not an efficient implementation theorem. Algebraic and sparse-graph structures in later chapters reduce this search for special code families and noise models.

The distance guarantee remains valid independently of any likelihood law. This makes it useful for worst-case storage corruption, but also conservative for many stochastic channels. A complete performance claim states which of these two questions it answers.

## Worked example 2.1: A ternary systematic MDS code

Over $\mathbb F_3$, take
$$
G=\begin{pmatrix}1&0&1&1\\0&1&1&2\end{pmatrix},\qquad
H=\begin{pmatrix}2&2&1&0\\2&1&0&1\end{pmatrix}.
$$
Multiplication gives $HG^T=0$ and both matrices have rank two. A nonzero message $(a,b)$ produces $(a,b,a+b,a+2b)$. Any two of the four coordinate linear forms are independent, so a nonzero message makes at most one coordinate zero. Thus distance is at least three, attained by $(1,0,1,1)$. Parameters are $[4,2,3]$, meeting Singleton. The minus signs in the general parity-check formula are genuine field negatives, not binary simplifications.

## Worked example 2.2: Puncturing and shortening the same coordinate

Let $C=\{(a,b,a+b):a,b\in\mathbb F_2\}$, the binary even-parity $[3,2,2]$ code. Puncturing its last coordinate gives every pair $(a,b)$, a $[2,2,1]$ code. Shortening there first imposes $a+b=0$, giving $\{00,11\}$, a $[2,1,2]$ code. The dual of the punctured code is zero, matching the shortening of the original repetition dual at a nonzero active coordinate. The example displays why the two deletion operations have different dimensions and guarantees.

## Worked example 2.3: A self-dual code can have small distance

Let $C$ over $\mathbb F_2$ be generated by $1100$ and $0011$. The rows are mutually orthogonal and each is self-orthogonal. Thus $C\subseteq C^\perp$; both spaces have dimension two, so $C=C^\perp$. Its nonzero words are $1100,0011,1111$, and distance is two. Self-duality does not by itself ensure strong correction: no positive number of arbitrary errors is guaranteed correctable here, although a single error is detected.

## Retained algorithms-desk bridge: separation, syndromes and source coding

This reading preserves the coding material and original checks 1, 6 and 15 from [Information, Security, Geometry, and Quantum Models](../algorithms-computation-proof-desk/information-security-geometry-quantum.md). Its original resource remains addressable; the companion source-law and counting checks are preserved in [Surprise and Entropy](../information-theory/surprise-entropy.md).

A binary block code $C\subseteq \{0,1\}^n$ has minimum Hamming distance

$d=\min_{x\ne y \in C} distance(x,y)$.

If at most $t$ bits flip and $2t<d$, radius-$t$ balls around codewords are disjoint, so nearest-codeword decoding corrects uniquely. Distance $d$ also detects up to $d-1$ errors.

For a linear $[n,k]$ code with generator matrix $G$, messages map to codewords $mG$. A full parity-check matrix $H$ satisfies $\ker H=C$ and has rank $n-k$; the necessary equation $GH^T=0$ alone is insufficient to guarantee this. A received word $r$ has syndrome $Hr^T$. Equal syndromes identify the same coset modulo $C$, not necessarily a unique error unless the decoding radius and code structure justify it.

### Retained worked audit: parity code and geometric decoding

The repetition code maps bit zero to $000$ and one to $111$. Minimum distance is three. Any one-bit error remains closer to its source codeword than the other, so majority decoding corrects one error. Two flips can produce a word closer to the wrong codeword.

This is exact combinatorial geometry in Hamming space. It says nothing about burst dependence, soft reliability values, channel mismatch, or rate efficiency. A channel model determines whether the code is useful, not distance alone.

### Retained bridge calculation: entropy versus code distance

Compression and error correction use redundancy in opposite directions. A biased source may have entropy below one bit per symbol and admit shorter average descriptions under its model. A channel code then adds structured bits so corrupted blocks remain geometrically separated. These steps are compatible but answer different questions: source coding concerns expected description length; channel coding concerns recovery under a noise contract. Neither supplies authentication against an active attacker.

For coding: finite words, channel law, encode/decode, distance proof, no adversarial authentication.

- Saying a syndrome always identifies one error.

<a id="algorithms-desk-check-1"></a>

**Retained desk check 1. A code has distance seven. How many errors can it uniquely correct?**

<details><summary>Hint 1</summary>

Compare twice the proposed radius with the distance.

</details>

<details><summary>Hint 2</summary>

Use disjoint Hamming balls.

</details>

<details><summary>Full solution</summary>

Three, because radius-three balls are disjoint and $2*3<7$.

</details>

<a id="algorithms-desk-check-6"></a>

**Retained desk check 6. Separate compression from correction.**

<details><summary>Hint 1</summary>

The source and the channel are different models.

</details>

<details><summary>Hint 2</summary>

One operation removes predictable redundancy and the other adds protection.

</details>

<details><summary>Full solution</summary>

Compression removes model-predictable redundancy; correction adds structured redundancy to resist a declared error family.

</details>

<a id="algorithms-desk-check-15"></a>

**Retained desk check 15. Give the cross-field evidence pattern.**

<details><summary>Hint 1</summary>

Start with the object and observation model.

</details>

<details><summary>Hint 2</summary>

A claim needs assumptions and a boundary as well as an example.

</details>

<details><summary>Full solution</summary>

Name mathematical object, model, operation, claim, evidence, assumptions, and explicit nonclaim.

</details>

## Exercises

### Exercise 2.1
<a id="linear-codes-ex-1"></a>

Prove every linear code has an information set.

<details>
<summary>Hint 1</summary>

A generator has a nonsingular maximal minor.

</details>
<details>
<summary>Hint 2</summary>

Use the corresponding coordinate restriction.

</details>
<details>
<summary>Solution</summary>

Rank $k$ supplies $k$ columns forming an invertible square matrix. Restriction to those columns sends $uG$ to $uG_I$, a bijection in the message vector. Therefore those coordinates determine the codeword and attain every $k$-tuple. This is the information-set property.

</details>

### Exercise 2.2
<a id="linear-codes-ex-2"></a>

Why can an arbitrary invertible ambient transformation change distance?

<details>
<summary>Hint 1</summary>

Dimension and coordinate weight are different invariants.

</details>
<details>
<summary>Hint 2</summary>

Map a weight-two spanning vector to a unit vector.

</details>
<details>
<summary>Solution</summary>

Over $\mathbb F_2$, the invertible map $(x_1,x_2)\mapsto(x_1,x_1+x_2)$ sends the repetition code $\{00,11\}$ to $\{00,10\}$. Both have dimension one, but their distances are two and one. Metric equivalence requires a weight-preserving map such as a coordinate permutation and rescaling.

</details>

### Exercise 2.3
<a id="linear-codes-ex-3"></a>

Characterise when puncturing one coordinate lowers dimension.

<details>
<summary>Hint 1</summary>

Find the kernel of deletion restricted to the code.

</details>
<details>
<summary>Hint 2</summary>

It consists of codewords supported only at that coordinate.

</details>
<details>
<summary>Solution</summary>

The kernel is $C\cap\operatorname{span}(e_i)$, which has dimension one exactly if $e_i\in C$ and zero otherwise. Rank-nullity then gives output dimension $k-1$ or $k$. A minimum distance at least two rules out the first case.

</details>

### Exercise 2.4
<a id="linear-codes-ex-4"></a>

Characterise the shortening dimension at an inactive coordinate.

<details>
<summary>Hint 1</summary>

The coordinate functional is then identically zero.

</details>
<details>
<summary>Hint 2</summary>

Its kernel is the whole code.

</details>
<details>
<summary>Solution</summary>

If every codeword has $c_i=0$, shortening imposes no additional restriction and deletion is injective. Dimension stays $k$. If some word is nonzero there, the functional has rank one and its kernel has dimension $k-1$.

</details>

### Exercise 2.5
<a id="linear-codes-ex-5"></a>

Prove the puncture-dual identity without counting dimensions.

<details>
<summary>Hint 1</summary>

Extend a remaining-coordinate vector with a zero.

</details>
<details>
<summary>Hint 2</summary>

Compare the two inner products.

</details>
<details>
<summary>Solution</summary>

A remaining vector $z$ is orthogonal to every $\pi_i(c)$ exactly when its zero extension $\widetilde z$ satisfies $\widetilde z\cdot c=0$ for every $c\in C$. That says $\widetilde z\in C^\perp$ and $\widetilde z_i=0$. Deleting the zero gives precisely $\operatorname{short}_i(C^\perp)$.

</details>

### Exercise 2.6
<a id="linear-codes-ex-6"></a>

Show self-duality forces even length.

<details>
<summary>Hint 1</summary>

Compare dimensions of a code and its dual.

</details>
<details>
<summary>Hint 2</summary>

Use rank-nullity for the orthogonal complement.

</details>
<details>
<summary>Solution</summary>

A self-dual code has $k=n-k$, hence $n=2k$. This necessary condition does not construct a self-dual code or determine its distance. Further field and pairing details govern possible constructions.

</details>

### Exercise 2.7
<a id="linear-codes-ex-7"></a>

In a binary self-orthogonal code, prove every word has even weight.

<details>
<summary>Hint 1</summary>

Each word is orthogonal to itself.

</details>
<details>
<summary>Hint 2</summary>

Its binary square equals itself coordinatewise.

</details>
<details>
<summary>Solution</summary>

$0=c\cdot c=\sum_ic_i^2=\sum_ic_i$ in $\mathbb F_2$. This sum is the parity of its Hamming weight, so the weight is even. The conclusion uses the binary field; it is not a weight-parity identity over arbitrary fields.

</details>

### Exercise 2.8
<a id="linear-codes-ex-8"></a>

Explain why the zero syndrome need not mean no error.

<details>
<summary>Hint 1</summary>

Any codeword lies in the kernel.

</details>
<details>
<summary>Hint 2</summary>

Use a nonzero codeword as an error.

</details>
<details>
<summary>Solution</summary>

If $e\in C$ is nonzero, then $He^T=0$. The received $c+e$ is a different codeword and has zero syndrome. Thus parity checks cannot detect such an error. Minimum distance says every such nonzero undetected error has weight at least $d$.

</details>

### Exercise 2.9
<a id="linear-codes-ex-9"></a>

Derive unique recovery for $t$ errors and $e$ erasures under $2t+e<d$.

<details>
<summary>Hint 1</summary>

Compare two compatible candidate codewords.

</details>
<details>
<summary>Hint 2</summary>

Their differences lie in erased or alleged error positions.

</details>
<details>
<summary>Solution</summary>

Outside erased positions, each candidate differs from the received values in at most $t$ locations. Two candidates can therefore differ only in the $e$ erased positions and the union of at most $2t$ erroneous positions. Their distance is at most $2t+e<d$, impossible for distinct codewords. Hence the compatible codeword is unique.

</details>

### Exercise 2.10
<a id="linear-codes-ex-10"></a>

Why is minimum-weight syndrome decoding not automatically maximum likelihood for every channel?

<details>
<summary>Hint 1</summary>

Likelihood may weight positions differently.

</details>
<details>
<summary>Hint 2</summary>

Dependence may also link error coordinates.

</details>
<details>
<summary>Solution</summary>

On an asymmetric or nonidentically noisy channel, equal-weight errors can have different probabilities. With memory, even the product of coordinate costs can fail. Syndrome decoding identifies feasible cosets, but the chosen representative must optimise the actual channel likelihood if a maximum-likelihood claim is intended.

</details>

## Summary

Finite-field generators, checks and syndromes encode a linear code exactly. Information sets justify systematic form, puncturing and shortening have precise rank exceptions, and duality interchanges their operations. Distance guarantees and stochastic likelihood claims remain explicitly distinct.
