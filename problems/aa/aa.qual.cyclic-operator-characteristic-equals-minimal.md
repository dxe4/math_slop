# Prove a cyclicity criterion through invariant factors

*Medium · [Abstract algebra problems](index.md)*

For a linear operator T on a nonzero finite-dimensional vector space over a field F, prove T has a cyclic vector if and only if its characteristic and minimal polynomials agree. You may use the invariant-factor decomposition over $F[t]$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

The largest invariant factor is the minimal polynomial, and their product is the characteristic polynomial.

</details>

<details>
<summary>Hint 2</summary>

A cyclic vector means the module needs only one cyclic summand.

</details>

<details>
<summary>Model proof</summary>

Divisibility-ordered module factors make the two polynomial degrees detect cyclicity.

1. Write the nonzero module as a direct sum of F\[t\]/(d\_i), with nonconstant monic invariant factors in divisibility order. Their product is the characteristic polynomial and the largest is the minimal polynomial.
2. If these polynomials agree, the product of all preceding invariant factors is one. Since any such factor would have positive degree, there can be no preceding summand, and the module is cyclic.
3. Conversely a cyclic vector gives a single summand F\[t\]/(d), whose multiplication operator has both characteristic and minimal polynomial d.

**Self-assessment rubric**

- State correctly how the two polynomials arise from the invariant factors.
- Use nonconstant factor degrees to deduce a single summand.
- Connect a cyclic vector with the one-summand module and both polynomials.

</details>
