# Justify a Laurent coefficient inside an infinite two-sided product

*Hard · [Complex analysis problems](index.md)*

Prove $e^{z+1/z}$ has an essential singularity at zero and residue equal to the sum of 1/\[m!(m+1)!\] for m=0,1,2,... . Justify the multiplication of series on punctured annuli.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Separate the factors exp(z) and exp(1/z).

</details>

<details>
<summary>Hint 2</summary>

The simple negative power comes from exponent pairs whose difference is negative one.

</details>

<details>
<summary>Model proof</summary>

Normal convergence on annuli justifies the exact residue series without treating an essential singularity as a finite principal part.

1. The factor exp(1/z) has an essential singularity. Multiplication by exp(z), a holomorphic nonvanishing factor near zero, cannot make it meromorphic: otherwise multiplication back by exp(-z) would make exp(1/z) meromorphic.
2. On every compact annulus away from zero, both exponential series converge absolutely and uniformly, so their product may be integrated or grouped coefficientwise there.
3. A product term has power z^(m-n) and coefficient 1/(m!n!). The exponent negative one requires n=m+1, giving the stated absolutely convergent positive coefficient series.

**Self-assessment rubric**

- Use the nonvanishing factor to preserve the essential singularity.
- Justify absolute uniform series multiplication on compact punctured annuli.
- Select exactly the exponent pairs giving the residue and identify their convergent sum.

</details>
