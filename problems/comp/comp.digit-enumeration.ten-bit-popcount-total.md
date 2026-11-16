# Sum binary one-counts

*Medium · [Computational arithmetic problems](index.md)*

Let $w(n)$ count the ones in the base-two representation of $n$. Find $\sum_{n=0}^{1023}w(n)$.

```answer
{"answer":{"kind":"integer","expected":"5120","checker_scope":"Exact requested integer only; no learner program or unrestricted proof is executed or certified."}}
```

<details>
<summary>Hint 1</summary>

These integers exhaust all fixed-width ten-bit strings.

</details>

<details>
<summary>Hint 2</summary>

Each bit position is one for exactly half of the strings.

</details>

<details>
<summary>Worked solution</summary>

Binary positional symmetry handles the entire finite range at once.

1. There are $1024=2^{10}$ strings of length ten, including leading zeros.
2. For a fixed bit position, the other nine bits vary freely, giving $2^9=512$ strings with a one there.
3. Summing over ten positions gives $10\cdot512=5120$.

</details>
