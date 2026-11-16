# A fixed-time Brownian difference quotient escapes finite limits

*Medium · [Probability problems](index.md)*

For standard Brownian motion and a fixed deterministic $t\ge0$, prove that $Q_h=(B_{t+h}-B_t)/h$ cannot converge in probability to a finite real random variable as $h\downarrow0$. The requested conclusion is this fixed-time convergence statement, not simultaneous nowhere differentiability of all sample paths.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or graded objective evidence."}}
```

<details>
<summary>Hint 1</summary>

Identify the full normal law of the quotient; growing variance alone is not a general proof of failure of convergence in probability.

</details>

<details>
<summary>Hint 2</summary>

Show its probability in every fixed bounded interval tends to zero. A finite proposed probability limit would force a positive amount of mass into some bounded interval for all sufficiently small $h$.

</details>

<details>
<summary>Model proof</summary>

Use Gaussian mass escape and the bounded-mass consequence of convergence to a finite variable.

1. For $h>0$, the increment is $N(0,h)$, so $Q_h$ has the same law as $Z/\sqrt h$ with $Z\sim N(0,1)$.
2. For any $K>0$, $P(|Q_h|\le K)=P(|Z|\le K\sqrt h)\le2K\sqrt h/\sqrt{2\pi}\to0$, using the standard normal density bound. Thus the family puts asymptotically no mass in any fixed bounded interval.
3. Suppose $Q_h\to Y$ in probability with $Y$ finite almost surely. Choose $R$ so that $P(|Y|\le R)>3/4$. For all sufficiently small $h$, $P(|Q_h-Y|>1)<1/4$. On the intersection of the other two events, $|Q_h|\le R+1$, so $P(|Q_h|\le R+1)>1/2$, contradicting the preceding limit. This proves exactly the fixed-time claim; no uncountable union of exceptional time sets is taken.

The quotient law is $N(0,1/h)$ and its mass escapes every bounded interval, precluding convergence in probability to a finite random variable.

**Self-assessment rubric**

- Identify the quotient's Gaussian law, not merely its divergent variance.
- Show the probability of every fixed bounded interval tends to zero.
- Derive a conflicting bounded-interval mass lower bound from a proposed finite probability limit and retain the fixed-time scope.

</details>
