# Identical tokens in labelled boxes

*Easy · [Probability problems](index.md)*

$4$ identical tokens are allocated to two labelled boxes. Empty boxes are allowed. How many allocations are possible?

```answer
{"answer":{"kind":"integer","expected":"5","checker_scope":"Checks the number of occupancy vectors, not assignments of distinguishable tokens."}}
```

<details>
<summary>Hint 1</summary>

Describe an allocation by the token count in the first box.

</details>

<details>
<summary>Hint 2</summary>

The second count is then forced. Include both endpoint choices because empty boxes are allowed.

</details>

<details>
<summary>Worked solution</summary>

Use one free occupancy count.

1. Write an allocation as $(x_1,x_2)$ with nonnegative integer entries and $x_1+x_2=4$.
2. For each $x_1\in\{0,1,2,3,4\}$, there is exactly one possible second count, $x_2=4-x_1$.
3. These five vectors are distinct and exhaustive. Tokens are identical, so there is no additional choice of which tokens occupy a box.

The occupancy vectors are $(0,4),(1,3),(2,2),(3,1),(4,0)$, so the count is $5$.

</details>
