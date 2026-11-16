# A quotient of a discrete finite space

*Medium · [Topology problems](index.md)*

The discrete space $X=\{1,2,3,4\}$ is partitioned into classes $\{1,2\}$ and $\{3,4\}$. How many open sets does its quotient topology have?

```answer
{"answer":{"kind":"integer","expected":4,"checker_scope":"Exact finite set, interval, distance or count requested in the stated topology only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

A quotient subset is open exactly when its full preimage is open.

</details>

<details>
<summary>Hint 2</summary>

Every subset of the original discrete space is open.

</details>

<details>
<summary>Worked solution</summary>

Every subset of the quotient passes the defining preimage criterion.

1. The quotient has two points, one for each class.
2. The preimage of any quotient subset is a subset of a discrete space, so it is open. Thus the quotient is itself discrete.
3. A two-point discrete space has $2^2=4$ open sets.

</details>
