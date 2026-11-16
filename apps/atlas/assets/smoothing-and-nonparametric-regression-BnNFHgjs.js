var e=`---
parent_id: book-advanced-statistical-inference-reference
chapter_id: smoothing-and-nonparametric-regression
title: "Smoothing and Nonparametric Regression"
level: graduate
license: CC BY-SA 4.0
---

# Smoothing and Nonparametric Regression

Preparation is iid and triangular-array central limits, Taylor expansion, conditional variance, Gaussian testing and series norms. Local regression and Gaussian-sequence risk are explicitly different experiments; neither theorem silently imports the other model’s conclusions.

## Smoothing is a statistical approximation choice

Nonparametric regression estimates a function $m(x)=E(Y\\mid X=x)$ without fixing a finite-dimensional formula. A smoothing parameter controls how observations near a target are combined. Its effect is both computational and statistical: changing the bandwidth changes bias, variance and the inference procedure.

The [regression book’s regularisation chapter](../regression-and-generalised-linear-models/selection-and-regularisation.md) supplies finite-dimensional prediction and selection preparation. Here we prove a local kernel limit, a boundary correction and a matching rate calculation in a clearly declared Gaussian sequence experiment. No theorem is transferred between those experiments merely because both involve a curve.

Throughout the local analysis, observations are iid. A bandwidth is deterministic or selected independently of the observations used in the displayed pointwise theorem. Data-dependent tuning needs a theorem covering that selection, not simply a substitution into a fixed-bandwidth proof.

## The Nadaraya–Watson estimator

Let $(X_i,Y_i)$ be iid real pairs. For a bounded nonnegative symmetric kernel $K$ supported on $[-1,1]$, with $\\int K=1$, define
$$
\\widehat m_h(x)=
\\frac{\\sum_iK((X_i-x)/h)Y_i}
{\\sum_iK((X_i-x)/h)}
$$
when the denominator is positive. A zero denominator means no usable local data and the estimator is undefined unless an explicit alternative rule is chosen.

Write $\\widehat p_h=(nh)^{-1}\\sum_iK((X_i-x)/h)$ and $\\widehat r_h=(nh)^{-1}\\sum_iK((X_i-x)/h)Y_i$. Let $p$ be the design density. Suppose $p(x)>0$, both $p$ and $mp$ are continuous near the interior point $x$, and $E(Y^2\\mid X=u)$ is bounded near it.

A change of variables gives $E\\widehat p_h=\\int K(v)p(x+hv)\\,dv\\to p(x)$ and $E\\widehat r_h\\to m(x)p(x)$. Each variance is $O((nh)^{-1})$, from the same change of variables and the bounded second moment. Thus if $h\\to0$ and $nh\\to\\infty$, Chebyshev and the ratio limit give $\\widehat m_h(x)\\to_p m(x)$.

The denominator is positive with probability tending to one because it converges to a positive constant. The argument does not claim it is positive for every finite sample.

## A pointwise central limit theorem with bias visible

Strengthen to $|Y|\\le M$, twice continuously differentiable $p,m$ near $x$, continuous conditional variance $\\sigma^2(u)$ there, and $p(x)>0$. Put
$$
\\mu_2(K)=\\int v^2K(v)\\,dv,\\quad
R(K)=\\int K(v)^2\\,dv,
$$
$$
B(x)=\\frac{\\mu_2(K)}2
\\left[m''(x)+2m'(x)\\frac{p'(x)}{p(x)}\\right].
$$
Assume $h\\to0$, $nh\\to\\infty$ and $nh^5=O(1)$.

**Theorem 9.1.** Under those hypotheses,
$$
\\sqrt{nh}\\,[\\widehat m_h(x)-m(x)-h^2B(x)]
\\Rightarrow N\\left(0,\\frac{\\sigma^2(x)R(K)}{p(x)}\\right).
$$
If the variance is zero, this denotes the corresponding degenerate limit.

**Bias calculation.** Symmetry makes $\\int vK(v)=0$. Taylor expansion gives
$$
E\\widehat p_h=p+\\tfrac12h^2\\mu_2p''+o(h^2),
$$
and the analogous expression for $\\widehat r_h$ replaces $p$ by $mp$. Subtracting $m(x)E\\widehat p_h$ leaves $h^2p(x)B(x)+o(h^2)$.

**Stochastic calculation.** Set $A_i=K((X_i-x)/h)[Y_i-m(x)]$. A change of variables gives $\\operatorname{Var}(A_i)/h\\to p(x)\\sigma^2(x)R(K)$. The variables are uniformly bounded, and their normalised individual contribution is bounded by a constant times $(nh)^{-1/2}\\to0$. The triangular-array Lindeberg condition follows directly, so
$$
\\frac{\\sum_i(A_i-EA_i)}{\\sqrt{nh}}
\\Rightarrow N(0,p(x)\\sigma^2(x)R(K)).
$$
Divide by $\\widehat p_h\\to_p p(x)$. The bias remainder multiplied by $\\sqrt{nh}$ is $o(\\sqrt{nh^5})=o(1)$, and replacing the denominator in the leading bias by $p(x)$ adds another vanishing term. This proves the theorem. ∎

## Why a prediction-optimal bandwidth may not give a centred interval

The leading pointwise mean-squared error is
$$
h^4B(x)^2+\\frac{\\sigma^2(x)R(K)}{nh\\,p(x)}.
$$
When both constants are positive, balancing orders gives $h$ of order $n^{-1/5}$ and MSE of order $n^{-4/5}$. This is an asymptotic leading expression, not an exact finite-sample risk formula.

At that bandwidth, bias and standard error have the same order. A normal interval centred at $\\widehat m_h$ without bias correction can therefore have a shifted limit. Undersmoothing with $nh^5\\to0$ removes the leading bias on the standard-error scale, at a variance cost. A valid bias-correction method needs its own remainder analysis.

The result is pointwise at a fixed interior location. Simultaneous bands over a continuum, adaptive bandwidth searches, boundary points and derivative estimation need additional arguments. Drawing many pointwise intervals does not create a simultaneous band.

## Boundary bias and local linear regression

At a support boundary, a symmetric kernel is truncated by the design. Its first local moment need not vanish, so the ordinary local average can have bias of order $h$ rather than $h^2$.

Local linear regression fits $a+b(X_i-x)$ by minimising
$$
\\sum_iK((X_i-x)/h)[Y_i-a-b(X_i-x)]^2.
$$
Let $S_j=\\sum_iK((X_i-x)/h)(X_i-x)^j$. If $S_0S_2-S_1^2>0$, the fitted intercept is a weighted average with weights
$$
w_i=\\frac{K((X_i-x)/h)[S_2-(X_i-x)S_1]}
{S_0S_2-S_1^2}.
$$
Direct summation gives $\\sum_iw_i=1$ and $\\sum_iw_i(X_i-x)=0$. Hence the estimate reproduces every affine regression function exactly conditional on the design, even at a boundary.

For a twice differentiable $m$, Taylor’s formula then leaves only a second-order remainder. Under a positive one-sided design density and a nondegenerate one-sided kernel moment matrix, the local moments have their usual orders, giving bias $O(h^2)$ and variance $O((nh)^{-1})$. The moment conditions, rather than a symmetric picture, provide the boundary correction.

Some local-linear weights can be negative; that is how an asymmetric neighbourhood can cancel its first moment. A singular local design still prevents a unique fit. Adding a numerical penalty changes the estimator and must be declared separately.

## An exact Gaussian sequence experiment

To analyse global smoothness rates cleanly, now change experiments. Observe independent coordinates
$$
Z_j=\\theta_j+\\frac{\\sigma}{\\sqrt n}\\varepsilon_j,\\quad
\\varepsilon_j\\sim N(0,1),\\quad j\\ge1,
$$
with $\\sigma>0$. The loss is $\\sum_j(\\widehat\\theta_j-\\theta_j)^2$. Restrict the unknown sequence to the ellipsoid
$$
\\sum_{j\\ge1}j^{2s}\\theta_j^2\\le L^2,
$$
with fixed $s,L>0$.

This is a declared sequence model, related to orthogonal regression and Gaussian white-noise formulations. It is not automatically equivalent to arbitrary random-design regression. Any equivalence theorem would need its own design, basis and regularity assumptions.

The cutoff estimator keeps $Z_j$ for $j\\le J$ and sets the rest to zero. Its risk is exactly
$$
\\frac{\\sigma^2J}{n}+\\sum_{j>J}\\theta_j^2
\\le\\frac{\\sigma^2J}{n}+L^2(J+1)^{-2s}.
$$
Choosing $J$ of order $n^{1/(2s+1)}$ yields risk of order $n^{-2s/(2s+1)}$ uniformly on the ellipsoid. The first term is variance, the second a smoothness-controlled approximation error.

## A matching minimax lower rate

We prove that no estimator has a uniformly faster order in this sequence model. Choose $J$ coordinates numbered $J+1$ through $2J$, set each to $\\theta_j=a\\omega_j$ with $\\omega_j\\in\\{-1,1\\}$, and set all others to zero. Put $a=\\sigma/(4\\sqrt n)$.

Choose $J$ proportional to $n^{1/(2s+1)}$ with a sufficiently small fixed constant so that $J(2J)^{2s}a^2\\le L^2$. Every vertex of this finite hypercube belongs to the ellipsoid.

For each coordinate, a wrong sign of the estimate entails squared error at least $a^2$. Average risk over independent fair signs. All other coordinates have a distribution independent of the chosen sign, so they cannot improve its binary testing error beyond the one-coordinate Gaussian experiment.

The two one-coordinate densities are $N(a,\\sigma^2/n)$ and $N(-a,\\sigma^2/n)$. Comparing their likelihoods shows the optimal equal-prior sign test thresholds at zero. Its error is $\\Phi(-1/4)$, which exceeds $3/8$: the normal density is bounded by $1/\\sqrt{2\\pi}<1/2$, so its mass between zero and one-quarter is less than one-eighth.

Thus the averaged squared-error risk is at least $(3/8)Ja^2$, of order $n^{-2s/(2s+1)}$. The supremum risk is at least the average over this finite set. Combined with the cutoff upper bound, this proves the minimax order for the stated ellipsoid experiment.

The proof is an explicit testing reduction. It does not assert the exact optimal constant, adaptivity over unknown $s$, or the same lower bound for every unrelated smoothing model.

## Tuning, adaptation and uncertainty

If smoothness is unknown, the cutoff or bandwidth cannot simply be chosen from the unknown exponent. Data-driven selectors compare bias and variance indirectly, and their guarantees must include the search over candidates.

Risk adaptation and honest confidence coverage are also distinct. An estimator can attain a good expected loss while having a nonnegligible smoothing bias at particular functions. A standard error that measures only observation noise does not include that bias.

Regularisation can stabilise an ill-conditioned smoother, but stable arithmetic cannot establish a population model or a smoothness class. The selected design, target region, loss and required inference are part of the mathematical specification.

The chapter’s complete proofs therefore retain two separate models: local iid bounded-response kernel inference, and global Gaussian-sequence ellipsoid risk. They illustrate shared bias-variance reasoning without erasing the assumptions that make each conclusion valid.

## Worked example 9.1: A boundary average misses a line

Suppose design is uniform on $[0,1]$, the target is $x=0$, the mean is $m(u)=u$, and use the uniform kernel. The population local average over the available interval $[0,h]$ is $h/2$, rather than zero. Its bias is first order. A nonsingular local-linear fit reproduces $m(u)=u$ exactly conditional on its design, so its conditional mean at zero is zero. The improvement follows from its first-moment cancellation, not from inventing observations to the left of the boundary.

## Worked example 9.2: Interior quadratic bias

Let design be uniform on $[-1,1]$, target zero and $m(u)=u^2$. The uniform kernel has $\\mu_2=1/3$ and $R(K)=1/2$, while $p(0)=1/2$. Thus $B(0)=1/3$, giving leading bias $h^2/3$ and variance $\\sigma^2(0)/(nh)$. Balancing their squared orders gives $h\\asymp n^{-1/5}$. A naive interval at that scale retains a bias shift unless it is corrected or the bandwidth is reduced.

## Worked example 9.3: A smooth sequence cutoff

For sequence smoothness $s=2$, the risk upper bound is $\\sigma^2J/n+L^2(J+1)^{-4}$. Taking $J$ of order $n^{1/5}$ makes both terms order $n^{-4/5}$. The hypercube lower argument has the same order. This identifies a rate in that global squared-sequence loss; it does not by itself supply a pointwise confidence interval or prove equivalence with the preceding kernel estimator.

## An unbiased cutoff-risk estimate is still a fixed-rule statement

In the Gaussian sequence experiment, consider only the first $J_{\\max}$ coordinates and put noise variance per coordinate equal to $v=\\sigma^2/n$. For a fixed cutoff $J$, the risk on those coordinates is variance $vJ$ plus the squared omitted coefficients through $J_{\\max}$.

An unbiased estimate is the sum of squared observations beyond the cutoff, plus $2vJ-vJ_{\\max}$. Each squared observation has expectation its squared signal plus $v$, so the stated expectation follows by adding and cancelling the noise terms. Coordinates beyond the common maximum contribute an identical unknown tail to every candidate comparison.

The estimate can be negative on a particular sample. That is compatible with unbiasedness because it is an estimator of a nonnegative expectation, not itself a squared loss or a probability.

Choosing the cutoff that minimises these same estimates changes the rule. The minimum of noisy estimates is generally optimistic, and fixed-cutoff unbiasedness does not automatically make the selected estimate unbiased for selected risk. An oracle comparison must control all candidate estimates together or evaluate the selected rule independently.

One exact alternative uses an independent replicate sequence. Conditional on training, each candidate estimate is fixed. Its squared distance from the replicate has expectation equal to its signal-estimation risk plus the common replicate noise variance. Expanding the Gaussian square gives variance
$$
2J_{\\max}v^2+4v\\|\\theta-\\widehat\\theta\\|^2
$$
on those coordinates: the odd cross moment vanishes and the variance of a standard normal square is two.

If candidates are clipped to a fixed norm ball and the true ellipsoid bounds the signal norm, that risk term is uniformly bounded by the squared sum of the two radii. Chebyshev and a finite union bound then control the maximum evaluation error across the declared candidates. On the resulting uniform event, the evaluation-selected risk is at most the best candidate risk plus twice the error tolerance.

This is a complete finite-candidate argument for a stated independent Gaussian replicate experiment. The replicate observations consume resources; they are not magically present in the original sequence. Reusing the training observations would invalidate the conditional independence step that made the variance calculation straightforward.

## A finite-grid band can include a deterministic bias allowance

For a separate fixed-design Gaussian regression experiment, suppose observation errors are independent with known common variance. At each of finitely many prespecified target points, use fixed local-linear weights satisfying the two reproduction identities.

Assume the regression function’s second derivative is uniformly bounded by a declared constant between each target and its contributing design points. Taylor’s formula then bounds the absolute bias by half that constant times the sum of absolute weights multiplied by squared design distance. This remains valid with negative boundary-correcting weights.

The stochastic error is exactly Gaussian conditional on the design, with standard deviation equal to the noise standard deviation times the Euclidean norm of the weight vector. A Gaussian exponential tail bound and a union bound across the finite grid give simultaneous coverage when each half-width includes its deterministic bias allowance and a noise multiplier
$$
\\sqrt{2\\log(2M/\\alpha)},
$$
where $M$ is the number of target points and $\\alpha$ the desired total failure bound.

The estimated values need not be independent across target points. The union bound uses only their individual Gaussian tails, so overlapping smoothing neighbourhoods do not invalidate it.

The conclusion is a band on that fixed finite grid and over the declared smoothness class. It does not become a continuum band simply because adjacent grid points are joined by a line on a plot. Extending coverage between grid points requires a justified modulus-of-continuity argument or another process-level theorem.

The deterministic smoothness allowance is also substantive. Omitting it returns the earlier bias problem even when noise variance is known exactly. Estimating the bound from the same data without accounting for that selection is another procedure.

Together, the risk and coverage calculations show why three questions must be kept separate: selecting a useful smoothing rule, estimating its expected loss, and covering the underlying function simultaneously. Each can be answered mathematically, but each needs its own resource and probability statement.

## Reproduction constraints impose a noise cost

Condition on a local design containing k observations with independent errors of common variance sigma squared. Any linear smoother whose weights sum to one has conditional variance sigma squared times the sum of its squared weights. Cauchy–Schwarz bounds that sum below by one divided by k, with equality only for equal weights. Thus exact reproduction of a constant already imposes a lower noise floor for a fixed neighborhood.

A boundary local-linear smoother also imposes a zero first moment in the design offsets. Uniform weights generally fail that second constraint in a one-sided neighborhood. Achieving affine reproduction can therefore require unequal or negative weights and a strictly larger conditional variance. Its benefit is reduced approximation bias, not a free decrease in every uncertainty component. The calculation compares smoothers on the same fixed local observations and homoskedastic model; changing the bandwidth changes k and the offset geometry too. It supplies a precise local version of the bias-variance tradeoff without claiming that the reproducing smoother dominates a simple average at every regression function.

## Exercises

### Exercise 9.1
<a id="smoothing-and-nonparametric-regression-ex-1"></a>

Why does the kernel ratio become well-defined with probability tending to one?

<details>
<summary>Hint 1</summary>

Its normalised denominator converges to $p(x)>0$.

</details>
<details>
<summary>Hint 2</summary>

Use a fixed positive neighbourhood of that limit.

</details>
<details>
<summary>Solution</summary>

The probability that $\\widehat p_h>p(x)/2$ tends to one. On that event the raw denominator is positive and the ratio is defined. The theorem does not assign a value on every possible finite-sample empty neighbourhood.

</details>

### Exercise 9.2
<a id="smoothing-and-nonparametric-regression-ex-2"></a>

Where does symmetry remove the first-order interior bias?

<details>
<summary>Hint 1</summary>

Taylor expansion contains a first moment.

</details>
<details>
<summary>Hint 2</summary>

Integrate the odd kernel factor.

</details>
<details>
<summary>Solution</summary>

The first-order terms are proportional to $\\int vK(v)\\,dv=0$. This holds for a symmetric integrable kernel on its full support at an interior point. At a boundary, design truncation can destroy that cancellation.

</details>

### Exercise 9.3
<a id="smoothing-and-nonparametric-regression-ex-3"></a>

Derive the design-density contribution to $B(x)$.

<details>
<summary>Hint 1</summary>

Expand $(mp)''-mp''$.

</details>
<details>
<summary>Hint 2</summary>

Divide by the design density.

</details>
<details>
<summary>Solution</summary>

The difference is $pm''+2p'm'$. Multiplying by $\\mu_2/2$ and dividing by $p$ yields $\\mu_2[m''+2m'p'/p]/2$. The derivative of design density matters unless the local design is flat or the mean slope vanishes.

</details>

### Exercise 9.4
<a id="smoothing-and-nonparametric-regression-ex-4"></a>

Why is $nh^5=O(1)$ used in the centred CLT proof?

<details>
<summary>Hint 1</summary>

The Taylor bias remainder is $o(h^2)$.

</details>
<details>
<summary>Hint 2</summary>

Multiply it by $\\sqrt{nh}$.

</details>
<details>
<summary>Solution</summary>

The resulting remainder is $o(\\sqrt{nh^5})$, which is $o(1)$ under bounded $nh^5$. Without a stronger smoothness expansion, faster growth could amplify the unspecified remainder and invalidate the stated centring.

</details>

### Exercise 9.5
<a id="smoothing-and-nonparametric-regression-ex-5"></a>

Show local-linear weights reproduce affine functions.

<details>
<summary>Hint 1</summary>

Use their zeroth and first moment identities.

</details>
<details>
<summary>Hint 2</summary>

Expand an affine mean about the target.

</details>
<details>
<summary>Solution</summary>

For $m(X_i)=m(x)+b(X_i-x)$, the weighted mean is $m(x)\\sum_iw_i+b\\sum_iw_i(X_i-x)=m(x)$. This is exact whenever the local moment matrix is invertible, including asymmetric boundary designs.

</details>

### Exercise 9.6
<a id="smoothing-and-nonparametric-regression-ex-6"></a>

Derive the sequence cutoff risk exactly.

<details>
<summary>Hint 1</summary>

Separate kept and discarded coordinates.

</details>
<details>
<summary>Hint 2</summary>

Noise is independent and centred.

</details>
<details>
<summary>Solution</summary>

Each kept coordinate contributes variance $\\sigma^2/n$ and no bias. Each discarded coordinate contributes squared bias $\\theta_j^2$ and no estimator noise. Summing gives $\\sigma^2J/n+\\sum_{j>J}\\theta_j^2$.

</details>

### Exercise 9.7
<a id="smoothing-and-nonparametric-regression-ex-7"></a>

Bound the discarded tail under the ellipsoid constraint.

<details>
<summary>Hint 1</summary>

Every discarded index exceeds $J$.

</details>
<details>
<summary>Hint 2</summary>

Factor out the smallest smoothness weight there.

</details>
<details>
<summary>Solution</summary>

For $j>J$, $j^{2s}\\ge(J+1)^{2s}$. Thus $\\sum_{j>J}\\theta_j^2\\le(J+1)^{-2s}\\sum_jj^{2s}\\theta_j^2\\le L^2(J+1)^{-2s}$.

</details>

### Exercise 9.8
<a id="smoothing-and-nonparametric-regression-ex-8"></a>

Why does the hypercube belong to the ellipsoid?

<details>
<summary>Hint 1</summary>

All active indices are at most $2J$.

</details>
<details>
<summary>Hint 2</summary>

There are $J$ equal squared amplitudes.

</details>
<details>
<summary>Solution</summary>

Its weighted squared norm is at most $J(2J)^{2s}a^2$. Choosing the proportionality constant in $J\\asymp n^{1/(2s+1)}$ sufficiently small makes that at most $L^2$, since $a^2=\\sigma^2/(16n)$.

</details>

### Exercise 9.9
<a id="smoothing-and-nonparametric-regression-ex-9"></a>

Explain why a wrong sign entails squared error at least $a^2$.

<details>
<summary>Hint 1</summary>

The true value is either $a$ or $-a$.

</details>
<details>
<summary>Hint 2</summary>

An estimate on the opposite half-line is at least distance $a$ away.

</details>
<details>
<summary>Solution</summary>

If the truth is $a$ and the estimate is nonpositive, the distance is at least $a$; the other sign is symmetric. Choosing any fixed rule at zero preserves the lower bound for the corresponding classified error. Summing sign-test errors therefore lower-bounds squared risk.

</details>

### Exercise 9.10
<a id="smoothing-and-nonparametric-regression-ex-10"></a>

Does MSE-optimal smoothing automatically give an honest centred normal interval?

<details>
<summary>Hint 1</summary>

Bias and standard error can have the same order.

</details>
<details>
<summary>Hint 2</summary>

A risk criterion is not a coverage theorem.

</details>
<details>
<summary>Solution</summary>

No. At $h\\asymp n^{-1/5}$, the leading bias is typically order $n^{-2/5}$, the same as standard error. A centred normal interval that ignores it can have shifted coverage. Undersmoothing or a justified bias correction is an additional inference choice.

</details>

## Summary

Local kernel consistency and a bias-explicit CLT require declared design, moment and bandwidth assumptions. Local linear moment cancellation addresses boundary bias. In a separate Gaussian sequence experiment, a cutoff upper bound and a finite-hypercube testing argument prove a matching Sobolev-type minimax rate.
`;export{e as default};