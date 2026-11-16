# Detect persistent rational-irrational oscillation

*Medium · [Real analysis](index.md)*

On $[0,1]$, let $f(x)=1$ for rational $x$ and $0$ for irrational $x$. Both kinds occur in every interval of positive length. For any finite partition, return the lower Darboux sum in lower and the upper Darboux sum in upper.

```answer
{"answer":{"kind":"record_of_rationals","expected":{"lower":"0","upper":"1"},"checker_scope":"Checks the complete displayed exact mathematical answer under the original finite givens. Any written explanation remains separate from this bounded automatic result."}}
```

<details>
<summary>Hint 1</summary>

Find the infimum and supremum over each whole partition cell.

</details>

<details>
<summary>Hint 2</summary>

Add the corresponding height-times-width terms, using the total interval length.

</details>

<details>
<summary>Worked solution</summary>

Darboux extrema use every value in the whole cell.

1. Every positive-length cell contains both values, so its infimum is $0$ and its supremum is $1$.
2. The lower sum is therefore $0$, while the upper sum is the sum of all cell lengths, which is $1$.
3. Every partition has gap $1$, so no partitions make the gap arbitrarily small and the function is not Riemann integrable.

</details>
