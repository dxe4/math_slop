# Keep endpoint types on both preimage branches

*Hard · [Set theory](index.md)*

For $f:\mathbb R\to\mathbb R$, f(x)=x squared, find $f^{-1}([1,4))$ as a union of real intervals.

```answer
{"answer":{"kind":"interval","expected":"(-2, -1] U [1, 2)","checker_scope":"Exact declared bounded result, explicit interval description or selected statement only; no unrestricted mapping proof or new checkpoint objective is automatically certified."}}
```

<details>
<summary>Hint 1</summary>

Translate target membership into two inequalities on x squared.

</details>

<details>
<summary>Hint 2</summary>

Both signs of x can qualify, and the upper target endpoint is excluded.

</details>

<details>
<summary>Worked solution</summary>

A square-map preimage generally has two branches even though the function has no inverse on all reals.

1. The condition is $1\leq x^2<4$, equivalently $1\leq|x|<2$.
2. The negative branch is $-2<x\leq-1$ and the positive branch is $1\leq x<2$.
3. The full preimage is $(-2,-1]\cup[1,2)$.

</details>
