var e=`---
parent_id: book-probabilistic-graphical-models
chapter_id: learning-structure-pc-bde
title: "Learning Structure: PC, BDe and Equivalence"
level: graduate
estimated_minutes: 240
license: CC BY-SA 4.0
---

# Learning Structure: PC, BDe and Equivalence

## What observational structure learning can identify

Structure learning compares graph families using observed data. A graph can represent probabilistic conditional independences without assigning causal effects. Even with unlimited observations, several DAGs can encode the same independence relations and the same observational distributions. An appropriate target can therefore be an equivalence class rather than one fully oriented graph.

This chapter expands the structure-learning portion of the retained [Learning Graph Structure and Parameters](../structured-probabilistic-learning/learning-graph-structure-and-parameters.md). Its BIC parameter counts, four-variable PC example and weak-dependence counterexample remain available. Required preparation is d-separation, finite DAG likelihoods, and Dirichlet integration. We prove the oracle skeleton and collider steps, an exact finite reference completion, and the covered-reversal calculation for compatible Bayesian scores. Finite-sample consistency and efficient completion theory require additional assumptions beyond those elementary arguments.

Assume for the oracle arguments that the observed law is faithful to a DAG on exactly the observed variables. An oracle answers population conditional independence without error. Hidden common causes, selection, cyclic dependence or a violation of faithfulness can break this premise. A finite statistical test is not an oracle merely because its reported significance level is small.

## The PC skeleton argument with an oracle

**Theorem 13.1 (Oracle PC skeleton recovery).** Begin with the complete undirected graph. Search conditioning sets of increasing cardinality among current neighbors of either endpoint. Remove an edge when the oracle declares its endpoints independent given such a set, and record that separating set. This is the skeleton phase of PC. A level-wise version freezes adjacency sets within each level to avoid some order effects in finite data; the oracle reasoning below does not need testing noise or an order convention.

A true adjacent pair cannot be d-separated by any set excluding its endpoints: its direct one-edge path has no internal vertex to block. Faithfulness therefore prevents the oracle from ever removing a true edge. All true neighbors, including parents, remain available during the search.

For a nonadjacent pair, at least one endpoint has the other as a nondescendant, since a directed cycle is impossible. That endpoint is independent of its nonparent nondescendants given its parents by the local Markov property. Its parent set is therefore a separating set for the pair and remains a subset of its current neighbors. Once that size is reached, the search can remove the false adjacency, unless another valid separating set already did. Searching all available sizes consequently leaves exactly the true skeleton. This is a full oracle proof for a finite graph; it does not bound the number or power of finite-sample tests.

## Unshielded colliders and a complete finite reference procedure

An unshielded triple is a path A-B-C with no endpoint adjacency. If its middle is a noncollider in the true DAG, every separating set for the endpoints must contain it, since otherwise that length-two path is active. If it is a collider, no separating set can contain it, since conditioning on the collider itself would activate that path. Thus the recorded separating set determines whether to orient $A\\to B\\leftarrow C$. The oracle skeleton and these orientations recover every true unshielded collider and introduce none.

Additional orientations can be compelled. For example, if $A\\to B-C$ and A is not adjacent to C, orient B toward C to avoid creating an unrecorded collider. If an undirected edge joins the endpoints of an already directed path, orient it in the path direction to avoid a cycle. These are sound propagation rules: the opposite orientation contradicts a known collider pattern or acyclicity. A partial list of such rules should not be claimed to complete every equivalence class.

For an exact, deliberately expensive reference completion, enumerate all acyclic orientations of the recovered skeleton consistent with the recovered collider orientations. For each candidate, compute every d-separation statement and compare it with the oracle independence collection over all disjoint vertex sets. Keep precisely the matching candidates. The true DAG survives by faithfulness, so the retained set is nonempty. Every survivor has the same observed independence structure by construction. Mark an edge directed only when all survivors agree, and otherwise leave it undirected. This exactly describes the invariant-arrow representation of that equivalence class, commonly represented by its CPDAG.

Practical PC implementations use a complete set of orientation-propagation rules rather than exhaustive enumeration. The proof here establishes the oracle skeleton and collider steps and a finite exact completion without assuming the completeness of a partially stated rule list. The enumeration is a mathematical reference, not a recommendation for large datasets. Its exponential search makes the distinction between identifiability and computational tractability explicit.

## Worked example 1: the retained four-variable class

**Example 13.2 (the retained four-variable class).** Suppose the faithful DAG is $X_1\\to X_2\\to X_3\\leftarrow X_4$. The oracle removes the first-to-third edge using the second variable as separator, and removes first-to-fourth and second-to-fourth edges without conditioning. The remaining skeleton is the three-edge path.

The triple at the third vertex is an unshielded collider because that vertex is absent from a separator for the second and fourth. Thus its two arrows point inward. The first edge can point either way without changing the d-separations: both $X_1\\to X_2\\to X_3\\leftarrow X_4$ and $X_1\\leftarrow X_2\\to X_3\\leftarrow X_4$ match the oracle. The completed representation is $X_1-X_2\\to X_3\\leftarrow X_4$.

This ambiguity is intrinsic to observational independence information. Repeating exact tests with larger samples cannot orient that first edge without another assumption or source of information. A software tie-breaking order that chooses one orientation does not make it identified.

## Finite tests and the strength of faithfulness

In data, a conditional-independence test can falsely reject an independence or fail to detect a weak dependence. Those errors can remove a true edge, preserve a false edge, or change a separator and hence a collider orientation. Many dependent test decisions occur during an adaptive search, so a per-test threshold is not a guarantee for the final graph.

Faithfulness excludes exact extra population independences but places no fixed lower bound on every nonzero association. In the retained Gaussian chain, edge coefficients can be nonzero but arbitrarily small, making endpoint dependence arbitrarily weak. A sequence of such problems can defeat uniform recovery without quantitative separation assumptions even though each individual law is faithful. Exact cancellation and weak signal are different issues and should not be conflated.

Hidden variables create another failure mode. Two observed dependent variables may share an unobserved parent. An ordinary DAG search over just those two variables will retain an association edge, but its orientation does not identify whether the relation is direct or confounded. Algorithms designed for latent-variable equivalence classes have another target and stronger representational machinery; they are not obtained simply by relabeling the PC output.

## Bayesian scores from compatible local priors

For complete discrete records and independent Dirichlet row priors, Chapter 12 gives the graph marginal likelihood as a product of row Beta-normalizer ratios. A Bayesian graph posterior multiplies that evidence by a declared graph prior and normalizes over graphs. Comparing raw evidence and comparing posterior graph probability are different when the graph prior is nonuniform.

To obtain compatible local pseudocounts, begin with a strictly positive reference joint law p zero and an equivalent sample size alpha positive. Set each row-cell concentration to alpha times the reference joint probability of that node value and parent configuration. Its row sum is alpha times the reference parent probability. With a uniform reference joint law, this gives the BDeu concentrations $\\alpha/(r_jq_j)$ for a node with r j states and q j parent configurations.

These choices link priors across graphs rather than assigning the same arbitrary row prior independently after each graph is drawn. That compatibility underlies the Bayesian Dirichlet equivalent score. Its value depends on the reference law and equivalent sample size, especially with sparse parent tables. A named score is therefore not free of prior assumptions.

## The covered-reversal score calculation

**Proposition 13.3 (Covered-reversal score equality).** Consider a covered edge $A\\to B$ whose shared other parents are U. For each U configuration the two local score factors are those for A given U and B given A and U. Let compatible joint pseudocounts be alpha u a b and corresponding observed counts N u a b, with sums for shorter subscripts. Their product contains intermediate Gamma terms for the A-given-U counts once in a numerator and once in a denominator, so those terms cancel.

What remains is
$$
\\frac{\\Gamma(\\alpha_u)}{\\Gamma(\\alpha_u+N_u)}
\\prod_{a,b}\\frac{\\Gamma(\\alpha_{uab}+N_{uab})}{\\Gamma(\\alpha_{uab})}.
$$
This is symmetric in A and B and therefore unchanged by the covered reversal. All other graph rows remain the same. We have proved the local score-equivalence calculation directly. The general graph theorem connecting Markov-equivalent DAGs by covered reversals is a separately named combinatorial result; this chapter's exhaustive reference characterization of the oracle class does not require importing it without proof.

## Worked example 2: integrated evidence in two directions

**Example 13.4 (integrated evidence in two directions).** For two binary variables, take compatible joint pseudocounts one in every cell and observed ordered-data cell counts $(3,1,1,3)$. In the direction A to B, the root prior has parameters two and two; each conditional row has parameters one and one. Its evidence is
$$
\\frac{B(6,6)}{B(2,2)}\\frac{B(4,2)}{B(1,1)}\\frac{B(2,4)}{B(1,1)}=\\frac1{184800}.
$$
The reverse direction gives the same value, either by direct integration or the covered-reversal identity. This is the probability of the particular ordered dataset under the integrated model, not of the unordered cell-count event. Adding a separate multinomial factor would change that observed event and should not be done silently.

The equality does not prove a causal direction. Nor does it mean every prior assignment would produce equality: incompatible row pseudocounts can favor one representation for prior reasons. Score equivalence is a property of the chosen compatible model comparison, not an absence of modelling choices.

## BIC and its regularity boundary

With the convention that larger is better, BIC is maximized log likelihood minus one half parameter dimension times log sample size. Its familiar marginal-evidence motivation is a local Laplace approximation: at a unique interior maximum with nonsingular limiting information, rescale parameters around the maximum by reciprocal square root sample size. The quadratic likelihood contributes a fixed Gaussian integral and the volume element contributes $n^{-d/2}$. A smooth positive prior and negligible outside contribution then give log evidence equal to maximized log likelihood minus that dimension penalty plus a bounded term.

This derivation requires fixed dimension, an appropriate interior concentration region and regular information. Mixture singularities, nonidentified rows, growing graph families and boundary parameters can violate it. BIC can still be used as a declared penalized criterion, but its ordinary evidence approximation cannot be justified merely by writing the same formula.

For the retained binary chain and collider, parameter counts are five and six. With maximized log likelihoods ell one and ell two, BIC favors the chain exactly when their difference exceeds minus one half log n. The graph with fewer parameters can tolerate some worse fit, but the dimension penalty does not decide the comparison without their actual fitted likelihoods.

## Worked example 3: a greedy search can miss a useful pair of edges

**Example 13.5 (a greedy search can miss a useful pair of edges).** Take independent fair bits A and B, and let C be their XOR flipped by independent noise with probability one quarter. Every pair is marginally independent, but C depends strongly on the pair A and B jointly. The joint law is strictly positive. In a balanced dataset matching those proportions, adding any single edge to the empty DAG gives no likelihood improvement, so a positive BIC penalty rejects every such move.

Adding both arrows into C allows its four conditional rows to represent the dependence. Its likelihood gain grows linearly with sample size, whereas the additional dimension penalty grows logarithmically. At sufficiently large replicated counts the two-edge graph improves the score even though neither single addition improves it. A purely greedy one-edge ascent starting empty can therefore stop early. This distribution is unfaithful to the collider because it has extra marginal independences; the example concerns a score-search limitation, not a counterexample to the faithful oracle PC theorem.

## What a selected graph supports

The number of possible graphs grows rapidly: undirected graphs alone number $2^{\\binom d2}$. A fixed topological order already permits that many forward-edge DAG choices. Efficient search needs restrictions, decomposable scores, pruning or heuristics, and no stable dimension threshold makes exhaustive search universally feasible.

A selected graph should be accompanied by its graph class, observation model, score or test assumptions and treatment of uncertainty. A high score is a relative comparison among specified candidates; it does not certify causal mechanisms or rule out omitted latent variables. The next chapter adds intervention semantics explicitly, so causal claims can be assessed against assumptions rather than inferred from the direction in a fitted drawing.

## Exercises

<a id="learning-structure-pc-bde-ex-1"></a>

### Exercise 1

Why can a faithful oracle skeleton search never remove a true adjacency?

<details><summary>Hint 1</summary>

Consider the direct one-edge path.

</details>

<details><summary>Hint 2</summary>

It has no internal vertex to block.

</details>

<details><summary>Full solution</summary>

No conditioning set excluding the two endpoints blocks their direct path. They are therefore d-connected for every allowed test set. Faithfulness makes them dependent for every such set, so a correct oracle never declares the independence that would remove their edge. This argument fails with an unfaithful law or finite testing error.

</details>

<a id="learning-structure-pc-bde-ex-2"></a>

### Exercise 2

Why is a separating parent set available for a nonadjacent pair?

<details><summary>Hint 1</summary>

Choose an endpoint for which the other is a nondescendant.

</details>

<details><summary>Hint 2</summary>

True parent edges are never removed.

</details>

<details><summary>Full solution</summary>

At least one endpoint has the other as a nondescendant, since they cannot each descend from the other in a DAG. Nonadjacency makes that other node a nonparent. Local Markov independence then separates it using the chosen endpoint parents. Those parents remain current neighbors because their true edges cannot be removed, so the PC search eventually considers that set.

</details>

<a id="learning-structure-pc-bde-ex-3"></a>

### Exercise 3

Explain the separator criterion for an unshielded collider.

<details><summary>Hint 1</summary>

Inspect its length-two path.

</details>

<details><summary>Hint 2</summary>

Compare conditioning on its middle in collider and noncollider cases.

</details>

<details><summary>Full solution</summary>

A noncollider middle must belong to every separating set, otherwise the length-two path stays active. A collider middle cannot belong to any separating set, because conditioning on it activates that same path. Thus recorded oracle separators distinguish the two cases once the true skeleton is known. Finite erroneous separators need not preserve this conclusion.

</details>

<a id="learning-structure-pc-bde-ex-4"></a>

### Exercise 4

Which edge remains unoriented in the retained four-variable example?

<details><summary>Hint 1</summary>

The third vertex is the collider.

</details>

<details><summary>Hint 2</summary>

Check both orientations of the first edge.

</details>

<details><summary>Full solution</summary>

The edge between the first and second vertices can point either way while preserving all oracle d-separations. The second and fourth both point into the third. Thus the class representation leaves the first edge undirected. A numerical tie rule selecting one of its orientations does not turn observational ambiguity into identification.

</details>

<a id="learning-structure-pc-bde-ex-5"></a>

### Exercise 5

What prior choice defines the BDeu local concentrations?

<details><summary>Hint 1</summary>

Use a uniform positive reference joint law.

</details>

<details><summary>Hint 2</summary>

Distribute one equivalent sample size over node-parent cells.

</details>

<details><summary>Full solution</summary>

For a node with r states and q parent configurations, each row cell receives alpha divided by rq. Its row sum is alpha divided by q. These values arise by marginalizing one compatible uniform reference joint distribution, not by giving every graph row an unrelated fixed concentration. The equivalent sample size alpha remains a substantive prior choice.

</details>

<a id="learning-structure-pc-bde-ex-6"></a>

### Exercise 6

Why do the intermediate Gamma terms cancel under a covered reversal?

<details><summary>Hint 1</summary>

Multiply the parent-row and child-row integrated factors.

</details>

<details><summary>Hint 2</summary>

Their shared marginal concentrations and counts match.

</details>

<details><summary>Full solution</summary>

The Gamma terms involving A together with U occur in the numerator of its local factor and denominator of the B-given-A factor, with identical counts and compatible concentrations. Cancellation leaves only the U normalizer and joint A-B-U cell terms, symmetric in the two nodes. This direct calculation proves equality for that covered reversal under the stated priors.

</details>

<a id="learning-structure-pc-bde-ex-7"></a>

### Exercise 7

For binary chain and collider graphs, derive the BIC comparison.

<details><summary>Hint 1</summary>

Count five and six free parameters.

</details>

<details><summary>Hint 2</summary>

Subtract the two scores.

</details>

<details><summary>Full solution</summary>

The chain score minus collider score equals their maximized log likelihood difference plus one half log n. It is positive exactly when the likelihood difference exceeds minus one half log n. The count follows from one free probability per binary conditional row: one plus two plus two for the chain, and one plus one plus four for the collider.

</details>

<a id="learning-structure-pc-bde-ex-8"></a>

### Exercise 8

Why does faithfulness alone not supply a uniform finite-sample recovery guarantee?

<details><summary>Hint 1</summary>

It forbids exact zeros but not arbitrarily weak dependence.

</details>

<details><summary>Hint 2</summary>

Consider small nonzero Gaussian edge coefficients.

</details>

<details><summary>Full solution</summary>

A faithful sequence of Gaussian chains can have edge effects and induced correlations approaching zero. Finite tests may then lack power even though each population law is faithful. Uniform recovery generally needs quantitative signal separation and other sample-complexity assumptions. Exact cancellation violating faithfulness is a different obstruction from weak but nonzero signal.

</details>

<a id="learning-structure-pc-bde-ex-9"></a>

### Exercise 9

Explain the greedy-search obstruction in the noisy-XOR example.

<details><summary>Hint 1</summary>

Every single pair is marginally independent.

</details>

<details><summary>Hint 2</summary>

The two-parent conditional carries the interaction.

</details>

<details><summary>Full solution</summary>

No one-edge addition improves the empty-model likelihood in the balanced example, so a positive complexity penalty blocks every initial greedy move. Adding both parent edges represents a genuine joint interaction and eventually yields a linear-in-sample likelihood gain exceeding a logarithmic penalty. A search restricted to immediately improving one-edge moves cannot reach that better region from the empty start.

</details>

<a id="learning-structure-pc-bde-ex-10"></a>

### Exercise 10

Can an observationally equivalent graph class alone identify a causal effect?

<details><summary>Hint 1</summary>

The class describes probability independence structure.

</details>

<details><summary>Hint 2</summary>

Interventions specify changes to mechanisms.

</details>

<details><summary>Full solution</summary>

No. Equivalent observational graphs can give different intervention distributions unless additional causal assumptions or data distinguish them. The class records which arrows are compelled by the chosen observational model and faithfulness assumptions, not which mechanisms remain stable under manipulation. Intervention semantics and identification must be stated separately, as in the next chapter.

</details>
`;export{e as default};