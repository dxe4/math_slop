# Use an integer endpoint rather than a continuous guess

*Medium · [Original olympiad-style problems](index.md)*

Positive integers $x+y=11$. Find the maximum of $(x^2+y^2)/(xy)$ as a rational number.

```answer
{"answer":{"kind":"rational","expected":{"numerator":101,"denominator":10},"checker_scope":"Exact finite result only; a correct entry does not certify the accompanying argument or a contest performance."}}
```

<details>
<summary>Hint 1</summary>

Write the objective as $121/(xy)-2$.

</details>

<details>
<summary>Hint 2</summary>

Positivity and integrality imply $(x-1)(y-1)\ge0$.

</details>

<details>
<summary>Worked solution</summary>

Find the smallest attainable product on the discrete domain.

1. The latter inequality gives $xy\ge x+y-1=10$.
2. The objective is therefore at most $121/10-2=101/10$.
3. The ordered pairs $(1,10),(10,1)$ attain product ten and hence attain the bound. A continuous positive domain would have no such finite maximum.

</details>
