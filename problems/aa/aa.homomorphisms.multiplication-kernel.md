# Find a multiplication-map kernel

*Medium · [Abstract algebra problems](index.md)*

For the additive homomorphism $\varphi:\mathbb Z/20\mathbb Z\to\mathbb Z/20\mathbb Z$ given by $\varphi(x)=4x$, list the kernel using canonical residues.

```answer
{"answer":{"kind":"set","expected":[0,5,10,15],"checker_scope":"Exact stated finite group, polynomial or field answer only; optional personal reasoning is not graded."}}
```

<details>
<summary>Hint 1</summary>

The kernel contains exactly the elements mapped to the identity of the additive codomain.

</details>

<details>
<summary>Hint 2</summary>

Reduce the divisibility condition before listing the representatives.

</details>

<details>
<summary>Worked solution</summary>

Solve the homogeneous congruence defining the kernel.

1. The condition is $4x\equiv0\pmod{20}$, or $20\mid4x$.
2. This is equivalent to $5\mid x$.
3. The canonical kernel representatives are $\{0,5,10,15\}$.

</details>
