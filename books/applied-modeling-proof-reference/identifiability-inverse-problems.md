
# Identifiability, Inverse Problems, and Regularization

## Dependencies and objectives

This chapter uses linear algebra, calculus, probability likelihoods, and optimization. It separates uniqueness from stability and shows exactly which information a regularizer contributes.

## Observation maps

Let $h:Θ\to Y$ map parameters to ideal observations. Global identifiability means $h(θ)=h(θ')$ implies $θ=θ'$. Local identifiability means this holds near the true point. An experiment is part of $h$: observation times, inputs, sensors, and initial conditions can alter identifiability.

The relation $θ~θ'$ when $h(θ)=h(θ')$ partitions parameter space into observational equivalence classes. Data can at best identify the class $[θ]$, not a preferred representative. A target $g(θ)$ is an identifiable functional when it is constant on every equivalence class: $h(θ)=h(θ')$ implies $g(θ)=g(θ')$. This is often enough. A decision may depend on total demand even when regional components cannot be separated.

Three questions should be kept distinct:

1. **Structural identifiability:** with exact, noiseless observations allowed by the experiment, is the parameter or functional unique?
2. **Practical identifiability:** with the actual sampling pattern and noise magnitude, is the estimate sufficiently stable for its intended use?
3. **Algorithmic recovery:** does the chosen computation locate and characterize the relevant solutions?

More data of the same kind can improve practical precision, but cannot repair a structural equivalence. Better optimization can locate a ridge more accurately, but cannot turn that ridge into information.

### Sum-only example

If $h(a,b)=a+b$, each line $a+b=c$ is an equivalence class. More precise sum measurements shrink uncertainty perpendicular to the line but not along it. Adding a prior or penalty selects a point; it does not make the data distinguish $a$ from $b$.

Here $g(a,b)=a+b$ and every function of that sum are identifiable. The difference $a-b$ is not. Reparameterizing with $s=a+b$ and $d=a-b$ exposes the structure: the observation map is $h(s,d)=s$, so $d$ never enters the likelihood.

### A growth observation

Suppose $N(t)=N_0 \exp\left(rt\right)$ and one exact positive-time value $N(T)$ is observed while both $N_0$ and $r$ are unknown. The equation

\[\log N(T)=\log N_0+rT\]

identifies only the combination $\log N_0+rT$. A second observation at a distinct time $T_2$ gives two independent linear equations in $\log N_0$ and $r$, provided the same growth law and observation scale remain valid. Replicating only at $T$ estimates the same combination more precisely. Measuring at a new time changes the observation map.

## Jacobian rank and its boundary

When $h:R^p\to R^m$ is continuously differentiable and $Dh(θ_0)$ has full column rank, a nonsingular $p×p$ coordinate submap exists. The inverse function theorem gives local identification. Rank deficiency provides a first-order null direction.

Full rank is not necessary at singular points: $h(θ)=θ³$ is injective although derivative is zero at the origin. Conversely, full local rank does not prove global uniqueness; $h(θ)=(\cosθ,\sinθ)$ repeats every $2π$.

When $Dh(θ_0)$ has a null vector $v$, continuous differentiability gives

$h(θ_0+εv)-h(θ_0)=o(ε)$.

This establishes first-order confounding, not necessarily exact non-identifiability or a quadratic remainder: the $C^1$ function $h(t)=|t|^{3/2}$ has $h'(0)=0$ but is not $O(t^2)$. A locally bounded second derivative would strengthen the remainder to $O(ε^2)$. One should inspect higher-order regularity, symmetries, or a profile rather than declare a theorem from a numerical rank threshold alone.

Numerical rank itself depends on scale and tolerance. If one parameter is measured in metres and another in nanometres, unscaled Jacobian columns can differ by nine orders of magnitude without representing different information. Nondimensionalize parameters and observations, then report the singular spectrum rather than only a binary full-rank verdict.

### Symmetry as a source of non-identifiability

If a transformation group $G$ acts on parameters and $h(g·θ)=h(θ)$ for every $g∈G$, each orbit lies within an equivalence class. Examples include sign symmetry in $θ²$, label permutations in mixtures, and compensating scale factors in a product $ab$. One can sometimes choose a convention—such as ordering mixture means—to obtain a unique coordinate description. The convention breaks the label symmetry; it does not add evidence about a scientifically meaningful label.

## Linear inverse problems

For $y=Ax$, exact identification is equivalent to $\operatorname{ker} A={0}$. With singular-value decomposition $A=UΣV^{\mathsf T}$, the least-squares inverse divides data coordinates by singular values. Small $σ_i$ amplify noise.

Write a full-column-rank matrix as $A=UΣV^{\mathsf T}$, with singular values $σ_1≥…≥σ_p>0$. Then the least-squares estimator is

$\hat{x}=A^+y=Σ_{i=1}^p (u_i^{\mathsf T} y/σ_i)v_i$.

If $y=Ax_{\mathrm{true}}+e$, its error is

$\hat{x}-x_{\mathrm{true}}=Σ_{i=1}^p (u_i^{\mathsf T} e/σ_i)v_i$.

Noise aligned with $u_i$ is amplified by $1/σ_i$. If $A$ has a zero singular value, the component of $x$ in the corresponding $v_i$ direction is invisible. If singular values merely approach zero in a sequence of finer discretizations, the inverse can be unstable even when each finite matrix has full rank.

The Moore–Penrose solution for a rank-deficient system selects the minimum-norm member among least-squares solutions. That selection is geometric convention, not a measurement of the null-space component.

Truncated SVD discards directions below a threshold. Tikhonov regularization solves

$\min_x \lVert Ax-y\rVert²+α\lVert Lx\rVert²$.

**Proposition 6.1 (Tikhonov uniqueness).** The Hessian is $2(A^TA+αL^TL)$. For $α>0$, uniqueness holds exactly when $\operatorname{ker} A∩\operatorname{ker} L={0}$. The proof follows from

$v^{\mathsf T}(A^TA+αL^TL)v=\lVert Av\rVert²+α\lVert Lv\rVert²$.

### Spectral filter

With $L=I$, Tikhonov solution in SVD coordinates multiplies $u_i^Ty$ by

$σ_i/(σ_i²+α)$.

Large singular directions approximate inversion; tiny directions are suppressed. Bias enters because even noise-free components shrink. The parameter $α$ controls a bias-stability trade-off, not a truth-stability trade-off.

For $L=I$, substituting $y=Ax_{\mathrm{true}}+e$ gives componentwise

$v_i^{\mathsf T} x_α = [σ_i²/(σ_i²+α)] v_i^{\mathsf T} x_{\mathrm{true}} + [σ_i/(σ_i²+α)]u_i^{\mathsf T} e$.

The first factor is a shrinkage bias; the second is noise transmission. Increasing $α$ reduces the largest possible noise gain but suppresses more of the truth. No value of $α$ is universally optimal without specifying a loss, noise model, and class of plausible signals.

### Choosing and auditing regularization

An idealized discrepancy principle chooses $α$ so the residual is commensurate with a justified noise level. Cross-validation estimates predictive performance for held-out observations drawn under a comparable design. An L-curve inspects a corner in the residual-versus-penalty trade-off, but a visually appealing corner is not a theorem. Each rule answers a conditional question and can fail under misspecified noise, dependent folds, or forward-model error.

The resolution matrix for ridge reconstruction is

$R_α=(A^TA+αI)^{-1} A^TA$.

In noise-free data, $x_α=R_α x_{\mathrm{true}}$. Rows of $R_α$ show how a reported coordinate averages true coordinates; $R_α=I$ would be exact resolution. Its trace, $Σ_i σ_i²/(σ_i²+α)$, is an effective number of retained degrees of freedom. Reporting only a smooth reconstructed curve can hide poor resolution.

## Statistical identification

A parametric family is identifiable if $P_θ=P_θ'$ implies $θ=θ'$. Mixture models can have label symmetry: swapping component labels leaves the distribution unchanged. Constraints can select a label order, but substantive component interpretation still needs care.

Structural identification is a property of the family of distributions, not of one realized sample. Estimation uncertainty is a property of the sampling procedure at a sample size and design. An identifiable parameter may be estimated imprecisely; a non-identifiable parameter may receive a deceptively narrow penalized interval if the penalty is treated as data.

Fisher information

\[I(θ)=E_θ[s_θ(Y)s_θ(Y)^{\mathsf T}]\]

quantifies local likelihood curvature under regularity. Near-singular information suggests weak practical identification. Standard asymptotic normal intervals can fail at parameter boundaries, under mixtures, weak instruments, or misspecification.

For independent normal observations $Y_i~N(a+b x_i,σ²)$ with known $σ$, information for $(a,b)$ is proportional to

$\begin{pmatrix}n& Σx_i\\Σx_i& Σx_i²\end{pmatrix}$.

Its determinant is $nΣ(x_i-\bar{x})²$. If every $x_i$ is the same, only the combination $a+b x_i$ is identified. Replication increases $n$ but leaves the determinant zero. Spreading feasible design points creates slope information. Centering the $x_i$ also reduces numerical correlation between estimated intercept and slope.

Likelihood profiling avoids forcing a symmetric quadratic approximation. For a target $ψ$, define the profile log likelihood

$ℓ_p(ψ)=\sup_λ ℓ(ψ,λ)$,

where $λ$ collects nuisance parameters. A flat profile signals weak information; disconnected peaks signal competing explanations. The usual likelihood-ratio cutoff relies on regularity and must be recalibrated near boundaries or singular models.

## Profiles and experiments

To profile parameter $θ_j$, fix it on a grid and reoptimize the other parameters. A flat or multi-modal profile reveals information hidden by one Hessian. Plot predictions along the profile: poorly identified parameters can still yield stable predictions, and the reverse can occur for extrapolation.

Experiment design changes $h$. For exponential response $y(t)=Ae^{-kt}$, observing only $t=0$ identifies $A$ but not $k$. Widely separated positive times improve discrimination, subject to detection limits. Inputs that excite different modes can increase rank, but safety and feasibility constrain design.

For two exact positive observations $y(t_1),y(t_2)$ with $t_1≠t_2$, division gives

$y(t_2)/y(t_1)=\exp[-k(t_2-t_1)]$,

so $k=-\log(y(t_2)/y(t_1))/(t_2-t_1)$ and then $A=y(t_1)\exp\left(kt_1\right)$. With noise, taking times extremely close makes the log ratio unstable, while taking them too late may put both responses below detection. Structural identifiability is only the first design filter.

Common local design scores use an information matrix $I(ξ,θ)$ for design $ξ$. D-optimality maximizes $\det I$, shrinking an asymptotic confidence ellipsoid’s volume; A-optimality minimizes $\operatorname{Tr}(I^{-1})$, an average variance criterion; E-optimality raises the smallest eigenvalue. These criteria can disagree, depend on a nominal $θ$, and ignore operational cost. A robust design examines plausible parameter values and keeps feasibility, safety, and ethics explicit.

### Sequential design without circular certainty

One may fit a provisional model, choose the next input where candidate explanations differ, observe, and update. This can be efficient, but adaptivity changes the sampling process. Preserve the decision rule, include exploration where warranted, and evaluate whether the initial model family excluded the actual mechanism. An experiment optimized inside the wrong family can confidently distinguish only wrong alternatives.

## Bayesian regularization boundary

A prior plus likelihood produces a posterior even when likelihood alone is non-identifying. Posterior concentration can then be prior-driven. Report prior sensitivity and identifiable parameter combinations. “Bayesian” does not turn absent information into observed evidence.

In the sum-only model, suppose an exact observation fixes $a+b=s$ and independent normal priors are placed on $a$ and $b$. The posterior along the line $a+b=s$ is proportional to the prior density restricted to that line. Changing prior variances changes how the total is allocated, even with arbitrarily precise observation of $s$. The data identify the line; the prior chooses positions along it.

Posterior predictive quantities can nevertheless be stable when they depend only on identified combinations. Report both prior sensitivity of latent parameters and sensitivity of the actual decision or prediction. The appropriate conclusion may be “components are prior-sensitive, total response is data-stable.”

## Prediction and causal boundaries

Good in-sample prediction does not establish parameter interpretation. Two mechanistic parameterizations can induce the same predictive distribution on observed inputs yet extrapolate differently under an intervention. Conversely, a nuisance parameter may be poorly estimated without harming a narrow interpolation target.

Causal identifiability needs assumptions beyond numerical inversion: a causal graph or potential-outcome model, consistency, exchangeability or an identification strategy, positivity, and a defined intervention. Regularizing a regression coefficient does not solve unmeasured confounding. Instrumental-variable identification depends on relevance, exclusion, and independence; a strong first-stage fit supports relevance only, not the untestable exclusion claim. Keep causal assumptions in the model contract rather than laundering them through the word “identified.”

## Worked deconvolution

A three-bin blur averages adjacent values, represented by a matrix with a small singular value. Two spiky signals can yield nearly equal blurred data. An identity penalty produces a small-norm reconstruction; a first-difference penalty produces a smooth reconstruction. Both can fit the data similarly. The choice of $L$ encodes which signals are plausible, so compare reconstructions, forward residuals, and resolution kernels.

Take the two-bin forward matrix

$A=\begin{pmatrix}1&1\\1&1.01\end{pmatrix}$.

The signals $x=(1,1)$ and $x'=(0,2)$ produce $Ax=(2,2.01)$ and $Ax'=(2,2.02)$. Noise of size $0.01$ in the second observation can make them indistinguishable. A penalty $\lVert x\rVert²$ favors $(1,1)$ over $(0,2)$ because their squared norms are 2 and 4. A sparsity penalty could favor a one-component explanation instead. The forward data did not announce which structural preference is correct.

For an actual reconstruction, present at least four diagnostics: residuals in observation units; the singular or information spectrum after sensible scaling; sensitivity across a defensible regularization range; and resolution or predictive checks tied to the intended use. If simulated truth is available, recovery error is a useful controlled benchmark. For real data, truth error cannot be computed merely because software returns an array named `truth`.

## Identification audit

Before interpreting fitted parameters, answer:

1. What is the forward observation map, including sampling design and observation noise?
2. Which exact symmetries or equivalence classes are known?
3. Which parameter combinations and decision targets are identifiable?
4. What do scaled Jacobian singular values, profiles, or information eigenvalues show?
5. Which conclusions come from data, and which from constraints, priors, or penalties?
6. How do results change across regularization and plausible structural models?
7. Would a feasible new measurement distinguish the live alternatives?

A clean optimizer exit is not on this list. Convergence is necessary evidence about computation, not sufficient evidence about uniqueness, stability, calibration, or causal meaning.

## Exercises

<a id="answers"></a>

### Exercise 1
<a id="identifiability-inverse-problems-ex-1"></a>

Is $h(θ)=θ²$ globally or locally identifiable on $R$? On $[0,∞)$?

<details>
<summary>Hint 1</summary>

Compare the observations at opposite parameter values.

</details>
<details>
<summary>Hint 2</summary>

Local injectivity away from zero and global injectivity are different questions.

</details>
<details>
<summary>Full solution</summary>

Not globally on $R$ because $θ$ and $-θ$ coincide; locally it is identifiable away from zero. On $[0,∞)$ it is globally identifiable.

</details>

### Exercise 2
<a id="identifiability-inverse-problems-ex-2"></a>

Prove Tikhonov uniqueness under $\operatorname{ker} A∩\operatorname{ker} L={0}$.

<details>
<summary>Hint 1</summary>

Write the quadratic form of the penalised normal matrix.

</details>
<details>
<summary>Hint 2</summary>

It vanishes exactly when a vector is simultaneously in both stated kernels.

</details>
<details>
<summary>Full solution</summary>

The objective is strictly convex because its Hessian quadratic form is positive for every nonzero vector exactly under the kernel condition; therefore at most one minimizer exists, and coercivity on finite dimensions yields existence.

</details>

### Exercise 3
<a id="identifiability-inverse-problems-ex-3"></a>

Explain why repeated observation at the same time may shrink noise but not cure structural non-identifiability.

<details>
<summary>Hint 1</summary>

Distinguish reducing measurement variance from changing the observation map.

</details>
<details>
<summary>Hint 2</summary>

Repeated rows need not increase the rank of its derivative.

</details>
<details>
<summary>Full solution</summary>

Replication improves precision for the same output coordinate but does not add a new independent direction to the observation map.

</details>

### Exercise 4
<a id="identifiability-inverse-problems-ex-4"></a>

For $h(a,b)=a+b$, decide whether each functional is identifiable: $a-b$, $(a+b)²$, $\exp\left(a+b\right)$, and $a/(a+b)$ when the denominator is nonzero. Justify each answer using equivalence classes.

<details>
<summary>Hint 1</summary>

Keep the observed sum fixed while moving along its level line.

</details>
<details>
<summary>Hint 2</summary>

An identifiable functional must be constant on every observational equivalence class.

</details>
<details>
<summary>Full solution</summary>

The first is not identifiable: moving from $(a,b)$ to $(a+t,b-t)$ preserves the sum but changes $a-b$ by $2t$. The square and exponential are identifiable because each is a function only of the observed sum. The ratio is not: on the class $a+b=s$, its value $a/s$ changes with $a$ whenever $s≠0$.

</details>

### Exercise 5
<a id="identifiability-inverse-problems-ex-5"></a>

The exact model is $y(t)=A \exp\left(-kt\right)$ with positive $A$. Given $y(1)=6$ and $y(3)=1.5$, find $k$ and $A$. Why would two replicates at $t=1$ not suffice to separate them?

<details>
<summary>Hint 1</summary>

Divide the two positive observations before taking logarithms.

</details>
<details>
<summary>Hint 2</summary>

The time difference identifies the decay rate; one observation then gives the amplitude.

</details>
<details>
<summary>Full solution</summary>

The ratio is $y(3)/y(1)=1/4=\exp\left(-2k\right)$, so $k=(\log 4)/2=\log 2$. Then $A=6\exp(k)=12$. Replication at one time estimates only $A\exp(-k)$; the forward map still has a one-dimensional equivalence curve.

</details>

### Exercise 6
<a id="identifiability-inverse-problems-ex-6"></a>

Let $A_ε=\operatorname{diag}(1,ε)$ and observe $y=A_ε x+e$. If $x=(1,1)$, $e=(0,δ)$, and $ε>0$, find the unregularized inverse estimate and its error. What happens when $δ=ε/10$ as $ε\to 0$? What if $δ$ is fixed?

<details>
<summary>Hint 1</summary>

Invert the two diagonal coordinates separately.

</details>
<details>
<summary>Hint 2</summary>

Compare fixed data error with data error scaled to the small singular value.

</details>
<details>
<summary>Full solution</summary>

Direct inversion gives $\hat{x}=(1,1+δ/ε)$ and error $(0,δ/ε)$. When $δ=ε/10$, the error stays $0.1$ even as the absolute observation error vanishes. When $δ$ is fixed, the error diverges like $1/ε$. Full rank for every positive $ε$ does not imply practical stability.

</details>

### Exercise 7
<a id="identifiability-inverse-problems-ex-7"></a>

Derive the ridge spectral coefficient $v_i^{\mathsf T} x_α$ from the normal equations for $\min_x \lVert Ax-y\rVert²+α\lVert x\rVert²$. Separate its noise-free shrinkage and noise contribution when $y=Ax_{\mathrm{true}}+e$.

<details>
<summary>Hint 1</summary>

Diagonalise the normal equations using singular vectors.

</details>
<details>
<summary>Hint 2</summary>

Insert the signal-plus-noise observation before separating the two resulting terms.

</details>
<details>
<summary>Full solution</summary>

The normal equations are $(A^TA+αI)x_α=A^Ty$. Multiplying by $v_i^{\mathsf T}$ and using $Av_i=σ_i u_i$ gives $(σ_i²+α)v_i^Tx_α=σ_i u_i^Ty$. Thus $v_i^Tx_α=σ_i u_i^Ty/(σ_i²+α)$. Substitution of $y=Ax_{\mathrm{true}}+e$ yields $[σ_i²/(σ_i²+α)]v_i^Tx_{\mathrm{true}}+[σ_i/(σ_i²+α)]u_i^Te$, displaying shrinkage and transmitted noise.

</details>

### Exercise 8
<a id="identifiability-inverse-problems-ex-8"></a>

For $A=\operatorname{diag}(3,1)$ and ridge parameter $α=1$, compute the resolution matrix and its trace. Interpret each diagonal entry.

<details>
<summary>Hint 1</summary>

Apply each scalar ridge filter to the corresponding diagonal singular value.

</details>
<details>
<summary>Hint 2</summary>

Resolution acts on the true state, rather than directly on the data vector.

</details>
<details>
<summary>Full solution</summary>

$R=(A^TA+I)^{-1}A^TA=\operatorname{diag}(9/10,1/2)$, and $\operatorname{Tr} R=1.4$. In noise-free data ridge retains 90% of the first singular coordinate and 50% of the second. The effective retained dimension lies between one and two; it is not two fully resolved coordinates.

</details>

### Exercise 9
<a id="identifiability-inverse-problems-ex-9"></a>

In the normal straight-line model, compute the information determinant factor $nΣ(x_i-\bar{x})²$ for design points $(0,0,2,2)$. Compare it with four repeats at $x=1$.

<details>
<summary>Hint 1</summary>

Compute the mean and squared deviations of the design points.

</details>
<details>
<summary>Hint 2</summary>

Equal design points leave no spread for identifying the slope.

</details>
<details>
<summary>Full solution</summary>

Here $\bar{x}=1$, so $Σ(x_i-\bar{x})²=1+1+1+1=4$; multiplying by $n=4$ gives 16. Four repeats at 1 have zero spread and determinant factor zero. Both designs have four observations, but only the first separates intercept from slope.

</details>

### Exercise 10
<a id="identifiability-inverse-problems-ex-10"></a>

On the positive quadrant, let $h(a,b)=(ab,a/b)$. Is $(a,b)$ globally identifiable? Derive the inverse. What symmetry appears if arbitrary nonzero real values are allowed?

<details>
<summary>Hint 1</summary>

Multiply and divide the observed product and ratio.

</details>
<details>
<summary>Hint 2</summary>

Positive signs remove the simultaneous sign-change ambiguity.

</details>
<details>
<summary>Full solution</summary>

From $p=ab$ and $q=a/b$, positivity gives $a=\sqrt{pq}$ and $b=\sqrt{p/q}$, so the map is globally identifiable on the positive quadrant. On nonzero reals, $(a,b)$ and $(-a,-b)$ have the same product and ratio; a simultaneous-sign symmetry remains.

</details>

### Exercise 11
<a id="identifiability-inverse-problems-ex-11"></a>

An exact observation gives $a+b=10$. Independent priors are $a~N(0,1)$ and $b~N(0,9)$. Find the maximum-prior-density allocation along the line. Repeat after swapping the prior variances. What is data-identified in both cases?

<details>
<summary>Hint 1</summary>

Restrict the negative log prior to the observed affine line.

</details>
<details>
<summary>Hint 2</summary>

Different prior variances change the penalty weights without adding a new data constraint.

</details>
<details>
<summary>Full solution</summary>

Minimize the negative log prior $a²/2+b²/18$ subject to $a+b=10$. With $b=10-a$, differentiation gives $a-(10-a)/9=0$, hence $a=1$, $b=9$. Swapping variances gives $a=9$, $b=1$. The data identify the sum 10; the allocation is prior-driven.

</details>

### Exercise 12
<a id="identifiability-inverse-problems-ex-12"></a>

A penalized observational regression produces a stable nonzero coefficient of treatment on outcome. List the additional ingredients needed before calling that coefficient a causal effect, and explain why numerical identifiability is insufficient.

<details>
<summary>Hint 1</summary>

A stable fitted coefficient is a property of the written estimation problem.

</details>
<details>
<summary>Hint 2</summary>

Name the intervention, assignment assumptions, consistency and overlap needed for a causal interpretation.

</details>
<details>
<summary>Full solution</summary>

One needs a well-defined treatment and outcome, a target intervention and population, consistency, a defensible route to exchangeability or another identification strategy, positivity, and correct handling of measurement and selection. A graph or design should state why confounding paths are blocked; an instrument additionally needs exclusion and independence. Stable computation says the penalized objective selected a coefficient. It does not establish those causal assumptions or show that observational distributions determine the intervention effect.

</details>

## Lab/project

Create a synthetic forward map with one weak singular direction. Compare unregularized, ridge, and smoothness-penalized reconstructions across noise levels. Report truth only because this is a simulation; for real data, report forward fit and resolution rather than unobservable recovery error.

## Summary

An observation map identifies only functionals constant on its equivalence classes. Regularisation can choose among weakly distinguished possibilities without creating new data. Validation next separates those fitted choices from evidence about intended use.
