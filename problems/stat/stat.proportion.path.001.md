# Read one category from a full table

*Easy · [Statistics and probability](index.md)*

A box contains $6$ red,$4$ blue and $2$ green counters, with no overlaps or other counters. What proportion are blue? Give an exact fraction.

| Given information | Value |
| --- | --- |
| counts | {"red":6,"blue":4,"green":2} |
| target | blue |

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":3},"checker_scope":"Checks the requested exact quantities under the stated conventions and model. It does not certify an inferential assumption or assess an open explanation."}}
```

<details>
<summary>Hint 1</summary>

The denominator counts every counter in the box.

</details>

<details>
<summary>Hint 2</summary>

Add the three disjoint counts before dividing.

</details>

<details>
<summary>Worked solution</summary>

A proportion compares one part with the whole stated group.

1. There are $6+4+2=12$ counters.
2. The blue proportion is $4/12=1/3$.

</details>
