# Measure an overnight interval

*Easy · [Foundations bridge](index.md)*

A journey starts at $23{:}40$ and ends at $00{:}15$ the next day. Find its duration in minutes; use the ordinary 24-hour clock.

```answer
{"answer":{"kind":"integer","expected":35,"checker_scope":"Only the requested exact result in the stated domain and units is checked; the reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

Split the interval at midnight.

</details>

<details>
<summary>Hint 2</summary>

Add the minutes before and after midnight.

</details>

<details>
<summary>Worked solution</summary>

Crossing midnight does not make elapsed time negative.

1. From 23:40 to 24:00 is 20 minutes.
2. From 00:00 to 00:15 is 15 minutes.
3. The elapsed duration is 20+15=35 minutes.

</details>
