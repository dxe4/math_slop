# Complete information and an ancillary observation

*Hard · [Statistics and probability](index.md)*

In a dominated family, suppose $T$ is complete and sufficient and $A$ is a real-valued ancillary statistic, meaning its distribution is the same for every parameter. Assume sufficiency supplies a common parameter-independent conditional probability kernel for $A$ given $T$. Prove $T$ and $A$ are independent under every parameter.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and task-specific rubric reflection only; no automatic correctness verdict or required checkpoint evidence."}}
```

<details>
<summary>Hint 1</summary>

For a fixed Borel event of the ancillary statistic, condition its indicator on the sufficient statistic.

</details>

<details>
<summary>Hint 2</summary>

Subtract the parameter-independent ancillary probability and apply completeness to the resulting bounded function.

</details>

<details>
<summary>Model proof</summary>

Completeness turns every ancillary conditional probability into a constant.

1. Fix a Borel set $B\subseteq\mathbb R$, and let $k_B(T)=P_\theta(A\in B\mid T)$ be the common conditional kernel. Let $\nu(B)$ denote the ancillary marginal probability, independent of $\theta$.
2. The bounded function $h_B(t)=k_B(t)-\nu(B)$ has expectation zero under every parameter by the tower property. Completeness gives $h_B(T)=0$ $P_\theta$-almost surely for every $\theta$.
3. For any measurable set $D$ in the range of $T$, $P_\theta(T\in D,A\in B)=E_\theta[1_{\{T\in D\}}k_B(T)]=P_\theta(T\in D)\nu(B)$.
4. This holds for every pair of measurable events and every parameter, proving independence. A common null set simultaneously for all Borel $B$ is not required: the factorization is proved separately for each event pair.

**Self-assessment rubric**

- Use sufficiency and ancillarity to define a common bounded centered function.
- Apply completeness with the correct across-parameter quantifier.
- Derive the event factorization establishing independence.

</details>
