# Identify the probabilistic projection in a mean ergodic theorem

*Medium · [Probability problems](index.md)*

Let $T:\Omega\to\Omega$ be an invertible bimeasurable probability-preserving transformation. Put $\mathcal I=\{A\in\mathcal F:P(T^{-1}A\mathbin{\triangle}A)=0\}$ and $Uf=f\circ T$ on real $L^2(P)$. You may use the Hilbert-space mean ergodic theorem: Cesàro averages of a unitary operator converge in norm to orthogonal projection onto its fixed subspace. Prove that $\mathcal I$ is a sigma-field, identify $\ker(I-U)$ with $L^2(\mathcal I)$, and deduce $\frac1n\sum_{k=0}^{n-1}f\circ T^k\to E[f\mid\mathcal I]$ in $L^2$. Equalities of functions are modulo null sets.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and task-specific rubric reflection only; no automatic correctness verdict, required graded slot or checkpoint evidence."}}
```

<details>
<summary>Hint 1</summary>

For a fixed function, examine its rational upper-level sets. For the converse direction, begin with indicators of invariant events and use the $L^2$ continuity of composition.

</details>

<details>
<summary>Hint 2</summary>

Identify the fixed subspace before invoking the named Hilbert-space theorem. The conditional expectation is characterized by orthogonality to the corresponding measurable subspace.

</details>

<details>
<summary>Model proof</summary>

The fixed vectors of a measure-preserving transformation are precisely functions of its invariant information.

1. The empty set is invariant. Taking complements preserves symmetric-difference nullity, and the symmetric difference for a countable union is contained in the union of the individual symmetric differences. Hence $\mathcal I$ is a sigma-field. Probability preservation makes $U$ an isometry, and the bimeasurable inverse supplies its inverse isometry, so $U$ is unitary.
2. If $Uf=f$ almost surely, then for each rational $q$, the events $\{f>q\}$ and $T^{-1}\{f>q\}$ differ only on a null set. These upper-level sets belong to $\mathcal I$, proving that $f$ has an $\mathcal I$-measurable representative. Conversely, indicators of $\mathcal I$-events are fixed almost surely. Simple-function approximation and continuity of $U$ show that every $L^2(\mathcal I)$ function is fixed. Thus the two closed subspaces coincide.
3. For $f\in L^2$, conditional Jensen gives $E[f\mid\mathcal I]\in L^2(\mathcal I)$, and the defining integral identity, first for bounded measurable tests and then by $L^2$ approximation, makes $f-E[f\mid\mathcal I]$ orthogonal to that subspace. It is therefore the orthogonal projection. The stated mean ergodic theorem now gives the required norm convergence. No pointwise ergodic theorem or triviality of $\mathcal I$ was assumed.

**Self-assessment rubric**

- Check sigma-field closure modulo null sets and show the Koopman operator is unitary under the stated invertibility assumptions.
- Identify both directions of the fixed-space characterization using rational level sets and approximation.
- Identify the orthogonal projection as conditional expectation and apply exactly the stated norm mean-ergodic theorem.

</details>
