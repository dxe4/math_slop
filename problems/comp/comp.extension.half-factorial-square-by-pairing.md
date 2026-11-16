# Use complementary factorial factors to compute a square residue

*Easy · [Computational arithmetic problems](index.md)*

Use Wilson at the prime $17$ and pair k with 17-k for k=1,...,8 to find the canonical residue of (8!)^2 modulo 17.

```answer
{"answer":{"kind":"integer","expected":"16","checker_scope":"Exact requested integer, rational or finite coefficient vector only. The stated theorem or model is part of the supplied mathematics; no learner program or unrestricted proof is run or certified. This new skill does not expand an existing objective contract."}}
```

<details>
<summary>Hint 1</summary>

Each paired product is negative k squared modulo seventeen.

</details>

<details>
<summary>Hint 2</summary>

There are eight such pairs, so their combined sign is positive.

</details>

<details>
<summary>Worked solution</summary>

Complementary residue pairing converts a full factorial into a half-factorial square.

1. The paired product for 16! is (-1)^8 times (8!)^2, so it equals the requested square modulo seventeen.
2. Wilson says 16! is negative one modulo seventeen.
3. The canonical residue of the square is therefore sixteen.

</details>
