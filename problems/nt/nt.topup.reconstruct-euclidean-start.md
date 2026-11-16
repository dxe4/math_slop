# Reconstruct inputs from a full quotient chain

*Hard · [Number theory](index.md)*

The Euclidean algorithm for positive integers a&gt;b has the complete chain $a=2b+r$, b=3r+7, r=2(7)+0. Return a and b.

```answer
{"answer":{"kind":"record_of_rationals","expected":{"a":"112","b":"49"},"checker_scope":"Exact requested finite result, set or polynomial identity only. Worked number-theoretic reasoning is not automatically certified; no new same-version checkpoint objective is introduced."}}
```

<details>
<summary>Hint 1</summary>

Read the last equation first.

</details>

<details>
<summary>Hint 2</summary>

Recover each preceding dividend by moving upward through the chain.

</details>

<details>
<summary>Worked solution</summary>

The final remainder and all quotients reconstruct the original inputs.

1. The last equation gives r=14.
2. Then $b=3(14)+7=49$ and $a=2(49)+14=112$.
3. The remainder bounds 14&lt;49 and 7&lt;14 hold, so this is a valid complete Euclidean chain with gcd seven.

</details>
