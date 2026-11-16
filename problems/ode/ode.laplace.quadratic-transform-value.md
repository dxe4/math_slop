# Evaluate a polynomial Laplace transform

*Easy · [Differential equations problems](index.md)*

For $f(t)=t^2$, $t\ge0$, find its Laplace transform at the real value $s=2$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":4},"checker_scope":"Requested bounded solution observation, spectrum or polynomial representation only, with the stated tolerance where applicable; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Use the transform integral or integrate by parts twice.

</details>

<details>
<summary>Hint 2</summary>

Evaluate the resulting rational transform only after retaining the power of the transform variable.

</details>

<details>
<summary>Worked solution</summary>

Two integrations by parts give the factorial-over-power transform.

1. For $s>0$, $\int_0^\infty e^{-st}t^2\,dt=2/s^3$; the boundary terms vanish and two integrations by parts produce the factor $2$.
2. At $s=2$, this is $2/8$.
3. The transform value is $1/4$.

</details>
