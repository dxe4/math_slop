# Compute a derived torsion group using a two-term free resolution

*Medium · [Abstract algebra problems](index.md)*

Find the number of elements of $\operatorname{Tor}_1^{\mathbb Z}(\mathbb Z/12,\mathbb Z/18)$ by tensoring a free resolution of Z/12.

```answer
{"answer":{"kind":"integer","expected":"6","checker_scope":"Exact requested finite invariant only. Graduate algebra reasoning, classification hypotheses and proofs are supplied for personal study and are not automatically certified. This new skill does not expand any existing objective contract."}}
```

<details>
<summary>Hint 1</summary>

Use the resolution with multiplication by twelve between two copies of Z.

</details>

<details>
<summary>Hint 2</summary>

The first homology after tensoring is the kernel, not the cokernel, of the induced multiplication map.

</details>

<details>
<summary>Worked solution</summary>

A derived tensor invariant is computed from a resolution rather than assumed identical to an ordinary tensor.

1. Use the exact free resolution 0 to Z, multiplication by twelve to Z, then to Z/12 and to zero.
2. Tensoring with Z/18 gives the map multiplication by twelve from Z/18 to itself; Tor\_1 is its kernel.
3. The kernel consists of residues 0,3,6,9,12,15, so it has six elements. This computation uses first homology, even though its cardinality agrees with the ordinary tensor in this cyclic example.

</details>
