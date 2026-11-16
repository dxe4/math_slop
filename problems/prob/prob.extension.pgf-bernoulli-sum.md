# A generating-polynomial coefficient

*Medium · [Probability problems](index.md)*

Let $X,Y$ be independent Bernoulli variables with success probability $1/2$. Find the coefficient of $s$ in the probability generating polynomial $E[s^{X+Y}]$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":2},"checker_scope":"Checks this polynomial coefficient only, not a symbolic polynomial identity."}}
```

<details>
<summary>Hint 1</summary>

Write down the generating polynomial of one fair Bernoulli variable.

</details>

<details>
<summary>Hint 2</summary>

Independence gives the product of the two polynomials. Collect the terms containing exactly one factor of $s$.

</details>

<details>
<summary>Worked solution</summary>

Multiply two Bernoulli generating polynomials.

1. Each variable has generating polynomial $E[s^X]=(1+s)/2$.
2. Independence gives $E[s^{X+Y}]=E[s^X]E[s^Y]=(1+2s+s^2)/4$.
3. The coefficient of $s$ is $2/4=1/2$. It is also $P(X+Y=1)$, the combined probability of the two disjoint patterns $(0,1)$ and $(1,0)$.

The polynomial is $(1+2s+s^2)/4$, with linear coefficient $1/2$.

</details>
