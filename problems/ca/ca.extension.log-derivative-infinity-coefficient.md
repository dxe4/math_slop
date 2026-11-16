# Extract an infinity coefficient by two reciprocal-power expansions

*Hard · [Complex analysis problems](index.md)*

For $R(z)=(z^5+2z^3+1)/(z^2-3z+2)$, find the coefficient of z^(-3) in the Laurent expansion of Rprime/R for sufficiently large \|z\|.

```answer
{"answer":{"kind":"integer","expected":"-9","checker_scope":"Exact requested multiplicity, residue or normalized scalar count only. The analytic argument and its hypotheses are a worked model rather than an automatically checked proof; no existing objective contract is expanded."}}
```

<details>
<summary>Hint 1</summary>

Subtract numerator and denominator logarithmic derivatives.

</details>

<details>
<summary>Hint 2</summary>

Normalize each polynomial by its leading power before expanding the reciprocal factors.

</details>

<details>
<summary>Worked solution</summary>

An infinity expansion encodes signed higher root moments without locating individual roots.

1. For P=z^5+2z^3+1, normalization gives Pprime/P=5/z-4/z^3+terms of smaller inverse order; there is no z^(-2) term.
2. For Q=z^2-3z+2, expand (2/z-3/z^2)/(1-3/z+2/z^2) to obtain 2/z+3/z^2+5/z^3+smaller inverse orders.
3. Since Rprime/R=Pprime/P-Qprime/Q, its z^(-3) coefficient is -4-5=-9.

</details>
