
# Modules over PIDs and Smith Normal Form

## Vector spaces without division

A vector space over a field $F$ is an abelian group $V$ with a scalar multiplication $F \times V \to V$ satisfying natural compatibility laws. If we replace the field $F$ by a ring $R$, we obtain a **module**. Modules are the natural setting for linear algebra over rings such as $\mathbb{Z}$ and polynomial rings, and the structure theorem for finitely generated modules over a PID is one of the most powerful classification results in algebra.

## Definition and examples

Let $R$ be a ring. A **left $R$-module** is an abelian group $(M, +)$ together with a scalar multiplication $R \times M \to M$, written $(r, m) \mapsto r \cdot m$, satisfying:

1. $r \cdot (m_{1} + m_{2}) = r \cdot m_{1} + r \cdot m_{2}$,
2. $(r_{1} + r_{2}) \cdot m = r_{1} \cdot m + r_{2} \cdot m$,
3. $(r_{1} r_{2}) \cdot m = r_{1} \cdot (r_{2} \cdot m)$,
4. $1 \cdot m = m$ if $R$ has unity $1$.

**Examples.**
- Every vector space over a field $F$ is an $F$-module.
- Every abelian group $A$ is a $\mathbb{Z}$-module with $n \cdot a = a + \dots + a$ ($n$ times) for $n > 0$.
- If $R$ is a ring and $I$ is an ideal, then $I$ is an $R$-module, and so is $R/I$.
- For a field $F$, the polynomial ring $F[x]$ acts on $F^{n}$ by letting $x$ act as a fixed $n \times n$ matrix $A$. This makes $F^{n}$ into an $F[x]$-module.

## Submodules, homomorphisms, and quotients

A **submodule** $N \subseteq M$ is a subgroup closed under scalar multiplication by $R$. The **quotient module** $M/N$ is the quotient abelian group with scalar multiplication $r \cdot (m + N) = (r \cdot m) + N$.

An **$R$-module homomorphism** $\varphi : M \to N$ is a group homomorphism satisfying $\varphi(r \cdot m) = r \cdot \varphi(m)$. The first isomorphism theorem for modules states that $M / \ker(\varphi) \cong \operatorname{im}(\varphi)$.

## Free modules and rank

A module $M$ is **free** if it has a basis: a linearly independent generating set. Unlike vector spaces, not every module is free. For example, $\mathbb{Z}/2\mathbb{Z}$ is a $\mathbb{Z}$-module with no basis: every element satisfies $2 \cdot m = 0$, so no singleton is linearly independent over $\mathbb{Z}$.

However, over a PID, submodules of free modules are free. This is a foundational step toward the structure theorem.

**Theorem 6.3.** Let $R$ be a PID and $F$ a free $R$-module of finite rank $n$. Then every submodule of $F$ is free of rank at most $n$.

## The structure theorem

Let $R$ be a PID and $M$ a finitely generated $R$-module. Then there exist unique ideals $(d_{1}) \supseteq (d_{2}) \supseteq \dots \supseteq (d_{k})$ with $d_{i} \neq 0$ and $d_{i} \nmid 1$ for all $i$, and a non-negative integer $r$, such that

$$M \cong R^{r} \oplus R/(d_{1}) \oplus R/(d_{2}) \oplus \dots \oplus R/(d_{k}).$$

The integer $r$ is the **free rank** (or Betti number) of $M$, and the elements $d_{1}, \dots, d_{k}$ are the **invariant factors**. Uniqueness means that if another decomposition yields ideals $(d'_{1}) \supseteq \dots \supseteq (d'_{k'})$, then $k = k'$ and $(d_{i}) = (d'_{i})$ for all $i$.

**Special case: abelian groups.** Taking $R = \mathbb{Z}$, every finitely generated abelian group is

$$\mathbb{Z}^{r} \oplus \mathbb{Z}/d_{1}\mathbb{Z} \oplus \dots \oplus \mathbb{Z}/d_{k}\mathbb{Z}$$

with $d_{1} \mid d_{2} \mid \dots \mid d_{k}$. This is the familiar classification theorem.

**Worked example.** Classify the $\mathbb{Z}$-module $M = \mathbb{Z}^{2} / \langle (2, 2), (4, 6) \rangle$.

**Solution.** Form the relation matrix

$$A = \begin{pmatrix} 2 & 4 \\ 2 & 6 \end{pmatrix}.$$

Compute the Smith normal form. Subtract row $1$ from row $2$: $\begin{pmatrix} 2 & 4 \\ 0 & 2 \end{pmatrix}$. Subtract $2 \times$ column $1$ from column $2$: $\begin{pmatrix} 2 & 0 \\ 0 & 2 \end{pmatrix}$. The invariant factors are $2$ and $2$, so $M \cong \mathbb{Z}/2\mathbb{Z} \oplus \mathbb{Z}/2\mathbb{Z}$.

## Smith normal form computationally

For a matrix $A$ over a PID $R$, the Smith normal form is a diagonal matrix $\operatorname{diag}(d_{1}, \dots, d_{r}, 0, \dots, 0)$ with $d_{i} \mid d_{i+1}$, obtained by elementary row and column operations:

- swap two rows or two columns;
- add a multiple of one row (column) to another;
- multiply a row (column) by a unit.

Over $\mathbb{Z}$, the Euclidean algorithm lets us reduce entries iteratively until the matrix is diagonal. The diagonal entries are the invariant factors.

## Common errors

- **Assuming every module has a basis.** This is false even for finitely generated modules over PIDs; the torsion summand $R/(d)$ has no basis.
- **Treating rank as basis size over every ring.** Over an integral domain $R$ with fraction field $K$, a module has rank $\dim_K(K\otimes_R M)$ when this dimension is defined; a torsion module has rank zero and need not be trivial. For a free module this agrees with the size of a basis. Over more general rings, several inequivalent rank notions occur and must be declared.
- **Confusing invariant factors with elementary divisors.** The invariant factor decomposition chains divisibilities. The elementary divisor decomposition splits each $R/(d_{i})$ further into prime-power cyclic summands. Both are valid, but they are different canonical forms.

## Submodules of finite free modules: a proof

The following argument supplies the freeness result stated above. It uses a PID, not an arbitrary ring. A finite generating set for a module over a general ring need not produce a free relation module.

**Theorem 6.1.** If R is a PID and N⊆Rⁿ, then N is free of rank at most n and is finitely generated.

*Proof.* Induct on n, with n=0 immediate. Project N to the last coordinate. Its image is an ideal, hence dR for some d∈R. The projection kernel N₀ lies in R^(n−1), so has a finite free basis by induction. If d=0, N=N₀ and we are done. If d≠0, choose v∈N with last coordinate d. For any w∈N, its last coordinate is ad for some a, and w−av belongs to N₀. Thus N=N₀+Rv. The sum is direct because av∈N₀ implies ad=0, and the domain property with d≠0 gives a=0. Adjoining v to the kernel basis therefore gives a free basis of size at most n. ∎

In particular, a finitely generated module M has a finite presentation: choose a surjection Rᵐ→M, take a basis of its free finite-rank kernel and write those relation vectors as columns of a matrix A. Then M≅Rᵐ/im A. The matrix has m rows because relations live in the ambient generator module. Transposing it without changing the convention would generally present a different cokernel.

## Smith form: existence and exact transformations

**Theorem 6.2 (Smith normal form).** For a matrix A over a PID R, there are invertible matrices U,V over R such that
$$UAV=D=\operatorname{diag}(d_1,\ldots,d_r,0,\ldots),\qquad d_i\mid d_{i+1},$$
with every d_i nonzero. Over Z they can be chosen positive. The generated ideals (d_i) are uniquely determined.

*Existence proof.* Move a nonzero entry of the remaining block into its upper-left position, called d. A pair of entries a,b in its pivot column can be replaced by their gcd using Bézout: if sa+tb=g, the two-row transformation
$$\begin{pmatrix}s&t\\-b/g&a/g\end{pmatrix}$$
has determinant one and sends that column pair to (g,0). An analogous column transformation handles a pivot-row pair. When a nondividing entry is used, the pivot ideal strictly enlarges from (d) to its gcd ideal.

A PID has no infinite strictly ascending ideal chain. To prove this directly, the union of an ascending chain is an ideal, hence generated by some a. That generator lies in one member of the chain, which then contains the whole union; the chain has stabilised. Thus the repeated strict pivot-ideal enlargements terminate.

Once the pivot divides every entry in its row and column, clear those entries by multiples of the pivot row or column. If an interior entry b is not divisible by d, add its row to the pivot row. This exposes b beside the pivot without changing the pivot itself, permitting another gcd reduction with strictly larger pivot ideal. Therefore the process eventually reaches a pivot dividing every entry of the whole remaining block. Clear its row and column and recurse inside the smaller block.

All entries left in that block are multiples of d, and operations within it preserve that property. Consequently its next Smith pivot is a multiple of d, giving the divisibility chain. If the remaining block is zero, stop. Each step is invertible over R, so collecting row operations in U and column operations in V gives the displayed equation. Over Z, multiplying a row by −1 makes a nonzero pivot positive. ∎

For effective computation, this proof is used over Euclidean domains such as Z and k[x], where the gcd and Bézout coefficients can be found by an algorithm. A bare abstract PID does not by itself specify an executable gcd oracle or a preferred normalisation of associates.

**Worked example 6.3 (One Bézout row step).** For the integer matrix with rows (6,4) and (4,4), take s=1,t=−1,g=2. The transformation matrix has rows (1,−1) and (−2,3), with determinant one. Applying it gives rows (2,0) and (0,4). Thus U A=diag(2,4), already a valid Smith form. Dividing the first row by two instead would not be an invertible integer operation and would change the quotient module.

An inert reference fragment records the transformation without overwriting a row needed by the other new row:

```text
bezout_row_step(A, U, i, j, pivot_column):
    a = A[i, pivot_column]
    b = A[j, pivot_column]
    require a != 0 or b != 0
    g, s, t = extended_gcd(a, b)
    require g > 0 and s*a + t*b == g
    old_i, old_j = copies of rows i and j of A
    old_ui, old_uj = copies of rows i and j of U
    A[i] = s*old_i + t*old_j
    A[j] = -(b/g)*old_i + (a/g)*old_j
    U[i] = s*old_ui + t*old_uj
    U[j] = -(b/g)*old_ui + (a/g)*old_uj
```

The quotients a/g and b/g here are exact integers. Their integrality and the Bézout identity prove the determinant-one property. A full routine combines such steps with swaps, exact clearing, interior-entry checks and a column accumulator V. This is a mathematical program example; no execution is claimed.

## Determinantal ideals prove uniqueness

**Proposition 6.4.** Let Δ_k(A) be the ideal generated by all k-by-k minors, with Δ₀=R. Invertible elementary row and column operations preserve every Δ_k. For Smith form,
$$\Delta_k(A)=(d_1\cdots d_k)\quad(1\le k\le r),$$
and Δ_k=0 for k>r. Thus the nonzero Smith ideals are unique.

*Proof.* Under a row addition, each new minor is either unchanged or a linear combination of old minors, by determinant multilinearity; a repeated selected row contributes zero. Swaps change signs and unit row scalings multiply relevant minors by units. This gives one ideal containment, and applying the inverse operation gives the other. Column operations work the same way.

For the diagonal form, every nonzero k-minor is a product of k selected diagonal entries. The divisibility chain makes it divisible by d₁⋯d_k, and selecting the first k diagonal positions gives exactly that product. For k>r every minor vanishes. Consequently successive nonzero determinantal ideals determine the ideal of each d_k by cancellation in the domain, proving uniqueness up to units. ∎

**Worked example 6.5 (A diagonal matrix can need more work).** The diagonal diag(2,3) is not Smith form because two does not divide three. Add the second row to the first to get rows (2,3),(0,3). Subtract the first column from the second, then swap columns, giving rows (1,2),(3,0). Subtract three times the first row from the second and clear the upper-right entry by a column operation. The result is diag(1,−6); normalising the sign gives diag(1,6). Therefore Z/2⊕Z/3≅Z/6, consistent with Chinese remainders. The determinantal ideals also predict this result: the entry gcd is one and the full determinant has absolute value six.

## Cokernels, free directions and classification

Because U is an ambient automorphism and V only changes relation generators, Rᵐ/im A is isomorphic to Rᵐ/im D. Hence it is the direct sum of the nontrivial R/(d_i) terms and a free module of rank m−r. Unit diagonal entries contribute zero summands, not copies of R.

**Worked example 6.6 (A rectangular relation matrix).** Let A have rows (2,4,6) and (0,0,0). Clearing the second and third columns by multiples of the first gives D with rows (2,0,0),(0,0,0). Its cokernel is Z/2⊕Z, with one torsion direction and one free direction. Its kernel, in the three-dimensional source, instead has basis (−2,1,0),(−3,0,1). These are different modules on opposite sides of the same map. Counting zero columns as free cokernel directions would confuse source and target dimensions.

The structure theorem's uniqueness can also be read intrinsically from the module. Its torsion subgroup consists of elements killed by some nonzero scalar, and its remaining free rank is determined after extending scalars to the fraction field. Factor torsion invariant factors into prime powers, using that a PID is a UFD. Chinese remainders split each coprime product into its prime-power components.

For a prime p, the p-primary torsion component T_p is intrinsic. The quotient p^(j−1)T_p/pʲT_p is a vector space over R/(p), and its dimension is the number of cyclic p-power summands whose exponent is at least j. Consecutive differences recover the number of summands of each exact exponent. Aligning each prime's exponent lists in increasing order recovers the invariant factors with d_i dividing d_i₊₁. Thus neither a different presentation nor different Euclidean choices change the classified module.

For integer matrices, |det A| gives the order of a finite square full-rank cokernel, but not its group structure. The two matrices diag(1,4) and diag(2,2) both have determinant four, while their cokernels are C₄ and C₂×C₂. Smith factors retain the missing information. For rectangular matrices or rank-deficient square matrices, a free summand remains and a determinant alone cannot even encode the full size question.

## Finite quotient sizes recover integer invariants

There is another way to recover the primary exponents without first isolating the torsion subgroup. Let M be a finitely generated integer module of free rank f, and fix a prime p. Each quotient M/p^kM is finite. Write its size as p raised to the integer a_k, with a₀=0. Smith classification gives
$$a_k=fk+\sum_i\min(k,v_p(d_i)).$$
Indeed a free integer summand contributes p^k residues. For a cyclic summand Z/d, quotienting by its p^k multiples gives a cyclic group of order gcd(d,p^k): the relevant subgroup is generated by d and p^k in Z. Coprime parts of d therefore disappear and the displayed minimum counts the surviving p-part. Multiplying the sizes of the direct-summand quotients proves the formula.

The difference a_k−a_(k−1) is f plus the number of primary exponents at least k. These differences eventually stabilise at f. Subtracting successive differences gives the number of exponents equal to each positive integer. Thus quotient sizes determine the free rank and the entire p-primary torsion list. A single reduction modulo p retains only the first difference and cannot distinguish longer exponent profiles.

For example M=Z⊕Z/4⊕Z/8 has a₁=3, a₂=6, a₃=8 and a₄=9 when p=2. The successive increments are three, three, two and one, and remain one thereafter. They recover free rank one, two torsion exponents at least two, one at least three, and none at least four. Hence the exponents are precisely two and three. Replacing Z/8 by Z/16 leaves the first three increments unchanged and changes the fourth. This shows exactly why several levels of congruence information may be needed to recover an integer module from finite linear calculations.

The eventual increment can be recognised from an existing rank certificate over Q. That independently known free rank distinguishes a remaining long torsion exponent from a permanently free direction; a finite initial list of quotient sizes alone need not distinguish those possibilities.

Smith form also predicts exactly which primes change a matrix's rank. For an integer matrix of rational rank r, reduce its unimodular transformations modulo p. Their determinants remain nonzero, so they stay invertible. The reduced rank is therefore the number of its r nonzero Smith factors not divisible by p. Every factor divisible by p contributes one extra modular null direction compared with the rational nullity. The exponents of those prime factors remain invisible at this single level, consistent with the successive-quotient analysis above. In particular a modular rank defect records divisibility information about the integer cokernel and is not evidence that the rational elimination rank was incorrect.

## Practice exercises

### Exercise 1

Let $R$ be a ring with unity and $M$ a unital left $R$-module. Prove that evaluation at $1$ gives an isomorphism of abelian groups $\operatorname{Hom}_{R}(R, M) \cong M$. When $R$ is commutative, show it is also an $R$-module isomorphism.

<details>
<summary>Hint</summary>

A left-linear map out of R is forced by its value on one.

</details>

<details>
<summary>Solution</summary>

Define $\Phi(\varphi)=\varphi(1)$. It is additive. If $\varphi(1)=0$, then $\varphi(r)=r\varphi(1)=0$, so it is injective. For $m\in M$, the map $\varphi_m(r)=rm$ is left $R$-linear and evaluates to $m$, so it is surjective. When $R$ is commutative, $(r\varphi)(s)=r\varphi(s)$ defines the usual left $R$-module structure on the Hom group and makes $\Phi$ linear.

</details>

### Exercise 2

Find the Smith normal form of $\begin{pmatrix} 6 & 4 \\ 4 & 4 \end{pmatrix}$ over $\mathbb{Z}$ and classify the quotient module.

<details>
<summary>Hint</summary>

Use row subtraction to expose the gcd two, then clear the remaining entry.

</details>

<details>
<summary>Solution</summary>

Subtract row $2$ from row $1$: $\begin{pmatrix} 2 & 0 \\ 4 & 4 \end{pmatrix}$. Subtract $2 \times$ row $1$ from row $2$: $\begin{pmatrix} 2 & 0 \\ 0 & 4 \end{pmatrix}$. Now $2 \mid 4$, so this is already Smith normal form. The quotient is $\mathbb{Z}/2\mathbb{Z} \oplus \mathbb{Z}/4\mathbb{Z}$.

</details>

### Exercise 3

Show that $\mathbb{Q}$ is not a free $\mathbb{Z}$-module.

<details>
<summary>Hint</summary>

An independent set cannot contain zero or two nonzero rational numbers; a singleton spans only one cyclic subgroup.

</details>

<details>
<summary>Solution</summary>

Suppose $\mathbb{Q}$ had a basis $\{q_{i}\}$. Any two rational numbers $a/b$ and $c/d$ satisfy $(bc)(a/b) - (ad)(c/d) = 0$, a non-trivial $\mathbb{Z}$-linear relation. Thus no subset of $\mathbb{Q}$ with more than one element is linearly independent over $\mathbb{Z}$. A singleton basis $\{q\}$ would generate only $q\mathbb{Z}$, which is not all of $\mathbb{Q}$. Hence $\mathbb{Q}$ is not free.

</details>

### Exercise 4

Let $A = \begin{pmatrix} 3 & 1 \\ 1 & 3 \end{pmatrix}$ and view $\mathbb{Z}^{2}$ as a $\mathbb{Z}[x]$-module where $x$ acts as $A$. Give a cyclic presentation of this module by direct row-and-column relations.

<details>
<summary>Hint</summary>

Use the unit coefficient −1 to eliminate one generator; do not invoke a PID theorem for Z[x].

</details>

<details>
<summary>Solution</summary>

The relations are $(x-3)e_1-e_2=0$ and $-e_1+(x-3)e_2=0$. The first gives $e_2=(x-3)e_1$. Substitution into the second gives

$[-1+(x-3)^2]e_1=(x^2-6x+8)e_1=(x-2)(x-4)e_1=0$.

Conversely these formulas define both generators and both original relations from the one generator $e_1$. Hence $M\cong\mathbb{Z}[x]/((x-2)(x-4))$. This argument uses the unit coefficient $-1$ directly; it does not invoke Smith normal form or a Euclidean algorithm over $\mathbb{Z}[x]$, which is not a PID.

</details>

### Exercise 5 — Diagonal is not always Smith
<a id="finite-smith-ex-5"></a>

Find Smith form and cokernel of diag(2,3) over Z.

<details>
<summary>Hint</summary>

Use the entry gcd and determinant, or the full operations in the text.

</details>

<details>
<summary>Solution</summary>

The first determinantal divisor is gcd(2,3)=1 and the second is six. Thus the Smith factors are one and six, giving diag(1,6) up to units. The cokernel is Z/6, since the unit factor contributes the zero module. The text gives explicit unimodular operations establishing existence for this matrix.

</details>

### Exercise 6 — A rectangular cokernel
<a id="finite-smith-ex-6"></a>

Classify Z² modulo the span of the columns (2,0),(4,0),(6,0).

<details>
<summary>Hint</summary>

Only the first target coordinate receives relations.

</details>

<details>
<summary>Solution</summary>

The column subgroup is {(2a,0):a∈Z}, since the gcd of two,four,six is two. The quotient is therefore Z/2 in the first coordinate and a free Z in the second, giving Z/2⊕Z. Three source columns do not create three target quotient directions.

</details>

### Exercise 7 — A nonunimodular operation
<a id="finite-smith-ex-7"></a>

Why can dividing an integer row by two change the presented module?

<details>
<summary>Hint</summary>

Compare the one-entry matrices [2] and [1].

</details>

<details>
<summary>Solution</summary>

The cokernel of [2] is Z/2, while the cokernel of [1] is zero. Division by two would change the first presentation to the second, so it is not an allowed ambient automorphism over Z. Its multiplier one-half is not an integer unit. Over Q the same operation is invertible, which illustrates why the coefficient ring must be fixed.

</details>

### Exercise 8 — A determinant loses structure
<a id="finite-smith-ex-8"></a>

Give two nonisomorphic integer cokernels with order four.

<details>
<summary>Hint</summary>

Compare Smith factors one,four and two,two.

</details>

<details>
<summary>Solution</summary>

The cokernels of diag(1,4) and diag(2,2) are C₄ and C₂×C₂. Both have four elements, but the first has an element of order four and the second does not. Their equal determinants therefore do not determine the isomorphism class; the Smith factors do.

</details>

### Exercise 9 — Certifying a Bézout step
<a id="finite-smith-ex-9"></a>

For a=6,b=4 and s=1,t=−1, compute the two-row transformation and its determinant.

<details>
<summary>Hint</summary>

Use g=2 in the displayed formula.

</details>

<details>
<summary>Solution</summary>

The transformation is [[1,−1],[−2,3]], with determinant 3−2=1. It sends the pivot pair (6,4) to (2,0). Being determinant one, it is invertible over Z, so it preserves the presented module when applied as a row operation to the entire relation matrix.

</details>

### Exercise 10 — Recovering primary sizes
<a id="finite-smith-ex-10"></a>

If a finite p-primary Z-module has dim_(F_p)(p^(j−1)T/p^jT) equal to 3,2,1,0 for j=1,2,3,4, determine its cyclic prime-power summands.

<details>
<summary>Hint</summary>

Take consecutive differences to count exact exponents.

</details>

<details>
<summary>Solution</summary>

There are 3−2=1 summands of exponent one, 2−1=1 of exponent two and 1−0=1 of exponent three. Thus T≅Z/p⊕Z/p²⊕Z/p³. The filtration dimensions count summands at least as long as each stage, and their differences recover exact lengths.

</details>

## Summary

Finite free modules over a PID have free finite relation modules. Unimodular row and column operations turn those relations into Smith form; determinantal ideals prove its invariant factors are unique. Cokernels separate torsion from free target directions, while kernels belong to the source. Effective algorithms use a specified Euclidean domain and exact Bézout steps. The next chapter returns to finite groups represented by permutations and stabiliser chains.
