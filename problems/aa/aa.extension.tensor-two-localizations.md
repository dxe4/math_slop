# Combine denominators by a tensor universal property

*Medium · [Abstract algebra problems](index.md)*

Find the smallest positive squarefree D such that the Z-algebra $Z[1/2]\otimes_Z Z[1/3]$ is naturally isomorphic to Z\[1/D\]. Justify the natural isomorphism, not merely a count of prime factors.

```answer
{"answer":{"kind":"integer","expected":6,"checker_scope":"Exact requested localized invariant only; no local-to-global theorem is automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

The multiplication map lands in Z\[1/6\].

</details>

<details>
<summary>Hint 2</summary>

In the tensor algebra both two and three are units, giving the reverse universal map.

</details>

<details>
<summary>Worked solution</summary>

The tensor product combines compatible scalar inversion requirements.

1. Multiplication of rational representatives gives a Z-algebra map from the tensor product to Z\[1/6\].
2. The tensor algebra contains commuting images of the two localization factors, so both two and three are units. The universal property of localization supplies a map from Z\[1/6\] back to the tensor algebra; the maps fix both factor images and hence are inverse.
3. Any Z\[1/D\] equal to this rational subalgebra must invert both primes two and three, and needs no others. The smallest positive squarefree choice is D=6.

</details>
