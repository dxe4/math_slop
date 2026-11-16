# A partial derivative of an analytic exponential

*Easy · [Complex analysis problems](index.md)*

For $f(x+iy)=e^x(\cos y+i\sin y)$, let $v(x,y)$ be the imaginary part. Find $v_y(0,0)$.

```answer
{"answer":{"kind":"integer","expected":1,"checker_scope":"Exact requested complex value, polynomial, set or normalized contour value only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Extract the imaginary coefficient before differentiating.

</details>

<details>
<summary>Hint 2</summary>

Treat the other real coordinate as constant in this partial derivative.

</details>

<details>
<summary>Worked solution</summary>

The imaginary part has a direct real partial derivative.

1. $v(x,y)=e^x\sin y$.
2. Differentiating in $y$ gives $v_y(x,y)=e^x\cos y$.
3. At $(0,0)$ this is $1$.

</details>
