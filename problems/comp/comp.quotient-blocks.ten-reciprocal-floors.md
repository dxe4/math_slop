# Accumulate distinct quotient floors

*Medium · [Computational arithmetic problems](index.md)*

Compute $\sum_{k=1}^{10}\lfloor1000/k\rfloor$.

```answer
{"answer":{"kind":"integer","expected":"2927","checker_scope":"Exact requested integer only; no learner program or unrestricted proof is executed or certified."}}
```

<details>
<summary>Hint 1</summary>

Each summand is an integer quotient, not a rounded quotient.

</details>

<details>
<summary>Hint 2</summary>

List the ten floors in order before adding them.

</details>

<details>
<summary>Worked solution</summary>

Each floor counts positive multiples of its denominator up to the common bound.

1. The ten quotients are $1000,500,333,250,200,166,142,125,111,100$.
2. The first five sum to $2283$; the last five sum to $644$.
3. The total is $2927$.

</details>
