# An optimal test that must randomize

*Hard · [Statistics and probability](index.md)*

On outcomes $a,b,c$, the simple null has probabilities $(1/2,1/3,1/6)$ and the alternative has probabilities $(1/6,1/3,1/2)$. Among all tests $\varphi(a),\varphi(b),\varphi(c)\in[0,1]$ of null size at most $1/4$, find the largest alternative rejection probability, construct an attaining test, and prove optimality against every randomized competitor.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and task-specific rubric reflection only; no automatic correctness verdict or required checkpoint evidence."}}
```

<details>
<summary>Hint 1</summary>

Compare the alternative probability gained per unit of null rejection probability at each outcome.

</details>

<details>
<summary>Hint 2</summary>

To prove a global bound, subtract a multiple of the null size from the power and examine the sign of each coefficient.

</details>

<details>
<summary>Model proof</summary>

An intermediate likelihood-ratio outcome absorbs the remaining size budget.

1. The likelihood ratios at $a,b,c$ are $1/3,1,3$. Allocate rejection first to $c$: full rejection there consumes null probability $1/6$, leaving $1/12$.
2. The remaining budget is achieved by rejection probability $1/4$ at $b$ and zero at $a$. The resulting $\varphi_*$ has size $1/6+(1/3)(1/4)=1/4$ and power $1/2+(1/3)(1/4)=7/12$.
3. For any feasible $\varphi$, let $L=dP_1/dP_0$. Then $E_1(\varphi_*-\varphi)=E_0[(L-1)(\varphi_*-\varphi)]+E_0(\varphi_*-\varphi)$.
4. The last term is nonnegative by the size bound. In the first term, the contribution at $a$ is nonnegative because both factors are nonpositive, the one at $c$ is nonnegative because both are nonnegative, and the one at $b$ is zero. Thus no competitor has greater power.
5. Equality forces zero rejection at $a$, full rejection at $c$, and exact use of the size budget, hence rejection probability $1/4$ at $b$. Randomization is essential to this unique optimum.

**Self-assessment rubric**

- Identify the probability gain per unit of null size.
- Construct a feasible test and compute its power.
- Prove a global upper bound rather than just compare deterministic tests.
- Explain the equality conditions and necessity of randomization.

</details>
