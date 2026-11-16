# Use parity and the total size to force every fiber size

*Medium · [Original olympiad-style problems](index.md)*

How many functions from a fixed $6$-element set onto a fixed three-element set have every fiber of positive even size?

```answer
{"answer":{"kind":"integer","expected":"90","checker_scope":"Exact requested finite count, sharp bound or declared move vector only. The full combinatorial argument is a worked model, not an automatically checked proof; this new skill changes no existing objective contract."}}
```

<details>
<summary>Hint 1</summary>

All three fibers are nonempty and even, so first constrain their sizes.

</details>

<details>
<summary>Hint 2</summary>

The output labels distinguish which fiber is chosen first, second and third.

</details>

<details>
<summary>Worked solution</summary>

A lower bound on each fiber forces an equal-size allocation.

1. Each of the three positive even fiber sizes is at least two, and their total is six, so all are exactly two.
2. Choose the two preimages of the first output in fifteen ways, then the two preimages of the second from the remaining four in six ways.
3. The third fiber is forced, giving ninety functions; there is no division by permutations of the named outputs.

</details>
