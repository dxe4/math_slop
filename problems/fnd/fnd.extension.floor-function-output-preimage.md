# Translate a floor output into a half-open interval

*Medium · [Foundations bridge](index.md)*

Let floor(u) denote the greatest integer ≤u. Find all real x such that $\operatorname{floor}(2x-1)=3$.

```answer
{"answer":{"kind":"interval","expected":"[2,5/2)","checker_scope":"Only the requested exact result in the stated domain and units is checked; the reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

A floor output of 3 means the input lies from 3 inclusive to 4 exclusive.

</details>

<details>
<summary>Hint 2</summary>

Solve that double inequality for x without changing the endpoint conventions.

</details>

<details>
<summary>Worked solution</summary>

Floor intervals include their lower boundary and exclude their upper boundary.

1. The condition is 3≤2x−1&lt;4.
2. Adding 1 and dividing by 2 gives 2≤x&lt;5/2.
3. The solution is \[2,5/2).

</details>
