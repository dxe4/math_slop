# Recover signed trigonometric values from a sine and quadrant

*Medium · [Foundations bridge](index.md)*

An angle θ lies in quadrant II and $\sin\theta=3/5$. Return \[cosθ,tanθ\] as exact rational entries.

```answer
{"answer":{"kind":"vector","expected":["-4/5","-3/4"],"checker_scope":"Only the requested exact result in the stated domain and units is checked; the reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

Use sin²θ+cos²θ=1 to obtain the cosine magnitude.

</details>

<details>
<summary>Hint 2</summary>

Choose its sign from the quadrant, then divide sine by cosine.

</details>

<details>
<summary>Worked solution</summary>

The square identity determines magnitude, while the quadrant supplies missing sign information.

1. The cosine square is 1−9/25=16/25, giving magnitude 4/5.
2. Quadrant II has negative cosine, so cosθ=−4/5.
3. Then tanθ=(3/5)/(−4/5)=−3/4, so the vector is \[−4/5,−3/4\].

</details>
