# Fix an integration constant with a nonzero-center value

*Medium · [Calculus](index.md)*

Find the polynomial F with $F^{\prime}(x)=3x^2-4x+1$ and F(2)=5.

```answer
{"answer":{"kind":"expression","expected":"x^3-2*x^2+x+3","checker_scope":"Exact requested value, finite set, choice or bounded polynomial with its stated excluded inputs only; no unrestricted symbolic function, causal assertion or analytic proof is automatically certified. No new same-version required slot is introduced.","domain":{"variable":"x","excluded":[]}}}
```

<details>
<summary>Hint 1</summary>

Integrate every term, retaining a free constant.

</details>

<details>
<summary>Hint 2</summary>

Use the supplied value only after the polynomial family is complete.

</details>

<details>
<summary>Worked solution</summary>

An initial value chooses one member of an antiderivative family.

1. The general polynomial family is F(x)=x^3-2x^2+x+C.
2. At x=2, the nonconstant terms sum to two, so 2+C=5 gives C=3.
3. Thus F(x)=x^3-2x^2+x+3, which has the required derivative and value.

</details>
