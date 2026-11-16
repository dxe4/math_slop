# Recover a rational-canonical shape from characteristic and minimal polynomials

*Hard · [Abstract algebra problems](index.md)*

A Q-linear operator on Q^4 has characteristic polynomial $(t-1)^3(t+1)$ and minimal polynomial (t-1)^2(t+1). Return the degrees of its nonconstant invariant factors in divisibility order.

```answer
{"answer":{"kind":"vector","expected":["1","3"],"checker_scope":"Exact requested finite invariant only. Graduate algebra reasoning, classification hypotheses and proofs are supplied for personal study and are not automatically certified. This new skill does not expand any existing objective contract."}}
```

<details>
<summary>Hint 1</summary>

The largest invariant factor is the minimal polynomial.

</details>

<details>
<summary>Hint 2</summary>

All invariant factors multiply to the characteristic polynomial.

</details>

<details>
<summary>Worked solution</summary>

The largest invariant factor and the remaining degree force the whole invariant-factor list.

1. The largest invariant factor has degree three and equals the stated minimal polynomial.
2. The product of all earlier factors must be the quotient of the characteristic polynomial by it, namely t-1, of degree one.
3. Thus there is one earlier nonconstant factor t-1, dividing the largest, and the ordered degree vector is (1,3).

</details>
