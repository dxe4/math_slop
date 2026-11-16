# Distinguish rational and real completeness

*Medium · [Real analysis](index.md)*

Let T={q∈Q:q≥0 and q²&lt;2}. You may use that $\sqrt{2}$ is irrational and rationals are dense in R. Which claim is true? Select the mathematically correct statement from the four alternatives.

**Options**

1. T has rational supremum $2$.
2. Its real supremum is $\sqrt{2}$, but it has no supremum in Q.
3. T has no real upper bound.
4. T has a maximum rational member because it is bounded above.

```answer
{"answer":{"kind":"multiple_choice","expected":"its_real_supremum_is","checker_scope":"Checks the selected mathematical statement among four authored alternatives under the stated hypotheses; does not assess a freely written proof."},"options":["t_has_rational_supre","its_real_supremum_is","t_has_no_real","t_has_a_maximum"]}
```

<details>
<summary>Hint 1</summary>

The square condition places every member below $\sqrt{2}$.

</details>

<details>
<summary>Hint 2</summary>

Density supplies rational elements and rational upper bounds arbitrarily close to $\sqrt{2}$ from either side.

</details>

<details>
<summary>Worked solution</summary>

A complete ambient system is essential to the conclusion.

1. For every $t<\sqrt{2}$, density gives a nonnegative rational q between $\max (t,0)$ and √2, so no $t<\sqrt{2}$ can bound T above. Thus its real supremum is $\sqrt{2}$.
2. A rational candidate below $\sqrt{2}$ fails to bound T. A rational candidate above $\sqrt{2}$ is not least, because density supplies a smaller rational upper bound.
3. Since $\sqrt{2}$ is not rational, T has no supremum in Q.

</details>
