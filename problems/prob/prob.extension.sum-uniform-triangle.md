# A small sum of uniform variables

*Medium · [Probability problems](index.md)*

Independent $X,Y$ are uniform on $[0,1]$. Find $P(X+Y\le1/2)$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":8},"checker_scope":"Checks this sum-event probability for the stated independent uniform pair only."}}
```

<details>
<summary>Hint 1</summary>

Draw the event inside the joint unit-square support.

</details>

<details>
<summary>Hint 2</summary>

Identify the intercepts of $x+y=1/2$ and calculate the area of the resulting triangle.

</details>

<details>
<summary>Worked solution</summary>

Probability equals area under the unit joint density.

1. The joint density is one on the unit square because the variables are independent uniforms.
2. Within that support, $x+y\le1/2$ describes the triangle with vertices $(0,0),(1/2,0),(0,1/2)$.
3. Its area is $(1/2)(1/2)(1/2)=1/8$, which equals the event probability. The sloping boundary has area zero, so including it changes nothing.

The retained right triangle has two legs of length $1/2$ and area $1/8$.

</details>
