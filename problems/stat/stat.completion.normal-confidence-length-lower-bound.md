# A coverage constraint forces expected interval length

*Hard · [Statistics and probability](index.md)*

Observe $X\sim N(\theta,1)$. Let $C(X)\subseteq\mathbb R$ have a measurable membership graph and satisfy $P_\theta\{\theta\in C(X)\}\ge1-\alpha$ for every $\theta$, where $0<\alpha<1$. Write $|C(X)|$ for its Lebesgue measure, allowing infinity. Prove $E_0|C(X)|\ge8[\phi(0)-\phi(z_{1-\alpha/2})]$, where $\phi$ and $\Phi$ are standard normal density and distribution functions and $z_q=\Phi^{-1}(q)$. Do not assume $C(X)$ is a translated interval.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and task-specific rubric reflection only; no automatic correctness verdict or required checkpoint evidence."}}
```

<details>
<summary>Hint 1</summary>

Use a bound comparing probabilities of the same event under two parameter values.

</details>

<details>
<summary>Hint 2</summary>

Integrate a pointwise lower bound for inclusion probability under the zero-parameter law; the positive part determines a finite integration range.

</details>

<details>
<summary>Model proof</summary>

Total variation transfers the coverage requirement to the law at which length is measured.

1. For the normal location pair, the densities cross at $x=\theta/2$, and direct integration gives $\operatorname{TV}(P_\theta,P_0)=2\Phi(|\theta|/2)-1$.
2. For the event $A_\theta=\{x:\theta\in C(x)\}$, coverage and total variation imply $P_0(A_\theta)\ge1-\alpha-\operatorname{TV}(P_\theta,P_0)=2-\alpha-2\Phi(|\theta|/2)$. Probabilities also have the lower bound zero.
3. Tonelli applies to the measurable nonnegative membership indicator, yielding $E_0|C(X)|=\int_{\mathbb R}P_0(A_\theta)\,d\theta$. Set $z=z_{1-\alpha/2}>0$; the displayed lower bound is positive for $|\theta|<2z$.
4. Integrating gives $E_0|C(X)|\ge4\int_0^z[2-\alpha-2\Phi(u)]\,du$. Since $\int\Phi(u)\,du=u\Phi(u)+\phi(u)$ and $2\Phi(z)=2-\alpha$, the integral equals $8[\phi(0)-\phi(z)]$.
5. The argument permits infinite expected measure and arbitrary measurable confidence sets. It uses only their uniform coverage, not a prescribed center, shape, or exact equality of coverage.

**Self-assessment rubric**

- Compute the total variation distance with the correct half convention.
- Transfer uniform coverage to a lower bound under the zero law.
- Apply Tonelli and identify the positive integration range.
- Evaluate the integral and retain the scope for arbitrary confidence sets.

</details>
