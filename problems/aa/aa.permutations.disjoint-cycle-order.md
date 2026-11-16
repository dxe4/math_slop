# Synchronize disjoint cycles

*Easy · [Abstract algebra problems](index.md)*

Find the order of $(1\ 2\ 3\ 4)(5\ 6\ 7)$ in $S_7$.

```answer
{"answer":{"kind":"integer","expected":12,"checker_scope":"Exact stated finite group, polynomial or field answer only; optional personal reasoning is not graded."}}
```

<details>
<summary>Hint 1</summary>

Disjoint cycles return independently to their starting positions.

</details>

<details>
<summary>Hint 2</summary>

The full permutation returns when both cycle lengths divide the exponent.

</details>

<details>
<summary>Worked solution</summary>

The order of a disjoint-cycle product is the least common multiple of the cycle lengths.

1. The first cycle has length $4$ and the second has length $3$.
2. A power is the identity precisely when its exponent is divisible by both lengths.
3. The least positive such exponent is $\operatorname{lcm}(4,3)=12$.

</details>
