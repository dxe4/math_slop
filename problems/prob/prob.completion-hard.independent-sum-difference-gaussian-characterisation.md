# Characterise Gaussian laws from an independent sum and difference

*Hard · [Probability problems](index.md)*

Let $X,Y$ be independent identically distributed real variables with finite second moment. Suppose $X+Y$ and $X-Y$ are independent. Prove that the common law is Gaussian, allowing a degenerate Gaussian. Derive the characteristic-function equation, prove the characteristic function has no real zeros, and justify the differentiations that identify its form; do not assume a globally defined logarithm without proof.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft with task-specific semantic rubric; no automatic correctness verdict or checkpoint evidence."}}
```

<details>
<summary>Hint 1</summary>

Independence gives a functional equation involving arguments $s+t$ and $s-t$. A special substitution propagates nonvanishing from a neighbourhood of zero.

</details>

<details>
<summary>Hint 2</summary>

Use the logarithmic derivative $\phi^{\prime}/\phi$, which is globally defined once zeros are excluded, instead of choosing a complex logarithm.

</details>

<details>
<summary>Model proof</summary>

The independence equation forces a constant second logarithmic derivative on the whole real line.

1. Let $\phi(t)=E e^{itX}$. Independence gives $\phi(s+t)\phi(s-t)=\phi(s)^2\phi(t)\phi(-t)$. Setting $s=t$ yields $\phi(2t)=\phi(t)^2|\phi(t)|^2$. Since $\phi(0)=1$ and $\phi$ is continuous, it is nonzero near zero; repeated doubling from $t/2^k$ proves it is nonzero at every real $t$.
2. Finite second moment permits two continuous derivatives under the expectation by dominated convergence. Hence $h=\phi^{\prime}/\phi$ is continuously differentiable on $\mathbb R$. Locally at any nonzero complex value one may differentiate a logarithm of the functional equation, or equivalently divide its ordinary derivatives by its nonzero sides.
3. Taking the derivative in $s$ and then in $t$ gives $h^{\prime}(s+t)-h^{\prime}(s-t)=0$. Every ordered pair of real arguments can be written $(s+t,s-t)$, so $h^{\prime}$ is constant. At zero it is $\phi^{\prime\prime}(0)-\phi^{\prime}(0)^2=-\operatorname{Var}(X)=-\sigma^2$.
4. Also $h(0)=i\mu$ with $\mu=EX$. Integrating yields $h(t)=i\mu-\sigma^2t$, and solving $\phi^{\prime}=h\phi$ with $\phi(0)=1$ gives $\phi(t)=e^{i\mu t-\sigma^2t^2/2}$. Uniqueness of characteristic functions proves the $N(\mu,\sigma^2)$ law; if $\sigma^2=0$, it is the point mass at $\mu$.

**Self-assessment rubric**

- Derive the exact characteristic-function equation with the negative argument.
- Propagate local nonzero values to all real arguments.
- Use finite moments and nonvanishing to justify the mixed derivative identity.
- Solve the resulting differential equation including the degenerate case.

</details>
