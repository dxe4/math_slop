# Transfer a derivative error over a fixed interval length

*Easy · [Real analysis](index.md)*

For C^1 functions f\_n,f on \[0,3\], suppose f\_n(0)=f(0) and $|f_n'-f'|\le2/n$ everywhere. Integrate this estimate to find the guaranteed bound on sup \|f\_10-f\|.

```answer
{"answer":{"kind":"rational","expected":{"numerator":3,"denominator":5},"checker_scope":"Exact requested uniform error or derivative observation only; no interchange theorem is automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

The equal initial values remove the integration constant.

</details>

<details>
<summary>Hint 2</summary>

The worst possible path length is three.

</details>

<details>
<summary>Worked solution</summary>

Derivative control becomes function control after one anchored integration.

1. For any x in \[0,3\], f\_n(x)-f(x)=integral\_0^x (f\_nprime-fprime).
2. The modulus is at most x\*(2/n)&lt;=6/n.
3. At n=10, the uniform bound is 6/10=3/5.

</details>
