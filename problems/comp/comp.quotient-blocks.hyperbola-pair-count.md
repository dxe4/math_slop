# Count ordered pairs under a hyperbola

*Hard · [Computational arithmetic problems](index.md)*

How many ordered pairs of positive integers $(a,b)$ satisfy $ab\leq100$?

```answer
{"answer":{"kind":"integer","expected":"482","checker_scope":"Exact requested integer only; no learner program or unrestricted proof is executed or certified."}}
```

<details>
<summary>Hint 1</summary>

Every such pair has at least one coordinate at most ten.

</details>

<details>
<summary>Hint 2</summary>

Count the two coordinate strips and subtract their overlap.

</details>

<details>
<summary>Worked solution</summary>

The hyperbola method uses symmetry without double-counting its central square.

1. Pairs with $a\leq10$ number $\sum_{a=1}^{10}\lfloor100/a\rfloor=100+50+33+25+20+16+14+12+11+10=291$.
2. By symmetry the strip $b\leq10$ also contains $291$ pairs. Their overlap is the full $10\times10$ square, since all its products are at most $100$.
3. No pair has both coordinates greater than ten. The total is $291+291-100=482$.

</details>
