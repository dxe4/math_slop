# Use conjugation to invert a norm-one quadratic unit

*Easy · [Computational arithmetic problems](index.md)*

Find the ordered coefficient vector of the inverse of $17+12\sqrt2$ in Q(sqrt(2)). You may use that its norm is one. Use the order (constant coefficient, sqrt(2) coefficient).

```answer
{"answer":{"kind":"vector","expected":["17","-12"],"checker_scope":"Exact requested integer, rational or finite coefficient vector only. The stated theorem or model is part of the supplied mathematics; no learner program or unrestricted proof is run or certified. This new skill does not expand an existing objective contract."}}
```

<details>
<summary>Hint 1</summary>

Multiplication by the conjugate gives the norm.

</details>

<details>
<summary>Hint 2</summary>

A norm-one inverse requires no extra scalar division.

</details>

<details>
<summary>Worked solution</summary>

Conjugation supplies the inverse once the norm condition is checked.

1. The conjugate is 17-12sqrt(2).
2. The product is 17^2-2 times 12^2=289-288=1.
3. Therefore the inverse coefficient vector is (17,-12).

</details>
