# Every integer gets a unique index

*Medium · [Set theory](index.md)*

Define $z_{0}=0, z_{2k-1}=k$, and $z_{2k}=-k$ for every positive integer k. Which reason establishes that $n\mapsto z_{n}$ is a bijection $N_{0}\to Z$? Select the mathematically correct statement from the four alternatives.

**Options**

1. Zero occurs at $0$, positive k at $2k-1$, and negative $-k$ at $2k$, each uniquely.
2. Any sequence with infinitely many terms is automatically a bijection onto all integers.
3. The formula lists zero at every even index, so every integer is reached.
4. Every integer k appears at index k, including negative integers.

```answer
{"answer":{"kind":"multiple_choice","expected":"zero_occurs_at_0","checker_scope":"Checks the selected mathematical statement among four authored alternatives under the stated hypotheses; does not assess a freely written proof."},"options":["zero_occurs_at_0","any_sequence_with_in","the_formula_lists_ze","every_integer_k_appe"]}
```

<details>
<summary>Hint 1</summary>

Describe the index of zero, an arbitrary positive integer, and an arbitrary negative integer.

</details>

<details>
<summary>Hint 2</summary>

Odd and positive even indices give disjoint signs.

</details>

<details>
<summary>Worked solution</summary>

An enumeration proof establishes both coverage and uniqueness at arbitrary indices.

1. Zero occurs only at index $0$. Each positive k occurs exactly at index $2k-1$.
2. Each negative integer $-k$ occurs exactly at index $2k$, for $k\geq 1$. Every integer appears exactly once, proving the bijection. Select the statement “Zero occurs at $0$, positive k at $2k-1$, and negative $-k$ at $2k$, each uniquely.”.

</details>
