# Use the opposite sign of the large-variable simple coefficient

*Easy · [Complex analysis problems](index.md)*

Use the convention that Res at infinity of f is negative the z^(-1) coefficient in its large-z expansion. Find this residue for $f(z)=1/(z-2)$.

```answer
{"answer":{"kind":"integer","expected":"-1","checker_scope":"Exact requested local residue only. The analytic argument and its hypotheses are a worked model, not an automatically checked proof; no existing objective contract is expanded."}}
```

<details>
<summary>Hint 1</summary>

Expand in inverse powers of z rather than near the finite pole.

</details>

<details>
<summary>Hint 2</summary>

Apply the stated minus sign after identifying the coefficient.

</details>

<details>
<summary>Worked solution</summary>

The infinity convention reverses the simple inverse-power coefficient.

1. For \|z\|&gt;2, the expansion is 1/z times 1/(1-2/z)=1/z+2/z^2+....
2. The z^(-1) coefficient is one.
3. Thus the residue at infinity is negative one.

</details>
