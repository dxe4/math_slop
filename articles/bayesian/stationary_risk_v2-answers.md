# Worked answers

Read a section after attempting the corresponding [practice task](./stationary_risk_v2-practice.md). Equivalent exact derivations are welcome. In all examples, observations start at time zero.

## 1. Faded derivation: chain F

Balance gives $p=a/(a+b)=1/4$, so the unprotected and protected stationary risks are $1/4$ and $3/10$. Unprotected is optimal; the gap is $1/20$.

The conditional mean is $3/20+(2/5)Y_t$, so $\rho=2/5$. Under stationarity the covariance is $(3/16)(2/5)^k$. For $N=4$,

$$
3\rho+2\rho^2+\rho^3=\frac65+\frac8{25}+\frac8{125}=\frac{198}{125},
$$

$$
V_4=\frac3{256}\left(4+\frac{396}{125}\right)=\frac{21}{250}.
$$

Four independent draws would give $3/64$, which is smaller. Identical marginal distributions do not remove the covariance terms.

With $q=0$, the marginal probabilities at times $0,1,2,3$ are $0,3/20,21/100,117/500$. Their average is $297/2000$, and its bias relative to $1/4$ is $-203/2000$. The stationary variance assumed marginal variance $3/16$ at every time; here the first observation has variance zero, and later marginal variances also change.

The trace $0,0,1,0$ has empirical mean $1/4$, so it chooses unprotected. That action's stationary risk is $1/4$ and regret is zero. These are determined after seeing this trace; the stationary risk still averages loss over a fresh stationary target case. The expected empirical mean $297/2000$ averages over hypothetical point-start traces and need not equal this realized empirical mean. The point-start expected decision risk would require averaging the chosen action over those traces as well.

## 2. Independent transfer: reverse the optimal action

Here $p=(1/10)/(3/10)=1/3$ and $\rho=7/10$. The stationary risks are $1/3$ unprotected and $3/10$ protected. Protection is optimal; the gap is $1/30$.

The stationary path probabilities are

| Path | Probability | Count | Chosen action |
|---|---:|---:|---|
| 00 | $3/5$ | 0 | Unprotected |
| 01 | $1/15$ | 1 | Protect |
| 10 | $1/15$ | 1 | Protect |
| 11 | $4/15$ | 2 | Protect |

Thus count probabilities for $0,1,2$ are $3/5,2/15,4/15$. Only count zero chooses the wrong action, with probability $3/5$. Expected selected stationary risk and regret are

$$
\frac35\frac13+\frac25\frac3{10}=\frac8{25},\qquad
\frac8{25}-\frac3{10}=\frac1{50}=\frac35\frac1{30}.
$$

The sample mean has expectation $1/3$ and second moment $(1/4)(2/15)+4/15=3/10$. Therefore its variance is $3/10-1/9=17/90$. This agrees with $p(1-p)(1+\rho)/2$. Reusing the baseline direction of error reverses the decision: here it is failing to protect that creates regret.

## 3. Independent transfer: negative dependence and point start

Balance gives $p=3/5$, $\rho=-1/4$ and stationary risks $3/5$ unprotected and $1/2$ protected. Protection is optimal and the gap is $1/10$. With a stationary start,

$$
V_3=\frac{6}{25\cdot9}\left[3+2\left(2\left(-\frac14\right)+\frac1{16}\right)\right]
=\frac{17}{300}.
$$

Three independent draws would have variance $2/25$. The negative lag-one covariance reduces the variance here.

For the point start $X_0=0$, enumerate:

| Trace | Probability | Empirical mean | Action |
|---|---:|---:|---|
| 000 | $1/16$ | 0 | Unprotected |
| 001 | $3/16$ | $1/3$ | Unprotected |
| 010 | $3/8$ | $1/3$ | Unprotected |
| 011 | $3/8$ | $2/3$ | Protect |

The expected mean is $(9/16)(1/3)+(3/8)(2/3)=7/16$. Subtracting $3/5$ gives bias $-13/80$. The wrong-action probability is $5/8$. Expected selected stationary risk is

$$
\frac58\frac35+\frac38\frac12=\frac9{16},
$$

and regret is $9/16-1/2=1/16=(5/8)(1/10)$. The count law yields second moment $(9/16)(1/9)+(3/8)(4/9)=11/48$, hence actual-start variance $11/48-(7/16)^2=29/768$, which differs from $17/300$. Its mean squared error for estimating $3/5$ is $29/768+(13/80)^2$. The stationary variance does not specify either the point-start marginal probabilities or its threshold-crossing probabilities.

## 4. Diagnose three mistaken conclusions

Equal stationary marginals leave the joint distribution free to differ. At $N=4$, S has variance $1161/8000$ while F has $21/250$, because their covariance terms differ.

Lower variance alone does not order tail probabilities at every threshold. At $N=2$ the baseline rule protects whenever at least one state is $1$. Its probability is $1-(3/4)(1-a)$: $23/80$ for S and $29/80$ for F. Yet their sample-mean variances are $27/160$ and $21/160$. The chain with smaller variance selects the suboptimal protection action more often in this finite example.

For $a=b=1$, the stationary law is uniquely $(1/2,1/2)$, but a point start alternates forever. The marginal probability $\Pr_0(X_t=1)$ therefore fails to converge, while the time average $\bar Y_N$ converges to $1/2$. If started in the stationary law, each marginal is already $\pi$ but adjacent states are still dependent. Invariance, marginal convergence and time-average convergence are distinct assertions.

## 5. A threshold tie is not a unique recommendation

With $N=4$, either stationary-start path is alternating and contains exactly two ones. Therefore $K_4=2$ with probability one and $\bar Y_4=1/2$, with variance zero. The tie rule selects unprotected. Both stationary risks are $1/2$, so both actions are optimal and regret is zero.

With $N=5$, the two alternating paths have counts two and three, each with probability $1/2$. Their empirical means are $2/5$ and $3/5$, so the stationary variance is $1/100$. In general it is $1/(4N^2)$ for odd $N$. The autocorrelations are $(-1)^k$: the infinite series does not converge. Every finite covariance sum remains well-defined, so its exact variance identity remains usable.

## 6. Delayed retrieval and code audit

$R_\pi(d)$ is a deterministic expected loss for a specified fixed action and a stationary target case. $V_N$ is a deterministic variance over stationary-start traces. $B_N(q)$ is a deterministic difference of a point- or mixture-start expected average from $p$. The selected action and $R_\pi(\hat d_N)$ depend on the realized trace; the latter takes the risk value of that chosen action. The fresh-case realized loss is an additional random outcome.

Average $p+(q-p)\rho^t$ over $t=0,\ldots,N-1$ to recover

$$
B_N(q)=(q-p)\frac{1-\rho^N}{N(1-\rho)}.
$$

Starting observations at $X_1$ multiplies this bias by $\rho$; starting at $X_B$ multiplies it by $\rho^B$. The number of retained observations remains $N$.

The number $0.32$ is an observed frequency, not a posterior probability for an unknown parameter. The calculator conditions on specified $a,b,N,q,c$ and computes a repeated-run distribution of counts and choices. A Bayesian parameter conclusion would require an unknown-parameter model, prior, likelihood and posterior calculation not present here.

`count_distribution` stores count and last-state probabilities, while the test oracle enumerates complete binary paths and multiplies transition probabilities. They have different failure modes. For example, $a=0,b=1/3$ has stationary law concentrated at state zero; a stationary-start count is always zero. With $a=2/5,b=3/5$ the stationary sequence is independent Bernoulli with success probability $2/5$, so the mean variance is $6/(25N)$. Exact expected risk averages over possible target cases: an unprotected action with risk $1/4$ still realizes loss either zero or one on a single case.
