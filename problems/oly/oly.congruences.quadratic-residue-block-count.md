# Combine modular roots with an endpoint count

*Medium · [Original olympiad-style problems](index.md)*

How many integers $n$ in $1\leq n\leq100$ make $n^2+n+1$ divisible by seven?

```answer
{"answer":{"kind":"integer","expected":"29","checker_scope":"Exact short answer only; the complete argument remains a worked solution, not an automatically certified proof or contest result."}}
```

<details>
<summary>Hint 1</summary>

A quadratic congruence has at most two roots modulo a prime.

</details>

<details>
<summary>Hint 2</summary>

Find those roots, then count how often their classes occur in the given finite interval.

</details>

<details>
<summary>Worked solution</summary>

A complete modular root list converts the count to short arithmetic progressions.

1. Modulo seven the polynomial vanishes at residues two and four. Because it is a nonzero quadratic over a field, there are no further roots.
2. The interval through $98$ contains fourteen full seven-term blocks, contributing $28$ solutions.
3. The last two integers have residues one and two, contributing one more. The count is $29$.

</details>
