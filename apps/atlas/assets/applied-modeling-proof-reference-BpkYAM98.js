var e=`---
id: book-applied-modeling-proof-reference
title: "Mathematical Modelling: Models, Evidence and Failure Boundaries"
level: undergraduate
estimated_minutes: 1900
license: CC BY-SA 4.0
---

# Mathematical Modelling: Models, Evidence and Failure Boundaries

This reference develops mathematical results that justify common modeling moves. Each theorem is paired with its hypotheses, proof architecture, and a failure boundary. The purpose is not to make applied work look pure after the fact. It is to show exactly which conclusions are mathematical, which are computational, and which require evidence about a real system.

This book spans L2–L3. It assumes Year 1 calculus and linear algebra, supplied by [Calculus](/calculus/) and [Linear Algebra: Structure and Proof](/atlas/#/item/book-linear-algebra-structure-proofs). The opening model contracts, dimensions and cooling audit work at L2. Later application chapters develop L3 proofs and introduce their probability, ODE and optimisation assumptions locally. [Precalculus](/atlas/#/item/book-precalculus) supplies earlier algebra and function repair.

Read the [cooling-model audit](applied-modeling-proof-reference/cooling-model-validation.md) immediately after the model-contract chapter. It gives one concrete model to revisit as dimensions, observation error, parameter identification and predictive validation become distinct tools. The book's fifteen chapters retain their semantic identities; reproducible computation and synthesis projects are [back matter](applied-modeling-proof-reference/synthesis-projects-solutions.md).

## How the volume is organized

Part I builds model contracts, dimensional invariance, and uncertainty ledgers. Part II develops conditioning, sensitivity, identifiability, inverse problems, and validation. Part III proves optimization, duality, flow, queue, inventory, game, and dynamic-decision results. Part IV treats biological, epidemic, signal, and financial models without crossing causal or advisory boundaries. Part V turns theory into reproducible computation, exact laboratories, capstone projects, and complete solution architecture.

Each addressable chapter declares its dependencies and ends with proof, computation, transfer, and failure-analysis work. Chapters 1–6 form the proof spine; Chapters 7–13 may then be selected by application. The project and reproducible-computation appendices reconnect the applications through explicit evidence records.

Notation follows a ledger rather than one-letter universality: $x$ is state or decision only when locally declared; $θ$ denotes model parameters; $y$ observations; $a$ actions; $L$ loss or graph Laplacian only with an explicit qualifier; $λ$ and $μ$ are arrival and service rates only in queue sections; $P$ is a physical probability law and $Q$ a pricing measure in finance.

## 1. Model maps and claim types

Represent a model as a chain

$\\text{world state }z \\to \\text{measured data }y \\to \\text{fitted parameter }\\hat{θ} \\to \\text{predicted quantity }p \\to \\text{action }a$.

Each arrow has a different audit:

- the measurement map needs calibration, sampling, and missingness assumptions;
- estimation needs identifiability and an error model;
- prediction needs a target population and stability or sampling assumptions;
- an action needs objectives, constraints, alternatives, and consequences;
- a causal interpretation needs a counterfactual design or identifying assumptions.

An exact theorem about the middle arrows cannot validate the outer arrows. For example, a unique optimizer proves what minimizes the written objective, not that the objective represents public value. A no-arbitrage price is a conditional consistency result, not an expected return forecast.

## 2. Dimensional invariance and Pi groups

Let $q=(q_1,…,q_n)$ be positive dimensional quantities. Choose $r$ base dimensions and place dimension exponents in a matrix $D∈R^{r×n}$: column $j$ records the dimensions of $q_j$. A monomial $q^α=∏q_j^{α_j}$ is dimensionless exactly when $Dα=0$.

### Theorem: finite-dimensional Pi representation

Suppose a dimensionally invariant relation among the positive quantities can be written as $F(q)=0$, and the dimension matrix has rank $r$. Then the independent dimensionless monomials form an $(n-r)$-dimensional null space. Choosing a basis $α^1,…,α^{n-r}$ gives groups $π_k=q^{α^k}$, and the relation can locally be expressed as a relation among these groups, subject to the regularity needed to solve along unit-rescaling orbits.

### Proof architecture

Changing units rescales $\\log q$ by vectors in the row space of $D$. Invariant functions are constant along these $r$-dimensional orbits. Linear functionals annihilating the orbit directions lie in $\\operatorname{ker} D$, whose dimension is $n-r$ by rank-nullity. Exponentiating those linear functionals yields the monomial invariants. A local quotient-coordinate argument gives the reduced relation.

### Failure boundary

The theorem does not choose the physically relevant variables, fix additive offsets such as Celsius temperatures, infer a response function, or justify geometric similarity. Hidden dimensionless variables—roughness ratio, boundary shape, control delay—can destroy an apparent collapse.

## 3. Nondimensionalization and singular perturbation

Consider $dx/dt=f(x;θ)$. Choose state scale $X$ and time scale $T$, write $x=Xu$, $t=Tτ$, and obtain

$du/dτ = (T/X)f(Xu;θ)$.

The coefficients that remain are dimensionless control groups. Scaling is a coordinate change, so it does not by itself approximate. Approximation enters when a dimensionless parameter is sent to a limit.

### Example: regular perturbation

For $u'=-u+εu²$, $u(0)=u_0$, seek $u=\\bar{u}_0+εu_1+O(ε²)$ on a fixed time interval. Matching orders gives

$\\bar{u}_0'=-\\bar{u}_0$,

$u_1'=-u_1+\\bar{u}_0²$,

with $\\bar{u}_0(0)=u_0$ and $u_1(0)=0$. Thus $\\bar{u}_0=u_0e^{-t}$ and variation of constants gives $u_1=u_0²(e^{-t}-e^{-2t})$. The neglected term is controlled only while solutions and remainder estimates remain bounded on the stated interval.

### Singular boundary

For $εu''+u'=0$ with $u(0)=0,u(1)=1$, the reduced equation at $ε=0$ is first order and cannot satisfy both boundary conditions. The exact solution contains $e^{-x/ε}$; derivatives are large near one endpoint. Uniform approximation requires a boundary-layer coordinate. Never infer uniform small error merely from pointwise small $ε$.

## 4. Identifiability through observation maps

Let a deterministic observation map be $h:Θ\\to Y$.

- Global structural identifiability at $θ$ means $h(θ')=h(θ)$ implies $θ'=θ$ over the admissible set.
- Local identifiability means this implication holds in a neighborhood.
- Practical identifiability concerns separation relative to noise and sampling.

### Proposition: full-rank local condition

If $h:R^p\\to R^m$ is continuously differentiable, $m≥p$, and its Jacobian $Dh(θ_0)$ has full column rank, then there exists a selection of $p$ output coordinates whose Jacobian is nonsingular. By the inverse function theorem, those outputs determine $θ$ locally. Hence the complete observation is locally identifying.

Full rank is sufficient, not universally necessary at singular points: $h(θ)=θ³$ is injective although $h'(0)=0$. Rank deficiency is nevertheless a powerful warning and gives a first-order unobservable direction.

### Fisher information boundary

For a regular parametric likelihood with score $s_θ(Y)=∂\\log p_θ(Y)/∂θ$, Fisher information is $I(θ)=E[s_θs_θ^{\\mathsf T}]$. A singular matrix indicates a likelihood-flat direction under regularity. A large inverse-information standard error is asymptotic and model-based; it can fail at boundaries, under weak identification, misspecification, dependence, or selection.

### Linear inverse theorem

For $y=Ax$, noiseless global identifiability is equivalent to $\\operatorname{ker} A={0}$. Indeed, if $Av=0$ for nonzero $v$, then $x$ and $x+v$ are observationally identical. Conversely, $Ax=Ax'$ implies $A(x-x')=0$, hence $x=x'$ when the kernel is trivial.

If singular values are nonzero but tiny, identification is exact yet unstable. With $A=UΣV^{\\mathsf T}$, perturbations in left-singular direction $u_i$ are amplified by $1/σ_i$. Regularization suppresses these directions by accepting bias.

## 5. Sensitivity and decision stability

Suppose $F(x,θ)=0$ and $D_xF$ is invertible at a solution. The implicit function theorem gives a local solution $x(θ)$ with

$Dx/Dθ = -(D_xF)^{-1} D_θF$.

This identity separates parameter forcing from system amplification. Near a bifurcation, $D_xF$ becomes singular and local sensitivity can diverge.

For a decision choosing $a∈A$ to minimize loss $L(a,θ)$, parameter sensitivity is not the final question. Define the **decision margin** at a nominal $θ$ as the loss gap between the best and second-best admissible actions. A parameter may change predicted values noticeably while leaving the chosen action stable because the margin is large. Conversely, a tiny numerical perturbation can flip nearly tied actions.

### Envelope theorem, local form

If $x*(θ)$ is an interior differentiable minimizer of smooth $f(x,θ)$ with $∂f/∂x=0$, then value $v(θ)=f(x*(θ),θ)$ satisfies

$v'(θ)=∂f/∂θ(x*(θ),θ)$.

The derivative through $x*$ vanishes by stationarity. Active constraints, nonunique optima, discrete decisions, and basis changes require generalized sensitivity analysis; blindly differentiating a solver output can be misleading.

## 6. Optimization guarantees

### Convex optimality theorem

Let $f$ be differentiable and convex on a convex set. If $x*$ is feasible and

$∇f(x*)^{\\mathsf T}(x-x*)≥0$ for every feasible $x$,

then $x*$ is globally minimizing.

**Proof.** Convexity gives $f(x)≥f(x*)+∇f(x*)^{\\mathsf T}(x-x*)≥f(x*)$.

Strict convexity gives uniqueness when a minimizer exists. It does not guarantee existence on a noncompact feasible set; coercivity or compactness can supply that.

### Linear-program duality certificate

For primal $\\max c^Tx$ with $Ax≤b,x≥0$ and dual $\\min b^Ty$ with $A^Ty≥c,y≥0$, feasible pairs satisfy

$c^Tx≤x^TA^Ty≤b^Ty$.

Thus equality certifies both optima. Strong duality can be proved through separating hyperplanes, the simplex method, or Farkas' lemma. Complementary slackness follows because equality forces the nonnegative gap terms $y_i(b_i-(Ax)_i)$ and $x_j((A^Ty)_j-c_j)$ to vanish.

### Farkas alternative

Exactly one of the following holds: there exists $x≥0$ with $Ax=b$, or there exists $y$ with $A^Ty≥0$ and $b^Ty<0$. The second vector is an infeasibility certificate: if a feasible $x$ existed, then $0≤x^TA^Ty=b^Ty<0$, a contradiction.

### Modeling boundary

Dual variables inherit the units “objective units per constraint unit.” They are local values under the current formulation. They do not price unmodeled harms. Integer, chance, robust, equilibrium, and dynamic constraints need their own theory.

## 7. Flow conservation and max-flow/min-cut

Let $G=(V,E)$ be a finite directed graph with source $s$, sink $t$, and nonnegative capacities. A flow satisfies capacity constraints and conservation at $V\\setminus\\{s,t\\}$. Its value is net flow out of $s$.

### Cut bound

For any set $S$ containing $s$ but not $t$, summing conservation over nodes in $S\\setminus\\{s\\}$ cancels internal edges. Flow value equals flow leaving $S$ minus flow entering it, hence is at most the sum of capacities leaving $S$.

### Augmenting-path proof architecture

Given a flow, the residual graph contains forward residual capacity $c_ij-f_ij$ and reverse capacity $f_ij$. If an $s-t$ residual path exists, augment by its bottleneck. If none exists, let $S$ be vertices reachable from $s$. Every edge leaving $S$ is saturated and every edge entering $S$ carries zero flow; the flow value equals cut capacity. Therefore it is maximum and the cut minimum.

With integer capacities, augmentation amounts remain integers. Ford–Fulkerson termination without a specified path rule is guaranteed for integer capacities but can fail for irrational capacities; Edmonds–Karp uses shortest augmenting paths and runs in $O(|V||E|²)$.

## 8. Queue and inventory results

### Little's law, sample-path form

Over horizon $[0,T]$, integrate number in system $N(t)$. The area $∫N(t)dt$ equals total time spent during the horizon by all customers, plus boundary corrections for customers present at start or end. Dividing by $T$, if arrival/throughput averages and mean sojourn times converge and boundary terms vanish, yields $L=λW$. No Poisson assumption is needed. Stability and consistent customer accounting are needed.

### M/M/1 stationary distribution

For birth rate $λ$ and death rate $μ$ when nonempty, detailed balance requires $π_{n+1}μ=π_nλ$, so $π_n=π_0ρ^n$, $ρ=λ/μ$. Normalization gives $π_0=1-ρ$ exactly when $ρ<1$. Then

\\[L=Σn(1-ρ)ρ^n=ρ/(1-ρ)\\]

and Little's law gives $W=1/(μ-λ)$. When $ρ≥1$, the geometric series cannot normalize; there is no stationary probability distribution of this form.

### EOQ theorem

For $C(Q)=KD/Q+hQ/2$, assume $K,D,h>0$ and $Q>0$. The setup term diverges as $Q\\downarrow 0$, the holding term diverges as $Q\\to\\infty$, and $C''(Q)=2KD/Q³>0$. Therefore the unique global minimizer is $\\sqrt{2KD/h}$. Units check: $K$ is cost/order, $D$ units/time, and $h$ cost/(unit·time), so $KD/h$ has units squared.

The formula's crispness is conditional on instantaneous replenishment, deterministic constant demand, no shortages, and linear holding cost.

## 9. Graph diffusion, games, and interacting decisions

For a symmetric nonnegative adjacency matrix $A$, graph Laplacian $L=D-A$ satisfies

$x^TLx=(1/2)Σ_ij A_ij(x_i-x_j)²$.

Thus it is positive semidefinite, and the null space contains vectors constant on each connected component. Conversely, zero quadratic form forces equality across every positive-weight edge, so the nullity equals the component count.

The diffusion equation $x'=-Lx$ has solution $x(t)=e^{-tL}x(0)$. On a connected graph it converges to the component average because all nonconstant eigenmodes have positive eigenvalues. The spectral gap controls the slowest exponential mode. This describes a linear static network; temporal edges, directed transport, nonlinear saturation, and measurement bias require different models.

### Nash existence in finite games

Every finite strategic-form game has at least one mixed Nash equilibrium. One proof maps mixed-strategy profiles continuously into themselves using normalized positive payoff improvements and applies Brouwer's fixed-point theorem; any fixed point has no profitable unilateral deviation.

Existence does not imply uniqueness, efficiency, stability under learning, or empirical prediction. Payoff misspecification and unobserved actions remain modeling failures. In network games, one person's action can change another's outcome, also violating no-interference assumptions used by simple causal analyses.

## 10. Biological dynamics and epidemic thresholds

For SIR equations with nonnegative initial states, the vector field points inward on coordinate boundaries, so nonnegativity is invariant. Summing equations conserves $N$. Early linearization at a disease-free state $(S_0,0,R_{\\mathrm{init}})$ gives

$I'≈(βS_0/N-γ)I$.

Thus early exponential growth occurs when $(β/γ)(S_0/N)>1$. This is a local invasion criterion, not a complete forecast of peak size or intervention effect.

For a networked linearization $i'=(βA-γI)i$, growth is controlled by largest eigenvalue $λ_{\\max}(A)$: the disease-free state is linearly unstable if $βλ_{\\max}(A)>γ$. The result belongs to the specified quenched mean-field linearization. Network adaptation, finite stochastic extinction, clustering, heterogeneous recovery, and observation error can change empirical thresholds.

## 11. No-arbitrage and risk mathematics

### One-period fundamental alternative

Let traded payoffs form columns of matrix $X∈R^{m×n}$ across $m$ states and current prices be $p∈R^n$. Under unrestricted frictionless linear trading, an arbitrage is a portfolio $h$ with $p^Th≤0$ and $Xh≥0$, with at least one strict inequality: either it raises cash initially or it has a positive payoff in at least one state. This convention rules out a negative-cost portfolio with zero terminal payoff as well as a zero-cost portfolio with a statewise gain.

In a finite market, absence of arbitrage is equivalent to existence of a strictly positive state-price vector $q$ such that $X^Tq=p$. This follows from a separating-hyperplane alternative. A claim payoff $c$ has a unique no-arbitrage price exactly when it lies in the span of traded payoff columns—market completeness for that claim. If not replicable, no-arbitrage generally gives an interval, not a unique expectation.

State prices or normalized risk-neutral probabilities are valuation devices. They need not equal physical probabilities. Transaction costs, portfolio constraints, funding spreads, default, and illiquidity alter the attainable-payoff cone and pricing conclusion.

### Variance and diversification

For weights $w$, $Var(w^TR)=w^{\\mathsf T}Σw$; covariance matrices are positive semidefinite because this variance is nonnegative. If two assets are not perfectly positively correlated, combinations can have variance below a weighted average of individual variances. This is a statement about a chosen return vector and covariance law, not protection from all losses.

Risk measures must name loss sign, horizon, conditioning information, estimation window, and tail convention. Backtesting a quantile counts exceedances but does not by itself validate their independence, severity, or future stationarity.

## 12. Sampling, aliasing, and regularized reconstruction

Using frequency in cycles per unit time, the ideal sampling theorem states that a square-integrable signal band-limited to $[-B,B]$ can be reconstructed from uniform samples spaced $T<1/(2B)$ by sinc interpolation. Equality requires endpoint and spectral-support conventions that exclude ambiguous overlap. Its proof uses Fourier-domain replication: sampling multiplies by an impulse train in time and replicates the spectrum at multiples of the sampling frequency. Nonoverlap permits an ideal low-pass filter to isolate one copy.

Finite observation windows convolve the spectrum with a window transform, causing leakage. An anti-alias filter, clock accuracy, and analog bandwidth are part of a real measurement model.

For Tikhonov objective

$J(x)=\\lVert Ax-y\\rVert²+α\\lVert Lx\\rVert²$, $α>0$,

the normal equation is $(A^TA+αL^TL)x=A^Ty$. The minimizer is unique exactly when $\\operatorname{ker} A ∩ \\operatorname{ker} L={0}$, because the Hessian quadratic form is

$\\lVert Av\\rVert²+α\\lVert Lv\\rVert²$,

positive for every nonzero $v$ precisely under that condition. A unique regularized solution can exist even when data do not identify the unregularized truth; uniqueness then comes partly from the penalty.

## 13. Validation and causal boundaries

No finite checklist proves a model true, but several falsification opportunities are mathematical:

- conservation residuals should match declared sources and sinks;
- nondimensional results should be invariant to unit conversion;
- exact symmetries and limiting cases should survive computation;
- refinement should approach a stable answer at the predicted order when asymptotic conditions hold;
- out-of-sample residuals should be checked for structure, not only averaged;
- parameter profiles and alternate observation maps should expose weak identification;
- decisions should be stress-tested against plausible scenarios and value judgments.

A causal effect compares potential outcomes under actions. Observational identification requires assumptions such as exchangeability conditional on measured covariates, positivity, consistency, and appropriate handling of interference. A mechanistic differential equation does not automatically make its intervention parameters causal; parameter meaning depends on the observation and assignment processes. A successful forecast under the observed regime can coexist with a wrong intervention response.

## 14. A reusable proof-and-evidence ledger

For every substantial claim, record:

| Claim | Mathematical support | Empirical support | Boundary |
| --- | --- | --- | --- |
| optimizer is global | convexity, feasibility, dual certificate | objective and constraints reviewed | unmodeled costs |
| queue mean is finite | $λ<μ$ in stated model | stationarity and rate estimates | surges, priorities, abandonment |
| parameter is identified | injective map or rank argument | measurement design and noise | alternate observation model |
| price is unique | replication or complete finite market | tradability and price inputs | costs, constraints, default |
| policy changes outcome | causal identification argument | design and diagnostics | interference and shift |

This ledger is the central habit of the reference: the theorem earns exactly its conclusion and no more.

## Further routes

The [Applied Modeling course](#/item/course-applied-modeling-standard) provides guided study. The [Operations Research deep dive](#/item/deep-dive-operations-research-systems) develops algorithms and operating assumptions. The [Financial Mathematics deep dive](#/item/deep-dive-financial-mathematics-pricing-risk) expands the one-period theory into stochastic pricing and model-risk practice. The [Sensitivity, Identifiability, and Validation deep dive](#/item/deep-dive-sensitivity-identifiability-validation) develops experiment design, profiles, discrepancy, and causal audits.
`;export{e as default};