# Tridiagonal determinant general

*Hard · [Original Putnam-style training](index.md)*

Let $T_n$ be the $n\times n$ tridiagonal matrix with diagonal $2$ and adjacent off-diagonal $-1$. Prove $\det T_n=n+1$ for all $n\ge0$ (with $\det T_0=1$).

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict."}}
```

<details>
<summary>Hint 1</summary>

Expand the first row to get a second-order determinant recurrence.

</details>

<details>
<summary>Hint 2</summary>

Look for an affine function of $n$ satisfying it.

</details>

<details>
<summary>Model proof</summary>

Induction on $n$ therefore proves $\det T_n=n+1$.

1. Laplace expansion yields $D_n=2D_{n-1}-D_{n-2}$ for $n\ge2$, with $D_0=1$ and $D_1=2$.
2. The candidate $D_n=n+1$ has the correct base values and obeys $2n-(n-1)=n+1$ in the recurrence.
3. Induction on $n$ therefore proves $\det T_n=n+1$.

**Self-assessment rubric**

- Derive Dₙ=2Dₙ₋₁−Dₙ₋₂ with correct initial values.
- Show n+1 satisfies the recurrence.
- Use induction to prove the closed form for all n.

</details>
