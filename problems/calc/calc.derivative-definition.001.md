# Complete a difference quotient

*Medium · [Calculus](index.md)*

For $f(x)=x^2+4x$ at $x=3$, complete the quotient $[f(3+h)-f(3)]/h=A+h$ for $h\ne 0$, then give its limit as $h$ tends to zero. Return $A$ and the limit.

```answer
{"answer":{"kind":"record_of_rationals","expected":{"A":"10","limit":"10"},"checker_scope":"Checks two exact scaffold entries; completion is not an independently written derivative proof."}}
```

<details>
<summary>Hint 1</summary>

Expand $(3+h)^2$ before subtracting $f(3)$.

</details>

<details>
<summary>Hint 2</summary>

The numerator has a common factor $h$; cancellation needs $h\ne 0$.

</details>

<details>
<summary>Worked solution</summary>

Simplify the quotient on its punctured domain before taking the limit.

1. $f(3)=21$ and $f(3+h)=21+10h+h^2$.
2. For $h\ne 0$, divide $10h+h^2$ by $h$ to obtain $10+h$.
3. As $h$ tends to zero the quotient tends to $10$, the tangent slope.

A numeric $h$ field and table display $h$, $10+h$, and the difference from $10$; the algebra supplies the limiting argument.

</details>
