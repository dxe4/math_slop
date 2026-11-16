# Read a strict local minimum from a Hessian hypothesis

*Easy · [Calculus](index.md)*

At a critical point p of a C² function, the Hessian is the identity matrix $I$. What local classification is guaranteed? Return {strict\_local\_minimum}, {strict\_local\_maximum} or {saddle}.

```answer
{"answer":{"kind":"set","expected":["strict_local_minimum"],"checker_scope":"Only the requested exact result in the stated domain, units and orientation is checked; reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

The identity quadratic form is positive in every nonzero direction.

</details>

<details>
<summary>Hint 2</summary>

Apply the positive-definite second-derivative test.

</details>

<details>
<summary>Worked solution</summary>

Positive quadratic growth controls sufficiently small perturbations around a critical point.

1. The gradient vanishes by the critical-point hypothesis.
2. The identity Hessian is positive definite.
3. Thus p is a strict local minimum, encoded by {strict\_local\_minimum}.

</details>
