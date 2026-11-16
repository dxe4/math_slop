# A minimum above a threshold

*Medium · [Probability problems](index.md)*

Independent variables $X,Y$ are uniform on $[0,2]$. Find $P(\min(X,Y)>1)$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":4},"checker_scope":"Checks the minimum tail under the stated independent uniform laws only."}}
```

<details>
<summary>Hint 1</summary>

For the minimum to exceed the threshold, neither variable can be at or below it.

</details>

<details>
<summary>Hint 2</summary>

Find each upper-tail probability from interval lengths and multiply using independence.

</details>

<details>
<summary>Worked solution</summary>

Both coordinates must exceed the threshold.

1. The event $\min(X,Y)>1$ equals $\{X>1\}\cap\{Y>1\}$.
2. For a uniform variable on $[0,2]$, the upper interval $(1,2]$ has probability $1/2$.
3. Independence gives the joint probability $(1/2)^2=1/4$. Continuity ensures that choosing strict or non-strict boundaries at one does not alter it.

The two tail probabilities are $1/2$ each, giving joint mass $1/4$.

</details>
