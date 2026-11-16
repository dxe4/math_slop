# Extract the residue of a squared logarithmic derivative

*Medium · [Complex analysis problems](index.md)*

Let $f(z)=(z-a)g(z)$ with g holomorphic, g(a)=3 and gprime(a)=-2. Find the residue at a of (fprime/f)^2.

```answer
{"answer":{"kind":"rational","expected":{"numerator":-4,"denominator":3},"checker_scope":"Exact requested multiplicity, residue or normalized scalar count only. The analytic argument and its hypotheses are a worked model rather than an automatically checked proof; no existing objective contract is expanded."}}
```

<details>
<summary>Hint 1</summary>

Write fprime/f as its simple-pole part plus one holomorphic function.

</details>

<details>
<summary>Hint 2</summary>

In the square, only the cross term can produce the coefficient of the simple negative power.

</details>

<details>
<summary>Worked solution</summary>

The residue of a nonlinear expression depends on the regular term beside the leading pole.

1. Put H=gprime/g, holomorphic near a, with H(a)=-2/3. Then fprime/f=1/(z-a)+H(z).
2. Its square is 1/(z-a)^2+2H(z)/(z-a)+H(z)^2.
3. The simple-pole coefficient is 2H(a)=-4/3.

</details>
