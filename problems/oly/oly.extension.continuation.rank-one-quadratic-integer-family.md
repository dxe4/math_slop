# Classify an infinite quadratic family

*Medium · [Original olympiad-style problems](index.md)*

Classify all integer pairs $(x,y)$ satisfying $x^2+y^2=2xy+9$, giving an explicit integer parameter and proving both directions.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict, contest correctness, graded evidence or checkpoint credit."}}
```

<details>
<summary>Hint 1</summary>

Move the mixed term to the left to obtain one squared difference.

</details>

<details>
<summary>Hint 2</summary>

An integer whose square is nine has only two possible signs.

</details>

<details>
<summary>Model proof</summary>

Reduce the quadratic form to a difference coordinate.

1. The equation is equivalent to $(x-y)^2=9$.
2. Thus either $x-y=3$ or $y-x=3$. All pairs are $(t+3,t)$ or $(t,t+3)$ with $t\in\mathbb Z$.
3. Every listed pair has squared difference nine, so substituting recovers the original equation. No positivity or ordering was assumed, and both signs are included.

**Self-assessment rubric**

- Reduce to exactly the squared-difference equation.
- Give both signed families with the full integer domain.
- Prove every family member works and every solution belongs to one.

</details>
