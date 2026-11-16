# Extend a sum of threes

*Easy · [Discrete mathematics](index.md)*

The claim is that n copies of $3$ sum to $3n$, for $n\geq 1$. Assume it for arbitrary $k\geq 1$. Select the valid next step. Select the mathematically correct statement from the four alternatives.

**Options**

1. Check $n=2$ and stop.
2. Replace k by $k+1$ in the claim without justification.
3. Append $3$, giving $3k+3=3$($k+1$).
4. Append one, giving $3k+1=3$($k+1$).

```answer
{"answer":{"kind":"multiple_choice","expected":"append_3_giving_3k","checker_scope":"Checks the selected mathematical statement among four authored alternatives under the stated hypotheses; does not assess a freely written proof."},"options":["check_n_2_and","replace_k_by_k","append_3_giving_3k","append_one_giving_3k"]}
```

<details>
<summary>Hint 1</summary>

The next sum adds one $3$.

</details>

<details>
<summary>Hint 2</summary>

Use the old sum from the hypothesis.

</details>

<details>
<summary>Worked solution</summary>

Ordinary induction needs a base and a successor implication for arbitrary k. These tasks check supplied steps and explicit starting dependencies.

1. The hypothesis says the k-term sum is $3k$.
2. Appending $3$ gives $3k+3=3$($k+1$). C derives the new case.

</details>
