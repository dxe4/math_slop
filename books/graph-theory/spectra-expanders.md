
# Spectra and Expanders

## When a graph becomes an operator

A cut is a set of edges, while an eigenvector is a list of numbers. Spectral graph theory connects them by assigning a number to each vertex and measuring how much those numbers change across edges. A vector that is nearly constant on each side of a sparse cut has little edgewise variation. A large lower bound on every nonconstant vector's variation therefore rules out such cuts.

The main results here are algebraic: the Laplacian energy identity, the variational meaning of its second eigenvalue, a cut bound, the expander mixing lemma, and convergence of a lazy walk on a connected regular graph. We prove these statements. A deeper converse relating cuts to the normalised spectral gap is stated with a source and identified as cited.

Required preparation includes graphs, cuts, connectivity, and walks, together with real inner products, orthogonality, eigenvalues, and the spectral theorem for real symmetric matrices. See [Linear Algebra: Structure and Proofs](#/books/linear-algebra-structure-proofs) for that linear algebra. We use an orthonormal eigenbasis and Cauchy–Schwarz without reproving those linear-algebra theorems. All graphs below are finite, undirected, and simple unless a weighted variation is explicitly discussed. Order the vertices once so that vectors and matrices use matching coordinates.

## Adjacency and energy

**Definition 15.1 (Graph matrices).** For a graph on vertices $1,\ldots,n$, its adjacency matrix is $A$, where $A_{uv}=1$ when $uv$ is an edge and $A_{uv}=0$ otherwise. Let $D$ be the diagonal matrix of degrees. The combinatorial Laplacian is $L=D-A$.

Both $A$ and $L$ are real symmetric matrices. Their eigenvalues are therefore real, and each has an orthonormal eigenbasis. The diagonal of $A$ is zero because the graph has no loops. Changing the vertex order conjugates these matrices by a permutation matrix, preserving eigenvalues but changing coordinates.

**Theorem 15.2 (Laplacian energy and kernel).** For every $x\in\mathbb R^n$,

$$
x^{\mathsf T}Lx=\sum_{\{u,v\}\in E}(x_u-x_v)^2.
$$

The matrix $L$ is positive semidefinite. Its kernel consists exactly of the vectors constant on each connected component, so the multiplicity of eigenvalue zero equals the number of components.

*Proof.* The diagonal contribution is $\sum_u d(u)x_u^2$. Each edge $uv$ contributes $x_u^2+x_v^2$ to this sum. The adjacency term contributes $2x_ux_v$ per unordered edge. Subtraction gives the displayed squared difference edge by edge, proving nonnegativity.

If $Lx=0$, its energy is zero. Every summand is nonnegative, so $x_u=x_v$ on every edge, and equality propagates along paths. Thus $x$ is constant on each component. Conversely, if it is constant on each component, the coordinate $(Lx)_u=d(u)x_u-\sum_{v\sim u}x_v$ is zero at every vertex. A component indicator is constant on that component and zero elsewhere. These indicators are linearly independent and span the described kernel. Its dimension, and hence the zero-eigenvalue multiplicity, is the component count. ∎

The kernel includes an arbitrary value at an isolated vertex; that is a one-vertex component. Nonnegativity of one computed energy is only an example. The identity proves nonnegativity for every vector.

**Example 15.3 (Energy on a triangle).** On a triangle with vertex values $x=(0,1,3)^{\mathsf T}$, the three edge differences give energy $1+4+9=14$. Directly,

$$
L=\begin{pmatrix}2&-1&-1\\-1&2&-1\\-1&-1&2\end{pmatrix},
\qquad Lx=(-4,-1,5)^{\mathsf T},
$$

so $x^{\mathsf T}Lx=0(-4)+1(-1)+3(5)=14$. Adding the same constant to every coordinate leaves all edge differences unchanged and therefore leaves the energy unchanged. It does not leave the vector norm unchanged, which is why a variational quotient must specify its orthogonality condition.

For nonnegative symmetric edge weights, the same expansion gives the weighted energy $\sum_{\{u,v\}}w_{uv}(x_u-x_v)^2$, with weighted degrees in $D$. Negative weights would destroy the nonnegativity argument. We return to unweighted graphs for the remaining statements.

## The spectral gap and a cut bound

Order the Laplacian eigenvalues as $0=\mu_1\le\mu_2\le\cdots\le\mu_n$, assuming $n\ge2$. Let $\mathbf1$ denote the all-ones vector.

**Theorem 15.4 (Variational characterization).** For any graph with $n\ge2$,

$$
\mu_2=\min_{\substack{x\ne0\\x\perp\mathbf1}}
\frac{x^{\mathsf T}Lx}{x^{\mathsf T}x}.
$$

Consequently $\mu_2>0$ exactly when the graph is connected.

*Proof.* Choose an orthonormal eigenbasis with first vector $\mathbf1/\sqrt n$. Write an orthogonal vector as $x=\sum_{i=2}^n c_iq_i$. Then

$$
\frac{x^{\mathsf T}Lx}{x^{\mathsf T}x}
=\frac{\sum_{i=2}^n\mu_i c_i^2}{\sum_{i=2}^n c_i^2}\ge\mu_2.
$$

Equality holds for $x=q_2$. This remains true when zero has multiplicity greater than one: the eigenbasis can include the constant vector first and an orthogonal zero-eigenvector second. The kernel theorem says exactly that one zero eigenvalue occurs for a connected graph and at least two occur for a disconnected graph. ∎

The orthogonality removes the trivial constant direction. Without it, the minimum would always be zero and would reveal no connectivity information.

**Theorem 15.5 (Spectral cut bound).** For a vertex set $S$ of size $s$ with $0<s<n$, let $\partial S$ be the edges having exactly one endpoint in $S$. Then

$$
|\partial S|\ge\mu_2\,\frac{s(n-s)}n.
$$

In particular, for $s\le n/2$, we have $|\partial S|/s\ge\mu_2/2$.

*Proof.* Take $x=\mathbf1_S-(s/n)\mathbf1$. Its coordinate sum is zero. Each edge crossing the cut has coordinate difference of magnitude one, and all other edges have difference zero. Thus its energy is $|\partial S|$. Its squared norm is

$$
s(1-s/n)^2+(n-s)(s/n)^2=\frac{s(n-s)}n.
$$

The variational characterization gives $\mu_2\le n|\partial S|/[s(n-s)]$. Rearrangement proves the claim. If $s\le n/2$, the factor $(n-s)/n$ is at least one half. ∎

A small cut supplies an upper bound on $\mu_2$ by the same calculation. A large certified $\mu_2$ supplies a lower bound on every cut. These are two directions of use for one inequality; neither requires a search through all vectors.

**Example 15.6 (A bottleneck between dense pieces).** Join two disjoint triangles by one edge. Give all three vertices on the first triangle value $1$ and all three on the second value $-1$. The vector is orthogonal to $\mathbf1$, has squared norm $6$, and has energy $4$: only the joining edge contributes. Therefore $\mu_2\le4/6=2/3$. Equivalently, take the size-three cut with one crossing edge and apply Theorem 15.5. The dense triangles do not eliminate their one-edge bottleneck. We have proved an upper bound, not asserted that $2/3$ is the actual eigenvalue.

**Example 15.7 (An exact complete-graph spectrum).** In $K_4$, $A=J-I$ and $L=4I-J$, where $J$ has every entry one. The constant vector is an adjacency eigenvector of eigenvalue $3$ and a Laplacian eigenvector of eigenvalue zero. For every vector with coordinate sum zero, $Jx=0$, so $Ax=-x$ and $Lx=4x$. Thus the spectra are $3,-1,-1,-1$ for adjacency and $0,4,4,4$ for the Laplacian. The cut bound is exact: a size-$s$ set has $s(4-s)$ crossing edges, precisely $4s(4-s)/4$.

## Regular graphs and discrepancy

**Definition 15.8 (Regular spectrum).** In this section assume $n\ge2$. A graph is $d$-regular if every degree is $d$. Its adjacency matrix satisfies $A\mathbf1=d\mathbf1$ and $L=dI-A$. Write its adjacency eigenvalues as $d=\theta_1\ge\theta_2\ge\cdots\ge\theta_n$, choosing the first eigenvector to be constant. Put $\lambda=\max_{i\ge2}|\theta_i|$.

For a disconnected regular graph, $d$ can occur again among the remaining eigenvalues. Our definition then gives $\lambda=d$; it does not silently discard every copy of the top eigenvalue.

**Proposition 15.9 (Regular eigenvalue bounds).** Every adjacency eigenvalue of a $d$-regular graph lies in $[-d,d]$. Its Laplacian eigenvalues in the corresponding eigenbasis are $d-\theta_i$.

*Proof.* For every real vector $x$,

$$
|x^{\mathsf T}Ax|
=\left|2\sum_{\{u,v\}\in E}x_ux_v\right|
\le\sum_{\{u,v\}\in E}(x_u^2+x_v^2)
=d\|x\|_2^2.
$$

Apply this inequality to an eigenvector to obtain $|\theta|\le d$. The identity $L=dI-A$ gives the second assertion directly. ∎

**Theorem 15.10 (Expander mixing lemma).** For disjoint vertex sets $S,T$ in a $d$-regular graph on $n$ vertices,

$$
\left|e(S,T)-\frac{d|S||T|}{n}\right|
\le\lambda\sqrt{|S||T|}.
$$

Here $e(S,T)$ counts each edge between the disjoint sets once.

*Proof.* Put $s=|S|$, $t=|T|$, and decompose $\mathbf1_S=(s/n)\mathbf1+x$, $\mathbf1_T=(t/n)\mathbf1+y$, with $x,y\perp\mathbf1$. Since $A\mathbf1=d\mathbf1$, the mixed constant–orthogonal terms vanish, and

$$
e(S,T)=\mathbf1_S^{\mathsf T}A\mathbf1_T
=\frac{dst}n+x^{\mathsf T}Ay.
$$

The spectral theorem on $\mathbf1^\perp$ gives $\|Ay\|_2\le\lambda\|y\|_2$. Cauchy–Schwarz bounds the absolute remainder by $\lambda\|x\|_2\|y\|_2$. Since $\|x\|_2^2=s(1-s/n)\le s$ and similarly for $y$, the displayed result follows. ∎

The proof also gives the stronger bound $\lambda\sqrt{s(1-s/n)t(1-t/n)}$. The predicted term $dst/n$ describes uniform-looking edge distribution, but the graph and the inequality are deterministic. No claim about independent random edges is needed. Disjointness avoids the convention that an edge inside $S\cap T$ would be counted twice in the matrix product.

## Expansion and normalization

**Definition 15.11 (Edge expansion and an expander family).** For $n\ge2$, put

$$
h(G)=\min_{0<|S|\le n/2}\frac{|\partial S|}{|S|}.
$$

An edge-expander family has orders tending to infinity, a uniform upper bound on maximum degree, and a fixed positive lower bound on $h(G)$.

The cut bound proves that a uniform positive lower bound on $\mu_2$ gives a uniform expansion bound. Bounded degree is a separate requirement: complete graphs have excellent cut bounds but increasing degree, so the family of complete graphs is not a bounded-degree expander family under this definition. A single impressive graph is not an infinite family.

For a connected graph with no isolated vertices, another normalisation uses volume $\operatorname{vol}(S)=\sum_{v\in S}d(v)$ and conductance

$$
\Phi(G)=\min_{\varnothing\ne S\ne V}
\frac{|\partial S|}
{\min(\operatorname{vol}(S),\operatorname{vol}(V\setminus S))}.
$$

The normalized Laplacian is $\mathcal L=I-D^{-1/2}AD^{-1/2}$. Its constant direction in transformed coordinates is $D^{1/2}\mathbf1$, rather than $\mathbf1$. This distinction matters when degrees differ.

**Theorem 15.12 (Normalized Cheeger inequality; upper bound cited).** For a finite connected undirected graph with at least two vertices, if $\nu_2$ is the second smallest eigenvalue of $\mathcal L$ with the conventions above, then

$$
\frac{\nu_2}{2}\le\Phi(G)\le\sqrt{2\nu_2}.
$$

The upper inequality is cited, not proved here; see Fan Chung's *Spectral Graph Theory*, Chapter 2, identified in Sources. It is the deeper guarantee behind threshold sweeps of a low-eigenvalue eigenvector.

*Proof of the lower inequality.* Write $M=\operatorname{vol}(V)$ and choose a nonempty proper $S$ of volume $v\le M/2$. Put $z=\mathbf1_S-(v/M)\mathbf1$ and $y=D^{1/2}z$. Then $y$ is orthogonal to $D^{1/2}\mathbf1$, since $\sum_u d(u)z_u=v-(v/M)M=0$. Its squared norm is $v(M-v)/M$, and

$$
y^{\mathsf T}\mathcal Ly=z^{\mathsf T}Lz=|\partial S|.
$$

The energy identity under this substitution shows that the kernel of $\mathcal L$ is spanned by $D^{1/2}\mathbf1$ in a connected graph. The eigenbasis proof of Theorem 15.4 therefore applies with this vector in place of $\mathbf1$. It gives $\nu_2\le M|\partial S|/[v(M-v)]\le2|\partial S|/v$. Minimize over the smaller-volume side of every cut to obtain $\nu_2/2\le\Phi$. ∎

For a $d$-regular graph with $d>0$, $\mathcal L=L/d$ and $\Phi=h/d$. Isolated vertices were excluded because $D^{-1/2}$ would otherwise need an additional convention. Mixing normalised and unnormalized eigenvalues without the factor $d$ gives incorrect constants.

## Random walks and the two spectral obstructions

On a $d$-regular graph with $d>0$, let $P=A/d$ be the simple random-walk matrix. A step chooses a neighbour uniformly. For column probability vectors we may write $p_{t+1}=Pp_t$, because the matrix is symmetric. The uniform vector $u=\mathbf1/n$ is stationary.

A connected bipartite regular graph has the adjacency eigenvalue $-d$: give one part value $1$ and the other value $-1$. Every neighbour has the opposite value, so $Ax=-dx$. The corresponding walk eigenvalue is $-1$, producing an alternating component rather than decay. Starting on one side keeps all mass on alternating sides at successive times, preventing convergence to the uniform distribution.

**Theorem 15.13 (Lazy-walk contraction).** On a connected $d$-regular graph with $n\ge2$, the lazy walk $Q=(I+P)/2$ satisfies

$$
\|Q^tp-u\|_2\le
\left(1-\frac{\mu_2}{2d}\right)^t\|p-u\|_2
$$

for every initial probability vector $p$ and integer $t\ge0$, with a zeroth power of the contraction factor interpreted as one.

*Proof.* The eigenvectors are those of $A$, and the eigenvalues of $Q$ are $(1+\theta_i/d)/2$, all in $[0,1]$. Connectedness makes the eigenvalue one simple, by the Laplacian kernel theorem. On $\mathbf1^\perp$, the largest eigenvalue is $(1+\theta_2/d)/2=1-\mu_2/(2d)<1$. Expand $p-u$ in the orthonormal eigenbasis, raise each eigenvalue to power $t$, and sum the squared coefficients. This gives the asserted norm bound. ∎

The total variation distance is $\tfrac12\sum_v|p(v)-u(v)|$, at most $\sqrt n/2$ times the Euclidean distance by Cauchy–Schwarz. Thus the theorem gives an explicit convergence bound, with its dependence on graph order visible. At $t=0$, all matrix zeroth powers act as the identity, including when a nonconstant eigenvalue is zero.

In an irregular undirected graph with no isolates, stationary mass is instead $\pi(v)=d(v)/(2|E|)$. Indeed incoming stationary mass at $v$ is $\sum_{w\sim v}[d(w)/(2|E|)]/d(w)=d(v)/(2|E|)$. Uniform stationarity and the symmetric matrix $A/d$ cannot simply be retained. Directed chains need additional care: they need not be self-adjoint.

## Interpretation and computation

A matrix computation must specify adjacency or Laplacian, normalisation, vertex order, and weighting. A rounded eigenvalue near zero is not an exact component count. A graph search gives a direct exact component certificate, while numerical eigensolvers estimate real quantities with rounding error. Checking one energy identity or several cuts is useful arithmetic evidence, but is not a proof over all vectors or subsets.

A spectrum also need not determine the graph. Nonisomorphic graphs can be cospectral, and Exercise 15.10 gives an explicit adjacency example. The spectral object retains some invariants and loses other structure. A clustering derived from an eigenvector reflects the recorded graph and chosen operator, not a demonstrated causal division in the system being modelled.

For orientation beyond this chapter, the Alon–Boppana lower-bound phenomenon and Ramanujan constructions are cited topics in Chung's treatment of expanders, not results proved here. They constrain and achieve exceptional regular-graph spectra. Their proofs and constructions require further arguments; the elementary bounds above do not establish them. The counting and probabilistic construction questions connect with the book *Combinatorial Structures*.

## Exercises

### Exercise 15.1
<a id="spectra-expanders-ex-1"></a>

For a triangle and $x=(0,1,3)^{\mathsf T}$, derive the energy by both the edge formula and matrix multiplication. Explain why adding a constant vector changes neither answer.

<details>
<summary>Hint 1</summary>

Compute the three squared differences and then multiply $Lx$ with diagonal entries two and off-diagonal entries negative one.

</details>
<details>
<summary>Hint 2</summary>

Every row of $L$ sums to zero. The edge formula also depends only on differences.

</details>
<details>
<summary>Solution</summary>

The squared differences are $1,4,9$, summing to $14$. Matrix multiplication gives $Lx=(-4,-1,5)^{\mathsf T}$ and $x^{\mathsf T}Lx=-1+15=14$. For $x+c\mathbf1$, every difference across an edge equals the original difference. Equivalently $L\mathbf1=0$ and symmetry kills both cross terms in the quadratic form. Thus the energy remains $14$ for every real constant $c$.

</details>

### Exercise 15.2
<a id="spectra-expanders-ex-2"></a>

Compute both spectra of $K_4$ and verify the spectral cut bound for a set of two vertices.

<details>
<summary>Hint 1</summary>

Write $A=J-I$ and $L=4I-J$. Separate constant vectors from vectors of coordinate sum zero.

</details>
<details>
<summary>Hint 2</summary>

The latter subspace has dimension three. A two-vertex cut in $K_4$ has four crossing edges.

</details>
<details>
<summary>Solution</summary>

On the constant subspace $J$ acts as multiplication by four, so adjacency has eigenvalue three and the Laplacian has eigenvalue zero. On the three-dimensional orthogonal complement, $J$ vanishes, so the remaining eigenvalues are $-1$ for adjacency and $4$ for the Laplacian. The cut lower bound is $4\cdot2\cdot2/4=4$, exactly its actual crossing-edge count. Both the multiplicities and the normalisation matter in this calculation.

</details>

### Exercise 15.3
<a id="spectra-expanders-ex-3"></a>

A graph is the disjoint union of an edge, a triangle, and an isolated vertex. Give a basis for its Laplacian kernel and its zero-eigenvalue multiplicity.

<details>
<summary>Hint 1</summary>

The three components may be assigned three independent constant values.

</details>
<details>
<summary>Hint 2</summary>

Use one indicator vector for each component. Prove that every kernel vector is their linear combination.

</details>
<details>
<summary>Solution</summary>

The three component indicators form a basis. They are independent because their nonzero supports are disjoint. Every kernel vector is constant along edges and therefore along paths, so it has one constant on each component, including the isolate. It is the corresponding linear combination of those indicators. The kernel dimension, and zero-eigenvalue multiplicity, is exactly three. The isolate contributes a kernel direction rather than disappearing from the matrix.

</details>

### Exercise 15.4
<a id="spectra-expanders-ex-4"></a>

For two triangles joined by one edge, construct a vector proving $\mu_2\le2/3$. Explain why this does not compute the exact spectrum.

<details>
<summary>Hint 1</summary>

Give one triangle value one and the other value negative one.

</details>
<details>
<summary>Hint 2</summary>

Only the joining edge contributes to energy, while all six coordinates contribute to the norm.

</details>
<details>
<summary>Solution</summary>

The vector has coordinate sum zero, squared norm six, and energy four. Its Rayleigh quotient is $2/3$, so the minimum over all nonzero orthogonal vectors is no larger. We have supplied one admissible vector, not proved it minimizes the quotient or is an eigenvector. Thus $2/3$ is an upper bound on the second eigenvalue, not an asserted exact value or complete spectrum.

</details>

### Exercise 15.5
<a id="spectra-expanders-ex-5"></a>

Suppose a graph on twenty vertices has $\mu_2\ge6/5$. How many edges must leave any set of five vertices?

<details>
<summary>Hint 1</summary>

Use the full factor $s(n-s)/n$, rather than its weaker lower bound $s/2$.

</details>
<details>
<summary>Hint 2</summary>

The resulting real lower bound is $9/2$. An edge count is an integer.

</details>
<details>
<summary>Solution</summary>

The spectral cut bound gives $|\partial S|\ge(6/5)\cdot5\cdot15/20=9/2$. Therefore at least five edges leave every such set. Rounding must be upward, because an integer greater than or equal to $4.5$ cannot be four. The conclusion concerns every five-vertex subset, not merely one found by a particular partitioning procedure.

</details>

### Exercise 15.6
<a id="spectra-expanders-ex-6"></a>

Compute the adjacency and lazy-walk spectra of $C_4$. Explain why the simple walk has a periodic obstruction and the lazy walk does not.

<details>
<summary>Hint 1</summary>

Use vectors $(1,1,1,1)$, $(1,-1,1,-1)$, $(1,0,-1,0)$, and $(0,1,0,-1)$ in cyclic vertex order.

</details>
<details>
<summary>Hint 2</summary>

The graph is two-regular. Divide adjacency eigenvalues by two for the simple walk, then apply $\eta\mapsto(1+\eta)/2$.

</details>
<details>
<summary>Solution</summary>

The four independent vectors have adjacency eigenvalues $2,-2,0,0$. Hence the simple-walk eigenvalues are $1,-1,0,0$, and the lazy-walk eigenvalues are $1,0,1/2,1/2$. The eigenvalue $-1$ preserves an alternating component in the simple walk, matching the bipartition parity. Laziness changes it to zero and leaves every nonconstant eigenvalue strictly below one in magnitude, so the contraction theorem applies.

</details>

### Exercise 15.7
<a id="spectra-expanders-ex-7"></a>

Verify the stated expander mixing inequality for all disjoint sets in $C_4$, grouping cases by their sizes rather than listing labelled subsets.

<details>
<summary>Hint 1</summary>

Here $d=2$, $n=4$, and $\lambda=2$. Up to swapping the sets, the nonempty size pairs are $(1,1),(1,2),(1,3),(2,2)$.

</details>
<details>
<summary>Hint 2</summary>

For $(2,2)$ the crossing count is two or four. For $(1,2)$ it is one or two.

</details>
<details>
<summary>Solution</summary>

An empty set gives zero on both sides. For sizes $(1,1)$, the predicted count is $1/2$ and the actual count zero or one, giving error $1/2\le2$. For $(1,2)$ the prediction is one, with actual count one or two, so error at most $1\le2\sqrt2$. For $(1,3)$ the actual count is two and prediction $3/2$, so error $1/2\le2\sqrt3$. For $(2,2)$ the prediction is two and actual count two or four, so error at most two, bounded by four. These exhaust the size possibilities for disjoint subsets of four vertices.

</details>

### Exercise 15.8
<a id="spectra-expanders-ex-8"></a>

Show that the family of cycle graphs $C_n$, $n\ge3$, is not an edge-expander family despite its uniform degree bound.

<details>
<summary>Hint 1</summary>

Take a consecutive interval of $\lfloor n/2\rfloor$ vertices around the cycle.

</details>
<details>
<summary>Hint 2</summary>

Exactly two edges leave that interval. Compare their number with the interval size as $n$ grows.

</details>
<details>
<summary>Solution</summary>

For the consecutive set $S$ of size $\lfloor n/2\rfloor$, the boundary has two edges. Therefore $h(C_n)\le2/\lfloor n/2\rfloor$, which approaches zero. Although every degree is two and the orders grow, there is no fixed positive lower bound on expansion. A bounded degree alone does not guarantee expansion, just as strong expansion in dense complete graphs alone does not guarantee bounded degree.

</details>

### Exercise 15.9
<a id="spectra-expanders-ex-9"></a>

On a connected $d$-regular graph with $\mu_2/d\ge1/5$, give a Euclidean convergence bound for the lazy walk starting at one vertex and a resulting total variation bound.

<details>
<summary>Hint 1</summary>

The contraction factor is at most $1-\mu_2/(2d)$. A point mass minus uniform mass has squared norm $1-1/n$.

</details>
<details>
<summary>Hint 2</summary>

Convert the Euclidean bound using $\|x\|_1\le\sqrt n\|x\|_2$.

</details>
<details>
<summary>Solution</summary>

The contraction factor is at most $9/10$. For initial point mass $p$, $\|p-u\|_2^2=(1-1/n)^2+(n-1)/n^2=1-1/n$. Thus $\|Q^tp-u\|_2\le(9/10)^t\sqrt{1-1/n}$. Total variation is at most $\tfrac12\sqrt n(9/10)^t\sqrt{1-1/n}$. This is an upper bound; it need not equal the actual distance, and the trivial bound one can also be used if the displayed estimate is larger.

</details>

### Exercise 15.10
<a id="spectra-expanders-ex-10"></a>

Prove that the star $K_{1,4}$ and the disjoint union of $C_4$ with an isolated vertex have the same adjacency spectrum but are not isomorphic.

<details>
<summary>Hint 1</summary>

For the star, leaf-supported vectors whose coordinates sum to zero form a three-dimensional zero-eigenspace.

</details>
<details>
<summary>Hint 2</summary>

On the span of the centre indicator and half the sum of the four leaf indicators, adjacency has matrix $\begin{pmatrix}0&2\\2&0\end{pmatrix}$.

</details>
<details>
<summary>Solution</summary>

The described leaf subspace has adjacency eigenvalue zero with multiplicity three. On its orthogonal complement, the two-by-two matrix has eigenvalues $2,-2$. The star spectrum is therefore $2,-2,0,0,0$. Exercise 15.6 gives $2,-2,0,0$ for $C_4$, and an isolate adds one zero eigenvalue. The star is connected while the other graph is disconnected, so they are not isomorphic. This example concerns adjacency spectra of irregular graphs; it does not contradict the Laplacian component theorem.

</details>

## Sources

This chapter rewrites the mathematical starting points in Euler's existing `modules/textbooks/combinatorics/chapters/24-spectral-graph-theory.qmd`, retaining its distinctions between operators, numerical evidence, and structural conclusions. The seed remains unchanged. Its reference to Fan R. K. Chung, *Spectral Graph Theory*, American Mathematical Society, 1997, is retained: see the [author's book page](https://fanchung.ucsd.edu/research/outline.html) and [Chapter 1](https://fanchung.ucsd.edu/research/cbms.pdf). The normalized Cheeger upper inequality and the advanced expander topics are explicitly cited to that monograph rather than presented as proved here. All other graph results stated as proved above have their arguments in this chapter. References consulted 13 November 2026. Original exposition and exercises are licensed CC BY-SA 4.0; no external text or figures are reproduced.

## Summary

A real symmetric graph operator can be studied through an orthonormal eigenbasis. Laplacian energy is a sum of squared edge differences; its kernel records components, and its second eigenvalue controls every cut through a centred indicator vector. Regularity relates Laplacian and adjacency spectra, while the expander mixing lemma bounds edge discrepancy by the absolute nonconstant adjacency spectrum.

Expansion belongs to a family with explicit degree and size conditions. Normalized conductance uses volume, and its deeper Cheeger converse has been cited with conventions fixed. Lazy random walks remove bipartite periodicity and contract according to the spectral gap. Exact identities and proved norm bounds establish these conclusions; a numerical spectrum, selected cuts, or a clustering picture alone does not. The next chapter, [Graph Minors and Wagner](graph-minors-wagner.md), studies another way to simplify a graph while retaining structural obstructions.
