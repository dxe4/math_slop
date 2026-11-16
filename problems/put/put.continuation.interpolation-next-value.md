# Interpolation next value

*Medium · [Original Putnam-style training](index.md)*

A real polynomial $P$ has degree at most $2$ and values $P(0)=1$, $P(1)=2$, $P(2)=5$. Find $P(3)$.

```answer
{"answer":{"kind":"integer","expected":"10","checker_scope":"Only the exact bounded answer is checked; the argument and assumptions are not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

For a quadratic, second finite differences are constant.

</details>

<details>
<summary>Hint 2</summary>

Continue the first differences after identifying their increase.

</details>

<details>
<summary>Worked solution</summary>

Therefore $P(3)=P(2)+5=10$.

1. The listed first differences are $P(1)-P(0)=1$ and $P(2)-P(1)=3$.
2. Degree at most two makes the second difference constant at $3-1=2$, so the next first difference is $5$.
3. Therefore $P(3)=P(2)+5=10$.

</details>
