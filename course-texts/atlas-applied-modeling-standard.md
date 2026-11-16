
# Applied Modeling: From Mechanisms to Decisions

<!-- euler-course-route -->

## Current course route

Use the [course page](#/courses/atlas-applied-modeling-standard) for its present preparation and available study steps. This Outline keeps its original explanations and exercises while a complete primary-book syllabus is being assigned.

Applied mathematics is a disciplined cycle: formulate a question, select state variables, translate mechanisms into relationships, analyze or compute, confront evidence, revise, and communicate a decision boundary. This course supplies that cycle across scales, inverse problems, networks, strategic interaction, operations, biology, epidemics, finance, and signals.

The course assumes algebra, functions, elementary calculus, matrices, and basic probability. Each unit can be read independently, but the sequence is deliberate. The same running habits—units, uncertainty, sensitivity, identifiability, validation, and causal scope—return in different mathematical forms.

## Entry diagnostic and 15-hour course route

Before starting, attempt:

1. Give the units of \(a\) and \(b\) in \(x'(t)=a-bx(t)\) when \(x\) is mass.
2. If \(Ax=b\) has two distinct solutions, what must be true of the null space
   of \(A\)?
3. State one difference between verification and validation.
4. For a feasible primal value 12 and feasible dual value 12, what follows?
5. Why does a good fit to historical cases fail to identify an intervention
   effect by itself?

**Answers and repair.** The units are mass/time for \(a\) and \(1/\text{time}\)
for \(b\); the null space contains a nonzero vector; verification checks the
calculation against the chosen equations while validation checks the equations
against the intended use; equality plus weak duality certifies optimality; and
observational fit does not supply the counterfactual comparison or control
confounding. If Questions 1–2 are difficult, repair calculus and linear algebra.
If Questions 3–5 are difficult, begin with the model contract and do not skip
the claim ledger.

| Hours | Work | Evidence |
| --- | --- | --- |
| 1–3 | Contract and Units 1–2 with [model contracts](../books/applied-modeling-proof-reference/model-contracts.md) and [dimensions and similarity](../books/applied-modeling-proof-reference/dimensions-scales-similarity.md) | use statement, units table, dimensionless derivation |
| 4–6 | Unit 3 with [sensitivity and conditioning](../books/applied-modeling-proof-reference/sensitivity-conditioning.md) and [identifiability](../books/applied-modeling-proof-reference/identifiability-inverse-problems.md) | sensitivity table and two observationally similar parameter settings |
| 7–9 | Units 4–6 with [optimization certificates](../books/applied-modeling-proof-reference/optimization-duality-certificates.md) and [networks](../books/applied-modeling-proof-reference/networks-flow-diffusion.md) | primal-dual or cut certificate plus one model omission |
| 10–12 | Units 7–9 with [biological mechanisms](../books/applied-modeling-proof-reference/biology-epidemics-mechanisms.md) and [signals and inversion](../books/applied-modeling-proof-reference/signals-inverse-computation.md) | conservation check, observation model, and regularization sensitivity |
| 13–15 | Unit 10, review problems, and capstone with [validation boundaries](../books/applied-modeling-proof-reference/validation-causal-boundaries.md) | reproducible computation and a decision with an explicit failure boundary |

Each three-hour stage ends with a one-page claim ledger. A result without units,
hypotheses, or a validation target is unfinished.

## Course contract

By the end, you should be able to:

- write a model-use statement naming target, decision time, population, horizon, criterion, and constraints;
- derive balance laws and dimensionless groups rather than guessing formulas;
- distinguish structural, practical, and numerical identifiability;
- formulate deterministic and stochastic decisions with explicit objectives;
- compute and certify small linear programs, flows, queues, inventories, games, and one-period prices;
- validate a calculation through units, invariants, limits, residuals, held-out evidence, and stress tests;
- keep prediction, intervention, equilibrium, valuation, and advice as separate claim types.

Every assessment should include a **claim ledger** with four columns: mathematical conclusion, hypotheses, evidence, and out-of-scope claim.

## Unit 1 — The model-use contract

A useful model begins with a question, not an equation. Define:

- state $x$: the smallest collection of quantities needed to describe the system at the chosen resolution;
- input or control $u$: a quantity that can be set or treated as externally supplied;
- parameter $\theta$: a fixed but perhaps unknown feature during the modeled episode;
- observation $y$: what the measurement process records;
- output or decision $a$: what the analysis must report or choose.

A general state-observation representation is

$x_{t+1}=F(x_t,u_t,\theta ,w_t)$,

$y_t=G(x_t,\theta )+\varepsilon _t$,

where $w_t$ represents process variability and $\varepsilon _t$ measurement error. Writing both equations prevents a frequent mistake: treating the measured quantity as the state itself.

### Worked example: bicycle-share rebalancing

At 6 a.m., a system must decide how many bicycles to move among stations before commuters arrive. Let $x_i$ be bicycles at station $i$, $u_ij$ bicycles moved from $i$ to $j$, and $D_i$ uncertain net morning demand. A stock equation is

$x_i^after = x_i + \sum _j u_ji - \sum _j u_ij$.

One loss could be unmet rentals plus movement cost. Capacity, truck, time, and nonnegativity constraints define feasibility. Historical trip records may estimate scenarios for $D_i$, but a holiday or station closure creates shift. The model can compare rebalancing rules under declared scenarios; it does not establish that recorded demand equals underlying mobility need, nor that the objective values every neighborhood fairly.

### Boundary exercise

A model is trained on end-of-day inventory to choose a morning shipment. Diagnose the information failure.

**Solution.** End-of-day inventory occurs after the morning decision and partly results from it. It is future leakage. Use only measurements available by the decision time, or redefine the decision as an end-of-day action.

## Unit 2 — Dimensions, scales, and similarity

Assign every dimensional variable a dimension vector in a basis such as mass $M$, length $L$, and time $T$. A meaningful additive equation is dimensionally homogeneous. If a phenomenon uses $n$ dimensional variables whose dimension vectors have rank $r$, the Buckingham Pi theorem guarantees that the relation can be represented using $n-r$ independent dimensionless groups, subject to regularity and relevance assumptions.

### Deriving a drag group

Suppose drag force $F$ depends on fluid density $\rho$, speed $U$, object length $L$, and viscosity $\mu$. Dimensions are

$[F]=M L T^-2$, $[\rho ]=M L^-3$, $[U]=L T^-1$, $[L]=L$, $[\mu ]=M L^-1 T^-1$.

Choose $\rho ,U,L$ as repeating variables. A dimensionless force is

$C_D = F/(\rho U^2 L^2)$.

The remaining dimensionless group is the Reynolds number

$Re = \rho U L/\mu$.

Dimensional analysis therefore permits $C_D=\Phi (Re)$. It does not determine the function $\Phi$, guarantee that surface roughness is irrelevant, or show that a two-dimensional characteristic length captures a complex geometry.

### Nondimensionalizing a population equation

For logistic growth

$dN/dt = rN(1-N/K)$,

set $n=N/K$ and $\tau =rt$. Then

$dn/d\tau =n(1-n)$.

The dimensional parameters disappear from the phase portrait. $K$ sets population scale and $1/r$ sets time scale. This makes comparisons possible, but the biological assumptions—homogeneous population, instantaneous density dependence, fixed environment—remain.

### Perturbation warning

If a dimensionless equation contains a small $\varepsilon$, deleting its term is valid only when the solution remains regular in the relevant region. In $\varepsilon y''+y'=0$ with two boundary conditions, setting $\varepsilon =0$ lowers the differential order and cannot usually satisfy both. A thin boundary layer carries the missing adjustment. “Small coefficient” does not imply “small effect” when it multiplies a highest derivative or when long times accumulate error.

## Unit 3 — Sensitivity, uncertainty, and identifiability

For outputs $z=f(\theta )$, the local sensitivity matrix is the Jacobian

$S_ij = \partial f_i/\partial \theta _j$.

The columns describe how outputs respond to parameter directions. If columns are linearly dependent, different parameter changes produce the same first-order observation change. That is a local identifiability warning.

### Absolute and relative conditioning

An absolute condition number near $\theta$ is $\lVert Df(\theta )\rVert$. When inputs and outputs are nonzero, a relative condition number compares fractional changes. For $f(\theta )=1/\theta$, the absolute sensitivity is $1/\theta ^{2}$ in magnitude, while the relative condition number is 1: a small percentage change in $\theta$ produces roughly the same percentage change in $f$, with opposite sign. Units matter when interpreting absolute sensitivity.

### Structural versus practical identifiability

**Structural identifiability** asks whether perfect, continuous, noise-free observations under the stated experiment uniquely determine parameters. **Practical identifiability** asks whether finite noisy data determine them precisely enough. **Numerical identifiability** additionally depends on algorithms, rounding, and parameterization.

For $y(t)=A \exp(-kt)$, exact observations at two distinct positive times can determine $A$ and $k$ if $A>0$. Over a very short interval with noise, many pairs may fit nearly equally well; the problem is structurally identifiable but practically weak.

### Profile and scenario checks

Do not report a covariance matrix alone. Vary one parameter or meaningful combination, refit nuisance parameters, and plot or tabulate the loss profile. Compare alternate observation models. Propagate plausible inputs through the decision, not only through an intermediate parameter. If the selected action changes under small defensible perturbations, report that fragility.

## Unit 4 — Optimization and dual certificates

A linear program in standard inequality form is

$maximize c^T x$ subject to $Ax\le b$, $x\ge 0$.

Its dual is

$minimize b^T y$ subject to $A^T y\ge c$, $y\ge 0$.

For any feasible $x$ and $y$,

$c^T x \le x^T A^T y \le b^T y$.

This is **weak duality**. Matching primal and dual values certify optimality without enumerating every feasible point. Strong duality says matching optima exist when a finite optimum exists under standard finite-dimensional linear-program conditions.

### Worked allocation

Maximize $3x+2y$ subject to $x+y\le 4$, $2x+y\le 6$, and $x,y\ge 0$. The intersection of active constraints is $(x,y)=(2,2)$, with value 10. Choose dual variables $u=1$ and $v=1$. They satisfy

$u+2v=3\ge 3$, $u+v=2\ge 2$,

with dual value $4u+6v=10$. Weak duality plus equality proves $(2,2)$ optimal.

The multipliers are local marginal values only while the same basis and model remain appropriate. Integer requirements can invalidate a continuous solution. Multiple objectives require trade-off analysis, constraints, or a clearly defended scalarization.

### Robust and stochastic decisions

With scenarios $\xi$, a stochastic objective might minimize $E[L(x,\xi )]$; a robust model might minimize $\max_{\xi \in U}L(x,\xi )$. The first needs a probability law; the second needs an uncertainty set. Neither dominates universally. A wrong distribution and an irrelevant worst-case set fail differently. Always show which uncertainty representation generated the plan.

## Unit 5 — Flows, queues, and inventory

### Network flows

For directed edge $(i,j)$, let capacity be $c_ij$ and flow $f_ij$. Feasibility requires $0\le f_ij\le c_ij$ and flow conservation at intermediate nodes. Augmenting-path algorithms repeatedly send the bottleneck amount along a source-to-sink path in the residual graph. With integer capacities, they preserve integrality.

A minimum cut is both a bottleneck diagnosis and an optimality certificate. Yet the network may omit time, congestion interaction, failures, or bidirectional coupling. A static maximum flow is not automatically a schedule.

### Queues

Little's law is

$L=\lambda W$,

where $L$ is long-run average number in a stable system, $\lambda$ is long-run throughput, and $W$ is average time in system. Under suitable stationarity and conservation conditions it is far broader than M/M/1. It does not itself give $L$ or $W$; a queue model or data must supply another relationship.

For a stable M/M/1 queue, $\rho =\lambda /\mu <1$,

$L=\rho /(1-\rho )=\lambda /(\mu -\lambda )$, $W=1/(\mu -\lambda )$,

and mean waiting before service is $W_q=\lambda /[\mu (\mu -\lambda )]$. Memoryless arrivals and service, independence, one server, and steady state are material assumptions.

### Inventory

In the elementary economic order quantity model, annual demand is constant at $D$, every replenishment of size $Q$ arrives instantly, setup cost is $K$ per order, holding cost is $h$ per unit-year, shortages are forbidden, and purchase price is independent of $Q$. Relevant annual cost is

$C(Q)=KD/Q + hQ/2$.

Differentiation gives

$C'(Q)=-KD/Q^{2}+h/2$,

so $Q*=\sqrt{2KD/h}$. The second derivative $2KD/Q^{3}$ is positive. If demand is seasonal, lead time random, discounts present, or service-level constraints important, this model must be extended rather than decorated with false precision.

## Unit 6 — Networks and strategic interaction

A graph has vertices, edges, and attributes whose meanings must be declared. Degree measures local connection count. Eigenvector centrality rewards connection to central vertices, but can localize on dense subgraphs and is not a universal measure of importance. Community algorithms optimize a criterion, not discover a single ground-truth partition.

For an undirected weighted graph with adjacency $A$, degree matrix $D$, and Laplacian $L=D-A$,

$x^T Lx = (1/2)\sum _{i,j} A_ij(x_i-x_j)^{2} \ge 0$.

Thus $L$ is positive semidefinite. The multiplicity of eigenvalue zero equals the number of connected components. Diffusion $x'(t)=-Lx(t)$ conserves total mass because $1^T L=0$.

### A two-player game

In matching pennies, player 1 wins when choices match and player 2 wins when they differ. There is no pure Nash equilibrium. If either player uses heads with probability other than $1/2$, the other has a profitable pure response. Therefore the unique mixed equilibrium has each choose heads with probability $1/2$, giving expected payoff zero.

An equilibrium depends on players, actions, information, and payoffs. It does not assert moral desirability. In traffic or platforms, the rules change incentives; mechanism design asks how rules shape equilibrium, but empirical behavior and learning dynamics require separate evidence.

## Unit 7 — Biology and epidemics

Mechanistic biology often starts from conservation plus transition rates. For an SIR epidemic in a closed homogeneous population of size $N$,

$dS/dt=-\beta SI/N$,

$dI/dt=\beta SI/N-\gamma I$,

$dR/dt=\gamma I$.

Here $\beta$ and $\gamma$ have units $time^-1$; $1/\gamma$ is mean infectious duration only under the exponential-removal interpretation. Adding equations gives $d(S+I+R)/dt=0$, a conservation check.

At the start, when $S\approx S_0$, infections grow if $\beta S_0/N-\gamma >0$. The initial effective reproduction quantity is $R_{\mathrm{eff}},0=(\beta /\gamma )(S_0/N)$. The basic quantity $R_0=\beta /\gamma$ applies to the model's fully susceptible reference population. Neither is a biological constant independent of contact definitions, heterogeneity, behavior, and intervention.

### Observation boundary

Reported cases are not $I(t)$ automatically. Delays, under-ascertainment, test availability, symptom probability, and reporting rules create an observation process. Many combinations of transmission and ascertainment can reproduce the same case curve. Hospitalization, prevalence surveys, contact data, or intervention timing may improve identifiability, subject to their own biases.

An association between an intervention and later decline is not by itself a causal effect. Epidemic dynamics, voluntary behavior, prior immunity, seasonality, and policy targeting can confound comparisons. Model scenarios should be labeled conditional, not predictions with guaranteed policy effects.

## Unit 8 — Financial mathematics without forecast theater

### Time value

At a deterministic per-period rate $r>-1$, one unit today becomes $(1+r)^n$ after $n$ periods. A payment $C_n$ due at time $n$ has present value $C_n/(1+r)^n$ under that rate convention. Nominal, effective, continuously compounded, borrowing, and lending rates are not interchangeable.

### One-period no-arbitrage

Let a stock cost $S_0=100$ and become either $S_u=120$ or $S_d=80$. A zero-interest bond remains 1. A call with strike 100 pays $20$ up and $0$ down. Seek $\Delta$ shares and cash $B$ such that

$120\Delta +B=20$, $80\Delta +B=0$.

Subtracting gives $\Delta =1/2$; then $B=-40$. Replication costs $100(1/2)-40=10$. Under frictionless trading, shared borrowing/lending rate, and no arbitrage, a different call price creates an arbitrage between the claim and its replicating portfolio.

Equivalently, the risk-neutral probability is $q=(100-80)/(120-80)=1/2$, and the price is $q20+(1-q)0=10$. This $q$ is a pricing weight implied by traded prices, not a forecast that the up move has probability one-half.

### Portfolio risk

For random returns vector $R$, weights $w$, mean $m$, and covariance $\sum$,

$E[w^TR]=w^Tm$, $\operatorname{Var}(w^TR)=w^T\sum w$.

Covariance captures second-moment co-movement under the estimated distribution. It can be unstable, can miss tail dependence and liquidity, and does not make return laws stationary. Value-at-Risk is a quantile under a chosen horizon, loss convention, and model; it is not a maximum possible loss and is generally not subadditive. Expected shortfall averages losses beyond a quantile under continuity or an explicit discrete-tail convention, but it still inherits the model and data limitations.

All course examples are educational mathematics, never personal financial advice or a promise of performance.

## Unit 9 — Signals, inverse problems, and regularization

A continuous signal contains amplitudes indexed by time. Sampling at interval $T_s$ gives $x[n]=x(nT_s)$. For a signal band-limited below $f_s/2$, ideal uniform sampling at frequency $f_s=1/T_s$ permits reconstruction under the sampling theorem's hypotheses. Frequencies above the Nyquist boundary can alias to lower frequencies. Real signals are time-limited rather than perfectly band-limited, filters are imperfect, and timing noise matters.

Many reconstruction tasks have form

$y=Ax+\varepsilon$.

If $A$ has a null space, distinct $x$ give identical noiseless $y$; the inverse is non-identifiable. If singular values are tiny, noise is greatly amplified; the inverse is ill-conditioned. Tikhonov regularization chooses

$x_\alpha=\operatorname*{argmin}_{x}
\left(\lVert Ax-y\rVert^{2}+\alpha\lVert Lx\rVert^{2}\right)$.

The penalty selects among data-compatible candidates by preferring small $Lx$. It adds an assumption; it does not recover information absent from $y$. Choose $\alpha$ using a declared validation, discrepancy, Bayesian, or risk criterion and inspect stability over a range.

### Two-point example

Let $A=\operatorname{diag}(1,0.01)$, $y=(1,0.02)$. Unregularized inversion gives $x=(1,2)$. A measurement perturbation of $0.001$ in the second coordinate changes $x_2$ by $0.1$. The second direction has amplification 100. With $L=I$, ridge regularization gives coordinate formula

$x_i=a_i y_i/(a_i^{2}+\alpha )$.

For $\alpha =0.01$, $x_2\approx 0.0198$: stable but strongly biased toward zero. The trade-off must be visible.

## Unit 10 — Computation and validation as mathematical work

A computed number is the output of a representation and algorithm, not the exact mathematical object by default. Record:

1. equations and conventions;
2. units and scales;
3. discretization and solver;
4. stopping rule and tolerances;
5. software version or inspectable dependency-free code;
6. invariant, residual, and refinement checks;
7. data split and random seed when applicable;
8. sensitivity to parameter, grid, and scenario choices.

### Residual versus error

For $Ax=b$ and approximate $x_hat$, the residual is $r=b-Ax_hat$. A small residual implies a small forward error only when the problem is suitably conditioned. If $A$ is nearly singular, very different $x$ can have similarly small residuals. Report both residual and conditioning information.

### Verification and validation

**Code verification** asks whether the program solves the intended equations. Manufactured solutions, unit tests, exact small cases, and convergence studies help. **Solution verification** estimates numerical error for the particular run. **Validation** asks whether the equations and parameters adequately represent the intended real use. Matching one dataset cannot collapse these three questions into one.

### Causal boundary checklist

Before using a model to compare interventions, ask:

- What is the treatment or action, and when is it assigned?
- Which outcome and time horizon matter?
- What common causes affect action and outcome?
- Is interference between units possible through a network or market?
- Does selection into the data depend on action or outcome?
- Which causal assumptions are tested, justified externally, or merely posited?

Prediction can support a decision without identifying causal effects—for example by forecasting load under stable operations—but a counterfactual policy claim needs more.

## Capstone: an auditable model-compute-decide report

Choose a modest system: a queue, stock, transport network, biological population, sampled signal, or one-period contingent claim. Submit:

- a one-paragraph use contract;
- a variable-and-units table;
- a diagram or text-equivalent relationship list;
- a derivation from mechanisms;
- a dimensionless or scale analysis;
- an exact limiting case and a computational check;
- a sensitivity and identifiability audit;
- at least two uncertainty scenarios;
- validation evidence kept separate from fitting evidence;
- a claim ledger distinguishing prediction, causal effect, equilibrium, and conditional valuation;
- a reproducible computation with a complete numerical table;
- one decision that remains stable and one boundary beyond which no recommendation is supported.

## Course review problems

### Problem 1: nondimensional stock

An inventory follows $dI/dt=a-bI$ with $a,b>0$. Find natural scales and the dimensionless equation.

**Solution.** Equilibrium inventory is $I*=a/b$, so let $i=I/(a/b)=bI/a$. Time scale is $1/b$, so $\tau =bt$. Since $I=(a/b)i$ and $dI/dt=a di/d\tau$, substitution gives $di/d\tau =1-i$. The two dimensional parameters set scales; the normalized transient is universal under the model.

### Problem 2: Little's law audit

A stable service system completes 24 jobs per hour. Jobs spend an average 15 minutes in the system. Find the average number present.

**Solution.** Convert 15 minutes to $0.25 hour$. With throughput $\lambda =24/hour$, Little's law gives $L=\lambda W=24\times 0.25=6 jobs$. The calculation requires consistent long-run averages and conservation; it does not identify the waiting-time distribution.

### Problem 3: a cut certificate

A source has outgoing edges of capacities 3 and 5, and you construct a feasible source-to-sink flow of value 8. Prove optimality.

**Solution.** The cut containing only the source has capacity $3+5=8$, so every flow has value at most 8. The feasible value-8 flow attains that bound. Therefore maximum flow and minimum cut both equal 8.

### Problem 4: pricing is not probability

In the one-period example, suppose a researcher believes the real up probability is 0.7. Does the replication price change?

**Solution.** Not under the stated complete frictionless one-period market. The claim is replicated state by state, so its no-arbitrage cost is 10 regardless of a subjective probability. The real probability changes expected profit or risk assessments, not the replication identity. If trading constraints, different rates, costs, or incompleteness break replication, the conclusion must be revised.

### Problem 5: validation scope

A queue model fits one normal week and predicts another normal week well. What has been shown, and what has not?

**Solution.** It has supplied held-out predictive evidence for two weeks under apparently similar operations and the chosen metric. It has not established the M/M/1 assumptions, performance during disruptions, causal effects of staffing changes, fairness across customer classes, or indefinite stationarity.

### Feedback map

- Dimensional inconsistency: stop and repair the variable-and-units table before
  tuning parameters.
- Unstable parameter estimates but stable predictions: report practical
  nonidentifiability and evaluate the decision quantity directly.
- Optimization output without a certificate: construct a dual bound, cut,
  exhaustive small case, or independently checked lower bound.
- Small residual with a fragile solution: inspect singular values or condition
  estimates and perturb inputs on their natural scale.
- Predictive success used as a causal claim: state the intervention and
  identification assumptions, then narrow the conclusion if they are absent.

## Continuations

Use [Applied Modeling: Proofs, Guarantees, and Failure Boundaries](#/books/applied-modeling-proof-reference) for formal results. The [Operations Research deep dive](../articles/operations-research-systems.md) extends Unit 5. The [Financial Mathematics deep dive](../articles/financial-mathematics-pricing-risk.md) extends Unit 8. The [Sensitivity, Identifiability, and Validation deep dive](../articles/sensitivity-identifiability-validation.md) extends Units 3 and 10. The [trustworthy modeling recipe](../articles/recipe-trustworthy-model-compute-validate.md) is the reusable project checklist.

## Required selected applied-modeling core work

The full selected study time is unknown; the earlier 900-minute / 15-hour outline does not estimate this expanded work. The ten units, their five answered review problems and the twelve capstone requirements above remain the course spine. The selection below makes the required written work and its public feedback explicit. It selects fifty native chapter exercises, the five course review problems, the existing cooling audit AM-CV-1 and one fixed version of the model-compute-decide capstone. The other chapter exercises and open project choices remain available for further study.

### Preparation and hypotheses before calculation

Use the complete answers and repair notes in the [native preparation diagnostic](#/books/applied-modeling-proof-reference). Before Units 1–2, secure Items 18 and 20: units and claim types. Before Unit 3 and Unit 9, secure Items 1, 3 and 4: kernels, conditioning and derivatives. Before Unit 4, secure Items 14–15: convex bounds and dual-bound direction. Before Units 5–6, secure Items 16–17: Laplacians and queue stability. Before Unit 7 and the numerical cooling continuation, secure Items 11–13: ODEs, conservation and Euler stability. Before Unit 8, secure Item 2 and the meanings of expectation, variance and covariance. Before Unit 10, secure Items 19–20: reproducibility and conditional computational claims. Each answer routes repair; these items supply no admission score.

For cooling, begin with [AM-CV-1](../books/applied-modeling-proof-reference/cooling-model-validation.md): its algebra entry develops excess ratios, all-three-record least squares and a held-out comparison; its numerical continuation derives the separable ODE, Euler recurrence, geometric-series error bound and rational logarithm enclosure. Attempt both parts, including the supplied graph, before the decision capstone. Its AM-CV-2 and AM-CV-R remain distinct existing tasks; the new decision tasks below do not replace them.

State each selected model's hypotheses in the worksheet. For the oscillator take mass and stiffness $m,k>0$ and physical damping $b\ge0$. For the closed SIR work take $N>0$, $\beta\ge0$, $\gamma>0$ and nonnegative initial compartments summing to $N$; the scaled time $\gamma t$ requires $\gamma>0$. For EOQ take $D,K,h,Q>0$ and $c>0$ in its relative-cost identity. M/M/1 calculations require independent Poisson arrivals, independent exponential service, one server, the declared steady regime and $0\le\lambda<\mu$. Laplacian energy calculations use symmetric nonnegative edge weights. Symbols retain their local chapter meanings: oscillator stiffness is not the cooling decay rate.

### Fifty required native exercises and complete feedback

Open the named chapter's **Exercises**, record the numbered attempts, then compare with the same chapter's indicated feedback section. The selected answers contain the decisive reasoning even where the native heading calls them a sketch. Keep the chapter and exercise number in every file; a number alone is ambiguous across chapters.

| Unit | Native chapter | Required exercises | Public feedback | Evidence to retain |
| --- | --- | --- | --- | --- |
| 1 | [Model Contracts and Claim Ledgers](../books/applied-modeling-proof-reference/model-contracts.md) | 4, 5, 7, 9 | Solutions sketch | geometry map, censored demand pair, information time and four claim types |
| 2 | [Dimensions, Scales, Similarity, and Perturbation](../books/applied-modeling-proof-reference/dimensions-scales-similarity.md) | 2, 6, 12 | Answers | oscillator scaling, equal-load queues with unequal time scales and a zero-equilibrium scale failure |
| 3 | [Sensitivity, Conditioning, and Decision Margins](../books/applied-modeling-proof-reference/sensitivity-conditioning.md) | 6, 10 | Answers | residual versus forward error and both action-regret calculations |
| 3 | [Identifiability, Inverse Problems, and Regularization](../books/applied-modeling-proof-reference/identifiability-inverse-problems.md) | 4, 5 | Answers | equivalence-class witnesses and the identified exponential parameters |
| 4 | [Optimization, Duality, and Certificates](../books/applied-modeling-proof-reference/optimization-duality-certificates.md) | 7, 8, 9, 14, 15 | Complete solutions | primal/dual feasibility, sign-by-sign weak duality, complementary slackness, gap and integrality |
| 5 | [Networks: Flow, Diffusion, and Structural Claims](../books/applied-modeling-proof-reference/networks-flow-diffusion.md) | 1, 2 | Complete solutions | conservation cancellation and edgewise flow/cut certificate |
| 5 | [Queues, Inventory, and Service Systems](../books/applied-modeling-proof-reference/queues-inventory-service.md) | 2, 5, 10, 11 | Answers | finite residence area, steady queue units, EOQ value and relative-cost proof |
| 6 | [Networks: Flow, Diffusion, and Structural Claims](../books/applied-modeling-proof-reference/networks-flow-diffusion.md) | 8, 11, 12 | Complete solutions | Laplacian energy and mass preservation with a positivity failure |
| 6 | [Games, Equilibria, and Strategic Response](../books/applied-modeling-proof-reference/games-equilibria-response.md) | 1, 6, 7 | Complete solutions | mixed indifference and matching lower/upper game-value guarantees |
| 7 | [Biological and Epidemic Mechanisms](../books/applied-modeling-proof-reference/biology-epidemics-mechanisms.md) | 1, 2, 3, 11, 13 | Answers | invariant simplex, signed growth, dimensionless SIR and two observation calculations |
| 8 | [Financial Valuation, Portfolios, and Model Risk](../books/applied-modeling-proof-reference/finance-pricing-risk.md) | 3, 4, 5, 9, 11, 13 | Complete solutions | statewise replication, physical/pricing distinction, covariance change and discrete-tail convention |
| 9 | [Signals, Sampling, and Computational Inversion](../books/applied-modeling-proof-reference/signals-inverse-computation.md) | 1, 7, 8, 10, 11, 17 | Answers | alias pair, null space, amplification, regularized estimate and its fit/penalty boundary |
| 10 | [Reproducible Model Computation and Exact Laboratories](../books/applied-modeling-proof-reference/reproducible-model-computation.md) | 2, 3 | Answers | exact arithmetic versus uncertain inputs and a conservation/positivity test |
| 10 | [Validation, Discrepancy, and Causal Boundaries](../books/applied-modeling-proof-reference/validation-causal-boundaries.md) | 1, 2, 3 | Answers | fitting versus verification, grouped test splitting and a positivity failure |

Also complete **Course review Problems 1–5** above, using their adjacent Solutions and Feedback map. The five reviews do not substitute for the fifty chapter exercises. Their stock scaling, Little's-law units, cut bound, replication convention and held-out-use boundary prepare the cumulative report.

## Required cooling model-compute-decide capstone

Complete **AM-MCD-1**, then the changed **AM-MCD-2**, then **AM-MCD-R** at a later sitting if useful, in [A fixed core capstone: cooling, cost and a deadline](../books/applied-modeling-proof-reference/synthesis-projects-solutions.md). That native section supplies all inputs, every one of the original twelve deliverables, complete primary/changed/return keys, exact action/scenario grids and a numerical error certificate. The baseline observations join the ODE and computation; the explicitly given synthetic action laws join them to a finite constrained decision. Neither fitting nor numerical accuracy identifies an intervention effect.

For each exercise group keep separate learner-owned files, for example `AM-U04-first.txt`, `AM-U04-comparison.txt` and `AM-U04-revised.txt`. In the first file record the exact chapter/questions, date, assumptions, calculations and help used. After opening feedback, save the comparison separately with the actual supported lines and repairs. Save corrected reasoning in the revised file while preserving the first two files. Use `AM-MCD-1-first.txt`, `AM-MCD-1-comparison.txt`, `AM-MCD-1-revised.txt`, and the corresponding AM-MCD-2 files for the capstone. Keep the later public reconstruction in `AM-MCD-R-first.txt`, followed by its own comparison and revision; record any earlier keys or assistance used. Public questions and models do not establish unseen work or a verified elapsed delay.

Use the worksheet portfolio workflow for recovery. The shared reading note is one mutable string; a saved synthesis does not retain every worksheet. This selection adds no registered shared writing task, grade, programme allocation or claim of mastery. The existing five specialist project briefs keep their earlier preparation and remain open choices. The online addition also postdates the retained draft PDF.
