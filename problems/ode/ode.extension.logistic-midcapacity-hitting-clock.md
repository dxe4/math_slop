# Recover a hitting time through a logarithmic clock

*Medium · [Differential equations problems](index.md)*

Let $y'=y(1-y/4)$ and y(0)=1. Let T be the first positive time when y(T)=2. Find exp(T).

```answer
{"answer":{"kind":"integer","expected":3,"checker_scope":"Exact requested model quantity only; the differential-equation argument is a worked model, not an automatically checked proof."}}
```

<details>
<summary>Hint 1</summary>

Separate variables or use the standard logistic form.

</details>

<details>
<summary>Hint 2</summary>

Solve for exp(-T) before converting to the requested quantity.

</details>

<details>
<summary>Worked solution</summary>

The logistic denominator makes the hitting clock exact.

1. Separation and the initial condition give y(t)=4/(1+3\*exp(-t)).
2. This solution increases from one toward four, so its first crossing of two is unique.
3. At the crossing, 1+3\*exp(-T)=2. Thus exp(T)=3.

</details>
