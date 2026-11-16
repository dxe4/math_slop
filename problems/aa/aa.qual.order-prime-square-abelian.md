# Complete the center argument for groups of prime-square order

*Medium · [Abstract algebra problems](index.md)*

Prove every group of order $p^2$, with p prime, is abelian. You may use that a finite nontrivial p-group has nontrivial center.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

The center has order p or p squared.

</details>

<details>
<summary>Hint 2</summary>

If the quotient by the center is cyclic, express every group element using one coset generator and a central factor.

</details>

<details>
<summary>Model proof</summary>

The only nontrivial center-size alternative also forces commuting representatives.

1. The center order is p or p squared by the given center theorem and Lagrange. If it is p squared, the conclusion is immediate.
2. If it is p, the quotient G/Z(G) has prime order and is cyclic. Choose g whose coset generates that quotient. Every element is g^i z with z central.
3. Two such elements commute because powers of g commute and all central factors commute with everything. Thus G is abelian in either case.

**Self-assessment rubric**

- Give the exhaustive center orders allowed by the hypotheses.
- Describe all elements using a representative of a quotient generator.
- Verify the resulting elements commute rather than assert the conclusion without proof.

</details>
