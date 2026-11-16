# Apply the absolute convergence theorem

*Easy · [Calculus](index.md)*

If $\sum |a_n|$ converges for a real series, must Σa\_n converge? Return {yes} or {no}.

```answer
{"answer":{"kind":"set","expected":["yes"],"checker_scope":"Only the requested exact result in the stated domain, units and orientation is checked; reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

Use the absolute convergence theorem.

</details>

<details>
<summary>Hint 2</summary>

An absolute tail bounds the magnitude of the corresponding signed tail.

</details>

<details>
<summary>Worked solution</summary>

Absolute tail control is sufficient for the ordinary Cauchy criterion.

1. For any finite tail, \|Σa\_n\|≤Σ\|a\_n\|.
2. The absolute tails tend uniformly to zero because their series converges.
3. The ordinary series therefore converges; return {yes}.

</details>
