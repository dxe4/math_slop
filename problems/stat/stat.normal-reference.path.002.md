# Calculate an interval area from supplied rounded entries

*Easy · [Statistics and probability](index.md)*

For a standard normal reference, use the supplied rounded entries $Φ(1)=0.84$ and $Φ(-1)=0.16$. Using those displayed entries as exact inputs to this table calculation, compute the approximate probability $P(-1<Z<1)$ as a fraction. The true normal-model area is not exactly this rounded result.

| Given information | Value |
| --- | --- |
| lower z | -1 |
| upper z | 1 |
| displayed Phi lower | 4/25 |
| displayed Phi upper | 21/25 |
| entries rounded | true |

```answer
{"answer":{"kind":"rational","expected":{"numerator":17,"denominator":25},"checker_scope":"Checks the requested exact quantities under the stated conventions and model. It does not certify an inferential assumption or assess an open explanation."}}
```

<details>
<summary>Hint 1</summary>

Subtract the cumulative area at the lower endpoint from the area at the upper endpoint.

</details>

<details>
<summary>Hint 2</summary>

The normal reference is continuous, so endpoint inclusion makes no difference to this probability.

</details>

<details>
<summary>Worked solution</summary>

Interval probability comes from a cumulative difference, with source precision retained in its interpretation.

1. The displayed-entry calculation gives $0.84-0.16=0.68$.
2. As a fraction this is $68/100=17/25, an$ approximate normal-model area based on rounded inputs.

</details>
