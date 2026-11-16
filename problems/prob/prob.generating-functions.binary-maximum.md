# Generate the maximum of two indicators

*Medium · [Probability problems](index.md)*

Let $U,V$ be independent fair zero-one indicators and $M=\max(U,V)$. Find $E[x^M]$ as a polynomial, with no excluded real inputs.

```answer
{"answer":{"kind":"expression","expected":"(1+3*x)/4","domain":{"variable":"x","excluded":[]},"checker_scope":"Exact answer for the stated probability model only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

The maximum is zero only if both coordinates are zero.

</details>

<details>
<summary>Hint 2</summary>

There are only two possible values of the maximum.

</details>

<details>
<summary>Worked solution</summary>

Determine the transformed distribution before averaging its powers.

1. $M=0$ occurs only at $(U,V)=(0,0)$, with probability $1/4$.
2. Thus $M=1$ has probability $3/4$.
3. The polynomial is $1/4+(3/4)x=(1+3x)/4$.

</details>
