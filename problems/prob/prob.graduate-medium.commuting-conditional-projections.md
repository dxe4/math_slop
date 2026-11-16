# Compose projections onto conditionally independent information

*Medium · [Probability problems](index.md)*

Let $\mathcal C\subseteq\mathcal A\cap\mathcal B$ be sub-sigma-fields of a probability space. Assume that for every bounded $\mathcal A$-measurable $U$ and bounded $\mathcal B$-measurable $V$, $E[UV\mid\mathcal C]=E[U\mid\mathcal C]E[V\mid\mathcal C]$. For $X\in L^2$, prove $E[E[X\mid\mathcal B]\mid\mathcal A]=E[X\mid\mathcal C]$ and the identity with $\mathcal A,\mathcal B$ interchanged. Thus identify the composition of the two $L^2$ conditional-expectation projections.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and task-specific rubric reflection only; no automatic correctness verdict, required graded slot or checkpoint evidence."}}
```

<details>
<summary>Hint 1</summary>

Begin with a bounded $\mathcal A$-measurable variable. Test its conditional expectation onto $\mathcal B$ against bounded $\mathcal B$-measurable variables.

</details>

<details>
<summary>Hint 2</summary>

For arbitrary $X$, test the desired equality against bounded $\mathcal A$-measurable variables and move a conditional expectation from one factor to the other. Track which factor is measurable at each move.

</details>

<details>
<summary>Model proof</summary>

Conditional independence collapses information shared by the two projections to the conditioning sigma-field.

1. For bounded $U$ measurable with respect to $\mathcal A$ and bounded $V$ measurable with respect to $\mathcal B$, the assumption gives $E[UV]=E[E[U\mid\mathcal C]E[V\mid\mathcal C]]=E[E[U\mid\mathcal C]V]$. As $E[U\mid\mathcal C]$ is $\mathcal B$-measurable, the defining tests show $E[U\mid\mathcal B]=E[U\mid\mathcal C]$.
2. Write $Y=E[E[X\mid\mathcal B]\mid\mathcal A]$. For bounded $\mathcal A$-measurable $U$, conditional-expectation identities yield $E[UY]=E[U E[X\mid\mathcal B]]=E[E[U\mid\mathcal B]X]=E[E[U\mid\mathcal C]X]=E[U E[X\mid\mathcal C]]$. All products are integrable since $U$ and its conditional expectations are bounded and $X\in L^2\subseteq L^1$.
3. Both $Y$ and $E[X\mid\mathcal C]$ are $\mathcal A$-measurable, so the bounded-event tests identify them almost surely. Repeating with $\mathcal A,\mathcal B$ exchanged proves the second identity. Conditional Jensen puts every projection in $L^2$, and their two compositions are therefore the same operator, namely projection onto $L^2(\mathcal C)$.

**Self-assessment rubric**

- Derive $E[U\mid\mathcal B]=E[U\mid\mathcal C]$ for bounded $\mathcal A$-measurable $U$ from the stated independence assumption.
- Test an arbitrary $L^2$ input against bounded variables and justify each measurable-factor move.
- Apply conditional-expectation uniqueness and symmetry, retaining the $L^2$ domain and almost-sure interpretation.

</details>
