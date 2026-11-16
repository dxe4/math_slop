# Find a negative integer from two remainder conditions

*Hard · [Number theory](index.md)*

Find the integer N in $[-50,0]$ whose canonical remainder on division by 9 is 7 and which is divisible by 5.

```answer
{"answer":{"kind":"integer","expected":"-20","checker_scope":"Exact requested finite result, set or polynomial identity only. Worked number-theoretic reasoning is not automatically certified; no new same-version checkpoint objective is introduced."}}
```

<details>
<summary>Hint 1</summary>

Write every candidate as 7+9k within the interval.

</details>

<details>
<summary>Hint 2</summary>

Only one candidate has final decimal digit zero or five.

</details>

<details>
<summary>Worked solution</summary>

A remainder description gives a finite progression to filter.

1. Within the interval, numbers of the form $7+9k$ are -47,-38,-29,-20,-11,-2.
2. Only negative twenty is a multiple of five.
3. Indeed $-20=9(-3)+7$ and $-20=5(-4)$, so it meets both conditions.

</details>
