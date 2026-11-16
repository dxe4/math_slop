
# Surprise and Entropy

Preparation is finite probability models, independence, logarithms, expectation and Jensen’s inequality from [Probability: Models, Bounds, and Proofs](#/books/probability-models-proofs). This opening L3 chapter rebuilds Euler’s entropy essay while retaining its original source.

An uncertain event is not information-free just because its realised value is a familiar symbol. Information theory begins with the probability assigned before observation. A particular outcome has a surprise; a random variable has an expected surprise under a law. Later chapters connect that average to the length of descriptions and to communication through noisy channels.

This chapter rebuilds Euler's entropy essay as the opening map. Its coding examples preview results whose hypotheses and proofs are developed in later chapters. First we establish the logarithmic information scale and finite-alphabet entropy itself.

## Why surprise is logarithmic

Suppose surprise $I(p)$ is continuous for $0<p\le1$, decreases as probability increases, and satisfies $I(pq)=I(p)+I(q)$ for independent-event probabilities. Put $f(t)=I(2^{-t})$ for $t\ge0$. The product identity makes $f$ additive: $f(s+t)=f(s)+f(t)$.

Additivity gives $f(0)=0$, $f(n)=nf(1)$ for integers and $f(m/n)=(m/n)f(1)$ for nonnegative rationals. Continuity extends the same formula to every nonnegative real. Choosing one unit of surprise for probability one-half makes $f(1)=1$, so $I(p)=-\log_2p$. A different unit multiplies the answer by a constant.

The additivity statement requires the joint probability to be a product. For dependent observations one must use conditional probabilities, developed next. Simply adding marginal surprises would otherwise calculate the wrong joint event.

## Finite entropy and its extreme cases

For a finite alphabet with probabilities $p_1,\ldots,p_m$, define
$$
H(p)=\sum_{i:p_i>0}p_i\log_2(1/p_i).
$$
The convention $0\log0=0$ is a limit for the expectation. It does not assign finite surprise to an actually observed event that the model declared impossible.

**Theorem 1.1.** Entropy is nonnegative, is zero exactly for a point mass, and is at most the logarithm of the number of positive-probability outcomes. Equality in that upper bound holds exactly when those outcomes are equally likely.

**Proof.** Each positive-probability surprise is nonnegative. It is zero only at probability one, so a zero average requires a single certain outcome. For the upper bound, concavity of logarithm gives
$$
\sum_ip_i\log_2(1/p_i)
\le\log_2\left(\sum_ip_i/p_i\right)=\log_2m_+,
$$
where $m_+$ counts positive masses. Strict concavity makes equality require all $1/p_i$ equal on that support. ∎

The ambient alphabet can contain symbols assigned probability zero. Its size then gives a weaker bound, with equality only when every symbol has the same positive mass. Keeping support and listed alphabet separate avoids a hidden assumption in maximum-entropy calculations.

## Mixtures and the role of a probability model

The function $-p\log_2p$ has second derivative $-1/(p\ln2)$ on the positive interval and extends continuously to zero. It is concave. Summing its coordinate inequalities proves
$$
H(\lambda p+(1-\lambda)q)\ge\lambda H(p)+(1-\lambda)H(q)
$$
for probability vectors on the same finite alphabet and $0\le\lambda\le1$.

Thus mixing source laws can increase uncertainty relative to knowing which law generated a draw. The formula does not say that every arbitrary physical mixing procedure increases entropy: the state alphabet and recorded variable must remain the same.

An empirical frequency vector is another random object. Its expected entropy is at most the true entropy in the iid finite-alphabet model, by concavity and $E\hat p=p$. This is the downward bias of the plug-in entropy estimate. Consistency follows from frequency convergence and continuity of finite entropy, but a finite sample can still miss rare outcomes. Unknown or infinite support requires additional conditions.

A particular binary string does not have one Shannon entropy independent of a source law. The all-zero string has probability one under a deterministic source but probability $2^{-n}$ under $n$ independent fair bits. A short program describing that one string and the expected description length of every draw are different questions. No compressor shortens all strings injectively; the counting argument below explains why.

## Refining and merging recorded outcomes

A deterministic relabelling that is one-to-one leaves entropy unchanged, because it only permutes probability masses. Merging symbols generally reduces it. If a category of total probability $r$ is split into subcategories with conditional probabilities $q_j$, its entropy contribution changes by
$$
-\sum_jrq_j\log_2(rq_j)+r\log_2r=rH(q).
$$
The increase is nonnegative. Refining a recorded outcome can reveal more uncertainty; it does not prove that the underlying physical system changed.

This calculation is the simplest form of the chain rule. It will make conditional entropy an average over the information actually revealed, rather than an undefined notion of how confused a particular observer feels.



## A first map of information and coding

Information theory asks a precise question: how many symbols are needed to describe an uncertain outcome? Coding theory asks a complementary one: how much redundancy is needed to recover a message after corruption? Probability and linear algebra connect the answers.

## Surprise becomes a logarithm

Suppose an event has probability $p$. A useful measure of surprise $I(p)$ should satisfy:

1. less likely events are more surprising;
2. independent events add surprise, so $I(pq)=I(p)+I(q)$;
3. surprise varies continuously with $p$.

These requirements force $I(p)=-c \log p$. Measuring in bits selects base two and $c=1$:

$$I(p)=-\log_{2} p$$

An outcome of probability $1/2$ carries one bit of surprise; one of probability $1/8$ carries three. For a discrete random variable $X$ with probabilities $p_{i}$, average surprise is Shannon entropy:

$$H(X)=-\sum_{i} p_{i} \log_{2} p_{i}$$

Entropy is not the number of possible outcomes. A fair four-sided outcome has entropy $2$ bits, while probabilities $(1/2,1/4,1/8,1/8)$ give

$H=1/2+1/2+3/8+3/8=1.75$ bits.

## Why entropy predicts compressibility

A binary prefix code assigns no symbol a codeword that begins another. This permits left-to-right decoding without separators. If codeword lengths are $l_{i}$, Kraft's inequality says

$$\sum_{i} 2^{-l_{i}} \le 1$$

The powers represent disjoint leaves of a binary tree. An ideal real-valued length would be $l_{i}=-\log_{2} p_{i}$, giving expected length exactly $H(X)$. Integer lengths prevent perfection, but choosing $l_{i}=\lceil -\log_{2} p_{i}\rceil$ gives

$$H(X) \le E[L] < H(X)+1$$

The lower bound follows from a relative-entropy argument: define
\(q_i=2^{-l_i}/K\), where \(K=\sum_i2^{-l_i}\le1\). Then nonnegativity of
\(D(p\mathbin\Vert q)=\sum_i p_i\log_2(p_i/q_i)\) rearranges to
\(E[L]\ge H(X)-\log_2K\ge H(X)\).

### Worked Huffman example

For symbols with probabilities $A:1/2, B:1/4, C:1/8, D:1/8$, repeatedly merge the two least likely nodes. Merge $C,D$ to weight $1/4$; merge that node with $B$ to $1/2$; merge with $A$. One code is

```text
A -> 0
B -> 10
C -> 110
D -> 111
```

Its expected length is $1/2(1)+1/4(2)+1/8(3)+1/8(3)=1.75$ bits, equal to the entropy. Huffman coding is optimal among symbol-by-symbol binary prefix codes, not among every conceivable compressor. Modeling longer blocks can exploit dependence between symbols.

## Redundancy can repair corruption

Compression removes predictable redundancy. Error correction deliberately adds structured redundancy. The simplest example repeats a bit three times and decodes by majority vote:

$0 \to 000$, $1 \to 111$.

The Hamming distance between codewords is three, so any single flipped bit can be corrected. The price is a rate of only $1/3$ information bit per transmitted bit.

For a binary code with minimum distance $d_{\min}$:

- up to $d_{\min}-1$ errors can be detected;
- up to \(\lfloor(d_{\min}-1)/2\rfloor\) errors can be uniquely corrected.

Why? Balls of that correction radius around distinct codewords are disjoint precisely when twice the radius is smaller than their separation.

## Linear codes turn decoding into algebra

A binary linear \([n,k]\) code is a \(k\)-dimensional subspace of
\(\mathbb F_2^n\). A generator matrix \(G\) maps message \(m\) to codeword
\(c=mG\). A parity-check matrix \(H\) satisfies \(Hc^{\mathsf T}=0\) for every
valid word.

Consider the $[3,2]$ even-parity code

$$C=\{000,011,101,110\}$$

One generator and check matrix are

```text
G = [1 0 1]      H = [1 1 1].
    [0 1 1]
```

If $m=(1,0)$, then $c=101$. A received word $r=100$ has syndrome

\[
s=Hr^{\mathsf T}=1\pmod2.
\]

so an odd number of bits changed. This code detects one error but cannot always correct it: every non-codeword is distance one from several codewords.

The classic Hamming \([7,4]\) code chooses columns of \(H\) as the seven
distinct nonzero vectors in \(\mathbb F_2^3\). A single error in position \(j\)
produces a syndrome equal to column \(j\), which identifies the flipped
position. That is an algorithm extracted directly from matrix structure.

```text
syndrome_decode(r, H):
    s <- H r^T over F_2
    if s = 0: return r
    find column j of H equal to s
    flip bit j of r
    return r
```

## Worked side-information calculation

Let \(X\) be a fair bit and let \(Y\) be the result after independently
flipping \(X\) with probability \(\varepsilon\), where
\(0\le\varepsilon\le1/2\). Before seeing \(Y\), uncertainty is \(H(X)=1\)
bit. Given \(Y\), the original bit equals \(Y\) with probability
\(1-\varepsilon\) and differs with probability \(\varepsilon\), so

\[
H(X\mid Y)=h_2(\varepsilon).
\]

The mutual information is therefore

\[
I(X;Y)=H(X)-H(X\mid Y)=1-h_2(\varepsilon).
\]

At \(\varepsilon=0\), \(Y\) reveals \(X\) and the mutual information is one
bit. At \(\varepsilon=1/2\), \(Y\) is independent of \(X\) and the mutual
information is zero. For the binary symmetric channel, the uniform input
achieves capacity, so this calculation also explains the capacity formula in
the next section.

## A noisy channel has a capacity

In a binary symmetric channel, each bit flips independently with probability $\epsilon$. Its capacity is

$C=1-h_{2}(\epsilon)$ bits per channel use,

where $h_{2}(\epsilon)=-\epsilon \log_{2} \epsilon-(1-\epsilon)\log_{2}(1-\epsilon)$. At $\epsilon=0$, capacity is one; at $\epsilon=1/2$, output is independent of input and capacity is zero.

Shannon's channel-coding theorem is striking: for rates below capacity, long codes can make decoding error arbitrarily small; above capacity, reliable communication is impossible. It is an existence and limit theorem, not a promise that a particular finite code is fast or practical.

## Assumptions and failure modes

- Entropy depends on a probability model; a wrong model gives misleading compression predictions.
- “Random-looking” is not the same as independent or uniformly distributed.
- Huffman codes operate on known symbol frequencies and can be poor under distribution shift.
- Hamming distance models substitutions, not insertions, deletions, or burst errors.
- Independent bit flips are an idealization; real channels may have memory.
- A nonzero syndrome detects inconsistency but does not automatically identify the most likely transmitted word.
- Capacity is asymptotic: block length, latency, and decoding complexity matter.


## Optional shorter readings

The Unhurried articles [Surprise](../../apps/unhurried/articles/information-theory-surprise/index.html) and [Entropy](../../apps/unhurried/articles/information-theory-entropy/index.html) offer another route through the basic examples. They are linked companions, not additional prerequisites. The current sequence supplies the full proofs and exercises needed for the later coding theorems.

## Worked example 1.1: a dyadic source

For probabilities $(1/2,1/4,1/8,1/8)$, surprises are $(1,2,3,3)$ and entropy is $7/4$ bits. Their mean is weighted by probabilities, not the unweighted average $9/4$. A code with these integer lengths can attain the mean; the later Kraft and Huffman chapters justify that construction.

## Worked example 1.2: a merged category

Merge the last two outcomes of that source. The new masses are $(1/2,1/4,1/4)$ with entropy $3/2$. The lost quarter-bit equals the merged category's probability one-quarter times its conditional one-bit uncertainty. Its original labels were not recoverable from the merged record.

## Worked example 1.3: two possible binary laws

A fair binary source has one bit of entropy; a source always producing zero has zero. If an unknown fair label chooses one of those laws with equal probabilities and only the output is recorded, its mass is $(3/4,1/4)$ and entropy $h_2(1/4)$. Concavity bounds it below the average one-half bit, while the label-plus-output record contains more information still.

## Maximum entropy with a declared mean constraint

Uniformity maximises entropy only when the support is the sole constraint. Suppose each of finitely many symbols has a known real cost and the source mean cost is fixed. A uniform law may fail that constraint, so the earlier unconstrained theorem cannot identify the new maximum.

For any real parameter, form a probability vector proportional to the exponential of minus that parameter times cost. Its normalising sum is a finite positive partition function. Expanding divergence from an arbitrary source law to this vector expresses entropy as the parameter times mean cost plus the log partition function, minus a nonnegative divergence, with the appropriate log-base conversion.

Thus, among laws having the same mean cost as this exponential vector, that vector uniquely maximises entropy. This is a complete proof: divergence gives the upper bound, and the proposed vector is feasible and attains it. It does not rely on an interior Lagrange-multiplier candidate being globally optimal.

For a nonconstant cost list, differentiating the exponential vector’s mean cost with respect to its parameter gives minus its cost variance. The variance is positive at every finite parameter because every listed symbol has positive mass and at least two costs differ. Its mean therefore varies continuously and strictly decreases from the largest cost to the smallest as the parameter ranges from negative to positive infinity.

Every strictly interior feasible mean consequently selects a unique finite parameter. At the extreme means, probability must be supported entirely on the minimum-cost or maximum-cost symbols. Within that restricted support, the earlier uniform maximum-entropy theorem applies. This boundary argument matters because no finite exponential parameter assigns exactly zero mass to all other symbols.

For a binary alphabet whose costs are zero and one, fixing mean cost fixes the Bernoulli success probability completely. The exponential parameter is the natural logarithm of the failure-to-success odds. For costs zero, one and two, a mean of one gives the zero parameter and uniform mass on all three symbols. A smaller mean requires a positive parameter favouring lower costs.

The principle is a mathematical consequence of the declared constraints. It does not prove that a physical source follows the maximising law, that the chosen cost is scientifically sufficient, or that an omitted constraint is irrelevant. If a source has temporal dependence, maximising one-symbol entropy also does not establish an entropy-rate model for its whole path.

A useful modelling report therefore lists the alphabet, actual constraints and resulting probability law separately. Maximum entropy supplies one precisely defined choice compatible with those constraints, while data and substantive knowledge determine whether that constrained model describes the intended experiment.

## An entropy bound from a coarse probability statement

Suppose a finite source puts probability one minus epsilon on a declared set of k outcomes and probability epsilon on a disjoint set of m outcomes, with both sets nonempty. Introduce the indicator of the second set. Since that indicator is determined by the source outcome, the entropy chain rule gives the indicator entropy plus the average conditional entropy within the two sets. Conditional entropy is bounded by the logarithm of the number of possible outcomes. Thus the source entropy is at most the binary entropy of epsilon plus one minus epsilon times log k plus epsilon times log m.

The bound is attained by a distribution uniform within each set. It separates a rare-event probability from the number of distinct rare outcomes. A small tail probability alone does not force small entropy if the rare set is extremely large. Conversely, knowing only the total alphabet size discards useful concentration information. Empty-probability groups are handled by the zero-times-log convention rather than an undefined conditional distribution.

## Retained algorithms-desk bridge: the probability model and compression

The following short reading and its original checks 4 and 5 are preserved from [Information, Security, Geometry, and Quantum Models](../algorithms-computation-proof-desk/information-security-geometry-quantum.md), whose earlier source and resource identity remain live. The full coding treatment continues in [Linear Codes](../error-correcting-codes/linear-codes.md).

For a discrete random variable $X$ with probabilities $p(x)$, Shannon entropy is

$H(X)=-\sum_{x} p(x) \log_{2} p(x)$.

It is measured in bits because the logarithm base is two. A uniform variable on $m$ outcomes has entropy $\log_{2}m$; a deterministic variable has entropy zero. Entropy is not the storage size of one unencoded object and not a synonym for disorder without a probability model.

A prefix-free binary code with lengths $l(x)$ has expected length $\sum p(x)l(x)$. Kraft’s inequality constrains the lengths: $\sum 2^{-l(x)}\le 1$. Source coding connects expected description length to entropy for repeated draws under stated stationarity or block assumptions.

- Treating entropy as an intrinsic property of a file without a source model.

<a id="algorithms-desk-check-4"></a>

**Retained desk check 4. What does entropy require?**

<details><summary>Hint 1</summary>

Identify what assigns probabilities to possible outcomes.

</details>

<details><summary>Hint 2</summary>

One observed string does not specify a source law.

</details>

<details><summary>Full solution</summary>

A probability law over source symbols or blocks; it is not an intrinsic label attached to one observed string.

</details>

<a id="algorithms-desk-check-5"></a>

**Retained desk check 5. Why cannot all $n$-bit strings compress?**

<details><summary>Hint 1</summary>

Count the shorter binary strings.

</details>

<details><summary>Hint 2</summary>

An injective map cannot place more inputs than available outputs.

</details>

<details><summary>Full solution</summary>

There are $2^n$ inputs but only $2^n-1$ shorter binary outputs, so injectivity fails.

</details>

## Exercises

### Exercise 1.1
<a id="surprise-entropy-ex-1"></a>

Compute entropy for a uniform alphabet of size sixteen.

<details>
<summary>Hint 1</summary>

Every mass is the same.

</details>
<details>
<summary>Hint 2</summary>

Use logarithm base two.

</details>
<details>
<summary>Solution</summary>

Each surprise is four bits and their weighted average is four. The outcome count itself is sixteen, not sixteen bits; logarithm converts distinguishable equally likely outcomes to binary information units.

</details>

### Exercise 1.2
<a id="surprise-entropy-ex-2"></a>

Why is 0 log 0 assigned value zero?

<details>
<summary>Hint 1</summary>

Take its limit from positive probabilities.

</details>
<details>
<summary>Hint 2</summary>

The contribution is weighted.

</details>
<details>
<summary>Solution</summary>

The limit of $p\log p$ as $p\downarrow0$ is zero, so the expectation extends continuously. This does not make surprise at an impossible observed event finite.

</details>

### Exercise 1.3
<a id="surprise-entropy-ex-3"></a>

Show that a point mass has zero entropy.

<details>
<summary>Hint 1</summary>

Its sole positive mass is one.

</details>
<details>
<summary>Hint 2</summary>

Logarithm of one is zero.

</details>
<details>
<summary>Solution</summary>

The only nonzero expectation term is $1\log_2(1)=0$. Conversely every term is nonnegative and a zero average requires all positive masses to be one, leaving exactly one supported outcome.

</details>

### Exercise 1.4
<a id="surprise-entropy-ex-4"></a>

Find the surprise of probability one-thirty-second.

<details>
<summary>Hint 1</summary>

It is a power of two.

</details>
<details>
<summary>Hint 2</summary>

Take minus the logarithm.

</details>
<details>
<summary>Solution</summary>

The surprise is five bits. This is the information of that event under the stated probability assignment; it is not automatically the entropy of the whole source.

</details>

### Exercise 1.5
<a id="surprise-entropy-ex-5"></a>

Prove additivity of surprise for independent events.

<details>
<summary>Hint 1</summary>

Their joint probability is a product.

</details>
<details>
<summary>Hint 2</summary>

Use logarithm of a product.

</details>
<details>
<summary>Solution</summary>

For probabilities $p,q$, joint surprise is $-\log_2(pq)=-\log_2p-\log_2q$. Independence supplies the product; without it, marginal surprises need not sum to joint surprise.

</details>

### Exercise 1.6
<a id="surprise-entropy-ex-6"></a>

Can a nonuniform law on four supported outcomes have entropy two bits?

<details>
<summary>Hint 1</summary>

Inspect equality in Jensen.

</details>
<details>
<summary>Hint 2</summary>

The logarithm is strictly concave.

</details>
<details>
<summary>Solution</summary>

No. Equality at $\log_2 4$ requires equal masses on those four outcomes. Any nonuniform positive law has strictly lower entropy.

</details>

### Exercise 1.7
<a id="surprise-entropy-ex-7"></a>

Quantify the entropy added by splitting a mass one-half into equal parts.

<details>
<summary>Hint 1</summary>

Condition on the split category.

</details>
<details>
<summary>Hint 2</summary>

Multiply its mass by one bit.

</details>
<details>
<summary>Solution</summary>

The increase is one-half bit. Directly expanding the two quarter-mass terms minus the original half-mass term gives the same value; other categories are unchanged.

</details>

### Exercise 1.8
<a id="surprise-entropy-ex-8"></a>

Why does empirical entropy underestimate entropy on average in the finite iid model?

<details>
<summary>Hint 1</summary>

Entropy is concave.

</details>
<details>
<summary>Hint 2</summary>

The empirical mass vector is unbiased.

</details>
<details>
<summary>Solution</summary>

Jensen gives $E H(\hat p)\le H(E\hat p)=H(p)$. This establishes an average bias direction, not that every sample estimate is below the true value.

</details>

### Exercise 1.9
<a id="surprise-entropy-ex-9"></a>

Does a short description of one string contradict entropy bounds?

<details>
<summary>Hint 1</summary>

Bounds concern a model and an expected code length.

</details>
<details>
<summary>Hint 2</summary>

Other strings need descriptions too.

</details>
<details>
<summary>Solution</summary>

No. A special string can have a short description while many others require longer ones. Injective coding cannot shorten every possible input, and average guarantees retain the source probabilities.

</details>

### Exercise 1.10
<a id="surprise-entropy-ex-10"></a>

Why must information units be recorded?

<details>
<summary>Hint 1</summary>

The logarithm base sets the scale.

</details>
<details>
<summary>Hint 2</summary>

Changing base multiplies all values.

</details>
<details>
<summary>Solution</summary>

Bits use base two; natural logarithms give nats. Their values differ by a factor $\ln2$. Mixing bases without conversion changes numerical rates and makes coding comparisons inconsistent.

</details>

## Summary

Surprise is logarithmic under continuity and independent additivity. Entropy averages surprise under a specified law, with support-sensitive extremes and concavity. Relabelling, merging, source estimation and individual-string descriptions are different operations. The coding preview becomes precise through the later source and channel theorems.
