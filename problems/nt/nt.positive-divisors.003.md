# List all positive divisors

*Easy · [Number theory](index.md)*

Give the set of all positive integers that divide $18$.

```answer
{"answer":{"kind":"finite_integer_set","expected":[1,2,3,6,9,18],"checker_scope":"Checks the entire requested finite set, ignoring order and duplicates; does not certify a written proof."}}
```

<details>
<summary>Hint 1</summary>

Divisors come in pairs whose product is $18$.

</details>

<details>
<summary>Hint 2</summary>

Try positive integers no larger than $18$, recording each successful exact division.

</details>

<details>
<summary>Worked solution</summary>

A complete divisor list includes both members of every factor pair.

1. The factor pairs are $1 \times  18, 2 \times  9$ and $3 \times  6$.
2. These pairs give $\{1,2,3,6,9,18\}$. Every positive divisor occurs in one of the listed factor pairs.

</details>
