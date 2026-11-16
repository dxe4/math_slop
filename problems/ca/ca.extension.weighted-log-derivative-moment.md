# Compute a signed first moment of zeros and poles

*Medium · [Complex analysis problems](index.md)*

Let $f(z)=(z-1)^2(z+2)^3/(z-3)^4$. Find (1/(2 pi i)) times the counterclockwise integral of z fprime(z)/f(z) around \|z\|=5.

```answer
{"answer":{"kind":"integer","expected":"-16","checker_scope":"Exact requested multiplicity, residue or normalized scalar count only. The analytic argument and its hypotheses are a worked model rather than an automatically checked proof; no existing objective contract is expanded."}}
```

<details>
<summary>Hint 1</summary>

A zero of order m contributes residue m to fprime/f, and a pole contributes negative m.

</details>

<details>
<summary>Hint 2</summary>

Multiplication by z weights each such residue by its location.

</details>

<details>
<summary>Worked solution</summary>

A weighted argument integral adds signed multiplicity-location products.

1. The enclosed zeros are one of order two and negative two of order three; the pole at three has order four. None lies on the contour.
2. The three weighted residues are 2 times 1, 3 times negative 2, and negative 4 times 3.
3. Their sum is 2-6-12=-16, the requested normalized integral.

</details>
