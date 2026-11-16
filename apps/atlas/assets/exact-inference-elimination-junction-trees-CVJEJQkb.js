var e=`---
parent_id: book-probabilistic-graphical-models
chapter_id: exact-inference-elimination-junction-trees
title: "Exact Inference: Elimination, Messages and Junction Trees"
level: graduate
estimated_minutes: 240
license: CC BY-SA 4.0
---

# Exact Inference: Elimination, Messages and Junction Trees

## State the query before choosing an algorithm

Exact inference computes a specified marginal, conditional law, normalising constant, or maximizing configuration of a specified joint model. These queries are related, but their algebra differs. This chapter develops the elimination and tree arguments in the retained [Exact and Approximate Inference](../structured-probabilistic-learning/exact-and-approximate-inference.md) source. HMM recursions and variational objectives receive separate chapters next; the original source, its examples and its four exercise identities remain available.

Assume a finite family of finite-valued variables and nonnegative finite factors, with positive global normalizer. Enter evidence by restricting observed coordinates in each factor. Their product now gives an unnormalized law on the remaining variables. Its sum equals the original normalizer times the evidence probability. If that sum is zero, the conditional query is undefined under this model. A message of all zeros is therefore meaningful information about impossible evidence, not a vector to normalise into an arbitrary uniform probability.

A query set Q is retained while other unobserved variables are summed out. The resulting factor on Q is normalised once at the end. For a continuous density model, analogous integration can be exact when factors belong to a closed analytic family, such as Gaussians. The finite-table complexity statements here do not automatically describe those symbolic or numerical integration costs.

## Variable elimination and its invariant

**Proposition 6.1 (Exact elimination invariant).** To eliminate one variable, collect all factors containing it, multiply them, sum that variable out, and replace those factors by the resulting factor on their remaining union of scopes. Every other factor is independent of the eliminated variable and can be pulled outside the sum. Thus each elimination step preserves exactly the partial sum of the original factor product.

Induct on the number of eliminated variables. Initially the factor product is the original weight. If the invariant holds before an elimination, the preceding distributive identity proves it afterwards. At termination the remaining product is precisely the unnormalized query marginal. This proves exactness independently of elimination order. The order changes the size of intermediate factors, not the target value in exact arithmetic.

Eliminating a vertex connects all its remaining factor neighbors into a clique in the interaction graph. With at most r states per variable and w remaining neighbors at a step, a direct table computation touches on the order of $r^{w+1}$ entries, while the stored resulting factor has up to $r^w$ entries. Cardinalities can differ, in which case their products replace these powers. The largest induced neighborhood controls the worst table width. Sparsity or special factor structure can reduce actual work, so width is a generic dense-table bound rather than an unavoidable cost for every numerical instance.

For a fixed order, record the eliminated vertex together with its later neighbors as a bag. Assign its generated factor to the next bag that contains its remaining scope. This elimination tree organizes the same partial sums without changing their meaning. A minimum-fill heuristic can be helpful, but does not certify minimum width. The treewidth is the smallest possible maximum later-neighbor count over orders; choosing a heuristic order does not make its width equal to that optimum.

## Sum-product on a pairwise tree: a full proof

**Theorem 6.2 (Exact tree messages).** Let the interaction graph be a tree, with unary and pair factors. Removing an edge splits it into two components. Define the directed message from i toward j to be the sum of every variable in the i-side component, including i, of its internal factor product together with the boundary edge factor, while keeping the j value fixed. This definition immediately gives the recursion
$$
m_{i\\to j}(x_j)=\\sum_{x_i}\\psi_i(x_i)\\psi_{ij}(x_i,x_j)
\\prod_{k\\in\\operatorname{ne}(i)\\setminus\\{j\\}}m_{k\\to i}(x_i).
$$
Indeed the branches entering i share only its fixed value and otherwise contain disjoint variable sets and factors. Distributivity separates their sums into the product of incoming messages. A leaf has an empty product, providing the recursion base. Induction on component size proves that every computed message has exactly its stated partial-sum interpretation.

Choose a root and compute incoming messages from the leaves. The root's unary factor times its incoming messages is its unnormalized marginal, since the branches partition all other variables. Its sum is the global normalizer. Send messages outward using the same recurrence; each directed edge is then evaluated once after its required inputs are available. Every node obtains its exact marginal by the same product formula. An edge marginal is its pair factor times the two endpoint unary factors and all incoming messages from the other branches, normalised by the same global sum.

There are twice as many directed messages as edges. For fixed bounded state counts, pairwise message costs are bounded and the arithmetic is linear in vertex count. Without those cardinality bounds, saying only that the algorithm is linear conceals the table work. A factor graph whose bipartite variable-factor graph is a tree has the same branch argument, with factor-to-variable messages summing the other variables in that factor's scope.

## Worked example 1: the retained three-bit chain

**Example 6.3 (the retained three-bit chain).** Use the original pair tables
$$
\\psi_{12}=\\begin{pmatrix}2&1\\\\1&2\\end{pmatrix},\\qquad
\\psi_{23}=\\begin{pmatrix}3&1\\\\1&3\\end{pmatrix}
$$
with no nontrivial unary factors. The first endpoint sends the constant message three to the middle, and the last sends the constant four. Their product is twelve at each middle value. Hence Z is twenty-four and every one-node marginal is fair. The outward messages are also twelve, giving the same answer at each endpoint.

If the middle bit is observed to be zero, the two endpoint conditional weights become respectively $(2,1)$ and $(3,1)$. Their normalised success-at-zero probabilities are two thirds and three quarters. Their conditional joint law is the product, as separation predicts. Without evidence the unnormalized endpoint table after eliminating the middle is
$$
\\begin{pmatrix}7&5\\\\5&7\\end{pmatrix}.
$$
Its sum is twenty-four, and endpoint agreement has probability seven twelfths. Nodewise fairness therefore does not imply mutual independence. Computing only the three singleton marginals would miss this dependence.

## Junction trees and the running-intersection condition

**Definition 6.4 (Junction tree).** A junction tree consists of bags of variables arranged in a tree such that every original factor scope lies in some bag and the bags containing any fixed variable form a connected subtree. The latter property is running intersection. Adjacent bag intersections are separators. Assign each original factor to one containing bag exactly once and multiply the assigned factors into that bag's potential, using a unit potential for an empty assignment.

**Theorem 6.5 (Exact junction-tree messages).** Removing a bag edge splits the tree. Running intersection ensures that any variable appearing on both sides belongs to the separator: otherwise its connected bag subtree would have to cross that edge without including the variable in its intersection. Thus after separator values are fixed, all other variables on the two sides are disjoint. This is the structural fact that makes message passing exact.

The message from bag C toward neighboring bag D is
$$
m_{C\\to D}(x_{C\\cap D})=
\\sum_{x_{C\\setminus D}}\\psi_C(x_C)
\\prod_{B\\in\\operatorname{ne}(C)\\setminus\\{D\\}}m_{B\\to C}(x_{B\\cap C}).
$$
Its meaning is the partial sum of every factor assigned to the C-side subtree over every side variable outside the separator. The same induction as for ordinary trees proves this interpretation: running intersection prevents accidentally summing a shared variable independently in different branches. The bag belief is its potential times all incoming messages, and equals the unnormalized bag marginal. Summing it gives the same global normalizer at every bag. Marginalizing a bag belief to a separator gives its exact unnormalized separator marginal, so neighboring bags calibrate consistently.

Elimination bags from a filled graph can be organised into such a tree by linking a bag to the first later bag containing its surviving neighbors; subset bags may be absorbed. Those later neighbors were joined into a clique when the bag was formed, so a later containing bag exists until the root. Tracking any variable from its first bag through these parent links proves running intersection. This gives a constructive route from an elimination order to exact junction-tree inference, rather than assuming every arbitrary collection of cliques can be connected safely.

## Worked example 2: a four-cycle and a two-bag tree

**Example 6.6 (a four-cycle and a two-bag tree).** Take a binary cycle with edges 12, 23, 34 and 41. Eliminate vertex 1. Its two incident factors produce a new factor on vertices 2 and 4, filling in their missing edge. The next elimination can use a three-variable bag. Two bags $\\{1,2,4\\}$ and $\\{2,3,4\\}$ joined across separator $\\{2,4\\}$ form a valid junction tree, with original edge factors assigned to their containing bags.

The largest bag has three binary variables, so direct calculations use at most eight configurations per bag, and separator messages have four entries. An arbitrary star with the same number of vertices could have a different induced width under a poor order. Conversely, a longer simple cycle still admits width two. Node count alone does not determine exact-inference difficulty, and filling in an edge is computational bookkeeping rather than a newly asserted causal relation.

## Scaling messages and preserving the evidence likelihood

A positive scalar multiple of a message yields the same normalised marginal after all constants are consistently canceled. This permits normalisation during propagation to avoid underflow. But the discarded constants are needed for the partition function or evidence likelihood. Store their logarithms and restore their contribution at the root. Reporting a normalised state vector alone does not report the probability of the data.

For nonnegative tables, log weights may be minus infinity at zeros. The stable identity $\\log\\sum_i e^{a_i}=m+\\log\\sum_i e^{a_i-m}$ uses the finite maximum m. If every input is minus infinity, the sum is zero and its log is minus infinity; subtracting that maximum would create an undefined numerical expression. This is an implementation branch dictated by exact support, not a reason to alter the model by inserting positive mass.

Floating-point inference is not literally exact arithmetic. The term exact algorithm means its algebra returns the target in exact arithmetic, unlike a variational restriction or a finite simulation approximation. Roundoff, scaling mistakes and unstable Gaussian solves still require their own numerical analysis. Keeping the target and algebra explicit makes those errors identifiable.

## Max-product, backtracking and mixed queries

Replacing summation by maximization in elimination computes a maximum joint weight, because nonnegative multiplication distributes over maximum as well. Record a maximizing eliminated value for each remaining-scope configuration. After choosing a maximizing final configuration, backtrack these stored choices to recover a compatible joint maximizer. Taking each node's marginal maximizer independently would not guarantee such compatibility.

Summation and maximization do not commute. If a query asks for the most probable value of one variable after marginalizing another, sum the marginalized variable before maximizing the retained one. For a two-by-two weight table with rows $(.30,.30)$ and $(.39,.01)$, the first row has larger total mass .60, but the largest individual entry is .39 in the second row. A maximum-joint-state calculation would therefore give the wrong answer to the marginal-mode query.

## Worked example 3: a converged loopy message need not be exact

**Example 6.7 (a converged loopy message need not be exact).** For three signs on a triangle with identical positive Ising coupling J and no fields, constant symmetric sum-product messages form a fixed point. The resulting singleton beliefs are fair, which are indeed the exact singleton marginals by sign symmetry. This partial success does not establish exactness of other beliefs.

Write t for tanh J. Expanding each edge exponential as cosh J times one plus t times the edge sign product, summation cancels every selected-edge subset with an odd-degree vertex. On a triangle only the empty subset and the full cycle survive, giving
$$
Z=8\\cosh^3J(1+t^3).
$$
Differentiating the log normalizer with respect to a common J and dividing by three gives the exact edge correlation $(t+t^2)/(1+t^3)$. The symmetric loopy edge belief instead gives correlation t. These differ for positive finite J. Thus an actual fixed point can have correct singleton symmetry and incorrect pair beliefs. The tree proof failed because deleting an edge no longer separates independent branches; convergence of an iteration cannot restore that missing identity.

## Exercises

<a id="exact-inference-elimination-junction-trees-ex-1"></a>

### Exercise 1

Prove the variable-elimination invariant for one step.

<details><summary>Hint 1</summary>

Collect factors by whether they contain the eliminated variable.

</details>

<details><summary>Hint 2</summary>

Pull all other factors outside its sum.

</details>

<details><summary>Full solution</summary>

The full product is the product of collected factors times the product of untouched factors. The untouched part does not depend on the eliminated value, so summation distributes as that part times the sum of the collected product. Replacing the collected factors by this new summed factor therefore preserves the exact partial marginal. Induction gives the multi-step result.

</details>

<a id="exact-inference-elimination-junction-trees-ex-2"></a>

### Exercise 2

Compute the endpoint marginal table of the retained chain.

<details><summary>Hint 1</summary>

Multiply the two edge tables as matrices over their shared middle index.

</details>

<details><summary>Hint 2</summary>

Normalize by their total sum.

</details>

<details><summary>Full solution</summary>

Summing the middle coordinate gives entries seven, five, five and seven. Their total is twenty-four. Dividing by twenty-four gives the endpoint joint law and agreement probability fourteen twenty-fourths, or seven twelfths. Each endpoint is fair because both row sums are twelve, but the joint table does not factor into independent fair marginals.

</details>

<a id="exact-inference-elimination-junction-trees-ex-3"></a>

### Exercise 3

With middle evidence zero, recover the endpoint marginals.

<details><summary>Hint 1</summary>

Restrict each edge factor to its zero middle entry.

</details>

<details><summary>Hint 2</summary>

Normalize each endpoint vector separately.

</details>

<details><summary>Full solution</summary>

The first endpoint weights are two and one, yielding probabilities two thirds and one third. The last weights are three and one, yielding three quarters and one quarter. The restricted product has no factor linking the endpoints once the middle is fixed, so their conditional joint law is the product. This preserves the exact supported evidence calculation from the original source.

</details>

<a id="exact-inference-elimination-junction-trees-ex-4"></a>

### Exercise 4

Why does running intersection matter for junction-tree exactness?

<details><summary>Hint 1</summary>

Remove a bag edge.

</details>

<details><summary>Hint 2</summary>

A variable shared by both sides must be in their separator.

</details>

<details><summary>Full solution</summary>

Running intersection makes all bags containing one variable connected. If that variable occurs on both sides of a removed edge, it must occur in both incident bags and hence their separator. After holding separator values fixed, all other side variables are disjoint. This justifies the independent branch sums in the message proof. Without it the same shared variable could be summed inconsistently in different branches.

</details>

<a id="exact-inference-elimination-junction-trees-ex-5"></a>

### Exercise 5

What is wrong with discarding every message normalisation constant when computing the evidence likelihood?

<details><summary>Hint 1</summary>

Normalized beliefs determine shapes but lose scale.

</details>

<details><summary>Hint 2</summary>

The root partition sum contains every discarded scalar.

</details>

<details><summary>Full solution</summary>

Multiplying messages by positive scalars leaves normalised posterior marginals unchanged because the scalars cancel. The global partition sum does not cancel them. If normalisation constants are discarded, its scale and therefore the evidence likelihood are lost. Storing their logarithms and combining them with the final root sum restores the original partial-sum interpretation.

</details>

<a id="exact-inference-elimination-junction-trees-ex-6"></a>

### Exercise 6

Why is an all-zero message not normalised to a uniform vector?

<details><summary>Hint 1</summary>

It represents zero partial weight for every separator configuration.

</details>

<details><summary>Hint 2</summary>

The relevant evidence can be impossible.

</details>

<details><summary>Full solution</summary>

All zeros mean that no configuration in that subtree has positive model weight for the given constraints. Replacing the vector by a uniform one inserts positive mass unsupported by the original factors. The algorithm should propagate the zero support information and report an undefined conditional query if the final evidence weight is zero. A smoothed model must be declared separately.

</details>

<a id="exact-inference-elimination-junction-trees-ex-7"></a>

### Exercise 7

For the four-cycle, give a width-two elimination order.

<details><summary>Hint 1</summary>

Eliminate one vertex to connect its two neighbors.

</details>

<details><summary>Hint 2</summary>

The remaining graph is a triangle.

</details>

<details><summary>Full solution</summary>

Eliminate vertex 1, whose remaining neighbors are 2 and 4, adding their fill edge. Then eliminate 2, whose remaining neighbors are 3 and 4. The last two eliminations have at most one remaining neighbor. The largest later-neighbor count is two, and the bags have at most three variables. This order therefore provides width two, regardless of the particular edge potential values.

</details>

<a id="exact-inference-elimination-junction-trees-ex-8"></a>

### Exercise 8

Use the two-row example to show that max and sum cannot be freely interchanged.

<details><summary>Hint 1</summary>

Compare row totals with row maxima.

</details>

<details><summary>Hint 2</summary>

The most probable row and the largest cell occur in different rows.

</details>

<details><summary>Full solution</summary>

The first row sums to .60 and the second to .40, so marginalizing the column selects the first row. The row maxima are .30 and .39, so maximizing the column before selecting a row chooses the second. Thus the order of sum and max changes the answer. An algorithm must preserve the requested marginal-MAP query rather than treat every elimination operation interchangeably.

</details>

<a id="exact-inference-elimination-junction-trees-ex-9"></a>

### Exercise 9

Why can fair singleton beliefs on the triangle coexist with incorrect edge beliefs?

<details><summary>Hint 1</summary>

Sign symmetry alone determines each singleton.

</details>

<details><summary>Hint 2</summary>

It does not determine the joint correlation.

</details>

<details><summary>Full solution</summary>

Flipping every sign leaves the model unchanged, forcing each one-site probability to be one half. Many distinct joint distributions share those marginals. The loopy fixed point respects symmetry while missing the cycle correction in the true partition function and edge correlation. Its correct singletons therefore provide no general certificate of exact inference.

</details>

<a id="exact-inference-elimination-junction-trees-ex-10"></a>

### Exercise 10

What does exact mean for a floating-point message-passing implementation?

<details><summary>Hint 1</summary>

Separate an algebraic identity from numerical arithmetic.

</details>

<details><summary>Hint 2</summary>

Compare with approximation-family error.

</details>

<details><summary>Full solution</summary>

The algorithm is exact when its operations are exact arithmetic identities for the stated factor model. A computer calculation can still incur roundoff, underflow, scaling or indexing errors. This differs from variational or finite-sample Monte Carlo error, which remains even with exact arithmetic. The word exact names the target-preserving algorithmic algebra, not proof that an unexamined numerical output is error-free.

</details>
`;export{e as default};