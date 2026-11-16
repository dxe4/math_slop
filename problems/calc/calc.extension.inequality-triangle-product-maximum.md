# Find a maximum on a region with active inequality boundaries

*Medium · [Calculus](index.md)*

On x≥0,y≥0,x+y≤1, maximize xy. Return $[x,y,\text{maximum}]$ for its unique maximizer.

```answer
{"answer":{"kind":"vector","expected":["1/2","1/2","1/4"],"checker_scope":"Only the requested exact result in the stated domain, units and orientation is checked; reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

Use 4xy≤(x+y)².

</details>

<details>
<summary>Hint 2</summary>

Track equality in both this inequality and x+y≤1.

</details>

<details>
<summary>Worked solution</summary>

A sharp bound identifies both the value and the active boundary.

1. For feasible points, 4xy≤(x+y)²≤1, so xy≤1/4.
2. Equality requires x=y and x+y=1, giving x=y=1/2.
3. This feasible point attains the bound, and the equality conditions make it unique. The vector is \[1/2,1/2,1/4\].

</details>
