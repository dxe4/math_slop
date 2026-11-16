# A subset need not be a member of its bounding set

*Medium · [Set theory](index.md)*

In classical ZF, let S be an existing set and $R=\{x\in S:x\notin x\}$, formed by Separation. Why does the usual unrestricted Russell contradiction not follow merely from this construction? Select the mathematically correct statement from the four alternatives.

**Options**

1. $R\subseteq S$ automatically implies R∈S, so there is a contradiction.
2. Separation gives a subset $R\subseteq S$ but does not assert $R\in S$.
3. R cannot be a set because Separation never creates sets.
4. Separation forbids predicates involving membership, so it cannot form the displayed R.

```answer
{"answer":{"kind":"multiple_choice","expected":"separation_gives_a_s","checker_scope":"Checks the selected mathematical statement among four authored alternatives under the stated hypotheses; does not assess a freely written proof."},"options":["rs_automatically_imp","separation_gives_a_s","r_cannot_be_a","separation_forbids_p"]}
```

<details>
<summary>Hint 1</summary>

Separation guarantees $R\subseteq S$, rather than $R\in S$.

</details>

<details>
<summary>Hint 2</summary>

Substituting $x=R$ into the bounded membership condition also requires $R\in S$.

</details>

<details>
<summary>Worked solution</summary>

The distinction between membership and subset containment is essential in axiom use.

1. The definition gives $R\in R$ iff (R∈S and R∉R), not the unrestricted equivalence $R\in R$ iff $R\notin R$.
2. It is not legitimate to assume $R\in S$ just because $R\subseteq S$. The construction is a valid bounded subset, so no contradiction follows. Select the statement “Separation gives a subset $R\subseteq S$ but does not assert $R\in S$.”.

</details>
