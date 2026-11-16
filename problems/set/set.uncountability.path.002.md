# A proposed list always misses its diagonal set

*Medium · [Set theory](index.md)*

For any proposed f:$N_{0}\to P(N_{0})$, define D={$n\in N_{0}$:$n\notin f(n)$}. Why is D different from f(k) for every $k\in N_{0}$? Select the mathematically correct statement from the four alternatives.

**Options**

1. Checking the first ten indices suffices for all later indices.
2. D and f(k) have opposite membership decisions about k.
3. D differs only because every proposed map f must fail to be injective.
4. D equals f(k) whenever k is not a member of f(k).

```answer
{"answer":{"kind":"multiple_choice","expected":"d_and_f_k","checker_scope":"Checks the selected mathematical statement among four authored alternatives under the stated hypotheses; does not assess a freely written proof."},"options":["checking_the_first_t","d_and_f_k","d_differs_only_becau","d_equals_f_k"]}
```

<details>
<summary>Hint 1</summary>

Compare membership of the particular element k.

</details>

<details>
<summary>Hint 2</summary>

The definition of D reverses whether k belongs to f(k).

</details>

<details>
<summary>Worked solution</summary>

The arbitrary-index disagreement proves that the whole proposed enumeration misses a subset.

1. For arbitrary $k, k\in D$ exactly when $k\notin f(k)$.
2. Thus D and f(k) disagree about k and cannot be equal. No index reaches D, so f cannot enumerate all subsets. Select the statement “D and f(k) have opposite membership decisions about k.”.

</details>
