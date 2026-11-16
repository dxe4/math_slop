# Count pairs lying in both coordinate orders

*Hard · [Set theory](index.md)*

Let $A=\{1,2,3\}$ and $B=\{2,3,4,5\}$. Find the number of elements of $(A\times B)\cap(B\times A)$.

```answer
{"answer":{"kind":"integer","expected":"4","checker_scope":"Exact declared finite result, ordered representation or selected statement only; no unrestricted set proof or new checkpoint objective is automatically certified."}}
```

<details>
<summary>Hint 1</summary>

A pair in both products must satisfy both first-coordinate conditions and both second-coordinate conditions.

</details>

<details>
<summary>Hint 2</summary>

Each coordinate therefore comes from the same intersection set.

</details>

<details>
<summary>Worked solution</summary>

Product membership is coordinatewise, so the two simultaneous products share a smaller square product.

1. A pair belongs to both products exactly when each coordinate lies in A cap B.
2. That intersection is {2,3}. The shared product is therefore {2,3} times {2,3}.
3. It has $2\cdot2=4$ ordered pairs.

</details>
