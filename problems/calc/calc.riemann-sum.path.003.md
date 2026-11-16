# Riemann sums: identify general sum and limit

*Medium · [Calculus](index.md)*

For $f(x)=x$ on $[0,2]$, let $S_{n}$ use n equal subintervals and right endpoints. Using Σ$i=n(n+1)/2$, write $S_{n}=A+B/n$. Return A, B and limit as n tends to infinity.

```answer
{"answer":{"kind":"record_of_rationals","expected":{"A":"2","B":"2","limit":"2"},"checker_scope":"Checks the stated exact numeric entries only. It does not certify an explanation or unrestricted proof."}}
```

<details>
<summary>Hint 1</summary>

Multiply the sampled input by the width before summing.

</details>

<details>
<summary>Hint 2</summary>

Use the given finite-sum identity before taking the limit.

</details>

<details>
<summary>Worked solution</summary>

The identity gives $S_{n}=2$($n+1$)/$n=2+2/n$, whose limit is $2$.

1. The width is $2/n$ and sample i is 2i/n, so $S_{n}=(4/n^{2})$Σi.
2. The identity gives $S_{n}=2$($n+1$)/$n=2+2/n$, whose limit is $2$.

</details>
