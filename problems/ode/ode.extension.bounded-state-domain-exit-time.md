# Preserve a state-domain boundary in the continuation question

*Medium · [Differential equations problems](index.md)*

On the state domain y&lt;1, solve $y'=1/(1-y)$, y(0)=0. Find the forward maximal endpoint T. Explain in the worked argument why bounded state values do not imply continuation within this domain.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":2},"checker_scope":"Exact requested existence bound or sensitivity observation only; no uniqueness or proof verdict is inferred."}}
```

<details>
<summary>Hint 1</summary>

Separate before selecting the root matching the initial value.

</details>

<details>
<summary>Hint 2</summary>

The obstruction is the boundary of the equation's domain, not escape to infinity.

</details>

<details>
<summary>Worked solution</summary>

Continuation requires a compact subset of the actual domain.

1. Separation gives y-y^2/2=t. The initial branch is y(t)=1-sqrt(1-2t), valid for t&lt;1/2 and satisfying y&lt;1.
2. As t increases to 1/2, y tends to one. The equation is undefined at that state, so the maximal forward endpoint is T=1/2.
3. Although y remains bounded, its graph approaches the boundary of the stated domain. It does not stay in a compact subset of that domain, so the compact-continuation theorem does not apply.

</details>
