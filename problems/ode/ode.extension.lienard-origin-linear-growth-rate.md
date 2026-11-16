# Linearize a nonlinear oscillator before discussing nearby behavior

*Medium · [Differential equations problems](index.md)*

For $x'=v$, v'=(1-x^2)\*v-x, find the common real part of the two linearized eigenvalues at the origin.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":2},"checker_scope":"Exact requested manifold or linearization coefficient only; no full dynamical argument is automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

The nonlinear damping contributes its value at x=0 to the v derivative.

</details>

<details>
<summary>Hint 2</summary>

The characteristic polynomial is quadratic with nonreal roots.

</details>

<details>
<summary>Worked solution</summary>

The small-state spectral calculation differs from the nonlinear cycle question.

1. The Jacobian at the origin is \[\[0,1\],\[-1,1\]\].
2. Its characteristic polynomial is lambda^2-lambda+1, with roots (1 plus or minus i\*sqrt(3))/2.
3. Both roots have real part 1/2. The origin is locally unstable; this calculation alone does not establish a global limit cycle.

</details>
