# Compute an explicitly defined percentile interval

*Medium · [Statistics and probability](index.md)*

Ten sorted bootstrap means are $1,2,2,3,4,5,5,6,7,8$. Construct a nominal $80$% equal-tail percentile interval using nearest-rank 10th and 90th percentiles: rank=ceiling(pn). Find lower and upper. These ten displayed values are the complete supplied bootstrap output, not a coverage guarantee.

| Given information | Value |
| --- | --- |
| bootstrap statistics | \[1,2,2,3,4,5,5,6,7,8\] |
| lower p | 1/10 |
| upper p | 9/10 |
| quantile convention | nearest rank |

```answer
{"answer":{"kind":"record_of_rationals","expected":{"lower":"1","upper":"7"},"checker_scope":"Checks the requested exact quantities under the stated conventions and model. It does not certify an inferential assumption or assess an open explanation."}}
```

<details>
<summary>Hint 1</summary>

The nominal lower and upper percentile levels are $10$% and $90$%. Finite lists and ties need not leave exactly $10$% strictly outside each endpoint.

</details>

<details>
<summary>Hint 2</summary>

Compute ranks ceiling($0.1\times 10$) and ceiling($0.9\times 10$).

</details>

<details>
<summary>Worked solution</summary>

A percentile interval is a quantile calculation whose finite-output convention must be explicit.

1. The endpoint ranks are $1$ and $9$.
2. The corresponding supplied sorted means are $1$ and $7$, giving the empirical interval\[$1,7$\]. No displayed mean is below $1$ and one of ten is above $7$; nominal percentile levels do not guarantee exact tail fractions for this finite list.

</details>
