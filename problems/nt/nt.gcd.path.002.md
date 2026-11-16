# Greatest common divisor: complete common divisor set

*Easy · [Number theory](index.md)*

Give all positive common divisors of $28$ and $42$.

```answer
{"answer":{"kind":"finite_integer_set","expected":[1,2,7,14],"checker_scope":"Checks the authored exact structured answer for this instance. Selection and proof scaffolds assess only the stated narrow task; no unrestricted proof validity is certified."}}
```

<details>
<summary>Hint 1</summary>

List the positive divisors of each input.

</details>

<details>
<summary>Hint 2</summary>

Keep their intersection, not just its greatest member.

</details>

<details>
<summary>Worked solution</summary>

The gcd is the largest member of the complete common-divisor set.

1. The divisor lists are $\{1,2,4,7,14,28\}$ and $\{1,2,3,6,7,14,21,42\}$.
2. Their intersection is $\{1,2,7,14\}$.

</details>
