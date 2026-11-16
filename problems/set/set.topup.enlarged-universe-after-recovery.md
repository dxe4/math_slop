# Recover a set before changing its universe

*Hard · [Set theory](index.md)*

In $U=\{1,2,\ldots,6\}$ a set A has complement {2,5}. Enlarge the universe to $V=U\cup\{7,8\}$ while keeping A unchanged. Find its complement in V.

```answer
{"answer":{"kind":"set","expected":"{2, 5, 7, 8}","checker_scope":"Exact declared finite result, ordered representation or selected statement only; no unrestricted set proof or new checkpoint objective is automatically certified."}}
```

<details>
<summary>Hint 1</summary>

Only the universe changes; A does not gain the two new elements.

</details>

<details>
<summary>Hint 2</summary>

The old complement remains, and the added universe elements are also outside A.

</details>

<details>
<summary>Worked solution</summary>

Complements depend on the ambient set even when the original subset stays fixed.

1. In U, the set A is {1,3,4,6}.
2. In V, the new elements seven and eight are outside that unchanged A, as are the original complement elements two and five.
3. The new complement is $\{2,5,7,8\}$.

</details>
