# Add both upper-half-plane residues before using evenness conventions

*Medium · [Complex analysis problems](index.md)*

Find (1/pi) times $\int_{-\infty}^{\infty}dx/[(x^2+1)(x^2+4)]$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":6},"checker_scope":"Exact requested normalized rational scalar only. Convergence, contour choices and branch or parameter arguments are supplied as a worked model, not automatically certified as a proof; no existing objective contract is expanded."}}
```

<details>
<summary>Hint 1</summary>

Close a rational contour in the upper half-plane.

</details>

<details>
<summary>Hint 2</summary>

Both upper poles contribute, with opposite imaginary residue signs.

</details>

<details>
<summary>Worked solution</summary>

Two distinct pole residues give a cancellation before the real integral normalization.

1. The poles inside the upper semicircle are i and 2i. Their residues are 1/(6i) and -1/(12i), respectively.
2. The large arc vanishes because the rational integrand is of order \|z\|^(-4). The residue sum is 1/(12i), so the whole-line integral is pi/6.
3. Dividing by pi gives one sixth.

</details>
