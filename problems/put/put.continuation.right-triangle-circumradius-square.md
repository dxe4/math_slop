# Right triangle circumradius square

*Medium · [Original Putnam-style training](index.md)*

Triangle $ABC$ has vertices $A=(0,0)$, $B=(4,0)$, $C=(0,6)$. Find the squared circumradius.

```answer
{"answer":{"kind":"integer","expected":"13","checker_scope":"Only the exact bounded answer is checked; the argument and assumptions are not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

The right angle is at $A$; its circumcenter is the hypotenuse midpoint.

</details>

<details>
<summary>Hint 2</summary>

Compute the squared distance from that midpoint to one vertex.

</details>

<details>
<summary>Worked solution</summary>

The squared circumradius is $13$.

1. The triangle is right at $A$, so the midpoint of hypotenuse $BC$ is the circumcenter.
2. That midpoint is $O=(2,3)$, giving $OA^2=2^2+3^2$.
3. The squared circumradius is $13$.

</details>
