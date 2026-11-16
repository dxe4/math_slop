# Apply cap correction only to the constrained coordinates

*Medium · [Combinatorics](index.md)*

Count nonnegative triples satisfying $x+y+z=6$, x&lt;=3 and y&lt;=3, with no upper bound on z.

```answer
{"answer":{"kind":"integer","expected":"16","checker_scope":"Exact finite count, coefficient, set or declared representation only. Worked counting arguments and recurrence derivations are not automatically proof-checked; no new same-version required slot is introduced."}}
```

<details>
<summary>Hint 1</summary>

Only x and y have forbidden events.

</details>

<details>
<summary>Hint 2</summary>

Their simultaneous violation requires a total at least eight.

</details>

<details>
<summary>Worked solution</summary>

A partial cap applies inclusion-exclusion to fewer coordinates.

1. There are twenty-eight unrestricted nonnegative triples summing to six.
2. For each of x&gt;=4 and y&gt;=4, subtracting four leaves a nonnegative triple totaling two, giving six violations.
3. Their intersection is empty, so the result is $28-6-6=16$.

</details>
