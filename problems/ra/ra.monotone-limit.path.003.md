# Recognize the real monotone convergence theorem

*Medium · [Real analysis](index.md)*

A real sequence is nondecreasing and bounded above. Which conclusion follows? Select the mathematically correct statement from the four alternatives.

**Options**

1. It must eventually become constant.
2. Its limit must be one of its terms.
3. It converges to the supremum of its range.
4. It diverges to positive infinity because nondecreasing sequences cannot have finite limits.

```answer
{"answer":{"kind":"multiple_choice","expected":"it_converges_to_the","checker_scope":"Checks the selected mathematical statement among four authored alternatives under the stated hypotheses; does not assess a freely written proof."},"options":["it_must_eventually_b","its_limit_must_be","it_converges_to_the","it_diverges_to_posit"]}
```

<details>
<summary>Hint 1</summary>

Real completeness gives a supremum for the nonempty bounded range.

</details>

<details>
<summary>Hint 2</summary>

A sequence can approach a bound strictly without reaching it.

</details>

<details>
<summary>Worked solution</summary>

Completeness and monotonicity produce an entire tail near the least upper bound.

1. Let L be the range supremum. For every $\varepsilon >0$, some term exceeds $L-\varepsilon$.
2. Every later term lies between that term and L by monotonicity, proving convergence to L. Neither eventual constancy nor attainment is required.

</details>
