# Turn convergence in probability into L1 convergence

*Medium · [Probability problems](index.md)*

Let $(X_n)$ be uniformly integrable real random variables and $X_n\to X$ in probability. Prove $X\in L^1$ and $E|X_n-X|\to0$. You may use the almost-sure subsequence principle, Fatou's lemma and bounded truncations.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or required graded evidence."}}
```

<details>
<summary>Hint 1</summary>

Uniform integrability first gives a uniform bound on the first absolute moments.

</details>

<details>
<summary>Hint 2</summary>

Clip both variables at a fixed height, control the bounded difference in probability, and then remove both tails.

</details>

<details>
<summary>Model proof</summary>

Truncation separates a bounded convergence argument from uniformly small tails.

1. Uniform integrability implies $\sup_nE|X_n|<\infty$. Choose an almost-surely convergent subsequence and apply Fatou to conclude $E|X|\le\liminf E|X_{n_j}|<\infty$.
2. Let $T_K(x)=\max(-K,\min(x,K))$. Its Lipschitz continuity gives $T_K(X_n)\to T_K(X)$ in probability. For every $\epsilon>0$, the expected absolute difference is at most $\epsilon+2K\,P(|T_K(X_n)-T_K(X)|>\epsilon)$, so it tends to zero.
3. The triangle inequality bounds $E|X_n-X|$ by that clipped difference plus $E(|X_n|1_{\{|X_n|>K\}})+E(|X|1_{\{|X|>K\}})$. The first tail is uniformly small by uniform integrability and the second tends to zero because $X\in L^1$. First let $n$ and then $K$ tend to infinity.

**Self-assessment rubric**

- Use uniform moment boundedness and an almost-sure subsequence to prove integrability of the limit.
- Prove the clipped differences converge in expectation from their boundedness and probability convergence.
- Control both tails in the correct order of limits.

</details>
