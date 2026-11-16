# Count homomorphisms by allowed generator images

*Medium · [Abstract algebra problems](index.md)*

How many group homomorphisms $C_{12}\times C_{18}\to C_{24}$ exist? The domain and target groups are fixed, and maps are counted individually.

```answer
{"answer":{"kind":"integer","expected":"72","checker_scope":"Exact requested finite invariant only. Graduate algebra reasoning, classification hypotheses and proofs are supplied for personal study and are not automatically certified. This new skill does not expand any existing objective contract."}}
```

<details>
<summary>Hint 1</summary>

Each cyclic generator image is killed by its own order.

</details>

<details>
<summary>Hint 2</summary>

In a cyclic group of order n, the number of elements killed by m is gcd(m,n).

</details>

<details>
<summary>Worked solution</summary>

Independent generator images determine every homomorphism from a finite abelian product.

1. The first generator can map to any element of C24 killed by twelve, giving twelve choices.
2. The second generator can map to any element killed by eighteen, giving six choices. The target is abelian, so these image choices automatically commute.
3. Every such pair extends uniquely to a homomorphism, giving seventy-two maps.

</details>
