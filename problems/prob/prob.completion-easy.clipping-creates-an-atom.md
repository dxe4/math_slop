# A continuous input can create a point mass after clipping

*Easy · [Probability problems](index.md)*

Let $X$ be uniform on $[-2,2]$ and put $Y=\max(X,0)$. Find $P(Y=0)$. In particular, do not assume that a function of a continuous random variable must have a continuous distribution.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":2},"checker_scope":"Only the requested exact finite observation is checked; no unrestricted explanation is automatically certified."}}
```

<details>
<summary>Hint 1</summary>

Find the whole preimage of zero under the clipping map.

</details>

<details>
<summary>Hint 2</summary>

The original uniform law assigns probability by interval length, not just by counting one point.

</details>

<details>
<summary>Worked solution</summary>

Clipping collapses an interval of inputs to one output value.

1. The equality $\max(X,0)=0$ holds exactly when $X\le0$.
2. Within the support $[-2,2]$, this event is the interval $[-2,0]$, of length $2$ out of total length $4$.
3. Its probability is $1/2$. Although $P(X=0)=0$, the interval collapsed by the map creates an atom of mass $1/2$ at $Y=0$.

</details>
