# An injective finite map exhausts its codomain

*Easy · [Combinatorics](index.md)*

Let $A,B$ be finite sets with $|A|=|B|$. Prove that every injective map $f:A\to B$ is surjective.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic correctness verdict, demonstration or checkpoint."}}
```

<details>
<summary>Hint 1</summary>

An injection has as many image points as domain points.

</details>

<details>
<summary>Hint 2</summary>

Compare that image count with the size of the whole codomain.

</details>

<details>
<summary>Model proof</summary>

A proper subset of a finite set has strictly smaller cardinality.

1. Injectivity means distinct elements of $A$ have distinct images, so $|f(A)|=|A|$.
2. The hypothesis gives $|f(A)|=|B|$, while $f(A)\subseteq B$.
3. A proper subset of the finite set $B$ would have smaller size. Thus $f(A)=B$, which is surjectivity; this also includes the empty case.

**Self-assessment rubric**

- Use injectivity to establish the correct image cardinality.
- Use equal finite sizes to rule out a proper image subset.
- Identify image equality with the required conclusion, including the empty case.

</details>
