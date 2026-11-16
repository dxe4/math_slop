# Count submodules of a cyclic primary module

*Hard · [Abstract algebra problems](index.md)*

Let T be one nilpotent Jordan block of size $4$ over F3. How many T-invariant vector subspaces of F3^4 exist, including zero and the whole space?

```answer
{"answer":{"kind":"integer","expected":"5","checker_scope":"Exact requested finite invariant only. Graduate algebra reasoning, classification hypotheses and proofs are supplied for personal study and are not automatically certified. This new skill does not expand any existing objective contract."}}
```

<details>
<summary>Hint 1</summary>

Use the cyclic F3\[t\]-module F3\[t\]/(t^4).

</details>

<details>
<summary>Hint 2</summary>

Submodules correspond to ideals lying between (t^4) and the whole polynomial ring.

</details>

<details>
<summary>Worked solution</summary>

A cyclic primary module has a chain of invariant submodules rather than arbitrary subspaces.

1. View the space as F3\[t\]/(t^4), with multiplication by t representing T. Invariant vector subspaces are exactly its F3\[t\]-submodules.
2. Their inverse images in the PID F3\[t\] are ideals containing (t^4), so their monic generators are divisors 1,t,t^2,t^3,t^4.
3. These give five distinct invariant subspaces, one of each dimension from zero through four.

</details>
