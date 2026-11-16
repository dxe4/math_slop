# Transfer finite size through a bijection

*Medium · [Set theory](index.md)*

A finite set A has $17$ elements. Its subset B satisfies \|A minus B\|=5. A bijection maps B to C, and D is obtained by removing two distinct elements from C. Find \|D\|.

```answer
{"answer":{"kind":"integer","expected":"10","checker_scope":"Exact declared bounded result, explicit interval description or selected statement only; no unrestricted mapping proof or new checkpoint objective is automatically certified."}}
```

<details>
<summary>Hint 1</summary>

First recover the size of B from its complement inside A.

</details>

<details>
<summary>Hint 2</summary>

A bijection preserves size, after which removing distinct elements lowers the size by their count.

</details>

<details>
<summary>Worked solution</summary>

Finite cardinality transfers through one-to-one correspondence and disjoint removal.

1. Since B is a subset of A, its size is $17-5=12$.
2. The bijection gives \|C\|=12.
3. Removing two distinct members gives $|D|=12-2=10$.

</details>
