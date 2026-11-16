# A known stake on an independent fair increment

*Easy · [Probability problems](index.md)*

Let $D$ be independent of past information $\mathcal F$, with $P(D=1)=P(D=-1)=1/2$. The stake is the known constant $3$. Find the constant value of $E[3D\mid\mathcal F]$.

```answer
{"answer":{"kind":"integer","expected":"0","checker_scope":"Checks this conditional staked mean under independence from the specified past information only."}}
```

<details>
<summary>Hint 1</summary>

Independence from the past makes the conditional mean equal the ordinary mean.

</details>

<details>
<summary>Hint 2</summary>

A known constant multiplier can be pulled through conditional expectation.

</details>

<details>
<summary>Worked solution</summary>

Known scaling does not alter zero conditional drift.

1. The fair increment has ordinary mean $(1/2)1+(1/2)(-1)=0$.
2. Independence of $D$ from $\mathcal F$ gives $E[D\mid\mathcal F]=0$ almost surely.
3. Therefore $E[3D\mid\mathcal F]=3E[D\mid\mathcal F]=0$ almost surely. This conclusion uses knowledge of the stake before the increment.

The conditional expected staked increment is zero.

</details>
