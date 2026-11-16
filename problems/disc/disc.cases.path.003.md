# Close both parity cases

*Medium · [Discrete mathematics](index.md)*

For integer n, give the remainder modulo $2$ of $n(n+1)$ when n is even and when n is odd. Fields: even\_case, odd\_case.

```answer
{"answer":{"kind":"record_of_rationals","expected":{"even_case":"0","odd_case":"0"},"checker_scope":"Checks only this authored complete-product-parity-cases task. Does not certify unrestricted proof validity, general construction ability or full mastery of proof by exhaustive cases."}}
```

<details>
<summary>Hint 1</summary>

In the even case n is divisible by $2$.

</details>

<details>
<summary>Hint 2</summary>

In the odd case $n+1$ is divisible by $2$.

</details>

<details>
<summary>Worked solution</summary>

Cases must cover the domain, and the conclusion must follow in each case. These tasks recognize exhaustive partitions and complete finite remainder calculations.

1. For $n=2k, n(n+1)=2k$($2k+1$) has remainder $0$.
2. For $n=2k+1, n(n+1)=(2k+1) (2k+2)$ also has remainder $0$.

</details>
