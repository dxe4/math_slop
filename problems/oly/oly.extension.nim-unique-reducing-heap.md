# Find the only heap reduction that restores zero xor

*Medium · [Original olympiad-style problems](index.md)*

In normal-play Nim, heaps have sizes $3,4,5$ in that index order. A move reduces exactly one heap, possibly to zero. Use the criterion that xor zero is losing. Return (heap\_index,new\_heap\_size) for the unique winning move.

```answer
{"answer":{"kind":"vector","expected":["1","1"],"checker_scope":"Exact requested finite count, sharp bound or declared move vector only. The full combinatorial argument is a worked model, not an automatically checked proof; this new skill changes no existing objective contract."}}
```

<details>
<summary>Hint 1</summary>

Compute the xor of all three sizes first.

</details>

<details>
<summary>Hint 2</summary>

For a heap h, the only zero-xor candidate is h xor that total, and it must be smaller than h.

</details>

<details>
<summary>Worked solution</summary>

The zero-xor condition determines a unique candidate value for each possible changed heap.

1. The total xor is two, since 3 xor 4 xor 5 equals two.
2. The three candidate replacements are 3 xor 2=1, 4 xor 2=6, and 5 xor 2=7. Only the first decreases its heap and is legal.
3. Thus the winning move changes heap one to size one, giving vector (1,1).

</details>
