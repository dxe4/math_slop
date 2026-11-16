# Find every element of a prescribed order

*Medium · [Abstract algebra problems](index.md)*

Find all canonical residues of additive order exactly $6$ in $\mathbb Z/24\mathbb Z$.

```answer
{"answer":{"kind":"set","expected":[4,20],"checker_scope":"Exact stated finite group or ring answer only; optional personal reasoning is not graded."}}
```

<details>
<summary>Hint 1</summary>

Translate the order requirement into a condition on a greatest common divisor.

</details>

<details>
<summary>Hint 2</summary>

Factor out that gcd and examine the remaining coprime representatives.

</details>

<details>
<summary>Worked solution</summary>

The order formula isolates a smaller coprimality problem.

1. The requirement is $24/\gcd(24,k)=6$, so $\gcd(24,k)=4$.
2. Write $k=4u$ with $0\le u<6$. Then the gcd condition is $\gcd(6,u)=1$.
3. The possibilities are $u=1,5$, giving the complete residue set $\{4,20\}$.

</details>
