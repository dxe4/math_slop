# Evidence for a hidden state

*Medium · [Probability problems](index.md)*

A hidden state $X$ is equally likely to be $0$ or $1$. Evidence $E$ has likelihoods $P(E\mid X=1)=2/3$ and $P(E\mid X=0)=1/3$. Find $P(X=1\mid E)$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":2,"denominator":3},"checker_scope":"Checks the posterior state-one probability for this evidence model only; no decision threshold is inferred."}}
```

<details>
<summary>Hint 1</summary>

Calculate evidence mass contributed by each hidden state.

</details>

<details>
<summary>Hint 2</summary>

The observation requires renormalising those joint masses; the denominator includes both states.

</details>

<details>
<summary>Worked solution</summary>

Normalise the evidence-weighted prior masses.

1. The state-one evidence mass is $(1/2)(2/3)=1/3$, while the state-zero evidence mass is $(1/2)(1/3)=1/6$.
2. Their sum is $P(E)=1/3+1/6=1/2>0$.
3. Thus $P(X=1\mid E)=(1/3)/(1/2)=2/3$. No threshold decision is requested; the result is the posterior probability itself.

The compatible joint masses are $1/3$ and $1/6$, so the state-one posterior is $2/3$.

</details>
