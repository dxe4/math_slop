# Evaluating definite integrals: split absolute area at zero

*Medium · [Calculus](index.md)*

For $f(x)=x$ on $[-2,1]$, return net\_integral=∫f and absolute\_area=∫\|f\| over this interval.

```answer
{"answer":{"kind":"record_of_rationals","expected":{"net_integral":"-3/2","absolute_area":"5/2"},"checker_scope":"Checks the stated exact numeric entries only. It does not certify an explanation or unrestricted proof."}}
```

<details>
<summary>Hint 1</summary>

A signed integral keeps negative contributions.

</details>

<details>
<summary>Hint 2</summary>

Split at zero before integrating the absolute value.

</details>

<details>
<summary>Worked solution</summary>

For absolute area, the portion $[-2,0]$ contributes $2$ and $[0,1]$ contributes $1/2$, totaling $5/2$.

1. The antiderivative $x^{2}/2$ gives net integral $1/2-2=-3/2$.
2. For absolute area, the portion $[-2,0]$ contributes $2$ and $[0,1]$ contributes $1/2$, totaling $5/2$.

</details>
