# Separate finite likelihood ratios from an infinite product density

*Medium · [Probability problems](index.md)*

On $\Omega=\{0,1\}^{\mathbb N}$ with its product sigma-field, let $P$ make the coordinates $X_k$ iid Bernoulli$(1/2)$ and $Q$ make them iid Bernoulli$(3/4)$. Put $\mathcal F_n=\sigma(X_1,\ldots,X_n)$, $S_n=\sum_{k=1}^nX_k$, and $Z_n=(3/2)^{S_n}(1/2)^{n-S_n}$. Prove that $Z_n=d(Q|_{\mathcal F_n})/d(P|_{\mathcal F_n})$ and that $(Z_n)$ is a mean-one $P$-martingale. Determine its $P$-almost-sure limit, show it is not uniformly integrable, and prove $P$ and $Q$ are mutually singular on the full sigma-field. You may use the strong law for iid Bernoulli variables.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and task-specific rubric reflection only; no automatic correctness verdict, required graded slot or checkpoint evidence."}}
```

<details>
<summary>Hint 1</summary>

Compare the two probabilities of an individual finite coordinate word, then condition the next multiplicative likelihood factor on the past.

</details>

<details>
<summary>Hint 2</summary>

Take logarithms before using the strong law. For singularity, compare the events describing limiting empirical frequencies under the two laws, rather than assuming finite-level equivalence persists on the infinite product.

</details>

<details>
<summary>Model proof</summary>

Finite restrictions can be equivalent at every level even when their infinite product laws concentrate on disjoint asymptotic events.

1. A length-$n$ word with $r$ ones has $P$-mass $2^{-n}$ and $Q$-mass $(3/4)^r(1/4)^{n-r}$, whose ratio is the stated $Z_n$. Finite unions of these atoms identify the restricted density. Moreover $Z_{n+1}/Z_n$ equals $3/2$ or $1/2$ with conditional probabilities $1/2$ each under $P$, so $E_P[Z_{n+1}\mid\mathcal F_n]=Z_n$ and $E_PZ_n=1$.
2. Under $P$, $S_n/n\to1/2$ almost surely. Therefore $n^{-1}\log Z_n\to\tfrac12\log(3/2)+\tfrac12\log(1/2)=\tfrac12\log(3/4)<0$. It follows that $Z_n\to0$ almost surely, in fact at an exponential rate along almost every path.
3. If the family were uniformly integrable, fix $K$ and split $E_PZ_n\le E_P[\min(Z_n,K)]+E_P[Z_n1_{\{Z_n>K\}}]$. The first term tends to zero by bounded convergence; the second would be uniformly small for large $K$. This contradicts the constant expectation one. Thus these finite likelihoods are not uniformly integrable and their zero limit is not a density of $Q$.
4. The tail event $A=\{\lim_n S_n/n=1/2\}$ satisfies $P(A)=1$. Under $Q$, the strong law instead gives limit $3/4$, so $Q(A)=0$. Hence $P$ is concentrated on $A$ and $Q$ on its complement, proving mutual singularity on the full product sigma-field despite equivalence on each $\mathcal F_n$.

**Self-assessment rubric**

- Identify the finite restricted Radon–Nikodym derivatives and prove their conditional mean-one property.
- Compute the almost-sure logarithmic rate under $P$ and deduce the correct likelihood limit.
- Explain rigorously why the constant means cannot pass to the almost-sure limit through uniform integrability.
- Exhibit a full-measure event for one infinite product law that has zero measure for the other.

</details>
