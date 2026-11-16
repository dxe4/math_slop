
# Gaussian Vectors and the Multivariate Normal

## Normal laws have a joint geometry

A list of normal marginal distributions does not determine a multivariate normal model. Dependence must be specified, and some dependence structures with normal marginals are not jointly Gaussian. The special power of the Gaussian family comes from its joint structure: linear transformations remain Gaussian, zero cross-covariance implies independence between Gaussian blocks, and conditioning produces another Gaussian law with an explicitly calculable mean and covariance.

The covariance matrix also describes geometry. A positive-definite covariance produces a density on the whole Euclidean space. A singular covariance confines the vector to an affine subspace; the random vector still exists, but a full-dimensional Lebesgue density does not. Confusing those cases leads to inverses and determinants applied where they are undefined.

Preparation is [joint laws](joint-laws-conditioning-and-dependence.md), [covariance geometry](covariance-regression-and-inequalities.md), and the matrix, orthogonality, determinant and spectral-theorem material in [Lucent linear algebra](#/books/lucent-linear-algebra). Vectors are columns; $A^{\mathsf T}$ denotes transpose. All covariance matrices in this chapter are real and symmetric. We start from independent standard normal coordinates and prove the structural results through orthogonal changes of coordinates.

## Constructing a Gaussian vector

**Definition 11.1 (Standard Gaussian vector and affine Gaussian law).** A standard Gaussian vector $Z\in\mathbb R^m$ has mutually independent coordinates $Z_j\sim N(0,1)$. A Gaussian vector is a vector of the form
$$
X=\mu+AZ,
$$
where $\mu\in\mathbb R^d$ and $A$ is a real $d\times m$ matrix. Its mean and covariance are
$$
\mathbb E X=\mu,\qquad \operatorname{Cov}(X)=AA^{\mathsf T}=\Sigma.
$$
We allow singular $\Sigma$ and use $N_d(\mu,\Sigma)$ for the resulting law.

The mean formula follows coordinatewise from linearity. For the covariance, expand the matrix of centered products. Since $\mathbb E[ZZ^{\mathsf T}]=I_m$, taking expectations gives $A I_m A^{\mathsf T}$. The matrix is positive semidefinite because
$$
u^{\mathsf T}\Sigma u=\|A^{\mathsf T}u\|^2\ge0.
$$

Conversely, every symmetric positive-semidefinite matrix can occur. Its spectral decomposition is $\Sigma=U D U^{\mathsf T}$, with $U$ orthogonal and $D$ diagonal with nonnegative entries. Taking $A=U D^{1/2}$ constructs a Gaussian vector with that covariance. A zero eigenvalue introduces a deterministic linear relation rather than an invalid random variable.

A scalar normal variable with variance zero is interpreted here as a point mass at its mean. It has no ordinary normal density with a zero denominator. This convention lets linear projections and singular affine maps remain inside the Gaussian family without discarding their deterministic components.

**Lemma 11.2 (Orthogonal invariance).** If $Z$ is standard Gaussian in $\mathbb R^m$ and $Q$ is an orthogonal $m\times m$ matrix, then $QZ$ is also standard Gaussian.

*Proof.* Independence gives the joint density
$$
f_Z(z)=(2\pi)^{-m/2}\exp(-\|z\|^2/2).
$$
The transformation $y=Qz$ has absolute Jacobian determinant one, since $Q^{\mathsf T}Q=I$ implies $|\det Q|=1$. Also $\|Q^{\mathsf T}y\|=\|y\|$. The transformed density is therefore the same expression in $y$. It factors into the product of $m$ standard normal densities, proving both normal coordinates and their mutual independence. ∎

The lemma implies that any unit-length linear combination of the coordinates of $Z$ is standard normal: use that unit coefficient vector as the first row of an orthogonal matrix, completing an orthonormal basis. Thus $b^{\mathsf T}Z\sim N(0,\|b\|^2)$ for every $b$, including the constant-zero case $b=0$.

It also verifies that the notation $N_d(\mu,\Sigma)$ does not depend on the particular matrix factor $A$. To see this even for singular matrices, let $r=\operatorname{rank}\Sigma>0$ and write $\Sigma=U_rD_rU_r^{\mathsf T}$ using only positive eigenvalues. The matrix $B=D_r^{-1/2}U_r^{\mathsf T}A$ has $BB^{\mathsf T}=I_r$, so its rows are orthonormal. Completing them to an orthogonal matrix shows that $BZ$ has $r$ independent standard normal coordinates. Since the image of $A$ is the image of $\Sigma$, we have $AZ=U_rD_r^{1/2}BZ$. Its law is determined by that covariance decomposition. For $r=0$, $A=0$ and the law is simply the point mass at $\mu$.

## Linear images and the nonsingular density

**Theorem 11.3 (Affine transformations).** If $X\sim N_d(\mu,\Sigma)$, $C$ is a real $q\times d$ matrix and $b\in\mathbb R^q$, then
$$
CX+b\sim N_q(C\mu+b,C\Sigma C^{\mathsf T}).
$$
In particular, every linear combination $u^{\mathsf T}X$ is normal with mean $u^{\mathsf T}\mu$ and variance $u^{\mathsf T}\Sigma u$.

*Proof.* Substitute the defining representation: $CX+b=C\mu+b+CAZ$. This is an affine Gaussian construction with covariance $(CA)(CA)^{\mathsf T}=C\Sigma C^{\mathsf T}$. The scalar conclusion is its one-row case. ∎

Selecting a subset of coordinates is a special linear transformation, so Gaussian marginal blocks have the corresponding mean entries and covariance submatrices. Independence is not required between the original coordinates for this closure result.

**Theorem 11.4 (Density for positive-definite covariance).** If $\Sigma$ is positive definite, the law $N_d(\mu,\Sigma)$ has density
$$
f_X(x)=\frac1{(2\pi)^{d/2}(\det\Sigma)^{1/2}}
\exp\left[-\frac12(x-\mu)^{\mathsf T}\Sigma^{-1}(x-\mu)\right].
$$

*Proof.* Choose an invertible square factor $A$ with $AA^{\mathsf T}=\Sigma$ and use $X=\mu+AZ$. In the change of variables, $z=A^{-1}(x-\mu)$ and the absolute Jacobian determinant is $1/|\det A|$. Moreover,
$$
\|z\|^2=(x-\mu)^{\mathsf T}A^{-\mathsf T}A^{-1}(x-\mu)
=(x-\mu)^{\mathsf T}\Sigma^{-1}(x-\mu),
$$
and $|\det A|=(\det\Sigma)^{1/2}$. Substitution into the standard density proves the formula and its normalization. ∎

For a singular covariance of rank $r<d$, the construction lies in $\mu+\operatorname{im}(A)$, an affine subspace of dimension $r$. That subspace has $d$-dimensional Lebesgue measure zero, yet probability one. Therefore no full-dimensional density can represent this law. Replacing an inverse by an unexplained formal expression does not fix the displayed density; one must instead describe a law on the appropriate subspace.

**Example 11.5 (An explicit covariance and density).** Let $Z_1,Z_2$ be independent standard normals and put
$$
X_1=1+2Z_1,\qquad X_2=-1+Z_1+3Z_2.
$$
Here
$$
\mu=\begin{pmatrix}1\\-1\end{pmatrix},\quad
A=\begin{pmatrix}2&0\\1&3\end{pmatrix},\quad
\Sigma=\begin{pmatrix}4&2\\2&10\end{pmatrix}.
$$
The determinant is $36>0$, and
$$
\Sigma^{-1}=\frac1{36}\begin{pmatrix}10&-2\\-2&4\end{pmatrix}.
$$
Writing $u=x_1-1$ and $v=x_2+1$, the density is
$$
f(x_1,x_2)=\frac1{12\pi}
\exp\left[-\frac{10u^2-4uv+4v^2}{72}\right].
$$

The linear difference $X_1-X_2$ is normal with mean two and variance $4+10-2(2)=10$. Directly it equals $2+Z_1-3Z_2$, whose independent-coordinate variance is also ten. The off-diagonal covariance two shows that the coordinates are not independent, even though the underlying generating variables were.

## Gaussian independence and its converse limitation

**Theorem 11.6 (Zero cross-covariance for Gaussian blocks).** Suppose the concatenated vector $(X^{\mathsf T},Y^{\mathsf T})^{\mathsf T}$ is Gaussian. Then $X,Y$ are independent if and only if their cross-covariance matrix is zero.

*Proof.* Independence gives factorisation of products of coordinate variables, so finite Gaussian moments imply zero cross-covariance. Conversely, use one common standard-vector construction $X=\mu_X+AZ$ and $Y=\mu_Y+BZ$. Zero cross-covariance means $AB^{\mathsf T}=0$. Hence every row of $A$ is orthogonal to every row of $B$.

Choose an orthonormal basis of the row space of $A$, followed by one for the orthogonal row space of $B$, and complete it to an orthonormal basis of the ambient space. In the resulting orthogonal coordinates, $AZ$ depends only on the first coordinate group and $BZ$ only on the second. Orthogonal invariance makes all those coordinates independent standard normals. Functions of the two separate groups are independent. This proof also covers rank-deficient blocks and zero row spaces. ∎

The joint Gaussian hypothesis cannot be replaced by normal marginal distributions.

**Example 11.7 (Normal marginals, zero covariance, dependence).** Let $Z\sim N(0,1)$ and let $S$ be an independent fair sign. Set $X=Z$, $Y=SZ$. Symmetry makes each marginal standard normal. Also $\mathbb E[XY]=\mathbb E[SZ^2]=\mathbb E S\,\mathbb E Z^2=0$, so covariance is zero.

Nevertheless, $|X|=|Y|$ with probability one. If the variables were independent, conditional on any nonzero value of one coordinate, the other continuous normal coordinate would have probability zero of taking either matching sign value; equivalently their joint product density assigns zero probability to the two lines $y=x$ and $y=-x$. The actual law assigns probability one to those lines, proving dependence.

The vector is not jointly Gaussian. Indeed $X+Y$ equals zero when $S=-1$, giving an atom of mass one-half, but has positive variance. A nondegenerate normal law has no atom, contradicting the linear-combination property of a Gaussian vector.

## Conditional Gaussian laws

Partition a Gaussian vector into blocks $X\in\mathbb R^a$ and $Y\in\mathbb R^b$, with means $\mu_X,\mu_Y$ and covariance
$$
\begin{pmatrix}
\Sigma_{XX}&\Sigma_{XY}\\
\Sigma_{YX}&\Sigma_{YY}
\end{pmatrix}.
$$

**Theorem 11.8 (Conditional mean and covariance).** If $\Sigma_{YY}$ is positive definite, a regular conditional law of $X$ given $Y=y$ is Gaussian with
$$
m(y)=\mu_X+\Sigma_{XY}\Sigma_{YY}^{-1}(y-\mu_Y),
$$
$$
C=\Sigma_{XX}-\Sigma_{XY}\Sigma_{YY}^{-1}\Sigma_{YX}.
$$
The covariance $C$ is positive semidefinite and does not depend on $y$.

*Proof.* Define $K=\Sigma_{XY}\Sigma_{YY}^{-1}$ and the residual $R=X-\mu_X-K(Y-\mu_Y)$. This is a Gaussian linear transformation. Its cross-covariance with $Y$ is
$$
\Sigma_{XY}-K\Sigma_{YY}=0.
$$
The preceding theorem makes $R$ independent of $Y$. Its mean is zero, and expanding its covariance gives $C$. As a covariance, $C$ is positive semidefinite.

Since $X=\mu_X+K(Y-\mu_Y)+R$ with $R$ independent of $Y$, taking the fixed law of $R$ and translating it by $m(y)$ defines a measurable conditional kernel. For rectangles in the two block spaces, independence and integration against the law of $Y$ verify the conditional-law identity. Thus the stated kernel is a regular conditional version. ∎

The conditional formula is not division by $P(Y=y)$, which is zero for the nondegenerate continuous conditioning block. It is an explicitly constructed conditional law. Versions can be changed on a set of $y$ values of zero marginal probability without changing the joint law.

When the full covariance is positive definite, $C$ is positive definite as well. For a nonzero vector $u$, evaluate the full covariance quadratic form at $(u,-\Sigma_{YY}^{-1}\Sigma_{YX}u)$; its value is $u^{\mathsf T}Cu>0$. Thus the conditional law then has the density of Theorem 11.4. If only the conditioning block is nonsingular, $C$ may be singular and the conditional law must retain its lower-dimensional interpretation.

**Example 11.9 (Conditioning the explicit model).** For the pair in Example 11.5, condition on $X_1=x$. The second coordinate's conditional mean is
$$
-1+\frac24(x-1)=\frac{x-3}{2},
$$
and its conditional variance is $10-2^2/4=9$. Hence
$$
X_2\mid X_1=x\sim N((x-3)/2,9)
$$
as the regular version specified above.

At $x=3$, the first-coordinate construction corresponds to $Z_1=1$ and leaves the independent $3Z_2$ contribution, giving conditional mean zero and variance nine. This construction interprets the conditioning without falsely assigning positive probability to the event $X_1=3$. The unconditional variance ten includes variation in the predictable component; the conditional variance nine removes it.

## Characteristic functions

For completeness, the scalar standard normal characteristic function can be derived without complex contour integration. Let $\phi(t)=\mathbb E[e^{itZ}]$. Differentiating under the integral is justified by the integrability of $|Z|$. With $\varphi(z)=(2\pi)^{-1/2}e^{-z^2/2}$ and $\varphi'(z)=-z\varphi(z)$, integration by parts gives
$$
\mathbb E[Ze^{itZ}]
=-\int_{\mathbb R}e^{itz}\varphi'(z)\,dz
=it\phi(t).
$$
The boundary term vanishes by Gaussian decay. Therefore $\phi'(t)=i(it\phi(t))=-t\phi(t)$, and $\phi(0)=1$ yields $\phi(t)=e^{-t^2/2}$.

**Proposition 11.10 (Vector characteristic function).** For $X\sim N_d(\mu,\Sigma)$ and $t\in\mathbb R^d$,
$$
\mathbb E[e^{it^{\mathsf T}X}]
=\exp\left(it^{\mathsf T}\mu-\frac12t^{\mathsf T}\Sigma t\right).
$$

*Proof.* Use $X=\mu+AZ$ and independence of standard coordinates. The expectation factors into $e^{it^{\mathsf T}\mu}\prod_j e^{-(A^{\mathsf T}t)_j^2/2}$, which is the displayed formula. ∎

This formula remains valid for singular covariance and constant directions. The next chapter develops characteristic functions for general laws, including the uniqueness and convergence theorems that make them useful beyond Gaussian calculations. Their existence does not require ordinary moments, whereas differentiating them requires separate moment hypotheses.

## Orthogonal projections and a Cochran decomposition

**Definition 11.11 (Chi-squared law).** For an integer $r\ge1$, $\chi_r^2$ is the law of a sum of squares of $r$ independent standard normals. Let $\chi_0^2$ denote the point mass at zero.

**Theorem 11.12 (Orthogonal Gaussian projection decomposition).** Let $Z$ be standard Gaussian in $\mathbb R^n$. Let $P_1,\ldots,P_k$ be symmetric idempotent matrices with $P_iP_j=0$ for $i\ne j$ and $\sum_jP_j=I$. Put $r_j=\operatorname{rank}P_j$. Then the vectors $P_jZ$ are mutually independent, and
$$
Z^{\mathsf T}P_jZ=\|P_jZ\|^2\sim\chi_{r_j}^2.
$$
Their sum is $\|Z\|^2$. This is the orthogonal-projection form of a Cochran decomposition.

*Proof.* The range spaces of the projections are pairwise orthogonal. Their direct sum is all of $\mathbb R^n$ because the projections sum to the identity. Choose orthonormal bases of these ranges and concatenate them. In that orthogonal coordinate system, each $P_j$ retains exactly its own block of $r_j$ coordinates and zeros the others.

Orthogonal invariance makes the transformed coordinates independent standard normals. Each projected vector depends on one disjoint block, proving mutual independence. Its squared length is the sum of the corresponding $r_j$ squared coordinates, hence has the defined chi-squared law. The sum identity follows either from those blocks or from $\sum_jP_j=I$. ∎

For one standard normal, integration by parts gives $\mathbb E Z^2=1$ and $\mathbb E Z^4=3$: more generally the even-moment integral satisfies $\mathbb E Z^{2m}=(2m-1)\mathbb E Z^{2m-2}$, with vanishing boundary terms. Thus a $\chi_r^2$ variable has mean $r$ and variance $2r$ by independent-sum formulas. These are moment statements, not the full general theorem about arbitrary quadratic forms; the orthogonal-projection hypotheses above are the scope proved here.

**Example 11.13 (A normal sample's mean and residual sum).** Let $Y_1,\ldots,Y_4$ be iid $N(\mu,\sigma^2)$ with $\sigma>0$. Write $Y=\mu\mathbf1+\sigma Z$ and let $P=\mathbf1\mathbf1^{\mathsf T}/4$, the projection onto constant vectors. Its rank is one, and $I-P$ has rank three.

The projection theorem shows that
$$
U=\frac{2(\overline Y-\mu)}{\sigma}\sim N(0,1),
\qquad
V=\frac{\sum_{i=1}^4(Y_i-\overline Y)^2}{\sigma^2}\sim\chi_3^2
$$
are independent, because $U$ is determined by $PZ$ and $V$ by $(I-P)Z$. The squared standardised mean contributes $U^2\sim\chi_1^2$ and is independent of $V$. Their sum is $\sum_i(Y_i-\mu)^2/\sigma^2\sim\chi_4^2$.

In particular, the sample mean and sample variance are independent in this normal model. This is a structural Gaussian fact, not a generic consequence of independent observations. For another population law, mean and sample variance can be dependent.

## Exercises

### Exercise 11.1
<a id="gaussian-vectors-and-multivariate-normal-ex-1"></a>

Let $X=(Z_1+Z_2,2Z_1-Z_2)^{\mathsf T}$ for independent standard normals. Find its covariance and the distribution of $X_1+X_2$.

<details><summary>Hint 1</summary>

Write the coefficient matrix and multiply it by its transpose.

</details>
<details><summary>Hint 2</summary>

The sum simplifies directly in the generating coordinates.

</details>
<details><summary>Solution</summary>

The coefficient matrix has rows $(1,1)$ and $(2,-1)$, so covariance is $\begin{pmatrix}2&1\\1&5\end{pmatrix}$. The sum is $3Z_1$, hence is $N(0,9)$. The covariance calculation agrees: its variance is $2+5+2=9$. The coordinates are correlated and therefore not independent.

</details>

### Exercise 11.2
<a id="gaussian-vectors-and-multivariate-normal-ex-2"></a>

For independent standard normals, show that $(Z_1+Z_2)/\sqrt2$ and $(Z_1-Z_2)/\sqrt2$ are independent standard normals.

<details><summary>Hint 1</summary>

The two coefficient rows form an orthonormal basis.

</details>
<details><summary>Hint 2</summary>

Use orthogonal invariance, or compute covariance and use joint Gaussianity.

</details>
<details><summary>Solution</summary>

The transformation matrix is orthogonal, since both rows have norm one and their inner product is zero. Orthogonal invariance makes the transformed vector standard Gaussian, including independence. Alternatively, its covariance is the identity and it is jointly Gaussian, so the zero cross-covariance theorem gives independence. Uncorrelatedness without the joint Gaussian hypothesis would not suffice.

</details>

### Exercise 11.3
<a id="gaussian-vectors-and-multivariate-normal-ex-3"></a>

Let $X=(Z,2Z)$ for a standard normal $Z$. Find its covariance, identify its affine support, and explain why the positive-definite density formula is unavailable.

<details><summary>Hint 1</summary>

The second coordinate is a deterministic multiple of the first.

</details>
<details><summary>Hint 2</summary>

Check the determinant of the resulting covariance.

</details>
<details><summary>Solution</summary>

The covariance is $\begin{pmatrix}1&2\\2&4\end{pmatrix}$, of determinant zero and rank one. The vector lies on the line $x_2=2x_1$ with probability one. That line has planar Lebesgue measure zero, so the law has no two-dimensional density. It is still a valid Gaussian law under the affine construction.

</details>

### Exercise 11.4
<a id="gaussian-vectors-and-multivariate-normal-ex-4"></a>

A centered bivariate Gaussian has covariance $\begin{pmatrix}9&3\\3&4\end{pmatrix}$. Find the conditional law of the second coordinate given the first equals $x$.

<details><summary>Hint 1</summary>

The regression coefficient divides the cross-covariance by the first-coordinate variance.

</details>
<details><summary>Hint 2</summary>

Subtract the explained covariance contribution from the second-coordinate variance.

</details>
<details><summary>Solution</summary>

The conditional mean is $(3/9)x=x/3$, and conditional variance is $4-3^2/9=3$. Thus the regular conditional law is $N(x/3,3)$. The full covariance is positive definite because its determinant is $36-9=27>0$. The formula constructs a conditional density; it is not a ratio with denominator $P(X_1=x)$.

</details>

### Exercise 11.5
<a id="gaussian-vectors-and-multivariate-normal-ex-5"></a>

Suppose $X,Y$ have standard normal marginals and zero covariance. Does independence follow? Give a fully specified counterexample if not.

<details><summary>Hint 1</summary>

Multiply a standard normal by an independent random sign.

</details>
<details><summary>Hint 2</summary>

Compare the relationship between absolute values with what an independent continuous pair would permit.

</details>
<details><summary>Solution</summary>

Take $X=Z$ and $Y=SZ$, with $Z$ standard normal and $S$ an independent fair sign. Both marginals are standard normal and covariance is $\mathbb E S\,\mathbb E Z^2=0$. But $|X|=|Y|$ surely, whereas the independent product normal law assigns probability zero to the two matching lines. Independence fails because the pair is not jointly Gaussian.

</details>

### Exercise 11.6
<a id="gaussian-vectors-and-multivariate-normal-ex-6"></a>

For $X\sim N_d(\mu,\Sigma)$, find the characteristic function of $CX+b$ and explain why the formula remains valid if $C\Sigma C^{\mathsf T}$ is singular.

<details><summary>Hint 1</summary>

Rewrite the scalar product $t^{\mathsf T}(CX+b)$.

</details>
<details><summary>Hint 2</summary>

The formula uses a covariance quadratic form, not an inverse or determinant.

</details>
<details><summary>Solution</summary>

The function at $t\in\mathbb R^q$ is $\exp(it^{\mathsf T}(C\mu+b)-\tfrac12t^{\mathsf T}C\Sigma C^{\mathsf T}t)$. It follows directly by using the original characteristic function at $C^{\mathsf T}t$ and multiplying by $e^{it^{\mathsf T}b}$. No inverse is required, so singular output covariance causes no difficulty.

</details>

### Exercise 11.7
<a id="gaussian-vectors-and-multivariate-normal-ex-7"></a>

Let $P$ be an orthogonal projection of rank $r$ in $\mathbb R^n$, and let $Z$ be standard Gaussian. Find the distributions, means and variances of $\|PZ\|^2$ and $\|(I-P)Z\|^2$, and their dependence relation.

<details><summary>Hint 1</summary>

The two ranges are orthogonal and have dimensions $r$ and $n-r$.

</details>
<details><summary>Hint 2</summary>

Choose an orthonormal basis adapted to those two ranges.

</details>
<details><summary>Solution</summary>

The two squared norms are independent with laws $\chi_r^2$ and $\chi_{n-r}^2$. Their means are $r,n-r$, and variances $2r,2(n-r)$. Zero-rank cases are constant zero by the stated convention. The independence follows from disjoint groups of independent normal coordinates, not from merely adding two quantities to obtain a total.

</details>

### Exercise 11.8
<a id="gaussian-vectors-and-multivariate-normal-ex-8"></a>

For an iid normal sample of size $n\ge2$ and positive variance $\sigma^2$, prove the sample mean is independent of $S^2=(n-1)^{-1}\sum_i(Y_i-\overline Y)^2$, and identify the law of $(n-1)S^2/\sigma^2$.

<details><summary>Hint 1</summary>

Project onto the constant-vector subspace and its orthogonal complement.

</details>
<details><summary>Hint 2</summary>

Their ranks are one and $n-1$.

</details>
<details><summary>Solution</summary>

After standardising the sample, the constant projection determines the sample mean, while the orthogonal residual projection determines the sum of squared deviations. The two projected Gaussian vectors are independent by the projection theorem, so functions of them are independent. The residual squared norm has law $\chi_{n-1}^2$, giving $(n-1)S^2/\sigma^2\sim\chi_{n-1}^2$.

</details>

### Exercise 11.9
<a id="gaussian-vectors-and-multivariate-normal-ex-9"></a>

Let a Gaussian pair satisfy $X=Y$ with $Y$ standard normal. Explain the conditional law of $X$ given $Y=y$, and compare it with a density having positive conditional variance.

<details><summary>Hint 1</summary>

Conditioning determines the first coordinate exactly.

</details>
<details><summary>Hint 2</summary>

The conditional covariance formula subtracts one from one.

</details>
<details><summary>Solution</summary>

The conditional law is the point mass at $y$. The conditioning variance is one, the cross-covariance is one, and the conditional variance formula gives $1-1^2/1=0$. This is a singular Gaussian conditional law, not an ordinary density with a zero variance inserted into its denominator. The joint covariance is singular even though the conditioning block is invertible.

</details>

### Exercise 11.10
<a id="gaussian-vectors-and-multivariate-normal-ex-10"></a>

Explain why the orthogonal-projection theorem cannot be applied to arbitrary matrices $A,B$ merely because $A+B=I$. Give a simple one-dimensional example.

<details><summary>Hint 1</summary>

Symmetry, idempotence and orthogonality of ranges are substantive hypotheses.

</details>
<details><summary>Hint 2</summary>

Take both scalar matrices equal to one half.

</details>
<details><summary>Solution</summary>

In one dimension take $A=B=1/2$. They sum to the identity but are not idempotent, and their ranges are not orthogonal. For standard normal $Z$, the two quantities $(AZ)^2$ and $(BZ)^2$ are identical nonconstant variables, so they are dependent. Their sum is $Z^2/2$, not $Z^2$. Additivity of matrices alone does not give a Cochran decomposition.

</details>

## Sources

The exposition, proofs, numerical examples and exercises are newly written. Primary teaching references for complementary presentations are Yen-Chi Chen, University of Washington, [STAT 512 Lecture 8: Linear Models and Multivariate Normal Distributions](https://faculty.washington.edu/yenchic/20A_stat512/Lec8_Linear.html), and Dennis Sun, *The Art of Chance*, [Properties of a Normal Sample](https://dlsun.github.io/skis/multivariate/normal-sample.html), consulted 13 November 2026. The orthogonal-projection result is proved in the precise form used here; no more general quadratic-form theorem is assumed from its name.

## Summary

An affine image of independent standard normals gives a Gaussian vector with positive-semidefinite covariance. Orthogonal invariance explains linear closure, singular supports and the special implication from zero cross-covariance to independence for jointly Gaussian blocks. Positive-definite covariance gives the familiar full-dimensional density.

Conditioning separates a Gaussian vector into a linear prediction and an independent residual; its covariance is a Schur complement, possibly singular. Orthogonal projections split standard Gaussian coordinates into independent blocks and their squared lengths into chi-squared contributions. The [transform chapter](generating-transforms-and-characteristic-functions.md) next develops characteristic functions as general tools beyond this Gaussian setting.
