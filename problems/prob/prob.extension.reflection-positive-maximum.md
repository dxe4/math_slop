# Read a reflection-principle multiplier

*Easy · [Probability problems](index.md)*

For standard Brownian motion, the reflection principle states $P(\max_{0\le s\le t}B_s\ge a)=2P(B_t\ge a)$ for $a,t>0$. Write $p=P(B_1\ge1)$. What multiplier of $p$ equals $P(\max_{0\le s\le1}B_s\ge1)$?

```answer
{"answer":{"kind":"integer","expected":"2","checker_scope":"Checks the multiplier in the supplied reflection formula only; it does not grade a proof of the reflection principle."}}
```

<details>
<summary>Hint 1</summary>

The time and barrier in the question match the supplied positive-time, positive-barrier formula.

</details>

<details>
<summary>Hint 2</summary>

Identify the numerical factor multiplying its terminal tail; no normal tail evaluation is needed.

</details>

<details>
<summary>Worked solution</summary>

Apply the supplied identity at time one and barrier one.

1. Both parameters equal one and satisfy the required positivity conditions.
2. The formula gives $P(\max_{0\le s\le1}B_s\ge1)=2P(B_1\ge1)$.
3. Since the terminal probability is denoted by $p$, the requested multiplier is two. The answer does not require the numerical value of $p$.

The multiplier is two.

</details>
