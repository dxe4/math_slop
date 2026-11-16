# Use the central mirror pair before counting a half word

*Hard · [Original olympiad-style problems](index.md)*

How many binary palindromes of length $10$ have no adjacent ones?

```answer
{"answer":{"kind":"integer","expected":"8","checker_scope":"Exact requested finite count, sharp bound or declared move vector only. The full combinatorial argument is a worked model, not an automatically checked proof; this new skill changes no existing objective contract."}}
```

<details>
<summary>Hint 1</summary>

The two central bits are equal by reflection.

</details>

<details>
<summary>Hint 2</summary>

After resolving that pair, identify the independent shorter word and its boundary condition.

</details>

<details>
<summary>Worked solution</summary>

A forced central zero removes the only new adjacency created by mirroring.

1. A palindrome is determined by its first five bits. Bits five and six are equal, so the no-adjacent-one condition forces the fifth bit to be zero.
2. The first four bits may be any binary word without adjacent ones; its trailing zero at position five adds no restriction. Reflection then supplies a valid second half.
3. The counts of such words of lengths zero through four are 1,2,3,5,8 from the last-bit recurrence, so the palindrome count is eight.

</details>
