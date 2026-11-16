# Positive infinite product criterion

*Hard · [Original Putnam-style training](index.md)*

For nonnegative $u_n\to0$, prove $\prod_{n\ge1}(1+u_n)$ converges to a finite positive limit iff $\sum_{n\ge1}u_n$ converges.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict."}}
```

<details>
<summary>Hint 1</summary>

Take logarithms of finite products.

</details>

<details>
<summary>Hint 2</summary>

Compare $\log(1+u)$ to $u$ for small nonnegative $u$.

</details>

<details>
<summary>Model proof</summary>

Exponentiating gives a finite positive product limit in the convergent case; in the divergent case logarithmic sums tend to infinity and the product diverges to infinity.

1. For $0\le u\le1$, $u/2\le\log(1+u)\le u$, by integrating $1/(1+t)$ from $0$ to $u$. Because $u_n\to0$, all but finitely many terms lie in this range.
2. The logarithm of the finite product is $\sum_{n\le N}\log(1+u_n)$. The two-sided comparison shows these logarithmic partial sums converge iff $\sum u_n$ does.
3. Exponentiating gives a finite positive product limit in the convergent case; in the divergent case logarithmic sums tend to infinity and the product diverges to infinity.

**Self-assessment rubric**

- Prove u/2≤log(1+u)≤u for small nonnegative u.
- Apply comparison to logarithms of finite products.
- Exponentiate to distinguish finite positive convergence from divergence.

</details>
