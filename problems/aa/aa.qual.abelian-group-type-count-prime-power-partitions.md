# Count abelian isomorphism types using independent primary partitions

*Medium · [Abstract algebra problems](index.md)*

How many isomorphism classes of finite abelian groups have order $2^4 3^2$? Use the classification of finite abelian groups.

```answer
{"answer":{"kind":"integer","expected":"10","checker_scope":"Exact requested finite invariant only. Graduate algebra reasoning, classification hypotheses and proofs are supplied for personal study and are not automatically certified. This new skill does not expand any existing objective contract."}}
```

<details>
<summary>Hint 1</summary>

The two primary components can be classified independently.

</details>

<details>
<summary>Hint 2</summary>

List integer partitions of each prime exponent rather than partitions of the group order.

</details>

<details>
<summary>Worked solution</summary>

Primary decomposition reduces the type count to two finite partition counts.

1. The partitions of four are 4;3+1;2+2;2+1+1;1+1+1+1, giving five abelian two-primary types.
2. The partitions of two are 2 and 1+1, giving two three-primary types.
3. Unique primary decomposition makes all five times two products distinct, giving ten types.

</details>
