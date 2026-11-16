# Find a tangent from a nonsymmetric implicit relation

*Medium · [Calculus](index.md)*

On $xy+y^2=2$ near (1,1), write the tangent line as y=mx+b. Return \[m,b\].

```answer
{"answer":{"kind":"vector","expected":["-1/3","4/3"],"checker_scope":"Only the requested exact result in the stated domain, units and orientation is checked; reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

Differentiate both the product xy and the square y².

</details>

<details>
<summary>Hint 2</summary>

Use the point after solving the first derivative equation.

</details>

<details>
<summary>Worked solution</summary>

An implicit derivative gives slope, and the contact point fixes its intercept.

1. Differentiating gives y+x y′+2y y′=0, so y′=−y/(x+2y).
2. At (1,1) the slope is −1/3.
3. Using 1=(−1/3)×1+b gives b=4/3, so the vector is \[−1/3,4/3\].

</details>
