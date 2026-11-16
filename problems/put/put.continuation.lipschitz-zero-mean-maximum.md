# Lipschitz zero mean maximum

*Hard · [Original Putnam-style training](index.md)*

If $f:[0,1]\to\mathbb R$ is $1$-Lipschitz and $\int_0^1f=0$, prove $\max f\le1/2$ and exhibit equality.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict."}}
```

<details>
<summary>Hint 1</summary>

At a maximizer $c$, compare $f(x)$ with $f(c)-|x-c|$.

</details>

<details>
<summary>Hint 2</summary>

Integrate that lower envelope and maximize its average distance from $c$.

</details>

<details>
<summary>Model proof</summary>

The function $f(x)=1/2-x$ is $1$-Lipschitz, has mean zero, and reaches $1/2$ at $x=0$, establishing sharpness.

1. Continuity gives $c$ with $M=f(c)=\max f$. Lipschitz continuity yields $f(x)\ge M-|x-c|$ for all $x$, hence $0=\int_0^1f\ge M-\int_0^1|x-c|dx$.
2. The distance integral is $[c^2+(1-c)^2]/2\le1/2$ for $c\in[0,1]$, so $M\le1/2$.
3. The function $f(x)=1/2-x$ is $1$-Lipschitz, has mean zero, and reaches $1/2$ at $x=0$, establishing sharpness.

**Self-assessment rubric**

- Use Lipschitz continuity at a maximizer to obtain the lower distance envelope.
- Integrate that envelope under the zero-mean constraint and bound the distance average.
- Exhibit a feasible zero-mean Lipschitz function attaining one half.

</details>
