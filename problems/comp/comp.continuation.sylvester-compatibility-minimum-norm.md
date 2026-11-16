# Resolve a singular matrix equation before choosing its least-norm solution

*Hard · [Computational arithmetic problems](index.md)*

Let $A=\begin{pmatrix}1&1\\0&1\end{pmatrix}$, $B=\begin{pmatrix}-1&0\\1&-1\end{pmatrix}$ and $C_\gamma=\begin{pmatrix}4&2\\\gamma&0\end{pmatrix}$. Find the value of $\gamma$ for which $AX+XB=C_\gamma$ is solvable. Among its solutions choose the one with minimum sum of squared entries. Return $[\gamma,x_{11},x_{12},x_{21},x_{22}]$.

```answer
{"answer":{"kind":"vector","expected":["2","0","2","2","2"],"checker_scope":"Only the requested exact finite algorithmic result is checked. No learner program is executed and no unrestricted written proof is automatically certified. This original draft is ineligible for checkpoint evidence pending independent human review."}}
```

<details>
<summary>Hint 1</summary>

Expand the linear map on the four unknown entries; a repeated constraint determines compatibility.

</details>

<details>
<summary>Hint 2</summary>

After imposing compatibility, minimise the quadratic norm over the remaining affine free variables.

</details>

<details>
<summary>Worked solution</summary>

A singular Sylvester operator requires compatibility and nullspace optimisation, not an inverse that does not exist.

1. Writing $X=\begin{pmatrix}x&y\\z&w\end{pmatrix}$ gives $AX+XB=\begin{pmatrix}y+z&w\\w&0\end{pmatrix}$.
2. Equality requires $w=2$, $\gamma=2$, and $y+z=4$, while $x$ is free. These conditions are also sufficient.
3. The squared norm is $x^2+y^2+z^2+4=x^2+12+(y-z)^2/2$, using the fixed sum $y+z=4$.
4. It is uniquely minimised by $x=0$, $y=z=2$, $w=2$. The requested vector is $[2,0,2,2,2]$.

</details>
