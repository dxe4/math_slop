var e=`---
parent_id: book-optimization-backprop-from-scratch
chapter_id: smoothness-descent-step-sizes
title: "Smooth Optimization, Descent Guarantees, and Step Sizes"
level: advanced-undergraduate
estimated_minutes: 155
license: CC BY-SA 4.0
---

# Smooth Optimization, Descent Guarantees, and Step Sizes

## Purpose and prerequisites

This chapter assumes gradients, Hessians, norms, and trusted reverse-mode products. It proves what a gradient step guarantees under smoothness, solves quadratic dynamics exactly, and designs stopping diagnostics. Optimization answers “how well did we search this declared objective?” It does not by itself answer “does the fitted rule generalize or deserve deployment?”

## Objectives and levels of success

Let $F\\colon \\mathbb{R}^d\\to \\mathbb{R}$ be the objective and consider

$\\theta _{k+1}=\\theta _{k}-\\eta _{k}\\nabla F(\\theta _{k})$.

Possible claims form a hierarchy:

1. arithmetic was finite and the update implemented as specified;
2. the objective decreased on a step;
3. a stationarity measure became small;
4. the iterate is near a local minimum;
5. it is near a global minimum;
6. the selected predictor has low future risk or decision loss.

Each requires more structure. A small gradient is not enough for levels 4–6. A saddle has zero gradient. A nonconvex objective can have many local minima. Even its global empirical minimizer can overfit.

## Smoothness and the descent lemma

A differentiable function is $L$-smooth on a set when

$\\lVert \\nabla F(x)-\\nabla F(y)\\rVert\\le L\\lVert x-y\\rVert$.

Chapter 5 proved the upper quadratic bound

$F(y)\\le F(x)+\\nabla F(x)^{\\top}(y-x)+(L/2)\\lVert y-x\\rVert^{2}$.

Insert the gradient step $y=x-\\eta g$, where $g=\\nabla F(x)$:

$F(x-\\eta g)\\le F(x)-\\eta \\lVert g\\rVert^{2}+(L\\eta ^{2}/2)\\lVert g\\rVert^{2}$

$=F(x)-\\eta (1-L\\eta /2)\\lVert g\\rVert^{2}$.

Therefore every step with $0<\\eta <2/L$ strictly decreases $F$ unless $g=0$. The convenient range $0<\\eta \\le 1/L$ gives

$F(x-\\eta g)\\le F(x)-(\\eta /2)\\lVert g\\rVert^{2}$.

The theorem depends on smoothness over the segment traversed. An unknown global $L$, a nonsmooth activation, or an update leaving the region invalidates the numerical bound, though descent can still happen empirically.

### Worked one-dimensional quartic

Let $F(x)=x^{4}/4$. Its gradient is $x^{3}$ and Hessian $3x^{2}$. The gradient is not globally Lipschitz because the Hessian is unbounded. On $\\lvert x\\rvert\\le R$, it is $L=3R^{2}$ smooth. Starting at $x=2$, a step chosen from a local region must account for whether the next iterate stays inside that region.

With $\\eta =0.1$, the update is $2-0.1\\cdot 8=1.2$, and loss falls from 4 to $1.2^{4}/4=0.5184$. With $\\eta =1$, the update is $-6$ and loss explodes to 324. “Gradient descent” is not synonymous with “descent for any learning rate.”

## Convexity and first-order certificates

A differentiable function on a convex set is convex when

$F(y)\\ge F(x)+\\nabla F(x)^{\\top}(y-x)$

for all $x,y$. If $\\nabla F(x^{\\star})=0$, this inequality gives $F(y)\\ge F(x^{\\star})$, so every stationary point is a global minimizer.

If $F$ is $\\mu$-strongly convex,

$F(y)\\ge F(x)+\\nabla F(x)^{\\top}(y-x)+(\\mu /2)\\lVert y-x\\rVert^{2}$.

Strong convexity implies at most one minimizer. Set $x=x^{\\star}$, use $\\nabla F(x^{\\star})=0$, and obtain

$F(y)-F(x^{\\star})\\ge (\\mu /2)\\lVert y-x^{\\star}\\rVert^{2}$.

Thus an objective gap bounds distance to the unique minimizer. Without strong convexity, coefficients can vary along flat directions even when predictions and objective are stable.

### Gradient norm as a convex gap bound

For a $\\mu$-strongly convex differentiable function, minimize the strong-convexity lower bound over $y$:

$F(y)\\ge F(x)+g^{\\top}(y-x)+(\\mu /2)\\lVert y-x\\rVert^{2}$.

The quadratic right side is minimized at $y=x-g/\\mu$, with value $F(x)-\\lVert g\\rVert^{2}/(2\\mu )$. Since $F(x^{\\star})$ is at least this lower bound,

$F(x)-F(x^{\\star})\\le \\lVert \\nabla F(x)\\rVert^{2}/(2\\mu )$.

A small gradient certifies a small objective gap only when a valid positive $\\mu$ is known.

## Quadratic dynamics exactly

Consider

$F(\\theta )=(\\frac{1}{2})\\theta ^{\\top}A\\theta -b^{\\top}\\theta$

with symmetric positive definite $A$. The unique minimizer satisfies $A\\theta^{\\star}=b$. Let error $e_{k}=\\theta _{k}-\\theta^{\\star}$. Since $\\nabla F(\\theta )=A(\\theta -\\theta^{\\star})$,

$e_{k+1}=(I-\\eta A)e_{k}$.

Write $A=Q\\Lambda Q^{\\top}$ with orthonormal eigenvectors and eigenvalues $0<\\lambda_{\\min}\\le \\lambda _{i}\\le \\lambda_{\\max}$. In eigen-coordinate $i$,

$e_{k+1,i}=(1-\\eta \\lambda _{i})e_{k,i}$.

Convergence for every starting point occurs exactly when

$\\lvert 1-\\eta \\lambda _{i}\\rvert<1$ for every $i$,

equivalently $0<\\eta <2/\\lambda_{\\max}$.

With fixed $\\eta$, the worst contraction factor is

$\\rho (\\eta )=\\max_{i} \\lvert 1-\\eta \\lambda _{i}\\rvert$.

Balancing endpoint magnitudes gives the optimal constant step

$\\eta^{\\star}=2/(\\lambda_{\\min}+\\lambda_{\\max})$,

with

$\\rho^{\\star}=(\\kappa -1)/(\\kappa +1)$, $\\kappa =\\lambda_{\\max}/\\lambda_{\\min}$.

Large condition number $\\kappa$ makes the best contraction close to one. This is a property of objective geometry in the chosen coordinates, not necessarily a bug in the optimizer.

### Worked anisotropic quadratic

Let $F(x,y)=(\\frac{1}{2})(x^{2}+100y^{2})$. Then $\\kappa =100$. With $\\eta =0.01=1/\\lambda_{\\max}$, the $y$ error vanishes in one ideal step, but the $x$ error multiplies by $0.99$ each step. A larger step accelerates $x$ but can make $y$ oscillate or diverge.

The optimal constant step is $\\frac{2}{101}\\approx 0.019802$, with worst factor $\\frac{99}{101}\\approx 0.980198$. Even the optimum is slow across the elongated contours. Scaling or preconditioning is the subject of Chapter 12.

## Backtracking line search

When $L$ is unknown, Armijo backtracking seeks a sufficient decrease. Choose initial $\\eta >0$, shrink factor $\\beta \\in (0,1)$, and $c\\in (0,1)$. Repeatedly replace $\\eta ←\\beta \\eta$ until

$F(\\theta -\\eta g)\\le F(\\theta )-c\\eta \\lVert g\\rVert^{2}$.

For an $L$-smooth function, the descent lemma guarantees the condition whenever

$1-L\\eta /2\\ge c$, or $\\eta \\le 2(1-c)/L$.

Thus backtracking terminates after finitely many reductions if evaluations are reliable and the line remains in the smooth domain.

\`\`\`text
gradient_step_with_backtracking(F, grad, theta):
    g = grad(theta)
    require finite(F(theta), g)
    eta = declared_initial_step
    while F(theta - eta*g) > F(theta) - c*eta*dot(g,g):
        eta = beta*eta
        require eta >= minimum_step
    return theta - eta*g, eta
\`\`\`

A minimum-step failure should be reported. Silently accepting no change can look like convergence. On stochastic mini-batches, noisy objective comparisons can defeat deterministic Armijo logic; use methods designed for the declared noise model or evaluate on a fixed diagnostic batch.

## Nonconvex landscapes

For a smooth nonconvex function bounded below by $F_{\\mathrm{inf}}$, gradient descent with $\\eta \\le 1/L$ satisfies

$F(\\theta _{k+1})\\le F(\\theta _{k})-(\\eta /2)\\lVert \\nabla F(\\theta _{k})\\rVert^{2}$.

Sum from $k=0$ to $K-1$:

$(\\eta /2)\\sum_{k=0}^{K-1}\\lVert \\nabla F(\\theta _{k})\\rVert^{2}\\le F(\\theta _{0})-F(\\theta _{K})\\le F(\\theta _{0})-F_{\\mathrm{inf}}$.

Therefore

$\\min_{0\\le k<K}\\lVert \\nabla F(\\theta _{k})\\rVert^{2}\\le 2(F(\\theta _{0})-F_{\\mathrm{inf}})/(\\eta K)$.

This is a first-order stationarity guarantee. It does not say the selected iterate is a local minimum, global minimum, or statistically good predictor.

### Saddle example

For $F(x,y)=x^{2}-y^{2}$, the origin has zero gradient but is a saddle. Gradient descent updates

$x_{k+1}=(1-2\\eta )x_{k}$, $y_{k+1}=(1+2\\eta )y_{k}$.

Unless initialized exactly on $y=0$, the negative-curvature direction grows. Exact initialization at the saddle stays forever in exact arithmetic. Random initialization can help avoid this special stable set, but randomness is not a proof for arbitrary landscapes.

## Local smoothness and accepted-step certificates

A global smoothness constant may be uselessly large or nonexistent. Backtracking instead produces a per-step certificate: the recorded pair $(\\eta_{k},F(\\theta_{k})-F(\\theta_{k+1}))$ satisfies the declared Armijo inequality at the evaluated points. It does not prove the same step would work elsewhere.

For $F(x)=x^{4}/4$, start at $x=2$ with trial $\\eta=1$, shrink factor $\\beta=\\frac{1}{2}$, and $c=\\frac{1}{4}$. Here $F(2)=4$ and $g=8$. Armijo asks

$F(2-8eta) \\le 4-16eta$.

Trials $\\eta=1$ and $\\eta=\\frac{1}{2}$ cannot pass because their right sides are negative while $F$ is nonnegative. At $\\eta=\\frac{1}{4}$, the new point is zero and both sides are zero, so the step passes. The ledger should retain all three trials. Reporting only the accepted value hides useful evidence about local scale.

## Coordinates and preconditioning

The Euclidean constant $L$ changes when parameters are rescaled. Let $x=Sz$ and define $G(z)=F(Sz)$. Then

$\\nabla G(z)=S^{\\top} \\nabla F(Sz)$.

Even when $F$ is $L$-smooth, the direct bound for $G$ is $L\\lVert S\\rVert^{2}$. Thus a learning rate has units and coordinates. “Use $10^{-3}$” is not a mathematical recommendation until the parameterization, reduction convention, and optimizer are fixed.

For a positive-definite quadratic, choosing $\\theta_+=\\theta-\\eta P \\nabla F(\\theta)$ with positive-definite $P$ changes the geometry. If $P=A^{-1}$ for Hessian $A$, $\\eta=1$ reaches the quadratic minimizer in one exact step. Approximate preconditioners seek some of this effect without solving the original problem exactly.

## A second-order stationarity diagnostic

At a twice-differentiable stationary point, the Hessian supplies necessary local information:

- a negative Hessian eigenvalue certifies a descent direction and rules out a local minimum;
- positive definiteness certifies a strict local minimum;
- positive semidefiniteness alone is inconclusive.

For $F(x)=x^{4}$, both gradient and Hessian vanish at zero, yet zero is a strict minimum. For $F(x)=x^{3}$, both vanish at zero, but zero is neither a minimum nor maximum. Finite-order local tests can be inconclusive; the claim must match the evidence.

## Stopping is a multi-signal decision

Useful diagnostics include:

- objective value and relative change;
- gradient norm in a declared geometry;
- step norm relative to parameter scale;
- line-search step or rejected steps;
- constraint violation or residual;
- finite-value and overflow checks;
- training-versus-validation trajectory;
- repeated-seed variation for stochastic/nonconvex runs.

Stopping because validation loss worsens is **model selection**, not purely optimization. Its chosen epoch has used validation information. Stopping because gradient norm is small needs a scale and, for stochastic gradients, a noise assessment.

### Scale-aware criteria

A common relative step criterion is

$\\lVert \\Delta \\theta \\rVert\\le \\tau _{x}(1+\\lVert \\theta \\rVert)$.

A relative objective criterion is

$\\lvert F_{k+1}-F_{k}\\rvert\\le \\tau _{F}(1+\\lvert F_{k}\\rvert)$.

Both can trigger on a flat plateau far from a good solution or on finite-precision stagnation. Pair them with a gradient, residual, or certificate suited to the problem.

## Optimization error versus other errors

Decompose a predictive failure audit into:

1. **optimization error:** failure to minimize the declared empirical objective over the chosen class;
2. **approximation error:** the chosen function class cannot represent a suitable rule;
3. **estimation error:** finite data make the fitted rule differ from a population target;
4. **shift error:** deployment differs from the evaluation distribution;
5. **objective error:** the loss or target does not encode the actual decision value;
6. **implementation error:** code, units, reduction, or data flow differ from the declaration.

More optimizer iterations address only the first item and may worsen some others through overfitting or adaptive reuse.

## Objective units and a gradient certificate

**Worked example (rescaling the written loss).** Let $F(x)=x^2/2$ and let $G(x)=100F(x)$. Both have the same minimiser, but their gradients are $x$ and $100x$, and smoothness constants are one and one hundred. A step $x_+=x-\\eta\\nabla F(x)$ matches the update for $G$ only when the latter uses step $\\eta/100$. Changing a batch reduction from mean to sum has this effect when every row and penalty receives the same scale. Scaling only the data term changes its balance against regularisation and can change the minimiser.

When $F$ is $\\mu$-strongly convex, differentiable and minimised at $x_*$, the defining lower bound gives
$$
F(x_*)\\ge F(x)+\\nabla F(x)^T(x_*-x)+\\frac\\mu2\\|x_*-x\\|^2.
$$
Completing the square in the unknown displacement shows
$$
F(x)-F(x_*)\\le\\frac{\\|\\nabla F(x)\\|^2}{2\\mu}.
$$
This is an a posteriori objective bound under a known strong-convexity constant. A gradient norm has a quantitative interpretation only after the coordinates and the constant have been declared. If the Hessian is singular or $\\mu$ is unknown, inserting an optimistic positive number produces no certificate. The statement also concerns the written finite objective, so it does not supply a population-risk or prediction guarantee.

## An approximate gradient has its own error budget

Descent results for the exact gradient do not automatically apply to a direction returned by an approximate calculation. Let the objective have a globally Lipschitz gradient with constant $L>0$, and suppose the supplied direction is the true gradient plus an error vector. Using step one over the smoothness constant in the descent lemma gives the exact bound

$$
F\\left(x-\\frac{\\nabla F(x)+e}{L}\\right)
\\le F(x)-\\frac{\\|\\nabla F(x)\\|^2}{2L}
+\\frac{\\|e\\|^2}{2L}.
$$

To derive it, expand the squared norm of the supplied direction in the quadratic upper model. Its cross term cancels the inner product between the true gradient and the error. What remains is the negative squared true gradient and the positive squared error shown above. No independence, unbiasedness, or random-noise assumption is used in this deterministic inequality.

If the objective is bounded below, sum over the first $K$ steps. The smallest squared true gradient encountered is bounded by twice the smoothness constant times the initial objective gap divided by $K$, plus the average squared direction error. Thus a uniformly bounded nonvanishing error can leave a stationarity floor. If the sum of squared errors is finite, this estimate instead gives a vanishing best-iterate bound as the horizon increases. The conclusion concerns stationarity of the written objective, not generalisation or global optimality in a nonconvex problem.

**Worked example: an undetected bias.** For the scalar objective $F(x)=x^2/2$, suppose every returned derivative is $x+b$ with a fixed bias. A unit step goes directly to minus the bias and stays there. The supplied derivative is zero at that point, but the true derivative is minus the bias and the true objective error is half the squared bias. An optimiser's own stopping signal can therefore be perfectly small while its mathematical target remains unresolved. Independent derivative reasoning, arithmetic error estimates, or a known approximation tolerance is needed to interpret the signal.

## Mini-batch variation is not automatically unbiased direction error

For an empirical mean of differentiable row losses, a uniformly sampled row gradient has expectation equal to the full empirical gradient. An average of independently sampled row gradients retains that expectation; if each has finite covariance, its covariance is divided by the batch size. Sampling without replacement gives a different finite-population correction. These are statements about a specified sampling rule applied to the current fixed dataset and parameter.

Biased sampling, stale parameters, clipping, and state-dependent filtering can change the expectation. Clipping each row gradient before averaging generally does not equal clipping the full gradient, and the expected clipped direction generally does not equal the true gradient. The resulting method may still be useful, but its analysis must include that change. Calling all discrepancies noise does not make them mean zero.

The deterministic bound above can be conditioned on the current iterate and then averaged when its error assumptions hold. A stochastic convergence theorem additionally needs the relevant conditional moments and step-size policy. One observed decreasing training curve establishes neither those assumptions nor a universal theorem. Recording the loss reduction convention, sampling rule, gradient approximation, and step policy makes clear which mathematical descent claim is actually being invoked.

## Expected descent states exactly which randomness is averaged

Suppose the supplied stochastic gradient has conditional expectation equal to the exact empirical gradient at the current iterate, and its conditional squared error is at most a finite constant $\\sigma^2$. Condition the smoothness inequality on everything observed before the draw. The cross term has zero conditional mean, while the squared stochastic gradient has conditional expectation at most the squared true gradient plus that variance bound. For a fixed positive step this yields

$$
\\mathbb E[F(x_+)\\mid x]
\\le F(x)-\\eta(1-L\\eta/2)\\|\\nabla F(x)\\|^2
+L\\eta^2\\sigma^2/2.
$$

If the step is at most one over the smoothness constant, sum and average this inequality over successive conditional draws. A lower bound on the objective then bounds the average expected squared gradient by a term decaying as the reciprocal horizon and a remaining term proportional to the step times the variance. A constant step therefore trades speed against the size of this bound's stochastic floor. This calculation does not prove that every realised path decreases at every step.

For a batch of independent, identically distributed row draws, the variance bound can decrease with batch size. The total work to obtain that smaller variance also grows. Comparing methods by iteration count alone can therefore hide a substantial difference in row-gradient evaluations. A bound on expected optimization progress should identify both the randomness being averaged and the computational unit being counted.

**Worked interpretation.** A training run can take a step with higher loss even when the conditional expected inequality predicts descent. The realised batch may favour a direction that differs from the full empirical gradient. Conversely, a particular run can decrease smoothly even when a claimed unbiasedness assumption is false. Neither one trajectory nor one loss plot establishes the probabilistic hypotheses. The theorem concerns repeated conditional draws under the stated sampling mechanism and the same fixed objective.

This is why deterministic backtracking on a full objective and a stochastic step on a fresh mini-batch have different guarantees. Reusing a batch to choose among many trial steps changes the conditioning structure. A correct analysis can account for that procedure, but the fixed-draw expectation formula cannot be transferred without checking how the step was selected.

## Exercises

1. Use the descent lemma to find the guaranteed decrease coefficient for step $\\eta =1/L$.
2. For $F(x)=5x^{2}$, determine the exact interval of fixed step sizes that converges from every starting point.
3. Solve the gradient descent recurrence for $F(x)=5x^{2}$ explicitly.
4. Prove a stationary point of a differentiable convex function is globally minimizing.
5. Show a $\\mu$-strongly convex function has at most one minimizer.
6. For $A=\\operatorname{diag}(2,18)$, compute $\\kappa$, the optimal constant step, and worst contraction factor.
7. Starting at $(1,1)$ for $F=(x^{2}+100y^{2})/2$, compute one step with $\\eta =0.01$ and $\\eta =0.03$. Compare.
8. Prove Armijo backtracking terminates for an $L$-smooth function when $g\\ne 0$, assuming no domain boundary is crossed.
9. Derive the $O(1/K)$ minimum squared-gradient bound in the nonconvex section.
10. Give a smooth function with zero gradient at a strict local maximum. Why does gradient norm alone not classify it?
11. Validation loss selects the stopping epoch. Is the resulting model independent of validation data? Explain.
12. An objective falls by less than $10^{-12}$ per step, but gradient norm is $10^{3}$. Give two plausible diagnoses.
13. For the quartic backtracking example with $c=\\frac{1}{4}$, verify directly that $\\eta=\\frac{1}{4}$ passes Armijo and $\\eta=\\frac{1}{2}$ fails.
14. If $F$ is $L$-smooth and $G(z)=F(Sz)$, prove that $G$ is at most $L\\lVert S\\rVert_{2}^{2}$-smooth in Euclidean norm.
15. For $F(\\theta)=\\frac{1}{2}\\theta^{\\top}A\\theta-b^{\\top}\\theta$ with positive-definite $A$, show that the preconditioned update with $P=A^{-1}$ and $\\eta=1$ reaches the minimizer in one step.
16. Give examples showing that a zero gradient and positive-semidefinite Hessian need not certify a strict local minimum.
17. Suppose $F$ is bounded below, $L$-smooth, and gradient descent uses $\\eta=1/L$. How many iterations suffice to guarantee some iterate has gradient norm at most $\\epsilon$ in terms of $F(\\theta_{0})-F_{\\mathrm{inf}}$, $L$, and $\\epsilon$?
18. A run stops because $\\lVert \\Delta \\theta\\rVert\\le 10^{-8}(1+\\lVert \\theta\\rVert)$ while Armijo has reduced $\\eta$ below $10^{-14}$ and $\\lVert \\nabla F\\rVert=40$. What conclusion is justified, and what is not?

## Full solutions

1. With $\\eta =1/L$, the factor is $\\eta (1-L\\eta /2)=(1/L)(1-\\frac{1}{2})=1/(2L)$. Thus $F(x-g/L)\\le F(x)-\\lVert g\\rVert^{2}/(2L)$.
2. $F'(x)=10x$, so $x_{k+1}=(1-10\\eta )x_{k}$. Convergence for every start requires $\\lvert 1-10\\eta \\rvert<1$, hence $0<\\eta <0.2$.
3. $x_{k}=(1-10\\eta )^k x_{0}$. This tends to zero exactly in the interval from Exercise 2; at $\\eta =0.2$ it alternates without shrinking.
4. Convexity gives $F(y)\\ge F(x^{\\star})+\\nabla F(x^{\\star})^{\\top}(y-x^{\\star})$. If the gradient is zero, $F(y)\\ge F(x^{\\star})$ for every $y$, so $x^{\\star}$ is global.
5. If distinct minimizers $x,y$ existed, strong convexity at their midpoint gives $F((x+y)/2)\\le [F(x)+F(y)]/2-(\\mu /8)\\lVert x-y\\rVert^{2}$, strictly below the minimum value, a contradiction.
6. Eigenvalues are 2 and 18, so $\\kappa =9$. $\\eta^{\\star}=2/(2+18)=0.1$; worst factor is $(9-1)/(9+1)=0.8$.
7. Gradient at $(1,1)$ is $(1,100)$. With $\\eta =0.01$, the new point is $(0.99,0)$, with large decrease. With $\\eta =0.03$, it is $(0.97,-2)$; the high-curvature coordinate doubled in magnitude and the objective grows sharply. Since $0.03>\\frac{2}{100}$, the step is unstable in that direction.
8. Smoothness guarantees $F(x-\\eta g)\\le F(x)-\\eta (1-L\\eta /2)\\lVert g\\rVert^{2}$. Armijo holds when $1-L\\eta /2\\ge c$. Repeated multiplication by $\\beta \\in (0,1)$ eventually makes $\\eta \\le 2(1-c)/L$, so a finite reduction satisfies it.
9. Sum $F_{k+1}\\le F_{k}-(\\eta /2)\\lVert g_{k}\\rVert^{2}$ to telescope. Lower-bound $F_{K}$ by $F_{\\mathrm{inf}}$, then divide by $\\eta K/2$. The minimum is at most the average, yielding the displayed inequality.
10. $F(x)=-x^{2}$ is smooth and has $F'(0)=0$, but zero is a strict global maximum. Curvature or function comparisons are needed to classify stationarity.
11. No. The epoch is a hyperparameter chosen using validation outcomes, so the final fitted rule is a function of validation data. That is legitimate selection if test data remain untouched and the dependence is reported.
12. The step may be extremely small because of a bad scale or failed line search, causing negligible progress despite a large gradient. Alternatively, floating-point resolution may make $\\theta -\\eta g$ equal $\\theta$, or the objective calculation may saturate/overflow. Inspect the accepted step, parameter change, arithmetic precision, and scaling rather than declaring convergence.
13. At $\\eta=\\frac{1}{4}$, the new point is $2-(\\frac{1}{4})8=0$; the left side is $F(0)=0$ and the Armijo right side is $4-(\\frac{1}{4})(\\frac{1}{4})64=0$, so it passes under $\\le$. At $\\eta=\\frac{1}{2}$, the right side is $4-8=-4$, while the left side is nonnegative, so it fails.
14. $\\lVert \\nabla G(z)-\\nabla G(w)\\rVert=\\lVert S^{\\top}[\\nabla F(Sz)-\\nabla F(Sw)]\\rVert \\le \\lVert S\\rVert L\\lVert S(z-w)\\rVert \\le L\\lVert S\\rVert^{2}\\lVert z-w\\rVert$. This is an upper bound; the best constant can be smaller.
15. Since $\\nabla F(\\theta)=A\\theta-b$ and $\\theta^{\\star}=A^{-1}b$, the update is $\\theta_+=\\theta-A^{-1}(A\\theta-b)=A^{-1}b=\\theta^{\\star}$. The result assumes an exact inverse action; computing it can be as hard as solving the original system.
16. $F(x)=x^{4}$ has zero gradient and Hessian at zero and does have a strict minimum, while $G(x)=x^{3}$ has the same first- and second-order data there but no extremum. The constant function also has zero Hessian and no strict minimum. Positive semidefiniteness is only a necessary condition in general.
17. With $\\eta=1/L$, the bound is $\\min_{k}\\lVert \\nabla F(\\theta_{k})\\rVert^{2} \\le 2L(F(\\theta_{0})-F_{\\mathrm{inf}})/K$. It suffices that $K \\ge 2L(F(\\theta_{0})-F_{\\mathrm{inf}})/\\epsilon^{2}$, rounded up to an integer.
18. The justified conclusion is numerical step stagnation under this line-search/configuration, with a large first-order residual. It is not justified to claim approximate stationarity, local optimality, or successful optimization. Diagnose scaling, the line-search model, precision, and domain before continuing.

## Project checkpoint

Choose a two-dimensional quadratic with condition number at least 100. Derive its exact gradient-descent recurrence, compare fixed steps and backtracking, and publish objective, gradient, and coordinate errors in a table. Chapter 12 diagnoses why the geometry is slow and which coordinate changes preserve the represented model.
`;export{e as default};