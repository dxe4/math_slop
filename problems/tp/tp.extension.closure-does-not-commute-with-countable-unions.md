# Find the missing point in a countable closure comparison

*Medium · [Topology problems](index.md)*

In the usual real line put $A_n=[1/n,1]$ for $n\ge1$. Find $\overline{\bigcup_n A_n}\setminus\bigcup_n\overline{A_n}$ as a point set.

```answer
{"answer":{"kind":"set","expected":["0"],"checker_scope":"Only the requested finite set, interval or count in the stated topology is checked; a personal argument is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Each individual set is closed.

</details>

<details>
<summary>Hint 2</summary>

Compute the full increasing union before taking its closure.

</details>

<details>
<summary>Worked solution</summary>

Finite-union closure identities do not imply countable-union equality.

1. Each individual closure is $A_n$, and their union is $(0,1]$.
2. The closure of that union is $[0,1]$, because positive inputs approach zero.
3. The difference between the two sides is exactly the singleton zero.

</details>
