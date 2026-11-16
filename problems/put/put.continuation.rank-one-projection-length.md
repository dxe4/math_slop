# Rank one projection length

*Medium · [Original Putnam-style training](index.md)*

Let $u=(3,4)$ and $v=(1,2)$ in $\mathbb R^2$. Find the squared norm of the orthogonal projection of $u$ onto $\operatorname{span}(v)$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":121,"denominator":5},"checker_scope":"Only the exact bounded answer is checked; the argument and assumptions are not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Projection coefficient is $(u\cdot v)/(v\cdot v)$.

</details>

<details>
<summary>Hint 2</summary>

Compute its squared norm without finding an orthogonal complement.

</details>

<details>
<summary>Worked solution</summary>

This simplifies to $121/5$.

1. $u\cdot v=3+8=11$ and $v\cdot v=1+4=5$.
2. The projection is $(11/5)v$, so its squared norm is $(11/5)^2(v\cdot v)$.
3. This simplifies to $121/5$.

</details>
