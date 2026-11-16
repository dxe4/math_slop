# Compute a variational eigenvalue bound from an admissible trial

*Medium · [Differential equations problems](index.md)*

For the Dirichlet problem $-y''=\lambda y$ on \[0,1\], use the trial u(t)=t(1-t). Find its Rayleigh quotient integral of u'^2 divided by integral of u^2. State in the worked argument which direction of eigenvalue bound it supplies.

```answer
{"answer":{"kind":"integer","expected":10,"checker_scope":"Exact requested spectral quantity or trial bound only; no general spectral proof is automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

Square the derivative and the function separately before integrating.

</details>

<details>
<summary>Hint 2</summary>

The first eigenvalue is the infimum over admissible nonzero trials.

</details>

<details>
<summary>Worked solution</summary>

An admissible trial gives an upper bound on the first eigenvalue.

1. The numerator is integral\_0^1 (1-2t)^2 dt=1-2+4/3=1/3.
2. The denominator is integral\_0^1 (t^2-2t^3+t^4) dt=1/3-1/2+1/5=1/30.
3. The quotient is ten. The variational principle therefore gives lambda\_1&lt;=10, not lambda\_1&gt;=10.

</details>
