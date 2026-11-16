# Use the trace to obtain volume change

*Easy · [Differential equations problems](index.md)*

A fundamental matrix X of $u'=A(t)u$ has X(0)=I and trace A(t)=-2. Liouville's formula gives (det X)'=(trace A)\*det X. Find det X(log 3).

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":9},"checker_scope":"Exact requested invariant or response only; the differential-equation argument is a worked model, not an automatically checked proof."}}
```

<details>
<summary>Hint 1</summary>

The initial determinant is one.

</details>

<details>
<summary>Hint 2</summary>

Solve the scalar determinant equation.

</details>

<details>
<summary>Worked solution</summary>

Only the trace is needed for fundamental-volume evolution.

1. The determinant D satisfies Dprime=-2D with D(0)=1.
2. Thus D(t)=exp(-2t).
3. At t=log3 this equals 1/9.

</details>
