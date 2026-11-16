# Use symmetry for a weighted contour without including an outside pole

*Medium · [Complex analysis problems](index.md)*

For $f(z)=(z^3-1)/(z-3)$, find (1/(2 pi i)) times the counterclockwise integral of z^2 fprime(z)/f(z) around \|z\|=2.

```answer
{"answer":{"kind":"integer","expected":"0","checker_scope":"Exact requested multiplicity, residue or normalized scalar count only. The analytic argument and its hypotheses are a worked model rather than an automatically checked proof; no existing objective contract is expanded."}}
```

<details>
<summary>Hint 1</summary>

Only zeros or poles inside the actual contour contribute.

</details>

<details>
<summary>Hint 2</summary>

The squared third roots of unity form the same set as the third roots themselves.

</details>

<details>
<summary>Worked solution</summary>

A root-of-unity moment cancels even though the unweighted zero count is nonzero.

1. The three numerator zeros are the third roots of unity, all inside the circle, while the denominator pole at three is outside.
2. Each simple zero a contributes weighted residue a squared. The sum of these squares is zero by the third-root symmetry.
3. Thus the normalized contour integral is zero; the exterior pole must not be subtracted.

</details>
