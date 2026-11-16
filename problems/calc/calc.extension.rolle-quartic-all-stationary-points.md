# Count every Rolle candidate rather than only the guaranteed one

*Medium · [Calculus](index.md)*

For $f(x)=x^4-x^2$ on \[−1,1\], how many distinct c∈(−1,1) satisfy f′(c)=0? The endpoint values agree, but count all such c.

```answer
{"answer":{"kind":"integer","expected":3,"checker_scope":"Only the requested exact result in the stated domain, units and orientation is checked; reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

Factor the derivative completely.

</details>

<details>
<summary>Hint 2</summary>

Check which derivative roots lie strictly inside the interval.

</details>

<details>
<summary>Worked solution</summary>

Rolle guarantees existence without specifying the actual total number of stationary points.

1. The derivative is 4x³−2x=2x(2x²−1).
2. Its roots are 0 and ±1/√2. All three lie in (−1,1).
3. Hence the exact count is 3, larger than the minimum one guaranteed by Rolle.

</details>
