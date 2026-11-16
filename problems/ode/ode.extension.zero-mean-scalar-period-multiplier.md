# Integrate one full coefficient period

*Easy · [Differential equations problems](index.md)*

For $y'=\cos(t)y$, find the multiplier y(2\*pi)/y(0) for any nonzero initial value.

```answer
{"answer":{"kind":"integer","expected":1,"checker_scope":"Exact requested period quantity only; no broad stability or proof verdict is inferred."}}
```

<details>
<summary>Hint 1</summary>

Separate the state from the scalar time coefficient.

</details>

<details>
<summary>Hint 2</summary>

The integral of cos over a full period vanishes.

</details>

<details>
<summary>Worked solution</summary>

The scalar period multiplier depends on the accumulated coefficient.

1. The solution is y(t)=y(0)\*exp(integral\_0^t cos(s) ds)=y(0)\*exp(sin t).
2. At t=2\*pi, sin t=0.
3. Hence y(2\*pi)/y(0)=1.

</details>
