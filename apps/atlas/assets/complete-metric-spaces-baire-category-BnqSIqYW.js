var e=`---
parent_id: book-topology-proof-counterexample
chapter_id: complete-metric-spaces-baire-category
title: "Complete Metric Spaces and Baire Category"
level: advanced-undergraduate
estimated_minutes: 210
license: CC BY-SA 4.0
---

# Complete Metric Spaces and Baire Category

Completeness turns successive approximations into points of the space. Baire category turns that fact into a statement about countably many simultaneous requirements. If each requirement holds on a dense open set, completeness prevents all their intersections from disappearing. The conclusion is stronger than nonemptiness: every nonempty open region contains a point satisfying all the requirements.

The distinction between a metric and its topology matters throughout. A particular metric can be incomplete even though another metric giving the same open sets is complete. Baire category is formulated using open sets, so it survives homeomorphisms. This chapter proves the nested-ball argument, develops its equivalent category language, and explains exactly which completeness and density hypotheses its applications require. The metric and uniform preliminaries are in [Uniform Spaces, Completion and Total Boundedness](uniform-spaces-completion-and-total-boundedness.md).

## 1. Completeness and nested approximation

**Definition 15.1.** A sequence $(x_n)$ in a metric space $(X,d)$ is Cauchy if for every $\\varepsilon>0$ there is $N$ such that $d(x_m,x_n)<\\varepsilon$ whenever $m,n\\ge N$. The metric space is complete if every Cauchy sequence converges to a point of $X$. A topological space is completely metrizable if it has some compatible complete metric.

A convergent sequence is Cauchy by the triangle inequality. The converse is the content of completeness, rather than an alternative definition of convergence. Completeness also depends on the chosen distance: equivalent topologies do not necessarily have the same Cauchy sequences.

**Lemma 15.2 (nested closed sets).** Suppose $(X,d)$ is complete and $(F_n)$ is a decreasing sequence of nonempty closed subsets with diameters tending to zero. Then $\\bigcap_nF_n$ consists of exactly one point.

**Proof.** Choose $x_n\\in F_n$. For $m\\ge n$, both $x_m$ and $x_n$ belong to $F_n$, so $d(x_m,x_n)\\le\\operatorname{diam}(F_n)$. Consequently $(x_n)$ is Cauchy and converges to some $x\\in X$. For each fixed $n$, its entire tail lies in the closed set $F_n$, so $x\\in F_n$. If $y$ also belongs to every $F_n$, then $d(x,y)\\le\\operatorname{diam}(F_n)$ for every $n$, forcing $x=y$. $\\square$

Nonempty closed sets alone are insufficient: in $\\mathbb R$ the decreasing closed sets $[n,\\infty)$ have empty intersection. Diameter control is what makes selected points Cauchy. Alternatively, nested closed subsets of one compact space have nonempty intersection without a diameter hypothesis, by the finite intersection property. These are two different mechanisms.

In metric constructions we will choose closed balls inside prescribed open sets. If $x\\in O$ and $O$ is open, choose $r>0$ so that $B(x,2r)\\subseteq O$. Then the closed ball $\\overline B_d(x,r)=\\{y:d(x,y)\\le r\\}$ is contained in $O$. Here the bar notation denotes the closed metric ball; its equality with the topological closure of the open ball is not needed and need not hold in every metric space.

## 2. The Baire theorem with a full proof

**Theorem 15.3 (Baire, complete metric form).** If $(X,d)$ is complete and $G_1,G_2,\\ldots$ are dense open subsets of $X$, then $\\bigcap_{n\\ge1}G_n$ is dense in $X$.

**Proof.** It suffices to show that the intersection meets each nonempty open set $O$. Density makes $O\\cap G_1$ nonempty and openness permits a center $c_1$ and radius $0<r_1\\le1/2$ with
$\\overline B_d(c_1,r_1)\\subseteq O\\cap G_1$.
Suppose $c_n,r_n$ have been chosen. The nonempty open ball $B(c_n,r_n)$ meets the dense open set $G_{n+1}$. Choose a point in that intersection and then a positive radius $r_{n+1}\\le2^{-(n+1)}$ so small that
$\\overline B_d(c_{n+1},r_{n+1})
 \\subseteq B(c_n,r_n)\\cap G_{n+1}.$
This recursive selection uses the ordinary countable dependent selections available under the usual axiom of choice.

The closed balls are nonempty, nested, and have diameters at most $2r_n\\to0$. Lemma 15.2 gives a point $x$ in all of them. The first ball puts $x$ in $O$, and the nth ball puts it in $G_n$. Hence $x\\in O\\cap\\bigcap_nG_n$. Since $O$ was arbitrary, the intersection is dense. If $X$ is empty, density is automatic and the argument requires no choice of $O$. $\\square$

At an isolated point a sufficiently small positive-radius ball may be a singleton. This causes no problem: the open ball is still nonempty, and every dense set contains that isolated point. The proof works for spaces with or without isolated points.

Both adjectives in “dense open” do work. Dense sets alone can have empty intersection: the rationals and irrationals are disjoint dense subsets of the real line. Open sets alone can also have empty intersection. The proof needs density to enter the next requirement and openness to reserve a whole closed ball within it.

## 3. Nowhere dense, meagre, and residual

**Definition 15.4.** A subset $A$ of $X$ is nowhere dense if $\\operatorname{Int}_X(\\overline A)=\\varnothing$. A set is meagre in $X$ if it is a countable union of nowhere dense subsets of $X$. A set is residual if its complement is meagre. A space is Baire if every countable intersection of dense open subsets is dense.

A nowhere dense set is allowed to be nonclosed. Its closure is still nowhere dense. A dense set need not be nonmeagre: $\\mathbb Q$ is dense and meagre in $\\mathbb R$. The words “in $X$” matter because changing the ambient space changes both closure and interior.

**Proposition 15.5 (equivalent formulations).** A space $X$ is Baire if and only if no nonempty open subset of $X$ is meagre in $X$.

**Proof.** Suppose $X$ is Baire and $O$ is nonempty open. If $O\\subseteq\\bigcup_nA_n$ with each $A_n$ nowhere dense, then $G_n=X\\setminus\\overline{A_n}$ is dense open. Baireness gives a point of $O\\cap\\bigcap_nG_n$, contradicting the covering.

Conversely, suppose no nonempty open subset is meagre. For dense open $G_n$, each $F_n=X\\setminus G_n$ is closed with empty interior, hence nowhere dense. If $\\bigcap_nG_n$ were not dense, some nonempty open $O$ would miss it and satisfy $O\\subseteq\\bigcup_nF_n$. A subset of a nowhere dense set is nowhere dense, so this makes $O$ meagre, a contradiction. $\\square$

It follows that in a Baire space every residual set is dense: its meagre complement cannot contain any nonempty open set. A residual set need not itself be a countable intersection of open sets; it contains such an intersection by replacing its nowhere dense complementary pieces by their closures.

**Corollary 15.6 (closed-cover principle).** If a nonempty complete metric space is the union of countably many closed sets, at least one of those sets has nonempty interior.

**Proof.** Otherwise all the closed sets would be nowhere dense and the whole space would be a nonempty open meagre set, contrary to Theorem 15.3 and Proposition 15.5. $\\square$

The conclusion concerns at least one member, not every member. It gives no numerical lower bound on the size of that interior.

## 4. Subspaces and compatible complete metrics

**Proposition 15.7.** Every open subspace of a Baire space is Baire.

**Proof.** Let $U$ be open in the Baire space $X$, and let $V_n$ be dense open in $U$. Since $U$ is open, each $V_n$ is also open in $X$. Put $H_n=V_n\\cup(X\\setminus\\overline U)$. These are open and dense in $X$: density of $V_n$ in $U$ gives $\\overline{V_n}\\supseteq\\overline U$, while the second term covers the exterior. For any nonempty open $O\\subseteq U$, Baireness gives a point of $O\\cap\\bigcap_nH_n$. Being in $U$, it must belong to every $V_n$. Thus their intersection is dense in $U$. $\\square$

An arbitrary subspace need not be Baire: $\\mathbb Q\\subset\\mathbb R$ is the central counterexample below. Closed subspaces of a complete metric space are complete in the restricted metric and therefore Baire. These two statements do not assert that every closed subspace of an arbitrary Baire space is Baire.

**Proposition 15.8 (open subspaces admit complete remetrizations).** If $(X,d)$ is complete and $U$ is open, then $U$ is completely metrizable.

**Proof.** The empty set and $U=X$ are immediate. Otherwise let $F=X\\setminus U$ be nonempty closed, set $\\delta(x)=d(x,F)>0$ on $U$, and define
$\\rho(x,y)=d(x,y)+\\left|\\frac1{\\delta(x)}-\\frac1{\\delta(y)}\\right|.$
This is a metric. The distance-to-set function is 1-Lipschitz, and its reciprocal is continuous wherever positive. Therefore $d$-convergence within $U$ implies $\\rho$-convergence, while $\\rho\\ge d$ gives the reverse implication; metric topologies agree.

A $\\rho$-Cauchy sequence is $d$-Cauchy, so it has a $d$-limit $x\\in X$. Its reciprocal-distance values form a real Cauchy sequence and hence are bounded above. They cannot tend to infinity, so $\\delta(x)>0$ by continuity of $\\delta$. Thus $x\\in U$. Continuity of the reciprocal there now gives $\\rho(x_n,x)\\to0$. Hence $\\rho$ is complete. $\\square$

The stronger characterization of completely metrizable subspaces by $G_\\delta$ conditions, with the necessary ambient hypotheses, is developed in [Metrization Theorems and Compatible Metrics](metrization-theorems-and-compatible-metrics.md). Completeness of a displayed metric should never be inferred just from the existence of another complete compatible one.

## 5. Worked examples

### Worked example 1 — Why the rational line cannot be completely metrizable

Enumerate $\\mathbb Q=\\{q_1,q_2,\\ldots\\}$. Each singleton is closed in the rational subspace and has empty interior: every rational interval contains a different rational. Thus $\\mathbb Q$ is meagre in itself. Equivalently $G_n=\\mathbb Q\\setminus\\{q_n\\}$ is dense open for every $n$, but their intersection is empty.

Consequently the rational line is not Baire. Since Baireness is expressed entirely in open sets, any compatible complete metric would contradict Theorem 15.3. This proves more than incompleteness of its usual metric: there is no complete metric giving its usual topology. Completing the usual rational metric changes the space by adding irrational points; remetrization alone cannot fix it.

### Worked example 2 — An incomplete displayed metric on a Baire space

The Euclidean sequence $x_n=1/(n+1)$ is Cauchy in $(0,1)$ and tends to the missing endpoint zero, so the usual metric there is incomplete. Nevertheless the map $h(x)=\\log(x/(1-x))$ is a homeomorphism from $(0,1)$ onto $\\mathbb R$, with inverse $e^t/(1+e^t)$. Pulling back the complete real metric gives $\\rho(x,y)=|h(x)-h(y)|$.

An isometry onto a complete space makes $\\rho$ complete. Hence $(0,1)$ is Baire. The example refutes the inference “this metric is incomplete, therefore this topology is not Baire.” In fact the sequence $x_n$ is not $\\rho$-Cauchy: $h(x_n)=-\\log n$ escapes to minus infinity.

### Worked example 3 — Countability does not automatically mean meagreness

Let $D=\\mathbb N$ with the discrete metric, equal to one between unequal points. Every Cauchy sequence is eventually constant, so $D$ is complete and Baire. Each nonempty subset is open and closed. Therefore a nonempty subset cannot be nowhere dense: its closure has nonempty interior.

In particular the singleton decomposition of $D$ does not prove meagreness. The singletons have interior here, unlike singletons in $\\mathbb Q$ or $\\mathbb R$. A countable space is meagre in itself when its points are all closed and nonisolated; the nonisolated qualification is essential.

## 6. A nonmetric companion

**Theorem 15.9.** Every locally compact Hausdorff space is Baire.

**Proof.** Let $O$ be nonempty open and $G_n$ dense open. Locally compact Hausdorff shrinking gives a nonempty open $V_1$ with compact closure contained in $O\\cap G_1$. Inductively choose nonempty open $V_{n+1}$ with compact closure contained in $V_n\\cap G_{n+1}$. The nonempty closed sets $\\overline{V_n}$ are nested inside the compact space $\\overline{V_1}$, so compactness gives a point in their intersection. It lies in $O$ and every $G_n$. The shrinking lemma, including the Hausdorff hypothesis, is proved in [Local Compactness and Compactifications](local-compactness-and-compactifications.md). $\\square$

Here no shrinking diameter is required: compactness replaces the metric Cauchy argument. This proof explains why the term Baire space is broader than complete metric space. It also illustrates a useful proof habit: identify the mechanism that prevents nested approximation sets from losing all their points.

## Exercises

<a id="complete-metric-spaces-baire-category-ex-1"></a>
### Exercise 15.1

Prove that a closed subspace of a complete metric space is complete.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

A Cauchy sequence in the subspace is still Cauchy in the ambient space.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Use closedness only after obtaining the ambient limit.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

Let $F$ be closed in complete $X$ and let $(x_n)$ be Cauchy in $F$ with the restricted metric. It converges to some $x\\in X$ by completeness. Since every term belongs to $F$, the limit belongs to its closure, which equals $F$. The same distance proves convergence in the subspace. Thus $F$ is complete.

</details>

<a id="complete-metric-spaces-baire-category-ex-2"></a>
### Exercise 15.2

Show that nested nonempty closed sets can have empty intersection in a complete metric space if their diameters do not tend to zero.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Work in the ordinary real line.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Let the left endpoint of a closed ray tend to infinity.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

The real line is complete and $F_n=[n,\\infty)$ is nonempty closed with $F_{n+1}\\subseteq F_n$. No real number is at least every positive integer, so the intersection is empty. All diameters are infinite. Completeness alone does not produce a point unless selected points can be shown Cauchy or another compactness argument applies.

</details>

<a id="complete-metric-spaces-baire-category-ex-3"></a>
### Exercise 15.3

Prove that the union of finitely many nowhere dense sets is nowhere dense.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Replace each set by its closure.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Successively shrink any nonempty open set to avoid those finitely many closed sets.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

Let $F_1,\\ldots,F_m$ be the closures. Given nonempty open $O$, empty interior of $F_1$ makes $O\\setminus F_1$ nonempty open. Repeat with $F_2$ and the resulting open set, continuing finitely many times. A nonempty open subset remains that misses their union. Thus the closed union $\\bigcup_iF_i$ has empty interior. The closure of the original finite union is this union of closures, proving the assertion.

</details>

<a id="complete-metric-spaces-baire-category-ex-4"></a>
### Exercise 15.4

Show that every subset of a meagre set is meagre and a countable union of meagre sets is meagre.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Intersect a given decomposition with the subset.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

For countable unions, enumerate the pairs of positive integers.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

If $M=\\bigcup_nA_n$ with $A_n$ nowhere dense and $B\\subseteq M$, then $B=\\bigcup_n(B\\cap A_n)$. Each intersection is nowhere dense because its closure lies in $\\overline{A_n}$. If $M_j=\\bigcup_nA_{j,n}$ are meagre, their union is $\\bigcup_{(j,n)\\in\\mathbb N^2}A_{j,n}$. The index set is countable, so this is a meagre decomposition.

</details>

<a id="complete-metric-spaces-baire-category-ex-5"></a>
### Exercise 15.5

Prove that the complement of a meagre subset of a Baire space is dense.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Suppose a nonempty open set misses that complement.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

It would be an open subset of the meagre set.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

Let $M$ be meagre. If $X\\setminus M$ is not dense, there is a nonempty open $O$ disjoint from it. Then $O\\subseteq M$, so Exercise 15.4 makes $O$ meagre in $X$. This contradicts Proposition 15.5. Therefore every nonempty open set meets the complement, which is precisely density.

</details>

<a id="complete-metric-spaces-baire-category-ex-6"></a>
### Exercise 15.6

A complete metric space is countable and has no isolated points. Prove that it must be empty.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Metric singletons are closed.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Without isolated points, those singletons are nowhere dense.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

If the space were nonempty, enumerate its points. Each singleton is closed and has empty interior, so their countable union makes the whole space meagre in itself. The whole space is nonempty open, contradicting the Baire theorem. Thus a nonempty countable complete metric space must have at least one isolated point; under the exercise's hypotheses only the empty space remains.

</details>

<a id="complete-metric-spaces-baire-category-ex-7"></a>
### Exercise 15.7

Let $X$ be a nonempty complete metric space and $F_n$ closed with $X=\\bigcup_nF_n$. Prove that some ball of positive radius is contained in one $F_n$.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Apply the closed-cover principle.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Every nonempty open set in a metric space contains an open ball of positive radius.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

Corollary 15.6 gives an index $n$ for which $\\operatorname{Int}F_n$ is nonempty. Choose $x$ in that interior. By the metric definition of openness some $r>0$ satisfies $B(x,r)\\subseteq F_n$. The ball may be a singleton if $x$ is isolated, but its radius is still positive, exactly as requested.

</details>

<a id="complete-metric-spaces-baire-category-ex-8"></a>
### Exercise 15.8

Show directly that $\\mathbb Q$ is dense and meagre in $\\mathbb R$, whereas it is not Baire as a space in its own right.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Distinguish ambient interiors from rational-subspace interiors.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

In both spaces a rational singleton is closed and nonopen.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

Every nonempty real interval contains a rational, so $\\mathbb Q$ is dense in $\\mathbb R$. Enumerating the rationals expresses it as a countable union of real closed singletons with empty real interior, hence meagre in $\\mathbb R$. In the rational subspace those singletons are again closed with empty interior, since no rational is isolated. Thus the whole rational space is meagre in itself and nonempty open in itself, violating the Baire criterion. Density in a larger Baire space does not make a subspace Baire.

</details>

<a id="complete-metric-spaces-baire-category-ex-9"></a>
### Exercise 15.9

Let $U=(0,\\infty)\\subset\\mathbb R$. Prove directly that $\\rho(x,y)=|x-y|+|1/x-1/y|$ is a complete compatible metric on $U$.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

A $\\rho$-Cauchy sequence has a real limit and bounded reciprocals.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Bounded reciprocals prevent the real limit from being zero.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

The sum is a metric because the first term is a metric and the second a nonnegative symmetric triangle-inequality term. Continuity of reciprocal on $U$, together with $\\rho\\ge|\\cdot|$, shows compatibility. If $(x_n)$ is $\\rho$-Cauchy, then $x_n\\to x\\ge0$ in $\\mathbb R$ and $(1/x_n)$ is Cauchy, hence bounded. Therefore $x>0$. Continuity of reciprocal at that point gives $\\rho(x_n,x)\\to0$. Thus $\\rho$ is complete despite incompleteness of the restricted Euclidean metric.

</details>

<a id="complete-metric-spaces-baire-category-ex-10"></a>
### Exercise 15.10

Prove that if $G_n$ are dense open in a Baire space and $M$ is meagre, then $(\\bigcap_nG_n)\\setminus M$ is dense.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Replace each nowhere dense piece of $M$ by its closure.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Combine two countable lists of dense open sets into one list.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

Write $M=\\bigcup_kA_k$ with each $A_k$ nowhere dense. The sets $H_k=X\\setminus\\overline{A_k}$ are dense open. Baireness makes $\\bigcap_nG_n\\cap\\bigcap_kH_k$ dense, since the combined list is countable. This intersection is contained in $(\\bigcap_nG_n)\\setminus M$. Any superset of a dense set is dense, proving the requested conclusion.

</details>

## Sources

The proofs and worked examples are supplied in this chapter. For a primary author exposition of the nested-ball method, see Ben Green, [The Baire Category Theorem](https://people.maths.ox.ac.uk/greenbj/papers/baire-category.pdf). Internal dependencies are [Uniform Spaces, Completion and Total Boundedness](uniform-spaces-completion-and-total-boundedness.md), [Metrization Theorems and Compatible Metrics](metrization-theorems-and-compatible-metrics.md), and [Local Compactness and Compactifications](local-compactness-and-compactifications.md).

## Transferred capstone 9 {#topology-transferred-e009}

Original question identity: [TOP-CH22-E009](../topology-proof-counterexample/topology-proof-atlas-and-capstones.md). The earlier capstone remains available with its own notes; the complete question, staged hints and solution also belong here.

Equip an infinite set with the discrete $0$–$1$ metric. Prove it is complete but not compact. Which half of the “complete plus totally bounded” characterization fails?

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Use an epsilon strictly below one in both arguments.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

The Cauchy condition then severely restricts the tail, whereas a small ball covers very few points.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

Let $X$ be infinite with $d(x,y)=1$ for distinct points. If a sequence is Cauchy, then beyond some index all pairwise distances are less than $1/2$, forcing all those terms to be equal. Thus every Cauchy sequence converges and $X$ is complete. Balls of radius $1/2$ are singletons, so no finite collection covers infinite $X$; it is not totally bounded. Equivalently, the cover by all singletons has no finite subcover, so $X$ is not compact. Total boundedness is the missing half.

</details>

## Summary

Complete metric spaces are Baire because nested closed balls of shrinking diameter retain a common point. Dense open requirements can therefore be imposed countably often inside any nonempty open region. Equivalently, no nonempty open set is meagre. Category is topological and relative to an ambient space; metric completeness concerns a chosen distance. The rational line is not completely metrizable, while an open interval has a complete compatible metric despite its incomplete usual one. Locally compact Hausdorff spaces satisfy the same category conclusion through nested compact sets.
`;export{e as default};