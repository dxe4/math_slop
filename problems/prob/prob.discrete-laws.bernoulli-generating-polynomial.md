# A Bernoulli generating polynomial

*Easy · [Probability problems](index.md)*

Let $X$ take value $1$ with probability $1/3$ and value $0$ otherwise. Find the polynomial $E[x^X]$, with no excluded real inputs.

```answer
{"answer":{"kind":"expression","expected":"(2+x)/3","domain":{"variable":"x","excluded":[]},"checker_scope":"Exact answer for the stated probability model only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Average the power for each of the two possible support values.

</details>

<details>
<summary>Hint 2</summary>

The zero support value contributes a constant term, not zero.

</details>

<details>
<summary>Worked solution</summary>

A probability generating polynomial weights each power by its probability mass.

1. The mass at $0$ is $2/3$, while the mass at $1$ is $1/3$.
2. Therefore $E[x^X]=(2/3)x^0+(1/3)x$.
3. The requested polynomial is $(2+x)/3$, defined for every real $x$.

</details>
