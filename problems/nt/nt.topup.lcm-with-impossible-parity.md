# Detect an impossible extra common-multiple condition

*Hard · [Number theory](index.md)*

How many positive integers n satisfy $18\mid n$, 24 divides n, and n/18 is odd? Return zero if there are none.

```answer
{"answer":{"kind":"integer","expected":"0","checker_scope":"Exact requested finite result, set or polynomial identity only. Worked number-theoretic reasoning is not automatically certified; no new same-version checkpoint objective is introduced."}}
```

<details>
<summary>Hint 1</summary>

Every common multiple is a multiple of the least common multiple.

</details>

<details>
<summary>Hint 2</summary>

Examine the parity of its quotient by eighteen.

</details>

<details>
<summary>Worked solution</summary>

A common-multiple condition can force the opposite parity from the additional requirement.

1. The least common multiple of eighteen and twenty-four is seventy-two.
2. Thus any such n is $72k$ for a positive integer k, and $n/18=4k$ is even.
3. No positive integer satisfies the oddness condition, so the answer count is zero.

</details>
