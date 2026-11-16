# Combine a radial Hessian with a nonunit direction

*Medium · [Calculus](index.md)*

For f(x,y)=log(1+x²+y²), find $\frac{d^2}{dt^2}f(t,2t)$ at t=0. The direction (1,2) is not normalized.

```answer
{"answer":{"kind":"integer","expected":10,"checker_scope":"Only the requested exact result in the stated domain, units and orientation is checked; reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

Substitute the path first or obtain the Hessian at the origin.

</details>

<details>
<summary>Hint 2</summary>

The path rule becomes log(1+5t²).

</details>

<details>
<summary>Worked solution</summary>

A second directional response scales quadratically with direction length.

1. Along the path, the scalar function is log(1+5t²).
2. Its first derivative is 10t/(1+5t²), whose derivative at zero is 10.
3. Equivalently the origin Hessian is 2I and (1,2)(2I)(1,2)ᵀ=10.

</details>
