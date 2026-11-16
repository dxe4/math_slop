# Split a subset between two populations

*Medium · [Combinatorics](index.md)*

For nonnegative integers $r,s,k$, prove $\binom{r+s}{k}=\sum_{i=0}^k\binom ri\binom{s}{k-i}$, with binomial coefficients interpreted as zero when the lower index is outside its usual range.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic correctness verdict, demonstration or checkpoint."}}
```

<details>
<summary>Hint 1</summary>

Take two disjoint finite sets of the indicated sizes.

</details>

<details>
<summary>Hint 2</summary>

Classify a chosen subset by how many of its elements come from the first population.

</details>

<details>
<summary>Model proof</summary>

A disjoint classification of subsets supplies the convolution identity.

1. Let $R,S$ be disjoint sets with sizes $r,s$. The number of $k$-element subsets of their union is $\binom{r+s}{k}$.
2. If such a subset contains exactly $i$ elements of $R$, its remaining $k-i$ elements come from $S$, giving $\binom ri\binom{s}{k-i}$ possibilities.
3. These classes are disjoint and exhaust all $k$-element subsets. Summing gives the identity, and impossible classes contribute zero by the stated convention.

**Self-assessment rubric**

- Choose disjoint populations with the specified sizes.
- Identify the independent choices in a fixed class.
- Justify summation using disjoint exhaustive classes and the boundary convention.

</details>
