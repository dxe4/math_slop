# List the whole common-divisor set

*Easy · [Number theory](index.md)*

Return the set of all positive integers dividing both $24$ and $36$.

```answer
{"answer":{"kind":"finite_integer_set","expected":[1,2,3,4,6,12],"checker_scope":"Checks the entire requested finite set, ignoring order and duplicates; does not certify a written proof."}}
```

<details>
<summary>Hint 1</summary>

A candidate belongs only if it divides each of the two integers.

</details>

<details>
<summary>Hint 2</summary>

Include smaller common divisors as well as the greatest one.

</details>

<details>
<summary>Worked solution</summary>

The set of common divisors contains more information than its greatest member alone.

1. The positive divisors of $24$ are $\{1,2,3,4,6,8,12,24\}$; those of $36$ are $\{1,2,3,4,6,9,12,18,36\}$.
2. Their intersection is $\{1,2,3,4,6,12\}$; every listed integer divides both numbers.

</details>
