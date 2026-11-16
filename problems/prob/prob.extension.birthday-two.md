# A match on seven days

*Easy · [Probability problems](index.md)*

$2$ independent birthdays are each uniform over seven labelled days. Find the probability that they fall on the same day.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":7},"checker_scope":"Checks the matching probability for this seven-day independent uniform model only."}}
```

<details>
<summary>Hint 1</summary>

Describe the two birthdays as an ordered pair of days.

</details>

<details>
<summary>Hint 2</summary>

Matching pairs lie on the diagonal of the day-by-day grid; count the diagonal and the whole grid.

</details>

<details>
<summary>Worked solution</summary>

Count diagonal outcomes in a uniform product space.

1. Independence and uniformity give each ordered pair probability $(1/7)(1/7)=1/49$.
2. The matching event contains precisely the seven pairs $(d,d)$, one for each labelled day.
3. The event probability is $7/49=1/7$. Without the independent uniform model the grid entries need not have equal probabilities.

Seven diagonal pairs among forty-nine equally likely pairs give $1/7$.

</details>
