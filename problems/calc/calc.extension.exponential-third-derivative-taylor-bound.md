# Bound a quadratic Taylor error using a third derivative maximum

*Medium · [Calculus](index.md)*

Use the degree-two Lagrange remainder bound for eˣ at zero on $0\le x\le1$. At x=1, return B/e where B is the bound obtained from max₀≤t≤1\|f‴(t)\|=e.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":6},"checker_scope":"Only the requested exact result in the stated domain, units and orientation is checked; reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

The third-order remainder denominator is 3!.

</details>

<details>
<summary>Hint 2</summary>

The distance from the expansion point is one.

</details>

<details>
<summary>Worked solution</summary>

A derivative maximum gives an upper bound, not the exact remainder.

1. The Lagrange bound is B=M\|x−0\|³/3!.
2. At x=1 with M=e, this is e/6.
3. Hence B/e=1/6; no equality with the actual error is asserted.

</details>
