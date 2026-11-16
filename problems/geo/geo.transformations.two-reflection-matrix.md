# Represent a composition by a matrix

*Medium · [Geometry and trigonometry problems](index.md)*

First reflect across the x-axis, then across the line $y=x$. Find the matrix of the combined map acting on column vectors in coordinate order $(x,y)$.

<figure class="geometry"><svg viewBox="0 0 480 300" width="480" role="img" aria-label="The first mirror is the horizontal x-axis; the second mirror is the line y=x. Their composition acts on column vectors." style="max-width:100%;height:auto"><line x1="60" y1="150" x2="420" y2="150" stroke="currentColor" stroke-width="2"/><line x1="240" y1="270" x2="240" y2="30" stroke="currentColor" stroke-width="2"/><line x1="150" y1="240" x2="330" y2="60" stroke="currentColor" stroke-width="2"/><circle cx="240" cy="150" r="3" fill="currentColor"/><text x="247" y="142" fill="currentColor" font-size="16">O</text><circle cx="420" cy="150" r="3" fill="currentColor"/><text x="427" y="142" fill="currentColor" font-size="16">x</text><circle cx="240" cy="30" r="3" fill="currentColor"/><text x="247" y="22" fill="currentColor" font-size="16">y</text><text x="330" y="45" fill="currentColor" font-size="15">y=x</text></svg><figcaption>Schematic, not drawn to scale. Use the stated data rather than measuring the image.</figcaption></figure>

```answer
{"answer":{"kind":"matrix","rows":2,"columns":2,"expected":[["0","-1"],["1","0"]],"checker_scope":"Exact requested geometric value only; the supplied schematic is not a measurement tool and an exact value does not certify the explanatory argument."}}
```

<details>
<summary>Hint 1</summary>

Apply the two coordinate rules in the stated order.

</details>

<details>
<summary>Hint 2</summary>

The coefficients of the final x and y expressions form the matrix rows.

</details>

<details>
<summary>Worked solution</summary>

Two ordered reflections produce a rotation whose coordinate rule determines the matrix.

1. The first reflection sends $(x,y)$ to $(x,-y)$.
2. The second reflection swaps the current coordinates, giving $(-y,x)$.
3. The corresponding matrix is $\begin{pmatrix}0&-1\\1&0\end{pmatrix}$.

</details>
