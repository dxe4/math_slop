# Identify both extrema guaranteed on a compact interval

*Easy · [Calculus](index.md)*

A real function is continuous on a nonempty closed bounded interval $[a,b]$ with $a\le b$. Which extrema must be attained? Return a set of tokens from {minimum,maximum}. They may occur at the same point or have the same value.

```answer
{"answer":{"kind":"set","expected":["minimum","maximum"],"checker_scope":"Only the requested exact result in the stated domain, units and orientation is checked; reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

Use the extreme value theorem.

</details>

<details>
<summary>Hint 2</summary>

Both upper and lower bounds are attained under these hypotheses.

</details>

<details>
<summary>Worked solution</summary>

Compactness and continuity guarantee attainment, including constant functions.

1. The interval is compact.
2. A continuous real function on it attains its least and greatest values.
3. Return {minimum,maximum}; these are two attainment properties even if the values coincide.

</details>
