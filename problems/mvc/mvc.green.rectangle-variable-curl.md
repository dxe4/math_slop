# Integrate a nonconstant curl

*Medium · [Multivariable calculus problems](index.md)*

Let $C$ be the counterclockwise boundary of $[0,2]\times[0,1]$. Evaluate $\oint_C x^2\,dy$.

```answer
{"answer":{"kind":"integer","expected":"4","checker_scope":"Exact requested integral value only; orientation and theorem hypotheses are explained in the model solution, not automatically certified by the scalar verdict."}}
```

<details>
<summary>Hint 1</summary>

Interpret the missing $dx$ coefficient as zero.

</details>

<details>
<summary>Hint 2</summary>

The relevant derivative is with respect to $x$.

</details>

<details>
<summary>Worked solution</summary>

The circulation depends on an area integral of the varying curl.

1. Take $P=0$ and $Q=x^2$, so $Q_x-P_y=2x$.
2. The smoothness and positive-boundary hypotheses of Green theorem hold on the rectangle.
3. The value is $\int_0^2\int_0^12x\,dy\,dx=[x^2]_0^2=4$.

</details>
