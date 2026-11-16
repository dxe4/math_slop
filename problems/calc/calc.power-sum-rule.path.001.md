# Power and sum rules: differentiate polynomial

*Medium · [Calculus](index.md)*

Differentiate $f(x)=3x^{4}-2x^{2}+7$. Return a polynomial expression and excluded inputs; this polynomial has no excluded real inputs.

```answer
{"answer":{"kind":"expression_with_domain","expected":{"expression":"12x^3-4x","excluded":[]},"checker_scope":"Checks a bounded polynomial expression and the stated excluded-input set. It does not certify a general proof."}}
```

<details>
<summary>Hint 1</summary>

Apply d(xⁿ)/$dx=nx$ⁿ⁻¹ term by term.

</details>

<details>
<summary>Hint 2</summary>

Constants differentiate to zero.

</details>

<details>
<summary>Worked solution</summary>

The constant contributes zero, giving $f^{\prime}(x)=12x^{3}-4x$ for all real x.

1. Differentiate $3x^{4}$ to $12x^{3}$ and $-2x^{2}$ to −4x.
2. The constant contributes zero, giving $f^{\prime}(x)=12x^{3}-4x$ for all real x.

</details>
