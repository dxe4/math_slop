# Find real fixed points of a Mobius map

*Medium · [Complex analysis problems](index.md)*

Find all real fixed points of $T(z)=(z-1/2)/(1-z/2)$, viewed as a Mobius transformation with finite pole $z=2$. Enter the real point set.

```answer
{"answer":{"kind":"set","expected":[-1,1],"checker_scope":"Exact requested complex value, polynomial, coefficient, radius or domain only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

A fixed point must satisfy the map equation and avoid its pole.

</details>

<details>
<summary>Hint 2</summary>

The linear terms cancel after cross-multiplication, leaving a quadratic condition.

</details>

<details>
<summary>Worked solution</summary>

Solve the fixed-point equation while retaining the original domain restriction.

1. For $z\ne2$, the equation is $z-z^2/2=z-1/2$.
2. This reduces to $z^2=1$, so the candidate points are $-1,1$.
3. Both avoid the pole and satisfy the original equation. The set is $\{-1,1\}$.

</details>
