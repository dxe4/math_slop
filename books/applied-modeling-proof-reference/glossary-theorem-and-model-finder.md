
# Glossary, Theorem, and Model Finder

## How to use this finder

This is a concept map, not a replacement for a theorem statement. Each entry gives a compact meaning, a common boundary, and a stable chapter identifier. Before applying a result, follow the identifier and read its hypotheses, proof, and failure analysis.

## Core modeling language

**Action.** A choice available to a decision maker, often written $a∈A$. An action is not the same as a prediction or a control variable unless the model contract makes that identification. See `model-contracts` and `dynamic-stochastic-decisions`.

**Assumption ledger.** A record separating mathematical structure, measurement assumptions, distributional assumptions, identification assumptions, computational tolerances, and value judgments. See `model-contracts`.

**Calibration.** Selection or estimation of model quantities using observations. Calibration may make predictions fit within a regime without validating mechanisms, extrapolation, or interventions. See `uncertainty-evidence-claims` and `validation-causal-boundaries`.

**Claim boundary.** The limit beyond which a conclusion is not supported by the theorem, evidence, computation, or decision contract offered. See `model-contracts`.

**Discrepancy.** Structured difference between a model representation and the system, distinct from parameter uncertainty and measurement noise. Flexible discrepancy can improve prediction while weakening parameter interpretation. See `validation-causal-boundaries`.

**Model contract.** A declaration of question, representation, observation process, computation, evidence, claim type, and fallback. See `model-contracts`.

**Observation map.** A map from latent state or parameter to measured output. Its injectivity and conditioning determine what the observation can recover even before noise is considered. See `identifiability-inverse-problems`.

**Validation.** A comparison of model implications with evidence relevant to an intended use. It is not a proof that a model is true. See `validation-causal-boundaries`.

**Verification.** Evidence that equations or algorithms were solved as specified. Verification addresses implementation and numerical correctness, not empirical adequacy. See `reproducible-model-computation`.

## Scale, approximation, and dynamics

**Boundary layer.** A region whose width shrinks with a perturbation parameter while derivatives or gradients become large. It warns that a reduced equation may not satisfy all boundary conditions uniformly. See `dimensions-scales-similarity`.

**Dimension matrix.** A matrix whose columns record base-dimension exponents of physical quantities. Its null space produces dimensionless monomials. See `dimensions-scales-similarity`.

**Dimensionless group.** A product of powers of quantities with zero net physical dimension. Dimensionless groups reduce unit dependence but do not choose relevant variables or prove similarity. See `dimensions-scales-similarity`.

**Equilibrium.** A state where the declared dynamics vanish. Existence of an equilibrium does not establish reachability, stability, welfare, or empirical relevance. See `biology-epidemics-mechanisms` and `games-equilibria-response`.

**Invariant region.** A set that trajectories cannot leave under specified dynamics. Boundary vector-field arguments often prove nonnegativity of compartment states. See `biology-epidemics-mechanisms`.

**Nondimensionalization.** A change of variables using characteristic scales so remaining parameters are dimensionless. It is an exact coordinate change until an approximation is introduced. See `dimensions-scales-similarity`.

**Regular perturbation.** An expansion whose coefficients solve problems of the same effective order over the stated regime. A small coefficient multiplying the highest derivative usually signals a singular perturbation instead. See `dimensions-scales-similarity`.

**Stability.** Persistence or return under a specified perturbation. Parameter stability, dynamical stability, numerical stability, decision stability, and distributional stability require different definitions. See `sensitivity-conditioning`, `biology-epidemics-mechanisms`, and `reproducible-model-computation`.

## Uncertainty, inference, and inverse problems

**Condition number.** A local worst-case amplification ratio for a specified problem, norm, and perturbation model. It describes the problem; algorithmic stability describes a computation. See `sensitivity-conditioning`.

**Decision margin.** The objective or loss gap between the selected action and a competitor. A small margin makes action selection fragile even when predictions appear precise. See `sensitivity-conditioning`.

**Fisher information.** Expected outer product of a likelihood score under regularity. Singularity warns of a likelihood-flat direction, but inverse-information approximations may fail at boundaries or under misspecification. See `identifiability-inverse-problems`.

**Identifiability.** The property that distinct admissible parameters or states imply distinct observation laws or outputs. Structural identifiability is not the same as stable practical recovery. See `identifiability-inverse-problems`.

**Ill-conditioned inverse problem.** A recovery problem in which small observation changes can cause large solution changes. Exact uniqueness may coexist with severe ill-conditioning. See `identifiability-inverse-problems` and `signals-inverse-computation`.

**Likelihood.** The data mass or density viewed as a function of parameters for fixed observations. It is not itself a posterior distribution over parameters. See `uncertainty-evidence-claims`.

**Regularization.** Additional structure or penalty used to stabilize an inverse or optimization problem. It trades variance or instability for bias and imports preferences not supplied by the data alone. See `identifiability-inverse-problems` and `signals-inverse-computation`.

**Sensitivity.** Change in an output under a specified input perturbation. A sensitivity calculation is conditional and does not assign probability to the perturbation. See `sensitivity-conditioning`.

**Structural versus practical identifiability.** Structural identification asks uniqueness with ideal observations; practical identification asks whether finite noisy data separate alternatives sufficiently. See `identifiability-inverse-problems`.

**Uncertainty ledger.** A separation of measurement, process, parameter, discrepancy, scenario, numerical, and value uncertainty. Combining them requires an explicit joint model. See `uncertainty-evidence-claims`.

## Optimization and dynamic decisions

**Bellman equation.** A recursion decomposing an adapted sequential decision problem into current reward or cost plus an optimal continuation value. Its state must contain all information needed for future evolution under the model. See `dynamic-stochastic-decisions`.

**Certificate.** A checkable object supporting a mathematical conclusion: feasible primal-dual pair, zero duality gap, cut, separating vector, Bellman residual bound, or replication portfolio. See `optimization-duality-certificates`.

**Constraint qualification.** A regularity condition used to make KKT multiplier conditions necessary at a local optimum (and, in some settings, to support strong duality). Convexity plus primal/dual feasibility, stationarity, and complementary slackness can make KKT conditions sufficient for global optimality without a separate constraint qualification. Necessity and sufficiency are distinct questions. See `optimization-duality-certificates`.

**Convex function.** A function lying below every chord on a convex domain. For differentiable convex objectives, a feasible first-order inequality is sufficient for global optimality. See `optimization-duality-certificates`.

**Dual problem.** An optimization problem producing bounds on a primal problem. Strong duality is a theorem under hypotheses, not a default solver behavior. See `optimization-duality-certificates`.

**KKT conditions.** Primal feasibility, dual feasibility, stationarity, and complementary slackness for constrained optimization. Necessity and sufficiency depend on regularity and convexity. See `optimization-duality-certificates`.

**Policy.** A rule mapping available information to actions. An admissible policy cannot use future information unless it is explicitly an oracle comparison. See `dynamic-stochastic-decisions`.

**Value of information.** The improvement in an optimal modeled objective when specified information becomes available. It depends on the action set, information structure, probability model, and objective. See `dynamic-stochastic-decisions`.

## Networks, operations, and games

**Centrality.** A graph-derived score based on a specified construction and relation. It is not automatically importance, influence, or causal effect. See `networks-flow-diffusion`.

**Cut.** A partition separating source from sink; its capacity is the total capacity of edges crossing in the forward direction. A minimum cut is a certificate for maximum flow. See `networks-flow-diffusion`.

**Economic order quantity.** The order quantity minimizing a classical sum of setup and holding costs under deterministic constant demand and other assumptions. It is not a general inventory prescription. See `queues-inventory-service`.

**Graph Laplacian.** $L=D-A$ for an undirected weighted graph. Its quadratic form measures edgewise disagreement, and its kernel identifies connected components. See `networks-flow-diffusion`.

**Little's law.** Under appropriate long-run rate and integrability conditions, average number in a stable system equals throughput rate times average sojourn time. It is a conservation identity, not a distributional queue model. See `queues-inventory-service`.

**Nash equilibrium.** A strategy profile with no profitable unilateral deviation. Existence does not imply uniqueness, efficiency, learning stability, or empirical selection. See `games-equilibria-response`.

**Newsvendor fractile.** A quantile rule balancing modeled marginal underage and overage costs for a single-period inventory problem. Dependence, ambiguity, service constraints, and multi-period dynamics require extensions. See `queues-inventory-service`.

**Queue stability.** A property ensuring a queue does not accumulate without bound in the declared stochastic sense. For $M/M/1$, stationarity requires arrival rate below service rate. See `queues-inventory-service`.

**Wardrop or best-response condition.** A local no-profitable-deviation criterion in routing or games. It need not minimize total system cost. See `games-equilibria-response`.

## Biology, signals, and finance

**Aliasing.** Indistinguishability of frequency components after sampling. No reconstruction algorithm can recover information erased by an inadequate observation design without importing assumptions. See `signals-inverse-computation`.

**Anti-alias filter.** A physical or digital filter restricting bandwidth before downsampling. It belongs to the measurement contract, not merely postprocessing. See `signals-inverse-computation`.

**Basic reproduction threshold.** A local invasion criterion derived from a declared epidemic model and susceptible state. It is not by itself a forecast of epidemic size or an identified intervention effect. See `biology-epidemics-mechanisms`.

**Compartment model.** A balance-law representation of transfers among aggregated states. Positivity and conservation may be exact within the model while compartment meanings remain empirically contestable. See `biology-epidemics-mechanisms`.

**Completeness of a finite market.** Every claim in the stated payoff space is replicable. Completeness is relative to the state representation and traded instruments. See `finance-pricing-risk`.

**No arbitrage.** Absence of a feasible portfolio with nonpositive cost and nonnegative payoff with a strict gain under declared conventions. Transaction costs and constraints change the relevant cone. See `finance-pricing-risk`.

**Pricing measure.** A probability-like representation used for valuation after discounting. It need not be the physical law governing observed frequencies. See `finance-pricing-risk`.

**Replication.** Construction of a traded portfolio matching a claim's payoff state by state. A replication price is conditional on the market model and trading assumptions. See `finance-pricing-risk`.

**Sampling theorem.** A reconstruction result for ideal band-limited signals sampled above the required rate under a declared Fourier convention. Finite windows, noise, clock error, and non-band-limited components remain. See `signals-inverse-computation`.

**Value at risk.** A loss quantile with a stated horizon, conditioning law, and convention. It does not report severity beyond the quantile and is not a complete risk description. See `finance-pricing-risk`.

## Computation and reproducibility

**Backward error.** The smallest input perturbation under which a computed result is exact. Small backward error yields small forward error only when the problem is well-conditioned. See `reproducible-model-computation`.

**Deterministic oracle.** A small exact or independently derived case used to test an implementation. It should exercise sign, indexing, units, and boundary behavior. See `reproducible-model-computation`.

**Invariant test.** A check that conserved mass, probability normalization, feasibility, monotonicity, symmetry, or another exact property remains within a declared tolerance. See `reproducible-model-computation`.

**Monte Carlo error.** Sampling variation caused by a finite number of simulated draws, distinct from parameter uncertainty and model discrepancy. See `reproducible-model-computation`.

**Provenance.** Information needed to trace an output to inputs, transformations, configuration, software state, randomness, and authorship. See `reproducible-model-computation`.

**Residual.** The defect obtained by substituting an approximate result into an equation. Residual size and solution error differ by conditioning and stability. See `sensitivity-conditioning` and `reproducible-model-computation`.

## Theorem finder by needed conclusion

### “I need to reduce the number of dimensional variables.”

Use the finite-dimensional Pi representation in `dimensions-scales-similarity`. Check that quantities are positive where monomial/log coordinates are used, the dimension matrix is correct, and omitted dimensionless controls are not driving the response.

### “I need a local derivative of an implicitly defined state.”

Use the implicit sensitivity formula in `sensitivity-conditioning`. Verify differentiability and invertibility of the state Jacobian. If it is nearly singular, report amplification rather than only a derivative.

### “I need to know whether parameters are recoverable.”

Use null-space equivalence for linear inverse problems or the full-column-rank local condition for nonlinear observation maps in `identifiability-inverse-problems`. Then inspect singular values or likelihood profiles for practical separation.

### “I need a global optimum certificate.”

Use convex first-order optimality or primal-dual/KKT certificates in `optimization-duality-certificates`. Verify feasibility, convexity, constraint qualification, and numerical residuals. For nonconvex problems, KKT is generally only local or necessary evidence.

### “I need a sequential decision recursion.”

Use Bellman's principle in `dynamic-stochastic-decisions`. Confirm that the state is Markov for the modeled future, policies are adapted, and terminal conditions and horizon are explicit.

### “I need a maximum transport quantity.”

Use max-flow/min-cut in `networks-flow-diffusion`. Confirm capacity, conservation, source/sink, integrality, and directed-edge conventions. The theorem does not validate how the graph was constructed.

### “I need a queue mean.”

Use Little's law under stable long-run conditions, or $M/M/1$ formulas only after verifying Markov arrival and service assumptions in `queues-inventory-service`. Never substitute into a stationary formula before checking load.

### “I need an equilibrium to exist.”

Use mixed Nash existence for finite games in `games-equilibria-response`. Existence alone does not choose among equilibria or predict convergence of behavior.

### “I need a biological threshold.”

Use linearization or next-generation structure in `biology-epidemics-mechanisms`. State the disease-free configuration, observation model, and whether the threshold is local, deterministic, stochastic, or network-based.

### “I need to reconstruct a sampled signal.”

Use the sampling theorem or the Tikhonov uniqueness criterion in `signals-inverse-computation`. Separate aliasing, leakage, noise amplification, regularization bias, and discretization error.

### “I need a unique derivative price.”

Use finite-state no-arbitrage and replication in `finance-pricing-risk`. Verify the payoff lies in the traded span and state which frictions and constraints are excluded.

### “I need confidence in a computed answer.”

Use exact cases, invariant tests, refinement, residuals, precision comparison, and recorded provenance in `reproducible-model-computation`. No single check establishes all forms of correctness.

## Model finder by system feature

- Conservation with continuous flows: balance laws and ODEs in `biology-epidemics-mechanisms`.
- Capacity-constrained transport on a fixed graph: flows in `networks-flow-diffusion`.
- Random congestion and waiting: queue models in `queues-inventory-service`.
- Replenishment with holding and shortage tradeoffs: inventory models in `queues-inventory-service`.
- Strategic response among agents: finite games in `games-equilibria-response`.
- Decisions revealed over time: stochastic dynamic programming in `dynamic-stochastic-decisions`.
- Indirect noisy observation: inverse problems in `identifiability-inverse-problems`.
- Periodic or frequency-structured measurements: signal models in `signals-inverse-computation`.
- State-contingent traded payoffs: finite-market models in `finance-pricing-risk`.
- Multiple mechanisms with uncertain validity: scenario, discrepancy, sensitivity, and validation tools across `uncertainty-evidence-claims`, `sensitivity-conditioning`, and `validation-causal-boundaries`.

Choosing a model from this list begins an audit; it does not end one. If two descriptions fit, write both contracts and identify which proposed observation or intervention could distinguish them.
