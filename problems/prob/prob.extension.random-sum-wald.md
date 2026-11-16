# Expected reward with an independent random count

*Medium · [Probability problems](index.md)*

Let $N$ be a nonnegative integer-valued variable with $E[N]=3$, independent of the entire sequence of identically distributed integrable rewards $X_1,X_2,\ldots$. The rewards are independent and satisfy $E[X_i]=2$. With an empty sum interpreted as zero, find $E[\sum_{i=1}^NX_i]$.

```answer
{"answer":{"kind":"integer","expected":"6","checker_scope":"Checks the random-sum mean under independence of the count from the whole integrable reward sequence only; no general stopping-time assertion is made."}}
```

<details>
<summary>Hint 1</summary>

Condition on the value of the independent count.

</details>

<details>
<summary>Hint 2</summary>

For a fixed count, use linearity of expectation. Check that the absolute reward sum has finite mean before removing the conditioning.

</details>

<details>
<summary>Worked solution</summary>

An independent count allows a conditional mean proportional to that count.

1. For each $n$ with $P(N=n)>0$, independence from the whole reward sequence gives $E[\sum_{i=1}^nX_i\mid N=n]=2n$.
2. The absolute-value sum is integrable: by nonnegative summation and independence, $E[\sum_{i=1}^N|X_i|]=E[N]E[|X_1|]<\infty$. Thus the requested signed sum is integrable and averaging its conditional means is legitimate.
3. Therefore $E[\sum_{i=1}^NX_i]=E[2N]=2E[N]=6$. This uses an independent count, not a count chosen by inspecting the rewards.

Conditional mean $2N$ averages to $2E[N]=6$, with integrability justified by the absolute reward sum.

</details>
