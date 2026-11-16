# Telescope an angle-addition series

*Medium · [Calculus](index.md)*

Let $S=\sum_{n=1}^{\infty}\arctan(1/(n^2+n+1))$, using the principal arctangent in radians. Find S/π through a finite telescoping identity.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":4},"checker_scope":"Only the requested exact result in the stated domain, units and orientation is checked; reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

Apply the tangent subtraction formula to arctan(n+1)−arctan n.

</details>

<details>
<summary>Hint 2</summary>

Check the difference lies in (0,π/2) before identifying it with a principal arctangent.

</details>

<details>
<summary>Worked solution</summary>

An angle-difference identity converts the nonlinear summands into a telescope.

1. For n≥1, both arctangents lie in (0,π/2), and their positive difference also lies there. Its tangent is \[(n+1)−n\]/\[1+n(n+1)\]=1/(n²+n+1).
2. Thus the summand equals arctan(n+1)−arctan n. The Nth partial sum is arctan(N+1)−arctan1.
3. As N→∞ this tends to π/2−π/4=π/4, proving convergence and giving S/π=1/4.

</details>
