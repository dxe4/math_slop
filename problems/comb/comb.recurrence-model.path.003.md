# Insert the newest object

*Medium · [Combinatorics](index.md)*

Let $c_{n}$ count orders of n distinct objects labeled $1$ through n. The newest object n can be inserted into an order of $n-1$ objects. Enter c0, multiplier\_at\_4 for c4=multiplier\_at\_4·c3, and c4.

```answer
{"answer":{"kind":"record_of_rationals","expected":{"c0":1,"multiplier_at_4":4,"c4":24},"checker_scope":"Exact finite structured answer for identify-insertion-multiplier-and-base; no independently authored proof or general proficiency claim."}}
```

<details>
<summary>Hint 1</summary>

There is one empty order.

</details>

<details>
<summary>Hint 2</summary>

An order of three objects has a gap before, between, or after its entries for object $4$.

</details>

<details>
<summary>Worked solution</summary>

A unique insertion operation gives a variable-coefficient recurrence.

1. An order of $n-1$ objects has n insertion gaps, giving $c_{n}=n$ $c_{n-1}$ for $n\geq 1$.
2. Thus c0=$1$, the multiplier at $n=4$ is $4$, and c4=$4\times 3\times 2\times 1=24$.

</details>
