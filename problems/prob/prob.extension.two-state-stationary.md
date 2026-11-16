# Stationarity with unequal crossing rates

*Medium · [Probability problems](index.md)*

A homogeneous chain on $\{0,1\}$ has $P_{01}=1/4$ and $P_{10}=1/2$, with each remaining row probability on its self-transition. Find the stationary probability of state $1$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":3},"checker_scope":"Checks the stationary state-one mass for this two-state matrix only."}}
```

<details>
<summary>Hint 1</summary>

In a stationary two-state law, the probability flow across the state boundary balances.

</details>

<details>
<summary>Hint 2</summary>

Combine the balance equation with the requirement that the two stationary masses sum to one.

</details>

<details>
<summary>Worked solution</summary>

Balance the two crossing flows.

1. Writing the stationary vector as $(\pi_0,\pi_1)$, the state-one equation gives $\pi_1=\pi_0/4+\pi_1/2$, hence $\pi_0/4=\pi_1/2$.
2. Thus $\pi_0=2\pi_1$, and normalisation gives $3\pi_1=1$.
3. The solution is $(2/3,1/3)$, which is nonnegative and satisfies the stationarity equations. The requested state-one mass is $1/3$.

Stationary balance gives masses $2/3$ and $1/3$.

</details>
