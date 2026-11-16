
# Fundamental Group and Basepoints

## Paths and homotopy

Let $X$ be a topological space. A **path** in $X$ is a continuous map $\gamma:[0,1] \to X$. The points $\gamma(0)$ and $\gamma(1)$ are the **initial** and **terminal** points. A **loop** based at $x_0 \in X$ is a path with $\gamma(0)=\gamma(1)=x_0$.

Two paths $\gamma_0,\gamma_1:[0,1] \to X$ with the same endpoints are **path homotopic**, written $\gamma_0 \simeq_p \gamma_1$, if there exists a continuous map $H:[0,1] \times [0,1] \to X$ such that

$$H(s,0)=\gamma_0(s), \quad H(s,1)=\gamma_1(s), \quad H(0,t)=\gamma_0(0)=\gamma_1(0), \quad H(1,t)=\gamma_0(1)=\gamma_1(1).$$

Path homotopy is an equivalence relation. The equivalence class of $\gamma$ is denoted $[\gamma]$.

The **concatenation** of paths $\gamma * \eta$ is defined when $\gamma(1)=\eta(0)$ by

$$(\gamma * \eta)(s) = \begin{cases} \gamma(2s) & 0 \leq s \leq 1/2, \\ \eta(2s-1) & 1/2 \leq s \leq 1. \end{cases}$$

Concatenation is associative up to path homotopy. The constant path $c_{x_0}(s)=x_0$ serves as a two-sided identity, and the reverse path $\bar{\gamma}(s)=\gamma(1-s)$ serves as an inverse, again up to path homotopy.

## The fundamental group

For a based space $(X,x_0)$, the **fundamental group** $\pi_1(X,x_0)$ is the set of path homotopy classes of loops based at $x_0$, with group operation induced by concatenation. The group axioms follow from the observations above.

A **based map** $f:(X,x_0) \to (Y,y_0)$ induces a homomorphism

$$f_*:\pi_1(X,x_0) \to \pi_1(Y,y_0), \qquad f_*([\gamma])=[f \circ \gamma].$$

This is well-defined because composition preserves path homotopy. The assignment $f \mapsto f_*$ is functorial: $(g \circ f)_* = g_* \circ f_*$ and $(\operatorname{id}_X)_* = \operatorname{id}_{\pi_1(X,x_0)}$.

## The role of basepoints

In a path-connected space $X$, any two basepoints $x_0,x_1$ have isomorphic fundamental groups, but the isomorphism is not canonical. Choose a path $\alpha$ from $x_0$ to $x_1$. Define

$$\beta_\alpha:\pi_1(X,x_1) \to \pi_1(X,x_0), \qquad \beta_\alpha([\gamma])=[\alpha * \gamma * \bar{\alpha}].$$

This is an isomorphism. If $\alpha'$ is another path from $x_0$ to $x_1$, then $\alpha' \simeq_p \alpha * \delta$ for some loop $\delta$ based at $x_1$, and

$$\beta_{\alpha'}([\gamma]) = [\alpha * \delta * \gamma * \bar{\delta} * \bar{\alpha}] = \beta_\alpha([\delta * \gamma * \bar{\delta}]) = \beta_\alpha(\delta [\gamma] \delta^{-1}).$$

Thus changing the path conjugates the isomorphism by an element of $\pi_1(X,x_1)$. The fundamental group of a path-connected space without a chosen basepoint is determined only up to inner automorphism.

**Common error:** asserting that $\pi_1(X)$ is well-defined for unbased path-connected $X$. It is well-defined up to isomorphism, but not up to canonical isomorphism. When working with unbased maps, one must track how basepoints move.

## The circle

Let $S^1 = \{z \in \mathbb{C} : |z|=1\}$ with basepoint $1$. The covering map $p:\mathbb{R} \to S^1$, $p(t)=e^{2\pi i t}$, is the key computational tool.

**Path lifting property.** For any path $\gamma:[0,1] \to S^1$ and any $t_0 \in \mathbb{R}$ with $p(t_0)=\gamma(0)$, there exists a unique lift $\tilde{\gamma}:[0,1] \to \mathbb{R}$ with $\tilde{\gamma}(0)=t_0$ and $p \circ \tilde{\gamma}=\gamma$.

**Homotopy lifting property.** If $H:[0,1] \times [0,1] \to S^1$ is a homotopy and $\tilde{H}(0,0)$ is chosen with $p(\tilde{H}(0,0))=H(0,0)$, there exists a unique lift $\tilde{H}$ with $p \circ \tilde{H}=H$.

For a loop $\gamma$ based at $1$, lift to $\tilde{\gamma}$ starting at $0$. The endpoint $\tilde{\gamma}(1)$ is an integer $n \in \mathbb{Z}$ because $p(\tilde{\gamma}(1))=\gamma(1)=1$ and $p^{-1}(1)=\mathbb{Z}$. By the homotopy lifting property, this integer depends only on $[\gamma]$. Concatenation of loops corresponds to addition of endpoints, so the map $[\gamma] \mapsto \tilde{\gamma}(1)$ is a homomorphism. It is surjective because $t\mapsto nt$ projects to a loop with endpoint $n$. It is injective because a lift ending at $0$ is a based loop in the contractible space $\mathbb R$; projecting a based contraction shows that $\gamma$ is null-homotopic. Therefore

$$\pi_1(S^1,1) \cong \mathbb{Z}.$$

## Graphs and free groups

A **graph** is a 1-dimensional CW complex: vertices are 0-cells, edges are 1-cells attached at endpoints. A graph is **finite** if it has finitely many cells.

For a finite connected graph with $V$ vertices and $E$ edges, choose a spanning tree $T$. Since $T$ is a contractible subcomplex, the quotient map collapsing $T$ to a point is a homotopy equivalence, and the quotient is a wedge of $E-V+1$ circles. Therefore

$$\pi_1(X) \cong F_{E-V+1},$$

the free group on $E-V+1$ generators.

**Worked example 1 (A finite graph).** For a graph with $V=4$, $E=5$: the rank is $5-4+1=2$. Let us verify this formula is consistent with the Euler characteristic. A tree with $V$ vertices has $V-1$ edges, so $T$ has $V-1$ edges. The remaining $E-(V-1)=E-V+1$ edges become loops in the quotient. $\square$

With $c$ connected components, each component contributes independently. The first homology $H_1(X;\mathbb{Z})$ has rank $E-V+c$ and is the direct sum of the abelianizations of the components' fundamental groups. A based fundamental group sees only its chosen component. For a connected graph, $\pi_1(X)^{\mathrm{ab}} \cong H_1(X;\mathbb{Z}) \cong \mathbb{Z}^{E-V+1}$.

## Simply connected spaces

A space $X$ is **simply connected** if it is path-connected and $\pi_1(X,x_0)=0$ for some (hence every) basepoint $x_0$.

**Proposition 3.1.** If $X$ is convex in $\mathbb{R}^n$, then $X$ is simply connected.

**Proof.** For any loop $\gamma$ based at $x_0$, the straight-line homotopy $H(s,t)=(1-t)\gamma(s)+tx_0$ is a path homotopy to the constant loop. $\square$

Consequently, $\mathbb{R}^n$, $D^n$, and any tree are simply connected. The sphere $S^n$ is simply connected for $n \geq 2$; this follows from the Seifert--van Kampen theorem or from simplicial approximation.

## Common errors

**Error: computing $\pi_1$ of a disconnected space.** The fundamental group is defined for a based space, which requires choosing a basepoint in a single path component. Different components have unrelated fundamental groups. For a graph with $c$ components, one must pick one component and compute $\pi_1$ there; the other components contribute nothing to that group.

**Error: assuming $\pi_1$ commutes with products without checking basepoints.** For based spaces $(X,x_0)$ and $(Y,y_0)$, there is a natural isomorphism $\pi_1(X \times Y,(x_0,y_0)) \cong \pi_1(X,x_0) \times \pi_1(Y,y_0)$. The basepoint $(x_0,y_0)$ is essential; different basepoints in different components would give unrelated groups.

**Error: confusing free homotopy with based homotopy.** Two loops may be freely homotopic (homotopic without fixing basepoints) while representing different elements of $\pi_1(X,x_0)$. In an abelian fundamental group, free homotopy classes correspond to conjugacy classes, which are singletons. In a nonabelian group, conjugacy classes can be large.

## Worked example 2: the torus

The torus $T^2=S^1 \times S^1$ has fundamental group

$$\pi_1(T^2) \cong \pi_1(S^1) \times \pi_1(S^1) \cong \mathbb{Z} \times \mathbb{Z} = \mathbb{Z}^2.$$

This is abelian. Geometrically, the two generators are meridional and longitudinal loops. Every loop on the torus is homotopic to a product $a^m b^n$ for unique integers $m,n$.

The projective plane $\mathbb{RP}^2$ has $\pi_1(\mathbb{RP}^2) \cong \mathbb{Z}/2\mathbb{Z}$. This is computed in the next chapter using van Kampen's theorem. The distinction between $T^2$ and $\mathbb{RP}^2$ is already visible in $\pi_1$: one is torsion-free, the other has torsion.

## Result 3.1: the group axioms with actual homotopies

The preceding [homotopy chapter](homotopy-loops-and-deformation.md) established the reparametrization formulas used here. It is useful to spell out why those formulas prove a group theorem rather than merely suggest one. Before taking equivalence classes, a path and the same path with a waiting interval are different functions. After taking classes they agree. Associativity belongs to the quotient set, so there is no requirement that the two raw concatenation functions be equal.

For three composable paths, introduce a common path that spends one third of its parameter interval on each path. Both parenthesized concatenations are this common path composed with continuous piecewise-linear changes of speed that preserve zero and one. Interpolate each change of speed with the identity on the parameter interval. The resulting homotopies fix both endpoints. Removing waiting intervals gives the unit law. For inversion, traverse a shorter and shorter initial piece of a path and return along exactly that piece: if $q(t)=2t$ for $t\le1/2$ and $q(t)=2-2t$ otherwise, the formula $\gamma((1-s)q(t))$ contracts $\gamma*\bar\gamma$ relative to endpoints. Applying this to the reversed path supplies the other inverse law.

Finally two endpoint-relative homotopies of composable paths paste in the path coordinate, because their values along the joining edge are the same fixed endpoint. Therefore multiplication is independent of representative. These statements prove all group axioms for the set of based path classes. They do not require Hausdorffness, local path connectivity or compactness of the space; compactness of the parameter interval will enter separately in lifting and subdivision arguments.

## Result 3.2: change of basepoint and moving maps

**Result.** For a path $\alpha:x_0\to x_1$, the displayed map $\beta_\alpha:\pi_1(X,x_1)\to\pi_1(X,x_0)$ is an isomorphism. If $f_t:X\to Y$ is a homotopy and $\lambda(t)=f_t(x_0)$, then, for a based loop class $u$ in $X$,

$$\beta_\lambda((f_1)_*(u))=(f_0)_*(u).$$

*Proof.* In a product $\beta_\alpha(u)\beta_\alpha(v)$, the middle path $\bar\alpha*\alpha$ cancels relative endpoints, leaving $\alpha*(u*v)*\bar\alpha$. Thus $\beta_\alpha$ is a homomorphism. Composing with the map for $\bar\alpha$ inserts canceling paths on both sides of a loop, so these maps are inverse. For the homotopy formula, map the parameter square by $(s,t)\mapsto f_t(\gamma(s))$. Its boundary, read from the lower-left corner, is $f_0\gamma*\lambda*\overline{f_1\gamma}*\bar\lambda$. It extends over a disk and hence is null-homotopic, by the disk-filling result in the previous chapter. Rearranging the resulting group equation gives the asserted formula. ∎

If a homotopy equivalence is unbased, choose basepoints and transport along the homotopy tracks before asserting that its induced group map is an isomorphism. Both composites become inner automorphisms after the appropriate transport, which are invertible. A homomorphism whose composites with a suitable second homomorphism are invertible is itself invertible: one composite supplies injectivity and the other supplies surjectivity. This proves homotopy invariance without an unstated assumption that all homotopies fix the chosen point.

A connected space need not be path connected. The closed topologist's sine curve is connected but has no path joining its oscillating part to every point on its limiting vertical segment. Consequently connectedness alone cannot provide the path $\alpha$ needed above. The theorem is stated for basepoints in the same path component, which is exactly the hypothesis its formula uses.

## Result 3.3: products, with no hidden local hypotheses

**Result.** For arbitrary based spaces the coordinate projections induce

$$\pi_1(X\times Y,(x_0,y_0))\longrightarrow\pi_1(X,x_0)\times\pi_1(Y,y_0)$$

as a natural group isomorphism.

*Proof.* A path into a product is continuous exactly when both coordinate paths are continuous. A based loop therefore determines a pair of based loops. A homotopy into the product is also exactly a pair of coordinate homotopies, and the fixed-basepoint conditions are coordinatewise. Thus two product loops have the same class if and only if their coordinate classes agree, giving injectivity. Any pair of loops gives a product loop, giving surjectivity. Concatenation is coordinatewise, proving the homomorphism assertion. Composing with a pair of based maps commutes with taking coordinates, proving naturality. ∎

The theorem applies to all loops, including loops with highly irregular parametrizations. There is no differentiability assumption. For a torus, the two winding numbers determine the loop class because of this product theorem, not because a drawn loop looks like a rectangular path.

## Worked example 3: a map of tori as an integer matrix

Define $f:T^2\to T^2$ by $f(z,w)=(z^2w,z w^{-1})$ and use basepoint $(1,1)$. A loop of coordinate windings $(m,n)$ is taken to a loop of windings $(2m+n,m-n)$. This follows by lifting its two coordinates: products add lifted winding and inversion negates it. Thus

$$f_*\binom mn=\begin{pmatrix}2&1\\1&-1\end{pmatrix}\binom mn.$$

The determinant is negative three. The homomorphism is injective: the two equations $2m+n=0$ and $m-n=0$ imply $3m=0$, hence $m=n=0$. It is not surjective, since solving $2m+n=1$ and $m-n=0$ would require $m=1/3$. Therefore $f$ cannot be a homotopy equivalence. An induced map between two copies of the same abstract group need not be an isomorphism. The obstruction concerns this map, not merely the topology of its domain and codomain.

## A direct justification of the graph computation

For a finite connected graph choose an orientation on every edge and a spanning tree $T$, and fix a vertex $v_0$. In a finite tree there is a unique embedded edge path between any two vertices. Give every edge length one. Moving each point along its unique path toward $v_0$ contracts the tree continuously; on each of its finitely many edges the formula is linear in the remaining path length. Thus the chosen tree is contractible.

To justify the familiar reduction to words, cover a finite graph by small open vertex stars and open middle intervals of edges. Each member is a tree with a unique arc between two of its points. Subdivide the parameter interval of a path so that each piece lies in one member. Inside that member replace the piece by the unique arc with the same endpoints. This replacement is a relative-endpoint homotopy: contract the loop made by the old path and the reverse arc inside that tree, or use its explicit tree contraction together with the endpoint-track formula. The finitely many homotopies paste. Hence every loop is represented by a finite edge word after small initial and terminal arcs are combined.

The non-tree oriented edges supply letters. To a based edge loop assign the word obtained by ignoring tree edges and canceling adjacent inverse letters. Each surviving letter corresponds to the based path that goes from $v_0$ through $T$ to the initial vertex of the edge, crosses it, and returns through $T$. There are exactly $E-(V-1)$ such letters. These loops generate, but to conclude freeness one must also rule out hidden relations.

For that purpose construct the graph whose vertices are reduced words in the letters and whose oriented edges connect a word $w$ to the reduction of $wa$ for each generator $a$. It maps to the one-vertex wedge of circles by sending an edge to its labeled circle. Vertex stars map homeomorphically, so this is a covering. The graph has no reduced closed edge path: following labels from the empty word finishes at their reduced product, and a nonempty reduced word cannot finish at the empty word. Consequently it is a tree. A null-homotopy of a loop in the wedge lifts to this covering by the lifting theorem proved later. Its endpoint cannot change during the homotopy, so a nonempty reduced word is not null-homotopic. This proves that the wedge group is the free group on the specified letters.

The collapse of the original spanning tree is a homotopy equivalence because a contractible CW subcomplex can be collapsed using the homotopy-extension property, proved in the CW chapter. Alternatively the same labeled-tree construction can be made over the original graph, with the tree paths inserted before each labeled edge. Both methods give the stated free group. The proof dependencies are explicit: a count of edges supplies the rank; lifting or homotopy extension supplies the absence of additional relations. No claim is being made that every quotient of a space preserves its fundamental group.

## Practice exercises

### Exercise 2.1
<a id="fundamental-group-and-basepoints-ex-1"></a>

Prove that $\pi_1(X \times Y,(x_0,y_0)) \cong \pi_1(X,x_0) \times \pi_1(Y,y_0)$.

<details><summary>Hint 1</summary>

Project a product loop to each coordinate.

</details>
<details><summary>Hint 2</summary>

A pair of coordinate homotopies combines to a homotopy in the product.

</details>
<details><summary>Full solution</summary>

**Solution.** A loop in $X \times Y$ based at $(x_0,y_0)$ is a map $\gamma=(\gamma_X,\gamma_Y):[0,1] \to X \times Y$ with $\gamma(0)=\gamma(1)=(x_0,y_0)$. This is equivalent to a pair of loops $\gamma_X$ in $X$ and $\gamma_Y$ in $Y$. Concatenation and homotopy are computed componentwise, so $[\gamma] \mapsto ([\gamma_X],[\gamma_Y])$ is an isomorphism. $\square$

</details>

### Exercise 2.2
<a id="fundamental-group-and-basepoints-ex-2"></a>

Compute $\pi_1$ of a figure-eight space $S^1 \vee S^1$.

<details><summary>Hint 1</summary>

View the space as a graph with one vertex.

</details>
<details><summary>Hint 2</summary>

The two independent edges give two noncommuting letters.

</details>
<details><summary>Full solution</summary>

**Solution.** The figure-eight is a graph with one vertex and two edges, so $V=1$, $E=2$, and $\pi_1(S^1 \vee S^1) \cong F_2$, the free group on two generators. Alternatively, apply van Kampen's theorem with $U$ and $V$ neighborhoods of each circle overlapping in a contractible region around the wedge point. $\square$

</details>

### Exercise 2.3
<a id="fundamental-group-and-basepoints-ex-3"></a>

Show that if $X$ is simply connected and $f:S^1 \to X$ is any map, then $f$ extends to a map $D^2 \to X$.

<details><summary>Hint 1</summary>

Interpret the map as a based loop at its chosen image point.

</details>
<details><summary>Hint 2</summary>

Collapse the final circle of a null-homotopy cylinder to a point.

</details>
<details><summary>Full solution</summary>

**Solution.** The map $f$ represents an element $[f] \in \pi_1(X)$. Since $X$ is simply connected, $[f]=0$, so $f$ is homotopic to a constant map. The homotopy $H:S^1 \times [0,1] \to X$ with $H(-,0)=f$ and $H(-,1)=\mathrm{const}$ descends to a map $D^2 \cong (S^1 \times [0,1])/(S^1 \times \{1\}) \to X$. $\square$

</details>

### Exercise 2.4
<a id="fundamental-group-and-basepoints-ex-4"></a>

Let $\alpha$ and $\beta$ be two paths from $x_0$ to $x_1$ in $X$. Show that $\beta_\alpha = \beta_\beta$ (as maps $\pi_1(X,x_1) \to \pi_1(X,x_0)$) if and only if $[\alpha * \bar{\beta}]$ lies in the center of $\pi_1(X,x_0)$.

<details><summary>Hint 1</summary>

Compare the two conjugation formulas.

</details>
<details><summary>Hint 2</summary>

Use surjectivity of the change-of-basepoint isomorphism.

</details>
<details><summary>Full solution</summary>

**Solution.** Put $c=[\alpha*\bar\beta]\in\pi_1(X,x_0)$. Since $\alpha\simeq_p(c*\beta)$, for every $[\gamma]\in\pi_1(X,x_1)$,

$$\beta_\alpha([\gamma])=c\,\beta_\beta([\gamma])\,c^{-1}.$$

The map $\beta_\beta$ is surjective, so $\beta_\alpha=\beta_\beta$ exactly when $c$ commutes with every element of $\pi_1(X,x_0)$, that is, when $[\alpha*\bar\beta]$ is central. $\square$

</details>

## Companion explorations

- [Loops, words and the torus](../../apps/lectures/loops-and-words.html) — compare the finite model with the hypotheses of the chapter.

A finite drawing or computation illustrates a chosen model; it does not establish a theorem for every continuous map.


### Exercise 2.5
<a id="fundamental-group-and-basepoints-ex-5"></a>

Compute the induced homomorphism of $z\mapsto z^{-4}$ on the circle group.

<details><summary>Hint 1</summary>

Use the standard loop of winding one.

</details>
<details><summary>Hint 2</summary>

Follow its image using a real lift.

</details>
<details><summary>Full solution</summary>

The image of $t\mapsto\exp(2\pi it)$ has lift $-4t$ starting at zero, so its endpoint is negative four. The induced homomorphism is multiplication by $-4$. It is injective but not surjective, so the power map is not a homotopy equivalence.

</details>

### Exercise 2.6
<a id="fundamental-group-and-basepoints-ex-6"></a>

Give a connected space for which arbitrary basepoints cannot be compared by a path.

<details><summary>Hint 1</summary>

Recall a standard connected counterexample from point-set topology.

</details>
<details><summary>Hint 2</summary>

Connectedness and path connectedness are different properties.

</details>
<details><summary>Full solution</summary>

The closed topologist's sine curve is connected but not path connected. Choose one point on its oscillating graph and another on the limiting vertical segment. There is no path joining these points, so the basepoint-change construction has no input path and cannot be applied.

</details>

### Exercise 2.7
<a id="fundamental-group-and-basepoints-ex-7"></a>

For a finite graph with two connected components and totals $V=7$, $E=8$, compute the rank of first homology. Does this determine either based fundamental group?

<details><summary>Hint 1</summary>

Use the component-corrected formula.

</details>
<details><summary>Hint 2</summary>

The total rank can be divided differently between the two components.

</details>
<details><summary>Full solution</summary>

The total rank is $E-V+2=3$. It is the sum of the free ranks of the two components. Without knowing how edges and vertices are allocated, either component could have different rank; for example the ranks could be zero and three or one and two. A chosen based fundamental group requires that additional component information.

</details>

### Exercise 2.8
<a id="fundamental-group-and-basepoints-ex-8"></a>

Prove that a map from a path-connected space to a discrete space is constant.

<details><summary>Hint 1</summary>

Compose with a path between two points.

</details>
<details><summary>Hint 2</summary>

A continuous image of the interval in a discrete space has one point.

</details>
<details><summary>Full solution</summary>

For any $x,y$, choose a path from $x$ to $y$. Its image in the discrete target is connected, and a connected subset of a discrete space has at most one point. Therefore the values at $x$ and $y$ agree. Path connectedness is sufficient, and ordinary connectedness would also suffice by the same image argument.

</details>

### Exercise 2.9
<a id="fundamental-group-and-basepoints-ex-9"></a>

Show that a based loop represents the identity if and only if it extends to the disk.

<details><summary>Hint 1</summary>

Use the disk-filling result from the homotopy chapter.

</details>
<details><summary>Hint 2</summary>

Convert a free contraction into a based statement by its basepoint track.

</details>
<details><summary>Full solution</summary>

A based null-homotopy descends to a disk filling. A disk filling gives a free null-homotopy by radial contraction. Its moving-basepoint formula says that the original class is conjugate to the identity, hence is itself the identity. Thus no hidden fixed-basepoint assumption is needed for the reverse direction.

</details>

### Exercise 2.10
<a id="fundamental-group-and-basepoints-ex-10"></a>

If the fundamental group is abelian, show that the basepoint-change map is independent of the chosen path between two fixed points.

<details><summary>Hint 1</summary>

Compare two choices by a loop.

</details>
<details><summary>Hint 2</summary>

Conjugation in an abelian group is the identity.

</details>
<details><summary>Full solution</summary>

The two transport maps differ by an inner automorphism, as proved above. In an abelian group every such automorphism is trivial. Therefore the maps agree. This does not choose an identification with an external group such as $\mathbb Z$; an orientation can still be needed for that separate choice.

</details>

## Sources

The original chapter's computations and four exercises are retained, with added proof details and support. Compare Allen Hatcher, [*Algebraic Topology*, Sections 1.1 and 1.3](https://pi.math.cornell.edu/~hatcher/AT/ATchapters.html), for fundamental groups, graphs and lifting, and J. P. May, [*A Concise Course in Algebraic Topology*, Chapters 1 and 4](https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf), for based conventions and graph calculations. The new prose and exercises are original.

## Summary

Endpoint-relative homotopy makes based loop classes into a group. Continuous based maps act functorially; paths transport basepoints, with a change of path recorded by conjugation. Products are computed coordinatewise, the circle group is infinite cyclic by winding, and finite connected graphs give free groups whose ranks require both an edge count and a justified topological reduction. The next chapter proves [van Kampen's theorem](van-kampen-as-a-pushout.md), the tool for controlling relations introduced by gluing.
