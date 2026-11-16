# Show why a jump blocks a pointwise fundamental-theorem conclusion

*Hard · [Real analysis](index.md)*

Let f(t)=0 for $0\le t<1/2$ and f(t)=2 for 1/2&lt;=t&lt;=1. Define F(x)=integral from 0 to x of f(t) dt. Prove F is continuous but not differentiable at 1/2, and explain which hypothesis for Fprime=f is absent there.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Compute F separately before and after the jump point.

</details>

<details>
<summary>Hint 2</summary>

Compare its left and right slopes at the joining value.

</details>

<details>
<summary>Model proof</summary>

Integration smooths a jump enough for continuity but does not guarantee a derivative at the jump itself.

1. For x&lt;=1/2, F(x)=0. For x&gt;=1/2, F(x)=2(x-1/2), since a single endpoint value does not change the integral.
2. The two formulas agree at one half, so F is continuous. Its left derivative there is zero and its right derivative is two, hence no derivative exists there.
3. The integrand is discontinuous at one half, so the pointwise continuity hypothesis of the fundamental theorem is absent at that point.

**Self-assessment rubric**

- Derive both interval formulas and handle the isolated endpoint value correctly.
- Show continuity and compute the unequal one-sided derivatives.
- Identify the missing integrand-continuity condition at the jump.

</details>
