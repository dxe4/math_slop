# Separate a fixed grid from a denominator budget

*Medium · [Foundations bridge](index.md)*

Construct two distinct rational numbers strictly between $1/3$ and $1/2$, each with reduced denominator at most $8$. Then prove that no number of the form k/6 with integer k lies strictly in that interval.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and rubric reflection only; no automatic correctness verdict, checkpoint evidence or required automatic objective slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

A denominator budget permits several different grids.

</details>

<details>
<summary>Hint 2</summary>

For the fixed sixths grid, multiply the strict interval inequalities by six.

</details>

<details>
<summary>Model proof</summary>

Constructed reduced fractions and a fixed-grid impossibility require different arguments.

1. Choose $3/8$ and $2/5$. They are reduced, have denominators eight and five, and are distinct because $3\cdot5=15\neq16=2\cdot8$.
2. The inequalities $1/3<3/8<1/2$ and $1/3<2/5<1/2$ follow by cross-multiplying positive denominators.
3. If $1/3<k/6<1/2$, then $2<k<3$, impossible for an integer. The denominator budget allowed values even though that particular grid did not.

**Self-assessment rubric**

- Give two distinct reduced fractions with permitted denominators.
- Check both strict interval conditions and distinct values.
- Translate the sixths-grid condition into an impossible integer interval.

</details>
