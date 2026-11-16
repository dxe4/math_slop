# Explain why an antiderivative endpoint subtraction crosses an invalid singularity

*Hard · [Calculus](index.md)*

An attempted evaluation of $\int_{-1}^{1}x^{-2}\,dx$ uses antiderivative -1/x and subtracts endpoint values to obtain -2. Prove the improper integral instead diverges and identify the invalid step.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

The integrand is undefined at an interior point, so the integral must split there.

</details>

<details>
<summary>Hint 2</summary>

One positive one-sided tail already grows without bound.

</details>

<details>
<summary>Model proof</summary>

An antiderivative valid on separate components cannot justify crossing an interior singularity.

1. The ordinary evaluation theorem does not apply across zero, where x^(-2) is undefined and unbounded.
2. On the positive side, the integral from epsilon to one is 1/epsilon-1, which tends to positive infinity as epsilon decreases to zero.
3. Thus the required one-sided improper integral already diverges, so the proposed full improper integral is not finite. Endpoint subtraction across the singularity, yielding a negative value for a positive integrand, was invalid.

**Self-assessment rubric**

- Identify the singularity and the need for separate one-sided limits.
- Compute a finite truncation and its divergent limit.
- Explain why the full-interval antiderivative subtraction was not authorized.

</details>
