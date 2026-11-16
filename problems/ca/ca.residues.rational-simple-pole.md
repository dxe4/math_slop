# Cancel the correct simple-pole factor

*Easy · [Complex analysis problems](index.md)*

Find the residue of $(z+1)/(z(z-2))$ at $z=0$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":-1,"denominator":2},"checker_scope":"Exact requested complex value, polynomial, set or normalized contour value only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Multiply by the local vanishing factor before evaluating.

</details>

<details>
<summary>Hint 2</summary>

The other denominator factor remains nonzero at the specified point.

</details>

<details>
<summary>Worked solution</summary>

The simple-pole residue is a finite local limit.

1. The residue is $\lim_{z\to0}z(z+1)/(z(z-2))$.
2. After cancellation this becomes $(z+1)/(z-2)$.
3. Evaluation at zero gives $-1/2$.

</details>
