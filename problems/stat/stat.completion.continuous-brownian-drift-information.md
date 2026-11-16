# All path information about a constant Brownian drift

*Hard · [Statistics and probability](index.md)*

Observe the whole continuous path $X_t=\theta t+W_t$, $0\le t\le T$, with $T>0$ known and $W$ standard Brownian motion. Prove that the endpoint is sufficient for $\theta$, derive the path likelihood relative to zero drift, and compute the maximum-likelihood estimator and information. Justify why a finite-grid calculation determines the likelihood on the full path sigma-field.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and task-specific rubric reflection only; no automatic correctness verdict or required checkpoint evidence."}}
```

<details>
<summary>Hint 1</summary>

Factor the likelihood over independent increments on any grid that includes the final time.

</details>

<details>
<summary>Hint 2</summary>

Extend the resulting density identity from cylinder events; alternatively, examine the drift-free bridge after conditioning on the endpoint.

</details>

<details>
<summary>Model proof</summary>

The increment likelihood telescopes, and the remaining bridge has no drift information.

1. On a grid $0=t_0<\cdots<t_k=T$, each increment has variance $t_j-t_{j-1}$ and mean $\theta(t_j-t_{j-1})$. Its normal likelihood ratio is $\exp\{\theta(X_{t_j}-X_{t_{j-1}})-\theta^2(t_j-t_{j-1})/2\}$.
2. Multiplying gives $L_\theta=\exp(\theta X_T-\theta^2T/2)$, independent of the intervening grid. Under zero drift $X_T\sim N(0,T)$, so this candidate density has mean one.
3. Every cylinder event can be evaluated on a grid enlarged to include $T$, where the density identity holds. Cylinder events generate the continuous-path sigma-field; uniqueness of measures by a monotone-class argument extends the identity to all path events.
4. The likelihood factors through $X_T$, proving sufficiency. More explicitly, $B_t=X_t-(t/T)X_T=W_t-(t/T)W_T$ is jointly Gaussian with the endpoint, has zero cross-covariances, and hence is independent of it; its law is parameter free.
5. The log likelihood is $\theta X_T-\theta^2T/2$, uniquely maximized at $\widehat\theta=X_T/T$. Its score is $X_T-\theta T$, with variance $T$. Thus path information is $T$ and the estimator has variance $1/T$; extra observation times do not add information for this constant-drift parameter.

**Self-assessment rubric**

- Compute the exact finite-grid likelihood ratio.
- Justify the extension from cylinder events to the full path law.
- Establish sufficiency or the equivalent independent-bridge decomposition.
- Compute the maximizer and Fisher information.

</details>
