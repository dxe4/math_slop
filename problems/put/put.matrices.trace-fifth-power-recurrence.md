# Apply Cayley-Hamilton to trace powers

*Hard · [Original Putnam-style training](index.md)*

A real $2\times2$ matrix B has trace $3$ and determinant $1$. Find $\operatorname{tr}(B^5)$.

```answer
{"answer":{"kind":"integer","expected":"123","checker_scope":"Exact requested bounded value only; a correct numerical answer does not certify the full university-level argument or a contest result."}}
```

<details>
<summary>Hint 1</summary>

The characteristic polynomial is determined by the two given invariants.

</details>

<details>
<summary>Hint 2</summary>

Multiply its matrix identity by successive powers and take traces.

</details>

<details>
<summary>Worked solution</summary>

Cayley-Hamilton turns matrix powers into a scalar recurrence.

1. The characteristic polynomial is t^2-3t+1, so $B^2-3B+I=0$.
2. For $s_n=\operatorname{tr}(B^n)$, we get $s_n=3s_{n-1}-s_{n-2}$ with s\_0=2 and s\_1=3.
3. The next values are s\_2=7, s\_3=18, s\_4=47 and s\_5=123.

</details>
