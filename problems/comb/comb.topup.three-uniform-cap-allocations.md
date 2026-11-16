# Subtract cap violations with an impossible double overlap

*Medium · [Combinatorics](index.md)*

Count integer triples with $x+y+z=8$ and 0&lt;=x,y,z&lt;=4.

```answer
{"answer":{"kind":"integer","expected":"15","checker_scope":"Exact finite count, coefficient, set or declared representation only. Worked counting arguments and recurrence derivations are not automatically proof-checked; no new same-version required slot is introduced."}}
```

<details>
<summary>Hint 1</summary>

Count unrestricted nonnegative triples first.

</details>

<details>
<summary>Hint 2</summary>

A violation starts at five, so two simultaneous violations would already exceed the total.

</details>

<details>
<summary>Worked solution</summary>

The total bound makes the first inclusion-exclusion correction exact.

1. There are forty-five unrestricted nonnegative triples.
2. For a fixed coordinate at least five, subtracting five leaves total three across three variables, giving ten bad triples. There are three such coordinate events.
3. No two bad events overlap because their sum would be at least ten. The count is $45-30=15$.

</details>
