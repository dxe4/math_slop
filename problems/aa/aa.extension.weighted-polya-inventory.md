# Derive the full color-inventory orbit polynomial

*Hard · [Abstract algebra problems](index.md)*

A finite group G permutes a finite set of positions Omega. With k labeled colors, give each coloring weight x\_1^(n\_1)...x\_k^(n\_k). Prove the orbit inventory polynomial equals $|G|^{-1}\sum_{g\in G}\prod_{C\text{ cycle of }g}(x_1^{|C|}+\cdots+x_k^{|C|})$. Explain how coefficients impose exact color counts.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

A fixed coloring is constant on each cycle of g.

</details>

<details>
<summary>Hint 2</summary>

Double-count fixed colorings with their invariant weights, orbit by orbit.

</details>

<details>
<summary>Model proof</summary>

Weighted orbit counting retains all exact inventories rather than only the total number of orbits.

1. For fixed g, a coloring is fixed exactly when every permutation cycle is monochromatic. Choosing color j for a cycle C contributes x\_j^(\|C\|), so the product in the formula sums precisely the weights of all g-fixed colorings.
2. Sum these fixed-weight polynomials over g and reverse the finite count. Each coloring contributes its weight times the size of its stabilizer. Within an orbit the weight is constant, and orbit size times stabilizer size equals \|G\|, so that orbit contributes exactly \|G\| times its weight.
3. Dividing by \|G\| therefore gives one weight per orbit. The coefficient of x\_1^(n\_1)...x\_k^(n\_k) counts exactly the orbits having those labeled-color totals, since the group preserves every color count.

**Self-assessment rubric**

- Build the correct fixed-coloring polynomial using actual cycle lengths.
- Justify the finite sum reversal and the stabilizer factor.
- Relate the final monomials to exact labeled-color orbit counts.

</details>
