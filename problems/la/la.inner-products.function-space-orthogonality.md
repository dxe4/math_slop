# Orthogonality in a polynomial space

*Medium · [Linear algebra problems](index.md)*

For polynomials, use $\langle f,g\rangle=\int_0^1 f(x)g(x)\,dx$. Find the real constant $c$ such that $x-c$ is orthogonal to the constant polynomial $1$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":2},"checker_scope":"Exact stated finite-dimensional answer only; optional personal reasoning is not graded."}}
```

<details>
<summary>Hint 1</summary>

Translate orthogonality into the integral specified by this inner product.

</details>

<details>
<summary>Hint 2</summary>

Integrate the linear polynomial and impose the zero condition.

</details>

<details>
<summary>Worked solution</summary>

The inner-product definition converts orthogonality into a scalar integral equation.

1. The condition is $0=\langle x-c,1\rangle=\int_0^1(x-c)\,dx$.
2. The integral equals $[x^2/2-cx]_0^1=1/2-c$.
3. Therefore $c=1/2$, which makes the integral vanish exactly.

</details>
