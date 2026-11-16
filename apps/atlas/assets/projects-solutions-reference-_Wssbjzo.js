var e=`---
parent_id: book-optimization-backprop-from-scratch
matter_id: projects-solutions-reference
title: "Projects, Solutions, Notation, and Reference Back Matter"
level: advanced-undergraduate
estimated_minutes: 300
license: CC BY-SA 4.0
---

# Projects, Solutions, Notation, and Reference Back Matter

## How to use this chapter

This chapter is a working reference for constructing and auditing a small learning system. It consolidates contracts, shapes, derivative identities, optimization certificates, stable formulas, verification routes, and failure boundaries from the book. It also supplies cumulative problems with full solutions and two capstone specifications.

The tables below are designed for use at a desk or in a text-only environment; they do not depend on a visual diagram.

## The six contracts of an auditable learner

A learning program should be reconstructible from six contracts.

### 1. Evidence contract

State:

- observational unit and dependence groups;
- feature and target meanings, units, and availability times;
- permitted fitting, selection, and evaluation rows;
- missingness, censoring, and inclusion rules;
- target population or the explicit absence of a population claim;
- causal and decision nonclaims.

### 2. Array contract

For every array, state axes and semantics. Under this book's convention, one case is a column vector $x\\in \\mathbb{R}^d$, a batch is $X\\in \\mathbb{R}^{n\\times d}$, and a dense map with $m$ outputs uses $W\\in \\mathbb{R}^{m\\times d}$:

$a=Wx+b$,

$A=XW^{\\top}+1b^{\\top}$.

Dimensions are necessary, not sufficient. Two length-100 vectors can represent different rows, times, units, or classes.

### 3. Objective contract

State prediction object, pointwise loss, weights, penalty or constraint, and reduction. A generic finite objective is

$F(\\theta )=[\\sum_{i\\in S} \\omega _{i} \\ell (f_\\theta (x_{i}),y_{i})]/[\\sum_{i\\in S}\\omega _{i}] + \\lambda \\Omega (\\theta )$.

The denominator must be positive and recorded. If sampling is nonuniform, distinguish the sampled objective from any importance-corrected target. A probability score, class decision, and application action require separate contracts.

### 4. Differentiation contract

State the exact executed trace, branch conventions, randomness, mutation, and reduction seeds. A derivative belongs to a map at a point. For $f\\colon \\mathbb{R}^d\\to \\mathbb{R}^m$,

$Df(x)[v]=J_{f}(x)v$

is a JVP, while

$u^{\\top}J_{f}(x)$

is a VJP. For scalar $F$, the Euclidean gradient satisfies

$DF(x)[v]=\\nabla F(x)^{\\top}v$.

### 5. Update-state contract

State optimizer equations, schedule timing, clipping, regularization implementation, batch sampler, random streams, running layer state, stopping, and checkpoint semantics. The returned model is a function of this complete algorithm, not of the objective alone.

### 6. Claim contract

Classify each conclusion as exact algebra, theorem under hypotheses, floating computation, finite-data observation, sampling-based inference, deployment hypothesis, causal claim, or decision. A claim cannot silently climb this ladder.

## Dependency map by question

Use the following route rather than reading chapter numbers as a checklist.

| If the question is… | First objects to inspect | Primary tools | Frequent false conclusion |
| --- | --- | --- | --- |
| What is being predicted? | unit, time, target, loss | baselines and split ledger | low loss validates the task |
| Why is a matrix expression legal? | named axes and map domain | shape table, linear map | broadcasting preserves meaning |
| Why is this gradient correct? | trace and derivative definition | differentials, JVP/VJP duality | finite differences prove all branches |
| Why did optimization stall? | gradient, scale, spectrum, state | descent bounds, conditioning, residuals | small step means optimum |
| Why do coefficients vary? | rank, symmetry, coordinate units | projection and function comparison | one representative is identified |
| What does a loss target? | conditional risk and weights | properness/elicitation derivation | weighting preserves calibration |
| Why do deep signals fail? | layer moments and Jacobian products | initialization and residual ledgers | one variance formula is universal |
| Why did restart diverge? | complete serialized state | transition-level replay | same seed means same state |
| Why did deployment fail? | timing, support, shift, action | lineage and environment slices | regularization certifies robustness |

## Notation desk reference

### Sets, arrays, and maps

| Symbol | Meaning in this volume |
| --- | --- |
| $\\mathbb{R}^d$ | real coordinate space of dimension $d$ |
| $x\\in \\mathbb{R}^d$ | one column-vector case |
| $X\\in \\mathbb{R}^{n\\times d}$ | batch with cases as rows |
| $W\\in \\mathbb{R}^{m\\times d}$ | dense map from $d$ inputs to $m$ outputs |
| $1$ | all-ones vector, dimension inferred and checked |
| $A^{\\top}$ | transpose |
| $A^+$ | Moore–Penrose pseudoinverse when explicitly invoked |
| $\\ker A$, $\\operatorname{range} A$ | null space and range |
| $\\lVert x\\rVert_{2}$, $\\lVert A\\rVert_{2}$ | Euclidean and induced spectral norm |
| $\\lVert A\\rVert_{F}$ | Frobenius norm |
| $\\operatorname{diag}(v)$ | diagonal matrix with entries of $v$ |
| $\\operatorname{tr}(A)$ | trace of a square matrix |

### Risks, data, and probability

| Symbol | Meaning |
| --- | --- |
| $S_{\\mathrm{train}},S_{\\mathrm{val}},S_{\\mathrm{test}}$ | named, disjoint roles under a declared split |
| $\\widehat{R}_{S}(\\theta )$ | finite empirical risk on rows $S$ |
| $R_{P}(\\theta )$ | expected risk under named law $P$ |
| $\\omega _{i}$ | nonnegative observation or correction weight |
| $\\eta (x)$ | conditional event probability under a named law |
| $\\mathbb{E}_{P}$, $\\operatorname{Var}_{P}$ | expectation and variance under $P$ |
| $\\widehat{y}$, $\\widehat{p}$, $a$ | real prediction, probability prediction, and action or logit as declared locally |

### Derivatives and curvature

| Symbol | Meaning |
| --- | --- |
| $Df(x)$ | derivative as a linear map |
| $J_{f}(x)$ | standard-coordinate Jacobian |
| $\\nabla F(x)$ | Euclidean gradient of scalar $F$ |
| $H_{F}(x)$ | Hessian of scalar $F$ when it exists |
| $Jv$ | Jacobian-vector product |
| $u^{\\top}J$ | vector-Jacobian product |
| $dF=\\operatorname{tr}((\\nabla _{X} F)^{\\top}dX)$ | matrix-gradient convention |
| $\\partial F(x)$ | convex subdifferential, not an ordinary derivative |
| $G=J^{\\top}WJ$ | declared Gauss–Newton-type matrix |

### Optimization and state

| Symbol | Meaning |
| --- | --- |
| $\\alpha _{t}$ | step size at update $t$ |
| $\\lambda$ | penalty, damping, or hyperparameter only as locally declared |
| $g_{t}$ | exact or stochastic gradient as stated |
| $v_{t},m_{t}$ | optimizer accumulators, not generic velocity without equations |
| $r$ | residual; data, stationarity, or linear-solve type must be named |
| $\\kappa (A)$ | condition number in the declared norm |
| $S_{t}$ | complete replay-relevant training state |

Overloaded symbols are permitted only with local declarations. In particular, $\\lambda$ must not silently change from ridge strength to eigenvalue or damping inside one derivation.

## Shape and pullback table

Assume scalar loss $L$ and upstream adjoints matching outputs.

| Forward map | Shapes | Pullback or derivative |
| --- | --- | --- |
| $y=Ax$ | $A\\colon m\\times d$, $x\\colon d$, $y\\colon m$ | $\\overline{x}=A^{\\top}\\overline{y}$, $\\overline{A}=\\overline{y} x^{\\top}$ |
| $Y=XA^{\\top}$ | $X\\colon n\\times d$, $A\\colon m\\times d$, $Y\\colon n\\times m$ | $\\overline{X}=\\overline{Y} A$, $\\overline{A}=\\overline{Y}^{\\top} X$ |
| $Y=X+b$ broadcast over rows | $X\\colon n\\times d$, $b\\colon d$ | $\\overline{X}=\\overline{Y}$, $\\overline{b}=\\sum_{i} \\bar{Y}_{i,:}$ |
| $y=x\\odot z$ | equal shapes | $\\overline{x}=\\overline{y}\\odot z$, $\\overline{z}=\\overline{y}\\odot x$ |
| $s=\\sum_{i} x_{i}$ | vector to scalar | $\\overline{x}=\\overline{s} 1$ |
| $s=(1/n)\\sum_{i} x_{i}$ | vector to scalar | $\\overline{x}=(\\overline{s}/n)1$ |
| $y=\\operatorname{logsumexp}(x)$ | vector to scalar | $\\overline{x}=\\overline{y} \\operatorname{softmax}(x)$ |
| $q=normalize(z)$ | declared group | $\\overline{z}=[h-\\operatorname{mean}(h)-q \\operatorname{mean}(h\\odot q)]/s$, where $s$ is the forward stabilized scale and $h$ is the arriving adjoint after multiplication by any broadcast scale parameter |

For a branch used twice, adjoints add. For a broadcast, reverse mode reduces exactly over the expanded axes. For a mean, the denominator appears once. These three rules catch a large fraction of silent gradient errors.

## Stable scalar identities

### Logistic family

For logit $a$, use

$\\operatorname{sigmoid}(a)=1/(1+\\exp\\left(-a\\right))$ for $a\\ge 0$,

$\\operatorname{sigmoid}(a)=\\exp\\left(a\\right)/(1+\\exp\\left(a\\right))$ for $a<0$.

Binary log loss is

$\\operatorname{softplus}(a)-ya=\\max\\left(a,0\\right)-ya+\\log\\left(1+\\exp\\left(-\\lvert a\\rvert\\right)\\right)$.

Its logit derivative is $\\operatorname{sigmoid}(a)-y$, and second derivative is $p(1-p)$.

### Log-sum-exp and softmax

Let $m=\\max_{j} a_{j}$. Then

$\\log \\sum_{j} \\exp\\left(a_{j}\\right)=m+\\log \\sum_{j} \\exp\\left(a_{j}-m\\right)$.

Softmax probabilities use the same shifted exponentials. For one-hot $y$, the logit gradient of summed cross-entropy is $p-y$; mean reduction adds the batch denominator.

### Norm and square-root guards

Expressions such as $\\sqrt{\\left(v+\\varepsilon \\right)}$ require $v+\\varepsilon \\ge 0$ mathematically and a floating path that avoids a small negative $v$ created by cancellation. Compute nonnegative sums of centered squares where possible, declare $\\varepsilon$ with units, and fail or clamp only under a predeclared numerical rule. Silent clamping changes derivatives.

## Optimization certificates and residuals

| Setting | Checkable certificate | Boundary |
| --- | --- | --- |
| unconstrained differentiable | $\\lVert \\nabla F\\rVert$ small | scale and nonconvex saddle ambiguity |
| $L$-smooth descent | observed step consistent with descent bound | requires valid $L$ or backtracking test |
| convex differentiable | first-order gap or dual gap | hypotheses and feasible comparison set |
| equality constrained | primal residual plus KKT stationarity | qualification and conditioning |
| proximal composite | gradient-mapping norm | chosen step and exact proximal map |
| linear solve | $\\lVert b-Ax\\rVert$ | forward error also needs conditioning |
| least squares | residual orthogonal to model range | coefficient uniqueness needs rank |
| stochastic update | conditional noise and schedule ledger | one trajectory is not expectation |

Never report a generic “residual $10^{-6}$.” Name its equation, norm, scaling, units, and denominator.

### Smooth step-size card

If $F$ has $L$-Lipschitz gradient, then

$F(x+p)\\le F(x)+\\nabla F(x)^{\\top}p+(L/2)\\lVert p\\rVert^{2}$.

For $p=-\\alpha \\nabla F(x)$,

$F(x-\\alpha g)\\le F(x)-\\alpha (1-L\\alpha /2)\\lVert g\\rVert^{2}$.

Thus $0<\\alpha <2/L$ guarantees strict decrease when $g\\ne 0$. This is a finite-objective theorem. It neither identifies $L$ automatically nor implies generalization.

### Proximal card

For $F=f+g$ with smooth $f$,

$x^+=\\operatorname{prox}_{\\alpha g}(x-\\alpha \\nabla f(x))$,

For proper closed convex $g$ and $\\alpha>0$,

$\\operatorname{prox}_{\\alpha g}(z)=\\operatorname{argmin}_{u}\\left\\{g(u)+(1/(2\\alpha ))\\lVert u-z\\rVert^{2}\\right\\}$.

For $g(u)=\\lambda \\lVert u\\rVert_{1}$, the proximal map is coordinatewise soft thresholding

$\\operatorname{sign}(z_{j}) \\max\\left(\\lvert z_{j}\\rvert-\\alpha \\lambda ,0\\right)$.

Changing feature units changes an unweighted $L^{1}$ penalty and therefore the selected geometry.

## Derivative verification ladder

No single check is sufficient. Use increasing layers:

1. **Exact primitive cases:** hand-derived scalar and tiny-array outputs.
2. **Shape assertions:** domains, codomains, broadcast reductions, and batch denominators.
3. **JVP/VJP duality:** compare $u^{\\top}(Jv)$ with $(u^{\\top}J)v$ on fixed directions.
4. **Directional differences:** evaluate a logarithmic step grid and look for a truncation/roundoff region.
5. **Branch tests:** smooth interiors, exact kinks with one-sided expectations, and active-set changes.
6. **State tests:** freeze and restore random and mutable state around every comparison.
7. **Metamorphic tests:** shift invariance, permutation equivalence, reduction replication, or coordinate transformations that should preserve a result.
8. **End-to-end descent test:** for a smooth deterministic fixture and sufficiently small step, verify actual objective decrease.

An analytic and finite-difference implementation can share the same wrong objective. Retain an independent exact fixture and inspect the data/objective contract separately.

### Tolerance card

For scalars use

$\\lvert observed-expected\\rvert\\le atol+rtol \\max\\left(\\lvert observed\\rvert,\\lvert expected\\rvert\\right)$.

For arrays report maximum component error and index, a normwise error, and scale of the reference. Sweep step sizes for finite differences; do not choose one step and widen tolerance until it passes.

## Reproducibility and provenance checklist

Before calling a computation replayable, answer yes or no:

- Are raw data, schema, split, and fitted-transform identities fixed?
- Is resolved configuration stored after defaults and overrides?
- Are parameter, optimizer, scheduler, normalization, sampler, and metric states stored?
- Are all random streams or semantic counter keys stored?
- Is the next transition unambiguous?
- Are arithmetic type, reduction behavior, and execution semantics recorded?
- Is checkpoint integrity verified atomically?
- Does a restart comparison inspect every subsequent transition, not only the endpoint?
- Are selection events and test access logged?
- Are artifacts addressable by digest and accompanied by the command or entry function that produced them?

A “no” may be an acceptable limitation. It must not be silently converted to “yes” by retaining only a seed and package list.

## End-to-end miniature derivation

Consider fixed training rows $x=(-1,0,1)$, targets $y=(-1,0,1)$, and scalar ridge model $f_{w}(x)=wx$ with

$F(w)=(1/(2\\cdot 3))\\sum_{i}(wx_{i}-y_{i})^{2}+(\\lambda /2)w^{2}$.

Here $\\sum_i x_{i}^{2}=2$ and $\\sum_i x_{i}y_{i}=2$, so

$F'(w)=(\\frac{2}{3})(w-1)+\\lambda w$,

$F''(w)=\\frac{2}{3}+\\lambda$.

For $\\lambda =\\frac{1}{3}$, stationarity gives $w^{\\star}=\\frac{2}{3}$. The Hessian is $1$, so one Newton step from any $w$ reaches $\\frac{2}{3}$. At $w=0$, the gradient is $-\\frac{2}{3}$; a gradient step with $\\alpha =1$ also reaches the solution. Predictions are $(-\\frac{2}{3},0,\\frac{2}{3})$ and training residuals are $(\\frac{1}{3},0,-\\frac{1}{3})$ under the convention \`prediction-target\`.

The objective at the solution is

$(\\frac{1}{6})(\\frac{1}{9}+0+\\frac{1}{9})+(\\frac{1}{6})(\\frac{4}{9})=\\frac{1}{27}+\\frac{2}{27}=\\frac{1}{9}$.

This small example connects the contract, reduction, gradient, curvature, optimizer, and certificate. It does not estimate future risk because no sampling law or held-out rows were supplied.

## Failure-routing reference

When a result looks wrong, follow this order:

1. **Contract:** Are rows, times, targets, units, weights, and split roles valid?
2. **Forward:** Do exact tiny examples and stable formulas match?
3. **Derivative:** Do shape, duality, directional, branch, and state checks pass?
4. **Update:** Are signs, reductions, schedule timing, state, and constraints correct?
5. **Numerics:** Are values finite, residuals scaled, and conditioning acceptable?
6. **Selection:** Did validation or test information enter fitting or choice?
7. **Support:** Does evaluation cover the intended groups, times, and environments?
8. **Claim:** Is the conclusion stronger than the evidence category permits?

Do not jump to hyperparameter search before the first four checks. Search can sometimes make a broken pipeline look better while preserving the defect.

## Glossary of distinctions

- **Accuracy versus reproducibility:** closeness to a target versus repeatability under a declared execution relation.
- **Algorithm versus objective:** a state transition used to search versus the function or constrained problem it is meant to address.
- **Calibration versus classification:** agreement of probabilities with frequencies versus a thresholded label decision.
- **Conditioning versus convergence:** sensitivity of a problem versus behavior of an algorithm on it.
- **Data identification versus regularized uniqueness:** information supplied by observations versus a representative chosen by added geometry.
- **Derivative versus subgradient:** a unique linear local approximation versus a convex supporting-slope set.
- **Empirical risk versus population risk:** a fixed finite average versus expectation under a named law.
- **Function equivalence versus parameter equality:** identical represented outputs versus identical coordinates.
- **Generalization versus robustness to arbitrary shift:** performance under a sampling relationship versus protection against a declared change set.
- **JVP versus VJP:** push a parameter direction forward versus pull an output covector backward.
- **Numerical stability versus statistical validity:** faithful finite arithmetic versus justified evidence about data.
- **Prediction versus intervention:** association-based forecast versus effect of an action under causal assumptions.
- **Proper scoring versus decision cost:** eliciting a probability versus choosing an action from it.
- **Replay versus replication:** repeat one execution versus repeat a scientific result under new randomness or data.
- **Training mode versus deployment mode:** stateful/stochastic program used during fitting versus frozen prediction program.

## Index-ready concept routes

The following entries are intended as stable lookup terms for a later index pass:

\`active set\`; \`adjoint accumulation\`; \`affine map\`; \`architecture state\`; \`backtracking\`; \`baseline\`; \`batch axis\`; \`broadcast reduction\`; \`calibration\`; \`checkpoint\`; \`class weighting\`; \`condition number\`; \`constraint qualification\`; \`data leakage\`; \`descent lemma\`; \`differential\`; \`dual gap\`; \`empirical risk\`; \`equivariance\`; \`feature timing\`; \`Fisher information\`; \`fixed-point derivative\`; \`Gauss–Newton\`; \`gradient mapping\`; \`Hessian-vector product\`; \`identifiability\`; \`implicit differentiation\`; \`importance weighting\`; \`initialization\`; \`Jacobian\`; \`JVP\`; \`KKT residual\`; \`log-sum-exp\`; \`momentum\`; \`normalization axes\`; \`operator norm\`; \`preconditioner\`; \`proper score\`; \`proximal map\`; \`random stream\`; \`residual path\`; \`reverse mode\`; \`running statistics\`; \`sampling boundary\`; \`soft thresholding\`; \`softmax shift\`; \`stationarity\`; \`trace convention\`; \`validation selection\`; \`VJP\`.

These are navigation terms, not a substitute for a professionally generated index. A later production pass must add page locators, subentries, and cross-references after pagination is stable.

## Exercises

1. Write all six contracts for the miniature ridge example, marking fields that remain unspecified.
2. Check the dense batch-map shapes for $X\\colon 5\\times 3$, $W\\colon 4\\times 3$, and $b\\colon 4$.
3. Derive the VJP of $Y=XW^{\\top}+1b^{\\top}$ from a trace differential.
4. Explain why replicating every batch row twice leaves a mean-loss parameter gradient unchanged but doubles a sum-loss gradient.
5. Derive stable binary log loss and its first two logit derivatives.
6. Prove log-sum-exp shift stability algebraically.
7. For a rank-deficient least-squares problem, distinguish the residual certificate from coefficient uniqueness.
8. Apply the smooth step-size card to $F(x)=5x^{2}/2$ and find the descent interval for constant $\\alpha$.
9. Compute the proximal step for $z=(-3,0.5,2)$ with $\\alpha \\lambda =1$.
10. Give one exact, one duality, one directional, and one metamorphic derivative test for a dense layer.
11. Explain why a finite-difference pass does not validate the objective contract.
12. In the miniature ridge example, verify $w^{\\star}=\\frac{2}{3}$, $F(w^{\\star})=\\frac{1}{9}$, and zero stationarity residual.
13. Change the ridge penalty to $\\lambda =\\frac{4}{3}$; compute the new minimizer and Hessian.
14. A linear solve has residual norm $10^{-6}$ and smallest singular value at least $10^{-3}$. Bound forward error.
15. Classify each claim: an exact softmax identity, a measured held-out loss, and expected risk under iid sampling.
16. Give the complete state fields needed to restart a momentum run with batch-coupled normalization.
17. Explain why test-set threshold tuning changes the role of the test set.
18. Construct a parameter symmetry and name an invariant comparison.
19. Diagnose a model whose gradients pass, training loss falls, but future performance collapses after a process change.
20. Turn “the model works” into four narrower claims at distinct evidence levels.

## Full solutions

1. Evidence: three fixed rows and their values are given, but no population, timing, split, dependence, or causal claim is specified. Array: scalar $x,y,w$. Objective: mean half-squared loss plus $\\lambda w^{2}/2$, with $\\lambda =\\frac{1}{3}$. Differentiation: ordinary scalar derivative. Update state: Newton or gradient step is discussed, but initialization, stopping, replay state, and serialization are otherwise unspecified. Claim: exact finite algebra only.
2. $XW^{\\top}$ multiplies $5\\times 3$ by $3\\times 4$, producing $5\\times 4$. Broadcasting $b\\colon 4$ over five rows also produces $5\\times 4$. The output has batch axis 5 and output-feature axis 4.
3. Let upstream $G$ match $Y$. Then $dL=\\operatorname{tr}(G^{\\top}dY)=\\operatorname{tr}(G^{\\top} dX W^{\\top})+\\operatorname{tr}(G^{\\top} X dW^{\\top})+\\operatorname{tr}(G^{\\top}1 db^{\\top})$. Cycling traces gives gradients $\\nabla _{X} L=GW$, $\\nabla _{W} L=G^{\\top}X$, and $\\nabla _{b} L=G^{\\top}1$, the row sum.
4. A sum gradient adds one identical contribution per row, so replication doubles it. A mean divides by the doubled denominator, canceling the doubled numerator. This assumes all weights and denominator conventions are replicated consistently.
5. Starting from $-y \\log \\sigma (a)-(1-y)\\log\\left(1-\\sigma (a)\\right)$, algebra gives $\\operatorname{softplus}(a)-ya$; compute softplus stably as $\\max\\left(a,0\\right)+\\log\\left(1+\\exp\\left(-\\lvert a\\rvert\\right)\\right)$. Its derivative is $\\sigma (a)-y$, and its second derivative is $\\sigma (a)(1-\\sigma (a))$.
6. With $m=\\max_{j} a_{j}$, factor $\\exp\\left(m\\right)$ from the sum: $\\log \\sum_j \\exp\\left(a_{j}\\right)=\\log[\\exp\\left(m\\right)\\sum_j \\exp\\left(a_{j}-m\\right)]=m+\\log\\sum_j \\exp\\left(a_{j}-m\\right)$. The largest shifted exponent is one and none exceeds one.
7. The residual certificate $X^{\\top}(Xw-y)=0$ states the fitted residual is orthogonal to the column space and certifies a least-squares fit. If $X$ has a nonzero null vector $v$, then $w+v$ gives the same fit, so the certificate does not make coefficients unique.
8. Gradient is $5x$ and Lipschitz constant is $L=5$. The card gives strict descent for nonzero gradient when $0<\\alpha <\\frac{2}{5}$. Exact update is $x^+=(1-5\\alpha )x$, consistent with $\\lvert 1-5\\alpha \\rvert<1$ on that interval.
9. Soft threshold each coordinate at one: $(-3,0.5,2)$ becomes $(-2,0,1)$.
10. Exact: compare a hand-computed $2\\times 2$ forward and pullback. Duality: verify $u^{\\top}(Wv)=(W^{\\top}u)^{\\top}v$. Directional: compare $Wv$ to $[W(x+hv)-W(x-hv)]/(2h)$. Metamorphic: duplicate batch rows and verify a mean-reduced weight gradient is unchanged.
11. Both analytic and numerical derivatives differentiate the program they are given. If the program uses leaked rows, the wrong denominator, or an inappropriate loss, their agreement only confirms local calculus of the wrong objective.
12. $F'(w)=(\\frac{2}{3})(w-1)+(\\frac{1}{3})w=w-\\frac{2}{3}$, so $w^{\\star}=\\frac{2}{3}$ and the stationarity residual is zero. The data residuals remain $(\\frac{1}{3},0,-\\frac{1}{3})$. The data term is $(\\frac{1}{6})(\\frac{2}{9})=\\frac{1}{27}$; the penalty is $(\\frac{1}{6})(\\frac{4}{9})=\\frac{2}{27}$; total $\\frac{1}{9}$.
13. Stationarity is $(\\frac{2}{3})(w-1)+(\\frac{4}{3})w=2w-\\frac{2}{3}=0$, so $w^{\\star}=\\frac{1}{3}$. Hessian is $\\frac{2}{3}+\\frac{4}{3}=2$.
14. For invertible $A$, error is at most $\\lVert r\\rVert/\\sigma_{\\min}(A)\\le 10^{-6}/10^{-3}=10^{-3}$ in compatible Euclidean norms.
15. Softmax shift invariance is exact algebra. A held-out loss is a finite-data observation on named rows. Expected-risk reasoning under iid sampling is a theorem or inference claim conditional on the sampling law and any additional boundedness or capacity hypotheses.
16. Store parameters; momentum buffers and counters; schedule state; current normalization running means/variances and update counters; batch sampler order/cursor; all random streams; fitted transforms; data/split and configuration identities; metric accumulators; next-step semantics; and execution arithmetic needed for the declared replay level.
17. The chosen threshold becomes an adaptive function of test outcomes. Those rows now serve selection, so their reported performance is no longer an untouched final evaluation of the frozen procedure. Reserve new evaluation evidence or label the result as tuned-on-test.
18. Permute hidden units while inversely permuting outgoing weights; parameters change but the function does not. Compare predictions on a declared input set or a function-space distance rather than raw coordinate distance.
19. First inspect timing/leakage and environment support. Falling training loss and correct derivatives establish successful optimization of the finite training objective, not stability after shift. Slice results by time/environment, compare feature relationships, and state the unsupported deployment assumption rather than retuning blindly.
20. Exact: the implementation computes the declared formula on a tiny fixture. Numerical: the run reaches a stated residual and replay tolerance. Empirical: the frozen model obtains a stated metric on named held-out rows. Conditional inference: under a named sampling framework, the procedure has an interval or bound for a target risk. None alone means universal usefulness or causal benefit.

## Capstone project 1: dependency-free differentiation and optimization kernel

Implement a small, pure reference kernel with no external dependency. It must support scalar primitives, shaped dense maps through explicit loops, JVPs, reverse-mode VJPs, ridge and stable logistic losses, gradient descent, momentum, soft thresholding, and matrix-free conjugate gradients for positive-definite fixtures.

Executable acceptance requirements:

1. Graph nodes have stable identities; reused nodes accumulate adjoints rather than overwrite them.
2. Reverse passes reset adjoints and reject mutation of saved primal values.
3. Dense operations assert every dimension and broadcast axis.
4. Loss functions return numerator, denominator, and mean separately.
5. Stable logistic fixtures include logits $\\pm 1000$ with finite expected outputs.
6. Derivative tests include exact hand cases, JVP/VJP duality, a logarithmic finite-difference grid, branch-aware ReLU directions, and Hessian bilinear symmetry.
7. Optimizer tests include a known quadratic convergence trace, momentum state restoration, a deliberately unstable step, and scale-aware stopping.
8. Proximal tests verify soft thresholding at values below, equal to, and above the threshold.
9. CG tests compare matrix-free and explicit products, residual histories, and the residual-to-error bound on a known SPD matrix.
10. Every test has fixed inputs and a text failure message naming expected, observed, tolerance, state, and equation.

Deliver source, a single entry command, complete test output, and a short mathematical note connecting each fixture to an identity in this reference. An optimized library may be used only as an optional cross-check after the pure kernel passes; it is not the definition of correctness.

## Capstone project 2: an auditable finite learning study

Choose a non-sensitive public or synthetic prediction table whose license and provenance can be recorded. Define one real or binary target available after a declared prediction time. Compare a constant baseline, a linear model, and a tiny network only if the sample and question justify it.

Pre-registered acceptance specification:

1. Evidence card: observational unit, groups, timing, features, target, exclusions, missingness, split, and prohibited causal/decision claims.
2. Immutable fixture: row IDs, schema, safe digest, and deterministic group/time-aware split.
3. Train-only pipeline: fitted transformations with source-row ledgers and serialized state.
4. Objective card: exact loss, weights, denominator, penalty, and prediction object.
5. Mathematical anchors: hand-derived baseline, one exact gradient case, and one conditioning or rank calculation.
6. Reproducible computation: complete checkpoint, interrupted/restarted trace comparison, fixed configuration, and named random streams.
7. Predetermined variation: at least five seeds and a fixed scale/regularization grid; report all cells rather than the best run alone.
8. Failure injections: one leakage path, one unstable numerical formula, one omitted state field, and one unsupported shift. The audit must identify each by a different check.
9. Evaluation ledger: loss numerators and denominators, relevant slices, thresholds chosen without final-test access, and table alternatives for plots.
10. Claim ladder: separate exact derivation, finite computation, held-out observation, conditional sampling statement, deployment assumption, causal nonclaim, and decision boundary.

The study is successful when another reader can reconstruct the pipeline, replay the declared fixtures, locate failures, and understand what remains unknown. A favorable score is neither necessary nor sufficient.

## Back-matter production checklist

Before a future edition can treat this material as production back matter, it still needs:

- independent reconciliation of every symbol against all twenty-two chapters;
- theorem and hypothesis index with stable locators;
- checked cross-references after final chapter ordering;
- exercise difficulty and dependency calibration;
- independent solution verification, including code outputs;
- bibliography and citation-status audit;
- glossary and index editing by readers who did not write the prose;
- accessibility review of tables, equations, any eventual figures, and PDF structure;
- copy edit and reproducible release-candidate pagination.

Until those steps occur, this chapter is a technical-review reference, not publication approval or release evidence.
`;export{e as default};