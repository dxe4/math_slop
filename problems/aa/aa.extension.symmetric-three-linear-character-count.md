# Factor one-dimensional representations through an abelian quotient

*Easy · [Abstract algebra problems](index.md)*

How many distinct one-dimensional complex representations does $S_3$ have, up to isomorphism? Explain why there are no others besides those you count.

```answer
{"answer":{"kind":"integer","expected":2,"checker_scope":"Only the requested exact character invariant is checked; no written argument is automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

A map into $mathbf C^\times$ kills every commutator.

</details>

<details>
<summary>Hint 2</summary>

Use the sign map and the commutator subgroup of $S_3$.

</details>

<details>
<summary>Worked solution</summary>

All linear characters factor through the abelianization.

1. The commutator subgroup of $S_3$ is $A_3$: commutators lie in the sign kernel, and a commutator of transpositions generates its order-three subgroup.
2. Thus every linear character factors through $S_3/A_3\cong C_2$.
3. A generator of $C_2$ has image $1$ or $-1$, giving exactly the trivial and sign characters.

</details>
