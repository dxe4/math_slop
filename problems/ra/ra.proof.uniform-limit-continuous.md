# A uniform limit preserves continuity

*Hard · [Real analysis](index.md)*

Let $D\subseteq\mathbb R$, and let continuous functions $f_n:D\to\mathbb R$ converge uniformly to $f$. Prove that $f$ is continuous on $D$ in its relative topology.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic correctness verdict, demonstration or checkpoint."}}
```

<details>
<summary>Hint 1</summary>

Fix one point and divide the desired error into three parts.

</details>

<details>
<summary>Hint 2</summary>

Choose one approximating function using uniform convergence before choosing a neighborhood using its continuity.

</details>

<details>
<summary>Model proof</summary>

Use one uniformly close function to transfer a local continuity estimate to the limit.

1. Fix $x_0\in D$ and $\varepsilon>0$. Uniform convergence gives an index $N$ with $|f(x)-f_N(x)|<\varepsilon/3$ for every $x\in D$.
2. Continuity of that fixed $f_N$ at $x_0$ supplies $\delta>0$ so that $x\in D$, $|x-x_0|<\delta$ imply $|f_N(x)-f_N(x_0)|<\varepsilon/3$.
3. For such $x$, apply the triangle inequality through $f_N(x)$ and $f_N(x_0)$.
4. The three resulting errors are each below $\varepsilon/3$, so $|f(x)-f(x_0)|<\varepsilon$.
5. This establishes relative continuity at arbitrary $x_0$, hence continuity on $D$.

**Self-assessment rubric**

- Fix the point and tolerance, then choose one approximating function using a uniform bound.
- Apply continuity to that fixed approximating function to choose a neighborhood.
- Bound all three triangle-inequality errors with their required domains.
- Conclude continuity for arbitrary domain points, including relative boundary points.

</details>
