# Use modulus in the spectral radius

*Easy · [Linear algebra problems](index.md)*

Work over $\mathbb R$; vectors are columns and all data are dimensionless. A matrix has complex spectrum $\{-3,1,2\}$. Its spectral radius is defined by $\rho(A)=\max\{|\lambda|:\lambda\in\sigma(A)\}$. Find $\rho(A)$.

```answer
{"answer":{"kind":"integer","expected":3,"checker_scope":"Only the requested bounded exact result is checked; no unrestricted proof is automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

Take absolute values before comparing the spectral entries.

</details>

<details>
<summary>Hint 2</summary>

The largest real eigenvalue need not have the largest modulus.

</details>

<details>
<summary>Worked solution</summary>

Distinguish spectral order from spectral magnitude.

1. The three moduli are three, one and two.
2. The maximum is three, contributed by the negative eigenvalue.
3. Therefore the spectral radius is three; no matrix norm equality has been assumed.

</details>
