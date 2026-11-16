# 08. General-state convergence theory

## First-reading route

This chapter is optional on a first reading of Volume 1. Continue from [finite-state chains](07-finite-chains.md) to [Metropolis–Hastings](09-metropolis-hastings.md), then return here when a general-state convergence claim needs justification. Invariance says that one update preserves a target law; it does not guarantee convergence from your chosen initial state. Harris recurrence, aperiodicity and drift/minorisation conditions support different convergence conclusions and require separate hypotheses. A diagnostic plot does not establish those hypotheses, and an asymptotic rate need not give a useful finite-run bound. The chapter develops these distinctions in full; later algorithm chapters retain their own explicit assumptions even when this route postpones the proofs.

## Learning goals and prerequisites

An invariant distribution answers a preservation question: if the chain already has the desired distribution, does one update preserve it? Computation requires more. We usually choose a particular initial value, run finitely many updates, and average a function of the resulting states. Each part of that sentence introduces a different mathematical question.

After this chapter you should distinguish convergence of marginal distributions from convergence of averages; explain the role of Harris recurrence; construct a small-set minorization and a drift inequality; and identify the assumptions missing from a convergence claim. You should also recognize the difference between existence of an asymptotic rate and a usable numerical bound.

The prerequisites are [probability and integration](02-probability.md), [Monte Carlo laws of large numbers](05-monte-carlo.md), and [finite-state chains](07-finite-chains.md). Our setting throughout is a standard Borel measurable space $(E,\mathcal E)$, a time-homogeneous Markov kernel $P$, and, whenever invoked, an invariant **probability** measure $\pi$. Euclidean spaces with their Borel sets and countable spaces with all subsets satisfy this setting. An improper posterior cannot supply the invariant probability required by these theorems.

## 8.1 From a transition matrix to an update rule

Consider the update

$$
X_{n+1}=aX_n+\sqrt{1-a^2}Z_n,\qquad |a|<1,
$$

where the $Z_n$ are independent standard normal variables, independent of $X_0$. From a deterministic state $x$, the next state has distribution $N(ax,1-a^2)$. Thus $P(x,A)$ is the probability that this normal variable belongs to a measurable set $A$.

For a measurable function $f$, write

$$
Pf(x)=\int_E f(y)P(x,dy),
\qquad
P^{n+1}(x,A)=\int_E P^n(y,A)P(x,dy).
$$

The first expression exists for nonnegative $f$, or when the integral is absolutely finite. The notation $P^n(x,\cdot)$ describes the distribution after $n$ transitions from $X_0=x$. Invariance means

$$
\pi P(A)=\int_E P(x,A)\pi(dx)=\pi(A)
$$

for every measurable $A$. For the Gaussian update, a standard normal input gives a standard normal output: independent normal summands have mean zero and combined variance $a^2+(1-a^2)=1$.

A kernel need not possess an ordinary transition density. For example, an update that holds its current state with probability $h\in[0,1]$ and otherwise draws from $\pi$ has

$$
P(x,\cdot)=h\delta_x+(1-h)\pi.
$$

Even if $\pi$ has a continuous density, the transition includes an atom at $x$. Kernel notation accommodates both pieces. This will matter when rejection creates repeated states in [Metropolis–Hastings](09-metropolis-hastings.md).

These statements concern ideal probability laws. A floating-point implementation has additional numerical behavior; proving a property of its intended kernel does not automatically prove that the code implements that kernel.

## 8.2 Three questions hidden inside “convergence”

The total variation distance between probability measures is

$$
\|\mu-\nu\|_{\mathrm{TV}}
=\sup_{A\in\mathcal E}|\mu(A)-\nu(A)|.
$$

This convention takes values between zero and one. When both measures have densities $p,q$ against the same reference measure, it equals $\tfrac12\int|p-q|$. For bounded measurable $f$,

$$
|\mu(f)-\nu(f)|\le 2\|f\|_\infty
\|\mu-\nu\|_{\mathrm{TV}}.
$$

The factor two belongs to this normalization. Indicators give the sharper bound directly from the definition. Unbounded functions need additional control: small total variation distance alone does not control a second moment.

**Marginal convergence** asks whether $P^n(x,\cdot)$ approaches $\pi$. **An ergodic law of large numbers** asks whether the path average

$$
\overline f_N=\frac1N\sum_{n=0}^{N-1}f(X_n)
$$

approaches $\pi(f)$ almost surely. **A central limit theorem** asks whether $\sqrt N(\overline f_N-\pi(f))$ approaches a normal distribution with finite asymptotic variance. The third conclusion requires more than the second.

A useful warning comes from independent sampling. For any finite collection of draws from a nonatomic distribution, the empirical distribution assigns mass one to the finite set of observed values. The target assigns that set mass zero. Their total variation distance is therefore exactly one, even though averages of integrable functions converge correctly. The marginal law of each draw can equal $\pi$ while the realized empirical measure remains maximally distant in total variation.

A histogram compares probabilities only after grouping values into bins; it does not estimate the supremum over all measurable sets. Metrics based on moving mass through a geometric distance, such as Wasserstein distance, pose another question again. Always specify both the mathematical object and its mode of convergence.

## 8.3 Accessibility and return

Let $\psi$ be a nonzero sigma-finite measure. The chain is **$\psi$-irreducible** if, for every measurable $A$ with $\psi(A)>0$ and every $x\in E$,

$$
\Pr_x(\tau_A<\infty)>0,
\qquad \tau_A=\inf\{n\ge1:X_n\in A\}.
$$

It is **Harris recurrent** if these probabilities equal one. It is **positive Harris recurrent** if it is Harris recurrent and admits an invariant probability. Here “positive” concerns normalization of the invariant measure, not the sign of states or transition densities.

Positive accessibility and certain eventual return are different. A chain can have a chance of reaching the useful region at every step while retaining positive probability of escaping forever. Section 8.9 computes this possibility exactly.

In continuous spaces, singleton points usually have zero $\psi$ measure. Demanding eventual visitation to every exact real number would reject ordinary continuous samplers for the wrong reason. Accessibility concerns sets of positive measure, such as intervals or neighborhoods of positive volume.

For an irreducible chain, **aperiodicity** excludes a cyclic decomposition of its essential class into $d>1$ disjoint measurable classes visited successively with probability one. On a finite space this reduces to the familiar greatest-common-divisor definition. Deterministic alternation between zero and one has period two. Adding a positive holding probability to both states removes this particular periodicity.

Null sets deserve care because initialization is deliberate. A set with target probability zero may still contain a convenient starting point, such as an all-zero vector. The importance of checking exceptional starts, including for coordinate updates, is explored by [Roberts and Rosenthal, *Harris recurrence*](https://probability.ca/jeff/ftpdir/harris.pdf). This is a reason to inspect assumptions, not a verdict against coordinate sampling.

## 8.4 What the ergodic theorems guarantee

Here are two separate sufficient guarantees on our stated measurable setting.

**Theorem 8.1 (Marginal).** If $P$ is positive Harris recurrent and aperiodic with invariant probability $\pi$, then

$$
\|P^n(x,\cdot)-\pi\|_{\mathrm{TV}}\longrightarrow0
\quad\text{for every }x\in E.
$$

**Theorem 8.2 (Average).** If $P$ is positive Harris recurrent and $f:E\to\mathbb R$ is measurable with $\pi(|f|)<\infty$, then $\overline f_N\to\pi(f)$ almost surely under $\Pr_x$, for every $x$. Aperiodicity is unnecessary for this conclusion. These classical results are developed in [Meyn and Tweedie, *Markov Chains and Stochastic Stability*](https://probability.ca/MT/); the every-start marginal statement also follows directly from Theorem 6 of [Roberts and Rosenthal (2006)](https://probability.ca/jeff/ftpdir/harris.pdf) with period one.

The quantifier “every” has substance. Under just $\psi$-irreducibility, aperiodicity, and an invariant probability, marginal convergence is guaranteed for $\pi$-almost every initial state; exceptional starts may remain. See the precise distinction in [Roberts and Rosenthal’s general-state survey](https://probability.ca/jeff/ftpdir/probsurv.pdf).

Two elementary chains help separate the assumptions. The identity kernel $P(x,\cdot)=\delta_x$ preserves every probability distribution, but a run from $x$ never leaves $x$. Its average equals $f(x)$ forever. Invariance has supplied no exploration.

For deterministic alternation on $\{0,1\}$, the uniform target is invariant and the chain is positive Harris recurrent. From zero, the marginal law alternates between point masses; its distance from the uniform target stays $1/2$. Nevertheless, the average of any $f$ tends to $[f(0)+f(1)]/2$. Periodicity disrupts the marginal limit while leaving time averages valid.

A proof roadmap uses repeated returns to a suitable region and occasional refreshes there. These can break a path into cycles whose long-run reward per unit time yields the ergodic average. Aperiodicity additionally prevents the distribution at a fixed time from remaining locked to a cycle phase. The complete general theorem requires more machinery than this roadmap; the next sections prove the simpler global-refresh case directly.

## 8.5 Small sets provide a shared component

A measurable set $C$ is **small** if there are an integer $m\ge1$, a number $\epsilon\in(0,1]$, and a probability measure $\nu$ such that

$$
P^m(x,A)\ge\epsilon\nu(A)
\quad\text{for all }x\in C,\ A\in\mathcal E.
$$

The same $m,\epsilon,\nu$ must work throughout $C$. When $\epsilon<1$, define

$$
R(x,A)=\frac{P^m(x,A)-\epsilon\nu(A)}{1-\epsilon}.
$$

Nonnegativity follows from minorization, and total mass is one, so this is a residual probability kernel on $C$. A block transition can be generated by tossing a coin: with probability $\epsilon$ draw from $\nu$; otherwise draw from $R(x,\cdot)$. If $\epsilon=1$, the transition is simply $\nu$ and no residual is needed.

Two chains currently in $C$ can use the same coin and the same $\nu$ draw. On a refresh they meet exactly, regardless of their earlier states. Independent continuous draws would almost surely differ; the construction deliberately introduces dependence between chains while preserving each chain's marginal transition.

A **petite** set permits the same lower bound for a mixture $\sum_{k\ge0}q_kP^k$, where $(q_k)$ is a probability distribution on nonnegative integers. Smallness uses one fixed time, so it implies petiteness. We use petite sets only when stating a later rate theorem. Compactness by itself does not establish either property: the kernel must supply the required common mass.

### 8.5.1 Regeneration: what a refresh buys for one path

For a **one-step** minorization, record the refresh coin as well as the state. Outside $C$, use $P$ normally; inside $C$, use the coin and residual kernel above. Marginalizing the coin gives exactly $P$. If a refresh occurs during the transition from time $n$ to $n+1$, mark $T=n+1$: its state is drawn from $\nu$, independently of the preceding path. This is a **regeneration**. The common outgoing law acts like a single recurrent state in an enlarged state space, often called an atom. It does not require the original state space to contain a point of positive target mass. See [Glynn's treatment of randomized regeneration, Section 8](https://web.stanford.edu/~glynn/papers/2006/G06.pdf).

Write the successive regeneration times as $T_1<T_2<\cdots$. With fresh independent randomness at each update, the complete tours $X_{T_j},\ldots,X_{T_{j+1}-1}$ are independent and identically distributed. The initial segment before $T_1$ has a different law and is excluded. Define each tour's length and reward by

$$
L_j=T_{j+1}-T_j,
\qquad
S_j=\sum_{n=T_j}^{T_{j+1}-1}f(X_n).
$$

The pairs $(L_j,S_j)$ are iid across tours; the entries of a pair need not be independent. Suppose $T_1<\infty$ almost surely, $0<\mathbb E L_1<\infty$, and the expected sum of $|f|$ in a complete tour is finite. Applying the iid strong law to both sums gives

$$
\frac{\sum_{j=1}^{J}S_j}{\sum_{j=1}^{J}L_j}
\longrightarrow\frac{\mathbb E S_1}{\mathbb E L_1}
\quad\text{almost surely}.
$$

For a positive Harris chain with $\pi(|f|)<\infty$, Section 8.4 also makes the left side converge to $\pi(f)$: it is the ordinary path average over an increasing sequence of completed tours. Thus $\pi(f)=\mathbb E S_1/\mathbb E L_1$. This reward-per-time identity underlies regenerative simulation; see [Glynn and Iglehart, Example 2.3](https://web.stanford.edu/~glynn/papers/1987/GI87a.pdf). It does not say that the ratio is unbiased for a finite number of tours, or that an unweighted average of the tour averages $S_j/L_j$ has the same limit.

Here is a complete finite example with $f(x)=x$ on $\{0,1\}$:

$$
P=\begin{pmatrix}0.9&0.1\\0.3&0.7\end{pmatrix},
\qquad \pi=(3/4,1/4).
$$

Take $C=E$, $\epsilon=1/5$ and $\nu=(1/2,1/2)$. Subtracting the common row $(0.1,0.1)$ and dividing by $0.8$ gives

$$
R=\begin{pmatrix}1&0\\1/4&3/4\end{pmatrix},
\qquad P(x,\cdot)=\tfrac15\nu+\tfrac45 R(x,\cdot).
$$

A tour starts with probability $1/2$ of state one. If it survives $k$ transitions without refreshing, the residual kernel leaves it at one with probability $\tfrac12(3/4)^k$. Independent refresh coins give $\Pr(L_1>k)=(4/5)^k$ for $k\ge0$. Summing the expected contributions therefore yields

$$
\mathbb E L_1=\sum_{k\ge0}(4/5)^k=5,
\qquad
\mathbb E S_1=\frac12\sum_{k\ge0}(3/5)^k=\frac54.
$$

Their ratio is $1/4$, as required. Refresh states alone instead estimate $\nu(f)=1/2$. Even averaging complete tour means equally gives the wrong limit, $(\log2)/2\approx0.34657$, as Exercise 7 derives. Long tours contribute more observations and must receive their corresponding weight.

Record the coin labels: a refresh may redraw the same state, so a visible state change is not a regeneration detector. With only an $m$-step minorization, $m>1$, intermediate bridge states can make adjacent full tours dependent; the iid argument here is restricted to one-step splitting ([Glynn, Section 8](https://web.stanford.edu/~glynn/papers/2006/G06.pdf)). Rare refreshes can also leave very few complete tours in a finite run. Additional moment assumptions are needed for normal error bars; see [Chapter 13](13-mc-error.md).

## 8.6 A complete finite-time bound

Suppose the whole space $E$ is small with constants $(m,\epsilon,\nu)$, and $\pi$ is invariant. Then

$$
\sup_x\|P^n(x,\cdot)-\pi\|_{\mathrm{TV}}
\le (1-\epsilon)^{\lfloor n/m\rfloor}.
$$

Here is the coupling proof. Start one chain at $x$ and another from $\pi$. At successive block endpoints, use the shared refresh construction for $P^m$. Before meeting, a successful coin makes their endpoints equal. After meeting, give them identical subsequent transitions. The second chain remains stationary at every endpoint because its marginal kernel is $P^m$.

After $k$ blocks, failure to have met has probability at most $(1-\epsilon)^k$. For any coupled random variables $U,V$ and measurable $A$,

$$
|\Pr(U\in A)-\Pr(V\in A)|\le\Pr(U\ne V),
$$

since the event indicators agree whenever $U=V$. Taking the supremum proves the bound at block endpoints. Applying the remaining $r<m$ transitions cannot increase total variation distance: for a Markov kernel $K$, integration of the function $K(\cdot,A)\in[0,1]$ gives $\|\mu K-\eta K\|_{\mathrm{TV}}\le\|\mu-\eta\|_{\mathrm{TV}}$. Write $n=km+r$ and use invariance again. This completes the proof. For $\epsilon=1$, interpret the bound as one before the first full block and zero afterward.

This is a Doeblin bound, uniform over initial states. With $0<\epsilon<1$, a sufficient condition for marginal error at most $\delta\in(0,1)$ is

$$
n\ge m\left\lceil\frac{\log\delta}{\log(1-\epsilon)}\right\rceil.
$$

For $m=1$, $\epsilon=0.1$, and $\delta=0.01$, this gives 44 transitions. That controls the law at time 44; it does not make subsequent observations independent or supply the standard error of their average. Moreover, a valid but tiny $\epsilon$ may produce an unusably large bound.

## 8.7 Drift controls excursions

Local refresh opportunities help only if the chain reaches them. A **drift function** is a measurable finite function $V:E\to[1,\infty)$ used to quantify difficult excursions. A common condition is

$$
PV(x)\le\lambda V(x)+b\mathbf1_C(x),
\qquad 0<\lambda<1,\quad 0\le b<\infty.
$$

Outside $C$, the conditional expectation of $V$ contracts by a fixed fraction. Inside $C$, the additive allowance permits random movement outward. The inequality is an expectation statement: individual trajectories can still make large excursions.

A conservative sufficient theorem is as follows: suppose $P$ is $\psi$-irreducible and aperiodic with invariant probability $\pi$, $C$ is small, $V$ is finite everywhere and bounded on $C$, and the displayed inequality holds everywhere. Then there are $K<\infty$ and $\rho\in(0,1)$ such that

$$
\|P^n(x,\cdot)-\pi\|_{\mathrm{TV}}
\le K V(x)\rho^n
\quad\text{for every }x\in E,\ n\ge0.
$$

This is a standard drift–minorization consequence; see Theorem 9 and the stronger $V$-uniform bound in Fact 10 of [Roberts and Rosenthal](https://probability.ca/jeff/ftpdir/probsurv.pdf). The finite-everywhere hypothesis avoids concealing excluded initial states behind an infinite drift function.

The more general phrase **geometric ergodicity** usually denotes a bound $M(x)\rho^n$, with the allowed initial states explicitly specified. **Uniform ergodicity** allows one finite $M$ for all $x$. An unbounded $V$ gives no uniform bound through the displayed theorem. Neither definition supplies numerical values of its constants automatically.

The function $V$ measures how difficult a state is to recover from; it need not resemble a density or a negative log density. Drift and minorization perform different jobs: controlling excursions and providing shared refresh opportunities. Their interaction underlies the theorem, while the constants can deteriorate substantially when the small set is enlarged or multiple steps are needed.

## 8.8 Worked example: a Gaussian chain

Return to the Gaussian update with $0<|a|<1$. Repeated substitution gives

$$
X_n=a^n x+\sqrt{1-a^2}\sum_{j=0}^{n-1}a^jZ_{n-1-j},
\qquad
P^n(x,\cdot)=N(a^nx,1-a^{2n}).
$$

The variance follows from summing a geometric series. For each fixed $x$, the mean tends to zero and the variance to one. We now check the drift theorem directly, rather than relying only on this closed form.

Set $V(x)=1+x^2$. Conditional second moments yield

$$
PV(x)=1+a^2x^2+(1-a^2)=2-a^2+a^2x^2.
$$

Take $\lambda=(1+a^2)/2$. Subtraction gives

$$
PV(x)-\lambda V(x)
=\frac{1-a^2}{2}(3-x^2).
$$

Therefore $C=[-\sqrt3,\sqrt3]$ and $b=3(1-a^2)/2$ establish the required drift. The function is bounded by four on $C$ and finite everywhere.

To show smallness, let $\sigma=\sqrt{1-a^2}$, $R=\sqrt3$, and choose $L>0$. For $x\in C$ and $|y|\le L$, the triangle inequality gives $|y-ax|\le L+|a|R$. Hence the transition density is at least

$$
k=\frac1{\sqrt{2\pi}\sigma}
\exp\left[-\frac{(L+|a|R)^2}{2\sigma^2}\right].
$$

Integrating over $A\cap[-L,L]$ proves $P(x,A)\ge2Lk\,\nu(A)$, where $\nu$ is uniform on $[-L,L]$. Thus $\epsilon=2Lk$ works. It cannot exceed one because it is a lower bound on probability mass.

For $a=0.8$ and $L=0.3$, we obtain $\sigma=0.6$, $\lambda=0.82$, $b=0.54$, and $\epsilon\approx0.00771$. The positive transition density makes every positive-Lebesgue-measure set accessible in one step. It also excludes a nontrivial cyclic decomposition, so the chain is aperiodic. Together with the invariant normal law, the theorem proves geometric convergence from every real start. The local $\epsilon$ cannot be inserted into the global Doeblin formula: refreshes are guaranteed only when the chain is in $C$.

The convergence is **not uniform**. Fix $n\ge1$ and let $|x|$ grow. The mean $a^nx$ becomes arbitrarily distant while the variance remains fixed. For any $\eta>0$, choose a central interval $B=[-T,T]$ with $\pi(B)>1-\eta$. Then $P^n(x,B)\to0$ as $|x|\to\infty$, so the supremum over starts of the TV distance is one. No common finite $M$ and $\rho<1$ can bound that supremum by $M\rho^n$ for all $n$.

If $a=0$, one transition is an independent target draw, so uniform convergence holds immediately. Also notice that using shared Gaussian noise for two chains with $a\ne0$ gives difference $a^n(x-y)$. Distance contracts but never becomes exactly zero from unequal starts. Contracting distance and constructing an exact meeting are distinct coupling goals, developed further in [Chapter 31](31-coupling.md) and [perfect simulation](32-perfect-simulation.md).

## 8.9 Worked example: an exceptional starting set

On the positive integers, make state 1 absorbing. From $x\ge2$, move to 1 with probability $1/x^2$ and otherwise to $x+1$. This is the Geyer construction discussed by [Roberts and Rosenthal](https://probability.ca/jeff/ftpdir/harris.pdf).

The distribution $\pi=\delta_1$ is invariant. Taking $\psi=\delta_1$ makes the chain $\psi$-irreducible: every set of positive $\psi$ measure contains 1, which is reachable with positive probability from every state. Its essential class is the aperiodic singleton $\{1\}$. This measure-based irreducibility does not say that every integer communicates with every other integer.

Starting at $x\ge2$, avoiding 1 for $n$ transitions forces the path $x,x+1,\ldots,x+n$. Its probability telescopes:

$$
q_n(x)=\prod_{j=x}^{x+n-1}\left(1-\frac1{j^2}\right)
=\prod_{j=x}^{x+n-1}\frac{(j-1)(j+1)}{j^2}
=\frac{(x-1)(x+n)}{x(x+n-1)}.
$$

Thus $P^n(x,\cdot)=(1-q_n(x))\delta_1+q_n(x)\delta_{x+n}$ and

$$
\|P^n(x,\cdot)-\pi\|_{\mathrm{TV}}
=q_n(x)\longrightarrow\frac{x-1}{x}>0.
$$

For $x=2$, the distances at $n=1,10,100$ are $0.75$, approximately $0.54545$, and approximately $0.50495$. The limiting failure probability is one half. The chain is not Harris recurrent because it can avoid the positive-target-mass set $\{1\}$ forever.

For $f=\mathbf1_{\{1\}}$, trajectories that hit 1 eventually have average tending to one; escaping trajectories have average zero forever. Starting at 2, each outcome has probability one half. No fixed burn-in removes this failure. Meanwhile, starting at 1 gives perfect stationarity immediately, so the theorem with a $\pi$-almost-everywhere qualifier remains correct. The example isolates exactly why that qualifier cannot be dropped.

## 8.10 Slower rates and finite-run interpretation

A weaker inward force can yield polynomial control. A useful sufficient statement assumes $\psi$-irreducibility, aperiodicity, a petite set $C$, finite measurable $V\ge1$ bounded on $C$, constants $c>0$, $b<\infty$, $b\ge0$, and $0<\alpha<1$, with

$$
PV\le V-cV^\alpha+b\mathbf1_C.
$$

There is then an invariant probability $\pi$, and for every $x$,

$$
n^{\alpha/(1-\alpha)}
\|P^n(x,\cdot)-\pi\|_{\mathrm{TV}}\longrightarrow0.
$$

This is a specialization of Theorem 2.8 of [Douc, Fort, Moulines, and Soulier](https://arxiv.org/pdf/math/0407122). Their rate construction uses $H(v)=\int_1^v du/\phi(u)$ and $r(t)=\phi(H^{-1}(t))$. Substituting $\phi(v)=cv^\alpha$ gives

$$
H(v)=\frac{v^{1-\alpha}-1}{c(1-\alpha)},
\qquad
r(t)=c[1+c(1-\alpha)t]^{\alpha/(1-\alpha)}.
$$

The hypotheses of that theorem hold because $\phi$ is positive, increasing, concave and differentiable, with $\phi'(v)\to0$. Taking its interpolation functions $\Psi_1(u)=u$ and $\Psi_2(u)=1$ gives total variation convergence at rate $r(n)$; our finite-everywhere $V$ makes its set $\{V<\infty\}$ all of $E$.

The rate exponent concerns an upper convergence guarantee. A chain satisfying this condition may also satisfy a stronger condition; the theorem does not prove that geometric convergence is impossible. Nor does any of these rate labels alone establish a central limit theorem for every integrable observable.

For practical reading, identify the target probability, kernel, initialization quantifier, convergence metric, integrability assumption, and available constants. A fixed finite burn-in preserves an already valid LLN because finitely many terms have vanishing weight; it cannot repair an invalid one. A finite trace can reveal trapping or oscillation, but passing diagnostics cannot prove an all-state theorem.

[Kernel comparison](12-kernel-design.md), [Monte Carlo error](13-mc-error.md), and [diagnostics](14-diagnostics.md) address different pieces of this workflow. History-dependent tuning requires the additional theory of [adaptation](15-adaptation.md). Exact invariance, finite-run error, numerical discretization bias, and assumptions in the statistical model remain separate questions.

## 8.11 Laboratory and executable calculation

The finite-state laboratory multiplies probability vectors by a fixed three-state matrix. Change **Initial state** among 0, 1 and 2, then increase **Samples / iterations** to compare the approach of each state probability to its limiting value. The display includes the initial distribution; a count of $n$ means $n-1$ transitions. Changing the seed has no effect on these deterministic probability curves. The widget has no transition editor or occupation-average display; work through the alternating-chain comparison in Exercise 3. These finite-state calculations illustrate marginal convergence but cannot certify Harris recurrence on a continuous space.

<div class="mcmc-lab" data-lab="markov"></div>

Run `python examples/ch08.py` for the seeded Gaussian calculation, exact rational escape probabilities, and the labeled regeneration example. The last example checks the matrix split exactly and compares the ratio of total rewards to total lengths with the incorrect unweighted tour average. Change $a$ from $0.8$ toward one and observe how the drift factor approaches one and the displayed minorization deteriorates. The simulation checks moments informally; the mathematical calculation establishes the hypotheses. Neither a close sample moment nor its occasional discrepancy is a proof about total variation convergence.

## 8.12 Exercises and solutions

<div class="exercise" id="mcmc-08-convergence-ex-1">

### Exercise 1: preservation without exploration

Does the identity kernel preserve a standard normal target? What does a run estimate for $f(x)=x^2$ from $X_0=2$?

<details>
<summary>Solution</summary>

Integrating $P(x,A)=\mathbf1_A(x)$ against the normal target returns $\pi(A)$, so invariance holds. Every observation equals two, making every estimated second moment four instead of one. Accessibility fails: an interval not containing two cannot be reached from that start.

</details>

</div>

<div class="exercise" id="mcmc-08-convergence-ex-2">

### Exercise 2: the empirical measure

Prove that a finite empirical distribution has total variation distance one from any nonatomic target, even for independent target draws.

<details>
<summary>Solution</summary>

For a realized sample, let $A$ be its finite set of distinct values. The empirical measure gives $A$ mass one, and nonatomicity gives target mass zero. This yields a lower bound of one, the maximum possible distance. The set may depend on the realized sample because the supremum defining distance is evaluated for that pair of measures.

</details>

</div>

<div class="exercise" id="mcmc-08-convergence-ex-3">

### Exercise 3: periodic averages

For deterministic alternation on $\{0,1\}$ starting at zero, compute marginal TV distance from the uniform law and bound the average error for arbitrary $f$.

<details>
<summary>Solution</summary>

Each marginal is a point mass, giving distance $1/2$. Among $N$ observations, the counts of zeros and ones differ by at most one. Therefore the difference between the average and $[f(0)+f(1)]/2$ has absolute value at most $|f(0)-f(1)|/(2N)$. The average converges despite periodicity.

</details>

</div>

<div class="exercise" id="mcmc-08-convergence-ex-4">

### Exercise 4: a numerical run-length bound

A global one-step minorization has $\epsilon=0.1$. Find a sufficient iteration count for marginal TV error at most $0.01$. Does it justify treating retained draws as independent?

<details>
<summary>Solution</summary>

Solve $0.9^n\le0.01$. Since $\log(0.9)<0$, the inequality becomes $n\ge\log(0.01)/\log(0.9)\approx43.71$, so 44 suffices. This bounds one marginal distribution. Consecutive retained draws still use the chain's transitions and can remain dependent.

</details>

</div>

<div class="exercise" id="mcmc-08-convergence-ex-5">

### Exercise 5: check the Gaussian argument

Verify the drift constants and interval minorization in Section 8.8. Explain why they do not establish uniform ergodicity, and handle $a=0$.

<details>
<summary>Solution</summary>

Expanding the conditional second moment gives $PV-\lambda V=(1-a^2)(3-x^2)/2$. This is nonpositive outside $C$ and at most $b=3(1-a^2)/2$ inside. On $C\times[-L,L]$, the inequality $|y-ax|\le L+|a|\sqrt3$ yields the density lower bound $k$; integration gives $\epsilon=2Lk$. Smallness is local. For fixed $n$ and nonzero $a$, arbitrarily distant starts shift the normal law away from any central target interval, giving supremum TV distance one. For $a=0$, every transition is already $N(0,1)$, a global refresh with probability one.

</details>

</div>

<div class="exercise" id="mcmc-08-convergence-ex-6">

### Exercise 6: diagnose the missing assumption

Derive $q_n(x)$ for the escaping integer chain. Assess the assertion that invariance, irreducibility, and aperiodicity guarantee convergence from every start.

<details>
<summary>Solution</summary>

Factor each term as $[(j-1)/j][(j+1)/j]$. The two products reduce to $(x-1)/(x+n-1)$ and $(x+n)/x$. Their product tends to $(x-1)/x$. Since this is the probability of avoiding 1 forever, Harris recurrence fails. Invariance, measure-based irreducibility, and aperiodicity hold, but only the almost-everywhere convergence conclusion is justified. The exceptional set $\{2,3,\ldots\}$ has target mass zero and includes every failing start.

</details>

</div>

<div class="exercise" id="mcmc-08-convergence-ex-7">

### Exercise 7: weighting regenerated tours

For the two-state regeneration example in Section 8.5.1, calculate $\mathbb E[S_1\mid L_1=\ell]$. Deduce the almost-sure limit of $J^{-1}\sum_{j=1}^J S_j/L_j$. You may use $\sum_{\ell\ge1}z^\ell/\ell=-\log(1-z)$ for $|z|<1$. Explain why iid tours do not make either this estimate or an average of refresh states a consistent estimate of $\pi(f)$.

<details>
<summary>Solution</summary>

The length is determined by independent refresh coins. Conditional on length $\ell$, the states are generated from $\nu$ followed by $\ell-1$ residual transitions, so

$$
\mathbb E[S_1\mid L_1=\ell]
=\frac12\sum_{k=0}^{\ell-1}(3/4)^k
=2[1-(3/4)^\ell].
$$

Since $\Pr(L_1=\ell)=\tfrac15(4/5)^{\ell-1}$,

$$
\mathbb E\left[\frac{S_1}{L_1}\right]
=\frac12\sum_{\ell\ge1}\frac{(4/5)^\ell-(3/5)^\ell}{\ell}
=\frac12\log2.
$$

The tour averages are iid and bounded, so their average converges to this value, which differs from $1/4$. For just one tour it is also the expectation of the reward/length ratio, demonstrating finite-sample bias. Refresh states follow $\nu$, giving mean $1/2$, rather than the target mean. The consistent estimate sums rewards and lengths separately before dividing: it weights each tour by the number of observations it contains.

</details>

</div>

## Key takeaways and further reading

Invariance preserves a distribution; Harris recurrence supplies reliable return from every initial state; aperiodicity removes persistent phase effects in marginal laws. Integrability is indispensable when converting recurrence into an averaging theorem. Small sets provide common transition mass, while drift controls excursions. Explicit global minorization can yield an explicit run length; a qualitative geometric theorem usually cannot do so by itself.

The references linked above provide complementary reading: [Roberts and Rosenthal (2004)](https://probability.ca/jeff/ftpdir/probsurv.pdf) for general-state convergence and coupling; [Roberts and Rosenthal (2006)](https://probability.ca/jeff/ftpdir/harris.pdf) for exceptional starts and Harris recurrence; [Douc and colleagues (2004)](https://arxiv.org/pdf/math/0407122) for subgeometric drift conditions; [Meyn and Tweedie](https://probability.ca/MT/) for the systematic recurrence and ergodic-theorem framework; and [Glynn (2006)](https://web.stanford.edu/~glynn/papers/2006/G06.pdf) together with [Glynn and Iglehart (1987)](https://web.stanford.edu/~glynn/papers/1987/GI87a.pdf) for regenerative simulation and its error analysis.
