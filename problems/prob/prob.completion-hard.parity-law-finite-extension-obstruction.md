# Construct maximal finite independence without exchangeable extension

*Hard · [Probability problems](index.md)*

For every $n\ge3$, construct an exchangeable Bernoulli vector of length $n$ for which every $n-1$ coordinates are independent fair bits but all $n$ coordinates are dependent. Prove that its law cannot be the first $n$ coordinates of any exchangeable Bernoulli vector of length $n+1$. Distinguish finite exchangeability from infinite-mixture representations.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft with task-specific semantic rubric; no automatic correctness verdict or checkpoint evidence."}}
```

<details>
<summary>Hint 1</summary>

Impose one parity constraint on an otherwise uniform binary vector.

</details>

<details>
<summary>Hint 2</summary>

In an exchangeable extension the parity constraint must hold after deleting any one coordinate. Compare two deletions.

</details>

<details>
<summary>Model proof</summary>

A global parity constraint disappears from every proper marginal but blocks even a one-step exchangeable extension.

1. Take the uniform law on the $2^{n-1}$ binary strings with even coordinate sum. It is invariant under every coordinate permutation. After any $n-1$ coordinates are specified, exactly one final bit satisfies the parity constraint, so that marginal is uniform on all $2^{n-1}$ strings.
2. The whole vector is not a product of fair bits: odd-parity strings have probability zero rather than $2^{-n}$. Thus every indicated proper marginal is independent while the full vector is dependent.
3. Suppose an exchangeable extension $(Y_1,\ldots,Y_{n+1})$ existed. By exchangeability, the sum after deleting coordinate $j$ would be even almost surely for every $j$. Intersect these finitely many probability-one events. Subtracting two deletion sums modulo two shows that all $Y_j$ are equal.
4. Its first $n$ coordinates would then be supported only on constant strings. But the required even-parity law assigns positive probability to a string with exactly two ones, which is nonconstant for $n\ge3$. This contradiction rules out even a finite one-step exchangeable extension, and hence any infinite one.

**Self-assessment rubric**

- Establish exchangeability and every claimed independent proper marginal.
- Identify a full-vector event violating product probabilities.
- Use exchangeability of an extension to force simultaneous parity constraints and a contradiction.

</details>
