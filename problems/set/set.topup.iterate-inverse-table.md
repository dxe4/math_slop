# Apply an inverse twice

*Hard · [Set theory](index.md)*

A permutation f of $\{1,2,3,4\}$ maps 1 to 3, 2 to 1, 3 to 4 and 4 to 2. Find $f^{-1}(f^{-1}(1))$.

```answer
{"answer":{"kind":"integer","expected":"4","checker_scope":"Exact declared bounded result, explicit interval description or selected statement only; no unrestricted mapping proof or new checkpoint objective is automatically certified."}}
```

<details>
<summary>Hint 1</summary>

An inverse value asks which input produced the requested output.

</details>

<details>
<summary>Hint 2</summary>

After the first inverse lookup, perform the same lookup again with the resulting value.

</details>

<details>
<summary>Worked solution</summary>

Inverse iteration follows the arrows backward twice.

1. The original input two maps to one, so f inverse of one is two.
2. The original input four maps to two, so f inverse of two is four.
3. Therefore the requested double inverse value is $4$.

</details>
