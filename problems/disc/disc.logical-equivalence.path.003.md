# Negate an inclusive disjunction

*Medium · [Discrete mathematics](index.md)*

Which is equivalent to not(p or q) on every assignment? Select the mathematically correct statement from the four alternatives. Every occurrence of or is inclusive.

**Options**

1. (not p) or (not q).
2. (not p) and (not q).
3. p and q. Or is inclusive.
4. p and (not q).

```answer
{"answer":{"kind":"multiple_choice","expected":"not_p_and_not","checker_scope":"Checks the selected mathematical statement among four authored alternatives under the stated hypotheses; does not assess a freely written proof."},"options":["not_p_or_not","not_p_and_not","p_and_q_or","p_and_not_q"]}
```

<details>
<summary>Hint 1</summary>

The original is true when neither input is true.

</details>

<details>
<summary>Hint 2</summary>

Both inputs must be false.

</details>

<details>
<summary>Worked solution</summary>

Compare all truth assignments or recognize one authored equivalence. These finite checks do not certify arbitrary symbolic proofs.

1. The original is true exactly when p and q are both false.
2. Both negations must hold. Their disjunction fails on mixed truth inputs, while the unnegated conjunction fails when both inputs are false.

</details>
