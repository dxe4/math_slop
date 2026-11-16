# Recover a spectrum from a trace

*Medium · [Linear algebra problems](index.md)*

Let $A=\begin{pmatrix}t&1\\0&2\end{pmatrix}$ with real $t$, and suppose $\operatorname{tr}A=6$. Find its set of eigenvalues.

```answer
{"answer":{"kind":"set","expected":[2,4],"checker_scope":"Exact stated finite-dimensional answer only; optional personal reasoning is not graded."}}
```

<details>
<summary>Hint 1</summary>

Use the trace condition to determine the missing diagonal entry.

</details>

<details>
<summary>Hint 2</summary>

After that, triangularity identifies the characteristic roots.

</details>

<details>
<summary>Worked solution</summary>

The trace fixes the parameter before the spectrum is read.

1. The trace is $t+2$, so $t+2=6$ gives $t=4$.
2. The characteristic polynomial is then $(x-4)(x-2)$.
3. Hence the eigenvalue set is $\{2,4\}$.

</details>
