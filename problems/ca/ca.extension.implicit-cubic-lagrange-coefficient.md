# Extract an implicit analytic coefficient by inversion

*Hard · [Complex analysis problems](index.md)*

The analytic branch w near zero satisfies $w=z(1+w)^3$ and w(0)=0. Find the coefficient of z^4 in w. You may use Lagrange inversion: if w=z\*phi(w), then \[z^n\]w=(1/n)\[t^(n-1)\]phi(t)^n.

```answer
{"answer":{"kind":"integer","expected":55,"checker_scope":"Exact requested coefficient or bound only; the analytic justification remains a worked model rather than an automatically checked proof."}}
```

<details>
<summary>Hint 1</summary>

Verify that the branch exists before extracting its coefficient.

</details>

<details>
<summary>Hint 2</summary>

Apply the stated formula with n=4 and keep the exponent on phi.

</details>

<details>
<summary>Worked solution</summary>

An implicit branch can be counted through an ordinary binomial coefficient.

1. For F(z,w)=w-z(1+w)^3, the derivative with respect to w at (0,0) is one, so the holomorphic implicit-function theorem supplies a unique local branch.
2. The stated inversion formula gives \[z^4\]w=(1/4)\[t^3\](1+t)^12.
3. The binomial coefficient is 12\*11\*10/6=220; division by four gives 55.

</details>
