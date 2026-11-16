# Find the domain of a radical composed with a reciprocal

*Medium · [Foundations bridge](index.md)*

Let f(t)=√(2t−1) on its real domain and g(x)=1/(x−2). Find the real domain of $f\circ g$ as an interval.

```answer
{"answer":{"kind":"interval","expected":"(2,4]","checker_scope":"Only the requested exact result in the stated domain and units is checked; the reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

Keep g’s denominator restriction and require its output to satisfy the radical condition.

</details>

<details>
<summary>Hint 2</summary>

Study the sign of (4−x)/(x−2) on either side of 2 and 4.

</details>

<details>
<summary>Worked solution</summary>

Composition requires an allowed inner input and an inner output in the outer domain.

1. The inner map requires x≠2. The radical requires 2/(x−2)−1=(4−x)/(x−2)≥0.
2. For x&lt;2 the numerator is positive and denominator negative, so no inputs qualify. For 2&lt;x≤4 both are nonnegative with denominator positive. For x&gt;4 the quotient is negative.
3. Thus the domain is (2,4\], excluding the pole but including the zero radicand.

</details>
