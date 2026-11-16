# Locate an alternating sum between consecutive partial sums

*Medium · [Calculus](index.md)*

For $S=1-1/2+1/3-1/4+\cdots$, give the closed bracket \[S₄,S₅\] guaranteed to contain S. Return the interval; this is a certified bound, not an exact expression for S.

```answer
{"answer":{"kind":"interval","expected":"[7/12,47/60]","checker_scope":"Only the requested exact result in the stated domain, units and orientation is checked; reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

The fourth partial sum is below the limit and the fifth above it.

</details>

<details>
<summary>Hint 2</summary>

Calculate those two finite rational sums exactly.

</details>

<details>
<summary>Worked solution</summary>

The alternating theorem provides error direction as well as magnitude.

1. The magnitudes decrease to zero, so even partial sums are lower bounds and odd partial sums upper bounds.
2. S₄=1−1/2+1/3−1/4=7/12. Adding 1/5 gives S₅=47/60.
3. Thus \[7/12,47/60\] is the requested closed containing interval.

</details>
