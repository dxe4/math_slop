# Retain the constant mode under Neumann data

*Easy · [Differential equations problems](index.md)*

For $-y''=\lambda y$ on \[0,pi\] with y'(0)=y'(pi)=0, find the smallest eigenvalue admitting a nonzero solution.

```answer
{"answer":{"kind":"integer","expected":0,"checker_scope":"Exact requested spectral quantity or trial bound only; no general spectral proof is automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

Constant nonzero functions satisfy both derivative conditions.

</details>

<details>
<summary>Hint 2</summary>

Use integration against y to rule out negative eigenvalues.

</details>

<details>
<summary>Worked solution</summary>

Neumann boundary data retain a zero-frequency mode.

1. The nonzero constant function solves the problem with lambda=0.
2. Multiplication by y and integration gives lambda\*integral y^2=integral (yprime)^2&gt;=0, since the boundary derivative terms vanish.
3. Thus no negative eigenvalue exists, and the smallest is zero.

</details>
