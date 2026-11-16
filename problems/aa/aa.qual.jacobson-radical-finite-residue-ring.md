# Identify maximal ideals and their common radical

*Medium · [Abstract algebra problems](index.md)*

For $R=\mathbb Z/72$, return maximal\_ideal\_count, radical\_size and semisimple\_quotient\_size, where the radical is the intersection of all maximal ideals.

```answer
{"answer":{"kind":"record_of_rationals","expected":{"maximal_ideal_count":"2","radical_size":"12","semisimple_quotient_size":"6"},"checker_scope":"Exact requested finite invariant only. Graduate algebra reasoning, classification hypotheses and proofs are supplied for personal study and are not automatically certified. This new skill does not expand any existing objective contract."}}
```

<details>
<summary>Hint 1</summary>

Maximal ideals correspond to prime divisors of the modulus.

</details>

<details>
<summary>Hint 2</summary>

Intersect the two corresponding divisibility conditions before counting residues.

</details>

<details>
<summary>Worked solution</summary>

The finite commutative radical removes the repeated prime powers while retaining both residue fields.

1. The maximal ideals are the residues divisible by two and those divisible by three, since the only prime divisors of seventy-two are two and three.
2. Their intersection is the set of multiples of six, with twelve residue elements.
3. The quotient has seventy-two divided by twelve, or six elements, and is isomorphic to F2 times F3.

</details>
