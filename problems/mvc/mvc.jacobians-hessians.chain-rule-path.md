# Differentiate along a curved path

*Medium · [Multivariable calculus problems](index.md)*

For $f(x,y)=xy$ and $r(t)=(t^2,t^3)$, compute $\frac{d}{dt}f(r(t))$ at $t=1$.

```answer
{"answer":{"kind":"integer","expected":"5","checker_scope":"Exact requested value, polynomial, vector or matrix only; the explanatory argument is supplied as a worked solution, not automatically certified."}}
```

<details>
<summary>Hint 1</summary>

You may compose first or use the multivariable chain rule.

</details>

<details>
<summary>Hint 2</summary>

The parameter changes both coordinates simultaneously.

</details>

<details>
<summary>Worked solution</summary>

Composition gives a single-variable polynomial whose derivative retains both coordinate changes.

1. The composition is $f(r(t))=t^2t^3=t^5$.
2. Its derivative is $5t^4$.
3. At $t=1$ the requested derivative is $5$.

</details>
