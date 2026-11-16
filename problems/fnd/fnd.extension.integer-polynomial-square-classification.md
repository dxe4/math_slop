# Classify when a quadratic expression can itself be a square

*Hard · [Foundations bridge](index.md)*

Find all integers n for which $n^2+n+1$ is the square of an integer, and prove your list complete, including negative n.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

For positive n compare with the consecutive squares n² and (n+1)².

</details>

<details>
<summary>Hint 2</summary>

The substitution m=−n−1 preserves the expression and converts n≤−2 to m≥1.

</details>

<details>
<summary>Model proof</summary>

A gap between consecutive squares eliminates infinitely many cases at once, and symmetry handles the negative side.

1. For n≥1, n²&lt;n²+n+1&lt;(n+1)² because n+1&gt;0 and (n+1)²−(n²+n+1)=n&gt;0. No integer square lies strictly between consecutive nonnegative squares.
2. For n≤−2 set m=−n−1≥1. Direct substitution gives n²+n+1=m²+m+1, which is not a square by the positive case.
3. The remaining integers are n=−1 and n=0. Each gives the value 1, which is a square.
4. Therefore the complete list is {−1,0}, with all other positive and negative cases excluded.

**Self-assessment rubric**

- Establishes both strict bounds for every positive n and uses consecutive-square discreteness.
- Verifies the substitution and covers all n≤−2.
- Checks n=−1,0 directly and concludes the exhaustive list.

</details>
