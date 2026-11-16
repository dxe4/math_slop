# Count permutations commuting with a cycle

*Hard · [Abstract algebra problems](index.md)*

How many permutations in $S_4$ commute with $\sigma=(1\ 2\ 3)$?

```answer
{"answer":{"kind":"integer","expected":3,"checker_scope":"Exact stated finite group, polynomial or field answer only; optional personal reasoning is not graded."}}
```

<details>
<summary>Hint 1</summary>

A commuting map must preserve the fixed-point set and the orbit of the cycle.

</details>

<details>
<summary>Hint 2</summary>

Once the image of one point in the three-point orbit is chosen, commutation forces the remaining images.

</details>

<details>
<summary>Worked solution</summary>

Commutation constrains the image on each orbit rather than permitting arbitrary relabelling.

1. If $\tau\sigma=\sigma\tau$, then $\tau$ sends a fixed point of $\sigma$ to a fixed point. The unique fixed point is $4$, so $\tau(4)=4$.
2. The other three points form one orbit. Choosing $\tau(1)$ among them determines $\tau(2)=\sigma\tau(1)$ and $\tau(3)=\sigma^2\tau(1)$.
3. This gives at most three possibilities, precisely the restrictions of $e,\sigma,\sigma^2$.
4. Each of those powers commutes with $\sigma$ and fixes $4$.
5. There are exactly $3$ commuting permutations.

</details>
