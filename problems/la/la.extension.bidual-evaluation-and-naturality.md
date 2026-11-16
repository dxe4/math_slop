# Prove the canonical bidual identification is natural

*Medium · [Linear algebra problems](index.md)*

Work over $\mathbb R$ in finite dimension; all coordinate entries are dimensionless. For finite-dimensional real $V$, define $j_V(v)(f)=f(v)$. Prove $j_V:V\to V^{**}$ is an isomorphism and, for every linear $T:V\to W$, prove $T^{**}j_V=j_WT$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and task-specific rubric reflection only; no automatic grading or evidence is supplied."}}
```

<details>
<summary>Hint 1</summary>

A nonzero vector can be included in a basis and detected by a coordinate functional.

</details>

<details>
<summary>Hint 2</summary>

Test both sides of the naturality identity on an arbitrary covector of W.

</details>

<details>
<summary>Model proof</summary>

Evaluation gives an identification without selecting an inner product.

1. The map is linear. If $v\ne0$, extend $v$ to a basis and take the coordinate functional with value one on $v$; thus $j_V(v)\ne0$, proving injectivity.
2. The two spaces have the same finite dimension, so injectivity gives an isomorphism. No chosen metric is used.
3. For $g\in W^*$, $[T^{**}j_V(v)](g)=j_V(v)(g\circ T)=g(Tv)=[j_W(Tv)](g)$. Equality on every $g$ proves naturality.

**Self-assessment rubric**

- Prove linearity and separate a nonzero vector by a constructed functional.
- Use equal finite dimensions, specifying that no metric identification was chosen.
- Evaluate both composite maps on an arbitrary output covector.

</details>
