# Match both value and derivative at an exponential join

*Medium · [Calculus](index.md)*

Let $f(x)=e^x$ for x≤0 and f(x)=ax+b for x&gt;0. Return \[a,b\] making f continuously differentiable at zero.

```answer
{"answer":{"kind":"vector","expected":["1","1"],"checker_scope":"Only the requested exact result in the stated domain, units and orientation is checked; reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

Continuity first matches the two branch values.

</details>

<details>
<summary>Hint 2</summary>

Then match their derivative limits at the join.

</details>

<details>
<summary>Worked solution</summary>

A C¹ join must preserve both height and slope.

1. Continuity at 0 requires b=e⁰=1.
2. The left derivative at 0 is e⁰=1, while the right derivative is a, so a=1.
3. With these choices the derivative branches also meet continuously. The vector is \[1,1\].

</details>
