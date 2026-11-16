# Differentiate a circle relation twice

*Medium · [Calculus](index.md)*

For the upper branch of $x^2+y^2=4$ near (0,2), find y″ at x=0.

```answer
{"answer":{"kind":"rational","expected":{"numerator":-1,"denominator":2},"checker_scope":"Only the requested exact result in the stated domain, units and orientation is checked; reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

The first differentiated equation is x+y y′=0.

</details>

<details>
<summary>Hint 2</summary>

Differentiate that equation again, including both factors in y y′.

</details>

<details>
<summary>Worked solution</summary>

A second implicit derivative includes a squared first-derivative term.

1. The first equation gives y′=−x/y, so y′(0)=0 at y=2.
2. Differentiating x+y y′=0 gives 1+(y′)²+y y″=0.
3. At the point this is 1+2y″=0, hence y″=−1/2.

</details>
