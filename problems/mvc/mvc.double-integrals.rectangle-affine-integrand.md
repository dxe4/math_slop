# Integrate an affine function over a rectangle

*Easy · [Multivariable calculus problems](index.md)*

Evaluate $\int_0^1\int_0^2(x+y)\,dy\,dx$.

```answer
{"answer":{"kind":"integer","expected":"3","checker_scope":"Exact requested value, vector or matrix only; a numerical answer does not automatically certify the accompanying extremum or integration argument."}}
```

<details>
<summary>Hint 1</summary>

In the inner integral, $x$ is constant.

</details>

<details>
<summary>Hint 2</summary>

Apply the inner limits before integrating in $x$.

</details>

<details>
<summary>Worked solution</summary>

Iterated integration keeps the inner coordinate fixed for the outer operation.

1. The inner integral is $[xy+y^2/2]_0^2=2x+2$.
2. The outer integral is $\int_0^1(2x+2)\,dx=[x^2+2x]_0^1$.
3. The value is $3$.

</details>
