# Apply Green theorem to a square

*Easy · [Multivariable calculus problems](index.md)*

Let $C$ be the counterclockwise boundary of $[0,1]^2$. Compute $\oint_C(-y\,dx+x\,dy)$.

```answer
{"answer":{"kind":"integer","expected":"2","checker_scope":"Exact requested integral value only; orientation and theorem hypotheses are explained in the model solution, not automatically certified by the scalar verdict."}}
```

<details>
<summary>Hint 1</summary>

Use the circulation form of Green theorem.

</details>

<details>
<summary>Hint 2</summary>

The planar curl is constant over the square.

</details>

<details>
<summary>Worked solution</summary>

The smooth field and positively oriented piecewise smooth boundary satisfy Green theorem.

1. Here $P=-y$ and $Q=x$ are smooth on a neighborhood of the square.
2. The curl is $Q_x-P_y=1-(-1)=2$.
3. By Green theorem the circulation is $\iint_{[0,1]^2}2\,dA=2$.

</details>
