# Check a quotient denominator before taking its limit

*Medium · [Real analysis](index.md)*

For positive integer n, let $a_{n}=(4n+1)/n$ and $b_{n}=(2n-1)/n$. Find lim $a_{n}/b_{n}$. Note that $b_{n}\geq 1$ for all permitted n.

```answer
{"answer":{"kind":"rational","expected":{"numerator":2,"denominator":1},"checker_scope":"Checks only the requested structured calculation or statement recognition. Open reasoning is unassessed, and correctness does not certify an unrestricted proof or mastery of the complete skill."}}
```

<details>
<summary>Hint 1</summary>

Compute the numerator and denominator limits separately.

</details>

<details>
<summary>Hint 2</summary>

The limiting denominator is nonzero, and the supplied lower bound ensures every quotient is defined.

</details>

<details>
<summary>Worked solution</summary>

The quotient law uses a nonzero denominator limit.

1. The numerator tends to $4$ and the denominator tends to $2$.
2. Since the denominator is nonzero and bounded away from zero, the quotient tends to $4/2=2$.

</details>
