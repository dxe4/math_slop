var e=`---
parent_id: book-representation-theory-finite-groups
chapter_id: project-compute-a-character-table
title: "Project: Compute a Character Table"
level: graduate
status: draft
license: CC BY-SA 4.0
---

# Project: Compute a Character Table

Read [character completeness](characters-and-orthogonality.md), [worked S_4 representations](worked-finite-groups.md) and [tensor operations](tensor-products-representation-ring.md). This project works over C, with exact rational matrices for its fixed S_4 dataset. The earlier Euler project source remains available with its original identity in Computational Algebra. The pseudocode below describes a mathematical checker; it has not been executed as part of authoring.

## Project overview

This project brings together conjugacy classes and representation theory to construct and audit a small character table. The worked $S_4$ route uses known representations and orthogonality. A later exercise gives only an orientation to simultaneous class-algebra diagonalization; it is not a complete implementation of the Dixon-Schneider algorithm.

## Step 1: Choose a group and find its conjugacy classes

Select a group of order at most $24$ with a non-trivial character table. Good choices include $S_{4}$, $A_{4}$, $D_{4}$, or $Q_{8}$. For this project we work through $S_{4}$ in detail.

The conjugacy classes of $S_{4}$ are determined by cycle type:
- $C_{1}$: identity ($1$ element);
- $C_{2}$: transpositions ($6$ elements);
- $C_{3}$: double transpositions ($3$ elements);
- $C_{4}$: $3$-cycles ($8$ elements);
- $C_{5}$: $4$-cycles ($6$ elements).

Verify that $1 + 6 + 3 + 8 + 6 = 24 = |S_{4}|$.

## Step 2: Determine the degrees of irreducible representations

The sum of squares of degrees equals $|G|$:

$$\\sum_{i=1}^{r} (\\dim V_{i})^{2} = |G|.$$

For $S_{4}$, we know the trivial and sign representations (degree $1$ each). The standard representation on $\\{(x_{1}, x_{2}, x_{3}, x_{4}) : \\sum x_{i} = 0\\}$ has degree $3$. Its tensor product with the sign representation gives another degree-$3$ representation. Construct a degree-$2$ representation from the sum-zero subspace of the action on the three pair partitions $12|34,13|24,14|23$. Its norm is one by its fixed-point character calculation. The identity $1^{2} + 1^{2} + 3^{2} + 3^{2} + 2^{2} = 24$ then certifies completeness of the constructed list. A degree-square remainder alone would not prove existence of the missing representation.

## Step 3: Compute characters from known representations

**Trivial:** $\\chi_{1} = (1, 1, 1, 1, 1)$.

**Sign:** $\\chi_{2} = (1, -1, 1, 1, -1)$.

**Standard ($3$-dimensional):** The permutation representation on $\\{1, 2, 3, 4\\}$ has character $(4, 2, 0, 1, 0)$. Subtract the trivial representation to get $\\chi_{3} = (3, 1, -1, 0, -1)$.

**Sign $\\otimes$ standard:** Multiply by $\\chi_{2}$ to get $\\chi_{4} = (3, -1, -1, 0, 1)$.

**Degree $2$:** Use orthogonality. Let $\\chi_{5} = (2, a, b, c, d)$. The inner product with $\\chi_{1}$ gives

$$\\frac{1}{24}(2 + 6a + 3b + 8c + 6d) = 0.$$

Similarly, orthogonality with $\\chi_{2}, \\chi_{3}, \\chi_{4}$ yields a system of linear equations. Solving:
- With $\\chi_{2}$: $2 - 6a + 3b + 8c - 6d = 0$.
- With $\\chi_{3}$: $6 + 6a - 3b + 0 - 6d = 0$.
- With $\\chi_{4}$: $6 - 6a - 3b + 0 + 6d = 0$.

From the last two: adding gives $12 - 6b = 0$, so $b = 2$. Subtracting gives $12a - 12d = 0$, so $a = d$. From the first equation: $2 + 6a + 6 + 8c + 6a = 0$, so $8 + 12a + 8c = 0$, thus $c = -1 - (3/2)a$. From the second: $2 - 6a + 6 + 8c - 6a = 0$, so $8 - 12a + 8c = 0$, giving $c = -1 + (3/2)a$. Equating: $-1 - (3/2)a = -1 + (3/2)a$, so $a = 0$. Then $c = -1$ and $d = 0$. Thus $\\chi_{5} = (2, 0, 2, -1, 0)$.

The complete character table of $S_{4}$ is:

$$\\begin{array}{c|ccccc}
S_{4} & 1 & (12) & (12)(34) & (123) & (1234) \\\\\\
\\chi_{1} & 1 & 1 & 1 & 1 & 1 \\\\\\ 
\\chi_{2} & 1 & -1 & 1 & 1 & -1 \\\\\\ 
\\chi_{3} & 3 & 1 & -1 & 0 & -1 \\\\\\ 
\\chi_{4} & 3 & -1 & -1 & 0 & 1 \\\\\\ 
\\chi_{5} & 2 & 0 & 2 & -1 & 0
\\end{array}$$

## Step 4: Verify orthogonality

Check row orthogonality between $\\chi_{3}$ and $\\chi_{5}$:

$$\\frac{1}{24}\\bigl(1 \\cdot 3 \\cdot 2 + 6 \\cdot 1 \\cdot 0 + 3 \\cdot (-1) \\cdot 2 + 8 \\cdot 0 \\cdot (-1) + 6 \\cdot (-1) \\cdot 0\\bigr) = \\frac{1}{24}(6 + 0 - 6 + 0 + 0) = 0.$$

Check the norm of the transposition column:

$$1^{2} + (-1)^{2} + 1^{2} + (-1)^{2} + 0^{2} = 4 = \\frac{24}{6}.$$

The $4$-cycle column has the same squared norm. Their cross inner product is

$1(1)+(-1)(-1)+1(-1)+(-1)(1)+0(0)=0$,

which is the actual orthogonality check for two distinct columns.

## Step 5: Decompose a representation

Consider the action of $S_{4}$ on the $6$ unordered pairs $\\{\\{i, j\\} : 1 \\leq i < j \\leq 4\\}$. The character counts fixed pairs. We get $\\chi = (6, 2, 2, 0, 0)$. Compute multiplicities:
- $m_{1} = (6 + 12 + 6 + 0 + 0)/24 = 1$,
- $m_{2} = (6 - 12 + 6 + 0 + 0)/24 = 0$,
- $m_{3} = (18 + 12 - 6 + 0 + 0)/24 = 1$,
- $m_{4} = (18 - 12 - 6 + 0 + 0)/24 = 0$,
- $m_{5} = (12 + 0 + 12 + 0 + 0)/24 = 1$.

Thus this permutation representation decomposes as $V_{1} \\oplus V_{3} \\oplus V_{5}$.

## Common pitfalls

- **Miscounting class sizes.** In $S_{n}$, the size of the conjugacy class of cycle type with $m_{k}$ cycles of length $k$ is $n! / \\prod_{k} (k^{m_{k}} m_{k}!)$.
- **Forgetting that characters are class functions.** A character takes the same value on all elements of a conjugacy class.
- **Using the wrong normalisation in orthogonality.** The factor $1/|G|$ applies to the sum over group elements; when summing over class representatives, weight by class size.


## The fixed dataset and exact representation records

For the required project, use the full set of the 24 permutations of {1,2,3,4}. A permutation is a tuple (σ(1),σ(2),σ(3),σ(4)), and multiplication means (στ)(i)=σ(τ(i)). The identity tuple is (1,2,3,4). This fixes the dataset completely without downloading an external table or identifying elements by a changing array position.

Represent class labels by their cycle types: identity, transposition, double-transposition, three-cycle, four-cycle. Display order may change, but each row entry remains associated with its cycle-type key. The exact sizes are 1,6,3,8,6. No learner notebook or study record belongs to this mathematical input.

Supply five representation records, labelled trivial, sign, standard, sign-standard, pair-partition. The first two use scalar matrices 1 and sgn(σ). For the standard representation use basis v_i=e_i−e_4, i=1,2,3, of the sum-zero space. Its σ-matrix has entries
$$A_\\sigma(a,i)=\\delta_{a,\\sigma(i)}-\\delta_{a,\\sigma(4)},
\\qquad 1\\leq a,i\\leq3.$$
Indeed σv_i=e_(σ(i))−e_(σ(4)); its first three coordinates are the coefficients in that basis because its coordinate sum is zero. Multiplying A_σ by sgn(σ) gives the sign-standard record.

For the pair-partition representation, order the three partitions as above. Compute their actual permutation τ_σ by applying σ to their labels and comparing unordered pair sets. On the basis f_1−f_3,f_2−f_3 of the three-point sum-zero plane use the analogous formula
$$B_\\sigma(a,i)=\\delta_{a,\\tau_\\sigma(i)}
-\\delta_{a,\\tau_\\sigma(3)},\\qquad1\\leq a,i\\leq2.$$
All entries are integers. These formulas specify every matrix of every group element without listing hundreds of entries. The exact scalar field Q suffices for the matrix calculations; interpreting the resulting representations over C permits the character criteria.

A project submission consists of the permutation dataset, its multiplication convention, the class partition, these five matrix records, their traces, and a decomposition of the six-pair action. Optional A_4, D_4 or Q_8 work is additional rather than a replacement for the fixed S_4 calculation.

## A mathematical checker and its contract

The checker consumes exact finite data, not rounded character values. Its intended conclusion is:

**Certificate claim.** If the checker accepts the specified S_4 dataset and records, the rows are exactly the irreducible complex character table of S_4 up to row and class ordering, and the reported six-pair decomposition has the stated multiplicities.

The following pseudocode defines the obligations. Rational arithmetic and finite set equality are exact. It is source-level project material, not an assertion that any program was run.

~~~text
certify(group, classes, representations, claimed_table, pair_multiplicities):
    require group is exactly the 24 distinct permutations of four labels
    require composition is rightmost-first and identity is (1,2,3,4)

    for each claimed class C with representative c:
        require C = {x c x^(-1): x in group}
    require classes are disjoint and their union is group

    for each representation record rho of declared degree d:
        require every rho(g) is an exact d-by-d matrix
        require rho(identity) = I_d
        for each g,h in group:
            require rho(g h) = rho(g) rho(h)
        for each class C:
            require trace(rho(g)) equals claimed_table[rho,C]
                    for every g in C

    require declared degrees are positive integers
    for each pair of representation rows i,j:
        require sum_C |C| chi_i(C) conjugate(chi_j(C))
                = 24 if i=j, and 0 otherwise
    require sum_i degree_i^2 = 24

    derive the fixed-pair character from the actual action on two-subsets
    for each row i:
        m_i := sum_C |C| chi_pairs(C) conjugate(chi_i(C)) / 24
        require m_i is a nonnegative integer
        require m_i equals pair_multiplicities[i]
    require sum_i m_i degree_i = 6
    accept with the class, character and decomposition identities
~~~

The matrix laws imply invertibility automatically: ρ(g)ρ(g^(−1))=I. Thus a separate approximate determinant threshold is unnecessary. The table can be generated from the matrix records or supplied and compared against their exact traces. In either case its source is an actual representation.

**Proof of the certificate claim.** The permutation condition fixes the group to S_4. The conjugacy requirements give the correct classes and weights. The identity and multiplication conditions make each matrix record a representation. Its table row is its character by the trace conditions. Weighted norm one then proves each representation irreducible, and cross inner product zero makes the records pairwise inequivalent. The degree-square sum exhausts the regular representation, so no irreducible is missing. Finally each computed inner product is the true multiplicity in the actual pair permutation representation. Nonnegative integral coefficients and the direct-sum character identity determine its decomposition by character classification. The final degree equality records the expected six-dimensional space. ∎

Each premise has a purpose. In particular the degree-square equality is a completeness condition after character existence and irreducibility, not a way to invent representations.

## Worked example: the class partition

Cycle type (2,1,1) consists of choosing two labels to swap, giving six transpositions. Cycle type (2,2) has three partitions into two unordered pairs. A 3-cycle is specified by a three-element support and one of its two cyclic orientations, giving 4·2=8. A 4-cycle can be written with 1 first and then the other three labels in any order, giving 3!=6.

Together with the identity, the total is 1+6+3+8+6=24. Conjugation preserves cycle type; matching cycles constructs a conjugator, so each listed type is exactly a conjugacy class. This proves the partition rather than only checking its sizes add correctly.

## Worked example: the pair action from fixed subsets

The identity fixes all six two-subsets. A transposition (12) fixes {1,2} and {3,4}, and none of the other four pairs. A double transposition (12)(34) likewise fixes exactly those two. A 3-cycle cannot fix a two-subset, since its orbit on three labels has length three and its remaining label is alone. A 4-cycle has no fixed two-subset: even its opposite-vertex pairs are exchanged.

Thus χ_pairs=(6,2,2,0,0). Its inner products with the ordered rows trivial, sign, standard, sign-standard, pair-partition are 1,0,1,0,1. Therefore the six-pair action decomposes as 1⊕W⊕U. This is also the calculation in the earlier project, now tied to the actual fixed-subset data.

## Worked example: orthogonality without character existence

For C_2, consider the two rows (1,i) and (1,−i), on its two singleton classes. They have norm one, are mutually orthogonal, have positive identity entry one, and their degree squares sum to two. Their columns satisfy the corresponding orthogonality identities as well.

Neither is a character of a one-dimensional C_2-representation. The generator must square to the identity, whereas i²=(−i)²=−1. The example shows why the checker includes exact representation laws and trace association. Orthogonality and dimension conditions alone can certify an orthonormal array without certifying that its entries arise from a group action.

## What remains outside the checker

The certificate establishes a mathematical statement for its fixed finite group and exact records. It does not implement a general character-table algorithm for arbitrary presentations, bound the cost of class-algebra diagonalisation, or produce modular decomposition matrices. The earlier simultaneous-diagonalisation exercise remains an illustrative outline with its limitations stated.

If one extends the project to groups with nonrational character values, use an exact cyclotomic field representation and its defining polynomial, and justify equality and conjugation there. Rounded decimal comparisons cannot establish the exact orthogonality equalities used in the proof. A second group should be documented with equally explicit element, action and class conventions.


## A smaller certificate from generator relations

The full multiplication-record checker is simple to state because it checks every group pair. There is a second exact route for the fixed S_4 project: specify only the three adjacent-transposition matrices S_1,S_2,S_3. Require each to square to I, require S_1S_3=S_3S_1, and require the two braid identities
$$S_iS_{i+1}S_i=S_{i+1}S_iS_{i+1},\\qquad i=1,2.$$
These relations suffice because they present S_4. We give the word argument, so a relation-only certificate has an explicit justification.

More generally, take generators s_1,…,s_(n−1) with those involution, distant-commutation and adjacent-braid relations. Let H be the subgroup generated by the first n−2 generators. Define v_j=s_(n−1)s_(n−2)⋯s_j for j<n and v_n=1. Every word can be rewritten as h v_j with h∈H.

To verify that assertion inductively on word length, right multiply v_j by a generator s_i. If i<j−1, it commutes to the front and gives s_i v_j. If i=j−1, it extends the descending word to v_(j−1). If i=j, its last repeated generator cancels and gives v_(j+1). If i>j, commuting and one braid move give s_(i−1)v_j. The leading generator belongs to H in each case where it occurs. The same descriptions include v_n=1, with multiplication by the last generator producing v_(n−1).

Thus the presented group has at most n cosets of H. Induction gives order at most n factorial, starting with the one-element group. Sending the generators to the actual adjacent transpositions gives a surjection onto S_n: adjacent swaps sort any permutation. Since S_n has exactly n factorial elements, the surjection is an isomorphism.

For n=4 this proves that matrices satisfying the listed relations define a representation. Each permutation may be assigned a fixed adjacent-swap word; evaluate that word in the matrices to obtain its action. The presentation theorem makes the result independent of the chosen word. The rest of the project certificate—traces, irreducibility, completeness and the pair decomposition—then applies exactly as before.

This reduced certificate changes the mathematical input obligations, rather than merely omitting most of the full checker's multiplication conditions. It is valid because a proved presentation replaces them. A different group or a different proposed generator list would require its own presentation theorem. Matching a few visually plausible generator relations would not automatically provide that theorem.

For the standard record, each adjacent generator swaps the corresponding coordinate basis labels before restriction to the sum-zero space. Thus its involution and braid laws already follow from the actual permutation action. The explicit relations are useful when a submission supplies matrices directly, or when one wants an independent compact record of why those matrices factor through S_4 rather than through a larger free group.

An explicit equivalence certificate can be obtained from the generator matrices as well. Solve the homogeneous linear equations Tρ(s)=σ(s)T for the specified generators s, using exact coefficient arithmetic. Commutation then holds for their inverses and products, hence for every group element by the proved presentation. For two irreducible representations already known to be isomorphic, the solution space has dimension one by Schur's lemma and any nonzero solution is invertible. Thus a nonzero solution matrix records the actual correspondence between coordinate models, while a zero solution space certifies inequivalence. For reducible inputs, the extra invertibility question remains and must be addressed separately.

Power traces supply an additional exact check that is different from squaring a recorded trace. In the standard three-dimensional representation of S₄, a transposition has eigenvalues one, one and minus one, so its trace is one. Squaring its matrix gives identity, whose trace is three, whereas squaring its trace gives one. Consequently the symmetric-square trace is two and the exterior-square trace is minus one, by their character formulas. A matrix-labelled result can recover this power information from multiplication, while an unlabelled list of row values alone does not specify which class contains each square. Retaining the group element and its power class connects the table to the indicator and tensor constructions without assuming those two different squaring operations coincide.

## Practice exercises

### Exercise 1

Construct the character table of $A_{4}$. There are four conjugacy classes: $\\{e\\}$, $\\{(12)(34), (13)(24), (14)(23)\\}$, and two classes of $3$-cycles.

<details>
<summary>Hint 1</summary>

Use A_4/V_4≅C_3 to construct the three linear rows.

</details>
<details>
<summary>Hint 2</summary>

Subtract the fixed line from the four-point permutation representation to construct the degree-three row.

</details>
<details>
<summary>Full solution</summary>

$|A_{4}| = 12$. The quotient $A_{4}/V_{4} \\cong C_{3}$ gives three $1$-dimensional representations. The remaining irreducible representation has degree $3$ because $1^{2} + 1^{2} + 1^{2} + 3^{2} = 12$. The character table is:

$$\\begin{array}{c|cccc}
A_{4} & 1 & (12)(34) & (123) & (132) \\\\\\
\\chi_{1} & 1 & 1 & 1 & 1 \\\\\\ 
\\chi_{2} & 1 & 1 & \\omega & \\omega^{2} \\\\\\ 
\\chi_{3} & 1 & 1 & \\omega^{2} & \\omega \\\\\\ 
\\chi_{4} & 3 & -1 & 0 & 0
\\end{array}$$

where $\\omega = e^{2\\pi i/3}$.

</details>

### Exercise 2

Decompose the tensor product $V_{3} \\otimes V_{5}$ for $S_{4}$.

<details>
<summary>Hint 1</summary>

Multiply the two known rows pointwise.

</details>
<details>
<summary>Hint 2</summary>

Use class weights 1,6,3,8,6 in the inner products.

</details>
<details>
<summary>Full solution</summary>

The character is $\\chi_{3} \\chi_{5} = (6, 0, -2, 0, 0)$. Compute inner products:
- $m_{1} = (6 + 0 - 6 + 0 + 0)/24 = 0$,
- $m_{2} = (6 + 0 - 6 + 0 + 0)/24 = 0$,
- $m_{3} = (18 + 0 + 6 + 0 + 0)/24 = 1$,
- $m_{4} = (18 + 0 + 6 + 0 + 0)/24 = 1$,
- $m_{5} = (12 + 0 - 12 + 0 + 0)/24 = 0$.

Thus $V_{3} \\otimes V_{5} \\cong V_{3} \\oplus V_{4}$.

</details>

### Exercise 3

Write an illustrative simultaneous-diagonalization outline for recovering character data from class multiplication constants. State why this is not by itself a complete Dixon-Schneider implementation.

<details>
<summary>Hint 1</summary>

Class sums commute, but individual multiplication matrices may have repeated eigenvalues.

</details>
<details>
<summary>Hint 2</summary>

Refine common eigenspaces rather than diagonalising each matrix independently.

</details>
<details>
<summary>Full solution</summary>

\`\`\`text
Input: conjugacy classes C[1..r] of G
Compute structure constants c[i][j][k]
For each class i:
  Form the commuting multiplication matrix M[i]
Refine common eigenspaces using enough of the M[i]
For each common eigenline, record eigenvalues lambda[i]
Recover chi(g[i]) from lambda[i] = |C[i]| chi(g[i]) / chi(1)
Determine the positive integral degree and verify row and column orthogonality
Output character table
\`\`\`

Diagonalizing each matrix separately can choose incompatible bases inside repeated eigenspaces. A production Dixon-Schneider implementation also needs precise modular field, reconstruction, separation, and certification steps; the outline suppresses those algorithm-specific obligations.

</details>

### Exercise 4

Show that the character table entry for the identity class in row $i$ is always $\\chi_{i}(e) = \\dim(V_{i})$.

<details>
<summary>Hint 1</summary>

The group identity acts as I.

</details>
<details>
<summary>Hint 2</summary>

The trace of I is the dimension.

</details>
<details>
<summary>Full solution</summary>

By definition, $\\chi_{i}(g) = \\operatorname{tr}(\\rho_{i}(g))$. The identity element acts as the identity linear transformation on $V_{i}$, whose trace is $\\dim(V_{i})$.

</details>


### REP-14-05 — Exact standard matrices

For σ=(12), compute its matrix on v_i=e_i−e_4, i=1,2,3, and its trace.

<details>
<summary>Hint 1</summary>

The permutation fixes label four.

</details>
<details>
<summary>Hint 2</summary>

It swaps v_1,v_2 and fixes v_3.

</details>
<details>
<summary>Full solution</summary>

The matrix is [[0,1,0],[1,0,0],[0,0,1]], with trace one. This agrees with the fixed-point character: (12) fixes two of the four labels, and subtracting the fixed line gives 2−1=1. The matrix formula in the project produces the same columns directly. Rightmost-first composition then guarantees that the constructed matrices follow the group product convention.

</details>

### REP-14-06 — Why representation evidence is needed

Check the two C_2 rows (1,i),(1,−i) satisfy row orthogonality and explain which certificate obligation rejects them.

<details>
<summary>Hint 1</summary>

Use weights one and one.

</details>
<details>
<summary>Hint 2</summary>

A degree-one generator matrix must square to one.

</details>
<details>
<summary>Full solution</summary>

Each norm is (1+|i|²)/2=1. Their cross inner product is [1+i·overline(−i)]/2=[1+i²]/2=0. The degrees are both one, so their squares sum to two. Nevertheless the proposed scalar generator matrices i and −i square to −1, not the identity. The exact multiplication-law obligation therefore rejects both. Numerical orthogonality is insufficient to establish character existence.

</details>

### REP-14-07 — Completeness from the records

After all five S_4 records are proved inequivalent irreducibles, why is the degree-square sum enough to exclude a sixth?

<details>
<summary>Hint 1</summary>

Every irreducible occurs in the regular representation with its degree as multiplicity.

</details>
<details>
<summary>Hint 2</summary>

An additional irreducible has strictly positive degree.

</details>
<details>
<summary>Full solution</summary>

The regular representation has total dimension 24 and decomposes with degree-square contributions. The five recorded degrees give 1+1+9+9+4=24. Any additional irreducible would contribute at least one more positive square, contradicting that total. Thus no sixth type exists. This reasoning requires the records already be actual pairwise inequivalent irreducibles; it does not justify existence from a numerical list alone.

</details>

### REP-14-08 — Label permutations are harmless

Explain why reordering rows or classes changes no theorem, provided the semantic labels and class sizes move with their entries.

<details>
<summary>Hint 1</summary>

Inner products sum over labelled classes, not display positions.

</details>
<details>
<summary>Hint 2</summary>

The representation identity belongs to its record, not its row number.

</details>
<details>
<summary>Full solution</summary>

A row permutation only changes the display order of irreducible records. A class permutation reorders summands of each weighted inner product; carrying its size and representative along preserves every sum. Decomposition coefficients remain associated with their representation labels. If sizes were left behind while entries moved, the weighted sums could change. Stable labels preserve the mathematical associations independently of presentation.

</details>

### REP-14-09 — A class-partition error

Suppose the two 3-cycles on a fixed three-element support are incorrectly claimed to form a complete S_4 conjugacy class. Explain why the class certificate rejects it.

<details>
<summary>Hint 1</summary>

Conjugation can change the support.

</details>
<details>
<summary>Hint 2</summary>

The full class has eight elements.

</details>
<details>
<summary>Full solution</summary>

Conjugating a 3-cycle by permutations that move its support produces cycles on each of the four three-element supports, with both orientations. The set {xcx^(−1):x∈S_4} therefore has eight elements. The proposed two-element subset does not equal that set, so it fails the explicit conjugacy-class equality even if a later total-size check happened to be adjusted incorrectly.

</details>

### REP-14-10 — Pair multiplicities

Compute the multiplicity of sign in the six-pair representation and explain why it is zero.

<details>
<summary>Hint 1</summary>

Use χ_pairs=(6,2,2,0,0).

</details>
<details>
<summary>Hint 2</summary>

Sign has values (1,−1,1,1,−1).

</details>
<details>
<summary>Full solution</summary>

The weighted inner product is
[1·6·1+6·2·(−1)+3·2·1+8·0·1+6·0·(−1)]/24
=(6−12+6)/24=0.
Thus no sign subrepresentation occurs. The trivial, standard and pair-partition constituents have degrees 1,3,2 and exhaust the six-dimensional space.

</details>

### REP-14-11 — Exact arithmetic and conjugation

Why would replacing the exact C_3 root ω by a rounded complex number fail to prove character orthogonality?

<details>
<summary>Hint 1</summary>

The proof uses 1+ω+ω²=0 exactly.

</details>
<details>
<summary>Hint 2</summary>

A small nonzero residual is not the integer zero used by the multiplicity theorem.

</details>
<details>
<summary>Full solution</summary>

A rounded number generally does not satisfy its root-of-unity polynomial exactly. Weighted sums may then produce small residuals rather than zero, and division can yield numbers close to integers without proving those integers are the true multiplicities. An exact cyclotomic representation reduces expressions using the defining polynomial and specifies conjugation algebraically, making equality decidable within the declared field. Numerical approximation can illustrate values but cannot supply this certificate's exact premises.

</details>

### REP-14-12 — What the project establishes

List the mathematical claims supplied by a successful certificate and one important claim it does not supply.

<details>
<summary>Hint 1</summary>

Follow the proof from group identification through matrix laws and degree squares.

</details>
<details>
<summary>Hint 2</summary>

The source contains a finite exact procedure, not a general performance theorem.

</details>
<details>
<summary>Full solution</summary>

It establishes the chosen group is S_4, the class partition and sizes are correct, every record is a representation, its row is the actual trace character, the rows are pairwise inequivalent irreducibles, the list is complete, and the six-pair decomposition has the reported multiplicities. It does not prove an efficient general algorithm for arbitrary group presentations, provide modular composition data, or certify an implementation that has not been run and independently examined. The mathematical implication and software execution evidence are separate statements.

</details>

## Looking backward and forward

This project gives a reproducible mathematical certificate for a complete complex character table, with representation existence separated from orthogonality. The book has moved from actions and invariant complements through characters, induction, arithmetic, real forms and modular limits. Continue with the exact group and polynomial algorithms in [Computational Algebra](/books/library-book-finite-algebra-computation/), retaining the coefficient-field and completeness hypotheses developed here.
`;export{e as default};