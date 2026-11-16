# Use a known solution to expose the Euler-Cauchy basis

*Medium · [Differential equations problems](index.md)*

On t&gt;0, solve $y''-(2/t)y'+(2/t^2)y=0$ with y(1)=1 and y'(1)=2. Find y(3). You may start with the known solution y\_1=t.

```answer
{"answer":{"kind":"integer","expected":9,"checker_scope":"Exact requested invariant or response only; the differential-equation argument is a worked model, not an automatically checked proof."}}
```

<details>
<summary>Hint 1</summary>

Try y=t\*v to reduce the order.

</details>

<details>
<summary>Hint 2</summary>

Determine both constants from the two data at t=1.

</details>

<details>
<summary>Worked solution</summary>

A known nonvanishing solution removes the singular-looking coefficients.

1. Writing y=t\*v gives yprime=v+t\*vprime and ydoubleprime=2vprime+t\*vdoubleprime. Substitution reduces the equation to t\*vdoubleprime=0.
2. Thus v=a+b\*t and y=a\*t+b\*t^2. The initial data give a+b=1 and a+2b=2.
3. Hence b=1 and a=0; y(3)=9.

</details>
