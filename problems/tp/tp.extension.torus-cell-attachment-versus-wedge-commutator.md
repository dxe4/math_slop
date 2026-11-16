# Use van Kampen to distinguish a torus from its one-skeleton

*Hard · [Topology problems](index.md)*

Give the torus its square CW structure with oriented one-cells a,b and attaching word $aba^{-1}b^{-1}$ for the two-cell. Prove $\pi_1(T^2)\cong\mathbb Z^2$, but that the same commutator is nontrivial in the one-skeleton $S^1\vee S^1$. Explain the needed van Kampen neighborhood replacement for the attaching disk.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic verdict, grade or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

Use a thickened one-skeleton and an open disk neighborhood so the attaching circle supplies the relation.

</details>

<details>
<summary>Hint 2</summary>

In the rose, the commutator is a nonempty reduced word in the free group.

</details>

<details>
<summary>Model proof</summary>

Attaching the two-cell imposes a normal relation that is absent in the graph.

1. The one-skeleton is a rose with fundamental group F(a,b). To apply van Kampen to the cell attachment, remove a small closed disk about the center of the two-cell to get an open neighborhood that retracts to the one-skeleton, and use an overlapping open disk around the center. Their intersection is an annulus, with connected choices of basepoint paths.
2. The annular generator maps to the boundary word aba⁻¹b⁻¹ in the first neighborhood and to the identity in the disk neighborhood. Van Kampen gives π₁(T²)=⟨a,b \| aba⁻¹b⁻¹=1⟩.
3. This relation says a and b commute. Sending a,b to the two standard generators of Z² and sending (m,n) back to aᵐbⁿ gives inverse homomorphisms. Thus the presented group is Z², with no additional torsion or relation.
4. In the rose itself the group is the free group on a,b, as follows by collapsing a spanning tree or by its Cayley-tree universal cover. The word aba⁻¹b⁻¹ is freely reduced and nonempty, so it is not the identity there. The disk, rather than exponent cancellation alone, kills it in the torus.

**Self-assessment rubric**

- Explains connected open neighborhoods and the annular intersection for the attachment.
- Obtains precisely the normal commutator relation.
- Constructs the isomorphism with Z² rather than merely asserting commutativity.
- Uses reduced free words or the tree cover to establish nontriviality before attaching the disk.

</details>
