# Evaluate a logarithmic moment with endpoint control

*Medium · [Original Putnam-style training](index.md)*

Evaluate the improper integral $\int_0^1(\log x)^2\,dx$.

```answer
{"answer":{"kind":"integer","expected":"2","checker_scope":"Exact requested bounded value only; a correct numerical answer does not certify the full university-level argument or a contest result."}}
```

<details>
<summary>Hint 1</summary>

The substitution x=exp(-t) moves the singular endpoint to infinity.

</details>

<details>
<summary>Hint 2</summary>

Integrate the resulting exponential moment by parts twice, checking the boundary terms.

</details>

<details>
<summary>Worked solution</summary>

A logarithmic singularity becomes a convergent exponential moment.

1. With x=exp(-t), the integral becomes $\int_0^\infty t^2e^{-t}\,dt$.
2. The terms $t^2e^{-t}$ and $te^{-t}$ tend to zero at infinity, so two integrations by parts are justified on truncated intervals followed by a limit.
3. They give $2\int_0^\infty e^{-t}\,dt=2$.

</details>
