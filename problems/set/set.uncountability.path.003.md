# Use bits to avoid ambiguous decimal expansions

*Medium · [Set theory](index.md)*

Suppose $s_{0},s_{1}$,… is a proposed list of every infinite binary sequence, where each $s_{n}$ has entries indexed by $N_{0}$. Define $d(n)=1-s_{n}(n)$. Which argument shows the proposed list is incomplete? These are sequences of bits, not decimal representations of real numbers. Select the mathematically correct statement from the four alternatives.

**Options**

1. For every k, d and $s_{k}$ differ at coordinate k.
2. Different first coordinates alone prove disagreement with every listed sequence.
3. The construction fails because binary sequences have no final coordinate.
4. The proposed diagonal rule might produce an entry other than zero or one.

```answer
{"answer":{"kind":"multiple_choice","expected":"for_every_k_d","checker_scope":"Checks the selected mathematical statement among four authored alternatives under the stated hypotheses; does not assess a freely written proof."},"options":["for_every_k_d","different_first_coor","the_construction_fai","the_proposed_diagona"]}
```

<details>
<summary>Hint 1</summary>

Since an entry is $0$ or $1$, subtracting it from $1$ gives the other bit.

</details>

<details>
<summary>Hint 2</summary>

Compare d with an arbitrary listed sequence $s_{k}$ at coordinate k.

</details>

<details>
<summary>Worked solution</summary>

Changing the diagonal coordinate creates a valid object outside every listed row.

1. Every d(n) is again a bit, so d is a valid infinite binary sequence.
2. For arbitrary $k, d(k)=1-s_{k}(k)$ differs from $s_{k}(k)$. Thus $d\neq s_{k}$ for every k, and the list is incomplete. Select the statement “For every k, d and $s_{k}$ differ at coordinate k.”.

</details>
