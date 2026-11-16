# Find a factorial-versus-power ratio-test limit

*Medium · [Calculus](index.md)*

For a\_n=n!/nⁿ, n≥1, let $L=\lim a_{n+1}/a_n$. Find eL. You may use (1+1/n)ⁿ→e.

```answer
{"answer":{"kind":"integer","expected":1,"checker_scope":"Only the requested exact result in the stated domain, units and orientation is checked; reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

Cancel the factorials before taking the limit.

</details>

<details>
<summary>Hint 2</summary>

The remaining ratio is the reciprocal of the supplied standard exponential sequence.

</details>

<details>
<summary>Worked solution</summary>

Factorial cancellation exposes a nonconstant power ratio.

1. The ratio is \[(n+1)!/(n+1)^{n+1}\]/\[n!/nⁿ\]=(n/(n+1))ⁿ.
2. It tends to e⁻¹ by the stated standard limit.
3. Thus L=1/e and the requested eL is 1.

</details>
