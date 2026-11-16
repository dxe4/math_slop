# Subtract a pole after counting numerator zeros

*Medium · [Complex analysis problems](index.md)*

Let $f(z)=z^2+1/z$ on the circle \|z\|=2, traversed counterclockwise. Find the winding number of the image curve f(z) about zero.

```answer
{"answer":{"kind":"integer","expected":"2","checker_scope":"Exact requested zero, winding or normalized scalar count only. The analytic argument and its hypotheses are a worked model rather than an automatically checked proof; no existing objective contract is expanded."}}
```

<details>
<summary>Hint 1</summary>

Multiply by z to expose a polynomial numerator, while retaining the original pole.

</details>

<details>
<summary>Hint 2</summary>

A numerator zero count is not yet the meromorphic image winding.

</details>

<details>
<summary>Worked solution</summary>

A pole changes the argument-principle winding even when the numerator has a simple zero description.

1. The numerator zf(z)=z^3+1 has three zeros inside \|z\|=2; for example Rouche compares z^3 of boundary modulus eight with the constant one.
2. None of those zeros is zero, while f has one simple pole at zero and no boundary zero or pole.
3. Thus the image winding is three minus one, or two.

</details>
