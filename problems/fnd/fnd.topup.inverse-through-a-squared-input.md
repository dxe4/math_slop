# Recover both inputs through a composition

*Hard · [Foundations bridge](index.md)*

Let $f(t)=3t-2$ and $g(x)=x^2+1$. Find all integer x satisfying $f(g(x))=28$.

```answer
{"answer":{"kind":"set","expected":"{-3, 3}","checker_scope":"Exact requested bounded result or declared rule-and-domain pair only. Worked reasoning is not automatically certified; this draft introduces no new checkpoint objective or eligibility."}}
```

<details>
<summary>Hint 1</summary>

Undo the affine outer function before undoing the square in the inner one.

</details>

<details>
<summary>Hint 2</summary>

A positive square value can arise from two signed inputs.

</details>

<details>
<summary>Worked solution</summary>

Backward composition preserves both square-root branches.

1. The outer equation gives $3g(x)-2=28$, hence g(x)=10.
2. Thus $x^2+1=10$, so $x^2=9$.
3. The full integer solution set is $\{-3,3\}$.

</details>
