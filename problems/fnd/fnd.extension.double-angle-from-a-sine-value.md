# Apply a double-angle identity twice from one sine value

*Medium · [Foundations bridge](index.md)*

Given sinθ=3/5, compute cos(4θ). You may use $\cos(2\theta)=1-2\sin^2\theta$ and sin²θ+cos²θ=1.

```answer
{"answer":{"kind":"rational","expected":{"numerator":-527,"denominator":625},"checker_scope":"Only the requested exact result in the stated domain and units is checked; the reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

First determine cos(2θ) from the supplied sine.

</details>

<details>
<summary>Hint 2</summary>

Use the square identity to rewrite the double-angle formula in terms of cosine, then apply it at angle 2θ.

</details>

<details>
<summary>Worked solution</summary>

A quadrupled angle requires two linked double-angle calculations, with no choice of quadrant.

1. First cos(2θ)=1−2(3/5)²=7/25.
2. The square identity rewrites cos(2φ)=1−2sin²φ as 2cos²φ−1. Apply it with φ=2θ.
3. Thus cos(4θ)=2(7/25)²−1=98/625−625/625=−527/625.

</details>
