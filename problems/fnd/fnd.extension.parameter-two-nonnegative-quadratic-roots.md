# Coordinate reality and sign conditions on two roots

*Hard · [Foundations bridge](index.md)*

Find all real a for which $x^2-2ax+(a+2)=0$ has two nonnegative real roots, counted with multiplicity. Give the full parameter interval.

```answer
{"answer":{"kind":"interval","expected":"[2,infinity)","checker_scope":"Only the requested exact result in the stated domain and units is checked; the reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

Reality requires a nonnegative discriminant.

</details>

<details>
<summary>Hint 2</summary>

For real roots, nonnegative sum and product force both roots nonnegative; combine those conditions rather than using only the discriminant.

</details>

<details>
<summary>Worked solution</summary>

Root reality and root signs impose independent conditions on the parameter.

1. The discriminant is 4(a²−a−2)=4(a−2)(a+1), so real roots require a≤−1 or a≥2.
2. Their sum is 2a and product a+2. Nonnegative roots require a≥0 and a+2≥0. For two real roots these conditions are also sufficient: a nonnegative product rules out opposite signs, and a nonnegative sum rules out both negative, with the zero-product case handled directly.
3. Intersecting the reality condition with a≥0 leaves a≥2. At a=2 the double root is x=2, so the endpoint is included.
4. The answer is \[2,∞).

</details>
