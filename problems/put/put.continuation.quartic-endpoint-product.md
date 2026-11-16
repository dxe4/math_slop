# Quartic endpoint product

*Medium · [Original Putnam-style training](index.md)*

Find the maximum of $x^2(1-x)^2$ for $0\le x\le1$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":16},"checker_scope":"Only the exact bounded answer is checked; the argument and assumptions are not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Rewrite it as $[x(1-x)]^2$.

</details>

<details>
<summary>Hint 2</summary>

The inner quadratic has its maximum at the midpoint.

</details>

<details>
<summary>Worked solution</summary>

At $x=1/2$ equality holds, and the maximum is $1/16$.

1. Completing the square gives $x(1-x)=1/4-(x-1/2)^2\le1/4$.
2. The quantity is nonnegative on $[0,1]$, so squaring preserves the upper bound.
3. At $x=1/2$ equality holds, and the maximum is $1/16$.

</details>
