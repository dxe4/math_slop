# Prove rational density with a controlled grid numerator

*Hard · [Real analysis](index.md)*

For real numbers $a<b$, use the Archimedean property to construct integers N&gt;0,k with a&lt;k/N&lt;b. Prove the strict inequalities.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Choose the grid spacing smaller than the interval length.

</details>

<details>
<summary>Hint 2</summary>

Use floor(Na)+1, even if Na itself is an integer.

</details>

<details>
<summary>Model proof</summary>

An Archimedean grid and a one-step floor shift place a rational strictly inside the interval.

1. Choose N with N(b-a)&gt;1, and put k=floor(Na)+1.
2. The floor inequalities give Na&lt;k&lt;=Na+1&lt;Nb. The first strict inequality holds even when Na is an integer because one was added.
3. Dividing by positive N gives the desired strictly interior rational k/N.

**Self-assessment rubric**

- Choose a positive integer grid denominator using the interval length.
- Define the floor-based integer and verify both strict bounds.
- Divide by the positive denominator to obtain an interior rational.

</details>
