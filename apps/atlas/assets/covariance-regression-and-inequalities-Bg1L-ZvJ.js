var e=`---
parent_id: book-probability-models-proofs
chapter_id: covariance-regression-and-inequalities
title: "Covariance Geometry, Regression, and Moment Inequalities"
level: advanced-undergraduate
estimated_minutes: 250
license: CC BY-SA 4.0
---

# Covariance Geometry, Regression, and Moment Inequalities

Second moments turn centered random variables into geometry. Covariance is an inner product modulo almost-sure constants; regression is projection onto a smaller linear space; moment inequalities quantify what can be claimed without knowing a full law. This chapter separates linear association from independence and records equality cases, because the boundary of an inequality is often as informative as the bound.

## 1. Covariance and correlation

For square-integrable $X,Y$,

$\\operatorname{Cov}(X,Y)=\\mathbb{E}[(X-\\mathbb{E}[X])(Y-\\mathbb{E}[Y])] = \\mathbb{E}[XY]-\\mathbb{E}[X]\\mathbb{E}[Y]$.

It is symmetric and bilinear in centered variables. Also

$\\operatorname{Var}(\\sum_{i} a_{i}X_{i})=\\sum_{i}\\sum_{j} a_{i}a_{j}\\operatorname{Cov}(X_{i},X_{j})$.

Independence implies zero covariance when second moments exist, but the converse fails. If $X$ is uniform on $\\{-1,0,1\\}$ and $Y=X^{2}$, then $\\mathbb{E}[X]=\\mathbb{E}[XY]=0$, so covariance is zero, while $Y$ is determined by $X$.

When both variances are positive, correlation is

$\\rho_{X,Y}=\\operatorname{Cov}(X,Y)/(\\sigma_{X}\\sigma_{Y})$.

Cauchy–Schwarz gives $\\lvert \\rho \\rvert \\le 1$. Equality holds exactly when the centered variables are linearly dependent almost surely. Correlation is invariant under positive affine rescaling and changes sign under a negative scaling; it is not invariant under general nonlinear transformations.

## 2. Covariance matrices

For a random vector $X\\in \\mathbb{R}^{d}$ with finite second moments and mean $\\mu$, define

$\\Sigma =\\mathbb{E}[(X-\\mu )(X-\\mu )^{T}]$.

Then $\\Sigma$ is symmetric positive semidefinite because

$a^{T}\\Sigma a=\\operatorname{Var}(a^{T}X)\\ge 0$.

Conversely, singularity means some nonzero linear combination has zero variance and is therefore almost surely constant. A covariance matrix records only second-order structure; many distinct joint laws share it.

Under $Y=AX+b$, the covariance transforms as $\\operatorname{Cov}(Y)=A\\Sigma A^{T}$. This identity is safer than componentwise expansion and makes unit changes visible.

## 3. Best affine prediction

To predict square-integrable $Y$ from scalar $X$, minimise

$R(a,b)=\\mathbb{E}[(Y-a-bX)^{2}]$.

If $\\operatorname{Var}(X)>0$, the normal equations give

$b*=\\operatorname{Cov}(X,Y)/\\operatorname{Var}(X)$, $a*=\\mathbb{E}[Y]-b*\\mathbb{E}[X]$.

The residual $R=Y-a*-b*X$ is orthogonal to both $1$ and $X$: $\\mathbb{E}[R]=0$ and $\\mathbb{E}[RX]=0$. The minimal error is

$\\operatorname{Var}(Y)-\\operatorname{Cov}(X,Y)^{2}/\\operatorname{Var}(X)=\\operatorname{Var}(Y)(1-\\rho^{2})$

when $\\operatorname{Var}(Y)>0$. This is the best **affine** predictor, not necessarily the best predictor among all functions. The conditional mean $\\mathbb{E}[Y \\mid X]$ solves the unrestricted square-loss problem; the two agree when that conditional mean is affine.

For vector predictors with covariance matrix $\\Sigma_{X}$, coefficients solve $\\Sigma_{X}b=\\operatorname{Cov}(X,Y)$. If $\\Sigma_{X}$ is singular, fitted values may remain unique while coefficient vectors do not; a pseudoinverse or an identifiable parameterisation is then required.

## 4. Hölder, Minkowski, and Lyapunov

For $p,q>1$ with $1/p+1/q=1$, Hölder's inequality states

$\\mathbb{E}\\lvert XY\\rvert \\le (\\mathbb{E}\\lvert X\\rvert^{p})^{1/p}(\\mathbb{E}\\lvert Y\\rvert^{q})^{1/q}$.

Young's inequality $uv\\le u^{p}/p+v^{q}/q$, applied after normalization, proves it. Minkowski follows:

$\\lVert X+Y \\rVert_{p}\\le \\lVert X \\rVert_{p}+\\lVert Y \\rVert_{p}$, where $\\lVert X \\rVert_{p}=(\\mathbb{E}\\lvert X\\rvert^{p})^{1/p}$.

On a probability space, moment norms are monotone: for $0<r<s$,

$\\lVert X \\rVert_{r}\\le \\lVert X \\rVert_{s}$.

This is sometimes called Lyapunov's inequality. The probability-one normalization matters; on a general measure space an additional measure factor appears.

## 5. Paley–Zygmund and one-sided variance control

Markov gives upper-tail control from a positive moment. A second moment can also prove that a nonnegative variable is nontrivially positive. For $X\\ge 0$, $0<\\mathbb{E}[X^{2}]<\\infty$, and $0\\le \\theta <1$,

$\\mathbb{P}(X>\\theta \\mathbb{E}[X])\\ge (1-\\theta )^{2} \\mathbb{E}[X]^{2}/\\mathbb{E}[X^{2}]$.

**Proof.** Let $A=\\{X>\\theta \\mathbb{E}[X]\\}$. Then

$\\mathbb{E}[X]\\le \\theta \\mathbb{E}[X]+\\mathbb{E}[X\\mathbf{1}_{A}]$.

So $(1-\\theta )\\mathbb{E}[X]\\le \\mathbb{E}[X\\mathbf{1}_{A}]\\le \\sqrt{\\mathbb{E}[X^{2}]\\mathbb{P}(A)}$ by Cauchy–Schwarz. Square and rearrange.

For a centered variable $Z$ with variance $\\sigma^{2}$ and $t>0$, Cantelli's one-sided inequality is

$\\mathbb{P}(Z\\ge t)\\le \\sigma^{2}/(\\sigma^{2}+t^{2})$.

Apply Markov to $(Z+a)^{2}$, then minimise $(\\sigma^{2}+a^{2})/(t+a)^{2}$ at $a=\\sigma^{2}/t$. It improves the two-sided Chebyshev bound for a one-sided question.

## 6. Dependence warnings

1. Zero covariance is only orthogonality in $L^{2}$, not independence.
2. Correlation can be undefined even when a joint law is perfectly meaningful, because second moments may diverge or variance may vanish.
3. A strong nonlinear relation can have correlation zero.
4. Regression coefficients describe a projection under the governing law, not a causal effect.
5. Adding a predictor can change coefficients through covariance geometry; it does not retroactively change observed values.
6. Moment bounds are often worst-case sharp but may be conservative for a known family.
7. Covariance matrices must be positive semidefinite; arbitrary pairwise numbers need not form a valid joint second-moment structure.

## Proof details, degeneracies and further examples

The covariance geometry uses real square-integrable variables modulo almost-sure equality. Centring then removes constants. Before dividing by a variance or a norm, decide whether it is positive. Degenerate cases often have simple answers, but those answers are not obtained by substituting zero into a denominator.

**Theorem 10.1 (Centred Cauchy–Schwarz and equality).** For $X,Y\\in L^2$,
$|\\operatorname{Cov}(X,Y)|^2\\le\\operatorname{Var}(X)\\operatorname{Var}(Y)$.
Equality holds exactly when there are real $a,b$, not both zero, with
$a(X-E[X])+b(Y-E[Y])=0$ almost surely.

*Proof.* Put $U=X-E[X]$ and $V=Y-E[Y]$. Their product is integrable because $2|UV|\\le U^2+V^2$. If $E[V^2]=0$, then $V=0$ almost surely and both sides vanish; choose $a=0,b=1$ for the relation. Otherwise take $c=E[UV]/E[V^2]$ and expand
$E[(U-cV)^2]=E[U^2]-E[UV]^2/E[V^2]\\ge0$.
Equality is equivalent to $U=cV$ almost surely. Conversely a nontrivial relation either expresses one centered variable as a multiple of the other or forces a zero-norm case; direct substitution gives equality. ∎

Correlation is defined only when both variances are positive. In that case equality means a nonconstant affine relationship, with its slope sign determined by the correlation sign. If one coordinate is constant, the covariance inequality is still valid and sharp, but no numerical correlation should be reported.

**Proposition 10.2 (Affine regression including a constant predictor).** If $X,Y\\in L^2$ and $\\operatorname{Var}(X)>0$, the displayed optimal slope and intercept uniquely minimise risk. If $\\operatorname{Var}(X)=0$, every pair satisfying $a+bE[X]=E[Y]$ minimises risk, and the fitted value is the constant $E[Y]$.

*Proof.* Write $U=X-E[X]$ and $V=Y-E[Y]$. The risk decomposes as
$E[(Y-a-bX)^2]=E[(V-bU)^2]+(E[Y]-a-bE[X])^2$,
because the centered residual has mean zero. Choose the intercept to eliminate the last term. For positive predictor variance, completing the square gives
$E[(V-bU)^2]=\\operatorname{Var}(Y)-\\operatorname{Cov}(X,Y)^2/\\operatorname{Var}(X)
+\\operatorname{Var}(X)(b-b_*)^2$.
This proves uniqueness and the minimum. If predictor variance is zero, $X=E[X]$ almost surely, so only the constant $a+bE[X]$ matters, and the best such constant is $E[Y]$. ∎

With vector predictors, two optimal coefficient vectors may differ by a vector in the covariance nullspace. The difference of their centered fitted values then has variance zero and is zero almost surely. Thus nonunique coordinates need not mean nonunique predictions. This is the probabilistic meaning of collinearity, independent of how a numerical solver chooses one coefficient vector.

**Proposition 10.3 (Hölder and Minkowski with domains).** Hölder holds for $p,q>1$ with $1/p+1/q=1$ and finite corresponding absolute moments. Minkowski holds for $1\\le p<\\infty$ and $X,Y\\in L^p$.

*Proof.* If either Hölder norm is zero, its variable vanishes almost surely and the inequality is immediate. Otherwise divide the absolute variables by their positive norms. Young's pointwise inequality bounds their product by $|X|^p/(p\\|X\\|_p^p)+|Y|^q/(q\\|Y\\|_q^q)$. Taking expectations gives one and undoing the normalization proves Hölder.

For Minkowski, $p=1$ follows from the pointwise triangle inequality. For $p>1$, first note $|X+Y|^p\\le2^{p-1}(|X|^p+|Y|^p)$, so the sum belongs to $L^p$. Put $S=X+Y$. The pointwise inequality
$|S|^p\\le(|X|+|Y|)|S|^{p-1}$
and two Hölder applications give
$\\|S\\|_p^p\\le(\\|X\\|_p+\\|Y\\|_p)\\|S\\|_p^{p-1}$.
If the last norm is zero the conclusion is immediate; otherwise divide by its positive power. ∎

The range $p\\ge1$ is essential for the norm triangle inequality in this form. For moment monotonicity with $0<r<s$ and finite $s$th moment, apply Jensen to the convex function $t^{s/r}$ and the nonnegative variable $|X|^r$. This yields $(E|X|^r)^{s/r}\\le E|X|^s$, and taking the appropriate roots gives the claimed comparison. Lower-order moment finiteness follows as well, for example from $|x|^r\\le1+|x|^s$.

**Theorem 10.4 (Cantelli and its event inclusion).** If $E[Z]=0$, $\\operatorname{Var}(Z)=\\sigma^2<\\infty$, and $t>0$, then
$P(Z\\ge t)\\le\\sigma^2/(\\sigma^2+t^2)$.

*Proof.* For every $a\\ge0$, the event $Z\\ge t$ implies $Z+a\\ge t+a>0$, and hence $(Z+a)^2\\ge(t+a)^2$. Markov therefore gives
$P(Z\\ge t)\\le(\\sigma^2+a^2)/(t+a)^2$.
For positive variance, differentiating this rational function gives derivative
$2(at-\\sigma^2)/(t+a)^3$.
It is negative before $a=\\sigma^2/t$ and positive afterwards. Substitution of that nonnegative minimiser gives the result. If variance is zero, $Z=0$ almost surely and the tail probability is zero directly. ∎

The restriction $a\\ge0$ makes the event inclusion valid. An arbitrary negative shift would not support the same square comparison. In contrast, two-sided Chebyshev uses the square of the centered variable and needs no shift optimization.

### Worked Example 10.5: exact affine prediction with independent noise

Let $X$ be uniform on $(-1,1)$, and let $\\varepsilon$ be independent of $X$ with mean zero and variance four. Put $Y=2+3X+\\varepsilon$. The predictor variance is $1/3$, the response mean is two, and
$\\operatorname{Cov}(X,Y)=3\\operatorname{Var}(X)+\\operatorname{Cov}(X,\\varepsilon)=1$.

Thus the optimal slope is three and intercept is two. The response variance is $9(1/3)+4=7$, so the minimal affine error is $7-1^2/(1/3)=4$. This agrees with the direct residual $\\varepsilon$ and provides an exact check on the regression algebra.

Both variances are positive, and correlation squared is $1/[7/3]=3/7$. The formula $\\operatorname{Var}(Y)(1-\\rho^2)$ therefore again gives four. This correlation does not measure the size of the slope alone: changing the noise variance alters correlation while leaving the underlying slope three.

Independence of the noise supplies zero covariance and the conditional-mean identity $E[Y\\mid X]=2+3X$. Under only a zero covariance assumption, the affine calculation still holds, but the unrestricted conditional predictor might be nonlinear. The distinction between orthogonality and independence therefore matters even in a familiar linear expression.

### Worked Example 10.6: which equicorrelations are possible?

Consider a proposed covariance matrix for three centered, unit-variance variables, with common off-diagonal covariance $\\rho$. Its quadratic form is
$(1-\\rho)\\sum_i a_i^2+\\rho(\\sum_i a_i)^2$.
On vectors whose coordinates sum to zero, it acts by the factor $1-\\rho$. On the all-ones direction it acts by $1+2\\rho$. Positive semidefiniteness therefore requires and is equivalent to $-1/2\\le\\rho\\le1$.

These values can actually be realised without assuming Gaussian variables. For $\\rho=1$, use the same fair sign in all three coordinates. For $\\rho=-1/2$, select uniformly among the six permutations of $(\\sqrt{3/2},-\\sqrt{3/2},0)$. Every coordinate has mean zero and variance one. The coordinates sum to zero; symmetry and the variance of that sum give common covariance minus one half.

For an intermediate value, independently choose the first construction with probability $\\theta=(2\\rho+1)/3$ and the second otherwise. Their means are both zero, so mixing their covariance matrices gives off-diagonal value $\\theta-(1-\\theta)/2=\\rho$, with unit diagonal. The mixing probability lies in $[0,1]$ exactly in the permitted range.

Pairwise correlations lying in $[-1,1]$ therefore are not the only requirement on a proposed multivariable model. The full covariance matrix must be positive semidefinite. At the lower endpoint a nontrivial linear constraint appears; at the upper endpoint all coordinates agree.

### Worked Example 10.7: a sharp one-sided bound

Let a centered variable $Z$ equal three with probability $4/13$ and equal $-4/3$ with probability $9/13$. Its mean is $12/13-12/13=0$, while its second moment is
$9(4/13)+(16/9)(9/13)=4$.
Thus its variance is four.

The chance $P(Z\\ge3)=4/13$ exactly equals Cantelli's bound $4/(4+9)$. For the optimizing shift $a=4/3$, the shifted square is zero on the negative support point and equals $(3+4/3)^2$ on the positive point. This is precisely the two-point situation in which the Markov step is sharp.

Two-sided Chebyshev would give upper bound $4/9$ for this one-sided event, a valid but larger number. Cantelli improves the answer by using the event's direction and the zero-mean constraint. Neither bound estimates the actual tail of every distribution having those moments, but this example shows that the smaller one-sided bound cannot be universally reduced.

## Matching an inequality to the question

Markov requires a nonnegative quantity and a positive threshold. Chebyshev applies it to a centered square. Cantelli uses a shifted square optimized for one direction. Paley–Zygmund uses a second moment to force a nonnegligible chance of a positive contribution, rather than to control a large tail from above.

Choosing between them begins by identifying the event and the available moments. A nonnegative variable with positive second moment has positive mean, so the denominator in the stated Paley–Zygmund bound is meaningful. If it vanishes almost surely, its separate degenerate answer is immediate. A finite first moment does not supply a second-moment bound, and an undefined correlation cannot be interpreted as evidence of weak dependence.

These are distribution-free comparisons within their hypotheses. A known complete law may support a sharper exact tail calculation, while a moment inequality remains useful when only limited information is available.

## 7. Exercises with complete solutions

### 1. Computational covariance identity

**Exercise 10.1**
<a id="covariance-regression-and-inequalities-ex-1"></a>

Derive $\\operatorname{Cov}(X,Y)=\\mathbb{E}[XY]-\\mathbb{E}[X]\\mathbb{E}[Y]$.

<details>
<summary>Hint 1</summary>

Expand the product of centered variables.

</details>
<details>
<summary>Hint 2</summary>

Use linearity to collect the products of means.

</details>
<details>
<summary>Solution</summary>

**Solution.** Expand $(X-\\mathbb{E}X)(Y-\\mathbb{E}Y)$, take expectations, and combine the four terms; three reduce to products of means, leaving one negative copy.


</details>

### 2. Shifts and scales

**Exercise 10.2**
<a id="covariance-regression-and-inequalities-ex-2"></a>

Show $\\operatorname{Cov}(aX+c,bY+d)=ab\\operatorname{Cov}(X,Y)$.

<details>
<summary>Hint 1</summary>

Find the centered form of each transformed variable.

</details>
<details>
<summary>Hint 2</summary>

The additive constants cancel.

</details>
<details>
<summary>Solution</summary>

**Solution.** Centering removes $c,d$, leaving centered variables $a(X-\\mathbb{E}X)$ and $b(Y-\\mathbb{E}Y)$; multiply and average.


</details>

### 3. Variance of a sum

**Exercise 10.3**
<a id="covariance-regression-and-inequalities-ex-3"></a>

Prove $\\operatorname{Var}(X+Y)=\\operatorname{Var}(X)+\\operatorname{Var}(Y)+2\\operatorname{Cov}(X,Y)$.

<details>
<summary>Hint 1</summary>

Centre the sum before expanding its square.

</details>
<details>
<summary>Hint 2</summary>

The mixed term is twice the centered product.

</details>
<details>
<summary>Solution</summary>

**Solution.** Expand the square of the sum of the two centered variables and take expectations.


</details>

### 4. Independence implication

**Exercise 10.4**
<a id="covariance-regression-and-inequalities-ex-4"></a>

If $X,Y$ are independent and square-integrable, show their covariance is zero.

<details>
<summary>Hint 1</summary>

Finite second moments give the necessary integrability.

</details>
<details>
<summary>Hint 2</summary>

Use product expectation factorisation under independence.

</details>
<details>
<summary>Solution</summary>

**Solution.** Independence makes $\\mathbb{E}[XY]=\\mathbb{E}[X]\\mathbb{E}[Y]$; substitute into the computational identity.


</details>

### 5. Converse counterexample

**Exercise 10.5**
<a id="covariance-regression-and-inequalities-ex-5"></a>

For uniform $X$ on $\\{-1,0,1\\}$ and $Y=X^{2}$, verify zero covariance and dependence.

<details>
<summary>Hint 1</summary>

Compute the odd moments by symmetry.

</details>
<details>
<summary>Hint 2</summary>

Check one joint zero event against the product of its marginals.

</details>
<details>
<summary>Solution</summary>

**Solution.** Symmetry gives $\\mathbb{E}[X]=\\mathbb{E}[X^{3}]=0$, so covariance is zero. Yet $Y$ is a nonconstant function of $X$, and for example $\\mathbb{P}(X=0,Y=0)=1/3$ differs from $(1/3)(1/3)$.


</details>

### 6. Correlation bound

**Exercise 10.6**
<a id="covariance-regression-and-inequalities-ex-6"></a>

Prove $\\lvert \\rho \\rvert \\le 1$.

<details>
<summary>Hint 1</summary>

Apply Cauchy–Schwarz to the centered variables.

</details>
<details>
<summary>Hint 2</summary>

Divide only after checking that both standard deviations are positive.

</details>
<details>
<summary>Solution</summary>

**Solution.** Apply Cauchy–Schwarz to centered $X,Y$: $\\lvert \\operatorname{Cov}(X,Y)\\rvert \\le \\sigma_{X}\\sigma_{Y}$, then divide by the positive denominator.


</details>

### 7. Equality in correlation

**Exercise 10.7**
<a id="covariance-regression-and-inequalities-ex-7"></a>

What does $\\rho =1$ imply?

<details>
<summary>Hint 1</summary>

Use the equality condition for centred Cauchy–Schwarz.

</details>
<details>
<summary>Hint 2</summary>

The sign of the covariance determines the sign of the affine slope.

</details>
<details>
<summary>Solution</summary>

**Solution.** Equality in Cauchy–Schwarz makes $Y-\\mathbb{E}Y=c(X-\\mathbb{E}X)$ almost surely. Positive correlation forces $c>0$; thus $Y$ is an increasing affine function of $X$ almost surely.


</details>

### 8. A covariance matrix check

**Exercise 10.8**
<a id="covariance-regression-and-inequalities-ex-8"></a>

Can $[[1,2],[2,1]]$ be a covariance matrix?

<details>
<summary>Hint 1</summary>

A covariance matrix must give nonnegative variance for every linear combination.

</details>
<details>
<summary>Hint 2</summary>

Test the contrast vector with coefficients one and minus one.

</details>
<details>
<summary>Solution</summary>

**Solution.** No. With $a=(1,-1)$ and $\\Sigma=\\begin{pmatrix}1&2\\\\2&1\\end{pmatrix}$, $a^{T}\\Sigma a=-2<0$, contradicting positive semidefiniteness. Equivalently, the implied correlation is two.


</details>

### 9. Linear transformation

**Exercise 10.9**
<a id="covariance-regression-and-inequalities-ex-9"></a>

If $\\operatorname{Cov}(X)=\\Sigma$, prove $\\operatorname{Cov}(AX+b)=A\\Sigma A^{T}$.

<details>
<summary>Hint 1</summary>

Centre the transformed vector.

</details>
<details>
<summary>Hint 2</summary>

Take its outer product before moving fixed matrices outside expectation.

</details>
<details>
<summary>Solution</summary>

**Solution.** Centered $AX+b$ equals $A(X-\\mathbb{E}X)$. Form the outer product and move fixed matrices outside expectation.


</details>

### 10. Scalar regression slope

**Exercise 10.10**
<a id="covariance-regression-and-inequalities-ex-10"></a>

Derive the normal equations for $a,b$.

<details>
<summary>Hint 1</summary>

Expand the risk as a finite quadratic in the coefficients.

</details>
<details>
<summary>Hint 2</summary>

Its two first-order conditions say the residual is orthogonal to one and X.

</details>
<details>
<summary>Solution</summary>

**Solution.** Differentiate the quadratic risk: $\\mathbb{E}[Y-a-bX]=0$ and $\\mathbb{E}[X(Y-a-bX)]=0$. The first gives $a=\\mathbb{E}[Y]-b\\mathbb{E}[X]$; substituting into the second gives $b\\operatorname{Var}(X)=\\operatorname{Cov}(X,Y)$.


</details>

### 11. Minimal error

**Exercise 10.11**
<a id="covariance-regression-and-inequalities-ex-11"></a>

Derive $\\operatorname{Var}(Y)(1-\\rho^{2})$.

<details>
<summary>Hint 1</summary>

First minimise over the intercept by centring.

</details>
<details>
<summary>Hint 2</summary>

Complete the square in the slope and rewrite with correlation.

</details>
<details>
<summary>Solution</summary>

**Solution.** After centering, expand $\\mathbb{E}[(Y-bX)^{2}]=\\operatorname{Var}(Y)-2b\\operatorname{Cov}(X,Y)+b^{2}\\operatorname{Var}(X)$. Insert $b=\\operatorname{Cov}(X,Y)/\\operatorname{Var}(X)$ and rewrite the reduction using correlation.


</details>

### 12. Perfect nonlinear prediction

**Exercise 10.12**
<a id="covariance-regression-and-inequalities-ex-12"></a>

Let symmetric $X$ have $Y=X^{2}$. Can affine regression be worse than conditional-mean prediction?

<details>
<summary>Hint 1</summary>

A symmetric nonlinear relation can have zero covariance.

</details>
<details>
<summary>Hint 2</summary>

The conditional mean sees the entire deterministic relation, while an affine predictor cannot.

</details>
<details>
<summary>Solution</summary>

**Solution.** Yes. Symmetry can make covariance zero, so the affine predictor is the constant $\\mathbb{E}[Y]$ with positive error. But $\\mathbb{E}[Y \\mid X]=X^{2}=Y$, giving zero error.


</details>

### 13. Hölder special case

**Exercise 10.13**
<a id="covariance-regression-and-inequalities-ex-13"></a>

Recover Cauchy–Schwarz from Hölder.

<details>
<summary>Hint 1</summary>

Choose the equal conjugate exponents.

</details>
<details>
<summary>Hint 2</summary>

The resulting moment norms are the two quadratic norms.

</details>
<details>
<summary>Solution</summary>

**Solution.** Choose conjugate exponents $p=q=2$; the Hölder bound becomes exactly Cauchy–Schwarz.


</details>

### 14. Moment monotonicity

**Exercise 10.14**
<a id="covariance-regression-and-inequalities-ex-14"></a>

Show $\\mathbb{E}\\lvert X\\rvert \\le (\\mathbb{E}\\lvert X\\rvert^{3})^{1/3}$.

<details>
<summary>Hint 1</summary>

Use Hölder on the absolute variable times one.

</details>
<details>
<summary>Hint 2</summary>

The conjugate exponent to three is three halves.

</details>
<details>
<summary>Solution</summary>

**Solution.** Hölder on $\\lvert X\\rvert \\cdot 1$ with exponents $3$ and $3/2$ gives the inequality because $\\mathbb{E}[1]=1$.


</details>

### 15. Minkowski at $p=2$

**Exercise 10.15**
<a id="covariance-regression-and-inequalities-ex-15"></a>

Prove $\\lVert X+Y \\rVert_{2}\\le \\lVert X \\rVert_{2}+\\lVert Y \\rVert_{2}$.

<details>
<summary>Hint 1</summary>

Expand the squared L2 norm.

</details>
<details>
<summary>Hint 2</summary>

Bound its mixed expectation by Cauchy–Schwarz and take nonnegative square roots.

</details>
<details>
<summary>Solution</summary>

**Solution.** Expand the squared norm and bound $\\mathbb{E}[XY]\\le \\lVert X \\rVert_{2}\\lVert Y \\rVert_{2}$; the result is at most $(\\lVert X \\rVert_{2}+\\lVert Y \\rVert_{2})^{2}$. Take square roots.


</details>

### 16. Paley–Zygmund calculation

**Exercise 10.16**
<a id="covariance-regression-and-inequalities-ex-16"></a>

If $X\\ge 0$, $\\mathbb{E}[X]=2$, $\\mathbb{E}[X^{2}]=10$, bound $\\mathbb{P}(X>1)$.

<details>
<summary>Hint 1</summary>

The requested threshold is half the supplied mean.

</details>
<details>
<summary>Hint 2</summary>

Insert that fraction into Paley–Zygmund.

</details>
<details>
<summary>Solution</summary>

**Solution.** Here $\\theta =1/2$. The bound is $(1/2)^{2}\\cdot 4/10=1/10$.


</details>

### 17. Cantelli calculation

**Exercise 10.17**
<a id="covariance-regression-and-inequalities-ex-17"></a>

If $\\mathbb{E}[X]=5$, $\\operatorname{Var}(X)=4$, bound $\\mathbb{P}(X\\ge 8)$.

<details>
<summary>Hint 1</summary>

Centre at the supplied mean.

</details>
<details>
<summary>Hint 2</summary>

Use the positive excess of the threshold as the Cantelli parameter.

</details>
<details>
<summary>Solution</summary>

**Solution.** Set $Z=X-5$ and $t=3$. Cantelli gives $4/(4+9)=4/13$.


</details>

### 18. Uncorrelated sum

**Exercise 10.18**
<a id="covariance-regression-and-inequalities-ex-18"></a>

If $X_{1},...,X_{n}$ are pairwise uncorrelated with variances $v_{i}$, find the variance of their sum.

<details>
<summary>Hint 1</summary>

Expand the variance into all covariance terms.

</details>
<details>
<summary>Hint 2</summary>

Pairwise uncorrelatedness removes every off-diagonal term.

</details>
<details>
<summary>Solution</summary>

**Solution.** The double covariance expansion has zero off-diagonal terms, leaving $\\sum_{i}v_{i}$. Mutual independence is stronger than needed.


</details>

### 19. Singular covariance meaning

**Exercise 10.19**
<a id="covariance-regression-and-inequalities-ex-19"></a>

If $\\Sigma$ is singular, prove some nontrivial linear combination of centered coordinates vanishes almost surely.

<details>
<summary>Hint 1</summary>

Choose a nonzero vector in the covariance matrix nullspace.

</details>
<details>
<summary>Hint 2</summary>

Its scalar linear combination has zero variance and hence is almost surely constant.

</details>
<details>
<summary>Solution</summary>

**Solution.** Choose nonzero $a$ in the nullspace. Then $\\operatorname{Var}(a^{T}X)=a^{T}\\Sigma a=0$, so $a^{T}(X-\\mathbb{E}[X])=0$ almost surely.


</details>

### 20. Units audit

**Exercise 10.20**
<a id="covariance-regression-and-inequalities-ex-20"></a>

If distance is converted from metres to centimetres, how do covariance with time and correlation change?

<details>
<summary>Hint 1</summary>

Treat conversion of units as positive scaling of one variable.

</details>
<details>
<summary>Hint 2</summary>

Both covariance and that standard deviation scale by the same factor.

</details>
<details>
<summary>Solution</summary>

**Solution.** Distance is multiplied by $100$, so covariance with time is multiplied by $100$. Its standard deviation also multiplies by $100$, so correlation is unchanged.


</details>

## 8. Investigation: dependence beyond correlation

Construct three finite joint laws for centered $(X,Y)$ with identical variances and zero covariance: one independent, one with $Y$ determined by $X$, and one with a different nonlinear dependence. Report their joint tables, verify the moments exactly, and propose a diagnostic that distinguishes them.

**Worked solution.** Let $X$ be uniform on $\\{-1,0,1\\}$.

1. For the independent law, let $Y$ be an independent copy of $X$. Both means vanish, variances are $2/3$, and covariance factors to zero.
2. For deterministic dependence, initially take $Y_{0}=X^{2}-2/3$. Its mean and covariance vanish. Its variance is $\\mathbb{E}[X^{4}]-(2/3)^{2}=2/3-4/9=2/9$. Rescale $Y=\\sqrt{3}Y_{0}$ so its variance becomes $2/3$, matching $X$.
3. For a sign-alternating dependence, on the six equiprobable points obtained by pairing each $X$ with a $Y$ value so every row and column has the uniform marginal, use the cyclic permutation mixture: with probability $1/2$, $Y=X$; with probability $1/2$, $Y=-X$, conditional on the same uniform $X$. Then $\\operatorname{Cov}(X,Y)=(1/2)\\mathbb{E}[X^{2}]-(1/2)\\mathbb{E}[X^{2}]=0$, and both variances are $2/3$, but $\\mathbb{P}(\\lvert Y\\rvert =\\lvert X\\rvert )=1$.

Joint tables are obtained by listing the nine independent cells with mass $1/9$; the three graph cells $(x,\\sqrt{3}(x^{2}-2/3))$ with mass $1/3$; and the up to six cells $(x,x),(x,-x)$ with mass $1/6$ each, combining duplicate $(0,0)$ mass to $1/3$. Exact summation verifies all claims. The statistic $\\mathbb{E}[(Y-\\mathbb{E}[Y \\mid X])^{2}]$ is positive for the independent law and zero for the deterministic law; $\\mathbb{P}(\\lvert Y\\rvert =\\lvert X\\rvert )$ separates the cyclic mixture from independence. The project demonstrates why a covariance matrix cannot identify a joint law.

## Sources

For integration and moment inequalities, see Rick Durrett, *Probability: Theory and Examples*, fifth edition, sections 1.4–1.7, on the [author's official Duke page](https://sites.math.duke.edu/~rtd/PTE/pte.html). Conditional expectation and its projection interpretation are treated in section 4.1. The additional proofs and worked examples here are original.

## 9. Summary and forward route

Covariance is centered $L^{2}$ geometry. Correlation normalises it but records only linear association. Covariance matrices are positive semidefinite and transform predictably under linear maps. Least-squares regression is projection, while Hölder, Minkowski, Paley–Zygmund, and Cantelli translate moments into bounds with explicit assumptions.

The main route continues with [Gaussian Vectors and the Multivariate Normal](gaussian-vectors-and-multivariate-normal.md). After that chapter, **Generating Transforms and Characteristic Functions** will encode whole laws rather than only their first two moments.
`;export{e as default};