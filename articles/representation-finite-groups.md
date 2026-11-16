
# Representations of finite groups

A group can act on many different vector spaces. A permutation of three labels acts on three coordinate positions, on the line of constant coordinates and on the plane where the coordinate sum vanishes. Representation theory studies these linear actions and the invariant pieces inside them. The acting group and the space carrying the action are separate data.

This **Years 2–3 (L3)** orientation assumes finite-dimensional linear algebra and basic group actions. Preparation is [invariant subspaces](#/books/linear-algebra-structure-proofs/invariant-subspaces-block-forms) and [group actions and orbit counting](#/books/algebra-patterns-structure/group-actions-orbits-counting). All representations in the main argument are finite-dimensional over $\mathbb C$, and all groups are finite. The primary [Representations and Examples chapter](#/books/representation-theory-finite-groups/representations-and-examples) gives the longer treatment, including other coefficient fields.

## An action must preserve multiplication

A representation of $G$ on $V$ is a group homomorphism

$$\rho:G\longrightarrow GL_{\mathbb C}(V).$$

Thus $\rho(e)=I$ and $\rho(gh)=\rho(g)\rho(h)$. Each group element acts by an invertible linear map; its inverse is the operator assigned to the inverse group element. A collection of invertible matrices with no multiplication compatibility is not yet a representation.

For a permutation action of $G$ on a finite set $X$, give $\mathbb C[X]$ a basis $e_x$ indexed by $X$ and put $\rho(g)e_x=e_{gx}$. Then

$$\rho(g)\rho(h)e_x=e_{g(hx)}=e_{(gh)x},$$

so the representation law holds on the basis and hence on every vector. A basis change alters all action matrices by the same conjugation; it cannot be chosen independently for each group element.

A subspace $U\subset V$ is invariant when every group element sends it into itself. It then carries its own representation by restriction. Since group inverses are available, the inclusion is actually equality $\rho(g)U=U$.

## Irreducibility asks about simultaneous invariance

A representation is irreducible when it is nonzero and has no invariant subspaces except zero and the entire space. This condition concerns the whole group action. An eigenline of one matrix is not enough: the other action matrices must preserve it too.

If $V=U\oplus W$ with both summands invariant, the action decomposes into two smaller representations. Merely choosing a vector-space complement does not guarantee this. For finite groups over $\mathbb C$, Maschke's theorem does guarantee an invariant complement, but it is a theorem with hypotheses, not part of the definition.

The mechanism is averaging. Starting with a linear projection $P$ onto an invariant $U$, average the conjugate operators $\rho(g)P\rho(g)^{-1}$ over $G$. Each still maps into $U$ and fixes $U$, so their average does too. Reindexing shows it commutes with the group action, and its kernel supplies an invariant complement. The primary [Maschke chapter](#/books/representation-theory-finite-groups/maschkes-theorem) proves this construction completely and explains why division by the group order can fail in positive characteristic.

## Worked example: three labels contain a line and a plane

Let $S_3$ act on $\mathbb C^3$ by permuting the basis vectors $e_1,e_2,e_3$. The line

$$L=\mathbb C(1,1,1)$$

is fixed pointwise. The plane

$$W=\{(a,b,c):a+b+c=0\}$$

is invariant because permuting coordinates preserves their sum. Every vector $v$ decomposes uniquely as

$$v=\frac{a+b+c}{3}(1,1,1)+\left(v-\frac{a+b+c}{3}(1,1,1)\right),$$

with the first term in $L$ and the second in $W$. Their intersection is zero, since a constant-coordinate vector with sum zero has $3a=0$ and hence $a=0$ over $\mathbb C$.

We can prove $W$ irreducible directly. Let $U\subset W$ be a nonzero invariant subspace and choose a nonzero $v\in U$. Not all its coordinates can be equal, so select $i,j$ with $a_i\ne a_j$. Subtract its image under the transposition $(ij)$:

$$v-\rho((ij))v=(a_i-a_j)(e_i-e_j).$$

Invariance puts this difference in $U$, so $e_i-e_j\in U$. Permutations carry that vector to all coordinate differences. Those differences span $W$, for instance through $e_1-e_3$ and $e_2-e_3$. Therefore $U=W$.

Thus the three-dimensional action is reducible, while its two-dimensional sum-zero piece is irreducible. The proof applies to every nonzero candidate invariant subspace, rather than just inspecting a chosen basis.

## Distinguish the field and the kernel

A representation is faithful if only the identity group element acts as the identity operator. This concerns loss of group information. Irreducibility concerns invariant linear subspaces; it is a different question. The full permutation action above is faithful and reducible. A one-dimensional trivial representation of a nontrivial group is irreducible and not faithful.

The coefficient field also matters. Over $\mathbb R$, rotation through $120$ degrees gives an irreducible action of the cyclic group of order three on a plane: there is no real invariant line. Over $\mathbb C$ its two distinct eigenvalues split the complexified plane into two invariant lines. Statements about irreducibility must therefore retain their field convention.

## Exercises

### Exercise 1
<a id="deep-dive-representation-finite-groups-ex-1"></a>
Let the generator of $C_2$ exchange the two basis vectors of $\mathbb C^2$. Find its irreducible decomposition and prove both summands are invariant.

<details><summary>Hint 1</summary>
Use the sum and difference of the two basis vectors.
</details>
<details><summary>Hint 2</summary>
A nonzero one-dimensional representation has no proper nonzero vector subspace.
</details>
<details><summary>Solution</summary>
The line $\mathbb C(e_1+e_2)$ is fixed, while $e_1-e_2$ is sent to its negative. Both lines are invariant under the generator and hence under the group. They are independent and span $\mathbb C^2$, so the action is their direct sum. Each line is irreducible because its dimension is one. The first is the trivial action and the second the nontrivial sign action of $C_2$.
</details>

### Exercise 2
<a id="deep-dive-representation-finite-groups-ex-2"></a>
On a one-dimensional complex space, let $S_3$ act by the permutation sign. Is the action irreducible? Is it faithful? Identify its kernel.

<details><summary>Hint 1</summary>
One-dimensional nonzero spaces have no nontrivial subspaces, regardless of the action.
</details>
<details><summary>Hint 2</summary>
The sign is one on even permutations and minus one on odd permutations.
</details>
<details><summary>Solution</summary>
It is irreducible because the space is nonzero and one-dimensional. Its kernel is the subgroup $A_3$ consisting of the identity and the two three-cycles, since exactly those permutations have sign one. Consequently it is not faithful. This supplies an explicit irreducible action that loses group information, contrasting with the faithful but reducible permutation action on three coordinates.
</details>

Continue with [Schur's lemma](#/articles/representation-schurs-lemma), which controls linear maps between irreducible pieces, and then the [character-table article](#/articles/representation-character-tables-s3-s4), which compresses action matrices to traces.

*Source provenance: original Euler orientation exposition and exercises, linked to the source-owned representation and Maschke chapters and existing algebra/linear-algebra preparation. CC BY-SA 4.0. Draft; no independent review is claimed.*
