# Use both diagonal poles of a quartic before halving the real integral

*Medium · [Complex analysis problems](index.md)*

Find (1/pi) times $\int_0^{\infty}dx/(x^4+4)$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":8},"checker_scope":"Exact requested normalized rational scalar only. Convergence, contour choices and branch or parameter arguments are supplied as a worked model, not automatically certified as a proof; no existing objective contract is expanded."}}
```

<details>
<summary>Hint 1</summary>

The upper poles are not purely imaginary.

</details>

<details>
<summary>Hint 2</summary>

Compute the full real-line integral first, then use the even integrand.

</details>

<details>
<summary>Worked solution</summary>

A symmetric quartic has two upper poles whose real residue parts cancel.

1. The upper poles are 1+i and -1+i. Since the derivative of z^4+4 is 4z^3, their residues are (-1-i)/16 and (1-i)/16, summing to -i/8.
2. The vanishing large semicircle gives the full real-line integral 2 pi i times (-i/8)=pi/4.
3. Evenness halves this to pi/8 on the positive half-line, so the ratio is one eighth.

</details>
