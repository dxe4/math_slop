# Find a three-cevian central area

*Hard · [Geometry and trigonometry problems](index.md)*

In triangle $ABC$, choose $D\in BC$, $E\in CA$, $F\in AB$ with $BD/DC=CE/EA=AF/FB=2$. Let $P=AD\cap BE$, $Q=BE\cap CF$, $R=CF\cap AD$. Find $[PQR]/[ABC]$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":7},"checker_scope":"The exact requested finite result only; a correct entry does not certify a geometric argument or award reviewed evidence."}}
```

<details>
<summary>Hint 1</summary>

An invertible affine map lets you choose $A=(0,0)$, $B=(1,0)$, $C=(0,1)$ without changing area ratios.

</details>

<details>
<summary>Hint 2</summary>

The three side points are $(1/3,2/3)$, $(0,1/3)$, $(2/3,0)$. Solve the three line intersections.

</details>

<details>
<summary>Worked solution</summary>

Normalize the triangle and compute a central determinant.

1. Use the affine-normalized vertices in the first hint. The side ratios give $D=(1/3,2/3)$, $E=(0,1/3)$, $F=(2/3,0)$.
2. The cevian equations are $AD:y=2x$, $BE:y=(1-x)/3$, $CF:y=1-3x/2$.
3. Pairwise intersection gives $P=(1/7,2/7)$, $Q=(4/7,1/7)$, $R=(2/7,4/7)$.
4. The determinant of $Q-P=(3/7,-1/7)$ and $R-P=(1/7,2/7)$ is $7/49=1/7$. Thus $[PQR]=1/14$.
5. The normalized original triangle has area $1/2$, giving ratio $1/7$. Invertible affine maps multiply both areas by the same positive factor in magnitude.

</details>
