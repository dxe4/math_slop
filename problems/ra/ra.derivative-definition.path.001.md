# Take a cubic difference-quotient limit

*Medium · [Real analysis](index.md)*

For $f(x)=x^{3}$ on R, compute $f^{\prime}(2)$ from the limit of \[$f(2+h)-f(2)$\]/h as $h\to 0, h\neq 0$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":12,"denominator":1},"checker_scope":"Checks only the requested structured calculation or statement recognition. Open reasoning is unassessed, and correctness does not certify an unrestricted proof or mastery of the complete skill."}}
```

<details>
<summary>Hint 1</summary>

Expand $(2+h)^{3}$ and subtract $8$.

</details>

<details>
<summary>Hint 2</summary>

Cancel the common factor h before taking its limit.

</details>

<details>
<summary>Worked solution</summary>

A punctured algebraic simplification identifies the derivative limit.

1. The numerator is $12h+6h^{2}+h^{3}$. For $h\neq 0$ the quotient is $12+6h+h^{2}$.
2. The quotient approaches $12$ from both sides, so $f^{\prime}(2)=12$.

</details>
