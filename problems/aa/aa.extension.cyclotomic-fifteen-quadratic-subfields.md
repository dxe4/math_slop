# Count quadratic characters of a cyclotomic group

*Easy · [Abstract algebra problems](index.md)*

The Galois group of $\mathbf Q(\zeta_{15})/\mathbf Q$ is isomorphic to $C_4\times C_2$. How many quadratic intermediate fields are there?

```answer
{"answer":{"kind":"integer","expected":3,"checker_scope":"Only the requested exact invariant is checked; no written proof is automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

Quadratic fields correspond to subgroups of index two.

</details>

<details>
<summary>Hint 2</summary>

Each such subgroup is the kernel of a nonzero homomorphism to $C_2$.

</details>

<details>
<summary>Worked solution</summary>

Characters to a two-element group encode all index-two subgroups.

1. A homomorphism $C_4\times C_2\to C_2$ is determined by two binary images.
2. There are $4$ such homomorphisms, of which one is zero.
3. Each of the three nonzero maps is surjective and has a distinct index-two kernel.

</details>
