# Complete a bijection with an extra ordering condition

*Medium · [Set theory](index.md)*

A bijection $f:\{1,2,3,4\}\to\{2,4,6,8\}$ has f(1)=4 and f(3)=8. It also satisfies f(2)&lt;f(4). Enter (f(2),f(4)).

```answer
{"answer":{"kind":"vector","expected":["2","6"],"checker_scope":"Exact declared bounded result, explicit interval description or selected statement only; no unrestricted mapping proof or new checkpoint objective is automatically certified."}}
```

<details>
<summary>Hint 1</summary>

A finite bijection uses each codomain element exactly once.

</details>

<details>
<summary>Hint 2</summary>

The inequality determines the order of the two unused output values.

</details>

<details>
<summary>Worked solution</summary>

Unused-value accounting and the stated ordering remove all completion ambiguity.

1. The already-used outputs are four and eight.
2. The remaining outputs are two and six. They must fill the two missing positions without repetition.
3. Since f(2)&lt;f(4), the requested ordered pair is $(2,6)$.

</details>
