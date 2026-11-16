# Separate a free summand from finite torsion

*Medium · [Abstract algebra problems](index.md)*

A Z-module has three generators and relations $2e_1=0$, 6e2=0, with no relation on e3. Return free\_rank, torsion\_order and minimum\_generator\_count.

```answer
{"answer":{"kind":"record_of_rationals","expected":{"free_rank":"1","torsion_order":"12","minimum_generator_count":"3"},"checker_scope":"Exact requested finite invariant only. Graduate algebra reasoning, classification hypotheses and proofs are supplied for personal study and are not automatically certified. This new skill does not expand any existing objective contract."}}
```

<details>
<summary>Hint 1</summary>

The displayed diagonal relations already form divisibility-ordered invariant factors.

</details>

<details>
<summary>Hint 2</summary>

To prove a generator minimum, reduce the whole module modulo two.

</details>

<details>
<summary>Worked solution</summary>

A free summand does not erase the generator demands of two-primary torsion.

1. The module is Z/2 plus Z/6 plus Z, so its free rank is one and torsion subgroup order is twelve.
2. The three given generators suffice. Modulo twice the module, the quotient is a three-dimensional F2 vector space.
3. Any generating family maps to generators of that quotient, so at least three are needed; the minimum generator count is three.

</details>
