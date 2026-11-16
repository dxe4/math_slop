# Find the limit count in an uncountable complement topology

*Medium · [Topology problems](index.md)*

Give $\mathbb R$ the cocountable topology: a nonempty open set has countable complement. How many points are limits of the sequence $x_n=1/n$?

```answer
{"answer":{"kind":"integer","expected":0,"checker_scope":"Only the requested finite set, interval or count in the stated topology is checked; a personal argument is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

For each proposed limit x, remove every sequence value other than x.

</details>

<details>
<summary>Hint 2</summary>

That complement is countable, so the resulting neighborhood is permitted.

</details>

<details>
<summary>Worked solution</summary>

A countable exceptional set can exclude every tail at once.

1. For any proposed limit x, the set $U_x=\mathbb R\setminus(\{1/n:n\ge1\}\setminus\{x\})$ is an open neighborhood of x.
2. The sequence has distinct terms and at most one lies in $U_x$.
3. It is therefore not eventually inside that neighborhood. No x is a limit, so the number is zero.

</details>
