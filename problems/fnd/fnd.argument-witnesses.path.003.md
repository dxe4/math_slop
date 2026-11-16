# Recheck the changed product hypothesis

*Medium · [Foundations bridge](index.md)*

Now change the hypothesis from an even sum to an even product: 'If mn is even, then m and n are both even.' Construct any integer counterexample to this changed claim. Recheck its hypothesis as well as its conclusion; explain them optionally. Enter exact integer values for m and n, including negative integers or zero. Integer-valued fractions and exact finite decimals are also allowed. Each number field permits at most $80$ written decimal digits across the whole written form before cancellation, and $2048$ raw characters. Leading zeros count. Choose your own values; there is no smallest, positive or increasing-order requirement. Repeated entries are allowed whenever they meet the stated mathematical conditions.

```answer
{"answer":{"kind":"argument_witness_pair_with_open_reasoning","expected_constraints":{"model":"even_product_both_even_counterexample"},"checker_scope":"Checks only that the submitted exact integer pair makes the even-product hypothesis true and the both-even conclusion false. Every mixed-parity pair is permitted, including zero paired with an odd integer. It does not assess the optional explanation or a general theorem about even products."}}
```

<details>
<summary>Hint 1</summary>

The assumption now concerns the product. Calculate that product for your proposed pair; knowing what happened to its sum is insufficient.

</details>

<details>
<summary>Hint 2</summary>

At least one entry must be odd to make the 'both even' conclusion false. Choose the other entry so the product is even, then check both requirements.

</details>

<details>
<summary>Worked solution</summary>

Changing a hypothesis changes which witnesses refute the claim.

1. One example is $m=-5,n=2$. Their product is −10=2($-5$), so the changed assumption holds. The conclusion fails because $-5$ is odd. This pair therefore refutes the product claim.
2. Every mixed-parity pair works. An even factor makes the product even, while the odd entry prevents both entries from being even.
3. Two odd entries cannot work because $(2r+1) (2s+1)=2$($2rs+r+s$)+$1$ is odd. Two even entries cannot work because the conclusion then holds.
4. The complete accepted families are $(2r,2s+1)$ and $(2s+1,2r)$, for integers r,s.
5. Zero may be the even entry when the other entry is odd. Either order and negative values are allowed. Your optional explanation is not proof-graded.

</details>
