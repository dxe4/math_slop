# Integrate a constant density on its support

*Easy · [Statistics and probability](index.md)*

Let $f(x)=1/2$ on $[0,2]$ and zero elsewhere. Find $P(1/2\leq X\leq 3/2)$.

| Given information | Value |
| --- | --- |
| height | 1/2 |
| support | \[0,2\] |
| interval | \["1/2","3/2"\] |

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":2},"checker_scope":"Checks the requested exact quantities under the stated conventions and model. It does not certify an inferential assumption or assess an open explanation."}}
```

<details>
<summary>Hint 1</summary>

The requested interval lies entirely within the support.

</details>

<details>
<summary>Hint 2</summary>

For constant height, area equals height times interval width.

</details>

<details>
<summary>Worked solution</summary>

A continuous interval probability is density area over that interval.

1. The interval width is $3/2-1/2=1$.
2. The probability is($1/2$)×$1=1/2$; the total support area is $1$.

</details>
