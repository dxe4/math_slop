# Stationarity does not force convergence from a point

*Medium · [Probability problems](index.md)*

For the deterministic two-state chain $0\to1\to0$, prove that its stationary law is $(1/2,1/2)$, but its one-time distribution starting from $X_0=0$ does not converge to that law.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or graded objective evidence."}}
```

<details>
<summary>Hint 1</summary>

The transition swaps the two coordinates of any probability vector.

</details>

<details>
<summary>Hint 2</summary>

Compute the state at every even and every odd time from the specified point initial condition; compare the resulting subsequences of marginal probabilities.

</details>

<details>
<summary>Model proof</summary>

Invariance concerns one initial law, while a point start produces alternating marginals.

1. A probability vector $(a,1-a)$ is sent to $(1-a,a)$. It is invariant exactly when $a=1-a$, giving the unique stationary law $(1/2,1/2)$.
2. From $X_0=0$, deterministic alternation gives $X_{2m}=0$ and $X_{2m+1}=1$ almost surely for every $m\ge0$.
3. Consequently $P_0(X_n=0)$ alternates between one and zero and has no limit, in particular no limit $1/2$. Thus the marginal law does not converge to the stationary law; the period-two obstruction is explicit. Starting in the stationary law would instead keep that law invariant.

The invariant law has equal masses, but point-start marginals alternate between the two point masses and do not converge.

**Self-assessment rubric**

- Solve the coordinate-swap invariance equation with normalisation.
- Compute the even- and odd-time states under the point initial condition.
- Use the distinct subsequential state probabilities to disprove convergence, distinguishing stationary initialisation.

</details>
