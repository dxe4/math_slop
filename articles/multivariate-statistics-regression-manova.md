
# Multivariate regression and MANOVA

Regression can predict several related outcomes at once. A multivariate linear model keeps the same design matrix for every outcome but retains their residual covariance, making a joint group comparison possible. This L4 article derives the least-squares coefficient matrix, works a two-outcome group example, and states where MANOVA's distributional test assumptions enter. Preparation is [multiple regression](../books/regression-and-generalised-linear-models/multiple-regression-collinearity.md), [covariance matrices](multivariate-statistics-mean-vectors-covariance.md), and [Gaussian geometry](multivariate-statistics-multivariate-normal.md).

## One design, several responses

Let Y be n-by-q, with one row of q outcomes per observation, and X be n-by-p with full column rank. Write Y=XB+E for p-by-q coefficient matrix B. Least squares minimizes the squared Frobenius norm ||Y-XB||_F², the sum of squared residual entries. Differentiating column by column, or applying scalar normal equations to each outcome, gives X^T X Bhat=X^T Y. Since X^T X is invertible, Bhat=(X^T X)^{-1}X^T Y. The fitted matrix is P_X Y, where P_X projects onto the column space of X.

The least-squares point estimates are obtained column by column, but the outcomes need not be probabilistically independent. Their residual cross-products form E_matrix=(Y-XBhat)^T(Y-XBhat), a q-by-q positive-semidefinite matrix. It records both residual sums of squares and residual cross-products. Replacing it by only its diagonal loses information about a joint contrast. The same X must align with every Y row; missing outcomes cannot be silently dropped separately by column without changing the common design.

## Worked example: two groups and two outcomes

Take four source-owned observations, two in group A with response vectors (0,1),(2,0), and two in group B with vectors (2,3),(4,3). Their mean vectors are m_A=(1,1/2) and m_B=(3,3); grand mean is (2,7/4). A group-indicator regression reproduces those group means. The within-group residual vectors are (-1,1/2),(1,-1/2),(-1,0),(1,0). Summing outer products gives E_matrix=[[4,-1],[-1,1/2]], whose determinant is one and so is positive definite.

For a two-group mean comparison, the between-group sum-of-products is H=(n_A n_B/n)(m_A-m_B)(m_A-m_B)^T. Here the scalar factor is one and the difference is (-2,-5/2), so H=[[4,5],[5,25/4]]. The total E_matrix+H is [[8,4],[4,27/4]], with determinant 54-16=38. Wilks' descriptive determinant ratio is Lambda=det(E_matrix)/det(E_matrix+H)=1/38. A small ratio says the group contrast is large relative to within-group spread in this constructed table. It is not a p-value and does not prove a population group effect.

The matrices are positive semidefinite because each is an outer-product sum or a nonnegative multiple of one. The ratio is defined here because E_matrix is positive definite. In other datasets with q large relative to residual degrees of freedom, E_matrix can be singular and this ordinary determinant form becomes unstable or undefined for standard inference. Regularizing it changes the procedure and reference distribution.

The least-squares fitted means have a useful projection interpretation. If X contains an intercept and one indicator for group B, the fitted row for every group-A observation is m_A, while every group-B fitted row is m_B. The residual columns are orthogonal to both design columns: residuals sum to zero overall and within each group. In the worked table, group-A residual vectors cancel pairwise, as do group-B residual vectors. This verifies the normal equations without a matrix inverse and explains why H compares fitted group means while E_matrix measures what remains within groups.

The numerical Lambda of 1/38 is unusually small because the source-owned groups were constructed with a large contrast and modest within-group scatter. Changing one group-B response can alter both H and E_matrix. A single descriptive ratio should therefore be accompanied by the actual response values or sufficient matrices, not only a verbal claim that groups differ. An exact test would additionally require the sampling model and its reference distribution.

## Hypothesis, covariance and test law

MANOVA tests a joint linear hypothesis on B, often equality of several group mean vectors. Classical exact reference distributions require independent observations, multivariate-normal errors, and a common positive-definite error covariance across design rows, with suitable design rank and degrees of freedom. Wilks' Lambda is one possible statistic; Pillai's trace and other criteria use the same hypothesis and error matrices differently. Their exact or approximate null distributions require matrix-distribution theory, not just the determinant calculation. The [advanced Gaussian inference primary](../books/advanced-statistical-inference-reference/multivariate-normal-geometry.md) and [regression book](../books/regression-and-generalised-linear-models/anova-designed-experiments.md) provide broader foundations; this article keeps the two-outcome geometry explicit.

A joint result is not equivalent to separately testing each outcome and keeping the smallest p-value. The outcomes' covariance and the number of comparisons matter. Nor does a group label automatically support a causal interpretation: random assignment, design and missingness determine that. If observations are consecutive time points, independent-error MANOVA assumptions can fail; [Time Series multivariate dependence](../books/time-series/multivariate-series-cointegration.md) gives the needed lag-covariance viewpoint.

## Exercises

### Exercise 1 {#multivariate-statistics-regression-manova-ex-means}

For the worked four observations, compute the two group mean vectors.
<details><summary>Hint 1</summary>Average the two response vectors in each group coordinatewise.</details>
<details><summary>Hint 2</summary>Group A uses (0,1),(2,0); group B uses (2,3),(4,3).</details>
<details><summary>Solution</summary>Group A has mean ((0+2)/2,(1+0)/2)=(1,1/2). Group B has mean ((2+4)/2,(3+3)/2)=(3,3). Their difference is (-2,-5/2).</details>

### Exercise 2 {#multivariate-statistics-regression-manova-ex-wilks}

Using E_matrix determinant one and E_matrix+H determinant 38 in the worked case, calculate Wilks' Lambda and explain what it is not.
<details><summary>Hint 1</summary>Take the determinant ratio.</details>
<details><summary>Hint 2</summary>A ratio is not a reference-tail probability.</details>
<details><summary>Solution</summary>Lambda=1/38. It summarizes relative within- to total variation for this constructed comparison. It is not a p-value or causal effect; either claim needs a sampling model and, for causality, an appropriate design.</details>

## Sources

Original Euler matrix least-squares derivation, invented two-group table and exercises under CC BY-SA 4.0. Classical MANOVA reference laws are named imports with assumptions; linked Euler regression and Gaussian chapters provide primary context. Updated 2026-11-14.
