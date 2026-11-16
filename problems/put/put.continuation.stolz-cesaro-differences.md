# Stolz cesaro differences

*Hard · [Original Putnam-style training](index.md)*

Let $b_n$ be strictly increasing with $b_n\to\infty$. If $(a_{n+1}-a_n)/(b_{n+1}-b_n)\to L$, prove $a_n/b_n\to L$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict."}}
```

<details>
<summary>Hint 1</summary>

Write $a_n-Lb_n$ as an initial constant plus a sum of increments.

</details>

<details>
<summary>Hint 2</summary>

Compare each sufficiently late increment with $\varepsilon(b_{k+1}-b_k)$.

</details>

<details>
<summary>Model proof</summary>

Divide by $b_n\to\infty$: the fixed first term vanishes and the limsup error is at most $\varepsilon$. Letting $\varepsilon\downarrow0$ proves the limit.

1. Fix $\varepsilon>0$ and choose $N$ so $|\Delta a_k-L\Delta b_k|\le\varepsilon\Delta b_k$ for all $k\ge N$, using $\Delta b_k>0$.
2. Telescoping gives $|a_n-Lb_n|\le|a_N-Lb_N|+\varepsilon(b_n-b_N)$ for $n>N$.
3. Divide by $b_n\to\infty$: the fixed first term vanishes and the limsup error is at most $\varepsilon$. Letting $\varepsilon\downarrow0$ proves the limit.

**Self-assessment rubric**

- Bound late differences of a\_n−Lb\_n by εΔb\_n.
- Sum those inequalities with the finite initial error.
- Divide by diverging b\_n and send ε to zero.

</details>
