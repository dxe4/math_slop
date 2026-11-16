# Fatou's inequality for eventual membership

*Medium · [Probability problems](index.md)*

For measurable events $(A_n)_{n\ge1}$, define $\liminf_nA_n=\bigcup_{N\ge1}\bigcap_{n\ge N}A_n$. Using Fatou's lemma on indicators, prove $P(\liminf_nA_n)\le\liminf_nP(A_n)$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or graded objective evidence."}}
```

<details>
<summary>Hint 1</summary>

Interpret the event liminf as membership in every event after some finite cutoff.

</details>

<details>
<summary>Hint 2</summary>

Check the pointwise liminf of the zero-one indicators in both membership cases, then apply nonnegative Fatou.

</details>

<details>
<summary>Model proof</summary>

Convert eventual event membership into an indicator limit.

1. If an outcome is in $\liminf_nA_n$, it belongs to every $A_n$ after some cutoff, so its indicator sequence is eventually one and has liminf one.
2. If it is outside that event, it fails membership for arbitrarily large indices; its indicator sequence therefore has liminf zero. Thus $\mathbf1_{\liminf_nA_n}=\liminf_n\mathbf1_{A_n}$ pointwise.
3. The indicators are measurable and nonnegative, so Fatou gives $E[\liminf_n\mathbf1_{A_n}]\le\liminf_nE[\mathbf1_{A_n}]$. Replacing indicator expectations by event probabilities proves the inequality. No pointwise convergence of the original indicator sequence is assumed.

The liminf event indicator is the pointwise indicator liminf; Fatou yields the requested probability inequality.

**Self-assessment rubric**

- Interpret the event liminf using eventual membership.
- Prove the pointwise identity in both eventual-membership and infinitely-many-failure cases.
- Apply Fatou with its correct direction and translate expectations to probabilities.

</details>
