# Wait until all three coupon types appear

*Hard · [Probability problems](index.md)*

Independent draws each give $1$ of three coupon types with equal probability. Starting with none, find the expected number of draws until all three types have appeared.

```answer
{"answer":{"kind":"rational","expected":{"numerator":11,"denominator":2},"checker_scope":"Exact answer for the stated probability model only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Break the waiting time into stages according to how many distinct types are already held.

</details>

<details>
<summary>Hint 2</summary>

At each stage, the probability of drawing a new type stays fixed until that stage ends.

</details>

<details>
<summary>Worked solution</summary>

Add geometric waiting-time means for successive discoveries.

1. The first distinct type arrives on the first draw, with expected waiting time $1$.
2. With one type held, each new draw discovers another with probability $2/3$, so that stage has mean $3/2$.
3. With two types held, the missing type appears with probability $1/3$, so the final stage has mean $3$.
4. By linearity, the total expected time is $1+3/2+3=11/2$.

</details>
