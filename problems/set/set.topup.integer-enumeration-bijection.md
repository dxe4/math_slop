# Prove a signed integer enumeration is a bijection

*Medium · [Set theory](index.md)*

Let $\mathbb N_0=\{0,1,2,\ldots\}$. Define e(0)=0, e(2k-1)=k and e(2k)=-k for every integer k&gt;=1. Prove e is a bijection from N\_0 to the integers.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

The index cases are disjoint and cover every nonnegative integer.

</details>

<details>
<summary>Hint 2</summary>

For each possible output sign, identify its unique index.

</details>

<details>
<summary>Model proof</summary>

Explicit inverse index rules prove both coverage and uniqueness.

1. Index zero gives output zero; positive odd indices give positive outputs and positive even indices give negative outputs, so the three output classes do not overlap.
2. For a positive integer k the unique index is 2k-1; for -k the unique index is 2k; zero has only index zero.
3. Every integer therefore has exactly one preimage, making e a bijection and an enumeration of all integers.

**Self-assessment rubric**

- Check the index cases partition the declared natural domain.
- Give a preimage index for zero and every positive or negative integer.
- Show the listed index is unique in every output class.

</details>
