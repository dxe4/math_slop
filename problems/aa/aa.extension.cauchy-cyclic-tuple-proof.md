# Find prime-order elements through rotating product-one tuples

*Hard · [Abstract algebra problems](index.md)*

Let a prime p divide the finite group order \|G\|. Prove G has an element of order p by letting a cyclic group of order p rotate tuples $(g_1,\ldots,g_p)$ whose product is the identity. Explain why rotation preserves this set even when G is nonabelian.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

A product-one tuple has its last entry determined by the preceding ones.

</details>

<details>
<summary>Hint 2</summary>

Fixed tuples are constant, while nonfixed cyclic orbits have size p.

</details>

<details>
<summary>Model proof</summary>

A modular orbit count forces a nonidentity pth root of the identity.

1. Let X be the product-one tuples. Its size is \|G\|^(p-1), divisible by p. Rotation preserves X: if g\_1\*...\*g\_p=e, then g\_2\*...\*g\_p\*g\_1=g\_1 inverse\*e\*g\_1=e.
2. The cyclic rotation action has orbits of size one or p. Hence the number of fixed tuples is congruent to \|X\| modulo p and is divisible by p.
3. Fixed tuples are exactly (g,...,g) with g^p=e. The identity tuple exists, so divisibility forces at least p such tuples and a nonidentity g with g^p=e. Its order is p because p is prime.

**Self-assessment rubric**

- Prove the tuple condition survives rotation without commuting the entries.
- Count the whole set and its possible orbit sizes.
- Use the identity fixed point and divisibility to obtain a nonidentity element.

</details>
