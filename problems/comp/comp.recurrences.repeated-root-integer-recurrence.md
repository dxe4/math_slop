# Handle a repeated recurrence root

*Hard · [Computational arithmetic problems](index.md)*

Let $d_0=0$, $d_1=1$ and $d_n=4d_{n-1}-4d_{n-2}$ for $n\geq2$. Find $d_{20}$.

```answer
{"answer":{"kind":"integer","expected":"10485760","checker_scope":"Exact requested integer or rational only; no learner program or unrestricted proof is executed or certified."}}
```

<details>
<summary>Hint 1</summary>

The characteristic polynomial has a repeated root.

</details>

<details>
<summary>Hint 2</summary>

A repeated root permits a linear factor in the index multiplying its geometric power.

</details>

<details>
<summary>Worked solution</summary>

The initial conditions determine the two constants in the repeated-root form.

1. The characteristic polynomial is $(r-2)^2$, so $d_n=(A+Bn)2^n$.
2. The conditions give $A=0$ and $B=1/2$, hence $d_n=n2^{n-1}$; substitution also verifies this formula directly.
3. Therefore $d_{20}=20\cdot2^{19}=10485760$.

</details>
