var e=`---
parent_id: book-applied-modeling-proof-reference
matter_id: notation-status-and-claim-conventions
title: "Notation, Status, and Claim Conventions"
license: CC BY-SA 4.0
---

# Notation, Status, and Claim Conventions

## Local declarations outrank global habits

Applied mathematics reuses a small alphabet across many fields. This volume therefore treats notation as a typed local contract. A symbol table at the start of a section outranks the defaults below. When $L$ is a loss in optimization and a Laplacian in a network section, it is qualified as $L_loss$ or $L_graph$ whenever both could occur. Symbols with different mathematical types are never identified merely because a conventional letter matches.

## Core objects

- $z$ denotes an unobserved world or system state.
- $x$ denotes a modeled state, decision vector, or unknown to be recovered, as locally declared.
- $y$ denotes an observation or response.
- $u$ denotes a control, input, or dimensionless state.
- $a$ denotes an action selected from an action set $A$.
- $θ$ denotes a model parameter; $\\hat{θ}$ denotes an estimate computed from specified data.
- $η$ denotes a nuisance parameter or a dimensionless coordinate.
- $f$, $g$, $h$, and $F$ denote maps whose domain and codomain should be declared. Observation maps are often $h:Θ\\to Y$.
- $J$ denotes an objective or Jacobian only with a qualifier; $Dh(θ)$ is preferred for a derivative matrix.

Bold typography is not relied on in the plain source. A declaration such as $x∈R^n$ supplies the type. Components use subscripts, while time indices and observation indices are named when ambiguity is possible.

## Probability and data

$(Ω,F,P)$ is a probability space when measure-theoretic structure is required. $P$ normally denotes a physical or data-generating probability law. In finance, $Q$ denotes a pricing or martingale measure and must not be interpreted as a physical forecast without a separate argument. Expectation and variance under a law may be written $E_P$ and $Var_P$ when multiple laws appear.

Capital letters such as $X,Y$ denote random variables; lowercase $x,y$ denote realized or deterministic values. A distributional assertion such as $Y~P_θ$ is part of a model contract, not an observed property. The data set is $D$; training, calibration, validation, and test subsets receive explicit qualifiers rather than being inferred from order.

Conditional expectation $E[X|G]$ is a random variable measurable with respect to information $G$. In dynamic decisions, $F_t$ is information available by time $t$, and an admissible action at time $t$ must be $F_t$-measurable. A policy cannot use future observations unless it is explicitly an oracle benchmark.

Likelihood is $L(θ;y)=p_θ(y)$ as a function of $θ$ for fixed observation $y$. Loss may be written $\\ell(a,z)$ or $L_loss$; likelihood and loss are not interchanged. A prior is $π(θ)$ and a posterior $π(θ|y)$.

## Dynamics and scales

Continuous time is $t$; a dimensionless time may be $τ=t/T$. A dot denotes a time derivative only when declared. State equations take the form $x'=f(x,u,θ,t)$. An equilibrium is $x*$ with $f(x*,u*,θ,t)=0$ in an autonomous or suitably frozen system. Stability is always qualified: Lyapunov, asymptotic, exponential, stochastic, numerical, or structural.

Dimensional quantities use brackets such as $[q]$ for their dimensions when needed. $D_dim$ is a dimension-exponent matrix; $\\operatorname{ker} D_dim$ yields dimensionless monomials. Scale variables $X,T$ are positive reference quantities, not random variables unless stated. $ε$ is a small dimensionless parameter; any approximation involving $ε\\to 0$ must state the domain and whether the error is pointwise or uniform.

In biological models $S,I,R$ are compartment states, while $R_0$ denotes a reproduction threshold only when explicitly defined. To prevent collision with a recovered compartment, the state may be written $R_state$ in mixed discussion. Rates $β,γ$ carry units unless the system has been nondimensionalized.

## Linear algebra, inverse problems, and signals

Matrices are linear maps with declared dimensions. $A^{\\mathsf T}$ is transpose, $A^*$ an adjoint when complex spaces appear, $A^{-1}$ an inverse only when it exists, and $A^\\dagger$ a pseudoinverse. $\\operatorname{ker} A$, $\\operatorname{range} A$, and $\\operatorname{rank} A$ have their usual meanings. Norms are $\\lVert x\\rVert$; the subscript identifies a non-Euclidean norm or an induced operator norm.

The singular value decomposition is $A=UΣV^{\\mathsf T}$ in the real case, with singular values ordered $σ_1≥…≥σ_r>0$. A condition number must name the norm and problem; $κ_2(A)=σ_{\\max}/σ_{\\min}$ applies to an invertible matrix in the spectral norm. Rank and condition are not synonyms: full rank may coexist with severe instability.

Signals use time-domain variable $t$ and frequency $ω$ or $f_freq$. Fourier-transform normalization is declared locally because conventions differ. A sample interval is $T_s$, sample frequency $f_s=1/T_s$, and bandwidth $B$. Resolution, identifiability, and numerical reconstruction error are reported separately.

## Optimization and decisions

A generic constrained minimization problem is

$minimize f_0(x) subject to f_i(x)≤0 and h_j(x)=0$.

The feasible set is $C$. The optimal value is $p*$; a selected optimizer is $x*$, which may not be unique. Lagrange multipliers for inequalities are $λ≥0$, and equality multipliers are $ν$. In queueing chapters $λ$ and $μ$ instead denote arrival and service rates; these meanings do not share a section without qualifiers.

The Lagrangian is $calL(x,λ,ν)$. A dual feasible point supplies a bound under weak duality. “Certificate” means a finite object whose validity can be checked against named assumptions: a primal-dual gap, separating vector, infeasibility witness, Bellman residual, flow cut, or replication portfolio. Solver termination is evidence about an implementation; it is not automatically a mathematical certificate.

For stochastic decisions, a policy is $π_policy$ when a probability density $π$ also appears. Value functions are $V_t(s)$. A risk functional is $\\rho(L)$ with the loss sign and horizon stated. Utility, welfare, cost, and loss are not treated as interchangeable.

## Networks, queues, games, and finance

A graph is $G=(V,E)$, with adjacency matrix $A_graph$, degree matrix $D_graph$, incidence matrix $B$, and Laplacian $L_graph=D_graph-A_graph$. Edge weights must say whether they represent capacity, rate, similarity, probability, distance, or another construct. Directed and undirected graphs are distinct types.

Flow on edge $e$ is $f_e$, capacity $c_e$, source $s$, and sink $t_sink$. In a queue, arrival rate is $λ_arr$, service rate $μ_srv$, utilization $\\rho_queue=λ_arr/μ_srv$, number in system $N(t)$, and waiting or sojourn time $W$. Long-run quantities use limits only when existence or an ergodic theorem is justified.

A finite game has players $i$, action sets $A_i$, strategies $s_i$, mixed strategies $p_i$, and payoffs $u_i$. Equilibrium is a mutual best-response property, not a welfare judgment or prediction of learning dynamics.

In finance, payoff matrix $X_pay$, price vector $p_price$, portfolio $h$, state-price vector $q_state$, physical law $P$, and pricing law $Q$ are kept distinct. Returns must name simple versus logarithmic convention, horizon, currency, and treatment of cash flows. A no-arbitrage valuation is conditional consistency, not advice or a physical expected return.

## Claim-status labels

- **Definition:** fixes a term or object.
- **Assumption:** constrains the mathematical or substantive model and is not proved by using it.
- **Theorem / proposition / lemma:** proved from displayed hypotheses.
- **Corollary:** a result whose proof mainly invokes an earlier theorem.
- **Derivation:** transforms equations under stated conditions.
- **Exact computation:** evaluates a finite object without numerical approximation.
- **Numerical result:** produced by a declared algorithm and precision regime.
- **Simulation estimate:** has Monte Carlo uncertainty in addition to model uncertainty.
- **Empirical finding:** describes analyzed observations under a sampling and measurement process.
- **Heuristic:** guides intuition or search but does not establish a theorem.
- **Scenario:** explores stipulated inputs and is not a forecast unless linked to an evidence model.
- **Sensitivity result:** describes change under a specified perturbation, not probability of that perturbation.
- **Causal claim:** compares interventions and requires an assignment or identification argument.
- **Recommendation:** combines empirical and mathematical claims with objectives, constraints, values, and responsibility.

Every important paragraph should make its strongest claim class recognizable. If a sentence moves from one class to another, the bridge must be explicit.

## Error and approximation conventions

Absolute error is $\\lVert \\hat{x}-x\\rVert$; relative error divides by a declared scale and is not used when that scale vanishes. Forward error concerns the answer; backward error asks for the smallest input perturbation making the computed answer exact. Residual and error are not synonyms. A small residual can coexist with large forward error in an ill-conditioned problem.

Big-O notation $r(ε)=O(g(ε))$ requires a limiting regime, norm, and domain. A probabilistic $O_P$ statement is not deterministic. Confidence level, credible probability, prediction coverage, tolerance probability, and Monte Carlo error refer to different repeated or conditional constructions.

Digits printed are not automatically significant. Numerical results state units, rounding, and enough guard digits to reproduce derived quantities. Threshold comparisons include the numerical margin so near-ties remain visible.
`;export{e as default};