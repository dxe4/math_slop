# Locate the parameter at which positive equilibria merge

*Medium · [Differential equations problems](index.md)*

For nonnegative harvest h consider $y'=y(4-y)-h$. Find the largest h for which the equation has a nonnegative equilibrium.

```answer
{"answer":{"kind":"integer","expected":4,"checker_scope":"Exact requested model quantity only; the differential-equation argument is a worked model, not an automatically checked proof."}}
```

<details>
<summary>Hint 1</summary>

An equilibrium makes the state derivative zero.

</details>

<details>
<summary>Hint 2</summary>

Find the maximum of the concave quadratic on y&gt;=0.

</details>

<details>
<summary>Worked solution</summary>

A fold threshold is the maximum production rate.

1. The equilibrium condition is h=4y-y^2=4-(y-2)^2.
2. On y&gt;=0 this production function has maximum four, attained at y=2.
3. Thus the largest admissible harvest is h=4; at that threshold the two equilibrium roots coincide.

</details>
