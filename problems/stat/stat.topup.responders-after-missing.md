# Remove missing responses from the denominator

*Medium · [Statistics and probability](index.md)*

Among $50$ invited people, exactly $14$ answer no and $6$ do not respond; all others answer yes. These categories are disjoint and exhaustive. Among respondents, what fraction answer yes?

```answer
{"answer":{"kind":"rational","expected":{"numerator":15,"denominator":22},"checker_scope":"Checks only the requested result under the explicitly stated finite model or convention; does not certify a modeling assumption, causal claim or open argument."}}
```

<details>
<summary>Hint 1</summary>

First recover the yes count from the full invitation total.

</details>

<details>
<summary>Hint 2</summary>

Then remove nonrespondents from the denominator.

</details>

<details>
<summary>Worked solution</summary>

Complement counts and respondent counts answer different questions.

1. The yes count is $50-14-6=30$.
2. There are $50-6=44$ respondents.
3. The requested respondent fraction is $30/44=15/22$.

</details>
