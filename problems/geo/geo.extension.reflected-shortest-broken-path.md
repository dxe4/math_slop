# Locate a shortest reflected path

*Medium · [Geometry and trigonometry problems](index.md)*

$A=(1,3)$ and $B=(7,5)$. Let $X$ vary on the $x$-axis. Reflect $A$ across that axis and use a straight-line shortest-path argument to minimize $AX+XB$. Enter the $x$-coordinate of the minimizing point $X$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":13,"denominator":4},"checker_scope":"The exact requested finite result only; a correct entry does not certify a geometric argument or award reviewed evidence."}}
```

<details>
<summary>Hint 1</summary>

The reflection of $A$ is $(1,-3)$, whose distance to any $X$ on the axis equals $AX$.

</details>

<details>
<summary>Hint 2</summary>

Parametrize the segment from $(1,-3)$ to $(7,5)$ and set its vertical coordinate to zero.

</details>

<details>
<summary>Worked solution</summary>

Unfold the broken path by the supplied reflection.

1. Let $C=(1,-3)$. Reflection fixes every point $X$ on the axis, so $CX=AX$.
2. Triangle inequality gives $AX+XB=CX+XB\ge CB$, with equality when $X$ lies on segment $CB$.
3. Points of $CB$ are $(1+6t,-3+8t)$, $0\le t\le1$. The axis crossing has $t=3/8$.
4. Therefore $x=1+6(3/8)=13/4$; the parameter lies inside the segment, so equality is attained.

</details>
