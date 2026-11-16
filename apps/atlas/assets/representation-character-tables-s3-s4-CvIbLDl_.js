var e=`---
id: deep-dive-representation-character-tables-s3-s4
title: "The character tables of S3 and S4"
license: CC BY-SA 4.0
---

# The character tables of S3 and S4

A character table records traces of irreducible representations on conjugacy classes. Its small size hides several obligations: each row must come from an actual representation, its irreducibility must be established, and the list must be complete. Orthogonality equations alone do not turn an invented row into a character.

This **Years 2–3 (L3)** orientation assumes [finite-group representations](/articles/representation-finite-groups/), [Schur's lemma](/articles/representation-schurs-lemma/) and matrix traces. All representations are finite-dimensional over $\\mathbb C$. The primary [Characters and Orthogonality](/books/representation-theory-finite-groups/characters-and-orthogonality/) and [Character Tables](/books/representation-theory-finite-groups/character-tables/) chapters prove the general machinery. Here we construct the small tables and explain their arithmetic meaning.

## State the inputs before using the table

The character of $V$ is $\\chi_V(g)=\\operatorname{tr}\\rho_V(g)$. It is constant on conjugacy classes because trace is invariant under conjugation. Characters add under direct sums. For a permutation representation its value counts fixed basis elements: only fixed elements contribute diagonal ones to the permutation matrix.

We use three results proved in the primary orthogonality chapter. Maschke's theorem gives a decomposition of every complex finite-group representation into irreducibles. Their characters are orthonormal under

$$\\langle\\alpha,\\beta\\rangle_G=\\frac1{|G|}\\sum_C|C|\\alpha(C)\\overline{\\beta(C)}.$$

Consequently a nonzero genuine character has norm one exactly when its representation is irreducible, and $\\langle\\chi_V,\\chi_i\\rangle_G$ is the multiplicity of the irreducible $i$. Finally, all irreducible degrees satisfy $\\sum_i d_i^2=|G|$. Once distinct irreducibles attain that sum, no further one can be missing. These are named theorem inputs, with full proofs in the linked primary chapter.

## Three rows for S3

The conjugacy classes have representatives $e,(12),(123)$ and sizes $1,3,2$. The trivial and sign representations give rows $(1,1,1)$ and $(1,-1,1)$. The permutation action on three labels has trace $(3,1,0)$. Removing its invariant trivial line gives the sum-zero plane with character $(2,0,-1)$, constructed in the first article.

Its squared norm is $(4+3\\cdot0+2\\cdot1)/6=1$, confirming irreducibility. These three representations are distinct, and their squared degrees total $1+1+4=6$. Hence they form the complete table:

| Class representative | $e$ | $(12)$ | $(123)$ |
| --- | ---: | ---: | ---: |
| Class size | 1 | 3 | 2 |
| Trivial | 1 | 1 | 1 |
| Sign | 1 | −1 | 1 |
| Standard plane | 2 | 0 | −1 |

The class-size row is bookkeeping, not an additional character. Ignoring its weights would make the norm of the standard row appear to be five rather than the required normalized value one.

## Construct five rows for S4

The cycle types are $e,(12),(12)(34),(123),(1234)$, with class sizes $1,6,3,8,6$. Their sizes sum to $24$. For example, there are six choices of a transposed pair, three partitions into two pairs, eight oriented three-cycles and six four-cycles.

The trivial and sign rows are immediate. The action on four labels has fixed-point character $(4,2,0,1,0)$. Its sum-zero complement to the constant line is three-dimensional and has character

$$\\chi=(3,1,-1,0,-1).$$

Multiplying each action matrix on this complement by the permutation sign constructs another representation, whose character is

$$\\varepsilon\\chi=(3,-1,-1,0,1).$$

Both have norm $(9+6+3+0+6)/24=1$, so both are irreducible. They differ on transpositions and are inequivalent. Sign twisting is an actual action because both the sign and the original action preserve multiplication.

## Worked example: the degree-two row comes from pairings

There are three ways to partition four labels into two unordered pairs:

$$A=12|34,\\qquad B=13|24,\\qquad C=14|23.$$

Permuting labels acts on this three-element set, giving a genuine permutation representation. Its fixed-pairing counts across our five classes are $(3,1,3,0,1)$.

For a transposition, exactly one pairing is fixed and the other two are exchanged. A double transposition fixes all three pairings. A three-cycle cycles them and fixes none. A four-cycle fixes the pairing of opposite positions and exchanges the other two. Thus each entry has a direct action-based explanation.

The sum-zero plane in this three-coordinate representation is invariant and complements the trivial line, just as for the earlier permutation action. It has character

$$\\theta=(2,0,2,-1,0).$$

Its norm is $(4+6\\cdot0+3\\cdot4+8\\cdot1+6\\cdot0)/24=1$, proving irreducibility. This construction supplies the existence that a degree-square guess alone could not supply.

We now have five inequivalent irreducibles: their rows are distinct, and the two degree-one rows differ by sign while the remaining degrees distinguish the degree-two row. Their degree squares sum to $1+1+9+9+4=24$. The list is complete:

| Class representative | $e$ | $(12)$ | $(12)(34)$ | $(123)$ | $(1234)$ |
| --- | ---: | ---: | ---: | ---: | ---: |
| Class size | 1 | 6 | 3 | 8 | 6 |
| Trivial | 1 | 1 | 1 | 1 | 1 |
| Sign | 1 | −1 | 1 | 1 | −1 |
| Standard $\\chi$ | 3 | 1 | −1 | 0 | −1 |
| Sign twist $\\varepsilon\\chi$ | 3 | −1 | −1 | 0 | 1 |
| Pairing plane $\\theta$ | 2 | 0 | 2 | −1 | 0 |

For instance, $\\langle\\chi,\\theta\\rangle=(6+0-6+0+0)/24=0$. This exact weighted cancellation agrees with their inequivalence.

## Exercises

### Exercise 1
<a id="deep-dive-representation-character-tables-s3-s4-ex-1"></a>
Decompose the regular representation of $S_3$ using its character $(6,0,0)$ and the table above.

<details><summary>Hint 1</summary>
Each multiplicity is a weighted character inner product.
</details>
<details><summary>Hint 2</summary>
Only the identity column contributes, so its irreducible degree survives.
</details>
<details><summary>Solution</summary>
The trivial multiplicity is $6/6=1$, the sign multiplicity is also one, and the standard multiplicity is $6\\cdot2/6=2$. Thus the regular representation is trivial plus sign plus two standard planes. Their dimensions total $1+1+2\\cdot2=6$, and their summed character is $(6,0,0)$. The multiplicity theorem, rather than dimension agreement alone, proves this decomposition.
</details>

### Exercise 2
<a id="deep-dive-representation-character-tables-s3-s4-ex-2"></a>
Let $S_4$ act on the six unordered two-element subsets of its four labels. Its character is $(6,2,2,0,0)$. Decompose it into the five irreducibles above.

<details><summary>Hint 1</summary>
Compute the inner product with each row using weights $1,6,3,8,6$.
</details>
<details><summary>Hint 2</summary>
Only the first three columns contribute for this permutation action.
</details>
<details><summary>Solution</summary>
The trivial multiplicity is $(6+12+6)/24=1$. The sign multiplicity is $(6-12+6)/24=0$. The standard multiplicity is $(18+12-6)/24=1$, and its sign twist has multiplicity $(18-12-6)/24=0$. The pairing-plane multiplicity is $(12+0+12)/24=1$. Therefore the action is trivial plus standard plus pairing plane. The dimension is $1+3+2=6$. Adding those three character rows gives precisely $(6,2,2,0,0)$, with the individual summands justified by the multiplicity formula.
</details>

Continue with the primary [character chapter](/books/representation-theory-finite-groups/characters-and-orthogonality/) for the averaging proof behind the formulas. Its complex-field and finite-group assumptions are essential to the decomposition method used here.

*Source provenance: original Euler orientation exposition and exercises, using the source-owned character and orthogonality chapters. The retained S4 project supplies a companion table route; the degree-two pairing action is constructed explicitly here rather than inferred solely from an orthogonality system. CC BY-SA 4.0. Draft; no independent review is claimed.*
`;export{e as default};