var e=`---
parent_id: book-information-theory
chapter_id: asymptotic-equipartition
title: "The Asymptotic Equipartition Property"
level: advanced-undergraduate
license: CC BY-SA 4.0
---

# The Asymptotic Equipartition Property

Preparation is entropy, iid product laws, the weak law of large numbers and elementary counting. The source alphabet is finite throughout; the coding criterion is fixed-length block reconstruction with allowed error probability.

## Blocks from a fixed finite source

Let $X_1,X_2,\\ldots$ be iid with a fixed law $P$ on a finite alphabet $\\mathcal X$. Remove symbols of zero probability from the support, leaving $\\mathcal X_+$. Every realised block then has positive probability
$$
P^n(x^n)=\\prod_{i=1}^np(x_i).
$$
Its normalised surprise is
$$
-\\frac1n\\log_2P^n(X^n)=\\frac1n\\sum_{i=1}^n[-\\log_2p(X_i)].
$$
The summands are iid bounded random variables on this finite positive support. Their mean is $H(P)$. The law of large numbers therefore turns a probabilistic average into a statement about the probability of most long blocks.

The boundedness here follows from a fixed finite alphabet with a fixed smallest positive mass. It is not an assertion uniform over changing source laws whose rarest probabilities may tend to zero. Infinite alphabets need integrability assumptions; dependent sources need a different theorem.

**Theorem 5.1 (iid asymptotic equipartition).** For every $\\varepsilon>0$,
$$
P\\left(\\left|-\\frac1n\\log_2P^n(X^n)-H(P)\\right|>\\varepsilon\\right)\\longrightarrow0.
$$
**Proof.** Apply the weak law of large numbers to $-\\log_2p(X_i)$. For an explicit bound, if its variance is $\\sigma^2$, Chebyshev gives an exceptional probability at most $\\sigma^2/(n\\varepsilon^2)$. If the surprise is constant, the variance is zero and the conclusion is exact for every block length. ∎

This is called equipartition because most probability lies on blocks with approximately the same *exponential order* of probability. Their actual probabilities need not be equal, and their ratios need not approach one.

## A typical set and its size

Define the weakly typical set
$$
T_{n,\\varepsilon}=\\left\\{x^n\\in\\mathcal X_+^n:
2^{-n(H+\\varepsilon)}\\le P^n(x^n)\\le2^{-n(H-\\varepsilon)}
\\right\\}.
$$
Write $\\delta_n=P(X^n\\notin T_{n,\\varepsilon})$. For fixed positive $\\varepsilon$, the theorem gives $\\delta_n\\to0$.

Each typical block has probability at least $2^{-n(H+\\varepsilon)}$. Since total mass is at most one,
$$
|T_{n,\\varepsilon}|\\le2^{n(H+\\varepsilon)}.
$$
Each also has probability at most $2^{-n(H-\\varepsilon)}$. Since the typical mass is $1-\\delta_n$,
$$
|T_{n,\\varepsilon}|\\ge(1-\\delta_n)2^{n(H-\\varepsilon)}.
$$
Thus the high-probability collection has exponential size about $2^{nH}$. These are two separate inequalities using opposite probability bounds; reversing either one is a common error.

Typicality is relative to $P$. A block typical for a biased coin can be atypical for a fair coin. Nor is a typical block necessarily the most likely block. For a biased coin, the all-majority-symbol block is individually most likely but represents a vanishing fraction of total probability as the block gets long.

The set is defined by self-information rather than by visually looking random. A regular-looking block can have a perfectly ordinary type under a source law. Claims about algorithmic complexity or visual patterns require additional definitions and are not consequences of this theorem.

## Fixed-length almost-lossless compression

A fixed-length block code consists of an encoder
$$
f_n:\\mathcal X^n\\to\\{1,\\ldots,M_n\\}
$$
and a decoder $g_n$ from those messages back to source blocks. Its block error probability is $P(g_n(f_n(X^n))\\ne X^n)$. The rate is $(1/n)\\log_2M_n$ bits per source symbol; an actual binary representation uses $\\lceil\\log_2M_n\\rceil$ bits.

The encoder is allowed to map different source blocks to the same message. That is why the code can have nonzero error. A zero-error injective encoder for every possible block would need enough messages for the entire support, often a much larger rate.

**Theorem 5.2 (finite iid fixed-rate source coding).** Every $R>H(P)$ is achievable with block error tending to zero. If $R<H(P)$ and $M_n\\le2^{nR}$, every such code has correct-decoding probability tending to zero.

**Achievability.** Choose $\\varepsilon>0$ with $H+\\varepsilon<R$. Give each typical block its own message and reserve one extra message for all other blocks. The decoder reconstructs each typical block correctly; the extra message can decode arbitrarily. Thus error is at most $\\delta_n$. The number of messages is at most $2^{n(H+\\varepsilon)}+1$, whose logarithm divided by $n$ is eventually below $R$. Rounding changes only a vanishing rate term. ∎

The construction proves existence. Computing the complete typical set or storing its lookup table can be infeasible. Constructive prefix, arithmetic and universal codes address different aspects of implementation in the next chapters.

**Converse.** A decoder with $M_n$ possible received messages has at most $M_n$ distinct reconstruction blocks. Let $S_n$ be the subset of blocks decoded correctly; it has size at most $M_n$, regardless of how the encoder chooses its messages. Split its mass into typical and atypical blocks:
$$
P(X^n\\in S_n)\\le\\delta_n+|S_n|2^{-n(H-\\varepsilon)}
\\le\\delta_n+2^{-n(H-\\varepsilon-R)}.
$$
Choose $0<\\varepsilon<H-R$. Both terms tend to zero. ∎

This is a strong converse for the specified iid fixed-rate problem: below entropy, error tends to one, not merely to a positive lower bound. The proof does not settle behaviour exactly at rate $H$, where rounding, source dispersion and the precise sequence of message budgets matter.

## What the theorem does and does not promise

The theorem permits a small probability of failing to reconstruct the *entire* block. It is not a statement that a small proportion of symbols may be changed. Lossy coding uses a distortion criterion and appears in Chapter 14. Here a single wrong symbol counts as block failure.

The code depends on the source law. A universal code must pay to learn or describe a source model while preserving reconstruction. Chapter 8 constructs one for a finite iid family. An unknown distribution is not a reason to substitute a fitted entropy estimate into the present theorem without accounting for its estimation error.

The theorem also assumes the decoder knows the code. A codebook selected separately for every message would itself carry information that must be transmitted or shared in advance. The rate counts only the encoded block because the coding rule is fixed before the random block arrives.

If $H(P)=0$, the source is deterministic, and one message suffices for every length. If $P$ is uniform on $m$ symbols, every block has probability $m^{-n}$ and the source entropy is $\\log_2m$. There is then no smaller high-probability subset at a lower exponential rate. The typical-set bounds become exact up to the chosen tolerance.

For a nonuniform law, almost all mass can occupy a tiny fraction of the full support. This is the source of compressibility in an average-probability sense. The discarded support is still present, so zero-error fixed-length coding cannot use that smaller subset.

## A finite-block estimate and its limitations

The proof gives more than a limiting slogan. For any chosen tolerance, Chebyshev supplies $\\delta_n\\le\\sigma^2/(n\\varepsilon^2)$. Encoding a typical-set index needs at most $n(H+\\varepsilon)+1$ bits plus a bounded exceptional marker convention. This is a conservative finite-block estimate.

To achieve a target excess rate $\\eta>0$, choose $\\varepsilon<\\eta$ and then take $n$ large enough that the probability bound is acceptable and the rounding cost is below $\\eta-\\varepsilon$. Sending $\\varepsilon$ to zero too quickly can make the displayed error bound useless. The order of choices is part of the argument.

For a varying tolerance $\\varepsilon_n$, the same Chebyshev calculation works if $n\\varepsilon_n^2\\to\\infty$. Then $\\delta_n\\to0$ and the typical index rate tends to $H$. This does not give a universal second-order optimal code length: Chebyshev is only one rough concentration tool.

Neither proof executed a compressor or measured a dataset. The results are analytical statements about an explicitly defined stochastic source. An observed compression ratio can include file headers, model costs, encoding conventions and finite-sample effects absent from the idealised rate expression.

## Probability mass and counting are different resources

Counting alone shows that an injective binary encoding cannot shorten every $n$-bit string. There are only $2^n-1$ binary strings of length less than $n$ if the empty string is allowed. But that argument says nothing about how probability is distributed over source strings.

The typical-set theorem combines both resources: the law concentrates probability on a set, and counting bounds the number of messages needed for that set. A compressor may shorten likely strings while lengthening unlikely ones. A fixed-length almost-lossless code instead discards an exceptional probability mass. These are distinct ways to trade representation cost against reconstruction requirements.

A claim that “entropy is the number of bits” is therefore incomplete until the source, block length, allowed error, length criterion and shared model are stated. The next chapter proves the expected-length zero-error prefix formulation and explains its connection to this asymptotic result.

## Shared randomness and the converse

Allowing encoder and decoder a shared random seed independent of the source does not defeat the counting converse. Conditional on any seed value, the decoder still has at most $M_n$ reconstruction values. The bound
$$
P(\\text{correct}\\mid\\text{seed})\\le\\delta_n+M_n2^{-n(H-\\varepsilon)}
$$
therefore holds for each seed, because independence leaves the source law unchanged. Averaging preserves the same upper bound.

A seed correlated with the source is different: it is side information supplied to the decoder. Its cost and its conditional source law must then enter the problem. This is another example of why the resources known in advance must be stated before interpreting a coding rate.

## Worked example 5.1: A dyadic source

Take probabilities $(1/2,1/4,1/4)$, with entropy $3/2$ bits. For a block containing $n_1$ occurrences of the first symbol, its surprise is $n_1+2(n-n_1)=2n-n_1$. Typicality is exactly $|n_1/n-1/2|\\le\\varepsilon$. The law of large numbers gives this event probability tending to one. The full support contains $3^n$ blocks, yet the typical collection has exponential order $2^{3n/2}$, strictly smaller than $3^n$.

## Worked example 5.2: Why the most likely block is not enough

For Bernoulli$(1/10)$ observations, the all-zero block has probability $(9/10)^n$, the largest individual block probability. It nevertheless tends to zero. A code that reconstructs only that block therefore has success probability tending to zero, despite choosing the most likely block. Typical blocks contain about $n/10$ ones and collectively carry nearly all mass. Their individual likelihoods and their enormous multiplicity must be considered together.

## Worked example 5.3: An analytic Chebyshev budget

For the dyadic source above, one-symbol surprise is one or two bits with equal probability. It has variance $1/4$. Choosing $\\varepsilon=1/8$ gives atypical probability at most $16/n$. A typical-set code has rate at most $13/8+o(1)$ bits per symbol. To make this bound at most $1/100$ requires $n\\ge1600$. The estimate is a guaranteed upper bound from a particular proof, not an assertion that the true error is exactly one percent or that the code is computationally practical.

## A finite-block rate bound from bounded surprise

For a fixed finite positive support, one-symbol surprise lies between two finite constants. Its range is the logarithm of the largest-to-smallest positive probability ratio. Applying Hoeffding’s inequality to the iid surprises gives atypical probability at most twice an exponential with exponent minus twice the block length times squared tolerance divided by squared range.

This is sharper than the earlier Chebyshev estimate when a useful uniform range is available. For a prescribed exceptional probability, solve that inequality for the tolerance. The required excess rate then has order the inverse square root of block length, with a constant depending on the surprise range and the chosen probability level. Rounding the typical-set index adds a further bounded cost per block.

If all positive masses are equal, the surprise range is zero and division by it is inappropriate. In that case every realised block has exactly its mean surprise, so there is no exceptional probability at any positive tolerance. The degenerate case is simpler, rather than a failure of equipartition.

The converse also yields a finite-block resource statement. If success probability is at least one minus a declared error level, and the typical exceptional mass is at most a second declared level, the message count must cover their positive remaining difference at typical-block probability at most the upper typical bound. Taking logarithms gives a block-length lower bound with the entropy-minus-tolerance term and a finite logarithmic correction.

The difference must be positive for that rearrangement to say anything. This qualification prevents a vacuous typicality bound from being reported as a meaningful converse.

These finite expressions still describe a known fixed source. A family with increasingly tiny positive probabilities can have a growing surprise range, so the same numerical sample-size statement need not be uniform over that family. The bound’s constants are part of its model dependence.

## Independent nonidentical bits have an averaged entropy rate

The identical-distribution assumption can be relaxed in one elementary direction. Consider independent bits whose success probabilities can vary with position but remain between a fixed positive c and one minus c. Each realized surprise is uniformly bounded because both symbol probabilities stay away from zero. Independence makes the variance of the average surprise at most a fixed constant divided by block length. Its expectation is the average of the individual binary entropies. Chebyshev's inequality therefore proves concentration of normalised block surprise around that average.

If these average entropies converge to h, the usual probability and counting argument gives typical-set sizes with exponential rate h. This conclusion needs convergence of the entropy averages; an arbitrary sequence of bit probabilities need not have one limiting rate. It also uses a uniform support bound that fails when rare-symbol surprises become arbitrarily large. The argument shows exactly which part of the iid proof used identical laws and which part used independence and variance control, without claiming a stationary-process theorem.

## Exercises

### Exercise 5.1
<a id="asymptotic-equipartition-ex-1"></a>

Prove the upper typical-set cardinality bound.

<details>
<summary>Hint 1</summary>

Use its lower bound on each block probability.

</details>
<details>
<summary>Hint 2</summary>

The probabilities of all typical blocks sum to at most one.

</details>
<details>
<summary>Solution</summary>

Each member has mass at least $2^{-n(H+\\varepsilon)}$. Therefore $|T_{n,\\varepsilon}|2^{-n(H+\\varepsilon)}\\le P(T_{n,\\varepsilon})\\le1$. Multiplying gives $|T_{n,\\varepsilon}|\\le2^{n(H+\\varepsilon)}$. The argument uses no independence once the set is defined.

</details>

### Exercise 5.2
<a id="asymptotic-equipartition-ex-2"></a>

Prove the lower typical-set cardinality bound.

<details>
<summary>Hint 1</summary>

Use its upper bound on each block probability.

</details>
<details>
<summary>Hint 2</summary>

Its total probability is $1-\\delta_n$.

</details>
<details>
<summary>Solution</summary>

The total typical mass is at most $|T_{n,\\varepsilon}|2^{-n(H-\\varepsilon)}$. Since it equals $1-\\delta_n$, rearrangement gives the lower bound. It is useful only once the typical mass is known to be substantial; the asymptotic equipartition theorem supplies that fact.

</details>

### Exercise 5.3
<a id="asymptotic-equipartition-ex-3"></a>

Why must a decoder with $M$ messages have at most $M$ correctly reconstructed source blocks?

<details>
<summary>Hint 1</summary>

Each received message has one reconstruction.

</details>
<details>
<summary>Hint 2</summary>

Distinct correctly reconstructed blocks require distinct reconstruction values.

</details>
<details>
<summary>Solution</summary>

The image of the decoder contains at most $M$ blocks. Every correctly reconstructed input must belong to that image. This remains true even for a complicated encoder or a noninjective encoder, so the counting step in the converse does not assume a particular coding construction.

</details>

### Exercise 5.4
<a id="asymptotic-equipartition-ex-4"></a>

Find the entropy threshold for a deterministic source.

<details>
<summary>Hint 1</summary>

Its block law has one possible outcome.

</details>
<details>
<summary>Hint 2</summary>

A single message can reconstruct that outcome.

</details>
<details>
<summary>Solution</summary>

The one-symbol entropy is zero and so is every block entropy. An encoder with $M_n=1$ and a decoder returning the known deterministic block has zero error and zero rate. Negative rates are not meaningful message budgets, so the below-entropy converse has no nontrivial case here.

</details>

### Exercise 5.5
<a id="asymptotic-equipartition-ex-5"></a>

For a uniform source on $m$ symbols, bound success probability when $M_n\\le2^{nR}$.

<details>
<summary>Hint 1</summary>

Every block has mass $m^{-n}$.

</details>
<details>
<summary>Hint 2</summary>

At most $M_n$ blocks can be correct.

</details>
<details>
<summary>Solution</summary>

Success is at most $M_nm^{-n}\\le2^{-n(\\log_2m-R)}$. Thus for $R<\\log_2m$ it tends exponentially to zero. This direct calculation is sharper than the general typical-set proof and covers every block length.

</details>

### Exercise 5.6
<a id="asymptotic-equipartition-ex-6"></a>

Does asymptotic equipartition mean typical blocks have probability ratios tending to one?

<details>
<summary>Hint 1</summary>

Compare the two edges of the typical window.

</details>
<details>
<summary>Hint 2</summary>

Its width is exponential in $n$ for fixed tolerance.

</details>
<details>
<summary>Solution</summary>

No. The definition permits a probability ratio as large as $2^{2n\\varepsilon}$. It says their log probabilities divided by $n$ are close to the same entropy. It does not say their raw probabilities become equal. The phrase equipartition refers to exponential order.

</details>

### Exercise 5.7
<a id="asymptotic-equipartition-ex-7"></a>

Give a sufficient condition on $\\varepsilon_n$ for Chebyshev typicality to have vanishing error.

<details>
<summary>Hint 1</summary>

Write $\\sigma^2/(n\\varepsilon_n^2)$.

</details>
<details>
<summary>Hint 2</summary>

Require its denominator to diverge.

</details>
<details>
<summary>Solution</summary>

If $\\varepsilon_n>0$ and $n\\varepsilon_n^2\\to\\infty$, then the exceptional probability tends to zero. For example $\\varepsilon_n=n^{-1/4}$ works and also tends to zero, so the resulting typical-set rate approaches entropy. The bound does not generally work with $\\varepsilon_n=n^{-1}$.

</details>

### Exercise 5.8
<a id="asymptotic-equipartition-ex-8"></a>

Explain the difference between zero-error fixed-length and almost-lossless fixed-length coding.

<details>
<summary>Hint 1</summary>

The first must cover every positive-probability block.

</details>
<details>
<summary>Hint 2</summary>

The second may fail on a small total mass.

</details>
<details>
<summary>Solution</summary>

A zero-error fixed-length decoder must have at least as many messages as the source support has blocks, because every such block must be distinguishable. Almost-lossless coding needs only a high-probability reconstruction set. Nonuniform sources can have a high-probability set exponentially smaller than the complete support.

</details>

### Exercise 5.9
<a id="asymptotic-equipartition-ex-9"></a>

Why is iid used in the asymptotic equipartition proof?

<details>
<summary>Hint 1</summary>

The normalised surprise is an average of one-coordinate surprises.

</details>
<details>
<summary>Hint 2</summary>

Their joint independence and common law permit the chosen law of large numbers.

</details>
<details>
<summary>Solution</summary>

The product law makes block log probability the sum of iid one-symbol log probabilities. The weak law then gives convergence to their common mean. A dependent source can have a different block probability and entropy rate; a more general equipartition theorem needs additional assumptions and cannot be obtained by merely reusing the iid factorisation.

</details>

### Exercise 5.10
<a id="asymptotic-equipartition-ex-10"></a>

Can the proof determine the limiting error for every sequence of codes exactly at entropy rate?

<details>
<summary>Hint 1</summary>

Inspect the strict gap in the converse exponent.

</details>
<details>
<summary>Hint 2</summary>

The chosen tolerance must be smaller than that gap.

</details>
<details>
<summary>Solution</summary>

No. The below-entropy converse chooses $\\varepsilon<H-R$, which is impossible when $R=H$. The achievability proof likewise uses a positive excess-rate gap. Exact-boundary behaviour depends on finer block-length and source properties and is not resolved by this pair of arguments.

</details>

## Summary

For a fixed finite iid source, block surprise per symbol converges to entropy. Typical blocks carry nearly all probability and number about $2^{nH}$ on an exponential scale. This proves both achievable above-entropy fixed rates and failure below entropy, under an explicitly almost-lossless block-error criterion.
`;export{e as default};