# Count a norm fiber in a finite cyclic multiplicative group

*Medium · [Abstract algebra problems](index.md)*

How many x in $\mathbb F_{25}$ satisfy N\_(F25/F5)(x)=2?

```answer
{"answer":{"kind":"integer","expected":"6","checker_scope":"Exact requested finite invariant only. Graduate algebra reasoning, classification hypotheses and proofs are supplied for personal study and are not automatically certified. This new skill does not expand any existing objective contract."}}
```

<details>
<summary>Hint 1</summary>

A nonzero prescribed norm excludes x=0.

</details>

<details>
<summary>Hint 2</summary>

The norm on the multiplicative group is the sixth-power map.

</details>

<details>
<summary>Worked solution</summary>

Cyclicity turns the norm into a surjective group homomorphism with equal nonzero fiber sizes.

1. The norm is x^(1+5)=x^6. The multiplicative group F25 has order twenty-four and is cyclic.
2. The sixth-power map has kernel size six and image size four, exactly the whole F5 multiplicative group.
3. The nonzero element two therefore has six preimages; zero contributes none.

</details>
