# Measure separation of parallel space lines

*Medium · [Geometry and trigonometry problems](index.md)*

Two lines are $L_1=t(1,1,0)$ and $L_2=(0,2,3)+s(1,1,0)$, with real parameters. Find their squared minimum distance.

```answer
{"answer":{"kind":"integer","expected":"11","checker_scope":"The exact requested finite result only; a correct entry does not certify a geometric argument or award reviewed evidence."}}
```

<details>
<summary>Hint 1</summary>

Remove from $(0,2,3)$ its component along the common direction.

</details>

<details>
<summary>Hint 2</summary>

The residual perpendicular vector gives the shortest connecting displacement.

</details>

<details>
<summary>Worked solution</summary>

Project the offset perpendicular to the common direction.

1. The common direction is $d=(1,1,0)$ with squared norm $2$. The offset dot product with it is $2$.
2. The parallel component of the offset is therefore $(2/2)d=(1,1,0)$. The perpendicular component is $(-1,1,3)$.
3. Its squared norm is $1+1+9=11$. Any other connecting displacement adds a parallel component orthogonal to it, so cannot lower the squared length.

</details>
