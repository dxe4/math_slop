# Bonferroni proof

*Easy · [Statistics and probability](index.md)*

Let $m\ge1$ be an integer and $0\le\alpha\le1$. In a family of $m$ tests, assume every true null is rejected with probability at most $\alpha/m$ under the actual joint parameter configuration. Prove that the probability of at least one false rejection is at most $\alpha$, under arbitrary dependence.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Only tests whose null hypotheses are actually true contribute to a false rejection.

</details>

<details>
<summary>Hint 2</summary>

Apply the union bound to that subset, then bound its size by the total number of tests.

</details>

<details>
<summary>Model proof</summary>

Sum the valid true-null error bounds, allowing any subset of the family to be true.

1. Let $I_0\subseteq\{1,\ldots,m\}$ index the true nulls, and let $E_j$ be rejection of test $j$ for $j\in I_0$.
2. The familywise error event is $\bigcup_{j\in I_0}E_j$. If $I_0$ is empty its probability is zero.
3. Otherwise the union bound gives $P(\bigcup_{j\in I_0}E_j)\le\sum_{j\in I_0}P(E_j)\le |I_0|\alpha/m\le\alpha$.
4. The inequality uses no independence. The assumed individual validity must hold under the actual configuration, including when other nulls are false.

**Self-assessment rubric**

- Define the true-null subset and familywise false-rejection event.
- Apply the union bound without an independence claim.
- Use the true-null subset size and include the empty-subset case.

</details>
