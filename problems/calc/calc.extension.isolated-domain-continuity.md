# Use continuity relative to an isolated domain point

*Easy · [Calculus](index.md)*

Give Z the usual real subspace topology and $f(n)=(-1)^n$. Is f continuous at the domain point 0? Return {continuous} or {discontinuous}; continuity is relative to Z.

```answer
{"answer":{"kind":"set","expected":["continuous"],"checker_scope":"Only the requested exact result in the stated domain, units and orientation is checked; reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

A sufficiently small interval around zero contains only the integer zero.

</details>

<details>
<summary>Hint 2</summary>

Then every allowed domain input in that neighborhood has exactly the same output as f(0).

</details>

<details>
<summary>Worked solution</summary>

Continuity at an isolated domain point imposes no restriction on other points.

1. Choose δ=1/2. The only integer n with \|n\|&lt;δ is 0.
2. For that input, \|f(n)−f(0)\|=0, smaller than any positive tolerance.
3. Hence f is continuous at 0 relative to Z; return {continuous}.

</details>
