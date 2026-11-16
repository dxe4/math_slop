# Find why a finite universal-existential claim fails

*Easy · [Foundations bridge](index.md)*

Let $D=\{0,1,2\}$. Find the member $x$ of $D$ for which there is no member $y$ of $D$ satisfying $y>x$. Enter $x$ as an integer.

```answer
{"answer":{"kind":"integer","expected":2,"checker_scope":"Checks the complete displayed exact mathematical answer under the original finite givens. Any written explanation remains separate from this bounded automatic result."}}
```

<details>
<summary>Hint 1</summary>

A finite domain has a largest member.

</details>

<details>
<summary>Hint 2</summary>

Check whether the proposed larger value is still inside the stated domain.

</details>

<details>
<summary>Worked solution</summary>

A quantified witness must stay inside its domain.

1. For $x=0$, the member $y=1$ is larger.
2. For $x=1$, the member $y=2$ is larger.
3. For $x=2$ there is no larger member of $D$, so this is the required witness.

</details>
