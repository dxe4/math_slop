# Compute a relative growth rate

*Easy · [Calculus](index.md)*

For $f(x)=e^{x^2}$, find the relative rate f′(3)/f(3).

```answer
{"answer":{"kind":"integer","expected":6,"checker_scope":"Only the requested exact result in the stated domain, units and orientation is checked; reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

Differentiate the exponential through its inner function.

</details>

<details>
<summary>Hint 2</summary>

Divide by f before evaluating to cancel the exponential factor.

</details>

<details>
<summary>Worked solution</summary>

Relative growth removes the current scale of a positive quantity.

1. The chain rule gives f′(x)=2x e^{x²}.
2. Dividing by f(x)=e^{x²} leaves 2x.
3. At x=3 the relative rate is 6.

</details>
