# Differentiate an entire polynomial

*Easy · [Complex analysis problems](index.md)*

For $f(z)=z^4-z^3+2z+1$, find the polynomial $p(x)=f^{\prime}(x)$ on the real axis. Enter $p(x)$ with no excluded real inputs.

```answer
{"answer":{"kind":"expression","expected":"4*x^3-3*x^2+2","domain":{"variable":"x","excluded":[]},"checker_scope":"Exact requested complex value, polynomial, coordinate list or count only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Complex polynomial differentiation uses the usual power rule.

</details>

<details>
<summary>Hint 2</summary>

Substitute the real variable only after differentiating.

</details>

<details>
<summary>Worked solution</summary>

An entire polynomial differentiates coefficient by coefficient.

1. The derivatives of the four terms are $4z^3$, $-3z^2$, $2$ and $0$.
2. Hence $f^{\prime}(z)=4z^3-3z^2+2$.
3. On the real axis the requested polynomial is $4x^3-3x^2+2$, defined everywhere.

</details>
