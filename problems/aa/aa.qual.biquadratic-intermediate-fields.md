# Recover all quadratic intermediate fields from independent sign changes

*Medium · [Abstract algebra problems](index.md)*

The splitting field L of $(X^2-2)(X^2-3)$ over Q is biquadratic. Return the set of positive squarefree integers d for which Q(sqrt(d)) is a quadratic intermediate field of L/Q.

```answer
{"answer":{"kind":"set","expected":["2","3","6"],"checker_scope":"Exact requested finite invariant only. Graduate algebra reasoning, classification hypotheses and proofs are supplied for personal study and are not automatically certified. This new skill does not expand any existing objective contract."}}
```

<details>
<summary>Hint 1</summary>

The Galois group changes the two square-root signs independently.

</details>

<details>
<summary>Hint 2</summary>

Quadratic intermediate fields correspond to its three subgroups of order two.

</details>

<details>
<summary>Worked solution</summary>

The subgroup lattice exhausts intermediate fields rather than merely exhibiting candidates.

1. The field L=Q(sqrt(2),sqrt(3)) has degree four, since sqrt(3) is not in Q(sqrt(2)), and its Galois group is C2 times C2.
2. Its three order-two subgroups fix sqrt(2), sqrt(3), and sqrt(6) respectively.
3. Galois correspondence gives exactly three quadratic subfields, so the requested radicands are {2,3,6}.

</details>
