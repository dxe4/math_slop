# An exact trigonometric equation

*Medium · [Differential equations problems](index.md)*

For $(\cos x\cos y)\,dx-(\sin x\sin y)\,dy=0$, use a potential $F$ with $F(0,0)=0$. Find its level constant on the curve through $(\pi/2,\pi/3)$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":2},"checker_scope":"Requested bounded solution observation or polynomial representation only, with the stated tolerance where applicable; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Look for a product whose two partial derivatives match the coefficients.

</details>

<details>
<summary>Hint 2</summary>

Evaluate the normalized potential at the given trigonometric point.

</details>

<details>
<summary>Worked solution</summary>

The differential of a sine-cosine product matches both terms.

1. $F(x,y)=\sin x\cos y$ has $F_x=\cos x\cos y$ and $F_y=-\sin x\sin y$.
2. It also satisfies the zero normalization, so integral curves have $F=C$.
3. At the specified point, $C=1\cdot(1/2)=1/2$.

</details>
