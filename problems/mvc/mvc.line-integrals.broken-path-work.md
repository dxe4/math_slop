# Compare a broken path with a diagonal

*Medium · [Multivariable calculus problems](index.md)*

For $F(x,y)=(y,0)$, compute work on the broken path $(0,0)\to(1,0)\to(1,1)$, with each segment traversed in the indicated direction.

```answer
{"answer":{"kind":"integer","expected":"0","checker_scope":"Exact requested integral value only; orientation and theorem hypotheses are explained in the model solution, not automatically certified by the scalar verdict."}}
```

<details>
<summary>Hint 1</summary>

Split the work into the two segments.

</details>

<details>
<summary>Hint 2</summary>

On one segment $y$ is zero; on the other segment $dx$ is zero.

</details>

<details>
<summary>Worked solution</summary>

The field is not conservative, so equal endpoints do not determine the work.

1. On the horizontal segment $y=0$, so $F\cdot dr=y\,dx=0$.
2. On the vertical segment $x=1$ is constant, so $dx=0$ and the work is again zero.
3. The total is $0$; this differs from the diagonal-path work $1/2$, demonstrating path dependence.

</details>
