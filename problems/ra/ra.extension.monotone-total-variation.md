# Use telescoping to read the variation of a monotone function

*Easy · [Real analysis](index.md)*

A nondecreasing function on \[0,3\] has f(0)=-1 and f(3)=4. Its total variation is the supremum over partitions of $\sum |f(t_j)-f(t_{j-1})|$. Find that variation.

```answer
{"answer":{"kind":"integer","expected":5,"checker_scope":"Exact requested integral quantity or gap bound only; no general integrability proof is automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

All partition increments have the same nonnegative sign.

</details>

<details>
<summary>Hint 2</summary>

Their sum telescopes for every partition.

</details>

<details>
<summary>Worked solution</summary>

Monotonicity turns every variation sum into the endpoint difference.

1. Each increment f(t\_j)-f(t\_(j-1)) is nonnegative, so its absolute value equals the increment.
2. Summing over a partition gives f(3)-f(0)=4-(-1)=5.
3. Every partition gives five, so the supremum is five.

</details>
