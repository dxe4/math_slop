# Recognize an indefinite Hessian from its determinant

*Easy · [Calculus](index.md)*

At a critical point of a C² function, $H=\begin{pmatrix}0&1\\1&0\end{pmatrix}$. What does the Hessian test imply? Return {minimum}, {maximum} or {saddle}.

```answer
{"answer":{"kind":"set","expected":["saddle"],"checker_scope":"Only the requested exact result in the stated domain, units and orientation is checked; reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

The determinant is negative.

</details>

<details>
<summary>Hint 2</summary>

Equivalently the quadratic form has opposite signs on (1,1) and (1,−1).

</details>

<details>
<summary>Worked solution</summary>

An indefinite quadratic leading term creates both increasing and decreasing directions.

1. The determinant is −1&lt;0.
2. Thus H is indefinite rather than positive or negative definite.
3. The critical point is a saddle; return {saddle}.

</details>
