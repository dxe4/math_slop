# Construct one complete Pascal row from the preceding row

*Medium · [Combinatorics](index.md)*

The binomial coefficients in row six are $1,6,15,20,15,6,1$, indexed from zero. Use Pascal addition and boundary values to return row seven as an ordered vector.

```answer
{"answer":{"kind":"vector","expected":["1","7","21","35","35","21","7","1"],"checker_scope":"Exact finite count, coefficient, set or declared representation only. Worked counting arguments and recurrence derivations are not automatically proof-checked; no new same-version required slot is introduced."}}
```

<details>
<summary>Hint 1</summary>

Each interior entry adds two neighboring entries from the supplied row.

</details>

<details>
<summary>Hint 2</summary>

Both new boundary entries are one.

</details>

<details>
<summary>Worked solution</summary>

Local Pascal sums determine the next row completely.

1. The first boundary is one, followed by sums $1+6=7$, $6+15=21$, $15+20=35$.
2. The remaining interior sums are $20+15=35$, $15+6=21$ and $6+1=7$.
3. Appending the final boundary one gives $(1,7,21,35,35,21,7,1)$.

</details>
