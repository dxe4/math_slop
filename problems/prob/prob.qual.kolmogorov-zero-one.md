# Extend tail independence to the full generated sigma-field

*Medium · [Probability problems](index.md)*

Let $X_1,X_2,\ldots$ be independent random variables, and let $\mathcal T=\bigcap_{m\ge1}\sigma(X_m,X_{m+1},\ldots)$. Prove that every $A\in\mathcal T$ has probability zero or one. You may use the pi-lambda theorem.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or required graded evidence."}}
```

<details>
<summary>Hint 1</summary>

A tail event is independent of every finite initial block.

</details>

<details>
<summary>Hint 2</summary>

Extend independence to the sigma-field of the whole sequence before using that the tail event belongs to it.

</details>

<details>
<summary>Model proof</summary>

Tail independence reaches the event itself only after a sigma-field extension.

1. For each $n$, the event $A$ belongs to $\sigma(X_{n+1},X_{n+2},\ldots)$ and is independent of $\sigma(X_1,\ldots,X_n)$. Independence of these sigma-fields follows from independence of the sequence by the pi-lambda theorem.
2. The finite-coordinate cylinder events form a pi-system generating $\mathcal F_\infty=\sigma(X_1,X_2,\ldots)$. The events $B$ satisfying $P(A\cap B)=P(A)P(B)$ form a lambda-system, so the equality extends to all $B\in\mathcal F_\infty$.
3. Since $A\in\mathcal F_\infty$, take $B=A$ to get $P(A)=P(A)^2$, whose only probability solutions are zero and one.

**Self-assessment rubric**

- Establish independence from each finite initial sigma-field.
- Extend the factorization identity to the full generated sigma-field.
- Apply the result to the tail event itself and solve the resulting equation.

</details>
