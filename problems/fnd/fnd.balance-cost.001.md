# Separate a fixed fee from repeated costs

*Easy · [Foundations bridge](index.md)*

An activity charges a fixed entry fee of $4$ coins plus $2$ coins for each ride. The total charge is $18$ coins. How many rides were taken? No other charges apply.

```answer
{"answer":{"kind":"integer","expected":7,"checker_scope":"Checks the stated exact structured answer only; explanation quality is not assessed."}}
```

<details>
<summary>Hint 1</summary>

Part of the total pays the entry fee, which is charged only once.

</details>

<details>
<summary>Hint 2</summary>

Subtract the fixed fee, then divide the remaining cost by the cost per ride.

</details>

<details>
<summary>Worked solution</summary>

A fixed amount plus an amount per item gives a linear model; solving it recovers the item count.

1. Let x be the ride count. The charge equation is $4 + 2x = 18$.
2. Subtract four to obtain $2x = 14$, then divide by two: $x = 7$ rides. Check: $4 + 2 \times  7 = 18$.

</details>
