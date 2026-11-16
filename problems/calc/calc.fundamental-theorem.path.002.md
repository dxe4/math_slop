# Fundamental Theorem meaning: differentiate lower limit accumulation

*Medium · [Calculus](index.md)*

Let $G(x)=\int$ from x to $2$ of $(t^{2}+1)$ dt. Return $G^{\prime}(x)$ as a polynomial with an empty excluded-input set.

```answer
{"answer":{"kind":"expression_with_domain","expected":{"expression":"-x^2-1","excluded":[]},"checker_scope":"Checks a bounded polynomial expression and the stated excluded-input set. It does not certify a general proof."}}
```

<details>
<summary>Hint 1</summary>

A variable lower limit contributes a minus sign.

</details>

<details>
<summary>Hint 2</summary>

Reverse the bounds if you want the usual upper-limit form.

</details>

<details>
<summary>Worked solution</summary>

The theorem then gives $G^{\prime}(x)=-(x^{2}+1)$.

1. Reverse the bounds to write $G(x)=-\int$ from $2$ to x of $(t^{2}+1)$ dt.
2. The theorem then gives $G^{\prime}(x)=-(x^{2}+1)$.

</details>
