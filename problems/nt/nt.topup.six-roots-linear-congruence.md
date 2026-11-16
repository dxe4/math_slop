# Recover every canonical solution after dividing a common factor

*Hard · [Number theory](index.md)*

Find all x with $0\le x<30$ satisfying 18x congruent to 12 modulo 30. Return a set.

```answer
{"answer":{"kind":"set","expected":["4","9","14","19","24","29"],"checker_scope":"Exact requested finite result, set or polynomial identity only. Worked number-theoretic reasoning is not automatically certified; no new same-version checkpoint objective is introduced."}}
```

<details>
<summary>Hint 1</summary>

The common gcd six divides both the coefficient and right-hand side.

</details>

<details>
<summary>Hint 2</summary>

After reducing the modulus, lift the resulting class back to the original range.

</details>

<details>
<summary>Worked solution</summary>

A nonunit coefficient produces multiple solutions in the original modulus.

1. The condition is equivalent to $3x\equiv2\pmod5$ after dividing coefficient, target and modulus by six.
2. Multiplying by the inverse two of three modulo five gives x congruent to four.
3. The six representatives in the original range are $4,9,14,19,24,29$, and each satisfies the original congruence.

</details>
