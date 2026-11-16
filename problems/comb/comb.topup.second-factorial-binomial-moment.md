# Double-count subsets with two ordered distinguished members

*Hard · [Combinatorics](index.md)*

For $n\ge2$, prove that the sum over k=0,...,n of k(k-1) binomial(n,k) equals n(n-1)2^(n-2). Use a counting argument.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Count a subset together with an ordered pair of distinct members of that subset.

</details>

<details>
<summary>Hint 2</summary>

Choose the distinguished pair first in the second count.

</details>

<details>
<summary>Model proof</summary>

A second factorial moment has a direct distinguished-pair interpretation.

1. For subsets of size k, choose the subset in binomial(n,k) ways and then its ordered distinct pair in k(k-1) ways; summing gives the left side.
2. Alternatively choose the ordered pair first in n(n-1) ways. Each of the remaining n-2 elements may independently be included or omitted.
3. This gives the right side and counts the same objects exactly once in both descriptions. At n=2 the remaining set is empty and has one subset, as required.

**Self-assessment rubric**

- Define the subset-plus-ordered-pair objects being counted.
- Derive the k-indexed count and handle the zero terms.
- Derive the second count including the empty remainder boundary.

</details>
