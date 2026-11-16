# An unbiasedness obstruction at a cusp

*Hard · [Statistics and probability](index.md)*

Fix an integer $n\ge1$. From $n$ independent $\operatorname{Bernoulli}(p)$ observations, can a real-valued statistic $T$ be unbiased for $|p-1/2|$ for every $0<p<1$? Give a proof covering every statistic on the full ordered sample, rather than just functions of the success count.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and task-specific rubric reflection only; no automatic correctness verdict or required checkpoint evidence."}}
```

<details>
<summary>Hint 1</summary>

Write the expectation as a finite sum over all ordered binary samples.

</details>

<details>
<summary>Hint 2</summary>

Study how that expectation varies with the parameter; compare its smoothness with the target at the middle of the parameter interval.

</details>

<details>
<summary>Model proof</summary>

Every fixed finite-sample expectation is polynomial in the Bernoulli parameter.

1. For each $x\in\{0,1\}^n$, put $k(x)=\sum_i x_i$. The expectation is $E_pT=\sum_x T(x)p^{k(x)}(1-p)^{n-k(x)}$.
2. This is a real polynomial in $p$ of degree at most $n$, regardless of whether $T$ is symmetric. In particular it has a derivative at every interior point.
3. If unbiasedness held, this polynomial would equal $|p-1/2|$ throughout $(0,1)$. The target has left derivative $-1$ and right derivative $1$ at $p=1/2$.
4. That contradicts differentiability of the polynomial. Thus no such statistic exists. An independent randomization with an integrable output cannot repair this: its conditional expectation given the finite data is another real-valued statistic with the same expectation.

**Self-assessment rubric**

- Represent the expectation for arbitrary ordered-sample statistics.
- Establish polynomial dependence on the parameter.
- Use the incompatible one-sided derivatives at the interior point.

</details>
