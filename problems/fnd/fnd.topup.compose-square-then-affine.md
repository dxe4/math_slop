# Apply the inner rule before the outer rule

*Medium · [Foundations bridge](index.md)*

For $f(x)=2x-3$ and $g(x)=x^2+1$, find $f(g(-2))$.

```answer
{"answer":{"kind":"integer","expected":"7","checker_scope":"Exact requested bounded result or declared rule-and-domain pair only. Worked reasoning is not automatically certified; this draft introduces no new checkpoint objective or eligibility."}}
```

<details>
<summary>Hint 1</summary>

The brackets put g inside f.

</details>

<details>
<summary>Hint 2</summary>

Use the output of the first calculation as the entire input to the outer rule.

</details>

<details>
<summary>Worked solution</summary>

Composition applies the inner map before the outer map.

1. The inner value is $g(-2)=(-2)^2+1=5$.
2. Then $f(g(-2))=f(5)$.
3. This is $2\cdot5-3=7$.

</details>
