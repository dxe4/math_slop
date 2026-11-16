# Cyclic shift fixed subspace

*Medium · [Original Putnam-style training](index.md)*

Let $C:\mathbb R^4\to\mathbb R^4$ cyclically shift coordinates, $C(x_1,x_2,x_3,x_4)=(x_4,x_1,x_2,x_3)$. Find $\dim\ker(C^2-I)$.

```answer
{"answer":{"kind":"integer","expected":"2","checker_scope":"Only the exact bounded answer is checked; the argument and assumptions are not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

$C^2$ swaps positions two apart.

</details>

<details>
<summary>Hint 2</summary>

Write the coordinate equalities for a fixed vector.

</details>

<details>
<summary>Worked solution</summary>

Two coordinates are free, so the dimension is $2$.

1. $C^2(x_1,x_2,x_3,x_4)=(x_3,x_4,x_1,x_2)$.
2. Equality with the original vector imposes $x_1=x_3$ and $x_2=x_4$, with no other independent constraints.
3. Two coordinates are free, so the dimension is $2$.

</details>
