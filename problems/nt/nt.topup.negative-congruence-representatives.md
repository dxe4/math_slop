# Enumerate a full bounded congruence class

*Medium · [Number theory](index.md)*

Find all integers x in $[-20,20]$ such that x is congruent to -17 modulo 9. Return a set.

```answer
{"answer":{"kind":"set","expected":["-17","-8","1","10","19"],"checker_scope":"Exact requested finite result, set or polynomial identity only. Worked number-theoretic reasoning is not automatically certified; no new same-version checkpoint objective is introduced."}}
```

<details>
<summary>Hint 1</summary>

Congruent numbers differ by an integer multiple of nine.

</details>

<details>
<summary>Hint 2</summary>

Extend in both directions until the interval bounds exclude the next candidate.

</details>

<details>
<summary>Worked solution</summary>

A signed representative describes the same arithmetic progression as its canonical residue.

1. All solutions have form $-17+9k$ for integer k.
2. Within the interval the permitted k are zero, one, two, three and four; the next lower value is -26 and the next higher is 28.
3. The answer is $\{-17,-8,1,10,19\}$.

</details>
