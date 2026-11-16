# From a stationary law to a decision

Two simulation chains agree exactly about a population and its best action. One produces more correlated draws. What changes: the action's expected loss, the error of a finite average, the effect of the starting state, or the decision made from one run?

This lesson answers those four questions separately. The model is small enough to solve exactly, so no simulation diagnostic has to stand in for a proof. You will derive a stationary risk, a finite-run variance, a start-up bias, and the repeated-run distribution of an observed decision.

Preparation: finite conditional probabilities, expectation, variance and matrix multiplication; the book's [decisions chapter](../../books/bayesian/12_decisions.md) supplies the expected-loss background. Allow roughly 90–120 minutes, including practice; this is a study estimate. Work with fractions until the final display.

> Predict before calculating. If two chains have the same stationary distribution, must their finite averages have the same distribution? If one average has less variance, must it cross a given threshold less often? Write a reason for each prediction.

## A model we can audit

Use states $0$ (no hazard) and $1$ (hazard), with rows denoting the current state and columns the next state:

$$
P=\begin{pmatrix}1-a&a\\b&1-b\end{pmatrix},\qquad 0\leq a,b\leq1,\quad a+b>0.
$$

Let $Y_t=\mathbf1\{X_t=1\}$, and count **exactly** $N$ observations $X_0,\ldots,X_{N-1}$. Here $Y_t=X_t$ numerically, but the indicator notation makes the averaging target explicit. Write

$$
p=\Pr_\pi(X_t=1),\quad \rho=1-a-b,\quad \bar Y_N=\frac1N\sum_{t=0}^{N-1}Y_t.
$$

We compare chain S with $(a,b)=(1/20,3/20)$ and chain F with $(a,b)=(3/20,9/20)$. Their transition parameters are assumed known. The chain is a computational device for approximating a stationary expectation. Since the answer is available algebraically, simulation is unnecessary for solving this toy problem; its role is to expose distinct error sources that become harder to separate in larger models.

The action is a constant choice for a **fresh independent case with distribution $\pi$**. Protection costs $c=3/10$ whatever its state. Remaining unprotected loses $1$ in state $1$ and $0$ in state $0$. The loss table is

| Action | State 0 | State 1 |
|---|---:|---:|
| Unprotected | 0 | 1 |
| Protect | $3/10$ | $3/10$ |

If the target were the *next state of the observed chain*, the current state would matter: $\Pr(Y_{t+1}=1\mid Y_t)=a+\rho Y_t$. That is a different decision problem from the stationary constant-action risks below.

## Four objects to keep separate

1. **Stationary risk** averages a fixed action's loss against $\pi$. It is a deterministic model quantity.
2. **Stationary finite-run variance** describes variation of $\bar Y_N$ over repeated runs started from $\pi$.
3. **Start-up bias** is $E_q[\bar Y_N]-p$ for a specified initial law $\Pr(X_0=1)=q$. It is an expectation, not one run's error.
4. **Observed decision** is a random function of the realized count. Its risk is evaluated against the stated target law.

The subscript $\pi$ means a stationary start; $q$ means a possibly different start. Changing a subscript changes the probability experiment.

## Derive the stationary risk first

Write $\pi=(1-p,p)$. The state-1 balance equation gives

$$
p=(1-p)a+p(1-b),\qquad pb=(1-p)a,\qquad p=\frac{a}{a+b}.
$$

Because $a+b>0$, this determines the unique stationary probability for this two-state family. If $a=b=0$, every law is stationary and the formula is undefined; the calculator rejects that case. Both S and F have

$$
p=\frac14,\qquad R_\pi(\text{unprotected})=\frac14,\qquad
R_\pi(\text{protect})=\frac3{10}.
$$

Thus unprotected is uniquely optimal, and choosing protection adds the exact stationary loss

$$
\delta=\frac3{10}-\frac14=\frac1{20}.
$$

These answers do not depend on how many Monte Carlo draws we take. Longer runs improve a numerical approximation; they do not change the specified loss table or $\pi$.

**Pause and reconstruct.** Cover the balance equation. Explain why the stationary flow from $0$ to $1$ equals the reverse flow, then derive $p$ without looking. What would happen to the optimal action if the cost were $1/5$?

## Derive dependence and finite-run variance

First condition on the current state:

$$
E[Y_{t+1}\mid Y_t]=a+(1-a-b)Y_t=p+\rho(Y_t-p).
$$

Repeated conditioning yields, by induction,

$$
E[Y_{t+k}\mid Y_t]=p+\rho^k(Y_t-p).
$$

Under a stationary start, $E_\pi Y_t=p$ and $\operatorname{Var}_\pi(Y_t)=v=p(1-p)$. Therefore

$$
\operatorname{Cov}_\pi(Y_t,Y_{t+k})
=E_\pi[(Y_t-p)E(Y_{t+k}-p\mid Y_t)]
=v\rho^k.
$$

When $0<p<1$, the lag-$k$ correlation is $\rho^k$. Here $\rho_S=4/5$, $\rho_F=2/5$, and $v=3/16$. Chain S retains more correlation at every positive lag. Equal marginals do not imply independent draws or equal path distributions.

Expand the variance of a sum. There are $N$ diagonal terms and $N-k$ pairs at each positive lag $k$, counted twice:

$$
V_N:=\operatorname{Var}_\pi(\bar Y_N)
=\frac{v}{N^2}\left[N+2\sum_{k=1}^{N-1}(N-k)\rho^k\right].
$$

This is an exact finite-$N$ identity, not a central-limit approximation. It is the two-state specialization of the stationary visit-count calculation in [Aldous and Fill, §2.3](https://www.stat.berkeley.edu/users/aldous/RWG/Book_Ralph/Ch2.S3.html).

For an independent check or a shorter calculation, sum the finite geometric series:

$$
V_N=\frac{v}{N^2}\left[
N\frac{1+\rho}{1-\rho}
-\frac{2\rho(1-\rho^N)}{(1-\rho)^2}\right].
$$

The denominator is nonzero because $a+b>0$. The finite expression also works at $\rho=-1$; an infinite geometric series would not.

### Worked example: four stationary observations

For S, the positive-lag contribution before doubling is

$$
3\frac45+2\left(\frac45\right)^2+\left(\frac45\right)^3
=\frac{524}{125}.
$$

Hence

$$
V_4^S=\frac{3}{16\cdot16}\left(4+\frac{1048}{125}\right)
=\frac{1161}{8000}=0.145125.
$$

For F the corresponding sum is $198/125$, so $V_4^F=21/250=0.084$. Four independent Bernoulli draws with success probability $1/4$ would instead give $v/4=3/64$. Each statement assumes a stationary start.

When $|\rho|<1$, the exact expression also proves

$$
NV_N\longrightarrow v\tau,\qquad \tau=\frac{1+\rho}{1-\rho}.
$$

The asymptotic factors are $\tau_S=9$ and $\tau_F=7/3$. For large $N$, $V_N$ is approximately $v\tau/N$; the equality $V_N=v\tau/N$ generally fails at finite $N$. The corresponding asymptotic effective sample size $N/\tau$ describes precision for this particular indicator. It is not a proof that a finite run has reached stationarity. [Geyer's notes, §§3–5](https://www.stat.umn.edu/geyer/8054/notes/initseq.html) explain why these autocovariances refer to a stationary chain.

## A point start creates a different experiment

Let $\mu_t=\Pr_q(Y_t=1)$ and start with $\mu_0=q$. The same one-step relation gives

$$
\mu_t=p+(q-p)\rho^t.
$$

This describes the **marginal transient at time $t$**. Averaging all $N$ marginals gives a different quantity, the bias of the time average:

$$
B_N(q):=E_q[\bar Y_N]-p
=(q-p)\frac{1-\rho^N}{N(1-\rho)}.
$$

For example, start S at state $0$ and keep $X_0,\ldots,X_3$. Its expected average is

$$
E_0\bar Y_4=\frac14-\frac14\frac{1-(4/5)^4}{4(1-4/5)}
=\frac{131}{2000}.
$$

The bias is $-369/2000$. This does not say a realized four-observation average equals $131/2000$; such an average can only be $0,1/4,1/2,3/4,$ or $1$.

The earlier variance $V_N$ is **not** the variance under this point start. To see exactly what changes, condition as before:

$$
\operatorname{Cov}_q(Y_t,Y_{t+k})=\rho^k\mu_t(1-\mu_t),
$$

so

$$
\operatorname{Var}_q(\bar Y_N)=\frac1{N^2}
\sum_{t=0}^{N-1}\mu_t(1-\mu_t)
\left[1+2\sum_{k=1}^{N-1-t}\rho^k\right].
$$

The exact count distribution developed below also supplies this variance directly. The mean squared estimation error decomposes as $\operatorname{Var}_q(\bar Y_N)+B_N(q)^2$. A squared bias cannot replace the variance, and a stationary variance cannot simply be added to a point-start squared bias.

If you discard $B$ transitions and average $X_B,\ldots,X_{B+N-1}$, multiply the displayed mean bias by $\rho^B$. At $|\rho|<1$, this reduces its magnitude, but a finite discard does not make every nonstationary start exactly stationary. It also spends computation. Define the index convention before using any burn-in formula.

## Turn a realized estimate into an action

Let $K_N=\sum_{t=0}^{N-1}Y_t$. Use the plug-in rule

$$
\hat d_N=\begin{cases}
\text{protect},&K_N/N>3/10,\\
\text{unprotected},&K_N/N\leq3/10.
\end{cases}
$$

Ties deliberately choose unprotected. At the true $p=1/4$, protection is suboptimal, even when a realized estimate recommends it. As a random variable over repeated simulation runs, the selected action's stationary risk is

$$
R_\pi(\hat d_N)=\frac14+\frac1{20}\mathbf1\{10K_N>3N\}.
$$

This risk is either $1/4$ or $3/10$. The actual loss on the fresh target case is another random variable. Formally, let $Z\sim\pi$ be independent of the simulation trace. If $L$ denotes the stated loss table, then $E[L(\hat d_N,Z)\mid Y_0,\ldots,Y_{N-1}]=R_\pi(\hat d_N)$. Averaging over both the simulation used to choose an action and that fresh independent case gives

$$
E_q R_\pi(\hat d_N)=\frac14+\frac1{20}\Pr_q(10K_N>3N).
$$

The action gap converts a probability of computationally choosing a suboptimal action into expected regret. It does not convert variance directly into regret.

### Count the experiment exactly

Define $f_j(n,k)=\Pr_q(K_n=k,X_{n-1}=j)$. Initialize $f_0(1,0)=1-q$, $f_1(1,1)=q$, with all other cells zero. Conditioning on the last transition gives

$$
f_0(n+1,k)=(1-a)f_0(n,k)+bf_1(n,k),
$$

$$
f_1(n+1,k)=af_0(n,k-1)+(1-b)f_1(n,k-1).
$$

Out-of-range cells are zero. Sum $f_0(N,k)+f_1(N,k)$ over $10k>3N$. The reference calculator uses precisely this rational recursion. Its tests compare the results with independent enumeration of complete paths, not another copy of this recurrence.

### A smaller variance does not order every decision error

For $N=2$, protection occurs whenever either observation is $1$. Under a stationary start,

$$
\Pr_\pi(\hat d_2=\text{protect})
=1-\Pr_\pi(00)=1-(1-p)(1-a).
$$

This is $23/80$ for S and $29/80$ for F. Yet $V_2^S=27/160$ exceeds $V_2^F=21/160$. The lower-variance chain crosses this particular threshold more often: with only two draws, going from zero ones to one one already crosses $0.3$.

At $N=100$, the exact recursion gives protection probabilities approximately $0.3120096201$ and $0.1992130613$, respectively. The expected stationary risks are approximately $0.2656004810$ and $0.2599606531$. These rounded displays come from exact fractions in the calculator. They describe repeated finite runs, not a guarantee about a particular run.

## What kind of guarantee follows?

For a stationary start, wrong selection requires $\bar Y_N-p>\delta=1/20$. The elementary second-moment bound gives

$$
\Pr_\pi(\text{wrong action})\leq
\min\left\{1,\frac{V_N}{\delta^2}\right\}.
$$

This rigorous bound can be weak: at $N=100$ it yields only $1$ for both chains, while the exact probabilities above are smaller. For our nonnegative correlations, $V_N\leq v\tau/N$. Consequently $N=13500$ for S and $N=3500$ for F are sufficient, conservative sample sizes for a repeated-run wrong-action probability at most $1/20$ under a stationary start. These are bounds, not exact minimum sample sizes.

A claim about this fixed rule's repeated-run error is not a posterior probability that the model or its parameters are correct. A normal approximation using $v\tau/N$ is an asymptotic approximation, not an exact finite-$N$ confidence statement. If the start is not stationary, the preceding stationary bound needs revision using the actual start's moments or exact count law. None of these calculations validates an unknown real-world transition model.

## Stationarity can exist without marginal convergence

Take $a=b=1$. Then

$$
P=\begin{pmatrix}0&1\\1&0\end{pmatrix},\qquad \pi=(1/2,1/2),\qquad \rho=-1.
$$

From the point start $X_0=0$, the states are deterministically $0,1,0,1,\ldots$. The marginal state-1 probability alternates between $0$ and $1$ forever; it does not approach $1/2$. Starting from $\pi$ instead keeps every marginal equal to $\pi$, while the successive states remain perfectly dependent.

The time average still tends to $1/2$ from either point start. Under a stationary start its exact variance is $0$ for even $N$ and $1/(4N^2)$ for odd $N$. In particular, the finite formula proves $NV_N\to0$. But $1+2\sum_{k\geq1}(-1)^k$ does not converge: this limit does not justify a divergent infinite-series argument. The calculator's `asymptotic_variance()` method deliberately requires $|\rho|<1$; the finite variance method remains available here.

[Aldous and Fill, §2.1](https://www.stat.berkeley.edu/users/aldous/RWG/Book_Ralph/Ch2.S1.html) distinguish the occupation-frequency law of large numbers from marginal convergence, which additionally requires aperiodicity for an irreducible finite chain. This example makes the distinction visible without relying on terminology alone.

## Reproduce, then explain without code

Run from the book directory:

```sh
python3 -B extensions/stationary_risk_v2/risk.py
python3 -B extensions/stationary_risk_v2/risk.py --a 3/20 --b 9/20 --n 100 --json
python3 -B extensions/stationary_risk_v2/risk.py --n 4 --initial 0
python3 -B extensions/stationary_risk_v2/risk.py --a 1 --b 1 --n 5 --initial 0
```

The output labels the stationary variance as a benchmark even when the specified start differs. `count_distribution(n,q)` supplies the actual-start repeated-run count law. Decimal strings such as `0.05` are parsed exactly; binary floating point inputs to the Python API are rejected. Large $N$ produces large fractions and a quadratic number of rational operations, so the count recursion is an audit tool for modest finite examples, not a large-scale sampler.

Now use [practice](./stationary_risk_v2-practice.md). After a delay, reconstruct which probability experiment each of $R_\pi(d)$, $V_N$, $B_N(q)$, and $R_\pi(\hat d_N)$ describes. If you can only recite formulas, explain the $N=2$ counterexample and the alternating chain aloud before proceeding.

---

Printable copy: [study edition (PDF)](../../pdfs/bayesian/study-editions/stationary_risk_v2.pdf), the lesson and practice without worked answers.
