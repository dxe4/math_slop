# Check both missing and multiple outputs

*Medium · [Set theory](index.md)*

A proposed function has domain $\{1,2,3\}$, codomain {a,b,c} and graph pairs (1,a),(2,b),(2,c). How many domain inputs violate the exactly-one-output requirement?

```answer
{"answer":{"kind":"integer","expected":"2","checker_scope":"Exact declared bounded result, explicit interval description or selected statement only; no unrestricted mapping proof or new checkpoint objective is automatically certified."}}
```

<details>
<summary>Hint 1</summary>

Check every declared input, not only inputs appearing in the pair list.

</details>

<details>
<summary>Hint 2</summary>

Both zero outputs and more than one output violate the function condition.

</details>

<details>
<summary>Worked solution</summary>

Totality and single-valuedness are separate parts of exactly-one-output.

1. Input one has exactly the output a and satisfies the requirement.
2. Input two has two distinct outputs b,c; input three has none.
3. Thus $2$ domain inputs violate the requirement.

</details>
