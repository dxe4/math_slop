# Find a minimal polynomial from a polynomial derivative chain

*Medium · [Linear algebra problems](index.md)*

Work over $\mathbb R$; vectors are columns and all data are dimensionless. On $P_3(\mathbb R)$ let $D(p)=\frac{dp}{dx}$. Find the degree of the minimal polynomial of this linear operator.

```answer
{"answer":{"kind":"integer","expected":4,"checker_scope":"Only the requested bounded exact result is checked; no unrestricted proof is automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

Four differentiations kill every cubic.

</details>

<details>
<summary>Hint 2</summary>

Check the effect of only three differentiations on the highest-degree monomial.

</details>

<details>
<summary>Worked solution</summary>

Prove the nilpotency exponent is sharp.

1. $D^4=0$ on every polynomial of degree at most three, so the minimal polynomial divides $x^4$.
2. But $D^3(x^3)=6\ne0$, so the exponent cannot be three or less.
3. A divisor of $x^4$ is a pure power of $x$, and the sharp exponent is four. Thus its degree is four.

</details>
