var e=`---
parent_id: book-applied-modeling-proof-reference
chapter_id: sensitivity-conditioning
title: "Sensitivity, Conditioning, and Decision Margins"
level: advanced-undergraduate
estimated_minutes: 95
license: CC BY-SA 4.0
status: draft
---

# Sensitivity, Conditioning, and Decision Margins

## Dependencies and goals

This chapter uses multivariable calculus, norms, and linear algebra. It distinguishes a sensitive mathematical problem, an unstable algorithm, uncertain inputs, and a fragile decision.

## Local sensitivity

**Definition 5.1 (local conditioning).** For differentiable $f:R^p\\to R^m$,

$f(θ+Δθ)=f(θ)+Df(θ)Δθ+o(\\lVert Δθ\\rVert)$.

The Jacobian is unit-dependent. If $θ_j$ is seconds and output $f_i$ is metres, $∂f_i/∂θ_j$ has metres/second. Dimensionless elasticities

\\[E_ij=(θ_j/f_i)∂f_i/∂θ_j\\]

compare fractional changes when both quantities are nonzero.

### Absolute and relative condition numbers

A condition number belongs to a specified map, point, choice of norms, and perturbation model. For a map $f:X\\to Y$ between finite-dimensional normed spaces, its absolute local condition number at $x$ is

$cond_abs(f,x)=lim_{δ\\to 0+} \\sup_{0<\\lVert Δx\\rVert≤δ} \\lVert f(x+Δx)-f(x)\\rVert/\\lVert Δx\\rVert$.

When $f$ is differentiable, this limit is the induced operator norm $\\lVert Df(x)\\rVert$. If $x$ and $f(x)$ are nonzero, a common relative version is

$cond_rel(f,x)=\\lVert Df(x)\\rVert \\lVert x\\rVert/\\lVert f(x)\\rVert$.

Neither number is meaningful until the norms and allowed perturbations are declared. If a temperature is stored in Celsius, relative changes near zero Celsius are a coordinate artifact. If two inputs must satisfy a conservation law, allowing them to vary independently computes sensitivity in impossible directions. The admissible tangent space should replace the whole input space.

For scalar $f(x)=x²$, the absolute condition number is $2|x|$ while the relative condition number is $2$ for $x≠0$. For $f(x)=\\sqrt{x}$, they are $1/(2\\sqrt{x})$ and $1/2$. Thus absolute sensitivity can diverge near zero while relative sensitivity remains moderate. The output scale determines which description answers the modeling question.

### Parameterization is part of the question

Let a positive rate be represented either by $k$ or by $η=\\log k$. The chain rule gives

$∂f/∂η = k ∂f/∂k$.

Sensitivity with respect to $η$ is exactly sensitivity to a fractional perturbation of $k$. A ranking that says one parameter is “most sensitive” can reverse after a change of coordinates. Prefer dimensionless physical parameters, state the perturbation metric, and report the map from raw measurements to those parameters.

### Worked elasticity

For EOQ $Q=\\sqrt{2KD/h}$, logarithms give

$dQ/Q=(1/2)(dK/K+dD/D-dh/h)$.

Demand elasticity is $1/2$; holding-cost elasticity is $-1/2$. This is local. A 100% change should be evaluated with the nonlinear formula.

The exact demand ratio is $Q(cD)/Q(D)=\\sqrt{c}$. A 10% increase gives $\\sqrt{1.1}-1≈0.04881$, close to the linear estimate $0.05$. A 100% increase gives $\\sqrt{2}-1≈0.4142$, not $0.5$. A useful local report therefore includes a trust region over which the linear remainder is acceptably small.

### A service-system boundary

For a stable $M/M/1$ queue with arrival rate $λ$, service rate $μ$, and $0<λ<μ$, mean time in system is

$W(λ,μ)=1/(μ-λ)$.

Its elasticities are

$E_λ = λ/(μ-λ)$,  $E_μ = -μ/(μ-λ)$.

At $λ=8$, $μ=10$, a 1% arrival-rate increase predicts about a 4% increase in mean time. The exact change from $λ=8$ to $8.08$ is from $0.5$ to $1/1.92≈0.5208$, or 4.17%. At $λ=9.8$, the arrival elasticity is 49: a local derivative is warning about proximity to the stability boundary. No sensitivity statement should extend the formula into $λ≥μ$, where the stationary mean does not exist.

## Condition numbers

Conditioning belongs to the problem map. For solving $Ax=b$, small perturbations can be amplified roughly by $κ(A)=\\lVert A\\rVert\\lVert A^{-1}\\rVert$ when $A$ is invertible. In the spectral norm, $κ_2=σ_{\\max}/σ_{\\min}$. Scaling variables changes a numerical condition number; use physically meaningful nondimensionalization before interpreting it.

A small residual $r=b-A\\hat{x}$ obeys

$\\hat{x}-x=-A^{-1}r$.

Thus $\\lVert \\hat{x}-x\\rVert≤\\lVert A^{-1}\\rVert\\lVert r\\rVert$. When $\\lVert A^{-1}\\rVert$ is large, a tiny residual permits substantial forward error.

For perturbations in both the matrix and right-hand side, let $(A+ΔA)(x+Δx)=b+Δb$. Subtracting $Ax=b$ gives

$AΔx = Δb-ΔA x-ΔA Δx$.

If $\\lVert A^{-1}\\rVert\\lVert ΔA\\rVert<1$, moving the last term into the bound yields

\\[\\lVert Δx\\rVert/\\lVert x\\rVert ≤ κ(A)/(1-κ(A)\\lVert ΔA\\rVert/\\lVert A\\rVert) · (\\lVert ΔA\\rVert/\\lVert A\\rVert + \\lVert Δb\\rVert/\\lVert b\\rVert)\\]

when the displayed relative quantities are defined and $\\lVert b\\rVert≤\\lVert A\\rVert\\lVert x\\rVert$ is used. This first-order amplification is approximately $κ(A)$ times the relative data error. The denominator matters: a perturbation large enough to cross singularity cannot be summarized by a linear estimate.

### Nearly singular example

Let

$A=\\begin{pmatrix}1&1\\\\1&1.001\\end{pmatrix}$, $b=[2,2.001]$.

The exact solution is $(1,1)$. Changing the second component of $b$ from $2.001$ to $2.002$ changes the solution to $(0,2)$. A measurement perturbation of $0.001$ causes order-one parameter change because the two equations nearly repeat the same information.

The prediction $x_1+x_2$, however, remains $2$ in both cases. Parameter instability does not imply every target is unstable. If the decision uses only the sum, estimating the individual components is an unnecessary inverse problem. This distinction anticipates identifiable functionals in the next chapter.

### Residual, backward error, and forward error

For $Ax=b$, the residual is an observable computation diagnostic. A normwise relative backward error is the smallest relative perturbation to the data that makes $\\hat{x}$ exact. With perturbations allowed only in $b$, it is $\\lVert r\\rVert/\\lVert b\\rVert$; with both $A$ and $b$, common formulas scale the residual by $\\lVert A\\rVert\\lVert \\hat{x}\\rVert+\\lVert b\\rVert$. Forward error $\\lVert \\hat{x}-x\\rVert/\\lVert x\\rVert$ requires the unknown exact answer or a conditioning bound. Conflating these three quantities is a common audit failure.

A tiny backward error plus a moderate condition number supports a forward-accuracy claim. A tiny residual alone does not.

## Implicit sensitivity

For equilibrium $F(x,θ)=0$, if $D_xF$ is invertible, the implicit function theorem yields

$dx/dθ=-(D_xF)^{-1}D_θF$.

Near a saddle-node bifurcation, $D_xF$ approaches singularity. The equilibrium may disappear, not merely shift. Reporting a linear derivative without detecting the regime boundary is unsafe.

To derive the formula, differentiate the identity $F(x(θ),θ)=0$:

$D_xF · dx/dθ + D_θF = 0$.

Invertibility of $D_xF$ then gives the result. This derivation also identifies the failure condition. If $D_xF$ is singular, an equilibrium branch may turn, split, or cease to be locally a function of $θ$.

### Worked equilibrium

Consider $F(x,θ)=x²+θ-1=0$ on the nonnegative branch $x(θ)=\\sqrt{1-θ}$ for $θ<1$. Implicit differentiation gives

$dx/dθ=-1/(2x)=-1/(2\\sqrt{1-θ})$.

At $θ=0$, the derivative is $-1/2$. At $θ=0.99$, it is $-5$. At $θ=1$, the derivative formula fails because $D_xF=2x=0$; for $θ>1$ there is no real equilibrium. A symmetric finite-difference calculation that samples across $1$ is not merely inaccurate—it asks for nonexistent model states.

## Computing derivatives without fooling yourself

Forward finite differences use

$[f(θ+h e_j)-f(θ)]/h = ∂_j f(θ)+O(h)$.

Central differences have truncation error $O(h²)$ for sufficiently smooth functions. In floating-point arithmetic, making $h$ arbitrarily small causes subtractive cancellation; a crude total-error model is $C_1 h^q+C_2 ε/h$, where $q=1$ or $2$ and $ε$ is machine precision. Step-size refinement should display a plateau before reported digits are trusted.

Symbolic differentiation can preserve exact structure but may cause expression growth. Automatic differentiation applies chain rules to program operations and can be accurate to floating-point precision, but it differentiates the executed program: branches, clipping, iterative stopping rules, and nondifferentiable operations require interpretation. Complex-step differentiation avoids subtraction for analytic code, yet fails through non-analytic operations such as absolute values or comparisons.

For a scalar objective $J(x(θ),θ)$ constrained by $F(x,θ)=0$, solving separately for every column of $dx/dθ$ is costly when there are many parameters. Define an adjoint $p$ by

$(D_xF)^{\\mathsf T} p = (D_xJ)^{\\mathsf T}$.

Then

$dJ/dθ = D_θJ - p^{\\mathsf T} D_θF$.

One adjoint solve supplies the gradient with respect to many parameters. The formula inherits the same differentiability and invertibility assumptions as implicit sensitivity; an efficient gradient is not evidence that those assumptions hold.

## Algorithmic stability

Conditioning asks how exact outputs respond to input changes. Stability asks whether a numerical algorithm approximately solves a nearby problem. A backward-stable algorithm returns the exact solution for slightly perturbed data. Good stability cannot cure ill-conditioning; it ensures the computed error is no worse than the problem permits up to controlled factors.

Subtracting nearly equal floating-point numbers can lose relative accuracy. Normal equations for least squares square the condition number because $κ(A^TA)=κ(A)^2$ in the full-rank spectral setting. QR or SVD methods are usually preferable when conditioning matters.

### Cancellation in a quadratic root

For $x²-10^8 x+1=0$, the smaller root is mathematically

$x_small=(10^8-\\sqrt{10^{16}-4})/2$.

The subtraction removes nearly all leading digits. Using the product of roots, compute the large root with addition and then set $x_small=1/x_large$. Both formulas are algebraically equivalent, but their floating-point behavior differs. This is algorithmic stability, distinct from whether the polynomial’s roots are conditioned with respect to coefficient error.

### Stopping error in simulation

If an iterative solver stops when $\\lVert F(x)\\rVert≤τ$, a sensitivity study can mistake solver noise for physical response whenever changes in output are comparable to $τ$ amplified by $\\lVert (D_xF)^{-1}\\rVert$. Tighten tolerances and repeat selected points. Record solver failures as outcomes rather than silently dropping them; failure regions may coincide with the scientifically important boundary.

## Global sensitivity

Local derivatives can miss interactions, thresholds, and nonmonotonicity. Global methods vary inputs over a declared region or distribution. One-at-a-time sweeps miss interactions. Variance decompositions require an input probability model, often independence. Worst-case bounds require an uncertainty set. Every sensitivity ranking is conditional on ranges, parameterization, dependence, and output metric.

Suppose independent inputs $X=(X_1,…,X_p)$ have a declared joint distribution and scalar output $Y=f(X)$ with finite variance. The law of total variance gives

$Var(Y)=Var(E[Y|X_i])+E[Var(Y|X_i)]$.

The first-order Sobol index

\\[S_i=Var(E[Y|X_i])/Var(Y)\\]

measures the fraction of output variance attributable to $X_i$ alone under that distribution. A total-effect index counts all interactions involving $X_i$. These are not intrinsic parameter importance scores: widen an input range, change dependence, or use a different output and the ranking can change. Standard independent-input decompositions should not be applied to correlated inputs without a method whose attribution convention is stated.

### Interaction missed one at a time

Let $f(x_1,x_2)=x_1x_2$ near $(0,0)$. Both local partial derivatives vanish. A one-at-a-time sweep holding the other input at zero also shows no effect. Yet changing both inputs produces a nonzero output, and over independent symmetric ranges the output has positive variance entirely through interaction. A factorial corner check catches what the nominal derivative misses.

### Method-to-question map

Use local derivatives for small perturbations in a smooth regime; scenario grids for a few interpretable joint futures; interval or robust optimization for defensible bounded sets; variance-based indices for a defensible probability distribution; and threshold search when the question is which regime or action changes. No method rescues an indefensible uncertainty specification.

Nonsmooth models need special care. At a capacity threshold, derivative values on either side may exist while no derivative exists at the threshold. Report one-sided derivatives, switch locations, or finite changes. Averaging derivatives across a discontinuity can describe no actual behavior.

## From output sensitivity to decision margins

Let actions have losses $L(a,θ)$. If $a*$ is nominally best, define pairwise margin

$M_b(θ)=L(b,θ)-L(a*,θ)$.

The action remains preferable to $b$ while $M_b>0$. Approximate the nearest switch by solving the linearized equation

$M_b(θ)+∇M_b(θ)^{\\mathsf T}Δθ=0$.

This connects sensitivity to an actionable question. Large prediction variation can be irrelevant if all actions remain ordered; tiny variation matters near a tie.

### Worked choice

Plan A costs $100+2d$, Plan B costs $160+d$, where $d$ is demand. A is cheaper when $100+2d<160+d$, or $d<60$. At nominal $d=40$, margin is 20 cost units and demand can rise by 20 before the choice flips. Reporting only the derivative—A changes twice as fast—misses the decision threshold.

For $d∈[35,55]$, A is robustly cheaper. For $d∈[35,70]$, neither action dominates. The minimax-regret calculation is different from worst-case cost: A’s regret when $d>60$ is $d-60$, while B’s regret when $d<60$ is $60-d$. Over $[35,70]$, worst regret is 10 for A and 25 for B, so A minimizes maximum regret even though B has the smaller worst-case cost ($230$ versus $240$). The criterion must be chosen before seeing which action it favors.

## A sensitivity audit

A reusable report contains six layers:

1. the target output or decision and its units;
2. admissible perturbations, ranges, dependence, and parameterization;
3. local derivatives or elasticities with a checked trust region;
4. global scenarios or distributional indices suited to the claim;
5. numerical error and solver-failure diagnostics;
6. regime and decision-switch boundaries.

Label structural alternatives separately from parameter perturbations. Changing a queue from exponential to heavy-tailed service, or a demand model from independent periods to autocorrelated shocks, is not a wider parameter interval inside the same model. It is a different model contract.

## A derivative ranking depends on the permitted perturbations

Comparing raw partial derivatives can be misleading when parameters have different units or ranges. A derivative with respect to metres changes numerically when the same length is recorded in centimetres. Choose a perturbation scale for each parameter and compare derivatives multiplied by those scales. For a scalar output, this corresponds to differentiating after the dimensionless change of variables. It answers a declared question about plausible input changes rather than ranking symbols by their stored units.

If parameter uncertainty is correlated, coordinatewise rankings can miss the directions actually supported by the data. For instance, a fitted model may allow two coefficients to increase together while keeping their difference well determined. An output depending only on their difference can be insensitive along that allowed direction even though both of its coordinate derivatives are large. A covariance ellipse, a bounded joint set, or an explicit dependence model is needed to propagate this structure.

Finally, a sensitivity derivative changes a parameter inside the written model. It does not show that an intervention can alter that parameter while holding everything else fixed. Raising a service rate may also change cost, staffing, arrival behavior, or error rates. The mathematical derivative is useful when its conditional meaning is retained. An operational recommendation needs a feasible intervention and a model of its other consequences.

## Exercises

<a id="answers"></a>

### Exercise 1
<a id="sensitivity-conditioning-ex-1"></a>

Find relative condition number of $f(x)=x²$ for $x≠0$.

<details>
<summary>Hint 1</summary>

Differentiate the scalar map before normalizing.

</details>
<details>
<summary>Hint 2</summary>

Use absolute derivative times input magnitude divided by output magnitude.

</details>
<details>
<summary>Full solution</summary>

$|xf'(x)/f(x)|=2$.

</details>

### Exercise 2
<a id="sensitivity-conditioning-ex-2"></a>

A computed solution has residual $10^{-8}$ and $\\lVert A^{-1}\\rVert≈10^{10}$. Explain why accuracy is not certified.

<details>
<summary>Hint 1</summary>

Relate forward error to the residual through the inverse operator.

</details>
<details>
<summary>Hint 2</summary>

A small residual is multiplied by a possibly very large inverse norm.

</details>
<details>
<summary>Full solution</summary>

The forward-error bound can be order $10²$ before scaling factors; small residual is insufficient for an ill-conditioned system.

</details>

### Exercise 3
<a id="sensitivity-conditioning-ex-3"></a>

Construct two actions whose predicted outcomes are sensitive but ordering is constant over a declared interval.

<details>
<summary>Hint 1</summary>

Compare the difference of the two predicted losses.

</details>
<details>
<summary>Hint 2</summary>

Both losses can vary rapidly while their signed difference never crosses zero.

</details>
<details>
<summary>Full solution</summary>

For $θ∈[0,10]$, losses $L_A=100θ$ and $L_B=100θ+5$ are sensitive in absolute output but A remains better by 5 throughout.

</details>

### Exercise 4
<a id="sensitivity-conditioning-ex-4"></a>

For $f(x)=1/(1-x)$, compute the absolute and relative scalar condition numbers. Interpret the limit as $x\\to 1^-$.

<details>
<summary>Hint 1</summary>

The absolute condition number is the magnitude of the derivative.

</details>
<details>
<summary>Hint 2</summary>

For the relative version include the input and output scales before taking the limit.

</details>
<details>
<summary>Full solution</summary>

Since $f'(x)=1/(1-x)²$, $cond_abs=1/|1-x|²$ and $cond_rel=|x|/|1-x|$ for $x≠0,1$. Both expose the singular boundary, while the relative number also depends on the input’s chosen zero.

</details>

### Exercise 5
<a id="sensitivity-conditioning-ex-5"></a>

The stable-queue formula is $W=1/(μ-λ)$. At $(λ,μ)=(9,10)$, estimate the fractional change in $W$ caused by increasing both rates by 1%. Then verify exactly.

<details>
<summary>Hint 1</summary>

Differentiate with respect to both arrival and service rates.

</details>
<details>
<summary>Hint 2</summary>

A common multiplicative change in both rates permits an exact comparison too.

</details>
<details>
<summary>Full solution</summary>

Elasticities are $E_λ=9$ and $E_μ=-10$, so equal 1% changes give about $9%-10%=-1%$. Exactly, $(λ,μ)$ becomes $(9.09,10.1)$, the gap changes from 1 to 1.01, and $W$ changes from 1 to $1/1.01≈0.990099$, a $-0.9901%$ change. Scaling both rates increases the time unit’s speed while utilization stays fixed.

</details>

### Exercise 6
<a id="sensitivity-conditioning-ex-6"></a>

Let $A=\\operatorname{diag}(1,10^{-4})$ and $b=(1,10^{-4})^{\\mathsf T}$. A computed value is $\\hat{x}=(1,0)^{\\mathsf T}$. Find its residual and forward error in the Euclidean norm. What does the comparison show?

<details>
<summary>Hint 1</summary>

Compute the residual in data coordinates and the error in solution coordinates.

</details>
<details>
<summary>Hint 2</summary>

The second diagonal entry hides a unit solution error behind a small data residual.

</details>
<details>
<summary>Full solution</summary>

$r=b-A\\hat{x}=(0,10^{-4})^{\\mathsf T}$, so $\\lVert r\\rVert_2=10^{-4}$. The exact solution is $(1,1)^{\\mathsf T}$; the forward error is $\\lVert (0,-1)\\rVert_2=1$, or $1/\\sqrt{2}$ relative to $\\lVert x\\rVert_2$. A small absolute residual can coexist with a large forward error because the second singular value is small.

</details>

### Exercise 7
<a id="sensitivity-conditioning-ex-7"></a>

For $F(x,θ)=x+θx³-1=0$, derive $dx/dθ$ wherever the implicit function theorem applies. Evaluate it at $(x,θ)=(1,0)$.

<details>
<summary>Hint 1</summary>

Differentiate the defining equation while treating x as parameter-dependent.

</details>
<details>
<summary>Hint 2</summary>

Divide only where the derivative with respect to x is nonzero.

</details>
<details>
<summary>Full solution</summary>

$F_x=1+3θx²$ and $F_θ=x³$, so $dx/dθ=-x³/(1+3θx²)$ when the denominator is nonzero. At $(1,0)$, it is $-1$.

</details>

### Exercise 8
<a id="sensitivity-conditioning-ex-8"></a>

Central differences for a smooth scalar function have error modeled by $a h²+b ε/h$, with positive constants. Find the scaling of the error-minimizing $h$ with $ε$.

<details>
<summary>Hint 1</summary>

Balance the derivative of the two error contributions.

</details>
<details>
<summary>Hint 2</summary>

Only the power of epsilon is requested; the constants affect the prefactor.

</details>
<details>
<summary>Full solution</summary>

Differentiate the error model: $2ah-bε/h²=0$, hence $h³=bε/(2a)$ and $h$ scales as $ε^{1/3}$. Constants and output scaling still need empirical refinement checks.

</details>

### Exercise 9
<a id="sensitivity-conditioning-ex-9"></a>

Let independent $X_1,X_2$ have mean zero and variance one, and $Y=X_1+X_1X_2$. Compute $Var(Y)$, the first-order Sobol numerators $Var(E[Y|X_i])$, and explain the interaction.

<details>
<summary>Hint 1</summary>

Use independence and zero means to eliminate cross terms.

</details>
<details>
<summary>Hint 2</summary>

For each first-order contribution, condition on one variable before taking a variance.

</details>
<details>
<summary>Full solution</summary>

$Var(X_1)=1$. The cross term has variance $E[X_1²]E[X_2²]=1$, and covariance with $X_1$ is $E[X_1²X_2]=0$, so $Var(Y)=2$. Now $E[Y|X_1]=X_1$, giving numerator 1, while $E[Y|X_2]=E[X_1](1+X_2)=0$, giving numerator 0. Half the variance is a main effect of $X_1$; half is the $X_1,X_2$ interaction, even though $X_2$ has no first-order effect.

</details>

### Exercise 10
<a id="sensitivity-conditioning-ex-10"></a>

Two losses are $L_A=20+4θ$ and $L_B=35+θ$ for $θ∈[0,10]$. Find the switch point, each action’s maximum regret, and the minimax-regret action.

<details>
<summary>Hint 1</summary>

Solve equality of the two losses to locate the switch.

</details>
<details>
<summary>Hint 2</summary>

Regret compares the selected action with the better action at each parameter value.

</details>
<details>
<summary>Full solution</summary>

Equality gives $20+4θ=35+θ$, so $θ=5$. A is worse above 5 by $3θ-15$, with maximum regret 15 at 10. B is worse below 5 by $15-3θ$, with maximum regret 15 at 0. Both tie under minimax regret, though other criteria can distinguish them.

</details>

### Exercise 11
<a id="sensitivity-conditioning-ex-11"></a>

A response is $g(k,t)=\\exp\\left(-kt\\right)$. Compute elasticities with respect to positive $k$ and $t$. Why is ranking $k$ versus $t$ as “more important” meaningless here?

<details>
<summary>Hint 1</summary>

Take logarithmic derivatives of the positive response.

</details>
<details>
<summary>Hint 2</summary>

The product kt is symmetric in the two logarithmic perturbations.

</details>
<details>
<summary>Full solution</summary>

Both elasticities are $-kt$: $k∂_k g/g=-kt$ and $t∂_t g/g=-kt$. Only their product is relevant to this response. A ranking would depend on arbitrary perturbation ranges or units rather than separate functional roles.

</details>

### Exercise 12
<a id="sensitivity-conditioning-ex-12"></a>

A simulator clips every negative state to zero. Explain why an automatic derivative at a trajectory that touches zero may not represent sensitivity of the intended physical model, and name two diagnostics.

<details>
<summary>Hint 1</summary>

Determine whether the executed trace crosses a clipping boundary.

</details>
<details>
<summary>Hint 2</summary>

Compare one-sided perturbations and the unclipped model before interpreting the returned derivative.

</details>
<details>
<summary>Full solution</summary>

Clipping introduces a kink and may conceal that the unconstrained numerical method crossed an invalid region. The program derivative can follow one branch while infinitesimal physical perturbations change contact timing or active constraints. Check one-sided finite changes and step-size refinement; also compare an event-aware constrained formulation and report how often clipping activates.

</details>

## Project checkpoint

Produce a nondimensional local sensitivity table, a global scenario table, a conditioning diagnostic, and a decision-switch boundary for the running project.

## Summary

Conditioning describes changes in the mathematical answer, while residuals describe satisfaction of equations. Decisions can be stable even when parameters are not. Identifiability next asks whether the observations distinguish those parameters at all.
`;export{e as default};