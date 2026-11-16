# Remove whole weeks from an elapsed-hour calculation

*Medium · [Foundations bridge](index.md)*

It is Monday at 09:00. After exactly $172$ hours, what is the hour on the 24-hour clock? Return an integer from 0 to 23; ignore daylight-saving changes.

```answer
{"answer":{"kind":"integer","expected":13,"checker_scope":"Only the requested exact result in the stated domain and units is checked; the reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

A week contains 7×24 hours.

</details>

<details>
<summary>Hint 2</summary>

Remove one full week before adding the remaining hours.

</details>

<details>
<summary>Worked solution</summary>

Whole calendar cycles leave the displayed weekday and time unchanged.

1. One week is 168 hours, so 172 hours is one week plus 4 hours.
2. After one week the time is again Monday 09:00.
3. Four more hours give Monday 13:00, so the requested hour is 13.

</details>
