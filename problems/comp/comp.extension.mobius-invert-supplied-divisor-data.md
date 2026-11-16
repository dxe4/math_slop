# Recover a hidden arithmetic-function value from four divisor totals

*Easy · [Computational arithmetic problems](index.md)*

Functions satisfy F(n)=sum of f(d) over d dividing n. Use $f(n)=\sum_{d\mid n}\mu(d)F(n/d)$. Given F(1)=2,F(2)=7,F(3)=11,F(6)=40 and mu(1)=1,mu(2)=mu(3)=-1,mu(6)=1, find f(6).

```answer
{"answer":{"kind":"integer","expected":"24","checker_scope":"Exact requested integer, rational or finite coefficient vector only. The stated theorem or model is part of the supplied mathematics; no learner program or unrestricted proof is run or certified. This new skill does not expand an existing objective contract."}}
```

<details>
<summary>Hint 1</summary>

Use all four divisors of six in the supplied inversion formula.

</details>

<details>
<summary>Hint 2</summary>

The argument of F is six divided by the divisor.

</details>

<details>
<summary>Worked solution</summary>

Mobius inversion reverses a divisor accumulation.

1. The inversion at six is F(6)-F(3)-F(2)+F(1).
2. Substitute the supplied values to obtain 40-11-7+2.
3. The recovered value is twenty-four.

</details>
