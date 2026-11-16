# Some set versus every set

*Easy · [Set theory](index.md)*

For $I=\{1,2,3\}$, let $A_{1}=\{1,3\}, A_{2}=\{3,5\}, A_{3}=\{3,7\}$. Give union=$\bigcup_{i\in I}A_i$ and intersection=$\bigcap_{i\in I}A_i$.

```answer
{"answer":{"kind":"record_of_finite_sets","expected":{"union":[1,3,5,7],"intersection":[3]},"checker_scope":"Exact stated finite structured answer only; explanations and general infinite claims are not automatically proof-checked."}}
```

<details>
<summary>Hint 1</summary>

The union allows membership in at least one indexed set.

</details>

<details>
<summary>Hint 2</summary>

The intersection requires membership in all three sets.

</details>

<details>
<summary>Worked solution</summary>

Indexed operations apply their membership quantifier over the whole stated index set.

1. The elements appearing somewhere are $1,3,5,7$.
2. Only $3$ appears in every set. Thus union=$\{1,3,5,7\}$ and intersection=$\{3\}$.

</details>
