# Count bounded one-runs through zero gaps

*Hard · [Original olympiad-style problems](index.md)*

How many binary strings of length $10$ contain exactly five ones and have no occurrence of three consecutive ones?

```answer
{"answer":{"kind":"integer","expected":"126","checker_scope":"Exact short answer only; the complete argument remains a worked solution, not an automatically certified proof or contest result."}}
```

<details>
<summary>Hint 1</summary>

Place the five zeros first and distribute the ones among their six gaps.

</details>

<details>
<summary>Hint 2</summary>

Count all weak compositions, then remove a gap containing at least three ones.

</details>

<details>
<summary>Worked solution</summary>

The zero-gap representation makes runs independent bounded occupancies.

1. The five zeros determine six ordered gaps. Let their one-counts sum to five, with each count at most two.
2. Without bounds there are $\binom{10}{5}=252$ distributions. A specified gap containing at least three leaves two ones to distribute, giving $\binom75=21$ distributions.
3. Two gaps cannot both contain three of only five ones. Thus inclusion-exclusion gives $252-6\cdot21=126$.

</details>
