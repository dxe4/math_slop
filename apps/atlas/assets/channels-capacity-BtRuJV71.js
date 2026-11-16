var e=`---
parent_id: book-information-theory
chapter_id: channels-capacity
title: "Channels and Capacity"
level: advanced-undergraduate
license: CC BY-SA 4.0
---

# Channels and Capacity

Preparation is finite mutual information, entropy concavity, stochastic matrices and divergence. The channel is stationary and memoryless, has finite alphabets, has no input-cost restriction, and receives no feedback in the coding model developed next.

## A finite discrete memoryless channel

A discrete memoryless channel has a finite input alphabet $\\mathcal X$, a finite output alphabet $\\mathcal Y$ and transition probabilities $W(y\\mid x)$ with $\\sum_yW(y\\mid x)=1$ for every input. Given an input block, its output law is
$$
W^n(y^n\\mid x^n)=\\prod_{i=1}^nW(y_i\\mid x_i).
$$
This is the memoryless assumption: conditional on the whole input block, channel outputs are independent and each uses the same single-letter transition rule.

An input law $P$ induces the joint law $p(x)W(y\\mid x)$ and output law $(PW)(y)=\\sum_xp(x)W(y\\mid x)$. We write $I(P,W)$ for the resulting mutual information. The channel matrix alone does not determine this value; the source distribution feeding the channel also matters.

A block code selects an input block for each message. Code symbols within that input block need not be independent. Memorylessness describes the conditional channel, not the distribution imposed by an encoder. This distinction becomes essential in the converse proof of the next chapter.

For now, the input alphabet has no cost constraint. A power, energy or symbol-cost restriction changes the optimisation domain and must be included explicitly. Gaussian channels will have a power constraint because their input alphabet is unbounded.

## Single-letter capacity

Define the information capacity
$$
C=\\max_P I(P,W).
$$
The maximum ranges over all probability vectors on the finite input alphabet. Since
$$
I(P,W)=H(PW)-\\sum_xp(x)H(W(\\cdot\\mid x)),
$$
it is continuous even when some coordinates vanish: finite entropy extends continuously to boundary probabilities. The probability simplex is compact, so the maximum is attained.

The same formula shows that $I(P,W)$ is concave in $P$. The output law depends linearly on $P$, entropy is concave, and the second term is linear. Thus a mixture of input laws has information at least the mixture of their information values. This is a statement with the channel fixed; it does not say mutual information is jointly concave in every channel and input.

The elementary bounds are
$$
0\\le C\\le\\min\\{\\log_2|\\mathcal X|,\\log_2|\\mathcal Y|\\}.
$$
They follow from $I(X;Y)\\le\\min\\{H(X),H(Y)\\}$. A very large input alphabet does not guarantee high capacity if most symbols produce indistinguishable output distributions.

The word “capacity” anticipates an operational theorem. This chapter defines and computes the maximised information. Chapter 10 proves that it is exactly the supremum reliable communication rate for the stated block-coding problem. Defining a maximum is not itself a coding proof.

## Binary symmetric channels

For a binary symmetric channel, $Y=X\\oplus N$ with $N$ independent Bernoulli$(q)$ noise. For every input distribution,
$$
H(Y\\mid X)=h_2(q),\\qquad H(Y)\\le1.
$$
Therefore $I(X;Y)\\le1-h_2(q)$. A fair input makes the output fair, attaining the upper bound:
$$
C_{\\rm BSC}(q)=1-h_2(q).
$$
The formula is valid on the entire interval $0\\le q\\le1$. For $q>1/2$, complementing the output converts the channel into crossover $1-q$, so capacity is unchanged. At $q=1$, the channel is deterministic and invertible, with capacity one. At $q=1/2$, both transition rows are identical and capacity is zero.

A high raw bit error probability is therefore not a complete description of communication quality. A receiver who knows that every bit is flipped can invert it. What matters is the ambiguity of the channel law after the receiver uses its known structure.

For $0<q<1/2$, capacity is positive but below one. Coding introduces correlations and redundancy across transmitted bits so that a message can be recovered despite many individual symbol errors. An uncoded use of each input bit cannot generally achieve vanishing block error at a positive fraction of this rate.

## Binary erasure channels

An erasure channel outputs $X$ with probability $1-e$ and a marked erasure symbol $?$ with probability $e$, independently of the input. Introduce an erasure indicator $E$. It is independent of $X$ and is visible in the output.

When the output is not erased, the source bit is known; when it is erased, its conditional law remains the prior. Hence
$$
H(X\\mid Y)=eH(X),\\qquad I(X;Y)=(1-e)H(X).
$$
A fair input gives
$$
C_{\\rm BEC}(e)=1-e.
$$
The erasure marker matters. An erased position is known to be unreliable, whereas a crossover can masquerade as a correct symbol. Replacing erasures by unmarked random bits creates a different channel with lower or equal capacity by data processing.

For a fixed erasure pattern, recovery from a linear code becomes a system of linear equations. This connection motivates the algebraic code chapter. It does not mean that every erasure pattern of a given size is recoverable by every code of the same rate; rank and distance determine that property.

## Deterministic and completely uninformative channels

If $Y=f(X)$ deterministically, then $I(X;Y)=H(Y)$. Let $r$ be the number of distinct output values attained by $f$. Capacity is $\\log_2r$: no output distribution can have greater entropy, and choosing one input representative per output with equal probabilities makes $Y$ uniform on that image.

Different input symbols mapping to the same output cannot convey distinguishable messages in one channel use. Their multiplicity does not increase $r$. This is a simple example of an input alphabet larger than the operationally distinguishable alphabet.

At the opposite extreme, capacity is zero exactly when all channel rows are identical. If the rows are identical, the output law does not depend on input, giving independence under every input distribution. Conversely, if two rows differ, assign positive probability one-half to their two input symbols. The resulting input and output cannot be independent: independence would require those two conditional output laws to coincide. Gibbs inequality then gives strictly positive mutual information.

This equivalence is finite-alphabet and unconstrained. If a cost constraint forbids all but one useful input, its constrained capacity can be zero even when unused transition rows differ.

## A divergence characterisation of a maximising input

Let $P^\\star$ maximise information and write $Q^\\star=P^\\star W$. For any output reference law $Q$ with adequate support, expansion gives
$$
\\sum_xp(x)D(W_x\\Vert Q)=I(P,W)+D(PW\\Vert Q),
$$
where $W_x=W(\\cdot\\mid x)$. In particular the left side upper-bounds mutual information.

At an unconstrained maximiser, every channel row is supported inside $Q^\\star$. Otherwise adding an arbitrarily small mass to an input with a newly reachable output produces an output-entropy increase of order $-\\varepsilon\\log\\varepsilon$, dominating the linear conditional-entropy change and increasing information.

We can therefore differentiate along the mixture $(1-t)P^\\star+t\\delta_x$. The right derivative of information at zero is
$$
D(W_x\\Vert Q^\\star)-C.
$$
To verify it, differentiate $H(PW)-\\sum_up(u)H(W_u)$: the constant derivative terms from output probabilities cancel because row sums are one, and the remaining terms simplify to the displayed divergence difference. Maximality forces
$$
D(W_x\\Vert Q^\\star)\\le C
$$
for every input symbol. Their $P^\\star$-weighted average is $C$, so equality holds for every symbol with positive optimal input mass.

Conversely, if a proposed input law has output $Q^\\star$ and information $C^\\star$, and every row satisfies $D(W_x\\Vert Q^\\star)\\le C^\\star$, then every other input law satisfies
$$
I(P,W)\\le\\sum_xp(x)D(W_x\\Vert Q^\\star)\\le C^\\star.
$$
This is a certificate of global optimality. It avoids assuming that a numerical stationary point alone proves capacity.

## Independent channel uses and feedback scope

For independent copies of a fixed channel and an iid input distribution, the information is additive: $I(X^n;Y^n)=nI(X;Y)$. This follows either from the entropy chain rule or the divergence of product laws. The next chapter proves an upper bound of $nC$ even for correlated input blocks in a code without feedback.

Feedback means later inputs can depend on previous outputs. The joint factorisation then differs from choosing an entire input block before transmission. Classical memoryless-channel feedback results exist, but they require their own coding model and proof. They are not being inserted silently into the no-feedback theorem here.

Likewise, a channel whose noise has memory cannot be analysed by multiplying its one-letter transition matrix. A one-symbol marginal may hide predictable bursts or long-range dependence that a code can exploit. The channel specification and available observations determine the correct information-rate problem.

The optional [noisy-channel article](/articles/information-theory-noisy-channel/) is a visual companion. The numerical capacity formulas above are analytical consequences of their transition laws, not empirical measurements of a physical link.

## A symmetry criterion that really proves uniform optimality

A useful sufficient condition is that every channel row is a permutation of the same probability vector and every output column has the same sum. All row entropies then equal a common number $h_W$, so
$$
I(P,W)=H(PW)-h_W\\le\\log_2|\\mathcal Y|-h_W.
$$
For uniform input, the equal-column-sum condition makes the output uniform: its probabilities are the common column sum divided by $|\\mathcal X|$. Since all output probabilities sum to one, each must equal $1/|\\mathcal Y|$. Uniform input therefore attains the upper bound.

Both conditions matter. Equal row entropies alone do not guarantee that any input can make the output uniform. Informally declaring a matrix “symmetric-looking” is insufficient; the entropy upper bound and an attaining input must be checked.

This criterion includes the binary symmetric channel. It does not include every channel whose capacity happens to have a simple expression, and it does not imply uniqueness of the optimal input. The deterministic grouping example can have several distinct input distributions producing the same uniform output and therefore the same capacity.

## Worked example 9.1: Complementing a highly noisy channel

For a BSC with crossover $q=3/4$, define $Z=1-Y$. Then $Z=X\\oplus N'$ with crossover $1/4$. Output complementation is invertible, so mutual information and capacity are unchanged: $C=1-h_2(1/4)$. Guessing $X=Y$ would err three quarters of the time, but guessing $X=1-Y$ errs one quarter. Neither single-use error probability is the coding theorem’s asymptotic message error criterion.

## Worked example 9.2: Grouping six symbols into three outputs

Let input symbols be $0,\\ldots,5$ and output $Y=\\lfloor X/2\\rfloor$. Only three output values are possible, so capacity is at most $\\log_2 3$. Choosing $X$ uniformly on $\\{0,2,4\\}$ makes those outputs uniform and achieves it. Uniform input on all six symbols also works because each output fibre has equal size. Unequal fibre sizes would make uniform input generally suboptimal.

## Worked example 9.3: An erasure channel and a degraded version

Take erasure probability $e=1/2$. Its capacity is one-half bit per use. If a processor replaces each erasure independently by a fair unmarked bit, the final binary output equals the input except when an erasure occurs and the replacement disagrees. That happens with probability $1/4$, giving a BSC of capacity $1-h_2(1/4)$. Data processing ensures this is no larger than one-half. Keeping the erasure flag is valuable side information for decoding.

## Input costs change the feasible experiment

Assign a finite nonnegative cost to each input symbol and limit its expected value to a budget. The cost-constrained information capacity maximises the same mutual information, but only over probability vectors meeting that additional linear inequality. The feasible set is compact whenever nonempty, so a maximum is still attained.

This constrained capacity is nondecreasing in the budget because feasible sets enlarge. It is also concave in that budget. Mix input laws attaining two feasible budget values: their mean cost mixes linearly, and input-law concavity makes their information at least the corresponding weighted information values.

For a noiseless binary channel with cost zero for symbol zero and one for symbol one, the input success probability cannot exceed the budget. Binary entropy is increasing up to one-half, so the optimum uses the budget when it is below one-half and uses a fair input for larger budgets. The unconstrained capacity is recovered only after enough resource is available.

The same function supplies a block converse under an average cost constraint. Each coordinate’s information is at most constrained capacity at that coordinate’s expected cost. Sum those inequalities, apply concavity to average their budgets, and then use monotonicity at the allowed block-average cost. The total information is at most block length times the constrained single-letter value.

This argument handles correlated codeword coordinates; it does not assume an iid code input. It is a converse, however, and does not by itself construct a codebook satisfying a deterministic cost limit. Achievability needs the random-code concentration or expurgation appropriate to that particular constraint.

Costs must also describe the resource actually counted. Charging only occurrences of a costly input can be meaningful for energy, while a fixed-duration use still consumes time even when the zero-cost symbol is sent. Rates per use and rates per unit cost are then different optimisation problems.

The example shows why an unconstrained channel matrix and its capacity are not the whole engineering specification. An input distribution can maximise information while violating the actual resource budget. Naming that budget before optimisation keeps the resulting numerical rate tied to the permitted experiment.

## Parallel independent channels have additive capacity

Consider two finite channels used side by side, with independent channel noise conditional on their two inputs. Their inputs may be dependent. The joint output entropy is at most the sum of its two marginal output entropies. Conditional on the entire input pair, output conditional entropy is the sum of the individual conditional entropies by the product channel law. Subtracting gives joint input-output mutual information at most the sum of the two individual mutual informations, hence at most the sum of the two capacities.

Choose independent capacity-achieving inputs for the two channels. Their outputs are then independent too, making the entropy inequality an equality and attaining the capacity sum. This proves additivity for a product of independent finite channels. The proof does not cover a shared input cost coupling the two channels, correlated noise, or a common state unknown to the receiver; those alter the feasible distributions or the conditional entropy factorization. The product hypothesis is an operational assumption, not merely a diagram with two arrows.

## Exercises

### Exercise 9.1
<a id="channels-capacity-ex-1"></a>

Prove that finite channel capacity is attained.

<details>
<summary>Hint 1</summary>

Express information using output entropy and average row entropy.

</details>
<details>
<summary>Hint 2</summary>

Use continuity on the compact probability simplex.

</details>
<details>
<summary>Solution</summary>

Finite entropy is continuous including at zero coordinates. The output law is a linear function of the input law, and the average row entropy is linear. Hence information is continuous on a compact simplex and attains its maximum. No assumption that the optimum is interior is needed.

</details>

### Exercise 9.2
<a id="channels-capacity-ex-2"></a>

Show information is concave in the input law for a fixed channel.

<details>
<summary>Hint 1</summary>

Output laws mix linearly.

</details>
<details>
<summary>Hint 2</summary>

Subtract a linear term from a concave term.

</details>
<details>
<summary>Solution</summary>

For $P=\\lambda P_1+(1-\\lambda)P_2$, $PW=\\lambda P_1W+(1-\\lambda)P_2W$. Entropy concavity bounds $H(PW)$ below by the weighted output entropies, while conditional output entropy is exactly their weighted average. Their difference gives the asserted concavity.

</details>

### Exercise 9.3
<a id="channels-capacity-ex-3"></a>

Find capacity of a binary channel whose output is always zero.

<details>
<summary>Hint 1</summary>

All transition rows coincide.

</details>
<details>
<summary>Hint 2</summary>

The output is independent of every input.

</details>
<details>
<summary>Solution</summary>

Capacity is zero because $H(Y)=0$ and therefore $I(X;Y)=0$ for every input law. The written input alphabet may still contain two symbols, but they are operationally indistinguishable at the receiver.

</details>

### Exercise 9.4
<a id="channels-capacity-ex-4"></a>

Find capacity of a noiseless channel with five possible outputs.

<details>
<summary>Hint 1</summary>

The channel is deterministic and injective.

</details>
<details>
<summary>Hint 2</summary>

Choose the input uniform.

</details>
<details>
<summary>Solution</summary>

Mutual information equals input entropy, at most $\\log_2 5$. A uniform input attains this bound, so capacity is $\\log_2 5$ bits per use. This can be nonintegral because rate is measured across many uses, not as a one-use binary label length.

</details>

### Exercise 9.5
<a id="channels-capacity-ex-5"></a>

Prove the BSC capacity formula when crossover probability is one.

<details>
<summary>Hint 1</summary>

The channel complements every bit.

</details>
<details>
<summary>Hint 2</summary>

Complementation is invertible.

</details>
<details>
<summary>Solution</summary>

The output determines the input exactly and can be fair under a fair input. Thus $I(X;Y)=H(X)$ and capacity is one. The formula agrees because $h_2(1)=0$. A raw error rate of one under the identity decoder does not imply an uninformative channel.

</details>

### Exercise 9.6
<a id="channels-capacity-ex-6"></a>

For a BEC, derive the conditional entropy formula directly.

<details>
<summary>Hint 1</summary>

Separate erased and unerased observations.

</details>
<details>
<summary>Hint 2</summary>

Erasure is independent of the source.

</details>
<details>
<summary>Solution</summary>

With probability $1-e$, the output reveals the source exactly and its conditional entropy is zero. With probability $e$, the erasure leaves the original input law unchanged. Averaging yields $H(X\\mid Y)=eH(X)$ and therefore information $(1-e)H(X)$.

</details>

### Exercise 9.7
<a id="channels-capacity-ex-7"></a>

Why does an arbitrary code not generally produce iid channel inputs?

<details>
<summary>Hint 1</summary>

Each message chooses a whole block.

</details>
<details>
<summary>Hint 2</summary>

Codewords can have algebraic constraints across coordinates.

</details>
<details>
<summary>Solution</summary>

A linear codeword, for example, has parity constraints linking its coordinates. The message-induced block law is therefore correlated even though the channel acts independently conditional on the input. Coding converses must handle such correlated inputs rather than assuming iid transmission.

</details>

### Exercise 9.8
<a id="channels-capacity-ex-8"></a>

Prove the reference-output divergence identity.

<details>
<summary>Hint 1</summary>

Expand each row divergence.

</details>
<details>
<summary>Hint 2</summary>

Insert and subtract the log output probability.

</details>
<details>
<summary>Solution</summary>

Write $\\log(W(y\\mid x)/Q(y))=\\log(W(y\\mid x)/(PW)(y))+\\log((PW)(y)/Q(y))$ on positive joint cells. Averaging the first term gives $I(P,W)$; summing over $x$ in the second gives $D(PW\\Vert Q)$. Compatible support ensures finite expressions.

</details>

### Exercise 9.9
<a id="channels-capacity-ex-9"></a>

Show that distinct channel rows imply positive unconstrained capacity.

<details>
<summary>Hint 1</summary>

Assign half the mass to each of two distinct rows.

</details>
<details>
<summary>Hint 2</summary>

Independence would force both rows to equal the output marginal.

</details>
<details>
<summary>Solution</summary>

For that two-point input law, zero information would imply independence and hence identical conditional output distributions for the two positive-probability inputs. This contradicts the row choice. Thus the information is strictly positive, and capacity is at least that value.

</details>

### Exercise 9.10
<a id="channels-capacity-ex-10"></a>

Does a capacity formula alone exhibit an efficiently decodable code?

<details>
<summary>Hint 1</summary>

A maximum is an information optimisation.

</details>
<details>
<summary>Hint 2</summary>

An operational theorem and an algorithm are additional claims.

</details>
<details>
<summary>Solution</summary>

No. Computing the maximised single-letter information identifies a candidate limiting rate. The next chapter proves existence of reliable codes at lower rates, but even that random-coding proof need not give an efficient decoder. Practical constructions require further algebraic or algorithmic work.

</details>

## Summary

For a finite memoryless channel, capacity is an attained concave input-law optimisation. Symmetric, erasure, deterministic and uninformative channels admit explicit formulas. A divergence certificate characterises optimal inputs. Operational reliability and algorithmic decoding remain separate claims.
`;export{e as default};