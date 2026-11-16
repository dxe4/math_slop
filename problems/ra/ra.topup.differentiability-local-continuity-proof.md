# Prove continuity from a point derivative without neighborhood differentiability

*Hard · [Real analysis](index.md)*

Let f be defined in a neighborhood of c and differentiable at $c$. Prove f is continuous at c, without assuming it is differentiable at any other point.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

A convergent difference quotient is bounded near its limit point.

</details>

<details>
<summary>Hint 2</summary>

Write the function increment as the input increment times that quotient.

</details>

<details>
<summary>Model proof</summary>

A bounded local quotient makes the function increment vanish.

1. Let D be the derivative at c. There is a radius r&gt;0 such that the quotient (f(c+h)-f(c))/h has absolute value at most \|D\|+1 whenever 0&lt;\|h\|&lt;r.
2. For epsilon&gt;0 use delta=min(r,epsilon/(\|D\|+1)). Then the increment magnitude is at most \|h\|(\|D\|+1)&lt;epsilon for nonzero h with \|h\|&lt;delta.
3. At h=0 the increment is zero, so the full continuity condition holds at c. No property of derivatives at other points was used.

**Self-assessment rubric**

- Obtain a finite local bound from existence of the derivative at c.
- Choose a tolerance-dependent radius with the correct dependencies.
- Bound the function increment and include the central point.

</details>
