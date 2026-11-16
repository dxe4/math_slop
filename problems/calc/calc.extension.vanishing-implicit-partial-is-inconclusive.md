# Contrast smooth and nonsmooth graphs with the same failed implicit hypothesis

*Hard · [Calculus](index.md)*

At the origin, both equations $y^3-x^3=0$ and $y^3-x^2=0$ have zero y-partial. Prove the first nevertheless defines a smooth graph, while the second has a unique continuous real graph that is not differentiable at zero. Explain the precise logical scope of the implicit function theorem.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

Real cubing is injective, so each relation determines y explicitly.

</details>

<details>
<summary>Hint 2</summary>

Compare the two resulting difference quotients at zero.

</details>

<details>
<summary>Model proof</summary>

Failure of a sufficient regularity condition is not by itself a conclusion about the graph.

1. For the first equation, y³=x³ forces y=x over the reals. This is a smooth graph despite F\_y(0,0)=3y²=0.
2. For the second, y³=x²≥0 gives the unique real rule y=\|x\|^{2/3}, continuous at zero. Its difference quotient is \|h\|^{2/3}/h=sign(h)\|h\|^{−1/3}, with no finite derivative at zero.
3. Both defining functions are smooth polynomials and have the same vanishing solved-variable partial at the origin, but the graph outcomes differ.
4. The implicit function theorem guarantees a smooth local graph when the chosen partial is nonzero. When it is zero, the theorem is inconclusive, rather than asserting either absence or smoothness of a graph.

**Self-assessment rubric**

- Solves the cubic equality and verifies smoothness despite the failed sufficient condition.
- Finds the unique cube-root rule and proves its continuity and failure of finite differentiability.
- States the nonzero-partial condition as sufficient and its failure as inconclusive.

</details>
