# Distinguish antisymmetry from asymmetry

*Medium · [Set theory](index.md)*

On $\{1,2\}$ let $R=\{(1,1),(2,2)\}$. Which description is correct? Choices: R is symmetric and antisymmetric, but not asymmetric.; R is asymmetric.; R is not symmetric.; R is not antisymmetric.

**Options**

1. R is symmetric and antisymmetric, but not asymmetric.
2. R is asymmetric.
3. R is not symmetric.
4. R is not antisymmetric.

```answer
{"answer":{"kind":"multiple_choice","expected":"sym_antisym","checker_scope":"Exact declared bounded result, explicit interval description or selected statement only; no unrestricted set proof or new checkpoint objective is automatically certified."},"options":["sym_antisym","asymmetric","not_symmetric","not_antisymmetric"]}
```

<details>
<summary>Hint 1</summary>

Antisymmetry forbids two-way pairs only when their entries are distinct.

</details>

<details>
<summary>Hint 2</summary>

Asymmetry forbids a pair and its reverse even for a loop.

</details>

<details>
<summary>Worked solution</summary>

Symmetry and antisymmetry can coexist in a relation consisting only of loops.

1. Every pair is its own reverse, so R is symmetric.
2. There are no two-way pairs with distinct entries, so R is antisymmetric.
3. The loops prevent asymmetry. Thus R is symmetric and antisymmetric but not asymmetric.

</details>
