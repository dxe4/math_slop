# Interpret a finite difference as a surjection count

*Hard · [Original Putnam-style training](index.md)*

Evaluate $\sum_{k=0}^{6}(-1)^k\binom6k k^6$.

```answer
{"answer":{"kind":"integer","expected":"720","checker_scope":"Exact requested bounded value only; a correct numerical answer does not certify the full university-level argument or a contest result."}}
```

<details>
<summary>Hint 1</summary>

Inclusion-exclusion counts functions onto a six-element target.

</details>

<details>
<summary>Hint 2</summary>

A surjection between two sets of the same finite size must be a bijection.

</details>

<details>
<summary>Worked solution</summary>

A function-counting interpretation explains the alternating cancellation.

1. The number of surjections from a six-element set to a six-element set is $\sum_{m=0}^6(-1)^m\binom6m(6-m)^6$.
2. Putting k=6-m turns this into the displayed sum because six is even.
3. Every surjection here is a bijection, so the answer is $6!=720$.

</details>
