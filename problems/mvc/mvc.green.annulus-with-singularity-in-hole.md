# Keep a singularity outside the region

*Hard · [Multivariable calculus problems](index.md)*

Let $A=\{(x,y):1\leq x^2+y^2\leq4\}$ and $F=(-y/(x^2+y^2),x/(x^2+y^2))$. Compute the total circulation around the positively oriented boundary of $A$: the outer circle is counterclockwise and the inner circle clockwise.

```answer
{"answer":{"kind":"integer","expected":"0","checker_scope":"Exact requested integral value only; orientation and theorem hypotheses are explained in the model solution, not automatically certified by the scalar verdict."}}
```

<details>
<summary>Hint 1</summary>

The origin is outside the annular region, so the field is smooth on a neighborhood of that region.

</details>

<details>
<summary>Hint 2</summary>

Both boundary components contribute; compute the curl where the field is defined.

</details>

<details>
<summary>Worked solution</summary>

Green theorem applies to the annulus with both induced boundary orientations.

1. For $r^2=x^2+y^2>0$, $Q_x=(y^2-x^2)/r^4$ and $P_y=(y^2-x^2)/r^4$, so the curl is zero.
2. The field is continuously differentiable on a neighborhood of the closed annulus; the hole excludes the singularity.
3. Green theorem gives total circulation $0$. Individually the outer and inner contributions are $2\pi$ and $-2\pi$, which cancel.

</details>
