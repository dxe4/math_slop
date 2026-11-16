# Remove the decaying transient to select a periodic response

*Easy · [Differential equations problems](index.md)*

The equation $y'+y=\sin t$ has a unique 2\*pi-periodic solution. Find its value at t=0.

```answer
{"answer":{"kind":"rational","expected":{"numerator":-1,"denominator":2},"checker_scope":"Exact requested period quantity only; no broad stability or proof verdict is inferred."}}
```

<details>
<summary>Hint 1</summary>

Use a trial combination of sin and cos.

</details>

<details>
<summary>Hint 2</summary>

A nonzero multiple of exp(-t) cannot be periodic.

</details>

<details>
<summary>Worked solution</summary>

Periodicity selects the forced response and eliminates the homogeneous transient.

1. Put y=A\*sin t+B\*cos t. Matching coefficients gives A-B=1 and A+B=0, so A=1/2 and B=-1/2.
2. The full solution adds C\*exp(-t), and periodicity forces C=0.
3. Thus the periodic solution has y(0)=-1/2.

</details>
