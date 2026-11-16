# Relate oscillation sets to a measure-zero discontinuity set

*Hard · [Real analysis](index.md)*

For bounded real $f:[a,b]\to\mathbb R$, prove it is Riemann integrable exactly when its discontinuity set has Lebesgue outer measure zero. You may use elementary outer-measure facts, compact finite subcovers, the Lebesgue-number lemma, and that F\_epsilon={x:oscillation of f at x &gt;= epsilon} is closed. Explain both directions through Darboux gaps.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

For integrable f, positive-oscillation points away from partition nodes lie in cells with large oscillation.

</details>

<details>
<summary>Hint 2</summary>

For the converse, cover a compact bad-oscillation set by a short open union and use small oscillation on the rest.

</details>

<details>
<summary>Model proof</summary>

Darboux gaps measure how much interval length can carry a fixed positive oscillation.

1. Suppose f is integrable. Fix epsilon,eta&gt;0 and choose a partition with gap less than epsilon\*eta. Away from the finite partition nodes, every point of F\_epsilon lies in the interior of a cell whose oscillation is at least epsilon. The total length of those cells is less than eta. Nodes have outer measure zero, so F\_epsilon has outer measure zero. The discontinuity set is the union over positive integers k of F\_(1/k), hence also null.
2. Conversely suppose the discontinuity set is null and \|f\|&lt;=M. For epsilon,eta&gt;0, its compact subset F\_epsilon has a finite open-interval cover with total length less than eta; call the union U. At each point outside F\_epsilon choose a neighborhood on which the range diameter of f is less than epsilon. Together with U these neighborhoods cover \[a,b\].
3. Take a partition fine enough that each closed cell belongs to one member of a finite subcover, using its Lebesgue number. Cells assigned to U have total length less than eta and oscillation at most 2M; all others have oscillation less than epsilon. Thus the Darboux gap is at most 2M\*eta+epsilon\*(b-a), arbitrarily small by choosing the parameters. This proves integrability, with the zero-length interval immediate.

**Self-assessment rubric**

- Control every bad-oscillation threshold and explicitly retain partition-node exceptions.
- Use compactness to cover the bad set by a genuinely short open union.
- Use a Lebesgue number and split the gap into bad-length and good-oscillation budgets.

</details>
