# Compose a covector with a rectangular map

*Easy · [Linear algebra problems](index.md)*

Work over $\mathbb R$. Coordinates are dimensionless and ordered as stated. Let $T(x,y)=(x+y,x-y,2y)$ and $\phi(u,v,w)=u+w$. Write $\phi\circ T=ax+by$ and return $[a,b]$.

```answer
{"answer":{"kind":"vector","expected":["1","3"],"checker_scope":"Only the requested exact finite answer is checked; explanatory reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

The functional reads the first and third output coordinates of $T$.

</details>

<details>
<summary>Hint 2</summary>

Collect the coefficients of the original two inputs.

</details>

<details>
<summary>Worked solution</summary>

A dual map pulls an output functional back to the input space.

1. Substitution gives $(\phi\circ T)(x,y)=(x+y)+2y$.
2. This simplifies to $x+3y$.
3. The input covector therefore has coefficients $[1,3]$, despite the three-dimensional output of $T$.

</details>
