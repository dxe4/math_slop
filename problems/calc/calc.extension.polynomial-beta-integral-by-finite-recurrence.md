# Prove a factorial formula for a two-exponent integral

*Hard · [Calculus](index.md)*

For nonnegative integers m,n prove $\int_0^1x^m(1-x)^n\,dx=m!n!/(m+n+1)!$. Include m=0 and n=0 and derive the recurrence used rather than citing a special-function formula.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

For m≥1 integrate (1−x)ⁿ and differentiate xᵐ.

</details>

<details>
<summary>Hint 2</summary>

Iterating transfers powers from x to 1−x until a directly integrable endpoint case remains.

</details>

<details>
<summary>Model proof</summary>

A finite parts recurrence gives the factorials with no infinite expansion.

1. Let B\_{m,n} be the integral. For m=0 direct integration gives B\_{0,n}=1/(n+1), agreeing with 0!n!/(n+1)!.
2. For m≥1 take u=xᵐ and dv=(1−x)ⁿdx, so v=−(1−x)^{n+1}/(n+1). The boundary term vanishes at both endpoints, and B\_{m,n}=m B\_{m−1,n+1}/(n+1).
3. Iterate m times to obtain B\_{m,n}=\[m!/((n+1)(n+2)⋯(n+m))\]B\_{0,n+m}.
4. The last factor is 1/(n+m+1). Combining denominators yields m!n!/(m+n+1)!. The same computation permits n=0, and the m=0 base already handles the empty recurrence product.

**Self-assessment rubric**

- Checks the zero-exponent cases and the empty-product convention.
- Derives the exact recurrence with both endpoint terms justified.
- Tracks all factorial factors through the finite iteration and obtains the claimed denominator.

</details>
