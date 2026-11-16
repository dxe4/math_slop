# Read a formal sequence record

*Easy · [Combinatorics](index.md)*

A formal series starts $A(x)=2+0x+3x^{2}+x^{3}$+… . Enter a1,a2,a3, where $a_{n}$ is the coefficient of $x^n$.

```answer
{"answer":{"kind":"record_of_rationals","expected":{"a1":0,"a2":3,"a3":1},"checker_scope":"Exact finite structured answer for respect-zero-based-coefficient-indices; no independently authored proof or general proficiency claim."}}
```

<details>
<summary>Hint 1</summary>

The constant term is a0.

</details>

<details>
<summary>Hint 2</summary>

An explicitly absent linear contribution has coefficient zero.

</details>

<details>
<summary>Worked solution</summary>

Coefficient indexing starts at the constant term.

1. The x coefficient is $0$ and the $x^{2}$ coefficient is $3$.
2. The $x^{3}$ coefficient is 1, so $(a1,a2,a3)=(0,3,1)$.

</details>
