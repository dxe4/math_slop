# Find excluded inputs before canceling

*Hard · [Foundations bridge](index.md)*

The real function is defined by $f(x)=(x-2)/[(x-2)(x+3)]$ wherever its original denominator is nonzero. List all excluded real inputs.

```answer
{"answer":{"kind":"set","expected":"{-3, 2}","checker_scope":"Exact requested bounded result or declared rule-and-domain pair only. Worked reasoning is not automatically certified; this draft introduces no new checkpoint objective or eligibility."}}
```

<details>
<summary>Hint 1</summary>

Use the denominator in the original definition.

</details>

<details>
<summary>Hint 2</summary>

A factor canceled in a simpler formula still vanishes at an excluded original input.

</details>

<details>
<summary>Worked solution</summary>

The original denominator determines the function domain.

1. The original denominator is zero when x-2=0 or x+3=0.
2. The corresponding inputs are two and minus three.
3. The full excluded set is $\{-3,2\}$. Simplifying to 1/(x+3) does not restore x=2.

</details>
