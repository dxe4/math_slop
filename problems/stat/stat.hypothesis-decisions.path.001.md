# Interpret a rejection without assigning a null probability

*Medium · [Statistics and probability](index.md)*

A prespecified valid test has $p=0.03$ and $\alpha =0.05$, with rule reject when $p\leq \alpha$. Which statement is justified? Select the mathematically correct statement from the four alternatives.

**Options**

1. There is exactly a $3$% probability that the null is true.
2. Reject by the stated rule; the p-value alone does not give the probability that the null is true.
3. The effect is guaranteed to be practically large.
4. The model assumptions have exactly $95$% probability of being true.

```answer
{"answer":{"kind":"multiple_choice","expected":"reject_by_the_stated","checker_scope":"Checks the selected mathematical statement among four authored alternatives under the stated hypotheses; does not assess a freely written proof."},"options":["there_is_exactly_a","reject_by_the_stated","the_effect_is_guaran","the_model_assumption"]}
```

<details>
<summary>Hint 1</summary>

Compare $0.03$ with $0.05$ for the decision.

</details>

<details>
<summary>Hint 2</summary>

A null-model tail probability differs from a probability assigned to the null itself.

</details>

<details>
<summary>Worked solution</summary>

A decision and the interpretation of its p-value are separate claims.

1. Because $0.03\leq 0.05$, the rule rejects.
2. That threshold crossing does not supply a null posterior probability or practical effect size, so the statement “Reject by the stated rule; the p-value alone does not give the probability that the null is true.” is correct.

</details>
