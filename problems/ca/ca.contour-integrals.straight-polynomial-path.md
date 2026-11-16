# Integrate a polynomial along a segment

*Medium · [Complex analysis problems](index.md)*

Let $\gamma$ be the straight segment from $0$ to $1+i$. Compute $\int_\gamma z\,dz$ in $a+bi$ form.

```answer
{"answer":{"kind":"complex","expected":"i","checker_scope":"Exact requested complex value, polynomial, set or normalized contour value only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

The integrand has an entire polynomial primitive.

</details>

<details>
<summary>Hint 2</summary>

Evaluate that primitive at the directed endpoints.

</details>

<details>
<summary>Worked solution</summary>

An entire primitive makes the integral depend only on the endpoints.

1. A primitive is $F(z)=z^2/2$.
2. The integral is $F(1+i)-F(0)=(1+i)^2/2$.
3. Since $(1+i)^2=2i$, the integral equals $i$.

</details>
