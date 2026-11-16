# Prove a sharp upper reciprocal-product bound

*Hard · [Original olympiad-style problems](index.md)*

Let positive weights sum to one and $0<m\le x_i\le M$ with $m<M$. Prove $(\sum w_ix_i)(\sum w_i/x_i)\le(M+m)^2/(4Mm)$, and determine equality.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict, contest correctness, graded evidence or checkpoint credit."}}
```

<details>
<summary>Hint 1</summary>

Divide $(M-x_i)(x_i-m)\ge0$ by its positive input.

</details>

<details>
<summary>Hint 2</summary>

Average to bound the sum of the mean and Mm times the reciprocal mean, then use AM-GM on those two aggregates.

</details>

<details>
<summary>Model proof</summary>

Use the endpoint secant relation to reverse the usual reciprocal lower bound.

1. Dividing the product gives $x_i+Mm/x_i\le M+m$. Let the two weighted means be s and t; then $s+Mm t\le M+m$.
2. AM-GM gives $4Mm st\le(s+Mm t)^2\le(M+m)^2$, yielding the claim.
3. Equality first requires every input at m or M. Equality in the aggregate AM-GM requires $s=Mm t$.
4. If total weight at M is theta, that equation is $m+\theta(M-m)=M-\theta(M-m)$, so theta is one half. Conversely that endpoint split attains the bound.
5. The positive lower endpoint is essential for the reciprocal divisions. Fixed weights not admitting an exact half split need not attain the universal constant.

**Self-assessment rubric**

- Derive the pointwise reciprocal bound with a positive denominator.
- Combine averaging and AM-GM with correct scaling.
- Require endpoint values and solve the balancing weight equation.
- Verify sufficiency and retain all domain conditions.

</details>
