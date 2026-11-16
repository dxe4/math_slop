# Sum distinct semiprimes by a symmetric identity

*Hard · [Computational arithmetic problems](index.md)*

Let $A$ be the set of integers that are the product of two primes from $\{2,3,5,7,11,13\}$, allowing a prime to be used twice. Find $\sum_{n\in A}n$, counting each integer once.

```answer
{"answer":{"kind":"integer","expected":"1029","checker_scope":"Exact requested integer or rational only; no learner program or unrestricted proof is executed or certified."}}
```

<details>
<summary>Hint 1</summary>

Unique factorization makes unordered prime pairs correspond to distinct products.

</details>

<details>
<summary>Hint 2</summary>

Square the sum of the six primes, then correct for how often unequal pairs are counted.

</details>

<details>
<summary>Worked solution</summary>

A symmetric square identity sums all unordered products, including diagonal squares.

1. Unique factorization makes each allowed semiprime correspond to exactly one unordered pair of the listed primes.
2. The prime sum is $41$ and their squared sum is $377$. The unordered-product sum, including repeats, is $[(41)^2+377]/2$.
3. This equals $(1681+377)/2=1029$.

</details>
