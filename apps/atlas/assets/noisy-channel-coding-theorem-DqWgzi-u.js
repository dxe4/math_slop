var e=`---
parent_id: book-information-theory
chapter_id: noisy-channel-coding-theorem
title: "The Noisy-channel Coding Theorem"
level: advanced-undergraduate
license: CC BY-SA 4.0
---

# The Noisy-channel Coding Theorem

Preparation is Chapters 4 and 9, the weak law, Markov’s inequality and a union bound. Messages are uniform, channel uses are memoryless, and the fixed codebook is known to both parties without feedback.

## The communication task

Fix a finite discrete memoryless channel $W$. An $(n,M)$ deterministic code assigns one input block $x^n(m)$ to each message $m\\in\\{1,\\ldots,M\\}$ and a decoder $\\widehat m(y^n)$. The message is uniform and independent of channel noise. Its average error is
$$
P_e=\\frac1M\\sum_mP(\\widehat M\\ne m\\mid M=m).
$$
Its rate is $(\\log_2M)/n$ bits per channel use. Maximum error instead takes the largest conditional error over messages.

A rate is reliably achievable if there is a sequence of codes with asymptotic rate at least that value and error tending to zero. The operational capacity is the supremum of such rates. Encoder and decoder know the channel and codebook in advance; the channel uses have no feedback and no input-cost constraint.

**Theorem 10.1.** The operational capacity for this problem equals $C=\\max_PI(P,W)$. Every $R<C$ is achievable with vanishing average error, and also with vanishing maximum error after expurgation. No rate strictly above $C$ can have vanishing average error.

The two proof directions use different ideas. Random coding establishes existence below capacity. A conditional-entropy bound limits every code, including highly structured ones. The converse proved here is a weak converse: it does not claim that error necessarily tends to one above capacity.

## Information density

Fix an input law $P$ and its output law $Q=PW$. On positive joint cells define
$$
\\imath(x;y)=\\log_2\\frac{W(y\\mid x)}{Q(y)}.
$$
The joint expectation is $I(P,W)$. Under iid input and channel uses, block information density is additive:
$$
\\imath(x^n;y^n)=\\sum_{i=1}^n\\imath(x_i;y_i).
$$
Zero transition cells have zero true joint probability. Assign their information density $-\\infty$ when evaluating independent candidate pairs. The true-pair random variable has only finitely many finite values on its positive support, so the weak law applies:
$$
\\frac1n\\imath(X^n;Y^n)\\longrightarrow I(P,W)
$$
in probability.

A second elementary fact controls an incorrect candidate. Let $\\widetilde X^n\\sim P^n$ be independent of $Y^n\\sim Q^n$. Then
$$
E\\,2^{\\imath(\\widetilde X^n;Y^n)}=1.
$$
Indeed summing cancels the output denominator and gives $\\sum_{x^n}P^n(x^n)\\sum_{y^n:Q^n(y^n)>0}W^n(y^n\\mid x^n)=1$ for input blocks with positive $P^n$ mass. No omitted output cell can have positive transition probability from such an input.

Markov’s inequality therefore gives
$$
P(\\imath(\\widetilde X^n;Y^n)>\\gamma)\\le2^{-\\gamma}.
$$
This is a probability under an independent wrong candidate, not the law of the actual transmitted pair.

## Random codebooks and threshold decoding

Choose $M$ codewords independently from $P^n$, before transmission. This is a probability distribution over deterministic codebooks, not additional unshared randomness during decoding. For a given codebook, decode to the unique message whose codeword satisfies
$$
\\imath(x^n(m);y^n)>n(I(P,W)-\\delta).
$$
If none or more than one qualifies, declare an error, implemented by any fixed output message when a total decoder function is required.

Condition on transmission of message $m$ and average over the random codebook and channel. The actual pair has the iid joint law used in the information-density weak law. Each other codeword is independent of the channel output, because the output depends only on the transmitted codeword and independent channel noise.

By a union bound, the expected average error over codebooks is at most
$$
P\\bigl(\\imath(X^n;Y^n)\\le n(I-\\delta)\\bigr)
+(M-1)2^{-n(I-\\delta)}.
$$
The first term tends to zero. If $M=\\lfloor2^{nR}\\rfloor$ and $R<I-\\delta$, the second tends exponentially to zero.

Choose a law $P$ with $I(P,W)>R$ and then a positive $\\delta$ smaller than that gap. Such a law exists whenever $R<C$. Since the average over codebooks tends to zero, at least one deterministic codebook at each block length has no larger average error. Selecting those codebooks proves achievability.

Nothing here requires all sampled codewords to be distinct. Repeated codewords increase decoding ambiguity, but that possibility is already included in the error bound. The existence argument identifies codebooks whose total error is small without separately imposing a no-collision condition.

## From average to maximum error

Suppose a deterministic code has average conditional error $\\varepsilon_n$. At least half its messages have individual error at most $2\\varepsilon_n$, by the elementary Markov bound on the uniform message index. Retain those messages and discard the others.

Keep the original decoder on retained-message outputs; when it would return a discarded message, return any retained one. This cannot turn a previously correct retained-message decoding into an error. Hence the retained code has maximum error at most $2\\varepsilon_n$ and at least $M/2$ messages.

The rate loss is at most $1/n$ bit per use, up to an immaterial integer adjustment. Starting with a rate slightly above the desired $R<C$ gives a sequence attaining $R$ with maximum error tending to zero.

Expurgation changes the message set and its uniform law. It does not claim the original code already had small maximum error, nor that every message can be retained. In channel models with additional constraints, one must check that discarding messages preserves the chosen constraint; here there is no input-cost restriction.

## Fano’s inequality

Let $M$ be uniform on $M_0\\ge2$ possibilities and let $\\widehat M$ be any estimate. Put $E=1_{\\{M\\ne\\widehat M\\}}$ with error probability $P_e$. Because $E$ is a function of $(M,\\widehat M)$,
$$
H(M\\mid\\widehat M)
=H(E\\mid\\widehat M)+H(M\\mid E,\\widehat M).
$$
The first term is at most $H(E)=h_2(P_e)$. When $E=0$, the message is known. When $E=1$, at most $M_0-1$ possibilities remain after the estimate is specified. Thus
$$
H(M\\mid\\widehat M)\\le h_2(P_e)+P_e\\log_2(M_0-1)
\\le1+P_e\\log_2M_0.
$$
This is Fano’s inequality in the finite uniform-message form used below. The first displayed bound does not actually require a uniform prior; uniformity enters when replacing $H(M)$ by $\\log_2M_0$.

If the estimate is computed from $Y^n$, then conditioning on the full observation cannot leave greater uncertainty than conditioning on its summary:
$$
H(M\\mid Y^n)\\le H(M\\mid\\widehat M).
$$
This direction is important. An estimate may discard observation information, but cannot add information unavailable in the observation.

## The converse for every block code

The encoder-channel-decoder system gives the Markov relation $M\\to X^n\\to Y^n$. Data processing bounds
$$
I(M;Y^n)\\le I(X^n;Y^n).
$$
Memorylessness and entropy subadditivity yield
$$
\\begin{aligned}
I(X^n;Y^n)
&=H(Y^n)-H(Y^n\\mid X^n)\\\\
&\\le\\sum_{i=1}^nH(Y_i)-\\sum_{i=1}^nH(Y_i\\mid X_i)\\\\
&=\\sum_{i=1}^nI(X_i;Y_i)\\le nC.
\\end{aligned}
$$
The conditional entropy equality follows because, given the complete input block, output coordinates follow the product channel law. The induced input coordinates need not be independent, and the output entropy inequality correctly allows their dependence.

Now combine uniform-message entropy, data processing and Fano:
$$
\\log_2M_0
=I(M;Y^n)+H(M\\mid Y^n)
\\le nC+1+P_e\\log_2M_0.
$$
Consequently
$$
(1-P_e)\\frac{\\log_2M_0}{n}\\le C+\\frac1n.
$$
If error tends to zero, any limiting reliable rate is at most $C$. More quantitatively, at a fixed rate $R>C$ the bound gives asymptotic error at least $1-C/R$, a positive lower bound. A strong converse would require a further argument.

## Existence, complexity and finite length

The threshold decoder can require checking exponentially many codewords. The proof is therefore not a claim of efficient encoding or decoding. Structured codes seek useful tradeoffs among rate, error, complexity and block length.

Likewise, the theorem is asymptotic. For a fixed short block, a rate below capacity can still have substantial error. Error exponents, dispersion and finite-blocklength bounds answer sharper quantitative questions. They do not follow by substituting a finite $n$ into a limiting statement without retaining the actual probability terms.

The result also presumes the channel matrix is correctly specified and known. A code designed for a different channel or for a nonstationary environment needs a robustness analysis. “Below capacity” refers to a particular law and resource model, not an unconditional guarantee for any physical transmission system.

The proof nevertheless establishes the central separation between source representation and channel protection: a source can be described at a rate slightly above its entropy, and a channel can reliably carry descriptions at rates slightly below its capacity. A complete concatenation argument must coordinate the two block lengths and add both error probabilities; their separate theorems provide those ingredients.

## A precise source-channel concatenation

Suppose $k$ symbols from a fixed finite iid source are to use $n$ channel uses, with $n/k\\to\\rho>0$. If $H(P)<\\rho C$, choose numbers $R_s>H(P)$ and $R_c<C$ with $R_s<\\rho R_c$. For sufficiently large block lengths, a typical-set source encoder needs at most $2^{kR_s}$ message indices, while a channel code of rate near $R_c$ can carry at least that many indices.

Use a source code with vanishing block error and a channel code with vanishing *maximum* message error. The source index is usually nonuniform, so an average-error guarantee under a uniform index alone would not immediately control its transmission. The expurgated maximum-error code supplies the needed bound for every possible index.

If source compression succeeds and channel transmission of its index succeeds, final reconstruction succeeds. A union bound therefore makes the overall error at most the source block error plus the channel’s maximum error, both tending to zero. Integer message budgets can be absorbed by the strict gap between the chosen rates.

This proves the achievable direction of separation under the present finite iid source and memoryless channel assumptions. It explains why the exact error criterion mattered in expurgation. Sources with memory, channels with memory, delay restrictions or nonstandard distortion criteria require their own statements rather than a mechanical reuse of this argument.

## Worked example 10.1: A noiseless binary link

Its capacity is one bit per use. For $M=2^n$, the identity map uses every binary block and decodes with zero error, exactly at capacity. Above one bit per use, a decoder has only $2^n$ possible received blocks and cannot distinguish more messages reliably. This special exact construction does not imply that every noisy channel has zero error or a simple code exactly at its capacity.

## Worked example 10.2: Reading the random-coding exponent

Suppose a chosen input law has information $I=3/5$ bit per use. Target $R=2/5$ and choose $\\delta=1/10$. The wrong-candidate part of the bound is at most $2^{-n/10}$, since $I-\\delta-R=1/10$. The true-pair lower-tail probability must also be controlled and tends to zero by the weak law. Reporting only the exponential union term would omit half of the proof’s error estimate.

## Worked example 10.3: A converse that is deliberately weaker than one

If capacity is $C=1/2$ and a sequence has rate at least $R=3/4$, Fano’s bound gives $P_e\\ge1-(n/2+1)/(3n/4)$, approaching $1/3$. This rules out vanishing error but does not prove error tends to one. The distinction is visible in the algebra, and prevents attributing a strong converse to a weak-converse argument.

## What the proof gives at a chosen finite block length

The random-coding argument retained two error terms, and both can be bounded explicitly for a fixed finite input law. Information density on its positive joint support takes finitely many real values, so it has a finite variance. Chebyshev bounds the true-pair lower-tail term by that variance divided by block length and squared threshold gap.

The wrong-candidate term is exponential in minus block length times the difference between information, threshold gap and code rate. Adding these expressions therefore gives a concrete upper bound on the average error of at least one deterministic codebook, for every block length where the stated message count is used.

This is a proof-derived bound, not an observed performance value. It can be conservative, especially near capacity where the threshold gap is small and Chebyshev is loose. Improving it requires sharper concentration or a more precise analysis of the information-density distribution.

The two terms also expose a design tradeoff within the proof. Enlarging the threshold gap helps the true-pair concentration bound but weakens the exponential separation from wrong candidates. It must remain smaller than the available information-minus-rate gap. Choosing it after dropping one error term can therefore produce an invalid reported estimate.

Expurgation converts the resulting average-error bound into a maximum-error bound at a factor-of-two error cost and a bounded message-logarithm loss. Its numerical usefulness still depends on the complete bound being small enough before expurgation.

The codebook remains fixed and shared in this communication model. Sampling it once in an existence proof does not require fresh randomness at every message, but storing or agreeing a very large codebook can be expensive. The theorem amortises that fixed specification across uses rather than claiming zero implementation cost.

At a chosen finite block length, a responsible theorem application therefore records the input law, code rate, threshold gap, both probability terms and the criterion before and after expurgation. The limiting capacity statement is the first-order conclusion of this fuller argument, not a substitute for it.

## A message prior changes the meaning of average error

Average error in the coding theorem is defined for uniformly distributed messages. If the individual conditional error probabilities are e indexed by message, this average is their arithmetic mean. A different source prior instead weights the same conditional errors by that prior. A small uniform average alone does not guarantee a small error for every such prior: a prior concentrated on one poorly protected message can expose its large error.

Maximum-error control avoids this problem because every weighted average is bounded by the largest conditional error. Expurgation in the theorem creates that stronger guarantee by discarding a suitably small fraction of bad messages, at a negligible asymptotic rate cost. It also changes the permitted message set; an application needing every original message must encode its new representation or provide an additional protection rule. Keeping the original labels while silently deleting their difficult members would change the communication task. This distinction connects the mathematical error criterion to the source distribution actually supplied by an application.

## Exercises

### Exercise 10.1
<a id="noisy-channel-coding-theorem-ex-1"></a>

Why is a wrong random codeword independent of the received block in the random-coding proof?

<details>
<summary>Hint 1</summary>

Condition on the transmitted message index.

</details>
<details>
<summary>Hint 2</summary>

Only its codeword and channel noise generate the output.

</details>
<details>
<summary>Solution</summary>

All codewords were sampled independently. Given the transmitted index, the output depends on that codeword and fresh channel randomness, neither of which depends on another sampled codeword. Thus each wrong candidate has joint law $P^nQ^n$ with the output when averaging over codebooks.

</details>

### Exercise 10.2
<a id="noisy-channel-coding-theorem-ex-2"></a>

Derive the independent-pair threshold bound.

<details>
<summary>Hint 1</summary>

Apply Markov’s inequality to an exponential.

</details>
<details>
<summary>Hint 2</summary>

Its expectation is one.

</details>
<details>
<summary>Solution</summary>

For the nonnegative random variable $Z=2^{\\imath(\\widetilde X^n;Y^n)}$, $EZ=1$. Hence $P(\\imath>\\gamma)=P(Z>2^\\gamma)\\le2^{-\\gamma}$. Zero transition cells contribute $Z=0$, so they cause no undefined positive contribution.

</details>

### Exercise 10.3
<a id="noisy-channel-coding-theorem-ex-3"></a>

Why does small expected codebook error imply a good deterministic codebook exists?

<details>
<summary>Hint 1</summary>

An average cannot be below every value being averaged.

</details>
<details>
<summary>Hint 2</summary>

Select one codebook at each block length.

</details>
<details>
<summary>Solution</summary>

If every deterministic codebook had error greater than the displayed expectation bound, their average would also be greater. Therefore at least one has error no larger. Fixing such a codebook before communication removes the codebook-generation randomness from the actual communication protocol.

</details>

### Exercise 10.4
<a id="noisy-channel-coding-theorem-ex-4"></a>

Explain the need for a positive gap between rate and information in this proof.

<details>
<summary>Hint 1</summary>

The union bound contains $2^{n(R-I+\\delta)}$.

</details>
<details>
<summary>Hint 2</summary>

Its exponent must be negative.

</details>
<details>
<summary>Solution</summary>

Choose $\\delta>0$ with $R<I-\\delta$. Then the wrong-candidate term vanishes exponentially while the true-pair term vanishes by the weak law. At $R=I$, no positive $\\delta$ satisfies this condition, so this proof does not establish boundary achievability.

</details>

### Exercise 10.5
<a id="noisy-channel-coding-theorem-ex-5"></a>

Prove the expurgation message-count claim.

<details>
<summary>Hint 1</summary>

Treat individual error as a random variable over uniform messages.

</details>
<details>
<summary>Hint 2</summary>

Apply Markov at twice its mean.

</details>
<details>
<summary>Solution</summary>

The fraction of messages with error greater than $2\\varepsilon_n$ is at most one-half. Hence at least half remain with errors at most $2\\varepsilon_n$. Discarding the others costs at most one bit of total message logarithm and therefore at most $1/n$ in rate.

</details>

### Exercise 10.6
<a id="noisy-channel-coding-theorem-ex-6"></a>

Derive the entropy of the error-indicator decomposition in Fano’s proof.

<details>
<summary>Hint 1</summary>

The indicator is determined by message and estimate.

</details>
<details>
<summary>Hint 2</summary>

Expand the joint conditional entropy in two orders.

</details>
<details>
<summary>Solution</summary>

$H(M,E\\mid\\widehat M)=H(M\\mid\\widehat M)$ because the final indicator uncertainty given both is zero. The other order is $H(E\\mid\\widehat M)+H(M\\mid E,\\widehat M)$. Equating these expressions gives the decomposition used in the proof.

</details>

### Exercise 10.7
<a id="noisy-channel-coding-theorem-ex-7"></a>

Why is it wrong to assume iid codeword coordinates in the converse?

<details>
<summary>Hint 1</summary>

A code can impose parity checks across coordinates.

</details>
<details>
<summary>Hint 2</summary>

The converse must cover every code.

</details>
<details>
<summary>Solution</summary>

Structured codewords generally have coordinate dependence under the uniform message law. Assuming independence would exclude precisely many useful codes. The valid argument uses only output entropy subadditivity and channel conditional memorylessness, which remain true for correlated inputs.

</details>

### Exercise 10.8
<a id="noisy-channel-coding-theorem-ex-8"></a>

Does the proven converse establish error tending to one above capacity?

<details>
<summary>Hint 1</summary>

Inspect its quantitative rearrangement.

</details>
<details>
<summary>Hint 2</summary>

It gives a positive lower bound below one.

</details>
<details>
<summary>Solution</summary>

No. For rate $R>C$ it gives asymptotic error at least $1-C/R$. This suffices to exclude reliable communication but is a weak converse. A strong converse is a separate theorem requiring a sharper argument.

</details>

### Exercise 10.9
<a id="noisy-channel-coding-theorem-ex-9"></a>

What happens if capacity is zero?

<details>
<summary>Hint 1</summary>

Use the converse with any positive rate.

</details>
<details>
<summary>Hint 2</summary>

Then its asymptotic lower bound becomes one.

</details>
<details>
<summary>Solution</summary>

For a sequence with rate bounded below by $R>0$, the inequality gives $P_e\\ge1-1/(nR)$, tending to one. In this special zero-capacity case the same bound is strong enough, although it is not generally a strong-converse proof for positive capacity.

</details>

### Exercise 10.10
<a id="noisy-channel-coding-theorem-ex-10"></a>

State two reasons the theorem does not supply a practical modem.

<details>
<summary>Hint 1</summary>

Random codebooks can be enormous.

</details>
<details>
<summary>Hint 2</summary>

The law and asymptotic resource model must match the application.

</details>
<details>
<summary>Solution</summary>

The threshold decoder can require exponential search, and the theorem specifies no efficient code construction. It also gives asymptotic reliability for a known stationary memoryless law, not a finite-block guarantee under uncertain physical noise, synchronisation errors or hardware constraints.

</details>

## Summary

Random threshold coding achieves every rate below finite-channel capacity. Expurgation upgrades average to maximum error with vanishing rate loss. Fano’s inequality and memoryless entropy bounds prohibit reliable rates above capacity, while keeping the weak-converse and computational limitations explicit.
`;export{e as default};