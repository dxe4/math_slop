# Arctangent chain substitution

*Medium · [Original Putnam-style training](index.md)*

Evaluate $\int_0^1 \arctan(x)/(1+x^2)\,dx$ exactly.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict."}}
```

<details>
<summary>Hint 1</summary>

Use the inverse-tangent function itself as a new variable.

</details>

<details>
<summary>Hint 2</summary>

The transformed integrand is linear in that variable.

</details>

<details>
<summary>Model proof</summary>

Evaluating $t^2/2$ at the endpoints gives $\pi^2/32$.

1. Let $t=\arctan x$, so $dt=dx/(1+x^2)$; the endpoints become $0$ and $\pi/4$.
2. The integral becomes $\int_0^{\pi/4}t\,dt$.
3. Evaluating $t^2/2$ at the endpoints gives $\pi^2/32$.

**Self-assessment rubric**

- Use t=arctan x with derivative dx/(1+x²) and transformed bounds.
- Reduce the transformed expression to the integral of t.
- Evaluate the squared endpoint to obtain π²/32.

</details>
