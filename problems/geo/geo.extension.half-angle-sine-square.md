# Find a squared half-angle sine

*Medium · [Geometry and trigonometry problems](index.md)*

$0<\theta<\pi$ and $\cos\theta=3/5$. Find $\sin^2(\theta/2)$ as a rational number.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":5},"checker_scope":"The exact requested finite result only; a correct entry does not certify a geometric argument or award reviewed evidence."}}
```

<details>
<summary>Hint 1</summary>

Rearrange $\cos\theta=1-2\sin^2(\theta/2)$.

</details>

<details>
<summary>Hint 2</summary>

Substitute before dividing by two.

</details>

<details>
<summary>Worked solution</summary>

Use the double-angle identity in reverse.

1. The identity gives $\sin^2(\theta/2)=(1-\cos\theta)/2$.
2. Substitution gives $(1-3/5)/2=(2/5)/2$.
3. Thus the square is $1/5$; no square-root sign choice is requested.

</details>
