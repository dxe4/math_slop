# Track a transferred total

*Easy · [Discrete mathematics](index.md)*

Two jars start with $3$ and $5$ balls. A move transfers one ball from a nonempty jar to the other with no creation or removal. What is the total after any finite number of moves?

```answer
{"answer":{"kind":"integer","expected":8,"checker_scope":"Checks only this authored compute-preserved-sum task. Does not certify unrestricted proof validity, general construction ability or full mastery of preserved invariants."}}
```

<details>
<summary>Hint 1</summary>

Compute the starting sum.

</details>

<details>
<summary>Hint 2</summary>

A transfer removes and adds one.

</details>

<details>
<summary>Worked solution</summary>

An invariant is preserved by every permitted move. A mismatch can rule out a target; matching an invariant alone may not prove reachability.

1. Initially the total is $3+5=8$.
2. Each move changes it by zero, so it remains $8$.

</details>
