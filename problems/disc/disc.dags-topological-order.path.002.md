# Schedule a dependency diamond

*Medium · [Discrete mathematics](index.md)*

Vertices P,Q,R,S have arrows P→Q,P→R,Q→S,R→S. Which order respects every arrow? Select the mathematically correct statement from the four alternatives.

**Options**

1. Q,P,R,S.
2. P,Q,R,S.
3. P,S,Q,R.
4. P,Q,S,R.

```answer
{"answer":{"kind":"multiple_choice","expected":"p_q_r_s","checker_scope":"Checks the selected mathematical statement among four authored alternatives under the stated hypotheses; does not assess a freely written proof."},"options":["q_p_r_s","p_q_r_s","p_s_q_r","p_q_s_r"]}
```

<details>
<summary>Hint 1</summary>

P precedes both middle tasks.

</details>

<details>
<summary>Hint 2</summary>

S follows both middle tasks.

</details>

<details>
<summary>Worked solution</summary>

Topological orders place each arrow source before its target. A directed cycle certifies that no such order can exist.

1. B puts P first and S last, satisfying every arrow.
2. A violates P→Q and C violates Q→S and R→S.

</details>
