# Count integers meeting exactly two divisibility rules

*Hard · [Computational arithmetic problems](index.md)*

How many integers $n$ with $1\leq n\leq1000000$ are divisible by exactly two of the three primes $2,3,5$?

```answer
{"answer":{"kind":"integer","expected":"233333","checker_scope":"Exact requested integer or rational only; no learner program or unrestricted proof is executed or certified."}}
```

<details>
<summary>Hint 1</summary>

Separate the three choices for the pair of dividing primes.

</details>

<details>
<summary>Hint 2</summary>

From each pair intersection remove the multiples of all three primes.

</details>

<details>
<summary>Worked solution</summary>

The three exact-pair cases are disjoint.

1. The cases have counts $\lfloor10^6/6\rfloor-\lfloor10^6/30\rfloor$, $\lfloor10^6/10\rfloor-\lfloor10^6/30\rfloor$ and $\lfloor10^6/15\rfloor-\lfloor10^6/30\rfloor$.
2. These are $133333$, $66667$ and $33333$.
3. Adding the disjoint cases gives $233333$.

</details>
