# Separate double cosets from ordinary left cosets

*Medium · [Abstract algebra problems](index.md)*

In S3 let H=&lt;(12)&gt;. Find the number of double cosets $H\backslash S_3/H$, whose members have form H\*g\*H.

```answer
{"answer":{"kind":"integer","expected":2,"checker_scope":"Exact requested finite action quantity only; no general action proof is automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

One double coset is H itself.

</details>

<details>
<summary>Hint 2</summary>

Compute H\*(13)\*H and compare its size with the remaining elements.

</details>

<details>
<summary>Worked solution</summary>

A double action can merge ordinary cosets.

1. The double coset of the identity is H={e,(12)}, of size two.
2. The double coset H\*(13)\*H consists of (13),(132),(123),(23), four distinct elements obtained by the two independent choices in H.
3. These two disjoint sets exhaust all six permutations, so there are two double cosets.

</details>
