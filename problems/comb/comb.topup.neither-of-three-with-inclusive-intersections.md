# Compute a complement from three inclusive intersections

*Medium · [Combinatorics](index.md)*

In a universe of $100$ objects, \|A\|=40, \|B\|=35, \|C\|=30, \|A intersection B\|=15, \|A intersection C\|=12, \|B intersection C\|=10, and \|A intersection B intersection C\|=5. Pairwise counts include the triple intersection. How many objects belong to none of A,B,C?

```answer
{"answer":{"kind":"integer","expected":"27","checker_scope":"Exact finite count, coefficient, set or declared representation only. Worked counting arguments and recurrence derivations are not automatically proof-checked; no new same-version required slot is introduced."}}
```

<details>
<summary>Hint 1</summary>

Compute the union before subtracting it from the universe.

</details>

<details>
<summary>Hint 2</summary>

The triple intersection is added back once after all pairwise subtractions.

</details>

<details>
<summary>Worked solution</summary>

Inclusive intersection data fit the three-set union identity.

1. The single-set total is 105, and the pairwise-intersection total is thirty-seven.
2. Thus the union size is $105-37+5=73$.
3. The number in none is $100-73=27$.

</details>
