# Use the identity element in both ring coordinates

*Easy · [Abstract algebra problems](index.md)*

Find the characteristic of the unital product ring $Z/4\times Z/6$.

```answer
{"answer":{"kind":"integer","expected":12,"checker_scope":"Exact requested finite ring invariant only; no radical or classification proof is automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

A multiple of the product identity is zero only when both coordinates vanish.

</details>

<details>
<summary>Hint 2</summary>

Take the least positive common multiple.

</details>

<details>
<summary>Worked solution</summary>

Product-ring characteristic combines the two additive identity orders.

1. The product identity is(1 modulo4,1 modulo6).
2. Its n-fold sum is zero exactly when four and six both divide n.
3. The least such n is lcm(4,6)=12.

</details>
