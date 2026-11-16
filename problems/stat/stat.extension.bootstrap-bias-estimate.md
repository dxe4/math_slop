# Bootstrap bias estimate

*Easy · [Statistics and probability](index.md)*

The observed statistic is $\widehat\theta=5$, and its conditional bootstrap mean is $E^*\widehat\theta^*=6$. What is the bootstrap bias estimate $E^*\widehat\theta^*-\widehat\theta$?

```answer
{"answer":{"kind":"integer","expected":"1","checker_scope":"Checks only the requested exact finite answer under the stated model; it does not certify the reasoning or modeling assumptions."}}
```

<details>
<summary>Hint 1</summary>

Keep the stated bootstrap-minus-observed sign convention.

</details>

<details>
<summary>Hint 2</summary>

The target is estimated bias, not the bias-corrected statistic.

</details>

<details>
<summary>Worked solution</summary>

The bootstrap estimates its own shift away from the observed statistic.

1. The reference conditional mean is $6$ and the observed value is $5$.
2. The displayed bias estimator subtracts the observed value from that mean.
3. The estimate is $6-5=1$. A bias-corrected estimate would be $5-1=4$, but that is not the requested quantity.

</details>
