# Read a limsup from eventual tail suprema

*Easy · [Real analysis](index.md)*

Let $a_n=2+1/n$ for even n and a\_n=-1+1/n for odd n. Find limsup a\_n.

```answer
{"answer":{"kind":"integer","expected":2,"checker_scope":"Exact requested asymptotic observation only; no full convergence argument is automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

Each parity has its own limit.

</details>

<details>
<summary>Hint 2</summary>

Tail suprema are governed by the larger limiting branch.

</details>

<details>
<summary>Worked solution</summary>

A limsup retains the upper accumulation level without requiring full convergence.

1. The even terms tend to two and the odd terms tend to negative one.
2. Every sufficiently late term is at most two plus a quantity tending to zero, while even terms remain arbitrarily close to two.
3. Thus the decreasing tail-supremum limit is two.

</details>
