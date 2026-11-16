# A close subsequence does not control a tail

*Medium · [Real analysis](index.md)*

Let $a_{n}$ be $0$ for even positive n and $1$ for odd positive n. At tolerance $\varepsilon =1/2$ around $L=0$, which statement is true? Select the mathematically correct statement from the four alternatives.

**Options**

1. An entire tail is within $1/2$ of $0$.
2. Every tail has a close even term and a violating odd term.
3. All terms are at least $1/2$ away from $0$.
4. Eventually every term equals $1$ because all later odd-indexed terms equal $1$.

```answer
{"answer":{"kind":"multiple_choice","expected":"every_tail_has_a","checker_scope":"Checks the selected mathematical statement among four authored alternatives under the stated hypotheses; does not assess a freely written proof."},"options":["an_entire_tail_is","every_tail_has_a","all_terms_are_at","eventually_every_ter"]}
```

<details>
<summary>Hint 1</summary>

Every tail contains both an odd index and an even index.

</details>

<details>
<summary>Hint 2</summary>

A limit needs all sufficiently late terms to be close, rather than only some late terms.

</details>

<details>
<summary>Worked solution</summary>

Arbitrarily late close terms are weaker than eventual closeness of every term.

1. Even terms have distance $0$ from $0$, while odd terms have distance $1$.
2. Both parities occur beyond every threshold, so every tail has both a close term and a violating term.
3. B is true. In particular, $\varepsilon =1/2$ witnesses that this sequence does not converge to $0$.

</details>
