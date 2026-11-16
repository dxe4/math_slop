# Read a Taylor coefficient from the initial equation

*Easy · [Differential equations problems](index.md)*

An analytic solution of $y''+ty'+2y=0$ has y(0)=1 and y'(0)=0. Find its Taylor coefficient of t^2.

```answer
{"answer":{"kind":"integer","expected":-1,"checker_scope":"Exact requested indicial or series coefficient only; formal and analytic justification are not automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

Evaluate the differential equation at zero.

</details>

<details>
<summary>Hint 2</summary>

Convert the second derivative to its Taylor coefficient.

</details>

<details>
<summary>Worked solution</summary>

A pointwise differential equation determines the first unknown jet value.

1. At t=0 the equation gives ydoubleprime(0)+2\*y(0)=0.
2. Thus ydoubleprime(0)=-2.
3. The quadratic Taylor coefficient is ydoubleprime(0)/2!=-1.

</details>
