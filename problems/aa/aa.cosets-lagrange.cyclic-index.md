# Compute an index from a generator

*Easy · [Abstract algebra problems](index.md)*

Find the index of $\langle9\rangle$ in the additive group $\mathbb Z/36\mathbb Z$.

```answer
{"answer":{"kind":"integer","expected":9,"checker_scope":"Exact stated finite group or ring answer only; optional personal reasoning is not graded."}}
```

<details>
<summary>Hint 1</summary>

Find how many multiples of the generator occur before returning to zero.

</details>

<details>
<summary>Hint 2</summary>

Divide the group size by the subgroup size.

</details>

<details>
<summary>Worked solution</summary>

The index counts equal-sized cosets of the generated subgroup.

1. The element $9$ has order $36/\gcd(36,9)=4$.
2. Hence its generated subgroup has four elements.
3. The index is $36/4=9$.

</details>
