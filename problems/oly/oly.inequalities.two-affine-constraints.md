# Complete a square after eliminating constraints

*Hard · [Original olympiad-style problems](index.md)*

Real numbers x,y,z satisfy $x+y+z=6$ and $x-y=2$. Find the minimum of $x^2+y^2+z^2$.

```answer
{"answer":{"kind":"integer","expected":"14","checker_scope":"Exact short answer only; the complete argument remains a worked solution, not an automatically certified proof or contest result."}}
```

<details>
<summary>Hint 1</summary>

Use one free variable to satisfy both affine constraints.

</details>

<details>
<summary>Hint 2</summary>

The objective becomes a quadratic whose square can be completed.

</details>

<details>
<summary>Worked solution</summary>

Constraint elimination reduces the global three-variable minimum to one square.

1. Write y=t, so x=t+2 and z=4-2t.
2. The objective becomes $(t+2)^2+t^2+(4-2t)^2=6(t-1)^2+14$.
3. The minimum is $14$, attained at t=1, or (x,y,z)=(3,1,2).

</details>
