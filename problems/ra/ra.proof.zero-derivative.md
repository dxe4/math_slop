# A zero derivative forces constancy

*Easy · [Real analysis](index.md)*

Let $f$ be differentiable on an open interval $I\subseteq\mathbb R$, with $f^{\prime}(x)=0$ for all $x\in I$. Prove that $f$ is constant on $I$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic correctness verdict, demonstration or checkpoint."}}
```

<details>
<summary>Hint 1</summary>

Compare the values at any two distinct points of the interval.

</details>

<details>
<summary>Hint 2</summary>

Apply the mean value theorem on the closed segment between those points, checking its hypotheses.

</details>

<details>
<summary>Model proof</summary>

The mean value theorem identifies each difference quotient with a vanishing derivative.

1. Take arbitrary $x<y$ in $I$. Differentiability implies continuity on $[x,y]$ and differentiability on $(x,y)$, since that segment lies in $I$.
2. The mean value theorem gives $f(y)-f(x)=f^{\prime}(c)(y-x)$ for some $c\in(x,y)$.
3. The derivative is zero, so $f(y)=f(x)$. Every pair of points has equal values, hence $f$ is constant.

**Self-assessment rubric**

- Compare arbitrary distinct points, with the segment contained in the interval.
- Justify both continuity and differentiability required by the mean value theorem.
- Use the zero derivative to prove equality for every pair of values.

</details>
