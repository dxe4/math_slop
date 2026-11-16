# Separate differentiability at one point from bounded neighboring slopes

*Medium · [Real analysis](index.md)*

Set f(0)=0 and $f(x)=x^2\sin(1/x^2)$ for x nonzero. Prove f is differentiable at zero with f'(0)=0, but f' is unbounded in every neighborhood of zero.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Use the difference quotient at zero directly.

</details>

<details>
<summary>Hint 2</summary>

For the nearby derivative, choose reciprocal-square phases where cosine is one and sine is zero.

</details>

<details>
<summary>Model proof</summary>

A small function amplitude can coexist with an unbounded derivative.

1. At zero the difference quotient is h\*sin(1/h^2), whose modulus is at most \|h\| and tends to zero. Thus fprime(0)=0.
2. For x nonzero, differentiation gives fprime(x)=2x\*sin(1/x^2)-(2/x)\*cos(1/x^2).
3. Choose x\_n=1/sqrt(2\*pi\*n). Then the sine is zero and the cosine is one, so fprime(x\_n)=-2/x\_n tends to negative infinity while x\_n tends to zero. Hence no neighborhood has a bounded derivative.

**Self-assessment rubric**

- Prove differentiability using its definition at the special point.
- Differentiate the punctured formula with the correct chain factor.
- Construct actual nearby states witnessing unbounded slopes.

</details>
