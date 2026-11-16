# Weight each cell's oscillation by its own length

*Easy · [Real analysis](index.md)*

A partition of \[0,1\] has cells of lengths 1/4 and 3/4. A bounded function has infimum/supremum 1,3 on the first cell and -2,4 on the second. Find its Darboux gap $U(P,f)-L(P,f)$.

```answer
{"answer":{"kind":"integer","expected":5,"checker_scope":"Exact requested integral quantity or gap bound only; no general integrability proof is automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

The gap contribution is cell length times supremum minus infimum.

</details>

<details>
<summary>Hint 2</summary>

Do not average the two oscillations equally.

</details>

<details>
<summary>Worked solution</summary>

Darboux control depends on both vertical range and horizontal size.

1. The first cell has oscillation 3-1=2, contributing (1/4)\*2=1/2.
2. The second has oscillation 4-(-2)=6, contributing (3/4)\*6=9/2.
3. The total gap is 1/2+9/2=5.

</details>
