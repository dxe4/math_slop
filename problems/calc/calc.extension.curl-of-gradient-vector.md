# Apply the curl-of-gradient identity

*Easy · [Calculus](index.md)*

For C² scalar φ on an open set in R³, return $\nabla\times\nabla\phi$ in Cartesian component order.

```answer
{"answer":{"kind":"vector","expected":["0","0","0"],"checker_scope":"Only the requested exact result in the stated domain, units and orientation is checked; reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

Each component is a difference of equal mixed second partials.

</details>

<details>
<summary>Hint 2</summary>

The stated regularity permits their equality.

</details>

<details>
<summary>Worked solution</summary>

A scalar potential has no local rotational derivative.

1. The three components are φ\_{zy}−φ\_{yz}, φ\_{xz}−φ\_{zx} and φ\_{yx}−φ\_{xy}.
2. C² regularity makes every pair equal.
3. The curl vector is \[0,0,0\].

</details>
