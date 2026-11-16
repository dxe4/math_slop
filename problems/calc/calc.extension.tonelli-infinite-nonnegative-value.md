# Retain a nonnegative infinite integral under order exchange

*Easy · [Calculus](index.md)*

Use Tonelli’s theorem: for a nonnegative measurable function, both iterated integrals equal its extended double integral. If one order has value $+\infty$, must the other order also have that value? Return {yes} or {no}.

```answer
{"answer":{"kind":"set","expected":["yes"],"checker_scope":"Only the requested exact result in the stated domain, units and orientation is checked; reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

The stated theorem permits extended infinite values.

</details>

<details>
<summary>Hint 2</summary>

Finiteness is not needed for this nonnegative conclusion.

</details>

<details>
<summary>Worked solution</summary>

Nonnegative integration can preserve equality even when no finite integral exists.

1. The function satisfies the nonnegativity hypothesis in the stated theorem.
2. Both orders equal the same extended integral.
3. Thus the second order is also +∞; return {yes}.

</details>
