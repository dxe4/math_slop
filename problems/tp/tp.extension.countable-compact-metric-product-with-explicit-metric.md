# Build a compact metric on a countable compact product

*Hard · [Topology problems](index.md)*

Let $(X_n,d_n)$, n≥1, be nonempty compact metric spaces. On $X=\prod_{n\ge1}X_n$ prove that $D(x,y)=\sum_{n\ge1}2^{-n}\min\{1,d_n(x_n,y_n)\}$ is a metric inducing the product topology and that X is compact. Restrict the argument to this countable metric setting.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic verdict, grade or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

Control a finite set of coordinates separately and bound the remaining geometric tail.

</details>

<details>
<summary>Hint 2</summary>

Extract nested convergent subsequences in coordinates 1,2,… and take a diagonal subsequence.

</details>

<details>
<summary>Model proof</summary>

A summable tail turns coordinatewise convergence into metric convergence.

1. Each truncated coordinate distance is a metric: min(1,a+b)≤min(1,a)+min(1,b) proves its triangle inequality. The series converges, is nonnegative and symmetric, and vanishes only when every coordinate agrees. Summing the coordinate triangle inequalities proves the triangle inequality for D.
2. To put a D-ball inside a basic product neighborhood of x, for every constrained coordinate j choose 0&lt;r\_j≤1 with its r\_j-ball inside the required coordinate open set. D(x,y)&lt;min\_j 2⁻ʲr\_j forces all those constraints. Conversely, for a desired D-radius ε choose N with ∑\_{n&gt;N}2⁻ⁿ&lt;ε/2 and constrain the first N coordinate distances to be less than ε/2. Then the finite sum is less than ε/2 and the tail less than ε/2. Thus the two topologies coincide.
3. Given a sequence in X, use compactness of X\_1 to extract a subsequence converging in coordinate 1, then a further subsequence converging in coordinate 2, and continue. The diagonal subsequence converges in every fixed coordinate to some x\_n∈X\_n.
4. For any ε, choose a uniformly small geometric tail, then take the diagonal indices large enough that the finitely many initial coordinates contribute less than ε/2. Hence this subsequence converges in D to x=(x\_n). Sequential compactness of a metric space implies compactness: the open-cover Lebesgue-number contradiction and a finite ε-net give a finite subcover. This proves the countable product claim without an assertion about arbitrary products.

**Self-assessment rubric**

- Justifies the triangle inequality and definiteness of the infinite weighted metric.
- Proves both neighborhood inclusions using finitely many coordinates and a tail bound.
- Constructs a subsequence converging in every coordinate.
- Upgrades coordinate convergence to D-convergence and invokes or explains the metric sequential compactness criterion.

</details>
