# Recognize a vertical line has no finite Cartesian slope

*Easy · [Calculus](index.md)*

A tangent line is vertical. Does it have a finite slope $\Delta y/\Delta x$? Return {finite} or {not\_finite}.

```answer
{"answer":{"kind":"set","expected":["not_finite"],"checker_scope":"Only the requested exact result in the stated domain, units and orientation is checked; reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

Two distinct points on a vertical line have equal x-coordinates.

</details>

<details>
<summary>Hint 2</summary>

The slope denominator is then zero.

</details>

<details>
<summary>Worked solution</summary>

A vertical tangent is a geometric line even when no finite slope represents it.

1. The horizontal change along a vertical line is zero.
2. Between distinct points the vertical change is nonzero.
3. The ratio has no finite real value, so return {not\_finite}.

</details>
