# Sum two squares product identity

*Hard · [Original Putnam-style training](index.md)*

Prove the product of $2$ integers each expressible as a sum of two squares is again a sum of two squares, and derive an explicit formula.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict."}}
```

<details>
<summary>Hint 1</summary>

Think of $a^2+b^2$ as the norm of $a+bi$.

</details>

<details>
<summary>Hint 2</summary>

Multiply two Gaussian integers and separate real and imaginary parts.

</details>

<details>
<summary>Model proof</summary>

The right side is a sum of two integer squares, giving both the explicit representation and closure.

1. Compute $(a+bi)(c+di)=(ac-bd)+(ad+bc)i$.
2. Taking squared complex modulus and using multiplicativity gives $(a^2+b^2)(c^2+d^2)=(ac-bd)^2+(ad+bc)^2$.
3. The right side is a sum of two integer squares, giving both the explicit representation and closure.

**Self-assessment rubric**

- Multiply two Gaussian integers with the correct real and imaginary components.
- Verify the resulting two-square identity.
- Conclude a product of two representable integers remains representable.

</details>
