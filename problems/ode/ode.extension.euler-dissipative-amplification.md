# Compute a signed amplification before taking its magnitude

*Easy · [Differential equations problems](index.md)*

Forward Euler on $y'=-3y$ with h=1/2 has multiplier R=1-3h. Find \|R\|.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":2},"checker_scope":"Exact requested finite numerical-method quantity only; a numerical iterate is not treated as an exact ODE solution."}}
```

<details>
<summary>Hint 1</summary>

The multiplier can be negative even when its modulus contracts.

</details>

<details>
<summary>Hint 2</summary>

Apply the absolute value after substitution.

</details>

<details>
<summary>Worked solution</summary>

A sign oscillation and a magnitude contraction can occur together.

1. Forward Euler gives Y\_(n+1)=(1-3h)\*Y\_n.
2. At h=1/2, R=-1/2.
3. Thus \|R\|=1/2.

</details>
