# The minimum of three uniforms

*Medium · [Probability problems](index.md)*

Let $X_1,X_2,X_3$ be mutually independent uniform variables on $[0,1]$, and let $M=\min(X_1,X_2,X_3)$. Find $P(M>1/2)$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":8},"checker_scope":"Checks the three-variable minimum tail under mutual independence only."}}
```

<details>
<summary>Hint 1</summary>

Translate the minimum condition into one condition on each coordinate.

</details>

<details>
<summary>Hint 2</summary>

Each coordinate has the same upper-tail probability, and mutual independence factors the three-event intersection.

</details>

<details>
<summary>Worked solution</summary>

A minimum exceeds a threshold only when every coordinate does.

1. The event $M>1/2$ is $\bigcap_{i=1}^3\{X_i>1/2\}$.
2. Uniformity gives $P(X_i>1/2)=1/2$ for every coordinate.
3. Mutual independence gives probability $\prod_{i=1}^3(1/2)=1/8$. Pairwise independence alone would not generally determine a three-event intersection.

The product of their three tail probabilities is $(1/2)^3=1/8$.

</details>
