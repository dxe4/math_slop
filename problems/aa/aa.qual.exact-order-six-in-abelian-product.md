# Separate exact order from merely being killed by six

*Medium · [Abstract algebra problems](index.md)*

How many elements of $C_{12}\times C_{18}$ have order exactly 6?

```answer
{"answer":{"kind":"integer","expected":"24","checker_scope":"Exact requested finite invariant only. Graduate algebra reasoning, classification hypotheses and proofs are supplied for personal study and are not automatically certified. This new skill does not expand any existing objective contract."}}
```

<details>
<summary>Hint 1</summary>

First count the subgroup killed by six.

</details>

<details>
<summary>Hint 2</summary>

Remove the elements whose orders divide two or three, restoring their overlap.

</details>

<details>
<summary>Worked solution</summary>

A divisor-lattice correction converts annihilation counts into an exact-order count.

1. The number killed by six is gcd(12,6)gcd(18,6)=36.
2. The counts killed by three and two are nine and four; their intersection is the identity alone.
3. Thus exact order six occurs for 36-9-4+1=24 elements.

</details>
