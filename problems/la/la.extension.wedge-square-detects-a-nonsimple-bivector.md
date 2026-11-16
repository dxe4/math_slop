# Find a four-volume coefficient of a wedge square

*Medium · [Linear algebra problems](index.md)*

Work over $\mathbb R$ unless a scalar extension is explicitly stated; all coordinates are dimensionless. For $\omega=e_1\wedge e_2+e_3\wedge e_4$ in $\Lambda^2(\mathbb R^4)$, find the coefficient of $e_1\wedge e_2\wedge e_3\wedge e_4$ in $\omega\wedge\omega$.

```answer
{"answer":{"kind":"integer","expected":2,"checker_scope":"Only the requested bounded exact value or coordinate object is checked; proof correctness is not automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

The square of each individual simple coordinate wedge vanishes.

</details>

<details>
<summary>Hint 2</summary>

Exchanging two degree-two wedges introduces an even number of sign changes.

</details>

<details>
<summary>Worked solution</summary>

Even-degree exterior factors commute, so the cross terms add.

1. The repeated-factor terms vanish by alternation.
2. The two cross terms have the same positive orientation because moving two factors past two factors makes four transpositions.
3. They add to twice the standard four-volume wedge, giving coefficient two.

</details>
