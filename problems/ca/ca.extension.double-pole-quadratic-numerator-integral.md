# Differentiate the regular factor at a repeated upper pole

*Medium · [Complex analysis problems](index.md)*

Find (1/pi) times $\int_{-\infty}^{\infty}x^2/(x^2+1)^2\,dx$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":2},"checker_scope":"Exact requested normalized rational scalar only. Convergence, contour choices and branch or parameter arguments are supplied as a worked model, not automatically certified as a proof; no existing objective contract is expanded."}}
```

<details>
<summary>Hint 1</summary>

The upper pole at i has order two.

</details>

<details>
<summary>Hint 2</summary>

Differentiate z squared divided by (z+i) squared to obtain its residue.

</details>

<details>
<summary>Worked solution</summary>

A repeated pole needs a derivative rather than a simple denominator substitution.

1. The regular factor at i is g(z)=z^2/(z+i)^2, with derivative 2iz/(z+i)^3. At i this equals 1/(4i).
2. The upper large arc tends to zero because the integrand is O(\|z\|^(-2)). The real-line integral is 2 pi i times that residue, or pi/2.
3. The requested normalized value is one half.

</details>
