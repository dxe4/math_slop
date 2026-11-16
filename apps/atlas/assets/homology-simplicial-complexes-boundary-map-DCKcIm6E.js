var e=`---
id: deep-dive-homology-simplicial-complexes-boundary-map
title: "Simplicial complexes and the boundary map"
license: CC BY-SA 4.0
---

# Simplicial complexes and the boundary map

Three vertices joined by three edges can describe a triangular loop. Adding the filled triangular face changes the space even though the visible edge drawing is unchanged. A simplicial complex records exactly which pieces are present, and a boundary map records how their faces fit together with signs.

This **Years 2–3 (L3)** orientation assumes finite sets and linear combinations of basis vectors. [Introduction to Proof](/books/introduction-to-proof/) supplies the set language, and [Coordinates depend on a basis](/articles/ga-la-basis/) reviews bases. We use rational coefficients throughout and finite complexes only. The longer [Chain Complexes and Homology chapter](/books/algebraic-topology-chains-spaces/chain-complexes-and-homology/) develops the connection to topological spaces; this article introduces the finite bookkeeping without assuming that connection theorem.

## A complex must contain the faces of its pieces

A finite **abstract simplicial complex** is a finite collection $K$ of nonempty subsets of a vertex set, with the following closure rule: whenever a set belongs to $K$, each of its nonempty subsets belongs to $K$ too. A subset with $k+1$ vertices is a $k$-simplex. Thus vertices have dimension zero, edges dimension one, and triangular faces dimension two.

For vertices $a,b,c$, a filled triangle contains seven simplices: the three singleton vertices, the three two-vertex edges, and the three-vertex face. Its boundary loop contains the first six but not the three-vertex face. Both collections satisfy the closure rule. A face cannot appear without its edges, but three edges can appear without their common face.

An abstract simplex is specified by its vertices, not by how a picture happens to shade it. A geometric realisation gives these pieces their usual simplex shapes and glues common faces. Identifying its algebraic homology with the relevant topological invariant is a theorem in the full book, rather than something proved by drawing one complex.

## Orientation adds signs to the pieces

Choose a total order on the vertices. For $a<b$, write $[a,b]$ for the oriented edge pointing from $a$ to $b$. Reversing orientation negates it: $[b,a]=-[a,b]$. A vertex has no direction choice. In higher dimensions, permuting an ordered simplex changes its sign according to whether the permutation is even or odd.

The vector space $C_k(K;\\mathbb Q)$ has one basis vector for each increasing ordering of a $k$-simplex. A **chain** is a rational linear combination of these basis vectors. Coefficients keep track of multiplicities and orientation; a negative edge coefficient is not a negative physical length.

For example, $2[a,b]-[a,c]$ is a one-chain when both edges are present. It records two copies of one oriented edge and one copy with the opposite sign on the other. The chain is a formal algebraic object, not simply the union of the geometric edge sets.

## Delete one vertex at a time

The boundary of an edge is its endpoint minus its starting point:

$$\\partial_1[a,b]=[b]-[a].$$

Extend this rule linearly to edge chains. For a higher simplex, delete one vertex at a time with alternating signs:

$$\\partial_k[v_0,\\ldots,v_k]=\\sum_{i=0}^{k}(-1)^i[v_0,\\ldots,\\widehat v_i,\\ldots,v_k].$$

The hat means that vertex is omitted. All resulting faces belong to the complex by its defining closure rule. Set $\\partial_0=0$: we use ordinary, unreduced chains, so no empty-face generator is introduced.

For a triangle with $a<b<c$, the formula gives

$$\\partial_2[a,b,c]=[b,c]-[a,c]+[a,b].$$

Reading the negative middle term as $[c,a]$ shows an oriented trip around the triangle: go from $a$ to $b$, then $b$ to $c$, then $c$ back to $a$. The signs encode a coherent traversal, not an arbitrary alternating decoration.

## Worked example: one face and its edge boundary

Let $K$ be the filled triangle above, and let $t=[a,b,c]$. Its boundary is the one-chain $z=[a,b]+[b,c]-[a,c]$. Applying the edge boundary gives

$$\\partial_1z=([b]-[a])+([c]-[b])-([c]-[a])=0.$$

Every vertex contribution cancels. Nevertheless $z$ is not the zero one-chain: its three edge coefficients are $1,1,-1$. A zero boundary does not mean that the original chain had no pieces.

Now remove the triangular face, leaving the boundary-loop complex. The same one-chain $z$ still exists and has zero boundary. But it can no longer be written as the boundary of a two-chain inside this complex, because there are no two-simplices and hence $C_2=0$. In the filled triangle, $z$ is a boundary; in the loop, it is not.

That distinction is the opening of homology. A closed algebraic chain may be present in both complexes, while the availability of a filling distinguishes them. The [next article](/articles/homology-chain-complexes-d-squared/) turns this example into cycles modulo boundaries.

## Three cautions about the word boundary

First, chain boundary is not the same operation as taking the topological boundary of a subset in an ambient space. An edge chain has signed endpoint coefficients; that information is absent from an ordinary set of endpoints.

Second, reversing a generator's orientation changes its coordinate sign, but does not alter the underlying complex. Consistent orientation changes replace bases and corresponding matrix entries; an invariant should not depend on such arbitrary basis choices.

Third, coefficients matter. Our calculations use $\\mathbb Q$. Over the field with two elements, signs coincide because $-1=1$ and cancellation uses $1+1=0$. Over the integers, further information such as torsion can occur. The full coefficient theory is a later step, not something recoverable from every rational dimension count.

## Exercises

### Exercise 1
<a id="deep-dive-homology-simplicial-complexes-boundary-map-ex-1"></a>
A proposed complex contains the vertices $a,b,c$, edges $\\{a,b\\}$ and $\\{b,c\\}$, and face $\\{a,b,c\\}$. Is it a simplicial complex? Give the smallest addition that repairs it.

<details data-euler-reveal="hint"><summary>Hint 1</summary>
Inspect all the nonempty subsets of the proposed two-dimensional face.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
The existing vertices and two edges account for most, but not all, proper faces.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
It is not a complex because the face $\\{a,b,c\\}$ requires its edge $\\{a,c\\}$, which is absent. Add exactly that edge. Its singleton faces are already present, and the larger face then has all seven required nonempty subsets represented. No other simplex is forced.
</details>

### Exercise 2
<a id="deep-dive-homology-simplicial-complexes-boundary-map-ex-2"></a>
Compute the boundary of $3[a,b]-2[a,c]+[b,c]$. Show also that the sum of vertex coefficients in the boundary of any edge chain is zero.

<details data-euler-reveal="hint"><summary>Hint 1</summary>
Apply the endpoint-minus-starting-point rule to each edge separately.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
Each individual oriented edge contributes one plus sign and one minus sign to the total coefficient sum.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
The boundary is $3([b]-[a])-2([c]-[a])+([c]-[b])=-[a]+2[b]-[c]$. Its coefficient sum is $-1+2-1=0$. In general, each edge term with coefficient $q$ contributes $q$ at one endpoint and $-q$ at the other. Its total is zero, and linearity preserves that total when finitely many edge terms are added.
</details>

## Continue into the book

A complex records the pieces that exist; chains add coefficients and orientation; the boundary map converts a piece into its signed faces. Filling a loop changes which closed chains are boundaries. Continue with [Chain Complexes and Homology](/books/algebraic-topology-chains-spaces/chain-complexes-and-homology/) and the [simplicial homology computation recipe](/articles/simplicial-homology-computation/) for the longer construction and worked calculations.
`;export{e as default};