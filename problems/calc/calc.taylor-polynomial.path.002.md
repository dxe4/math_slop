# Taylor polynomials: expand about nonzero center

*Medium · [Calculus](index.md)*

For $f(x)=x^{3}$, find its degree-$2$ Taylor polynomial about $a=2$. Return the polynomial in x and an empty excluded-input set.

```answer
{"answer":{"kind":"expression_with_domain","expected":{"expression":"6x^2-12x+8","excluded":[]},"checker_scope":"Checks a bounded polynomial expression and the stated excluded-input set. It does not certify a general proof."}}
```

<details>
<summary>Hint 1</summary>

Use powers of $x-2$ before expanding.

</details>

<details>
<summary>Hint 2</summary>

Divide the second derivative by $2$!.

</details>

<details>
<summary>Worked solution</summary>

Expanding gives $6x^{2}-12x+8$. The omitted term is $(x-2)^{3}$.

1. At $2, f=8, f^{\prime}=12$ and $f^{\prime\prime}=12$, giving $8+12$($x-2$)+$6$($x-2$)².
2. Expanding gives $6x^{2}-12x+8$. The omitted term is $(x-2)^{3}$.

</details>
