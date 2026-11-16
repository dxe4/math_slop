
# Metrization Theorems and Compatible Metrics

A topology records which sets are open; a metric additionally assigns numerical distances. A **metrization theorem** asks when the open-set data can be produced by some metric. The word *some* is essential. A space may carry many compatible metrics with very different numerical behavior, and a familiar metric may fail to be complete even though another compatible metric is complete.

This chapter develops the countable-function proof of the Urysohn metrization theorem, then locates that theorem among stronger criteria and complete-metrizability results. Its metrization statements assume both $T_1$ and the book's point–closed-set regularity condition; the word **regular** itself retains the book-wide convention that does not build in $T_1$.

## 1. Compatible metrics and invariant claims

A metric $d$ on a set $X$ is **compatible** with a topology $T$ if the $d$-open sets are exactly the members of $T$. The space $(X,T)$ is **metrizable** if it has at least one compatible metric. If $d$ and $\rho$ are metrics on the same set, they are topologically equivalent precisely when the identity maps in both directions are continuous. Equivalently, for every $x$ and every positive $\varepsilon$, some $\rho$-ball about $x$ lies in $B_{d}(x,\varepsilon)$, and conversely with $d$ and $\rho$ exchanged.

Metrizability is a topological invariant: a space homeomorphic to a metrizable space is metrizable, by transporting the metric through the homeomorphism. Diameter, boundedness, completeness, total boundedness, and the numerical value of a distance are properties of a chosen metric, not of the topology alone. For example, the usual metric on $\mathbb{R}$ is unbounded, while

$d_{b}(x,y)=\min\{1,|x-y|\}$

is bounded and gives the same topology. Both are complete. By contrast, $(0,1)$ with Euclidean distance is incomplete, although the same topology has a complete compatible metric obtained by transporting Euclidean distance from $\mathbb{R}$ through a homeomorphism.

There is therefore an important topological property between metrizability and a particular metric being complete. A space is **completely metrizable** if it admits at least one complete compatible metric.

## 2. Necessary conditions and their limits

Every metrizable space is Hausdorff, $T_1$, regular, and first-countable. If $x \ne y$, disjoint balls of radius less than $d(x,y)/2$ separate them. If $x \notin F$ and $F$ is nonempty and closed, then $X\setminus F$ contains some ball $B(x,r)$, so $d(x,F)\ge r>0$; shrinking the ball gives a closed ball still missing $F$. The empty-set case is immediate. The balls $B_{d}(x,1/n)$ give a countable local base.

These conditions are necessary but not jointly sufficient in this elementary form. First countability is only local, while a compatible metric must coordinate neighborhoods across the entire space. Second countability supplies the global countable data used below, but it is not necessary for metrizability: an uncountable discrete space is metrized by the $0$-$1$ metric and has no countable basis.

Within metric spaces, second countability is equivalent to separability and to the Lindelof property. Thus the Urysohn theorem can also be read as: a $T_1$ regular space with enough global countability is metrizable. Neither separation hypothesis can simply be deleted. For instance, the line with two origins is second-countable and locally Euclidean but not Hausdorff, so it cannot be metrizable. At a still smaller scale, a two-point indiscrete space is regular under this book's convention and second-countable, but it is not $T_1$ and cannot be metrizable.

## 3. Three countable preparation lemmas

Let $X$ be $T_1$, regular, and second-countable, with countable basis $B=\{B_{1},B_{2},...\}$.

**Lemma 1: $X$ is Lindelof.** Given an open cover, select for each basis member that lies inside a cover member one such cover member. These countably many selections cover $X$.

**Lemma 2: a regular Lindelof space is normal.** Let $A$ and $C$ be disjoint closed sets. Regularity gives an open cover $\{U_{a}:a \in A\}$ of $A$ with $\operatorname{cl}(U_{a})$ disjoint from $C$, and an open cover $\{V_{c}:c \in C\}$ of $C$ with $\operatorname{cl}(V_{c})$ disjoint from $A$. Closed subspaces of a Lindelof space are Lindelof, so choose countable subcovers $\{U_{n}\}$ and $\{V_{n}\}$. Put

$U = \bigcup_{n} (U_{n} \setminus (\operatorname{cl}(V_{1}) \cup ... \cup \operatorname{cl}(V_{n})))$,

$V = \bigcup_{n} (V_{n} \setminus (\operatorname{cl}(U_{1}) \cup ... \cup \operatorname{cl}(U_{n})))$.

Both sets are open. They cover $A$ and $C$ respectively, because points of $A$ lie in no $\operatorname{cl}(V_{n})$ and points of $C$ lie in no $\operatorname{cl}(U_{n})$. They are disjoint: if a point belonged to the $n$th piece of $U$ and the $m$th piece of $V$, then $n\ge m$ would contradict its membership in $V_{m}$, while $m\ge n$ would contradict its membership in $U_{n}$.

**Lemma 3: countably many nested basis pairs control all neighborhoods.** Let

$P=\{(i,j): \operatorname{cl}(B_{i}) \subseteq B_{j}\}$.

This is countable. Given $x \in O$ with $O$ open, choose a basis element $B_{j}$ with $x \in B_{j} \subseteq O$. Regularity gives open $W$ with $x \in W \subseteq \operatorname{cl}(W) \subseteq B_{j}$; then choose $B_{i}$ with $x \in B_{i} \subseteq W$. Hence $(i,j) \in P$, $x \in B_{i}$, and $B_{j} \subseteq O$.

The placement of the closures matters. Merely choosing $B_{i} \subseteq B_{j}$ is not enough for a continuous function forced to be zero on $\operatorname{cl}(B_{i})$ and one outside $B_{j}$.

## 4. Urysohn functions from normality

The **Urysohn lemma** says that if $X$ is normal and $A,C$ are disjoint closed sets, there is a continuous function $f:X\to[0,1]$ with $f=0$ on $A$ and $f=1$ on $C$.

Here is the construction architecture. For dyadic rationals $r$ in $[0,1]$, recursively choose open sets $G_{r}$ such that

$A \subseteq G_{0}$, $\operatorname{cl}(G_{r}) \subseteq G_{s}$ whenever $r<s$, and $\operatorname{cl}(G_{1}) \subseteq X\setminus C$.

At each finite stage, normality inserts an open set whose closure lies between two already chosen sets. Define

$f(x)=\inf(\{r:x \in G_{r}\})$,

using value $1$ if the set is empty. The closure nesting gives

$\{x:f(x)<a\}=\bigcup_{r<a} G_{r}\qquad(0<a\le1)$

and

$\{x:f(x)>a\}=\bigcup_{r>a} (X\setminus \operatorname{cl}(G_{r}))\qquad(0\le a<1)$

for the relevant dyadic comparisons; for rays outside $[0,1]$, the preimage is simply $X$ or $\varnothing$. These formulas prove continuity. The endpoint conditions give the prescribed values. Thus the lemma uses normality and order-density of the dyadic rationals, not a pre-existing metric.

Apply the lemma to every pair $(i,j) \in P$, with closed sets $\operatorname{cl}(B_{i})$ and $X\setminus B_{j}$. We obtain a countable family of continuous functions

$f_{i,j}:X\to[0,1]$

such that $f_{i,j}=0$ on $\operatorname{cl}(B_{i})$ and $f_{i,j}=1$ on $X\setminus B_{j}$.

This family **separates points from closed sets**. If $F$ is closed and $x \notin F$, apply Lemma 3 to $x \in X\setminus F$. Some pair $(i,j)$ has $x \in B_{i}$ and $B_{j} \subseteq X\setminus F$; its function is zero at $x$ and one on $F$. In particular, taking $F=\{y\}$ shows that distinct points receive different function-value sequences.

## 5. Embedding in the countable cube

Enumerate the functions just constructed as $f_{1},f_{2},...$ and define

$e:X\to[0,1]^{\mathbb{N}}$, $e(x)=(f_{1}(x),f_{2}(x),...)$.

Each coordinate is continuous, so $e$ is continuous for the product topology. Point separation makes $e$ injective. To show that $e$ is an embedding, it remains to recover every original neighborhood from coordinate information. If $x \in O$, the point-versus-closed-set property supplies $f_{n}$ with $f_{n}(x)=0$ and $f_{n}=1$ on $X\setminus O$. The cylinder

$\{z \in [0,1]^{\mathbb{N}}:z_{n}<1/2\}$

contains $e(x)$, and its inverse image is contained in $O$. Therefore the topology of $X$ is exactly the initial topology generated by the functions $f_{n}$, so $e$ is a homeomorphism from $X$ onto $e(X)$.

The countable cube has a concrete compatible metric:

$D(s,t)=\sum_{n=1}^\infty 2^{-n}|s_{n}-t_{n}|$.

The series converges because every summand is at most $2^{-n}$. A $D$-small ball controls any prescribed finite set of coordinates. Conversely, choose finitely many coordinate tolerances and then make the tail sum small; this produces a product-basic neighborhood inside a given $D$-ball. Thus $D$ induces the product topology.

Pulling $D$ back along $e$ gives

$d(x,y)=\sum_{n=1}^\infty 2^{-n}|f_{n}(x)-f_{n}(y)|$.

It is a metric because the family separates points, and it induces the original topology because $e$ is an embedding.

**Theorem 13.1 (Urysohn metrization).** Every $T_1$ regular second-countable space is metrizable.

The proof is now visible as a chain:

$\text{second countable} \to \text{Lindelof}$,

$\text{regular} + \text{Lindelof} \to \text{normal}$,

$T_1 + \text{normal} + \text{countable shrinking pairs} \to \text{countable point-separating functions}$,

$\text{separating functions} \to \text{cube embedding} \to \text{compatible metric}$.

This chain also diagnoses hypotheses. $T_1$ supports point separation and closed singletons; regularity creates closure-controlled neighborhoods; second countability makes the separating family countable, so a series metric can combine it.

## 6. Reusable metric constructions

Several constructions recur beyond this proof.

1. If $e:X\to(M,D)$ is an embedding into a metric space, then $d(x,y)=D(e(x),e(y))$ is compatible with $X$.
2. If functions $g_{n}:X\to[0,1]$ separate points and generate the topology, then $\sum_{n=1}^{\infty}2^{-n}|g_{n}(x)-g_{n}(y)|$ is compatible.
3. For metrics $d_n$ on countably many factors, first replace each by $\min\{1,d_n\}$ and use $\sum_{n=1}^{\infty}2^{-n}\min\{1,d_n(x_n,y_n)\}$. This induces the product topology.
4. If $d$ is a metric, then $\min\{1,d\}$ and $d/(1+d)$ are bounded compatible metrics. A Cauchy sequence for either transformed metric is exactly a $d$-Cauchy sequence, so completeness is preserved.
5. If $0<\alpha\le 1$, then $d^\alpha$ is a compatible metric. The inequality $(a+b)^\alpha\le a^\alpha+b^\alpha$ proves the triangle inequality, and Cauchy sequences are unchanged.

Not every increasing transformation preserves the triangle inequality. Compatibility and the metric axioms are separate obligations. Likewise, a sum of pseudometrics becomes a metric only when the combined coordinates separate points.

## 7. Beyond a countable basis: Nagata–Smirnov orientation

The Urysohn theorem is powerful but excludes nonseparable metric spaces. The correct large-scale replacement for a countable basis is controlled local finiteness. A family $\mathcal U$ is **locally finite** if every point has a neighborhood meeting only finitely many members. It is **$\sigma$-locally finite** if it is a countable union of locally finite families.

**Theorem 13.2 (Nagata–Smirnov metrization (orientation; proof not supplied here)).** A $T_1$ regular space is metrizable if and only if it has a $\sigma$-locally finite basis.

The forward direction organizes metric balls, using locally finite refinements, into countably many locally finite layers. The reverse direction converts basis layers into locally finite systems of continuous functions and combines their pseudometrics. Local finiteness ensures that the relevant sums behave continuously near each point. A full proof requires the refinement theory of metric and paracompact spaces; the statement is included here to show that second countability is a convenient sufficient hypothesis, not the final boundary.

When the basis itself is countable, split it into singleton families: each singleton family is locally finite. Nagata–Smirnov then implies Urysohn metrization once regularity is known. The embedding proof above is more informative in the countable case because it displays the metric explicitly.

## 8. Complete metrizability is a topological boundary

Completeness of one compatible metric is not invariant, but the existence of a complete compatible metric is invariant. The interval $(0,1)$ illustrates the distinction. Its Euclidean metric is incomplete because $1/(n+1)$ is Cauchy with no limit in the interval. Yet the homeomorphism

$h(x)=\log(x/(1-x))$

from $(0,1)$ onto $\mathbb{R}$ gives the complete compatible metric $\rho(x,y)=|h(x)-h(y)|$.

The central subspace criterion is the following.

**Theorem 13.3 (G-delta).** If $A$ is a subspace of a completely metrizable space $X$, then $A$ is completely metrizable if and only if $A$ is a $G_{\delta}$ subset of $X$, meaning a countable intersection of open sets.

One direction has a useful construction. Suppose $(X,d)$ is complete and $A=\bigcap_{n} G_{n}$, with every $G_{n}$ open. For $a \in A$, let

$\delta_{n}(a)=d(a,X\setminus G_{n})$,

omitting any index for which $G_{n}=X$. Every $\delta_{n}(a)$ is positive and continuous. Map

$a \to (a,1/\delta_{1}(a),1/\delta_{2}(a),...)$

into $X \times \mathbb{R}^{\mathbb{N}}$, equipped with a complete countable-product metric after bounding each coordinate metric. The graph is closed: if graph points converge and their first coordinates approach $x$, then $x \notin G_{n}$ would force $\delta_{n}(a)\to 0$ and hence $1/\delta_{n}(a)\to \infty$, contradicting convergence of the $n$th coordinate. A closed subspace of a complete metric space is complete, and projection back to $A$ shows that the pulled-back metric is compatible.

The converse is the imported Alexandrov topological-completeness theorem. Its proof compares a complete compatible metric on $A$ with an ambient metric on $X$ and constructs ambient-open covers whose traces have complete-metric mesh tending to zero. A point surviving every corresponding open union determines nested Cauchy data in $A$, so completeness forces its ambient limit into $A$. We use that theorem here without reproducing the cover-refinement bookkeeping.

Every open subset of a completely metrizable space is $G_{\delta}$ (repeat the open set in the intersection), so it is completely metrizable. Every closed subset is complete under the restricted complete metric. Not every metrizable space is completely metrizable: $\mathbb{Q}$ with its usual topology is not. It is a countable union of singleton sets, each nowhere dense because $\mathbb{Q}$ has no isolated points. The imported Baire category theorem says every nonempty complete metric space is Baire and cannot be a countable union of nowhere dense closed sets. Because the Baire property is topological, no compatible complete metric on $\mathbb{Q}$ can exist.

Thus there are three distinct assertions:

- the displayed metric is complete;
- the topology admits some complete compatible metric;
- the topology admits some compatible metric.

Confusing them is one of the most common errors in metrization arguments.

## 9. Proof and counterexample workflow

To prove a space metrizable, first identify the data actually available. A countable basis plus $T_1$ regularity suggests Urysohn. A natural embedding into a known metric space suggests pulling back its metric. A sigma-locally finite basis plus $T_1$ regularity suggests Nagata-Smirnov, but invoking it should clearly label the theorem. To disprove metrizability, test necessary topological conditions: $T_1$, Hausdorffness, regularity, and first countability are often decisive.

To study complete metrizability, never stop after exhibiting an incomplete familiar metric. Search for a homeomorphism to a complete metric space or realize the space as a $G_{\delta}$ subspace of one. For a negative result, a topological obstruction such as failure of the Baire property is stronger than a single bad Cauchy sequence.

## Completing the subspace criterion

The Urysohn functions used above are established independently in [Urysohn, Tietze and Extension](urysohn-tietze-extension.md). That proof uses the book's convention that normality does not include $T_1$. Here $T_1$ is separately required when closed singletons are used to separate distinct points. The complete-metrizability obstruction below is proved in [Complete Metric Spaces and Baire Category](complete-metric-spaces-baire-category.md), rather than being an unsupported appeal to a name.

**Theorem 12.1 (Complete subspaces are ambient $G_\delta$ sets).** Let $A$ be a subspace of a metric space $(X,d)$. If $A$ admits a complete compatible metric $\rho$, then $A$ is $G_\delta$ in $X$. The ambient metric need not be complete for this direction.

*Proof.* The empty case is immediate, so assume $A\ne\varnothing$. For every positive integer $n$, let $U_n$ be the union of all ambient-open sets $V$ such that
$$
\operatorname{diam}_d(V)<1/n,\qquad
\operatorname{diam}_\rho(V\cap A)<1/n.
$$
Every $a\in A$ belongs to $U_n$: compatibility gives an ambient-open neighbourhood whose trace lies in a sufficiently small $\rho$-ball, and intersecting it with a small $d$-ball controls the ambient diameter.

We claim $A=\operatorname{cl}_X(A)\cap\bigcap_nU_n$. One inclusion is established. For the other, take $x$ in the right side and choose an eligible $V_n\ni x$ for each $n$. Every finite intersection $\bigcap_{i\le n}V_i$ is an ambient neighbourhood of the closure point $x$, so choose $a_n\in A\cap\bigcap_{i\le n}V_i$. For $m,n\ge N$, both selected points lie in $V_N\cap A$, giving $\rho(a_m,a_n)<1/N$. Completeness yields a $\rho$-limit $a\in A$.

Compatibility makes $a_n\to a$ in the ambient metric topology as well. But $a_n,x\in V_n$ gives $d(a_n,x)<1/n$, so $a_n\to x$. Uniqueness of metric limits gives $x=a\in A$. This proves the claim.

Finally the closed set $F=\operatorname{cl}_X(A)$ is $G_\delta$ in a metric space: $F=\bigcap_n\{x:d(x,F)<1/n\}$. Combining the two countable intersections proves the assertion. ∎

Together with the closed-graph construction in Section 8, this supplies both directions of the subspace criterion. The ambient-completeness hypothesis belongs to the sufficiency direction, where the graph is made complete. It is not needed in the necessity proof just given. The topological assertion is the existence of a complete compatible metric, never the completeness of every compatible metric.

### Worked example 1: the endpoint sequence changes its Cauchy behaviour

On $(0,1)$ let $h(x)=\log(x/(1-x))$ and $\rho(x,y)=|h(x)-h(y)|$. For $x_n=1/(n+1)$, the Euclidean distances make $(x_n)$ Cauchy, but $h(x_n)=-\log n$. Comparing indices $n$ and $2n$ gives $\rho(x_n,x_{2n})=\log2$, so the sequence is not $\rho$-Cauchy.

The two metrics have exactly the same convergent sequences and open sets because they are compatible, but they need not have the same nonconvergent Cauchy sequences. The Euclidean endpoint obstruction therefore disappears by changing the uniform structure, without changing the topology.

### Worked example 2: a moving coordinate in the countable cube

Let $e_n\in[0,1]^{\mathbb N}$ have coordinate one at $n$ and zero elsewhere. For the series metric $D$ from Section 5,
$$
D(e_n,0)=2^{-n}\longrightarrow0.
$$
This agrees with product convergence: every fixed coordinate is eventually zero. Under the supremum metric, however, every $e_n$ remains distance one from zero. The supremum topology on this cube is therefore strictly finer than the product topology. A formula containing all coordinates need not impose uniform control on them; the summable weights are what allow the series metric to represent finite-coordinate topology.

### Worked example 3: a series of pseudometrics may still collapse points

On $\mathbb R$, take the bounded continuous function $g(x)=|x|/(1+|x|)$ and use $g_n=g$ for every $n$. Then
$$
\sum_{n=1}^\infty2^{-n}|g_n(x)-g_n(y)|
=|g(x)-g(y)|.
$$
It is a pseudometric, but it assigns distance zero to $x$ and $-x$. It cannot metrize the ordinary real line. The defect is point separation, not convergence of the series: the series converges perfectly well. It records the absolute-value quotient instead of distinguishing the two sides of the origin. The separating-function hypothesis in the embedding proof prevents exactly this collapse.

## Exercises with complete solutions

### TOP-CH12-E001 — Exercise 1
Let $d$ and $\rho$ be metrics on $X$. Prove that they induce the same topology exactly when, at every $x$, every ball for either metric contains a ball for the other metric centered at $x$.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Translate compatibility into neighbourhood bases at one point.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Prove each inclusion of open-set families using a ball contained in a ball.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH12-E001 — Solution 1
If the topologies agree, each $d$-ball is a $\rho$-neighborhood of its center and therefore contains a centered $\rho$-ball; the symmetric statement follows in the same way. Conversely, let $U$ be $d$-open and $x \in U$. Choose a centered $d$-ball in $U$, then a centered $\rho$-ball inside that ball. Thus $U$ is $\rho$-open. Interchanging the metrics proves the reverse inclusion.


</details>

### TOP-CH12-E002 — Exercise 2
On an infinite set $X$ with the discrete topology, give one bounded and one unbounded compatible metric.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

The ordinary discrete metric supplies the bounded example.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Give selected points increasingly large positive weights and use the sum of two endpoint weights as their off-diagonal distance.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH12-E002 — Solution 2
The discrete metric $d(x,y)=1$ for $x\ne y$ is bounded and compatible. In the usual set-theoretic setting, choose distinct points $x_{n} \in X$; set $w(x_{n})=n$ and $w(x)=1$ on all remaining points. Define $\rho(x,y)=0$ when $x=y$ and $\rho(x,y)=w(x)+w(y)$ otherwise. The triangle inequality holds because $w(x)+w(z)\le w(x)+2w(y)+w(z)$. Also $B_{\rho}(x,w(x))=\{x\}$, so $\rho$ is discrete, and $\rho(x_{1},x_{n})=1+n$ is unbounded. This shows boundedness is not topological.


</details>

### TOP-CH12-E003 — Exercise 3
Prove directly that every metric space is regular under the convention used in this chapter.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

A closed set missing a point leaves a positive-radius ball around that point.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Use two different smaller radii to create disjoint open neighbourhoods.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH12-E003 — Solution 3
Metric spaces are $T_1$. If $F$ is closed and $x \notin F$, the complement is open, so some $r>0$ has $B(x,r) \subseteq X\setminus F$. Let $U=B(x,r/3)$ and let $V=X\setminus \operatorname{cl}(B(x,2r/3))$. Then $U$ and $V$ are open, $x \in U$, and $F \subseteq V$. They are disjoint because $U \subseteq \operatorname{cl}(B(x,2r/3))$.


</details>

### TOP-CH12-E004 — Exercise 4
Show that second countability is not necessary for metrizability.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Try a metric on an uncountable discrete set.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Any basis for a discrete space must include every singleton.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH12-E004 — Solution 4
Let $X$ be an uncountable set with the discrete metric. It is metrizable. If it had a countable basis, for each $x$ some basis member would contain $x$ and lie in $\{x\}$, so every singleton would itself be a basis member. That would put uncountably many distinct sets in a countable basis, a contradiction.


</details>

### TOP-CH12-E005 — Exercise 5
Prove that a second-countable space is Lindelof without assuming regularity.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Inspect cover members through the given countable basis.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Choose one cover label for each basis member that fits somewhere inside the cover.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH12-E005 — Solution 5
Let $B$ be a countable basis and $U$ an open cover. For every $B \in B$ that is contained in at least one cover member, select one such member $U_{B}$. Given $x$, choose a cover member containing it and then a basis member $B$ with $x \in B$ inside that member. Hence $x \in U_{B}$. The selected subcover is countable.


</details>

### TOP-CH12-E006 — Exercise 6
Complete the disjointness argument in Lemma 2.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Compare the two indices of the pieces containing a proposed common point.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Whichever index is later excludes the closure containing the earlier piece.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH12-E006 — Solution 6
Suppose $z$ belongs to the $n$th adjusted $U$-piece and the $m$th adjusted $V$-piece. If $n\ge m$, the $n$th $U$-piece excludes $\operatorname{cl}(V_{m})$, yet $z \in V_{m} \subseteq \operatorname{cl}(V_{m})$, a contradiction. If $m\ge n$, the $m$th $V$-piece excludes $\operatorname{cl}(U_{n})$, yet $z \in U_{n} \subseteq \operatorname{cl}(U_{n})$. One of the two inequalities must hold, so the open sets are disjoint.


</details>

### TOP-CH12-E007 — Exercise 7
Given $x \in O$ in a regular second-countable space, prove there are basis members $B_{i},B_{j}$ with $x \in B_{i}$, $\operatorname{cl}(B_{i}) \subseteq B_{j}$, and $B_{j} \subseteq O$.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

First place a basis member inside the target open set.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Insert a closure-controlled open neighbourhood, then a smaller basis member inside it.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH12-E007 — Solution 7
Choose $B_{j}$ with $x \in B_{j} \subseteq O$. Regularity supplies open $W$ with $x \in W \subseteq \operatorname{cl}(W) \subseteq B_{j}$. Choose $B_{i}$ with $x \in B_{i} \subseteq W$. Then $\operatorname{cl}(B_{i}) \subseteq \operatorname{cl}(W) \subseteq B_{j}$, as required.


</details>

### TOP-CH12-E008 — Exercise 8
Show that the Urysohn functions associated with the nested basis pairs separate any point $x$ from any closed set $F$ not containing it.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Apply the nested-basis-pair construction inside the complement of the closed set.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Identify where the associated function is forced to be zero and one.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH12-E008 — Solution 8
Apply Exercise 7 to $x \in X\setminus F$. For the resulting pair, the associated function is zero on $\operatorname{cl}(B_{i})$, hence at $x$, and is one on $X\setminus B_{j}$. Since $B_{j} \subseteq X\setminus F$, we have $F \subseteq X\setminus B_{j}$, so the function equals one throughout $F$.


</details>

### TOP-CH12-E009 — Exercise 9
Let $X$ be $T_1$, and let continuous functions $f_{n}:X\to[0,1]$ separate points from closed sets. Prove that $e(x)=(f_{n}(x))$ embeds $X$ in $[0,1]^{\mathbb{N}}$.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Closed singletons give injectivity.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Use a one-coordinate cylinder to recover an arbitrary domain neighbourhood.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH12-E009 — Solution 9
Taking a closed singleton shows the functions separate distinct points, so $e$ is injective. Coordinate continuity makes $e$ continuous. If $x \in O$, separation from $X\setminus O$ gives $n$ with $f_{n}(x)=0$ and $f_{n}=1$ outside $O$. The inverse image of the cylinder $\{t:t_{n}<1/2\}$ contains $x$ and lies in $O$. Hence the coordinate initial topology contains every original neighborhood; continuity gives the opposite inclusion. Therefore $e$ is a homeomorphism onto its image.


</details>

### TOP-CH12-E010 — Exercise 10
Prove that $D(s,t)=\sum_{n=1}^{\infty}2^{-n}|s_{n}-t_{n}|$ induces the product topology on $[0,1]^{\mathbb{N}}$.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

A small series distance controls each specified weighted coordinate.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

In the reverse direction, divide the estimate into a finite head and a uniformly small tail.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH12-E010 — Solution 10
Given a product-basic neighborhood restricting coordinates $1$ through $N$ after harmlessly adding unrestricted coordinates, choose positive tolerances $\varepsilon_{n}$. A $D$-ball of radius smaller than $\min_{n\le N} 2^{-n}\varepsilon_{n}$ enforces all those restrictions. Conversely, given $\varepsilon>0$, choose $N$ with $\sum_{n>N}2^{-n}<\varepsilon/2$, and restrict each of the first $N$ coordinate differences to less than $\varepsilon/(2N)$. The head contributes less than $\varepsilon/2$ and the tail less than $\varepsilon/2$, so this product neighborhood lies in the $D$-ball.


</details>

### TOP-CH12-E011 — Exercise 11
Assemble Exercises 5--10 into a proof of the Urysohn metrization theorem.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

List the implication chain from countable basis to a countable family of functions.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Finish by pulling back the countable-cube metric along the embedding.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH12-E011 — Solution 11
Second countability gives Lindelofness. Regularity plus Lindelofness gives normality by Lemma 2. Countably many nested basis pairs exist by Exercise 7. Urysohn's lemma assigns to them countably many continuous functions, and Exercise 8 shows they separate points from closed sets. Exercise 9 embeds the space in the countable cube. Exercise 10 metrizes that cube, and pulling the cube metric back along the embedding yields a compatible metric on the original space.


</details>

### TOP-CH12-E012 — Exercise 12
Prove that $d_{b}=d/(1+d)$ is a metric compatible with $d$ and that $d_{b}$ is complete exactly when $d$ is complete.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Study the increasing scalar function $t/(1+t)$ near zero.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Use its explicit inverse threshold to compare small-distance and Cauchy conditions.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH12-E012 — Solution 12
The function $\varphi(t)=t/(1+t)$ is increasing, vanishes only at zero, and satisfies $\varphi(a+b)\le \varphi(a)+\varphi(b)$; the last inequality follows after clearing positive denominators. Thus the triangle inequality transfers. Since $\varphi$ is continuous and strictly increasing with inverse $u/(1-u)$, centered balls refine one another, so the topologies agree. For every $\varepsilon<1$, $d_{b}(x,y)<\varepsilon$ iff $d(x,y)<\varepsilon/(1-\varepsilon)$. Therefore the two metrics have exactly the same Cauchy sequences and the same convergent sequences, proving equivalence of completeness.


</details>

### TOP-CH12-E013 — Exercise 13
For $0<\alpha\le 1$, prove that $d^\alpha$ is a compatible metric and has the same Cauchy sequences as $d$.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Use subadditivity of the power function for exponents at most one.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Write a power-metric ball as an ordinary metric ball with a changed radius.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH12-E013 — Solution 13
Concavity in this range gives $(a+b)^\alpha\le a^\alpha+b^\alpha$, so the triangle inequality for $d$ implies that for $d^\alpha$. The other metric axioms are immediate. A ball of radius $r$ for $d^\alpha$ is exactly a $d$-ball of radius $r^{1/\alpha}$. This proves compatibility and equivalence of the Cauchy conditions.


</details>

### TOP-CH12-E014 — Exercise 14
Suppose $g_{n}:X\to[0,1]$ separate points and generate the topology of $X$. Prove that $\rho(x,y)=\sum_{n=1}^{\infty}2^{-n}|g_{n}(x)-g_{n}(y)|$ is a compatible metric.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Each coordinate difference is a pseudometric.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Point separation repairs definiteness, and the generating-topology assumption identifies the pullback topology.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH12-E014 — Solution 14
Each summand is a pseudometric, and the bounded weighted sum satisfies symmetry and the triangle inequality. Point separation makes $\rho(x,y)>0$ when $x\ne y$. The map $g:X\to[0,1]^{\mathbb{N}}$ is injective, and the hypothesis that the functions generate the topology says exactly that $g$ is an embedding. Exercise 10 and pullback along $g$ now show that $\rho$ is compatible.


</details>

### TOP-CH12-E015 — Exercise 15
Construct a complete compatible metric on $(0,1)$ and prove completeness.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Transport a complete familiar metric through a homeomorphism.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Apply the chosen homeomorphism to a Cauchy sequence and pull its limit back.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH12-E015 — Solution 15
The function $h(x)=\log(x/(1-x))$ is a homeomorphism from $(0,1)$ onto $\mathbb{R}$. Define $\rho(x,y)=|h(x)-h(y)|$. Pullback along a homeomorphism makes $\rho$ compatible. If $(x_{n})$ is $\rho$-Cauchy, then $(h(x_{n}))$ is Cauchy in complete $\mathbb{R}$, so it converges to some $t$. Consequently $x_{n}$ converges in $\rho$ to $h^{-1}(t) \in (0,1)$. Thus $\rho$ is complete.


</details>

### TOP-CH12-E016 — Exercise 16
Show that the Euclidean metric on $(0,1)$ is incomplete, and explain why this does not contradict Exercise 15.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Approach a missing endpoint by an interior sequence.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Distinguish a property of that metric from the existence of another complete compatible metric.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH12-E016 — Solution 16
The sequence $1/(n+1)$ is Euclidean Cauchy but its only real limit is $0$, which is not in $(0,1)$. Hence that particular metric is incomplete. Exercise 15 supplies a different compatible metric. Completeness belongs to a metric, while complete metrizability asserts the existence of at least one complete compatible metric.


</details>

### TOP-CH12-E017 — Exercise 17
Use the Baire category theorem to prove that $\mathbb{Q}$ is not completely metrizable in its usual topology.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Every singleton in the rational line is closed with empty interior.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Compare the resulting countable decomposition with the Baire theorem proved in the new category chapter.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH12-E017 — Solution 17
The space $\mathbb{Q}$ has no isolated points, so each singleton is closed with empty interior and therefore nowhere dense in $\mathbb{Q}$. Because $\mathbb{Q}$ is countable, it is the union of countably many nowhere dense sets; it is meagre in itself. Every nonempty complete metric space is Baire, and being Baire is preserved by homeomorphism. Thus no complete metric can induce the usual topology on $\mathbb{Q}$.


</details>

### TOP-CH12-E018 — Exercise 18
Let $(X,d)$ be complete and $A=\cap G_{n}$, where every $G_{n}$ is open. Verify that the graph used in the $G_{\delta}$ construction is closed.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Suppose the ambient limit leaves one of the defining open sets.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Its distance to the corresponding complement forces a reciprocal graph coordinate to diverge.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH12-E018 — Solution 18
Omit every index with $G_n=X$, as in the construction. Write $\delta_{n}(a)=d(a,X\setminus G_{n})$ for the remaining indices and suppose graph points converge to $(x,t_{1},t_{2},...)$. Their first coordinates $a_{k}$ converge to $x$. If $x \notin G_{n}$, then $\delta_{n}(a_{k})\le d(a_{k},x)$ tends to zero, so $1/\delta_{n}(a_{k})$ tends to infinity. This contradicts convergence of the $n$th graph coordinate to the real number $t_{n}$. Hence $x \in G_{n}$ for every retained $n$, so $x \in A$. Continuity of each $1/\delta_{n}$ then gives $t_{n}=1/\delta_{n}(x)$, proving the limit lies on the graph.


</details>

### TOP-CH12-E019 — Exercise 19
Prove that every open or closed subspace of a completely metrizable space is completely metrizable.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

A closed subspace keeps ambient Cauchy limits.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

For an open subspace, use its $G_{\delta}$ description rather than assuming the restricted metric stays complete.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH12-E019 — Solution 19
Choose a complete compatible metric on the ambient space. A closed subspace is complete under its restriction. An open subset $U$ is a $G_{\delta}$, since $U=\bigcap_{n} U$; the $G_{\delta}$ theorem therefore gives a complete compatible metric on $U$. The restricted ambient metric on $U$ need not itself be complete.


</details>

### TOP-CH12-E020 — Exercise 20
Prove that in a second-countable space every locally finite family of nonempty open sets is countable. Explain how this relates the Urysohn and Nagata-Smirnov hypotheses.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Assign a nonempty basis member to each open family member.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Local finiteness forces each fixed basis member to have only finitely many assigned family labels.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH12-E020 — Solution 20
Let $B$ be a countable basis and $L$ a locally finite family of nonempty open sets. For each $U \in L$, choose a basis element $B(U) \subseteq U$. A fixed basis element $B$ can equal $B(U)$ for only finitely many $U$: choose $x \in B$; a neighborhood of $x$ meets only finitely many members of $L$, and every $U$ with $B(U)=B$ meets that neighborhood through $B$. Thus $L$ is a countable union, over basis elements, of finite fibers. In particular a countable basis is automatically sigma-locally finite by splitting it into singleton layers, so Nagata-Smirnov contains the $T_1$ regular second-countable case covered constructively by Urysohn.


</details>

## TOP-CH12-P001 — Investigation: a metrization and completeness audit

Choose three spaces from this list: an uncountable discrete space, the Sorgenfrey line, the line with two origins, $\mathbb{Q}$, $(0,1)$, and a countable product of real lines. For each chosen space, produce a dossier with five parts:

1. name the topology by a basis or subbasis;
2. test $T_1$, Hausdorffness, regularity, and first and second countability, proving every claim you use;
3. decide whether Urysohn or Nagata-Smirnov applies, clearly distinguishing a verified hypothesis from an appeal to a theorem;
4. when metrizable, display or construct a compatible metric and state which numerical properties depend on that choice;
5. decide complete metrizability by a complete metric, a $G_{\delta}$ realization, or a topological obstruction such as Baire category.

Include one deliberately invalid argument—such as inferring non-complete-metrizability from an incomplete familiar metric—and then repair it. Finish with a comparison table that uses the three separate columns “displayed metric complete,” “completely metrizable,” and “metrizable.”


<details data-euler-reveal="hint">
<summary>Hint 1 for TOP-CH12-P001</summary>

Choose the rational line, an open interval, and a countable product of real lines. All three are metrizable, but the rational example has a topological completeness obstruction.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2 for TOP-CH12-P001</summary>

For the product use a weighted bounded series metric. A Cauchy sequence is Cauchy in every coordinate, and coordinate limits converge for the series metric by controlling a finite head and a small tail.

</details>
<details data-euler-reveal="solution">
<summary>Full solution for TOP-CH12-P001: three selected spaces</summary>

### TOP-CH12-P001 — Worked completeness audit

Take the usual rational line, the usual interval $(0,1)$, and the product $\mathbb R^{\mathbb N}$. These are three choices from the unchanged investigation; the other choices remain available.

For $\mathbb Q$, the rational intersections with Euclidean intervals form a basis, and intervals with rational endpoints give a countable basis. The restricted Euclidean metric proves Hausdorffness, $T_1$, regularity, and first countability: metric balls separate points, and a ball of sufficiently small radius has closure inside a prescribed open neighborhood. Urysohn metrization therefore applies, although the displayed metric already proves metrizability. The usual metric is incomplete because rational approximations to $\sqrt2$ are Cauchy without a rational limit. More strongly, the space is not completely metrizable: it is a countable union of closed nonisolated singletons and hence meagre in itself, whereas a nonempty complete metric space is Baire.

For $(0,1)$, ordinary intervals restricted to the space are a basis and rational-endpoint restrictions give a countable basis. The usual metric gives the same four separation and local countability properties, so Urysohn again applies. The sequence $1/(n+1)$ shows incompleteness of this displayed metric. Nevertheless $h(x)=\log(x/(1-x))$ is a homeomorphism onto $\mathbb R$, and $|h(x)-h(y)|$ is a complete compatible metric. Complete metrizability is therefore true. The invalid argument “a sequence tends to a missing endpoint, so no compatible complete metric exists” has confused one metric with all compatible metrics. Pulling back the real metric repairs it.

For $\mathbb R^{\mathbb N}$, basic product opens restrict finitely many coordinates to real open intervals. Restricting those intervals to rational endpoints gives a countable basis, because there are countably many finite coordinate lists and countably many finite rational lists. Define
$$D(x,y)=\sum_{n\ge1}2^{-n}\min(1,|x_n-y_n|).$$
Each term satisfies the triangle inequality after truncation, their sum is a metric, and a finite-head/small-tail estimate gives the product topology. In detail, sufficiently small $D$-distance forces any specified finite collection of coordinate errors to be small. Conversely, choose a finite head with tail sum below half a prescribed error and restrict its coordinate errors so the head contributes less than the other half. This proves both topology containments.

The displayed product metric is complete. If $(x^{(k)})$ is $D$-Cauchy, then for each fixed n its nth coordinate is real Cauchy: use $D<2^{-n}\min(1,\varepsilon)$ to force coordinate error below $\varepsilon$ for $\varepsilon<1$. Let $x_n$ be its real limit. Given a positive error, choose a tail with sufficiently small weight and then use convergence of the finitely many head coordinates to control that head. Thus $x^{(k)}\to x$ in $D$. Metric structure supplies Hausdorffness, $T_1$, regularity, and first countability, and the countable basis supplies the remaining Urysohn hypothesis. Nagata-Smirnov is unnecessary for all three choices; using it would require checking its stated base hypothesis rather than simply naming the theorem.

| Space | Displayed metric complete | Completely metrizable | Metrizable |
|---|---|---|---|
| usual rational line | no | no | yes |
| usual open interval | no | yes | yes |
| countable real product with D | yes | yes | yes |

This table distinguishes a numerical property from two topological properties. A compatible change of metric may alter boundedness and Cauchy behavior without changing any open sets or any of the separation and countability conclusions.

</details>

## Sources

The original chapter, investigation and all legacy solutions are retained. The separating-function proof is supplied in [Urysohn, Tietze and Extension](urysohn-tietze-extension.md), and the Baire obstruction is proved in [Complete Metric Spaces and Baire Category](complete-metric-spaces-baire-category.md). The new subspace proof and worked examples are original exposition. Existing references remain in the maintained [References and Attribution Guide](references-and-attribution-guide.md).

## Chapter checkpoint

Metrizability is the existence of numerical distance coordinates compatible with the open sets. In the $T_1$ regular second-countable case, closure-controlled basis pairs yield Urysohn functions, those functions embed the space in a countable cube, and the cube's series metric pulls back to a compatible metric. Nagata-Smirnov replaces countability by sigma-local finiteness for the general metrizable boundary while retaining $T_1$ regularity. Complete metrizability is stricter and topological: $G_{\delta}$ subspaces of complete metric spaces have complete compatible metrics, while Baire category rules out examples such as $\mathbb{Q}$.

The ambient $G_\delta$ necessity proof now makes its completeness use explicit: a carefully chosen sequence is Cauchy for a complete metric on the subspace, and compatibility identifies its ambient limit. Weighted series require point separation, while topological compatibility alone does not preserve Cauchy behaviour.
