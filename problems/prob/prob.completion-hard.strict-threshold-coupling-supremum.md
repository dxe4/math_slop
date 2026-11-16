# Distinguish a strict tail supremum from its non-strict analogue

*Hard · [Probability problems](index.md)*

Over all couplings of two uniform $[0,1]$ variables $U,V$, determine $\sup P(U+V>1)$ and whether this supremum is attained. Compare with $\sup P(U+V\ge1)$, including attainment. Give an explicit family of couplings for the strict case.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft with task-specific semantic rubric; no automatic correctness verdict or checkpoint evidence."}}
```

<details>
<summary>Hint 1</summary>

A coupling with only two possible sums can place nearly all mass just above the threshold.

</details>

<details>
<summary>Hint 2</summary>

Use a measure-preserving reflected rotation of the unit interval, and use the fixed expectation of the sum to rule out one limiting possibility.

</details>

<details>
<summary>Model proof</summary>

A strict event permits an unattainable limiting extremum that differs from the boundary-supported non-strict construction.

1. For $0<\epsilon<1$, take $U$ uniform and set $V=(\epsilon-U)\bmod1$, with the residue in $[0,1)$. Reflection on the two intervals cut at $\epsilon$ preserves Lebesgue measure, so $V$ is uniform.
2. For $U<\epsilon$ the sum is $\epsilon$; for $U>\epsilon$ it is $1+\epsilon$. Thus $P(U+V>1)=1-\epsilon\to1$.
3. Probability one in the strict event is impossible: then the integrable variable $U+V-1$ would be strictly positive almost surely and have positive expectation, whereas $EU+EV-1=0$. The strict supremum is therefore $1$ and is not attained.
4. For the non-strict event choose $V=1-U$. The sum is identically $1$, so probability $1$ is attained. The difference is caused by the boundary event, not by different marginals.

**Self-assessment rubric**

- Construct and justify a measure-preserving coupling family.
- Compute the strict-tail probabilities and their limiting value.
- Prove that no coupling attains probability one for the strict event.
- Give an attaining non-strict coupling and distinguish its event from the strict case.

</details>
