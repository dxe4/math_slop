# Optimize the exponential bound at the Bernoulli relative entropy

*Medium · [Probability problems](index.md)*

For $X\sim\operatorname{Binomial}(n,p)$ with integer $n\ge1$ and $0<p<q<1$, prove $P(X/n\ge q)\le e^{-nD(q\Vert p)}$, where $D(q\Vert p)=q\log(q/p)+(1-q)\log((1-q)/(1-p))$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or required graded evidence."}}
```

<details>
<summary>Hint 1</summary>

Apply Markov's inequality to $e^{sX}$ with $s>0$.

</details>

<details>
<summary>Hint 2</summary>

Differentiate the logarithmic bound to choose $e^s=q(1-p)/(p(1-q))$.

</details>

<details>
<summary>Model proof</summary>

The minimizing exponential tilt has Bernoulli mean equal to the requested tail threshold.

1. For $s>0$, $P(X\ge nq)\le e^{-snq}E[e^{sX}]=\exp\{n[\log(1-p+pe^s)-sq]\}$. This also holds for noninteger $nq$.
2. The derivative of the bracket is $pe^s/(1-p+pe^s)-q$. It vanishes at $s=\log(q(1-p)/(p(1-q)))>0$, the global minimum because the logarithmic moment generating function is convex.
3. At this value $1-p+pe^s=(1-p)/(1-q)$. Substitution gives $-q\log(q/p)-(1-q)\log((1-q)/(1-p))$, proving the stated bound.

**Self-assessment rubric**

- Set up the valid positive-tilt bound using the binomial moment generating function.
- Find and justify the positive minimizing tilt.
- Simplify the optimized exponent to the stated divergence.

</details>
