# Prove the union bound with indicators

*Medium · [Probability problems](index.md)*

For events $A_1,\ldots,A_m$ in one probability space, with integer $m\ge1$, prove $P(\bigcup_{i=1}^mA_i)\le\sum_{i=1}^mP(A_i)$ without assuming independence.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic-rubric self-assessment only; no automatic correctness verdict or graded objective-slot evidence."}}
```

<details>
<summary>Hint 1</summary>

An event indicator is $1$ when that event occurs and $0$ otherwise.

</details>

<details>
<summary>Hint 2</summary>

Compare the union indicator with the sum of individual indicators at one fixed outcome, then consider what averaging does to that comparison.

</details>

<details>
<summary>Model proof</summary>

A pointwise indicator inequality survives taking expectations.

1. Fix an outcome. If it belongs to no $A_i$, both the union indicator and the indicator sum are zero.
2. Otherwise the union indicator is $1$ and the sum counts at least one membership. Thus $\mathbf1_{\cup_iA_i}\le\sum_i\mathbf1_{A_i}$ at every outcome.
3. All these indicators are integrable. Monotonicity and finite linearity of expectation give $P(\bigcup_iA_i)\le\sum_iP(A_i)$. No products or independence were used.

Pointwise the union indicator is no larger than the sum of indicators. Taking expectations gives the union bound by monotonicity and finite linearity, without independence.

**Self-assessment rubric**

- Justify the pointwise inequality by treating outcomes inside and outside the union.
- Use expectation monotonicity and finite linearity to turn indicators into event probabilities.
- State why no independence assumption is needed.

</details>
