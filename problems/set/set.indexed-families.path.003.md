# No natural number survives every tail

*Medium · [Set theory](index.md)*

Let $N_{0}$={$0,1,2$,…}. For every $n\in N_{0}$ define $B_{n}$={$n,n+1,n+2$,…}. What is $\bigcap_{n\in N_0}B_n$? Select the mathematically correct statement from the four alternatives.

**Options**

1. $N_{0}$.
2. $\varnothing$.
3. $\{0\}$.
4. {$1,2,3$,…}.

```answer
{"answer":{"kind":"multiple_choice","expected":"empty_set","checker_scope":"Checks the selected mathematical statement among four authored alternatives under the stated hypotheses; does not assess a freely written proof."},"options":["all_nonnegative","empty_set","zero_only","positive_integers"]}
```

<details>
<summary>Hint 1</summary>

An intersection member would have to lie in every $B_{n}$.

</details>

<details>
<summary>Hint 2</summary>

Given a proposed natural number m, examine the set with index $n=m+1$.

</details>

<details>
<summary>Worked solution</summary>

One failing index for each proposed element defeats an infinite-intersection membership claim.

1. Any proposed member m must be a natural number, since every $B_{n}$ contains only natural numbers.
2. But $m\notin B_{m}$₊₁, so no natural number belongs to all the sets. The intersection is empty. Select the statement “$\varnothing$.”.

</details>
