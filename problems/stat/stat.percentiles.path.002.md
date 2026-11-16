# Find quartiles by medians of halves

*Easy · [Statistics and probability](index.md)*

The sorted values are $1,2,4,8,10,14$. Split them into the lower three and upper three observations. Define Q1 and Q3 as the medians of those halves. Find Q1 and Q3.

| Given information | Value |
| --- | --- |
| observations | \[1,2,4,8,10,14\] |
| convention | equal halves then median |

```answer
{"answer":{"kind":"record_of_rationals","expected":{"Q1":"2","Q3":"10"},"checker_scope":"Checks the requested exact quantities under the stated conventions and model. It does not certify an inferential assumption or assess an open explanation."}}
```

<details>
<summary>Hint 1</summary>

The lower half is $1,2,4$ and the upper half is $8,10,14$.

</details>

<details>
<summary>Hint 2</summary>

Each half contains three values, so its median is its middle value.

</details>

<details>
<summary>Worked solution</summary>

Stating a small-sample quartile convention removes ambiguity.

1. The lower-half median is 2, so Q1=$2$.
2. The upper-half median is 10, so Q3=$10$.

</details>
