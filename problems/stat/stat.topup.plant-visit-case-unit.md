# Choose the observational unit in repeated measurements

*Medium · [Statistics and probability](index.md)*

A table has $40$ rows: each of ten plants is measured at four visits. A row contains plant identifier, visit date and height. Which account is correct? Choices: Each row is a plant visit, and rows from the same plant need not be independent.; Each row is a different plant, so there are forty independent plants.; Height is a categorical identifier.; Each case is a visit date, so only four cases were observed.

**Options**

1. Each row is a plant visit, and rows from the same plant need not be independent.
2. Each row is a different plant, so there are forty independent plants.
3. Height is a categorical identifier.
4. Each case is a visit date, so only four cases were observed.

```answer
{"answer":{"kind":"multiple_choice","expected":"plant_visit_with_repeat","checker_scope":"Checks only the requested result under the explicitly stated finite model or convention; does not certify a modeling assumption, causal claim or open argument."},"options":["plant_visit_with_repeat","forty_independent_plants","height_identifier","date_as_case"]}
```

<details>
<summary>Hint 1</summary>

Ask what one complete row describes.

</details>

<details>
<summary>Hint 2</summary>

Distinguish the number of rows from the number of distinct plants.

</details>

<details>
<summary>Worked solution</summary>

Repeated measurements create multiple cases for each experimental unit.

1. Each row identifies one plant at one visit, so the row unit is a plant visit.
2. Ten plants times four visits gives forty rows but only ten distinct plants.
3. Measurements on one plant may be related; the table does not justify treating them as forty independent plants.

</details>
