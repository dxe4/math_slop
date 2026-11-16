# Collect every input reaching either target

*Medium · [Set theory](index.md)*

For $f:\{1,2,3,4,5,6\}\to\{a,b,c\}$ the outputs in input order are (a,b,a,c,b,c). Find the preimage of {a,c}.

```answer
{"answer":{"kind":"set","expected":"{1, 3, 4, 6}","checker_scope":"Exact declared bounded result, explicit interval description or selected statement only; no unrestricted mapping proof or new checkpoint objective is automatically certified."}}
```

<details>
<summary>Hint 1</summary>

Inspect the output assigned to each input.

</details>

<details>
<summary>Hint 2</summary>

The answer contains input labels, not the target output labels.

</details>

<details>
<summary>Worked solution</summary>

Preimage collects all inputs whose outputs satisfy the target membership condition.

1. The inputs with output a are one and three.
2. The inputs with output c are four and six.
3. The preimage of {a,c} is $\{1,3,4,6\}$.

</details>
