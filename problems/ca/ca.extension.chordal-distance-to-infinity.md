# Read a finite value in the spherical metric

*Easy · [Complex analysis problems](index.md)*

The chordal distance on the Riemann sphere satisfies $\chi(w,\infty)=1/\sqrt{1+|w|^2}$. Find chi(3+4i,infinity)^2.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":26},"checker_scope":"Exact requested metric value only; no analytic proof is automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

Compute the squared complex modulus first.

</details>

<details>
<summary>Hint 2</summary>

Square the supplied metric formula only after substitution.

</details>

<details>
<summary>Worked solution</summary>

Spherical distance treats infinity as a finite metric point.

1. The value 3+4i has squared modulus 3^2+4^2=25.
2. The squared distance is 1/(1+\|w\|^2).
3. Thus the requested value is 1/26.

</details>
