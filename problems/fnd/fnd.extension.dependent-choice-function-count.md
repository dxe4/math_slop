# Count dependent witnesses rather than one uniform witness

*Medium · [Foundations bridge](index.md)*

Let D={0,1,2}. How many functions w:D→D satisfy $w(x)\ne x$ for every x∈D? Outputs for different inputs may coincide.

```answer
{"answer":{"kind":"integer","expected":8,"checker_scope":"Only the requested exact result in the stated domain and units is checked; the reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

There are two permitted outputs for each fixed input.

</details>

<details>
<summary>Hint 2</summary>

Choices for different inputs are independent; injectivity is not required.

</details>

<details>
<summary>Worked solution</summary>

A witness may depend on its input without needing distinct output values.

1. At x=0 one may choose 1 or 2. At x=1 one may choose 0 or 2. At x=2 one may choose 0 or 1.
2. Each of the three independent choices has two possibilities, giving 2×2×2 functions.
3. The count is 8. A single constant witness would fail at the input equal to that constant, but that is a different requirement.

</details>
