# Parameterize a counterclockwise circle

*Medium · [Multivariable calculus problems](index.md)*

For $F(x,y)=(-y,x)$ and the counterclockwise unit circle $C$, compute $\frac1\pi\oint_C F\cdot dr$.

```answer
{"answer":{"kind":"integer","expected":"2","checker_scope":"Exact requested integral value only; orientation and theorem hypotheses are explained in the model solution, not automatically certified by the scalar verdict."}}
```

<details>
<summary>Hint 1</summary>

Use $r(t)=(\cos t,\sin t)$ for one positive traversal.

</details>

<details>
<summary>Hint 2</summary>

Form the dot product with $r\prime(t)$ before integrating.

</details>

<details>
<summary>Worked solution</summary>

The tangential field agrees with the positively oriented unit tangent.

1. Take $0\leq t\leq2\pi$ and $r(t)=(\cos t,\sin t)$.
2. Both $F(r(t))$ and $r\prime(t)$ equal $(-\sin t,\cos t)$, so their dot product is $1$.
3. The circulation is $2\pi$, giving normalized value $2$.

</details>
