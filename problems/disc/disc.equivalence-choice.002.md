# Rewrite an implication

*Medium · [Discrete mathematics](index.md)*

Which formula is equivalent to the material implication p→q for every assignment? Select the mathematically correct statement from the four alternatives. Every occurrence of or is inclusive.

**Options**

1. q→p
2. (not p) or q
3. p and q
4. p or (not q).

```answer
{"answer":{"kind":"multiple_choice","expected":"not_p_or_q","checker_scope":"Checks the selected mathematical statement among four authored alternatives under the stated hypotheses; does not assess a freely written proof."},"options":["qp","not_p_or_q","p_and_q","p_or_not_q"]}
```

<details>
<summary>Hint 1</summary>

Find when each candidate is false.

</details>

<details>
<summary>Hint 2</summary>

An inclusive disjunction is false exactly when both of its parts are false.

</details>

<details>
<summary>Worked solution</summary>

Two formulas are equivalent when their truth values agree on every assignment.

1. (not p) or q is false exactly when not p is false and q is false, namely p=true, q=false. That is exactly the false case of p→q, so B is equivalent.
2. A is the converse and differs when p=true, q=false. C differs when p=false, q=false: the implication is true but the conjunction is false.

</details>
