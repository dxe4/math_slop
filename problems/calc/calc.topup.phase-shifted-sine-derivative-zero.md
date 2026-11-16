# Evaluate a chain derivative at a phase with zero slope

*Medium · [Calculus](index.md)*

Angles are in radians. For $f(x)=\sin(3x+\pi/2)$, find fprime(0).

```answer
{"answer":{"kind":"integer","expected":"0","checker_scope":"Exact requested value, finite set, choice or bounded polynomial with its stated excluded inputs only; no unrestricted symbolic function, causal assertion or analytic proof is automatically certified. No new same-version required slot is introduced."}}
```

<details>
<summary>Hint 1</summary>

Differentiate before evaluating the phase.

</details>

<details>
<summary>Hint 2</summary>

The cosine at pi over two is zero.

</details>

<details>
<summary>Worked solution</summary>

A nonzero chain multiplier can still produce a zero derivative at the evaluated phase.

1. The derivative is 3cos(3x+pi/2).
2. At zero the angle is pi/2, with cosine zero.
3. The derivative value is therefore zero.

</details>
