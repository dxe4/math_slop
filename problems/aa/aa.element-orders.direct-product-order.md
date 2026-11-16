# Order in a product group

*Medium · [Abstract algebra problems](index.md)*

Find the additive order of $(4,5)$ in $(\mathbb Z/14\mathbb Z)\times(\mathbb Z/15\mathbb Z)$.

```answer
{"answer":{"kind":"integer","expected":21,"checker_scope":"Exact stated finite group or ring answer only; optional personal reasoning is not graded."}}
```

<details>
<summary>Hint 1</summary>

Both coordinates must return to zero at the same positive time.

</details>

<details>
<summary>Hint 2</summary>

Find the two coordinate orders and take the least common multiple.

</details>

<details>
<summary>Worked solution</summary>

A product element returns to the identity when every coordinate does.

1. The first coordinate has order $14/\gcd(14,4)=7$.
2. The second has order $15/\gcd(15,5)=3$.
3. The least common multiple is $21$, the order of the pair.

</details>
