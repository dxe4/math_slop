# Supply all bases needed by a four-step reduction

*Hard · [Discrete mathematics](index.md)*

Prove by strong induction that every integer $n\geq12$ can be written $4a+5b$ with nonnegative integers a,b.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and rubric reflection only; no automatic correctness verdict or automatic required objective slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

A reduction by four needs a whole initial block of consecutive cases.

</details>

<details>
<summary>Hint 2</summary>

After that block, n-4 remains inside the induction range.

</details>

<details>
<summary>Model proof</summary>

Four base cases support one uniform predecessor reduction.

1. The bases are $12=3\cdot4$, $13=2\cdot4+5$, $14=4+2\cdot5$ and $15=3\cdot5$.
2. For n&gt;=16 assume every integer from twelve through n-1 has a permitted representation. Then n-4&gt;=12 and n-4&lt;n.
3. Write n-4=4a+5b by the hypothesis. It follows that n=4(a+1)+5b, still with nonnegative coefficients.
4. The four bases and the successor reduction cover every integer at least twelve.

**Self-assessment rubric**

- Verify twelve through fifteen, with nonnegative coefficients.
- Show the reduced input remains in the strong-hypothesis domain.
- Add one four-unit part and retain admissible coefficients.

</details>
