# Prove one implication equivalence on its finite truth domain

*Medium · [Discrete mathematics](index.md)*

Use a complete truth table to prove $(p\Rightarrow q)\equiv(\neg p\lor q)$ for Boolean p,q. State the exceptional assignment where both formulas are false.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and rubric reflection only; no automatic correctness verdict or automatic required objective slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Material implication fails only when its hypothesis is true and its conclusion false.

</details>

<details>
<summary>Hint 2</summary>

List all four assignments so that agreement is not inferred from selected successful rows.

</details>

<details>
<summary>Model proof</summary>

A complete finite table establishes this particular equivalence.

1. For (p,q)=(false,false),(false,true),(true,false),(true,true), the implication values are true,true,false,true.
2. The disjunction not p or q has the same four values, since it is false exactly when p is true and q false.
3. The formulas agree in every row, establishing the equivalence; their common false row is (true,false).

**Self-assessment rubric**

- Include all four Boolean assignments.
- Evaluate implication and negated disjunction with the correct semantics.
- Compare every row and identify the common false assignment.

</details>
