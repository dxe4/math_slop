# Apply the divergence-of-curl identity under C² regularity

*Easy · [Calculus](index.md)*

For a C² vector field on an open set in R³, find $\nabla\cdot(\nabla\times F)$.

```answer
{"answer":{"kind":"integer","expected":0,"checker_scope":"Only the requested exact result in the stated domain, units and orientation is checked; reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

Expand the three divergence terms.

</details>

<details>
<summary>Hint 2</summary>

Continuous mixed partials cancel in opposite pairs.

</details>

<details>
<summary>Worked solution</summary>

A curl field has zero divergence wherever the second derivatives commute.

1. Each curl component is a difference of two first partials.
2. After taking divergence, every mixed second partial appears once positively and once negatively.
3. The result is 0.

</details>
