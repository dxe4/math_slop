# Read the minimum root count supplied by IVT

*Easy · [Calculus](index.md)*

A real function is continuous on $[a,b]$ with $a<b$, $f(a)<0$ and $f(b)>0$. What is the minimum number of distinct roots in (a,b) guaranteed by the intermediate value theorem?

```answer
{"answer":{"kind":"integer","expected":1,"checker_scope":"Only the requested exact result in the stated domain, units and orientation is checked; reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

Zero lies strictly between the endpoint values.

</details>

<details>
<summary>Hint 2</summary>

The theorem guarantees at least one input with that output, not a unique input.

</details>

<details>
<summary>Worked solution</summary>

A sign change under continuity supplies existence.

1. The intermediate value theorem gives some c∈(a,b) with f(c)=0.
2. It need not give uniqueness, but it always gives one root.
3. The minimum guaranteed count is 1.

</details>
