# Check the exact partial derivative used by an implicit theorem

*Easy · [Calculus](index.md)*

For $F(x,y)=x^2+y^2-4$ at (2,0), does the nonzero-F\_y hypothesis for solving y as a C¹ function of x hold? Return {holds} or {fails}. This asks only about that hypothesis.

```answer
{"answer":{"kind":"set","expected":["fails"],"checker_scope":"Only the requested exact result in the stated domain, units and orientation is checked; reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

Differentiate F with respect to y.

</details>

<details>
<summary>Hint 2</summary>

Evaluate that partial at the supplied point.

</details>

<details>
<summary>Worked solution</summary>

An implicit-function hypothesis is directional: the variable being solved for selects the partial.

1. Here F\_y=2y.
2. At (2,0) its value is zero.
3. Thus the specified nonzero-partial hypothesis fails; return {fails}.

</details>
