# Negate a conjunction

*Medium · [Discrete mathematics](index.md)*

Which formula has the same truth value as not(p and q) for every truth assignment? Select the mathematically correct statement from the four alternatives. Every occurrence of or is inclusive.

**Options**

1. (not p) or (not q)
2. (not p) and (not q)
3. p or q
4. (not p) or q.

```answer
{"answer":{"kind":"multiple_choice","expected":"not_p_or_not","checker_scope":"Checks the selected mathematical statement among four authored alternatives under the stated hypotheses; does not assess a freely written proof."},"options":["not_p_or_not","not_p_and_not","p_or_q","not_p_or_q"]}
```

<details>
<summary>Hint 1</summary>

Negating 'both are true' says that at least one is false.

</details>

<details>
<summary>Hint 2</summary>

Test p=true, q=false to distinguish 'at least one is false' from 'both are false'.

</details>

<details>
<summary>Worked solution</summary>

A negated conjunction becomes a disjunction of negations.

1. not(p and q) is false only when p and q are both true. (not p) or (not q) has exactly the same pattern, so A is equivalent.
2. The conjunction of the two negations fails when $p$ is true and $q$ is false. The unnegated disjunction $p\lor q$ fails when both are true, since the original negated conjunction is then false.

</details>
