# Use a forced test value and then verify universality

*Medium · [Foundations bridge](index.md)*

Find every real x such that $\forall y\in\mathbb R,\ xy=y$. Return the set of x values.

```answer
{"answer":{"kind":"set","expected":["1"],"checker_scope":"Only the requested exact result in the stated domain and units is checked; the reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

A universal statement must hold in particular at y=1.

</details>

<details>
<summary>Hint 2</summary>

After finding the forced candidate, verify it for arbitrary real y.

</details>

<details>
<summary>Worked solution</summary>

One test input can force a candidate, but sufficiency still requires all inputs.

1. Taking y=1 forces x×1=1, hence x=1.
2. For x=1 and any real y, the product 1×y equals y.
3. Thus the full parameter set is {1}; testing only y=0 would not have forced the answer.

</details>
