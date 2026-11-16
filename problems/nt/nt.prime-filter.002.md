# Identify every prime in a finite list

*Easy · [Number theory](index.md)*

Return every prime in the candidate set $\{2,9,11,15,17,21\}$. A prime is greater than $1$ and has no positive divisors other than $1$ and itself.

```answer
{"answer":{"kind":"finite_integer_set","expected":[2,11,17],"checker_scope":"Checks the entire requested finite set, ignoring order and duplicates; does not certify a written proof."}}
```

<details>
<summary>Hint 1</summary>

A single nontrivial factorization establishes that a candidate is composite.

</details>

<details>
<summary>Hint 2</summary>

For this short list, a complete divisor check or complete factor-pair check is enough.

</details>

<details>
<summary>Worked solution</summary>

Separate the existence of a composite witness from the need to rule out all nontrivial divisors for a prime.

1. The composites have witnesses $9 = 3 \times  3, 15 = 3 \times  5$ and $21 = 3 \times  7$.
2. The only factor pairs of $2,11,17$ are respectively $1 \times  2, 1 \times  11$ and $1 \times  17$.
3. Thus the prime set is $\{2,11,17\}$.

</details>
