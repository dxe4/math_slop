# Order of an additive residue

*Easy · [Abstract algebra problems](index.md)*

Find the order of $8$ in the additive group $\mathbb Z/30\mathbb Z$.

```answer
{"answer":{"kind":"integer","expected":15,"checker_scope":"Exact stated finite group or ring answer only; optional personal reasoning is not graded."}}
```

<details>
<summary>Hint 1</summary>

The order is the least positive number of copies giving zero modulo the modulus.

</details>

<details>
<summary>Hint 2</summary>

Reduce the divisibility condition using the greatest common divisor.

</details>

<details>
<summary>Worked solution</summary>

An additive residue has order equal to the modulus divided by its gcd with the representative.

1. The order is the least $k>0$ with $30\mid8k$.
2. As $\gcd(30,8)=2$, this is equivalent to $15\mid4k$, hence to $15\mid k$.
3. The least such integer is $15$.

</details>
