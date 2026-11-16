# Normalize a direction before using unit-rate conventions

*Easy · [Calculus](index.md)*

Find the unit vector in the direction of $v=(6,8)$, using the ordinary Euclidean norm. Return its ordered coordinates.

```answer
{"answer":{"kind":"vector","expected":["3/5","4/5"],"checker_scope":"Only the requested exact result in the stated domain, units and orientation is checked; reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

Compute the length from the sum of coordinate squares.

</details>

<details>
<summary>Hint 2</summary>

Divide both coordinates by that one length.

</details>

<details>
<summary>Worked solution</summary>

A unit direction retains orientation but has length one.

1. The norm is √(36+64)=10.
2. Dividing gives (6/10,8/10).
3. The unit vector is \[3/5,4/5\].

</details>
