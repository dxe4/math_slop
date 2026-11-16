# Continuous need not mean differentiable

*Difficulty 4 of 5 · [Analysis and linear algebra core practice](index.md) · exercise 11 of 12*

A classmate claims: "If $f$ is continuous at $c$, then $f$ is differentiable at $c$, because the graph has no break there." Give a counterexample and prove that it is one, then state the correct direction of the implication.

<details>
<summary>Hint 1</summary>

The canonical example is a V-shaped graph at the origin.

</details>

<details>
<summary>Hint 2</summary>

Differentiability fails because left- and right-hand difference quotients disagree.

</details>

<details>
<summary>Worked solution</summary>

Take $f(x) = |x|$ at $c = 0$. Continuity: $|f(x) - f(0)| = |x| < \varepsilon$ whenever $|x| < \varepsilon$, so $f$ is continuous at $0$ (take $\delta = \varepsilon$). Differentiability: the difference quotient is $\frac{|h| - 0}{h}$, which equals $1$ for $h > 0$ and $-1$ for $h < 0$. The two one-sided limits disagree, so the limit of the difference quotient does not exist and $f$ is not differentiable at $0$. The correct implication runs the other way: differentiability at $c$ implies continuity at $c$, since $f(x) - f(c) = \frac{f(x) - f(c)}{x - c} \cdot (x - c) \to f'(c) \cdot 0 = 0$. Intuition about "breaks" detects only continuity; differentiability also forbids corners and cusps.

**Answer.** $f(x) = |x|$ at $0$: continuous since $|f(x) - f(0)| = |x|$, not differentiable since the one-sided difference quotients are $-1$ and $1$. The true implication is differentiable $\Rightarrow$ continuous.

</details>

*Tags: limits-continuity, counterexample, differentiability*
