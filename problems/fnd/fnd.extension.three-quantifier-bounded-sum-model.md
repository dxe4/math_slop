# Respect three quantifier levels in a finite relation

*Medium · [Foundations bridge](index.md)*

For x∈{0,1}, determine which x satisfy $\forall y\in\{0,1,2\}\ \exists z\in\{0,1,2\}:x+y=z$. Return the set of qualifying x. The z witness may depend on y.

```answer
{"answer":{"kind":"set","expected":["0"],"checker_scope":"Only the requested exact result in the stated domain and units is checked; the reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

For x=0 use the same output as the current y.

</details>

<details>
<summary>Hint 2</summary>

For x=1 check the largest allowed y rather than assuming an unrestricted integer output.

</details>

<details>
<summary>Worked solution</summary>

Allowed witness domains matter even when an equation has a solution in a larger number system.

1. At x=0, every y∈{0,1,2} has witness z=y in the allowed set.
2. At x=1 and y=2 the required value is z=3, outside the allowed set, so the universal y requirement fails.
3. Thus exactly x=0 qualifies, and the set is {0}.

</details>
