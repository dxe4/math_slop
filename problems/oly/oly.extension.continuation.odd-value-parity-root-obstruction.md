# Exclude integer roots from two parity samples

*Medium · [Original olympiad-style problems](index.md)*

An integer-coefficient polynomial has odd values at $0$ and $1$. How many integer roots can it have?

```answer
{"answer":{"kind":"integer","expected":"0","checker_scope":"Exact finite result only; a correct entry does not certify the accompanying argument or a contest performance."}}
```

<details>
<summary>Hint 1</summary>

Modulo two, every even input behaves like zero and every odd input like one.

</details>

<details>
<summary>Hint 2</summary>

Both residue classes therefore give odd values.

</details>

<details>
<summary>Worked solution</summary>

Use polynomial congruence on every integer residue class.

1. For an even integer input, every nonconstant monomial is even, so its value is congruent to the odd constant value at zero.
2. For an odd integer input, each power is one modulo two, so its value is congruent to the odd value at one.
3. Every integer value is therefore odd and cannot be zero. The number of integer roots is zero.

</details>
