# Bisect an annulus by area

*Medium · [Geometry and trigonometry problems](index.md)*

An annulus has inner radius $3$ and outer radius $5$. A concentric circle of radius $r$, $3<r<5$, divides its area into two equal parts. Find $r^2$.

```answer
{"answer":{"kind":"integer","expected":"17","checker_scope":"The exact requested finite result only; a correct entry does not certify a geometric argument or award reviewed evidence."}}
```

<details>
<summary>Hint 1</summary>

The two ring areas are $\pi(r^2-9)$ and $\pi(25-r^2)$.

</details>

<details>
<summary>Hint 2</summary>

Equate those areas and cancel the common positive factor $\pi$.

</details>

<details>
<summary>Worked solution</summary>

Average squared radii rather than radii.

1. Equality gives $r^2-9=25-r^2$.
2. Thus $2r^2=34$ and $r^2=17$.
3. Since $9<17<25$, the required dividing radius lies strictly within the annulus.

</details>
