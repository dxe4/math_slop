# Euler's totient: count coprime representatives

*Easy · [Number theory](index.md)*

Euler’s totient φ(n) counts integers r with $1 \leq  r \leq  n$ and $\gcd (r,n)=1$. Find $\varphi (12)$.

```answer
{"answer":{"kind":"integer","expected":4,"checker_scope":"Checks the authored exact structured answer for this instance. Selection and proof scaffolds assess only the stated narrow task; no unrestricted proof validity is certified."}}
```

<details>
<summary>Hint 1</summary>

List representatives coprime to $12$.

</details>

<details>
<summary>Hint 2</summary>

Exclude integers sharing factor $2$ or $3$ with $12$.

</details>

<details>
<summary>Worked solution</summary>

The totient counts units, rather than prime representatives.

1. The retained integers are $1,5,7,11$.
2. There are four, so $\varphi (12)=4$.

</details>
