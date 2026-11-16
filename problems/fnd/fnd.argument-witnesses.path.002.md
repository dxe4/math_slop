# Construct a counterexample to the converse

*Easy · [Foundations bridge](index.md)*

Construct a counterexample over the integers to: 'If $m+n$ is even, then m and n are both even.' Enter any integer pair that makes the sum hypothesis true and the both-even conclusion false. Use the optional explanation to check both parts. Enter exact integer values for m and n, including negative integers or zero. Integer-valued fractions and exact finite decimals are also allowed. Each number field permits at most $80$ written decimal digits across the whole written form before cancellation, and $2048$ raw characters. Leading zeros count. Choose your own values; there is no smallest, positive or increasing-order requirement. Repeated entries are allowed whenever they meet the stated mathematical conditions.

```answer
{"answer":{"kind":"argument_witness_pair_with_open_reasoning","expected_constraints":{"model":"even_sum_both_even_counterexample"},"checker_scope":"Checks only that the submitted exact integer pair makes the even-sum hypothesis true and the both-even conclusion false. Every odd/odd pair is permitted, including repeated entries. It does not assess an optional written disproof or general classification."}}
```

<details>
<summary>Hint 1</summary>

Your pair must make the sum assumption true and the 'both even' conclusion false. A pair with an odd sum does not challenge this claim.

</details>

<details>
<summary>Hint 2</summary>

To make 'both even' false, at least one entry must be odd. If one entry is odd, what must the other be for their sum to be even? Calculate your proposed sum.

</details>

<details>
<summary>Worked solution</summary>

A counterexample makes the premise true and the conclusion false.

1. One example is $m=-3,n=7$. Their sum is $4$, which is even. The conclusion fails because the entries are odd: $-3=2$($-2$)+$1$ and $7=2$($3$)+$1$.
2. The assumption holds and the conclusion fails, so this pair refutes the claim.
3. Every odd/odd pair works: $(2r+1)+(2s+1)=2$($r+s+1$).
4. Conversely, mixed parity gives an odd sum, while two even entries satisfy the conclusion. Thus the complete accepted family is $(2r+1,2s+1)$ for integers r,s.
5. Repeated odd entries, negative values and either order are allowed. The submitted pair is checked; your general explanation is not proof-graded.

</details>
