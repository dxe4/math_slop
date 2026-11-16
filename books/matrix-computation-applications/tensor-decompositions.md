
# Tensor Decompositions

Matrices are two-dimensional arrays; tensors generalize this to any number of dimensions. Tensor decompositions extend the SVD and eigenvalue ideas to higher-order data, but the theory is richer and more subtle: CP rank is subadditive, yet rank-at-most-$R$ sets need not be closed, so a best low-rank approximation may fail to exist. Algorithms are commonly iterative rather than direct. This chapter introduces the CP and Tucker decompositions, explains their properties, and highlights the pitfalls that do not arise in matrix factorization.

## Tensors and notation

A tensor $\mathcal{A} \in \mathbb{R}^{I_{1} \times I_{2} \times \dots \times I_{N}}$ has $N$ modes. Mode-$n$ unfolding (matricization) arranges the mode-$n$ fibers as columns of a matrix $A_{(n)}$. The $n$-mode product of $\mathcal{A}$ with a matrix $U \in \mathbb{R}^{J \times I_{n}}$ is denoted $\mathcal{A} \times_{n} U$ and has size $I_{1} \times \dots \times J \times \dots \times I_{N}$.

## CP decomposition

The CANDECOMP/PARAFAC (CP) decomposition approximates a tensor by a sum of rank-1 terms:

$$
\mathcal{A} \approx \sum_{r=1}^{R} a_{r}^{(1)} \circ a_{r}^{(2)} \circ \dots \circ a_{r}^{(N)},
$$

where $\circ$ denotes the outer product. For $N = 3$, each term is a rank-1 tensor $a \circ b \circ c$ with entries $a_{i}b_{j}c_{k}$.

The smallest $R$ for which equality holds is the **tensor rank**. Unlike matrix rank, tensor rank depends on the field: a real tensor may have different real and complex ranks. For order at least three, rank-at-most-$R$ sets need not be closed for particular dimensions and ranks; the explicit real two-by-two-by-two example below converges from rank at most two to rank three. This is not a claim that every rank set in every dimension is nonclosed. This means the best rank-$R$ approximation may not exist.

**Computation.** CP is usually computed by alternating least squares (ALS): fix all factor matrices except one, solve a linear least-squares problem for that factor, and cycle through the modes. ALS is simple but can converge slowly and get stuck in local minima. Regularization and line search improve robustness.

## Tucker decomposition

The Tucker decomposition generalizes the SVD to tensors:

$$
\mathcal{A} \approx \mathcal{G} \times_{1} U^{(1)} \times_{2} U^{(2)} \times_{3} \dots \times_{N} U^{(N)},
$$

where $\mathcal{G}$ is the core tensor and $U^{(n)}$ are factor matrices with orthonormal columns. The exact **multilinear rank** is the tuple of unfolding ranks $R_n=\operatorname{rank}(A_{(n)})$. A chosen core size imposes upper bounds on these ranks; unused or dependent directions can make the actual ranks smaller.

Unlike CP, the Tucker decomposition always exists and can be computed by a higher-order SVD (HOSVD): compute the SVD of each mode-$n$ unfolding, truncate to rank $R_{n}$, and form the core by projecting onto the factor matrices. HOSVD gives a quasi-optimal approximation, though not necessarily the best one.

## Applications

- **Chemometrics:** fluorescence data are naturally three-way (samples $\times$ excitation $\times$ emission) and decompose into pure chemical components via CP.
- **Compression:** Tucker decomposition compresses video and hyperspectral images by exploiting correlation across space, time, and spectral bands.
- **Latent variable models:** CP with nonnegative constraints identifies interpretable latent factors in count data.

## Common errors and misconceptions

**Error: assuming tensor rank is well behaved.** Tensor rank can jump under arbitrarily small perturbations, and the best low-rank approximation may not exist. Always report the algorithm, the initialization, and the residual.

**Error: using CP when Tucker is more appropriate.** CP imposes a strict rank structure that may not fit the data. Tucker is more flexible and is preferred when the multilinear rank differs across modes.

**Error: ignoring the scaling ambiguity.** CP factors can be rescaled across modes without changing the tensor: $(\alpha a) \circ (\beta b) \circ (\gamma c) = a \circ b \circ c$ if $\alpha\beta\gamma = 1$. Normalize factors and report the normalization convention.

## Preparation and three rank questions

Required preparation is the [QR and SVD chapter](qr-least-squares-svd.md), Euclidean least squares and finite-dimensional compactness. We use real tensors throughout the proofs and explicitly state when a field-dependent CP assertion is involved. A tensor is a multilinear array in fixed bases; changing a mode's basis changes its coordinates while preserving the corresponding exact rank notions under invertible transformations.

**Definition 15.1 (CP rank, border rank and multilinear rank).** A nonzero rank-one tensor is an outer product of nonzero vectors, with entries equal to the products of their components. CP rank is the least number of such terms in an exact sum; the zero tensor has rank zero. Border rank is the least R for which tensors of CP rank at most R can converge to the target in the Frobenius norm. Multilinear rank is the tuple of ranks of all mode unfoldings. These are different questions even for a small three-way array.

The Frobenius norm is the square root of the sum of squared entries. Unfolding only rearranges entries, so it preserves this norm. Each CP term unfolds to a matrix of rank at most one; therefore every unfolding rank is at most the CP rank. Equality is not guaranteed. Border rank can be strictly smaller than CP rank, as the retained degenerating example in Exercise 11.2 proves.

**Example 15.2 (An outer product and its scale ambiguity).** Take $a=(1,2)$, $b=(1,-1)$ and $c=(2,0)$. The two third-mode slices of $a\circ b\circ c$ are
$$\begin{pmatrix}2&-2\\4&-4\end{pmatrix},
\qquad \begin{pmatrix}0&0\\0&0\end{pmatrix}.$$
The tensor is nonzero and has CP rank one. Its squared norm is
$(1^2+2^2)(1^2+(-1)^2)(2^2+0^2)=40$.
Replacing $a$ by $3a$ and $b$ by $b/3$ leaves every entry and this norm unchanged. Large factor norms alone therefore do not measure a large represented tensor; choose a normalization before comparing fitted factors.

## Nonclosed CP sets and what fails to exist

For matrices, the set of rank at most R is closed because all minors of order R+1 vanish. A bounded minimizing sequence therefore has a convergent feasible subsequence. CP rank for higher-order tensors is not described by those unfolding minors alone: the multilinear ranks give necessary but insufficient constraints.

The real tensor in Exercise 11.2 is particularly informative. The two rank-one terms in its difference quotient have coefficients of magnitude $1/|\epsilon|$, so their large contributions cancel while the tensor converges. The limit has three visible rank-one summands and cannot have two, by the proved slice-pencil argument. Its CP rank is three and its border rank is two. The infimum error among rank-at-most-two approximations is zero, attained by no such tensor. Thus a best rank-two approximation of this particular target does not exist.

This does not mean every CP fitting problem lacks a minimizer or that every ALS run must diverge. It means a universal existence theorem analogous to the matrix rank theorem is false. A reported residual tending to zero can coexist with factor norms tending to infinity. Such degeneration is a mathematical issue distinct from rounding failure. Constraints such as nonnegativity, fixed norm bounds or a positive regularization penalty change the feasible set and may restore existence under their own hypotheses.

**Example 15.3 (A finite error for the degenerating family).** With $u=e_1$, $v=e_2$, write the Exercise 11.2 limit as W. Its difference quotient expands as
$$\mathcal A_\epsilon=W+\epsilon T+\epsilon^2v\circ v\circ v,$$
where T is the sum of the three terms containing exactly two copies of v. These four omitted basis tensors are mutually orthogonal, so
$$\|\mathcal A_\epsilon-W\|_F^2=3\epsilon^2+\epsilon^4.$$
At $\epsilon=1/10$ the exact squared error is $301/10000$. As $\epsilon$ tends to zero, the error vanishes while the two-term representation becomes increasingly ill-scaled. This is a calculated family, not an empirical report of an ALS iteration.

## Why Tucker approximation has an existence theorem

**Theorem 15.4 (Existence under multilinear-rank bounds).** In a finite real array space, the set of tensors with unfolding ranks at most $(r_1,\ldots,r_N)$ is closed. Every target has a best Frobenius approximation in this set.

*Proof.* For each mode, unfolding is a continuous linear rearrangement and matrix rank at most $r_n$ is a closed condition given by vanishing minors. The finite intersection of these inverse images is closed and contains zero. Choose a minimizing sequence with errors at most $\|\mathcal A\|_F+1$; its tensor norms are then at most $2\|\mathcal A\|_F+1$ by the triangle inequality. In finite-dimensional Euclidean space a bounded sequence has a convergent subsequence. Closedness keeps the limit feasible and continuity of the norm makes it a minimizer. ∎

The theorem concerns rank upper bounds, rather than an exact-rank stratum, which need not itself be closed. HOSVD produces a feasible approximation constructively by selecting leading singular subspaces of each unfolding. Its output need not be the best Tucker approximation. The word exists must not be read as a claim that a particular alternating optimization finds the global optimum.

**Theorem 15.5 (HOSVD quasi-optimality).** Let each $P_n$ be the orthogonal projector, acting in mode n, onto the first $r_n$ left singular vectors of that unfolding. Then
$$
\|\mathcal A-P_1\cdots P_N\mathcal A\|_F^2
\le\sum_{n=1}^N\sum_{j>r_n}\sigma_j(A_{(n)})^2
\le N\,\inf_{\operatorname{mlrank}(\mathcal B)\le r}
\|\mathcal A-\mathcal B\|_F^2.
$$

*Proof.* Projectors in different modes commute and are orthogonal in the tensor Frobenius inner product. The telescoping decomposition has terms
$E_n=P_1\cdots P_{n-1}(I-P_n)\mathcal A$.
They are pairwise orthogonal: an earlier term lies in the orthogonal complement of its mode projector, while each later term lies in that projector's range. Hence the squared error is their squared-norm sum, at most $\sum_n\|(I-P_n)\mathcal A\|_F^2$. The SVD computes each term as the indicated unfolding tail. For any feasible B, its nth unfolding has matrix rank at most $r_n$, so the matrix best-rank theorem bounds that tail by $\|\mathcal A-\mathcal B\|_F^2$. Sum over modes and take the infimum. ∎

This gives the factor $\sqrt N$ in norm. It does not establish uniqueness of factors or optimality of each truncated core entry. Equal singular values can leave the selected subspaces nonunique, while the bound remains valid.

**Example 15.6 (An orthogonal two-term tensor).** Let
$\mathcal A=3e_1\circ e_1\circ e_1+e_2\circ e_2\circ e_2$.
Every unfolding has singular values three and one. Keeping rank one in each mode selects $e_1$ and yields the first term, with Frobenius error one. The lower bound from any one unfolding is also one, so this Tucker approximation is actually optimal here. The general HOSVD bound would only give $\sqrt3$, showing that quasi-optimality can be conservative.

## ALS, its least-squares subproblem and its limits

For a three-mode CP model, fix factors B and C and order paired indices $(j,k)$ consistently. Define the design matrix K by $K_{(j,k),r}=B_{jr}C_{kr}$. Mode-one fitting solves
$$\min_X\|A_{(1)}-XK^{\mathsf T}\|_F^2.$$
Each row is an ordinary least-squares problem, so QR or SVD can be used without squaring conditioning. The normal matrix has entries
$$
(K^{\mathsf T}K)_{rs}
=(B^{\mathsf T}B)_{rs}(C^{\mathsf T}C)_{rs},
$$
as follows by separating the sums over j and k. Nearly dependent factors can make this design ill-conditioned even when the data tensor has moderate entries.

Exact block minimization never increases the fixed objective. Its nonnegative objective values therefore converge. This proves neither convergence of the factor sequence nor global optimality: scaling ambiguity, noncompact sublevel sets, nonuniqueness and degenerating sequences remain. A stationary-point theorem needs its additional assumptions; an ALS success flag alone is insufficient.

Adding a fixed $\lambda>0$ times the sum of squared factor norms gives a coercive continuous objective in the finite parameter space. Its sublevel sets are bounded, so a minimizer exists. For a fixed pair of other factors, the update obeys
$$X(K^{\mathsf T}K+\lambda I)=A_{(1)}K,$$
whose coefficient matrix is SPD, giving a unique block solution. The regularized global problem remains nonconvex and biased relative to unregularized fitting. Record the penalty, normalization, initial factors, block-solve method, objective history and stopping criterion.

Finally, a tensor decomposition's algebraic identifiability is different from interpreting its factors as physical components. Permutation, scaling and rotations of Tucker factors create equivalent representations. A latent-variable or chemical interpretation requires model and data assumptions beyond a small residual. Compare reconstructed tensors and declared invariants before comparing unaligned factor columns.

## Practice exercises with solutions

### Exercise 11.1
<a id="tensor-decompositions-ex-11-1"></a>

A $2 \times 2 \times 2$ tensor has entries $a_{ijk} = 1$ for all $i, j, k$. What is its CP rank?

<details>
<summary>Hint 1</summary>

**Hint.** Recognize the entrywise product of three constant vectors.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Nonzero data rules out rank zero.

</details>

<details>
<summary>Solution</summary>

**Solution.**  The tensor is the outer product of the all-ones vectors in each mode: $\mathbf{1} \circ \mathbf{1} \circ \mathbf{1}$. Thus its CP rank is $1$.

</details>

### Exercise 11.2
<a id="tensor-decompositions-ex-11-2"></a>

Explain why the set of rank-$2$ $2 \times 2 \times 2$ tensors is not closed.

<details>
<summary>Hint 1</summary>

**Hint.** Expand the difference quotient.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Use the rank-one directions in its two-dimensional slice pencil.

</details>

<details>
<summary>Solution</summary>

**Solution.**  Let $u=e_1$ and $v=e_2$, and for $\varepsilon\ne0$ define

$$
\mathcal A_\varepsilon=
\frac{(u+\varepsilon v)\circ(u+\varepsilon v)\circ(u+\varepsilon v)-u\circ u\circ u}{\varepsilon}.
$$

Each $\mathcal A_\varepsilon$ is a difference of two rank-one tensors, so its CP rank is at most $2$. Expanding gives

$$
\mathcal A_\varepsilon=
v\circ u\circ u+u\circ v\circ u+u\circ u\circ v
+\varepsilon\bigl(v\circ v\circ u+v\circ u\circ v+u\circ v\circ v\bigr)
+\varepsilon^2v\circ v\circ v.
$$

Therefore it converges to

$$\mathcal A_0=v\circ u\circ u+u\circ v\circ u+u\circ u\circ v,$$

which has CP rank $3$. To see the lower bound, its first-mode slice span is generated by

$$S_0=\begin{pmatrix}0&1\\1&0\end{pmatrix},\qquad S_1=\begin{pmatrix}1&0\\0&0\end{pmatrix}.$$

Since $\det(aS_0+bS_1)=-a^2$, this two-dimensional pencil contains only one rank-one direction, the multiples of $S_1$. A rank-$2$ tensor with first-mode rank $2$ would express its slice span using two independent rank-one matrices, a contradiction. The displayed three-term expression gives the matching upper bound. Thus a sequence of tensors of rank at most $2$ can converge to one of rank $3$, proving that the rank-at-most-$2$ set is not closed.

</details>

### Exercise 11.3
<a id="tensor-decompositions-ex-11-3"></a>

A $100 \times 100 \times 100$ tensor is approximated by Tucker with multilinear rank $(10, 10, 10)$. Count the parameters.

<details>
<summary>Hint 1</summary>

**Hint.** Count core entries and each factor matrix separately.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Distinguish storage count from identifiable degrees of freedom.

</details>

<details>
<summary>Solution</summary>

**Solution.**  The core tensor has $10^{3} = 1000$ entries. Each factor matrix has $100 \times 10 = 1000$ entries, and there are three factors, giving $3000$ entries. The total is $4000$ parameters, compared to $10^{6}$ for the original tensor: a compression ratio of $250$.

</details>

### Exercise 11.4
<a id="tensor-decompositions-ex-11-4"></a>

Why does ALS for CP need good initialization?

<details>
<summary>Hint 1</summary>

**Hint.** A blockwise quadratic objective is not jointly convex.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** A monotone objective need not imply convergent factors.

</details>

<details>
<summary>Solution</summary>

**Solution.**  The CP objective is nonconvex in all factors simultaneously. ALS solves convex subproblems but cycles through them, so it can converge to local minima or saddle points. Poor initialization can lead to suboptimal fits, slow convergence, or numerical breakdown. Multiple random starts and the SVD-based initialization of HOSVD are common remedies.

</details>

## Further exercises

### Exercise 5: Outer-product norm
<a id="tensor-decompositions-ex-5"></a>

Prove $\|a\circ b\circ c\|_F=\|a\|_2\|b\|_2\|c\|_2$.

<details>
<summary>Hint 1</summary>

**Hint.** Expand the squared entry sum.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Separate the three finite sums.

</details>

<details>
<summary>Solution</summary>

**Solution.** The squared norm is $\sum_{ijk}a_i^2b_j^2c_k^2=(\sum_i a_i^2)(\sum_j b_j^2)(\sum_k c_k^2)$. Taking nonnegative square roots proves the formula, including zero vectors.

</details>

### Exercise 6: Unfolding lower bound
<a id="tensor-decompositions-ex-6"></a>

Why is every unfolding rank at most CP rank?

<details>
<summary>Hint 1</summary>

**Hint.** Unfold one rank-one term.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Use subadditivity of matrix rank.

</details>

<details>
<summary>Solution</summary>

**Solution.** Each outer product unfolds into an outer product of one factor with the Kronecker product of the others, hence has matrix rank at most one. A sum of R such terms has unfolding rank at most R in every mode.

</details>

### Exercise 7: Border versus CP rank
<a id="tensor-decompositions-ex-7"></a>

State both ranks of W in the degenerating example and explain the failed minimizer.

<details>
<summary>Hint 1</summary>

**Hint.** Use the two-term approximating sequence.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** The slice-pencil proof gives the exact lower bound.

</details>

<details>
<summary>Solution</summary>

**Solution.** Its CP rank is three and border rank is two. Rank one is closed here and W has unfolding rank two, so its border rank cannot be one. Rank-at-most-two errors have infimum zero, but attaining zero would represent W with two terms, a contradiction.

</details>

### Exercise 8: HOSVD factor
<a id="tensor-decompositions-ex-8"></a>

For a four-mode tensor, what norm-factor quasi-optimality follows from the theorem?

<details>
<summary>Hint 1</summary>

**Hint.** The squared-error factor is the number of modes.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Take a square root.

</details>

<details>
<summary>Solution</summary>

**Solution.** The error is at most twice the best error under the same multilinear-rank upper bounds. This is a worst-case guarantee, not equality or a statement that every HOSVD output is globally optimal.

</details>

### Exercise 9: ALS monotonicity
<a id="tensor-decompositions-ex-9"></a>

If every exact ALS step lowers the objective, must the factors converge?

<details>
<summary>Hint 1</summary>

**Hint.** A bounded decreasing scalar sequence has a limit.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** The parameter sequence can be unbounded or nonunique.

</details>

<details>
<summary>Solution</summary>

**Solution.** No. The objective values converge because they are nonincreasing and bounded below, but rescaling and CP degeneration can prevent factor convergence. A factor-convergence or stationarity theorem requires additional boundedness, uniqueness or regularity hypotheses.

</details>

### Exercise 10: Regularized block solve
<a id="tensor-decompositions-ex-10"></a>

Why is $K^{\mathsf T}K+\lambda I$ SPD for $\lambda>0$?

<details>
<summary>Hint 1</summary>

**Hint.** Evaluate its quadratic form.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** The penalty controls the null space.

</details>

<details>
<summary>Solution</summary>

**Solution.** For nonzero z, the quadratic form is $\|Kz\|_2^2+\lambda\|z\|_2^2>0$. Thus the regularized least-squares block has a unique solution even if K is rank deficient, while joint tensor fitting remains nonconvex.

</details>

## Sources

Kolda and Bader, [Tensor Decompositions and Applications](https://doi.org/10.1137/07070111X), develops CP, Tucker and ALS conventions. De Silva and Lim, [Tensor rank and the ill-posedness of the best low-rank approximation problem](https://arxiv.org/abs/math/0607647), treats nonclosed CP rank sets and failed best approximations. The explicit degenerating family and slice-pencil proof are retained in Exercise 11.2, with an error calculation above. Closedness and existence for multilinear-rank bounds, the HOSVD inequality and regularized block SPD property are proved here. General CP uniqueness, identifiability and ALS convergence theorems are not asserted without their additional hypotheses.

<a id="looking-backward-and-forward"></a>

## Summary

Tensor CP rank, border rank and multilinear rank describe different structures. A concrete two-term sequence converges to a rank-three tensor, explaining why a best CP approximation can fail to exist. Multilinear-rank upper bounds instead give a closed feasible set, and HOSVD has a proved quasi-optimal error bound. ALS provides tractable block solves but its objective decrease does not prove convergent factors, global optimality or physical interpretation.
