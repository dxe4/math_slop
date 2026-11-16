# Two moment l2 extremizer

*Hard · [Original Putnam-style training](index.md)*

Among $f\in L^2[0,1]$ with $\int_0^1f(x)dx=1$ and $\int_0^1xf(x)dx=0$, prove the minimum of $\int_0^1f(x)^2dx$ is $4$ and identify its unique minimizer.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict."}}
```

<details>
<summary>Hint 1</summary>

Search for a candidate in the span of $1$ and $x$.

</details>

<details>
<summary>Hint 2</summary>

Decompose any feasible $f$ into that candidate plus a function orthogonal to both constraints.

</details>

<details>
<summary>Model proof</summary>

Thus $\int f^2=\int g^2+\int h^2=4+\int h^2\ge4$, with equality only when $h=0$ almost everywhere.

1. Solve $a+b/2=1$ and $a/2+b/3=0$ for $g(x)=a+bx$, obtaining $g(x)=4-6x$, which satisfies both constraints.
2. For any other feasible $f$, let $h=f-g$. Then $\int h=\int xh=0$, so $\int gh=4\int h-6\int xh=0$.
3. Thus $\int f^2=\int g^2+\int h^2=4+\int h^2\ge4$, with equality only when $h=0$ almost everywhere.

**Self-assessment rubric**

- Solve the two linear moment constraints for a candidate in span{1,x}.
- Show every feasible perturbation is orthogonal to that candidate.
- Compute candidate norm four and prove uniqueness by a nonnegative residual norm.

</details>
