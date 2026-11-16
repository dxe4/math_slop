# Check coordinate-map multiplicity at one regular target

*Easy · [Calculus](index.md)*

For T(u,v)=(u²−v²,2uv), how many real source points map to $(1,0)$?

```answer
{"answer":{"kind":"integer","expected":2,"checker_scope":"Only the requested exact result in the stated domain, units and orientation is checked; reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

The second equation forces u=0 or v=0.

</details>

<details>
<summary>Hint 2</summary>

Check which of those cases can satisfy u²−v²=1.

</details>

<details>
<summary>Worked solution</summary>

A locally regular coordinate formula can have more than one global preimage.

1. If u=0, the first equation is −v²=1, impossible.
2. If v=0, it requires u²=1, giving u=1 or u=−1.
3. There are exactly 2 preimages.

</details>
