# An unbiased square estimator must sometimes be negative

*Hard · [Statistics and probability](index.md)*

Observe one $X\sim N(\mu,1)$ with unrestricted $\mu\in\mathbb R$. Prove that no measurable estimator $T(X)\ge0$ can satisfy $E_\mu T(X)=\mu^2$ for every $\mu$. Then exhibit an unbiased real-valued estimator and explain why its negative values do not contradict unbiasedness.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and task-specific rubric reflection only; no automatic correctness verdict or required checkpoint evidence."}}
```

<details>
<summary>Hint 1</summary>

Use the unbiasedness requirement at the parameter where the target is zero.

</details>

<details>
<summary>Hint 2</summary>

Compare null sets under the different normal location distributions.

</details>

<details>
<summary>Model proof</summary>

Nonnegativity at the zero target forces vanishing under every equivalent normal law.

1. At $\mu=0$, nonnegativity and $E_0T=0$ force $T=0$ $P_0$-almost surely.
2. Every $N(\mu,1)$ density is strictly positive everywhere. All these laws are mutually absolutely continuous, so the same statistic vanishes $P_\mu$-almost surely for every $\mu$.
3. It would then have expectation zero at nonzero $\mu$, contradicting $E_\mu T=\mu^2>0$. The contradiction rules out all nonnegative measurable estimators, not just polynomial ones.
4. In contrast, $X^2-1$ is unbiased because $E_\mu X^2=1+\mu^2$. It is negative on $|X|<1$, an event of positive probability. Unbiasedness constrains an expectation and does not require every realized estimate to lie in the target range.

**Self-assessment rubric**

- Use nonnegativity at the zero parameter.
- Transfer the null set to other normal locations and derive a contradiction.
- Verify the signed estimator and interpret its negative values.

</details>
