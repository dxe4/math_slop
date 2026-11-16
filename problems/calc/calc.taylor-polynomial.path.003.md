# Taylor polynomials: apply second derivative factorial

*Medium · [Calculus](index.md)*

A function has $f(0)=2, f^{\prime}(0)=-3, f^{\prime\prime}(0)=8$. Find its degree-$2$ Taylor polynomial at $0$. Return a polynomial and empty excluded-input set.

```answer
{"answer":{"kind":"expression_with_domain","expected":{"expression":"2-3x+4x^2","excluded":[]},"checker_scope":"Checks a bounded polynomial expression and the stated excluded-input set. It does not certify a general proof."}}
```

<details>
<summary>Hint 1</summary>

A second derivative value is twice the quadratic coefficient.

</details>

<details>
<summary>Hint 2</summary>

Only the supplied derivatives are needed to construct this polynomial.

</details>

<details>
<summary>Worked solution</summary>

The quadratic coefficient is $8/2$!=$4$, giving $P_{2}(x)=2-3x+4x^{2}$. No remainder bound is supplied.

1. The constant and linear terms are $2$ and $-3x$.
2. The quadratic coefficient is $8/2$!=$4$, giving $P_{2}(x)=2-3x+4x^{2}$. No remainder bound is supplied.

</details>
