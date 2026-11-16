# Evaluate a quadratic character by reciprocity and a supplementary law

*Medium · [Computational arithmetic problems](index.md)*

Compute the Legendre symbol $(37/101)$ using quadratic reciprocity and the supplementary formula for (3/p). Both 37 and 101 are prime.

```answer
{"answer":{"kind":"integer","expected":"1","checker_scope":"Exact requested integer, rational or finite coefficient vector only. The stated theorem or model is part of the supplied mathematics; no learner program or unrestricted proof is run or certified. This new skill does not expand an existing objective contract."}}
```

<details>
<summary>Hint 1</summary>

One of the two primes is one modulo four, so reciprocity introduces no negative sign.

</details>

<details>
<summary>Hint 2</summary>

Reduce the numerator after reversing, then use multiplicativity.

</details>

<details>
<summary>Worked solution</summary>

Reciprocity reduces a larger residue calculation to one small character.

1. Since 37 is one modulo four, reciprocity gives (37/101)=(101/37)=(27/37).
2. Multiplicativity gives (27/37)=(3/37)^3. The prime 37 is one modulo twelve, so the three-supplement gives (3/37)=1.
3. Thus the requested symbol is one.

</details>
