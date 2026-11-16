# Complete a secant before using its angle

*Medium · [Original olympiad-style problems](index.md)*

From a point $P$ outside a circle, rays meet it in the orders $P,A,B$ and $P,C,D$. Given $PA=2$, $PB=12$, $PC=3$, and $\angle APC=60^\circ$, find $CD$.

```answer
{"answer":{"kind":"integer","expected":"5","checker_scope":"Exact finite result only; a correct entry does not certify the accompanying argument or a contest performance."}}
```

<details>
<summary>Hint 1</summary>

The products on the two secants are equal.

</details>

<details>
<summary>Hint 2</summary>

First find $PD$, then subtract the near portion $PC$; the stated angle guarantees the near points are on distinct rays but is not needed for the power equation.

</details>

<details>
<summary>Worked solution</summary>

Power gives the full second secant rather than the chord length directly.

1. The point is exterior and both rays have the specified near-to-far orders, so the positive secant products satisfy $PA\cdot PB=PC\cdot PD$.
2. Thus $24=3PD$, giving $PD=8$. The chord on the second ray is $CD=PD-PC=8-3=5$.
3. The givens are geometrically consistent: the near points have squared separation $2^2+3^2-2\cdot2\cdot3\cos60^\circ=7$, and the circle through the two ray pairs is secured by their equal secant products. The angle supplies no extra multiplicative factor.

</details>
