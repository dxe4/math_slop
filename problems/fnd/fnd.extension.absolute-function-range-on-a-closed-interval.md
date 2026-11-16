# Determine a range using a turning point and endpoints

*Medium · [Foundations bridge](index.md)*

Find the range of f(x)=\|x−1\| when the domain is $[-2,3]$. Return an interval.

```answer
{"answer":{"kind":"interval","expected":"[0,3]","checker_scope":"Only the requested exact result in the stated domain and units is checked; the reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

The minimum occurs where the quantity inside the absolute value is zero, if that input is allowed.

</details>

<details>
<summary>Hint 2</summary>

Compare distances from 1 to both domain endpoints for the maximum.

</details>

<details>
<summary>Worked solution</summary>

Range is determined by all attained outputs, not by copying the input interval.

1. The input x=1 is allowed and gives the minimum 0.
2. The endpoint distances are \|−2−1\|=3 and \|3−1\|=2, so the maximum is 3.
3. The left branch x∈\[−2,1\] already attains every output in \[0,3\], and no other input gives a larger value. Thus the range is \[0,3\].

</details>
