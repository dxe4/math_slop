# Recover a tangent plane

*Medium · [Multivariable calculus problems](index.md)*

The graph $z=x^2+y^2$ has a tangent plane at $(1,2,5)$. Write it as $z=ax+by+c$ and enter $(a,b,c)$.

```answer
{"answer":{"kind":"vector","expected":["2","4","-5"],"checker_scope":"Exact requested value, polynomial, vector or matrix only; the explanatory argument is supplied as a worked solution, not automatically certified."}}
```

<details>
<summary>Hint 1</summary>

Use the first-order expansion at $(1,2)$.

</details>

<details>
<summary>Hint 2</summary>

The plane must pass through the given graph point.

</details>

<details>
<summary>Worked solution</summary>

The tangent plane is the affine first-order approximation.

1. For $f=x^2+y^2$, the gradient at $(1,2)$ is $(2,4)$.
2. Thus $z=5+2(x-1)+4(y-2)$.
3. Collecting terms gives $z=2x+4y-5$, so the answer is $(2,4,-5)$.

</details>
