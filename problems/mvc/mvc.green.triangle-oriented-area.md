# Recover signed area from a boundary integral

*Medium · [Multivariable calculus problems](index.md)*

Let $C$ traverse $(0,0)\to(1,0)\to(0,1)\to(0,0)$. Compute $\oint_C-y\,dx$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":2},"checker_scope":"Exact requested integral value only; orientation and theorem hypotheses are explained in the model solution, not automatically certified by the scalar verdict."}}
```

<details>
<summary>Hint 1</summary>

The vertex order gives counterclockwise orientation.

</details>

<details>
<summary>Hint 2</summary>

The curl of the displayed polynomial one-form is constant.

</details>

<details>
<summary>Worked solution</summary>

The selected one-form converts circulation into the area of the positively oriented triangle.

1. The enclosed triangle has area $1/2$, and the given traversal is counterclockwise.
2. With $P=-y$ and $Q=0$, the curl is $Q_x-P_y=1$.
3. Green theorem therefore gives $\oint_C-y\,dx=1/2$.

</details>
