# Half the mass of a symmetric continuous law

*Easy · [Probability problems](index.md)*

A real variable $Z$ has a continuous distribution function and satisfies $Z\overset{d}=-Z$. Find $P(Z\le0)$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":2},"checker_scope":"Checks the half-line probability under symmetry and absence of atoms only; normality is not assumed."}}
```

<details>
<summary>Hint 1</summary>

Symmetry relates the probabilities of the two open half-lines.

</details>

<details>
<summary>Hint 2</summary>

Continuity of the distribution function rules out an atom at zero. The two open half-lines therefore exhaust the mass.

</details>

<details>
<summary>Worked solution</summary>

Symmetry divides the mass equally once the central atom is excluded.

1. The distributional equality gives $P(Z<0)=P(-Z<0)=P(Z>0)$.
2. A continuous distribution function has no jump at zero, hence $P(Z=0)=0$.
3. The equal open-half-line probabilities sum to one, so each is $1/2$. Including zero does not change the left-half-line probability, giving $P(Z\le0)=1/2$.

Equal left and right masses and zero mass at the origin give $P(Z\le0)=1/2$.

</details>
