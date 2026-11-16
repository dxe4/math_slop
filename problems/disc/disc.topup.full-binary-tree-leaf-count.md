# Follow the constructors of a rooted tree

*Medium · [Discrete mathematics](index.md)*

A finite full rooted binary tree is either one leaf or a root with an ordered pair of smaller full rooted binary trees. Prove that its leaf count L and internal-node count I satisfy $L=I+1$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and rubric reflection only; no automatic correctness verdict or automatic required objective slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Check the leaf constructor separately.

</details>

<details>
<summary>Hint 2</summary>

At an internal root, add the two child leaf counts but add one extra internal node for the root.

</details>

<details>
<summary>Model proof</summary>

The count identity is preserved by the recursive constructor.

1. A single leaf has L=1 and I=0, satisfying the claim.
2. For an internal root with child counts (L\_1,I\_1),(L\_2,I\_2), the structural hypotheses give L\_1=I\_1+1 and L\_2=I\_2+1.
3. The whole tree has $L=L_1+L_2=I_1+I_2+2$ and $I=1+I_1+I_2$, so L=I+1.
4. Every finite tree in the stated recursive class is covered by these constructor cases.

**Self-assessment rubric**

- Check both counts for the base object.
- Apply the property only to the two smaller child trees.
- Count the new internal root and derive the full-tree identity.

</details>
