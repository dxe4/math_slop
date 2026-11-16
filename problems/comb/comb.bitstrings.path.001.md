# Read the included positions

*Easy · [Combinatorics](index.md)*

Use universe $(1,2,3,4,5)$ in that order. A $1$ means included and a $0$ means excluded. Which subset is encoded by $10101$? Enter its elements as a set.

```answer
{"answer":{"kind":"finite_integer_set","expected":[1,3,5],"checker_scope":"Exact finite word-to-subset translation."}}
```

<details>
<summary>Hint 1</summary>

Read positions from left to right.

</details>

<details>
<summary>Hint 2</summary>

The $1$ positions, rather than the bit values themselves, name the included elements.

</details>

<details>
<summary>Worked solution</summary>

The membership word is inverted by reading its included positions.

1. Positions $1,3,5$ contain $1$.
2. The encoded subset is $\{1,3,5\}$.

</details>
