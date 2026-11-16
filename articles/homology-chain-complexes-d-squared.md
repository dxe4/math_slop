
# Chain complexes and d squared

The oriented edges around a triangular face form a closed loop: taking their endpoint boundary gives zero. The important feature is not this particular triangle. Every signed simplex boundary has zero boundary again. This identity makes it possible to distinguish cycles that are filled from cycles that are not.

This **Years 2–3 (L3)** article builds on [Simplicial complexes and the boundary map](#/articles/homology-simplicial-complexes-boundary-map) and linear algebra of kernels, images and quotient vector spaces. [Rank and nullity](../apps/unhurried/articles/ga-la-rank-nullity/index.html) provides a short preparation route. Coefficients are rational and the examples finite. The full [Chain Complexes and Homology chapter](#/books/algebraic-topology-chains-spaces/chain-complexes-and-homology) extends the framework beyond these finite models.

## Why the signed faces cancel

For an ordered simplex $[v_0,\ldots,v_k]$, the boundary deletes one vertex with coefficient $(-1)^i$. Taking another boundary deletes a second vertex. In degree at least two, fix original omitted vertices $i<j$ and compare the two possible deletion orders.

Deleting $i$ first moves the old vertex $j$ into position $j-1$, so this route has sign $(-1)^i(-1)^{j-1}=(-1)^{i+j-1}$. Deleting $j$ first leaves $i$ in position $i$, so the other route has sign $(-1)^j(-1)^i=(-1)^{i+j}$.

Both routes produce exactly the same ordered remaining face, but their signs are opposite. Every term in the double boundary belongs to exactly one such pair. The pairs cancel, proving $\partial_{k-1}\partial_k=0$ on each simplex and hence on every chain by linearity. In degree one, the next boundary is the stipulated zero map on vertices, so the conclusion holds there too.

This proof shows why the order of the vertices and the shifted index matter. Writing every face with a positive sign over the rationals would not give the required cancellation. The identity is a structural fact, not a numerical observation about one matrix.

## The abstract algebra behind a boundary map

A **chain complex** of rational vector spaces is a sequence of linear maps $d_k:C_k\to C_{k-1}$ satisfying $d_kd_{k+1}=0$ for every $k$. The notation $d^2=0$ abbreviates these degree-dependent equations; it does not mean that all the maps have the same source and target.

The $k$-cycles are $Z_k=\ker d_k$. The $k$-boundaries are $B_k=\operatorname{im}d_{k+1}$. The identity gives $B_k\subseteq Z_k$: if $b=d_{k+1}c$, then $d_kb=0$.

Therefore the quotient vector space

$$H_k=Z_k/B_k$$

is defined. Two cycles represent the same homology class exactly when their difference is a boundary. A boundary represents zero in homology, even if it is a nonzero chain. The quotient is not a division of numerical sizes; it identifies vectors differing by a specified subspace.

Calling a cycle a “hole” can be suggestive, but the definition is algebraic. The connection with topological holes and invariance under suitable changes of model requires further theorems. What we can compute directly here is whether a cycle lies in the image of the next map.

## Worked example: the loop and the filled triangle

Order three vertices as $a<b<c$ and use edge basis $[a,b],[b,c],[a,c]$. With vertex basis $[a],[b],[c]$, the edge boundary matrix is

$$D_1=\begin{pmatrix}-1&0&-1\\1&-1&0\\0&1&1\end{pmatrix}.$$

A chain with edge coordinates $(x,y,z)$ is a cycle precisely when

$$-x-z=0,\qquad x-y=0,\qquad y+z=0.$$

The solutions are $(x,y,z)=t(1,1,-1)$. Thus $Z_1$ is the one-dimensional span of $w=(1,1,-1)$.

For the triangular loop without its face, $C_2=0$, so $B_1=0$. Its first homology is therefore a one-dimensional rational vector space. A nonzero multiple of the loop remains a nonzero homology class because no two-chain exists to fill it.

For the filled triangle, the face boundary matrix $D_2$ has the single column $w$. Its image is the whole cycle space. Thus $H_1=Z_1/B_1=0$. The cycle did not disappear as a chain; it became zero after quotienting by available boundaries. Direct multiplication gives $D_1D_2=0$, consistent with the general signed-face proof.

## Matrices must satisfy an exact compatibility

For finite-dimensional spaces with chosen bases, the equation $d_kd_{k+1}=0$ becomes an exact matrix-product equation. It guarantees that solving a homogeneous boundary equation includes every vector produced by the next boundary matrix.

This is a prerequisite for forming homology. Arbitrary matrices of compatible sizes need not define a chain complex. If their product is nonzero, an alleged boundary may not even be a cycle. One cannot repair that by declaring a quotient anyway.

Changing basis changes the matrices but preserves their kernels and images up to the corresponding coordinate isomorphisms. Reversing one simplex orientation is a particularly simple basis change. Consistent coordinates are essential for a computation, while the resulting homology vector space does not depend on that arbitrary orientation choice.

The [cellular-computations chapter](#/books/algebraic-topology-chains-spaces/computations-with-cells) explains how smaller models can make these calculations practical. A finite matrix model should be justified for the space under study rather than inferred from a visually convenient drawing.

## Exercises

### Exercise 1
<a id="deep-dive-homology-chain-complexes-d-squared-ex-1"></a>
Let $C_2=\mathbb Q$, $C_1=\mathbb Q^2$ and $C_0=\mathbb Q$, with $d_2(t)=(t,t)$ and $d_1(x,y)=x-y$. Set all other spaces and maps to zero. Prove this is a chain complex and compute $H_1$.

<details data-euler-reveal="hint"><summary>Hint 1</summary>
Check the only possibly nonzero consecutive composite.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
Compare the solutions of $x-y=0$ with the vectors produced by $d_2$.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
The composite is $d_1d_2(t)=t-t=0$; all other consecutive composites include a zero map. Thus the chain condition holds. The cycle space in degree one is $\{(t,t):t\in\mathbb Q\}$, exactly the image of $d_2$. Quotienting this space by itself gives $H_1=0$, even though both the cycle and boundary spaces are nonzero.
</details>

### Exercise 2
<a id="deep-dive-homology-chain-complexes-d-squared-ex-2"></a>
Suppose instead $C_2=C_1=C_0=\mathbb Q$ and both $d_2$ and $d_1$ are the identity. Explain why these maps do not define a chain complex and why the proposed expression $\ker d_1/\operatorname{im}d_2$ is not a quotient vector space.

<details data-euler-reveal="hint"><summary>Hint 1</summary>
Evaluate the consecutive composite at one.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
A quotient by a subspace requires the denominator space to lie inside the numerator space.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
Their composite is the identity and sends one to one, so $d_1d_2\ne0$. Here $\ker d_1=\{0\}$ but $\operatorname{im}d_2=\mathbb Q$. The latter is not a subspace of the former, so the written quotient is undefined. Compatible dimensions of the matrices alone do not supply the chain-complex condition.
</details>

## Continue into the book

The double-boundary identity places boundaries inside cycles, making homology a legitimate quotient. A filled face changes that quotient by adding a boundary, even while the same loop chain remains. Continue with [Chain Complexes and Homology](#/books/algebraic-topology-chains-spaces/chain-complexes-and-homology) and [Betti numbers and Euler characteristic](#/articles/homology-betti-euler-characteristic). The earlier [chain-complexes reading](#/articles/chain-complexes-derived) is an optional later viewpoint with broader algebraic preparation.
