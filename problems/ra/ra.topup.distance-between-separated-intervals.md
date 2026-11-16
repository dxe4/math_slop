# Compute sharp lower and upper distances between two closed ranges

*Medium · [Real analysis](index.md)*

For $x\in[-2,1]$ and y in \[3,5\], return minimum and maximum of \|x-y\|.

```answer
{"answer":{"kind":"record_of_rationals","expected":{"minimum":"2","maximum":"7"},"checker_scope":"Checks only the requested fixed numerical result, finite set or declared interval. Universal epsilon arguments, hypotheses and analytic proofs are not automatically certified, and no new same-version required slot is introduced."}}
```

<details>
<summary>Hint 1</summary>

Every permitted y is larger than every permitted x.

</details>

<details>
<summary>Hint 2</summary>

Use nearest endpoints for the minimum and farthest endpoints for the maximum.

</details>

<details>
<summary>Worked solution</summary>

Separated intervals turn absolute distance into an ordered difference.

1. Here \|x-y\|=y-x throughout the domain.
2. The minimum is 3-1=2, achieved at x=1,y=3.
3. The maximum is 5-(-2)=7, achieved at x=-2,y=5.

</details>
