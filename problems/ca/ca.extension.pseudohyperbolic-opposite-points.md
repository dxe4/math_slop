# Preserve conjugation in a disk invariant

*Medium · [Complex analysis problems](index.md)*

For z,w in the unit disk define $\rho(z,w)=|(z-w)/(1-\overline w z)|$. Find rho(i/2,-i/2)^2.

```answer
{"answer":{"kind":"rational","expected":{"numerator":16,"denominator":25},"checker_scope":"Exact requested invariant or sharp bound only; the analytic justification remains a worked model rather than an automatically checked proof."}}
```

<details>
<summary>Hint 1</summary>

Conjugate w before multiplying by z.

</details>

<details>
<summary>Hint 2</summary>

The question asks for the square of the modulus.

</details>

<details>
<summary>Worked solution</summary>

The conjugation makes the denominator larger for this opposite pair.

1. Here z-w=i and conjugate(w)\*z=(i/2)\*(i/2)=-1/4.
2. Thus the denominator is 5/4 and rho=4/5.
3. Squaring gives 16/25.

</details>
