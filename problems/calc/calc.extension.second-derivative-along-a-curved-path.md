# Include path acceleration in a second composite derivative

*Medium · [Calculus](index.md)*

Let f(x,y)=x²+y and r(t)=(t,t²). Find $\frac{d^2}{dt^2}f(r(t))$ at t=0, and account for both Hessian and path-acceleration contributions.

```answer
{"answer":{"kind":"integer","expected":4,"checker_scope":"Only the requested exact result in the stated domain, units and orientation is checked; reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

The direct composite is a quick check.

</details>

<details>
<summary>Hint 2</summary>

In the differential formula use r′ᵀHr′+∇f·r″.

</details>

<details>
<summary>Worked solution</summary>

A curved input path contributes an acceleration term beyond the Hessian quadratic term.

1. The composite is f(t,t²)=2t², so its second derivative is 4.
2. At zero, r′=(1,0), H=diag(2,0), giving Hessian contribution 2. Also ∇f=(0,1) and r″=(0,2), giving acceleration contribution 2.
3. Their sum is 4, agreeing with direct differentiation.

</details>
