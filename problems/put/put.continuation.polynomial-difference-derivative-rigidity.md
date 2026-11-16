# Polynomial difference derivative rigidity

*Hard · [Original Putnam-style training](index.md)*

Classify real polynomials $P$ satisfying $P(x+1)-P(x)=P^{\prime}(x)$ for every real $x$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict."}}
```

<details>
<summary>Hint 1</summary>

Compare the second-highest term in the binomial expansion of the forward difference.

</details>

<details>
<summary>Hint 2</summary>

For degree at least two, the first mismatch occurs one order below the leading derivative term.

</details>

<details>
<summary>Model proof</summary>

Thus the polynomial difference cannot vanish identically for $d\ge2$. The only solutions are affine polynomials.

1. Every affine polynomial $P(x)=ax+b$ satisfies the equation directly. Suppose instead $P$ has degree $d\ge2$ with leading coefficient $c\ne0$.
2. In $P(x+1)-P(x)-P^{\prime}(x)$, the leading degree-$d-1$ contributions from $cx^d$ cancel. Its degree-$d-2$ coefficient from that leading term is $c\binom d2\ne0$; contributions from the degree-$d-1$ term also cancel between difference and derivative, and lower terms cannot reach degree $d-2$.
3. Thus the polynomial difference cannot vanish identically for $d\ge2$. The only solutions are affine polynomials.

**Self-assessment rubric**

- Verify all affine polynomials satisfy the identity.
- Compare the degree d−2 coefficient after leading derivative terms cancel.
- Exclude every degree d≥2 and state the complete classification.

</details>
