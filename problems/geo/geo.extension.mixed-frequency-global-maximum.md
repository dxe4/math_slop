# Maximize a mixed-frequency trigonometric expression

*Hard · [Geometry and trigonometry problems](index.md)*

For real $\theta$, the greatest value of $\sin\theta+\cos\theta+\sin2\theta$ is $a+b\sqrt2$. Enter $[a,b]$ and determine the maximizing angles in your explanation.

```answer
{"answer":{"kind":"vector","expected":["1","1"],"checker_scope":"The exact requested finite result only; a correct entry does not certify a geometric argument or award reviewed evidence."}}
```

<details>
<summary>Hint 1</summary>

Let $u=\sin\theta+\cos\theta$ and note $u\in[-\sqrt2,\sqrt2]$.

</details>

<details>
<summary>Hint 2</summary>

Use $\sin2\theta=u^2-1$, then compare the resulting quadratic with its value at $u=\sqrt2$.

</details>

<details>
<summary>Worked solution</summary>

Choose a substitution that joins both frequencies.

1. The identity $u=\sqrt2\sin(\theta+\pi/4)$ gives the exact attainable interval $[-\sqrt2,\sqrt2]$.
2. Squaring $u$ gives $u^2=1+\sin2\theta$, so the objective becomes $f(u)=u^2+u-1$.
3. For every permitted $u$, $f(\sqrt2)-f(u)=(\sqrt2-u)(\sqrt2+u+1)\ge0$, since the first factor is nonnegative and the second at least one.
4. Equality occurs exactly at $u=\sqrt2$. This requires $\sin\theta=\cos\theta=1/\sqrt2$, or $\theta=\pi/4+2k\pi$ for an integer $k$.
5. The maximum is $f(\sqrt2)=1+\sqrt2$, giving $[1,1]$.

</details>
