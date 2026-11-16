# Differentiate the actual solution with respect to a parameter

*Medium · [Differential equations problems](index.md)*

For $y'=a y^2$, y(0)=1, let S be the derivative with respect to a of y(1;a), evaluated at a=1/4. Find S.

```answer
{"answer":{"kind":"rational","expected":{"numerator":16,"denominator":9},"checker_scope":"Exact requested existence bound or sensitivity observation only; no uniqueness or proof verdict is inferred."}}
```

<details>
<summary>Hint 1</summary>

Solve on a parameter neighborhood where the observation time precedes blowup.

</details>

<details>
<summary>Hint 2</summary>

Differentiate with respect to a while keeping time fixed.

</details>

<details>
<summary>Worked solution</summary>

A parameter derivative is distinct from the time derivative.

1. Separation gives y(t;a)=1/(1-a\*t) on the interval containing zero before its denominator vanishes.
2. For a near 1/4, this formula is valid at t=1. Differentiating in a gives partial\_a y(t;a)=t/(1-a\*t)^2.
3. At t=1 and a=1/4, S=1/(3/4)^2=16/9.

</details>
