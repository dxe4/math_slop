# Apply the nonzero square branch of the Legendre definition

*Easy · [Computational arithmetic problems](index.md)*

Let p be an odd prime and $p\nmid a$. Find the Legendre symbol (a^2/p).

```answer
{"answer":{"kind":"integer","expected":"1","checker_scope":"Exact requested integer, rational or finite coefficient vector only. The stated theorem or model is part of the supplied mathematics; no learner program or unrestricted proof is run or certified. This new skill does not expand an existing objective contract."}}
```

<details>
<summary>Hint 1</summary>

The nondivisibility condition excludes the zero-symbol case.

</details>

<details>
<summary>Hint 2</summary>

The residue already has an explicit square root.

</details>

<details>
<summary>Worked solution</summary>

An explicitly nonzero square has positive quadratic character.

1. Because p does not divide a, its square is nonzero modulo p.
2. The residue a squared is represented as the square of the nonzero residue a.
3. By the Legendre-symbol definition its value is one.

</details>
