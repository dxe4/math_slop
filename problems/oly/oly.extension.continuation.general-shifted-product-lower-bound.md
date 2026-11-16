# Prove a product inequality by counting subset multiplicities

*Hard · [Original olympiad-style problems](index.md)*

For positive $x_1,\ldots,x_n$, let $g=(x_1\cdots x_n)^{1/n}$. Prove $\prod(1+x_i)\ge(1+g)^n$. For $n\ge2$, determine all equality cases.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict, contest correctness, graded evidence or checkpoint credit."}}
```

<details>
<summary>Hint 1</summary>

Expand the product into elementary symmetric sums.

</details>

<details>
<summary>Hint 2</summary>

For each subset size k, apply AM-GM to all k-fold products and count how often a fixed variable appears.

</details>

<details>
<summary>Model proof</summary>

Bound each homogeneous layer before summing the binomial expansion.

1. The degree-k symmetric sum contains $\binom nk$ positive products. Each variable appears in exactly $\binom{n-1}{k-1}$ of them.
2. Their geometric mean is therefore $(\prod x_i)^{k/n}=g^k$. AM-GM bounds that sum below by $\binom nk g^k$.
3. Summing over all k, including the constant and full-product layers, yields the binomial expansion of $(1+g)^n$.
4. For n at least two, equality in the degree-one layer requires every variable equal. That condition also makes every other layer an equality, so it is exactly the full equality case. For n one the identity is automatic.

**Self-assessment rubric**

- Identify every subset-product layer.
- Count each variable’s appearance and derive the correct geometric mean.
- Combine all layers with the binomial coefficients.
- Use one necessary layer and verify sufficiency, including n=1.

</details>
