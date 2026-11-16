var e=`---
parent_id: book-finite-algebra-computation
chapter_id: linear-algebra-finite-fields
title: "Linear Algebra over Finite Fields"
level: graduate
status: draft
license: CC BY-SA 4.0
---

# Linear Algebra over Finite Fields

Elimination over a finite field uses the same linear identities as elimination over the rationals, but its arithmetic and evidence are different from floating-point calculation. Every nonzero pivot is invertible, no pivot is “nearly zero”, and a kernel basis can describe a large solution set without enumerating its elements.

Read [finite-field construction and arithmetic](finite-fields-construction-arithmetic.md), together with bases, kernels and rank–nullity from [linear algebra](/books/library-book-linear-algebra-structure-proofs/). Every matrix below has entries in one specified finite field k=F_q. Dimensions are positive unless a zero space is explicitly mentioned. Matrices whose coefficients use incompatible field presentations must first be transported by a specified field isomorphism.

## 1. Row operations are invertible maps

For A∈k^(m×n), its columns describe a linear map kⁿ→kᵐ. Its row space is a subspace of kⁿ and its image is a subspace of kᵐ. Those are different ambient spaces even when m=n.

**Definition 4.1.** An elementary row operation swaps two rows, multiplies one row by a nonzero field scalar, or adds a scalar multiple of one row to a different row. Each is multiplication on the left by an invertible m-by-m elementary matrix.

The inverse operations are respectively the same swap, multiplication by the reciprocal scalar, and addition of the negative multiple. This holds in characteristic two as well: the negative scalar may equal the original scalar, but the operation is still invertible.

**Theorem 4.2 (Equation preservation).** Applying the same row operations to A and b preserves the solution set of Ax=b. A complete operation sequence gives R=UA and c=Ub for an invertible U, so Ax=b exactly when Rx=c.

*Proof.* Each operation is multiplication by an invertible elementary matrix. Their product U is invertible, and multiplying Ax=b by U gives the transformed equation. Multiplying the transformed equation by U⁻¹ gives the original. Thus both implications hold. ∎

A row operation changes individual columns as vectors of kᵐ, so it does not preserve the literal image subspace. It preserves the relations among columns and the equation's solution set when b is transformed with it. This distinction prevents an incorrect claim that the computed echelon columns themselves are the original image basis.

## 2. A terminating reduction algorithm

At stage r, scan columns to the right of the preceding pivot until a nonzero entry appears in rows r,…,m−1. Move it to row r, multiply that row by its inverse, then clear the pivot column in every other row. If no such entry remains, reduction is finished. Each new pivot advances both the row count and the pivot column, so at most min(m,n) pivots occur.

An inert reference program, using abstract exact field operations, is:

\`\`\`text
reduce_system(A, b, field):
    require A is rectangular and all entries belong to field
    require length(b) equals the number of rows
    R, c = copies of A, b
    pivots, operations = empty lists
    r = 0
    for j in 0 .. number_of_columns-1:
        find i >= r with R[i,j] != field.zero
        if no such i exists: continue
        swap rows i and r in both R and c; record the swap
        u = field.inverse(R[r,j])
        scale row r and c[r] by u; record the scale
        for i different from r:
            t = R[i,j]
            add -t times row r to row i in both R and c
            record the addition
        append j to pivots
        r = r + 1
        if r equals number_of_rows: break
    return R, c, pivots, operations
\`\`\`

This example does not execute itself and makes no claim of an observed run. Its \`field.inverse\` is the operation proved correct in the preceding chapter; substituting ordinary integer division would change the mathematics. If the field is a prime field F_p, one can use a Bézout inverse modulo p, or a^(p−2) for nonzero a by Fermat’s theorem. The primality of p must already be established.

**Proposition 4.3 (Reduction invariant).** Before each pivot stage, the earlier pivot columns equal distinct standard coordinate columns, and all earlier pivot positions lie strictly to the left of the next selected column. The algorithm preserves row equivalence and returns reduced row echelon form.

*Proof.* Initially there are no pivots. A new pivot is chosen only in the remaining rows and later columns. Earlier pivot columns are zero in those rows, so swapping and scaling within the remaining rows do not change them. Clearing the new pivot column by adding the new row also preserves earlier pivot columns because that row has zeros there. The new pivot is one and its column is zero elsewhere. Induction establishes the invariant. At termination no nonzero row remains below the pivots, since otherwise its first nonzero column would have supplied another pivot. All required reduced-echelon properties follow. ∎

With r pivots, full-row clearing uses O(mnr) field operations, plus a lower-order pivot search. A copy of the matrix uses O(mn) field elements. Recording elementary operations avoids always storing a dense m-by-m certificate matrix; if that matrix is requested, one can replay the operations on I_m and account separately for its storage and work.

## 3. Why the reduced form is unique

**Theorem 4.4 (Uniqueness of reduced row echelon form).** For a fixed matrix size, its row space over any field determines exactly one reduced row echelon matrix after zero rows are placed at the bottom.

*Proof.* Let the nonzero reduced rows r₁,…,r_s have pivot columns p₁<⋯<p_s. In a nonzero linear combination, its first nonzero coefficient c_i makes its first nonzero entry occur at p_i: earlier rows have zero coefficients and later rows vanish before their own later pivots. Thus the set of possible first nonzero positions of vectors in the row space is exactly {p₁,…,p_s}. This determines the pivot set intrinsically.

If another reduced matrix has the same row space, it therefore has the same pivot columns. Express its i-th nonzero row as a combination of the r_j. At the pivot columns, the reduced condition gives coefficients δ_ij, because the original pivot columns form an identity matrix. Hence its i-th row equals r_i. The zero rows are then determined by the fixed matrix size, proving uniqueness. ∎

The theorem concerns the fully reduced form; ordinary echelon forms can differ with pivot choices and scalings. An implementation can choose the first available nonzero pivot for a reproducible transcript. It does not need an ordering or a magnitude comparison on the field.

## 4. Solutions and kernels from free coordinates

**Theorem 4.5 (Solution parametrisation).** Let R,c be the reduced augmented system, with r pivots. The system is inconsistent exactly when a zero row of R has a nonzero corresponding entry of c. Otherwise it has a particular solution x₀ and a kernel basis v₁,…,v_(n−r), giving all solutions uniquely as
$$x=x_0+\\sum_{j=1}^{n-r}t_jv_j,\\qquad t_j\\in F_q.$$
There are exactly q^(n−r) solutions.

*Proof.* A zero equation with nonzero right side is impossible. If no such row exists, assign arbitrary values to the n−r nonpivot variables. Each pivot equation uniquely determines its pivot variable because that pivot equals one and other pivot columns are zero. Setting all free variables to zero gives x₀. Setting one free variable to one and the rest zero in the homogeneous system gives v_j.

Every solution differs from x₀ by a homogeneous solution, and its free coordinates provide the displayed coefficients. They also prove independence of the v_j and uniqueness of the parameters. There are q choices for each of n−r parameters, proving the count. ∎

The homogeneous solution space always contains zero. A consistent nonhomogeneous solution set is an affine translate, and generally is not a subspace. A kernel basis of dimension twenty over F₂ describes over a million vectors using only twenty basis vectors; enumeration is unnecessary unless the task explicitly asks for all vectors.

**Worked example 4.6 (Three solutions over F₃).** Let
$$A=\\begin{pmatrix}1&1&1\\\\1&2&0\\end{pmatrix},\\qquad b=\\binom12.$$
Subtracting the first row from the second gives x₂+2x₃=1, hence x₂=1+x₃. The first row then gives x₁=x₃. Thus
$$x=(0,1,0)+t(1,1,1),\\qquad t\\in F_3.$$
The three solutions are (0,1,0), (1,2,1) and (2,0,2). Direct substitution gives first equation one and second equation two for each. The kernel direction (1,1,1) has both row products zero modulo three. There is one free variable, so the count is three, not infinitely many real points on a line.

**Worked example 4.7 (A binary kernel and an affine coset).** Over F₂ let H have rows (1,1,0) and (0,1,1). Adding the second row to the first gives reduced rows (1,0,1) and (0,1,1). For right side zero, both pivot variables equal the free third variable, giving kernel {000,111}. For right side (1,0), the solutions are (1+t,t,t), namely 100 and 011. This coset has the same size as the kernel but does not contain zero, so it is not a linear subspace.

## 5. Inconsistency certificates and image bases

**Theorem 4.8 (Left-null witness).** The system Ax=b is inconsistent exactly when there is a row vector yᵀ with yᵀA=0 and yᵀb≠0.

*Proof.* Such a vector rules out a solution because Ax=b would imply 0=yᵀAx=yᵀb. Conversely, if the reduced system has an inconsistent row i, write R=UA and c=Ub. The row yᵀ=e_iᵀU annihilates A but gives yᵀb=c_i≠0. The reduction theorem guarantees such a row precisely for inconsistent systems. ∎

**Worked example 4.9 (A two-equation contradiction).** Over F₂ take A with both rows (1,1) and b=(0,1). Adding the first row to the second gives 0=1. The witness yᵀ=(1,1) satisfies yᵀA=(0,0) and yᵀb=1. This certificate is much smaller than a list of the four possible inputs and an explanation of why each fails; it proves nonexistence by one exact equation.

The pivot columns of the original A form an image basis. To prove this, the corresponding columns of R are the first r standard coordinate vectors, so are independent and span all columns of R. Multiplication by U⁻¹ transfers those relations and independence back to the original columns. Selecting pivot columns from R instead would give a basis of the transformed image, which can be a different subspace.

**Worked example 4.10 (An inverse over F₃).** For A with rows (1,1) and (1,2), the determinant is one. The inverse has rows (2,2) and (2,1). Multiplying gives rows (1,0) and (0,1) modulo three: the unreduced entries are (4,3) and (6,4). This verifies an exact inverse over F₃. The same integer matrix has determinant one over Q as well, but reduction and inverse computation must always state their base field.

## 6. Extension-field pivots and result certificates

In F₄ with α²=α+1, the diagonal matrix diag(α,α+1) has inverse diag(α+1,α). Each product is one by the defining relation. Treating the encoded coefficient α as the integer two and using a reciprocal modulo four would fail, because two has no inverse in Z/4Z. This is why elimination delegates scalar arithmetic to the declared field implementation.

An exact result can carry pivot columns, a kernel basis and the row-operation transcript. The kernel condition Av_j=0 and free-coordinate identity matrix prove both membership and independence. The pivot-column count proves the claimed rank. An inconsistent result can carry y with the two left-null equations. An inverse result must satisfy both products AA⁻¹=I and A⁻¹A=I; invertible row operations prove them together when reduction of [A|I] reaches [I|U].

There is no floating-point condition number in this finite-field problem. Randomly sampling some input vectors cannot establish equality of linear maps unless the argument quantifies the sampling error or a full basis is checked. Exact equality on a basis, in contrast, determines a linear map everywhere by linearity. This is a proof obligation, not an instruction to execute a project test suite during authoring.

## 7. A rank certificate independent of pivot choices

**Proposition 4.11 (Two-sided rank evidence).** Suppose an $m$-by-$n$ matrix has an $r$-by-$r$ submatrix with nonzero determinant and also has $n-r$ linearly independent kernel vectors. Then its rank is exactly $r$.

*Proof.* A nonzero subdeterminant makes the corresponding $r$ selected columns independent after restricting to the selected rows, and therefore independent as whole columns. This proves rank at least $r$. The independent kernel vectors give nullity at least $n-r$, so rank–nullity gives rank at most $r$. The inequalities force equality. ∎

In the three-variable example over $F_3$, the first two columns have square submatrix $\\begin{pmatrix}1&1\\\\1&2\\end{pmatrix}$ with determinant one. Thus rank is at least two. The nonzero kernel vector $(1,1,1)$ gives nullity at least one, so rank is at most two. The rank-two assertion is thereby certified without needing to reproduce a particular pivot transcript.

This certificate separates lower and upper bounds. A claimed nonzero minor alone proves only a lower bound. A collection of kernel vectors proves an upper bound only after their independence is established. In a reduced-system basis, the free-coordinate identity matrix supplies that independence directly. Exact field arithmetic keeps these claims crisp: determinant zero is a literal algebraic equality, rather than a tolerance-dependent judgement. For a requested numerical real matrix, a different contract would be needed; the finite-field certificate cannot simply be reused with rounded coefficients and an unstated threshold.

## Extending the scalar field preserves rank

Let K be a subfield of L and let A have entries in K. Its rank computed over L equals its rank over K. Indeed, rank r is characterised by one nonzero r-by-r minor and vanishing of every larger minor. A field embedding preserves both zero and nonzero determinant values, so the same certificates work in L. Equivalently, elimination over K supplies invertible row operations that remain invertible over L and produce the same pivot positions.

A K-basis of the kernel also becomes an L-basis of the extended kernel. In reduced form, each free variable still determines exactly one pivot assignment; those formulas use the same coefficients while the free parameters now range over L. Thus the number of vectors changes even though the dimension does not.

For example, the matrix with both rows equal to (1,1) has rank one over F₂ and over F₄. Its kernel is generated by (1,1) in characteristic two. Over F₂ it contains two vectors, while over F₄ it contains four. A report that lists all binary solutions is therefore incomplete for the extension-field problem, despite correctly identifying the rank and one kernel basis. The coefficient field belongs to the mathematical question, rather than being an interchangeable display format.

All consistency obstructions can be organised at once. A vector b lies in the column image of A exactly when every vector in the left kernel has zero scalar pairing with b. Necessity follows from λ transposed A equal to zero. For sufficiency, the annihilator of the left kernel has dimension equal to the number of rows minus the left nullity, hence equal to the rank of A. The column image is contained in that annihilator and has the same dimension, so they coincide. Here equality of the ranks of A and its transpose follows from their corresponding minors. A basis of the left kernel therefore gives a complete independent family of linear consistency equations, rather than just one witness for a particular failure.

## Exercises

### Exercise 1 — A binary kernel
<a id="finite-field-linear-ex-1"></a>

Find the kernel of the binary matrix with rows (1,1,0) and (0,1,1), and give its size.

<details>
<summary>Hint</summary>

The two equations force all three coordinates equal.

</details>

<details>
<summary>Solution</summary>

The equations are x₁+x₂=0 and x₂+x₃=0, hence x₁=x₂=x₃. The kernel is the span of (1,1,1), with two vectors 000 and 111. Its dimension is one and size 2¹=2. A single nonzero basis vector is a complete description of that subspace.

</details>

### Exercise 2 — A binary affine solution set
<a id="finite-field-linear-ex-2"></a>

For the same matrix, solve Hx=(1,0) and decide whether the answer set is a subspace.

<details>
<summary>Hint</summary>

Add one particular solution to the preceding kernel.

</details>

<details>
<summary>Solution</summary>

The vector 100 is a particular solution. Adding the kernel gives {100,011}. It is an affine coset of the one-dimensional kernel, but not a subspace because it omits zero. Its two elements exhaust the two possible values of its one free parameter.

</details>

### Exercise 3 — A left-null witness
<a id="finite-field-linear-ex-3"></a>

Prove inconsistency of x₁+x₂=0 and x₁+x₂=1 over F₂ using a row vector certificate.

<details>
<summary>Hint</summary>

Add the two equations.

</details>

<details>
<summary>Solution</summary>

For the repeated-row matrix, yᵀ=(1,1) has yᵀA=0 and yᵀb=1. If a solution existed, multiplication by yᵀ would give 0=1. This is an exact inconsistency witness, independent of any enumeration of possible x-values.

</details>

### Exercise 4 — Counting from rank
<a id="finite-field-linear-ex-4"></a>

A consistent system over F₅ has seven variables and rank four. How many solutions does it have?

<details>
<summary>Hint</summary>

There is one independent free parameter for each nonpivot column.

</details>

<details>
<summary>Solution</summary>

There are 7−4=3 free parameters, each with five choices, so the system has 5³=125 solutions. The count uses consistency; an inconsistent system with the same coefficient rank has zero solutions. Rank alone without the right-side condition is insufficient.

</details>

### Exercise 5 — Prime-field inverses
<a id="finite-field-linear-ex-5"></a>

Reduce the equation 2x+3y=1 over F₅ to a pivot-one equation and parametrise all solutions.

<details>
<summary>Hint</summary>

The inverse of two modulo five is three.

</details>

<details>
<summary>Solution</summary>

Multiplication by three gives x+4y=3. Thus y=t and x=3−4t=3+t in F₅. All five solutions are (3+t,t) for t∈F₅. The scaling was valid because two is nonzero and its reciprocal is a field element, not the rational one-half carried outside the field.

</details>

### Exercise 6 — Extension-field pivots
<a id="finite-field-linear-ex-6"></a>

Solve αx=α+1 in F₄ with α²=α+1.

<details>
<summary>Hint</summary>

Use α⁻¹=α+1 and square that element.

</details>

<details>
<summary>Solution</summary>

Multiplying by α+1 gives x=(α+1)²=α. Substitution gives α·α=α²=α+1, verifying the answer. Treating α's bit encoding as an integer residue modulo four would fail to provide its inverse and would solve a different algebraic problem.

</details>

### Exercise 7 — Original versus reduced columns
<a id="finite-field-linear-ex-7"></a>

Why should an image basis be chosen as the pivot columns of the original matrix rather than the reduced matrix?

<details>
<summary>Hint</summary>

Reduction applies an invertible map to the codomain.

</details>

<details>
<summary>Solution</summary>

If R=UA, then im R=U(im A), which need not equal im A as a literal subspace. Pivot columns of R give a basis of the transformed image. Their indices select original columns of A, and multiplication by U⁻¹ proves those original columns are independent and span im A. Keeping the indices preserves the correspondence without confusing the two codomain subspaces.

</details>

### Exercise 8 — Why reduced form is canonical
<a id="finite-field-linear-ex-8"></a>

Explain why the pivot positions of reduced row echelon form are determined by the row space.

<details>
<summary>Hint</summary>

List the possible first nonzero positions of nonzero combinations of reduced rows.

</details>

<details>
<summary>Solution</summary>

In a nonzero combination, the earliest reduced row with nonzero coefficient contributes the first nonzero entry at its pivot position; later rows vanish there and before their own later pivots. Thus every nonzero combination leads at one of the pivot columns, and every pivot occurs as the leading position of its row. The row space intrinsically determines precisely that set of possible leading positions, so any reduced basis has the same pivots.

</details>

### Exercise 9 — A finite number of vectors
<a id="finite-field-linear-ex-9"></a>

How many vectors are in a dimension-ten subspace over F₂? Does a ten-vector basis enumerate them?

<details>
<summary>Hint</summary>

Each of ten coefficients has two choices.

</details>

<details>
<summary>Solution</summary>

There are 2¹⁰=1024 vectors. A basis lists ten independent generators; its unique binary coefficient combinations enumerate the whole space only when those combinations are explicitly formed. The basis is a compressed exact description, not a list of every vector, and its dimension should not be confused with its cardinality.

</details>

### Exercise 10 — Equality on a basis
<a id="finite-field-linear-ex-10"></a>

Prove that two k-linear maps agreeing on a basis agree on every vector. Why is linearity part of the hypothesis?

<details>
<summary>Hint</summary>

Expand a vector in basis coordinates before applying each map.

</details>

<details>
<summary>Solution</summary>

For x=∑aᵢeᵢ, linearity gives T(x)=∑aᵢT(eᵢ)=∑aᵢS(eᵢ)=S(x). Without linearity, values away from the finite basis list can be assigned independently, so agreeing on that list need not imply equality elsewhere. Exact basis agreement is complete evidence for linear maps only after their linearity has been established.

</details>

## Summary

Finite-field elimination uses invertible exact operations and yields a canonical reduced form. Pivot and free coordinates describe images, kernels and affine solution sets, with exact cardinalities. Row-operation transcripts and left-null vectors certify consistency decisions, while extension-field coefficients retain their own arithmetic. These linear components will support quotient rings, module normal forms and the later computer algebra kernel.
`;export{e as default};