# A maximum below a threshold

*Medium · [Probability problems](index.md)*

Independent variables $X,Y$ are uniform on $[0,1]$. Find $P(\max(X,Y)\le1/2)$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":4},"checker_scope":"Checks the maximum probability under the stated independent uniform laws only."}}
```

<details>
<summary>Hint 1</summary>

A maximum is below a threshold precisely when both variables are below it.

</details>

<details>
<summary>Hint 2</summary>

Compute each individual threshold probability and use independence for their intersection.

</details>

<details>
<summary>Worked solution</summary>

Express the maximum event as an intersection.

1. The event is exactly $\{X\le1/2\}\cap\{Y\le1/2\}$.
2. Each event has probability $1/2$ by uniformity, and independence of the variables gives independence of these two events.
3. Their intersection probability is $(1/2)(1/2)=1/4$. Using a union would instead describe a minimum below the threshold.

The relevant square has area $1/4$.

</details>
