# Refute an inference that selects one disjunct

*Hard · [Discrete mathematics](index.md)*

Refute the inference from $p\Rightarrow(q\lor r)$ and p to q. Give a truth assignment making both premises true and the conclusion false, and identify the valid weaker conclusion.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and rubric reflection only; no automatic correctness verdict or automatic required objective slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

The conclusion q must be false in a counterassignment.

</details>

<details>
<summary>Hint 2</summary>

The other disjunct can make the first premise true while p stays true.

</details>

<details>
<summary>Model proof</summary>

An inclusive disjunction does not license either individual disjunct.

1. Take p=true, q=false and r=true.
2. Then q or r is true, so both p and the implication premise are true, while q is false.
3. The valid conclusion from the premises is q or r. Selecting q alone discards the alternative that r supplied.

**Self-assessment rubric**

- Specify all variables and make the proposed conclusion false.
- Verify both original premises are true in that same assignment.
- State the disjunction that actually follows and explain the invalid selection.

</details>
