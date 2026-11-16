# A mean under stationary initialisation

*Easy · [Probability problems](index.md)*

A homogeneous chain has states $0,1$ and invariant probability vector $\pi=(2/5,3/5)$. It is initialised with $X_0\sim\pi$. Find $E[X_t]$ at any integer time $t\ge0$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":3,"denominator":5},"checker_scope":"Checks the mean at a time under invariant initialisation only; fixed-state initialisation is outside this contract."}}
```

<details>
<summary>Hint 1</summary>

An invariant initial distribution remains the marginal distribution at each time.

</details>

<details>
<summary>Hint 2</summary>

Average the numeric state values against those marginal masses.

</details>

<details>
<summary>Worked solution</summary>

Stationary initialisation keeps the one-time marginal fixed.

1. Since $\pi P=\pi$ and $X_0\sim\pi$, induction gives $X_t\sim\pi$ for each integer $t\ge0$.
2. State zero contributes $0(2/5)$ to the mean and state one contributes $1(3/5)$.
3. Thus $E[X_t]=3/5$ for every such time. Existence of an invariant vector alone would not justify this answer from an arbitrary initial state.

Every one-time mean equals $0(2/5)+1(3/5)=3/5$.

</details>
