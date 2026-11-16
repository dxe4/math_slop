
# Gaussian Graphical Models

## Preparation and the role of nonsingularity

**Definition 5.1 (Gaussian graphical model).** A Gaussian graphical model is a joint Gaussian distribution whose precision matrix has a specified pattern of zeros. Required preparation is the probability book's [Gaussian-vector chapter](../probability-models-proofs/gaussian-vectors-and-multivariate-normal.md), positive-definite matrices, and the conditional-independence definitions of Chapter 2. This expands the precision discussion in the retained [Undirected Models and Factors](../structured-probabilistic-learning/undirected-models-and-factors.md) source. Its original covariance and precision examples remain available there.

Assume throughout the main statements that the covariance Sigma is positive definite, with precision $Q=\Sigma^{-1}$. Its Gaussian density is proportional to
$$
\exp\{-\tfrac12(x-\mu)^TQ(x-\mu)\}.
$$
Positive definiteness gives a positive density on the whole Euclidean space and invertible principal blocks. A singular Gaussian still defines a probability, but it need not have a full-dimensional density or an ordinary inverse covariance. Its conditional-independence structure cannot be read by blindly replacing every inverse in this chapter with a pseudoinverse. Support constraints must then be analyzed explicitly.

An absent edge in the undirected Gaussian graph means that the corresponding off-diagonal precision entry is zero. It is a conditional-association statement. A covariance zero instead gives marginal independence for a Gaussian pair. These two matrices answer different questions, and marginalization can change the zero pattern substantially.

## Deriving a block conditional law from the precision

Partition the coordinates into A and B. Hold the B value fixed and expand the quadratic form only in the A coordinates. Its quadratic block is $Q_{AA}$ and its linear term comes from $Q_{AB}(x_B-\mu_B)$. Completing the square gives
$$
X_A\mid X_B=x_B\sim N\left(\mu_A-Q_{AA}^{-1}Q_{AB}(x_B-\mu_B),\ Q_{AA}^{-1}\right).
$$
This is a version defined for every B value, even though each exact continuous-value event has probability zero. The conditional density normalizes because its precision block is positive definite; multiplying it by the marginal density verifies the joint density and hence the conditional-kernel identity. This supplies the relevant interpretation rather than dividing point-event probabilities.

The same formula agrees with covariance-block conditioning: block inversion gives $Q_{AA}^{-1}=\Sigma_{AA}-\Sigma_{AB}\Sigma_{BB}^{-1}\Sigma_{BA}$. Both derivations assume the relevant blocks are invertible, which follows from the positive-definite full covariance. Numerical implementations should solve linear systems, not explicitly construct these inverses just to multiply them by vectors.

For one coordinate this becomes a regression on all others. Its conditional variance is $1/Q_{ii}$, and its conditional regression coefficient for coordinate j is $-Q_{ij}/Q_{ii}$. Thus a zero precision entry is also a zero coefficient in the population regression on all the remaining coordinates. This is an exact Gaussian population identity, not an automatic statement about which coefficients a finite-sample regularized estimator selects.

## A full precision-zero equivalence

**Theorem 5.2 (Precision zeros and Gaussian conditional independence).** Choose A to consist of a pair of coordinates. Their conditional precision given the rest is the two-by-two principal block of Q. Its inverse has off-diagonal entry
$$
-\frac{Q_{ij}}{Q_{ii}Q_{jj}-Q_{ij}^2}.
$$
The denominator is strictly positive. A jointly Gaussian pair is independent exactly when its covariance is zero: its characteristic function factorizes in the zero case, and independence forces zero covariance in the other direction. Therefore
$$
X_i\perp X_j\mid X_{V\setminus\{i,j\}}\quad\Longleftrightarrow\quad Q_{ij}=0.
$$
The conditional covariance does not depend on the fixed remaining values. If the precision entry is nonzero, the conditional Gaussian pair is dependent on every such slice in the displayed version, so an almost-everywhere conditional independence cannot hold.

Dividing the conditional covariance by its two conditional standard deviations gives the partial correlation
$$
\rho_{ij\cdot\mathrm{rest}}=-\frac{Q_{ij}}{\sqrt{Q_{ii}Q_{jj}}}.
$$
It always lies strictly between minus one and one under positive definiteness. The sign is opposite the off-diagonal precision sign. Ordinary correlation uses covariance entries and can have a different value, zero pattern or sign. Saying a correlation is partial without naming the conditioned coordinates discards part of the claim.

## Worked example 1: a chain with nonzero endpoint covariance

**Example 5.3 (a chain with nonzero endpoint covariance).** Take the precision matrix
$$
Q=\begin{pmatrix}2&-1&0\\-1&2&-1\\0&-1&2\end{pmatrix},\qquad
\Sigma=\frac14\begin{pmatrix}3&2&1\\2&4&2\\1&2&3\end{pmatrix}.
$$
Direct multiplication gives the identity. Positive definiteness can also be checked by writing its quadratic form as the sum of the two adjacent squared differences plus the two endpoint squares. The absent precision entry between endpoints gives their independence conditional on the middle.

Marginally their covariance is one quarter and their correlation one third, so they are not independent. The conditional means of both endpoints given the middle are one half the middle, with independent residual variances one half. Conditional total covariance explains the marginal dependence: the covariance of the two conditional means is one quarter times the middle variance, which equals one. The resulting covariance is one quarter, exactly as the inverse shows.

## Marginal precision is a Schur complement

To retain coordinates A while integrating out B, complete the square in the B block instead. The resulting marginal exponent has precision
$$
Q_A^{\mathrm{marg}}=Q_{AA}-Q_{AB}Q_{BB}^{-1}Q_{BA}.
$$
The Gaussian integral contributes a normalising constant independent of A. This proves the formula and shows why simply deleting rows and columns of Q gives a conditional precision rather than a marginal precision.

Eliminating a hidden vertex generally connects its former neighbors through the correction term. In the chain example, integrating out the middle gives endpoint precision with diagonal entries three halves and off-diagonal minus one half. The endpoint marginal covariance block is the inverse of that matrix. The absent full-graph edge has become a nonzero marginal edge. This is algebraic fill-in, which will also appear in exact-inference elimination.

For a pair of retained coordinates, two contributions to the Schur complement can cancel, so fill-in is possible rather than inevitable for every numerical parameter. Graph-based complexity bounds typically describe generic scopes, not a guarantee that each new potential coefficient is nonzero. Exact zeros produced by cancellation should not be confused with structural absence without an additional assumption.

## Worked example 2: zero covariance can conceal a conditional edge

**Example 5.4 (zero covariance can conceal a conditional edge).** Let A, C and E be independent standard normals and set $B=A+C+E$. In the coordinate order A, C, B, covariance and precision are
$$
\Sigma=\begin{pmatrix}1&0&1\\0&1&1\\1&1&3\end{pmatrix},\qquad
Q=\begin{pmatrix}2&1&-1\\1&2&-1\\-1&-1&1\end{pmatrix}.
$$
Their product is the identity. A and C are marginally independent, but their precision entry is one. Given B, their conditional covariance is minus one third and their two conditional variances are two thirds, so their partial correlation is minus one half. Observing their noisy sum creates negative conditional association, the continuous Gaussian counterpart of the earlier collider examples.

The undirected Gaussian graph is complete in this example. Its lack of missing edges does not deny the extra marginal independence of A and C. An undirected graph encodes the required conditional independence pattern; a particular distribution may have additional independences not forced by that graph.

## Likelihood for a precision matrix

Suppose n independent centred Gaussian observations have known mean zero, and let $S=n^{-1}\sum_rx^{(r)}x^{(r)T}$. Ignoring constants and the factor n divided by two, the log likelihood is
$$
\ell(Q)=\log\det Q-\operatorname{tr}(SQ),\qquad Q\succ0.
$$
The same form uses the sample-centered covariance when the mean is estimated, though its sampling distribution then differs. The data-generating and centering conventions must accompany a reported estimator.

The differential of log determinant is the trace of the inverse times the perturbation. Diagonalizing the symmetric similarity transform or differentiating a determinant verifies it. Along a nonzero symmetric direction H the second differential is
$$
-\operatorname{tr}(Q^{-1}HQ^{-1}H)<0.
$$
The trace is the squared Frobenius norm of the symmetric transformed direction, so the inequality is strict. Thus the objective is strictly concave. If S is positive definite, the stationary equation gives the unique maximizer $Q=S^{-1}$.

Existence can be seen directly as well. The trace term dominates when a precision eigenvalue tends to infinity because S has a strictly positive smallest eigenvalue, while log determinant grows only logarithmically. With eigenvalues bounded above, a vanishing smallest eigenvalue sends log determinant to minus infinity. Upper level sets therefore stay inside a compact positive-definite region, where continuity gives a maximum. If S is singular, a null direction v allows $Q=I+t vv^T$ to increase log determinant without changing the trace penalty in that direction, so the unrestricted likelihood is unbounded. A printed inverse covariance is not a valid ordinary maximum-likelihood solution in that case.

## Sparse penalization and what its zeros mean

The graphical lasso adds an off-diagonal absolute-value penalty:
$$
\max_{Q\succ0}\{\log\det Q-\operatorname{tr}(SQ)-\lambda\sum_{i\ne j}|Q_{ij}|\}.
$$
The diagonal is unpenalized in this convention. Strict concavity gives at most one maximizer. For positive-definite S, the earlier compact-level argument still gives existence because the penalty is nonnegative. Broader existence conditions for singular S need a separate argument; they are not inferred from strict concavity alone.

At a maximizer the necessary and sufficient subgradient conditions are $Q^{-1}-S=\lambda\Gamma$ off the diagonal and equality to zero on the diagonal. Here Gamma is the sign of a nonzero off-diagonal entry and can be any value between minus one and one at a zero. Symmetric off-diagonal entries are counted twice in both the matrix differential and the stated penalty, so no extra factor two appears in this equation. These conditions explain thresholded zeros, but do not prove support recovery for the unknown population precision.

## Worked example 3: a two-coordinate threshold

**Example 5.5 (a two-coordinate threshold).** Let S have unit diagonal and off-diagonal s, with absolute s less than one. A diagonal candidate has Q equal to the identity by the diagonal stationarity conditions. Its off-diagonal condition is feasible exactly when absolute s is at most lambda, because its inverse off-diagonal is zero. In that case the diagonal candidate is the unique optimum by concavity and the subgradient condition.

If absolute s exceeds lambda, a diagonal optimum is impossible. Symmetry gives a covariance estimate with diagonal one and off-diagonal $\operatorname{sign}(s)(|s|-\lambda)$ at the optimum, whose inverse is positive definite. Its precision off-diagonal has the opposite sign, so substitution verifies the full condition. The penalty thus removes the edge below a threshold and shrinks it above. This is a finite optimisation identity, not a confidence statement about the population edge.

## Selection, hidden variables and causal interpretation

A selected zero is a property of the fitted penalized objective. Population conditional independence is a property of the unknown joint law. Recovering its graph needs sample-size, signal, sparsity and regularity assumptions, as well as a treatment of tuning and selection. Taking the ordinary likelihood curvature after selecting edges on the same sample does not automatically supply valid uncertainty for that selection procedure.

Hidden variables can create a dense marginal precision through Schur complements. Measurement error can similarly change both covariance and its inverse. A sparse graph fitted to the observed variables is therefore a conditional-association model for those observations under a Gaussian approximation. It need not reproduce a latent-variable graph, an intervention graph, or a mechanistic network.

Finally, many different linear Gaussian DAGs can yield the same positive-definite covariance through ordered regressions. An undirected precision graph alone contains no arrow orientation. Causal interpretation needs additional structural assumptions and, where relevant, intervention or temporal information. The later causal chapter will state those assumptions separately rather than infer them from sparsity.

## Sample rank and the observation convention

The singular-likelihood issue is unavoidable when there are more coordinates than independent observed vectors. With known zero mean, the empirical second-moment matrix is a sum of n rank-one outer products and has rank at most n. With an estimated mean, the centred vectors sum to zero, lowering that bound to at most n minus one. Thus even a positive-definite population covariance need not give an invertible sample covariance. Penalization or a declared structured model can change the estimation problem, but an algebraic inverse cannot manufacture the missing sample rank. This is another reason to distinguish population precision identities from finite-sample estimation formulas.

## Exercises

<a id="gaussian-graphical-models-ex-1"></a>

### Exercise 1

Derive the nodewise regression coefficient from Q.

<details><summary>Hint 1</summary>

Complete the square in just one coordinate.

</details>

<details><summary>Hint 2</summary>

The linear term is its row times the other centred values.

</details>

<details><summary>Full solution</summary>

The conditional quadratic coefficient is $Q_{ii}$ and the linear cross term is the sum of $Q_{ij}(x_j-\mu_j)$. Completing the square gives conditional mean $\mu_i-\sum_{j\ne i}Q_{ij}(x_j-\mu_j)/Q_{ii}$ and variance $1/Q_{ii}$. Thus the coefficient of coordinate j is the negative precision ratio. Positive definiteness ensures the denominator is positive.

</details>

<a id="gaussian-graphical-models-ex-2"></a>

### Exercise 2

Prove that the conditional precision of a coordinate pair is its principal Q block.

<details><summary>Hint 1</summary>

Fix every remaining coordinate in the joint density.

</details>

<details><summary>Hint 2</summary>

Identify the surviving quadratic terms.

</details>

<details><summary>Full solution</summary>

Terms involving only fixed values become part of the conditional normalizer. The two varying coordinates retain the principal precision block as their quadratic coefficient, and cross terms with fixed coordinates only change the conditional mean. Completing the square therefore gives inverse covariance equal to that block, not the inverse of the marginal covariance submatrix.

</details>

<a id="gaussian-graphical-models-ex-3"></a>

### Exercise 3

For the chain example, compute the endpoint partial correlation given the middle.

<details><summary>Hint 1</summary>

Use the precision-zero formula.

</details>

<details><summary>Hint 2</summary>

The endpoint precision entry is zero.

</details>

<details><summary>Full solution</summary>

The partial correlation is minus the endpoint precision entry divided by the square root of their diagonal precision entries. Its numerator is zero, so the partial correlation is zero. The conditional Gaussian pair is independent. The marginal correlation is instead one third, demonstrating that the conditioning set is part of the correlation statement.

</details>

<a id="gaussian-graphical-models-ex-4"></a>

### Exercise 4

Compute the marginal endpoint precision after eliminating the middle of the chain.

<details><summary>Hint 1</summary>

Use the Schur complement.

</details>

<details><summary>Hint 2</summary>

The middle precision block is the scalar two.

</details>

<details><summary>Full solution</summary>

The retained principal block is twice the identity and its cross block is the column of two minus-one entries. Subtracting the cross outer product divided by two gives diagonals three halves and off-diagonal minus one half. This nonzero marginal edge agrees with the nonzero endpoint covariance and is distinct from the zero conditional edge in the full graph.

</details>

<a id="gaussian-graphical-models-ex-5"></a>

### Exercise 5

Why does a Gaussian covariance zero imply independence, whereas a general covariance zero does not?

<details><summary>Hint 1</summary>

Compare characteristic functions.

</details>

<details><summary>Hint 2</summary>

The Gaussian law is determined by its quadratic covariance form.

</details>

<details><summary>Full solution</summary>

For a Gaussian pair, a zero covariance removes the cross term from the joint characteristic function, making it the product of the marginals. Uniqueness gives independence. General joint characteristic functions can contain higher-order dependence not recorded by covariance. For example a symmetric variable and its nonconstant square can have zero covariance while remaining dependent.

</details>

<a id="gaussian-graphical-models-ex-6"></a>

### Exercise 6

For the noisy-sum example, find the conditional correlation between A and C given B.

<details><summary>Hint 1</summary>

Use their conditional covariance and variances.

</details>

<details><summary>Hint 2</summary>

Or use the two diagonal and one off-diagonal precision entries.

</details>

<details><summary>Full solution</summary>

The precision formula gives minus one divided by the square root of two times two, equal to minus one half. Equivalently conditioning subtracts one third from each unit variance and creates covariance minus one third, whose normalisation by two thirds gives the same result. Marginally their covariance is zero because the source variables are independent.

</details>

<a id="gaussian-graphical-models-ex-7"></a>

### Exercise 7

Explain why singular S makes the unpenalized likelihood unbounded.

<details><summary>Hint 1</summary>

Choose a unit vector in its null space.

</details>

<details><summary>Hint 2</summary>

Increase Q only along that vector.

</details>

<details><summary>Full solution</summary>

For $Q=I+t vv^T$, its determinant is one plus t and its trace product with S equals the fixed trace of S because $v^TSv=0$. The objective therefore increases like log one plus t without bound. The matrices remain positive definite for nonnegative t. This proves nonexistence of an ordinary finite maximizing precision, rather than merely failure of an inversion algorithm.

</details>

<a id="gaussian-graphical-models-ex-8"></a>

### Exercise 8

In the two-coordinate penalized example, when is the identity the optimum?

<details><summary>Hint 1</summary>

Check diagonal and off-diagonal subgradient equations.

</details>

<details><summary>Hint 2</summary>

A zero off-diagonal permits a subgradient in the unit interval of signs.

</details>

<details><summary>Full solution</summary>

The diagonal inverse entries equal the unit sample variances, satisfying the diagonal equations. The remaining equation is minus s equal to lambda times an allowed subgradient between minus one and one. It is feasible exactly when absolute s is at most lambda. Strict concavity then makes the identity the unique optimum. This criterion is tied to the stated off-diagonal penalty convention.

</details>

<a id="gaussian-graphical-models-ex-9"></a>

### Exercise 9

Does positive semidefiniteness of a covariance guarantee that this chapter has an ordinary precision matrix?

<details><summary>Hint 1</summary>

Distinguish positive definite from semidefinite.

</details>

<details><summary>Hint 2</summary>

A zero-variance linear combination creates singularity.

</details>

<details><summary>Full solution</summary>

No. A positive-semidefinite covariance can have a null vector, corresponding to a deterministic linear relation among coordinates. It then lacks an ordinary inverse and a full-dimensional positive density. The block-completion formulas and precision-zero equivalence here assume positive definiteness. Singular laws require support-aware conditional analysis rather than a silent pseudoinverse substitution.

</details>

<a id="gaussian-graphical-models-ex-10"></a>

### Exercise 10

Why is a sparse fitted precision matrix insufficient to claim a causal graph?

<details><summary>Hint 1</summary>

Its edges have no directions.

</details>

<details><summary>Hint 2</summary>

Marginalization and observational equivalence preserve other explanations.

</details>

<details><summary>Full solution</summary>

Precision zeros describe conditional association under the fitted Gaussian law. The graph is undirected and does not specify interventions. Latent variables can change observed precision sparsity, and multiple causal models can generate the same covariance. Additional causal structure and identification assumptions are required before assigning effects or arrow directions to its edges.

</details>
