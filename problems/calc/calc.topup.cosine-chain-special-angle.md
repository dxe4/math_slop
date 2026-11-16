# Evaluate a signed cosine chain derivative

*Medium · [Calculus](index.md)*

Angles are in radians. For $f(x)=\cos(2x)$, find fprime(pi/12).

```answer
{"answer":{"kind":"integer","expected":"-1","checker_scope":"Exact requested value, finite set, choice or bounded polynomial with its stated excluded inputs only; no unrestricted symbolic function, causal assertion or analytic proof is automatically certified. No new same-version required slot is introduced."}}
```

<details>
<summary>Hint 1</summary>

Differentiating cosine introduces a minus sign.

</details>

<details>
<summary>Hint 2</summary>

At the specified input the inner angle is pi over six.

</details>

<details>
<summary>Worked solution</summary>

Both the chain multiplier and the trigonometric sign are needed.

1. The derivative is -2sin(2x).
2. At x=pi/12 the sine argument is pi/6 and the sine value is one half.
3. The derivative is negative one.

</details>
