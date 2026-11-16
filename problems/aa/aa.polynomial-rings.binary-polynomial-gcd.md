# Find a monic polynomial gcd

*Medium · [Abstract algebra problems](index.md)*

Find the monic gcd of $x^3+1$ and $x^2+1$ in $\mathbb F_2[x]$. Enter its canonical coefficient vector in increasing degree order.

```answer
{"answer":{"kind":"vector","expected":[1,1],"checker_scope":"Exact stated finite group, polynomial or field answer only; optional personal reasoning is not graded."}}
```

<details>
<summary>Hint 1</summary>

Factor both polynomials using the field characteristic.

</details>

<details>
<summary>Hint 2</summary>

Identify the common linear factor and compare its multiplicity in the two factorizations.

</details>

<details>
<summary>Worked solution</summary>

Factorization distinguishes a shared factor from an extra repeated factor.

1. In characteristic two, $x^2+1=(x+1)^2$ and $x^3+1=(x+1)(x^2+x+1)$.
2. The second factor of the cubic does not vanish at $1$, since $1+1+1=1$ in $\mathbb F_2$. Thus only one copy of $x+1$ is common.
3. The monic gcd is $x+1$, represented by $[1,1]$.

</details>
