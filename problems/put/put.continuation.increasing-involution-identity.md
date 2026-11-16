# Increasing involution identity

*Hard · [Original Putnam-style training](index.md)*

If $f:\mathbb R\to\mathbb R$ is strictly increasing and satisfies $f(f(x))=x$ for all $x$, prove $f(x)=x$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict."}}
```

<details>
<summary>Hint 1</summary>

Assume for contradiction that $f(x)$ lies strictly above $x$ at one point.

</details>

<details>
<summary>Hint 2</summary>

Apply the increasing map to that inequality and compare with the involution identity.

</details>

<details>
<summary>Model proof</summary>

Neither strict inequality is possible at any point, so $f(x)=x$ everywhere; continuity was not needed.

1. If $f(x)>x$, strict monotonicity gives $f(f(x))>f(x)$, but $f(f(x))=x<f(x)$, a contradiction.
2. If $f(x)<x$, monotonicity gives $f(f(x))<f(x)$, but $f(f(x))=x>f(x)$, again a contradiction.
3. Neither strict inequality is possible at any point, so $f(x)=x$ everywhere; continuity was not needed.

**Self-assessment rubric**

- Use strict increase to contradict f(x)&gt;x with f(f(x))=x.
- Do the corresponding contradiction for f(x)&lt;x.
- Conclude equality at every x without unnecessary continuity.

</details>
