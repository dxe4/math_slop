# A convergent subsequence controls a Cauchy sequence

*Medium · [Real analysis](index.md)*

Let $(a_n)$ be a Cauchy sequence of real numbers. Suppose a subsequence $(a_{n_k})$ converges to $L$. Prove that the full sequence converges to $L$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic correctness verdict, demonstration or checkpoint."}}
```

<details>
<summary>Hint 1</summary>

Split the error through a suitably chosen subsequence term.

</details>

<details>
<summary>Hint 2</summary>

Choose that term far enough out for both the Cauchy bound and the subsequence limit bound.

</details>

<details>
<summary>Model proof</summary>

A Cauchy tail stays close to one late subsequence term whose limit is known.

1. Fix $\varepsilon>0$. Choose $N$ such that $|a_n-a_m|<\varepsilon/2$ for all $m,n\ge N$.
2. Choose $k$ large enough that $n_k\ge N$ and $|a_{n_k}-L|<\varepsilon/2$; subsequence indices tend to infinity.
3. For every $n\ge N$, $|a_n-L|\le|a_n-a_{n_k}|+|a_{n_k}-L|<\varepsilon$. This proves convergence of the full sequence.

**Self-assessment rubric**

- Choose one threshold controlling every pair of tail terms.
- Select a subsequence term satisfying both needed conditions.
- Apply the triangle inequality uniformly to every sufficiently late term.

</details>
