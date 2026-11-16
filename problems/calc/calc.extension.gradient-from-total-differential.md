# Read a gradient from its linear differential

*Easy · [Calculus](index.md)*

At a point p, the total differential is $Df(p)[h,k]=2h-5k$. Return the gradient in coordinate order (x,y).

```answer
{"answer":{"kind":"vector","expected":["2","-5"],"checker_scope":"Only the requested exact result in the stated domain, units and orientation is checked; reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

The gradient coefficients multiply the corresponding coordinate increments.

</details>

<details>
<summary>Hint 2</summary>

Keep the order of h and k.

</details>

<details>
<summary>Worked solution</summary>

The gradient represents the differential by the Euclidean dot product.

1. The coefficient of the x-increment h is 2.
2. The coefficient of the y-increment k is −5.
3. Thus ∇f(p)=\[2,−5\].

</details>
