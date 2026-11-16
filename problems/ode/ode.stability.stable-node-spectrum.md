# Find a stable-node spectrum

*Medium · [Differential equations problems](index.md)*

Find the eigenvalue set of $A=\begin{pmatrix}0&1\\-2&-3\end{pmatrix}$ for the system $u^{\prime}=Au$.

```answer
{"answer":{"kind":"set","expected":[-2,-1],"checker_scope":"Requested bounded solution observation, spectrum or polynomial representation only, with the stated tolerance where applicable; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Compute the characteristic polynomial with its determinant signs intact.

</details>

<details>
<summary>Hint 2</summary>

Factor it before drawing conclusions about the modes.

</details>

<details>
<summary>Worked solution</summary>

The characteristic roots identify the two exponential rates.

1. $\det(\lambda I-A)=\lambda(\lambda+3)+2=\lambda^2+3\lambda+2$.
2. This factors as $(\lambda+1)(\lambda+2)$, giving $\{-2,-1\}$.
3. Both rates are negative and distinct, so all modal solutions decay to zero.

</details>
