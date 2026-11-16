var e=`---
parent_id: book-error-correcting-codes
chapter_id: convolutional-codes
title: "Convolutional Codes"
level: graduate
license: CC BY-SA 4.0
---

# Convolutional Codes

Preparation is polynomial matrices, finite-state graphs, conditional likelihood and dynamic programming. The encoder has full row rank over the rational-function field; packet start/end states and the memoryless observation assumptions are stated before decoding.

## Encoding a stream with finite memory

A convolutional encoder mixes current input symbols with a finite history. Fix matrices $G_0,\\ldots,G_m$ over $\\mathbb F_q$, each $k\\times n$, and define the polynomial matrix
$$
G(D)=G_0+G_1D+\\cdots+G_mD^m.
$$
For row-vector inputs $u_t\\in\\mathbb F_q^k$ with $u_t=0$ before time zero, output
$$
v_t=\\sum_{j=0}^m u_{t-j}G_j.
$$
Equivalently $v(D)=u(D)G(D)$. Assume $G(D)$ has full row rank over the rational-function field $\\mathbb F_q(D)$, ensuring a nonzero finite input cannot produce the zero polynomial output.

A sufficient state is the last $m$ input vectors. It has at most $q^{km}$ values. It need not be a minimal state representation; a particular encoder may admit fewer states after removing redundant memory.

The nominal rate is $k/n$ field symbols per output coordinate group. It describes a long stream before termination overhead. A finite packet needs initial-state and stopping conventions, which affect its exact rate and decoder.

## Trellis edges and termination

At each time, a state and current input determine the next state and output. The trellis is the layered graph of these possibilities. Distinct paths can enter the same state, but future output possibilities depend on the state and future inputs, not on the full earlier path.

For a packet of $L$ unrestricted input vectors, start at the zero state and append $m$ zero input vectors. After those tail inputs the shift-register state is zero. There are $kL$ message symbols and $n(L+m)$ output symbols, giving rate
$$
\\frac{kL}{n(L+m)}\\longrightarrow\\frac kn.
$$
Full rational-function row rank proves injectivity of this finite encoding: if two inputs had equal outputs, their polynomial difference would multiply $G(D)$ to zero, impossible except for the zero difference.

Tail-biting instead requires the initial and final states to agree without necessarily being zero. It can reduce overhead, but introduces a different path constraint and may require searching initial states. Its distance cannot be assumed equal to the zero-terminated code’s distance.

## Free distance

For a nonzero finite input followed by its full output tail, define total output Hamming weight by summing coordinate weights over time. Free distance is the minimum of this weight over all nonzero finite inputs:
$$
d_{\\rm free}=\\min_{u(D)\\ne0}\\operatorname{wt}(u(D)G(D)).
$$
Every output here is a finite polynomial vector, and injectivity makes its weight positive. A nonempty set of positive integers has a least element, so the minimum exists.

Equivalently consider nonzero trellis excursions leaving and eventually returning to the zero state. Any finite input yields such a path after flushing, possibly with several excursions. The least nonzero excursion weight is the same minimum.

Every zero-terminated block code formed from the encoder has minimum distance at least $d_{\\rm free}$, because a difference of two valid packet inputs is another finite input. Equality depends on whether the shortest free-distance event fits the allowed packet length.

This is a worst-case distance statement. The multiplicities and lengths of low-weight events also affect stochastic performance and latency. Free distance alone does not specify the entire error probability.

## An explicit binary rate-one-half encoder

Take
$$
G(D)=(1+D+D^2,\\ 1+D^2).
$$
Use state $(a,b)=(u_{t-1},u_{t-2})$. For current bit $u$, output is $(u+a+b,u+b)$ and next state $(u,a)$. Its transitions are:

| State | Input zero: next/output | Input one: next/output |
|---|---|---|
| 00 | 00 / 00 | 10 / 11 |
| 10 | 01 / 10 | 11 / 01 |
| 01 | 00 / 11 | 10 / 00 |
| 11 | 01 / 01 | 11 / 10 |

Any nonzero excursion leaves zero through input one with output weight two and state 10. The minimum additional weight to return from 10 is three: take $10\\to01\\to00$, with weights one and two.

For a lower-bound proof, assign remaining-cost potentials $h(00)=0$, $h(01)=2$, $h(11)=3$, $h(10)=3$. For every edge the table gives $h(s)\\le w(s,s')+h(s')$. Summing along any return path from 10 shows its weight is at least three. The displayed path attains it.

Thus free distance is exactly five. The input impulse one followed by zeros produces polynomial output $(1+D+D^2,1+D^2)$ of total weight five, giving a direct attaining event. The argument uses the displayed graph and a potential inequality, not an unreported exhaustive search.

## Catastrophic encoders and hidden input errors

Finite-input injectivity does not exclude an infinite-weight input with finite-weight output. Such an encoder is called catastrophic in the stream sense.

Over $\\mathbb F_2$, take $G(D)=(1+D,1+D)$. The formal power series input $u=1+D+D^2+\\cdots$ has infinite weight, but $(1+D)u=1$, so the output has only the first two nonzero bits. After entering its nonzero state, a stream of ones produces zero-output transitions indefinitely.

This is an algebraic warning about error propagation and state ambiguity, not a claim that a finite packet loses injectivity. Finite polynomials still multiply nonzero generators injectively; the infinite-series phenomenon is different.

A sufficient noncatastrophic condition is a polynomial right inverse $B(D)$ with $G(D)B(D)=I_k$. Then $u=vB$, so finite polynomial output implies finite polynomial input. A common pure delay can be allowed by $GB=D^\\ell I_k$, since a finite delayed input still means a finite original input.

For a rate-one encoder, Bézout shows that a monomial greatest common divisor of the component generators supplies such a delayed right inverse. A nonmonomial common factor has a nonconstant factor with nonzero constant term; its formal reciprocal is an infinite series, producing the counterexample pattern after the factor cancels from every output component.

## Viterbi decoding is dynamic programming

Suppose each received output group has an additive branch cost $\\gamma_t(s,u)$, determined by the emitted group and observation. For a known initial state, initialise metric zero there and infinity elsewhere. The recursion is
$$
M_{t+1}(s')=\\min_{s,u:\\ T(s,u)=s'}
[M_t(s)+\\gamma_t(s,u)].
$$
Store a predecessor attaining each minimum. At the declared final state, trace those predecessors backwards to recover a minimum-cost path.

**Correctness.** Induct on time. Every path ending at $s'$ has a final edge from some predecessor state and a prefix ending there. Replacing that prefix by a cheaper prefix with the same state leaves all future outputs feasible, by the state definition. The recursion therefore minimises over exactly all paths and retains an optimal one. ∎

This proof needs additive costs and a sufficient state. A model with noise memory may require enlarging the state; otherwise branch costs can depend on discarded history and the principle no longer applies.

## Maximum likelihood and complexity

For a memoryless channel, use branch cost equal to the negative log likelihood of the observed group given the emitted symbols. Minimising total cost maximises sequence likelihood. With uniform packet messages and the declared termination constraint, this is maximum a posteriori sequence decoding too.

On a BSC with crossover below one-half, the cost is equivalent to Hamming distance. With soft observations, retain the actual likelihood costs; replacing them by hard symbols discards information.

The straightforward trellis has at most $q^{km}$ states and $q^k$ outgoing branches per state. Processing $T$ groups takes $O(Tq^{k(m+1)})$ branch operations, linear in duration for fixed memory but exponential in the memory parameter. Calling it simply “linear-time decoding” without fixing the state size hides that dependence.

Path storage can grow with packet length. Truncated traceback uses limited memory and delay, but its exact equivalence to full-packet optimum requires additional conditions. The theorem here is for the complete path with the specified endpoint.

## Marginal decoding is a different objective

Forward-backward summation replaces minimum with sum and branch costs with likelihood weights. Let $F_t(s)$ be the probability weight of prefixes ending at $s$ and $B_t(s)$ the weight of compatible suffixes from it. They satisfy
$$
F_{t+1}(s')=\\sum_{s,u:T(s,u)=s'}F_t(s)w_t(s,u),
$$
with an analogous backward recursion. The posterior weight of an edge is proportional to $F_t(s)w_t(s,u)B_{t+1}(s')$.

This is exact on the finite trellis because it enumerates all paths through dynamic factorisation. It yields symbol or bit marginals, often called the BCJR approach. Choosing each most probable symbol separately minimises symbolwise loss; Viterbi minimises whole-sequence error. The two decisions need not agree.

The distinction anticipates iterative decoding, where local marginal messages are propagated on a graph. Exactness on a chain or tree does not automatically extend to a graph with cycles.

## Limits of a stream model

A convolutional code presumes synchronised groups of $n$ channel symbols. Deletions, insertions and timing errors can break that grouping and require another model. Likewise, an unknown initial state must be included in the likelihood or minimisation rather than assumed zero because it is convenient.

Termination and catastrophicity are properties of the selected encoder and stream conventions. A different generator for a related rational code can change realisation details. The manuscript therefore states its finite-memory polynomial encoder before making distance or decoding claims.

For the displayed binary encoder, the terminated distance is five whenever the packet permits the one-bit impulse and its full tail. Nearest-word decoding therefore corrects every pattern of at most two flipped transmitted bits, counting both payload-time outputs and tail outputs. The count is in binary coordinates, not in pairs of output groups. A group can contain two changed bits, and charging it as only one substitution would change the metric and the guarantee.

## Worked example 10.1: A one-bit packet and its tail

For the binary encoder above, take $L=1$ and message one. Appending two zero inputs gives outputs $11,10,11$, of total weight five. The zero message gives all zeros. The finite code therefore has dimension one, length six and distance five, with rate $1/6$. Its nominal stream rate is $1/2$, illustrating how severe tail overhead can be for a short packet.

## Worked example 10.2: A catastrophic stream

With generators $(1+D,1+D)$, input bits one forever produce first output $11$ and then $00$ forever. State one with input one is a zero-output self-loop. A receiver observing only a finite output disturbance could therefore face an indefinitely different input stream. This does not make two finite polynomial messages identical; the formal infinite series is the crucial distinction.

## Worked example 10.3: Merging paths with the same state

Suppose two candidate prefixes reach state 01 with costs seven and nine. Every permitted future input sequence produces the same future outputs from that state for both prefixes. Replacing the cost-nine prefix by the cost-seven prefix reduces every completed path cost by two. Viterbi may discard the former without losing an optimal full path. If the observation model still depended on an unrecorded earlier state, this replacement argument would need a larger state representation.

## Fixed memory can have small bit error and poor long-block success

A fixed free distance does not yield vanishing whole-block error as packet length grows on a channel with a fixed positive noise level. For the displayed binary encoder, this limitation can be proved directly for maximum-likelihood decoding on a BSC with crossover strictly between zero and one-half.

Transmit the all-zero terminated packet. An input impulse at any allowed message position produces a weight-five competing codeword supported in three successive output groups. Choose impulse positions separated by three time steps, so these competitors have disjoint supports.

For each competitor, consider the event that at least three of its five support coordinates are flipped by the channel. On that event its Hamming distance to the received word is strictly smaller than the distance of zero, because it agrees with more than half the observations where the candidates differ. Noise outside that support cancels from their likelihood comparison.

Each such event has the same strictly positive binomial probability. Disjoint supports and independent channel errors make the events independent. Their number grows proportionally to message length, so the probability that at least one occurs tends to one.

Whenever one occurs, a maximum-likelihood decoder cannot return the transmitted zero word. Thus its conditional block error tends to one for these growing packets. Linearity and additive channel symmetry give the same strict-competitor argument after any transmitted codeword.

This is not a contradiction of the guaranteed two-error radius. With a positive per-bit noise probability, the number of errors in a long packet usually exceeds any fixed radius. Nor is it a contradiction of channel capacity, whose reliable code sequences can increase structural resources rather than hold this encoder’s memory and free distance fixed.

The distinction between symbol error and block error matters. A code can keep the fraction of incorrectly decoded bits small while making the event of at least one packet error very likely for sufficiently long packets. Packet termination, error detection and retransmission policies can therefore change the operational objective even when the same inner trellis is used.

The proof is an analytic limitation of a specified encoder and channel, not a simulated performance curve or a universal condemnation of convolutional coding.

## Exercises

### Exercise 10.1
<a id="convolutional-codes-ex-1"></a>

Derive the trellis output formula for state $(a,b)$.

<details>
<summary>Hint 1</summary>

Multiply the generator polynomials by the input series.

</details>
<details>
<summary>Hint 2</summary>

Read the coefficient at the current time.

</details>
<details>
<summary>Solution</summary>

The first component receives $u_t+u_{t-1}+u_{t-2}=u+a+b$, and the second receives $u_t+u_{t-2}=u+b$. Shifting the input memory gives next state $(u,a)$. All sums are binary.

</details>

### Exercise 10.2
<a id="convolutional-codes-ex-2"></a>

Why does appending $m$ zero inputs flush the stated shift-register encoder?

<details>
<summary>Hint 1</summary>

The state stores only the last $m$ inputs.

</details>
<details>
<summary>Hint 2</summary>

After $m$ steps none of the message inputs remain.

</details>
<details>
<summary>Solution</summary>

Each zero input shifts one older input out. After $m$ appended zeros, every stored entry is zero, so the final state is known. The final output tail is included in the transmitted length.

</details>

### Exercise 10.3
<a id="convolutional-codes-ex-3"></a>

Prove finite packet encoding is injective under rational-function row rank.

<details>
<summary>Hint 1</summary>

Subtract two polynomial inputs.

</details>
<details>
<summary>Hint 2</summary>

View the equation over the larger rational-function field.

</details>
<details>
<summary>Solution</summary>

If their outputs coincide, the difference satisfies $u(D)G(D)=0$. Full row rank over $\\mathbb F_q(D)$ means its left kernel is zero, so the polynomial row $u$ is zero. Thus the original packet messages coincide.

</details>

### Exercise 10.4
<a id="convolutional-codes-ex-4"></a>

Why does free distance lower-bound terminated block distance?

<details>
<summary>Hint 1</summary>

A difference of valid packet messages is a finite input.

</details>
<details>
<summary>Hint 2</summary>

Its entire output tail is retained.

</details>
<details>
<summary>Solution</summary>

The difference output belongs to the set over which free distance minimises. Every nonzero packet difference therefore has weight at least $d_{\\rm free}$. A short packet may exclude an attaining free-distance input, so equality needs a witness.

</details>

### Exercise 10.5
<a id="convolutional-codes-ex-5"></a>

Use the potential values to prove the minimum return weight from state 10.

<details>
<summary>Hint 1</summary>

Sum $h(s)-h(s')\\le w$ along a path.

</details>
<details>
<summary>Hint 2</summary>

The endpoint is zero.

</details>
<details>
<summary>Solution</summary>

The potential terms telescope to $h(10)-h(00)=3$. Every return path therefore has weight at least three. The path $10\\to01\\to00$ has weights one and two and attains it, proving the minimum exactly.

</details>

### Exercise 10.6
<a id="convolutional-codes-ex-6"></a>

Why is finite-input injectivity insufficient to rule out catastrophe?

<details>
<summary>Hint 1</summary>

Formal infinite series allow nonpolynomial reciprocals.

</details>
<details>
<summary>Hint 2</summary>

Use the common factor example.

</details>
<details>
<summary>Solution</summary>

Multiplication by $1+D$ is injective on finite polynomials, but its formal reciprocal $1+D+D^2+\\cdots$ is an infinite-weight input whose product is one. Catastrophicity concerns that stream phenomenon, beyond finite polynomial injectivity.

</details>

### Exercise 10.7
<a id="convolutional-codes-ex-7"></a>

Prove a polynomial right inverse prevents finite-output/infinite-input catastrophe.

<details>
<summary>Hint 1</summary>

Multiply the output by the inverse.

</details>
<details>
<summary>Hint 2</summary>

A product of finite polynomials remains finite.

</details>
<details>
<summary>Solution</summary>

If $GB=I$, then $u=vB$. A finite polynomial output and polynomial $B$ force $u$ to be a finite polynomial. A delayed identity gives the same conclusion after accounting for a finite shift.

</details>

### Exercise 10.8
<a id="convolutional-codes-ex-8"></a>

State the key invariant in Viterbi correctness.

<details>
<summary>Hint 1</summary>

Each stored state metric is the minimum prefix cost.

</details>
<details>
<summary>Hint 2</summary>

Future continuation depends only on that state.

</details>
<details>
<summary>Solution</summary>

Inductively $M_t(s)$ is the minimum among all valid prefixes ending at $s$. Extending each by each allowed edge and minimising gives exactly the next-state minima. A more expensive prefix at the same state can never improve a future additive-cost completion.

</details>

### Exercise 10.9
<a id="convolutional-codes-ex-9"></a>

Why is Viterbi not polynomial in arbitrary memory size under the displayed state representation?

<details>
<summary>Hint 1</summary>

The number of states is exponential in $km$.

</details>
<details>
<summary>Hint 2</summary>

Keep duration and memory as separate parameters.

</details>
<details>
<summary>Solution</summary>

The branch count per time is of order $q^{k(m+1)}$. Runtime is linear in duration only when this state space is fixed. Increasing memory can produce exponential growth even though the dynamic-programming recursion remains exact.

</details>

### Exercise 10.10
<a id="convolutional-codes-ex-10"></a>

Distinguish sequence MAP and symbolwise MAP.

<details>
<summary>Hint 1</summary>

They minimise different losses.

</details>
<details>
<summary>Hint 2</summary>

A most probable path need not contain every most probable marginal symbol.

</details>
<details>
<summary>Solution</summary>

Viterbi maximises one complete path’s posterior probability, optimising whole-sequence error. Forward-backward sums paths to obtain individual symbol marginals, whose maxima minimise symbolwise error. Those marginal choices need not form the single most probable path, so the objectives must not be conflated.

</details>

## Summary

Polynomial finite-memory encoders define exact trellises and termination costs. A graph potential proves a concrete free distance, while a common-factor example distinguishes catastrophe from finite injectivity. Viterbi and forward-backward recursions are proved for their separate sequence and marginal objectives.
`;export{e as default};