# Scale and normalize a supplied Bezout identity

*Hard · [Number theory](index.md)*

You are given $21(13)+34(-8)=1$. Find the integer pair (x,y) with 21x+34y=5 and 0&lt;=x&lt;34. Return an ordered vector.

```answer
{"answer":{"kind":"vector","expected":["31","-19"],"checker_scope":"Exact requested finite result, set or polynomial identity only. Worked number-theoretic reasoning is not automatically certified; no new same-version checkpoint objective is introduced."}}
```

<details>
<summary>Hint 1</summary>

Multiply the supplied identity by five first.

</details>

<details>
<summary>Hint 2</summary>

Change x by a multiple of thirty-four and compensate in y using twenty-one.

</details>

<details>
<summary>Worked solution</summary>

Scaling gives a witness, then a homogeneous adjustment puts it in the chosen window.

1. Multiplication by five gives a starting pair $(65,-40)$.
2. Subtract thirty-four from x and add twenty-one to y, preserving $21x+34y$, to obtain $(31,-19)$.
3. The check is $21(31)+34(-19)=651-646=5$, and thirty-one meets the required window.

</details>
