# Find an attained sharp bound from two distance constraints

*Hard · [Real analysis](index.md)*

Given $|x-2|\le3/5$ and \|y+1\|&lt;=4/5, find the greatest possible value of \|3x-2y-8\|.

```answer
{"answer":{"kind":"rational","expected":{"numerator":17,"denominator":5},"checker_scope":"Checks only the requested fixed numerical result, finite set or declared interval. Universal epsilon arguments, hypotheses and analytic proofs are not automatically certified, and no new same-version required slot is introduced."}}
```

<details>
<summary>Hint 1</summary>

Rewrite the expression using the two controlled differences.

</details>

<details>
<summary>Hint 2</summary>

To prove sharpness, make the two signed contributions reinforce rather than cancel.

</details>

<details>
<summary>Worked solution</summary>

The triangle bound is sharp when both deviations reach suitable endpoints.

1. The expression is 3(x-2)-2(y+1), whose absolute value is at most 9/5+8/5=17/5.
2. Choose x=13/5 and y=-9/5, satisfying both distance bounds with equality.
3. Then the expression is 17/5, so the greatest possible value is attained and equals that bound.

</details>
