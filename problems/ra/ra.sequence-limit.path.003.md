# Recognize an arbitrary-tolerance reciprocal proof

*Medium · [Real analysis](index.md)*

For $a_{n}=5/n, \varepsilon >0$ is arbitrary. Which choice and estimate correctly prove convergence to $0$? Select the mathematically correct statement from the four alternatives.

**Options**

1. Choose $N<5/\varepsilon$; then every $n\geq N$ must satisfy $5/n<\varepsilon$.
2. Choose a positive integer $N>5/\varepsilon$; for $n\geq N, 5/n\leq 5/N<\varepsilon$.
3. Choose $N=n+1$ after seeing n; the tail requirement is then vacuous.
4. Set $N=5/\varepsilon$, which is always an integer and always makes the strict inequality hold at $n=N$.

```answer
{"answer":{"kind":"multiple_choice","expected":"choose_a_positive_in","checker_scope":"Checks the selected mathematical statement among four authored alternatives under the stated hypotheses; does not assess a freely written proof."},"options":["choose_n_5_then","choose_a_positive_in","choose_n_n_1","set_n_5_which"]}
```

<details>
<summary>Hint 1</summary>

The Archimedean property gives an integer beyond any positive real threshold.

</details>

<details>
<summary>Hint 2</summary>

Check that the same N works for all later indices.

</details>

<details>
<summary>Worked solution</summary>

A general convergence proof chooses the threshold from an arbitrary tolerance.

1. Choose $N>5/\varepsilon$, using the Archimedean property.
2. For any $n\geq N, 0<5/n\leq 5/N<\varepsilon$. This is exactly the required whole-tail estimate, so B is valid.

</details>
