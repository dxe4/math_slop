# Prove the complete-metric Baire theorem by nested localization

*Hard · [Real analysis](index.md)*

Let X be a nonempty complete metric space and G\_n countably many open dense subsets. Prove $\bigcap_{n\ge1}G_n$ is dense in X. Construct nested closed balls with shrinking radii inside an arbitrary nonempty open set and justify the common point.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

At each step, density makes the intersection with the previous open ball nonempty and open.

</details>

<details>
<summary>Hint 2</summary>

Choose the next closed ball inside that intersection with radius below 2^(-n).

</details>

<details>
<summary>Model proof</summary>

Completeness supplies a point that survives every dense open condition.

1. Fix a nonempty open U. Choose a closed ball B\_1 of positive radius less than 1/2 contained in U intersect G\_1: density and openness first give a point and a small open ball, then halve its radius for a contained closed ball.
2. Inductively choose B\_(n+1) inside the open ball with the same center and radius as B\_n, intersected with G\_(n+1), with positive radius less than 2^(-(n+1)). The centers form a Cauchy sequence because all later centers lie in B\_n and its radius tends to zero.
3. Completeness gives a limit x, and closedness and nesting put it in every B\_n. Hence x belongs to U and every G\_n. Since U was arbitrary, the intersection is dense; the argument also permits isolated points because their sufficiently small balls are singletons.

**Self-assessment rubric**

- Use density and openness to obtain closed balls actually contained in each required intersection.
- Prove the shrinking nested construction yields a Cauchy sequence.
- Retain all closed-ball memberships in the limit and conclude density.

</details>
