# State the scope of a degenerate Hessian test

*Easy · [Calculus](index.md)*

At a critical point, the entire Hessian is $H=0$. Without higher-order information, is the second-derivative test decisive? Return {decisive} or {inconclusive}.

```answer
{"answer":{"kind":"set","expected":["inconclusive"],"checker_scope":"Only the requested exact result in the stated domain, units and orientation is checked; reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

A zero quadratic term leaves all classification to higher orders.

</details>

<details>
<summary>Hint 2</summary>

Both minima and saddles can have such a Hessian.

</details>

<details>
<summary>Worked solution</summary>

A vanishing Hessian does not classify the leading nonzero local behavior.

1. For example x⁴+y⁴ has a minimum and zero Hessian at zero.
2. The function x⁴−y⁴ has a saddle and the same zero Hessian there.
3. Therefore the test is {inconclusive}.

</details>
