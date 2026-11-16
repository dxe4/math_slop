# Generate a product of independent variables

*Medium · [Probability problems](index.md)*

Let $U$ be a fair zero-one indicator and $V$ be uniform on $\{1,2\}$, independently. For $Z=UV$, find the polynomial $E[x^Z]$, with no excluded real inputs.

```answer
{"answer":{"kind":"expression","expected":"(2+x+x^2)/4","domain":{"variable":"x","excluded":[]},"checker_scope":"Exact answer for the stated probability model only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Split according to whether the indicator is zero or one.

</details>

<details>
<summary>Hint 2</summary>

When the indicator is one, independence leaves the stated law of the other factor unchanged.

</details>

<details>
<summary>Worked solution</summary>

A product with an indicator gives a mixture with an atom at zero.

1. When $U=0$, the product is zero, giving probability $1/2$ at $Z=0$.
2. Independence gives probability $1/4$ each at $Z=1$ and $Z=2$.
3. The polynomial is $1/2+x/4+x^2/4=(2+x+x^2)/4$.

</details>
