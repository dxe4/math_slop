# Find a fixed tolerance violating the Cauchy condition

*Medium · [Real analysis](index.md)*

Let $a_{n}=(-1)^n$. At the fixed tolerance $\varepsilon =1$, which observation proves the sequence is not Cauchy? Select the mathematically correct statement from the four alternatives.

**Options**

1. Some two early terms differ by $2$.
2. All terms have absolute value $1$.
3. Every tail contains an even and an odd index, whose terms differ by $2\geq 1$.
4. All terms lie between $-1$ and 1, so the sequence is Cauchy.

```answer
{"answer":{"kind":"multiple_choice","expected":"every_tail_contains","checker_scope":"Checks the selected mathematical statement among four authored alternatives under the stated hypotheses; does not assess a freely written proof."},"options":["some_two_early_terms","all_terms_have_absol","every_tail_contains","all_terms_lie_betwee"]}
```

<details>
<summary>Hint 1</summary>

An early failure can disappear after a larger threshold; a Cauchy obstruction must occur in every tail.

</details>

<details>
<summary>Hint 2</summary>

Both parities occur beyond each positive integer N.

</details>

<details>
<summary>Worked solution</summary>

A non-Cauchy witness uses one tolerance that every proposed tail violates.

1. For every N, choose one even and one odd index at least N.
2. Their values are $1$ and −1, so the distance is $2$, violating the required &lt;$1$ estimate in every tail.

</details>
