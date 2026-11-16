# A product projection is open

*Medium · [Topology problems](index.md)*

For nonempty topological spaces $X,Y$, prove that the coordinate projection $\pi_X:X\times Y\to X$ is an open map.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic correctness verdict, demonstration or checkpoint."}}
```

<details>
<summary>Hint 1</summary>

Express an open subset of the product as a union of basic rectangles.

</details>

<details>
<summary>Hint 2</summary>

Project a nonempty basic rectangle, then use preservation of unions by images.

</details>

<details>
<summary>Model proof</summary>

Product basic rectangles project to open coordinate sets.

1. Write an open set $W\subseteq X\times Y$ as a union of basic rectangles $U_i\times V_i$, discarding any empty rectangles.
2. Each $V_i$ is nonempty, so $\pi_X(U_i\times V_i)=U_i$, open in $X$.
3. The projection of $W$ is the union of these open $U_i$, hence open. The empty open set projects to the empty set as well.

**Self-assessment rubric**

- Use the product-basis representation and handle empty rectangles.
- Compute the projection of a nonempty rectangle correctly.
- Apply image preservation of unions and the union axiom.

</details>
