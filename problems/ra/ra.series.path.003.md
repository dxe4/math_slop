# Recognize the block-tail Cauchy criterion

*Medium · [Real analysis](index.md)*

Which condition is equivalent to convergence of a real series Σ $a_{k}$? Select the mathematically correct statement from the four alternatives.

**Options**

1. For each $\varepsilon >0$, all sufficiently late individual terms satisfy $|a_{n}|<\varepsilon$.
2. For each $\varepsilon >0$, some N makes every $p>q\geq N$ satisfy \|Σ from k=q+1 to p of a\_k\|&lt;ε.
3. The first partial sum is finite.
4. The partial sums are bounded, without any Cauchy or monotonicity requirement.

```answer
{"answer":{"kind":"multiple_choice","expected":"for_each_0_some","checker_scope":"Checks the selected mathematical statement among four authored alternatives under the stated hypotheses; does not assess a freely written proof."},"options":["for_each_0_all","for_each_0_some","the_first_partial_su","the_partial_sums_are"]}
```

<details>
<summary>Hint 1</summary>

Apply the Cauchy criterion to $S_{n}$, not just to $a_{n}$.

</details>

<details>
<summary>Hint 2</summary>

The difference $S_{p}-S_{q}$ is a finite tail block.

</details>

<details>
<summary>Worked solution</summary>

Convergence controls accumulated late blocks rather than isolated terms.

1. Real completeness makes convergence of partial sums equivalent to their Cauchy property.
2. Writing $S_p-S_q=\sum_{k=q+1}^p a_k$ shows that the required pairwise Cauchy estimate is exactly the small-tail-sum condition.

</details>
