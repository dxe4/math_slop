# Classify every ideal of a truncated polynomial algebra

*Medium · [Abstract algebra problems](index.md)*

For a field k, prove $k[t]/(t^4)$ has exactly five ideals, and list them. Show that a nonzero ideal is determined by the smallest t-order of one of its nonzero elements.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Factor a nonzero element as a power of t times a unit.

</details>

<details>
<summary>Hint 2</summary>

Choose the least available exponent in the ideal; higher powers then follow by multiplication.

</details>

<details>
<summary>Model proof</summary>

The order of vanishing gives a complete chain of ideals.

1. Every nonzero element has a unique least nonzero coefficient exponent r in {0,1,2,3} and equals t^r u with u a unit, since u has nonzero constant coefficient.
2. For a nonzero ideal choose its smallest such r. Multiplying its chosen element by the inverse of u puts t^r in the ideal, so the ideal contains (t^r); minimality of r makes every element divisible by t^r, giving the reverse inclusion.
3. The ideals are therefore (1),(t),(t^2),(t^3),(0), all distinct.

**Self-assessment rubric**

- Factor every nonzero residue by its exact t-order and prove the remainder is a unit.
- Use an ideal element of least order to prove both ideal inclusions.
- List and distinguish all five ideals, including zero and the whole ring.

</details>
