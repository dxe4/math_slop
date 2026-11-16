# 12. Designing and comparing kernels

A transition can preserve exactly the right distribution and still be a poor computational tool. Consider a sampler that usually stays where it is, and another that crosses the target quickly but needs an expensive calculation at every step. Correctness does not choose between them. We need a comparison that includes the question being estimated and the work required to answer it.

This chapter develops that comparison from elementary constructions to spectral arguments. The prerequisites are [Monte Carlo integration](05-monte-carlo.md), [finite chains](07-finite-chains.md), and the samplers in [Chapters 9](09-metropolis-hastings.md), [10](10-gibbs.md), and [11](11-slice.md). [General-state convergence](08-convergence.md) supplies optional background. By the end, you should be able to combine invariant transitions safely, state what an off-diagonal ordering proves, distinguish two spectral gaps, and identify a bottleneck that an acceptance statistic conceals.

## 12.1 Choose an estimand and a clock

Let $P$ preserve a target $\pi$, and suppose we estimate $\pi(f)=\mathbb E_\pi[f(X)]$ by $\bar f_n=n^{-1}\sum_{t=0}^{n-1}f(X_t)$. Initially assume a finite state space, an irreducible aperiodic transition matrix, and a stationary start $X_0\sim\pi$. Every real function then has finite variance, and the covariance series below converges absolutely:

$$
\sigma_P^2(f)=\lim_{n\to\infty}n\operatorname{Var}(\bar f_n)
=\operatorname{Var}_\pi(f)+2\sum_{k=1}^{\infty}\operatorname{Cov}_\pi(f(X_0),f(X_k)).
$$

To see where this comes from, expand the variance of the sum. Stationarity gives $n$ identical variance terms and $2(n-k)$ covariance terms at lag $k$. Dividing by $n$ yields

$$
n\operatorname{Var}(\bar f_n)
=\operatorname{Var}_\pi(f)+2\sum_{k=1}^{n-1}(1-k/n)\operatorname{Cov}_\pi(f(X_0),f(X_k)).
$$

Absolute summability permits the limit. A Markov chain central limit theorem also holds in this setting, possibly with zero limiting variance. The quantity $\sigma_P^2(f)$ depends on $f$: estimating a mean, a tail probability, and membership in a mode can expose different weaknesses in the same chain.

If one transition costs a fixed $c$ work units and the budget is $B$, then $n\approx B/c$. The leading stationary variance is therefore $c\sigma_P^2(f)/B$. This calculation uses a deterministic observation count; substituting a measured average cost is a benchmarking approximation when transition costs vary. A sweep of fifty coordinate updates must be charged for those updates when compared with a single proposal. Report initialization and tuning costs too, especially when the intended run is short.

These formulas concern stationary sampling error. A nonstationary start can introduce bias; using a wrong invariant distribution introduces another error that more iterations cannot remove. None of the exact kernels below introduces discretization bias under exact arithmetic. Numerical approximations and an inaccurate statistical model are separate concerns. [Chapter 13](13-mc-error.md) develops practical uncertainty estimates; here the quantities are mathematical design criteria.

## 12.2 Two ways to combine valid transitions

Suppose $P_1,\ldots,P_m$ all preserve $\pi$. With fixed nonnegative weights $w_j$ summing to one, the mixture

$$
M(x,A)=\sum_{j=1}^m w_jP_j(x,A)
$$

also preserves $\pi$, because

$$
\int\pi(dx)M(x,A)=\sum_jw_j\int\pi(dx)P_j(x,A)=\sum_jw_j\pi(A)=\pi(A).
$$

Operationally, draw a component index independently of the current state and apply that component. A cheap local move can receive most of the weight, with an occasional larger move intended to cross gaps between regions.

Composition is different. Write $P_1P_2$ for first applying $P_1$, then $P_2$, so

$$
(P_1P_2)(x,A)=\int P_1(x,dy)P_2(y,A).
$$

Its invariance follows from $\pi(P_1P_2)=(\pi P_1)P_2=\pi P_2=\pi$. Repeating the argument proves invariance for a whole fixed sweep. Gibbs updates are a familiar application: each conditional update preserves the joint target, and so does their composition.

Neither argument proves exploration. Identity transitions preserve every target while visiting no new state. Two valid kernels can both be trapped within the same subsets. For finite mixtures, draw every directed edge contributed by a positive-weight component: irreducibility requires their union to be strongly connected, so every state can reach every other. For reversible components with a strictly positive common target, these edges occur in both directions and ordinary undirected connectivity suffices. A composition requires attention to the order and possible paths over entire sweeps; component invariance alone supplies no connectivity guarantee.

## 12.3 Scheduling can change reversibility

For finite chains, use the weighted inner product $\langle f,g\rangle_\pi=\sum_x\pi(x)f(x)g(x)$. A reversible transition is self-adjoint: $P^*=P$. If $P_1$ and $P_2$ are reversible, then

$$
(P_1P_2)^*=P_2P_1.
$$

Consequently their composition is reversible exactly when they commute. The composition remains invariant even when they do not. For a concrete example with uniform target on three states, let $P_1$ deterministically swap states 1 and 2, and let $P_2$ swap states 2 and 3. Each swap is reversible. Applying the first then the second produces a directed three-cycle, which is invariant but not reversible. It is also periodic, illustrating why invariance, reversibility, and convergence deserve separate checks.

A fixed mixture of reversible kernels stays reversible because detailed balance is linear in the transition probabilities. Thus changing systematic scan to random scan can change reversibility, cost, and dependence even when the target stays fixed.

When a deterministic schedule is observed only after complete sweeps, it defines a homogeneous chain with the composite kernel. When every substep is recorded, the next transition depends on the schedule position. Include a phase variable to describe that sequence as a homogeneous chain. Individual substeps still preserve stationary marginals if the initial state has distribution $\pi$, but the covariance calculations must respect the schedule.

State-dependent selection needs a new balance argument. On $\{0,1\}$, both the identity $I$ and the flip $F$ preserve the uniform target. Select $I$ at state 0 and $F$ at state 1. Both states then move to 0, destroying invariance. The mixture proof failed because its weights could no longer be pulled outside the integral. History-dependent selection raises further issues addressed in [adaptive MCMC](15-adaptation.md).

## 12.4 What off-diagonal ordering proves

A powerful comparison is available when two kernels are sufficiently similar. In the finite-state version of **Peskun ordering**, let $P$ and $Q$ be irreducible, aperiodic, reversible matrices with the same strictly positive invariant distribution. If

$$
P(x,y)\ge Q(x,y)\qquad\text{for every }x\ne y,
$$

then $\sigma_P^2(f)\le\sigma_Q^2(f)$ for every real $f$. Increasing all probabilities of moving to other states, at the expense of holding probability, improves this stationary asymptotic criterion. The theorem does not compare every finite run or account for transition cost. [Tierney (1998), Theorem 4](https://www2.stat.duke.edu/~scs/Courses/Stat376/Papers/TransdimMCMC/TierneyAAP1998.pdf) gives the general-state extension: for reversible kernels with common invariant $\pi$, domination on measurable sets excluding the current state, for $\pi$-almost every starting point, orders stationary limiting variances of $L^2(\pi)$ observables, allowing infinite values.

Most proposed improvements are not ordered this way. A larger proposal scale often increases transitions to distant states while decreasing transitions to nearby states. Blocking changes the set of possible moves. Comparing such algorithms requires more information than a total acceptance rate.

An operator calculation explains the finite reversible result. On centered functions, $I-P$ is positive definite. Off-diagonal domination increases the quadratic form $\langle f,(I-P)f\rangle_\pi$. Inverting reverses this ordering, and the variance can be written

$$
\sigma_P^2(f)=2\langle f,(I-P)^{-1}f\rangle_\pi-\langle f,f\rangle_\pi.
$$

Here $f$ has been centered. The inverse exists on that subspace by irreducibility; aperiodicity supports the ordinary covariance-series derivation. The form and spectral explanations below make this identity concrete.

## 12.5 Mixing proposals is different from mixing kernels

Suppose the target density $\pi(x)$ and proposal densities $q_j(x,y)$ share a dominating measure, and all component selection weights are fixed. There are two exact constructions. One selects $j$, proposes from $q_j$, and uses that component's Metropolis–Hastings ratio. The other proposes from $q=\sum_jw_jq_j$ and uses the ratio formed from the full mixture density.

For distinct $x,y$, define $a_j=w_j\pi(x)q_j(x,y)$ and $b_j=w_j\pi(y)q_j(y,x)$. The accepted stationary flow in the first construction is $\sum_j\min(a_j,b_j)$. In the second it is $\min(\sum_ja_j,\sum_jb_j)$. Since

$$
\sum_j\min(a_j,b_j)\le\min\left(\sum_ja_j,\sum_jb_j\right),
$$

the full-mixture construction dominates off the diagonal. Under the preceding theorem's hypotheses, it has no greater asymptotic variance. This comparison is [Tierney's Proposition 5](https://www2.stat.duke.edu/~scs/Courses/Stat376/Papers/TransdimMCMC/TierneyAAP1998.pdf).

For intuition, suppose the two components contribute forward flows $(0.08,0.02)$ and reverse flows $(0.02,0.08)$. Accepting within components retains flow $0.02+0.02=0.04$; combining before acceptance retains $\min(0.10,0.10)=0.10$. Opposite directional imbalances cancel in the full mixture. Its cost may be higher because evaluating $q(x,y)$ and $q(y,x)$ requires evaluating every component. Sampling the component index remains cheap; calculating the acceptance ratio is the additional expense.

Ordinary MH acceptance is also maximal within reversible accept/reject rules for a fixed proposal. Detailed balance and the constraint that reverse acceptance is at most one imply $\alpha(x,y)\le r(x,y)$, while acceptance is itself at most one. Thus $\alpha\le\min(1,r)$. This restricted optimality does not compare different proposals or nonreversible algorithms.

## 12.6 Spectral modes reveal what an average needs

A finite reversible matrix has an orthonormal eigenbasis in the weighted inner product. Write its eigenvalues as $1=\lambda_1>\lambda_2\ge\cdots\ge\lambda_s>-1$, using irreducibility and aperiodicity. The constant eigenfunction has eigenvalue one. For a centered eigenfunction $f$ with eigenvalue $\lambda$,

$$
\mathbb E[f(X_k)\mid X_0]=P^kf(X_0)=\lambda^kf(X_0).
$$

At stationarity, multiplying by $f(X_0)$ and taking expectations gives covariance $\lambda^k\operatorname{Var}_\pi(f)$. The geometric series then yields

$$
\sigma_P^2(f)=\operatorname{Var}_\pi(f)\frac{1+\lambda}{1-\lambda}.
$$

For a general centered $f=\sum_{j=2}^sb_jv_j$, orthogonality removes cross terms, giving $\sigma_P^2(f)=\sum_{j=2}^sb_j^2(1+\lambda_j)/(1-\lambda_j)$. An observable is inefficient when it loads heavily onto modes near eigenvalue one.

The **right spectral gap** is $\gamma=1-\lambda_2$. The **absolute spectral gap** is $\gamma_{\mathrm{abs}}=1-\max_{j\ge2}|\lambda_j|$. The latter controls decay of all nonconstant modes in absolute magnitude. A negative eigenvalue near minus one causes persistent oscillation while reducing the variance of an average through cancellation. Fast distributional convergence and precise average estimation are related criteria, but their spectral summaries differ. These finite reversible conventions and their mixing interpretation are developed in [Levin and Peres, Chapters 12–13](https://pages.uoregon.edu/dlevin/MARKOV/markovmixing.pdf).

### Worked example: the value of alternating visits

On $\{0,1\}$ take uniform $\pi$ and

$$
P_a=\begin{pmatrix}1-a&a\\a&1-a\end{pmatrix},\qquad 0<a<1.
$$

Let $f(0)=-1$ and $f(1)=1$. The target mean is zero and variance is one. Multiplication gives $P_af=(1-2a)f$, so

$$
\sigma_{P_a}^2(f)=\frac{1+(1-2a)}{1-(1-2a)}=\frac{1-a}{a}.
$$

At $a=0.2$, $\lambda=0.6$, the asymptotic variance is $0.8/0.2=4$, and the absolute gap is $0.4$. At $a=0.8$, $\lambda=-0.6$, the variance is $0.2/0.8=0.25$, and the absolute gap is again $0.4$. The second chain estimates this mean sixteen times as efficiently per transition despite identical absolute decay rates. Alternation helps balance positive and negative contributions.

If the respective costs are $c_{0.2}$ and $c_{0.8}$, the second chain wins per large budget when $0.25c_{0.8}<4c_{0.2}$, or $c_{0.8}<16c_{0.2}$. The boundary $a=1$ is periodic and lies outside our aperiodic derivation. Its exceptionally balanced even-length averages do not imply distributional convergence from a fixed starting state.

## 12.7 Turn geometry into stationary flow

For finite reversible $P$, define the Dirichlet energy

$$
\mathcal E_P(f,f)=\frac12\sum_{x,y}\pi(x)P(x,y)[f(y)-f(x)]^2.
$$

Expanding the square, row sums give one $\langle f,f\rangle_\pi/2$ term, invariance gives another, and the cross term is $-\langle f,Pf\rangle_\pi$. Hence $\mathcal E_P(f,f)=\langle f,(I-P)f\rangle_\pi$. The spectral expansion shows that

$$
\gamma=\min_{\operatorname{Var}_\pi(f)>0}\frac{\mathcal E_P(f,f)}{\operatorname{Var}_\pi(f)}.
$$

A function that varies substantially across the target but changes little along likely transitions reveals a slow mode.

For a set $A$, define stationary outward flow $Q(A,A^c)=\sum_{x\in A,y\notin A}\pi(x)P(x,y)$ and conductance

$$
\Phi=\min_{0<\pi(A)\le1/2}\frac{Q(A,A^c)}{\pi(A)}.
$$

This ratio is the probability of leaving $A$ in one step when the starting point is drawn from $\pi$ conditioned on $A$. It detects regions containing appreciable probability that communicate poorly with their surroundings. For finite irreducible reversible chains,

$$
\frac{\Phi^2}{2}\le\gamma\le2\Phi.
$$

The constants and hypotheses are given in [Levin and Peres, Theorem 13.10](https://pages.uoregon.edu/dlevin/MARKOV/markovmixing.pdf). For the upper bound, insert $f=\mathbf1_A$ into the variational formula: its energy is $Q(A,A^c)$ and variance is $\pi(A)(1-\pi(A))$. Since $1-\pi(A)\ge1/2$, the quotient is at most twice the conductance ratio. The lower bound requires controlling arbitrary functions through their level sets. For lazy chains all eigenvalues are nonnegative, so this gap also controls the slowest absolute mode.

### Worked example: a narrow bridge between four states

Give states $1,2,3,4$ equal target mass. Put symmetric transition probabilities $P_{12}=P_{21}=P_{34}=P_{43}=0.4$ and $P_{23}=P_{32}=\epsilon$, with $0<\epsilon\le0.1$. All other off-diagonal entries vanish; diagonals complete the row sums. Symmetry proves invariance, the path is connected, and every diagonal is at least $1/2$, so the chain is lazy.

The cut $A=\{1,2\}$ has mass $1/2$ and flow $\epsilon/4$, giving ratio $\epsilon/2$. To establish that it minimizes conductance, enumerate all eligible sets. Singletons have ratios $0.4,0.4+\epsilon,0.4+\epsilon,0.4$. Complementary pairs have equal ratios, leaving three pair partitions:

| Representative set | Conductance ratio |
|---|---:|
| $\{1,2\}$ | $\epsilon/2$ |
| $\{1,3\}$ | $(0.8+\epsilon)/2$ |
| $\{1,4\}$ | $0.8/2$ |

Thus $\Phi=\epsilon/2$ exactly, and $\epsilon^2/8\le\gamma\le\epsilon$. At $\epsilon=0.01$, the gap cannot exceed $0.01$, however lively movement inside each pair appears.

Now add a symmetric edge $P_{14}=P_{41}=\eta$, reducing the diagonals at 1 and 4 by $\eta$, where $0<\eta\le0.1$. The target and laziness survive. The central cut now carries flow $(\epsilon+\eta)/4$. Enumeration gives pair ratios $(\epsilon+\eta)/2$, $(0.8+\epsilon+\eta)/2$, and $0.4$; all singleton ratios are at least $0.4$. Therefore $\Phi=(\epsilon+\eta)/2$. With $\epsilon=0.01$ and $\eta=0.09$, conductance increases tenfold. This does not prove a tenfold increase in the gap or effective sample size. Off-diagonal domination does prove no larger asymptotic variance per transition, while the cost of generating the new move still matters.

### From a cut bound to exact estimation cost

For this small example we can compute what the extra edge actually buys. Write $w=0.4$. Reversing the state labels, $1\leftrightarrow4$ and $2\leftrightarrow3$, leaves the matrix unchanged. Functions of the form $(u,v,-v,-u)$ therefore form an invariant subspace. On this subspace, $I-P$ acts through the two-by-two matrix

$$
H=\begin{pmatrix}w+2\eta&-w\\-w&w+2\epsilon\end{pmatrix}.
$$

Its eigenvalues are $w+\epsilon+\eta\pm\sqrt{w^2+(\epsilon-\eta)^2}$. The other two eigenvalues of $I-P$ are zero, for constants, and $2w$, for $(1,-1,-1,1)$. Because $\epsilon+\eta\le0.2$, the smaller eigenvalue of $H$ is the smallest positive eigenvalue overall. Thus the exact gap is

$$
\gamma=w+\epsilon+\eta-\sqrt{w^2+(\epsilon-\eta)^2}.
$$

This direct diagonalization specializes the reversible spectral argument in [Levin and Peres, Sections 12.1 and 13.2](https://pages.uoregon.edu/dlevin/MARKOV/markovmixing.pdf). It also shows why the conductance upper bound is informative here: with $\eta=0$ and small $\epsilon$, $\gamma=\epsilon-\epsilon^2/(2w)+O(\epsilon^4)$.

Now estimate which pair the chain occupies, using $f=(1,1,-1,-1)$. Its mean is zero and variance is one. The resolvent identity in Section 12.4 says to solve $(I-P)g=f$ with $\pi(g)=0$. Write $g=(u,v,-v,-u)$; the problem becomes $H(u,v)^T=(1,1)^T$. With $D=2w(\epsilon+\eta)+4\epsilon\eta$, inversion gives

$$
u=\frac{2w+2\epsilon}{D},\qquad
v=\frac{2w+2\eta}{D},\qquad
\sigma_P^2(f)=u+v-1
=\frac{4w+2\epsilon+2\eta}{D}-1.
$$

The factor $u+v$ follows from $2\langle f,g\rangle_\pi$ with four equal target weights. This is an observable-specific calculation; $f$ is generally a combination of two eigenfunctions.

| Kernel, with $\epsilon=0.01$ | Conductance | Exact gap, rounded | $\sigma_P^2(f)$, rounded |
|---|---:|---:|---:|
| Original path, $\eta=0$ | 0.005 | 0.009875 | 201.5000 |
| Added edge, $\eta=0.09$ | 0.050 | 0.092078 | 20.5311 |

The conductance improves by ten, the gap by about 9.32, and the variance ratio is about 9.81. Under the fixed-cost large-budget comparison, the added-edge implementation wins for this observable only if its cost is less than about 9.81 times the original cost. For estimating the probability of occupying the first pair, use $(f+1)/2$: both variances divide by four, leaving the cost threshold unchanged.

The improvement need not be strict for every observable. The function $h=(1,-1,-1,1)$ has eigenvalue $1-2w=0.2$ under both kernels: neither bridge joins states with different $h$ values. Its asymptotic variance stays at $(1+0.2)/(1-0.2)=1.5$. This explicitly illustrates the weak inequality in Peskun ordering.

## 12.8 Laziness repairs periodicity at a price

A standard modification is $P_\delta=\delta I+(1-\delta)P$, with $0<\delta<1$. It preserves invariance and replaces every eigenvalue $\lambda$ by $\delta+(1-\delta)\lambda$. For an irreducible finite chain it removes periodicity. Under reversibility, the eigenvalues are real in $[-1,1]$, so $\delta=1/2$ makes them all nonnegative.

Because $(1+\lambda)/(1-\lambda)$ increases with $\lambda$, adding holds increases asymptotic variance for every nonconstant spectral component of an already aperiodic reversible chain. In the two-state example, half laziness changes $a=0.8$ into effective flip probability $0.4$. The variance rises from $0.25$ to $0.6/0.4=1.5$. A convenient theoretical repair can therefore reduce practical efficiency per recorded transition.

The [holding-probability figure](figures/12.svg) illustrates a second pair of two-state kernels, with $a=0.1$ and $a=0.4$. Their autocorrelations are $0.8^k$ and $0.2^k$, and their integrated autocorrelation times are $9$ and $1.5$. These numbers describe the centered-state observable at equal transition cost.

Likewise, a tiny probability of attempting a global move can establish connectivity without producing useful crossings in a realistic run. Proposal support is necessary, but the accepted stationary flow across a difficult cut determines whether that connection is operationally useful.

## 12.9 Acceptance targets come with assumptions

For a transparent scaling result, take $\pi_d=N(0,I_d)$, start in stationarity, and propose $Y=X+(\ell/\sqrt d)Z$ with independent $Z\sim N(0,I_d)$. The log MH ratio is

$$
R_d=-\frac{\ell}{\sqrt d}X^TZ-\frac{\ell^2}{2d}\|Z\|^2.
$$

A central limit theorem and law of large numbers give $R_d\Rightarrow N(-\ell^2/2,\ell^2)$. Integrating $\min(1,e^R)$ against this limiting normal distribution gives acceptance $a(\ell)=2F_N(-\ell/2)$, where $F_N$ is the standard normal CDF. The coordinate diffusion limit, with time accelerated by dimension, has speed $h(\ell)=\ell^2a(\ell)$. This Gaussian specialization follows the product-target analysis of [Roberts, Gelman, and Gilks (1997)](https://faculty.wcas.northwestern.edu/lchrist/course/Gerzensee_2011/The%20Annals%20of%20Applied%20Probability%201997%20Roberts.pdf).

Differentiation gives $h'(\ell)=4\ell F_N(-\ell/2)-\ell^2\phi_N(\ell/2)$. Its positive optimum is approximately $\ell=2.38$, with acceptance about $0.234$. This optimizes a specified limiting exploration speed for a specified family. It is not a universal target for one-dimensional samplers, coordinate updates, constrained distributions, or mode discovery. [Sherlock and Roberts (2009)](https://arxiv.org/abs/0909.0856) analyze additional target families and conditions under which the familiar acceptance rule fails.

Tiny proposals can have nearly perfect acceptance while barely moving. A chain confined to one mode can show a seemingly reasonable acceptance fraction indefinitely. Acceptance and squared jumping distance describe mechanisms; important estimands and actual work determine the computational objective.

## 12.10 Laboratory and a design workflow

The interactive lab evolves exact probability distributions under a fixed three-state matrix. Change the initial state and number of steps; compare the transient paths and their common limiting probabilities. The initial-state control does not tune persistence, and this lab does not simulate occupation averages. Use it to distinguish convergence of distributions from the variance of a sample average.

<div class="mcmc-lab" data-lab="markov"></div>

The executable companion, `examples/ch12.py`, addresses the latter question. It runs independently seeded stationary two-state chains for $a=0.2,0.5,0.8$, compares repeated-run estimates of $n\operatorname{Var}(\bar f_n)$ with exact finite-run values, enumerates the four-state cuts, and checks the exact spectral and variance calculations in Section 12.7 against matrix operations. It also computes the Gaussian limiting scale optimum. Run it with `python examples/ch12.py`. Increase the number of repetitions to reduce uncertainty in the empirical variance; increase the chain length to approach the asymptotic criterion. Neither agreement nor a single attractive trace proves correctness for a different implementation.

A practical design process follows the logic of the chapter. Specify the target and its support, choose moves that address the observed geometry, and prove invariance of their combination. Check connectivity and likely bottlenecks. Choose observables representing the actual scientific questions, record work per transition, and tune during a separate phase before comparing fixed kernels through independent runs.

| Observed mechanism | Design response to investigate |
|---|---|
| Slow motion along correlated directions | Blocking or reparameterization |
| Rare transitions between substantial regions | Global proposals or [tempering](25-tempering.md) |
| Strong oscillation in state probabilities | Inspect periodicity and negative eigenvalues |
| Expensive transitions with modest benefit | Compare variance per work unit |

The key takeaways are that invariance survives fixed mixtures and compositions, reversibility need not survive composition, and off-diagonal ordering is a powerful but partial comparison. Spectral modes explain observable-specific precision; conductance identifies global obstructions. Measurement in the next chapter turns these design arguments into uncertainty statements about completed runs.

## 12.11 Exercises with worked solutions

<div class="exercise" id="mcmc-12-kernel-design-ex-1">

### Exercise 1: combine three kernels

Let $P_1,P_2,P_3$ preserve $\pi$. Prove invariance of $M=\sum_{j=1}^3w_jP_j$ for constant probability weights, and of $S=P_1P_2P_3$. Identify the vulnerable step if $w_j$ depends on the current state.

<details>
<summary>Solution</summary>

Linearity gives $\pi M=\sum_jw_j\pi P_j=\sum_jw_j\pi=\pi$. Associativity gives $\pi S=((\pi P_1)P_2)P_3=\pi$. For state-dependent weights, the mixture contains integrals $\int\pi(dx)w_j(x)P_j(x,A)$. Component invariance does not evaluate those weighted integrals, so the proof no longer applies.

</details>

</div>

<div class="exercise" id="mcmc-12-kernel-design-ex-2">

### Exercise 2: diagnose unsafe selection

Write the matrix obtained by choosing the identity at state 0 and the flip at state 1. Find its invariant distribution and explain why the component targets do not save it.

<details>
<summary>Solution</summary>

The matrix has both rows $(1,0)$. Every starting distribution maps to point mass at 0, its unique invariant distribution. The uniform vector maps to $(1,0)$, despite being invariant for each component separately. Selection depends on the current state and systematically directs flow toward 0.

</details>

</div>

<div class="exercise" id="mcmc-12-kernel-design-ex-3">

### Exercise 3: MH versus Barker acceptance

For positive MH ratio $r$, compare $\min(1,r)$ with Barker acceptance $r/(1+r)$. What variance conclusion follows for finite irreducible aperiodic chains using the same proposal?

<details>
<summary>Solution</summary>

When $r\le1$, $r/(1+r)\le r$; when $r\ge1$, $r/(1+r)\le1$. Both rules satisfy detailed balance because $\alpha(r)=r\alpha(1/r)$. Multiplying the acceptance inequality by the common proposal probability gives off-diagonal domination, so MH has no greater asymptotic variance for every observable. Transition cost and arbitrary finite-run mean squared error remain outside that conclusion.

</details>

</div>

<div class="exercise" id="mcmc-12-kernel-design-ex-4">

### Exercise 4: attach a price to negative correlation

Derive the two-state asymptotic variance from its covariance series. If the $a=0.8$ implementation costs twenty times the $a=0.2$ implementation, which is better per large budget?

<details>
<summary>Solution</summary>

The series is $1+2\sum_{k\ge1}(1-2a)^k=1+2(1-2a)/(2a)=(1-a)/a$. Normalize the cheaper cost to one. The cost-adjusted variances are $4$ and $20(0.25)=5$, so the $a=0.2$ implementation wins under the stated asymptotic budget criterion. Equality occurs at a cost ratio of sixteen.

</details>

</div>

<div class="exercise" id="mcmc-12-kernel-design-ex-5">

### Exercise 5: certify the bottleneck

For the four-state path, verify every singleton and pair-cut ratio. With $\epsilon=0.02$, give the conductance and the two spectral-gap bounds.

<details>
<summary>Solution</summary>

Singleton ratios are their outward transition probabilities: $0.4$ at endpoints and $0.42$ internally. Dividing the boundary edge weights by two gives pair ratios $0.01$, $0.41$, and $0.4$; complements add no new values. Therefore $\Phi=0.01$, and $0.00005=\Phi^2/2\le\gamma\le2\Phi=0.02$. These are bounds, not an exact gap computation.

</details>

</div>

<div class="exercise" id="mcmc-12-kernel-design-ex-6">

### Exercise 6: design a meaningful acceptance experiment

A colleague recommends tuning every random walk to acceptance $0.234$. Assess this for a one-dimensional normal target and for a mixture of two well-separated normals. Propose a comparison that could reveal failure.

<details>
<summary>Solution</summary>

Neither case inherits the high-dimensional Gaussian product optimization merely by using random walk MH. The one-dimensional optimum depends on the performance criterion. In the mixture, frequent accepted moves within one mode can hide negligible inter-mode flow. Compare a range of fixed scales using independent runs with starts in both modes, equal work budgets, and observables including position, a tail indicator, and mode membership. Report uncertainty across repetitions and initialization sensitivity. Failed crossings are evidence of poor exploration; apparently stable estimates alone cannot establish that all relevant regions were visited.

</details>

</div>
