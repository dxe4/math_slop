# Recover the second pocket count

*Easy · [Discrete mathematics](index.md)*

Two pockets start with $4$ and $7$ counters. Moves transfer one counter between pockets with no creation or loss. Later the first pocket holds $2$. How many must the second hold?

```answer
{"answer":{"kind":"integer","expected":9,"checker_scope":"Checks only this authored recover-state-from-sum task. Does not certify unrestricted proof validity, general construction ability or full mastery of preserved invariants."}}
```

<details>
<summary>Hint 1</summary>

The total stays fixed.

</details>

<details>
<summary>Hint 2</summary>

Subtract the later first count.

</details>

<details>
<summary>Worked solution</summary>

An invariant is preserved by every permitted move. A mismatch can rule out a target; matching an invariant alone may not prove reachability.

1. The total stays $11$.
2. The second count is $11-2=9$, attainable by two transfers from the first pocket.

</details>
