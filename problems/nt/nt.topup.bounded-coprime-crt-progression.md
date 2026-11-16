# Enumerate simultaneous congruences in a finite interval

*Medium · [Number theory](index.md)*

Find all x in $[0,40]$ with x congruent to 2 modulo 3 and 1 modulo 4. Return a set.

```answer
{"answer":{"kind":"set","expected":["5","17","29"],"checker_scope":"Exact requested finite result, set or polynomial identity only. Worked number-theoretic reasoning is not automatically certified; no new same-version checkpoint objective is introduced."}}
```

<details>
<summary>Hint 1</summary>

Try the four possible classes congruent to one modulo four within one period twelve.

</details>

<details>
<summary>Hint 2</summary>

Repeat the resulting simultaneous class by the combined period.

</details>

<details>
<summary>Worked solution</summary>

The canonical CRT class extends to a bounded arithmetic progression.

1. Among 1,5,9 modulo twelve, only five is congruent to two modulo three.
2. Thus all solutions are $5+12k$ for integer k.
3. The interval contains five, seventeen and twenty-nine; the next value forty-one is excluded.

</details>
