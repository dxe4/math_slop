# Prove induction and well-ordering imply one another

*Hard · [Foundations bridge](index.md)*

Prove the ordinary induction principle on nonnegative integers is equivalent to the well-ordering statement “every nonempty set of positive integers has a least element.” Give both directions. In the induction direction you may use the elementary order fact that every integer from $1$ through $n+1$ is either at most n or equals n+1.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

From well-ordering, choose a least counterexample to an induction claim.

</details>

<details>
<summary>Hint 2</summary>

From induction, assume a nonempty positive-integer set has no least member and prove by induction that it contains no integer from 1 through n.

</details>

<details>
<summary>Model proof</summary>

Least-counterexample arguments and induction exclude the same possibility in two different forms.

1. Assume well-ordering and suppose P(0) and all steps P(n)⇒P(n+1) hold. If any P fails, its counterexample indices are positive integers because P(0) holds. Choose the least failing index m. Then m−1≥0 and is not a counterexample, so P(m−1) holds and the induction step gives P(m), a contradiction.
2. Conversely assume induction. Suppose a nonempty set A of positive integers has no least element. Let Q(n) mean that none of 1,…,n belongs to A, with Q(0) vacuous.
3. If Q(n) holds and n+1 belonged to A, it would be the least member because no smaller positive integer is in A. Thus n+1 is not in A, and Q(n+1) holds. Induction proves Q(n) for every n≥0.
4. But A was nonempty, so choose a∈A. The statement Q(a) says that a is not in A, a contradiction. Hence every nonempty such A has a least member, proving the converse and the equivalence.

**Self-assessment rubric**

- Derives induction from a least positive failing index and checks its predecessor.
- Defines the no-member prefix property with a valid vacuous base.
- Uses absence of a least member to prove the induction step.
- Contradicts a chosen member of A and completes both implication directions.

</details>
