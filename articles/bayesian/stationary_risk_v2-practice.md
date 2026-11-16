# Practice: separate the target from its approximation

Attempt each task before opening the matching [worked answer](./stationary_risk_v2-answers.md). Use the stated observation convention $X_0,\ldots,X_{N-1}$. Show the probability law attached to every expectation or variance. The first task supplies a structure; later tasks remove it and change the givens.

## 1. Faded derivation: chain F

Use $a=3/20$, $b=9/20$, cost $c=3/10$, and a stationary start.

1. Complete $p=(1-p)a+p(1-b)$ and solve for $p$. Write both stationary risks and the exact action gap.
2. Complete $E[Y_{t+1}\mid Y_t]=\underline{\hspace{1cm}}+\underline{\hspace{1cm}}Y_t$. Deduce the lag-$k$ covariance under stationarity.
3. For $N=4$, fill the positive-lag sum $3\rho+2\rho^2+\rho^3$, then derive the variance. Compare it with four independent draws having the same marginal distribution.
4. Remove stationarity by setting $q=0$. Derive the expected four-observation mean and its bias. Explain why the variance you found in part 3 is not justified for this start.
5. The realized trace is $0,0,1,0$. Give its empirical mean, the chosen action, the action's stationary risk, and its regret. Which of these are expectations over hypothetical repeated traces?

## 2. Independent transfer: reverse the optimal action

A new chain has $a=1/10$, $b=1/5$. The protection cost remains $3/10$; the state-dependent unprotected losses remain $0,1$. Start in the stationary distribution and observe $N=2$ states.

Find the stationary law, dependence parameter, both risks, optimal action and gap. Derive the exact distribution of the count by enumerating $00,01,10,11$. Using the rule “protect iff the empirical mean exceeds the cost; ties choose unprotected,” calculate its wrong-action probability, expected selected stationary risk, and expected regret. Find the sample-mean variance independently from the count distribution. Explain why reusing the original claim “protection is the wrong action” would fail.

## 3. Independent transfer: negative dependence and point start

Use $a=3/4$, $b=1/2$, cost $c=1/2$, and $N=3$ observations.

Derive the stationary law, $\rho$, stationary risks and gap. Calculate the stationary finite-$N$ variance and compare it with three independent draws from that stationary law. Now start at $X_0=0$: enumerate the four possible continuations, give their probabilities and empirical means, and derive the expected mean, bias, wrong-action probability, selected stationary risk averaged over runs, and regret. Explain why the stationary variance alone cannot produce these point-start answers.

## 4. Diagnose three mistaken conclusions

For each claim, supply a correction and a specific counterexample or calculation.

1. “The two baseline chains share a stationary law, so equal-length estimates have equal variance.”
2. “The fast chain's smaller variance means it must choose protection less often for every $N$.”
3. “A chain with a unique stationary distribution has marginal probabilities converging to that distribution from every initial state.”

For the third claim, also state what happens to the time average in your counterexample. Avoid using the word “converges” without naming the quantity that converges.

## 5. A threshold tie is not a unique recommendation

Use $a=b=1$, a stationary start, cost $c=1/2$, and $N=4$. Determine the exact count distribution, sample-mean variance, plug-in action under the specified tie rule, all stationary optimal actions, and regret. Repeat the variance calculation for $N=5$. Explain why the infinite autocorrelation sum is unavailable, and why the finite variance sum remains valid.

## 6. Delayed retrieval and code audit

Return after a day, with the lesson closed.

1. Reconstruct the four different objects: a stationary risk, a stationary finite-run variance, an initial bias and a random selected-action risk. State which are deterministic and which depend on the realized trace.
2. Derive the point-start mean bias. What factor changes if you observe $X_1,\ldots,X_N$ instead? What changes after discarding $B$ transitions?
3. An analyst reports $\bar Y_N=0.32$. Is this by itself a posterior probability that the true stationary hazard probability exceeds $0.3$? What did the exact count calculator actually condition on?
4. Inspect `risk.py` and its tests. Identify the distinction between the scientific count recursion and the independent testing oracle. Change an input to an absorbing or independent case, make a hand prediction, then run the calculator. Explain why an exact expected risk is not the realized loss of a fresh case.

Record one prediction that changed and the calculation responsible. This reflection is a study prompt, not a validated measure of learning.
