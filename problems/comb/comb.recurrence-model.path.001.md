# Unit and domino tilings

*Medium · [Combinatorics](index.md)*

Let $a_{n}$ count tilings of a row of n cells by tiles of lengths $1$ and $2$. For $n\geq 2$, write $a_{n}=p$ $a_{n-1}+q$ $a_{n-2}$. Enter p,q,a0,a1,a5.

```answer
{"answer":{"kind":"record_of_rationals","expected":{"p":1,"q":1,"a0":1,"a1":1,"a5":8},"checker_scope":"Exact recurrence coefficients, initial values and one term for this model; free derivation text is not proof-checked."}}
```

<details>
<summary>Hint 1</summary>

Classify a tiling by the length of its final tile.

</details>

<details>
<summary>Hint 2</summary>

The empty row has one tiling, and a one-cell row has one.

</details>

<details>
<summary>Worked solution</summary>

A reversible final-piece split yields a recurrence.

1. A final tile of length one leaves $a_{n-1}$ choices; length two leaves a\_(n−2), so $p=q=1$.
2. Starting with $1,1$ gives a2=$2$,a3=$3$,a4=$5$,a5=$8$.

</details>
