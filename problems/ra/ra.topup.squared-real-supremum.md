# Identify a real supremum while returning an exact algebraic quantity

*Medium · [Real analysis](index.md)*

Let $S=\{x\in\mathbb R: x\ge0,\ x^2<7\}$. If s is its real supremum, find s^2.

```answer
{"answer":{"kind":"integer","expected":"7","checker_scope":"Checks only the requested fixed numerical result, finite set or declared interval. Universal epsilon arguments, hypotheses and analytic proofs are not automatically certified, and no new same-version required slot is introduced."}}
```

<details>
<summary>Hint 1</summary>

The positive square root is an upper bound but is not in the set.

</details>

<details>
<summary>Hint 2</summary>

Numbers just below that root still belong to the set.

</details>

<details>
<summary>Worked solution</summary>

A non-strict supremum condition can sit at a strict defining boundary.

1. The set is \[0,sqrt(7)), since squaring is increasing on the nonnegative reals.
2. Its least upper bound is sqrt(7), though that endpoint is excluded.
3. Therefore s squared is exactly seven.

</details>
