# Explain derivatives away from an isolated value change

*Hard · [Calculus](index.md)*

Let $f(t)=7$ for t!=0 and f(0)=8. Prove its derivative is zero at every nonzero point but does not exist at zero. Use the difference quotient in both cases.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

A nonzero base point has a small neighborhood avoiding the exceptional point.

</details>

<details>
<summary>Hint 2</summary>

At zero the numerator of the difference quotient is a fixed nonzero constant.

</details>

<details>
<summary>Model proof</summary>

Derivative behavior is local, and one exceptional value can destroy only its own local derivative.

1. At a nonzero a, restrict increments by \|h\|&lt;\|a\|/2. Both a+h and a are then nonzero, so the difference quotient is identically zero.
2. At zero and h nonzero, the difference quotient is (7-8)/h=-1/h.
3. This has no finite two-sided limit as h tends to zero, so the derivative fails there while existing with value zero at every nonzero point.

**Self-assessment rubric**

- Choose a valid neighborhood avoiding the exceptional input.
- Compute the derivative at each nonzero base point directly.
- Compute the central quotient and show its finite limit fails.

</details>
