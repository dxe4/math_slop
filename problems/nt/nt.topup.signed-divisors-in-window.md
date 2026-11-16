# Include negative divisors in a bounded set

*Medium · [Number theory](index.md)*

Find all nonzero integers d with $-5\le d\le5$ such that d divides -18. Return a set.

```answer
{"answer":{"kind":"set","expected":["-3","-2","-1","1","2","3"],"checker_scope":"Exact requested finite result, set or polynomial identity only. Worked number-theoretic reasoning is not automatically certified; no new same-version checkpoint objective is introduced."}}
```

<details>
<summary>Hint 1</summary>

The positive divisors of eighteen occur with negative partners.

</details>

<details>
<summary>Hint 2</summary>

Apply the bound after listing candidate factors.

</details>

<details>
<summary>Worked solution</summary>

Divisibility permits signed integer witnesses.

1. The positive divisors of eighteen are one, two, three, six, nine and eighteen.
2. Only one, two and three meet the absolute bound five.
3. Their negatives also divide negative eighteen, giving the six stated signed divisors.

</details>
