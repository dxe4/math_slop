# Generate a count drawn without replacement

*Medium · [Probability problems](index.md)*

An urn has three red and two blue balls. Two balls are sampled uniformly without replacement, and $X$ counts the red balls. Find $E[x^X]$ as a polynomial, with no excluded real inputs.

```answer
{"answer":{"kind":"expression","expected":"(1+6*x+3*x^2)/10","domain":{"variable":"x","excluded":[]},"checker_scope":"Exact answer for the stated probability model only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Count unordered samples separately for each possible red count.

</details>

<details>
<summary>Hint 2</summary>

Normalize all three count probabilities using the same total sample count.

</details>

<details>
<summary>Worked solution</summary>

The hypergeometric masses become the coefficients of the generating polynomial.

1. There are $\binom52=10$ equally likely samples.
2. Red counts $0,1,2$ occur in $\binom22=1$, $\binom31\binom21=6$, and $\binom32=3$ samples respectively.
3. Therefore the polynomial is $(1+6x+3x^2)/10$.

</details>
