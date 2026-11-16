# Use a supporting tangent below a convex graph

*Easy · [Real analysis](index.md)*

A convex function f is differentiable on an open interval containing \[0,2\], with f(0)=1 and f(2)=5. The supporting-line inequality is $f(y)\ge f(x)+f'(x)(y-x)$. Find the resulting upper bound on f'(0).

```answer
{"answer":{"kind":"integer","expected":2,"checker_scope":"Exact requested derivative quantity or guaranteed bound only; no full analytic argument is automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

Use x=0 and y=2 in the supplied inequality.

</details>

<details>
<summary>Hint 2</summary>

Divide by the positive input difference.

</details>

<details>
<summary>Worked solution</summary>

A tangent to a differentiable convex function lies below its secants.

1. The inequality gives 5&gt;=1+2\*fprime(0).
2. Hence 4&gt;=2\*fprime(0).
3. The stated upper bound is fprime(0)&lt;=2; equality is attained by the affine function 1+2x.

</details>
