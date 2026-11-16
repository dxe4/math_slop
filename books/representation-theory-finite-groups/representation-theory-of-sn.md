
# Representations of S_n

Conjugacy classes in S_n are indexed by partitions of n. Remarkably, partitions also index its complex irreducible representations, but a class label and a representation label play different roles. We construct the representations, prove their irreducibility and distinctness, and count their dimensions through standard tableaux.

Read [Maschke and Schur](schurs-lemma.md), [character completeness](characters-and-orthogonality.md) and [induction](induction-frobenius-mackey.md). Throughout n≥1 and the coefficient field is C. The old Euler symmetric-group reading remains intact in Computational Algebra. Its examples and four exercises are retained below; this chapter adds the missing construction and proofs.

## 1. Tableaux and row permutation modules

**Definition 8.1.** A partition λ of n is a weakly decreasing list λ_1≥⋯≥λ_r>0 with sum n. Its Young diagram has λ_i boxes in row i. Its conjugate λ' has λ'_j boxes in column j. A λ-tableau fills those boxes with 1,…,n exactly once. A tableau is standard if entries increase from left to right in every row and from top to bottom in every column.

A row tabloid {t} remembers the set of entries in each row, with rows still labelled, but forgets their order within a row. Let M^λ be the complex vector space with the λ-tabloids as an orthonormal basis. S_n permutes entries, giving a permutation representation. In fact M^λ is induction of the trivial representation from the row stabiliser of a chosen tableau.

For a tableau t, let C_t be its column stabiliser, consisting of independent permutations of the entries inside each column. Define the column antisymmetriser and polytabloid by
$$\kappa_t=\sum_{\pi\in C_t}\operatorname{sgn}(\pi)\pi,\qquad
e_t=\kappa_t\{t\}\in M^\lambda.$$
The coefficient of {t} in e_t is one. Indeed, a column permutation fixing every row set must fix every entry, because a row and a column intersect in at most one box.

**Definition 8.2.** The Specht module S^λ is the span of all e_t of shape λ. It is invariant because σe_t=e_(σt): conjugation carries C_t to C_(σt) and preserves permutation sign. In particular any one e_t generates S^λ under S_n.

This construction yields actual representations rather than only a proposed character table. It also makes their characteristic-zero setting visible: the inner-product proof and divisions by group orders below cannot be transferred without care into modular characteristic.

## 2. The submodule theorem and irreducibility

**Lemma 8.3.** For tableaux t,u of the same shape λ, κ_t{u} is either zero or ±e_t. More precisely, for every v∈M^λ,
$$\kappa_tv=(v,e_t)e_t,$$
where the inner product is linear in the first argument.

*Proof.* If some row of u contains two entries from the same column of t, their transposition lies in C_t and fixes {u}. Pairing terms of opposite sign in κ_t makes κ_t{u}=0.

Otherwise each row of u meets every column of t in at most one entry. Its first row has λ_1 entries, the number of columns, so meets every column exactly once. After those entries are removed, the second row has λ_2 entries and can only use the λ_2 columns with entries remaining, so meets each once. Continue row by row. Consequently a unique column permutation π_0 sends the row sets of u to those of t. Then κ_t{u}=sgn(π_0)e_t.

Thus the image of κ_t is contained in Ce_t. The operator κ_t is self-adjoint, because inversion preserves C_t and sign. The coefficient of {t} in e_t is one, so the scalar multiplying e_t in κ_tv is
(κ_tv,{t})=(v,κ_t{t})=(v,e_t).
This proves the formula. ∎

**Theorem 8.4 (Submodule theorem).** For an invariant subspace U≤M^λ, either S^λ⊆U or U⊆(S^λ)^⊥.

*Proof.* If U is not orthogonal to S^λ, some u∈U has (u,e_t)≠0 for some t. The lemma gives κ_tu=(u,e_t)e_t∈U, so e_t∈U. Acting by S_n gives every polytabloid, hence S^λ⊆U. If there is no such pair, U is orthogonal to the polytabloid span by definition. ∎

**Corollary 8.5.** Every S^λ is nonzero irreducible over C.

*Proof.* It is nonzero because e_t has coefficient one at {t}. If U is a nonzero invariant subspace of S^λ, the submodule theorem either gives U=S^λ or puts U inside S^λ∩(S^λ)^⊥. Positive definiteness makes that intersection zero, contradicting U≠0. ∎

The proof has not used the hook-length formula or an assumed dimension count. It proves irreducibility directly from antisymmetrising a permutation module.

## 3. Distinctness and completeness

**Definition 8.6.** A partition λ dominates μ if
$$\sum_{i=1}^a\lambda_i\geq\sum_{i=1}^a\mu_i$$
for every a≥1, adding zero parts as needed.

**Lemma 8.7.** If Hom_(S_n)(S^λ,M^μ)≠0, then λ dominates μ.

*Proof.* A nonzero map F has F(e_t)≠0, since e_t generates S^λ. Every column permutation π satisfies πe_t=sgn(π)e_t, so κ_te_t=|C_t|e_t. Hence κ_tF(e_t)=|C_t|F(e_t)≠0. Some μ-tabloid {u} therefore has κ_t{u}≠0.

As in the cancellation argument above, each row of u contains at most one entry from each column of t. The first a rows of u can therefore contain at most min(a,λ'_j) entries from column j. Counting gives
$$\sum_{i=1}^a\mu_i\leq\sum_j\min(a,\lambda'_j)
=\sum_{i=1}^a\lambda_i.$$
Thus λ dominates μ. ∎

If S^λ≅S^μ, compose the isomorphism with S^μ⊆M^μ to obtain λ≥μ in dominance. Reversing roles gives μ≥λ. Equality of every partial sum forces λ=μ. Thus the Specht modules are pairwise nonisomorphic.

Every permutation's cycle type is a partition, and two permutations are conjugate exactly when their cycle types agree: conjugation relabels cycles, while matching cycles explicitly constructs a relabelling conjugator. Therefore S_n has exactly as many conjugacy classes as partitions of n. Character completeness says it has the same number of irreducible types. We have constructed one distinct irreducible for each partition, so this is the full list.

**Theorem 8.8.** The complex irreducible representations of S_n are exactly the Specht modules S^λ, one for each partition λ of n.

## 4. Why standard polytabloids form a basis

We give the straightening argument because the dimension formula requires more than merely drawing tableaux.

First, exchanging two entries in a column changes e_t by a minus sign. Thus every polytabloid is, up to sign, one with increasing columns. If a column-increasing tableau is not standard, it has adjacent columns j,j+1 and a row i with t(i,j)>t(i,j+1).

Let A be the entries in column j from row i downwards, and B the entries in column j+1 from the top through row i. Then |A|+|B|=λ'_j+1, and every entry of A exceeds every entry of B. Let D contain representatives of the cosets of S_A×S_B in S_(A∪B), including the identity. The Garnir relation is
$$\sum_{\sigma\in D}\operatorname{sgn}(\sigma)e_{\sigma t}=0.$$

To prove it, antisymmetrise over A∪B. In every tabloid occurring in e_t, these λ'_j+1 entries lie within the first λ'_j rows, since their original columns have those heights. Two must share a row, so the full antisymmetriser kills that tabloid by transposition cancellation. On e_t, permutations within A or B already act by sign. Factoring the full antisymmetriser by cosets therefore gives |A|!|B|! times the displayed sum, which is zero. Over C division by these nonzero integers is valid.

Solve the relation for e_t. Every other coset representative exchanges a nonempty selection between A and B. After sorting columns again, the left column has replaced some larger A-entries by smaller B-entries. Its top-to-bottom word decreases lexicographically; previous columns are unchanged. Order tableaux by their column-reading words. This is a finite order on fillings, and each straightening replacement decreases it. Repeating therefore terminates at standard tableaux. Hence their polytabloids span.

For independence, order tabloids by the word obtained by sorting each row increasingly and then reading rows from top to bottom. If t is standard, {t} is the unique least tabloid in e_t. Indeed, for any nonidentity column permutation, consider the first row whose entries change. Every incoming entry comes from lower in its own increasing column, so the sorted word in that row increases. Earlier rows are unchanged. Distinct standard tableaux give distinct tabloids because their rows are already sorted. In any proposed linear relation among standard e_t, choose the least tabloid {t} among those with nonzero coefficient. No polytabloid with a larger least tabloid can contribute to it. Its coefficient therefore cannot cancel, a contradiction.

**Theorem 8.9 (Standard basis).** The e_t for standard λ-tableaux form a basis of S^λ. Thus dim S^λ is the number f^λ of standard tableaux of shape λ.

## 5. Hook lengths with a counting proof

For a box (i,j), its hook consists of itself, the boxes to its right and those below it. Its length is
$$h_{ij}=\lambda_i-j+\lambda'_j-i+1.$$

**Theorem 8.10 (Hook-length formula).**
$$f^\lambda=\frac{n!}{\prod_{(i,j)\in\lambda}h_{ij}}.$$

*Proof.* A standard tableau is equivalent to a sequence of diagrams obtained by adding the boxes labelled 1,2,…,n. Recording each new box's row gives a word in r row labels whose prefix counts remain weakly decreasing and whose final counts are λ.

Shift the row counts by δ=(r−1,r−2,…,0). We now count lattice walks from δ to b=(λ_1+r−1,…,λ_r), increasing one coordinate by one at each step and maintaining strict coordinate inequalities. By the reflection argument this number is
$$n!\det\left(\frac1{(\lambda_i-i+j)!}\right)_{1\leq i,j\leq r},$$
where 1/m!=0 for negative integers m.

Here is the reflection argument explicitly. Take the signed sum of all unrestricted walks to b from every permutation of δ, with the permutation sign. Whenever a walk has a collision of coordinates, choose its first collision and a fixed first pair of equal coordinates there; swap those two coordinate histories up to the collision. The endpoint is unchanged, the starting permutation changes sign and applying the operation twice restores the walk. Thus colliding walks cancel. A noncolliding walk ending with strictly decreasing coordinates must have started in that same order, so only the original δ-start walks survive. From a permuted start, the number of unrestricted walks is n! divided by the factorials of the required coordinate increments, yielding the determinant.

Write b_i=λ_i+r−i. Multiplying row i of the determinant by b_i! changes its entries to falling-factorial polynomials in b_i of degrees r−1,r−2,…,0, each monic. Subtracting lower-degree column combinations reduces these to ordinary powers without changing the determinant. The result is the descending Vandermonde product ∏_(i<j)(b_i−b_j). Hence
$$f^\lambda=n!\frac{\prod_{i<j}(b_i-b_j)}{\prod_i b_i!}.$$

Finally the hook lengths in row i are precisely the integers 1,…,b_i with the values b_i−b_k for k>i omitted. To verify this set description, read the row from right to left. Moving a box left increases its hook by one plus the number of lower rows whose final box is crossed. Each such lower row k creates the missing integer λ_i−λ_k+k−i=b_i−b_k. Lower rows of equal length create the initial missing values in the same way. There are r−i omitted values, leaving exactly λ_i hooks. Multiplying this row identity over i gives
$$\prod_{(i,j)}h_{ij}
=\frac{\prod_i b_i!}{\prod_{i<k}(b_i-b_k)}.$$
Substitution proves the formula. ∎

## 6. Worked example: all degrees for S_3

The partitions are (3),(2,1),(1,1,1). The row shape has one tabloid, so its Specht module is trivial. The column shape antisymmetrises all entries and gives sign. Their hook products are 3·2·1, so both degrees are one.

For (2,1), the hook lengths are 3,1,1, giving degree 3!/(3·1·1)=2. The tabloids can be indexed by the entry in the second row, so M^(2,1) is the three-point permutation representation. Its polytabloids are differences of these three basis vectors, spanning the sum-zero plane. This identifies S^(2,1) with the standard representation constructed earlier, rather than just matching its degree.

The squared degrees sum to 1+4+1=6. The proof of completeness above already explains why this numerical identity must hold; here it is a useful consistency calculation.

## 7. Worked example: shape (3,2)

There are five boxes, with hook lengths 4,3,1 in the top row and 2,1 in the bottom row. Thus f^(3,2)=120/(4·3·1·2·1)=5. The determinant proof gives the same result with b=(4,2):
$$f^{(3,2)}=5!\frac{4-2}{4!\,2!}=5.$$

The five standard tableaux can also be counted by recording which two labels occupy the second row while requiring every prefix to have at least as many first-row labels. The possible second-row label pairs are {2,4},{2,5},{3,4},{3,5},{4,5}. Each determines the increasing rows and has increasing columns. The pair {2,3} fails because the first three labels would give two boxes below only one box above.

This small example displays all three descriptions: an irreducible module, a basis of standard polytabloids and a lattice-path count.

## 8. A named further character rule

The earlier Euler reading included the Murnaghan–Nakayama rule. We retain it as an explicitly named additional theorem, rather than pretending that the preceding dimension proof establishes it. Its full symmetric-function proof is outside this chapter; neither the construction, irreducibility, classification nor hook-length proof above depends on it.

For the complex irreducible labelled λ and cycle type μ=(μ_1,…,μ_k), the rule states
$$\chi^\lambda(\mu)=
\sum_{\substack{\nu\subseteq\lambda\\\lambda/\nu\text{ a border strip}\\
|\lambda/\nu|=\mu_1}}
(-1)^{\operatorname{ht}(\lambda/\nu)}
\chi^\nu(\mu_2,\ldots,\mu_k).$$
A border strip is a connected skew diagram with no 2×2 square, and its height is one less than its number of occupied rows. The remaining shape ν must be a Young diagram. The base value for the empty diagram and empty cycle type is one. Serre and James–Liebeck are the book's reference benchmarks for the general character methods; this additional rule is recorded as a theorem import, not a locally proved result.

**Worked example.** For λ=(2,1) and a 3-cycle, the only removable length-three strip is the whole diagram. It occupies two rows and has height one, so the rule gives −1. Independently, the standard permutation character is the fixed-point count minus one, giving 0−1=−1. Thus the retained rule calculation has a direct local verification in this example.

## 9. Exercises

### Exercise 1

Compute the degrees of all irreducible representations of S_4 using the hook-length formula.

<details>
<summary>Hint 1</summary>

List the five partitions of four.

</details>
<details>
<summary>Hint 2</summary>

Conjugate diagram shapes have the same hook-product.

</details>
<details>
<summary>Full solution</summary>

The partitions are (4),(3,1),(2,2),(2,1,1),(1,1,1,1). Their hook products are 24,8,12,8,24, respectively. Thus the degrees are 1,3,2,3,1. For (3,1), the hooks are 4,2,1 in the first row and 1 below, giving 24/8=3. For (2,2), they are 3,2,2,1, giving 24/12=2. The degree squares add to 1+9+4+9+1=24. Transposing a partition gives the sign twist, not the dual; every complex irreducible of S_n is self-dual. The sign-twist identification is an additional standard consequence of the row/column constructions, while the degree equality follows directly from transposed hook sets.

</details>

### Exercise 2

Use the stated Murnaghan–Nakayama rule to compute χ^(3,1) on cycle type (2,2) in S_4, and verify the answer without that rule.

<details>
<summary>Hint 1</summary>

A removable strip must leave a Young diagram.

</details>
<details>
<summary>Hint 2</summary>

The shape (3,1) is the standard S_4 representation; its character is fixed points minus one.

</details>
<details>
<summary>Full solution</summary>

The only removable length-two strip is the horizontal pair at the right of the top row. It has height zero and leaves shape (1,1), whose value on a transposition is −1. Hence χ^(3,1)((2,2))=−1. The shape (3,1) polytabloids are differences in the four-point permutation module, so give its sum-zero standard subspace. A double transposition has zero fixed points and therefore character 0−1=−1 there. The apparent bent alternatives do not leave a Young diagram.

</details>

### Exercise 3

Prove the complex regular representation decomposes as ⊕_λ (dim S^λ)S^λ.

<details>
<summary>Hint 1</summary>

Its character vanishes away from the identity.

</details>
<details>
<summary>Hint 2</summary>

Take its inner product with each irreducible character.

</details>
<details>
<summary>Full solution</summary>

At e the regular character is n!, and elsewhere it is zero. Therefore its inner product with χ^λ is χ^λ(e)=dim S^λ. The classification theorem lists all irreducibles, so these are exactly the multiplicities in the regular decomposition. Taking dimensions gives Σ_(λ⊢n)(f^λ)²=n!. This identity follows from representations here; the tableau basis also gives it a combinatorial interpretation.

</details>

### Exercise 4

For n≥2 prove the coordinate permutation representation is trivial plus an irreducible standard representation, and identify its partition.

<details>
<summary>Hint 1</summary>

The fixed line and the sum-zero space are complementary over C.

</details>
<details>
<summary>Hint 2</summary>

The tabloids of shape (n−1,1) are labelled by the entry in the last row.

</details>
<details>
<summary>Full solution</summary>

Let u=Σ_i e_i. The augmentation map splits C^n=Cu⊕W, where W has coordinate sum zero. For shape (n−1,1), identify a tabloid with its unique second-row label. A column antisymmetriser swaps that label with the entry above it, so polytabloids are differences e_i−e_j. They span W. Hence W=S^(n−1,1), which is irreducible by the submodule theorem. The fixed line is trivial. For n=2 the standard summand has degree one and is sign.

</details>

### REP-08-05 — One-row and one-column modules

Construct S^(n) and S^(1^n) directly from tabloids.

<details>
<summary>Hint 1</summary>

A one-row shape has trivial column groups.

</details>
<details>
<summary>Hint 2</summary>

For one column the antisymmetriser runs over all S_n.

</details>
<details>
<summary>Full solution</summary>

In shape (n) there is one row tabloid, fixed by all permutations, and its polytabloid is itself. Thus S^(n) is trivial. In shape (1^n), each row has one entry and C_t=S_n. The alternating sum e_t is nonzero and σe_t=sgn(σ)e_t, so its span is the sign representation. Every tableau is a permutation of t, so that span is all S^(1^n).

</details>

### REP-08-06 — Cancellation under a repeated column

If a row of {u} contains two entries from a column of t, prove κ_t{u}=0.

<details>
<summary>Hint 1</summary>

Their transposition fixes {u}.

</details>
<details>
<summary>Hint 2</summary>

Pair π with πτ in the antisymmetriser sum.

</details>
<details>
<summary>Full solution</summary>

Let τ be that transposition. It lies in C_t, has sign −1 and fixes {u}. The terms π{u} and πτ{u} agree while their signs are opposite. Right multiplication by τ partitions C_t into such pairs, so every contribution cancels. This is the basic reason column antisymmetry constrains which row permutation modules can contain a given Specht module.

</details>

### REP-08-07 — Dominance obstruction

Explain why S^(2,2) cannot occur in M^(3,1).

<details>
<summary>Hint 1</summary>

Compare the first partial sums of the two partitions.

</details>
<details>
<summary>Hint 2</summary>

A nonzero map would require (2,2) to dominate (3,1).

</details>
<details>
<summary>Full solution</summary>

The first partial sums are two and three, so (2,2) does not dominate (3,1). Lemma 8.7 therefore makes Hom_(S_4)(S^(2,2),M^(3,1)) zero. Since complex representations are completely reducible, occurrence as a constituent would provide an embedding and hence a nonzero map. Thus the two-dimensional irreducible does not occur in the four-point permutation module.

</details>

### REP-08-08 — Count a two-row basis

Count standard tableaux of shape (3,2) by listing the allowed second-row label pairs.

<details>
<summary>Hint 1</summary>

Both rows must increase, so choosing the second-row labels determines the filling.

</details>
<details>
<summary>Hint 2</summary>

Every prefix must have at least as many first-row labels as second-row labels.

</details>
<details>
<summary>Full solution</summary>

The valid pairs are {2,4},{2,5},{3,4},{3,5},{4,5}. Pairs involving 1 fail immediately. The remaining excluded pair {2,3} has two lower-row boxes among the first three labels and only one upper box. The five valid pairs each yield increasing columns, giving f^(3,2)=5 as predicted by hooks.

</details>

### REP-08-09 — A hook-shaped degree

Use the hook formula to prove f^(n−1,1)=n−1 for n≥2.

<details>
<summary>Hint 1</summary>

The top-left hook has length n.

</details>
<details>
<summary>Hint 2</summary>

The remaining top-row hooks are n−2,n−3,…,1, and the bottom hook is one.

</details>
<details>
<summary>Full solution</summary>

The hook product is n·(n−2)!·1. Hence f^(n−1,1)=n!/[n(n−2)!]=n−1. For n=2 the product convention gives 2·0!=2 and the result is one. This agrees with the dimension of the sum-zero subspace of C^n and its Specht identification.

</details>

### REP-08-10 — Reflection cancellation

In the determinant proof, explain why a walk from a nonidentity permutation of δ to a strictly decreasing endpoint must have a coordinate collision.

<details>
<summary>Hint 1</summary>

Some pair begins in the opposite order from its endpoint order.

</details>
<details>
<summary>Hint 2</summary>

A difference of integer coordinates changes by at most one at each step.

</details>
<details>
<summary>Full solution</summary>

A nonidentity permutation of the distinct decreasing entries of δ is not in decreasing order. Thus some pair i<j begins with coordinate i smaller than coordinate j, while the endpoint has coordinate i larger. Their integer difference goes from negative to positive and changes by at most one on each step, so it equals zero at an intermediate time. The first such collision permits the prefix-swap involution. Only the original ordered start can support an uncancelled collision-free walk.

</details>

### REP-08-11 — Transpose and dimension

Prove f^λ=f^(λ') without assuming a representation-theoretic sign-twist theorem.

<details>
<summary>Hint 1</summary>

Transpose a standard tableau.

</details>
<details>
<summary>Hint 2</summary>

Rows and columns exchange their increasing conditions.

</details>
<details>
<summary>Full solution</summary>

Transposing the filled diagram exchanges rows with columns. Since both were increasing, the result is a standard tableau of shape λ'. Transposing again is the identity, so this is a bijection and the two standard-tableau counts agree. The hook products also agree because each transposed box has the same hook length. Neither argument identifies a dual representation or proves a sign twist; those are separate representation statements.

</details>

### REP-08-12 — Why the complex proof is sensitive

Identify two places in the Specht proof where a direct transfer to positive characteristic can fail.

<details>
<summary>Hint 1</summary>

Look at positive definiteness in the submodule theorem consequence.

</details>
<details>
<summary>Hint 2</summary>

Look at |C_t| and factorial factors in antisymmetrisation.

</details>
<details>
<summary>Full solution</summary>

Over C, S^λ∩(S^λ)^⊥=0 follows from a positive-definite Hermitian product. A bilinear form over a finite field can have a nontrivial radical, so the same irreducibility argument need not work. Also |C_t| or |A|!|B|! can vanish in characteristic p, invalidating the divisions used in the dominance and straightening arguments as written. Modular Specht modules remain important, but the characteristic-zero irreducibility and classification proof cannot simply be copied word for word.

</details>

## 10. Summary and next connection

Column antisymmetry inside row permutation modules constructs the Specht modules. The submodule theorem proves irreducibility, dominance distinguishes the shapes, and character completeness proves the list exhaustive. Straightening gives a standard-tableau basis, and reflection plus a determinant evaluation proves the hook-length dimensions. The additional rim-hook character rule is explicitly identified as a named import. The next chapter uses character-theoretic arithmetic to prove [Burnside's two-prime theorem](burnside-prime-power-theorem.md).
