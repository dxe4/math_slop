
# Betti numbers and Euler characteristic

Counting vertices minus edges plus faces gives a surprisingly robust number. Homology explains why that alternating count can also be calculated from the dimensions of cycles that remain after fillings are accounted for. The equality follows from rank–nullity and a cancellation, rather than from an informal claim that every visible loop is a hole.

This **Years 2–3 (L3)** article assumes [Chain complexes and d squared](#/articles/homology-chain-complexes-d-squared) and finite-dimensional rank–nullity, reviewed in [Rank and nullity](../apps/unhurried/articles/ga-la-rank-nullity/index.html). We use finite simplicial chain complexes with rational coefficients and ordinary, unreduced homology. The longer [Computations with Cells chapter](#/books/algebraic-topology-chains-spaces/computations-with-cells) connects these calculations with other topological models.

## Dimensions of what survives

Let $C_k$ be the vector space of $k$-chains and $d_k:C_k\to C_{k-1}$ its boundary map. Write $c_k=\dim C_k$ and $r_k=\operatorname{rank}d_k$. For a simplicial complex, $c_k$ counts its $k$-simplices, not just the pieces that happen to be drawn with a heavy line.

The **$k$-th Betti number** is

$$\beta_k=\dim H_k=\dim(\ker d_k/\operatorname{im}d_{k+1}).$$

Because $d_kd_{k+1}=0$, the image in this quotient is a subspace of the kernel. Rank–nullity gives $\dim\ker d_k=c_k-r_k$, so

$$\beta_k=c_k-r_k-r_{k+1}.$$

This is a computation of surviving independent classes. The first rank removes chains that are not cycles; the second removes independent cycles that are already boundaries. Counting only kernel dimension would include cycles that become zero in homology.

The formula uses vector spaces over a field. Rational Betti numbers do not record the full integer homology groups, which can contain torsion. Nor should a coefficient field be changed silently during a calculation. The [coefficients chapter](#/books/algebraic-topology-chains-spaces/coefficients-and-kunneth) develops the wider dependence on coefficients.

## Why alternating counts agree

For a finite complex, define its **Euler characteristic** by

$$\chi=\sum_{k=0}^{N}(-1)^kc_k,$$

where all chain spaces above degree $N$ vanish. Thus a two-dimensional complex has vertices minus edges plus faces. Set $r_0=0$, since the ordinary degree-zero boundary is zero, and $r_{N+1}=0$.

Substitute the dimension formula into the alternating sum of Betti numbers:

$$\sum_{k=0}^{N}(-1)^k\beta_k=\sum_{k=0}^{N}(-1)^kc_k-\sum_{k=0}^{N}(-1)^kr_k-\sum_{k=0}^{N}(-1)^kr_{k+1}.$$

Each interior rank occurs twice with opposite signs after shifting the index in the last sum. The endpoint ranks are zero by the conventions just stated. Both rank sums therefore cancel, proving

$$\chi=\sum_{k=0}^{N}(-1)^k\beta_k.$$

Finiteness matters: we have rearranged finite sums. An infinite complex does not automatically have a defined alternating count, and this argument does not justify rearranging a divergent series of cell numbers.

## Worked example: fill one triangular loop

The boundary of a triangle has three vertices and three edges but no face. Its edge boundary has rank two: two edge differences are independent, and the third is their sum up to orientation. There is no degree-two boundary map. Consequently

$$\beta_0=3-2=1,\qquad \beta_1=3-2=1.$$

The count is $\chi=3-3=0$, agreeing with $\beta_0-\beta_1=1-1=0$.

Now add the triangular face and keep all its edges. Its boundary is a nonzero one-chain spanning the old one-dimensional cycle space, so $r_2=1$. The chain dimensions become $c_0=3$, $c_1=3$, $c_2=1$, while $r_1=2$ remains unchanged. Thus

$$\beta_0=1,\qquad\beta_1=3-2-1=0,\qquad\beta_2=1-1=0.$$

Now $\chi=3-3+1=1$, matching the alternating Betti sum. Filling the cycle removes a first-homology class; it does not remove the original loop as a chain. This is the dimension-level version of the quotient calculation in the preceding article.

## Why degree zero counts components

For a finite graph with $v$ vertices and $q$ connected components, the edge boundary image has dimension $v-q$. To see this, choose a reference vertex in each component. Along a path, the signed sum of edge boundaries gives the difference between any vertex and its reference vertex. These differences span all vertex combinations whose coefficient sum is zero separately in each component.

There are $v-q$ independent such differences: within a component of $v_i$ vertices, the $v_i-1$ differences against its reference vertex are independent. Conversely, every edge boundary has coefficient sum zero in its component, so the image contains nothing outside that subspace. Its rank is exactly $v-q$, and $\beta_0=v-(v-q)=q$.

For a graph with $e$ edges and no higher simplices, the same formula gives $\beta_1=e-v+q$. Higher-dimensional faces can kill first-homology classes through $d_2$, but do not change this degree-zero component count, because the edge boundary map is unchanged.

This also clarifies the unreduced convention: a nonempty connected complex has $\beta_0=1$, not zero. Reduced homology uses a modified convention and corresponding formulas; switching between them without warning would change the alternating count.

## One number loses information

Euler characteristic compresses a list of dimensions into one alternating sum. Different lists can give the same answer. Equality of Euler characteristics therefore does not establish equal homology, much less a homeomorphism or homotopy equivalence.

The converse direction is stronger: when justified homology comparison theorems identify two finite models, their Betti lists and hence their Euler characteristics agree. The topological invariance comes from those theorems, not from the assertion that a drawing “obviously has the same number of holes”. [Topological invariants](#/articles/topological-invariants) is a later companion about the role of such distinctions.

## Exercises

### Exercise 1
<a id="deep-dive-homology-betti-euler-characteristic-ex-1"></a>
Take the graph of a square with one diagonal, including all four vertices and five edges but no filled faces. Find $\beta_0$, $\beta_1$ and $\chi$. Then fill the two triangles separated by the diagonal, and recompute the numbers. Explain the new degree-two boundary rank.

<details data-euler-reveal="hint"><summary>Hint 1</summary>
The graph is connected. Each triangular face boundary contains an outer edge absent from the other face boundary.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
Use $\beta_k=c_k-r_k-r_{k+1}$ and check the alternating counts independently.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
The connected graph has $r_1=4-1=3$, so $\beta_0=1$ and $\beta_1=5-3=2$. Its Euler characteristic is $4-5=-1=1-2$. After filling both triangles, $c_2=2$. Their boundaries are independent because each has an outer edge with nonzero coefficient not occurring in the other; thus $r_2=2$. We obtain $\beta_1=5-3-2=0$ and $\beta_2=2-2=0$, while $\beta_0=1$. Now $\chi=4-5+2=1$, matching the new Betti sum.
</details>

### Exercise 2
<a id="deep-dive-homology-betti-euler-characteristic-ex-2"></a>
Compare a single isolated vertex with the disjoint union of an isolated vertex and a triangular loop without its face. Show that their Euler characteristics agree but their Betti numbers do not.

<details data-euler-reveal="hint"><summary>Hint 1</summary>
Count vertices, edges and connected components in the second complex.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
For a graph, use the component formula for $\beta_0$ and $\beta_1=e-v+q$.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
The single vertex has $\beta_0=1$, $\beta_1=0$ and $\chi=1$. The disjoint union has four vertices, three edges and two components. Hence $\beta_0=2$, $\beta_1=3-4+2=1$, and $\chi=4-3=1$. Its alternating Betti sum is $2-1=1$, agreeing with the first Euler characteristic while retaining different individual dimensions. The one-number invariant has discarded information.
</details>

## Continue into the book

Rank–nullity turns cycles modulo boundaries into Betti dimensions. Alternating the dimensions cancels the boundary ranks and yields Euler characteristic. Continue with [Computations with Cells](#/books/algebraic-topology-chains-spaces/computations-with-cells) and [Chain Complexes and Homology](#/books/algebraic-topology-chains-spaces/chain-complexes-and-homology) for justified models and larger examples.
