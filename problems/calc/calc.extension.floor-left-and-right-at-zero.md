# Compute a floor function’s two local limits

*Easy · [Calculus](index.md)*

For $\operatorname{floor}(x)$, return \[left limit at 0, right limit at 0\]. Restrict to sufficiently small nonzero inputs.

```answer
{"answer":{"kind":"vector","expected":["-1","0"],"checker_scope":"Only the requested exact result in the stated domain, units and orientation is checked; reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

For −1&lt;x&lt;0 the floor is −1.

</details>

<details>
<summary>Hint 2</summary>

For 0&lt;x&lt;1 the floor is zero.

</details>

<details>
<summary>Worked solution</summary>

The nearby constant branches determine the one-sided limits.

1. Negative inputs immediately left of zero have floor −1.
2. Positive inputs immediately right have floor 0.
3. The ordered vector is \[−1,0\].

</details>
