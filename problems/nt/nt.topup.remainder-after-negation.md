# Prove the remainder rule under negation

*Hard · [Number theory](index.md)*

Let $N=bq+r$ with b&gt;0 and 0&lt;=r&lt;b. Derive the canonical quotient and remainder of -N, treating r=0 and r&gt;0 separately, and justify uniqueness.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

The negative of a positive remainder is outside the canonical range.

</details>

<details>
<summary>Hint 2</summary>

When r&gt;0, borrow one negative multiple of b to restore a positive remainder.

</details>

<details>
<summary>Model proof</summary>

Euclidean division needs a separate zero-remainder case.

1. If r=0, then $-N=b(-q)+0$, so the quotient is -q and the remainder zero.
2. If r&gt;0, then $-N=b(-q-1)+(b-r)$, with $0<b-r<b$.
3. For uniqueness, subtract two canonical records: b times the quotient difference equals a remainder difference of magnitude less than b, so both differences are zero.

**Self-assessment rubric**

- Handle exactly divisible inputs without inventing a remainder equal to b.
- Derive the adjusted quotient and check both remainder bounds.
- Use the bounded remainder difference to justify uniqueness.

</details>
