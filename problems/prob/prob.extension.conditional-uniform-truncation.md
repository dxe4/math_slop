# Condition a uniform tail

*Medium · [Probability problems](index.md)*

Let $X$ be uniform on $[0,4]$. Find $P(X>3\mid X>1)$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":3},"checker_scope":"Checks the conditional tail under this uniform support only."}}
```

<details>
<summary>Hint 1</summary>

The target tail is contained in the observed tail.

</details>

<details>
<summary>Hint 2</summary>

Divide its unconditional probability by the positive probability of the observed tail, using uniform interval lengths.

</details>

<details>
<summary>Worked solution</summary>

Renormalise the upper-tail mass after truncation.

1. The observed event has probability $P(X>1)=3/4>0$.
2. Since $\{X>3\}\subseteq\{X>1\}$, the conditional numerator is $P(X>3)=1/4$.
3. The conditional probability is $(1/4)/(3/4)=1/3$. Equivalently, conditioning leaves a uniform interval of length three, of which the target occupies length one.

The conditional length ratio is $1/3$.

</details>
