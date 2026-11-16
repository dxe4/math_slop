# Determine a quartic Galois group from two squarefree reduction types

*Hard · [Abstract algebra problems](index.md)*

A monic irreducible quartic f in Z\[X\] has squarefree reductions at two good primes with factor-degree patterns $4$ and 1+3. Using the Frobenius cycle-type theorem, find the order of its Galois group over Q.

```answer
{"answer":{"kind":"integer","expected":"24","checker_scope":"Exact requested finite invariant only. Graduate algebra reasoning, classification hypotheses and proofs are supplied for personal study and are not automatically certified. This new skill does not expand any existing objective contract."}}
```

<details>
<summary>Hint 1</summary>

The reductions force a four-cycle and a three-cycle in the root permutation group.

</details>

<details>
<summary>Hint 2</summary>

An order-twelve subgroup of S4 has index two and is A4.

</details>

<details>
<summary>Worked solution</summary>

Cycle types exclude the only smaller order compatible with both element orders.

1. The Frobenius cycle-type theorem supplies elements of orders four and three in the Galois subgroup G of S4. Thus its order is divisible by twelve and divides twenty-four, so it is twelve or twenty-four.
2. If its order were twelve, it would be the index-two subgroup A4: any nontrivial homomorphism S4 to C2 sends all conjugate transpositions to the nonidentity element, so its kernel is the sign kernel.
3. But a four-cycle is odd and cannot lie in A4. Hence G is S4 and has order twenty-four.

</details>
