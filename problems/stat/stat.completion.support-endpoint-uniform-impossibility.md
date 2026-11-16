# A pointwise consistent endpoint rule cannot be uniformly reliable

*Hard · [Statistics and probability](index.md)*

Let $\mathcal P$ be all real distributions with bounded support and let $b(P)$ be their right support endpoint. For any estimator $D_n$ from $n$ iid observations, allowing independent randomization, prove $\sup_{P\in\mathcal P}P^n(|D_n-b(P)|>1)\ge1/2$ for every $n$. Also prove that the sample maximum is nevertheless consistent for $b(P)$ at each fixed $P\in\mathcal P$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and task-specific rubric reflection only; no automatic correctness verdict or required checkpoint evidence."}}
```

<details>
<summary>Hint 1</summary>

Compare a point mass with a distribution that places a very small amount of mass far to its right.

</details>

<details>
<summary>Hint 2</summary>

On the all-zero sample the same estimator must serve two separated endpoint targets; compare their two disjoint accuracy regions.

</details>

<details>
<summary>Model proof</summary>

An undetected rare tail separates uniform endpoint inference from pointwise consistency.

1. Take $P_0=\delta_0$ and $Q_\varepsilon=(1-\varepsilon)\delta_0+\varepsilon\delta_3$. Their endpoints are zero and three. Under $Q_\varepsilon$, all observations are zero with probability $c=(1-\varepsilon)^n$, and conditional on that event the estimator has the same randomized law as under $P_0$.
2. Let $a=P_0^n(|D_n|\le1)$. The error under $P_0$ is $1-a$. Whenever $|D_n|\le1$, its distance from three is greater than one, so the error under $Q_\varepsilon$ is at least $ca$.
3. The larger error is at least $\max(1-a,ca)\ge c/(1+c)$. Taking $\varepsilon\downarrow0$ proves the supremum over the class is at least $1/2$ for this fixed $n$.
4. For any fixed bounded-support $P$ with endpoint $b$, the maximum $M_n$ satisfies $M_n\le b$ almost surely. For every $\eta>0$, the endpoint definition gives $P(X\le b-\eta)<1$, so $P(M_n\le b-\eta)=P(X\le b-\eta)^n\to0$. Thus $M_n\to b$ in probability. The distribution producing the uniform obstruction may change with $n$.

**Self-assessment rubric**

- Construct the two bounded-support laws and common observed-data component.
- Bound the two errors including estimator randomization.
- Optimize the elementary error bound and take the rare-tail limit.
- Prove pointwise consistency and distinguish its quantifiers.

</details>
