# Surjection five to three

*Medium · [Original Putnam-style training](index.md)*

How many surjections are there from a labelled $5$-element set onto a labelled $3$-element set?

```answer
{"answer":{"kind":"integer","expected":"150","checker_scope":"Only the exact bounded answer is checked; the argument and assumptions are not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Use inclusion–exclusion on omitted target labels.

</details>

<details>
<summary>Hint 2</summary>

Count functions using at most two and at most one target values.

</details>

<details>
<summary>Worked solution</summary>

This is $243-96+3=150$.

1. All functions number $3^5$. For each specified omitted target, $2^5$ functions remain; for each pair omitted, $1^5$ remains.
2. Inclusion–exclusion gives $3^5-\binom31 2^5+\binom32 1^5$.
3. This is $243-96+3=150$.

</details>
