# Identify a left-endpoint sampling rule

*Easy · [Calculus](index.md)*

For the partition $0,2,5$, return the left endpoints used to sample each subinterval in a left Riemann sum. Return a set.

```answer
{"answer":{"kind":"set","expected":["0","2"],"checker_scope":"Only the requested exact result in the stated domain, units and orientation is checked; reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

The subintervals are \[0,2\] and \[2,5\].

</details>

<details>
<summary>Hint 2</summary>

Use the first endpoint of each, not the final partition endpoint.

</details>

<details>
<summary>Worked solution</summary>

Sampling locations are specified before any height or area is calculated.

1. The left endpoint of \[0,2\] is 0.
2. The left endpoint of \[2,5\] is 2.
3. The sampling set is {0,2}.

</details>
