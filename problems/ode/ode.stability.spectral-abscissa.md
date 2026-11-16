# Read the slowest exponential rate

*Easy · [Differential equations problems](index.md)*

For the linear system $u^{\prime}=Au$ with $A=\operatorname{diag}(-1,-3)$, find the largest real part among its eigenvalues.

```answer
{"answer":{"kind":"integer","expected":-1,"checker_scope":"Requested bounded solution observation, spectrum or polynomial representation only, with the stated tolerance where applicable; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

A diagonal matrix has its diagonal entries as eigenvalues.

</details>

<details>
<summary>Hint 2</summary>

Choose the larger signed rate, not the larger absolute magnitude.

</details>

<details>
<summary>Worked solution</summary>

The largest real part describes the slowest-decaying mode here.

1. The eigenvalues are $-1$ and $-3$.
2. Both are real, with maximum $-1$.
3. The modes are multiples of $e^{-t}$ and $e^{-3t}$, both decaying, so the requested rate is $-1$.

</details>
