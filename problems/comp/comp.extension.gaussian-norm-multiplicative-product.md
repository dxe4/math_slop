# Compute a product norm without expanding the product itself

*Easy · [Computational arithmetic problems](index.md)*

Use the multiplicativity of the Gaussian norm $N(a+bi)=a^2+b^2$ to find N((3+2i)(1-4i)).

```answer
{"answer":{"kind":"integer","expected":"221","checker_scope":"Exact requested integer, rational or finite coefficient vector only. The stated theorem or model is part of the supplied mathematics; no learner program or unrestricted proof is run or certified. This new skill does not expand an existing objective contract."}}
```

<details>
<summary>Hint 1</summary>

Evaluate each factor norm separately.

</details>

<details>
<summary>Hint 2</summary>

Multiply the norms, retaining the squared imaginary coefficient regardless of its sign.

</details>

<details>
<summary>Worked solution</summary>

Norm multiplicativity replaces a complex product calculation by two small integer sums.

1. The first factor norm is nine plus four, or thirteen.
2. The second is one plus sixteen, or seventeen.
3. Their product is 221, the norm of the Gaussian product.

</details>
