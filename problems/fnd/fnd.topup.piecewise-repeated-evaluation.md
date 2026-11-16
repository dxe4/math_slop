# Select the branch again after an output becomes an input

*Medium · [Foundations bridge](index.md)*

Define $f(x)=x^2$ for $x<1$ and $f(x)=2x-1$ for $x\geq1$. Find $f(f(-2))$.

```answer
{"answer":{"kind":"integer","expected":"7","checker_scope":"Exact requested bounded result or declared rule-and-domain pair only. Worked reasoning is not automatically certified; this draft introduces no new checkpoint objective or eligibility."}}
```

<details>
<summary>Hint 1</summary>

Evaluate the inner function first.

</details>

<details>
<summary>Hint 2</summary>

The resulting value may select a different branch for the outer evaluation.

</details>

<details>
<summary>Worked solution</summary>

A branch condition must be checked at each actual input.

1. Since -2&lt;1, the inner value is $f(-2)=(-2)^2=4$.
2. For the outer input four, use the branch for x&gt;=1.
3. Thus $f(4)=2\cdot4-1=7$.

</details>
