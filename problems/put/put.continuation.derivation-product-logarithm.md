# Derivation product logarithm

*Hard · [Original Putnam-style training](index.md)*

If continuous $f:(0,\infty)\to\mathbb R$ satisfies $f(xy)=xf(y)+yf(x)$, prove $f(x)=cx\log x$ for some real $c$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict."}}
```

<details>
<summary>Hint 1</summary>

Divide the equation by $xy$ to obtain a multiplicative-domain additive equation.

</details>

<details>
<summary>Hint 2</summary>

Compose the quotient with $e^t$.

</details>

<details>
<summary>Model proof</summary>

Hence $g(x)=c\log x$ and $f(x)=cx\log x$. Direct substitution confirms the entire family.

1. Define $g(x)=f(x)/x$. Dividing the identity by $xy$ yields $g(xy)=g(x)+g(y)$; continuity of $f$ makes $g$ continuous.
2. Define $h(t)=g(e^t)$ on $\mathbb R$. Then $h(s+t)=h(s)+h(t)$ and $h$ is continuous, so $h(t)=ct$.
3. Hence $g(x)=c\log x$ and $f(x)=cx\log x$. Direct substitution confirms the entire family.

**Self-assessment rubric**

- Divide by xy to obtain a multiplicative-domain additive equation.
- Compose with exponential and invoke continuous additivity.
- Recover cx log x and check substitution.

</details>
