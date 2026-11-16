
# Applied Modeling: Control, Biological Inversion, and Financial Model Risk

<!-- euler-course-route -->

## Current course route

This is an Outline seminar in a selected theme. Use its [course page](#/courses/atlas-applied-modeling-specialist) for the preparation courses, then attempt the mathematical investigations below. A general graduate chapter syllabus has not yet been assigned.

Preparation courses: [Applied Modeling: Identification, Inversion, and Validation](#/courses/atlas-applied-modeling-advanced) · [Dynamical systems](#/courses/course-dynamical-systems).

The earlier mathematical explanations, proofs, assignments and complete solutions remain below with their original task identities. Their first-attempt, comparison and correction requirements still apply when you choose that earlier work. Existing notes and study marks keep their original scope.

A supply policy can be optimal while using tomorrow's information today. A biological curve can be fitted exactly while the population is wrong by a factor of three. A price can exclude arbitrage without forecasting the most likely outcome. Research modelling starts by separating those claims, and continues by producing objects another reader can check: a feasible flow and matching cut, a policy information set, a symmetry and an experiment that breaks it, or a statewise hedge.

This course develops **domain-specific research models with accountable evidence and limitations** through sustained control, mathematical biology, and economics/finance lanes. It completes fixed versions of the native synthesis chapter's **Capstone B: resilient supply network**, **Capstone C: inverse biological model**, and **Capstone E: financial model-risk audit**. Each primary, changed and public-return investigation contains all three. General teaching connects their finite certificates to reachability, observation, optimal control, inverse fibres, nonanticipativity, convex separation and risk. This is a graduate working course, with beta sources and unknown full workload. It makes no claim to qualify every scientific domain, an entire reference book, or professional practice.

## AMS-M0 — Readiness and ordered repairs

Bring the [advanced applied modelling course](#/courses/atlas-applied-modeling-advanced): observation-map identification, sensitivity, weighted regularization, validation protocols and reproducible inverse work. Keep its completed inverse clinic and the [core's cooling/model-compute-decide models](../books/applied-modeling-proof-reference/synthesis-projects-solutions.md) as preparation. The cooling action law was given, not measured by the baseline fit. Here the supply, biological and market models have different domain questions; no cooling recalibration is charged as specialist work.

Attempt these questions in order before their corresponding units. A missing answer selects a repair, not an admission score.

1. An inventory count omits outstanding deliveries. Give two histories with the same count but different next feasible states. Write when each datum becomes available.
2. For $A=\begin{pmatrix}0&1\\0&0\end{pmatrix}$, $B=(0,1)^T$, $C=(1,0)$, compute controllability and observability matrices. What does neither rank calculation establish about bounded actuators?
3. For $x'=u$ on $[0,T]$, prove $\int_0^T u^2dt\geq (x(T)-x_0)^2/T$ and identify equality. What control class makes the integral meaningful?
4. For $y=qI$ with unknown $q>0$, exhibit a one-parameter family preserving the observation. Does repetition of that same measurement break the family?
5. A bond pays one and a stock pays $(0,1,2)$; their prices are $(1,1)$. Solve for all positive state prices. Are they physical event probabilities?
6. A two-asset symmetric covariance has diagonals $a,b>0$ and off-diagonal $c$. State the PSD test. For a discrete loss distribution, explain why $E[L\mid L\geq VaR_\alpha]$ need not average exactly the worst $1-\alpha$ mass.

**Complete diagnostic key.** (1) On-hand one with two units arriving before demand differs from on-hand one with no delivery. The pipeline and its delivery times belong in state; a decision can use only information timestamped at or before its node. (2) $[B,AB]=\begin{pmatrix}0&1\\1&0\end{pmatrix}$ and $[C;CA]=I$, both rank two. They concern exact unconstrained LTI dynamics and noiseless history, not actuator capacity, sensor quality or safe trajectories. (3) Cauchy–Schwarz for $u\in L^2[0,T]$ gives $(\int u)^2\leq T\int u^2$; equality holds exactly for a constant control almost everywhere. (4) $(I,q)\mapsto(cI,q/c)$ preserves $y$ for positive $c$ within the parameter domain. Replicates improve precision of that product without adding a separating coordinate. (5) $(q_0,q_1,q_2)=(t,1-2t,t)$, $0<t<1/2$. State prices value state payoffs; their normalization happens to sum to one at this zero bond rate. They need not describe frequencies. (6) PSD is equivalent to $ab-c^2\geq0$ with the stated positive diagonals. A quantile atom can be too large; allocate only the needed fraction of its probability mass to expected shortfall.

**Repair order.** First use the applied [diagnostic Questions 1–10](../books/applied-modeling-proof-reference/prerequisite-diagnostic-and-repair.md), its adjacent answers and named repairs for kernels, covariance, Jacobians, constrained minima and conditioning. Next read the first six chapters in the table below **in their listed order**. Then complete the control structural/energy repairs before LQR; complete probability, conditional expectation and finite sums before scenario decisions; complete positive ODE solutions and derivatives before the biological observation audit; complete linear systems and covariance before markets. The control [complete worked problems](#/books/differential-equations-verified-dynamics), especially 6, 8–10, 12 and 16, repair the exact calculations. [Optimal control](#/books/differential-equations-verified-dynamics) Problems 1 and 8 repair energy and Riccati signs. Use the advanced inverse course's kernel, SVD and weighted-unit repairs if those are still new; numerical rank without meaningful scaling is insufficient.

Basic programming is a genuine prerequisite for the required public engine and independent reproduction below. Be able to run plain JavaScript in an existing Node.js environment, decode JSON and explain a failed assertion. The exact hand models support interpretation but do not waive the assigned software and refinement work. No browser installation, external dataset or package is required. The minimum package is pure finite arithmetic; measure theory, general PDEs and continuous-time stochastic calculus enter only explicitly named continuations.

## AMS-M1 — Complete native selections and capstone contract

Read Chapters 1–6 completely before any capstone, then the three named application chapters (network, biology and finance) completely. This satisfies the native synthesis requirement of its first six modelling chapters plus at least two application chapters. The extra control, optimization and computation selections supply actual teaching rather than topic-map orientation. Exact assignments and their public keys are:

| Selection | Native teaching and assigned questions | Complete feedback location |
| --- | --- | --- |
| AMS-S01 | [Model contracts](../books/applied-modeling-proof-reference/model-contracts.md), whole chapter; Exercises 1, 5, 7, 9, 10 | Solutions sketch with matching numbers, completed by the contract and moment counterexample below |
| AMS-S02 | [Dimensions and scales](../books/applied-modeling-proof-reference/dimensions-scales-similarity.md), whole chapter; Exercises 2, 3, 5, 6 | Answers 2, 3, 5, 6: oscillator, lost order, diffusion time and queue scale |
| AMS-S03 | [Uncertainty and evidence](../books/applied-modeling-proof-reference/uncertainty-evidence-claims.md), whole chapter; Exercises 2, 4, 8, 10 | Answers 2, 4, 8, 10 and the full conditional-variance/Brier derivations in that chapter |
| AMS-S04 | [Sensitivity and conditioning](../books/applied-modeling-proof-reference/sensitivity-conditioning.md), whole chapter; Exercises 6, 7, 9, 10 | Answers 6, 7, 9, 10, including the tied minimax-regret actions |
| AMS-S05 | [Identification and inverse problems](../books/applied-modeling-proof-reference/identifiability-inverse-problems.md), whole chapter; Exercises 2, 3, 4, 7, 11, 12 | Answers 2, 3, 4, 7, 11, 12; advanced prerequisite supplies the full existence/kernel proof for 2 |
| AMS-S06 | [Validation and causal boundaries](../books/applied-modeling-proof-reference/validation-causal-boundaries.md), whole chapter; Exercises 1–3 | Answers 1–3; each investigation supplies a complete fixed validation matrix |
| AMS-S07 | [Optimization and certificates](../books/applied-modeling-proof-reference/optimization-duality-certificates.md), convexity through LP bounds; Exercises 1, 7, 8, 14 | Complete solutions 1, 7, 8, 14 |
| AMS-S08 | [Networks](../books/applied-modeling-proof-reference/networks-flow-diffusion.md), whole chapter; Exercises 1–7 | Complete solutions 1–7; flow and cut details also below |
| AMS-S09 | [Dynamic decisions](../books/applied-modeling-proof-reference/dynamic-stochastic-decisions.md), whole chapter; Exercises 3, 5, 10, 15, 16 | Answers 3, 5, 10, 15, 16: recursion, contraction, information bound, atomic CVaR and Bayes update |
| AMS-S10 | [Control, reachability and observation](#/books/differential-equations-verified-dynamics), Sections 1–10 and 12–14; Worked problems 6, 8, 9, 10, 12, 16, 18 | Adjacent complete Solutions at those stable numbered headings |
| AMS-S11 | [Robust sampled control](#/books/differential-equations-verified-dynamics), whole chapter; Exercises 7, 9, 19 | Adjacent complete worked solutions; the exact continuous/intersample proof below completes selected 19 |
| AMS-S12 | [Optimal control](#/books/differential-equations-verified-dynamics), whole chapter; Exercises 1, 8, 10, 19 | Adjacent complete worked solutions; the required Riccati/state refinement below completes selected 19's numerical audit |
| AMS-S13 | [Biological mechanisms](../books/applied-modeling-proof-reference/biology-epidemics-mechanisms.md), whole chapter; Exercises 1, 3, 8, 11, 13, 16 | Answers 1, 3, 8, 11, 13, 16; full simplex and observation reasoning below |
| AMS-S14 | [Finance and model risk](../books/applied-modeling-proof-reference/finance-pricing-risk.md), whole chapter; Exercises 6–8, 12–15, 18 | Complete solutions 6–8, 12–15, 18; the concrete rolling/stress protocol below supplements 18 |
| AMS-S15 | [Reproducible model computation](../books/applied-modeling-proof-reference/reproducible-model-computation.md), whole chapter; Exercises 1–4 | Answers 1–4; the required bounded engine implements a chosen fixed computation, not the full book laboratory |
| AMS-S16 | [Synthesis projects](../books/applied-modeling-proof-reference/synthesis-projects-solutions.md), Purpose, Solution standard, Capstones B/C/E and Oral/written defense prompts; Cumulative review Exercises 1–4 | Native Solution sketches 1–4, expanded by this course's complete proofs, portfolios and claim ledgers |

The exact source exercise count is 78, in addition to three selected synthesis capstones and the new cumulative work. The count is an inventory, not a workload estimate. Source tasks already completed in the prerequisite can use the retained first/comparison/revised portfolio, with exposure stated and the new domain explanation added. Do not silently erase or overwrite earlier work.

**Completion boundary.** The larger native network Project (eight vertices and diffusion), biology Project (SIR/SEIR with seeded delayed reports and numerical singular-direction experiments), dynamic-decisions Project (three-state two-stage full policy tree), finance Project (two-period multi-security market), and synthesis Capstones A/D are **unselected continuations**, each retaining its original obligations. We complete precisely the smaller but genuine native synthesis B/C/E briefs, not those larger projects. The required scalar LQR Problem 19 and sampled-loop Problem 19 are selected in full; their public executable audit is compulsory.

For every AMS-P/C/R report submit twelve numbered deliverables: (1) domain question, target and model-use contract; (2) units, state/observation/control diagrams or complete text equivalents and information timestamps; (3) general theorem dependencies and hypotheses; (4) full feasible edge-flow and cut certificates in all scenarios plus both capacity transfers; (5) full stocking objective table, nonanticipativity, hindsight and mean-input comparison; (6) continuous-control optimum, bounded-input case and required numerical refinement ledger; (7) biological nondimensional derivation, observation fibre and three-point profile; (8) extra-measurement rank and singular-direction calculation, with a predictive/causal distinction; (9) market prices, statewise replication or open interval and closed hedging bounds, including changed trading constraints; (10) physical moments, stressed covariance, quantile/ES and chronological audit design; (11) required software output, independent comparison and failure controls; (12) evidence/uncertainty/claim/validation ledger and dated first/comparison/revised records. All fields have public models below. Units or hypotheses which do not apply must be marked with a reason rather than left blank.

## AMS-M2 — Control and evidence: general teaching with certificates

### Model contracts and native-key supplements

Write $M=(Q,\Omega,T,X,U,\Theta,Y,F,H,I,L,C,V)$ as in the native contract chapter. For our supply model, $Q$ asks the minimum expected one-episode synthetic cost; $\Omega$ is exactly the three declared scenarios; time has a before-disruption stocking node and an after-disruption routing node; $X$ contains network state and already delivered sink stock; $U$ is the listed integer stocking set and feasible flow; $H$ reveals the disruption only at the routing node; $I$ forbids using it to choose stock; $L$ combines declared stocking and shortage charges; $C$ contains capacities and nonnegativity; $V$ is internal certificate checking plus an explicit future real-data plan. There is no represented road travel time or empirical demand law. In the biology model, $H$ includes ascertainment and calibration; in the market model, prices, admissible trading and physical probabilities have separate entries. A perfectly computed $F$ cannot validate a false $H$.

This also completes selected contract Exercise 1's chain: a phone routing graph can omit unmeasured roads at representation, selectively sample drivers at observation, extrapolate stale speeds at prediction and alter congestion at decision. Each is a separate testable failure. Exercise 5 has observations $\min(D,10)=10$ both for $D=10$ and $D=50$; a censored sale is not a demand measurement. Exercise 7 uses information from noon for a 9 a.m. action and violates adaptation. Exercise 9 separates an exact cut bound, a future-capacity forecast, an edge intervention and a choice of objective/authority. For Exercise 10 an explicit equal-moment pair is $L_A=\pm1$ equiprobably, versus $L_B=0$ with probability $0.99$, $\pm10$ each with probability $0.005$. Both have mean zero and variance one. At $\alpha=0.99$, left-quantile VaR is 1 for A and 0 for B; worst-one-percent ES is 1 for A and 5 for B. Moment equality does not determine tail risk.

### Reachability, observation and why energy has units

For constant real $A,B$, input $u\in L^2[0,T]$ and $T>0$, variation of constants gives the reachable displacement $Ru=\int_0^T e^{(T-t)A}Bu(t)dt$. Cayley–Hamilton places every $e^{sA}B$ in the span of $B,AB,\ldots,A^{n-1}B$, so every reachable displacement lies in that column space. Conversely the Gramian $W=RR^*=\int_0^T e^{sA}BB^Te^{sA^T}ds$ satisfies

$$v^TWv=\int_0^T\|B^Te^{sA^T}v\|^2ds.$$

If this vanishes, the continuous nonnegative integrand vanishes, so all its derivatives at zero imply $v^TA^kB=0$. Full Kalman rank therefore makes $W$ positive definite. The control $u_*=R^*W^{-1}z_f$ reaches $z_f$; for any other reaching control, $R(u-u_*)=0$ and $\langle u_*,u-u_*\rangle=z_f^TW^{-1}R(u-u_*)=0$. Pythagoras proves minimum energy $z_f^TW^{-1}z_f$. This is existence and global minimality in the unconstrained linear problem, not permission to use arbitrarily large physical inputs.

For the double integrator, $W=\begin{pmatrix}T^3/3&T^2/2\\T^2/2&T\end{pmatrix}$, determinant $T^4/12>0$, and $W^{-1}=\begin{pmatrix}12/T^3&-6/T^2\\-6/T^2&4/T\end{pmatrix}$. Reaching $(d,0)$ costs $12d^2/T^3$: shrinking the horizon makes energy grow although rank remains full. Position, velocity and control units must be transformed with their metrics. With zero known input, indistinguishable initial differences satisfy $Ce^{tA}v=0$. Differentiating at zero and applying Cayley–Hamilton gives $CA^kv=0$ for $k<n$, precisely the kernel of the observability matrix. This proves the ideal rank criterion, and explains why repeated samples with no separating direction cannot recover hidden biology.

An unreachable unstable mode prevents stabilization; an unobserved unstable mode prevents decaying observer error. Stable hidden modes can leave the pair stabilizable/detectable without full rank. For known direct feedthrough $D$, subtract it in the observer innovation: $e'=(A-LC)e$. Under estimated-state feedback, $(z,e)$ dynamics are block triangular with diagonal blocks $A-BK,A-LC$, proving the selected separation-spectrum answer. This spectrum concerns the exact LTI model; saturation, delay and shared model error couple the actual experiment.

### Finite-horizon control: existence and sufficiency, not only stationarity

For $x'=u$, $x(0)=x_0$, $T,r,s>0$, minimize

$$J=\frac{s}{2}x(T)^2+\frac r2\int_0^T u(t)^2dt,$$

over $L^2$ controls. Put $v=\int_0^T u$. Cauchy–Schwarz reduces the entire problem to the coercive strictly convex scalar quadratic $s(x_0+v)^2/2+rv^2/(2T)$. Its minimizer is $v_*=-sTx_0/(r+sT)$ and is attained by the constant $u_*=-sx_0/(r+sT)$. Thus

$$x_*(t)=x_0\frac{r+s(T-t)}{r+sT},\quad P(t)=\frac{sr}{r+s(T-t)},\quad J_* =\frac{sr x_0^2}{2(r+sT)}.$$

$P'=P^2/r$, $P(T)=s$, and $u=-P(t)x/r$ agrees with the constant control. More generally, differentiating $P x^2/2$ and using the Riccati equation completes the square:

$$J=\frac{P(0)x_0^2}{2}+\frac r2\int_0^T(u+P(t)x/r)^2dt.$$

This proves sufficiency and uniqueness almost everywhere. Under $|u|\leq M$, $v\in[-MT,MT]$ and the same reduction proves the optimum is constant $u=\operatorname{clip}(-sx_0/(r+sT),-M,M)$, with $x_T=x_0+Tu$ and $J=sx_T^2/2+rTu^2/2$. This clipping is justified by this special Jensen reduction; clipping arbitrary nonlinear/Pontryagin extremals is not justified. The running state weight here is zero; infinite-horizon stabilizing Riccati claims still require stabilizability/detectability and are not imported from this finite example.

**Required native LQR refinement.** For the native Problem 19 instance $r=s=1$, numerically integrate $P'=P^2$ backward, then integrate $x'=-P x$ forward, at $N=8,16,32$ on the declared $T$ in each portfolio. The public engine returns every endpoint and error against the exact formula, using bounded binary64 recurrence values, with the roundoff allowance stated below. Set $h=T/N$, $P_N=1$, $P_j=P_{j+1}-hP_{j+1}^2$, then $X_0=x_0$, $X_{j+1}=X_j(1-hP_j)$. This is explicit Euler with a backward terminal integration, followed by a left-node forward integration; it is not the exact optimal feedback. All listed $h\leq3/8<1$ keep $0<P_j\leq1$ and $1-hP_j>0$. Submit $(N,h,P_0,X_N)$, both absolute endpoint errors, and the largest discrete state discrepancy versus $x_*(jh)$. Report the actual values from your run; do not substitute a plotted line or invent timings.

Here is an analytic error certificate independent of that run. The terminal-distance solution $p(\tau)=1/(1+\tau)$ satisfies $|p''|\leq2$. Euler's local defect has magnitude at most $h^2$, and the positive recurrence is monotone/nonexpansive on $[0,1]$ when $h\leq1/2$ because $1-2hp\in[0,1]$. Hence $|P_j-p(T-jh)|\leq Th$. The exact $x_*(t)$ is linear, so its forward Euler defect with exact left-node $p$ is zero. The error recurrence has gain at most one and forcing at most $h|x_0|Th$, yielding $\max_j|X_j-x_*(jh)|\leq |x_0|T^2h$. These conservative $O(h)$ bounds certify convergence; observed ratios are evidence about these runs, not an unproved higher-order theorem. The required oracle checks actual recurrence rows and these inequalities independently. Numerical recurrence values are binary64, rather than unrestricted rational fractions whose denominator sizes would double at every Riccati step. For the printed integer horizons and power-of-two N, h is exact. With unit roundoff u=2^-53, intermediate P in [0,1], h≤3/8, N≤32 and |x0|≤4, a conservative local P roundoff allowance is 8u. Nonexpansiveness bounds accumulated P roundoff by 8Nu. Bounding each forward product and its propagated P error gives the deliberately loose bound 64|x0|N(1+T)u<10^-10 on the state discrepancy from the ideal Euler recurrence; use an additional 10^-10 allowance on all reported comparisons. There is no underflow/overflow in these bounded loops. The oracle uses a separately implemented fixed-point recurrence with a proved rounding enclosure, not another binary64 copy of this solver. This roundoff allowance is distinct from the much larger analytic truncation bounds above.

### Sampling, saturation and a complete intersample check

For native sampled-loop Problem 19, $x'=x+u$, $|u|\leq1$, held command $u_k=-2x_k$ gives

$$x(kT+\tau)=(2-e^\tau)x_k,\quad 0\leq\tau\leq T;\qquad x_{k+1}=(2-e^T)x_k.$$

On $|x_k|\leq1/2$ the command is admissible. If $0<T<\log3$, the sampled multiplier has magnitude below one and maps that interval into itself. Since $2-e^\tau$ is decreasing, its absolute value has maximum at one of the interval endpoints, both at most one. Thus the entire intersample trajectory remains in $[-1/2,1/2]$ here. This is a complete analytic certificate for this scalar example; general safe sampled endpoints alone do not imply safe trajectories.

Use three exact periods $\log2,\log3,\log4$. Their sample multipliers are respectively $0,-1,-2$. Starting at $x_0=1/4$, two held intervals yield sample sequences $(1/4,0,0)$, $(1/4,-1/4,1/4)$, $(1/4,-1/2,1)$ under the nominal **unsaturated** recurrence. At $\log3$ there is no asymptotic decay; at $\log4$ the nominal command after the second step would exceed the actuator bound. The public engine records these exact samples, endpoint maximum and command-admissibility status; it also produces the requested refined $\tau$ grid through $e^{m\log(b)/16}=b^{m/16}$. Compare grid peaks to the endpoint bound and mark the third case outside the certified local claim. A grid is useful numerical evidence; the monotone formula supplies the intersample proof. With actual saturation beyond the boundary, use $x_{k+1}=e^T x_k+(e^T-1)\operatorname{clip}(-2x_k,-1,1)$, rather than extending the unsaturated multiplier.

### Scenario control, certificates and decision margins

For finite states/actions/horizon, conditioning on the first action and next state proves Bellman's recursion. Backward induction produces a feasible optimal policy because a minimum of a finite set is attained; replacing any nonoptimal continuation improves it. In our two-node network tree, stock $x$ is shared across all scenarios and routing is scenario recourse. A scenario-specific $x_\omega$ is a wait-and-see bound, not an implementable policy. Under a declared probability vector, $E[\min L]\leq\min E[L]$ pointwise proves nonnegative information value. Robust optimization uses a maximum over the scenario set; no probability can be invented from a list of scenarios.

For discounted finite problems with bounded values and $0\leq\gamma<1$, the min/max inequality and stochastic row sums give $\|TV-TW\|_\infty\leq\gamma\|V-W\|_\infty$. Therefore $\|V-V_*\|\leq\|TV-V\|/(1-\gamma)$. A bound $\epsilon$ on value error permits errors as large as $2\gamma\epsilon$ in two action continuations; report action gaps before certifying a greedy switch. None of this validates the transition law. For partial observation, predict $\tilde b(s')=\sum_sP(s'|s,a)b(s)$ and update $b'(s')\propto P(o|s',a)\tilde b(s')$ only under controlled Markov transitions and the declared conditional-independent observation model. Our network scenario becomes fully observed before recourse; it is not a hidden-state application by implication.

## AMS-M3 — Biological inversion and financial model risk

### A biological mechanism, a sensor and an exact ambiguity

For a closed single population, choose the **logistic** mechanism

$$I'=rI(1-I/K),\qquad I(0)=I_0,\qquad 0<I_0<K,\quad r,K>0.$$

$I$ and $K$ have organism-count units, $r$ inverse-time units. The model omits migration, changing environment, age structure and density-dependent ascertainment. Positive local solutions exist uniquely because the vector field is locally Lipschitz; uniqueness prevents crossing the equilibria $0,K$, so $0<I(t)<K$ for all $t\geq0$. Boundedness extends the local solution to every finite positive time by the standard finite-dimensional continuation theorem. These existence/continuation results are imported with their actual locally-Lipschitz/bounded-trajectory hypotheses; the explicit solution below independently verifies this chosen case. Put $z=I/K$, $\tau=rt$. Then $dz/d\tau=z(1-z)$, and separation on $0<z<1$ gives

$$I(t)=\frac{KI_0e^{rt}}{K+I_0(e^{rt}-1)}.$$

The denominator is strictly positive. Direct substitution checks the equation, initial condition, monotone growth and limit $K$. At observation spacing $\Delta$, $g=e^{r\Delta}>1$ is dimensionless, so $I_j=KI_0g^j/[K+I_0(g^j-1)]$ is exact rational arithmetic when the printed $g,I_0,K$ are rational. No approximation to $\log g$ is needed for those grid values. $r=\log g/\Delta$ remains a model parameter with units.

Our sensor gives **expected scaled reports** $y_j=qI_j$, $0<q\leq1$. Fractional values are permitted means, not fabricated people or simulated count observations. No Poisson sampling law, uncertainty interval or clinical effect is supplied. For every positive $c$ with $q/c\leq1$,

$$(I_0,K,q)\mapsto(cI_0,cK,q/c)$$

preserves every expected report and scales every latent population by $c$. This is structural nonidentification even with infinitely many exact reports. Let $A=qI_0$, $B=qK$. With fixed known $g$, $y_0=A$ and $y_1=BAg/[B+A(g-1)]$ determine

$$B=\frac{Ay_1(g-1)}{Ag-y_1},$$

provided $0<A<y_1<Ag$; the later rows test this two-combination representation. With unknown $g$, additional times are needed, and rank must be rechecked; we do not pretend fixed growth was estimated here. The profile $\min_{I_0,K}\sum_j(y_j^{model}-y_j)^2$ is identically zero along $(I_0,K)=(A/q,B/q)$ over admissible $q$, not narrowly peaked at the printed generating $q$. The portfolio shows three actual profile values and distinct unobserved states.

A calibrated independent observation $z_0=I_0$ breaks this fibre: $q=A/z_0$, $K=B/q$. Independence here means a distinct stipulated observation equation, not statistically independent random errors or observed field validation. The sensor must truly measure the same population/time with known units and ascertainment. A biased calibration can produce a uniquely wrong answer.

For a quantitative direction audit use log coordinates $(\log I_0,\log K,\log q)$ and log-combination observations $(\log A,\log B)$. The Jacobian

$$H=\begin{pmatrix}1&0&1\\0&1&1\end{pmatrix}$$

has $H^TH$ eigenvalues $3,1,0$. The unit null direction $v=(-1,-1,1)/\sqrt3$ changes scale and ascertainment without changing reports. Adding $\log z_0=\log I_0$ appends $(1,0,0)$ to form $J$. Then $\|Jv\|^2=1/3$, $\det J=-1$ and $J^TJ=\begin{pmatrix}2&0&1\\0&1&1\\1&1&2\end{pmatrix}$. Its determinant is one and trace five, so if its positive eigenvalues are $\lambda_1\leq\lambda_2\leq\lambda_3$, then $\lambda_2\lambda_3\leq25/4$ and **$\lambda_1\geq4/25$**. This is a rigorous scaled smallest-singular-value-squared lower bound, rather than an invented numerical SVD. It measures this log-coordinate observation contract, not arbitrary noise or raw-count conditioning. With a calibration row scaled by a small reliability weight, its information contribution shrinks; adding an unreliable stream need not yield the same bound.

The native SIR exercises teach a different mechanism. With locally Lipschitz SIR dynamics and nonnegative initial data, boundary derivatives and uniqueness keep $S,I,R\geq0$, while summing gives constant $N$. The compact simplex yields global continuation. Scaling fractions and $\tau=\gamma t$ leaves $R_0=\beta/\gamma$; its local threshold is not a case-peak or final-size forecast. The native next-generation example has roots $1.1,0.4$, and delayed-report Exercise 13 gives $q[.25(40)+.5(80)+.25(120)]=40$ at $q=.5$. Delays, heterogeneous reporting and interventions would change our $H$; logistic reports are not secretly incident cases. Forecast fit cannot identify an intervention effect, and the full SIR/SEIR computational Project remains separate.

### A finite market and a proof with a changed trading cone

Take three exhaustive model states $0,1,2$ at a single settlement time. A zero-rate bond pays $(1,1,1)$ at price one; a stock pays $(0,1,2)$ at price $p\in(0,2)$. Initially allow real holdings and unrestricted borrowing/shorting, frictionless synchronous prices, enforceable settlement and no default. An arbitrage has nonpositive initial cost and componentwise nonnegative future payoff, with a strict gain initially or in at least one state. These are assumptions of a mathematical market, not claims about real quotes.

The positive state prices are

$$q(t)=(1-p+t,p-2t,t),\qquad \max(0,p-1)<t<p/2.$$

For any portfolio $h$, $p_{assets}^Th=q^TXh$. Strictly positive $q$ rules out arbitrage because a nonzero nonnegative payoff has positive value. For a general finite market, the converse uses the finite-dimensional strict-separation/no-arbitrage theorem with its unrestricted linear trading hypotheses; it is imported here, not inferred from a floating solver. In this chosen market we solve and check all positive vectors directly.

For digital claim $c=(0,0,1)$, its compatible price is $t$. Thus the **arbitrage-free interval is open**, $(\max(0,p-1),p/2)$. The closure consists of hedge bounds. At $p=1$, the zero payoff subhedges $c$ at cost zero, and $\frac12$ stock superhedges it at cost $1/2$. At price zero the claim itself is an arbitrage; at price $1/2$, long half a stock and short the claim has zero cost and strictly positive payoff in state 1. Endpoints therefore are not arbitrage-free prices under the stated convention. At $p=3/2$, the lower subhedge $-1$ bond plus one stock pays $(-1,0,1)$ at cost $1/2$; the upper half-stock hedge costs $3/4$. Both bounds are attained hedging costs while arbitrage-free claim prices lie strictly between.

In the changed complete market add a security $D=(0,1,0)$ at price $d=1/2$, keeping stock price one. Then $q=(1/4,1/2,1/4)$ is uniquely strictly positive. The chosen claim $(1,2,4)$ is replicated by **one bond, $3/2$ stock, $-1/2$ D**; the statewise payoffs are $(1,2,4)$ and the unique price is $9/4$. This is a genuine solve, not a claim named identical to the new security. If two portfolios replicate the same payoff at different prices, buying the cheaper and shorting the dearer yields an arbitrage; statewise equality, not a physical probability, fixes the price.

For the return **change the admissible cone**: bond and stock holdings must be nonnegative, while the digital claim can be bought or sold. Stock price remains $3/2$. A short claim must be covered by $B,S\geq0$ satisfying $B\geq0$, $B+S\geq0$, $B+2S\geq1$. Minimizing $B+(3/2)S$ gives $B=0,S=1/2$, cost $3/4$. A long claim with nonnegative assets has strictly positive cost if its price is positive. Any portfolio short the claim scales to such a superhedge, so positive claim prices below $3/4$ exclude arbitrage in this cone. At zero or below, buying the claim is an arbitrage; at $3/4$ or above, the superhedge minus claim is an arbitrage. Thus the constrained interval is **$(0,3/4)$**, and the attainable lower subhedge is zero, whereas the unrestricted interval was $(1/2,3/4)$. The old lower hedge needed a forbidden short bond. Reusing the unrestricted state-price equivalence without deriving the new cone would be wrong.

### Physical moments, tail atoms and accountable financial evidence

Use a **separate physical scenario law** $\pi$ for two one-period arithmetic returns. It is supplied, not estimated from quotes. For $R=(R_1,R_2)$, compute $m=\sum\pi R$ and $\Sigma=\sum\pi(R-m)(R-m)^T$. For any $w$, $w^T\Sigma w=E[(w^T(R-m))^2]\geq0$. For fully invested weights $(w,1-w)$ the variance is $aw^2+b(1-w)^2+2cw(1-w)$. If $a+b-2c>0$, the unconstrained minimum has $w=(b-c)/(a+b-2c)$; restricting $0\leq w\leq1$ projects this value to that interval by convexity. If the denominator vanishes, returns differ by an almost-sure constant and the quadratic is constant/linear under the compatible PSD conditions; our engine rejects that unsupported degenerate branch rather than dividing by zero.

The fixed returns are $(-1/10,0,1/5)$ and $(1/10,1/20,-1/10)$. They are dimensionless returns over the same synthetic horizon. The portfolios change physical probabilities and a covariance stress while preserving those state returns. A stressed covariance preserves the derived diagonals but replaces the cross term; require $ab-c_{stress}^2\geq0$. This creates a declared moment scenario, **not a claim that the original three-state distribution has that new covariance**. An off-diagonal $1/50$ violates PSD in all three portfolios; an optimizer must reject it. The physical law never substitutes for state prices in the replication or digital price calculation.

Define left-quantile $VaR_\alpha=\inf\{l:P(L\leq l)\geq\alpha\}$. To compute ES, sort losses descending and take exactly $1-\alpha$ mass, taking a fractional share of a boundary atom. At $\alpha=3/5$, losses $(0,2,20)$ and probabilities $(1/2,1/4,1/4)$ have VaR 2 and ES $[(1/4)20+(3/20)2]/(2/5)=53/4$. Replacing 20 by 200 leaves VaR 2 and makes ES $503/4$. Conditioning on $L\geq2$ would include half the mass and give 11, which is not this 60%-ES. Losses use synthetic loss units, not the dimensionless returns unless a position/wealth map is explicitly supplied; here they are an additional risk fixture.

**A complete real-use audit design, not performed evidence.** Freeze target/horizon/currency, positions, settlement, return and loss conventions, data-license/provenance, timestamp/corporate-action/missingness rules and admissible leverage. Reserve chronological blocks before fitting. At each origin estimate means/covariance from past observations only, freeze weights/exposures before the next block, retain realized losses, forecasts and all rejected fits, then compare covariance forecasts, quantile exceedance count **with sampling uncertainty**, clustering, conditional group performance and tail severity. Stress correlations, spread/liquidity, funding/default, jumps and position costs separately; a historical frequency match cannot establish stationarity or no-arbitrage execution. Predeclare an acceptance boundary and a fallback (for example, stop issuing the model decision if PSD fails or an exposure/timing contract changes); thresholds require the intended decision authority and independent real evidence, not this author's arbitrary numbers. The present fixtures have no market measurements, out-of-sample results, approvals or investment recommendations. This is educational mathematics, not personalised financial advice.

## AMS-P001 — Primary cumulative research portfolio

Complete all twelve deliverables before reading the public model. All inputs below are **authored synthetic assumptions**. Stock is prepositioned at the demand sink before the disruption, with no deterioration, travel time, per-period capacity renewal or further order opportunity. After the scenario is revealed, choose a feasible flow and pay shortage on $\max(0,D-F-x)$. Shortage is permitted at the stated penalty; it is not a hard demand guarantee. Stock cannot flow back into the network. $x\in\{0,1,2,3\}$ is one shared time-zero choice. Network units are volume per episode; stock and demand are volume units. Costs and probabilities are stipulated; no observation identifies their intervention response.

AMS-P001-DATA
~~~json
{"case_id":"AMS-P001","network":{"capacities":[4,3,2,2,5],"probabilities":["1/2","1/4","1/4"],"demand":6,"stock_cost":"1","penalty":"5"},"control":{"x0":"3","T":"2","r":"1","s":"1","bound":"2"},"biology":{"I0":"10","K":"100","q":"1/2","growth":"2","profile_q":["1/4","1/2","1"]},"finance":{"stock_price":"1","complete":false,"claim":["0","0","1"],"D_price":null,"probabilities":["1/2","1/4","1/4"],"returns":[["-1/10","1/10"],["0","1/20"],["1/5","-1/10"]],"stress_cov":"1/100","losses":["0","2","20"],"alpha":"3/5","no_short_assets":false}}
~~~

### Complete primary model: network and control

The edge order everywhere is $(s\!a,s\!b,a\!b,a\!t,b\!t)$. Scenarios are base, loss of $s\!b$, and loss of $a\!b$, with the printed physical probabilities. A cut is $S$ containing $s$ and excluding $t$; its capacity upper-bounds every flow by summed conservation. The four candidate cuts $\{s\},\{s,a\},\{s,b\},\{s,a,b\}$ have capacities $(s_a+s_b,s_b+a_b+a_t,s_a+b_t,a_t+b_t)$. The following feasible flow/cut equalities certify exact maxima without trusting software.

| Scenario | Feasible edge flow | Flow F | Matching cut | Cut capacity |
| --- | --- | --- | --- | --- |
| base | (4,3,2,2,5) | 7 | {s} | 7 |
| lost s-b | (4,0,2,2,2) | 4 | {s} | 4 |
| lost a-b | (2,3,0,2,3) | 5 | {s,a} | 5 |

Flow conservation holds at $a,b$ in each row, and every component lies between zero and its scenario capacity. Increasing $a_t$ from 2 to 3 alone leaves maximum flow 7 because source cut $\{s\}$ binds. Reducing $a_b$ from 2 to 1 changes the minimum cut to $\{s,a\}$ of capacity 6, with feasible flow $(3,3,1,2,4)$. Increasing both $s_a$ to 5 and $a_t$ to 3 instead permits $(5,3,2,3,5)$ of value 8 with a capacity-8 cut. These are structural counterfactuals of this recorded graph; actual road/facility responses need new evidence.

| Stock x | Scenario shortages (base,lost s-b,lost a-b) | Expected total cost | Worst total cost |
| --- | --- | --- | --- |
| 0 | (0,2,1) | 15/4 | 10 |
| 1 | (0,1,0) | 9/4 | 6 |
| 2 | (0,0,0) | 2 | 2 |
| 3 | (0,0,0) | 3 | 3 |

Expected and worst-case criteria both choose $x=2$ here. The expected second-best cost is $9/4$, so its action margin is $1/4$. The deterministic equivalent has one $x$ and scenario recourse $z_\omega\geq D-F_\omega-x$, $z_\omega\geq0$, objective $cx+\sum\pi_\omega h z_\omega$. Integer enumeration or piecewise-linear breakpoints yields the same table. Under perfect information, stock $(0,2,1)$ in the respective scenarios has expected cost $3/4$, an unattainable time-zero lower bound; EVPI is $2-3/4=5/4$. The mean-throughput shortcut uses $E[F]=23/4$, deficit $1/4$ and chooses integer stock one (mean-model costs $5/4,1,2,3$). Its true expected cost is $9/4$, worse by $1/4$. Neither criterion is morally preferred by its arithmetic; changing shortages' affected populations, hard service minima or demand law changes the model.

The continuous-control instance has $u_*=-1$, $x_T=1$, $J_*=3/2$ with bound 2 inactive. Its trajectory is $x(t)=3-t$. The native $r=s=1$ Riccati reference has $P(0)=1/3$. Required $N=8,16,32$ runs produce the recurrence ledger and error certificates in AMS-M2. They reproduce a chosen solver, not a measured engineering response. For sampled-loop Problem 19, run the three periods and grid exactly as specified; retain the failure at $\log4$.

### Complete primary model: biology, valuation and risk

Here $\Delta=1$ model time unit and $r=\log2$ per unit. The dimensionless initial state is $1/10$. The biological grid and report profile are:

| Grid j | Latent I_j | Report mean y_j |
| --- | --- | --- |
| 0 | 10 | 5 |
| 1 | 200/11 | 100/11 |
| 2 | 400/13 | 200/13 |
| 3 | 800/17 | 400/17 |

$A=5,B=50$ are the identified combinations. Profile choices $q=(1/4,1/2,1)$ give $(I_0,K)=(20,200),(10,100),(5,50)$ and squared-report losses $(0,0,0)$. At $j=3$ the first latent state is $1600/17$ versus the generating $800/17$, while every report agrees. The added calibrated $z_0=10$ fixes $q=1/2,K=100$; the log-coordinate rank and $\lambda_{\min}\geq4/25$ calculation in AMS-M3 applies. For a proposed density-reduction intervention, $r,K,q$ may change; the identical observational curve identifies no causal response.

The incomplete market has strictly positive $q=(t,1-2t,t)$, $0<t<1/2$; the digital price interval is $(0,1/2)$, closed hedge bounds $[0,1/2]$. The two endpoint arbitrages and statewise hedge verification are given in AMS-M3. The physical scenario law is $(1/2,1/4,1/4)$; it would price the digital at $1/4$ by simple expectation, which is one compatible price here but does not prove it unique. Changing a physical probability must not narrow the whole state-price interval.

| Physical-moment quantity | Exact value |
| --- | --- |
| mean vector | (0,3/80) |
| covariance diagonals (a,b) | (3/200,43/6400) |
| covariance c | -1/100 |
| covariance determinant | 1/1280000 |
| long-only minimum-variance first weight | 107/267 |
| minimum variance | 1/53400 |
| stressed c | 1/100 |
| stressed unconstrained first weight | -21/11 |
| stressed long-only first weight and variance | 0,43/6400 |
| VaR at 3/5, ES at 3/5 | 2,53/4 |

The stress covariance remains PSD (determinant unchanged because only the sign of $c$ changed). The constrained optimizer hits the weight boundary; this is a moment-model calculation, not a recommendation. The $1/50$ covariance failure control is not PSD. The severe-tail comparison $20\mapsto200$ keeps VaR at 2 but raises ES to $503/4$. Neither an estimated covariance nor three synthetic outcomes would establish future market risk.

**Complete evidence and validation model.** Flow/cut equality verifies the graph calculation; the stock enumeration verifies nonanticipativity and the stated objective. A real supply test would need timestamped capacity, stock-location and disruption observations, demand/shortfall measurement, travel-time validation and a declared missing-edge/fallback protocol. The logistic formula verifies the selected mechanism internally; zero report loss falsifies parameter-uniqueness claims, while a truly calibrated second stream tests the missing scale. Real biological validation needs an unused population/time domain, observation-error/selection model and ethically appropriate authorized measurement; none is provided. Statewise portfolio checks verify valuation conditional on assets/trading; physical moments and ES verify finite arithmetic only. Real risk validation needs the chronological protocol above. No new human study, field measurement, market backtest or intervention authorization has occurred.

## AMS-C001 — Changed costs, biology and a complete market

Keep all twelve deliverables. The network is unchanged but stocking is now twice as costly, the biological growth/sensor/scale change, and the market gains a traded security. Complete calculations before looking at the public answer; copy neither the primary decision nor its identified parameters.

AMS-C001-DATA
~~~json
{"case_id":"AMS-C001","network":{"capacities":[4,3,2,2,5],"probabilities":["1/2","1/4","1/4"],"demand":6,"stock_cost":"2","penalty":"5"},"control":{"x0":"3","T":"2","r":"1","s":"1","bound":"1/2"},"biology":{"I0":"8","K":"80","q":"1/4","growth":"3","profile_q":["1/8","1/4","1/2"]},"finance":{"stock_price":"1","complete":true,"claim":["1","2","4"],"D_price":"1/2","probabilities":["1/4","1/2","1/4"],"returns":[["-1/10","1/10"],["0","1/20"],["1/5","-1/10"]],"stress_cov":"1/200","losses":["0","2","20"],"alpha":"3/5","no_short_assets":false}}
~~~

### Complete changed model

The primary's three flow/cut rows and both capacity transfers remain valid because all capacities, locations and episode timing are unchanged; include those exact rows with a stated reuse and reason. Shortages remain $(0,2,1),(0,1,0),(0,0,0),(0,0,0)$ at stocks $0,1,2,3$.

| Stock x | Expected total cost | Worst total cost |
| --- | --- | --- |
| 0 | 15/4 | 10 |
| 1 | 13/4 | 7 |
| 2 | 4 | 4 |
| 3 | 6 | 6 |

Expected cost chooses stock one, by margin $1/2$ to stock zero; worst cost chooses two. The two criteria now disagree. The hindsight stock $(0,2,1)$ costs expected $3/2$, giving EVPI $13/4-3/2=7/4$. The mean-throughput shortcut still has deficit $1/4$, but mean-model costs are $5/4,2,4,6$, so it chooses zero; its true cost $15/4$ exceeds the optimum by $1/2$. The shared-stock deterministic equivalent gives the same table. With generic stock cost $c>0$ and the primary probabilities, stocks zero/one/two cost $15/4,c+5/4,2c$; stock two wins for $c<5/4$, one for $5/4<c<5/2$, and zero for $c>5/2$, with the respective ties at the boundaries. This is the exact switch map under that model, not a local derivative extrapolated forever.

The continuous unconstrained control is still $-1$, but the new bound $1/2$ makes it inadmissible. Jensen's constrained proof gives $u=-1/2$, $x(t)=3-t/2$, $x_T=2$ and $J=9/4$. Report the unconstrained $3/2$ only as a lower bound. The required native Riccati/state refinement still audits the unconstrained Problem 19 $r=s=1$ reference, now explicitly distinguished from the bounded optimum. The public engine returns both; a small Riccati residual does not certify the bounded solution. Sample/hold transfer again uses the full three-period audit, including the invalid $\log4$ case.

For biology $\Delta=1$, $r=\log3$, $I_0/K=1/10$. Identified combinations are $A=2,B=20$.

| Grid j | Latent I_j | Report mean y_j |
| --- | --- | --- |
| 0 | 8 | 2 |
| 1 | 20 | 5 |
| 2 | 40 | 10 |
| 3 | 60 | 15 |

The three profile points $q=(1/8,1/4,1/2)$ give $(I_0,K)=(16,160),(8,80),(4,40)$, all exact report loss zero. The first and last latent populations at $j=3$ are 120 and 30 despite identical reports 15. The added calibrated $z_0=8$ selects $q=1/4,K=80$; the same dimensionless Jacobian audit removes the null direction with squared response $1/3$ and a smallest-squared-singular-value lower bound $4/25$. It is not appropriate to substitute the primary $q=1/2$. More accurate reports of the same product cannot supply that calibration.

The added security produces the positive state-price vector $(1/4,1/2,1/4)$. Solving the three state equations gives holdings $(B,S,D)=(1,3/2,-1/2)$, claim payoffs $(1,2,4)$, and price $9/4$. The market's physical probabilities also happen to be $(1/4,1/2,1/4)$ in this fixture. Their equality is stipulated coincidence; perturbing physical probabilities leaves traded state prices unchanged. A trader unable to short D cannot implement this exact portfolio, so the declared unrestricted convention matters.

| Physical-moment quantity | Exact value |
| --- | --- |
| mean vector | (1/40,1/40) |
| covariance diagonals (a,b) | (19/1600,9/1600) |
| covariance c | -13/1600 |
| covariance determinant | 1/1280000 |
| long-only minimum-variance first weight | 11/27 |
| minimum variance | 1/43200 |
| stressed c | 1/200 |
| stressed first weight | 1/12 |
| stressed minimum variance | 107/19200 |
| VaR at 3/5, ES at 3/5 | 2,53/4 |

The covariance stress is PSD and changes the optimum within the admissible interval. The $1/50$ failure control is again non-PSD. Retain the severe-tail $20\mapsto200$ comparison; the ES grows to $503/4$ while VaR stays 2. Finance risk results use physical probabilities; valuation uses statewise replication. Reuse the full chronological audit protocol with changed data/asset and constraint declarations rather than reporting that synthetic agreement “passed a backtest.”

**Changed evidence and fallback.** The source's stronger stocking cost is an input change, not an estimated causal effect on demand. Recheck the action gap and scenario law before reusing the policy. A true measurement of initial population is the proposed biological experiment, with an explicit calibration/selection protocol; until it exists, report the whole fibre. Added market completeness depends on a genuinely traded enforceable D payoff at the stated synchronous price; if it is unavailable or constrained, revert to the appropriate incomplete/constrained analysis. Missing travel times, unmeasured biology and real liquidity remain outside all three certificates.

## AMS-R001 — Public return with changed capacity and trading constraints

After intervening work, reconstruct all twelve deliverables before reopening a public model, recording the date and previous support exposure. This is a public return, not a protected unseen exam or enforced delay. The demand, one edge capacity, probabilities, cost, biological units/parameters and admissible trading cone now change. Never carry personal notes by position in a list: retain these stable case IDs.

AMS-R001-DATA
~~~json
{"case_id":"AMS-R001","network":{"capacities":[4,3,2,3,5],"probabilities":["1/4","1/4","1/2"],"demand":7,"stock_cost":"3/2","penalty":"4"},"control":{"x0":"-3","T":"1","r":"2","s":"1","bound":"2"},"biology":{"I0":"12","K":"60","q":"3/4","growth":"3/2","profile_q":["1/4","1/2","3/4"]},"finance":{"stock_price":"3/2","complete":false,"claim":["0","0","1"],"D_price":null,"probabilities":["1/4","1/4","1/2"],"returns":[["-1/10","1/10"],["0","1/20"],["1/5","-1/10"]],"stress_cov":"1/100","losses":["0","2","20"],"alpha":"3/5","no_short_assets":true}}
~~~

### Complete return model

At the same prepositioning/recourse times as before, the new $a_t$ capacity raises the lost-$a_b$ flow to six; base still has the source cut seven.

| Scenario | Feasible edge flow | Flow F | Matching cut | Cut capacity |
| --- | --- | --- | --- | --- |
| base | (4,3,1,3,4) | 7 | {s} | 7 |
| lost s-b | (4,0,1,3,1) | 4 | {s} | 4 |
| lost a-b | (3,3,0,3,3) | 6 | {s,a} | 6 |

Increasing $a_t$ alone from 3 to 4 has zero marginal throughput because $\{s\}$ still has capacity seven. Removing the cross-edge changes the minimum cut to $\{s,a\}$ and value six, as the third row verifies. Increasing both $s_a$ from 4 to 5 and $a_t$ from 3 to 4 gives a feasible flow $(5,3,1,4,4)$ of value eight and the source cut eight. The engine checks the first two capacity transfers explicitly; the two-edge increase is also a complete optional sensitivity witness, not a new capstone.

| Stock x | Scenario shortages | Expected total cost | Worst total cost |
| --- | --- | --- | --- |
| 0 | (0,3,1) | 5 | 12 |
| 1 | (0,2,0) | 7/2 | 19/2 |
| 2 | (0,1,0) | 4 | 7 |
| 3 | (0,0,0) | 9/2 | 9/2 |

The expected criterion selects one, margin $1/2$ to stock two; robust cost selects three. Hindsight chooses $(0,3,1)$, expected stocking cost $(3/2)(5/4)=15/8$, so EVPI is $7/2-15/8=13/8$. Mean flow remains $23/4$ but demand is seven, so the mean deficit is $5/4$. Mean-model costs $(5,5/2,3,9/2)$ choose one, whose true cost is $7/2$. Agreement of the mean shortcut on this changed case does not erase its primary/changed failures. The same one-shared-stock deterministic equivalent explains nonanticipativity.

The continuous-control instance now has $r=2,s=1,T=1,x_0=-3$. It gives $u_*=1$, $x_T=-2$, $J_*=3$, inside bound two. Its trajectory $-3+t$ has the opposite sign of the primary. The required **native** refinement is still the distinct $r=s=1$ Problem 19 benchmark on the same $T,x_0$: its exact $P_0=1/2$, $x_T=-3/2$ and constant input $3/2$ are not the new $r=2$ optimum. The code labels `native_refinement` separately and returns all three actual halving rows; mixing their targets is a failure control. The sampled-loop exact/grid audit remains required independently of this optimum.

Biological $I_0/K=1/5$, $\Delta=1$, $r=\log(3/2)$ and the identified report combinations are $A=9,B=45$.

| Grid j | Latent I_j | Report mean y_j |
| --- | --- | --- |
| 0 | 12 | 9 |
| 1 | 180/11 | 135/11 |
| 2 | 108/5 | 81/5 |
| 3 | 1620/59 | 1215/59 |

Profile $q=(1/4,1/2,3/4)$ gives $(I_0,K)=(36,180),(18,90),(12,60)$ and exact losses zero. At $j=3$, $4860/59$ and $1620/59$ differ by factor three but yield the same reports. The added calibrated $z_0=12$ fixes $q=3/4,K=60$. The same log-coordinate Jacobian, nonzero determinant and explicit singular-direction bound remain valid; an suggested sensor does not have that guarantee. Changing count units by factor $d>0$ sends $(I_0,K,y,z_0)\mapsto d(I_0,K,y,z_0)$ and leaves $q,g,z=I/K$ and $\tau$ unchanged. Rescale losses/measurement weights consistently; otherwise the statistical objective changes even though the mechanism is equivalent.

Unrestricted trading would give $q=(t-1/2,3/2-2t,t)$, $1/2<t<3/4$, for the digital. The **actual return cone** forbids short bond/stock, so the correct interval is $(0,3/4)$ and closed constrained hedge bounds are $[0,3/4]$, by the complete cone argument in AMS-M3. The old lower hedge $(-1,1)$ is inadmissible. This is an economic modelling change in implementability, not an arithmetic perturbation. Physical $\pi=(1/4,1/4,1/2)$ gives digital expectation $1/2$, but no principle identifies that physical number as the unique valuation.

| Physical-moment quantity | Exact value |
| --- | --- |
| mean vector | (3/40,-1/80) |
| covariance diagonals (a,b) | (27/1600,51/6400) |
| covariance c | -37/3200 |
| covariance determinant | 1/1280000 |
| long-only minimum-variance first weight | 125/307 |
| minimum variance | 1/61400 |
| stressed c | 1/100 |
| stressed unconstrained first weight | -13/31 |
| stressed long-only first weight and variance | 0,51/6400 |
| VaR at 3/5, ES at 3/5 | 20,20 |

The larger tail probability moves VaR itself to 20; ES uses a fractional $2/5$ of the $1/2$ mass at 20. Under $20\mapsto200$, both become 200. The stressed covariance is PSD; the deliberately larger $1/50$ cross term fails PSD. A shift in a synthetic probability table is a sensitivity scenario, not evidence of an observed market regime.

**Return evidence and stopping model.** Recheck graph definitions/capacity units before the flow calculation; reject a lost-demand record that silently becomes observed sales. Recheck the calibrated population/time and reporting definition before biological refitting; without that new observation keep the profile. Recheck trading restrictions and settlement before a hedge claim; do not quote the unrestricted interval when its lower hedge is forbidden. Keep the actual public-program output and independent failure-control responses. Each future real-use protocol requires actual data and declared decision authority; the current course supplies none. Mathematical certificates remain conditional even when all exact computations agree.

## AMS-M4 — Required executable reference and independent reproduction

Decode each adjacent `AMS-…-DATA` JSON block and call `appliedSpecialistAudit.run(data)` with the code below in an existing Node.js session. Save the **actual** returned JSON for all three cases, including `native_refinement` and `sampled_loop`; include the input, code marker, environment version, command and all failure statuses. The reference uses BigInt rational arithmetic for bounded finite certificates and binary64 only for the explicitly numerical Riccati/state and intersample grids. No imports, file/network access, random sampling, DOM or learner-store writes occur. A deterministic three-scenario problem needs no invented seed. Strings such as `1/4` denote exact rational model inputs, not decimal measurements.

The supported engine is deliberately small: five integer edge capacities 0–8; three strictly positive probabilities summing to one; demand 1–8; stock 0–3; positive rational costs; a scalar control horizon 1–3 in integer time units with bounded scalar data; four logistic grid rows with known growth; a three-state stock/bond market with an optional middle-state security; and two-asset moments. It rejects unsupported domains. It does not infer real data, execute an open project, solve arbitrary constrained control or certify a general financial model. Its finite output is required work even when the hand calculations are complete.

```js
// EULER-APPLIED-SPECIALIST-AUDIT-V1
(() => {
  const fail = message => { throw new RangeError(message); };
  const gcd = (a,b) => { a=a<0n?-a:a; b=b<0n?-b:b; while(b) [a,b]=[b,a%b]; return a; };
  const Q = (n,d=1n) => { if(!d) fail('Zero denominator'); if(d<0n) { n=-n; d=-d; } const g=gcd(n,d); return [n/g,d/g]; };
  const z=Q(0n),o=Q(1n),two=Q(2n);
  const add=(a,b)=>Q(a[0]*b[1]+b[0]*a[1],a[1]*b[1]);
  const neg=a=>[-a[0],a[1]],sub=(a,b)=>add(a,neg(b));
  const mul=(a,b)=>Q(a[0]*b[0],a[1]*b[1]),div=(a,b)=>Q(a[0]*b[1],a[1]*b[0]);
  const cmp=(a,b)=>a[0]*b[1]<b[0]*a[1]?-1:a[0]*b[1]>b[0]*a[1]?1:0;
  const sum=a=>a.reduce(add,z),sq=a=>mul(a,a),max=(a,b)=>cmp(a,b)>0?a:b,min=(a,b)=>cmp(a,b)<0?a:b;
  const integer=n=>Q(BigInt(n));
  const parse=x=>{ if(typeof x!=='string'||x.length>24||! /^-?\d+(?:\/[1-9]\d*)?$/.test(x)) fail('Rational string required'); const [a,b='1']=x.split('/'); const q=Q(BigInt(a),BigInt(b)); if(cmp(q,integer(-1000))<0||cmp(q,integer(1000))>0||q[1]>10000n) fail('Scalar bound'); return q; };
  const num=q=>Number(q[0])/Number(q[1]);
  const print=q=>q[1]===1n?String(q[0]):q[0]+'/'+q[1];
  const vector=(x,n)=>{ if(!Array.isArray(x)||x.length!==n) fail('Vector length'); return x.map(parse); };
  const positive=x=>{ const q=parse(x); if(cmp(q,z)<=0) fail('Positive scalar required'); return q; };
  const law=x=>{ const p=vector(x,3); if(p.some(v=>cmp(v,z)<=0)||cmp(sum(p),o)!==0) fail('Positive normalized law required'); return p; };
  const best=rows=>rows.reduce((a,b)=>cmp(b.cost,a.cost)<0?b:a);
  function route(c) {
    const [sa,sb,ab,at,bt]=c,ft=Math.min(sa,at),fab=Math.min(sa-ft,ab,bt),fsb=Math.min(sb,bt-fab);
    const flow=[ft+fab,fsb,fab,ft,fsb+fab],value=ft+fsb+fab;
    const cuts=[sa+sb,sb+ab+at,sa+bt,at+bt],cut=cuts.indexOf(Math.min(...cuts));
    if(value!==cuts[cut]) throw new Error('Flow/cut invariant');
    return {flow,value,cuts,cut};
  }
  function network(n) {
    if(!n||!Array.isArray(n.capacities)||n.capacities.length!==5||n.capacities.some(x=>!Number.isInteger(x)||x<0||x>8)||!Number.isInteger(n.demand)||n.demand<1||n.demand>8) fail('Network bounds');
    const c=n.capacities,p=law(n.probabilities),cost=positive(n.stock_cost),penalty=positive(n.penalty);
    const scenarios=[c,[c[0],0,...c.slice(2)],[...c.slice(0,2),0,...c.slice(3)]],flows=scenarios.map(route);
    const loss=(x,F)=>add(mul(cost,integer(x)),mul(penalty,max(z,sub(integer(n.demand-x),F))));
    const rows=[0,1,2,3].map(x=>{ const losses=flows.map(f=>loss(x,integer(f.value))); return {x,shortages:flows.map(f=>Math.max(0,n.demand-f.value-x)),cost:sum(losses.map((v,i)=>mul(p[i],v))),worst:losses.reduce(max)}; });
    const chosen=best(rows),robust=best(rows.map(r=>({...r,cost:r.worst})));
    const hindsight=sum(flows.map((f,i)=>mul(p[i],best([0,1,2,3].map(x=>({x,cost:loss(x,integer(f.value))}))).cost)));
    const mean=sum(flows.map((f,i)=>mul(p[i],integer(f.value))));
    const meanRows=[0,1,2,3].map(x=>({x,cost:loss(x,mean)})),meanChoice=best(meanRows);
    const inc=[...c]; inc[3]+=1; const remove=[...c]; remove[2]=0;
    const outRows=rows.map(r=>({x:r.x,shortages:r.shortages,expected:print(r.cost),worst:print(r.worst)}));
    return {flows,rows:outRows,choice:chosen.x,robust_choice:robust.x,hindsight:print(hindsight),EVPI:print(sub(chosen.cost,hindsight)),mean_flow:print(mean),mean_rows:meanRows.map(r=>({x:r.x,cost:print(r.cost)})),mean_choice:meanChoice.x,mean_true_cost:print(rows[meanChoice.x].cost),transfers:{increase_at:route(inc),remove_ab:route(remove)}};
  }
  function control(c) {
    if(!c) fail('Control required'); const x=parse(c.x0),T=positive(c.T),r=positive(c.r),s=positive(c.s),M=positive(c.bound);
    if(T[1]!==1n||cmp(T,integer(3))>0||cmp(max(x,neg(x)),integer(4))>0||cmp(M,integer(4))>0||cmp(r,integer(4))>0||cmp(s,integer(4))>0) fail('Control bounds');
    const uncon=neg(div(mul(s,x),add(r,mul(s,T)))),u=max(neg(M),min(M,uncon));
    const end=add(x,mul(T,u)),J=div(add(mul(s,sq(end)),mul(mul(r,T),sq(u))),two);
    const refine=[8,16,32].map(N=>{ const h=num(T)/N,P=Array(N+1).fill(0); P[N]=1; for(let j=N-1;j>=0;j--) P[j]=P[j+1]-h*P[j+1]*P[j+1]; let X=num(x),peak=0; for(let j=0;j<N;j++){ X*=1-h*P[j]; peak=Math.max(peak,Math.abs(X-num(x)*(1+num(T)-(j+1)*h)/(1+num(T)))); } return {N,h,P0:P[0],X_end:X,P_error:Math.abs(P[0]-1/(1+num(T))),X_error:Math.abs(X-num(x)/(1+num(T))),max_state_error:peak,P_bound:num(T)*h+1e-10,X_bound:Math.abs(num(x))*num(T)**2*h+1e-10}; });
    const sampled=[2,3,4].map(base=>{ const states=[.25],grid=[]; for(let k=0;k<2;k++){ const start=states[k]; grid.push(Array.from({length:17},(_,j)=>(2-Math.pow(base,j/16))*start)); states.push((2-base)*start); } return {exp_period:base,states,commands:states.map(v=>-2*v),within_command_bound:states.every(v=>Math.abs(2*v)<=1),grid,grid_peak:Math.max(...grid.flat().map(Math.abs))}; });
    return {unconstrained_u:print(uncon),bounded_u:print(u),end:print(end),cost:print(J),native_refinement:refine,sampled_loop:sampled};
  }
  function biology(b) {
    if(!b) fail('Biology required'); const I=positive(b.I0),K=positive(b.K),q=positive(b.q),g=positive(b.growth),profiles=vector(b.profile_q,3);
    if(cmp(I,K)>=0||cmp(q,o)>0||cmp(g,o)<=0||cmp(g,integer(4))>0||profiles.some(v=>cmp(v,z)<=0||cmp(v,o)>0)) fail('Biological domain');
    const A=mul(q,I),B=mul(q,K); let power=o,lastReport=z;
    const values=Array.from({length:4},(_,j)=>{ if(j) power=mul(power,g); const state=div(mul(mul(K,I),power),add(K,mul(I,sub(power,o)))); lastReport=mul(q,state); return {j,I:print(state),y:print(lastReport)}; });
    const profile=profiles.map(qq=>({q:print(qq),I0:print(div(A,qq)),K:print(div(B,qq)),loss:'0',last_state:print(div(lastReport,qq))}));
    return {values,A:print(A),B:print(B),profile,calibration:print(I),recovered_q:print(div(A,I)),recovered_K:print(div(B,div(A,I))),removed_direction_squared:'1/3',lambda_min_squared_lower:'4/25'};
  }
  function tail(loss,p,alpha) {
    const rows=loss.map((L,i)=>({L,p:p[i]})).sort((a,b)=>cmp(a.L,b.L)); let cum=z,VaR;
    for(const r of rows){cum=add(cum,r.p); if(VaR===undefined&&cmp(cum,alpha)>=0) VaR=r.L;}
    let remaining=sub(o,alpha),weighted=z;
    for(const r of [...rows].reverse()){ const take=min(remaining,r.p); weighted=add(weighted,mul(take,r.L)); remaining=sub(remaining,take); }
    return {VaR:print(VaR),ES:print(div(weighted,sub(o,alpha)))};
  }
  function optimum(a,b,c) {
    if(cmp(sub(mul(a,b),sq(c)),z)<0) fail('Covariance is not PSD');
    const den=sub(add(a,b),mul(two,c)); if(cmp(den,z)<=0) fail('Degenerate variance objective');
    const uncon=div(sub(b,c),den),w=max(z,min(o,uncon)),v=add(add(mul(a,sq(w)),mul(b,sq(sub(o,w)))),mul(mul(two,c),mul(w,sub(o,w))));
    return {unconstrained_weight:print(uncon),weight:print(w),variance:print(v)};
  }
  function finance(f) {
    if(!f||typeof f.complete!=='boolean'||typeof f.no_short_assets!=='boolean') fail('Market contract');
    const pStock=positive(f.stock_price),claim=vector(f.claim,3),p=law(f.probabilities),loss=vector(f.losses,3),alpha=positive(f.alpha),stress=parse(f.stress_cov);
    if(cmp(pStock,two)>=0||cmp(alpha,o)>=0||!Array.isArray(f.returns)||f.returns.length!==3) fail('Market bounds');
    const R=f.returns.map(row=>vector(row,2));
    let market;
    if(f.complete){
      if(f.no_short_assets) fail('Complete constrained market unsupported'); const d=positive(f.D_price),q2=div(sub(pStock,d),two),q1=d,q0=sub(sub(o,q1),q2); if([q0,q1,q2].some(q=>cmp(q,z)<=0)) fail('No positive complete state prices');
      const B=claim[0],S=div(sub(claim[2],B),two),D=sub(sub(claim[1],B),S),price=add(add(B,mul(pStock,S)),mul(d,D));
      market={kind:'complete',q:[q0,q1,q2].map(print),holdings:[B,S,D].map(print),payoffs:[B,add(add(B,S),D),add(B,mul(two,S))].map(print),price:print(price)};
    }else{
      if(f.D_price!==null||claim.some((v,i)=>cmp(v,i===2?o:z)!==0)) fail('Only incomplete digital supported');
      const lower=f.no_short_assets?z:max(z,sub(pStock,o)),upper=div(pStock,two);
      market={kind:f.no_short_assets?'asset-nonnegative-cone':'unrestricted-incomplete',open_interval:[lower,upper].map(print),closed_hedge_bounds:[lower,upper].map(print)};
    }
    const mean=[0,1].map(k=>sum(R.map((row,i)=>mul(p[i],row[k]))));
    const cov=(j,k)=>sum(R.map((row,i)=>mul(p[i],mul(sub(row[j],mean[j]),sub(row[k],mean[k])))));
    const a=cov(0,0),b=cov(1,1),c=cov(0,1),det=sub(mul(a,b),sq(c));
    const severe=[loss[0],loss[1],mul(integer(10),loss[2])];
    return {market,mean:mean.map(print),covariance:[[a,c],[c,b]].map(row=>row.map(print)),determinant:print(det),optimum:optimum(a,b,c),stress:optimum(a,b,stress),tail:tail(loss,p,alpha),severe_tail:tail(severe,p,alpha),physical_claim_expectation:print(sum(claim.map((v,i)=>mul(p[i],v))))};
  }
  globalThis.appliedSpecialistAudit=Object.freeze({run(data){
    try {
      if(!data||!['AMS-P001','AMS-C001','AMS-R001'].includes(data.case_id)) fail('Case identity');
      return {status:'ok',case_id:data.case_id,network:network(data.network),control:control(data.control),biology:biology(data.biology),finance:finance(data.finance)};
    }catch(error){if(error instanceof RangeError) return {status:'unsupported',reason:error.message}; throw error;}
  }});
})();
```

**Actual run contract.** Save the listing once, decode the three public JSON inputs exactly, and print `JSON.stringify(appliedSpecialistAudit.run(data), null, 2)`. Record the actual environment version using the existing environment. A successful reference run has status `ok`; an unsupported input must produce its typed status, not a guessed decision. The independent root regression executes the actual extracted listing with a VM time limit and separately solves the printed instances. Learner output should include all three refinement rows and sampled grids, even though exact analytic endpoint models are already printed. No fresh output or timing is claimed merely because this listing is present.

**Required failure controls.** (a) probabilities not summing to one; (b) negative capacity; (c) $I_0\geq K$ or $q>1$; (d) stress covariance $1/50$; (e) a purported complete market with nonpositive state prices; (f) use a different stock in each scenario and compare its illegitimate hindsight value to the real shared decision; (g) substitute $q=1$ when recovering latent population from reports; (h) substitute physical expectation for the incomplete claim's unique price; (i) reuse the unrestricted return lower hedge despite its forbidden short bond; (j) label the return's $r=s=1$ native-refinement endpoint as the $r=2$ optimum. The first five are rejected by the engine; the next five produce mathematically wrong interpretations that the independent oracle and report must expose. Include a deliberately mutated program output/selection/market bound in independent checks so agreement with a second invocation of the same code cannot count as an oracle.

## AMS-M5 — Full feedback, repair and learner-owned records

Use this 100-point public self-review rubric separately for each full portfolio. It supplies feedback, not grades or mastery certification.

| Criterion | Points | Complete condition and repair |
| --- | --- | --- |
| Contract, units, timestamps and hypotheses | 10 | All three domains, exact state/observation/control distinctions and real-evidence exclusions. If missing, rebuild the model tuple and separating examples before calculating. |
| Flow/cut and capacity transfers | 10 | All three edge tables feasible, cut values equal, zero marginal increase and changed cut checked. Repair by summing conservation and enumerating all four cuts. |
| Shared policy and decision evidence | 10 | All four stock costs, expected/robust choice, margins, mean shortcut and hindsight bound. Repair scenario-specific first-stage leakage before evaluating costs. |
| Continuous/sampled control and actual numerical work | 15 | Sufficiency proof, admissible bounded optimum, actual three-row refinement and sampled grid, analytic and roundoff bounds separated. Repair the Riccati terminal sign or clipping claim, then rerun the fixed input. Hand formulas alone do not complete this criterion. |
| Biological mechanism, fibre, profile and experiment | 15 | Correct nondimensional solution, four grid rows, three zero-loss profiles, distinct latent states, calibrated second equation and quantitative removed direction. Repair by substituting the scaling symmetry and testing the calibration map. |
| Valuation, cone and statewise certificate | 15 | Positive state prices or actual constraint cone; P/R require the open price range and attained hedge bounds, while C requires its nontrivial complete-market replication. Repair by writing every state payoff and checking allowed holdings. |
| Physical moments, PSD, stress and atomic risk | 10 | Exact moments, admissible minimum, stressed PSD/weights, VaR/ES mass allocation and real-market audit limits. Repair using centered weighted products and explicitly allocated tail mass. |
| Required public software, independent oracle and controls | 10 | Actual outputs for all cases and meaningful independent enumeration/fixed-point/certificate comparisons, all failure controls recorded. Repair a failed invariant before accepting a status or final answer. |
| Evidence, validation, claim boundaries and records | 5 | Three claim/validation ledgers and separate dated first/comparison/revised work with support exposure. Repair a causal or empirical overclaim; preserve the original response before revision. |

**Complete fixed validation matrix, required separately for P, C and R.** Attach the applicable printed case ID to every row; the supplied P/C/R tables determine that row's exact expected values. The evidence paragraphs in each case specify its changes and excluded real-use claims. A falsifier here is a possible failed check, not a claim that a real-world validation study happened.

| Intended claim | Falsification test | Dataset/input | Metric | Acceptance boundary | Fallback |
| --- | --- | --- | --- | --- | --- |
| Graph maximum and capacity transfers | Recompute edge constraints, conservation and all four cuts; test added a-t and removed a-b | That case's exact capacities and three disruptions | Maximum capacity/conservation residual and flow-minus-cut | All integer residuals zero; flow equals a cut; zero marginal added a-t and strictly smaller removed-a-b value | Reject certificate and repair route/capacity interpretation |
| Implementable optimal stock | Enumerate stocks 0–3 with one shared time-zero choice; compare hindsight/mean versions | Exact case demand, costs, probabilities and certified flow values | Four exact objectives, winning action, gap and EVPI | Exact agreement with its printed stock/benchmark table; no scenario-dependent first-stage action | Retain feasible table and mark optimum/interpretation unresolved |
| Scalar control optimum | Substitute constant control and prove Jensen/completion-square sufficiency; check actuator bound | Case x0,T,r,s,M | Terminal state, cost, bound excess | Exact agreement with case model and bound excess ≤0 | Use the proved admissible bounded optimum; do not deploy an unconstrained extremal |
| Native numerical and sample/hold verification | Reproduce all three halving runs, independent fixed-point comparison and all three sampled grids | Case T,x0 and native r=s=1; sample periods log2/log3/log4 | P/state endpoint and peak errors, command excess, analytical multiplier | Errors within stated truncation plus roundoff bounds; independent recurrence difference ≤10^-10; log4 is flagged outside local certificate | Reject numerical claim or unsupported command; preserve discrepancy and repair |
| Biological report predictions and identification boundary | Substitute all four grid rows and three fibre profiles; add calibrated initial observation | Exact case I0,K,q,g, report means and stipulated calibrated z0 | Report residuals/profile losses, latent separation, Jacobian rank and squared-direction response | Report/profile losses exactly zero; distinct latent populations; J nonsingular and removed direction squared 1/3 | Keep the nonidentified fibre unless a calibrated observation is genuinely supplied |
| Finite valuation under actual trading rules | Check every payoff, positive state price or explicit nonnegative-asset cone and endpoint arbitrages | Case asset prices/payoffs/claim and trading restrictions | Statewise replication residual or hedge dominance and exact bound costs | C residuals zero and positive q; P/R correct open intervals/closed hedge bounds under the actual cone | Report appropriate bounds or unsupported contract; reject forbidden holdings |
| Conditional physical risk arithmetic | Independently compute raw moments and quantile-integral ES; test covariance 1/50 | Case physical probabilities, returns, stress, loss atoms and alpha | Moment residuals, determinant, constrained variance, tail mass | Exact printed moments/weights/tails; valid stress PSD; 1/50 rejected; allocated tail mass exactly 1-alpha | Reject invalid covariance; retain full loss table and unresolved risk conclusion |
| Real supply or biological applicability | Gather unused, timestamped data under a predeclared observation/sampling and intervention design | **Unavailable**; no real data in this course | Capacity/travel-time errors or independent population/report errors and subgroup/time diagnostics | **Not adjudicable here**; intended authority must predeclare meaningful thresholds with actual data | No validated real-use/intervention claim; retain mathematical scenario result only |
| Real-market risk/applicability | Chronological frozen-policy/forecast evaluation with costs, missingness, dependence and severe-tail checks | **Unavailable**; no quotes, historical losses or market backtest in this course | Forecast error, exceedance uncertainty/clustering/severity, liquidity and exposure breaches | **Not adjudicable here**; requires predeclared real target/thresholds and independently checked evidence | No investment recommendation or validated real-risk claim; withdraw out-of-contract model output |

A missing mathematical hypothesis, infeasible flow/hedge, forbidden future information, invented empirical result or missing required run is a repair trigger irrespective of the points. Reattempt the exact failed component, then one changed portfolio; comparing only a final selected label cannot establish the reasoning. If exact or bounded independent checks disagree with the printed model, retain both outputs and investigate the discrepancy; do not silently tune inputs to recover the advertised choice.

For **each** native selection and cumulative case keep three separate dated plain-text files of your own: stable source/task ID and first attempt; comparison notes identifying every public model/code/help opened; revised reasoning with the cause of each correction. Add the exact JSON input, code marker and actual software output to the relevant case's worksheet portfolio. Preserve files locally and verify a manual copy by reopening it. The shared reader's mutable note string, browser studied marks and saved synthesis are useful navigation aids, not a complete immutable worksheet portfolio. No import, notebook overwrite or practice-store grading is part of this course. Reopening a public model is support use and must be disclosed; a declared return date proves neither unseen performance nor an enforced delay.

Full selected workload remains unknown. The reference books' chapter estimates overlap prerequisite work and are not a course total. All observations, costs, probabilities and risk tables here are synthetic inputs or exact deductions from them. No learner outcomes, timings, participants, market prices, field measurements, accessibility-user observations, ethical approvals or professional qualifications are claimed. Complete scientific validation, professional model governance, general constrained/nonlinear/stochastic control, ecological research programmes and continuous-time finance retain their own hypotheses and evidence requirements.
