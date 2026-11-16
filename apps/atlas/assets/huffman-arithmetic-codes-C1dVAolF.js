var e=`---
parent_id: book-information-theory
chapter_id: huffman-arithmetic-codes
title: "Huffman and Arithmetic Codes"
level: advanced-undergraduate
license: CC BY-SA 4.0
---

# Huffman and Arithmetic Codes

Preparation is Kraft’s theorem, expected code length, finite trees and the probability chain rule. Huffman optimisation uses positive finite weights; arithmetic bounds use a shared positive block model and exact interval arithmetic.

## Optimising a finite prefix tree

Fix a finite source with strictly positive probabilities $p_1,\\ldots,p_m$. We seek a binary prefix code minimising $L=\\sum_ip_i\\ell_i$. Zero-probability symbols can be removed from this mathematical optimisation; a file format that insists on representing them adds a separate requirement.

For $m=1$, allow the empty codeword with known framing and optimal length zero. For $m\\ge2$, an optimal tree can be taken to be full: every internal node has two children. If an internal node has only one used child, suppressing that edge shortens every leaf below it and strictly reduces expected length. Since the support is finite, at least one finite prefix tree exists, and an optimal full tree exists among finitely many labelled full tree shapes with $m$ leaves.

Why finitely many shapes? In a full binary tree with $m$ leaves, the number of internal nodes is $m-1$, so there are $2m-1$ total nodes and no root-to-leaf path has more than $m-1$ edges. There are finitely many such bounded finite trees and finitely many leaf labellings. This avoids assuming without argument that an infinite search attains its infimum.

If $p_i>p_j$ but $\\ell_i>\\ell_j$, swapping their leaf labels changes cost by
$$
p_i\\ell_j+p_j\\ell_i-p_i\\ell_i-p_j\\ell_j
=-(p_i-p_j)(\\ell_i-\\ell_j)<0.
$$
Thus larger probabilities can be placed no deeper than smaller ones. Equal probabilities or equal depths allow ties without changing cost.

## The sibling reduction

**Lemma 7.1.** There is an optimal full prefix tree in which the two least probable symbols are sibling leaves at maximum depth.

**Proof.** In a full finite tree choose a leaf of greatest depth. Its sibling cannot be internal, since that would have a deeper descendant leaf. Hence the sibling is also a leaf at that same maximum depth. Move the two smallest probabilities to these two positions by exchanges. Moving a smaller probability deeper and its displaced larger probability shallower cannot increase cost by the exchange calculation. Starting from an optimal tree therefore gives another optimal tree with the desired sibling pair. ∎

If these siblings have probabilities $a,b$ and their parent is at depth $d$, their contribution is $(a+b)(d+1)$. Contract them into one leaf of weight $a+b$ at depth $d$. The contracted tree’s cost is the original cost minus $a+b$.

Conversely, expanding a leaf of weight $a+b$ into two children with weights $a,b$ increases cost by exactly $a+b$. Therefore, once the sibling condition is arranged, minimising the original tree is equivalent to minimising the reduced problem with that combined weight. A better reduced tree would expand to a better original tree, contradicting optimality.

**Theorem 7.2 (Huffman optimality).** Repeatedly combine the two smallest current weights, solve the reduced problem, and expand each combination into two children. The resulting binary prefix code minimises expected length among all finite binary uniquely decodable codes.

**Proof.** Induct on the number of positive weights. The singleton case is immediate. The sibling lemma and contraction identity reduce the optimal $m$-symbol problem to an optimal $(m-1)$-symbol problem plus the fixed cost of the two smallest weights. The induction hypothesis makes Huffman optimal for that reduced problem. Expanding supplies an optimal original prefix tree. McMillan and Kraft show that every uniquely decodable length vector can be realised by a prefix code, so none can improve on this prefix optimum. ∎

Tie-breaking can change codewords and sometimes their lengths, but not the optimal expected cost. Huffman coding is a theorem about the supplied weights; using estimated or incorrect weights changes the objective.

## Computing cost without writing every codeword

Each merge adds its combined weight to expected length. Summing all merge weights therefore gives the final average code length. This follows from the contraction identity at every recursive stage, ending with the zero-cost singleton root.

The identity is useful for hand calculations, but reconstructing actual words still needs the tree. Label one branch zero and the other one at every internal node. The word for a leaf is its root-to-leaf label sequence. Either left-right convention is valid if the decoder uses the same tree.

An efficient implementation can use a priority queue, giving $O(m\\log m)$ comparison operations for $m$ weights. This is an algorithmic complexity statement, not a report of executing a program here. For a fixed known alphabet, codebook storage and transmission can dominate short-file compression gains.

## Arithmetic coding represents a whole block

Huffman assigns integer lengths to individual source symbols. Arithmetic coding instead narrows an interval for the entire source block. Assume a finite ordered alphabet and a fixed model with conditional probabilities $q(x_i\\mid x_1,\\ldots,x_{i-1})$ known to encoder and decoder. The model need not be iid, but every encoded block must have positive model probability.

Start with $[0,1)$. For the next symbol, subdivide the current interval into adjacent half-open pieces proportional to its conditional probabilities. Choose the piece associated with the actual symbol and repeat. After $n$ steps, the final interval $J(x^n)$ has width
$$
|J(x^n)|=\\prod_{i=1}^nq(x_i\\mid x^{i-1})=Q(x^n).
$$
Induction proves the width formula. Distinct source blocks of the same known length have disjoint final intervals because they first diverge into disjoint subintervals at their first differing symbol.

To transmit the block, choose a binary word whose dyadic interval lies completely inside its final arithmetic interval. The decoder uses any point inside that dyadic interval, repeatedly identifies the corresponding source subinterval, and stops after the agreed block length. Containment ensures that every permitted point follows the same source path.

## A precise arithmetic length bound

**Lemma 7.3.** Every half-open interval of width $w>0$ inside $[0,1)$ contains a dyadic interval with word length
$$
\\ell<-\\log_2w+2.
$$

**Proof.** Choose $\\ell=\\lceil-\\log_2w\\rceil+1$ and let $s=2^{-\\ell}\\le w/2$. For interval $[a,a+w)$, take $j=\\lceil a/s\\rceil$. Then $js\\ge a$ and $(j+1)s<a+2s$ unless $a$ is a grid point, in which case the endpoint is even smaller. In either case $(j+1)s\\le a+w$. Thus $[js,(j+1)s)$ is contained in the interval. Finally $\\lceil u\\rceil+1<u+2$, giving the length bound. ∎

Apply the lemma separately to the disjoint block intervals. Their selected dyadic cells are disjoint, so the corresponding words are prefix-free: nested dyadic cells would overlap. Hence
$$
\\ell(x^n)<-\\log_2Q(x^n)+2.
$$
With the true model $Q=P$, expected length is below $H(X^n)+2$ bits. With a mismatched model supported on the source support, it is below $H(P^n)+D(P^n\\Vert Q)+2$.

This is an exact-real interval construction and an existence bound. Practical finite-precision arithmetic coders require renormalisation, termination conventions and protection against rounding intervals to zero. Their engineering details cannot be inferred solely from the real-number proof.

## Termination, model costs and adaptation

The decoder must know when to stop. A known block length is one option. Another is a special end-of-message symbol with a model that assigns positive probability to it. Omitting both can make a bit prefix compatible with arbitrarily many longer source messages.

An adaptive arithmetic model updates probabilities using the decoded past. Encoder and decoder remain synchronised if they use the same update rule and initial state. The probability assigned to a whole block is then the product of these conditional predictions. Its log loss, rather than an iid entropy substituted after the fact, controls the ideal length.

The interval representation also assumes a noiseless transport for its emitted bits; correcting transmission errors is a separate layer with its own redundancy. A zero predictive probability makes a possible block unencodable under the model. Smoothing or escape symbols can avoid that outcome, but they contribute probability mass and alter the code-length bound. Choosing them is part of defining the model.

Huffman and arithmetic coding therefore solve different integer-allocation problems. Huffman is exactly optimal for one-symbol binary prefix lengths under fixed weights. Arithmetic coding amortises rounding across a block and can follow a context-dependent model. Neither result makes the model description free or guarantees compression of every input.

The optional [Huffman article](/articles/information-theory-huffman/) offers a visual tree-building companion. The exchange lemma above supplies the proof behind the greedy choice.

## Model selection cannot be hidden in a code

Suppose a sender tries several codebooks and chooses the one producing the shortest payload for the current block. The receiver must learn which codebook was chosen unless that choice is determined from already shared information. Sending its index costs bits. A fixed-length index among $K$ choices costs $\\lceil\\log_2K\\rceil$ bits, while a prefix index code can distribute costs unevenly across choices.

A two-part description therefore has length $L(\\text{model})+L(\\text{data}\\mid\\text{model})$. Optimising only the second term can favour an enormous model that memorises the block. Including the first term restores a genuine decodable description problem. Statistical model-selection interpretations must likewise state the coding convention, rather than treating a fitted likelihood as the complete file length.

## Worked example 7.1: Four-symbol Huffman construction

For probabilities $(2/5,3/10,1/5,1/10)$ combine $1/10$ and $1/5$ to get $3/10$. Combine the two $3/10$ weights to get $3/5$, then combine it with $2/5$. The merge costs sum to $3/10+3/5+1=19/10$. One code is $0,10,110,111$ in the original symbol order. The source weights times lengths are $2/5+3/5+3/5+3/10=19/10$, verifying the contraction accounting directly.

## Worked example 7.2: Encoding a two-symbol block by an interval

Use iid probabilities $q(A)=3/4$, $q(B)=1/4$, with $A$ preceding $B$. After $A$, the interval is $[0,3/4)$. Its $B$ part is $[9/16,3/4)$, of width $3/16$, the probability of $AB$. The dyadic cell for word $101$ is $[5/8,3/4)$ and lies inside it. Every point in that cell decodes first to $A$, then to $B$. With agreed block length two, three transmitted bits suffice. A termination convention is still required for messages of unknown length.

## Worked example 7.3: A sharply skewed source

For a two-symbol source with probabilities $(99/100,1/100)$, every nontrivial binary prefix code needs at least one bit for each symbol, and Huffman achieves exactly one bit per symbol. Entropy is much smaller than one. Applying arithmetic coding or Shannon coding to long blocks amortises the integer cost and approaches the entropy rate. This does not contradict Huffman optimality: its optimisation domain was one-symbol prefix codes, while the block coder uses a much larger source alphabet.

## A mixture code competes with several shared models

Suppose encoder and decoder share finitely many candidate probability laws for complete blocks, together with strictly positive mixture weights summing to one. Their weighted mixture is itself a valid block law. Its probability of every block is at least the weight of any one candidate times that candidate’s probability.

Taking negative logarithms proves a pointwise description bound: mixture log loss is at most any candidate’s log loss plus the negative logarithm of its mixture weight. Arithmetic coding adds less than two ideal rounding bits to that complete-block mixture cost.

With equal weights, the overhead relative to the best candidate for the realised block is at most the logarithm of the number of candidates, plus that rounding cost. This holds for every encoded block, not merely on average over a source that happens to equal one candidate.

The mixture also has a sequential implementation in principle. After a decoded prefix, update the candidate weights proportionally to their original weights times their prefix probabilities. The next-symbol prediction is the corresponding weighted average of candidate conditional predictions. Multiplying those predictions telescopes to the complete mixture block probability.

This is a precise connection between sequential Bayesian model averaging and description length. The mathematical inequality does not require believing one of the candidates is the true source. It only compares a valid mixture description with the listed candidate descriptions.

Support conditions remain important. A candidate can assign zero to a block and then provides no finite comparison for it. The mixture can still encode the block if another positive-weight candidate assigns positive probability. If every shared candidate assigns zero, the mixture does too and needs an escape or expanded model.

The candidates and their weights must genuinely be available at the decoder. Creating a new candidate that memorises the current block and then assigning it a convenient weight does not make its description free. Either the enlarged family was shared in advance or identifying that new candidate requires additional bits.

Finally, the inequality is an ideal coding comparison. Maintaining many models can have substantial computational cost, and finite-precision arithmetic can add another engineering overhead. A pointwise length theorem therefore does not establish that the mixture is the fastest or simplest practical compressor.

## Exercises

### Exercise 7.1
<a id="huffman-arithmetic-codes-ex-1"></a>

Why may an optimal positive-weight tree be assumed full?

<details>
<summary>Hint 1</summary>

An internal node with one used child wastes an edge.

</details>
<details>
<summary>Hint 2</summary>

Suppressing it shortens every descendant leaf.

</details>
<details>
<summary>Solution</summary>

Removing a unary internal edge preserves the prefix relation among all leaves while reducing every descendant length by one. Their total source mass is positive, so expected cost decreases. Hence an optimal tree cannot contain such a wasted edge.

</details>

### Exercise 7.2
<a id="huffman-arithmetic-codes-ex-2"></a>

Prove that a deepest leaf in a full tree has a leaf sibling.

<details>
<summary>Hint 1</summary>

An internal sibling would have a descendant.

</details>
<details>
<summary>Hint 2</summary>

Compare that descendant’s depth.

</details>
<details>
<summary>Solution</summary>

If its sibling were internal, fullness would give at least one leaf below that sibling at a depth strictly greater than the chosen leaf. That contradicts maximum depth. Therefore the sibling is a leaf at the same depth.

</details>

### Exercise 7.3
<a id="huffman-arithmetic-codes-ex-3"></a>

Explain why placing a smaller weight deeper cannot increase cost.

<details>
<summary>Hint 1</summary>

Exchange two leaf labels.

</details>
<details>
<summary>Hint 2</summary>

Factor the cost difference.

</details>
<details>
<summary>Solution</summary>

If $a\\le b$ and $d\\ge e$, placing $a$ at depth $d$ and $b$ at $e$ instead of the reverse changes cost by $(a-b)(d-e)\\le0$. This justifies moving the two least weights to deepest sibling positions before contraction.

</details>

### Exercise 7.4
<a id="huffman-arithmetic-codes-ex-4"></a>

For weights $(1/2,1/4,1/8,1/8)$, compute Huffman cost from merges.

<details>
<summary>Hint 1</summary>

Combine the two smallest first.

</details>
<details>
<summary>Hint 2</summary>

Add every merged weight.

</details>
<details>
<summary>Solution</summary>

The merges have weights $1/4$, $1/2$, and $1$. Their sum is $7/4$ bits. The resulting lengths are $1,2,3,3$, matching the dyadic surprises and attaining entropy exactly.

</details>

### Exercise 7.5
<a id="huffman-arithmetic-codes-ex-5"></a>

Does arbitrary tie-breaking invalidate Huffman optimality?

<details>
<summary>Hint 1</summary>

The exchange proof uses non-strict inequalities.

</details>
<details>
<summary>Hint 2</summary>

The reduced least-weight choice remains valid.

</details>
<details>
<summary>Solution</summary>

No. Equal weights can be exchanged without changing cost, and any pair tied for the two least weights satisfies the sibling reduction. Different tie choices can produce different optimal trees, but the induction still proves optimal expected length.

</details>

### Exercise 7.6
<a id="huffman-arithmetic-codes-ex-6"></a>

Prove arithmetic interval width equals model block probability.

<details>
<summary>Hint 1</summary>

Track one subdivision.

</details>
<details>
<summary>Hint 2</summary>

Multiply the successive conditional factors.

</details>
<details>
<summary>Solution</summary>

At each step the selected subinterval has the parent width times the assigned conditional probability of the next symbol. Starting from width one and multiplying through $n$ steps gives the conditional product $Q(x^n)$. This works for adaptive models whose conditional probabilities are shared.

</details>

### Exercise 7.7
<a id="huffman-arithmetic-codes-ex-7"></a>

Why choose an entire dyadic cell inside an arithmetic interval rather than merely an endpoint?

<details>
<summary>Hint 1</summary>

A finite binary word describes a cell of possible continuations.

</details>
<details>
<summary>Hint 2</summary>

The decoder must follow the same path for every permitted continuation.

</details>
<details>
<summary>Solution</summary>

If only one endpoint lay in the target interval, other binary continuations of the transmitted word might lie outside it and decode differently. Full-cell containment ensures the finite prefix is sufficient, independently of its omitted tail. It also makes disjoint target intervals produce prefix-free chosen words.

</details>

### Exercise 7.8
<a id="huffman-arithmetic-codes-ex-8"></a>

State the expected arithmetic length bound under a mismatched model.

<details>
<summary>Hint 1</summary>

Average the pointwise bound.

</details>
<details>
<summary>Hint 2</summary>

Use cross entropy equals entropy plus divergence.

</details>
<details>
<summary>Solution</summary>

If the model is positive on the true block support, $E_P\\ell(X^n)<H(P^n)+D(P^n\\Vert Q)+2$. If it assigns zero to a possible block, the displayed finite construction fails for that block and its log-loss expectation is infinite. The model or escape convention must then change.

</details>

### Exercise 7.9
<a id="huffman-arithmetic-codes-ex-9"></a>

Why does a known block length solve termination but not source-model identification?

<details>
<summary>Hint 1</summary>

Stopping and choosing probabilities are different shared facts.

</details>
<details>
<summary>Hint 2</summary>

The decoder needs both.

</details>
<details>
<summary>Solution</summary>

The length tells the decoder how many symbols to recover. It does not tell it how interval subdivisions were chosen. The probability model, symbol ordering and adaptive update rule must also be agreed or encoded. Without those, the same bits can describe different blocks.

</details>

### Exercise 7.10
<a id="huffman-arithmetic-codes-ex-10"></a>

Can trying many models and keeping the shortest payload give free compression?

<details>
<summary>Hint 1</summary>

The receiver needs the selected model.

</details>
<details>
<summary>Hint 2</summary>

Include an index or model description.

</details>
<details>
<summary>Solution</summary>

Only if the model choice is already determined by shared information. Otherwise its identifier or description must be transmitted. The total description is model cost plus conditional payload cost; ignoring the first can falsely make memorisation look like an effective compressor.

</details>

## Summary

Huffman’s greedy rule is optimal by a deepest-sibling exchange and contraction induction. Arithmetic coding instead represents a whole block by a nested probability interval, yielding less than two ideal rounding bits per block. Model identification, support and termination remain explicit coding resources.
`;export{e as default};