# Locate a nine-point center and radius

*Medium · [Geometry and trigonometry problems](index.md)*

A triangle has circumcenter $O=(3,4)$, orthocenter $H=(0,0)$ and circumradius $R=5$. The nine-point center is the midpoint of $OH$, and its radius is $R/2$. Enter $[N_x,N_y,r_N]$.

```answer
{"answer":{"kind":"vector","expected":["3/2","2","5/2"],"checker_scope":"The exact requested finite result only; a correct entry does not certify a geometric argument or award reviewed evidence."}}
```

<details>
<summary>Hint 1</summary>

Average each coordinate of $O,H$.

</details>

<details>
<summary>Hint 2</summary>

The radius is half $R$, not half the distance $OH$.

</details>

<details>
<summary>Worked solution</summary>

Combine the two supplied nine-point relations.

1. The center is $N=((3+0)/2,(4+0)/2)=(3/2,2)$.
2. The radius is $R/2=5/2$.
3. The requested vector is $[3/2,2,5/2]$.

</details>
