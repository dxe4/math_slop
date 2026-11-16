# Count all linear lifts through a quotient

*Medium · [Linear algebra problems](index.md)*

Work over $\mathbb F_2$, using arithmetic modulo two. Let $q:\mathbb F_2^3\to\mathbb F_2^2$ be $q(x,y,z)=(y,z)$. How many linear maps $L:\mathbb F_2^2\to\mathbb F_2^3$ satisfy $qL=I_2$?

```answer
{"answer":{"kind":"integer","expected":4,"checker_scope":"Only the requested exact finite object is checked; the derivation does not receive an automatic proof verdict."}}
```

<details>
<summary>Hint 1</summary>

The last two rows of the matrix of L are prescribed by the identity.

</details>

<details>
<summary>Hint 2</summary>

The first coordinate of the image of each input basis vector remains a free binary choice.

</details>

<details>
<summary>Worked solution</summary>

The space of lifts is an affine space of kernel-valued maps.

1. The two columns of $L$ must be $(a,1,0)$ and $(b,0,1)$.
2. There are no other restrictions on $a,b\in\mathbb F_2$, because the quotient forgets that coordinate.
3. The two independent binary choices give four lifts.

</details>
