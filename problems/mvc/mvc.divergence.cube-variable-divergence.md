# Integrate a varying divergence

*Medium · [Multivariable calculus problems](index.md)*

Let $F=(x^3,0,0)$. Compute total outward flux through the boundary of $[0,1]^3$.

```answer
{"answer":{"kind":"integer","expected":"1","checker_scope":"Exact requested integral value only; orientation and theorem hypotheses are explained in the model solution, not automatically certified by the scalar verdict."}}
```

<details>
<summary>Hint 1</summary>

The divergence depends only on one coordinate.

</details>

<details>
<summary>Hint 2</summary>

The two other coordinates contribute unit interval lengths.

</details>

<details>
<summary>Worked solution</summary>

The divergence theorem turns six face integrals into one simple volume integral.

1. The polynomial field is smooth and has divergence $3x^2$.
2. The volume integral is $\int_0^13x^2\,dx$ times two unit interval lengths.
3. Its value is $1$, agreeing with the direct flux from the $x=1$ face alone.

</details>
