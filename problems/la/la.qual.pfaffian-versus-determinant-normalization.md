# Compute a four-dimensional Pfaffian with fixed order

*Medium · [Linear algebra problems](index.md)*

For $G=\begin{pmatrix}0&1&0&0\\-1&0&0&0\\0&0&0&2\\0&0&-2&0\end{pmatrix}$ over $\mathbb R$, return {pfaffian, determinant}. Use $\operatorname{Pf}G=g_{12}g_{34}-g_{13}g_{24}+g_{14}g_{23}$ in this coordinate order.

```answer
{"answer":{"kind":"record_of_rationals","expected":{"pfaffian":"2","determinant":"4"},"checker_scope":"Only the requested finite invariant or rational coordinate result is checked; form classification and reasoning are not automatically certified."}}
```

<details>
<summary>Hint 1</summary>

Only one of the three Pfaffian products survives.

</details>

<details>
<summary>Hint 2</summary>

The determinant can also be checked as the product of the two skew two-by-two block determinants.

</details>

<details>
<summary>Worked solution</summary>

A Pfaffian retains an orientation sign while its square gives the determinant.

1. The specified Pfaffian is $1\cdot2=2$.
2. The diagonal skew blocks have determinants one and four, so the whole determinant is four.
3. This agrees with $(\operatorname{Pf}G)^2$. The top exterior square coefficient would include an extra factor two and is not the Pfaffian itself.

</details>
