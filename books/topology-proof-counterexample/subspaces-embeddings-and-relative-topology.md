
# Subspaces, Embeddings, and Relative Topology

A subset does not carry a topology merely because it sits inside a topological space. It carries a topology after we decide which sets should count as open. The standard decision is the **subspace topology**, obtained by cutting ambient open sets down to the subset. This construction looks harmless, but it changes the meaning of interior, closure, and especially boundary. An endpoint that is a boundary point in the ambient line may become an interior point of a half-line. A set can be both open and closed in a dense subspace while its ambient closure crosses the cut that defined it. A continuous one-to-one map may place a set into a space without giving it the topology inherited by its image.

These are not technical nuisances. They identify which space a statement is about. This chapter develops a reliable calculus for relative topology, proves the basic embedding criteria, and uses boundary counterexamples to diagnose the most frequent false inferences.

Throughout, $X$ is a topological space, $Y\subseteq X$, and $A\subseteq Y$ unless stated otherwise. We write $\operatorname{cl}_{X}(A)$, $\operatorname{int}_{X}(A)$, and $\partial_{X} A$ when the ambient space must be explicit. Suppressing the subscript is safe only after the ambient space has been fixed.

## 1. The subspace topology is made of traces

The **subspace topology** on $Y$ is

$T_{Y}=\{Y\cap U:U\text{ open} \in X\}$.

The sets $Y\cap U$ are called the **traces** on $Y$ of ambient open sets. The topology axioms follow from distributivity:

- $\varnothing=Y\cap \varnothing$ and $Y=Y\cap X$;
- $\bigcup_{i}(Y\cap U_{i})=Y\cap \bigcup_{i} U_{i}$;
- $(Y\cap U_{1})\cap(Y\cap U_{2})=Y\cap(U_{1}\cap U_{2})$.

Only finite intersections are used in the third line. Thus the topology on $Y$ is not an extra structure chosen independently; it is determined by the inclusion $i:Y\to X$.

The word “relative” always points to this topology. A set can be open **relative to $Y$** without being open in $X$. For example, $[0,1)$ is open in $[0,\infty)$ because

$[0,1)=[0,\infty)\cap(-1,1)$,

although $[0,1)$ is not open in $\mathbb{R}$. Likewise, $\{0,1\}$ is open in the finite subspace $\{0,1,2\}$ of $\mathbb{R}$: it is the trace of $(-1/2,3/2)$.

There may be many ambient open sets with the same trace. If $Y=\{0\}$ in $\mathbb{R}$, every interval about zero has trace $\{0\}$. A proof of relative openness needs the existence of one ambient open witness, not a unique witness.

The inclusion map $i:Y\to X$ is continuous, since $i^{-1}(U)=Y\cap U$. More strongly, the subspace topology is the coarsest topology on the set $Y$ that makes the inclusion continuous. Indeed, any topology making $i$ continuous must contain every inverse image $Y\cap U$, and these inverse images already form the subspace topology.

This gives the fundamental mapping test. For any space $Z$ and function $f:Z\to Y$, where $Y$ has the subspace topology,

$f:Z\to Y\text{ is continuous}\iff i\circ f:Z\to X\text{ is continuous}$.

The forward direction uses composition. For the reverse direction, if $V=Y\cap U$ is relatively open, then $f^{-1}(V)=(i\circ f)^{-1}(U)$, which is open in $Z$. This test is often easier than chasing all relative open sets directly.

## 2. Bases, neighborhoods, and successive subspaces

If $B$ is a basis for $X$, then

$B|_{Y}=\{B\cap Y:B\in B\}$

is a basis for $Y$ after empty traces are discarded. Given a relatively open $V=Y\cap U$ and $y\in V$, choose $B\in B$ with $y\in B\subseteq U$; then $y\in B\cap Y\subseteq V$. In a metric space this says that the sets

$B_{X}(y,r)\cap Y$

form a neighborhood basis at $y$ in $Y$. They need not be ambient balls, nor even ambient open sets.

If $d$ is a metric on $X$, its restriction $d|_{Y\times Y}$ induces exactly the subspace topology. The open ball in the restricted metric is

$B_{Y}(y,r)=\{z\in Y:d(y,z)<r\}=Y\cap B_{X}(y,r)$.

Thus “metric subspace” and “topological subspace of a metric space” agree.

Subspaces are transitive. If $Z\subseteq Y\subseteq X$, give $Y$ the subspace topology from $X$ and $Z$ the subspace topology from $Y$. An open set in $Z$ has the form

$Z\cap(Y\cap U)=Z\cap U$

for some open $U\subseteq X$. This is exactly the topology induced directly from $X$. Consequently one can pass through intermediate subspaces without changing the final topology.

Neighborhood language also relativizes by intersection. A set $N\subseteq Y$ is a neighborhood of $y$ in $Y$ precisely when there is an ambient open $U$ with

$y\in Y\cap U\subseteq N$.

It is not necessary that $N$ be a neighborhood of $y$ in $X$. At the endpoint zero, $[0,1)$ is a neighborhood of zero in $[0,\infty)$ but not in $\mathbb{R}$.

## 3. Closed sets and closure commute with taking traces

The closed-set analogue is exact: $F\subseteq Y$ is closed in $Y$ if and only if

$F=Y\cap C$

for some closed $C\subseteq X$. To see this, take complements in $Y$:

$Y\setminus F=Y\cap U \iff F=Y\cap(X\setminus U)$.

Relative closedness therefore does not imply ambient closedness. The interval $(0,1]$ is closed in $(0,2)$ because $(0,1]=(0,2)\cap(-\infty,1]$, but it is not closed in $\mathbb{R}$. There are two useful conditions that do promote relative information:

- if $Y$ is open in $X$, every subset open in $Y$ is open in $X$;
- if $Y$ is closed in $X$, every subset closed in $Y$ is closed in $X$.

The asymmetry matters. If $Y$ is open, its relatively closed subsets need not be closed in $X$; if $Y$ is closed, its relatively open subsets need not be open in $X$.

Closure has an especially clean trace formula:

$\operatorname{cl}_{Y}(A)=Y\cap \operatorname{cl}_{X}(A)$.                                    $(3.1)$

For a neighborhood proof, $y\in \operatorname{cl}_{Y}(A)$ means every relative neighborhood $Y\cap U$ of $y$ meets $A$. Since $A\subseteq Y$, this is equivalent to every ambient neighborhood $U$ of $y$ meeting $A$, which says $y\in \operatorname{cl}_{X}(A)$. Restricting to $y\in Y$ yields (3.1).

A closed-set proof is also instructive. The set $Y\cap \operatorname{cl}_{X}(A)$ is relatively closed and contains $A$, so $\operatorname{cl}_{Y}(A)\subseteq Y\cap \operatorname{cl}_{X}(A)$. Conversely, if $F=Y\cap C$ is any relatively closed superset of $A$, it does not follow that $C$ contains all of $A$ merely by formal symbolism—it does, because $A\subseteq Y$ and $A\subseteq Y\cap C$. Hence $\operatorname{cl}_{X}(A)\subseteq C$, and after intersecting with $Y$ we get $Y\cap \operatorname{cl}_{X}(A)\subseteq F$.

The formula immediately explains density. A subset $A\subseteq Y$ is dense in $Y$ exactly when $Y\subseteq \operatorname{cl}_{X}(A)$. It need not be dense in $X$. The rationals in $(0,1)$ are dense in $(0,1)$ but their closure in $\mathbb{R}$ is $[0,1]$, not $\mathbb{R}$.

## 4. Relative interior has a different formula

It is tempting to imitate (3.1) and write $\operatorname{int}_{Y}(A)=Y\cap \operatorname{int}_{X}(A)$. This is false. Take $Y=[0,\infty)$ and $A=[0,1)$. Then $A$ is open in $Y$, so

$\operatorname{int}_{Y}(A)=A$,

while $\operatorname{int}_{\mathbb{R}}(A)=(0,1)$ and $Y\cap \operatorname{int}_{\mathbb{R}}(A)=(0,1)$. The point zero is a relative interior point because it has room inside $Y$, even though every ambient neighborhood crosses outside $Y$.

The correct description is

$\operatorname{int}_{Y}(A)=Y\cap \bigcup\{U\subseteq X:U\text{ open} \text{ and } Y\cap U\subseteq A\}$.               $(4.1)$

Equivalently, $y\in \operatorname{int}_{Y}(A)$ if and only if some ambient open neighborhood $U$ of $y$ satisfies $Y\cap U\subseteq A$. One always has

$Y\cap \operatorname{int}_{X}(A)\subseteq \operatorname{int}_{Y}(A)$,                                  $(4.2)$

because an ambient open subset of $A$ remains relatively open after tracing. Strict inclusion is common near the ambient boundary of $Y$.

There are conditions for equality. If $A\subseteq \operatorname{int}_{X}(Y)$, then every relative interior point of $A$ lies away from the ambient edge of $Y$; from $Y\cap U\subseteq A$, intersect $U$ with the ambient open set $\operatorname{int}_{X}(Y)$ to get an ambient neighborhood contained in $A$. Hence

$A\subseteq \operatorname{int}_{X}(Y) \implies \operatorname{int}_{Y}(A)=\operatorname{int}_{X}(A)$.

In particular, if $Y$ is open in $X$, then every $A\subseteq Y$ satisfies $\operatorname{int}_{Y}(A)=\operatorname{int}_{X}(A)$. Without openness, a relative interior can acquire points on $\partial_{X} Y$.

Interior can also be recovered from closure by complementation inside the correct universe:

$\operatorname{int}_{Y}(A)=Y\setminus \operatorname{cl}_{Y}(Y\setminus A)$.

The complement must be $Y\setminus A$, not $X\setminus A$. Forgetting which universe supplies the complement is a major source of boundary errors.

## 5. Boundary is relative to a universe

For $A\subseteq Y$, the boundary in $Y$ is

$\partial_{Y} A=\operatorname{cl}_{Y}(A)\cap \operatorname{cl}_{Y}(Y\setminus A)$

$=\operatorname{cl}_{Y}(A)\setminus\operatorname{int}_{Y}(A)$.

Using the closure trace formula twice gives the useful ambient expression

$\partial_{Y} A=Y\cap \operatorname{cl}_{X}(A)\cap \operatorname{cl}_{X}(Y\setminus A)$.                           $(5.1)$

This is generally not $Y\cap \partial_{X} A$, because the ambient complement of $A$ is larger:

$X\setminus A=(X\setminus Y)\cup(Y\setminus A)$.

Points of $Y$ may be approached by $X\setminus Y$ even when no points of $Y\setminus A$ approach them. Consequently

$\partial_{Y} A\subseteq Y\cap \partial_{X} A$,                                      $(5.2)$

but equality can fail. To prove (5.2), note that $\operatorname{cl}_{X}(Y\setminus A)\subseteq \operatorname{cl}_{X}(X\setminus A)$ and use (5.1).

The half-line gives the minimal counterexample. Let $Y=[0,\infty)$ and $A=[0,1)$. Then

$\operatorname{cl}_{Y}(A)=[0,1]$, $\operatorname{int}_{Y}(A)=[0,1)$, and $\partial_{Y} A=\{1\}$.

In $\mathbb{R}$, however,

$\operatorname{cl}_{\mathbb{R}}(A)=[0,1]$, $\operatorname{int}_{\mathbb{R}}(A)=(0,1)$, and $\partial_{\mathbb{R}} A=\{0,1\}$.

Zero belongs to the ambient boundary because negative points lie outside $A$ arbitrarily close to zero. It is not a relative boundary point because, once attention is restricted to $Y$, a small relative neighborhood of zero lies wholly in $A$.

An even sharper instance is $A=Y$. Every space is open and closed in itself, so $\partial_{Y} Y=\varnothing$. Yet $\partial_{X} Y$ may be large. The unit circle has empty boundary as a subspace of itself and boundary equal to the entire circle as a subset of $\mathbb{R}^{2}$.

Boundary can be characterized locally: $y\in \partial_{Y} A$ exactly when every ambient open neighborhood $U$ of $y$ has both

$U\cap Y\cap A\ne \varnothing$ and $U\cap(Y\setminus A)\ne \varnothing$.

This is the safest definition for proofs. It displays all three sets—the ambient neighborhood, the subspace, and the tested subset—so there is no silent change of universe.

## 6. Dense subspaces can create clopen cuts

Subspace topology may alter separation without creating any visible Euclidean gap. Let $Y=\mathbb{Q}\subseteq \mathbb{R}$ and choose an irrational number $\alpha$. Define

$A=\{q\in\mathbb{Q}:q<\alpha\}$.

Then

$A=\mathbb{Q}\cap(-\infty,\alpha)$

is open in $\mathbb{Q}$. It is also closed in $\mathbb{Q}$, since

$A=\mathbb{Q}\cap(-\infty,\alpha]$

and $(-\infty,\alpha]$ is closed in $\mathbb{R}$; equivalently, its complement is $\mathbb{Q}\cap(\alpha,\infty)$. Thus $A$ is nonempty, proper, and clopen in $\mathbb{Q}$. Its relative boundary is empty.

Ambiently, $\operatorname{cl}_{\mathbb{R}}(A)=(-\infty,\alpha]$, and $\alpha$ is the decisive boundary point. It disappears from the relative boundary only because $\alpha\notin\mathbb{Q}$. The cut demonstrates that a dense subspace of a connected space need not be connected. Density preserves closure information, not connectedness.

The same mechanism explains why $\mathbb{Q}$ is totally disconnected: for distinct rationals $p<q$, choose an irrational $\alpha$ between them. The clopen cut at $\alpha$ separates $p$ from $q$. No connected subset of $\mathbb{Q}$ can contain both, so every connected subset is a singleton.

There is a useful warning here. A set clopen in a subspace need not be the trace of one ambient set that is simultaneously open and closed. The set above is the trace of the open ray $(-\infty,\alpha)$ and also the trace of the closed ray $(-\infty,\alpha]$, but neither ray is clopen in $\mathbb{R}$. Relative open and relative closed witnesses may be different ambient sets.

## 7. Embeddings remember the topology on the image

Let $f:Z\to X$ be a function. It is a **topological embedding** if it is a homeomorphism from $Z$ onto the image $f(Z)$ equipped with the subspace topology from $X$. Thus an embedding must be

1. injective;
2. continuous;
3. inverse-continuous as a map $f(Z)\to Z$.

The third condition is independent of the first two. A continuous injection can give its image a topology strictly coarser than the topology on the domain.

For an injective continuous map, the following are equivalent:

- $f$ is an embedding;
- for every open $U\subseteq Z$, there is an open $V\subseteq X$ with $f(U)=f(Z)\cap V$;
- $f:Z\to f(Z)$ is an open map;
- $f:Z\to f(Z)$ is a closed map.

The open formulation is precisely continuity of the inverse: $(f^{-1})^{-1}(U)=f(U)$ must be relatively open in $f(Z)$. The closed formulation follows by taking complements within $Z$ and $f(Z)$.

The standard geometric failure uses the half-open interval. Define

$f:[0,2\pi)\to S^{1}$, $f(t)=(\cos t,\sin t)$.

This map is continuous and bijective onto $S^{1}$, hence injective as a map into $\mathbb{R}^{2}$. But it is not an embedding. The set $[0,\varepsilon)$ is open in $[0,2\pi)$ for small $\varepsilon>0$. Its image is a one-sided arc containing $(1,0)$, which is not relatively open in $S^{1}$: every circle neighborhood of $(1,0)$ includes points with angles close to $2\pi$ as well as angles close to zero. Equivalently, points $f(2\pi-1/n)$ converge to $f(0)$ in the circle while their inverse images do not converge to zero in $[0,2\pi)$.

The topology of the image, not the visual absence of self-intersections, decides whether an injection is an embedding.

## 8. Reliable embedding criteria

Several criteria make the inverse-continuity condition automatic.

**Compact-to-Hausdorff criterion.** If $Z$ is compact, $X$ is Hausdorff, and $f:Z\to X$ is continuous and injective, then $f$ is an embedding. A closed subset $C\subseteq Z$ is compact; its image $f(C)$ is compact; compact subsets of Hausdorff spaces are closed. Hence $f:Z\to f(Z)$ is closed and therefore an embedding.

Each material hypothesis has a role. Dropping compactness allows the half-open interval example. Dropping Hausdorffness allows a continuous bijection from a compact discrete two-point space onto an indiscrete two-point space; the inverse is not continuous.

**Open- or closed-map criterion.** A continuous injection that maps open sets to relatively open sets in its image is an embedding. The same holds with “closed.” One must say “relatively”: an embedded compact interval in $\mathbb{R}$ does not send its open subsets to open subsets of $\mathbb{R}$, only to sets open in the interval image.

**Graph criterion.** If $g:Z\to W$ is continuous, then

$\Gamma_{g}:Z\to Z\times W$, $\Gamma_{g}(z)=(z,g(z))$,

is an embedding. The first projection $\pi_{Z}$ restricted to the graph is a continuous inverse. This proof does not require compactness, Hausdorffness, or a closed graph. Hausdorffness of $W$ is relevant to whether the graph is closed, not to whether its parameterization is an embedding.

Embeddings compose. If $f:Z\to Y$ and $g:Y\to X$ are embeddings, then $g\circ f$ is an embedding: restriction of the homeomorphism $g:Y\to g(Y)$ carries the subspace $f(Z)$ homeomorphically onto $g(f(Z))$, and transitivity of subspace topology identifies the induced topologies.

Embeddings also restrict. If $f:Z\to X$ is an embedding and $A\subseteq Z$, then $f|_{A}:A\to X$ is an embedding when $A$ has its subspace topology. Again, transitivity is doing the work.

## 9. Open, closed, and dense embeddings

An embedding may be classified by how its image sits in the codomain:

- an **open embedding** has open image;
- a **closed embedding** has closed image;
- a **dense embedding** has dense image.

These adjectives are not mutually exclusive in degenerate cases, but none follows from “embedding.” The inclusion $(0,1)\to \mathbb{R}$ is an open embedding, $[0,1]\to \mathbb{R}$ is a closed embedding, and $\mathbb{Q}\to \mathbb{R}$ is a dense embedding whose image is neither open nor closed.

An open embedding transports ambient open sets particularly simply. If $f(Z)$ is open in $X$, every set open in $Z$ has image open in $X$, not merely relatively open. Dually, a closed embedding sends closed subsets of $Z$ to closed subsets of $X$.

Boundary detects the distinction. If an embedded image $E=f(Z)$ is open and nonempty but not closed, its ambient boundary may be nonempty even though $\partial_{E} E=\varnothing$. If $E$ is closed with empty ambient interior, then $\partial_{X} E=E$. For example, the diagonal

$\Delta=\{(x,x):x\in \mathbb{R}\}$

is a closed embedded copy of $\mathbb{R}$ in $\mathbb{R}^{2}$, has empty interior in $\mathbb{R}^{2}$, and therefore has ambient boundary $\Delta$; yet its boundary inside itself is empty.

The phrase “boundaryless” must therefore be interpreted carefully. A manifold without boundary can be embedded as a subset having a large topological boundary in an ambient Euclidean space. The circle has no manifold boundary but is all boundary as a subset of the plane. Manifold boundary and point-set boundary are different constructions.

## 10. Properties inherited by subspaces—and properties that are not

Some topological properties are **hereditary**, meaning every subspace inherits them. Hausdorffness is hereditary: if distinct $y_{1},y_{2}\in Y$ have disjoint ambient neighborhoods $U_{1},U_{2}$, their traces on $Y$ remain disjoint neighborhoods. The $T_{0}$ and $T_{1}$ axioms are hereditary for the same reason. First and second countability are hereditary: restrict local bases or a global basis to the subspace. Metrizability is hereditary by restriction of a metric.

Connectedness is not hereditary. The connected interval $[0,1]$ contains the disconnected subspace $\{0,1\}$. Compactness is not hereditary either: $(0,1)$ is a subspace of compact $[0,1]$ but is not compact. Compactness is inherited by closed subspaces, and connectedness is inherited by neither arbitrary closed nor arbitrary open subspaces.

Density is not transitive without care about ambient spaces, but there is a correct statement: if $A$ is dense in $Y$ and $Y$ is dense in $X$, then $A$ is dense in $X$. Indeed,

$Y\subseteq \operatorname{cl}_{X}(A)$

because every ambient neighborhood of a point of $Y$ cuts to a relative neighborhood meeting $A$; then $X=\operatorname{cl}_{X}(Y)\subseteq \operatorname{cl}_{X}(A)$.

Local properties can also change at a relative edge. The half-open interval $[0,1)$ is locally homeomorphic near zero to a half-interval, not to an open interval. As a subspace it remains locally compact and first-countable, but the shape of its neighborhood basis records the endpoint. Statements about “locally Euclidean” spaces must specify whether half-space charts are permitted.

## 11. A boundary-first proof protocol

When a subset, inclusion, or parameterization appears, the following protocol prevents most mistakes.

1. **Name the universe.** Write $\operatorname{cl}_{X}$, $\operatorname{int}_{Y}$, or $\partial_{Y}$ before calculating.
2. **Replace relative openness by a trace.** Write $V=Y\cap U$ with $U$ ambient open.
3. **Use closure traces freely.** For $A\subseteq Y$, use $\operatorname{cl}_{Y}(A)=Y\cap \operatorname{cl}_{X}(A)$.
4. **Do not trace interiors blindly.** Use the relative-neighborhood criterion (4.1).
5. **Expand boundary from both sides.** Test approach by $A$ and by $Y\setminus A$, not by $X\setminus A$ unless the ambient boundary is intended.
6. **For an injective map, test the inverse.** Find whether domain-open sets have relatively open images.
7. **Audit edge points.** Points of $Y\cap \partial_{X} Y$ are where ambient and relative interior or boundary most often disagree.

The protocol is short because the underlying idea is short: topology is always topology **on a specified set**. The rest is disciplined bookkeeping.

## Worked examples: the ambient space matters

### Worked example 1 — A boundary point becomes interior

Let $Y=[0,2]\subseteq\mathbb R$ and $A=[0,1)$. In the line, the interior of $A$ is $(0,1)$, its closure is $[0,1]$, and its boundary is $\{0,1\}$. In $Y$, the set $A=Y\cap(-1,1)$ is open, so its relative interior is all of $A$. Its relative closure is still $[0,1]$ by the closure trace formula. Its relative boundary is consequently $\{1\}$. Zero disappears from the boundary because its relative neighborhoods have no negative points. The distinction is a change of neighborhood tests, not a change of coordinates or a decision to ignore an endpoint.

### Worked example 2 — A graph is a copy of its parameter space

Consider $g:\mathbb R\to\mathbb R$, $g(t)=t^2$. The graph map $G(t)=(t,t^2)$ is continuous by the coordinate criterion and injective by its first coordinate. The projection $\pi_1$ restricted to the graph is continuous and satisfies $\pi_1G(t)=t$ and $G\pi_1(t,t^2)=(t,t^2)$. Thus it supplies a continuous inverse onto the image, proving an embedding. This proof does not need the graph to be closed, even though it happens to be closed here. An embedding identifies the topology on an image; a closed embedding additionally describes that image's position inside the ambient space.

### Worked example 3 — Density is relative as well

Let $A=\mathbb Q\cap(0,1)$ and $Y=(0,1)$. Density of the rationals gives $\operatorname{cl}_{\mathbb R}A=[0,1]$. Tracing onto $Y$ yields $\operatorname{cl}_Y A=Y$, so $A$ is dense in $Y$. It is not dense in the whole real line: the open interval $(2,3)$ misses it. The statement that a subset is dense is incomplete until its ambient space has been specified. By contrast, passing through a dense intermediate space is valid: if $A$ were dense in $Y$ and $Y$ dense in $X$, the closed set $\operatorname{cl}_X A$ would contain $Y$ and hence all of $X$.

## Exercises

### TOP-CH04-E001 — 1. Verifying the trace topology

Let $Y\subseteq X$. Prove directly that $\{Y\cap U:U\subseteq X\text{ open}\}$ is a topology on $Y$.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Use intersections with the whole subspace for its full set.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Trace commutes with unions and finite intersections.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

#### TOP-CH04-E001 — Solution

The traces of $\varnothing$ and $X$ are $\varnothing$ and $Y$. For any family of open sets $\{U_{i}\}$, distributivity gives $\bigcup_{i}(Y\cap U_{i})=Y\cap \bigcup_{i}U_{i}$, and the union on the right is open in $X$. For finitely many open sets, $\bigcap_{j=1}^n(Y\cap U_{j})=Y\cap \bigcap_{j=1}^nU_{j}$, and the finite intersection on the right is open in $X$. Thus the trace family contains the empty set and whole space and is closed under arbitrary unions and finite intersections, exactly the topology axioms.


</details>

### TOP-CH04-E002 — 2. Transitivity of subspace topology

Suppose $Z\subseteq Y\subseteq X$. Prove that the topology on $Z$ induced first from $X$ to $Y$ and then from $Y$ to $Z$ equals the topology induced directly from $X$.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Write an open subset of the intermediate subspace as a trace.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Intersecting that trace again with the smallest subspace changes nothing.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

#### TOP-CH04-E002 — Solution

If $W$ is open in $Z$ under the two-step construction, then $W=Z\cap V$ for some $V$ open in $Y$. Write $V=Y\cap U$ for an open $U\subseteq X$. Because $Z\subseteq Y$, $W=Z\cap Y\cap U=Z\cap U$, so $W$ is open under the direct construction. Conversely, if $W=Z\cap U$ with $U$ open in $X$, then $Y\cap U$ is open in $Y$ and $W=Z\cap(Y\cap U)$, so $W$ is open in the two-step construction. The two collections coincide.


</details>

### TOP-CH04-E003 — 3. Restricting a basis

Let $B$ be a basis for $X$. Prove that the nonempty sets $B\cap Y$, with $B\in B$, form a basis for the subspace $Y$.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Refine an ambient-open representative at each point.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Trace the ambient basis element onto the subspace.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

#### TOP-CH04-E003 — Solution

Every $y\in Y$ lies in some basis element $B$ of $X$, so it lies in the trace $B\cap Y$. If $y\in(B_{1}\cap Y)\cap(B_{2}\cap Y)$, the basis intersection axiom in $X$ gives $B_{3}\in B$ with $y\in B_{3}\subseteq B_{1}\cap B_{2}$. Hence $y\in B_{3}\cap Y\subseteq(B_{1}\cap Y)\cap(B_{2}\cap Y)$. Alternatively, if $V=Y\cap U$ is relatively open and $y\in V$, choose $B\in B$ with $y\in B\subseteq U$; then $y\in B\cap Y\subseteq V$. Either verification proves the claim.


</details>

### TOP-CH04-E004 — 4. Relative closed sets

Prove that $F\subseteq Y$ is closed in $Y$ if and only if $F=Y\cap C$ for some closed $C\subseteq X$. Give an example in which $F$ is closed in $Y$ but not in $X$.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Take the relative complement of a trace-open set.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

An interval closed in a nonclosed subspace need not be closed in the ambient line.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

#### TOP-CH04-E004 — Solution

If $F$ is closed in $Y$, then $Y\setminus F$ is relatively open, so $Y\setminus F=Y\cap U$ for some open $U\subseteq X$. Taking complements within $Y$ yields $F=Y\cap(X\setminus U)$, and $X\setminus U$ is closed. Conversely, if $F=Y\cap C$ with $C$ closed in $X$, then $Y\setminus F=Y\cap(X\setminus C)$, a relatively open set, so $F$ is relatively closed. For the example, take $X=\mathbb{R}$, $Y=(0,2)$, and $F=(0,1]$. Then $F=Y\cap(-\infty,1]$, so it is closed in $Y$, but zero is an ambient limit point not belonging to $F$, so $F$ is not closed in $\mathbb{R}$.


</details>

### TOP-CH04-E005 — 5. The closure trace formula

For $A\subseteq Y\subseteq X$, prove $\operatorname{cl}_{Y}(A)=Y\cap \operatorname{cl}_{X}(A)$ using neighborhoods.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Compare ambient neighborhoods with their traces.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Because the subset lies in the subspace, both neighborhood tests meet the same points.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

#### TOP-CH04-E005 — Solution

Let $y\in Y$. If $y\in \operatorname{cl}_{Y}(A)$, every relative neighborhood of $y$ meets $A$. For any ambient open neighborhood $U$ of $y$, its trace $Y\cap U$ is a relative neighborhood and therefore meets $A$; since $A\subseteq Y$, this says $U\cap A\ne \varnothing$. Thus $y\in \operatorname{cl}_{X}(A)$. Conversely, if $y\in Y\cap \operatorname{cl}_{X}(A)$ and $V$ is a relative neighborhood of $y$, choose ambient open $U$ with $y\in Y\cap U\subseteq V$. The ambient closure condition gives $U\cap A\ne \varnothing$; because $A\subseteq Y$, this intersection lies in $Y\cap U\subseteq V$. Hence every relative neighborhood meets $A$, so $y\in \operatorname{cl}_{Y}(A)$.


</details>

### TOP-CH04-E006 — 6. Why interior does not obey the same trace rule

Find $A\subseteq Y\subseteq \mathbb{R}$ for which $Y\cap \operatorname{int}_{\mathbb{R}}(A)$ is strictly smaller than $\operatorname{int}_{Y}(A)$, and prove the general inclusion $Y\cap \operatorname{int}_{X}(A)\subseteq \operatorname{int}_{Y}(A)$.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Take the whole subspace as the subset.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

A singleton subspace has nonempty relative interior despite empty ambient interior.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

#### TOP-CH04-E006 — Solution

Take $Y=[0,\infty)$ and $A=[0,1)$. Since $A=Y\cap(-1,1)$, it is open in $Y$, so $\operatorname{int}_{Y}(A)=A$. Ambiently $\operatorname{int}_{\mathbb{R}}(A)=(0,1)$, and hence $Y\cap \operatorname{int}_{\mathbb{R}}(A)=(0,1)$, which omits zero. In general, $\operatorname{int}_{X}(A)$ is ambient open and contained in $A$. Its trace $Y\cap \operatorname{int}_{X}(A)$ is therefore open in $Y$ and contained in $A$. Since $\operatorname{int}_{Y}(A)$ is the largest relatively open subset of $A$, the claimed inclusion follows.


</details>

### TOP-CH04-E007 — 7. The relative boundary formula

Prove that for $A\subseteq Y\subseteq X$,

$\partial_{Y} A=Y\cap \operatorname{cl}_{X}(A)\cap \operatorname{cl}_{X}(Y\setminus A)$,

and deduce $\partial_{Y} A\subseteq Y\cap \partial_{X} A$.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Use boundary as the intersection of two relative closures.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Compare the relative complement with the larger ambient complement.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

#### TOP-CH04-E007 — Solution

By definition, $\partial_{Y} A=\operatorname{cl}_{Y}(A)\cap \operatorname{cl}_{Y}(Y\setminus A)$. Applying the closure trace formula to both sets gives $(Y\cap \operatorname{cl}_{X}(A))\cap(Y\cap \operatorname{cl}_{X}(Y\setminus A))$, which simplifies to the displayed expression. Since $Y\setminus A\subseteq X\setminus A$, monotonicity of closure gives $\operatorname{cl}_{X}(Y\setminus A)\subseteq \operatorname{cl}_{X}(X\setminus A)$. Therefore $\partial_{Y} A$ is contained in $Y\cap \operatorname{cl}_{X}(A)\cap \operatorname{cl}_{X}(X\setminus A)=Y\cap \partial_{X} A$.


</details>

### TOP-CH04-E008 — 8. A half-line boundary audit

In $X=\mathbb{R}$, let $Y=[0,\infty)$ and $A=[0,1)$. Compute the interior, closure, and boundary of $A$ both in $Y$ and in $X$.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Pay special attention to zero.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

It has relative neighborhoods extending only rightward, although ambient neighborhoods extend both ways.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

#### TOP-CH04-E008 — Solution

In $Y$, the set $A=Y\cap(-1,1)$ is open, so $\operatorname{int}_{Y}(A)=[0,1)$. Its closure is $\operatorname{cl}_{Y}(A)=Y\cap \operatorname{cl}_{\mathbb{R}}(A)=[0,\infty)\cap[0,1]=[0,1]$. Hence $\partial_{Y} A=\operatorname{cl}_{Y}(A)\setminus\operatorname{int}_{Y}(A)=\{1\}$. In $\mathbb{R}$, $\operatorname{int}_{\mathbb{R}}(A)=(0,1)$ and $\operatorname{cl}_{\mathbb{R}}(A)=[0,1]$, so $\partial_{\mathbb{R}} A=\{0,1\}$. The discrepancy at zero occurs because negative points witness ambient complement near zero, while the relative complement $Y\setminus A=[1,\infty)$ does not approach zero.


</details>

### TOP-CH04-E009 — 9. An irrational clopen cut in the rationals

Let $\alpha\notin\mathbb{Q}$ and $A=\{q\in\mathbb{Q}:q<\alpha\}$. Prove that $A$ is clopen in $\mathbb{Q}$, compute $\partial_{\mathbb{Q}} A$, and compute $\operatorname{cl}_{\mathbb{R}}(A)$ and $\partial_{\mathbb{R}} A$ when $A$ is viewed as a subset of $\mathbb{R}$.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Cut the rational line using two opposite open rays.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

The missing irrational cut point changes ambient closure but is absent from the relative boundary.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

#### TOP-CH04-E009 — Solution

We have $A=\mathbb{Q}\cap(-\infty,\alpha)$, so $A$ is open in $\mathbb{Q}$. Its complement is $\mathbb{Q}\cap(\alpha,\infty)$, also relatively open, so $A$ is closed as well. A clopen set has empty relative boundary: $\partial_{\mathbb{Q}} A=\varnothing$. The rationals are dense in every real interval, so every real $x\le \alpha$ is a limit point or member of $A$, whereas no $x>\alpha$ lies in its closure. Thus $\operatorname{cl}_{\mathbb{R}}(A)=(-\infty,\alpha]$. The ambient interior of $A$ is empty because no interval consists only of rationals. Hence $\partial_{\mathbb{R}} A=\operatorname{cl}_{\mathbb{R}}(A)\setminus\operatorname{int}_{\mathbb{R}}(A)=(-\infty,\alpha]$. This large ambient boundary contrasts with the empty relative boundary.


</details>

### TOP-CH04-E010 — 10. Density through an ambient closure

For $A\subseteq Y\subseteq X$, prove that $A$ is dense in $Y$ if and only if $Y\subseteq \operatorname{cl}_{X}(A)$. Then prove that if $A$ is dense in $Y$ and $Y$ is dense in $X$, $A$ is dense in $X$.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Apply the closure trace formula first.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

For transitivity, use that a closed set containing the dense subset must contain each successive closure.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

#### TOP-CH04-E010 — Solution

By the closure trace formula, $\operatorname{cl}_{Y}(A)=Y\cap \operatorname{cl}_{X}(A)$. This equals $Y$ exactly when $Y\subseteq \operatorname{cl}_{X}(A)$, proving the first assertion. Under the two density assumptions, the first assertion gives $Y\subseteq \operatorname{cl}_{X}(A)$. Since $\operatorname{cl}_{X}(A)$ is a closed subset of $X$ containing $Y$, it also contains $\operatorname{cl}_{X}(Y)$. But density of $Y$ says $\operatorname{cl}_{X}(Y)=X$. Therefore $\operatorname{cl}_{X}(A)=X$, so $A$ is dense in $X$.


</details>

### TOP-CH04-E011 — 11. Three equivalent embedding tests

Let $f:Z\to X$ be continuous and injective. Prove that the following are equivalent: $f$ is an embedding; $f:Z\to f(Z)$ is open; $f:Z\to f(Z)$ is closed.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Regard the map as a continuous bijection onto its image.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

An open or closed bijection has a continuous inverse.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

#### TOP-CH04-E011 — Solution

Because $f$ is a continuous bijection from $Z$ to $f(Z)$, it is an embedding exactly when its inverse $g:f(Z)\to Z$ is continuous. The inverse is continuous exactly when for every open $U\subseteq Z$, the inverse image $g^{-1}(U)=f(U)$ is open in the subspace $f(Z)$. This is precisely the relative open-map condition. A bijection is open if and only if it is closed: for closed $C\subseteq Z$, $f(Z\setminus C)=f(Z)\setminus f(C)$, so relative openness of $f(Z\setminus C)$ is equivalent to relative closedness of $f(C)$. Thus all three conditions are equivalent.


</details>

### TOP-CH04-E012 — 12. A continuous injection that is not an embedding

Show that $f:[0,2\pi)\to \mathbb{R}^{2}$, defined by $f(t)=(\cos t,\sin t)$, is a continuous injection but not an embedding.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Let angles approach the omitted endpoint from below.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Their images approach the image of zero, but the parameters do not approach zero.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

#### TOP-CH04-E012 — Solution

Continuity follows from continuity of sine and cosine. If $f(s)=f(t)$, then the angles differ by an integer multiple of $2\pi$; with both in $[0,2\pi)$, this forces $s=t$, so $f$ is injective. Its image is $S^{1}$. For $0<\varepsilon<\pi$, the set $[0,\varepsilon)$ is open in the subspace $[0,2\pi)$, since it is the trace of $(-1,\varepsilon)$. Its image is a one-sided arc containing $(1,0)$. Every relative neighborhood of $(1,0)$ in $S^{1}$ contains circle points with angles in $(2\pi-\delta,2\pi)$ as well as in $[0,\delta)$, so no such neighborhood is contained in $f([0,\varepsilon))$. Thus the image is not relatively open, the inverse is not continuous, and $f$ is not an embedding.


</details>

### TOP-CH04-E013 — 13. Compact-to-Hausdorff embedding criterion

Let $Z$ be compact, $X$ Hausdorff, and $f:Z\to X$ continuous and injective. Prove that $f$ is an embedding.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Use compactness of closed subsets of the domain.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Their images are closed in the Hausdorff image space.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

#### TOP-CH04-E013 — Solution

Regard $f$ as a continuous bijection from $Z$ to $f(Z)$. If $C\subseteq Z$ is closed, then $C$ is compact because it is closed in a compact space. Its continuous image $f(C)$ is compact. A compact subset of a Hausdorff space is closed in that space, so $f(C)$ is closed in $X$ and hence closed in the subspace $f(Z)$. Therefore $f:Z\to f(Z)$ is a closed continuous bijection. Its inverse is continuous, by the closed-map embedding test, and $f$ is an embedding.


</details>

### TOP-CH04-E014 — 14. Graphs are embedded copies of their domains

If $g:Z\to W$ is continuous, prove that $\Gamma_{g}:Z\to Z\times W$, given by $\Gamma_{g}(z)=(z,g(z))$, is an embedding. Do not assume either space is Hausdorff.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

The first-coordinate projection recovers the input.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Both the graph map and this restricted projection are continuous.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

#### TOP-CH04-E014 — Solution

The map $\Gamma_{g}$ is continuous because its coordinate maps are the identity on $Z$ and $g$, both continuous. It is injective because equality of ordered pairs forces equality of first coordinates. Its image is the graph $G=\{(z,g(z)):z\in Z\}$. The restriction of the first projection, $\pi_{Z}|_{G}:G\to Z$, is continuous and satisfies $\pi_{Z}|_{G}\circ \Gamma_{g}=\operatorname{id}_{Z}$ and $\Gamma_{g}\circ \pi_{Z}|_{G}=\operatorname{id}_{G}$. Thus it is a continuous inverse to $\Gamma_{g}:Z\to G$, proving that $\Gamma_{g}$ is a homeomorphism onto its subspace image. No separation axiom is needed.


</details>

### TOP-CH04-E015 — 15. Composition of embeddings

Suppose $f:Z\to Y$ and $g:Y\to X$ are embeddings. Prove that $g\circ f:Z\to X$ is an embedding.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Compose the homeomorphisms onto the corresponding images.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Use transitivity of subspace topology to identify the final image topology.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

#### TOP-CH04-E015 — Solution

The map $f$ is a homeomorphism from $Z$ onto $f(Z)$ with the topology induced from $Y$. The map $g$ is a homeomorphism from $Y$ onto $g(Y)$ with the topology induced from $X$; restricting this homeomorphism to $f(Z)$ gives a homeomorphism from $f(Z)$ onto $g(f(Z))$, where the latter first has the topology induced from $g(Y)$. By transitivity of subspace topology, the topology on $g(f(Z))$ induced from $g(Y)$ is the same as that induced from $X$. The composite of these homeomorphisms is $g\circ f$, so it is a homeomorphism onto its image and hence an embedding.


</details>

### TOP-CH04-E016 — 16. Restricting an embedding

Let $f:Z\to X$ be an embedding and $A\subseteq Z$ have the subspace topology. Prove that $f|_{A}:A\to X$ is an embedding.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Restrict the homeomorphism onto its image.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Homeomorphisms carry subspace topology to subspace topology.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

#### TOP-CH04-E016 — Solution

Since $f:Z\to f(Z)$ is a homeomorphism, its restriction maps the subspace $A$ homeomorphically onto the subspace $f(A)$ of $f(Z)$: images and inverse images of traces correspond under a homeomorphism. The topology on $f(A)$ induced from $f(Z)$ agrees, by transitivity, with the topology induced directly from $X$. Thus $f|_{A}$ is a homeomorphism from $A$ onto $f(A)$ with its $X$-subspace topology, which is exactly the definition of an embedding.


</details>

### TOP-CH04-E017 — 17. Open and closed inclusions

Let $i:Y\to X$ be the inclusion. Prove that $i$ is always an embedding when $Y$ has the subspace topology. Show additionally that if $Y$ is open in $X$, every relatively open subset of $Y$ is open in $X$, and if $Y$ is closed in $X$, every relatively closed subset of $Y$ is closed in $X$.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

The inverse from the image of an inclusion is the same set map.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

For open or closed subspaces, combine the trace formula with the ambient condition.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

#### TOP-CH04-E017 — Solution

The inclusion is injective, its image is $Y$, and as a map $Y\to Y$ onto that image it is the identity, hence a homeomorphism. Therefore it is an embedding. If $Y$ is open and $V$ is open in $Y$, write $V=Y\cap U$ with $U$ open in $X$; the intersection of the two ambient open sets is open in $X$. If $Y$ is closed and $F$ is closed in $Y$, write $F=Y\cap C$ with $C$ closed in $X$; the intersection of the two ambient closed sets is closed in $X$.


</details>

### TOP-CH04-E018 — 18. The diagonal has two different boundaries

Let $\Delta=\{(x,x):x\in \mathbb{R}\}\subseteq \mathbb{R}^{2}$. Prove that $\Delta$ is an embedded copy of $\mathbb{R}$, that $\partial_{\Delta}\Delta=\varnothing$, and that $\partial_{\mathbb{R}^{2}}\Delta=\Delta$.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Use the graph map x maps to (x,x).

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

The entire diagonal has empty boundary in itself, while it is closed with empty interior in the plane.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

#### TOP-CH04-E018 — Solution

The map $h:\mathbb{R}\to \mathbb{R}^{2}$, $h(x)=(x,x)$, is the graph embedding of the continuous identity map, so it embeds $\mathbb{R}$ onto $\Delta$. Every space is both open and closed in itself, giving $\partial_{\Delta}\Delta=\varnothing$. In $\mathbb{R}^{2}$, the diagonal is closed because it is the zero set of the continuous map $(x,y)\mapsto x-y$. It has empty interior: every open ball centered at $(x,x)$ contains, for example, $(x,x+\varepsilon)$ for sufficiently small nonzero $\varepsilon$, which is not on the diagonal. Therefore $\partial_{\mathbb{R}^2}\Delta=\operatorname{cl}_{\mathbb{R}^2}(\Delta)\setminus\operatorname{int}_{\mathbb{R}^2}(\Delta)=\Delta\setminus\varnothing=\Delta$.


</details>

### TOP-CH04-E019 — 19. Hereditary and nonhereditary properties

Prove that Hausdorffness is hereditary to subspaces. Then give subspaces showing that connectedness and compactness are not hereditary.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Trace disjoint ambient neighborhoods for Hausdorffness.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Two points in an interval break connectedness; an open interval inside a compact interval breaks compactness.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

#### TOP-CH04-E019 — Solution

Suppose $X$ is Hausdorff and $Y\subseteq X$. For distinct $y_{1},y_{2}\in Y$, choose disjoint ambient open neighborhoods $U_{1},U_{2}$ in $X$. Their traces $Y\cap U_{1}$ and $Y\cap U_{2}$ are disjoint relative open neighborhoods, so $Y$ is Hausdorff. For connectedness, $[0,1]$ is connected but its subspace $\{0,1\}$ is disconnected, since both singletons are relatively open. For compactness, $[0,1]$ is compact but its subspace $(0,1)$ is not: the open cover $\{(1/n,1):n\ge 2\}$ of $(0,1)$ has no finite subcover, because any finite subfamily has a largest index $N$ and misses points in $(0,1/N]$.


</details>

### TOP-CH04-E020 — 20. A complete relative-topology dossier

#### TOP-CH04-P001 — Project contract: relative-topology dossier

In $X=\mathbb{R}$, let $Y=[0,2]$ and $A=[0,1)\cup \{2\}$. Compute $\operatorname{int}_{Y}(A)$, $\operatorname{cl}_{Y}(A)$, and $\partial_{Y} A$; compute $\operatorname{int}_{X}(A)$, $\operatorname{cl}_{X}(A)$, and $\partial_{X} A$; and identify exactly which points witness the difference between the two boundaries.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Compute traces of ambient neighborhoods at zero and at two.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Relative endpoints can become interior points even when ambient endpoints do not.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

#### TOP-CH04-E020 — Solution

Relative to $Y$, the interval $[0,1)$ is open because it is $Y\cap(-1,1)$, but $2$ is not a relative interior point of $A$: every relative neighborhood of $2$ contains points of $(1,2)$ outside $A$. Hence $\operatorname{int}_{Y}(A)=[0,1)$. The closure trace formula gives $\operatorname{cl}_{Y}(A)=[0,1]\cup\{2\}$, so $\partial_YA=\{1,2\}$. In $\mathbb{R}$, $\operatorname{int}_{\mathbb{R}}(A)=(0,1)$ and $\operatorname{cl}_{\mathbb{R}}(A)=[0,1]\cup\{2\}$, giving $\partial_{\mathbb{R}}A=\{0,1,2\}$. Only zero disappears from the relative boundary, because a sufficiently small relative neighborhood of zero lies in $[0,1)$. Both $1$ and $2$ remain boundary points in $Y$ and in $\mathbb{R}$.


</details>

## Sources and provenance

The existing mathematical text, exercise identifiers and complete solutions are retained. New examples and staged hints are original Euler prose under CC BY-SA 4.0. For a primary university course reference and the standard progression of point-set topology, see James Munkres, [MIT 18.901, Introduction to Topology](https://ocw.mit.edu/courses/18-901-introduction-to-topology-fall-2004/pages/lecture-notes/). Its course materials are separately licensed by MIT; this chapter does not reproduce their text.


## Closing perspective

Subspace topology is the formal language of “looking only inside.” Its closure formula is simple enough to memorize, but its interior and boundary force attention to the relative complement. Embeddings are the corresponding language for “sitting inside without changing topology”: continuity and injectivity place the points, while inverse continuity guarantees that the placement preserves their open sets.

The counterexamples in this chapter all arise from an edge that has been removed, identified, or made invisible. The half-line hides negative approach directions; the rational subspace removes an irrational cut point; the circle parameterization brings two ends together in the image; the diagonal is all ambient edge and no relative edge. When an assertion about a subset feels obvious from a picture, calculate at those edges first.
