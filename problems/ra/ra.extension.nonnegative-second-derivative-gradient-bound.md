# Use global nonnegativity to constrain a tangent slope

*Medium · [Real analysis](index.md)*

Suppose f is C^2 on R, f&gt;=0, and $|f''|\le M$ for a constant M&gt;0. Prove \|f'(x)\|^2&lt;=2M\*f(x) for every x. Explain why the whole-line domain matters to this argument.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Taylor's bound gives a quadratic upper estimate valid for every real increment.

</details>

<details>
<summary>Hint 2</summary>

Evaluate that upper estimate at its minimum.

</details>

<details>
<summary>Model proof</summary>

A nonnegative function cannot have a tangent descent that beats its curvature control.

1. Taylor's integral estimate gives f(x+h)&lt;=f(x)+fprime(x)\*h+(M/2)\*h^2 for every real h, since the second derivative is bounded above by M.
2. The left side is nonnegative. Set h=-fprime(x)/M, giving 0&lt;=f(x)-\|fprime(x)\|^2/(2M). Rearranging proves the inequality.
3. The chosen increment may be arbitrarily large or point in either direction. The whole-line domain ensures the function and bound are available along that entire segment; a restricted interval would need an additional boundary qualification.

**Self-assessment rubric**

- Obtain an upper quadratic estimate on the full increment segment.
- Choose the correct increment and use the sign of the actual function.
- Explain why unrestricted input increments are legitimate.

</details>
