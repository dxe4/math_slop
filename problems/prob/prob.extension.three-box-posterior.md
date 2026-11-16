# Infer which box supplied red

*Medium · [Probability problems](index.md)*

Exactly one box is chosen: $A$ with probability $1/2$, and $B,C$ with probability $1/4$ each. A draw is red with conditional probability $1/2$ from $A$, $1/4$ from $B$ and $3/4$ from $C$. Given a red draw, find the probability that box $C$ was chosen.

```answer
{"answer":{"kind":"rational","expected":{"numerator":3,"denominator":8},"checker_scope":"Checks the box-C posterior for this stated red-observation model only."}}
```

<details>
<summary>Hint 1</summary>

For each box, multiply its prior selection mass by its red likelihood.

</details>

<details>
<summary>Hint 2</summary>

Normalise the box-C joint mass using all three red-producing possibilities.

</details>

<details>
<summary>Worked solution</summary>

Use the selected-box partition to form the Bayes denominator.

1. The joint red masses from $A,B,C$ are respectively $(1/2)(1/2)=1/4$, $(1/4)(1/4)=1/16$ and $(1/4)(3/4)=3/16$.
2. The box events are disjoint and exhaustive, so the total red probability is $1/4+1/16+3/16=1/2>0$.
3. Thus $P(C\mid\text{red})=(3/16)/(1/2)=3/8$. The likelihood $3/4$ alone is not a posterior because it does not incorporate the box priors.

Red mass from $C$ is $3/16$, total red mass is $1/2$, giving posterior $3/8$.

</details>
