# Taylor polynomials: assemble maclaurin coefficients

*Medium · [Calculus](index.md)*

For $f(x)=e$ˣ, the values $f(0),f^{\prime}(0),f^{\prime\prime}(0),f^{\prime\prime\prime}(0)$ are all $1$. Construct its degree-$3$ Taylor polynomial at $0$. Return a polynomial and empty excluded-input set.

```answer
{"answer":{"kind":"expression_with_domain","expected":{"expression":"1+x+x^2/2+x^3/6","excluded":[]},"checker_scope":"Checks a bounded polynomial expression and the stated excluded-input set. It does not certify a general proof."}}
```

<details>
<summary>Hint 1</summary>

Divide derivative values by factorials.

</details>

<details>
<summary>Hint 2</summary>

The coefficient of $x^{3}$ uses $3!=6$.

</details>

<details>
<summary>Worked solution</summary>

Thus $P_{3}(x)=1+x+x^{2}/2+x^{3}/6$. This is a local polynomial model, not exact equality with eˣ.

1. The Taylor coefficients are $f^{k} (0)/k$! for $k=0,1,2,3$.
2. Thus $P_{3}(x)=1+x+x^{2}/2+x^{3}/6$. This is a local polynomial model, not exact equality with eˣ.

</details>
