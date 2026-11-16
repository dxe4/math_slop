# Intersect two logarithm argument restrictions

*Medium · [Foundations bridge](index.md)*

Find the real domain of $\log_2(x-1)+\log_2(5-x)$. Return an interval.

```answer
{"answer":{"kind":"interval","expected":"(1,5)","checker_scope":"Only the requested exact result in the stated domain and units is checked; the reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

Each logarithm argument must be strictly positive on its own.

</details>

<details>
<summary>Hint 2</summary>

Intersect the two resulting inequalities; do not replace them with only a product condition.

</details>

<details>
<summary>Worked solution</summary>

A logarithmic sum is defined only where each summand is defined.

1. The first logarithm requires x−1&gt;0, so x&gt;1.
2. The second requires 5−x&gt;0, so x&lt;5.
3. Together the domain is (1,5), with neither endpoint included.

</details>
