# Prove exactly when a product stays strictly positive

*Medium · [Real analysis](index.md)*

Let 0&lt;=a\_n&lt;=1/2. Prove $\prod_{n=1}^{\infty}(1-a_n)$ has a strictly positive limit if and only if sum a\_n converges. If the sum diverges, determine the product limit.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Compare log(1-a) with -a and -2a on the specified interval.

</details>

<details>
<summary>Hint 2</summary>

Finite partial products are positive and nonincreasing.

</details>

<details>
<summary>Model proof</summary>

Logarithmic comparison distinguishes a positive product from collapse to zero.

1. For 0&lt;=a&lt;=1/2, integrate 1/(1-s) between zero and a to get a&lt;=-log(1-a)&lt;=2a. Thus -2a&lt;=log(1-a)&lt;=-a.
2. If sum a\_n converges, the negative logarithmic series converges to a finite value by comparison, so the partial products tend to its positive exponential.
3. If sum a\_n diverges, the logarithmic partial sums tend to negative infinity by the upper bound -sum a\_n. Thus the products tend to zero. Their monotonicity ensures this is their actual limit.

**Self-assessment rubric**

- Derive both comparison inequalities on the entire allowed interval.
- Use finite logarithmic sum to obtain a nonzero product.
- Show divergent mass forces product collapse, without an unjustified log of zero.

</details>
