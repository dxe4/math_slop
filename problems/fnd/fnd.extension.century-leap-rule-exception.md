# Apply an ordered calendar rule with an exception

*Medium · [Foundations bridge](index.md)*

Use the Gregorian rule: a year divisible by $4$ is leap, except century years must be divisible by $4$00. How many days does February have in 2100? Nonleap February has 28 days; leap February has 29.

```answer
{"answer":{"kind":"integer","expected":28,"checker_scope":"Only the requested exact result in the stated domain and units is checked; the reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

Check whether the century exception applies.

</details>

<details>
<summary>Hint 2</summary>

Divisibility by 4 alone is insufficient for a year ending in 00.

</details>

<details>
<summary>Worked solution</summary>

An exception changes the order in which a classification rule is applied.

1. The year 2100 is divisible by 4 and by 100.
2. It is not divisible by 400, so the century exception makes it nonleap.
3. February therefore has 28 days.

</details>
