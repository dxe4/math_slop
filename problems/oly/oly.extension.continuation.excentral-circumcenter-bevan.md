# Find the center of the excentral circumcircle

*Hard · [Original olympiad-style problems](index.md)*

Let $I_A,I_B,I_C$ be the three excenters of a nondegenerate triangle $ABC$, with incenter $I$ and circumcenter $O$. Prove that their circumcircle has radius $2R$ and center $V=2O-I$, where $R$ is the original circumradius. You may use the nine-point-circle theorem for a nondegenerate triangle.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict, contest correctness, graded evidence or checkpoint credit."}}
```

<details>
<summary>Hint 1</summary>

In the excentral triangle, prove that $A,B,C$ are the three altitude feet and $I$ the orthocenter.

</details>

<details>
<summary>Hint 2</summary>

The nine-point circle of the excentral triangle therefore passes through $A,B,C$.

</details>

<details>
<summary>Model proof</summary>

The original circumcircle is the altitude-foot circle of the excentral triangle.

1. At $A$, the internal bisector line $AI_A=AI$ is perpendicular to the external bisector line $AI_B=AI_C$. Thus $I_AA$ is perpendicular to $I_BI_C$ and meets that side at $A$. The analogous statements hold at $B,C$.
2. The three internal bisectors concur at $I$, so $I$ is the orthocenter of the excentral triangle and $A,B,C$ its altitude feet. In particular the excentral triangle is nondegenerate.
3. Its nine-point circle passes through the three noncollinear points $A,B,C$, and therefore is exactly the original circumcircle, with center $O$ and radius $R$.
4. The nine-point theorem says that this center is the midpoint of the excentral circumcenter $V$ and orthocenter $I$, and its radius is half the excentral circumradius. Hence $V=2O-I$ and the radius is $2R$.

**Self-assessment rubric**

- Justify each excentral altitude using perpendicular internal and external bisectors.
- Identify I as the intersection of those altitude lines.
- Use the three noncollinear altitude feet to identify the nine-point circle.
- Read off both the midpoint relation and doubled radius.

</details>
