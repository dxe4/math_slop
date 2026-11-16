# Condition from finer information to coarser

*Medium · [Probability problems](index.md)*

Let $\mathcal H\subseteq\mathcal G$ be sub-sigma-algebras and let $X$ be integrable. Prove $E[E[X\mid\mathcal G]\mid\mathcal H]=E[X\mid\mathcal H]$ almost surely.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or graded objective evidence."}}
```

<details>
<summary>Hint 1</summary>

Check that the outer conditional expectation is an integrable $\mathcal H$-measurable candidate.

</details>

<details>
<summary>Hint 2</summary>

Test it against an event in $\mathcal H$ and apply both defining integral identities, using the inclusion of sigma-algebras.

</details>

<details>
<summary>Model proof</summary>

The nested candidate satisfies the defining identities at the coarser information level.

1. Let $M=E[X\mid\mathcal G]$ and $N=E[M\mid\mathcal H]$. Conditional expectations of integrable variables are integrable, and $N$ is $\mathcal H$-measurable.
2. For every $A\in\mathcal H$, the outer definition gives $E[N\mathbf1_A]=E[M\mathbf1_A]$. Since $A\in\mathcal G$ as well, the inner definition gives $E[M\mathbf1_A]=E[X\mathbf1_A]$.
3. Thus $N$ is an integrable $\mathcal H$-measurable variable with the same test-event integrals as $X$. Uniqueness identifies $N=E[X\mid\mathcal H]$ almost surely. The inclusion of information fields is essential to the second identity.

Testing against a coarser event applies both defining identities, so the result is direct conditioning on the coarser information.

**Self-assessment rubric**

- Check integrability and measurability of the nested conditional candidate.
- Apply the outer and inner integral identities in order, using the information inclusion.
- Identify the candidate by conditional-expectation uniqueness on the coarser sigma-algebra.

</details>
