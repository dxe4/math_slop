# Reverse the direction of conditioning

*Medium · [Statistics and probability](index.md)*

A table has morning:$6$ passes and $2$ failures; afternoon:$3$ passes and $1$ failure. Select one of the $12$ cases uniformly. Given a pass, what is the probability that the case is morning?

| Given information | Value |
| --- | --- |
| table | {"morning":{"pass":6,"fail":2},"afternoon":{"pass":3,"fail":1}} |
| condition | pass |
| event | morning |

```answer
{"answer":{"kind":"rational","expected":{"numerator":2,"denominator":3},"checker_scope":"Checks the requested exact quantities under the stated conventions and model. It does not certify an inferential assumption or assess an open explanation."}}
```

<details>
<summary>Hint 1</summary>

The condition is now pass rather than morning.

</details>

<details>
<summary>Hint 2</summary>

Use the total number of passes as the denominator.

</details>

<details>
<summary>Worked solution</summary>

Reversing event and condition changes the denominator.

1. The condition retains $6+3=9$ passes.
2. Six are morning, so P(morning given pass)=6/9=2/3.

</details>
