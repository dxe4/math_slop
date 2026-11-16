
# Linear Representability and Field Dependence

Linear algebra is the most powerful source of matroids and the most tempting source of false analogies. A matrix turns column independence into a matroid, rank into dimension, closure into span, and circuits into minimal supports of kernel vectors. Yet the matrix is interpreted over a field, and the field can change the matroid. An integer determinant that is nonzero over the rationals may vanish after reduction modulo a prime.

This chapter develops representation as a precise contract. It distinguishes transformations that preserve the represented matroid, proves the role of minimal dependencies, constructs dual representations, and marks three boundaries: dependence on characteristic, representability over only some fields, and abstract matroids with no field representation at all.

## Prerequisites and notation

We assume finite matroids, matrix rank, bases, kernels, determinants, quotient-free elementary linear algebra, and basic finite fields. Let $F$ be a field. Columns are indexed by a finite ground set $E$; repeated or zero columns remain separately labeled elements.

For $X\subseteq E$, $A_X$ denotes the submatrix containing exactly the columns indexed by $X$. “Rank” without a matroid subscript refers to matrix rank over the named field.

## 1. A matrix represents a matroid

Given an $m\times n$ matrix $A$ over $F$ with columns indexed by $E$, define

$I(A)=\{X\subseteq E: \text{the columns of }A_X\text{ are linearly independent over }F\}$.

Empty-set membership and heredity are standard linear algebra. If independent $I,J$ satisfy $|I|<|J|$, then

$\dim\operatorname{span}(A_I)=|I|<|J|=\dim\operatorname{span}(A_J)$.

Some column indexed by $J\setminus I$ lies outside $\operatorname{span}(A_I)$ and augments it. Thus $I(A)$ is a matroid, denoted $M_F(A)$. A matroid is **representable over $F$** if it is isomorphic to some $M_F(A)$.

The labels matter. Two equal nonzero columns are distinct parallel elements. A zero column is a matroid loop. Deleting one of two repeated columns changes the ground set even though the remaining numerical matrix has the same column space.

## 2. Rank, closure, and circuits become linear data

For a represented matroid,

$r_M(X)=\operatorname{rank}_{F}(A_X)$.

An indexed element $e$ lies in $\operatorname{cl}(X)$ exactly when its column lies in $\operatorname{span}_F(A_X)$. A flat is therefore the full set of indexed columns contained in a particular spanned subspace. Different columns at the same vector direction occupy the same rank-one flat.

A set $C$ is a circuit exactly when $\ker(A_C)$ is one-dimensional and a nonzero kernel vector has no zero coordinate. Minimality forces full support. Conversely, a full-support dependence with every proper column subset independent makes $C$ a circuit.

### Worked dependence certificate

**Worked example (A field-independent circuit certificate).**

Over any field, take columns

$a=(1,0)$, $b=(0,1)$, $c=(1,1)$.

Every pair is independent over every field. The determinant of $a,b$ is one, of $a,c$ is one, and of $b,c$ is $-1$, all nonzero in every field. The triple is dependent through $a+b-c=0$; in characteristic two this reads $a+b+c=0$. Hence $\{a,b,c\}$ is a circuit over every field, although its signed coefficients change.

## 3. Which matrix operations preserve the matroid?

The following operations preserve all column-dependence supports:

1. left multiplication by an invertible matrix;
2. elementary row operations;
3. scaling one column by a nonzero field element;
4. permuting columns while carrying their labels with them;
5. adding or deleting zero rows.

The first two apply an invertible linear map to every column. Nonzero column scaling changes coefficients but not which subsets support a dependence. Column permutation is a relabeling.

By contrast, adding one column to another generally changes the represented matroid. That operation is invertible on the ambient list of columns, but it mixes ground elements rather than applying one common transformation to vector space.

### Counterexample to column addition

Start with the identity columns $a=(1,0)$, $b=(0,1)$, a representation of $U(2,2)$. Replace $b$ by $b-a=(-1,1)$; this particular change happens to preserve independence. But if a third column $c=(1,1)$ is present and one replaces $c$ by $c-a=b$, the indexed elements $b,c$ become parallel. The original three columns represented $U(2,3)$; the modified list has a two-element circuit. “Elementary column operation” is not a matroid-preserving phrase unless it is only scaling or labeled permutation.

## 4. The same integer matrix can change with the field

Consider columns

$v_1=(1,0)$, $v_2=(0,1)$, $v_3=(1,1)$, $v_4=(1,-1)$.

Over a field of characteristic not two, every pair is independent. The only potentially delicate pair is $v_3,v_4$, whose determinant is $-2$, nonzero under the hypothesis. Since the ambient rank is two, every triple is minimally dependent. The represented matroid is $U(2,4)$.

Over characteristic two, $-1=1$, so $v_3=v_4$; the pair $\{v_3,v_4\}$ is a circuit. The triples $\{v_1,v_2,v_3\}$ and $\{v_1,v_2,v_4\}$ are also circuits, while a triple containing the parallel pair is dependent but not minimal. The labeled integer array therefore represents a different matroid.

The theorem contract must always name the field. Saying only “the columns are independent” is incomplete when the matrix is intended for reduction modulo primes.

## 5. $U(2,4)$ separates binary from larger fields

The uniform matroid $U(2,4)$ is not representable over $\mathbb{F}_2$. A rank-two binary representation may use only nonzero columns, and no two columns may be scalar multiples. But $\mathbb{F}_2^2$ has only three nonzero vectors, and its only nonzero scalar is one. Four labeled columns force a repetition, producing a forbidden parallel pair.

Over $\mathbb{F}_3$, use slopes represented by

$(1,0),(0,1),(1,1),(1,-1)$.

The determinant calculation above shows every pair is independent, so this is a representation. More generally, the projective line over a finite field with $q$ elements has $q+1$ one-dimensional directions, making $U(2,n)$ representable over $\mathbb{F}_q$ exactly when $n\le q+1$.

This is a finite-geometry constraint, not a numerical precision issue. Enlarging the field creates more directions.

## 6. The Fano configuration detects characteristic two

Over $\mathbb{F}_2$, form a $3\times 7$ matrix whose columns are all seven nonzero vectors of $\mathbb{F}_2^3$. Its vector matroid is the **Fano matroid** $F_7$. Each projective line contains three columns summing to zero, and those seven triples are circuits.

The same incidence pattern cannot be represented over a field of characteristic different from two. Label three noncollinear points by basis columns $a,b,c$. After allowable nonzero scalings, three points on their pair-lines can be written

$p=a+b$, $q=a+c$, and $s=b+t c$

with $t\ne 0$. The Fano line through $p,q,s$ makes these columns dependent. Their determinant in basis $a,b,c$ is $-(1+t)$, so this line forces $t=-1$.

Let $z$ be the seventh point. Its three Fano incidences put it simultaneously on the lines spanned by $\{a,s\}$, $\{b,q\}$, and $\{p,c\}$. The last line gives equal nonzero coefficients on $a$ and $b$; comparison with the first says the coefficient ratio $c\colon b$ is $t$, while comparison with the second says the ratio $c\colon a$ is $1$. Equal $a,b$ coefficients therefore force $t=1$. Combining the two requirements gives $1=-1$, equivalently $2=0$. Thus the full incidence pattern is impossible when the field characteristic is not two.

The argument illustrates how a matroid remembers zero versus nonzero determinants but forgets their magnitude. Field characteristic can decide which required minors vanish.

## 7. Graphic matroids are representable over every field

Orient every nonloop edge of a graph arbitrarily. Its incidence column has $-1$ at the tail, $1$ at the head, and zeros elsewhere. A graph loop receives the zero column. Delete one row from each connected component to remove the obvious row dependence.

The resulting matrix represents $M(G)$ over every field. A directed cycle gives
a signed sum of its edge columns equal to zero; in characteristic two the signs
coincide, but cancellation still occurs because each cycle vertex appears
twice. Conversely, consider a nonempty forest support in a linear combination.
One of its nontrivial tree components has a leaf whose row was retained: that
tree has at least two leaves, while at most one row was deleted in its ambient
graph component. The retained leaf row forces the coefficient of its unique
incident forest edge to be zero. Removing that edge from the support and
repeating forces every coefficient to vanish, proving forest columns
independent.

The reduced oriented incidence matrix is **totally unimodular**: every square minor is $0$, $1$, or $-1$. Those nonzero minors remain nonzero over every field. A matroid representable over every field is called **regular**. Graphic matroids are regular, and duality shows cographic matroids are regular as well.

Regularity is stronger than binary representability. $F_7$ is binary but not representable outside characteristic two, so it is not regular.

## 8. Dual representations come from orthogonal row spaces

Suppose $A$ is an $r\times n$ full-row-rank matrix representing $M$ on column set $E$. Let $D$ be an $(n-r)\times n$ full-row-rank matrix whose row space is the orthogonal complement of the row space of $A$ under the standard bilinear pairing. Then $D$ represents $M^{*}$.

**Basis proof.** After permuting columns, let a basis candidate be $B$ with $|B|=r$. Row-reduce $A$ when $A_B$ is nonsingular to the form

$[I_r | N]$.

A matrix for the orthogonal complement row space is

$[-N^T | I_{n-r}]$.

Its columns indexed by $E\setminus B$ form the identity and hence are independent. Reversing the row reduction shows that $A_B$ is nonsingular exactly when the complementary columns $D_{E\setminus B}$ are nonsingular. Thus bases represented by $D$ are precisely complements of bases represented by $A$, the defining basis family of $M^{*}$. ∎

Over characteristic two, the minus sign disappears; the theorem remains valid. Orthogonal complement here is algebraic row-space duality, not a positive-definite geometric claim.

## 9. Deletion and contraction in a representation

Deleting an element deletes its column. Contracting a nonloop column can be implemented by row operations and nonzero scaling that turn it into a unit vector, followed by deleting that column and its pivot row. The remaining matrix represents $M/e$.

For contraction by a set, pivot on a basis of the set and remove the corresponding pivot rows and all contracted columns. Dependent elements of the contracted set add no pivot: the rank formula subtracts $r(S)$, not $|S|$.

If the element is a loop, its column is zero and contraction equals deletion at the matroid level. Attempting to pivot on it is the matrix symptom that no rank is being absorbed.

Representable matroids are closed under minors and duality. The representing field stays the same through these operations.

## 10. Representability is an extra property, not a matroid axiom

Rank submodularity resembles dimension, but it does not force coordinates over a field. Some matroids are representable only over fields of particular characteristics; $F_7$ is the basic example. Some abstract matroids are not representable over any field; the eight-element Vámos matroid is a standard example. Its nonrepresentability requires inequalities beyond ordinary rank submodularity and is not proved here.

Even when a matroid is representable, representations need not be unique. Two matrices over the same field can represent isomorphic matroids without being related by the elementary preservation operations listed earlier. Questions of unique representability require additional connectivity and field hypotheses.

The hierarchy is therefore strict:

$\text{regular} \Longrightarrow \text{representable over }F_2 \Longrightarrow \text{representable over some field} \Longrightarrow \text{matroid}$.

Neither reverse implication holds in general.

## 11. A bounded field-comparison audit

Given an integer matrix with at most eight labeled columns, a reproducible audit can:

1. reduce every square minor over $\mathbb{Q}$ and over specified finite fields;
2. enumerate independent sets by exact elimination;
3. list circuits with full-support kernel vectors;
4. compare rank, closure, and parallel classes across fields;
5. apply only verified row operations or nonzero column scalings;
6. construct a dual matrix by exact nullspace computation;
7. cross-check complementary bases.

The output must name the field in every table. Floating singular-value thresholds can be useful for numerical linear algebra, but they do not prove an exact representability claim.

## 12. Common errors

1. **The field is omitted.** Integer matrices can change matroids modulo a prime.
2. **Equal columns are deduplicated.** Labeled repetitions are parallel elements, not one element.
3. **Any elementary column operation is declared safe.** Column addition can create or destroy circuits.
4. **Circuit support is confused with coefficients.** Matroids retain the support, while field-valued ratios may differ.
5. **Binary is treated as regular.** The Fano matroid separates them.
6. **A zero column is pivoted during contraction.** A loop absorbs no rank; contraction equals deletion.
7. **Numerical near-singularity becomes exact dependence.** Representation is an algebraic field claim.

## Worked dual and minor calculations

### Worked example: a dual matrix with parallel columns present

Over $\mathbb Q$, take
\[
A=\begin{bmatrix}
1&0&1&0&1\\
0&1&0&1&1
\end{bmatrix},
\]
with labels $a,b,c,d,e$ in that order. The pairs $a,c$ and $b,d$ are parallel pairs. The first two columns form an identity basis, so the block construction gives
\[
D=\begin{bmatrix}
-1&0&1&0&0\\
0&-1&0&1&0\\
-1&-1&0&0&1
\end{bmatrix}.
\]
Multiplication gives $AD^T=0$, and the last three columns of $D$ form an identity matrix. Hence the two row spaces have complementary dimensions two and three and are orthogonal.

The basis $\{a,b\}$ of $A$ has complementary basis $\{c,d,e\}$ in $D$. To check a less immediate instance, $\{c,e\}$ is also a basis of $A$. Its complement $\{a,b,d\}$ has determinant $-1$ in $D$, so is a dual basis. In contrast, $\{a,c\}$ is dependent in $A$, and its complementary columns $\{b,d,e\}$ in $D$ all have first coordinate zero and are dependent. The complementary-basis criterion therefore distinguishes a valid basis from a same-sized invalid candidate.

The labels remain fixed throughout. A row-space construction does not merge the parallel columns $a,c$. Their two-element primal circuit becomes a cocircuit in the represented dual. This is an example of duality preserving the ground set while changing the independence structure.

### Worked example: contraction creates a parallel class

Over $\mathbb Q$, consider columns $a=(1,0)$, $b=(0,1)$, $c=(1,1)$ and $d=(1,2)$. Contract $a$. It is already a unit column, so delete its first pivot row and its column. The remaining one-row representation has columns $b=1$, $c=1$, $d=2$. All three are nonzero, hence they are parallel nonloops in the contraction, which is $U(1,3)$.

The original matroid has rank two and every pair of columns is independent. In particular, $a,b,c$ forms a circuit. Contracting $a$ turns that circuit into the pair $\{b,c\}$, consistent with the new repeated columns. The triple $\{b,c,d\}$ is dependent but not a circuit in the contraction because it contains such a pair.

Reading the original integer array over $\mathbb F_2$ changes the answer. The column $d=(1,0)$ is then parallel to $a$, so after contracting $a$ it becomes zero, while $b,c$ remain nonzero and parallel. The contraction is rank one on three labeled elements with one loop, rather than the uniform rank-one matroid. Pivoting uses exact arithmetic in the selected field; the integer display alone does not determine the result.

## Completing two representation arguments

### Counting directions proves the rank-two field bound

**Proposition 12.1 (Uniform rank two over a finite field).** For $n\ge2$, the uniform matroid $U(2,n)$ is representable over $\mathbb F_q$ if and only if $n\le q+1$.

**Proof.** In a rank-two representation, restrict the ambient vector space to the span of all columns and choose coordinates there. Uniformity forbids zero columns and proportional distinct columns, because all singletons and pairs must be independent. The nonzero vectors of $\mathbb F_q^2$ divide into one-dimensional subspaces, each containing exactly $q-1$ nonzero vectors. Distinct such subspaces have no common nonzero vector, so the number of available directions is $(q^2-1)/(q-1)=q+1$. Thus $n\le q+1$ is necessary.

For sufficiency choose any $n$ distinct directions and a nonzero representative column from each. Every pair of representatives is independent, and the ambient space has dimension two. Since $n\ge2$, the full rank is two, and every set with at least three columns is dependent. The independent sets are therefore exactly the subsets of size at most two, giving $U(2,n)$. ∎

One explicit full list of directions is $(1,t)$ for $t\in\mathbb F_q$, together with $(0,1)$. Distinct slopes give determinant differences that are nonzero, and the final direction is independent of every first-coordinate-one column. The argument counts projective directions rather than numerical entries, so scaling a column supplies no additional ground-element direction in a simple rank-two representation.

### Why the incidence matrix is totally unimodular

**Proposition 12.2 (Incidence minor determinants).** Every square submatrix of an oriented graph incidence matrix, including any matrix obtained by deleting rows, has determinant $0$, $1$ or $-1$ over the integers.

**Proof.** Induct on the order of the square submatrix. The empty determinant is one. If a column has no nonzero entry, the determinant is zero. If a column has exactly one nonzero entry, that entry is $1$ or $-1$, and expansion along the column reduces to a smaller square submatrix; induction gives the assertion.

Otherwise every column has two nonzero entries. They must be the $1$ and $-1$ from the two endpoints of a nonloop edge. The sum of all rows of the submatrix is therefore zero, making its determinant zero. Graph-loop columns are zero and were already covered by the first case. These alternatives exhaust all columns of an incidence matrix, completing induction. ∎

This supplies the integer determinant claim behind total unimodularity. It also explains why the argument is stronger than numerical nonsingularity over one field: every nonzero integer minor is a unit in every field. The elementary forest argument above already proves regularity directly, while the determinant statement records an additional useful matrix property.

The field hierarchy at the end of the chapter remains a hierarchy of existence claims. One matrix working over several fields is a stronger piece of data than separate unrelated representations over those fields. Conversely the existence of a representation does not require that every integer array displaying the same labels work in every characteristic. The examples keep those statements separate rather than treating all failures as floating-point sensitivity.

## 13. Solved exercises

<a id="linear-representability-fields-ex-1"></a>
### Exercise 1: compare two characteristics

For the four columns $v_1,\ldots ,v_4$ in Section 4, list the circuits over characteristic not two and over characteristic two.


<details><summary>Hint 1</summary>

First decide which pairs have nonzero determinants in the stated characteristic.

</details>

<details><summary>Hint 2</summary>

In characteristic two, identify the repeated columns before classifying any three-element set as minimal.

</details>

<details><summary>Solution</summary>

**Solution.** When characteristic is not two, every pair is independent and ambient rank is two, so all four three-element subsets are circuits. In characteristic two, $v_3=v_4$, giving circuit $\{v_3,v_4\}$. The triples $\{v_1,v_2,v_3\}$ and $\{v_1,v_2,v_4\}$ are minimally dependent. Any triple containing both $v_3,v_4$ contains the smaller parallel circuit and is not minimal. These are all circuits.

</details>

<a id="linear-representability-fields-ex-2"></a>
### Exercise 2: show a column operation is unsafe

Over any field, start with $a=(1,0)$, $b=(0,1)$, $c=(1,1)$. Replace $c$ by $c-a$. Compare the matroids.


<details><summary>Hint 1</summary>

Compute the replacement column explicitly.

</details>

<details><summary>Hint 2</summary>

A newly repeated nonzero column creates a two-element circuit.

</details>

<details><summary>Solution</summary>

**Solution.** Originally every pair is independent, so the matroid is $U(2,3)$. The new third column is $(0,1)=b$; indexed columns $b,c$ are parallel and form a two-element circuit. Thus replacing one column by itself minus another is not a matroid-preserving operation, even though it resembles Gaussian elimination performed on columns.

</details>

<a id="linear-representability-fields-ex-3"></a>
### Exercise 3: ternary obstruction for $U(2,5)$

Can $U(2,5)$ be represented over $F_3$? Justify without checking all matrices.


<details><summary>Hint 1</summary>

Count one-dimensional directions rather than individual nonzero vectors.

</details>

<details><summary>Hint 2</summary>

Divide the number of nonzero vectors in a two-dimensional space by the number of nonzero scalars.

</details>

<details><summary>Solution</summary>

**Solution.** A simple rank-two representation needs five distinct one-dimensional directions. The projective line over $F_3$ has $3+1=4$ directions. Five nonzero columns force two to be scalar multiples, creating a parallel pair forbidden in $U(2,5)$. Therefore no representation exists. Over a field with at least four elements, the direction count no longer gives this obstruction.

</details>

<a id="linear-representability-fields-ex-4"></a>
### Exercise 4: incidence representation of a triangle

Orient triangle edges $12,23,31$, write its incidence matrix after deleting row $3$, and find its circuit dependence.


<details><summary>Hint 1</summary>

Give each oriented edge one negative tail entry and one positive head entry.

</details>

<details><summary>Hint 2</summary>

After deleting a row, sum the three columns and inspect the determinants of pairs.

</details>

<details><summary>Solution</summary>

**Solution.** With orientations $1\to 2$, $2\to 3$, $3\to 1$, the reduced columns in rows $1,2$ are

$12=(-1,1)$, $23=(0,-1)$, $31=(1,0)$.

Their sum is zero. Every pair has determinant $\pm 1$, so every pair is independent over every field. Thus the three edges form a circuit, exactly the graph cycle. In characteristic two, $-1=1$, but the three-column sum remains zero.

</details>

<a id="linear-representability-fields-ex-5"></a>
### Exercise 5: construct a dual representation

Over a field $F$, let $A=[I_2 | N]$ with $N$ a $2\times 2$ matrix. Give a matrix representing the dual and explain the complementary bases.


<details><summary>Hint 1</summary>

Find a full-row-rank matrix orthogonal to the displayed row space.

</details>

<details><summary>Hint 2</summary>

The identity block on complementary columns supplies one basis; row reduction gives the same argument for every basis.

</details>

<details><summary>Solution</summary>

**Solution.** Take $D=[-N^T | I_2]$. Multiplying $A$ by $D^T$ gives $-N+N=0$, so the row spaces are orthogonal complements; both have rank two in $F^4$. The first two columns are a basis of $A$, while the complementary last two columns form the identity basis of $D$. The same block-minor relation after any basis column permutation shows that every basis of $D$ is the complement of a basis of $A$, so $D$ represents the dual.

</details>

<a id="linear-representability-fields-ex-6"></a>
### Exercise 6: a general characteristic-sensitive determinant

For a positive prime $p$, use columns $(1,0)$, $(0,1)$ and $(1,p)$. Compare the resulting circuits over $\mathbb Q$ and over $\mathbb F_p$.

<details><summary>Hint 1</summary>

Check the determinant of the first and third columns.

</details>
<details><summary>Hint 2</summary>

Reduction makes the third column equal to the first, but neither becomes zero.

</details>
<details><summary>Solution</summary>

Over $\mathbb Q$ every pair is independent, so the three-element set is the unique circuit. Over $\mathbb F_p$ the first and third columns both equal $(1,0)$, giving a parallel-pair circuit. The second column remains independent of either. The full triple contains that pair and is not minimal. This exhibits field dependence at any chosen prime, rather than only characteristic two.

</details>

<a id="linear-representability-fields-ex-7"></a>
### Exercise 7: represent a uniform matroid by directions

Give a representation of $U(2,5)$ over $\mathbb F_5$ and prove that it has no parallel pair.

<details><summary>Hint 1</summary>

Choose five distinct projective directions.

</details>
<details><summary>Hint 2</summary>

The columns $(1,t)$ with $t=0,1,2,3,4$ already suffice.

</details>
<details><summary>Solution</summary>

Use the five columns $(1,0),(1,1),(1,2),(1,3),(1,4)$. Two columns with distinct second coordinates have determinant equal to their nonzero difference in $\mathbb F_5$, so every pair is independent. The ambient rank is two, making every triple dependent. Therefore the represented independent sets are exactly those of $U(2,5)$, with no loop or parallel pair.

</details>

<a id="linear-representability-fields-ex-8"></a>
### Exercise 8: pivot a nonunit column

Over $\mathbb Q$, contract $c=(1,1)$ in the three-column configuration $a=(1,0)$, $b=(0,1)$, $c=(1,1)$ by explicit row operations.

<details><summary>Hint 1</summary>

Apply the invertible map $(x,y)\mapsto(x,y-x)$.

</details>
<details><summary>Hint 2</summary>

The contracted column becomes $(1,0)$, after which its row and column can be removed.

</details>
<details><summary>Solution</summary>

The transformed columns are $a=(1,-1)$, $b=(0,1)$ and $c=(1,0)$. Delete column $c$ and the first pivot row, leaving the one-row columns $a=-1$, $b=1$. They are nonzero and proportional, so the contraction is $U(1,2)$ and its two retained elements form a circuit. This agrees with shrinking the original three-element circuit by the contracted label.

</details>

<a id="linear-representability-fields-ex-9"></a>
### Exercise 9: regularity passes to duals

Using orthogonal-complement representations, prove that the dual of a regular matroid is regular.

<details><summary>Hint 1</summary>

Fix one arbitrary field rather than trying to find one universal matrix.

</details>
<details><summary>Hint 2</summary>

Regularity supplies a representation in that field, and the dual construction stays in the same field.

</details>
<details><summary>Solution</summary>

Let $F$ be any field. Since $M$ is regular, it has an $F$-representation. Remove dependent rows to obtain full row rank and take a matrix whose row space is its orthogonal complement in $F^E$. The complementary-basis theorem says that this matrix represents $M^*$ over $F$. Since the field was arbitrary, $M^*$ is representable over every field and is regular. Rank-zero and full-rank cases are included using zero-row or full-identity complementary matrices.

</details>

<a id="linear-representability-fields-ex-10"></a>
### Exercise 10: labels distinguish a parallel pair from one element

Take columns $a=(1,0)$, $a'=(2,0)$ and $b=(0,1)$ over $\mathbb Q$. List the bases and explain why deleting $a'$ preserves matrix rank but changes the matroid.

<details><summary>Hint 1</summary>

A basis chooses one column from each of two directions.

</details>
<details><summary>Hint 2</summary>

The labeled parallel pair is a circuit that disappears when one label is removed.

</details>
<details><summary>Solution</summary>

The bases are $\{a,b\}$ and $\{a',b\}$. The pair $\{a,a'\}$ is a circuit, and $b$ is a coloop. Deleting $a'$ leaves two independent columns, so matrix rank remains two, but the ground size drops from three to two and the parallel circuit disappears. The resulting matroid is $U(2,2)$ and cannot be isomorphic to the original three-element matroid.

</details>

## Chapter summary

A matrix over a named field represents a matroid through indexed column independence. Matrix rank, span, and minimal kernel support realize matroid rank, closure, and circuits. Row operations, common invertible left transformations, nonzero column scalings, and labeled permutations preserve the matroid; column addition generally does not. Characteristic changes can alter determinants and circuit supports, as $U(2,4)$ and the Fano configuration demonstrate. Graphic and cographic matroids are regular through incidence representations. Orthogonal row spaces represent duals, while pivots model contraction. Representability remains extra structure: some matroids restrict the field, and others have no field representation at all.


<a id="linear-representability-fields-summary"></a>
## Summary

Representations attach exact linear data to labeled elements over a specified field. Worked dual matrices and pivots make complementary bases and contraction concrete, while direction counts prove the finite-field rank-two limit. Incidence-minor induction proves total unimodularity and supports the regularity of graphic and cographic matroids. Field-sensitive examples retain the distinction between a changed integer array, a changed characteristic, and the existence of any representation at all.

