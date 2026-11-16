# Determine a polynomial through an additive shift

*Hard · [Original Putnam-style training](index.md)*

A real polynomial P satisfies $P(x)+P(x+1)=x^3$ for every real x. Find P(0).

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":8},"checker_scope":"Exact requested bounded value only; a correct numerical answer does not certify the full university-level argument or a contest result."}}
```

<details>
<summary>Hint 1</summary>

The leading terms on the left cannot cancel, so the degree is determined.

</details>

<details>
<summary>Hint 2</summary>

Compare coefficients starting with the highest power and work down to the constant.

</details>

<details>
<summary>Worked solution</summary>

The shift equation determines all coefficients in descending order.

1. Because the leading coefficient doubles on the left, P must have degree three. Write $P(x)=ax^3+bx^2+cx+d$.
2. Coefficient comparison gives $2a=1$, $3a+2b=0$ and $3a+2b+2c=0$, hence a=1/2, b=-3/4 and c=0.
3. The constant equation is a+b+c+2d=0, so d=1/8. Thus $P(0)=1/8$.

</details>
