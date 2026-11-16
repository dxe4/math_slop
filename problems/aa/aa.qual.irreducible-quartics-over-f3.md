# Count irreducible polynomials through full Frobenius orbits

*Medium · [Abstract algebra problems](index.md)*

How many monic irreducible degree-$4$ polynomials are there over F3? Count polynomials, not their individual roots.

```answer
{"answer":{"kind":"integer","expected":"18","checker_scope":"Exact requested finite invariant only. Graduate algebra reasoning, classification hypotheses and proofs are supplied for personal study and are not automatically certified. This new skill does not expand any existing objective contract."}}
```

<details>
<summary>Hint 1</summary>

In F81, proper subfield degrees dividing four are one and two.

</details>

<details>
<summary>Hint 2</summary>

Each full-degree element has a Frobenius orbit containing four distinct roots of one polynomial.

</details>

<details>
<summary>Worked solution</summary>

Removing smaller subfields and quotienting by orbit size counts minimal polynomials.

1. All roots of irreducible quartics over F3 lie in F81. The elements of smaller degree lie in F9, which already contains F3.
2. Thus 81-9=72 elements have degree exactly four over F3.
3. Each monic irreducible quartic contributes four distinct such roots, and different minimal polynomials have disjoint root sets. The number is 72/4=18.

</details>
