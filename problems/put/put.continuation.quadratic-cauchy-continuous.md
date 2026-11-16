# Quadratic cauchy continuous

*Hard · [Original Putnam-style training](index.md)*

Suppose continuous $f:\mathbb R\to\mathbb R$ satisfies $f(x+y)=f(x)+f(y)+2xy$ for all real $x,y$. Determine every such $f$ and prove completeness.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict."}}
```

<details>
<summary>Hint 1</summary>

Subtract the known quadratic solution $x^2$.

</details>

<details>
<summary>Hint 2</summary>

Continuity turns the resulting additive equation into linearity.

</details>

<details>
<summary>Model proof</summary>

Therefore $f(x)=x^2+cx$. Substitution verifies every such function, so the list is complete.

1. Define $g(x)=f(x)-x^2$. Since $(x+y)^2=x^2+y^2+2xy$, the identity becomes $g(x+y)=g(x)+g(y)$.
2. The function $g$ is continuous; by the rational-density argument for additive functions, $g(x)=cx$ for some real $c$.
3. Therefore $f(x)=x^2+cx$. Substitution verifies every such function, so the list is complete.

**Self-assessment rubric**

- Subtract x² and establish the residual additive equation.
- Use continuity to classify that residual as cx.
- State and verify every f=x²+cx solution.

</details>
