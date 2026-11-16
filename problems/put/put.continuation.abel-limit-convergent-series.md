# Abel limit convergent series

*Hard · [Original Putnam-style training](index.md)*

If $\sum_{n\ge0}a_n$ converges to $S$, prove $\lim_{r\uparrow1}\sum_{n\ge0}a_nr^n=S$ for $0\le r<1$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict."}}
```

<details>
<summary>Hint 1</summary>

Let $s_n=\sum_{k=0}^na_k$ and use finite summation by parts.

</details>

<details>
<summary>Hint 2</summary>

The resulting weights form a probability distribution concentrated on large $n$ as $r\uparrow1$.

</details>

<details>
<summary>Model proof</summary>

The finite prefix tends to zero after multiplication by $1-r$, while the tail is bounded by $\varepsilon(1-r)\sum_{n\ge N}r^n\le\varepsilon$. Hence the limit is $S$.

1. Convergence of $s_n$ makes it bounded. For $0\le r<1$, finite summation by parts and passage to infinity give $\sum_{n\ge0}a_nr^n=(1-r)\sum_{n\ge0}s_nr^n$; the boundary term $s_Nr^{N+1}$ vanishes.
2. Subtract $S$: $(1-r)\sum_{n\ge0}(s_n-S)r^n$. Choose $N$ with $|s_n-S|<\varepsilon$ for $n\ge N$.
3. The finite prefix tends to zero after multiplication by $1-r$, while the tail is bounded by $\varepsilon(1-r)\sum_{n\ge N}r^n\le\varepsilon$. Hence the limit is $S$.

**Self-assessment rubric**

- Derive the Abel weighted partial-sum identity with a vanishing boundary term.
- Split s\_n−S into finite prefix and uniformly small tail.
- Control both pieces as r approaches one and conclude the endpoint limit.

</details>
