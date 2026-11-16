# Lag one products

*Easy · [Statistics and probability](index.md)*

For the centered series $(x_1,x_2,x_3)=(1,0,-1)$, compute the unnormalized lag-one cross-product sum $x_1x_2+x_2x_3$.

```answer
{"answer":{"kind":"integer","expected":"0","checker_scope":"Checks only the requested exact finite answer under the stated model; it does not certify the reasoning or modeling assumptions."}}
```

<details>
<summary>Hint 1</summary>

Use the adjacent pairs specified in the formula, rather than all pairs.

</details>

<details>
<summary>Hint 2</summary>

Multiply within each adjacent pair and then add the two products.

</details>

<details>
<summary>Worked solution</summary>

Evaluate the stated lagged cross-products without introducing a normalization.

1. The first adjacent product is $x_1x_2=1\cdot0=0$.
2. The second is $x_2x_3=0\cdot(-1)=0$, so their sum is $0$.
3. This is the unnormalized sample cross-product requested. A zero value in one short series is not a proof that a generating process is independent or uncorrelated at every lag.

</details>
