# 07. Finite-state Markov chains

Suppose a traveler moves among a small set of rooms according to a rule that depends only on the current room. The rule can be written as a matrix, making questions about long-run occupancy and short-run error exact calculations. A large MCMC sampler will rarely be this transparent. The small system is useful because every distinction we need later can be seen without hiding it inside software.

**Learning goals.** By the end, you should be able to read and check a transition matrix; evolve a probability distribution; solve for an invariant distribution; identify closed classes and periods; distinguish convergence of distributions from convergence of averages; and use a two-state eigenvalue to quantify slow movement. The prerequisites are conditional probability from [Chapter 02](02-probability.md), reproducible random draws from [Chapter 04](04-numerics.md), and sample averages from [Chapter 05](05-monte-carlo.md). We use basic matrix multiplication but derive the specific identities we need.

## 7.1 One step, many steps, and one realized path

Let the state space be $\mathcal X=\{0,\ldots,m-1\}$. A time-homogeneous Markov chain $(X_t)_{t\geq0}$ satisfies

$$
\Pr(X_{t+1}=j\mid X_0,\ldots,X_t)=\Pr(X_{t+1}=j\mid X_t)=P_{X_tj}.
$$

Thus the past may predict the future through $X_t$, but gives no additional information once $X_t$ is known. The matrix $P$ has $P_{ij}\geq0$ and $\sum_jP_{ij}=1$ for every row $i$. The first index names the *current* state. Time homogeneity means this same matrix is used at every step; an algorithm whose transition rule changes during adaptation needs a different analysis.

We write probability distributions as **row vectors**. If $\mu_t(i)=\Pr(X_t=i)$, then the law of total probability gives

$$
\mu_{t+1}(j)=\sum_i\mu_t(i)P_{ij},\qquad \mu_{t+1}=\mu_tP.
$$

For example, the chance of going from state $i$ to state $j$ in two steps is $\sum_kP_{ik}P_{kj}=(P^2)_{ij}$: we sum over the unobserved intermediate room. More generally, $\mu_t=\mu_0P^t$ and $P^{s+t}=P^sP^t$. These are statements about probabilities across possible paths. A single simulated path is a random sequence of states and need not resemble $\mu_t$ at any particular time. The university notes by [Shalizi](https://stat.cmu.edu/~cshalizi/dst/20/lectures/18/lecture-18.html) and [Berkeley EECS 70](https://www.sp18.eecs70.org/static/notes/n24.html) give further elementary matrix examples.

## 7.2 Stationary mass is balanced mass

A distribution $\pi$ is **stationary** or **invariant** if

$$
\pi P=\pi,\qquad \pi_i\geq0,\qquad \sum_i\pi_i=1.
$$

If $X_0\sim\pi$, then $X_1\sim\pi$; induction makes every later marginal distribution $\pi$. This says nothing about the path freezing. It may move at every step while the proportion of probability mass at each state remains unchanged. The amount of stationary mass flowing from $i$ to $j$ in one step is $\pi_iP_{ij}$. Stationarity requires total incoming flow at $j$ to equal $\pi_j$, including flow from $j$ to itself.

To solve for $\pi$, write the equations $\sum_i\pi_iP_{ij}=\pi_j$ and replace one redundant equation with normalization. Redundancy follows because summing all balance equations yields the same identity on both sides: each row of $P$ sums to one. The solution may fail to be unique. For $P=I$, every probability vector is stationary; wherever the chain begins, it remains. Every finite transition matrix has at least one stationary distribution, but uniqueness and convergence need further conditions. [Aldous and Fill, Section 2.1](https://www.stat.berkeley.edu/~aldous/RWG/Book_Ralph/Ch2.S1.html) develops the finite-chain classification behind these statements.

There is a short reason for existence that does not assume convergence of $\mu_t$. Start from any distribution $\mu_0$ and average its evolving laws: $\bar\mu_N=N^{-1}\sum_{t=0}^{N-1}\mu_0P^t$. The probability simplex is closed and bounded, so some subsequence of these averages converges to a probability vector $\pi$. But $\bar\mu_NP-\bar\mu_N=(\mu_0P^N-\mu_0)/N$, whose every coordinate tends to zero. Matrix multiplication is continuous, hence the subsequential limit satisfies $\pi P=\pi$. This proves existence without claiming that either the individual laws $\mu_0P^t$ or the averages have a unique limit.

## 7.3 Where the chain can actually go

State $j$ is **accessible** from $i$ if $(P^n)_{ij}>0$ for some $n\geq0$. Two states **communicate** if each is accessible from the other. Communication partitions the state space into classes. A class is **closed** if no positive-probability transition leaves it, and the chain is **irreducible** if all states communicate.

Consider

$$
R=\begin{pmatrix}1&0&0\\0&1&0\\1/2&1/2&0\end{pmatrix}.
$$

States 0 and 1 are separate closed classes; state 2 is transient. Its first move picks one absorbing state, after which no movement is possible. Every vector $(a,1-a,0)$, $0\leq a\leq1$, is stationary. Starting from state 2, the *distribution* at all positive times is $(1/2,1/2,0)$, yet the occupancy fraction of one realized path tends either to $(1,0,0)$ or $(0,1,0)$. This illustrates why averaging over paths and following one path answer different questions.

On a finite space, irreducibility guarantees a **unique** stationary distribution with every $\pi_i>0$; each state is then positive recurrent, meaning that its expected first return time after time zero is finite. Irreducibility is sufficient, not necessary, for uniqueness: a reducible chain can have one closed class and transient states, yielding one stationary law supported on that class. Before checking the algebra of an MCMC transition, check whether its moves can reach every state that the intended target assigns positive mass. Otherwise a perfectly preserved distribution may be useless from some starts.

For a concrete unique but reducible case, use $\begin{pmatrix}1&0\\1/3&2/3\end{pmatrix}$. State 0 is absorbing and cannot reach 1, while repeated opportunities to move from 1 to 0 eventually succeed with probability one. Its only stationary distribution is $(1,0)$. Uniqueness therefore does not certify that every state belongs to the target's support, and the communication structure tells us more than a stationary solution alone.

## 7.4 Periods and the useful role of holding still

For a state that can return, its period is

$$
d(i)=\gcd\{n\geq1:(P^n)_{ii}>0\}.
$$

All states in one communicating class share a period. An irreducible chain is **aperiodic** when this period is one. A positive self-transition $P_{ii}>0$ in one state of an irreducible chain is enough: one is then a possible return length for that state, and the common period is one.

The two-state alternator $A=\begin{pmatrix}0&1\\1&0\end{pmatrix}$ is irreducible with unique stationary law $(1/2,1/2)$, but it has period two. From state 0 its distributions alternate forever between $(1,0)$ and $(0,1)$. Stationarity is present, while convergence from that fixed start is absent.

A common modification is the **lazy** matrix $P_{\mathrm{lazy}}=(I+P)/2$: with probability one half stay put and otherwise use $P$. It is stochastic, and any stationary $\pi$ for $P$ remains stationary because $\pi P_{\mathrm{lazy}}=(\pi+\pi P)/2=\pi$. Applied to the alternator, every row becomes $(1/2,1/2)$, so the chain reaches stationarity after one step. Laziness breaks periodicity of an irreducible finite chain, but cannot connect separate closed classes. It can also make an already aperiodic chain move less often; whether that helps a computation depends on the problem.

## 7.5 Marginal convergence is not the average law

Two finite-state theorems have different hypotheses. If $P$ is **irreducible and aperiodic**, with stationary distribution $\pi$, then for every $i,j$,

$$
P^t(i,j)\longrightarrow\pi_j\quad(t\to\infty).
$$

This is convergence of the distribution at a late single time. If $P$ is **irreducible**, periodicity allowed, then from every starting state and for every real function $f$ on the finite space,

$$
\frac1N\sum_{t=0}^{N-1}f(X_t)\longrightarrow\sum_i\pi_i f(i)
\quad\text{almost surely as }N\to\infty.
$$

There is no separate integrability condition to check here because $f$ is bounded on a finite set. In the alternator, $X_t$ has no limiting distribution from state 0, yet each state is visited almost exactly half the time: among the first $N$ visits, the two counts differ by at most one. Thus its average converges for any $f$. One way to understand the general average theorem is to divide a finite irreducible path into successive returns to a chosen state and apply an average law to these cycles. This is a proof sketch: formalizing it requires the return-time and renewal arguments. [Levin, Peres, and Wilmer](https://pages.uoregon.edu/dlevin/MARKOV/markovmixing.pdf), Appendix C, gives a rigorous treatment; its finite-chain convergence discussion also states the marginal result.

Neither theorem says how large a particular finite $N$ must be. An invariant law is an exact property of the transition; initial-state error and Monte Carlo variability remain finite-run questions. Passing a diagnostic later in the book will not turn an observed finite path into a proof of convergence.

## 7.6 Reversibility and flows on a graph

The stronger **detailed-balance** condition is

$$
\pi_iP_{ij}=\pi_jP_{ji}\quad\text{for all }i,j.
$$

To prove invariance, fix $j$ and sum the pairwise equalities over $i$:

$$
(\pi P)_j=\sum_i\pi_iP_{ij}=\sum_i\pi_jP_{ji}
=\pi_j\sum_iP_{ji}=\pi_j.
$$

In the final sum $j$ is the **first** index of $P_{ji}$, so we are summing row $j$, which equals one. This indexing matters: transition matrices need not have columns that sum to one. Detailed balance cancels every directed edge flow against its reverse, a more restrictive requirement than merely balancing the total flow at each vertex.

Under a stationary start, detailed balance also says the joint probability of a step $i\to j$ equals that of its reversal $j\to i$. That is the sense in which the stationary chain is **reversible**; it is not a statement about a nonstationary path played backward. [Aldous and Fill, Section 3.1](https://www.stat.berkeley.edu/~aldous/RWG/Book_Ralph/Ch3.S1.html) gives the path-level formulation.

Reversibility is sufficient for stationarity, not necessary. Let $C$ move deterministically clockwise on three states, and set $P=(I+C)/2$. Every column and row sums to one, so uniform $\pi$ is stationary. Yet the clockwise flow across an edge is $(1/3)(1/2)=1/6$, while reverse flow is zero. The self-loops make this irreducible chain aperiodic. Stationary mass can circulate while remaining balanced at each vertex.

For a weighted undirected graph, let $w_{ij}=w_{ji}\geq0$, $w_i=\sum_jw_{ij}>0$, and $P_{ij}=w_{ij}/w_i$. Then

$$
\pi_i=\frac{w_i}{\sum_kw_k},\qquad
\pi_iP_{ij}=\frac{w_{ij}}{\sum_kw_k}=\pi_jP_{ji}.
$$

The walk favors vertices with more total incident weight. This graph construction is developed in [Aldous and Fill, Section 3.2](https://www.stat.berkeley.edu/~aldous/RWG/Book_Ralph/Ch3.S2.html). It anticipates the balanced-flow construction of Metropolis–Hastings in [Chapter 09](09-metropolis-hastings.md).

## 7.7 Distance to stationarity and mixing time

For distributions $\mu$ and $\nu$ on the same finite space, define total variation (TV) distance by

$$
\|\mu-\nu\|_{\mathrm{TV}}=\frac12\sum_i|\mu_i-\nu_i|
=\max_{B\subseteq\mathcal X}|\mu(B)-\nu(B)|.
$$

To see the event interpretation, collect exactly those indices where $\mu_i-\nu_i>0$. Their positive differences sum to half the absolute differences, because all signed differences together sum to zero. No other event can produce a larger probability difference. TV therefore describes the largest error in probability assigned to an event, rather than the difference in one arbitrarily chosen coordinate.

When $P$ has a unique stationary distribution, write $d(t)=\max_i\|P^t(i,\cdot)-\pi\|_{\mathrm{TV}}$. For a tolerance $\varepsilon>0$, the mixing time is $t_{\mathrm{mix}}(\varepsilon)=\min\{t\geq0:d(t)\leq\varepsilon\}$, when such a time exists. The maximum protects against an unfavorable starting state. A small finite matrix lets us multiply distributions exactly, up to floating-point arithmetic, so it is an unusually strong benchmark for a simulation. Occupancy frequencies from one short run are different objects: they estimate time averages and do not directly reveal $d(t)$.

The calculation for a small matrix needs no simulation:

```text
for each possible starting state i:
    mu = unit mass at i
    for t = 0, 1, ..., T:
        record 0.5 * sum_j abs(mu[j] - pi[j])
        mu_old = copy(mu)
        mu[j] = sum_k mu_old[k] * P[k][j] for every j
at each t, take the maximum recorded distance over i
```

The update must use the entire old vector before replacing any component. Otherwise it performs a different operation from $\mu P$. The accompanying Python example uses this row-vector multiplication for the worked matrices.

TV also clarifies what “close enough” means for a particular question. If $B$ denotes an event such as “the chain is in one of the rare states,” then $|\Pr(X_t\in B)-\pi(B)|\leq d(t)$ regardless of how that event was chosen. Conversely, a chain may appear accurate for one event while being far from stationarity because another event exposes the discrepancy. For an expectation of a bounded function, a TV bound can be translated into an error bound using the range of that function. Neither observation controls the random error in a subsequent average over correlated draws; that is a separate calculation.

## 7.8 Spectral patterns and the sign of an eigenvalue

Suppose now that a finite chain with at least two states is irreducible and reversible. Every $\pi_i$ is positive, so $D=\operatorname{diag}(\pi)$ has an inverse square root. Define

$$
S=D^{1/2}PD^{-1/2}.
$$

Its $(i,j)$ entry is $\sqrt{\pi_i}P_{ij}/\sqrt{\pi_j}$. Detailed balance makes this equal its $(j,i)$ entry. Thus $S$ is real symmetric and has real eigenvalues and an orthogonal eigenbasis; $P$ is similar to it and has the same eigenvalues. Since $P\mathbf1=\mathbf1$, one eigenvalue is 1. Other eigenmodes describe deviations from stationary mass. For an irreducible aperiodic reversible chain, their absolute eigenvalues are strictly below one, so each pattern decays geometrically. A negative eigenvalue means its pattern changes sign at each step, as in the two-state alternator with eigenvalue $-1$.

The similarity transform uses the stationary weights to put the operator into ordinary Euclidean coordinates. If $v$ is a right eigenvector of $P$ with eigenvalue $\lambda$, then $P^tv=\lambda^tv$. For $\lambda$ near one, this function of the current state retains much of its value over successive steps; for $\lambda$ near minus one, it retains its magnitude but alternates in sign. This is why a high stationary occupancy count alone says little about the information in a sequence of visits. The spectral picture becomes an error-rate statement only after specifying which distribution or observable is being measured and accounting for its projection onto each mode.

If ordered eigenvalues are $1=\lambda_1\geq\lambda_2\geq\cdots\geq\lambda_m\geq-1$, the ordinary gap $1-\lambda_2$ does not capture a slowly decaying negative mode. The **absolute gap** $1-\max_{k\geq2}|\lambda_k|$ does. Laziness maps every eigenvalue $\lambda$ to $(1+\lambda)/2$, removing negative modes. These facts do not imply that eigenvalues alone give a universal TV bound without a start-dependent prefactor. They also do not transfer directly to a nonreversible matrix, which need not have an orthogonal eigenbasis. [Levin, Peres, and Wilmer](https://pages.uoregon.edu/dlevin/MARKOV/markovmixing.pdf), Chapter 12, develops precise reversible spectral bounds.

### 7.8.1 Turning a spectral rate into a finite-time bound

Let $\rho=\max_{k\geq2}|\lambda_k|$ and additionally assume aperiodicity, so $\rho<1$. To track the missing prefactor, define the column vector $h_t(j)=\mu_t(j)/\pi_j-1$. Its stationary weighted mean is zero. Detailed balance gives

$$
h_{t+1}(j)=\sum_i\frac{\pi_iP_{ij}}{\pi_j}h_t(i)
=\sum_iP_{ji}h_t(i)=(Ph_t)(j).
$$

Define $\|h\|_\pi^2=\sum_j\pi_jh(j)^2$. The symmetric transform above implies an orthonormal eigenbasis in this weighted norm: multiply its Euclidean eigenvectors by $D^{-1/2}$. The zero weighted mean removes the eigenvector $\mathbf1$, so expansion in the remaining modes gives $\|h_t\|_\pi\leq\rho^t\|h_0\|_\pi$. Cauchy–Schwarz now yields

$$
\|\mu_t-\pi\|_{\mathrm{TV}}
=\frac12\sum_j\pi_j|h_t(j)|
\leq\frac12\|h_t\|_\pi
\leq\frac12\rho^t\sqrt{\sum_j\frac{(\mu_0(j)-\pi_j)^2}{\pi_j}}.
$$

For a fixed start $i$, the sum under the square root simplifies to $1/\pi_i-1$. Thus, with $\pi_{\min}=\min_i\pi_i$,

$$
d(t)\leq\min\left\{1,\frac12\sqrt{\frac1{\pi_{\min}}-1}\,\rho^t\right\}.
$$

At $t=0$ take $\rho^0=1$, including when $\rho=0$. The weighted spectral representation used here is developed in [Aldous and Fill's unfinished monograph, Section 3.4](https://www.stat.berkeley.edu/~aldous/RWG/Book_Ralph/Ch3.S4.html). The calculation shows why a rate alone is insufficient: the initial distribution also matters, and rare starting states can enlarge this bound. It is a sufficient guarantee, which need not give the earliest successful time. We will compare it with an exact answer in Example B.

## 7.9 Worked example A: an asymmetric two-state chain

Take

$$
P=\begin{pmatrix}0.9&0.1\\0.2&0.8\end{pmatrix}.
$$

The opening figure uses a separate two-state example with switching probabilities $0.2$ and $0.3$, giving stationary masses $(0.6,0.4)$ and eigenvalue $0.5$. Here we work through the displayed matrix with switching probabilities $0.1$ and $0.2$.

Set $\pi=(a,1-a)$. Balance at state 0 gives $a=0.9a+0.2(1-a)$, hence $0.3a=0.2$ and $\pi=(2/3,1/3)$. Notice that the rarer direction $0\to1$ is compensated by the larger mass at state 0: $(2/3)(0.1)=(1/3)(0.2)$. The second eigenvalue is $1-0.1-0.2=0.7$. Writing $\Pi$ for the matrix whose every row is $\pi$, the two complementary patterns obey $P^t=\Pi+0.7^t(I-\Pi)$.

From $X_0=0$, this identity yields

$$
\Pr(X_t=1\mid X_0=0)=\frac13(1-0.7^t),\qquad
\|P^t(0,\cdot)-\pi\|_{\mathrm{TV}}=\frac{0.7^t}{3}.
$$

From state 1, the initial distance is $2/3$, so the worst-case distance is $d(t)=2(0.7^t)/3$. The first $t$ with $d(t)\leq0.01$ is **12**: at 11 it is about $0.0132$, at 12 about $0.00923$. This is a concrete finite-start guarantee for this known matrix, not a general stopping rule for an unknown sampler.

Dependence remains even if $X_0\sim\pi$. For $f(x)=\mathbf1\{x=1\}$, $E_\pi f=1/3$ and $\operatorname{Var}_\pi(f)=(1/3)(2/3)=2/9$. Conditional on $X_0=1$, the probability of state 1 at lag $t$ is $1/3+(2/3)0.7^t$. Therefore

$$
\operatorname{Cov}_\pi(f(X_0),f(X_t))=\frac{2}{9}0.7^t.
$$

Stationary marginal draws can be strongly correlated. An iid standard-error formula from [Chapter 05](05-monte-carlo.md) is not justified for their average; [Chapter 13](13-mc-error.md) will treat dependence in Monte Carlo error.

## 7.10 Worked example B: a three-node path

Consider the simple walk on a path $0-1-2$:

$$
Q=\begin{pmatrix}0&1&0\\1/2&0&1/2\\0&1&0\end{pmatrix}.
$$

The end vertices each have degree one, the center degree two. The graph formula gives $\pi=(1/4,1/2,1/4)$. This is a useful correction to the intuition that a symmetric-looking graph must have a uniform stationary distribution: the center is visited twice as often as either endpoint. The walk alternates between the center and the endpoints and has period two. Its eigenvalues are $1,0,-1$; the last mode explains the persistent alternation.

Make it lazy:

$$
L=\frac{I+Q}{2}
=\begin{pmatrix}1/2&1/2&0\\1/4&1/2&1/4\\0&1/2&1/2\end{pmatrix}.
$$

The target remains $\pi$, while the eigenvalues become $1,1/2,0$. Starting at the left endpoint gives $\mu_0=(1,0,0)$, $\mu_1=(1/2,1/2,0)$, and $\mu_2=(3/8,1/2,1/8)$. At $t=1$, the difference from $\pi$ is $(1/4,0,-1/4)$, an endpoint imbalance. Multiplication by $L$ halves it each time, so for **$t\geq1$**,

$$
\mu_t-\pi=2^{-(t+1)}(1,0,-1),\qquad
\|\mu_t-\pi\|_{\mathrm{TV}}=2^{-(t+1)}.
$$

The formula does not hold at $t=0$, whose TV distance is $3/4$. The exceptional first step removes the eigenmode with eigenvalue zero; the remaining mode then halves. The accompanying [executable example](examples/ch07.py) prints these distributions and compares 50,000 seeded path visits with $\pi$. Such agreement helps catch implementation mistakes but cannot establish a convergence theorem.

The right endpoint gives the same TV distance by symmetry. From the center, one step already gives $\pi$. Therefore the endpoint calculation is also the worst-case distance for $t\geq1$, and $t_{\mathrm{mix}}(0.01)=6$: the distances at times 5 and 6 are $1/64$ and $1/128$. In contrast, Section 7.8.1 uses $\rho=1/2$ and $\pi_{\min}=1/4$ to give

$$
d(t)\leq\frac{\sqrt3}{2}\,2^{-t}.
$$

This upper bound is about $0.01353$ at time 6 and $0.00677$ at time 7, certifying the tolerance one step later. Its extra allowance comes from norm inequalities and from bounding every nonconstant mode by the slowest one. The example checks the bound against every row of the matrix powers; simulation is unnecessary for this comparison.

If one lowers a graph edge weight, both the transition probabilities and the degree-weighted target generally change. A cleaner experiment in *slowness at a fixed target* uses the symmetric two-state matrix with switching probability $\epsilon$: its target stays uniform while its nontrivial eigenvalue $1-2\epsilon$ approaches one as $\epsilon\downarrow0$.

## 7.11 Try the finite-chain lab

The lab below multiplies probability vectors by a **fixed** three-state matrix. Change the initial state from 0 to 1 to 2 and predict which curve starts at one. Increase **Samples / iterations** and compare runs from the three starts: each state probability approaches the same limit across starts, although the three states have different limiting probabilities. The initial distribution is included, so a count of $n$ displays $n-1$ transitions. The displayed rows are the matrix to use if you want to solve its stationary equations on paper. The seed has no effect on these exact probability curves; the control is shared with other labs. There is no matrix editor or spectral display. This is a finite teaching model, and its curves are distributions, not trajectories or a convergence certificate for a separate sampler.

<div class="mcmc-lab" data-lab="markov"></div>

For a follow-up that compares exact laws with random paths, use the proposal-correction experiment in [Section 9.9.1](09-metropolis-hastings.md). It holds an intended target fixed while changing the acceptance rule. You will compare the probability of a boundary event at time $t$, the expected fraction of boundary visits through $t$, and that fraction on one realized path. A sampler can stabilize around the wrong invariant law, even while its stationary mean agrees with the intended target.

## 7.12 An audit to carry forward

For a proposed finite-state sampler, first identify its actual transition matrix, including rejections or self-transitions, and check every row sums to one. Next establish that the desired target is invariant. Then inspect accessible and closed classes, followed by period; an invariant target does not make an inaccessible region reachable. When the chain has a suitable convergence theorem, ask how quickly its distribution approaches the target and how dependent its averages remain. Finally report the finite computation actually performed and any modeling assumptions that made this target scientifically relevant.

This sequence separates four issues: an *exact* invariant-law claim, finite-run initialization error, finite-run Monte Carlo error, and whether the target model answers the substantive question. There is no discretization bias in the exact finite kernels used here; later approximate continuous-state algorithms may add it. [Chapter 08](08-convergence.md) replaces finite-state accessibility with general-state recurrence conditions. [Chapter 09](09-metropolis-hastings.md) builds exact-invariant transitions; [Chapter 12](12-kernel-design.md) compares their movement; [Chapter 13](13-mc-error.md) quantifies estimator error. Positive probabilities for individual states will no longer be the right language in continuous spaces.

## Exercises

<div class="exercise" id="mcmc-07-finite-chains-ex-1">

1. **Two steps versus first arrival.** For the matrix in Example A, calculate $\Pr(X_2=1\mid X_0=0)$. Does this equal the probability of first visiting state 1 at step 2?

<details>
<summary>Solution</summary>

The two intermediate possibilities give $0.9(0.1)+0.1(0.8)=0.17$. First arrival at step 2 requires $0\to0\to1$, so its probability is $0.9(0.1)=0.09$. The other $0.08$ consists of paths that reached 1 at step 1 and stayed there.

</details>

</div>

<div class="exercise" id="mcmc-07-finite-chains-ex-2">

2. **A reducible trap.** Find all stationary distributions of $R$ in Section 7.3. If $X_0=2$, what is the limiting time average of $f(x)=\mathbf1\{x=0\}$ along a single path?

<details>
<summary>Solution</summary>

Stationarity forces mass at state 2 to be zero; the two absorbing states can receive any mixture. Thus all stationary laws are $(a,1-a,0)$ with $0\leq a\leq1$. From state 2, the first step chooses 0 or 1 with equal probability. The path average tends to 1 if it chooses 0 and to 0 if it chooses 1. Its expectation is $1/2$, but the pathwise limit is not always $1/2$.

</details>

</div>

<div class="exercise" id="mcmc-07-finite-chains-ex-3">

3. **Period versus averages.** Starting from 0 in the two-state alternator, show both that $\Pr(X_t=0)$ has no limit and that the time average of any $f$ converges to $(f(0)+f(1))/2$.

<details>
<summary>Solution</summary>

$X_t=0$ at even $t$ and $X_t=1$ at odd $t$, so $\Pr(X_t=0)$ alternates between one and zero. Among $N$ observations, the counts of even and odd indices differ by at most one. Their proportions both tend to $1/2$, giving the stated average for any two real values $f(0),f(1)$.

</details>

</div>

<div class="exercise" id="mcmc-07-finite-chains-ex-4">

4. **A circulating stationary flow.** Let $C$ shift clockwise around three states and $P=(I+C)/2$. Verify uniform stationarity and show detailed balance fails. What is its period?

<details>
<summary>Solution</summary>

Every row and column of $P$ sums to one, so multiplying $(1/3,1/3,1/3)$ by $P$ leaves it unchanged. Clockwise edge flow is $(1/3)(1/2)=1/6$ and reverse edge flow is zero, violating detailed balance. Each state has a self-loop, and the chain is irreducible, so its period is one.

</details>

</div>

<div class="exercise" id="mcmc-07-finite-chains-ex-5">

5. **Laziness algebra.** Given $\pi P=\pi$ and a right eigenvector $Pv=\lambda v$, prove that $(I+P)/2$ preserves $\pi$ and maps $\lambda$ to $(1+\lambda)/2$. Does this prove that holding improves estimation for every $f$?

<details>
<summary>Solution</summary>

$\pi(I+P)/2=(\pi+\pi P)/2=\pi$, while $((I+P)/2)v=(v+\lambda v)/2=((1+\lambda)/2)v$. The calculation removes a negative alternating mode, but a positive mode moves closer to one and can decay more slowly. Holding also produces repeated states. Estimation efficiency depends on the function and the original chain, so the algebra does not prove a universal improvement.

</details>

</div>

<div class="exercise" id="mcmc-07-finite-chains-ex-6">

6. **Same target, slower motion.** For $0<\epsilon<1/2$, let $P_\epsilon=\begin{pmatrix}1-\epsilon&\epsilon\\\epsilon&1-\epsilon\end{pmatrix}$. Derive its stationary law and worst-case TV distance at time $t$. Compute $t_{\mathrm{mix}}(0.01)$ for $\epsilon=0.1$ and $0.01$.

<details>
<summary>Solution</summary>

Symmetry gives $\pi=(1/2,1/2)$. The nonstationary eigenvalue is $1-2\epsilon$, so $d(t)=\tfrac12(1-2\epsilon)^t$. The least integer time satisfying the tolerance is $\left\lceil\log(0.02)/\log(1-2\epsilon)\right\rceil$. For $\epsilon=0.1$ this is 18; for $\epsilon=0.01$ it is 194. Both chains have the same target, but as $\epsilon$ tends to zero the required time diverges.

</details>

</div>

## Key takeaways

- $\pi P=\pi$ means mass balances after a step; it does not say a chain from an arbitrary start is already at $\pi$.
- Irreducibility controls reachability. Aperiodicity is additionally needed for convergence of a late-time marginal, but not for the finite irreducible time-average law.
- Detailed balance is an especially useful way to prove stationarity, while circulating stationary flows show it is not required.
- TV distance quantifies distributional error. Eigenvalues expose decay or alternation in reversible finite chains; a stationary sample path can still be dependent.
- Exact transition correctness, finite-run error, discretization bias, and the target model are separate claims.
