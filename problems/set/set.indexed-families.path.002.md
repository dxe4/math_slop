# Choose an index that captures a natural number

*Medium · [Set theory](index.md)*

Let $N_{0}$={$0,1,2$,…}. For every $n\in N_{0}$ define $A_{n}$={$0,1$,…,n}. What is $\bigcup_{n\in N_0}A_n$? Select the mathematically correct statement from the four alternatives.

**Options**

1. $N_{0}$.
2. $\varnothing$.
3. $\{0\}$.
4. $\{0,1\}$.

```answer
{"answer":{"kind":"multiple_choice","expected":"all_nonnegative","checker_scope":"Checks the selected mathematical statement among four authored alternatives under the stated hypotheses; does not assess a freely written proof."},"options":["all_nonnegative","empty_set","zero_only","first_two_members"]}
```

<details>
<summary>Hint 1</summary>

A natural number m needs to belong to only one $A_{n}$ to enter the union.

</details>

<details>
<summary>Hint 2</summary>

The index $n=m$ always includes m, and no $A_{n}$ contains anything outside $N_{0}$.

</details>

<details>
<summary>Worked solution</summary>

An infinite union claim can be justified by a witness index for each proposed member.

1. Every member of every $A_{n}$ belongs to N₀, so the union is contained in $N_{0}$.
2. For arbitrary $m\in N_{0}$, choose $n=m$; then $m\in A_{m}$. Therefore the union is $N_{0}$. Select the statement “$N_{0}$.”.

</details>
