# Compose two parallel reflections

*Medium · [Geometry and trigonometry problems](index.md)*

Reflect first in $x=1$ and then in $x=4$. The composition is a translation. Enter its displacement vector.

```answer
{"answer":{"kind":"vector","expected":["6","0"],"checker_scope":"The exact requested finite result only; a correct entry does not certify a geometric argument or award reviewed evidence."}}
```

<details>
<summary>Hint 1</summary>

Reflection in $x=c$ sends $(x,y)$ to $(2c-x,y)$.

</details>

<details>
<summary>Hint 2</summary>

Apply the second formula to the first image before simplifying.

</details>

<details>
<summary>Worked solution</summary>

Compute the ordered composition on a general point.

1. The first image is $(2-x,y)$.
2. The second is $(8-(2-x),y)=(x+6,y)$.
3. The net displacement is therefore $[6,0]$. Reversing the reflection order would reverse this displacement.

</details>
