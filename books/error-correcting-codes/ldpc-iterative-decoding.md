
# LDPC and Iterative Decoding

Preparation is parity checks, finite conditional probability, tree factorisation and elementary iteration limits. The exactness theorem is a finite-tree statement; density evolution additionally assumes independent BEC erasures and a random regular configuration ensemble at fixed iteration depth.

## Sparse checks and the code they define

A binary low-density parity-check code is the kernel of a sparse matrix $H$. Its Tanner graph has one variable vertex per coordinate and one check vertex per row, with an edge whenever $H_{ai}=1$. A codeword satisfies even parity at every check.

If $H$ has $m$ rows and $n$ columns, dimension is $n-\operatorname{rank}H$, so rate is at least $1-m/n$. The quantity $1-m/n$ is often called design rate; it equals actual rate only when the checks are independent.

In a $(d_v,d_c)$-regular graph, every variable has degree $d_v$ and every check degree $d_c$. Edge counting gives $nd_v=md_c$. Sparsity means degrees remain small as length grows, enabling local computations. It does not by itself establish large distance, reliable decoding or rank.

This chapter proves sum-product exactness on trees, erasure-peeling failure through stopping sets, and a finite-iteration density calculation on locally tree-like regular ensembles. It explicitly separates those theorems from unproved convergence claims on a particular loopy graph.

## The posterior factorisation

Assume a uniform prior on codewords and a memoryless channel with likelihood $L_i(x_i)=W_i(y_i\mid x_i)$. The posterior on binary words is proportional to
$$
\prod_iL_i(x_i)\prod_a
1_{\{\sum_{i\in N(a)}x_i=0\pmod2\}}.
$$
Redundant parity checks do not change this indicator product: an already implied constraint is either satisfied with the others or irrelevant to the zero value.

For the probability-message formulas first assume positive likelihoods, ensuring a positive normalising constant and finite nondegenerate local messages. Erasure-channel likelihoods can have zeros and are handled directly by the later combinatorial formulation or by appropriate limiting messages.

The goal of sum-product is posterior symbol marginals. A symbolwise MAP decision minimises expected symbol error, not necessarily whole-codeword error. Independent hard marginal choices can fail to satisfy parity checks, so an algorithm needs a declared output rule.

## Variable and check messages

Let $\mu_{i\to a}(x_i)$ be a variable-to-check message and $\mu_{a\to i}(x_i)$ a check-to-variable message. Up to positive normalisation, update
$$
\mu_{i\to a}(x_i)=L_i(x_i)
\prod_{b\in N(i)\setminus\{a\}}\mu_{b\to i}(x_i),
$$
$$
\mu_{a\to i}(x_i)=
\sum_{(x_j)_{j\in N(a)\setminus\{i\}}}
1_{\{x_i+\sum_jx_j=0\}}
\prod_{j\in N(a)\setminus\{i\}}\mu_{j\to a}(x_j).
$$
Excluding the receiving edge avoids immediately feeding the same evidence back to its source. An empty variable product is one. A degree-one check forces its sole variable to zero.

A final variable belief is proportional to $L_i(x_i)\prod_{a\in N(i)}\mu_{a\to i}(x_i)$. On a tree, messages can be scheduled inward and outward so that each receives all needed subtree information before use.

## Exactness on a tree

Cut an edge of a Tanner tree. It separates the factor graph into disjoint components. A message across that edge is the sum of the likelihood-factor product on its side, conditional on the boundary variable value.

Prove this by induction from leaves. At a variable vertex, the components attached through the other edges are disjoint and share only that variable; conditional weights therefore multiply, giving the variable update. At a check vertex, sum over its other boundary variables while enforcing its parity, giving the check update.

After inward and outward passes, the components attached to any variable cover all remaining vertices without overlap. Multiplying their messages and the local likelihood, then normalising, gives its exact posterior marginal.

This is a finite factorisation proof. It does not rely on asymptotic length, small noise or an empirical convergence observation. It also explains its limitation: removing one edge from a cyclic graph does not separate independent subtrees, so the same interpretation no longer holds.

## Log-likelihood messages

For positive binary messages define $L=\ln(\mu(0)/\mu(1))$. Variable updates become addition of the channel log likelihood ratio and incoming check ratios.

For a check, normalise its incoming messages as probabilities. The difference between even- and odd-parity probabilities of the other variables is the product of their individual differences:
$$
P(\text{even})-P(\text{odd})
=\prod_j[\mu_j(0)-\mu_j(1)].
$$
This follows by expanding the product or taking expectation of $(-1)^{\sum_jX_j}$ under independent incoming probabilities. Since $\mu_j(0)-\mu_j(1)=\tanh(L_j/2)$,
$$
L_{a\to i}
=2\operatorname{atanh}\left(
\prod_{j\in N(a)\setminus\{i\}}\tanh(L_{j\to a}/2)
\right).
$$
Infinite values are limiting constraints, not a license to evaluate undefined floating-point expressions. The probability-domain formula remains the mathematical definition at boundary cases.

## What cycles change

On a graph with cycles, the same update equations define loopy belief propagation. Incoming messages can depend on overlapping evidence, so multiplying them may count correlated information as though it came from separate subtrees.

Unrolling a fixed number of iterations creates a computation tree with repeated copies of original variables. The algorithm is exact for that unrolled tree model, but those copies correspond to the same variable in the actual graph. This observation does not prove exactness for the original posterior.

Loopy iterations may converge, oscillate or settle on inaccurate beliefs. A zero-syndrome output certifies a codeword, not that it is the most likely or transmitted word. A fixed point of the message equations is not automatically a theorem of posterior correctness.

Graph design, scheduling, damping and quantisation can affect practical behaviour. None is being claimed successful merely because the update formula has been written.

## Peeling on a binary erasure channel

On a BEC, some bits are known exactly and others are erased. If a parity check has exactly one unknown neighbour, its value is determined by the known neighbours. Recover it and repeat. This is the peeling decoder.

A nonempty variable set $S$ is a stopping set if every adjacent check has at least two neighbours in $S$. Peeling fails exactly when the initial erasure set contains a stopping set.

For one direction, if $S$ is contained in the erasures, no variable of $S$ can be the first one recovered: every check touching it still has at least two unknown variables in $S$. For the other direction, if peeling stalls with a nonempty residual set, every adjacent check has either no unknown neighbours or at least two. The residual set is itself a stopping set.

This is a deterministic theorem for the specified parity-check graph, independent of erasure probabilities. Different matrices defining the same code can have different stopping sets and hence different peeling behaviour.

## Stopping sets versus code distance

The support of any nonzero binary codeword is a stopping set: every check meets it in an even number of places, hence zero or at least two. Therefore minimum stopping-set size is at most the code’s minimum distance.

The inequality can be strict. Peeling may stall on an erasure pattern whose remaining parity equations have a unique solution by full elimination. Its failure reflects the local algorithm and matrix representation, not necessarily ambiguity in the code.

Gaussian elimination on erased columns recovers uniquely exactly when those columns are independent. Peeling can be viewed as finding certain easy pivots; absence of such a pivot does not prove matrix rank deficiency.

This distinction is essential when comparing iterative and maximum-likelihood erasure decoding. A stopping pattern is a certificate of failure for peeling, not universally for every decoder.

## Density evolution for a regular erasure ensemble

Consider regular Tanner graphs chosen by uniformly pairing variable and check half-edges, with fixed degrees and increasing feasible block lengths. For any fixed iteration count, exploring a neighbourhood exposes only a bounded number of half-edges. Each new pairing has probability $O(1/n)$ of colliding with an already explored vertex, so the neighbourhood is a tree with probability tending to one.

The configuration ensemble can have parallel edges. A check then counts its incident bits with multiplicity, so repeated occurrences cancel modulo two in the resulting parity equation. The regular degrees refer to edge incidences; the local tree event excludes such repetitions within the explored neighbourhood. This convention leaves the row-count rate bound valid and makes the finite-depth calculation unambiguous.

On that tree, assume independent channel erasures of probability $\varepsilon$. Let $x_\ell$ be the erasure probability of a variable-to-check message, starting at $x_0=\varepsilon$. A check-to-variable message is erased unless all its other $d_c-1$ inputs are known:
$$
y_\ell=1-(1-x_\ell)^{d_c-1}.
$$
A variable-to-check message remains erased only if its channel value and all other $d_v-1$ check messages are erased:
$$
x_{\ell+1}=\varepsilon y_\ell^{d_v-1}.
$$
The corresponding variable-belief erasure probability is $\varepsilon y_\ell^{d_v}$.

Independence is justified by disjoint tree branches for fixed depth. The locally tree-like argument then gives the ensemble’s limiting expected erasure fraction after that fixed number of iterations. It does not automatically justify exchanging infinite iterations with infinite block length, nor does a vanishing fraction alone imply vanishing probability of *any* block error.

## A recursion threshold that can be proved by hand

For degrees $(d_v,d_c)=(2,3)$,
$$
x_{\ell+1}=\varepsilon(2x_\ell-x_\ell^2).
$$
If $\varepsilon<1/2$, then $x_{\ell+1}\le2\varepsilon x_\ell$, giving geometric convergence to zero. At $\varepsilon=1/2$, the recursion is $x_{\ell+1}=x_\ell-x_\ell^2/2$; it decreases to a limit satisfying $x=x-x^2/2$, hence zero.

If $\varepsilon>1/2$, the positive fixed point is $x^\star=(2\varepsilon-1)/\varepsilon$. Starting from $x_0=\varepsilon\ge x^\star$, monotonicity keeps iterates above that point and they decrease to it. Thus the recursion’s threshold is one-half.

This is a theorem about the density recursion and its fixed-iteration ensemble interpretation. It is not a claim that every finite regular graph below one-half decodes every erasure pattern. Small stopping sets remain possible.

## Complexity and honest success criteria

With sparse bounded degrees, one message round uses a number of elementary operations proportional to the edge count. Peeling can use a queue of newly solvable checks, processing each edge a bounded number of times and giving linear graph-size work.

Full soft-message decoding after $L$ rounds costs order $L$ times the edge count under fixed-size arithmetic. Actual precision, saturation and stopping rules add implementation choices. No decoder implementation or numerical threshold experiment is reported here.

Reliable communication still needs a source law, channel and error criterion. Sparse algebraic storage, exact tree inference, asymptotic ensemble density and finite-graph decoding are connected ideas, but each theorem retains its own quantifiers.

## Worked example 11.1: One parity check with soft evidence

Take a tree consisting of one even-parity check on three bits. Suppose the first two incoming likelihood ratios are both $\ln3$ and the third channel observation is uninformative. Each first-bit probability difference is $\tanh(\ln3/2)=1/2$. The check message to the third has difference $1/4$, so its probabilities are $5/8$ and $3/8$, with log ratio $\ln(5/3)$. Tree sum-product gives the exact posterior marginal, not merely a heuristic estimate.

## Worked example 11.2: Peeling can stall despite a unique completion

Let checks be $x_1+x_2=0$, $x_2+x_3=0$, and $x_1+x_2+x_3=0$. If all three bits are erased, no check has only one unknown and peeling stalls. Yet the first two equations force all bits equal, and the third then forces them to zero. The matrix is invertible and the code is the singleton zero code. This small example isolates an algorithmic stopping failure from information-theoretic ambiguity.

## Worked example 11.3: Design rate need not equal rate

Use checks $x_1+x_2=0$, $x_2+x_3=0$, and $x_1+x_3=0$. The third is the sum of the first two, so rank is two. The binary code is $\{000,111\}$ and actual rate is $1/3$, while the three-row design expression $1-m/n$ is zero. Redundant checks can change graph structure and message behaviour without changing the code’s dimension.

## Redundant checks can alter peeling without changing the code

Return to the three equations in the unique-completion example. Adding a consequence that the second bit is zero does not change their solution set: that equation is obtained by adding the three original checks over the binary field.

It does change the peeling graph. The new degree-one check immediately reveals the second bit, after which the first two original checks reveal the first and third. The formerly stalled all-erased pattern is now solved by the local algorithm.

The exact posterior has not changed, because a redundant indicator constraint was already implied by the others. The change is in which deductions the graph makes available through its local message schedule. This gives a concrete reason that code identity and iterative-decoder behaviour cannot be inferred from one another alone.

Adding every useful consequence is not free. Elimination can create dense parity checks, increasing the edge count and computational cost and losing the original sparse structure. A successful small example therefore does not prove that arbitrary stopping sets can be removed while retaining the same bounded-degree complexity.

A graph-design claim must balance these resources explicitly. Additional checks can improve a local inference route, while their rank may remain unchanged and their storage or iteration cost can grow.

## Check counts give a design rate, not always the actual rate

A parity-check matrix with n columns and m rows defines a code of dimension n minus its rank. Its actual rate is therefore one minus rank divided by n, which is at least one minus m divided by n. Equality requires linearly independent checks. For a regular bipartite graph, counting edges gives m times the check degree equal to n times the variable degree, so the familiar one minus variable degree divided by check degree is this row-count design rate.

Dependence among checks makes actual rate larger. For example, over the binary field, if every column has even weight, the sum of all check rows is zero. With at least one row this gives a nontrivial row dependence and rank at most m minus one. The actual rate then exceeds the design expression by at least one over n. This algebraic observation does not establish a decoding threshold or a distance guarantee. A sparse matrix's row count, rank and graph neighborhood behaviour are distinct facts, each needed for different parts of a coding claim.

## Exercises

### Exercise 11.1
<a id="ldpc-iterative-decoding-ex-1"></a>

Prove actual rate is at least design rate.

<details>
<summary>Hint 1</summary>

Matrix rank cannot exceed its number of rows.

</details>
<details>
<summary>Hint 2</summary>

Use the kernel dimension.

</details>
<details>
<summary>Solution</summary>

The dimension is $n-\operatorname{rank}H\ge n-m$, so dividing by $n$ gives the bound. Equality needs row independence. A negative design expression is merely a weak lower bound, not a negative actual rate.

</details>

### Exercise 11.2
<a id="ldpc-iterative-decoding-ex-2"></a>

Why does the exact tree proof exclude the receiving edge in a message?

<details>
<summary>Hint 1</summary>

The message must describe only one side of the cut edge.

</details>
<details>
<summary>Hint 2</summary>

Including it feeds the receiver’s evidence back.

</details>
<details>
<summary>Solution</summary>

The subtree component on the sender side contains all other adjacent components but not the receiver side. Multiplying only those messages gives its conditional partition weight. Including the receiving message would count evidence outside that component and invalidate the cut-edge interpretation.

</details>

### Exercise 11.3
<a id="ldpc-iterative-decoding-ex-3"></a>

Derive the parity-probability product identity.

<details>
<summary>Hint 1</summary>

Use $(-1)$ to the sum of binary variables.

</details>
<details>
<summary>Hint 2</summary>

Independence factors its expectation.

</details>
<details>
<summary>Solution</summary>

The expectation of $(-1)^{\sum_jX_j}$ is the even probability minus the odd probability. For independent incoming probabilities it equals the product of $E(-1)^{X_j}=P(X_j=0)-P(X_j=1)$. This gives the check update’s product term.

</details>

### Exercise 11.4
<a id="ldpc-iterative-decoding-ex-4"></a>

Does a loopy belief-propagation fixed point prove exact posterior marginals?

<details>
<summary>Hint 1</summary>

Incoming branches may share evidence.

</details>
<details>
<summary>Hint 2</summary>

Tree factorisation no longer applies.

</details>
<details>
<summary>Solution</summary>

No. A fixed point solves the local update equations but may double-count correlated evidence. Exactness was proved only where cutting an edge separates disjoint components. Convergence and correctness on a cyclic graph require further analysis.

</details>

### Exercise 11.5
<a id="ldpc-iterative-decoding-ex-5"></a>

Prove an initially erased stopping set cannot be peeled first.

<details>
<summary>Hint 1</summary>

Assume a first recovered variable in that set.

</details>
<details>
<summary>Hint 2</summary>

Every touching check still has another erased set neighbour.

</details>
<details>
<summary>Solution</summary>

Before that first recovery all variables of the stopping set remain unknown. Every adjacent check has at least two neighbours in it, so no such check can uniquely determine the chosen variable. This contradicts the possibility of a first recovery.

</details>

### Exercise 11.6
<a id="ldpc-iterative-decoding-ex-6"></a>

Prove a nonempty stalled residual is a stopping set.

<details>
<summary>Hint 1</summary>

No check has exactly one unknown.

</details>
<details>
<summary>Hint 2</summary>

Ignore checks with no residual neighbour.

</details>
<details>
<summary>Solution</summary>

Every check touching the residual set has at least one unknown neighbour, and stalling rules out exactly one. Hence it has at least two, which is the stopping-set definition. The residual is contained in the original erasures.

</details>

### Exercise 11.7
<a id="ldpc-iterative-decoding-ex-7"></a>

Why is a codeword support a stopping set?

<details>
<summary>Hint 1</summary>

Every parity-check intersection has even size.

</details>
<details>
<summary>Hint 2</summary>

A nonempty intersection cannot have size one.

</details>
<details>
<summary>Solution</summary>

For a binary codeword, the parity sum over each check is zero. The number of its nonzero coordinates at that check is therefore even, giving zero or at least two. Thus its support satisfies the stopping condition.

</details>

### Exercise 11.8
<a id="ldpc-iterative-decoding-ex-8"></a>

Where is independence used in the density recursion?

<details>
<summary>Hint 1</summary>

The other incoming branches must be disjoint.

</details>
<details>
<summary>Hint 2</summary>

A locally tree-like limit supplies this only at fixed depth.

</details>
<details>
<summary>Solution</summary>

Check success multiplies the probabilities that all other messages are known, and variable erasure multiplies channel erasure with other incoming erasures. Those products require independent branch evidence. The tree neighbourhood and independent channel erasures supply it for fixed iterations, not automatically after unlimited cycling.

</details>

### Exercise 11.9
<a id="ldpc-iterative-decoding-ex-9"></a>

For the $(2,3)$ recursion, prove convergence to zero below one-half.

<details>
<summary>Hint 1</summary>

Drop the negative quadratic term.

</details>
<details>
<summary>Hint 2</summary>

Iterate a contraction factor.

</details>
<details>
<summary>Solution</summary>

$x_{\ell+1}=\varepsilon(2x_\ell-x_\ell^2)\le2\varepsilon x_\ell$. If $2\varepsilon<1$, repeated application gives $x_\ell\le(2\varepsilon)^\ell x_0\to0$. The equality case needs the separate monotone-limit argument in the text.

</details>

### Exercise 11.10
<a id="ldpc-iterative-decoding-ex-10"></a>

Why can vanishing expected bit-erasure fraction fail to prove vanishing block error?

<details>
<summary>Hint 1</summary>

A block may retain a few erased bits.

</details>
<details>
<summary>Hint 2</summary>

Their fraction can vanish while the event persists.

</details>
<details>
<summary>Solution</summary>

A decoder could leave one unknown bit in every length-$n$ block. Its erasure fraction is $1/n\to0$, but probability of any unresolved bit is one. Block reliability needs a bound on the event of any failure, often requiring stronger graph and tail control.

</details>

## Summary

Sparse parity checks define a graph and an actual rank-dependent rate. Sum-product is exact on trees; peeling failure is characterised by stopping sets. Regular-ensemble BEC density evolution is proved for fixed-depth local limits, with its recursion threshold separated from finite-graph and block-error guarantees.
