# Check an average-rate denominator

*Easy · [Calculus](index.md)*

Can the average-rate quotient $[f(b)-f(a)]/(b-a)$ be evaluated when a=b? Return the singleton token set {defined} or {undefined}.

```answer
{"answer":{"kind":"set","expected":["undefined"],"checker_scope":"Only the requested exact result in the stated domain, units and orientation is checked; reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

Inspect the denominator before simplifying the numerator.

</details>

<details>
<summary>Hint 2</summary>

A quotient with denominator zero is not a real number.

</details>

<details>
<summary>Worked solution</summary>

An interval rate requires distinct endpoint times.

1. If a=b, then b−a=0.
2. The numerator is also zero, but 0/0 has no defined real quotient.
3. The answer is {undefined}.

</details>
