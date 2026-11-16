# Collect two coefficients after nested distribution

*Hard · [Foundations bridge](index.md)*

For all real x,y, write $5(2x-3(y-x))-2(4x-5y)$ as ax+by. Enter (a,b).

```answer
{"answer":{"kind":"vector","expected":["17","-5"],"checker_scope":"Exact requested bounded result only. Worked reasoning is not automatically certified; this draft introduces no new checkpoint objective or eligibility."}}
```

<details>
<summary>Hint 1</summary>

Expand the innermost bracket before the outer multiplier.

</details>

<details>
<summary>Hint 2</summary>

The minus two multiplies both terms in its bracket, including the negative one.

</details>

<details>
<summary>Worked solution</summary>

Nested distribution and like-term collection determine unique coefficients.

1. The first bracket is $2x-3y+3x=5x-3y$, so its contribution is $25x-15y$.
2. The other contribution is $-8x+10y$.
3. Adding gives $17x-5y$, hence $(a,b)=(17,-5)$.

</details>
