var e=`---
parent_id: book-probabilistic-graphical-models
chapter_id: conditional-independence-d-separation
title: "Conditional Independence and D-Separation"
level: graduate
estimated_minutes: 240
license: CC BY-SA 4.0
---

# Conditional Independence and D-Separation

## Conditional independence is a statement about a law

**Definition 2.1 (Conditional independence).** Let A, B and S be disjoint collections of finite-valued variables. The notation $A\\perp B\\mid S$ means that, for every conditioning configuration with positive probability, the conditional joint law of A and B factors into the product of its two conditional marginals. Zero-probability conditioning configurations place no constraint. Conditional independence is symmetric, but it is not monotone under adding information to the conditioning set.

For bounded functions of A and B, factorization is equivalent to the conditional product identity
$$
E[f(A)g(B)\\mid S]=E[f(A)\\mid S]E[g(B)\\mid S].
$$
One direction follows by summing the factored conditional mass function. For the other, choose indicator functions of single configurations. This function formulation extends naturally to general random variables, although this chapter's explicit mass-function proofs remain finite. It separates an equality of conditional laws from the vanishing of one conditional covariance, which is generally weaker.

The original [directed-model chapter](../structured-probabilistic-learning/directed-graphical-models.md) supplies the chain, fork and collider motifs expanded here. Its existing exercise identities and solutions remain there. We now prove the probability identities and the graphical soundness argument, while distinguishing the additional assumption needed to read every open path as dependence.

## The elementary independence rules

Decomposition says that independence of a pair of collections from A implies independence of each subcollection from A. Sum the conditional factorization over the unwanted variables. Weak union says $A\\perp(B,C)\\mid S$ implies $A\\perp B\\mid(S,C)$. At a positive-probability pair of conditioning values, divide the original factorization by the positive conditional probability of C. The result is a product conditional on both S and C.

Contraction combines $A\\perp B\\mid S$ and $A\\perp C\\mid(S,B)$ into $A\\perp(B,C)\\mid S$. Multiply the conditional law of B given S by the conditional law of A and C given S and B. The second premise factors that last law; the first replaces the resulting law of A given S and B by the law given S. The remaining two terms are exactly the joint law of B and C given S. If a B value has zero probability given S, both sides of the desired equality vanish there, so division was unnecessary on that slice.

Intersection is a stronger rule. Under a strictly positive joint mass function, the premises $A\\perp B\\mid(S,C)$ and $A\\perp C\\mid(S,B)$ imply $A\\perp(B,C)\\mid S$. Fix S and a value of A. The first premise says its conditional probability given B and C depends only on C; the second says it depends only on B. Positivity allows every pair of B and C configurations to be compared, forcing that probability to be constant across both. This is the required conditional factorization.

Without positivity intersection can fail. If three variables are the same nondegenerate bit, each is independent of another given the third, because conditioning makes all three deterministic. Yet the first is not independent of the pair without conditioning. The missing configurations prevent the cross-comparison used in the proof. This distinction will be central to the converse factorization theorem for undirected graphs.

## Paths and activation in a directed acyclic graph

A directed acyclic graph has no directed cycle. A parent points directly into its child. An ancestor reaches a vertex by a directed path, with the vertex itself included in its ancestor set. An undirected path in the graph ignores arrow direction when choosing neighboring vertices, but retains arrowheads for the following rule.

An internal vertex is a collider on a path when both adjacent arrows point into it. Every other internal vertex is a noncollider. A path is active given S when no noncollider belongs to S and every collider has itself or a descendant in S. The endpoint collections are disjoint from S. D-separation means that no active connection remains between them. These are graphical properties, which can be inspected before any numerical probabilities are assigned.

A useful equivalent implementation uses the ancestral moral graph. First restrict the DAG to the ancestors W of the two endpoint collections together with S. Next replace every arrow by an undirected edge and join every pair of parents sharing a child in that ancestral subgraph. These extra edges are called moral edges. Finally remove S. The endpoint sets are d-separated exactly when no ordinary undirected path joins them in the resulting graph.

Here is the countable-free combinatorial argument behind this criterion. On an active path, follow arrows outward from any vertex along the path until reaching an endpoint or a collider. An endpoint belongs to W and an activated collider is an ancestor of S. Thus every path vertex belongs to W. Replace each collider segment by the moral edge between its two parents. What remains is an undirected walk avoiding S, because all noncolliders were outside S. Removing loops gives a moral path.

For the reverse direction, expand each added moral edge into its two arrows through the corresponding common child. This gives an arrow-respecting route in the ancestral subgraph, whose noncolliders avoid S; newly inserted vertices appear as colliders. If one of its colliders has no descendant in S, its membership in W means it has a directed route to one of the endpoint collections. Replace the corresponding prefix or suffix by that directed route. This removes that offending collider, introduces no new collider on the replacement, and avoids S because the vertex has no descendant there. Choose a route minimizing the number of such offending occurrences, then its length, to see that none remain. Repeated subroutes can be removed; if a splice creates a collider, the removed route either already supplies its activation or supplies the same directed-route replacement just described. A shortest surviving route is therefore an active path. This proves the criterion and also explains why ancestral restriction must precede moralization.

## A full soundness proof by ancestral factorization

**Theorem 2.2 (Soundness of d-separation).** Suppose a finite joint law factors as normalised conditional tables over the DAG. Sum out vertices outside W in reverse topological order. Each removed vertex is a sink among the remaining outside vertices, and no vertex in W has an outside ancestor. Its own conditional factor is the only remaining factor involving it as a child or parent of a remaining child; summing that factor removes it. The marginal on W is consequently the product of the original conditional factors for vertices in W.

Each remaining factor involves a child and its parents. Those vertices form a clique in the moral graph, because parents have been joined to each other and to their child. If S separates A from B in this graph, remove S and partition the remaining vertices into components, collecting all components containing A on one side, all containing B on another, and any other components as needed. No factor crosses between distinct components after the value of S is fixed.

The conditional unnormalized mass therefore becomes a product of functions, one for each component, with S held fixed. Summing unwanted vertices inside each component preserves that product. The normalizer factors into the product of the component sums. At every positive-probability S value those sums normalise the respective component laws, proving their conditional independence and hence $A\\perp B\\mid S$. Together with the moral criterion this proves that d-separation implies conditional independence for every factorizing distribution. Positivity was not required; normalisation is used only on positive-probability conditioning slices.

The theorem is a one-way guarantee about every law in a graph family. A faithful distribution is one whose conditional independences are exactly those implied by d-separation. Under faithfulness an active path implies dependence. Without it an active path merely permits dependence. Conditional-independence testing estimates properties of a particular unknown law; connecting them back to graph separation requires this additional modelling assumption and finite-sample error control.

## Worked example 1: conditioning can create dependence

**Example 2.3 (conditioning can create dependence).** Let A and C be independent fair bits and let $B=A\\mathbin{\\mathrm{xor}}C$. Their graph is the collider $A\\to B\\leftarrow C$. Without observing B, the endpoints are independent. Given B equal to zero they are equal, so their conditional joint law assigns one half to each equal pair and zero to the unequal pairs. Both conditional marginal success probabilities remain one half. The product of marginals would assign one quarter to every pair, so conditional independence fails.

Add a noisy descendant D obtained by flipping B with independent error probability q strictly between zero and one. Given D equal to zero, the probability that A equals C is one minus q. The individual endpoint marginals are still fair by symmetry. Unless q is one half, observing only the descendant has induced dependence. At q equal to one half the descendant is independent noise and the graphical path is open but the endpoints remain independent. This is a concrete unfaithful parameter choice, not a failure of the graphical guarantee.

## Worked example 2: a blocking variable can still matter after a collider opens

**Example 2.4 (a blocking variable can still matter after a collider opens).** Consider $X_1\\to X_2\\to X_3\\leftarrow X_4$. With no conditioning, the path between the outer endpoints is blocked at the collider. Given only the third variable, it becomes active. Given the second variable as well, the conditioned noncollider blocks it again. Thus the endpoints are independent given the second and third variables for every factorizing law, although conditioning on the third alone can create dependence.

The marginal proof is equally instructive. Fix the middle two variables. The joint expression for the endpoints factors into one term involving only the first endpoint and another involving only the fourth, multiplied by fixed constants. Normalization therefore separates them. This direct calculation verifies the graphical answer and shows why the slogan that conditioning always opens colliders is incomplete: another vertex on the same path may still block it.

## Worked example 3: exact cancellation with nonzero arrows

**Example 2.5 (exact cancellation with nonzero arrows).** Let A, E and F be independent standard normals. Put $B=A+E$ and $C=B-A+F$. The DAG contains arrows from A to B, from A to C and from B to C, all with nonzero structural coefficients. Yet substitution gives $C=E+F$, independent of A. The covariance vanishes, and joint Gaussianity promotes this to independence.

The graph has an active direct path between A and C with no conditioning, so that independence is absent from d-separation. The distribution is unfaithful through an exact cancellation. Its covariance matrix is nonsingular because the transformation from independent noises has full rank, so this phenomenon is not limited to deterministic constraints or zero-probability slices. Perturbing the negative coefficient destroys the exact cancellation but can leave dependence arbitrarily small, which is a separate difficulty for finite-sample detection.

## What to condition on must be specified by the question

A conditioning set is not a collection of every available measurement by default. Conditioning can block a common cause, open a collider, or change the target population through selection. The graphical criterion describes the resulting probability statement for a specified joint law; it does not choose which scientific question should be asked. Intervention and adjustment criteria require extra causal semantics developed later.

Nor does a missing direct edge imply marginal independence. In a chain, the endpoints can be marginally dependent through the intervening vertex; in an undirected Gaussian graph an absent edge concerns independence given all other coordinates. The type of graph and the conditioning set are both part of the claim. Writing only that two nodes are independent without these qualifiers discards essential information.

When implementing a separation calculation, ancestral restriction and collider status must use the original arrow graph. Reversing arrows during an ordinary search would change the meaning of a collider. The moral graph is an auxiliary representation after the correct ancestral subset has been chosen. It is not a replacement causal graph and its added parent edges are not newly discovered direct effects.

## Exercises

<a id="conditional-independence-d-separation-ex-1"></a>

### Exercise 1

Prove symmetry of conditional independence using conditional mass functions.

<details><summary>Hint 1</summary>

Interchange the two factors.

</details>

<details><summary>Hint 2</summary>

The conditioning configuration must have positive mass.

</details>

<details><summary>Full solution</summary>

On any positive conditioning slice the factored conditional mass is the product of the two marginal conditional masses. Multiplication is commutative, so the same equation with the factors reversed proves the reversed independence statement. Null slices impose no additional requirement. The argument does not need positivity of the full joint table.

</details>

<a id="conditional-independence-d-separation-ex-2"></a>

### Exercise 2

Why does weak union not imply that arbitrary extra conditioning preserves independence?

<details><summary>Hint 1</summary>

Inspect its premise.

</details>

<details><summary>Hint 2</summary>

The extra variable is part of the independent collection before conditioning.

</details>

<details><summary>Full solution</summary>

Weak union assumes independence of the whole pair of collections from the first collection before moving one part into the conditioning set. Ordinary independence of only the first two collections is a weaker premise. The collider example has independent endpoints but conditioning on their XOR makes them dependent, so it directly refutes unrestricted monotonicity.

</details>

<a id="conditional-independence-d-separation-ex-3"></a>

### Exercise 3

In $A\\to B\\leftarrow C\\to D$, check endpoint separation by the empty set, B, C, and both B and C.

<details><summary>Hint 1</summary>

There is one endpoint path.

</details>

<details><summary>Hint 2</summary>

B is a collider and C a noncollider.

</details>

<details><summary>Full solution</summary>

The empty set leaves the collider unactivated, so it separates A and D. Conditioning on B activates that collider and leaves the noncollider unconditioned, so the path is active. Conditioning on C blocks the path, with or without B. Only separation guarantees independence for all factorizing laws; the active case needs faithfulness to guarantee dependence.

</details>

<a id="conditional-independence-d-separation-ex-4"></a>

### Exercise 4

Give a failure of intersection without positivity.

<details><summary>Hint 1</summary>

Take three identical fair bits.

</details>

<details><summary>Hint 2</summary>

After conditioning on any one, all become constant.

</details>

<details><summary>Full solution</summary>

Let A, B and C all equal one fair bit. A is independent of B given C, and independent of C given B, because each conditional law is deterministic. But A is not independent of the pair B and C unconditionally, since that pair reveals A. The joint table has many zeros, exactly excluding the cross-configurations used by the positive intersection proof.

</details>

<a id="conditional-independence-d-separation-ex-5"></a>

### Exercise 5

Why must the moral graph be restricted to ancestors before removing the conditioning set?

<details><summary>Hint 1</summary>

Use an unobserved collider.

</details>

<details><summary>Hint 2</summary>

Moralizing its parents too early would join them.

</details>

<details><summary>Full solution</summary>

For an isolated collider with no conditioned descendant, its child is not an ancestor of the endpoints or the conditioning set and should be removed first. Moralizing the entire graph would join its parents, falsely creating a connecting path. Ancestral restriction removes precisely that irrelevant collider before any parent marriage can create the spurious connection.

</details>

<a id="conditional-independence-d-separation-ex-6"></a>

### Exercise 6

Compute $P(A=C\\mid D=0)$ in the noisy-descendant example.

<details><summary>Hint 1</summary>

The collider bit is itself fair.

</details>

<details><summary>Hint 2</summary>

The descendant is a symmetric noisy copy.

</details>

<details><summary>Full solution</summary>

The collider equals zero exactly when the endpoints agree, and has prior probability one half. The descendant is zero with probability one half. Their joint zero probability is one half times one minus q. Dividing gives one minus q. At q equal to one half this is the independent-endpoint equality probability; otherwise it demonstrates conditional dependence.

</details>

<a id="conditional-independence-d-separation-ex-7"></a>

### Exercise 7

Is zero conditional covariance enough for conditional independence of arbitrary variables?

<details><summary>Hint 1</summary>

Use a symmetric variable and its square.

</details>

<details><summary>Hint 2</summary>

A product moment can vanish while a deterministic relation remains.

</details>

<details><summary>Full solution</summary>

No. A symmetric nondegenerate variable with a finite third moment can have zero covariance with its square, because the relevant odd moments vanish. Yet its square is determined by it and is generally nonconstant, so they are dependent. Conditional versions can use the same example on every conditioning slice. Joint Gaussian structure is an additional assumption that makes zero covariance sufficient.

</details>

<a id="conditional-independence-d-separation-ex-8"></a>

### Exercise 8

Explain the unfaithfulness in the Gaussian cancellation example.

<details><summary>Hint 1</summary>

Substitute the equation for B into C.

</details>

<details><summary>Hint 2</summary>

Compare the resulting noise dependence with the direct arrow.

</details>

<details><summary>Full solution</summary>

Substitution cancels the contribution of A, leaving C equal to E plus F. Those noises are independent of A, so the endpoints are marginally independent. The graph nevertheless has a direct arrow between them and therefore an active path. The extra independence is a parameter cancellation not encoded by separation, even though every structural edge coefficient is nonzero.

</details>

<a id="conditional-independence-d-separation-ex-9"></a>

### Exercise 9

Why can the factorization-to-separation proof tolerate zero joint probabilities?

<details><summary>Hint 1</summary>

No conditional normalisation is done on null slices.

</details>

<details><summary>Hint 2</summary>

Factor sums separate on every feasible conditioning configuration.

</details>

<details><summary>Full solution</summary>

The ancestral marginal is obtained by summing normalised kernels, which does not need positive entries. On a conditioning configuration with positive probability, the product of component normalizers is positive, so the conditional factorization is legitimate there. Configurations of zero conditioning probability impose no independence requirement. Positivity becomes necessary for some converse implications, not for this forward factorization argument.

</details>

<a id="conditional-independence-d-separation-ex-10"></a>

### Exercise 10

Does a failure to reject an independence hypothesis establish d-separation?

<details><summary>Hint 1</summary>

Separate the population law from the estimated test outcome.

</details>

<details><summary>Hint 2</summary>

Faithfulness is another premise even with exact population independence.

</details>

<details><summary>Full solution</summary>

A finite-sample non-rejection may reflect weak dependence or low test power, so it does not establish population independence. Even an exact population independence corresponds to separation only under a faithfulness assumption. Thus neither a test outcome nor an isolated probability equality alone identifies graphical separation or a causal orientation.

</details>
`;export{e as default};