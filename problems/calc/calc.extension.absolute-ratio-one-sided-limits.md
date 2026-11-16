# Separate the two sides of an absolute-value ratio

*Easy · [Calculus](index.md)*

For $f(x)=|x|/x$ on x≠0, return \[limit at 0 from the left, limit at 0 from the right\].

```answer
{"answer":{"kind":"vector","expected":["-1","1"],"checker_scope":"Only the requested exact result in the stated domain, units and orientation is checked; reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

On negative inputs \|x\|=−x.

</details>

<details>
<summary>Hint 2</summary>

On positive inputs \|x\|=x.

</details>

<details>
<summary>Worked solution</summary>

The sign changes the entire local quotient rule.

1. For x&lt;0 the quotient is −1.
2. For x&gt;0 it is 1.
3. The ordered one-sided limit vector is \[−1,1\].

</details>
