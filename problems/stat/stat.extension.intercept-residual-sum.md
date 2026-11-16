# Intercept residual sum

*Easy · [Statistics and probability](index.md)*

An ordinary least-squares fit includes an intercept and has residuals $1,-2,1$ for three observations. What is their sum?

```answer
{"answer":{"kind":"integer","expected":"0","checker_scope":"Checks only the requested exact finite answer under the stated model; it does not certify the reasoning or modeling assumptions."}}
```

<details>
<summary>Hint 1</summary>

Add the signed residuals, rather than their absolute values or squares.

</details>

<details>
<summary>Hint 2</summary>

Combine the two positive terms before subtracting the negative magnitude.

</details>

<details>
<summary>Worked solution</summary>

Compute the signed residual sum.

1. The signed sum is $\sum_i e_i=1+(-2)+1$.
2. The positive residuals total $2$, which cancels the negative residual $-2$.
3. Thus the sum is $0$, consistent with the intercept normal equation. A zero sum alone does not establish that a proposed fit is least squares.

</details>
