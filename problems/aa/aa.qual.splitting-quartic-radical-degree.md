# Compute a splitting-field degree through a real radical tower

*Medium · [Abstract algebra problems](index.md)*

Find the degree over Q of the splitting field of $X^4-2$.

```answer
{"answer":{"kind":"integer","expected":"8","checker_scope":"Exact requested finite invariant only. Graduate algebra reasoning, classification hypotheses and proofs are supplied for personal study and are not automatically certified. This new skill does not expand any existing objective contract."}}
```

<details>
<summary>Hint 1</summary>

Adjoin a positive real fourth root first.

</details>

<details>
<summary>Hint 2</summary>

Its real field cannot contain i, which is required for the remaining roots.

</details>

<details>
<summary>Worked solution</summary>

Irreducibility gives one tower factor and realness gives the second exactly.

1. Let alpha be the positive fourth root of two. Eisenstein at two makes X^4-2 irreducible, so Q(alpha) has degree four over Q.
2. The splitting field is Q(alpha,i), since its roots are alpha,-alpha,i alpha,-i alpha. The real field Q(alpha) does not contain i.
3. Thus adjoining i has degree two, and the splitting-field degree is eight.

</details>
