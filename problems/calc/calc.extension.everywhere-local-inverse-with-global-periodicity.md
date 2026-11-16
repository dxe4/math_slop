# Prove an everywhere nonsingular map need not be globally invertible

*Hard · [Calculus](index.md)*

For $T(x,y)=(e^x\cos y,e^x\sin y)$ on R², prove the derivative is nonsingular everywhere, identify its image and every fiber, and explain why local inverse branches do not make T globally injective.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

Compute the two derivative columns and their determinant.

</details>

<details>
<summary>Hint 2</summary>

Use polar coordinates in the target, keeping all angle representatives.

</details>

<details>
<summary>Model proof</summary>

A nonzero local area scale does not eliminate periodic repetition in the original coordinates.

1. The Jacobian is \[\[eˣcos y,−eˣsin y\],\[eˣsin y,eˣcos y\]\], with determinant e^{2x}(cos²y+sin²y)=e^{2x}&gt;0. Hence the inverse function theorem gives a smooth local inverse at every source point.
2. The target norm is eˣ&gt;0, so zero is not in the image. Conversely for any nonzero target with polar radius r and an angle θ, choose x=log r,y=θ; thus the image is R²∖{0}.
3. Its full fiber is {(log r,θ+2πk):k∈Z}. Equality of target radius fixes x, and equality of the sine/cosine pair gives exactly these angle shifts.
4. Every fiber is infinite, so T is not globally injective. A local inverse chooses one angle neighborhood; it does not identify all those distinct source points.

**Self-assessment rubric**

- Computes the Jacobian and strictly positive determinant.
- Proves both exclusion of zero and attainment of every nonzero target.
- Describes exactly all source points over a target with angle convention stated.
- Explains why local inverse neighborhoods coexist with global noninjectivity.

</details>
