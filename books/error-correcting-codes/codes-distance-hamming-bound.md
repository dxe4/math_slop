
# Codes, Distance and the Hamming Bound

Preparation is finite probability, counting, metric reasoning and the type estimates in Information Theory. This opening L4 chapter uses no linearity; finite fields enter in Chapter 2.

## A code is a constrained set of words

Let $\mathcal A$ be an alphabet of size $q\ge2$ and let $C\subseteq\mathcal A^n$ contain at least two words. No field structure is needed yet. The code’s size is $M=|C|$, and its rate is $(1/n)\log_qM$ alphabet symbols per transmitted coordinate, or $(1/n)\log_2M$ bits per coordinate.

Encoding chooses an injective map from messages to codewords. A decoder maps received words to messages or to an explicit failure symbol. The channel and the decoder’s objective must be declared separately: worst-case correction, maximum-likelihood inference and small average error are different tasks.

For $x,y\in\mathcal A^n$, Hamming distance is the number of coordinates where they differ. It is a metric. To prove the triangle inequality, every coordinate at which $x$ differs from $z$ must differ in at least one of the comparisons $(x,y)$ or $(y,z)$; counting gives $d_H(x,z)\le d_H(x,y)+d_H(y,z)$.

Minimum distance is
$$
d(C)=\min_{c\ne c'\in C}d_H(c,c').
$$
Its existence follows from finiteness. It depends on the metric and coordinate representation, not merely on the number of messages. A code can have the same size and length as another while possessing a very different minimum distance.

This chapter expands the distance and Hamming-code questions in Euler’s retained [Algebraic Coding Theory](../finite-algebra-computation/algebraic-coding-theory.md). The original source and exercises remain available. Linear algebra enters in the next chapter; the present theorems apply to nonlinear codes too.

## Detection and correction are different guarantees

Suppose the sender transmits $c$ and the receiver sees $y$ after at most $s$ substitutions. Membership testing detects the error whenever $y\notin C$. Every nonzero error of fewer than $d$ substitutions is detected, since another codeword that close would violate minimum distance.

The guarantee is sharp: choose two codewords at distance $d$ and substitute their differing coordinates. The corrupted word is another valid codeword, so membership alone cannot detect that change.

For correction, define the radius-$t$ ball $B_t(c)=\{y:d_H(c,y)\le t\}$. A decoder can correct every pattern of at most $t$ substitutions exactly when these balls around distinct codewords are disjoint.

If $2t<d$, the triangle inequality proves disjointness. Conversely if $d\le2t$, choose a nearest codeword pair and divide their differing positions into two groups, each of size at most $t$. A received word taking one codeword’s symbols on the first group and the other’s on the second lies within radius $t$ of both. No decoder can know which was sent.

Thus the guaranteed substitution-correction radius is $\lfloor(d-1)/2\rfloor$. The detection radius is $d-1$. Confusing them can overstate a code’s protection by nearly a factor of two.

## Erasures and mixed corruption

An erasure marks a coordinate as unknown; the receiver knows its location. If fewer than $d$ coordinates are erased, two compatible codewords would agree outside those positions and differ in fewer than $d$ places, impossible. Hence every such erasure pattern is uniquely recoverable.

With at most $t$ unmarked errors and $e$ erasures, compare two candidate codewords compatible with the received word. Outside erasures they can differ only in the union of their at most $t$ mismatches each. Including erased positions gives distance at most $2t+e$. Therefore
$$
2t+e<d
$$
guarantees unique reconstruction.

This condition is also sharp as a worst-case statement. Starting from a minimum-distance pair, erase enough differing coordinates that the remaining differences can be divided between two groups of at most $t$ each. The resulting received word is compatible with either codeword. When the budgets exceed the pair’s distance, unused budget need not be spent.

A stochastic channel can make some error patterns much more likely than others. A distance theorem ignores those probabilities and protects every pattern inside its stated budget. This is a strong guarantee but can be conservative relative to average-error decoding.

## Counting a Hamming ball

A radius-$t$ ball has the same size around every centre:
$$
V_q(n,t)=\sum_{j=0}^t\binom nj(q-1)^j.
$$
For exactly $j$ substitutions, choose the $j$ positions, then choose one of $q-1$ new symbols at each. Distinct choices give distinct words. No vector-space operation is needed.

**Theorem 1.1 (Hamming or sphere-packing bound).** If a code corrects every pattern of at most $t$ substitutions, then
$$
M\,V_q(n,t)\le q^n.
$$
**Proof.** The $M$ radius-$t$ balls are disjoint and all lie in the ambient space of $q^n$ words. Summing their equal cardinalities gives the inequality. ∎

A code for which equality holds is perfect at that radius: every received word lies in exactly one guaranteed decoding ball. Perfect packing does not mean that arbitrarily many errors are correctable. Errors beyond the radius can land in a different ball and decode to the wrong message.

The bound is necessary, not sufficient. An integer triple satisfying the inequality need not correspond to any code. Existence constructions and lower bounds on the best code size are separate questions treated later.

## A first asymptotic packing consequence

Define the $q$-ary entropy function, in alphabet-symbol units, by
$$
h_q(u)=\frac{h_2(u)+u\log_2(q-1)}{\log_2q}.
$$
For $0<u<(q-1)/q$, it is increasing. Its derivative has the sign of $\log((q-1)(1-u)/u)$, which is positive precisely in that range.

For a fixed $\tau<(q-1)/q$, the volume $V_q(n,\lfloor n\tau\rfloor)$ has exponential rate $h_q(\tau)$:
$$
\frac1n\log_qV_q(n,\lfloor n\tau\rfloor)\longrightarrow h_q(\tau).
$$
Here is a proof without an unmentioned asymptotic factorial formula. The binary type-class estimates give
$$
\frac1{n+1}2^{nh_2(j/n)}\le\binom nj\le2^{nh_2(j/n)}.
$$
Multiplying by $(q-1)^j$ changes the exponent to $n[h_2(j/n)+(j/n)\log_2(q-1)]$. For $j\le n\tau$, that exponent is at most the endpoint exponent by monotonicity. Summing at most $n+1$ terms gives an upper bound with only a polynomial factor. Taking the last term gives a matching lower bound, again up to a polynomial factor. Continuity handles the floor.

If a sequence of codes has relative minimum distance tending to $\delta>0$, its guaranteed radius divided by $n$ tends to $\delta/2$. Sphere packing therefore gives
$$
\limsup \frac1n\log_q|C_n|\le1-h_q(\delta/2).
$$
This is an asymptotic necessary tradeoff, not an explicit construction or a proof that equality can be achieved.

## From a distance guarantee to a stochastic error bound

On a $q$-ary symmetric substitution channel, suppose each coordinate is changed independently with probability $p$. Conditional on a change, the alternative symbol is uniform among the other $q-1$. The number of changed coordinates is binomial$(n,p)$.

A decoder guaranteed to correct up to $t$ substitutions therefore has block error at most
$$
P(\operatorname{Bin}(n,p)>t)
=\sum_{j=t+1}^n\binom njp^j(1-p)^{n-j}.
$$
It may also decode some heavier errors correctly, so this is an upper bound, not generally an equality.

If $t/n\ge a>p$ for a fixed gap, an exponential bound follows. For $S\sim\operatorname{Bin}(n,p)$ and $\lambda>0$, Markov gives
$$
P(S\ge na)\le e^{-\lambda na}(1-p+pe^\lambda)^n.
$$
Minimising sets $e^\lambda=a(1-p)/[p(1-a)]$ for $a\in(p,1)$. Substitution yields $P(S\ge na)\le2^{-nd_2(a\Vert p)}$, with integer thresholds interpreted through the event. Thus distance plus a noise assumption can yield a probabilistic performance bound.

For correlated or adversarial errors, the binomial calculation is invalid. The combinatorial correction guarantee remains true inside its radius, but estimating the probability of leaving that radius requires the actual error law.

## Rate, alphabet and physical interpretation

A $q$-ary coordinate carries at most $\log_2q$ bits before redundancy. Comparing a symbol rate with a bit capacity requires this conversion. A code over a large finite field is not automatically more efficient if each field symbol costs more transmission resources.

Likewise a parity check can be an algebraic relation among symbols, but transmitting those symbols may involve modulation, synchronisation and quantisation. The abstract Hamming model treats each coordinate as an already framed symbol. Insertions, deletions and timing slips require different metrics or an added framing layer.

The chapter’s results do not assume a secret encoder or key. Public error-correcting codes aim at reliable recovery under a declared corruption model. They do not by themselves hide a message or authenticate the sender.

## What a decoding specification must contain

A mathematically complete decoding claim names the code, the received alphabet, the error model, the decoder and the success criterion. “Corrects three errors” normally means all patterns of at most three substitutions; “small error probability” needs a source/message distribution and a stochastic channel.

An efficient implementation claim also needs an operation model and input-size dependence. Exhaustively searching all codewords is a valid mathematical decoder, but its cost can be exponential in message dimension. Later algebraic and graph-based methods exploit structure to reduce this cost under specific assumptions.

No decoder has been executed in this manuscript. The worked examples below are explicit finite derivations whose conclusions follow from the displayed sets and inequalities.

## Unequal message protection

Some applications protect different messages with different guaranteed radii $t_c$. The necessary geometric condition is still disjointness of the corresponding balls. Counting then gives
$$
\sum_{c\in C}V_q(n,t_c)\le q^n.
$$
A sufficient distance condition is $d_H(c,c')>t_c+t_{c'}$ for every distinct pair. The proof is the same triangle-inequality argument, now retaining the two possibly different radii.

This is useful when rare or costly messages deserve stronger protection. Their probabilities do not alter the volume inequality; they enter only when one chooses an average performance objective. Replacing every radius by their probability-weighted average would be invalid, because overlapping balls cannot be repaired by averaging their sizes.

## Worked example 1.1: A perfect binary repetition code

Take $C=\{000,111\}$. Its distance is three, so one substitution is correctable. Each radius-one ball has $1+3=4$ words. Two such balls fill all eight binary triples, attaining Hamming’s bound. Majority decoding identifies the ball. Two flips can instead move $000$ into the ball of $111$, so perfect packing does not extend the guaranteed radius.

## Worked example 1.2: A parity code on three bits

The even-parity set is $\{000,011,101,110\}$. Its minimum distance is two. Every single substitution changes parity and is detected, but single-error correction is impossible: received $001$ is distance one from both $000$ and $011$. One erasure is recoverable from the parity relation. The same code thus has different detection, substitution-correction and erasure guarantees.

## Worked example 1.3: An impossible binary parameter request

A binary length-five code correcting every single error has radius-one ball volume six. Hamming’s bound gives $M\le\lfloor32/6\rfloor=5$. Hence a code with eight messages and that guarantee cannot exist, whether linear or nonlinear. The bound does not assert that five messages are achievable; it is an obstruction, and a construction must be supplied separately.

## An exact average-decoding formula

Fix uniform messages and any finite output channel from codewords to received words. For each received value, an average-error-optimal decoder chooses a codeword with the largest conditional likelihood of that value. Its average correct-decoding probability is the sum of those maximum likelihoods over received values, divided by the number of messages.

To prove it, write average success as a sum over received values. The decoder’s choice contributes one of the competing likelihoods at each value, independently of choices at other values. Choosing the maximum therefore optimises each summand separately. Ties can be resolved by any fixed rule without changing that average.

This formula does not automatically optimise the largest conditional error among messages. Average and maximum error are different objectives unless symmetry or another argument relates them.

Consider a simple bounded-noise channel that chooses a received word uniformly from the radius-$t$ ball around the transmitted codeword. Every nonzero candidate likelihood is the reciprocal ball volume. The formula then becomes the size of the union of all such balls divided by code size times ball volume.

If the balls are disjoint, their union size is the sum of their sizes and success is one. If two balls overlap, the sum counts those received words more than once while the union does not, so optimal average success is strictly below one. The overlap represents genuine ambiguity under this particular uniform-ball channel.

Thus the geometric correction theorem and the probabilistic decision formula agree exactly when their models are aligned. Hamming’s packing inequality follows by bounding the union by the whole ambient space, but that count alone still cannot decide whether a particular arrangement has overlap.

On a symmetric independent-substitution channel, likelihoods vary with distance instead of being constant inside a ball. The same optimal-decoding formula remains true, while its simplification changes. Merely knowing the ball volume is then insufficient to calculate the exact optimum probability.

This example makes the role of a noise model concrete. The code set and metric determine possible distances; the channel law determines their statistical weights; the decoder objective determines how those weights are compared.

## Cartesian products protect two messages separately

Let two nontrivial codes have lengths n and m, and minimum distances d and e, over the same alphabet. Form a code by concatenating every word of the first with every word of the second. Its size is the product of their sizes and its length is n plus m. Its minimum distance is the smaller of d and e, rather than their sum. Indeed, two distinct concatenated words differ in at least one block, giving that lower bound, and a pair attaining either component distance while keeping the other block fixed attains the smaller value.

This elementary construction separates parallel transmission of two independent message blocks from repeating or jointly encoding one message. It does not force both blocks to change when the message changes. The distinction matters when reading a concatenation diagram: adding component distances requires a construction ensuring that each outer-message difference activates sufficiently many inner blocks. Mere juxtaposition provides no such guarantee. A singleton component can be treated separately as fixed padding, with its distance convention stated explicitly.

## Exercises

### Exercise 1.1
<a id="codes-distance-hamming-bound-ex-1"></a>

Prove the Hamming triangle inequality by counting coordinates.

<details>
<summary>Hint 1</summary>

A differing endpoint coordinate must differ along the intermediate path.

</details>
<details>
<summary>Hint 2</summary>

Take the union of those two differing-position sets.

</details>
<details>
<summary>Solution</summary>

The set where $x$ and $z$ differ is contained in the union of the sets where $x$ differs from $y$ and $y$ differs from $z$. Its cardinality is at most their cardinality sum. This gives the metric inequality without any field structure.

</details>

### Exercise 1.2
<a id="codes-distance-hamming-bound-ex-2"></a>

Why is the correction condition strict, $2t<d$?

<details>
<summary>Hint 1</summary>

A pair at distance exactly $2t$ can have a midpoint word.

</details>
<details>
<summary>Hint 2</summary>

Split its differing coordinates equally.

</details>
<details>
<summary>Solution</summary>

Construct a received word matching each codeword on one half of their differing positions. It is at distance $t$ from both, so no decoder can guarantee a correct choice. The strict inequality excludes that ambiguity.

</details>

### Exercise 1.3
<a id="codes-distance-hamming-bound-ex-3"></a>

Compute the ternary radius-one ball size at length four.

<details>
<summary>Hint 1</summary>

One unchanged word and one changed position.

</details>
<details>
<summary>Hint 2</summary>

There are two replacement choices per position.

</details>
<details>
<summary>Solution</summary>

The volume is $1+4(3-1)=9$. A ternary code correcting one substitution therefore has at most $3^4/9=9$ words. Achieving that integer upper bound still requires a construction.

</details>

### Exercise 1.4
<a id="codes-distance-hamming-bound-ex-4"></a>

Can a code detect one error without correcting one?

<details>
<summary>Hint 1</summary>

Use the even-parity example.

</details>
<details>
<summary>Hint 2</summary>

Its distance is two.

</details>
<details>
<summary>Solution</summary>

Yes. Distance two rules out one substitution landing on another codeword, so it is detected. But radius-one balls can overlap because $2t=d$, preventing guaranteed correction. Detection and correction are distinct tasks.

</details>

### Exercise 1.5
<a id="codes-distance-hamming-bound-ex-5"></a>

Show that $e<d$ erasures have at most one codeword completion.

<details>
<summary>Hint 1</summary>

Compare two completions.

</details>
<details>
<summary>Hint 2</summary>

They differ only in erased positions.

</details>
<details>
<summary>Solution</summary>

Two distinct compatible codewords would have distance at most $e<d$, contradicting the minimum. This proves uniqueness. A transmitted codeword ensures existence in the noiseless unerased positions; arbitrary inconsistent received data may have no completion.

</details>

### Exercise 1.6
<a id="codes-distance-hamming-bound-ex-6"></a>

What is the rate of a code with $q^k$ words?

<details>
<summary>Hint 1</summary>

Take the base-$q$ message logarithm.

</details>
<details>
<summary>Hint 2</summary>

Convert units only when needed.

</details>
<details>
<summary>Solution</summary>

Its symbol rate is $k/n$ and its bit rate per coordinate is $k\log_2q/n$. These numbers coincide only for $q=2$. A field is not required merely to count $q^k$ codewords.

</details>

### Exercise 1.7
<a id="codes-distance-hamming-bound-ex-7"></a>

Why is the binomial error bound not generally an equality?

<details>
<summary>Hint 1</summary>

The decoder is guaranteed only inside the radius.

</details>
<details>
<summary>Hint 2</summary>

It may succeed outside as well.

</details>
<details>
<summary>Solution</summary>

Every event of at most $t$ errors succeeds, so failure is contained in the event of more than $t$ errors. Some heavier patterns can still decode correctly. Hence the tail probability is an upper bound unless a separate decoder analysis proves exact failure on every heavier pattern.

</details>

### Exercise 1.8
<a id="codes-distance-hamming-bound-ex-8"></a>

Why does correlated noise invalidate the displayed binomial tail?

<details>
<summary>Hint 1</summary>

The number of changes need not be a sum of independent Bernoulli variables.

</details>
<details>
<summary>Hint 2</summary>

Marginal error probabilities alone do not determine its law.

</details>
<details>
<summary>Solution</summary>

A burst channel can change many positions together while retaining the same one-coordinate error probability. Its weight distribution differs from binomial, so the formula does not apply. The distance guarantee itself remains true for each individual pattern within the radius.

</details>

### Exercise 1.9
<a id="codes-distance-hamming-bound-ex-9"></a>

Explain why Hamming’s bound is not an existence theorem.

<details>
<summary>Hint 1</summary>

Disjoint-ball volume is only one necessary constraint.

</details>
<details>
<summary>Hint 2</summary>

A numerical inequality does not arrange the centres.

</details>
<details>
<summary>Solution</summary>

The inequality says that any valid code’s balls would fit in the ambient count. It does not construct mutually distant codewords or prove that all packing constraints can be met. Parameter feasibility needs a construction or a separate existence argument.

</details>

### Exercise 1.10
<a id="codes-distance-hamming-bound-ex-10"></a>

State what extra assumptions are needed to translate relative distance into vanishing stochastic error.

<details>
<summary>Hint 1</summary>

A probabilistic noise law and a gap below the correction fraction.

</details>
<details>
<summary>Hint 2</summary>

Independence supplies concentration in the symmetric-channel example.

</details>
<details>
<summary>Solution</summary>

For independent substitutions of fixed probability $p$, if the guaranteed radius fraction stays above $p$ by a fixed positive amount, binomial concentration makes leaving the radius unlikely. With other channels one needs an appropriate weight-tail bound. Relative distance alone specifies a worst-case radius, not its probability.

</details>

## Summary

Minimum Hamming distance gives exact worst-case detection, correction and erasure thresholds. Disjoint decoding balls prove the Hamming bound and its entropy-rate consequence. A stochastic channel can turn the radius into an error bound only after its noise law is explicitly supplied.
