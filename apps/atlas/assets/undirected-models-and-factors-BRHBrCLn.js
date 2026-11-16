var e=`---
parent_id: book-probabilistic-graphical-models
chapter_id: undirected-models-and-factors
title: "Undirected Models and Factors"
level: graduate
estimated_minutes: 240
license: CC BY-SA 4.0
---

# Undirected Models and Factors

## Potentials describe interactions before normalization

**Definition 4.1 (Undirected factor model).** An undirected graphical model represents a joint law through factors whose scopes lie within cliques of an undirected graph. A clique is a set of vertices all joined to each other. With finite state spaces and counting measure, write
$$
p(x)=\\frac1Z\\prod_C\\psi_C(x_C),\\qquad Z=\\sum_x\\prod_C\\psi_C(x_C).
$$
The factors are nonnegative, and a probability exists exactly when Z is positive. Finiteness is automatic for finite-valued finite factors on a finite state space, but not when an infinite value is permitted or when sums become continuous integrals. Each factor need not normalise over its own arguments. Its values are weights, not conditional probabilities unless a separate conditional normalisation establishes that interpretation.

This chapter expands the [retained undirected-model source](../structured-probabilistic-learning/undirected-models-and-factors.md). Its Gaussian precision discussion has a full treatment in the next chapter. Here we prove separation from factorization and the finite strictly positive converse, so that the role of positivity is visible in the proof rather than attached as a footnote.

Using maximal cliques is sufficient because any smaller clique factor can be absorbed into a containing maximal clique. It does not mean every factor must have maximal scope. Factor graphs often preserve smaller scopes because that representation helps computation or interpretation. Two different factor lists can describe exactly the same normalised probability, since multiplying one factor by a constant only changes the partition function by that constant.

## Separation implies conditional independence for factored laws

Let disjoint vertex sets A and B be separated by S: every undirected path from one to the other meets S. Remove S and consider the connected components of the remaining graph. A clique cannot contain vertices in two distinct components, since any such pair would have an edge between them. Once S is fixed, every factor therefore depends on variables from at most one component, together with the fixed boundary values.

Collect factors by component. Factors involving only S give a common multiplier. For a positive-probability S configuration, the unnormalized conditional law is a product of component functions. Its finite sum over all remaining variables is the product of their separate sums. Dividing by that product proves conditional independence of the component blocks. Marginalizing inside blocks then gives $X_A\\perp X_B\\mid X_S$.

No strict positivity was used. Some component functions can vanish at configurations, and a whole conditioning slice can be impossible. We normalise only feasible slices. Thus hard constraints do not break the forward implication from a valid clique factorization to the global Markov property. They do affect converse results, where probability zeros prevent division and logarithms.

Global Markov implies local Markov because a vertex's neighbors separate it from all remaining nonneighbors. Local Markov implies pairwise Markov by weak union: two nonadjacent vertices are independent given every other vertex. In general the reverse implications require more than this implication chain. Strict positivity supplies a particularly clean route, proved next.

## A full finite positive Hammersley-Clifford argument

**Theorem 4.2 (Finite positive Hammersley-Clifford equivalence).** Assume now that the joint mass is strictly positive at every configuration. Choose a reference state, called zero, for each coordinate, and put $f(x)=\\log p(x)$. For each vertex subset A define the reference interaction
$$
\\phi_A(x_A)=\\sum_{B\\subseteq A}(-1)^{|A\\setminus B|}f(x_B,0_{V\\setminus B}).
$$
The empty interaction is the log probability at the full reference configuration. Summing these interactions over all A gives f: the coefficient of a fixed reference evaluation indexed by B is the sum of alternating signs over all supersets of B, which is zero unless B is the full vertex set. This is the finite inclusion-exclusion inversion, and all sums are finite.

Suppose the pairwise Markov property holds. For any nonedge between i and j, independence conditional on every other coordinate gives the positive-table cross-product identity. Taking logarithms yields the mixed difference
$$
f(x_i,x_j,z)-f(x_i,0_j,z)-f(0_i,x_j,z)+f(0_i,0_j,z)=0
$$
for every remaining configuration z. Positivity ensures each log and each conditional ratio exists. If a subset A contains that nonedge, group the terms in its interaction expansion into quadruples indexed by subsets of the remaining vertices. Each quadruple is precisely one of these mixed differences, up to a sign. Therefore its interaction vanishes identically.

Every nonclique contains a nonedge, so only clique interactions survive. Exponentiate the expansion:
$$
p(x)=\\prod_{A\\text{ a clique}}e^{\\phi_A(x_A)}.
$$
The empty constant can be absorbed into normalisation or any clique factor. This is a positive clique factorization. We have proved pairwise Markov implies factorization under finite strict positivity. Combining with the earlier implication chain proves equivalence of clique factorization and global, local and pairwise Markov properties in this setting.

The proof identifies the exact limitation. Without strict positivity the log representation and the cross-comparisons can fail, so one must not invoke this converse for a constrained support merely by observing some conditional independences. The positive theorem is not a claim that every distribution has only pairwise interactions: the graph's cliques may have three or many more vertices.

## Worked example 1: an Ising chain and its normalizer

**Example 4.3 (an Ising chain and its normaliser).** For three signs with no external field, take
$$
p(x_1,x_2,x_3)\\propto\\exp(Jx_1x_2+Kx_2x_3).
$$
Sum each endpoint first. Either value of the middle sign gives endpoint sums twice cosh J and twice cosh K, so $Z=8\\cosh J\\cosh K$. Conditional on the middle sign, the endpoint factors separate. The conditional mean of the first endpoint is its middle value times tanh J; the corresponding mean for the third uses tanh K.

The sign-symmetry of the full law gives zero marginal means. Conditional independence then yields $E[X_1X_3]=\\tanh J\\tanh K$. Nonzero couplings can therefore create endpoint marginal dependence despite the absent endpoint edge. Conditional independence given the middle remains exact. The distinction matches the earlier DAG-chain calculation even though this representation uses unnormalized potentials rather than sequential transition rows.

For any zero-field Ising tree the same leaf-summing argument gives the partition function $2^d\\prod_e\\cosh J_e$. Remove a leaf: summing its sign contributes twice its edge cosh, leaving the smaller tree. Continue to one vertex, whose sum is two. This proof relies on acyclicity and zero external fields; a cycle or a field changes the calculation rather than merely adding the same factor.

## Worked example 2: a triangle can contain a three-way interaction

**Example 4.4 (a triangle can contain a three-way interaction).** Take three signs with a positive law proportional to $\\exp(\\theta x_1x_2x_3)$ for a nonzero real theta. Its graph can be the complete triangle, whose maximal clique is all three vertices. A single triple potential represents the law. It cannot be represented by only positive pairwise and singleton potentials.

To see this, take log probabilities and multiply by the product of all three signs, then sum over every configuration. A constant, singleton term or pairwise term contributes zero, because summing over an absent sign cancels it. The triple log interaction contributes $8\\theta$, which is nonzero. Hence a sum of pairwise log factors cannot equal this log law. If a product of nonnegative pairwise factors represented a strictly positive joint law, every participating factor would have to be positive on every local configuration, so logarithms would again apply. Allowing zeros cannot evade the argument for this positive target.

A graph describes the allowed maximum interaction scopes. Replacing a general clique model by one with only edges is an additional restriction on its distribution family. This distinction matters in log-linear models, factor construction and parameter counting, even when a drawing of the triangle looks the same in both cases.

## Worked example 3: pairwise Markov without positive factorization

**Example 4.5 (pairwise Markov without positive factorization).** Let three variables all equal the same fair bit, and draw the graph with no edges. Each pair is conditionally independent given the third because conditioning makes them deterministic. Thus this distribution satisfies the pairwise Markov property for that empty graph. But it cannot factor into singleton potentials, since that would make the three variables mutually independent, contrary to their perfect agreement.

The local property also fails here: a variable is not independent of the other two without conditioning. This shows exactly why a proof that reverses the implication chain needs positivity or another sufficient condition. It does not contradict the forward separation theorem, which assumed an actual clique factorization. A graph plus a list of pairwise conditional statements is not automatically such a factorization in the presence of support constraints.

## Full conditionals and the Markov blanket

Under a valid factor product, the conditional mass of one vertex given all others is proportional to the product of only those factors containing it. All other factors cancel. Their scopes lie inside that vertex together with its neighbors, giving the local Markov property again. On a feasible conditioning slice the remaining sum is positive and supplies its conditional normalizer.

For the Ising model with singleton field h and pair interactions, the single-site conditional odds are the exponential of twice the field plus twice the weighted neighbor sum. For signs this means
$$
P(X_i=1\\mid x_{-i})=\\frac{1}{1+\\exp\\{-2(h_i+\\sum_jJ_{ij}x_j)\\}}.
$$
This logistic form comes from comparing the two unnormalized masses; the global partition function cancels. A local Gibbs update can therefore be easy even when global normalisation is hard. Correct full conditionals do not alone prove that the resulting sampler moves between every feasible configuration or mixes quickly.

With hard constraints a one-site sampler may be trapped. For the equal-bit distribution, every full conditional deterministically retains the common bit, so single-site updates cannot move between the two supported configurations. That distribution can be represented on the complete graph by a hard-constraint triple factor, but the sampler's reducibility remains. Block updates or another representation may be necessary; merely normalising each conditional does not solve a support-connectivity problem.

## Partition functions as probability and geometry

For a finite exponential family $p_\\theta(x)=\\exp\\{\\theta^TT(x)-A(\\theta)\\}$ with a fixed support, differentiation of the finite sum proves
$$
\\nabla A(\\theta)=E_\\theta T(X),\\qquad
\\nabla^2A(\\theta)=\\operatorname{Cov}_\\theta(T(X)).
$$
The Hessian is positive semidefinite, so A is convex. It is strictly convex along directions for which the corresponding linear combination of statistics is not constant on the support. Redundant sufficient statistics therefore create nonidentifiability directions. These facts underlie moment matching in maximum likelihood and the computational difficulty of learning an undirected model: evaluating the gradient requires model expectations.

A conditional or pseudolikelihood objective can avoid the global normalizer by multiplying local conditional probabilities. That product is generally not the original joint likelihood; it weights local prediction tasks rather than their shared normalisation. It may be useful for estimation under separate theory, but its curvature cannot automatically be substituted for the Fisher information of the full model. Later learning chapters keep this distinction explicit.

Finally, factors can be rescaled in many ways without changing their normalised product. Moving a positive function of a shared separator from one neighboring factor to another leaves the joint law unchanged. Potential values are consequently not individually identified unless a parameterization convention is imposed. Probabilities, conditional distributions and expectations are the invariant objects to which inference algorithms should ultimately return.

## Exercises

<a id="undirected-models-and-factors-ex-1"></a>

### Exercise 1

Show that multiplying one potential by a positive constant leaves the normalised joint law unchanged.

<details><summary>Hint 1</summary>

Compute the new partition function.

</details>

<details><summary>Hint 2</summary>

The same constant appears in numerator and denominator.

</details>

<details><summary>Full solution</summary>

Every unnormalized configuration weight is multiplied by the constant, so their sum is multiplied by it as well. The ratio defining each joint probability is unchanged. This requires a positive constant and a previously valid positive finite normalizer; multiplying by zero would destroy normalisation rather than preserve the law.

</details>

<a id="undirected-models-and-factors-ex-2"></a>

### Exercise 2

Prove the local Markov property directly from clique factors.

<details><summary>Hint 1</summary>

Cancel factors that omit the chosen vertex.

</details>

<details><summary>Hint 2</summary>

The remaining scopes contain only its neighbors.

</details>

<details><summary>Full solution</summary>

On a feasible configuration of all other vertices, conditional probabilities are proportional to the factors containing the chosen vertex. Every other factor is constant in that vertex and cancels. Since a clique containing the vertex can contain only its neighbors, the resulting conditional law depends only on neighbor values. This yields independence from all remaining nonneighbors given the neighbors.

</details>

<a id="undirected-models-and-factors-ex-3"></a>

### Exercise 3

Why does positivity enter the Hammersley-Clifford converse proof?

<details><summary>Hint 1</summary>

Inspect the log interaction expansion.

</details>

<details><summary>Hint 2</summary>

Conditional cross-products must be compared on all configurations.

</details>

<details><summary>Full solution</summary>

Strict positivity makes each joint log finite and ensures every conditional slice needed for cross-comparison exists. The pairwise Markov statements then force mixed log differences to vanish everywhere. With zeros, the logs may be undefined and the feasible support may prevent comparing different coordinate values, so the alternating interaction argument cannot be used unchanged.

</details>

<a id="undirected-models-and-factors-ex-4"></a>

### Exercise 4

Derive the zero-field Ising-tree partition function by leaf removal.

<details><summary>Hint 1</summary>

Sum the leaf sign while holding its neighbor fixed.

</details>

<details><summary>Hint 2</summary>

The resulting cosh factor does not depend on the neighbor sign.

</details>

<details><summary>Full solution</summary>

A leaf occurs in exactly one edge factor. Summing its two sign values gives twice the cosh of that edge coupling, independent of the neighboring sign. Remove the leaf and repeat. After all edges are removed, the remaining isolated vertex contributes two. The total is $2^d$ times the product of edge coshes. External fields or cycles invalidate the same simple recursion.

</details>

<a id="undirected-models-and-factors-ex-5"></a>

### Exercise 5

In the three-sign chain, compute the endpoint covariance.

<details><summary>Hint 1</summary>

Condition on the middle sign.

</details>

<details><summary>Hint 2</summary>

Use their conditional means and zero marginal means.

</details>

<details><summary>Full solution</summary>

The endpoints are conditionally independent given the middle. Their conditional means are the middle sign multiplied by the two hyperbolic tangents. Their conditional product expectation is the product of those tangents because the square of the middle sign is one. Marginal sign symmetry gives zero means, so the same value is their covariance. It is nonzero when both couplings are nonzero.

</details>

<a id="undirected-models-and-factors-ex-6"></a>

### Exercise 6

Why are three pairwise potentials insufficient for every positive law on a triangle?

<details><summary>Hint 1</summary>

Consider the triple-sign interaction example.

</details>

<details><summary>Hint 2</summary>

Take the signed sum of log probabilities.

</details>

<details><summary>Full solution</summary>

A pairwise log factor omits at least one sign, making its contribution vanish when summed against the product of all three signs. Every pairwise-plus-singleton representation therefore has zero triple signed log coefficient. The example with log weight theta times the triple product has coefficient eight theta, which is nonzero. A general triple clique factor is necessary for that law.

</details>

<a id="undirected-models-and-factors-ex-7"></a>

### Exercise 7

Give a positive clique factorization of the equal-bit distribution on a complete graph if possible, and otherwise give a nonnegative one.

<details><summary>Hint 1</summary>

The target has zero mass at mixed configurations.

</details>

<details><summary>Hint 2</summary>

A hard-constraint triple factor is allowed.

</details>

<details><summary>Full solution</summary>

No strictly positive factor product can produce zeros, so a positive factorization is impossible. A nonnegative triple factor equal to one on all-equal configurations and zero elsewhere has partition function two and gives the desired fair distribution. Its support constraint does not prevent a valid clique factorization, though it can trap a one-site sampler.

</details>

<a id="undirected-models-and-factors-ex-8"></a>

### Exercise 8

Derive the single-site logistic conditional for an Ising model.

<details><summary>Hint 1</summary>

Compare the weights at sign plus one and minus one.

</details>

<details><summary>Hint 2</summary>

All terms omitting that sign cancel.

</details>

<details><summary>Full solution</summary>

The log weight difference is twice its singleton field plus twice the sum of its neighboring coupling-times-sign values. Thus the ratio of positive to negative conditional mass is the exponential of that difference. Normalizing the two masses gives the logistic formula. The global partition function cancels exactly, even if it would be expensive to compute.

</details>

<a id="undirected-models-and-factors-ex-9"></a>

### Exercise 9

Prove the gradient and Hessian identities for the finite log partition function.

<details><summary>Hint 1</summary>

Differentiate the finite normalising sum.

</details>

<details><summary>Hint 2</summary>

The derivative of a normalised mean introduces a covariance.

</details>

<details><summary>Full solution</summary>

The first derivative divides the statistic-weighted sum by the partition sum, giving its expectation. Differentiating a component expectation in another parameter direction gives the product-statistic expectation minus the product of expectations, the covariance entry. Finite sums justify differentiation directly. The covariance matrix is positive semidefinite because each quadratic form is a variance.

</details>

<a id="undirected-models-and-factors-ex-10"></a>

### Exercise 10

Why should a pseudolikelihood product not be called the joint likelihood?

<details><summary>Hint 1</summary>

The local conditionals overlap in their variables.

</details>

<details><summary>Hint 2</summary>

Their product need not normalise as the joint table.

</details>

<details><summary>Full solution</summary>

Each conditional is normalised only in its own vertex with the other values fixed. Multiplying all those conditionals does not in general reproduce the original joint mass or normalise over complete configurations. The objective can be used as a composite criterion, but its information and uncertainty properties require their own argument rather than those of the full likelihood.

</details>
`;export{e as default};