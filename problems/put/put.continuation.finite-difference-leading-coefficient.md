# Finite difference leading coefficient

*Hard · [Original Putnam-style training](index.md)*

If $P\in\mathbb R[x]$ has degree at most $d$, prove $\sum_{k=0}^d(-1)^{d-k}\binom dkP(k)=d!\,[x^d]P(x)$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict."}}
```

<details>
<summary>Hint 1</summary>

The alternating binomial sum is the $d$th forward difference at zero.

</details>

<details>
<summary>Hint 2</summary>

Compare its action on each monomial $x^j$, $0\le j\le d$.

</details>

<details>
<summary>Model proof</summary>

The binomial expansion of $(E-I)^d$ for the shift operator $EP(x)=P(x+1)$ gives $\Delta^dP(0)=\sum_{k=0}^d(-1)^{d-k}\binom dkP(k)$, proving the formula.

1. The forward difference $\Delta P(x)=P(x+1)-P(x)$ lowers the degree of a positive-degree polynomial by one and multiplies its leading coefficient by its old degree.
2. Iterating $d$ times gives the constant polynomial $\Delta^d P=d!\,[x^d]P$, with lower-degree terms killed.
3. The binomial expansion of $(E-I)^d$ for the shift operator $EP(x)=P(x+1)$ gives $\Delta^dP(0)=\sum_{k=0}^d(-1)^{d-k}\binom dkP(k)$, proving the formula.

**Self-assessment rubric**

- Show one forward difference lowers degree and scales the leading coefficient by the old degree.
- Iterate to obtain d! times the top coefficient.
- Expand the dth difference as the stated alternating binomial sum.

</details>
