# Prove exact coupling optimality for coordinate refresh

*Hard · [Probability problems](index.md)*

On $\{0,1\}^d$, a Markov step chooses coordinate $i$ with probability $w_i>0$, $\sum_iw_i=1$, and replaces it by an independent Bernoulli($p_i$) bit, $0<p_i<1$. For starting states $x,y$, let $P_x^t,P_y^t$ be the laws after $t$ steps. Determine the minimum of $E[d_H(U,V)]$ over every coupling $(U,V)$ of these two laws. Construct an attaining coupling and prove a matching lower bound without assuming a transport duality theorem.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft with task-specific semantic rubric; no automatic correctness verdict or checkpoint evidence."}}
```

<details>
<summary>Hint 1</summary>

Share both the selected coordinate and its replacement bit between the two chains.

</details>

<details>
<summary>Hint 2</summary>

Choose a linear function with coordinate signs determined by $x-y$. Its change is bounded by Hamming distance.

</details>

<details>
<summary>Model proof</summary>

Synchronous refresh gives an upper bound; a signed coordinate statistic makes it optimal.

1. Run the two chains with identical selected coordinates and identical fresh bits. A coordinate initially equal remains equal, while an initial discrepancy disappears at its first selection and never returns. Thus the expected Hamming distance at time $t$ is $\sum_{i:x_i\ne y_i}(1-w_i)^t$.
2. For each coordinate, the marginal recursion gives $E_x X_i(t)=p_i+(x_i-p_i)(1-w_i)^t$. Hence the difference of the two coordinate expectations is $(x_i-y_i)(1-w_i)^t$. No independence of coordinates at a fixed time is required.
3. Define $f(z)=\sum_{i:x_i\ne y_i}(x_i-y_i)z_i$. Each coefficient has absolute value one, so $|f(u)-f(v)|\le d_H(u,v)$ for every two states.
4. For any coupling, $E d_H(U,V)\ge E[f(U)-f(V)]=\sum_{i:x_i\ne y_i}(x_i-y_i)^2(1-w_i)^t$. This equals the upper bound from synchronous refresh, proving the exact minimum for all $t\ge0$.

**Self-assessment rubric**

- Preserve the correct marginals and identify precisely when each discrepancy disappears.
- Derive the coordinate means for the possibly dependent chain state.
- Construct a signed statistic and apply its pointwise bound to every coupling.

</details>
