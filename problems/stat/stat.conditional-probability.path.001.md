# Condition on a table row

*Medium · [Statistics and probability](index.md)*

A table has morning:$6$ passes and $2$ failures; afternoon:$3$ passes and $1$ failure. Select one of the $12$ cases uniformly. Given morning, what is the probability of a pass?

| Given information | Value |
| --- | --- |
| table | {"morning":{"pass":6,"fail":2},"afternoon":{"pass":3,"fail":1}} |
| condition | morning |
| event | pass |

```answer
{"answer":{"kind":"rational","expected":{"numerator":3,"denominator":4},"checker_scope":"Checks the requested exact quantities under the stated conventions and model. It does not certify an inferential assumption or assess an open explanation."}}
```

<details>
<summary>Hint 1</summary>

Keep only morning cases.

</details>

<details>
<summary>Hint 2</summary>

Count morning passes out of all morning cases.

</details>

<details>
<summary>Worked solution</summary>

The condition selects the denominator group.

1. The condition retains $6+2=8$ morning cases.
2. Six pass, so P(pass given morning)=6/8=3/4.

</details>
