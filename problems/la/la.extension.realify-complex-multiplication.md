# Represent multiplication by i as a real map

*Easy · [Linear algebra problems](index.md)*

All spaces are finite-dimensional over the stated field. On the real basis $(1,i)$ of $\mathbb C$, give the real matrix for the complex map $z\mapsto iz$.

```answer
{"answer":{"kind":"matrix","expected":[["0","-1"],["1","0"]],"checker_scope":"Only the requested exact finite answer is checked; explanatory reasoning is not automatically graded.","rows":2,"columns":2}}
```

<details>
<summary>Hint 1</summary>

Find the images of the two real basis vectors.

</details>

<details>
<summary>Hint 2</summary>

Those coordinate columns form the real matrix.

</details>

<details>
<summary>Worked solution</summary>

Convert a scalar action over one field into a matrix action over a smaller field.

1. The image of one is $i$, with real coordinates $(0,1)$.
2. The image of $i$ is minus one, with coordinates $(-1,0)$.
3. These are the columns of $\begin{pmatrix}0&-1\\1&0\end{pmatrix}$.

</details>
