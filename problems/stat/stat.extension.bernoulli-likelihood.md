# Bernoulli likelihood

*Easy · [Statistics and probability](index.md)*

Two independent $\operatorname{Bernoulli}(p)$ observations, in order, are $1$ and $0$. At $p=1/4$, what is their ordered-data likelihood?

```answer
{"answer":{"kind":"rational","expected":{"numerator":3,"denominator":16},"checker_scope":"Checks only the requested exact finite answer under the stated model; it does not certify the reasoning or modeling assumptions."}}
```

<details>
<summary>Hint 1</summary>

The data specify a particular ordered pair, rather than just a success count.

</details>

<details>
<summary>Hint 2</summary>

Use independence to multiply the probability of the first outcome by that of the second.

</details>

<details>
<summary>Worked solution</summary>

Evaluate the product probability for the particular ordered observations.

1. For the observed ordered pair, $L(p)=P_p(X_1=1,X_2=0)=p(1-p)$.
2. At $p=1/4$ this is $(1/4)(3/4)=3/16$.
3. There is no factor of two: that factor would apply to the unordered event of exactly one success in two trials, which includes a second ordered pair.

</details>
