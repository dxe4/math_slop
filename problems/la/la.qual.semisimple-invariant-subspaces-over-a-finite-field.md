# Count a semisimple invariant-subspace lattice

*Medium · [Linear algebra problems](index.md)*

Over $\mathbb F_2$, let $T=\operatorname{diag}(0,0,1)$ on dimension three. How many T-invariant linear subspaces exist, including zero and the whole space?

```answer
{"answer":{"kind":"integer","expected":10,"checker_scope":"Only the requested exact invariant or rational coordinate object is checked. Canonical-form reasoning and graduate preparation are not automatically certified."}}
```

<details>
<summary>Hint 1</summary>

Because T is a projection, an invariant subspace splits into its intersections with the zero- and one-eigenspaces.

</details>

<details>
<summary>Hint 2</summary>

Count all subspaces of the two-dimensional binary zero-eigenspace, then make the independent choice in the one-dimensional eigenspace.

</details>

<details>
<summary>Worked solution</summary>

Semisimple invariant subspaces form a product of two subspace lattices.

1. For a T-invariant U, both $TU$ and $(I-T)U$ lie in U, giving $U=(U\cap E_0)\oplus(U\cap E_1)$. Conversely any such sum is invariant.
2. The binary plane $E_0$ has five subspaces: zero, three lines and the whole plane.
3. The line $E_1$ has two subspaces. Their independent choices give $5\cdot2=10$ invariant subspaces.

</details>
