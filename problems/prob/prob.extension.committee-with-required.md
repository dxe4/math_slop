# A committee containing one named person

*Easy · [Probability problems](index.md)*

A $3$-person committee is chosen from six distinct people. A named person must be included, and committee members have no separate roles. How many committees are possible?

```answer
{"answer":{"kind":"integer","expected":"10","checker_scope":"Checks the unordered committee count under the stated required-member condition only."}}
```

<details>
<summary>Hint 1</summary>

First account for the member whose inclusion is required.

</details>

<details>
<summary>Hint 2</summary>

Count unordered choices for the remaining seats; exchanging those members does not create a new committee.

</details>

<details>
<summary>Worked solution</summary>

Remove the forced member and choose the remaining subset.

1. The named member occupies one of the three memberships, leaving two people to choose from the other five.
2. There are $5\cdot4$ ordered choices for this pair, but each unordered pair is counted twice.
3. Thus there are $\binom52=5\cdot4/2=10$ committees. Adding back the required person gives a bijection, so no committee is omitted or duplicated.

Choose two of the remaining five people: $\binom52=10$.

</details>
