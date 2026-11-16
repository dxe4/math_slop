# Prove the field criterion for an integral domain extension

*Hard · [Abstract algebra problems](index.md)*

Let $A\subseteq B$ be commutative integral domains with the same identity, and suppose B is integral over A. Prove A is a field if and only if B is a field.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

If B is a field, apply integrality to the inverse of a nonzero element of A.

</details>

<details>
<summary>Hint 2</summary>

If A is a field, choose a monic equation of least degree for a nonzero element of B and show its constant term is nonzero.

</details>

<details>
<summary>Model proof</summary>

An integral equation can express the needed inverse using only the smaller allowed ring.

1. Suppose B is a field and 0!=a in A. The element a^(-1) in B satisfies a monic equation over A. Multiplying that equation by a^(n-1) expresses a^(-1) as an A-linear combination of nonnegative powers of a, so it lies in A.
2. Conversely suppose A is a field and 0!=b in B. Choose a least-degree monic equation for b. Its constant coefficient cannot be zero, since factoring out b and using the domain hypothesis would give a smaller monic equation.
3. That nonzero constant is invertible in A. Rearranging the equation expresses b^(-1) as an A-linear combination of nonnegative powers of b, placing it in B. Thus every nonzero element has an inverse in the required ring in both directions.

**Self-assessment rubric**

- In the field-B direction, apply the integral equation to an actual inverse.
- Use least degree and the domain hypothesis in the field-A direction.
- Rearrange both equations with coefficients in the correct rings.

</details>
