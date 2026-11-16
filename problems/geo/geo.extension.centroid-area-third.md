# Recover an area around a centroid

*Medium · [Geometry and trigonometry problems](index.md)*

$G$ is the centroid of triangle $ABC$. The area of $BGC$ is $18$. Find the area of $ABC$.

```answer
{"answer":{"kind":"integer","expected":"54","checker_scope":"The exact requested finite result only; a correct entry does not certify a geometric argument or award reviewed evidence."}}
```

<details>
<summary>Hint 1</summary>

Let $D$ be the midpoint of $BC$ and use $DG/DA=1/3$.

</details>

<details>
<summary>Hint 2</summary>

Perpendicular heights above $BC$ scale by the same ratio along $DA$.

</details>

<details>
<summary>Worked solution</summary>

Convert the median ratio to an area ratio.

1. The centroid satisfies $DG=DA/3$.
2. Because $D$ lies on $BC$, the height from $G$ to $BC$ is one third the height from $A$.
3. The triangles share base $BC$, giving $[BGC]=[ABC]/3$.
4. Thus $[ABC]=54$.

</details>
