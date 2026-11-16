# Recover roots lost by a positive-characteristic gcd shortcut

*Medium · [Abstract algebra problems](index.md)*

Over F3, find the monic squarefree part of $f=x^{10}-x$, meaning the product of its distinct monic irreducible factors. Enter its coefficient vector in increasing degree order. Explain why f/gcd(f,f') alone misses a factor here.

```answer
{"answer":{"kind":"vector","expected":["0","2","1"],"checker_scope":"Exact requested polynomial invariant only; no irreducibility or algebraic-geometry proof is automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

Use x^9-1=(x-1)^9 in characteristic three.

</details>

<details>
<summary>Hint 2</summary>

A derivative can retain the entire multiplicity of a p-power factor.

</details>

<details>
<summary>Worked solution</summary>

A positive-characteristic squarefree algorithm must recursively recover inseparable factors.

1. The factorization is f=x\*(x^9-1)=x\*(x-1)^9. Its distinct monic factors are x and x-1.
2. Thus the monic squarefree part is x\*(x-1)=x^2+2x in F3, with coefficient vector\[0,2,1\].
3. But fprime=x^9-1=(x-1)^9, so gcd(f,fprime)=(x-1)^9 and f/gcd=x. That shortcut loses the root one because of its characteristic-three multiplicity.

</details>
