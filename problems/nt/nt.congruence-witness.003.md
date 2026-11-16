# Translate congruence into an integer multiple

*Easy · [Number theory](index.md)*

Find the integer k in $38 - 2 = 12k$. This equality is a witness that $38$ is congruent to $2$ modulo $12$.

```answer
{"answer":{"kind":"integer","expected":3,"checker_scope":"Checks one exact integer in this explicitly bounded calculation; does not certify the explanation."}}
```

<details>
<summary>Hint 1</summary>

Congruence compares a difference with a multiple of the modulus.

</details>

<details>
<summary>Hint 2</summary>

Calculate the difference first, then divide by $12$.

</details>

<details>
<summary>Worked solution</summary>

Congruence means the modulus divides the difference, rather than dividing each original integer.

1. Compute $38 - 2 = 36$.
2. Since $36 = 12 \times  3, k = 3$ is the integer witness. This proves that $12$ divides the difference.

</details>
