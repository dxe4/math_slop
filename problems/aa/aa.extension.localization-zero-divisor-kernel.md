# Use the zero criterion before cancelling a ring element

*Easy · [Abstract algebra problems](index.md)*

In R=Z/6 localize at $S=\{1,3\}$. The rule is a/1=0 iff some s in S satisfies s\*a=0 in R. How many original residues a map to zero?

```answer
{"answer":{"kind":"integer","expected":3,"checker_scope":"Exact requested localized invariant only; no local-to-global theorem is automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

Multiplication by one adds no new zeros.

</details>

<details>
<summary>Hint 2</summary>

Test which residues are killed by three without cancelling it.

</details>

<details>
<summary>Worked solution</summary>

Localizing a zero divisor can collapse a nonzero ideal.

1. The factor s=1 kills only the zero residue.
2. The factor s=3 kills exactly the even residues0,2,4 modulo six.
3. The kernel therefore has three elements.

</details>
