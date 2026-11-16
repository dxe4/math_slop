# Minimize conditional squared error in the correct weighted space

*Medium · [Probability problems](index.md)*

Let $W>0$ almost surely, $E_PW=1$, and $E_P[WX^2]<\infty$ for a real measurable $X$. For a sub-sigma-field $\mathcal G$, minimize $E_P[W(X-Y)^2]$ over $\mathcal G$-measurable real $Y$ with $E_P[WY^2]<\infty$. Derive the minimizer in terms of $E_P[WX\mid\mathcal G]$ and $E_P[W\mid\mathcal G]$, prove the exact weighted Pythagorean identity, and state the almost-sure uniqueness measure. Neither $X$ nor admissible $Y$ is assumed to belong to $L^2(P)$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and task-specific rubric reflection only; no automatic correctness verdict, required graded slot or checkpoint evidence."}}
```

<details>
<summary>Hint 1</summary>

Make the weight part of a probability measure before choosing a Hilbert space. Verify which first and second moments are then finite.

</details>

<details>
<summary>Hint 2</summary>

Use conditional change of measure to express that law's conditional mean. For the risk decomposition, extend bounded measurable orthogonality to the admissible difference by $L^2$ truncation.

</details>

<details>
<summary>Model proof</summary>

Weighted least squares is ordinary conditional projection under the probability law defined by the weight.

1. Define $Q$ by $dQ=W\,dP$. Then $P,Q$ are equivalent, $X\in L^2(Q)$, and the admissible class is exactly the $\mathcal G$-measurable part of $L^2(Q)$. Weighted Cauchy–Schwarz gives $E_P|WX|\le(E_PW)^{1/2}(E_P[WX^2])^{1/2}<\infty$, so the conditional numerator is meaningful. The denominator $w=E_P[W\mid\mathcal G]$ is finite and strictly positive almost surely.
2. Conditional change of measure identifies $m=E_Q[X\mid\mathcal G]=E_P[WX\mid\mathcal G]/w$ up to null sets. Conditional Jensen under $Q$ shows $E_P[Wm^2]=E_Q[m^2]\le E_Q[X^2]$, so $m$ is admissible even if it is not $P$-square-integrable.
3. For bounded $\mathcal G$-measurable $V$, $E_Q[(X-m)V]=0$. Truncate any $V\in L^2(Q,\mathcal G)$ and use Cauchy–Schwarz to retain this identity in the limit. Taking $V=Y-m$ and expanding the square gives $E_P[W(X-Y)^2]=E_P[W(X-m)^2]+E_P[W(Y-m)^2]$. All terms are finite in the specified weighted space.
4. The last term is nonnegative and vanishes exactly when $Y=m$ $Q$-almost surely. Since $W>0$ $P$-almost surely, equivalence makes this the same as $P$-almost-sure equality. Thus $m$ uniquely minimizes the risk up to either law's null sets. An unweighted $P$ conditional mean need not have this minimization property.

**Self-assessment rubric**

- Choose $Q=W P$, justify numerator integrability and denominator positivity, and keep the admissible class in $L^2(Q)$.
- Derive the conditional ratio and prove it is an admissible weighted-square-integrable variable.
- Justify unbounded $L^2(Q)$ test factors and derive the exact risk decomposition.
- Identify the equality case and use strict positivity to specify the correct almost-sure uniqueness.

</details>
